const baseUrl = 'https://614785ed65467e0017384b96.mockapi.io/api/v1/events';

export const createEvent = async eventData => {
  const response = await fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(eventData),
  });
  if (!response.ok) {
    throw new Error('Failed to create event');
  }
};

export const fetchEventsList = async () => {
  const res = await fetch(baseUrl);
  if (res.ok) {
    return res.json();
  }
};

export const deleteEvent = async eventId => {
  const response = await fetch(`${baseUrl}/${eventId}`, {
    method: 'DELETE',
  });
  
  if (!response.ok) {
    throw new Error('Failed to delete event');
  }
};
