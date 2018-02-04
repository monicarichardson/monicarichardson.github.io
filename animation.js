function openNav() {
    document.getElementById("sideNav").style.left = "0px";
}

function closeNav() {
    document.getElementById("sideNav").style.left = "-250px";
}

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});