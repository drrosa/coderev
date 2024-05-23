import { useState, useRef } from 'react';
import './NewFileForm.css';
import Editor from '../Editor/Editor';
import useReverseForward from '../../hooks/useReverseForward';
import { createFile } from '../../utilities/files-api';

export default function NewFileForm({ addFile, user, foundFile }) {
  const [filename, setFilename] = useState('');
  const [isEditorActive, setIsEditorActive] = useState(false);
  const textareaContainerRef = useRef(null);
  const [contentLog, setContentLog, reverse, forward] = useReverseForward([], 25);
  // eslint-disable-next-line no-unused-vars
  const [intervalId, setIntervalId] = useState(null);
  const intervalRef = useRef(null);

  async function handleAddFile(evt) {
    evt.preventDefault();
    const fileData = { filename, user, contentLog };
    const file = await createFile(fileData);
    addFile(file);
    setFilename(filename);
  }

  const handleMouseDown = (action) => {
    intervalRef.current = setInterval(action, 100);
    setIntervalId(intervalRef.current);
  };

  const handleMouseUp = () => {
    clearInterval(intervalRef.current);
    setIntervalId(null);
  };

  return (
    <div className="new-file-form">
      <h2>New File</h2>
      <button onClick={() => setIsEditorActive(!isEditorActive)}>{isEditorActive ? 'Hide Editor' : 'Show Editor'}</button>
      <form onSubmit={handleAddFile}>
        <input
          value={filename}
          onChange={(evt) => setFilename(evt.target.value)}
          placeholder="Filename"
          required
          pattern=".{4,}"
        />
        <div className="textarea-container" ref={textareaContainerRef}>
          <textarea
            value={foundFile.length !== 0 ? foundFile.contentLog.join('') : contentLog.join('')}
            onChange={(evt) => evt.preventDefault()}
            placeholder="Content..."
            required
            pattern=".{4,}"
          />
          <Editor
            foundFile={foundFile}
            contentLog={contentLog}
            setContentLog={setContentLog}
            isEditorActive={isEditorActive}
          />
        </div>
        <button id="save-btn" type="submit">SAVE FILE</button>
      </form>
      <button
          onMouseDown={() => handleMouseDown(reverse)}
          onMouseUp={handleMouseUp}
        >
          Hold Reverse
        </button>
        <button onClick={reverse}>Click Reverse</button>
        <button onClick={forward}>Click Forward</button>
        <button
          onMouseDown={() => handleMouseDown(forward)}
          onMouseUp={handleMouseUp}
        >
          Hold Forward
        </button>
    </div>
  );
}
