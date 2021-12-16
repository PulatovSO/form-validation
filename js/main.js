
let form = document.querySelector('form');
let fname = document.querySelector('.name');
let email = document.querySelector('.email');
let message = document.querySelector('#message');
let btn = document.querySelector('.btn');
let contains = false;

fname.addEventListener('keyup', (e) => {
  if (e.target.value.length < 3) {
    e.target.style.background = '#ff00003f';
  } else if (e.target.value.length > 3) {
    e.target.style.background = '#5eff003f';
  }
})

email.addEventListener('keyup', (e) => {
  for (let i of e.target.value) {
    if (i == '@') {
      contains = true;
      break
    } else {
      contains = false;
    }
  }

  if (e.target.value.length < 3 || contains == false) {
    e.target.style.background = '#ff00003f';
  } else if (e.target.value.length > 3) {
    e.target.style.background = '#5eff003f';
  }
})

message.addEventListener('keyup', (e) => {
  if (e.target.value.length < 3) {
    e.target.style.background = '#ff00003f';
  } else if (e.target.value.length > 3) {
    e.target.style.background = '#5eff003f';
  }
})


