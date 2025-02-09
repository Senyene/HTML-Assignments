document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".assignment-btn").forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default link behavior

            const assignmentLink = this.getAttribute("href");
            if (assignmentLink) {
                const newTab = window.open(assignmentLink, "_blank"); // Open in new tab
                if (!newTab) {
                    alert("Popup blocked! Please allow popups for this site.");
                }
            }
        });
    });
});
