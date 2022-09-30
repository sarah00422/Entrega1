(() => {
    setMenuButton()
    const img1 = document.getElementById("img1")
    const img2 = document.getElementById("img2")
    const img3 = document.getElementById("img3")
    const img4 = document.getElementById("img4")
    const img5 = document.getElementById("img5")
    const img1Sources = ["img/gal1.png","img/gal1.1.png"]
    const img2Sources = ["img/gal2.png","img/gal2.2.png"]
    const img3Sources = ["img/gal3.png","img/gal3.3.png"]
    const img4Sources = ["img/gal4.png","img/gal4.4.png"]
    const img5Sources = ["img/gal5.png","img/gal5.5.png"]

    setInterval(() => {
        changeSrcImage(img1, img1Sources)
    }, 2000)
    setInterval(() => {
        changeSrcImage(img2, img2Sources)
    }, 1000)
    setInterval(() => {
        changeSrcImage(img3, img3Sources)
    }, 3000)
    setInterval(() => {
        changeSrcImage(img4, img4Sources)
    }, 4000)
    setInterval(() => {
        changeSrcImage(img5, img5Sources)
    }, 1000)
} )()

function setMenuButton() {
    const menuButton = document.getElementById("nav_bar-icon-el")
    menuButton.addEventListener("click", () => {
        document.getElementById("nav_bar-list").setAttribute("style", "display:flex")
    })
}

function changeSrcImage(imgTag, sources) {
    imgTag.setAttribute("src",sources[Math.abs(Math.round(Math.random() * sources.length - 1 ))])
}
