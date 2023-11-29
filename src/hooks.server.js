

export const handle = async ({ event, resolve }) => {
  // get cookies from browser
  const userName = event.cookies.get('user_name')
  const bearerToken = event.cookies.get("bearer_token")

  if (!bearerToken) {
    // if there is no session load page as normal
    return await resolve(event)
  }


  if (bearerToken) {
    // Set event.locals with the user's name and token
    event.locals.user = {
        name: userName,
        token: bearerToken,
    };
}

  // load page as normal
  return await resolve(event)
}