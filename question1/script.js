const loginBtn = document.getElementById('login');
const registerBtn = document.getElementById('register');
const slide = document.getElementById('slide');

loginBtn.addEventListener('click', () => {
    slide.classList.remove('active-register');
    loginBtn.classList.add('active');
    registerBtn.classList.remove('active');
});

registerBtn.addEventListener('click', () => {
    slide.classList.add('active-register');
    loginBtn.classList.remove('active');
    registerBtn.classList.add('active');
});
