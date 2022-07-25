import React, { useState } from 'react'
import './App.css'

const App = () => {
    const [finalreuslt,setfinalreuslt] = useState(false)
    const [currentquestion,setcurrentquestion] = useState(0)
    const [score,setscore] = useState(0)
    const questions = [
        {
          text: "من هو مصمم هذا الموقع الحالي",
          options: [
            { id: 0, text: "هند محمود", isCorrect: false },
            { id: 1, text: "فؤاد محمود", isCorrect: false },
            { id: 2, text: "خالد محمود", isCorrect: false },
            { id: 3, text: "محمد محمود", isCorrect: true },
          ],
        },
        {
          text: " كم عمر محمد محمود?",
          options: [
            { id: 0, text: "19", isCorrect: true },
            { id: 1, text: "20", isCorrect: false },
            { id: 2, text: "21", isCorrect: false },
            { id: 3, text: "22", isCorrect: false },
          ],
        },
        {
          text: "متي ولد محمد محمود",
          options: [
            { id: 0, text: "2003", isCorrect: true },
            { id: 1, text: "2002", isCorrect: false },
            { id: 2, text: "2001", isCorrect: false },
            { id: 3, text: "2004", isCorrect: false },
          ],
        },
        {
          text: "اين يعيش محمد محمود",
          options: [
            { id: 0, text: "هربيط", isCorrect: false },
            { id: 1, text: "مدينه الرحمانيه", isCorrect: true },
            { id: 2, text: "ليكو ", isCorrect: false },
            { id: 3, text: "خصرف", isCorrect: false },
          ],
        },
        {
          text: "عدد النسوان اللي هتموت علي محمود محمود",
          options: [
            { id: 0, text: "3", isCorrect: false },
            { id: 1, text: "23", isCorrect: true },
            { id: 2, text: "1", isCorrect: true },
            { id: 3, text: "9", isCorrect: false },
          ],
        },
      ];
    const finalopation = (isCorrect) => {
        if(isCorrect){
            setscore(score+1)
        }
        if(currentquestion+1<questions.length){
            setcurrentquestion(currentquestion+1)
        }else{
            setfinalreuslt(true)
        }
    }
    const again = () => {
        setfinalreuslt(false)
        setcurrentquestion(0)
        setscore(0)
    }
  return (
    <div className='App'>
       <h1>اختبار</h1>
       <h1>عدد الاجابات الصحيحه:{score}</h1>
          {finalreuslt?
            <div className='final-result'>
              <h1>النتائج</h1>
              <h2>{score}-{questions.length} ({score/questions.length *100}%)</h2>
              <button onClick={again}>Again</button>
          </div>:
         <div className='Question-Card'>
               <h2 className='title'>السؤال {currentquestion+1} من {questions.length}</h2>
               <h3 className='Question-text'>{questions[currentquestion].text}</h3>
               {questions[currentquestion].options.map(({id,text,isCorrect})=>
                 <ul>
                  <li
                   key={id}
                   onClick={()=>finalopation(isCorrect)}
                  >{text}</li>
               </ul>
               )}
         </div>
        }
  </div>
  )
}

export default App