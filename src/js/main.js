$( document ).ready(function() {
  AOS.init({
    startEvent: 'DOMContentLoaded',
    delay: 0,
    duration: 1000,
    offset: 0,
  });

  $(document).on("click", ".mfp-link", function () {
    var a = $(this);

    $.magnificPopup.open({
      items: { src: a.attr("data-href") },
      type: "ajax",
      overflowY: "scroll",
      removalDelay: 300,
      mainClass: 'my-mfp-zoom-in',
      ajax: {
        tError: "Error. Not valid url",
      },
      callbacks: {
        open: function () {
          setTimeout(function(){
            $('.mfp-wrap').addClass('not_delay');
            $('.mfp-popup').addClass('not_delay');
          },700);
        }
      },

      callbacks: {
        open: function() {
          document.documentElement.style.overflow = 'hidden'
        },

        close: function() {
          document.documentElement.style.overflow = ''
        }
      }
    });
    return false;
  });

  const video = document.querySelector('.about-video');
  const playPauseButton = document.querySelector('.about-video-play');
  const videoTitle = document.querySelector('.about-video-title');

  playPauseButton.addEventListener('click', () => {
    if (video.paused) {
      video.play();

      playPauseButton.style.visibility = "hidden"
      videoTitle.style.visibility = "hidden"

      playPauseButton.style.opacity = "0"
      videoTitle.style.opacity = "0"

    } else {
      video.pause();

      playPauseButton.style.opacity = "1"
      videoTitle.style.opacity = "1"

      playPauseButton.style.visibility = "visible"
      videoTitle.style.visibility = "visible"
    }
  });

  video.addEventListener('ended',function(){
    video.load();

    playPauseButton.style.opacity = "1"
    videoTitle.style.opacity = "1"

    playPauseButton.style.visibility = "visible"
    videoTitle.style.visibility = "visible"
  },false);

  if($(".doctor-splide")) {
    new Splide( '.doctor-splide', {
      pagination: false,
      type: "fade"
    }).mount();
  }

  if($(".main-images-splide")) {
    new Splide( '.main-images-splide', {
      pagination: true,
      arrows: false,
      type: "loop",
      perPage: 1,
      breakpoints: {
        599: {
          perPage: 1,
        },
        992: {
          perPage: 2,
        },
        1024: {
          perPage: 3,
        },
      },
    }).mount();
  }

  $('.toggle').change(function() {
    const selectedValue = $('input[name=toggle]:checked').val();

    $('.about-info-txt').hide();
    $('.about-info-txt[data-txt="' + selectedValue + '"]').show();
  });

  const linkMore = document.querySelectorAll('.about-step-link')

  linkMore.forEach(element => {
    element.addEventListener('click', (e) => {
      const target = e.target
      const popup = target.closest(".about-step").querySelector('.about-step-info')

      popup.classList.add('active')
    })
  });

  const linkMoreClose = document.querySelectorAll('.about-step-close')

  linkMoreClose.forEach(element => {
    element.addEventListener('click', (e) => {
      const target = e.target
      const popup = target.closest(".about-step").querySelector('.about-step-info')

      popup.classList.remove('active')
    })
  });

  const hint = document.querySelectorAll('.main-info')

  hint.forEach(element => {
    element.addEventListener('click', (e) => {
      if(e.target.classList[0] === 'main-info') {
        const txt = element.querySelector('.main-info-txt')
        const bg = element.closest('.main-image')

        element.classList.add('active')
        txt.classList.add('active')
        bg.classList.add('active')
      }
    })
  });

  const hintClose = document.querySelectorAll('.main-info-close')

  hintClose.forEach(element => {
    element.addEventListener('click', () => {
      const txt = element.closest('.main-info-txt')
      const bg = element.closest('.main-image')
      const hint = element.closest('.main-info')

      hint.classList.remove('active')
      txt.classList.remove('active')
      bg.classList.remove('active')
    })
  });

  // form styler
  $('.ui-select').styler();
});