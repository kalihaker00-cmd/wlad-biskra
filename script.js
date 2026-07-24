const accordions=document.querySelectorAll(".accordion");

accordions.forEach(btn=>{

btn.onclick=function(){

this.classList.toggle("active");

let panel=this.nextElementSibling;

if(panel.style.maxHeight){

panel.style.maxHeight=null;

}else{

panel.style.maxHeight=panel.scrollHeight+"px";

}

}

});