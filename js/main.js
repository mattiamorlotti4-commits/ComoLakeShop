// TODO: sostituisci con l'indirizzo email reale del brand (o con l'endpoint Formspree quando sara' attivo)
const B2B_CONTACT_EMAIL = "info@lakecomoshop.com";

const translations = {
  it: {
    "nav.home": "Home",
    "nav.prodotti": "Prodotti",
    "nav.brand": "Il Brand",
    "nav.negozi": "Per i Negozi",
    "hero.sub": "Abbigliamento e souvenir ispirati al Lago di Como.",
    "hero.cta1": "Scopri la Collezione",
    "hero.cta2": "Sei un Negozio? &rarr;",
    "stats.s1": "Design Originali",
    "stats.s2": "Prodotti Disponibili",
    "stats.s3": "Print on Demand",
    "stats.s4": "Spedizione Globale",
    "products.eyebrow": "La Collezione",
    "products.title": "I Nostri <em>Design</em>",
    "products.sub": "Un design per ogni borgo del lago. Scegli tu su cosa stamparlo: maglietta, felpa, tazza, poster e molto altro.",
    "products.tags": "T-Shirt &middot; Felpa &middot; Tazza &middot; Adesivo &middot; Poster e altro",
    "products.buy": "Scegli il Prodotto su Redbubble &rarr;",
    "products.viewall": "Vedi tutto lo Shop su Redbubble &rarr;",
    "products.bellagio.desc": "La perla del lago, in stile vintage travel poster.",
    "products.como.desc": "Il panorama classico del lago, stile vintage-travel.",
    "products.lecco.desc": "Il porto di Lecco tra montagne e barche a vela.",
    "products.varenna.desc": "Giardini fioriti e scalinate sull'acqua a Villa Monastero.",
    "products.nesso.desc": "Il borgo nascosto con ponte in pietra e cascata.",
    "story.quote": "&ldquo;Il lago non &egrave; solo acqua. &Egrave; una luce che non esiste altrove.&rdquo;",
    "story.eyebrow": "Il Brand",
    "story.title": "Nati sulle <em>rive del lago</em>",
    "story.body1": "LakeComoShop nasce dall'amore per uno dei paesaggi pi&ugrave; belli d'Italia: la luce del mattino, le ville storiche, i borghi sulle terrazze del lago.",
    "story.body2": "Grazie al Print on Demand, ogni prodotto viene realizzato su ordine e spedito ovunque nel mondo.",
    "story.v1.strong": "Design originale",
    "story.v1.span": "Illustrazioni esclusive, non vendute altrove",
    "story.v2.strong": "Qualit&agrave; certificata",
    "story.v2.span": "Materiali selezionati, stampa ad alta risoluzione",
    "story.v3.strong": "Spedizione globale",
    "story.v3.span": "Consegniamo in tutto il mondo",
    "story.cta": "Esplora la Collezione",
    "negozi.eyebrow": "Partnership Commerciale",
    "negozi.title": "Sei un <em>negozio locale?</em>",
    "negozi.sub": "Stiamo crescendo borgo dopo borgo, di persona. Lasciaci qui i tuoi contatti: ti risponderemo noi direttamente.",
    "negozi.b1.strong": "Zero stock da gestire",
    "negozi.b1.span": "Print on Demand: si stampa solo all'ordine, niente magazzino.",
    "negozi.b2.strong": "Design esclusivo",
    "negozi.b2.span": "I tuoi clienti non troveranno questi design altrove.",
    "negozi.b3.strong": "Personalizzazione",
    "negozi.b3.span": "Varianti con il nome del tuo borgo o negozio.",
    "negozi.b4.strong": "Un contatto diretto",
    "negozi.b4.span": "Nessun portale automatico: parliamo di persona.",
    "negozi.form.title": "Parliamoci",
    "negozi.form.sub": "Lascia i tuoi contatti: ti risponderemo entro qualche giorno.",
    "negozi.form.name": "Nome e cognome",
    "negozi.form.email": "Email",
    "negozi.form.shop": "Nome del negozio",
    "negozi.form.interest": "Tipo di interesse",
    "negozi.form.select": "Seleziona...",
    "negozi.form.opt1": "Rivendita prodotti",
    "negozi.form.opt2": "Prodotti personalizzati",
    "negozi.form.opt3": "Entrambi",
    "negozi.form.opt4": "Solo informazioni",
    "negozi.form.msg": "Messaggio (opzionale)",
    "negozi.form.submit": "Invia Richiesta",
    "footer.desc": "Abbigliamento e souvenir ispirati al Lago di Como. Print on demand, spedizione nel mondo.",
    "footer.site": "Il Sito",
    "footer.shop": "Shop",
    "footer.copy": "&copy;",
    "toast.form": "Si sta aprendo il tuo client email per inviarci la richiesta."
  },
  en: {
    "nav.home": "Home",
    "nav.prodotti": "Shop",
    "nav.brand": "The Brand",
    "nav.negozi": "For Shops",
    "hero.sub": "Clothing and souvenirs inspired by Lake Como.",
    "hero.cta1": "Discover the Collection",
    "hero.cta2": "Own a Shop? &rarr;",
    "stats.s1": "Original Designs",
    "stats.s2": "Products Available",
    "stats.s3": "Print on Demand",
    "stats.s4": "Worldwide Shipping",
    "products.eyebrow": "The Collection",
    "products.title": "Our <em>Designs</em>",
    "products.sub": "One design for every village on the lake. Pick what to print it on: t-shirt, hoodie, mug, poster and more.",
    "products.tags": "T-Shirt &middot; Hoodie &middot; Mug &middot; Sticker &middot; Poster & more",
    "products.buy": "Choose Your Product on Redbubble &rarr;",
    "products.viewall": "See the Full Shop on Redbubble &rarr;",
    "products.bellagio.desc": "The pearl of the lake, in vintage travel-poster style.",
    "products.como.desc": "The classic view of the lake, vintage-travel style.",
    "products.lecco.desc": "Lecco's harbour between mountains and sailboats.",
    "products.varenna.desc": "Flowered gardens and stairways over the water at Villa Monastero.",
    "products.nesso.desc": "The hidden village with its stone bridge and waterfall.",
    "story.quote": "&ldquo;The lake isn't just water. It's a light that exists nowhere else.&rdquo;",
    "story.eyebrow": "The Brand",
    "story.title": "Born on the <em>shores of the lake</em>",
    "story.body1": "LakeComoShop was born from a love for one of Italy's most beautiful landscapes: the morning light, the historic villas, the villages on the lake's terraces.",
    "story.body2": "Thanks to Print on Demand, every product is made to order and shipped anywhere in the world.",
    "story.v1.strong": "Original design",
    "story.v1.span": "Exclusive illustrations, sold nowhere else",
    "story.v2.strong": "Certified quality",
    "story.v2.span": "Selected materials, high-resolution printing",
    "story.v3.strong": "Worldwide shipping",
    "story.v3.span": "We deliver anywhere in the world",
    "story.cta": "Explore the Collection",
    "negozi.eyebrow": "Business Partnership",
    "negozi.title": "Own a <em>local shop?</em>",
    "negozi.sub": "We're growing village by village, in person. Leave us your details here: we'll get back to you directly.",
    "negozi.b1.strong": "Zero stock to manage",
    "negozi.b1.span": "Print on Demand: printed only when ordered, no warehouse.",
    "negozi.b2.strong": "Exclusive design",
    "negozi.b2.span": "Your customers won't find these designs anywhere else.",
    "negozi.b3.strong": "Customization",
    "negozi.b3.span": "Variants with your village or shop name.",
    "negozi.b4.strong": "A direct contact",
    "negozi.b4.span": "No automated portal: we talk in person.",
    "negozi.form.title": "Let's talk",
    "negozi.form.sub": "Leave your details: we'll reply within a few days.",
    "negozi.form.name": "Full name",
    "negozi.form.email": "Email",
    "negozi.form.shop": "Shop name",
    "negozi.form.interest": "Type of interest",
    "negozi.form.select": "Select...",
    "negozi.form.opt1": "Product resale",
    "negozi.form.opt2": "Custom products",
    "negozi.form.opt3": "Both",
    "negozi.form.opt4": "Just information",
    "negozi.form.msg": "Message (optional)",
    "negozi.form.submit": "Send Request",
    "footer.desc": "Clothing and souvenirs inspired by Lake Como. Print on demand, shipped worldwide.",
    "footer.site": "Site",
    "footer.shop": "Shop",
    "footer.copy": "&copy;",
    "toast.form": "Your email client is opening to send us the request."
  }
};

let currentLang = localStorage.getItem("lcs_lang") || "it";

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("lcs_lang", lang);
  document.documentElement.lang = lang;
  const dict = translations[lang];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });
  document.querySelectorAll(".lang-opt").forEach((el) => {
    el.classList.toggle("active", el.getAttribute("data-lang") === lang);
  });
}

document.getElementById("langSwitch").addEventListener("click", () => {
  applyLanguage(currentLang === "it" ? "en" : "it");
});

applyLanguage(currentLang);

document.getElementById("year").textContent = new Date().getFullYear();

const nav = document.getElementById("mainNav");
window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 40);
});

const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
});
mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => mobileMenu.classList.remove("open"));
});

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 4000);
}

const b2bForm = document.getElementById("b2bForm");
b2bForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const nome = document.getElementById("f-name").value;
  const email = document.getElementById("f-email").value;
  const negozio = document.getElementById("f-shop").value;
  const interesse = document.getElementById("f-interest").value;
  const messaggio = document.getElementById("f-msg").value;

  const subject = `Richiesta partnership negozio - ${negozio || nome}`;
  const body =
    `Nome: ${nome}\n` +
    `Email: ${email}\n` +
    `Negozio: ${negozio}\n` +
    `Interesse: ${interesse}\n` +
    `Messaggio: ${messaggio}`;

  const mailtoUrl = `mailto:${B2B_CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailtoUrl;

  showToast(translations[currentLang]["toast.form"]);
});
