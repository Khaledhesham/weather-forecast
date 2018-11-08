(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{"11CU":function(o,t,p){!function(){function t(o,t,p){void 0===p&&(p=t,optionsValues=void 0);var e=void 0!==o?o:t;if(void 0===e)return null;if("function"==typeof e){var _=[p];return p.geography&&(_=[p.geography,p.data]),e.apply(null,_)}return e}function e(o){var p=this.options.fills,e=this.options.data||{},_=this.options.geographyConfig,r=this.svg.select("g.datamaps-subunits");r.empty()&&(r=this.addLayer("datamaps-subunits",null,!0));var i=h.feature(o,o.objects[this.options.scope]).features;_.hideAntarctica&&(i=i.filter(function(o){return"ATA"!==o.id})),_.hideHawaiiAndAlaska&&(i=i.filter(function(o){return"HI"!==o.id&&"AK"!==o.id})),r.selectAll("path.datamaps-subunit").data(i).enter().append("path").attr("d",this.path).attr("class",function(o){return"datamaps-subunit "+o.id}).attr("data-info",function(o){return JSON.stringify(e[o.id])}).style("fill",function(o){var _,r=e[o.id];return r&&r.fillKey&&(_=p[t(r.fillKey,{data:e[o.id],geography:o})]),void 0===_&&(_=t(r&&r.fillColor,p.defaultFill,{data:e[o.id],geography:o})),_}).style("stroke-width",_.borderWidth).style("stroke",_.borderColor)}function _(){var o=this.svg,p=this,e=this.options.geographyConfig;(e.highlightOnHover||e.popupOnHover)&&o.selectAll(".datamaps-subunit").on("mouseover",function(_){var r=d.select(this),i=p.options.data[_.id]||{};if(e.highlightOnHover){var a={fill:r.style("fill"),stroke:r.style("stroke"),"stroke-width":r.style("stroke-width"),"fill-opacity":r.style("fill-opacity")};r.style("fill",t(i.highlightFillColor,e.highlightFillColor,i)).style("stroke",t(i.highlightBorderColor,e.highlightBorderColor,i)).style("stroke-width",t(i.highlightBorderWidth,e.highlightBorderWidth,i)).style("fill-opacity",t(i.highlightFillOpacity,e.highlightFillOpacity,i)).attr("data-previousAttributes",JSON.stringify(a)),/((MSIE)|(Trident))/.test(navigator.userAgent)||(function(){this.parentNode.appendChild(this)}).call(this)}e.popupOnHover&&p.updatePopup(r,_,e,o)}).on("mouseout",function(){var o=d.select(this);if(e.highlightOnHover){var t=JSON.parse(o.attr("data-previousAttributes"));for(var p in t)o.style(p,t[p])}o.on("mousemove",null),d.selectAll(".datamaps-hoverover").style("display","none")})}function r(o,t,p){if(t=t||{},this.options.fills){var e="<dl>",_="";for(var r in t.legendTitle&&(e="<h2>"+t.legendTitle+"</h2>"+e),this.options.fills){if("defaultFill"===r){if(!t.defaultFillName)continue;_=t.defaultFillName}else _=t.labels&&t.labels[r]?t.labels[r]:r+": ";e+="<dt>"+_+"</dt>",e+='<dd style="background-color:'+this.options.fills[r]+'">&nbsp;</dd>'}e+="</dl>",d.select(this.options.element).append("div").attr("class","datamaps-legend").html(e)}}function i(o,t){var p=d.geo.graticule();this.svg.insert("path",".datamaps-subunits").datum(p).attr("class","datamaps-graticule").attr("d",this.path)}function a(o,p,e){var _=this;if(!p||p&&!p.slice)throw"Datamaps Error - arcs must be an array";for(var r=0;r<p.length;r++)p[r]=l(p[r],p[r].options),delete p[r].options;void 0===e&&(e=T.arcConfig);var i=o.selectAll("path.datamaps-arc").data(p,JSON.stringify),a=d.geo.path().projection(_.projection);i.enter().append("svg:path").attr("class","datamaps-arc").style("stroke-linecap","round").style("stroke",function(o){return t(o.strokeColor,e.strokeColor,o)}).style("fill","none").style("stroke-width",function(o){return t(o.strokeWidth,e.strokeWidth,o)}).attr("d",function(o){var p=_.latLngToXY(t(o.origin.latitude,o),t(o.origin.longitude,o)),r=_.latLngToXY(t(o.destination.latitude,o),t(o.destination.longitude,o)),i=[(p[0]+r[0])/2,(p[1]+r[1])/2];if(e.greatArc){var s=d.geo.greatArc().source(function(o){return[t(o.origin.longitude,o),t(o.origin.latitude,o)]}).target(function(o){return[t(o.destination.longitude,o),t(o.destination.latitude,o)]});return a(s(o))}var n=t(o.arcSharpness,e.arcSharpness,o);return"M"+p[0]+","+p[1]+"S"+(i[0]+50*n)+","+(i[1]-75*n)+","+r[0]+","+r[1]}).transition().delay(100).style("fill",function(o){var p=this.getTotalLength();return this.style.transition=this.style.WebkitTransition="none",this.style.strokeDasharray=p+" "+p,this.style.strokeDashoffset=p,this.getBoundingClientRect(),this.style.transition=this.style.WebkitTransition="stroke-dashoffset "+t(o.animationSpeed,e.animationSpeed,o)+"ms ease-out",this.style.strokeDashoffset="0","none"}),i.exit().transition().style("opacity",0).remove()}function s(o,t){var p=this;t=t||{};var e=this.projection([-67.707617,42.722131]);this.svg.selectAll(".datamaps-subunit").attr("data-foo",function(_){var r,i,a=p.path.centroid(_),s=7.5,n=5;["FL","KY","MI"].indexOf(_.id)>-1&&(s=-2.5),"NY"===_.id&&(s=-1),"MI"===_.id&&(n=18),"LA"===_.id&&(s=13),r=a[0]-s,i=a[1]+n;var l=["VT","NH","MA","RI","CT","NJ","DE","MD","DC"].indexOf(_.id);return l>-1&&(r=e[0],i=e[1]+l*(2+(t.fontSize||12)),o.append("line").attr("x1",r-3).attr("y1",i-5).attr("x2",a[0]).attr("y2",a[1]).style("stroke",t.labelColor||"#000").style("stroke-width",t.lineWidth||1)),o.append("text").attr("x",r).attr("y",i).style("font-size",(t.fontSize||10)+"px").style("font-family",t.fontFamily||"Verdana").style("fill",t.labelColor||"#000").text(_.id),"bar"})}function n(o,p,e){function _(o){return void 0!==o&&void 0!==o.latitude&&void 0!==o.longitude}var r=this,i=this.options.fills,a=this.options.filters,s=this.svg;if(!p||p&&!p.slice)throw"Datamaps Error - bubbles must be an array";var n=o.selectAll("circle.datamaps-bubble").data(p,e.key);n.enter().append("svg:circle").attr("class","datamaps-bubble").attr("cx",function(o){var t;return _(o)?t=r.latLngToXY(o.latitude,o.longitude):o.centered&&(t=r.path.centroid(s.select("path."+o.centered).data()[0])),t?t[0]:void 0}).attr("cy",function(o){var t;return _(o)?t=r.latLngToXY(o.latitude,o.longitude):o.centered&&(t=r.path.centroid(s.select("path."+o.centered).data()[0])),t?t[1]:void 0}).attr("r",function(o){return e.animate?0:t(o.radius,e.radius,o)}).attr("data-info",function(o){return JSON.stringify(o)}).attr("filter",function(o){return a[t(o.filterKey,e.filterKey,o)]||void 0}).style("stroke",function(o){return t(o.borderColor,e.borderColor,o)}).style("stroke-width",function(o){return t(o.borderWidth,e.borderWidth,o)}).style("fill-opacity",function(o){return t(o.fillOpacity,e.fillOpacity,o)}).style("fill",function(o){return i[t(o.fillKey,e.fillKey,o)]||i.defaultFill}).on("mouseover",function(o){var p=d.select(this);if(e.highlightOnHover){var _={fill:p.style("fill"),stroke:p.style("stroke"),"stroke-width":p.style("stroke-width"),"fill-opacity":p.style("fill-opacity")};p.style("fill",t(o.highlightFillColor,e.highlightFillColor,o)).style("stroke",t(o.highlightBorderColor,e.highlightBorderColor,o)).style("stroke-width",t(o.highlightBorderWidth,e.highlightBorderWidth,o)).style("fill-opacity",t(o.highlightFillOpacity,e.highlightFillOpacity,o)).attr("data-previousAttributes",JSON.stringify(_))}e.popupOnHover&&r.updatePopup(p,o,e,s)}).on("mouseout",function(o){var t=d.select(this);if(e.highlightOnHover){var p=JSON.parse(t.attr("data-previousAttributes"));for(var _ in p)t.style(_,p[_])}d.selectAll(".datamaps-hoverover").style("display","none")}),n.transition().duration(400).attr("r",function(o){return t(o.radius,e.radius,o)}),n.exit().transition().delay(e.exitDelay).attr("r",0).remove()}function l(o){return Array.prototype.slice.call(arguments,1).forEach(function(t){if(t)for(var p in t)null==o[p]&&(o[p]=t[p])}),o}function y(o){if(void 0===d||void 0===h)throw new Error("Include d3.js (v3.0.3 or greater) and topojson on this page before creating a new map");return this.options=l(o,T),this.options.geographyConfig=l(o.geographyConfig,T.geographyConfig),this.options.projectionConfig=l(o.projectionConfig,T.projectionConfig),this.options.bubblesConfig=l(o.bubblesConfig,T.bubblesConfig),this.options.arcConfig=l(o.arcConfig,T.arcConfig),d.select(this.options.element).select("svg").length>0&&(function(o,t,p){return this.svg=d.select(o).append("svg").attr("width",p||o.offsetWidth).attr("data-width",p||o.offsetWidth).attr("class","datamap").attr("height",t||o.offsetHeight).style("overflow","hidden"),this.options.responsive&&(d.select(this.options.element).style({position:"relative","padding-bottom":100*this.options.aspectRatio+"%"}),d.select(this.options.element).select("svg").style({position:"absolute",width:"100%",height:"100%"}),d.select(this.options.element).select("svg").select("g").selectAll("path").style("vector-effect","non-scaling-stroke")),this.svg}).call(this,this.options.element,this.options.height,this.options.width),this.addPlugin("bubbles",n),this.addPlugin("legend",r),this.addPlugin("arc",a),this.addPlugin("labels",s),this.addPlugin("graticule",i),this.options.disableDefaultStyles||d.select(".datamaps-style-block").empty()&&d.select("head").append("style").attr("class","datamaps-style-block").html('.datamap path.datamaps-graticule { fill: none; stroke: #777; stroke-width: 0.5px; stroke-opacity: .5; pointer-events: none; } .datamap .labels {pointer-events: none;} .datamap path {stroke: #FFFFFF; stroke-width: 1px;} .datamaps-legend dt, .datamaps-legend dd { float: left; margin: 0 3px 0 0;} .datamaps-legend dd {width: 20px; margin-right: 6px; border-radius: 3px;} .datamaps-legend {padding-bottom: 20px; z-index: 1001; position: absolute; left: 4px; font-size: 12px; font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;} .datamaps-hoverover {display: none; font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; } .hoverinfo {padding: 4px; border-radius: 1px; background-color: #FFF; box-shadow: 1px 1px 5px #CCC; font-size: 12px; border: 1px solid #CCC; } .hoverinfo hr {border:1px dotted #CCC; }'),this.draw()}var d=window.d3,h=window.topojson,T={scope:"world",responsive:!1,aspectRatio:.5625,setProjection:function(o,t){var p,e,_=t.width||o.offsetWidth,r=t.height||o.offsetHeight,i=this.svg;return t&&void 0===t.scope&&(t.scope="world"),"usa"===t.scope?p=d.geo.albersUsa().scale(_).translate([_/2,r/2]):"world"===t.scope&&(p=d.geo[t.projection]().scale((_+1)/2/Math.PI).translate([_/2,r/("mercator"===t.projection?1.45:1.8)])),"orthographic"===t.projection&&(i.append("defs").append("path").datum({type:"Sphere"}).attr("id","sphere").attr("d",e),i.append("use").attr("class","stroke").attr("xlink:href","#sphere"),i.append("use").attr("class","fill").attr("xlink:href","#sphere"),p.scale(250).clipAngle(90).rotate(t.projectionConfig.rotation)),{path:e=d.geo.path().projection(p),projection:p}},projection:"equirectangular",dataType:"json",data:{},done:function(){},fills:{defaultFill:"#ABDDA4"},filters:{},geographyConfig:{dataUrl:null,hideAntarctica:!0,hideHawaiiAndAlaska:!1,borderWidth:1,borderColor:"#FDFDFD",popupTemplate:function(o,t){return'<div class="hoverinfo"><strong>'+o.properties.name+"</strong></div>"},popupOnHover:!0,highlightOnHover:!0,highlightFillColor:"#FC8D59",highlightBorderColor:"rgba(250, 15, 160, 0.2)",highlightBorderWidth:2},projectionConfig:{rotation:[97,0]},bubblesConfig:{borderWidth:2,borderColor:"#FFFFFF",popupOnHover:!0,radius:null,popupTemplate:function(o,t){return'<div class="hoverinfo"><strong>'+t.name+"</strong></div>"},fillOpacity:.75,animate:!0,highlightOnHover:!0,highlightFillColor:"#FC8D59",highlightBorderColor:"rgba(250, 15, 160, 0.2)",highlightBorderWidth:2,highlightFillOpacity:.85,exitDelay:100,key:JSON.stringify},arcConfig:{strokeColor:"#DD1C77",strokeWidth:1,arcSharpness:1,animationSpeed:600}};y.prototype.resize=function(){var o=this.options;if(o.responsive){var t=o.element.clientWidth,p=d.select(o.element).select("svg").attr("data-width");d.select(o.element).select("svg").selectAll("g").attr("transform","scale("+t/p+")")}},y.prototype.draw=function(){function o(o){t.options.dataUrl&&d[t.options.dataType](t.options.dataUrl,function(o){if("csv"===t.options.dataType&&o&&o.slice){for(var p={},e=0;e<o.length;e++)p[o[e].id]=o[e];o=p}Datamaps.prototype.updateChoropleth.call(t,o)}),e.call(t,o),_.call(t),(t.options.geographyConfig.popupOnHover||t.options.bubblesConfig.popupOnHover)&&(hoverover=d.select(t.options.element).append("div").attr("class","datamaps-hoverover").style("z-index",10001).style("position","absolute")),t.options.done(t)}var t=this,p=t.options,r=p.setProjection.apply(t,[p.element,p]);return this.path=r.path,this.projection=r.projection,p.geographyConfig.dataUrl?d.json(p.geographyConfig.dataUrl,function(p,e){if(p)throw new Error(p);t.customTopo=e,o(e)}):o(this[p.scope+"Topo"]||p.geographyConfig.dataJson),this},y.prototype.worldTopo="__WORLD__",y.prototype.abwTopo="__ABW__",y.prototype.afgTopo="__AFG__",y.prototype.agoTopo="__AGO__",y.prototype.aiaTopo="__AIA__",y.prototype.albTopo="__ALB__",y.prototype.aldTopo="__ALD__",y.prototype.andTopo="__AND__",y.prototype.areTopo="__ARE__",y.prototype.argTopo="__ARG__",y.prototype.armTopo="__ARM__",y.prototype.asmTopo="__ASM__",y.prototype.ataTopo="__ATA__",y.prototype.atcTopo="__ATC__",y.prototype.atfTopo="__ATF__",y.prototype.atgTopo="__ATG__",y.prototype.ausTopo="__AUS__",y.prototype.autTopo="__AUT__",y.prototype.azeTopo="__AZE__",y.prototype.bdiTopo="__BDI__",y.prototype.belTopo="__BEL__",y.prototype.benTopo="__BEN__",y.prototype.bfaTopo="__BFA__",y.prototype.bgdTopo="__BGD__",y.prototype.bgrTopo="__BGR__",y.prototype.bhrTopo="__BHR__",y.prototype.bhsTopo="__BHS__",y.prototype.bihTopo="__BIH__",y.prototype.bjnTopo="__BJN__",y.prototype.blmTopo="__BLM__",y.prototype.blrTopo="__BLR__",y.prototype.blzTopo="__BLZ__",y.prototype.bmuTopo="__BMU__",y.prototype.bolTopo="__BOL__",y.prototype.braTopo="__BRA__",y.prototype.brbTopo="__BRB__",y.prototype.brnTopo="__BRN__",y.prototype.btnTopo="__BTN__",y.prototype.norTopo="__NOR__",y.prototype.bwaTopo="__BWA__",y.prototype.cafTopo="__CAF__",y.prototype.canTopo="__CAN__",y.prototype.cheTopo="__CHE__",y.prototype.chlTopo="__CHL__",y.prototype.chnTopo="__CHN__",y.prototype.civTopo="__CIV__",y.prototype.clpTopo="__CLP__",y.prototype.cmrTopo="__CMR__",y.prototype.codTopo="__COD__",y.prototype.cogTopo="__COG__",y.prototype.cokTopo="__COK__",y.prototype.colTopo="__COL__",y.prototype.comTopo="__COM__",y.prototype.cpvTopo="__CPV__",y.prototype.criTopo="__CRI__",y.prototype.csiTopo="__CSI__",y.prototype.cubTopo="__CUB__",y.prototype.cuwTopo="__CUW__",y.prototype.cymTopo="__CYM__",y.prototype.cynTopo="__CYN__",y.prototype.cypTopo="__CYP__",y.prototype.czeTopo="__CZE__",y.prototype.deuTopo="__DEU__",y.prototype.djiTopo="__DJI__",y.prototype.dmaTopo="__DMA__",y.prototype.dnkTopo="__DNK__",y.prototype.domTopo="__DOM__",y.prototype.dzaTopo="__DZA__",y.prototype.ecuTopo="__ECU__",y.prototype.egyTopo="__EGY__",y.prototype.eriTopo="__ERI__",y.prototype.esbTopo="__ESB__",y.prototype.espTopo="__ESP__",y.prototype.estTopo="__EST__",y.prototype.ethTopo="__ETH__",y.prototype.finTopo="__FIN__",y.prototype.fjiTopo="__FJI__",y.prototype.flkTopo="__FLK__",y.prototype.fraTopo="__FRA__",y.prototype.froTopo="__FRO__",y.prototype.fsmTopo="__FSM__",y.prototype.gabTopo="__GAB__",y.prototype.psxTopo="__PSX__",y.prototype.gbrTopo="__GBR__",y.prototype.geoTopo="__GEO__",y.prototype.ggyTopo="__GGY__",y.prototype.ghaTopo="__GHA__",y.prototype.gibTopo="__GIB__",y.prototype.ginTopo="__GIN__",y.prototype.gmbTopo="__GMB__",y.prototype.gnbTopo="__GNB__",y.prototype.gnqTopo="__GNQ__",y.prototype.grcTopo="__GRC__",y.prototype.grdTopo="__GRD__",y.prototype.grlTopo="__GRL__",y.prototype.gtmTopo="__GTM__",y.prototype.gumTopo="__GUM__",y.prototype.guyTopo="__GUY__",y.prototype.hkgTopo="__HKG__",y.prototype.hmdTopo="__HMD__",y.prototype.hndTopo="__HND__",y.prototype.hrvTopo="__HRV__",y.prototype.htiTopo="__HTI__",y.prototype.hunTopo="__HUN__",y.prototype.idnTopo="__IDN__",y.prototype.imnTopo="__IMN__",y.prototype.indTopo="__IND__",y.prototype.ioaTopo="__IOA__",y.prototype.iotTopo="__IOT__",y.prototype.irlTopo="__IRL__",y.prototype.irnTopo="__IRN__",y.prototype.irqTopo="__IRQ__",y.prototype.islTopo="__ISL__",y.prototype.isrTopo={type:"Topology",objects:{isr:{type:"GeometryCollection",geometries:[{type:"Polygon",properties:{name:"HaDarom"},id:"IL.HD",arcs:[[0,1,2]]},{type:"Polygon",properties:{name:"Haifa"},id:"IL.HA",arcs:[[3,4,5,6]]},{type:"Polygon",properties:{name:"HaMerkaz"},id:"IL.HM",arcs:[[7,8,-3,9,10,11,-5]]},{type:"Polygon",properties:{name:"HaZafon"},id:"IL.HZ",arcs:[[-7,12]]},{type:"Polygon",properties:{name:"Tel Aviv"},id:"IL.TA",arcs:[[13,-11]]},{type:"Polygon",properties:{name:"Jerusalem"},id:"IL.JM",arcs:[[-1,-9,14]]}]}},arcs:[[[3533,5877],[165,-75],[56,-15],[14,-1],[23,-3],[8,-3],[8,-5],[5,-6],[-2,-12],[-5,-6],[-10,-10],[-3,-4],[0,-5],[3,-5],[24,-26],[4,-11],[0,-5],[-1,-6],[-3,-4],[-15,-13],[-3,-5],[-2,-5],[0,-5],[8,-33],[-4,-15],[1,-5],[10,-14],[2,-5],[-1,-22],[-6,-15],[52,-17],[435,-112],[2,-1]],[[4298,5408],[-97,-67],[-27,-69],[-2,-71],[-35,-84],[-275,-164],[-89,-86],[72,-85],[135,-37],[161,-9],[168,9],[155,20],[364,18],[761,-3],[356,48],[665,199],[352,72],[415,12],[3,-1],[-9,-148],[-1,-26],[-25,-57],[-108,-103],[-114,-74],[46,-18],[-11,-55],[-85,-54],[-76,-62],[33,-70],[58,-65],[65,-52],[91,-63],[42,-70],[-29,-73],[-286,-204],[-39,-74],[1,-80],[-68,-47],[-165,-57],[-74,-26],[-78,-58],[-16,-57],[3,-57],[-21,-57],[-35,-24],[-103,-34],[-48,-20],[-40,-31],[-21,-28],[-27,-65],[-47,-60],[-1,-1],[-356,-262],[-264,-313],[-29,-60],[-106,-104],[0,-62],[31,-26],[87,-51],[17,-37],[-13,-35],[-33,-28],[-41,-26],[-37,-32],[-57,-133],[-44,-44],[-2,-73],[124,-156],[0,-80],[-99,-86],[-260,-142],[-71,-101],[-4,-31],[-22,-22],[-31,-20],[-24,-22],[-44,-87],[-6,-155],[-26,-52],[-283,-279],[-45,-63],[-32,-144],[-58,-63],[-82,-49],[-43,-56],[-26,-69],[-26,-34],[-39,-23],[-105,-48],[-49,-27],[-24,-18],[-10,-17],[-20,-9],[-48,-1],[-56,2],[-43,-1],[-53,36],[-139,106],[-43,61],[11,177],[-156,262],[-239,240],[-268,267],[-38,139],[3,15],[-4,16],[-10,15],[-17,14],[-237,246],[-360,377],[-202,210],[-67,37],[-333,105],[-42,24],[-14,30],[11,45],[58,76],[1,35],[-60,31],[-97,48],[-37,43],[-13,106],[-133,203],[-376,358],[-310,296],[-234,222],[-192,215],[-240,269],[-63,70],[98,33],[314,83],[213,83],[18,43],[-50,88],[1,44],[132,89],[689,237],[92,22],[1,0],[199,66],[13,54],[-116,52],[-184,55],[51,44],[148,68],[542,334],[42,20],[343,276],[1,0]],[[2547,6086],[23,3],[53,6],[13,2],[24,0],[28,-2],[51,-7],[24,-2],[19,0],[12,2],[13,-2],[10,-4],[6,-12],[-3,-6],[-6,-5],[-17,-6],[-6,-3],[-3,-4],[1,-4],[6,-15],[-1,-5],[-2,-5],[-8,-8],[0,-22],[-3,-5],[-7,-3],[-9,-2],[-11,-1],[-11,0],[-10,0],[-25,1],[-37,5],[-25,2],[-13,-1],[-12,-1],[-8,-2],[-5,-2],[-9,-5],[-3,-3],[-3,-3],[-1,-4],[1,-4],[3,-4],[2,-2],[11,-5],[18,-6],[41,-11],[25,-9],[3,-3],[-1,-5],[-4,-4],[-6,-4],[-8,-3],[-9,-2],[-10,-2],[-35,-6],[-20,-4],[-8,-3],[-7,-4],[-4,-4],[-2,-4],[2,-3],[1,-3],[4,-3],[5,-2],[146,-18],[28,-1],[22,3],[62,17],[25,4],[34,4],[9,4],[0,3],[-7,3],[-10,3],[-5,4],[-6,4],[-4,4],[-6,4],[-10,3],[-11,2],[-13,1],[-9,2],[-6,3],[3,3],[18,2],[100,5],[15,3],[19,9],[18,-2],[31,-4],[103,-21],[20,-6],[20,-10],[15,-13],[41,-44],[13,-9],[10,-6],[15,-6],[8,-3],[50,10],[201,57]],[[5866,7791],[-10,2],[-109,-2],[-85,-23],[-153,-63],[-190,-43],[-182,-31],[-161,-41],[-120,-74],[-73,-132]],[[4783,7384],[-3,0],[-67,-3],[-41,4],[-7,3],[-6,4],[-8,4],[-12,3],[-20,5],[-97,31],[-25,5],[-20,3],[-304,9],[-59,-3],[-13,-1],[-70,-2],[-251,2],[-3,0]],[[3777,7448],[33,59],[189,332],[35,25],[36,114],[31,34],[-11,37],[140,209],[34,228],[49,52],[90,18],[78,-7],[123,-28],[94,-7],[54,4],[214,81],[27,22],[51,67]],[[5044,8688],[13,-2],[43,-4],[17,-5],[15,-7],[21,-17],[13,-8],[10,-5],[25,-5],[5,-5],[2,-8],[-15,-32],[3,-5],[9,-5],[51,-12],[17,-5],[8,-4],[19,-5],[10,-2],[22,-4],[90,-9],[22,-4],[9,-3],[6,-5],[1,-8],[-16,-32],[-1,-5],[7,-9],[12,-13],[63,-48],[2,-8],[0,-10],[-7,-21],[-7,-9],[-7,-7],[-60,-34],[-1,0],[-6,-3],[-8,-7],[-2,-5],[10,-36],[-3,-8],[-8,-5],[-30,-6],[-7,-5],[-4,-7],[4,-13],[0,-6],[-1,-5],[-9,-7],[-15,-7],[-16,-6],[-9,-2],[-11,-2],[-10,0],[-10,1],[-8,3],[-7,4],[-18,10],[-9,3],[-9,2],[-12,0],[-9,-2],[-7,-3],[-9,-9],[-5,-15],[0,-5],[29,-45],[1,-11],[-4,-6],[-88,-17],[-8,-3],[-8,-2],[-13,-7],[-45,-37],[-19,-11],[-10,-2],[-10,-3],[-12,0],[-13,0],[-79,13],[-27,2],[-15,0],[-14,0],[-13,-2],[-12,-1],[-9,-2],[-17,-6],[-7,-4],[-12,-7],[-4,-4],[-6,-10],[-1,-5],[11,-8],[18,-10],[48,-19],[10,-7],[-2,-4],[-28,2],[-34,4],[-17,2],[-13,1],[-29,-1],[-12,-1],[-11,-2],[-7,-3],[0,-6],[9,-9],[26,-15],[10,-9],[5,-7],[0,-5],[2,-5],[4,-5],[5,-3],[25,-8],[82,-19],[9,-5],[4,-5],[-4,-11],[-14,-18],[-2,-4],[1,-5],[4,-4],[10,-4],[40,-9],[11,-5],[8,-5],[11,-5],[18,-5],[39,-8],[20,-5],[27,-5],[177,-12],[13,-1],[13,-2],[19,1],[24,4],[41,11],[18,6],[12,5],[6,4],[6,4],[10,3],[33,8],[11,4],[6,5],[2,5],[3,4],[5,4],[8,3],[10,3],[54,10],[10,2],[7,3],[7,4],[17,11],[16,7],[9,2],[10,1],[28,-5],[20,-5],[172,-58],[14,-12]],[[4783,7384],[-24,-44],[-44,-52],[-23,-6],[-81,-11],[-23,-6],[-25,-32],[-22,-81],[-19,-33],[76,-9],[43,-19],[10,-27],[-21,-32],[-45,-32],[-237,-77],[-81,-38],[-12,-24],[99,-79],[30,-43],[77,-241],[3,-48],[-11,-56],[0,-2],[2,-2],[4,-1],[5,-1],[5,-8],[2,-10],[-2,-9],[-5,-9],[-26,-76],[120,-100],[73,-85],[-167,-34],[-166,-21],[-36,-34]],[[4262,6002],[-6,-3],[-4,-2],[-90,-14],[-94,1],[-25,-4],[-17,-8],[-45,-37],[-39,-14],[-37,-7],[-372,-37]],[[2547,6086],[166,134],[114,65],[134,157]],[[2961,6442],[55,-22],[30,-7],[196,-9],[125,-1],[21,1],[21,3],[4,1],[2,0],[1,0],[92,36],[6,2],[10,4],[16,4],[38,8],[23,2],[18,0],[11,-2],[10,-2],[23,-9],[25,-8],[16,-1],[27,1],[107,16],[27,7],[13,7],[-2,4],[-4,4],[-3,2],[-15,5],[-9,3],[-55,9],[-10,2],[-4,4],[-4,4],[-27,61],[-4,4],[-5,4],[-7,4],[-17,5],[-28,8],[-9,2],[-18,5],[-6,2],[-5,2],[-6,3],[-4,3],[-4,5],[-2,5],[0,4],[6,10],[6,9],[4,25],[5,12],[6,5],[39,18],[13,8],[42,30],[16,20],[0,5],[-2,5],[-11,11],[-2,4],[1,5],[6,9],[4,11],[0,19],[-1,5],[-3,4],[-6,4],[-8,3],[-33,6],[-9,2],[-8,3],[-14,7],[-29,7],[-36,11],[-11,3],[-21,3],[-27,3],[-129,6],[-37,-1]],[[3391,6899],[203,226],[183,323]],[[5044,8688],[25,32],[-11,31],[-75,13],[37,38],[42,156],[82,82],[26,49],[-25,45],[27,9],[32,16],[29,8],[-42,17],[28,3],[6,1],[488,-13],[27,4],[67,18],[40,6],[37,-1],[86,-8],[43,-1],[226,26],[74,0],[32,-5],[35,-6],[68,-19],[61,-26],[42,-30],[57,-26],[80,-4],[344,31],[292,44],[187,6],[31,39],[113,71],[52,43],[33,65],[15,126],[47,56],[55,35],[36,35],[41,24],[72,3],[35,-15],[110,-61],[78,-20],[2,-1],[35,-10],[4,10],[0,1],[-19,46],[55,20],[87,6],[97,8],[121,34],[232,85],[108,11],[81,3],[87,8],[84,13],[72,16],[100,39],[122,86],[94,39],[8,-14],[-34,-15],[-9,-42],[-19,-14],[-14,-34],[-101,-26],[-47,-18],[-134,-22],[234,-56],[-205,-101],[43,-20],[171,-42],[25,-119],[137,-30],[20,-74],[-67,-50],[-67,-38],[0,-38],[228,-33],[-19,-34],[81,-243],[34,-32],[143,-84],[-86,-57],[-43,-4],[-105,-64],[-71,-76],[23,-32],[-46,-65],[-305,-128],[-163,-86],[-1,0],[-105,-10],[-335,-74],[-202,-64],[-98,-18],[-144,6],[-1,0],[-112,-29],[-92,-43],[-55,-17],[-43,-6],[-13,-9],[-3,-21],[24,-18],[52,-11],[0,-16],[-42,0],[0,-19],[34,-23],[19,-66],[34,-31],[-25,-14],[-9,-2],[-3,6],[-8,10],[-15,-10],[-27,-27],[-38,18],[21,-54],[17,-16],[-84,0],[0,-18],[33,2],[25,-1],[43,-22],[13,-11],[57,-21],[0,-16],[-55,-6],[-36,-14],[-23,-17],[-11,-17],[23,-6],[13,-5],[17,-3],[27,-2],[0,-19],[-39,-9],[-41,-7],[38,-17],[-84,-19],[14,-5],[12,1],[10,-2],[10,-12],[-46,0],[0,-16],[38,-13],[6,-10],[-26,-7],[-59,-4],[27,-29],[14,-8],[30,-11],[25,-16],[-493,45],[-143,14],[-145,1],[-158,17],[-34,64],[3,79],[-54,60],[-182,40],[-182,8],[-383,-7],[-111,14],[-174,51],[-82,15]],[[2961,6442],[57,68],[4,12],[-8,28],[4,12],[84,16],[289,321]],[[4262,6002],[-11,-11],[57,-43],[201,-13],[95,0],[44,3],[60,14],[108,41],[45,10],[87,-5],[318,-54],[424,-36],[103,-23],[48,-31],[11,-43],[-9,-55],[-23,-14],[-27,-3],[-32,5],[-34,12],[-377,-29],[-116,-21],[-109,-32],[-212,-77],[-490,-132],[-112,-48],[-13,-9]]],transform:{scale:[.0001639885681568283,.0003917421969196889],translate:[34.24835085700005,29.48969147300008]}},y.prototype.itaTopo="__ITA__",y.prototype.jamTopo="__JAM__",y.prototype.jeyTopo="__JEY__",y.prototype.jorTopo="__JOR__",y.prototype.jpnTopo="__JPN__",y.prototype.kabTopo="__KAB__",y.prototype.kasTopo="__KAS__",y.prototype.kazTopo="__KAZ__",y.prototype.kenTopo="__KEN__",y.prototype.kgzTopo="__KGZ__",y.prototype.khmTopo="__KHM__",y.prototype.kirTopo="__KIR__",y.prototype.knaTopo="__KNA__",y.prototype.korTopo="__KOR__",y.prototype.kosTopo="__KOS__",y.prototype.kwtTopo="__KWT__",y.prototype.laoTopo="__LAO__",y.prototype.lbnTopo="__LBN__",y.prototype.lbrTopo="__LBR__",y.prototype.lbyTopo="__LBY__",y.prototype.lcaTopo="__LCA__",y.prototype.lieTopo="__LIE__",y.prototype.lkaTopo="__LKA__",y.prototype.lsoTopo="__LSO__",y.prototype.ltuTopo="__LTU__",y.prototype.luxTopo="__LUX__",y.prototype.lvaTopo="__LVA__",y.prototype.macTopo="__MAC__",y.prototype.mafTopo="__MAF__",y.prototype.marTopo="__MAR__",y.prototype.mcoTopo="__MCO__",y.prototype.mdaTopo="__MDA__",y.prototype.mdgTopo="__MDG__",y.prototype.mdvTopo="__MDV__",y.prototype.mexTopo="__MEX__",y.prototype.mhlTopo="__MHL__",y.prototype.mkdTopo="__MKD__",y.prototype.mliTopo="__MLI__",y.prototype.mltTopo="__MLT__",y.prototype.mmrTopo="__MMR__",y.prototype.mneTopo="__MNE__",y.prototype.mngTopo="__MNG__",y.prototype.mnpTopo="__MNP__",y.prototype.mozTopo="__MOZ__",y.prototype.mrtTopo="__MRT__",y.prototype.msrTopo="__MSR__",y.prototype.musTopo="__MUS__",y.prototype.mwiTopo="__MWI__",y.prototype.mysTopo="__MYS__",y.prototype.namTopo="__NAM__",y.prototype.nclTopo="__NCL__",y.prototype.nerTopo="__NER__",y.prototype.nfkTopo="__NFK__",y.prototype.ngaTopo="__NGA__",y.prototype.nicTopo="__NIC__",y.prototype.niuTopo="__NIU__",y.prototype.nldTopo="__NLD__",y.prototype.nplTopo="__NPL__",y.prototype.nruTopo="__NRU__",y.prototype.nulTopo="__NUL__",y.prototype.nzlTopo="__NZL__",y.prototype.omnTopo="__OMN__",y.prototype.pakTopo="__PAK__",y.prototype.panTopo="__PAN__",y.prototype.pcnTopo="__PCN__",y.prototype.perTopo="__PER__",y.prototype.pgaTopo="__PGA__",y.prototype.phlTopo="__PHL__",y.prototype.plwTopo="__PLW__",y.prototype.pngTopo="__PNG__",y.prototype.polTopo="__POL__",y.prototype.priTopo="__PRI__",y.prototype.prkTopo="__PRK__",y.prototype.prtTopo="__PRT__",y.prototype.pryTopo="__PRY__",y.prototype.pyfTopo="__PYF__",y.prototype.qatTopo="__QAT__",y.prototype.rouTopo="__ROU__",y.prototype.rusTopo="__RUS__",y.prototype.rwaTopo="__RWA__",y.prototype.sahTopo="__SAH__",y.prototype.sauTopo="__SAU__",y.prototype.scrTopo="__SCR__",y.prototype.sdnTopo="__SDN__",y.prototype.sdsTopo="__SDS__",y.prototype.senTopo="__SEN__",y.prototype.serTopo="__SER__",y.prototype.sgpTopo="__SGP__",y.prototype.sgsTopo="__SGS__",y.prototype.shnTopo="__SHN__",y.prototype.slbTopo="__SLB__",y.prototype.sleTopo="__SLE__",y.prototype.slvTopo="__SLV__",y.prototype.smrTopo="__SMR__",y.prototype.solTopo="__SOL__",y.prototype.somTopo="__SOM__",y.prototype.spmTopo="__SPM__",y.prototype.srbTopo="__SRB__",y.prototype.stpTopo="__STP__",y.prototype.surTopo="__SUR__",y.prototype.svkTopo="__SVK__",y.prototype.svnTopo="__SVN__",y.prototype.sweTopo="__SWE__",y.prototype.swzTopo="__SWZ__",y.prototype.sxmTopo="__SXM__",y.prototype.sycTopo="__SYC__",y.prototype.syrTopo="__SYR__",y.prototype.tcaTopo="__TCA__",y.prototype.tcdTopo="__TCD__",y.prototype.tgoTopo="__TGO__",y.prototype.thaTopo="__THA__",y.prototype.tjkTopo="__TJK__",y.prototype.tkmTopo="__TKM__",y.prototype.tlsTopo="__TLS__",y.prototype.tonTopo="__TON__",y.prototype.ttoTopo="__TTO__",y.prototype.tunTopo="__TUN__",y.prototype.turTopo="__TUR__",y.prototype.tuvTopo="__TUV__",y.prototype.twnTopo="__TWN__",y.prototype.tzaTopo="__TZA__",y.prototype.ugaTopo="__UGA__",y.prototype.ukrTopo="__UKR__",y.prototype.umiTopo="__UMI__",y.prototype.uryTopo="__URY__",y.prototype.usaTopo="__USA__",y.prototype.usgTopo="__USG__",y.prototype.uzbTopo="__UZB__",y.prototype.vatTopo="__VAT__",y.prototype.vctTopo="__VCT__",y.prototype.venTopo="__VEN__",y.prototype.vgbTopo="__VGB__",y.prototype.virTopo="__VIR__",y.prototype.vnmTopo="__VNM__",y.prototype.vutTopo="__VUT__",y.prototype.wlfTopo="__WLF__",y.prototype.wsbTopo="__WSB__",y.prototype.wsmTopo="__WSM__",y.prototype.yemTopo="__YEM__",y.prototype.zafTopo="__ZAF__",y.prototype.zmbTopo="__ZMB__",y.prototype.zweTopo="__ZWE__",y.prototype.latLngToXY=function(o,t){return this.projection([t,o])},y.prototype.addLayer=function(o,t,p){return(p?this.svg.insert("g",":first-child"):this.svg.append("g")).attr("id",t||"").attr("class",o||"")},y.prototype.updateChoropleth=function(o){var t=this.svg;for(var p in o)if(o.hasOwnProperty(p)){var e,_=o[p];if(!p)continue;e="string"==typeof _?_:"string"==typeof _.color?_.color:this.options.fills[_.fillKey],_===Object(_)&&(this.options.data[p]=l(_,this.options.data[p]||{}),this.svg.select("."+p).attr("data-info",JSON.stringify(this.options.data[p]))),t.selectAll("."+p).transition().style("fill",e)}},y.prototype.updatePopup=function(o,t,p){var e=this;o.on("mousemove",null),o.on("mousemove",function(){var _=d.mouse(e.options.element);d.select(e.svg[0][0].parentNode).select(".datamaps-hoverover").style("top",_[1]+30+"px").html(function(){var e=JSON.parse(o.attr("data-info"));try{return p.popupTemplate(t,e)}catch(o){return""}}).style("left",_[0]+"px")}),d.select(e.svg[0][0].parentNode).select(".datamaps-hoverover").style("display","block")},y.prototype.addPlugin=function(o,t){var p=this;void 0===y.prototype[o]&&(y.prototype[o]=function(e,_,r,i){var a;void 0===i&&(i=!1),"function"==typeof _&&(r=_,_=void 0),_=l(_||{},p.options[o+"Config"]),!i&&this.options[o+"Layer"]?(a=this.options[o+"Layer"],_=_||this.options[o+"Options"]):(a=this.addLayer(o),this.options[o+"Layer"]=a,this.options[o+"Options"]=_),t.apply(this,[a,e,_]),r&&r(a)})},d=p("O72r"),h=p("tiYs"),o.exports=y,window.jQuery&&(window.jQuery.fn.datamaps=function(o,t){(o=o||{}).element=this[0];var p=new y(o);return"function"==typeof t&&t(p,o),this})}()}}]);