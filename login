<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login - Personal Finance Manager</title>
    <link rel="stylesheet" href="../css/login.css">
    <style>
        /* Basic Reset */
        body, h1, form {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
        }

        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background: linear-gradient(to right, #6a11cb, #2575fc);
            color: white;
        }

        .login-container {
            background-color: rgba(255, 255, 255, 0.1);
            padding: 40px;
            border-radius: 10px;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
            backdrop-filter: blur(10px);
            width: 100%;
            max-width: 400px;
            text-align: center;
        }

        .login-container h1 {
            margin-bottom: 20px;
            font-size: 2em;
        }

        .login-container label {
            display: block;
            margin-top: 10px;
            font-size: 1em;
        }

        .login-container input {
            width: 100%;
            padding: 10px;
            margin-top: 5px;
            border: none;
            border-radius: 5px;
            outline: none;
        }

        .login-container input:focus {
            box-shadow: 0 0 10px rgba(0, 123, 255, 0.5);
        }

        .login-container button {
            margin-top: 20px;
            padding: 12px 20px;
            background-color: #4caf50;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 1em;
            transition: background-color 0.3s;
            width: 100%;
        }

        .login-container button:hover {
            background-color: #45a049;
        }

        .error-message {
            display: none;
            color: #ffcccc;
            margin-top: 10px;
        }

        .footer-link {
            margin-top: 20px;
            font-size: 0.9em;
        }

        .footer-link a {
            color: #add8e6;
            text-decoration: none;
        }
    </style>
</head>
<body>
    <div class="login-container">
        <h1>Login</h1>
        <form id="login-form">
            <label for="username">Username</label>
            <input type="text" id="username" name="username" required>

            <label for="password">Password</label>
            <input type="password" id="password" name="password" required>

            <button type="submit">Login</button>
            <p class="error-message" id="error-msg">Invalid username or password.</p>
        </form>
        <div class="footer-link">
            <p>Don't have an account? <a href="register.html">Register here</a></p>
        </div>
    </div>

    <script>
        // Login validation (basic example)
        document.getElementById('login-form').addEventListener('submit', function(event) {
            event.preventDefault();

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Dummy validation for illustration purposes
            if (username === 'user' && password === 'password') {
                // Redirect to community page
                window.location.href = './index.html';
            } else {
                document.getElementById('error-msg').style.display = 'block';
            }
        });

        // Check if redirected from "Join Community"
        document.addEventListener('DOMContentLoaded', function() {
            const urlParams = new URLSearchParams(window.location.search);
            if (urlParams.has('redirect') && urlParams.get('redirect') === 'community') {
                alert('Please log in to access the community forum.');
            }
        });
    </script>
</body>
</html>
