document.addEventListener('DOMContentLoaded', function() {
    const myCarousel = document.getElementById('heroCarousel')
    const carousel = new bootstrap.Carousel(myCarousel, {
        interval: 3000,
        pause: false,
        ride: 'carousel'
    })
})