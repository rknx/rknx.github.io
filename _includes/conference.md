{% comment %} Research section {% endcomment %}

<style>
.conference {
        display: flex;
        flex-direction: column;
        margin: 10px 0 5px;
    }

    .conference > img {
        align-self: center;
        height: 240px;
    }

    /*
        .conference {
            display: block;
        }
        
        .conference > img {
            float: left;
        }
        
        .parent + div {
            clear: both;
        }
    */
</style>

<section id="{{ include.id }}" markdown="1">

<h3>
{{ include.title }}
</h3>

{% for entry in site.data.cv.[include.id] %}

<h4>
    <span>{{ entry.event | markdownify | remove: '<p>' | remove: '</p>' }}</span>
    <span>{{ entry.year }}</span>
</h4>

<div class="{{ include.id }}" markdowm=1>
<img src="assets/img/conference/{{ entry.thumb }}" alt="" onerror="this.style.display=none">
{{ entry.title | markdownify }}
</div>

{% endfor %}

</section>