'use client';
import { useState } from 'react';
import CategoryElement from "@/app/ui/category-element";
import { getLabelsByCategory } from "@/lib/db";

export default function Category({ title, components, id }){
  const [enabled, setState] = useState(false);
  return (
    <div className="rounded-xl dark:bg-gray-800 bg-gray-100 space-y-2 p-5 dark:has-[:checked]:bg-gray-700 has-[:checked]:bg-gray-200">
      <h1 className="text-4xl font-semibold text-center">{title}</h1>
      <label className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px] cursor-pointer justify-self-center">
        <input type="checkbox" name={id} className="sr-only" checked={enabled} onChange={e => setState(e.target.checked) } />
        <span className="select-none">
          {enabled ? "Disable" : "Enable"}
        </span>
      </label>
      {enabled ? (
          <ul className="space-y-1">
            <li>
              <select defaultValue="" name="label" className="flex h-8 w-full not-has-[option[value]]:hidden rounded-sm bg-foreground text-background md:w-[158px] cursor-pointer justify-self-center">
                <option></option>
                {getLabelsByCategory(id).map(label => (
                  <option key={label} value={label}>{label}</option>
                ))}
              </select>
            </li>
            {components.map(component => (
              <CategoryElement key={component.id} name={id + '|' + component.placeholder} placeholder={component.placeholder} initialValue={component.defaultType} />
            ))}
          </ul>
        ) : ""
      }
    </div>
  )
}