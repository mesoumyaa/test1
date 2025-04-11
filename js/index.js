const title = document.querySelector('.title');

// Clear any previous content
title.innerHTML = '';

// Add First Line
title.innerHTML += `<div class="line line-1"></div>`;
const firstLine = document.querySelector('.line-1');

'Koushika I Have'.split('').forEach(char => {
  if (char !== ' ') {
    firstLine.innerHTML += `<span>${char}</span>`;
  } else {
    firstLine.innerHTML += `<span style='margin-right: 20px;'></span>`;
  }
});

// Add Second Line
title.innerHTML += `<div class="line line-2"></div>`;
const secondLine = document.querySelector('.line-2');

'Something For You'.split('').forEach(char => {
  if (char !== ' ') {
    secondLine.innerHTML += `<span>${char}</span>`;
  } else {
    secondLine.innerHTML += `<span style='margin-right: 20px;'></span>`;
  }
});

// Animation Delay
const textElements = document.querySelectorAll('.title span');
textElements.forEach((element) => {
  const randomDelay = Math.random() * 3; // Random delay between 0 to 3 seconds
  element.style.animationDelay = `${randomDelay}s`;
});
