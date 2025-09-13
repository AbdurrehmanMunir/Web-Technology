// Smooth scroll for in-page links
for (const a of document.querySelectorAll('a[href^="#"]')) {
a.addEventListener('click', e => {
const id = a.getAttribute('href').slice(1);
const el = document.getElementById(id);
if (el) {
e.preventDefault();
el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
});
}


// Demo contact button
const btn = document.getElementById('sendBtn');
const status = document.getElementById('status');
btn?.addEventListener('click', () => {
status.textContent = 'Thanks! (Demo only — no backend yet)';
});


// Current year in footer
document.getElementById('year').textContent = new Date().getFullYear();