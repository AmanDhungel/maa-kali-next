import React from 'react'
import {
      Form,
      FormControl,
      FormField,
      FormItem,
      FormLabel,
      FormMessage,
    } from "@/components/ui/form"
import { Button } from './ui/button'
import { CldUploadButton } from 'next-cloudinary'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const BackendPhotoGallery = () => {
    const { handleSubmit } = useForm();
    const formSchema = z.object({
        image: z.array(z.string()).min(1, {
          message: "Select at least one image.",
        }),
      })
    
      const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            image: [],
        },
      })

      const onSubmit = () => {
        const payload = {...form.getValues()};
        mutate(payload, {
            onSuccess: (val) => {
                console.log(val);
                form.reset();
                toast({
                    variant:"success",
                    title: "Service Created successfully",
                });
  
                queryClient.invalidateQueries({
                  queryKey: ["service"],
                });
            },
            onError: (err) => {
                console.log('error', err);
                toast({
                  variant:"destructive",
                  title: err.response.data.message? err.response.data.message  : err.message,
              });
            },
        });
      }

  return (
    <Form {...form}>
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
    <FormField
    control={form.control}
    name="image"
    render={({ field }) => (
      <FormItem className='flex flex-col'>
        <FormLabel>Image</FormLabel>
        <FormControl>
          <Button variant="secondary" className='w-[10rem]' onClick={(e) => e.preventDefault()} >
           <CldUploadButton uploadPreset="njqfzuge" {...field} onSuccess={(result) => form.setValue('image', [...form.getValues().image, result.info.url] )} className='w-full'/>
          </Button>
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
    </form>
</Form>
  )
}

export default BackendPhotoGallery