
let register = $(".register")
let button  = $("#submit-button")
let loginidfield = $("input[name = loginid]")
let passwordfield = $("input[name = password]")
$(  
    ()=>{
        register.click((e)=>{
            e.preventDefault()
            window.location.href = "http://localhost:3000/user/register"
        })
        button.click((event)=>{
            let loginid = loginidfield.val().trim();
            let password = passwordfield.val().trim();
            event.preventDefault()
            $.ajax({
                method : "POST",
                url : "http://localhost:3000/user/login",
                data : {
                    loginid : loginid,
                    password : password
                }
            }).done((res)=>{
                window.location.href = "http://localhost:3000/home/"
            })
        })
    }
)