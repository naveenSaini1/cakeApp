const metrimonialUsers={
    names:['Naveen','sumit','Aniket','Arun','Pars'],
    imgs:['../img/cake-1.jpeg','../img/cake1.jpg','../img/cake2.jpg','../img/cake3.jpg','../img/cupcake3.jpg'],
    feedback:['this is my first webiste to take order of cake at online verry Cool','I think the delivery of the Cake is awsome ','I found Some bugs but after all cake qulity is great and thanku so much','very very Exelent great worke of your and as well as hard working','i am collge studen and thanku so much']
}
function imgaeChangerUsingApi(){
    fetch('https://randomuser.me/api').then(function(res){
        return res.json()
    }).then(function(data){
        let metrimonialImg=document.querySelector('.metrimonial img');
        metrimonialImg.src=`${data.results[0].picture.medium}`;
    })

}
imgaeChangerUsingApi();
//  nest buttons
let metrimonialCount=0;
function metrimonialNext(){
    
    let metrimonialName=document.querySelector('.metrimonial h3');
    let metrimonialFeedback=document.querySelector('.metrimonial p');
    if(metrimonialCount<metrimonialUsers.names.length && metrimonialCount>=0){
        imgaeChangerUsingApi();
        metrimonialName.innerText=`${metrimonialUsers.names[metrimonialCount]}`;
        metrimonialFeedback.innerText=`${metrimonialUsers.feedback[metrimonialCount]}`;
       }
 
    else{
        metrimonialCount=0;
        imgaeChangerUsingApi();
        metrimonialName.innerText=`${metrimonialUsers.names[metrimonialCount]}`;
        metrimonialFeedback.innerText=`${metrimonialUsers.feedback[metrimonialCount]}`;
        console.log('inside else',metrimonialCount)
    }
    metrimonialCount+=1;

}
//  back buttons

function metrimonialBack(){
    let metrimonialName=document.querySelector('.metrimonial h3');
    let metrimonialFeedback=document.querySelector('.metrimonial p');
    if(metrimonialCount>=0 && metrimonialCount<metrimonialUsers.names.length){
        imgaeChangerUsingApi();
        metrimonialName.innerText=`${metrimonialUsers.names[metrimonialCount]}`;
        metrimonialFeedback.innerText=`${metrimonialUsers.feedback[metrimonialCount]}`;
    }
    
    else{
        metrimonialCount=metrimonialUsers.names.length-1;
        imgaeChangerUsingApi();
        metrimonialName.innerText=`${metrimonialUsers.names[metrimonialCount]}`;
        metrimonialFeedback.innerText=`${metrimonialUsers.feedback[metrimonialCount]}`;
    }
    metrimonialCount-=1;

}



