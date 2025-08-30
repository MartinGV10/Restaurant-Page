import { Element } from "./DOM";

function footer() {
    const content = document.querySelector('#content')

    const foot = new Element('div', 'footer', null).createElement()
    const fLeft = new Element('div', 'f-left', null).createElement()
    const fUl = new Element('ul', null, null).createElement()

    const fArray = ['Home', 'Menu', 'About']
    const fClass = ['homeBtn', 'menuBtn', 'aboutBtn']
    for (let i = 0; i < fArray.length; i++) {
        const fLi = new Element('li', fClass[i], fArray[i]).createElement()
        fUl.appendChild(fLi)
    }

    const fRight = new Element('div', 'f-right', 'Connect With Us!').createElement()

    const fRUl = new Element('ul', null, null).createElement()
    const fRArray = ['Instagram', 'TikTok', 'Twitter']
    for (let i = 0; i < fRArray.length; i++) {
        const fRLi = new Element('li', null, fRArray[i]).createElement()
        fRUl.appendChild(fRLi)
    }

    content.appendChild(foot)
    foot.appendChild(fLeft)
    fLeft.appendChild(fUl)


    foot.appendChild(fRight)
    fRight.appendChild(fRUl)

}

export default footer