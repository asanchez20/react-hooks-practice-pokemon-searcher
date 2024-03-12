import React, {useState} from "react";
import { Form, FormButton } from "semantic-ui-react";

function PokemonForm({addNewPoke}) {

  const [name, setName] = useState('');
  const [hp, setHp] = useState(0);
  const [frontSprite, setFrontSprite] = useState('');
  const [backSprite, setBackSprite] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();

    let newPoke = {
      name: name,
      hp: hp,
      sprites:{
        front: frontSprite,
        back: backSprite
      }
    }
    fetch('http://localhost:3001/pokemon', {
      method:'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newPoke)
    })
    .then(resp => resp.json())
    .then(addNewPoke(newPoke))
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" value={hp} onChange={(e) => setHp(e.target.value)} />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={frontSprite}
            onChange={(e) => setFrontSprite(e.target.value)}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={backSprite}
            onChange={(e) => setBackSprite(e.target.value)}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
