'use strict';

let moveCounter = 0;
const maxMoves = 15;

const taunts = [
  'So close!',
  'Not quite',
  'Do you REALLY want it?',
  'Are you even trying?',
  'Too slow!',
  'Try again',
  'You suck',
  'Pathetic',
  'Inferior human',
];

// Select Add To Cart and Buy Now Buttons by ID from the DOM
const addToCartButton = document.querySelector('#addToCart_feature_div');
const buyNowButton = document.querySelector('#buyNow_feature_div');
addToCartButton.addEventListener('mouseover', moveButton);
buyNowButton.addEventListener('mouseover', moveButton);
// $('#addToCart_feature_div').remove();

//store button widths
const buttonWidth = addToCartButton.clientWidth;
const buttonHeight = addToCartButton.clientWidth;

console.log(window.innerHeight, window.innerWidth);

// function to generate random coordinates
function getRandomArbitrary() {
  const x = Math.floor(Math.random() * (window.innerWidth - buttonWidth));
  const y = Math.floor(Math.random() * (window.innerHeight - buttonHeight));
  return [x, y];
}

// function to pass into event listener
function moveButton(event) {
  const [x, y] = getRandomArbitrary();
  const button = event.target.closest('div');
  console.dir(button);
  console.log(button.firstChild);
  const addToCartSpan = document.getElementById('submit.add-to-cart');
  const buyNowSpan = document.getElementById('submit.buy-now-announce');

  // check if game is over
  if (moveCounter > maxMoves) {
    addToCartSpan.innerText = 'Fine. You Win.';
    buyNowSpan.innerText = 'I tried to save you';
    return;
  }
  moveCounter++;

  button.style.position = 'fixed';

  button.style.width = `${buttonWidth}px`;

  // button.firstChild.innerText =
  addToCartSpan.innerText =
    taunts[Math.floor(Math.random() * (taunts.length - 1))];
  buyNowSpan.innerText =
    taunts[Math.floor(Math.random() * (taunts.length - 1))];

  button.style.left = `${x}px`;
  button.style.top = `${y}px`;
  button.style.zIndex = '500';

  // set to moving and call animation function
  // moving = true;
  // animateButtons();
}

function animateButtons() {
  animationsCounter++;
  const [xAddToCart, yAddToCart] = getRandomArbitrary();
  const [xBuyNow, yBuyNow] = getRandomArbitrary();

  $('#addToCart_feature_div').animate(
    { left: xAddToCart, top: yAddToCart },
    1000,
    function () {
      console.log('hello from the callback function');
      console.log(this);

      animateButtons();
    }
  );
  // $('#buyNow_feature_div').animate(
  //   { left: xBuyNow, top: yBuyNow },
  //   1000,
  //   function () {
  //     animate();
  //   }
  // );
}
