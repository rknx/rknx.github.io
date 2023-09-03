{% comment %} Skills section {% endcomment %}

<style>
    .skills {
        display:flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    .skills > p {
        margin: 5px;
        border: solid 1px;
        padding: 5px;
        border-radius: calc(1rem + 10px);
    }
    .skills > p > svg {
        height: 1rem;
        /*width: 1rem;*/
    }
</style>

<section id="{{ include.id }}" markdown="1">

<h3> {{ include.title }} </h3>

{% for entries in site.data.[include.id] %}

{% assign entry = entries[1] %}

<h4> {{ entry.title }} </h4>

<div class="skills" markdown="1">

{% for skill in entry.list %}

<p>

    {{ skill.name }}

</p>

{% endfor %}

</div>

{% endfor %}

</section>