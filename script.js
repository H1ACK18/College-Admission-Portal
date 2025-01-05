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
// Smooth scroll for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
