"use client";
import { blogs } from "@/app/data/postsData";
import { BASE_URL } from "@/app/constants";
import copy from "copy-to-clipboard";
import { AsyncImage } from "loadable-image";
import { use } from "react";
import { IoShareOutline } from "react-icons/io5";
import { Blur } from "transitions-kit";
import toast, { Toaster } from "react-hot-toast";

export default function Blog({ params }: { params: Promise<{ id: number }> }) {
  const { id } = use(params);
  const blog = blogs[id];
  return (
    <div className="ml-130 mr-130 mt-30 flex flex-col justify-center items-start gap-10 mb-30">
      <Toaster />
      <div className="blog-content text-5xl text-black font-extrabold text-left">
        <p>{blog.title}</p>
      </div>
      <div className="flex flex-row gap-5 text-md text-gray-500 font-medium">
        <p>{blog.duration}</p>
        <p>{blog.date}</p>
      </div>
      <div className="w-full flex justify-center">
        <AsyncImage
          src={blog.img_url}
          style={{ width: 1000, height: 600 }}
          Transition={Blur}
        />
      </div>
      <div className="text-xl/9 text-black font-normal flex flex-col gap-7 mt-10 blog-content">
        {blog.content.map((c, index) => (
          <div key={index}>
            <p className="font-semibold border-l-4 border-black pl-5 mb-5">
              {c.sub_head}
            </p>
            <p>{c.text}</p>
          </div>
        ))}
      </div>
      <IoShareOutline
        className="text-gray-700 h-6 w-6 ml-auto mt-5 cursor-pointer"
        onClick={() => handleClick(id)}
      />
    </div>
  );
}

const handleClick = (id: number) => {
  const baseUrl = BASE_URL;
  copy(`${baseUrl}blog/${id}`);
  toast("Link Copied!");
};
