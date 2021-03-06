import { takeLatest } from 'redux-saga/effects';

import { FETCH_SCRIPTS } from '../ducks/scripts';
import { fetchScripts } from './scripts';
import { FETCH_DEPENDENCIES } from '../ducks/dependencies';
import { fetchDependencies } from './dependencies';

export default function* index() {
  yield* fetchScripts();
  yield* fetchDependencies();
  takeLatest(FETCH_SCRIPTS, fetchScripts);
  takeLatest(FETCH_DEPENDENCIES, fetchDependencies);
}
