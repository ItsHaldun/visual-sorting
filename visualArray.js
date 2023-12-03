class visualArray {
  constructor (size=100, min=0, max=100, 
                unsortedClr=150, sortedClr=color(0,255,0)) {
    this.size = size;
    this.min = min;
    this.max = max;
    this.unsortedClr = unsortedClr;
    this.sortedClr = sortedClr;
    this.thickness = int(width / this.size);
    
    this.members = [];
    
    this.generate();
  }
  
  generate() {
    for(let i=0; i<this.size; i++) {
      let number = int(random(this.min,this.max));
      let member = new numberColumn(number, this.unsortedClr, this.sortedClr);
      this.members.push(member);
    }
  }
  
  display() {
    for(let i=0; i<this.size; i++) {
      let x = i * this.thickness;
      let h = this.members[i].value * height / this.max;

      this.members[i].display(x, height, this.thickness, h);
    }
  }
  
  isSorted() {
    for(let i=0; i<this.size; i++) {
      if (this.members[i].sorted == false) {
        return false;
      }
    }
    return true;
  }
  
  printMembers() {
    for(let i=0; i<this.size; i++) {
      print(this.members[i].value);
    }
  }
  
}