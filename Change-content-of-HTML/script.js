//set variables references for the HTML contents
var btn = document.getElementById("btn");
var content = document.getElementById("content");

//add event listener to the button
btn.addEventListener("click", function(){
    content.innerHTML= "This is the new content. I have used JavaScript to change it from the original content to this."
});

//get references to the HTML buttons and the image 
var kingfisher = document.getElementById("kingfisher");
var chick = document.getElementById("chick");
var owl= document.getElementById("owl");
var weaverBird = document.getElementById("weaver_bird");
var bird = document.getElementById("bird");

kingfisher.addEventListener("click", function(){
    bird.src="kingfisher-1850226.jpg"
});

chick.addEventListener("click", function(){
    bird.src="chick.jpg"
});

owl.addEventListener("click", function(){
    bird.src="barn-owl-3052382.jpg"
});

weaverBird.addEventListener("click", function(){
    bird.src="weaver-bird.jpg"
});