'use strict';


/*
//1. Loop through the list of projects and remove the blur
//2. Listen for the hover effect, then add blur and overlay to each elem when it's hovered on
*/


const projectOverlay = document.querySelector('.card-img-overlay')
const project = document.querySelectorAll('.project--card')
const projectImg = document.querySelectorAll('.card-img')
const time = document.querySelector('.time')

//1. Loop through the list of projects and remove the blur
//Default State
projectImg.forEach((project) => 
project.classList.remove('blurry')
)


//2. Listen for the hover effect, then add blur and overlay to each elem when it's hovered on
project.forEach((proj) => {
 proj.addEventListener('mouseover', function (e) {
  
  if (e.target.closest('.project--card')) {
   const projParent = e.target.closest('.project--card');
   const projParentImg = projParent.querySelector('.card-img');
   const projParentOverlay = projParent.querySelector('.card-img-overlay');

   projParentImg.classList.add('blurry');
   projParentOverlay.classList.remove('d-none');
   
  } else {
   console.log(`No Matches`)
  }
 })
 
})


project.forEach((proj) => {
 proj.addEventListener('mouseleave', function (e) {
  
  if (e.target.closest('.project--card')) {
   const projParent = e.target.closest('.project--card');
   const projParentImg = projParent.querySelector('.card-img');
   const projParentOverlay = projParent.querySelector('.card-img-overlay');

   projParentImg.classList.remove('blurry');
   projParentOverlay.classList.add('d-none');
   
  } else {
   console.log(`No Matches`)
  }
 })
 
})

//Controlling time dynamically
const today = new Date();
const currYear = today.getFullYear()
time.textContent = currYear;
