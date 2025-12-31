/* =============================
   WHATSAPP CONFIG
============================= */
const whatsappBase = "https://wa.me/8801795711270?text=";

/* =============================
   CATEGORIES
============================= */
const categories = [
  "Burger",
  "Meatbox",
  "Wings",
  "Shawarma",
  "Subway",
  "Sandwich",
  "Snacks",
  "Juice & Coffee"
];

/* =============================
   MENU DATA (WITH IMAGES)
============================= */
const menuData = {
  Burger: [
    { name: "Signature Burger", price: 80, desc: "Shredded chicken, vegetable, mayonnaise, burger sauce", img: "./photos/Signature burger .JPG" },
    { name: "Naga King", price: 90, desc: "Shredded chicken, naga sauce, mayo", img: "./photos/Naga king .JPG" },
    { name: "BBQ Chicken", price: 100, desc: "BBQ sauce, shredded chicken", img: "./photos/BBQ chicken .JPG" },
    { name: "BBQ Cheesy Bite", price: 140, desc: "BBQ sauce, cheese slice", img: "./photos/Bbq cheesy bite .JPG" },
    { name: "Cheesy Bite", price: 120, desc: "Cheese slice, mayo", img: "./photos/Cheesy bite.JPG" },
    { name: "Cheese Blast", price: 150, desc: "Loaded mozzarella cheese", img: "./photos/Cheesy blast.JPG" },
    { name: "Crispy & Crunchy", price: 160, desc: "Crispy patty, mozzarella", img: "./photos/Crispy & crunchy .JPG" },
    { name: "Chicken Steak Burger", price: 170, desc: "Smokey grilled steak patty", img: "./photos/Steak burger .JPG" },
    { name: "Mashroom Chicken", price: 180, desc: "Premium mushroom & cheese", img: "./photos/The mushroom chicken .JPG" },
    { name: "Mexican Sub Burger", price: 200, desc: "Mexican style & mozzarella", img: "./photos/Mexican sub Burger .JPG" }
  ],
  Meatbox: [
    { name: "Classic Fiesta", price: 200, desc: "Chicken strips, sausage, wedges, chef sauce", img: "./photos/classic fiesta meatbox .JPG" },
    { name: "Smokey BBQ Box", price: 250, desc: "BBQ chicken, sausage, BBQ sauce", img: "./photos/Smoky Bbq box.jpg" },
    { name: "Naga Fire Box", price: 250, desc: "Achari naga chicken & sausage", img: "./photos/Naga fire meatbox.JPG" },
    { name: "Mini Overloaded", price: 150, desc: "Chicken cubes, sausage, chef sauce", img: "./photos/Mini overloaded meatbox .JPG" },
    { name: "Premium Overloaded", price: 280, desc: "Nuggets, sausage, cheese & wedges", img: "./photos/Premium overloaded meatbox .png" }
  ],
  Wings: [
    { name: "Crispy Wings (4pc)", price: 150, img: "./photos/IMG_20251208_104537_459.jpg" },
    { name: "BBQ Wings (4pc)", price: 180, img: "./photos/Bbq wings.jpg" },
    { name: "Naga Wings (4pc)", price: 190, img: "./photos/Naga wings .jpg" }
  ],
  Shawarma: [
    { name: "Chicken Shawarma", price: 130, img: "./photos/Chicken shawarma .jpg" },
    { name: "BBQ Chicken Shawarma", price: 150, img: "./photos/Bbq chicken shawarma .jpg" },
    { name: "Naga Chicken Shawarma", price: 150, img: "./photos/Bbq chicken shawarma .jpg" }
  ],
  Subway: [
    { name: "Chicken Subway", price: 120, img: "./photos/Chicken subway .JPG" },
    { name: "Cheesy Subway", price: 150, img: "./photos/Cheesy subway.JPG" },
    { name: "Mexican Subway", price: 180, img: "./photos/Mexican subway.JPG" },
    { name: "Sub Fantasy", price: 220, img: "./photos/Sub fantasy .JPG" }
  ],
  Sandwich: [
    { name: "Grilled Chicken Sandwich", price: 80, img: "./photos/Grilled chicken sandwich .jpg" },
    { name: "Club Sandwich", price: 120, img: "./photos/Club sandwich .JPG" },
    { name: "BBQ Chicken Sandwich", price: 130, img: "./photos/Bbq chicken sandwich .JPG" }
  ],
  Snacks: [
    { name: "Chicken Mini Shingara (5pc)", price: 50, img: "./photos/Chicken mini shingara .JPG" },
    { name: "French Fry", price: 50, img: "./photos/French fry.jpg" },
    { name: "Crispy Chicken Fry", price: 80, img: "./photos/Crispy chicken fingers.jpg" },
    { name: "Chicken Lolipop (4pc)", price: 120, img: "./photos/Chicken lolipop .JPG" },
    { name: "Hot Sauce Pasta", price: 150, img: "./photos/Hot sauce pasta .jpg" },
    { name: "Chicken Chowmein", price: 130, img: "./photos/Chicken chowmein .JPG" },
    { name: "Chicken Nachos", price: 150, img: "./photos/Chicken nachos .JPG" },
    { name: "Mini Chicken Nuggets (2pc)", price: 50, img: "./photos/Nuggets.webp" },
    { name: "YUM Chicken Roll", price: 60, img: "./photos/Yum chicken roll.JPG" }
  ],
  "Juice & Coffee": [
    { name: "Ice Lemonade", price: 60, img: "./photos/-Lemonade.jpg" },
    { name: "Orange Icey", price: 150, img: "./photos/orange.avif" },
    { name: "Cold Lacchi", price: 80, img: "./photos/Lacci.jpg" },
    { name: "Mini Hot Coffee", price: 40, img: "./photos/coffee.jpg" }
  ]
};

/* =============================
   DOM ELEMENTS
============================= */
const catBox = document.getElementById("categories");
const itemsBox = document.getElementById("items");

/* =============================
   LOAD CATEGORIES
============================= */
function loadCategories(active) {
  catBox.innerHTML = "";
  categories.forEach(cat => {
    const div = document.createElement("div");
    div.className = "cat" + (cat === active ? " active" : "");
    div.innerText = cat;
    div.onclick = () => loadMenu(cat);
    catBox.appendChild(div);
  });
}

/* =============================
   LOAD MENU ITEMS
============================= */
function loadMenu(category) {
  loadCategories(category);
  itemsBox.innerHTML = "";

  menuData[category].forEach(item => {
    const msg = encodeURIComponent(
      `I want to order ${item.name} - ${item.price} Tk`
    );

    itemsBox.innerHTML += `
      <div class="food-card ${category.toLowerCase().replace(/ & /g,'').replace(/ /g,'')}">
        <div class="img-box">
          <img src="${item.img}" alt="${item.name}">
        </div>
        <div class="card-body">
          <h4>${item.name}</h4>
          ${item.desc ? `<div class="desc">${item.desc}</div>` : ""}
          <div class="price">${item.price} Tk</div>
          <a class="btn" target="_blank" href="${whatsappBase + msg}">
            Order Now
          </a>
        </div>
      </div>
    `;
  });
}

/* =============================
   INITIAL LOAD
============================= */
loadMenu("Burger");
