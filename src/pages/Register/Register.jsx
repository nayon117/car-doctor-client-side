import { Link } from "react-router-dom";
import img from '../../assets/images/login/login.svg';
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {

    const { createUser } = useContext(AuthContext)
    
    const handleRegister = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
        
        createUser(email,password)
        .then(res => {
            console.log(res.user);
        })
            .catch(error => {
            console.log(error);
        })
    }
    return (
        <div className="hero min-h-screen  ">
        <div className="hero-content flex-col lg:flex-row">
          <div className=" mr-12 w-1/2">
            <img className="p-6" src={img} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <h1 className="text-4xl py-3 text-center font-bold">Sign Up!</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-secondary"
                  type="submit"
                  value="sign up"
                />
              </div>
            </form>
            <p className="py-6 px-2 text-center">
               Already have an account 
              <Link className="text-secondary ml-2 font-bold" to="/login">
                sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
};

export default Register;