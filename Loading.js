const message = ' v1.7 - Loading...';

// Update header text
const headerElement = document.querySelector('#header');
headerElement.innerHTML = message;

// Log to console
console.log(message);

alert('Loading...');

setTimeout(function () {
  alert('Done Continue Your Action');
  // Remove the message from the header after 1000 milliseconds
  headerElement.innerHTML = ''; // Clears the message from the header
  // You can add additional code to execute after the message disappears here.
  const showcontent = 'Hello welcome to my website coming soon!';
  console.log(showcontent);
  const bodyElement = document.querySelector('#header');
  headerElement.innerHTML = showcontent;
}, 1000);
