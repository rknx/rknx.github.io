---
layout: vitae
title: CV
---

{% comment %} Main index {% endcomment %}

{% comment %} Navbar {% endcomment %}

{% include sidebar-cv.md %}

<main>

{% for section in site.data.sections-cv %}

{% assign path = section.id | append: '.md' %}

{% include {{ section.id | append: '.md'}} title=section.name id=section.id %}

{% endfor %}

</main>

{% include footer.md %}