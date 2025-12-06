import blogcontent from "@/data/blogcontent.json";
import BlogCardItems from "@/components/BlogCardItems";

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-center text-2xl font-bold mb-10">
        Check out our latest case studies, blogs & media
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogcontent.map((item) => (
        <BlogCardItems key={item.id} item={item}/>
        ))}
      </div>
    </div>
  );
}
