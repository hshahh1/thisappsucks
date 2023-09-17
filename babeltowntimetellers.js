// Create a new Date object to get the current date and time
const currentTime = new Date();

// Extract hours, minutes, and seconds from the Date object
const hours = currentTime.getHours();
const minutes = currentTime.getMinutes();
const seconds = currentTime.getSeconds();

// Determine whether it's morning or afternoon
const period = hours < 12 ? 'AM' : 'PM';

// Convert hours to 12-hour format
const formattedHours = hours % 12 === 0 ? 12 : hours % 12;

// Create a string to display the time
const timeString = `${formattedHours}:${minutes}:${seconds} ${period}`;

// Display the time
console.log(`The current time is: ${timeString}`);