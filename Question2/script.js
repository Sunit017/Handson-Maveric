function calculateTotal() {

    const selectedProduct = document.getElementById('product').value;

    const quantity = parseInt(document.getElementById('quantity').value);

    const totalAmount = selectedProduct * quantity;




    // Calculate discounted amount if total is above 1000

    let discountedAmount = totalAmount;

    if (totalAmount > 1000) {

        discountedAmount = totalAmount * 0.9; // 10% discount

    }




    // Display the total amount and discounted amount

    const totalAmountDisplay = document.getElementById('totalAmount');

    totalAmountDisplay.innerText = `Total Amount: ${totalAmount}`;




    const discountedAmountDisplay = document.getElementById('discountedAmount');

    discountedAmountDisplay.innerText = `Discounted Amount: ${discountedAmount}`;

}