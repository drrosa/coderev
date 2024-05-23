export default function FileItem({ file, findFile }) {
  // eslint-disable-next-line no-underscore-dangle
  return <li><div onClick={() => findFile(file._id)}>{file.filename}</div></li>;
}
