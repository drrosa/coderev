import sendRequest from './send-request';

const BASE_URL = 'api/files';

export async function createFile(fileData) {
  return sendRequest(BASE_URL, 'POST', fileData);
}

export async function fetchFiles() {
  return sendRequest(BASE_URL, 'GET');
}
