import { useToast } from "@/hooks/use-toast";
import { useCreateContact } from "@/services/contact.service"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";



export const useContact = () => {
const  {mutate, isPending} = useCreateContact();
const { toast } = useToast();


const formSchema = z.object({
    name: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    phonenumber: z.string().min(10).max(10, {
      message: "Phone number must be exactly 10 characters.",
    }),
    subject: z.string().min(2, {
      message: "Select the subject you want equire about, it cannot be empty.",
    }),
    message: z.string().min(20, {
      message: "message shall be more than 20 characters.",
    }),
  })

 const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        name: "",
        phonenumber: "",
        subject: "",
        message: "",
    },
  })

const onSubmit = () => {
    const payload = {
        ...form.getValues()
    }

    mutate(payload, {
        onSuccess: (val) => {
            console.log(val);
            form.reset();
            toast({
                title: "Message sent successfully",
            });
        },
        onError: (err) => {
            console.log('error', err);
        },
    });
}

return {
    form,
    onSubmit,
    isPending,
  };
}