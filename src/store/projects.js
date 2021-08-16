import { createSlice } from '@reduxjs/toolkit';

let lastId = 0;

const projectSlice = createSlice({
  name: 'Projects',
  initialState : [],
  reducers: {
    // actions => actions handler
    projectAdded: (projects, action) => {
      projects.push({
        id: ++lastId,
        ProjectName : action.payload.name,
      })
    }
  }
})

export const { projectAdded } = projectSlice.actions;
export default projectSlice.reducer;