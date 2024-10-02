function confirmOrder() {
    const insuranceCheckbox = document.getElementById('insurance-checkbox');
    let message = "You have confirmed your order!";
    if (insuranceCheckbox.checked) {
        message += " Third-party insurance is added.";
    } else {
        message += " Without third-party insurance.";
    }
    alert(message);
}
