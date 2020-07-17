// Disable React Dev Tools in specific environments.
const disableDevTools = (environments) => {
  if (
    environments.includes(process.env.NODE_ENV) &&
    typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__ === 'object'
  ) {
    for (let [key, value] of Object.entries(
      window.__REACT_DEVTOOLS_GLOBAL_HOOK__,
    )) {
      window.__REACT_DEVTOOLS_GLOBAL_HOOK__[key] =
        typeof value == 'function' ? () => {} : null;
    }
  }
};

export default disableDevTools;
