const iconMenu = document.querySelector(".menu_icon");
if(iconMenu) {
    const menuBody = document.querySelector(".header_nav");
    iconMenu.addEventListener("click", function(e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle("_active");
        menuBody.classList.toggle("_active");
    })
}