"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import ReactQuill from "react-quill";
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
import { CldUploadButton } from "next-cloudinary";
import { useCreateBlog, useGetBlog } from "@/services/blog.service";
import { toast } from "@/hooks/use-toast";
import { TableDemo } from "./ui/tableComponent";
import { Loader2 } from "lucide-react";
import { useQueryClient } from "@tanstack/react-query";

const BackendBlog = () => {
  const { mutate, isPending } = useCreateBlog();
  const queryClient = useQueryClient();

  const formSchema = z.object({
    title: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    shortDescription: z.string().min(10, {
      message: "Phone number must be exactly 10 characters.",
    }),
    image: z.array(z.string()).min(1, {
      message: "Image is required",
    }),
    description: z.string().min(20, {
      message: "description shall be more than 20 characters.",
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      shortDescription: "",
      description: "",
      image: [],
    },
  });

  const onSubmit = () => {
    const payload = { ...form.getValues() };
    mutate(payload, {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["blog"],
        });
        form.reset();
        toast({
          variant: "success",
          title: "Blog Created successfully",
        });
      },
      onError: () => {
        toast({
          variant: "destructive",
          title: "Error creating blog",
        });
      },
    });
  };

  const { data, isFetching } = useGetBlog();

  return (
    <div className="w-[50rem] flex flex-col justify-center mt-10 m-auto gap-4  ">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Blog Title</FormLabel>
                <FormControl>
                  <Input placeholder="Title" className="py-4" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="shortDescription"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Short description (under 100 words)</FormLabel>
                <FormControl>
                  <Input
                    maxLength={100}
                    className="py-4"
                    placeholder="Short description"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Image</FormLabel>
                <FormControl>
                  <Button
                    variant="secondary"
                    className="w-[10rem]"
                    onClick={(e) => e.preventDefault()}>
                    <CldUploadButton
                      uploadPreset="njqfzuge"
                      {...field}
                      onSuccess={(result) => {
                        const url = (result?.info as any)?.url;
                        if (url) {
                          form.setValue("image", [
                            ...form.getValues().image,
                            url,
                          ]);
                        }
                      }}
                      className="w-full"
                    />
                  </Button>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* ReactQuill integration */}
          <FormField
            control={form.control}
            name="description"
            render={() => (
              <FormItem>
                <FormLabel>Content</FormLabel>
                <ReactQuill
                  theme="snow"
                  value={form.getValues().description}
                  onChange={(content) => form.setValue("description", content)} // Track value changes
                />
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

      <div className="w-full overflow-hidden">
        <TableDemo
          data={data}
          tableCap={`${isFetching ? "Loading..." : "All Blogs"}`}
          tableHead={[
            "Image",
            "Title",
            "Short Description",
            "Description",
            "actions",
          ]}
        />
      </div>
    </div>
  );
};

export default BackendBlog;
