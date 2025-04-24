document.addEventListener("DOMContentLoaded", function () {
  // Language dropdown
  const languageButton = document.querySelector(".language-button");
  const dropdownContent = document.querySelector(".dropdown-content");
  languageButton.addEventListener("click", function (e) {
    dropdownContent.style.display =
      dropdownContent.style.display === "block" ? "none" : "block";
    e.stopPropagation();
  });
  // Cierra el dropdown al hacer clic fuera
  document.addEventListener("click", function () {
    dropdownContent.style.display = "none";
  });
  // Pricing toggle
  const radios = document.querySelectorAll('input[name="billing"]');
  radios.forEach(radio => {
    radio.addEventListener('change', function() {
      if (this.value === "monthly") {
        document.querySelectorAll('.monthly').forEach(el => el.style.display = "inline");
        document.querySelectorAll('.annually').forEach(el => el.style.display = "none");
      } else {
        document.querySelectorAll('.monthly').forEach(el => el.style.display = "none");
        document.querySelectorAll('.annually').forEach(el => el.style.display = "inline");
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  // Feedback modal elements
  const feedbackModal = document.getElementById('feedbackModal');
  const feedbackLink = document.querySelector('.feedback');
  const feedbackClose = feedbackModal.querySelector('.close');
  const sendFeedbackBtn = document.getElementById('sendFeedback');

  // Contact modal elements
  const contactModal = document.getElementById('contactModal');
  const contactLink = document.querySelector('.contactLink');
  const contactClose = contactModal.querySelector('.close');
  const sendContactBtn = document.getElementById('sendContact');

  // Open Feedback Modal
  feedbackLink.addEventListener('click', function (e) {
    e.preventDefault();
    feedbackModal.style.display = 'block';
  });

  // Open Contact Modal
  contactLink.addEventListener('click', function (e) {
    e.preventDefault();
    contactModal.style.display = 'block';
  });

  // Close Feedback Modal
  feedbackClose.addEventListener('click', function () {
    feedbackModal.style.display = 'none';
  });

  // Close Contact Modal
  contactClose.addEventListener('click', function () {
    contactModal.style.display = 'none';
  });

  // Close modals if clicking outside the modal-content
  window.addEventListener('click', function (e) {
    if (e.target === feedbackModal) {
      feedbackModal.style.display = 'none';
    }
    if (e.target === contactModal) {
      contactModal.style.display = 'none';
    }
  });

  // Send Feedback: Opens default mail client with mailto to jose@customate.ai
  sendFeedbackBtn.addEventListener('click', function () {
    const feedbackText = document.getElementById('feedbackInput').value.trim();
    const mailtoLink = `mailto:jose@customate.ai?subject=${encodeURIComponent(
      'Feedback for Customate'
    )}&body=${encodeURIComponent(feedbackText)}`;
    window.location.href = mailtoLink;
    feedbackModal.style.display = 'none';
  });

  // Send Contact: Opens default mail client with mailto to admin@customate.ai
  sendContactBtn.addEventListener('click', function () {
    const contactText = document.getElementById('contactInput').value.trim();
    const mailtoLink = `mailto:admin@customate.ai?subject=${encodeURIComponent(
      'Contact Us'
    )}&body=${encodeURIComponent(contactText)}`;
    window.location.href = mailtoLink;
    contactModal.style.display = 'none';
  });
});
