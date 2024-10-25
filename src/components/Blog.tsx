import Image from "next/image"

const Blog = () => {
  return (
    <>
    <div className="container relative flex flex-col justify-between h-full max-w-[68rem] px-10 mx-auto xl:px-0 mt-5">
    <div className="flex">
      <Image src="" alt="" width={500} height={500} />
       <h5>Maa Kali Hardware <span>{new Date().getFullYear()}</span></h5>
       <h1></h1>
       <h2></h2>
       <p className="flex flex-col"><Image src="" alt="" width={100} height={100}/> Maa kali Hardware <span>Hardware</span></p>
    </div>
     </div>
    </>
  )
}

export default Blog