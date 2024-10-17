// Global scope variable
var customerName = 'bob';

// Function to uppercase customerName
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

// Function to set bestCustomer
function setBestCustomer() {
    bestCustomer = 'not bob'; // Declaring a global variable
}

// Function to overwrite bestCustomer
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'; // Changing the global variable
}

// Declaring a constant in global scope
const leastFavoriteCustomer = 'some customer';

// Function to attempt to change leastFavoriteCustomer
function changeLeastFavoriteCustomer() {
    // This will throw an error because leastFavoriteCustomer is a constant
    leastFavoriteCustomer = 'another customer'; // Attempting to change a constant
}

// Example usage
upperCaseCustomerName();
console.log(customerName); // Outputs: BOB

setBestCustomer();
console.log(bestCustomer); // Outputs: not bob

overwriteBestCustomer();
console.log(bestCustomer); // Outputs: maybe bob

try {
    changeLeastFavoriteCustomer(); // This will cause an error
} catch (error) {
    console.error(error.message); // Outputs an error message
}

