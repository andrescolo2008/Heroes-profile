import { render,screen } from "@testing-library/react"
import { AuthContext } from "../../auth"
import { PublicRoute } from "../../router/PublicRoute"
import { MemoryRouter, Route, Routes } from "react-router-dom"


describe('pruebas en < PublicRoute.test >',()=>{
test('si no estoy autenticado  debe mostrar {children}', () => { 

    const contextValue={
        logged:false
    }

render(
    <AuthContext.Provider value={contextValue}>
        <  PublicRoute   >
               <h1>PublicRoute</h1>
        </ PublicRoute   >
    </AuthContext.Provider>
)
expect(screen.getByText('PublicRoute')).toBeTruthy();
//   screen.debug()
  })


  test('debe de navegar si está autenticado', () => { 

    const contextValue={
        logged:true,
        user:{
            name:'strider',
            id:'123'
        }
    }

render(
    <AuthContext.Provider value={contextValue}>
       <MemoryRouter initialEntries={['/login']}>
       
<Routes>

    <Route path='login' element={
        <PublicRoute>
               <h1>PublicRoute</h1>
        </PublicRoute>
    } />
    <Route path='search' element={<h1>Pagina Marvel</h1>} />

</Routes>

       </MemoryRouter>
    </AuthContext.Provider>
)
expect(screen.getByText('Pagina Marvel') ).toBeTruthy()
  })

})