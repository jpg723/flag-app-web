import { atom } from 'recoil';

export const emailState = atom<string>({
  key: 'emailState',
  default: '',
});

export const userIdState= atom<string>({
  key: 'userIdState',
  default: '',
});

export const confirmPasswordValidState = atom({
  key: 'confirmPasswordValidState',
  default: false,
});
