/*
const HTTP = {
    OK: 200,
    CREATED: 201
}
*/
const http = {
    good: {
        ok: 200,
        created: 201,
        noContent: 204
    },
    moved: {
        permanently: 301,
        temporarily: 302
    },
    bad: {
        user: {
            misc: 400,
            unauthorized: 401,
            forbidden: 403,
            notFound: 404,
            methodNotAcceptable: 405,
            timeOut: 408,
            iAmATeaPot: 418
        },
        server: {
            misc: 500,
            notImplemented: 501,
            badGateway: 502,
            unavailable: 503
        }
    }
}

const DEFAULT_PORT = 5001
module.exports = {
    http,
    DEFAULT_PORT
}