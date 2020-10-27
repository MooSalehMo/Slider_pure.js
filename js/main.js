// get  slider itms
let sliderImages = Array.from(document.querySelectorAll('.slider-container img')),
    // slids count
    slidesCount = sliderImages.length,
    // corrunt slider
    corruntSlider = 1,
    // slider number
    sliderNumber = document.getElementById('slider-number'),
    // slider previuos
    buttonBreviuos = document.getElementById('previous'),
    // slider previuos
    buttonNext = document.getElementById('next'),
    // create element ul
    creatUl = document.createElement('ul'),
    // get id indicators
    myIndicators = document.getElementById('indicators');



creatUl.setAttribute('id', "creatUlId");
myIndicators.appendChild(creatUl);

    // create li for loop
   for (let i = 1; i <= slidesCount; i++) {
       // create createLi
     let createLi = document.createElement('li');
       // setAttribute in createLi
       createLi.setAttribute('data-index', i);
       // append createTextNode
       createLi.textContent = i;
       // append createLi ul 
       creatUl.append(createLi);
   } 

// get id creatUl
let getUl = document.getElementById("creatUlId"),
     getUlLi = Array.from(document.querySelectorAll('#creatUlId li'));
  
// loop through ul li 
for (let i = 0; i < getUlLi.length; i++) {
    getUlLi[i].onclick = function () {
    corruntSlider = parseInt(this.getAttribute('data-index'));
        theCheck();
    }
}


   // function previos
function slidePrevious() { 
    // check bootonPrevious
    if (buttonBreviuos.classList.contains('disabled')) {
        return 'false';
    } else {
        corruntSlider--;
        theCheck();
    }
}
    // function next
function slideNext() {
      // check bootonPrevious
    if (buttonNext.classList.contains('disabled')) {
        return 'false';
    } else {
        corruntSlider++;
        theCheck();
    }
}
buttonBreviuos.onclick = slidePrevious;
buttonNext.onclick = slideNext;


// function the check
function  theCheck() {
    
    // textContent sliderNumber
   sliderNumber.textContent = corruntSlider + ' of ' +  slidesCount;
    
    // generturremoveAllActive
    removeAllActive();
    
    // add class active sliderImages
    sliderImages[corruntSlider - 1].classList.add('active');
    
    // add class active getUl chilldren
    getUl.children[corruntSlider - 1].classList.add('active');
    
    // check frist 
    if (corruntSlider == 1) {
        buttonBreviuos.classList.add("disabled");
    } else {
                buttonBreviuos.classList.remove("disabled");
    }
    
       // check frist 
    if (corruntSlider == slidesCount) {
        buttonNext.classList.add("disabled");
    } else {
                buttonNext.classList.remove("disabled");
    }
    
}theCheck();

// remove All class active from images and li
function removeAllActive() {
    //all throgh images
    sliderImages.forEach(function (img) {
        img.classList.remove('active');
    });
    // loop getUlLi
    getUlLi.forEach(function (el) {
       el.classList.remove('active') 
    });
}




