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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
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
  const { mutate, isPending } = useCreateProduct();
  const queryClient = useQueryClient();
  const [color, setColor] = useState("#fff");

  const formSchema = z.object({
    title: z.string().min(2, {
      message: "Title must be at least 2 characters.",
    }),
    price: z.string().min(1, {
      message: "Price is required",
    }),
    brand: z.string().min(1, {
      message: "brand is required",
    }),
    choice: z.string().min(1, {
      message: "Warrenty or guarantee is required",
    }),
    years: z.string().min(1, {
      message: "Guarantee/Warranty years is required",
    }),
    image: z.array(z.string()).min(1, {
      message: "There must be at least One image.",
    }),
    description: z.string().min(10, {
      message: "Description must be more than 10 characters.",
    }),
    color: z.string().min(1, {
      message: "Color cannot be empty.",
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
      brand: "",
      choice: "",
      years: "",
    },
  });

  const onSubmit = () => {
    const payload = { ...form.getValues() };

    mutate(payload as any, {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["product"],
        });
        form.reset();
        toast({
          variant: "success",
          title: "Product Created successfully",
        });
      },
      onError: () => {
        toast({
          variant: "destructive",
          title: "Error creating product",
        });
      },
    });
  };

  const { data, isFetching } = useGETProduct();

  return (
    <div className="w-[50rem] flex flex-col justify-center mt-10 m-auto gap-4  ">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Enter title" />
                </FormControl>
                <FormMessage></FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="brand"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Brand</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Enter Brand Name" />
                </FormControl>
                <FormMessage></FormMessage>
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
            render={() => (
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
            name="choice"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Warranty/Guarrenty</FormLabel>
                <FormControl>
                  <RadioGroup
                    value={field?.value}
                    onValueChange={field?.onChange}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Warranty" id="warranty" />
                      <Label htmlFor="Warranty">Warranty</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Guarantee" id="guarantee" />
                      <Label htmlFor="Guarantee">Guarantee</Label>
                    </div>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="years"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Years</FormLabel>
                <FormControl>
                  <Select value={field?.value} onValueChange={field?.onChange}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Years" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0">0</SelectItem>
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3">3</SelectItem>
                      <SelectItem value="4">4</SelectItem>
                      <SelectItem value="5">5</SelectItem>
                      <SelectItem value="6">6</SelectItem>
                      <SelectItem value="7">7</SelectItem>
                      <SelectItem value="8">8</SelectItem>
                      <SelectItem value="9">9</SelectItem>
                      <SelectItem value="10">10</SelectItem>
                      <SelectItem value="Life Time">Life Time</SelectItem>
                    </SelectContent>
                  </Select>
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
            name="image"
            render={() => (
              <FormItem>
                <FormLabel>Description of Product</FormLabel>
                <ReactQuill
                  theme="snow"
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
        <ProductTableComponent
          data={data}
          tableCap={`${isFetching ? "Loading..." : "All Products"}`}
          tableHead={[
            "Image",
            "Title",
            "Price",
            "Choice",
            "Years",
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
