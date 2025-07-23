'use server';

import { signIn } from './authSetup';

export const doSocialLogin = async (formData: FormData) => {
  const action = formData.get('action');
  await signIn(action as string, { redirectTo: '/leave' });
};
