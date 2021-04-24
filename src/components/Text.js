import React from 'react';

class Text extends React.Component {
    render() {
        return (
        <div id="text-content">
            <p>MirrorFP is a web-based <em>fingerprinting</em> tool for the purpose of e-commerce <em>personalization</em>. The table shows a reflection, a mirror, of your browser data that's useful for this purpose. The device and browser provide a large range of data, but a lot of it is of little to no value for personalization. Emphasis is for the most part on data points and fingerprinting techniques that provide behavioral and dynamic values. {!this.props.showingAbout && <span>For more information, see the <button className="link-button" onClick={this.props.showAbout}>About</button> section.</span>}</p>
            
            {this.props.showingAbout && <div>
                <p>There are two concepts to be aware of to understand this project: Fingerprinting and Personalization.</p>
                
                <p>Fingerprinting of devices is the collection of data in order to create a nuanced and possibly unique picture of the user. Each point of data (e.g. timezone or OS) may be insignificant on its own, but when combined with other data points, a distinct profile of the individual user is formed. Because humans are creatures of habit and routine, the created user-profile is an aggregate of behavioral data that's relatively stable over time. You may be markedly different from who you were ten years ago, but on a day-to-day or even weekly basis you're mostly the same person. These gradual changes are shown in how you use the device. Looking at the aggregate of data can be used to infer/discern who the user is, reveal their identity, behaviors, and predict their current needs, desires, and their future actions.</p>
                
                <p>Fingerprinting is most commonly used for marketing and targeted advertising, for tracking and identifying users across sessions and devices, and for cybersecurity measures to prevent identify theft, bot detection, fraud detection, and account security. MirrorFP's sole use, however, is personalization.</p>
                
                <p>A diverse set of users means the need for a diverse set of user-content and user-experiences. When personalizing a product or service, you're customizing its presentation to better fit the personal needs, preferences, and desires of the user or customer. So instead of providing a single and broad experience, personalization allows you to present visitors/users with an experience that's more appropiate/relevant for them. Practically and more effectively, personalization targets not the individual user, but instead a cohort that the user is part of. The cohort is basically just a group that the user shares similar trait(s) with. The more data that is known of the user, the more detailed their profile will be, and the more cohorts they will be part of.</p>
                
                <p>In the context of websites, personalization involves using the collected data to deliver content that is dynamic and adaptive, instead of just generic and static. For instance, personalized changes can be made to the website design. From minor changes like the colors, images, and text descriptions, to larger changes such as the landing page or separate components. Additional examples of website personalization are access to certain features, displaying different products, or giving personal offers and suggestions.</p>

                <p>Finally, because the purpose of MirrorFP is personalization, there is no need track and evaluate every little thing. Doing that will only lead to a bunch of bad and useless data. The goal has instead been to determine which fingerprinting techniques and data points provide value and which ones do not, as well as determining how much data is necessary to assign a user to a cohort. A lot of techniques have been mercilessly culled/scrapped in this process. The usual suspects are those that require explicit permission from the user, those that are of low value for high (CPU and/or memory) cost, or those that are redundant, in the sense that they provide essentially the same or a worse value as another technique. I've also excluded many that at first sight appeared to provide some value but upon closer inspection were shown to be inert. The most common reason for this phenomenon is that they historically provided value but no longer do as they have been fixed or made deprecated/obsolete/unsupported/legacy. This usually happens because browser vendors include measures to prevent fingerprinting techniques that are too... invasive on users' privacy.</p>
            </div>}
        </div>
        )
    }
}

export default Text