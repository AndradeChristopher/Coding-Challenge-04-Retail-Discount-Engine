let products = [
    {
        name: "Laptop",
        category: "electronics",
        price: 1000,
        inventory: 10
    },
    {
        name: "T-Shirt",
        category: "apparel",
        price: 25,
        inventory: 20
    },
    {
        name: "Milk",
        category: "groceries",
        price: 5,
        inventory: 30
    },
    {
        name: "Detergent",
        category: "household",
        price: 12,
        inventory: 15
    },
    {
        name: "Book",
        category: "other",
        price: 20,
        inventory: 8
    }
];

for (const product of products) {

    switch (product.category) {

        case "electronics":
            product.price *= 0.80; //20% off
            break;

        case "apparel":
            product.price *= 0.85; //15% off
            break;

        case "groceries":
        case "household":
            product.price *= 0.90; //10% off
            break;

        default:
            //0% discount
            break;
    }
}

let customerType = "student";
let extraDiscount = 0;

if (customerType === "student") {
    extraDiscount = 0.05;
}
else if (customerType === "senior") {
    extraDiscount = 0.07;
}
else {
    extraDiscount = 0; //no/invalid selection
}
