//All para, heading , div1 are react object not html tag
import React from "react";
import ReactDOM from "react-dom/client";
const para2 = React.createElement("p",{id: "para2" },"HI ME SHIVA NEXT P2")
const para = React.createElement("p", { id: "para" }, "Anu Shiva")
const heading = React.createElement('h1', { id: "heading" }, "Heading");
const heading2= React.createElement('h2', { id: "heading2" }, "Heading2");
const div1 = React.createElement("div", { id: "divcontainer" }, [heading,heading2,para,para2])

    // < div id = "divcontainer" > <h1 id="heading"> HEADING</h1><h2 id="heading"> HEADING2</h2> <p id="para">Anu Shiva</p></div>
    const Footer = () =>{
        return (
            <div>
                <p>This is a footer</p>
            </div>
        )

    }
    const Page = ()=>{
        return(
            <div>
                <Header/>
                <div className="card-container">
                <Card title={"card1"}/>
                <Card title={"card2"}/>
                <Card title={"card3"}/>
                <Card title={"card4"}/>
                <Card title={"card5"}/>
                
                </div>
               <Footer/>
                
            </div>
        )
    }
    const Header = () =>{
        return (
            
            <div className="card card-wdt">
           React project
          </div>

           
        )
    }
    const Card = ({title}) =>{
        return (
            
            <div className="card card-wdt">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>

           
        )
    }

const root = ReactDOM.createRoot(document.getElementById("root"))
// when its  rendering  any react object it is converted into html
root.render(<Page/>);
