     $(document).ready(function () {
     
     });



     $(document).ready(function () {
      
     });
     $(document).ready(function () {
         $('.close').click(function () {
             $('.supheader').css('margin-top', '-40px');
             $('.close').css('top', '-40px');

         });
     });
    
     $(document).ready(function () {
         $(function () {
             var header = $("#header");
             $(window).scroll(function () {
                 var scroll = $(window).scrollTop();

                 if (scroll >= 50) {
                     header.removeClass('classinitial')
                         .addClass("classfinal");
                 } else {
                     header.removeClass("classfinal")
                         .addClass('classinitial');
                 }
             });
         });
     });
