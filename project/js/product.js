//                             Delete Product
var icon__close__delete__Product = document.querySelector('.modal__header__delete__Product i');
var modal__delete__Product =document.querySelector('.modal__delete__Product');
var btn__confirm__delete__Product = document.querySelector('.btn__confirm__delete__Product');
var btn__close__delete__Product = document.querySelector('.btn__close__delete__Product');
var trash__1 = document.querySelector('.trash__1');
var trash__2 = document.querySelector('.trash__2');
var trash__3 = document.querySelector('.trash__3');
var trash__4 = document.querySelector('.trash__4');


function toggleModalDeleteProduct () {
    modal__delete__Product.classList.toggle('hide');
}

icon__close__delete__Product.addEventListener('click',toggleModalDeleteProduct);
btn__confirm__delete__Product.addEventListener('click',toggleModalDeleteProduct);
btn__close__delete__Product.addEventListener('click',toggleModalDeleteProduct);
trash__1.addEventListener('click',toggleModalDeleteProduct);
trash__2.addEventListener('click',toggleModalDeleteProduct);
trash__3.addEventListener('click',toggleModalDeleteProduct);
trash__4.addEventListener('click',toggleModalDeleteProduct);
modal__delete__Product.addEventListener('click', function(e) {
    if (e.target === e.currentTarget) {
        toggleModalDeleteProduct ();
    }
});


//                          Alter Product
var icon__close__alter__Product = document.querySelector('.modal__header__alter__Product i');
var modal__alter__Product = document.querySelector('.modal__alter__Product');
var btn__confirm__alter__Product = document.querySelector('.btn__confirm__alter__Product');
var pen__1 = document.querySelector('.pen__1');
var pen__2 = document.querySelector('.pen__2');
var pen__3 = document.querySelector('.pen__3');
var pen__4 = document.querySelector('.pen__4');

function toggleModalAlterProduct () {
    modal__alter__Product.classList.toggle('hide');
}

icon__close__alter__Product.addEventListener('click',toggleModalAlterProduct);
btn__confirm__alter__Product.addEventListener('click',toggleModalAlterProduct);
pen__1.addEventListener('click',toggleModalAlterProduct);
pen__2.addEventListener('click',toggleModalAlterProduct);
pen__3.addEventListener('click',toggleModalAlterProduct);
pen__4.addEventListener('click',toggleModalAlterProduct);
modal__alter__Product.addEventListener('click', function(e) {
    if (e.target === e.currentTarget) {
        toggleModalAlterProduct ();
    }
});