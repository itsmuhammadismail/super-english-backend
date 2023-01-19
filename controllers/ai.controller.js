const asyncHandler = require("express-async-handler");
const translator = require("../functions/translator.js");
const changeTone = require("../functions/change_tone.js");
const reply = require("../functions/reply.js");

// @desc    Tranlate to another language
// @route   POST /api/ai/translate
// @access  Private
const tranlateController = asyncHandler(async (req, res) => {
  const { language, text } = req.body;
  let translatedText = await translator({ language, text });
  res.status(200).json({
    status: true,
    text: translatedText,
  });
});

// @desc   Change the tone of email
// @route   POST /api/ai/change_tone
// @access  Private
const changeToneController = asyncHandler(async (req, res) => {
  const { tone, text } = req.body;
  let changedText = await changeTone({ tone, text });
  res.status(200).json({
    status: true,
    text: changedText,
  });
});

// @desc   Change the tone of email
// @route   POST /api/ai/reply
// @access  Private
const replyController = asyncHandler(async (req, res) => {
  const { text } = req.body;
  let repliedText = await reply({ text });
  res.status(200).json({
    status: true,
    text: repliedText,
  });
});

module.exports = {
  tranlateController,
  changeToneController,
  replyController,
};
