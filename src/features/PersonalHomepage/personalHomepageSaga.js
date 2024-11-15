import { getRepositories } from './personalHomepageAPI';
import { takeLatest, call, put, delay } from 'redux-saga/effects';
import { fetchRepositories, fetchRepositoriesSuccess, fetchRepositoriesError } from './personalHomepageSlice';


const loadingDelay = 2000;
function* fetchRepositoriesHandler({ payload: username }) {
    try {
        yield delay(loadingDelay); // for loading demonstration only
        const repositories = yield call(getRepositories, username);
        yield put(fetchRepositoriesSuccess(repositories));
    } catch (error) {
        yield put(fetchRepositoriesError(error));
    }
}

export default function* personalHomepageSaga() {
    yield takeLatest(fetchRepositories, fetchRepositoriesHandler);
}