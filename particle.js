function Particle(x, y, firework,hu,radii) {
    this.pos = createVector(x, y);
    this.hu=hu;
    this.firework = firework;
    this.lifespan = 255;

    if (firework) {
        this.vel = createVector(0, random(-20, -8));

    }
    else {
        this.vel = p5.Vector.random2D();
        this.vel.mult(random(2, radii));
    }
    this.acc = createVector(0, 0);

    this.applyForce = (force) => {
        this.acc.add(force);
    }

    this.done=()=>{
        if (this.lifespan <0){
            return true;
        }
        return false;
    }
    this.update = () => {
        if (!this.firework) {
            this.vel.mult(0.9);
            this.lifespan -= 4;
        }

        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
    }
    this.show = () => {
        colorMode(HSB);
        if (!this.firework) {
            strokeWeight(2);
            stroke(hu,255,255, this.lifespan);
        } else {
            strokeWeight(4);
            stroke(hu,255,255);
        };
        point(this.pos.x, this.pos.y);
    }
}