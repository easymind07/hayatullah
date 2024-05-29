//-------------- Navbar Header Scroller Section //

window.addEventListener(('scroll'), () => {
    var header = document.getElementById('scroller');
    var arrow_up = document.getElementById("arrow_up");
  
    if (window.scrollY > 0) {
      header.classList.add("roll");
      arrow_up.classList.add("show")
    }
    else {
      header.classList.remove("roll");
      arrow_up.classList.remove("show")  
    }
  })


var mean = document.getElementById("mySidenav");
var close = document.getElementById("close");

function openNav() {
    mean.classList.add("slide");
};

function closeNav() {
    mean.classList.remove("slide");
};




  