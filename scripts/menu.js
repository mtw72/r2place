function openMenu(event, menuName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("menu");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(menuName).style.display = "block";

  tablinks = document.getElementsByClassName("position-relative");
  for (i = 0; i < x.length; i++) {
    tablinks[i].classList.remove("tablink-active");
    tablinks[i].firstElementChild.style.color = "black";
  }
  event.currentTarget.parentElement.classList.add("tablink-active");
  event.currentTarget.style.color = "white";
}

document.getElementById("myLink").click();