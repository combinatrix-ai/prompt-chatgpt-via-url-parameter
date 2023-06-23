# Prompt ChatGPT via URL Parameter

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Summary

With this Chrome Extension installed, you can input the initial prompt for the OpenAI ChatGPT via a URL parameter.

## Example

- Open this link [https://chat.openai.com/?q=hello](https://chat.openai.com/?q=hello) in your browser with this extension installed.
- You will see the query text (in this example, "hello") is automatically typed into the textarea:

![image.png](https://github.com/hmirin/prompt-chatgpt-via-url-parameter/assets/1284876/9687a085-62c7-4a43-9263-960f9911d831)

- Known limitations (I may fix this in the future but if you have any ideas, contributions are more than welcome!):
  - You need to press space or some other key to enable the send button. This might be due to the button's behavior being tied to keystroke events. 
  - If you send a multiline prompt, it will initially appear in a single-line textbox. As a result, part or all of your input text will be hidden until you press the spacebar or another key, which will then notify the page that your text spans multiple lines.
- Note: You can specify the GPT-4 model using a URL parameter (this is a default feature of OpenAI). You can safely specify the model and query at the same time like this: [https://chat.openai.com/?model=gpt-4&q=hello](https://chat.openai.com/?model=gpt-4&q=hello)

## Install

You can install the extension manually by downloading the source code and loading it as an unpacked extension.

Note: This extension is not published on the Chrome Web Store yet.
