import { atom } from 'recoil';

export const emailState = atom<string>({
  key: 'emailState',
  default: '',
});

export const userIdState = atom<string>({
  key: 'userIdState',
  default: '',
});

export const confirmPasswordValidState = atom({
  key: 'confirmPasswordValidState',
  default: false,
});

export interface IFriendTypes {
  id: number;
  name: string;
}

export interface IOption {
  content: string | number;
  isChecked: boolean;
}

export interface IFlag {
  flagName: string;
  checkedFriends: IFriendTypes[];
  selectedDates: string[];
  cycle: string;
  minimumTime: IOption;
  flagPlace: IOption;
  flagMemo: IOption;
}

export const friendListAtom = atom<IFriendTypes[]>({
  key: 'friendList',
  default: [
    { id: 0, name: '노키' },
    { id: 1, name: '차차' },
    { id: 2, name: '마크' },
    { id: 3, name: '다다' },
    { id: 4, name: '제이피지' },
    { id: 5, name: '룰루' },
    { id: 6, name: '랄라' },
    { id: 7, name: '롤롤' },
    { id: 8, name: '루루' },
    { id: 9, name: '리리' },
  ],
});

export const makeFlagAtom = atom<IFlag>({
  key: 'makeFlag',
  default: {
    flagName: '',
    checkedFriends: [],
    selectedDates: [],
    cycle: '',
    minimumTime: {
      content: 1,
      isChecked: false,
    },
    flagPlace: {
      content: '',
      isChecked: false,
    },
    flagMemo: {
      content: '',
      isChecked: false,
    },
  },
});

export const addFriendAtom = atom<IFriendTypes>({
  key: 'addFriend',
  default: {
    id: -1,
    name: '',
  },
});

export const delFriendAtom = atom<IFriendTypes>({
  key: 'delFriend',
  default: {
    id: -1,
    name: '',
  },
});
