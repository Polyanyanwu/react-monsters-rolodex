import "./card-list.styles.css";
import Card from "../card/card.component";

const CardList = ({ monsters }) => 
 (
    <div className="card-list">
      {monsters.map((monster) => {
        return <Card key= {monster.id} monster={monster}/>;
      })}
    </div>
  );

  // return <div>Hello I'm the CardList Component</div>

export default CardList;
