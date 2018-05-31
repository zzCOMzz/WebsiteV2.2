var modal = document.getElementById('ticketModal'); window.onclick = function (event) { if (event.target == modal) { modal.style.display = "none" } }
function toggleFunction() { var x = document.getElementById("navDemo"); if (x.className.indexOf("ref-show") == -1) { x.className += " ref-show" } else { x.className = x.className.replace(" ref-show", "") } }
window.onscroll = function () { myFunction() }; function myFunction() { var navbar = document.getElementById("myNavbar"); if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) { navbar.className = "ref-bar" + " ref-card" + " ref-animate-top" + "ref-white" } else { navbar.className = navbar.className.replace(" ref-card ref-animate-top ref-tale", "") } }
$(window).on("scroll resize",function(){
  $("#hcb_form > div > a[href='//www.htmlcommentbox.com'], label[for = hcb_file]").hide()
})