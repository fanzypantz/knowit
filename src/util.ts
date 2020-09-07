import { RepoData } from "@/interfaces";

// recursive fetch promise in case the API maxes out
export function fetchApi(
  page: number,
  origResolve?: any,
  origReject?: any
): Promise<RepoData> {
  return new Promise<RepoData>((resolve, reject) => {
    resolve = origResolve ? origResolve : resolve;
    reject = origReject ? origReject : reject;

    fetch(
      `https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc&per_page=100&page=${page}`
    ).then(response => {
      if (!response.ok) {
        if (response.statusText === "rate limit exceeded") {
          console.log("Trying again in two seconds");
          setTimeout(() => fetchApi(page, resolve, reject), 2000);
        } else {
          throw new Error(response.statusText);
        }
      } else {
        resolve(response.json());
      }
    });
  });
}

export function paginate(
  array: Array<any>,
  pageSize: number,
  page: number
): Array<any> {
  return array.slice((page - 1) * pageSize, page * pageSize);
}
