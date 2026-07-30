document.addEventListener("DOMContentLoaded", async () => {

    await loadCategories();

    initialiseNavigation();

    initialiseSearch();

});

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

            <button>

                View Rules →

            </button>

        </div>

        `;

    });

    document.querySelectorAll(".card button").forEach(button=>{

        button.addEventListener("click",(e)=>{

            const card=e.target.closest(".card");

            const category=card.dataset.category;

            alert(category + " page coming next.");

        });

    });

}

function initialiseNavigation(){

    document.querySelectorAll(".nav-item").forEach(item=>{

        item.addEventListener("click",()=>{

            document.querySelectorAll(".nav-item").forEach(i=>{

                i.classList.remove("active");

            });

            item.classList.add("active");

        });

    });

}

function initialiseSearch(){

    const search=document.getElementById("search");

    search.addEventListener("input",()=>{

        const value=search.value.toLowerCase();

        document.querySelectorAll(".card").forEach(card=>{

            card.style.display=

            card.innerText.toLowerCase().includes(value)

            ? "block"

            : "none";

        });

    });

}
