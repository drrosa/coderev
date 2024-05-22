import sendRequest from './send-request';

const BASE_URL = 'api/files';

// eslint-disable-next-line import/prefer-default-export
export async function createFile(fileData) {
  return sendRequest(BASE_URL, 'POST', fileData);
}
