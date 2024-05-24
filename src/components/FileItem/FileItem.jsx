import './FileItem.css';

function getTimeStamp(file) {
  const dateTime = new Date(file.createdAt);
  const options = {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  };
  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(dateTime);
  return formattedDate;
}

export default function FileItem({ file, findFile }) {
  // eslint-disable-next-line no-underscore-dangle
  return <li className="file"><div onClick={() => findFile(file._id)}>{file.filename} - {getTimeStamp(file)}</div></li>;
}
