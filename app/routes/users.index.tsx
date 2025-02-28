import { createFileRoute, redirect, useLoaderData } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start';
import { helloWorld } from '../server-functions/hello-world';

const myServerFunction = createServerFn({ method: 'GET' }).handler(async () => {
  const data = await fetch('https://example.com/time.txt');
  return data;

  // This alaso does not work
  // return new Response('Not Found', { status: 404 });
});

export const Route = createFileRoute('/users/')({
  beforeLoad: async ({ params }) => {
    console.log('beforeLoad', params);

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

    return new Response('Not found', { status: 500 });
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
