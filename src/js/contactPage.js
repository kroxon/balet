function initialContact() {
    const content = document.getElementById("content");
    content.innerHTML = '';
    const contactContent = document.createElement('div');
    const title = document.createElement("h1");
    title.textContent = "Witaj na stronie KONTAKTU";
    const description1 = document.createElement("p");
    const description2 = document.createElement("p");
    description1.textContent = "Adres: ul. Baletowa 1, 00-001 Warszawa \
    Telefon: 123 456 789 \
    Email: balet.rzeszow@gmail.com \
    Instagram: @balet.rzeszow \
    Facebook: Balet Rzeszów";
    description2.textContent = "Zapraszam do kontaktu ze mną. Sprawdz również moje media społecznościowe.";

    contactContent.appendChild(title);
    contactContent.appendChild(description1);
    contactContent.appendChild(description2);
    content.appendChild(contactContent);
}

export default initialContact;