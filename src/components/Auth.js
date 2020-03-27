const Auth = {
    isLogin : false,
    login(cb){
        this.isLogin = true
        setTimeout(cb,1000)
    },
    logout(cb){
        this.isLogin = false
        setTimeout(cb, 1000)
    }
}

export default Auth;