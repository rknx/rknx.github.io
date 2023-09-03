<style>
    #footer{
        display: flex;
        flex-direction: row;
        margin-top: 3em;
        border-top: 2px solid var(--text_color);
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        gap:10px;
    }

    #footer > p {
        cursor:pointer;
    }

    #footer > p > svg {
        width: 1rem;
        height: 1rem;
        fill: var(--text_color);
    }

</style>

<section id="footer" markdown="1">

{% for entry in site.data.footer %}

<p onclick="window.open('{{ entry.link }}')">
    <svg><use xlink:href="/assets/img/icons.svg#{{ entry.icon }}"></use></svg>
    <span>{{ entry.label }}</span>
</p>

{% endfor %}

</section>