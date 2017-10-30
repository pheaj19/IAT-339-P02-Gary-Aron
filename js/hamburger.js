'use strict';

var width = window.innerWidth;
console.log("Window width: "+width+"px");

var navToggle = document.querySelector("#nav-toggle");
var navItems = document.querySelector("#navbar");
var navFirstItem = document.querySelector("#navbar a");

window.addEventListener("resize", function(){
    width = window.innerWidth;
    
    if(width < 650){
        console.log("Window width is less than 500px, collapsing menu.");
        navToggle.classList.remove("hidden");
        navToggle.setAttribute("aria-hidden", "false");
        navItems.classList.add("hidden");
        navItems.setAttribute("aria-hidden", "true");
        navItems.setAttribute("aria-labelledby", "nav-toggle");
    }else{
        navToggle.classList.add("hidden");
        navToggle.setAttribute("aria-hidden", "true");
        navItems.classList.remove("hidden");
        navItems.setAttribute("aria-hidden", "false"); 
    }
    
});

navToggle.addEventListener("click", function(){
    console.log("#nav-toggle has been clicked.");
    if (navItems.classList.contains("hidden")){
        console.log("#nav-items are hidden, showing them now.");
        navItems.classList.remove("hidden");
        navItems.setAttribute("aria-hidden", "false");
        navToggle.setAttribute("aria-expanded", "true");
        navFirstItem.focus();
    }else{
        console.log("#nav-items are showing, hiding them now.");
        navItems.classList.add("hidden");
        navItems.setAttribute("aria-hidden", "true");
        navToggle.setAttribute("aria-expanded", "false");
    }
});