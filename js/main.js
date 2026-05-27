document.addEventListener('DOMContentLoaded', function () {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.header__top');
    const overlay = document.querySelector('.overlay');

    function closeMenu() {
        menu.classList.remove('header__top--open');
        overlay.classList.remove('overlay--show');
        burger.classList.remove('burger--active');
    }

    function openMenu() {
        menu.classList.add('header__top--open');
        overlay.classList.add('overlay--show');
        burger.classList.add('burger--active');
    }

    burger.addEventListener('click', function (e) {
        e.preventDefault();
        if (menu.classList.contains('header__top--open')) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    // Закрытие при клике на оверлей
    overlay.addEventListener('click', function () {
        closeMenu();
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Инициализация MixItUp
    var containerEl = document.querySelector('.directions__list');
    var mixer = mixitup(containerEl, {
        selectors: {
            target: '.mix'
        }
    });
});

// 2. Управление активным классом на кнопках
var buttons = document.querySelectorAll('.directions__filter-btn');

buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        // Удаляем класс active у всех кнопок
        buttons.forEach(function (btn) {
            btn.classList.remove('data-mixitup-control');
        });
        // Добавляем класс active на нажатую кнопку
        this.classList.add('data-mixitup-control');
    });
});

$('.team__slider').slick({
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    draggable: false,
    waitForAnimate: false,
    appendArrows: $('.team__slider-arrows'),
    prevArrow: '<button type="button" class="team__slider-arrow team__slider-prev">Previous</button>',
    nextArrow: '<button type="button" class="team__slider-arrow team__slider-next">Next</button>',
    responsive:
        [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 2
                }
            },
        
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    draggable: true
                }
            }
        ]
})

$('.team__slider-prev').on('click', function (e) {
    e.preventDefault();
    $('.team__slider').slick('slickPrev');
});

$('.team__slider-next').on('click', function (e) {
    e.preventDefault();
    $('.team__slider').slick('slickNext');
});

$('.comentaries__slider').slick({
    arrows: false,
    dots: true,
    draggable: false,
    waitForAnimate: false,
    appendDots: $('.comentaries__slider-dots'),
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive:
    [
        {
            breakpoint: 576,
            settings: {
                draggable: true
            }
        }
    ]
})

$('.com__slider-prev').on('click', function (e) {
    e.preventDefault();
    $('.comentaries__slider').slick('slickPrev');
});

$('.com__slider-next').on('click', function (e) {
    e.preventDefault();
    $('.comentaries__slider').slick('slickNext');
});

$('.programm__acc-link').on('click', function (e) {
    e.preventDefault();

    // Если текущий уже активен — просто закрываем его
    if ($(this).hasClass('programm__acc-link--active')) {
        $(this).removeClass('programm__acc-link--active');
        $(this).children('.course__acc-text').slideToggle();
        return;
    }

    // Закрываем все остальные открытые пункты
    $('.programm__acc-link--active').each(function () {
        $(this).removeClass('programm__acc-link--active');
        $(this).children('.course__acc-text').slideToggle();
    });

    // Открываем текущий
    $(this).addClass('programm__acc-link--active');
    $(this).children('.course__acc-text').slideToggle();
});

ymaps.ready(init);
function init() {
    var myMap = new ymaps.Map('myMap', {
        center: [68.964033, 33.068066], //координаты центра
        zoom: 14, //уровень приближения
        controls: [],
        behaviors: [],
        suppressMapOpenBlock: true
    });
}
document.getElementById('checkBtn').onclick = function () {
    const form = document.getElementById('myForm');
    const inputs = form.querySelectorAll('[required]');
    let firstInvalid = null;

    // Ищем первое незаполненное или невалидное поле
    for (let input of inputs) {
        if (!input.checkValidity()) {
            firstInvalid = input;
            break;
        }
    }

    if (firstInvalid) {
        firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
        firstInvalid.focus();
        firstInvalid.reportValidity(); // показывает встроенное сообщение браузера
    } else {
        // Все поля заполнены — можно отправлять
        form.submit();
    }
};

