//gallery.js

// Dynamically load event galleries
fetch('data/gallery.json')
  .then(response => response.json())
  .then(data => {
    Object.keys(data).forEach(event => {
      const gallery = document.getElementById(`${event}-gallery`);
      if (gallery) {
        data[event].forEach(imagePath => {
          const item = document.createElement('div');
          item.className = 'gallery-item';
          item.innerHTML = `<img src="${imagePath}" alt="${event} image">`;
          gallery.appendChild(item);
        });
      }
    });
  });

// Filter functionality using dropdown
document.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.getElementById('filter-dropdown');
    const galleries = document.querySelectorAll('.event-gallery');
  
    // Hide all galleries initially
    galleries.forEach(gallery => (gallery.style.display = 'none'));
  
    dropdown.addEventListener('change', () => {
      const filter = dropdown.value;
  
      // Show/Hide Galleries
      galleries.forEach(gallery => {
        if (filter === 'all' || gallery.id === filter) {
          gallery.style.display = 'block';
        } else {
          gallery.style.display = 'none';
        }
      });
    });
  });  
