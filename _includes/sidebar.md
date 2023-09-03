<style>
    nav {
        padding: 10px 10px;
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        flex-direction: row-reverse;
        align-items: center;
        justify-content: flex-start;
        overflow: hidden;
        gap: 10px;
        border-bottom: 2px solid var(--text_color);
    }
    nav > div {
        display: flex;
        flex: 1 0 50px;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        gap: 20px;
    }
    nav > div > p {
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
        gap: 4px;
    }
    nav > div > p > svg {
        width: 1rem;
        height: 1.2rem;
        fill: var(--text_color);
    }
    nav > div > p:hover > svg {
        fill: var(--select);
    }

</style>


<nav markdown=1>

{% include setting.md %}

<div>

<p onclick="location.href = '/'"><svg><use xlink:href="/assets/img/icons.svg#angle-right"></use></svg>Home</p>

<p onclick="location.href = '/blog'"><svg><use xlink:href="/assets/img/icons.svg#angle-right"></use></svg>Blog</p>

</div>

</nav>