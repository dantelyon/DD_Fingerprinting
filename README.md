
## MirrorFP
------------

**Where?** [Live demo](http://example.com/)

**What?** MirrorFP is a proof-of-concept for web personalization based on browser fingerprinting techniques and other data points. It's a web-based fingerprinting tool for the purpose of personalization.

**Why?** The idea for the project came from learning about 'device/browser fingerprinting'. The first version of the project simply showcased all the different types of fingerprinting techniques that I had collected, both from researching the topic and from just thinking about this a lot. At some point in the further research I learned about personalization and decided to pivot the project in that direction.

**How?** Built with React and CSS. I initially wrote the code in vanilla JS but ended up reworking everything to React because of all the client-side state involved.

**Main difficulty?** 
+ Compatibility. Each {browser, device, platform} has its own way of handling implementations of different features, and permissions, syntax, etc. One month a technique would work in all browsers, and then the next month it would break in Chromium browsers. Or how some techniques only work on mobile devices, making testing difficult. Or how some vendors are more privacy-oriented than others.
+ Determining value of data points. So not only evaluating if and how a technique works, but also evaluating its value for the purpose of personalization. Examples of low or no value: font detection, plugin detection, incognito detection.

**License:** [MIT](https://choosealicense.com/licenses/mit/)