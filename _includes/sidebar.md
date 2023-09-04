<style>
    nav {
        padding: 0 20px;
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

    nav > ul {
        display: flex;
        flex: 1 0 50px;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        gap: 20px;
        list-style-type: none;
        margin:0;
        padding:0;
    }

    nav > ul > li {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 10px 0px !important;
        text-transform: uppercase;
        font-size: 1rem;
        font-weight: 600;
        font-variation-settings: 'wght' 600;
        cursor: pointer;
        gap: 4px;
    }

    nav > ul > li > a{
        margin: 0 10px;
    }

    nav > ul > li:hover {
        background-color: var(--hover_color);
    }
    
    .dropdown{
        display:block;
    }

    .dropdown-content {
      display: none;
      position: absolute;
      flex-direction: column;
      align-items:stretch;
      margin-top: 10px;
      gap: 2px;
      z-index: 1;
      list-style-type: none;
      padding: 2px 0 0 0;
    }

    .dropdown:hover > .dropdown-content > li {
      background-color: var(--back_color);
      border: 1px solid var(--hover_color);
      border-radius: 2px;
      padding: 5px 10px;
      display: flex;
      justify-content: center;
    }

    .dropdown:hover > .dropdown-content > li:hover {
        background-color: var(--hover_color);
    }

    .dropdown:hover > .dropdown-content {
      display: flex;
    }
  }

</style>

<nav>
    {% include setting.md %}
    <ul class="visible-links">
        <li><a href="{{ '/' | relative_url }}">Home</a></li>
        <li><a href="{{ '/blog/' | relative_url }}">Blog</a></li>
        <li class="dropdown">
            <a>Tags ▾</a>
            <ul class="dropdown-content">
                {% for tag in site.tags %}
                    <li><a href="{{ site.baseurl }}/blog/tag/{{ tag.title }}">{{ tag.title }}</a></li>
                {% endfor %}
            </ul>
        </li>
    </ul>
</nav>