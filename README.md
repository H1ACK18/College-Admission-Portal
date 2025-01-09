<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Automated Admission Application</title>
    <link rel="stylesheet" href="style.css">
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f9f9f9;
        }
        header {
            text-align: center;
            background-color: #4CAF50;
            color: white;
            padding: 20px;
        }
        .container {
            max-width: 800px;
            margin: auto;
            background: white;
            padding: 20px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            margin-top: 20px;
            border-radius: 10px;
        }
        form label {
            font-weight: bold;
        }
        form input, form select, form button {
            display: block;
            width: 100%;
            margin-bottom: 20px;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        form button {
            background-color: #4CAF50;
            color: white;
            border: none;
            cursor: pointer;
        }
        form button:hover {
            background-color: #45a049;
        }
        footer {
            text-align: center;
            padding: 10px;
            background-color: #4CAF50;
            color: white;
            position: fixed;
            bottom: 0;
            width: 100%;
        }
        .image-row {
            display: flex;
            justify-content: center;
            gap: 10px;
            margin: 20px 0;
        }
        .image-row img {
            max-width: 30%;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
    </style>
</head>
<body>
    <header>
        <h1>University Admission Application</h1>
        <p>Welcome to the automated admission portal. Apply now for your future!</p>
    </header>

    <div class="image-row">
        <img src="https://via.placeholder.com/300x200" alt="University Building">
        <img src="https://via.placeholder.com/300x200" alt="Graduation Ceremony">
        <img src="https://via.placeholder.com/300x200" alt="Student Life">
    </div>

    <div class="container">
        <form id="admissionForm">
            <label for="name">Full Name:</label>
            <input type="text" id="name" name="name" required>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>

            <label for="course">Course Applying For:</label>
            <select id="course" name="course" required>
                <option value="computer-science">Computer Science</option>
                <option value="business-administration">Business Administration</option>
                <option value="medicine">Medicine</option>
                <option value="law">Law</option>
            </select>

            <label for="documents">Upload Documents (PDF, JPG, PNG):</label>
            <input type="file" id="documents" name="documents" accept=".pdf,.jpg,.png" required>

            <button type="submit">Submit Application</button>
        </form>

        <div id="statusMessage" class="hidden">
            <h2>Application Status</h2>
            <p>Your application has been <strong>submitted successfully</strong>.</p>
            <p>Status: <span id="status">Pending</span></p>
        </div>
    </div>

    <footer>
            <img src="facebook-icon.png" alt="Facebook">
            <img src="instagram-icon.png" alt="Instagram">
            <img src="twitter-icon.png" alt="Twitter">
            <img src="whatsapp-icon.png" alt="WhatsApp">
        <p>&copy; 2025 University Admission Portal</p>
    </footer>

    <script>
        document.getElementById('admissionForm').addEventListener('submit', function(event) {
            event.preventDefault();
            document.getElementById('statusMessage').classList.remove('hidden');
            document.getElementById('status').textContent = "Pending";
            alert("Your application has been submitted! You will receive a response soon.");
            document.getElementById('admissionForm').reset();
        });
    </script>
</body>
</html>
