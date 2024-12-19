const fetchButton = document.getElementById('fetchButton');
const ipInput = document.getElementById('ipInput');
const ipTableBody = document.querySelector('#ipTable tbody');

fetchButton.addEventListener('click', async () => {
    const ip = ipInput.value.trim();
    const token = "cbd368775a4633"; 

    if (!ip) {
        alert('Por favor, coloque um endereço de IP válido!');
        return;
    }

    try {
        const response = await fetch(`https://ipinfo.io/${ip}/json?token=${token}`);

        if (!response.ok) {
            throw new Error('Erro ao buscar informações do IP.');
        }

        const data = await response.json();

        ipTableBody.innerHTML = '';

        for (const [key, value] of Object.entries(data)) {
            const row = document.createElement('tr');
            row.innerHTML = `<td>${key}</td><td>${value}</td>`;
            ipTableBody.appendChild(row);
        }
    } catch (error) {
        alert(`Error: ${error.message}`);
    }
});
