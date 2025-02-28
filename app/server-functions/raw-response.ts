import { createServerFn } from '@tanstack/react-start';

/**
 * Argument of type '() => Promise<Response>' is not assignable to parameter of type 
 * 'ServerFn<Method, "data", undefined, undefined, Response>'.
 * Type 'Promise<Response>' is not assignable to type 
 * 'Promise<{ readonly headers: { append: "Function is not serializable"; delete: "Function is not serializable"; 
 * get: "Function is not serializable"; getSetCookie: "Function is not serializable"; ... 6 more ...; 
 * [Symbol.iterator]: "Function is not serializable"; }; ... 14 more ...; text: "Function is not serializable";...'.
 */

export const serverFnRawResponse = createServerFn().handler(async () => {
  // const data = await fetch('https://example.com/time.txt');
  // return data;

  // This also does not work
  return new Response('Not Found', { status: 500 });
});