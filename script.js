// script.js
document.getElementById('admission-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Application submitted successfully!');
});

document.getElementById('fee-payment-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Fee payment processed!');
});

document.getElementById('wallet-transaction-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Wallet transaction completed!');
});
