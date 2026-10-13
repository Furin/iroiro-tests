'use client';

import { questionsByCategories, getCategory } from "@/lib/db";
import QuestionsList from "@/app/ui/questions-list";
import CategoryConfig from "@/app/_interfaces/category-config";
import { useSearchParams } from 'next/navigation';

export default function QuestionsForm() {
  const searchParams = useSearchParams();
  
  const questionsConfig: { [key: string]: CategoryConfig } = {};
  for (const [key, value] of searchParams) {
    if(value == 'on'){
      questionsConfig[key] = {};
    } else if(key.includes('|')) {
      const splitKey = key.split('|');
      if(splitKey[1] != 'label'){
        switch(value){
          case "Provided":
          case "Quizzed":
          case "Hidden":
            questionsConfig[splitKey[0]][splitKey[1]] = value;
        }
      }
    }
  }
  const questions = questionsByCategories(Object.keys(questionsConfig)).filter(question => 
    {
      const labelParam: string = searchParams.get(`${question.category}|label`) as string;
      return labelParam == '' || 
        (question.labels && question.labels.includes(labelParam))
    }
  ).sort(()=>0.5-Math.random());  
  
  for(const question of questions){
    question.categoryDetails = getCategory(question.category);
    question.questionConfig = questionsConfig[question.category];
  }
  
  return (
    <QuestionsList questions={questions}  />
  );
}
