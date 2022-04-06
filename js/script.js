document.addEventListener("DOMContentLoaded" , function() {
  
  /*Burger-nav*/

  const burgerNav = document.querySelector(".burger")
  const menuNav = document.querySelector(".header__nav")

  burgerNav.addEventListener("click", mobileNav)
  function mobileNav () {
    burgerNav.classList.toggle("burger_active")
    menuNav.classList.toggle("header__nav_active")
  }

  const navLink = document.querySelectorAll(".nav__link")
  navLink.forEach(n => n.addEventListener("click", closeMenu))
  function closeMenu() {
    burgerNav.classList.remove("burger_active")
    menuNav.classList.remove("header__nav_active")
  }

  /*Search*/

  document.querySelector(".search__btn-open").addEventListener("click", function() {
    document.querySelector(".search__form").classList.add("search__form_active");
    this.classList.add("active");
  })

  document.addEventListener("click", function(e) {
    let target = e.target;
    let form = document.querySelector(".search__form");
    if (!target.closest(".search__top")) {
      form.classList.remove("search__form_active");
        form.querySelector(".search__input").value = "";
        document.querySelector(".search__btn-open").classList.remove("active")
    }
  })

  /*Select*/

  const element = document.querySelector("select");
  const choices = new Choices(element, {
    searchEnabled: false,
    position: "bottom",
    itemSelectText: "",
  })

  /*Gallery*/

  const swiper = new Swiper(".gallery__swiper" , {

    pagination: {
      el: ".gallery__pagination",
      type: "fraction"
    },
    
    navigation: {
      nextEl: ".gallery__button-next",
      prevEl: ".gallery__button-prev",
    },

    breakpoints: {

      0: {
        slidesPerView: 1,
        spaceBetween: 15,
      },

      500: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 15,
      },

      576: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 34,
      },

      /*1101: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 34,
      },

      1301: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50
      }*/
      
    }
  
  })

  /*Accordion*/

  $('#accordion').accordion( {
    heightStyle: "content",
    collapsible: true
  })

  /*Tab*/

  document.querySelectorAll(".tab__btn").forEach(function(tabsBtn) {
    tabsBtn.addEventListener("click", function(e) {
      const path = e.currentTarget.dataset.path;

      document.querySelectorAll(".tab__btn").forEach(function(btn) {
        btn.classList.remove("tab__btn_active")
      });
      e.currentTarget.classList.add("tab__btn_active");
      
      document.querySelectorAll(".tab-content__inner").forEach(function(tabsBtn) {
        tabsBtn.classList.remove("tab-content__inner_active")
      });

      document.querySelector(`[data-target="${path}"]`).classList.add("tab-content__inner_active");
    })
  })

  /*Event slider*/

  const swiperEvents = new Swiper(".event__swiper" , {

    navigation: {
      nextEl: ".event-button-next",
      prevEl: ".event-button-prev",
    },

    pagination: {
      el: '.event__pagination',
      clickable: true,
    },

    breakpoints: {
      
      0: {
        slidesPerView: 1,
        spaceBetween: 15,
      },

      658: {
        slidesPerView: 2,
        spaceBetween: 15,
      },

      765: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 34,
      }

    }
  })

  /*Tooltip*/

  tippy('#marker1', {
    maxWidth: 264,
    theme: 'purple',
    content: 'Пример современных тенденций - современная методология разработки',
    animation: 'scale',
  });

  tippy('#marker2', {
    maxWidth: 264,
    theme: 'purple',
    content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
    animation: 'scale',
  });

  tippy('#marker3', {
    maxWidth: 232,
    theme: 'purple',
    content: 'В стремлении повысить качество',
    animation: 'scale',
  });

  /*Project swiper*/

  const swiperPartners = new Swiper(".project__swiper" , {
    slidesPerView: 2,
    spaceBetween: 50,

    navigation: {
      nextEl: ".project__button-next",
      prevEl: ".project__button-prev",
    },

    breakpoints: {

      0: {
        slidesPerView: 1,
        spaceBetween: 15,
      },

      575: {
        slidesPerView: 2,
        spaceBetween: 34,
      }, 

      /*1024: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
      
      1301: {
        slidesPerView: 3,
        spaceBetween: 50
      }*/
    }
  });

  /*Contact form*/

  var selector = document.querySelector("input[type='tel']");
  var im = new Inputmask("+7(999) 999-99-99");

  im.mask(selector);

  new JustValidate('.contact__form', {
    rules: {
      name: {
        required: true,
        minLength: 2,
        maxLength: 15,
        strength: {
          custom: '^[А-Яа-я]+$'
        }
      },
      
      tel: {
        required: true,
        function: (name, value) => {
          const phone = selector.inputmask.unmaskedvalue()
          return Number(phone) && phone.length === 10
        }
      },
    },

    messages: {
      name: 'Недопустимый формат',
      tel: 'Недопустимый формат'
    },

    colorWrong: '#D11616',  
  });

  /*Map*/

  ymaps.ready(init);
    function init(){
        
      var myMap = new ymaps.Map("map", {
        center: [55.75846806898367,37.60108849999989],
        zoom: 16,
        controls: [],
      },

      {suppressMapOpenBlock: true}
      ),

      zoomControl = new ymaps.control.ZoomControl({
        options: {
          size: 'small',
          position: {
            right: 10,
            bottom: 360,
          }
        }
      });

      myMap.controls.add(zoomControl);

      geolocationControl = new ymaps.control.GeolocationControl ({
        options: {
          position: {
            right: 10,
            bottom: 320,
          }
        }
      });

      myMap.controls.add(geolocationControl);

      var myPlacemark = new ymaps.Placemark([55.75846806898367,37.60108849999989], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/map-icon.svg',
        iconImageSize: [20, 20],
        iconImageOffset: [-10, 0],
      });
      myMap.geoObjects.add(myPlacemark);
      
      myMap.controls.remove('searchControl');
      myMap.controls.remove('trafficControl');
      myMap.controls.remove('typeSelector');
      myMap.controls.remove('fullscreenControl');
      myMap.controls.remove('rulerControl');
  }


})