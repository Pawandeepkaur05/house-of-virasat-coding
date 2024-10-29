import photo2 from './photo2.jpg'
import photo from './photo.jpg'
import photo3 from './photo3.jpg'
import photo4 from './photo4.jpg'
import photo5 from './photo5.jpg'
import picture from './picture.jpg'
import picture2 from './picture2.jpg'
import picture3 from './picture3.jpg'
import picture4 from './picture4.jpg'
import picturea from './picturea.jpg'
import pictureb from './pictureb.jpg'
import picturec from './picturecjpg'
import pictured from './pictured.jpg'
import video1 from './video1.mp4'
import logo from './logo.png'
import menu from './menu.png'
import cart from './cart.png'


export const assests =[
    {
        logo,
        cart,
        menu,
    }
]
export const products =[ 
    {
        _id:"A",
        name: "Red color embroidered patiala suit with dupatta stitched",
        description: "Elevate your ethnic wardrobe with our stunning Punjabi suit, designed for comfort and style",
        price: 150,
        Image: [photo],
        category: "Women",
        subcategory: "Designer Suits",
        sizes: ["s", "M", "L"],
        date: 1716634345448,
        bestseller: true //property if me make it true the product will display on teh screen.
    },
    {
        _id:"B",
        name: "Sequences 9mm and multi work emabroidery work and semi-stitched",
        description: "Elevate your ethnic wardrobe with our stunning Punjabi suit, designed for comfort and style",
        price: 200,
        Image: [picture,picturea,pictureb,picturec],
        category: "Women",
        subcategory: "Designer Suits",
        sizes: ["s", "M", "L"],
        date: 1716634345448,
        bestseller: true //property if me make it true the product w
    },

]