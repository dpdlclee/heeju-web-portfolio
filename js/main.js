$(window).on('scroll resize', function(){
    var scrollPos = 0;
    scrollPos = $(document).scrollTop();

    function fixheader(){
            if(scrollPos > 80){
                $('header').addClass('on');
            } else {
                $('header').removeClass('on');
            }
        }

    fixheader();

});

function toggleMenu(){
  const $navMenu =  document.getElementById('nav_menu');
  const $togglebar =  document.getElementById('nav_toggle');
  $navMenu.classList.toggle('show');
  $togglebar.classList.toggle('on');

}

function init() {
  const $navToggle = document.getElementById('nav_toggle');
  $navToggle.addEventListener('click', () => {
    // menu toggle
    toggleMenu()
  });

  const $navLinkList = document.querySelectorAll('.nav_link');
  $navLinkList.forEach((el) => el.addEventListener('click', () => {
    toggleMenu();
  }))

}

init()

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const sectionId = entry.target.id;

    if (entry.isIntersecting) {
      document
        .querySelector(`.nav_link[href="#${sectionId}"]`)
        .classList.add("active_link");

      const $items = document.querySelectorAll(
        `.nav_link:not([href="#${sectionId}"])`,
      );
      $items.forEach((el) => el.classList.remove('active_link'));
    }
  });
}, {
  threshold: 0.9,
});

const workObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const sectionId = entry.target.id;

    if (entry.isIntersecting) {
      document
        .querySelector(`.nav_link[href="#${sectionId}"]`)
        .classList.add("active_link");

      const $items = document.querySelectorAll(
        `.nav_link:not([href="#${sectionId}"])`,
      );
      $items.forEach((el) => el.classList.remove('active_link'));
    }
  });
}, {
  threshold: 0.3,
});

document.querySelectorAll(".section").forEach((section) => {
  if (section.classList.contains("work")) {
    workObserver.observe(section);
  } else {
    observer.observe(section);
  }
});


// publishing
const publishingObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    document.querySelectorAll(".work_menu a").forEach((a) => {
      a.classList.remove("on");
    });

    document
      .querySelector('.work_menu a[href="#publishing"]')
      .classList.add("on");
  });
}, {
  threshold: window.innerWidth < 1024 ? 0.1 : 0.3
});

// design
const designObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    document.querySelectorAll(".work_menu a").forEach((a) => {
      a.classList.remove("on");
    });

    document
      .querySelector('.work_menu a[href="#design"]')
      .classList.add("on");
  });
}, {
  threshold: window.innerWidth < 1024 ? 0.1 : 0.7
});

publishingObserver.observe(document.querySelector("#publishing"));
designObserver.observe(document.querySelector("#design"));

const typeit = new TypeIt('#typeit', {
  speed: 80,
  startDelay: 1300,
  waitUntilVisible: true,
})

typeit
  .type('<span>무한에너지로 성장해 나아가는</span>')
  .type('퍼블리셔 조희주입니다.')
  .go();

  
$(function(){
    $('.animate').scrolla({
        mobile: true, 
        once: true
    });

})

$(function(){
    Splitting();
});
