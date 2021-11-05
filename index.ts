import {
  constructServerLayout,
} from 'single-spa-layout/server';

const serverLayout = constructServerLayout({
  filePath: 'index.html',
});

console.log(serverLayout);
