function initialBallet() {
    const content = document.getElementById("content");
    content.innerHTML = '';
    const balletContent = document.createElement('div');
    const title = document.createElement("h1");
    title.textContent = "Witaj na stronie baletu";
    const description1 = document.createElement("p");
    const description2 = document.createElement("p");
    description1.textContent = "Balet to jedna z najstarszych form tańca, która rozwija ciało, umysł i duszę. \
    Jest to sztuka, która łączy w sobie piękno, elegancję, wyrazistość i precyzję. \
    Balet to nie tylko taniec, to również forma wychowania, która kształtuje charakter, uczy dyscypliny, cierpliwości, wytrwałości, jak również rozwija wrażliwość artystyczną. \
    Balet to doskonały sposób na poprawę kondycji fizycznej, postawy ciała, jak również na rozwijanie zdolności tanecznych. \
    W trakcie zajęć uczymy się techniki baletowej, ćwiczymy koordynację ruchową, rozwijamy wyobraźnię i kreatywność. \
    Zajęcia baletowe są doskonałym sposobem na poprawę kondycji fizycznej, postawy ciała, jak również na rozwijanie wrażliwości artystycznej. \
    W trakcie zajęć uczymy się również choreografii, co pozwala na rozwijanie zdolności tanecznych. \
    Wszystkie zajęcia prowadzone są z dbałością o bezpieczeństwo uczniów, z zachowaniem wszelkich zasad higieny i bezpieczeństwa. \
    W trakcie zajęć stosujemy ćwiczenia rozciągające, wzmacniające, jak również ćwiczenia na równowagę i koordynację ruchową. \
    Zajęcia prowadzone są w miłej atmosferze, z dbałością o indywidualne potrzeby każdego ucznia. \
    W trakcie zajęć uczymy się techniki baletowej, ćwiczymy koordynację ruchową, rozwijamy wyobraźnię i kreatywność. \
    Zajęcia baletowe są doskonałym sposobem na poprawę kondycji fizycznej, postawy ciała, jak również na rozwijanie wrażliwości artystycznej. \
    W trakcie zajęć uczymy się również choreografii, co pozwala na rozwijanie zdolności tanecznych.";
    description2.textContent = "Zapraszam do kontaktu ze mną.";

    balletContent.appendChild(title);
    balletContent.appendChild(description1);
    balletContent.appendChild(description2);
    content.appendChild(balletContent);
}

export default initialBallet;