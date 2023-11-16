function handleInput(event) {
    fetch('http://linserv1.cims.nyu.edu:10001/api/frameworks?language=' + this.value)
        .then(function(response) {
            return response.text();
        })
        .then(function(data) {
            const parsedData = JSON.parse(data);
            document.querySelector('p').textContent = parsedData.framework;
        });
}
const language = document.querySelector('select');
language.addEventListener('input', handleInput);