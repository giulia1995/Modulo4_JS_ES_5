export async function fetchData() {
  const apiUrl = "https://jsonplaceholder.typicode.com/users";

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`Errore nella richiesta: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Si è verificato un errore:", error.message);
  }
}
