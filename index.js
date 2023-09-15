let dodger = document.getElementById('dodger');

function moveDodgerLeft() {
  let left = dodger.style.left;
  left = parseInt(left) || 0; // Parsing to integer with a fallback to 0

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

function moveDodgerRight() {
  let left = dodger.style.left;
  left = parseInt(left) || 0; // Parsing to integer with a fallback to 0

  if (left < 360) {
    dodger.style.left = `${left + 1}px`;
  }
}

  
