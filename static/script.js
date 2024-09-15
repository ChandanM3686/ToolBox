function filterTools() {
    const search = document.getElementById('search').value.toLowerCase();
    const cards = document.querySelectorAll('.tool-card');
    
    cards.forEach(card => {
        const title = card.querySelector('h2').textContent.toLowerCase();
        if (title.includes(search)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function filterCategory(category) {
    const cards = document.querySelectorAll('.tool-card');
    
    cards.forEach(card => {
        const title = card.querySelector('h2').textContent.toLowerCase();
        if (category === 'all' || title.includes(category)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}
