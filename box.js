class Box {
    constructor(){
        this.x = 100;
        this.y = 100;
        this.w = 40;
        this.h = 40;
    }
    display() {
        rect(this.x, this.y, this.w, this.h);
    }
    set_velocityX(vs){
        this.x = this.x + vs
    }
    set_velocityY(vy){
        this.y = this.y + vy
    }
}