document.addEventListener("DOMContentLoaded", () => {
  //projectScope
  const scope = document.querySelector("#projectScope");
  if (!scope) return;

  const buttons = scope.querySelectorAll("[data-filter]");
  const cards = scope.querySelectorAll("[data-category]");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;

      cards.forEach(card => {
        if (filter === "all" || card.dataset.category === filter) {
          card.classList.remove("d-none");
        } else {
          card.classList.add("d-none");
        }
      });
    });
  });
});
