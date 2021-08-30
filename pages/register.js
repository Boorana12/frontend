import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Register = () => {
    return (
        <div>
            <Head>
                <div>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback" />
                    <link rel="stylesheet" href="../../plugins/fontawesome-free/css/all.min.css" />
                    <link rel="stylesheet" href="../../plugins/icheck-bootstrap/icheck-bootstrap.min.css" />
                    <link rel="stylesheet" href="../../dist/css/adminlte.min.css" />
                </div>
            </Head>
            <body class="hold-transition register-page">
                <div className="register-box">
                    <div className="register-logo">
                        <Link href='./'>
                            <a href="./"><b>Boo</b>Register</a>
                        </Link>
                    </div>
                    <div className="card">
                        <div className="card-body register-card-body">
                            <p className="login-box-msg">Register a new membership</p>
                            <form action="../../index.html" method="post">
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Full name" />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-user" />
                                        </div>
                                    </div>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="email" className="form-control" placeholder="Email" />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-envelope" />
                                        </div>
                                    </div>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="password" className="form-control" placeholder="Password" />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-lock" />
                                        </div>
                                    </div>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="password" className="form-control" placeholder="Retype password" />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-lock" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-8">
                                        <div className="icheck-primary">
                                            <input type="checkbox" id="agreeTerms" name="terms" defaultValue="agree" />
                                            <label htmlFor="agreeTerms">
                                                I agree to the <a href="#">terms</a>
                                            </label>
                                        </div>
                                    </div>
                                    {/* /.col */}
                                    <div className="col-4">
                                        <button type="submit" className="btn btn-primary btn-block">Register</button>
                                    </div>
                                    {/* /.col */}
                                </div>
                            </form>
                            <div className="social-auth-links text-center">
                                <p>- OR -</p>
                                <a href="#" className="btn btn-block btn-primary">
                                    <i className="fab fa-facebook mr-2" />
                                    Sign up using Facebook
                                </a>
                                <a href="#" className="btn btn-block btn-danger">
                                    <i className="fab fa-google-plus mr-2" />
                                    Sign up using Google+
                                </a>
                            </div>
                            <Link href='./login'>
                                <a href="login.html" className="text-center">ฉันมีบัญชีอยู่แล้ว</a>
                            </Link>
                        </div>
                        {/* /.form-box */}
                    </div>{/* /.card */}
                </div>
                {/* /.register-box */}
            </body>

        </div>
    )
}

export default Register