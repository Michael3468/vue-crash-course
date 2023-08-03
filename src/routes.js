import { createRouter, createWebHashHistory } from 'vue-router';
import PageViewer from './views/PageViewer';
import CreatePage from './views/CreatePage';
import PagesList from './views/PagesList';
import PagesManagement from './views/PagesManagement';

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
      ],
    },
  ],
});

export default router;
