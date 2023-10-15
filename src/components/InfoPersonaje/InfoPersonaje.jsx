import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

const InfoPersonaje = () => {
    const { name } = useParams();
    const [informacionPoke, setInformacionPoke] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const getInfoPokemon = () => {
        setIsLoading(true);
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then(res=>{

            console.log(res.data);
            setInformacionPoke(res.data);
        }).catch(err=>{
            console.log(err)
        }).finally(final=>{
            console.log('fin')
            setIsLoading(false);
        })
    }

    const irPersonajeVuelta = () => {
        navigate(`/personajes`);
    }


    useEffect(() => {
      getInfoPokemon();
    

    }, [])
    

  return (
    <div className="container">
{
    isLoading ? ('Cargando') : (<>
            <main className="detallePokemon d-flex justify-content-center mt-5">
                <div className="imagenPokemon">
                    <img src={`https://img.pokemondb.net/artwork/large/${name}.jpg`} alt="" width={'500px'} />
                </div>
                
                <div className="habilidades">
                <ListGroup>
                <ListGroup.Item>Nombre : {informacionPoke.name}</ListGroup.Item>
                <ListGroup.Item>Experiencia : {informacionPoke?.base_experience}</ListGroup.Item>
                <ListGroup.Item>Altura : {informacionPoke?.height * 10} cm</ListGroup.Item>
                <ListGroup.Item>Peso : {informacionPoke?.weight * 0.1} kg</ListGroup.Item>
                {/* <ListGroup.Item>Tipo: { informacionPoke.types[0].type.name ? informacionPoke.types[0].type.name : 'No informado' }</ListGroup.Item>*/}
                {/* <ListGroup.Item>Tipo: { console.log(informacionPoke.types[0].type)}</ListGroup.Item> */}
                </ListGroup>
                </div>
                
            </main>
            <div className="d-flex justify-content-center">
            <Button variant="outline-warning mt-4" onClick={()=>irPersonajeVuelta()}>Volver</Button>
            </div></>)
}
    </div>
    
  )
}

export default InfoPersonaje