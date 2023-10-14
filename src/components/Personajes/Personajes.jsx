import { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

const Personajes = () => {

const [pokemon, setPokemon] = useState([]);
const [name, setName] = useState("");
const navigate = useNavigate();

const getAllPokemon = () => {

    axios.get('https://pokeapi.co/api/v2/pokemon?offset=100&limit=100').then(resp => {
                console.log(resp)
                setPokemon(resp.data.results);
    }).catch(err => {
        console.log(err);
    })

}

const irPersonaje = () => {

    if(name==''){
        alert('Debe seleccionar Nombre!!');
        return;
    }

    navigate(`/infoPersonajes/${name}`);
}


useEffect(() => {
  
    getAllPokemon();

}, [])



  return (
    <div className="container containerHome">
        <section className="titulo mt-4">Selecciona un pokemon! {name}</section>
        <Form.Select size="lg" className="selectPoke mt-5" onChange={({target})=> setName(target.value)}>
            <option value={0}>(Seleccione)</option>
            {
                pokemon.map((personaje)=>(
                    <option value={personaje.name}>{personaje.name}</option>
                ))
            }
        
      </Form.Select>
      <Button variant="outline-dark mt-4" onClick={()=>irPersonaje()}>Ver detalle</Button>
    </div>
  )
}

export default Personajes