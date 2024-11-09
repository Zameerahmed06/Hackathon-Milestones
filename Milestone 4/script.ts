// get reference to the form and display area

const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement= document.getElementById('resume-display') as HTMLDivElement;

// Handle form submission
form.addEventListener('submit',(event:Event) => {
    event.preventDefault(); // prevent page reload

    // collect input values
    const name  = (document.getElementById('name') as HTMLInputElement).value
    const email  = (document.getElementById('email') as HTMLInputElement).value
    const phone  = (document.getElementById('phone') as HTMLInputElement).value
    const education = (document.getElementById('education') as HTMLInputElement).value
    const experience  = (document.getElementById('experience') as HTMLInputElement).value
    const skills = (document.getElementById('skills') as HTMLInputElement).value

    // Generate the resume content dynamically
    const resumeHtml = `
    <h2><b> Editable Resume</b></h2>
    <h3>Peresonal Information</h3>
    <p><b>Name:</b><span contenteditable="True">${name}</span></p>
    <p><b>Email:</b><span contenteditable="True"> ${email}</span></p>        
    <p><b>Phone:</b><span contenteditable="True"> ${phone}</span></p>
    
    <h3>Education</h3>
    <p contenteditable="True">${education}</p>
    
    <h3>Experience</h3>
    <p contenteditable="True">${experience}</p>
    
    <h3>Skills</h3>
    <p contenteditable="True">${skills}</p>
    `;

    // Display the resume generated
   if(resumeDisplayElement){
    resumeDisplayElement.innerHTML = resumeHtml
    } else {
    console.log('Resume display element not found');
   }
});