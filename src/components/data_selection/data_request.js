export function dataRequest () {
    return fetch(`https://api.github.com/users/${login}`).then((response) => {
      return response.json();
    });
}