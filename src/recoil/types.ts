import { atom } from 'recoil';

// Define the shape of a todo item
export interface TodoItem {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

// `todoState` stores an array of `TodoItem` objects
export const todoState = atom<TodoItem[]>({
  key: 'todoState',
  default: [],
});

// `loadingState` stores a boolean value indicating whether the app is loading
export const loadingState = atom<boolean>({
  key: 'loadingState',
  default: false,
});

// `errorState` stores a string for error messages, or null if there's no error
export const errorState = atom<string | null>({
  key: 'errorState',
  default: null,
});

// `currentPageState` stores the current page number (default is 1)
export const currentPageState = atom<number>({
  key: 'currentPageState',
  default: 1,
});

// `perPageState` stores the number of items to show per page (default is 10)
export const perPageState = atom<number>({
  key: 'perPageState',
  default: 10,
});
