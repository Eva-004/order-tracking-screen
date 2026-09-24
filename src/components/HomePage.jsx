"use client"
import { Card, Button } from '@heroui/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FiShoppingBag } from 'react-icons/fi';

const HomePage = ({ products }) => {
    const router = useRouter();

  const handleOrder = (id) => {
    router.push(`/order?id=${id}`);
  };

  return (
    <main className="min-h-screen bg-white text-black py-4 md:py-8">
      <div className="mx-auto min-h-screen w-full max-w-[430px] border-x border-gray-600 rounded-3xl px-4 py-6">
        
        <header className="mb-6 flex items-center justify-between">
          <h1 className="text-xl font-bold">Products</h1>
          <FiShoppingBag size={21} />
        </header>

        <div className="grid grid-cols-1 gap-4">
          {products.map((product) => (
            <Card
              key={product.id}
              shadow="none"
              className="border border-black/10 bg-white overflow-hidden rounded-2xl"
            >
              <div className="p-3 flex items-center gap-4">
                <div className="relative h-20 w-20 min-w-[80px] overflow-hidden rounded-xl bg-gray-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>

                <div className="flex-1 min-w-0 pr-1 flex flex-col justify-between h-20">
                  <div>
                    <h2 className="truncate text-base font-semibold text-gray-800">
                      {product.name}
                    </h2>

                    <p className="mt-0.5 text-sm font-bold text-black">
                      ${product.price}
                    </p>
                  </div>

                  
                  <Button 
                  onClick={() => handleOrder(product.id)}
                    size="sm" 
                    className="w-full bg-black text-white font-medium text-xs rounded-lg h-7 min-w-0"
                  >
                    Order Now
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </main>
  );
};

export default HomePage;