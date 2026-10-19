b.onclick=()=>{
for(i=0;i<15;i++){
let d=document.createElement("div");
d.innerText="💻";
d.style=`position:fixed;
left:${Math.random()*100}vw;
top:0;
font-size:30px`;
document.body.appendChild(d);
setTimeout(()=>d.remove(),1600)
}}

