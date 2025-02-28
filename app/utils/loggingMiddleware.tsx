import { createMiddleware } from '@tanstack/react-start'

const preLogMiddleware = createMiddleware()
  .client(async (ctx) => {
    const clientTime = new Date()

    console.log('[preLogMiddleware] hello from client middleware');

    return ctx.next({
      context: {
        clientTime,
      },
      sendContext: {
        clientTime,
      },
    })
  })
  .server(async (ctx) => {
    const serverTime = new Date()

    console.log('[preLogMiddleware] hello from server middleware');

    return ctx.next({
      sendContext: {
        serverTime,
        durationToServer:
          serverTime.getTime() - ctx.context.clientTime.getTime(),
      },
    })
  })

export const logMiddleware = createMiddleware()
  .middleware([preLogMiddleware])
  .client(async (ctx) => {
    const res = await ctx.next()

    console.log('[logMiddleware] hello from client middleware');

    const now = new Date()
    console.log('Client Req/Res:', {
      duration: res.context.clientTime.getTime() - now.getTime(),
      durationToServer: res.context.durationToServer,
      durationFromServer: now.getTime() - res.context.serverTime.getTime(),
    })

    return res
  })
