import { useState, useEffect, useRef } from 'react';
import './NewFileForm.css';
import Editor from '../Editor/Editor';

export default function NewFileForm({ addFile, user }) {
  const [content, setContent] = useState('');
  const [filename, setFilename] = useState('');
  const [isEditorActive, setIsEditorActive] = useState(false);
  const textareaContainerRef = useRef(null);

  useEffect(() => {
    const onBodyClick = (evt) => {
      const textareaContainer = textareaContainerRef.current;
      if (textareaContainer.contains(evt.target) && isEditorActive === false) {
        return;
      }
      setIsEditorActive(false);
    };
    document.body.addEventListener('click', onBodyClick);
    return () => {
      document.body.removeEventListener('click', onBodyClick);
    };
  }, []);

  async function handleAddFile(evt) {
    evt.preventDefault();
    const fileData = { filename, content, user };
    addFile(fileData);
    setFilename(filename);
    setContent(content);
  }

  return (
    <div className="new-file-form">
      <h2>New File</h2>
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
              value={content}
              onChange={(evt) => evt.preventDefault()}
              onClick={() => setIsEditorActive(true)}
              placeholder="Content..."
              required
              pattern=".{4,}"
            />
            <Editor setContent={setContent} isEditorActive={isEditorActive} />
          </div>
          <button type="submit">SAVE FILE</button>
        </form>
    </div>
  );
}
