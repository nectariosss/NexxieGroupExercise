import { useEffect, useState } from "react"

const UpperWrapper = () => {

const  [NewData, setNewData] = useState([])

useEffect(() => {
    fetch("https://6380ce5a786e112fe1ba951e.mockapi.io/Articles")
    .then((response) => response.json())
    .then((data)=> setNewData(data))
}, [])

    return (
        <div className="up-wrapper">
            <div className="up-wrapper-card1">
                <picture>
                    <source media="(max-width:375px" srcSet="images/image-web-3-mobile.jpg"></source>
                <img src="images/image-web-3-desktop.jpg" alt=""></img>
                </picture>
                <div className="up-wrapper-card1-contents">
                    <div className="up-wrapper-card1-child1">
                        <h1>The Bright Future of Web 3.0?</h1>
                    </div>
                    <div className="up-wrapper-card1-child2">
                        <p>We dive into the next evolition of the web that claims to put the power of the platform back into the hands of the people. But is it really fulfilling its promise?</p>
                        <button className="up-wrapper-card1-child2-button">READ MORE</button>
                    </div>
                </div>
            </div>
            <div className="up-wrapper-card2">
                <h1>New</h1>
                    {NewData.map((item, index) => {
                        if (index < 3 ) {
                            const titleLimit = 50;
                        if (item.title.length > titleLimit) {
                            item.title = item.title.slice(0,titleLimit) + "..."
                        }
                    const descriptionLimit = 100;
                        if (item.description.length > descriptionLimit) {
                            item.description = item.description.slice(0,descriptionLimit) + "..."
                        }

                    return(
                        <div key={item.id} className="up-wrapper-card2-child">
                            <a href={`${item.title}`}><h3>{item.title}</h3></a>
                            <p>{item.description}</p>
                        </div>
                    )
                    }
                }) }
            </div>
        </div>
    )
}
export default UpperWrapper