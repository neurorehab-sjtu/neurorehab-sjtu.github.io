---
layout: page
title: 研究方向
permalink: /research/
icon: th-list
type: page
---
* content
{:toc}

### 神经肌肉电刺激 (NMES) 系统研发

---

{% for post in site.data.research %}
{% if post.type == 'NMES' %}
#### [{{post.title}}]({{site.url}}/research{{post.url}})
  <br>
![](/images/{{post.image}})
  {{post.content}}

---
  {% endif %}
{% endfor %}

### 神经假肢的感知功能重建

---

{% for post in site.data.research %}
{% if post.type == 'prosthetic' %}
#### [{{post.title}}]({{site.url}}/research{{post.url}})
  <br>
  ![](/images/{{post.image}})
  {{post.content}}

---
  {% endif %}
{% endfor %}




<!-- <script src="{{ "/js/scroll.min.js " | prepend: site.baseurl }}" charset="utf-8"></script> -->
<!-- <script src="{{ "/js/pageContent.js " | prepend: site.baseurl }}" charset="utf-8"></script> -->
