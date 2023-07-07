import BlogCard from "@/components/BlogCard";
import React from "react";

const page = () => {
  const blogs = [
    {
      title: "Hello",
    },
    {
      title: "Hola",
    },
    {
      title: "Hi",
    },
    {
      title: "K xa",
    },
  ];
  return (
    <section className="flex flex-col m-4 gap-2 mt-5">
      <h2 className="text-5xl font-bold">OSAC Blogs</h2>
      <h4 className="text-xl">BLogs made by osac members</h4>
      <h3 className="text-green-400 text-3xl">Featured</h3>
      <div className="blogs flex flex-wrap  gap-5 mt-[5rem]">
        {blogs.map((element) => {
          return <BlogCard title={element.title} />;
        })}
      </div>
    </section>
  );
};

export default page;
