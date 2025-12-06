import Image from "next/image";
import Link from "next/link";

export default function CardItem({ item }) {
  return (
    <div className="border rounded-xl bg-white shadow-sm hover:shadow-lg overflow-hidden">
      <Image
        src={item.thumbnail}
        alt={item.title}
        width={500}
        height={300}
        className="w-full h-40 object-cover"
      />

      <div className="p-4">
        <h3 className="font-semibold text-sm">{item.title}</h3>

        <p className="text-gray-600 text-xs mt-1 line-clamp-2">
          {item.short_desc}
        </p>

        <Link
          href={`/blog/${item.slug}`}
          className="text-blue-600 text-xs mt-3 inline-flex items-center gap-1"
        >
          Learn more →
        </Link>
      </div>
    </div>
  );
}
