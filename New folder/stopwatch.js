let start1=document.getElementById("start");

let hr=0;
let min=0;
let sec=0;
let milisec=0
let hrstr;
let minstr;
let secstr;
let milistr;
start1.addEventListener("click",function(){
 time=true;
 start1.style.display="none";
    stop1.style.display="block";
 fun();
})
function fun(){
 if(time){
    milisec++;
    if(milisec==100){
        sec++;
        milisec=0;
    }
    if(sec==60){
        min++;
        sec=0;
    }
    if(min==60)
        hr++;
    min=0;
 }

    hrstr=hr;
     minstr=min;
    secstr=sec;
    milistr=milisec;
if(hr<10){
    hrstr="0"+hrstr;
}
if(min<10){
    minstr="0"+minstr;
}
if(sec<10){
    secstr="0"+secstr;
}
if(milisec<10){
    milistr="0"+milistr;
}
document.getElementById("hr").innerHTML=hrstr;
document.getElementById("min").innerHTML=minstr;
document.getElementById("sec").innerHTML=secstr;
document.getElementById("milisec").innerHTML=milistr;
setTimeout(fun,10);
}
let stop1=document.getElementById("stop");
stop1.addEventListener("click",function(){
    time=false;
    start1.style.display="block";
    stop1.style.display="none";
    
    
})
let lap1=document.getElementById("lap");
let list=document.getElementById("list");
lap1.addEventListener("click", function(){
  list.innerHTML+= `  <li>
        <span  class=span1 id="hr1">${hrstr}</span>
        <span class=span1 >:</span>
     <span class=span1 id="min1">${minstr}</span>
      <span class=span1 >:</span>
<span class=span1  id="sec1">${secstr}</span>
 <span class=span1 >:</span>
<span class=span1  id="milisec1">${milistr}</span>
    </li>`
    list.style.fontSize="20px";
})


 let reset1=document.getElementById("reset");
 reset1.addEventListener("click",function(){
    hr=0;
    min=0;
    sec=0;
    milisec=0;
    document.getElementById("hr").innerHTML="00";
    document.getElementById("min").innerHTML="00";
    document.getElementById("sec").innerHTML="00";
    document.getElementById("milisec").innerHTML="00";
 })


 //setInterval(()=>{console.log("hhh")},1000)