"use client";

import { notFound } from "next/navigation";
import { useParams } from "next/navigation";
import products from "@/data/products.json";

// Import product components
import ClayCloudHR from "@/components/claycloudHR/ClayCloudHR";

const componentMap = {
  ClayCloudHR,
};

export default function Page() {
  const { slug } = useParams();

  // 1. Find matching product
  const product = products.find(p => p.slug === slug);

  if (!product) return notFound();

  // 2. Load component by name
  const ComponentToRender = componentMap[product.component];

  if (!ComponentToRender) return notFound();

  // 3. Pass product data as props
  return <ComponentToRender product={product} />;
}
