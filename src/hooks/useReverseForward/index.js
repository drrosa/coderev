import { useState } from 'react';

export default function useReverseForward(initialValue) {
  const [codeHistory, setCodeHistory] = useState([initialValue]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const set = (value) => {
    const newCodeHistory = codeHistory.slice(0, currentIndex + 1);
    newCodeHistory.push(value);
    setCodeHistory(newCodeHistory);
    setCurrentIndex(newCodeHistory.length - 1);
  };

  const reverse = () => {
    setCurrentIndex((idx) => Math.max(idx - 1, 0));
  };

  const forward = () => {
    setCurrentIndex((idx) => Math.min(idx + 1, codeHistory.length - 1));
  };
  return [codeHistory[currentIndex], set, reverse, forward];
}
