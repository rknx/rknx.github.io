{% comment %} Affiliations section {% endcomment %}

<style>

</style>

<section id="{{ include.id }}" markdown="1">

<h3> {{ include.title }} </h3>

{% for entry in site.data.cv.[include.id] %}

<h4> {{ entry.org }} </h4>

{% for org in entry.positions %}

{% if org.endyear %}

{% assign end = org.endyear %}

{% else %}

{% assign end = "Present" %}

{% endif %}

<h5>
    <span> {{ org.position }} </span>
    <span>
        {{ org.startyear | append: "-" | append: end }}
    </span>
</h5>

{% endfor %}

{% endfor %}

</section>