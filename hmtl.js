<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Library Management</title>
</head>
<body>
    <h1>Library Management System</h1>
    <div id="books"></div>

    <br>

    <label for="bookName">Book Name:</label>
    <input type="text" id="bookName" placeholder="Enter book name">
    <label for="author">Author:</label>
    <input type="text" id="author" placeholder="Enter author name">
    <button onclick="addBook()">Add Book</button>

    <script>
        let books = []; // Array to store book objects

        function addBook() {
            const bookName = document.getElementById("bookName").value;
            const author = document.getElementById("author").value;

            if (bookName && author) { // Check if both fields are filled
                books.push({ name: bookName, author: author }); // Add book object
                displayBooks(); // Update book list
                document.getElementById("bookName").value = ""; // Clear input fields
                document.getElementById("author").value = "";
            } else {
                alert("Please fill both book name and author!");
            }
        }

        function displayBooks() {
            const bookList = document.getElementById("books");
            bookList.innerHTML = ""; // Clear previous list

            if (books.length > 0) {
                bookList.innerHTML = "<h3>Available Books:</h3>";
                let bookString = "<ul>";
                for (const book of books) {
                    bookString += `<li>${book.name} by ${book.author}</li>`;
                }
                bookString += "</ul>";
                bookList.innerHTML += bookString;
            } else {
                bookList.innerHTML = "No books available yet.";
            }
        }
    </script>
</body>
</html>
