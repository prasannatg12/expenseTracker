import React, { useEffect, useState } from 'react'
export default function HooksConcept() {


    // RULES ON USING REACT HOOKS
    // ==========================
    // 1. Hooks are called only on functional components
    // 2. Hooks are called only on top level of the components
    // 3. Hooks cannot be used conditionally

    const [value, setValue] = useState("test123");
    const [hideUseEffect, setHideUseEffect] = useState(true);
    const [useEffectI, setUseEffectI] = useState("USE EFFECT I")
    const [useEffectII, setUseEffectII] = useState("USE EFFECT II")
    const [useEffectIII, setUseEffectIII] = useState("USE EFFECT III")

    // setState Example
    const changeValue = () => {
        console.log("NEW")
        setValue("NEW CHANGE")
    }

    // useEffect I - called everytime
    useEffect(() => {
        setUseEffectI("changed useeffect at first time")
    })

    // useEffect II - called once on page load
    useEffect(() => {
        setUseEffectII("changed useeffect at second time")
    }, [])

    // useEffect II - called once on page load
    useEffect(() => {
        setUseEffectIII("changed useeffect at third time")
    }, [value])

    return (
        <div style={{
            backgroundColor: "#000",
            color: "#fff",
            display: "flex",
            flex: 1,
            height: "100%",
            justifyContent: "center",
            alignItems: "center"
        }}>

            {/* setState */}
            <div>
                <button
                    onClick={changeValue.bind(this)}
                >Click to Change this text
                </button>
                {value}
            </div>

            <button onClick={() => setHideUseEffect(!hideUseEffect)}>
                {!hideUseEffect ? "Hide" : "Show"} Hide Effect</button>
            {!hideUseEffect && (
                <>
                    {/* useEffect I - called everytime */}
                    {useEffectI}

                    {/* useEffect II - called once on page load */}
                    <div>
                        <button
                        // onClick={change.bind(this)}
                        >useEffect II
                        </button>
                        {useEffectII}
                    </div>


                    {/* useEffect III - useEffect calls when there is change in variable */}
                    <div>
                        <button
                            onClick={changeValue.bind(this)}
                        >useEffect III
                        </button>
                        {useEffectIII}
                    </div>



                </>
            )}
        </div>
    )
}