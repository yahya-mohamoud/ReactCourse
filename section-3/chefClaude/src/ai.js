import axios from 'axios';

const SYSTEM_PROMPT = `
You are a chef assistant that suggests recipes based on available ingredients.
Respond with a detailed recipe in markdown format using these sections:
## Recipe Name
## Ingredients
## Instructions
## Notes (optional)

Use some of these ingredients: {INGREDIENTS}
You may include common pantry staples if needed.
`;

const HF_ACCESS_TOKEN = import.meta.env.VITE_HF_ACCESS_TOKEN;

export async function getRecipeFromMistral(ingredientsArr) {
  if (!ingredientsArr?.length) {
    return 'Please provide at least one ingredient.';
  }

  // Format as a single instruction string
  const prompt = SYSTEM_PROMPT.replace(
    '{INGREDIENTS}', 
    ingredientsArr.join(', ')
  );

  try {
    const response = await axios.post(
      'https://api-inference.huggingface.co/models/mistralai/Mixtral-8x7B-Instruct-v0.1',
      {
        inputs: prompt,  // Send as plain string
        parameters: {
          max_new_tokens: 1000,
          temperature: 0.7,
          return_full_text: false
        }
      },
      {
        headers: {
          Authorization: `Bearer ${HF_ACCESS_TOKEN}`,
          'Content-Type': 'application/json',
        },
        timeout: 30000
      }
    );

    // Handle different response formats
    let generatedText = '';
    if (Array.isArray(response.data)) {
      generatedText = response.data[0]?.generated_text || '';
    } else if (typeof response.data === 'string') {
      generatedText = response.data;
    } else {
      generatedText = response.data.generated_text || '';
    }

    return generatedText.trim() || 'Could not generate recipe. Please try again.';

  } catch (err) {
    console.error('API Error:', err.response?.data || err.message);
    return 'Recipe service unavailable. Please try again later.';
  }
}