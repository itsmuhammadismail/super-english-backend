const openAi = require("../libs/open_ai.js");

const translator = async ({ language, text }) => {
  return await openAi({
    prompt: `translate the following text in ${language} "${text}"`,
    length: text.length + 10,
  });
};

module.exports = translator;
