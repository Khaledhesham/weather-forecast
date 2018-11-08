(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{ewL8:function(o,t,p){!function(){function t(o,t,p){void 0===p&&(p=t,optionsValues=void 0);var e=void 0!==o?o:t;if(void 0===e)return null;if("function"==typeof e){var _=[p];return p.geography&&(_=[p.geography,p.data]),e.apply(null,_)}return e}function e(o){var p=this.options.fills,e=this.options.data||{},_=this.options.geographyConfig,r=this.svg.select("g.datamaps-subunits");r.empty()&&(r=this.addLayer("datamaps-subunits",null,!0));var i=h.feature(o,o.objects[this.options.scope]).features;_.hideAntarctica&&(i=i.filter(function(o){return"ATA"!==o.id})),_.hideHawaiiAndAlaska&&(i=i.filter(function(o){return"HI"!==o.id&&"AK"!==o.id})),r.selectAll("path.datamaps-subunit").data(i).enter().append("path").attr("d",this.path).attr("class",function(o){return"datamaps-subunit "+o.id}).attr("data-info",function(o){return JSON.stringify(e[o.id])}).style("fill",function(o){var _,r=e[o.id];return r&&r.fillKey&&(_=p[t(r.fillKey,{data:e[o.id],geography:o})]),void 0===_&&(_=t(r&&r.fillColor,p.defaultFill,{data:e[o.id],geography:o})),_}).style("stroke-width",_.borderWidth).style("stroke",_.borderColor)}function _(){var o=this.svg,p=this,e=this.options.geographyConfig;(e.highlightOnHover||e.popupOnHover)&&o.selectAll(".datamaps-subunit").on("mouseover",function(_){var r=d.select(this),i=p.options.data[_.id]||{};if(e.highlightOnHover){var a={fill:r.style("fill"),stroke:r.style("stroke"),"stroke-width":r.style("stroke-width"),"fill-opacity":r.style("fill-opacity")};r.style("fill",t(i.highlightFillColor,e.highlightFillColor,i)).style("stroke",t(i.highlightBorderColor,e.highlightBorderColor,i)).style("stroke-width",t(i.highlightBorderWidth,e.highlightBorderWidth,i)).style("fill-opacity",t(i.highlightFillOpacity,e.highlightFillOpacity,i)).attr("data-previousAttributes",JSON.stringify(a)),/((MSIE)|(Trident))/.test(navigator.userAgent)||(function(){this.parentNode.appendChild(this)}).call(this)}e.popupOnHover&&p.updatePopup(r,_,e,o)}).on("mouseout",function(){var o=d.select(this);if(e.highlightOnHover){var t=JSON.parse(o.attr("data-previousAttributes"));for(var p in t)o.style(p,t[p])}o.on("mousemove",null),d.selectAll(".datamaps-hoverover").style("display","none")})}function r(o,t,p){if(t=t||{},this.options.fills){var e="<dl>",_="";for(var r in t.legendTitle&&(e="<h2>"+t.legendTitle+"</h2>"+e),this.options.fills){if("defaultFill"===r){if(!t.defaultFillName)continue;_=t.defaultFillName}else _=t.labels&&t.labels[r]?t.labels[r]:r+": ";e+="<dt>"+_+"</dt>",e+='<dd style="background-color:'+this.options.fills[r]+'">&nbsp;</dd>'}e+="</dl>",d.select(this.options.element).append("div").attr("class","datamaps-legend").html(e)}}function i(o,t){var p=d.geo.graticule();this.svg.insert("path",".datamaps-subunits").datum(p).attr("class","datamaps-graticule").attr("d",this.path)}function a(o,p,e){var _=this;if(!p||p&&!p.slice)throw"Datamaps Error - arcs must be an array";for(var r=0;r<p.length;r++)p[r]=l(p[r],p[r].options),delete p[r].options;void 0===e&&(e=T.arcConfig);var i=o.selectAll("path.datamaps-arc").data(p,JSON.stringify),a=d.geo.path().projection(_.projection);i.enter().append("svg:path").attr("class","datamaps-arc").style("stroke-linecap","round").style("stroke",function(o){return t(o.strokeColor,e.strokeColor,o)}).style("fill","none").style("stroke-width",function(o){return t(o.strokeWidth,e.strokeWidth,o)}).attr("d",function(o){var p=_.latLngToXY(t(o.origin.latitude,o),t(o.origin.longitude,o)),r=_.latLngToXY(t(o.destination.latitude,o),t(o.destination.longitude,o)),i=[(p[0]+r[0])/2,(p[1]+r[1])/2];if(e.greatArc){var n=d.geo.greatArc().source(function(o){return[t(o.origin.longitude,o),t(o.origin.latitude,o)]}).target(function(o){return[t(o.destination.longitude,o),t(o.destination.latitude,o)]});return a(n(o))}var s=t(o.arcSharpness,e.arcSharpness,o);return"M"+p[0]+","+p[1]+"S"+(i[0]+50*s)+","+(i[1]-75*s)+","+r[0]+","+r[1]}).transition().delay(100).style("fill",function(o){var p=this.getTotalLength();return this.style.transition=this.style.WebkitTransition="none",this.style.strokeDasharray=p+" "+p,this.style.strokeDashoffset=p,this.getBoundingClientRect(),this.style.transition=this.style.WebkitTransition="stroke-dashoffset "+t(o.animationSpeed,e.animationSpeed,o)+"ms ease-out",this.style.strokeDashoffset="0","none"}),i.exit().transition().style("opacity",0).remove()}function n(o,t){var p=this;t=t||{};var e=this.projection([-67.707617,42.722131]);this.svg.selectAll(".datamaps-subunit").attr("data-foo",function(_){var r,i,a=p.path.centroid(_),n=7.5,s=5;["FL","KY","MI"].indexOf(_.id)>-1&&(n=-2.5),"NY"===_.id&&(n=-1),"MI"===_.id&&(s=18),"LA"===_.id&&(n=13),r=a[0]-n,i=a[1]+s;var l=["VT","NH","MA","RI","CT","NJ","DE","MD","DC"].indexOf(_.id);return l>-1&&(r=e[0],i=e[1]+l*(2+(t.fontSize||12)),o.append("line").attr("x1",r-3).attr("y1",i-5).attr("x2",a[0]).attr("y2",a[1]).style("stroke",t.labelColor||"#000").style("stroke-width",t.lineWidth||1)),o.append("text").attr("x",r).attr("y",i).style("font-size",(t.fontSize||10)+"px").style("font-family",t.fontFamily||"Verdana").style("fill",t.labelColor||"#000").text(_.id),"bar"})}function s(o,p,e){function _(o){return void 0!==o&&void 0!==o.latitude&&void 0!==o.longitude}var r=this,i=this.options.fills,a=this.options.filters,n=this.svg;if(!p||p&&!p.slice)throw"Datamaps Error - bubbles must be an array";var s=o.selectAll("circle.datamaps-bubble").data(p,e.key);s.enter().append("svg:circle").attr("class","datamaps-bubble").attr("cx",function(o){var t;return _(o)?t=r.latLngToXY(o.latitude,o.longitude):o.centered&&(t=r.path.centroid(n.select("path."+o.centered).data()[0])),t?t[0]:void 0}).attr("cy",function(o){var t;return _(o)?t=r.latLngToXY(o.latitude,o.longitude):o.centered&&(t=r.path.centroid(n.select("path."+o.centered).data()[0])),t?t[1]:void 0}).attr("r",function(o){return e.animate?0:t(o.radius,e.radius,o)}).attr("data-info",function(o){return JSON.stringify(o)}).attr("filter",function(o){return a[t(o.filterKey,e.filterKey,o)]||void 0}).style("stroke",function(o){return t(o.borderColor,e.borderColor,o)}).style("stroke-width",function(o){return t(o.borderWidth,e.borderWidth,o)}).style("fill-opacity",function(o){return t(o.fillOpacity,e.fillOpacity,o)}).style("fill",function(o){return i[t(o.fillKey,e.fillKey,o)]||i.defaultFill}).on("mouseover",function(o){var p=d.select(this);if(e.highlightOnHover){var _={fill:p.style("fill"),stroke:p.style("stroke"),"stroke-width":p.style("stroke-width"),"fill-opacity":p.style("fill-opacity")};p.style("fill",t(o.highlightFillColor,e.highlightFillColor,o)).style("stroke",t(o.highlightBorderColor,e.highlightBorderColor,o)).style("stroke-width",t(o.highlightBorderWidth,e.highlightBorderWidth,o)).style("fill-opacity",t(o.highlightFillOpacity,e.highlightFillOpacity,o)).attr("data-previousAttributes",JSON.stringify(_))}e.popupOnHover&&r.updatePopup(p,o,e,n)}).on("mouseout",function(o){var t=d.select(this);if(e.highlightOnHover){var p=JSON.parse(t.attr("data-previousAttributes"));for(var _ in p)t.style(_,p[_])}d.selectAll(".datamaps-hoverover").style("display","none")}),s.transition().duration(400).attr("r",function(o){return t(o.radius,e.radius,o)}),s.exit().transition().delay(e.exitDelay).attr("r",0).remove()}function l(o){return Array.prototype.slice.call(arguments,1).forEach(function(t){if(t)for(var p in t)null==o[p]&&(o[p]=t[p])}),o}function y(o){if(void 0===d||void 0===h)throw new Error("Include d3.js (v3.0.3 or greater) and topojson on this page before creating a new map");return this.options=l(o,T),this.options.geographyConfig=l(o.geographyConfig,T.geographyConfig),this.options.projectionConfig=l(o.projectionConfig,T.projectionConfig),this.options.bubblesConfig=l(o.bubblesConfig,T.bubblesConfig),this.options.arcConfig=l(o.arcConfig,T.arcConfig),d.select(this.options.element).select("svg").length>0&&(function(o,t,p){return this.svg=d.select(o).append("svg").attr("width",p||o.offsetWidth).attr("data-width",p||o.offsetWidth).attr("class","datamap").attr("height",t||o.offsetHeight).style("overflow","hidden"),this.options.responsive&&(d.select(this.options.element).style({position:"relative","padding-bottom":100*this.options.aspectRatio+"%"}),d.select(this.options.element).select("svg").style({position:"absolute",width:"100%",height:"100%"}),d.select(this.options.element).select("svg").select("g").selectAll("path").style("vector-effect","non-scaling-stroke")),this.svg}).call(this,this.options.element,this.options.height,this.options.width),this.addPlugin("bubbles",s),this.addPlugin("legend",r),this.addPlugin("arc",a),this.addPlugin("labels",n),this.addPlugin("graticule",i),this.options.disableDefaultStyles||d.select(".datamaps-style-block").empty()&&d.select("head").append("style").attr("class","datamaps-style-block").html('.datamap path.datamaps-graticule { fill: none; stroke: #777; stroke-width: 0.5px; stroke-opacity: .5; pointer-events: none; } .datamap .labels {pointer-events: none;} .datamap path {stroke: #FFFFFF; stroke-width: 1px;} .datamaps-legend dt, .datamaps-legend dd { float: left; margin: 0 3px 0 0;} .datamaps-legend dd {width: 20px; margin-right: 6px; border-radius: 3px;} .datamaps-legend {padding-bottom: 20px; z-index: 1001; position: absolute; left: 4px; font-size: 12px; font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;} .datamaps-hoverover {display: none; font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; } .hoverinfo {padding: 4px; border-radius: 1px; background-color: #FFF; box-shadow: 1px 1px 5px #CCC; font-size: 12px; border: 1px solid #CCC; } .hoverinfo hr {border:1px dotted #CCC; }'),this.draw()}var d=window.d3,h=window.topojson,T={scope:"world",responsive:!1,aspectRatio:.5625,setProjection:function(o,t){var p,e,_=t.width||o.offsetWidth,r=t.height||o.offsetHeight,i=this.svg;return t&&void 0===t.scope&&(t.scope="world"),"usa"===t.scope?p=d.geo.albersUsa().scale(_).translate([_/2,r/2]):"world"===t.scope&&(p=d.geo[t.projection]().scale((_+1)/2/Math.PI).translate([_/2,r/("mercator"===t.projection?1.45:1.8)])),"orthographic"===t.projection&&(i.append("defs").append("path").datum({type:"Sphere"}).attr("id","sphere").attr("d",e),i.append("use").attr("class","stroke").attr("xlink:href","#sphere"),i.append("use").attr("class","fill").attr("xlink:href","#sphere"),p.scale(250).clipAngle(90).rotate(t.projectionConfig.rotation)),{path:e=d.geo.path().projection(p),projection:p}},projection:"equirectangular",dataType:"json",data:{},done:function(){},fills:{defaultFill:"#ABDDA4"},filters:{},geographyConfig:{dataUrl:null,hideAntarctica:!0,hideHawaiiAndAlaska:!1,borderWidth:1,borderColor:"#FDFDFD",popupTemplate:function(o,t){return'<div class="hoverinfo"><strong>'+o.properties.name+"</strong></div>"},popupOnHover:!0,highlightOnHover:!0,highlightFillColor:"#FC8D59",highlightBorderColor:"rgba(250, 15, 160, 0.2)",highlightBorderWidth:2},projectionConfig:{rotation:[97,0]},bubblesConfig:{borderWidth:2,borderColor:"#FFFFFF",popupOnHover:!0,radius:null,popupTemplate:function(o,t){return'<div class="hoverinfo"><strong>'+t.name+"</strong></div>"},fillOpacity:.75,animate:!0,highlightOnHover:!0,highlightFillColor:"#FC8D59",highlightBorderColor:"rgba(250, 15, 160, 0.2)",highlightBorderWidth:2,highlightFillOpacity:.85,exitDelay:100,key:JSON.stringify},arcConfig:{strokeColor:"#DD1C77",strokeWidth:1,arcSharpness:1,animationSpeed:600}};y.prototype.resize=function(){var o=this.options;if(o.responsive){var t=o.element.clientWidth,p=d.select(o.element).select("svg").attr("data-width");d.select(o.element).select("svg").selectAll("g").attr("transform","scale("+t/p+")")}},y.prototype.draw=function(){function o(o){t.options.dataUrl&&d[t.options.dataType](t.options.dataUrl,function(o){if("csv"===t.options.dataType&&o&&o.slice){for(var p={},e=0;e<o.length;e++)p[o[e].id]=o[e];o=p}Datamaps.prototype.updateChoropleth.call(t,o)}),e.call(t,o),_.call(t),(t.options.geographyConfig.popupOnHover||t.options.bubblesConfig.popupOnHover)&&(hoverover=d.select(t.options.element).append("div").attr("class","datamaps-hoverover").style("z-index",10001).style("position","absolute")),t.options.done(t)}var t=this,p=t.options,r=p.setProjection.apply(t,[p.element,p]);return this.path=r.path,this.projection=r.projection,p.geographyConfig.dataUrl?d.json(p.geographyConfig.dataUrl,function(p,e){if(p)throw new Error(p);t.customTopo=e,o(e)}):o(this[p.scope+"Topo"]||p.geographyConfig.dataJson),this},y.prototype.worldTopo="__WORLD__",y.prototype.abwTopo="__ABW__",y.prototype.afgTopo="__AFG__",y.prototype.agoTopo="__AGO__",y.prototype.aiaTopo="__AIA__",y.prototype.albTopo="__ALB__",y.prototype.aldTopo="__ALD__",y.prototype.andTopo="__AND__",y.prototype.areTopo="__ARE__",y.prototype.argTopo="__ARG__",y.prototype.armTopo="__ARM__",y.prototype.asmTopo="__ASM__",y.prototype.ataTopo="__ATA__",y.prototype.atcTopo="__ATC__",y.prototype.atfTopo="__ATF__",y.prototype.atgTopo="__ATG__",y.prototype.ausTopo="__AUS__",y.prototype.autTopo="__AUT__",y.prototype.azeTopo="__AZE__",y.prototype.bdiTopo="__BDI__",y.prototype.belTopo="__BEL__",y.prototype.benTopo="__BEN__",y.prototype.bfaTopo="__BFA__",y.prototype.bgdTopo="__BGD__",y.prototype.bgrTopo="__BGR__",y.prototype.bhrTopo="__BHR__",y.prototype.bhsTopo="__BHS__",y.prototype.bihTopo="__BIH__",y.prototype.bjnTopo="__BJN__",y.prototype.blmTopo="__BLM__",y.prototype.blrTopo="__BLR__",y.prototype.blzTopo="__BLZ__",y.prototype.bmuTopo="__BMU__",y.prototype.bolTopo="__BOL__",y.prototype.braTopo="__BRA__",y.prototype.brbTopo="__BRB__",y.prototype.brnTopo="__BRN__",y.prototype.btnTopo="__BTN__",y.prototype.norTopo="__NOR__",y.prototype.bwaTopo="__BWA__",y.prototype.cafTopo="__CAF__",y.prototype.canTopo="__CAN__",y.prototype.cheTopo="__CHE__",y.prototype.chlTopo="__CHL__",y.prototype.chnTopo="__CHN__",y.prototype.civTopo="__CIV__",y.prototype.clpTopo="__CLP__",y.prototype.cmrTopo="__CMR__",y.prototype.codTopo="__COD__",y.prototype.cogTopo="__COG__",y.prototype.cokTopo="__COK__",y.prototype.colTopo="__COL__",y.prototype.comTopo="__COM__",y.prototype.cpvTopo="__CPV__",y.prototype.criTopo="__CRI__",y.prototype.csiTopo="__CSI__",y.prototype.cubTopo="__CUB__",y.prototype.cuwTopo="__CUW__",y.prototype.cymTopo="__CYM__",y.prototype.cynTopo="__CYN__",y.prototype.cypTopo="__CYP__",y.prototype.czeTopo="__CZE__",y.prototype.deuTopo="__DEU__",y.prototype.djiTopo="__DJI__",y.prototype.dmaTopo="__DMA__",y.prototype.dnkTopo="__DNK__",y.prototype.domTopo="__DOM__",y.prototype.dzaTopo="__DZA__",y.prototype.ecuTopo="__ECU__",y.prototype.egyTopo="__EGY__",y.prototype.eriTopo="__ERI__",y.prototype.esbTopo="__ESB__",y.prototype.espTopo="__ESP__",y.prototype.estTopo="__EST__",y.prototype.ethTopo="__ETH__",y.prototype.finTopo="__FIN__",y.prototype.fjiTopo="__FJI__",y.prototype.flkTopo="__FLK__",y.prototype.fraTopo="__FRA__",y.prototype.froTopo="__FRO__",y.prototype.fsmTopo="__FSM__",y.prototype.gabTopo="__GAB__",y.prototype.psxTopo="__PSX__",y.prototype.gbrTopo="__GBR__",y.prototype.geoTopo="__GEO__",y.prototype.ggyTopo="__GGY__",y.prototype.ghaTopo="__GHA__",y.prototype.gibTopo="__GIB__",y.prototype.ginTopo="__GIN__",y.prototype.gmbTopo="__GMB__",y.prototype.gnbTopo="__GNB__",y.prototype.gnqTopo="__GNQ__",y.prototype.grcTopo="__GRC__",y.prototype.grdTopo="__GRD__",y.prototype.grlTopo="__GRL__",y.prototype.gtmTopo="__GTM__",y.prototype.gumTopo="__GUM__",y.prototype.guyTopo="__GUY__",y.prototype.hkgTopo="__HKG__",y.prototype.hmdTopo="__HMD__",y.prototype.hndTopo="__HND__",y.prototype.hrvTopo="__HRV__",y.prototype.htiTopo="__HTI__",y.prototype.hunTopo="__HUN__",y.prototype.idnTopo="__IDN__",y.prototype.imnTopo="__IMN__",y.prototype.indTopo="__IND__",y.prototype.ioaTopo="__IOA__",y.prototype.iotTopo="__IOT__",y.prototype.irlTopo="__IRL__",y.prototype.irnTopo="__IRN__",y.prototype.irqTopo="__IRQ__",y.prototype.islTopo="__ISL__",y.prototype.isrTopo="__ISR__",y.prototype.itaTopo="__ITA__",y.prototype.jamTopo="__JAM__",y.prototype.jeyTopo="__JEY__",y.prototype.jorTopo="__JOR__",y.prototype.jpnTopo="__JPN__",y.prototype.kabTopo="__KAB__",y.prototype.kasTopo="__KAS__",y.prototype.kazTopo="__KAZ__",y.prototype.kenTopo="__KEN__",y.prototype.kgzTopo="__KGZ__",y.prototype.khmTopo="__KHM__",y.prototype.kirTopo="__KIR__",y.prototype.knaTopo="__KNA__",y.prototype.korTopo="__KOR__",y.prototype.kosTopo="__KOS__",y.prototype.kwtTopo="__KWT__",y.prototype.laoTopo="__LAO__",y.prototype.lbnTopo={type:"Topology",objects:{lbn:{type:"GeometryCollection",geometries:[{type:"Polygon",properties:{name:"Beqaa"},id:"LB.BI",arcs:[[0,1,2,3,4]]},{type:"Polygon",properties:{name:"North Lebanon"},id:"LB.AS",arcs:[[-4,5,6]]},{type:"Polygon",properties:{name:"Beirut"},id:"LB.BA",arcs:[[7,8]]},{type:"Polygon",properties:{name:"Mount Lebanon"},id:"LB.JL",arcs:[[-3,9,10,-8,11,-6]]},{type:"Polygon",properties:{name:"An Nabatiyah"},id:"LB.NA",arcs:[[-1,12,13]]},{type:"Polygon",properties:{name:"South Lebanon"},id:"LB.JA",arcs:[[-2,-14,14,-10]]}]}},arcs:[[[4955,2225],[-5,1],[-108,22],[-305,31],[-24,14],[-28,27],[-65,107],[-19,44],[-38,38],[-135,62],[-130,34],[-33,-11],[-46,-24],[-91,-72],[-72,-68],[-55,-69],[-65,-65],[-52,-16],[-127,34]],[[3557,2314],[-22,132],[-30,32],[-33,56],[-12,23],[-26,80],[-18,146]],[[3416,2783],[58,37],[28,23],[49,54],[18,27],[17,38],[92,295],[76,157],[45,65],[383,446],[65,27],[26,15],[34,37],[55,46],[5,17],[-1,14],[-103,80],[182,204],[50,1],[75,-7],[20,0],[19,2],[21,6],[17,10],[15,12],[43,55],[-29,46],[-220,120],[432,395],[113,152],[29,50],[5,14],[74,70],[301,210],[77,27],[186,216],[297,458],[24,372],[11,43],[54,102]],[[6059,6719],[153,10],[18,4],[17,7],[26,21],[138,180],[21,54],[22,158],[248,240],[203,162],[74,199],[13,20],[24,26],[58,46],[135,81],[55,42],[33,30],[182,287],[7,15],[-27,76],[127,124],[9,15],[4,14],[1,26],[2,12],[4,10],[7,10],[26,26],[296,175],[16,13],[83,26],[140,13],[2,0]],[[8176,8841],[19,-27],[18,-4],[19,-1],[18,1],[18,4],[129,30],[195,7],[182,-11],[91,-25],[0,-1],[43,-102],[65,-79],[90,-57],[112,-38],[97,-91],[48,-24],[48,13],[106,-58],[37,-54],[-6,-68],[-23,-100],[-18,-43],[-24,-29],[-21,-31],[-6,-51],[18,-49],[33,-47],[143,-155],[71,-59],[48,-15],[48,2],[44,-7],[34,-48],[-14,-80],[-64,-67],[-50,-79],[32,-116],[43,-88],[161,-122],[35,-60],[4,-6],[-188,-158],[-153,-198],[-298,-195],[-130,-125],[-38,-87],[-13,-72],[-37,-57],[-108,-41],[-91,-4],[-143,41],[-77,5],[-140,-55],[-221,-215],[-264,-178],[-105,-99],[-91,-109],[-142,-222],[11,-22],[43,-58],[42,-38],[196,-117],[261,-34],[114,-54],[13,-126],[-80,-81],[-128,-16],[-250,46],[-342,129],[-115,17],[-101,-29],[-93,-58],[-107,-50],[-139,-2],[-53,26],[-85,82],[-44,19],[-238,-112],[-116,-38],[-123,-25],[-107,-34],[-66,-67],[-89,-130],[-220,-145],[-91,-105],[-41,-70],[-121,-86],[-50,-54],[-9,-52],[19,-111],[-18,-59],[-32,-23],[-86,-26],[-27,-21],[-25,-130],[88,-43],[147,-21],[155,-67],[95,-20],[122,-47],[111,-64],[59,-69],[-22,-114],[-102,-93],[-137,-69],[-126,-45],[-156,2],[-157,-40],[-75,-81],[90,-124],[-106,-196],[-206,-134],[-122,-56],[-166,-77]],[[6059,6719],[-64,26],[-41,-10],[-43,2],[-46,6],[-222,83],[-37,27],[-12,5],[-34,9],[-19,2],[-17,-3],[-16,-18],[-16,-30],[-12,-11],[-16,-7],[-18,-2],[-18,0],[-49,10],[-41,15],[-48,-1],[-38,9],[-132,64],[-52,17],[-83,49],[-36,8],[-50,3],[-89,-7],[-83,-15],[-48,-14],[-30,-3],[-164,4],[-96,-16],[-23,-1],[-121,13],[-441,171],[-172,13],[-7,3],[-1,0]],[[3624,7120],[19,28],[4,192],[31,192],[81,162],[156,104],[114,-72],[109,128],[100,195],[89,126],[369,154],[116,120],[-121,148],[0,38],[123,-25],[528,105],[355,258],[107,59],[68,55],[37,86],[6,288],[-18,129],[-42,108],[-71,70],[85,2],[58,-12],[49,-17],[116,-72],[144,-32],[152,-3],[176,19],[165,-9],[291,-16],[29,7],[79,36],[41,8],[34,-11],[78,-45],[40,-11],[402,18],[66,22],[61,50],[24,57],[3,120],[22,47],[138,73],[99,-49],[157,-217],[134,-91],[157,-42],[165,3],[161,39],[-27,-193],[-47,-28],[-71,44],[-98,21],[-98,-46],[-14,-74],[8,-90],[-30,-96],[-130,-78],[-182,-75],[-111,-91],[66,-95]],[[2981,5212],[-1,-28],[-78,-182],[-73,-5],[-17,-15],[-25,-28],[-24,-12],[-88,-2],[-127,20]],[[2548,4960],[2,45],[-22,72],[-41,59],[-22,51],[35,48],[72,18],[87,-11],[77,-25],[40,-28],[46,0],[64,28],[95,-5]],[[3416,2783],[39,173],[-6,16],[-6,23],[-25,9],[-34,9],[-21,10],[-31,23],[-9,20],[2,17],[14,38],[6,51],[3,124],[-20,48],[-27,30],[-29,4],[-22,-5],[-21,-9],[-16,-11],[-16,-6],[-16,-2],[-17,0],[-59,-10],[-32,-1],[-14,-2],[-12,-5],[-8,-8],[-7,-9],[-8,-8],[-12,-4],[-29,-6],[-9,-7],[-13,-19],[-9,-7],[-32,-17],[-14,-3],[-29,-2],[-45,-9],[-36,2],[-16,-2],[-25,-7],[-12,-5],[-78,-22],[-47,-9],[-66,3],[-18,-2],[-10,-7],[-7,-9],[-11,-8],[-25,2],[-74,-2],[-163,24],[-171,68],[-196,7],[-33,10]],[[1844,3271],[157,329],[-42,42],[103,69],[78,252],[112,55],[-4,74],[262,493],[27,121],[11,254]],[[2981,5212],[62,-4],[97,27],[42,41],[63,122],[35,50],[2,25],[-10,10],[-41,3],[56,51],[80,147],[49,60],[43,12],[111,2],[27,25],[-3,56],[-31,29],[-35,17],[-22,23],[-1,150],[109,268],[29,190],[-21,72],[-94,135],[-22,86],[0,210],[22,45],[94,52],[2,4]],[[4955,2225],[-160,-74],[-102,-94],[-133,-205],[-108,-93],[-79,-39],[-92,-31],[-95,-21],[-88,-7],[-118,-25],[-252,-204],[-133,-82],[-105,-18],[-96,-17],[-59,-46],[21,-112],[0,-1],[-5,-24],[0,-2],[-38,26],[-2,1],[-85,48],[-120,147],[-38,36],[-78,-7],[-45,-58],[-39,-84],[-60,-83],[-52,-135],[-16,-302],[-35,-156],[-57,-103],[-124,-172],[-33,-93],[-204,-13],[-318,-106],[-375,-76],[-88,10],[-62,62],[-46,73],[-66,62],[-74,47],[-39,13]],[[1257,267],[1,1],[9,43],[5,70],[-3,16],[-3,33],[2,14],[9,28],[2,28],[2,14],[82,168],[18,22],[36,3],[51,-8],[16,0],[14,4],[11,6],[31,23],[16,20],[12,24],[5,62],[6,16],[28,5],[62,0],[19,3],[20,7],[65,32],[9,9],[-9,21],[-14,11],[-18,8],[-17,6],[-17,6],[-12,11],[2,14],[12,15],[37,18],[27,9],[43,11],[32,19],[37,31],[184,180],[31,23],[22,30],[12,32],[-1,100],[-5,25],[5,34],[64,69],[-103,-15],[-30,-18],[-27,-3],[-43,1],[-176,26],[-128,32],[-104,86],[29,96],[-16,40],[-17,12],[-17,10],[-72,31],[-17,2],[-18,-2],[-74,3],[-18,2],[-19,6],[-17,8],[-15,9],[-6,6],[13,6],[63,3],[25,9],[20,18],[21,38],[8,21],[4,18],[-1,8],[2,26],[4,14],[17,15],[32,15],[68,14],[34,-2],[23,-9],[11,-14],[12,-27],[8,-13],[15,-11],[30,-19],[12,-10],[7,-11],[15,-18],[15,-7],[14,4],[12,15],[-9,53],[11,29],[119,168],[6,15],[2,15],[-2,13],[-10,10],[-14,1],[-35,-8],[-14,4],[-3,9],[9,20],[54,67],[15,25],[17,18],[19,11],[75,5],[42,6],[18,7],[15,12],[6,30],[-7,17],[-15,11],[-17,7],[-10,8],[64,29],[288,51],[50,-9],[42,1],[21,3],[38,10],[74,32],[19,6],[21,3],[38,1],[17,2],[19,6],[16,10],[13,12],[14,15],[1,1],[18,7],[14,0],[13,-4],[5,-2],[2,-2],[1,-1],[-5,-52],[-32,-151],[-1,-17],[21,-397],[-13,-83],[21,-49],[103,-178],[74,164],[33,41],[28,6],[13,5],[23,10],[12,4],[15,0],[14,-3],[13,-4],[16,-5],[21,-2],[38,4],[21,10],[17,16],[7,12],[29,66],[115,84],[39,13],[27,19],[55,79]],[[1257,267],[-34,12],[-81,0],[-246,-62],[-47,2],[-94,19],[-40,2],[-43,-12],[-74,-45],[-29,-9],[-532,31],[0,10],[8,27],[-30,-4],[-10,8],[0,15],[-5,19],[41,68],[60,70],[71,53],[147,48],[48,61],[41,70],[45,52],[-40,42],[40,5],[22,-8],[24,-39],[200,335],[29,183],[-138,155],[142,82],[100,114],[125,268],[17,81],[4,165],[25,85],[121,140],[42,76],[-27,77],[346,204],[173,141],[75,181],[14,79],[97,203]]],transform:{scale:[.00015046316711670186,.0001632130784078398],translate:[35.09961998800014,33.05558034200004]}},y.prototype.lbrTopo="__LBR__",y.prototype.lbyTopo="__LBY__",y.prototype.lcaTopo="__LCA__",y.prototype.lieTopo="__LIE__",y.prototype.lkaTopo="__LKA__",y.prototype.lsoTopo="__LSO__",y.prototype.ltuTopo="__LTU__",y.prototype.luxTopo="__LUX__",y.prototype.lvaTopo="__LVA__",y.prototype.macTopo="__MAC__",y.prototype.mafTopo="__MAF__",y.prototype.marTopo="__MAR__",y.prototype.mcoTopo="__MCO__",y.prototype.mdaTopo="__MDA__",y.prototype.mdgTopo="__MDG__",y.prototype.mdvTopo="__MDV__",y.prototype.mexTopo="__MEX__",y.prototype.mhlTopo="__MHL__",y.prototype.mkdTopo="__MKD__",y.prototype.mliTopo="__MLI__",y.prototype.mltTopo="__MLT__",y.prototype.mmrTopo="__MMR__",y.prototype.mneTopo="__MNE__",y.prototype.mngTopo="__MNG__",y.prototype.mnpTopo="__MNP__",y.prototype.mozTopo="__MOZ__",y.prototype.mrtTopo="__MRT__",y.prototype.msrTopo="__MSR__",y.prototype.musTopo="__MUS__",y.prototype.mwiTopo="__MWI__",y.prototype.mysTopo="__MYS__",y.prototype.namTopo="__NAM__",y.prototype.nclTopo="__NCL__",y.prototype.nerTopo="__NER__",y.prototype.nfkTopo="__NFK__",y.prototype.ngaTopo="__NGA__",y.prototype.nicTopo="__NIC__",y.prototype.niuTopo="__NIU__",y.prototype.nldTopo="__NLD__",y.prototype.nplTopo="__NPL__",y.prototype.nruTopo="__NRU__",y.prototype.nulTopo="__NUL__",y.prototype.nzlTopo="__NZL__",y.prototype.omnTopo="__OMN__",y.prototype.pakTopo="__PAK__",y.prototype.panTopo="__PAN__",y.prototype.pcnTopo="__PCN__",y.prototype.perTopo="__PER__",y.prototype.pgaTopo="__PGA__",y.prototype.phlTopo="__PHL__",y.prototype.plwTopo="__PLW__",y.prototype.pngTopo="__PNG__",y.prototype.polTopo="__POL__",y.prototype.priTopo="__PRI__",y.prototype.prkTopo="__PRK__",y.prototype.prtTopo="__PRT__",y.prototype.pryTopo="__PRY__",y.prototype.pyfTopo="__PYF__",y.prototype.qatTopo="__QAT__",y.prototype.rouTopo="__ROU__",y.prototype.rusTopo="__RUS__",y.prototype.rwaTopo="__RWA__",y.prototype.sahTopo="__SAH__",y.prototype.sauTopo="__SAU__",y.prototype.scrTopo="__SCR__",y.prototype.sdnTopo="__SDN__",y.prototype.sdsTopo="__SDS__",y.prototype.senTopo="__SEN__",y.prototype.serTopo="__SER__",y.prototype.sgpTopo="__SGP__",y.prototype.sgsTopo="__SGS__",y.prototype.shnTopo="__SHN__",y.prototype.slbTopo="__SLB__",y.prototype.sleTopo="__SLE__",y.prototype.slvTopo="__SLV__",y.prototype.smrTopo="__SMR__",y.prototype.solTopo="__SOL__",y.prototype.somTopo="__SOM__",y.prototype.spmTopo="__SPM__",y.prototype.srbTopo="__SRB__",y.prototype.stpTopo="__STP__",y.prototype.surTopo="__SUR__",y.prototype.svkTopo="__SVK__",y.prototype.svnTopo="__SVN__",y.prototype.sweTopo="__SWE__",y.prototype.swzTopo="__SWZ__",y.prototype.sxmTopo="__SXM__",y.prototype.sycTopo="__SYC__",y.prototype.syrTopo="__SYR__",y.prototype.tcaTopo="__TCA__",y.prototype.tcdTopo="__TCD__",y.prototype.tgoTopo="__TGO__",y.prototype.thaTopo="__THA__",y.prototype.tjkTopo="__TJK__",y.prototype.tkmTopo="__TKM__",y.prototype.tlsTopo="__TLS__",y.prototype.tonTopo="__TON__",y.prototype.ttoTopo="__TTO__",y.prototype.tunTopo="__TUN__",y.prototype.turTopo="__TUR__",y.prototype.tuvTopo="__TUV__",y.prototype.twnTopo="__TWN__",y.prototype.tzaTopo="__TZA__",y.prototype.ugaTopo="__UGA__",y.prototype.ukrTopo="__UKR__",y.prototype.umiTopo="__UMI__",y.prototype.uryTopo="__URY__",y.prototype.usaTopo="__USA__",y.prototype.usgTopo="__USG__",y.prototype.uzbTopo="__UZB__",y.prototype.vatTopo="__VAT__",y.prototype.vctTopo="__VCT__",y.prototype.venTopo="__VEN__",y.prototype.vgbTopo="__VGB__",y.prototype.virTopo="__VIR__",y.prototype.vnmTopo="__VNM__",y.prototype.vutTopo="__VUT__",y.prototype.wlfTopo="__WLF__",y.prototype.wsbTopo="__WSB__",y.prototype.wsmTopo="__WSM__",y.prototype.yemTopo="__YEM__",y.prototype.zafTopo="__ZAF__",y.prototype.zmbTopo="__ZMB__",y.prototype.zweTopo="__ZWE__",y.prototype.latLngToXY=function(o,t){return this.projection([t,o])},y.prototype.addLayer=function(o,t,p){return(p?this.svg.insert("g",":first-child"):this.svg.append("g")).attr("id",t||"").attr("class",o||"")},y.prototype.updateChoropleth=function(o){var t=this.svg;for(var p in o)if(o.hasOwnProperty(p)){var e,_=o[p];if(!p)continue;e="string"==typeof _?_:"string"==typeof _.color?_.color:this.options.fills[_.fillKey],_===Object(_)&&(this.options.data[p]=l(_,this.options.data[p]||{}),this.svg.select("."+p).attr("data-info",JSON.stringify(this.options.data[p]))),t.selectAll("."+p).transition().style("fill",e)}},y.prototype.updatePopup=function(o,t,p){var e=this;o.on("mousemove",null),o.on("mousemove",function(){var _=d.mouse(e.options.element);d.select(e.svg[0][0].parentNode).select(".datamaps-hoverover").style("top",_[1]+30+"px").html(function(){var e=JSON.parse(o.attr("data-info"));try{return p.popupTemplate(t,e)}catch(o){return""}}).style("left",_[0]+"px")}),d.select(e.svg[0][0].parentNode).select(".datamaps-hoverover").style("display","block")},y.prototype.addPlugin=function(o,t){var p=this;void 0===y.prototype[o]&&(y.prototype[o]=function(e,_,r,i){var a;void 0===i&&(i=!1),"function"==typeof _&&(r=_,_=void 0),_=l(_||{},p.options[o+"Config"]),!i&&this.options[o+"Layer"]?(a=this.options[o+"Layer"],_=_||this.options[o+"Options"]):(a=this.addLayer(o),this.options[o+"Layer"]=a,this.options[o+"Options"]=_),t.apply(this,[a,e,_]),r&&r(a)})},d=p("O72r"),h=p("tiYs"),o.exports=y,window.jQuery&&(window.jQuery.fn.datamaps=function(o,t){(o=o||{}).element=this[0];var p=new y(o);return"function"==typeof t&&t(p,o),this})}()}}]);