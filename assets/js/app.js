document.addEventListener("DOMContentLoaded", () => {

    loadCategories();

    initialiseNavigation();

    initialiseSearch();

});


let allCards = [];


async function loadCategories() {

    const response = await fetch("data/categories.json");

    const categories = await response.json();

    const grid = document.getElementById("categoryGrid");

    grid.innerHTML = "";

    categories.forEach(category => {

        grid.innerHTML += `

        <div class="card" data-category="${category.id}">

            <h3>${category.icon} ${category.name}</h3>

            <p>${category.description}</p>

            <button class="open-category">

                View Rules →

            </button>

        </div>

        `;

    });


    allCards = document.querySelectorAll(".card");


    document.querySelectorAll(".open-category")
    .forEach(button => {


        button.addEventListener("click", () => {


            const card = button.closest(".card");

            const category = card.dataset.category;


            loadRules(category);


        });


    });


}



async function loadRules(category) {


    const grid = document.getElementById("categoryGrid");


    const response = await fetch(
        `rules/${category}/index.json`
    );


    const rules = await response.json();


    grid.innerHTML = "";


    rules.forEach(rule => {


        grid.innerHTML += `


        <div class="card">


            <h3>
                ${rule.id} - ${rule.title}
            </h3>


            <p>
                ${rule.description || ""}
            </p>


            <button
            onclick="openRule('${category}','${rule.file}')">

                Read Rule →

            </button>


        </div>


        `;


    });


}



async function openRule(category, file) {


    const response = await fetch(
        `rules/${category}/${file}`
    );


    const markdown = await response.text();


    const grid = document.getElementById("categoryGrid");


    grid.innerHTML = `


    <div class="rule-content">


        <button onclick="loadRules('${category}')">

            ← Back

        </button>


        <pre>

${markdown}

        </pre>


    </div>


    `;


}



function initialiseNavigation() {


    document.querySelectorAll(".nav-item")
    .forEach(item => {


        item.addEventListener("click", () => {


            document.querySelectorAll(".nav-item")
            .forEach(i => {

                i.classList.remove("active");

            });


            item.classList.add("active");


        });


    });


}



function initialiseSearch() {


    const search =
    document.getElementById("search");


    search.addEventListener("input", () => {


        const value =
        search.value.toLowerCase();


        allCards.forEach(card => {


            card.style.display =
            card.innerText
            .toLowerCase()
            .includes(value)

            ? "block"

            : "none";


        });


    });


}
