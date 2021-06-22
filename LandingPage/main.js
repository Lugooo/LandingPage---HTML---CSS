document.addEventListener('DOMContentLoaded', function () {

    cargado();
    menuMobile();
});

function cargado() {
    const descripcion = document.querySelector('.header__description');
    descripcion.classList.add('iniciar');
}

function menuMobile(){
    const mobileMenu = document.querySelector('.menu__mobile');
    mobileMenu.addEventListener('click', function(){
        const navegacion = document.querySelector('.menu__nav');
        if(navegacion.classList.contains('mostrar')){
            navegacion.classList.remove('mostrar');
        }else{
            navegacion.classList.add('mostrar');
        }
    });
}
