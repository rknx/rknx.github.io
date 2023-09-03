{% comment %} Parent for display setting, navbar and resources {% endcomment %}

<style>
    .side-menu {
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 90%;
        min-width: 280px;
        overflow: hidden;
        clip-path: circle(5rem at 0 0px);
        -webkit-clip-path: circle(5rem at 0 0px);
        transition: clip-path 0.5s ease-in-out;
        background-color: rgba(var(--back_color_fmt_rev), var(--transparency));
        padding: 64px 50px 25px;
        z-index: 888;
        backdrop-filter: var(--backdrop);
        -webkit-backdrop-filter: var(--backdrop);
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
        scrollbar-width: none;
        display: flex;
        align-items: stretch;
        justify-content: flex-start;
        flex-direction: column;
        gap: 10px;
        box-shadow: var(--shadow);
        pointer-events: none;
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
    }
    
    input#menu:checked ~ .side-menu {
        clip-path: circle(150% at 0 0px);
        -webkit-clip-path: circle(150% at 0 0px);
        pointer-events: visible;
    }
    
    .side-menu:focus-within {
        clip-path: circle(150% at 0 0px);
        -webkit-clip-path: circle(150% at 0 0px);
        pointer-events: visible;
    }
    
    @media only screen and (min-width: 480px) {
        .side-menu {
        width: 250px;
        padding: 64px 25px 25px;
        }
    }
    
    .side-menu::-webkit-scrollbar {
        display: none;
    }
    
    @media only screen and (min-width: 1280px) {
        .side-menu {
        clip-path: circle(150%);
        -webkit-clip-path: circle(150% at 0 0px);
        pointer-events: visible;
        padding: 25px;
        }
    }
    
    @media only screen and (max-width: 1279px) {
        input#menu:not(:checked) ~ .side-menu > * {
        opacity: 0;
        transition: opacity 0.3s ease-in-out 0.3s;
        }
    }

</style>

<div class="side-menu" markdown=1>

{% include setting.md %}

{% include navbar-cv.md %}

{% include resources.md %}

</div>