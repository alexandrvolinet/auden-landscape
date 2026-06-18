export function scrollToElement(elementId: string) {
  const el = document.getElementById(elementId);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
