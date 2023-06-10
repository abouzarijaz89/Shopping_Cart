const product = [
  {
    id: 0,
    image: "1.jpg",
    title: "Fashion Womens",
    price: 120,
  },
  {
    id: 1,
    image: "3.jpg",
    title: "Fashion Silver Crystal Rings",
    price: 120,
  },
  {
    id: 2,
    image: "4.jpg",
    title: "Rose Gold Horse Eye Zircon Ring",
    price: 120,
  },
  {
    id: 3,
    image: "5.jpg",
    title: "Cross Heart Ring",
    price: 120,
  },
  {
    id: 4,
    image: "6.jpg",
    title: "White Gold Diamond with Emerald",
    price: 120,
  },
  {
    id: 5,
    image: "7.jpg",
    title: "Rose Gold and Diamond Ring",
    price: 120,
  },
  {
    id: 6,
    image: "8.jpeg",
    title: "WHITE GOLD MENS AND WOMENS DIAMOND",
    price: 120,
  },
  {
    id: 7,
    image: "9.jpg",
    title: "Piece Wedding/Engagement Rings",
    price: 120,
  },
  {
    id: 8,
    image: "10.jpg",
    title: "Zircon Wedding Anniversary Double layer Ring",
    price: 120,
  },
  {
    id: 9,
    image: "11.jpg",
    title: "Carat Genuine Columbian Emerald & White Diamond",
    price: 120,
  },
];
const categories = [
  ...new Set(
    product.map((item) => {
      return item;
    })
  ),
]
let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>{
    var { image, title, price} = item;
    return( 
        `
        <div class="box">
        <div class='img-box'>
        <img class="images" src=${image} >
        </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>PKR ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'> Add to Cart</button>"+
        `</div>
        </div>`
    )
}).join('')


var cart = [];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}

function delElement(a){
cart.splice(a, 1);
displaycart();
}

 function displaycart (a){
    let j = 0, total=0;
    document.getElementById('count').innerHTML = cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your Cart is Empty";
        document.getElementById("total").innerHTML= "$ "+0+".00";

    }
    else{
        document.getElementById('cartItem').innerHTML = cart.map((items)=>{
            var {image, title, price} = items;
            total = total+price;
            document.getElementById("total").innerHTML="$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 styele=''font-size:15px;>PKR ${price}.00</h2>`+
                "<i class='fa fa-trash-o' onclick='delElement("+ (j++) +")'></i></div>"
                );
        }).join('');
    }
 }