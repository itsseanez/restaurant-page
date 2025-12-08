export default (() => {
    const page = document.createElement("div");
    page.classList.add("page");

    const title = document.createElement("h2");
    title.textContent = "Contact Us";

    const container = document.createElement("div");
    container.classList.add("contact-container");

    const phone = document.createElement("p");
    phone.innerHTML = "<strong>Phone:</strong> (555) 123-4567";

    const email = document.createElement("p");
    email.innerHTML = "<strong>Email:</strong> info@restaurant.com";

    const address = document.createElement("p");
    address.innerHTML = "<strong>Address:</strong> 123 Main St, Anytown, USA";

    const hoursTitle = document.createElement("h3");
    hoursTitle.textContent = "Hours";

    const hours = document.createElement("ul");
    const schedule = [
        "Monday – Friday: 11am – 10pm",
        "Saturday: 12pm – 11pm",
        "Sunday: Closed",
    ];

    schedule.forEach(time => {
        const li = document.createElement("li");
        li.textContent = time;
        hours.appendChild(li);
    });

    container.appendChild(phone);
    container.appendChild(email);
    container.appendChild(address);
    container.appendChild(hoursTitle);
    container.appendChild(hours);

    page.appendChild(title);
    page.appendChild(container);

    return { page };
})();
