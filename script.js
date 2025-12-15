document.addEventListener('DOMContentLoaded', function() {
    fetch('https://raw.githubusercontent.com/GZIST-iFLYTEK/NewbeeNotebooks/main/README.md')
        .then(response => response.text())
        .then(text => {
            const html = marked.parse(text);
            document.getElementById('readme-content').innerHTML = html;
        })
        .catch(error => {
            console.error('Error loading README.md:', error);
            document.getElementById('readme-content').innerHTML = '<p>Error loading README.md</p>';
        });
});

// https://raw.githubusercontent.com/GZIST-iFLYTEK/NewbeeNotebooks/main/README.md