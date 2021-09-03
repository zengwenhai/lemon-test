import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

let router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/dashboard',
            name: 'index'
            // name: 'dashboard'
        },
        {
            path: '/',
            // component: resolve => require(['../components/common/Home.vue'], resolve),
            component: () => import('../components/common/Home'),
            meta: { title: '系统首页' },
            children:[
                {
                    path: '/dashboard',
                    // component: resolve => require(['../components/page/Dashboard.vue'], resolve),
                    component: () => import('../components/page/Dashboard'),
                    meta: { title: '系统首页' }
                },
                {
                    path: '/projects_list',
                    // component: resolve => require(['../components/page/ProjectList.vue'], resolve),
                    component: () => import('../components/page/ProjectList'),
                    meta: { title: '项目列表' },
                    name: 'projects_list'
                },
                {
                    path: '/projects_add',
                    // component: resolve => require(['../components/page/ProjectAdd.vue'], resolve),
                    component: () => import('../components/page/ProjectAdd'),
                    meta: { title: '项目新增' },
                    name: 'projects_add'
                },
                {
                    path: '/envs_list',
                    // component: resolve => require(['../components/page/EnvList.vue'], resolve),
                    component: () => import('../components/page/EnvList'),
                    meta: { title: '环境列表' },
                    name: 'envs_list'
                },
                {
                    path: '/envs_add',
                    // component: resolve => require(['../components/page/EnvAdd.vue'], resolve),
                    component: () => import('../components/page/EnvAdd'),
                    meta: { title: '环境新增' },
                    name: 'envs_add'
                },
                {
                    path: '/builtin_list',
                    // component: resolve => require(['../components/page/BuiltinList.vue'], resolve),
                    component: () => import('../components/page/BuiltinList'),
                    meta: { title: '函数列表' },
                    name: 'builtin_list'
                },
                {
                    path: '/builtin_edit/:id',
                    // props: true,
                    // component: resolve => require(['../components/page/BuiltinEdit.vue'], resolve),
                    component: () => import('../components/page/BuiltinEdit'),
                    meta: { title: '函数编辑' },
                    name: 'builtin_edit'
                },
                {
                    path: '/interfaces_list',
                    // component: resolve => require(['../components/page/InterfaceList.vue'], resolve),
                    component: () => import('../components/page/InterfaceList'),
                    meta: { title: '接口列表' },
                    name: 'interfaces_list'
                },
                {
                    path: '/interfaces_add',
                    // component: resolve => require(['../components/page/InterfaceAdd.vue'], resolve),
                    component: () => import('../components/page/InterfaceAdd'),
                    meta: { title: '接口新增' },
                    name: 'interfaces_add'
                },
                {
                    path: '/testcases_list',
                    // component: resolve => require(['../components/page/TestcaseList.vue'], resolve),
                    component: () => import('../components/page/TestcaseList'),
                    meta: { title: '用例列表' },
                    name: 'testcases_list'
                },
                {
                    path: '/testcases_add',
                    // component: resolve => require(['../components/page/TestcaseAdd.vue'], resolve),
                    component: () => import('../components/page/TestcaseAdd'),
                    meta: { title: '用例新增' },
                    name: 'testcases_add'
                },
                {
                    path: '/testcases_edit/:id',
                    // component: resolve => require(['../components/page/TestcaseEdit.vue'], resolve),
                    component: () => import('../components/page/TestcaseEdit'),
                    meta: { title: '用例编辑' },
                    name: 'testcases_edit'
                },
                {
                    path: '/configures_list',
                    // component: resolve => require(['../components/page/ConfigureList.vue'], resolve),
                    component: () => import('../components/page/ConfigureList'),
                    meta: { title: '配置列表' },
                    name: 'configures_list'
                },
                {
                    path: '/configures_add',
                    // component: resolve => require(['../components/page/ConfigureAdd.vue'], resolve),
                    component: () => import('../components/page/ConfigureAdd'),
                    meta: { title: '配置新增' },
                    name: 'configures_add'
                },
                {
                    path: '/configures_edit/:id',
                    // component: resolve => require(['../components/page/ConfigureEdit.vue'], resolve),
                    component: () => import('../components/page/ConfigureEdit'),
                    meta: { title: '配置编辑' },
                    name: 'configures_edit'
                },
                {
                    path: '/testsuites_list',
                    // component: resolve => require(['../components/page/TestsuiteList.vue'], resolve),
                    component: () => import('../components/page/TestsuiteList'),
                    meta: { title: '套件列表' },
                    name: 'testsuites_list'
                },
                {
                    path: '/testsuites_add',
                    // component: resolve => require(['../components/page/TestsuiteAdd.vue'], resolve),
                    component: () => import('../components/page/TestsuiteAdd'),
                    meta: { title: '套件新增' },
                    name: 'testsuites_add'
                },
                {
                    path: '/testsuites_edit/:id',
                    // component: resolve => require(['../components/page/TestsuiteEdit.vue'], resolve),
                    component: () => import('../components/page/TestsuiteEdit'),
                    meta: { title: '套件编辑' },
                    name: 'testsuites_edit'
                },
                {
                    path: '/reports_list',
                    // component: resolve => require(['../components/page/ReportList.vue'], resolve),
                    component: () => import('../components/page/ReportList'),
                    meta: { title: '报告列表' },
                    name: 'reports_list'
                },
                {
                    path: '/reports_view/:id',
                    // component: resolve => require(['../components/page/ReportView.vue'], resolve),
                    component: () => import('../components/page/ReportView'),
                    meta: { title: '报告查看' },
                    name: 'reports_view'
                },
                // {
                //     path: '/other/',
                //     component: resolve => require(['../components/page/Other.vue'], resolve),
                //     meta: { title: '其他' },
                //     name: 'other'
                // },
                {
                    path: '/404',
                    // component: resolve => require(['../components/page/404.vue'], resolve),
                    component: ()  => import('../components/page/404'),
                    meta: { title: '自动化平台' },
                    name: '404'
                },
                {
                    path: '/403',
                    // component: resolve => require(['../components/page/403.vue'], resolve),
                    component: () => import('../components/page/403'),
                    meta: { title: '自动化平台' },
                    name: '403'
                },
            ]
        },
        {
            path: '/login',
            // component: resolve => require(['../components/page/Login.vue'], resolve),
            component: () => import('../components/page/Login'),
            name: 'login'
        },
        {
            path: '/register',
            // component: resolve => require(['../components/page/Register.vue'], resolve),
            component: () => import('../components/page/Register'),
            name: 'register'
        },
        {
            path: '*',
            redirect: '/404',
            name: '404'
        }
    ]
});

//使用钩子函数对路由进行权限跳转
router.beforeEach((to, from, next) => {
    const token = sessionStorage.getItem('token') || localStorage.getItem('token');

    if(!token && to.path !== '/login' && to.path !== '/register'){   // 如果没有token值, 那么重定向到登录页面
        next({
          path: '/login',
        });
      }else {
        let routerName = ['builtin_edit', 'configures_edit', 'testcases_edit', 'reports_view', 'testsuites_edit'];
        // console.log('routerName', routerName);
        if (routerName.includes(from.name)) {
            let path_name = to.path.split("/")[2];
            // console.log('path_name', path_name);
            if (/\D/.test(path_name)) {
                next({name: path_name});
            }
        }
        
        // if (from.name === 'builtin_edit') {
        //     console.log(to);
        //     let path_name = to.path.split("/")[2];
        //     console.log(path_name);
        //     if (/\D/.test(path_name)) {
        //         next({name: path_name});
        //     }
        // }

        /* 路由发生变化修改页面title */
        if (to.meta.title){
            document.title = to.meta.title
        }

        next();
      }
});


//抛出路由
export default router;