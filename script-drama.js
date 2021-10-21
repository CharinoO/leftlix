const next = [$('#next-korea'), $('#next-thailand'), $('#next-china'), $('#next-indonesia'), $('#next-western')]
const prev = [$('#prev-korea'), $('#prev-thailand'), $('#prev-china'), $('#prev-indonesia'), $('#prev-western')]

const slideIndex = [0, 0, 0, 0, 0]

var slides_korea = document.getElementsByClassName("slideshow-korea");
var slides_thailand = document.getElementsByClassName("slideshow-thailand");
var slides_china = document.getElementsByClassName("slideshow-china");
var slides_indonesia = document.getElementsByClassName("slideshow-indonesia");
var slides_western = document.getElementsByClassName("slideshow-western");
const slides = [slides_korea, slides_thailand, slides_china, slides_indonesia, slides_western]

var dots_korea = document.getElementsByClassName("dot-korea");
var dots_thailand = document.getElementsByClassName("dot-thailand");
var dots_china = document.getElementsByClassName("dot-china");
var dots_indonesia = document.getElementsByClassName("dot-indonesia");
var dots_western = document.getElementsByClassName("dot-western");

const dots = [dots_korea, dots_thailand, dots_china, dots_indonesia, dots_western]

var n_slides = 4

for(i = 0; i < slideIndex.length; i++){
    slides[i][0].style.display = "block";  
    dots[i][0].className += " active";
}




// index_negara:
// Korea = 0
// Thailand = 1
// China = 2
// Indonesia = 3
// Western = 4

function myFunction(index, index_negara) {
    for (i = 0; i < n_slides; i++) {
        slides[index_negara][i].style.display = "none";  
        dots[index_negara][i].className = dots[index_negara][i].className.replace(" active", "");
    }

    slides[index_negara][index].style.display = "block";  
    dots[index_negara][index].className += " active";
    slideIndex[index_negara] = index
}


function next_clicked(index_negara) {
    if(slideIndex[index_negara] > 0) slideIndex[index_negara] = slideIndex[index_negara] - 1
    else slideIndex[index_negara] = n_slides-1

    for (i = 0; i < n_slides; i++) {
        slides[index_negara][i].style.display = "none"; 
        dots[index_negara][i].className = dots[index_negara][i].className.replace(" active", "");
    }
    slides[index_negara][slideIndex[index_negara]].style.display = "block";  
    dots[index_negara][slideIndex[index_negara]].className += " active";
}

function prev_clicked(index_negara) {
    if(slideIndex[index_negara] < n_slides-1) slideIndex[index_negara] = slideIndex[index_negara] + 1
    else slideIndex[index_negara] = 0

    for (i = 0; i < n_slides; i++) {
        slides[index_negara][i].style.display = "none"; 
        dots[index_negara][i].className = dots[index_negara][i].className.replace(" active", "");
    }
    slides[index_negara][slideIndex[index_negara]].style.display = "block";  
    dots[index_negara][slideIndex[index_negara]].className += " active";
}

prev[0].on('click', function(){
    next_clicked(0)
})

next[0].on('click', function(){
    prev_clicked(0)
})

prev[1].on('click', function(){
    next_clicked(1)
})

next[1].on('click', function(){
    prev_clicked(1)
})

prev[2].on('click', function(){
    next_clicked(2)
})

next[2].on('click', function(){
    prev_clicked(2)
})

prev[3].on('click', function(){
    next_clicked(3)
})

next[3].on('click', function(){
    prev_clicked(3)
})

prev[4].on('click', function(){
    next_clicked(4)
})

next[4].on('click', function(){
    prev_clicked(4)
})