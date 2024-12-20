import React from "react";
import Banner from "./Banner";
import Product from "./Product";
import { useGETProduct } from "@/services/product.service";
import { Loader2 } from "lucide-react";

const ProductTestimonials = () => {
  const { data, isLoading } = useGETProduct();
  // const productdata = [
  //   {
  //     title: "Plumbing",
  //     color: "black",
  //     price: "20",
  //     image:
  //       "https://images.pexels.com/photos/1129019/pexels-photo-1129019.jpeg?auto=compress&cs=tinysrgb&w=600",
  //   },
  //   {
  //     title: "Plumbing",
  //     color: "white",
  //     price: "20",
  //     image:
  //       "https://images.pexels.com/photos/2220316/pexels-photo-2220316.jpeg?auto=compress&cs=tinysrgb&w=600",
  //   },
  //   {
  //     title: "Plumbing",
  //     color: "gray",
  //     price: "20",
  //     image:
  //       "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=600",
  //   },
  //   {
  //     title: "Plumbing",
  //     color: "jeans-blueish",
  //     price: "20",
  //     image:
  //       "https://images.pexels.com/photos/1304647/pexels-photo-1304647.jpeg?auto=compress&cs=tinysrgb&w=600",
  //   },
  //   {
  //     title: "Plumbing",
  //     color: "black",
  //     price: "20",
  //     image:
  //       "https://images.pexels.com/photos/1129019/pexels-photo-1129019.jpeg?auto=compress&cs=tinysrgb&w=600",
  //   },
  //   {
  //     title: "Plumbing",
  //     color: "white",
  //     price: "20",
  //     image:
  //       "https://images.pexels.com/photos/2220316/pexels-photo-2220316.jpeg?auto=compress&cs=tinysrgb&w=600",
  //   },
  //   {
  //     title: "Plumbing",
  //     color: "gray",
  //     price: "20",
  //     image:
  //       "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=600",
  //   },
  //   {
  //     title: "Plumbing",
  //     color: "jeans-blueish",
  //     price: "20",
  //     image:
  //       "https://images.pexels.com/photos/1304647/pexels-photo-1304647.jpeg?auto=compress&cs=tinysrgb&w=600",
  //   },
  //   {
  //     title: "Plumbing",
  //     color: "jeans-blueish",
  //     price: "20",
  //     image:
  //       "https://images.pexels.com/photos/1304647/pexels-photo-1304647.jpeg?auto=compress&cs=tinysrgb&w=600",
  //   },
  // ];
  return (
    <div>
      <Banner
        title="Products"
        description="Some of the Product we sell are listed Down - Take a look"
      />
      <div className="flex flex-wrap justify-center m-auto max-w-[82rem] gap-10">
        {isLoading ? (
          <div className="flex">
            <Loader2 className="animate-spin" /> Loading...
          </div>
        ) : (
          data?.map((pdata) => (
            <Product
              title={pdata.title}
              color={pdata.color}
              price={pdata.price}
              image={pdata.image}
              key={pdata._id}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ProductTestimonials;
