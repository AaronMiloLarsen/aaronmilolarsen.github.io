// var slider = document.querySelector(".slider");
// var output = document.querySelector(".media-body");
// output.innerHTML = slider.value; // Display the default slider value

// // Update the current slider value (each time you drag the slider handle)
// slider.oninput() = function() {
//   output.innerHTML = slider.value;
// }


 

aboutText = document.querySelector('.media-body');
slider = document.querySelector('.slider');
aboutText.style.opacity = 0;


changeOpacity = () =>{
     console.log('Test!');
     setTimeout(() => {
        aboutText.style.opacity = 1;
     }, 1000);   
    

    };

    slider.addEventListener('click', changeOpacity);
