let header = $("header")
let cards = $(".cards")
let myproducts = $("#myproducts")
let mycart = $("#mycart")
let logout = $("#logout")
let addproduct = $("#addproduct")

$(
    ()=>{
        addHeader();
        populatePdts();
        myproducts.click((event)=>{
            event.preventDefault();
            getPdtsuser();
            
            
        })
        mycart.click((e)=>{
            e.preventDefault();
            window.location.href = "http://localhost:3000/user/showcart"
        })
        addproduct.click((e)=>{
            e.preventDefault();
            window.location.href = "http://localhost:3000/user/addpdtform"
        })
        logout.click((e)=>{
            e.preventDefault()
            window.location.href = "http://localhost:3000/user/login"
        })
        function addHeader(){
            header.append(`<div>
            <div class="brandname text">dev<span class="special">A10</span></div>
            <div class="brandname text down">SHOP</div>
            </div>`)
        }
        function populatePdts(){
            $.ajax({
                method : "GET",
                url : "http://localhost:3000/product",
            }).done((res)=>{
                addPdts(res)
            })
        }
        function addPdts(data){
            for(let i = 0;i<data.length;i++){
                cards.append(`<div class="pdt-card">
                <img src="${data[i].imageurl}" alt="" srcset="">
                <div class="details">
                    <div class="price desc color"> &#8377 ${data[i].price}</div>
                    <div class="name desc">${data[i].name}</div> 
                    <div class="manufacturer">${data[i].manufacturer}</div> 
                    <form action="http://localhost:3000/user/addpdtcart${data[i]._id}" method="POST"><button class="submit" type="submit">Add to Cart</button></form> 
                </div>
            </div>`)
            }
        }
        function populateUserpdts(data){
            for(let i = 0;i<data.length;i++){
                cards.append(`<div class="pdt-card">
                <img src="${data[i].imageurl}" alt="" srcset="">
                <div class="details">
                    <div class="price desc color"> &#8377 ${data[i].price}</div>
                    <div class="name desc">${data[i].name}</div>
                    <div class = "buttons"> 
                    <form action="http://localhost:3000/user/addpdtcart${data[i]._id}" method="POST"><button class="submit" type="submit">Add to Cart</button></form>
                    <form action="http://localhost:3000/user/addpdtcart${data[i]._id}" method="POST"><button class="submit" type="submit">Edit Product</button></form> 
                    <form action="http://localhost:3000/user/removepdt${data[i]._id}" method="POST"><button class="submit" type="submit">Delete Product</button></form>
                    </div>
                </div>
            </div>`)
            }
        }
        function getPdtsuser(){
            cards.empty();
            $.get({
                url : "http://localhost:3000/user/products"
            }).done((data) =>populateUserpdts(data));
            
        }

    }
)