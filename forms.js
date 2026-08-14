// Direct Formspree submission for GitHub Pages static forms.
const DEFAULT_FORM_ENDPOINT = 'https://formspree.io/f/xgawyalg';

function getFormEndpoint(form) {
    return (form.dataset.formEndpoint || DEFAULT_FORM_ENDPOINT).trim();
}

async function submitWarkfinForm(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const button = form.querySelector('button[type="submit"]');
    const feedback = form.querySelector('.form-feedback');
    const formData = new FormData(form);
    const endpoint = getFormEndpoint(form);
    const isTraining = form.id === 'trainingForm';

    // Disable button and show spinner
    button.disabled = true;
    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    feedback.className = 'form-feedback';

    // Honeypot check
    if ((formData.get('website') || '').trim() !== '') {
        feedback.textContent = 'Unable to process this submission.';
        feedback.classList.add('error');
        button.disabled = false;
        button.innerHTML = isTraining ? 'Submit Registration' : 'Send Message';
        return;
    }

    try {
        const response = await fetch(endpoint, {
            method: 'POST',
            body: formData,
            headers: { Accept: 'application/json' }
        });

        if (!response.ok) {
            let errorMessage = 'Unable to send your request. Please try again.';
            try {
                const result = await response.json();
                if (result && result.error) errorMessage = result.error;
            } catch (parseError) {}
            throw new Error(errorMessage);
        }

        feedback.textContent = isTraining
            ? 'Thank you. Your training registration has been submitted successfully.'
            : 'Thank you. Your message has been sent successfully.';
        feedback.classList.add('success');
        form.reset();
    } catch (error) {
        feedback.textContent = error.message || 'Unable to send your request. Please try again.';
        feedback.classList.add('error');
    } finally {
        button.disabled = false;
        button.innerHTML = isTraining ? 'Submit Registration' : 'Send Message';
    }
}

// Attach to forms
document.querySelectorAll('#contactForm, #quoteForm, #trainingForm').forEach(form => {
    if (form) form.addEventListener('submit', submitWarkfinForm);
});