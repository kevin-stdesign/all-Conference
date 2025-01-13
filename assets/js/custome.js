var swiper = new Swiper(".mySwiper.lates-blog-slider", {
    loop:true,
    speed: 700,
    // autoplay: {
    //   delay: 2000,
    // },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  $(document).ready(function () {
    // Show the search form when the search icon is clicked
    $(".search-icon").click(function (e) {
      e.stopPropagation(); // Prevent the click from reaching the body
      $(".srarch-form").addClass("display-show");
      console.log("test");
    });
  
    // Hide the search form when clicking anywhere else on the page
    $(document).click(function(e){
      if (!$(e.target).closest(".search-icon, .srarch-form").length) {
        $(".srarch-form").removeClass("display-show");
      }
    });
  });
  
  