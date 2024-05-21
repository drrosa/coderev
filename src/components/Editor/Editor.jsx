import { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { tokyoNight } from '@uiw/codemirror-theme-tokyo-night';
import './Editor.css';

export default function Editor() {
  const [text, setText] = useState('');
  return (
    <div className='editor'>
      <CodeMirror
        value={text}
        onChange={(value) => setText(value)}
        theme={tokyoNight}
        style={{ textAlign: 'left', overflow: 'auto' }}
        options={{
          lineNumbers: true,
          tabSize: 2,
          indentWithTabs: true,
        }}
        extensions={[javascript({ jsx: true })]}
      />
    </div>
  );
}
