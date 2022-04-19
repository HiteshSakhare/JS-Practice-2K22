*** What is variable ? ***
Variable: Variable is container who store the data at perticular location in memory.
        to perform a various task on that data later.

*** Rules to declare variables: ***
1) Vaiable Name can contain letters,Digits,Underscores and Dollar Sign.=======>   (a-z,A-Z,0-9,_,$)
2) Name can also began with letters, $, and _  .========================>(Cannot Start with number)
3) WhiteSpaces are not allowed in Var Name.
4) Reserved kewards in JS are not allowed in Var Name.
5) Var Names are case sensitive.=============================>(a & A are different.)

***Example***
** Right Way ** 

>   firstname
>   firstName
>   Firstname
>   FirstName
>   First_Name
>   firstname99

** Wrong Way **
>   99FirstName
>   first name
>   var           (key Word)

*** Variables in JS ***
    1)var : 
        var a="Hello! Kabir."
        document.write(a)
        a="Hello! Ji."
        document.write(a) // We can update the value
    
    2) let 
        let b="How are you ?"
        document.write(b)
        b='Who are you ?'
        document.write(b) // We can update the value
    3)const
        const c="I am Fine."
        document.write(c)
        c='I am not Fine.'
        document.write(c) // We cannot update the value

*** Difference between var and let ***
    ---------------------------------------------------------------------------------------------
                          var                  |                 let                            |
    -------------------------------------------|------------------------------------------------|                     
    1) Keyword            var                  |                 let                            |
    2)Syntax          var name=value;          |           let name=value                       |
    3)Scope           Global Scope             |           Block Scope                          |
    4)Declaration     We can declare variable  |      We cannot declare variable more than once |
                      more than once.          |                                                |
    5)Example        var name="Hitesh";        |      let name="Hitesh"                         |
                     var name="Kabir";         |      let name="Kabir" -------> It gives error  |
                                               |    Identifier 'name' has already               |                                       |                                                |
                                               |                                                |
                                               |                                                |    
    ---------------------------------------------------------------------------------------------

*** Data Types in JS ***

    >   var x=  'Hello' ;              --------------> String.
    >   var x=  23;                    --------------> Number.
    >   var x=  true/false;            --------------> Boolean.
    >   var x=  ["HTML", "CSS", "JS"];    -----------> Array.
    >   var x=  {   first_Name:"Hitesh",     --------> Object.
                    last_Name:"Sakhare"
                };
    >   var x= null;                   --------------> Null.
    >   var x;                         --------------> Undefined.




