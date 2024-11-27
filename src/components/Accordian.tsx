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

  

  export function ServiceAccordion({ className, data }: { data?: Data[]; className?: string }): JSX.Element {

    return (
      <Accordion type="single"  collapsible className={`${className} w-[30rem] p-3`}>
        {data?.map((item, index) => (
        <AccordionItem  value={`item-${index}`} key={index}>
          <AccordionTrigger>
            <p className="w-[10rem] overflow-hidden text-start overflow-ellipsis">{item?.title}</p>
         </AccordionTrigger>
          <AccordionContent>
          <h2 className="text-gray-400 text-[12px] mb-3">Maa kali Hardware - Radhe Radhe</h2>
          <p dangerouslySetInnerHTML={{__html: item?.description}}></p>
          </AccordionContent>
        </AccordionItem>
        ))}
      </Accordion>
    )
  }
  
