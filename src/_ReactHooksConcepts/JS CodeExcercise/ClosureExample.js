import React from 'react'


export default function ClosureExample(){
    
    function outerFunction() {
        let variable = 'Im in outerVariable'
        
        // inner function
        function innerFunction(){
            
            console.log("console in inner function",variable)
        }
        console.log("console in outer variable",variable)
        return innerFunction()
    }

    return(
        outerFunction()
    )

}