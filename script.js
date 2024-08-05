const imageContainer = document.querySelector('.image-container');
const images = document.querySelectorAll('.image');

imageContainer.addEventListener('mouseover', () => {
    images.forEach((image, index) => {
        image.style.transform = `translateX(${index % 2 === 0? '-100%' : '100%'})`;
    });
});

imageContainer.addEventListener('mouseout', () => {
    images.forEach((image) => {
        image.style.transform = 'translateX(0)';
    });
});