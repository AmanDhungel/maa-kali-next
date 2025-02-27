"use client";
import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "./ui/button";
import { CldUploadButton } from "next-cloudinary";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateGallery, useGetGallery } from "@/services/gallery.service";
import { toast } from "@/hooks/use-toast";
import { useQueryClient } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { TableImage } from "./ui/imageTable";

const BackendPhotoGallery = () => {
  const { handleSubmit } = useForm();
  const { mutate, isPending } = useCreateGallery();
  const { data, isLoading } = useGetGallery();
  const queryClient = useQueryClient();
  const formSchema = z.object({
    image: z.array(z.string()).min(1, {
      message: "Select at least one image.",
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      image: [],
    },
  });

  const onSubmit = () => {
    const payload = { ...form.getValues() };
    if (payload.image.length === 0) {
      return toast({
        variant: "destructive",
        title: "No image selected",
      });
    }

    console.log("payload", payload.image);
    mutate({ ...form.getValues() } as any, {
      onSuccess: (val: any) => {
        console.log("val", val);
        queryClient.invalidateQueries({
          queryKey: ["gallery"],
        });
        toast({
          variant: "success",
          title: "Image Added to Gallery",
        });
        form.reset();
      },
      onError: (err: any) => {
        console.log("err", err);
        toast({
          variant: "destructive",
          title: "Image not added to Gallery",
        });
      },
    });
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center h-[50vh]">
        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="text-2xl underline underline-offset-[10px] mb-10 ml-2">
                    Upload Image to the Gallery
                  </FormLabel>
                  <FormControl>
                    <Button
                      variant="secondary"
                      className="w-[20rem]"
                      onClick={(e) => e.preventDefault()}>
                      <CldUploadButton
                        uploadPreset="njqfzuge"
                        {...field}
                        onSuccess={(result) => {
                          console.log("url", result);
                          const url = (result?.info as any)?.url;
                          if (url) {
                            form.setValue("image", [
                              ...form.getValues("image"),
                              url,
                            ]);
                          }
                        }}
                      />
                    </Button>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="mt-4" disabled={isPending}>
              {isPending ? (
                <>
                  <Loader2 className="animate-spin" /> Submitting
                </>
              ) : (
                "Submit"
              )}
            </Button>
          </form>
        </Form>
      </div>
      <div className="w-[20rem] justify-center items-center m-auto">
        {isLoading ? (
          <div className="flex justify-center">
            <Loader2 className="animate-spin" /> loading
          </div>
        ) : (
          <TableImage data={data as any} tableHead={["Image", "Action"]} />
        )}
      </div>
    </>
  );
};

export default BackendPhotoGallery;
