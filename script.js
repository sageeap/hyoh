// Prevent scrolling
document.body.style.overflow = 'hidden';
document.documentElement.style.overflow = 'hidden';

// Set custom cursors
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.cursor = `url('./data/Untitled_Artwork-1.png'), url('data/Untitled_Artwork-1.png'), auto`;

    // Set cursor for clickable images
    const imageLinks = document.querySelectorAll('.image-link');
    imageLinks.forEach(link => {
        link.style.cursor = `url('./data/Untitled_Artwork-2.png'), url('data/Untitled_Artwork-2.png'), pointer`;
        const img = link.querySelector('img');
        if (img) {
            img.style.cursor = `url('./data/Untitled_Artwork-2.png'), url('data/Untitled_Artwork-2.png'), pointer`;
        }
    });
});

