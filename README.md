<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>College Management System</title>
    <link rel="stylesheet" href="styles.css">
    <script src="script.js" defer></script>
</head>
<body>
    <!-- Header Section -->
    <header>
        <div class="logo">
            <h1>College Admission Hub</h1>
            <p>Education Technology Trends and Innovation</p>
        </div>
        <nav>
            <ul>
                <li><a href="#intro">Introduction</a></li>
                <li><a href="#services">Our Services</a></li>
                <li><a href="#apply">Apply Now</a></li>
                <li><a href="#contact">Contact Us</a></li>
            </ul>
        </nav>
    </header>
    <img src="https://www.tsdcmumbai.in/images/campus/college_building.jpg" alt="My Local Image" width="300">
    <img src="https://content.jdmagicbox.com/v2/comp/mumbai/u3/022pxx22.xx22.200724122123.d1u3/catalogue/thakur-institute-of-hotel-management-mumbai-0kytxjzrig.jpg" alt="My Local Image" width="300">

  <!-- Hero Section -->
    <section id="hero">
        <div class="hero-text">
            <h2>Welcome to the Future of College </h2>
            <p>Efficient, Transparent, and Automated Solutions for Students and Staff</p>
            <a href="#services" class="action-btn">Discover Our Services</a>
        </div>
    </section>

    <!-- Introduction Section -->
    <section id="intro">
        <h2>About the System</h2>
        <p>Our College Management System is designed to simplify administrative tasks, making life easier for both students and faculty. From admission processing to fee management, everything is automated for optimal performance.</p>
        <div class="intro-images">
   <!-- Services Section -->
    <section id="services">
        <h2>Our Core Features</h2>
        <div class="service-cards">
            <div class="service-card">
             <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admission Form</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            padding: 20px;
        }
        .form-container {
            display: none;
            margin-top: 20px;
            padding: 15px;
            border: 1px solid #ddd;
            border-radius: 5px;
            background-color: #fafafa;
        }
        button {
            padding: 12px 24px;
            font-size: 16px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        button:hover {
            background-color: #45a049;
        }
    </style>
</head>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Custom Background</title>
    <style>
        /* General body styling with background color */
        body {
            background-color: #e6f7ff; /* Soft blue shade */
            margin: 0; /* Removes default margins for full-page effect */
            font-family: 'Verdana', sans-serif; /* Sets a clean font style */
        }

        /* Section with a background image */
        .background-section {
            background-image: url('https://via.placeholder.com/1920x1080'); /* Replace with your image URL */
            background-size: cover; /* Stretch image to cover the container */
            background-repeat: no-repeat; /* Avoid repeating the background */
            background-position: center; /* Center the image */
            height: 100vh; /* Full height of the viewport */
            display: flex; /* Allows centering content */
            justify-content: center; /* Centers content horizontally */
            align-items: center; /* Centers content vertically */
            color: #fff; /* White text for visibility */
            text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.6); /* Adds shadow to text for contrast */
        }

        /* Heading styling inside the background section */
        .background-section h1 {
            font-size: 3rem; /* Large, readable text */
            text-align: center;
        }
    </style>
</head>
<body>
    <!-- Section with a custom background image -->
    <div class="background-section">
        <h1>Explore the Possibilities</h1>
    </div>
<body>

    <button onclick="toggleForm()">Apply for Admission</button>

    <div class="form-container" id="admissionForm">
        <h3>Admission Form</h3>
        <form>
            <label for="name">Full Name:</label>
            <input type="text" id="name" name="name" required><br><br>

            <label for="email">Email Address:</label>
            <input type="email" id="email" name="email" required><br><br>

            <label for="contact">Contact Number:</label>
            <input type="tel" id="contact" name="contact" required><br><br>

            <button type="submit">Submit</button>
        </form>
  <script>
        function toggleForm() {
            var form = document.getElementById('admissionForm');
            if (form.style.display === 'none' || form.style.display === '') {
                form.style.display = 'block';
            } else {
                form.style.display = 'none';
            }
        }
    </script>
                <h3>Streamlined Admissions</h3>
                <p>Automated application processing to save time and reduce errors. Upload documents, track application status, and receive instant updates.</p>
         <div class="service-card">
               <h3>Fee Management</h3>
                <p>Effortlessly track and manage tuition payments, with instant fee receipts and payment history available in your account.</p>
            </div>
            <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fee Management System</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f4f4f9;
        }
        .container {
            width: 60%;
            margin: 0 auto;
        }
        .form-section {
            background-color: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        button {
            padding: 12px 20px;
            font-size: 16px;
            background-color: #28a745;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        button:hover {
            background-color: #218838;
        }
        .receipt {
            margin-top: 20px;
            padding: 20px;
            background-color: #e9f7e9;
            border-radius: 8px;
            border: 1px solid #d4edda;
            display: none;
        }
        .history {
            margin-top: 30px;
        }
        .history table {
            width: 100%;
            border-collapse: collapse;
        }
        .history th, .history td {
            padding: 10px;
            text-align: left;
            border: 1px solid #ddd;
        }
        .history th {
            background-color: #f8f9fa;
        }
    </style>
</head>
<body>

    <div class="container">
        <div class="form-section">
            <h2>Fee Payment</h2>
            <form id="paymentForm">
                <label for="name">Full Name:</label><br>
                <input type="text" id="name" name="name" required><br><br>
                
            <label for="email">Email Address:</label><br>
                <input type="email" id="email" name="email" required><br><br>
                
        <label for="amount">Payment Amount:</label><br>
                <input type="number" id="amount" name="amount" required><br><br>

                <button type="button" onclick="processPayment()">Pay Now</button>
            </form>
        </div>

        <div class="receipt" id="receipt">
            <h3>Payment Receipt</h3>
            <p><strong>Student Name:</strong> <span id="receiptName"></span></p>
            <br>
            <p><strong>Email:</strong> <span id="receiptEmail"></span></p>
            <br>
            <p><strong>Amount Paid:</strong> ₹<span id="receiptAmount"></span></p>
            <br>
            <p><strong>Payment Status:</strong> Success</p>
            <br>
            <p><strong>Transaction ID:</strong> <span id="transactionId"></span></p>
            <br>
        </div>

        <div class="history">
            <h3>Payment History</h3>
            <table id="paymentHistoryTable">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Amount</th>
                        <th>Transaction ID</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- Payment history will be added here -->
                </tbody>
            </table>
        </div>
    </div>

    <script>
        // Function to simulate payment processing
        function processPayment() {
            // Get form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const amount = document.getElementById('amount').value;

            // Simulate a random transaction ID
            const transactionId = 'TXN' + Math.floor(Math.random() * 1000000);

            // Show receipt
            document.getElementById('receiptName').textContent = name;
            document.getElementById('receiptEmail').textContent = email;
            document.getElementById('receiptAmount').textContent = amount;
            document.getElementById('transactionId').textContent = transactionId;
            document.getElementById('receipt').style.display = 'block';

            // Store payment in history
            storePaymentHistory(name, email, amount, transactionId);

            // Clear the form
            document.getElementById('paymentForm').reset();
        }

        // Function to store payment in the history table
        function storePaymentHistory(name, email, amount, transactionId) {
            const table = document.getElementById('paymentHistoryTable').getElementsByTagName('tbody')[0];
            const row = table.insertRow();
            row.insertCell(0).textContent = name;
            row.insertCell(1).textContent = email;
            row.insertCell(2).textContent = amount;
            row.insertCell(3).textContent = transactionId;
        }
    </script>
            <div class="service-card">
                <h3>Scholarship Opportunities</h3>
                <p>Apply for scholarships online and get real-time updates on your application status, eligibility, and award details.</p>
                 <button onclick="toggleQueryForm()">
                <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Service Support</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background-color: #f4f7fa;
            margin: 0;
            padding: 20px;
        }

        .container {
            width: 60%;
            margin: 0 auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
        }

        h2 {
            text-align: center;
            color: #333;
        }

        button {
            background-color: #007BFF;
            color: #fff;
            padding: 12px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
            width: 100%;
        }

        button:hover {
            background-color: #0056b3;
        }

        .form-section {
            display: none;
            margin-top: 20px;
            background-color: #f9f9f9;
            padding: 20px;
            border-radius: 5px;
            border: 1px solid #ddd;
        }

        .response-section {
            display: none;
            margin-top: 20px;
            padding: 20px;
            background-color: #e7f7e7;
            border-radius: 5px;
            border: 1px solid #c9e8c9;
        }

        .response-section p {
            font-size: 16px;
            color: #2e7d32;
        }

        textarea {
            width: 100%;
            padding: 10px;
            font-size: 14px;
            border-radius: 5px;
            border: 1px solid #ddd;
            resize: vertical;
        }
    </style>
</head>
<body>

    <div class="container">
        <h2>Student Service Center</h2>
        <button onclick="toggleQueryForm()">Submit a Query</button>

        <div class="form-section" id="queryForm">
            <h3>Enter Your Query</h3>
            <textarea id="queryInput" placeholder="Please describe your issue or query..." rows="5"></textarea><br><br>
            <button onclick="submitQuery()">Send Query</button>
        </div>

        <div class="response-section" id="responseSection">
            <h3>Response</h3>
            <p id="responseMessage"></p>
        </div>
    </div>

    <script>
        // Toggle visibility of the query form when the button is clicked
        function toggleQueryForm() {
            let form = document.getElementById('queryForm');
            form.style.display = (form.style.display === 'none' || form.style.display === '') ? 'block' : 'none';
        }

        // Process the query submission
        function submitQuery() {
            let query = document.getElementById('queryInput').value;
            if (query.trim() !== "") {
                // Simulate a response message
                let response = "Thank you for reaching out! We will get back to you as soon as possible.";

                // Show the response section with the message
                document.getElementById('responseSection').style.display = 'block';
                document.getElementById('responseMessage').textContent = response;

                // Clear the input field after submission
                document.getElementById('queryInput').value = '';
            } else {
                alert("Please enter a query before submitting.");
            }
        }
    </script>
            <div class="service-card">
                <h3>Digital Wallet</h3>
                <p>Use your virtual wallet to pay fines, late fees, and other college expenses with ease, all in one place.</p>
                <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Payment Wallet</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background-color: #f4f7fa;
            margin: 0;
            padding: 20px;
        }

        .container {
            width: 60%;
            margin: 0 auto;
            padding: 20px;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
        }

        h2 {
            text-align: center;
            color: #333;
        }

        .button {
            background-color: #007BFF;
            color: #fff;
            padding: 15px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
            width: 100%;
        }

        .button:hover {
            background-color: #0056b3;
        }

        .form-section {
            margin-top: 20px;
            background-color: #f9f9f9;
            padding: 20px;
            border-radius: 5px;
            border: 1px solid #ddd;
        }

        .receipt {
            margin-top: 20px;
            padding: 15px;
            background-color: #e9f7f9;
            border-radius: 5px;
            border: 1px solid #bce0f3;
            display: none;
        }

        .receipt p {
            font-size: 16px;
            color: #2e7d32;
        }

        .history {
            margin-top: 20px;
            padding: 15px;
            background-color: #f4f4f9;
            border-radius: 5px;
            border: 1px solid #ddd;
        }

        .history ul {
            list-style: none;
            padding: 0;
        }

        .history li {
            padding: 8px;
            border-bottom: 1px solid #ddd;
        }
    </style>
</head>
<body>

    <div class="container">
        <h2>Payment Wallet</h2>

        <button class="button" onclick="showPaymentForm()">Make a Payment</button>

        <div class="form-section" id="paymentForm" style="display: none;">
            <h3>Enter Payment Details</h3>
            <label for="studentId">Student ID:</label>
            <input type="text" id="studentId" placeholder="Enter Student ID" required><br><br>
            <label for="paymentAmount">Amount to Pay:</label>
            <input type="number" id="paymentAmount" placeholder="Enter Amount" required><br><br>
            <button class="button" onclick="processPayment()">Submit Payment</button>
        </div>

        <div class="receipt" id="receiptSection">
            <h3>Payment Receipt</h3>
            <p id="receiptDetails"></p>
        </div>

        <div class="history" id="paymentHistory">
            <h3>Payment History</h3>
            <ul id="historyList"></ul>
        </div>
    </div>

    <script>
        // Function to show the payment form
        function showPaymentForm() {
            document.getElementById('paymentForm').style.display = 'block';
        }

        // Function to process the payment and generate receipt
        function processPayment() {
            var studentId = document.getElementById('studentId').value;
            var paymentAmount = document.getElementById('paymentAmount').value;

            if (studentId && paymentAmount) {
                // Generate receipt
                var receipt = `Payment of $${paymentAmount} has been successfully made by Student ID: ${studentId}.`;

                document.getElementById('receiptDetails').innerText = receipt;
                document.getElementById('receiptSection').style.display = 'block';

                // Store payment history
                var historyList = document.getElementById('historyList');
                var listItem = document.createElement('li');
                listItem.textContent = `Student ID: ${studentId}, Amount Paid: $${paymentAmount}`;
                historyList.appendChild(listItem);

                // Clear the payment form for next use
                document.getElementById('studentId').value = '';
                document.getElementById('paymentAmount').value = '';
            } else {
                alert("Please fill out both fields to process the payment.");
            }
        }
    </script>
             <!-- Call to Action Section -->
    <section id="cta">
    <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Take Action Today!</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f8f9fa;
        }

        .cta-section {
            background-color: #007BFF;
            color: #ffffff;
            text-align: center;
            padding: 60px;
            margin-top: 60px;
        }

        .cta-section h2 {
            font-size: 40px;
            margin-bottom: 20px;
        }

        .cta-section p {
            font-size: 20px;
            margin-bottom: 30px;
        }

        .cta-button {
            background-color: #ffffff;
            color: #007BFF;
            font-size: 20px;
            padding: 16px 32px;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            text-decoration: none;
        }

        .cta-button:hover {
            background-color: #0056b3;
            color: #ffffff;
        }
    </style>
</head>
<body>

    <div class="cta-section">
        <h2>Get Started Now!</h2>
        <p>Sign up today to enjoy the benefits. Don't miss out on special offers and opportunities.</p>
        <a href="register.html" class="cta-button">Sign Up</a>
    </div>
        <h2>Get Started Today</h2>
        <p>Join the College and experience seamless college administration. Apply now or reach out to us for more details.</p>
        <a href="#apply" class="action-btn">Apply Now</a>
    <!-- Footer Section -->
    <footer id="contact">
        <p>&copy; 2025 College Management Hub. All Rights Reserved.</p>
        <p>For inquiries, contact us at <a href="mailto:info@collegeadmissionhub.com">info@collegeadmissionhub.com</a></p>
    </footer>
</body>

</html>
