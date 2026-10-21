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

        const vatAmount =
    calculateVAT(order.price);

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
    R${Number(order.price).toFixed(2)}
</p>

<p>
    <strong>VAT (15%):</strong>
    R${vatAmount.toFixed(2)}
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

sortOrdersByDate();

renderOrders();
renderStatistics();


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


/*
=================================================
Challenge 2 - Number and Math Methods
=================================================
*/

/*
Calculate total value of all orders
Using reduce() and parseFloat()
*/
function calculateTotalValue() {

    return orders.reduce((total, order) => {

        return total + parseFloat(order.price);

    }, 0);
}

/*
Calculate average price
*/
function calculateAveragePrice() {

    const total = calculateTotalValue();

    return total / orders.length;
}

/*
Highest price
Using Math.max()
*/
function getHighestPrice() {

    const prices = orders.map(order => order.price);

    return Math.max(...prices);
}

/*
Lowest price
Using Math.min()
*/
function getLowestPrice() {

    const prices = orders.map(order => order.price);

    return Math.min(...prices);
}

/*
VAT Calculation (15%)
*/
function calculateVAT(price) {

    return price * 0.15;
}


/*
=================================================
Render Statistics
=================================================
*/

function renderStatistics() {

    const statisticsContainer =
        document.getElementById("statisticsContainer");

    const totalValue =
        calculateTotalValue();

    const averagePrice =
        calculateAveragePrice();

    const highestPrice =
        getHighestPrice();

    const lowestPrice =
        getLowestPrice();

    const totalVAT =
        calculateVAT(totalValue);

    statisticsContainer.innerHTML = `
    
        <div class="bg-blue-100 p-4 rounded-lg">
            <h3 class="font-bold">
                Total Value
            </h3>

            <p class="text-xl">
                R${totalValue.toFixed(2)}
            </p>
        </div>

        <div class="bg-green-100 p-4 rounded-lg">
            <h3 class="font-bold">
                Average Price
            </h3>

            <p class="text-xl">
                R${averagePrice.toFixed(2)}
            </p>
        </div>

        <div class="bg-yellow-100 p-4 rounded-lg">
            <h3 class="font-bold">
                Highest Price
            </h3>

            <p class="text-xl">
                R${highestPrice.toFixed(2)}
            </p>
        </div>

        <div class="bg-red-100 p-4 rounded-lg">
            <h3 class="font-bold">
                Lowest Price
            </h3>

            <p class="text-xl">
                R${lowestPrice.toFixed(2)}
            </p>
        </div>

        <div class="bg-purple-100 p-4 rounded-lg">
            <h3 class="font-bold">
                VAT (15%)
            </h3>

            <p class="text-xl">
                R${totalVAT.toFixed(2)}
            </p>
        </div>

    `;
}


/*
=================================================
Challenge 3 - Date Methods
=================================================
*/

/*
Format date into readable format
Example:
2026-10-15 -> 15 October 2026
*/
function formatOrderDate(dateString) {

    const date = new Date(dateString);

    return date.toLocaleDateString(
        "en-ZA",
        {
            day: "2-digit",
            month: "long",
            year: "numeric"
        }
    );
}

/*
Calculate days since order was placed
*/
function getDaysAgo(dateString) {

    const orderDate = new Date(dateString);

    const currentDate = new Date();

    const differenceInMilliseconds =
        currentDate.getTime() -
        orderDate.getTime();

    const daysAgo =
        Math.floor(
            differenceInMilliseconds /
            (1000 * 60 * 60 * 24)
        );

    return daysAgo;
}

/*
Determine whether order is recent
Recent = within last 30 days
*/
function isRecentOrder(dateString) {

    return getDaysAgo(dateString) <= 30;
}

/*
Sort newest orders first
*/
function sortOrdersByDate() {

    orders.sort((a, b) => {

        return (
            new Date(b.orderDate) -
            new Date(a.orderDate)
        );

    });
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

        const vatAmount =
            calculateVAT(order.price);

        const formattedDate =
            formatOrderDate(order.orderDate);

        const daysAgo =
            getDaysAgo(order.orderDate);

        const recentOrder =
            isRecentOrder(order.orderDate);

        const card =
            document.createElement("div");

        card.className = recentOrder
            ? "bg-green-50 border-2 border-green-500 rounded-xl p-4 shadow"
            : "bg-slate-50 border rounded-xl p-4 shadow";

        card.innerHTML = `
        
            <h3 class="font-bold text-lg mb-3">
                ${order.orderId}
            </h3>

            ${recentOrder
                ? `
                <span
                    class="inline-block bg-green-600 text-white px-3 py-1 rounded text-xs mb-3">
                    Recent Order
                </span>
                `
                : ""
            }

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
                R${Number(order.price).toFixed(2)}
            </p>

            <p>
                <strong>VAT (15%):</strong>
                R${vatAmount.toFixed(2)}
            </p>

            <p>
                <strong>Order Date:</strong>
                ${formattedDate}
            </p>

            <p>
                <strong>Days Ago:</strong>
                ${daysAgo}
            </p>
        
        `;

        ordersContainer.appendChild(card);

    });
}

/*
=================================================
Render Statistics
=================================================
*/

function renderStatistics() {

    const statisticsContainer =
        document.getElementById(
            "statisticsContainer"
        );

    const totalValue =
        calculateTotalValue();

    const averagePrice =
        calculateAveragePrice();

    const highestPrice =
        getHighestPrice();

    const lowestPrice =
        getLowestPrice();

    const totalVAT =
        calculateVAT(totalValue);

    const recentOrders =
        orders.filter(order =>
            isRecentOrder(order.orderDate)
        ).length;

    statisticsContainer.innerHTML = `
    
        <div class="bg-blue-100 p-4 rounded-lg">
            <h3 class="font-bold">
                Total Value
            </h3>

            <p class="text-xl">
                R${totalValue.toFixed(2)}
            </p>
        </div>

        <div class="bg-green-100 p-4 rounded-lg">
            <h3 class="font-bold">
                Average Price
            </h3>

            <p class="text-xl">
                R${averagePrice.toFixed(2)}
            </p>
        </div>

        <div class="bg-yellow-100 p-4 rounded-lg">
            <h3 class="font-bold">
                Highest Price
            </h3>

            <p class="text-xl">
                R${highestPrice.toFixed(2)}
            </p>
        </div>

        <div class="bg-red-100 p-4 rounded-lg">
            <h3 class="font-bold">
                Lowest Price
            </h3>

            <p class="text-xl">
                R${lowestPrice.toFixed(2)}
            </p>
        </div>

        <div class="bg-purple-100 p-4 rounded-lg">
            <h3 class="font-bold">
                VAT (15%)
            </h3>

            <p class="text-xl">
                R${totalVAT.toFixed(2)}
            </p>
        </div>

        <div class="bg-indigo-100 p-4 rounded-lg">
            <h3 class="font-bold">
                Recent Orders
            </h3>

            <p class="text-xl">
                ${recentOrders}
            </p>
        </div>
    
    `;
}

/*
=================================================
Application Startup
=================================================
*/

sortOrdersByDate();

renderOrders();

renderStatistics();