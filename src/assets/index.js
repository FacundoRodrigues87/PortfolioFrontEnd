window.addEventListener('scroll', changeBg);

function changeBg(){
    var scrollvalue = window.scrollY;
    var navbar = document.getElementById('nav');
    if (scrollvalue <= 10) {
        navbar. classList.remove('bgColor');
    } else {
        navbar. classList.add('bgColor');
    }
}


function showModifi() {
    document.getElementById('modifi').style.display = 'flex';
}

