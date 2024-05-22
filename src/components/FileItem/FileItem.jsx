export default function FileItem({ file, findFile }) {
  return <li><div onClick={() => findFile(file._id)}>{file.filename}</div></li>;
}
