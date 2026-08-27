const fs = require('fs');

let css = fs.readFileSync('style.css', 'utf8');

const whiteTextRule = `
/* Force bright white text on marquee and all DESIGN headings */
#info-section,
#info-section .marquee-travel,
#info-section .inner-text,
.marquee-travel,
.marquee-travel .inner-text,
.marquee-travel .inner-text div,
.marquee-travel span {
  color: #ffffff !important;
  fill: #ffffff !important;
  opacity: 0.95 !important;
}
`;

css = whiteTextRule + '\n' + css;
fs.writeFileSync('style.css', css, 'utf8');
console.log('Successfully set marquee text to pure white in style.css!');
