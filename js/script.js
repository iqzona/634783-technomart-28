/* map popup */

var map = document.querySelector('.company-block__map');

if (map) {
  var mapPopup = document.querySelector('.modal-map');
  var closeMap = mapPopup.querySelector('.modal__btn-close');

  map.addEventListener('click', function(event) {
    event.preventDefault();
    mapPopup.classList.add('modal-show');
  });

  closeMap.addEventListener('click', function(event) {
    event.preventDefault();
    mapPopup.classList.remove('modal-show');
  });

  window.addEventListener('keydown', function (event) {
    if (event.keyCode === 27 && mapPopup.classList.contains('modal-show')) {
      event.preventDefault();
      mapPopup.classList.remove('modal-show');
    }
  });
}
/* promo slider */
var promoSlides = document.querySelectorAll('.active-card');
var prevSlide = document.querySelector('.active-card__icon-left');
var nextSlide = document.querySelector('.active-card__icon-right');
var promoRadioButtons = document.querySelectorAll('.slider-controls__nav');

if (promoSlides && prevSlide && nextSlide && promoRadioButtons) {
  var currentPromoSlider = 0;

  var setSlide = function(slideIndex) {
    promoSlides.forEach(function(slide, index) {
      if (index === slideIndex) {
        slide.classList.add('active-card__show');
        promoRadioButtons[index].classList.add('slider-controls__active');
      } else {
        slide.classList.remove('active-card__show');
        promoRadioButtons[index].classList.remove('slider-controls__active');
      }
    });
  };

  prevSlide.addEventListener('click', function(event) {
    event.preventDefault();
    currentPromoSlider -= 1;

    if (currentPromoSlider < 0) {
      currentPromoSlider = promoSlides.length - 1;
    }

    setSlide(currentPromoSlider);
  });

  nextSlide.addEventListener('click', function(event) {
    event.preventDefault();
    currentPromoSlider += 1;

    if (currentPromoSlider >= promoSlides.length) {
      currentPromoSlider = 0;
    }

    setSlide(currentPromoSlider);
  });

  promoRadioButtons.forEach(function(radioButton, index) {
    radioButton.addEventListener('click', function(event) {
      event.preventDefault();
      currentPromoSlider = index;
      setSlide(currentPromoSlider);
    });
  });
}

/* service slider */
var serviceButtons = document.querySelectorAll('.service-slider__btn');
var serviceSlides = document.querySelectorAll('.slider-description__list');

if (serviceButtons && serviceSlides) {
  var currentServiceSlider = 0;

  serviceButtons.forEach(function(button, index) {
    button.addEventListener('click', function(event) {
      event.preventDefault();
      serviceButtons[currentServiceSlider].classList.remove('indicator-active-btn');
      currentServiceSlider = index;
      serviceButtons[currentServiceSlider].classList.add('indicator-active-btn');
      serviceSlides.forEach(function(slide, serviceSlideIndex) {
        if (index === serviceSlideIndex) {
          slide.classList.remove('visually-hidden');
        } else {
          slide.classList.add('visually-hidden');
        }
      });
    });
  });
}
/* basket popup */
var basketPopup = document.querySelector('.modal-basket');

if (basketPopup) {
  var closeBasket = basketPopup.querySelector('.modal__btn-close');
  var continueShop = basketPopup.querySelector('.modal-basket__btn--white');

  closeBasket.addEventListener('click', function(event) {
    event.preventDefault();
    basketPopup.classList.remove('modal-show');
  });

  continueShop.addEventListener('click', function(event) {
    event.preventDefault();
    basketPopup.classList.remove('modal-show');
  });

  window.addEventListener('keydown', function (event) {
    if (event.keyCode === 27 && basketPopup.classList.contains('modal-show')) {
      event.preventDefault();
      basketPopup.classList.remove('modal-show');
    }
  });
}

/* catalog item card */
var bookmark = document.querySelector('.header-page__btn-bookmark');
var bookmarkContent = bookmark.querySelector('span > span');
var basket = document.querySelector('.header-page__btn-basket');
var basketContent = basket.querySelector('span > span');
var itemCards = document.querySelectorAll('.product-card__btn');

if (bookmark && bookmarkContent && basket && basketContent && itemCards) {
  var basketItems = 0;
  var bookmarkItems = 0;

  itemCards.forEach(function(card, index) {
    var buttons = card.querySelectorAll('a');
    var buyButton = buttons[0];

    buyButton.addEventListener('click', function(event) {
      event.preventDefault();
      basketItems += 1;
      basket.classList.add('header-page__btn-full');
      basketContent.innerHTML = basketItems;
      basketPopup.classList.add('modal-show');
    })
    var bookmarkButton = buttons[1];

    bookmarkButton.addEventListener('click', function(event) {
      event.preventDefault();
      bookmarkItems += 1;
      bookmark.classList.add('header-page__btn-full');
      bookmarkContent.innerHTML = bookmarkItems;
    })
  });
}

/* feedback form */
var feedback = document.querySelector('.travel-list__btn-map');
var feedbackPopup = document.querySelector('.modal-feedback');

if (feedback && feedbackPopup) {
  var feedbackFrom = feedbackPopup.querySelector('.modal-feedback__form');
  var feedbackName = feedbackPopup.querySelector('.modal-feedback__text[name="user-name"]');
  var feedbackEmail = feedbackPopup.querySelector('.modal-feedback__text[name="user-email"]');
  var feedbackText = feedbackPopup.querySelector('.modal-feedback__text[name="user-text"]');

  var feedbackClose = feedbackPopup.querySelector('.modal__btn-close');

  feedback.addEventListener('click', function(event) {
    event.preventDefault();
    feedbackPopup.classList.add('modal-show');
  });

  feedbackClose.addEventListener('click', function(event) {
    event.preventDefault();
    feedbackPopup.classList.remove('modal-show');
    feedbackPopup.classList.remove('modal-error');
  });

  window.addEventListener('keydown', function (event) {
    if (event.keyCode === 27 && feedbackPopup.classList.contains('modal-show')) {
      event.preventDefault();
      feedbackPopup.classList.remove('modal-show');
      feedbackPopup.classList.remove('modal-error');
    }
  });

  feedbackFrom.addEventListener('submit', function (event) {
    if (!feedbackName.value || !feedbackEmail.value || !feedbackText.value) {
      event.preventDefault();
      feedbackPopup.classList.add('modal-error');
      feedbackPopup.style.animation = 'none';
      feedbackPopup.offsetHeight;
      feedbackPopup.style.animation = null; 
    }
  });
}
