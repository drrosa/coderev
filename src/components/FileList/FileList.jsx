import FileItem from '../FileItem/FileItem';
import './FileList.css';

export default function FileList({ files, findFile }) {
  // eslint-disable-next-line max-len
  const fileListItems = files.map((file, idx) => <FileItem file={file} key={idx} findFile={findFile} />);
  return (
    <>
      <h1>File Versions</h1>
      <ul className='file-list' >{fileListItems}</ul>
    </>
  );
}
