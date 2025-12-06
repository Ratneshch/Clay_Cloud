"use client";
import blogcontent from "@/data/blogcontent.json";
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { useParams } from "next/navigation";

export default function DetailPage() {
  const params = useParams();
  const { slug } = params;

  const item = blogcontent.find((entry) => entry.slug === slug);
  const relatedPosts = blogcontent
    .filter((entry) => entry.slug !== slug)
    .slice(0, 3);

  if (!item) {
    return (
      <div className="p-10 text-center text-gray-500 text-lg">
        Content not found.
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Hero Image */}
      <div className="mb-12 mt-16 flex justify-center">
        <div className="relative w-full max-w-4xl h-56 sm:h-72 md:h-96 lg:h-[420px] rounded-2xl overflow-hidden shadow-xl">
          <Image
            src={item.thumbnail}
            alt={item.title}
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto">
        <Link
          href="/blog"
          className="text-blue-600 text-sm mb-4 inline-block hover:underline"
        >
          ← Back to All
        </Link>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-gray-900 leading-tight">
          {item.title}
        </h1>

        <div className="prose prose-sm sm:prose-base md:prose-lg prose-blue max-w-full mx-auto mb-16">
          <ReactMarkdown>{item.full_desc}</ReactMarkdown>
        </div>
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div className="mt-16">
          <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-800 text-center">
            Check out our latest posts
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {relatedPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="relative h-40 sm:h-48 md:h-52">
                  <Image
                    src={post.thumbnail}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-base sm:text-lg text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {post.title}
                  </h3>

                  <p className="text-gray-500 mt-2 text-xs sm:text-sm">
                    {post.short_desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
