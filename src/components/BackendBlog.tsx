'use client'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from "@/components/ui/button"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {
Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { CldUploadButton } from 'next-cloudinary';
 

const BackendBlog = () => {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const [quillValue, setQuillValue] = useState("");
  const [image, setImage] = useState([]);

  console.log(image)
  // Handling form submission
  const onSubmit = (data) => {
    // Add the quill value to the data
    data.content = quillValue;
    console.log(data); // Handle form data, e.g., send to API
  };

  const formSchema = z.object({
    title: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    shortDescription: z.string().min(10).max(10, {
      message: "Phone number must be exactly 10 characters.",
    }),
    Image: z.string().min(2, {
      message: "Select the subject you want equire about, it cannot be empty.",
    }),
    message: z.string().min(20, {
      message: "message shall be more than 20 characters.",
    }),
  })

 const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        title: "",
        shortDescription: "",
        Image: "",
    },
  })

  return (
    <div className='w-[50rem] flex flex-col justify-center mt-10 m-auto gap-4  '> 
    <Form {...form}>
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
      <FormField
        control={control}
        name="title"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Blog Title</FormLabel>
            <FormControl>
              <Input placeholder="Title" className='py-4' {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="shortDescription"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Short description (under 100 words)</FormLabel>
            <FormControl>
              <Input maxLength={100} className='py-4' placeholder="Short description" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="Image"
        render={({ field }) => (
          <FormItem className='flex flex-col'>
            <FormLabel>Image</FormLabel>
            <FormControl>
              <Button variant="secondary" className='w-[10rem]' onClick={(e) => e.preventDefault()} >
               <CldUploadButton uploadPreset="njqfzuge" {...field} onSuccess={(result) => setImage((prev) => [...prev, result.info.url] )}/>
              </Button>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* ReactQuill integration */}
      <FormItem>
        <FormLabel>Content</FormLabel>
        <ReactQuill
          theme="snow"
          value={quillValue}
          onChange={(content) => setQuillValue(content)} // Track value changes
        />
       <FormMessage/>
      </FormItem>

      <Button type="submit" className='mt-4'>Submit</Button>
    </form>
    </Form>
    </div>

  )
}

export default BackendBlog
