function setup() {
  createCanvas(720, 720);
  
  randomArray = new visualArray(720, 0, 720);
  sorter = new sorter(randomArray, "ins");
  
  // randomArray.printMembers();
  
  started = false;
}

function draw() {
  background(0);
  randomArray.display();
  
  if(started) {
    sorter.insertionSort();
    // print(randomArray.isSorted());
  }
  
}

function keyPressed () {
  if (keyCode === ENTER) {
    started = true;
  }
}