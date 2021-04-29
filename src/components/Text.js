import React from 'react';

class Text extends React.Component {
    render() {
        return (
        <div id="text-content">
            <p>MirrorFP is a web-based fingerprinting tool for the eventual purpose of personalization. The table below is a reflection – a mirror – of your browser data that's useful for this purpose. While your device and browser both provide a large range of data, there's really no need to track and evaluate every little thing. That will only lead to a mess of data. Emphasis has instead, in large part, been placed on data points and fingerprinting techniques that are behavioral and/or dynamic, as these tend to yield a higher value for personalization. {!this.props.showingAbout && <span>For more information, see the <button className="link-button" onClick={this.props.showAbout}>About</button> page.</span>}</p>
            
            {this.props.showingAbout && <div>
                <p>A better understanding of MirrorFP requires, at the very least, familiarity with two concepts: <em>fingerprinting</em> and <em>personalization</em>.</p>

                <h2>Fingerprinting</h2>

                <p>Fingerprinting of browsers and devices is simply the collection of data in order to create a nuanced and possibly unique picture of the user – a digital fingerprint. Each point of data (e.g. timezone or OS) may be insignificant on its own, but when combined with other data points, a distinct profile of the individual user is formed.</p>

                <p>With humans being creatures of habit and routine, the created user-profile is an aggregate of behavioral data that's relatively stable over time. You may be markedly different from who you were ten years ago, but on a day-to-day or even monthly basis you're mostly the same person. And by looking at this aggregate of data – of which changes are gradual and consistent – one can infer who the user is; their identity, behaviors, their current needs and desires, as well as estimate their future states and actions.</p>
                
                <p>Fingerprinting is most commonly used for marketing and targeted advertising, for tracking and identifying users across sessions and devices, and for cybersecurity measures, such as account security, bot detection, and preventing identity theft. MirrorFP's sole use, however, is personalization.</p>

                <h2>Personalization</h2>
                
                <p>A diverse set of users means the need for a diverse set of user-content and user-experiences. When personalizing a product or service, the presentation is customized to better fit the personal needs and preferences of the user – instead of the more traditional approach of presenting a single and broad experience. Personalization allows you to serve your users with an experience that's more relevant for them.</p>

                <p>Practically and effectively, personalization targets not the individual user, but rather a cohort or a combination of cohorts that the user is part of. A cohort is basically just a group of users that all share similar trait(s).</p>
                
                <p>In the context of websites, personalization involves using the collected data to deliver web content that is dynamic and adaptive, instead of just generic and static. For instance, personalized changes can be made to the website design – from minor changes like the colors, images, and text descriptions, to larger changes such as the landing page or separate components. Additional examples of website personalization are access to certain features, displaying different products, or giving personal offers and suggestions.</p>
            </div>}
        </div>
        )
    }
}

export default Text