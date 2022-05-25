let headerBtn1 = document.querySelector('.btn-1');
let headerBtn2 = document.querySelector('.btn-2');
let showcaseYearly = document.querySelector('.showcase-yearly');
let showcaseMonthly = document.querySelector('.showcase-monthly');

headerBtn2.addEventListener('click', function() {
    showcaseYearly.style.display = 'flex';
    showcaseMonthly.style.display = 'none';
    headerBtn2.classList.add('color1');
    headerBtn2.classList.add('color4');
    headerBtn1.classList.add('color2');
    headerBtn1.classList.add('color3');

    var isOpen = $slider.classList.contains('slide-in');
    $slider.setAttribute('class', isOpen ? 'slide-out' : 'slide-in');
})

headerBtn1.addEventListener('click', function() {
    showcaseMonthly.style.display = 'flex';
    showcaseYearly.style.display = 'none';
    headerBtn1.classList.remove('color2');
    headerBtn1.classList.remove('color3');
    headerBtn2.classList.remove('color1');
    headerBtn2.classList.remove('color4');

    var isOpen = $slider.classList.contains('slide-in');
    $slider.setAttribute('class', isOpen ? 'slide-out' : 'slide-in');
})