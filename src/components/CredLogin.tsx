'use client';
import React from 'react';

const CredLogin = () => {
  return (
    <div>
      <form className="my-5 flex flex-col items-center rounded-md border border-gray-300 p-3">
        <div className="my-2">
          <label htmlFor="email">Email</label>
          <input className="mx-2 rounded border border-gray-500" type="email" name="email" />
        </div>
        <div className="my-2">
          <label htmlFor="password">Password</label>
          <input className="mx-2 rounded border border-gray-500" type="password" name="password" />
        </div>
        <div>
          <button className="rounded-md bg-blue-500 p-2 text-white" type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default CredLogin;
