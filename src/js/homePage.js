function initial(){
    const content = document.getElementById("content");
    content.innerHTML = '';
    const homeContent = document.createElement('div');
    const title = document.createElement("h1");
    title.textContent = "Witaj na stronie domowej instruktora baletu!";
    const description1 = document.createElement("p");
    const description2 = document.createElement("p");
    description1.textContent = "Zapraszam na zajęcia baletu dla dzieci, młodzieży i dorosłych. \
    Zajęcia prowadzone są w grupach, jak również indywidualnie. \
    Wszystkie zajęcia prowadzone są w miłej atmosferze, z dbałością o indywidualne potrzeby każdego ucznia. \
    W trakcie zajęć uczymy się techniki baletowej, ćwiczymy koordynację ruchową, rozwijamy wyobraźnię i kreatywność. \
    Zajęcia baletowe są doskonałym sposobem na poprawę kondycji fizycznej, postawy ciała, jak również na rozwijanie wrażliwości artystycznej. \
    W trakcie zajęć uczymy się również choreografii, co pozwala na rozwijanie zdolności tanecznych. \
    Wszystkie zajęcia prowadzone są z dbałością o bezpieczeństwo uczniów, z zachowaniem wszelkich zasad higieny i bezpieczeństwa. \
    W trakcie zajęć stosujemy ćwiczenia rozciągające, wzmacniające, jak również ćwiczenia na równowagę i koordynację ruchową. \
    Zajęcia prowadzone są w miłej atmosferze, z dbałością o indywidualne potrzeby każdego ucznia. \
    W trakcie zajęć uczymy się techniki baletowej, ćwiczymy koordynację ruchową, rozwijamy wyobraźnię i kreatywność. \
    Zajęcia baletowe są doskonałym sposobem na poprawę kondycji fizycznej, postawy ciała, jak również na rozwijanie wrażliwości artystycznej. \
    W trakcie zajęć uczymy się również choreografii, co pozwala na rozwijanie zdolności tanecznych. \
    Wszystkie zajęcia prowadzone są z dbałością o bezpieczeństwo uczniów, z zachowaniem wszelkich zasad higieny i bezpieczeństwa.";
    description2.textContent = "Zapraszam do zapoznania się z ofertą zajęć oraz do kontaktu ze mną w celu umówienia się na zajęcia próbne.";
    
    homeContent.appendChild(title);
    homeContent.appendChild(description1);
    homeContent.appendChild(description2);
    content.appendChild(homeContent);
}

export default initial;