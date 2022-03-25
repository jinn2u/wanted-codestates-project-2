export interface User {
  name: null | string;
  accessId: null | string;
  level: null | number;
}
export interface UserState {
  loading: boolean;
  data: User;
}
export interface FetchUserId {
  accessId: string;
  level: number;
  name: string;
}
