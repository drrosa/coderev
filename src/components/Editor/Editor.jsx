import { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';

export default function Editor() {
  const [text, setText] = useState('');
  return (
    <>
      <CodeMirror
        value={text}
        onChange={(value) => setText(value)}
        height="300px"
        style={{ textAlign: 'left' }}
        options={{
          lineNumbers: true,
          tabSize: 2,
          indentWithTabs: true,
        }}
      />
    </>
  );
}
