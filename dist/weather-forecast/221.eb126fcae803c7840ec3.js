(window.webpackJsonp=window.webpackJsonp||[]).push([[221],{YKxf:function(o,t,p){!function(){function t(o,t,p){void 0===p&&(p=t,optionsValues=void 0);var e=void 0!==o?o:t;if(void 0===e)return null;if("function"==typeof e){var _=[p];return p.geography&&(_=[p.geography,p.data]),e.apply(null,_)}return e}function e(o){var p=this.options.fills,e=this.options.data||{},_=this.options.geographyConfig,r=this.svg.select("g.datamaps-subunits");r.empty()&&(r=this.addLayer("datamaps-subunits",null,!0));var i=h.feature(o,o.objects[this.options.scope]).features;_.hideAntarctica&&(i=i.filter(function(o){return"ATA"!==o.id})),_.hideHawaiiAndAlaska&&(i=i.filter(function(o){return"HI"!==o.id&&"AK"!==o.id})),r.selectAll("path.datamaps-subunit").data(i).enter().append("path").attr("d",this.path).attr("class",function(o){return"datamaps-subunit "+o.id}).attr("data-info",function(o){return JSON.stringify(e[o.id])}).style("fill",function(o){var _,r=e[o.id];return r&&r.fillKey&&(_=p[t(r.fillKey,{data:e[o.id],geography:o})]),void 0===_&&(_=t(r&&r.fillColor,p.defaultFill,{data:e[o.id],geography:o})),_}).style("stroke-width",_.borderWidth).style("stroke",_.borderColor)}function _(){var o=this.svg,p=this,e=this.options.geographyConfig;(e.highlightOnHover||e.popupOnHover)&&o.selectAll(".datamaps-subunit").on("mouseover",function(_){var r=d.select(this),i=p.options.data[_.id]||{};if(e.highlightOnHover){var a={fill:r.style("fill"),stroke:r.style("stroke"),"stroke-width":r.style("stroke-width"),"fill-opacity":r.style("fill-opacity")};r.style("fill",t(i.highlightFillColor,e.highlightFillColor,i)).style("stroke",t(i.highlightBorderColor,e.highlightBorderColor,i)).style("stroke-width",t(i.highlightBorderWidth,e.highlightBorderWidth,i)).style("fill-opacity",t(i.highlightFillOpacity,e.highlightFillOpacity,i)).attr("data-previousAttributes",JSON.stringify(a)),/((MSIE)|(Trident))/.test(navigator.userAgent)||(function(){this.parentNode.appendChild(this)}).call(this)}e.popupOnHover&&p.updatePopup(r,_,e,o)}).on("mouseout",function(){var o=d.select(this);if(e.highlightOnHover){var t=JSON.parse(o.attr("data-previousAttributes"));for(var p in t)o.style(p,t[p])}o.on("mousemove",null),d.selectAll(".datamaps-hoverover").style("display","none")})}function r(o,t,p){if(t=t||{},this.options.fills){var e="<dl>",_="";for(var r in t.legendTitle&&(e="<h2>"+t.legendTitle+"</h2>"+e),this.options.fills){if("defaultFill"===r){if(!t.defaultFillName)continue;_=t.defaultFillName}else _=t.labels&&t.labels[r]?t.labels[r]:r+": ";e+="<dt>"+_+"</dt>",e+='<dd style="background-color:'+this.options.fills[r]+'">&nbsp;</dd>'}e+="</dl>",d.select(this.options.element).append("div").attr("class","datamaps-legend").html(e)}}function i(o,t){var p=d.geo.graticule();this.svg.insert("path",".datamaps-subunits").datum(p).attr("class","datamaps-graticule").attr("d",this.path)}function a(o,p,e){var _=this;if(!p||p&&!p.slice)throw"Datamaps Error - arcs must be an array";for(var r=0;r<p.length;r++)p[r]=l(p[r],p[r].options),delete p[r].options;void 0===e&&(e=T.arcConfig);var i=o.selectAll("path.datamaps-arc").data(p,JSON.stringify),a=d.geo.path().projection(_.projection);i.enter().append("svg:path").attr("class","datamaps-arc").style("stroke-linecap","round").style("stroke",function(o){return t(o.strokeColor,e.strokeColor,o)}).style("fill","none").style("stroke-width",function(o){return t(o.strokeWidth,e.strokeWidth,o)}).attr("d",function(o){var p=_.latLngToXY(t(o.origin.latitude,o),t(o.origin.longitude,o)),r=_.latLngToXY(t(o.destination.latitude,o),t(o.destination.longitude,o)),i=[(p[0]+r[0])/2,(p[1]+r[1])/2];if(e.greatArc){var s=d.geo.greatArc().source(function(o){return[t(o.origin.longitude,o),t(o.origin.latitude,o)]}).target(function(o){return[t(o.destination.longitude,o),t(o.destination.latitude,o)]});return a(s(o))}var n=t(o.arcSharpness,e.arcSharpness,o);return"M"+p[0]+","+p[1]+"S"+(i[0]+50*n)+","+(i[1]-75*n)+","+r[0]+","+r[1]}).transition().delay(100).style("fill",function(o){var p=this.getTotalLength();return this.style.transition=this.style.WebkitTransition="none",this.style.strokeDasharray=p+" "+p,this.style.strokeDashoffset=p,this.getBoundingClientRect(),this.style.transition=this.style.WebkitTransition="stroke-dashoffset "+t(o.animationSpeed,e.animationSpeed,o)+"ms ease-out",this.style.strokeDashoffset="0","none"}),i.exit().transition().style("opacity",0).remove()}function s(o,t){var p=this;t=t||{};var e=this.projection([-67.707617,42.722131]);this.svg.selectAll(".datamaps-subunit").attr("data-foo",function(_){var r,i,a=p.path.centroid(_),s=7.5,n=5;["FL","KY","MI"].indexOf(_.id)>-1&&(s=-2.5),"NY"===_.id&&(s=-1),"MI"===_.id&&(n=18),"LA"===_.id&&(s=13),r=a[0]-s,i=a[1]+n;var l=["VT","NH","MA","RI","CT","NJ","DE","MD","DC"].indexOf(_.id);return l>-1&&(r=e[0],i=e[1]+l*(2+(t.fontSize||12)),o.append("line").attr("x1",r-3).attr("y1",i-5).attr("x2",a[0]).attr("y2",a[1]).style("stroke",t.labelColor||"#000").style("stroke-width",t.lineWidth||1)),o.append("text").attr("x",r).attr("y",i).style("font-size",(t.fontSize||10)+"px").style("font-family",t.fontFamily||"Verdana").style("fill",t.labelColor||"#000").text(_.id),"bar"})}function n(o,p,e){function _(o){return void 0!==o&&void 0!==o.latitude&&void 0!==o.longitude}var r=this,i=this.options.fills,a=this.options.filters,s=this.svg;if(!p||p&&!p.slice)throw"Datamaps Error - bubbles must be an array";var n=o.selectAll("circle.datamaps-bubble").data(p,e.key);n.enter().append("svg:circle").attr("class","datamaps-bubble").attr("cx",function(o){var t;return _(o)?t=r.latLngToXY(o.latitude,o.longitude):o.centered&&(t=r.path.centroid(s.select("path."+o.centered).data()[0])),t?t[0]:void 0}).attr("cy",function(o){var t;return _(o)?t=r.latLngToXY(o.latitude,o.longitude):o.centered&&(t=r.path.centroid(s.select("path."+o.centered).data()[0])),t?t[1]:void 0}).attr("r",function(o){return e.animate?0:t(o.radius,e.radius,o)}).attr("data-info",function(o){return JSON.stringify(o)}).attr("filter",function(o){return a[t(o.filterKey,e.filterKey,o)]||void 0}).style("stroke",function(o){return t(o.borderColor,e.borderColor,o)}).style("stroke-width",function(o){return t(o.borderWidth,e.borderWidth,o)}).style("fill-opacity",function(o){return t(o.fillOpacity,e.fillOpacity,o)}).style("fill",function(o){return i[t(o.fillKey,e.fillKey,o)]||i.defaultFill}).on("mouseover",function(o){var p=d.select(this);if(e.highlightOnHover){var _={fill:p.style("fill"),stroke:p.style("stroke"),"stroke-width":p.style("stroke-width"),"fill-opacity":p.style("fill-opacity")};p.style("fill",t(o.highlightFillColor,e.highlightFillColor,o)).style("stroke",t(o.highlightBorderColor,e.highlightBorderColor,o)).style("stroke-width",t(o.highlightBorderWidth,e.highlightBorderWidth,o)).style("fill-opacity",t(o.highlightFillOpacity,e.highlightFillOpacity,o)).attr("data-previousAttributes",JSON.stringify(_))}e.popupOnHover&&r.updatePopup(p,o,e,s)}).on("mouseout",function(o){var t=d.select(this);if(e.highlightOnHover){var p=JSON.parse(t.attr("data-previousAttributes"));for(var _ in p)t.style(_,p[_])}d.selectAll(".datamaps-hoverover").style("display","none")}),n.transition().duration(400).attr("r",function(o){return t(o.radius,e.radius,o)}),n.exit().transition().delay(e.exitDelay).attr("r",0).remove()}function l(o){return Array.prototype.slice.call(arguments,1).forEach(function(t){if(t)for(var p in t)null==o[p]&&(o[p]=t[p])}),o}function y(o){if(void 0===d||void 0===h)throw new Error("Include d3.js (v3.0.3 or greater) and topojson on this page before creating a new map");return this.options=l(o,T),this.options.geographyConfig=l(o.geographyConfig,T.geographyConfig),this.options.projectionConfig=l(o.projectionConfig,T.projectionConfig),this.options.bubblesConfig=l(o.bubblesConfig,T.bubblesConfig),this.options.arcConfig=l(o.arcConfig,T.arcConfig),d.select(this.options.element).select("svg").length>0&&(function(o,t,p){return this.svg=d.select(o).append("svg").attr("width",p||o.offsetWidth).attr("data-width",p||o.offsetWidth).attr("class","datamap").attr("height",t||o.offsetHeight).style("overflow","hidden"),this.options.responsive&&(d.select(this.options.element).style({position:"relative","padding-bottom":100*this.options.aspectRatio+"%"}),d.select(this.options.element).select("svg").style({position:"absolute",width:"100%",height:"100%"}),d.select(this.options.element).select("svg").select("g").selectAll("path").style("vector-effect","non-scaling-stroke")),this.svg}).call(this,this.options.element,this.options.height,this.options.width),this.addPlugin("bubbles",n),this.addPlugin("legend",r),this.addPlugin("arc",a),this.addPlugin("labels",s),this.addPlugin("graticule",i),this.options.disableDefaultStyles||d.select(".datamaps-style-block").empty()&&d.select("head").append("style").attr("class","datamaps-style-block").html('.datamap path.datamaps-graticule { fill: none; stroke: #777; stroke-width: 0.5px; stroke-opacity: .5; pointer-events: none; } .datamap .labels {pointer-events: none;} .datamap path {stroke: #FFFFFF; stroke-width: 1px;} .datamaps-legend dt, .datamaps-legend dd { float: left; margin: 0 3px 0 0;} .datamaps-legend dd {width: 20px; margin-right: 6px; border-radius: 3px;} .datamaps-legend {padding-bottom: 20px; z-index: 1001; position: absolute; left: 4px; font-size: 12px; font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;} .datamaps-hoverover {display: none; font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; } .hoverinfo {padding: 4px; border-radius: 1px; background-color: #FFF; box-shadow: 1px 1px 5px #CCC; font-size: 12px; border: 1px solid #CCC; } .hoverinfo hr {border:1px dotted #CCC; }'),this.draw()}var d=window.d3,h=window.topojson,T={scope:"world",responsive:!1,aspectRatio:.5625,setProjection:function(o,t){var p,e,_=t.width||o.offsetWidth,r=t.height||o.offsetHeight,i=this.svg;return t&&void 0===t.scope&&(t.scope="world"),"usa"===t.scope?p=d.geo.albersUsa().scale(_).translate([_/2,r/2]):"world"===t.scope&&(p=d.geo[t.projection]().scale((_+1)/2/Math.PI).translate([_/2,r/("mercator"===t.projection?1.45:1.8)])),"orthographic"===t.projection&&(i.append("defs").append("path").datum({type:"Sphere"}).attr("id","sphere").attr("d",e),i.append("use").attr("class","stroke").attr("xlink:href","#sphere"),i.append("use").attr("class","fill").attr("xlink:href","#sphere"),p.scale(250).clipAngle(90).rotate(t.projectionConfig.rotation)),{path:e=d.geo.path().projection(p),projection:p}},projection:"equirectangular",dataType:"json",data:{},done:function(){},fills:{defaultFill:"#ABDDA4"},filters:{},geographyConfig:{dataUrl:null,hideAntarctica:!0,hideHawaiiAndAlaska:!1,borderWidth:1,borderColor:"#FDFDFD",popupTemplate:function(o,t){return'<div class="hoverinfo"><strong>'+o.properties.name+"</strong></div>"},popupOnHover:!0,highlightOnHover:!0,highlightFillColor:"#FC8D59",highlightBorderColor:"rgba(250, 15, 160, 0.2)",highlightBorderWidth:2},projectionConfig:{rotation:[97,0]},bubblesConfig:{borderWidth:2,borderColor:"#FFFFFF",popupOnHover:!0,radius:null,popupTemplate:function(o,t){return'<div class="hoverinfo"><strong>'+t.name+"</strong></div>"},fillOpacity:.75,animate:!0,highlightOnHover:!0,highlightFillColor:"#FC8D59",highlightBorderColor:"rgba(250, 15, 160, 0.2)",highlightBorderWidth:2,highlightFillOpacity:.85,exitDelay:100,key:JSON.stringify},arcConfig:{strokeColor:"#DD1C77",strokeWidth:1,arcSharpness:1,animationSpeed:600}};y.prototype.resize=function(){var o=this.options;if(o.responsive){var t=o.element.clientWidth,p=d.select(o.element).select("svg").attr("data-width");d.select(o.element).select("svg").selectAll("g").attr("transform","scale("+t/p+")")}},y.prototype.draw=function(){function o(o){t.options.dataUrl&&d[t.options.dataType](t.options.dataUrl,function(o){if("csv"===t.options.dataType&&o&&o.slice){for(var p={},e=0;e<o.length;e++)p[o[e].id]=o[e];o=p}Datamaps.prototype.updateChoropleth.call(t,o)}),e.call(t,o),_.call(t),(t.options.geographyConfig.popupOnHover||t.options.bubblesConfig.popupOnHover)&&(hoverover=d.select(t.options.element).append("div").attr("class","datamaps-hoverover").style("z-index",10001).style("position","absolute")),t.options.done(t)}var t=this,p=t.options,r=p.setProjection.apply(t,[p.element,p]);return this.path=r.path,this.projection=r.projection,p.geographyConfig.dataUrl?d.json(p.geographyConfig.dataUrl,function(p,e){if(p)throw new Error(p);t.customTopo=e,o(e)}):o(this[p.scope+"Topo"]||p.geographyConfig.dataJson),this},y.prototype.worldTopo="__WORLD__",y.prototype.abwTopo="__ABW__",y.prototype.afgTopo="__AFG__",y.prototype.agoTopo="__AGO__",y.prototype.aiaTopo="__AIA__",y.prototype.albTopo="__ALB__",y.prototype.aldTopo="__ALD__",y.prototype.andTopo="__AND__",y.prototype.areTopo="__ARE__",y.prototype.argTopo="__ARG__",y.prototype.armTopo="__ARM__",y.prototype.asmTopo="__ASM__",y.prototype.ataTopo="__ATA__",y.prototype.atcTopo="__ATC__",y.prototype.atfTopo="__ATF__",y.prototype.atgTopo="__ATG__",y.prototype.ausTopo="__AUS__",y.prototype.autTopo="__AUT__",y.prototype.azeTopo="__AZE__",y.prototype.bdiTopo="__BDI__",y.prototype.belTopo="__BEL__",y.prototype.benTopo="__BEN__",y.prototype.bfaTopo="__BFA__",y.prototype.bgdTopo="__BGD__",y.prototype.bgrTopo="__BGR__",y.prototype.bhrTopo="__BHR__",y.prototype.bhsTopo="__BHS__",y.prototype.bihTopo="__BIH__",y.prototype.bjnTopo="__BJN__",y.prototype.blmTopo="__BLM__",y.prototype.blrTopo="__BLR__",y.prototype.blzTopo="__BLZ__",y.prototype.bmuTopo="__BMU__",y.prototype.bolTopo="__BOL__",y.prototype.braTopo="__BRA__",y.prototype.brbTopo="__BRB__",y.prototype.brnTopo="__BRN__",y.prototype.btnTopo="__BTN__",y.prototype.norTopo="__NOR__",y.prototype.bwaTopo={type:"Topology",objects:{bwa:{type:"GeometryCollection",geometries:[{type:"Polygon",properties:{name:"Ghanzi"},id:"BW.GH",arcs:[[0,1,2,3,4]]},{type:"Polygon",properties:{name:"Kgalagadi"},id:"BW.KG",arcs:[[5,6,7,-2]]},{type:"Polygon",properties:{name:"North-West"},id:"BW.NW",arcs:[[8,-4,9]]},{type:"Polygon",properties:{name:"Central"},id:"BW.CE",arcs:[[10,11,12,13,14,-5,-9],[15],[16]]},{type:"Polygon",properties:{name:"Kgatleng"},id:"BW.KL",arcs:[[17,18,19,20,-14]]},{type:"Polygon",properties:{name:"Kweneng"},id:"BW.KW",arcs:[[-21,21,22,23,24,25,-6,-1,-15]]},{type:"Polygon",properties:{name:"South-East"},id:"BW.SE",arcs:[[26,27,-23,28,-19],[29]]},{type:"Polygon",properties:{name:"Southern"},id:"BW.SO",arcs:[[30,-24,-28,31,-7,-26]]},{type:"Polygon",properties:{name:"North-East"},id:"BW.NE",arcs:[[-12,32],[33]]},{type:"Polygon",properties:{name:"Gaborone"},id:"BW.",arcs:[[-29,-22,-20]]},{type:"Polygon",properties:{name:"Francistown"},id:"BW.",arcs:[[-34]]},{type:"Polygon",properties:{name:"Lobatse"},id:"BW.",arcs:[[-30]]},{type:"Polygon",properties:{name:"Selebi-Phikwe"},id:"BW.",arcs:[[-17]]},{type:"Polygon",properties:{name:"Sowa"},id:"BW.",arcs:[[-16]]},{type:"Polygon",properties:{name:"Jwaneng"},id:"BW.",arcs:[[-31,-25]]}]}},arcs:[[[5826,4324],[-210,-402],[-2331,8]],[[3285,3930],[-3263,3],[-20,0]],[[2,3933],[0,114],[-1,189],[0,189],[0,188],[0,166],[0,165],[-1,165],[0,165],[0,94],[250,0],[250,0],[249,0],[250,0],[61,0],[14,41],[0,45],[-1,63],[0,63],[0,64],[0,63],[0,63],[-1,63],[0,64],[0,63],[0,63],[0,64],[-1,63],[0,63],[0,63],[0,63],[-1,64],[0,63],[0,1]],[[1070,6467],[20,0],[3074,0]],[[4164,6467],[1662,-2143]],[[3285,3930],[-15,-95],[-22,-18],[-48,1],[-11,-4],[-9,-9],[-4,-41],[2,-106],[2,-8],[7,-3],[11,-1],[60,0],[19,-80],[4,-391]],[[3281,3175],[-4,-905],[2,-13],[5,-11],[15,-4],[16,-2],[1023,6],[16,-2],[17,-4],[17,-12],[123,-121],[14,-17],[11,-18],[5,-24],[17,-522],[35,-43],[123,-116],[17,-5],[49,-3],[28,-21],[15,-93]],[[4825,1245],[-47,16],[-21,-3],[-22,-8],[-29,-7],[-54,8],[-45,31],[-73,82],[-47,25],[-56,0],[-111,-28],[-23,-3],[-2,5],[6,10],[-1,8],[-11,9],[-11,6],[-12,3],[-55,-13],[-21,12],[-16,21],[-48,33],[-41,50],[-9,5],[-22,7],[-10,6],[-7,9],[-11,23],[-10,9],[-59,17],[-14,13],[-8,11],[-112,82],[-27,16],[-32,13],[-10,8],[-14,13],[-17,24],[-9,9],[-15,4],[-14,-2],[-35,-12],[-19,-2],[-17,4],[-48,17],[-59,11],[-53,-4],[-50,-14],[-80,-36],[-11,-7],[-13,-7],[-6,5],[-5,11],[-7,9],[-25,4],[-26,-13],[-41,-39],[-6,-10],[-2,-9],[-5,-9],[-12,-7],[-15,-6],[-11,-7],[-9,-10],[-9,-13],[-17,-43],[-12,-13],[-27,-10],[-7,-11],[-21,-68],[-9,-17],[-3,-8],[0,-10],[6,-11],[10,-11],[5,-12],[-9,-10],[-15,-11],[-1,-9],[4,-9],[1,-12],[-2,-16],[-3,-11],[-6,-11],[-47,-52],[-15,-23],[-6,-23],[1,-16],[4,-3],[6,-2],[8,-11],[6,-16],[2,-7],[-12,-18],[-16,-17],[-21,-17],[-12,-19],[14,-19],[5,-14],[1,-25],[-3,-26],[-6,-18],[-9,-14],[-10,-7],[-31,-10],[-11,-9],[0,-10],[4,-11],[-1,-13],[-44,-63],[-3,-3],[-10,-10],[-21,-13],[-12,-15],[-17,-38],[-20,-29],[-19,-7],[-48,10],[-34,-6],[-23,-18],[-37,-50],[-55,-50],[-26,-12],[-17,-5],[-49,-8],[-9,-7],[-11,-22],[-43,-41],[-21,-39],[-34,-87],[-41,-58],[-53,-50],[-63,-36],[-67,-15],[-104,-1],[-34,-5],[-28,-10],[-13,-11],[-1,-17],[9,-49],[2,-22],[-5,-20],[-12,-19],[-19,-18],[-61,-38],[-24,-8],[-23,0],[-63,16],[-91,2],[-52,22],[-25,4],[-49,-2],[-89,-22],[-15,-1],[-30,4],[-15,0],[-93,-25],[-33,-1],[-141,29],[-43,25],[-45,18],[-60,-7],[-28,-14],[-49,-32],[-69,-30],[-23,-15],[-3,-3],[-5,11],[-11,35],[-11,12],[-16,10],[-6,6],[-6,8],[-15,30],[-11,40],[-6,41],[0,33],[23,74],[2,25],[-5,16],[-17,23],[-7,14],[-3,28],[3,31],[14,59],[4,14],[32,21],[15,18],[31,54],[62,73],[24,39],[20,42],[46,61],[4,17],[-40,66],[-4,20],[3,79],[-10,95],[-28,66],[-1,4],[-12,12],[-6,1],[-10,-5],[-15,-5],[1,10],[11,22],[-22,72],[-11,20],[-11,8],[-27,13],[-9,11],[0,12],[9,23],[0,12],[-8,7],[-13,2],[-11,4],[-3,12],[5,7],[24,14],[6,11],[-8,29],[-48,39],[2,31],[7,17],[32,19],[-14,11],[-10,0],[-9,-5],[-10,-4],[-11,4],[0,12],[5,13],[1,9],[-16,-2],[-4,22],[-6,10],[-31,13],[-17,11],[-7,12],[-7,34],[-5,9],[-11,14],[-4,8],[0,8],[4,6],[4,7],[-2,10],[-7,7],[-19,9],[-7,7],[-2,7],[-2,28],[-20,8],[-20,11],[-10,15],[9,18],[2,17],[-12,23],[-29,43],[-33,68],[-12,14],[-137,107],[-82,46],[-11,3],[-22,1],[-10,3],[-12,8],[-28,30],[-56,41],[-20,30],[-18,13],[-7,8],[-6,18],[0,189],[0,189],[0,188],[0,189],[-1,189],[0,31],[0,158],[0,188],[0,189],[0,75]],[[6390,8662],[-1032,0],[-10,0],[1,-1093],[4,-3],[2,-2],[176,-73],[6,-7],[2,-12],[-8,-255],[-2,-14],[-5,-10],[-11,-4],[-684,-55],[-12,1],[-15,2],[-23,0],[-38,-13],[-21,-2],[-26,10],[-17,18],[-29,44],[-41,32],[-16,16],[-29,56],[-13,0],[-14,-8],[-21,8],[-28,30],[-12,10],[-16,8],[-10,-1],[-10,-5],[-14,-6],[-41,-7],[-11,-6],[-18,-17],[-12,-5],[-13,-3],[-10,-4],[-8,-6],[-25,-29],[0,-4],[2,-6],[1,-6],[-3,-6],[-66,-17],[-12,-1],[-14,5],[-27,17],[-5,-22],[2,-750]],[[1070,6467],[0,136],[-1,137],[0,138],[0,137],[-1,137],[0,27],[0,110],[-1,137],[0,137],[0,138],[-1,137],[0,137],[-1,137],[0,137],[-1,138],[0,86],[0,51],[-1,137],[0,45],[0,45],[0,44],[0,45],[0,45],[0,45],[0,45],[0,44],[0,45],[0,45],[0,45],[0,45],[0,45],[0,44],[0,45],[0,45],[0,31],[20,1],[33,1],[60,3],[60,2],[60,2],[61,3],[50,2],[50,2],[50,2],[50,2],[20,1],[21,1],[18,3],[18,4],[18,3],[18,4],[91,17],[89,17],[91,17],[90,17],[90,18],[90,17],[90,17],[90,17],[90,17],[90,18],[90,17],[90,17],[90,17],[90,17],[90,18],[90,17],[93,18],[126,10],[92,8],[74,6],[40,-1],[14,-7],[6,-5],[2,-8],[0,-14],[3,-8],[8,-2],[8,-1],[3,-4],[-1,-26],[1,-8],[3,-6],[12,-16],[13,-27],[32,-38],[6,-11],[1,-6],[-2,-19],[1,-6],[6,-3],[10,-3],[9,-1],[11,11],[16,-14],[15,-18],[6,-9],[15,-6],[14,-2],[11,-5],[4,-13],[6,-12],[12,-9],[5,-10],[-9,-18],[35,-37],[10,-23],[-15,-23],[10,-15],[16,-47],[9,-46],[14,-11],[19,0],[38,13],[4,3],[7,6],[26,29],[22,4],[16,10],[100,106],[17,6],[12,12],[19,28],[13,12],[32,21],[17,16],[3,38],[37,26],[7,1],[5,-2],[5,-3],[5,-3],[4,7],[5,6],[13,9],[30,13],[9,6],[31,30],[8,4],[39,7],[36,26],[51,61],[38,19],[21,3],[22,-3],[12,-4],[19,-9],[9,-2],[10,7],[30,53],[18,17],[16,6],[36,-2],[24,-5],[13,-12],[18,-34],[8,-8],[7,-3],[5,-6],[2,-17],[36,-34],[14,4],[49,5],[11,2],[3,7],[15,17],[4,6],[4,3],[53,63],[16,15],[37,23],[29,36],[5,4],[8,5],[10,4],[9,1],[10,4],[6,15],[7,4],[22,4],[25,21],[18,5],[21,1],[78,25],[7,4],[8,8],[4,7],[5,6],[12,2],[-7,-16],[11,-7],[7,-10],[9,-4],[16,7],[9,-13],[14,2],[29,18],[11,-22],[33,1],[35,14],[35,35],[43,-1],[70,-12],[-43,-95],[0,-31],[7,-26],[31,-76],[44,-74],[29,-31],[36,-21],[32,-25],[23,-41],[34,-84],[35,-56],[8,-21],[10,-47],[6,-14],[13,-23],[71,-73],[36,-24],[14,-15],[51,-71],[31,-26],[41,-21],[27,-23],[12,-39],[6,-80],[39,-83],[133,-118],[29,-86]],[[6390,8662],[0,-1],[-3,-23],[-18,-41],[-3,-22],[4,-26],[8,-21],[27,-44],[32,-41],[24,-49],[103,-282],[27,-40],[41,-25],[48,-12],[57,-1],[12,-6],[10,-7],[8,-9],[11,-14],[2,-9],[-7,-23],[-8,-13],[-7,-4],[0,-2],[13,-8],[8,-4],[33,-6],[24,-12],[29,-45],[20,-18],[20,-8],[42,-9],[21,-8],[43,-28],[18,-18],[9,-21],[8,-24],[14,-15],[20,-9],[48,-13],[16,-9],[3,-3],[8,-9],[15,-20],[16,-16],[19,-9],[21,-4],[25,-1],[40,-7],[121,-60],[38,-7],[36,1],[34,-4],[36,-19],[10,-11],[18,-25],[11,-9],[14,-5],[10,-1],[11,1],[13,0],[22,-4],[23,-6],[19,-12],[14,-19],[54,-136],[20,-128],[-17,-159]],[[7778,7020],[4,-73],[-23,-62],[-23,-93],[-15,-78],[0,-78],[15,-108],[46,-62],[37,-70],[46,-109],[37,-101],[23,-101],[38,-70],[53,-62],[83,-39],[75,0],[91,-23],[68,8],[75,0],[61,-31],[79,-7]],[[8548,5861],[13,-14],[15,-9],[18,-5],[61,-4],[80,-16],[128,-1],[39,-8],[43,-14],[86,-43],[23,-5],[18,3],[17,7],[38,9],[11,5],[12,2],[34,-9],[31,-2],[15,-5],[42,-32],[49,-14],[156,-71],[32,-8],[65,-4],[31,-7],[19,-12],[43,-13],[17,-13],[3,-21],[-13,-26],[-18,-26],[-11,-24],[-5,-46],[9,-47],[20,-42],[32,-33],[40,-20],[39,-6],[101,2],[5,-3],[11,-12],[5,-10],[9,-22],[6,-10],[82,-68],[-20,-6],[-30,2],[-59,12],[-28,-3],[-20,-13],[-17,-15],[-19,-7],[-129,-7],[-10,-4],[-22,-29],[0,-5],[-17,-9],[-20,-20],[-25,-31],[8,-77],[-5,-13],[-10,-10],[-25,-44],[-19,-14],[-46,5],[-24,-1],[-11,-14],[-6,-21],[-15,-12],[-21,-6],[-24,-3],[-46,-14],[-77,-42],[-38,-12],[-28,1],[-21,3],[-19,-4],[-23,-19],[-17,-5],[-67,17],[-88,-6],[-41,-10],[-39,-22],[-16,-13],[-39,-43],[-11,-6],[-26,-3],[-11,-3],[-10,-6],[-34,-41],[-5,-10],[-2,-14],[2,-14],[3,-8],[0,-9],[-8,-14],[-10,-9],[-11,-4],[-10,-2],[-9,-4],[-5,-7],[-6,-17],[-4,-6],[-16,-7],[-24,-7],[-20,-8],[-2,-12],[9,-24],[-4,-24],[-13,-22],[-17,-17],[-15,-9],[-20,-10],[-22,-8],[-21,-3],[-12,-11],[0,-25],[9,-46],[-17,-31],[-37,-25],[-44,-17],[-41,-10],[7,-20],[-17,-6],[-23,1],[-11,2],[-3,-8],[3,-9],[5,-8],[2,-5],[2,-3],[5,-5],[2,-4],[-5,-2],[-2,-2],[-8,-6],[-1,0],[-16,-42],[-6,-11],[-16,-7],[-14,6],[-29,31],[-43,-33],[-12,-4],[-15,4],[-15,7],[-12,1],[-9,-31],[-20,-21],[-5,-17],[-1,-6],[-2,-6],[-4,-5],[-4,-2],[-2,-3],[1,-7],[3,-9],[2,-7],[-6,-25],[-16,-19],[-21,-14],[-23,-6],[-45,-2],[-13,-5],[-11,-11],[-8,-13],[-11,-6],[-15,7],[8,16],[-8,2],[-16,-5],[-13,-6],[-3,-6],[-10,-13],[-11,-6],[-12,34],[-15,-12],[-25,-38],[-18,-16],[-19,-13],[-41,-20],[-39,-11],[-12,-13],[15,-22],[-11,-4],[-9,0],[-9,4],[-7,9],[-3,-7],[-8,-9],[-5,-7],[-8,10],[-13,4],[-10,-2],[-5,-8],[5,-14],[8,-7],[6,-7],[-4,-13],[-14,7],[-11,-1],[-11,-8],[-8,-13],[7,0],[-20,-14],[-6,-6],[-3,-10],[-7,4],[-8,3],[2,-22],[7,-19],[0,-16],[-16,-11],[-18,1],[-9,12],[-5,13],[-12,5],[-10,-8],[-19,-45],[-20,-35],[-6,-21],[3,-10]],[[7454,3452],[0,-1],[-6,-1],[-21,-2],[-13,-11],[-25,-32],[-3,6],[-9,11],[-3,6],[-8,-20],[-11,-17],[-24,-31],[-5,-8],[-6,-17],[-4,-5],[-8,-2],[-20,3],[-8,-1],[-27,-25],[-50,-58],[-2,-1],[-3,-8],[-4,-4],[-4,-3],[-744,419]],[[6446,3650],[-143,193],[-48,45],[-94,29],[-14,6],[-9,8],[-312,393]],[[6694,6907],[4,43],[-24,9],[-25,-4],[-16,-4],[-55,13],[-18,3],[-7,-26],[28,-13],[57,-16],[56,-5]],[[8373,5410],[-8,3],[-11,-6],[-1,-5],[3,-4],[2,-5],[-4,-7],[0,-8],[2,-5],[12,2],[9,7],[8,-2],[7,-6],[9,2],[8,6],[15,5],[4,10],[1,10],[5,5],[-3,4],[-10,6],[2,11],[1,8],[-4,11],[-4,4],[-12,-3],[-5,-11],[0,-7],[-9,-9],[0,-10],[-11,-5],[-6,-1]],[[7454,3452],[2,-9],[-30,-53],[7,-22],[-4,-30],[-75,-291],[-2,-49],[-21,-96],[-11,-20],[-17,-14],[-22,-12],[-94,-29],[-23,-11],[-9,-17],[-65,-63],[-70,-43],[-29,-22],[-26,-34],[-32,-78],[-7,-12],[-70,-68],[-24,4],[-19,2],[-21,4],[-20,2],[-50,-7],[-120,-35]],[[6602,2449],[-10,15],[-47,42],[-85,55]],[[6460,2561],[-87,56]],[[6373,2617],[-18,11],[-21,10],[-12,3],[-10,8],[-7,21],[-2,31],[16,62],[13,32],[14,25],[32,160],[68,670]],[[6373,2617],[-124,-126]],[[6249,2491],[-158,-161]],[[6091,2330],[-90,3],[-19,4],[-126,66],[-697,209]],[[5159,2612],[-186,56]],[[4973,2668],[-1692,507]],[[6602,2449],[-163,-48],[-34,-24],[-17,-8],[-54,2],[-36,-12],[-8,-1],[-6,-5],[-1,-27],[11,-80],[-1,-44],[-11,-36],[-31,-67],[-2,-41],[-32,-53],[-24,-73],[-93,-196],[-34,-143],[-12,-25]],[[6054,1568],[-111,43],[-6,12],[-1,12],[122,399],[4,15],[0,15],[-11,4],[-14,2],[-29,-2],[-9,1],[-2,5],[0,1],[34,97],[6,28],[-2,15],[10,9],[13,16],[13,12],[20,78]],[[6249,2491],[5,-32],[5,-39],[14,-24],[36,-8],[25,7],[45,3],[27,35],[0,28],[53,74],[1,26]],[[6061,1815],[12,1],[11,3],[7,-5],[13,6],[6,10],[0,11],[-9,0],[-3,6],[7,6],[-1,5],[7,7],[-6,5],[-1,8],[-13,-3],[-2,12],[-5,1],[-4,-10],[-6,-19],[0,-17],[-4,-13],[-8,-11],[-1,-3]],[[4973,2668],[-2,-219],[195,9],[-7,154]],[[6054,1568],[-47,-105],[-23,-67],[-137,-100],[-77,-36],[-223,-21],[-44,7],[-49,14],[-41,7],[-41,-6],[-48,-22],[-64,-45],[-21,-8],[-64,-16],[-32,-4],[-30,8],[-35,7],[-78,-8],[-37,8],[-57,36],[-81,28]],[[7778,7020],[40,20],[37,5],[121,0],[85,-11],[61,11],[37,-17],[43,-1],[19,-7],[15,-14],[8,-20],[-3,-43],[-13,-39],[-8,-39],[26,-87],[3,-44],[-16,-89],[-6,-13],[-8,-9],[-6,-10],[-1,-14],[0,-13],[-3,-25],[0,-10],[9,-62],[-2,-23],[-13,-58],[0,-19],[9,-21],[36,-49],[17,-17],[74,-52],[31,-38],[28,-41],[38,-45],[10,-15],[2,-9],[0,-17],[2,-8],[6,-11],[18,-18],[31,-62],[3,-12],[-3,-8],[-8,-13],[-3,-11],[4,-2],[8,-2],[4,-7],[-6,-14],[5,-11],[5,-1],[6,1],[7,-4],[6,-9],[9,-22],[6,-10]],[[8010,6235],[6,14],[16,-4],[30,-15],[4,0],[19,4],[3,7],[-2,8],[-1,12],[1,14],[-4,8],[-10,5],[-6,3],[-4,16],[6,15],[12,9],[1,9],[-7,9],[-9,0],[-10,-5],[-23,-11],[-12,-3],[-8,-13],[-6,-8],[-14,-11],[-11,-2],[0,-4],[1,-8],[-6,-6],[-7,-4],[-4,-12],[-1,-13],[4,-8],[18,-5],[24,-1]]],transform:{scale:[.0009372664967496691,.0009110897661766216],translate:[19.978345988000115,-26.891794127999987]}},y.prototype.cafTopo="__CAF__",y.prototype.canTopo="__CAN__",y.prototype.cheTopo="__CHE__",y.prototype.chlTopo="__CHL__",y.prototype.chnTopo="__CHN__",y.prototype.civTopo="__CIV__",y.prototype.clpTopo="__CLP__",y.prototype.cmrTopo="__CMR__",y.prototype.codTopo="__COD__",y.prototype.cogTopo="__COG__",y.prototype.cokTopo="__COK__",y.prototype.colTopo="__COL__",y.prototype.comTopo="__COM__",y.prototype.cpvTopo="__CPV__",y.prototype.criTopo="__CRI__",y.prototype.csiTopo="__CSI__",y.prototype.cubTopo="__CUB__",y.prototype.cuwTopo="__CUW__",y.prototype.cymTopo="__CYM__",y.prototype.cynTopo="__CYN__",y.prototype.cypTopo="__CYP__",y.prototype.czeTopo="__CZE__",y.prototype.deuTopo="__DEU__",y.prototype.djiTopo="__DJI__",y.prototype.dmaTopo="__DMA__",y.prototype.dnkTopo="__DNK__",y.prototype.domTopo="__DOM__",y.prototype.dzaTopo="__DZA__",y.prototype.ecuTopo="__ECU__",y.prototype.egyTopo="__EGY__",y.prototype.eriTopo="__ERI__",y.prototype.esbTopo="__ESB__",y.prototype.espTopo="__ESP__",y.prototype.estTopo="__EST__",y.prototype.ethTopo="__ETH__",y.prototype.finTopo="__FIN__",y.prototype.fjiTopo="__FJI__",y.prototype.flkTopo="__FLK__",y.prototype.fraTopo="__FRA__",y.prototype.froTopo="__FRO__",y.prototype.fsmTopo="__FSM__",y.prototype.gabTopo="__GAB__",y.prototype.psxTopo="__PSX__",y.prototype.gbrTopo="__GBR__",y.prototype.geoTopo="__GEO__",y.prototype.ggyTopo="__GGY__",y.prototype.ghaTopo="__GHA__",y.prototype.gibTopo="__GIB__",y.prototype.ginTopo="__GIN__",y.prototype.gmbTopo="__GMB__",y.prototype.gnbTopo="__GNB__",y.prototype.gnqTopo="__GNQ__",y.prototype.grcTopo="__GRC__",y.prototype.grdTopo="__GRD__",y.prototype.grlTopo="__GRL__",y.prototype.gtmTopo="__GTM__",y.prototype.gumTopo="__GUM__",y.prototype.guyTopo="__GUY__",y.prototype.hkgTopo="__HKG__",y.prototype.hmdTopo="__HMD__",y.prototype.hndTopo="__HND__",y.prototype.hrvTopo="__HRV__",y.prototype.htiTopo="__HTI__",y.prototype.hunTopo="__HUN__",y.prototype.idnTopo="__IDN__",y.prototype.imnTopo="__IMN__",y.prototype.indTopo="__IND__",y.prototype.ioaTopo="__IOA__",y.prototype.iotTopo="__IOT__",y.prototype.irlTopo="__IRL__",y.prototype.irnTopo="__IRN__",y.prototype.irqTopo="__IRQ__",y.prototype.islTopo="__ISL__",y.prototype.isrTopo="__ISR__",y.prototype.itaTopo="__ITA__",y.prototype.jamTopo="__JAM__",y.prototype.jeyTopo="__JEY__",y.prototype.jorTopo="__JOR__",y.prototype.jpnTopo="__JPN__",y.prototype.kabTopo="__KAB__",y.prototype.kasTopo="__KAS__",y.prototype.kazTopo="__KAZ__",y.prototype.kenTopo="__KEN__",y.prototype.kgzTopo="__KGZ__",y.prototype.khmTopo="__KHM__",y.prototype.kirTopo="__KIR__",y.prototype.knaTopo="__KNA__",y.prototype.korTopo="__KOR__",y.prototype.kosTopo="__KOS__",y.prototype.kwtTopo="__KWT__",y.prototype.laoTopo="__LAO__",y.prototype.lbnTopo="__LBN__",y.prototype.lbrTopo="__LBR__",y.prototype.lbyTopo="__LBY__",y.prototype.lcaTopo="__LCA__",y.prototype.lieTopo="__LIE__",y.prototype.lkaTopo="__LKA__",y.prototype.lsoTopo="__LSO__",y.prototype.ltuTopo="__LTU__",y.prototype.luxTopo="__LUX__",y.prototype.lvaTopo="__LVA__",y.prototype.macTopo="__MAC__",y.prototype.mafTopo="__MAF__",y.prototype.marTopo="__MAR__",y.prototype.mcoTopo="__MCO__",y.prototype.mdaTopo="__MDA__",y.prototype.mdgTopo="__MDG__",y.prototype.mdvTopo="__MDV__",y.prototype.mexTopo="__MEX__",y.prototype.mhlTopo="__MHL__",y.prototype.mkdTopo="__MKD__",y.prototype.mliTopo="__MLI__",y.prototype.mltTopo="__MLT__",y.prototype.mmrTopo="__MMR__",y.prototype.mneTopo="__MNE__",y.prototype.mngTopo="__MNG__",y.prototype.mnpTopo="__MNP__",y.prototype.mozTopo="__MOZ__",y.prototype.mrtTopo="__MRT__",y.prototype.msrTopo="__MSR__",y.prototype.musTopo="__MUS__",y.prototype.mwiTopo="__MWI__",y.prototype.mysTopo="__MYS__",y.prototype.namTopo="__NAM__",y.prototype.nclTopo="__NCL__",y.prototype.nerTopo="__NER__",y.prototype.nfkTopo="__NFK__",y.prototype.ngaTopo="__NGA__",y.prototype.nicTopo="__NIC__",y.prototype.niuTopo="__NIU__",y.prototype.nldTopo="__NLD__",y.prototype.nplTopo="__NPL__",y.prototype.nruTopo="__NRU__",y.prototype.nulTopo="__NUL__",y.prototype.nzlTopo="__NZL__",y.prototype.omnTopo="__OMN__",y.prototype.pakTopo="__PAK__",y.prototype.panTopo="__PAN__",y.prototype.pcnTopo="__PCN__",y.prototype.perTopo="__PER__",y.prototype.pgaTopo="__PGA__",y.prototype.phlTopo="__PHL__",y.prototype.plwTopo="__PLW__",y.prototype.pngTopo="__PNG__",y.prototype.polTopo="__POL__",y.prototype.priTopo="__PRI__",y.prototype.prkTopo="__PRK__",y.prototype.prtTopo="__PRT__",y.prototype.pryTopo="__PRY__",y.prototype.pyfTopo="__PYF__",y.prototype.qatTopo="__QAT__",y.prototype.rouTopo="__ROU__",y.prototype.rusTopo="__RUS__",y.prototype.rwaTopo="__RWA__",y.prototype.sahTopo="__SAH__",y.prototype.sauTopo="__SAU__",y.prototype.scrTopo="__SCR__",y.prototype.sdnTopo="__SDN__",y.prototype.sdsTopo="__SDS__",y.prototype.senTopo="__SEN__",y.prototype.serTopo="__SER__",y.prototype.sgpTopo="__SGP__",y.prototype.sgsTopo="__SGS__",y.prototype.shnTopo="__SHN__",y.prototype.slbTopo="__SLB__",y.prototype.sleTopo="__SLE__",y.prototype.slvTopo="__SLV__",y.prototype.smrTopo="__SMR__",y.prototype.solTopo="__SOL__",y.prototype.somTopo="__SOM__",y.prototype.spmTopo="__SPM__",y.prototype.srbTopo="__SRB__",y.prototype.stpTopo="__STP__",y.prototype.surTopo="__SUR__",y.prototype.svkTopo="__SVK__",y.prototype.svnTopo="__SVN__",y.prototype.sweTopo="__SWE__",y.prototype.swzTopo="__SWZ__",y.prototype.sxmTopo="__SXM__",y.prototype.sycTopo="__SYC__",y.prototype.syrTopo="__SYR__",y.prototype.tcaTopo="__TCA__",y.prototype.tcdTopo="__TCD__",y.prototype.tgoTopo="__TGO__",y.prototype.thaTopo="__THA__",y.prototype.tjkTopo="__TJK__",y.prototype.tkmTopo="__TKM__",y.prototype.tlsTopo="__TLS__",y.prototype.tonTopo="__TON__",y.prototype.ttoTopo="__TTO__",y.prototype.tunTopo="__TUN__",y.prototype.turTopo="__TUR__",y.prototype.tuvTopo="__TUV__",y.prototype.twnTopo="__TWN__",y.prototype.tzaTopo="__TZA__",y.prototype.ugaTopo="__UGA__",y.prototype.ukrTopo="__UKR__",y.prototype.umiTopo="__UMI__",y.prototype.uryTopo="__URY__",y.prototype.usaTopo="__USA__",y.prototype.usgTopo="__USG__",y.prototype.uzbTopo="__UZB__",y.prototype.vatTopo="__VAT__",y.prototype.vctTopo="__VCT__",y.prototype.venTopo="__VEN__",y.prototype.vgbTopo="__VGB__",y.prototype.virTopo="__VIR__",y.prototype.vnmTopo="__VNM__",y.prototype.vutTopo="__VUT__",y.prototype.wlfTopo="__WLF__",y.prototype.wsbTopo="__WSB__",y.prototype.wsmTopo="__WSM__",y.prototype.yemTopo="__YEM__",y.prototype.zafTopo="__ZAF__",y.prototype.zmbTopo="__ZMB__",y.prototype.zweTopo="__ZWE__",y.prototype.latLngToXY=function(o,t){return this.projection([t,o])},y.prototype.addLayer=function(o,t,p){return(p?this.svg.insert("g",":first-child"):this.svg.append("g")).attr("id",t||"").attr("class",o||"")},y.prototype.updateChoropleth=function(o){var t=this.svg;for(var p in o)if(o.hasOwnProperty(p)){var e,_=o[p];if(!p)continue;e="string"==typeof _?_:"string"==typeof _.color?_.color:this.options.fills[_.fillKey],_===Object(_)&&(this.options.data[p]=l(_,this.options.data[p]||{}),this.svg.select("."+p).attr("data-info",JSON.stringify(this.options.data[p]))),t.selectAll("."+p).transition().style("fill",e)}},y.prototype.updatePopup=function(o,t,p){var e=this;o.on("mousemove",null),o.on("mousemove",function(){var _=d.mouse(e.options.element);d.select(e.svg[0][0].parentNode).select(".datamaps-hoverover").style("top",_[1]+30+"px").html(function(){var e=JSON.parse(o.attr("data-info"));try{return p.popupTemplate(t,e)}catch(o){return""}}).style("left",_[0]+"px")}),d.select(e.svg[0][0].parentNode).select(".datamaps-hoverover").style("display","block")},y.prototype.addPlugin=function(o,t){var p=this;void 0===y.prototype[o]&&(y.prototype[o]=function(e,_,r,i){var a;void 0===i&&(i=!1),"function"==typeof _&&(r=_,_=void 0),_=l(_||{},p.options[o+"Config"]),!i&&this.options[o+"Layer"]?(a=this.options[o+"Layer"],_=_||this.options[o+"Options"]):(a=this.addLayer(o),this.options[o+"Layer"]=a,this.options[o+"Options"]=_),t.apply(this,[a,e,_]),r&&r(a)})},d=p("O72r"),h=p("tiYs"),o.exports=y,window.jQuery&&(window.jQuery.fn.datamaps=function(o,t){(o=o||{}).element=this[0];var p=new y(o);return"function"==typeof t&&t(p,o),this})}()}}]);