var icon__close__detail__Order = document.querySelector('.modal__header__detail__Order i');
var modal__detail__Order = document.querySelector('.modal__detail__Order');
var btn__close__Order = document.querySelector('.btn__close__Order');
var info__1 = document.querySelector('.info__1');
var info__2 = document.querySelector('.info__2');
var info__3 = document.querySelector('.info__3');
var info__4 = document.querySelector('.info__4');

function toggleModalDetailOrder () {
    modal__detail__Order.classList.toggle('hide');
}

icon__close__detail__Order.addEventListener('click',toggleModalDetailOrder);
btn__close__Order.addEventListener('click',toggleModalDetailOrder);
info__1.addEventListener('click',toggleModalDetailOrder);
info__2.addEventListener('click',toggleModalDetailOrder);
info__3.addEventListener('click',toggleModalDetailOrder);
info__4.addEventListener('click',toggleModalDetailOrder);
modal__detail__Order.addEventListener('click',function(e){
    if(e.target === e.currentTarget) {
        toggleModalDetailOrder();
    }
});