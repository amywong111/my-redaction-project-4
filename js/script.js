// script.js
let originalText = '';

document.getElementById('redactButton').addEventListener('click', () => {
    const inputElement = document.getElementById('inputText');
    const outputElement = document.getElementById('outputText');
    originalText = inputElement.value;
    let inputText = originalText;

    // Regular expression to find figures (numbers with or without commas and dollar sign)
    const figureRegex = /\$\d[\d,]*(\.\d+)?|\d[\d,]*(\.\d+)?/g;
    // Replace matched figures with [REDACTED]
    let redactedText = inputText.replace(figureRegex, '[REDACTED]');

    // Update the input and output elements with redacted content
    inputElement.value = redactedText;
    outputElement.value = redactedText;
});

document.getElementById('restoreButton').addEventListener('click', () => {
    const outputElement = document.getElementById('outputText');
    // Restore the original text in the output element
    outputElement.value = originalText;
});