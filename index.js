const menu = document.querySelector('.header__menu_click');
const icon = document.querySelector('.click-icon');

icon.addEventListener('click', (e) => {
    menu.classList.toggle('active');
})

// const slider = document.querySelector('.slider-section');
// const dots = document.querySelector('.slider-section__container__slider');

// let activeElement = 1;
// let maxElemnt = 5;


// slider.addEventListener('click', () => {
//   dots.children[activeElement-1].classList.remove('active-dot')
//   if (activeElement >= maxElemnt) {
//     slider.style.transform = translateX(0);
//     activeElement = 1;
//      dots.children[0].classList.add('active-dot')
//     return;
//   }
//   slider.style.transform = translateX(`-${  activeElement * 900}px`);
//     activeElement++
//    dots.children[activeElement - 1].classList.add('active-dot')
// })

const inputName = document.querySelector('.form__container_right__template-input_name');
const inputPhone = document.querySelector('.form__container_right__template-input_phone');
const button = document.querySelector('.form__container_right__template__button-btn');

button.addEventListener('click', (e) => {
    e.preventDefault();
    if(inputName.value === ""){
        inputName.style.border = "1px solid red";
    } else {
        inputName.style.border = "1px solid #ffffff";
    }
    if(inputPhone.value === ""){
        inputPhone.style.border = "1px solid red";
    } else {
        inputPhone.style.border = "1px solid #ffffff";
    }
})
