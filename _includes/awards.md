{% comment %} Awards section {% endcomment %}

<section id="{{ include.id }}">

<h3> {{ include.title }} </h3>

{% for entry in site.data.cv.[include.id] %}

<h4>
    <span>{{ entry.title }}</span>
    <span>{{ entry.year }}</span>
</h4>

{% if entry.dept %}

<h5>{{ entry.org | append : ", " | append: entry.dept | markdownify | remove: '<p>' | remove: '</p>' }}</h5>

{% else %}

<h5>
<span>
{{ entry.org | markdownify | remove: '<p>' | remove: '</p>' }}
</span>
</h5>

{% endif %}

{% endfor %}

</section>