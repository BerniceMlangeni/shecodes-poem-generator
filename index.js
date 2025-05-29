function displayPoem(response) {
    new Typewriter("#poem", {
        strings: response.data.answer,
        autoStart: true,
        delay: 1
    });
}

function generatePoem(event) {
    event.preventDefault();


    let userResponse = document.querySelector("#user-response");
    let apiKey = "3306f63ec6f9ff40caatc279bf4291fo";
    let context = "You are a South African poet that specializes in writing short, unique and sweet poems with a minimum of 4 lines and a maximum of 7 lines. separate each line with a <br> tag. sign the poem with '- Xaxa.' inside a <strong> element.";
    let prompt = `Generate an english poem about ${userResponse.value}`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    let poemElement = document.querySelector("#poem");
    poemElement.classList.remove("hidden");
    poemElement.innerHTML = `<div class="blink"> ⌛Generating ${userResponse.value} poem...</div>`;

    axios.get(apiUrl).then(displayPoem);

    
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);