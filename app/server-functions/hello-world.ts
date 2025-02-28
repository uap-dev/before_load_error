import { createServerFn } from '@tanstack/react-start';

export const helloWorld = createServerFn().handler(async () => {
  console.log('hello world');
});