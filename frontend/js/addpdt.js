let button = $(".home")
let add = $(".addproduct")
let usname = $(".name")
let price = $(".price1")
let manufacturer = $(".manufacturer")
let imageurl = $(".imageurl")
$(
    ()=>{
        button.click((e)=>{
            e.preventDefault();
            window.location.href = "http://localhost:3000/home"
        })
        add.click((e)=>{
            e.preventDefault();
            $.post({
                url : "http://localhost:3000/user/addpdt",
                data :{
                    name : usname.val().trim(),
                    price : price.val().trim(),
                    manufacturer : manufacturer.val().trim(),
                    imageurl :imageurl.val().trim()
                }
            }).done(()=>{
                window.location.href = "http://localhost:3000/home"
            })
        })
        
    }
)