const http = {
    good: {
        ok: 200,
        created: 201,
        noContent: 204,
        partialContent: 206
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

const defaults = {
    numbers: {
        port: 5001,
        exitFail: 1
    },
    messages: {
        serverError: 'Server Error'
    }
}


module.exports = {
    http,
    defaults
}