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
            <img src="https://thakureducation.org/images/updated_logo/TCSC.png" alt="Campus Image" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwWDh0Y72atIEvlRqxHmcUu2mk7CvTPsf2MA&s.png" alt="Student Group" />
        </div>
    </section>

    <!-- Services Section -->
    <section id="services">
        <h2>Our Core Features</h2>
        <div class="service-cards">
            <div class="service-card">
                <img src="data:image/png;base64,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.png" alt="Admission Process" />
                <h3>Streamlined Admissions</h3>
                <p>Automated application processing to save time and reduce errors. Upload documents, track application status, and receive instant updates.</p>
            </div>
            <div class="service-card">
                <img src="[payment-icon](https://static.thenounproject.com/png/1517980-200.png).png" alt="Payments" />
                <h3>Fee Management</h3>
                <p>Effortlessly track and manage tuition payments, with instant fee receipts and payment history available in your account.</p>
            </div>
            <div class="service-card">
                <img src="[scholarship-icon](https://cdn-icons-png.freepik.com/256/15175/15175645.png?semt=ais_hybrid).png" alt="Scholarships" />
                <h3>Scholarship Opportunities</h3>
                <p>Apply for scholarships online and get real-time updates on your application status, eligibility, and award details.</p>
            </div>
            <div class="service-card">
                <img src="[wallet-icon](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA6aSklaNe7cn9dVjP6fkTj2YwdQmRFUUWNQ&s).png" alt="Digital Wallet" />
                <h3>Digital Wallet</h3>
                <p>Use your virtual wallet to pay fines, late fees, and other college expenses with ease, all in one place.</p>
            </div>
        </div>
    </section>

    <!-- Call to Action Section -->
    <section id="cta">
        <h2>Get Started Today</h2>
        <p>Join the College Management Hub and experience seamless college administration. Apply now or reach out to us for more details.</p>
        <a href="#apply" class="action-btn">Apply Now</a>
    </section>

    <!-- Footer Section -->
    <footer id="contact">
        <p>&copy; 2025 College Management Hub. All Rights Reserved.</p>
        <p>For inquiries, contact us at <a href="mailto:info@collegehub.com">info@collegehub.com</a></p>
    </footer>
</body>

</html>
