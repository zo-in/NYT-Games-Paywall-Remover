const selectorsToRemove = ["#gateway-content", ".vi-gateway-container"];

function removeElements() {
  selectorsToRemove.forEach((selector) => {
    document.querySelectorAll(selector).forEach((el) => {
      el.remove();
    });
  });
}

// Initial cleanup
removeElements();

// Set up observer to handle dynamic content changes
const observer = new MutationObserver(() => {
  removeElements();
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
});
