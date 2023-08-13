import { Navigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers";


export const HeroPage = () => {

  const {id} = useParams();
const hero = getHeroById(id)
 if (!hero){
  return <Navigate to="/search" />
 }
  

return (
<h1>{hero.superhero}</h1>
    )
}
