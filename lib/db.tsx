import questions from "@/app/_data/questions.json";
import categories from "@/app/_data/categories.json";
import { useEffect, useState } from 'react';

export const importedCategories: Array<CategoryConfig> = [];
for(let category in categories){
  importedCategories.push({ key: category, ...categories[category] });  
}

export function getCategory(category: string){
  return categories[category];
}

export function getLabelsByCategory(category: string){
  let labels = [];
  for(let question of questions){
    if(question.labels && question.category == category){
      for(let label of question.labels){
        if(!labels.includes(label)) labels.push(label);
      }
    }
  }
  return labels;
}

export function getQuestionsByCategories(categories: Array<string>){
  const [questionsToReturn, setQuestionsToReturn] = useState([]);
  useEffect(() => {
    setQuestionsToReturn(questions.filter(question => categories.includes(question.category)).sort(()=>0.5-Math.random()));
  }, []);
  return questionsToReturn;
}


