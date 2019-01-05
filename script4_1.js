//TRIANGLE FORMULA IS TOO COMPLICATED HENCE USING MULTIPLICTAION

const button = document.getElementById("calc");
button.addEventListener("click", () => {
    const area = document.getElementById("area");

    const sideA = document.getElementById("sideA");
    const sideB = document.getElementById("sideB");
    const sideC = document.getElementById("sideC");

    console.log(Number(sideA.value) * Number(sideC.value) * Number(sideB.value));
    console.log(sideA.value);
    area.value = String(
        Number(sideA.value) * Number(sideC.value) * Number(sideB.value)
    )
});