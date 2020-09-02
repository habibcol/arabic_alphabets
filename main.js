var key = document.querySelectorAll(".key");

console.log(key[5]);

for (let i = 0; i < key.length; i++) {
  key[i].addEventListener("click", function (e) {
    console.log(i);
    if (i === 0) {
      let listen = document.querySelector(".alif");
      // console.log(alif);
      listen.play();
      // console.log("hello");
    } else if (i === 1) {
      let listen = document.querySelector(".ba");
      listen.play();
    } else if (i === 2) {
      let listen = document.querySelector(".ta");
      listen.play();
    } else if (i === 3) {
      let listen = document.querySelector(".tsa");
      listen.play();
    } else if (i === 4) {
      let listen = document.querySelector(".jeem");
      listen.play();
    } else if (i === 5) {
      let listen = document.querySelector(".haa");
      listen.play();
    } else if (i === 6) {
      let listen = document.querySelector(".khaa");
      listen.play();
    } else if (i === 7) {
      let listen = document.querySelector(".dal");
      listen.play();
    } else if (i === 8) {
      let listen = document.querySelector(".dhal");
      listen.play();
    } else if (i === 9) {
      let listen = document.querySelector(".raa");
      listen.play();
    } else if (i === 10) {
      let listen = document.querySelector(".jaa");
      listen.play();
    } else if (i === 11) {
      let listen = document.querySelector(".seen");
      listen.play();
    } else if (i === 12) {
      let listen = document.querySelector(".sheen");
      listen.play();
    } else if (i === 13) {
      let listen = document.querySelector(".saad");
      listen.play();
    } else if (i === 14) {
      let listen = document.querySelector(".dhaad");
      listen.play();
    } else if (i === 15) {
      let listen = document.querySelector(".toa");
      listen.play();
    } else if (i === 16) {
      let listen = document.querySelector(".dhaa");
      listen.play();
    } else if (i === 17) {
      let listen = document.querySelector(".ain");
      listen.play();
    } else if (i === 18) {
      let listen = document.querySelector(".ghain");
      listen.play();
    } else if (i === 19) {
      let listen = document.querySelector(".faa");
      listen.play();
    } else if (i === 20) {
      let listen = document.querySelector(".qaaf");
      listen.play();
    } else if (i === 21) {
      let listen = document.querySelector(".kaaf");
      listen.play();
    } else if (i === 22) {
      let listen = document.querySelector(".laam");
      listen.play();
    } else if (i === 23) {
      let listen = document.querySelector(".meem");
      listen.play();
    } else if (i === 24) {
      let listen = document.querySelector(".noon");
      listen.play();
    } else if (i === 25) {
      let listen = document.querySelector(".waw");
      listen.play();
    } else if (i === 26) {
      let listen = document.querySelector(".ha");
      listen.play();
    } else if (i === 27) {
      let listen = document.querySelector(".hamza");
      listen.play();
    } else if (i === 28) {
      let listen = document.querySelector(".yaa");
      listen.play();
    } else if (i === 29) {
      let listen = document.querySelector(".jaa");
      listen.play();
    }
  });
}
