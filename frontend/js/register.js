let button  = $("#submit-button")
let usernamefield = $("input[name = username]")
let loginidfield = $("input[name = loginid]")
let passwordfield = $("input[name = password]")
let confirmfield = $("input[name=confirm-password]")

$(
    ()=>{
        button.click((event)=>{
            console.log("clicked")
            let name = usernamefield.val().trim();
            let password = passwordfield.val().trim();
            let loginid = loginidfield.val().trim();
            let confirm = confirmfield.val().trim();
            if(confirm !== password){
                //dosomething
            } 
            else{
                $.ajax({
                    method : "POST",
                    url : "http://localhost:3000/user/register",
                    data : {
                        name : name,
                        loginid : loginid,
                        password : password
                    }
                }).done((res)=>{
                    if(res == "done"){
                        window.location.href ="http://localhost:3000/user/login";
                    }
                    else{
                        //dosomtheing
                    }
                })
            }
        })
    }
)