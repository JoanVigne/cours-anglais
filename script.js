const translations = {
  en: {
    titleOne: "Welcome to ",
    titleTwo: "English Classes",
    titleThree: "With Joan",
    description:
      "Learn English with a professional teacher. Improve your skills in speaking, writing, and comprehension.",
    button: "Learn More",
    sticker1: "Online and presential classes",
    methodTitle1: "Why",
    methodTitle2: "Choose My",
    methodTitle3: "Method",
    methodDescription:
      "We use a unique approach to teaching English that focuses on practical usage and real-world scenarios.",
    testimonialTitle: "Testimonial",
    contactTitle: "Contact",
    contactDescription: "Get in touch with us for more information.",
    pricingTitle: "Pricing",
    pricingDescription: "Check out our competitive pricing plans.",
    header: {
      about: "About",
      pricing: "Pricing",
      testimonial: "Testimonial",
      contact: "Contact",
    },
    testimonials: [
      {
        text: "These classes have greatly improved my English skills. Highly recommended!",
        author: "John Doe",
        authorImage: "john.jpg",
      },
      {
        text: "I love the interactive sessions and the practical approach to learning.",
        author: "Jane Smith",
        authorImage: "jane.jpg",
      },
    ],
  },
  fr: {
    titleOne: "Bienvenue aux ",
    titleTwo: "Cours d'anglais",
    titleThree: "Avec Joan",
    description:
      "Apprenez l'anglais avec un professeur professionnel. Améliorez vos compétences en expression orale, écrite et en compréhension.",
    button: "En savoir plus",
    sticker1: "Cours en ligne et en présentiel",
    methodTitle1: "Pourquoi",
    methodTitle2: "Choisir Ma",
    methodTitle3: "Méthode",
    methodDescription:
      "Nous utilisons une approche unique pour enseigner l'anglais, axée sur l'utilisation pratique et les scénarios réels.",
    testimonialTitle: "Témoignage",
    contactTitle: "Contact",
    contactDescription: "Contactez-nous pour plus d'informations.",
    pricingTitle: "Tarification",
    pricingDescription: "Découvrez nos plans tarifaires compétitifs.",
    header: {
      about: "À propos",
      pricing: "Tarification",
      testimonial: "Témoignage",
      contact: "Contact",
    },
    testimonials: [
      {
        text: "Ces cours ont grandement amélioré mes compétences en anglais. Hautement recommandé!",
        author: "Jean Dupont",
        authorImage: "jean.jpg",
      },
      {
        text: "J'adore les sessions interactives et l'approche pratique de l'apprentissage.",
        author: "Marie Curie",
        authorImage: "marie.jpg",
      },
    ],
  },
};

function setLanguageContent() {
  const userLang = navigator.language.startsWith("fr") ? "fr" : "en";
  const lang = translations[userLang];

  // Update header
  document.querySelector("nav ul li:nth-child(1) a").textContent =
    lang.header.about;
  document.querySelector("nav ul li:nth-child(2) a").textContent =
    lang.header.pricing;
  document.querySelector("nav ul li:nth-child(3) a").textContent =
    lang.header.testimonial;
  document.querySelector("nav ul li:nth-child(4) a").textContent =
    lang.header.contact;

  // Update banner
  document.querySelector("#banner .text h1 .line-1 .txt").textContent =
    lang.titleOne;
  document.querySelector("#banner .text h1 .line-2 .txt").textContent =
    lang.titleTwo;
  document.querySelector("#banner .text h1 .line-3 .txt").textContent =
    lang.titleThree;
  document.querySelector("#banner .text p").textContent = lang.description;
  document.querySelector("#banner .text button").textContent = lang.button;
  document.querySelector("#banner .sticker1").textContent = lang.sticker1;

  // Update method section
  document.querySelector("#methode h2 .line-1 .txt").textContent =
    lang.methodTitle1;
  document.querySelector("#methode h2 .line-2 .txt").textContent =
    lang.methodTitle2;
  document.querySelector("#methode h2 .line-3 .txt").textContent =
    lang.methodTitle3;

  // Update testimonial section
  document.querySelector("#testimonial h2").textContent = lang.testimonialTitle;
  const testimonialSection = document.querySelector("#testimonial");
  testimonialSection.innerHTML = ""; // Clear existing testimonials
  lang.testimonials.forEach((testimonial, index) => {
    const testimonialCard = document.createElement("div");
    testimonialCard.className = `card-${index + 1}`;
    testimonialCard.innerHTML = `
        <p>${testimonial.text}</p>
        <div class="author">
          <img src="${testimonial.authorImage}" alt="${testimonial.author}">
          <p>${testimonial.author}</p>
        </div>
      `;
    testimonialSection.appendChild(testimonialCard);
  });

  // Update contact section
  document.querySelector("#contact h2").textContent = lang.contactTitle;
  document.querySelector("#contact p").textContent = lang.contactDescription;

  // Update pricing section
  document.querySelector("#pricing h2").textContent = lang.pricingTitle;
  document.querySelector("#pricing p").textContent = lang.pricingDescription;
}

setLanguageContent();
