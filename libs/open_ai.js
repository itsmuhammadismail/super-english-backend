const { Configuration, OpenAIApi } = require("openai");

const openAi = async ({ prompt, length }) => {
  try {
    const configuration = new Configuration({
      apiKey: process.env.API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt,
      temperature: 0.6,
      max_tokens: length,
      top_p: 1,
      frequency_penalty: 1,
      presence_penalty: 1,
    });
    return response.data.choices[0].text;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    } else {
      return error.message;
    }
  }
};

module.exports = openAi;
