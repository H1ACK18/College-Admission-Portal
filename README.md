<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>College Management Portal</title>
    <link rel="stylesheet" href="styles.css">
    <script src="script.js" defer></script>
</head>

<body>
    <header>
        <h1>College Management Portal</h1>
        <nav>
            <ul>
                <li><a href="#admissions">Admission</a></li>
                <li><a href="#fees">Fee Payment</a></li>
                <li><a href="#scholarships">Scholarships</a></li>
                <li><a href="#wallet">Wallet</a></li>
                <li><a href="#services">Student Services</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <!-- Admission Section -->
        <section id="admissions">
            <h2>Admission Application</h2>
            <form id="admission-form">
                <label for="student-name">Full Name:</label>
                <input type="text" id="student-name" name="student-name" required>

                <label for="student-email">Email Address:</label>
                <input type="email" id="student-email" name="student-email" required>

                <label for="documents-upload">Upload Documents:</label>
                <input type="file" id="documents-upload" name="documents-upload" multiple required>

                <button type="submit" class="submit-btn">Submit Application</button>
            </form>
        </section>

        <!-- Fee Payment Section -->
        <section id="fees">
            <h2>Pay Fees</h2>
            <form id="fee-form">
                <label for="student-id">Student ID:</label>
                <input type="text" id="student-id" name="student-id" required>

                <label for="fee-amount">Amount:</label>
                <input type="number" id="fee-amount" name="fee-amount" required>

                <button type="submit" class="submit-btn">Generate Receipt</button>
            </form>
            <div id="fee-receipt-section">
                <h3>Your Payment Receipt</h3>
                <p id="fee-receipt"></p>
            </div>
        </section>

        <!-- Scholarships Section -->
        <section id="scholarships">
            <h2>Apply for Scholarships</h2>
            <p>Choose from available scholarships and submit your application.</p>
            <form id="scholarship-form">
                <label for="scholarship-id">Scholarship ID:</label>
                <input type="text" id="scholarship-id" name="scholarship-id" required>
                <button type="submit" class="submit-btn">Apply Now</button>
            </form>
        </section>

        <!-- Payment Wallet Section -->
        <section id="wallet">
            <h2>Manage Wallet</h2>
            <form id="wallet-form">
                <label for="wallet-id">Wallet ID:</label>
                <input type="text" id="wallet-id" name="wallet-id" required>

                <label for="payment-amount">Amount:</label>
                <input type="number" id="payment-amount" name="payment-amount" required>

                <label for="payment-reason">Payment Reason:</label>
                <select id="payment-reason" name="payment-reason">
                    <option value="fine">Fine Payment</option>
                    <option value="late-fee">Late Fee</option>
                    <option value="journals">Journals Payment</option>
                    <option value="form">Form Fees</option>
                </select>

                <button type="submit" class="submit-btn">Proceed with Payment</button>
            </form>
        </section>

        <!-- Student Services Section -->
        <section id="services">
            <h2>Student Assistance</h2>
            <p>Need assistance? Submit your queries here.</p>
            <form id="query-form">
                <label for="query">Your Query:</label>
                <textarea id="query" name="query" required></textarea>
                <button type="submit" class="submit-btn">Submit Query</button>
            </form>
        </section>
    </main>

    <footer>
        <p>&copy; 2025 College Management Portal. All Rights Reserved.</p>
    </footer>
</body>

</html>
