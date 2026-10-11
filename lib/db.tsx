import Category from "@/app/_interfaces/category";
const categories: Array<Category> = require("@/app/_data/categories.json");
import QuestionType from "@/app/_interfaces/question-type";
const questions: Array<QuestionType> = require("@/app/_data/questions.json");

export function getCategory(category: string): Category | undefined{
  return categories.find(cat => cat.key == category);
}

export function getAllCategories(): Array<Category> {
  return [...categories];
}

export function getLabelsByCategory(category: string){
  const labels: Array<string> = [];
  for(const question of questions){
    if(question.labels && question.category == category){
      for(const label of question.labels){
        if(!labels.includes(label)) labels.push(label);
      }
    }
  }
  return labels;
}

export function questionsByCategories(categories: Array<string>): Array<QuestionType> {
  return questions.filter(question => categories.includes(question.category)).sort(()=>0.5-Math.random());
}


