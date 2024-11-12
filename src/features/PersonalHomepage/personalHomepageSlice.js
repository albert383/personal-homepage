import { createSlice } from "@reduxjs/toolkit";

const personalHomePageSlice = createSlice({
    name: "personalHomepage",
    initialState: {
        repositories: [],
        status: "initial",
    },
    reducers: {
        fetchRepositories: (state) => {
            state.status = "loading";
            state.repositories = null;
        },
        fetchRepositoriesSuccess: (state, { payload: repositories }) => {
            state.status = "succeeded";
            state.repositories = repositories;
        },
        fetchRepositoriesError: (state) => {
            state.status = "error";
            state.repositories = null;
        },
    },
});

export const {
    fetchRepositories,
    fetchRepositoriesSuccess,
    fetchRepositoriesError,
} = personalHomePageSlice.actions;

const selectPersonalHomepageState = (state) => state.personalHomepage;

export const selectRepositories = (state) => selectPersonalHomepageState(state).repositories;
export const selectRepositoriesStatus = (state) => selectPersonalHomepageState(state).status;

export default personalHomePageSlice.reducer;
