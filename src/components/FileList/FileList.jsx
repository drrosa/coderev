import { ListView, Item } from '@adobe/react-spectrum';
import './FileList.css';

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

export default function FileList({ files, findFile }) {
  return (
    <div className="file-list-container">
      <h1>File Versions</h1>
      <div className="file-list">
        <ListView
          selectionMode="none"
          aria-label="File List"
          maxWidth="size-5000"
          onAction={(key) => {
            findFile(key);
          }}
        >
          {files.map((file) => (
            // eslint-disable-next-line no-underscore-dangle
            <Item key={file._id} textValue={file.filename}>
              {`${file.filename} (${getTimeStamp(file)})`}
            </Item>
          ))}
        </ListView>
      </div>
    </div>
  );
}
