const url = "http://localhost:3000/user/cart"
let remove = $(".remve")
$(
    ()=>{
        populateCart();
        console.log("hehere")
        remove.click((e)=>{
            e.preventDefault();
            window.location.href ="http://localhost:3000/user/showcart" 
        })
    }
    
)
function populateCart (){
    $.get({
        url : url,
    }).done((data)=>{
        console.log(data)
        addCards(data);
    })
}
function addCards (data) {
    for(let i =0;i<data.length;i++){
        console.log(data[i])
        makeCard(data[i]);
    }
}
function makeCard(obj){
    $(".cart-cards").append(`
    <div class="cart-card">
        <img src="${obj.imageurl}" alt="${obj.name}" srcset="">
        <div class="details">
            <div class="name">${obj.name}</div>
            <div class="price">${obj.price}</div>
        </div>
        <form action="http://localhost:3000/user/removepdtcart${obj._id}" method="post"><button class="remve" type="submit">Remove</button></form>
    </div>


    `)
}