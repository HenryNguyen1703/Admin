var icon_close_SignIn = document.querySelector('.modal__header i');
var modal = document.querySelector('.modal');
var btn__SignIn = document.querySelector('.btn__SignIn');

function toggleModalSignIn () {
    modal.classList.toggle('hide');
}

icon_close_SignIn.addEventListener('click',toggleModalSignIn);
btn__SignIn.addEventListener('click',toggleModalSignIn);
modal.addEventListener('click', function(e){
    if(e.target === e.currentTarget) {
        toggleModalSignIn();
    }
});