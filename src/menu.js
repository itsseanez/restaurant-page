export default (() => {
    const page = document.createElement("div");
    page.classList.add("page");

    const title = document.createElement("h2");
    title.textContent = "Our Menu";

    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");

    const items = [
        { name: "Classic Burger", price: "$12", desc: "Juicy beef patty, lettuce, tomato, house sauce." },
        { name: "Margherita Pizza", price: "$14", desc: "Fresh mozzarella, basil, tomato sauce." },
        { name: "Grilled Salmon", price: "$18", desc: "Served with lemon butter and roasted vegetables." },
        { name: "Chicken Alfredo", price: "$16", desc: "Creamy parmesan sauce over fettuccine pasta." },
        { name: "House Salad", price: "$9", desc: "Mixed greens, tomatoes, cucumbers, vinaigrette." },
    ];

    items.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("menu-item");

        const itemName = document.createElement("h3");
        itemName.textContent = `${item.name} — ${item.price}`;

        const itemDesc = document.createElement("p");
        itemDesc.textContent = item.desc;

        card.appendChild(itemName);
        card.appendChild(itemDesc);
        menuContainer.appendChild(card);
    });

    page.appendChild(title);
    page.appendChild(menuContainer);

    return { page };
})();
