interface ApiConfig {
  url?: string;
  method: 'GET' | 'POST' | 'PATCH' | 'DELETE';
  headers: {
    Accept: string;
    'Content-Type': string;
  };
}

export const apiConfig = {
  url: 'https://randomuser.me/api',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
};

export const setRequest = (url: string, config: ApiConfig) => {
  return fetch(url, config);
};

export const returnRes = async (res: Response) => {
  if (res.ok) {
    return res.json();
  } else {
    const err = await res.json();
    const errorMessage = `Ошибка: ${res.status}: ${err.message}`;
    return Promise.reject(errorMessage);
  }
};
