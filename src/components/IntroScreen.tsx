import React from 'react';
import { ArrowRight } from 'lucide-react';

interface IntroScreenProps {
  onStart: () => void;
}

const IntroScreen: React.FC<IntroScreenProps> = ({ onStart }) => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-6">Discover Your Personality Type</h2>
      <p className="text-lg mb-8">
        Take our modern personality test to gain insights into your character traits, 
        strengths, and potential areas for growth. This test is inspired by the 
        Myers-Briggs Type Indicator (MBTI) but with a fresh, AI-enhanced approach.
      </p>
      <img 
        src="https://www.16personalities.com/static/images/homepage/personality-test-header.svg" 
        alt="Personality Test" 
        className="w-full h-64 object-contain rounded-lg shadow-md mb-8"
      />
      <button
        onClick={onStart}
        className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-200 text-lg"
      >
        Start the Test
        <ArrowRight className="w-5 h-5 ml-2" />
      </button>
    </div>
  );
};

export default IntroScreen;