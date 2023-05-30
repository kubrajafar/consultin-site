const submitForm = document.querySelector(".submitForm");
const img = document.querySelector("#img");
const header = document.querySelector("#header");
const text = document.querySelector("#text");
submitForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const obj = {
    img: img.value,
    header: header.value,
    about: text.value,
  };

  fetch("http://localhost:3000/datas", {
    method: "Post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });

});
