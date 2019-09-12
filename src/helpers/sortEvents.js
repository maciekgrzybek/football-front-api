function sortEvents(events) {
  const sortedEvent = {};
  if (events) {
    events
      .sort((item) => {
        return !item.linkedEventTypeName ? 1 : -1;
      })
      .forEach((event) => {
        const eventTypeKey = event.linkedEventTypeName || event.typeName;
        if (!sortedEvent[eventTypeKey]) {
          sortedEvent[eventTypeKey] = [];
        }
        sortedEvent[eventTypeKey] = [...sortedEvent[eventTypeKey], event];
      });
  }
  return sortedEvent;
}

export default sortEvents;
