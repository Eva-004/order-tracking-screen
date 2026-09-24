import HomePage from "@/components/HomePage";
import Image from "next/image";
import products from "@/data/data";

export default async function Home() {
 
  return (
   <>
   <HomePage products={products}/>
   </>
  );
}
