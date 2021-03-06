_built in 48 hours, see [gh4st] for snazzier version._

[gh4st]:https://github.com/shaunlebron/gh4st

# Ludum Dare 33 - GH4ST

A puzzle game for Ludum Dare 33.  The theme is "you are the monster".

Coordinate the four ghosts, which adhere to the actual AI from the original
Pac-Man arcade. Your only power to catch Pac-Man is to choose which ghost is
allowed to move per turn.

In this game, you must learn to exploit the deterministic behaviors of your
ghosts and Pac-Man in order to catch Pac-Man before he gets his fruit.

## Setup

- Install [leiningen](http://leiningen.org/)
- Run `lein figwheel`
- Open <http://localhost:3449>

If you want to update the CSS styling, install Ruby and run this in a separate
terminal window:

```
gem install sass
cd resources/public/css
sass --watch style.scss:style.css
```

