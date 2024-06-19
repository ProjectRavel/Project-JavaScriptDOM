const reviews = [
  {
    id: 1,
    name: "Nadhira Gipari",
    job: "CEO BapakMana",
    img: "person-1.jpeg",
    text: "Aku adalah Nadhira Rafani Ghifari yang bekerja di CEO bapakMana dengan menciptakan lapangan pekerjaan luas dan terinfrastruktur dengan baik dan konsisten ",
  },
  {
    id: 2,
    name: "Rapani Gipari",
    job: "Independence Woman",
    img: "person-2.jpeg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "Kanjeng Mommy",
    job: "Woilah",
    img: "person-3.jpeg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "Gipari",
    job: "what",
    img: "person-4.jpeg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

const author = document.querySelector("#author");
const job = document.querySelector("#job");
const image = document.querySelector("#person-img");
const text = document.querySelector("#info");
const btns = document.querySelectorAll("button");

// Current Item
window.addEventListener("DOMContentLoaded", () => {
  let currentItem = 0;

  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.classList.contains("next-btn")) {
        currentItem++;
        if (currentItem > reviews.length - 1) {
          currentItem = 0;
        }
        contents(currentItem);
      }
      if (btn.classList.contains("prev-btn")) {
        currentItem--;
        if (currentItem < 0) {
          currentItem = reviews.length - 1;
        }
        contents(currentItem);
      } else {
        currentItem = Math.floor(Math.random() * reviews.length)
        contents(currentItem)
      }
    });
  });

  function contents(content) {
    const item = reviews[content];
    image.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    text.textContent = item.text;
  }
});
