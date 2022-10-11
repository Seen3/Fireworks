function Firework(x, y) {
    this.hu=random(255)
    this.firework = new Particle(random(width), height,true,this.hu);
    this.exploded = false;
    this.radii=random(10,46);
    this.particles=[];
    

    this.done=()=>{
        if (this.exploded && this.particles.length===0)
        {
            return true;
        }
        return false;
    }

    this.update = () => {

        if (!this.exploded) {
            this.firework.applyForce(gravity);
            this.firework.update();
            let s=random(1)>0.5?-1:1;
	    this.firework.vel.x=s*random(2);
            if (this.firework.vel.y >= 0) {
                this.exploded = true;
                this.explode();
            }
        }
        for(let i=this.particles.length-1;i>=0;i--)
        {
            this.particles[i].applyForce(gravity);
            this.particles[i].update();
            if(this.particles[i].done()){
                this.particles.splice(i,1);
            }
        }
    }
    this.explode=()=>{
        let v=random(50,120);
        for(let i=0;i<v;i++)
        {
            let p=new Particle(this.firework.pos.x,this.firework.pos.y,false,this.hu,this.radii);
            this.particles.push(p);
        }
    }
    this.show = () => {
        if (!this.exploded) {
            this.firework.show();
        }
        for(let i=0;i<this.particles.length;i++)
        {
            this.particles[i].show();
        }

    }
}
