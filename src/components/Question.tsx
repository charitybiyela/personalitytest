import React from 'react';

interface QuestionProps {
  question: {
    text: string;
    image: string;
  };
  onAnswer: (score: number) => void;
  currentQuestion: number;
  totalQuestions: number;
}

const Question: React.FC<QuestionProps> = ({ question, onAnswer, currentQuestion, totalQuestions }) => {
  return (
    <div className="flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 mb-6 md:mb-0 md:mr-6">
        <img 
          src={question.image} 
          alt="Question illustration" 
          className="w-full h-64 object-cover rounded-lg shadow-md"
          onError={(e) => {
            e.currentTarget.src = 'https://source.unsplash.com/featured/?question';
          }}
        />
      </div>
      <div className="md:w-1/2">
        <h2 className="text-xl font-semibold mb-4">{question.text}</h2>
        <div className="space-y-3">
          {[1, 2, 3, 4, 5, 6, 7].map((score) => (
            <button
              key={score}
              onClick={() => onAnswer(score)}
              className="w-full text-left p-3 rounded-md bg-indigo-50 hover:bg-indigo-100 transition-colors duration-200 flex items-center"
            >
              <span className="w-8 h-8 rounded-full bg-indigo-200 flex items-center justify-center mr-3">
                {score}
              </span>
              <span>
                {score === 1 && "Strongly Disagree"}
                {score === 2 && "Disagree"}
                {score === 3 && "Slightly Disagree"}
                {score === 4 && "Neutral"}
                {score === 5 && "Slightly Agree"}
                {score === 6 && "Agree"}
                {score === 7 && "Strongly Agree"}
              </span>
            </button>
          ))}
        </div>
        <div className="mt-6 text-sm text-gray-500">
          Question {currentQuestion} of {totalQuestions}
        </div>
      </div>
    </div>
  );
};

export default Question;