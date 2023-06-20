const sat = document.querySelector(".wrapper");
const rat = document.querySelector(".one");

const products=[{
    id:1,
    title:"Air force",
    price:299,
    colors:[
        {code: "gray",
         image:"./images/heal.webp",   },
    ],
},
{
    id:2,
    title:"Air Jordan",
    price:569,
    colors:[
        {code: "",
         image:"./images/csr19.webp",   },
    ],
},
{
    id:3,
    title:"Blazer",
    price:999,
    colors:[
        {code: "black",
         image:"./images/watch.jpg",   },
    ],
},
{
    id:4,
    title:"Crater",
    price:780,
    colors:[
        {code: "gray",
         image:"./images/wikkr512.jpg",   },
    ],
},
{
    id:5,
    title:"Hippie",
    price:25000,
    colors:[
        {code: "",
         image:"./images/mbmg.jpg",   },
    ],
},
];

let choosen = products[0];

const currentimd=document.querySelector(".productImg");
const currenttitle = document.querySelector(".productTitle");
const currentprice = document.querySelector(".productPrice");
const currentcolor = document.querySelector(".color");
const currentsize = document.querySelector(".size");

rat.forEach((item, index) => {
    item.addEventListener("click", () =>{
        sat. style.transform = 'translateX(${-100 * index}vw)';

        choosen = products[index];

        currenttitle.textContent = choosen.title;
        currentprice.textContent = "$" + choosen.price;
        currentimd.src = choosen.colors[0].image;

        currentcolor.forEach((color, index)=>{
            color.style.backgroundcolor = choosen.colors[index].code;
        });
    });
    
});

currentcolor.forEach((color, index)=>{
    color.addEventListener("click", ()=>{
        currentimd.src = choosen.colors[index].image;
    });
});

currentsize.forEach((sizes, index)=>{
    sizes.addEventListener("click" , ()=>{
        currentsize.forEach((size)=>{
            size.style.backgroundcolor="white";
            size.style.color="black";

        });
        size.style.backgroundcolor="black";
        size.style.color="white";
    });
});

const button = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

button.addEventListener("click" , ()=>{
    payment.style.display = "flex";
});

close.addEventListener("click" , ()=>{
    payment.style.display="none";
});