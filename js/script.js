/* jQuery for UI behaviors: smooth scroll, form validation, year update */
$(function(){
  // update current year in footer
  $('#curYear').text(new Date().getFullYear());

  // smooth scroll for same-page links
  $('a[href^="#"]').on('click', function(event){
    var target = $(this.getAttribute('href'));
    if(target.length){
      event.preventDefault();
      $('html, body').stop().animate({scrollTop: target.offset().top - 70}, 600);
    }
  });

  // Bootstrap form validation
  var contactForm = document.getElementById('contactForm');
  contactForm.addEventListener('submit', function(e){
    if(!contactForm.checkValidity()){
      e.preventDefault();
      e.stopPropagation();
    } else {
      e.preventDefault();
      // Simulate submit: show success message
      var success = $('<div role="status" aria-live="polite" class="alert alert-success mt-3">Thank you! We received your request and will contact you shortly.</div>');
      $(contactForm).append(success);
      contactForm.reset();
      $(contactForm).removeClass('was-validated');
    }
    contactForm.classList.add('was-validated');
  }, false);

  // Accessible keyboard handling on navbar toggler
  var toggler = $('.navbar-toggler');
  toggler.on('keydown', function(e){
    if(e.key === 'Enter' || e.key === ' '){
      $(this).trigger('click');
      e.preventDefault();
    }
  });

});

// Hide loader once page fully loaded and initialize hero carousel
window.addEventListener('load', function(){
  var loader = document.getElementById('page-loader');
  if(loader){
    try{ $(loader).fadeOut(450, function(){ $(this).remove(); }); }catch(e){ loader.style.display='none'; }
  }

  // initialize carousel safely
  try{
    var heroEl = document.getElementById('heroCarousel');
    if(heroEl && typeof bootstrap !== 'undefined'){
      var carousel = new bootstrap.Carousel(heroEl, { interval: 5000, pause: 'hover' });
    }
  }catch(e){ /* ignore */ }
});

// Book puja button handling: prefill form and scroll
$(function(){
  $('.btn-book-puja').on('click', function(e){
    e.preventDefault();
    var puja = $(this).data('puja') || '';
    $('#pujaInput').val(puja);
    // set service select if present
    var svc = $('#service');
    if(svc.length){
      svc.val('Remedies & Puja');
    }

    // add an aria-live element to announce selection for screen readers
    var live = $('#puja-selected-live');
    if(!live.length){
      live = $('<div id="puja-selected-live" class="visually-hidden" role="status" aria-live="polite"></div>');
      $('body').append(live);
    }
    live.text('Selected ' + puja + '. Scrolling to booking form.');

    $('html, body').animate({scrollTop: $('#contact').offset().top - 70}, 600, function(){
      $('#name').focus();
    });
  });
});
