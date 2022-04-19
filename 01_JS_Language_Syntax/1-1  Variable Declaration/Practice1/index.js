// Variables in JS
// 1)var 
    var a="Hello! Kabir."
    // a="Hello! Ji."
   // document.write(a) // We can update the value
  // var a= 'Hi!'      // We can decleare variable more than once.
  
//2) let 
    let b="How are you ?"
    //let b='hello'     // We can decleare variable more than once
   // document.write(b)
   // document.write("<br>")
    // b='Who are you ?'
   // document.write(b) // We can update the value
//3)const
    const c="I am Fine."
   // document.write(c)
   // c='I am not Fine.'
  // document.write(c) // We cannot update the value

  let ref=document.querySelector('.div1')
    ref.innerText=a
    ref.innerHTML=ref.innerHTML +"<br>"
    ref.innerText=ref.innerText + b
    ref.innerHTML=ref.innerHTML +"<br>"
    ref.innerText=ref.innerText + c
// Datatypes in JS:
    // String
    document.write("<br>")
    document.write(`a= ${a} ----->  ` , typeof(a))
    document.write("<br>")
    // Number
    let x=35;
    document.write(`x= ${x} ----->  `, typeof(x))
    document.write("<br>")
    // Boolean
    let y=true
    document.write(`y= ${y} ------>  `, typeof(y))
    document.write("<br>")
    //Array
    let z=["Hitesh","Pranali","HitAli"]
    document.write(`z= ${z} ------->  `, typeof(z))
    //Objects
    document.write("<br>")
    let l={Name:"Hitesh",Wife_Name:"Pranali",Product:"HitAli"}
    document.write(`l= ${l.Name} ,${l.Wife_Name} ,${l.Product} ------->  `, typeof(l))
    //Null
    document.write("<br>")
    let m=null;
    document.write(`m= ${m} -------->  `,typeof(m))
    //Undefined
    document.write("<br>")
    let n;
    document.write(`n= ${n} -------->  `,typeof(n))