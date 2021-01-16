class Box{
  constructor (x,y,width,length) {
   
   var options={
   isStatic:false,
   restitution:0.3,
   friction:1,
   density:0.6,
   }
   this.body = Bodies.rectangle(x,y,width,length,options);
   this.width=width;
   this.length=length;
   World.add(world,this.body);
  }
    display(){
     strokeWeight(1);
     fill("pink");
     stroke(48,22,8);
     rectMode(CENTER);
     rect(this.body.position.x,this.body.position.y,this.width,this.length)
     
 
 
    }
 }
