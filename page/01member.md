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

<div class="row">
<div id="biyekuang">
{% for member in site.data.graduate %}
<div class="col-md-4 col-sm-6 animate-box">
<a href="/members/{{member.short}}/" class="item-grid">
  <div class="image" style="background-image: url({{site.baseurl}}/images/{{member.pic}})"></div>
  <div class="v-align">
    <div class="v-align-middle">
      <h3 class="name">{{member.name}}</h3>
      <h5 class="title">{{member.title}}</h5>
      <!--<h5 class="title">E-mail: {{member.email}}</h5>-->
      <p>{{member.description}}</p>
    </div>
  </div>
</a>
</div>
{% endfor %}
</div>
</div>
---
