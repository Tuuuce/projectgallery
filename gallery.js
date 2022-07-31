function MoreLess() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display!="none") {
    dots.style.display = "none";
    btnText.innerHTML = "Read Less"; 
    moreText.style.display = "inline";
  } else {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  }
}

