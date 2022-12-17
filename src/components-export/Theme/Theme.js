const spacing = {
  spacing01: '0.125rem',
  spacing02: '0.25rem',
  spacing03: '0.5rem',
  spacing04: '0.75rem',
  spacing05: '1rem',
  spacing06: '1.5rem',
  spacing07: '2rem',
  spacing08: '3rem',
  spacing09: '6rem',
  spacing10: '12rem',
};

const sizing = {
  sizeV01: '4vh',
  sizeV02: '6vh',
  sizeH01: '30vw',
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
  ui06: '#73a7b6',
  ui07: '#034c65',
  ui08: '#0b6884',
  // Hack for transparent color
  ui09: 'rgba(255,255,255,0)',
  ui10: '#ebfafe',
  ui11: 'rgba(11, 104, 132, 0.4)',
  textColor01: '#161616',
  textColor02: '#ffffff',
  textColor03: '#8d8d8d',
  textColor04: '#474747',
};

const dark = {};

const themes = {
  light: { ...light, ...spacing, ...fonts, ...sizing },
  dark: { ...dark, ...spacing, ...fonts, ...sizing },
};

export default themes;
