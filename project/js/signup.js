var btnSignUp = document.querySelector('.btn__SignUp');
var modal__Signup = document.querySelector('.modal__Signup');
var icon_close_Signup = document.querySelector('.modal__header__Signup i');
var button__Register__Signup = document.querySelector('.modal__footer__Signup button');

function toggleModalSignUp () {
    modal__Signup.classList.toggle('hide');
}

btnSignUp.addEventListener('click', toggleModalSignUp);
icon_close_Signup.addEventListener('click', toggleModalSignUp);
button__Register__Signup.addEventListener('click', toggleModalSignUp);
modal__Signup.addEventListener('click', function(e){
    if(e.target === e.currentTarget) {
        toggleModalSignUp ();
    }
});
