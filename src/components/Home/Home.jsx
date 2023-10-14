import poke from '../../assets/img/Charizard.webp';

const Home = () => {
  return (
    <div className="container containerHome">
        <section className="titulo mt-4">Bienvenido Maestro Pokemon!</section>
        <div className="imagen">
               <img src={poke} alt="pokemon" /> 
        </div>
    </div>
  )
}

export default Home