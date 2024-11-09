// get reference to the form and display area
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent page reload
    // collect input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Generate the resume content dynamically
    var resumeHtml = "\n    <h2><b> Editable Resume</b></h2>\n    <h3>Peresonal Information</h3>\n    <p><b>Name:</b><span contenteditable=\"True\">".concat(name, "</span></p>\n    <p><b>Email:</b><span contenteditable=\"True\"> ").concat(email, "</span></p>        \n    <p><b>Phone:</b><span contenteditable=\"True\"> ").concat(phone, "</span></p>\n    \n    <h3>Education</h3>\n    <p contenteditable=\"True\">").concat(education, "</p>\n    \n    <h3>Experience</h3>\n    <p contenteditable=\"True\">").concat(experience, "</p>\n    \n    <h3>Skills</h3>\n    <p contenteditable=\"True\">").concat(skills, "</p>\n    ");
    // Display the resume generated
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHtml;
    }
    else {
        console.log('Resume display element not found');
    }
});
