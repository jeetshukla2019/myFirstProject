const button = document.getElementById("rotate");
const input = document.getElementById("inputStr");

button.addEventListener("click", () => {
    const textValue = String(input.value)
    if (textValue.length > 0) {
        console.log(textValue[textValue.length - 1] + textValue.substring(0, textValue.length - 1))
        input.value = textValue[textValue.length - 1] + textValue.substring(0, textValue.length - 1);
    }
});