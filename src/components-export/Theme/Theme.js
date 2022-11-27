const spacing = {
  spacing01: '0.125rem',
  spacing02: '0.25rem',
  spacing03: '0.5rem',
  spacing04: '0.75rem',
  spacing05: '1rem',
  spacing06: '1.5rem',
  spacing07: '2rem',
  spacing08: '3rem',
};

// Inter
const fonts = {
  body: {
    fontFamily: 'Inter',
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: '1.5rem',
  },
  bodyBold: {
    fontFamily: 'Inter',
    fontSize: '1rem',
    fontWeight: 600,
    lineHeight: '1.5rem',
  },
  label: {
    fontFamily: 'Inter',
    fontSize: '0.875rem',
    fontWeight: 400,
    lineHeight: '1.25rem',
  },
  labelBold: {
    fontFamily: 'Inter',
    fontSize: '0.875rem',
    fontWeight: 600,
    lineHeight: '1.25rem',
  },
  title: {
    fontFamily: 'Inter',
    fontSize: '1.5rem',
    fontWeight: 600,
    lineHeight: '2rem',
  },
  titleBold: {
    fontFamily: 'Inter',
    fontSize: '1.5rem',
    fontWeight: 700,
    lineHeight: '2rem',
  },
};

const light = {
  ui01: '#ffffff',
  ui02: '#f4f4f4',
  ui03: '#e0e0e0',
  ui04: '#8d8d8d',
  ui05: '#161616',
  textColor01: '#161616',
  textColor02: '#ffffff',
  textColor03: '#8d8d8d',
};

const dark = {};

const themes = {
  light: { ...light, ...spacing, ...fonts },
  dark: { ...dark, ...spacing, ...fonts },
};

export default themes;
