import baseStyled, { css, CSSProp, ThemedBaseStyledInterface } from 'styled-components';

const sizes: { [key: string]: number } = {
  desktop: 768,
};

type BackQuoteArgs = string[];

interface Media {
  desktop: (...args: BackQuoteArgs) => CSSProp | undefined;
}

const media: Media = {
  desktop: (...args: BackQuoteArgs) => undefined,
};

Object.keys(sizes).reduce((acc: Media, label: string) => {
  switch (label) {
    case 'desktop':
      acc.desktop = (...args: BackQuoteArgs) => css`
        @media only screen and (min-widtj: ${sizes.desktop}px) {
          ${args}
        }
      `;
      break;
    default:
      break;
  }
  return acc;
}, media);

const colors = {
  white: '#ffffff',
  black: '#000000',
};

const secondeColors = {};
const fontSizes: string[] = [];

const theme = {
  colors,
  fontSizes,
  secondeColors,
  media,
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedBaseStyledInterface<Theme>;
export default theme;
