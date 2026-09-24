"use client";

import Image from "next/image";
import {
  Card,
  Button,
} from "@heroui/react";

import {
  FiArrowLeft,
  FiAlertTriangle,
  FiCheck,
  FiMessageCircle,
  FiPackage,
} from "react-icons/fi";
import Link from "next/link";

const steps = [
  ["Processing", "completed"],
  ["Shipped", "completed"],
  ["Out for Delivery", "current"],
  ["Delivered", "pending"],
];

export default function DelayedTracking({ product }) {
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

        <Card className="mb-4 border border-gray-300 bg-gray-50 shadow-none">
          <div className="p-5">

            <div className="flex gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black text-white">
                <FiAlertTriangle size={19} />
              </div>

              <div>
                <h2 className="font-bold">
                  Delivery Delayed
                </h2>

                <p className="mt-1 text-sm leading-5 text-gray-600">
                  We’re sorry. Your order is taking longer than expected.
                </p>
              </div>
            </div>

            <div className="mt-4 rounded-lg bg-white p-3">
              <p className="text-xs text-gray-500">
                Expected delivery
              </p>

              <p className="mt-1 text-sm font-semibold">
                Sep 24 · 6:00–8:00 PM
              </p>
            </div>

          </div>
        </Card>

        <Card className="mb-4 border border-gray-200 shadow-none">
          <div className="p-5">

            <h2 className="mb-6 font-semibold">
              Delivery Progress
            </h2>

            <div>
              {steps.map(([title, status], index) => (
                <div
                  key={title}
                  className="flex gap-4"
                >
                  <div className="flex flex-col items-center">
                    <div
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border ${
                        status === "completed"
                          ? "border-black bg-black text-white"
                          : status === "current"
                          ? "border-black bg-white text-black ring-4 ring-gray-100"
                          : "border-gray-300 bg-white text-gray-400"
                      }`}
                    >
                      {status === "completed" ? (
                        <FiCheck size={15} />
                      ) : (
                        <FiPackage size={14} />
                      )}
                    </div>

                    {index < steps.length - 1 && (
                      <div
                        className={`h-12 w-px ${
                          status === "completed"
                            ? "bg-black"
                            : "bg-gray-200"
                        }`}
                      />
                    )}
                  </div>

                  <div className="pb-5">
                    <p
                      className={`text-sm font-semibold ${
                        status === "pending"
                          ? "text-gray-400"
                          : "text-black"
                      }`}
                    >
                      {title}
                    </p>

                    {status === "current" && (
                      <p className="mt-1 text-xs text-gray-500">
                        Package is delayed
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

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

        <Button
          fullWidth
          variant="solid"
          className="flex items-center justify-center gap-2 bg-black text-white"
        >
          <FiMessageCircle size={17} />
          <span>Contact Support</span>
        </Button>

      </div>
    </div>
  );
}