'use client';

import { importedCategories } from "@/lib/db";
import Link from 'next/link';
console.log([...new Set(importedCategories.map(category => category.subject))]);

export default function Home() {  
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black p-5">
      <div className="flex flex-1 w-full max-w-4/5 justify-center content-start py-5 px-5 bg-white dark:bg-black sm:items-start flex-wrap gap-4">
        {[...new Set(importedCategories.map(category => category.subject))].map(subject => (
          <Link key={subject} href={`/categories/${subject}`} className="rounded-xl dark:bg-gray-800 bg-gray-100 space-y-2 p-5 text-4xl font-semibold text-center">
            {subject}
          </Link>
        ))}
      </div>
    </div>
  );
}