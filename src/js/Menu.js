import { Element, Image } from "./DOM";
import footer from "./Footer";
import rb from '../assets/rb.png'
import fn from '../assets/fn.png'
import oit from '../assets/oit.png'
import paradise from '../assets/pd.png'
import bn from '../assets/bn1.png'
import pb from '../assets/pb.png'
import pm from '../assets/pm.png'
import gd from '../assets/gd.png'

function displayMenu() {
    const content = document.querySelector("#content")

    const menuCont = new Element('div', 'menu-cont', null).createElement()
    const menuHeader = new Element('h1', 'menu-header', 'Our Menu').createElement()
    const menuSub = new Element('p', 'menu-sub', 'Fresh Smoothies, Delicious Food, and Good for the Soul Acai').createElement()


    const bowlList = ["It's Raining Beffires", 'On Island Time', 'Feelin Nutty', 'Paradise']
    const bDescList = [
        'Base of Your Choice, Granola, Peanut Butter, Nutella, Banana, Strawberries, Blueberries, Coconut Flakes',
        'Base of Your Choice, Granola, Mango, Pineapple, Kiwi, Coconut Flakes, Honey',
        'Base of Your Choice, Granola, Peanut Butter, Banana, Strawberries,  Almond Slices, Coconut Flakes, Chocolate Nibs, Honey',
        'Base of Your Choice, Granola, Strawberries, Pineapple, Mango, Flax Seeds, Agave'
    ]
    const bowlPrice = [12.77, 12.77, 12.77, 12.77]
    const bImg = [rb, oit, fn, paradise]

    const bowlCont = new Element('div', 'bowls', null).createElement()
    const bowlTitle = new Element('h1', 'bowl-title', 'Bowls').createElement()
    const bowlDispl = new Element('div', 'bowl-disp', null).createElement()

    bowlCont.append(bowlTitle)
    bowlCont.appendChild(bowlDispl)

    for (let i = 0; i < bowlList.length; i++) {
        const bowlBox = new Element('div', 'food-cont', null).createElement()
        const bowlName = new Element('h3', 'food-name', bowlList[i]).createElement()
        const bowlImg = new Image('img', 'food-pic', null, bImg[i]).createElement()
        const bowlDesc = new Element('p', 'food-desc', bDescList[i]).createElement()
        const bPrice = new Element('p', 'food-price', `$${bowlPrice[i]}`).createElement()

        bowlDispl.appendChild(bowlBox)
        bowlBox.appendChild(bowlName)
        bowlBox.appendChild(bowlImg)
        bowlBox.appendChild(bowlDesc)
        bowlBox.appendChild(bPrice)

    }


    const smoothCont = new Element('div', 'bowls', null).createElement()
    const smoothTitle = new Element('h1', 'bowl-title', 'Smoothies').createElement()
    const smoothDispl = new Element('div', 'bowl-disp', null).createElement()
    
    smoothCont.append(smoothTitle)
    smoothCont.appendChild(smoothDispl)

    const smoothieList = ['Berry Nutty', 'Passion Berry', 'Protein Machine', 'Green Dream']
    const sDescList = [
        'Strawberries, Bananas, Peanut Butter, Agave, Almond Milk',
        'Strawberries, Banana, Pineapple, Passion Fruit Syrup, Apple Juice',
        'Greek Yogurt, Almond Milk, Banana, Coco Powder, Peanut Butter, Agave, Espresso Grounds',
        'Spinach, Pineapple, Mango, Ginger, Chia Seeds, Organic Coconut Water'
    ]
    const smoothiePrice = [8.97, 8.97, 10.97, 8.97]
    const sImg = [bn, pb, pm, gd]
    for (let i = 0; i < smoothieList.length; i++) {
        const smoothieBox = new Element('div', 'food-cont', null).createElement()
        const smoothieName = new Element('h3', 'food-name', smoothieList[i]).createElement()
        const smoothImg = new Image('img', 'food-pic', null, sImg[i]).createElement()
        const smoothieDesc = new Element('p', 'food-desc', sDescList[i]).createElement()
        const sPrice = new Element('p', 'food-price', `$${smoothiePrice[i]}`).createElement()


        smoothDispl.appendChild(smoothieBox)
        smoothieBox.appendChild(smoothieName)
        smoothieBox.appendChild(smoothImg)
        smoothieBox.appendChild(smoothieDesc)
        smoothieBox.appendChild(sPrice)
    }



    content.appendChild(menuCont)
    menuCont.appendChild(menuHeader)
    menuCont.appendChild(menuSub)

    content.append(bowlCont)
    content.append(smoothCont)

    footer()
}

export default displayMenu