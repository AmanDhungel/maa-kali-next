'use client'
import React from 'react'
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
import { toast } from '@/hooks/use-toast';
import { useCreateService, useGetService } from '@/services/service.service';
import { ServiceTable } from './ui/serviceTable';
import {  useQueryClient } from '@tanstack/react-query';
import { Loader2 } from 'lucide-react';
 


const BackendService = () => {
  const queryClient = useQueryClient();
    const { handleSubmit } = useForm();
    const{ mutate, isPending } = useCreateService();



    const formSchema = z.object({
        title: z.string().min(2, {
          message: "Username must be at least 2 characters.",
        }),
        description: z.string().min(10).max(10, {
          message: "description number must be exactly 10 characters.",
        }),
     
      })
    
      const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            description: "",
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
                predicate: query => query.queryKey[0] === 'service',
              })
          },
          onError: (err) => {
              console.log('error', err);
              toast({
                variant:"destructive",
                title: err.response.data.message? err.response.data.message  : err.message,
            });
          },
      });
      };

      const {data: serviceData} = useGetService();


  return (
    <div className='w-[50rem] flex flex-col justify-center mt-10 m-auto gap-4 mb-[20rem]'> 
    <Form {...form}>
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
      <FormField
        control={form.control}
        name="title"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Service Title</FormLabel>
            <FormControl>
              <Input placeholder="Title" className='py-4' {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormItem>
        <FormLabel>Content</FormLabel>
        <ReactQuill
          theme="snow"
          value={form.getValues('description')}
          onChange={(content) => form.setValue('description', content)} 
        />
       <FormMessage/>
      </FormItem>
      <Button type="submit" className='mt-4' disabled={isPending}>
        {isPending ? <><Loader2 className='animate-spin'/> Submitting</> : 'Submit'}
        </Button>
    </form>
    </Form>
    <ServiceTable data={serviceData} tableHead={["title", "description", 'actions']} />
    </div>
  )
}

export default BackendService