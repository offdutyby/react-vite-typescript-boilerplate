import { selector } from 'recoil'

export const defaultSelector = selector<null>({
  key: 'defaultSelector',
  get: ({ get }) => {
    return null
  },
})
