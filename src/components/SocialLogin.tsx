'use client';
import { doSocialLogin } from '@/lib/actions/loginSetup';
// import { doSocialLogin } from '@/lib/actions/authSetup';
import React from 'react';

const SocialLogin = () => {
  return (
    <form action={doSocialLogin}>
      <button
        className="m-1 rounded-md bg-pink-400 p-1 text-lg text-white"
        type="submit"
        name="action"
        value="google"
      >
        Sign In With Google
      </button>
      <button
        className="m-1 rounded-md bg-blue-400 p-1 text-lg text-white"
        type="submit"
        name="action"
        value="github"
      >
        Sign In With Github
      </button>
    </form>
  );
};

export default SocialLogin;
