let body=document.getElementsByTagName('body')[0];
let sliderDiv=document.querySelectorAll('.slider');
// mobile view menus javascript 
let hemburger = document.querySelector('.menu .menus ul');
let hemImage = document.querySelector('.hemburger');
function hemburgerFun() {
    if (hemburger.style.maxHeight == '450px') {
        // hemImage.style.width = '100%';
        hemburger.style.maxHeight = '0px';
        hemImage.innerHTML = ` <i class="fas fa-bars"></i>`;;

    }
    else {
        hemburger.style.maxHeight = '450px'
        // hemImage.style.width = '0%';
        hemImage.innerHTML = `<i class="fas fa-times"></i>`;

    }
}

// scrolling javascript
let imageSlider = document.getElementsByClassName('image-slider')[0];
let count = 0;
let leftBtn = document.querySelector('.image-slider-section .left-slider-btn');
let rightBtn = document.querySelector('.image-slider-section .right-slider-btn');
function imageSliderFun() {
    let imageSliderWidth = imageSlider.scrollWidth;
    count += 235;
    if (3000 < count) {
        count = 0;
    }
    else {
        imageSlider.scrollTo({
            top: 0,
            left: count,
            behavior: 'smooth'

        });
    }
}
setInterval(imageSliderFun, 4000);


// image forward right button 
rightBtn.addEventListener('click', function () {
    count += 236;
    if (3000 < count) {
        count = 0;
    }
    else {
        imageSlider.scrollTo({
            top: 0,
            left: count,
            behavior: 'smooth'

        });
    }
})
// image forward left btn

leftBtn.addEventListener('click', function () {
    count -= 236;
    if (0 > count) {
        count = 3000;
    }
    else {
        imageSlider.scrollTo({
            top: 0,
            left: count,
            behavior: 'smooth'

        });
    }
})
// filter the foods(searching)
let emaptStatus = document.getElementsByClassName('error')[0];
let searchInputButton = document.querySelector('.search-box-icon button');
let allFoodSlider = document.querySelectorAll('.all-foods .slider');
let erroCount = 0;
searchInputButton.addEventListener('click', function () {
    let searchInputValue = document.querySelector('.search-box input').value;
    Array.from(allFoodSlider).forEach(function (element) {
        let cardText = element.getElementsByTagName('p')[0].innerText;
        erroCount += 1;
        console.log(erroCount);
        if (cardText.toLocaleLowerCase().includes(searchInputValue.toLocaleLowerCase())) {
            element.style.display = 'block';
            // erroCount-=1;
        }
        else {
            element.style.display = 'none';



            // if (element.style.display == 'none') {
            //     emaptStatus.style.display = 'block';
            // }
        }



    });
});

// filter-container-search-label s
let labelfilter = document.querySelectorAll('.filter-container-search-label button');
Array.from(labelfilter).forEach(function (element) {
    element.addEventListener('click', function () {
        console.log(element.innerText)
        allFoodSlider.forEach(function (element2) {
            let cardText = element2.getElementsByTagName('p')[0].innerText;
            if (cardText.toLocaleLowerCase().includes(element.innerText.toLocaleLowerCase())) {
                element2.style.display = 'block';
            }
            else if (element.innerText.toLocaleLowerCase() == 'all') {
                element2.style.display = 'block';
            }
            else {
                element2.style.display = 'none';
            }

        })

    });
})



// function CartFunc() {

// }

// let itemValue = document.querySelector('p');
// let itmeCountValue = 1;
// let imgaeChangerCount=0;
// let allSlider = document.getElementsByClassName('slider');
// let allDataCart='';
// // console.log(allSlider);
// Array.from(allSlider).forEach(function (element) {
//     // console.log(element)
//     let allsliderButton = element.getElementsByTagName('button');
//     Array.from(allsliderButton).forEach(function (element1) {
//         // console.log(element)
//         imgaeChangerCount+=1
//         element1.addEventListener('click', function () {
            
            
//             let conformCart = confirm(`do you really want to add this in the  cart item${itmeCountValue}`)
//             if (conformCart == true) {
//                 itmeCountValue+=1;
//                 itemValue.innerHTML = `${itmeCountValue} <span>items</span>`;
//             //     allDataCart+=`<div class="addCartSmallContainer slider">
//             //     <a href=""><img src="${element.getElementsByTagName('img')[imgaeChangerCount]}" alt=""></a>
//             //     <div class="addCartVerySmallContainer">
//             //     <p>${element.getElementsByClassName('p')[imgaeChangerCount]}</p>
//             //     <p></p>
//             //     </div>
//             // </div>`;

//             }
//             console.log(allDataCart);
            
//         })
//         console.log(imgaeChangerCount)
//     })
// })

let allSlider=document.querySelectorAll('.slider button');






let addCartClick=document.getElementsByClassName('add-cart')[0];
let addCartContainer=document.getElementsByClassName('addCartContainer')[0];
addCartClick.addEventListener('click',function(){
   
   if(addCartContainer.style.display=='none'){

    addCartContainer.style.display='block';
    // addCartContainer.style.transform='2'
   }
   else{
       addCartContainer.style.display='none';
   }

});


// theme changer 
moonlightCounter=0;
let moonlight=document.getElementsByClassName('moonlight')[0];
moonlight.addEventListener('click',function() {
    moonlightCounter+=1;
    console.log(moonlightCounter)
    let logoH1=document.querySelector('.logo h1');
    let addCart=document.querySelector('.add-cart');
    let mostPurchasedHeading=document.querySelector('.most-purchased-heading');
    let hemburgerI=document.querySelector('.hemburger i');
    if(moonlightCounter==1){
     body.style.transition='2s ease';
    body.style.backgroundColor='black';
    Array.from(sliderDiv).forEach(function(element){
        element.style.backgroundColor='white';
        element.style.marginTop='1rem';
        logoH1.style.color='white';
        hemburgerI.style.backgroundColor='white';
        mostPurchasedHeading.style.backgroundColor='white';
        addCart.style.backgroundColor='white';

    })

    }
    
    else{
        body.style.backgroundColor='white';
        logoH1.style.color='black';
        addCart.style.backgroundColor='white';
        moonlightCounter=0;
        console.log(moonlightCounter)
    }

});

// end theme changer 




// navigation menus fixed postion after sometime 
window.addEventListener('scroll',function(){
    let nav=this.document.querySelector('nav');
    if(window.pageYOffset > 100){
        nav.style.position='fixed';
        nav.style.transition='1s ease'
        nav.style.top='0px';
        nav.style.backgroundColor='white'
        nav.style.zIndex='2';
        

    }
    else{
        nav.style.position='static';
    }
})




// imgae full mode 
function FullModeImage(){

}
FullModeImage();

let sliderImage=document.querySelectorAll('.slider img');
// sliderImage.addEventListener('click',function(){
//     console.log(e);
//     console.log('ldj')
// })
// Array.from(sliderImage).forEach(function(e){
//     // console.log(e);
//     e.addEventListener('click',function(){
//         console.log(e);
//         // e.style.position='absolute';
//         // e.style.top=''
//         e.classList.add('fullMode');
//     })
// })