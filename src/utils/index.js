/*
 * Constant creators
 */

export function createLifecycleConstants(moduleName) {
  return {
    MOUNT: `${moduleName.toUpperCase()}/LIFECYCLE:MOUNT`,
    UNMOUNT: `${moduleName.toUpperCase()}/LIFECYCLE:UNMOUNT`,
  };
}

export function createXhrConstants(moduleName, actionName = '') {
  let finalActionName = actionName;
  if (actionName !== '') {
    finalActionName = `${actionName}_`;
  }
  return {
    SUCCESS: `${moduleName.toUpperCase()}/XHR:${finalActionName.toUpperCase()}SUCCESS`,
    FAILURE: `${moduleName.toUpperCase()}/XHR:${finalActionName.toUpperCase()}FAILURE`,
  };
}

export function createConstant(moduleName, actionType, actionName) {
  return `${moduleName.toUpperCase()}/${actionType.toUpperCase()}:${actionName.toUpperCase()}`;
}

/**
 * Action dcreators
 */

export function createAction(type, payload = {}) {
  return { type, payload };
}

export function createLifecycleActions(types) {
  return {
    mount: payload => createAction(types.MOUNT, payload),
    unmount: () => createAction(types.UNMOUNT),
  };
}

export function createXhrActions(types) {
  return {
    success: payload => createAction(types.SUCCESS, payload),
    failure: error => createAction(types.FAILURE, error),
  };
}
