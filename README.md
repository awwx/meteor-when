when
====

The [when library](https://github.com/cujojs/when),
packaged for Meteor.

when is cujojs's lightweight CommonJS Promises/A implementation.

If you don't have fibers, promises are the next best thing for
avoiding thickets of deeply nested callbacks in your code.


Use
---

    $ mrt add when

This adds `when`, `when_delay`, `when_timeout`, `when_sequence`,
`when_pipeline`, `when_parallel`, and `when_apply` to the global
namespace.

For example, the API documentation for
[when/delay](https://github.com/cujojs/when/blob/master/docs/api.md#whendelay)
says:

    var delay, delayed;

    delay = require('when/delay');

    // delayed is an unresolved promise that will become resolved
    // in 1 second with the value 123
    delayed = delay(123, 1000)

With `when_delay` in the global namespace, the code would be written
like this:

    var delayed;

    // delayed is an unresolved promise that will become resolved
    // in 1 second with the value 123
    delayed = when_delay(123, 1000)
