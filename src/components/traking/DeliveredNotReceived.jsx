"use client";

import Image from "next/image";
import {
  Card,
  Button,
} from "@heroui/react";

import {
  FiArrowLeft,
  FiCheck,
  FiAlertCircle,
  FiMessageCircle,
} from "react-icons/fi";
import Link from "next/link";

const steps = [
  "Processing",
  "Shipped",
  "Out for Delivery",
  "Delivered",
];

export default function DeliveredNotReceived({ product }) {
  return (
    <div className="min-h-screen bg-white px-4 py-6 text-black">
      <div className="mx-auto w-full max-w-md">

        <div className="mb-5 flex items-center gap-3">
          <Link href={`/tracker?id=${product.id}`}>
          <button className="rounded-full p-2 hover:bg-gray-100">
            <FiArrowLeft size={20} />
          </button>
          </Link>

          <div>
            <h1 className="text-xl font-bold">
              Track Order
            </h1>

            <p className="text-xs text-gray-500">
              #ORD-1001
            </p>
          </div>
        </div>

        <Card className="mb-4 border border-gray-200 shadow-none">
          <div className="p-5">

            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-white">
                <FiCheck size={22} />
              </div>

              <div>
                <h2 className="text-lg font-bold">
                  Delivered
                </h2>

                <p className="text-xs text-gray-500">
                  Marked as delivered at 4:30 PM
                </p>
              </div>
            </div>

          </div>
        </Card>

        <Card className="mb-4 border border-gray-200 shadow-none">
          <div className="p-5">

            <h2 className="mb-6 font-semibold">
              Delivery Progress
            </h2>

            <div>
              {steps.map((step, index) => (
                <div
                  key={step}
                  className="flex gap-4"
                >
                  <div className="flex flex-col items-center">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black text-white">
                      <FiCheck size={15} />
                    </div>

                    {index !== steps.length - 1 && (
                      <div className="h-12 w-px bg-black" />
                    )}
                  </div>

                  <div className="pb-5">
                    <p className="text-sm font-semibold">
                      {step}
                    </p>

                    {step === "Delivered" && (
                      <p className="mt-1 text-xs text-gray-500">
                        4:30 PM · Sep 24
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </Card>

        <Card className="mb-4 border border-gray-300 shadow-none">
          <div className="p-5">

            <div className="flex gap-3">
              <FiAlertCircle
                size={20}
                className="mt-0.5 shrink-0"
              />

              <div>
                <h2 className="text-sm font-bold">
                  Didn’t receive your order?
                </h2>

                <p className="mt-1 text-xs leading-5 text-gray-500">
                  Your order was marked as delivered, but you haven`t received it.
                </p>
              </div>
            </div>

            <div className="mt-4 flex flex-col gap-2">
              <Button
                fullWidth
                variant="solid"
                className="flex items-center justify-center gap-2 bg-black text-white"
              >
                <FiAlertCircle size={17} />
                <span>Report an Issue</span>
              </Button>

              <Button
                fullWidth
                variant="bordered"
                className="flex items-center justify-center gap-2 border-gray-300"
              >
                <FiMessageCircle size={17} />
                <span>Contact Support</span>
              </Button>
            </div>

          </div>
        </Card>

        <Card className="border border-gray-200 shadow-none">
          <div className="p-4">

            <p className="mb-3 text-sm font-semibold">
              Order Summary
            </p>

            <div className="flex gap-3">
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src={product.image}
                  alt="Product"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="truncate text-sm font-semibold">
                  {product.name}
                </h3>

                <p className="mt-1 text-xs text-gray-500">
                  Quantity: 1
                </p>

                <p className="mt-2 text-sm font-bold">
                  {product.price}
                </p>
              </div>
            </div>

            <div className="divider"></div>

            <div className="flex justify-between text-xs">
              <span className="text-gray-500">
                Order ID
              </span>

              <span className="font-medium">
                #ORD-1001
              </span>
            </div>

          </div>
        </Card>

      </div>
    </div>
  );
}