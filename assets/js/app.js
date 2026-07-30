/* =====================================
   Ashes of Humanity Rules Portal
   app.js
===================================== */

document.addEventListener("DOMContentLoaded", () => {

    console.log("Ashes of Humanity Rules Portal Loaded");

    initialiseNavigation();
    initialiseCards();
    initialiseSearch();

});

/* =====================================
    Navigation
===================================== */

function initialiseNavigation(){

    const navItems = document.querySelectorAll(".nav-item");

    navItems.forEach(item=>{

        item.addEventListener("click",()=>{

            navItems.forEach(i=>i.classList.remove("active"));

            item.classList.add("active");

        });

    });

}

/* =====================================
    Category Cards
===================================== */

function initialiseCards(){

    const cards=document.querySelectorAll(".card");

    cards.forEach(card=>{

        card.addEventListener("mouseenter",()=>{

            card.style.transform="translateY(-8px)";

        });

        card.addEventListener("mouseleave",()=>{

            card.style.transform="translateY(0px)";

        });

        card.querySelector("button").addEventListener("click",()=>{

            const title=card.querySelector("h3").innerText;

            alert(title + "\n\nRule pages are coming in the next release.");

        });

    });

}

/* =====================================
    Search
===================================== */

function initialiseSearch(){

    const input=document.getElementById("search");

    input.addEventListener("input",(e)=>{

        const value=e.target.value.toLowerCase();

        const cards=document.querySelectorAll(".card");

        cards.forEach(card=>{

            const text=card.innerText.toLowerCase();

            if(text.includes(value)){

                card.style.display="block";

            }

            else{

                card.style.display="none";

            }

        });

    });

}

/* =====================================
    Future Modules
===================================== */

/*

Upcoming releases

✔ Markdown Loader

✔ JSON Rule Database

✔ Live Search Index

✔ Rule Viewer

✔ Related Rules

✔ Version History

✔ Recent Updates

✔ Breadcrumbs

✔ Mobile Drawer

✔ Theme Manager

*/
