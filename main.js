document.addEventListener("DOMContentLoaded", () => {
    const progressBar = document.createElement('div');
    progressBar.id = 'scroll-progress';
    document.body.appendChild(progressBar);

    const observerOptions = { threshold: 0.1 };
    
    const observer = new IntersectionObserver((entries) => { 
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-visible');
            }
        });
    }, observerOptions);

    const items = document.querySelectorAll('.project-card, .video-card, .exp-item, section');
    items.forEach(item => {
        item.classList.add('reveal-hidden');
        observer.observe(item);
    });

    window.addEventListener("scroll", () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + "%";
    });
});