// animateText.js
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // Only include letters for randomization

export function animateText(element) {
  let iterations = 0;

  const interval = setInterval(() => {
    element.innerText = element.dataset.value
      .split("")
      .map((letter, index) => {
        // If the character is a bracket, don't randomize it, just return it
        if (letter === "[" || letter === "]") {
          return letter;
        }

        if (index < iterations) {
          return element.dataset.value[index]; // Return the final character if iteration has passed
        }

        return letters[Math.floor(Math.random() * letters.length)]; // Randomize only letters
      })
      .join("");

    if (iterations >= element.dataset.value.length) {
      clearInterval(interval);
    }

    iterations += 1 / 3;
  }, 30);
}