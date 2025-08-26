"use client";
import { blogs } from "@/app/data/postsData";
import { AsyncImage } from "loadable-image";
import Image from "next/image";
import Link from "next/link";
import { Blur } from "transitions-kit";

export default function BlogsSection() {
  return (
    <div className="pl-50 pb-50">
      <div className="intro pt-10">
        <Image
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTEuNTEgMzAuODQiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDpub25lO3N0cm9rZTojZWI4YTQ0O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo3cHg7fTwvc3R5bGU+PC9kZWZzPjxnIGlkPSJMYXllcl8yIiBkYXRhLW5hbWU9IkxheWVyIDIiPjxnIGlkPSJMYXllcl8xLTIiIGRhdGEtbmFtZT0iTGF5ZXIgMSI+PHBvbHlsaW5lIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSIyLjY3IDUuNDIgMTkuNTkgMjUuNDIgMzYuNTIgNS40MiA1My40NCAyNS40MiA3MC4zNiA1LjQyIDg3LjI4IDI1LjQyIDEwNC4yMSA1LjQyIDEyMS4xMyAyNS40MiAxMzguMDUgNS40MiAxNTQuOTggMjUuNDIgMTcxLjkxIDUuNDIgMTg4Ljg0IDI1LjQyIi8+PC9nPjwvZz48L3N2Zz4="
          alt="icon"
          width={128}
          height={128}
        />
        <p>Blogs</p>
      </div>
      <div className="mt-20 flex flex-row flex-wrap pl-30 pr-30">
        {blogs.map((blog, index) => (
          <Link
            className="mr-15 mb-20 h-120 w-104 flex flex-col items-start justify-between shadow-sm"
            href={`/blog/${index}`}
            key={index}
          >
            <AsyncImage
              src={blog.img_url}
              style={{ width: 416, height: 220 }}
              className="bg-center"
              Transition={Blur}
            />
            <div className="blogs-item-info pl-5 pr-5 pb-5">
              <p className="text-black font-bold text-xl line-clamp-2">
                {blog.title}
              </p>
              <p className="text-gray-500 font-light text-lg/6 line-clamp-2 mt-2">
                {blog.content[0].text}
              </p>
              <div className="flex flex-row gap-5 text-sm text-gray-500 font-light mt-11">
                {/* <p>7 min read</p> */}
                <p>{blog.date}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
