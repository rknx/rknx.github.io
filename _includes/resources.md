{% comment %} Vcard links and CV downloads {% endcomment %}

<style markdown=1>

    .res-buttons {
        display: flex;
        margin-top: auto;
        justify-content: space-between;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 5px;
        cursor: pointer;
    }

    .res-buttons > p {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        align-items: center;
        justify-content: center;
        margin:0;
        padding: 8px 1px;
        border: 1px solid var(--text_color);
        border-radius: 5px;
    }

    .side-menu > .res-buttons {
        padding-top: 20px;
    }

    .side-menu > .res-buttons > p {
        width: 48%;
    }

    .res-buttons > p > span {
        font-weight: 700;
        font-variation-settings: 'wght' 700;
        font-optical-sizing: auto;
        text-transform: uppercase;
        text-align: center;
    }

    .side-menu > .res-buttons > p > span {
        font-size: 0.6rem;
    }

    .res-buttons > p > svg {
        width: 1.3rem;
        height: 1.3rem;
        fill: var(--text_color);
        margin-bottom: 4px;
    }

    .res-buttons > p:hover > svg {
        fill: var(--select);
    }
</style>

<div class="res-buttons" markdown=1>

{% for entry in site.data.resources %}

{% if entry.link %}{% assign link = entry.link | prepend: '/files/' %}{% endif %}
{% if entry.extlink %}{% assign link = entry.extlink %}{% endif %}

<p onclick="window.open('{{ link }}')">
    <svg><use xlink:href="/assets/img/icons.svg#{{ entry.icon }}"></use></svg>
    <span>{{ entry.label }}</span>
</p>

{% endfor %}

</div>