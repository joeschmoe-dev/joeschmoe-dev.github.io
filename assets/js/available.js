let isAvailable = true;

function checkAvailability() {
    let statusElement = document.getElementById('availabilityStatus');
    if (isAvailable) {
        statusElement.innerHTML = "<h4 class='h4 service-item-title'>Availability - <b style='color: green; font-size: var(--fs-4);'>Available</b></h4>";
    } else {
        statusElement.innerHTML = "<h4 class='h4 service-item-title'>Availability - <b style='color: red; font-size: var(--fs-4);'>Not Available</b></h4>";
    }
}

// Call the function to display the availability status when the page loads
window.onload = checkAvailability;