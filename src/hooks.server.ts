
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
  const userName = event.cookies.get('user_name');
  const bearerToken = event.cookies.get("bearer_token");

  if (bearerToken && userName) {
    event.locals.user = {
      name: userName,
      token: bearerToken,
    };
   
  }

  return await resolve(event);
};
