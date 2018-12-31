let modal = document.querySelector('.modal');
let backdrop = document.querySelector('.backdrop');
let planButton = document.querySelectorAll('.button');
let modalNegative = document.querySelector('.modal__action--negative');
let toggleButton = document.querySelector('.toggle-button');
let mobileNav = document.querySelector('.mobile-nav');


planButton.forEach((plan) => {
    plan.addEventListener('click', () => {
        backdrop.classList.add('open');
        modal.classList.add('open');
    })
})

backdrop.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    closeModal();
})

if(modalNegative){
    modalNegative.addEventListener('click', closeModal)
}

toggleButton.addEventListener('click', () => {
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
})

function closeModal() {
    backdrop.classList.remove('open');
    if(modal){
        modal.classList.remove('open');
    }
}
