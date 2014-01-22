fez-sass
========

Simple [fez](https://fez.github.io) task utilizing [node-sass](https://github.com/andrew/node-sass) to 
very quickly convert `.scss` files into CSS using [libsass](https://github.com/hcatlin/libsass/), 
an order of magnitude faster than Ruby-based sass.

Limitations
-----------

`fez-sass` is based on `libsass` and has [limitations](https://github.com/hcatlin/libsass/issues).

* Not yet at feature parity with Sass 3.3 (!global, @at-root, etc)
* Cannot parse `.sass` files

TODO
----

* Properly ignore files beginning with `_`
* Create a `fez-sass-convert` task so this can be used properly with `.sass` files.