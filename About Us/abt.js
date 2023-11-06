let navLinks  = document.querySelector(".nav-resp");
let btn = document.querySelector(".nav-toggle");

let flag = 0;


btn.addEventListener("click",function(){

    if(flag == 0){
        
        navLinks.style.right = 0;
        flag = 1;
    }
    else{
        navLinks.style.right = "100%";
        flag = 0;
    }
    
})