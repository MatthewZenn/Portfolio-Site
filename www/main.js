const toggleButton = document.getElementsByClassName('toggle')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
const subMenu = document.getElementsByClassName('submenu')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})


var modal = document.querySelector(".modal");
var modalImage = document.querySelector(".modalImage");

Array.from(document.querySelectorAll(".art")).forEach(item => {
   item.addEventListener("click", event => {
      modal.style.display = "block";
      modalImage.src = event.target.src;
   });
});

function clearModal(e) {
    if(e.target == modal) {
        modal.style.display = 'none';
    }
}

window.addEventListener('click' , clearModal);

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}