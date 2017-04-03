/**
 * some JavaScript code for this blog theme
 */
/* jshint asi:true */

/////////////////////////header////////////////////////////
/**
 * clickMenu
 */
(function() {
    if (window.innerWidth <= 770) {
        var menuBtn = document.querySelector('#headerMenu')
        var nav = document.querySelector('#headerNav')
        menuBtn.onclick = function(e) {
            e.stopPropagation()
            if (menuBtn.classList.contains('active')) {
                menuBtn.classList.remove('active')
                nav.classList.remove('nav-show')
            } else {
                nav.classList.add('nav-show')
                menuBtn.classList.add('active')
            }
        }
        document.querySelector('body').addEventListener('click', function() {
            nav.classList.remove('nav-show')
            menuBtn.classList.remove('active')
        })
    }
}());


//////////////////////////back to top////////////////////////////
(function() {
    var backToTop = document.querySelector('.back-to-top')
    var backToTopA = document.querySelector('.back-to-top a')
        // console.log(backToTop);
    window.addEventListener('scroll',function () {


        // 页面顶部滚进去的距离
        var scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop)

        if (scrollTop > 200) {
            backToTop.classList.add('back-to-top-show')
        } else {
            backToTop.classList.remove('back-to-top-show')
        }
    })

    // backToTopA.addEventListener('click',function (e) {
    //     e.preventDefault()
    //     window.scrollTo(0,0)
    // })
}());


//////////////////////////hover on demo//////////////////////////////
(function() {
    var demoItems = document.querySelectorAll('.grid-item')
}());

var contentWayPoint = function() {
  var i = 0;
  $('.animate-box').waypoint( function( direction ) {

    if( direction === 'down' && !$(this.element).hasClass('animated') ) {

      i++;

      $(this.element).addClass('item-animate');
      setTimeout(function(){

        $('body .animate-box.item-animate').each(function(k){
          var el = $(this);
          setTimeout( function () {
            var effect = el.data('animate-effect');
            if ( effect === 'fadeIn') {
              el.addClass('fadeIn animated');
            } else if ( effect === 'fadeInLeft') {
              el.addClass('fadeInLeft animated');
            } else if ( effect === 'fadeInRight') {
              el.addClass('fadeInRight animated');
            } else {
              el.addClass('fadeInUp animated');
            }

            el.removeClass('item-animate');
          },  k * 200, 'easeInOutExpo' );
        });

      }, 100);

    }

  } , { offset: '85%' } );
};
