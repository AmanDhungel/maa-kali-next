"use client";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import "react-quill/dist/quill.snow.css";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "@/hooks/use-toast";
import { useCreateService, useGetService } from "@/services/service.service";
import { ServiceTable } from "./ui/serviceTable";
import { useQueryClient } from "@tanstack/react-query";
import { Loader2, X } from "lucide-react";
import { serviceSchema } from "@/_schema/service";
import { CldUploadButton } from "next-cloudinary";
import Image from "next/image";
import { Textarea } from "./ui/textarea";

const BackendService = () => {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useCreateService();
  const [image, setImage] = React.useState<string>("");

  const form = useForm<z.infer<typeof serviceSchema>>({
    resolver: zodResolver(serviceSchema),
    defaultValues: {
      title: "",
      description: "",
      image: "",
    },
  });

  const onSubmit = () => {
    const payload = { ...form.getValues() };

    mutate(payload, {
      onSuccess: () => {
        form.reset();
        toast({
          variant: "success",
          title: "Service Created successfully",
        });

        queryClient.invalidateQueries({
          predicate: (query) => query.queryKey[0] === "service",
        });
      },
      onError: () => {
        toast({
          variant: "destructive",
          title: "Error creating service",
        });
      },
    });
  };

  const { data: serviceData } = useGetService();

  useEffect(() => {
    if (!form.getValues("image")) {
      setImage("");
    }
  }, [form.getValues("image")]);

  return (
    <div className="w-[50rem] flex flex-col justify-center mt-10 m-auto gap-4 mb-[20rem]">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <div className="flex gap-10">
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="text-2xl underline underline-offset-[10px] mb-3 ml-2">
                    Upload Image
                  </FormLabel>
                  <FormControl>
                    <Button
                      variant="secondary"
                      className="w-[20rem]"
                      onClick={(e) => e.preventDefault()}>
                      <CldUploadButton
                        uploadPreset="njqfzuge"
                        {...field}
                        options={{ maxFiles: 1 }}
                        onSuccess={(result: any) => {
                          const url =
                            (result?.info as { url: string })?.url ?? "";
                          form.setValue("image", url);
                          setImage(url);
                        }}
                      />
                    </Button>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {image.length > 0 && (
              <>
                <Image
                  src={image}
                  alt="Hardware near me"
                  width={200}
                  height={200}
                />
                <X
                  onClick={() => {
                    form.setValue("image", "");
                    setImage("");
                  }}
                  className="cursor-pointer -ml-8"
                />
              </>
            )}
          </div>

          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Service Title</FormLabel>
                <FormControl>
                  <Input placeholder="Title" className="py-4" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Content</FormLabel>
                <FormControl>
                  <Textarea placeholder="Title" className="py-4" {...field} />
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
      <ServiceTable
        data={serviceData}
        tableHead={["image", "title", "description", "actions"]}
      />
    </div>
  );
};

export default BackendService;
