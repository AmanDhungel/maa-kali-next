import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  type Data = {
    title?: string
    description?: string
  }

  export function ServiceAccordion({ className, data }: { data?: Data[]; className?: string }) {
    return (
      <Accordion type="single" collapsible className={`${className} w-full`}>
        {data?.map((item, index) => (
        <AccordionItem value={`item-${index}`} key={index}>
            
          <AccordionTrigger>
            {item?.title}
         </AccordionTrigger>
          <AccordionContent>
          <h2 className="text-gray-400 text-[12px] mb-3">Maa kali Hardware - Radhe Radhe</h2>
          {item?.description}
          </AccordionContent>
        </AccordionItem>
        ))}
      </Accordion>
    )
  }
  