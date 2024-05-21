import { useState } from 'react';

export default function useReverseForward(initialValue) {
  const [codeHistory, setCodeHistory] = useState([initialValue]);
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(codeHistory);
  console.log(codeHistory.join(''));
  const set = (value) => {
    const newCodeHistory = codeHistory.slice(0, currentIndex + 1);
    newCodeHistory.push(value);
    setCodeHistory(newCodeHistory);
    setCurrentIndex(newCodeHistory.length - 1);
  };

  const reverse = () => {
    setCurrentIndex(() => Math.max(currentIndex - 1, 0));
    console.log(currentIndex);
    console.log('i am reverse function');
  };

  const forward = () => {
    setCurrentIndex(() => Math.min(currentIndex + 1, codeHistory.length - 1));
  };
  return [codeHistory[currentIndex], set, reverse, forward];
}
