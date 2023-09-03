{% comment %} Navigation {% endcomment %}

<style>
    .side-menu > nav {
        padding: 10px 0px;
        display: flex;
        flex: 1 0 500px; /*for iphone!*/
        flex: 1 0 50%;
        flex-direction: column;
        align-items: stretch;
        justify-content: center;
        overflow: hidden;
        gap: 4px;
    }
    .side-menu > nav > p {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 4px 10px !important;
        text-transform: uppercase;
        font-size: 1rem;
        font-weight: 600;
        font-variation-settings: 'wght' 600;
        cursor: pointer;
        margin: 0;
        box-shadow: 0 0 1px 0;
        gap: 4px;
    }
    .side-menu > nav > p > svg {
        width: 1rem;
        height: 1.2rem;
        fill: var(--text_color);
    }
    .side-menu > nav > p:hover > svg {
        fill: var(--select);
    }

</style>

<nav markdown=1>

{% for section in site.data.sections-cv %}

{% if section.nav %}

<p onclick="scrollSmoothTo('{{ section.id }}')"><svg><use xlink:href="assets/img/icons.svg#angle-right"></use></svg>{{ section.name }}</p>

{% endif %}

{% endfor %}

</nav>

<script>
    function scrollSmoothTo(elementId) {
        document.getElementById(elementId).scrollIntoView({
            block: 'start',
            behavior: 'smooth'
        });
    }
</script>