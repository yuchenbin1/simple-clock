
var now=new Date();
var h=now.getHours();
var m=now.getMinutes();
var s=now.getSeconds();

const hourEl=document.querySelector(".hour");
const minuteEl=document.querySelector(".minute");
const secondEl=document.querySelector(".second");

if(h<=12){
	var angleH=(h+m/60+s/3600)*30;
}else{
	var angleH=((h+m/60+s/3600)-12)*30;
}

	var angleM=(m+s/60)*6;
	var angleS=s*6;
	hourEl.style.transform="rotate("+angleH+"deg)";//为什么一定要加+好呢
	minuteEl.style.transform="rotate("+angleM+"deg)";
	secondEl.style.transform="rotate("+angleS+"deg)";

window.setInterval(()=>{
	
var now=new Date();
var h=now.getHours();
var m=now.getMinutes();
var s=now.getSeconds();

const hourEl=document.querySelector(".hour");
const minuteEl=document.querySelector(".minute");
const secondEl=document.querySelector(".second");

if(h<=12){
	var angleH=(h+m/60+s/3600)*30;
}else{
	var angleH=((h+m/60+s/3600)-12)*30;
}

	var angleM=(m+s/60)*6;
	var angleS=s*6;
	hourEl.style.transform="rotate("+angleH+"deg)";//为什么一定要加+好呢
	minuteEl.style.transform="rotate("+angleM+"deg)";
	secondEl.style.transform="rotate("+angleS+"deg)";
},1000);
