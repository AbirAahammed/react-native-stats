export class SampleData {
    getMoviesFromApi = () => {
        return fetch('http://localhost:3000/Movies')
          .then((response) => response.json())
          .then((json) => {
            return json.movies;
          })
          .catch((error) => {
            console.error(error);
          });
      };
}