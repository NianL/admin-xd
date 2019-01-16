import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/page/Login'
//admin page
import AdminPermissions from '@/page/admin/Permissions'
import AdminFusing from '@/page/admin/Fusing'
import AdminHeartbeat from '@/page/admin/Heartbeat'
import AdminLog from '@/page/admin/Log'
import AdminMobile from '@/page/admin/Mobile'

//auditor page
import AuditorHome from '@/page/auditor/Home'
import AuditorAnalyze from '@/page/auditor/Analyze'
import AuditorViewRecord from '@/page/auditor/ViewRecord'
import AuditorViewWarning from '@/page/auditor/ViewWarning'
import AuditorAudit from '@/page/auditor/Audit'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'login',
      component: Login
    },
    //admin page
    {
      path: '/admin/permissions',
      name: 'admin-permissions',
      component: AdminPermissions
    }, {
      path: '/admin/fusing',
      name: 'admin-fusing',
      component: AdminFusing
    }, {
      path: '/admin/heartbeat',
      name: 'admin-heartbeat',
      component: AdminHeartbeat
    }, {
      path: '/admin/log',
      name: 'admin-log',
      component: AdminLog
    }, {
      path: '/admin/mobile',
      name: 'admin-mobile',
      component: AdminMobile
    },
    //auditor page
    {
      path: '/auditor/home',
      name: 'auditor-home',
      component: AuditorHome
    },
    {
      path: '/auditor/analyze',
      name: 'auditor-analyze',
      component: AuditorAnalyze
    },
    {
      path: '/auditor/view-record',
      name: 'auditor-view-record',
      component: AuditorViewRecord
    },
    {
      path: '/auditor/view-warning',
      name: 'auditor-view-warning',
      component: AuditorViewWarning
    },
    {
      path: '/auditor/audit',
      name: 'auditor-audit',
      component: AuditorAudit
    }
  ]
})
