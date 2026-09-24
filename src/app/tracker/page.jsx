import DelayedTracking from "@/components/traking/DelayedTracking";
import DeliveredNotReceived from "@/components/traking/DeliveredNotReceived";
import NormalTracking from "@/components/traking/NormalTracking";
import TrackingUnavailable from "@/components/traking/TrackingUnavailable";
import React from "react";
import products from "@/data/data";

const TrackerPage = async ({ searchParams }) => {
  const { id } = await searchParams;

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  if (product.status === "normal") {
    return <NormalTracking product={product} />;
  }

  if (product.status === "delayed") {
    return <DelayedTracking product={product} />;
  }

  if (product.status === "delivered_not_received") {
    return <DeliveredNotReceived product={product} />;
  }

  if (product.status === "tracking_unavailable") {
    return <TrackingUnavailable product={product} />;
  }

  return null;
};

export default TrackerPage;