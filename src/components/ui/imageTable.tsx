import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { toast } from "@/hooks/use-toast";
import { useQueryClient } from "@tanstack/react-query";
import { Eraser, Trash2 } from "lucide-react";
import AlertDailog from "../AlertDailog";
import { CarouselDemo } from "../Carousel";
import { useDeleteGallery } from "@/services/gallery.service";
    
  export function TableImage({data, ...props}) {
    const queryClient = useQueryClient();
    
    const{mutate} = useDeleteGallery();

    const handleDelete = (id) => {
      mutate(id, {
        onSuccess: (val) => {
          queryClient.invalidateQueries({
            queryKey: ["gallery"],
          });
          toast({
            variant: "success",
            title: val.message,
          });
        },

        onError: (err) => {
          console.log("error", err);
          toast({
            variant: "destructive",
            title: err.response?.data?.message ? err.response.data.message : err.message,
          });
        },
      });
    };

    return ( 
      <Table className="w-1000px overflow-hidden">
        <TableCaption>{!data || data?.length < 1 ? "No Data Found" : props.tableCap}</TableCaption>
        <TableHeader>
          <TableRow>
          {props?.tableHead?.map((data, index) => 
            <TableHead key={index} className={index === props.tableHead.length - 1 ? "text-right" : ``}>{data}</TableHead>
          )} 
          </TableRow>
        </TableHeader>
        <TableBody className="w-full text-wrap">
          {/* {!data && data?.length < 1 ?
           "No Data Found"
          :  */}
           {data?.map((tableData) => {
             console.log('tableData', tableData);
            return <TableRow key={tableData._id} className="text-wrap w-10">
              <TableCell className="font-medium">
              {tableData?.image?.length > 1  && <CarouselDemo item={tableData?.image} />} 
              </TableCell>
                <TableCell 
                    >
                    <div className="relative group cursor-pointer">
                    <AlertDailog title="delete this data" 
                    text={<Trash2 />}
                     onContinue={() =>
                    handleDelete(
                      String(tableData._id) 
                    )} />
                    <span className="absolute z-50 left-1/2 transform translate-y-10 -translate-x-[25px] mt-2 w-max bg-black text-white 
                    text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100">
                        Delete
                    </span>
                    </div>
                </TableCell>
            </TableRow>
  })}
        </TableBody>
      </Table>
    )
  }