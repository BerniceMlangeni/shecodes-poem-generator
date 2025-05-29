function generatePoem(event) {
    event.preventDefault();

    new Typewriter("#poem", {
        strings: ["In a meadow green and wide,"],
        autoStart: true,
        delay: 1
    });
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);