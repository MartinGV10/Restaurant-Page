class Element {
    constructor(tag, className, text) {
        this.tag = tag
        this.className = className
        this.text = text
    }

    createElement() {
        let el = document.createElement(this.tag)
        el.textContent = this.text

        if (this.className !== null) {
            el.classList.add(this.className)
        }

        return el
    }
}

class Image extends Element {
    constructor(tag, className, text, imgSrc) {
        super(tag, className, text) //Super to inherit class attributes from Element
        this.imgSrc = imgSrc
    }

    createElement() {
        let el = document.createElement(this.tag)
        el.textContent = this.text

        if (this.className !== null) {
            el.classList.add(this.className)
        }

        el.src = this.imgSrc

        return el
    }
}

export {Element, Image}