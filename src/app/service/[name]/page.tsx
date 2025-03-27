"use client";

export default function Service({ params }: { params: { slug: string } }) {
  return <div>Service: {params.slug}</div>;
}
