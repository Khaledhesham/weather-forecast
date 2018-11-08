(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{bZ3y:function(o,t,p){!function(){function t(o,t,p){void 0===p&&(p=t,optionsValues=void 0);var e=void 0!==o?o:t;if(void 0===e)return null;if("function"==typeof e){var _=[p];return p.geography&&(_=[p.geography,p.data]),e.apply(null,_)}return e}function e(o){var p=this.options.fills,e=this.options.data||{},_=this.options.geographyConfig,r=this.svg.select("g.datamaps-subunits");r.empty()&&(r=this.addLayer("datamaps-subunits",null,!0));var i=h.feature(o,o.objects[this.options.scope]).features;_.hideAntarctica&&(i=i.filter(function(o){return"ATA"!==o.id})),_.hideHawaiiAndAlaska&&(i=i.filter(function(o){return"HI"!==o.id&&"AK"!==o.id})),r.selectAll("path.datamaps-subunit").data(i).enter().append("path").attr("d",this.path).attr("class",function(o){return"datamaps-subunit "+o.id}).attr("data-info",function(o){return JSON.stringify(e[o.id])}).style("fill",function(o){var _,r=e[o.id];return r&&r.fillKey&&(_=p[t(r.fillKey,{data:e[o.id],geography:o})]),void 0===_&&(_=t(r&&r.fillColor,p.defaultFill,{data:e[o.id],geography:o})),_}).style("stroke-width",_.borderWidth).style("stroke",_.borderColor)}function _(){var o=this.svg,p=this,e=this.options.geographyConfig;(e.highlightOnHover||e.popupOnHover)&&o.selectAll(".datamaps-subunit").on("mouseover",function(_){var r=d.select(this),i=p.options.data[_.id]||{};if(e.highlightOnHover){var a={fill:r.style("fill"),stroke:r.style("stroke"),"stroke-width":r.style("stroke-width"),"fill-opacity":r.style("fill-opacity")};r.style("fill",t(i.highlightFillColor,e.highlightFillColor,i)).style("stroke",t(i.highlightBorderColor,e.highlightBorderColor,i)).style("stroke-width",t(i.highlightBorderWidth,e.highlightBorderWidth,i)).style("fill-opacity",t(i.highlightFillOpacity,e.highlightFillOpacity,i)).attr("data-previousAttributes",JSON.stringify(a)),/((MSIE)|(Trident))/.test(navigator.userAgent)||(function(){this.parentNode.appendChild(this)}).call(this)}e.popupOnHover&&p.updatePopup(r,_,e,o)}).on("mouseout",function(){var o=d.select(this);if(e.highlightOnHover){var t=JSON.parse(o.attr("data-previousAttributes"));for(var p in t)o.style(p,t[p])}o.on("mousemove",null),d.selectAll(".datamaps-hoverover").style("display","none")})}function r(o,t,p){if(t=t||{},this.options.fills){var e="<dl>",_="";for(var r in t.legendTitle&&(e="<h2>"+t.legendTitle+"</h2>"+e),this.options.fills){if("defaultFill"===r){if(!t.defaultFillName)continue;_=t.defaultFillName}else _=t.labels&&t.labels[r]?t.labels[r]:r+": ";e+="<dt>"+_+"</dt>",e+='<dd style="background-color:'+this.options.fills[r]+'">&nbsp;</dd>'}e+="</dl>",d.select(this.options.element).append("div").attr("class","datamaps-legend").html(e)}}function i(o,t){var p=d.geo.graticule();this.svg.insert("path",".datamaps-subunits").datum(p).attr("class","datamaps-graticule").attr("d",this.path)}function a(o,p,e){var _=this;if(!p||p&&!p.slice)throw"Datamaps Error - arcs must be an array";for(var r=0;r<p.length;r++)p[r]=l(p[r],p[r].options),delete p[r].options;void 0===e&&(e=T.arcConfig);var i=o.selectAll("path.datamaps-arc").data(p,JSON.stringify),a=d.geo.path().projection(_.projection);i.enter().append("svg:path").attr("class","datamaps-arc").style("stroke-linecap","round").style("stroke",function(o){return t(o.strokeColor,e.strokeColor,o)}).style("fill","none").style("stroke-width",function(o){return t(o.strokeWidth,e.strokeWidth,o)}).attr("d",function(o){var p=_.latLngToXY(t(o.origin.latitude,o),t(o.origin.longitude,o)),r=_.latLngToXY(t(o.destination.latitude,o),t(o.destination.longitude,o)),i=[(p[0]+r[0])/2,(p[1]+r[1])/2];if(e.greatArc){var s=d.geo.greatArc().source(function(o){return[t(o.origin.longitude,o),t(o.origin.latitude,o)]}).target(function(o){return[t(o.destination.longitude,o),t(o.destination.latitude,o)]});return a(s(o))}var n=t(o.arcSharpness,e.arcSharpness,o);return"M"+p[0]+","+p[1]+"S"+(i[0]+50*n)+","+(i[1]-75*n)+","+r[0]+","+r[1]}).transition().delay(100).style("fill",function(o){var p=this.getTotalLength();return this.style.transition=this.style.WebkitTransition="none",this.style.strokeDasharray=p+" "+p,this.style.strokeDashoffset=p,this.getBoundingClientRect(),this.style.transition=this.style.WebkitTransition="stroke-dashoffset "+t(o.animationSpeed,e.animationSpeed,o)+"ms ease-out",this.style.strokeDashoffset="0","none"}),i.exit().transition().style("opacity",0).remove()}function s(o,t){var p=this;t=t||{};var e=this.projection([-67.707617,42.722131]);this.svg.selectAll(".datamaps-subunit").attr("data-foo",function(_){var r,i,a=p.path.centroid(_),s=7.5,n=5;["FL","KY","MI"].indexOf(_.id)>-1&&(s=-2.5),"NY"===_.id&&(s=-1),"MI"===_.id&&(n=18),"LA"===_.id&&(s=13),r=a[0]-s,i=a[1]+n;var l=["VT","NH","MA","RI","CT","NJ","DE","MD","DC"].indexOf(_.id);return l>-1&&(r=e[0],i=e[1]+l*(2+(t.fontSize||12)),o.append("line").attr("x1",r-3).attr("y1",i-5).attr("x2",a[0]).attr("y2",a[1]).style("stroke",t.labelColor||"#000").style("stroke-width",t.lineWidth||1)),o.append("text").attr("x",r).attr("y",i).style("font-size",(t.fontSize||10)+"px").style("font-family",t.fontFamily||"Verdana").style("fill",t.labelColor||"#000").text(_.id),"bar"})}function n(o,p,e){function _(o){return void 0!==o&&void 0!==o.latitude&&void 0!==o.longitude}var r=this,i=this.options.fills,a=this.options.filters,s=this.svg;if(!p||p&&!p.slice)throw"Datamaps Error - bubbles must be an array";var n=o.selectAll("circle.datamaps-bubble").data(p,e.key);n.enter().append("svg:circle").attr("class","datamaps-bubble").attr("cx",function(o){var t;return _(o)?t=r.latLngToXY(o.latitude,o.longitude):o.centered&&(t=r.path.centroid(s.select("path."+o.centered).data()[0])),t?t[0]:void 0}).attr("cy",function(o){var t;return _(o)?t=r.latLngToXY(o.latitude,o.longitude):o.centered&&(t=r.path.centroid(s.select("path."+o.centered).data()[0])),t?t[1]:void 0}).attr("r",function(o){return e.animate?0:t(o.radius,e.radius,o)}).attr("data-info",function(o){return JSON.stringify(o)}).attr("filter",function(o){return a[t(o.filterKey,e.filterKey,o)]||void 0}).style("stroke",function(o){return t(o.borderColor,e.borderColor,o)}).style("stroke-width",function(o){return t(o.borderWidth,e.borderWidth,o)}).style("fill-opacity",function(o){return t(o.fillOpacity,e.fillOpacity,o)}).style("fill",function(o){return i[t(o.fillKey,e.fillKey,o)]||i.defaultFill}).on("mouseover",function(o){var p=d.select(this);if(e.highlightOnHover){var _={fill:p.style("fill"),stroke:p.style("stroke"),"stroke-width":p.style("stroke-width"),"fill-opacity":p.style("fill-opacity")};p.style("fill",t(o.highlightFillColor,e.highlightFillColor,o)).style("stroke",t(o.highlightBorderColor,e.highlightBorderColor,o)).style("stroke-width",t(o.highlightBorderWidth,e.highlightBorderWidth,o)).style("fill-opacity",t(o.highlightFillOpacity,e.highlightFillOpacity,o)).attr("data-previousAttributes",JSON.stringify(_))}e.popupOnHover&&r.updatePopup(p,o,e,s)}).on("mouseout",function(o){var t=d.select(this);if(e.highlightOnHover){var p=JSON.parse(t.attr("data-previousAttributes"));for(var _ in p)t.style(_,p[_])}d.selectAll(".datamaps-hoverover").style("display","none")}),n.transition().duration(400).attr("r",function(o){return t(o.radius,e.radius,o)}),n.exit().transition().delay(e.exitDelay).attr("r",0).remove()}function l(o){return Array.prototype.slice.call(arguments,1).forEach(function(t){if(t)for(var p in t)null==o[p]&&(o[p]=t[p])}),o}function y(o){if(void 0===d||void 0===h)throw new Error("Include d3.js (v3.0.3 or greater) and topojson on this page before creating a new map");return this.options=l(o,T),this.options.geographyConfig=l(o.geographyConfig,T.geographyConfig),this.options.projectionConfig=l(o.projectionConfig,T.projectionConfig),this.options.bubblesConfig=l(o.bubblesConfig,T.bubblesConfig),this.options.arcConfig=l(o.arcConfig,T.arcConfig),d.select(this.options.element).select("svg").length>0&&(function(o,t,p){return this.svg=d.select(o).append("svg").attr("width",p||o.offsetWidth).attr("data-width",p||o.offsetWidth).attr("class","datamap").attr("height",t||o.offsetHeight).style("overflow","hidden"),this.options.responsive&&(d.select(this.options.element).style({position:"relative","padding-bottom":100*this.options.aspectRatio+"%"}),d.select(this.options.element).select("svg").style({position:"absolute",width:"100%",height:"100%"}),d.select(this.options.element).select("svg").select("g").selectAll("path").style("vector-effect","non-scaling-stroke")),this.svg}).call(this,this.options.element,this.options.height,this.options.width),this.addPlugin("bubbles",n),this.addPlugin("legend",r),this.addPlugin("arc",a),this.addPlugin("labels",s),this.addPlugin("graticule",i),this.options.disableDefaultStyles||d.select(".datamaps-style-block").empty()&&d.select("head").append("style").attr("class","datamaps-style-block").html('.datamap path.datamaps-graticule { fill: none; stroke: #777; stroke-width: 0.5px; stroke-opacity: .5; pointer-events: none; } .datamap .labels {pointer-events: none;} .datamap path {stroke: #FFFFFF; stroke-width: 1px;} .datamaps-legend dt, .datamaps-legend dd { float: left; margin: 0 3px 0 0;} .datamaps-legend dd {width: 20px; margin-right: 6px; border-radius: 3px;} .datamaps-legend {padding-bottom: 20px; z-index: 1001; position: absolute; left: 4px; font-size: 12px; font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;} .datamaps-hoverover {display: none; font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; } .hoverinfo {padding: 4px; border-radius: 1px; background-color: #FFF; box-shadow: 1px 1px 5px #CCC; font-size: 12px; border: 1px solid #CCC; } .hoverinfo hr {border:1px dotted #CCC; }'),this.draw()}var d=window.d3,h=window.topojson,T={scope:"world",responsive:!1,aspectRatio:.5625,setProjection:function(o,t){var p,e,_=t.width||o.offsetWidth,r=t.height||o.offsetHeight,i=this.svg;return t&&void 0===t.scope&&(t.scope="world"),"usa"===t.scope?p=d.geo.albersUsa().scale(_).translate([_/2,r/2]):"world"===t.scope&&(p=d.geo[t.projection]().scale((_+1)/2/Math.PI).translate([_/2,r/("mercator"===t.projection?1.45:1.8)])),"orthographic"===t.projection&&(i.append("defs").append("path").datum({type:"Sphere"}).attr("id","sphere").attr("d",e),i.append("use").attr("class","stroke").attr("xlink:href","#sphere"),i.append("use").attr("class","fill").attr("xlink:href","#sphere"),p.scale(250).clipAngle(90).rotate(t.projectionConfig.rotation)),{path:e=d.geo.path().projection(p),projection:p}},projection:"equirectangular",dataType:"json",data:{},done:function(){},fills:{defaultFill:"#ABDDA4"},filters:{},geographyConfig:{dataUrl:null,hideAntarctica:!0,hideHawaiiAndAlaska:!1,borderWidth:1,borderColor:"#FDFDFD",popupTemplate:function(o,t){return'<div class="hoverinfo"><strong>'+o.properties.name+"</strong></div>"},popupOnHover:!0,highlightOnHover:!0,highlightFillColor:"#FC8D59",highlightBorderColor:"rgba(250, 15, 160, 0.2)",highlightBorderWidth:2},projectionConfig:{rotation:[97,0]},bubblesConfig:{borderWidth:2,borderColor:"#FFFFFF",popupOnHover:!0,radius:null,popupTemplate:function(o,t){return'<div class="hoverinfo"><strong>'+t.name+"</strong></div>"},fillOpacity:.75,animate:!0,highlightOnHover:!0,highlightFillColor:"#FC8D59",highlightBorderColor:"rgba(250, 15, 160, 0.2)",highlightBorderWidth:2,highlightFillOpacity:.85,exitDelay:100,key:JSON.stringify},arcConfig:{strokeColor:"#DD1C77",strokeWidth:1,arcSharpness:1,animationSpeed:600}};y.prototype.resize=function(){var o=this.options;if(o.responsive){var t=o.element.clientWidth,p=d.select(o.element).select("svg").attr("data-width");d.select(o.element).select("svg").selectAll("g").attr("transform","scale("+t/p+")")}},y.prototype.draw=function(){function o(o){t.options.dataUrl&&d[t.options.dataType](t.options.dataUrl,function(o){if("csv"===t.options.dataType&&o&&o.slice){for(var p={},e=0;e<o.length;e++)p[o[e].id]=o[e];o=p}Datamaps.prototype.updateChoropleth.call(t,o)}),e.call(t,o),_.call(t),(t.options.geographyConfig.popupOnHover||t.options.bubblesConfig.popupOnHover)&&(hoverover=d.select(t.options.element).append("div").attr("class","datamaps-hoverover").style("z-index",10001).style("position","absolute")),t.options.done(t)}var t=this,p=t.options,r=p.setProjection.apply(t,[p.element,p]);return this.path=r.path,this.projection=r.projection,p.geographyConfig.dataUrl?d.json(p.geographyConfig.dataUrl,function(p,e){if(p)throw new Error(p);t.customTopo=e,o(e)}):o(this[p.scope+"Topo"]||p.geographyConfig.dataJson),this},y.prototype.worldTopo="__WORLD__",y.prototype.abwTopo="__ABW__",y.prototype.afgTopo="__AFG__",y.prototype.agoTopo="__AGO__",y.prototype.aiaTopo="__AIA__",y.prototype.albTopo="__ALB__",y.prototype.aldTopo="__ALD__",y.prototype.andTopo="__AND__",y.prototype.areTopo="__ARE__",y.prototype.argTopo="__ARG__",y.prototype.armTopo="__ARM__",y.prototype.asmTopo="__ASM__",y.prototype.ataTopo="__ATA__",y.prototype.atcTopo="__ATC__",y.prototype.atfTopo="__ATF__",y.prototype.atgTopo="__ATG__",y.prototype.ausTopo="__AUS__",y.prototype.autTopo="__AUT__",y.prototype.azeTopo="__AZE__",y.prototype.bdiTopo="__BDI__",y.prototype.belTopo="__BEL__",y.prototype.benTopo="__BEN__",y.prototype.bfaTopo="__BFA__",y.prototype.bgdTopo="__BGD__",y.prototype.bgrTopo="__BGR__",y.prototype.bhrTopo="__BHR__",y.prototype.bhsTopo="__BHS__",y.prototype.bihTopo="__BIH__",y.prototype.bjnTopo="__BJN__",y.prototype.blmTopo="__BLM__",y.prototype.blrTopo="__BLR__",y.prototype.blzTopo="__BLZ__",y.prototype.bmuTopo="__BMU__",y.prototype.bolTopo="__BOL__",y.prototype.braTopo="__BRA__",y.prototype.brbTopo="__BRB__",y.prototype.brnTopo="__BRN__",y.prototype.btnTopo="__BTN__",y.prototype.norTopo="__NOR__",y.prototype.bwaTopo="__BWA__",y.prototype.cafTopo="__CAF__",y.prototype.canTopo="__CAN__",y.prototype.cheTopo="__CHE__",y.prototype.chlTopo="__CHL__",y.prototype.chnTopo="__CHN__",y.prototype.civTopo="__CIV__",y.prototype.clpTopo="__CLP__",y.prototype.cmrTopo="__CMR__",y.prototype.codTopo="__COD__",y.prototype.cogTopo="__COG__",y.prototype.cokTopo="__COK__",y.prototype.colTopo="__COL__",y.prototype.comTopo="__COM__",y.prototype.cpvTopo="__CPV__",y.prototype.criTopo="__CRI__",y.prototype.csiTopo="__CSI__",y.prototype.cubTopo="__CUB__",y.prototype.cuwTopo="__CUW__",y.prototype.cymTopo="__CYM__",y.prototype.cynTopo="__CYN__",y.prototype.cypTopo="__CYP__",y.prototype.czeTopo="__CZE__",y.prototype.deuTopo="__DEU__",y.prototype.djiTopo="__DJI__",y.prototype.dmaTopo="__DMA__",y.prototype.dnkTopo="__DNK__",y.prototype.domTopo="__DOM__",y.prototype.dzaTopo="__DZA__",y.prototype.ecuTopo="__ECU__",y.prototype.egyTopo="__EGY__",y.prototype.eriTopo="__ERI__",y.prototype.esbTopo="__ESB__",y.prototype.espTopo="__ESP__",y.prototype.estTopo="__EST__",y.prototype.ethTopo="__ETH__",y.prototype.finTopo="__FIN__",y.prototype.fjiTopo="__FJI__",y.prototype.flkTopo="__FLK__",y.prototype.fraTopo="__FRA__",y.prototype.froTopo="__FRO__",y.prototype.fsmTopo="__FSM__",y.prototype.gabTopo="__GAB__",y.prototype.psxTopo="__PSX__",y.prototype.gbrTopo="__GBR__",y.prototype.geoTopo="__GEO__",y.prototype.ggyTopo="__GGY__",y.prototype.ghaTopo="__GHA__",y.prototype.gibTopo="__GIB__",y.prototype.ginTopo="__GIN__",y.prototype.gmbTopo="__GMB__",y.prototype.gnbTopo="__GNB__",y.prototype.gnqTopo="__GNQ__",y.prototype.grcTopo="__GRC__",y.prototype.grdTopo="__GRD__",y.prototype.grlTopo="__GRL__",y.prototype.gtmTopo="__GTM__",y.prototype.gumTopo="__GUM__",y.prototype.guyTopo="__GUY__",y.prototype.hkgTopo="__HKG__",y.prototype.hmdTopo="__HMD__",y.prototype.hndTopo="__HND__",y.prototype.hrvTopo="__HRV__",y.prototype.htiTopo="__HTI__",y.prototype.hunTopo="__HUN__",y.prototype.idnTopo="__IDN__",y.prototype.imnTopo="__IMN__",y.prototype.indTopo="__IND__",y.prototype.ioaTopo="__IOA__",y.prototype.iotTopo="__IOT__",y.prototype.irlTopo="__IRL__",y.prototype.irnTopo="__IRN__",y.prototype.irqTopo="__IRQ__",y.prototype.islTopo="__ISL__",y.prototype.isrTopo="__ISR__",y.prototype.itaTopo="__ITA__",y.prototype.jamTopo="__JAM__",y.prototype.jeyTopo="__JEY__",y.prototype.jorTopo="__JOR__",y.prototype.jpnTopo="__JPN__",y.prototype.kabTopo="__KAB__",y.prototype.kasTopo="__KAS__",y.prototype.kazTopo="__KAZ__",y.prototype.kenTopo="__KEN__",y.prototype.kgzTopo="__KGZ__",y.prototype.khmTopo="__KHM__",y.prototype.kirTopo="__KIR__",y.prototype.knaTopo="__KNA__",y.prototype.korTopo="__KOR__",y.prototype.kosTopo="__KOS__",y.prototype.kwtTopo="__KWT__",y.prototype.laoTopo="__LAO__",y.prototype.lbnTopo="__LBN__",y.prototype.lbrTopo="__LBR__",y.prototype.lbyTopo="__LBY__",y.prototype.lcaTopo="__LCA__",y.prototype.lieTopo="__LIE__",y.prototype.lkaTopo="__LKA__",y.prototype.lsoTopo="__LSO__",y.prototype.ltuTopo="__LTU__",y.prototype.luxTopo="__LUX__",y.prototype.lvaTopo="__LVA__",y.prototype.macTopo="__MAC__",y.prototype.mafTopo="__MAF__",y.prototype.marTopo="__MAR__",y.prototype.mcoTopo="__MCO__",y.prototype.mdaTopo="__MDA__",y.prototype.mdgTopo="__MDG__",y.prototype.mdvTopo="__MDV__",y.prototype.mexTopo="__MEX__",y.prototype.mhlTopo="__MHL__",y.prototype.mkdTopo="__MKD__",y.prototype.mliTopo="__MLI__",y.prototype.mltTopo="__MLT__",y.prototype.mmrTopo="__MMR__",y.prototype.mneTopo="__MNE__",y.prototype.mngTopo="__MNG__",y.prototype.mnpTopo="__MNP__",y.prototype.mozTopo="__MOZ__",y.prototype.mrtTopo="__MRT__",y.prototype.msrTopo="__MSR__",y.prototype.musTopo="__MUS__",y.prototype.mwiTopo="__MWI__",y.prototype.mysTopo="__MYS__",y.prototype.namTopo="__NAM__",y.prototype.nclTopo="__NCL__",y.prototype.nerTopo="__NER__",y.prototype.nfkTopo="__NFK__",y.prototype.ngaTopo="__NGA__",y.prototype.nicTopo="__NIC__",y.prototype.niuTopo="__NIU__",y.prototype.nldTopo="__NLD__",y.prototype.nplTopo="__NPL__",y.prototype.nruTopo="__NRU__",y.prototype.nulTopo="__NUL__",y.prototype.nzlTopo="__NZL__",y.prototype.omnTopo="__OMN__",y.prototype.pakTopo="__PAK__",y.prototype.panTopo="__PAN__",y.prototype.pcnTopo="__PCN__",y.prototype.perTopo="__PER__",y.prototype.pgaTopo="__PGA__",y.prototype.phlTopo="__PHL__",y.prototype.plwTopo="__PLW__",y.prototype.pngTopo="__PNG__",y.prototype.polTopo="__POL__",y.prototype.priTopo="__PRI__",y.prototype.prkTopo="__PRK__",y.prototype.prtTopo="__PRT__",y.prototype.pryTopo="__PRY__",y.prototype.pyfTopo="__PYF__",y.prototype.qatTopo="__QAT__",y.prototype.rouTopo="__ROU__",y.prototype.rusTopo="__RUS__",y.prototype.rwaTopo="__RWA__",y.prototype.sahTopo="__SAH__",y.prototype.sauTopo="__SAU__",y.prototype.scrTopo="__SCR__",y.prototype.sdnTopo="__SDN__",y.prototype.sdsTopo="__SDS__",y.prototype.senTopo="__SEN__",y.prototype.serTopo="__SER__",y.prototype.sgpTopo="__SGP__",y.prototype.sgsTopo="__SGS__",y.prototype.shnTopo="__SHN__",y.prototype.slbTopo="__SLB__",y.prototype.sleTopo="__SLE__",y.prototype.slvTopo="__SLV__",y.prototype.smrTopo="__SMR__",y.prototype.solTopo="__SOL__",y.prototype.somTopo="__SOM__",y.prototype.spmTopo="__SPM__",y.prototype.srbTopo="__SRB__",y.prototype.stpTopo="__STP__",y.prototype.surTopo="__SUR__",y.prototype.svkTopo="__SVK__",y.prototype.svnTopo="__SVN__",y.prototype.sweTopo="__SWE__",y.prototype.swzTopo="__SWZ__",y.prototype.sxmTopo="__SXM__",y.prototype.sycTopo="__SYC__",y.prototype.syrTopo="__SYR__",y.prototype.tcaTopo="__TCA__",y.prototype.tcdTopo="__TCD__",y.prototype.tgoTopo="__TGO__",y.prototype.thaTopo="__THA__",y.prototype.tjkTopo={type:"Topology",objects:{tjk:{type:"GeometryCollection",geometries:[{type:"Polygon",properties:{name:"Gorno-Badakhshan"},id:"TJ.BK",arcs:[[0,1,2]]},{type:"Polygon",properties:{name:"Khatlon"},id:"TJ.KL",arcs:[[-1,3,4]]},{type:"Polygon",properties:{name:"Tadzhikistan Territories"},id:"TJ.RR",arcs:[[-2,-5,5,6,7],[8]]},{type:"MultiPolygon",properties:{name:"Leninabad"},id:"TJ.LE",arcs:[[[9]],[[10]],[[-7,11]]]},{type:"Polygon",properties:{name:"Dushanbe"},id:"TJ.DU",arcs:[[-9]]}]}},arcs:[[[3779,3025],[-1,1],[-21,40],[-8,19],[-2,26],[14,48],[54,134],[16,66],[2,28],[1,128],[-3,66],[-4,36],[0,17],[1,20],[10,54],[15,54],[3,17],[0,23],[-5,39],[-4,20],[-5,15],[-10,17],[-2,18],[0,27],[4,50],[18,55],[87,105],[15,30],[4,34]],[[3958,4212],[63,77],[14,22],[8,21],[5,29],[10,27],[18,26],[42,48],[14,23],[24,53],[2,30],[-6,27],[-14,25],[-38,40],[-6,14],[5,9],[33,19],[23,19],[70,86],[20,18],[52,25],[20,14],[17,9],[16,-5],[16,-30],[13,-56],[6,-10],[11,-2],[39,8],[41,-4],[19,2],[14,7],[44,45],[62,38],[26,9],[26,3],[17,-8],[8,-14],[-1,-26],[-3,-21],[1,-20],[6,-21],[41,-105],[5,-32],[-5,-48],[1,-25],[-2,-25],[-5,-26],[-12,-36],[-1,-27],[12,-24],[38,-16],[56,4],[45,16],[20,4],[15,-4],[17,-16],[14,-25],[7,-36],[4,-45],[7,-33],[12,-25],[35,-34],[23,-48],[9,-12],[8,-6],[15,1],[20,10],[33,30],[22,17],[22,5],[19,-8],[16,-16],[13,-22],[16,-36],[6,-6],[5,5],[4,14],[5,23],[6,17],[20,32],[9,11],[18,6],[40,-2],[11,5],[10,12],[5,22],[0,61],[3,21],[7,11],[16,10],[13,10],[9,19],[9,29],[6,11],[9,14],[14,29],[8,12],[13,7],[22,2],[18,-4],[20,1],[17,5],[58,27],[9,0],[8,-3],[11,-14],[5,-4],[6,2],[8,10],[9,23],[8,23],[10,13],[20,8],[21,11],[15,20],[15,25],[18,20],[35,15],[20,5],[63,5],[21,10],[23,19],[36,45],[18,27],[22,53],[37,40],[-37,57],[-13,34],[-16,53],[-5,32],[2,32],[5,23],[4,49],[14,61],[40,64],[73,98],[10,25],[3,20],[-2,18],[-2,27],[3,26],[9,18],[13,15],[30,24],[44,24],[18,15],[9,19],[4,22],[1,66],[5,53]],[[6246,5757],[1,-1],[14,1],[53,161],[29,123],[15,35],[23,11],[28,6],[48,33],[22,2],[42,-15],[22,-2],[20,5],[40,59],[14,8],[20,-7],[32,-30],[21,0],[14,13],[25,42],[13,16],[22,9],[22,-1],[236,-86],[19,1],[55,16],[27,-2],[80,-24],[22,-10],[19,1],[63,47],[16,4],[16,-7],[22,-15],[45,-18],[41,5],[130,62],[73,19],[9,24],[2,32],[10,35],[31,31],[140,48],[45,6],[118,-18],[36,-26],[-1,-45],[14,-131],[1,-47],[-3,-36],[-40,-160],[-10,-68],[7,-66],[31,-73],[54,-75],[11,-32],[12,-78],[8,-37],[14,-30],[76,-81],[42,-66],[19,-17],[12,-39],[4,-38],[-6,-35],[-19,-28],[-27,-13],[-62,0],[-29,-20],[-18,-26],[-18,-37],[-10,-41],[3,-42],[16,-34],[37,-58],[14,-32],[4,-45],[-8,-101],[5,-35],[46,-108],[8,-33],[13,-95],[11,-36],[24,-38],[22,-20],[46,-25],[22,-18],[39,-50],[20,-17],[123,-6],[21,7],[17,39],[-10,35],[-17,38],[-1,44],[10,12],[51,24],[9,15],[2,19],[-1,20],[3,19],[18,38],[18,16],[22,0],[79,-39],[25,-6],[28,1],[89,44],[27,-5],[182,-126],[217,-117],[23,-28],[20,-32],[21,-25],[29,-6],[29,4],[24,-7],[20,-22],[20,-38],[1,0],[0,-1],[11,-25],[9,-11],[23,-19],[9,-14],[3,-19],[2,-22],[9,-65],[0,-45],[-8,-42],[-14,-37],[-55,-86],[-12,-37],[-4,-41],[0,-219],[25,-263],[24,-65],[90,-72],[16,-63],[-5,-145],[3,-61],[0,-15],[4,-13],[14,-12],[11,-14],[-3,-16],[-22,-50],[-9,-7],[-5,-12],[4,-30],[6,-17],[9,-13],[65,-51],[16,-22],[5,-42],[-5,-21],[-9,-24],[-20,-39],[-9,-21],[-4,-21],[-2,-20],[-4,-19],[-17,-35],[-17,-29],[-14,-32],[-5,-44],[12,-80],[30,-66],[38,-51],[116,-96],[22,-29],[65,-122],[37,-51],[40,-41],[-62,-29],[-30,-22],[-16,-39],[-3,-85],[-11,-28],[-119,-63],[-31,-7],[-24,-20],[-11,-40],[-14,-37],[-26,-18],[-38,31],[-59,142],[-36,56],[-164,144],[-37,-30],[-130,-12],[-11,0],[-11,4],[-46,20],[-28,17],[-24,-3],[-22,-7],[-37,10],[-15,1],[-13,6],[-18,44],[-13,12],[-14,-2],[-15,-14],[-7,30],[-15,-62],[-31,-6],[-37,14],[-34,0],[-21,-31],[-2,-79],[-23,-39],[-32,-19],[-142,-41],[-96,-51],[-27,-8],[-72,-49],[-55,-9],[-26,-11],[-48,-64],[-18,-6],[-20,7],[-29,3],[-12,-6],[-21,-23],[-14,-2],[-9,10],[-18,36],[-10,13],[-26,3],[-54,-25],[-20,18],[-6,48],[16,45],[27,33],[27,14],[49,8],[19,13],[22,26],[21,36],[9,34],[0,96],[1,19],[9,58],[-46,8],[-55,-2],[-89,34],[-153,80],[-57,-2],[-80,-63],[-21,9],[-22,19],[-30,5],[-32,-4],[-26,-13],[-20,-21],[-62,-96],[-14,-10],[-28,15],[-11,-5],[-49,-55],[-20,-35],[-22,-67],[-14,-32],[-26,-25],[-92,-13],[-91,-79],[-29,-48],[-31,-16],[-60,-17],[-51,-44],[-38,-75],[-60,-178],[-53,-120],[-8,-44],[-11,-22],[-191,-41],[-43,-31],[-88,23],[-58,-17],[-129,-75],[-50,-50],[-13,-21],[-19,-40],[-11,-17],[-44,-36],[-33,-53],[-371,-398],[-50,-30],[-63,-17],[-62,0],[-60,19],[-53,41],[-43,65],[-18,40],[-14,44],[-9,46],[-9,106],[-13,46],[-72,169],[-11,42],[-4,49],[0,94],[-5,27],[-22,50],[-8,24],[-2,28],[2,139],[10,94],[8,35],[9,20],[-5,56],[47,115],[1,64],[8,29],[3,48],[-2,97],[-10,88],[4,32],[15,52],[12,92],[-18,185],[6,100],[4,13],[16,30],[6,20],[3,23],[6,71],[15,71],[2,22],[-3,26],[-11,48],[-3,22],[11,41],[47,43],[20,41],[5,41],[1,55],[-2,50],[-4,28],[10,15],[-39,69],[-39,37],[-46,4],[-156,-76],[-23,-25],[-25,-20],[-28,16],[-48,56],[-14,3],[-10,-4],[-6,5],[-5,29],[2,25],[12,51],[9,59],[38,101],[18,94],[23,65],[8,68],[24,99],[7,52],[-9,101],[-30,68],[-44,41],[-105,62],[-79,116],[-49,51],[-36,26],[-16,5],[-15,0],[-10,-7],[-10,-1],[-13,16],[-8,19],[-11,42],[-8,18],[-13,20],[-13,16],[-14,12],[-17,6],[-29,-1],[-10,-16],[4,-52],[-13,-24],[-31,11],[-52,35],[-15,-3],[-8,-10],[-4,-10],[-9,-6],[-12,1],[-20,10],[-12,3],[-40,0],[-21,-7],[-9,-16],[-16,-39],[-74,-11],[-24,-21],[0,-16],[26,-27],[-11,-27],[-45,-48],[-12,-9],[-29,3],[-12,-10],[-5,-20],[0,-24],[1,-23],[0,-20],[-17,-78],[-13,-9],[-18,-7],[-15,-12],[-12,-57],[-38,-104],[-33,-127],[-16,-38],[-13,-19],[-43,-27],[-14,-14],[-56,-83],[-58,-108],[-10,-11],[-25,-19]],[[3779,3025],[-6,-5],[-7,-12],[-6,-20],[-14,-9],[-15,-4],[-9,-7],[-5,-21],[0,-19],[4,-19],[10,-19],[-29,-16],[-30,-7],[-29,9],[-26,30],[-15,-58],[6,-71],[18,-67],[22,-48],[14,-9],[42,-19],[9,-19],[4,-33],[8,-30],[12,-24],[12,-16],[-7,-27],[3,-32],[13,-67],[1,-33],[-3,-20],[-5,-19],[-2,-29],[-16,-33],[-6,-6],[-6,-9],[1,-18],[1,-21],[-1,-15],[-7,-17],[-3,-5],[-7,-9],[-4,2],[-25,-2],[-2,0],[-19,-67],[-3,-20],[-9,-8],[-44,-79],[-37,-21],[-38,10],[-38,20],[-36,8],[9,-17],[-40,11],[-12,6],[-5,6],[-7,10],[-5,15],[-6,11],[-17,5],[-27,14],[-14,33],[-12,36],[-21,27],[-30,2],[-53,-39],[-26,-10],[-13,-9],[-13,-16],[-14,-10],[-13,10],[-9,10],[-29,13],[-10,2],[-32,-6],[-54,-33],[-28,-8],[-174,22],[-26,-16],[-22,-96],[-28,-39],[-56,-59],[-5,-11],[-8,-27],[-5,-12],[-10,-13],[-18,-18],[-7,-13],[-8,-36],[-2,-43],[1,-88],[2,-8],[12,-4],[4,-10],[-1,-13],[-3,-3],[-3,-2],[-2,-7],[1,-21],[2,-21],[4,-20],[6,-16],[11,-34],[8,-79],[11,-21],[-10,-50],[21,-14],[24,-7],[-4,-30],[-44,-105],[-21,-30],[-52,-47],[-20,-34],[-14,-19],[-15,-8],[-5,-1],[-29,-9],[-26,-18],[-25,-3],[-121,117],[-7,5],[-28,28],[-12,19],[-23,81],[-23,28],[-29,27],[-26,34],[-18,83],[-20,40],[-26,34],[-25,20],[-88,16],[-4,3],[-8,2],[-3,-8],[6,-27],[9,-15],[20,-22],[6,-10],[5,-33],[-7,-20],[-14,-6],[-19,12],[-16,33],[-12,36],[-14,30],[-27,9],[-28,-13],[-5,-26],[15,-69],[4,-49],[-6,-22],[-15,2],[-48,43],[-15,11],[-16,2],[-27,-4],[-49,10],[-24,-1],[-14,-25],[6,-9],[4,-10],[7,-28],[-29,-6],[-15,-33],[-7,-37],[-5,-17],[-23,-5],[-48,-22],[-26,-5],[-6,-10],[-18,-44],[-11,-10],[-13,-1],[-61,-20],[-80,-9],[19,-53],[-9,-34],[-25,-19],[-33,-5],[-25,9],[-25,14],[-25,3],[-24,-26],[-10,-38],[1,-46],[9,-96],[-14,-33],[-30,0],[-53,25],[-33,-6],[-24,-28],[-20,-31],[-24,-14],[-16,-14],[-84,-105],[-14,-13],[-15,-9],[-10,1],[-6,0],[-11,12],[-7,18],[-5,20],[-8,19],[-43,79],[-12,14],[-30,23],[-14,17],[-20,48],[-14,40],[-18,28],[-57,20],[-32,24],[-29,30],[-16,31],[-1,34],[11,147],[6,33],[24,69],[14,78],[7,82],[-4,97],[-26,181],[5,96],[36,141],[54,135],[66,119],[69,94],[93,185],[38,105],[55,234],[22,33],[40,19],[60,12],[19,8],[7,7]],[[1145,2898],[0,-1],[35,-38],[13,-21],[18,-23],[32,-4],[97,22],[24,9],[5,-6],[5,-8],[4,-10],[4,-8],[7,-4],[7,1],[25,9],[8,7],[7,15],[20,106],[13,46],[17,34],[40,26],[6,8],[3,16],[3,43],[1,52],[5,42],[-2,11],[-6,7],[-20,9],[-8,5],[-5,9],[1,12],[2,12],[20,59],[54,125],[4,15],[3,13],[3,28],[0,27],[-1,38],[-3,23],[-17,78],[0,11],[2,13],[5,12],[20,34],[23,30],[10,4],[12,-1],[47,-19],[43,-10],[10,-1],[12,3],[17,13],[10,9],[7,11],[15,30],[5,8],[8,5],[10,4],[13,1],[11,-5],[8,-7],[21,-46],[13,-2],[48,17],[9,5],[9,8],[10,18],[6,14],[16,49],[5,10],[6,9],[25,21],[86,45],[175,14],[59,40],[5,1],[8,0],[10,-3],[9,-6],[11,-9],[6,-10],[6,-9],[8,-18],[3,-11],[2,-7],[5,-42],[104,-5],[12,-8],[13,-12],[0,-12],[-3,-10],[-4,-10],[-13,-17],[-5,-11],[-2,-14],[7,-26],[8,-11],[12,-6],[14,0],[23,-2],[13,4],[9,7],[14,15],[16,27],[26,33],[23,36],[8,20],[5,9],[7,8],[5,9],[12,29],[7,8],[24,20],[5,5],[10,16],[5,9],[30,30],[34,29],[57,75],[12,28],[117,244],[7,9],[9,5],[18,-2],[8,-3],[8,-6],[6,-7],[9,-18],[3,-10],[5,-9],[8,-7],[11,-1],[23,10],[11,9],[9,10],[47,120],[76,114],[13,15],[6,5],[60,32],[20,14],[17,2],[24,-10],[18,-14],[11,-16],[10,-18],[45,-62],[16,-33],[29,-42],[33,-26],[19,-15],[9,-35],[-1,-30],[-7,-52],[-5,-54],[4,-20],[5,-6],[5,7],[37,62],[35,47],[6,7],[10,5],[13,3],[60,-2],[76,10],[8,-5],[6,-7],[4,-7],[7,-12],[52,-55],[5,-8],[5,-10],[3,-10],[6,-21],[6,-38],[7,-35]],[[1145,2898],[13,14],[10,29],[6,35],[9,39],[1,1],[15,44],[50,107],[32,127],[20,134],[-5,89],[-31,70],[-102,127],[-66,53],[-22,32],[-47,122],[-50,67],[-12,33],[-5,33],[-2,73],[-8,35],[-31,67],[-9,30],[-4,50],[5,132],[-3,46],[-17,86],[-4,42],[10,35],[33,32],[6,14],[1,26],[-5,21],[-8,20],[-4,23],[5,50],[14,12],[23,-1],[29,9],[22,18],[20,24],[16,31],[11,38],[1,51],[-12,46],[-14,27]],[[1036,5091],[1,0],[34,13],[63,3],[23,9],[72,41],[20,6],[17,1],[9,-4],[25,-17],[11,-5],[8,1],[12,7],[8,6],[46,26],[37,-3],[25,10],[45,25],[14,22],[18,50],[41,40],[0,1],[3,9],[11,62],[7,28],[9,10],[9,4],[88,-6],[121,65],[17,4],[7,-6],[4,-10],[3,-10],[9,-8],[15,-5],[78,8],[72,-8],[81,-29],[7,-7],[19,-7],[5,-3],[32,-11],[41,-11],[39,24],[8,11],[6,9],[17,18],[93,73],[30,17],[21,9],[124,-6],[21,2],[9,9],[5,12],[3,84],[2,14],[5,18],[7,18],[17,21],[12,8],[12,2],[10,-1],[96,18],[14,0],[4,-4],[46,-58],[9,-19],[6,-20],[3,-24],[1,-26],[-2,-28],[-7,-41],[-1,-13],[1,-12],[5,-10],[7,-9],[7,-1],[7,5],[5,8],[11,18],[12,13],[19,12],[44,19],[14,12],[7,12],[-3,10],[-1,12],[-1,10],[1,16],[29,36],[5,10],[8,16],[4,17],[5,25],[7,94],[-3,18],[-4,13],[-16,24],[-7,13],[-5,22],[89,73],[12,2],[14,1],[11,-30],[8,-18],[8,-9],[10,-8],[18,-7],[11,0],[9,4],[14,10],[13,12],[12,15],[15,28],[12,33],[7,13],[11,13],[10,4],[129,25],[13,-2],[5,-19],[5,-11],[10,-11],[8,0],[7,5],[5,9],[11,13],[15,15],[36,19],[19,5],[14,-2],[7,-7],[4,-9],[2,-12],[0,-27],[1,-13],[4,-11],[6,0],[6,5],[26,26],[135,92],[7,7],[4,10],[9,28],[10,17],[9,7],[10,3],[8,-3],[7,-6],[11,-16],[6,-7],[13,-3],[51,3],[133,54],[16,2],[8,8],[6,10],[8,28],[3,9],[7,5],[70,13],[17,8],[12,10],[4,10],[7,26],[4,11],[6,9],[20,16],[46,49]],[[4235,6456],[1,-2],[13,-16],[30,-17],[13,-16],[7,-32],[-3,-31],[-6,-31],[0,-28],[19,-47],[34,-28],[39,-10],[35,8],[39,30],[15,6],[20,1],[11,-3],[10,6],[16,25],[24,16],[28,-18],[31,-28],[35,-14],[41,30],[24,63],[19,75],[26,63],[42,39],[53,20],[55,4],[72,-19],[16,-1],[14,15],[41,65],[18,18],[44,34],[9,10],[18,26],[9,9],[12,6],[37,9],[44,29],[23,3],[43,-36],[21,-26],[2,-2],[18,-34],[8,-37],[-7,-34],[-33,-66],[-10,-36],[26,-80],[53,-34],[62,-4],[130,38],[26,1],[20,-25],[11,-52],[4,-60],[-5,-46],[-15,-34],[-17,-24],[-13,-29],[-3,-47],[10,-46],[19,-36],[23,-25],[24,-11],[47,8],[47,28],[126,123],[22,16],[47,14],[45,34],[24,5],[22,-24],[14,-50],[7,-58],[3,-49],[11,-34],[27,-16],[55,-13],[11,-9],[19,-21],[27,-20],[4,-14],[0,-18],[3,-22],[12,-37],[13,-26]],[[1730,4277],[29,17],[8,-26],[-9,-27],[13,-28],[-1,-34],[3,-50],[24,-24],[24,2],[24,9],[2,23],[-2,38],[35,45],[38,22],[8,30],[15,33],[-22,7],[-7,29],[-23,8],[-13,10],[2,27],[-14,-1],[-5,36],[-8,32],[-13,33],[-9,35],[-11,15],[-5,-17],[-2,-32],[5,-42],[-7,-27],[-34,-23],[-28,-12],[-4,-21],[12,-41],[-33,-33],[8,-13]],[[4190,7272],[44,-2],[41,26],[16,-6],[9,-42],[-2,-41],[-13,-17],[-42,-11],[-37,-26],[-65,-73],[-8,8],[-36,86],[-13,22],[-43,42],[-17,33],[-10,38],[2,36],[19,-1],[155,-72]],[[4220,9798],[2,-39],[-26,8],[-21,28],[-37,68],[-22,30],[-1,2],[-15,47],[21,7],[35,-20],[29,-37],[18,-39],[17,-55]],[[1036,5091],[-24,50],[-43,134],[-19,33],[-1,0],[-10,4],[-10,1],[-11,-1],[-10,-4],[-21,-22],[-21,-11],[-21,6],[-20,27],[-10,8],[-22,10],[-18,1],[-18,-7],[-17,-12],[-98,-46],[-34,-1],[-163,37],[-22,31],[-2,2],[-6,56],[14,178],[-2,31],[0,1],[-12,27],[-8,4],[-21,-6],[-9,2],[-7,10],[-10,26],[-6,9],[-50,28],[-104,6],[-155,76],[-36,47],[0,1],[-9,90],[2,33],[3,16],[6,10],[9,12],[3,3],[14,6],[11,-5],[8,5],[10,76],[16,77],[2,84],[8,92],[16,89],[12,21],[19,3],[33,-6],[7,2],[6,4],[5,7],[4,8],[-9,102],[26,34],[102,22],[119,118],[47,21],[60,-2],[437,-157],[191,-8],[105,-52],[63,-6],[63,8],[79,29],[25,16],[0,1],[-9,29],[-5,14],[17,35],[55,48],[31,45],[17,45],[7,55],[13,370],[13,49],[15,-2],[3,-1],[14,-8],[43,53],[21,-22],[34,-77],[17,-12],[9,15],[3,23],[0,11],[0,4],[9,34],[4,4],[14,3],[4,5],[16,43],[0,33],[-28,84],[-13,49],[-4,43],[8,18],[27,-25],[26,-79],[20,-99],[29,-63],[54,32],[-4,51],[-113,214],[-6,23],[-2,21],[3,48],[-4,17],[-23,25],[-3,21],[17,42],[20,-22],[29,-72],[16,7],[46,55],[26,11],[93,-20],[29,6],[10,29],[2,33],[-4,35],[-8,32],[-60,59],[-299,-80],[-12,-3],[-46,24],[-57,49],[-33,50],[27,26],[52,19],[71,26],[28,3],[75,-18],[29,6],[45,35],[25,14],[208,45],[29,-7],[41,-28],[44,-30],[115,-48],[63,-3],[48,31],[0,54],[-93,115],[-5,68],[34,5],[49,-25],[41,9],[9,113],[-8,50],[-14,44],[-33,82],[-12,41],[-28,129],[-51,119],[0,48],[46,43],[78,8],[18,16],[5,31],[-8,122],[0,84],[9,69],[20,59],[33,58],[18,21],[20,15],[42,19],[23,-4],[17,-19],[16,-23],[20,-17],[41,-5],[29,-37],[49,-106],[16,-18],[32,-29],[14,-24],[23,-54],[14,-24],[16,-20],[39,-20],[34,14],[31,38],[53,92],[26,29],[28,20],[235,101],[121,126],[133,72],[93,76],[71,113],[35,242],[48,17],[57,-32],[16,-24],[24,-36],[3,-8],[4,-7],[41,-47],[233,-359],[11,-20],[-3,-43],[-25,13],[-45,53],[-25,-4],[-12,-29],[3,-39],[20,-36],[117,-37],[49,-38],[-11,-77],[-3,-20],[0,-1],[-20,-17],[-4,-9],[-3,-11],[-4,-9],[-21,-6],[-11,-8],[-18,-19],[-19,-24],[-78,-87],[-45,-76],[-16,-19],[-19,-13],[-19,-7],[-18,-11],[-17,-24],[-31,-71],[-13,-23],[-12,-7],[-88,-28],[-38,-34],[-21,-45],[3,-48],[2,-11],[2,-6],[17,-33],[-1,0],[3,-3],[11,-18],[3,-10],[-17,-80],[64,-39],[26,-10],[28,3],[24,10],[25,4],[28,-16],[34,-77],[17,-106],[23,-97],[51,-51],[54,-5],[55,7],[182,77],[114,14],[26,-4],[26,-55],[-21,-56],[-43,-44],[-39,-18],[-68,21],[-17,-9],[-9,-10],[-24,-17],[0,3],[-5,6],[-6,4],[-7,-1],[-5,-6],[-7,-14],[-50,-59],[-18,-15],[-82,-37],[-33,-45],[-6,-58],[1,-71],[-11,-79],[-17,-42],[-22,-32],[-26,-22],[-27,-14],[-55,-2],[-15,-11],[-8,-20],[-11,-51],[-11,-19],[-27,13],[-10,30],[4,40],[11,43],[17,32],[20,20],[21,15],[20,19],[19,51],[-13,41],[-30,28],[-32,14],[-102,21],[-48,29],[-45,8],[-23,17],[-21,31],[-16,32],[-18,28],[-28,19],[-29,3],[-64,-5],[-28,12],[-182,164],[-45,7],[-504,-248],[-21,-4],[-20,3],[-8,11],[-14,35],[-10,5],[-6,-11],[-5,-39],[-4,-15],[-26,-53],[-21,-52],[-8,-59],[10,-73],[5,-13],[3,-14],[1,-16],[-1,-15],[29,-75],[2,-30],[-123,-60],[-62,145],[-37,58],[-18,5],[-5,-5],[0,-14],[-6,-23],[-24,-76],[-59,-244],[-14,-89],[-4,-90],[9,-42],[19,-31],[23,-26],[18,-31],[9,-38],[5,-43],[-6,-274],[18,-55],[50,29],[8,16],[3,18],[5,15],[12,8],[7,-7],[31,-45],[27,-12],[55,12],[28,0],[24,5],[23,12],[22,18],[43,52],[22,12],[112,10],[52,-9],[50,-23],[54,-43],[49,-21],[99,29],[52,-8],[39,-25],[11,12],[20,40],[21,27],[27,11],[28,0],[26,-9],[43,-34],[20,-11],[22,10],[10,22],[36,106],[20,21],[12,-22],[6,-43],[0,-39],[-14,-82],[3,-32],[22,-12],[22,8],[114,116],[17,9],[13,-3],[27,-11],[12,0],[8,7],[7,13],[7,12],[13,6],[21,6],[41,22],[22,3],[18,-10],[29,-35],[16,-13],[22,-3],[47,12],[22,-4],[31,-33],[18,-48],[25,-110]]],transform:{scale:[.0007822216955695406,.0004361772033203289],translate:[67.34269006300022,36.67864084900012]}},y.prototype.tkmTopo="__TKM__",y.prototype.tlsTopo="__TLS__",y.prototype.tonTopo="__TON__",y.prototype.ttoTopo="__TTO__",y.prototype.tunTopo="__TUN__",y.prototype.turTopo="__TUR__",y.prototype.tuvTopo="__TUV__",y.prototype.twnTopo="__TWN__",y.prototype.tzaTopo="__TZA__",y.prototype.ugaTopo="__UGA__",y.prototype.ukrTopo="__UKR__",y.prototype.umiTopo="__UMI__",y.prototype.uryTopo="__URY__",y.prototype.usaTopo="__USA__",y.prototype.usgTopo="__USG__",y.prototype.uzbTopo="__UZB__",y.prototype.vatTopo="__VAT__",y.prototype.vctTopo="__VCT__",y.prototype.venTopo="__VEN__",y.prototype.vgbTopo="__VGB__",y.prototype.virTopo="__VIR__",y.prototype.vnmTopo="__VNM__",y.prototype.vutTopo="__VUT__",y.prototype.wlfTopo="__WLF__",y.prototype.wsbTopo="__WSB__",y.prototype.wsmTopo="__WSM__",y.prototype.yemTopo="__YEM__",y.prototype.zafTopo="__ZAF__",y.prototype.zmbTopo="__ZMB__",y.prototype.zweTopo="__ZWE__",y.prototype.latLngToXY=function(o,t){return this.projection([t,o])},y.prototype.addLayer=function(o,t,p){return(p?this.svg.insert("g",":first-child"):this.svg.append("g")).attr("id",t||"").attr("class",o||"")},y.prototype.updateChoropleth=function(o){var t=this.svg;for(var p in o)if(o.hasOwnProperty(p)){var e,_=o[p];if(!p)continue;e="string"==typeof _?_:"string"==typeof _.color?_.color:this.options.fills[_.fillKey],_===Object(_)&&(this.options.data[p]=l(_,this.options.data[p]||{}),this.svg.select("."+p).attr("data-info",JSON.stringify(this.options.data[p]))),t.selectAll("."+p).transition().style("fill",e)}},y.prototype.updatePopup=function(o,t,p){var e=this;o.on("mousemove",null),o.on("mousemove",function(){var _=d.mouse(e.options.element);d.select(e.svg[0][0].parentNode).select(".datamaps-hoverover").style("top",_[1]+30+"px").html(function(){var e=JSON.parse(o.attr("data-info"));try{return p.popupTemplate(t,e)}catch(o){return""}}).style("left",_[0]+"px")}),d.select(e.svg[0][0].parentNode).select(".datamaps-hoverover").style("display","block")},y.prototype.addPlugin=function(o,t){var p=this;void 0===y.prototype[o]&&(y.prototype[o]=function(e,_,r,i){var a;void 0===i&&(i=!1),"function"==typeof _&&(r=_,_=void 0),_=l(_||{},p.options[o+"Config"]),!i&&this.options[o+"Layer"]?(a=this.options[o+"Layer"],_=_||this.options[o+"Options"]):(a=this.addLayer(o),this.options[o+"Layer"]=a,this.options[o+"Options"]=_),t.apply(this,[a,e,_]),r&&r(a)})},d=p("O72r"),h=p("tiYs"),o.exports=y,window.jQuery&&(window.jQuery.fn.datamaps=function(o,t){(o=o||{}).element=this[0];var p=new y(o);return"function"==typeof t&&t(p,o),this})}()}}]);