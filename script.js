document.getElementById('fetchData').addEventListener('click', async () => {
    try {
        const response = await fetch('https://kcoukdhkpxcjrndbcrla.supabase.co/rest/v1/example_table', {
            headers: {
                'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtjb3VrZGhrcHhjanJuZGJjcmxhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg5MTg2OTQsImV4cCI6MjA1NDQ5NDY5NH0._5oY1SOcPF-olH9o9lQlqbwTQNutStYqXpDzQn6DLjg',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtjb3VrZGhrcHhjanJuZGJjcmxhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg5MTg2OTQsImV4cCI6MjA1NDQ5NDY5NH0._5oY1SOcPF-olH9o9lQlqbwTQNutStYqXpDzQn6DLjg',
                'Content-Type': 'application/json'
            },
            mode: "cors"
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const container = document.getElementById('dataContainer');
        container.innerHTML = JSON.stringify(data, null, 2);
    } catch (error) {
        console.error('Error fetching data:', error);
        const container = document.getElementById('dataContainer');
        container.innerHTML = `Error: ${error.message}`;
    }
});
