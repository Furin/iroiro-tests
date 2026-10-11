'use client';
import QuestionComponent from "@/app/ui/question-component";

export default function Question({ category, values, categoryDetails, questionsConfig, showAnswers }){
  return (
    <div className="flex flex-col rounded-xl dark:bg-gray-800 has-[:placeholder-shown:not(.hidden)]:bg-gray-100 space-y-2 p-5 dark:has-[:placeholder-shown:not(.hidden)]:bg-gray-800 not-has-[:invalid]:bg-lime-500 dark:has-[:invalid]:bg-red-800 has-[:invalid]:bg-red-700">
      {categoryDetails.components.map(component => 
        (
          <QuestionComponent key={component.id} value={values[component.id]} config={questionsConfig[component.placeholder]} showAnswers={showAnswers} placeholder={component.placeholder} />
        )
      )}
    </div>
  )
}