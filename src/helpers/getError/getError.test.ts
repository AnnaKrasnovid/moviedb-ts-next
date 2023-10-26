import { getError } from "./getError";

let message ='';
let params:any={};

const res1= {status: 101}
const res2= {status: 200}
const res3= {status: 300}

// describe('верное округление числа', () => {
//     test('корректное значение', () => {
//         expect(getError(res1,params, message)).toBeTruthy(message);
//     });    
//     test('корректное значение', () => {
//         expect(getError(res2,params, message)).toBe(undefined);
//     });  
// });