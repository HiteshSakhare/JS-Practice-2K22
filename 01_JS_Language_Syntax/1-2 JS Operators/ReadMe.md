*** Operators in JS ***
1>  Arithmatic Operator

     + , -, *, /, %, ++, -- 

        // Addition (+)
        let a=6
        let b=7
        document.write(`${a} + ${b} = `, a+b)

        // Substraction (-)

        document.write("<br>")
        document.write(`${a} - ${b}= `, a-b)

        // Multiplication (*)

        document.write("<br>")
        document.write(`${a} * ${b}= `, a*b)

        // Division (/)

        document.write("<br>")
        document.write(`${a} / ${b}= `, a/b)

        // Modulo (%)

        document.write("<br>")
        document.write(`${a} % ${b}= `, a%b)

2>  Assignment Operator

     =, +=, -=, *=, /=

        // Assignment Operator
        // (=)
        document.write("<h3> Assignment Operations </h3>")
        document.write("<br>")
        let c=0;
        document.write(`a= ${a} & c= ${c}`)
        document.write("<br>")

        document.write(`<br> (c=a) <br> c=  `, c=a)
        // (+=)
        document.write("<br>")

        document.write(`<br>(c +=a) <br> c=> ${c} += ${a} = `,c +=a)   // c= c+a

        // (-=)
        document.write(`<br><br>(c-=a) <br> c=> ${c} -= ${a}= `, c-=a) // c=c-a

        // (*=)

        document.write(`<br><br> (c *=)<br> c=> ${c} *= ${a}= `,c *=a)

        // (/=)

        document.write(`<br><br> (c /=a)<br> c=> ${c} /= ${a}=`,c /=a)

        // (%=)
        
        document.write(`<br><br> (c %=a) <br> c=> ${c} %= ${a}= `, c %=a)

3>  Comparision Operator

     ==, ===, >=, <=, >, <

        // Comparision Operator
        document.write("<h3> Comparision Operations </h3>")
        // (==)
        let x1=6;
        if(a==x1){
            document.write(`${a}==${x1}`)
        }
        // (!=)
        if(a !=c){
            document.write(`<br> ${a}!=${c}`)
        }
        // (===)
        let x='6';
        if(a===6){
            document.write(`<br>a === 6`)
        }
        if(a===x){
            document.write(`<br> ${a} is === ${x}`)
        }
        else{
            document.write(`<br>${a} !== ${x} due to different datatype`)
        }
        // (>=) or (>)
        if(b>=a){
            document.write(`<br> ${b} >= ${a}`)
        }
        //(<=) or (<)

        if(a<=b){
            document.write(`<br> ${a} <=${b}`)
        }

4>  logical Operator

     &&, ||, !

        // Logical Operator
        // ( && )
        document.write("<h3> Logical Operations </h3>")
        if(a==6 && a==x1){
            document.write(`<br> x1=${x1} <br> a==6 && a==x1 `)
        }
        // ( || )
        if(a==6 || a==c){
        document.write(`<br>c=${c}<br> a==6 || a==c`)
        }

        // ( ! )
        if(!(a==6) || a==x1){
            document.write(`<br> !true = False`)
        }

5>  Conditional Operator

     ?:
        let a=6 let b=7
        var max= (a>b ? document.write(`<br> Max Number is ${a}`): document.write(`<br> Max Number is ${b}`))

6> Bitwise Operator

     <<, >>, ~, &, |, ^

        // Bitwise Operator

        document.write("<h3> Bitwise Operations </h3>")   
        // ( & )
        document.write(`<br> and => ${a} & ${b}= `,a & b)
        document.write(`<br> or => ${a} | ${b}= `,a | b)
        document.write(`<br> xor +> ${a} ^ ${b}= `,a ^ b)
        document.write(`<br> left shift => ${a} << ${b}= `,a << b)
        document.write(`<br> right shift => ${a} >> ${b}= `,a >> b)

