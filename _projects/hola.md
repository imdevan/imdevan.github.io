---
layout: project-page
title: "Hola"
title-color: seafoam
---

<a href="https://github.com/imdevan/hola" class="base--a">Hola</a> was created at <a href="http://mlh.io" class="base--a">MLH</a>'s first self hosted hackathon in Mountain View, California.  

The intent behind the app was to create a way for people to be able to learn a language even if no one one else is able to speak that language. We were able to get the app work with several different languages, such as Spanish, French, and German.

<h3 class="base--h3">For example</h3>

Jeff is a student in high school that want's to learn Spanish.

Jeff's mom sends Jeff a text message to let him know that dinner is ready. The message is received by the server, via the Twilio real-time messaging api. The server then makes a request to the translation service. Once the message is translated it is sent to Jeff's phone as a json object containing the original text and the Spanish translation.  

When Jeff open's the message it will be in Spanish. If Jeff doesn't know what the Spanish phrase he is reading means in English, he can press the help icon on the message in order to see the original message that his mom sent.

If Jeff doesn't know the Spanish phrase, to let his mom know that he will be home soon for dinner, he can type the English phrase he wants to translate and press the translate icon to see what it is in Spanish. However, the app doesn't allow Jeff to send the message until he types the Spanish phrase where the English phrase had been typed. This is so that Jeff can reinforce what the phrase is that he wants to send. In this case both messages are saved and the English phrase that Jeff initially typed is sent to his mom. When looking at the conversation, the Spanish message is shown to Jeff.


<a href="https://github.com/imdevan/hola" class="base--a">
    <span class="project--external-link">
        Checkout the project on github
    </span>
</a>
