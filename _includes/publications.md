{% comment %} Publication section {% endcomment %}

<style>
    .publications > div {
        display:flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 10px;
    }
    .publications > div > p {
        font-family:'Code';
        border: 1.25px solid;
        border-radius: calc(1rem + 4px);
        padding: 2px 5px;
        cursor: pointer;
        flex-direction:row;
        margin:0;
        align-items: center;
    }
    .publications > div > p > svg {
        height: 1rem;
        width: 1rem;
        margin-left: 5px;
        fill: var(--text_color);
    }
    
    .publications > div > p > svg:nth-child(1) {
        display: inline
    }
    
    .publications > div > p > svg:nth-child(2) {
        display: none
    }

    .publications > div > p.clicked {
        background-color: #9952f6;
    }
    
    .publications > div > p.clicked > svg:nth-child(1) {
        display: none
    }
    
    .publications > div > p.clicked > svg:nth-child(2) {
        display: inline
    }

    .publications {
        display:flex;
        flex-direction: column;
    }

    .publications > img {
        align-self: center;
        height: 240px;
    }

    /*
        .publications {
            display: block;
        }
        
        .publications > img {
            float: left;
        }
        
        .parent + div {
            clear: both;
        }
    */


</style>



<section id="{{ include.id }}" markdown="1">

### {{ include.title }}

{% for entries in site.data.[include.id] reversed %}
{% assign entry = entries[1]%}



<h4>{{ entry.title | markdownify }}</h4>



<div class="{{ include.id }}" markdown="1">




{% comment %} Thumbnail image for the paper {% endcomment %}

{%- if entry.thumb -%}
<img src="{{ entry.thumb | prepend: 'assets/img/papers/' }}" alt="" onerror="this.style.display=none">
{%- endif -%}





{% comment %} Parsing paper information from data. {% endcomment %}

<p>
{{ entry.type }}
{%- if entry.published -%} 
{{ "published" | prepend: " " }}
{%- else -%} 
{{ "in preparation for publication" | prepend: " " }}
{%- endif -%} 
{%- if entry.journal -%} 
{{ "in" | prepend: " " }}
{%- if entry.volume -%} 
{{ entry.volume | prepend: " volume " | append: " of" }}
{%- endif -%} 
{{ entry.journal | prepend: " " }}
{%- endif -%} 
{%- if entry.year -%} 
{{ entry.year | prepend: " in " }}
{%- endif -%} 
.
</p>





{% comment %} Paper summary {% endcomment %}

{% if entry.summary %} {{ entry.summary | prepend: "**Summary**: " | markdownify }} {% endif %}





{% comment %} Links {% endcomment %}

<div markdown=1>

{% for link in entry.links %}

{% if link.link %}
<p class = "bt-pub" onclick="window.open('{{ link.link | prepend: site.data.refurl.[link.name] }}')">
{{ link.name }}<svg><use xlink:href="assets/img/icons.svg#linkout"></use></svg>
</p>
{% endif %}

{% endfor %}




{% comment %} Bibtex citation {% endcomment %}

{% if entry.citebib %}
<p data-bib="{{ entry.citebib }}" class="bib bt-pub">
Bibtex<svg><use xlink:href="assets/img/icons.svg#copy"></use></svg><svg><use xlink:href="assets/img/icons.svg#done"></use></svg>
</p>
{% endif %}

</div>

</div>

{% endfor %}

</section>

<script>
    document.querySelectorAll('.bib').forEach((button) => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            if (navigator.clipboard) {
                navigator.clipboard.writeText(button.getAttribute('data-bib'));
                button.classList.add('clicked');
                setTimeout(() => button.classList.remove('clicked'), 1000);
            };
        });
    });
</script>