"use client";

import Image from "next/image";
import {
  Card,
  Button,
} from "@heroui/react";

import {
  FiArrowLeft,
  FiPackage,
  FiMessageCircle,
  FiFileText,
} from "react-icons/fi";
import Link from "next/link";

export default function TrackingUnavailable({ product }) {
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
          <div className="flex flex-col items-center px-5 py-10 text-center">

            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
              <FiPackage
                size={28}
                className="text-gray-500"
              />
            </div>

            <h2 className="text-lg font-bold">
              Tracking information isn`t available yet
            </h2>

            <p className="mt-2 max-w-xs text-sm leading-5 text-gray-500">
              Your order has been confirmed. Tracking details will appear once your package is shipped.
            </p>

            <Button
              fullWidth
              variant="solid"
              className="mt-6 flex items-center justify-center gap-2 bg-black text-white"
            >
              <FiFileText size={17} />
              <span>View Order Details</span>
            </Button>

          </div>
        </Card>

        <Card className="mb-4 border border-gray-200 shadow-none">
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

        <Card className="border border-gray-200 shadow-none">
          <div className="p-4">
            <p className="text-sm font-semibold">
              Need help?
            </p>

            <p className="mt-1 text-xs text-gray-500">
              Our support team can help you with your order.
            </p>

            <Button
              fullWidth
              variant="bordered"
              className="mt-4 flex items-center justify-center gap-2 border-gray-300"
            >
              <FiMessageCircle size={17} />
              <span>Contact Support</span>
            </Button>
          </div>
        </Card>

      </div>
    </div>
  );
}