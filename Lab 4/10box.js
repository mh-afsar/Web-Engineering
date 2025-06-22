const container = document.getElementById('boxContainer');

for(let i = 1; i <= 10; i++) {
  const box = document.createElement('div');
  box.classList.add('box');

  if(i % 2 === 1) {
    box.classList.add('orange'); // odd
  } else {
    box.classList.add('aqua'); // even
  }

  box.textContent = `Box ${i}`;
  container.appendChild(box);
}