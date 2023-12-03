class sorter {
  constructor (target, algorithm) {
    this.target = target;
    this.algorithm = algorithm;
    this.iCont = 1;
  }
  
  insertionSort () {
    let i = this.iCont;
    let j = i;
    
    while (j > 0 && (this.target.members[j-1].value > this.target.members[j].value)) {
      let temp = this.target.members[j];
      this.target.members[j] = this.target.members[j-1];
      this.target.members[j-1] = temp;
      j = j-1;
    }
    
    this.target.members[j].sorted = true;
    
    if (this.iCont < this.target.size) {
      this.iCont++;
    }
    
  }
  
  selectionSort () {
    let i = this.iCont;
    let j = i;
    let smallest = this.target.members[0];
    
    while (j < this.target.count) {
      if (smallest > this.target.members[j]) {
        smallest = this.target.members[j];
      }
    }
    
    
    if (this.iCont < this.target.size) {
      this.iCont++;
    }
  }
    
}
  
  
  
  
  