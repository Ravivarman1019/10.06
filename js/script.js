// Get the countdown div
var countdownElement = document.getElementById('countdown');

// Function to update the countdown element
var updateCountdown = function(number, callback) {
    countdownElement.innerHTML = number;
    setTimeout(callback, 1000);
};

// Start the countdown with callback hell
updateCountdown(10, function() {
    updateCountdown(9, function() {
        updateCountdown(8, function() {
            updateCountdown(7, function() {
                updateCountdown(6, function() {
                    updateCountdown(5, function() {
                        updateCountdown(4, function() {
                            updateCountdown(3, function() {
                                updateCountdown(2, function() {
                                    updateCountdown(1, function() {
                                        setTimeout(function() {
                                            countdownElement.innerHTML = "Happy Independence Day";
                                        }, 1000);
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});
