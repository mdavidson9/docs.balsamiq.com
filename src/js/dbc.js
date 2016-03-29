// DBC JS
$(document).ready(function() {

  // ========================================
  // TOC
  // - TOC LIST
  count = 0;
  var ToC = "<ul class='nav'>";
  var newLine, el, title, titleclean, link;
  $("article h2").each(function() {
    el = $(this);
    title = el.text();
    // titleclean = title.slice(0,-1);
    link = "#" + el.attr("id");
    newLine =
      "<li>" +
        "<a href='" + link + "'>" +
          title +
        "</a>" +
      "</li>";
    ToC += newLine;
    count++;
  });
  ToC += "</ul>";
  if (count > 0) {
    $("#toc-menu").append(ToC);
  }
  // - SCROLLSPY
  $('body').scrollspy({ target: '#toc-menu' });

  // ========================================
  // AFFIX SIDEBAR
  // #header-wrapper +31px
  // #sidebar-box
  // #footer-wrapper +16px
  // -- With Footer Stop
  // name your elements here
  var stickyElement   = '#sidebar-box',   // the element you want to make sticky
      bottomElement   = '#footer-wrapper'; // the bottom element where you want the sticky element to stop
  // make sure the element exists on the page before trying to initalize
  if($( stickyElement ).length){
      $( stickyElement ).each(function(){

          // let's save some messy code in clean variables
          // when should we start affixing? (the amount of pixels to the top from the element)
          var fromTop = $( this ).offset().top,
              // where is the bottom of the element?
              fromBottom = $( document ).height()-($( this ).offset().top + $( this ).outerHeight()),
              // where should we stop? (the amount of pixels from the top where the bottom element is)
              // also add the outer height mismatch to the height of the element to account for padding and borders
              stopOn = $( document ).height()-( $( bottomElement ).offset().top)+($( this ).outerHeight() - $( this ).height());

          // if the element doesn't need to get sticky, then skip it so it won't mess up your layout
          if( (fromBottom-stopOn) > 200 ){
              // let's put a sticky width on the element and assign it to the top
              $( this ).css('width', $( this ).width()).css('top', 0).css('position', '');
              // assign the affix to the element
              $( this ).affix({
                  offset: {
                      // make it stick where the top pixel of the element is
                      top: fromTop,
                      // make it stop where the top pixel of the bottom element is
                      bottom: stopOn
                  }
              // when the affix get's called then make sure the position is the default (fixed) and it's at the top
              }).on('affix.bs.affix', function(){ $( this ).css('top', 0).css('position', ''); });
          }
          // trigger the scroll event so it always activates
          $( window ).trigger('scroll');
      });
  }
  // - Prevent width resize
  $('#sidebar-box').width($('#sidebar-box').parent().width());
  $(window).resize(function () {
    $('#sidebar-box').width($('#sidebar-box').parent().width());
  });

  // ========================================
  // MENU TOGGLE ICON SWAP
  $('.menu-toggle').click(function() {
    $(this).find('.ss-icon').toggleClass("ss-navigatedown ss-navigateright");
    event.preventDefault();
  });

  // ========================================
  // SMOOTH SCROLL
  $("#toc-menu a[href^='#']").on('click', function(e) {
    // prevent default anchor click behavior
    e.preventDefault();
    // store hash
    var hash = this.hash;
    // animate
    $('html, body').animate({
     scrollTop: $(hash).offset().top
    }, 300, function(){
     // when done, add hash to url
     // (default click behaviour)
     window.location.hash = hash;
    });
   });

  // ========================================
  // HOME SEARCH
  $("#home-search #search").focus();

  // ========================================
  // STYLE SWITCHER
  // $("#design-select a").click(function(){
  //  $("body").removeClass();
  //  $("body").addClass($(this).attr('data-design'));
  //  return false;
  // });

  // SET GNAV
  var navsect = window.location.href.split('/');
  $("body").addClass(navsect[3]);

  // ========================================
  // POPUP FOR SOCIAL SHARING
  function windowPopup(url, width, height) {
  // Calculate the position of the popup so it’s centered on the screen.
  var left = (screen.width / 2) - (width / 2),
  top = (screen.height / 2) - (height / 2);
  window.open(
  url,
  "",
  "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=" + width + ",height=" + height + ",top=" + top + ",left=" + left
  );
  }
  $(".js-social-share").on("click", function(e) {
  e.preventDefault();
  windowPopup($(this).attr("href"), 500, 300);
  });
});
