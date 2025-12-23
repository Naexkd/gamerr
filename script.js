//copy menu for mobile
function copyMenu() {
    var dptCategory = document.querySelector('.dpt-cat');
    var dptPlace = document.querySelector('.departments');
    dptPlace.innerHTML = dptCategory.innerHTML;

    var mainNav = document.querySelector('.header-nav nav');
    var navPlace = document.querySelector('.off-canvas nav')
    navPlace.innerHTML = mainNav.innerHTML;

    var topNav = document.querySelector('.header-top .wrapper');
    var topPlace = document.querySelector('.off-canvas .thetop-nav')
    topPlace.innerHTML = topNav.innerHTML;
}
copyMenu();

//show mobile menu
const menuButton = document.querySelector('.trigger'),
      closeButton = document.querySelector('.t-close'),
      addclass = document.querySelector('.site');

if (menuButton && addclass) {
    menuButton.addEventListener('click', function() {
        addclass.classList.toggle('showmenu')
    });
}

if (closeButton && addclass) {
    closeButton.addEventListener('click', function() {
        addclass.classList.remove('showmenu')
    });
}

//show sub menu on mobile
const submenu = document.querySelectorAll('.has-child .icon-small');
if (submenu.length) {
    submenu.forEach((menu) => {
        menu.addEventListener('click', toggle);
    });
}

function toggle(e) {
    e.preventDefault();
    submenu.forEach((item) => item != this ? item.closest('.has-child').classList.remove('expand') : null);
    if(this.closest('.has-child').classList != 'expand');
    this.closest('.has-child').classList.toggle('expand')
}

//slider
const swiper = new Swiper('.swiper', {
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },
});

//Show search
const searchTrigger = document.querySelector('.t-search');
const searchClose = document.querySelector('.search-close');

if (searchTrigger) {
    searchTrigger.addEventListener('click', e => {
        e.preventDefault();
        document.body.classList.add('showsearch');
    });
}

if (searchClose) {
    searchClose.addEventListener('click', e => {
        e.preventDefault();
        document.body.classList.remove('showsearch');
    });
}


//Show dpt menu
const dptButton = document.querySelector('.dpt-cat .dpt-trigger'),
      dptCloseButton = document.querySelector('.dpt-cat .dpt-close'),
      dptClass = document.querySelector('.site');

if (dptButton && dptClass) {
    dptButton.addEventListener('click', function() {
        dptClass.classList.toggle('showdpt')
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const dptClassInner = document.querySelector('.dpt-menu');
    const dptCloseInner = document.querySelector('.dpt-close');

    if (dptCloseInner && dptClassInner) {
        dptCloseInner.addEventListener('click', function (e) {
            e.preventDefault();
            dptClassInner.classList.remove('showdpt');
        });
    }
});


//Product image slider
var productThumb = new Swiper ('.small-image', {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 1,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    481: {
      spaceBetween: 32,
    }
  }
});
var productBig = new Swiper ('.big-image', {
  loop: true,
  autoHeight: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: productThumb,
  }
})

// stock products bar percentage 
var stocks = document.querySelectorAll('.products .stock');
for (let x = 0; x < stocks.length; x++) {
  let stock = stocks[x] .dataset.stock,
      available = stocks[x].querySelector('.qty-available').innerHTML,
      sold = stocks[x].querySelector('.qty-sold').innerHTML,
      percent = sold*100/stock;

      stocks[x].querySelector('.available').style.width = percent + '%'; 
}

//Show cart on click
const divtoshow = '.mini-cart';
const divPopup = document.querySelector(divtoshow);
const divTrigger = document.querySelector('.cart-trigger');

if (divTrigger && divPopup) {
    divTrigger.addEventListener('click', () => {
        setTimeout(() => {
            if(!divPopup.classList.contains('show')) {
                divPopup.classList.add('show');
            }
        }, 250 )
    });
}

//close by click outside
if (divPopup) {
    document.addEventListener('click', (e) => {
        const isClosest = e.target.closest(divtoshow);
        if(!isClosest && divPopup.classList.contains('show')) {
            divPopup.classList.remove('show')
        }
    });
}







