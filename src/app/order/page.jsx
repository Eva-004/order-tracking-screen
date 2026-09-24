import React from "react";
import Image from "next/image";
import { Button } from "@heroui/react";
import Link from "next/link";
import products from "@/data/data";

const OrderPage = async ({ searchParams }) => {
  const { id } = await searchParams;


  const product = products.find(
    (item) => item.id === Number(id)
  );

  return (
    <main className="min-h-screen bg-white py-4 md:py-8 text-black">
      <div className="mx-auto min-h-screen w-full max-w-[430px] rounded-3xl border-x border-gray-600 px-4 py-8">

        <div className="mb-10 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-black text-3xl font-bold text-white">
            ✓
          </div>

          <h1 className="text-2xl font-bold">
            Order Confirmed
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Your order has been placed successfully.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-4">
          <div className="flex items-center gap-4">

            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-gray-100">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="80px"
                className="object-cover"
              />
            </div>

            <div className="min-w-0 flex-1">
              <h2 className="truncate text-base font-semibold">
                {product.name}
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Qty: 1
              </p>

              <p className="mt-1 text-base font-bold">
                ${product.price}
              </p>
            </div>

          </div>
        </div>

    <Link href={`/tracker?id=${product.id}`}>
    <Button
        
          size="lg"
          radius="lg"
          className="mt-6 w-full bg-black text-white font-semibold"
        >
          Track Order
        </Button>
    </Link>

      </div>
    </main>
  );
};

export default OrderPage;