import { atom } from 'recoil';

export const todoState = atom({
    key: 'todoState',
    default: [],
});

export const loadingState = atom({
    key: 'loadingState',
    default: [],
});

export const errorState = atom({
    key: 'errorState',
    default: [],
});

export const currentPageState = atom({
    key: 'currentPageState',
    default: 1,
});

export const perPageState = atom({
    key: 'perPageState',
    default: 10,
});
