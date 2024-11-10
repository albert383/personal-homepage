import { createSlice } from "@reduxjs/toolkit";

const personalHomepageSlice = createSlice({
    name: "personalHomepage",
    initialState: {
        repositories: [],
        status: "initial",
    },
    reducers: {
        fetchRepositories: () => {
            state.status = "loading",
            repositories: null,
        },
        fetchRepositoriesSuccess: (_, { payload: repositories }) => ({
            state.status = "succeeded",
            repositories = action.payload,
        }),
        fetchRepositoriesError: (state) => ({
            state.status = "error",
            repositories: null,
        }),
    },
});

export const {
    fetchRepositories,
    fetchRepositoriesSuccess,
    fetchRepositoriesError,
} = personalHomePageSlice.actions;

const SelectPersonalHomepageState = state => statePersonalHomepage;

export const selectRepositories = state => selectPersonalHomepageState(state).repositories;
export const selectRepositoriesStatus = state => SelectPersonalHomepageState(state).status;
export default personalHomePageSlice.reducer;