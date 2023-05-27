## Purpose of `middlewares`
We should write our custom middlewares in this directory in different files.

Sometimes it becomes essential to distinguish
between a controller and a middleware.
This [article](https://www.coreycleary.me/what-is-the-difference-between-middleware-and-controllers)
can help us there.

The middlewares should be very simple and any complex logic should be delegated to a service.
