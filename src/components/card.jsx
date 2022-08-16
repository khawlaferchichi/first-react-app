import '../styles/card.css'

export default function Card(props) {
  return (
    <div>
        
    <img src={props.img} alt="img1" />
    <p><strong>{props.title}</strong></p>
    <p>{props.parag}</p>

    </div>
  )
}
