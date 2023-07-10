import { useRouter } from 'next/router'
import Image from 'next/image'

export default function Login(){
    const router = useRouter()
    const handleLogin=()=>{
        localStorage.setItem("isAuthenticated",true);
        router.replace('/')
    }
return (<div className="content" style={{maxHeight:'100vh',height:'100vh'}}>
<section style={{paddingTop:"60px"}} className="h-100 gradient-form" >
  <div className="container py-2">
    <div className="row d-flex justify-content-center align-items-center">
      <div className="col-xl-5">
        <div className="card text-black">
          <div className="row g-0">
            <div className="col-lg-12">
              <div className="card-body p-md-4 mx-md-4">
                <div className="text-center">
                <Image style={{borderRadius:"50px"}} src='/logo.jpg' width={70} height={60} />
                  <h4 className="mt-1 mb-4 pb-0">We are TIC Team</h4>
                </div>
                <form>
                  <div className="form-outline mb-4">
                    <input type="email" className="form-control"
                      placeholder="User Name*" />
                  </div>

                  <div className="form-outline mb-4">
                    <input placeholder="User Password*" type="password" className="form-control" />
                  </div>

                  <div className="text-center pt-1 mb-5 pb-1">
                    <button onClick={handleLogin}
                    style={{background: "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",display: "block",width: "100%"}}
                    className="btn btn-primary btn-block fa-lg mb-3 p-3" type="button">Login</button>
                    <a className="text-muted" href="#!">Forgot password?</a>
                  </div>

                  <div className="d-flex align-items-center justify-content-center pb-4">
                    <p className="mb-0 me-2">Don't have an account?</p>
                    <button onClick={()=> router.push('/register')} type="button" className="btn btn-outline-danger">Create new</button>
                  </div>

                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</div>)
}