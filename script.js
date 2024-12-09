const translations = {
  en: {
    titleOne: "Welcome to ",
    titleTwo: "English Classes",
    titleThree: "With Joan",
    description:
      "Learn English with a professional teacher. Improve your skills in speaking, writing, and comprehension.",
    button: "Get started",
    sticker1: "Online and presential classes",
    methodCardTitle1: "I Adapt!",
    methodCardPara1:
      "Through our initial lessons together, I create personalized and unique lessons.",
    methodCardTitle2: "For Everyone!",
    methodCardPara2:
      "Beginner, intermediate, or advanced, I have everything you need.",

    methodTitle1: "Why",
    methodTitle2: "Choose My",
    methodTitle3: "Method",
    methodDescription:
      "We use a unique approach to teaching English that focuses on practical usage and real-world scenarios.",
    contactTitle: "Contact",
    contactDescription: "Get in touch with us for more information.",
    pricingTitle: "Pricing",
    pricingDescription: "Check out our competitive pricing plans.",
    header: {
      about: "About",
      /*       pricing: "Pricing", */
      testimonial: "Testimonial",
      contact: "Contact",
    },
    buttonheader: "Get started",
    testimonials: [
      {
        text: "These classes have greatly improved my English skills. Highly recommended!",
        author: "John Doe",
        authorImage: "/assets/john.jpg",
      },
      {
        text: "I love the interactive sessions and the practical approach to learning.",
        author: "Jane Smith",
        authorImage: "/assets/jane.jpg",
      },
    ],
    pricing: {},
    footer: {
      text: "© 2021 English Classes. All rights reserved.",
    },
  },
  fr: {
    titleOne: "Bienvenue aux ",
    titleTwo: "Cours d'anglais",
    titleThree: "Avec Joan",
    description:
      "Apprenez l'anglais avec un professeur professionnel. Améliorez vos compétences en expression orale, écrite et en compréhension.",
    button: "Se lancer",
    sticker1: "Cours en ligne et en présentiel",
    methodCardTitle1: "Je m'adapte!",
    methodCardPara1:
      "Grâce aux premiers cours ensemble, j'apprend à vous connaitre et je construis des cours personnalisés et uniques.",
    methodCardTitle2: "Pour tous le monde!",
    methodCardPara2:
      "Débutant, intermédiaire ou avancé, j'ai tout ce qu'il faut pour vous.",
    methodTitle1: "Pourquoi",
    methodTitle2: "Choisir Ma",
    methodTitle3: "Méthode",
    methodDescription:
      "Nous utilisons une approche unique pour enseigner l'anglais, axée sur l'utilisation pratique et les scénarios réels.",
    contactTitle: "Contact",
    contactDescription: "Contactez-nous pour plus d'informations.",
    pricingTitle: "Tarification",
    pricingDescription: "Découvrez nos plans tarifaires compétitifs.",
    header: {
      about: "À propos",
      /*       pricing: "Tarification", */
      testimonial: "Témoignage",
      contact: "Contact",
    },
    buttonheader: "Commencer",
    testimonials: [
      {
        text: "Ces cours ont grandement amélioré mes compétences en anglais. Hautement recommandé!",
        author: "Jean Dupont",
        authorImage: "/assets/jean.jpg",
      },
      {
        text: "J'adore les sessions interactives et l'approche pratique de l'apprentissage.",
        author: "Marie Curie",
        authorImage: "/assets/marie.jpg",
      },
    ],
    pricing: {},
    footer: {
      text: "© 2021 Cours d'anglais. Tous droits réservés.",
    },
  },
};

function setLanguageContent() {
  const userLang = navigator.language.startsWith("fr") ? "fr" : "en";
  const lang = translations[userLang];

  // Update header
  const navUl = document.querySelector("header nav ul");
  navUl.innerHTML = ""; // Clear existing items

  Object.keys(lang.header).forEach((key) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = lang.header[key];
    a.href = `#${key}`;
    li.appendChild(a);
    navUl.appendChild(li);
  });

  document.querySelector("header button").textContent = lang.buttonheader;
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

  //! METHOD section
  // CARD
  document.querySelector(
    "#methode .container-cards .card-one .txt h3"
  ).textContent = lang.methodCardTitle1;
  document.querySelector(
    "#methode .container-cards .card-one .txt p"
  ).textContent = lang.methodCardPara1;
  document.querySelector(
    "#methode .container-cards .card-two .txt h3"
  ).textContent = lang.methodCardTitle2;
  document.querySelector(
    "#methode .container-cards .card-two .txt p"
  ).textContent = lang.methodCardPara2;
  // TITLE
  document.querySelector("#methode h2 .line-1 .txt").textContent =
    lang.methodTitle1;
  document.querySelector("#methode h2 .line-2 .txt").textContent =
    lang.methodTitle2;
  document.querySelector("#methode h2 .line-3 .txt").textContent =
    lang.methodTitle3;

  // Update testimonial section
  const testimonialSection = document.querySelector("#testimonial");
  testimonialSection.innerHTML = ""; // Clear existing testimonials
  lang.testimonials.forEach((testimonial, index) => {
    const testimonialCard = document.createElement("div");
    testimonialCard.className = `card-${index + 1}`;
    testimonialCard.innerHTML = `
     <div class="author">
          <img src="${testimonial.authorImage}" alt="${testimonial.author}">
          <p>${testimonial.author}</p>
        </div>
        <p>${testimonial.text}</p>
       
      `;
    testimonialSection.appendChild(testimonialCard);
  });
  /*
  //contact section
  document.querySelector("#contact h2").textContent = lang.contactTitle;
  document.querySelector("#contact p").textContent = lang.contactDescription;

  //  pricing section

  document.querySelector("#pricing h2").textContent = lang.pricingTitle;
  document.querySelector("#pricing p").textContent = lang.pricingDescription;
 */
  // footer
  document.querySelector("footer p").textContent = lang.footer.text;
  // Update footer
  const footerNav = document.querySelector("footer nav ul");
  Object.keys(lang.header).forEach((key, index) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    const logo = document.createElement("img");
    logo.src = "/assets/arrow-haut-droite-50.png";
    const numb = document.createElement("span");
    numb.setAttribute("class", "numb");
    numb.textContent = "0" + [index + 1];
    a.appendChild(numb);
    let aContent = document.createElement("span");
    aContent.setAttribute("class", "aContent");
    aContent.textContent = lang.header[key];
    a.appendChild(aContent);
    a.href = `#${key}`;

    li.appendChild(a);
    li.appendChild(logo);
    footerNav.appendChild(li);
  });
}

setLanguageContent();
