import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForms";
import { HeroCard } from "../components";
import queryString from "query-string";
import { getHeroesByName } from "../helpers";


export const SearchPage = () => {

  const navigate=useNavigate();
  const location=useLocation();
   
  const {q=''} = queryString.parse(location.search);
  const heroes=getHeroesByName(q)
  
  
  
  const{searchText,onInputChange}= useForm({
    searchText:q
  })

const onSearchSubmit= (event)=>{
  event.preventDefault();
if (searchText.trim().length <= 1) return
  
  navigate(`?q=${searchText}`)
}

  return (
    <>
    <h1>SearchPage</h1>
    <hr />
    
<div className='row'> 
    <div className='col-5'>
        <h4>Searching</h4>
        <hr />

             <form onSubmit={onSearchSubmit} >
             <input 
             type="text"
             placeholder='Search a hero'
             className='forms-control'
             name='searchText'
             autoComplete='off'
             value={searchText}
             onChange={onInputChange}
             />  
             
          </form>
          <button className='btn btn-outline-primary mt-2'>
              Search
             </button>
    </div>

    <div className='col-7'>
      <h4>Results</h4>
      <hr />

           <div className='alert alert-priamry'>
            Search a hero 
           </div>

           <div className='alert alert-danger'>
            No hero with <b>{q}</b>
           </div>

            {
              heroes.map(hero=>(
                <HeroCard key={hero.id}{...hero}/>
              ))
            }

         </div>
    </div>    
    </>

  )
}
