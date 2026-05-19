const translations = {
  en: {
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.contact": "Contact",
    "meta.home.description": "UMA. Downtempo DJ.",
    "meta.services.description": "UMA. Services.",
    "meta.contact.description": "UMA. Contact.",
    "home.kicker": "Downtempo DJ",
    "home.center": "Sets for clubs, festivals, and ritual spaces.",
    "home.low_left": "Europe open",
    "home.low_right": "Booking available",
    "home.listen": "Listen",
    "home.places": "Selected places",
    "home.country_peru": "Peru",
    "home.country_germany": "Germany",
    "home.country_switzerland": "Switzerland",
    "services.title": "WORK",
    "services.item1": "DJ sets",
    "services.copy1": "Immersive sets for clubs, festivals, and late-night rooms.",
    "services.copy2": "70s, 80s, and 90s selections for nights that need instant energy.",
    "services.item3": "Music for brands",
    "services.copy3": "Music direction and curation for campaigns, launches, and cultural events.",
    "services.item4": "Custom music",
    "services.copy4": "Original pieces for audiovisual, spatial, and special commission work.",
    "contact.kicker": "Booking",
    "contact.title": "CONTACT",
    "contact.regions": "Peru / South America / Europe",
    "common.email": "Email"
  },
  es: {
    "nav.home": "Inicio",
    "nav.services": "Servicios",
    "nav.contact": "Contacto",
    "meta.home.description": "UMA. DJ downtempo.",
    "meta.services.description": "UMA. Servicios.",
    "meta.contact.description": "UMA. Contacto.",
    "home.kicker": "DJ Downtempo",
    "home.center": "Sets para clubs, festivales y espacios rituales.",
    "home.low_left": "Europa abierta",
    "home.low_right": "Booking disponible",
    "home.listen": "Escucha",
    "home.places": "Lugares seleccionados",
    "home.country_peru": "Perú",
    "home.country_germany": "Alemania",
    "home.country_switzerland": "Suiza",
    "services.title": "SERVICIOS",
    "services.item1": "Sets DJ",
    "services.copy1": "Sets inmersivos para clubs, festivales y espacios nocturnos.",
    "services.copy2": "Selecciones de los 70, 80 y 90 para noches que necesitan energía inmediata.",
    "services.item3": "Música para marcas",
    "services.copy3": "Dirección musical y curaduría para campañas, lanzamientos y eventos culturales.",
    "services.item4": "Música por encargo",
    "services.copy4": "Piezas originales para audiovisual, espacios y comisiones especiales.",
    "contact.kicker": "Booking",
    "contact.title": "CONTACTO",
    "contact.regions": "Perú / Sudamérica / Europa",
    "common.email": "Correo"
  }
};

const storageKey = "uma-version-b-lang";

function setLanguage(lang) {
  const dict = translations[lang] || translations.en;

  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    const value = dict[key];

    if (!value) {
      return;
    }

    if (node.dataset.i18nAttr) {
      node.setAttribute(node.dataset.i18nAttr, value);
      return;
    }

    node.textContent = value;
  });

  document.querySelectorAll(".lang-btn").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === lang);
  });

  try {
    localStorage.setItem(storageKey, lang);
  } catch (_error) {
    // Ignore storage failures in restricted browsers.
  }
}

function getInitialLanguage() {
  try {
    const saved = localStorage.getItem(storageKey);

    if (saved && translations[saved]) {
      return saved;
    }
  } catch (_error) {
    // Ignore storage failures in restricted browsers.
  }

  return "en";
}

document.addEventListener("DOMContentLoaded", () => {
  const initialLang = getInitialLanguage();
  setLanguage(initialLang);

  document.querySelectorAll(".lang-btn").forEach((button) => {
    button.addEventListener("click", () => {
      setLanguage(button.dataset.lang || "en");
    });
  });
});
