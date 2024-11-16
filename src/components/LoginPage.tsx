"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useAuth } from "@/services/login.service"
import { toast } from "@/hooks/use-toast"
import { useRouter } from "next/navigation"

const formSchema = z.object({
  email: z.string().min(2, {
    message: "email is required",
  }),
  password: z.string().min(2, {
    message: "password must be at least 7 characters.",
  }),
})

export function LoginPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

 const { mutate } = useAuth();

 const router = useRouter();
  

  const onSubmit = (data) => {
    const payload = {...form.getValues()};
     
    mutate(payload, {
      onSuccess: () => {
          form.reset();
          toast({
              variant:"success",
              title: "logged in successfully",
          });
          return router.push('/admin/blog')
      },
      onError: (err) => {
          console.log('error', err);
          toast({
            variant:"destructive",
            title: err.response.data.message ? err.response.data.message : err.message,
        });
      },
  });
}


  return (
    <div className="flex flex-col w-[30rem] m-auto mt-10">

    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input className="p-6" placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input className="p-6" type="password" placeholder="Password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
    </div>

  )
}

 
export default LoginPage;