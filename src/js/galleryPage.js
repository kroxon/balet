function initialGallery() {
    const content = document.getElementById("content");
    content.innerHTML = '';
    const galleryContent = document.createElement('div');
    const title = document.createElement("h1");
    title.textContent = "Witaj na stronie galerii";
    const description1 = document.createElement("p");
    const description2 = document.createElement("p");
    description1.textContent = "Galeryjka to miejsce, w którym znajdziesz zdjęcia z moich zajęć. \
    Zajęcia baletowe są doskonałym sposobem na poprawę kondycji fizycznej, postawy ciała, jak również na rozwijanie wrażliwości artystycznej. \
    W trakcie zajęć uczymy się również choreografii, co pozwala na rozwijanie zdolności tanecznych. \
    Wszystkie zajęcia prowadzone są z dbałością o bezpieczeństwo uczniów, z zachowaniem wszelkich zasad higieny i bezpieczeństwa. \
    Na zdjęciach znajdziesz zarówno zdjęcia z zajęć grupowych, jak również indywidualnych. \
    Zajęcia prowadzone są w miłej atmosferze, z dbałością o indywidualne potrzeby każdego ucznia. \
    W trakcie zajęć uczymy się techniki baletowej, ćwiczymy koordynację ruchową, rozwijamy wyobraźnię i kreatywność.";
    description2.textContent = "Jeśli zainteresowały Cię moje zajęcia, zapraszam do kontaktu ze mną.";

    galleryContent.appendChild(title);
    galleryContent.appendChild(description1);
    galleryContent.appendChild(description2);
    content.appendChild(galleryContent);
}

export default initialGallery;