import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { Eraser, Trash2 } from "lucide-react";
    
  export function TableDemo({data, ...props}) {

    return (
      <Table className="overflow-hidden">
        <TableCaption>{props.tableCap}</TableCaption>
        <TableHeader>
          <TableRow>
          {props.tableHead.map((data, index) => 
            <TableHead key={index} className={index === props.tableHead.length - 1 ? "text-right" : ``}>{data}</TableHead>
          )} 

          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((tableData) => (
            <TableRow key={tableData._id}>
              <TableCell className="font-medium">
                <img src={tableData.image[0]} alt="logo" width={40} height={40}/>
              </TableCell>
              <TableCell>{tableData.title}</TableCell>
              <TableCell>{tableData.shortDescription}</TableCell>
              <TableCell  dangerouslySetInnerHTML={{__html: tableData.description}}></TableCell>
                <TableCell>
                    <div className="relative group cursor-pointer">
                    <Eraser />
                    <span className="absolute left-1/2 transform -translate-x-[70%] mt-2 w-max bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100">
                        Edit
                    </span>
                    </div>
                </TableCell>
                <TableCell onClick={props.handleOnDelete(data._id)}>
                    <div className="relative group cursor-pointer">
                    <Trash2/>
                    <span className="absolute z-50 left-1/2 transform -translate-x-[25px] mt-2 w-max bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100">
                        Delete
                    </span>
                    </div>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }