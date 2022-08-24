const navbarEl= document.querySelector(".navbar");
const bottomcontainerEL=document.querySelector(".bottomcontainer");
console.log(navbarEl.offsetHeight);
console.log(bottomcontainerEL.offsetTop);
window.addEventListener("scroll",()=>{
    if (window.scrollY >
        bottomcontainerEL.offsetTop-navbarEl.offsetHeight-50){
        navbarEl.classList.add("active")
        }
            else{
                navbarEl.classList.remove("active")
            }
        

})
