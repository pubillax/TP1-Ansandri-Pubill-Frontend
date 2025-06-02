
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/modify"
  },
  {
    "renderMode": 2,
    "route": "/agreggate"
  },
  {
    "renderMode": 2,
    "route": "/delete"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 506, hash: '2b06d390fadf1c6fd00e63ae4d28373e9da57647e27378fb0d61232b6ec9676e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1019, hash: 'f678dc32d74bac67b5e3432b6ce203691825f8119d87d439d8dd73acde7ee21b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'modify/index.html': {size: 2981, hash: '0bff6b43deb6bdf67fc20695e294e0df0e77ae5e71d4f4744b705dcaa95ecbc5', text: () => import('./assets-chunks/modify_index_html.mjs').then(m => m.default)},
    'agreggate/index.html': {size: 2987, hash: 'fa265af88269a5e7b9643f27e9f4e6e823d6ea7d9612098ca6b8585f40badc7b', text: () => import('./assets-chunks/agreggate_index_html.mjs').then(m => m.default)},
    'delete/index.html': {size: 2288, hash: '3aa3529e26463d2ba7e73310d84f6d207230f9ff3564533dd36c23f6064030a3', text: () => import('./assets-chunks/delete_index_html.mjs').then(m => m.default)},
    'index.html': {size: 2284, hash: 'd30f5ef73d56704d28f2fa90637febf2ef8fe2fc60df829d2ff647f956544a8a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
