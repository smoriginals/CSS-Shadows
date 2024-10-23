const container = document.querySelector(".container");
const text = container.querySelector("h1");

function ShadowHandel(e) {

    console.log(e);
}

container.addEventListener("mousemove", ShadowHandel);