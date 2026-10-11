'use client';
import { useSearchParams } from 'next/navigation';
import Question from "@/app/ui/question";
import { getQuestionsByCategories, getCategory } from "@/lib/db";
import { useState } from 'react';

export default function Page() {
  const [unanswered, setUnanswered] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const searchParams = useSearchParams();
  let label = searchParams.get('label');
  
  let questionsConfig = {};
  for (const [key, value] of searchParams) {
    if(value == 'on'){
      questionsConfig[key] = {};
    } else if(key != 'label') {
      if(key.includes('|')){
        questionsConfig[key.split('|')[0]][key.split('|')[1]] = value;
      }
    }
  }
  const questions = getQuestionsByCategories(Object.keys(questionsConfig)).filter(question => (!label || (question.labels && question.labels.includes(label))));  
  
  function onSubmit(event: SubmitEvent<HTMLFormElement>){
    event.preventDefault();
    if(correctAnswers + incorrectAnswers > 0){
      location.reload();
    } else {
      setUnanswered(event.currentTarget.querySelectorAll('input:placeholder-shown:not(.hidden)').length);
      setCorrectAnswers(event.currentTarget.querySelectorAll('input:valid:not(.hidden)').length);
      setIncorrectAnswers(event.currentTarget.querySelectorAll('input:invalid:not(.hidden)').length);
    }
  }
  
  return (
    <form noValidate className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black" onSubmit={onSubmit}>
      <main className="flex flex-1 w-full max-w-3/5 justify-center content-start py-5 px-5 bg-white dark:bg-black sm:items-start flex-wrap gap-4">
        {questions.map((question, index) => (
          <Question key={index} {...question} categoryDetails={getCategory(question.category)} questionsConfig={questionsConfig[question.category]} showAnswers={correctAnswers + incorrectAnswers > 0} />
        ))}
      </main>
      <div className="fixed p-5 top-0 right-0">
        <button type="submit" className="flex h-22 text-2xl 7w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] cursor-pointer">
          {correctAnswers + incorrectAnswers == 0 ? "Show Answers" : "Retake Test"}
        </button>
        <div className="p-5">
          { 
            correctAnswers + incorrectAnswers > 0 ? (
              <div className="text-center"><span>{correctAnswers - unanswered}</span> out of <span>{correctAnswers + incorrectAnswers}</span> correct</div>
            ) : '' 
          }
        </div>
      </div>
    </form>
  );
}
