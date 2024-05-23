import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { tokyoNight } from '@uiw/codemirror-theme-tokyo-night';
import './Editor.css';

export default function Editor({
  contentLog, setContentLog, isEditorActive, fileContent, setFoundFile,
}) {
  const handleOnChange = (str) => {
    if (fileContent.length) {
      fileContent.unshift('');
      const fileContentLog = fileContent.map((_, idx) => fileContent.slice(0, idx + 1));
      setContentLog(str.split(''), fileContentLog);
      setFoundFile({ filename: '', contentLog: [] });
    } else {
      setContentLog(str.split(''));
    }
  };

  return (
    <div className='editor' style={{ visibility: `${isEditorActive ? 'visible' : 'hidden'}` }}>
      <CodeMirror
        value={fileContent.length ? fileContent.join('') : contentLog.join('')}
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
