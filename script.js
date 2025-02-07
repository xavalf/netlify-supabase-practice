document.getElementById('fetchData').addEventListener('click', async () => {
    const response = await fetch('https://kcoukdhkpxcjrndbcrla.supabase.co', {
        headers: {
            'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtjb3VrZGhrcHhjanJuZGJjcmxhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg5MTg2OTQsImV4cCI6MjA1NDQ5NDY5NH0._5oY1SOcPF-olH9o9lQlqbwTQNutStYqXpDzQn6DLjg',
            'Authorization': 'Bearer your-supabase-api-key'
        }
    });

    const data = await response.json();
    const container = document.getElementById('dataContainer');
    container.innerHTML = JSON.stringify(data, null, 2);
});
