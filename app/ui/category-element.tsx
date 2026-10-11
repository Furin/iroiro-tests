'use client';
import Switch from "@/app/ui/switch";

export default function CategoryElement({ placeholder, initialValue, name }){
  return (
    <li className="flex justify-between">
      <p className="p-2">{placeholder}</p>
      <Switch name={name} values={['Provided','Quizzed','Hidden']} initialValue={initialValue} />
    </li>
  )
}