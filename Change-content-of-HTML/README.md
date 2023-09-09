We use JavaScript to change the content of HTML. The src attribute of img can also be changed. 
In the .js code, an event listener is added to the button;

//add event listener to the button

btn.addEventListener("click", function(){
    content.innerHTML= "This is the new content. I have used JavaScript to change it from the original content to this."
});
