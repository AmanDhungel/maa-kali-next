import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { toast } from "@/hooks/use-toast";
// import { useDeleteBlog } from "@/services/blog.service";
import { useQueryClient } from "@tanstack/react-query";
import { Eraser, Trash2 } from "lucide-react";
import AlertDailog from "./AlertDailog";
import { CarouselDemo } from "./Carousel";
import { useDeleteProduct } from "@/services/product.service";

export function ProductTableComponent({
  data,
  ...props
}: {
  data: any;
  [key: string]: any;
}) {
  const queryClient = useQueryClient();

  const { mutate } = useDeleteProduct();

  const handleDelete = (id: string) => {
    mutate(id, {
      onSuccess: (val) => {
        queryClient.invalidateQueries({
          queryKey: ["product"],
        });
        toast({
          variant: "success",
          title: val?.message,
        });
      },

      onError: () => {
        toast({
          variant: "destructive",
          title: "Error deleting product",
        });
      },
    });
  };

  return (
    <Table className="w-1000px overflow-hidden">
      <TableCaption>
        {!data || data?.length < 1 ? "No Data Found" : props?.tableCap}
      </TableCaption>
      <TableHeader>
        <TableRow>
          {props.tableHead.map((data: string, index: number) => (
            <TableHead
              key={index}
              className={
                index === props.tableHead.length - 1 ? "text-right" : ``
              }>
              {data}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody className="w-full text-wrap">
        {/* {!data && data?.length < 1 ?
           "No Data Found"
          :  */}
        {data?.map(
          (tableData: any) => (
            <TableRow key={tableData._id} className="text-wrap w-10">
              <TableCell className="font-medium">
                {tableData.image?.length >= 1 && (
                  <CarouselDemo item={tableData.image} />
                )}
              </TableCell>
              <TableCell className="w-10 text-wrap">
                <p className="w-32 overflow-hidden overflow-ellipsis">
                  {tableData.title}
                </p>
              </TableCell>
              <TableCell>
                <p className="w-12 overflow-hidden overflow-ellipsis h-10 flex items-center">
                  {tableData.price}
                </p>
              </TableCell>
              <TableCell>
                <p
                  className="flex items-center w-32 h-10 overflow-scroll hide-scrollbar"
                  dangerouslySetInnerHTML={{
                    __html: tableData.description,
                  }}></p>
              </TableCell>
              <TableCell>
                <p
                  className={`rounded-full w-4 h-4`}
                  style={{ backgroundColor: tableData.color }}></p>
              </TableCell>
              <TableCell>
                <div className="relative group cursor-pointer">
                  <Eraser />
                  <span className="absolute left-1/2 transform -translate-x-[70%] mt-2 w-max bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100">
                    Edit
                  </span>
                </div>
              </TableCell>
              <TableCell>
                <div className="relative group cursor-pointer">
                  <AlertDailog
                    title="delete this data"
                    text={<Trash2 />}
                    onContinue={() =>
                      handleDelete(String(tableData._id) as any)
                    }
                  />
                  <span
                    className="absolute z-50 left-1/2 transform translate-y-10 -translate-x-[25px] mt-2 w-max bg-black text-white
                    text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100">
                    Delete
                  </span>
                </div>
              </TableCell>
            </TableRow>
          )
          // console.log("table data", tableData)
        )}
      </TableBody>
    </Table>
  );
}
