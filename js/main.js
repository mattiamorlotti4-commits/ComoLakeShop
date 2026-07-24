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
    "products.view": "Guarda i Prodotti &rarr;",
    "products.viewall": "Vedi tutto lo Shop su Redbubble &rarr;",
    "modal.cat1.title": "Indossa il Lago &mdash; T-Shirt",
    "modal.tshirt.btn": "Acquista la T-Shirt &rarr;",
    "modal.cat2.title": "Il Lago in Casa Tua &mdash; Art Print",
    "modal.poster.btn": "Acquista il Poster &rarr;",
    "modal.cat3.title": "Il Ricordo Perfetto &mdash; Accessori",
    "modal.acc.tote": "Tote Bag",
    "modal.acc.mug": "Mug",
    "modal.acc.case": "Cover",
    "modal.acc.sticker": "Sticker",
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
    "toast.form": "Si sta aprendo il tuo client email per inviarci la richiesta.",
    "reviews.eyebrow": "Testimonianze",
    "reviews.title": "Cosa dicono i <em>Clienti</em>",
    "reviews.r1.text": "&ldquo;Ho comprato una t-shirt come ricordo della mia visita a Como. Qualit&agrave; eccellente, design unico &mdash; non si trova da nessun'altra parte.&rdquo;",
    "reviews.r1.author": "&middot; Londra, UK",
    "reviews.r2.text": "&ldquo;Ho proposto i prodotti nel mio negozio a Bellagio e i turisti li adorano. Design esclusivo, logistica semplicissima.&rdquo;",
    "reviews.r2.author": "&middot; Negozio, Bellagio",
    "reviews.r3.text": "&ldquo;Il poster di Varenna nella mia sala &egrave; uno spettacolo. Stampa di qualit&agrave; elevatissima, arrivata in tempi perfetti.&rdquo;",
    "reviews.r3.author": "&middot; Monaco, DE",
    "reviews.r4.text": "&ldquo;La grafica della t-shirt &egrave; davvero originale e rappresenta bene il Lago di Como. La vestibilit&agrave; per&ograve; &egrave; risultata un po&rsquo; pi&ugrave; piccola del previsto.&rdquo;",
    "reviews.r4.author": "&middot; Manchester, UK",
    "reviews.r5.text": "&ldquo;Ho acquistato una stampa di Bellagio come regalo ed &egrave; stata molto apprezzata. Colori bellissimi e confezione curata.&rdquo;",
    "reviews.r5.author": "&middot; Lione, FR",
    "reviews.r6.text": "&ldquo;Design elegante e diverso dai soliti souvenir turistici. La spedizione ha richiesto qualche giorno in pi&ugrave;, ma il prodotto &egrave; ottimo.&rdquo;",
    "reviews.r6.author": "&middot; Zurigo, CH",
    "reviews.r7.text": "&ldquo;Le cartoline illustrate hanno attirato subito l&rsquo;attenzione dei clienti del nostro concept store. Riordino semplice e assistenza disponibile.&rdquo;",
    "reviews.r7.author": "&middot; Como, IT",
    "reviews.r8.text": "&ldquo;La felpa &egrave; morbida, ben rifinita e conserva perfettamente i colori dopo il lavaggio. Avrei gradito qualche taglia in pi&ugrave;.&rdquo;",
    "reviews.r8.author": "&middot; Berlino, DE",
    "reviews.r9.text": "&ldquo;Finalmente un ricordo del Lago di Como che posso indossare anche tutti i giorni. La stampa &egrave; raffinata e il tessuto davvero piacevole.&rdquo;",
    "reviews.r9.author": "&middot; Bristol, UK",
    "reviews.r10.text": "&ldquo;Abbiamo inserito poster e t-shirt nel nostro hotel boutique e gli ospiti chiedono continuamente dove acquistarli. Una collaborazione eccellente.&rdquo;",
    "reviews.r10.author": "&middot; Menaggio, IT",
    "reviews.r11.text": "&ldquo;Il poster di Como ha trasformato un angolo del mio studio. La carta &egrave; spessa, i colori splendidi e l&rsquo;imballaggio impeccabile.&rdquo;",
    "reviews.r11.author": "&middot; Parigi, FR",
    "reviews.r12.text": "&ldquo;Ho comprato due t-shirt durante il viaggio: una per me e una da regalare. Sono diventate il souvenir preferito di tutta la vacanza.&rdquo;",
    "reviews.r12.author": "&middot; Dublino, IE",
    "reviews.r13.text": "&ldquo;Prodotti distintivi, qualit&agrave; costante e consegne puntuali anche nei periodi pi&ugrave; intensi. I turisti apprezzano soprattutto l&rsquo;autenticit&agrave; dei soggetti.&rdquo;",
    "reviews.r13.author": "&middot; Boutique Varenna, IT"
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
    "products.view": "View Products &rarr;",
    "products.viewall": "See the Full Shop on Redbubble &rarr;",
    "modal.cat1.title": "Wear the Lake &mdash; T-Shirt",
    "modal.tshirt.btn": "Buy the T-Shirt &rarr;",
    "modal.cat2.title": "The Lake at Home &mdash; Art Print",
    "modal.poster.btn": "Buy the Poster &rarr;",
    "modal.cat3.title": "The Perfect Souvenir &mdash; Accessories",
    "modal.acc.tote": "Tote Bag",
    "modal.acc.mug": "Mug",
    "modal.acc.case": "Phone Case",
    "modal.acc.sticker": "Sticker",
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
    "toast.form": "Your email client is opening to send us the request.",
    "reviews.eyebrow": "Testimonials",
    "reviews.title": "What Our <em>Customers</em> Say",
    "reviews.r1.text": "&ldquo;I bought a t-shirt as a souvenir of my visit to Como. Excellent quality, unique design &mdash; you won't find it anywhere else.&rdquo;",
    "reviews.r1.author": "&middot; London, UK",
    "reviews.r2.text": "&ldquo;I introduced the products in my shop in Bellagio and tourists love them. Exclusive design, super simple logistics.&rdquo;",
    "reviews.r2.author": "&middot; Shop owner, Bellagio",
    "reviews.r3.text": "&ldquo;The Varenna poster in my living room is stunning. Extremely high print quality, arrived right on time.&rdquo;",
    "reviews.r3.author": "&middot; Munich, DE",
    "reviews.r4.text": "&ldquo;The t-shirt design is really original and captures Lake Como well. The fit, though, ran a little smaller than expected.&rdquo;",
    "reviews.r4.author": "&middot; Manchester, UK",
    "reviews.r5.text": "&ldquo;I bought a Bellagio print as a gift and it was very well received. Beautiful colors and careful packaging.&rdquo;",
    "reviews.r5.author": "&middot; Lyon, FR",
    "reviews.r6.text": "&ldquo;Elegant design, different from the usual tourist souvenirs. Shipping took a few extra days, but the product is excellent.&rdquo;",
    "reviews.r6.author": "&middot; Zurich, CH",
    "reviews.r7.text": "&ldquo;The illustrated postcards immediately caught our concept store customers' attention. Easy reordering and helpful support.&rdquo;",
    "reviews.r7.author": "&middot; Como, IT",
    "reviews.r8.text": "&ldquo;The hoodie is soft, well finished, and keeps its colors perfectly after washing. I would have liked a few more size options.&rdquo;",
    "reviews.r8.author": "&middot; Berlin, DE",
    "reviews.r9.text": "&ldquo;Finally a Lake Como souvenir I can actually wear every day. The print is refined and the fabric genuinely pleasant.&rdquo;",
    "reviews.r9.author": "&middot; Bristol, UK",
    "reviews.r10.text": "&ldquo;We added posters and t-shirts to our boutique hotel and guests keep asking where to buy them. An excellent partnership.&rdquo;",
    "reviews.r10.author": "&middot; Menaggio, IT",
    "reviews.r11.text": "&ldquo;The Como poster transformed a corner of my studio. Thick paper, gorgeous colors, and impeccable packaging.&rdquo;",
    "reviews.r11.author": "&middot; Paris, FR",
    "reviews.r12.text": "&ldquo;I bought two t-shirts during the trip: one for me and one as a gift. They became the favorite souvenir of the whole holiday.&rdquo;",
    "reviews.r12.author": "&middot; Dublin, IE",
    "reviews.r13.text": "&ldquo;Distinctive products, consistent quality, and on-time deliveries even during the busiest periods. Tourists especially appreciate the authenticity of the subjects.&rdquo;",
    "reviews.r13.author": "&middot; Varenna Boutique, IT"
  }
};

const productData = {
  bellagio: {
    name: "Bellagio, Lake of Como",
    img: "images/products/bellagio.jpg",
    tshirtImg: "images/mockups/bellagio_tshirt.jpg",
    tshirt: "https://www.teepublic.com/t-shirt/81369930-bellagio-lake-of-como?store_id=4138214",
    poster: "https://www.redbubble.com/shop/ap/174738793"
  },
  como: {
    name: "Lake of Como",
    img: "images/products/como.jpg",
    tshirtImg: "images/mockups/como_tshirt.jpg",
    tshirt: "https://www.teepublic.com/t-shirt/81369570-lake-of-como?store_id=4138214",
    poster: "https://www.redbubble.com/shop/ap/174739066"
  },
  lecco: {
    name: "Lecco, Lake of Como",
    img: "images/products/lecco.jpg",
    tshirtImg: "images/mockups/lecco_tshirt.jpg",
    tshirt: "https://www.teepublic.com/t-shirt/81407424-lecco-lake-of-como?store_id=4138214",
    poster: "https://www.redbubble.com/shop/ap/174736023"
  },
  varenna: {
    name: "Varenna, Lake of Como",
    img: "images/products/varenna.jpg",
    tshirtImg: "images/mockups/varenna_tshirt.jpg",
    tshirt: "https://www.teepublic.com/t-shirt/81409320-varenna-lake-of-como?store_id=4138214",
    poster: "https://www.redbubble.com/shop/ap/174737831"
  },
  nesso: {
    name: "Nesso, Lake of Como",
    img: "images/products/nesso.jpg",
    tshirtImg: "images/mockups/nesso_tshirt.jpg",
    tshirt: "https://www.teepublic.com/t-shirt/81370238-nesso-lake-of-como?store_id=4138214",
    poster: "https://www.redbubble.com/shop/ap/174738379"
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

const productModal = document.getElementById("productModal");
const modalImg = document.getElementById("modalImg");
const modalDesignName = document.getElementById("modalDesignName");
const modalTshirt = document.getElementById("modalTshirt");
const modalPoster = document.getElementById("modalPoster");
const modalTshirtImg = document.getElementById("modalTshirtImg");

function openProductModal(designKey) {
  const data = productData[designKey];
  if (!data) return;
  modalImg.src = data.img;
  modalImg.alt = data.name;
  modalDesignName.textContent = data.name;
  modalTshirtImg.src = data.tshirtImg;
  modalTshirtImg.alt = data.name + " T-Shirt";
  modalTshirt.href = data.tshirt;
  modalPoster.href = data.poster;
  productModal.classList.add("open");
}

function closeProductModal() {
  productModal.classList.remove("open");
}

document.querySelectorAll(".product-btn[data-design]").forEach((btn) => {
  btn.addEventListener("click", () => openProductModal(btn.getAttribute("data-design")));
});

document.getElementById("modalClose").addEventListener("click", closeProductModal);

productModal.addEventListener("click", (e) => {
  if (e.target === productModal) closeProductModal();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && productModal.classList.contains("open")) closeProductModal();
});

const reviewsGrid = document.getElementById("reviewsGrid");
const reviewsPrev = document.getElementById("reviewsPrev");
const reviewsNext = document.getElementById("reviewsNext");

function scrollReviews(direction) {
  const card = reviewsGrid.querySelector(".review-card");
  const step = card ? card.getBoundingClientRect().width + 24 : 300;
  reviewsGrid.scrollBy({ left: direction * step, behavior: "smooth" });
}
reviewsPrev.addEventListener("click", () => scrollReviews(-1));
reviewsNext.addEventListener("click", () => scrollReviews(1));

let isDragging = false;
let dragStartX = 0;
let dragStartScroll = 0;

reviewsGrid.addEventListener("mousedown", (e) => {
  isDragging = true;
  reviewsGrid.classList.add("dragging");
  dragStartX = e.pageX;
  dragStartScroll = reviewsGrid.scrollLeft;
});
window.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  e.preventDefault();
  reviewsGrid.scrollLeft = dragStartScroll - (e.pageX - dragStartX);
});
window.addEventListener("mouseup", () => {
  isDragging = false;
  reviewsGrid.classList.remove("dragging");
});
