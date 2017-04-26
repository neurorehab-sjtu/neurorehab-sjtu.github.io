---
layout: page
title: 科研合作
permalink: /collaborations/
icon: handshake-o
type: page
---

* content
{:toc}

{% for obj in site.data.collaborations %}

* ###### [{{obj.title}}](/collaborations/{{obj.url}})
<div class="captioned-img alignleft">
    <a href="/images/{{obj.image}}">

    <img src="/images/{{obj.image}}" height="120" style="float:left;margin:0px 10px 0 0;" />
    </a>
</div>
{{obj.description}}

---
{% endfor %}
