# Human Markdown Reference

The Human Markdown Reference is a set of short, easy to understand HTML pages you can include in any project that uses Markdown.

Consider this a fork of [Human Textile Reference](http://github.com/Aupajo/human-textile-reference).

It is not designed to be a complete reference. Just a quick guide for the layman. For detailed detailed markdown syntax, check the [Markdown page at Daring Fireball](http://daringfireball.net/projects/markdown/).

It is perfect for including as a pop-up help window next to your textarea.

# Example

You can see an example [here](https://webtranslateit.com/markdown-reference/).

# How To Use

Copy `markdown-reference` to your project.

Add a help link to the reference:

## HTML Snippet

    You can format your text using 
    <a href="markdown-reference/index.html" onclick="window.open(this.href,'/markdown_reference','height=400,width=600,scrollbars=1'); return false;">Markdown</a>.

## Rails Snippet

    You can format your text using
    <%= link_to 'Markdown', '/markdown-reference/index.html', :popup => ['markdown_reference', 'height=400,width=600,scrollbars=1'] %>

# Internationalization

You may need a different language than English. Human Markdown reference is current translated into:

* Catalan
* French
* Russian
* Spanish
* Swedish

If you spot a mistake or want to contribute a new language, [request an invitation](https://webtranslateit.com/projects/386-HTML-Markdown-Reference/invitation_request) to the translation project.

Add a help link to the reference:

## HTML Snippet

    You can format your text using 
    <a href="markdown-reference/xx" onclick="window.open(this.href,'/markdown_reference/xx','height=400,width=600,scrollbars=1'); return false;">Markdown</a>.

where `xx` is the code of the locale you want to use.

## Rails Snippet

    You can format your text using
    <%= link_to 'Markdown', "/markdown-reference/#{I18n.locale}", :popup => ['markdown_reference', 'height=400,width=600,scrollbars=1'] %>

# Contributors

* Alex Soulim (Russian translations),
* Pere Joan Martorell (Catalan and Spanish translations).
