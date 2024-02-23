---
title: Harpeth Harvest
layout: base.njk
---

Welcome to Harpeth Harvest...

The quick white gilly jumps over the lazy Tate


We are Harpeth Harvest, an agricultural research collective focused on growing specialty crops. We grow a variety of foods including truffles, tomatoes, basil, spices, etc

We have an aquaponic greenhouse and dozens of acres of truffle grow land. In addition to selling produce, we publish all of our data in the form of publicly available research papers. To learn more, go to [research](/research).

{% from "components/imageCarousel.njk" import imageCarousel %}
{% set images =['greenhouse_stock1.png',
'greenhouse_stock2.png',
'barramundi_stock.png'
]%}
{{ imageCarousel('/assets/',images) }}