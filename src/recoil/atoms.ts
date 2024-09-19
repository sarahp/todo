import { atom } from 'recoil';
import { TodoItem } from './types';

export const todoState = atom<TodoItem[]>({
  key: 'todoState',
  default: [],  // The default value is an empty array of TodoItem
});

export const loadingState = atom<boolean>({
  key: 'loadingState',
  default: false,
});

export const errorState = atom<string | null>({
  key: 'errorState',
  default: null,
});

export const currentPageState = atom<number>({
  key: 'currentPageState',
  default: 1,
});

export const perPageState = atom<number>({
  key: 'perPageState',
  default: 13,
});
