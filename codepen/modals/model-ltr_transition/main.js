document.addEventListener("DOMContentLoaded", () => {
  const openButton = document.getElementById("openModalButton");
  const modal = document.getElementById("modal");
  const overlay = document.getElementById("modalOverlay");

  const focusableElementSelector =
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

  function confineFocus(container) {
    const focusableElements = container.querySelectorAll(
      focusableElementSelector
    );
    const firstFocusElement = focusableElements[0];
    const lastFocusElement = focusableElements[focusableElements.length - 1];

    container.addEventListener("keydown", (e) => {
      if (e.key === "Tab") {
        if (focusableElements.length === 0) {
          e.preventDefault();
          return;
        }
        if (e.shiftKey && document.activeElement === firstFocusElement) {
          e.preventDefault();
          lastFocusElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastFocusElement) {
          e.preventDefault();
          firstFocusElement.focus();
        }
      } else if (e.key === "Escape") {
        closeModal();
      }
    });
  }

  function openModal() {
    document.body.classList.add("open-modal");
    modal.removeAttribute("hidden");
    overlay.removeAttribute("hidden");
    openButton.setAttribute("aria-expanded", "true");
    modal.focus();
    confineFocus(modal);
  }

  function closeModal() {
    document.body.classList.remove("open-modal");
    modal.setAttribute("hidden", "");
    overlay.setAttribute("hidden", "");
    openButton.setAttribute("aria-expanded", "false");
    openButton.focus();
  }

  openButton.addEventListener("click", openModal);
  overlay.addEventListener("click", closeModal);

  const translations = {
    en: {
      title: "Accessible Modal",
      openModalButton: "Open Modal",
      modalTitle: "Modal Heading",
      modalDescription:
        "Modal Description: Short paragraph about the content related to the modal.",
    },
  };

  function applyTranslations(lang = "en") {
    const t = translations[lang];
    document.querySelectorAll("[data-i18n]").forEach((e) => {
      const key = e.dataset.i18n;
      if (t[key]) e.textContent = t[key];
    });
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }

  applyTranslations("en");
});
