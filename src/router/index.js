import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import PreSchool from '../views/PreSchool.vue'
import PrimarySchool from '../views/PrimarySchool.vue'
import SecondarySchool from '../views/SecondarySchool.vue'
import Pre from '../views/pre.vue'
import Pri from '../views/pri.vue'
import Sec from '../views/sec.vue'
import AboutSchool from '../views/aboutschool.vue'
import MissionVision from '../views/vision_mission.vue'
import Procedure from '../views/procedure.vue'
import Fees from '../views/Fees.vue'
import AcademicCalendar from '../views/ac_calendar.vue'
import calendar from '../views/calendar.vue'
import FeesRegister from '../views/feesregistry.vue'
import CoursesRegister from '../views/CourseRegistry.vue'
import teacherlist from '../views/teacherlist.vue'
import TeacherRegister from '../views/teacher_register.vue'
import  about_teacher from '../views/teacherabout.vue'
import Login from '../views/Login.vue'
import logout from '../views/logout.vue'
import Career from '../views/Career.vue'
import CareerView from '../views/CareerView.vue'

import Contactus from '../views/Contactus.vue'
import waitinglist from '../views/waitinglist.vue'
import newsevent from '../views/news_event.vue'
import waitinglistview from '../views/waitinglistview.vue'
import waitinglistdetail from '../views/waitinglistdetail.vue'
import eventregister from '../views/eventregister.vue'
import ContactusView from '../views/ContactusView.vue'
import newpri from '../views/newpri.vue'
import newsec from '../views/newsec.vue'
import parentpolicy from '../views/parentpolicy.vue'
import paymentpolicy from '../views/paymentpolicy.vue'
import pschool from '../views/pschool.vue'

const routes = [
  {
    path: '/newsevent',
    name: 'newsevent',
    component: newsevent
  },
  {
    path: '/pschool',
    name: 'pschool',
    component: pschool
  },


  

  {
    path: '/parentpolicy',
    name: 'parentpolicy',
    component: parentpolicy
  },

  {
    path: '/paymentpolicy',
    name: 'paymentpolicy',
    component: paymentpolicy
  },


  {
    path: '/Admin/eventregister',
    name: 'eventregister',
    component: eventregister
  },
  {
    path: '/Admin/CareerView',
    name: 'CareerView',
    component: CareerView
  },

  

  {
    path: '/Admin/waitinglistdetail',
    name: 'waitinglistdetail',
    component: waitinglistdetail
  },
  {
    path: '/Admin/waitinglistview',
    name: 'waitinglistview',
    component: waitinglistview
  },
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/AboutSchool',
    name: 'AboutSchool',
    component:  AboutSchool,
  
   
  },
  {
    path: '/AboutSchool#examcenter',
    name: 'AboutSchool_exam',
    component:  AboutSchool,
   
  },
  {
    path: '/AboutSchool',
    name: 'AboutSchool_partner',
    component:  AboutSchool,
   
  },
  {
    path: '/about_teacher',
    name: 'about_teacher',
    component:  about_teacher
  },
  {
    path: '/Admin/ContactusView',
    name: 'ContactusView',
    component:  ContactusView
  },
  
  
 
  {
    path: '/Admin/FeesRegister',
    name: 'FeesRegister',
    component:  FeesRegister
  },
  {
    path: '/teacherlist',
    name: 'teacherlist',
    component:  teacherlist
  },
  {
    path: '/Career',
    name: 'Career',
    component:  Career
  },

  {
    path: '/login',
    name: 'login',
    component:  Login
  },
  {
    path: '/logout',
    name: 'logout',
    component:  logout
  },
  {
    path: '/Admin/CoursesRegister',
    name: 'CoursesRegister',
    component:  CoursesRegister
  },
  {
    path: '/Admin/TeacherRegister',
    name: 'TeacherRegister',
    component:  TeacherRegister
  },
  {
    path: '/Admin/Calendar',
    name: 'calendar',
    component:  calendar
  },
  {
    path: '/AcademicCalendar',
    name: 'AcademicCalendar',
    component:  AcademicCalendar
  },
  {
    path: '/MissionVision',
    name: 'MissionVision',
    component:  MissionVision
  },


  {
    path: '/Admission',
    name: 'Procedure',
    component:  Procedure
  },



 
  {
    path: '/Course/PreSchool',
    name: 'Pre',
    component: Pre
  },

  
  {
    path: '/Course/PrimarySchool',
    name: 'newpri',
    component: newpri
  },
  {
    path: '/Course/SecondarySchool',
    name: 'newsec',
    component: newsec
  },

  {
    path: '/Course/pri',
    name: 'pri',
    component: Pri
  },

  {
    path: '/Course/sec',
    name: 'sec',
    component: Sec
  },

  {
    path: '/Contactus',
    name: 'Contactus',
    component: Contactus
  },
{
  path: '/waitinglist',
  name: 'waitinglist',
  component: waitinglist
  

},

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AboutView
  },

  {
    path: '/Fees',
    name: 'Fees',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Fees
  },
  

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router