 const apiCall = (link) => fetch(link).then(response => response.json());
 export default apiCall;