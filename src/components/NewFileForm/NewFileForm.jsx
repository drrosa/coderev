import { useState } from 'react';
import Editor from '../Editor/Editor';

export default function NewFileForm({ addFile, user }) {
  const [content, setContent] = useState('');
  const [filename, setFilename] = useState('');

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
        <textarea
          value={content}
          onChange={(evt) => setContent(evt.target.value)}
          placeholder="Content..."
          required
          pattern=".{4,}"
        />
        <button type="submit">SAVE FILE</button>
      </form>
      <Editor />
    </div>
  );
}
