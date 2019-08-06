(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(a,e,n){a.exports=n(36)},30:function(a,e,n){},36:function(a,e,n){"use strict";n.r(e);var t=n(1),i=n.n(t),o=n(20),r=n.n(o),l=(n(30),n(11)),u=n(7),c=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h1",null,"What is this?"),i.a.createElement("p",null,"I'm reading ",i.a.createElement("a",{href:"https://core-econ.org/the-economy/?lang=en"},"The Economy"),","," ",i.a.createElement("a",{href:"https://www.goodreads.com/book/show/17744.The_Visual_Display_of_Quantitative_Information"},"The Visual Display of Quantitative Information")," ","and learning to do data stuff with Python, and I'm gonna use this repository to store the things I do as part of that learning. It's going to be a kind of collection of notes in code and charts."),i.a.createElement("h2",null,"Index"),i.a.createElement("ol",null,i.a.createElement("li",null,i.a.createElement(l.b,{to:"/1-the-capitalist-revolution"},"The Capitalist Revolution"))))},s=n(15),h=n.n(s),d=n(23),m=n(16),p=n(9),g=n(24),b={1980:{Lesotho:1,China:2,Burundi:3,Nepal:4,Tanzania:5,Myanmar:6,Lao:7,Indonesia:8,"Guinea-Bissau":9,Mozambique:10,Ethiopia:11,Pakistan:12,Vietnam:13,India:14,Cambodia:15,Bangladesh:16,Togo:17,"Burkina Faso":18,Rwanda:19,Zambia:20,Madagascar:21,Niger:22,Chad:23,"Bosnia and Herzegovina":24,"Dem. Rep. Congo":25,Mali:26,Senegal:27,Ghana:28,Benin:29,"Central African Republic":30,"Sierra Leone":31,"Sri Lanka":32,Haiti:33,Egypt:34,Guatemala:35,"West Bank and Gaza":36,Armenia:37,Sudan:38,Afghanistan:39,Philippines:40,Turkmenistan:41,Mauritius:42,"Congo, Rep.":43,Mauritania:44,Kosovo:45,Cameroon:46,Jamaica:47,Nigeria:48,Malawi:49,Moldova:50,Mongolia:51,Uzbekistan:52,Angola:53,Liberia:54,"Kyrgyz Republic":55,Morocco:56,Kenya:57,Algeria:58,Thailand:59,Botswana:60,Lithuania:61,"Costa Rica":62,Panama:63,Namibia:64,Honduras:65,Albania:66,Kazakhstan:67,Bolivia:68,Belarus:69,Tunisia:70,"El Salvador":71,"Papua New Guinea":72,Georgia:73,Guinea:74,"Syrian Arab Republic":75,Mexico:76,Guyana:77,"South Africa":78,Jordan:79,Malaysia:80,Bulgaria:81,Colombia:82,Azerbaijan:83,Chile:84,Turkey:85,Russia:86,Romania:87,Iran:88,Tajikistan:89,"Cote d'Ivoire":90,Brazil:91,"Macedonia, FYR":92,Venezuela:93,Paraguay:94,Taiwan:95,Peru:96,"Dominican Republic":97,Portugal:98,Estonia:99,Ecuador:100,Poland:101,Ukraine:102,Nicaragua:103,"Slovak Republic":104,"Czech Republic":105,Ireland:106,Uruguay:107,"Trinidad and Tobago":108,Spain:109,Israel:110,Greece:111,Hungary:112,Croatia:113,Latvia:114,Argentina:115,Italy:116,"Korea, Rep.":117,Slovenia:118,Japan:119,Belgium:120,Sweden:121,France:122,"United Kingdom":123,Netherlands:124,Australia:125,Denmark:126,Norway:127,Austria:128,Germany:129,Canada:130,"United States":131,Finland:132,Switzerland:133},2005:{Liberia:1,"Dem. Rep. Congo":2,Burundi:3,Madagascar:4,Lesotho:5,"Guinea-Bissau":6,"Sierra Leone":7,Afghanistan:8,Mozambique:9,Niger:10,"Central African Republic":11,Uzbekistan:12,Rwanda:13,Togo:14,Nigeria:15,Guinea:16,Turkmenistan:17,Tanzania:18,Zambia:19,Mali:20,Swaziland:21,Malawi:22,Benin:23,Bangladesh:24,Nepal:25,"Burkina Faso":26,Haiti:27,Ethiopia:28,Kenya:29,Senegal:30,Myanmar:31,Lao:32,Pakistan:33,Cambodia:34,Chad:35,India:36,"Kyrgyz Republic":37,Sudan:38,Moldova:39,Angola:40,"Cote d'Ivoire":41,Djibouti:42,Indonesia:43,Egypt:44,Cameroon:45,Tajikistan:46,"Papua New Guinea":47,Vietnam:48,Gambia:49,Mauritania:50,"Timor-Leste":51,Ghana:52,Philippines:53,Kosovo:54,Armenia:55,"Sri Lanka":56,"Congo, Rep.":57,Namibia:58,Fiji:59,Honduras:60,Guatemala:61,Mongolia:62,Nicaragua:63,Algeria:64,China:65,Jordan:66,Venezuela:67,Romania:68,Morocco:69,Albania:70,"West Bank and Gaza":71,Peru:72,Bolivia:73,"Syrian Arab Republic":74,"El Salvador":75,Azerbaijan:76,Bulgaria:77,Ecuador:78,"Dominican Republic":79,"South Africa":80,Colombia:81,Tunisia:82,Mauritius:83,Paraguay:84,Serbia:85,Panama:86,Botswana:87,Mexico:88,Brazil:89,Thailand:90,"Macedonia, FYR":91,Turkey:92,Jamaica:93,Kazakhstan:94,"Costa Rica":95,Belarus:96,Uruguay:97,Malaysia:98,Lithuania:99,Gabon:100,Iran:101,"Trinidad and Tobago":102,Latvia:103,Argentina:104,Ukraine:105,Poland:106,Cyprus:107,Hungary:108,Chile:109,Estonia:110,"Slovak Republic":111,Russia:112,"Czech Republic":113,Portugal:114,Israel:115,Slovenia:116,Greece:117,Croatia:118,Spain:119,Taiwan:120,Italy:121,France:122,Japan:123,Finland:124,Ireland:125,Denmark:126,Sweden:127,Belgium:128,Australia:129,Netherlands:130,Austria:131,Germany:132,"United Kingdom":133,Canada:134,Norway:135,Switzerland:136,"Korea, Rep.":137,"United States":138,Singapore:139}},y=Object.keys(b[1980]).sort(),f=function(){var a=Object(t.useState)(y[0]),e=Object(m.a)(a,2),n=e[0],o=e[1],r=Object(t.useState)("1980"),l=Object(m.a)(r,2),u=l[0],c=l[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement("h1",null,"The Capitalist Revolution"),i.a.createElement("p",null,"This chapter starts talking about income and income inequality. It links to an"," ",i.a.createElement("a",{href:"https://jackblun.github.io/Globalinc/"},"amazing visualization"),"; the charts I'm going to show here pale in comparison."),i.a.createElement("p",null,"The data available as a CSV. I was curious about the evolution of the mean income and 90/10 ratio in each country. So I created a bunch of PNGs using pandas and matplotlib."),i.a.createElement("select",{onChange:function(a){return o(a.currentTarget.value)}},y.map(function(a){return i.a.createElement("option",{value:a},a)})),i.a.createElement("div",null,i.a.createElement("img",{style:{width:"75%"},src:"1_the_capitalist_revolution/".concat(n,"_mean_income.png"),alt:""}),i.a.createElement("img",{style:{width:"75%"},src:"1_the_capitalist_revolution/".concat(n,"_90_10.png"),alt:""})),i.a.createElement("p",null,"The visualization also shows how, if you sort countries by income, the position of each country changes between 1980 and 2005. The following map shows the position of each country in each year (green means higher in the top by income, red means lower)"),i.a.createElement("form",null,i.a.createElement("label",null,i.a.createElement("input",{type:"radio",value:"1980",checked:"1980"===u,onChange:function(){return c("1980")}}),"1980"),i.a.createElement("label",null,i.a.createElement("input",{type:"radio",value:"2005",checked:"2005"===u,onChange:function(){return c("2005")}}),"2005")),i.a.createElement(v,{year:u}))},v=function(a){var e=Object(t.useRef)(null);return Object(t.useEffect)(function(){var n=function(){var n=Object(d.a)(h.a.mark(function n(){var t,i,o,r,l,u,c,s,d,m;return h.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("drawing"),t=p.e(e.current),n.next=4,fetch("world.json",{"content-type":"application/json"}).then(function(a){return a.json()});case 4:i=n.sent,o=p.d().domain([1,y.length],[0,1]),r=function(a){return p.c(o(a))},l=p.a().scale(1).translate([0,0]),u=p.b().projection(l),c=u.bounds(i),s=.95/Math.max((c[1][0]-c[0][0])/810,(c[1][1]-c[0][1])/500),d=[(810-s*(c[1][0]+c[0][0]))/2,(500-s*(c[1][1]+c[0][1]))/2],l.scale(s).translate(d),m=Object(g.a)().attr("class","d3-tip").html(function(e){var n=e.properties.name,t=b[a.year][n]?Object.keys(b[a.year]).length-b[a.year][n]+1:"?";return"<div>Country: ".concat(n,"</div>\n  <div>Ranking: ").concat(t,"</div>\n")}),t.call(m),t.selectAll("path").data(i.features).enter().append("path").attr("d",u),t.selectAll("path").attr("fill",function(e){var n=e.properties.name;return b[a.year][n]?r(b[a.year][n]):"lightgray"}).attr("stroke","white").on("mouseover",function(a,e,n){m.show(a,n[e])}).on("mouseout",function(a,e,n){m.hide(a,n[e])});case 17:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}();e.current&&n()},[e,a]),i.a.createElement(i.a.Fragment,null,i.a.createElement("svg",{width:810,height:500,ref:e,style:{border:"solid"}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(function(){return i.a.createElement(l.a,null,i.a.createElement(u.a,{path:"/",exact:!0,component:c}),i.a.createElement(u.a,{path:"/1-the-capitalist-revolution",exact:!0,component:f}))},null),document.querySelector("body")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(a){a.unregister()})}},[[25,1,2]]]);
//# sourceMappingURL=main.2ea01a04.chunk.js.map