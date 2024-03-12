import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({poke}) {
  const [showFront, setShowFront] = useState(true)

  const handleClick = () => {
    setShowFront(showFront => !showFront)
  }
  return (
    <Card>
      <div>
        <div className="image">
          <img alt="oh no!" src={showFront ? poke.sprites.front : poke.sprites.back} onClick={handleClick}/>
        </div>
        <div className="content">
          <div className="header">{poke.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {poke.hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
