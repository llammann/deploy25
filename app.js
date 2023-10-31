let cards=document.querySelector(".cards")

let url="https://fakestoreapi.com/products"
fetch(url)
.then((res)=>res.json())
.then((data)=>{
    // console.log(data)
    data.forEach((product,index) => {
        // console.log(product.category)
        cards.innerHTML+=
        ` <div class="card col p-3">
        <div class="img_wrapper mb-2">
            <img src="${product.image}" class="card-img-top" alt="...">
        </div>

        <div class="articles">
            <p class="title">
            <strong>Name:</strong>  ${product.title}
            </p>
            <p class="price">
            <strong>Price:</strong> ${product.price}$
            </p>
            <p class="category">
            <strong>Category:</strong> ${product.category}
            </p>
            
            <p class="rating">
              <strong>Rating:</strong>
                 <ul class="rating">
                    <li class="rate">Rate</li> ${product.rating.rate}
                    <li class="count">Count</li> ${product.rating.count}
                 </ul>
            </p>

        </div>
        <div class="buttons">
            <button id="${product.id}" class="basket_icon">
                <i class="fa-solid fa-basket-shopping fa-2x"></i>
            </button>
        </div>
          </div>`
 
        //   add to basket 

        fetch("https://fakestoreapi.com/products/"+`${product.id}`)
    .then((res)=>res.json())
    .then((data) => {
        // console.log(data);
        console.log(product.id);
        data.forEach((element) => {
            basketed_items.innerHTML+=
            `<li class="basket_item">
            <div class="img_wrappper">
                <img src="https://picsum.photos/200/300" alt="">
            </div>
            <div class="item_details">
                <h3 class="name">ITEM NAME</h3>
                <p class="category">CATEGORY</p>
                <p>$<span class="price">0</span>PRICE</p>
            </div>
    
            <div class="counter_details">
                <button class="plus btn btn-secondary"><i class="fa-solid fa-plus"></i></button>
                <span class="counter">0</span>
                <button class="minus btn btn-secondary"><i class="fa-solid fa-minus"></i></button>
            </div>
    
            <div class="buy_or_remove">
                <p>$ <span class="total_price">0</span>TOTAL PRICE</p>
                <a href="#">Save for later</a>
                <a href="#">Remove</a>
            </div>
        </li>
            `
        })
    })

          //at each click adding elelemnt id to basket_clicked_items with repeat 
const all_baskets = document.querySelectorAll(".basket_icon");
    all_baskets.forEach((basket) => {
          basket.addEventListener("click",function(event) {
        const product_id=this.id
        console.log(product_id)
            event.stopPropagation();
              fetch("https://fakestoreapi.com/products")
              .then((res)=>res.json())
              .then((products)=>{
              console.log(products)

            if(JSON.parse(localStorage.getItem("basket_clicked_items"))) {
                let arr_data=JSON.parse(localStorage.getItem("basket_clicked_items"))
                arr_data.push(product_id)
                localStorage.setItem("basket_clicked_items",JSON.stringify(arr_data))// 1,2,1,1,3,4,4,4,2 id
                console.log(arr_data)
                
                Swal.fire('Succesfully added to basket!')
            }
            else {
                // localStorage.setItem("basket_clicked_items",JSON.stringify([]))
                arr_data.push(product_id)
                localStorage.setItem("basket_clicked_items",JSON.stringify(arr_data))// 1,2,1,1,3,4,4,4,2 id
                console.log(arr_data)
                Swal.fire('Succesfully added to basket!')
            }  
              })



            //   baskete add et eventi scopeuuuuu
          })
      });
          


//  //CARD INFO ALERT START
//  let all_card=document.querySelectorAll(".card")
//  all_card.forEach((card,index) =>{
//      card.addEventListener("click",function(){
//         //  console.log(this);
//          const title=this.querySelector(".title")
//         //  console.log(title.textContent);
//         // const price=this.closest(".price")
//         const price=this.querySelector(".price")
//         const category=this.querySelector(".category")

//        Swal.fire(` <p class="title">
//        <strong>Name:</strong>  ${title.textContent}
//        </p>
//        <p class="price">
//        <strong>Price:</strong> ${price.textContent}$
//        </p>
//        <p class="category">
//        <strong>Category:</strong> ${category.textContent}
//        </p>`
//        )
//      }) 
//  })
//  CARD INFO ALERT END

 // adding basket
// all_baskets.forEach(basket => {
//       basket.addEventListener("click", adding_to_basket_func);
//  });

});  //   data foreach scope

});  //main data 

// DISPLAYING ALL THINGS START
let all=document.querySelector(".all")
all.addEventListener("click",function() {
    console.log("hiee")
    cards.innerHTML=""
    fetch(url)
.then((res)=>res.json())
.then((data)=>{
    data.forEach(product =>{
        cards.innerHTML+=
` <div class="card col p-3">
<div class="img_wrapper mb-2">
    <img src="${product.image}" class="card-img-top" alt="...">
</div>

<div class="articles">
    <p class="title">
    <strong>Name:</strong>  ${product.title}
    </p>
    <p class="price">
    <strong>Price:</strong> ${product.price}$
    </p>
    <p class="category">
    <strong>Category:</strong> ${product.category}
    </p>
    
    <p class="rating">
      <strong>Rating:</strong>
         <ul class="rating">
            <li class="rate">Rate</li> ${product.rating.rate}
            <li class="count">Count</li> ${product.rating.count}
         </ul>
    </p>

</div>
<div class="buttons">
    <button class="basket_icon">
        <i class="fa-solid fa-basket-shopping fa-2x"></i>
    </button>
</div>
  </div>`

// adding basket
//  all_baskets.forEach(basket => {
//      basket.addEventListener("click", adding_to_basket_func);
//  });


    })
    });

})

// DISPLAYING ALL THINGS END

// DISPLAYING ONLY MEN THINGS START
let men=document.querySelector(".men")
men.addEventListener("click",function() {
    // console.log("hiee")
    cards.innerHTML=""
    fetch(url)
.then((res)=>res.json())
.then((data)=>{
    data.filter(product=>{
        if(product.category==="men's clothing"){
            cards.innerHTML+=
` <div class="card col p-3">
<div class="img_wrapper mb-2">
    <img src="${product.image}" class="card-img-top" alt="...">
</div>

<div class="articles">
    <p class="title">
    <strong>Name:</strong>  ${product.title}
    </p>
    <p class="price">
    <strong>Price:</strong> ${product.price}$
    </p>
    <p class="category">
    <strong>Category:</strong> ${product.category}
    </p>
    
    <p class="rating">
      <strong>Rating:</strong>
         <ul class="rating">
            <li class="rate">Rate</li> ${product.rating.rate}
            <li class="count">Count</li> ${product.rating.count}
         </ul>
    </p>

</div>
<div class="buttons">
    <button class="basket_icon">
        <i class="fa-solid fa-basket-shopping fa-2x"></i>
    </button>
</div>
  </div>`
   // adding basket
//  all_baskets.forEach(basket => {
//      basket.addEventListener("click", adding_to_basket_func);
//  });
        }
    });

})   
    
})
// DISPLAYING ONLY MEN THINGS END

// DISPLAYING ONLY WOMEN THINGS START
let women=document.querySelector(".women")
women.addEventListener("click",function() {
    // console.log("hiee")
    cards.innerHTML=""
    fetch(url)
.then((res)=>res.json())
.then((data)=>{
    data.filter(product=>{
        if(product.category==="women's clothing"){
            cards.innerHTML+=
` <div class="card col p-3">
<div class="img_wrapper mb-2">
<img src="${product.image}" class="card-img-top" alt="...">
</div>

<div class="articles">
    <p class="title">
    <strong>Name:</strong>  ${product.title}
    </p>
    <p class="price">
    <strong>Price:</strong> ${product.price}$
    </p>
    <p class="category">
    <strong>Category:</strong> ${product.category}
    </p>
    
    <p class="rating">
      <strong>Rating:</strong>
         <ul class="rating">
            <li class="rate">Rate</li> ${product.rating.rate}
            <li class="count">Count</li> ${product.rating.count}
         </ul>
    </p>

</div>
<div class="buttons">
    <button class="basket_icon">
        <i class="fa-solid fa-basket-shopping fa-2x"></i>
    </button>
</div>
  </div>`
   // adding basket
//  all_baskets.forEach(basket => {
//      basket.addEventListener("click", adding_to_basket_func);
//  });

}
        
    });
})   
})
// DISPLAYING ONLY WOMEN THINGS END

// DISPLAYING ONLY JEWELRY THINGS START
let jewelry=document.querySelector(".jewelery")
jewelry.addEventListener("click",function() {
    cards.innerHTML=""
    fetch(url)
.then((res)=>res.json())
.then((data)=>{
    data.filter(product=>{
        if(product.category==="jewelery"){
            cards.innerHTML+=
` <div class="card col p-3">
<div class="img_wrapper mb-2">
<img src="${product.image}" class="card-img-top" alt="...">
</div>

<div class="articles">
    <p class="title">
    <strong>Name:</strong>  ${product.title}
    </p>
    <p class="price">
    <strong>Price:</strong> ${product.price}$
    </p>
    <p class="category">
    <strong>Category:</strong> ${product.category}
    </p>
    
    <p class="rating">
      <strong>Rating:</strong>
         <ul class="rating">
            <li class="rate">Rate</li> ${product.rating.rate}
            <li class="count">Count</li> ${product.rating.count}
         </ul>
    </p>

</div>
<div class="buttons">
    <button class="basket_icon">
        <i class="fa-solid fa-basket-shopping fa-2x"></i>
    </button>
</div>
  </div>`

   // adding basket
//  all_baskets.forEach(basket => {
//      basket.addEventListener("click", adding_to_basket_func);
//  });

}
        
    });
})   
})
// DISPLAYING ONLY JEWELRY THINGS START

// DISPLAYING ONLY ELECTRONICS THINGS START
let electronics=document.querySelector(".electronics")
electronics.addEventListener("click",function() {
    // console.log("hiee")
    cards.innerHTML=""
    fetch(url)
.then((res)=>res.json())
.then((data)=>{
    data.filter(product=>{
        if(product.category==="electronics"){
            cards.innerHTML+=
` <div class="card col p-3">
<div class="img_wrapper mb-2">
<img src="${product.image}" class="card-img-top" alt="...">
</div>

<div class="articles">
    <p class="title">
    <strong>Name:</strong>  ${product.title}
    </p>
    <p class="price">
    <strong>Price:</strong> ${product.price}$
    </p>
    <p class="category">
    <strong>Category:</strong> ${product.category}
    </p>
    
    <p class="rating">
      <strong>Rating:</strong>
         <ul class="rating">
            <li class="rate">Rate</li> ${product.rating.rate}
            <li class="count">Count</li> ${product.rating.count}
         </ul>
    </p>

</div>
<div class="buttons">
    <button class="basket_icon">
        <i class="fa-solid fa-basket-shopping fa-2x"></i>
    </button>
</div>
  </div>`

   // adding basket
//  all_baskets.forEach(basket => {
//      basket.addEventListener("click", adding_to_basket_func);
//  });

}
        
    });
})  
})
// DISPLAYING ONLY ELECTRONICS THINGS END

  // FILTERING START
  let filter=document.querySelector(".se_op")
  // console.log(filter)
   filter.addEventListener("change",function(){
       const selectedValue = filter.value;
  console.log(selectedValue)
  cards.innerHTML = "";
  fetch(url)
  .then((res) => res.json())
  .then((data) => {
      if (selectedValue === "1") {
          data.sort((a, b) => a.price - b.price);
      } else if (selectedValue === "2") {
          data.sort((a, b) => b.price - a.price);
      } else if (selectedValue === "3") {
          data.sort((a, b) => a.rating.rate - b.rating.rate);
      } else if (selectedValue === "4") {
          data.sort((a, b) => b.rating.rate - a.rating.rate);
      }

      data.forEach((product, index) => {
          cards.innerHTML+=
          ` <div class="card col p-3">
          <div class="img_wrapper mb-2">
              <img src="${product.image}" class="card-img-top" alt="...">
          </div>
          
          <div class="articles">
              <p class="title">
              <strong>Name:</strong>  ${product.title}
              </p>
              <p class="price">
              <strong>Price:</strong> ${product.price}$
              </p>
              <p class="category">
              <strong>Category:</strong> ${product.category}
              </p>
              
              <p class="rating">
                <strong>Rating:</strong>
                   <ul class="rating">
                      <li class="rate">Rate</li> ${product.rating.rate}
                      <li class="count">Count</li> ${product.rating.count}
                   </ul>
              </p>
          
          </div>
          <div class="buttons">
              <button class="basket_icon">
                  <i class="fa-solid fa-basket-shopping fa-2x"></i>
              </button>
          </div>
            </div>`

//  adding basket
//  const all_baskets = document.querySelectorAll(".basket_icon");
//  all_baskets.forEach(basket => {
//      basket.addEventListener("click", adding_to_basket_func);
//  });
    
      });
  });
  
   })
// FILTERING END

// console.log(cards)
   
 // ADDING BASKET MAIN START
//  const all_baskets = document.querySelectorAll(".basket_icon");
//  all_baskets.forEach(basket => {
//      basket.addEventListener("click", adding_to_basket_func);
//  });
//  let added_products=[]
//  function adding_to_basket_func(event) {
//     event.stopPropagation();
//      const card = this.closest('.card');
//      const product_name = card.querySelector('.title').textContent;
//      const product_price = card.querySelector('.price').textContent;
//      const basket_body = document.querySelector('.basketed_items');
 
//      if (added_products.includes(product_name)) {
//         //  COUNTU ARTMALIDIR,OZU BASKETE DUSMEMELIDIR
        
//      } else {
//          added_products.push(product_name, product_price);
//         //  COUNTU BIR OLMALIDR,OZU BASKETE DUSMELIDIR
 
         
// // delete from basket
//          const all_delete_from_basket = document.querySelectorAll(".delete_from_basket");
//          all_delete_from_basket.forEach(delete_from_basket => {
//              delete_from_basket.addEventListener("click", function () {
//                  const product = this.closest('.product');
//                  if (confirm("Are you sure to delete from basket?")) {
//                      product.remove();
//                      Swal.fire('Succesfully removed from basket');
//                      const index = added_products.indexOf(product_name);
//                      added_products.splice(index, 1);
//                  }
//              })
//          });
//      }
//  }
//  ADDING BASKET MAIN END


// TODAY
//at each click adding elelemnt id to basket_clicked_items with repeat 
const all_baskets = document.querySelectorAll(".basket_icon");
    all_baskets.forEach((basket,id) => {
        //   console.log(id)
          basket.addEventListener("click",function(event) {
            event.stopPropagation();
              fetch("https://fakestoreapi.com/products")
              .then((res)=>res.json())
              .then((products)=>{
                //   console.log(id)
                  console.log(products)

            if(JSON.parse(localStorage.getItem("basket_clicked_items"))) {
                let arr_data=JSON.parse(localStorage.getItem("basket_clicked_items"))
                arr_data.push(id)
                localStorage.setItem("basket_clicked_items",JSON.stringify(arr_data))// 1,2,1,1,3,4,4,4,2 id

                  console.log(arr_data)
            }
            else {
                // localStorage.setItem("basket_clicked_items",JSON.stringify([]))
                arr_data.push(id)
                localStorage.setItem("basket_clicked_items",JSON.stringify(arr_data))// 1,2,1,1,3,4,4,4,2 id

                  console.log(arr_data)
            }
                
              })
          })
      });



// basketed products'll shown at basket body
// let item_name=document.querySelector(".name")
// let category=document.querySelector(".category")
// let price=document.querySelector(".price")
// let counter=document.querySelector(".counter")

// let baskets_id=JSON.parse(localStorage.getItem("basket_clicked_items"))
// let baskets_unique_id
// function removeDuplicates(baskets_id) { 
//     return baskets_unique_id= [...new Set(baskets_id)]; 
// } 
// console.log(baskets_unique_id)
// let basketed_items=document.querySelector(".basketed_items")
// let to_basket=document.querySelector(".to_basket")
// to_basket.addEventListener(("click"),function(){
//     fetch("https://fakestoreapi.com/products/"+product.id)
//     .then((res)=>res.json())
//     .then((data) => {
//         console.log(data);
    
        
//         data.forEach((element) => {
//             basketed_items.innerHTML+=
//             `<li class="basket_item">
//             <div class="img_wrappper">
//                 <img src="https://picsum.photos/200/300" alt="">
//             </div>
//             <div class="item_details">
//                 <h3 class="name">ITEM NAME</h3>
//                 <p class="category">CATEGORY</p>
//                 <p>$<span class="price">0</span>PRICE</p>
//             </div>
    
//             <div class="counter_details">
//                 <button class="plus btn btn-secondary"><i class="fa-solid fa-plus"></i></button>
//                 <span class="counter">0</span>
//                 <button class="minus btn btn-secondary"><i class="fa-solid fa-minus"></i></button>
//             </div>
    
//             <div class="buy_or_remove">
//                 <p>$ <span class="total_price">0</span>TOTAL PRICE</p>
//                 <a href="#">Save for later</a>
//                 <a href="#">Remove</a>
//             </div>
//         </li>
//             `
//         })
    
    
    
//     let arr=JSON.parse(localStorage.getItem("basket_clicked_items"))
//     let count_d=0
//     // let total_price_d
//     for(i=0;i<arr.length;i++){
//         let array=arr.filter(function(){
//             array_element===arr[i]
//     })
//     count_d=array.length

//     }
//     console.log(count_d)
//     })
// })
// // basket shown end

// NEW

// let all_ids=JSON.parse(localStorage.getItem("basket_clicked_items"))
// console.log(all_ids)
// all_ids.forEach(id=>{
//     console.log(id)
//     let basketed_items=document.querySelector(".basketed_items")
// let to_basket=document.querySelector(".to_basket")
// to_basket.addEventListener(("click"),function(){
//     fetch("https://fakestoreapi.com/products/"+id)
//     .then((res)=>res.json())
//     .then((data) => {
//         console.log(data);
    
        
//         data.forEach((element) => {
//             basketed_items.innerHTML+=
//             `<li class="basket_item">
//             <div class="img_wrappper">
//                 <img src="https://picsum.photos/200/300" alt="">
//             </div>
//             <div class="item_details">
//                 <h3 class="name">ITEM NAME</h3>
//                 <p class="category">CATEGORY</p>
//                 <p>$<span class="price">0</span>PRICE</p>
//             </div>
    
//             <div class="counter_details">
//                 <button class="plus btn btn-secondary"><i class="fa-solid fa-plus"></i></button>
//                 <span class="counter">0</span>
//                 <button class="minus btn btn-secondary"><i class="fa-solid fa-minus"></i></button>
//             </div>
    
//             <div class="buy_or_remove">
//                 <p>$ <span class="total_price">0</span>TOTAL PRICE</p>
//                 <a href="#">Save for later</a>
//                 <a href="#">Remove</a>
//             </div>
//         </li>
//             `
//         })
//     })
// })
// })