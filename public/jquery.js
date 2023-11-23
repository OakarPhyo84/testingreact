//----- Scroll Top ---------- //
$('#Skill').waypoint(function(direction){

  if (direction=='down') {
    $(".Top").addClass('active');
  } 
  else{
    $('.Top').removeClass('active');
  }
},{
  Offset:'10%'
})

//-------- Nav ------- //
// Three with w3school shrink sticky
window.onscroll = function() {scrollFunction()};
var navbar = document.querySelector(".nav-bg");
var sticky = navbar.offsetTop;

function scrollFunction() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky")
    document.querySelector(".nav-bg").style.height= "9vh";
    document.querySelector(".navbar-brand").style.fontSize = "1.5rem";
  } else {
    navbar.classList.remove("sticky")
    document.querySelector(".nav-bg").style.height= "10vh";
    document.querySelector(".navbar-brand").style.fontSize = "1.7rem";
  }
}

// nav tggler icon --
 $('.navbar-toggler').click(function(){

  if($(' .navbar-toggler i').hasClass('navbar-toggler-icon')){
    $('.navbar-toggler i').addClass('fa-solid fa-x fa-lg');
    $('.navbar-toggler i').removeClass('navbar-toggler-icon');
  }else{
    $('.navbar-toggler i').addClass('navbar-toggler-icon');
    $('.navbar-toggler i').removeClass('fa-solid fa-x fa-lg');
  }
});

// ---- light dark mode
const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".moon_sun")
    
      let getMode = localStorage.getItem("mode");
          if(getMode && getMode === "dark-mode"){
            body.classList.add("dark");
          }         
// js code to toggle dark and light mode
      modeToggle.addEventListener("click" , () =>{
        modeToggle.classList.toggle("active");
        body.classList.toggle("dark");

        // js code to keep user selected mode even page refresh or file reopen
        if(!body.classList.contains("dark")){
            localStorage.setItem("mode" , "light-mode");
        }else{
            localStorage.setItem("mode" , "dark-mode");
        }
      });

//---- main text animate      
var typed = new Typed (".animate_h",{
    strings : ["Frontend Developer","Web Designer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay : 1000,
    loop:true
});

// -------- My Projects -------//
// --- project filter

$(document).on('click','.project_filter li',function(){
  $(this).addClass('project_filter_active').siblings().removeClass('project_filter_active')
});

// --- for-project/work-filter
// $(document).ready(function(){
  $('.list').click(function(){
    const value=$(this).attr('data-filter');
    if(value == 'all'){
      $('.project_link').show('1000');
    }
    else{
      $('.project_link').not('.'+value).hide('1000');
      $('.project_link').filter('.'+value).show('1000');
    }
  });

// });

 





