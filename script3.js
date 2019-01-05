const button = document.getElementById("getDate");
let body = document.getElementsByTagName("body")[0];
button.addEventListener("click", () => {
    const dateObj = new Date();
    const date = (dateObj.getDate() < 10) ? ("0" + dateObj.getDate()) : dateObj.getDate();
    const month = ((dateObj.getMonth() + 1) < 10) ? ("0" + (dateObj.getMonth() + 1)) : (dateObj.getMonth() + 1);
    const year = dateObj.getFullYear();
    const monArray = [
        'January', 'February', 'March', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const h2Dates = [];
    h2Dates.push(document.createElement("br"));
    h2Dates.push(document.createElement("h2").appendChild(document.createTextNode(`dd/mm/yyyy : ${date}/${month}/${year}`)));
    h2Dates.push(document.createElement("br"));
    h2Dates.push(document.createElement("h2").appendChild(document.createTextNode(`mm/dd/yyyy : ${month}/${date}/${year}`)));
    h2Dates.push(document.createElement("br"));
    h2Dates.push(document.createElement("h2").appendChild(document.createTextNode(`dd-Mon-yyyy : ${date}-${monArray[month-1].substring(0,3)}-${year}`)));
    h2Dates.push(document.createElement("br"));
    h2Dates.push(document.createElement("h2").appendChild(document.createTextNode(`dd-Month-yyyy : ${date}-${monArray[month-1]}-${year}`)));
    h2Dates.push(document.createElement("br"));
    h2Dates.push(document.createElement("h2").appendChild(document.createTextNode(`yyyy-mm-dd : ${year}/${month}/${date}`)));
    for (h2Date of h2Dates) {
        body.appendChild(h2Date);
    }
});