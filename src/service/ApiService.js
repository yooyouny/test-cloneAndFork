import { API_BASE_URL } from "../app-config";
import HttpStatus from 'http-status-enum';

export function call(api, method, request) {
  let options = {
    headers: new Headers({
      "Content-Type": "application/json",
    }),
    url: API_BASE_URL + api,
    method: method,
  };
  if (request) {
    // GET method
    options.body = JSON.stringify(request);

  };
  return fetch(options.url, options)
  .then((response) => {
    if (!response.ok) {
      return response.text().then((text) => {
        const error = new Error(text);
        error.status = response.status;
        error.statusText = response.statusText;
        throw error;
      });
    }
    return response.json();
  })
  .catch((error) => {
    console.error(error);
    if(error.status === HttpStatus.CONFLICT) { 
        alert('Looks like this destination is already used for another short link');
    }
    throw error;
  });

}