import Link from "next/link"

export default function Register(){
    return (<>
    <section className="h-100 gradient-form" style={{background: "lightGray"}}>
      <div className="container py-2">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black">
              <div className="row g-0">
                <div className="col-lg-6">
                  <div className="card-body p-md-4 mx-md-4">
                    <div className="text-center">
                      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                        style={{width: "185px"}} alt="logo" />
                      <h4 className="mt-1 mb-5 pb-0">We are TIC Team</h4>
                    </div>
    
                    <form>
                      <div className="form-outline mb-4">
                        <input type="username" className="form-control"
                          placeholder="User Name*" />
                      </div>
                      <div className="form-outline mb-4">
                        <input type="email" className="form-control"
                          placeholder="Email Id*" />
                      </div>
                      <div className="form-outline mb-4">
                        <input placeholder="User Password*" type="password" className="form-control" />
                      </div>
    
                      <div className="text-center pt-1 mb-5 pb-1">
                        <button style={{background: "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",display: "block",width: "100%"}}
                         className="btn btn-primary btn-block fa-lg mb-3" type="button">Create Account</button>
                         <Link className="text-muted" href="/login">
                            Sign In
                         </Link>
                      </div>
    
                    </form>
    
                  </div>
                </div>
                <div style={{background: "linear-gradient(to right, #ee7723, #d8362a, #dd3674, #b44592)"}} className="col-lg-6 d-flex align-items-center">
                  <div className="text-white px-3 py-3 p-md-4 mx-md-4">
                    <h4 className="mb-4">We are more than just a company</h4>
                    <p className="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>)
    }