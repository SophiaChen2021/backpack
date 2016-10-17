import 'file?name=[name].[ext]!./static/favicon.ico'
import 'bpk-stylesheets'

export default ({ head = {}, html = '', assets = {} }) => {
  return `<!doctype html>

<html lang="en">

<head>
  <meta charset="utf-8">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="noindex">
  ${head.title.toString()}
  <link rel="stylesheet" href="/${assets.docs.css}">
  <link rel="apple-touch-icon" sizes="180x180" href="/${require('./static/apple-touch-icon.png')}">
  <script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
  
    ga('create', 'UA-82476536-1', 'auto');
    ga('send', 'pageview');
  </script>
</head>

<body>

<div id="react-mount">
  ${html}
</div>

<script src="/${assets.docs.js}" async></script>

</body>

</html>`
}
