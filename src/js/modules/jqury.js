export function jQuery(){
    function scrollEfect(){
        $('a').on('click', function(event) {
          if (this.hash !== '') {
            event.preventDefault();
            let hash = this.hash    
            $('html, body').animate({
              scrollTop: $(hash).offset().top
            }, 2000, function(){
              window.location.hash = hash;
            });
          } 
      });
    }
      scrollEfect()

      function scrollUpArrow (){
        $(window).scroll(function() {
          let height = $(window).scrollTop();
          if (height > 300) {
              $('#arrowUp').fadeIn();
          } else {
              $('#arrowUp').fadeOut();
          }
      });
      $(document).ready(function() {
          $('#arrowUp').click(function(event) {
              event.preventDefault();
              $('html, body').animate({ scrollTop: 0 }, 'slow');
              return false;
          });
      
      });
      }
      scrollUpArrow()
}