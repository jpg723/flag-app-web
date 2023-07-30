import { atom, selector } from 'recoil';

export interface IFriendTypes {
  id: number;
  name: string;
}

export interface IFlag {
  flagName: string;
  checkedFriends: IFriendTypes[];
  selectedDates: string[];
  minimumTime: number;
  flagPlace: string;
  flagMemo: string;
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
    minimumTime: 1,
    flagPlace: '',
    flagMemo: '',
  },
});
