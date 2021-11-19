import palx from 'palx';
import { css } from '@emotion/react';

export const normalize = css`
  /* stylelint-disable*/

  html {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
  }

  body {
    margin: 0;
  }

  main {
    display: block;
  }

  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }

  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }

  pre {
    font-family: monospace, monospace;
    font-size: 1em;
  }

  a {
    background-color: transparent;
  }

  abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    text-decoration: underline dotted;
  }

  b,
  strong {
    font-weight: bolder;
  }

  code,
  kbd,
  samp {
    font-family: monospace, monospace;
    font-size: 1em;
  }

  small {
    font-size: 80%;
  }

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  img {
    border-style: none;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
  }

  button,
  input {
    overflow: visible;
  }

  button,
  select {
    text-transform: none;
  }

  button,
  [type='button'],
  [type='reset'],
  [type='submit'] {
    -webkit-appearance: button;
  }

  button::-moz-focus-inner,
  [type='button']::-moz-focus-inner,
  [type='reset']::-moz-focus-inner,
  [type='submit']::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  button:-moz-focusring,
  [type='button']:-moz-focusring,
  [type='reset']:-moz-focusring,
  [type='submit']:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }

  legend {
    box-sizing: border-box;
    color: inherit;
    display: table;
    max-width: 100%;
    padding: 0;
    white-space: normal;
  }

  progress {
    vertical-align: baseline;
  }

  textarea {
    overflow: auto;
  }

  [type='checkbox'],
  [type='radio'] {
    box-sizing: border-box;
    padding: 0;
  }

  [type='number']::-webkit-inner-spin-button,
  [type='number']::-webkit-outer-spin-button {
    height: auto;
  }

  [type='search'] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }

  [type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }

  details {
    display: block;
  }

  summary {
    display: list-item;
  }

  template {
    display: none;
  }

  [hidden] {
    display: none;
  }

  /* stylelint-enable */
`;

export const colors = {
  white: '#fff',
  dark: '#333',
  ...palx('#F8485E')
};

export const theme = {
  breakpoints: ['48rem', '64rem', '76rem', '88rem'],
  fontSizes: {
    xxs: 10,
    xs: 12,
    s: 14,
    m: 16,
    l: 20,
    xl: 30,
    xxl: 40
  },
  colors,
  space: {
    '-xxxl': -96,
    '-xxl': -64,
    '-xl': -48,
    '-l': -32,
    '-m': -16,
    '-s': -12,
    '-xs': -8,
    '-xxs': -4,
    '-xxxs': -2,
    '-gutter': -24,
    none: 0,
    gutter: 24,
    xxxs: 2,
    xxs: 4,
    xs: 8,
    s: 12,
    m: 16,
    l: 32,
    xl: 48,
    xxl: 64,
    xxxl: 96
  },
  fonts: {
    base: `BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif`,
    monospace: `"Inconsolata", "Consolas", "Monaco", monospace`
  },
  fontWeights: {
    regular: 400,
    medium: 500,
    bold: 700
  },
  lineHeights: {
    none: 1,
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2
  },
  letterSpacings: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: 0,
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em'
  },
  shadows: {
    small: '0 0 4px rgba(0, 0, 0, .125)',
    large: '0 0 24px rgba(0, 0, 0, .125)'
  },
  borders: {
    none: 0,
    xs: '1px solid',
    s: '2px solid',
    m: '4px solid',
    l: '6px solid',
    xl: '8px solid'
  },
  radii: {
    none: 0,
    full: 9999,
    round: '50%',
    s: 2,
    m: 4,
    l: 6,
    xl: 8,
    xxl: 16
  },
  zIndices: {
    none: 0,
    auto: 'auto',
    z1: 1,
    z10: 10,
    z20: 20,
    z30: 30,
    z40: 40,
    z50: 50
  }
};
