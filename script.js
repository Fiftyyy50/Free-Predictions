document.addEventListener('DOMContentLoaded', function() {
    fetch('predictions.json')
        .then(response => response.json())
        .then(data => {
            const predictionsContainer = document.getElementById('predictions');
            data.forEach(item => {
                const div = document.createElement('div');
                div.className = 'prediction';
                div.innerHTML = `<h2>${item.match}</h2><p>Прогноза: ${item.prediction}</p>`;
                predictionsContainer.appendChild(div);
            });
        })
        .catch(error => console.error('Error loading predictions:', error));
});