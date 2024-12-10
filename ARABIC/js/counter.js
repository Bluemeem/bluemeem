document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counters = entry.target.querySelectorAll('.counter');
                counters.forEach(counter => {
                    const target = parseInt(counter.getAttribute('data-target'));
                    const duration = 2000;
                    const stepTime = Math.abs(Math.floor(duration / target));
                    
                    let count = 0;
                    const timer = setInterval(() => {
                        count += 1;
                        counter.textContent = count + '+';
                        if (count >= target) {
                            clearInterval(timer);
                        }
                    }, stepTime);
                });
                observer.disconnect();
            }
        });
    }, { threshold: 0.5 });

    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
        observer.observe(aboutSection);
    }
});
