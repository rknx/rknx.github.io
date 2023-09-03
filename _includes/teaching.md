{% comment %} Teaching section {% endcomment %}

<style>
    
</style>

<section id="{{ include.id }}" markdown="1">

<h3>
    {{ include.title }}
</h3>

{% for entries in site.data.[include.id] %}

{% assign entry = entries[1] %}

<h4 markdown=1>

{{ entry.id }}

</h4>

{% for list in entry.list %}

<h5 markdown=1>

{{ list.title }}

<span> {{ list.year }} </span>

</h5>

{% if list.course %}

<h6 markdown=1>{{ list.course | prepend: "In: "}}</h6>

{% endif %}

{% endfor %}

{% endfor %}

</section>
