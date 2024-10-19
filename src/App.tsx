import React, { useState } from 'react';
import { Brain } from 'lucide-react';
import Question from './components/Question';
import Result from './components/Result';
import ProgressBar from './components/ProgressBar';
import IntroScreen from './components/IntroScreen';

const questions = [
  {
    id: 1,
    text: "You regularly make new friends.",
    image: "https://www.16personalities.com/static/images/test/facet_1_1.png",
  },
  {
    id: 2,
    text: "You spend a lot of your free time exploring various random topics that pique your interest.",
    image: "https://www.16personalities.com/static/images/test/facet_2_1.png",
  },
  {
    id: 3,
    text: "Seeing other people cry can easily make you feel like you want to cry too.",
    image: "https://www.16personalities.com/static/images/test/facet_3_1.png",
  },
  {
    id: 4,
    text: "You often make a backup plan for a backup plan.",
    image: "https://www.16personalities.com/static/images/test/facet_4_1.png",
  },
  {
    id: 5,
    text: "You usually stay calm, even under a lot of pressure.",
    image: "https://www.16personalities.com/static/images/test/facet_5_1.png",
  },
  {
    id: 6,
    text: "At social events, you rarely try to introduce yourself to new people and mostly talk to the ones you already know.",
    image: "https://www.16personalities.com/static/images/test/facet_6_1.png",
  },
  {
    id: 7,
    text: "You prefer to completely finish one project before starting another.",
    image: "https://www.16personalities.com/static/images/test/facet_7_1.png",
  },
  {
    id: 8,
    text: "You are very sentimental.",
    image: "https://www.16personalities.com/static/images/test/facet_8_1.png",
  },
  {
    id: 9,
    text: "You like to use organizing tools like schedules and lists.",
    image: "https://www.16personalities.com/static/images/test/facet_9_1.png",
  },
  {
    id: 10,
    text: "Even a small mistake can cause you to doubt your overall abilities and knowledge.",
    image: "https://www.16personalities.com/static/images/test/facet_10_1.png",
  },
];

const App: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showIntro, setShowIntro] = useState(true);

  const handleAnswer = (score: number) => {
    setAnswers([...answers, score]);
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowIntro(true);
  };

  const handleStart = () => {
    setShowIntro(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full space-y-8 bg-white p-10 rounded-xl shadow-md">
        <div className="flex items-center justify-center">
          <Brain className="h-12 w-12 text-indigo-600" />
          <h1 className="ml-3 text-3xl font-extrabold text-gray-900">Personality Test</h1>
        </div>

        {showIntro ? (
          <IntroScreen onStart={handleStart} />
        ) : currentQuestion < questions.length ? (
          <>
            <ProgressBar current={currentQuestion + 1} total={questions.length} />
            <Question
              question={questions[currentQuestion]}
              onAnswer={handleAnswer}
              currentQuestion={currentQuestion + 1}
              totalQuestions={questions.length}
            />
          </>
        ) : (
          <Result
            answers={answers}
            maxScore={questions.length * 7}
            onReset={handleReset}
          />
        )}
      </div>
    </div>
  );
};

export default App;