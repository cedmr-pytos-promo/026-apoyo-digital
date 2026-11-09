const nav = document.querySelector("#nav");
const mobile = document.querySelector("#mobile");
const pages = [...document.querySelectorAll(".page")];

function go(id, anchor) {
    const page = document.getElementById(id);

    if (!page || !page.classList.contains("page")) {
        return;
    }

    pages.forEach((item) => {
        item.classList.toggle("active", item === page);
    });

    document.querySelectorAll(".nav[data-go]").forEach((button) => {
        button.classList.toggle("active", button.dataset.go === id);
    });

    document.querySelectorAll(".drop").forEach((dropdown) => {
        dropdown.classList.remove("open");
    });

    nav.classList.remove("open");
    mobile.setAttribute("aria-expanded", "false");

    window.scrollTo({ top: 0, behavior: "smooth" });

    if (anchor) {
        window.setTimeout(() => {
            const target = page.querySelector(`#${CSS.escape(anchor)}`);

            if (target) {
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        }, 100);
    }
}

/* Navegación principal y botones que cambian de sección. */
document.querySelectorAll("[data-go]").forEach((control) => {
    control.addEventListener("click", (event) => {
        if (control.matches(".drop > .nav") && nav.classList.contains("open")) {
            return;
        }

        if (control.tagName === "A") {
            event.preventDefault();
        }

        go(control.dataset.go, control.dataset.anchor);
    });
});

/* Apertura de los menús desplegables. */
document.querySelectorAll(".drop > .nav").forEach((button) => {
    button.addEventListener("click", () => {
        const dropdown = button.parentElement;
        const shouldOpen = !dropdown.classList.contains("open");

        document.querySelectorAll(".drop").forEach((item) => {
            item.classList.remove("open");
        });

        dropdown.classList.toggle("open", shouldOpen);
    });
});

/* Pestañas internas de cada sección. */
document.querySelectorAll(".tabs button").forEach((button) => {
    button.addEventListener("click", () => {
        const page = button.closest(".page");

        page.querySelectorAll(".tabs button").forEach((tab) => {
            tab.classList.toggle("selected", tab === button);
        });

        const target = page.querySelector(`#${CSS.escape(button.dataset.anchor)}`);

        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});

/* Menú para pantallas pequeñas. */
mobile.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    mobile.setAttribute("aria-expanded", String(isOpen));
});

/* Los enlaces internos también deben cambiar de página cuando corresponda. */
document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach((link) => {
    link.addEventListener("click", (event) => {
        const targetId = decodeURIComponent(link.getAttribute("href").slice(1));
        const target = document.getElementById(targetId);

        if (!target) {
            return;
        }

        event.preventDefault();

        if (target.classList.contains("page")) {
            go(target.id);
            return;
        }

        const parentPage = target.closest(".page");

        if (parentPage) {
            go(parentPage.id, target.id);
            return;
        }

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});

/* Cierra los desplegables al hacer clic fuera de ellos. */
document.addEventListener("click", (event) => {
    if (!event.target.closest(".drop")) {
        document.querySelectorAll(".drop").forEach((dropdown) => {
            dropdown.classList.remove("open");
        });
    }
});

/* Elementos opcionales del pie de página. */
const topButton = document.querySelector("#top");

if (topButton) {
    topButton.addEventListener("click", () => go("inicio"));
}

const year = document.querySelector("#year");

if (year) {
    year.textContent = new Date().getFullYear();
}
