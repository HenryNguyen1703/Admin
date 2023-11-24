//                        Block Member

var icon__close__delete_Admin = document.querySelector('.modal__header__delete__Admin i');
var modal__delete__Admin = document.querySelector('.modal__delete__Admin');
var btn__confirm__delete__Admin = document.querySelector('.btn__confirm__delete__Admin');
var btn__close__delete__Admin = document.querySelector('.btn__close__delete__Admin');
var lock__1 = document.querySelector('.lock__1');
var lock__2 = document.querySelector('.lock__2');
var lock__3 = document.querySelector('.lock__3');
var lock__4 = document.querySelector('.lock__4');

function toggleModalDeleteAdmin () {
    modal__delete__Admin.classList.toggle('hide');
}

icon__close__delete_Admin.addEventListener('click',toggleModalDeleteAdmin);
btn__confirm__delete__Admin.addEventListener('click',toggleModalDeleteAdmin);
btn__close__delete__Admin.addEventListener('click',toggleModalDeleteAdmin);
lock__1.addEventListener('click',toggleModalDeleteAdmin);
lock__2.addEventListener('click',toggleModalDeleteAdmin);
lock__3.addEventListener('click',toggleModalDeleteAdmin);
lock__4.addEventListener('click',toggleModalDeleteAdmin);
modal__delete__Admin.addEventListener('click', function(e) {
    if (e.target === e.currentTarget) {
        toggleModalDeleteProduct ();
    }
});


//                      Alter Member
var icon__close__alter__Admin = document.querySelector('.modal__header__alter__Admin i');
var modal__alter__Admin = document.querySelector('.modal__alter__Admin');
var btn__confirm__alter__Admin = document.querySelector('.btn__confirm__alter__Admin');
var pen__1 = document.querySelector('.pen__1');
var pen__2 = document.querySelector('.pen__2');
var pen__3 = document.querySelector('.pen__3');
var pen__4 = document.querySelector('.pen__4');


function toggleModalAlterAdmin () {
    modal__alter__Admin.classList.toggle('hide');
}

icon__close__alter__Admin.addEventListener('click',toggleModalAlterAdmin);
btn__confirm__alter__Admin.addEventListener('click',toggleModalAlterAdmin);
pen__1.addEventListener('click',toggleModalAlterAdmin);
pen__2.addEventListener('click',toggleModalAlterAdmin);
pen__3.addEventListener('click',toggleModalAlterAdmin);
pen__4.addEventListener('click',toggleModalAlterAdmin);
modal__alter__Admin.addEventListener('click', function(e) {
    if(e.target === e.currentTarget) {
        toggleModalAlterAdmin();
    }
});
