function setLanguageContent() {
  userLang = navigator.language.startsWith("fr")
    ? "fr"
    : navigator.language.startsWith("pt")
    ? "pt"
    : navigator.language.startsWith("it")
    ? "it"
    : "en";
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
  document.querySelector("header .button").textContent = lang.buttonheader;

  // Update banner
  document.querySelector("#banner .text h1 .line-1 .txt").textContent =
    lang.titleOne;
  document.querySelector("#banner .text h1 .line-2 .txt").textContent =
    lang.titleTwo;
  document.querySelector("#banner .text h1 .line-3 .txt").textContent =
    lang.titleThree;
  document.querySelector("#banner .text p").textContent = lang.description;
  document.querySelector("#banner .text .button").textContent = lang.button;
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
  document.querySelector("footer .logo h2").textContent = lang.footer.title;
  document.querySelector("footer .logo p").textContent = lang.footer.text;
  document.querySelector("footer .logo small").textContent = lang.footer.droit;
  // nav
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
