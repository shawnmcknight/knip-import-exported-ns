import * as notReexported from "./ns-not-reexported";
import * as namedReexported from "./ns-named-reexported";
import * as defaultReexported from "./ns-default-reexported";

console.log(notReexported);
console.log(namedReexported);
console.log(defaultReexported);
