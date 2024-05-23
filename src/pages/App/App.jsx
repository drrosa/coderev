import { useEffect, useState } from 'react';
import {
  useHref, useNavigate,
} from 'react-router-dom';
import { defaultTheme, Provider } from '@adobe/react-spectrum';
import { getUser } from '../../utilities/user-token';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import FileList from '../../components/FileList/FileList';
import NewFileForm from '../../components/NewFileForm/NewFileForm';
import { fetchFiles } from '../../utilities/files-api';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [files, setFiles] = useState([]);
  const [foundFile, setFoundFile] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getFiles() {
      if (user) {
        setFiles(await fetchFiles());
      } else {
        setFiles([]);
      }
    }
    getFiles();
  }, [user]);

  function addFile(file) {
    setFiles([...files, file]);
  }

  function findFile(fileID) {
    // eslint-disable-next-line no-underscore-dangle
    const thisFile = files.find((file) => file._id === fileID);
    setFoundFile(thisFile);
  }

  return (
    <Provider theme={defaultTheme} router={{ navigate, useHref }}>
      <main className="App">
        { user
          ? <>
              <NavBar user={user} setUser={setUser} />
              <NewFileForm addFile={addFile} user={user} fileContent={foundFile.contentLog} />
              { files.length
                ? <FileList files={files} findFile={findFile} />
                : <h3>No Files Yet!</h3>
              }
            </>
          : <AuthPage setUser={setUser} />
        }
      </main>
    </Provider>
  );
}
