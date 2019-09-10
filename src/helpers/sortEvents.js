function sortEvents(events) {
  const sortedEvent = {};
  if (events) {
    events.data.forEach((event) => {
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
