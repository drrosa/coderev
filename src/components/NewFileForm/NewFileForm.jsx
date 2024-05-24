/* eslint-disable react/style-prop-object */
import { useState, useRef } from 'react';
import './NewFileForm.css';
import { Button } from '@adobe/react-spectrum';
import Editor from '../Editor/Editor';
import useReverseForward from '../../hooks/useReverseForward';
import { createFile } from '../../utilities/files-api';

export default function NewFileForm({
  addFile, user, fileContent, setFoundFile,
}) {
  const [filename, setFilename] = useState('');
  const [isEditorActive, setIsEditorActive] = useState(true);
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
    setFilename('');
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
      <div className='view-edit-btn'>
      <Button variant='secondary' style="fill" onPress={() => setIsEditorActive(!isEditorActive)}>{isEditorActive ? '✏️' : '👀'}</Button>
      </div>
      <form onSubmit={handleAddFile}>
        <div className='fileName-save'>
          <input
            value={filename}
            onChange={(evt) => setFilename(evt.target.value)}
            placeholder="Filename"
            required
            pattern=".{4,}"
          />
          <Button type="submit" variant="accent" style="fill" >SAVE FILE</Button>
        </div>
        <div className="textarea-container" ref={textareaContainerRef}>
          <textarea
            value={fileContent.length ? fileContent.join('') : contentLog.join('')}
            onChange={(evt) => evt.preventDefault()}
            placeholder="Content..."
            required
            pattern=".{4,}"
          />
          <Editor
            fileContent={fileContent}
            setFoundFile={setFoundFile}
            contentLog={contentLog}
            setContentLog={setContentLog}
            isEditorActive={isEditorActive}
          />
        </div>
      </form>
      <div className='reverse-forward-buttons'>
      <Button variant="primary" style="outline" onPressStart={() => handleMouseDown(reverse)} onPressEnd={handleMouseUp}>Hold Reverse</Button>
      <Button variant="primary" style="outline" onPress={reverse}>Click Reverse</Button>
      <Button variant="primary" style="outline" onPress={forward}>Click Forward</Button>
      <Button variant="primary" style="outline" onPressStart={() => handleMouseDown(forward)} onPressEnd={handleMouseUp}>Hold Forward</Button>
      </div>
    </div>
  );
}
