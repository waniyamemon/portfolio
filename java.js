// theme toggle button aur body select krna
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// check if user choose any mode
if (localStorage.getItem('theme') === 'dark') {
	body.classList.add('dark-mode');
	themeToggle.textContent = '☀️'
}

// button click krne pai mode toggle hona
themeToggle.addEventListener('click', () => {
	body.classList.toggle('dark-mode');

	// checking that dark mode is on or off
	if (body.classList.contains('dark-mode')) {
		themeToggle.textContent = '☀️';
		localStorage.setItem('theme', 'dark');
	}
	else{
		themeToggle.textContent = '🌙';
		localStorage.setItem('theme', 'light');
	}
})