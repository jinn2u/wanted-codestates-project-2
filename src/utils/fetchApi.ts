import { AUTHOR } from './constants';

const responseObj = {
  isError: false,
  data: null,
  errorData: null,
  isLoading: false,
};
const fetchApi = async <T>(url = '', options = {}, method = 'GET') => {
  url = !url.length ? '' : url.startsWith('/') ? url : `/${url}`;
  try {
    const response = await fetch(`${url}`, {
      ...options,
      method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: AUTHOR,
      },
    });
    const data = (await response.json()) as T;
    if (response.ok) {
      return {
        ...responseObj,
        data,
      };
    }
    if (response.status >= 400) {
      alert(`잘못된 요청입니다.`);
    } else if (response.status >= 500) {
      alert(`서버 에러입니다. `);
    }
    return {
      ...responseObj,
      isError: true,
      errorData: {
        status: response.status,
        message: 'asdf',
      },
    };
  } catch (e: any) {
    return {
      ...responseObj,
      isError: true,
      errorData: {
        status: e?.status,
        message: e?.message,
      },
    };
  }
};
export default fetchApi;
