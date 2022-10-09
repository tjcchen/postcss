/**
 * CSS px to rem Converter
 */
const fs = require('fs');
const postcss = require('postcss');
const pxtorem = require('postcss-pxtorem');
const css = fs.readFileSync('./src/index/index.css', 'utf-8');
const options = {
  rootValue: 100,
  unitPrecision: 5,
  propList: ['font', 'margin', 'padding', 'line-height', 'letter-spacing'],
  selectorBlackList: [],
  replace: true,
  mediaQuery: false,
  minPixelValue: 0,
  exclude: null,
};
const processedCss = postcss(pxtorem(options)).process(css).css;

fs.writeFile('./src/index/index-rem.css', processedCss, (err) => {
  if (err) {
    throw err;
  }
  console.log('Rem file written');
});