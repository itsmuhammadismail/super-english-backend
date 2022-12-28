const openAi = require("../libs/open_ai.js");

const changeTone = async ({ tone, text }) => {
  return await openAi({
    prompt: `convert the following email in ${tone} email "${text}"`,
    length: text.length + 500,
  });
};

module.exports = changeTone;
