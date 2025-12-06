import Image from "next/image";
import Link from "next/link";

export default function CardItem({ item }) {
  return (
    <div className="rounded-xl bg-white shadow-sm hover:shadow-lg overflow-hidden flex flex-col w-full">

      {/* Responsive Image */}
      <div className="relative w-full h-40 sm:h-48 md:h-56">
        <Image
          src={item.thumbnail}
          alt={item.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-semibold text-sm sm:text-base">
          {item.title}
        </h3>

        <p className="text-gray-600 text-xs sm:text-sm mt-1 line-clamp-2">
          {item.short_desc}
        </p>

        <Link
          href={`/blog/${item.slug}`}
          className="mt-auto text-blue-500 font-medium hover:underline text-xs sm:text-sm"
        >
          Learn more →
        </Link>
      </div>
    </div>
  );
}
