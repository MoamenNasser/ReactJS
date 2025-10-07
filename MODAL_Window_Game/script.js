'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
// use the querySelectorAll to select all buttons with the class 'show-modal' (if not used, only the first button will be selected)
const btnsOpenModal = document.querySelectorAll('.show-modal');


console.log(btnsOpenModal);

const openModal = function () {
    console.log('Button clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};


