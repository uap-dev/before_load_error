import { createFileRoute, redirect, useLoaderData } from '@tanstack/react-router'
import { helloWorld } from '../server-functions/hello-world';
import { serverFnRawResponse } from '../server-functions/raw-response';


export const Route = createFileRoute('/users/')({
  beforeLoad: async ({ params }) => {
    console.log('beforeLoad', params);

    // This doesn't work, but the below does
    // Comment this out after seeing it has no effect in browser (no error boundary)
    return new Response('Not Found', { status: 500 });

    // Uncomment this to see that error boundary handles the response from the server fn
    // return serverFnRawResponse();

    // helloWorld();
    // return new Response('Not found', { status: 404 });
    // throw new Error('Not found');

    return {
      users: [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Doe' },
      ],
    }
  },
  loader: async ({ params, context }) => {
    console.log('context', context)
    console.log('loader', params)

    // return new Response('Not found', { status: 500 });
    // throw redirect({ to: '/error' })

    // throw new Error('Not found');

    return {
      friends: [
        { id: 3, name: 'Bob Dole' },
        { id: 4, name: 'Jamie Doe' },
      ],
    }
  },
  component: UsersIndexComponent,
})

function UsersIndexComponent() {
  // const { friends } = Route.useLoaderData();
  // console.log(friends);
  return <div>
    Select a user.
    <button type="button" className="bg-blue-500 text-white p-2 rounded" onClick={() => {
      helloWorld();
    }}>Click me</button>
  </div>
}
