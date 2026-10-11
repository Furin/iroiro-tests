'use client';
import { useState } from 'react';

export default function QuestionComponent({ placeholder, value, config, showAnswers }){
  const [userResponse, setUserResponse] = useState('');
  return (
    <div key="question" className="m-0 min-w-[219px]">
      <div className="flex flex-row max-w-xs">
        <h1 className={`flex-1 text-3xl font-semibold text-center line-through ${config == 'Quizzed' && showAnswers && value != userResponse && userResponse != '' ? '' : 'hidden'}`}>{userResponse}</h1>
        <h1 key="key" className={`flex-1 text-3xl font-semibold text-center ${determineH1Visibility(config, showAnswers)}`}>{value}</h1>
        <h1 className={`text-3xl font-semibold ${config == 'Quizzed' && showAnswers && value == userResponse ? '' : 'hidden'}`}>✔</h1>
        <h1 className={`text-3xl font-semibold ${config == 'Quizzed' && showAnswers && value != userResponse ? '' : 'hidden'}`}>✘</h1>
      </div>
      <input value={userResponse} pattern={value} key="input" className={`bg-cyan-200 dark:bg-cyan-900 rounded-md text-center ${determineInputVisibility(config, showAnswers)}`} type="text" placeholder={placeholder} onChange={e => setUserResponse(e.target.value)} />
    </div>
  )
}

function determineH1Visibility(config, showAnswers){
  if(config == 'Hidden'){
    return 'hidden';
  }
  if(showAnswers) return 'mb-2';
  return config == 'Provided' ? 'mb-2' : 'hidden';
}

function determineInputVisibility(config, showAnswers){
  if(config == 'Hidden'){
    return 'hidden';
  }
  if(showAnswers){
    return config == 'Provided' ? 'hidden' : 'invisible absolute';
  } else {
    return config == 'Quizzed' ? 'mb-2' : 'hidden';
  }
}