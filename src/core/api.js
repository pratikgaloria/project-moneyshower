import axios from 'axios';
import { call, put } from 'redux-saga/effects';
import { has } from '../utils';

export const api = axios.create({
  baseURL: '/api',
  timeout: 5000,
});

export class XhrInterface {
  static get(url, config = {}) {
    return api.get(url, config).then(res => ({
      res,
    })).catch(error => ({
      error,
    }));
  }

  static put(url, data = {}, config = {}) {
    return api.put(url, data, config).then(res => ({
      res,
    })).catch(error => ({
      error,
    }));
  }

  static post(url, data = {}, config = {}) {
    return api.post(url, data, config).then(res => ({
      res,
    })).catch(error => ({
      error,
    }));
  }

  static delete(url, config = {}) {
    return api.delete(url, config).then(res => ({
      res,
    })).catch(error => ({
      error,
    }));
  }
}

export function* handleXhr(httpCallType, uri, actions, data = {}, config = {}) {
  const xhrResponse = yield call(XhrInterface[httpCallType.toLowerCase()], uri, data, config);

  if (has(xhrResponse, 'error')) {
    yield put(actions.failure(xhrResponse));
    return false;
  }

  yield put(actions.success(xhrResponse));
  return true;
}

export default handleXhr;
