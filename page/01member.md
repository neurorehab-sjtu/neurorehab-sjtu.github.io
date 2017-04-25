---
layout: member
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
* [{{member.name}}](/members/{{member.short}})，{{member.title}}，E-mail: <a href="mailto:{{member.email}}">{{membLr.email}}</a>
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
<div class="grid">
</div>

### 在读研究生

---
<div class="grid1">
</div>

<script src="{{ " /js/masonry.pkgd.min.js " | prepend: site.baseurl }}" charset="utf-8"></script>
<script type="text/javascript" charset="utf-8">
/* jshint asi:true */
//先等图片都加载完成
//再执行布局函数

/**
 * 执行主函数
 * @param  {[type]} function( [description]
 * @return {[type]}           [description]
 */
(function() {

  /**
     * 内容JSON
     */
  var demoContent = [
  {% for member in site.data.graduate %}
      {
          demo_link: '{{member.short}}',
          img_link: '/images/{{member.pic}}',
          //code_link: '',
          title: '{{member.name}}',
          core_tech: '{{member.title}}',
          description: '{{member.description}}'
      },
      {% endfor %}
  ];
  var demoContent1 = [
  {% for member in site.data.student %}
      {
          demo_link: '{{member.short}}',
          img_link: '/images/{{member.pic}}',
          //code_link: '',
          title: '{{member.name}}',
          core_tech: '{{member.title}}',
          description: '{{member.description}}'
      },
      {% endfor %}
  ];

  contentInit(demoContent,'.grid') //内容初始化
  contentInit(demoContent1,'.grid1')
  waitImgsLoad() //等待图片加载，并执行布局初始化
}());

/**
 * 内容初始化
 * @return {[type]} [description]
 */
function contentInit(content, grid) {
  var htmlStr = ''
  for (var i = 0; i < content.length; i++) {
    htmlStr += '<div class="grid-item">' + '   <a class="a-img" href="' + content[i].demo_link + '">' + '       <img src="' + content[i].img_link + '">' + '   </a>' + '   <h3 class="demo-title">' + '       <a href="' + content[i].demo_link + '">' + content[i].title + '</a>' + '   </h3>' + '   <h6>' + content[i].core_tech + '</h6>' + '   <p>' + content[i].description +  '   </p>' + '</div>'
  }
  var grid = document.querySelector(grid)
  grid.insertAdjacentHTML('afterbegin', htmlStr)
}

/**
 * 等待图片加载
 * @return {[type]} [description]
 */
function waitImgsLoad() {
  var imgs = document.querySelectorAll('.grid img')
  var totalImgs = imgs.length
  var count = 0
  //console.log(imgs)
  for (var i = 0; i < totalImgs; i++) {
    if (imgs[i].complete) {
      //console.log('complete');
      count++
    } else {
      imgs[i].onload = function() {
        // alert('onload')
        count++
        //console.log('onload' + count)
        if (count == totalImgs) {
          //console.log('onload---bbbbbbbb')
          initGrid()
        }
      }
    }
  }
  if (count == totalImgs) {
    //console.log('---bbbbbbbb')
    initGrid()
  }
}

/**
 * 初始化栅格布局
 * @return {[type]} [description]
 */

function initGrid() {
  var msnry = new Masonry('.grid', {
    // options
    itemSelector: '.grid-item',
    columnWidth: 180,
    isFitWidth: true,
    gutter: 20
  })
  var msnry1 = new Masonry('.grid1', {
    // options
    itemSelector: '.grid-item',
    columnWidth: 180,
    isFitWidth: true,
    gutter: 20
  })
}

</script>
