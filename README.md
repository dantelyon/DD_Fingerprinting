
## MirrorFP

**Where?** [Live demo](https://dd-mirrorfp.netlify.app/)

**What?** MirrorFP is a proof-of-concept for web personalization based on browser fingerprinting techniques and other data points.

**Why?** The idea for MirrorFP came from learning about 'device/browser fingerprinting'. The first version simply showcased the results of all the different types of fingerprinting techniques that I had collected – both from researching the topic and from just thinking about this a lot. Later on I learned about personalization and decided to pivot MirrorFP in that direction.

**How?** Built with React and CSS. The code was initially written in vanilla JS but was reworked to React because of all the client-side state involved.

**Main difficulty?** 
+ Compatibility. Each { browser, device, platform } has its own way of handling implementations of different features, in terms of syntax, permissions, etc. For instance, one month a technique would work in all browsers, and then the next month it would break in Chromium browsers, while still functioning in the others.
+ Determining the value of each data point. There's a need to evaluate – in addition to if and how a technique works – what the value each technique has for the purpose of personalization.

**License:** [MIT](https://choosealicense.com/licenses/mit/)
