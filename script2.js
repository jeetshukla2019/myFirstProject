let button = document.getElementById("printButton");
console.log(document.getElementById("printButton"));
button.addEventListener("click", () => {
    window.print();
});