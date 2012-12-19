Package.describe({
  summary: "cujojs's lightweight CommonJS Promises/A and when() implementation"
});

Package.on_use(function (api) {
  api.add_files(
    [ 'when/when.js'
    , 'when/delay.js'
    , 'when/timeout.js'
    , 'when/sequence.js'
    , 'when/pipeline.js'
    , 'when/parallel.js'
    , 'when/apply.js'
    ],
    ['client', 'server']
  );
});
