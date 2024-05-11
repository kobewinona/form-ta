import { apiConfig, setRequest, returnRes } from './apiConfig';

export const getRandomName = () => {
  return setRequest(apiConfig['url'], {
    method: 'GET',
    ...apiConfig
  }).then(res => returnRes(res));
};
