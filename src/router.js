import Vue from 'vue'
import Router from 'vue-router'
import Hello from './components/HelloWorld'
import Dashboard from './components/dashboard';
import Add_Patient from './components/patient/add-patient'
import Patients_list from './components/patient/patients-list'
import Patient_Payment from './components/patient/patients-payment'
import Profile from './components/Add-Profile'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Dashboard',
            component: Dashboard
        },
        {
            path: '/hello',
            name: 'Hello',
            component: Hello
        },
        {
            path: '/add-patient',
            name: 'Add_Patient',
            component: Add_Patient
        },
        {
            path: '/patients-list',
            name: 'Patients-List',
            component: Patients_list
        },
        {
            path: '/patients-payment',
            name: 'Patient_Payment',
            component: Patient_Payment
        },
        {
            path: '/add-profile',
            name: 'Profile',
            component: Profile
        },
    ]
})
