import restaurants from "./images/restaurants.jpg";
import fajitas from "./images/pappasitos-fajitaspng.webp";

export default (() => {
    const page = document.createElement("div");

    const aboutDiv = document.createElement("div");
    aboutDiv.classList.add("image-section");
    page.appendChild(aboutDiv);

    const headingImg = document.createElement("img");
    headingImg.src = fajitas;
    headingImg.alt = "Pappasito's Fajitas";
    aboutDiv.appendChild(headingImg);
    const headingInfo = document.createElement("div");
    headingInfo.classList.add("info-section");
    aboutDiv.appendChild(headingInfo);

    const headingH1 = document.createElement("h1");
    headingH1.textContent = "The Story of Pappas";
    headingInfo.appendChild(headingH1);

    const headingP = document.createElement("p");
    headingP.textContent = `Pappasito’s is the second largest concept in one of the largest family-owned and operated restaurant
    companies in the United States.The Pappas family of restaurants offers many different cuisines and
    traditions, but common to all is an obsession with quality food and superior service that's reflected in
                    every aspect of the Guest experience.Pappas is a respected leader in the competitive restaurant
    industry.The Pappas philosophy hasn't changed much over the years. The drive still comes from a
                    passion for excellence, a focus on innovation and attention to detail and quality in everything we do.`;
    headingInfo.appendChild(headingP);

    const statDiv = document.createElement("div");
    statDiv.id = "statistics";
    page.appendChild(statDiv);

    const stat1 = document.createElement("h3");
    stat1.textContent = "3.5 million pounds of tortilla chips used per year";
    statDiv.appendChild(stat1);

    const stat2 = document.createElement("h3");
    stat2.textContent = "900,000 pounds of rice used per year";
    statDiv.appendChild(stat2);

    const stat3 = document.createElement("h3");
    stat3.textContent = "262,500 gallons of tequila per year";
    statDiv.appendChild(stat3);

    const familyDiv = document.createElement("div");
    familyDiv.classList.add("image-section");
    page.appendChild(familyDiv);

    const familyInfo = document.createElement("div");
    familyInfo.classList.add("info-section");
    familyDiv.appendChild(familyInfo);

    const familyImg = document.createElement("img");
    familyImg.src = restaurants;
    familyImg.alt = "Pappas Restaurants";
    familyDiv.appendChild(familyImg);

    const familyH2 = document.createElement("h2");
    familyH2.textContent = "Our family is bigger than you think...";
    familyInfo.appendChild(familyH2);

    const familyP = document.createElement("p");
    familyP.textContent = "One of the things that make Pappas Restaurants different from other restaurant companies is that Pappas not only run our restaurants to feed our loyal Guests day in and day out, we also own and drive the trucks that deliver the freshest meats and seafood to our restaurants every day. We employ the electricians who keep the lights on and the kitchens humming. We even make our own chairs for the dining room floor!";
    familyInfo.appendChild(familyP);

    const familyP2 = document.createElement("p");
    familyP2.textContent = "We make, own and operate almost everything we need to ensure we continue to serve only the highest quality products in a comfortable environment that keeps Guests satisfied and coming back time and time again. This type of business organization is called \"vertical integration\", and it helps us ensure there's never a holdup in the process and that we provide the absolute best for our Guests.";
    familyInfo.appendChild(familyP2);


    return {page};
})();