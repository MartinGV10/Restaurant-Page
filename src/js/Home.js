import { Element, Image } from "./DOM";
import footer from "./Footer";
import store from '../assets/store.jpg'
import food from '../assets/food.jpg'
import season from '../assets/seasonal.jpg'
import kissImg from '../assets/kiss.jpg'

function displayHome() {
    const content = document.querySelector('#content')

    // Title Section Container
    const titleCont = new Element('div', 'title-cont', null).createElement()
    const titleLeft = new Element('div', 'title-left', null).createElement()
    const titleHeader = new Element('h2', 'title-header', 'THE NEW WAY TO CAFE').createElement()
    const titleSubtext = new Element('h4', 'title-subtext', "Delicious acai bowls, nutritious smoothies, ethically sourced coffee, and a stylish space you'll never want to leave").createElement()

    const titleBtns = new Element('div', 'title-btns', null).createElement()
    const orderBtn = new Element('button', 'order', 'Order').createElement()
    const menuBtn = new Element('button', 'menu', 'View Menu').createElement()

    const titleRight = new Element('div', 'title-right', null) .createElement()
    const titleImg = new Image('img', 'store', null, store).createElement()

    // Append title containers
    content.appendChild(titleCont)
    titleCont.appendChild(titleLeft)
    
    titleLeft.appendChild(titleHeader)
    titleLeft.appendChild(titleSubtext)
    titleLeft.appendChild(titleBtns)
    titleBtns.appendChild(orderBtn)
    titleBtns.appendChild(menuBtn)

    titleCont.appendChild(titleRight)
    titleRight.appendChild(titleImg)

    // Why RB Container
    const specialCont = new Element('div', 'special-cont', null).createElement()
    const specTitle = new Element('div', 'spec-title', null).createElement()
    const specHeader = new Element('h1', 'spec-header', 'Why Raining Berries?').createElement()

    const cards = new Element('div', 'cards', null).createElement()
    const oneStopShop = new Element('div', 'best', null).createElement()
    const bLeft = new Element('div', 'b-left', null).createElement()
    const stopTitle = new Element('h2', 'best-title', 'The Best Cafe in Town').createElement()
    const stopSub = new Element('p', 'c-text', 'One stop shop for breakfast, lunch, and everything in between!').createElement()
    const stopSub2 = new Element('p', 'c-text', 'Great food/drinks, best atmosphere to work & socialize!').createElement()

    const bRight = new Element('div', 'b-right', null).createElement()
    const stopImg = new Image('img', null, null, food).createElement()

    // --------------------

    const seasonal = new Element('div', 'best', null).createElement()
    const bLeft2 = new Element('div', 'b-left', null).createElement()
    const seasonalImg = new Image('img', null, null, season).createElement()
    
    const bRight2 = new Element('div', 'b-right', null).createElement()
    const seasonalTitle = new Element('h2', 'best-title', 'Whats New?').createElement()
    const seasonalSub = new Element('p', 'c-text', 'We have irresistible menu items year round, but we keep a few witheld for special occasions!').createElement()
    const seasonalSub2 = new Element('p', 'c-text', 'The Items:').createElement()
    const seasonList = new Element('ul', 'new-list', null).createElement()

    const seasonalArray = ['Pumpkin Spice Latte', 'Brown Sugar Banana Latte', 'Caramel Apple Latte', 'Apple Crisp Cider']
    for (let i = 0; i < seasonalArray.length; i++) {
        const seasonalLi = new Element('li', null, seasonalArray[i]).createElement()
        seasonList.appendChild(seasonalLi)
    }
    
    //Append RB Containers
    content.appendChild(specialCont)
    specialCont.appendChild(specTitle)
    specTitle.appendChild(specHeader)
    specialCont.appendChild(cards)

    cards.appendChild(oneStopShop)
    oneStopShop.appendChild(bLeft)
    bLeft.appendChild(stopTitle)
    bLeft.appendChild(stopSub)
    bLeft.appendChild(stopSub2)

    oneStopShop.appendChild(bRight)
    bRight.appendChild(stopImg)

    // ----------------

    cards.appendChild(seasonal)
    seasonal.appendChild(bLeft2)
    bLeft2.appendChild(seasonalImg)
    
    seasonal.appendChild(bRight2)
    bRight2.appendChild(seasonalTitle)
    bRight2.appendChild(seasonalSub)
    bRight2.appendChild(seasonalSub2)
    bRight2.appendChild(seasonList)

    // Kiss My Acai

    const kiss = new Element('div', 'kiss', null).createElement()
    const kText = new Element('h1', 'k-text', 'The Best thing to say to your haters').createElement()
    const kImg = new Image('img', null, null, kissImg).createElement()

    content.appendChild(kiss)
    kiss.appendChild(kText)
    kiss.appendChild(kImg)

    // Footer
    
    footer()

}

export default displayHome