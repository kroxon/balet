function initialSchedule() {
    const content = document.getElementById("content");
    content.innerHTML = '';
    const balletContent = document.createElement('div');
    const title = document.createElement("h1");
    title.textContent = "Witaj na stronie Zapisów";
    const description1 = document.createElement("p");
    const description2 = document.createElement("p");
    description1.textContent = "Tutaj znajdziesz informacje o zapisach na zajęcia. \
    Wypełnij formularz kontaktowy, aby dowiedzieć się więcej. \
    Na grafiku znajdziesz informacje o dostępnych terminach.";
    description2.textContent = "W razie wątpliwości skontaktuj się z nami telefonicznie lub mailowo.";

    balletContent.appendChild(title);
    balletContent.appendChild(description1);
    balletContent.appendChild(description2);
    content.appendChild(balletContent);
}

export default initialSchedule;