import { parseQueryString } from '@utils/parseQueryString';
import { useLocation } from 'react-router-dom';

type Nick = string | undefined;

export const useGetUserNickName = () => {
  const { search } = useLocation();
  const qs = parseQueryString(search);
  return qs.nick as Nick;
};
