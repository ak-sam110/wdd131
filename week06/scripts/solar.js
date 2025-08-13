// Utility: Set current year in footer
document.getElementById('currentyear').textContent = new Date().getFullYear();

// Testimonials Data (images must be optimized and in images/ folder)
const testimonials = [
    {
        name: "Aisha Bello",
        image: "images/testimonial1.jpg",
        quote: "Dartun delivered beyond my expectations. My home is now powered efficiently and reliably.",
        location: "Lagos"
    },
    {
        name: "James Okoro",
        image: "images/testimonial2.jpg",
        quote: "Professional service and excellent support. Highly recommend Dartun for solar solutions.",
        location: "Abuja"
    },
    {
        name: "Fatima Yusuf",
        image: "images/testimonial3.jpg",
        quote: "The inverter installation was smooth, and my energy bills are much lower now.",
        location: "Kaduna"
    },
    {
        name: "Emeka Nwosu",
        image: "images/testimonial4.jpg",
        quote: "Reliable products and quick maintenance response. Thank you Dartun!",
        location: "Enugu"
    }
];

// Lazy load testimonials images and output via template literals
function renderTestimonials() {
    const container = document.querySelector('.testimonial-list');
    if (!container) return;
    container.innerHTML = testimonials.map(t =>
        `<div class="testimonial">
      <img src="${t.image}" alt="Photo of ${t.name}" width="64" height="64" loading="lazy">
      <blockquote>"${t.quote}"</blockquote>
      <cite>${t.name}, ${t.location}</cite>
    </div>`
    ).join('');
}
renderTestimonials();

// Navigation: Scroll to section
function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Show and hide quote/contact form (single form used here for simplicity)
function showQuoteForm() {
    document.getElementById('quote-form-section').classList.remove('hidden');
    window.scrollTo({ top: document.getElementById('quote-form-section').offsetTop - 60, behavior: 'smooth' });
}
function showContactForm() {
    showQuoteForm();
    document.getElementById('service').value = '';
}

// Form validation and localStorage save
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('quote-form');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const name = form.name.value.trim();
            const email = form.email.value.trim();
            const service = form.service.value;
            const details = form.details.value.trim();

            // Conditional branching for validation
            if (!name || name.length < 2) {
                showFeedback("Please enter a valid name (at least 2 characters).");
                return;
            }
            if (!validateEmail(email)) {
                showFeedback("Please enter a valid email address.");
                return;
            }
            if (!service) {
                showFeedback("Please select a service.");
                return;
            }

            // Save to localStorage (object, template literals)
            const submission = { name, email, service, details, date: new Date().toISOString() };
            let submissions = JSON.parse(localStorage.getItem('dartun_submissions') || "[]");
            submissions.push(submission);
            localStorage.setItem('dartun_submissions', JSON.stringify(submissions));

            showFeedback(`Thank you, ${name}! Your request for "${service}" has been submitted. We'll contact you soon.`);
            form.reset();
        });
    }
});

// Feedback output (DOM interaction)
function showFeedback(message) {
    const feedback = document.getElementById('form-feedback');
    if (feedback) {
        feedback.textContent = message;
        feedback.style.color = "var(--accent)";
    }
}

// Email validation
function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Accessibility: Keyboard focus for navigation
document.querySelectorAll('.nav-list a').forEach(a => {
    a.addEventListener('keyup', function (e) {
        if (e.key === "Enter") {
            a.click();
        }
    });
});