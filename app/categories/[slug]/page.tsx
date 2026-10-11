'use client';

import type CategoryConfig from "@/app/_interfaces/category-config";
import Category from "@/app/ui/category";
import { useRouter } from 'next/navigation'
import { use } from 'react'
import { importedCategories } from "@/lib/db";
import Link from 'next/link';


export default function Categories({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const router = useRouter();
  const { slug } = use(params)
  
  function onSubmit(event: SubmitEvent<HTMLFormElement>){
    event.preventDefault();
    router.push(`/test?${new URLSearchParams(new FormData(event.currentTarget))}`);
  }
  
  return (
    <form className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black p-5" onSubmit={onSubmit}>
      <div className="flex flex-1 w-full max-w-4/5 justify-center content-start py-5 px-5 bg-white dark:bg-black sm:items-start flex-wrap gap-4">
        {importedCategories.filter(cat => cat.subject == slug).map(category => (
          <Category key={category.key} id={category.key} title={category.title} components={category.components} />
        ))}
      </div>
      <nav className="fixed p-5 top-0 right-0">
        <button type="submit" className="flex h-22 text-2xl 7w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] cursor-pointer">
          Generate Test
        </button>
      </nav>
    </form>
  );
}