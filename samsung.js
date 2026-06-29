//     [2,5,7,3,9,10,8]     index = (length - 1) , length = 7

let images = [
  "images/s25ultra1.png",
  "images/s25ultra2.png",
  "images/s25ultra3.png",
  "images/s25ultra4.png",
];

let img = document.getElementById("pic");

let index = 0;

function next() {
//  index++;
//   if (index === images.length) {
//     index = 0;
//   }

     index = (index + 1) % images.length ; 
  img.src = images[index];
}

function previous() {
//   index--;
//   if (index < 0) {
//     index = images.length - 1;
//   }

     index = index <= 0 ? images.length - 1 : index -1 ; 

     console.log(index)
  img.src = images[index];
}
