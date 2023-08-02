const events = new Map();

export default {
  $on(eventName, fn) {
    if (!events.has(eventName)) {
      events.set(eventName, []);
    }

    events.get(eventName).push(fn);
  },

  // eslint-disable-next-line no-unused-vars
  $off(eventName, fn) {
    throw { message: 'Not implemented' };
  },

  $emit(eventName, data) {
    if (events.has(eventName)) {
      events.get(eventName).forEach((fn) => fn(data));
    }
  },
};
