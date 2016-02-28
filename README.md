# My take on the **Website Performance Optimization portfolio project** and the **pizzeria 60 fps project**.


### Website Performance Optimization portfolio project
* async js
* inline render blocking css
* minified html, css, js
* media queries print, portrait

### pizzeria 60 fps project

##### function updatePositions()
* moved the scrolltop calc outside the for loop and 
* made the effect a bit more lively (and annoying) => scrollTop / 250.
* still some long frames. 
* Tried rAF, no (positive) result.

##### document.addEventListener('DOMContentLoaded', function() { etc.
* reduced nr of cols to 6;
* reduced nr of i's to 32, this is enough to make it work. 
* Promoted .mover to its own layer (effect?). 
* Moved the width and height attributes to the stylesheet (effect?)

### gulp
* I used gulp imagemin, minify-html, minify-css and uglify on the wpop project
* I just minified the files (html, css, js, image) in the ‘views’ directory. No gulp.

### bugs
* there is still a loading issue. the rendering of the moving pizza’s on load causes FSL.
* the pizza’s move smoothly but dev tools still shows some long frames.


## Website Performance Optimization portfolio project

Your challenge, if you wish to accept it (and we sure hope you will), is to optimize this online portfolio for speed! In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques you've picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

To get started, check out the repository, inspect the code,

### Getting started

#### Part 1: Optimize PageSpeed Insights score for index.html

Some useful tips to help you get started:

1. Check out the repository
1. To inspect the site on your phone, you can run a local server

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  ```

1. Open a browser and visit localhost:8080
1. Download and install [ngrok](https://ngrok.com/) to make your local server accessible remotely.

  ``` bash
  $> cd /path/to/your-project-folder
  $> ngrok http 8080
  ```

1. Copy the public URL ngrok gives you and try running it through PageSpeed Insights! Optional: [More on integrating ngrok, Grunt and PageSpeed.](http://www.jamescryer.com/2014/06/12/grunt-pagespeed-and-ngrok-locally-testing/)

Profile, optimize, measure... and then lather, rinse, and repeat. Good luck!

#### Part 2: Optimize Frames per Second in pizza.html

To optimize views/pizza.html, you will need to modify views/js/main.js until your frames per second rate is 60 fps or higher. You will find instructive comments in main.js. 

You might find the FPS Counter/HUD Display useful in Chrome developer tools described here: [Chrome Dev Tools tips-and-tricks](https://developer.chrome.com/devtools/docs/tips-and-tricks).

### Optimization Tips and Tricks
* [Optimizing Performance](https://developers.google.com/web/fundamentals/performance/ "web performance")
* [Analyzing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "analyzing crp")
* [Optimizing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "optimize the crp!")
* [Avoiding Rendering Blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css.html "render blocking css")
* [Optimizing JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript.html "javascript")
* [Measuring with Navigation Timing](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp.html "nav timing api"). We didn't cover the Navigation Timing API in the first two lessons but it's an incredibly useful tool for automated page profiling. I highly recommend reading.
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/eliminate-downloads.html">The fewer the downloads, the better</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer.html">Reduce the size of text</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization.html">Optimize images</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching.html">HTTP caching</a>

### Customization with Bootstrap
The portfolio was built on Twitter's <a href="http://getbootstrap.com/">Bootstrap</a> framework. All custom styles are in `dist/css/portfolio.css` in the portfolio repo.

* [Bootstrap's CSS Classes](http://getbootstrap.com/css/)
* [Bootstrap's Components](http://getbootstrap.com/components/)

### Sample Portfolios

Feeling uninspired by the portfolio? Here's a list of cool portfolios I found after a few minutes of Googling.

* [A great discussion about portfolios on reddit](http://www.reddit.com/r/webdev/comments/280qkr/would_anybody_like_to_post_their_portfolio_site/)
* [ianlunn.co.uk/](http://ianlunn.co.uk/)
* [www.adhamdannaway.com/portfolio](http://www.adhamdannaway.com/portfolio)
* [www.timboelaars.nl/](http://www.timboelaars.nl/)
* [futoryan.prosite.com/](http://futoryan.prosite.com/)
* [playonpixels.prosite.com/21591/projects](http://playonpixels.prosite.com/21591/projects)
* [colintrenter.prosite.com/](http://colintrenter.prosite.com/)
* [calebmorris.prosite.com/](http://calebmorris.prosite.com/)
* [www.cullywright.com/](http://www.cullywright.com/)
* [yourjustlucky.com/](http://yourjustlucky.com/)
* [nicoledominguez.com/portfolio/](http://nicoledominguez.com/portfolio/)
* [www.roxannecook.com/](http://www.roxannecook.com/)
* [www.84colors.com/portfolio.html](http://www.84colors.com/portfolio.html)
