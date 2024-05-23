import { useState } from 'react';

export default function useReverseForward(initialValue) {
  const [contentLog, setContentLog] = useState([initialValue]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const set = (value, fileContentLog = null) => {
    const newContentLog = fileContentLog || contentLog.slice(0, currentIndex + 1);
    newContentLog.push(value);
    setContentLog(newContentLog);
    setCurrentIndex(newContentLog.length - 1);
  };

  const reverse = () => {
    setCurrentIndex((idx) => Math.max(idx - 1, 0));
  };

  const forward = () => {
    setCurrentIndex((idx) => Math.min(idx + 1, contentLog.length - 1));
  };
  return [contentLog[currentIndex], set, reverse, forward];
}
