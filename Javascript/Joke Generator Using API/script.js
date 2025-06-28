const jokeContainer=document.getElementById("joke-container");
const getJoke=document.getElementById("get-joke");
async function fetchJoke() {
  try {
      // Fetch data from API
      const response = await fetch("https://icanhazdadjoke.com/", {
          headers: { "Accept": "application/json" }
      });

      // Handle HTTP errors
      if (!response.ok) {
          throw new Error(`HTTP Error! Status: ${response.status}`);
      }

      // Convert response to JSON
      const data = await response.json();

      // Display joke in the container
      jokeContainer.innerText = data.joke;
  } catch (error) {
      // Handle errors
      jokeContainer.innerText = "Failed to fetch a joke. Try again!";
      console.error("Error fetching joke:", error);
  }
}

// Add event listener to button
getJoke.addEventListener("click", fetchJoke);