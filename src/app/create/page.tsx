"use-client";
import { useRouter } from "next/router";
import React, { useState } from "react";

export const Page = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isLoading, setIsloading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setIsloading(true);
    await fetch("/api/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        content,
      }),
    })
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });

    setIsloading(false);
    router.push("/");
  };

  return (
    <form className="w-[500px] mx-auto pt-20 flex flex-col gap-2" onSubmit={handleSubmit}>
      <input type="text" placeholder="Input your title" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full border p-2 rounded-md" />
      <textarea rows={10} placeholder="Input your content" value={content} onChange={(e) => setContent(e.target.value)} className="w-full border p-2 rounded-md" />
      <button disabled={isLoading}>{isLoading ? "Loading ..." : "Submit"}</button>
    </form>
  );
};
