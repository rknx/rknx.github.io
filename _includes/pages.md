{% comment %} Vcard links and CV downloads {% endcomment %}

<style markdown=1>

    .pages{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        gap: 10px;
        margin-top: 10px;
    }
    .pg-links {
        display: flex;
        margin-top: auto;
        justify-content: space-between;
        flex-direction: row;
        gap: 1px;
    }

    .pg-links > div {
        display: flex;
        flex-direction: row;
        flex-grow: 1;
        align-items: center;
        justify-content: center;
        margin:0;
        padding: 10px 10px;
        border: 1px solid var(--text_color);
    }

    .pg-links > div:first-child {
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
    }

    .pg-links > div:last-child {
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
    }

    .pg-links > div:not(:first-child) {
        pointer: auto
    }

    .pg-links > div > span {
        font-weight: 700;
        font-variation-settings: 'wght' 700;
        font-optical-sizing: auto;
        text-transform: uppercase;
        text-align: center;
    }

    .pg-links > div > svg {
        width: 1.2rem;
        height: 1.2rem;
        fill: var(--text_color);
        margin-bottom: 2px;
    }

    .pg-links > div:not(:first-child):hover > svg {
        fill: var(--select);
    }

    .pg-label {
        display: flex;
        flex-direction: row;
        gap: 6px;
    }
</style>

<div class="pages" markdown=1>

{% for entry in site.data.pages %}
<div class="pg-links">
    <div class="pg-label">
        {%- if entry.icon -%}<svg><use xlink:href="/assets/img/icons.svg#{{ entry.icon }}"></use></svg>{%- endif -%}
        <span>{{ entry.label }}</span>
    </div>
    {%- if entry.link -%}
    <div class="pg-view" onclick="location.href='{{ entry.link }}'">
        <svg><use xlink:href="/assets/img/icons.svg#view"></use></svg>
    </div>
    {%- endif -%}
    {%- if entry.extlink -%}
    <div class="pg-view" onclick="window.open('{{ entry.extlink }}')">
        <svg><use xlink:href="/assets/img/icons.svg#linkout"></use></svg>
    </div>
    {%- endif -%}
    {%- if entry.dl -%}
    <div class="pg-dl" onclick="location.href='{{ entry.dl | prepend: "/files/" }}'">
        <svg><use xlink:href="/assets/img/icons.svg#download"></use></svg>
    </div>
    {%- endif -%}
</div>

{% endfor %}

</div>