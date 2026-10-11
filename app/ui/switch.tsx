'use client';
import { useState } from 'react';

export default function Switch({ name, values, initialValue }){
  const [currentValue, setState] = useState(initialValue);
  
  return (
    <div className="inline-flex overflow-hidden border dark:border-gray-200 border-gray-400 rounded-lg">
      {values.map((value, index) => (
        <label key={index} className="cursor-pointer">
          <input type="radio" value={value} name={name} className="sr-only peer" checked={currentValue == value} onChange={e => setState(e.target.value) } />
          <span className="relative inline-flex items-center h-full py-2 space-x-2 text-sm p-4 peer-checked:bg-blue-400 select-none">
            {value}
          </span>
        </label>
      ))}
    </div>
  )
}