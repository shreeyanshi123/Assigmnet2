const imagePromptForm = document.getElementById('image-prompt-form');
const generatedImage = document.getElementById('generated-image');

imagePromptForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Simulate image generation by displaying an alert
  const prompt = document.getElementById('image-prompt').value;
  alert(Generating image based on prompt: "${prompt}");

  // Optionally, replace the placeholder image with another image (not AI-generated)
  // generatedImage.src = "new_image.jpg"; // Replace with your image path
});