import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const Login = () => {
  const [nameVal, setNameVal] = useState();
  const [passVal, setPassVal] = useState();
  const Navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // if (!passVal || !nameVal) {
    //   return;
    // }

    localStorage.setItem("Username", nameVal);
    localStorage.setItem("Password", passVal);
    // Navigate("/");
    setNameVal("");
    setPassVal("");
    // window.location.reload();

    toast.success(
      <>
        <strong>USER LOGGED IN</strong>
        <br />
      </>,
    );
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover={false}
      />

      <div className="flex justify-center items-center min-h-96">
        <div className="border p-3 rounded-2xl h-auto shadow-2xl">
          <h2 className="text-center font-extrabold text-2xl">Login</h2>
          <form onSubmit={handleSubmit}>
            <label>Username:</label>
            <br />
            <input
              type="text"
              placeholder="Enter Username"
              value={nameVal}
              onChange={(e) => setNameVal(e.target.value)}
              className="border-2 focus:outline-2 p-2 rounded-lg"
            />
            <br /> <br />
            <label>Password:</label> <br />
            <input
              type="password"
              placeholder="Enter Password"
              value={passVal}
              onChange={(e) => setPassVal(e.target.value)}
              className="border-2 focus:outline-2 p-2 rounded-lg"
            />
            <br /> <br />
            <div className="flex justify-center">
              <button
                type="submit"
                className="cursor-pointer border-3 rounded-full w-20 p-2"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
