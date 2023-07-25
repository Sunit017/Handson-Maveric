function displayUserData() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;

    const userDataDiv = document.getElementById("userData");

    // Create a table element
    const table = document.createElement("table");

    // Create table rows and cells for the user data
    const row1 = table.insertRow();
    const cell1 = row1.insertCell();
    cell1.textContent = "Name:";
    const cell2 = row1.insertCell();
    cell2.textContent = name;

    const row2 = table.insertRow();
    const cell3 = row2.insertCell();
    cell3.textContent = "Email:";
    const cell4 = row2.insertCell();
    cell4.textContent = email;

    const row3 = table.insertRow();
    const cell5 = row3.insertCell();
    cell5.textContent = "Age:";
    const cell6 = row3.insertCell();
    cell6.textContent = age;

    // Add the table to the userDataDiv
    userDataDiv.appendChild(table);

    // Reset the form after displaying the data
    document.getElementById("signupForm").reset();
}
