import Vue from 'vue'
import Router from 'vue-router'
import Vuelidate from '../components/Vuelidate'
import ReviewPage from '../components/ReviewPage'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            redirect: {
                name: "Vuelidate",
                component: Vuelidate
            }
        },
        {
            path: '/review',
            name: 'Review',
            component: ReviewPage
        },
        
    ]
})