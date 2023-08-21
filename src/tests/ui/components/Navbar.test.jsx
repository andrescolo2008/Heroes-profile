import { fireEvent, render,screen } from "@testing-library/react"
import { MemoryRouter, useNavigate } from "react-router-dom"
import { AuthContext } from "../../../auth/context/AuthContext"
import { NavBar } from "../../../ui/components/NavBar"

const mockUseNavigate=jest.fn();

jest.mock('react-router-dom',()=>({
    ...jest.requireActual('react-router-dom'),
    useNavigate:()=> mockUseNavigate,
}))

describe('pruebas en < Navbar>',()=>{

    const contextValue={
        logged:true,
        user:{
            name:'juan'
        },
        logout:jest.fn()
    }
    
    beforeEach(()=> jest.clearAllMocks());

    test(' debe mostrar el usuario ', () => { 

        
        render(
                         <AuthContext.Provider value={contextValue}>
                    <MemoryRouter>    

                                           <NavBar/>

                    </MemoryRouter>   
                         </AuthContext.Provider>
        )     
        // expect(contextValue.user.name).toContain('juan')    
        expect(screen.getByText('juan')).toBeTruthy()    
    })

  test(' debe de llamar el logout y el navigate cuando se haga click en logout ', () => { 
        
    
    render(
                     <AuthContext.Provider value={contextValue}>
                <MemoryRouter >    
                                       <NavBar />
                </MemoryRouter>   
                     </AuthContext.Provider>
    )
    const buttonElement = screen.getByRole('button');
        fireEvent.click( buttonElement );
        
    expect(contextValue.buttonElement).toHaveBeenCalled()
    expect(mockUseNavigate).toHaveBeenCalledWith(('/login'),{" replace":true })
    
 })
})