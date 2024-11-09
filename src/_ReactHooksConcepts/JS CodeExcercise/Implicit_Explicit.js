

export default function Implicit_Explicit(){


    let a= 5//prompt("Enter A value: ");
    let b=5;

    let c = a + b;
    // console.log(c, typeof c);

    // Explicit Type conversion
    //  ======================================> 1. number
    let numConversion = Number("75") + Number("20");
    // console.log("NUM Conversion", numConversion, typeof numConversion)

    let numBoolConversion = Number(false)
    // console.log("NUM BOOL Conversion", numBoolConversion)

    //  ======================================> 2. String
    let stringConversion = String(5);
    // console.log("stringConversion", stringConversion, typeof stringConversion)

    let stringBoolConversion = String(false);  // by passing null, we get type as String
    // console.log("stringBoolConversion", stringBoolConversion, typeof stringBoolConversion)

    //  ======================================> 3. Boolean
    let booleanConversion = Boolean(5)
    // console.log("BooleanConversion", booleanConversion, typeof booleanConversion)

    let booleanStringConversion = Boolean("HELLO")
    // console.log("booleanStringConversion", booleanStringConversion, typeof booleanStringConversion)

    //  ======================================> 4. parseInt & parseFloat
    let IntegerConversion = parseInt(6.999)
    // console.log("IntegerConversion", IntegerConversion, typeof IntegerConversion)
    
    let FloatConversion = parseFloat("6.999484")
    // console.log("FloatConversion", FloatConversion, typeof FloatConversion)


    //  ======================================>
    return null;

}