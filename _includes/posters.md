{% comment %} Poster section {% endcomment %}

<style>
.posters {
        display: flex;
        flex-direction: column;
        margin: 10px 0 5px;
    }

    .posters > img {
        align-self: center;
        height: 240px;
    }

    /*
        .posters {
            display: block;
        }
        
        .posters > img {
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

#### {{ entry.event | markdownify | remove: '<p>' | remove: '</p>' }} <span>{{ entry.year }}</span>

<div class="{{ include.id }}" markdowm=1>
<img src="assets/img/conference/{{ entry.thumb }}" alt="" onerror="this.style.display=none">
{{ entry.title | markdownify }}
</div>

{% endfor %}

</section>