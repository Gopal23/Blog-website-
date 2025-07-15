// File: script.js
// Wait for the document to fully load
document.addEventListener("DOMContentLoaded", function () {

    // Select all blog posts and the search input field
    const posts = document.querySelectorAll(".blog-post");
    const searchBar = document.getElementById("searchBar");

    // Handle search input event
    if (searchBar) {
        searchBar.addEventListener("input", () => {
            const query = searchBar.value.toLowerCase(); // Convert user input to lowercase
            posts.forEach(post => {
                const title = post.dataset.title.toLowerCase(); // Get the blog title from data-title attribute
                // Show post if title includes search query, else hide
                post.style.display = title.includes(query) ? "block" : "none";
            });
        });
    }

    // Handle comment form submissions
    const forms = document.querySelectorAll(".comment-form");
    forms.forEach(form => {
        form.addEventListener("submit", function (e) {
            e.preventDefault(); // Prevent form from reloading the page

            // Get user's name and message input values
            const name = this.querySelector("input[name='name']").value;
            const message = this.querySelector("textarea[name='message']").value;
            const commentList = this.previousElementSibling; // Reference the comment list div

            // Create a new div element to display the comment
            const commentDiv = document.createElement("div");
            commentDiv.classList.add("comment");
            commentDiv.innerHTML = `<strong>${name}</strong><p>${message}</p>`;

            // Append new comment to the list
            commentList.appendChild(commentDiv);
            this.reset(); // Clear the form fields after submission
        });
    });
});