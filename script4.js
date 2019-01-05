function validate(event) {
    const charCode = (event.which) ? event.which : event.keyCode
    if (charCode > 31 && (charCode != 46 && (charCode < 48 || charCode > 57))) {
        console.log("return false")
        return false;
    }
    return true;
}