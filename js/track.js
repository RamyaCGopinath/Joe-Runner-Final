class Track{
    constructor(x,y,width,angle)
    {
        this.x =x;
        this.y = y;
        this.width = width;
        this.angle= angle;
        this.track_image = loadImage("track.js");
    }
    display() 
    {
       translate(this.x, this.y);
       rotate(this.angle);
    image(this.track_image, 0, 0, this.width);
       }  
}