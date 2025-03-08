const slider = document.querySelector('.slider');

// Function to handle slider navigation
function activate(e) {
  const items = document.querySelectorAll('.item');
  if (e.target.matches('.next')) {
    slider.append(items[0]);
  } else if (e.target.matches('.prev')) {
    slider.prepend(items[items.length - 1]);
  }

  // Hide content for all items
  items.forEach(item => {
    item.querySelector('.content').style.display = 'none';
  });

  // Show content only for the main item (second item)
  const mainItem = document.querySelector('.item:nth-child(2)');
  if (mainItem) {
    mainItem.querySelector('.content').style.display = 'block';
  }
}

// Apply dynamic text color to each item on page load
document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.item');

  items.forEach(item => {
    const backgroundImage = window.getComputedStyle(item).backgroundImage;
    const imageUrl = backgroundImage.replace(/url\(['"]?(.*?)['"]?\)/, '$1');

    if (imageUrl) {
      getDominantColor(imageUrl, item.querySelector('.content'));
    }
  });

  // Show content only for the main item (second item) on page load
  const mainItem = document.querySelector('.item:nth-child(2)');
  if (mainItem) {
    mainItem.querySelector('.content').style.display = 'block';
  }
});

// Add click event listener for slider navigation
document.addEventListener('click', activate, false);