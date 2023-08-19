import { atom } from 'recoil';

export const SignUpIdAtom = atom<string>({
  key: 'SignUpId',
  default: '',
});

export const SignUpPwAtom = atom<string>({
  key: 'SignUpPw',
  default: '',
});

export const SignUpNameAtom = atom<string>({
  key: 'SignUpName',
  default: '',
});

export const SignUpFileAtom = atom<string | any>({
  key: 'SignUpProfile',
  default: null,
});
