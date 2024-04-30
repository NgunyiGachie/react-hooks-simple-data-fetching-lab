import React, { useState, useEffect } from "react"

function App() {
    const [image, setImage] = useState(null)
    const [isLoading, setIsloading] = useState(false)
   
   
    useEffect(() => {
        setIsloading(true);
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data => {
            setImage(data.message)
            setIsloading(false);
        })
    }, [])

    return (
       <div>
        {isLoading ? <p>Loading...</p> : null}
        {image && <img src={image} alt="A Random Dog"/>}
       </div> 
    )
}

export default App;
