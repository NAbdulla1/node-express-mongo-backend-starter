## Purpose of `controllers`
The controller takes what it needs from Express (or whatever framework you're using), does some checking/validation to figure out to which service(s) should the data from the request be sent to, and orchestrates those service calls.

So there is some logic in the controller, but it is not the business logic/algorithms/database calls/etc that the services take care of. The controller is a manager/supervisor.
