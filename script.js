// Liberal Party 2010 Simulation Script

document.addEventListener('DOMContentLoaded', () => {
    console.log('Liberal Party of Canada (2010 Simulation) Initialized');

    // Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Simple form submission feedback
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = form.querySelector('input[type="email"]');
            if (emailInput && emailInput.value) {
                alert(`Thank you for subscribing! A confirmation email has been sent to ${emailInput.value}. (Simulation only)`);
                emailInput.value = '';
            }
        });
    });
});
