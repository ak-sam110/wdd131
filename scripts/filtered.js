const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Accra Ghana Temple",
        location: "Independence Ave",
        dedicated: "2004 January 11",
        area: 1626,
        imageUrl: https://churchofjesuschristtemples.org/accra-ghana-temple/
    },
    {
        templeName: "Austin Texas Temple",
        location: "East Park Steet",
        dedicated: "2022 December 19",
        area: 2787,
        imageUrl: https://churchofjesuschristtemples.org/austin-texas-temple/
    },
    {
        templeName: "Benin City Nigeria Temple",
        location: "Commercial Avenue",
        dedicated: "2020 April 5", 
        area: 2852,
        imageUrl: https://churchofjesuschristtemples.org/benin-city-nigeria-temple/
    }
    // Add more temple objects here...
];

// DOM Elements
const container = document.getElementById("templeContainer");

// Display Function
function displayTemples(templesToShow) {
    container.innerHTML = "";
    templesToShow.forEach((temple) => {
        const card = document.createElement("section");
        card.classList.add("temple-card");

        card.innerHTML = `
      <h2>${temple.templeName}</h2>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy"/>
    `;

        container.appendChild(card);
    });
}

// Filter Function
function filterTemples(criteria) {
    switch (criteria) {
        case "old":
            displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() < 1900));
            break;
        case "new":
            displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() > 2000));
            break;
        case "large":
            displayTemples(temples.filter(t => t.area > 90000));
            break;
        case "small":
            displayTemples(temples.filter(t => t.area < 10000));
            break;
        default:
            displayTemples(temples);
    }
}

// Nav Button Event Listeners
document.querySelectorAll("nav button").forEach(button => {
    button.addEventListener("click", () => {
        const filter = button.getAttribute("data-filter");
        filterTemples(filter);
    });
});

// Initial Load
displayTemples(temples);

// Footer Year and Last Modified
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;