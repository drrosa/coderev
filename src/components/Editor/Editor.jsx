import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { tokyoNight } from '@uiw/codemirror-theme-tokyo-night';
import './Editor.css';

export default function Editor({
  contentLog, setContentLog, isEditorActive, foundFile,
}) {
  const handleOnChange = (str) => {
    setContentLog(str.split(''));
  };

  // if (foundFile.length !== 0) setContentLog(foundFile);

  return (
    <div className='editor' style={{ visibility: `${isEditorActive ? 'visible' : 'hidden'}` }}>
      <CodeMirror
        value={foundFile.length !== 0 ? foundFile.contentLog.join('') : contentLog.join('')}
        onChange={(text) => handleOnChange(text)}
        theme={tokyoNight}
        style={{ textAlign: 'left', overflow: 'auto' }}
        options={{
          lineNumbers: true,
          tabSize: 2,
          indentWithTabs: true,
        }}
        extensions={[javascript({ jsx: true })]}
        autoFocus={isEditorActive}
      />
    </div>
  );
}
