import { createGlobalStyle } from 'styled-components'
export const lightTheme = {
   body: '#fffff',
   main: '#5C14DB',
   mainColor: '#FFFFFF',
   accent: '#E5DE17',
   accentColor: '#161616',
   secondary: '#FFFFFF',
   secondaryColor: '#343434',
   dullColor: '#343434',
   ternary: '#000000',
   codeColor: '#D121C5',
}
export const GlobalStyles = createGlobalStyle`
* {
   box-sizing: border-box;
}
body {
   margin: 0;
   padding: 0;
   font-family: sans-serif !important;
   font-weight: 400;
   font-style: normal;
   transition: all 0.50s linear;
}
input, 
textarea, 
button 
{font-family: inherit;}
`