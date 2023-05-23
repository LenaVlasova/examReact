import React from 'react';
import './index.scss';

const questions = [
  {
    title: 'Чему равно число пи? ?',
    variants: ['3,14..', '4', '68'],
    correct: 0,
  },
  {
    title: 'Центральный угол равен 98. Чему равна дуга окружности, на которую он опирается?',
    variants: ['26', '98', '49'],
    correct: 1,
  },
  {
    title: 'Вписанный угол равен 98. Чему равна дуга окружности, на которую он опирается?',
    variants: ['26', '98', '49'],
    correct: 2,
  },
];

function Result({correct}) {
  return (
    <div className="result">
      <img alt ="" src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>Вы отгадали {correct} ответа из {questions.length}</h2>
      <a href='/'><button>Попробовать снова</button></a>

    </div>
  );
}

function Game({question, onClickVariant, step}) {
  const per = Math.round((step / questions.length) * 100);
  console.log(per)
  return (
    <>
      <div className="progress">
        <div style={{ width: `${per}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((item, index) => (
          <li key={item} onClick={() => onClickVariant(index)}>
            {item}
          </li>
        )    
        )}
      </ul>
    </>
  );
}

function App() {
  const [step, setStep] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);
  const question = questions[step];
  const onClickVariant = (index) => {
    setStep(step + 1)
    if(index === question.correct) {
      setCorrect(correct + 1)
    }
  }
  return (
    <div className="App">
      {step < questions.length ? 
      <Game 
        question={question} 
        onClickVariant={onClickVariant}
        step={step}
      />
      : <Result correct={correct}/>}
    </div>
  );
}

export default App;
