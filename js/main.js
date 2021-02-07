window.onload= ()=>{
    AOS.init()
//   var loaderTimeout=  setTimeout(()=>{
//         var loader= document.getElementsByClassName('loader');
//         loader[0].style.display="block"
//         return clearTimeout(loaderTimeout)
//     },[5000])
    var h1 =document.getElementsByTagName('h1')
        
    var i = document.getElementsByClassName("button_holder");
    i[0].addEventListener('click',()=>{
        window.location='#About'
    })
    var intro = document.getElementById("intro");
    var intro_data =intro.getAttribute('data-intro');
    var a=0;
    var remove = intro_data.length;
    var inter = setInterval(()=>{
        if(a>=0 && a<intro_data.length){
            let e = intro_data[a];
            var newSpan= document.createElement('span');
            newSpan.className='in';
            intro.appendChild(newSpan);
            newSpan.innerHTML=e;
            a+=1;           
 
        }
        else
        {
           intro.innerHTML=''
           a=0;
        }
       

    },[300])

     document.body.onscroll = ()=>{
        var goUp = document.getElementById('goUp');
        if(window.scrollY=== window.innerWidth){
            goUp.style.display='block'
        }
     }
      var bar1 = document.getElementsByClassName('ldbar')[0]
     var progressBarInner = document.getElementsByClassName('progress_inner');
     progressBarInner[0].DOCUMENT_POSITION_CONTAINED_BY
     document.onscroll = ()=>{
        $(window).scroll(function () { 
            var offset = $('.progressBar').offset();
            if(window.pageYOffset<= offset.top){
                alert('hello')
            }
        });
     } 
}
 function onloads(){
        document.getElementById('loader').style.display = 'none';
}
$(function () {
   var goto=$(window);
   goto.scroll(function () { 
       if(window.pageYOffset>window.innerHeight+20){
           $('#goUp').css('display','flex');
       }else {
           $('#goUp').css('display','none')
       }
   });
   $('#goUp').click(function (e) { 
       e.preventDefault();
       window.scrollTo(0,0)
   });
});
