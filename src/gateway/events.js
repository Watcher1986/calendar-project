const baseUrl = 'https://614785ed65467e0017384b96.mockapi.io/api/v1/events';

export const createEvent = eventData => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(eventData),
  }).then(response => {
    if (!response.ok) {
      throw new Error('Failed to create event');
    }
  });
};

export const fetchEventsList = () => {
  return fetch(baseUrl).then(res => {
    if (res.ok) {
      return res.json();
    }
  });
};

export const deleteEvent = eventId => {
  return fetch(`${baseUrl}/${eventId}`, {
    method: 'DELETE',
  }).then(response => {
    if (!response.ok) {
      throw new Error('Failed to delete event');
    }
  });
};

// export const events = [
//   {
//     id: 1,
//     title: 'Go to the gym',
//     description: 'some text here',
//     dateFrom: new Date(2021, 9, 15, 10, 15),
//     dateTo: new Date(2021, 9, 15, 15, 0),
//   },
//   {
//     id: 2,
//     title: 'Go to the school',
//     description: 'hello, 2 am',
//     dateFrom: new Date(2021, 8, 16, 10, 15),
//     dateTo: new Date(2021, 8, 16, 11, 0),
//   },
//   {
//     id: 3,
//     title: 'Lunch',
//     description: '',
//     dateFrom: new Date(2021, 8, 17, 10, 30),
//     dateTo: new Date(2021, 8, 17, 11, 30),
//   },
//   {
//     id: 4,
//     title: 'Meet friend',
//     description: 'at the cafe',
//     dateFrom: new Date(2021, 8, 25, 10, 30),
//     dateTo: new Date(2021, 8, 25, 11, 0),
//   },
// ];
