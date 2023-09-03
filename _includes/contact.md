{% comment %} Contact section {% endcomment %}

<style>

</style>

<section id="{{ include.id }}" markdown="1">

### {{ include.title }}

{% for entries in site.data.[include.id] %}

{% assign entry = entries[1] %}

#### {{ entry.title }}

<div class="{{ include.id }}" markdown="1">

{% for skill in entry.list %}

{% endfor %}

</div>

{% endfor %}

</section>