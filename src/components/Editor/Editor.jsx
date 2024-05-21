import { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { tokyoNight } from '@uiw/codemirror-theme-tokyo-night';

export default function Editor() {
  const [text, setText] = useState('');
  return (
    <>
      <CodeMirror
        value={text}
        onChange={(value) => setText(value)}
        theme={tokyoNight}
        height="300px"
        style={{ textAlign: 'left' }}
        options={{
          lineNumbers: true,
          tabSize: 2,
          indentWithTabs: true,
        }}
        extensions={[javascript({ jsx: true })]}
      />
    </>
  );
}
