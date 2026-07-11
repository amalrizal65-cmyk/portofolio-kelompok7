document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const tujuan=document.querySelector(this.getAttribute("href"));

if(tujuan){

tujuan.scrollIntoView({
behavior:"smooth"
});

}

});

});