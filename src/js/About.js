import { Element, Image } from "./DOM";
import footer from "./Footer";
import bim from '../assets/bim.jpg'

function displayAbout() {
    console.log('swdthdrthedrthdfg')

    const content = document.querySelector('#content')
    
    const abCont = new Element('div', 'about-cont', null).createElement()
    const bigPic = new Image('img', 'big-pic', null, bim).createElement()

    const abRight = new Element('div', 'ab-right', null).createElement()
    const about = new Element('h1', 'about-title', 'Our Story').createElement()

    content.appendChild(abCont)
    abCont.appendChild(bigPic)
    abCont.appendChild(abRight)
    abRight.appendChild(about)


    const abList = [
        "Raining Berries was born from a shared dream, a deep love for coffee, and the unique bond between a father and his two children. What began as a career pivot for Bimal, a longtime educator, quickly turned into a full-fledged family venture when his daughter—then a sophomore at the University of Florida—and his teenage son, Dylan, joined forces to build something extraordinary. Drawing on their family's roots in the Ugandan coffee industry and a desire to create a space that was modern, vibrant, and inclusive, the trio began developing Raining Berries in 2018 and launched the concept in 2020.",

        'With premium espresso drinks, healthy açaí bowls, and community-minded features like free meeting rooms, the café quickly became more than just a coffee shop—it became a lifestyle brand. While juggling her college studies, Deah found her passion in this creative, ever-evolving business. Dylan learned the ins and out of business, and has been an integral part of growing the brand since he was a junior in high school. Both managed to graduate college with honors, while working full time to build the brand.',

        "Today, with 10 locations across Central Florida and national expansion underway—including partnerships with pro athletes and Tampa Bay's first women's soccer team—Raining Berries is redefining what a coffee shop can be. What makes the journey truly special? Building it together, as a family.",


    ]

    for (let i = 0; i < abList.length; i++) {
        const abDesc = new Element('p', 'about-desc', abList[i]).createElement()
        abRight.appendChild(abDesc)
    }


    // Reviews

    const revCont = new Element('div', 'rev-cont', null).createElement()
    const revHeader = new Element('h1', 'rev-header', 'What People Say About Us!').createElement()
    const cardCont = new Element('div', 'cardCont', null).createElement()

    content.appendChild(revCont)
    revCont.appendChild(revHeader)
    revCont.appendChild(cardCont)


    const revList = [
        'Love love love this place! We ordered the riptide smoothie and will absolutely get that again. The Acai bowls looked fantastic and everyone who ordered them said they were delicious. We will return to try those. Great spot for a refreshing drink on a got afternoon! Prices were a little high but comparable to most places like this. Cute photo ops as well for Instagram.',
        'This is a place I feel has impeccable leadership from the start the young people that works in the shop they show it with their service as well as their acts of kindness. Our smoothies were awesome the service was great thank you so much guys!',
        "Adorable. When I think coffee shop this is what I want. Menu isn't confusing at all, my Hubz was able to order a variety of options without coffee, because he doesn't like it. They have a handful of breakfast items as well. I didn't get to try there acai bowls but I will next time"

    ]
    const revNames = ['Tricia Marcolini', 'Michelle Rock', 'Weston Pruneda']

    for (let i = 0; i < revList.length; i++) {
        const revCard = new Element('div', 'rev-card', null).createElement()
        const revName = new Element('h3', 'rev-name', `- ${revNames[i]}`).createElement()
        const review = new Element('p', 'review', revList[i]).createElement()

        cardCont.appendChild(revCard)
        revCard.appendChild(revName)
        revCard.appendChild(review)
    }

    footer()


}

export default displayAbout