{% comment %}  Intro section  {% endcomment %}

<style>
    img.avatar {
        border-radius: 50%;
        width: 280px;
        max-width: 80%;
        aspect-ratio: 1/1;
        outline: 10px solid #007572;
        margin-top: 20px;
    }

    h1 > strong, h2 > strong, p > strong {
        font-weight: 700;
        font-variation-settings: 'wght' 700;
    }
</style>

<img class="avatar" src="{{ site.data.intro.avatar | prepend: '/assets/img/intro/' }}"/>

<h1> 
Hi, I'm {{ site.data.intro.fname | append: " " | append: site.data.intro.lname | markdownify | inline }}!
</h1> 

<h2>
I'm a {{ site.data.intro.job | bold | markdownify | inline }}.
</h2>

<p markdown="1">
    I am an
    {{ site.data.intro.position | bold }} 
    at the
    {{ site.data.intro.org | addUrl: site.data.intro.org_url | bold }}
    {{ site.data.intro.dept | addUrl: site.data.intro.dept_url | bold }}
    and my lab is positioned at the
    {{ site.data.intro.inst | addUrl: site.data.intro.inst_url | bold }}. 
    My research focuses on {{ site.data.intro.research}}. 
    Among other things, I am working on 
    {% for res in site.data.intro.researchlist -%}
        {% if forloop.last -%} and {% endif -%}
        {{ res -}}
        {% unless forloop.last %}, {% endunless -%}
    {% endfor -%}.

</p>