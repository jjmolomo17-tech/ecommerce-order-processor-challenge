/*
=================================================
E-Commerce Order Processor
Challenge 0 - Project Setup and Order Dataset
=================================================
*/

// Array containing all orders
const orders = [
    {
        orderId: "ORD-0001",
        customerName: "   joy molomo   ",
        email: "JOY@EMAIL.COM",
        product: "Laptop",
        category: "Electronics",
        price: 14999.99,
        orderDate: "2026-10-01"
    },

    {
        orderId: "ORD-0002",
        customerName: "thabo MOKOENA",
        email: "THABO@GMAIL.COM",
        product: "Smartphone",
        category: "Electronics",
        price: 9999.50,
        orderDate: "2026-09-20"
    },

    {
        orderId: "ORD-0003",
        customerName: "   lerato smith",
        email: "lerato@gmail.com",
        product: "Shoes",
        category: "Fashion",
        price: 899.99,
        orderDate: "2026-08-15"
    },

    {
        orderId: "ORD-0004",
        customerName: "DAVID brown",
        email: "DAVID@EMAIL.COM",
        product: "Office Chair",
        category: "Furniture",
        price: 2499.95,
        orderDate: "2026-07-23"
    },

    {
        orderId: "ORD-0005",
        customerName: "  sarah johnson ",
        email: "invalid-email",
        product: "Desk",
        category: "Furniture",
        price: 3999.25,
        orderDate: "2026-09-10"
    },

    {
        orderId: "ORD-0006",
        customerName: "jack williams",
        email: "JACK@MAIL.COM",
        product: "Headphones",
        category: "Electronics",
        price: 1299.99,
        orderDate: "2026-06-15"
    },

    {
        orderId: "ORD-0007",
        customerName: "  linda KING",
        email: "LINDA@MAIL.COM",
        product: "Dress",
        category: "Fashion",
        price: 699.99,
        orderDate: "2026-05-12"
    },

    {
        orderId: "ORD-0008",
        customerName: "PETER parker",
        email: "PETER@MAIL.COM",
        product: "Backpack",
        category: "Accessories",
        price: 799.75,
        orderDate: "2026-04-11"
    },

    {
        orderId: "ORD-0009",
        customerName: "mary jane",
        email: "MARY@MAIL.COM",
        product: "Keyboard",
        category: "Electronics",
        price: 1299.49,
        orderDate: "2026-10-15"
    },

    {
        orderId: "ORD-0010",
        customerName: "   Chris Evans",
        email: "CHRIS@MAIL.COM",
        product: "Monitor",
        category: "Electronics",
        price: 5499.80,
        orderDate: "2026-03-22"
    },

    {
        orderId: "ORD-0011",
        customerName: " sam wilson ",
        email: "SAM@MAIL.COM",
        product: "Watch",
        category: "Accessories",
        price: 2299.40,
        orderDate: "2026-02-18"
    }
];

/*
=================================================
Render Orders
=================================================
*/

function renderOrders() {

    const ordersContainer =
        document.getElementById("ordersContainer");

    ordersContainer.innerHTML = "";

    orders.forEach(order => {

        const card = document.createElement("div");

        card.className =
            "bg-slate-50 border rounded-xl p-4 shadow";

        card.innerHTML = `
            <h3 class="font-bold text-lg mb-2">
                ${order.orderId}
            </h3>

            <p>
                <strong>Customer:</strong>
                ${order.customerName}
            </p>

            <p>
                <strong>Email:</strong>
                ${order.email}
            </p>

            <p>
                <strong>Product:</strong>
                ${order.product}
            </p>

            <p>
                <strong>Category:</strong>
                ${order.category}
            </p>

            <p>
                <strong>Price:</strong>
                R${order.price}
            </p>

            <p>
                <strong>Order Date:</strong>
                ${order.orderDate}
            </p>
        `;

        ordersContainer.appendChild(card);
    });
}

/*
=================================================
Page Load
=================================================
*/

renderOrders();


/*
=================================================
Challenge 1 - String Methods
=================================================
*/

/*
Clean customer name:
- Remove extra spaces
- Convert to title case
*/
function cleanCustomerName(name) {

    const trimmedName = name.trim();

    const nameParts = trimmedName.split(" ");

    const cleanedName = nameParts
        .filter(word => word !== "")
        .map(word =>
            word.charAt(0).toUpperCase() +
            word.slice(1).toLowerCase()
        )
        .join(" ");

    return cleanedName;
}

/*
Clean email:
- Remove spaces
- Convert to lowercase
*/
function cleanEmail(email) {
    return email.trim().toLowerCase();
}

/*
Extract first name
*/
function getFirstName(name) {

    const cleanedName = cleanCustomerName(name);

    return cleanedName.split(" ")[0];
}

/*
Extract email domain
*/
function getEmailDomain(email) {

    const cleanedEmail = cleanEmail(email);

    if (cleanedEmail.includes("@")) {
        return cleanedEmail.split("@")[1];
    }

    return "Invalid Domain";
}

/*
Example of replace()
Remove double spaces if any remain
*/
function removeExtraSpaces(text) {
    return text.replace(/\s+/g, " ");
}


/*
=================================================
Render Orders
=================================================
*/

function renderOrders() {

    const ordersContainer =
        document.getElementById("ordersContainer");

    ordersContainer.innerHTML = "";

    orders.forEach(order => {

        const cleanedName =
            cleanCustomerName(order.customerName);

        const cleanedEmail =
            cleanEmail(order.email);

        const firstName =
            getFirstName(order.customerName);

        const emailDomain =
            getEmailDomain(order.email);

        const card = document.createElement("div");

        card.className =
            "bg-slate-50 border rounded-xl p-4 shadow";

        card.innerHTML = `
            <h3 class="font-bold text-lg mb-3">
                ${order.orderId}
            </h3>

            <p>
                <strong>Customer:</strong>
                ${cleanedName}
            </p>

            <p>
                <strong>First Name:</strong>
                ${firstName}
            </p>

            <p>
                <strong>Email:</strong>
                ${cleanedEmail}
            </p>

            <p>
                <strong>Email Domain:</strong>
                ${emailDomain}
            </p>

            <hr class="my-2">

            <p>
                <strong>Product:</strong>
                ${order.product}
            </p>

            <p>
                <strong>Category:</strong>
                ${order.category}
            </p>

            <p>
                <strong>Price:</strong>
                R${order.price}
            </p>

            <p>
                <strong>Order Date:</strong>
                ${order.orderDate}
            </p>
        `;

        ordersContainer.appendChild(card);
    });
}




