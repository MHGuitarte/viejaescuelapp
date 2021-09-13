import { page } from '$app/stores';

let routerObject;
const assign = () => {
  if (routerObject) {
    page.subscribe((res) => (routerObject = res));
  }
};

const host = (r) => r.host;
const path = (r) => r.path;
const slugs = (r) => r.path.split('/');
const fullPath = (r) => `${r.host}${r.path}`;
const params = (r) => r.params;
const queryParams = (search) =>
  search
    .substring(1)
    .split('&')
    .map((s) => ({
      key: s.split('=')[0],
      value: s.split('=')[1],
    }));

export const isWorking = () => {
  assign();
  return routerObject;
};

const router = {
  host: () => {
    assign();
    return host(routerObject);
  },

  path: () => {
    assign();
    return path(routerObject);
  },

  slugs: () => {
    assign();
    return slugs(routerObject);
  },
  fullPath: () => {
    assign();
    return fullPath(routerObject);
  },
  params: () => {
    assign();
    return params(routerObject);
  },
  queryParams: () => {
    assign();
    return queryParams(routerObject);
  },
};

export default router;
