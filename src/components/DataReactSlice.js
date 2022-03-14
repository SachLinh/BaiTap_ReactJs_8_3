import { createSlice } from "@reduxjs/toolkit";
const initialState = [
  { name: "Linh", age: 22, type: "react" },
  { name: "Huy", age: 20, type: "react" },
  { name: "Long", age: 21, type: "react" },
];
const dataReacts = createSlice({
  name: "dataReactList",
  initialState,
  reducers: {
    AddUserReact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name, age, type) {
        return {
          payload: {
            name,
            age,
            type,
          },
        };
      },
    },
    updateUserReact(state, action) {
      let { name, tuoiMoi, lopMoi } = action.payload;
      let arr = state.find((item) => item.name === name);
      if (arr) {
        if(lopMoi === "react")
        {
          arr.age = tuoiMoi;
          arr.type = lopMoi;
        }
        else{
          for(let i = 0; i<state.length; i++)
          {
            if(state[i].name === name)
              {
                state.splice(i, 1);
              }
          }
        }
      }
    },
    deleteUserReact(state, action) {
      let { index } = action.payload;
      state.splice(index, 1);
    },
  },
});
export const { AddUserReact, updateUserReact, deleteUserReact } = dataReacts.actions;
export default dataReacts.reducer;
