const openAi = require("../libs/open_ai.js");

const reply = async ({ text }) => {
  return await openAi({
    prompt: `Reply the following email "${text}"`,
    length: text.length,
  });
};

module.exports = reply;
