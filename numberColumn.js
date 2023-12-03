class numberColumn {
  constructor(value, color1, color2) {
    this.value = value;
    this.color1 = color1;
    this.color2 = color2;
    
    this.sorted = false;
  }
  
  display(x, y, w, h) {
    noStroke();
    if(this.sorted) {
      fill(this.color2);
    }
    else {
      fill(this.color1);
    }
    rect(x, y, w, -h);
  }
  
}