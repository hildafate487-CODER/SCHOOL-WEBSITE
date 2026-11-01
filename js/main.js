document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
      toggle.textContent = isOpen ? "×" : "☰";
    });
  }

  document.querySelectorAll(".year").forEach(el => el.textContent = new Date().getFullYear());

  const form = document.querySelector("#admission-form");
  const feedback = document.querySelector("#form-feedback");
  if (form && feedback) {
    form.addEventListener("submit", event => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const data = new FormData(form);
      const guardian = data.get("guardian");
      const learner = data.get("learner");
      const className = data.get("class");
      feedback.textContent = `Thank you, ${guardian}. Your enquiry for ${learner} (${className}) is prepared. This demo does not send or store the form; please call or email the school to submit it.`;
      feedback.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
  }
});
