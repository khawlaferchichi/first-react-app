
import wacademy from "../../assets/imgs/wacademy.png";
import "../../styles/header.css"
export default function Header() {
  return (
    <div>
    <nav>
    <div>
      <img className="logo-nav" src={wacademy} alt="logo" />
    </div>
    <div></div>
    <ul>
     <li>formations</li>
     <li>Métiers</li>
     <li>Technologies</li>
     <li>Entreprise</li>
     <li>Notre Academy</li>
     <li>Villes</li>
    </ul>
    <button>CVthéque</button>
    <button>Contact</button>
    </nav>
    </div>
  )
}
