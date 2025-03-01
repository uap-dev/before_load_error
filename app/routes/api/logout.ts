import { createAPIFileRoute } from '@tanstack/react-start/api';
import { deleteCookie } from '@tanstack/react-start/server';
import { redirect } from '@tanstack/react-router';

export const APIRoute = createAPIFileRoute('/api/logout')({
  GET: ({ request }) => {
    console.log('/api/logout');
    deleteCookie('my_session_cookie');


    // Uncomment below (Works)
    // const response = new Response(null, { status: 302 });
    // response.headers.set('Location', '/login');
    // return response;

    // Doesn't work
    throw redirect({
      to: '/login',
    });
  },
});
