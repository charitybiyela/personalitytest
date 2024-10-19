import React from 'react';
import { RefreshCw } from 'lucide-react';

interface ResultProps {
  answers: number[];
  maxScore: number;
  onReset: () => void;
}

const Result: React.FC<ResultProps> = ({ answers, maxScore, onReset }) => {
  const totalScore = answers.reduce((sum, score) => sum + score, 0);
  const percentage = (totalScore / maxScore) * 100;

  const personalityTypes = [
    {
      type: 'INTJ',
      name: 'Architect',
      description: 'Imaginative and strategic thinkers, with a plan for everything.',
      details: 'INTJs are analytical problem-solvers, eager to improve systems and processes with their innovative ideas. They have a talent for seeing possibilities for improvement, whether at work, at home, or in themselves.',
      comicImage: 'https://www.16personalities.com/static/images/personality-types/headers/analysts_Architect_INTJ_personality_header.svg',
    },
    {
      type: 'INTP',
      name: 'Logician',
      description: 'Innovative inventors with an unquenchable thirst for knowledge.',
      details: 'INTPs are philosophical innovators, fascinated by logical analysis, systems, and design. They are preoccupied with theory, and search for the universal law behind everything they see.',
      comicImage: 'https://www.16personalities.com/static/images/personality-types/headers/analysts_Logician_INTP_personality_header.svg',
    },
    {
      type: 'ENTJ',
      name: 'Commander',
      description: 'Bold, imaginative and strong-willed leaders, always finding a way – or making one.',
      details: 'ENTJs are strategic leaders, motivated to organize change. They are quick to see inefficiency and conceptualize new solutions, and enjoy developing long-range plans to accomplish their vision.',
      comicImage: 'https://www.16personalities.com/static/images/personality-types/headers/analysts_Commander_ENTJ_personality_header.svg',
    },
    {
      type: 'ENTP',
      name: 'Debater',
      description: 'Smart and curious thinkers who cannot resist an intellectual challenge.',
      details: 'ENTPs are inspired innovators, motivated to find new solutions to intellectually challenging problems. They are curious and clever, and seek to understand the people, systems, and principles that surround them.',
      comicImage: 'https://www.16personalities.com/static/images/personality-types/headers/analysts_Debater_ENTP_personality_header.svg',
    },
  ];

  const personalityIndex = Math.floor((percentage / 100) * personalityTypes.length);
  const personality = personalityTypes[Math.min(personalityIndex, personalityTypes.length - 1)];

  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-4">Your Personality Type:</h2>
      <div className="bg-indigo-100 p-6 rounded-lg mb-6">
        <p className="text-4xl font-extrabold text-indigo-600 mb-2">{personality.type}</p>
        <p className="text-2xl font-bold text-indigo-800 mb-4">{personality.name}</p>
        <img 
          src={personality.comicImage} 
          alt={personality.name} 
          className="w-full h-64 object-contain rounded-lg shadow-md mb-4" 
        />
        <p className="text-gray-700 mb-4">{personality.description}</p>
        <p className="text-gray-600">{personality.details}</p>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-4 mb-6">
        <div 
          className="bg-indigo-600 h-4 rounded-full transition-all duration-1000 ease-out" 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <button
        onClick={onReset}
        className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-200 text-lg"
      >
        <RefreshCw className="w-5 h-5 mr-2" />
        Take the test again
      </button>
    </div>
  );
};

export default Result;