import { atom } from 'recoil';

export const SignUpIdAtom = atom<string | undefined>({
  key: 'SignUpId',
  default: undefined,
});
export const SignUpPwAtom = atom<string | undefined>({
  key: 'SignUpPw',
  default: undefined,
});
export const SignUpProfileAtom = atom<string | any>({
  key: 'SignUpProfile',
  default: null,
});
export const SignUpNameAtom = atom<string | undefined>({
  key: 'SignUpName',
  default: undefined,
});
