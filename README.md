<h2>On Submitting form</h2>
<p>Show error if Email or checkbox value is blank.<p>
<p>Successful submission: create cookie & auto close the popup.</p>
<p>On Closing the popup a different cookie will be created.</p>
<p>On refresh: if any of the above-created cookies(i.e. successful submission or close) are present, then exit intent popup should not appear.</p>

<h2>Make a mobile version:-</h2>
<p>Text is displaying for mobile version "Please wait for 5 seconds". After 5 seconds popup will display.</p>

<h2>Q1. What is the difference between Cookie / Local Storage / Session Storage?</h2>
<h3>Cookie:- </h3> 
<ol>
<li>We can set the expiration time for each cookie</li>
<li>The 4K limit is for the entire cookie, including name, value, expiry date etc.</li>
<li>The data is sent back to the server for every HTTP request (HTML, images, JavaScript, CSS, etc) to get session value.</li>
</ol>

<h3>Local Storage</h3>
<ol>
<li>The data is not sent back to the server for every HTTP request.</li>
<li>The data stored in localStorage persists until explicitly deleted. Changes made are saved and available for all current and future visits to the site.</li>
</ol>

<h3>Session Storage</h3>
<ol>
<li>Changes are only available per window. Changes made are saved and available for the current page, as well as future visits to the site on the same window. Once the window is closed, the storage is deleted</li>
<li>The data is available only inside the window/tab in which it was set.</li>
<li>The data is not persistent i.e. it will be lost once the window/tab is closed. Like localStorage, it works on same-origin policy. So, data stored will only be available on the same origin.</li>
</ol>

<h2>Q2. What is the significance of, and reason for, wrapping the entire content of a JavaScript source file in a function block?</h2>
<p>The use of functions make your code be a little safer and less exposed to vulnerabilities by not letting outsiders get access to properties or methods that shouldn’t be accessible. To avoid conflict problems when you run different scripts. Another reason for wrapping part of code in function, is in case to need to delay execution (waiting for DOM to ready), with declaring the function as soon as it's assigned to an event listener.</p>.
