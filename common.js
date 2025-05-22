    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target);
        }
      });
    });

    document.addEventListener("DOMContentLoaded", () => {
      document.querySelectorAll('section').forEach(sec => {
        observer.observe(sec);
      });
    });