project1El = document.getElementById("project1");

function projectClickHandler() {
    event.preventDefault();

    console.log(event.target);
    window.location.href="https://github.com/bskutivan/National-Park-Planner"
}



project1El.addEventListener("click", projectClickHandler);