'use client';
import QuestionComponent from "@/app/ui/question-component";
import CategoryConfig from "@/app/_interfaces/category-config";
import Category from "@/app/_interfaces/category";

export default function Question({ values, categoryDetails, questionConfig, showAnswers }: {values: { [key: string]: string; }; categoryDetails: Category | undefined; questionConfig: CategoryConfig | undefined; showAnswers: boolean}){
  if(!categoryDetails || !questionConfig) return;
  return (
    <div className="flex flex-col rounded-xl dark:bg-gray-800 has-[:placeholder-shown:not(.hidden)]:bg-gray-100 space-y-2 p-5 dark:has-[:placeholder-shown:not(.hidden)]:bg-gray-800 not-has-[:invalid]:bg-lime-500 dark:has-[:invalid]:bg-red-800 has-[:invalid]:bg-red-700">
      {categoryDetails.components.map(component => 
        (
          <QuestionComponent key={component.id} value={values[component.id]} config={questionConfig[component.placeholder]} showAnswers={showAnswers} placeholder={component.placeholder} />
        )
      )}
    </div>
  )
}