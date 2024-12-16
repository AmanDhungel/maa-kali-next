"use client";
import React, { useState } from "react";
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
import { toast } from "@/hooks/use-toast";
import { useQueryClient } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { useCreateProduct, useGETProduct } from "@/services/product.service";
import ColorPicker from "react-pick-color";
import { ProductTableComponent } from "./productTableComponent";

const BackendProduct = () => {
  const { handleSubmit } = useForm();
  const { mutate, isPending } = useCreateProduct();
  const queryClient = useQueryClient();
  const [color, setColor] = useState("#fff");

  const formSchema = z.object({
    title: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    price: z.string().min(1, {
      message: "Price number must be exactly 10 characters.",
    }),
    image: z.array(z.string()).min(1, {
      message: "Select the subject you want equire about, it cannot be empty.",
    }),
    description: z.string().min(10, {
      message: "description shall be more than 20 characters.",
    }),
    color: z.string().min(1, {
      message: "color shall be not be empty.",
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      price: "",
      description: "",
      image: [],
      color: "",
    },
  });

  const onSubmit = () => {
    const payload = { ...form.getValues() };
    mutate(payload, {
      onSuccess: (val) => {
        queryClient.invalidateQueries({
          queryKey: ["blog"],
        });
        console.log(val);
        form.reset();
        toast({
          variant: "success",
          title: "Blog Created successfully",
        });
      },
      onError: (err) => {
        console.log("error", err);
        toast({
          variant: "destructive",
          title: err.response.data.message
            ? err.response.data.message
            : err.message,
        });
      },
    });
  };

  console.log("form values from submit", form.getValues());

  const { data, isFetching } = useGETProduct();

  console.log("data", data);
  return (
    <div className="w-[50rem] flex flex-col justify-center mt-10 m-auto gap-4  ">
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
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
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price</FormLabel>
                <FormControl>
                  <Input
                    maxLength={100}
                    className="py-4"
                    placeholder="Price"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="color"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Color</FormLabel>
                <FormControl>
                  <ColorPicker
                    color={color}
                    onChange={(color) => {
                      setColor(color.hex);
                      form.setValue("color", color.hex);
                    }}
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
                      onSuccess={(result) =>
                        form.setValue("image", [
                          ...form.getValues().image,
                          result?.info?.url,
                        ])
                      }
                      className="w-full"
                    />
                  </Button>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* ReactQuill integration */}
          <FormItem>
            <FormLabel>Description of Product</FormLabel>
            <ReactQuill
              theme="snow"
              onChange={(content) => form.setValue("description", content)} // Track value changes
            />
            <FormMessage />
          </FormItem>

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
        <ProductTableComponent
          data={data}
          tableCap={`${isFetching ? "Loading..." : "All Products"}`}
          tableHead={[
            "Image",
            "Title",
            "Price",
            "Description",
            "Color",
            "actions",
          ]}
        />
      </div>
    </div>
  );
};

export default BackendProduct;
