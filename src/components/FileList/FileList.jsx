import FileItem from '../FileItem/FileItem';

export default function FileList({ files, findFile }) {
  // eslint-disable-next-line max-len
  const fileListItems = files.map((file, idx) => <FileItem file={file} key={idx} findFile={findFile} />);
  return (
    <>
      <h1>Files</h1>
      <ul>{fileListItems}</ul>
    </>
  );
}
