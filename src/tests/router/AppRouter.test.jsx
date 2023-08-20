import { render,screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { AuthContext } from "../../auth"
import { AppRouter } from "../../router/AppRouter"


describe('pruebas en <AppRouter >',()=>{

test(' Debe de mostrar el login sino está autenticado ', () => { 
const contextValue={
    logged:false,
    user:{
        id:'abc',
        name:'juan'
    }
}
render(
            <MemoryRouter initialEntries={['/marvel']}>    
                 <AuthContext.Provider value={contextValue}>
                                   <AppRouter/>
                 </AuthContext.Provider>
            </MemoryRouter>
    
)
expect(screen.getAllByText('Login').length).toBe(2)
    })

    test(' Debe de mostrar el componente marvel si está autenticado ', () => { 
        const contextValue={
            logged:true,
        }
        render(
                    <MemoryRouter initialEntries={['/login']}>    
                         <AuthContext.Provider value={contextValue}>
                                           <AppRouter/>
                         </AuthContext.Provider>
                    </MemoryRouter>
            
        )
        screen.debug(
        )
        expect(screen.getAllByText('Search').length).toBeGreaterThan(1)
        expect(screen.getAllByText('Marvel').length).toBeGreaterThanOrEqual(1)
            })

})