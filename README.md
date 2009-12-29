# Human Markdown Reference

The Human Markdown Reference is a set of short, easy to understand HTML pages you can include in any project that uses Markdown.

Consider this a fork of [Human Markdown Reference](http://github.com/Aupajo/human-Markdown-reference).

*Important:* It's not designed to be a complete reference. Just a quick guide for the layman.

It’s perfect for including as a pop-up help window next to your textarea.

# Example

You can check it live here: https://webtranslateit.com/markdown-reference/

# How To Use

Copy the `markdown-reference/` directory to your project.

Add a help link to the reference:

## HTML Snippet

<pre>
<code>
You can format your text using 
<a href="markdown-reference/index.html"
   onclick="window.open(this.href,'/markdown_reference','height=400,width=600,scrollbars=1'); return false;">Markdown</a>.
</code>
</pre>

## Rails Snippet

<pre>
<code>
  You can format your text using
  <%= link_to 'Markdown', '/markdown-reference/index.html', :popup => ['markdown_reference', 'height=400,width=600,scrollbars=1'] %>
</code>
</pre>
