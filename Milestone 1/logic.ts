const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement;
const skills = document.getElementById('skills') as HTMLButtonElement;

toggleButton.addEventListener('click', () => {
  skills.style.display = skills.style.display === 'none' ? 'block' : 'none';
});