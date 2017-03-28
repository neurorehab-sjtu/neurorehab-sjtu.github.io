---
layout: page
title: 成员简介
permalink: /members/
icon: user
type: page
---
* content
{:toc}
### 核心Faculty

---

{% for member in site.data.faculty_core %}
* [{{member.name}}](/members/{{member.short}})，{{member.title}}，E-mail: <a href="mailto:{{member.email}}">{{member.email}}</a>
<div class="captioned-img alignleft">
    <a href="/images/{{member.pic}}">

    <img src="/images/{{member.pic}}" height="120" style="float:left;margin:0px 10px 0 0;" />
    </a>
</div>
{{member.description}}

---
{% endfor %}

### 合作Faculty

---

{% for member in site.data.faculty_collaborate %}
* [{{member.name}}](/members/{{member.short}})，{{member.title}}，E-mail: <a href="mailto:{{member.email}}">{{member.email}}</a>
<div class="captioned-img alignleft">
    <a href="/images/{{member.pic}}">

    <img src="/images/{{member.pic}}" height="120" style="float:left;margin:0px 10px 0 0;" />
    </a>
</div>
{{member.description}}

---
{% endfor %}


### 往届毕业生

---

{% for member in site.data.graduate %}
* [{{member.name}}](/members/{{member.short}})，{{member.title}}，E-mail: <a href="mailto:{{member.email}}">{{member.email}}</a>
<div class="captioned-img alignleft">
    <a href="/images/{{member.pic}}">

    <img src="/images/{{member.pic}}" height="120" style="float:left;margin:0px 10px 0 0;" />
    </a>
</div>
{{member.description}}

---
{% endfor %}
