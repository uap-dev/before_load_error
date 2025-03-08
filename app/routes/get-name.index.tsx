import { createFileRoute } from '@tanstack/react-router'
import { getName } from '../server-functions/get-name';

export const Route = createFileRoute('/get-name/')({
  loader: async () => {
    const name = await getName();

    return name;
  },
  component: RouteComponent,
})

function RouteComponent() {
  const name = Route.useLoaderData();
  return <div>Hello "/get-name/"!</div>
}
