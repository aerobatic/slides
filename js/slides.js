define(['reveal', 'aerobatic', 'css!css/reveal', 'css!css/theme/moon'], function(Reveal, aerobatic) {
  require(["asset!index", 'css!css/custom'], function(html) {
    document.getElementsByTagName("body")[0].innerHTML = html;
    Reveal.initialize({
      controls: true,
      progress: true,
      history: true,
      center: true,

      theme: Reveal.getQueryHash().theme, // available themes are in /css/theme
      transition: Reveal.getQueryHash().transition || 'default', // default/cube/page/concave/zoom/linear/fade/none

      // Parallax scrolling
      // parallaxBackgroundImage: 'https://s3.amazonaws.com/hakim-static/reveal-js/reveal-parallax-1.jpg',
      // parallaxBackgroundSize: '2100px 900px',

      // Optional libraries used to extend on reveal.js
      // dependencies: [
      //   { src: 'lib/js/classList.js', condition: function() { return !document.body.classList; } },
      //   { src: 'plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
      //   { src: 'plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
      //   { src: 'plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
      //   { src: 'plugin/zoom-js/zoom.js', async: true, condition: function() { return !!document.body.classList; } },
      //   { src: 'plugin/notes/notes.js', async: true, condition: function() { return !!document.body.classList; } }
      // ]
    });

    // var backgrounds = document.querySelector("section.title").setAttribute("data-background");
    //
    // for (var i=0; i<backgrounds.length; i++) {
    //   backgrounds[i].setAttribute("data-background", aerobatic.assetUrl(images[i].getAttribute('data-background')));
    // }

    // Dynamically set the src attribute of all images with asset-src attributes
    var images = document.querySelectorAll("img[asset-src]");
    for (var i=0; i<images.length; i++) {
      images[i].setAttribute("src", aerobatic.assetUrl(images[i].getAttribute('asset-src')));
    }
  });
});
