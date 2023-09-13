let navbar = document.querySelector(".navbar");
let allInp = document.querySelectorAll(".inp");
let btn = document.querySelector(".btn");
let ScrollUp = document.querySelector(".up");

window.onscroll = function(){
    if(this.scrollY >=20){
        navbar.classList.add("scroll");
        ScrollUp.style.display = "block";
    }
    else {
        navbar.classList.remove("scroll");
        ScrollUp.style.display = "none";
    }
}

ScrollUp.onclick = function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
}

for(let i=0;i<allInp.length;i++){
    allInp[i].oninput = function(){
        let n=0;
        // console.log(allInp[i]);
        for(let j=0;j<allInp.length;j++){
            if(allInp[j].value.length>1){
                n++;
            }
        }
        if(n==4){
            btn.style.opacity="1";
        }
    }
}