import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [user, setUser] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigator = useNavigate();

  async function loginHandler(e) {
    e.preventDefault();
    (async () => {
      const { data, status } = await axios.post(
        `/api/auth/login`,
        JSON.stringify({
          email,
          password
        })
      );
      if (status === 200) {
        localStorage.setItem("token", JSON.stringify(data.encodedToken));
        setMsg({ ...data.foundUser, isLoggedIn: true });
        navigator("/");
      } else console.error("EMAIL OR PASSWORD IS INCORRECT", data);
    })();
  }

  return (
    <section className="login">
      <form className="form-action" id="form" onSubmit={loginHandler}>
        {user}
        <h4 className="bold text-center login-header">LogIn</h4>
        <br />
        {msg}
        <div className="login-container">
          <label className="input-label" htmlFor="email">
            Email address
          </label>
          <input
            className="input-action"
            type="email"
            id="email"
            name="email"
            placeholder="Jane@compony.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="input-danger" id="invalid-email"></p>
          <br />
          <label className="input-label" htmlFor="password">
            Password
          </label>
          <input
            className="input-action"
            type="password"
            id="password"
            name="password"
            minLength="8"
            maxLength="15"
            placeholder="********"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="input-danger" id="invalid-password"></p>
          <div>
            <div>
              <input
                type="checkbox"
                name="checkterms"
                id="checkterms"
                required
              />
              <label htmlFor="checkterms" className="p1">
                {" "}
                Remember me
              </label>
            </div>
            <div className="link-forgot">
              <a href="./forgotpassword.html">Forgot your Password?</a>
            </div>
          </div>

          <div className="text-center">
            <button
              className="button button-primary btn-full bold btn-submit"
              id="btn-submit"
              type="submit"
            >
              Login
            </button>
            <Link className="link-create" to="/Signup" id="btn-cancel">
              Create New Account
            </Link>
          </div>
        </div>
      </form>
    </section>
  );
}
