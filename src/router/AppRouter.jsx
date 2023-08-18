import {  Route, Routes } from "react-router-dom"
import {  HeroesRoutes, SearchPage } from "../heroes"
import {  LoginPage } from "../auth"
import { PrivateRoute } from "./PrivateRoute"
import { PublicRoute } from "./PublicRoute"


export const AppRouter = () => {
  return (
    <>
    
<Routes>
  
  { 
  /* forma 1de hacerlo  <Route path="login" element ={
  <PublicRoute>

  <LoginPage/>
  
  </PublicRoute>
  
  } /> */}

<Route path="login/*" element ={
  <PublicRoute>
       <Routes>
<Route path="/*" element={   <LoginPage/>} />

     </Routes>
  
  </PublicRoute>
  
  } />

  <Route path="/*" element ={
      <PrivateRoute>
  
             <HeroesRoutes/>
  
        </PrivateRoute>
  } />

  {/* <Route path="/*" element ={<HeroesRoutes/>} /> */}
  
</Routes>

    </>
  )
}
