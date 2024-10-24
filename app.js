const container = document.querySelector(".container");
const text = container.querySelector("h1");

const walk = 20; //Shadow Distance
function ShadowHandel(e) {

    // const width = container.offsetWidth;
    //const height = container.offsetHeight;
    //ES6 Structuring -
    const { offsetWidth: width, offsetHeight: height } = container;
    //let x = e.offsetX;
    //let y = e.offsetY;
    //ES6 Structuring -
    let { offsetX: x, offsetY: y } = e;

    if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetRight;
    }
    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));


    text.style.textShadow = `${xWalk}px ${yWalk}px 5px black`;

}

container.addEventListener("mousemove", ShadowHandel);

