
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.question');

        question.addEventListener('click', function() {
            item.classList.toggle('open');
        });
    });
});