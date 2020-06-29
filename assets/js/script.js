project1El = document.getElementById("project1");
project5El = document.getElementById("project5");

function project1ClickHandler() {
    event.preventDefault();

    console.log(event.target);
    window.location.href="https://github.com/bskutivan/National-Park-Planner"
}

function project1ClickHandler() {
    event.preventDefault();

    console.log(event.target);
    window.location.href="https://github.com/bskutivan/character_builder"
}


project1El.addEventListener("click", project1ClickHandler);
project5El.addEventListener("click", project5ClickHandler)