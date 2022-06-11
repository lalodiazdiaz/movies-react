const Api = "https://api.themoviedb.org/3/";

export function get(path) {
  return fetch(Api + path, {
    headers: {
      Authorization:
        " Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NDViODk3NjY1MzZhMTgxMDE5NGEyMjU0Yzk5YTljYiIsInN1YiI6IjYxOGIwMDY0MmNkZTk4MDA2Mjc3MTBkMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.koMdWFKAGpTBWdmlf0QGszUcqmY3tqA16-AM9wdCe98",
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((result) => result.json());
}
