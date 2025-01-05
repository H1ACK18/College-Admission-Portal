// Admission Form Submission Simulation
document.getElementById('admission-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Your admission application has been submitted successfully!');
});

// Fee Payment - Generate Receipt
document.getElementById('fee-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const studentId = document.getElementById('student-id').value;
    const amount = document.getElementById('fee-amount').value;

    const receipt = `
        Fee Receipt for Student ID: ${studentId}
        Amount Paid: ₹${amount}
        Date of Payment: ${new Date().toLocaleDateString()}
    `;
    document.getElementById('fee-receipt').textContent = receipt;
});

// Scholarship Application Simulation
document.getElementById('scholarship-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Your scholarship application has been submitted!');
});

// Wallet Payment Simulation
document.getElementById('wallet-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const walletId = document.getElementById('wallet-id').value;
    const amount = document.getElementById('payment-amount').value;
    const reason = document.getElementById('payment-reason').value;

    alert(`You have successfully paid ₹${amount} for ${reason} via Wallet ID: ${walletId}`);
});
/* General Layout */
body {
    font-family: 'Arial', sans-serif;
    background-color: #f9fafb;
    margin: 0;
    padding: 0;
}

/* Header Section */
header {
    background-color: #007acc;
    color: white;
    text-align: center;
    padding: 20px 0;
}

header h1 {
    margin: 0;
    font-size: 32px;
}

nav ul {
    list-style: none;
    padding: 0;
    margin: 10px 0 0;
}

nav ul li {
    display: inline;
    margin: 0 20px;
}

nav ul li a {
    text-decoration: none;
    color: white;
    font-size: 20px;
}

nav ul li a:hover {
    color: #ff6347;
}

/* Main Content Sections */
main {
    padding: 40px 20px;
}

h2 {
    font-size: 26px;
    color: #2f2f2f;
    margin-bottom: 15px;
}

section {
    margin-bottom: 40px;
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

section img {
    width: 100%;
    height: auto;
    border-radius: 10px;
    margin-top: 20px;
}

section p {
    font-size: 18px;
    color: #555;
}

/* Footer Section */
footer {
    background-color: #007acc;
    color: white;
    text-align: center;
    padding: 20px 0;
}

// Student Query Submission Simulation
document.getElementById('query-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Your query has been submitted to student services!');
});
