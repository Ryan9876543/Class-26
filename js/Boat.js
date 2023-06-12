class Boat {
    constructor(x,y,w,h,boatpos) {
        var boat_options = {
            isStatic:false,
            friction:1.0,
            restitution:0.8,
            density:1.0 
        }

        this.body = Bodies.rectangle(x,y,w,h,boat_options)
        this.width = w
        this.height = h
        this.image = loadImage("./assets/boat.png")
        this.boatposition = boatpos
        World.add (world,this.body)
    }

    display() {
        var pos = this.body.position
        push()
        translate(pos.x,pos.y)
        imageMode(CENTER)
        image (this.image,0,this.boatposition,this.width,this.height)
        pop()
        //console.log("display")
    }

    remove (index) {
    
        setTimeout(()=>
        {
          Matter.World.remove(world,boats[index].body)
          delete boats[index]
        }, 1000
          
        );
      }

    

}