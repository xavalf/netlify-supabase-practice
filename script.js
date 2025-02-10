document.getElementById('fetchData').addEventListener('click', async () => {
    const response = await fetch('https://netlify-supabase-practice.onrender.com');  // Cambia esto por la URL de tu servidor

    if (response.ok) {
        const data = await response.json();
        const container = document.getElementById('dataContainer');
        container.innerHTML = JSON.stringify(data, null, 2);
    } else {
        console.error('Error al obtener los datos:', response.status, response.statusText);
        const container = document.getElementById('dataContainer');
        container.innerHTML = `Error: ${response.status} ${response.statusText}`;
    }
});
