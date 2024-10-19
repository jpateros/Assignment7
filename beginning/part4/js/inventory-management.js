/*eslint-env browser*/
var inventory = [
    [4824, "Shirt", 10, 15.99],
    [6343, "Jeans", 22, 39.99],
    [3223, "Socks", 36, 9.99],
    [2233, "Hat", 12, 14.99],
    [9382, "Jacket", 5, 49.99]
];

// Function to display the menu
function displayMenu() {
    console.log("Inventory Management System");
    console.log("1. View all products");
    console.log("2. Update existing product quantity");
    console.log("3. Exit");
}


function viewProducts() {
    console.log("\nProducts in Inventory:");

    inventory.sort((a, b) => a[0] - b[0]);
    for (var i = 0; i < inventory.length; i++) {
        var product = inventory[i];
        console.log(`${product[0]} ${product[1]} (${product[2]}) $${product[3].toFixed(2)}`);
    }
}


function updateProduct() {
    var sku = parseInt(prompt("Enter SKU number of the product to update:"));
    var newQuantity = parseInt(prompt("Enter new quantity:"));


    var productFound = false;
    for (var i = 0; i < inventory.length; i++) {
        if (inventory[i][0] === sku) {
            inventory[i][2] = newQuantity;
            console.log("Updated " + inventory[i][1] + " quantity to " + newQuantity);
            productFound = true;
            break;
        }
    }

    if (!productFound) {
        console.log("Did not find specfied SKU number of " + sku);
    }
}

while (true) {
    displayMenu();
    var choice = prompt("Select an option: View, Update, or Exit: ").toLowerCase();

    if (choice === "view") {
        viewProducts();
    } else if (choice === "update") {
        updateProduct();
    } else if (choice === "exit") {
        console.log("Exiting inventory management");
        break
    } else {
        console.log("Invalid choice must be exactly  View, Update, or Exit check spelling ");
    }
}


