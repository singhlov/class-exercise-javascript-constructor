var data= [
  {
    name: "Bob",
    speed: 12,
    handling: 9
  },
  {
    name: "Rob",
    speed: 20,
    handling:11
  },
  {
    name: "Chris",
    speed: 30,
    handling:23
  }
]

var racer=[];
function racing(name, speed, handling){
  var that =this;
  this.name=name;
  this.speed=speed;
  this.handling=handling;
  this.ele=document.createElement("div");
  this.ele.style.height="100px";
  this.ele.style.width="200px";
  this.ele.style.backgroundColor="cyan";
  this.ele.style.borderRadius="5px";
  this.ele.style.display="flex";
  this.ele.style.justifyContent="center";
  this.ele.style.alignItems="center";
  this.ele.style.fontSize = "20px";
  
  
  this.ele.innerHTML="Racer: "+ this.name+" Speed: "+this.speed+" Handling: "+this.handling;
  
  this.ele.addEventListener("click", function(){
    that.increaseNumber();
    
})
  document.body.appendChild(this.ele);
}
racing.prototype.increaseNumber = function(){
  this.speed=this.speed+5;
  this.handling=this.handling-2;
  if(this.handling<1){
    return false;
  }
  if(this.handling==1){
    //this.ele.style.backgroundColor="red";
    this.ele.style.border= "8px red solid";
    this.ele.style.color= "red";
  }

  this.ele.innerHTML="Racer: "+ this.name+" Speed: "+this.speed+" Handling: "+this.handling;
}

for(var i=0; i<data.length; i++){
  racer.push(new racing(data[i].name, data[i].speed, data[i].handling))
  
}
racer[0].increaseNumber();