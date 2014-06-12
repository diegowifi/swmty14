
$(document).ready(function () {


   $(function() { //When the document loads
      $("#agenda").bind("click", function() {
        $(window).scrollTop($(".agenda").offset().top); //scroll to div with container as ID.
        return false; //Prevent Default and event bubbling.
      
      });
    }); 

   

   $(function() { //When the document loads
      $("#mentores").bind("click", function() {
        $(window).scrollTop($(".mentores").offset().top), 2000; //scroll to div with container as ID.
        return false; //Prevent Default and event bubbling.
      });
    });

   $(function() { //When the document loads
      $("#jueces").bind("click", function() {
        $(window).scrollTop($(".jueces").offset().top); //scroll to div with container as ID.
        return false; //Prevent Default and event bubbling.
      });
    });

   $(function() { //When the document loads
      $(".sede").bind("click", function() {
        $(window).scrollTop($(".lugar").offset().top); //scroll to div with container as ID.
        return false; //Prevent Default and event bubbling.
      });
    });

    $(function() { //When the document loads
      $(".perfiles").bind("click", function() {
        $(window).scrollTop($(".tickets").offset().top); //scroll to div with container as ID.
        return false; //Prevent Default and event bubbling.
      });
    });

     $(function() { //When the document loads
      $("#patrocinadores").bind("click", function() {
        $(window).scrollTop($(".patrocinadores").offset().top), 2000; //scroll to div with container as ID.
        return false; //Prevent Default and event bubbling.
      });
    });

 $("#object").delay(2500).fadeIn(900).animate({top:"-=20px"},900).animate({top:"+=20px"},900).animate({top:"-=20px"},900)
.animate({top:"+=20px"},900).animate({top:"-=20px"},900).animate({top:"+=20px"},900);

});
