const form = document.querySelector("#form");
const image = document.querySelector("#image");

image.addEventListener("change", async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  formData.append("image", image);

  console.log(formData);

  fetch("http://localhost:8081/upload", {
    method: "POST",
    body: formData,
    headers: {
      //   "Content-Type": "multipart/form-data",
    },
  });

  console.log(...formData);
});

const displayImg = document.querySelector("#displayImg");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const res = await fetch("http://localhost:8081/download");
  const json = res.json().then((image) => {
    console.log(image);

    displayImg.setAttribute("src", image.image);
  });
});
