(this.webpackJsonpreels=this.webpackJsonpreels||[]).push([[0],{32:function(e,t,c){},52:function(e,t,c){},54:function(e,t,c){},55:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){},67:function(e,t,c){},68:function(e,t,c){},69:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){},72:function(e,t,c){},75:function(e,t,c){},76:function(e,t,c){},77:function(e,t,c){},78:function(e,t,c){},79:function(e,t,c){},80:function(e,t,c){},81:function(e,t,c){},82:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c(24),n=c.n(a),r=(c(32),c(2)),i=c(3),l=c(4),o=c.n(l),j=c(9),b=c(5),d=c(10),h=c.n(d),u={baseUrl:"https://reels--video.herokuapp.com",baseVideoUrl:"https://www.youtube.com/embed",imgURL:"http://image.tmdb.org/t/p",imgagesSizes:{backdrop_sizes:["w300","w780","w1280","original"],logo_sizes:["w45","w92","w154","w185","w300","w500","original"],poster_sizes:["w92","w154","w185","w342","w500","w780","original"],profile_sizes:["w45","w185","h632","original"],still_sizes:["w92","w185","w300","original"]}},m=(c(52),c(0)),O=function(){var e=Object(s.useState)(),t=Object(b.a)(e,2),c=t[0],a=t[1];return window.addEventListener("scroll",(function(){window.scrollY>=70?a(!0):a(!1)})),Object(m.jsxs)("header",{className:c?"header active":"header",children:[Object(m.jsx)("img",{className:"header--logo",src:"https://live.staticflickr.com/65535/51381764212_8fbffba6d7_o.png",width:"200",height:"200",alt:"logo__mobile"}),Object(m.jsx)("img",{className:"header--avatar",src:"https://toppng.com/uploads/preview/avatar-png-11554021819gij72acuim.png",alt:""})]})},x=(c(54),c(55),function(e){var t=e.id,c=e.title,s=e.rating,a=e.overview,n=e.media;return"tv"===n&&(n="show"),Object(m.jsxs)("main",{className:"main__section--info",children:[Object(m.jsxs)("h1",{children:[c,Object(m.jsx)("span",{children:"".concat(s,"/10")})]}),Object(m.jsx)("p",{children:a}),Object(m.jsxs)(r.b,{to:"/".concat(n,"/").concat(t),className:"btn--play",children:[Object(m.jsx)("i",{className:"fas fa-play"}),"Play"]})]})}),p=function(e){var t=e.data;return Object(m.jsxs)("div",{id:"carrousel--tv",className:"carousel slide","data-ride":"carousel",children:[Object(m.jsx)("ol",{className:"carousel-indicators",children:t.map((function(e,t){return 0===t?Object(m.jsx)("li",{"data-target":"#carrousel--tv","data-slide-to":t.toString(),className:"active"},e.id):Object(m.jsx)("li",{"data-target":"#carrousel--tv","data-slide-to":t.toString()},e.id)}))}),Object(m.jsx)("div",{className:"carousel-inner",children:t.map((function(e,t){return 0===t?Object(m.jsxs)("div",{className:"carousel-item active",children:[Object(m.jsx)("img",{src:"".concat(u.imgURL,"/").concat(u.imgagesSizes.poster_sizes[5]).concat(e.poster_path),alt:"About: ".concat(e.title||e.original_title||e.name||e.original_name)}),Object(m.jsx)(x,{title:e.title||e.original_title||e.name||e.original_name,rating:e.vote_average,overview:e.overview,media:e.media_type,id:e.id})]},e.id):Object(m.jsxs)("div",{className:"carousel-item",children:[Object(m.jsx)("img",{src:"".concat(u.imgURL,"/").concat(u.imgagesSizes.poster_sizes[5]).concat(e.poster_path),alt:"About: ".concat(e.title||e.original_title||e.name||e.original_name)}),Object(m.jsx)(x,{title:e.title||e.original_title||e.name||e.original_name,rating:e.vote_average,overview:e.overview,media:e.media_type,id:e.id})]},e.id)}))}),Object(m.jsxs)("a",{className:"carousel-control-prev",href:"#carrousel--tv",role:"button","data-slide":"prev",children:[Object(m.jsx)("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),Object(m.jsx)("span",{className:"sr-only",children:"Previous"})]}),Object(m.jsxs)("a",{className:"carousel-control-next",href:"#carrousel--tv",role:"button","data-slide":"next",children:[Object(m.jsx)("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),Object(m.jsx)("span",{className:"sr-only",children:"Next"})]})]})},f=(c(64),function(){return Object(m.jsxs)("nav",{className:"navbar",children:[Object(m.jsx)(r.b,{to:"/home/1",children:Object(m.jsx)("li",{className:"fas fa-home"})}),Object(m.jsx)(r.b,{to:"/search",children:Object(m.jsx)("li",{className:"fas fa-search"})}),Object(m.jsx)(r.b,{to:"/genres",children:Object(m.jsx)("li",{className:"fas fa-film"})}),Object(m.jsx)(r.b,{to:"/profile",children:Object(m.jsx)("li",{className:"fas fa-user-circle"})})]})}),g=(c(65),function(e){var t=e.title;return Object(m.jsx)("div",{className:"title",children:Object(m.jsx)("h2",{children:t})})}),v=(c(66),function(e){var t=e.pageNumber,c=e.scrollRef,s=function(){c.current.scrollIntoView()};return Object(m.jsxs)("div",{className:"pagination--container",children:[1===t?null:Object(m.jsx)(r.b,{to:"/home/".concat(parseInt(t-1)),className:"fas fa-chevron-left pagination--back",onClick:s}),Object(m.jsx)("span",{children:t}),1e3===t?null:Object(m.jsx)(r.b,{to:"/home/".concat(parseInt(t+1)),className:"fas fa-chevron-right pagination--next",onClick:s})]})}),_=(c(67),function(e){var t=e.title,c=e.movies,a=e.pagination,n=void 0!==a&&a,i=e.pageNumber,l=Object(s.useRef)();return Object(m.jsxs)("section",{className:"movie__grid",ref:l,children:[Object(m.jsx)(g,{title:t}),Object(m.jsx)("div",{className:"movie__grid--content",children:c.map((function(e){return Object(m.jsxs)(r.b,{to:"/".concat("tv"===e.media_type?e.media_type="show":e.media_type,"/").concat(e.id),children:[Object(m.jsx)("img",{src:"".concat(u.imgURL,"/").concat(u.imgagesSizes.poster_sizes[2]).concat(e.poster_path),alt:"About: ".concat(e.title||e.original_title||e.name||e.original_name)}),Object(m.jsx)("span",{children:e.title||e.original_title||e.name||e.original_name})]},e.id)}))}),n?Object(m.jsx)(v,{pageNumber:parseInt(i),scrollRef:l}):null]})}),N=(c(68),function(e){var t=e.title,c=e.data;return Object(m.jsxs)("section",{className:"shows--container",children:[Object(m.jsx)(g,{title:t}),Object(m.jsxs)("div",{id:"carrousel",className:"carousel slide","data-ride":"carousel",children:[Object(m.jsx)("ol",{className:"carousel-indicators carousel--grid--indicator",children:c.map((function(e,t){return 0===t?Object(m.jsx)("li",{"data-target":"#carrousel","data-slide-to":t.toString(),className:"active"},e.id):Object(m.jsx)("li",{"data-target":"#carrousel","data-slide-to":t.toString()},e.id)}))}),Object(m.jsx)("div",{className:"carousel-inner",children:c.map((function(e,t){return 0===t?Object(m.jsx)("div",{className:"carousel-item active",children:Object(m.jsxs)("div",{className:"show--info",children:[Object(m.jsxs)("div",{className:"show__info--left",children:[Object(m.jsx)(r.b,{to:"/show/".concat(e.id),children:Object(m.jsx)("img",{src:"".concat(u.imgURL,"/").concat(u.imgagesSizes.poster_sizes[2]).concat(e.poster_path),alt:"About: ".concat(e.title||e.original_title||e.name||e.original_name)})}),Object(m.jsx)("h3",{children:e.title||e.original_title||e.name||e.original_name})]}),Object(m.jsxs)("div",{className:"show__info--right",children:[Object(m.jsxs)("span",{children:["Origin Country: ",e.origin_country[0]]}),Object(m.jsxs)("span",{children:["First Air Date: ",e.first_air_date]}),Object(m.jsxs)("span",{children:["Rating:"," ",Object(m.jsx)("small",{className:"rating",children:"".concat(e.vote_average,"/10")})]})]})]})},e.id):Object(m.jsx)("div",{className:"carousel-item",children:Object(m.jsxs)("div",{className:"show--info",children:[Object(m.jsxs)("div",{className:"show__info--left",children:[Object(m.jsx)(r.b,{to:"/show/".concat(e.id),children:Object(m.jsx)("img",{src:"".concat(u.imgURL,"/").concat(u.imgagesSizes.poster_sizes[2]).concat(e.poster_path),alt:"About: ".concat(e.title||e.original_title||e.name||e.original_name)})}),Object(m.jsx)("h3",{children:e.title||e.original_title||e.name||e.original_name})]}),Object(m.jsxs)("div",{className:"show__info--right",children:[Object(m.jsxs)("span",{children:["Origin Country: ",e.origin_country[0]]}),Object(m.jsxs)("span",{children:["First Air Date: ",e.first_air_date]}),Object(m.jsxs)("span",{children:["Rating:"," ",Object(m.jsx)("small",{className:"rating",children:"".concat(e.vote_average,"/10")})]})]})]})},e.id)}))}),Object(m.jsxs)("a",{className:"carousel-control-prev",href:"#carrousel",role:"button","data-slide":"prev",children:[Object(m.jsx)("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),Object(m.jsx)("span",{className:"sr-only",children:"Previous"})]}),Object(m.jsxs)("a",{className:"carousel-control-next",href:"#carrousel",role:"button","data-slide":"next",children:[Object(m.jsx)("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),Object(m.jsx)("span",{className:"sr-only",children:"Next"})]})]})]})}),w=(c(69),c(70),function(){return Object(m.jsx)("div",{className:"loader--wrapper",children:Object(m.jsx)("div",{className:"lds-dual-ring"})})}),y=function(){var e=Object(s.useState)(),t=Object(b.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)(),r=Object(b.a)(n,2),l=r[0],d=r[1],x=Object(s.useState)(),g=Object(b.a)(x,2),v=g[0],y=g[1],S=Object(i.h)().id;return Object(s.useEffect)((function(){var e=!0;return e&&function(){var e=Object(j.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("".concat(u.baseUrl,"/api/home"));case 2:t=(t=e.sent).data.reqResult,a(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),function(){e=!1}}),[]),Object(s.useEffect)((function(){var e=!0;return e&&function(){var e=Object(j.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("".concat(u.baseUrl,"/api/home/grid/").concat(S));case 2:t=(t=e.sent).data.reqResult,d(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),function(){e=!1}}),[S]),Object(s.useEffect)((function(){var e=!0;return e&&function(){var e=Object(j.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("".concat(u.baseUrl,"/api/home/tv"));case 2:t=(t=e.sent).data.reqResult,y(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),function(){e=!1}}),[]),c&&l&&v?Object(m.jsxs)("div",{children:[Object(m.jsx)(O,{}),Object(m.jsx)(p,{data:c}),Object(m.jsx)(f,{}),Object(m.jsx)(_,{title:"Trending Now...",pagination:!0,movies:l,pageNumber:S}),Object(m.jsx)(N,{title:"Tv Shows...",data:v})]}):Object(m.jsx)(w,{})},S=(c(71),function(e){var t=e.id,c=e.title,s=e.img,a=e.rate,n=e.media;return"tv"===n&&(n="show"),Object(m.jsx)("div",{className:"search--element",children:Object(m.jsxs)(r.b,{to:"/".concat(n,"/").concat(t),children:[Object(m.jsx)("img",{src:"".concat(u.imgURL,"/").concat(u.imgagesSizes.poster_sizes[0]).concat(s),alt:"About: ".concat(c)}),Object(m.jsxs)("div",{children:[Object(m.jsx)("h4",{children:c}),Object(m.jsxs)("p",{children:[Object(m.jsx)("span",{children:"".concat(a,"/10")}),Object(m.jsx)("small",{children:n.toUpperCase()})]})]})]})})}),R=(c(72),function(){var e=Object(i.g)(),t=Object(s.useState)(""),c=Object(b.a)(t,2),a=c[0],n=c[1],r=Object(s.useState)(""),l=Object(b.a)(r,2),d=l[0],x=l[1];Object(s.useEffect)((function(){var e=!0;return e&&function(){var e=Object(j.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(a.length>1)){e.next=5;break}return e.next=3,h.a.get("".concat(u.baseUrl,"/api/search/result?name=").concat(a));case 3:t=e.sent,x([t]);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),function(){e=!1}}),[a]);return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(O,{}),Object(m.jsxs)("form",{className:"search__form",onSubmit:function(t){t.preventDefault(),e.push("/search/".concat(a.replace(/\s/g,"+")))},children:[Object(m.jsx)("input",{onChange:function(e){return n(e.target.value)},type:"text",placeholder:"Type Something...",className:"search--input"}),Object(m.jsx)("button",{type:"submit",className:"fas fa-search"})]}),Object(m.jsx)("div",{className:"search__container",children:d.length>0&&d[0].data.reqResult.length>0?d[0].data.reqResult.filter((function(e){return"person"!==e.media_type})).slice(0,3).map((function(e){return Object(m.jsx)(S,{id:e.id,title:e.title||e.original_title||e.name||e.original_name,img:e.poster_path,rate:e.vote_average,media:e.media_type},e.id)})):""}),Object(m.jsx)(f,{})]})}),z=c(27),U=c.n(z),k=(c(75),function(e){var t=e.mediaType,c=Object(i.h)().id,a=Object(s.useState)(),n=Object(b.a)(a,2),r=n[0],l=n[1],d=Object(s.useState)(!1),x=Object(b.a)(d,2),p=x[0],g=x[1],v=function(){g(!0!==p)};return Object(s.useEffect)((function(){var e=!0;return e&&function(){var e=Object(j.a)(o.a.mark((function e(){var s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("".concat(u.baseUrl,"/api/").concat(t,"/info/").concat(c));case 2:s=(s=e.sent).data.reqResult,l(s);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),function(){e=!1}}),[c,t]),r?Object(m.jsxs)("section",{className:"movie__info--container",children:[Object(m.jsx)(O,{}),Object(m.jsx)("div",{className:"movie__info--poster",children:Object(m.jsx)("img",{src:"".concat(u.imgURL,"/").concat(u.imgagesSizes.poster_sizes[5]).concat(r.poster_path),alt:"About: ".concat(r.title||r.original_title||r.name||r.original_name)})}),Object(m.jsxs)("div",{className:"movie__info--about",children:[Object(m.jsx)("h1",{children:r.title||r.original_title||r.name||r.original_name}),"movie"===t?Object(m.jsxs)("div",{children:[r.production_companies.length>0?Object(m.jsxs)("span",{children:["Directed By: ",r.production_companies[0].name]}):Object(m.jsx)("span",{children:"Directed By: Not Available"}),Object(m.jsxs)("span",{children:["Released: ",r.release_date]}),Object(m.jsxs)("span",{children:["Rating:"," ",Object(m.jsxs)("small",{className:"rating--media",children:[r.vote_average,"/10"]})]}),r.genres.length>0?Object(m.jsxs)("span",{children:["Genres: ",r.genres.map((function(e){return"".concat(e.name,", ")}))]}):Object(m.jsx)("span",{children:"Genres: Not Available"})]}):Object(m.jsxs)("div",{children:[r.created_by.length>0?Object(m.jsxs)("span",{children:["Directed By: ",r.created_by.map((function(e){return"".concat(e.name,", ")}))]}):Object(m.jsx)("span",{children:"Directed By: Not Available"}),Object(m.jsxs)("span",{children:["First Air Date: ",r.first_air_date]}),Object(m.jsxs)("span",{children:["Seasons: ",r.number_of_seasons]}),Object(m.jsxs)("span",{children:["Rating:",Object(m.jsxs)("small",{className:"rating--media",children:[r.vote_average,"/10"]})]}),r.genres.length>0?Object(m.jsxs)("span",{children:["Genres: ",r.genres.map((function(e){return"".concat(e.name,", ")}))]}):Object(m.jsx)("span",{children:"Genres: Not Available"})]}),Object(m.jsx)("p",{children:r.overview})]}),r.videos.results.length>0?Object(m.jsx)("iframe",{title:r.title||r.original_title||r.name||r.original_name,src:"".concat(u.baseVideoUrl,"/").concat(r.videos.results[0].key),frameBorder:"0",allowFullScreen:!0}):"",Object(m.jsxs)("div",{className:"watchList__container",children:[Object(m.jsx)("h3",{children:"Watch List?"}),!1===p?Object(m.jsx)("i",{className:"far fa-heart",onClick:v}):Object(m.jsx)("i",{className:"fas fa-heart",onClick:v}),Object(m.jsx)("h4",{children:"Rate it"}),Object(m.jsx)(U.a,{count:5,emptyIcon:Object(m.jsx)("i",{className:"far fa-star"}),onChange:function(e){console.log(e)},size:32,fullIcon:Object(m.jsx)("i",{className:"fa fa-star"}),activeColor:"#ffd700"})]}),Object(m.jsx)(f,{})]}):Object(m.jsx)(w,{})}),A=(c(76),function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(O,{}),Object(m.jsxs)("section",{className:"genres--container",children:[Object(m.jsxs)("h4",{children:["Shows",Object(m.jsx)("i",{className:"fas fa-chevron-down"})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)(r.b,{className:"genres--anchor",children:"Popular"}),Object(m.jsx)(r.b,{className:"genres--anchor",children:"Top Rated"})]}),Object(m.jsxs)("h4",{children:["Film Genres",Object(m.jsx)("i",{className:"fas fa-chevron-down"})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)(r.b,{className:"genres--anchor",children:"Action"}),Object(m.jsx)(r.b,{className:"genres--anchor",children:"Adventure"}),Object(m.jsx)(r.b,{className:"genres--anchor",children:"Animation"}),Object(m.jsx)(r.b,{className:"genres--anchor",children:"Comedy"}),Object(m.jsx)(r.b,{className:"genres--anchor",children:"Crime"}),Object(m.jsx)(r.b,{className:"genres--anchor",children:"Documentary"}),Object(m.jsx)(r.b,{className:"genres--anchor",children:"Drama"}),Object(m.jsx)(r.b,{className:"genres--anchor",children:"Family"}),Object(m.jsx)(r.b,{className:"genres--anchor",children:"Fantasy"}),Object(m.jsx)(r.b,{className:"genres--anchor",children:"History"}),Object(m.jsx)(r.b,{className:"genres--anchor",children:"Horror"}),Object(m.jsx)(r.b,{className:"genres--anchor",children:"Musical"}),Object(m.jsx)(r.b,{className:"genres--anchor",children:"Mystery"}),Object(m.jsx)(r.b,{className:"genres--anchor",children:"Romance"}),Object(m.jsx)(r.b,{className:"genres--anchor",children:"Sci-Fi"}),Object(m.jsx)(r.b,{className:"genres--anchor",children:"Thriller"}),Object(m.jsx)(r.b,{className:"genres--anchor",children:"War"})]}),Object(m.jsxs)("h4",{children:["Movies",Object(m.jsx)("i",{className:"fas fa-chevron-down"})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)(r.b,{className:"genres--anchor",children:"Most Viewed"}),Object(m.jsx)(r.b,{className:"genres--anchor",children:"Rankings"})]})]}),Object(m.jsx)(f,{})]})}),L=(c(77),function(e){var t=e.type,c=e.placeholder;return Object(m.jsx)("input",{className:"input--component",type:t,placeholder:c})}),q=(c(78),function(){return Object(m.jsxs)("section",{className:"login--container",children:[Object(m.jsx)(O,{}),Object(m.jsxs)("div",{className:"login--form",children:[Object(m.jsx)(L,{required:!0,placeholder:"Email...",type:"email"}),Object(m.jsx)(L,{required:!0,placeholder:"Password...",type:"password"}),Object(m.jsx)(r.b,{to:"/profile/jesus",className:"login--btn login--buttons",children:"Login"})]}),Object(m.jsx)(r.b,{to:"/new/user",className:"signup--btn login--buttons",children:"Sign Up"}),Object(m.jsx)(f,{})]})}),C=(c(79),function(){return Object(m.jsxs)("section",{className:"profile--container",children:[Object(m.jsx)(O,{}),Object(m.jsxs)(r.b,{className:"profile__menu--anchor",children:[Object(m.jsx)("i",{class:"far fa-heart profile__menu--icon"}),Object(m.jsx)("span",{className:"profile__menu--item",children:"My List"})]}),Object(m.jsxs)(r.b,{className:"profile__menu--anchor",children:[Object(m.jsx)("i",{class:"fas fa-user-cog profile__menu--icon"}),Object(m.jsx)("span",{className:"profile__menu--item",children:"Account"})]}),Object(m.jsxs)(r.b,{className:"profile__menu--anchor",children:[Object(m.jsx)("i",{class:"fas fa-info-circle profile__menu--icon"}),Object(m.jsx)("span",{className:"profile__menu--item",children:"About"})]}),Object(m.jsx)(r.b,{className:"profile--signout",children:"Sign Out"}),Object(m.jsx)(f,{})]})}),F=(c(80),function(){return Object(m.jsxs)("section",{children:[Object(m.jsx)(O,{}),Object(m.jsxs)("div",{className:"signup--container",children:[Object(m.jsx)(L,{required:!0,type:"text",placeholder:"First Name"}),Object(m.jsx)(L,{required:!0,type:"text",placeholder:"Last Name"}),Object(m.jsx)(L,{required:!0,type:"email",placeholder:"Email"}),Object(m.jsx)(L,{required:!0,type:"password",placeholder:"Password"}),Object(m.jsx)(L,{required:!0,type:"password",placeholder:"Repeat Password"})]}),Object(m.jsxs)("div",{className:"signup__btn--container",children:[Object(m.jsx)(r.b,{to:"",className:"signup--btn login--buttons",children:"Sign Up"}),Object(m.jsx)("span",{className:"signup--span",children:"Or"}),Object(m.jsx)(r.b,{to:"/profile",className:"login--btn login--buttons",children:"Login"})]}),Object(m.jsx)(f,{})]})}),D=(c(81),function(){var e=Object(s.useState)(),t=Object(b.a)(e,2),c=t[0],a=t[1],n=Object(i.h)().name;return Object(s.useEffect)((function(){var e=!0;return e&&function(){var e=Object(j.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("".concat(u.baseUrl,"/api/search/result?name=").concat(n));case 2:t=(t=e.sent).data.reqResult,a(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),function(){e=!1}}),[n]),c?Object(m.jsxs)("div",{className:"search__result--container",children:[Object(m.jsx)(O,{}),Object(m.jsx)(_,{title:"Results",movies:c}),Object(m.jsx)(f,{})]}):Object(m.jsx)(w,{})});var E=function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(r.a,{children:Object(m.jsxs)(i.d,{children:[Object(m.jsx)(i.b,{exact:!0,path:"/home/:id",children:Object(m.jsx)(y,{})}),Object(m.jsx)(i.b,{exact:!0,path:"/search",children:Object(m.jsx)(R,{})}),Object(m.jsx)(i.b,{path:"/search/:name",children:Object(m.jsx)(D,{})}),Object(m.jsx)(i.b,{path:"/movie/:id",children:Object(m.jsx)(k,{mediaType:"movie"})}),Object(m.jsx)(i.b,{path:"/show/:id",children:Object(m.jsx)(k,{mediaType:"show"})}),Object(m.jsx)(i.b,{path:"/genres",children:Object(m.jsx)(A,{})}),Object(m.jsx)(i.b,{exact:!0,path:"/profile",children:Object(m.jsx)(q,{})}),Object(m.jsx)(i.b,{path:"/profile/:user",children:Object(m.jsx)(C,{})}),Object(m.jsx)(i.b,{path:"/new/user",children:Object(m.jsx)(F,{})}),Object(m.jsx)(i.a,{to:"/home/1"})]})})})};n.a.render(Object(m.jsx)(E,{}),document.getElementById("root"))}},[[82,1,2]]]);
//# sourceMappingURL=main.a0b973f9.chunk.js.map