import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');


export const COLORS = {

// PRIMARY & SECONDARY COLORS
primary: '#1E1F20', //black
secondary: '#CDCDD2', //gray

// COLORS
black: '#1E1F20',
white: '#FFF',
lightGray: '#F5F5F6',
transparent: 'transparent',
};


// Global Sizes
export const SIZES = {
base: 9,
font: 14,
radius: 30,
padding: 10,
padding2: 14,

// Font sizes
h1: 30,
h2: 23,
h3: 20,
h4: 18,
body1: 30,
body2: 20,
body3: 16,

// Dimension of App
width,
height,
};


const appTheme = {COLORS, SIZES};

export default appTheme;