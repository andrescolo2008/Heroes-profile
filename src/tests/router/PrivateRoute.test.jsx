import { render,screen } from "@testing-library/react"
import { AuthContext } from "../../auth"
import { MemoryRouter, Route, Routes } from "react-router-dom"
import { PrivateRoute } from "../../router/PrivateRoute"

describe('pruebas en < PrivateRoute>',()=>{
test('debe de mostrar el children si  está autenticado', () => { 

Storage.prototype.setItem = jest.fn();

    const contextValue={
        logged:true,
        user:{
            id:'abc',
            name:'strider'
        }
    }

render(
    <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/search?q=batman']}>

        <  PrivateRoute   >
               <h1>Ruta privada</h1>
        </ PrivateRoute   >
        </MemoryRouter>
    </AuthContext.Provider>
)
expect(screen.getByText('Ruta privada')).toBeTruthy();
expect(localStorage.setItem).toHaveBeenCalledWith('lastPath','/search?q=batman');

    })
})