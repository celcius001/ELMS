'use server';

import { signIn, signOut } from './authSetup';

export const doSocialLogin = async (formData: FormData) => {
  const action = formData.get('action');
  await signIn(action as string, { redirectTo: '/leave' });
};

export const doLogout = async () => {
  await signOut({ redirectTo: '/' });
};
