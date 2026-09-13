import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import logo from "../../assets/images/Logo-for-website.png";

function Login() {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-gradient-to-r from-[#003c2e] to-[#001f33] p-4">
      {/* Main Container */}
      <div
        className="
          relative
          flex
          h-[70vh]
          min-h-[500px]
          w-[60%]
          max-w-[900px]
          overflow-hidden
          rounded-[50px]
          border-2
          border-white
          bg-[#fdf6e3]
          shadow-2xl

          max-[1000px]:w-[80%]
          max-[700px]:h-auto
          max-[700px]:min-h-[500px]
          max-[700px]:w-full
          max-[700px]:max-w-[500px]
          max-[700px]:rounded-[30px]
        "
      >
        {/* =========================================
            REGISTER FORM
        ========================================= */}
        <div
          className={`
            absolute
            left-0
            top-0
            flex
            h-full
            w-1/2
            items-center
            justify-center

            max-[700px]:relative
            max-[700px]:left-auto
            max-[700px]:top-auto
            max-[700px]:h-auto
            max-[700px]:min-h-[500px]
            max-[700px]:w-full

            ${isRegister ? "max-[700px]:flex" : "max-[700px]:hidden"}
          `}
        >
          <form
            className="
              flex
              h-full
              w-full
              flex-col
              items-center
              justify-center
              gap-[15px]
              text-center
              font-sans
              font-bold
              max-[700px]:h-auto
              max-[700px]:py-10
            "
          >
            <h2 className="mb-[2%] text-[2rem] font-bold max-[400px]:text-[1.7rem]">
              Create Account
            </h2>

            <input
              type="text"
              placeholder="Enter your Email"
              className="
                w-[70%]
                rounded-[12px]
                bg-white
                p-[5%]
                outline-none
                focus:ring-2
                focus:ring-[#004225]
                max-[400px]:w-[80%]
                max-[400px]:p-4
              "
            />

            <input
              type="password"
              placeholder="Enter Password"
              className="
                w-[70%]
                rounded-[12px]
                bg-white
                p-[5%]
                outline-none
                focus:ring-2
                focus:ring-[#004225]
                max-[400px]:w-[80%]
                max-[400px]:p-4
              "
            />

            <input
              type="password"
              placeholder="Confirm Password"
              className="
                w-[70%]
                rounded-[12px]
                bg-white
                p-[5%]
                outline-none
                focus:ring-2
                focus:ring-[#004225]
                max-[400px]:w-[80%]
                max-[400px]:p-4
              "
            />

            <p className="mt-[3%] max-[400px]:text-sm">
              Already have account{" "}
              <button
                type="button"
                onClick={() => setIsRegister(false)}
                className="text-[#003c2e] hover:underline"
              >
                Login
              </button>
            </p>

            <button
              type="submit"
              className="
                mt-[3%]
                w-[50%]
                rounded-[14px]
                bg-[#004225]
                py-[4%]
                text-[1.2rem]
                text-white
                transition
                duration-300
                hover:bg-[#006d3b]
                max-[400px]:w-[60%]
              "
            >
              Create Account
            </button>
          </form>
        </div>

        {/* =========================================
            LOGIN FORM
        ========================================= */}
        <div
          className={`
            absolute
            right-0
            top-0
            flex
            h-full
            w-1/2
            items-center
            justify-center

            max-[700px]:relative
            max-[700px]:right-auto
            max-[700px]:top-auto
            max-[700px]:h-auto
            max-[700px]:min-h-[500px]
            max-[700px]:w-full

            ${!isRegister ? "max-[700px]:flex" : "max-[700px]:hidden"}
          `}
        >
          <form
            className="
              flex
              h-full
              w-full
              flex-col
              items-center
              justify-center
              gap-[15px]
              text-center
              font-sans
              font-bold
              max-[700px]:h-auto
              max-[700px]:py-10
            "
          >
            <h2 className="mb-[2%] text-[2rem] font-bold max-[400px]:text-[1.7rem]">
              Welcome Back
            </h2>

            <input
              type="text"
              placeholder="Enter your Email"
              className="
                w-[70%]
                rounded-[12px]
                bg-white
                p-[5%]
                outline-none
                focus:ring-2
                focus:ring-[#004225]
                max-[400px]:w-[80%]
                max-[400px]:p-4
              "
            />

            <input
              type="password"
              placeholder="Password"
              className="
                w-[70%]
                rounded-[12px]
                bg-white
                p-[5%]
                outline-none
                focus:ring-2
                focus:ring-[#004225]
                max-[400px]:w-[80%]
                max-[400px]:p-4
              "
            />

            <p className="mt-[3%] max-[400px]:text-sm">
              Don't have account{" "}
              <button
                type="button"
                onClick={() => setIsRegister(true)}
                className="text-[#003c2e] hover:underline"
              >
                Register
              </button>
            </p>

            <button
              type="submit"
              className="
                mt-[3%]
                w-[50%]
                rounded-[14px]
                bg-[#004225]
                py-[4%]
                text-[1.2rem]
                text-white
                transition
                duration-300
                hover:bg-[#006d3b]
                max-[400px]:w-[60%]
              "
            >
              Login
            </button>
          </form>
        </div>

        {/* =========================================
            URDU ADAB PANEL
            DESKTOP ONLY
        ========================================= */}
        <div
          className="
            absolute
            top-0
            z-10
            flex
            h-full
            w-1/2
            flex-col
            items-center
            justify-center
            gap-[5%]
            rounded-[50px]
            bg-[#004225]
            text-center
            font-sans
            text-[2rem]
            font-bold
            text-white
            transition-all
            duration-700
            ease-in-out

            max-[700px]:hidden
          "
          style={{
            left: isRegister ? "50%" : "0%",
          }}
        >
          <img src={logo} alt="Urdu Adab" className="h-[30%] object-contain" />

          <p className="text-[2rem]">
            Welcome
            <br />
            to
            <br />
            Urdu Adab
          </p>
        </div>
      </div>

      {/* back to home */}

      <Link
        to="/"
        className="
            fixed
            top-5
            left-5
            z-20
            rounded-full
            bg-white
            px-5
            py-2
            font-semibold
            text-[#004225]
            shadow-md
            transition
            duration-300
            hover:bg-[#d4af37]
            hover:text-white
        "
      >
        ← Back to Home
      </Link>
    </main>
  );
}

export default Login;
