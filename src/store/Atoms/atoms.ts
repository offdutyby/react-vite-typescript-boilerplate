import { atom } from 'recoil'

export const defaultAtom = atom<any>({
  key: 'defaultAtom',
  default: null,
})
