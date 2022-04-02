export const Signup = () => {

    return (
        <>
            <section className="form-section">
                <form action="" className="form container-card xxl-card-width pad-lg">
                    <div className="head-2 highlightMainText bold">Signup</div>
                    <div className="custom-input-one mar-y-4 login-input">
                        <input
                            id="email"
                            type="email"
                            className="input-field"
                            autocomplete="off"
                            placeholder=" "
                        />
                        <label for="email" className="input-label text-2"
                        >Enter Your Email Id Here</label
                        >
                    </div>
                    <div className="custom-input-one mar-y-2 login-input">
                        <input
                            id="password"
                            type="password"
                            className="input-field"
                            autocomplete="off"
                            placeholder=" "
                        />
                        <span
                            className="iconify icons text-2"
                            data-icon="akar-icons:eye-slashed"
                        ></span>
                        <label for="password" className="input-label text-2"
                        >Enter Your Password Here</label
                        >
                    </div>
                    <div className="mar-y-3">
                        <button className="btn btn-primary form-btn text-2 bold">
                            <a href="./../../index.html">Sign Up</a>
                        </button>
                    </div>
                    <div className="text-2 mar-y-2">
                        Forgot Your Password ?
                        <span className="bold cursor_"
                        ><a href="./changePassword.html">Reset Here</a></span
                        >
                    </div>
                    <div className="text-2 mar-y-2">
                        Not a User yet ?
                        <span className="bold cursor_"
                        ><a href="./signUp.html">Create Your Account</a></span
                        >
                    </div>
                </form>
            </section>
        </>
    )
}