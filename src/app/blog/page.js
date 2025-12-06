import blogcontent from "@/data/blogcontent.json";
import BlogCardItems from "@/components/BlogCardItems";

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 mt-10">
      
       <div className="flex items-center justify-center flex-col mt-5 mb-5 px-4 sm:px-6 md:px-0">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold text-black h-heading leading-tight text-center">
              Check out our latest case studies, blogs & media
            </h1>
            <div className="h-[2px] w-24 sm:w-36 md:w-48 bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-300 mt-3 rounded" />
          </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogcontent.map((item) => (
        <BlogCardItems key={item.id} item={item}/>
        ))}
      </div>
    </div>
  );
}
