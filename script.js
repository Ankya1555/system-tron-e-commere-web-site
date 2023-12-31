@import url('https://fonts.googleapis.com/css?family=Spartan: wght@100;200;300;400;500;600;700;800;900&display=swap');


*{
margin: 0;

padding: 0;

box-sizing: border-box; 
font-family:'Spartan', sans-serif; 
}

h1 { 
    font-size: 50px; 
    line-height: 64px; 
    color: #222; }

h2 {

font-size: 46px; 
line-height: 54px; 
color: #222; }

h4 {
     font-size:20px;
      color: #222;
     }

h6 {

  font-weight: 700; 
  font-size: 12px;
   }
P { 
    font-size: 16px; 
    color: #465b52;
     margin: 15px  20px  ;
}

.section-p1 { 
    padding: 40px 80px;
}


section-ml {

margin: 40px 0;
 }

body {
    width:100%;
}

const bar= document.getElementById( 'bar');
const close= document.getElementById( 'close');
const nav= document.getElementById( 'navbar');

if (bar){
    bar.addEventListener('click',() =>{     
        nav.classList.add('active');
    })


}
if (close){
    close.addEventListener('click',() =>{     
        nav.classList.remove('active');
    })
}