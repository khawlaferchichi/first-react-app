import "../../styles/footer.css"
import { FaFacebookF} from 'react-icons/fa';
import { FaTwitter} from 'react-icons/fa';
import { FaInstagram} from 'react-icons/fa';
import { FaYoutube} from 'react-icons/fa';
export default function Footer() {
  return (
    <div>
        <div className="footer">
        <h2>A PROPOS</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
          sunt numquam quo optio mollitia, dolor est aspernatur magnam, cum
          voluptate nobis.Iusto dicta minus maiores cumque libero! In, numquam
          rem.
        </p>
        <h2>SUIVEZ-NOUS</h2>
        <div className="icone">
        <FaFacebookF/>
        <FaTwitter/>
        <FaInstagram/>
        <FaYoutube/>
        </div>
        <hr />
      </div>
    </div>
  )
}
