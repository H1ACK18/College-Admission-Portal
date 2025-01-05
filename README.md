# College-Management-System-2025
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>College Management System</title>
    <link rel="stylesheet" href="styles.css">
</head>

<body>
    <header>
        <h1>College Management System</h1>
        <nav>
            <ul>
                <li><a href="#admissions">Admissions</a></li>
                <li><a href="#fee-management">Fee Management</a></li>
                <li><a href="#student-services">Student Services</a></li>
                <li><a href="#wallet">Payment Wallet</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="admissions">
            <h2>Admission Portal</h2>
            <form id="admission-form">
                <label for="full-name">Full Name:</label>
                <input type="text" id="full-name" name="full-name" required>

                <label for="email-address">Email Address:</label>
                <input type="email" id="email-address" name="email-address" required>

                <label for="uploaded-documents">Upload Required Documents:</label>
                <input type="file" id="uploaded-documents" name="uploaded-documents" multiple required>

                <button type="submit">Apply Now</button>
            </form>
        </section>

        <section id="fee-management">
            <h2>Manage Fees</h2>
            <form id="fee-payment-form">
                <label for="student-id">Student ID:</label>
                <input type="text" id="student-id" name="student-id" required>

                <label for="payment-amount">Payment Amount:</label>
                <input type="number" id="payment-amount" name="payment-amount" required>

                <button type="submit">Make Payment</button>
            </form>
        </section>

        <section id="student-services">
            <h2>Student Support Services</h2>
            <p>Access information on scholarships, raise concerns, and monitor academic performance in one place.</p>
            <a href="services.html">Explore Services</a>
        </section>

        <section id="wallet">
            <h2>Digital Payment Wallet</h2>
            <form id="wallet-transaction-form">
                <label for="wallet-id">Wallet ID:</label>
                <input type="text" id="wallet-id" name="wallet-id" required>

                <label for="payment-purpose">Purpose:</label>
                <select id="payment-purpose" name="payment-purpose">
                    <option value="fine">Fine</option>
                    <option value="late-payment">Late Payment Fee</option>
                    <option value="journals">Journals</option>
                    <option value="form-fees">Additional Form Fees</option>
                </select>

                <label for="transaction-amount">Amount:</label>
                <input type="number" id="transaction-amount" name="transaction-amount" required>

                <button type="submit">Pay Now</button>
            </form>
        </section>
    </main>

    <footer>
        <p>&copy; 2025 College Management System. All Rights Reserved.</p>
    </footer>

    <script src="script.js"></script>
</body>

</html>
