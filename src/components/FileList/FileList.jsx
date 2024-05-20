import FileItem from '../FileItem/FileItem';

export default function FileList({ files }) {
  const fileListItems = files.map((file, idx) => <FileItem file={file} key={idx} />);
  return (
    <>
      <h1>Files</h1>
      <ul>{fileListItems}</ul>
    </>
  );
}
