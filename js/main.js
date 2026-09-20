const burgerBtn = document.getElementById('burgerBtn');
const headerNav = document.getElementById('headerNav');
const body = document.body;

burgerBtn.addEventListener('click', () => {
    // Klasslarni almashtirish (toggle)
    burgerBtn.classList.toggle('active');
    headerNav.classList.toggle('active');
    body.classList.toggle('no-scroll');
});

// Menyu ichidagi har qanday link bosilganda ham menyuni yopish
const navLinks = document.querySelectorAll('.header-box-item-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        burgerBtn.classList.remove('active');
        headerNav.classList.remove('active');
        body.classList.remove('no-scroll');
    });
});