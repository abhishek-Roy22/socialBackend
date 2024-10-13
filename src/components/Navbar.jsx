import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const isLogin = true;
  return (
    <div className="max-w-6xl mx-auto">
      <div className="navbar bg-base-100 rounded-lg shadow-lg">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Social</a>
        </div>
        {isLogin ? (
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to={'/create'}>Upload</Link>
                </li>
                <li>
                  <Link to={'/'}>Dashboard</Link>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-5">
            <button className="btn btn-neutral">
              <Link to={'/signup'}>SignUp</Link>
            </button>
            <button className="btn btn-neutral">
              <Link to={'/signin'}>Login</Link>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
