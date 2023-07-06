// https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event
document.addEventListener("DOMContentLoaded", () => {
  console.log("basic-auth JS imported successfully!");
});

const notification = document.getElementById("notification");

// Function to show the notification message
function showNotification() {
  // Set the content of the notification
  notification.textContent = "Added to cart";
  // Show the notification element
  notification.style.display = "block";
  notification.style.color = "red";
  notification.style.position = "absolute";
  // Set a timeout to hide the notification after 3 seconds
  setTimeout(() => {
    notification.style.display = "none";
  }, 9000);
}
