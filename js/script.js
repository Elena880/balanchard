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

     /*500: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 15,
      },

      570: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 34,
      },

      1101: {
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

  /**/

  const swiperPartners = new Swiper(".project__swiper" , {
    slidesPerView: 2,
    spaceBetween: 50,

    navigation: {
      nextEl: ".project__button-prev",
      prevEl: ".project__button-next",
    },

    breakpoints: {

      0: {
        slidesPerView: 1,
        spaceBetween: 15,
      },

      /*700: {
        slidesPerView: 2,
        spaceBetween: 34,
      }, 

      1024: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
      
      1301: {
        slidesPerView: 3,
        spaceBetween: 50
      }*/
    }
  });

})