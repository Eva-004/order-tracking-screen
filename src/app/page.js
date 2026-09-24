import HomePage from "@/components/HomePage";
import Image from "next/image";

export default async function Home() {
  const res = await fetch("http://localhost:3000/data.json");
  const products = await res.json();
  return (
   <>
   <HomePage products={products}/>
   </>
  );
}
