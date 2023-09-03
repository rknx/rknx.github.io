{% comment %} Projects section {% endcomment %}

<style>

    .projects {
        display: flex;
        flex-direction: column;
        margin: 10px 0 5px;
    }

    .projects > img {
        align-self: center;
        height: 240px;
    }

    /*
        .projects {
            display: block;
        }
        
        .projects > img {
            float: left;
        }
        
        .parent + div {
            clear: both;
        }
    */

</style>

<section id="{{ include.id }}" markdown="1">

### {{ include.title }}

{% for entry in site.data.cv.[include.id] %}

#### <span>{{ entry.title }}<span>

<div class="{{ include.id }}" markdowm=1>
{% if entry.thumb %}
<img src="assets/img/projects/{{ entry.thumb }}" alt="" onerror="this.style.display=none">
{% endif %}
{{ entry.description | strip | markdownify }}
</div>

{% endfor %}

</section>