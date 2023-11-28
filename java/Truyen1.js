//Thu gonj tóm tắt
function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Đọc thêm";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Thu gọn";
      moreText.style.display = "inline";
    }
}

//Thêm truyện vào phần theo dõi
$(document).ready(function(){
    $(".Theodoi").click(function(){					
            var pImg = $(this).parents().find(".top-part-img-con").attr("src");
            var pName = $(this).parents().find("#series-name").text();
            var pName1 = $(this).parents().find("#volume-title-main").text();
            var pName2 = $(this).parents().find("#tentruyen").text();
            var product = {
                "img":pImg,
                "name":pName,
                "name1":pName1,
                "name2":pName2
            };
            
            //alert(pImg +" "+pName+" "+pPrice);
            var cart = sessionStorage.getItem("cart");
            var cartProducts = "";
            if(cart!=null){
                cartProducts = cart +"," + JSON.stringify(product);						
            } else
                cartProducts = JSON.stringify(product);
            sessionStorage.setItem("cart",cartProducts);	
                            
        });
});

//Thay đổi nút theo dõi
 
function change() // no ';' here
{
    var elem = document.getElementById("myButton1");
    if (elem.value=="Theo dõi") {
        elem.value = "Hủy theo dõi";
        elem.classList.add('active');
        alert("Bạn đã theo dõi truyện");

    }
    else {
        elem.value = "Theo dõi";
        elem.classList.remove('active');
}};

//Mở thanh công cụ trên header
function myFunctions() {
    document.getElementById("myDrop").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbutton')) {
      var dropdowns = document.getElementsByClassName("drop-content");
      var v;
      for (v = 0; v < dropdowns.length; v++) {
        var openDropdown = dropdowns[v];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  //Xem thêm 1
  function openall() {// no ';' here
    var xemthem = document.querySelector('#phan1');
    var Chapper = document.querySelector('#chapter-phan1');
  
    xemthem.style.display="none";
    Chapper.classList.add('active');
  }
  //Xem thêm 2
  function openall1() {// no ';' here
    var xemthem = document.querySelector('#phan2');
    var Chapper = document.querySelector('#chapter-phan2');
    
    xemthem.style.display="none";
    Chapper.classList.add('active');
  }

  //Đổi icon1
  changeIcon1= (icon) => icon.classList.toggle('bxs-heart')


  //Doi icon2
  function  changeIcon2() {
    document.getElementById("Danhgia-content").classList.toggle("an");
  }
  Window.onclick = function(event) {
    if (!event.target.matches('#icon2')) {
      var danhgia = document.getElementsByClassName("Danhgia");
      var i;
      for (i = 0; i < danhgia.length; i++) {
        var openDanhgia = danhgia[i];
        if (openDanhgia.classList.contains('an')) {
            openDanhgia.classList.remove('an');
            
        }
        
      }
    }
  }
  //Nut Danh gia
  function Danhgiabtn() {
    var icon2 = document.querySelector('#icon2');
    icon2.classList.toggle('bxs-star');
    changeIcon2();
  }