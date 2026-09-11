import Link from "next/link";
import React from "react";

export const metadata = {
  title: "404 | Page Not Found",
};

function page(props) {
  return (
    <div className="h-[100dvh] flex items-center justify-center bg-gray-100">
      <div>
        <h2 className="text-2xl">We Couldn’t Find This Page</h2>
        <Link href="/resorts-at-bangalore">
          <button className="mt-8 bg-black font-anek_bangla_font text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 w-max mx-auto block">
            View All Posts
          </button>
        </Link>
      </div>
    </div>
  );
}

export default page;
