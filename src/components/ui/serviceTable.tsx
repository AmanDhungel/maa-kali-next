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
import { useQueryClient } from "@tanstack/react-query";
import { Eraser, Trash2 } from "lucide-react";
import AlertDailog from "../AlertDailog";
import { useDeleteService } from "@/services/service.service";
import Image from "next/image";

export function ServiceTable({
  data,
  ...props
}: {
  data: any;
  tableCap?: string;
  tableHead?: string[];
}) {
  const queryClient = useQueryClient();

  const { mutate } = useDeleteService();

  const handleDelete = (id: any) => {
    mutate(id, {
      onSuccess: (val) => {
        queryClient.invalidateQueries({
          queryKey: ["service"],
        });
        toast({
          variant: "success",
          title: val.message,
        });
      },

      onError: () => {
        toast({
          variant: "destructive",
          title: "Error deleting service",
        });
      },
    });
  };

  return (
    <Table className="w-1000px overflow-hidden">
      <TableCaption>
        {!data || data?.length < 1 ? "No Data Found" : props.tableCap}
      </TableCaption>
      <TableHeader>
        <TableRow>
          {props.tableHead &&
            props.tableHead.map((data, index) => (
              <TableHead key={index}>{data}</TableHead>
            ))}
        </TableRow>
      </TableHeader>
      <TableBody className="w-full text-wrap">
        {/* {!data && data?.length < 1 ?
           "No Data Found"
          :  */}
        {data?.map((tableData: any) => (
          <TableRow key={tableData._id} className="text-wrap w-10">
            <TableCell className="w-[10rem] text-wrap">
              <Image
                src={tableData.image}
                width={200}
                height={200}
                alt="Maa Kali Hardware"
                className="w-[12rem] h-[12rem] overflow-hidden overflow-ellipsis"
              />
            </TableCell>
            <TableCell className="w-[10rem] text-wrap">
              <p className="w-[12rem] overflow-hidden overflow-ellipsis">
                {tableData.title}
              </p>
            </TableCell>
            <TableCell className="w-[8rem] text-wrap ">
              <p
                className="flex w-[16rem]  overflow-hidden  hide-scrollbar"
                dangerouslySetInnerHTML={{ __html: tableData.description }}></p>
            </TableCell>
            <TableCell className="flex justify-center items-center gap-2">
              <div className="flex gap-2 mt-[50%]">
                <Eraser />
                <span className="absolute z-50 left-1/2 transform -translate-x-[70%] mt-2 w-max bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100">
                  Edit
                </span>
              </div>
              <div className="relative group cursor-pointer mt-[50%]">
                <AlertDailog
                  title="delete this data"
                  text={<Trash2 />}
                  onContinue={() => handleDelete(String(tableData._id))}
                />
                <span
                  className="absolute z-50 left-1/2 transform translate-y-10 -translate-x-[25px] mt-2 w-max bg-black text-white 
                    text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100">
                  Delete
                </span>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
