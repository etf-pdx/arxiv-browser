import { c as createCommonjsModule } from '../common/_commonjsHelpers-668e6127.js';

var root = createCommonjsModule(function (module, exports) {
{
  // prod mode
  fallbackHot();
}

function fallbackHot() {
  exports.hot = function (a) {
    return a;
  };
}
});

var hot = root.hot;
export { hot };
