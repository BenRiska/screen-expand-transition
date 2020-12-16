import React, {useEffect} from 'react'
import {useHistory} from "react-router-dom"

function Page1() {

    const history = useHistory()

    useEffect(() => {
        console.log("hi")
        const element = document.querySelector(".active")
        const h1 = document.querySelector(".page1 > h1")
        const btn = document.querySelector(".page1 > button")
        element && element.remove()
        h1.style.transform = "translateX(-500px)"
        btn.style.transform = "translateX(-500px)"
        requestAnimationFrame(() => {
            h1.style.transform = "translateX(0px)"
            btn.style.transform = "translateX(0px)"
        })
    }, [])


    return (
        <div className="page1">
            <h1>New page</h1>
            <button className="back" onClick={() => history.push("/")}>Back</button>
        </div>
    )
}

export default Page1
