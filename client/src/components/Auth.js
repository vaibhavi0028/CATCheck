import React from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../images/logo.svg";

export default function Auth() {
  const location = useLocation();
  const navigate = useNavigate();

  const variants = {
    initial: (direction) => ({
      opacity: 0,
      x: direction > 0 ? 100 : -100,
    }),
    animate: {
      opacity: 1,
      x: 0,
    },
    exit: (direction) => ({
      opacity: 0,
      x: direction > 0 ? -100 : 100,
    }),
  };

  const direction = location.pathname === "/auth/signup" ? 1 : -1;

  return (
    <div className="auth-container">
      <AnimatePresence initial={false} custom={direction} mode="wait">
        {location.pathname === "/auth/signup" ? (
          <motion.div
            key="signup"
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            custom={direction}
            transition={{ duration: 0.5 }}
          >
            <SignUp navigate={navigate} />
          </motion.div>
        ) : location.pathname === "/auth/signin" ? (
          <motion.div
            key="signin"
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            custom={direction}
            transition={{ duration: 0.5 }}
          >
            <SignIn navigate={navigate} />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

const SignIn = ({ navigate }) => {
  const handleSignIn = () => {
    // Perform sign-in logic here (e.g., validation)
    navigate("/dashboard");
  };

  return (
    <div className="row">
      <div className="col-md-6">
        <div className="auth-image text-white">
          <div className="p-5 col-md-10">
            <img src={logo} width={50} alt="Logo" />
            <h1 className="mt-4">
              <b>Welcome back !!</b>
            </h1>
            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              lobortis maximus nunc, ac rhoncus odio congue quis. Sed ac semper
              orci, eu porttitor lacus.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-12 d-flex justify-content-center align-items-center">
        <div className="col-md-8 col-12 auth-part p-5">
          <h1>
            <b>Sign In</b>
          </h1>
          <div className="mt-3 input-control">
            <label>Name</label>
            <input type="text" placeholder="" className="form-control" />
          </div>
          <div className="mt-3 input-control">
            <label>Email Address</label>
            <input type="email" placeholder="" className="form-control" />
          </div>
          <div className="d-flex justify-content-end mt-2">
            Forgot Password?
          </div>
          <div className="text-center mt-4">
            <button className="btn btn-warning" onClick={handleSignIn}>
              Sign In
            </button>
            <p className="mt-3">
              Don't have an account?{" "}
              <Link to="/auth/signup">
                <b>Sign Up</b>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const SignUp = ({ navigate }) => {
  const handleSignUp = () => {
    // Perform sign-up logic here (e.g., validation)
    navigate("/dashboard");
  };

  return (
    <div className="row">
      <div className="col-md-6">
        <div className="auth-image text-white">
          <div className="p-5 col-md-10">
            <img src={logo} width={50} alt="Logo" />
            <h1 className="mt-4">
              <b>Welcome !!</b>
            </h1>
            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              lobortis maximus nunc, ac rhoncus odio congue quis. Sed ac semper
              orci, eu porttitor lacus.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-12 d-flex justify-content-center align-items-center">
        <div className="col-md-8 col-12 auth-part p-5">
          <h1>
            <b>Sign Up</b>
          </h1>
          <div className="mt-3 input-control">
            <label>Name</label>
            <input type="text" placeholder="" className="form-control" />
          </div>
          <div className="mt-3 input-control">
            <label>Email Address</label>
            <input type="email" placeholder="" className="form-control" />
          </div>
          <div className="mt-3 input-control">
            <label>Password</label>
            <input type="password" placeholder="" className="form-control" />
          </div>
          <div className="mt-3 input-control">
            <label>Confirm Password</label>
            <input type="password" placeholder="" className="form-control" />
          </div>
          <div className="text-center mt-4">
            <button className="btn btn-warning" onClick={handleSignUp}>
              Sign Up
            </button>
            <p className="mt-3">
              Already have an account?{" "}
              <Link to="/auth/signin">
                <b>Sign In</b>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
