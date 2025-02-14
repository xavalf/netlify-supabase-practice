const supabaseUrl = 'https://kcoukdhkpxcjrndbcrla.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtjb3VrZGhrcHhjanJuZGJjcmxhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg5MTg2OTQsImV4cCI6MjA1NDQ5NDY5NH0._5oY1SOcPF-olH9o9lQlqbwTQNutStYqXpDzQn6DLjg';
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const signUpButton = document.getElementById('signUp');
const logInButton = document.getElementById('logIn');
const logOutButton = document.getElementById('logOut');
const fetchDataButton = document.getElementById('fetchData');
const dataContainer = document.getElementById('data-container');
const dataDisplay = document.getElementById('data');

// Función para registrar usuarios
signUpButton.addEventListener('click', async () => {
    const email = emailInput.value;
    const password = passwordInput.value;
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) {
        alert(`Error: ${error.message}`);
    } else {
        alert('¡Registro exitoso! Revisa tu correo para confirmar tu cuenta.');
    }
});

// Función para iniciar sesión
logInButton.addEventListener('click', async () => {
    const email = emailInput.value;
    const password = passwordInput.value;
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
        alert(`Error: ${error.message}`);
    } else {
        alert('Inicio de sesión exitoso.');
        toggleAuthState(true);
    }
});

// Función para cerrar sesión
logOutButton.addEventListener('click', async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
        alert(`Error: ${error.message}`);
    } else {
        alert('Sesión cerrada.');
        toggleAuthState(false);
    }
});

// Función para obtener datos
fetchDataButton.addEventListener('click', async () => {
    const { data, error } = await supabase.from('example_table').select('*');
    if (error) {
        dataDisplay.innerHTML = `Error: ${error.message}`;
    } else {
        dataDisplay.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
    }
});

// Función para actualizar la UI según el estado de autenticación
const toggleAuthState = (isLoggedIn) => {
    document.getElementById('auth-container').style.display = isLoggedIn ? 'none' : 'block';
    dataContainer.style.display = isLoggedIn ? 'block' : 'none';
};

// Verificar el estado de autenticación al cargar la página
supabase.auth.getUser().then(({ data: { user } }) => {
    toggleAuthState(!!user);
});
