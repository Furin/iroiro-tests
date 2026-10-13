import Category from "@/app/ui/category";
import { use } from 'react'
import Form from 'next/form'
import { getAllCategories } from "@/lib/db";

export default function Categories({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = use(params)
  
  return (
    <Form className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black p-5" action="/test">
      <div className="flex flex-1 w-full max-w-4/5 justify-center content-start py-5 px-5 bg-white dark:bg-black sm:items-start flex-wrap gap-4">
        {getAllCategories().filter(cat => cat.subject == slug).map(category => (
          <Category key={category.key} id={category.key} title={category.title} components={category.components} />
        ))}
      </div>
      <nav className="fixed p-5 top-0 right-0">
        <button type="submit" className="flex h-22 text-2xl 7w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] cursor-pointer">
          Generate Test
        </button>
      </nav>
    </Form>
  );
}

export function generateStaticParams() {
  return [...new Set(getAllCategories().map(category => category.subject))].map(subject => {
    return { slug: subject };
  });
}