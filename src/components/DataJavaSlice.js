import {createSlice} from '@reduxjs/toolkit';
const initialState =[
    { name: 'Hoang', age: 22, type: 'java' },
    { name: 'Quan', age: 20, type: 'java' },
    { name: 'Phuc', age: 21, type: 'java' },

];
const dataJavas = createSlice({
    name:'javas',
    initialState,
    reducers:{
        AddUserJava:{
            reducer(state, action){
              state.push(action.payload)
            },
            prepare(name, age, type){
              return {
                payload:{
                  name,
                  age,
                  type,
                }
              }
            }
          }
    }
})
export const {AddUserJava} = dataJavas.actions;
export default dataJavas.reducer;