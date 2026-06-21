const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const id = link.getAttribute("href");
    if (!id || id === "#") return;

    const target = document.querySelector(id);
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

const bootLine = document.querySelector("[data-type]");

if (bootLine && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const text = bootLine.textContent.trim();
  bootLine.setAttribute("aria-label", text);
  bootLine.textContent = "";

  let index = 0;
  const cursor = document.createElement("span");
  cursor.className = "cursor";
  cursor.textContent = "_";
  bootLine.append(cursor);

  const type = () => {
    if (index < text.length) {
      cursor.before(text[index]);
      index += 1;
      window.setTimeout(type, 22);
    }
  };

  window.setTimeout(type, 240);
}
