// GRAD-1
const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
const gradBox = document.querySelector('.grad-1');
const gradText = document.querySelector('.gradient-text');

function backgroundStyle1(){
	gradBox.style.background = `linear-gradient(to right bottom, ${color1.value},${color2.value})`;
	gradText.textContent = `${gradBox.style.background};`;
}

color1.addEventListener('input',backgroundStyle1);
color2.addEventListener('input',backgroundStyle1);

// GRAD-2
const color3 = document.querySelector('.color3');
const color4 = document.querySelector('.color4');
const gradBox2 = document.querySelector('.grad-2');
const gradText2 = document.querySelector('.gradient-text2');

function backgroundStyle2(){
	gradBox2.style.background =`linear-gradient(${color3.value},${color4.value})`;
	gradText2.textContent = `${gradBox2.style.background};`;
}

color3.addEventListener('input',backgroundStyle2);
color4.addEventListener('input',backgroundStyle2);

// GRAD-3
const color5 = document.querySelector('.color5');
const color6 = document.querySelector('.color6');
const gradBox3 = document.querySelector('.grad-3');
const gradText3 = document.querySelector('.gradient-text3');

function backgroundStyle3(){
	gradBox3.style.background =`linear-gradient(${color5.value},${color6.value})`;
	gradText3.textContent = `${gradBox3.style.background};`;
}

color5.addEventListener('input',backgroundStyle3);
color6.addEventListener('input',backgroundStyle3);

// GRAD-4
const color7 = document.querySelector('.color7');
const color8 = document.querySelector('.color8');
const gradBox4 = document.querySelector('.grad-4');
const gradText4 = document.querySelector('.gradient-text4');

function backgroundStyle4(){
	gradBox4.style.background =`linear-gradient(${color7.value},${color8.value})`;
	gradText4.textContent = `${gradBox4.style.background};`;
}

color7.addEventListener('input',backgroundStyle4);
color8.addEventListener('input',backgroundStyle4);

// GRAD-5
const color9 = document.querySelector('.color9');
const color10 = document.querySelector('.color10');
const gradBox5 = document.querySelector('.grad-5');
const gradText5 = document.querySelector('.gradient-text5');

function backgroundStyle5(){
	gradBox5.style.background =`linear-gradient(${color9.value},${color10.value})`;
	gradText5.textContent = `${gradBox5.style.background};`;
}

color9.addEventListener('input',backgroundStyle5);
color10.addEventListener('input',backgroundStyle5);

// GRAD-6
const color11 = document.querySelector('.color11');
const color12 = document.querySelector('.color12');
const gradBox6 = document.querySelector('.grad-6');
const gradText6 = document.querySelector('.gradient-text6');

function backgroundStyle6(){
	gradBox6.style.background =`linear-gradient(${color11.value},${color12.value})`;
	gradText6.textContent = `${gradBox6.style.background};`;
}

color11.addEventListener('input',backgroundStyle6);
color12.addEventListener('input',backgroundStyle6);


// COPY TO CLIPBOARD
const gradColors = document.querySelectorAll('h3');

gradColors.forEach(color => {
  color.addEventListener('click', () => {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(color);
    selection.removeAllRanges();
    selection.addRange(range);

    try {
      document.execCommand('copy');
      selection.removeAllRanges();

      const original = color.textContent;
      color.textContent = 'Copied!';
      color.classList.add('success');

      setTimeout(() => {
        color.textContent = original;
        color.classList.remove('success');
      }, 1200);
    } catch(e) {
      const errorMsg = document.querySelector('.error-msg');
      errorMsg.classList.add('show');

      setTimeout(() => {
        errorMsg.classList.remove('show');
      }, 1200);
    }
  });
});