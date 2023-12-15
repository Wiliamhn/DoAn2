
$("#target").submit(function (event) {
    var _tailkhoan = $('#username').val();
    var _matkhau = $('#pwd').val();  
    var d=0;
    for(let x of listregister)
    {
        if(_tailkhoan==x.username && _matkhau==x.password && x.chucvu=="Nhân viên")
        {
            var user = { tailkhoan: _tailkhoan, matkhau: _matkhau };
            localStorage.setItem('user', JSON.stringify(user));
            window.location.href = "Admin.html";    
            d=d+1;
            
        }
        if(_tailkhoan==x.username && _matkhau==x.password && x.chucvu=="Quản lý")
        {
            var user = { tailkhoan: _tailkhoan, matkhau: _matkhau };
            localStorage.setItem('user', JSON.stringify(user));
            window.location.href = "Admin.html";    
            d=d+1;
         
        }
        if(_tailkhoan==x.username && _matkhau==x.password && x.chucvu=="Khách hàng")
        {
            var user = { tailkhoan: _tailkhoan, matkhau: _matkhau };
            localStorage.setItem('user', JSON.stringify(user));
            window.location.href = "Trangchu.html";    
            d=d+1;
           
        }
        
    }
    $('#username').val('');
    $('#pwd').val(''); 
    event.preventDefault();
    if(d == 0)
    {
        $('.note_login').text("Tài khoản hoặc mật khẩu không tồn tại !")
    }
}); 

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
function validatePhone(Phone) {
    var filter = /^[0-9-+]+$/;
    if (filter.test(Phone)) {
        return true;
    }
    else {
        return false;
    }
}

listregister= JSON.parse(localStorage.getItem("register")) || []
function ADDPeople()
{
    var name=$('#namedk').val();
    var phone=$('#phonedk').val();
    var email=$('#emaildk').val();
    var user=$('#usernamedk').val();
    var pw=$('#pwddk').val();
    var chucvu=$('#txt_chucvudk').val();
    var ok=true;
    if(name=="")
    {
       $('.note_register').text("Tên không được để trống");
        ok=false;
    }
    else
    {
            if(phone.length != 10 || validatePhone(phone)==false)
            {
                $('.note_register').text("Số điện thoại chưa đúng")
                ok=false;
            }
            else
            {
                if( !(validateEmail(email)) )
                {
                    $('.note_register').text("Email chưa đúng")
                    ok=false;
                }
                
                else{
                    if(email =="")
                   {
                    $('.note_register').text("Email không được để trống");
                    ok=false;
                   }
                    
                    else
                    {
                        if(user =="")
                       {
                        $('.note_register').text("Username không được để trống");
                        ok=false;
                       }
                        else
                        {
                            if(pw.length != 8)
                            {
                                $('.note_register').text("Password phải có độ dài 8 ký tự !");
                                ok=false;
                            }
                            else
                            {   
                                        if(chucvu !="Khách hàng")
                                            {
                                               var tk= JSON.parse(localStorage.getItem("user")) || []
                                               if(tk=="")
                                               {
                                                ok=false;
                                                $('.note_register').text("Bạn không có quyền để tạo nhân viên or admin mới!");
                                               }
                                               else
                                               {
                                                for(let x of listregister)
                                                {
                                                    if(tk.tailkhoan==x.username && tk.matkhau==x.password && x.chucvu=="Nhân viên")
                                                    {
                                                       
                                                        ok=false;
                                                        $('.note_register').text("Bạn không có quyền để tạo nhân viên or admin mới!");
                                                        
                                                    }
                                                    if(tk.tailkhoan==x.username && tk.matkhau==x.password && x.chucvu=="Khách hàng")
                                                    {
                                                     
                                                        ok=false;
                                                        $('.note_register').text("Bạn không có quyền để tạo nhân viên or admin mới!");
                                                    }
                                                }
                                               }
                                                
                                            }
                                
                            }
                            
                        }
                    }
                }
               
            }  
    }
    
    $("#targetdk").submit(function (event) { 
        if (ok==true) {
            var dangky = {
                "username":user,
                "password":pw,
                "name":name,
                "phone":phone,
                "email":email,
                "chucvu":chucvu};
                if(listregister==null)
                {
                    listregister=[dangky];
                }
                else{
                    listregister.push(dangky)
                }
           
            localStorage.setItem('register', JSON.stringify(listregister));
            window.location.href = "Dangnhap.html"
            alert("Chúc mừng bạn đăng ký thành công")}
        event.preventDefault();
    });  
}