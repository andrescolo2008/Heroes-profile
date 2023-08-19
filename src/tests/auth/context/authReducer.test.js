import { authReducer } from "../../../auth/context/authReducer"
import { types } from "../../../auth/types/types"



describe('pruebas en < authReducer>',()=>{
test('debe retornar el estado por defecto ', () => { 
   const state = authReducer({logged:false},{})

   expect(state).toEqual({logged:false},{})
//    expect(state).toBeFalsy()
    
  })
  test('debe de llamar el login  autenticar y establecer el usuario  ', () => { 
   const action={
    type:types.login,
    payload:{
        name:'Juan',
        id:'1,2,3'
    }
   }
const state =authReducer({logged:false},action)
expect(state).toEqual({
    logged:true,
    user:action.payload
})

   })
 
   test('debe de borrar  el usuario  y ydejar el logged en false  ', () => { 
    const action={
     type:types.logout,
     
    }
 const state =authReducer({logged:false},action)
 expect(state).toEqual({
     logged:false,
    
 })
 
    })

})