import Product from "../../model/Product.model";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const product = await Product.findByIdAndDelete(params.id);

    if (!product) {
      return new Response(JSON.stringify({ message: "Product not found" }), {
        status: 404,
      });
    }

    return new Response(
      JSON.stringify({ message: "Product Deleted Successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("error", error);
    return new Response(
      JSON.stringify({ message: "Something went wrong", error }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
