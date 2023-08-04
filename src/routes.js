import { createRouter, createWebHashHistory } from 'vue-router';
import PageViewer from './views/PageViewer';
import CreatePage from './views/CreatePage';
import PagesList from './views/PagesList';
import PagesManagement from './views/PagesManagement';
import PageEdit from './views/PageEdit';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/:index?', component: PageViewer, props: true },
    {
      path: '/pages',
      component: PagesManagement,
      children: [
        { path: '', component: PagesList },
        { path: 'create', component: CreatePage },
        { path: ':index/edit', component: PageEdit, props: true },
      ],
    },
  ],
});

export default router;
