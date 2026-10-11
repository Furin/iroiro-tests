import { questionsByCategories, getCategory } from "@/lib/db";
import QuestionsList from "@/app/ui/questions-list";
import CategoryConfig from "@/app/_interfaces/category-config";
import { use } from 'react'

export default function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string }>
}) {
  const parameters = use(searchParams)
  const questionsConfig: { [key: string]: CategoryConfig } = {};
  for (const key in parameters) {
    const value = parameters[key];
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
  const questions = questionsByCategories(Object.keys(questionsConfig)).filter(question => (!parameters[`${question.category}|label`] || (question.labels && question.labels.includes(parameters[`${question.category}|label`]))));  
  
  for(const question of questions){
    question.categoryDetails = getCategory(question.category);
    question.questionConfig = questionsConfig[question.category];
  }
  
  return (
    <QuestionsList questions={questions}  />
  );
}
