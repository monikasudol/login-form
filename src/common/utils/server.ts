export const post = (url: string, body?: object) => fetch(url, {
  method: 'POST',
  body: body && JSON.stringify(body),
  headers: {
    'Content-Type': 'application/json',
  },
});

export const toJSON = (response: any) => response.json();
