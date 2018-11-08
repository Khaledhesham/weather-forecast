(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{X6ga:function(o,t,p){!function(){function t(o,t,p){void 0===p&&(p=t,optionsValues=void 0);var e=void 0!==o?o:t;if(void 0===e)return null;if("function"==typeof e){var _=[p];return p.geography&&(_=[p.geography,p.data]),e.apply(null,_)}return e}function e(o){var p=this.options.fills,e=this.options.data||{},_=this.options.geographyConfig,r=this.svg.select("g.datamaps-subunits");r.empty()&&(r=this.addLayer("datamaps-subunits",null,!0));var i=h.feature(o,o.objects[this.options.scope]).features;_.hideAntarctica&&(i=i.filter(function(o){return"ATA"!==o.id})),_.hideHawaiiAndAlaska&&(i=i.filter(function(o){return"HI"!==o.id&&"AK"!==o.id})),r.selectAll("path.datamaps-subunit").data(i).enter().append("path").attr("d",this.path).attr("class",function(o){return"datamaps-subunit "+o.id}).attr("data-info",function(o){return JSON.stringify(e[o.id])}).style("fill",function(o){var _,r=e[o.id];return r&&r.fillKey&&(_=p[t(r.fillKey,{data:e[o.id],geography:o})]),void 0===_&&(_=t(r&&r.fillColor,p.defaultFill,{data:e[o.id],geography:o})),_}).style("stroke-width",_.borderWidth).style("stroke",_.borderColor)}function _(){var o=this.svg,p=this,e=this.options.geographyConfig;(e.highlightOnHover||e.popupOnHover)&&o.selectAll(".datamaps-subunit").on("mouseover",function(_){var r=d.select(this),i=p.options.data[_.id]||{};if(e.highlightOnHover){var a={fill:r.style("fill"),stroke:r.style("stroke"),"stroke-width":r.style("stroke-width"),"fill-opacity":r.style("fill-opacity")};r.style("fill",t(i.highlightFillColor,e.highlightFillColor,i)).style("stroke",t(i.highlightBorderColor,e.highlightBorderColor,i)).style("stroke-width",t(i.highlightBorderWidth,e.highlightBorderWidth,i)).style("fill-opacity",t(i.highlightFillOpacity,e.highlightFillOpacity,i)).attr("data-previousAttributes",JSON.stringify(a)),/((MSIE)|(Trident))/.test(navigator.userAgent)||(function(){this.parentNode.appendChild(this)}).call(this)}e.popupOnHover&&p.updatePopup(r,_,e,o)}).on("mouseout",function(){var o=d.select(this);if(e.highlightOnHover){var t=JSON.parse(o.attr("data-previousAttributes"));for(var p in t)o.style(p,t[p])}o.on("mousemove",null),d.selectAll(".datamaps-hoverover").style("display","none")})}function r(o,t,p){if(t=t||{},this.options.fills){var e="<dl>",_="";for(var r in t.legendTitle&&(e="<h2>"+t.legendTitle+"</h2>"+e),this.options.fills){if("defaultFill"===r){if(!t.defaultFillName)continue;_=t.defaultFillName}else _=t.labels&&t.labels[r]?t.labels[r]:r+": ";e+="<dt>"+_+"</dt>",e+='<dd style="background-color:'+this.options.fills[r]+'">&nbsp;</dd>'}e+="</dl>",d.select(this.options.element).append("div").attr("class","datamaps-legend").html(e)}}function i(o,t){var p=d.geo.graticule();this.svg.insert("path",".datamaps-subunits").datum(p).attr("class","datamaps-graticule").attr("d",this.path)}function a(o,p,e){var _=this;if(!p||p&&!p.slice)throw"Datamaps Error - arcs must be an array";for(var r=0;r<p.length;r++)p[r]=l(p[r],p[r].options),delete p[r].options;void 0===e&&(e=T.arcConfig);var i=o.selectAll("path.datamaps-arc").data(p,JSON.stringify),a=d.geo.path().projection(_.projection);i.enter().append("svg:path").attr("class","datamaps-arc").style("stroke-linecap","round").style("stroke",function(o){return t(o.strokeColor,e.strokeColor,o)}).style("fill","none").style("stroke-width",function(o){return t(o.strokeWidth,e.strokeWidth,o)}).attr("d",function(o){var p=_.latLngToXY(t(o.origin.latitude,o),t(o.origin.longitude,o)),r=_.latLngToXY(t(o.destination.latitude,o),t(o.destination.longitude,o)),i=[(p[0]+r[0])/2,(p[1]+r[1])/2];if(e.greatArc){var s=d.geo.greatArc().source(function(o){return[t(o.origin.longitude,o),t(o.origin.latitude,o)]}).target(function(o){return[t(o.destination.longitude,o),t(o.destination.latitude,o)]});return a(s(o))}var n=t(o.arcSharpness,e.arcSharpness,o);return"M"+p[0]+","+p[1]+"S"+(i[0]+50*n)+","+(i[1]-75*n)+","+r[0]+","+r[1]}).transition().delay(100).style("fill",function(o){var p=this.getTotalLength();return this.style.transition=this.style.WebkitTransition="none",this.style.strokeDasharray=p+" "+p,this.style.strokeDashoffset=p,this.getBoundingClientRect(),this.style.transition=this.style.WebkitTransition="stroke-dashoffset "+t(o.animationSpeed,e.animationSpeed,o)+"ms ease-out",this.style.strokeDashoffset="0","none"}),i.exit().transition().style("opacity",0).remove()}function s(o,t){var p=this;t=t||{};var e=this.projection([-67.707617,42.722131]);this.svg.selectAll(".datamaps-subunit").attr("data-foo",function(_){var r,i,a=p.path.centroid(_),s=7.5,n=5;["FL","KY","MI"].indexOf(_.id)>-1&&(s=-2.5),"NY"===_.id&&(s=-1),"MI"===_.id&&(n=18),"LA"===_.id&&(s=13),r=a[0]-s,i=a[1]+n;var l=["VT","NH","MA","RI","CT","NJ","DE","MD","DC"].indexOf(_.id);return l>-1&&(r=e[0],i=e[1]+l*(2+(t.fontSize||12)),o.append("line").attr("x1",r-3).attr("y1",i-5).attr("x2",a[0]).attr("y2",a[1]).style("stroke",t.labelColor||"#000").style("stroke-width",t.lineWidth||1)),o.append("text").attr("x",r).attr("y",i).style("font-size",(t.fontSize||10)+"px").style("font-family",t.fontFamily||"Verdana").style("fill",t.labelColor||"#000").text(_.id),"bar"})}function n(o,p,e){function _(o){return void 0!==o&&void 0!==o.latitude&&void 0!==o.longitude}var r=this,i=this.options.fills,a=this.options.filters,s=this.svg;if(!p||p&&!p.slice)throw"Datamaps Error - bubbles must be an array";var n=o.selectAll("circle.datamaps-bubble").data(p,e.key);n.enter().append("svg:circle").attr("class","datamaps-bubble").attr("cx",function(o){var t;return _(o)?t=r.latLngToXY(o.latitude,o.longitude):o.centered&&(t=r.path.centroid(s.select("path."+o.centered).data()[0])),t?t[0]:void 0}).attr("cy",function(o){var t;return _(o)?t=r.latLngToXY(o.latitude,o.longitude):o.centered&&(t=r.path.centroid(s.select("path."+o.centered).data()[0])),t?t[1]:void 0}).attr("r",function(o){return e.animate?0:t(o.radius,e.radius,o)}).attr("data-info",function(o){return JSON.stringify(o)}).attr("filter",function(o){return a[t(o.filterKey,e.filterKey,o)]||void 0}).style("stroke",function(o){return t(o.borderColor,e.borderColor,o)}).style("stroke-width",function(o){return t(o.borderWidth,e.borderWidth,o)}).style("fill-opacity",function(o){return t(o.fillOpacity,e.fillOpacity,o)}).style("fill",function(o){return i[t(o.fillKey,e.fillKey,o)]||i.defaultFill}).on("mouseover",function(o){var p=d.select(this);if(e.highlightOnHover){var _={fill:p.style("fill"),stroke:p.style("stroke"),"stroke-width":p.style("stroke-width"),"fill-opacity":p.style("fill-opacity")};p.style("fill",t(o.highlightFillColor,e.highlightFillColor,o)).style("stroke",t(o.highlightBorderColor,e.highlightBorderColor,o)).style("stroke-width",t(o.highlightBorderWidth,e.highlightBorderWidth,o)).style("fill-opacity",t(o.highlightFillOpacity,e.highlightFillOpacity,o)).attr("data-previousAttributes",JSON.stringify(_))}e.popupOnHover&&r.updatePopup(p,o,e,s)}).on("mouseout",function(o){var t=d.select(this);if(e.highlightOnHover){var p=JSON.parse(t.attr("data-previousAttributes"));for(var _ in p)t.style(_,p[_])}d.selectAll(".datamaps-hoverover").style("display","none")}),n.transition().duration(400).attr("r",function(o){return t(o.radius,e.radius,o)}),n.exit().transition().delay(e.exitDelay).attr("r",0).remove()}function l(o){return Array.prototype.slice.call(arguments,1).forEach(function(t){if(t)for(var p in t)null==o[p]&&(o[p]=t[p])}),o}function y(o){if(void 0===d||void 0===h)throw new Error("Include d3.js (v3.0.3 or greater) and topojson on this page before creating a new map");return this.options=l(o,T),this.options.geographyConfig=l(o.geographyConfig,T.geographyConfig),this.options.projectionConfig=l(o.projectionConfig,T.projectionConfig),this.options.bubblesConfig=l(o.bubblesConfig,T.bubblesConfig),this.options.arcConfig=l(o.arcConfig,T.arcConfig),d.select(this.options.element).select("svg").length>0&&(function(o,t,p){return this.svg=d.select(o).append("svg").attr("width",p||o.offsetWidth).attr("data-width",p||o.offsetWidth).attr("class","datamap").attr("height",t||o.offsetHeight).style("overflow","hidden"),this.options.responsive&&(d.select(this.options.element).style({position:"relative","padding-bottom":100*this.options.aspectRatio+"%"}),d.select(this.options.element).select("svg").style({position:"absolute",width:"100%",height:"100%"}),d.select(this.options.element).select("svg").select("g").selectAll("path").style("vector-effect","non-scaling-stroke")),this.svg}).call(this,this.options.element,this.options.height,this.options.width),this.addPlugin("bubbles",n),this.addPlugin("legend",r),this.addPlugin("arc",a),this.addPlugin("labels",s),this.addPlugin("graticule",i),this.options.disableDefaultStyles||d.select(".datamaps-style-block").empty()&&d.select("head").append("style").attr("class","datamaps-style-block").html('.datamap path.datamaps-graticule { fill: none; stroke: #777; stroke-width: 0.5px; stroke-opacity: .5; pointer-events: none; } .datamap .labels {pointer-events: none;} .datamap path {stroke: #FFFFFF; stroke-width: 1px;} .datamaps-legend dt, .datamaps-legend dd { float: left; margin: 0 3px 0 0;} .datamaps-legend dd {width: 20px; margin-right: 6px; border-radius: 3px;} .datamaps-legend {padding-bottom: 20px; z-index: 1001; position: absolute; left: 4px; font-size: 12px; font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;} .datamaps-hoverover {display: none; font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; } .hoverinfo {padding: 4px; border-radius: 1px; background-color: #FFF; box-shadow: 1px 1px 5px #CCC; font-size: 12px; border: 1px solid #CCC; } .hoverinfo hr {border:1px dotted #CCC; }'),this.draw()}var d=window.d3,h=window.topojson,T={scope:"world",responsive:!1,aspectRatio:.5625,setProjection:function(o,t){var p,e,_=t.width||o.offsetWidth,r=t.height||o.offsetHeight,i=this.svg;return t&&void 0===t.scope&&(t.scope="world"),"usa"===t.scope?p=d.geo.albersUsa().scale(_).translate([_/2,r/2]):"world"===t.scope&&(p=d.geo[t.projection]().scale((_+1)/2/Math.PI).translate([_/2,r/("mercator"===t.projection?1.45:1.8)])),"orthographic"===t.projection&&(i.append("defs").append("path").datum({type:"Sphere"}).attr("id","sphere").attr("d",e),i.append("use").attr("class","stroke").attr("xlink:href","#sphere"),i.append("use").attr("class","fill").attr("xlink:href","#sphere"),p.scale(250).clipAngle(90).rotate(t.projectionConfig.rotation)),{path:e=d.geo.path().projection(p),projection:p}},projection:"equirectangular",dataType:"json",data:{},done:function(){},fills:{defaultFill:"#ABDDA4"},filters:{},geographyConfig:{dataUrl:null,hideAntarctica:!0,hideHawaiiAndAlaska:!1,borderWidth:1,borderColor:"#FDFDFD",popupTemplate:function(o,t){return'<div class="hoverinfo"><strong>'+o.properties.name+"</strong></div>"},popupOnHover:!0,highlightOnHover:!0,highlightFillColor:"#FC8D59",highlightBorderColor:"rgba(250, 15, 160, 0.2)",highlightBorderWidth:2},projectionConfig:{rotation:[97,0]},bubblesConfig:{borderWidth:2,borderColor:"#FFFFFF",popupOnHover:!0,radius:null,popupTemplate:function(o,t){return'<div class="hoverinfo"><strong>'+t.name+"</strong></div>"},fillOpacity:.75,animate:!0,highlightOnHover:!0,highlightFillColor:"#FC8D59",highlightBorderColor:"rgba(250, 15, 160, 0.2)",highlightBorderWidth:2,highlightFillOpacity:.85,exitDelay:100,key:JSON.stringify},arcConfig:{strokeColor:"#DD1C77",strokeWidth:1,arcSharpness:1,animationSpeed:600}};y.prototype.resize=function(){var o=this.options;if(o.responsive){var t=o.element.clientWidth,p=d.select(o.element).select("svg").attr("data-width");d.select(o.element).select("svg").selectAll("g").attr("transform","scale("+t/p+")")}},y.prototype.draw=function(){function o(o){t.options.dataUrl&&d[t.options.dataType](t.options.dataUrl,function(o){if("csv"===t.options.dataType&&o&&o.slice){for(var p={},e=0;e<o.length;e++)p[o[e].id]=o[e];o=p}Datamaps.prototype.updateChoropleth.call(t,o)}),e.call(t,o),_.call(t),(t.options.geographyConfig.popupOnHover||t.options.bubblesConfig.popupOnHover)&&(hoverover=d.select(t.options.element).append("div").attr("class","datamaps-hoverover").style("z-index",10001).style("position","absolute")),t.options.done(t)}var t=this,p=t.options,r=p.setProjection.apply(t,[p.element,p]);return this.path=r.path,this.projection=r.projection,p.geographyConfig.dataUrl?d.json(p.geographyConfig.dataUrl,function(p,e){if(p)throw new Error(p);t.customTopo=e,o(e)}):o(this[p.scope+"Topo"]||p.geographyConfig.dataJson),this},y.prototype.worldTopo="__WORLD__",y.prototype.abwTopo="__ABW__",y.prototype.afgTopo="__AFG__",y.prototype.agoTopo="__AGO__",y.prototype.aiaTopo="__AIA__",y.prototype.albTopo="__ALB__",y.prototype.aldTopo="__ALD__",y.prototype.andTopo="__AND__",y.prototype.areTopo="__ARE__",y.prototype.argTopo="__ARG__",y.prototype.armTopo="__ARM__",y.prototype.asmTopo="__ASM__",y.prototype.ataTopo="__ATA__",y.prototype.atcTopo="__ATC__",y.prototype.atfTopo="__ATF__",y.prototype.atgTopo="__ATG__",y.prototype.ausTopo="__AUS__",y.prototype.autTopo="__AUT__",y.prototype.azeTopo="__AZE__",y.prototype.bdiTopo="__BDI__",y.prototype.belTopo="__BEL__",y.prototype.benTopo="__BEN__",y.prototype.bfaTopo="__BFA__",y.prototype.bgdTopo="__BGD__",y.prototype.bgrTopo="__BGR__",y.prototype.bhrTopo="__BHR__",y.prototype.bhsTopo="__BHS__",y.prototype.bihTopo="__BIH__",y.prototype.bjnTopo="__BJN__",y.prototype.blmTopo="__BLM__",y.prototype.blrTopo="__BLR__",y.prototype.blzTopo="__BLZ__",y.prototype.bmuTopo="__BMU__",y.prototype.bolTopo="__BOL__",y.prototype.braTopo="__BRA__",y.prototype.brbTopo="__BRB__",y.prototype.brnTopo="__BRN__",y.prototype.btnTopo="__BTN__",y.prototype.norTopo="__NOR__",y.prototype.bwaTopo="__BWA__",y.prototype.cafTopo="__CAF__",y.prototype.canTopo="__CAN__",y.prototype.cheTopo="__CHE__",y.prototype.chlTopo="__CHL__",y.prototype.chnTopo="__CHN__",y.prototype.civTopo="__CIV__",y.prototype.clpTopo="__CLP__",y.prototype.cmrTopo="__CMR__",y.prototype.codTopo="__COD__",y.prototype.cogTopo="__COG__",y.prototype.cokTopo="__COK__",y.prototype.colTopo="__COL__",y.prototype.comTopo="__COM__",y.prototype.cpvTopo="__CPV__",y.prototype.criTopo="__CRI__",y.prototype.csiTopo="__CSI__",y.prototype.cubTopo="__CUB__",y.prototype.cuwTopo="__CUW__",y.prototype.cymTopo="__CYM__",y.prototype.cynTopo="__CYN__",y.prototype.cypTopo="__CYP__",y.prototype.czeTopo="__CZE__",y.prototype.deuTopo="__DEU__",y.prototype.djiTopo="__DJI__",y.prototype.dmaTopo="__DMA__",y.prototype.dnkTopo="__DNK__",y.prototype.domTopo="__DOM__",y.prototype.dzaTopo="__DZA__",y.prototype.ecuTopo="__ECU__",y.prototype.egyTopo="__EGY__",y.prototype.eriTopo="__ERI__",y.prototype.esbTopo="__ESB__",y.prototype.espTopo="__ESP__",y.prototype.estTopo="__EST__",y.prototype.ethTopo="__ETH__",y.prototype.finTopo="__FIN__",y.prototype.fjiTopo="__FJI__",y.prototype.flkTopo="__FLK__",y.prototype.fraTopo="__FRA__",y.prototype.froTopo="__FRO__",y.prototype.fsmTopo="__FSM__",y.prototype.gabTopo="__GAB__",y.prototype.psxTopo="__PSX__",y.prototype.gbrTopo="__GBR__",y.prototype.geoTopo="__GEO__",y.prototype.ggyTopo="__GGY__",y.prototype.ghaTopo="__GHA__",y.prototype.gibTopo="__GIB__",y.prototype.ginTopo="__GIN__",y.prototype.gmbTopo="__GMB__",y.prototype.gnbTopo="__GNB__",y.prototype.gnqTopo="__GNQ__",y.prototype.grcTopo="__GRC__",y.prototype.grdTopo="__GRD__",y.prototype.grlTopo="__GRL__",y.prototype.gtmTopo="__GTM__",y.prototype.gumTopo="__GUM__",y.prototype.guyTopo="__GUY__",y.prototype.hkgTopo="__HKG__",y.prototype.hmdTopo="__HMD__",y.prototype.hndTopo="__HND__",y.prototype.hrvTopo="__HRV__",y.prototype.htiTopo="__HTI__",y.prototype.hunTopo="__HUN__",y.prototype.idnTopo="__IDN__",y.prototype.imnTopo="__IMN__",y.prototype.indTopo="__IND__",y.prototype.ioaTopo="__IOA__",y.prototype.iotTopo="__IOT__",y.prototype.irlTopo="__IRL__",y.prototype.irnTopo="__IRN__",y.prototype.irqTopo="__IRQ__",y.prototype.islTopo="__ISL__",y.prototype.isrTopo="__ISR__",y.prototype.itaTopo="__ITA__",y.prototype.jamTopo="__JAM__",y.prototype.jeyTopo="__JEY__",y.prototype.jorTopo="__JOR__",y.prototype.jpnTopo="__JPN__",y.prototype.kabTopo="__KAB__",y.prototype.kasTopo="__KAS__",y.prototype.kazTopo="__KAZ__",y.prototype.kenTopo="__KEN__",y.prototype.kgzTopo="__KGZ__",y.prototype.khmTopo="__KHM__",y.prototype.kirTopo="__KIR__",y.prototype.knaTopo="__KNA__",y.prototype.korTopo="__KOR__",y.prototype.kosTopo="__KOS__",y.prototype.kwtTopo="__KWT__",y.prototype.laoTopo="__LAO__",y.prototype.lbnTopo="__LBN__",y.prototype.lbrTopo="__LBR__",y.prototype.lbyTopo="__LBY__",y.prototype.lcaTopo="__LCA__",y.prototype.lieTopo="__LIE__",y.prototype.lkaTopo="__LKA__",y.prototype.lsoTopo={type:"Topology",objects:{lso:{type:"GeometryCollection",geometries:[{type:"Polygon",properties:{name:"Berea"},id:"LS.BE",arcs:[[0,1,2,3]]},{type:"Polygon",properties:{name:"Maseru"},id:"LS.MS",arcs:[[4,5,6,7,8,-2]]},{type:"Polygon",properties:{name:"Mohale's Hoek"},id:"LS.MH",arcs:[[9,10,11,-7,12,13,14]]},{type:"Polygon",properties:{name:"Quthing"},id:"LS.QT",arcs:[[15,-10,16]]},{type:"Polygon",properties:{name:"Butha-Buthe"},id:"LS.BB",arcs:[[17,18,19]]},{type:"Polygon",properties:{name:"Leribe"},id:"LS.LE",arcs:[[20,21,-4,22,-19]]},{type:"Polygon",properties:{name:"Mokhotlong"},id:"LS.MK",arcs:[[23,-21,-18,24]]},{type:"Polygon",properties:{name:"Qacha's Nek"},id:"LS.QN",arcs:[[25,-17,-15,26]]},{type:"Polygon",properties:{name:"Thaba-Tseka"},id:"LS.TT",arcs:[[-24,27,-27,-14,28,-5,-1,-22]]},{type:"MultiPolygon",properties:{name:"Mafeteng"},id:"LS.MF",arcs:[[[-29,-13,-6]],[[-12,29,-8]]]}]}},arcs:[[[5186,7373],[-65,-163],[14,-71],[32,-48],[15,-27],[13,-29],[21,-72],[57,-141],[1,-75],[-20,-49],[-32,-40],[-179,-138],[-20,-21],[-34,-56],[-13,-25],[-41,-65]],[[4935,6353],[-120,194],[-18,6],[-22,6],[-9,-17],[-14,-15],[-16,-11],[-89,-31],[-32,-17],[-27,-22],[-48,-60],[-132,-107],[-95,-98],[-42,-26],[-31,8],[-25,29],[-13,35],[-3,44],[9,106],[0,49],[-4,44],[-30,137],[-14,39],[-18,29],[-22,1],[-25,-26],[-77,-117],[-35,-42],[-86,-69],[-78,-44],[-44,-17],[-122,-25],[-49,7],[-38,15],[-248,151],[-67,23],[-46,5],[-42,-1],[-75,-18],[-31,-15],[-22,-18],[-14,-27],[-7,-29],[-10,-32],[-21,-22],[-61,-12],[-67,26],[-122,25],[-63,30],[-103,76],[-32,9],[-29,-15],[-48,-67],[-40,-36],[-50,-22],[-93,-15],[-46,4],[-38,19],[-19,28],[-11,28],[0,22],[2,15],[20,54],[-1,13],[-7,10],[-16,10],[-21,6],[-16,9],[-11,11],[-19,36],[-3,8]],[[2089,6647],[34,11],[41,36],[-7,55],[-25,112],[2,46],[27,42],[42,26],[42,16],[29,17],[236,295],[93,178],[-5,27]],[[2598,7508],[35,0],[109,50],[68,1],[51,-10],[52,-22],[47,13],[155,107],[48,12],[35,15],[30,16],[153,103],[34,2],[35,-19],[63,-48],[36,-20],[43,-10],[69,-4],[49,34],[39,34],[116,184],[39,42],[52,35],[34,57],[26,82],[46,61],[39,20],[41,-5],[47,-20],[51,-35],[52,-45],[51,-60],[93,-80],[35,-41],[29,-51],[25,-57],[33,-51],[38,-28],[43,-14],[88,-16],[40,-12],[41,-21],[47,-37],[42,-41],[71,-90],[23,-38],[19,-38],[39,-52],[137,-38]],[[4935,6353],[-222,-212],[-41,-22],[-52,-22],[-32,-4],[-23,-25],[-19,-40],[-15,-46],[-10,-41],[-4,-45],[4,-47],[-10,-71],[7,-41],[14,-30],[23,-28],[12,-20],[11,-13],[26,-11],[8,-20],[7,-25],[10,-18],[33,-15],[15,-21],[11,-36],[106,-620],[-6,-50],[6,-41],[62,-243]],[[4856,4546],[-167,27],[-93,0],[-127,8],[-101,-32],[-33,-46],[80,-47],[60,-109],[20,-94],[20,-86],[0,-46],[114,-8],[87,23],[47,-15],[-40,-94],[20,-78],[33,-86],[0,-31],[-87,0],[-73,-39],[13,-70],[0,-109]],[[4629,3614],[-67,-78],[-107,-31],[-34,105]],[[4421,3610],[-41,36],[-14,32],[-31,38],[-51,27],[-185,26],[-65,20],[-90,69],[-92,44],[-530,104],[-88,31],[-161,1],[-344,-50],[-46,24],[-7,33],[32,40],[40,40],[21,56],[-3,68],[-199,333],[-43,33],[-43,10],[-130,-5],[-97,26],[-46,43],[-17,50],[2,109],[-11,39],[-20,6],[-24,-16],[-71,-91],[-17,-16],[-24,-13],[-108,-32],[-40,-1],[-32,5],[-62,18],[-29,21],[-18,30],[-2,34],[-8,44],[-20,54],[-105,120],[-29,51],[-16,46],[-51,92],[-13,40],[-13,84],[-17,39],[-22,20],[-24,13],[-28,5],[-21,-1],[-46,-9],[-87,20],[-10,3]],[[1225,5453],[9,10],[27,42],[21,51],[8,54],[22,18],[96,-5],[22,21],[18,86],[45,75],[171,190],[27,21],[16,29],[6,60],[-12,38],[-24,30],[-17,27],[10,34],[37,30],[38,13],[38,21],[40,56],[10,43],[8,111],[12,39],[69,44],[167,56]],[[5187,3149],[-102,-75],[-138,-46],[-178,16],[-93,-15],[-41,-62],[-25,-66],[-61,-40],[-141,-43],[-73,-11],[-213,55],[-36,-2],[-104,-24],[-112,1],[-43,-18],[-34,-28],[-29,-38],[-87,-165],[-16,-62],[0,-70],[33,-119],[6,-57],[-24,-58],[-20,-20],[-49,-33],[-21,-24],[-14,-26],[-22,-59],[-14,-28],[-112,-62],[-66,-81],[-19,-17],[-70,-27],[-73,-4],[-139,31],[-16,14],[-28,48],[-20,14],[-39,-5],[-16,-28],[1,-41],[8,-45],[61,-187],[4,-91],[-47,-92],[-140,-65],[-279,114],[-146,-40],[-28,-43],[-27,-105],[-29,-36],[-34,-4],[-44,11],[-56,-20]],[[2182,1271],[-15,53],[-150,70],[-64,55],[-44,72],[-30,118],[-30,31],[-66,1],[-87,-37],[-29,-5],[-42,7],[-82,23],[-3,1],[-44,5],[6,75],[-91,258],[-8,137],[90,226],[62,63],[3,48],[-39,32],[-63,18],[-91,0],[-51,-13],[-38,16],[-51,79],[-27,68],[-56,227],[-58,96],[-197,169],[-79,94],[-113,273]],[[695,3531],[67,26],[284,138],[116,91],[29,11],[20,-5],[24,-15],[33,-11],[84,7],[36,13],[28,23],[22,24],[39,31],[62,12],[37,-10],[19,-27],[-1,-30],[-71,-199],[-11,-42],[-12,-88],[0,-83],[9,-67],[12,-54],[14,-47],[32,-74],[6,-11],[14,-15],[105,-77],[88,-85],[30,-8],[23,3],[37,21],[28,11],[20,15],[12,16],[16,39],[9,15],[11,14],[171,174],[11,18],[11,25],[7,25],[7,15],[16,14],[21,15],[23,19],[17,19],[11,21],[9,22],[19,77],[9,2],[12,-11],[19,-26],[39,-22],[53,-5],[88,10],[51,-7],[37,-21],[58,-95],[25,-33],[28,-29],[41,-27],[39,0],[46,19],[40,30],[69,3],[60,16],[34,78],[80,46],[67,-62],[94,-54],[87,23],[67,78],[13,62],[-20,102],[73,-8],[74,-94],[47,-70],[27,70],[13,117],[47,63],[73,-47],[67,-78],[107,0],[101,0],[107,-70],[107,-32],[60,-15],[7,109],[86,51]],[[4629,3614],[167,-8],[94,-8],[114,-15],[107,-63],[60,-78],[60,-54],[60,-47],[41,54],[40,47],[-34,94],[-80,124]],[[5258,3660],[80,47],[80,8],[61,16],[0,70],[20,78],[100,39],[80,-39],[74,23],[100,63],[107,70],[94,31],[107,16],[40,54],[117,90]],[[6318,4226],[60,-113],[-1,-102],[-25,-118],[-8,-90],[24,-145],[1,-59],[-18,-56],[-30,-30],[-48,-25],[-141,-58],[-43,-31],[-41,-39],[-51,-77],[-34,-32],[-25,-21],[-23,-9],[-19,-10],[-22,-15],[-90,-76],[-144,-97],[-18,-5],[-11,-7],[-15,18],[-67,121],[-46,45],[-148,33],[-127,-64],[-21,-15]],[[5561,2325],[-70,-133],[-64,-65],[-39,-29],[-50,-76],[-29,-28],[-40,-18],[-120,-18],[-76,-31],[-86,-53],[-63,-72],[-9,-89],[45,-65],[60,-28],[48,-43],[11,-109],[-29,-103],[-54,-65],[-349,-278],[-32,-57],[9,-38],[48,-84],[13,-47],[-5,-39],[-70,-223],[-14,-29],[-33,-44],[-32,-28],[-36,-19],[-34,-25],[-26,-45],[-24,-96],[3,-78],[10,-76],[-1,-94],[-99,44],[-485,42],[-86,28],[-82,42],[-39,31],[-32,33],[-35,27],[-48,17],[-36,-6],[-78,-39],[-41,-7],[-173,23],[-143,45],[-123,79],[-222,255],[-251,193],[-25,40],[-7,43],[-2,43],[-14,43],[-99,141],[-107,107],[-14,47]],[[5187,3149],[32,-109],[27,-82],[-12,-37],[-19,-18],[-79,-6],[-125,-67],[-33,-34],[-19,-36],[-19,-82],[-5,-39],[0,-36],[6,-31],[15,-32],[31,-30],[45,-21],[356,-44],[31,1],[25,5],[25,-12],[19,-12],[71,-100],[2,-2]],[[7501,9095],[-4,-11],[-37,-283],[4,-103],[9,-27],[9,-16],[10,-13],[10,-10],[9,-13],[2,-16],[-4,-22],[-26,-36],[-20,-19],[-112,-52]],[[7351,8474],[-110,-30],[-27,-14],[-21,-19],[-48,-63],[-111,-176],[-22,-49],[-16,-51],[-23,-153],[-11,-39],[-21,-38],[-26,-33],[-35,-31],[-37,-25],[-46,-22],[-50,-17],[-50,-11],[-45,-5],[-47,2],[-42,8],[-183,72],[-34,3],[-30,-4],[-20,-15],[-16,-26],[-52,-107],[-13,-21],[-19,-14],[-32,5],[-33,29],[-37,80],[-11,60],[0,55],[88,312],[3,46],[-7,52],[-19,66],[-10,53],[-3,56],[-8,51],[-19,51],[-55,30],[-33,8],[-67,1],[-44,7],[-35,14],[-33,27],[-39,50],[-38,37],[-59,31],[-44,15],[-47,25],[-145,105],[-54,20],[-49,2],[-35,-9],[-33,-3],[-105,22],[-24,22],[-19,42],[-18,105],[-1,167],[-19,67],[-85,56],[-31,24]],[[4996,9377],[51,5],[83,-37],[95,-11],[95,13],[83,33],[79,74],[111,196],[80,82],[84,36],[572,39],[82,21],[233,163],[62,8],[77,-59],[55,-68],[37,-79],[26,-94],[29,-196],[44,-68],[182,-5],[60,-52],[120,-231],[34,-27],[128,-24],[3,-1]],[[7351,8474],[-20,-96],[-34,-72],[-15,-65],[-31,-469],[-29,-99],[-31,-71],[-61,-71],[-340,-320],[-44,-33],[-39,-16],[-80,-20],[-46,-27],[-46,-43],[-63,-75],[-32,-61],[-15,-59],[-3,-89],[-13,-84]],[[6409,6704],[3,-52],[7,-17],[18,-32],[116,-157],[28,-27],[47,-36],[16,-23],[5,-17],[-13,-17],[-24,-18],[-30,-11],[-123,-11],[-45,4],[-59,22],[-203,115],[-135,52],[-115,26],[-41,3],[-46,18],[-40,39],[-102,211],[-112,326],[-48,98],[-14,48],[-2,47],[2,43],[-3,33],[-16,26],[-27,17],[-30,9],[-65,12],[-40,2],[-42,-7],[-46,-14],[-44,-43]],[[2598,7508],[-15,88],[27,33],[29,-33],[20,8],[38,20],[26,5],[-36,47],[-51,54],[-19,44],[65,19],[52,23],[50,55],[79,118],[16,6],[19,-7],[17,-1],[7,19],[0,36],[5,14],[9,16],[9,25],[4,39],[1,66],[33,39],[65,22],[44,37],[-30,81],[468,-33],[109,51],[39,72],[26,76],[33,63],[60,35],[77,-10],[49,-46],[38,-50],[46,-24],[112,0],[36,11],[5,28],[-1,37],[18,38],[155,212],[182,200],[13,28],[114,171],[54,70],[41,59],[38,-15],[222,23]],[[9339,5414],[-2,0],[-68,12],[-18,-3],[-18,-9],[-97,-76],[-26,-16],[-115,-35],[-40,-20],[-76,-74],[-21,-8],[-38,9],[-31,21],[-56,57],[-32,50],[-46,99],[-45,42],[-65,39],[-123,51],[-129,38],[-38,1],[-32,-8],[-62,-32],[-36,-10],[-41,-2],[-47,3],[-203,-10],[-55,4],[-187,60],[-65,9],[-183,-13],[-29,7],[-16,32],[-2,16],[1,18],[-9,14],[54,53],[34,55],[21,71],[8,98],[-10,198],[7,99],[-22,7],[-18,17],[-30,16],[-67,15],[-49,6],[-43,-1],[-25,-10],[-14,-17],[-13,-21],[-22,-13],[-27,13],[-61,84],[-33,25],[-59,22],[-36,22],[-15,36],[10,30],[41,76],[118,278],[15,64],[-1,50],[-19,47],[-20,33],[-23,19],[-29,-10],[-45,-31],[-236,-207],[-107,-62],[-164,-38]],[[7501,9095],[65,-25],[62,-39],[1,0],[57,-51],[52,-65],[165,-299],[226,-237],[60,4],[97,-28],[89,-43],[37,-48],[1,-94],[24,-61],[55,-38],[92,-25],[142,-66],[338,-367],[136,-42],[164,-4],[125,-54],[21,-275],[46,-58],[64,-50],[57,-64],[31,-82],[45,-168],[114,-159],[42,-104],[4,-29],[-4,-73],[4,-35],[18,-29],[55,-55],[13,-28],[-15,-70],[-76,-111],[-8,-75],[3,-69],[-19,-54],[-34,-42],[-47,-36],[-108,-48],[-123,-39],[-116,-52],[-86,-90],[-30,-101],[-1,-103]],[[8675,4338],[-5,-106],[-25,-127],[-2,-115],[60,-86],[51,-41],[12,-34],[-3,-42],[9,-68],[45,-92],[10,-47],[-26,-41],[-47,-24],[-109,-32],[-50,-23],[-322,-203],[-162,-102],[-478,-318],[-265,-110],[-271,-60],[-369,-142],[-139,1],[-200,78],[-68,8],[-67,-16],[-179,-108],[-101,-37],[-198,29],[-99,-16],[-82,-72],[-34,-67]],[[6318,4226],[69,27],[41,2],[54,-2],[83,-19],[115,-46],[79,-46],[76,-58],[29,-29],[22,-31],[12,-36],[3,-42],[-7,-92],[1,-39],[10,-30],[19,-26],[23,-18],[18,-9],[52,24],[30,32],[26,35],[30,29],[39,19],[39,-2],[39,-13],[39,-4],[41,22],[32,59],[-11,61],[-26,58],[7,2],[38,9],[85,1],[60,-13],[55,-24],[221,-184],[61,-27],[66,-7],[84,11],[66,21],[61,33],[64,72],[29,53],[17,53],[32,294],[23,37],[40,23],[85,-21],[138,-54],[84,-9],[62,16],[2,0]],[[9339,5414],[0,-19],[28,-115],[58,-74],[-67,-47],[-6,-75],[1,-79],[-47,-60],[-316,-99],[-119,-96],[-67,-120],[-52,-136],[-77,-143],[0,-13]],[[5258,3660],[-40,78],[-34,63],[-60,23],[-53,31],[-8,35],[-61,293],[-62,114],[104,128],[-101,109],[-87,12]],[[695,3531],[-339,820],[-1,0],[0,1],[-35,71],[-119,184],[-55,49],[-54,31],[-59,48],[-33,17],[51,119],[1,77],[31,45],[44,0],[38,-57],[28,36],[32,77],[22,21],[40,1],[13,-25],[10,-30],[34,-15],[19,14],[133,143],[22,15],[116,47],[120,13],[42,16],[73,41],[116,25],[87,37],[134,80],[19,21]]],transform:{scale:[.00024339966546654089,.00020882467466746085],translate:[27.002154989000132,-30.658799335999916]}},y.prototype.ltuTopo="__LTU__",y.prototype.luxTopo="__LUX__",y.prototype.lvaTopo="__LVA__",y.prototype.macTopo="__MAC__",y.prototype.mafTopo="__MAF__",y.prototype.marTopo="__MAR__",y.prototype.mcoTopo="__MCO__",y.prototype.mdaTopo="__MDA__",y.prototype.mdgTopo="__MDG__",y.prototype.mdvTopo="__MDV__",y.prototype.mexTopo="__MEX__",y.prototype.mhlTopo="__MHL__",y.prototype.mkdTopo="__MKD__",y.prototype.mliTopo="__MLI__",y.prototype.mltTopo="__MLT__",y.prototype.mmrTopo="__MMR__",y.prototype.mneTopo="__MNE__",y.prototype.mngTopo="__MNG__",y.prototype.mnpTopo="__MNP__",y.prototype.mozTopo="__MOZ__",y.prototype.mrtTopo="__MRT__",y.prototype.msrTopo="__MSR__",y.prototype.musTopo="__MUS__",y.prototype.mwiTopo="__MWI__",y.prototype.mysTopo="__MYS__",y.prototype.namTopo="__NAM__",y.prototype.nclTopo="__NCL__",y.prototype.nerTopo="__NER__",y.prototype.nfkTopo="__NFK__",y.prototype.ngaTopo="__NGA__",y.prototype.nicTopo="__NIC__",y.prototype.niuTopo="__NIU__",y.prototype.nldTopo="__NLD__",y.prototype.nplTopo="__NPL__",y.prototype.nruTopo="__NRU__",y.prototype.nulTopo="__NUL__",y.prototype.nzlTopo="__NZL__",y.prototype.omnTopo="__OMN__",y.prototype.pakTopo="__PAK__",y.prototype.panTopo="__PAN__",y.prototype.pcnTopo="__PCN__",y.prototype.perTopo="__PER__",y.prototype.pgaTopo="__PGA__",y.prototype.phlTopo="__PHL__",y.prototype.plwTopo="__PLW__",y.prototype.pngTopo="__PNG__",y.prototype.polTopo="__POL__",y.prototype.priTopo="__PRI__",y.prototype.prkTopo="__PRK__",y.prototype.prtTopo="__PRT__",y.prototype.pryTopo="__PRY__",y.prototype.pyfTopo="__PYF__",y.prototype.qatTopo="__QAT__",y.prototype.rouTopo="__ROU__",y.prototype.rusTopo="__RUS__",y.prototype.rwaTopo="__RWA__",y.prototype.sahTopo="__SAH__",y.prototype.sauTopo="__SAU__",y.prototype.scrTopo="__SCR__",y.prototype.sdnTopo="__SDN__",y.prototype.sdsTopo="__SDS__",y.prototype.senTopo="__SEN__",y.prototype.serTopo="__SER__",y.prototype.sgpTopo="__SGP__",y.prototype.sgsTopo="__SGS__",y.prototype.shnTopo="__SHN__",y.prototype.slbTopo="__SLB__",y.prototype.sleTopo="__SLE__",y.prototype.slvTopo="__SLV__",y.prototype.smrTopo="__SMR__",y.prototype.solTopo="__SOL__",y.prototype.somTopo="__SOM__",y.prototype.spmTopo="__SPM__",y.prototype.srbTopo="__SRB__",y.prototype.stpTopo="__STP__",y.prototype.surTopo="__SUR__",y.prototype.svkTopo="__SVK__",y.prototype.svnTopo="__SVN__",y.prototype.sweTopo="__SWE__",y.prototype.swzTopo="__SWZ__",y.prototype.sxmTopo="__SXM__",y.prototype.sycTopo="__SYC__",y.prototype.syrTopo="__SYR__",y.prototype.tcaTopo="__TCA__",y.prototype.tcdTopo="__TCD__",y.prototype.tgoTopo="__TGO__",y.prototype.thaTopo="__THA__",y.prototype.tjkTopo="__TJK__",y.prototype.tkmTopo="__TKM__",y.prototype.tlsTopo="__TLS__",y.prototype.tonTopo="__TON__",y.prototype.ttoTopo="__TTO__",y.prototype.tunTopo="__TUN__",y.prototype.turTopo="__TUR__",y.prototype.tuvTopo="__TUV__",y.prototype.twnTopo="__TWN__",y.prototype.tzaTopo="__TZA__",y.prototype.ugaTopo="__UGA__",y.prototype.ukrTopo="__UKR__",y.prototype.umiTopo="__UMI__",y.prototype.uryTopo="__URY__",y.prototype.usaTopo="__USA__",y.prototype.usgTopo="__USG__",y.prototype.uzbTopo="__UZB__",y.prototype.vatTopo="__VAT__",y.prototype.vctTopo="__VCT__",y.prototype.venTopo="__VEN__",y.prototype.vgbTopo="__VGB__",y.prototype.virTopo="__VIR__",y.prototype.vnmTopo="__VNM__",y.prototype.vutTopo="__VUT__",y.prototype.wlfTopo="__WLF__",y.prototype.wsbTopo="__WSB__",y.prototype.wsmTopo="__WSM__",y.prototype.yemTopo="__YEM__",y.prototype.zafTopo="__ZAF__",y.prototype.zmbTopo="__ZMB__",y.prototype.zweTopo="__ZWE__",y.prototype.latLngToXY=function(o,t){return this.projection([t,o])},y.prototype.addLayer=function(o,t,p){return(p?this.svg.insert("g",":first-child"):this.svg.append("g")).attr("id",t||"").attr("class",o||"")},y.prototype.updateChoropleth=function(o){var t=this.svg;for(var p in o)if(o.hasOwnProperty(p)){var e,_=o[p];if(!p)continue;e="string"==typeof _?_:"string"==typeof _.color?_.color:this.options.fills[_.fillKey],_===Object(_)&&(this.options.data[p]=l(_,this.options.data[p]||{}),this.svg.select("."+p).attr("data-info",JSON.stringify(this.options.data[p]))),t.selectAll("."+p).transition().style("fill",e)}},y.prototype.updatePopup=function(o,t,p){var e=this;o.on("mousemove",null),o.on("mousemove",function(){var _=d.mouse(e.options.element);d.select(e.svg[0][0].parentNode).select(".datamaps-hoverover").style("top",_[1]+30+"px").html(function(){var e=JSON.parse(o.attr("data-info"));try{return p.popupTemplate(t,e)}catch(o){return""}}).style("left",_[0]+"px")}),d.select(e.svg[0][0].parentNode).select(".datamaps-hoverover").style("display","block")},y.prototype.addPlugin=function(o,t){var p=this;void 0===y.prototype[o]&&(y.prototype[o]=function(e,_,r,i){var a;void 0===i&&(i=!1),"function"==typeof _&&(r=_,_=void 0),_=l(_||{},p.options[o+"Config"]),!i&&this.options[o+"Layer"]?(a=this.options[o+"Layer"],_=_||this.options[o+"Options"]):(a=this.addLayer(o),this.options[o+"Layer"]=a,this.options[o+"Options"]=_),t.apply(this,[a,e,_]),r&&r(a)})},d=p("O72r"),h=p("tiYs"),o.exports=y,window.jQuery&&(window.jQuery.fn.datamaps=function(o,t){(o=o||{}).element=this[0];var p=new y(o);return"function"==typeof t&&t(p,o),this})}()}}]);