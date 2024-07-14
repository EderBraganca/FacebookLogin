export const Login = () =>{
    return (
        <form className="formLogin">
            <input type="text" placeholder="Email address or phone number"/>
            <input type="password" placeholder="Password"/>
            <button className="buttonLogin" type="submit">Log In</button>
            <a className="forgotLink" href="https://www.facebook.com/login/identify/?ctx=recover&ars=facebook_login&from_login_screen=0">Forgot Password?</a> 
            <button className="buttonCreateAccount">Create New Account</button>
        </form>
    )
}