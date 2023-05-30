const services_cards = document.querySelector(".services-cards");

fetch("http://localhost:3000/datas")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((element) => {
      cardData(element);
    });
  });

function cardData(data) {
  const card = document.createElement("div");
  const card_img = document.createElement("img");
  const card_header = document.createElement("h5");
  const card_text = document.createElement("p");
  const card_btn = document.createElement("button");

  card_img.setAttribute(
    "src",
    "https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/Homepage_testi.png.webp"
  );
  card_header.innerText = data.header;
  card_text.innerText = data.about;
  card_btn.innerText = "Delete";

  card.classList.add("services_card");
  card_img.classList.add("card_img");
  card_header.classList.add("card_headerBox");
  card_text.classList.add("card_textBox");
  card_btn.classList.add("card_btn");
  card.append(card_img, card_header, card_text, card_btn);
  services_cards.append(card);

  card_btn.onclick = () => {

    card_btn.parentElement.remove();
    fetch("http://localhost:3000/datas/" + data.id, { method: "Delete" })
      .then((res) => res.json())
      .then(
        fetch("http://localhost:3000/datas", {
          method: "Get",
        })
          .then((res) => res.json())
          .then(cardData())
      );
  };
}
const input = document.querySelector(".input");

input.addEventListener("keyup", () => {
  const cardBox = document.querySelectorAll(".services_card");
  cardBox.forEach((elem) => {
    if (
      elem.children[1].innerText
        .toLowerCase()
        .includes(input.value.toLowerCase())
    ) {
      elem.style.display = "block";
    } else {
      elem.style.display = "none";
    }
  });
});

const front = document.querySelector("#front");
const back = document.querySelector("#back");
const ux = document.querySelector("#ux");
const web = document.querySelector("#web");
const show = document.querySelector("#show");

show.addEventListener("click", () => {
  const cardBox = document.querySelectorAll(".services_card");
  cardBox.forEach((element) => {
    element.style.display = "block";
  });
});
front.addEventListener("click", () => {
  const cardBox = document.querySelectorAll(".services_card");
  cardBox.forEach((element) => {
    if (element.children[2].innerText.toLowerCase().includes("front")) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
});
back.addEventListener("click", () => {
  const cardBox = document.querySelectorAll(".services_card");
  cardBox.forEach((element) => {
    if (element.children[2].innerText.toLowerCase().includes("back")) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
});
ux.addEventListener("click", () => {
  const cardBox = document.querySelectorAll(".services_card");
  cardBox.forEach((element) => {
    if (element.children[2].innerText.toLowerCase().includes("ux")) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
});
web.addEventListener("click", () => {
  const cardBox = document.querySelectorAll(".services_card");
  cardBox.forEach((element) => {
    if (element.children[2].innerText.toLowerCase().includes("web")) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
});
