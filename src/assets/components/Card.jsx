import './Card.css'

const colorHex = {
   "Pastel Pink": "#FDA4BA",
   "Mint Green": "#B7F0AD",
   "Baby Blue": "#A2D2FF",
   "Sunny Yellow": "#FFE500",
   "Lavender": "#C77DFF"
}; 

const Card = (props) => {
   return (
      <div 
      className="card"
      style={{ boxShadow: `0 0 15px ${colorHex[props.color]}` }}
      >
         <div className="card-menu">
         <span></span><span></span><span></span>
         </div>

         <img width={150} src="src/assets/bean-outline.png" alt="Bean Template" />
         <h3>{props.name}</h3>
         <p>
            Color: 
         <span 
            className="tag" 
            style={{ backgroundColor: colorHex[props.color] }}
         >
            {props.color}
         </span>
         </p>
         <p>
         Speed: 
         <span className="tag tag-speed">
            {props.speed}
         </span>
         </p>
      </div>
   )
}

export default Card;