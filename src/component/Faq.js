import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";

const data = {
    rows: [
        {
            title: "WHAT BLOCKCHAIN ARE AJ VARIANTS MINTED ON?",
            content: `The Polygon Blockchain`,
        },
        {
            title: "HOW DO AJ VARIANTS IMPACT THE ENVIRONMENT?",
            content:
                "As of June 2022, the Polygon blockchain as became carbon neutral (see link for more info) Polygon Carbon Neutral https://www.prnewswire.com/ae/news-releases/polygon-network-reaches-first-sustainability-milestone-by-achieving-carbon-neutrality-301571777.html",
        },
        {
            title: "WHAT DOES CARBON NEUTRAL MEAN?",
            content: `Definition: Making no net release of carbon dioxide to the atmosphere. (See link for more info) https://www.cooleffect.org/carbon-neutral-companies`,
        },
        {
            title: "WHAT DO I GET WHEN AS A TOKEN HOLDER?",
            content: <>
            <p>current version is 1.2.1Token Gated Content Watch exclusive behind the scenes content, participate in live watch parties, get access to focus groups and test screenings of in production content. Exclusive Show Voting Rights Take part in deciding on various show details you can later watch unfold as episodes air. Unique storytelling experiences Using the exciting technology available to us in this NFT space, holders will gain access to various games and content that interact with their specific NFT to individualized storytelling and gaming experiences.
            </p> <p className="mt-3">
            Private Discord Channels Access channels only available to NFT holders where you can connect with other fans of the show and see where you rank as a fan via custom assigned roles and a ranking system. Token Gated Merch Gain early and exclusive access to merch Access to Meet-and-Greets Meet cast and crew from the show in live online AMA’s and get the inside scoop. Drops and Giveaways Lucky winners among the AJ VARIANTS token holders will be eligible for exclusive NFTs, community contests, giveaways and loads of other surprises. Real World Benefits Token holders will receive a physical membership card giving them special access to in person exclusive items and events (details to be announced)
            </p></>,
        },{
            title: "WILL THERE BE ANY CHARITABLE ASPECT?",
            content: <p>Yes Indeed. A % of all revenue generated from the various aspects of the Avenging Justice Omniverse will be allocated to various causes. Including environmental charities, toys for underprivileged children, clothing drives, medical research, etc. Every month, a member of the cast will select a charity to support of their choosing</p>,
        }
    ],
};

const styles = {
    // bgColor: 'white',
    titleTextColor: "blue",
    rowTitleColor: "blue",
    // rowContentColor: 'grey',
    // arrowColor: "red",
};

const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
};

function FaqData() {
  return (
    <div>
         <Faq
                data={data}
                styles={styles}
                config={config}
            />
    </div>
  )
}

export default FaqData