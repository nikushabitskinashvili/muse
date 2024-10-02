'use server';

import { cookies } from 'next/headers';

const getToken = async (): Promise<string | null> => {
  try {
    const token = cookies().get('auth');
    return token ? token.value : null;
  } catch (error) {
    return null;
  }
};

export default getToken;
