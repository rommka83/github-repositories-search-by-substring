import { Octokit } from 'octokit';
import { modalRender } from './modalRender';
import { renderList } from './render-list';

const octokit = new Octokit({});
export async function userRequest(str) {
  await octokit
    .request(
      `GET /search/repositories?q=${encodeURIComponent(
        str
      )} in:name,description`,
      { per_page: '10' }
    )
    .then((resp) => {
      return resp.data.items;
    })
    .then((repositories) => {
      repositories.length === 0
        ? modalRender('По Вашему запросу ни чего не найдено.')
        : renderList(repositories);
    })
    .catch((err) => {
      modalRender(`${err.status}:${err.message}`);
    });
}
