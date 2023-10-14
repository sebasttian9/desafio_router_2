import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const InfoPersonaje = () => {
    const { name } = useParams();

  return (
    <div>InfoPersonaje {name}</div>
  )
}

export default InfoPersonaje