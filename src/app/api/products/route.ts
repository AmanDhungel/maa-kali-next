import Product from "../model/Product.model";
export async function GET() {
  try {
    const product = await Product.find();
    return new Response(JSON.stringify(product), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Product Could not be Created", error }),
      {
        status: 500,
      }
    );
  }
}

export async function POST(req: Request) {
  const { price, title, description, image, color } = await req.json();
  try {
    const newProduct = new Product({ price, title, description, image, color });
    await newProduct.save();

    return new Response(
      JSON.stringify({ message: "Product Created Successfully" }),
      {
        status: 201,
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Product Could not be Created", error }),
      {
        status: 500,
      }
    );
  }
}
