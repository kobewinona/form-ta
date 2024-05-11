import { apiConfig, setRequest, returnRes } from './apiConfig';

export const getRandomName = async () => {
  const res = await setRequest(apiConfig['url'], {
    method: 'GET',
    ...apiConfig,
  });
  return await returnRes(res);
};
