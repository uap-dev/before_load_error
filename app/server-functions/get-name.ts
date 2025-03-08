import { createServerFn } from "@tanstack/react-start";

export const getName = createServerFn<'POST', 'data', { name: string }>({
  method: 'POST',
})
  .validator((params: unknown) => params as { lastName: 'bob' })
  .handler(async ({ data }) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ name: `billy ${data.lastName}` });
      }, 300);
    });
  });