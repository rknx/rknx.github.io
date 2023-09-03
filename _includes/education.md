{% comment %} Education section {% endcomment %}

<section id="{{ include.id }}" markdown="1">

<h3> {{ include.title }} </h3>

{% for entry in site.data.[include.id] %}

<h4>

    <span>{{ entry.title }}</span>
    <span>{{ entry.year }}</span>

</h4>

<h5> 

    <span>
        {{ entry.univ | addUrl: entry.univ_url }}, 
        {{ entry.dept | addUrl: entry.dept_url }}
    </span>

</h5>

{% endfor %}

</section>