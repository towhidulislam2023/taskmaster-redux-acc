import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  tasks: [],
};
export const TaskSlice = createSlice({
  name: "taskSlice",
  initialState,
  reducers: {
    addTasks: (state, { payload }) => {
      if (state.tasks.length == 0) {
        state.tasks.push({ id: 1, status: "pending", ...payload });
      } else {
        const lastElement = state.tasks.at(-1);
        state.tasks.push({
          id: lastElement.id + 1,
          status: "pending",
          ...payload,
        });
      }
    },
    removeTask:(state,{payload})=>{
    state.tasks=state.tasks.filter((item)=>item.id!==payload)
    },
    updateStatus:(state,{payload})=>{
        const target=state.tasks.find((task)=>task.id===payload.id)
        target.status=payload.status
    }
  },
});
export const { addTasks ,removeTask,updateStatus} = TaskSlice.actions;
export default TaskSlice.reducer;
