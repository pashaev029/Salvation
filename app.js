$(".menubtn").click(function () {
  $(".menu").addClass("active");
});

$(".close").click(function () {
  $(".menu").removeClass("active");
});

$(".menu li a").click(function () {
  $(".menu li a").removeClass("active");
  $(this).addClass("active");
});

$(".nav-links li a").click(function () {
  $(".nav-links li a").removeClass("active");
  $(this).addClass("active");
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    $(".nav-bottom").addClass("fixed");
  } else {
    $(".nav-bottom").removeClass("fixed");
  }
});
