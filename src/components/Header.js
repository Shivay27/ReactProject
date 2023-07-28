import { useState } from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";


const Header = () => {
    const [BtnNameReact,setBtnNameReact] = useState("login");
 const onlineStatus = useOnlineStatus();
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo"src="https://i.pinimg.com/564x/b4/c4/2e/b4c42eb9b6f3c23b3fcb85bddf5c9a79.jpg"></img>
                </div>
            <div className="nav-items">
                <ul>
                    <li>
                        Online Status : {onlineStatus ? "✅" : "❌"}
                    </li>
                   <li><Link to ="/">Home</Link></li>
                   <li><Link to ="/about">About Us</Link></li>
                   <li>
                    <Link to="/Contact">Contact Us</Link></li>
                    <li>
                    <Link to ="/Grocery">Grocery</Link>
                   </li>
                   <li>Cart</li>
                  
                   <button className="login"
                   onClick={() => {
                      BtnNameReact === "login" ? setBtnNameReact("logout") : setBtnNameReact ("login");
                   }
                   }
                   >
                    {BtnNameReact}
                   </button>
                </ul>

            </div>
        </div>
    );
};
export default Header 