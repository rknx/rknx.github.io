<style>
    .post-card {
        display:flex;
        flex: 0 0 320px;
        margin:auto;
        flex-direction: column;
        min-height: 300px;
        background-size: cover;
        border-radius: 5px;
        box-shadow: 8px 14px 38px rgb(39 44 49 / 6%), 1px 3px 8px rgb(39 44 49 / 3%);
        transition: all .5s ease;
        cursor:pointer;
    }

    .post-card:hover {
        box-shadow: 0 0 1px rgb(39 44 49 / 10%), 0 3px 16px rgb(39 44 49 / 7%);
        transition: all .3s ease;
        transform: translate3D(0,-1px,0);
    }

    .post-img {
        width: 100%;
        aspect-ratio: 2/1;
        /*background-size: cover;*/
        border-radius: 5px 5px 0 0;
        /*background-image: var(--bgi);*/
        object-fit: cover;
    }
    .post-content {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 10px;
    }
    .post-tag{
        font-size: 1rem;
        line-height: 1.15em;
        letter-spacing: .5px;
        text-transform: uppercase;
    }
    .post-title {
        font-size: 1.5rem;
        font-family: "Main";
        font-weight: 700;
        font-variation-settings: 'wght' 700;
    }
</style>

<article class="post-card" onclick="location.href='{{ post.permalink | relative_url }}'">

{%- if post.thumb -%}
    <img class="post-img" src="/assets/img/blog/{{- post.thumb -}}"></img>
{%- endif -%}

<div class="post-content">

<span class="post-tag">{{ post.tags }}</span>
       
<h2 class="post-title">{{ post.title }}</h2>

{{ post.excerpt }}

</div>

</article>