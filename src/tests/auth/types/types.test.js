import { types } from "../../../auth/context"


describe('pruebas en < types>',()=>{
test('debe de regresar estos types', () => { 
console.log(types);
expect(types).toEqual({
    login:'[Auth] login',
    logout:'[Auth] logout',
   })

   })
})

