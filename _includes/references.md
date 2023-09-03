{% comment %} Reference section {% endcomment %}

<style>
    #references > h4 > span > svg {
        height: 1em;
        width: 1em;
        cursor: pointer;
        margin-left: 10px;
        fill: var(--text_color);
    }
</style>

<section id="{{ include.id }}" markdown="1">

<h3>
{{ include.title }}
</h3>

{% for entry in site.data.[include.id] %}

<h4> 
<span>{{ entry.name }}<svg onclick="window.open('{{ entry.profile }}')"><use xlink:href="assets/img/icons.svg#linkout"></use></svg></span>
<span>{{ entry.email }}</span>

</h4>

<h5> {{ entry.title }} </h5>
<h6> {{ entry.dept }}, {{ entry.univ }} </h6>

{% endfor %}

</section>