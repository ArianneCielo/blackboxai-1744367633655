document.getElementById('loginBtn').addEventListener('click', function() {
    window.location.href = 'home.html';
});

document.getElementById('developerBtn').addEventListener('mouseover', function() {
    document.getElementById('developerInfo').classList.remove('hidden');
});

document.getElementById('developerBtn').addEventListener('mouseout', function() {
    document.getElementById('developerInfo').classList.add('hidden');
});

document.getElementById('darkModeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});
