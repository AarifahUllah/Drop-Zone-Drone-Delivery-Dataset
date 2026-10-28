// Shared site settings and behavior.

// EDIT: paste links here when they exist. Empty links show as "coming soon".
const LINKS = {
  upload: "https://www.dropbox.com/request/69qywdr46vbl6ddfehfx",
  dataset: "https://huggingface.co/datasets/aarifahullah/OpenDV",
  github: "https://github.com/AarifahUllah/OpenDV",
};

// Fill in [data-link] elements, or mark them "coming soon".
document.querySelectorAll("[data-link]").forEach(a => {
  const url = LINKS[a.dataset.link];
  if (url) { a.href = url; return; }
  a.removeAttribute("href");
  a.classList.add("soon");
  a.setAttribute("aria-disabled", "true");
  const label = a.querySelector(".label") || a;
  if (!a.classList.contains("pill")) label.insertAdjacentText("beforeend", " (coming soon)");
  else label.textContent += " (soon)";
});

// Light/dark toggle. Starts from the system setting; the choice is remembered.
const root = document.documentElement, toggle = document.getElementById("theme-toggle");
const current = () => root.dataset.theme || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
function labelToggle() {
  const next = current() === "dark" ? "light" : "dark";
  toggle.textContent = next === "dark" ? "☾ Dark" : "☀ Light";
  toggle.setAttribute("aria-label", `Switch to ${next} mode`);
}
toggle.addEventListener("click", () => {
  root.dataset.theme = current() === "dark" ? "light" : "dark";
  try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
  labelToggle();
});
matchMedia("(prefers-color-scheme: dark)").addEventListener("change", labelToggle);
labelToggle();

// Missing images/videos: boxes marked data-soon show "coming soon"; others are hidden.
// If any image in a [data-media-group] is missing, the whole group's images are hidden so cards stay even.
document.querySelectorAll(".media").forEach(box => {
  const el = box.querySelector("img, video source");
  if (!el) return;
  const miss = () => {
    if (box.hasAttribute("data-soon")) return box.classList.add("soon");
    const group = box.closest("[data-media-group]");
    (group ? group.querySelectorAll(".media") : [box]).forEach(b => {
      b.hidden = true;
      b.parentElement.classList.remove("has-img");
    });
  };
  el.addEventListener("error", miss);
  if (el.tagName === "IMG" && el.complete && !el.naturalWidth) miss();
});
// Videos mark themselves with an inline onerror on <source>, which can't miss an early failure.
