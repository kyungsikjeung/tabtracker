import Api from '@/services/Api'

export default {
    register(credentials){
        console.log("test");
        return Api().post('register',credentials)
    }
}

import Api from "@Service/"


// AuthenticationService.register({
//     email : 'testing@gmail.com',
//     password : '123456'
// })

