import{a as tr,c as vu}from"./index-88317f61.js";/* empty css                 *//* empty css                        *//* empty css                   *//* empty css                    *//* empty css                  */import{u as st,h as pu,j as mu,k as _u,l as Xt,m as go,A as gu,n as yu,p as Bs,R as Us,o as xu,q as Ca,s as $t,t as Tu,v as wu,w as Su,x as bu,Z as Eu,C as hi,y as Ee,z as _r,D as Au,E as zs,M as Un,F as Sn,G as bn,H as $i,I as Gs,J as Vs,K as Hs,N as zn,O as Gn,P as Xa,Q as Cu,S as Lu,a as Du,T as Mu,U as La,V as ji,W as jt,X as $a,B as Pu,Y as Ru,_ as yo,$ as Nu,a0 as Iu,a1 as ja,a2 as Ou,a3 as Jr,a4 as xo,a5 as Fu,a6 as Bu,a7 as Uu,a8 as ks,a9 as zt,aa as Gt,ab as zu,ac as Gu,ad as Ji,ae as Vu,c as Hu,af as ku,ag as Ws,ah as Wu,ai as Xu,aj as To,ak as wo,al as So,i as gr,g as $u,L as pn}from"./echarts-37646912.js";import{_ as rr}from"./leaflet-5945a372.js";import{r as ie,w as Rt,M as ir,N as yr,y as fe,z as Se,A as O,Z as Re,B as j,C as ae,ad as St,ae as bt,a7 as Ge,a0 as Jt,aR as ju,n as yt,ar as zr,am as Gr,aS as Vn,ai as Za,aT as Xs,O as qt,_ as Da,Q as gt,ac as $s,as as Zu,ah as js,ak as Zs,ag as Ys,aj as Yu,l as En,b as qu,aL as Ku,az as Qu,aU as Ju,L as Vt,aI as ec,aV as tc}from"./element-plus-f32ef508.js";/* empty css                        */st([pu,mu]);st(_u);function bo(e,t,r){typeof t=="object"&&(r=t,t=null);var i=this,n;if(!(e instanceof Function)){n=[];for(var a in e)e.hasOwnProperty(a)&&n.push(a)}var o=function(l){if(i.apply(this,arguments),e instanceof Function?Eo(this,e.call(this,l)):rc(this,e,n),this.constructor===o)for(var u=o.__initializers__,c=0;c<u.length;c++)u[c].apply(this,arguments)};o.__super__=i,i.__initializers__?o.__initializers__=i.__initializers__.slice():o.__initializers__=[],t&&o.__initializers__.push(t);var s=function(){};return s.prototype=i.prototype,o.prototype=new s,o.prototype.constructor=o,Eo(o.prototype,r),o.extend=i.extend,o.derive=i.extend,o}function Eo(e,t){if(t)for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])}function rc(e,t,r){for(var i=0;i<r.length;i++){var n=r[i];e[n]=t[n]}}const ic={extend:bo,derive:bo};function nc(e,t){this.action=e,this.context=t}var ac={trigger:function(e){if(this.hasOwnProperty("__handlers__")&&this.__handlers__.hasOwnProperty(e)){var t=this.__handlers__[e],r=t.length,i=-1,n=arguments;switch(n.length){case 1:for(;++i<r;)t[i].action.call(t[i].context);return;case 2:for(;++i<r;)t[i].action.call(t[i].context,n[1]);return;case 3:for(;++i<r;)t[i].action.call(t[i].context,n[1],n[2]);return;case 4:for(;++i<r;)t[i].action.call(t[i].context,n[1],n[2],n[3]);return;case 5:for(;++i<r;)t[i].action.call(t[i].context,n[1],n[2],n[3],n[4]);return;default:for(;++i<r;)t[i].action.apply(t[i].context,Array.prototype.slice.call(n,1));return}}},on:function(e,t,r){if(!(!e||!t)){var i=this.__handlers__||(this.__handlers__={});if(!i[e])i[e]=[];else if(this.has(e,t))return;var n=new nc(t,r||this);return i[e].push(n),this}},once:function(e,t,r){if(!e||!t)return;var i=this;function n(){i.off(e,n),t.apply(this,arguments)}return this.on(e,n,r)},before:function(e,t,r){if(!(!e||!t))return e="before"+e,this.on(e,t,r)},after:function(e,t,r){if(!(!e||!t))return e="after"+e,this.on(e,t,r)},success:function(e,t){return this.once("success",e,t)},error:function(e,t){return this.once("error",e,t)},off:function(e,t){var r=this.__handlers__||(this.__handlers__={});if(!t){r[e]=[];return}if(r[e]){for(var i=r[e],n=[],a=0;a<i.length;a++)t&&i[a].action!==t&&n.push(i[a]);r[e]=n}return this},has:function(e,t){var r=this.__handlers__;if(!r||!r[e])return!1;for(var i=r[e],n=0;n<i.length;n++)if(i[n].action===t)return!0}};const Ya=ac;var oc=0,sc=Array.prototype,lc=sc.forEach,Li={genGUID:function(){return++oc},relative2absolute:function(e,t){if(!t||e.match(/^\//))return e;for(var r=e.split("/"),i=t.split("/"),n=r[0];n==="."||n==="..";)n===".."&&i.pop(),r.shift(),n=r[0];return i.join("/")+"/"+r.join("/")},extend:function(e,t){if(t)for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);return e},defaults:function(e,t){if(t)for(var r in t)e[r]===void 0&&(e[r]=t[r]);return e},extendWithPropList:function(e,t,r){if(t)for(var i=0;i<r.length;i++){var n=r[i];e[n]=t[n]}return e},defaultsWithPropList:function(e,t,r){if(t)for(var i=0;i<r.length;i++){var n=r[i];e[n]==null&&(e[n]=t[n])}return e},each:function(e,t,r){if(e&&t)if(e.forEach&&e.forEach===lc)e.forEach(t,r);else if(e.length===+e.length)for(var i=0,n=e.length;i<n;i++)t.call(r,e[i],i,e);else for(var a in e)e.hasOwnProperty(a)&&t.call(r,e[a],a,e)},isObject:function(e){return e===Object(e)},isArray:function(e){return Array.isArray(e)},isArrayLike:function(e){return e?e.length===+e.length:!1},clone:function(e){if(Li.isObject(e)){if(Li.isArray(e))return e.slice();if(Li.isArrayLike(e)){for(var t=new e.constructor(e.length),r=0;r<e.length;r++)t[r]=e[r];return t}else return Li.extend({},e)}else return e}};const at=Li;var Hn=function(){this.__uid__=at.genGUID()};Hn.__initializers__=[function(e){at.extend(this,e)}];at.extend(Hn,ic);at.extend(Hn.prototype,Ya);const vt=Hn;var Ao=["OES_texture_float","OES_texture_half_float","OES_texture_float_linear","OES_texture_half_float_linear","OES_standard_derivatives","OES_vertex_array_object","OES_element_index_uint","WEBGL_compressed_texture_s3tc","WEBGL_depth_texture","EXT_texture_filter_anisotropic","EXT_shader_texture_lod","WEBGL_draw_buffers","EXT_frag_depth","EXT_sRGB","ANGLE_instanced_arrays"],Co=["MAX_TEXTURE_SIZE","MAX_CUBE_MAP_TEXTURE_SIZE"];function uc(e){for(var t={},r={},i=0;i<Ao.length;i++){var n=Ao[i];o(n)}for(var i=0;i<Co.length;i++){var a=Co[i];r[a]=e.getParameter(e[a])}this.getExtension=function(s){return s in t||o(s),t[s]},this.getParameter=function(s){return r[s]};function o(s){if(e.getExtension){var l=e.getExtension(s);l||(l=e.getExtension("MOZ_"+s)),l||(l=e.getExtension("WEBKIT_"+s)),t[s]=l}}}const F={DEPTH_BUFFER_BIT:256,STENCIL_BUFFER_BIT:1024,COLOR_BUFFER_BIT:16384,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,ZERO:0,ONE:1,SRC_COLOR:768,ONE_MINUS_SRC_COLOR:769,SRC_ALPHA:770,ONE_MINUS_SRC_ALPHA:771,DST_ALPHA:772,ONE_MINUS_DST_ALPHA:773,DST_COLOR:774,ONE_MINUS_DST_COLOR:775,SRC_ALPHA_SATURATE:776,FUNC_ADD:32774,BLEND_EQUATION:32777,BLEND_EQUATION_RGB:32777,BLEND_EQUATION_ALPHA:34877,FUNC_SUBTRACT:32778,FUNC_REVERSE_SUBTRACT:32779,BLEND_DST_RGB:32968,BLEND_SRC_RGB:32969,BLEND_DST_ALPHA:32970,BLEND_SRC_ALPHA:32971,CONSTANT_COLOR:32769,ONE_MINUS_CONSTANT_COLOR:32770,CONSTANT_ALPHA:32771,ONE_MINUS_CONSTANT_ALPHA:32772,BLEND_COLOR:32773,ARRAY_BUFFER:34962,ELEMENT_ARRAY_BUFFER:34963,ARRAY_BUFFER_BINDING:34964,ELEMENT_ARRAY_BUFFER_BINDING:34965,STREAM_DRAW:35040,STATIC_DRAW:35044,DYNAMIC_DRAW:35048,BUFFER_SIZE:34660,BUFFER_USAGE:34661,CURRENT_VERTEX_ATTRIB:34342,FRONT:1028,BACK:1029,FRONT_AND_BACK:1032,CULL_FACE:2884,BLEND:3042,DITHER:3024,STENCIL_TEST:2960,DEPTH_TEST:2929,SCISSOR_TEST:3089,POLYGON_OFFSET_FILL:32823,SAMPLE_ALPHA_TO_COVERAGE:32926,SAMPLE_COVERAGE:32928,NO_ERROR:0,INVALID_ENUM:1280,INVALID_VALUE:1281,INVALID_OPERATION:1282,OUT_OF_MEMORY:1285,CW:2304,CCW:2305,LINE_WIDTH:2849,ALIASED_POINT_SIZE_RANGE:33901,ALIASED_LINE_WIDTH_RANGE:33902,CULL_FACE_MODE:2885,FRONT_FACE:2886,DEPTH_RANGE:2928,DEPTH_WRITEMASK:2930,DEPTH_CLEAR_VALUE:2931,DEPTH_FUNC:2932,STENCIL_CLEAR_VALUE:2961,STENCIL_FUNC:2962,STENCIL_FAIL:2964,STENCIL_PASS_DEPTH_FAIL:2965,STENCIL_PASS_DEPTH_PASS:2966,STENCIL_REF:2967,STENCIL_VALUE_MASK:2963,STENCIL_WRITEMASK:2968,STENCIL_BACK_FUNC:34816,STENCIL_BACK_FAIL:34817,STENCIL_BACK_PASS_DEPTH_FAIL:34818,STENCIL_BACK_PASS_DEPTH_PASS:34819,STENCIL_BACK_REF:36003,STENCIL_BACK_VALUE_MASK:36004,STENCIL_BACK_WRITEMASK:36005,VIEWPORT:2978,SCISSOR_BOX:3088,COLOR_CLEAR_VALUE:3106,COLOR_WRITEMASK:3107,UNPACK_ALIGNMENT:3317,PACK_ALIGNMENT:3333,MAX_TEXTURE_SIZE:3379,MAX_VIEWPORT_DIMS:3386,SUBPIXEL_BITS:3408,RED_BITS:3410,GREEN_BITS:3411,BLUE_BITS:3412,ALPHA_BITS:3413,DEPTH_BITS:3414,STENCIL_BITS:3415,POLYGON_OFFSET_UNITS:10752,POLYGON_OFFSET_FACTOR:32824,TEXTURE_BINDING_2D:32873,SAMPLE_BUFFERS:32936,SAMPLES:32937,SAMPLE_COVERAGE_VALUE:32938,SAMPLE_COVERAGE_INVERT:32939,COMPRESSED_TEXTURE_FORMATS:34467,DONT_CARE:4352,FASTEST:4353,NICEST:4354,GENERATE_MIPMAP_HINT:33170,BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,INT:5124,UNSIGNED_INT:5125,FLOAT:5126,DEPTH_COMPONENT:6402,ALPHA:6406,RGB:6407,RGBA:6408,LUMINANCE:6409,LUMINANCE_ALPHA:6410,UNSIGNED_SHORT_4_4_4_4:32819,UNSIGNED_SHORT_5_5_5_1:32820,UNSIGNED_SHORT_5_6_5:33635,FRAGMENT_SHADER:35632,VERTEX_SHADER:35633,MAX_VERTEX_ATTRIBS:34921,MAX_VERTEX_UNIFORM_VECTORS:36347,MAX_VARYING_VECTORS:36348,MAX_COMBINED_TEXTURE_IMAGE_UNITS:35661,MAX_VERTEX_TEXTURE_IMAGE_UNITS:35660,MAX_TEXTURE_IMAGE_UNITS:34930,MAX_FRAGMENT_UNIFORM_VECTORS:36349,SHADER_TYPE:35663,DELETE_STATUS:35712,LINK_STATUS:35714,VALIDATE_STATUS:35715,ATTACHED_SHADERS:35717,ACTIVE_UNIFORMS:35718,ACTIVE_ATTRIBUTES:35721,SHADING_LANGUAGE_VERSION:35724,CURRENT_PROGRAM:35725,NEVER:512,LESS:513,EQUAL:514,LEQUAL:515,GREATER:516,NOTEQUAL:517,GEQUAL:518,ALWAYS:519,KEEP:7680,REPLACE:7681,INCR:7682,DECR:7683,INVERT:5386,INCR_WRAP:34055,DECR_WRAP:34056,VENDOR:7936,RENDERER:7937,VERSION:7938,NEAREST:9728,LINEAR:9729,NEAREST_MIPMAP_NEAREST:9984,LINEAR_MIPMAP_NEAREST:9985,NEAREST_MIPMAP_LINEAR:9986,LINEAR_MIPMAP_LINEAR:9987,TEXTURE_MAG_FILTER:10240,TEXTURE_MIN_FILTER:10241,TEXTURE_WRAP_S:10242,TEXTURE_WRAP_T:10243,TEXTURE_2D:3553,TEXTURE:5890,TEXTURE_CUBE_MAP:34067,TEXTURE_BINDING_CUBE_MAP:34068,TEXTURE_CUBE_MAP_POSITIVE_X:34069,TEXTURE_CUBE_MAP_NEGATIVE_X:34070,TEXTURE_CUBE_MAP_POSITIVE_Y:34071,TEXTURE_CUBE_MAP_NEGATIVE_Y:34072,TEXTURE_CUBE_MAP_POSITIVE_Z:34073,TEXTURE_CUBE_MAP_NEGATIVE_Z:34074,MAX_CUBE_MAP_TEXTURE_SIZE:34076,TEXTURE0:33984,TEXTURE1:33985,TEXTURE2:33986,TEXTURE3:33987,TEXTURE4:33988,TEXTURE5:33989,TEXTURE6:33990,TEXTURE7:33991,TEXTURE8:33992,TEXTURE9:33993,TEXTURE10:33994,TEXTURE11:33995,TEXTURE12:33996,TEXTURE13:33997,TEXTURE14:33998,TEXTURE15:33999,TEXTURE16:34e3,TEXTURE17:34001,TEXTURE18:34002,TEXTURE19:34003,TEXTURE20:34004,TEXTURE21:34005,TEXTURE22:34006,TEXTURE23:34007,TEXTURE24:34008,TEXTURE25:34009,TEXTURE26:34010,TEXTURE27:34011,TEXTURE28:34012,TEXTURE29:34013,TEXTURE30:34014,TEXTURE31:34015,ACTIVE_TEXTURE:34016,REPEAT:10497,CLAMP_TO_EDGE:33071,MIRRORED_REPEAT:33648,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,INT_VEC2:35667,INT_VEC3:35668,INT_VEC4:35669,BOOL:35670,BOOL_VEC2:35671,BOOL_VEC3:35672,BOOL_VEC4:35673,FLOAT_MAT2:35674,FLOAT_MAT3:35675,FLOAT_MAT4:35676,SAMPLER_2D:35678,SAMPLER_CUBE:35680,VERTEX_ATTRIB_ARRAY_ENABLED:34338,VERTEX_ATTRIB_ARRAY_SIZE:34339,VERTEX_ATTRIB_ARRAY_STRIDE:34340,VERTEX_ATTRIB_ARRAY_TYPE:34341,VERTEX_ATTRIB_ARRAY_NORMALIZED:34922,VERTEX_ATTRIB_ARRAY_POINTER:34373,VERTEX_ATTRIB_ARRAY_BUFFER_BINDING:34975,COMPILE_STATUS:35713,LOW_FLOAT:36336,MEDIUM_FLOAT:36337,HIGH_FLOAT:36338,LOW_INT:36339,MEDIUM_INT:36340,HIGH_INT:36341,FRAMEBUFFER:36160,RENDERBUFFER:36161,RGBA4:32854,RGB5_A1:32855,RGB565:36194,DEPTH_COMPONENT16:33189,STENCIL_INDEX:6401,STENCIL_INDEX8:36168,DEPTH_STENCIL:34041,RENDERBUFFER_WIDTH:36162,RENDERBUFFER_HEIGHT:36163,RENDERBUFFER_INTERNAL_FORMAT:36164,RENDERBUFFER_RED_SIZE:36176,RENDERBUFFER_GREEN_SIZE:36177,RENDERBUFFER_BLUE_SIZE:36178,RENDERBUFFER_ALPHA_SIZE:36179,RENDERBUFFER_DEPTH_SIZE:36180,RENDERBUFFER_STENCIL_SIZE:36181,FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE:36048,FRAMEBUFFER_ATTACHMENT_OBJECT_NAME:36049,FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL:36050,FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE:36051,COLOR_ATTACHMENT0:36064,DEPTH_ATTACHMENT:36096,STENCIL_ATTACHMENT:36128,DEPTH_STENCIL_ATTACHMENT:33306,NONE:0,FRAMEBUFFER_COMPLETE:36053,FRAMEBUFFER_INCOMPLETE_ATTACHMENT:36054,FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:36055,FRAMEBUFFER_INCOMPLETE_DIMENSIONS:36057,FRAMEBUFFER_UNSUPPORTED:36061,FRAMEBUFFER_BINDING:36006,RENDERBUFFER_BINDING:36007,MAX_RENDERBUFFER_SIZE:34024,INVALID_FRAMEBUFFER_OPERATION:1286,UNPACK_FLIP_Y_WEBGL:37440,UNPACK_PREMULTIPLY_ALPHA_WEBGL:37441,CONTEXT_LOST_WEBGL:37442,UNPACK_COLORSPACE_CONVERSION_WEBGL:37443,BROWSER_DEFAULT_WEBGL:37444};function cc(e){var t=new XMLHttpRequest;t.open("get",e.url),t.responseType=e.responseType||"text",e.onprogress&&(t.onprogress=function(r){if(r.lengthComputable){var i=r.loaded/r.total;e.onprogress(i,r.loaded,r.total)}else e.onprogress(null)}),t.onload=function(r){t.status>=400?e.onerror&&e.onerror():e.onload&&e.onload(t.response)},e.onerror&&(t.onerror=e.onerror),t.send(null)}const hc={get:cc};var Qn,pt={};pt.supportWebGL=function(){if(Qn==null)try{var e=document.createElement("canvas"),t=e.getContext("webgl")||e.getContext("experimental-webgl");if(!t)throw new Error}catch{Qn=!1}return Qn};pt.Int8Array=typeof Int8Array>"u"?Array:Int8Array;pt.Uint8Array=typeof Uint8Array>"u"?Array:Uint8Array;pt.Uint16Array=typeof Uint16Array>"u"?Array:Uint16Array;pt.Uint32Array=typeof Uint32Array>"u"?Array:Uint32Array;pt.Int16Array=typeof Int16Array>"u"?Array:Int16Array;pt.Float32Array=typeof Float32Array>"u"?Array:Float32Array;pt.Float64Array=typeof Float64Array>"u"?Array:Float64Array;var Mr={};typeof window<"u"?Mr=window:typeof global<"u"&&(Mr=global);pt.requestAnimationFrame=Mr.requestAnimationFrame||Mr.msRequestAnimationFrame||Mr.mozRequestAnimationFrame||Mr.webkitRequestAnimationFrame||function(e){setTimeout(e,16)};pt.createCanvas=function(){return document.createElement("canvas")};pt.createImage=function(){return new Mr.Image};pt.request={get:hc.get};pt.addEventListener=function(e,t,r,i){e.addEventListener(t,r,i)};pt.removeEventListener=function(e,t,r){e.removeEventListener(t,r)};const $e=pt;var it=function(){this.head=null,this.tail=null,this._length=0};it.prototype.insert=function(e){var t=new it.Entry(e);return this.insertEntry(t),t};it.prototype.insertAt=function(e,t){if(!(e<0)){for(var r=this.head,i=0;r&&i!=e;)r=r.next,i++;if(r){var n=new it.Entry(t),a=r.prev;a?(a.next=n,n.prev=a):this.head=n,n.next=r,r.prev=n}else this.insert(t)}};it.prototype.insertBeforeEntry=function(e,t){var r=new it.Entry(e),i=t.prev;i?(i.next=r,r.prev=i):this.head=r,r.next=t,t.prev=r,this._length++};it.prototype.insertEntry=function(e){this.head?(this.tail.next=e,e.prev=this.tail,this.tail=e):this.head=this.tail=e,this._length++};it.prototype.remove=function(e){var t=e.prev,r=e.next;t?t.next=r:this.head=r,r?r.prev=t:this.tail=t,e.next=e.prev=null,this._length--};it.prototype.removeAt=function(e){if(!(e<0)){for(var t=this.head,r=0;t&&r!=e;)t=t.next,r++;if(t)return this.remove(t),t.value}};it.prototype.getHead=function(){if(this.head)return this.head.value};it.prototype.getTail=function(){if(this.tail)return this.tail.value};it.prototype.getAt=function(e){if(!(e<0)){for(var t=this.head,r=0;t&&r!=e;)t=t.next,r++;return t.value}};it.prototype.indexOf=function(e){for(var t=this.head,r=0;t;){if(t.value===e)return r;t=t.next,r++}};it.prototype.length=function(){return this._length};it.prototype.isEmpty=function(){return this._length===0};it.prototype.forEach=function(e,t){for(var r=this.head,i=0,n=typeof t<"u";r;)n?e.call(t,r.value,i):e(r.value,i),r=r.next,i++};it.prototype.clear=function(){this.tail=this.head=null,this._length=0};it.Entry=function(e){this.value=e,this.next=null,this.prev=null};const fc=it;var fi=function(e){this._list=new fc,this._map={},this._maxSize=e||10};fi.prototype.setMaxSize=function(e){this._maxSize=e};fi.prototype.put=function(e,t){if(!this._map.hasOwnProperty(e)){var r=this._list.length();if(r>=this._maxSize&&r>0){var i=this._list.head;this._list.remove(i),delete this._map[i.key]}var n=this._list.insert(t);n.key=e,this._map[e]=n}};fi.prototype.get=function(e){var t=this._map[e];if(this._map.hasOwnProperty(e))return t!==this._list.tail&&(this._list.remove(t),this._list.insertEntry(t)),t.value};fi.prototype.remove=function(e){var t=this._map[e];typeof t<"u"&&(delete this._map[e],this._list.remove(t))};fi.prototype.clear=function(){this._list.clear(),this._map={}};const qs=fi;var Be={},Lo={transparent:[0,0,0,0],aliceblue:[240,248,255,1],antiquewhite:[250,235,215,1],aqua:[0,255,255,1],aquamarine:[127,255,212,1],azure:[240,255,255,1],beige:[245,245,220,1],bisque:[255,228,196,1],black:[0,0,0,1],blanchedalmond:[255,235,205,1],blue:[0,0,255,1],blueviolet:[138,43,226,1],brown:[165,42,42,1],burlywood:[222,184,135,1],cadetblue:[95,158,160,1],chartreuse:[127,255,0,1],chocolate:[210,105,30,1],coral:[255,127,80,1],cornflowerblue:[100,149,237,1],cornsilk:[255,248,220,1],crimson:[220,20,60,1],cyan:[0,255,255,1],darkblue:[0,0,139,1],darkcyan:[0,139,139,1],darkgoldenrod:[184,134,11,1],darkgray:[169,169,169,1],darkgreen:[0,100,0,1],darkgrey:[169,169,169,1],darkkhaki:[189,183,107,1],darkmagenta:[139,0,139,1],darkolivegreen:[85,107,47,1],darkorange:[255,140,0,1],darkorchid:[153,50,204,1],darkred:[139,0,0,1],darksalmon:[233,150,122,1],darkseagreen:[143,188,143,1],darkslateblue:[72,61,139,1],darkslategray:[47,79,79,1],darkslategrey:[47,79,79,1],darkturquoise:[0,206,209,1],darkviolet:[148,0,211,1],deeppink:[255,20,147,1],deepskyblue:[0,191,255,1],dimgray:[105,105,105,1],dimgrey:[105,105,105,1],dodgerblue:[30,144,255,1],firebrick:[178,34,34,1],floralwhite:[255,250,240,1],forestgreen:[34,139,34,1],fuchsia:[255,0,255,1],gainsboro:[220,220,220,1],ghostwhite:[248,248,255,1],gold:[255,215,0,1],goldenrod:[218,165,32,1],gray:[128,128,128,1],green:[0,128,0,1],greenyellow:[173,255,47,1],grey:[128,128,128,1],honeydew:[240,255,240,1],hotpink:[255,105,180,1],indianred:[205,92,92,1],indigo:[75,0,130,1],ivory:[255,255,240,1],khaki:[240,230,140,1],lavender:[230,230,250,1],lavenderblush:[255,240,245,1],lawngreen:[124,252,0,1],lemonchiffon:[255,250,205,1],lightblue:[173,216,230,1],lightcoral:[240,128,128,1],lightcyan:[224,255,255,1],lightgoldenrodyellow:[250,250,210,1],lightgray:[211,211,211,1],lightgreen:[144,238,144,1],lightgrey:[211,211,211,1],lightpink:[255,182,193,1],lightsalmon:[255,160,122,1],lightseagreen:[32,178,170,1],lightskyblue:[135,206,250,1],lightslategray:[119,136,153,1],lightslategrey:[119,136,153,1],lightsteelblue:[176,196,222,1],lightyellow:[255,255,224,1],lime:[0,255,0,1],limegreen:[50,205,50,1],linen:[250,240,230,1],magenta:[255,0,255,1],maroon:[128,0,0,1],mediumaquamarine:[102,205,170,1],mediumblue:[0,0,205,1],mediumorchid:[186,85,211,1],mediumpurple:[147,112,219,1],mediumseagreen:[60,179,113,1],mediumslateblue:[123,104,238,1],mediumspringgreen:[0,250,154,1],mediumturquoise:[72,209,204,1],mediumvioletred:[199,21,133,1],midnightblue:[25,25,112,1],mintcream:[245,255,250,1],mistyrose:[255,228,225,1],moccasin:[255,228,181,1],navajowhite:[255,222,173,1],navy:[0,0,128,1],oldlace:[253,245,230,1],olive:[128,128,0,1],olivedrab:[107,142,35,1],orange:[255,165,0,1],orangered:[255,69,0,1],orchid:[218,112,214,1],palegoldenrod:[238,232,170,1],palegreen:[152,251,152,1],paleturquoise:[175,238,238,1],palevioletred:[219,112,147,1],papayawhip:[255,239,213,1],peachpuff:[255,218,185,1],peru:[205,133,63,1],pink:[255,192,203,1],plum:[221,160,221,1],powderblue:[176,224,230,1],purple:[128,0,128,1],red:[255,0,0,1],rosybrown:[188,143,143,1],royalblue:[65,105,225,1],saddlebrown:[139,69,19,1],salmon:[250,128,114,1],sandybrown:[244,164,96,1],seagreen:[46,139,87,1],seashell:[255,245,238,1],sienna:[160,82,45,1],silver:[192,192,192,1],skyblue:[135,206,235,1],slateblue:[106,90,205,1],slategray:[112,128,144,1],slategrey:[112,128,144,1],snow:[255,250,250,1],springgreen:[0,255,127,1],steelblue:[70,130,180,1],tan:[210,180,140,1],teal:[0,128,128,1],thistle:[216,191,216,1],tomato:[255,99,71,1],turquoise:[64,224,208,1],violet:[238,130,238,1],wheat:[245,222,179,1],white:[255,255,255,1],whitesmoke:[245,245,245,1],yellow:[255,255,0,1],yellowgreen:[154,205,50,1]};function Bt(e){return e=Math.round(e),e<0?0:e>255?255:e}function dc(e){return e=Math.round(e),e<0?0:e>360?360:e}function Oi(e){return e<0?0:e>1?1:e}function Jn(e){return e.length&&e.charAt(e.length-1)==="%"?Bt(parseFloat(e)/100*255):Bt(parseInt(e,10))}function ii(e){return e.length&&e.charAt(e.length-1)==="%"?Oi(parseFloat(e)/100):Oi(parseFloat(e))}function ea(e,t,r){return r<0?r+=1:r>1&&(r-=1),r*6<1?e+(t-e)*r*6:r*2<1?t:r*3<2?e+(t-e)*(2/3-r)*6:e}function dr(e,t,r){return e+(t-e)*r}function Ft(e,t,r,i,n){return e[0]=t,e[1]=r,e[2]=i,e[3]=n,e}function Ma(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e}var Ks=new qs(20),en=null;function Wr(e,t){en&&Ma(en,t),en=Ks.put(e,en||t.slice())}Be.parse=function(e,t){if(e){t=t||[];var r=Ks.get(e);if(r)return Ma(t,r);e=e+"";var i=e.replace(/ /g,"").toLowerCase();if(i in Lo)return Ma(t,Lo[i]),Wr(e,t),t;if(i.charAt(0)==="#"){if(i.length===4){var n=parseInt(i.substr(1),16);if(!(n>=0&&n<=4095)){Ft(t,0,0,0,1);return}return Ft(t,(n&3840)>>4|(n&3840)>>8,n&240|(n&240)>>4,n&15|(n&15)<<4,1),Wr(e,t),t}else if(i.length===7){var n=parseInt(i.substr(1),16);if(!(n>=0&&n<=16777215)){Ft(t,0,0,0,1);return}return Ft(t,(n&16711680)>>16,(n&65280)>>8,n&255,1),Wr(e,t),t}return}var a=i.indexOf("("),o=i.indexOf(")");if(a!==-1&&o+1===i.length){var s=i.substr(0,a),l=i.substr(a+1,o-(a+1)).split(","),u=1;switch(s){case"rgba":if(l.length!==4){Ft(t,0,0,0,1);return}u=ii(l.pop());case"rgb":if(l.length!==3){Ft(t,0,0,0,1);return}return Ft(t,Jn(l[0]),Jn(l[1]),Jn(l[2]),u),Wr(e,t),t;case"hsla":if(l.length!==4){Ft(t,0,0,0,1);return}return l[3]=ii(l[3]),Pa(l,t),Wr(e,t),t;case"hsl":if(l.length!==3){Ft(t,0,0,0,1);return}return Pa(l,t),Wr(e,t),t;default:return}}Ft(t,0,0,0,1)}};Be.parseToFloat=function(e,t){if(t=Be.parse(e,t),!!t)return t[0]/=255,t[1]/=255,t[2]/=255,t};function Pa(e,t){var r=(parseFloat(e[0])%360+360)%360/360,i=ii(e[1]),n=ii(e[2]),a=n<=.5?n*(i+1):n+i-n*i,o=n*2-a;return t=t||[],Ft(t,Bt(ea(o,a,r+1/3)*255),Bt(ea(o,a,r)*255),Bt(ea(o,a,r-1/3)*255),1),e.length===4&&(t[3]=e[3]),t}function vc(e){if(e){var t=e[0]/255,r=e[1]/255,i=e[2]/255,n=Math.min(t,r,i),a=Math.max(t,r,i),o=a-n,s=(a+n)/2,l,u;if(o===0)l=0,u=0;else{s<.5?u=o/(a+n):u=o/(2-a-n);var c=((a-t)/6+o/2)/o,h=((a-r)/6+o/2)/o,f=((a-i)/6+o/2)/o;t===a?l=f-h:r===a?l=1/3+c-f:i===a&&(l=2/3+h-c),l<0&&(l+=1),l>1&&(l-=1)}var d=[l*360,u,s];return e[3]!=null&&d.push(e[3]),d}}Be.lift=function(e,t){var r=Be.parse(e);if(r){for(var i=0;i<3;i++)t<0?r[i]=r[i]*(1-t)|0:r[i]=(255-r[i])*t+r[i]|0;return Be.stringify(r,r.length===4?"rgba":"rgb")}};Be.toHex=function(e){var t=Be.parse(e);if(t)return((1<<24)+(t[0]<<16)+(t[1]<<8)+ +t[2]).toString(16).slice(1)};Be.fastLerp=function(e,t,r){if(!(!(t&&t.length)||!(e>=0&&e<=1))){r=r||[];var i=e*(t.length-1),n=Math.floor(i),a=Math.ceil(i),o=t[n],s=t[a],l=i-n;return r[0]=Bt(dr(o[0],s[0],l)),r[1]=Bt(dr(o[1],s[1],l)),r[2]=Bt(dr(o[2],s[2],l)),r[3]=Oi(dr(o[3],s[3],l)),r}};Be.fastMapToColor=Be.fastLerp;Be.lerp=function(e,t,r){if(!(!(t&&t.length)||!(e>=0&&e<=1))){var i=e*(t.length-1),n=Math.floor(i),a=Math.ceil(i),o=Be.parse(t[n]),s=Be.parse(t[a]),l=i-n,u=Be.stringify([Bt(dr(o[0],s[0],l)),Bt(dr(o[1],s[1],l)),Bt(dr(o[2],s[2],l)),Oi(dr(o[3],s[3],l))],"rgba");return r?{color:u,leftIndex:n,rightIndex:a,value:i}:u}};Be.mapToColor=Be.lerp;Be.modifyHSL=function(e,t,r,i){if(e=Be.parse(e),e)return e=vc(e),t!=null&&(e[0]=dc(t)),r!=null&&(e[1]=ii(r)),i!=null&&(e[2]=ii(i)),Be.stringify(Pa(e),"rgba")};Be.modifyAlpha=function(e,t){if(e=Be.parse(e),e&&t!=null)return e[3]=Oi(t),Be.stringify(e,"rgba")};Be.stringify=function(e,t){if(!(!e||!e.length)){var r=e[0]+","+e[1]+","+e[2];return(t==="rgba"||t==="hsva"||t==="hsla")&&(r+=","+e[3]),t+"("+r+")"}};const pc=Be;var mc=pc.parseToFloat,ta={};function Do(e){var t=Object.keys(e);t.sort();for(var r=[],i=0;i<t.length;i++){var n=t[i],a=e[n];a===null?r.push(n):r.push(n+" "+a.toString())}return r.join(`
`)}function _c(e,t,r){r.sort();for(var i=[],n=0;n<r.length;n++){var a=r[n];i.push(a)}var o=Do(e)+`
`+Do(t)+`
`+i.join(`
`);if(ta[o])return ta[o];var s=at.genGUID();return ta[o]=s,s}var gc=vt.extend(function(){return{name:"",depthTest:!0,depthMask:!0,transparent:!1,blend:null,autoUpdateTextureStatus:!0,uniforms:{},vertexDefines:{},fragmentDefines:{},_textureStatus:{},_enabledUniforms:null}},function(){this.name||(this.name="MATERIAL_"+this.__uid__),this.shader&&this.attachShader(this.shader,!0)},{precision:"highp",setUniform:function(e,t){t===void 0&&console.warn('Uniform value "'+e+'" is undefined');var r=this.uniforms[e];r&&(typeof t=="string"&&(t=mc(t)||t),r.value=t,this.autoUpdateTextureStatus&&r.type==="t"&&(t?this.enableTexture(e):this.disableTexture(e)))},setUniforms:function(e){for(var t in e){var r=e[t];this.setUniform(t,r)}},isUniformEnabled:function(e){return this._enabledUniforms.indexOf(e)>=0},getEnabledUniforms:function(){return this._enabledUniforms},getTextureUniforms:function(){return this._textureUniforms},set:function(e,t){if(typeof e=="object")for(var r in e){var i=e[r];this.setUniform(r,i)}else this.setUniform(e,t)},get:function(e){var t=this.uniforms[e];if(t)return t.value},attachShader:function(e,t){var r=this.uniforms;this.uniforms=e.createUniforms(),this.shader=e;var i=this.uniforms;this._enabledUniforms=Object.keys(i),this._enabledUniforms.sort(),this._textureUniforms=this._enabledUniforms.filter(function(u){var c=this.uniforms[u].type;return c==="t"||c==="tv"},this);var n=this.vertexDefines,a=this.fragmentDefines;if(this.vertexDefines=at.clone(e.vertexDefines),this.fragmentDefines=at.clone(e.fragmentDefines),t){for(var o in r)i[o]&&(i[o].value=r[o].value);at.defaults(this.vertexDefines,n),at.defaults(this.fragmentDefines,a)}var s={};for(var l in e.textures)s[l]={shaderType:e.textures[l].shaderType,type:e.textures[l].type,enabled:t&&this._textureStatus[l]?this._textureStatus[l].enabled:!1};this._textureStatus=s,this._programKey=""},clone:function(){var e=new this.constructor({name:this.name,shader:this.shader});for(var t in this.uniforms)e.uniforms[t].value=this.uniforms[t].value;return e.depthTest=this.depthTest,e.depthMask=this.depthMask,e.transparent=this.transparent,e.blend=this.blend,e.vertexDefines=at.clone(this.vertexDefines),e.fragmentDefines=at.clone(this.fragmentDefines),e.enableTexture(this.getEnabledTextures()),e.precision=this.precision,e},define:function(e,t,r){var i=this.vertexDefines,n=this.fragmentDefines;e!=="vertex"&&e!=="fragment"&&e!=="both"&&arguments.length<3&&(r=t,t=e,e="both"),r=r??null,(e==="vertex"||e==="both")&&i[t]!==r&&(i[t]=r,this._programKey=""),(e==="fragment"||e==="both")&&n[t]!==r&&(n[t]=r,e!=="both"&&(this._programKey=""))},undefine:function(e,t){e!=="vertex"&&e!=="fragment"&&e!=="both"&&arguments.length<2&&(t=e,e="both"),(e==="vertex"||e==="both")&&this.isDefined("vertex",t)&&(delete this.vertexDefines[t],this._programKey=""),(e==="fragment"||e==="both")&&this.isDefined("fragment",t)&&(delete this.fragmentDefines[t],e!=="both"&&(this._programKey=""))},isDefined:function(e,t){switch(e){case"vertex":return this.vertexDefines[t]!==void 0;case"fragment":return this.fragmentDefines[t]!==void 0}},getDefine:function(e,t){switch(e){case"vertex":return this.vertexDefines[t];case"fragment":return this.fragmentDefines[t]}},enableTexture:function(e){if(Array.isArray(e)){for(var t=0;t<e.length;t++)this.enableTexture(e[t]);return}var r=this._textureStatus[e];if(r){var i=r.enabled;i||(r.enabled=!0,this._programKey="")}},enableTexturesAll:function(){var e=this._textureStatus;for(var t in e)e[t].enabled=!0;this._programKey=""},disableTexture:function(e){if(Array.isArray(e)){for(var t=0;t<e.length;t++)this.disableTexture(e[t]);return}var r=this._textureStatus[e];if(r){var i=!r.enabled;i||(r.enabled=!1,this._programKey="")}},disableTexturesAll:function(){var e=this._textureStatus;for(var t in e)e[t].enabled=!1;this._programKey=""},isTextureEnabled:function(e){var t=this._textureStatus;return!!t[e]&&t[e].enabled},getEnabledTextures:function(){var e=[],t=this._textureStatus;for(var r in t)t[r].enabled&&e.push(r);return e},dirtyDefines:function(){this._programKey=""},getProgramKey:function(){return this._programKey||(this._programKey=_c(this.vertexDefines,this.fragmentDefines,this.getEnabledTextures())),this._programKey}});const Nt=gc;var mn=1e-6,lt=Array,ei=Math.random,oe={};oe.create=function(){var e=new lt(2);return e[0]=0,e[1]=0,e};oe.clone=function(e){var t=new lt(2);return t[0]=e[0],t[1]=e[1],t};oe.fromValues=function(e,t){var r=new lt(2);return r[0]=e,r[1]=t,r};oe.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e};oe.set=function(e,t,r){return e[0]=t,e[1]=r,e};oe.add=function(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e};oe.subtract=function(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e};oe.sub=oe.subtract;oe.multiply=function(e,t,r){return e[0]=t[0]*r[0],e[1]=t[1]*r[1],e};oe.mul=oe.multiply;oe.divide=function(e,t,r){return e[0]=t[0]/r[0],e[1]=t[1]/r[1],e};oe.div=oe.divide;oe.min=function(e,t,r){return e[0]=Math.min(t[0],r[0]),e[1]=Math.min(t[1],r[1]),e};oe.max=function(e,t,r){return e[0]=Math.max(t[0],r[0]),e[1]=Math.max(t[1],r[1]),e};oe.scale=function(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e};oe.scaleAndAdd=function(e,t,r,i){return e[0]=t[0]+r[0]*i,e[1]=t[1]+r[1]*i,e};oe.distance=function(e,t){var r=t[0]-e[0],i=t[1]-e[1];return Math.sqrt(r*r+i*i)};oe.dist=oe.distance;oe.squaredDistance=function(e,t){var r=t[0]-e[0],i=t[1]-e[1];return r*r+i*i};oe.sqrDist=oe.squaredDistance;oe.length=function(e){var t=e[0],r=e[1];return Math.sqrt(t*t+r*r)};oe.len=oe.length;oe.squaredLength=function(e){var t=e[0],r=e[1];return t*t+r*r};oe.sqrLen=oe.squaredLength;oe.negate=function(e,t){return e[0]=-t[0],e[1]=-t[1],e};oe.inverse=function(e,t){return e[0]=1/t[0],e[1]=1/t[1],e};oe.normalize=function(e,t){var r=t[0],i=t[1],n=r*r+i*i;return n>0&&(n=1/Math.sqrt(n),e[0]=t[0]*n,e[1]=t[1]*n),e};oe.dot=function(e,t){return e[0]*t[0]+e[1]*t[1]};oe.cross=function(e,t,r){var i=t[0]*r[1]-t[1]*r[0];return e[0]=e[1]=0,e[2]=i,e};oe.lerp=function(e,t,r,i){var n=t[0],a=t[1];return e[0]=n+i*(r[0]-n),e[1]=a+i*(r[1]-a),e};oe.random=function(e,t){t=t||1;var r=GLMAT_RANDOM()*2*Math.PI;return e[0]=Math.cos(r)*t,e[1]=Math.sin(r)*t,e};oe.transformMat2=function(e,t,r){var i=t[0],n=t[1];return e[0]=r[0]*i+r[2]*n,e[1]=r[1]*i+r[3]*n,e};oe.transformMat2d=function(e,t,r){var i=t[0],n=t[1];return e[0]=r[0]*i+r[2]*n+r[4],e[1]=r[1]*i+r[3]*n+r[5],e};oe.transformMat3=function(e,t,r){var i=t[0],n=t[1];return e[0]=r[0]*i+r[3]*n+r[6],e[1]=r[1]*i+r[4]*n+r[7],e};oe.transformMat4=function(e,t,r){var i=t[0],n=t[1];return e[0]=r[0]*i+r[4]*n+r[12],e[1]=r[1]*i+r[5]*n+r[13],e};oe.forEach=function(){var e=oe.create();return function(t,r,i,n,a,o){var s,l;for(r||(r=2),i||(i=0),n?l=Math.min(n*r+i,t.length):l=t.length,s=i;s<l;s+=r)e[0]=t[s],e[1]=t[s+1],a(e,e,o),t[s]=e[0],t[s+1]=e[1];return t}}();const Q=oe;var de=function(e,t){e=e||0,t=t||0,this.array=Q.fromValues(e,t),this._dirty=!0};de.prototype={constructor:de,add:function(e){return Q.add(this.array,this.array,e.array),this._dirty=!0,this},set:function(e,t){return this.array[0]=e,this.array[1]=t,this._dirty=!0,this},setArray:function(e){return this.array[0]=e[0],this.array[1]=e[1],this._dirty=!0,this},clone:function(){return new de(this.x,this.y)},copy:function(e){return Q.copy(this.array,e.array),this._dirty=!0,this},cross:function(e,t){return Q.cross(e.array,this.array,t.array),e._dirty=!0,this},dist:function(e){return Q.dist(this.array,e.array)},distance:function(e){return Q.distance(this.array,e.array)},div:function(e){return Q.div(this.array,this.array,e.array),this._dirty=!0,this},divide:function(e){return Q.divide(this.array,this.array,e.array),this._dirty=!0,this},dot:function(e){return Q.dot(this.array,e.array)},len:function(){return Q.len(this.array)},length:function(){return Q.length(this.array)},lerp:function(e,t,r){return Q.lerp(this.array,e.array,t.array,r),this._dirty=!0,this},min:function(e){return Q.min(this.array,this.array,e.array),this._dirty=!0,this},max:function(e){return Q.max(this.array,this.array,e.array),this._dirty=!0,this},mul:function(e){return Q.mul(this.array,this.array,e.array),this._dirty=!0,this},multiply:function(e){return Q.multiply(this.array,this.array,e.array),this._dirty=!0,this},negate:function(){return Q.negate(this.array,this.array),this._dirty=!0,this},normalize:function(){return Q.normalize(this.array,this.array),this._dirty=!0,this},random:function(e){return Q.random(this.array,e),this._dirty=!0,this},scale:function(e){return Q.scale(this.array,this.array,e),this._dirty=!0,this},scaleAndAdd:function(e,t){return Q.scaleAndAdd(this.array,this.array,e.array,t),this._dirty=!0,this},sqrDist:function(e){return Q.sqrDist(this.array,e.array)},squaredDistance:function(e){return Q.squaredDistance(this.array,e.array)},sqrLen:function(){return Q.sqrLen(this.array)},squaredLength:function(){return Q.squaredLength(this.array)},sub:function(e){return Q.sub(this.array,this.array,e.array),this._dirty=!0,this},subtract:function(e){return Q.subtract(this.array,this.array,e.array),this._dirty=!0,this},transformMat2:function(e){return Q.transformMat2(this.array,this.array,e.array),this._dirty=!0,this},transformMat2d:function(e){return Q.transformMat2d(this.array,this.array,e.array),this._dirty=!0,this},transformMat3:function(e){return Q.transformMat3(this.array,this.array,e.array),this._dirty=!0,this},transformMat4:function(e){return Q.transformMat4(this.array,this.array,e.array),this._dirty=!0,this},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};if(Object.defineProperty){var Mo=de.prototype;Object.defineProperty(Mo,"x",{get:function(){return this.array[0]},set:function(e){this.array[0]=e,this._dirty=!0}}),Object.defineProperty(Mo,"y",{get:function(){return this.array[1]},set:function(e){this.array[1]=e,this._dirty=!0}})}de.add=function(e,t,r){return Q.add(e.array,t.array,r.array),e._dirty=!0,e};de.set=function(e,t,r){return Q.set(e.array,t,r),e._dirty=!0,e};de.copy=function(e,t){return Q.copy(e.array,t.array),e._dirty=!0,e};de.cross=function(e,t,r){return Q.cross(e.array,t.array,r.array),e._dirty=!0,e};de.dist=function(e,t){return Q.distance(e.array,t.array)};de.distance=de.dist;de.div=function(e,t,r){return Q.divide(e.array,t.array,r.array),e._dirty=!0,e};de.divide=de.div;de.dot=function(e,t){return Q.dot(e.array,t.array)};de.len=function(e){return Q.length(e.array)};de.lerp=function(e,t,r,i){return Q.lerp(e.array,t.array,r.array,i),e._dirty=!0,e};de.min=function(e,t,r){return Q.min(e.array,t.array,r.array),e._dirty=!0,e};de.max=function(e,t,r){return Q.max(e.array,t.array,r.array),e._dirty=!0,e};de.mul=function(e,t,r){return Q.multiply(e.array,t.array,r.array),e._dirty=!0,e};de.multiply=de.mul;de.negate=function(e,t){return Q.negate(e.array,t.array),e._dirty=!0,e};de.normalize=function(e,t){return Q.normalize(e.array,t.array),e._dirty=!0,e};de.random=function(e,t){return Q.random(e.array,t),e._dirty=!0,e};de.scale=function(e,t,r){return Q.scale(e.array,t.array,r),e._dirty=!0,e};de.scaleAndAdd=function(e,t,r,i){return Q.scaleAndAdd(e.array,t.array,r.array,i),e._dirty=!0,e};de.sqrDist=function(e,t){return Q.sqrDist(e.array,t.array)};de.squaredDistance=de.sqrDist;de.sqrLen=function(e){return Q.sqrLen(e.array)};de.squaredLength=de.sqrLen;de.sub=function(e,t,r){return Q.subtract(e.array,t.array,r.array),e._dirty=!0,e};de.subtract=de.sub;de.transformMat2=function(e,t,r){return Q.transformMat2(e.array,t.array,r.array),e._dirty=!0,e};de.transformMat2d=function(e,t,r){return Q.transformMat2d(e.array,t.array,r.array),e._dirty=!0,e};de.transformMat3=function(e,t,r){return Q.transformMat3(e.array,t.array,r.array),e._dirty=!0,e};de.transformMat4=function(e,t,r){return Q.transformMat4(e.array,t.array,r.array),e._dirty=!0,e};const wt=de;var Po=1,Ro=2,ra=3,No={};function yc(e){for(var t=e.split(`
`),r=0,i=t.length;r<i;r++)t[r]=r+1+": "+t[r];return t.join(`
`)}function Io(e,t,r){if(!e.getShaderParameter(t,e.COMPILE_STATUS))return[e.getShaderInfoLog(t),yc(r)].join(`
`)}var Oo=new $e.Float32Array(16),xc=vt.extend({uniformSemantics:{},attributes:{}},function(){this._locations={},this._textureSlot=0,this._program=null},{bind:function(e){this._textureSlot=0,e.gl.useProgram(this._program)},hasUniform:function(e){var t=this._locations[e];return t!=null},useTextureSlot:function(e,t,r){t&&(e.gl.activeTexture(e.gl.TEXTURE0+r),t.isRenderable()?t.bind(e):t.unbind(e))},currentTextureSlot:function(){return this._textureSlot},resetTextureSlot:function(e){this._textureSlot=e||0},takeCurrentTextureSlot:function(e,t){var r=this._textureSlot;return this.useTextureSlot(e,t,r),this._textureSlot++,r},setUniform:function(e,t,r,i){var n=this._locations,a=n[r];if(a==null)return!1;switch(t){case"m4":if(!(i instanceof Float32Array)){for(var o=0;o<i.length;o++)Oo[o]=i[o];i=Oo}e.uniformMatrix4fv(a,!1,i);break;case"2i":e.uniform2i(a,i[0],i[1]);break;case"2f":e.uniform2f(a,i[0],i[1]);break;case"3i":e.uniform3i(a,i[0],i[1],i[2]);break;case"3f":e.uniform3f(a,i[0],i[1],i[2]);break;case"4i":e.uniform4i(a,i[0],i[1],i[2],i[3]);break;case"4f":e.uniform4f(a,i[0],i[1],i[2],i[3]);break;case"1i":e.uniform1i(a,i);break;case"1f":e.uniform1f(a,i);break;case"1fv":e.uniform1fv(a,i);break;case"1iv":e.uniform1iv(a,i);break;case"2iv":e.uniform2iv(a,i);break;case"2fv":e.uniform2fv(a,i);break;case"3iv":e.uniform3iv(a,i);break;case"3fv":e.uniform3fv(a,i);break;case"4iv":e.uniform4iv(a,i);break;case"4fv":e.uniform4fv(a,i);break;case"m2":case"m2v":e.uniformMatrix2fv(a,!1,i);break;case"m3":case"m3v":e.uniformMatrix3fv(a,!1,i);break;case"m4v":if(Array.isArray(i)&&Array.isArray(i[0])){for(var s=new $e.Float32Array(i.length*16),l=0,o=0;o<i.length;o++)for(var u=i[o],c=0;c<16;c++)s[l++]=u[c];e.uniformMatrix4fv(a,!1,s)}else e.uniformMatrix4fv(a,!1,i);break}return!0},setUniformOfSemantic:function(e,t,r){var i=this.uniformSemantics[t];return i?this.setUniform(e,i.type,i.symbol,r):!1},enableAttributes:function(e,t,r){var i=e.gl,n=this._program,a=this._locations,o;r?o=r.__enabledAttributeList:o=No[e.__uid__],o||(r?o=r.__enabledAttributeList=[]:o=No[e.__uid__]=[]);for(var s=[],l=0;l<t.length;l++){var u=t[l];if(!this.attributes[u]){s[l]=-1;continue}var c=a[u];if(c==null){if(c=i.getAttribLocation(n,u),c===-1){s[l]=-1;continue}a[u]=c}s[l]=c,o[c]?o[c]=Ro:o[c]=Po}for(var l=0;l<o.length;l++)switch(o[l]){case Po:i.enableVertexAttribArray(l),o[l]=ra;break;case Ro:o[l]=ra;break;case ra:i.disableVertexAttribArray(l),o[l]=0;break}return s},getAttribLocation:function(e,t){var r=this._locations,i=r[t];return i==null&&(i=e.getAttribLocation(this._program,t),r[t]=i),i},buildProgram:function(e,t,r,i){var n=e.createShader(e.VERTEX_SHADER),a=e.createProgram();e.shaderSource(n,r),e.compileShader(n);var o=e.createShader(e.FRAGMENT_SHADER);e.shaderSource(o,i),e.compileShader(o);var s=Io(e,n,r);if(s||(s=Io(e,o,i),s))return s;if(e.attachShader(a,n),e.attachShader(a,o),t.attributeSemantics.POSITION)e.bindAttribLocation(a,0,t.attributeSemantics.POSITION.symbol);else{var l=Object.keys(this.attributes);e.bindAttribLocation(a,0,l[0])}if(e.linkProgram(a),e.deleteShader(n),e.deleteShader(o),this._program=a,this.vertexCode=r,this.fragmentCode=i,!e.getProgramParameter(a,e.LINK_STATUS))return`Could not link program
`+e.getProgramInfoLog(a);for(var u=0;u<t.uniforms.length;u++){var c=t.uniforms[u];this._locations[c]=e.getUniformLocation(a,c)}}});const Tc=xc;var wc=/for\s*?\(int\s*?_idx_\s*\=\s*([\w-]+)\;\s*_idx_\s*<\s*([\w-]+);\s*_idx_\s*\+\+\s*\)\s*\{\{([\s\S]+?)(?=\}\})\}\}/g;function Fo(e,t,r){function i(o,s,l,u){var c="";isNaN(s)&&(s in t?s=t[s]:s=n[s]),isNaN(l)&&(l in t?l=t[l]:l=n[l]);for(var h=parseInt(s);h<parseInt(l);h++)c+="{"+u.replace(/float\s*\(\s*_idx_\s*\)/g,h.toFixed(1)).replace(/_idx_/g,h)+"}";return c}var n={};for(var a in r)n[a+"_COUNT"]=r[a];return e.replace(wc,i)}function ia(e,t,r){var i=[];if(t)for(var n in t){var a=t[n];a>0&&i.push("#define "+n.toUpperCase()+"_COUNT "+a)}if(r)for(var o=0;o<r.length;o++){var s=r[o];i.push("#define "+s.toUpperCase()+"_ENABLED")}for(var s in e){var l=e[s];l===null?i.push("#define "+s):i.push("#define "+s+" "+l.toString())}return i.join(`
`)}function Sc(e){for(var t=[],r=0;r<e.length;r++)t.push("#extension GL_"+e[r]+" : enable");return t.join(`
`)}function bc(e){return["precision",e,"float"].join(" ")+`;
`+["precision",e,"int"].join(" ")+`;
`+["precision",e,"sampler2D"].join(" ")+`;
`}function Qs(e){this._renderer=e,this._cache={}}Qs.prototype.getProgram=function(e,t,r){var i=this._cache,n=e.isSkinnedMesh&&e.isSkinnedMesh(),a=e.isInstancedMesh&&e.isInstancedMesh(),o="s"+t.shader.shaderID+"m"+t.getProgramKey();r&&(o+="se"+r.getProgramKey(e.lightGroup)),n&&(o+=",sk"+e.joints.length),a&&(o+=",is");var g=i[o];if(g)return g;var s=r?r.getLightsNumbers(e.lightGroup):{},l=this._renderer,u=l.gl,c=t.getEnabledTextures(),h="";if(n){var f={SKINNING:null,JOINT_COUNT:e.joints.length};e.joints.length>l.getMaxJointNumber()&&(f.USE_SKIN_MATRICES_TEXTURE=null),h+=`
`+ia(f)+`
`}a&&(h+=`
#define INSTANCING
`);var d=h+ia(t.vertexDefines,s,c),v=h+ia(t.fragmentDefines,s,c),p=d+`
`+t.shader.vertex,m=["OES_standard_derivatives","EXT_shader_texture_lod"].filter(function(T){return l.getGLExtension(T)!=null});m.indexOf("EXT_shader_texture_lod")>=0&&(v+=`
#define SUPPORT_TEXTURE_LOD`),m.indexOf("OES_standard_derivatives")>=0&&(v+=`
#define SUPPORT_STANDARD_DERIVATIVES`);var _=Sc(m)+`
`+bc(t.precision)+`
`+v+`
`+t.shader.fragment,x=Fo(p,t.vertexDefines,s),y=Fo(_,t.fragmentDefines,s),g=new Tc;g.uniformSemantics=t.shader.uniformSemantics,g.attributes=t.shader.attributes;var w=g.buildProgram(u,t.shader,x,y);return g.__error=w,i[o]=g,g};var Bo=/uniform\s+(bool|float|int|vec2|vec3|vec4|ivec2|ivec3|ivec4|mat2|mat3|mat4|sampler2D|samplerCube)\s+([\s\S]*?);/g,Ec=/attribute\s+(float|int|vec2|vec3|vec4)\s+([\s\S]*?);/g,Uo=/#define\s+(\w+)?(\s+[\d-.]+)?\s*;?\s*\n/g,Ac={bool:"1i",int:"1i",sampler2D:"t",samplerCube:"t",float:"1f",vec2:"2f",vec3:"3f",vec4:"4f",ivec2:"2i",ivec3:"3i",ivec4:"4i",mat2:"m2",mat3:"m3",mat4:"m4"};function Zt(e){for(var t=[],r=0;r<e;r++)t[r]=0;return t}var zo={bool:function(){return!0},int:function(){return 0},float:function(){return 0},sampler2D:function(){return null},samplerCube:function(){return null},vec2:function(){return Zt(2)},vec3:function(){return Zt(3)},vec4:function(){return Zt(4)},ivec2:function(){return Zt(2)},ivec3:function(){return Zt(3)},ivec4:function(){return Zt(4)},mat2:function(){return Zt(4)},mat3:function(){return Zt(9)},mat4:function(){return Zt(16)},array:function(){return[]}},Ra=["POSITION","NORMAL","BINORMAL","TANGENT","TEXCOORD","TEXCOORD_0","TEXCOORD_1","COLOR","JOINT","WEIGHT"],Js=["SKIN_MATRIX","VIEWPORT_SIZE","VIEWPORT","DEVICEPIXELRATIO","WINDOW_SIZE","NEAR","FAR","TIME"],el=["WORLD","VIEW","PROJECTION","WORLDVIEW","VIEWPROJECTION","WORLDVIEWPROJECTION","WORLDINVERSE","VIEWINVERSE","PROJECTIONINVERSE","WORLDVIEWINVERSE","VIEWPROJECTIONINVERSE","WORLDVIEWPROJECTIONINVERSE","WORLDTRANSPOSE","VIEWTRANSPOSE","PROJECTIONTRANSPOSE","WORLDVIEWTRANSPOSE","VIEWPROJECTIONTRANSPOSE","WORLDVIEWPROJECTIONTRANSPOSE","WORLDINVERSETRANSPOSE","VIEWINVERSETRANSPOSE","PROJECTIONINVERSETRANSPOSE","WORLDVIEWINVERSETRANSPOSE","VIEWPROJECTIONINVERSETRANSPOSE","WORLDVIEWPROJECTIONINVERSETRANSPOSE"],Cc={vec4:4,vec3:3,vec2:2,float:1},na={},tl={};function Lc(e,t){var r="vertex:"+e+"fragment:"+t;if(na[r])return na[r];var i=at.genGUID();return na[r]=i,tl[i]={vertex:e,fragment:t},i}function Go(e){return e.replace(/[ \t]*\/\/.*\n/g,"").replace(/[ \t]*\/\*[\s\S]*?\*\//g,"")}function Xr(){console.error("Wrong uniform/attributes syntax")}function Vo(e,t){for(var r=/[,=\(\):]/,i=t.replace(/:\s*\[\s*(.*)\s*\]/g,"="+e+"($1)").replace(/\s+/g,"").split(/(?=[,=\(\):])/g),n=[],a=0;a<i.length;a++)i[a].match(r)?n.push(i[a].charAt(0),i[a].slice(1)):n.push(i[a]);i=n;var o=0,s=1,l=2,u=3,c=4,h=5,f=o,d={},v=null,p;m(i[0]);function m(y){y||Xr();var g=y.match(/\[(.*?)\]/);p=y.replace(/\[(.*?)\]/,""),d[p]={},g&&(d[p].isArray=!0,d[p].arraySize=g[1])}for(var a=1;a<i.length;a++){var _=i[a];if(_){if(_==="="){if(f!==o&&f!==u){Xr();break}f=s;continue}else if(_===":"){f=c;continue}else if(_===","){if(f===l){if(!(v instanceof Array)){Xr();break}v.push(+i[++a])}else f=h;continue}else if(_===")"){d[p].value=new $e.Float32Array(v),v=null,f=h;continue}else if(_==="("){if(f!==l){Xr();break}if(!(v instanceof Array)){Xr();break}v.push(+i[++a]);continue}else if(_.indexOf("vec")>=0){if(f!==s&&f!==c){Xr();break}f=l,v=[];continue}else if(f===s){e==="bool"?d[p].value=_==="true":d[p].value=parseFloat(_),v=null;continue}else if(f===c){var x=_;Ra.indexOf(x)>=0||Js.indexOf(x)>=0||el.indexOf(x)>=0?d[p].semantic=x:x==="ignore"||x==="unconfigurable"?d[p].ignore=!0:e==="bool"?d[p].value=x==="true":d[p].value=parseFloat(x);continue}m(_),f=o}}return d}function V(e,t){typeof e=="object"&&(t=e.fragment,e=e.vertex),e=Go(e),t=Go(t),this._shaderID=Lc(e,t),this._vertexCode=V.parseImport(e),this._fragmentCode=V.parseImport(t),this.attributeSemantics={},this.matrixSemantics={},this.uniformSemantics={},this.matrixSemanticKeys=[],this.uniformTemplates={},this.attributes={},this.textures={},this.vertexDefines={},this.fragmentDefines={},this._parseAttributes(),this._parseUniforms(),this._parseDefines()}V.prototype={constructor:V,createUniforms:function(){var e={};for(var t in this.uniformTemplates){var r=this.uniformTemplates[t];e[t]={type:r.type,value:r.value()}}return e},_parseImport:function(){this._vertexCode=V.parseImport(this.vertex),this._fragmentCode=V.parseImport(this.fragment)},_addSemanticUniform:function(e,t,r){if(Ra.indexOf(r)>=0)this.attributeSemantics[r]={symbol:e,type:t};else if(el.indexOf(r)>=0){var i=!1,n=r;r.match(/TRANSPOSE$/)&&(i=!0,n=r.slice(0,-9)),this.matrixSemantics[r]={symbol:e,type:t,isTranspose:i,semanticNoTranspose:n}}else Js.indexOf(r)>=0&&(this.uniformSemantics[r]={symbol:e,type:t})},_addMaterialUniform:function(e,t,r,i,n,a){a[e]={type:r,value:n?zo.array:i||zo[t],semantic:null}},_parseUniforms:function(){var e={},t=this,r="vertex";this._uniformList=[],this._vertexCode=this._vertexCode.replace(Bo,n),r="fragment",this._fragmentCode=this._fragmentCode.replace(Bo,n),t.matrixSemanticKeys=Object.keys(this.matrixSemantics);function i(a){return a!=null?function(){return a}:null}function n(a,o,s){var l=Vo(o,s),u=[];for(var c in l){var h=l[c],f=h.semantic,d=c,v=Ac[o],p=i(l[c].value);l[c].isArray&&(d+="["+l[c].arraySize+"]",v+="v"),u.push(d),t._uniformList.push(c),h.ignore||((o==="sampler2D"||o==="samplerCube")&&(t.textures[c]={shaderType:r,type:o}),f?t._addSemanticUniform(c,v,f):t._addMaterialUniform(c,o,v,p,l[c].isArray,e))}return u.length>0?"uniform "+o+" "+u.join(",")+`;
`:""}this.uniformTemplates=e},_parseAttributes:function(){var e={},t=this;this._vertexCode=this._vertexCode.replace(Ec,r);function r(i,n,a){var o=Vo(n,a),s=Cc[n]||1,l=[];for(var u in o){var c=o[u].semantic;if(e[u]={type:"float",size:s,semantic:c||null},c){if(Ra.indexOf(c)<0)throw new Error('Unkown semantic "'+c+'"');t.attributeSemantics[c]={symbol:u,type:n}}l.push(u)}return"attribute "+n+" "+l.join(",")+`;
`}this.attributes=e},_parseDefines:function(){var e=this,t="vertex";this._vertexCode=this._vertexCode.replace(Uo,r),t="fragment",this._fragmentCode=this._fragmentCode.replace(Uo,r);function r(i,n,a){var o=t==="vertex"?e.vertexDefines:e.fragmentDefines;return o[n]||(a==="false"?o[n]=!1:a==="true"?o[n]=!0:o[n]=a?isNaN(parseFloat(a))?a.trim():parseFloat(a):null),""}},clone:function(){var e=tl[this._shaderID],t=new V(e.vertex,e.fragment);return t}};Object.defineProperty&&(Object.defineProperty(V.prototype,"shaderID",{get:function(){return this._shaderID}}),Object.defineProperty(V.prototype,"vertex",{get:function(){return this._vertexCode}}),Object.defineProperty(V.prototype,"fragment",{get:function(){return this._fragmentCode}}),Object.defineProperty(V.prototype,"uniforms",{get:function(){return this._uniformList}}));var Dc=/(@import)\s*([0-9a-zA-Z_\-\.]*)/g;V.parseImport=function(e){return e=e.replace(Dc,function(n,r,i){var n=V.source(i);return n?V.parseImport(n):(console.error('Shader chunk "'+i+'" not existed in library'),"")}),e};var Mc=/(@export)\s*([0-9a-zA-Z_\-\.]*)\s*\n([\s\S]*?)@end/g;V.import=function(e){e.replace(Mc,function(t,r,i,a){var a=a.replace(/(^[\s\t\xa0\u3000]+)|([\u3000\xa0\s\t]+\x24)/g,"");if(a){for(var o=i.split("."),s=V.codes,l=0,u;l<o.length-1;)u=o[l++],s[u]||(s[u]={}),s=s[u];u=o[l],s[u]=a}return a})};V.codes={};V.source=function(e){for(var t=e.split("."),r=V.codes,i=0;r&&i<t.length;){var n=t[i++];r=r[n]}return typeof r!="string"?(console.error('Shader "'+e+'" not existed in library'),""):r};const rl=`@export clay.prez.vertex
uniform mat4 WVP : WORLDVIEWPROJECTION;
attribute vec3 pos : POSITION;
attribute vec2 uv : TEXCOORD_0;
uniform vec2 uvRepeat : [1.0, 1.0];
uniform vec2 uvOffset : [0.0, 0.0];
@import clay.chunk.skinning_header
@import clay.chunk.instancing_header
varying vec2 v_Texcoord;
void main()
{
 vec4 P = vec4(pos, 1.0);
#ifdef SKINNING
 @import clay.chunk.skin_matrix
 P = skinMatrixWS * P;
#endif
#ifdef INSTANCING
 @import clay.chunk.instancing_matrix
 P = instanceMat * P;
#endif
 gl_Position = WVP * P;
 v_Texcoord = uv * uvRepeat + uvOffset;
}
@end
@export clay.prez.fragment
uniform sampler2D alphaMap;
uniform float alphaCutoff: 0.0;
varying vec2 v_Texcoord;
void main()
{
 if (alphaCutoff > 0.0) {
 if (texture2D(alphaMap, v_Texcoord).a <= alphaCutoff) {
 discard;
 }
 }
 gl_FragColor = vec4(0.0,0.0,0.0,1.0);
}
@end`;var De={};De.create=function(){var e=new lt(16);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e};De.clone=function(e){var t=new lt(16);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t};De.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e};De.identity=function(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e};De.transpose=function(e,t){if(e===t){var r=t[1],i=t[2],n=t[3],a=t[6],o=t[7],s=t[11];e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=r,e[6]=t[9],e[7]=t[13],e[8]=i,e[9]=a,e[11]=t[14],e[12]=n,e[13]=o,e[14]=s}else e[0]=t[0],e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=t[1],e[5]=t[5],e[6]=t[9],e[7]=t[13],e[8]=t[2],e[9]=t[6],e[10]=t[10],e[11]=t[14],e[12]=t[3],e[13]=t[7],e[14]=t[11],e[15]=t[15];return e};De.invert=function(e,t){var r=t[0],i=t[1],n=t[2],a=t[3],o=t[4],s=t[5],l=t[6],u=t[7],c=t[8],h=t[9],f=t[10],d=t[11],v=t[12],p=t[13],m=t[14],_=t[15],x=r*s-i*o,y=r*l-n*o,g=r*u-a*o,w=i*l-n*s,T=i*u-a*s,b=n*u-a*l,S=c*p-h*v,C=c*m-f*v,L=c*_-d*v,A=h*m-f*p,M=h*_-d*p,P=f*_-d*m,D=x*P-y*M+g*A+w*L-T*C+b*S;return D?(D=1/D,e[0]=(s*P-l*M+u*A)*D,e[1]=(n*M-i*P-a*A)*D,e[2]=(p*b-m*T+_*w)*D,e[3]=(f*T-h*b-d*w)*D,e[4]=(l*L-o*P-u*C)*D,e[5]=(r*P-n*L+a*C)*D,e[6]=(m*g-v*b-_*y)*D,e[7]=(c*b-f*g+d*y)*D,e[8]=(o*M-s*L+u*S)*D,e[9]=(i*L-r*M-a*S)*D,e[10]=(v*T-p*g+_*x)*D,e[11]=(h*g-c*T-d*x)*D,e[12]=(s*C-o*A-l*S)*D,e[13]=(r*A-i*C+n*S)*D,e[14]=(p*y-v*w-m*x)*D,e[15]=(c*w-h*y+f*x)*D,e):null};De.adjoint=function(e,t){var r=t[0],i=t[1],n=t[2],a=t[3],o=t[4],s=t[5],l=t[6],u=t[7],c=t[8],h=t[9],f=t[10],d=t[11],v=t[12],p=t[13],m=t[14],_=t[15];return e[0]=s*(f*_-d*m)-h*(l*_-u*m)+p*(l*d-u*f),e[1]=-(i*(f*_-d*m)-h*(n*_-a*m)+p*(n*d-a*f)),e[2]=i*(l*_-u*m)-s*(n*_-a*m)+p*(n*u-a*l),e[3]=-(i*(l*d-u*f)-s*(n*d-a*f)+h*(n*u-a*l)),e[4]=-(o*(f*_-d*m)-c*(l*_-u*m)+v*(l*d-u*f)),e[5]=r*(f*_-d*m)-c*(n*_-a*m)+v*(n*d-a*f),e[6]=-(r*(l*_-u*m)-o*(n*_-a*m)+v*(n*u-a*l)),e[7]=r*(l*d-u*f)-o*(n*d-a*f)+c*(n*u-a*l),e[8]=o*(h*_-d*p)-c*(s*_-u*p)+v*(s*d-u*h),e[9]=-(r*(h*_-d*p)-c*(i*_-a*p)+v*(i*d-a*h)),e[10]=r*(s*_-u*p)-o*(i*_-a*p)+v*(i*u-a*s),e[11]=-(r*(s*d-u*h)-o*(i*d-a*h)+c*(i*u-a*s)),e[12]=-(o*(h*m-f*p)-c*(s*m-l*p)+v*(s*f-l*h)),e[13]=r*(h*m-f*p)-c*(i*m-n*p)+v*(i*f-n*h),e[14]=-(r*(s*m-l*p)-o*(i*m-n*p)+v*(i*l-n*s)),e[15]=r*(s*f-l*h)-o*(i*f-n*h)+c*(i*l-n*s),e};De.determinant=function(e){var t=e[0],r=e[1],i=e[2],n=e[3],a=e[4],o=e[5],s=e[6],l=e[7],u=e[8],c=e[9],h=e[10],f=e[11],d=e[12],v=e[13],p=e[14],m=e[15],_=t*o-r*a,x=t*s-i*a,y=t*l-n*a,g=r*s-i*o,w=r*l-n*o,T=i*l-n*s,b=u*v-c*d,S=u*p-h*d,C=u*m-f*d,L=c*p-h*v,A=c*m-f*v,M=h*m-f*p;return _*M-x*A+y*L+g*C-w*S+T*b};De.multiply=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[3],s=t[4],l=t[5],u=t[6],c=t[7],h=t[8],f=t[9],d=t[10],v=t[11],p=t[12],m=t[13],_=t[14],x=t[15],y=r[0],g=r[1],w=r[2],T=r[3];return e[0]=y*i+g*s+w*h+T*p,e[1]=y*n+g*l+w*f+T*m,e[2]=y*a+g*u+w*d+T*_,e[3]=y*o+g*c+w*v+T*x,y=r[4],g=r[5],w=r[6],T=r[7],e[4]=y*i+g*s+w*h+T*p,e[5]=y*n+g*l+w*f+T*m,e[6]=y*a+g*u+w*d+T*_,e[7]=y*o+g*c+w*v+T*x,y=r[8],g=r[9],w=r[10],T=r[11],e[8]=y*i+g*s+w*h+T*p,e[9]=y*n+g*l+w*f+T*m,e[10]=y*a+g*u+w*d+T*_,e[11]=y*o+g*c+w*v+T*x,y=r[12],g=r[13],w=r[14],T=r[15],e[12]=y*i+g*s+w*h+T*p,e[13]=y*n+g*l+w*f+T*m,e[14]=y*a+g*u+w*d+T*_,e[15]=y*o+g*c+w*v+T*x,e};De.multiplyAffine=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[4],s=t[5],l=t[6],u=t[8],c=t[9],h=t[10],f=t[12],d=t[13],v=t[14],p=r[0],m=r[1],_=r[2];return e[0]=p*i+m*o+_*u,e[1]=p*n+m*s+_*c,e[2]=p*a+m*l+_*h,p=r[4],m=r[5],_=r[6],e[4]=p*i+m*o+_*u,e[5]=p*n+m*s+_*c,e[6]=p*a+m*l+_*h,p=r[8],m=r[9],_=r[10],e[8]=p*i+m*o+_*u,e[9]=p*n+m*s+_*c,e[10]=p*a+m*l+_*h,p=r[12],m=r[13],_=r[14],e[12]=p*i+m*o+_*u+f,e[13]=p*n+m*s+_*c+d,e[14]=p*a+m*l+_*h+v,e};De.mul=De.multiply;De.mulAffine=De.multiplyAffine;De.translate=function(e,t,r){var i=r[0],n=r[1],a=r[2],o,s,l,u,c,h,f,d,v,p,m,_;return t===e?(e[12]=t[0]*i+t[4]*n+t[8]*a+t[12],e[13]=t[1]*i+t[5]*n+t[9]*a+t[13],e[14]=t[2]*i+t[6]*n+t[10]*a+t[14],e[15]=t[3]*i+t[7]*n+t[11]*a+t[15]):(o=t[0],s=t[1],l=t[2],u=t[3],c=t[4],h=t[5],f=t[6],d=t[7],v=t[8],p=t[9],m=t[10],_=t[11],e[0]=o,e[1]=s,e[2]=l,e[3]=u,e[4]=c,e[5]=h,e[6]=f,e[7]=d,e[8]=v,e[9]=p,e[10]=m,e[11]=_,e[12]=o*i+c*n+v*a+t[12],e[13]=s*i+h*n+p*a+t[13],e[14]=l*i+f*n+m*a+t[14],e[15]=u*i+d*n+_*a+t[15]),e};De.scale=function(e,t,r){var i=r[0],n=r[1],a=r[2];return e[0]=t[0]*i,e[1]=t[1]*i,e[2]=t[2]*i,e[3]=t[3]*i,e[4]=t[4]*n,e[5]=t[5]*n,e[6]=t[6]*n,e[7]=t[7]*n,e[8]=t[8]*a,e[9]=t[9]*a,e[10]=t[10]*a,e[11]=t[11]*a,e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e};De.rotate=function(e,t,r,i){var n=i[0],a=i[1],o=i[2],s=Math.sqrt(n*n+a*a+o*o),l,u,c,h,f,d,v,p,m,_,x,y,g,w,T,b,S,C,L,A,M,P,D,N;return Math.abs(s)<mn?null:(s=1/s,n*=s,a*=s,o*=s,l=Math.sin(r),u=Math.cos(r),c=1-u,h=t[0],f=t[1],d=t[2],v=t[3],p=t[4],m=t[5],_=t[6],x=t[7],y=t[8],g=t[9],w=t[10],T=t[11],b=n*n*c+u,S=a*n*c+o*l,C=o*n*c-a*l,L=n*a*c-o*l,A=a*a*c+u,M=o*a*c+n*l,P=n*o*c+a*l,D=a*o*c-n*l,N=o*o*c+u,e[0]=h*b+p*S+y*C,e[1]=f*b+m*S+g*C,e[2]=d*b+_*S+w*C,e[3]=v*b+x*S+T*C,e[4]=h*L+p*A+y*M,e[5]=f*L+m*A+g*M,e[6]=d*L+_*A+w*M,e[7]=v*L+x*A+T*M,e[8]=h*P+p*D+y*N,e[9]=f*P+m*D+g*N,e[10]=d*P+_*D+w*N,e[11]=v*P+x*D+T*N,t!==e&&(e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e)};De.rotateX=function(e,t,r){var i=Math.sin(r),n=Math.cos(r),a=t[4],o=t[5],s=t[6],l=t[7],u=t[8],c=t[9],h=t[10],f=t[11];return t!==e&&(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[4]=a*n+u*i,e[5]=o*n+c*i,e[6]=s*n+h*i,e[7]=l*n+f*i,e[8]=u*n-a*i,e[9]=c*n-o*i,e[10]=h*n-s*i,e[11]=f*n-l*i,e};De.rotateY=function(e,t,r){var i=Math.sin(r),n=Math.cos(r),a=t[0],o=t[1],s=t[2],l=t[3],u=t[8],c=t[9],h=t[10],f=t[11];return t!==e&&(e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=a*n-u*i,e[1]=o*n-c*i,e[2]=s*n-h*i,e[3]=l*n-f*i,e[8]=a*i+u*n,e[9]=o*i+c*n,e[10]=s*i+h*n,e[11]=l*i+f*n,e};De.rotateZ=function(e,t,r){var i=Math.sin(r),n=Math.cos(r),a=t[0],o=t[1],s=t[2],l=t[3],u=t[4],c=t[5],h=t[6],f=t[7];return t!==e&&(e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=a*n+u*i,e[1]=o*n+c*i,e[2]=s*n+h*i,e[3]=l*n+f*i,e[4]=u*n-a*i,e[5]=c*n-o*i,e[6]=h*n-s*i,e[7]=f*n-l*i,e};De.fromRotationTranslation=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[3],s=i+i,l=n+n,u=a+a,c=i*s,h=i*l,f=i*u,d=n*l,v=n*u,p=a*u,m=o*s,_=o*l,x=o*u;return e[0]=1-(d+p),e[1]=h+x,e[2]=f-_,e[3]=0,e[4]=h-x,e[5]=1-(c+p),e[6]=v+m,e[7]=0,e[8]=f+_,e[9]=v-m,e[10]=1-(c+d),e[11]=0,e[12]=r[0],e[13]=r[1],e[14]=r[2],e[15]=1,e};De.fromQuat=function(e,t){var r=t[0],i=t[1],n=t[2],a=t[3],o=r+r,s=i+i,l=n+n,u=r*o,c=i*o,h=i*s,f=n*o,d=n*s,v=n*l,p=a*o,m=a*s,_=a*l;return e[0]=1-h-v,e[1]=c+_,e[2]=f-m,e[3]=0,e[4]=c-_,e[5]=1-u-v,e[6]=d+p,e[7]=0,e[8]=f+m,e[9]=d-p,e[10]=1-u-h,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e};De.frustum=function(e,t,r,i,n,a,o){var s=1/(r-t),l=1/(n-i),u=1/(a-o);return e[0]=a*2*s,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=a*2*l,e[6]=0,e[7]=0,e[8]=(r+t)*s,e[9]=(n+i)*l,e[10]=(o+a)*u,e[11]=-1,e[12]=0,e[13]=0,e[14]=o*a*2*u,e[15]=0,e};De.perspective=function(e,t,r,i,n){var a=1/Math.tan(t/2),o=1/(i-n);return e[0]=a/r,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=a,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=(n+i)*o,e[11]=-1,e[12]=0,e[13]=0,e[14]=2*n*i*o,e[15]=0,e};De.ortho=function(e,t,r,i,n,a,o){var s=1/(t-r),l=1/(i-n),u=1/(a-o);return e[0]=-2*s,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=-2*l,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=2*u,e[11]=0,e[12]=(t+r)*s,e[13]=(n+i)*l,e[14]=(o+a)*u,e[15]=1,e};De.lookAt=function(e,t,r,i){var n,a,o,s,l,u,c,h,f,d,v=t[0],p=t[1],m=t[2],_=i[0],x=i[1],y=i[2],g=r[0],w=r[1],T=r[2];return Math.abs(v-g)<mn&&Math.abs(p-w)<mn&&Math.abs(m-T)<mn?De.identity(e):(c=v-g,h=p-w,f=m-T,d=1/Math.sqrt(c*c+h*h+f*f),c*=d,h*=d,f*=d,n=x*f-y*h,a=y*c-_*f,o=_*h-x*c,d=Math.sqrt(n*n+a*a+o*o),d?(d=1/d,n*=d,a*=d,o*=d):(n=0,a=0,o=0),s=h*o-f*a,l=f*n-c*o,u=c*a-h*n,d=Math.sqrt(s*s+l*l+u*u),d?(d=1/d,s*=d,l*=d,u*=d):(s=0,l=0,u=0),e[0]=n,e[1]=s,e[2]=c,e[3]=0,e[4]=a,e[5]=l,e[6]=h,e[7]=0,e[8]=o,e[9]=u,e[10]=f,e[11]=0,e[12]=-(n*v+a*p+o*m),e[13]=-(s*v+l*p+u*m),e[14]=-(c*v+h*p+f*m),e[15]=1,e)};De.frob=function(e){return Math.sqrt(Math.pow(e[0],2)+Math.pow(e[1],2)+Math.pow(e[2],2)+Math.pow(e[3],2)+Math.pow(e[4],2)+Math.pow(e[5],2)+Math.pow(e[6],2)+Math.pow(e[7],2)+Math.pow(e[8],2)+Math.pow(e[9],2)+Math.pow(e[10],2)+Math.pow(e[11],2)+Math.pow(e[12],2)+Math.pow(e[13],2)+Math.pow(e[14],2)+Math.pow(e[15],2))};const H=De;var ee={};ee.create=function(){var e=new lt(3);return e[0]=0,e[1]=0,e[2]=0,e};ee.clone=function(e){var t=new lt(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t};ee.fromValues=function(e,t,r){var i=new lt(3);return i[0]=e,i[1]=t,i[2]=r,i};ee.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e};ee.set=function(e,t,r,i){return e[0]=t,e[1]=r,e[2]=i,e};ee.add=function(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e[2]=t[2]+r[2],e};ee.subtract=function(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e[2]=t[2]-r[2],e};ee.sub=ee.subtract;ee.multiply=function(e,t,r){return e[0]=t[0]*r[0],e[1]=t[1]*r[1],e[2]=t[2]*r[2],e};ee.mul=ee.multiply;ee.divide=function(e,t,r){return e[0]=t[0]/r[0],e[1]=t[1]/r[1],e[2]=t[2]/r[2],e};ee.div=ee.divide;ee.min=function(e,t,r){return e[0]=Math.min(t[0],r[0]),e[1]=Math.min(t[1],r[1]),e[2]=Math.min(t[2],r[2]),e};ee.max=function(e,t,r){return e[0]=Math.max(t[0],r[0]),e[1]=Math.max(t[1],r[1]),e[2]=Math.max(t[2],r[2]),e};ee.scale=function(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e};ee.scaleAndAdd=function(e,t,r,i){return e[0]=t[0]+r[0]*i,e[1]=t[1]+r[1]*i,e[2]=t[2]+r[2]*i,e};ee.distance=function(e,t){var r=t[0]-e[0],i=t[1]-e[1],n=t[2]-e[2];return Math.sqrt(r*r+i*i+n*n)};ee.dist=ee.distance;ee.squaredDistance=function(e,t){var r=t[0]-e[0],i=t[1]-e[1],n=t[2]-e[2];return r*r+i*i+n*n};ee.sqrDist=ee.squaredDistance;ee.length=function(e){var t=e[0],r=e[1],i=e[2];return Math.sqrt(t*t+r*r+i*i)};ee.len=ee.length;ee.squaredLength=function(e){var t=e[0],r=e[1],i=e[2];return t*t+r*r+i*i};ee.sqrLen=ee.squaredLength;ee.negate=function(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e};ee.inverse=function(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e};ee.normalize=function(e,t){var r=t[0],i=t[1],n=t[2],a=r*r+i*i+n*n;return a>0&&(a=1/Math.sqrt(a),e[0]=t[0]*a,e[1]=t[1]*a,e[2]=t[2]*a),e};ee.dot=function(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]};ee.cross=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=r[0],s=r[1],l=r[2];return e[0]=n*l-a*s,e[1]=a*o-i*l,e[2]=i*s-n*o,e};ee.lerp=function(e,t,r,i){var n=t[0],a=t[1],o=t[2];return e[0]=n+i*(r[0]-n),e[1]=a+i*(r[1]-a),e[2]=o+i*(r[2]-o),e};ee.random=function(e,t){t=t||1;var r=ei()*2*Math.PI,i=ei()*2-1,n=Math.sqrt(1-i*i)*t;return e[0]=Math.cos(r)*n,e[1]=Math.sin(r)*n,e[2]=i*t,e};ee.transformMat4=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=r[3]*i+r[7]*n+r[11]*a+r[15];return o=o||1,e[0]=(r[0]*i+r[4]*n+r[8]*a+r[12])/o,e[1]=(r[1]*i+r[5]*n+r[9]*a+r[13])/o,e[2]=(r[2]*i+r[6]*n+r[10]*a+r[14])/o,e};ee.transformMat3=function(e,t,r){var i=t[0],n=t[1],a=t[2];return e[0]=i*r[0]+n*r[3]+a*r[6],e[1]=i*r[1]+n*r[4]+a*r[7],e[2]=i*r[2]+n*r[5]+a*r[8],e};ee.transformQuat=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=r[0],s=r[1],l=r[2],u=r[3],c=u*i+s*a-l*n,h=u*n+l*i-o*a,f=u*a+o*n-s*i,d=-o*i-s*n-l*a;return e[0]=c*u+d*-o+h*-l-f*-s,e[1]=h*u+d*-s+f*-o-c*-l,e[2]=f*u+d*-l+c*-s-h*-o,e};ee.rotateX=function(e,t,r,i){var n=[],a=[];return n[0]=t[0]-r[0],n[1]=t[1]-r[1],n[2]=t[2]-r[2],a[0]=n[0],a[1]=n[1]*Math.cos(i)-n[2]*Math.sin(i),a[2]=n[1]*Math.sin(i)+n[2]*Math.cos(i),e[0]=a[0]+r[0],e[1]=a[1]+r[1],e[2]=a[2]+r[2],e};ee.rotateY=function(e,t,r,i){var n=[],a=[];return n[0]=t[0]-r[0],n[1]=t[1]-r[1],n[2]=t[2]-r[2],a[0]=n[2]*Math.sin(i)+n[0]*Math.cos(i),a[1]=n[1],a[2]=n[2]*Math.cos(i)-n[0]*Math.sin(i),e[0]=a[0]+r[0],e[1]=a[1]+r[1],e[2]=a[2]+r[2],e};ee.rotateZ=function(e,t,r,i){var n=[],a=[];return n[0]=t[0]-r[0],n[1]=t[1]-r[1],n[2]=t[2]-r[2],a[0]=n[0]*Math.cos(i)-n[1]*Math.sin(i),a[1]=n[0]*Math.sin(i)+n[1]*Math.cos(i),a[2]=n[2],e[0]=a[0]+r[0],e[1]=a[1]+r[1],e[2]=a[2]+r[2],e};ee.forEach=function(){var e=ee.create();return function(t,r,i,n,a,o){var s,l;for(r||(r=3),i||(i=0),n?l=Math.min(n*r+i,t.length):l=t.length,s=i;s<l;s+=r)e[0]=t[s],e[1]=t[s+1],e[2]=t[s+2],a(e,e,o),t[s]=e[0],t[s+1]=e[1],t[s+2]=e[2];return t}}();ee.angle=function(e,t){var r=ee.fromValues(e[0],e[1],e[2]),i=ee.fromValues(t[0],t[1],t[2]);ee.normalize(r,r),ee.normalize(i,i);var n=ee.dot(r,i);return n>1?0:Math.acos(n)};const R=ee;V.import(rl);var Fe=H.create,Ho={};function ko(e){return e.material}function Pc(e,t,r){return t.uniforms[r].value}function Rc(e,t,r,i){return r!==i}function Nc(e){return!0}function Wo(){}var Xo={float:F.FLOAT,byte:F.BYTE,ubyte:F.UNSIGNED_BYTE,short:F.SHORT,ushort:F.UNSIGNED_SHORT};function Ic(e,t,r){this.availableAttributes=e,this.availableAttributeSymbols=t,this.indicesBuffer=r,this.vao=null}function Oc(e){var t,r;this.bind=function(i){t||(t=$e.createCanvas(),t.width=t.height=1,t.getContext("2d"));var n=i.gl,a=!r;a&&(r=n.createTexture()),n.bindTexture(n.TEXTURE_2D,r),a&&n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,t)},this.unbind=function(i){i.gl.bindTexture(i.gl.TEXTURE_2D,null)},this.isRenderable=function(){return!0}}var pr=vt.extend(function(){return{canvas:null,_width:100,_height:100,devicePixelRatio:typeof window<"u"&&window.devicePixelRatio||1,clearColor:[0,0,0,0],clearBit:17664,alpha:!0,depth:!0,stencil:!1,antialias:!0,premultipliedAlpha:!0,preserveDrawingBuffer:!1,throwError:!0,gl:null,viewport:{},maxJointNumber:20,__currentFrameBuffer:null,_viewportStack:[],_clearStack:[],_sceneRendering:null}},function(){this.canvas||(this.canvas=$e.createCanvas());var e=this.canvas;try{var t={alpha:this.alpha,depth:this.depth,stencil:this.stencil,antialias:this.antialias,premultipliedAlpha:this.premultipliedAlpha,preserveDrawingBuffer:this.preserveDrawingBuffer};if(this.gl=e.getContext("webgl",t)||e.getContext("experimental-webgl",t),!this.gl)throw new Error;this._glinfo=new uc(this.gl),this.gl.targetRenderer&&console.error("Already created a renderer"),this.gl.targetRenderer=this,this.resize()}catch(r){throw"Error creating WebGL Context "+r}this._programMgr=new Qs(this),this._placeholderTexture=new Oc},{resize:function(e,t){var r=this.canvas,i=this.devicePixelRatio;e!=null?(r.style&&(r.style.width=e+"px",r.style.height=t+"px"),r.width=e*i,r.height=t*i,this._width=e,this._height=t):(this._width=r.width/i,this._height=r.height/i),this.setViewport(0,0,this._width,this._height)},getWidth:function(){return this._width},getHeight:function(){return this._height},getViewportAspect:function(){var e=this.viewport;return e.width/e.height},setDevicePixelRatio:function(e){this.devicePixelRatio=e,this.resize(this._width,this._height)},getDevicePixelRatio:function(){return this.devicePixelRatio},getGLExtension:function(e){return this._glinfo.getExtension(e)},getGLParameter:function(e){return this._glinfo.getParameter(e)},setViewport:function(e,t,r,i,n){if(typeof e=="object"){var a=e;e=a.x,t=a.y,r=a.width,i=a.height,n=a.devicePixelRatio}n=n||this.devicePixelRatio,this.gl.viewport(e*n,t*n,r*n,i*n),this.viewport={x:e,y:t,width:r,height:i,devicePixelRatio:n}},saveViewport:function(){this._viewportStack.push(this.viewport)},restoreViewport:function(){this._viewportStack.length>0&&this.setViewport(this._viewportStack.pop())},saveClear:function(){this._clearStack.push({clearBit:this.clearBit,clearColor:this.clearColor})},restoreClear:function(){if(this._clearStack.length>0){var e=this._clearStack.pop();this.clearColor=e.clearColor,this.clearBit=e.clearBit}},bindSceneRendering:function(e){this._sceneRendering=e},render:function(e,t,r,i){var n=this.gl,a=this.clearColor;if(this.clearBit){n.colorMask(!0,!0,!0,!0),n.depthMask(!0);var o=this.viewport,s=!1,l=o.devicePixelRatio;(o.width!==this._width||o.height!==this._height||l&&l!==this.devicePixelRatio||o.x||o.y)&&(s=!0,n.enable(n.SCISSOR_TEST),n.scissor(o.x*l,o.y*l,o.width*l,o.height*l)),n.clearColor(a[0],a[1],a[2],a[3]),n.clear(this.clearBit),s&&n.disable(n.SCISSOR_TEST)}if(r||e.update(!1),e.updateLights(),t=t||e.getMainCamera(),!t){console.error("Can't find camera in the scene.");return}t.update();var u=e.updateRenderList(t,!0);this._sceneRendering=e;var c=u.opaque,h=u.transparent,f=e.material;e.trigger("beforerender",this,e,t,u),i?(this.renderPreZ(c,e,t),n.depthFunc(n.LEQUAL)):n.depthFunc(n.LESS);for(var d=Fe(),v=R.create(),p=0;p<h.length;p++){var m=h[p];H.multiplyAffine(d,t.viewMatrix.array,m.worldTransform.array),R.transformMat4(v,m.position.array,d),m.__depth=v[2]}this.renderPass(c,t,{getMaterial:function(_){return f||_.material},sortCompare:this.opaqueSortCompare}),this.renderPass(h,t,{getMaterial:function(_){return f||_.material},sortCompare:this.transparentSortCompare}),e.trigger("afterrender",this,e,t,u),this._sceneRendering=null},getProgram:function(e,t,r){return t=t||e.material,this._programMgr.getProgram(e,t,r)},validateProgram:function(e){if(e.__error){var t=e.__error;if(Ho[e.__uid__])return;if(Ho[e.__uid__]=!0,this.throwError)throw new Error(t);this.trigger("error",t)}},updatePrograms:function(e,t,r){var i=r&&r.getMaterial||ko;t=t||null;for(var n=0;n<e.length;n++){var a=e[n],o=i.call(this,a);if(n>0){var s=e[n-1],l=s.joints?s.joints.length:0,u=a.joints?a.joints.length:0;if(u===l&&a.material===s.material&&a.lightGroup===s.lightGroup){a.__program=s.__program;continue}}var c=this._programMgr.getProgram(a,o,t);this.validateProgram(c),a.__program=c}},renderPass:function(e,t,r){this.trigger("beforerenderpass",this,e,t,r),r=r||{},r.getMaterial=r.getMaterial||ko,r.getUniform=r.getUniform||Pc,r.isMaterialChanged=r.isMaterialChanged||Rc,r.beforeRender=r.beforeRender||Wo,r.afterRender=r.afterRender||Wo;var i=r.ifRender||Nc;this.updatePrograms(e,this._sceneRendering,r),r.sortCompare&&e.sort(r.sortCompare);var n=this.viewport,a=n.devicePixelRatio,o=[n.x*a,n.y*a,n.width*a,n.height*a],s=this.devicePixelRatio,l=this.__currentFrameBuffer?[this.__currentFrameBuffer.getTextureWidth(),this.__currentFrameBuffer.getTextureHeight()]:[this._width*s,this._height*s],u=[o[2],o[3]],c=Date.now();t?(H.copy(Oe.VIEW,t.viewMatrix.array),H.copy(Oe.PROJECTION,t.projectionMatrix.array),H.copy(Oe.VIEWINVERSE,t.worldTransform.array)):(H.identity(Oe.VIEW),H.identity(Oe.PROJECTION),H.identity(Oe.VIEWINVERSE)),H.multiply(Oe.VIEWPROJECTION,Oe.PROJECTION,Oe.VIEW),H.invert(Oe.PROJECTIONINVERSE,Oe.PROJECTION),H.invert(Oe.VIEWPROJECTIONINVERSE,Oe.VIEWPROJECTION);for(var h=this.gl,f=this._sceneRendering,d,v,p,m,_,x,y,g,w,T,b,S,C=null,L=0;L<e.length;L++){var A=e[L],M=A.worldTransform!=null,P;if(i(A)){M&&(P=A.isSkinnedMesh&&A.isSkinnedMesh()?A.offsetMatrix?A.offsetMatrix.array:Oe.IDENTITY:A.worldTransform.array);var D=A.geometry,N=r.getMaterial.call(this,A),U=A.__program,W=N.shader,z=D.__uid__+"-"+U.__uid__,$=z!==T;T=z,$&&C&&C.bindVertexArrayOES(null),M&&(H.copy(Oe.WORLD,P),H.multiply(Oe.WORLDVIEWPROJECTION,Oe.VIEWPROJECTION,P),H.multiplyAffine(Oe.WORLDVIEW,Oe.VIEW,P),(W.matrixSemantics.WORLDINVERSE||W.matrixSemantics.WORLDINVERSETRANSPOSE)&&H.invert(Oe.WORLDINVERSE,P),(W.matrixSemantics.WORLDVIEWINVERSE||W.matrixSemantics.WORLDVIEWINVERSETRANSPOSE)&&H.invert(Oe.WORLDVIEWINVERSE,Oe.WORLDVIEW),(W.matrixSemantics.WORLDVIEWPROJECTIONINVERSE||W.matrixSemantics.WORLDVIEWPROJECTIONINVERSETRANSPOSE)&&H.invert(Oe.WORLDVIEWPROJECTIONINVERSE,Oe.WORLDVIEWPROJECTION)),A.beforeRender&&A.beforeRender(this),r.beforeRender.call(this,A,N,d);var G=U!==v;G?(U.bind(this),U.setUniformOfSemantic(h,"VIEWPORT",o),U.setUniformOfSemantic(h,"WINDOW_SIZE",l),t&&(U.setUniformOfSemantic(h,"NEAR",t.near),U.setUniformOfSemantic(h,"FAR",t.far)),U.setUniformOfSemantic(h,"DEVICEPIXELRATIO",a),U.setUniformOfSemantic(h,"TIME",c),U.setUniformOfSemantic(h,"VIEWPORT_SIZE",u),f&&f.setLightUniforms(U,A.lightGroup,this)):U=v,(G||r.isMaterialChanged(A,p,N,d))&&(N.depthTest!==m&&(N.depthTest?h.enable(h.DEPTH_TEST):h.disable(h.DEPTH_TEST),m=N.depthTest),N.depthMask!==_&&(h.depthMask(N.depthMask),_=N.depthMask),N.transparent!==w&&(N.transparent?h.enable(h.BLEND):h.disable(h.BLEND),w=N.transparent),N.transparent&&(N.blend?N.blend(h):(h.blendEquationSeparate(h.FUNC_ADD,h.FUNC_ADD),h.blendFuncSeparate(h.SRC_ALPHA,h.ONE_MINUS_SRC_ALPHA,h.ONE,h.ONE_MINUS_SRC_ALPHA))),S=this._bindMaterial(A,N,U,p||null,d||null,v||null,r.getUniform),d=N);var ne=W.matrixSemanticKeys;if(M)for(var B=0;B<ne.length;B++){var I=ne[B],Y=W.matrixSemantics[I],X=Oe[I];if(Y.isTranspose){var Te=Oe[Y.semanticNoTranspose];H.transpose(X,Te)}U.setUniform(h,Y.type,Y.symbol,X)}A.cullFace!==y&&(y=A.cullFace,h.cullFace(y)),A.frontFace!==g&&(g=A.frontFace,h.frontFace(g)),A.culling!==x&&(x=A.culling,x?h.enable(h.CULL_FACE):h.disable(h.CULL_FACE)),this._updateSkeleton(A,U,S),$&&(b=this._bindVAO(C,W,D,U)),this._renderObject(A,b,U),r.afterRender(this,A),A.afterRender&&A.afterRender(this),v=U,p=A}}this.trigger("afterrenderpass",this,e,t,r)},getMaxJointNumber:function(){return this.maxJointNumber},_updateSkeleton:function(e,t,r){var i=this.gl,n=e.skeleton;if(n)if(n.update(),e.joints.length>this.getMaxJointNumber()){var a=n.getSubSkinMatricesTexture(e.__uid__,e.joints);t.useTextureSlot(this,a,r),t.setUniform(i,"1i","skinMatricesTexture",r),t.setUniform(i,"1f","skinMatricesTextureSize",a.width)}else{var o=n.getSubSkinMatrices(e.__uid__,e.joints);t.setUniformOfSemantic(i,"SKIN_MATRIX",o)}},_renderObject:function(e,t,r){var i=this.gl,n=e.geometry,a=e.mode;a==null&&(a=4);var o=null,s=e.isInstancedMesh&&e.isInstancedMesh();if(s&&(o=this.getGLExtension("ANGLE_instanced_arrays"),!o)){console.warn("Device not support ANGLE_instanced_arrays extension");return}var l;if(s&&(l=this._bindInstancedAttributes(e,r,o)),t.indicesBuffer){var u=this.getGLExtension("OES_element_index_uint"),c=u&&n.indices instanceof Uint32Array,h=c?i.UNSIGNED_INT:i.UNSIGNED_SHORT;s?o.drawElementsInstancedANGLE(a,t.indicesBuffer.count,h,0,e.getInstanceCount()):i.drawElements(a,t.indicesBuffer.count,h,0)}else s?o.drawArraysInstancedANGLE(a,0,n.vertexCount,e.getInstanceCount()):i.drawArrays(a,0,n.vertexCount);if(s)for(var f=0;f<l.length;f++)i.disableVertexAttribArray(l[f])},_bindInstancedAttributes:function(e,t,r){for(var i=this.gl,n=e.getInstancedAttributesBuffers(this),a=[],o=0;o<n.length;o++){var s=n[o],l=t.getAttribLocation(i,s.symbol);if(!(l<0)){var u=Xo[s.type]||i.FLOAT;i.enableVertexAttribArray(l),i.bindBuffer(i.ARRAY_BUFFER,s.buffer),i.vertexAttribPointer(l,s.size,u,!1,0,0),r.vertexAttribDivisorANGLE(l,s.divisor),a.push(l)}}return a},_bindMaterial:function(e,t,r,i,n,a,o){for(var s=this.gl,l=a===r,u=r.currentTextureSlot(),c=t.getEnabledUniforms(),h=t.getTextureUniforms(),f=this._placeholderTexture,d=0;d<h.length;d++){var v=h[d],p=o(e,t,v),m=t.uniforms[v].type;if(m==="t"&&p)p.__slot=-1;else if(m==="tv")for(var _=0;_<p.length;_++)p[_]&&(p[_].__slot=-1)}f.__slot=-1;for(var d=0;d<c.length;d++){var v=c[d],x=t.uniforms[v],p=o(e,t,v),m=x.type,y=m==="t";if(y&&(!p||!p.isRenderable())&&(p=f),n&&l){var g=o(i,n,v);if(y&&(!g||!g.isRenderable())&&(g=f),g===p){if(y)r.takeCurrentTextureSlot(this,null);else if(m==="tv"&&p)for(var _=0;_<p.length;_++)r.takeCurrentTextureSlot(this,null);continue}}if(p!=null)if(y)if(p.__slot<0){var w=r.currentTextureSlot(),T=r.setUniform(s,"1i",v,w);T&&(r.takeCurrentTextureSlot(this,p),p.__slot=w)}else r.setUniform(s,"1i",v,p.__slot);else if(Array.isArray(p)){if(p.length===0)continue;if(m==="tv"){if(!r.hasUniform(v))continue;for(var b=[],_=0;_<p.length;_++){var S=p[_];if(S.__slot<0){var w=r.currentTextureSlot();b.push(w),r.takeCurrentTextureSlot(this,S),S.__slot=w}else b.push(S.__slot)}r.setUniform(s,"1iv",v,b)}else r.setUniform(s,x.type,v,p)}else r.setUniform(s,x.type,v,p)}var C=r.currentTextureSlot();return r.resetTextureSlot(u),C},_bindVAO:function(e,t,r,i){var n=!r.dynamic,a=this.gl,o=this.__uid__+"-"+i.__uid__,s=r.__vaoCache[o];if(!s){var l=r.getBufferChunks(this);if(!l||!l.length)return;for(var u=l[0],c=u.attributeBuffers,g=u.indicesBuffer,y=[],h=[],f=0;f<c.length;f++){var d=c[f],v=d.name,p=d.semantic,m;if(p){var _=t.attributeSemantics[p];m=_&&_.symbol}else m=v;m&&i.attributes[m]&&(y.push(d),h.push(m))}s=new Ic(y,h,g),n&&(r.__vaoCache[o]=s)}var x=!0;e&&n&&(s.vao==null?s.vao=e.createVertexArrayOES():x=!1,e.bindVertexArrayOES(s.vao));var y=s.availableAttributes,g=s.indicesBuffer;if(x){for(var w=i.enableAttributes(this,s.availableAttributeSymbols,e&&n&&s),f=0;f<y.length;f++){var T=w[f];if(T!==-1){var d=y[f],b=d.buffer,S=d.size,C=Xo[d.type]||a.FLOAT;a.bindBuffer(a.ARRAY_BUFFER,b),a.vertexAttribPointer(T,S,C,!1,0,0)}}r.isUseIndices()&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,g.buffer)}return s},renderPreZ:function(e,t,r){var i=this.gl,n=this._prezMaterial||new Nt({shader:new V(V.source("clay.prez.vertex"),V.source("clay.prez.fragment"))});this._prezMaterial=n,i.colorMask(!1,!1,!1,!1),i.depthMask(!0),this.renderPass(e,r,{ifRender:function(a){return!a.ignorePreZ},isMaterialChanged:function(a,o){var s=a.material,l=o.material;return s.get("diffuseMap")!==l.get("diffuseMap")||(s.get("alphaCutoff")||0)!==(l.get("alphaCutoff")||0)},getUniform:function(a,o,s){if(s==="alphaMap")return a.material.get("diffuseMap");if(s==="alphaCutoff"){if(a.material.isDefined("fragment","ALPHA_TEST")&&a.material.get("diffuseMap")){var l=a.material.get("alphaCutoff");return l||0}return 0}else return s==="uvRepeat"?a.material.get("uvRepeat"):s==="uvOffset"?a.material.get("uvOffset"):o.get(s)},getMaterial:function(){return n},sort:this.opaqueSortCompare}),i.colorMask(!0,!0,!0,!0),i.depthMask(!0)},disposeScene:function(e){this.disposeNode(e,!0,!0),e.dispose()},disposeNode:function(e,t,r){e.getParent()&&e.getParent().remove(e);var i={};e.traverse(function(n){var a=n.material;if(n.geometry&&t&&n.geometry.dispose(this),r&&a&&!i[a.__uid__]){for(var o=a.getTextureUniforms(),s=0;s<o.length;s++){var l=o[s],u=a.uniforms[l].value,c=a.uniforms[l].type;if(u){if(c==="t")u.dispose&&u.dispose(this);else if(c==="tv")for(var h=0;h<u.length;h++)u[h]&&u[h].dispose&&u[h].dispose(this)}}i[a.__uid__]=!0}n.dispose&&n.dispose(this)},this)},disposeGeometry:function(e){e.dispose(this)},disposeTexture:function(e){e.dispose(this)},disposeFrameBuffer:function(e){e.dispose(this)},dispose:function(){},screenToNDC:function(e,t,r){r||(r=new wt),t=this._height-t;var i=this.viewport,n=r.array;return n[0]=(e-i.x)/i.width,n[0]=n[0]*2-1,n[1]=(t-i.y)/i.height,n[1]=n[1]*2-1,r}});pr.opaqueSortCompare=pr.prototype.opaqueSortCompare=function(e,t){return e.renderOrder===t.renderOrder?e.__program===t.__program?e.material===t.material?e.geometry.__uid__-t.geometry.__uid__:e.material.__uid__-t.material.__uid__:e.__program&&t.__program?e.__program.__uid__-t.__program.__uid__:0:e.renderOrder-t.renderOrder};pr.transparentSortCompare=pr.prototype.transparentSortCompare=function(e,t){return e.renderOrder===t.renderOrder?e.__depth===t.__depth?e.__program===t.__program?e.material===t.material?e.geometry.__uid__-t.geometry.__uid__:e.material.__uid__-t.material.__uid__:e.__program&&t.__program?e.__program.__uid__-t.__program.__uid__:0:e.__depth-t.__depth:e.renderOrder-t.renderOrder};var Oe={IDENTITY:Fe(),WORLD:Fe(),VIEW:Fe(),PROJECTION:Fe(),WORLDVIEW:Fe(),VIEWPROJECTION:Fe(),WORLDVIEWPROJECTION:Fe(),WORLDINVERSE:Fe(),VIEWINVERSE:Fe(),PROJECTIONINVERSE:Fe(),WORLDVIEWINVERSE:Fe(),VIEWPROJECTIONINVERSE:Fe(),WORLDVIEWPROJECTIONINVERSE:Fe(),WORLDTRANSPOSE:Fe(),VIEWTRANSPOSE:Fe(),PROJECTIONTRANSPOSE:Fe(),WORLDVIEWTRANSPOSE:Fe(),VIEWPROJECTIONTRANSPOSE:Fe(),WORLDVIEWPROJECTIONTRANSPOSE:Fe(),WORLDINVERSETRANSPOSE:Fe(),VIEWINVERSETRANSPOSE:Fe(),PROJECTIONINVERSETRANSPOSE:Fe(),WORLDVIEWINVERSETRANSPOSE:Fe(),VIEWPROJECTIONINVERSETRANSPOSE:Fe(),WORLDVIEWPROJECTIONINVERSETRANSPOSE:Fe()};pr.COLOR_BUFFER_BIT=F.COLOR_BUFFER_BIT;pr.DEPTH_BUFFER_BIT=F.DEPTH_BUFFER_BIT;pr.STENCIL_BUFFER_BIT=F.STENCIL_BUFFER_BIT;const Ni=pr;var J=function(e,t,r){e=e||0,t=t||0,r=r||0,this.array=R.fromValues(e,t,r),this._dirty=!0};J.prototype={constructor:J,add:function(e){return R.add(this.array,this.array,e.array),this._dirty=!0,this},set:function(e,t,r){return this.array[0]=e,this.array[1]=t,this.array[2]=r,this._dirty=!0,this},setArray:function(e){return this.array[0]=e[0],this.array[1]=e[1],this.array[2]=e[2],this._dirty=!0,this},clone:function(){return new J(this.x,this.y,this.z)},copy:function(e){return R.copy(this.array,e.array),this._dirty=!0,this},cross:function(e,t){return R.cross(this.array,e.array,t.array),this._dirty=!0,this},dist:function(e){return R.dist(this.array,e.array)},distance:function(e){return R.distance(this.array,e.array)},div:function(e){return R.div(this.array,this.array,e.array),this._dirty=!0,this},divide:function(e){return R.divide(this.array,this.array,e.array),this._dirty=!0,this},dot:function(e){return R.dot(this.array,e.array)},len:function(){return R.len(this.array)},length:function(){return R.length(this.array)},lerp:function(e,t,r){return R.lerp(this.array,e.array,t.array,r),this._dirty=!0,this},min:function(e){return R.min(this.array,this.array,e.array),this._dirty=!0,this},max:function(e){return R.max(this.array,this.array,e.array),this._dirty=!0,this},mul:function(e){return R.mul(this.array,this.array,e.array),this._dirty=!0,this},multiply:function(e){return R.multiply(this.array,this.array,e.array),this._dirty=!0,this},negate:function(){return R.negate(this.array,this.array),this._dirty=!0,this},normalize:function(){return R.normalize(this.array,this.array),this._dirty=!0,this},random:function(e){return R.random(this.array,e),this._dirty=!0,this},scale:function(e){return R.scale(this.array,this.array,e),this._dirty=!0,this},scaleAndAdd:function(e,t){return R.scaleAndAdd(this.array,this.array,e.array,t),this._dirty=!0,this},sqrDist:function(e){return R.sqrDist(this.array,e.array)},squaredDistance:function(e){return R.squaredDistance(this.array,e.array)},sqrLen:function(){return R.sqrLen(this.array)},squaredLength:function(){return R.squaredLength(this.array)},sub:function(e){return R.sub(this.array,this.array,e.array),this._dirty=!0,this},subtract:function(e){return R.subtract(this.array,this.array,e.array),this._dirty=!0,this},transformMat3:function(e){return R.transformMat3(this.array,this.array,e.array),this._dirty=!0,this},transformMat4:function(e){return R.transformMat4(this.array,this.array,e.array),this._dirty=!0,this},transformQuat:function(e){return R.transformQuat(this.array,this.array,e.array),this._dirty=!0,this},applyProjection:function(e){var t=this.array;if(e=e.array,e[15]===0){var r=-1/t[2];t[0]=e[0]*t[0]*r,t[1]=e[5]*t[1]*r,t[2]=(e[10]*t[2]+e[14])*r}else t[0]=e[0]*t[0]+e[12],t[1]=e[5]*t[1]+e[13],t[2]=e[10]*t[2]+e[14];return this._dirty=!0,this},eulerFromQuat:function(e,t){J.eulerFromQuat(this,e,t)},eulerFromMat3:function(e,t){J.eulerFromMat3(this,e,t)},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};var tn=Object.defineProperty;if(tn){var aa=J.prototype;tn(aa,"x",{get:function(){return this.array[0]},set:function(e){this.array[0]=e,this._dirty=!0}}),tn(aa,"y",{get:function(){return this.array[1]},set:function(e){this.array[1]=e,this._dirty=!0}}),tn(aa,"z",{get:function(){return this.array[2]},set:function(e){this.array[2]=e,this._dirty=!0}})}J.add=function(e,t,r){return R.add(e.array,t.array,r.array),e._dirty=!0,e};J.set=function(e,t,r,i){R.set(e.array,t,r,i),e._dirty=!0};J.copy=function(e,t){return R.copy(e.array,t.array),e._dirty=!0,e};J.cross=function(e,t,r){return R.cross(e.array,t.array,r.array),e._dirty=!0,e};J.dist=function(e,t){return R.distance(e.array,t.array)};J.distance=J.dist;J.div=function(e,t,r){return R.divide(e.array,t.array,r.array),e._dirty=!0,e};J.divide=J.div;J.dot=function(e,t){return R.dot(e.array,t.array)};J.len=function(e){return R.length(e.array)};J.lerp=function(e,t,r,i){return R.lerp(e.array,t.array,r.array,i),e._dirty=!0,e};J.min=function(e,t,r){return R.min(e.array,t.array,r.array),e._dirty=!0,e};J.max=function(e,t,r){return R.max(e.array,t.array,r.array),e._dirty=!0,e};J.mul=function(e,t,r){return R.multiply(e.array,t.array,r.array),e._dirty=!0,e};J.multiply=J.mul;J.negate=function(e,t){return R.negate(e.array,t.array),e._dirty=!0,e};J.normalize=function(e,t){return R.normalize(e.array,t.array),e._dirty=!0,e};J.random=function(e,t){return R.random(e.array,t),e._dirty=!0,e};J.scale=function(e,t,r){return R.scale(e.array,t.array,r),e._dirty=!0,e};J.scaleAndAdd=function(e,t,r,i){return R.scaleAndAdd(e.array,t.array,r.array,i),e._dirty=!0,e};J.sqrDist=function(e,t){return R.sqrDist(e.array,t.array)};J.squaredDistance=J.sqrDist;J.sqrLen=function(e){return R.sqrLen(e.array)};J.squaredLength=J.sqrLen;J.sub=function(e,t,r){return R.subtract(e.array,t.array,r.array),e._dirty=!0,e};J.subtract=J.sub;J.transformMat3=function(e,t,r){return R.transformMat3(e.array,t.array,r.array),e._dirty=!0,e};J.transformMat4=function(e,t,r){return R.transformMat4(e.array,t.array,r.array),e._dirty=!0,e};J.transformQuat=function(e,t,r){return R.transformQuat(e.array,t.array,r.array),e._dirty=!0,e};function Mt(e,t,r){return e<t?t:e>r?r:e}var Ce=Math.atan2,Pt=Math.asin,$r=Math.abs;J.eulerFromQuat=function(e,t,f){e._dirty=!0,t=t.array;var i=e.array,n=t[0],a=t[1],o=t[2],s=t[3],l=n*n,u=a*a,c=o*o,h=s*s,f=(f||"XYZ").toUpperCase();switch(f){case"XYZ":i[0]=Ce(2*(n*s-a*o),h-l-u+c),i[1]=Pt(Mt(2*(n*o+a*s),-1,1)),i[2]=Ce(2*(o*s-n*a),h+l-u-c);break;case"YXZ":i[0]=Pt(Mt(2*(n*s-a*o),-1,1)),i[1]=Ce(2*(n*o+a*s),h-l-u+c),i[2]=Ce(2*(n*a+o*s),h-l+u-c);break;case"ZXY":i[0]=Pt(Mt(2*(n*s+a*o),-1,1)),i[1]=Ce(2*(a*s-o*n),h-l-u+c),i[2]=Ce(2*(o*s-n*a),h-l+u-c);break;case"ZYX":i[0]=Ce(2*(n*s+o*a),h-l-u+c),i[1]=Pt(Mt(2*(a*s-n*o),-1,1)),i[2]=Ce(2*(n*a+o*s),h+l-u-c);break;case"YZX":i[0]=Ce(2*(n*s-o*a),h-l+u-c),i[1]=Ce(2*(a*s-n*o),h+l-u-c),i[2]=Pt(Mt(2*(n*a+o*s),-1,1));break;case"XZY":i[0]=Ce(2*(n*s+a*o),h-l+u-c),i[1]=Ce(2*(n*o+a*s),h+l-u-c),i[2]=Pt(Mt(2*(o*s-n*a),-1,1));break;default:console.warn("Unkown order: "+f)}return e};J.eulerFromMat3=function(e,t,v){var i=t.array,n=i[0],a=i[3],o=i[6],s=i[1],l=i[4],u=i[7],c=i[2],h=i[5],f=i[8],d=e.array,v=(v||"XYZ").toUpperCase();switch(v){case"XYZ":d[1]=Pt(Mt(o,-1,1)),$r(o)<.99999?(d[0]=Ce(-u,f),d[2]=Ce(-a,n)):(d[0]=Ce(h,l),d[2]=0);break;case"YXZ":d[0]=Pt(-Mt(u,-1,1)),$r(u)<.99999?(d[1]=Ce(o,f),d[2]=Ce(s,l)):(d[1]=Ce(-c,n),d[2]=0);break;case"ZXY":d[0]=Pt(Mt(h,-1,1)),$r(h)<.99999?(d[1]=Ce(-c,f),d[2]=Ce(-a,l)):(d[1]=0,d[2]=Ce(s,n));break;case"ZYX":d[1]=Pt(-Mt(c,-1,1)),$r(c)<.99999?(d[0]=Ce(h,f),d[2]=Ce(s,n)):(d[0]=0,d[2]=Ce(-a,l));break;case"YZX":d[2]=Pt(Mt(s,-1,1)),$r(s)<.99999?(d[0]=Ce(-u,l),d[1]=Ce(-c,n)):(d[0]=0,d[1]=Ce(o,f));break;case"XZY":d[2]=Pt(-Mt(a,-1,1)),$r(a)<.99999?(d[0]=Ce(h,l),d[1]=Ce(o,n)):(d[0]=Ce(-u,f),d[1]=0);break;default:console.warn("Unkown order: "+v)}return e._dirty=!0,e};Object.defineProperties(J,{POSITIVE_X:{get:function(){return new J(1,0,0)}},NEGATIVE_X:{get:function(){return new J(-1,0,0)}},POSITIVE_Y:{get:function(){return new J(0,1,0)}},NEGATIVE_Y:{get:function(){return new J(0,-1,0)}},POSITIVE_Z:{get:function(){return new J(0,0,1)}},NEGATIVE_Z:{get:function(){return new J(0,0,-1)}},UP:{get:function(){return new J(0,1,0)}},ZERO:{get:function(){return new J}}});const k=J;var oa=1e-5,_n=function(e,t){this.origin=e||new k,this.direction=t||new k};_n.prototype={constructor:_n,intersectPlane:function(e,t){var r=e.normal.array,i=e.distance,n=this.origin.array,a=this.direction.array,o=R.dot(r,a);if(o===0)return null;t||(t=new k);var s=(R.dot(r,n)-i)/o;return R.scaleAndAdd(t.array,n,a,-s),t._dirty=!0,t},mirrorAgainstPlane:function(e){var t=R.dot(e.normal.array,this.direction.array);R.scaleAndAdd(this.direction.array,this.direction.array,e.normal.array,-t*2),this.direction._dirty=!0},distanceToPoint:function(){var e=R.create();return function(t){R.sub(e,t,this.origin.array);var r=R.dot(e,this.direction.array);if(r<0)return R.distance(this.origin.array,t);var i=R.lenSquared(e);return Math.sqrt(i-r*r)}}(),intersectSphere:function(){var e=R.create();return function(t,r,i){var n=this.origin.array,a=this.direction.array;t=t.array,R.sub(e,t,n);var o=R.dot(e,a),s=R.squaredLength(e),l=s-o*o,u=r*r;if(!(l>u)){var c=Math.sqrt(u-l),h=o-c,f=o+c;return i||(i=new k),h<0?f<0?null:(R.scaleAndAdd(i.array,n,a,f),i):(R.scaleAndAdd(i.array,n,a,h),i)}}}(),intersectBoundingBox:function(e,t){var r=this.direction.array,i=this.origin.array,n=e.min.array,a=e.max.array,o=1/r[0],s=1/r[1],l=1/r[2],u,c,h,f,d,v;if(o>=0?(u=(n[0]-i[0])*o,c=(a[0]-i[0])*o):(c=(n[0]-i[0])*o,u=(a[0]-i[0])*o),s>=0?(h=(n[1]-i[1])*s,f=(a[1]-i[1])*s):(f=(n[1]-i[1])*s,h=(a[1]-i[1])*s),u>f||h>c||((h>u||u!==u)&&(u=h),(f<c||c!==c)&&(c=f),l>=0?(d=(n[2]-i[2])*l,v=(a[2]-i[2])*l):(v=(n[2]-i[2])*l,d=(a[2]-i[2])*l),u>v||d>c)||((d>u||u!==u)&&(u=d),(v<c||c!==c)&&(c=v),c<0))return null;var p=u>=0?u:c;return t||(t=new k),R.scaleAndAdd(t.array,i,r,p),t},intersectTriangle:function(){var e=R.create(),t=R.create(),r=R.create(),i=R.create();return function(n,a,o,s,l,u){var c=this.direction.array,h=this.origin.array;n=n.array,a=a.array,o=o.array,R.sub(e,a,n),R.sub(t,o,n),R.cross(i,t,c);var f=R.dot(e,i);if(s){if(f>-oa)return null}else if(f>-oa&&f<oa)return null;R.sub(r,h,n);var d=R.dot(i,r)/f;if(d<0||d>1)return null;R.cross(i,e,r);var v=R.dot(c,i)/f;if(v<0||v>1||d+v>1)return null;R.cross(i,e,t);var p=-R.dot(r,i)/f;return p<0?null:(l||(l=new k),u&&k.set(u,1-d-v,d,v),R.scaleAndAdd(l.array,h,c,p),l)}}(),applyTransform:function(e){k.add(this.direction,this.direction,this.origin),k.transformMat4(this.origin,this.origin,e),k.transformMat4(this.direction,this.direction,e),k.sub(this.direction,this.direction,this.origin),k.normalize(this.direction,this.direction)},copy:function(e){k.copy(this.origin,e.origin),k.copy(this.direction,e.direction)},clone:function(){var e=new _n;return e.copy(this),e}};const An=_n;var le={};le.create=function(){var e=new lt(4);return e[0]=0,e[1]=0,e[2]=0,e[3]=0,e};le.clone=function(e){var t=new lt(4);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t};le.fromValues=function(e,t,r,i){var n=new lt(4);return n[0]=e,n[1]=t,n[2]=r,n[3]=i,n};le.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e};le.set=function(e,t,r,i,n){return e[0]=t,e[1]=r,e[2]=i,e[3]=n,e};le.add=function(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e[2]=t[2]+r[2],e[3]=t[3]+r[3],e};le.subtract=function(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e[2]=t[2]-r[2],e[3]=t[3]-r[3],e};le.sub=le.subtract;le.multiply=function(e,t,r){return e[0]=t[0]*r[0],e[1]=t[1]*r[1],e[2]=t[2]*r[2],e[3]=t[3]*r[3],e};le.mul=le.multiply;le.divide=function(e,t,r){return e[0]=t[0]/r[0],e[1]=t[1]/r[1],e[2]=t[2]/r[2],e[3]=t[3]/r[3],e};le.div=le.divide;le.min=function(e,t,r){return e[0]=Math.min(t[0],r[0]),e[1]=Math.min(t[1],r[1]),e[2]=Math.min(t[2],r[2]),e[3]=Math.min(t[3],r[3]),e};le.max=function(e,t,r){return e[0]=Math.max(t[0],r[0]),e[1]=Math.max(t[1],r[1]),e[2]=Math.max(t[2],r[2]),e[3]=Math.max(t[3],r[3]),e};le.scale=function(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e[3]=t[3]*r,e};le.scaleAndAdd=function(e,t,r,i){return e[0]=t[0]+r[0]*i,e[1]=t[1]+r[1]*i,e[2]=t[2]+r[2]*i,e[3]=t[3]+r[3]*i,e};le.distance=function(e,t){var r=t[0]-e[0],i=t[1]-e[1],n=t[2]-e[2],a=t[3]-e[3];return Math.sqrt(r*r+i*i+n*n+a*a)};le.dist=le.distance;le.squaredDistance=function(e,t){var r=t[0]-e[0],i=t[1]-e[1],n=t[2]-e[2],a=t[3]-e[3];return r*r+i*i+n*n+a*a};le.sqrDist=le.squaredDistance;le.length=function(e){var t=e[0],r=e[1],i=e[2],n=e[3];return Math.sqrt(t*t+r*r+i*i+n*n)};le.len=le.length;le.squaredLength=function(e){var t=e[0],r=e[1],i=e[2],n=e[3];return t*t+r*r+i*i+n*n};le.sqrLen=le.squaredLength;le.negate=function(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=-t[3],e};le.inverse=function(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e[3]=1/t[3],e};le.normalize=function(e,t){var r=t[0],i=t[1],n=t[2],a=t[3],o=r*r+i*i+n*n+a*a;return o>0&&(o=1/Math.sqrt(o),e[0]=t[0]*o,e[1]=t[1]*o,e[2]=t[2]*o,e[3]=t[3]*o),e};le.dot=function(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]+e[3]*t[3]};le.lerp=function(e,t,r,i){var n=t[0],a=t[1],o=t[2],s=t[3];return e[0]=n+i*(r[0]-n),e[1]=a+i*(r[1]-a),e[2]=o+i*(r[2]-o),e[3]=s+i*(r[3]-s),e};le.random=function(e,t){return t=t||1,e[0]=ei(),e[1]=ei(),e[2]=ei(),e[3]=ei(),le.normalize(e,e),le.scale(e,e,t),e};le.transformMat4=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[3];return e[0]=r[0]*i+r[4]*n+r[8]*a+r[12]*o,e[1]=r[1]*i+r[5]*n+r[9]*a+r[13]*o,e[2]=r[2]*i+r[6]*n+r[10]*a+r[14]*o,e[3]=r[3]*i+r[7]*n+r[11]*a+r[15]*o,e};le.transformQuat=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=r[0],s=r[1],l=r[2],u=r[3],c=u*i+s*a-l*n,h=u*n+l*i-o*a,f=u*a+o*n-s*i,d=-o*i-s*n-l*a;return e[0]=c*u+d*-o+h*-l-f*-s,e[1]=h*u+d*-s+f*-o-c*-l,e[2]=f*u+d*-l+c*-s-h*-o,e};le.forEach=function(){var e=le.create();return function(t,r,i,n,a,o){var s,l;for(r||(r=4),i||(i=0),n?l=Math.min(n*r+i,t.length):l=t.length,s=i;s<l;s+=r)e[0]=t[s],e[1]=t[s+1],e[2]=t[s+2],e[3]=t[s+3],a(e,e,o),t[s]=e[0],t[s+1]=e[1],t[s+2]=e[2],t[s+3]=e[3];return t}}();const Z=le;var Je={};Je.create=function(){var e=new lt(9);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1,e};Je.fromMat4=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[4],e[4]=t[5],e[5]=t[6],e[6]=t[8],e[7]=t[9],e[8]=t[10],e};Je.clone=function(e){var t=new lt(9);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t};Je.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e};Je.identity=function(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1,e};Je.transpose=function(e,t){if(e===t){var r=t[1],i=t[2],n=t[5];e[1]=t[3],e[2]=t[6],e[3]=r,e[5]=t[7],e[6]=i,e[7]=n}else e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8];return e};Je.invert=function(e,t){var r=t[0],i=t[1],n=t[2],a=t[3],o=t[4],s=t[5],l=t[6],u=t[7],c=t[8],h=c*o-s*u,f=-c*a+s*l,d=u*a-o*l,v=r*h+i*f+n*d;return v?(v=1/v,e[0]=h*v,e[1]=(-c*i+n*u)*v,e[2]=(s*i-n*o)*v,e[3]=f*v,e[4]=(c*r-n*l)*v,e[5]=(-s*r+n*a)*v,e[6]=d*v,e[7]=(-u*r+i*l)*v,e[8]=(o*r-i*a)*v,e):null};Je.adjoint=function(e,t){var r=t[0],i=t[1],n=t[2],a=t[3],o=t[4],s=t[5],l=t[6],u=t[7],c=t[8];return e[0]=o*c-s*u,e[1]=n*u-i*c,e[2]=i*s-n*o,e[3]=s*l-a*c,e[4]=r*c-n*l,e[5]=n*a-r*s,e[6]=a*u-o*l,e[7]=i*l-r*u,e[8]=r*o-i*a,e};Je.determinant=function(e){var t=e[0],r=e[1],i=e[2],n=e[3],a=e[4],o=e[5],s=e[6],l=e[7],u=e[8];return t*(u*a-o*l)+r*(-u*n+o*s)+i*(l*n-a*s)};Je.multiply=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[3],s=t[4],l=t[5],u=t[6],c=t[7],h=t[8],f=r[0],d=r[1],v=r[2],p=r[3],m=r[4],_=r[5],x=r[6],y=r[7],g=r[8];return e[0]=f*i+d*o+v*u,e[1]=f*n+d*s+v*c,e[2]=f*a+d*l+v*h,e[3]=p*i+m*o+_*u,e[4]=p*n+m*s+_*c,e[5]=p*a+m*l+_*h,e[6]=x*i+y*o+g*u,e[7]=x*n+y*s+g*c,e[8]=x*a+y*l+g*h,e};Je.mul=Je.multiply;Je.translate=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[3],s=t[4],l=t[5],u=t[6],c=t[7],h=t[8],f=r[0],d=r[1];return e[0]=i,e[1]=n,e[2]=a,e[3]=o,e[4]=s,e[5]=l,e[6]=f*i+d*o+u,e[7]=f*n+d*s+c,e[8]=f*a+d*l+h,e};Je.rotate=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[3],s=t[4],l=t[5],u=t[6],c=t[7],h=t[8],f=Math.sin(r),d=Math.cos(r);return e[0]=d*i+f*o,e[1]=d*n+f*s,e[2]=d*a+f*l,e[3]=d*o-f*i,e[4]=d*s-f*n,e[5]=d*l-f*a,e[6]=u,e[7]=c,e[8]=h,e};Je.scale=function(e,t,r){var i=r[0],n=r[1];return e[0]=i*t[0],e[1]=i*t[1],e[2]=i*t[2],e[3]=n*t[3],e[4]=n*t[4],e[5]=n*t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e};Je.fromMat2d=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=0,e[3]=t[2],e[4]=t[3],e[5]=0,e[6]=t[4],e[7]=t[5],e[8]=1,e};Je.fromQuat=function(e,t){var r=t[0],i=t[1],n=t[2],a=t[3],o=r+r,s=i+i,l=n+n,u=r*o,c=i*o,h=i*s,f=n*o,d=n*s,v=n*l,p=a*o,m=a*s,_=a*l;return e[0]=1-h-v,e[3]=c-_,e[6]=f+m,e[1]=c+_,e[4]=1-u-v,e[7]=d-p,e[2]=f-m,e[5]=d+p,e[8]=1-u-h,e};Je.normalFromMat4=function(e,t){var r=t[0],i=t[1],n=t[2],a=t[3],o=t[4],s=t[5],l=t[6],u=t[7],c=t[8],h=t[9],f=t[10],d=t[11],v=t[12],p=t[13],m=t[14],_=t[15],x=r*s-i*o,y=r*l-n*o,g=r*u-a*o,w=i*l-n*s,T=i*u-a*s,b=n*u-a*l,S=c*p-h*v,C=c*m-f*v,L=c*_-d*v,A=h*m-f*p,M=h*_-d*p,P=f*_-d*m,D=x*P-y*M+g*A+w*L-T*C+b*S;return D?(D=1/D,e[0]=(s*P-l*M+u*A)*D,e[1]=(l*L-o*P-u*C)*D,e[2]=(o*M-s*L+u*S)*D,e[3]=(n*M-i*P-a*A)*D,e[4]=(r*P-n*L+a*C)*D,e[5]=(i*L-r*M-a*S)*D,e[6]=(p*b-m*T+_*w)*D,e[7]=(m*g-v*b-_*y)*D,e[8]=(v*T-p*g+_*x)*D,e):null};Je.frob=function(e){return Math.sqrt(Math.pow(e[0],2)+Math.pow(e[1],2)+Math.pow(e[2],2)+Math.pow(e[3],2)+Math.pow(e[4],2)+Math.pow(e[5],2)+Math.pow(e[6],2)+Math.pow(e[7],2)+Math.pow(e[8],2))};const me=Je;var xe={};xe.create=function(){var e=new lt(4);return e[0]=0,e[1]=0,e[2]=0,e[3]=1,e};xe.rotationTo=function(){var e=R.create(),t=R.fromValues(1,0,0),r=R.fromValues(0,1,0);return function(i,n,a){var o=R.dot(n,a);return o<-.999999?(R.cross(e,t,n),R.length(e)<1e-6&&R.cross(e,r,n),R.normalize(e,e),xe.setAxisAngle(i,e,Math.PI),i):o>.999999?(i[0]=0,i[1]=0,i[2]=0,i[3]=1,i):(R.cross(e,n,a),i[0]=e[0],i[1]=e[1],i[2]=e[2],i[3]=1+o,xe.normalize(i,i))}}();xe.setAxes=function(){var e=me.create();return function(t,r,i,n){return e[0]=i[0],e[3]=i[1],e[6]=i[2],e[1]=n[0],e[4]=n[1],e[7]=n[2],e[2]=-r[0],e[5]=-r[1],e[8]=-r[2],xe.normalize(t,xe.fromMat3(t,e))}}();xe.clone=Z.clone;xe.fromValues=Z.fromValues;xe.copy=Z.copy;xe.set=Z.set;xe.identity=function(e){return e[0]=0,e[1]=0,e[2]=0,e[3]=1,e};xe.setAxisAngle=function(e,t,r){r=r*.5;var i=Math.sin(r);return e[0]=i*t[0],e[1]=i*t[1],e[2]=i*t[2],e[3]=Math.cos(r),e};xe.add=Z.add;xe.multiply=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[3],s=r[0],l=r[1],u=r[2],c=r[3];return e[0]=i*c+o*s+n*u-a*l,e[1]=n*c+o*l+a*s-i*u,e[2]=a*c+o*u+i*l-n*s,e[3]=o*c-i*s-n*l-a*u,e};xe.mul=xe.multiply;xe.scale=Z.scale;xe.rotateX=function(e,t,r){r*=.5;var i=t[0],n=t[1],a=t[2],o=t[3],s=Math.sin(r),l=Math.cos(r);return e[0]=i*l+o*s,e[1]=n*l+a*s,e[2]=a*l-n*s,e[3]=o*l-i*s,e};xe.rotateY=function(e,t,r){r*=.5;var i=t[0],n=t[1],a=t[2],o=t[3],s=Math.sin(r),l=Math.cos(r);return e[0]=i*l-a*s,e[1]=n*l+o*s,e[2]=a*l+i*s,e[3]=o*l-n*s,e};xe.rotateZ=function(e,t,r){r*=.5;var i=t[0],n=t[1],a=t[2],o=t[3],s=Math.sin(r),l=Math.cos(r);return e[0]=i*l+n*s,e[1]=n*l-i*s,e[2]=a*l+o*s,e[3]=o*l-a*s,e};xe.calculateW=function(e,t){var r=t[0],i=t[1],n=t[2];return e[0]=r,e[1]=i,e[2]=n,e[3]=Math.sqrt(Math.abs(1-r*r-i*i-n*n)),e};xe.dot=Z.dot;xe.lerp=Z.lerp;xe.slerp=function(e,t,r,i){var n=t[0],a=t[1],o=t[2],s=t[3],l=r[0],u=r[1],c=r[2],h=r[3],f,d,v,p,m;return d=n*l+a*u+o*c+s*h,d<0&&(d=-d,l=-l,u=-u,c=-c,h=-h),1-d>1e-6?(f=Math.acos(d),v=Math.sin(f),p=Math.sin((1-i)*f)/v,m=Math.sin(i*f)/v):(p=1-i,m=i),e[0]=p*n+m*l,e[1]=p*a+m*u,e[2]=p*o+m*c,e[3]=p*s+m*h,e};xe.invert=function(e,t){var r=t[0],i=t[1],n=t[2],a=t[3],o=r*r+i*i+n*n+a*a,s=o?1/o:0;return e[0]=-r*s,e[1]=-i*s,e[2]=-n*s,e[3]=a*s,e};xe.conjugate=function(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=t[3],e};xe.length=Z.length;xe.len=xe.length;xe.squaredLength=Z.squaredLength;xe.sqrLen=xe.squaredLength;xe.normalize=Z.normalize;xe.fromMat3=function(e,t){var r=t[0]+t[4]+t[8],i;if(r>0)i=Math.sqrt(r+1),e[3]=.5*i,i=.5/i,e[0]=(t[5]-t[7])*i,e[1]=(t[6]-t[2])*i,e[2]=(t[1]-t[3])*i;else{var n=0;t[4]>t[0]&&(n=1),t[8]>t[n*3+n]&&(n=2);var a=(n+1)%3,o=(n+2)%3;i=Math.sqrt(t[n*3+n]-t[a*3+a]-t[o*3+o]+1),e[n]=.5*i,i=.5/i,e[3]=(t[a*3+o]-t[o*3+a])*i,e[a]=(t[a*3+n]+t[n*3+a])*i,e[o]=(t[o*3+n]+t[n*3+o])*i}return e};const re=xe;var Ne=function(){this._axisX=new k,this._axisY=new k,this._axisZ=new k,this.array=H.create(),this._dirty=!0};Ne.prototype={constructor:Ne,setArray:function(e){for(var t=0;t<this.array.length;t++)this.array[t]=e[t];return this._dirty=!0,this},adjoint:function(){return H.adjoint(this.array,this.array),this._dirty=!0,this},clone:function(){return new Ne().copy(this)},copy:function(e){return H.copy(this.array,e.array),this._dirty=!0,this},determinant:function(){return H.determinant(this.array)},fromQuat:function(e){return H.fromQuat(this.array,e.array),this._dirty=!0,this},fromRotationTranslation:function(e,t){return H.fromRotationTranslation(this.array,e.array,t.array),this._dirty=!0,this},fromMat2d:function(e){return Ne.fromMat2d(this,e),this},frustum:function(e,t,r,i,n,a){return H.frustum(this.array,e,t,r,i,n,a),this._dirty=!0,this},identity:function(){return H.identity(this.array),this._dirty=!0,this},invert:function(){return H.invert(this.array,this.array),this._dirty=!0,this},lookAt:function(e,t,r){return H.lookAt(this.array,e.array,t.array,r.array),this._dirty=!0,this},mul:function(e){return H.mul(this.array,this.array,e.array),this._dirty=!0,this},mulLeft:function(e){return H.mul(this.array,e.array,this.array),this._dirty=!0,this},multiply:function(e){return H.multiply(this.array,this.array,e.array),this._dirty=!0,this},multiplyLeft:function(e){return H.multiply(this.array,e.array,this.array),this._dirty=!0,this},ortho:function(e,t,r,i,n,a){return H.ortho(this.array,e,t,r,i,n,a),this._dirty=!0,this},perspective:function(e,t,r,i){return H.perspective(this.array,e,t,r,i),this._dirty=!0,this},rotate:function(e,t){return H.rotate(this.array,this.array,e,t.array),this._dirty=!0,this},rotateX:function(e){return H.rotateX(this.array,this.array,e),this._dirty=!0,this},rotateY:function(e){return H.rotateY(this.array,this.array,e),this._dirty=!0,this},rotateZ:function(e){return H.rotateZ(this.array,this.array,e),this._dirty=!0,this},scale:function(e){return H.scale(this.array,this.array,e.array),this._dirty=!0,this},translate:function(e){return H.translate(this.array,this.array,e.array),this._dirty=!0,this},transpose:function(){return H.transpose(this.array,this.array),this._dirty=!0,this},decomposeMatrix:function(){var e=R.create(),t=R.create(),r=R.create(),i=me.create();return function(n,a,o){var s=this.array;R.set(e,s[0],s[1],s[2]),R.set(t,s[4],s[5],s[6]),R.set(r,s[8],s[9],s[10]);var l=R.length(e),u=R.length(t),c=R.length(r),h=this.determinant();h<0&&(l=-l),n&&n.set(l,u,c),o.set(s[12],s[13],s[14]),me.fromMat4(i,s),i[0]/=l,i[1]/=l,i[2]/=l,i[3]/=u,i[4]/=u,i[5]/=u,i[6]/=c,i[7]/=c,i[8]/=c,re.fromMat3(a.array,i),re.normalize(a.array,a.array),a._dirty=!0,o._dirty=!0}}(),toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};var rn=Object.defineProperty;if(rn){var sa=Ne.prototype;rn(sa,"z",{get:function(){var e=this.array;return this._axisZ.set(e[8],e[9],e[10]),this._axisZ},set:function(e){var t=this.array;e=e.array,t[8]=e[0],t[9]=e[1],t[10]=e[2],this._dirty=!0}}),rn(sa,"y",{get:function(){var e=this.array;return this._axisY.set(e[4],e[5],e[6]),this._axisY},set:function(e){var t=this.array;e=e.array,t[4]=e[0],t[5]=e[1],t[6]=e[2],this._dirty=!0}}),rn(sa,"x",{get:function(){var e=this.array;return this._axisX.set(e[0],e[1],e[2]),this._axisX},set:function(e){var t=this.array;e=e.array,t[0]=e[0],t[1]=e[1],t[2]=e[2],this._dirty=!0}})}Ne.adjoint=function(e,t){return H.adjoint(e.array,t.array),e._dirty=!0,e};Ne.copy=function(e,t){return H.copy(e.array,t.array),e._dirty=!0,e};Ne.determinant=function(e){return H.determinant(e.array)};Ne.identity=function(e){return H.identity(e.array),e._dirty=!0,e};Ne.ortho=function(e,t,r,i,n,a,o){return H.ortho(e.array,t,r,i,n,a,o),e._dirty=!0,e};Ne.perspective=function(e,t,r,i,n){return H.perspective(e.array,t,r,i,n),e._dirty=!0,e};Ne.lookAt=function(e,t,r,i){return H.lookAt(e.array,t.array,r.array,i.array),e._dirty=!0,e};Ne.invert=function(e,t){return H.invert(e.array,t.array),e._dirty=!0,e};Ne.mul=function(e,t,r){return H.mul(e.array,t.array,r.array),e._dirty=!0,e};Ne.multiply=Ne.mul;Ne.fromQuat=function(e,t){return H.fromQuat(e.array,t.array),e._dirty=!0,e};Ne.fromRotationTranslation=function(e,t,r){return H.fromRotationTranslation(e.array,t.array,r.array),e._dirty=!0,e};Ne.fromMat2d=function(i,r){i._dirty=!0;var r=r.array,i=i.array;return i[0]=r[0],i[4]=r[2],i[12]=r[4],i[1]=r[1],i[5]=r[3],i[13]=r[5],i};Ne.rotate=function(e,t,r,i){return H.rotate(e.array,t.array,r,i.array),e._dirty=!0,e};Ne.rotateX=function(e,t,r){return H.rotateX(e.array,t.array,r),e._dirty=!0,e};Ne.rotateY=function(e,t,r){return H.rotateY(e.array,t.array,r),e._dirty=!0,e};Ne.rotateZ=function(e,t,r){return H.rotateZ(e.array,t.array,r),e._dirty=!0,e};Ne.scale=function(e,t,r){return H.scale(e.array,t.array,r.array),e._dirty=!0,e};Ne.transpose=function(e,t){return H.transpose(e.array,t.array),e._dirty=!0,e};Ne.translate=function(e,t,r){return H.translate(e.array,t.array,r.array),e._dirty=!0,e};const q=Ne;var be=function(e,t,r,i){e=e||0,t=t||0,r=r||0,i=i===void 0?1:i,this.array=re.fromValues(e,t,r,i),this._dirty=!0};be.prototype={constructor:be,add:function(e){return re.add(this.array,this.array,e.array),this._dirty=!0,this},calculateW:function(){return re.calculateW(this.array,this.array),this._dirty=!0,this},set:function(e,t,r,i){return this.array[0]=e,this.array[1]=t,this.array[2]=r,this.array[3]=i,this._dirty=!0,this},setArray:function(e){return this.array[0]=e[0],this.array[1]=e[1],this.array[2]=e[2],this.array[3]=e[3],this._dirty=!0,this},clone:function(){return new be(this.x,this.y,this.z,this.w)},conjugate:function(){return re.conjugate(this.array,this.array),this._dirty=!0,this},copy:function(e){return re.copy(this.array,e.array),this._dirty=!0,this},dot:function(e){return re.dot(this.array,e.array)},fromMat3:function(e){return re.fromMat3(this.array,e.array),this._dirty=!0,this},fromMat4:function(){var e=me.create();return function(t){return me.fromMat4(e,t.array),me.transpose(e,e),re.fromMat3(this.array,e),this._dirty=!0,this}}(),identity:function(){return re.identity(this.array),this._dirty=!0,this},invert:function(){return re.invert(this.array,this.array),this._dirty=!0,this},len:function(){return re.len(this.array)},length:function(){return re.length(this.array)},lerp:function(e,t,r){return re.lerp(this.array,e.array,t.array,r),this._dirty=!0,this},mul:function(e){return re.mul(this.array,this.array,e.array),this._dirty=!0,this},mulLeft:function(e){return re.multiply(this.array,e.array,this.array),this._dirty=!0,this},multiply:function(e){return re.multiply(this.array,this.array,e.array),this._dirty=!0,this},multiplyLeft:function(e){return re.multiply(this.array,e.array,this.array),this._dirty=!0,this},normalize:function(){return re.normalize(this.array,this.array),this._dirty=!0,this},rotateX:function(e){return re.rotateX(this.array,this.array,e),this._dirty=!0,this},rotateY:function(e){return re.rotateY(this.array,this.array,e),this._dirty=!0,this},rotateZ:function(e){return re.rotateZ(this.array,this.array,e),this._dirty=!0,this},rotationTo:function(e,t){return re.rotationTo(this.array,e.array,t.array),this._dirty=!0,this},setAxes:function(e,t,r){return re.setAxes(this.array,e.array,t.array,r.array),this._dirty=!0,this},setAxisAngle:function(e,t){return re.setAxisAngle(this.array,e.array,t),this._dirty=!0,this},slerp:function(e,t,r){return re.slerp(this.array,e.array,t.array,r),this._dirty=!0,this},sqrLen:function(){return re.sqrLen(this.array)},squaredLength:function(){return re.squaredLength(this.array)},fromEuler:function(e,t){return be.fromEuler(this,e,t)},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};var xi=Object.defineProperty;if(xi){var nn=be.prototype;xi(nn,"x",{get:function(){return this.array[0]},set:function(e){this.array[0]=e,this._dirty=!0}}),xi(nn,"y",{get:function(){return this.array[1]},set:function(e){this.array[1]=e,this._dirty=!0}}),xi(nn,"z",{get:function(){return this.array[2]},set:function(e){this.array[2]=e,this._dirty=!0}}),xi(nn,"w",{get:function(){return this.array[3]},set:function(e){this.array[3]=e,this._dirty=!0}})}be.add=function(e,t,r){return re.add(e.array,t.array,r.array),e._dirty=!0,e};be.set=function(e,t,r,i,n){re.set(e.array,t,r,i,n),e._dirty=!0};be.copy=function(e,t){return re.copy(e.array,t.array),e._dirty=!0,e};be.calculateW=function(e,t){return re.calculateW(e.array,t.array),e._dirty=!0,e};be.conjugate=function(e,t){return re.conjugate(e.array,t.array),e._dirty=!0,e};be.identity=function(e){return re.identity(e.array),e._dirty=!0,e};be.invert=function(e,t){return re.invert(e.array,t.array),e._dirty=!0,e};be.dot=function(e,t){return re.dot(e.array,t.array)};be.len=function(e){return re.length(e.array)};be.lerp=function(e,t,r,i){return re.lerp(e.array,t.array,r.array,i),e._dirty=!0,e};be.slerp=function(e,t,r,i){return re.slerp(e.array,t.array,r.array,i),e._dirty=!0,e};be.mul=function(e,t,r){return re.multiply(e.array,t.array,r.array),e._dirty=!0,e};be.multiply=be.mul;be.rotateX=function(e,t,r){return re.rotateX(e.array,t.array,r),e._dirty=!0,e};be.rotateY=function(e,t,r){return re.rotateY(e.array,t.array,r),e._dirty=!0,e};be.rotateZ=function(e,t,r){return re.rotateZ(e.array,t.array,r),e._dirty=!0,e};be.setAxisAngle=function(e,t,r){return re.setAxisAngle(e.array,t.array,r),e._dirty=!0,e};be.normalize=function(e,t){return re.normalize(e.array,t.array),e._dirty=!0,e};be.sqrLen=function(e){return re.sqrLen(e.array)};be.squaredLength=be.sqrLen;be.fromMat3=function(e,t){return re.fromMat3(e.array,t.array),e._dirty=!0,e};be.setAxes=function(e,t,r,i){return re.setAxes(e.array,t.array,r.array,i.array),e._dirty=!0,e};be.rotationTo=function(e,t,r){return re.rotationTo(e.array,t.array,r.array),e._dirty=!0,e};be.fromEuler=function(e,t,c){e._dirty=!0,t=t.array;var i=e.array,n=Math.cos(t[0]/2),a=Math.cos(t[1]/2),o=Math.cos(t[2]/2),s=Math.sin(t[0]/2),l=Math.sin(t[1]/2),u=Math.sin(t[2]/2),c=(c||"XYZ").toUpperCase();switch(c){case"XYZ":i[0]=s*a*o+n*l*u,i[1]=n*l*o-s*a*u,i[2]=n*a*u+s*l*o,i[3]=n*a*o-s*l*u;break;case"YXZ":i[0]=s*a*o+n*l*u,i[1]=n*l*o-s*a*u,i[2]=n*a*u-s*l*o,i[3]=n*a*o+s*l*u;break;case"ZXY":i[0]=s*a*o-n*l*u,i[1]=n*l*o+s*a*u,i[2]=n*a*u+s*l*o,i[3]=n*a*o-s*l*u;break;case"ZYX":i[0]=s*a*o-n*l*u,i[1]=n*l*o+s*a*u,i[2]=n*a*u-s*l*o,i[3]=n*a*o+s*l*u;break;case"YZX":i[0]=s*a*o+n*l*u,i[1]=n*l*o+s*a*u,i[2]=n*a*u-s*l*o,i[3]=n*a*o-s*l*u;break;case"XZY":i[0]=s*a*o-n*l*u,i[1]=n*l*o-s*a*u,i[2]=n*a*u+s*l*o,i[3]=n*a*o+s*l*u;break}};const il=be;var lr=R.set,an=R.copy,gn=function(e,t){this.min=e||new k(1/0,1/0,1/0),this.max=t||new k(-1/0,-1/0,-1/0),this.vertices=null};gn.prototype={constructor:gn,updateFromVertices:function(e){if(e.length>0){var t=this.min,r=this.max,i=t.array,n=r.array;an(i,e[0]),an(n,e[0]);for(var a=1;a<e.length;a++){var o=e[a];o[0]<i[0]&&(i[0]=o[0]),o[1]<i[1]&&(i[1]=o[1]),o[2]<i[2]&&(i[2]=o[2]),o[0]>n[0]&&(n[0]=o[0]),o[1]>n[1]&&(n[1]=o[1]),o[2]>n[2]&&(n[2]=o[2])}t._dirty=!0,r._dirty=!0}},union:function(e){var t=this.min,r=this.max;return R.min(t.array,t.array,e.min.array),R.max(r.array,r.array,e.max.array),t._dirty=!0,r._dirty=!0,this},intersection:function(e){var t=this.min,r=this.max;return R.max(t.array,t.array,e.min.array),R.min(r.array,r.array,e.max.array),t._dirty=!0,r._dirty=!0,this},intersectBoundingBox:function(e){var t=this.min.array,r=this.max.array,i=e.min.array,n=e.max.array;return!(t[0]>n[0]||t[1]>n[1]||t[2]>n[2]||r[0]<i[0]||r[1]<i[1]||r[2]<i[2])},containBoundingBox:function(e){var t=this.min.array,r=this.max.array,i=e.min.array,n=e.max.array;return t[0]<=i[0]&&t[1]<=i[1]&&t[2]<=i[2]&&r[0]>=n[0]&&r[1]>=n[1]&&r[2]>=n[2]},containPoint:function(e){var t=this.min.array,r=this.max.array,i=e.array;return t[0]<=i[0]&&t[1]<=i[1]&&t[2]<=i[2]&&r[0]>=i[0]&&r[1]>=i[1]&&r[2]>=i[2]},isFinite:function(){var e=this.min.array,t=this.max.array;return isFinite(e[0])&&isFinite(e[1])&&isFinite(e[2])&&isFinite(t[0])&&isFinite(t[1])&&isFinite(t[2])},applyTransform:function(e){this.transformFrom(this,e)},transformFrom:function(){var e=R.create(),t=R.create(),r=R.create(),i=R.create(),n=R.create(),a=R.create();return function(o,s){var l=o.min.array,u=o.max.array,c=s.array;return e[0]=c[0]*l[0],e[1]=c[1]*l[0],e[2]=c[2]*l[0],t[0]=c[0]*u[0],t[1]=c[1]*u[0],t[2]=c[2]*u[0],r[0]=c[4]*l[1],r[1]=c[5]*l[1],r[2]=c[6]*l[1],i[0]=c[4]*u[1],i[1]=c[5]*u[1],i[2]=c[6]*u[1],n[0]=c[8]*l[2],n[1]=c[9]*l[2],n[2]=c[10]*l[2],a[0]=c[8]*u[2],a[1]=c[9]*u[2],a[2]=c[10]*u[2],l=this.min.array,u=this.max.array,l[0]=Math.min(e[0],t[0])+Math.min(r[0],i[0])+Math.min(n[0],a[0])+c[12],l[1]=Math.min(e[1],t[1])+Math.min(r[1],i[1])+Math.min(n[1],a[1])+c[13],l[2]=Math.min(e[2],t[2])+Math.min(r[2],i[2])+Math.min(n[2],a[2])+c[14],u[0]=Math.max(e[0],t[0])+Math.max(r[0],i[0])+Math.max(n[0],a[0])+c[12],u[1]=Math.max(e[1],t[1])+Math.max(r[1],i[1])+Math.max(n[1],a[1])+c[13],u[2]=Math.max(e[2],t[2])+Math.max(r[2],i[2])+Math.max(n[2],a[2])+c[14],this.min._dirty=!0,this.max._dirty=!0,this}}(),applyProjection:function(e){var t=this.min.array,r=this.max.array,i=e.array,n=t[0],a=t[1],o=t[2],s=r[0],l=r[1],u=t[2],c=r[0],h=r[1],f=r[2];if(i[15]===1)t[0]=i[0]*n+i[12],t[1]=i[5]*a+i[13],r[2]=i[10]*o+i[14],r[0]=i[0]*c+i[12],r[1]=i[5]*h+i[13],t[2]=i[10]*f+i[14];else{var d=-1/o;t[0]=i[0]*n*d,t[1]=i[5]*a*d,r[2]=(i[10]*o+i[14])*d,d=-1/u,r[0]=i[0]*s*d,r[1]=i[5]*l*d,d=-1/f,t[2]=(i[10]*f+i[14])*d}return this.min._dirty=!0,this.max._dirty=!0,this},updateVertices:function(){var e=this.vertices;if(!e){e=[];for(var t=0;t<8;t++)e[t]=R.fromValues(0,0,0);this.vertices=e}var r=this.min.array,i=this.max.array;return lr(e[0],r[0],r[1],r[2]),lr(e[1],r[0],i[1],r[2]),lr(e[2],i[0],r[1],r[2]),lr(e[3],i[0],i[1],r[2]),lr(e[4],r[0],r[1],i[2]),lr(e[5],r[0],i[1],i[2]),lr(e[6],i[0],r[1],i[2]),lr(e[7],i[0],i[1],i[2]),this},copy:function(e){var t=this.min,r=this.max;return an(t.array,e.min.array),an(r.array,e.max.array),t._dirty=!0,r._dirty=!0,this},clone:function(){var e=new gn;return e.copy(this),e}};const ht=gn;var Fc=0,Bc=vt.extend({name:"",position:null,rotation:null,scale:null,worldTransform:null,localTransform:null,autoUpdateLocalTransform:!0,_parent:null,_scene:null,_needsUpdateWorldTransform:!0,_inIterating:!1,__depth:0},function(){this.name||(this.name=(this.type||"NODE")+"_"+Fc++),this.position||(this.position=new k),this.rotation||(this.rotation=new il),this.scale||(this.scale=new k(1,1,1)),this.worldTransform=new q,this.localTransform=new q,this._children=[]},{target:null,invisible:!1,isSkinnedMesh:function(){return!1},isRenderable:function(){return!1},setName:function(e){var t=this._scene;if(t){var r=t._nodeRepository;delete r[this.name],r[e]=this}this.name=e},add:function(e){var t=e._parent;if(t!==this){t&&t.remove(e),e._parent=this,this._children.push(e);var r=this._scene;r&&r!==e.scene&&e.traverse(this._addSelfToScene,this),e._needsUpdateWorldTransform=!0}},remove:function(e){var t=this._children,r=t.indexOf(e);r<0||(t.splice(r,1),e._parent=null,this._scene&&e.traverse(this._removeSelfFromScene,this))},removeAll:function(){for(var e=this._children,t=0;t<e.length;t++)e[t]._parent=null,this._scene&&e[t].traverse(this._removeSelfFromScene,this);this._children=[]},getScene:function(){return this._scene},getParent:function(){return this._parent},_removeSelfFromScene:function(e){e._scene.removeFromScene(e),e._scene=null},_addSelfToScene:function(e){this._scene.addToScene(e),e._scene=this._scene},isAncestor:function(e){for(var t=e._parent;t;){if(t===this)return!0;t=t._parent}return!1},children:function(){return this._children.slice()},childAt:function(e){return this._children[e]},getChildByName:function(e){for(var t=this._children,r=0;r<t.length;r++)if(t[r].name===e)return t[r]},getDescendantByName:function(e){for(var t=this._children,r=0;r<t.length;r++){var i=t[r];if(i.name===e)return i;var n=i.getDescendantByName(e);if(n)return n}},queryNode:function(e){if(e){for(var t=e.split("/"),r=this,i=0;i<t.length;i++){var n=t[i];if(n){for(var a=!1,o=r._children,s=0;s<o.length;s++){var l=o[s];if(l.name===n){r=l,a=!0;break}}if(!a)return}}return r}},getPath:function(e){if(!this._parent)return"/";for(var t=this._parent,r=this.name;t._parent&&(r=t.name+"/"+r,t._parent!=e);)t=t._parent;return!t._parent&&e?null:r},traverse:function(e,t){e.call(t,this);for(var r=this._children,i=0,n=r.length;i<n;i++)r[i].traverse(e,t)},eachChild:function(e,t){for(var r=this._children,i=0,n=r.length;i<n;i++){var a=r[i];e.call(t,a,i)}},setLocalTransform:function(e){H.copy(this.localTransform.array,e.array),this.decomposeLocalTransform()},decomposeLocalTransform:function(e){var t=e?null:this.scale;this.localTransform.decomposeMatrix(t,this.rotation,this.position)},setWorldTransform:function(e){H.copy(this.worldTransform.array,e.array),this.decomposeWorldTransform()},decomposeWorldTransform:function(){var e=H.create();return function(t){var r=this.localTransform,i=this.worldTransform;this._parent?(H.invert(e,this._parent.worldTransform.array),H.multiply(r.array,e,i.array)):H.copy(r.array,i.array);var n=t?null:this.scale;r.decomposeMatrix(n,this.rotation,this.position)}}(),transformNeedsUpdate:function(){return this.position._dirty||this.rotation._dirty||this.scale._dirty},updateLocalTransform:function(){var e=this.position,t=this.rotation,r=this.scale;if(this.transformNeedsUpdate()){var i=this.localTransform.array;H.fromRotationTranslation(i,t.array,e.array),H.scale(i,i,r.array),t._dirty=!1,r._dirty=!1,e._dirty=!1,this._needsUpdateWorldTransform=!0}},_updateWorldTransformTopDown:function(){var e=this.localTransform.array,t=this.worldTransform.array;this._parent?H.multiplyAffine(t,this._parent.worldTransform.array,e):H.copy(t,e)},updateWorldTransform:function(){for(var e=this;e&&e.getParent()&&e.getParent().transformNeedsUpdate();)e=e.getParent();e.update()},update:function(e){this.autoUpdateLocalTransform?this.updateLocalTransform():e=!0,(e||this._needsUpdateWorldTransform)&&(this._updateWorldTransformTopDown(),e=!0,this._needsUpdateWorldTransform=!1);for(var t=this._children,r=0,i=t.length;r<i;r++)t[r].update(e)},getBoundingBox:function(){function e(n){return!n.invisible&&n.geometry}var t=new ht,r=new q,i=new q;return function(n,a){return a=a||new ht,this._parent?q.invert(i,this._parent.worldTransform):q.identity(i),this.traverse(function(o){o.geometry&&o.geometry.boundingBox&&(t.copy(o.geometry.boundingBox),q.multiply(r,i,o.worldTransform),t.applyTransform(r),a.union(t))},this,e),a}}(),getWorldPosition:function(e){this.transformNeedsUpdate()&&this.updateWorldTransform();var t=this.worldTransform.array;if(e){var r=e.array;return r[0]=t[12],r[1]=t[13],r[2]=t[14],e}else return new k(t[12],t[13],t[14])},clone:function(){var e=new this.constructor,t=this._children;e.setName(this.name),e.position.copy(this.position),e.rotation.copy(this.rotation),e.scale.copy(this.scale);for(var r=0;r<t.length;r++)e.add(t[r].clone());return e},rotateAround:function(){var e=new k,t=new q;return function(r,i,n){e.copy(this.position).subtract(r);var a=this.localTransform;a.identity(),a.translate(r),a.rotate(n,i),t.fromRotationTranslation(this.rotation,e),a.multiply(t),a.scale(this.scale),this.decomposeLocalTransform(),this._needsUpdateWorldTransform=!0}}(),lookAt:function(){var e=new q;return function(t,r){e.lookAt(this.position,t,r||this.localTransform.y).invert(),this.setLocalTransform(e),this.target=t}}()});const Wt=Bc;var Et=Wt.extend({material:null,geometry:null,mode:F.TRIANGLES,_renderInfo:null},{__program:null,lightGroup:0,renderOrder:0,culling:!0,cullFace:F.BACK,frontFace:F.CCW,frustumCulling:!0,receiveShadow:!0,castShadow:!0,ignorePicking:!1,ignorePreZ:!1,ignoreGBuffer:!1,isRenderable:function(){return this.geometry&&this.material&&this.material.shader&&!this.invisible&&this.geometry.vertexCount>0},beforeRender:function(e){},afterRender:function(e,t){},getBoundingBox:function(e,t){return t=Wt.prototype.getBoundingBox.call(this,e,t),this.geometry&&this.geometry.boundingBox&&t.union(this.geometry.boundingBox),t},clone:function(){var e=["castShadow","receiveShadow","mode","culling","cullFace","frontFace","frustumCulling","renderOrder","lineWidth","ignorePicking","ignorePreZ","ignoreGBuffer"];return function(){var t=Wt.prototype.clone.call(this);t.geometry=this.geometry,t.material=this.material;for(var r=0;r<e.length;r++){var i=e[r];t[i]!==this[i]&&(t[i]=this[i])}return t}}()});Et.POINTS=F.POINTS;Et.LINES=F.LINES;Et.LINE_LOOP=F.LINE_LOOP;Et.LINE_STRIP=F.LINE_STRIP;Et.TRIANGLES=F.TRIANGLES;Et.TRIANGLE_STRIP=F.TRIANGLE_STRIP;Et.TRIANGLE_FAN=F.TRIANGLE_FAN;Et.BACK=F.BACK;Et.FRONT=F.FRONT;Et.FRONT_AND_BACK=F.FRONT_AND_BACK;Et.CW=F.CW;Et.CCW=F.CCW;const Na=Et;var qa=vt.extend({scene:null,camera:null,renderer:null},function(){this._ray=new An,this._ndc=new wt},{pick:function(e,t,r){var i=this.pickAll(e,t,[],r);return i[0]||null},pickAll:function(e,t,r,i){return this.renderer.screenToNDC(e,t,this._ndc),this.camera.castRay(this._ndc,this._ray),r=r||[],this._intersectNode(this.scene,r,i||!1),r.sort(this._intersectionCompareFunc),r},_intersectNode:function(e,t,r){e instanceof Na&&e.isRenderable()&&(!e.ignorePicking||r)&&(e.mode===F.TRIANGLES&&e.geometry.isUseIndices()||e.geometry.pickByRay||e.geometry.pick)&&this._intersectRenderable(e,t);for(var i=0;i<e._children.length;i++)this._intersectNode(e._children[i],t,r)},_intersectRenderable:function(){var e=new k,t=new k,r=new k,i=new An,n=new q;return function(a,o){var s=a.isSkinnedMesh();i.copy(this._ray),q.invert(n,a.worldTransform),s||i.applyTransform(n);var l=a.geometry,u=s?a.skeleton.boundingBox:l.boundingBox;if(!(u&&!i.intersectBoundingBox(u))){if(l.pick){l.pick(this._ndc.x,this._ndc.y,this.renderer,this.camera,a,o);return}else if(l.pickByRay){l.pickByRay(i,a,o);return}var c=a.cullFace===F.BACK&&a.frontFace===F.CCW||a.cullFace===F.FRONT&&a.frontFace===F.CW,h,f=l.indices,d=l.attributes.position,v=l.attributes.weight,p=l.attributes.joint,m,_=[];if(!(!d||!d.value||!f)){if(s){m=a.skeleton.getSubSkinMatrices(a.__uid__,a.joints);for(var x=0;x<a.joints.length;x++){_[x]=_[x]||[];for(var y=0;y<16;y++)_[x][y]=m[x*16+y]}var g=[],w=[],T=[],b=[],S=[],C=l.attributes.skinnedPosition;(!C||!C.value)&&(l.createAttribute("skinnedPosition","f",3),C=l.attributes.skinnedPosition,C.init(l.vertexCount));for(var x=0;x<l.vertexCount;x++){d.get(x,g),v.get(x,w),p.get(x,T),w[3]=1-w[0]-w[1]-w[2],R.set(b,0,0,0);for(var y=0;y<4;y++)T[y]>=0&&w[y]>1e-4&&(R.transformMat4(S,g,_[T[y]]),R.scaleAndAdd(b,b,S,w[y]));C.set(x,b)}}for(var x=0;x<f.length;x+=3){var L=f[x],A=f[x+1],M=f[x+2],P=s?l.attributes.skinnedPosition:d;if(P.get(L,e.array),P.get(A,t.array),P.get(M,r.array),c?h=i.intersectTriangle(e,t,r,a.culling):h=i.intersectTriangle(e,r,t,a.culling),h){var D=new k;s?k.copy(D,h):k.transformMat4(D,h,a.worldTransform),o.push(new qa.Intersection(h,D,a,[L,A,M],x/3,k.dist(D,this._ray.origin)))}}}}}}(),_intersectionCompareFunc:function(e,t){return e.distance-t.distance}});qa.Intersection=function(e,t,r,i,n,a){this.point=e,this.pointWorld=t,this.target=r,this.triangle=i,this.triangleIndex=n,this.distance=a};const Uc=qa;var Ti="__dt__",Cn=function(){this._contextId=0,this._caches=[],this._context={}};Cn.prototype={use:function(e,t){var r=this._caches;r[e]||(r[e]={},t&&(r[e]=t())),this._contextId=e,this._context=r[e]},put:function(e,t){this._context[e]=t},get:function(e){return this._context[e]},dirty:function(e){e=e||"";var t=Ti+e;this.put(t,!0)},dirtyAll:function(e){e=e||"";for(var t=Ti+e,r=this._caches,i=0;i<r.length;i++)r[i]&&(r[i][t]=!0)},fresh:function(e){e=e||"";var t=Ti+e;this.put(t,!1)},freshAll:function(e){e=e||"";for(var t=Ti+e,r=this._caches,i=0;i<r.length;i++)r[i]&&(r[i][t]=!1)},isDirty:function(e){e=e||"";var t=Ti+e,r=this._context;return!r.hasOwnProperty(t)||r[t]===!0},deleteContext:function(e){delete this._caches[e],this._context={}},delete:function(e){delete this._context[e]},clearAll:function(){this._caches={}},getContext:function(){return this._context},eachContext:function(e,t){var r=Object.keys(this._caches);r.forEach(function(i){e&&e.call(t,i)})},miss:function(e){return!this._context.hasOwnProperty(e)}};Cn.prototype.constructor=Cn;const Ka=Cn;var _e=vt.extend({width:512,height:512,type:F.UNSIGNED_BYTE,format:F.RGBA,wrapS:F.REPEAT,wrapT:F.REPEAT,minFilter:F.LINEAR_MIPMAP_LINEAR,magFilter:F.LINEAR,useMipmap:!0,anisotropic:1,flipY:!0,sRGB:!0,unpackAlignment:4,premultiplyAlpha:!1,dynamic:!1,NPOT:!1,__used:0},function(){this._cache=new Ka},{getWebGLTexture:function(e){var t=e.gl,r=this._cache;return r.use(e.__uid__),r.miss("webgl_texture")&&r.put("webgl_texture",t.createTexture()),this.dynamic?this.update(e):r.isDirty()&&(this.update(e),r.fresh()),r.get("webgl_texture")},bind:function(){},unbind:function(){},dirty:function(){this._cache&&this._cache.dirtyAll()},update:function(e){},updateCommon:function(e){var t=e.gl;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,this.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,this.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,this.unpackAlignment),this.format===F.DEPTH_COMPONENT&&(this.useMipmap=!1);var r=e.getGLExtension("EXT_sRGB");this.format===_e.SRGB&&!r&&(this.format=_e.RGB),this.format===_e.SRGB_ALPHA&&!r&&(this.format=_e.RGBA),this.NPOT=!this.isPowerOfTwo()},getAvailableWrapS:function(){return this.NPOT?F.CLAMP_TO_EDGE:this.wrapS},getAvailableWrapT:function(){return this.NPOT?F.CLAMP_TO_EDGE:this.wrapT},getAvailableMinFilter:function(){var e=this.minFilter;return this.NPOT||!this.useMipmap?e===F.NEAREST_MIPMAP_NEAREST||e===F.NEAREST_MIPMAP_LINEAR?F.NEAREST:e===F.LINEAR_MIPMAP_LINEAR||e===F.LINEAR_MIPMAP_NEAREST?F.LINEAR:e:e},getAvailableMagFilter:function(){return this.magFilter},nextHighestPowerOfTwo:function(e){--e;for(var t=1;t<32;t<<=1)e=e|e>>t;return e+1},dispose:function(e){var t=this._cache;t.use(e.__uid__);var r=t.get("webgl_texture");r&&e.gl.deleteTexture(r),t.deleteContext(e.__uid__)},isRenderable:function(){},isPowerOfTwo:function(){}});Object.defineProperty(_e.prototype,"width",{get:function(){return this._width},set:function(e){this._width=e}});Object.defineProperty(_e.prototype,"height",{get:function(){return this._height},set:function(e){this._height=e}});_e.BYTE=F.BYTE;_e.UNSIGNED_BYTE=F.UNSIGNED_BYTE;_e.SHORT=F.SHORT;_e.UNSIGNED_SHORT=F.UNSIGNED_SHORT;_e.INT=F.INT;_e.UNSIGNED_INT=F.UNSIGNED_INT;_e.FLOAT=F.FLOAT;_e.HALF_FLOAT=36193;_e.UNSIGNED_INT_24_8_WEBGL=34042;_e.DEPTH_COMPONENT=F.DEPTH_COMPONENT;_e.DEPTH_STENCIL=F.DEPTH_STENCIL;_e.ALPHA=F.ALPHA;_e.RGB=F.RGB;_e.RGBA=F.RGBA;_e.LUMINANCE=F.LUMINANCE;_e.LUMINANCE_ALPHA=F.LUMINANCE_ALPHA;_e.SRGB=35904;_e.SRGB_ALPHA=35906;_e.COMPRESSED_RGB_S3TC_DXT1_EXT=33776;_e.COMPRESSED_RGBA_S3TC_DXT1_EXT=33777;_e.COMPRESSED_RGBA_S3TC_DXT3_EXT=33778;_e.COMPRESSED_RGBA_S3TC_DXT5_EXT=33779;_e.NEAREST=F.NEAREST;_e.LINEAR=F.LINEAR;_e.NEAREST_MIPMAP_NEAREST=F.NEAREST_MIPMAP_NEAREST;_e.LINEAR_MIPMAP_NEAREST=F.LINEAR_MIPMAP_NEAREST;_e.NEAREST_MIPMAP_LINEAR=F.NEAREST_MIPMAP_LINEAR;_e.LINEAR_MIPMAP_LINEAR=F.LINEAR_MIPMAP_LINEAR;_e.REPEAT=F.REPEAT;_e.CLAMP_TO_EDGE=F.CLAMP_TO_EDGE;_e.MIRRORED_REPEAT=F.MIRRORED_REPEAT;const K=_e;var At=Na.extend({skeleton:null,joints:null},function(){this.joints||(this.joints=[])},{offsetMatrix:null,isInstancedMesh:function(){return!1},isSkinnedMesh:function(){return!!(this.skeleton&&this.joints&&this.joints.length>0)},clone:function(){var e=Na.prototype.clone.call(this);return e.skeleton=this.skeleton,this.joints&&(e.joints=this.joints.slice()),e}});At.POINTS=F.POINTS;At.LINES=F.LINES;At.LINE_LOOP=F.LINE_LOOP;At.LINE_STRIP=F.LINE_STRIP;At.TRIANGLES=F.TRIANGLES;At.TRIANGLE_STRIP=F.TRIANGLE_STRIP;At.TRIANGLE_FAN=F.TRIANGLE_FAN;At.BACK=F.BACK;At.FRONT=F.FRONT;At.FRONT_AND_BACK=F.FRONT_AND_BACK;At.CW=F.CW;At.CCW=F.CCW;const Pr=At;var kn={};kn.isPowerOfTwo=function(e){return(e&e-1)===0};kn.nextPowerOfTwo=function(e){return e--,e|=e>>1,e|=e>>2,e|=e>>4,e|=e>>8,e|=e>>16,e++,e};kn.nearestPowerOfTwo=function(e){return Math.pow(2,Math.round(Math.log(e)/Math.LN2))};const nl=kn;var $o=nl.isPowerOfTwo;function jo(e){return Math.pow(2,Math.round(Math.log(e)/Math.LN2))}function zc(e,t){var r=jo(e.width),i=jo(e.height);t=t||document.createElement("canvas"),t.width=r,t.height=i;var n=t.getContext("2d");return n.drawImage(e.image,0,0,r,i),t}var Qa=K.extend(function(){return{image:null,pixels:null,mipmaps:[],convertToPOT:!1}},{textureType:"texture2D",update:function(e){var t=e.gl;t.bindTexture(t.TEXTURE_2D,this._cache.get("webgl_texture")),this.updateCommon(e);var r=this.format,i=this.type,n=!!(this.convertToPOT&&!this.mipmaps.length&&this.image&&(this.wrapS===K.REPEAT||this.wrapT===K.REPEAT)&&this.NPOT);t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,n?this.wrapS:this.getAvailableWrapS()),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,n?this.wrapT:this.getAvailableWrapT()),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,n?this.magFilter:this.getAvailableMagFilter()),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,n?this.minFilter:this.getAvailableMinFilter());var a=e.getGLExtension("EXT_texture_filter_anisotropic");if(a&&this.anisotropic>1&&t.texParameterf(t.TEXTURE_2D,a.TEXTURE_MAX_ANISOTROPY_EXT,this.anisotropic),i===36193){var o=e.getGLExtension("OES_texture_half_float");o||(i=F.FLOAT)}if(this.mipmaps.length)for(var s=this.width,l=this.height,u=0;u<this.mipmaps.length;u++){var c=this.mipmaps[u];this._updateTextureData(t,c,u,s,l,r,i,!1),s/=2,l/=2}else this._updateTextureData(t,this,0,this.width,this.height,r,i,n),this.useMipmap&&(!this.NPOT||n)&&t.generateMipmap(t.TEXTURE_2D);t.bindTexture(t.TEXTURE_2D,null)},_updateTextureData:function(e,t,r,i,n,a,o,s){if(t.image){var l=t.image;s&&(this._potCanvas=zc(this,this._potCanvas),l=this._potCanvas),e.texImage2D(e.TEXTURE_2D,r,a,a,o,l)}else a<=K.COMPRESSED_RGBA_S3TC_DXT5_EXT&&a>=K.COMPRESSED_RGB_S3TC_DXT1_EXT?e.compressedTexImage2D(e.TEXTURE_2D,r,a,i,n,0,t.pixels):e.texImage2D(e.TEXTURE_2D,r,a,i,n,0,a,o,t.pixels)},generateMipmap:function(e){var t=e.gl;this.useMipmap&&!this.NPOT&&(t.bindTexture(t.TEXTURE_2D,this._cache.get("webgl_texture")),t.generateMipmap(t.TEXTURE_2D))},isPowerOfTwo:function(){return $o(this.width)&&$o(this.height)},isRenderable:function(){return this.image?this.image.width>0&&this.image.height>0:!!(this.width&&this.height)},bind:function(e){e.gl.bindTexture(e.gl.TEXTURE_2D,this.getWebGLTexture(e))},unbind:function(e){e.gl.bindTexture(e.gl.TEXTURE_2D,null)},load:function(e,t){var r=$e.createImage();t&&(r.crossOrigin=t);var i=this;return r.onload=function(){i.dirty(),i.trigger("success",i)},r.onerror=function(){i.trigger("error",i)},r.src=e,this.image=r,this}});Object.defineProperty(Qa.prototype,"width",{get:function(){return this.image?this.image.width:this._width},set:function(e){this.image?console.warn("Texture from image can't set width"):(this._width!==e&&this.dirty(),this._width=e)}});Object.defineProperty(Qa.prototype,"height",{get:function(){return this.image?this.image.height:this._height},set:function(e){this.image?console.warn("Texture from image can't set height"):(this._height!==e&&this.dirty(),this._height=e)}});const se=Qa;function al(e){return{byte:$e.Int8Array,ubyte:$e.Uint8Array,short:$e.Int16Array,ushort:$e.Uint16Array}[e]||$e.Float32Array}function la(e){return"attr_"+e}function ni(e,t,r,i){switch(this.name=e,this.type=t,this.size=r,this.semantic=i||"",this.value=null,r){case 1:this.get=function(n){return this.value[n]},this.set=function(n,a){this.value[n]=a},this.copy=function(n,a){this.value[n]=this.value[n]};break;case 2:this.get=function(n,a){var o=this.value;return a[0]=o[n*2],a[1]=o[n*2+1],a},this.set=function(n,a){var o=this.value;o[n*2]=a[0],o[n*2+1]=a[1]},this.copy=function(n,a){var o=this.value;a*=2,n*=2,o[n]=o[a],o[n+1]=o[a+1]};break;case 3:this.get=function(n,a){var o=n*3,s=this.value;return a[0]=s[o],a[1]=s[o+1],a[2]=s[o+2],a},this.set=function(n,a){var o=n*3,s=this.value;s[o]=a[0],s[o+1]=a[1],s[o+2]=a[2]},this.copy=function(n,a){var o=this.value;a*=3,n*=3,o[n]=o[a],o[n+1]=o[a+1],o[n+2]=o[a+2]};break;case 4:this.get=function(n,a){var o=this.value,s=n*4;return a[0]=o[s],a[1]=o[s+1],a[2]=o[s+2],a[3]=o[s+3],a},this.set=function(n,a){var o=this.value,s=n*4;o[s]=a[0],o[s+1]=a[1],o[s+2]=a[2],o[s+3]=a[3]},this.copy=function(n,a){var o=this.value;a*=4,n*=4,o[n]=o[a],o[n+1]=o[a+1],o[n+2]=o[a+2],o[n+3]=o[a+3]}}}ni.prototype.init=function(e){if(!this.value||this.value.length!==e*this.size){var t=al(this.type);this.value=new t(e*this.size)}};ni.prototype.fromArray=function(e){var t=al(this.type),r;if(e[0]&&e[0].length){var i=0,n=this.size;r=new t(e.length*n);for(var a=0;a<e.length;a++)for(var o=0;o<n;o++)r[i++]=e[a][o]}else r=new t(e);this.value=r};ni.prototype.clone=function(e){var t=new ni(this.name,this.type,this.size,this.semantic);return e&&console.warn("todo"),t};function ol(e,t,r,i,n){this.name=e,this.type=t,this.buffer=r,this.size=i,this.semantic=n,this.symbol="",this.needsRemove=!1}function sl(e){this.buffer=e,this.count=0}var er=vt.extend(function(){return{attributes:{},indices:null,dynamic:!0,_enabledAttributes:null,__used:0}},function(){this._cache=new Ka,this._attributeList=Object.keys(this.attributes),this.__vaoCache={}},{mainAttribute:"",pick:null,pickByRay:null,dirty:function(){for(var e=this.getEnabledAttributes(),t=0;t<e.length;t++)this.dirtyAttribute(e[t]);this.dirtyIndices(),this._enabledAttributes=null,this._cache.dirty("any")},dirtyIndices:function(){this._cache.dirtyAll("indices")},dirtyAttribute:function(e){this._cache.dirtyAll(la(e)),this._cache.dirtyAll("attributes")},getTriangleIndices:function(e,t){if(e<this.triangleCount&&e>=0){t||(t=[]);var r=this.indices;return t[0]=r[e*3],t[1]=r[e*3+1],t[2]=r[e*3+2],t}},setTriangleIndices:function(e,t){var r=this.indices;r[e*3]=t[0],r[e*3+1]=t[1],r[e*3+2]=t[2]},isUseIndices:function(){return!!this.indices},initIndicesFromArray:function(e){var t,r=this.vertexCount>65535?$e.Uint32Array:$e.Uint16Array;if(e[0]&&e[0].length){var i=0,n=3;t=new r(e.length*n);for(var a=0;a<e.length;a++)for(var o=0;o<n;o++)t[i++]=e[a][o]}else t=new r(e);this.indices=t},createAttribute:function(e,t,r,i){var n=new ni(e,t,r,i);return this.attributes[e]&&this.removeAttribute(e),this.attributes[e]=n,this._attributeList.push(e),n},removeAttribute:function(e){var t=this._attributeList,r=t.indexOf(e);return r>=0?(t.splice(r,1),delete this.attributes[e],!0):!1},getAttribute:function(e){return this.attributes[e]},getEnabledAttributes:function(){var e=this._enabledAttributes,t=this._attributeList;if(e)return e;for(var r=[],i=this.vertexCount,n=0;n<t.length;n++){var a=t[n],o=this.attributes[a];o.value&&o.value.length===i*o.size&&r.push(a)}return this._enabledAttributes=r,r},getBufferChunks:function(e){var t=this._cache;t.use(e.__uid__);var r=t.isDirty("attributes"),i=t.isDirty("indices");if(r||i){this._updateBuffer(e.gl,r,i);for(var n=this.getEnabledAttributes(),a=0;a<n.length;a++)t.fresh(la(n[a]));t.fresh("attributes"),t.fresh("indices")}return t.fresh("any"),t.get("chunks")},_updateBuffer:function(e,t,r){var i=this._cache,n=i.get("chunks"),a=!1;n||(n=[],n[0]={attributeBuffers:[],indicesBuffer:null},i.put("chunks",n),a=!0);var o=n[0],s=o.attributeBuffers,l=o.indicesBuffer;if(t||a){var u=this.getEnabledAttributes(),c={};if(!a)for(var h=0;h<s.length;h++)c[s[h].name]=s[h];for(var f=0;f<u.length;f++){var d=u[f],v=this.attributes[d],p;a||(p=c[d]);var m;p?m=p.buffer:m=e.createBuffer(),i.isDirty(la(d))&&(e.bindBuffer(e.ARRAY_BUFFER,m),e.bufferData(e.ARRAY_BUFFER,v.value,this.dynamic?e.DYNAMIC_DRAW:e.STATIC_DRAW)),s[f]=new ol(d,v.type,m,v.size,v.semantic)}for(var h=f;h<s.length;h++)e.deleteBuffer(s[h].buffer);s.length=f}this.isUseIndices()&&(r||a)&&(l||(l=new sl(e.createBuffer()),o.indicesBuffer=l),l.count=this.indices.length,e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,l.buffer),e.bufferData(e.ELEMENT_ARRAY_BUFFER,this.indices,this.dynamic?e.DYNAMIC_DRAW:e.STATIC_DRAW))},dispose:function(e){var t=this._cache;t.use(e.__uid__);var r=t.get("chunks");if(r)for(var i=0;i<r.length;i++){for(var n=r[i],a=0;a<n.attributeBuffers.length;a++){var o=n.attributeBuffers[a];e.gl.deleteBuffer(o.buffer)}n.indicesBuffer&&e.gl.deleteBuffer(n.indicesBuffer.buffer)}if(this.__vaoCache){var s=e.getGLExtension("OES_vertex_array_object");for(var l in this.__vaoCache){var u=this.__vaoCache[l].vao;u&&s.deleteVertexArrayOES(u)}}this.__vaoCache={},t.deleteContext(e.__uid__)}});Object.defineProperty&&(Object.defineProperty(er.prototype,"vertexCount",{enumerable:!1,get:function(){var e=this.attributes[this.mainAttribute];return e||(e=this.attributes[this._attributeList[0]]),!e||!e.value?0:e.value.length/e.size}}),Object.defineProperty(er.prototype,"triangleCount",{enumerable:!1,get:function(){var e=this.indices;return e?e.length/3:0}}));er.STATIC_DRAW=F.STATIC_DRAW;er.DYNAMIC_DRAW=F.DYNAMIC_DRAW;er.STREAM_DRAW=F.STREAM_DRAW;er.AttributeBuffer=ol;er.IndicesBuffer=sl;er.Attribute=ni;const Vr=er;var ct=R.create,jr=R.add,Sr=R.set,Ht=Vr.Attribute,Hr=Vr.extend(function(){return{attributes:{position:new Ht("position","float",3,"POSITION"),texcoord0:new Ht("texcoord0","float",2,"TEXCOORD_0"),texcoord1:new Ht("texcoord1","float",2,"TEXCOORD_1"),normal:new Ht("normal","float",3,"NORMAL"),tangent:new Ht("tangent","float",4,"TANGENT"),color:new Ht("color","float",4,"COLOR"),weight:new Ht("weight","float",3,"WEIGHT"),joint:new Ht("joint","float",4,"JOINT"),barycentric:new Ht("barycentric","float",3,null)},boundingBox:null}},{mainAttribute:"position",updateBoundingBox:function(){var e=this.boundingBox;e||(e=this.boundingBox=new ht);var t=this.attributes.position.value;if(t&&t.length){var r=e.min,i=e.max,n=r.array,a=i.array;R.set(n,t[0],t[1],t[2]),R.set(a,t[0],t[1],t[2]);for(var o=3;o<t.length;){var s=t[o++],l=t[o++],u=t[o++];s<n[0]&&(n[0]=s),l<n[1]&&(n[1]=l),u<n[2]&&(n[2]=u),s>a[0]&&(a[0]=s),l>a[1]&&(a[1]=l),u>a[2]&&(a[2]=u)}r._dirty=!0,i._dirty=!0}},generateVertexNormals:function(){if(this.vertexCount){var e=this.indices,t=this.attributes,r=t.position.value,i=t.normal.value;if(!i||i.length!==r.length)i=t.normal.value=new $e.Float32Array(r.length);else for(var n=0;n<i.length;n++)i[n]=0;for(var a=ct(),o=ct(),s=ct(),l=ct(),u=ct(),c=ct(),h=e?e.length:this.vertexCount,f,d,v,p=0;p<h;){e?(f=e[p++],d=e[p++],v=e[p++]):(f=p++,d=p++,v=p++),Sr(a,r[f*3],r[f*3+1],r[f*3+2]),Sr(o,r[d*3],r[d*3+1],r[d*3+2]),Sr(s,r[v*3],r[v*3+1],r[v*3+2]),R.sub(l,a,o),R.sub(u,o,s),R.cross(c,l,u);for(var n=0;n<3;n++)i[f*3+n]=i[f*3+n]+c[n],i[d*3+n]=i[d*3+n]+c[n],i[v*3+n]=i[v*3+n]+c[n]}for(var n=0;n<i.length;)Sr(c,i[n],i[n+1],i[n+2]),R.normalize(c,c),i[n++]=c[0],i[n++]=c[1],i[n++]=c[2];this.dirty()}},generateFaceNormals:function(){if(this.vertexCount){this.isUniqueVertex()||this.generateUniqueVertex();var e=this.indices,t=this.attributes,r=t.position.value,i=t.normal.value,n=ct(),a=ct(),o=ct(),s=ct(),l=ct(),u=ct();i||(i=t.normal.value=new Float32Array(r.length));for(var c=e?e.length:this.vertexCount,h,f,d,v=0;v<c;){e?(h=e[v++],f=e[v++],d=e[v++]):(h=v++,f=v++,d=v++),Sr(n,r[h*3],r[h*3+1],r[h*3+2]),Sr(a,r[f*3],r[f*3+1],r[f*3+2]),Sr(o,r[d*3],r[d*3+1],r[d*3+2]),R.sub(s,n,a),R.sub(l,a,o),R.cross(u,s,l),R.normalize(u,u);for(var p=0;p<3;p++)i[h*3+p]=u[p],i[f*3+p]=u[p],i[d*3+p]=u[p]}this.dirty()}},generateTangents:function(){if(this.vertexCount){var e=this.vertexCount,t=this.attributes;t.tangent.value||(t.tangent.value=new Float32Array(e*4));var r=t.texcoord0.value,i=t.position.value,n=t.tangent.value,a=t.normal.value;if(!r){console.warn("Geometry without texcoords can't generate tangents.");return}for(var o=[],s=[],l=0;l<e;l++)o[l]=[0,0,0],s[l]=[0,0,0];for(var u=[0,0,0],c=[0,0,0],h=this.indices,f=h?h.length:this.vertexCount,d,v,p,l=0;l<f;){h?(d=h[l++],v=h[l++],p=h[l++]):(d=l++,v=l++,p=l++);var m=r[d*2],_=r[v*2],x=r[p*2],y=r[d*2+1],g=r[v*2+1],w=r[p*2+1],T=i[d*3],b=i[v*3],S=i[p*3],C=i[d*3+1],L=i[v*3+1],A=i[p*3+1],M=i[d*3+2],P=i[v*3+2],D=i[p*3+2],N=b-T,U=S-T,W=L-C,z=A-C,$=P-M,G=D-M,ne=_-m,B=x-m,I=g-y,Y=w-y,X=1/(ne*Y-I*B);u[0]=(Y*N-I*U)*X,u[1]=(Y*W-I*z)*X,u[2]=(Y*$-I*G)*X,c[0]=(ne*U-B*N)*X,c[1]=(ne*z-B*W)*X,c[2]=(ne*G-B*$)*X,jr(o[d],o[d],u),jr(o[v],o[v],u),jr(o[p],o[p],u),jr(s[d],s[d],c),jr(s[v],s[v],c),jr(s[p],s[p],c)}for(var Te=ct(),ue=ct(),he=ct(),l=0;l<e;l++){he[0]=a[l*3],he[1]=a[l*3+1],he[2]=a[l*3+2];var we=o[l];R.scale(Te,he,R.dot(he,we)),R.sub(Te,we,Te),R.normalize(Te,Te),R.cross(ue,he,we),n[l*4]=Te[0],n[l*4+1]=Te[1],n[l*4+2]=Te[2],n[l*4+3]=R.dot(ue,s[l])<0?-1:1}this.dirty()}},isUniqueVertex:function(){return this.isUseIndices()?this.vertexCount===this.indices.length:!0},generateUniqueVertex:function(){if(!(!this.vertexCount||!this.indices)){this.indices.length>65535&&(this.indices=new $e.Uint32Array(this.indices));for(var e=this.attributes,t=this.indices,r=this.getEnabledAttributes(),i={},n=0;n<r.length;n++){var a=r[n];i[a]=e[a].value,e[a].init(this.indices.length)}for(var o=0,s=0;s<t.length;s++){for(var l=t[s],n=0;n<r.length;n++)for(var a=r[n],u=e[a].value,c=e[a].size,h=0;h<c;h++)u[o*c+h]=i[a][l*c+h];t[s]=o,o++}this.dirty()}},generateBarycentric:function(){if(this.vertexCount){this.isUniqueVertex()||this.generateUniqueVertex();var e=this.attributes,t=e.barycentric.value,r=this.indices;if(!(t&&t.length===r.length*3)){t=e.barycentric.value=new Float32Array(r.length*3);for(var i=0;i<(r?r.length:this.vertexCount/3);)for(var n=0;n<3;n++){var a=r?r[i++]:i*3+n;t[a*3+n]=1}this.dirty()}}},applyTransform:function(e){var t=this.attributes,r=t.position.value,i=t.normal.value,n=t.tangent.value;e=e.array;var a=H.create();H.invert(a,e),H.transpose(a,a);var o=R.transformMat4,s=R.forEach;s(r,3,0,null,o,e),i&&s(i,3,0,null,o,a),n&&s(n,4,0,null,o,a),this.boundingBox&&this.updateBoundingBox()},dispose:function(e){var t=this._cache;t.use(e.__uid__);var r=t.get("chunks");if(r)for(var i=0;i<r.length;i++){for(var n=r[i],a=0;a<n.attributeBuffers.length;a++){var o=n.attributeBuffers[a];e.gl.deleteBuffer(o.buffer)}n.indicesBuffer&&e.gl.deleteBuffer(n.indicesBuffer.buffer)}if(this.__vaoCache){var s=e.getGLExtension("OES_vertex_array_object");for(var l in this.__vaoCache){var u=this.__vaoCache[l].vao;u&&s.deleteVertexArrayOES(u)}}this.__vaoCache={},t.deleteContext(e.__uid__)}});Hr.STATIC_DRAW=Vr.STATIC_DRAW;Hr.DYNAMIC_DRAW=Vr.DYNAMIC_DRAW;Hr.STREAM_DRAW=Vr.STREAM_DRAW;Hr.AttributeBuffer=Vr.AttributeBuffer;Hr.IndicesBuffer=Vr.IndicesBuffer;Hr.Attribute=Ht;const ye=Hr,Gc=`vec3 calcAmbientSHLight(int idx, vec3 N) {
 int offset = 9 * idx;
 return ambientSHLightCoefficients[0]
 + ambientSHLightCoefficients[1] * N.x
 + ambientSHLightCoefficients[2] * N.y
 + ambientSHLightCoefficients[3] * N.z
 + ambientSHLightCoefficients[4] * N.x * N.z
 + ambientSHLightCoefficients[5] * N.z * N.y
 + ambientSHLightCoefficients[6] * N.y * N.x
 + ambientSHLightCoefficients[7] * (3.0 * N.z * N.z - 1.0)
 + ambientSHLightCoefficients[8] * (N.x * N.x - N.y * N.y);
}`;var Ot="uniform vec3 ",wi="uniform float ",Zr="@export clay.header.",Yr="@end",nt=":unconfigurable;";const Vc=[Zr+"directional_light",Ot+"directionalLightDirection[DIRECTIONAL_LIGHT_COUNT]"+nt,Ot+"directionalLightColor[DIRECTIONAL_LIGHT_COUNT]"+nt,Yr,Zr+"ambient_light",Ot+"ambientLightColor[AMBIENT_LIGHT_COUNT]"+nt,Yr,Zr+"ambient_sh_light",Ot+"ambientSHLightColor[AMBIENT_SH_LIGHT_COUNT]"+nt,Ot+"ambientSHLightCoefficients[AMBIENT_SH_LIGHT_COUNT * 9]"+nt,Gc,Yr,Zr+"ambient_cubemap_light",Ot+"ambientCubemapLightColor[AMBIENT_CUBEMAP_LIGHT_COUNT]"+nt,"uniform samplerCube ambientCubemapLightCubemap[AMBIENT_CUBEMAP_LIGHT_COUNT]"+nt,"uniform sampler2D ambientCubemapLightBRDFLookup[AMBIENT_CUBEMAP_LIGHT_COUNT]"+nt,Yr,Zr+"point_light",Ot+"pointLightPosition[POINT_LIGHT_COUNT]"+nt,wi+"pointLightRange[POINT_LIGHT_COUNT]"+nt,Ot+"pointLightColor[POINT_LIGHT_COUNT]"+nt,Yr,Zr+"spot_light",Ot+"spotLightPosition[SPOT_LIGHT_COUNT]"+nt,Ot+"spotLightDirection[SPOT_LIGHT_COUNT]"+nt,wi+"spotLightRange[SPOT_LIGHT_COUNT]"+nt,wi+"spotLightUmbraAngleCosine[SPOT_LIGHT_COUNT]"+nt,wi+"spotLightPenumbraAngleCosine[SPOT_LIGHT_COUNT]"+nt,wi+"spotLightFalloffFactor[SPOT_LIGHT_COUNT]"+nt,Ot+"spotLightColor[SPOT_LIGHT_COUNT]"+nt,Yr].join(`
`);V.import(Vc);var Hc=Wt.extend(function(){return{color:[1,1,1],intensity:1,castShadow:!0,shadowResolution:512,group:0}},{type:"",clone:function(){var e=Wt.prototype.clone.call(this);return e.color=Array.prototype.slice.call(this.color),e.intensity=this.intensity,e.castShadow=this.castShadow,e.shadowResolution=this.shadowResolution,e}});const Ut=Hc;var yn=function(e,t){this.normal=e||new k(0,1,0),this.distance=t||0};yn.prototype={constructor:yn,distanceToPoint:function(e){return R.dot(e.array,this.normal.array)-this.distance},projectPoint:function(e,t){t||(t=new k);var r=this.distanceToPoint(e);return R.scaleAndAdd(t.array,e.array,this.normal.array,-r),t._dirty=!0,t},normalize:function(){var e=1/R.len(this.normal.array);R.scale(this.normal.array,e),this.distance*=e},intersectFrustum:function(e){for(var t=e.vertices,r=this.normal.array,i=R.dot(t[0].array,r)>this.distance,n=1;n<8;n++)if(R.dot(t[n].array,r)>this.distance!=i)return!0},intersectLine:function(){var e=R.create();return function(t,r,i){var n=this.distanceToPoint(t),a=this.distanceToPoint(r);if(n>0&&a>0||n<0&&a<0)return null;var o=this.normal.array,s=this.distance,l=t.array;R.sub(e,r.array,t.array),R.normalize(e,e);var u=R.dot(o,e);if(u===0)return null;i||(i=new k);var c=(R.dot(o,l)-s)/u;return R.scaleAndAdd(i.array,l,e,-c),i._dirty=!0,i}}(),applyTransform:function(){var e=H.create(),t=Z.create(),r=Z.create();return r[3]=1,function(i){i=i.array,R.scale(r,this.normal.array,this.distance),Z.transformMat4(r,r,i),this.distance=R.dot(r,this.normal.array),H.invert(e,i),H.transpose(e,e),t[3]=0,R.copy(t,this.normal.array),Z.transformMat4(t,t,e),R.copy(this.normal.array,t)}}(),copy:function(e){R.copy(this.normal.array,e.normal.array),this.normal._dirty=!0,this.distance=e.distance},clone:function(){var e=new yn;return e.copy(this),e}};const ll=yn;var ke=R.set,Zo=R.copy,Yo=R.transformMat4,ua=Math.min,ca=Math.max,ul=function(){this.planes=[];for(var e=0;e<6;e++)this.planes.push(new ll);this.boundingBox=new ht,this.vertices=[];for(var e=0;e<8;e++)this.vertices[e]=R.fromValues(0,0,0)};ul.prototype={setFromProjection:function(e){var t=this.planes,r=e.array,i=r[0],n=r[1],a=r[2],o=r[3],s=r[4],l=r[5],u=r[6],c=r[7],h=r[8],f=r[9],d=r[10],v=r[11],p=r[12],m=r[13],_=r[14],x=r[15];ke(t[0].normal.array,o-i,c-s,v-h),t[0].distance=-(x-p),t[0].normalize(),ke(t[1].normal.array,o+i,c+s,v+h),t[1].distance=-(x+p),t[1].normalize(),ke(t[2].normal.array,o+n,c+l,v+f),t[2].distance=-(x+m),t[2].normalize(),ke(t[3].normal.array,o-n,c-l,v-f),t[3].distance=-(x-m),t[3].normalize(),ke(t[4].normal.array,o-a,c-u,v-d),t[4].distance=-(x-_),t[4].normalize(),ke(t[5].normal.array,o+a,c+u,v+d),t[5].distance=-(x+_),t[5].normalize();var y=this.boundingBox,g=this.vertices;if(x===0){var w=l/i,T=-_/(d-1),b=-_/(d+1),S=-b/l,C=-T/l;y.min.set(-S*w,-S,b),y.max.set(S*w,S,T),ke(g[0],-S*w,-S,b),ke(g[1],-S*w,S,b),ke(g[2],S*w,-S,b),ke(g[3],S*w,S,b),ke(g[4],-C*w,-C,T),ke(g[5],-C*w,C,T),ke(g[6],C*w,-C,T),ke(g[7],C*w,C,T)}else{var L=(-1-p)/i,A=(1-p)/i,M=(1-m)/l,P=(-1-m)/l,D=(-1-_)/d,N=(1-_)/d;y.min.set(Math.min(L,A),Math.min(P,M),Math.min(N,D)),y.max.set(Math.max(A,L),Math.max(M,P),Math.max(D,N));var U=y.min.array,W=y.max.array;ke(g[0],U[0],U[1],U[2]),ke(g[1],U[0],W[1],U[2]),ke(g[2],W[0],U[1],U[2]),ke(g[3],W[0],W[1],U[2]),ke(g[4],U[0],U[1],W[2]),ke(g[5],U[0],W[1],W[2]),ke(g[6],W[0],U[1],W[2]),ke(g[7],W[0],W[1],W[2])}},getTransformedBoundingBox:function(){var e=R.create();return function(t,r){var i=this.vertices,n=r.array,a=t.min,o=t.max,s=a.array,l=o.array,u=i[0];Yo(e,u,n),Zo(s,e),Zo(l,e);for(var c=1;c<8;c++)u=i[c],Yo(e,u,n),s[0]=ua(e[0],s[0]),s[1]=ua(e[1],s[1]),s[2]=ua(e[2],s[2]),l[0]=ca(e[0],l[0]),l[1]=ca(e[1],l[1]),l[2]=ca(e[2],l[2]);return a._dirty=!0,o._dirty=!0,t}}()};const Ja=ul;var kc=Wt.extend(function(){return{projectionMatrix:new q,invProjectionMatrix:new q,viewMatrix:new q,frustum:new Ja}},function(){this.update(!0)},{update:function(e){Wt.prototype.update.call(this,e),q.invert(this.viewMatrix,this.worldTransform),this.updateProjectionMatrix(),q.invert(this.invProjectionMatrix,this.projectionMatrix),this.frustum.setFromProjection(this.projectionMatrix)},setViewMatrix:function(e){q.copy(this.viewMatrix,e),q.invert(this.worldTransform,e),this.decomposeWorldTransform()},decomposeProjectionMatrix:function(){},setProjectionMatrix:function(e){q.copy(this.projectionMatrix,e),q.invert(this.invProjectionMatrix,e),this.decomposeProjectionMatrix()},updateProjectionMatrix:function(){},castRay:function(){var e=Z.create();return function(t,r){var i=r!==void 0?r:new An,n=t.array[0],a=t.array[1];return Z.set(e,n,a,-1,1),Z.transformMat4(e,e,this.invProjectionMatrix.array),Z.transformMat4(e,e,this.worldTransform.array),R.scale(i.origin.array,e,1/e[3]),Z.set(e,n,a,1,1),Z.transformMat4(e,e,this.invProjectionMatrix.array),Z.transformMat4(e,e,this.worldTransform.array),R.scale(e,e,1/e[3]),R.sub(i.direction.array,e,i.origin.array),R.normalize(i.direction.array,i.direction.array),i.direction._dirty=!0,i.origin._dirty=!0,i}}()});const ai=kc;var Wc=H.create(),qo=H.create(),ha={};function Xc(e){var t=[],r=Object.keys(e);r.sort();for(var i=0;i<r.length;i++){var n=r[i];t.push(n+" "+e[n])}var a=t.join(`
`);if(ha[a])return ha[a];var o=at.genGUID();return ha[a]=o,o}function Wn(){this.opaque=[],this.transparent=[],this._opaqueCount=0,this._transparentCount=0}Wn.prototype.startCount=function(){this._opaqueCount=0,this._transparentCount=0};Wn.prototype.add=function(e,t){t?this.transparent[this._transparentCount++]=e:this.opaque[this._opaqueCount++]=e};Wn.prototype.endCount=function(){this.transparent.length=this._transparentCount,this.opaque.length=this._opaqueCount};var $c=Wt.extend(function(){return{material:null,lights:[],viewBoundingBoxLastFrame:new ht,shadowUniforms:{},_cameraList:[],_lightUniforms:{},_previousLightNumber:{},_lightNumber:{},_lightProgramKeys:{},_nodeRepository:{},_renderLists:new qs(20)}},function(){this._scene=this},{addToScene:function(e){e instanceof ai?(this._cameraList.length>0&&console.warn("Found multiple camera in one scene. Use the fist one."),this._cameraList.push(e)):e instanceof Ut&&this.lights.push(e),e.name&&(this._nodeRepository[e.name]=e)},removeFromScene:function(e){var t;e instanceof ai?(t=this._cameraList.indexOf(e),t>=0&&this._cameraList.splice(t,1)):e instanceof Ut&&(t=this.lights.indexOf(e),t>=0&&this.lights.splice(t,1)),e.name&&delete this._nodeRepository[e.name]},getNode:function(e){return this._nodeRepository[e]},setMainCamera:function(e){var t=this._cameraList.indexOf(e);t>=0&&this._cameraList.splice(t,1),this._cameraList.unshift(e)},getMainCamera:function(){return this._cameraList[0]},getLights:function(){return this.lights},updateLights:function(){var e=this.lights;this._previousLightNumber=this._lightNumber;for(var t={},r=0;r<e.length;r++){var i=e[r];if(!i.invisible){var n=i.group;t[n]||(t[n]={}),t[n][i.type]=t[n][i.type]||0,t[n][i.type]++}}this._lightNumber=t;for(var a in t)this._lightProgramKeys[a]=Xc(t[a]);this._updateLightUniforms()},cloneNode:function(e){var t=e.clone(),r={};function i(n,a){r[n.__uid__]=a;for(var o=0;o<n._children.length;o++){var s=n._children[o],l=a._children[o];i(s,l)}}return i(e,t),t.traverse(function(n){n.skeleton&&(n.skeleton=n.skeleton.clone(r)),n.material&&(n.material=n.material.clone())}),t},updateRenderList:function(e,t){var r=e.__uid__,i=this._renderLists.get(r);i||(i=new Wn,this._renderLists.put(r,i)),i.startCount(),t&&(this.viewBoundingBoxLastFrame.min.set(1/0,1/0,1/0),this.viewBoundingBoxLastFrame.max.set(-1/0,-1/0,-1/0));var n=this.material&&this.material.transparent||!1;return this._doUpdateRenderList(this,e,n,i,t),i.endCount(),i},getRenderList:function(e){return this._renderLists.get(e.__uid__)},_doUpdateRenderList:function(e,t,r,i,n){if(!e.invisible)for(var a=0;a<e._children.length;a++){var o=e._children[a];if(o.isRenderable()){var s=o.isSkinnedMesh()?Wc:o.worldTransform.array,l=o.geometry;H.multiplyAffine(qo,t.viewMatrix.array,s),(n&&!l.boundingBox||!this.isFrustumCulled(o,t,qo))&&i.add(o,o.material.transparent||r)}o._children.length>0&&this._doUpdateRenderList(o,t,r,i,n)}},isFrustumCulled:function(){var e=new ht,t=new q;return function(r,i,n){var a=r.boundingBox;if(a||(r.skeleton&&r.skeleton.boundingBox?a=r.skeleton.boundingBox:a=r.geometry.boundingBox),!a)return!1;if(t.array=n,e.transformFrom(a,t),r.castShadow&&this.viewBoundingBoxLastFrame.union(e),r.frustumCulling){if(!e.intersectBoundingBox(i.frustum.boundingBox))return!0;t.array=i.projectionMatrix.array,e.max.array[2]>0&&e.min.array[2]<0&&(e.max.array[2]=-1e-20),e.applyProjection(t);var o=e.min.array,s=e.max.array;if(s[0]<-1||o[0]>1||s[1]<-1||o[1]>1||s[2]<-1||o[2]>1)return!0}return!1}}(),_updateLightUniforms:function(){var e=this.lights;e.sort(jc);var t=this._lightUniforms;for(var r in t)for(var i in t[r])t[r][i].value.length=0;for(var n=0;n<e.length;n++){var a=e[n];if(!a.invisible){var r=a.group;for(var i in a.uniformTemplates){var o=a.uniformTemplates[i],s=o.value(a);if(s!=null){t[r]||(t[r]={}),t[r][i]||(t[r][i]={type:"",value:[]});var l=t[r][i];switch(l.type=o.type+"v",o.type){case"1i":case"1f":case"t":l.value.push(s);break;case"2f":case"3f":case"4f":for(var u=0;u<s.length;u++)l.value.push(s[u]);break;default:console.error("Unkown light uniform type "+o.type)}}}}}},getLightGroups:function(){var e=[];for(var t in this._lightNumber)e.push(t);return e},getNumberChangedLightGroups:function(){var e=[];for(var t in this._lightNumber)this.isLightNumberChanged(t)&&e.push(t);return e},isLightNumberChanged:function(e){var t=this._previousLightNumber,r=this._lightNumber;for(var i in r[e])if(!t[e]||r[e][i]!==t[e][i])return!0;for(var i in t[e])if(!r[e]||r[e][i]!==t[e][i])return!0;return!1},getLightsNumbers:function(e){return this._lightNumber[e]},getProgramKey:function(e){return this._lightProgramKeys[e]},setLightUniforms:function(){function e(t,r,i){for(var n in t){var a=t[n];if(a.type==="tv"){if(!r.hasUniform(n))continue;for(var o=[],s=0;s<a.value.length;s++){var l=a.value[s],u=r.takeCurrentTextureSlot(i,l);o.push(u)}r.setUniform(i.gl,"1iv",n,o)}else r.setUniform(i.gl,a.type,n,a.value)}}return function(t,r,i){e(this._lightUniforms[r],t,i),e(this.shadowUniforms,t,i)}}(),dispose:function(){this.material=null,this._opaqueList=[],this._transparentList=[],this.lights=[],this._lightUniforms={},this._lightNumber={},this._nodeRepository={}}});function jc(e,t){if(t.castShadow&&!e.castShadow)return!0}const xr=$c;var on=nl.isPowerOfTwo,Zc=["px","nx","py","ny","pz","nz"],eo=K.extend(function(){return{image:{px:null,nx:null,py:null,ny:null,pz:null,nz:null},pixels:{px:null,nx:null,py:null,ny:null,pz:null,nz:null},mipmaps:[]}},{textureType:"textureCube",update:function(e){var t=e.gl;t.bindTexture(t.TEXTURE_CUBE_MAP,this._cache.get("webgl_texture")),this.updateCommon(e);var r=this.format,i=this.type;t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_WRAP_S,this.getAvailableWrapS()),t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_WRAP_T,this.getAvailableWrapT()),t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MAG_FILTER,this.getAvailableMagFilter()),t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MIN_FILTER,this.getAvailableMinFilter());var n=e.getGLExtension("EXT_texture_filter_anisotropic");if(n&&this.anisotropic>1&&t.texParameterf(t.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_ANISOTROPY_EXT,this.anisotropic),i===36193){var a=e.getGLExtension("OES_texture_half_float");a||(i=F.FLOAT)}if(this.mipmaps.length)for(var o=this.width,s=this.height,l=0;l<this.mipmaps.length;l++){var u=this.mipmaps[l];this._updateTextureData(t,u,l,o,s,r,i),o/=2,s/=2}else this._updateTextureData(t,this,0,this.width,this.height,r,i),!this.NPOT&&this.useMipmap&&t.generateMipmap(t.TEXTURE_CUBE_MAP);t.bindTexture(t.TEXTURE_CUBE_MAP,null)},_updateTextureData:function(e,t,r,i,n,a,o){for(var s=0;s<6;s++){var l=Zc[s],u=t.image&&t.image[l];u?e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+s,r,a,a,o,u):e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+s,r,a,i,n,0,a,o,t.pixels&&t.pixels[l])}},generateMipmap:function(e){var t=e.gl;this.useMipmap&&!this.NPOT&&(t.bindTexture(t.TEXTURE_CUBE_MAP,this._cache.get("webgl_texture")),t.generateMipmap(t.TEXTURE_CUBE_MAP))},bind:function(e){e.gl.bindTexture(e.gl.TEXTURE_CUBE_MAP,this.getWebGLTexture(e))},unbind:function(e){e.gl.bindTexture(e.gl.TEXTURE_CUBE_MAP,null)},isPowerOfTwo:function(){return this.image.px?on(this.image.px.width)&&on(this.image.px.height):on(this.width)&&on(this.height)},isRenderable:function(){return this.image.px?qr(this.image.px)&&qr(this.image.nx)&&qr(this.image.py)&&qr(this.image.ny)&&qr(this.image.pz)&&qr(this.image.nz):!!(this.width&&this.height)},load:function(e,t){var r=0,i=this;return at.each(e,function(n,a){var o=$e.createImage();t&&(o.crossOrigin=t),o.onload=function(){r--,r===0&&(i.dirty(),i.trigger("success",i))},o.onerror=function(){r--},r++,o.src=n,i.image[a]=o}),this}});Object.defineProperty(eo.prototype,"width",{get:function(){return this.image&&this.image.px?this.image.px.width:this._width},set:function(e){this.image&&this.image.px?console.warn("Texture from image can't set width"):(this._width!==e&&this.dirty(),this._width=e)}});Object.defineProperty(eo.prototype,"height",{get:function(){return this.image&&this.image.px?this.image.px.height:this._height},set:function(e){this.image&&this.image.px?console.warn("Texture from image can't set height"):(this._height!==e&&this.dirty(),this._height=e)}});function qr(e){return e.width>0&&e.height>0}const Fi=eo;var Yc=ai.extend({fov:50,aspect:1,near:.1,far:2e3},{updateProjectionMatrix:function(){var e=this.fov/180*Math.PI;this.projectionMatrix.perspective(e,this.aspect,this.near,this.far)},decomposeProjectionMatrix:function(){var e=this.projectionMatrix.array,t=Math.atan(1/e[5])*2;this.fov=t/Math.PI*180,this.aspect=e[5]/e[0],this.near=e[14]/(e[10]-1),this.far=e[14]/(e[10]+1)},clone:function(){var e=ai.prototype.clone.call(this);return e.fov=this.fov,e.aspect=this.aspect,e.near=this.near,e.far=this.far,e}});const et=Yc;var sn="framebuffer",Kt="renderbuffer",Ko=Kt+"_width",Qo=Kt+"_height",fa=Kt+"_attached",da="depthtexture_attached",br=F.FRAMEBUFFER,Si=F.RENDERBUFFER,Di=F.DEPTH_ATTACHMENT,cl=F.COLOR_ATTACHMENT0,Zi=vt.extend({depthBuffer:!0,viewport:null,_width:0,_height:0,_textures:null,_boundRenderer:null},function(){this._cache=new Ka,this._textures={}},{getTextureWidth:function(){return this._width},getTextureHeight:function(){return this._height},bind:function(e){if(e.__currentFrameBuffer){if(e.__currentFrameBuffer===this)return;console.warn("Renderer already bound with another framebuffer. Unbind it first")}e.__currentFrameBuffer=this;var t=e.gl;t.bindFramebuffer(br,this._getFrameBufferGL(e)),this._boundRenderer=e;var r=this._cache;r.put("viewport",e.viewport);var i=!1,n,a;for(var o in this._textures){i=!0;var s=this._textures[o];s&&(n=s.texture.width,a=s.texture.height,this._doAttach(e,s.texture,o,s.target))}this._width=n,this._height=a,!i&&this.depthBuffer&&console.error("Must attach texture before bind, or renderbuffer may have incorrect width and height."),this.viewport?e.setViewport(this.viewport):e.setViewport(0,0,n,a,1);var l=r.get("attached_textures");if(l){for(var o in l)if(!this._textures[o]){var u=l[o];this._doDetach(t,o,u)}}if(!r.get(da)&&this.depthBuffer){r.miss(Kt)&&r.put(Kt,t.createRenderbuffer());var c=r.get(Kt);(n!==r.get(Ko)||a!==r.get(Qo))&&(t.bindRenderbuffer(Si,c),t.renderbufferStorage(Si,t.DEPTH_COMPONENT16,n,a),r.put(Ko,n),r.put(Qo,a),t.bindRenderbuffer(Si,null)),r.get(fa)||(t.framebufferRenderbuffer(br,Di,Si,c),r.put(fa,!0))}},unbind:function(e){e.__currentFrameBuffer=null;var t=e.gl;t.bindFramebuffer(br,null),this._boundRenderer=null,this._cache.use(e.__uid__);var r=this._cache.get("viewport");r&&e.setViewport(r),this.updateMipmap(e)},updateMipmap:function(e){var t=e.gl;for(var r in this._textures){var i=this._textures[r];if(i){var n=i.texture;if(!n.NPOT&&n.useMipmap&&n.minFilter===K.LINEAR_MIPMAP_LINEAR){var a=n.textureType==="textureCube"?F.TEXTURE_CUBE_MAP:F.TEXTURE_2D;t.bindTexture(a,n.getWebGLTexture(e)),t.generateMipmap(a),t.bindTexture(a,null)}}}},checkStatus:function(e){return e.checkFramebufferStatus(br)},_getFrameBufferGL:function(e){var t=this._cache;return t.use(e.__uid__),t.miss(sn)&&t.put(sn,e.gl.createFramebuffer()),t.get(sn)},attach:function(e,t,r){if(!e.width)throw new Error("The texture attached to color buffer is not a valid.");t=t||cl,r=r||F.TEXTURE_2D;var i=this._boundRenderer,n=i&&i.gl,a;if(n){var o=this._cache;o.use(i.__uid__),a=o.get("attached_textures")}var s=this._textures[t];if(!(s&&s.target===r&&s.texture===e&&a&&a[t]!=null)){var l=!0;i&&(l=this._doAttach(i,e,t,r),this.viewport||i.setViewport(0,0,e.width,e.height,1)),l&&(this._textures[t]=this._textures[t]||{},this._textures[t].texture=e,this._textures[t].target=r)}},_doAttach:function(e,t,r,i){var n=e.gl,a=t.getWebGLTexture(e),o=this._cache.get("attached_textures");if(o&&o[r]){var s=o[r];if(s.texture===t&&s.target===i)return}r=+r;var l=!0;if(r===Di||r===F.DEPTH_STENCIL_ATTACHMENT){var u=e.getGLExtension("WEBGL_depth_texture");if(u||(console.error("Depth texture is not supported by the browser"),l=!1),t.format!==F.DEPTH_COMPONENT&&t.format!==F.DEPTH_STENCIL&&(console.error("The texture attached to depth buffer is not a valid."),l=!1),l){var c=this._cache.get(Kt);c&&(n.framebufferRenderbuffer(br,Di,Si,null),n.deleteRenderbuffer(c),this._cache.put(Kt,!1)),this._cache.put(fa,!1),this._cache.put(da,!0)}}return n.framebufferTexture2D(br,r,i,a,0),o||(o={},this._cache.put("attached_textures",o)),o[r]=o[r]||{},o[r].texture=t,o[r].target=i,l},_doDetach:function(e,t,r){e.framebufferTexture2D(br,t,r,null,0);var i=this._cache.get("attached_textures");i&&i[t]&&(i[t]=null),(t===Di||t===F.DEPTH_STENCIL_ATTACHMENT)&&this._cache.put(da,!1)},detach:function(e,t){if(this._textures[e]=null,this._boundRenderer){var r=this._cache;r.use(this._boundRenderer.__uid__),this._doDetach(this._boundRenderer.gl,e,t)}},dispose:function(e){var t=e.gl,r=this._cache;r.use(e.__uid__);var i=r.get(Kt);i&&t.deleteRenderbuffer(i);var n=r.get(sn);n&&t.deleteFramebuffer(n),r.deleteContext(e.__uid__),this._textures={}}});Zi.DEPTH_ATTACHMENT=Di;Zi.COLOR_ATTACHMENT0=cl;Zi.STENCIL_ATTACHMENT=F.STENCIL_ATTACHMENT;Zi.DEPTH_STENCIL_ATTACHMENT=F.DEPTH_STENCIL_ATTACHMENT;const ot=Zi;var qc=["px","nx","py","ny","pz","nz"],Kc=vt.extend(function(){var e={position:new k,far:1e3,near:.1,texture:null,shadowMapPass:null},t=e._cameras={px:new et({fov:90}),nx:new et({fov:90}),py:new et({fov:90}),ny:new et({fov:90}),pz:new et({fov:90}),nz:new et({fov:90})};return t.px.lookAt(k.POSITIVE_X,k.NEGATIVE_Y),t.nx.lookAt(k.NEGATIVE_X,k.NEGATIVE_Y),t.py.lookAt(k.POSITIVE_Y,k.POSITIVE_Z),t.ny.lookAt(k.NEGATIVE_Y,k.NEGATIVE_Z),t.pz.lookAt(k.POSITIVE_Z,k.NEGATIVE_Y),t.nz.lookAt(k.NEGATIVE_Z,k.NEGATIVE_Y),e._frameBuffer=new ot,e},{getCamera:function(e){return this._cameras[e]},render:function(e,t,r){var i=e.gl;r||t.update();for(var n=this.texture.width,a=2*Math.atan(n/(n-.5))/Math.PI*180,o=0;o<6;o++){var s=qc[o],l=this._cameras[s];if(k.copy(l.position,this.position),l.far=this.far,l.near=this.near,l.fov=a,this.shadowMapPass){l.update();var u=t.getBoundingBox();u.applyTransform(l.viewMatrix),t.viewBoundingBoxLastFrame.copy(u),this.shadowMapPass.render(e,t,l,!0)}this._frameBuffer.attach(this.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+o),this._frameBuffer.bind(e),e.render(t,l,!0),this._frameBuffer.unbind(e)}},dispose:function(e){this._frameBuffer.dispose(e)}});const to=Kc;var Qc=ye.extend({dynamic:!1,widthSegments:1,heightSegments:1},function(){this.build()},{build:function(){for(var e=this.heightSegments,t=this.widthSegments,r=this.attributes,i=[],n=[],a=[],o=[],s=0;s<=e;s++)for(var l=s/e,u=0;u<=t;u++){var c=u/t;if(i.push([2*c-1,2*l-1,0]),n&&n.push([c,l]),a&&a.push([0,0,1]),u<t&&s<e){var h=u+s*(t+1);o.push([h,h+1,h+t+1]),o.push([h+t+1,h+1,h+t+2])}}r.position.fromArray(i),r.texcoord0.fromArray(n),r.normal.fromArray(a),this.initIndicesFromArray(o),this.boundingBox=new ht,this.boundingBox.min.set(-1,-1,0),this.boundingBox.max.set(1,1,0)}});const Xn=Qc;var Ue=new q,Jc=ye.extend({dynamic:!1,widthSegments:1,heightSegments:1,depthSegments:1,inside:!1},function(){this.build()},{build:function(){var e={px:Kr("px",this.depthSegments,this.heightSegments),nx:Kr("nx",this.depthSegments,this.heightSegments),py:Kr("py",this.widthSegments,this.depthSegments),ny:Kr("ny",this.widthSegments,this.depthSegments),pz:Kr("pz",this.widthSegments,this.heightSegments),nz:Kr("nz",this.widthSegments,this.heightSegments)},t=["position","texcoord0","normal"],r=0,i=0;for(var n in e)r+=e[n].vertexCount,i+=e[n].indices.length;for(var a=0;a<t.length;a++)this.attributes[t[a]].init(r);this.indices=new $e.Uint16Array(i);var o=0,s=0;for(var n in e){for(var l=e[n],a=0;a<t.length;a++)for(var u=t[a],c=l.attributes[u].value,h=l.attributes[u].size,f=u==="normal",d=0;d<c.length;d++){var v=c[d];this.inside&&f&&(v=-v),this.attributes[u].value[d+h*s]=v}for(var p=l.indices.length,d=0;d<l.indices.length;d++)this.indices[d+o]=s+l.indices[this.inside?p-d-1:d];o+=l.indices.length,s+=l.vertexCount}this.boundingBox=new ht,this.boundingBox.max.set(1,1,1),this.boundingBox.min.set(-1,-1,-1)}});function Kr(e,t,r){Ue.identity();var i=new Xn({widthSegments:t,heightSegments:r});switch(e){case"px":q.translate(Ue,Ue,k.POSITIVE_X),q.rotateY(Ue,Ue,Math.PI/2);break;case"nx":q.translate(Ue,Ue,k.NEGATIVE_X),q.rotateY(Ue,Ue,-Math.PI/2);break;case"py":q.translate(Ue,Ue,k.POSITIVE_Y),q.rotateX(Ue,Ue,-Math.PI/2);break;case"ny":q.translate(Ue,Ue,k.NEGATIVE_Y),q.rotateX(Ue,Ue,Math.PI/2);break;case"pz":q.translate(Ue,Ue,k.POSITIVE_Z);break;case"nz":q.translate(Ue,Ue,k.NEGATIVE_Z),q.rotateY(Ue,Ue,Math.PI);break}return i.applyTransform(Ue),i}const hl=Jc,eh=`@export clay.skybox.vertex
#define SHADER_NAME skybox
uniform mat4 world : WORLD;
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
attribute vec3 position : POSITION;
varying vec3 v_WorldPosition;
void main()
{
 v_WorldPosition = (world * vec4(position, 1.0)).xyz;
 gl_Position = worldViewProjection * vec4(position, 1.0);
}
@end
@export clay.skybox.fragment
#define PI 3.1415926
uniform mat4 viewInverse : VIEWINVERSE;
#ifdef EQUIRECTANGULAR
uniform sampler2D environmentMap;
#else
uniform samplerCube environmentMap;
#endif
uniform float lod: 0.0;
varying vec3 v_WorldPosition;
@import clay.util.rgbm
@import clay.util.srgb
@import clay.util.ACES
void main()
{
 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(v_WorldPosition - eyePos);
#ifdef EQUIRECTANGULAR
 float phi = acos(V.y);
 float theta = atan(-V.x, V.z) + PI * 0.5;
 vec2 uv = vec2(theta / 2.0 / PI, phi / PI);
 vec4 texel = decodeHDR(texture2D(environmentMap, fract(uv)));
#else
 #if defined(LOD) || defined(SUPPORT_TEXTURE_LOD)
 vec4 texel = decodeHDR(textureCubeLodEXT(environmentMap, V, lod));
 #else
 vec4 texel = decodeHDR(textureCube(environmentMap, V));
 #endif
#endif
#ifdef SRGB_DECODE
 texel = sRGBToLinear(texel);
#endif
#ifdef TONEMAPPING
 texel.rgb = ACESToneMapping(texel.rgb);
#endif
#ifdef SRGB_ENCODE
 texel = linearTosRGB(texel);
#endif
 gl_FragColor = encodeHDR(vec4(texel.rgb, 1.0));
}
@end`;V.import(eh);var th=Pr.extend(function(){var e=new V({vertex:V.source("clay.skybox.vertex"),fragment:V.source("clay.skybox.fragment")}),t=new Nt({shader:e,depthMask:!1});return{scene:null,geometry:new hl,material:t,environmentMap:null,culling:!1,_dummyCamera:new et}},function(){var e=this.scene;e&&this.attachScene(e),this.environmentMap&&this.setEnvironmentMap(this.environmentMap)},{attachScene:function(e){this.scene&&this.detachScene(),e.skybox=this,this.scene=e,e.on("beforerender",this._beforeRenderScene,this)},detachScene:function(){this.scene&&(this.scene.off("beforerender",this._beforeRenderScene),this.scene.skybox=null),this.scene=null},dispose:function(e){this.detachScene(),this.geometry.dispose(e)},setEnvironmentMap:function(e){e.textureType==="texture2D"?(this.material.define("EQUIRECTANGULAR"),e.minFilter=K.LINEAR):this.material.undefine("EQUIRECTANGULAR"),this.material.set("environmentMap",e)},getEnvironmentMap:function(){return this.material.get("environmentMap")},_beforeRenderScene:function(e,t,r){this.renderSkybox(e,r)},renderSkybox:function(e,t){var r=this._dummyCamera;r.aspect=e.getViewportAspect(),r.fov=t.fov||50,r.updateProjectionMatrix(),q.invert(r.invProjectionMatrix,r.projectionMatrix),r.worldTransform.copy(t.worldTransform),r.viewMatrix.copy(t.viewMatrix),this.position.copy(t.getWorldPosition()),this.update(),e.gl.disable(e.gl.BLEND),this.material.get("lod")>0?this.material.define("fragment","LOD"):this.material.undefine("fragment","LOD"),e.renderPass([this],r)}});const Bi=th;var rh=542327876,ih=131072,nh=512,ah=4;function ro(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}var oh=31,sh=ro("DXT1"),lh=ro("DXT3"),uh=ro("DXT5"),ch=0,hh=1,fh=2,dh=3,vh=4,ph=7,mh=20,_h=21,gh=28,yh={parse:function(e,t){var r=new Int32Array(e,0,oh);if(r[ch]!==rh||!r(mh)&ah)return null;var i=r(_h),n=r[vh],a=r[dh],o=r[gh]&nh,s=r[fh]&ih,l,u;switch(i){case sh:l=8,u=K.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case lh:l=16,u=K.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case uh:l=16,u=K.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return null}var c=r[hh]+4,h=o?6:1,f=1;s&&(f=Math.max(1,r[ph]));for(var d=[],v=0;v<h;v++){var p=n,m=a;d[v]=new se({width:p,height:m,format:u});for(var _=[],x=0;x<f;x++){var y=Math.max(4,p)/4*Math.max(4,m)/4*l,g=new Uint8Array(e,c,y);c+=y,p*=.5,m*=.5,_[x]=g}d[v].pixels=_[0],s&&(d[v].mipmaps=_)}if(t)t.width=d[0].width,t.height=d[0].height,t.format=d[0].format,t.pixels=d[0].pixels,t.mipmaps=d[0].mipmaps;else return d[0]}};const xh=yh;var xn=String.fromCharCode,Th=8,wh=32767;function Sh(e,t,r,i){if(e[3]>0){var n=Math.pow(2,e[3]-128-8+i);t[r+0]=e[0]*n,t[r+1]=e[1]*n,t[r+2]=e[2]*n}else t[r+0]=0,t[r+1]=0,t[r+2]=0;return t[r+3]=1,t}function bh(e,t,r){for(var i="",n=t;n<r;n++)i+=xn(e[n]);return i}function Eh(e,t){t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3]}function Jo(e,t,r,i){for(var n=0,a=0,o=i;o>0;)if(e[a][0]=t[r++],e[a][1]=t[r++],e[a][2]=t[r++],e[a][3]=t[r++],e[a][0]===1&&e[a][1]===1&&e[a][2]===1){for(var s=e[a][3]<<n>>>0;s>0;s--)Eh(e[a-1],e[a]),a++,o--;n+=8}else a++,o--,n=0;return r}function Ah(e,t,r,i){if(i<Th|i>wh)return Jo(e,t,r,i);var n=t[r++];if(n!=2)return Jo(e,t,r-1,i);if(e[0][1]=t[r++],e[0][2]=t[r++],n=t[r++],(e[0][2]<<8>>>0|n)>>>0!==i)return null;for(var n=0;n<4;n++)for(var a=0;a<i;){var o=t[r++];if(o>128){o=(o&127)>>>0;for(var s=t[r++];o--;)e[a++][n]=s}else for(;o--;)e[a++][n]=t[r++]}return r}var Ch={parseRGBE:function(e,t,r){r==null&&(r=0);var i=new Uint8Array(e),n=i.length;if(bh(i,0,2)==="#?"){for(var a=2;a<n&&!(xn(i[a])===`
`&&xn(i[a+1])===`
`);a++);if(!(a>=n)){a+=2;for(var o="";a<n;a++){var s=xn(i[a]);if(s===`
`)break;o+=s}var l=o.split(" "),u=parseInt(l[1]),c=parseInt(l[3]);if(!(!c||!u)){for(var h=a+1,f=[],d=0;d<c;d++){f[d]=[];for(var v=0;v<4;v++)f[d][v]=0}for(var p=new Float32Array(c*u*4),m=0,_=0;_<u;_++){var h=Ah(f,i,h,c);if(!h)return null;for(var d=0;d<c;d++)Sh(f[d],p,m,r),m+=4}return t||(t=new se),t.width=c,t.height=u,t.pixels=p,t.type=K.FLOAT,t}}}},parseRGBEFromPNG:function(e){}};const Lh=Ch;var Tn={loadTexture:function(e,t,r,i){var n;if(typeof t=="function"?(r=t,i=r,t={}):t=t||{},typeof e=="string"){if(e.match(/.hdr$/)||t.fileType==="hdr")return n=new se({width:0,height:0,sRGB:!1}),Tn._fetchTexture(e,function(a){Lh.parseRGBE(a,n,t.exposure),n.dirty(),r&&r(n)},i),n;e.match(/.dds$/)||t.fileType==="dds"?(n=new se({width:0,height:0}),Tn._fetchTexture(e,function(a){xh.parse(a,n),n.dirty(),r&&r(n)},i)):(n=new se,n.load(e),n.success(r),n.error(i))}else typeof e=="object"&&typeof e.px<"u"&&(n=new Fi,n.load(e),n.success(r),n.error(i));return n},loadPanorama:function(e,t,r,i,n,a){var o=this;typeof i=="function"?(n=i,a=n,i={}):i=i||{},Tn.loadTexture(t,i,function(s){s.flipY=i.flipY||!1,o.panoramaToCubeMap(e,s,r,i),s.dispose(e),n&&n(r)},a)},panoramaToCubeMap:function(e,t,r,i){var n=new to,a=new Bi({scene:new xr});return a.setEnvironmentMap(t),i=i||{},i.encodeRGBM&&a.material.define("fragment","RGBM_ENCODE"),r.sRGB=t.sRGB,n.texture=r,n.render(e,a.scene),n.texture=null,n.dispose(e),r},heightToNormal:function(e,t){var r=document.createElement("canvas"),i=r.width=e.width,n=r.height=e.height,a=r.getContext("2d");a.drawImage(e,0,0,i,n),t=t||!1;for(var o=a.getImageData(0,0,i,n),s=a.createImageData(i,n),l=0;l<o.data.length;l+=4){if(t){var u=o.data[l],c=o.data[l+1],h=o.data[l+2],f=Math.abs(u-c)+Math.abs(c-h);if(f>20)return console.warn("Given image is not a height map"),e}var d,v,p,m;l%(i*4)===0?(d=o.data[l],p=o.data[l+4]):l%(i*4)===(i-1)*4?(d=o.data[l-4],p=o.data[l]):(d=o.data[l-4],p=o.data[l+4]),l<i*4?(v=o.data[l],m=o.data[l+i*4]):l>i*(n-1)*4?(v=o.data[l-i*4],m=o.data[l]):(v=o.data[l-i*4],m=o.data[l+i*4]),s.data[l]=d-p+127,s.data[l+1]=v-m+127,s.data[l+2]=255,s.data[l+3]=255}return a.putImageData(s,0,0),r},isHeightImage:function(e,t,r){if(!e||!e.width||!e.height)return!1;var i=document.createElement("canvas"),n=i.getContext("2d"),a=t||32;r=r||20,i.width=i.height=a,n.drawImage(e,0,0,a,a);for(var o=n.getImageData(0,0,a,a),s=0;s<o.data.length;s+=4){var l=o.data[s],u=o.data[s+1],c=o.data[s+2],h=Math.abs(l-u)+Math.abs(u-c);if(h>r)return!1}return!0},_fetchTexture:function(e,t,r){$e.request.get({url:e,responseType:"arraybuffer",onload:t,onerror:r})},createChessboard:function(e,t,r,i){e=e||512,t=t||64,r=r||"black",i=i||"white";var n=Math.ceil(e/t),a=document.createElement("canvas");a.width=e,a.height=e;var o=a.getContext("2d");o.fillStyle=i,o.fillRect(0,0,e,e),o.fillStyle=r;for(var s=0;s<n;s++)for(var l=0;l<n;l++){var u=l%2?s%2:s%2-1;u&&o.fillRect(s*t,l*t,t,t)}var c=new se({image:a,anisotropic:8});return c},createBlank:function(e){var t=document.createElement("canvas");t.width=1,t.height=1;var r=t.getContext("2d");r.fillStyle=e,r.fillRect(0,0,1,1);var i=new se({image:t});return i}};const Ir=Tn;var Ia=["mousedown","mouseup","mousemove","mouseover","mouseout","click","dblclick","contextmenu"];function Oa(e){return"_on"+e}var Fa=function(e){var t=this;this._texture=new se({anisotropic:32,flipY:!1,surface:this,dispose:function(r){t.dispose(),se.prototype.dispose.call(this,r)}}),Ia.forEach(function(r){this[Oa(r)]=function(i){i.triangle&&this._meshes.forEach(function(n){this.dispatchEvent(r,n,i.triangle,i.point)},this)}},this),this._meshes=[],e&&this.setECharts(e),this.onupdate=null};Fa.prototype={constructor:Fa,getTexture:function(){return this._texture},setECharts:function(e){this._chart=e;var t=e.getDom();if(!(t instanceof HTMLCanvasElement))console.error("ECharts must init on canvas if it is used as texture."),t=document.createElement("canvas");else{var r=this,i=e.getZr(),n=i.__oldRefreshImmediately||i.refreshImmediately;i.refreshImmediately=function(){n.call(this),r._texture.dirty(),r.onupdate&&r.onupdate()},i.__oldRefreshImmediately=n}this._texture.image=t,this._texture.dirty(),this.onupdate&&this.onupdate()},dispatchEvent:function(){var e=new k,t=new k,r=new k,i=new wt,n=new wt,a=new wt,o=new wt,s=new k;return function(l,u,c,h){var f=u.geometry,d=f.attributes.position,v=f.attributes.texcoord0,p=k.dot,m=k.cross;d.get(c[0],e.array),d.get(c[1],t.array),d.get(c[2],r.array),v.get(c[0],i.array),v.get(c[1],n.array),v.get(c[2],a.array),m(s,t,r);var _=p(e,s),x=p(h,s)/_;m(s,r,e);var y=p(h,s)/_;m(s,e,t);var g=p(h,s)/_;wt.scale(o,i,x),wt.scaleAndAdd(o,o,n,y),wt.scaleAndAdd(o,o,a,g);var w=o.x*this._chart.getWidth(),T=o.y*this._chart.getHeight();this._chart.getZr().handler.dispatch(l,{zrX:w,zrY:T})}}(),attachToMesh:function(e){this._meshes.indexOf(e)>=0||(Ia.forEach(function(t){e.on(t,this[Oa(t)],this)},this),this._meshes.push(e))},detachFromMesh:function(e){var t=this._meshes.indexOf(e);t>=0&&this._meshes.splice(t,1),Ia.forEach(function(r){e.off(r,this[Oa(r)])},this)},dispose:function(){this._meshes.forEach(function(e){this.detachFromMesh(e)},this)}};const Dh=Fa;var Mh=ai.extend({left:-1,right:1,near:-1,far:1,top:1,bottom:-1},{updateProjectionMatrix:function(){this.projectionMatrix.ortho(this.left,this.right,this.bottom,this.top,this.near,this.far)},decomposeProjectionMatrix:function(){var e=this.projectionMatrix.array;this.left=(-1-e[12])/e[0],this.right=(1-e[12])/e[0],this.top=(1-e[13])/e[5],this.bottom=(-1-e[13])/e[5],this.near=-(-1-e[14])/e[10],this.far=-(1-e[14])/e[10]},clone:function(){var e=ai.prototype.clone.call(this);return e.left=this.left,e.right=this.right,e.near=this.near,e.far=this.far,e.top=this.top,e.bottom=this.bottom,e}});const oi=Mh,Ph=`
@export clay.compositor.vertex
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
attribute vec3 position : POSITION;
attribute vec2 texcoord : TEXCOORD_0;
varying vec2 v_Texcoord;
void main()
{
 v_Texcoord = texcoord;
 gl_Position = worldViewProjection * vec4(position, 1.0);
}
@end`;V.import(Ph);var Rh=new Xn,es=new Pr({geometry:Rh,frustumCulling:!1}),Nh=new oi,Ih=vt.extend(function(){return{fragment:"",outputs:null,material:null,blendWithPrevious:!1,clearColor:!1,clearDepth:!0}},function(){var e=new V(V.source("clay.compositor.vertex"),this.fragment),t=new Nt({shader:e});t.enableTexturesAll(),this.material=t},{setUniform:function(e,t){this.material.setUniform(e,t)},getUniform:function(e){var t=this.material.uniforms[e];if(t)return t.value},attachOutput:function(e,t){this.outputs||(this.outputs={}),t=t||F.COLOR_ATTACHMENT0,this.outputs[t]=e},detachOutput:function(e){for(var t in this.outputs)this.outputs[t]===e&&(this.outputs[t]=null)},bind:function(e,t){if(this.outputs)for(var r in this.outputs){var i=this.outputs[r];i&&t.attach(i,r)}t&&t.bind(e)},unbind:function(e,t){t.unbind(e)},render:function(e,t){var r=e.gl;if(t){this.bind(e,t);var i=e.getGLExtension("EXT_draw_buffers");if(i&&this.outputs){var n=[];for(var a in this.outputs)a=+a,a>=r.COLOR_ATTACHMENT0&&a<=r.COLOR_ATTACHMENT0+8&&n.push(a);i.drawBuffersEXT(n)}}this.trigger("beforerender",this,e);var o=this.clearDepth?r.DEPTH_BUFFER_BIT:0;if(r.depthMask(!0),this.clearColor){o=o|r.COLOR_BUFFER_BIT,r.colorMask(!0,!0,!0,!0);var s=this.clearColor;Array.isArray(s)&&r.clearColor(s[0],s[1],s[2],s[3])}r.clear(o),this.blendWithPrevious?(r.enable(r.BLEND),this.material.transparent=!0):(r.disable(r.BLEND),this.material.transparent=!1),this.renderQuad(e),this.trigger("afterrender",this,e),t&&this.unbind(e,t)},renderQuad:function(e){es.material=this.material,e.renderPass([es],Nh)},dispose:function(e){}});const je=Ih,Oh=`#define SAMPLE_NUMBER 1024
#define PI 3.14159265358979
uniform sampler2D normalDistribution;
uniform vec2 viewportSize : [512, 256];
const vec3 N = vec3(0.0, 0.0, 1.0);
const float fSampleNumber = float(SAMPLE_NUMBER);
vec3 importanceSampleNormal(float i, float roughness, vec3 N) {
 vec3 H = texture2D(normalDistribution, vec2(roughness, i)).rgb;
 vec3 upVector = abs(N.y) > 0.999 ? vec3(1.0, 0.0, 0.0) : vec3(0.0, 1.0, 0.0);
 vec3 tangentX = normalize(cross(N, upVector));
 vec3 tangentZ = cross(N, tangentX);
 return normalize(tangentX * H.x + N * H.y + tangentZ * H.z);
}
float G_Smith(float roughness, float NoV, float NoL) {
 float k = roughness * roughness / 2.0;
 float G1V = NoV / (NoV * (1.0 - k) + k);
 float G1L = NoL / (NoL * (1.0 - k) + k);
 return G1L * G1V;
}
void main() {
 vec2 uv = gl_FragCoord.xy / viewportSize;
 float NoV = uv.x;
 float roughness = uv.y;
 vec3 V;
 V.x = sqrt(1.0 - NoV * NoV);
 V.y = 0.0;
 V.z = NoV;
 float A = 0.0;
 float B = 0.0;
 for (int i = 0; i < SAMPLE_NUMBER; i++) {
 vec3 H = importanceSampleNormal(float(i) / fSampleNumber, roughness, N);
 vec3 L = reflect(-V, H);
 float NoL = clamp(L.z, 0.0, 1.0);
 float NoH = clamp(H.z, 0.0, 1.0);
 float VoH = clamp(dot(V, H), 0.0, 1.0);
 if (NoL > 0.0) {
 float G = G_Smith(roughness, NoV, NoL);
 float G_Vis = G * VoH / (NoH * NoV);
 float Fc = pow(1.0 - VoH, 5.0);
 A += (1.0 - Fc) * G_Vis;
 B += Fc * G_Vis;
 }
 }
 gl_FragColor = vec4(vec2(A, B) / fSampleNumber, 0.0, 1.0);
}
`,Fh=`#define SHADER_NAME prefilter
#define SAMPLE_NUMBER 1024
#define PI 3.14159265358979
uniform mat4 viewInverse : VIEWINVERSE;
uniform samplerCube environmentMap;
uniform sampler2D normalDistribution;
uniform float roughness : 0.5;
varying vec2 v_Texcoord;
varying vec3 v_WorldPosition;
@import clay.util.rgbm
vec3 importanceSampleNormal(float i, float roughness, vec3 N) {
 vec3 H = texture2D(normalDistribution, vec2(roughness, i)).rgb;
 vec3 upVector = abs(N.y) > 0.999 ? vec3(1.0, 0.0, 0.0) : vec3(0.0, 1.0, 0.0);
 vec3 tangentX = normalize(cross(N, upVector));
 vec3 tangentZ = cross(N, tangentX);
 return normalize(tangentX * H.x + N * H.y + tangentZ * H.z);
}
void main() {
 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(v_WorldPosition - eyePos);
 vec3 N = V;
 vec3 prefilteredColor = vec3(0.0);
 float totalWeight = 0.0;
 float fMaxSampleNumber = float(SAMPLE_NUMBER);
 for (int i = 0; i < SAMPLE_NUMBER; i++) {
 vec3 H = importanceSampleNormal(float(i) / fMaxSampleNumber, roughness, N);
 vec3 L = reflect(-V, H);
 float NoL = clamp(dot(N, L), 0.0, 1.0);
 if (NoL > 0.0) {
 prefilteredColor += decodeHDR(textureCube(environmentMap, L)).rgb * NoL;
 totalWeight += NoL;
 }
 }
 gl_FragColor = encodeHDR(vec4(prefilteredColor / totalWeight, 1.0));
}
`;var Or={},va=["px","nx","py","ny","pz","nz"];Or.prefilterEnvironmentMap=function(e,t,r,i,n){(!n||!i)&&(i=Or.generateNormalDistribution(),n=Or.integrateBRDF(e,i)),r=r||{};var a=r.width||64,o=r.height||64,s=r.type||t.type,l=new Fi({width:a,height:o,type:s,flipY:!1,mipmaps:[]});l.isPowerOfTwo()||console.warn("Width and height must be power of two to enable mipmap.");var u=Math.min(a,o),c=Math.log(u)/Math.log(2)+1,h=new Nt({shader:new V({vertex:V.source("clay.skybox.vertex"),fragment:Fh})});h.set("normalDistribution",i),r.encodeRGBM&&h.define("fragment","RGBM_ENCODE"),r.decodeRGBM&&h.define("fragment","RGBM_DECODE");var f=new xr,d;if(t.textureType==="texture2D"){var v=new Fi({width:a,height:o,type:s===K.FLOAT?K.HALF_FLOAT:s});Ir.panoramaToCubeMap(e,t,v,{encodeRGBM:r.decodeRGBM}),t=v}d=new Bi({scene:f,material:h}),d.material.set("environmentMap",t);var p=new to({texture:l});r.encodeRGBM&&(s=l.type=K.UNSIGNED_BYTE);for(var m=new se({width:a,height:o,type:s}),_=new ot({depthBuffer:!1}),x=$e[s===K.UNSIGNED_BYTE?"Uint8Array":"Float32Array"],y=0;y<c;y++){l.mipmaps[y]={pixels:{}},d.material.set("roughness",y/(c-1));for(var g=m.width,w=2*Math.atan(g/(g-.5))/Math.PI*180,T=0;T<va.length;T++){var b=new x(m.width*m.height*4);_.attach(m),_.bind(e);var S=p.getCamera(va[T]);S.fov=w,e.render(f,S),e.gl.readPixels(0,0,m.width,m.height,K.RGBA,s,b),_.unbind(e),l.mipmaps[y].pixels[va[T]]=b}m.width/=2,m.height/=2,m.dirty()}return _.dispose(e),m.dispose(e),d.dispose(e),i.dispose(e),{environmentMap:l,brdfLookup:n,normalDistribution:i,maxMipmapLevel:c}};Or.integrateBRDF=function(e,t){t=t||Or.generateNormalDistribution();var r=new ot({depthBuffer:!1}),i=new je({fragment:Oh}),n=new se({width:512,height:256,type:K.HALF_FLOAT,wrapS:K.CLAMP_TO_EDGE,wrapT:K.CLAMP_TO_EDGE,minFilter:K.NEAREST,magFilter:K.NEAREST,useMipmap:!1});return i.setUniform("normalDistribution",t),i.setUniform("viewportSize",[512,256]),i.attachOutput(n),i.render(e,r),r.dispose(e),n};Or.generateNormalDistribution=function(r,i){for(var r=r||256,i=i||1024,n=new se({width:r,height:i,type:K.FLOAT,minFilter:K.NEAREST,magFilter:K.NEAREST,wrapS:K.CLAMP_TO_EDGE,wrapT:K.CLAMP_TO_EDGE,useMipmap:!1}),a=new Float32Array(i*r*4),o=[],s=0;s<r;s++){for(var l=s/r,u=l*l,c=0;c<i;c++){var h=(c<<16|c>>>16)>>>0;h=((h&1431655765)<<1|(h&2863311530)>>>1)>>>0,h=((h&858993459)<<2|(h&3435973836)>>>2)>>>0,h=((h&252645135)<<4|(h&4042322160)>>>4)>>>0,h=(((h&16711935)<<8|(h&4278255360)>>>8)>>>0)/4294967296;var f=Math.sqrt((1-h)/(1+(u*u-1)*h));o[c]=f}for(var c=0;c<i;c++){var d=(c*r+s)*4,f=o[c],v=Math.sqrt(1-f*f),p=c/i,m=2*Math.PI*p;a[d]=v*Math.cos(m),a[d+1]=f,a[d+2]=v*Math.sin(m),a[d+3]=1}}return n.pixels=a,n};const wn=Or;var Bh=Ut.extend({cubemap:null,castShadow:!1,_normalDistribution:null,_brdfLookup:null},{type:"AMBIENT_CUBEMAP_LIGHT",prefilter:function(e,t){if(!e.getGLExtension("EXT_shader_texture_lod")){console.warn("Device not support textureCubeLodEXT");return}this._brdfLookup||(this._normalDistribution=wn.generateNormalDistribution(),this._brdfLookup=wn.integrateBRDF(e,this._normalDistribution));var r=this.cubemap;if(!r.__prefiltered){var i=wn.prefilterEnvironmentMap(e,r,{encodeRGBM:!0,width:t,height:t},this._normalDistribution,this._brdfLookup);this.cubemap=i.environmentMap,this.cubemap.__prefiltered=!0,r.dispose(e)}},getBRDFLookup:function(){return this._brdfLookup},uniformTemplates:{ambientCubemapLightColor:{type:"3f",value:function(e){var t=e.color,r=e.intensity;return[t[0]*r,t[1]*r,t[2]*r]}},ambientCubemapLightCubemap:{type:"t",value:function(e){return e.cubemap}},ambientCubemapLightBRDFLookup:{type:"t",value:function(e){return e._brdfLookup}}}});const Uh=Bh;var zh=Ut.extend({castShadow:!1,coefficients:[]},function(){this._coefficientsTmpArr=new $e.Float32Array(9*3)},{type:"AMBIENT_SH_LIGHT",uniformTemplates:{ambientSHLightColor:{type:"3f",value:function(e){var t=e.color,r=e.intensity;return[t[0]*r,t[1]*r,t[2]*r]}},ambientSHLightCoefficients:{type:"3f",value:function(e){for(var t=e._coefficientsTmpArr,r=0;r<e.coefficients.length;r++)t[r]=e.coefficients[r];return t}}}});const Gh=zh;var fl={},Rr=["px","nx","py","ny","pz","nz"];function Vh(e,t){var r=e[0],i=e[1],n=e[2];return t===0?1:t===1?r:t===2?i:t===3?n:t===4?r*n:t===5?i*n:t===6?r*i:t===7?3*n*n-1:r*r-i*i}var Hh={px:[2,1,0,-1,-1,1],nx:[2,1,0,1,-1,-1],py:[0,2,1,1,-1,-1],ny:[0,2,1,1,1,1],pz:[0,1,2,-1,-1,-1],nz:[0,1,2,1,-1,1]};function kh(e,t,r,i){for(var n=new $e.Float32Array(27),a=R.create(),o=R.create(),s=R.create(),l=0;l<9;l++){for(var u=R.create(),c=0;c<Rr.length;c++){for(var h=t[Rr[c]],f=R.create(),d=0,v=0,p=Hh[Rr[c]],m=0;m<i;m++)for(var _=0;_<r;_++){a[0]=_/(r-1)*2-1,a[1]=m/(i-1)*2-1,a[2]=-1,R.normalize(a,a),s[0]=a[p[0]]*p[3],s[1]=a[p[1]]*p[4],s[2]=a[p[2]]*p[5],o[0]=h[v++]/255,o[1]=h[v++]/255,o[2]=h[v++]/255;var x=h[v++]/255*8.12;o[0]*=x,o[1]*=x,o[2]*=x,R.scaleAndAdd(f,f,o,Vh(s,l)*-a[2]),d+=-a[2]}R.scaleAndAdd(u,u,f,1/d)}n[l*3]=u[0]/6,n[l*3+1]=u[1]/6,n[l*3+2]=u[2]/6}return n}fl.projectEnvironmentMap=function(e,t,r){r=r||{},r.lod=r.lod||0;var i,n=new xr,a=64;t.textureType==="texture2D"?i=new Bi({scene:n,environmentMap:t}):(a=t.image&&t.image.px?t.image.px.width:t.width,i=new Bi({scene:n,environmentMap:t}));var o=Math.ceil(a/Math.pow(2,r.lod)),s=Math.ceil(a/Math.pow(2,r.lod)),l=new se({width:o,height:s}),u=new ot;i.material.define("fragment","RGBM_ENCODE"),r.decodeRGBM&&i.material.define("fragment","RGBM_DECODE"),i.material.set("lod",r.lod);for(var c=new to({texture:l}),h={},f=0;f<Rr.length;f++){h[Rr[f]]=new Uint8Array(o*s*4);var d=c.getCamera(Rr[f]);d.fov=90,u.attach(l),u.bind(e),e.render(n,d),e.gl.readPixels(0,0,o,s,K.RGBA,K.UNSIGNED_BYTE,h[Rr[f]]),u.unbind(e)}return i.dispose(e),u.dispose(e),l.dispose(e),kh(e,h,o,s)};const Wh=fl;var Xh={firstNotNull:function(){for(var e=0,t=arguments.length;e<t;e++)if(arguments[e]!=null)return arguments[e]},queryDataIndex:function(e,t){if(t.dataIndexInside!=null)return t.dataIndexInside;if(t.dataIndex!=null)return Xt(t.dataIndex)?go(t.dataIndex,function(r){return e.indexOfRawIndex(r)}):e.indexOfRawIndex(t.dataIndex);if(t.name!=null)return Xt(t.name)?go(t.name,function(r){return e.indexOfName(r)}):e.indexOfName(t.name)}};const ce=Xh;var $h=ye.extend({dynamic:!1,widthSegments:40,heightSegments:20,phiStart:0,phiLength:Math.PI*2,thetaStart:0,thetaLength:Math.PI,radius:1},function(){this.build()},{build:function(){var e=this.heightSegments,t=this.widthSegments,r=this.attributes.position,i=this.attributes.texcoord0,n=this.attributes.normal,a=(t+1)*(e+1);r.init(a),i.init(a),n.init(a);var o=a>65535?Uint32Array:Uint16Array,s=this.indices=new o(t*e*6),l,u,c,h,f,d,v,y=this.radius,p=this.phiStart,m=this.phiLength,_=this.thetaStart,x=this.thetaLength,y=this.radius,g=[],w=[],T=0,b=1/y;for(v=0;v<=e;v++)for(d=0;d<=t;d++)h=d/t,f=v/e,l=-y*Math.cos(p+h*m)*Math.sin(_+f*x),u=y*Math.cos(_+f*x),c=y*Math.sin(p+h*m)*Math.sin(_+f*x),g[0]=l,g[1]=u,g[2]=c,w[0]=h,w[1]=f,r.set(T,g),i.set(T,w),g[0]*=b,g[1]*=b,g[2]*=b,n.set(T,g),T++;var S,C,L,A,M=t+1,P=0;for(v=0;v<e;v++)for(d=0;d<t;d++)C=v*M+d,S=v*M+d+1,A=(v+1)*M+d+1,L=(v+1)*M+d,s[P++]=S,s[P++]=C,s[P++]=A,s[P++]=C,s[P++]=L,s[P++]=A;this.boundingBox=new ht,this.boundingBox.max.set(y,y,y),this.boundingBox.min.set(-y,-y,-y)}});const jh=$h;var Zh=Ut.extend({castShadow:!1},{type:"AMBIENT_LIGHT",uniformTemplates:{ambientLightColor:{type:"3f",value:function(e){var t=e.color,r=e.intensity;return[t[0]*r,t[1]*r,t[2]*r]}}}});const Yh=Zh;var qh=Ut.extend({shadowBias:.001,shadowSlopeScale:2,shadowCascade:1,cascadeSplitLogFactor:.2},{type:"DIRECTIONAL_LIGHT",uniformTemplates:{directionalLightDirection:{type:"3f",value:function(e){return e.__dir=e.__dir||new k,e.__dir.copy(e.worldTransform.z).normalize().negate().array}},directionalLightColor:{type:"3f",value:function(e){var t=e.color,r=e.intensity;return[t[0]*r,t[1]*r,t[2]*r]}}},clone:function(){var e=Ut.prototype.clone.call(this);return e.shadowBias=this.shadowBias,e.shadowSlopeScale=this.shadowSlopeScale,e}});const Kh=qh;var Qh=Ut.extend({range:100,castShadow:!1},{type:"POINT_LIGHT",uniformTemplates:{pointLightPosition:{type:"3f",value:function(e){return e.getWorldPosition().array}},pointLightRange:{type:"1f",value:function(e){return e.range}},pointLightColor:{type:"3f",value:function(e){var t=e.color,r=e.intensity;return[t[0]*r,t[1]*r,t[2]*r]}}},clone:function(){var e=Ut.prototype.clone.call(this);return e.range=this.range,e}});const Jh=Qh;var ef=Ut.extend({range:20,umbraAngle:30,penumbraAngle:45,falloffFactor:2,shadowBias:.001,shadowSlopeScale:2},{type:"SPOT_LIGHT",uniformTemplates:{spotLightPosition:{type:"3f",value:function(e){return e.getWorldPosition().array}},spotLightRange:{type:"1f",value:function(e){return e.range}},spotLightUmbraAngleCosine:{type:"1f",value:function(e){return Math.cos(e.umbraAngle*Math.PI/180)}},spotLightPenumbraAngleCosine:{type:"1f",value:function(e){return Math.cos(e.penumbraAngle*Math.PI/180)}},spotLightFalloffFactor:{type:"1f",value:function(e){return e.falloffFactor}},spotLightDirection:{type:"3f",value:function(e){return e.__dir=e.__dir||new k,e.__dir.copy(e.worldTransform.z).negate().array}},spotLightColor:{type:"3f",value:function(e){var t=e.color,r=e.intensity;return[t[0]*r,t[1]*r,t[2]*r]}}},clone:function(){var e=Ut.prototype.clone.call(this);return e.range=this.range,e.umbraAngle=this.umbraAngle,e.penumbraAngle=this.penumbraAngle,e.falloffFactor=this.falloffFactor,e.shadowBias=this.shadowBias,e.shadowSlopeScale=this.shadowSlopeScale,e}});const tf=ef;var ge=function(e,t,r,i){e=e||0,t=t||0,r=r||0,i=i||0,this.array=Z.fromValues(e,t,r,i),this._dirty=!0};ge.prototype={constructor:ge,add:function(e){return Z.add(this.array,this.array,e.array),this._dirty=!0,this},set:function(e,t,r,i){return this.array[0]=e,this.array[1]=t,this.array[2]=r,this.array[3]=i,this._dirty=!0,this},setArray:function(e){return this.array[0]=e[0],this.array[1]=e[1],this.array[2]=e[2],this.array[3]=e[3],this._dirty=!0,this},clone:function(){return new ge(this.x,this.y,this.z,this.w)},copy:function(e){return Z.copy(this.array,e.array),this._dirty=!0,this},dist:function(e){return Z.dist(this.array,e.array)},distance:function(e){return Z.distance(this.array,e.array)},div:function(e){return Z.div(this.array,this.array,e.array),this._dirty=!0,this},divide:function(e){return Z.divide(this.array,this.array,e.array),this._dirty=!0,this},dot:function(e){return Z.dot(this.array,e.array)},len:function(){return Z.len(this.array)},length:function(){return Z.length(this.array)},lerp:function(e,t,r){return Z.lerp(this.array,e.array,t.array,r),this._dirty=!0,this},min:function(e){return Z.min(this.array,this.array,e.array),this._dirty=!0,this},max:function(e){return Z.max(this.array,this.array,e.array),this._dirty=!0,this},mul:function(e){return Z.mul(this.array,this.array,e.array),this._dirty=!0,this},multiply:function(e){return Z.multiply(this.array,this.array,e.array),this._dirty=!0,this},negate:function(){return Z.negate(this.array,this.array),this._dirty=!0,this},normalize:function(){return Z.normalize(this.array,this.array),this._dirty=!0,this},random:function(e){return Z.random(this.array,e),this._dirty=!0,this},scale:function(e){return Z.scale(this.array,this.array,e),this._dirty=!0,this},scaleAndAdd:function(e,t){return Z.scaleAndAdd(this.array,this.array,e.array,t),this._dirty=!0,this},sqrDist:function(e){return Z.sqrDist(this.array,e.array)},squaredDistance:function(e){return Z.squaredDistance(this.array,e.array)},sqrLen:function(){return Z.sqrLen(this.array)},squaredLength:function(){return Z.squaredLength(this.array)},sub:function(e){return Z.sub(this.array,this.array,e.array),this._dirty=!0,this},subtract:function(e){return Z.subtract(this.array,this.array,e.array),this._dirty=!0,this},transformMat4:function(e){return Z.transformMat4(this.array,this.array,e.array),this._dirty=!0,this},transformQuat:function(e){return Z.transformQuat(this.array,this.array,e.array),this._dirty=!0,this},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};var bi=Object.defineProperty;if(bi){var ln=ge.prototype;bi(ln,"x",{get:function(){return this.array[0]},set:function(e){this.array[0]=e,this._dirty=!0}}),bi(ln,"y",{get:function(){return this.array[1]},set:function(e){this.array[1]=e,this._dirty=!0}}),bi(ln,"z",{get:function(){return this.array[2]},set:function(e){this.array[2]=e,this._dirty=!0}}),bi(ln,"w",{get:function(){return this.array[3]},set:function(e){this.array[3]=e,this._dirty=!0}})}ge.add=function(e,t,r){return Z.add(e.array,t.array,r.array),e._dirty=!0,e};ge.set=function(e,t,r,i,n){Z.set(e.array,t,r,i,n),e._dirty=!0};ge.copy=function(e,t){return Z.copy(e.array,t.array),e._dirty=!0,e};ge.dist=function(e,t){return Z.distance(e.array,t.array)};ge.distance=ge.dist;ge.div=function(e,t,r){return Z.divide(e.array,t.array,r.array),e._dirty=!0,e};ge.divide=ge.div;ge.dot=function(e,t){return Z.dot(e.array,t.array)};ge.len=function(e){return Z.length(e.array)};ge.lerp=function(e,t,r,i){return Z.lerp(e.array,t.array,r.array,i),e._dirty=!0,e};ge.min=function(e,t,r){return Z.min(e.array,t.array,r.array),e._dirty=!0,e};ge.max=function(e,t,r){return Z.max(e.array,t.array,r.array),e._dirty=!0,e};ge.mul=function(e,t,r){return Z.multiply(e.array,t.array,r.array),e._dirty=!0,e};ge.multiply=ge.mul;ge.negate=function(e,t){return Z.negate(e.array,t.array),e._dirty=!0,e};ge.normalize=function(e,t){return Z.normalize(e.array,t.array),e._dirty=!0,e};ge.random=function(e,t){return Z.random(e.array,t),e._dirty=!0,e};ge.scale=function(e,t,r){return Z.scale(e.array,t.array,r),e._dirty=!0,e};ge.scaleAndAdd=function(e,t,r,i){return Z.scaleAndAdd(e.array,t.array,r.array,i),e._dirty=!0,e};ge.sqrDist=function(e,t){return Z.sqrDist(e.array,t.array)};ge.squaredDistance=ge.sqrDist;ge.sqrLen=function(e){return Z.sqrLen(e.array)};ge.squaredLength=ge.sqrLen;ge.sub=function(e,t,r){return Z.subtract(e.array,t.array,r.array),e._dirty=!0,e};ge.subtract=ge.sub;ge.transformMat4=function(e,t,r){return Z.transformMat4(e.array,t.array,r.array),e._dirty=!0,e};ge.transformQuat=function(e,t,r){return Z.transformQuat(e.array,t.array,r.array),e._dirty=!0,e};const rf=ge;var ut={};ut.create=function(){var e=new lt(4);return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e};ut.clone=function(e){var t=new lt(4);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t};ut.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e};ut.identity=function(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e};ut.transpose=function(e,t){if(e===t){var r=t[1];e[1]=t[2],e[2]=r}else e[0]=t[0],e[1]=t[2],e[2]=t[1],e[3]=t[3];return e};ut.invert=function(e,t){var r=t[0],i=t[1],n=t[2],a=t[3],o=r*a-n*i;return o?(o=1/o,e[0]=a*o,e[1]=-i*o,e[2]=-n*o,e[3]=r*o,e):null};ut.adjoint=function(e,t){var r=t[0];return e[0]=t[3],e[1]=-t[1],e[2]=-t[2],e[3]=r,e};ut.determinant=function(e){return e[0]*e[3]-e[2]*e[1]};ut.multiply=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[3],s=r[0],l=r[1],u=r[2],c=r[3];return e[0]=i*s+a*l,e[1]=n*s+o*l,e[2]=i*u+a*c,e[3]=n*u+o*c,e};ut.mul=ut.multiply;ut.rotate=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[3],s=Math.sin(r),l=Math.cos(r);return e[0]=i*l+a*s,e[1]=n*l+o*s,e[2]=i*-s+a*l,e[3]=n*-s+o*l,e};ut.scale=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[3],s=r[0],l=r[1];return e[0]=i*s,e[1]=n*s,e[2]=a*l,e[3]=o*l,e};ut.frob=function(e){return Math.sqrt(Math.pow(e[0],2)+Math.pow(e[1],2)+Math.pow(e[2],2)+Math.pow(e[3],2))};ut.LDU=function(e,t,r,i){return e[2]=i[2]/i[0],r[0]=i[0],r[1]=i[1],r[3]=i[3]-e[2]*r[1],[e,t,r]};const Ve=ut;var dt=function(){this.array=Ve.create(),this._dirty=!0};dt.prototype={constructor:dt,setArray:function(e){for(var t=0;t<this.array.length;t++)this.array[t]=e[t];return this._dirty=!0,this},clone:function(){return new dt().copy(this)},copy:function(e){return Ve.copy(this.array,e.array),this._dirty=!0,this},adjoint:function(){return Ve.adjoint(this.array,this.array),this._dirty=!0,this},determinant:function(){return Ve.determinant(this.array)},identity:function(){return Ve.identity(this.array),this._dirty=!0,this},invert:function(){return Ve.invert(this.array,this.array),this._dirty=!0,this},mul:function(e){return Ve.mul(this.array,this.array,e.array),this._dirty=!0,this},mulLeft:function(e){return Ve.mul(this.array,e.array,this.array),this._dirty=!0,this},multiply:function(e){return Ve.multiply(this.array,this.array,e.array),this._dirty=!0,this},multiplyLeft:function(e){return Ve.multiply(this.array,e.array,this.array),this._dirty=!0,this},rotate:function(e){return Ve.rotate(this.array,this.array,e),this._dirty=!0,this},scale:function(e){return Ve.scale(this.array,this.array,e.array),this._dirty=!0,this},transpose:function(){return Ve.transpose(this.array,this.array),this._dirty=!0,this},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};dt.adjoint=function(e,t){return Ve.adjoint(e.array,t.array),e._dirty=!0,e};dt.copy=function(e,t){return Ve.copy(e.array,t.array),e._dirty=!0,e};dt.determinant=function(e){return Ve.determinant(e.array)};dt.identity=function(e){return Ve.identity(e.array),e._dirty=!0,e};dt.invert=function(e,t){return Ve.invert(e.array,t.array),e._dirty=!0,e};dt.mul=function(e,t,r){return Ve.mul(e.array,t.array,r.array),e._dirty=!0,e};dt.multiply=dt.mul;dt.rotate=function(e,t,r){return Ve.rotate(e.array,t.array,r),e._dirty=!0,e};dt.scale=function(e,t,r){return Ve.scale(e.array,t.array,r.array),e._dirty=!0,e};dt.transpose=function(e,t){return Ve.transpose(e.array,t.array),e._dirty=!0,e};const nf=dt;var Tt={};Tt.create=function(){var e=new lt(6);return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e[4]=0,e[5]=0,e};Tt.clone=function(e){var t=new lt(6);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t};Tt.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e};Tt.identity=function(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e[4]=0,e[5]=0,e};Tt.invert=function(e,t){var r=t[0],i=t[1],n=t[2],a=t[3],o=t[4],s=t[5],l=r*a-i*n;return l?(l=1/l,e[0]=a*l,e[1]=-i*l,e[2]=-n*l,e[3]=r*l,e[4]=(n*s-a*o)*l,e[5]=(i*o-r*s)*l,e):null};Tt.determinant=function(e){return e[0]*e[3]-e[1]*e[2]};Tt.multiply=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[3],s=t[4],l=t[5],u=r[0],c=r[1],h=r[2],f=r[3],d=r[4],v=r[5];return e[0]=i*u+a*c,e[1]=n*u+o*c,e[2]=i*h+a*f,e[3]=n*h+o*f,e[4]=i*d+a*v+s,e[5]=n*d+o*v+l,e};Tt.mul=Tt.multiply;Tt.rotate=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[3],s=t[4],l=t[5],u=Math.sin(r),c=Math.cos(r);return e[0]=i*c+a*u,e[1]=n*c+o*u,e[2]=i*-u+a*c,e[3]=n*-u+o*c,e[4]=s,e[5]=l,e};Tt.scale=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[3],s=t[4],l=t[5],u=r[0],c=r[1];return e[0]=i*u,e[1]=n*u,e[2]=a*c,e[3]=o*c,e[4]=s,e[5]=l,e};Tt.translate=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[3],s=t[4],l=t[5],u=r[0],c=r[1];return e[0]=i,e[1]=n,e[2]=a,e[3]=o,e[4]=i*u+a*c+s,e[5]=n*u+o*c+l,e};Tt.frob=function(e){return Math.sqrt(Math.pow(e[0],2)+Math.pow(e[1],2)+Math.pow(e[2],2)+Math.pow(e[3],2)+Math.pow(e[4],2)+Math.pow(e[5],2)+1)};const Xe=Tt;var xt=function(){this.array=Xe.create(),this._dirty=!0};xt.prototype={constructor:xt,setArray:function(e){for(var t=0;t<this.array.length;t++)this.array[t]=e[t];return this._dirty=!0,this},clone:function(){return new xt().copy(this)},copy:function(e){return Xe.copy(this.array,e.array),this._dirty=!0,this},determinant:function(){return Xe.determinant(this.array)},identity:function(){return Xe.identity(this.array),this._dirty=!0,this},invert:function(){return Xe.invert(this.array,this.array),this._dirty=!0,this},mul:function(e){return Xe.mul(this.array,this.array,e.array),this._dirty=!0,this},mulLeft:function(e){return Xe.mul(this.array,e.array,this.array),this._dirty=!0,this},multiply:function(e){return Xe.multiply(this.array,this.array,e.array),this._dirty=!0,this},multiplyLeft:function(e){return Xe.multiply(this.array,e.array,this.array),this._dirty=!0,this},rotate:function(e){return Xe.rotate(this.array,this.array,e),this._dirty=!0,this},scale:function(e){return Xe.scale(this.array,this.array,e.array),this._dirty=!0,this},translate:function(e){return Xe.translate(this.array,this.array,e.array),this._dirty=!0,this},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};xt.copy=function(e,t){return Xe.copy(e.array,t.array),e._dirty=!0,e};xt.determinant=function(e){return Xe.determinant(e.array)};xt.identity=function(e){return Xe.identity(e.array),e._dirty=!0,e};xt.invert=function(e,t){return Xe.invert(e.array,t.array),e._dirty=!0,e};xt.mul=function(e,t,r){return Xe.mul(e.array,t.array,r.array),e._dirty=!0,e};xt.multiply=xt.mul;xt.rotate=function(e,t,r){return Xe.rotate(e.array,t.array,r),e._dirty=!0,e};xt.scale=function(e,t,r){return Xe.scale(e.array,t.array,r.array),e._dirty=!0,e};xt.translate=function(e,t,r){return Xe.translate(e.array,t.array,r.array),e._dirty=!0,e};const af=xt;var Ke=function(){this.array=me.create(),this._dirty=!0};Ke.prototype={constructor:Ke,setArray:function(e){for(var t=0;t<this.array.length;t++)this.array[t]=e[t];return this._dirty=!0,this},adjoint:function(){return me.adjoint(this.array,this.array),this._dirty=!0,this},clone:function(){return new Ke().copy(this)},copy:function(e){return me.copy(this.array,e.array),this._dirty=!0,this},determinant:function(){return me.determinant(this.array)},fromMat2d:function(e){return me.fromMat2d(this.array,e.array),this._dirty=!0,this},fromMat4:function(e){return me.fromMat4(this.array,e.array),this._dirty=!0,this},fromQuat:function(e){return me.fromQuat(this.array,e.array),this._dirty=!0,this},identity:function(){return me.identity(this.array),this._dirty=!0,this},invert:function(){return me.invert(this.array,this.array),this._dirty=!0,this},mul:function(e){return me.mul(this.array,this.array,e.array),this._dirty=!0,this},mulLeft:function(e){return me.mul(this.array,e.array,this.array),this._dirty=!0,this},multiply:function(e){return me.multiply(this.array,this.array,e.array),this._dirty=!0,this},multiplyLeft:function(e){return me.multiply(this.array,e.array,this.array),this._dirty=!0,this},rotate:function(e){return me.rotate(this.array,this.array,e),this._dirty=!0,this},scale:function(e){return me.scale(this.array,this.array,e.array),this._dirty=!0,this},translate:function(e){return me.translate(this.array,this.array,e.array),this._dirty=!0,this},normalFromMat4:function(e){return me.normalFromMat4(this.array,e.array),this._dirty=!0,this},transpose:function(){return me.transpose(this.array,this.array),this._dirty=!0,this},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};Ke.adjoint=function(e,t){return me.adjoint(e.array,t.array),e._dirty=!0,e};Ke.copy=function(e,t){return me.copy(e.array,t.array),e._dirty=!0,e};Ke.determinant=function(e){return me.determinant(e.array)};Ke.identity=function(e){return me.identity(e.array),e._dirty=!0,e};Ke.invert=function(e,t){return me.invert(e.array,t.array),e};Ke.mul=function(e,t,r){return me.mul(e.array,t.array,r.array),e._dirty=!0,e};Ke.multiply=Ke.mul;Ke.fromMat2d=function(e,t){return me.fromMat2d(e.array,t.array),e._dirty=!0,e};Ke.fromMat4=function(e,t){return me.fromMat4(e.array,t.array),e._dirty=!0,e};Ke.fromQuat=function(e,t){return me.fromQuat(e.array,t.array),e._dirty=!0,e};Ke.normalFromMat4=function(e,t){return me.normalFromMat4(e.array,t.array),e._dirty=!0,e};Ke.rotate=function(e,t,r){return me.rotate(e.array,t.array,r),e._dirty=!0,e};Ke.scale=function(e,t,r){return me.scale(e.array,t.array,r.array),e._dirty=!0,e};Ke.transpose=function(e,t){return me.transpose(e.array,t.array),e._dirty=!0,e};Ke.translate=function(e,t,r){return me.translate(e.array,t.array,r.array),e._dirty=!0,e};const of=Ke;var sf={_animators:null,getAnimators:function(){return this._animators=this._animators||[],this._animators},animate:function(e,t){this._animators=this._animators||[];var r=this,i;if(e){for(var n=e.split("."),a=r,o=0,s=n.length;o<s;o++)a&&(a=a[n[o]]);a&&(i=a)}else i=r;if(i==null)throw new Error("Target "+e+" not exists");var l=this._animators,u=new gu(i,t),c=this;return u.during(function(){c.__zr&&c.__zr.refresh()}).done(function(){var h=l.indexOf(u);h>=0&&l.splice(h,1)}),l.push(u),this.__zr&&this.__zr.animation.addAnimator(u),u},stopAnimation:function(e){this._animators=this._animators||[];for(var t=this._animators,r=t.length,i=0;i<r;i++)t[i].stop(e);return t.length=0,this},addAnimatorsToZr:function(e){if(this._animators)for(var t=0;t<this._animators.length;t++)e.animation.addAnimator(this._animators[t])},removeAnimatorsFromZr:function(e){if(this._animators)for(var t=0;t<this._animators.length;t++)e.animation.removeAnimator(this._animators[t])}};const lf=sf,dl=`
@export clay.util.rand
highp float rand(vec2 uv) {
 const highp float a = 12.9898, b = 78.233, c = 43758.5453;
 highp float dt = dot(uv.xy, vec2(a,b)), sn = mod(dt, 3.141592653589793);
 return fract(sin(sn) * c);
}
@end
@export clay.util.calculate_attenuation
uniform float attenuationFactor : 5.0;
float lightAttenuation(float dist, float range)
{
 float attenuation = 1.0;
 attenuation = dist*dist/(range*range+1.0);
 float att_s = attenuationFactor;
 attenuation = 1.0/(attenuation*att_s+1.0);
 att_s = 1.0/(att_s+1.0);
 attenuation = attenuation - att_s;
 attenuation /= 1.0 - att_s;
 return clamp(attenuation, 0.0, 1.0);
}
@end
@export clay.util.edge_factor
#ifdef SUPPORT_STANDARD_DERIVATIVES
float edgeFactor(float width)
{
 vec3 d = fwidth(v_Barycentric);
 vec3 a3 = smoothstep(vec3(0.0), d * width, v_Barycentric);
 return min(min(a3.x, a3.y), a3.z);
}
#else
float edgeFactor(float width)
{
 return 1.0;
}
#endif
@end
@export clay.util.encode_float
vec4 encodeFloat(const in float depth)
{
 const vec4 bitShifts = vec4(256.0*256.0*256.0, 256.0*256.0, 256.0, 1.0);
 const vec4 bit_mask = vec4(0.0, 1.0/256.0, 1.0/256.0, 1.0/256.0);
 vec4 res = fract(depth * bitShifts);
 res -= res.xxyz * bit_mask;
 return res;
}
@end
@export clay.util.decode_float
float decodeFloat(const in vec4 color)
{
 const vec4 bitShifts = vec4(1.0/(256.0*256.0*256.0), 1.0/(256.0*256.0), 1.0/256.0, 1.0);
 return dot(color, bitShifts);
}
@end
@export clay.util.float
@import clay.util.encode_float
@import clay.util.decode_float
@end
@export clay.util.rgbm_decode
vec3 RGBMDecode(vec4 rgbm, float range) {
 return range * rgbm.rgb * rgbm.a;
}
@end
@export clay.util.rgbm_encode
vec4 RGBMEncode(vec3 color, float range) {
 if (dot(color, color) == 0.0) {
 return vec4(0.0);
 }
 vec4 rgbm;
 color /= range;
 rgbm.a = clamp(max(max(color.r, color.g), max(color.b, 1e-6)), 0.0, 1.0);
 rgbm.a = ceil(rgbm.a * 255.0) / 255.0;
 rgbm.rgb = color / rgbm.a;
 return rgbm;
}
@end
@export clay.util.rgbm
@import clay.util.rgbm_decode
@import clay.util.rgbm_encode
vec4 decodeHDR(vec4 color)
{
#if defined(RGBM_DECODE) || defined(RGBM)
 return vec4(RGBMDecode(color, 8.12), 1.0);
#else
 return color;
#endif
}
vec4 encodeHDR(vec4 color)
{
#if defined(RGBM_ENCODE) || defined(RGBM)
 return RGBMEncode(color.xyz, 8.12);
#else
 return color;
#endif
}
@end
@export clay.util.srgb
vec4 sRGBToLinear(in vec4 value) {
 return vec4(mix(pow(value.rgb * 0.9478672986 + vec3(0.0521327014), vec3(2.4)), value.rgb * 0.0773993808, vec3(lessThanEqual(value.rgb, vec3(0.04045)))), value.w);
}
vec4 linearTosRGB(in vec4 value) {
 return vec4(mix(pow(value.rgb, vec3(0.41666)) * 1.055 - vec3(0.055), value.rgb * 12.92, vec3(lessThanEqual(value.rgb, vec3(0.0031308)))), value.w);
}
@end
@export clay.chunk.skinning_header
#ifdef SKINNING
attribute vec3 weight : WEIGHT;
attribute vec4 joint : JOINT;
#ifdef USE_SKIN_MATRICES_TEXTURE
uniform sampler2D skinMatricesTexture : ignore;
uniform float skinMatricesTextureSize: ignore;
mat4 getSkinMatrix(sampler2D tex, float idx) {
 float j = idx * 4.0;
 float x = mod(j, skinMatricesTextureSize);
 float y = floor(j / skinMatricesTextureSize) + 0.5;
 vec2 scale = vec2(skinMatricesTextureSize);
 return mat4(
 texture2D(tex, vec2(x + 0.5, y) / scale),
 texture2D(tex, vec2(x + 1.5, y) / scale),
 texture2D(tex, vec2(x + 2.5, y) / scale),
 texture2D(tex, vec2(x + 3.5, y) / scale)
 );
}
mat4 getSkinMatrix(float idx) {
 return getSkinMatrix(skinMatricesTexture, idx);
}
#else
uniform mat4 skinMatrix[JOINT_COUNT] : SKIN_MATRIX;
mat4 getSkinMatrix(float idx) {
 return skinMatrix[int(idx)];
}
#endif
#endif
@end
@export clay.chunk.skin_matrix
mat4 skinMatrixWS = getSkinMatrix(joint.x) * weight.x;
if (weight.y > 1e-4)
{
 skinMatrixWS += getSkinMatrix(joint.y) * weight.y;
}
if (weight.z > 1e-4)
{
 skinMatrixWS += getSkinMatrix(joint.z) * weight.z;
}
float weightW = 1.0-weight.x-weight.y-weight.z;
if (weightW > 1e-4)
{
 skinMatrixWS += getSkinMatrix(joint.w) * weightW;
}
@end
@export clay.chunk.instancing_header
#ifdef INSTANCING
attribute vec4 instanceMat1;
attribute vec4 instanceMat2;
attribute vec4 instanceMat3;
#endif
@end
@export clay.chunk.instancing_matrix
mat4 instanceMat = mat4(
 vec4(instanceMat1.xyz, 0.0),
 vec4(instanceMat2.xyz, 0.0),
 vec4(instanceMat3.xyz, 0.0),
 vec4(instanceMat1.w, instanceMat2.w, instanceMat3.w, 1.0)
);
@end
@export clay.util.parallax_correct
vec3 parallaxCorrect(in vec3 dir, in vec3 pos, in vec3 boxMin, in vec3 boxMax) {
 vec3 first = (boxMax - pos) / dir;
 vec3 second = (boxMin - pos) / dir;
 vec3 further = max(first, second);
 float dist = min(further.x, min(further.y, further.z));
 vec3 fixedPos = pos + dir * dist;
 vec3 boxCenter = (boxMax + boxMin) * 0.5;
 return normalize(fixedPos - boxCenter);
}
@end
@export clay.util.clamp_sample
vec4 clampSample(const in sampler2D texture, const in vec2 coord)
{
#ifdef STEREO
 float eye = step(0.5, coord.x) * 0.5;
 vec2 coordClamped = clamp(coord, vec2(eye, 0.0), vec2(0.5 + eye, 1.0));
#else
 vec2 coordClamped = clamp(coord, vec2(0.0), vec2(1.0));
#endif
 return texture2D(texture, coordClamped);
}
@end
@export clay.util.ACES
vec3 ACESToneMapping(vec3 color)
{
 const float A = 2.51;
 const float B = 0.03;
 const float C = 2.43;
 const float D = 0.59;
 const float E = 0.14;
 return (color * (A * color + B)) / (color * (C * color + D) + E);
}
@end`,uf=`
@export ecgl.common.transformUniforms
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform mat4 worldInverseTranspose : WORLDINVERSETRANSPOSE;
uniform mat4 world : WORLD;
@end

@export ecgl.common.attributes
attribute vec3 position : POSITION;
attribute vec2 texcoord : TEXCOORD_0;
attribute vec3 normal : NORMAL;
@end

@export ecgl.common.uv.header
uniform vec2 uvRepeat : [1.0, 1.0];
uniform vec2 uvOffset : [0.0, 0.0];
uniform vec2 detailUvRepeat : [1.0, 1.0];
uniform vec2 detailUvOffset : [0.0, 0.0];

varying vec2 v_Texcoord;
varying vec2 v_DetailTexcoord;
@end

@export ecgl.common.uv.main
v_Texcoord = texcoord * uvRepeat + uvOffset;
v_DetailTexcoord = texcoord * detailUvRepeat + detailUvOffset;
@end

@export ecgl.common.uv.fragmentHeader
varying vec2 v_Texcoord;
varying vec2 v_DetailTexcoord;
@end


@export ecgl.common.albedo.main

 vec4 albedoTexel = vec4(1.0);
#ifdef DIFFUSEMAP_ENABLED
 albedoTexel = texture2D(diffuseMap, v_Texcoord);
 #ifdef SRGB_DECODE
 albedoTexel = sRGBToLinear(albedoTexel);
 #endif
#endif

#ifdef DETAILMAP_ENABLED
 vec4 detailTexel = texture2D(detailMap, v_DetailTexcoord);
 #ifdef SRGB_DECODE
 detailTexel = sRGBToLinear(detailTexel);
 #endif
 albedoTexel.rgb = mix(albedoTexel.rgb, detailTexel.rgb, detailTexel.a);
 albedoTexel.a = detailTexel.a + (1.0 - detailTexel.a) * albedoTexel.a;
#endif

@end

@export ecgl.common.wireframe.vertexHeader

#ifdef WIREFRAME_QUAD
attribute vec4 barycentric;
varying vec4 v_Barycentric;
#elif defined(WIREFRAME_TRIANGLE)
attribute vec3 barycentric;
varying vec3 v_Barycentric;
#endif

@end

@export ecgl.common.wireframe.vertexMain

#if defined(WIREFRAME_QUAD) || defined(WIREFRAME_TRIANGLE)
 v_Barycentric = barycentric;
#endif

@end


@export ecgl.common.wireframe.fragmentHeader

uniform float wireframeLineWidth : 1;
uniform vec4 wireframeLineColor: [0, 0, 0, 0.5];

#ifdef WIREFRAME_QUAD
varying vec4 v_Barycentric;
float edgeFactor () {
 vec4 d = fwidth(v_Barycentric);
 vec4 a4 = smoothstep(vec4(0.0), d * wireframeLineWidth, v_Barycentric);
 return min(min(min(a4.x, a4.y), a4.z), a4.w);
}
#elif defined(WIREFRAME_TRIANGLE)
varying vec3 v_Barycentric;
float edgeFactor () {
 vec3 d = fwidth(v_Barycentric);
 vec3 a3 = smoothstep(vec3(0.0), d * wireframeLineWidth, v_Barycentric);
 return min(min(a3.x, a3.y), a3.z);
}
#endif

@end


@export ecgl.common.wireframe.fragmentMain

#if defined(WIREFRAME_QUAD) || defined(WIREFRAME_TRIANGLE)
 if (wireframeLineWidth > 0.) {
 vec4 lineColor = wireframeLineColor;
#ifdef SRGB_DECODE
 lineColor = sRGBToLinear(lineColor);
#endif

 gl_FragColor.rgb = mix(gl_FragColor.rgb, lineColor.rgb, (1.0 - edgeFactor()) * lineColor.a);
 }
#endif
@end




@export ecgl.common.bumpMap.header

#ifdef BUMPMAP_ENABLED
uniform sampler2D bumpMap;
uniform float bumpScale : 1.0;


vec3 bumpNormal(vec3 surfPos, vec3 surfNormal, vec3 baseNormal)
{
 vec2 dSTdx = dFdx(v_Texcoord);
 vec2 dSTdy = dFdy(v_Texcoord);

 float Hll = bumpScale * texture2D(bumpMap, v_Texcoord).x;
 float dHx = bumpScale * texture2D(bumpMap, v_Texcoord + dSTdx).x - Hll;
 float dHy = bumpScale * texture2D(bumpMap, v_Texcoord + dSTdy).x - Hll;

 vec3 vSigmaX = dFdx(surfPos);
 vec3 vSigmaY = dFdy(surfPos);
 vec3 vN = surfNormal;

 vec3 R1 = cross(vSigmaY, vN);
 vec3 R2 = cross(vN, vSigmaX);

 float fDet = dot(vSigmaX, R1);

 vec3 vGrad = sign(fDet) * (dHx * R1 + dHy * R2);
 return normalize(abs(fDet) * baseNormal - vGrad);

}
#endif

@end

@export ecgl.common.normalMap.vertexHeader

#ifdef NORMALMAP_ENABLED
attribute vec4 tangent : TANGENT;
varying vec3 v_Tangent;
varying vec3 v_Bitangent;
#endif

@end

@export ecgl.common.normalMap.vertexMain

#ifdef NORMALMAP_ENABLED
 if (dot(tangent, tangent) > 0.0) {
 v_Tangent = normalize((worldInverseTranspose * vec4(tangent.xyz, 0.0)).xyz);
 v_Bitangent = normalize(cross(v_Normal, v_Tangent) * tangent.w);
 }
#endif

@end


@export ecgl.common.normalMap.fragmentHeader

#ifdef NORMALMAP_ENABLED
uniform sampler2D normalMap;
varying vec3 v_Tangent;
varying vec3 v_Bitangent;
#endif

@end

@export ecgl.common.normalMap.fragmentMain
#ifdef NORMALMAP_ENABLED
 if (dot(v_Tangent, v_Tangent) > 0.0) {
 vec3 normalTexel = texture2D(normalMap, v_DetailTexcoord).xyz;
 if (dot(normalTexel, normalTexel) > 0.0) { N = normalTexel * 2.0 - 1.0;
 mat3 tbn = mat3(v_Tangent, v_Bitangent, v_Normal);
 N = normalize(tbn * N);
 }
 }
#endif
@end



@export ecgl.common.vertexAnimation.header

#ifdef VERTEX_ANIMATION
attribute vec3 prevPosition;
attribute vec3 prevNormal;
uniform float percent;
#endif

@end

@export ecgl.common.vertexAnimation.main

#ifdef VERTEX_ANIMATION
 vec3 pos = mix(prevPosition, position, percent);
 vec3 norm = mix(prevNormal, normal, percent);
#else
 vec3 pos = position;
 vec3 norm = normal;
#endif

@end


@export ecgl.common.ssaoMap.header
#ifdef SSAOMAP_ENABLED
uniform sampler2D ssaoMap;
uniform vec4 viewport : VIEWPORT;
#endif
@end

@export ecgl.common.ssaoMap.main
 float ao = 1.0;
#ifdef SSAOMAP_ENABLED
 ao = texture2D(ssaoMap, (gl_FragCoord.xy - viewport.xy) / viewport.zw).r;
#endif
@end




@export ecgl.common.diffuseLayer.header

#if (LAYER_DIFFUSEMAP_COUNT > 0)
uniform float layerDiffuseIntensity[LAYER_DIFFUSEMAP_COUNT];
uniform sampler2D layerDiffuseMap[LAYER_DIFFUSEMAP_COUNT];
#endif

@end

@export ecgl.common.emissiveLayer.header

#if (LAYER_EMISSIVEMAP_COUNT > 0)
uniform float layerEmissionIntensity[LAYER_EMISSIVEMAP_COUNT];
uniform sampler2D layerEmissiveMap[LAYER_EMISSIVEMAP_COUNT];
#endif

@end

@export ecgl.common.layers.header
@import ecgl.common.diffuseLayer.header
@import ecgl.common.emissiveLayer.header
@end

@export ecgl.common.diffuseLayer.main

#if (LAYER_DIFFUSEMAP_COUNT > 0)
 for (int _idx_ = 0; _idx_ < LAYER_DIFFUSEMAP_COUNT; _idx_++) {{
 float intensity = layerDiffuseIntensity[_idx_];
 vec4 texel2 = texture2D(layerDiffuseMap[_idx_], v_Texcoord);
 #ifdef SRGB_DECODE
 texel2 = sRGBToLinear(texel2);
 #endif
 albedoTexel.rgb = mix(albedoTexel.rgb, texel2.rgb * intensity, texel2.a);
 albedoTexel.a = texel2.a + (1.0 - texel2.a) * albedoTexel.a;
 }}
#endif

@end

@export ecgl.common.emissiveLayer.main

#if (LAYER_EMISSIVEMAP_COUNT > 0)
 for (int _idx_ = 0; _idx_ < LAYER_EMISSIVEMAP_COUNT; _idx_++)
 {{
 vec4 texel2 = texture2D(layerEmissiveMap[_idx_], v_Texcoord) * layerEmissionIntensity[_idx_];
 #ifdef SRGB_DECODE
 texel2 = sRGBToLinear(texel2);
 #endif
 float intensity = layerEmissionIntensity[_idx_];
 gl_FragColor.rgb += texel2.rgb * texel2.a * intensity;
 }}
#endif

@end
`,cf=`@export ecgl.color.vertex

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;

@import ecgl.common.uv.header

attribute vec2 texcoord : TEXCOORD_0;
attribute vec3 position: POSITION;

@import ecgl.common.wireframe.vertexHeader

#ifdef VERTEX_COLOR
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;
#endif

#ifdef VERTEX_ANIMATION
attribute vec3 prevPosition;
uniform float percent : 1.0;
#endif

#ifdef ATMOSPHERE_ENABLED
attribute vec3 normal: NORMAL;
uniform mat4 worldInverseTranspose : WORLDINVERSETRANSPOSE;
varying vec3 v_Normal;
#endif

void main()
{
#ifdef VERTEX_ANIMATION
 vec3 pos = mix(prevPosition, position, percent);
#else
 vec3 pos = position;
#endif

 gl_Position = worldViewProjection * vec4(pos, 1.0);

 @import ecgl.common.uv.main

#ifdef VERTEX_COLOR
 v_Color = a_Color;
#endif

#ifdef ATMOSPHERE_ENABLED
 v_Normal = normalize((worldInverseTranspose * vec4(normal, 0.0)).xyz);
#endif

 @import ecgl.common.wireframe.vertexMain

}

@end

@export ecgl.color.fragment

#define LAYER_DIFFUSEMAP_COUNT 0
#define LAYER_EMISSIVEMAP_COUNT 0

uniform sampler2D diffuseMap;
uniform sampler2D detailMap;

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

#ifdef ATMOSPHERE_ENABLED
uniform mat4 viewTranspose: VIEWTRANSPOSE;
uniform vec3 glowColor;
uniform float glowPower;
varying vec3 v_Normal;
#endif

#ifdef VERTEX_COLOR
varying vec4 v_Color;
#endif

@import ecgl.common.layers.header

@import ecgl.common.uv.fragmentHeader

@import ecgl.common.wireframe.fragmentHeader

@import clay.util.srgb

void main()
{
#ifdef SRGB_DECODE
 gl_FragColor = sRGBToLinear(color);
#else
 gl_FragColor = color;
#endif

#ifdef VERTEX_COLOR
 gl_FragColor *= v_Color;
#endif

 @import ecgl.common.albedo.main

 @import ecgl.common.diffuseLayer.main

 gl_FragColor *= albedoTexel;

#ifdef ATMOSPHERE_ENABLED
 float atmoIntensity = pow(1.0 - dot(v_Normal, (viewTranspose * vec4(0.0, 0.0, 1.0, 0.0)).xyz), glowPower);
 gl_FragColor.rgb += glowColor * atmoIntensity;
#endif

 @import ecgl.common.emissiveLayer.main

 @import ecgl.common.wireframe.fragmentMain

}
@end`,hf=`/**
 * http: */

@export ecgl.lambert.vertex

@import ecgl.common.transformUniforms

@import ecgl.common.uv.header


@import ecgl.common.attributes

@import ecgl.common.wireframe.vertexHeader

#ifdef VERTEX_COLOR
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;
#endif


@import ecgl.common.vertexAnimation.header


varying vec3 v_Normal;
varying vec3 v_WorldPosition;

void main()
{
 @import ecgl.common.uv.main

 @import ecgl.common.vertexAnimation.main


 gl_Position = worldViewProjection * vec4(pos, 1.0);

 v_Normal = normalize((worldInverseTranspose * vec4(norm, 0.0)).xyz);
 v_WorldPosition = (world * vec4(pos, 1.0)).xyz;

#ifdef VERTEX_COLOR
 v_Color = a_Color;
#endif

 @import ecgl.common.wireframe.vertexMain
}

@end


@export ecgl.lambert.fragment

#define LAYER_DIFFUSEMAP_COUNT 0
#define LAYER_EMISSIVEMAP_COUNT 0

#define NORMAL_UP_AXIS 1
#define NORMAL_FRONT_AXIS 2

@import ecgl.common.uv.fragmentHeader

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

uniform sampler2D diffuseMap;
uniform sampler2D detailMap;

@import ecgl.common.layers.header

uniform float emissionIntensity: 1.0;

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

uniform mat4 viewInverse : VIEWINVERSE;

#ifdef ATMOSPHERE_ENABLED
uniform mat4 viewTranspose: VIEWTRANSPOSE;
uniform vec3 glowColor;
uniform float glowPower;
#endif

#ifdef AMBIENT_LIGHT_COUNT
@import clay.header.ambient_light
#endif
#ifdef AMBIENT_SH_LIGHT_COUNT
@import clay.header.ambient_sh_light
#endif

#ifdef DIRECTIONAL_LIGHT_COUNT
@import clay.header.directional_light
#endif

#ifdef VERTEX_COLOR
varying vec4 v_Color;
#endif


@import ecgl.common.ssaoMap.header

@import ecgl.common.bumpMap.header

@import clay.util.srgb

@import ecgl.common.wireframe.fragmentHeader

@import clay.plugin.compute_shadow_map

void main()
{
#ifdef SRGB_DECODE
 gl_FragColor = sRGBToLinear(color);
#else
 gl_FragColor = color;
#endif

#ifdef VERTEX_COLOR
 #ifdef SRGB_DECODE
 gl_FragColor *= sRGBToLinear(v_Color);
 #else
 gl_FragColor *= v_Color;
 #endif
#endif

 @import ecgl.common.albedo.main

 @import ecgl.common.diffuseLayer.main

 gl_FragColor *= albedoTexel;

 vec3 N = v_Normal;
#ifdef DOUBLE_SIDED
 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(eyePos - v_WorldPosition);

 if (dot(N, V) < 0.0) {
 N = -N;
 }
#endif

 float ambientFactor = 1.0;

#ifdef BUMPMAP_ENABLED
 N = bumpNormal(v_WorldPosition, v_Normal, N);
 ambientFactor = dot(v_Normal, N);
#endif

 vec3 N2 = vec3(N.x, N[NORMAL_UP_AXIS], N[NORMAL_FRONT_AXIS]);

 vec3 diffuseColor = vec3(0.0, 0.0, 0.0);

 @import ecgl.common.ssaoMap.main

#ifdef AMBIENT_LIGHT_COUNT
 for(int i = 0; i < AMBIENT_LIGHT_COUNT; i++)
 {
 diffuseColor += ambientLightColor[i] * ambientFactor * ao;
 }
#endif
#ifdef AMBIENT_SH_LIGHT_COUNT
 for(int _idx_ = 0; _idx_ < AMBIENT_SH_LIGHT_COUNT; _idx_++)
 {{
 diffuseColor += calcAmbientSHLight(_idx_, N2) * ambientSHLightColor[_idx_] * ao;
 }}
#endif
#ifdef DIRECTIONAL_LIGHT_COUNT
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 float shadowContribsDir[DIRECTIONAL_LIGHT_COUNT];
 if(shadowEnabled)
 {
 computeShadowOfDirectionalLights(v_WorldPosition, shadowContribsDir);
 }
#endif
 for(int i = 0; i < DIRECTIONAL_LIGHT_COUNT; i++)
 {
 vec3 lightDirection = -directionalLightDirection[i];
 vec3 lightColor = directionalLightColor[i];

 float shadowContrib = 1.0;
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 if (shadowEnabled)
 {
 shadowContrib = shadowContribsDir[i];
 }
#endif

 float ndl = dot(N, normalize(lightDirection)) * shadowContrib;

 diffuseColor += lightColor * clamp(ndl, 0.0, 1.0);
 }
#endif

 gl_FragColor.rgb *= diffuseColor;

#ifdef ATMOSPHERE_ENABLED
 float atmoIntensity = pow(1.0 - dot(v_Normal, (viewTranspose * vec4(0.0, 0.0, 1.0, 0.0)).xyz), glowPower);
 gl_FragColor.rgb += glowColor * atmoIntensity;
#endif

 @import ecgl.common.emissiveLayer.main

 @import ecgl.common.wireframe.fragmentMain
}

@end`,ff=`@export ecgl.realistic.vertex

@import ecgl.common.transformUniforms

@import ecgl.common.uv.header

@import ecgl.common.attributes


@import ecgl.common.wireframe.vertexHeader

#ifdef VERTEX_COLOR
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;
#endif

#ifdef NORMALMAP_ENABLED
attribute vec4 tangent : TANGENT;
varying vec3 v_Tangent;
varying vec3 v_Bitangent;
#endif

@import ecgl.common.vertexAnimation.header

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

void main()
{

 @import ecgl.common.uv.main

 @import ecgl.common.vertexAnimation.main

 gl_Position = worldViewProjection * vec4(pos, 1.0);

 v_Normal = normalize((worldInverseTranspose * vec4(norm, 0.0)).xyz);
 v_WorldPosition = (world * vec4(pos, 1.0)).xyz;

#ifdef VERTEX_COLOR
 v_Color = a_Color;
#endif

#ifdef NORMALMAP_ENABLED
 v_Tangent = normalize((worldInverseTranspose * vec4(tangent.xyz, 0.0)).xyz);
 v_Bitangent = normalize(cross(v_Normal, v_Tangent) * tangent.w);
#endif

 @import ecgl.common.wireframe.vertexMain

}

@end



@export ecgl.realistic.fragment

#define LAYER_DIFFUSEMAP_COUNT 0
#define LAYER_EMISSIVEMAP_COUNT 0
#define PI 3.14159265358979
#define ROUGHNESS_CHANEL 0
#define METALNESS_CHANEL 1

#define NORMAL_UP_AXIS 1
#define NORMAL_FRONT_AXIS 2

#ifdef VERTEX_COLOR
varying vec4 v_Color;
#endif

@import ecgl.common.uv.fragmentHeader

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

uniform sampler2D diffuseMap;

uniform sampler2D detailMap;
uniform sampler2D metalnessMap;
uniform sampler2D roughnessMap;

@import ecgl.common.layers.header

uniform float emissionIntensity: 1.0;

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

uniform float metalness : 0.0;
uniform float roughness : 0.5;

uniform mat4 viewInverse : VIEWINVERSE;

#ifdef ATMOSPHERE_ENABLED
uniform mat4 viewTranspose: VIEWTRANSPOSE;
uniform vec3 glowColor;
uniform float glowPower;
#endif

#ifdef AMBIENT_LIGHT_COUNT
@import clay.header.ambient_light
#endif

#ifdef AMBIENT_SH_LIGHT_COUNT
@import clay.header.ambient_sh_light
#endif

#ifdef AMBIENT_CUBEMAP_LIGHT_COUNT
@import clay.header.ambient_cubemap_light
#endif

#ifdef DIRECTIONAL_LIGHT_COUNT
@import clay.header.directional_light
#endif

@import ecgl.common.normalMap.fragmentHeader

@import ecgl.common.ssaoMap.header

@import ecgl.common.bumpMap.header

@import clay.util.srgb

@import clay.util.rgbm

@import ecgl.common.wireframe.fragmentHeader

@import clay.plugin.compute_shadow_map

vec3 F_Schlick(float ndv, vec3 spec) {
 return spec + (1.0 - spec) * pow(1.0 - ndv, 5.0);
}

float D_Phong(float g, float ndh) {
 float a = pow(8192.0, g);
 return (a + 2.0) / 8.0 * pow(ndh, a);
}

void main()
{
 vec4 albedoColor = color;

 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(eyePos - v_WorldPosition);
#ifdef VERTEX_COLOR
 #ifdef SRGB_DECODE
 albedoColor *= sRGBToLinear(v_Color);
 #else
 albedoColor *= v_Color;
 #endif
#endif

 @import ecgl.common.albedo.main

 @import ecgl.common.diffuseLayer.main

 albedoColor *= albedoTexel;

 float m = metalness;

#ifdef METALNESSMAP_ENABLED
 float m2 = texture2D(metalnessMap, v_DetailTexcoord)[METALNESS_CHANEL];
 m = clamp(m2 + (m - 0.5) * 2.0, 0.0, 1.0);
#endif

 vec3 baseColor = albedoColor.rgb;
 albedoColor.rgb = baseColor * (1.0 - m);
 vec3 specFactor = mix(vec3(0.04), baseColor, m);

 float g = 1.0 - roughness;

#ifdef ROUGHNESSMAP_ENABLED
 float g2 = 1.0 - texture2D(roughnessMap, v_DetailTexcoord)[ROUGHNESS_CHANEL];
 g = clamp(g2 + (g - 0.5) * 2.0, 0.0, 1.0);
#endif

 vec3 N = v_Normal;

#ifdef DOUBLE_SIDED
 if (dot(N, V) < 0.0) {
 N = -N;
 }
#endif

 float ambientFactor = 1.0;

#ifdef BUMPMAP_ENABLED
 N = bumpNormal(v_WorldPosition, v_Normal, N);
 ambientFactor = dot(v_Normal, N);
#endif

@import ecgl.common.normalMap.fragmentMain

 vec3 N2 = vec3(N.x, N[NORMAL_UP_AXIS], N[NORMAL_FRONT_AXIS]);

 vec3 diffuseTerm = vec3(0.0);
 vec3 specularTerm = vec3(0.0);

 float ndv = clamp(dot(N, V), 0.0, 1.0);
 vec3 fresnelTerm = F_Schlick(ndv, specFactor);

 @import ecgl.common.ssaoMap.main

#ifdef AMBIENT_LIGHT_COUNT
 for(int _idx_ = 0; _idx_ < AMBIENT_LIGHT_COUNT; _idx_++)
 {{
 diffuseTerm += ambientLightColor[_idx_] * ambientFactor * ao;
 }}
#endif

#ifdef AMBIENT_SH_LIGHT_COUNT
 for(int _idx_ = 0; _idx_ < AMBIENT_SH_LIGHT_COUNT; _idx_++)
 {{
 diffuseTerm += calcAmbientSHLight(_idx_, N2) * ambientSHLightColor[_idx_] * ao;
 }}
#endif

#ifdef DIRECTIONAL_LIGHT_COUNT
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 float shadowContribsDir[DIRECTIONAL_LIGHT_COUNT];
 if(shadowEnabled)
 {
 computeShadowOfDirectionalLights(v_WorldPosition, shadowContribsDir);
 }
#endif
 for(int _idx_ = 0; _idx_ < DIRECTIONAL_LIGHT_COUNT; _idx_++)
 {{
 vec3 L = -directionalLightDirection[_idx_];
 vec3 lc = directionalLightColor[_idx_];

 vec3 H = normalize(L + V);
 float ndl = clamp(dot(N, normalize(L)), 0.0, 1.0);
 float ndh = clamp(dot(N, H), 0.0, 1.0);

 float shadowContrib = 1.0;
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 if (shadowEnabled)
 {
 shadowContrib = shadowContribsDir[_idx_];
 }
#endif

 vec3 li = lc * ndl * shadowContrib;

 diffuseTerm += li;
 specularTerm += li * fresnelTerm * D_Phong(g, ndh);
 }}
#endif


#ifdef AMBIENT_CUBEMAP_LIGHT_COUNT
 vec3 L = reflect(-V, N);
 L = vec3(L.x, L[NORMAL_UP_AXIS], L[NORMAL_FRONT_AXIS]);
 float rough2 = clamp(1.0 - g, 0.0, 1.0);
 float bias2 = rough2 * 5.0;
 vec2 brdfParam2 = texture2D(ambientCubemapLightBRDFLookup[0], vec2(rough2, ndv)).xy;
 vec3 envWeight2 = specFactor * brdfParam2.x + brdfParam2.y;
 vec3 envTexel2;
 for(int _idx_ = 0; _idx_ < AMBIENT_CUBEMAP_LIGHT_COUNT; _idx_++)
 {{
 envTexel2 = RGBMDecode(textureCubeLodEXT(ambientCubemapLightCubemap[_idx_], L, bias2), 8.12);
 specularTerm += ambientCubemapLightColor[_idx_] * envTexel2 * envWeight2 * ao;
 }}
#endif

 gl_FragColor.rgb = albedoColor.rgb * diffuseTerm + specularTerm;
 gl_FragColor.a = albedoColor.a;

#ifdef ATMOSPHERE_ENABLED
 float atmoIntensity = pow(1.0 - dot(v_Normal, (viewTranspose * vec4(0.0, 0.0, 1.0, 0.0)).xyz), glowPower);
 gl_FragColor.rgb += glowColor * atmoIntensity;
#endif

#ifdef SRGB_ENCODE
 gl_FragColor = linearTosRGB(gl_FragColor);
#endif

 @import ecgl.common.emissiveLayer.main

 @import ecgl.common.wireframe.fragmentMain
}

@end`,df=`@export ecgl.hatching.vertex

@import ecgl.realistic.vertex

@end


@export ecgl.hatching.fragment

#define NORMAL_UP_AXIS 1
#define NORMAL_FRONT_AXIS 2

@import ecgl.common.uv.fragmentHeader

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

uniform vec4 color : [0.0, 0.0, 0.0, 1.0];
uniform vec4 paperColor : [1.0, 1.0, 1.0, 1.0];

uniform mat4 viewInverse : VIEWINVERSE;

#ifdef AMBIENT_LIGHT_COUNT
@import clay.header.ambient_light
#endif
#ifdef AMBIENT_SH_LIGHT_COUNT
@import clay.header.ambient_sh_light
#endif

#ifdef DIRECTIONAL_LIGHT_COUNT
@import clay.header.directional_light
#endif

#ifdef VERTEX_COLOR
varying vec4 v_Color;
#endif


@import ecgl.common.ssaoMap.header

@import ecgl.common.bumpMap.header

@import clay.util.srgb

@import ecgl.common.wireframe.fragmentHeader

@import clay.plugin.compute_shadow_map

uniform sampler2D hatch1;
uniform sampler2D hatch2;
uniform sampler2D hatch3;
uniform sampler2D hatch4;
uniform sampler2D hatch5;
uniform sampler2D hatch6;

float shade(in float tone) {
 vec4 c = vec4(1. ,1., 1., 1.);
 float step = 1. / 6.;
 vec2 uv = v_DetailTexcoord;
 if (tone <= step / 2.0) {
 c = mix(vec4(0.), texture2D(hatch6, uv), 12. * tone);
 }
 else if (tone <= step) {
 c = mix(texture2D(hatch6, uv), texture2D(hatch5, uv), 6. * tone);
 }
 if(tone > step && tone <= 2. * step){
 c = mix(texture2D(hatch5, uv), texture2D(hatch4, uv) , 6. * (tone - step));
 }
 if(tone > 2. * step && tone <= 3. * step){
 c = mix(texture2D(hatch4, uv), texture2D(hatch3, uv), 6. * (tone - 2. * step));
 }
 if(tone > 3. * step && tone <= 4. * step){
 c = mix(texture2D(hatch3, uv), texture2D(hatch2, uv), 6. * (tone - 3. * step));
 }
 if(tone > 4. * step && tone <= 5. * step){
 c = mix(texture2D(hatch2, uv), texture2D(hatch1, uv), 6. * (tone - 4. * step));
 }
 if(tone > 5. * step){
 c = mix(texture2D(hatch1, uv), vec4(1.), 6. * (tone - 5. * step));
 }

 return c.r;
}

const vec3 w = vec3(0.2125, 0.7154, 0.0721);

void main()
{
#ifdef SRGB_DECODE
 vec4 inkColor = sRGBToLinear(color);
#else
 vec4 inkColor = color;
#endif

#ifdef VERTEX_COLOR
 #ifdef SRGB_DECODE
 inkColor *= sRGBToLinear(v_Color);
 #else
 inkColor *= v_Color;
 #endif
#endif

 vec3 N = v_Normal;
#ifdef DOUBLE_SIDED
 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(eyePos - v_WorldPosition);

 if (dot(N, V) < 0.0) {
 N = -N;
 }
#endif

 float tone = 0.0;

 float ambientFactor = 1.0;

#ifdef BUMPMAP_ENABLED
 N = bumpNormal(v_WorldPosition, v_Normal, N);
 ambientFactor = dot(v_Normal, N);
#endif

 vec3 N2 = vec3(N.x, N[NORMAL_UP_AXIS], N[NORMAL_FRONT_AXIS]);

 @import ecgl.common.ssaoMap.main

#ifdef AMBIENT_LIGHT_COUNT
 for(int i = 0; i < AMBIENT_LIGHT_COUNT; i++)
 {
 tone += dot(ambientLightColor[i], w) * ambientFactor * ao;
 }
#endif
#ifdef AMBIENT_SH_LIGHT_COUNT
 for(int _idx_ = 0; _idx_ < AMBIENT_SH_LIGHT_COUNT; _idx_++)
 {{
 tone += dot(calcAmbientSHLight(_idx_, N2) * ambientSHLightColor[_idx_], w) * ao;
 }}
#endif
#ifdef DIRECTIONAL_LIGHT_COUNT
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 float shadowContribsDir[DIRECTIONAL_LIGHT_COUNT];
 if(shadowEnabled)
 {
 computeShadowOfDirectionalLights(v_WorldPosition, shadowContribsDir);
 }
#endif
 for(int i = 0; i < DIRECTIONAL_LIGHT_COUNT; i++)
 {
 vec3 lightDirection = -directionalLightDirection[i];
 float lightTone = dot(directionalLightColor[i], w);

 float shadowContrib = 1.0;
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 if (shadowEnabled)
 {
 shadowContrib = shadowContribsDir[i];
 }
#endif

 float ndl = dot(N, normalize(lightDirection)) * shadowContrib;

 tone += lightTone * clamp(ndl, 0.0, 1.0);
 }
#endif

 gl_FragColor = mix(inkColor, paperColor, shade(clamp(tone, 0.0, 1.0)));
 }
@end
`,vf=`@export ecgl.sm.depth.vertex

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;

attribute vec3 position : POSITION;
attribute vec2 texcoord : TEXCOORD_0;

#ifdef VERTEX_ANIMATION
attribute vec3 prevPosition;
uniform float percent : 1.0;
#endif

varying vec4 v_ViewPosition;
varying vec2 v_Texcoord;

void main(){

#ifdef VERTEX_ANIMATION
 vec3 pos = mix(prevPosition, position, percent);
#else
 vec3 pos = position;
#endif

 v_ViewPosition = worldViewProjection * vec4(pos, 1.0);
 gl_Position = v_ViewPosition;

 v_Texcoord = texcoord;

}
@end



@export ecgl.sm.depth.fragment

@import clay.sm.depth.fragment

@end`;Object.assign(Wt.prototype,lf);V.import(dl);V.import(rl);V.import(uf);V.import(cf);V.import(hf);V.import(ff);V.import(df);V.import(vf);function pf(e){return!e||e==="none"}function vl(e){return e instanceof HTMLCanvasElement||e instanceof HTMLImageElement||e instanceof Image}function mf(e){return e.getZr&&e.setOption}var _f=xr.prototype.addToScene,gf=xr.prototype.removeFromScene;xr.prototype.addToScene=function(e){if(_f.call(this,e),this.__zr){var t=this.__zr;e.traverse(function(r){r.__zr=t,r.addAnimatorsToZr&&r.addAnimatorsToZr(t)})}};xr.prototype.removeFromScene=function(e){gf.call(this,e),e.traverse(function(t){var r=t.__zr;t.__zr=null,r&&t.removeAnimatorsFromZr&&t.removeAnimatorsFromZr(r)})};Nt.prototype.setTextureImage=function(e,t,r,i){if(this.shader){var n=r.getZr(),a=this,o;return a.autoUpdateTextureStatus=!1,a.disableTexture(e),pf(t)||(o=te.loadTexture(t,r,i,function(s){a.enableTexture(e),n&&n.refresh()}),a.set(e,o)),o}};var te={};te.Renderer=Ni;te.Node=Wt;te.Mesh=Pr;te.Shader=V;te.Material=Nt;te.Texture=K;te.Texture2D=se;te.Geometry=ye;te.SphereGeometry=jh;te.PlaneGeometry=Xn;te.CubeGeometry=hl;te.AmbientLight=Yh;te.DirectionalLight=Kh;te.PointLight=Jh;te.SpotLight=tf;te.PerspectiveCamera=et;te.OrthographicCamera=oi;te.Vector2=wt;te.Vector3=k;te.Vector4=rf;te.Quaternion=il;te.Matrix2=nf;te.Matrix2d=af;te.Matrix3=of;te.Matrix4=q;te.Plane=ll;te.Ray=An;te.BoundingBox=ht;te.Frustum=Ja;var un=null;function yf(){return un!==null||(un=Ir.createBlank("rgba(255,255,255,0)").image),un}function ts(e){return Math.pow(2,Math.round(Math.log(e)/Math.LN2))}function rs(e){if((e.wrapS===K.REPEAT||e.wrapT===K.REPEAT)&&e.image){var t=ts(e.width),r=ts(e.height);if(t!==e.width||r!==e.height){var i=document.createElement("canvas");i.width=t,i.height=r;var n=i.getContext("2d");n.drawImage(e.image,0,0,t,r),e.image=i}}}te.loadTexture=function(e,t,r,i){typeof r=="function"&&(i=r,r={}),r=r||{};for(var n=Object.keys(r).sort(),a="",o=0;o<n.length;o++)a+=n[o]+"_"+r[n[o]]+"_";var s=t.__textureCache=t.__textureCache||new yu(20);if(mf(e)){var l=e.__textureid__,u=s.get(a+l);if(u)u.texture.surface.setECharts(e),i&&i(u.texture);else{var c=new Dh(e);c.onupdate=function(){t.getZr().refresh()},u={texture:c.getTexture()};for(var o=0;o<n.length;o++)u.texture[n[o]]=r[n[o]];l=e.__textureid__||"__ecgl_ec__"+u.texture.__uid__,e.__textureid__=l,s.put(a+l,u),i&&i(u.texture)}return u.texture}else if(vl(e)){var l=e.__textureid__,u=s.get(a+l);if(!u){u={texture:new te.Texture2D({image:e})};for(var o=0;o<n.length;o++)u.texture[n[o]]=r[n[o]];l=e.__textureid__||"__ecgl_image__"+u.texture.__uid__,e.__textureid__=l,s.put(a+l,u),rs(u.texture),i&&i(u.texture)}return u.texture}else{var u=s.get(a+e);if(u)u.callbacks?u.callbacks.push(i):i&&i(u.texture);else if(e.match(/.hdr$|^data:application\/octet-stream/)){u={callbacks:[i]};var h=Ir.loadTexture(e,{exposure:r.exposure,fileType:"hdr"},function(){h.dirty(),u.callbacks.forEach(function(v){v&&v(h)}),u.callbacks=null});u.texture=h,s.put(a+e,u)}else{for(var h=new te.Texture2D({image:new Image}),o=0;o<n.length;o++)h[n[o]]=r[n[o]];u={texture:h,callbacks:[i]};var f=h.image;f.onload=function(){h.image=f,rs(h),h.dirty(),u.callbacks.forEach(function(p){p&&p(h)}),u.callbacks=null},f.crossOrigin="Anonymous",f.src=e,h.image=yf(),s.put(a+e,u)}return u.texture}};te.createAmbientCubemap=function(e,t,r,i){e=e||{};var n=e.texture,a=ce.firstNotNull(e.exposure,1),o=new Uh({intensity:ce.firstNotNull(e.specularIntensity,1)}),s=new Gh({intensity:ce.firstNotNull(e.diffuseIntensity,1),coefficients:[.844,.712,.691,-.037,.083,.167,.343,.288,.299,-.041,-.021,-.009,-.003,-.041,-.064,-.011,-.007,-.004,-.031,.034,.081,-.06,-.049,-.06,.046,.056,.05]});return o.cubemap=te.loadTexture(n,r,{exposure:a},function(){o.cubemap.flipY=!1,o.prefilter(t,32),s.coefficients=Wh.projectEnvironmentMap(t,o.cubemap,{lod:1}),i&&i()}),{specular:o,diffuse:s}};te.createBlankTexture=Ir.createBlank;te.isImage=vl;te.additiveBlend=function(e){e.blendEquation(e.FUNC_ADD),e.blendFunc(e.SRC_ALPHA,e.ONE)};te.parseColor=function(e,t){return e instanceof Array?(t||(t=[]),t[0]=e[0],t[1]=e[1],t[2]=e[2],e.length>3?t[3]=e[3]:t[3]=1,t):(t=Bs(e||"#000",t)||[0,0,0,0],t[0]/=255,t[1]/=255,t[2]/=255,t)};te.directionFromAlphaBeta=function(e,t){var r=e/180*Math.PI+Math.PI/2,i=-t/180*Math.PI+Math.PI/2,n=[],a=Math.sin(r);return n[0]=a*Math.cos(i),n[1]=-Math.cos(r),n[2]=a*Math.sin(i),n};te.getShadowResolution=function(e){var t=1024;switch(e){case"low":t=512;break;case"medium":break;case"high":t=2048;break;case"ultra":t=4096;break}return t};te.COMMON_SHADERS=["lambert","color","realistic","hatching","shadow"];te.createShader=function(e){e==="ecgl.shadow"&&(e="ecgl.displayShadow");var t=V.source(e+".vertex"),r=V.source(e+".fragment");t||console.error("Vertex shader of '%s' not exits",e),r||console.error("Fragment shader of '%s' not exits",e);var i=new V(t,r);return i.name=e,i};te.createMaterial=function(e,t){t instanceof Array||(t=[t]);var r=te.createShader(e),i=new Nt({shader:r});return t.forEach(function(n){typeof n=="string"&&i.define(n)}),i};te.setMaterialFromModel=function(e,t,r,i){t.autoUpdateTextureStatus=!1;var n=r.getModel(e+"Material"),a=n.get("detailTexture"),o=ce.firstNotNull(n.get("textureTiling"),1),s=ce.firstNotNull(n.get("textureOffset"),0);typeof o=="number"&&(o=[o,o]),typeof s=="number"&&(s=[s,s]);var l=o[0]>1||o[1]>1?te.Texture.REPEAT:te.Texture.CLAMP_TO_EDGE,u={anisotropic:8,wrapS:l,wrapT:l};if(e==="realistic"){var c=n.get("roughness"),h=n.get("metalness");h!=null?isNaN(h)&&(t.setTextureImage("metalnessMap",h,i,u),h=ce.firstNotNull(n.get("metalnessAdjust"),.5)):h=0,c!=null?isNaN(c)&&(t.setTextureImage("roughnessMap",c,i,u),c=ce.firstNotNull(n.get("roughnessAdjust"),.5)):c=.5;var f=n.get("normalTexture");t.setTextureImage("detailMap",a,i,u),t.setTextureImage("normalMap",f,i,u),t.set({roughness:c,metalness:h,detailUvRepeat:o,detailUvOffset:s})}else if(e==="lambert")t.setTextureImage("detailMap",a,i,u),t.set({detailUvRepeat:o,detailUvOffset:s});else if(e==="color")t.setTextureImage("detailMap",a,i,u),t.set({detailUvRepeat:o,detailUvOffset:s});else if(e==="hatching"){var d=n.get("hatchingTextures")||[];d.length<6;for(var v=0;v<6;v++)t.setTextureImage("hatch"+(v+1),d[v],i,{anisotropic:8,wrapS:te.Texture.REPEAT,wrapT:te.Texture.REPEAT});t.set({detailUvRepeat:o,detailUvOffset:s})}};te.updateVertexAnimation=function(e,t,r,i){var n=i.get("animation"),a=i.get("animationDurationUpdate"),o=i.get("animationEasingUpdate"),s=r.shadowDepthMaterial;if(n&&t&&a>0&&t.geometry.vertexCount===r.geometry.vertexCount){r.material.define("vertex","VERTEX_ANIMATION"),r.ignorePreZ=!0,s&&s.define("vertex","VERTEX_ANIMATION");for(var l=0;l<e.length;l++)r.geometry.attributes[e[l][0]].value=t.geometry.attributes[e[l][1]].value;r.geometry.dirty(),r.__percent=0,r.material.set("percent",0),r.stopAnimation(),r.animate().when(a,{__percent:1}).during(function(){r.material.set("percent",r.__percent),s&&s.set("percent",r.__percent)}).done(function(){r.ignorePreZ=!1,r.material.undefine("vertex","VERTEX_ANIMATION"),s&&s.undefine("vertex","VERTEX_ANIMATION")}).start(o)}else r.material.undefine("vertex","VERTEX_ANIMATION"),s&&s.undefine("vertex","VERTEX_ANIMATION")};const E=te;var Me=function(e,t){this.id=e,this.zr=t;try{this.renderer=new Ni({clearBit:0,devicePixelRatio:t.painter.dpr,preserveDrawingBuffer:!0,premultipliedAlpha:!0}),this.renderer.resize(t.painter.getWidth(),t.painter.getHeight())}catch(i){this.renderer=null,this.dom=document.createElement("div"),this.dom.style.cssText="position:absolute; left: 0; top: 0; right: 0; bottom: 0;",this.dom.className="ecgl-nowebgl",this.dom.innerHTML="Sorry, your browser does not support WebGL",console.error(i);return}this.onglobalout=this.onglobalout.bind(this),t.on("globalout",this.onglobalout),this.dom=this.renderer.canvas;var r=this.dom.style;r.position="absolute",r.left="0",r.top="0",this.views=[],this._picking=new Uc({renderer:this.renderer}),this._viewsToDispose=[],this._accumulatingId=0,this._zrEventProxy=new Us({shape:{x:-1,y:-1,width:2,height:2},__isGLToZRProxy:!0}),this._backgroundColor=null,this._disposed=!1};Me.prototype.setUnpainted=function(){};Me.prototype.addView=function(e){if(e.layer!==this){var t=this._viewsToDispose.indexOf(e);t>=0&&this._viewsToDispose.splice(t,1),this.views.push(e),e.layer=this;var r=this.zr;e.scene.traverse(function(i){i.__zr=r,i.addAnimatorsToZr&&i.addAnimatorsToZr(r)})}};function pl(e){var t=e.__zr;e.__zr=null,t&&e.removeAnimatorsFromZr&&e.removeAnimatorsFromZr(t)}Me.prototype.removeView=function(e){if(e.layer===this){var t=this.views.indexOf(e);t>=0&&(this.views.splice(t,1),e.scene.traverse(pl,this),e.layer=null,this._viewsToDispose.push(e))}};Me.prototype.removeViewsAll=function(){this.views.forEach(function(e){e.scene.traverse(pl,this),e.layer=null,this._viewsToDispose.push(e)},this),this.views.length=0};Me.prototype.resize=function(e,t){var r=this.renderer;r.resize(e,t)};Me.prototype.clear=function(){var e=this.renderer.gl,t=this._backgroundColor||[0,0,0,0];e.clearColor(t[0],t[1],t[2],t[3]),e.depthMask(!0),e.colorMask(!0,!0,!0,!0),e.clear(e.DEPTH_BUFFER_BIT|e.COLOR_BUFFER_BIT)};Me.prototype.clearDepth=function(){var e=this.renderer.gl;e.clear(e.DEPTH_BUFFER_BIT)};Me.prototype.clearColor=function(){var e=this.renderer.gl;e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT)};Me.prototype.needsRefresh=function(){this.zr.refresh()};Me.prototype.refresh=function(e){this._backgroundColor=e?E.parseColor(e):[0,0,0,0],this.renderer.clearColor=this._backgroundColor;for(var t=0;t<this.views.length;t++)this.views[t].prepareRender(this.renderer);this._doRender(!1),this._trackAndClean();for(var t=0;t<this._viewsToDispose.length;t++)this._viewsToDispose[t].dispose(this.renderer);this._viewsToDispose.length=0,this._startAccumulating()};Me.prototype.renderToCanvas=function(e){this._startAccumulating(!0),e.drawImage(this.dom,0,0,e.canvas.width,e.canvas.height)};Me.prototype._doRender=function(e){this.clear(),this.renderer.saveViewport();for(var t=0;t<this.views.length;t++)this.views[t].render(this.renderer,e);this.renderer.restoreViewport()};Me.prototype._stopAccumulating=function(){this._accumulatingId=0,clearTimeout(this._accumulatingTimeout)};var xf=1;Me.prototype._startAccumulating=function(e){var t=this;this._stopAccumulating();for(var r=!1,i=0;i<this.views.length;i++)r=this.views[i].needsAccumulate()||r;if(!r)return;function n(a){if(!(!t._accumulatingId||a!==t._accumulatingId)){for(var o=!0,s=0;s<t.views.length;s++)o=t.views[s].isAccumulateFinished()&&r;o||(t._doRender(!0),e?n(a):Ca(function(){n(a)}))}}this._accumulatingId=xf++,e?n(t._accumulatingId):this._accumulatingTimeout=setTimeout(function(){n(t._accumulatingId)},50)};Me.prototype._trackAndClean=function(){var e=[],t=[];this._textureList&&(Ln(this._textureList),Ln(this._geometriesList));for(var r=0;r<this.views.length;r++)Tf(this.views[r].scene,e,t);this._textureList&&(Dn(this.renderer,this._textureList),Dn(this.renderer,this._geometriesList)),this._textureList=e,this._geometriesList=t};function Ln(e){for(var t=0;t<e.length;t++)e[t].__used__=0}function Dn(e,t){for(var r=0;r<t.length;r++)t[r].__used__||t[r].dispose(e)}function cn(e,t){e.__used__=e.__used__||0,e.__used__++,e.__used__===1&&t.push(e)}function Tf(e,t,r){var i,n;e.traverse(function(o){if(o.isRenderable()){var s=o.geometry,l=o.material;if(l!==i)for(var u=l.getTextureUniforms(),c=0;c<u.length;c++){var h=u[c],f=l.uniforms[h].value;if(f){if(f instanceof K)cn(f,t);else if(f instanceof Array)for(var d=0;d<f.length;d++)f[d]instanceof K&&cn(f[d],t)}}s!==n&&cn(s,r),i=l,n=s}});for(var a=0;a<e.lights.length;a++)e.lights[a].cubemap&&cn(e.lights[a].cubemap,t)}Me.prototype.dispose=function(){this._disposed||(this._stopAccumulating(),this._textureList&&(Ln(this._textureList),Ln(this._geometriesList),Dn(this.renderer,this._textureList),Dn(this.renderer,this._geometriesList)),this.zr.off("globalout",this.onglobalout),this._disposed=!0)};Me.prototype.onmousedown=function(e){if(!(e.target&&e.target.__isGLToZRProxy)){e=e.event;var t=this.pickObject(e.offsetX,e.offsetY);t&&(this._dispatchEvent("mousedown",e,t),this._dispatchDataEvent("mousedown",e,t)),this._downX=e.offsetX,this._downY=e.offsetY}};Me.prototype.onmousemove=function(e){if(!(e.target&&e.target.__isGLToZRProxy)){e=e.event;var t=this.pickObject(e.offsetX,e.offsetY),r=t&&t.target,i=this._hovered;this._hovered=t,i&&r!==i.target&&(i.relatedTarget=r,this._dispatchEvent("mouseout",e,i),this.zr.setCursorStyle("default")),this._dispatchEvent("mousemove",e,t),t&&(this.zr.setCursorStyle("pointer"),(!i||r!==i.target)&&this._dispatchEvent("mouseover",e,t)),this._dispatchDataEvent("mousemove",e,t)}};Me.prototype.onmouseup=function(e){if(!(e.target&&e.target.__isGLToZRProxy)){e=e.event;var t=this.pickObject(e.offsetX,e.offsetY);t&&(this._dispatchEvent("mouseup",e,t),this._dispatchDataEvent("mouseup",e,t)),this._upX=e.offsetX,this._upY=e.offsetY}};Me.prototype.onclick=Me.prototype.dblclick=function(e){if(!(e.target&&e.target.__isGLToZRProxy)){var t=this._upX-this._downX,r=this._upY-this._downY;if(!(Math.sqrt(t*t+r*r)>20)){e=e.event;var i=this.pickObject(e.offsetX,e.offsetY);i&&(this._dispatchEvent(e.type,e,i),this._dispatchDataEvent(e.type,e,i));var n=this._clickToSetFocusPoint(e);if(n){var a=n.view.setDOFFocusOnPoint(n.distance);a&&this.zr.refresh()}}}};Me.prototype._clickToSetFocusPoint=function(e){for(var t=this.renderer,r=t.viewport,i=this.views.length-1;i>=0;i--){var n=this.views[i];if(n.hasDOF()&&n.containPoint(e.offsetX,e.offsetY)){this._picking.scene=n.scene,this._picking.camera=n.camera,t.viewport=n.viewport;var a=this._picking.pick(e.offsetX,e.offsetY,!0);if(a)return a.view=n,a}}t.viewport=r};Me.prototype.onglobalout=function(e){var t=this._hovered;t&&this._dispatchEvent("mouseout",e,{target:t.target})};Me.prototype.pickObject=function(e,t){for(var r=[],i=this.renderer,n=i.viewport,a=0;a<this.views.length;a++){var o=this.views[a];o.containPoint(e,t)&&(this._picking.scene=o.scene,this._picking.camera=o.camera,i.viewport=o.viewport,this._picking.pickAll(e,t,r))}return i.viewport=n,r.sort(function(s,l){return s.distance-l.distance}),r[0]};Me.prototype._dispatchEvent=function(e,t,r){r||(r={});var i=r.target;for(r.cancelBubble=!1,r.event=t,r.type=e,r.offsetX=t.offsetX,r.offsetY=t.offsetY;i&&(i.trigger(e,r),i=i.getParent(),!r.cancelBubble););this._dispatchToView(e,r)};Me.prototype._dispatchDataEvent=function(e,t,r){var i=r&&r.target,n=i&&i.dataIndex,a=i&&i.seriesIndex,o=i&&i.eventData,s=!1,l=this._zrEventProxy;l.x=t.offsetX,l.y=t.offsetY,l.update();var u={target:l};const c=xu(l);e==="mousemove"&&(n!=null?n!==this._lastDataIndex&&(parseInt(this._lastDataIndex,10)>=0&&(c.dataIndex=this._lastDataIndex,c.seriesIndex=this._lastSeriesIndex,this.zr.handler.dispatchToElement(u,"mouseout",t)),s=!0):o!=null&&o!==this._lastEventData&&(this._lastEventData!=null&&(c.eventData=this._lastEventData,this.zr.handler.dispatchToElement(u,"mouseout",t)),s=!0),this._lastEventData=o,this._lastDataIndex=n,this._lastSeriesIndex=a),c.eventData=o,c.dataIndex=n,c.seriesIndex=a,(o!=null||parseInt(n,10)>=0&&parseInt(a,10)>=0)&&(this.zr.handler.dispatchToElement(u,e,t),s&&this.zr.handler.dispatchToElement(u,"mouseover",t))};Me.prototype._dispatchToView=function(e,t){for(var r=0;r<this.views.length;r++)this.views[r].containPoint(t.offsetX,t.offsetY)&&this.views[r].trigger(e,t)};Object.assign(Me.prototype,Ya);const ml=Me;var wf=["bar3D","line3D","map3D","scatter3D","surface","lines3D","scatterGL","scatter3D"];function Mi(e,t){if(e&&e[t]&&(e[t].normal||e[t].emphasis)){var r=e[t].normal,i=e[t].emphasis;r&&(e[t]=r),i&&(e.emphasis=e.emphasis||{},e.emphasis[t]=i)}}function Sf(e){Mi(e,"itemStyle"),Mi(e,"lineStyle"),Mi(e,"areaStyle"),Mi(e,"label")}function hn(e){e&&(e instanceof Array||(e=[e]),$t(e,function(t){if(t.axisLabel){var r=t.axisLabel;Object.assign(r,r.textStyle),r.textStyle=null}}))}function bf(e){$t(e.series,function(t){Tu(wf,t.type)>=0&&(Sf(t),t.coordinateSystem==="mapbox"&&(t.coordinateSystem="mapbox3D",e.mapbox3D=e.mapbox))}),hn(e.xAxis3D),hn(e.yAxis3D),hn(e.zAxis3D),hn(e.grid3D),Mi(e.geo3D)}function _l(e){this._layers={},this._zr=e}_l.prototype.update=function(e,t){var r=this,i=t.getZr();if(!i.getWidth()||!i.getHeight()){console.warn("Dom has no width or height");return}function n(s){i.setSleepAfterStill(0);var l;s.coordinateSystem&&s.coordinateSystem.model,l=s.get("zlevel");var u=r._layers,c=u[l];if(!c){if(c=u[l]=new ml("gl-"+l,i),i.painter.isSingleCanvas()){c.virtual=!0;var h=new Eu({z:1e4,style:{image:c.renderer.canvas},silent:!0});c.__hostImage=h,i.add(h)}i.painter.insertLayer(l,c)}return c.__hostImage&&c.__hostImage.setStyle({width:c.renderer.getWidth(),height:c.renderer.getHeight()}),c}function a(s,l){s&&s.traverse(function(u){u.isRenderable&&u.isRenderable()&&(u.ignorePicking=u.$ignorePicking!=null?u.$ignorePicking:l)})}for(var o in this._layers)this._layers[o].removeViewsAll();e.eachComponent(function(s,l){if(s!=="series"){var u=t.getViewOfComponentModel(l),c=l.coordinateSystem;if(u.__ecgl__){var h;if(c){if(!c.viewGL){console.error("Can't find viewGL in coordinateSystem of component "+l.id);return}h=c.viewGL}else{if(!l.viewGL){console.error("Can't find viewGL of component "+l.id);return}h=c.viewGL}var h=c.viewGL,f=n(l);f.addView(h),u.afterRender&&u.afterRender(l,e,t,f),a(u.groupGL,l.get("silent"))}}}),e.eachSeries(function(s){var l=t.getViewOfSeriesModel(s),u=s.coordinateSystem;if(l.__ecgl__){if(u&&!u.viewGL&&!l.viewGL){console.error("Can't find viewGL of series "+l.id);return}var c=u&&u.viewGL||l.viewGL,h=n(s);h.addView(c),l.afterRender&&l.afterRender(s,e,t,h),a(l.groupGL,s.get("silent"))}})};wu(function(e){var t=e.getZr(),r=t.painter.dispose;t.painter.dispose=function(){typeof this.eachOtherLayer=="function"&&this.eachOtherLayer(function(i){i instanceof ml&&i.dispose()}),r.call(this)},t.painter.getRenderedCanvas=function(i){if(i=i||{},this._singleCanvas)return this._layers[0].dom;var n=document.createElement("canvas"),a=i.pixelRatio||this.dpr;n.width=this.getWidth()*a,n.height=this.getHeight()*a;var o=n.getContext("2d");o.dpr=a,o.clearRect(0,0,n.width,n.height),i.backgroundColor&&(o.fillStyle=i.backgroundColor,o.fillRect(0,0,n.width,n.height));var s=this.storage.getDisplayList(!0),l={},u,c=this;function h(p,m){var _=c._zlevelList;p==null&&(p=-1/0);for(var x,y=0;y<_.length;y++){var g=_[y],w=c._layers[g];if(!w.__builtin__&&g>p&&g<m){x=w;break}}x&&x.renderToCanvas&&(o.save(),x.renderToCanvas(o),o.restore())}for(var f={ctx:o},d=0;d<s.length;d++){var v=s[d];v.zlevel!==u&&(h(u,v.zlevel),u=v.zlevel),this._doPaintEl(v,f,!0,null,l)}return h(u,1/0),n}});Su(function(e,t){var r=t.getZr(),i=r.__egl=r.__egl||new _l(r);i.update(e,t)});bu(bf);const $n={defaultOption:{viewControl:{projection:"perspective",autoRotate:!1,autoRotateDirection:"cw",autoRotateSpeed:10,autoRotateAfterStill:3,damping:.8,rotateSensitivity:1,zoomSensitivity:1,panSensitivity:1,panMouseButton:"middle",rotateMouseButton:"left",distance:150,minDistance:40,maxDistance:400,orthographicSize:150,maxOrthographicSize:400,minOrthographicSize:20,center:[0,0,0],alpha:0,beta:0,minAlpha:-90,maxAlpha:90}},setView:function(e){e=e||{},this.option.viewControl=this.option.viewControl||{},e.alpha!=null&&(this.option.viewControl.alpha=e.alpha),e.beta!=null&&(this.option.viewControl.beta=e.beta),e.distance!=null&&(this.option.viewControl.distance=e.distance),e.center!=null&&(this.option.viewControl.center=e.center)}},di={defaultOption:{postEffect:{enable:!1,bloom:{enable:!0,intensity:.1},depthOfField:{enable:!1,focalRange:20,focalDistance:50,blurRadius:10,fstop:2.8,quality:"medium"},screenSpaceAmbientOcclusion:{enable:!1,radius:2,quality:"medium",intensity:1},screenSpaceReflection:{enable:!1,quality:"medium",maxRoughness:.8},colorCorrection:{enable:!0,exposure:0,brightness:0,contrast:1,saturation:1,lookupTexture:""},edge:{enable:!1},FXAA:{enable:!1}},temporalSuperSampling:{enable:"auto"}}},vi={defaultOption:{light:{main:{shadow:!1,shadowQuality:"high",color:"#fff",intensity:1,alpha:0,beta:0},ambient:{color:"#fff",intensity:.2},ambientCubemap:{texture:null,exposure:1,diffuseIntensity:.5,specularIntensity:.5}}}};var jn=hi.extend({type:"grid3D",dependencies:["xAxis3D","yAxis3D","zAxis3D"],defaultOption:{show:!0,zlevel:-10,left:0,top:0,width:"100%",height:"100%",environment:"auto",boxWidth:100,boxHeight:100,boxDepth:100,axisPointer:{show:!0,lineStyle:{color:"rgba(0, 0, 0, 0.8)",width:1},label:{show:!0,formatter:null,margin:8,textStyle:{fontSize:14,color:"#fff",backgroundColor:"rgba(0,0,0,0.5)",padding:3,borderRadius:3}}},axisLine:{show:!0,lineStyle:{color:"#333",width:2,type:"solid"}},axisTick:{show:!0,inside:!1,length:3,lineStyle:{width:1}},axisLabel:{show:!0,inside:!1,rotate:0,margin:8,textStyle:{fontSize:12}},splitLine:{show:!0,lineStyle:{color:["#ccc"],width:1,type:"solid"}},splitArea:{show:!1,areaStyle:{color:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]}},light:{main:{alpha:30,beta:40},ambient:{intensity:.4}},viewControl:{alpha:20,beta:40,autoRotate:!1,distance:200,minDistance:40,maxDistance:400}}});Ee(jn.prototype,$n);Ee(jn.prototype,di);Ee(jn.prototype,vi);const Ef=jn;var Ei=ce.firstNotNull,is={left:0,middle:1,right:2};function ns(e){return e instanceof Array||(e=[e,e]),e}var gl=vt.extend(function(){return{zr:null,viewGL:null,_center:new k,minDistance:.5,maxDistance:1.5,maxOrthographicSize:300,minOrthographicSize:30,minAlpha:-90,maxAlpha:90,minBeta:-1/0,maxBeta:1/0,autoRotateAfterStill:0,autoRotateDirection:"cw",autoRotateSpeed:60,damping:.8,rotateSensitivity:1,zoomSensitivity:1,panSensitivity:1,panMouseButton:"middle",rotateMouseButton:"left",_mode:"rotate",_camera:null,_needsUpdate:!1,_rotating:!1,_phi:0,_theta:0,_mouseX:0,_mouseY:0,_rotateVelocity:new wt,_panVelocity:new wt,_distance:500,_zoomSpeed:0,_stillTimeout:0,_animators:[]}},function(){["_mouseDownHandler","_mouseWheelHandler","_mouseMoveHandler","_mouseUpHandler","_pinchHandler","_contextMenuHandler","_update"].forEach(function(e){this[e]=this[e].bind(this)},this)},{init:function(){var e=this.zr;e&&(e.on("mousedown",this._mouseDownHandler),e.on("globalout",this._mouseUpHandler),e.on("mousewheel",this._mouseWheelHandler),e.on("pinch",this._pinchHandler),e.animation.on("frame",this._update),e.dom.addEventListener("contextmenu",this._contextMenuHandler))},dispose:function(){var e=this.zr;e&&(e.off("mousedown",this._mouseDownHandler),e.off("mousemove",this._mouseMoveHandler),e.off("mouseup",this._mouseUpHandler),e.off("mousewheel",this._mouseWheelHandler),e.off("pinch",this._pinchHandler),e.off("globalout",this._mouseUpHandler),e.dom.removeEventListener("contextmenu",this._contextMenuHandler),e.animation.off("frame",this._update)),this.stopAllAnimation()},getDistance:function(){return this._distance},setDistance:function(e){this._distance=e,this._needsUpdate=!0},getOrthographicSize:function(){return this._orthoSize},setOrthographicSize:function(e){this._orthoSize=e,this._needsUpdate=!0},getAlpha:function(){return this._theta/Math.PI*180},getBeta:function(){return-this._phi/Math.PI*180},getCenter:function(){return this._center.toArray()},setAlpha:function(e){e=Math.max(Math.min(this.maxAlpha,e),this.minAlpha),this._theta=e/180*Math.PI,this._needsUpdate=!0},setBeta:function(e){e=Math.max(Math.min(this.maxBeta,e),this.minBeta),this._phi=-e/180*Math.PI,this._needsUpdate=!0},setCenter:function(e){this._center.setArray(e)},setViewGL:function(e){this.viewGL=e},getCamera:function(){return this.viewGL.camera},setFromViewControlModel:function(e,t){t=t||{};var r=t.baseDistance||0,i=t.baseOrthoSize||1,n=e.get("projection");n!=="perspective"&&n!=="orthographic"&&n!=="isometric"&&(n="perspective"),this._projection=n,this.viewGL.setProjection(n);var a=e.get("distance")+r,o=e.get("orthographicSize")+i;[["damping",.8],["autoRotate",!1],["autoRotateAfterStill",3],["autoRotateDirection","cw"],["autoRotateSpeed",10],["minDistance",30],["maxDistance",400],["minOrthographicSize",30],["maxOrthographicSize",300],["minAlpha",-90],["maxAlpha",90],["minBeta",-1/0],["maxBeta",1/0],["rotateSensitivity",1],["zoomSensitivity",1],["panSensitivity",1],["panMouseButton","left"],["rotateMouseButton","middle"]].forEach(function(f){this[f[0]]=Ei(e.get(f[0]),f[1])},this),this.minDistance+=r,this.maxDistance+=r,this.minOrthographicSize+=i,this.maxOrthographicSize+=i;var s=e.ecModel,l={};["animation","animationDurationUpdate","animationEasingUpdate"].forEach(function(f){l[f]=Ei(e.get(f),s&&s.get(f))});var u=Ei(t.alpha,e.get("alpha"))||0,c=Ei(t.beta,e.get("beta"))||0,h=Ei(t.center,e.get("center"))||[0,0,0];l.animation&&l.animationDurationUpdate>0&&this._notFirst?this.animateTo({alpha:u,beta:c,center:h,distance:a,orthographicSize:o,easing:l.animationEasingUpdate,duration:l.animationDurationUpdate}):(this.setDistance(a),this.setAlpha(u),this.setBeta(c),this.setCenter(h),this.setOrthographicSize(o)),this._notFirst=!0,this._validateProperties()},_validateProperties:function(){},animateTo:function(e){var t=this.zr,r=this,i={},n={};return e.distance!=null&&(i.distance=this.getDistance(),n.distance=e.distance),e.orthographicSize!=null&&(i.orthographicSize=this.getOrthographicSize(),n.orthographicSize=e.orthographicSize),e.alpha!=null&&(i.alpha=this.getAlpha(),n.alpha=e.alpha),e.beta!=null&&(i.beta=this.getBeta(),n.beta=e.beta),e.center!=null&&(i.center=this.getCenter(),n.center=e.center),this._addAnimator(t.animation.animate(i).when(e.duration||1e3,n).during(function(){i.alpha!=null&&r.setAlpha(i.alpha),i.beta!=null&&r.setBeta(i.beta),i.distance!=null&&r.setDistance(i.distance),i.center!=null&&r.setCenter(i.center),i.orthographicSize!=null&&r.setOrthographicSize(i.orthographicSize),r._needsUpdate=!0})).start(e.easing||"linear")},stopAllAnimation:function(){for(var e=0;e<this._animators.length;e++)this._animators[e].stop();this._animators.length=0},update:function(){this._needsUpdate=!0,this._update(20)},_isAnimating:function(){return this._animators.length>0},_update:function(e){if(this._rotating){var t=(this.autoRotateDirection==="cw"?1:-1)*this.autoRotateSpeed/180*Math.PI;this._phi-=t*e/1e3,this._needsUpdate=!0}else this._rotateVelocity.len()>0&&(this._needsUpdate=!0);(Math.abs(this._zoomSpeed)>.1||this._panVelocity.len()>0)&&(this._needsUpdate=!0),this._needsUpdate&&(e=Math.min(e,50),this._updateDistanceOrSize(e),this._updatePan(e),this._updateRotate(e),this._updateTransform(),this.getCamera().update(),this.zr&&this.zr.refresh(),this.trigger("update"),this._needsUpdate=!1)},_updateRotate:function(e){var t=this._rotateVelocity;this._phi=t.y*e/20+this._phi,this._theta=t.x*e/20+this._theta,this.setAlpha(this.getAlpha()),this.setBeta(this.getBeta()),this._vectorDamping(t,Math.pow(this.damping,e/16))},_updateDistanceOrSize:function(e){this._projection==="perspective"?this._setDistance(this._distance+this._zoomSpeed*e/20):this._setOrthoSize(this._orthoSize+this._zoomSpeed*e/20),this._zoomSpeed*=Math.pow(this.damping,e/16)},_setDistance:function(e){this._distance=Math.max(Math.min(e,this.maxDistance),this.minDistance)},_setOrthoSize:function(e){this._orthoSize=Math.max(Math.min(e,this.maxOrthographicSize),this.minOrthographicSize);var t=this.getCamera(),r=this._orthoSize,i=r/this.viewGL.viewport.height*this.viewGL.viewport.width;t.left=-i/2,t.right=i/2,t.top=r/2,t.bottom=-r/2},_updatePan:function(e){var t=this._panVelocity,r=this._distance,i=this.getCamera(),n=i.worldTransform.y,a=i.worldTransform.x;this._center.scaleAndAdd(a,-t.x*r/200).scaleAndAdd(n,-t.y*r/200),this._vectorDamping(t,0)},_updateTransform:function(){var e=this.getCamera(),t=new k,r=this._theta+Math.PI/2,i=this._phi+Math.PI/2,n=Math.sin(r);t.x=n*Math.cos(i),t.y=-Math.cos(r),t.z=n*Math.sin(i),e.position.copy(this._center).scaleAndAdd(t,this._distance),e.rotation.identity().rotateY(-this._phi).rotateX(-this._theta)},_startCountingStill:function(){clearTimeout(this._stillTimeout);var e=this.autoRotateAfterStill,t=this;!isNaN(e)&&e>0&&(this._stillTimeout=setTimeout(function(){t._rotating=!0},e*1e3))},_vectorDamping:function(e,t){var r=e.len();r=r*t,r<1e-4&&(r=0),e.normalize().scale(r)},_decomposeTransform:function(){if(this.getCamera()){this.getCamera().updateWorldTransform();var e=this.getCamera().worldTransform.z,t=Math.asin(e.y),r=Math.atan2(e.x,e.z);this._theta=t,this._phi=-r,this.setBeta(this.getBeta()),this.setAlpha(this.getAlpha()),this.getCamera().aspect?this._setDistance(this.getCamera().position.dist(this._center)):this._setOrthoSize(this.getCamera().top-this.getCamera().bottom)}},_mouseDownHandler:function(e){if(!e.target&&!this._isAnimating()){var t=e.offsetX,r=e.offsetY;this.viewGL&&!this.viewGL.containPoint(t,r)||(this.zr.on("mousemove",this._mouseMoveHandler),this.zr.on("mouseup",this._mouseUpHandler),e.event.targetTouches?e.event.targetTouches.length===1&&(this._mode="rotate"):e.event.button===is[this.rotateMouseButton]?this._mode="rotate":e.event.button===is[this.panMouseButton]?this._mode="pan":this._mode="",this._rotateVelocity.set(0,0),this._rotating=!1,this.autoRotate&&this._startCountingStill(),this._mouseX=e.offsetX,this._mouseY=e.offsetY)}},_mouseMoveHandler:function(e){if(!(e.target&&e.target.__isGLToZRProxy)&&!this._isAnimating()){var t=ns(this.panSensitivity),r=ns(this.rotateSensitivity);this._mode==="rotate"?(this._rotateVelocity.y=(e.offsetX-this._mouseX)/this.zr.getHeight()*2*r[0],this._rotateVelocity.x=(e.offsetY-this._mouseY)/this.zr.getWidth()*2*r[1]):this._mode==="pan"&&(this._panVelocity.x=(e.offsetX-this._mouseX)/this.zr.getWidth()*t[0]*400,this._panVelocity.y=(-e.offsetY+this._mouseY)/this.zr.getHeight()*t[1]*400),this._mouseX=e.offsetX,this._mouseY=e.offsetY,e.event.preventDefault()}},_mouseWheelHandler:function(e){if(!this._isAnimating()){var t=e.event.wheelDelta||-e.event.detail;this._zoomHandler(e,t)}},_pinchHandler:function(e){this._isAnimating()||(this._zoomHandler(e,e.pinchScale>1?1:-1),this._mode="")},_zoomHandler:function(e,t){if(t!==0){var r=e.offsetX,i=e.offsetY;if(!(this.viewGL&&!this.viewGL.containPoint(r,i))){var n;this._projection==="perspective"?n=Math.max(Math.max(Math.min(this._distance-this.minDistance,this.maxDistance-this._distance))/20,.5):n=Math.max(Math.max(Math.min(this._orthoSize-this.minOrthographicSize,this.maxOrthographicSize-this._orthoSize))/20,.5),this._zoomSpeed=(t>0?-1:1)*n*this.zoomSensitivity,this._rotating=!1,this.autoRotate&&this._mode==="rotate"&&this._startCountingStill(),e.event.preventDefault()}}},_mouseUpHandler:function(){this.zr.off("mousemove",this._mouseMoveHandler),this.zr.off("mouseup",this._mouseUpHandler)},_isRightMouseButtonUsed:function(){return this.rotateMouseButton==="right"||this.panMouseButton==="right"},_contextMenuHandler:function(e){this._isRightMouseButtonUsed()&&e.preventDefault()},_addAnimator:function(e){var t=this._animators;return t.push(e),e.done(function(){var r=t.indexOf(e);r>=0&&t.splice(r,1)}),e}});Object.defineProperty(gl.prototype,"autoRotate",{get:function(e){return this._autoRotate},set:function(e){this._autoRotate=e,this._rotating=e}});const Zn=gl,Yi={convertToDynamicArray:function(e){e&&this.resetOffset();var t=this.attributes;for(var r in t)e||!t[r].value?t[r].value=[]:t[r].value=Array.prototype.slice.call(t[r].value);e||!this.indices?this.indices=[]:this.indices=Array.prototype.slice.call(this.indices)},convertToTypedArray:function(){var e=this.attributes;for(var t in e)e[t].value&&e[t].value.length>0?e[t].value=new Float32Array(e[t].value):e[t].value=null;this.indices&&this.indices.length>0&&(this.indices=this.vertexCount>65535?new Uint32Array(this.indices):new Uint16Array(this.indices)),this.dirty()}},We={vec2:Q,vec3:R,vec4:Z,mat2:Ve,mat2d:Xe,mat3:me,mat4:H,quat:re};var pa=We.vec3,as=[[0,0],[1,1]],yl=ye.extend(function(){return{segmentScale:1,dynamic:!0,useNativeLine:!0,attributes:{position:new ye.Attribute("position","float",3,"POSITION"),positionPrev:new ye.Attribute("positionPrev","float",3),positionNext:new ye.Attribute("positionNext","float",3),prevPositionPrev:new ye.Attribute("prevPositionPrev","float",3),prevPosition:new ye.Attribute("prevPosition","float",3),prevPositionNext:new ye.Attribute("prevPositionNext","float",3),offset:new ye.Attribute("offset","float",1),color:new ye.Attribute("color","float",4,"COLOR")}}},{resetOffset:function(){this._vertexOffset=0,this._triangleOffset=0,this._itemVertexOffsets=[]},setVertexCount:function(e){var t=this.attributes;this.vertexCount!==e&&(t.position.init(e),t.color.init(e),this.useNativeLine||(t.positionPrev.init(e),t.positionNext.init(e),t.offset.init(e)),e>65535?this.indices instanceof Uint16Array&&(this.indices=new Uint32Array(this.indices)):this.indices instanceof Uint32Array&&(this.indices=new Uint16Array(this.indices)))},setTriangleCount:function(e){this.triangleCount!==e&&(e===0?this.indices=null:this.indices=this.vertexCount>65535?new Uint32Array(e*3):new Uint16Array(e*3))},_getCubicCurveApproxStep:function(e,t,r,i){var n=pa.dist(e,t)+pa.dist(r,t)+pa.dist(i,r),a=1/(n+1)*this.segmentScale;return a},getCubicCurveVertexCount:function(e,t,r,i){var n=this._getCubicCurveApproxStep(e,t,r,i),a=Math.ceil(1/n);return this.useNativeLine?a*2:a*2+2},getCubicCurveTriangleCount:function(e,t,r,i){var n=this._getCubicCurveApproxStep(e,t,r,i),a=Math.ceil(1/n);return this.useNativeLine?0:a*2},getLineVertexCount:function(){return this.getPolylineVertexCount(as)},getLineTriangleCount:function(){return this.getPolylineTriangleCount(as)},getPolylineVertexCount:function(e){var t;if(typeof e=="number")t=e;else{var r=typeof e[0]!="number";t=r?e.length:e.length/3}return this.useNativeLine?(t-1)*2:(t-1)*2+2},getPolylineTriangleCount:function(e){var t;if(typeof e=="number")t=e;else{var r=typeof e[0]!="number";t=r?e.length:e.length/3}return this.useNativeLine?0:Math.max(t-1,0)*2},addCubicCurve:function(e,t,r,i,n,a){a==null&&(a=1);for(var o=e[0],s=e[1],l=e[2],u=t[0],c=t[1],h=t[2],f=r[0],d=r[1],v=r[2],p=i[0],m=i[1],_=i[2],x=this._getCubicCurveApproxStep(e,t,r,i),y=x*x,g=y*x,w=3*x,T=3*y,b=6*y,S=6*g,C=o-u*2+f,L=s-c*2+d,A=l-h*2+v,M=(u-f)*3-o+p,P=(c-d)*3-s+m,D=(h-v)*3-l+_,N=o,U=s,W=l,z=(u-o)*w+C*T+M*g,$=(c-s)*w+L*T+P*g,G=(h-l)*w+A*T+D*g,ne=C*b+M*S,B=L*b+P*S,I=A*b+D*S,Y=M*S,X=P*S,Te=D*S,ue=0,he=0,we=Math.ceil(1/x),Le=new Float32Array((we+1)*3),Le=[],Pe=0,he=0;he<we+1;he++)Le[Pe++]=N,Le[Pe++]=U,Le[Pe++]=W,N+=z,U+=$,W+=G,z+=ne,$+=B,G+=I,ne+=Y,B+=X,I+=Te,ue+=x,ue>1&&(N=z>0?Math.min(N,p):Math.max(N,p),U=$>0?Math.min(U,m):Math.max(U,m),W=G>0?Math.min(W,_):Math.max(W,_));return this.addPolyline(Le,n,a)},addLine:function(e,t,r,i){return this.addPolyline([e,t],r,i)},addPolyline:function(e,t,r,i,n){if(e.length){var a=typeof e[0]!="number";if(n==null&&(n=a?e.length:e.length/3),!(n<2)){i==null&&(i=0),r==null&&(r=1),this._itemVertexOffsets.push(this._vertexOffset);var a=typeof e[0]!="number",o=a?typeof t[0]!="number":t.length/4===n,s=this.attributes.position,l=this.attributes.positionPrev,u=this.attributes.positionNext,c=this.attributes.color,h=this.attributes.offset,f=this.indices,d=this._vertexOffset,v,p;r=Math.max(r,.01);for(var m=i;m<n;m++){if(a)v=e[m],o?p=t[m]:p=t;else{var _=m*3;if(v=v||[],v[0]=e[_],v[1]=e[_+1],v[2]=e[_+2],o){var x=m*4;p=p||[],p[0]=t[x],p[1]=t[x+1],p[2]=t[x+2],p[3]=t[x+3]}else p=t}if(this.useNativeLine?m>1&&(s.copy(d,d-1),c.copy(d,d-1),d++):(m<n-1&&(l.set(d+2,v),l.set(d+3,v)),m>0&&(u.set(d-2,v),u.set(d-1,v)),s.set(d,v),s.set(d+1,v),c.set(d,p),c.set(d+1,p),h.set(d,r/2),h.set(d+1,-r/2),d+=2),this.useNativeLine)c.set(d,p),s.set(d,v),d++;else if(m>0){var y=this._triangleOffset*3,f=this.indices;f[y]=d-4,f[y+1]=d-3,f[y+2]=d-2,f[y+3]=d-3,f[y+4]=d-1,f[y+5]=d-2,this._triangleOffset+=2}}if(!this.useNativeLine){var g=this._vertexOffset,w=this._vertexOffset+n*2;l.copy(g,g+2),l.copy(g+1,g+3),u.copy(w-1,w-3),u.copy(w-2,w-4)}return this._vertexOffset=d,this._vertexOffset}}},setItemColor:function(e,t){for(var r=this._itemVertexOffsets[e],i=e<this._itemVertexOffsets.length-1?this._itemVertexOffsets[e+1]:this._vertexOffset,n=r;n<i;n++)this.attributes.color.set(n,t);this.dirty("color")},currentTriangleOffset:function(){return this._triangleOffset},currentVertexOffset:function(){return this._vertexOffset}});_r(yl.prototype,Yi);const kr=yl;function Mn(e,t,r,i,n,a,o){this._zr=e,this._x=0,this._y=0,this._rowHeight=0,this.width=i,this.height=n,this.offsetX=t,this.offsetY=r,this.dpr=o,this.gap=a}Mn.prototype={constructor:Mn,clear:function(){this._x=0,this._y=0,this._rowHeight=0},add:function(e,t,r){var i=e.getBoundingRect();t==null&&(t=i.width),r==null&&(r=i.height),t*=this.dpr,r*=this.dpr,this._fitElement(e,t,r);var n=this._x,a=this._y,o=this.width*this.dpr,s=this.height*this.dpr,l=this.gap;if(n+t+l>o&&(n=this._x=0,a+=this._rowHeight+l,this._y=a,this._rowHeight=0),this._x+=t+l,this._rowHeight=Math.max(this._rowHeight,r),a+r+l>s)return null;e.x+=this.offsetX*this.dpr+n,e.y+=this.offsetY*this.dpr+a,this._zr.add(e);var u=[this.offsetX/this.width,this.offsetY/this.height],c=[[n/o+u[0],a/s+u[1]],[(n+t)/o+u[0],(a+r)/s+u[1]]];return c},_fitElement:function(e,t,r){var i=e.getBoundingRect(),n=t/i.width,a=r/i.height;e.x=-i.x*n,e.y=-i.y*a,e.scaleX=n,e.scaleY=a,e.update()}};function Pn(e){e=e||{},e.width=e.width||512,e.height=e.height||512,e.devicePixelRatio=e.devicePixelRatio||1,e.gap=e.gap==null?2:e.gap;var t=document.createElement("canvas");t.width=e.width*e.devicePixelRatio,t.height=e.height*e.devicePixelRatio,this._canvas=t,this._texture=new se({image:t,flipY:!1});var r=this;this._zr=Au(t);var i=this._zr.refreshImmediately;this._zr.refreshImmediately=function(){i.call(this),r._texture.dirty(),r.onupdate&&r.onupdate()},this._dpr=e.devicePixelRatio,this._coords={},this.onupdate=e.onupdate,this._gap=e.gap,this._textureAtlasNodes=[new Mn(this._zr,0,0,e.width,e.height,this._gap,this._dpr)],this._nodeWidth=e.width,this._nodeHeight=e.height,this._currentNodeIdx=0}Pn.prototype={clear:function(){for(var e=0;e<this._textureAtlasNodes.length;e++)this._textureAtlasNodes[e].clear();this._currentNodeIdx=0,this._zr.clear(),this._coords={}},getWidth:function(){return this._width},getHeight:function(){return this._height},getTexture:function(){return this._texture},getDevicePixelRatio:function(){return this._dpr},getZr:function(){return this._zr},_getCurrentNode:function(){return this._textureAtlasNodes[this._currentNodeIdx]},_expand:function(){if(this._currentNodeIdx++,this._textureAtlasNodes[this._currentNodeIdx])return this._textureAtlasNodes[this._currentNodeIdx];var e=4096/this._dpr,t=this._textureAtlasNodes,r=t.length,i=r*this._nodeWidth%e,n=Math.floor(r*this._nodeWidth/e)*this._nodeHeight;if(!(n>=e)){var a=(i+this._nodeWidth)*this._dpr,o=(n+this._nodeHeight)*this._dpr;try{this._zr.resize({width:a,height:o})}catch{this._canvas.width=a,this._canvas.height=o}var s=new Mn(this._zr,i,n,this._nodeWidth,this._nodeHeight,this._gap,this._dpr);return this._textureAtlasNodes.push(s),s}},add:function(e,t,r){if(this._coords[e.id])return this._coords[e.id];var i=this._getCurrentNode().add(e,t,r);if(!i){var n=this._expand();if(!n)return;i=n.add(e,t,r)}return this._coords[e.id]=i,i},getCoordsScale:function(){var e=this._dpr;return[this._nodeWidth/this._canvas.width*e,this._nodeHeight/this._canvas.height*e]},getCoords:function(e){return this._coords[e]},dispose:function(){this._zr.dispose()}};function mr(){}mr.prototype={constructor:mr,setScene:function(e){this._scene=e,this._skybox&&this._skybox.attachScene(this._scene)},initLight:function(e){this._lightRoot=e,this.mainLight=new E.DirectionalLight({shadowBias:.005}),this.ambientLight=new E.AmbientLight,e.add(this.mainLight),e.add(this.ambientLight)},dispose:function(){this._lightRoot&&(this._lightRoot.remove(this.mainLight),this._lightRoot.remove(this.ambientLight))},updateLight:function(e){var t=this.mainLight,r=this.ambientLight,i=e.getModel("light"),n=i.getModel("main"),a=i.getModel("ambient");t.intensity=n.get("intensity"),r.intensity=a.get("intensity"),t.color=E.parseColor(n.get("color")).slice(0,3),r.color=E.parseColor(a.get("color")).slice(0,3);var o=n.get("alpha")||0,s=n.get("beta")||0;t.position.setArray(E.directionFromAlphaBeta(o,s)),t.lookAt(E.Vector3.ZERO),t.castShadow=n.get("shadow"),t.shadowResolution=E.getShadowResolution(n.get("shadowQuality"))},updateAmbientCubemap:function(e,t,r){var i=t.getModel("light.ambientCubemap"),n=i.get("texture");if(n){this._cubemapLightsCache=this._cubemapLightsCache||{};var a=this._cubemapLightsCache[n];if(!a){var o=this;a=this._cubemapLightsCache[n]=E.createAmbientCubemap(i.option,e,r,function(){o._isSkyboxFromAmbientCubemap&&o._skybox.setEnvironmentMap(a.specular.cubemap),r.getZr().refresh()})}this._lightRoot.add(a.diffuse),this._lightRoot.add(a.specular),this._currentCubemapLights=a}else this._currentCubemapLights&&(this._lightRoot.remove(this._currentCubemapLights.diffuse),this._lightRoot.remove(this._currentCubemapLights.specular),this._currentCubemapLights=null)},updateSkybox:function(e,t,r){var i=t.get("environment"),n=this;function a(){return n._skybox=n._skybox||new Bi,n._skybox}var o=a();if(i&&i!=="none")if(i==="auto")if(this._isSkyboxFromAmbientCubemap=!0,this._currentCubemapLights){var s=this._currentCubemapLights.specular.cubemap;o.setEnvironmentMap(s),this._scene&&o.attachScene(this._scene),o.material.set("lod",3)}else this._skybox&&this._skybox.detachScene();else if(typeof i=="object"&&i.colorStops||typeof i=="string"&&Bs(i)){this._isSkyboxFromAmbientCubemap=!1;var l=new E.Texture2D({anisotropic:8,flipY:!1});o.setEnvironmentMap(l);var u=l.image=document.createElement("canvas");u.width=u.height=16;var c=u.getContext("2d"),h=new Us({shape:{x:0,y:0,width:16,height:16},style:{fill:i}});zs(c,h),o.attachScene(this._scene)}else{this._isSkyboxFromAmbientCubemap=!1;var l=E.loadTexture(i,r,{anisotropic:8,flipY:!1});o.setEnvironmentMap(l),o.attachScene(this._scene)}else this._skybox&&this._skybox.detachScene(this._scene),this._skybox=null;var f=t.coordinateSystem;if(this._skybox)if(f&&f.viewGL&&i!=="auto"&&!(i.match&&i.match(/.hdr$/))){var d=f.viewGL.isLinearSpace()?"define":"undefine";this._skybox.material[d]("fragment","SRGB_DECODE")}else this._skybox.material.undefine("fragment","SRGB_DECODE")}};var Er=We.vec3,xl=ye.extend(function(){return{segmentScale:1,useNativeLine:!0,attributes:{position:new ye.Attribute("position","float",3,"POSITION"),normal:new ye.Attribute("normal","float",3,"NORMAL"),color:new ye.Attribute("color","float",4,"COLOR")}}},{resetOffset:function(){this._vertexOffset=0,this._faceOffset=0},setQuadCount:function(e){var t=this.attributes,r=this.getQuadVertexCount()*e,i=this.getQuadTriangleCount()*e;this.vertexCount!==r&&(t.position.init(r),t.normal.init(r),t.color.init(r)),this.triangleCount!==i&&(this.indices=r>65535?new Uint32Array(i*3):new Uint16Array(i*3))},getQuadVertexCount:function(){return 4},getQuadTriangleCount:function(){return 2},addQuad:function(){var e=Er.create(),t=Er.create(),r=Er.create(),i=[0,3,1,3,2,1];return function(n,a){var o=this.attributes.position,s=this.attributes.normal,l=this.attributes.color;Er.sub(e,n[1],n[0]),Er.sub(t,n[2],n[1]),Er.cross(r,e,t),Er.normalize(r,r);for(var u=0;u<4;u++)o.set(this._vertexOffset+u,n[u]),l.set(this._vertexOffset+u,a),s.set(this._vertexOffset+u,r);for(var c=this._faceOffset*3,u=0;u<6;u++)this.indices[c+u]=i[u]+this._vertexOffset;this._vertexOffset+=4,this._faceOffset+=2}}()});_r(xl.prototype,Yi);const Af=xl;var Ba=ce.firstNotNull,Cf={x:0,y:2,z:1};function Lf(e,t,r,i){var n=[0,0,0],a=i<0?r.getExtentMin():r.getExtentMax();n[Cf[r.dim]]=a,e.position.setArray(n),e.rotation.identity(),t.distance=-Math.abs(a),t.normal.set(0,0,0),r.dim==="x"?(e.rotation.rotateY(i*Math.PI/2),t.normal.x=-i):r.dim==="z"?(e.rotation.rotateX(-i*Math.PI/2),t.normal.y=-i):(i>0&&e.rotation.rotateY(Math.PI),t.normal.z=-i)}function Yn(e,t,r){this.rootNode=new E.Node;var i=new E.Mesh({geometry:new kr({useNativeLine:!1}),material:t,castShadow:!1,ignorePicking:!0,$ignorePicking:!0,renderOrder:1}),n=new E.Mesh({geometry:new Af,material:r,castShadow:!1,culling:!1,ignorePicking:!0,$ignorePicking:!0,renderOrder:0});this.rootNode.add(n),this.rootNode.add(i),this.faceInfo=e,this.plane=new E.Plane,this.linesMesh=i,this.quadsMesh=n}Yn.prototype.update=function(e,t,r){var i=e.coordinateSystem,n=[i.getAxis(this.faceInfo[0]),i.getAxis(this.faceInfo[1])],a=this.linesMesh.geometry,o=this.quadsMesh.geometry;a.convertToDynamicArray(!0),o.convertToDynamicArray(!0),this._updateSplitLines(a,n,e,r),this._udpateSplitAreas(o,n,e,r),a.convertToTypedArray(),o.convertToTypedArray();var s=i.getAxis(this.faceInfo[2]);Lf(this.rootNode,this.plane,s,this.faceInfo[3])};Yn.prototype._updateSplitLines=function(e,t,r,i){var n=i.getDevicePixelRatio();t.forEach(function(a,o){var s=a.model,l=t[1-o].getExtent();if(!a.scale.isBlank()){var u=s.getModel("splitLine",r.getModel("splitLine"));if(u.get("show")){var c=u.getModel("lineStyle"),h=c.get("color"),f=Ba(c.get("opacity"),1),d=Ba(c.get("width"),1);h=Xt(h)?h:[h];for(var v=a.getTicksCoords({tickModel:u}),p=0,m=0;m<v.length;m++){var _=v[m].coord,x=E.parseColor(h[p%h.length]);x[3]*=f;var y=[0,0,0],g=[0,0,0];y[o]=g[o]=_,y[1-o]=l[0],g[1-o]=l[1],e.addLine(y,g,x,d*n),p++}}}})};Yn.prototype._udpateSplitAreas=function(e,t,r,i){t.forEach(function(n,a){var o=n.model,s=t[1-a].getExtent();if(!n.scale.isBlank()){var l=o.getModel("splitArea",r.getModel("splitArea"));if(l.get("show")){var u=l.getModel("areaStyle"),c=u.get("color"),h=Ba(u.get("opacity"),1);c=Xt(c)?c:[c];for(var f=n.getTicksCoords({tickModel:l,clamp:!0}),d=0,v=[0,0,0],p=[0,0,0],m=0;m<f.length;m++){var _=f[m].coord,x=[0,0,0],y=[0,0,0];if(x[a]=y[a]=_,x[1-a]=s[0],y[1-a]=s[1],m===0){v=x,p=y;continue}var g=E.parseColor(c[d%c.length]);g[3]*=h,e.addQuad([v,x,y,p],g),v=x,p=y,d++}}}})};var os=[0,1,2,0,2,3],Tl=ye.extend(function(){return{attributes:{position:new ye.Attribute("position","float",3,"POSITION"),texcoord:new ye.Attribute("texcoord","float",2,"TEXCOORD_0"),offset:new ye.Attribute("offset","float",2),color:new ye.Attribute("color","float",4,"COLOR")}}},{resetOffset:function(){this._vertexOffset=0,this._faceOffset=0},setSpriteCount:function(e){this._spriteCount=e;var t=e*4,r=e*2;this.vertexCount!==t&&(this.attributes.position.init(t),this.attributes.offset.init(t),this.attributes.color.init(t)),this.triangleCount!==r&&(this.indices=t>65535?new Uint32Array(r*3):new Uint16Array(r*3))},setSpriteAlign:function(e,t,r,i,n){r==null&&(r="left"),i==null&&(i="top");var a,o,s,l;switch(n=n||0,r){case"left":a=n,s=t[0]+n;break;case"center":case"middle":a=-t[0]/2,s=t[0]/2;break;case"right":a=-t[0]-n,s=-n;break}switch(i){case"bottom":o=n,l=t[1]+n;break;case"middle":o=-t[1]/2,l=t[1]/2;break;case"top":o=-t[1]-n,l=-n;break}var u=e*4,c=this.attributes.offset;c.set(u,[a,l]),c.set(u+1,[s,l]),c.set(u+2,[s,o]),c.set(u+3,[a,o])},addSprite:function(e,t,r,i,n,a){var o=this._vertexOffset;this.setSprite(this._vertexOffset/4,e,t,r,i,n,a);for(var s=0;s<os.length;s++)this.indices[this._faceOffset*3+s]=os[s]+o;return this._faceOffset+=2,this._vertexOffset+=4,o/4},setSprite:function(e,t,r,i,n,a,o){for(var s=e*4,l=this.attributes,u=0;u<4;u++)l.position.set(s+u,t);var c=l.texcoord;c.set(s,[i[0][0],i[0][1]]),c.set(s+1,[i[1][0],i[0][1]]),c.set(s+2,[i[1][0],i[1][1]]),c.set(s+3,[i[0][0],i[1][1]]),this.setSpriteAlign(e,r,n,a,o)}});_r(Tl.prototype,Yi);const Df=Tl,Mf=`@export ecgl.labels.vertex

attribute vec3 position: POSITION;
attribute vec2 texcoord: TEXCOORD_0;
attribute vec2 offset;
#ifdef VERTEX_COLOR
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;
#endif

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform vec4 viewport : VIEWPORT;

varying vec2 v_Texcoord;

void main()
{
 vec4 proj = worldViewProjection * vec4(position, 1.0);

 vec2 screen = (proj.xy / abs(proj.w) + 1.0) * 0.5 * viewport.zw;

 screen += offset;

 proj.xy = (screen / viewport.zw - 0.5) * 2.0 * abs(proj.w);
 gl_Position = proj;
#ifdef VERTEX_COLOR
 v_Color = a_Color;
#endif
 v_Texcoord = texcoord;
}
@end


@export ecgl.labels.fragment

uniform vec3 color : [1.0, 1.0, 1.0];
uniform float alpha : 1.0;
uniform sampler2D textureAtlas;
uniform vec2 uvScale: [1.0, 1.0];

#ifdef VERTEX_COLOR
varying vec4 v_Color;
#endif
varying float v_Miter;

varying vec2 v_Texcoord;

void main()
{
 gl_FragColor = vec4(color, alpha) * texture2D(textureAtlas, v_Texcoord * uvScale);
#ifdef VERTEX_COLOR
 gl_FragColor *= v_Color;
#endif
}

@end`;E.Shader.import(Mf);const io=E.Mesh.extend(function(){var e=new Df({dynamic:!0}),t=new E.Material({shader:E.createShader("ecgl.labels"),transparent:!0,depthMask:!1});return{geometry:e,material:t,culling:!1,castShadow:!1,ignorePicking:!0}});var Ar=ce.firstNotNull,Cr={x:0,y:2,z:1};function no(e,t){var r=new E.Mesh({geometry:new kr({useNativeLine:!1}),material:t,castShadow:!1,ignorePicking:!0,renderOrder:2}),i=new io;i.material.depthMask=!1;var n=new E.Node;n.add(r),n.add(i),this.rootNode=n,this.dim=e,this.linesMesh=r,this.labelsMesh=i,this.axisLineCoords=null,this.labelElements=[]}var ma={x:"y",y:"x",z:"y"};no.prototype.update=function(e,t,r){var i=e.coordinateSystem,n=i.getAxis(this.dim),a=this.linesMesh.geometry,o=this.labelsMesh.geometry;a.convertToDynamicArray(!0),o.convertToDynamicArray(!0);var s=n.model,l=n.getExtent(),A=r.getDevicePixelRatio(),u=s.getModel("axisLine",e.getModel("axisLine")),c=s.getModel("axisTick",e.getModel("axisTick")),h=s.getModel("axisLabel",e.getModel("axisLabel")),f=u.get("lineStyle.color");if(u.get("show")){var d=u.getModel("lineStyle"),v=[0,0,0],p=[0,0,0],m=Cr[n.dim];v[m]=l[0],p[m]=l[1],this.axisLineCoords=[v,p];var _=E.parseColor(f),x=Ar(d.get("width"),1),y=Ar(d.get("opacity"),1);_[3]*=y,a.addLine(v,p,_,x*A)}if(c.get("show")){var g=c.getModel("lineStyle"),w=E.parseColor(Ar(g.get("color"),f)),x=Ar(g.get("width"),1);w[3]*=Ar(g.get("opacity"),1);for(var T=n.getTicksCoords(),b=c.get("length"),S=0;S<T.length;S++){var C=T[S].coord,v=[0,0,0],p=[0,0,0],m=Cr[n.dim],L=Cr[ma[n.dim]];v[m]=p[m]=C,p[L]=b,a.addLine(v,p,w,x*A)}}this.labelElements=[];var A=r.getDevicePixelRatio();if(h.get("show"))for(var T=n.getTicksCoords(),M=s.get("data"),P=h.get("margin"),D=n.getViewLabels(),S=0;S<D.length;S++){var N=D[S].tickValue,U=D[S].formattedLabel,W=D[S].rawLabel,C=n.dataToCoord(N),z=[0,0,0],m=Cr[n.dim],L=Cr[ma[n.dim]];z[m]=z[m]=C,z[L]=P;var $=h;M&&M[N]&&M[N].textStyle&&($=new Un(M[N].textStyle,h,s.ecModel));var G=Ar($.get("color"),f),ne=new Sn({style:bn($,{text:U,fill:typeof G=="function"?G(n.type==="category"?W:n.type==="value"?N+"":N,S):G,verticalAlign:"top",align:"left"})}),B=t.add(ne),I=ne.getBoundingRect();o.addSprite(z,[I.width*A,I.height*A],B),this.labelElements.push(ne)}if(s.get("name")){var Y=s.getModel("nameTextStyle"),z=[0,0,0],m=Cr[n.dim],L=Cr[ma[n.dim]],X=Ar(Y.get("color"),f),Te=Y.get("borderColor"),x=Y.get("borderWidth");z[m]=z[m]=(l[0]+l[1])/2,z[L]=s.get("nameGap");var ne=new Sn({style:bn(Y,{text:s.get("name"),fill:X,stroke:Te,lineWidth:x})}),B=t.add(ne),I=ne.getBoundingRect();o.addSprite(z,[I.width*A,I.height*A],B),ne.__idx=this.labelElements.length,this.nameLabelElement=ne}this.labelsMesh.material.set("textureAtlas",t.getTexture()),this.labelsMesh.material.set("uvScale",t.getCoordsScale()),a.convertToTypedArray(),o.convertToTypedArray()};no.prototype.setSpriteAlign=function(e,t,r){for(var i=r.getDevicePixelRatio(),n=this.labelsMesh.geometry,a=0;a<this.labelElements.length;a++){var o=this.labelElements[a],s=o.getBoundingRect();n.setSpriteAlign(a,[s.width*i,s.height*i],e,t)}var l=this.nameLabelElement;if(l){var s=l.getBoundingRect();n.setSpriteAlign(l.__idx,[s.width*i,s.height*i],e,t),n.dirty()}this.textAlign=e,this.textVerticalAlign=t};const qn=`@export ecgl.lines3D.vertex

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;

attribute vec3 position: POSITION;
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;

void main()
{
 gl_Position = worldViewProjection * vec4(position, 1.0);
 v_Color = a_Color;
}

@end

@export ecgl.lines3D.fragment

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

varying vec4 v_Color;

@import clay.util.srgb

void main()
{
#ifdef SRGB_DECODE
 gl_FragColor = sRGBToLinear(color * v_Color);
#else
 gl_FragColor = color * v_Color;
#endif
}
@end



@export ecgl.lines3D.clipNear

vec4 clipNear(vec4 p1, vec4 p2) {
 float n = (p1.w - near) / (p1.w - p2.w);
 return vec4(mix(p1.xy, p2.xy, n), -near, near);
}

@end

@export ecgl.lines3D.expandLine
#ifdef VERTEX_ANIMATION
 vec4 prevProj = worldViewProjection * vec4(mix(prevPositionPrev, positionPrev, percent), 1.0);
 vec4 currProj = worldViewProjection * vec4(mix(prevPosition, position, percent), 1.0);
 vec4 nextProj = worldViewProjection * vec4(mix(prevPositionNext, positionNext, percent), 1.0);
#else
 vec4 prevProj = worldViewProjection * vec4(positionPrev, 1.0);
 vec4 currProj = worldViewProjection * vec4(position, 1.0);
 vec4 nextProj = worldViewProjection * vec4(positionNext, 1.0);
#endif

 if (currProj.w < 0.0) {
 if (nextProj.w > 0.0) {
 currProj = clipNear(currProj, nextProj);
 }
 else if (prevProj.w > 0.0) {
 currProj = clipNear(currProj, prevProj);
 }
 }

 vec2 prevScreen = (prevProj.xy / abs(prevProj.w) + 1.0) * 0.5 * viewport.zw;
 vec2 currScreen = (currProj.xy / abs(currProj.w) + 1.0) * 0.5 * viewport.zw;
 vec2 nextScreen = (nextProj.xy / abs(nextProj.w) + 1.0) * 0.5 * viewport.zw;

 vec2 dir;
 float len = offset;
 if (position == positionPrev) {
 dir = normalize(nextScreen - currScreen);
 }
 else if (position == positionNext) {
 dir = normalize(currScreen - prevScreen);
 }
 else {
 vec2 dirA = normalize(currScreen - prevScreen);
 vec2 dirB = normalize(nextScreen - currScreen);

 vec2 tanget = normalize(dirA + dirB);

 float miter = 1.0 / max(dot(tanget, dirA), 0.5);
 len *= miter;
 dir = tanget;
 }

 dir = vec2(-dir.y, dir.x) * len;
 currScreen += dir;

 currProj.xy = (currScreen / viewport.zw - 0.5) * 2.0 * abs(currProj.w);
@end


@export ecgl.meshLines3D.vertex

attribute vec3 position: POSITION;
attribute vec3 positionPrev;
attribute vec3 positionNext;
attribute float offset;
attribute vec4 a_Color : COLOR;

#ifdef VERTEX_ANIMATION
attribute vec3 prevPosition;
attribute vec3 prevPositionPrev;
attribute vec3 prevPositionNext;
uniform float percent : 1.0;
#endif

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform vec4 viewport : VIEWPORT;
uniform float near : NEAR;

varying vec4 v_Color;

@import ecgl.common.wireframe.vertexHeader

@import ecgl.lines3D.clipNear

void main()
{
 @import ecgl.lines3D.expandLine

 gl_Position = currProj;

 v_Color = a_Color;

 @import ecgl.common.wireframe.vertexMain
}
@end


@export ecgl.meshLines3D.fragment

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

varying vec4 v_Color;

@import ecgl.common.wireframe.fragmentHeader

@import clay.util.srgb

void main()
{
#ifdef SRGB_DECODE
 gl_FragColor = sRGBToLinear(color * v_Color);
#else
 gl_FragColor = color * v_Color;
#endif

 @import ecgl.common.wireframe.fragmentMain
}

@end`;var ss=ce.firstNotNull;E.Shader.import(qn);var Lr={x:0,y:2,z:1};const Pf=$i.extend({type:"grid3D",__ecgl__:!0,init:function(e,t){var r=[["y","z","x",-1,"left"],["y","z","x",1,"right"],["x","y","z",-1,"bottom"],["x","y","z",1,"top"],["x","z","y",-1,"far"],["x","z","y",1,"near"]],i=["x","y","z"],n=new E.Material({shader:E.createShader("ecgl.color"),depthMask:!1,transparent:!0}),a=new E.Material({shader:E.createShader("ecgl.meshLines3D"),depthMask:!1,transparent:!0});n.define("fragment","DOUBLE_SIDED"),n.define("both","VERTEX_COLOR"),this.groupGL=new E.Node,this._control=new Zn({zr:t.getZr()}),this._control.init(),this._faces=r.map(function(s){var l=new Yn(s,a,n);return this.groupGL.add(l.rootNode),l},this),this._axes=i.map(function(s){var l=new no(s,a);return this.groupGL.add(l.rootNode),l},this);var o=t.getDevicePixelRatio();this._axisLabelSurface=new Pn({width:256,height:256,devicePixelRatio:o}),this._axisLabelSurface.onupdate=function(){t.getZr().refresh()},this._axisPointerLineMesh=new E.Mesh({geometry:new kr({useNativeLine:!1}),material:a,castShadow:!1,ignorePicking:!0,renderOrder:3}),this.groupGL.add(this._axisPointerLineMesh),this._axisPointerLabelsSurface=new Pn({width:128,height:128,devicePixelRatio:o}),this._axisPointerLabelsMesh=new io({ignorePicking:!0,renderOrder:4,castShadow:!1}),this._axisPointerLabelsMesh.material.set("textureAtlas",this._axisPointerLabelsSurface.getTexture()),this.groupGL.add(this._axisPointerLabelsMesh),this._lightRoot=new E.Node,this._sceneHelper=new mr,this._sceneHelper.initLight(this._lightRoot)},render:function(e,t,r){this._model=e,this._api=r;var i=e.coordinateSystem;i.viewGL.add(this._lightRoot),e.get("show")?i.viewGL.add(this.groupGL):i.viewGL.remove(this.groupGL);var n=this._control;n.setViewGL(i.viewGL);var a=e.getModel("viewControl");n.setFromViewControlModel(a,0),this._axisLabelSurface.clear(),n.off("update"),e.get("show")&&(this._faces.forEach(function(o){o.update(e,t,r)},this),this._axes.forEach(function(o){o.update(e,this._axisLabelSurface,r)},this)),n.on("update",this._onCameraChange.bind(this,e,r),this),this._sceneHelper.setScene(i.viewGL.scene),this._sceneHelper.updateLight(e),i.viewGL.setPostEffect(e.getModel("postEffect"),r),i.viewGL.setTemporalSuperSampling(e.getModel("temporalSuperSampling")),this._initMouseHandler(e)},afterRender:function(e,t,r,i){var n=i.renderer;this._sceneHelper.updateAmbientCubemap(n,e,r),this._sceneHelper.updateSkybox(n,e,r)},showAxisPointer:function(e,t,r,i){this._doShowAxisPointer(),this._updateAxisPointer(i.value)},hideAxisPointer:function(e,t,r,i){this._doHideAxisPointer()},_initMouseHandler:function(e){var t=e.coordinateSystem,r=t.viewGL;e.get("show")&&e.get("axisPointer.show")?r.on("mousemove",this._updateAxisPointerOnMousePosition,this):r.off("mousemove",this._updateAxisPointerOnMousePosition)},_updateAxisPointerOnMousePosition:function(e){if(!e.target){for(var t=this._model,r=t.coordinateSystem,i=r.viewGL,n=i.castRay(e.offsetX,e.offsetY,new E.Ray),a,o=0;o<this._faces.length;o++){var s=this._faces[o];if(!s.rootNode.invisible){s.plane.normal.dot(i.camera.worldTransform.z)<0&&s.plane.normal.negate();var l=n.intersectPlane(s.plane);if(l){var u=r.getAxis(s.faceInfo[0]),c=r.getAxis(s.faceInfo[1]),h=Lr[s.faceInfo[0]],f=Lr[s.faceInfo[1]];u.contain(l.array[h])&&c.contain(l.array[f])&&(a=l)}}}if(a){var d=r.pointToData(a.array,[],!0);this._updateAxisPointer(d),this._doShowAxisPointer()}else this._doHideAxisPointer()}},_onCameraChange:function(e,t){e.get("show")&&(this._updateFaceVisibility(),this._updateAxisLinePosition());var r=this._control;t.dispatchAction({type:"grid3DChangeCamera",alpha:r.getAlpha(),beta:r.getBeta(),distance:r.getDistance(),center:r.getCenter(),from:this.uid,grid3DId:e.id})},_updateFaceVisibility:function(){var e=this._control.getCamera(),t=new E.Vector3;e.update();for(var r=0;r<this._faces.length/2;r++){for(var i=[],n=0;n<2;n++){var a=this._faces[r*2+n];a.rootNode.getWorldPosition(t),t.transformMat4(e.viewMatrix),i[n]=t.z}var o=i[0]>i[1]?0:1,s=this._faces[r*2+o],l=this._faces[r*2+1-o];s.rootNode.invisible=!0,l.rootNode.invisible=!1}},_updateAxisLinePosition:function(){var e=this._model.coordinateSystem,t=e.getAxis("x"),r=e.getAxis("y"),i=e.getAxis("z"),n=i.getExtentMax(),a=i.getExtentMin(),o=t.getExtentMin(),s=t.getExtentMax(),l=r.getExtentMax(),u=r.getExtentMin(),c=this._axes[0].rootNode,h=this._axes[1].rootNode,f=this._axes[2].rootNode,d=this._faces,v=d[4].rootNode.invisible?u:l,p=d[2].rootNode.invisible?n:a,m=d[0].rootNode.invisible?o:s,_=d[2].rootNode.invisible?n:a,x=d[0].rootNode.invisible?s:o,y=d[4].rootNode.invisible?u:l;c.rotation.identity(),h.rotation.identity(),f.rotation.identity(),d[4].rootNode.invisible&&(this._axes[0].flipped=!0,c.rotation.rotateX(Math.PI)),d[0].rootNode.invisible&&(this._axes[1].flipped=!0,h.rotation.rotateZ(Math.PI)),d[4].rootNode.invisible&&(this._axes[2].flipped=!0,f.rotation.rotateY(Math.PI)),c.position.set(0,p,v),h.position.set(m,_,0),f.position.set(x,0,y),c.update(),h.update(),f.update(),this._updateAxisLabelAlign()},_updateAxisLabelAlign:function(){var e=this._control.getCamera(),t=[new E.Vector4,new E.Vector4],r=new E.Vector4;this.groupGL.getWorldPosition(r),r.w=1,r.transformMat4(e.viewMatrix).transformMat4(e.projectionMatrix),r.x/=r.w,r.y/=r.w,this._axes.forEach(function(i){var n=i.axisLineCoords;i.labelsMesh.geometry;for(var a=0;a<t.length;a++)t[a].setArray(n[a]),t[a].w=1,t[a].transformMat4(i.rootNode.worldTransform).transformMat4(e.viewMatrix).transformMat4(e.projectionMatrix),t[a].x/=t[a].w,t[a].y/=t[a].w;var o=t[1].x-t[0].x,s=t[1].y-t[0].y,l=(t[1].x+t[0].x)/2,u=(t[1].y+t[0].y)/2,c,h;Math.abs(s/o)<.5?(c="center",h=u>r.y?"bottom":"top"):(h="middle",c=l>r.x?"left":"right"),i.setSpriteAlign(c,h,this._api)},this)},_doShowAxisPointer:function(){this._axisPointerLineMesh.invisible&&(this._axisPointerLineMesh.invisible=!1,this._axisPointerLabelsMesh.invisible=!1,this._api.getZr().refresh())},_doHideAxisPointer:function(){this._axisPointerLineMesh.invisible||(this._axisPointerLineMesh.invisible=!0,this._axisPointerLabelsMesh.invisible=!0,this._api.getZr().refresh())},_updateAxisPointer:function(e){var t=this._model.coordinateSystem,r=t.dataToPoint(e),i=this._axisPointerLineMesh,n=i.geometry,a=this._model.getModel("axisPointer"),o=this._api.getDevicePixelRatio();n.convertToDynamicArray(!0);function s(S){return ce.firstNotNull(S.model.get("axisPointer.show"),a.get("show"))}function l(S){var C=S.model.getModel("axisPointer",a),L=C.getModel("lineStyle"),A=E.parseColor(L.get("color")),M=ss(L.get("width"),1),P=ss(L.get("opacity"),1);return A[3]*=P,{color:A,lineWidth:M}}for(var u=0;u<this._faces.length;u++){var c=this._faces[u];if(!c.rootNode.invisible){for(var h=c.faceInfo,f=h[3]<0?t.getAxis(h[2]).getExtentMin():t.getAxis(h[2]).getExtentMax(),d=Lr[h[2]],v=0;v<2;v++){var p=h[v],m=h[1-v],_=t.getAxis(p),x=t.getAxis(m);if(s(_)){var y=[0,0,0],g=[0,0,0],w=Lr[p],T=Lr[m];y[w]=g[w]=r[w],y[d]=g[d]=f,y[T]=x.getExtentMin(),g[T]=x.getExtentMax();var b=l(_);n.addLine(y,g,b.color,b.lineWidth*o)}}if(s(t.getAxis(h[2]))){var y=r.slice(),g=r.slice();g[d]=f;var b=l(t.getAxis(h[2]));n.addLine(y,g,b.color,b.lineWidth*o)}}}n.convertToTypedArray(),this._updateAxisPointerLabelsMesh(e),this._api.getZr().refresh()},_updateAxisPointerLabelsMesh:function(e){var t=this._model,r=this._axisPointerLabelsMesh,i=this._axisPointerLabelsSurface,n=t.coordinateSystem,a=t.getModel("axisPointer");r.geometry.convertToDynamicArray(!0),i.clear();var o={x:"y",y:"x",z:"y"};this._axes.forEach(function(s,l){var u=n.getAxis(s.dim),c=u.model,h=c.getModel("axisPointer",a),f=h.getModel("label"),d=h.get("lineStyle.color");if(!(!f.get("show")||!h.get("show"))){var v=e[l],p=f.get("formatter"),m=u.scale.getLabel({value:v});if(p!=null)m=p(m,e);else if(u.scale.type==="interval"||u.scale.type==="log"){var _=Gs(u.scale.getTicks()[0]);m=v.toFixed(_+2)}var x=f.get("color"),y=new Sn({style:bn(f,{text:m,fill:x||d,align:"left",verticalAlign:"top"})}),g=i.add(y),w=y.getBoundingRect(),T=this._api.getDevicePixelRatio(),b=s.rootNode.position.toArray(),S=Lr[o[s.dim]];b[S]+=(s.flipped?-1:1)*f.get("margin"),b[Lr[s.dim]]=u.dataToCoord(e[l]),r.geometry.addSprite(b,[w.width*T,w.height*T],g,s.textAlign,s.textVerticalAlign)}},this),i.getZr().refreshImmediately(),r.material.set("uvScale",i.getCoordsScale()),r.geometry.convertToTypedArray()},dispose:function(){this.groupGL.removeAll(),this._control.dispose(),this._axisLabelSurface.dispose(),this._axisPointerLabelsSurface.dispose()}});function Ui(e){Vs.call(this,e),this.type="cartesian3D",this.dimensions=["x","y","z"],this.size=[0,0,0]}Ui.prototype={constructor:Ui,model:null,containPoint:function(e){return this.getAxis("x").contain(e[0])&&this.getAxis("y").contain(e[2])&&this.getAxis("z").contain(e[1])},containData:function(e){return this.getAxis("x").containData(e[0])&&this.getAxis("y").containData(e[1])&&this.getAxis("z").containData(e[2])},dataToPoint:function(e,t,r){return t=t||[],t[0]=this.getAxis("x").dataToCoord(e[0],r),t[2]=this.getAxis("y").dataToCoord(e[1],r),t[1]=this.getAxis("z").dataToCoord(e[2],r),t},pointToData:function(e,t,r){return t=t||[],t[0]=this.getAxis("x").coordToData(e[0],r),t[1]=this.getAxis("y").coordToData(e[2],r),t[2]=this.getAxis("z").coordToData(e[1],r),t}};Hs(Ui,Vs);function Rn(e,t,r){zn.call(this,e,t,r)}Rn.prototype={constructor:Rn,getExtentMin:function(){var e=this._extent;return Math.min(e[0],e[1])},getExtentMax:function(){var e=this._extent;return Math.max(e[0],e[1])},calculateCategoryInterval:function(){return Math.floor(this.scale.count()/8)}};Hs(Rn,zn);var Ua=function(){this._pool={},this._allocatedTextures=[]};Ua.prototype={constructor:Ua,get:function(e){var t=ls(e);this._pool.hasOwnProperty(t)||(this._pool[t]=[]);var r=this._pool[t];if(!r.length){var i=new se(e);return this._allocatedTextures.push(i),i}return r.pop()},put:function(e){var t=ls(e);this._pool.hasOwnProperty(t)||(this._pool[t]=[]);var r=this._pool[t];r.push(e)},clear:function(e){for(var t=0;t<this._allocatedTextures.length;t++)this._allocatedTextures[t].dispose(e);this._pool={},this._allocatedTextures=[]}};var wl={width:512,height:512,type:F.UNSIGNED_BYTE,format:F.RGBA,wrapS:F.CLAMP_TO_EDGE,wrapT:F.CLAMP_TO_EDGE,minFilter:F.LINEAR_MIPMAP_LINEAR,magFilter:F.LINEAR,useMipmap:!0,anisotropic:1,flipY:!0,unpackAlignment:4,premultiplyAlpha:!1},_a=Object.keys(wl);function ls(e){at.defaultsWithPropList(e,wl,_a),Rf(e);for(var t="",r=0;r<_a.length;r++){var i=_a[r],n=e[i].toString();t+=n}return t}function Rf(e){var t=Nf(e.width,e.height);e.format===F.DEPTH_COMPONENT&&(e.useMipmap=!1),(!t||!e.useMipmap)&&(e.minFilter==F.NEAREST_MIPMAP_NEAREST||e.minFilter==F.NEAREST_MIPMAP_LINEAR?e.minFilter=F.NEAREST:(e.minFilter==F.LINEAR_MIPMAP_LINEAR||e.minFilter==F.LINEAR_MIPMAP_NEAREST)&&(e.minFilter=F.LINEAR)),t||(e.wrapS=F.CLAMP_TO_EDGE,e.wrapT=F.CLAMP_TO_EDGE)}function Nf(e,t){return(e&e-1)===0&&(t&t-1)===0}const Sl=Ua,If=`@export clay.sm.depth.vertex
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
attribute vec3 position : POSITION;
attribute vec2 texcoord : TEXCOORD_0;
uniform vec2 uvRepeat = vec2(1.0, 1.0);
uniform vec2 uvOffset = vec2(0.0, 0.0);
@import clay.chunk.skinning_header
@import clay.chunk.instancing_header
varying vec4 v_ViewPosition;
varying vec2 v_Texcoord;
void main(){
 vec4 P = vec4(position, 1.0);
#ifdef SKINNING
 @import clay.chunk.skin_matrix
 P = skinMatrixWS * P;
#endif
#ifdef INSTANCING
 @import clay.chunk.instancing_matrix
 P = instanceMat * P;
#endif
 v_ViewPosition = worldViewProjection * P;
 gl_Position = v_ViewPosition;
 v_Texcoord = texcoord * uvRepeat + uvOffset;
}
@end
@export clay.sm.depth.fragment
varying vec4 v_ViewPosition;
varying vec2 v_Texcoord;
uniform float bias : 0.001;
uniform float slopeScale : 1.0;
uniform sampler2D alphaMap;
uniform float alphaCutoff: 0.0;
@import clay.util.encode_float
void main(){
 float depth = v_ViewPosition.z / v_ViewPosition.w;
 if (alphaCutoff > 0.0) {
 if (texture2D(alphaMap, v_Texcoord).a <= alphaCutoff) {
 discard;
 }
 }
#ifdef USE_VSM
 depth = depth * 0.5 + 0.5;
 float moment1 = depth;
 float moment2 = depth * depth;
 #ifdef SUPPORT_STANDARD_DERIVATIVES
 float dx = dFdx(depth);
 float dy = dFdy(depth);
 moment2 += 0.25*(dx*dx+dy*dy);
 #endif
 gl_FragColor = vec4(moment1, moment2, 0.0, 1.0);
#else
 #ifdef SUPPORT_STANDARD_DERIVATIVES
 float dx = dFdx(depth);
 float dy = dFdy(depth);
 depth += sqrt(dx*dx + dy*dy) * slopeScale + bias;
 #else
 depth += bias;
 #endif
 gl_FragColor = encodeFloat(depth * 0.5 + 0.5);
#endif
}
@end
@export clay.sm.debug_depth
uniform sampler2D depthMap;
varying vec2 v_Texcoord;
@import clay.util.decode_float
void main() {
 vec4 tex = texture2D(depthMap, v_Texcoord);
#ifdef USE_VSM
 gl_FragColor = vec4(tex.rgb, 1.0);
#else
 float depth = decodeFloat(tex);
 gl_FragColor = vec4(depth, depth, depth, 1.0);
#endif
}
@end
@export clay.sm.distance.vertex
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform mat4 world : WORLD;
attribute vec3 position : POSITION;
@import clay.chunk.skinning_header
varying vec3 v_WorldPosition;
void main (){
 vec4 P = vec4(position, 1.0);
#ifdef SKINNING
 @import clay.chunk.skin_matrix
 P = skinMatrixWS * P;
#endif
#ifdef INSTANCING
 @import clay.chunk.instancing_matrix
 P = instanceMat * P;
#endif
 gl_Position = worldViewProjection * P;
 v_WorldPosition = (world * P).xyz;
}
@end
@export clay.sm.distance.fragment
uniform vec3 lightPosition;
uniform float range : 100;
varying vec3 v_WorldPosition;
@import clay.util.encode_float
void main(){
 float dist = distance(lightPosition, v_WorldPosition);
#ifdef USE_VSM
 gl_FragColor = vec4(dist, dist * dist, 0.0, 0.0);
#else
 dist = dist / range;
 gl_FragColor = encodeFloat(dist);
#endif
}
@end
@export clay.plugin.shadow_map_common
@import clay.util.decode_float
float tapShadowMap(sampler2D map, vec2 uv, float z){
 vec4 tex = texture2D(map, uv);
 return step(z, decodeFloat(tex) * 2.0 - 1.0);
}
float pcf(sampler2D map, vec2 uv, float z, float textureSize, vec2 scale) {
 float shadowContrib = tapShadowMap(map, uv, z);
 vec2 offset = vec2(1.0 / textureSize) * scale;
#ifdef PCF_KERNEL_SIZE
 for (int _idx_ = 0; _idx_ < PCF_KERNEL_SIZE; _idx_++) {{
 shadowContrib += tapShadowMap(map, uv + offset * pcfKernel[_idx_], z);
 }}
 return shadowContrib / float(PCF_KERNEL_SIZE + 1);
#else
 shadowContrib += tapShadowMap(map, uv+vec2(offset.x, 0.0), z);
 shadowContrib += tapShadowMap(map, uv+vec2(offset.x, offset.y), z);
 shadowContrib += tapShadowMap(map, uv+vec2(-offset.x, offset.y), z);
 shadowContrib += tapShadowMap(map, uv+vec2(0.0, offset.y), z);
 shadowContrib += tapShadowMap(map, uv+vec2(-offset.x, 0.0), z);
 shadowContrib += tapShadowMap(map, uv+vec2(-offset.x, -offset.y), z);
 shadowContrib += tapShadowMap(map, uv+vec2(offset.x, -offset.y), z);
 shadowContrib += tapShadowMap(map, uv+vec2(0.0, -offset.y), z);
 return shadowContrib / 9.0;
#endif
}
float pcf(sampler2D map, vec2 uv, float z, float textureSize) {
 return pcf(map, uv, z, textureSize, vec2(1.0));
}
float chebyshevUpperBound(vec2 moments, float z){
 float p = 0.0;
 z = z * 0.5 + 0.5;
 if (z <= moments.x) {
 p = 1.0;
 }
 float variance = moments.y - moments.x * moments.x;
 variance = max(variance, 0.0000001);
 float mD = moments.x - z;
 float pMax = variance / (variance + mD * mD);
 pMax = clamp((pMax-0.4)/(1.0-0.4), 0.0, 1.0);
 return max(p, pMax);
}
float computeShadowContrib(
 sampler2D map, mat4 lightVPM, vec3 position, float textureSize, vec2 scale, vec2 offset
) {
 vec4 posInLightSpace = lightVPM * vec4(position, 1.0);
 posInLightSpace.xyz /= posInLightSpace.w;
 float z = posInLightSpace.z;
 if(all(greaterThan(posInLightSpace.xyz, vec3(-0.99, -0.99, -1.0))) &&
 all(lessThan(posInLightSpace.xyz, vec3(0.99, 0.99, 1.0)))){
 vec2 uv = (posInLightSpace.xy+1.0) / 2.0;
 #ifdef USE_VSM
 vec2 moments = texture2D(map, uv * scale + offset).xy;
 return chebyshevUpperBound(moments, z);
 #else
 return pcf(map, uv * scale + offset, z, textureSize, scale);
 #endif
 }
 return 1.0;
}
float computeShadowContrib(sampler2D map, mat4 lightVPM, vec3 position, float textureSize) {
 return computeShadowContrib(map, lightVPM, position, textureSize, vec2(1.0), vec2(0.0));
}
float computeShadowContribOmni(samplerCube map, vec3 direction, float range)
{
 float dist = length(direction);
 vec4 shadowTex = textureCube(map, direction);
#ifdef USE_VSM
 vec2 moments = shadowTex.xy;
 float variance = moments.y - moments.x * moments.x;
 float mD = moments.x - dist;
 float p = variance / (variance + mD * mD);
 if(moments.x + 0.001 < dist){
 return clamp(p, 0.0, 1.0);
 }else{
 return 1.0;
 }
#else
 return step(dist, (decodeFloat(shadowTex) + 0.0002) * range);
#endif
}
@end
@export clay.plugin.compute_shadow_map
#if defined(SPOT_LIGHT_SHADOWMAP_COUNT) || defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT) || defined(POINT_LIGHT_SHADOWMAP_COUNT)
#ifdef SPOT_LIGHT_SHADOWMAP_COUNT
uniform sampler2D spotLightShadowMaps[SPOT_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
uniform mat4 spotLightMatrices[SPOT_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
uniform float spotLightShadowMapSizes[SPOT_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
#endif
#ifdef DIRECTIONAL_LIGHT_SHADOWMAP_COUNT
#if defined(SHADOW_CASCADE)
uniform sampler2D directionalLightShadowMaps[1]:unconfigurable;
uniform mat4 directionalLightMatrices[SHADOW_CASCADE]:unconfigurable;
uniform float directionalLightShadowMapSizes[1]:unconfigurable;
uniform float shadowCascadeClipsNear[SHADOW_CASCADE]:unconfigurable;
uniform float shadowCascadeClipsFar[SHADOW_CASCADE]:unconfigurable;
#else
uniform sampler2D directionalLightShadowMaps[DIRECTIONAL_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
uniform mat4 directionalLightMatrices[DIRECTIONAL_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
uniform float directionalLightShadowMapSizes[DIRECTIONAL_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
#endif
#endif
#ifdef POINT_LIGHT_SHADOWMAP_COUNT
uniform samplerCube pointLightShadowMaps[POINT_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
#endif
uniform bool shadowEnabled : true;
#ifdef PCF_KERNEL_SIZE
uniform vec2 pcfKernel[PCF_KERNEL_SIZE];
#endif
@import clay.plugin.shadow_map_common
#if defined(SPOT_LIGHT_SHADOWMAP_COUNT)
void computeShadowOfSpotLights(vec3 position, inout float shadowContribs[SPOT_LIGHT_COUNT] ) {
 float shadowContrib;
 for(int _idx_ = 0; _idx_ < SPOT_LIGHT_SHADOWMAP_COUNT; _idx_++) {{
 shadowContrib = computeShadowContrib(
 spotLightShadowMaps[_idx_], spotLightMatrices[_idx_], position,
 spotLightShadowMapSizes[_idx_]
 );
 shadowContribs[_idx_] = shadowContrib;
 }}
 for(int _idx_ = SPOT_LIGHT_SHADOWMAP_COUNT; _idx_ < SPOT_LIGHT_COUNT; _idx_++){{
 shadowContribs[_idx_] = 1.0;
 }}
}
#endif
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
#ifdef SHADOW_CASCADE
void computeShadowOfDirectionalLights(vec3 position, inout float shadowContribs[DIRECTIONAL_LIGHT_COUNT]){
 float depth = (2.0 * gl_FragCoord.z - gl_DepthRange.near - gl_DepthRange.far)
 / (gl_DepthRange.far - gl_DepthRange.near);
 float shadowContrib;
 shadowContribs[0] = 1.0;
 for (int _idx_ = 0; _idx_ < SHADOW_CASCADE; _idx_++) {{
 if (
 depth >= shadowCascadeClipsNear[_idx_] &&
 depth <= shadowCascadeClipsFar[_idx_]
 ) {
 shadowContrib = computeShadowContrib(
 directionalLightShadowMaps[0], directionalLightMatrices[_idx_], position,
 directionalLightShadowMapSizes[0],
 vec2(1.0 / float(SHADOW_CASCADE), 1.0),
 vec2(float(_idx_) / float(SHADOW_CASCADE), 0.0)
 );
 shadowContribs[0] = shadowContrib;
 }
 }}
 for(int _idx_ = DIRECTIONAL_LIGHT_SHADOWMAP_COUNT; _idx_ < DIRECTIONAL_LIGHT_COUNT; _idx_++) {{
 shadowContribs[_idx_] = 1.0;
 }}
}
#else
void computeShadowOfDirectionalLights(vec3 position, inout float shadowContribs[DIRECTIONAL_LIGHT_COUNT]){
 float shadowContrib;
 for(int _idx_ = 0; _idx_ < DIRECTIONAL_LIGHT_SHADOWMAP_COUNT; _idx_++) {{
 shadowContrib = computeShadowContrib(
 directionalLightShadowMaps[_idx_], directionalLightMatrices[_idx_], position,
 directionalLightShadowMapSizes[_idx_]
 );
 shadowContribs[_idx_] = shadowContrib;
 }}
 for(int _idx_ = DIRECTIONAL_LIGHT_SHADOWMAP_COUNT; _idx_ < DIRECTIONAL_LIGHT_COUNT; _idx_++) {{
 shadowContribs[_idx_] = 1.0;
 }}
}
#endif
#endif
#if defined(POINT_LIGHT_SHADOWMAP_COUNT)
void computeShadowOfPointLights(vec3 position, inout float shadowContribs[POINT_LIGHT_COUNT] ){
 vec3 lightPosition;
 vec3 direction;
 for(int _idx_ = 0; _idx_ < POINT_LIGHT_SHADOWMAP_COUNT; _idx_++) {{
 lightPosition = pointLightPosition[_idx_];
 direction = position - lightPosition;
 shadowContribs[_idx_] = computeShadowContribOmni(pointLightShadowMaps[_idx_], direction, pointLightRange[_idx_]);
 }}
 for(int _idx_ = POINT_LIGHT_SHADOWMAP_COUNT; _idx_ < POINT_LIGHT_COUNT; _idx_++) {{
 shadowContribs[_idx_] = 1.0;
 }}
}
#endif
#endif
@end`;var ur=["px","nx","py","ny","pz","nz"];V.import(If);function ga(e,t,r){if(r==="alphaMap")return e.material.get("diffuseMap");if(r==="alphaCutoff"){if(e.material.isDefined("fragment","ALPHA_TEST")&&e.material.get("diffuseMap")){var i=e.material.get("alphaCutoff");return i||0}return 0}else return r==="uvRepeat"?e.material.get("uvRepeat"):r==="uvOffset"?e.material.get("uvOffset"):t.get(r)}function us(e,t){var r=e.material,i=t.material;return r.get("diffuseMap")!==i.get("diffuseMap")||(r.get("alphaCutoff")||0)!==(i.get("alphaCutoff")||0)}var kt=vt.extend(function(){return{softShadow:kt.PCF,shadowBlur:1,lightFrustumBias:"auto",kernelPCF:new Float32Array([1,0,1,1,-1,1,0,1,-1,0,-1,-1,1,-1,0,-1]),precision:"highp",_lastRenderNotCastShadow:!1,_frameBuffer:new ot,_textures:{},_shadowMapNumber:{POINT_LIGHT:0,DIRECTIONAL_LIGHT:0,SPOT_LIGHT:0},_depthMaterials:{},_distanceMaterials:{},_receivers:[],_lightsCastShadow:[],_lightCameras:{},_lightMaterials:{},_texturePool:new Sl}},function(){this._gaussianPassH=new je({fragment:V.source("clay.compositor.gaussian_blur")}),this._gaussianPassV=new je({fragment:V.source("clay.compositor.gaussian_blur")}),this._gaussianPassH.setUniform("blurSize",this.shadowBlur),this._gaussianPassH.setUniform("blurDir",0),this._gaussianPassV.setUniform("blurSize",this.shadowBlur),this._gaussianPassV.setUniform("blurDir",1),this._outputDepthPass=new je({fragment:V.source("clay.sm.debug_depth")})},{render:function(e,t,r,i){r||(r=t.getMainCamera()),this.trigger("beforerender",this,e,t,r),this._renderShadowPass(e,t,r,i),this.trigger("afterrender",this,e,t,r)},renderDebug:function(e,t){e.saveClear();var r=e.viewport,i=0,n=0,a=t||r.width/4,o=a;this.softShadow===kt.VSM?this._outputDepthPass.material.define("fragment","USE_VSM"):this._outputDepthPass.material.undefine("fragment","USE_VSM");for(var s in this._textures){var l=this._textures[s];e.setViewport(i,n,a*l.width/l.height,o),this._outputDepthPass.setUniform("depthMap",l),this._outputDepthPass.render(e),i+=a*l.width/l.height}e.setViewport(r),e.restoreClear()},_updateReceivers:function(e,t){if(t.receiveShadow?(this._receivers.push(t),t.material.set("shadowEnabled",1),t.material.set("pcfKernel",this.kernelPCF)):t.material.set("shadowEnabled",0),this.softShadow===kt.VSM)t.material.define("fragment","USE_VSM"),t.material.undefine("fragment","PCF_KERNEL_SIZE");else{t.material.undefine("fragment","USE_VSM");var r=this.kernelPCF;r&&r.length?t.material.define("fragment","PCF_KERNEL_SIZE",r.length/2):t.material.undefine("fragment","PCF_KERNEL_SIZE")}},_update:function(e,t){var r=this;t.traverse(function(a){a.isRenderable()&&r._updateReceivers(e,a)});for(var i=0;i<t.lights.length;i++){var n=t.lights[i];n.castShadow&&!n.invisible&&this._lightsCastShadow.push(n)}},_renderShadowPass:function(e,t,r,i){for(var n in this._shadowMapNumber)this._shadowMapNumber[n]=0;this._lightsCastShadow.length=0,this._receivers.length=0;var a=e.gl;if(i||t.update(),r&&r.update(),t.updateLights(),this._update(e,t),!this._lightsCastShadow.length&&this._lastRenderNotCastShadow)return;this._lastRenderNotCastShadow=this._lightsCastShadow===0,a.enable(a.DEPTH_TEST),a.depthMask(!0),a.disable(a.BLEND),a.clearColor(1,1,1,1);for(var o=[],s=[],l=[],u=[],c=[],h=[],f,d=0;d<this._lightsCastShadow.length;d++){var v=this._lightsCastShadow[d];if(v.type==="DIRECTIONAL_LIGHT"){if(f){console.warn("Only one direectional light supported with shadow cascade");continue}if(v.shadowCascade>4){console.warn("Support at most 4 cascade");continue}v.shadowCascade>1&&(f=v),this.renderDirectionalLightShadow(e,t,r,v,c,u,l)}else v.type==="SPOT_LIGHT"?this.renderSpotLightShadow(e,t,v,s,o):v.type==="POINT_LIGHT"&&this.renderPointLightShadow(e,t,v,h);this._shadowMapNumber[v.type]++}for(var p in this._shadowMapNumber)for(var m=this._shadowMapNumber[p],_=p+"_SHADOWMAP_COUNT",d=0;d<this._receivers.length;d++){var x=this._receivers[d],y=x.material;y.fragmentDefines[_]!==m&&(m>0?y.define("fragment",_,m):y.isDefined("fragment",_)&&y.undefine("fragment",_))}for(var d=0;d<this._receivers.length;d++){var x=this._receivers[d],y=x.material;f?y.define("fragment","SHADOW_CASCADE",f.shadowCascade):y.undefine("fragment","SHADOW_CASCADE")}var g=t.shadowUniforms;function w(L){return L.height}if(l.length>0){var T=l.map(w);if(g.directionalLightShadowMaps={value:l,type:"tv"},g.directionalLightMatrices={value:u,type:"m4v"},g.directionalLightShadowMapSizes={value:T,type:"1fv"},f){var b=c.slice(),S=c.slice();b.pop(),S.shift(),b.reverse(),S.reverse(),u.reverse(),g.shadowCascadeClipsNear={value:b,type:"1fv"},g.shadowCascadeClipsFar={value:S,type:"1fv"}}}if(o.length>0){var C=o.map(w),g=t.shadowUniforms;g.spotLightShadowMaps={value:o,type:"tv"},g.spotLightMatrices={value:s,type:"m4v"},g.spotLightShadowMapSizes={value:C,type:"1fv"}}h.length>0&&(g.pointLightShadowMaps={value:h,type:"tv"})},renderDirectionalLightShadow:function(){var e=new Ja,t=new q,r=new ht,i=new q,n=new q,a=new q,o=new q;return function(s,l,u,c,h,f,d){var v=this._getDepthMaterial(c),p={getMaterial:function(I){return I.shadowDepthMaterial||v},isMaterialChanged:us,getUniform:ga,ifRender:function(I){return I.castShadow},sortCompare:Ni.opaqueSortCompare};if(!l.viewBoundingBoxLastFrame.isFinite()){var m=l.getBoundingBox();l.viewBoundingBoxLastFrame.copy(m).applyTransform(u.viewMatrix)}var _=Math.min(-l.viewBoundingBoxLastFrame.min.z,u.far),x=Math.max(-l.viewBoundingBoxLastFrame.max.z,u.near),y=this._getDirectionalLightCamera(c,l,u),g=a.array;o.copy(y.projectionMatrix),H.invert(n.array,y.worldTransform.array),H.multiply(n.array,n.array,u.worldTransform.array),H.multiply(g,o.array,n.array);for(var w=[],T=u instanceof et,b=(u.near+u.far)/(u.near-u.far),S=2*u.near*u.far/(u.near-u.far),C=0;C<=c.shadowCascade;C++){var L=x*Math.pow(_/x,C/c.shadowCascade),A=x+(_-x)*C/c.shadowCascade,M=L*c.cascadeSplitLogFactor+A*(1-c.cascadeSplitLogFactor);w.push(M),h.push(-(-M*b+S)/-M)}var P=this._getTexture(c,c.shadowCascade);d.push(P);var D=s.viewport,N=s.gl;this._frameBuffer.attach(P),this._frameBuffer.bind(s),N.clear(N.COLOR_BUFFER_BIT|N.DEPTH_BUFFER_BIT);for(var C=0;C<c.shadowCascade;C++){var U=w[C],W=w[C+1];T?H.perspective(t.array,u.fov/180*Math.PI,u.aspect,U,W):H.ortho(t.array,u.left,u.right,u.bottom,u.top,U,W),e.setFromProjection(t),e.getTransformedBoundingBox(r,n),r.applyProjection(o);var z=r.min.array,$=r.max.array;z[0]=Math.max(z[0],-1),z[1]=Math.max(z[1],-1),$[0]=Math.min($[0],1),$[1]=Math.min($[1],1),i.ortho(z[0],$[0],z[1],$[1],1,-1),y.projectionMatrix.multiplyLeft(i);var G=c.shadowResolution||512;s.setViewport((c.shadowCascade-C-1)*G,0,G,G,1);var ne=l.updateRenderList(y);s.renderPass(ne.opaque,y,p),this.softShadow===kt.VSM&&this._gaussianFilter(s,P,P.width);var B=new q;B.copy(y.viewMatrix).multiplyLeft(y.projectionMatrix),f.push(B.array),y.projectionMatrix.copy(o)}this._frameBuffer.unbind(s),s.setViewport(D)}}(),renderSpotLightShadow:function(e,t,r,i,n){var a=this._getTexture(r),o=this._getSpotLightCamera(r),s=e.gl;this._frameBuffer.attach(a),this._frameBuffer.bind(e),s.clear(s.COLOR_BUFFER_BIT|s.DEPTH_BUFFER_BIT);var l=this._getDepthMaterial(r),u={getMaterial:function(f){return f.shadowDepthMaterial||l},isMaterialChanged:us,getUniform:ga,ifRender:function(f){return f.castShadow},sortCompare:Ni.opaqueSortCompare},c=t.updateRenderList(o);e.renderPass(c.opaque,o,u),this._frameBuffer.unbind(e),this.softShadow===kt.VSM&&this._gaussianFilter(e,a,a.width);var h=new q;h.copy(o.worldTransform).invert().multiplyLeft(o.projectionMatrix),n.push(a),i.push(h.array)},renderPointLightShadow:function(e,t,r,i){var n=this._getTexture(r),a=e.gl;i.push(n);var o=this._getDepthMaterial(r),s={getMaterial:function(x){return x.shadowDepthMaterial||o},getUniform:ga,sortCompare:Ni.opaqueSortCompare},l={px:[],py:[],pz:[],nx:[],ny:[],nz:[]},u=new ht,c=r.getWorldPosition().array,h=new ht,f=r.range;h.min.setArray(c),h.max.setArray(c);var d=new k(f,f,f);h.max.add(d),h.min.sub(d);var v={px:!1,py:!1,pz:!1,nx:!1,ny:!1,nz:!1};t.traverse(function(x){if(x.isRenderable()&&x.castShadow){var y=x.geometry;if(!y.boundingBox){for(var g=0;g<ur.length;g++)l[ur[g]].push(x);return}if(u.transformFrom(y.boundingBox,x.worldTransform),!u.intersectBoundingBox(h))return;u.updateVertices();for(var g=0;g<ur.length;g++)v[ur[g]]=!1;for(var g=0;g<8;g++){var w=u.vertices[g],T=w[0]-c[0],b=w[1]-c[1],S=w[2]-c[2],C=Math.abs(T),L=Math.abs(b),A=Math.abs(S);C>L?C>A?v[T>0?"px":"nx"]=!0:v[S>0?"pz":"nz"]=!0:L>A?v[b>0?"py":"ny"]=!0:v[S>0?"pz":"nz"]=!0}for(var g=0;g<ur.length;g++)v[ur[g]]&&l[ur[g]].push(x)}});for(var p=0;p<6;p++){var m=ur[p],_=this._getPointLightCamera(r,m);this._frameBuffer.attach(n,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+p),this._frameBuffer.bind(e),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT),e.renderPass(l[m],_,s)}this._frameBuffer.unbind(e)},_getDepthMaterial:function(e){var t=this._lightMaterials[e.__uid__],r=e.type==="POINT_LIGHT";if(!t){var i=r?"clay.sm.distance.":"clay.sm.depth.";t=new Nt({precision:this.precision,shader:new V(V.source(i+"vertex"),V.source(i+"fragment"))}),this._lightMaterials[e.__uid__]=t}return e.shadowSlopeScale!=null&&t.setUniform("slopeScale",e.shadowSlopeScale),e.shadowBias!=null&&t.setUniform("bias",e.shadowBias),this.softShadow===kt.VSM?t.define("fragment","USE_VSM"):t.undefine("fragment","USE_VSM"),r&&(t.set("lightPosition",e.getWorldPosition().array),t.set("range",e.range)),t},_gaussianFilter:function(e,t,r){var i={width:r,height:r,type:K.FLOAT},n=this._texturePool.get(i);this._frameBuffer.attach(n),this._frameBuffer.bind(e),this._gaussianPassH.setUniform("texture",t),this._gaussianPassH.setUniform("textureWidth",r),this._gaussianPassH.render(e),this._frameBuffer.attach(t),this._gaussianPassV.setUniform("texture",n),this._gaussianPassV.setUniform("textureHeight",r),this._gaussianPassV.render(e),this._frameBuffer.unbind(e),this._texturePool.put(n)},_getTexture:function(e,t){var r=e.__uid__,i=this._textures[r],n=e.shadowResolution||512;return t=t||1,i||(e.type==="POINT_LIGHT"?i=new Fi:i=new se,i.width=n*t,i.height=n,this.softShadow===kt.VSM?(i.type=K.FLOAT,i.anisotropic=4):(i.minFilter=F.NEAREST,i.magFilter=F.NEAREST,i.useMipmap=!1),this._textures[r]=i),i},_getPointLightCamera:function(e,t){this._lightCameras.point||(this._lightCameras.point={px:new et,nx:new et,py:new et,ny:new et,pz:new et,nz:new et});var r=this._lightCameras.point[t];switch(r.far=e.range,r.fov=90,r.position.set(0,0,0),t){case"px":r.lookAt(k.POSITIVE_X,k.NEGATIVE_Y);break;case"nx":r.lookAt(k.NEGATIVE_X,k.NEGATIVE_Y);break;case"py":r.lookAt(k.POSITIVE_Y,k.POSITIVE_Z);break;case"ny":r.lookAt(k.NEGATIVE_Y,k.NEGATIVE_Z);break;case"pz":r.lookAt(k.POSITIVE_Z,k.NEGATIVE_Y);break;case"nz":r.lookAt(k.NEGATIVE_Z,k.NEGATIVE_Y);break}return e.getWorldPosition(r.position),r.update(),r},_getDirectionalLightCamera:function(){var e=new q,t=new ht,r=new ht;return function(i,n,a){this._lightCameras.directional||(this._lightCameras.directional=new oi);var o=this._lightCameras.directional;t.copy(n.viewBoundingBoxLastFrame),t.intersection(a.frustum.boundingBox),o.position.copy(t.min).add(t.max).scale(.5).transformMat4(a.worldTransform),o.rotation.copy(i.rotation),o.scale.copy(i.scale),o.updateWorldTransform(),q.invert(e,o.worldTransform),q.multiply(e,e,a.worldTransform),r.copy(t).applyTransform(e);var s=r.min.array,l=r.max.array;return o.position.set((s[0]+l[0])/2,(s[1]+l[1])/2,l[2]).transformMat4(o.worldTransform),o.near=0,o.far=-s[2]+l[2],isNaN(this.lightFrustumBias)?o.far*=4:o.far+=this.lightFrustumBias,o.left=s[0],o.right=l[0],o.top=l[1],o.bottom=s[1],o.update(!0),o}}(),_getSpotLightCamera:function(e){this._lightCameras.spot||(this._lightCameras.spot=new et);var t=this._lightCameras.spot;return t.fov=e.penumbraAngle*2,t.far=e.range,t.worldTransform.copy(e.worldTransform),t.updateProjectionMatrix(),H.invert(t.viewMatrix.array,t.worldTransform.array),t},dispose:function(e){var t=e.gl||e;this._frameBuffer&&this._frameBuffer.dispose(t);for(var r in this._textures)this._textures[r].dispose(t);this._texturePool.clear(e.gl),this._depthMaterials={},this._distanceMaterials={},this._textures={},this._lightCameras={},this._shadowMapNumber={POINT_LIGHT:0,DIRECTIONAL_LIGHT:0,SPOT_LIGHT:0},this._meshMaterials={};for(var i=0;i<this._receivers.length;i++){var n=this._receivers[i];if(n.material){var a=n.material;a.undefine("fragment","POINT_LIGHT_SHADOW_COUNT"),a.undefine("fragment","DIRECTIONAL_LIGHT_SHADOW_COUNT"),a.undefine("fragment","AMBIENT_LIGHT_SHADOW_COUNT"),a.set("shadowEnabled",0)}}this._receivers=[],this._lightsCastShadow=[]}});kt.VSM=1;kt.PCF=2;const Of=kt;var Ff=vt.extend(function(){return{name:"",inputLinks:{},outputLinks:{},_prevOutputTextures:{},_outputTextures:{},_outputReferences:{},_rendering:!1,_rendered:!1,_compositor:null}},{updateParameter:function(e,t){var r=this.outputs[e],i=r.parameters,n=r._parametersCopy;if(n||(n=r._parametersCopy={}),i)for(var a in i)a!=="width"&&a!=="height"&&(n[a]=i[a]);var o,s;return i.width instanceof Function?o=i.width.call(this,t):o=i.width,i.height instanceof Function?s=i.height.call(this,t):s=i.height,(n.width!==o||n.height!==s)&&this._outputTextures[e]&&this._outputTextures[e].dispose(t.gl),n.width=o,n.height=s,n},setParameter:function(e,t){},getParameter:function(e){},setParameters:function(e){for(var t in e)this.setParameter(t,e[t])},render:function(){},getOutput:function(e,t){if(t==null)return t=e,this._outputTextures[t];var r=this.outputs[t];if(r)return this._rendered?r.outputLastFrame?this._prevOutputTextures[t]:this._outputTextures[t]:this._rendering?(this._prevOutputTextures[t]||(this._prevOutputTextures[t]=this._compositor.allocateTexture(r.parameters||{})),this._prevOutputTextures[t]):(this.render(e),this._outputTextures[t])},removeReference:function(e){if(this._outputReferences[e]--,this._outputReferences[e]===0){var t=this.outputs[e];t.keepLastFrame?(this._prevOutputTextures[e]&&this._compositor.releaseTexture(this._prevOutputTextures[e]),this._prevOutputTextures[e]=this._outputTextures[e]):this._compositor.releaseTexture(this._outputTextures[e])}},link:function(e,t,r){this.inputLinks[e]={node:t,pin:r},t.outputLinks[r]||(t.outputLinks[r]=[]),t.outputLinks[r].push({node:this,pin:e}),this.pass.material.enableTexture(e)},clear:function(){this.inputLinks={},this.outputLinks={}},updateReference:function(e){if(!this._rendering){this._rendering=!0;for(var t in this.inputLinks){var r=this.inputLinks[t];r.node.updateReference(r.pin)}this._rendering=!1}e&&this._outputReferences[e]++},beforeFrame:function(){this._rendered=!1;for(var e in this.outputLinks)this._outputReferences[e]=0},afterFrame:function(){for(var e in this.outputLinks)if(this._outputReferences[e]>0){var t=this.outputs[e];t.keepLastFrame?(this._prevOutputTextures[e]&&this._compositor.releaseTexture(this._prevOutputTextures[e]),this._prevOutputTextures[e]=this._outputTextures[e]):this._compositor.releaseTexture(this._outputTextures[e])}}});const zi=Ff;var Bf=vt.extend(function(){return{nodes:[]}},{dirty:function(){this._dirty=!0},addNode:function(e){this.nodes.indexOf(e)>=0||(this.nodes.push(e),this._dirty=!0)},removeNode:function(e){typeof e=="string"&&(e=this.getNodeByName(e));var t=this.nodes.indexOf(e);t>=0&&(this.nodes.splice(t,1),this._dirty=!0)},getNodeByName:function(e){for(var t=0;t<this.nodes.length;t++)if(this.nodes[t].name===e)return this.nodes[t]},update:function(){for(var e=0;e<this.nodes.length;e++)this.nodes[e].clear();for(var e=0;e<this.nodes.length;e++){var t=this.nodes[e];if(t.inputs){for(var r in t.inputs)if(t.inputs[r]){if(t.pass&&!t.pass.material.isUniformEnabled(r)){console.warn("Pin "+t.name+"."+r+" not used.");continue}var i=t.inputs[r],n=this.findPin(i);n?t.link(r,n.node,n.pin):console.warn(typeof i=="string"?"Node "+i+" not exist":"Pin of "+i.node+"."+i.pin+" not exist")}}}},findPin:function(e){var t;if((typeof e=="string"||e instanceof zi)&&(e={node:e}),typeof e.node=="string")for(var r=0;r<this.nodes.length;r++){var i=this.nodes[r];i.name===e.node&&(t=i)}else t=e.node;if(t){var n=e.pin;if(n||t.outputs&&(n=Object.keys(t.outputs)[0]),t.outputs[n])return{node:t,pin:n}}}});const cs=Bf;var Uf=cs.extend(function(){return{_outputs:[],_texturePool:new Sl,_frameBuffer:new ot({depthBuffer:!1})}},{addNode:function(e){cs.prototype.addNode.call(this,e),e._compositor=this},render:function(e,t){if(this._dirty){this.update(),this._dirty=!1,this._outputs.length=0;for(var r=0;r<this.nodes.length;r++)this.nodes[r].outputs||this._outputs.push(this.nodes[r])}for(var r=0;r<this.nodes.length;r++)this.nodes[r].beforeFrame();for(var r=0;r<this._outputs.length;r++)this._outputs[r].updateReference();for(var r=0;r<this._outputs.length;r++)this._outputs[r].render(e,t);for(var r=0;r<this.nodes.length;r++)this.nodes[r].afterFrame()},allocateTexture:function(e){return this._texturePool.get(e)},releaseTexture:function(e){this._texturePool.put(e)},getFrameBuffer:function(){return this._frameBuffer},dispose:function(e){this._texturePool.clear(e)}});const zf=Uf;var Gf=zi.extend({name:"scene",scene:null,camera:null,autoUpdateScene:!0,preZ:!1},function(){this.frameBuffer=new ot},{render:function(e){this._rendering=!0;var t=e.gl;this.trigger("beforerender");var r;if(!this.outputs)r=e.render(this.scene,this.camera,!this.autoUpdateScene,this.preZ);else{var i=this.frameBuffer;for(var n in this.outputs){var a=this.updateParameter(n,e),o=this.outputs[n],s=this._compositor.allocateTexture(a);this._outputTextures[n]=s;var l=o.attachment||t.COLOR_ATTACHMENT0;typeof l=="string"&&(l=t[l]),i.attach(s,l)}i.bind(e);var u=e.getGLExtension("EXT_draw_buffers");if(u){var c=[];for(var l in this.outputs)l=parseInt(l),l>=t.COLOR_ATTACHMENT0&&l<=t.COLOR_ATTACHMENT0+8&&c.push(l);u.drawBuffersEXT(c)}e.saveClear(),e.clearBit=F.DEPTH_BUFFER_BIT|F.COLOR_BUFFER_BIT,r=e.render(this.scene,this.camera,!this.autoUpdateScene,this.preZ),e.restoreClear(),i.unbind(e)}this.trigger("afterrender",r),this._rendering=!1,this._rendered=!0}});const Vf=Gf;var Hf=zi.extend(function(){return{texture:null,outputs:{color:{}}}},function(){},{getOutput:function(e,t){return this.texture},beforeFrame:function(){},afterFrame:function(){}});const kf=Hf;var Wf=zi.extend(function(){return{name:"",inputs:{},outputs:null,shader:"",inputLinks:{},outputLinks:{},pass:null,_prevOutputTextures:{},_outputTextures:{},_outputReferences:{},_rendering:!1,_rendered:!1,_compositor:null}},function(){var e=new je({fragment:this.shader});this.pass=e},{render:function(e,t){this.trigger("beforerender",e),this._rendering=!0;var r=e.gl;for(var i in this.inputLinks){var n=this.inputLinks[i],a=n.node.getOutput(e,n.pin);this.pass.setUniform(i,a)}if(!this.outputs)this.pass.outputs=null,this._compositor.getFrameBuffer().unbind(e),this.pass.render(e,t);else{this.pass.outputs={};var o={};for(var s in this.outputs){var l=this.updateParameter(s,e);isNaN(l.width)&&this.updateParameter(s,e);var u=this.outputs[s],c=this._compositor.allocateTexture(l);this._outputTextures[s]=c;var h=u.attachment||r.COLOR_ATTACHMENT0;typeof h=="string"&&(h=r[h]),o[h]=c}this._compositor.getFrameBuffer().bind(e);for(var h in o)this._compositor.getFrameBuffer().attach(o[h],h);this.pass.render(e),this._compositor.getFrameBuffer().updateMipmap(e)}for(var i in this.inputLinks){var n=this.inputLinks[i];n.node.removeReference(n.pin)}this._rendering=!1,this._rendered=!0,this.trigger("afterrender",e)},updateParameter:function(e,t){var r=this.outputs[e],i=r.parameters,n=r._parametersCopy;if(n||(n=r._parametersCopy={}),i)for(var a in i)a!=="width"&&a!=="height"&&(n[a]=i[a]);var o,s;return typeof i.width=="function"?o=i.width.call(this,t):o=i.width,typeof i.height=="function"?s=i.height.call(this,t):s=i.height,o=Math.ceil(o),s=Math.ceil(s),(n.width!==o||n.height!==s)&&this._outputTextures[e]&&this._outputTextures[e].dispose(t),n.width=o,n.height=s,n},setParameter:function(e,t){this.pass.setUniform(e,t)},getParameter:function(e){return this.pass.getUniform(e)},setParameters:function(e){for(var t in e)this.setParameter(t,e[t])},define:function(e,t){this.pass.material.define("fragment",e,t)},undefine:function(e){this.pass.material.undefine("fragment",e)},removeReference:function(e){if(this._outputReferences[e]--,this._outputReferences[e]===0){var t=this.outputs[e];t.keepLastFrame?(this._prevOutputTextures[e]&&this._compositor.releaseTexture(this._prevOutputTextures[e]),this._prevOutputTextures[e]=this._outputTextures[e]):this._compositor.releaseTexture(this._outputTextures[e])}},clear:function(){zi.prototype.clear.call(this),this.pass.material.disableTexturesAll()}});const Xf=Wf,$f=`@export clay.compositor.coloradjust
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float brightness : 0.0;
uniform float contrast : 1.0;
uniform float exposure : 0.0;
uniform float gamma : 1.0;
uniform float saturation : 1.0;
const vec3 w = vec3(0.2125, 0.7154, 0.0721);
void main()
{
 vec4 tex = texture2D( texture, v_Texcoord);
 vec3 color = clamp(tex.rgb + vec3(brightness), 0.0, 1.0);
 color = clamp( (color-vec3(0.5))*contrast+vec3(0.5), 0.0, 1.0);
 color = clamp( color * pow(2.0, exposure), 0.0, 1.0);
 color = clamp( pow(color, vec3(gamma)), 0.0, 1.0);
 float luminance = dot( color, w );
 color = mix(vec3(luminance), color, saturation);
 gl_FragColor = vec4(color, tex.a);
}
@end
@export clay.compositor.brightness
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float brightness : 0.0;
void main()
{
 vec4 tex = texture2D( texture, v_Texcoord);
 vec3 color = tex.rgb + vec3(brightness);
 gl_FragColor = vec4(color, tex.a);
}
@end
@export clay.compositor.contrast
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float contrast : 1.0;
void main()
{
 vec4 tex = texture2D( texture, v_Texcoord);
 vec3 color = (tex.rgb-vec3(0.5))*contrast+vec3(0.5);
 gl_FragColor = vec4(color, tex.a);
}
@end
@export clay.compositor.exposure
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float exposure : 0.0;
void main()
{
 vec4 tex = texture2D(texture, v_Texcoord);
 vec3 color = tex.rgb * pow(2.0, exposure);
 gl_FragColor = vec4(color, tex.a);
}
@end
@export clay.compositor.gamma
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float gamma : 1.0;
void main()
{
 vec4 tex = texture2D(texture, v_Texcoord);
 vec3 color = pow(tex.rgb, vec3(gamma));
 gl_FragColor = vec4(color, tex.a);
}
@end
@export clay.compositor.saturation
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float saturation : 1.0;
const vec3 w = vec3(0.2125, 0.7154, 0.0721);
void main()
{
 vec4 tex = texture2D(texture, v_Texcoord);
 vec3 color = tex.rgb;
 float luminance = dot(color, w);
 color = mix(vec3(luminance), color, saturation);
 gl_FragColor = vec4(color, tex.a);
}
@end`,bl=`@export clay.compositor.kernel.gaussian_9
float gaussianKernel[9];
gaussianKernel[0] = 0.07;
gaussianKernel[1] = 0.09;
gaussianKernel[2] = 0.12;
gaussianKernel[3] = 0.14;
gaussianKernel[4] = 0.16;
gaussianKernel[5] = 0.14;
gaussianKernel[6] = 0.12;
gaussianKernel[7] = 0.09;
gaussianKernel[8] = 0.07;
@end
@export clay.compositor.kernel.gaussian_13
float gaussianKernel[13];
gaussianKernel[0] = 0.02;
gaussianKernel[1] = 0.03;
gaussianKernel[2] = 0.06;
gaussianKernel[3] = 0.08;
gaussianKernel[4] = 0.11;
gaussianKernel[5] = 0.13;
gaussianKernel[6] = 0.14;
gaussianKernel[7] = 0.13;
gaussianKernel[8] = 0.11;
gaussianKernel[9] = 0.08;
gaussianKernel[10] = 0.06;
gaussianKernel[11] = 0.03;
gaussianKernel[12] = 0.02;
@end
@export clay.compositor.gaussian_blur
#define SHADER_NAME gaussian_blur
uniform sampler2D texture;varying vec2 v_Texcoord;
uniform float blurSize : 2.0;
uniform vec2 textureSize : [512.0, 512.0];
uniform float blurDir : 0.0;
@import clay.util.rgbm
@import clay.util.clamp_sample
void main (void)
{
 @import clay.compositor.kernel.gaussian_9
 vec2 off = blurSize / textureSize;
 off *= vec2(1.0 - blurDir, blurDir);
 vec4 sum = vec4(0.0);
 float weightAll = 0.0;
 for (int i = 0; i < 9; i++) {
 float w = gaussianKernel[i];
 vec4 texel = decodeHDR(clampSample(texture, v_Texcoord + float(i - 4) * off));
 sum += texel * w;
 weightAll += w;
 }
 gl_FragColor = encodeHDR(sum / max(weightAll, 0.01));
}
@end
`,jf=`@export clay.compositor.hdr.log_lum
varying vec2 v_Texcoord;
uniform sampler2D texture;
const vec3 w = vec3(0.2125, 0.7154, 0.0721);
@import clay.util.rgbm
void main()
{
 vec4 tex = decodeHDR(texture2D(texture, v_Texcoord));
 float luminance = dot(tex.rgb, w);
 luminance = log(luminance + 0.001);
 gl_FragColor = encodeHDR(vec4(vec3(luminance), 1.0));
}
@end
@export clay.compositor.hdr.lum_adaption
varying vec2 v_Texcoord;
uniform sampler2D adaptedLum;
uniform sampler2D currentLum;
uniform float frameTime : 0.02;
@import clay.util.rgbm
void main()
{
 float fAdaptedLum = decodeHDR(texture2D(adaptedLum, vec2(0.5, 0.5))).r;
 float fCurrentLum = exp(encodeHDR(texture2D(currentLum, vec2(0.5, 0.5))).r);
 fAdaptedLum += (fCurrentLum - fAdaptedLum) * (1.0 - pow(0.98, 30.0 * frameTime));
 gl_FragColor = encodeHDR(vec4(vec3(fAdaptedLum), 1.0));
}
@end
@export clay.compositor.lum
varying vec2 v_Texcoord;
uniform sampler2D texture;
const vec3 w = vec3(0.2125, 0.7154, 0.0721);
void main()
{
 vec4 tex = texture2D( texture, v_Texcoord );
 float luminance = dot(tex.rgb, w);
 gl_FragColor = vec4(vec3(luminance), 1.0);
}
@end`,El=`
@export clay.compositor.lut
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform sampler2D lookup;
void main()
{
 vec4 tex = texture2D(texture, v_Texcoord);
 float blueColor = tex.b * 63.0;
 vec2 quad1;
 quad1.y = floor(floor(blueColor) / 8.0);
 quad1.x = floor(blueColor) - (quad1.y * 8.0);
 vec2 quad2;
 quad2.y = floor(ceil(blueColor) / 8.0);
 quad2.x = ceil(blueColor) - (quad2.y * 8.0);
 vec2 texPos1;
 texPos1.x = (quad1.x * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * tex.r);
 texPos1.y = (quad1.y * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * tex.g);
 vec2 texPos2;
 texPos2.x = (quad2.x * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * tex.r);
 texPos2.y = (quad2.y * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * tex.g);
 vec4 newColor1 = texture2D(lookup, texPos1);
 vec4 newColor2 = texture2D(lookup, texPos2);
 vec4 newColor = mix(newColor1, newColor2, fract(blueColor));
 gl_FragColor = vec4(newColor.rgb, tex.w);
}
@end`,Zf=`@export clay.compositor.vignette
#define OUTPUT_ALPHA
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float darkness: 1;
uniform float offset: 1;
@import clay.util.rgbm
void main()
{
 vec4 texel = decodeHDR(texture2D(texture, v_Texcoord));
 gl_FragColor.rgb = texel.rgb;
 vec2 uv = (v_Texcoord - vec2(0.5)) * vec2(offset);
 gl_FragColor = encodeHDR(vec4(mix(texel.rgb, vec3(1.0 - darkness), dot(uv, uv)), texel.a));
}
@end`,Al=`@export clay.compositor.output
#define OUTPUT_ALPHA
varying vec2 v_Texcoord;
uniform sampler2D texture;
@import clay.util.rgbm
void main()
{
 vec4 tex = decodeHDR(texture2D(texture, v_Texcoord));
 gl_FragColor.rgb = tex.rgb;
#ifdef OUTPUT_ALPHA
 gl_FragColor.a = tex.a;
#else
 gl_FragColor.a = 1.0;
#endif
 gl_FragColor = encodeHDR(gl_FragColor);
#ifdef PREMULTIPLY_ALPHA
 gl_FragColor.rgb *= gl_FragColor.a;
#endif
}
@end`,Cl=`@export clay.compositor.bright
uniform sampler2D texture;
uniform float threshold : 1;
uniform float scale : 1.0;
uniform vec2 textureSize: [512, 512];
varying vec2 v_Texcoord;
const vec3 lumWeight = vec3(0.2125, 0.7154, 0.0721);
@import clay.util.rgbm
vec4 median(vec4 a, vec4 b, vec4 c)
{
 return a + b + c - min(min(a, b), c) - max(max(a, b), c);
}
void main()
{
 vec4 texel = decodeHDR(texture2D(texture, v_Texcoord));
#ifdef ANTI_FLICKER
 vec3 d = 1.0 / textureSize.xyx * vec3(1.0, 1.0, 0.0);
 vec4 s1 = decodeHDR(texture2D(texture, v_Texcoord - d.xz));
 vec4 s2 = decodeHDR(texture2D(texture, v_Texcoord + d.xz));
 vec4 s3 = decodeHDR(texture2D(texture, v_Texcoord - d.zy));
 vec4 s4 = decodeHDR(texture2D(texture, v_Texcoord + d.zy));
 texel = median(median(texel, s1, s2), s3, s4);
#endif
 float lum = dot(texel.rgb , lumWeight);
 vec4 color;
 if (lum > threshold && texel.a > 0.0)
 {
 color = vec4(texel.rgb * scale, texel.a * scale);
 }
 else
 {
 color = vec4(0.0);
 }
 gl_FragColor = encodeHDR(color);
}
@end
`,Ll=`@export clay.compositor.downsample
uniform sampler2D texture;
uniform vec2 textureSize : [512, 512];
varying vec2 v_Texcoord;
@import clay.util.rgbm
float brightness(vec3 c)
{
 return max(max(c.r, c.g), c.b);
}
@import clay.util.clamp_sample
void main()
{
 vec4 d = vec4(-1.0, -1.0, 1.0, 1.0) / textureSize.xyxy;
#ifdef ANTI_FLICKER
 vec3 s1 = decodeHDR(clampSample(texture, v_Texcoord + d.xy)).rgb;
 vec3 s2 = decodeHDR(clampSample(texture, v_Texcoord + d.zy)).rgb;
 vec3 s3 = decodeHDR(clampSample(texture, v_Texcoord + d.xw)).rgb;
 vec3 s4 = decodeHDR(clampSample(texture, v_Texcoord + d.zw)).rgb;
 float s1w = 1.0 / (brightness(s1) + 1.0);
 float s2w = 1.0 / (brightness(s2) + 1.0);
 float s3w = 1.0 / (brightness(s3) + 1.0);
 float s4w = 1.0 / (brightness(s4) + 1.0);
 float oneDivideSum = 1.0 / (s1w + s2w + s3w + s4w);
 vec4 color = vec4(
 (s1 * s1w + s2 * s2w + s3 * s3w + s4 * s4w) * oneDivideSum,
 1.0
 );
#else
 vec4 color = decodeHDR(clampSample(texture, v_Texcoord + d.xy));
 color += decodeHDR(clampSample(texture, v_Texcoord + d.zy));
 color += decodeHDR(clampSample(texture, v_Texcoord + d.xw));
 color += decodeHDR(clampSample(texture, v_Texcoord + d.zw));
 color *= 0.25;
#endif
 gl_FragColor = encodeHDR(color);
}
@end`,Dl=`
@export clay.compositor.upsample
#define HIGH_QUALITY
uniform sampler2D texture;
uniform vec2 textureSize : [512, 512];
uniform float sampleScale: 0.5;
varying vec2 v_Texcoord;
@import clay.util.rgbm
@import clay.util.clamp_sample
void main()
{
#ifdef HIGH_QUALITY
 vec4 d = vec4(1.0, 1.0, -1.0, 0.0) / textureSize.xyxy * sampleScale;
 vec4 s;
 s = decodeHDR(clampSample(texture, v_Texcoord - d.xy));
 s += decodeHDR(clampSample(texture, v_Texcoord - d.wy)) * 2.0;
 s += decodeHDR(clampSample(texture, v_Texcoord - d.zy));
 s += decodeHDR(clampSample(texture, v_Texcoord + d.zw)) * 2.0;
 s += decodeHDR(clampSample(texture, v_Texcoord )) * 4.0;
 s += decodeHDR(clampSample(texture, v_Texcoord + d.xw)) * 2.0;
 s += decodeHDR(clampSample(texture, v_Texcoord + d.zy));
 s += decodeHDR(clampSample(texture, v_Texcoord + d.wy)) * 2.0;
 s += decodeHDR(clampSample(texture, v_Texcoord + d.xy));
 gl_FragColor = encodeHDR(s / 16.0);
#else
 vec4 d = vec4(-1.0, -1.0, +1.0, +1.0) / textureSize.xyxy;
 vec4 s;
 s = decodeHDR(clampSample(texture, v_Texcoord + d.xy));
 s += decodeHDR(clampSample(texture, v_Texcoord + d.zy));
 s += decodeHDR(clampSample(texture, v_Texcoord + d.xw));
 s += decodeHDR(clampSample(texture, v_Texcoord + d.zw));
 gl_FragColor = encodeHDR(s / 4.0);
#endif
}
@end`,Ml=`@export clay.compositor.hdr.composite
#define TONEMAPPING
uniform sampler2D texture;
#ifdef BLOOM_ENABLED
uniform sampler2D bloom;
#endif
#ifdef LENSFLARE_ENABLED
uniform sampler2D lensflare;
uniform sampler2D lensdirt;
#endif
#ifdef LUM_ENABLED
uniform sampler2D lum;
#endif
#ifdef LUT_ENABLED
uniform sampler2D lut;
#endif
#ifdef COLOR_CORRECTION
uniform float brightness : 0.0;
uniform float contrast : 1.0;
uniform float saturation : 1.0;
#endif
#ifdef VIGNETTE
uniform float vignetteDarkness: 1.0;
uniform float vignetteOffset: 1.0;
#endif
uniform float exposure : 1.0;
uniform float bloomIntensity : 0.25;
uniform float lensflareIntensity : 1;
varying vec2 v_Texcoord;
@import clay.util.srgb
vec3 ACESToneMapping(vec3 color)
{
 const float A = 2.51;
 const float B = 0.03;
 const float C = 2.43;
 const float D = 0.59;
 const float E = 0.14;
 return (color * (A * color + B)) / (color * (C * color + D) + E);
}
float eyeAdaption(float fLum)
{
 return mix(0.2, fLum, 0.5);
}
#ifdef LUT_ENABLED
vec3 lutTransform(vec3 color) {
 float blueColor = color.b * 63.0;
 vec2 quad1;
 quad1.y = floor(floor(blueColor) / 8.0);
 quad1.x = floor(blueColor) - (quad1.y * 8.0);
 vec2 quad2;
 quad2.y = floor(ceil(blueColor) / 8.0);
 quad2.x = ceil(blueColor) - (quad2.y * 8.0);
 vec2 texPos1;
 texPos1.x = (quad1.x * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * color.r);
 texPos1.y = (quad1.y * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * color.g);
 vec2 texPos2;
 texPos2.x = (quad2.x * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * color.r);
 texPos2.y = (quad2.y * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * color.g);
 vec4 newColor1 = texture2D(lut, texPos1);
 vec4 newColor2 = texture2D(lut, texPos2);
 vec4 newColor = mix(newColor1, newColor2, fract(blueColor));
 return newColor.rgb;
}
#endif
@import clay.util.rgbm
void main()
{
 vec4 texel = vec4(0.0);
 vec4 originalTexel = vec4(0.0);
#ifdef TEXTURE_ENABLED
 texel = decodeHDR(texture2D(texture, v_Texcoord));
 originalTexel = texel;
#endif
#ifdef BLOOM_ENABLED
 vec4 bloomTexel = decodeHDR(texture2D(bloom, v_Texcoord));
 texel.rgb += bloomTexel.rgb * bloomIntensity;
 texel.a += bloomTexel.a * bloomIntensity;
#endif
#ifdef LENSFLARE_ENABLED
 texel += decodeHDR(texture2D(lensflare, v_Texcoord)) * texture2D(lensdirt, v_Texcoord) * lensflareIntensity;
#endif
 texel.a = min(texel.a, 1.0);
#ifdef LUM_ENABLED
 float fLum = texture2D(lum, vec2(0.5, 0.5)).r;
 float adaptedLumDest = 3.0 / (max(0.1, 1.0 + 10.0*eyeAdaption(fLum)));
 float exposureBias = adaptedLumDest * exposure;
#else
 float exposureBias = exposure;
#endif
#ifdef TONEMAPPING
 texel.rgb *= exposureBias;
 texel.rgb = ACESToneMapping(texel.rgb);
#endif
 texel = linearTosRGB(texel);
#ifdef LUT_ENABLED
 texel.rgb = lutTransform(clamp(texel.rgb,vec3(0.0),vec3(1.0)));
#endif
#ifdef COLOR_CORRECTION
 texel.rgb = clamp(texel.rgb + vec3(brightness), 0.0, 1.0);
 texel.rgb = clamp((texel.rgb - vec3(0.5))*contrast+vec3(0.5), 0.0, 1.0);
 float lum = dot(texel.rgb, vec3(0.2125, 0.7154, 0.0721));
 texel.rgb = mix(vec3(lum), texel.rgb, saturation);
#endif
#ifdef VIGNETTE
 vec2 uv = (v_Texcoord - vec2(0.5)) * vec2(vignetteOffset);
 texel.rgb = mix(texel.rgb, vec3(1.0 - vignetteDarkness), dot(uv, uv));
#endif
 gl_FragColor = encodeHDR(texel);
#ifdef DEBUG
 #if DEBUG == 1
 gl_FragColor = encodeHDR(decodeHDR(texture2D(texture, v_Texcoord)));
 #elif DEBUG == 2
 gl_FragColor = encodeHDR(decodeHDR(texture2D(bloom, v_Texcoord)) * bloomIntensity);
 #elif DEBUG == 3
 gl_FragColor = encodeHDR(decodeHDR(texture2D(lensflare, v_Texcoord) * lensflareIntensity));
 #endif
#endif
 if (originalTexel.a <= 0.01 && gl_FragColor.a > 1e-5) {
 gl_FragColor.a = dot(gl_FragColor.rgb, vec3(0.2125, 0.7154, 0.0721));
 }
#ifdef PREMULTIPLY_ALPHA
 gl_FragColor.rgb *= gl_FragColor.a;
#endif
}
@end`,Yf=`@export clay.compositor.lensflare
#define SAMPLE_NUMBER 8
uniform sampler2D texture;
uniform sampler2D lenscolor;
uniform vec2 textureSize : [512, 512];
uniform float dispersal : 0.3;
uniform float haloWidth : 0.4;
uniform float distortion : 1.0;
varying vec2 v_Texcoord;
@import clay.util.rgbm
vec4 textureDistorted(
 in vec2 texcoord,
 in vec2 direction,
 in vec3 distortion
) {
 return vec4(
 decodeHDR(texture2D(texture, texcoord + direction * distortion.r)).r,
 decodeHDR(texture2D(texture, texcoord + direction * distortion.g)).g,
 decodeHDR(texture2D(texture, texcoord + direction * distortion.b)).b,
 1.0
 );
}
void main()
{
 vec2 texcoord = -v_Texcoord + vec2(1.0); vec2 textureOffset = 1.0 / textureSize;
 vec2 ghostVec = (vec2(0.5) - texcoord) * dispersal;
 vec2 haloVec = normalize(ghostVec) * haloWidth;
 vec3 distortion = vec3(-textureOffset.x * distortion, 0.0, textureOffset.x * distortion);
 vec4 result = vec4(0.0);
 for (int i = 0; i < SAMPLE_NUMBER; i++)
 {
 vec2 offset = fract(texcoord + ghostVec * float(i));
 float weight = length(vec2(0.5) - offset) / length(vec2(0.5));
 weight = pow(1.0 - weight, 10.0);
 result += textureDistorted(offset, normalize(ghostVec), distortion) * weight;
 }
 result *= texture2D(lenscolor, vec2(length(vec2(0.5) - texcoord)) / length(vec2(0.5)));
 float weight = length(vec2(0.5) - fract(texcoord + haloVec)) / length(vec2(0.5));
 weight = pow(1.0 - weight, 10.0);
 vec2 offset = fract(texcoord + haloVec);
 result += textureDistorted(offset, normalize(ghostVec), distortion) * weight;
 gl_FragColor = result;
}
@end`,Pl=`@export clay.compositor.blend
#define SHADER_NAME blend
#ifdef TEXTURE1_ENABLED
uniform sampler2D texture1;
uniform float weight1 : 1.0;
#endif
#ifdef TEXTURE2_ENABLED
uniform sampler2D texture2;
uniform float weight2 : 1.0;
#endif
#ifdef TEXTURE3_ENABLED
uniform sampler2D texture3;
uniform float weight3 : 1.0;
#endif
#ifdef TEXTURE4_ENABLED
uniform sampler2D texture4;
uniform float weight4 : 1.0;
#endif
#ifdef TEXTURE5_ENABLED
uniform sampler2D texture5;
uniform float weight5 : 1.0;
#endif
#ifdef TEXTURE6_ENABLED
uniform sampler2D texture6;
uniform float weight6 : 1.0;
#endif
varying vec2 v_Texcoord;
@import clay.util.rgbm
void main()
{
 vec4 tex = vec4(0.0);
#ifdef TEXTURE1_ENABLED
 tex += decodeHDR(texture2D(texture1, v_Texcoord)) * weight1;
#endif
#ifdef TEXTURE2_ENABLED
 tex += decodeHDR(texture2D(texture2, v_Texcoord)) * weight2;
#endif
#ifdef TEXTURE3_ENABLED
 tex += decodeHDR(texture2D(texture3, v_Texcoord)) * weight3;
#endif
#ifdef TEXTURE4_ENABLED
 tex += decodeHDR(texture2D(texture4, v_Texcoord)) * weight4;
#endif
#ifdef TEXTURE5_ENABLED
 tex += decodeHDR(texture2D(texture5, v_Texcoord)) * weight5;
#endif
#ifdef TEXTURE6_ENABLED
 tex += decodeHDR(texture2D(texture6, v_Texcoord)) * weight6;
#endif
 gl_FragColor = encodeHDR(tex);
}
@end`,Rl=`@export clay.compositor.fxaa
uniform sampler2D texture;
uniform vec4 viewport : VIEWPORT;
varying vec2 v_Texcoord;
#define FXAA_REDUCE_MIN (1.0/128.0)
#define FXAA_REDUCE_MUL (1.0/8.0)
#define FXAA_SPAN_MAX 8.0
@import clay.util.rgbm
void main()
{
 vec2 resolution = 1.0 / viewport.zw;
 vec3 rgbNW = decodeHDR( texture2D( texture, ( gl_FragCoord.xy + vec2( -1.0, -1.0 ) ) * resolution ) ).xyz;
 vec3 rgbNE = decodeHDR( texture2D( texture, ( gl_FragCoord.xy + vec2( 1.0, -1.0 ) ) * resolution ) ).xyz;
 vec3 rgbSW = decodeHDR( texture2D( texture, ( gl_FragCoord.xy + vec2( -1.0, 1.0 ) ) * resolution ) ).xyz;
 vec3 rgbSE = decodeHDR( texture2D( texture, ( gl_FragCoord.xy + vec2( 1.0, 1.0 ) ) * resolution ) ).xyz;
 vec4 rgbaM = decodeHDR( texture2D( texture, gl_FragCoord.xy * resolution ) );
 vec3 rgbM = rgbaM.xyz;
 float opacity = rgbaM.w;
 vec3 luma = vec3( 0.299, 0.587, 0.114 );
 float lumaNW = dot( rgbNW, luma );
 float lumaNE = dot( rgbNE, luma );
 float lumaSW = dot( rgbSW, luma );
 float lumaSE = dot( rgbSE, luma );
 float lumaM = dot( rgbM, luma );
 float lumaMin = min( lumaM, min( min( lumaNW, lumaNE ), min( lumaSW, lumaSE ) ) );
 float lumaMax = max( lumaM, max( max( lumaNW, lumaNE) , max( lumaSW, lumaSE ) ) );
 vec2 dir;
 dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));
 dir.y = ((lumaNW + lumaSW) - (lumaNE + lumaSE));
 float dirReduce = max( ( lumaNW + lumaNE + lumaSW + lumaSE ) * ( 0.25 * FXAA_REDUCE_MUL ), FXAA_REDUCE_MIN );
 float rcpDirMin = 1.0 / ( min( abs( dir.x ), abs( dir.y ) ) + dirReduce );
 dir = min( vec2( FXAA_SPAN_MAX, FXAA_SPAN_MAX),
 max( vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),
 dir * rcpDirMin)) * resolution;
 vec3 rgbA = decodeHDR( texture2D( texture, gl_FragCoord.xy * resolution + dir * ( 1.0 / 3.0 - 0.5 ) ) ).xyz;
 rgbA += decodeHDR( texture2D( texture, gl_FragCoord.xy * resolution + dir * ( 2.0 / 3.0 - 0.5 ) ) ).xyz;
 rgbA *= 0.5;
 vec3 rgbB = decodeHDR( texture2D( texture, gl_FragCoord.xy * resolution + dir * -0.5 ) ).xyz;
 rgbB += decodeHDR( texture2D( texture, gl_FragCoord.xy * resolution + dir * 0.5 ) ).xyz;
 rgbB *= 0.25;
 rgbB += rgbA * 0.5;
 float lumaB = dot( rgbB, luma );
 if ( ( lumaB < lumaMin ) || ( lumaB > lumaMax ) )
 {
 gl_FragColor = vec4( rgbA, opacity );
 }
 else {
 gl_FragColor = vec4( rgbB, opacity );
 }
}
@end`;function qf(e){e.import($f),e.import(bl),e.import(jf),e.import(El),e.import(Zf),e.import(Al),e.import(Cl),e.import(Ll),e.import(Dl),e.import(Ml),e.import(Yf),e.import(Pl),e.import(Rl)}qf(V);var Kf=/^#source\((.*?)\)/;function Qf(e,t){var r=new zf;t=t||{};var i={textures:{},parameters:{}},n=function(s,l){for(var u=0;u<e.nodes.length;u++){var c=e.nodes[u],h=Jf(c,i,t);h&&r.addNode(h)}};for(var a in e.parameters){var o=e.parameters[a];i.parameters[a]=ao(o)}return rd(e,i,t,function(s){i.textures=s,n()}),r}function Jf(e,t,r){var i=e.type||"filter",n,a,o;if(i==="filter"){var s=e.shader.trim(),l=Kf.exec(s);if(l?n=V.source(l[1].trim()):s.charAt(0)==="#"&&(n=t.shaders[s.substr(1)]),n||(n=s),!n)return}if(e.inputs){a={};for(var u in e.inputs)typeof e.inputs[u]=="string"?a[u]=e.inputs[u]:a[u]={node:e.inputs[u].node,pin:e.inputs[u].pin}}if(e.outputs){o={};for(var u in e.outputs){var c=e.outputs[u];o[u]={},c.attachment!=null&&(o[u].attachment=c.attachment),c.keepLastFrame!=null&&(o[u].keepLastFrame=c.keepLastFrame),c.outputLastFrame!=null&&(o[u].outputLastFrame=c.outputLastFrame),c.parameters&&(o[u].parameters=ao(c.parameters))}}var h;if(i==="scene"?h=new Vf({name:e.name,scene:r.scene,camera:r.camera,outputs:o}):i==="texture"?h=new kf({name:e.name,outputs:o}):h=new Xf({name:e.name,shader:n,inputs:a,outputs:o}),h){if(e.parameters)for(var u in e.parameters){var f=e.parameters[u];typeof f=="string"?(f=f.trim(),f.charAt(0)==="#"?f=t.textures[f.substr(1)]:h.on("beforerender",id(u,Nl(f)))):typeof f=="function"&&h.on("beforerender",f),h.setParameter(u,f)}if(e.defines&&h.pass)for(var u in e.defines){var f=e.defines[u];h.pass.material.define("fragment",u,f)}}return h}function ed(e,t){return e}function td(e,t){return t}function ao(e){var t={};if(!e)return t;["type","minFilter","magFilter","wrapS","wrapT","flipY","useMipmap"].forEach(function(i){var n=e[i];n!=null&&(typeof n=="string"&&(n=K[n]),t[i]=n)});var r=e.scale||1;return["width","height"].forEach(function(i){if(e[i]!=null){var n=e[i];typeof n=="string"?(n=n.trim(),t[i]=nd(i,Nl(n),r)):t[i]=n}}),t.width||(t.width=ed),t.height||(t.height=td),e.useMipmap!=null&&(t.useMipmap=e.useMipmap),t}function rd(e,t,r,i){if(!e.textures){i({});return}var n={},a=0,o=!1,s=r.textureRootPath;at.each(e.textures,function(l,u){var c,h=l.path,f=ao(l.parameters);if(Array.isArray(h)&&h.length===6)s&&(h=h.map(function(d){return at.relative2absolute(d,s)})),c=new Fi(f);else if(typeof h=="string")s&&(h=at.relative2absolute(h,s)),c=new se(f);else return;c.load(h),a++,c.once("success",function(){n[u]=c,a--,a===0&&(i(n),o=!0)})}),a===0&&!o&&i(n)}function id(e,t){return function(r){var i=r.getDevicePixelRatio(),n=r.getWidth(),a=r.getHeight(),o=t(n,a,i);this.setParameter(e,o)}}function nd(e,t,r){return r=r||1,function(i){var n=i.getDevicePixelRatio(),a=i.getWidth()*r,o=i.getHeight()*r;return t(a,o,n)}}function Nl(e){var t=/^expr\((.*)\)$/.exec(e);if(t)try{var r=new Function("width","height","dpr","return "+t[1]);return r(1,1),r}catch{throw new Error("Invalid expression.")}}function si(e,t){for(var r=0,i=1/t,n=e;n>0;)r=r+i*(n%t),n=Math.floor(n/t),i=i/t;return r}const ad=`@export ecgl.ssao.estimate

uniform sampler2D depthTex;

uniform sampler2D normalTex;

uniform sampler2D noiseTex;

uniform vec2 depthTexSize;

uniform vec2 noiseTexSize;

uniform mat4 projection;

uniform mat4 projectionInv;

uniform mat4 viewInverseTranspose;

uniform vec3 kernel[KERNEL_SIZE];

uniform float radius : 1;

uniform float power : 1;

uniform float bias: 1e-2;

uniform float intensity: 1.0;

varying vec2 v_Texcoord;

float ssaoEstimator(in vec3 originPos, in mat3 kernelBasis) {
 float occlusion = 0.0;

 for (int i = 0; i < KERNEL_SIZE; i++) {
 vec3 samplePos = kernel[i];
#ifdef NORMALTEX_ENABLED
 samplePos = kernelBasis * samplePos;
#endif
 samplePos = samplePos * radius + originPos;

 vec4 texCoord = projection * vec4(samplePos, 1.0);
 texCoord.xy /= texCoord.w;

 vec4 depthTexel = texture2D(depthTex, texCoord.xy * 0.5 + 0.5);

 float sampleDepth = depthTexel.r * 2.0 - 1.0;
 if (projection[3][3] == 0.0) {
 sampleDepth = projection[3][2] / (sampleDepth * projection[2][3] - projection[2][2]);
 }
 else {
 sampleDepth = (sampleDepth - projection[3][2]) / projection[2][2];
 }
 
 float rangeCheck = smoothstep(0.0, 1.0, radius / abs(originPos.z - sampleDepth));
 occlusion += rangeCheck * step(samplePos.z, sampleDepth - bias);
 }
#ifdef NORMALTEX_ENABLED
 occlusion = 1.0 - occlusion / float(KERNEL_SIZE);
#else
 occlusion = 1.0 - clamp((occlusion / float(KERNEL_SIZE) - 0.6) * 2.5, 0.0, 1.0);
#endif
 return pow(occlusion, power);
}

void main()
{

 vec4 depthTexel = texture2D(depthTex, v_Texcoord);

#ifdef NORMALTEX_ENABLED
 vec4 tex = texture2D(normalTex, v_Texcoord);
 if (dot(tex.rgb, tex.rgb) == 0.0) {
 gl_FragColor = vec4(1.0);
 return;
 }
 vec3 N = tex.rgb * 2.0 - 1.0;
 N = (viewInverseTranspose * vec4(N, 0.0)).xyz;

 vec2 noiseTexCoord = depthTexSize / vec2(noiseTexSize) * v_Texcoord;
 vec3 rvec = texture2D(noiseTex, noiseTexCoord).rgb * 2.0 - 1.0;
 vec3 T = normalize(rvec - N * dot(rvec, N));
 vec3 BT = normalize(cross(N, T));
 mat3 kernelBasis = mat3(T, BT, N);
#else
 if (depthTexel.r > 0.99999) {
 gl_FragColor = vec4(1.0);
 return;
 }
 mat3 kernelBasis;
#endif

 float z = depthTexel.r * 2.0 - 1.0;

 vec4 projectedPos = vec4(v_Texcoord * 2.0 - 1.0, z, 1.0);
 vec4 p4 = projectionInv * projectedPos;

 vec3 position = p4.xyz / p4.w;

 float ao = ssaoEstimator(position, kernelBasis);
 ao = clamp(1.0 - (1.0 - ao) * intensity, 0.0, 1.0);
 gl_FragColor = vec4(vec3(ao), 1.0);
}

@end


@export ecgl.ssao.blur
#define SHADER_NAME SSAO_BLUR

uniform sampler2D ssaoTexture;

#ifdef NORMALTEX_ENABLED
uniform sampler2D normalTex;
#endif

varying vec2 v_Texcoord;

uniform vec2 textureSize;
uniform float blurSize : 1.0;

uniform int direction: 0.0;

#ifdef DEPTHTEX_ENABLED
uniform sampler2D depthTex;
uniform mat4 projection;
uniform float depthRange : 0.5;

float getLinearDepth(vec2 coord)
{
 float depth = texture2D(depthTex, coord).r * 2.0 - 1.0;
 return projection[3][2] / (depth * projection[2][3] - projection[2][2]);
}
#endif

void main()
{
 float kernel[5];
 kernel[0] = 0.122581;
 kernel[1] = 0.233062;
 kernel[2] = 0.288713;
 kernel[3] = 0.233062;
 kernel[4] = 0.122581;

 vec2 off = vec2(0.0);
 if (direction == 0) {
 off[0] = blurSize / textureSize.x;
 }
 else {
 off[1] = blurSize / textureSize.y;
 }

 vec2 coord = v_Texcoord;

 float sum = 0.0;
 float weightAll = 0.0;

#ifdef NORMALTEX_ENABLED
 vec3 centerNormal = texture2D(normalTex, v_Texcoord).rgb * 2.0 - 1.0;
#endif
#if defined(DEPTHTEX_ENABLED)
 float centerDepth = getLinearDepth(v_Texcoord);
#endif

 for (int i = 0; i < 5; i++) {
 vec2 coord = clamp(v_Texcoord + vec2(float(i) - 2.0) * off, vec2(0.0), vec2(1.0));

 float w = kernel[i];
#ifdef NORMALTEX_ENABLED
 vec3 normal = texture2D(normalTex, coord).rgb * 2.0 - 1.0;
 w *= clamp(dot(normal, centerNormal), 0.0, 1.0);
#endif
#ifdef DEPTHTEX_ENABLED
 float d = getLinearDepth(coord);
 w *= (1.0 - smoothstep(abs(centerDepth - d) / depthRange, 0.0, 1.0));
#endif

 weightAll += w;
 sum += texture2D(ssaoTexture, coord).r * w;
 }

 gl_FragColor = vec4(vec3(sum / weightAll), 1.0);
}

@end
`;V.import(ad);function Il(e){for(var t=new Uint8Array(e*e*4),r=0,i=new k,n=0;n<e;n++)for(var a=0;a<e;a++)i.set(Math.random()*2-1,Math.random()*2-1,0).normalize(),t[r++]=(i.x*.5+.5)*255,t[r++]=(i.y*.5+.5)*255,t[r++]=0,t[r++]=255;return t}function hs(e){return new se({pixels:Il(e),wrapS:K.REPEAT,wrapT:K.REPEAT,width:e,height:e})}function od(e,t,r){var i=new Float32Array(e*3);t=t||0;for(var n=0;n<e;n++){var a=si(n+t,2)*(r?1:2)*Math.PI,o=si(n+t,3)*Math.PI,s=Math.random(),l=Math.cos(a)*Math.sin(o)*s,u=Math.cos(o)*s,c=Math.sin(a)*Math.sin(o)*s;i[n*3]=l,i[n*3+1]=u,i[n*3+2]=c}return i}function nr(e){e=e||{},this._ssaoPass=new je({fragment:V.source("ecgl.ssao.estimate")}),this._blurPass=new je({fragment:V.source("ecgl.ssao.blur")}),this._framebuffer=new ot({depthBuffer:!1}),this._ssaoTexture=new se,this._blurTexture=new se,this._blurTexture2=new se,this._depthTex=e.depthTexture,this._normalTex=e.normalTexture,this.setNoiseSize(4),this.setKernelSize(e.kernelSize||12),e.radius!=null&&this.setParameter("radius",e.radius),e.power!=null&&this.setParameter("power",e.power),this._normalTex||(this._ssaoPass.material.disableTexture("normalTex"),this._blurPass.material.disableTexture("normalTex")),this._depthTex||this._blurPass.material.disableTexture("depthTex"),this._blurPass.material.setUniform("normalTex",this._normalTex),this._blurPass.material.setUniform("depthTex",this._depthTex)}nr.prototype.setDepthTexture=function(e){this._depthTex=e};nr.prototype.setNormalTexture=function(e){this._normalTex=e,this._ssaoPass.material[e?"enableTexture":"disableTexture"]("normalTex"),this.setKernelSize(this._kernelSize)};nr.prototype.update=function(e,t,r){var i=e.getWidth(),n=e.getHeight(),a=this._ssaoPass,o=this._blurPass;a.setUniform("kernel",this._kernels[r%this._kernels.length]),a.setUniform("depthTex",this._depthTex),this._normalTex!=null&&a.setUniform("normalTex",this._normalTex),a.setUniform("depthTexSize",[this._depthTex.width,this._depthTex.height]);var s=new q;q.transpose(s,t.worldTransform),a.setUniform("projection",t.projectionMatrix.array),a.setUniform("projectionInv",t.invProjectionMatrix.array),a.setUniform("viewInverseTranspose",s.array);var l=this._ssaoTexture,u=this._blurTexture,c=this._blurTexture2;l.width=i/2,l.height=n/2,u.width=i,u.height=n,c.width=i,c.height=n,this._framebuffer.attach(l),this._framebuffer.bind(e),e.gl.clearColor(1,1,1,1),e.gl.clear(e.gl.COLOR_BUFFER_BIT),a.render(e),o.setUniform("textureSize",[i/2,n/2]),o.setUniform("projection",t.projectionMatrix.array),this._framebuffer.attach(u),o.setUniform("direction",0),o.setUniform("ssaoTexture",l),o.render(e),this._framebuffer.attach(c),o.setUniform("textureSize",[i,n]),o.setUniform("direction",1),o.setUniform("ssaoTexture",u),o.render(e),this._framebuffer.unbind(e);var h=e.clearColor;e.gl.clearColor(h[0],h[1],h[2],h[3])};nr.prototype.getTargetTexture=function(){return this._blurTexture2};nr.prototype.setParameter=function(e,t){e==="noiseTexSize"?this.setNoiseSize(t):e==="kernelSize"?this.setKernelSize(t):e==="intensity"?this._ssaoPass.material.set("intensity",t):this._ssaoPass.setUniform(e,t)};nr.prototype.setKernelSize=function(e){this._kernelSize=e,this._ssaoPass.material.define("fragment","KERNEL_SIZE",e),this._kernels=this._kernels||[];for(var t=0;t<30;t++)this._kernels[t]=od(e,t*e,!!this._normalTex)};nr.prototype.setNoiseSize=function(e){var t=this._ssaoPass.getUniform("noiseTex");t?(t.data=Il(e),t.width=t.height=e,t.dirty()):(t=hs(e),this._ssaoPass.setUniform("noiseTex",hs(e))),this._ssaoPass.setUniform("noiseTexSize",[e,e])};nr.prototype.dispose=function(e){this._blurTexture.dispose(e),this._ssaoTexture.dispose(e),this._blurTexture2.dispose(e)};const sd=`@export ecgl.ssr.main

#define SHADER_NAME SSR
#define MAX_ITERATION 20;
#define SAMPLE_PER_FRAME 5;
#define TOTAL_SAMPLES 128;

uniform sampler2D sourceTexture;
uniform sampler2D gBufferTexture1;
uniform sampler2D gBufferTexture2;
uniform sampler2D gBufferTexture3;
uniform samplerCube specularCubemap;
uniform float specularIntensity: 1;

uniform mat4 projection;
uniform mat4 projectionInv;
uniform mat4 toViewSpace;
uniform mat4 toWorldSpace;

uniform float maxRayDistance: 200;

uniform float pixelStride: 16;
uniform float pixelStrideZCutoff: 50; 
uniform float screenEdgeFadeStart: 0.9; 
uniform float eyeFadeStart : 0.2; uniform float eyeFadeEnd: 0.8; 
uniform float minGlossiness: 0.2; uniform float zThicknessThreshold: 1;

uniform float nearZ;
uniform vec2 viewportSize : VIEWPORT_SIZE;

uniform float jitterOffset: 0;

varying vec2 v_Texcoord;

#ifdef DEPTH_DECODE
@import clay.util.decode_float
#endif

#ifdef PHYSICALLY_CORRECT
uniform sampler2D normalDistribution;
uniform float sampleOffset: 0;
uniform vec2 normalDistributionSize;

vec3 transformNormal(vec3 H, vec3 N) {
 vec3 upVector = N.y > 0.999 ? vec3(1.0, 0.0, 0.0) : vec3(0.0, 1.0, 0.0);
 vec3 tangentX = normalize(cross(N, upVector));
 vec3 tangentZ = cross(N, tangentX);
 return normalize(tangentX * H.x + N * H.y + tangentZ * H.z);
}
vec3 importanceSampleNormalGGX(float i, float roughness, vec3 N) {
 float p = fract((i + sampleOffset) / float(TOTAL_SAMPLES));
 vec3 H = texture2D(normalDistribution,vec2(roughness, p)).rgb;
 return transformNormal(H, N);
}
float G_Smith(float g, float ndv, float ndl) {
 float roughness = 1.0 - g;
 float k = roughness * roughness / 2.0;
 float G1V = ndv / (ndv * (1.0 - k) + k);
 float G1L = ndl / (ndl * (1.0 - k) + k);
 return G1L * G1V;
}
vec3 F_Schlick(float ndv, vec3 spec) {
 return spec + (1.0 - spec) * pow(1.0 - ndv, 5.0);
}
#endif

float fetchDepth(sampler2D depthTexture, vec2 uv)
{
 vec4 depthTexel = texture2D(depthTexture, uv);
 return depthTexel.r * 2.0 - 1.0;
}

float linearDepth(float depth)
{
 if (projection[3][3] == 0.0) {
 return projection[3][2] / (depth * projection[2][3] - projection[2][2]);
 }
 else {
 return (depth - projection[3][2]) / projection[2][2];
 }
}

bool rayIntersectDepth(float rayZNear, float rayZFar, vec2 hitPixel)
{
 if (rayZFar > rayZNear)
 {
 float t = rayZFar; rayZFar = rayZNear; rayZNear = t;
 }
 float cameraZ = linearDepth(fetchDepth(gBufferTexture2, hitPixel));
 return rayZFar <= cameraZ && rayZNear >= cameraZ - zThicknessThreshold;
}


bool traceScreenSpaceRay(
 vec3 rayOrigin, vec3 rayDir, float jitter,
 out vec2 hitPixel, out vec3 hitPoint, out float iterationCount
)
{
 float rayLength = ((rayOrigin.z + rayDir.z * maxRayDistance) > -nearZ)
 ? (-nearZ - rayOrigin.z) / rayDir.z : maxRayDistance;

 vec3 rayEnd = rayOrigin + rayDir * rayLength;

 vec4 H0 = projection * vec4(rayOrigin, 1.0);
 vec4 H1 = projection * vec4(rayEnd, 1.0);

 float k0 = 1.0 / H0.w, k1 = 1.0 / H1.w;

 vec3 Q0 = rayOrigin * k0, Q1 = rayEnd * k1;

 vec2 P0 = (H0.xy * k0 * 0.5 + 0.5) * viewportSize;
 vec2 P1 = (H1.xy * k1 * 0.5 + 0.5) * viewportSize;

 P1 += dot(P1 - P0, P1 - P0) < 0.0001 ? 0.01 : 0.0;
 vec2 delta = P1 - P0;

 bool permute = false;
 if (abs(delta.x) < abs(delta.y)) {
 permute = true;
 delta = delta.yx;
 P0 = P0.yx;
 P1 = P1.yx;
 }
 float stepDir = sign(delta.x);
 float invdx = stepDir / delta.x;

 vec3 dQ = (Q1 - Q0) * invdx;
 float dk = (k1 - k0) * invdx;

 vec2 dP = vec2(stepDir, delta.y * invdx);

 float strideScaler = 1.0 - min(1.0, -rayOrigin.z / pixelStrideZCutoff);
 float pixStride = 1.0 + strideScaler * pixelStride;

 dP *= pixStride; dQ *= pixStride; dk *= pixStride;

 vec4 pqk = vec4(P0, Q0.z, k0);
 vec4 dPQK = vec4(dP, dQ.z, dk);

 pqk += dPQK * jitter;
 float rayZFar = (dPQK.z * 0.5 + pqk.z) / (dPQK.w * 0.5 + pqk.w);
 float rayZNear;

 bool intersect = false;

 vec2 texelSize = 1.0 / viewportSize;

 iterationCount = 0.0;

 for (int i = 0; i < MAX_ITERATION; i++)
 {
 pqk += dPQK;

 rayZNear = rayZFar;
 rayZFar = (dPQK.z * 0.5 + pqk.z) / (dPQK.w * 0.5 + pqk.w);

 hitPixel = permute ? pqk.yx : pqk.xy;
 hitPixel *= texelSize;

 intersect = rayIntersectDepth(rayZNear, rayZFar, hitPixel);

 iterationCount += 1.0;

 dPQK *= 1.2;

 if (intersect) {
 break;
 }
 }

 Q0.xy += dQ.xy * iterationCount;
 Q0.z = pqk.z;
 hitPoint = Q0 / pqk.w;

 return intersect;
}

float calculateAlpha(
 float iterationCount, float reflectivity,
 vec2 hitPixel, vec3 hitPoint, float dist, vec3 rayDir
)
{
 float alpha = clamp(reflectivity, 0.0, 1.0);
 alpha *= 1.0 - (iterationCount / float(MAX_ITERATION));
 vec2 hitPixelNDC = hitPixel * 2.0 - 1.0;
 float maxDimension = min(1.0, max(abs(hitPixelNDC.x), abs(hitPixelNDC.y)));
 alpha *= 1.0 - max(0.0, maxDimension - screenEdgeFadeStart) / (1.0 - screenEdgeFadeStart);

 float _eyeFadeStart = eyeFadeStart;
 float _eyeFadeEnd = eyeFadeEnd;
 if (_eyeFadeStart > _eyeFadeEnd) {
 float tmp = _eyeFadeEnd;
 _eyeFadeEnd = _eyeFadeStart;
 _eyeFadeStart = tmp;
 }

 float eyeDir = clamp(rayDir.z, _eyeFadeStart, _eyeFadeEnd);
 alpha *= 1.0 - (eyeDir - _eyeFadeStart) / (_eyeFadeEnd - _eyeFadeStart);

 alpha *= 1.0 - clamp(dist / maxRayDistance, 0.0, 1.0);

 return alpha;
}

@import clay.util.rand

@import clay.util.rgbm

void main()
{
 vec4 normalAndGloss = texture2D(gBufferTexture1, v_Texcoord);

 if (dot(normalAndGloss.rgb, vec3(1.0)) == 0.0) {
 discard;
 }

 float g = normalAndGloss.a;
#if !defined(PHYSICALLY_CORRECT)
 if (g <= minGlossiness) {
 discard;
 }
#endif

 float reflectivity = (g - minGlossiness) / (1.0 - minGlossiness);

 vec3 N = normalize(normalAndGloss.rgb * 2.0 - 1.0);
 N = normalize((toViewSpace * vec4(N, 0.0)).xyz);

 vec4 projectedPos = vec4(v_Texcoord * 2.0 - 1.0, fetchDepth(gBufferTexture2, v_Texcoord), 1.0);
 vec4 pos = projectionInv * projectedPos;
 vec3 rayOrigin = pos.xyz / pos.w;
 vec3 V = -normalize(rayOrigin);

 float ndv = clamp(dot(N, V), 0.0, 1.0);
 float iterationCount;
 float jitter = rand(fract(v_Texcoord + jitterOffset));

#ifdef PHYSICALLY_CORRECT
 vec4 color = vec4(vec3(0.0), 1.0);
 vec4 albedoMetalness = texture2D(gBufferTexture3, v_Texcoord);
 vec3 albedo = albedoMetalness.rgb;
 float m = albedoMetalness.a;
 vec3 diffuseColor = albedo * (1.0 - m);
 vec3 spec = mix(vec3(0.04), albedo, m);

 float jitter2 = rand(fract(v_Texcoord)) * float(TOTAL_SAMPLES);

 for (int i = 0; i < SAMPLE_PER_FRAME; i++) {
 vec3 H = importanceSampleNormalGGX(float(i) + jitter2, 1.0 - g, N);
 vec3 rayDir = normalize(reflect(-V, H));
#else
 vec3 rayDir = normalize(reflect(-V, N));
#endif
 vec2 hitPixel;
 vec3 hitPoint;

 bool intersect = traceScreenSpaceRay(rayOrigin, rayDir, jitter, hitPixel, hitPoint, iterationCount);

 float dist = distance(rayOrigin, hitPoint);

 vec3 hitNormal = texture2D(gBufferTexture1, hitPixel).rgb * 2.0 - 1.0;
 hitNormal = normalize((toViewSpace * vec4(hitNormal, 0.0)).xyz);
#ifdef PHYSICALLY_CORRECT
 float ndl = clamp(dot(N, rayDir), 0.0, 1.0);
 float vdh = clamp(dot(V, H), 0.0, 1.0);
 float ndh = clamp(dot(N, H), 0.0, 1.0);
 vec3 litTexel = vec3(0.0);
 if (dot(hitNormal, rayDir) < 0.0 && intersect) {
 litTexel = texture2D(sourceTexture, hitPixel).rgb;
 litTexel *= pow(clamp(1.0 - dist / 200.0, 0.0, 1.0), 3.0);

 }
 else {
 #ifdef SPECULARCUBEMAP_ENABLED
 vec3 rayDirW = normalize(toWorldSpace * vec4(rayDir, 0.0)).rgb;
 litTexel = RGBMDecode(textureCubeLodEXT(specularCubemap, rayDirW, 0.0), 8.12).rgb * specularIntensity;
#endif
 }
 color.rgb += ndl * litTexel * (
 F_Schlick(ndl, spec) * G_Smith(g, ndv, ndl) * vdh / (ndh * ndv + 0.001)
 );
 }
 color.rgb /= float(SAMPLE_PER_FRAME);
#else
 #if !defined(SPECULARCUBEMAP_ENABLED)
 if (dot(hitNormal, rayDir) >= 0.0) {
 discard;
 }
 if (!intersect) {
 discard;
 }
#endif
 float alpha = clamp(calculateAlpha(iterationCount, reflectivity, hitPixel, hitPoint, dist, rayDir), 0.0, 1.0);
 vec4 color = texture2D(sourceTexture, hitPixel);
 color.rgb *= alpha;

#ifdef SPECULARCUBEMAP_ENABLED
 vec3 rayDirW = normalize(toWorldSpace * vec4(rayDir, 0.0)).rgb;
 alpha = alpha * (intersect ? 1.0 : 0.0);
 float bias = (1.0 -g) * 5.0;
 color.rgb += (1.0 - alpha)
 * RGBMDecode(textureCubeLodEXT(specularCubemap, rayDirW, bias), 8.12).rgb
 * specularIntensity;
#endif

#endif

 gl_FragColor = encodeHDR(color);
}
@end

@export ecgl.ssr.blur

uniform sampler2D texture;
uniform sampler2D gBufferTexture1;
uniform sampler2D gBufferTexture2;
uniform mat4 projection;
uniform float depthRange : 0.05;

varying vec2 v_Texcoord;

uniform vec2 textureSize;
uniform float blurSize : 1.0;

#ifdef BLEND
 #ifdef SSAOTEX_ENABLED
uniform sampler2D ssaoTex;
 #endif
uniform sampler2D sourceTexture;
#endif

float getLinearDepth(vec2 coord)
{
 float depth = texture2D(gBufferTexture2, coord).r * 2.0 - 1.0;
 return projection[3][2] / (depth * projection[2][3] - projection[2][2]);
}

@import clay.util.rgbm


void main()
{
 @import clay.compositor.kernel.gaussian_9

 vec4 centerNTexel = texture2D(gBufferTexture1, v_Texcoord);
 float g = centerNTexel.a;
 float maxBlurSize = clamp(1.0 - g, 0.0, 1.0) * blurSize;
#ifdef VERTICAL
 vec2 off = vec2(0.0, maxBlurSize / textureSize.y);
#else
 vec2 off = vec2(maxBlurSize / textureSize.x, 0.0);
#endif

 vec2 coord = v_Texcoord;

 vec4 sum = vec4(0.0);
 float weightAll = 0.0;

 vec3 cN = centerNTexel.rgb * 2.0 - 1.0;
 float cD = getLinearDepth(v_Texcoord);
 for (int i = 0; i < 9; i++) {
 vec2 coord = clamp((float(i) - 4.0) * off + v_Texcoord, vec2(0.0), vec2(1.0));
 float w = gaussianKernel[i]
 * clamp(dot(cN, texture2D(gBufferTexture1, coord).rgb * 2.0 - 1.0), 0.0, 1.0);
 float d = getLinearDepth(coord);
 w *= (1.0 - smoothstep(abs(cD - d) / depthRange, 0.0, 1.0));

 weightAll += w;
 sum += decodeHDR(texture2D(texture, coord)) * w;
 }

#ifdef BLEND
 float aoFactor = 1.0;
 #ifdef SSAOTEX_ENABLED
 aoFactor = texture2D(ssaoTex, v_Texcoord).r;
 #endif
 gl_FragColor = encodeHDR(
 sum / weightAll * aoFactor + decodeHDR(texture2D(sourceTexture, v_Texcoord))
 );
#else
 gl_FragColor = encodeHDR(sum / weightAll);
#endif
}

@end`;V.import(sd);function ar(e){e=e||{},this._ssrPass=new je({fragment:V.source("ecgl.ssr.main"),clearColor:[0,0,0,0]}),this._blurPass1=new je({fragment:V.source("ecgl.ssr.blur"),clearColor:[0,0,0,0]}),this._blurPass2=new je({fragment:V.source("ecgl.ssr.blur"),clearColor:[0,0,0,0]}),this._blendPass=new je({fragment:V.source("clay.compositor.blend")}),this._blendPass.material.disableTexturesAll(),this._blendPass.material.enableTexture(["texture1","texture2"]),this._ssrPass.setUniform("gBufferTexture1",e.normalTexture),this._ssrPass.setUniform("gBufferTexture2",e.depthTexture),this._blurPass1.setUniform("gBufferTexture1",e.normalTexture),this._blurPass1.setUniform("gBufferTexture2",e.depthTexture),this._blurPass2.setUniform("gBufferTexture1",e.normalTexture),this._blurPass2.setUniform("gBufferTexture2",e.depthTexture),this._blurPass2.material.define("fragment","VERTICAL"),this._blurPass2.material.define("fragment","BLEND"),this._ssrTexture=new se({type:K.HALF_FLOAT}),this._texture2=new se({type:K.HALF_FLOAT}),this._texture3=new se({type:K.HALF_FLOAT}),this._prevTexture=new se({type:K.HALF_FLOAT}),this._currentTexture=new se({type:K.HALF_FLOAT}),this._frameBuffer=new ot({depthBuffer:!1}),this._normalDistribution=null,this._totalSamples=256,this._samplePerFrame=4,this._ssrPass.material.define("fragment","SAMPLE_PER_FRAME",this._samplePerFrame),this._ssrPass.material.define("fragment","TOTAL_SAMPLES",this._totalSamples),this._downScale=1}ar.prototype.setAmbientCubemap=function(e,t){this._ssrPass.material.set("specularCubemap",e),this._ssrPass.material.set("specularIntensity",t);var r=e&&t;this._ssrPass.material[r?"enableTexture":"disableTexture"]("specularCubemap")};ar.prototype.update=function(e,t,r,i){var n=e.getWidth(),a=e.getHeight(),o=this._ssrTexture,s=this._texture2,l=this._texture3;o.width=this._prevTexture.width=this._currentTexture.width=n/this._downScale,o.height=this._prevTexture.height=this._currentTexture.height=a/this._downScale,s.width=l.width=n,s.height=l.height=a;var u=this._frameBuffer,c=this._ssrPass,h=this._blurPass1,f=this._blurPass2,d=this._blendPass,v=new q,p=new q;q.transpose(v,t.worldTransform),q.transpose(p,t.viewMatrix),c.setUniform("sourceTexture",r),c.setUniform("projection",t.projectionMatrix.array),c.setUniform("projectionInv",t.invProjectionMatrix.array),c.setUniform("toViewSpace",v.array),c.setUniform("toWorldSpace",p.array),c.setUniform("nearZ",t.near);var m=i/this._totalSamples*this._samplePerFrame;if(c.setUniform("jitterOffset",m),c.setUniform("sampleOffset",i*this._samplePerFrame),h.setUniform("textureSize",[o.width,o.height]),f.setUniform("textureSize",[n,a]),f.setUniform("sourceTexture",r),h.setUniform("projection",t.projectionMatrix.array),f.setUniform("projection",t.projectionMatrix.array),u.attach(o),u.bind(e),c.render(e),this._physicallyCorrect&&(u.attach(this._currentTexture),d.setUniform("texture1",this._prevTexture),d.setUniform("texture2",o),d.material.set({weight1:i>=1?.95:0,weight2:i>=1?.05:1}),d.render(e)),u.attach(s),h.setUniform("texture",this._physicallyCorrect?this._currentTexture:o),h.render(e),u.attach(l),f.setUniform("texture",s),f.render(e),u.unbind(e),this._physicallyCorrect){var _=this._prevTexture;this._prevTexture=this._currentTexture,this._currentTexture=_}};ar.prototype.getTargetTexture=function(){return this._texture3};ar.prototype.setParameter=function(e,t){e==="maxIteration"?this._ssrPass.material.define("fragment","MAX_ITERATION",t):this._ssrPass.setUniform(e,t)};ar.prototype.setPhysicallyCorrect=function(e){e?(this._normalDistribution||(this._normalDistribution=wn.generateNormalDistribution(64,this._totalSamples)),this._ssrPass.material.define("fragment","PHYSICALLY_CORRECT"),this._ssrPass.material.set("normalDistribution",this._normalDistribution),this._ssrPass.material.set("normalDistributionSize",[64,this._totalSamples])):this._ssrPass.material.undefine("fragment","PHYSICALLY_CORRECT"),this._physicallyCorrect=e};ar.prototype.setSSAOTexture=function(e){var t=this._blurPass2;e?(t.material.enableTexture("ssaoTex"),t.material.set("ssaoTex",e)):t.material.disableTexture("ssaoTex")};ar.prototype.isFinished=function(e){return this._physicallyCorrect?e>this._totalSamples/this._samplePerFrame:!0};ar.prototype.dispose=function(e){this._ssrTexture.dispose(e),this._texture2.dispose(e),this._texture3.dispose(e),this._prevTexture.dispose(e),this._currentTexture.dispose(e),this._frameBuffer.dispose(e)};const fs=[0,0,-.321585265978,-.154972575841,.458126042375,.188473391593,.842080129861,.527766490688,.147304551086,-.659453822776,-.331943915203,-.940619700594,.0479226680259,.54812163202,.701581552186,-.709825561388,-.295436780218,.940589268233,-.901489676764,.237713156085,.973570876096,-.109899459384,-.866792314779,-.451805525005,.330975007087,.800048655954,-.344275183665,.381779221166,-.386139432542,-.437418421534,-.576478634965,-.0148463392551,.385798197415,-.262426961053,-.666302061145,.682427250835,-.628010632582,-.732836215494,.10163141741,-.987658134403,.711995289051,-.320024291314,.0296005138058,.950296523438,.0130612307608,-.351024443122,-.879596633704,-.10478487883,.435712737232,.504254490347,.779203817497,.206477676721,.388264289969,-.896736162545,-.153106280781,-.629203242522,-.245517550697,.657969239148,.126830499058,.26862328493,-.634888119007,-.302301223431,.617074219636,.779817204925],ld=`@export ecgl.normal.vertex

@import ecgl.common.transformUniforms

@import ecgl.common.uv.header

@import ecgl.common.attributes

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

@import ecgl.common.normalMap.vertexHeader

@import ecgl.common.vertexAnimation.header

void main()
{

 @import ecgl.common.vertexAnimation.main

 @import ecgl.common.uv.main

 v_Normal = normalize((worldInverseTranspose * vec4(normal, 0.0)).xyz);
 v_WorldPosition = (world * vec4(pos, 1.0)).xyz;

 @import ecgl.common.normalMap.vertexMain

 gl_Position = worldViewProjection * vec4(pos, 1.0);

}


@end


@export ecgl.normal.fragment

#define ROUGHNESS_CHANEL 0

uniform bool useBumpMap;
uniform bool useRoughnessMap;
uniform bool doubleSide;
uniform float roughness;

@import ecgl.common.uv.fragmentHeader

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

uniform mat4 viewInverse : VIEWINVERSE;

@import ecgl.common.normalMap.fragmentHeader
@import ecgl.common.bumpMap.header

uniform sampler2D roughnessMap;

void main()
{
 vec3 N = v_Normal;
 
 bool flipNormal = false;
 if (doubleSide) {
 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(eyePos - v_WorldPosition);

 if (dot(N, V) < 0.0) {
 flipNormal = true;
 }
 }

 @import ecgl.common.normalMap.fragmentMain

 if (useBumpMap) {
 N = bumpNormal(v_WorldPosition, v_Normal, N);
 }

 float g = 1.0 - roughness;

 if (useRoughnessMap) {
 float g2 = 1.0 - texture2D(roughnessMap, v_DetailTexcoord)[ROUGHNESS_CHANEL];
 g = clamp(g2 + (g - 0.5) * 2.0, 0.0, 1.0);
 }

 if (flipNormal) {
 N = -N;
 }

 gl_FragColor.rgb = (N.xyz + 1.0) * 0.5;
 gl_FragColor.a = g;
}
@end`;V.import(ld);function ya(e,t,r,i,n){var a=e.gl;t.setUniform(a,"1i",r,n),a.activeTexture(a.TEXTURE0+n),i.isRenderable()?i.bind(e):i.unbind(e)}function ud(e,t,r,i,n){var a,o,s,l,u=e.gl;return function(c,h,f){if(!(l&&l.material===c.material)){var d=c.material,v=c.__program,p=d.get("roughness");p==null&&(p=1);var m=d.get("normalMap")||t,_=d.get("roughnessMap"),x=d.get("bumpMap"),y=d.get("uvRepeat"),g=d.get("uvOffset"),w=d.get("detailUvRepeat"),T=d.get("detailUvOffset"),b=!!x&&d.isTextureEnabled("bumpMap"),S=!!_&&d.isTextureEnabled("roughnessMap"),C=d.isDefined("fragment","DOUBLE_SIDED");x=x||r,_=_||i,f!==h?(h.set("normalMap",m),h.set("bumpMap",x),h.set("roughnessMap",_),h.set("useBumpMap",b),h.set("useRoughnessMap",S),h.set("doubleSide",C),y!=null&&h.set("uvRepeat",y),g!=null&&h.set("uvOffset",g),w!=null&&h.set("detailUvRepeat",w),T!=null&&h.set("detailUvOffset",T),h.set("roughness",p)):(v.setUniform(u,"1f","roughness",p),a!==m&&ya(e,v,"normalMap",m,0),o!==x&&x&&ya(e,v,"bumpMap",x,1),s!==_&&_&&ya(e,v,"roughnessMap",_,2),y!=null&&v.setUniform(u,"2f","uvRepeat",y),g!=null&&v.setUniform(u,"2f","uvOffset",g),w!=null&&v.setUniform(u,"2f","detailUvRepeat",w),T!=null&&v.setUniform(u,"2f","detailUvOffset",T),v.setUniform(u,"1i","useBumpMap",+b),v.setUniform(u,"1i","useRoughnessMap",+S),v.setUniform(u,"1i","doubleSide",+C)),a=m,o=x,s=_,l=c}}}function pi(e){this._depthTex=new se({format:K.DEPTH_COMPONENT,type:K.UNSIGNED_INT}),this._normalTex=new se({type:K.HALF_FLOAT}),this._framebuffer=new ot,this._framebuffer.attach(this._normalTex),this._framebuffer.attach(this._depthTex,ot.DEPTH_ATTACHMENT),this._normalMaterial=new Nt({shader:new V(V.source("ecgl.normal.vertex"),V.source("ecgl.normal.fragment"))}),this._normalMaterial.enableTexture(["normalMap","bumpMap","roughnessMap"]),this._defaultNormalMap=Ir.createBlank("#000"),this._defaultBumpMap=Ir.createBlank("#000"),this._defaultRoughessMap=Ir.createBlank("#000"),this._debugPass=new je({fragment:V.source("clay.compositor.output")}),this._debugPass.setUniform("texture",this._normalTex),this._debugPass.material.undefine("fragment","OUTPUT_ALPHA")}pi.prototype.getDepthTexture=function(){return this._depthTex};pi.prototype.getNormalTexture=function(){return this._normalTex};pi.prototype.update=function(e,t,r){var i=e.getWidth(),n=e.getHeight(),a=this._depthTex,o=this._normalTex,s=this._normalMaterial;a.width=i,a.height=n,o.width=i,o.height=n;var l=t.getRenderList(r).opaque;this._framebuffer.bind(e),e.gl.clearColor(0,0,0,0),e.gl.clear(e.gl.COLOR_BUFFER_BIT|e.gl.DEPTH_BUFFER_BIT),e.gl.disable(e.gl.BLEND),e.renderPass(l,r,{getMaterial:function(){return s},ifRender:function(u){return u.renderNormal},beforeRender:ud(e,this._defaultNormalMap,this._defaultBumpMap,this._defaultRoughessMap,this._normalMaterial),sort:e.opaqueSortCompare}),this._framebuffer.unbind(e)};pi.prototype.renderDebug=function(e){this._debugPass.render(e)};pi.prototype.dispose=function(e){this._depthTex.dispose(e),this._normalTex.dispose(e)};function qi(e){e=e||{},this._edgePass=new je({fragment:V.source("ecgl.edge")}),this._edgePass.setUniform("normalTexture",e.normalTexture),this._edgePass.setUniform("depthTexture",e.depthTexture),this._targetTexture=new se({type:K.HALF_FLOAT}),this._frameBuffer=new ot,this._frameBuffer.attach(this._targetTexture)}qi.prototype.update=function(e,t,r,i){var n=e.getWidth(),a=e.getHeight(),o=this._targetTexture;o.width=n,o.height=a;var s=this._frameBuffer;s.bind(e),this._edgePass.setUniform("projectionInv",t.invProjectionMatrix.array),this._edgePass.setUniform("textureSize",[n,a]),this._edgePass.setUniform("texture",r),this._edgePass.render(e),s.unbind(e)};qi.prototype.getTargetTexture=function(){return this._targetTexture};qi.prototype.setParameter=function(e,t){this._edgePass.setUniform(e,t)};qi.prototype.dispose=function(e){this._targetTexture.dispose(e),this._frameBuffer.dispose(e)};const cd={type:"compositor",nodes:[{name:"source",type:"texture",outputs:{color:{}}},{name:"source_half",shader:"#source(clay.compositor.downsample)",inputs:{texture:"source"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 2)",height:"expr(height * 1.0 / 2)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0, height * 1.0] )"}},{name:"bright",shader:"#source(clay.compositor.bright)",inputs:{texture:"source_half"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 2)",height:"expr(height * 1.0 / 2)",type:"HALF_FLOAT"}}},parameters:{threshold:2,scale:4,textureSize:"expr([width * 1.0 / 2, height / 2])"}},{name:"bright_downsample_4",shader:"#source(clay.compositor.downsample)",inputs:{texture:"bright"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 4)",height:"expr(height * 1.0 / 4)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0 / 2, height / 2] )"}},{name:"bright_downsample_8",shader:"#source(clay.compositor.downsample)",inputs:{texture:"bright_downsample_4"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 8)",height:"expr(height * 1.0 / 8)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0 / 4, height / 4] )"}},{name:"bright_downsample_16",shader:"#source(clay.compositor.downsample)",inputs:{texture:"bright_downsample_8"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 16)",height:"expr(height * 1.0 / 16)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0 / 8, height / 8] )"}},{name:"bright_downsample_32",shader:"#source(clay.compositor.downsample)",inputs:{texture:"bright_downsample_16"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 32)",height:"expr(height * 1.0 / 32)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0 / 16, height / 16] )"}},{name:"bright_upsample_16_blur_h",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_downsample_32"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 16)",height:"expr(height * 1.0 / 16)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:0,textureSize:"expr( [width * 1.0 / 32, height / 32] )"}},{name:"bright_upsample_16_blur_v",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_upsample_16_blur_h"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 16)",height:"expr(height * 1.0 / 16)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:1,textureSize:"expr( [width * 1.0 / 16, height * 1.0 / 16] )"}},{name:"bright_upsample_8_blur_h",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_downsample_16"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 8)",height:"expr(height * 1.0 / 8)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:0,textureSize:"expr( [width * 1.0 / 16, height * 1.0 / 16] )"}},{name:"bright_upsample_8_blur_v",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_upsample_8_blur_h"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 8)",height:"expr(height * 1.0 / 8)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:1,textureSize:"expr( [width * 1.0 / 8, height * 1.0 / 8] )"}},{name:"bright_upsample_8_blend",shader:"#source(clay.compositor.blend)",inputs:{texture1:"bright_upsample_8_blur_v",texture2:"bright_upsample_16_blur_v"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 8)",height:"expr(height * 1.0 / 8)",type:"HALF_FLOAT"}}},parameters:{weight1:.3,weight2:.7}},{name:"bright_upsample_4_blur_h",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_downsample_8"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 4)",height:"expr(height * 1.0 / 4)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:0,textureSize:"expr( [width * 1.0 / 8, height * 1.0 / 8] )"}},{name:"bright_upsample_4_blur_v",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_upsample_4_blur_h"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 4)",height:"expr(height * 1.0 / 4)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:1,textureSize:"expr( [width * 1.0 / 4, height * 1.0 / 4] )"}},{name:"bright_upsample_4_blend",shader:"#source(clay.compositor.blend)",inputs:{texture1:"bright_upsample_4_blur_v",texture2:"bright_upsample_8_blend"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 4)",height:"expr(height * 1.0 / 4)",type:"HALF_FLOAT"}}},parameters:{weight1:.3,weight2:.7}},{name:"bright_upsample_2_blur_h",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_downsample_4"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 2)",height:"expr(height * 1.0 / 2)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:0,textureSize:"expr( [width * 1.0 / 4, height * 1.0 / 4] )"}},{name:"bright_upsample_2_blur_v",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_upsample_2_blur_h"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 2)",height:"expr(height * 1.0 / 2)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:1,textureSize:"expr( [width * 1.0 / 2, height * 1.0 / 2] )"}},{name:"bright_upsample_2_blend",shader:"#source(clay.compositor.blend)",inputs:{texture1:"bright_upsample_2_blur_v",texture2:"bright_upsample_4_blend"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 2)",height:"expr(height * 1.0 / 2)",type:"HALF_FLOAT"}}},parameters:{weight1:.3,weight2:.7}},{name:"bright_upsample_full_blur_h",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:0,textureSize:"expr( [width * 1.0 / 2, height * 1.0 / 2] )"}},{name:"bright_upsample_full_blur_v",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_upsample_full_blur_h"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:1,textureSize:"expr( [width * 1.0, height * 1.0] )"}},{name:"bloom_composite",shader:"#source(clay.compositor.blend)",inputs:{texture1:"bright_upsample_full_blur_v",texture2:"bright_upsample_2_blend"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}},parameters:{weight1:.3,weight2:.7}},{name:"coc",shader:"#source(ecgl.dof.coc)",outputs:{color:{parameters:{minFilter:"NEAREST",magFilter:"NEAREST",width:"expr(width * 1.0)",height:"expr(height * 1.0)"}}},parameters:{focalDist:50,focalRange:30}},{name:"dof_far_blur",shader:"#source(ecgl.dof.diskBlur)",inputs:{texture:"source",coc:"coc"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0, height * 1.0] )"}},{name:"dof_near_blur",shader:"#source(ecgl.dof.diskBlur)",inputs:{texture:"source",coc:"coc"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0, height * 1.0] )"},defines:{BLUR_NEARFIELD:null}},{name:"dof_coc_blur",shader:"#source(ecgl.dof.diskBlur)",inputs:{texture:"coc"},outputs:{color:{parameters:{minFilter:"NEAREST",magFilter:"NEAREST",width:"expr(width * 1.0)",height:"expr(height * 1.0)"}}},parameters:{textureSize:"expr( [width * 1.0, height * 1.0] )"},defines:{BLUR_COC:null}},{name:"dof_composite",shader:"#source(ecgl.dof.composite)",inputs:{original:"source",blurred:"dof_far_blur",nearfield:"dof_near_blur",coc:"coc",nearcoc:"dof_coc_blur"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}}},{name:"composite",shader:"#source(clay.compositor.hdr.composite)",inputs:{texture:"source",bloom:"bloom_composite"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)"}}},defines:{}},{name:"FXAA",shader:"#source(clay.compositor.fxaa)",inputs:{texture:"composite"}}]},hd=`@export ecgl.dof.coc

uniform sampler2D depth;

uniform float zNear: 0.1;
uniform float zFar: 2000;

uniform float focalDistance: 3;
uniform float focalRange: 1;
uniform float focalLength: 30;
uniform float fstop: 2.8;

varying vec2 v_Texcoord;

@import clay.util.encode_float

void main()
{
 float z = texture2D(depth, v_Texcoord).r * 2.0 - 1.0;

 float dist = 2.0 * zNear * zFar / (zFar + zNear - z * (zFar - zNear));

 float aperture = focalLength / fstop;

 float coc;

 float uppper = focalDistance + focalRange;
 float lower = focalDistance - focalRange;
 if (dist <= uppper && dist >= lower) {
 coc = 0.5;
 }
 else {
 float focalAdjusted = dist > uppper ? uppper : lower;

 coc = abs(aperture * (focalLength * (dist - focalAdjusted)) / (dist * (focalAdjusted - focalLength)));
 coc = clamp(coc, 0.0, 2.0) / 2.00001;

 if (dist < lower) {
 coc = -coc;
 }
 coc = coc * 0.5 + 0.5;
 }

 gl_FragColor = encodeFloat(coc);
}
@end


@export ecgl.dof.composite

#define DEBUG 0

uniform sampler2D original;
uniform sampler2D blurred;
uniform sampler2D nearfield;
uniform sampler2D coc;
uniform sampler2D nearcoc;
varying vec2 v_Texcoord;

@import clay.util.rgbm
@import clay.util.float

void main()
{
 vec4 blurredColor = texture2D(blurred, v_Texcoord);
 vec4 originalColor = texture2D(original, v_Texcoord);

 float fCoc = decodeFloat(texture2D(coc, v_Texcoord));

 fCoc = abs(fCoc * 2.0 - 1.0);

 float weight = smoothstep(0.0, 1.0, fCoc);
 
#ifdef NEARFIELD_ENABLED
 vec4 nearfieldColor = texture2D(nearfield, v_Texcoord);
 float fNearCoc = decodeFloat(texture2D(nearcoc, v_Texcoord));
 fNearCoc = abs(fNearCoc * 2.0 - 1.0);

 gl_FragColor = encodeHDR(
 mix(
 nearfieldColor, mix(originalColor, blurredColor, weight),
 pow(1.0 - fNearCoc, 4.0)
 )
 );
#else
 gl_FragColor = encodeHDR(mix(originalColor, blurredColor, weight));
#endif

}

@end



@export ecgl.dof.diskBlur

#define POISSON_KERNEL_SIZE 16;

uniform sampler2D texture;
uniform sampler2D coc;
varying vec2 v_Texcoord;

uniform float blurRadius : 10.0;
uniform vec2 textureSize : [512.0, 512.0];

uniform vec2 poissonKernel[POISSON_KERNEL_SIZE];

uniform float percent;

float nrand(const in vec2 n) {
 return fract(sin(dot(n.xy ,vec2(12.9898,78.233))) * 43758.5453);
}

@import clay.util.rgbm
@import clay.util.float


void main()
{
 vec2 offset = blurRadius / textureSize;

 float rnd = 6.28318 * nrand(v_Texcoord + 0.07 * percent );
 float cosa = cos(rnd);
 float sina = sin(rnd);
 vec4 basis = vec4(cosa, -sina, sina, cosa);

#if !defined(BLUR_NEARFIELD) && !defined(BLUR_COC)
 offset *= abs(decodeFloat(texture2D(coc, v_Texcoord)) * 2.0 - 1.0);
#endif

#ifdef BLUR_COC
 float cocSum = 0.0;
#else
 vec4 color = vec4(0.0);
#endif


 float weightSum = 0.0;

 for (int i = 0; i < POISSON_KERNEL_SIZE; i++) {
 vec2 ofs = poissonKernel[i];

 ofs = vec2(dot(ofs, basis.xy), dot(ofs, basis.zw));

 vec2 uv = v_Texcoord + ofs * offset;
 vec4 texel = texture2D(texture, uv);

 float w = 1.0;
#ifdef BLUR_COC
 float fCoc = decodeFloat(texel) * 2.0 - 1.0;
 cocSum += clamp(fCoc, -1.0, 0.0) * w;
#else
 texel = texel;
 #if !defined(BLUR_NEARFIELD)
 float fCoc = decodeFloat(texture2D(coc, uv)) * 2.0 - 1.0;
 w *= abs(fCoc);
 #endif
 texel.rgb *= texel.a;
 color += texel * w;
#endif

 weightSum += w;
 }

#ifdef BLUR_COC
 gl_FragColor = encodeFloat(clamp(cocSum / weightSum, -1.0, 0.0) * 0.5 + 0.5);
#else
 color /= weightSum;
 color.rgb /= (color.a + 0.0001);
 gl_FragColor = color;
#endif
}

@end`,fd=`@export ecgl.edge

uniform sampler2D texture;

uniform sampler2D normalTexture;
uniform sampler2D depthTexture;

uniform mat4 projectionInv;

uniform vec2 textureSize;

uniform vec4 edgeColor: [0,0,0,0.8];

varying vec2 v_Texcoord;

vec3 packColor(vec2 coord) {
 float z = texture2D(depthTexture, coord).r * 2.0 - 1.0;
 vec4 p = vec4(v_Texcoord * 2.0 - 1.0, z, 1.0);
 vec4 p4 = projectionInv * p;

 return vec3(
 texture2D(normalTexture, coord).rg,
 -p4.z / p4.w / 5.0
 );
}

void main() {
 vec2 cc = v_Texcoord;
 vec3 center = packColor(cc);

 float size = clamp(1.0 - (center.z - 10.0) / 100.0, 0.0, 1.0) * 0.5;
 float dx = size / textureSize.x;
 float dy = size / textureSize.y;

 vec2 coord;
 vec3 topLeft = packColor(cc+vec2(-dx, -dy));
 vec3 top = packColor(cc+vec2(0.0, -dy));
 vec3 topRight = packColor(cc+vec2(dx, -dy));
 vec3 left = packColor(cc+vec2(-dx, 0.0));
 vec3 right = packColor(cc+vec2(dx, 0.0));
 vec3 bottomLeft = packColor(cc+vec2(-dx, dy));
 vec3 bottom = packColor(cc+vec2(0.0, dy));
 vec3 bottomRight = packColor(cc+vec2(dx, dy));

 vec3 v = -topLeft-2.0*top-topRight+bottomLeft+2.0*bottom+bottomRight;
 vec3 h = -bottomLeft-2.0*left-topLeft+bottomRight+2.0*right+topRight;

 float edge = sqrt(dot(h, h) + dot(v, v));

 edge = smoothstep(0.8, 1.0, edge);

 gl_FragColor = mix(texture2D(texture, v_Texcoord), vec4(edgeColor.rgb, 1.0), edgeColor.a * edge);
}
@end`;V.import(bl);V.import(El);V.import(Al);V.import(Cl);V.import(Ll);V.import(Dl);V.import(Ml);V.import(Pl);V.import(Rl);V.import(hd);V.import(fd);function Ol(e,t){return{color:{parameters:{width:e,height:t}}}}var oo=["composite","FXAA"];function pe(){this._width,this._height,this._dpr,this._sourceTexture=new se({type:K.HALF_FLOAT}),this._depthTexture=new se({format:K.DEPTH_COMPONENT,type:K.UNSIGNED_INT}),this._framebuffer=new ot,this._framebuffer.attach(this._sourceTexture),this._framebuffer.attach(this._depthTexture,ot.DEPTH_ATTACHMENT),this._normalPass=new pi,this._compositor=Qf(cd);var e=this._compositor.getNodeByName("source");e.texture=this._sourceTexture;var t=this._compositor.getNodeByName("coc");this._sourceNode=e,this._cocNode=t,this._compositeNode=this._compositor.getNodeByName("composite"),this._fxaaNode=this._compositor.getNodeByName("FXAA"),this._dofBlurNodes=["dof_far_blur","dof_near_blur","dof_coc_blur"].map(function(i){return this._compositor.getNodeByName(i)},this),this._dofBlurKernel=0,this._dofBlurKernelSize=new Float32Array(0),this._finalNodesChain=oo.map(function(i){return this._compositor.getNodeByName(i)},this);var r={normalTexture:this._normalPass.getNormalTexture(),depthTexture:this._normalPass.getDepthTexture()};this._ssaoPass=new nr(r),this._ssrPass=new ar(r),this._edgePass=new qi(r)}pe.prototype.resize=function(i,n,r){r=r||1;var i=i*r,n=n*r,a=this._sourceTexture,o=this._depthTexture;a.width=i,a.height=n,o.width=i,o.height=n;var s={getWidth:function(){return i},getHeight:function(){return n},getDevicePixelRatio:function(){return r}};function l(u,c){if(typeof u[c]=="function"){var h=u[c].__original||u[c];u[c]=function(f){return h.call(this,s)},u[c].__original=h}}this._compositor.nodes.forEach(function(u){for(var c in u.outputs){var h=u.outputs[c].parameters;h&&(l(h,"width"),l(h,"height"))}for(var f in u.parameters)l(u.parameters,f)}),this._width=i,this._height=n,this._dpr=r};pe.prototype.getWidth=function(){return this._width};pe.prototype.getHeight=function(){return this._height};pe.prototype._ifRenderNormalPass=function(){return this._enableSSAO||this._enableEdge||this._enableSSR};pe.prototype._getPrevNode=function(e){for(var t=oo.indexOf(e.name)-1,r=this._finalNodesChain[t];r&&!this._compositor.getNodeByName(r.name);)t-=1,r=this._finalNodesChain[t];return r};pe.prototype._getNextNode=function(e){for(var t=oo.indexOf(e.name)+1,r=this._finalNodesChain[t];r&&!this._compositor.getNodeByName(r.name);)t+=1,r=this._finalNodesChain[t];return r};pe.prototype._addChainNode=function(e){var t=this._getPrevNode(e),r=this._getNextNode(e);t&&(e.inputs.texture=t.name,r?(e.outputs=Ol(this.getWidth.bind(this),this.getHeight.bind(this)),r.inputs.texture=e.name):e.outputs=null,this._compositor.addNode(e))};pe.prototype._removeChainNode=function(e){var t=this._getPrevNode(e),r=this._getNextNode(e);t&&(r?(t.outputs=Ol(this.getWidth.bind(this),this.getHeight.bind(this)),r.inputs.texture=t.name):t.outputs=null,this._compositor.removeNode(e))};pe.prototype.updateNormal=function(e,t,r,i){this._ifRenderNormalPass()&&this._normalPass.update(e,t,r)};pe.prototype.updateSSAO=function(e,t,r,i){this._ssaoPass.update(e,r,i)};pe.prototype.enableSSAO=function(){this._enableSSAO=!0};pe.prototype.disableSSAO=function(){this._enableSSAO=!1};pe.prototype.enableSSR=function(){this._enableSSR=!0};pe.prototype.disableSSR=function(){this._enableSSR=!1};pe.prototype.getSSAOTexture=function(){return this._ssaoPass.getTargetTexture()};pe.prototype.getSourceFrameBuffer=function(){return this._framebuffer};pe.prototype.getSourceTexture=function(){return this._sourceTexture};pe.prototype.disableFXAA=function(){this._removeChainNode(this._fxaaNode)};pe.prototype.enableFXAA=function(){this._addChainNode(this._fxaaNode)};pe.prototype.enableBloom=function(){this._compositeNode.inputs.bloom="bloom_composite",this._compositor.dirty()};pe.prototype.disableBloom=function(){this._compositeNode.inputs.bloom=null,this._compositor.dirty()};pe.prototype.enableDOF=function(){this._compositeNode.inputs.texture="dof_composite",this._compositor.dirty()};pe.prototype.disableDOF=function(){this._compositeNode.inputs.texture="source",this._compositor.dirty()};pe.prototype.enableColorCorrection=function(){this._compositeNode.define("COLOR_CORRECTION"),this._enableColorCorrection=!0};pe.prototype.disableColorCorrection=function(){this._compositeNode.undefine("COLOR_CORRECTION"),this._enableColorCorrection=!1};pe.prototype.enableEdge=function(){this._enableEdge=!0};pe.prototype.disableEdge=function(){this._enableEdge=!1};pe.prototype.setBloomIntensity=function(e){this._compositeNode.setParameter("bloomIntensity",e)};pe.prototype.setSSAOParameter=function(e,t){switch(e){case"quality":var r={low:6,medium:12,high:32,ultra:62}[t]||12;this._ssaoPass.setParameter("kernelSize",r);break;case"radius":this._ssaoPass.setParameter(e,t),this._ssaoPass.setParameter("bias",t/200);break;case"intensity":this._ssaoPass.setParameter(e,t);break}};pe.prototype.setDOFParameter=function(e,t){switch(e){case"focalDistance":case"focalRange":case"fstop":this._cocNode.setParameter(e,t);break;case"blurRadius":for(var r=0;r<this._dofBlurNodes.length;r++)this._dofBlurNodes[r].setParameter("blurRadius",t);break;case"quality":var i={low:4,medium:8,high:16,ultra:32}[t]||8;this._dofBlurKernelSize=i;for(var r=0;r<this._dofBlurNodes.length;r++)this._dofBlurNodes[r].pass.material.define("POISSON_KERNEL_SIZE",i);this._dofBlurKernel=new Float32Array(i*2);break}};pe.prototype.setSSRParameter=function(e,t){if(t!=null)switch(e){case"quality":var r={low:10,medium:15,high:30,ultra:80}[t]||20,i={low:32,medium:16,high:8,ultra:4}[t]||16;this._ssrPass.setParameter("maxIteration",r),this._ssrPass.setParameter("pixelStride",i);break;case"maxRoughness":this._ssrPass.setParameter("minGlossiness",Math.max(Math.min(1-t,1),0));break;case"physical":this.setPhysicallyCorrectSSR(t);break;default:console.warn("Unkown SSR parameter "+e)}};pe.prototype.setPhysicallyCorrectSSR=function(e){this._ssrPass.setPhysicallyCorrect(e)};pe.prototype.setEdgeColor=function(e){var t=E.parseColor(e);this._edgePass.setParameter("edgeColor",t)};pe.prototype.setExposure=function(e){this._compositeNode.setParameter("exposure",Math.pow(2,e))};pe.prototype.setColorLookupTexture=function(e,t){this._compositeNode.pass.material.setTextureImage("lut",this._enableColorCorrection?e:"none",t,{minFilter:E.Texture.NEAREST,magFilter:E.Texture.NEAREST,flipY:!1})};pe.prototype.setColorCorrection=function(e,t){this._compositeNode.setParameter(e,t)};pe.prototype.isSSREnabled=function(){return this._enableSSR};pe.prototype.composite=function(e,t,r,i,n){var a=this._sourceTexture,o=a;this._enableEdge&&(this._edgePass.update(e,r,a,n),a=o=this._edgePass.getTargetTexture()),this._enableSSR&&(this._ssrPass.update(e,r,a,n),o=this._ssrPass.getTargetTexture(),this._ssrPass.setSSAOTexture(this._enableSSAO?this._ssaoPass.getTargetTexture():null)),this._sourceNode.texture=o,this._cocNode.setParameter("depth",this._depthTexture);for(var s=this._dofBlurKernel,l=this._dofBlurKernelSize,u=Math.floor(fs.length/2/l),c=n%u,h=0;h<l*2;h++)s[h]=fs[h+c*l*2];for(var h=0;h<this._dofBlurNodes.length;h++)this._dofBlurNodes[h].setParameter("percent",n/30),this._dofBlurNodes[h].setParameter("poissonKernel",s);this._cocNode.setParameter("zNear",r.near),this._cocNode.setParameter("zFar",r.far),this._compositor.render(e,i)};pe.prototype.dispose=function(e){this._sourceTexture.dispose(e),this._depthTexture.dispose(e),this._framebuffer.dispose(e),this._compositor.dispose(e),this._normalPass.dispose(e),this._ssaoPass.dispose(e)};function za(e){for(var t=[],r=0;r<30;r++)t.push([si(r,2),si(r,3)]);this._haltonSequence=t,this._frame=0,this._sourceTex=new se,this._sourceFb=new ot,this._sourceFb.attach(this._sourceTex),this._prevFrameTex=new se,this._outputTex=new se;var i=this._blendPass=new je({fragment:V.source("clay.compositor.blend")});i.material.disableTexturesAll(),i.material.enableTexture(["texture1","texture2"]),this._blendFb=new ot({depthBuffer:!1}),this._outputPass=new je({fragment:V.source("clay.compositor.output"),blendWithPrevious:!0}),this._outputPass.material.define("fragment","OUTPUT_ALPHA"),this._outputPass.material.blend=function(n){n.blendEquationSeparate(n.FUNC_ADD,n.FUNC_ADD),n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA)}}za.prototype={constructor:za,jitterProjection:function(e,t){var r=e.viewport,i=r.devicePixelRatio||e.getDevicePixelRatio(),n=r.width*i,a=r.height*i,o=this._haltonSequence[this._frame%this._haltonSequence.length],s=new q;s.array[12]=(o[0]*2-1)/n,s.array[13]=(o[1]*2-1)/a,q.mul(t.projectionMatrix,s,t.projectionMatrix),q.invert(t.invProjectionMatrix,t.projectionMatrix)},resetFrame:function(){this._frame=0},getFrame:function(){return this._frame},getSourceFrameBuffer:function(){return this._sourceFb},getOutputTexture:function(){return this._outputTex},resize:function(e,t){this._prevFrameTex.width=e,this._prevFrameTex.height=t,this._outputTex.width=e,this._outputTex.height=t,this._sourceTex.width=e,this._sourceTex.height=t,this._prevFrameTex.dirty(),this._outputTex.dirty(),this._sourceTex.dirty()},isFinished:function(){return this._frame>=this._haltonSequence.length},render:function(e,t,r){var i=this._blendPass;this._frame===0?(i.setUniform("weight1",0),i.setUniform("weight2",1)):(i.setUniform("weight1",.9),i.setUniform("weight2",.1)),i.setUniform("texture1",this._prevFrameTex),i.setUniform("texture2",t||this._sourceTex),this._blendFb.attach(this._outputTex),this._blendFb.bind(e),i.render(e),this._blendFb.unbind(e),r||(this._outputPass.setUniform("texture",this._outputTex),this._outputPass.render(e));var n=this._prevFrameTex;this._prevFrameTex=this._outputTex,this._outputTex=n,this._frame++},dispose:function(e){this._sourceFb.dispose(e),this._blendFb.dispose(e),this._prevFrameTex.dispose(e),this._outputTex.dispose(e),this._sourceTex.dispose(e),this._outputPass.dispose(e),this._blendPass.dispose(e)}};function Ae(e){e=e||"perspective",this.layer=null,this.scene=new xr,this.rootNode=this.scene,this.viewport={x:0,y:0,width:0,height:0},this.setProjection(e),this._compositor=new pe,this._temporalSS=new za,this._shadowMapPass=new Of;for(var t=[],r=0,i=0;i<30;i++){for(var n=[],a=0;a<6;a++)n.push(si(r,2)*4-2),n.push(si(r,3)*4-2),r++;t.push(n)}this._pcfKernels=t,this.scene.on("beforerender",function(o,s,l){this.needsTemporalSS()&&this._temporalSS.jitterProjection(o,l)},this)}Ae.prototype.setProjection=function(e){var t=this.camera;t&&t.update(),e==="perspective"?this.camera instanceof et||(this.camera=new et,t&&this.camera.setLocalTransform(t.localTransform)):this.camera instanceof oi||(this.camera=new oi,t&&this.camera.setLocalTransform(t.localTransform)),this.camera.near=.1,this.camera.far=2e3};Ae.prototype.setViewport=function(e,t,r,i,n){this.camera instanceof et&&(this.camera.aspect=r/i),n=n||1,this.viewport.x=e,this.viewport.y=t,this.viewport.width=r,this.viewport.height=i,this.viewport.devicePixelRatio=n,this._compositor.resize(r*n,i*n),this._temporalSS.resize(r*n,i*n)};Ae.prototype.containPoint=function(e,t){var r=this.viewport,i=this.layer.renderer.getHeight();return t=i-t,e>=r.x&&t>=r.y&&e<=r.x+r.width&&t<=r.y+r.height};var ds=new wt;Ae.prototype.castRay=function(e,t,r){var i=this.layer.renderer,n=i.viewport;return i.viewport=this.viewport,i.screenToNDC(e,t,ds),this.camera.castRay(ds,r),i.viewport=n,r};Ae.prototype.prepareRender=function(){this.scene.update(),this.camera.update(),this.scene.updateLights();var e=this.scene.updateRenderList(this.camera);this._needsSortProgressively=!1;for(var t=0;t<e.transparent.length;t++){var r=e.transparent[t],i=r.geometry;i.needsSortVerticesProgressively&&i.needsSortVerticesProgressively()&&(this._needsSortProgressively=!0),i.needsSortTrianglesProgressively&&i.needsSortTrianglesProgressively()&&(this._needsSortProgressively=!0)}this._frame=0,this._temporalSS.resetFrame()};Ae.prototype.render=function(e,t){this._doRender(e,t,this._frame),this._frame++};Ae.prototype.needsAccumulate=function(){return this.needsTemporalSS()||this._needsSortProgressively};Ae.prototype.needsTemporalSS=function(){var e=this._enableTemporalSS;return e==="auto"&&(e=this._enablePostEffect),e};Ae.prototype.hasDOF=function(){return this._enableDOF};Ae.prototype.isAccumulateFinished=function(){return this.needsTemporalSS()?this._temporalSS.isFinished():this._frame>30};Ae.prototype._doRender=function(e,t,r){var i=this.scene,n=this.camera;r=r||0,this._updateTransparent(e,i,n,r),t||(this._shadowMapPass.kernelPCF=this._pcfKernels[0],this._shadowMapPass.render(e,i,n,!0)),this._updateShadowPCFKernel(r);var a=e.clearColor;if(e.gl.clearColor(a[0],a[1],a[2],a[3]),this._enablePostEffect&&(this.needsTemporalSS()&&this._temporalSS.jitterProjection(e,n),this._compositor.updateNormal(e,i,n,this._temporalSS.getFrame())),this._updateSSAO(e,i,n,this._temporalSS.getFrame()),this._enablePostEffect){var o=this._compositor.getSourceFrameBuffer();o.bind(e),e.gl.clear(e.gl.DEPTH_BUFFER_BIT|e.gl.COLOR_BUFFER_BIT),e.render(i,n,!0,!0),o.unbind(e),this.needsTemporalSS()&&t?(this._compositor.composite(e,i,n,this._temporalSS.getSourceFrameBuffer(),this._temporalSS.getFrame()),e.setViewport(this.viewport),this._temporalSS.render(e)):(e.setViewport(this.viewport),this._compositor.composite(e,i,n,null,0))}else if(this.needsTemporalSS()&&t){var o=this._temporalSS.getSourceFrameBuffer();o.bind(e),e.saveClear(),e.clearBit=e.gl.DEPTH_BUFFER_BIT|e.gl.COLOR_BUFFER_BIT,e.render(i,n,!0,!0),e.restoreClear(),o.unbind(e),e.setViewport(this.viewport),this._temporalSS.render(e)}else e.setViewport(this.viewport),e.render(i,n,!0,!0)};Ae.prototype._updateTransparent=function(e,t,r,i){for(var n=new k,a=new q,o=r.getWorldPosition(),s=t.getRenderList(r).transparent,l=0;l<s.length;l++){var u=s[l],c=u.geometry;q.invert(a,u.worldTransform),k.transformMat4(n,o,a),c.needsSortTriangles&&c.needsSortTriangles()&&c.doSortTriangles(n,i),c.needsSortVertices&&c.needsSortVertices()&&c.doSortVertices(n,i)}};Ae.prototype._updateSSAO=function(e,t,r){var i=this._enableSSAO&&this._enablePostEffect;i&&this._compositor.updateSSAO(e,t,r,this._temporalSS.getFrame());for(var n=t.getRenderList(r),a=0;a<n.opaque.length;a++){var o=n.opaque[a];o.renderNormal&&o.material[i?"enableTexture":"disableTexture"]("ssaoMap"),i&&o.material.set("ssaoMap",this._compositor.getSSAOTexture())}};Ae.prototype._updateShadowPCFKernel=function(e){for(var t=this._pcfKernels[e%this._pcfKernels.length],r=this.scene.getRenderList(this.camera),i=r.opaque,n=0;n<i.length;n++)i[n].receiveShadow&&(i[n].material.set("pcfKernel",t),i[n].material.define("fragment","PCF_KERNEL_SIZE",t.length/2))};Ae.prototype.dispose=function(e){this._compositor.dispose(e.gl),this._temporalSS.dispose(e.gl),this._shadowMapPass.dispose(e)};Ae.prototype.setPostEffect=function(e,t){var r=this._compositor;this._enablePostEffect=e.get("enable");var i=e.getModel("bloom"),n=e.getModel("edge"),a=e.getModel("DOF",e.getModel("depthOfField")),o=e.getModel("SSAO",e.getModel("screenSpaceAmbientOcclusion")),s=e.getModel("SSR",e.getModel("screenSpaceReflection")),l=e.getModel("FXAA"),u=e.getModel("colorCorrection");i.get("enable")?r.enableBloom():r.disableBloom(),a.get("enable")?r.enableDOF():r.disableDOF(),s.get("enable")?r.enableSSR():r.disableSSR(),u.get("enable")?r.enableColorCorrection():r.disableColorCorrection(),n.get("enable")?r.enableEdge():r.disableEdge(),l.get("enable")?r.enableFXAA():r.disableFXAA(),this._enableDOF=a.get("enable"),this._enableSSAO=o.get("enable"),this._enableSSAO?r.enableSSAO():r.disableSSAO(),r.setBloomIntensity(i.get("intensity")),r.setEdgeColor(n.get("color")),r.setColorLookupTexture(u.get("lookupTexture"),t),r.setExposure(u.get("exposure")),["radius","quality","intensity"].forEach(function(c){r.setSSAOParameter(c,o.get(c))}),["quality","maxRoughness","physical"].forEach(function(c){r.setSSRParameter(c,s.get(c))}),["quality","focalDistance","focalRange","blurRadius","fstop"].forEach(function(c){r.setDOFParameter(c,a.get(c))}),["brightness","contrast","saturation"].forEach(function(c){r.setColorCorrection(c,u.get(c))})};Ae.prototype.setDOFFocusOnPoint=function(e){if(this._enablePostEffect)return e>this.camera.far||e<this.camera.near?void 0:(this._compositor.setDOFParameter("focalDistance",e),!0)};Ae.prototype.setTemporalSuperSampling=function(e){this._enableTemporalSS=e.get("enable")};Ae.prototype.isLinearSpace=function(){return this._enablePostEffect};Ae.prototype.setRootNode=function(e){if(this.rootNode!==e){for(var t=this.rootNode.children(),r=0;r<t.length;r++)e.add(t[r]);e!==this.scene&&this.scene.add(e),this.rootNode=e}};Ae.prototype.add=function(e){this.rootNode.add(e)};Ae.prototype.remove=function(e){this.rootNode.remove(e)};Ae.prototype.removeAll=function(e){this.rootNode.removeAll(e)};Object.assign(Ae.prototype,Ya);function dd(e,t){var r=e.getBoxLayoutParams(),i=Gn(r,{width:t.getWidth(),height:t.getHeight()});i.y=t.getHeight()-i.y-i.height,this.viewGL.setViewport(i.x,i.y,i.width,i.height,t.getDevicePixelRatio());var n=e.get("boxWidth"),a=e.get("boxHeight"),o=e.get("boxDepth");this.getAxis("x").setExtent(-n/2,n/2),this.getAxis("y").setExtent(o/2,-o/2),this.getAxis("z").setExtent(-a/2,a/2),this.size=[n,a,o]}function vd(e,t){var r={};function i(n,a){r[n]=r[n]||[1/0,-1/0],r[n][0]=Math.min(a[0],r[n][0]),r[n][1]=Math.max(a[1],r[n][1])}e.eachSeries(function(n){if(n.coordinateSystem===this){var a=n.getData();["x","y","z"].forEach(function(o){a.mapDimensionsAll(o,!0).forEach(function(s){i(o,a.getDataExtent(s,!0))})})}},this),["xAxis3D","yAxis3D","zAxis3D"].forEach(function(n){e.eachComponent(n,function(a){var o=n.charAt(0),s=a.getReferringComponents("grid3D").models[0],l=s.coordinateSystem;if(l===this){var u=l.getAxis(o);if(!u){var c=Xa(r[o]||[1/0,-1/0],a);u=new Rn(o,c),u.type=a.get("type");var h=u.type==="category";u.onBand=h&&a.get("boundaryGap"),u.inverse=a.get("inverse"),a.axis=u,u.model=a,u.getLabelModel=function(){return a.getModel("axisLabel",s.getModel("axisLabel"))},u.getTickModel=function(){return a.getModel("axisTick",s.getModel("axisTick"))},l.addAxis(u)}}},this)},this),this.resize(this.model,t)}var pd={dimensions:Ui.prototype.dimensions,create:function(e,t){var r=[];e.eachComponent("grid3D",function(a){a.__viewGL=a.__viewGL||new Ae;var o=new Ui;o.model=a,o.viewGL=a.__viewGL,a.coordinateSystem=o,r.push(o),o.resize=dd,o.update=vd});var i=["xAxis3D","yAxis3D","zAxis3D"];function n(a,o){return i.map(function(s){var l=a.getReferringComponents(s).models[0];return l==null&&(l=o.getComponent(s)),l})}return e.eachSeries(function(a){if(a.get("coordinateSystem")==="cartesian3D"){var o=a.getReferringComponents("grid3D").models[0];if(o==null){var s=n(a,e),o=s[0].getCoordSysModel();s.forEach(function(c){c.getCoordSysModel()})}var l=o.coordinateSystem;a.coordinateSystem=l}}),r}};const md=pd;var Fl=hi.extend({type:"cartesian3DAxis",axis:null,getCoordSysModel:function(){return this.ecModel.queryComponents({mainType:"grid3D",index:this.option.gridIndex,id:this.option.gridId})[0]}});Cu(Fl);const _d=Fl;var Bl={show:!0,grid3DIndex:0,inverse:!1,name:"",nameLocation:"middle",nameTextStyle:{fontSize:16},nameGap:20,axisPointer:{},axisLine:{},axisTick:{},axisLabel:{},splitArea:{}},gd=Ee({boundaryGap:!0,axisTick:{alignWithLabel:!1,interval:"auto"},axisLabel:{interval:"auto"},axisPointer:{label:{show:!1}}},Bl),so=Ee({boundaryGap:[0,0],splitNumber:5,axisPointer:{label:{}}},Bl),yd=_r({scale:!0,min:"dataMin",max:"dataMax"},so),Ul=_r({logBase:10},so);Ul.scale=!0;const xd={categoryAxis3D:gd,valueAxis3D:so,timeAxis3D:yd,logAxis3D:Ul};var Td=["value","category","time","log"];function wd(e,t,r,i,n){Td.forEach(function(a){var o=r.extend({type:t+"Axis3D."+a,__ordinalMeta:null,mergeDefaultAndTheme:function(s,l){var u=l.getTheme();Ee(s,u.get(a+"Axis3D")),Ee(s,this.getDefaultOption()),s.type=i(t,s)},optionUpdated:function(){var s=this.option;s.type==="category"&&(this.__ordinalMeta=Lu.createByAxisModel(this))},getCategories:function(){if(this.option.type==="category")return this.__ordinalMeta.categories},getOrdinalMeta:function(){return this.__ordinalMeta},defaultOption:Ee(Du(xd[a+"Axis3D"]),n||{},!0)});e.registerComponentModel(o)}),e.registerSubTypeDefaulter(t+"Axis3D",Mu(i,t))}function Sd(e,t){return t.type||(t.data?"category":"value")}function bd(e){e.registerComponentModel(Ef),e.registerComponentView(Pf),e.registerCoordinateSystem("grid3D",md),["x","y","z"].forEach(function(t){wd(e,t,_d,Sd,{name:t.toUpperCase()});const r=e.ComponentView.extend({type:t+"Axis3D"});e.registerComponentView(r)}),e.registerAction({type:"grid3DChangeCamera",event:"grid3dcamerachanged",update:"series:updateCamera"},function(t,r){r.eachComponent({mainType:"grid3D",query:t},function(i){i.setView(t)})}),e.registerAction({type:"grid3DShowAxisPointer",event:"grid3dshowaxispointer",update:"grid3D:showAxisPointer"},function(t,r){}),e.registerAction({type:"grid3DHideAxisPointer",event:"grid3dhideaxispointer",update:"grid3D:hideAxisPointer"},function(t,r){})}st(bd);const mi={defaultOption:{shading:null,realisticMaterial:{textureTiling:1,textureOffset:0,detailTexture:null},lambertMaterial:{textureTiling:1,textureOffset:0,detailTexture:null},colorMaterial:{textureTiling:1,textureOffset:0,detailTexture:null},hatchingMaterial:{textureTiling:1,textureOffset:0,paperColor:"#fff"}}},zl={getFilledRegions:function(e,t){var r=(e||[]).slice(),i;if(typeof t=="string"?(t=La(t),i=t&&t.geoJson):t&&t.features&&(i=t),!i)return[];for(var n={},a=i.features,o=0;o<r.length;o++)n[r[o].name]=r[o];for(var o=0;o<a.length;o++){var s=a[o].properties.name;n[s]||r.push({name:s})}return r},defaultOption:{show:!0,zlevel:-10,map:"",left:0,top:0,width:"100%",height:"100%",boxWidth:100,boxHeight:10,boxDepth:"auto",regionHeight:3,environment:"auto",groundPlane:{show:!1,color:"#aaa"},shading:"lambert",light:{main:{alpha:40,beta:30}},viewControl:{alpha:40,beta:0,distance:100,orthographicSize:60,minAlpha:5,minBeta:-80,maxBeta:80},label:{show:!1,distance:2,textStyle:{fontSize:20,color:"#000",backgroundColor:"rgba(255,255,255,0.7)",padding:3,borderRadius:4}},itemStyle:{color:"#fff",borderWidth:0,borderColor:"#333"},emphasis:{itemStyle:{color:"#639fc0"},label:{show:!0}}}};var _i=hi.extend({type:"geo3D",layoutMode:"box",coordinateSystem:null,optionUpdated:function(){var e=this.option;e.regions=this.getFilledRegions(e.regions,e.map);var t=ji(e.data||[],{coordDimensions:["value"],encodeDefine:this.get("encode"),dimensionsDefine:this.get("dimensions")}),r=new jt(t,this);r.initData(e.regions);var i={};r.each(function(n){var a=r.getName(n),o=r.getItemModel(n);i[a]=o}),this._regionModelMap=i,this._data=r},getData:function(){return this._data},getRegionModel:function(e){var t=this.getData().getName(e);return this._regionModelMap[t]||new Un(null,this)},getRegionPolygonCoords:function(e){var t=this.getData().getName(e),r=this.coordinateSystem.getRegion(t);return r?r.geometries:[]},getFormattedLabel:function(e,t){var r=this._data.getName(e),i=this.getRegionModel(e),n=i.get(t==="normal"?["label","formatter"]:["emphasis","label","formatter"]);n==null&&(n=i.get(["label","formatter"]));var a={name:r};if(typeof n=="function")return a.status=t,n(a);if(typeof n=="string"){var o=a.seriesName;return n.replace("{a}",o??"")}else return r},defaultOption:{regions:[]}});Ee(_i.prototype,zl);Ee(_i.prototype,$n);Ee(_i.prototype,di);Ee(_i.prototype,vi);Ee(_i.prototype,mi);const Ed=_i;function Gl(e,t,r){r=r||2;var i=t&&t.length,n=i?t[0]*r:e.length,a=Vl(e,0,n,r,!0),o=[];if(!a)return o;var s,l,u,c,h,f,d;if(i&&(a=Md(e,t,a,r)),e.length>80*r){s=u=e[0],l=c=e[1];for(var v=r;v<n;v+=r)h=e[v],f=e[v+1],h<s&&(s=h),f<l&&(l=f),h>u&&(u=h),f>c&&(c=f);d=Math.max(u-s,c-l)}return Vi(a,o,r,s,l,d),o}function Vl(e,t,r,i,n){var a,o;if(n===Ha(e,t,r,i)>0)for(a=t;a<r;a+=i)o=vs(a,e[a],e[a+1],o);else for(a=r-i;a>=t;a-=i)o=vs(a,e[a],e[a+1],o);return o&&Nr(o,o.next)&&(ki(o),o=o.next),o}function Gi(e,t){if(!e)return e;t||(t=e);var r=e,i;do if(i=!1,!r.steiner&&(Nr(r,r.next)||ft(r.prev,r,r.next)===0)){if(ki(r),r=t=r.prev,r===r.next)return null;i=!0}else r=r.next;while(i||r!==t);return t}function Vi(e,t,r,i,n,a,o){if(e){!o&&a&&Id(e,i,n,a);for(var s=e,l,u;e.prev!==e.next;){if(l=e.prev,u=e.next,a?Cd(e,i,n,a):Ad(e)){t.push(l.i/r),t.push(e.i/r),t.push(u.i/r),ki(e),e=u.next,s=u.next;continue}if(e=u,e===s){o?o===1?(e=Ld(e,t,r),Vi(e,t,r,i,n,a,2)):o===2&&Dd(e,t,r,i,n,a):Vi(Gi(e),t,r,i,n,a,1);break}}}}function Ad(e){var t=e.prev,r=e,i=e.next;if(ft(t,r,i)>=0)return!1;for(var n=e.next.next;n!==e.prev;){if(Nn(t.x,t.y,r.x,r.y,i.x,i.y,n.x,n.y)&&ft(n.prev,n,n.next)>=0)return!1;n=n.next}return!0}function Cd(e,t,r,i){var n=e.prev,a=e,o=e.next;if(ft(n,a,o)>=0)return!1;for(var s=n.x<a.x?n.x<o.x?n.x:o.x:a.x<o.x?a.x:o.x,l=n.y<a.y?n.y<o.y?n.y:o.y:a.y<o.y?a.y:o.y,u=n.x>a.x?n.x>o.x?n.x:o.x:a.x>o.x?a.x:o.x,c=n.y>a.y?n.y>o.y?n.y:o.y:a.y>o.y?a.y:o.y,h=Ga(s,l,t,r,i),f=Ga(u,c,t,r,i),d=e.nextZ;d&&d.z<=f;){if(d!==e.prev&&d!==e.next&&Nn(n.x,n.y,a.x,a.y,o.x,o.y,d.x,d.y)&&ft(d.prev,d,d.next)>=0)return!1;d=d.nextZ}for(d=e.prevZ;d&&d.z>=h;){if(d!==e.prev&&d!==e.next&&Nn(n.x,n.y,a.x,a.y,o.x,o.y,d.x,d.y)&&ft(d.prev,d,d.next)>=0)return!1;d=d.prevZ}return!0}function Ld(e,t,r){var i=e;do{var n=i.prev,a=i.next.next;!Nr(n,a)&&Hl(n,i,i.next,a)&&Hi(n,a)&&Hi(a,n)&&(t.push(n.i/r),t.push(i.i/r),t.push(a.i/r),ki(i),ki(i.next),i=e=a),i=i.next}while(i!==e);return i}function Dd(e,t,r,i,n,a){var o=e;do{for(var s=o.next.next;s!==o.prev;){if(o.i!==s.i&&Bd(o,s)){var l=kl(o,s);o=Gi(o,o.next),l=Gi(l,l.next),Vi(o,t,r,i,n,a),Vi(l,t,r,i,n,a);return}s=s.next}o=o.next}while(o!==e)}function Md(e,t,r,i){var n=[],a,o,s,l,u;for(a=0,o=t.length;a<o;a++)s=t[a]*i,l=a<o-1?t[a+1]*i:e.length,u=Vl(e,s,l,i,!1),u===u.next&&(u.steiner=!0),n.push(Fd(u));for(n.sort(Pd),a=0;a<n.length;a++)Rd(n[a],r),r=Gi(r,r.next);return r}function Pd(e,t){return e.x-t.x}function Rd(e,t){if(t=Nd(e,t),t){var r=kl(t,e);Gi(r,r.next)}}function Nd(e,t){var r=t,i=e.x,n=e.y,a=-1/0,o;do{if(n<=r.y&&n>=r.next.y&&r.next.y!==r.y){var s=r.x+(n-r.y)*(r.next.x-r.x)/(r.next.y-r.y);if(s<=i&&s>a){if(a=s,s===i){if(n===r.y)return r;if(n===r.next.y)return r.next}o=r.x<r.next.x?r:r.next}}r=r.next}while(r!==t);if(!o)return null;if(i===a)return o.prev;var l=o,u=o.x,c=o.y,h=1/0,f;for(r=o.next;r!==l;)i>=r.x&&r.x>=u&&i!==r.x&&Nn(n<c?i:a,n,u,c,n<c?a:i,n,r.x,r.y)&&(f=Math.abs(n-r.y)/(i-r.x),(f<h||f===h&&r.x>o.x)&&Hi(r,e)&&(o=r,h=f)),r=r.next;return o}function Id(e,t,r,i){var n=e;do n.z===null&&(n.z=Ga(n.x,n.y,t,r,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==e);n.prevZ.nextZ=null,n.prevZ=null,Od(n)}function Od(e){var t,r,i,n,a,o,s,l,u=1;do{for(r=e,e=null,a=null,o=0;r;){for(o++,i=r,s=0,t=0;t<u&&(s++,i=i.nextZ,!!i);t++);for(l=u;s>0||l>0&&i;)s!==0&&(l===0||!i||r.z<=i.z)?(n=r,r=r.nextZ,s--):(n=i,i=i.nextZ,l--),a?a.nextZ=n:e=n,n.prevZ=a,a=n;r=i}a.nextZ=null,u*=2}while(o>1);return e}function Ga(e,t,r,i,n){return e=32767*(e-r)/n,t=32767*(t-i)/n,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function Fd(e){var t=e,r=e;do t.x<r.x&&(r=t),t=t.next;while(t!==e);return r}function Nn(e,t,r,i,n,a,o,s){return(n-o)*(t-s)-(e-o)*(a-s)>=0&&(e-o)*(i-s)-(r-o)*(t-s)>=0&&(r-o)*(a-s)-(n-o)*(i-s)>=0}function Bd(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!Ud(e,t)&&Hi(e,t)&&Hi(t,e)&&zd(e,t)}function ft(e,t,r){return(t.y-e.y)*(r.x-t.x)-(t.x-e.x)*(r.y-t.y)}function Nr(e,t){return e.x===t.x&&e.y===t.y}function Hl(e,t,r,i){return Nr(e,t)&&Nr(r,i)||Nr(e,i)&&Nr(r,t)?!0:ft(e,t,r)>0!=ft(e,t,i)>0&&ft(r,i,e)>0!=ft(r,i,t)>0}function Ud(e,t){var r=e;do{if(r.i!==e.i&&r.next.i!==e.i&&r.i!==t.i&&r.next.i!==t.i&&Hl(r,r.next,e,t))return!0;r=r.next}while(r!==e);return!1}function Hi(e,t){return ft(e.prev,e,e.next)<0?ft(e,t,e.next)>=0&&ft(e,e.prev,t)>=0:ft(e,t,e.prev)<0||ft(e,e.next,t)<0}function zd(e,t){var r=e,i=!1,n=(e.x+t.x)/2,a=(e.y+t.y)/2;do r.y>a!=r.next.y>a&&r.next.y!==r.y&&n<(r.next.x-r.x)*(a-r.y)/(r.next.y-r.y)+r.x&&(i=!i),r=r.next;while(r!==e);return i}function kl(e,t){var r=new Va(e.i,e.x,e.y),i=new Va(t.i,t.x,t.y),n=e.next,a=t.prev;return e.next=t,t.prev=e,r.next=n,n.prev=r,i.next=r,r.prev=i,a.next=i,i.prev=a,i}function vs(e,t,r,i){var n=new Va(e,t,r);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function ki(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function Va(e,t,r){this.i=e,this.x=t,this.y=r,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}Gl.deviation=function(e,t,r,i){var n=t&&t.length,a=n?t[0]*r:e.length,o=Math.abs(Ha(e,0,a,r));if(n)for(var s=0,l=t.length;s<l;s++){var u=t[s]*r,c=s<l-1?t[s+1]*r:e.length;o-=Math.abs(Ha(e,u,c,r))}var h=0;for(s=0;s<i.length;s+=3){var f=i[s]*r,d=i[s+1]*r,v=i[s+2]*r;h+=Math.abs((e[f]-e[v])*(e[d+1]-e[f+1])-(e[f]-e[d])*(e[v+1]-e[f+1]))}return o===0&&h===0?0:Math.abs((h-o)/o)};function Ha(e,t,r,i){for(var n=0,a=t,o=r-i;a<r;a+=i)n+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return n}function xa(e,t,r){var i=e[t];e[t]=e[r],e[r]=i}function Wl(e,t,r,i,n){var a=r,o=e[t];xa(e,t,i);for(var s=r;s<i;s++)n(e[s],o)<0&&(xa(e,s,a),a++);return xa(e,i,a),a}function In(e,t,r,i){if(r<i){var n=Math.floor((r+i)/2),a=Wl(e,n,r,i,t);In(e,t,r,a-1),In(e,t,a+1,i)}}function li(){this._parts=[]}li.prototype.step=function(e,t,r){var i=e.length;if(r===0){this._parts=[],this._sorted=!1;var n=Math.floor(i/2);this._parts.push({pivot:n,left:0,right:i-1}),this._currentSortPartIdx=0}if(!this._sorted){var a=this._parts;if(a.length===0)return this._sorted=!0,!0;if(a.length<512){for(var o=0;o<a.length;o++)a[o].pivot=Wl(e,a[o].pivot,a[o].left,a[o].right,t);for(var s=[],o=0;o<a.length;o++){var l=a[o].left,u=a[o].pivot-1;u>l&&s.push({pivot:Math.floor((u+l)/2),left:l,right:u});var l=a[o].pivot+1,u=a[o].right;u>l&&s.push({pivot:Math.floor((u+l)/2),left:l,right:u})}a=this._parts=s}else for(var o=0;o<Math.floor(a.length/10);o++){var c=a.length-1-this._currentSortPartIdx;if(In(e,t,a[c].left,a[c].right),this._currentSortPartIdx++,this._currentSortPartIdx===a.length)return this._sorted=!0,!0}return!1}};li.sort=In;var ri=We.vec3,ps=ri.create(),ms=ri.create(),_s=ri.create();const lo={needsSortTriangles:function(){return this.indices&&this.sortTriangles},needsSortTrianglesProgressively:function(){return this.needsSortTriangles()&&this.triangleCount>=2e4},doSortTriangles:function(e,t){var r=this.indices;if(t===0){var i=this.attributes.position,e=e.array;(!this._triangleZList||this._triangleZList.length!==this.triangleCount)&&(this._triangleZList=new Float32Array(this.triangleCount),this._sortedTriangleIndices=new Uint32Array(this.triangleCount),this._indicesTmp=new r.constructor(r.length),this._triangleZListTmp=new Float32Array(this.triangleCount));for(var n=0,a,o=0;o<r.length;){i.get(r[o++],ps),i.get(r[o++],ms),i.get(r[o++],_s);var s=ri.sqrDist(ps,e),l=ri.sqrDist(ms,e),u=ri.sqrDist(_s,e),c=Math.min(s,l);c=Math.min(c,u),o===3?(a=c,c=0):c=c-a,this._triangleZList[n++]=c}}for(var h=this._sortedTriangleIndices,o=0;o<h.length;o++)h[o]=o;if(this.triangleCount<2e4)t===0&&this._simpleSort(!0);else for(var o=0;o<3;o++)this._progressiveQuickSort(t*3+o);for(var f=this._indicesTmp,d=this._triangleZListTmp,v=this._triangleZList,o=0;o<this.triangleCount;o++){var p=h[o]*3,m=o*3;f[m++]=r[p++],f[m++]=r[p++],f[m]=r[p],d[o]=v[h[o]]}var _=this._indicesTmp;this._indicesTmp=this.indices,this.indices=_;var _=this._triangleZListTmp;this._triangleZListTmp=this._triangleZList,this._triangleZList=_,this.dirtyIndices()},_simpleSort:function(e){var t=this._triangleZList,r=this._sortedTriangleIndices;function i(n,a){return t[a]-t[n]}e?Array.prototype.sort.call(r,i):li.sort(r,i,0,r.length-1)},_progressiveQuickSort:function(e){var t=this._triangleZList,r=this._sortedTriangleIndices;this._quickSort=this._quickSort||new li,this._quickSort.step(r,function(i,n){return t[n]-t[i]},e)}};function Gd(e){const t=e.getVisual("style");if(t){const r=e.getVisual("drawType");return t[r]}}function Vd(e){return e.getVisual("style").opacity}function rt(e,t){const r=e.getItemVisual(t,"style");if(r){const i=e.getVisual("drawType");return r[i]}}function tt(e,t){const r=e.getItemVisual(t,"style");return r&&r.opacity}var Xl=1,$l=2;function or(e,t,r){this._labelsMesh=new io,this._labelTextureSurface=new Pn({width:512,height:512,devicePixelRatio:r.getDevicePixelRatio(),onupdate:function(){r.getZr().refresh()}}),this._api=r,this._labelsMesh.material.set("textureAtlas",this._labelTextureSurface.getTexture())}or.prototype.getLabelPosition=function(e,t,r){return[0,0,0]};or.prototype.getLabelDistance=function(e,t,r){return 0};or.prototype.getMesh=function(){return this._labelsMesh};or.prototype.updateData=function(e,t,r){t==null&&(t=0),r==null&&(r=e.count()),(!this._labelsVisibilitiesBits||this._labelsVisibilitiesBits.length!==r-t)&&(this._labelsVisibilitiesBits=new Uint8Array(r-t));for(var i=["label","show"],n=["emphasis","label","show"],a=t;a<r;a++){var o=e.getItemModel(a),s=o.get(i),l=o.get(n);l==null&&(l=s);var u=(s?Xl:0)|(l?$l:0);this._labelsVisibilitiesBits[a-t]=u}this._start=t,this._end=r,this._data=e};or.prototype.updateLabels=function(e){if(this._data){e=e||[];for(var t=e.length>0,r={},i=0;i<e.length;i++)r[e[i]]=!0;this._labelsMesh.geometry.convertToDynamicArray(!0),this._labelTextureSurface.clear();for(var n=["label"],a=["emphasis","label"],o=this._data.hostModel,s=this._data,l=o.getModel(n),u=o.getModel(a,l),c={left:"right",right:"left",top:"center",bottom:"center"},h={left:"middle",right:"middle",top:"bottom",bottom:"top"},f=this._start;f<this._end;f++){var d=!1;t&&r[f]&&(d=!0);var v=this._labelsVisibilitiesBits[f-this._start]&(d?$l:Xl);if(v){var p=s.getItemModel(f),m=p.getModel(d?a:n,d?u:l),_=m.get("distance")||0,x=m.get("position"),y=this._api.getDevicePixelRatio(),g=o.getFormattedLabel(f,d?"emphasis":"normal");if(g==null||g==="")return;var w=new Sn({style:bn(m,{text:g,fill:m.get("color")||rt(s,f)||"#000",align:"left",verticalAlign:"top",opacity:ce.firstNotNull(m.get("opacity"),tt(s,f),1)})}),T=w.getBoundingRect(),b=1.2;T.height*=b;var S=this._labelTextureSurface.add(w),C=c[x]||"center",L=h[x]||"bottom";this._labelsMesh.geometry.addSprite(this.getLabelPosition(f,x,_),[T.width*y,T.height*y],S,C,L,this.getLabelDistance(f,x,_)*y)}}this._labelsMesh.material.set("uvScale",this._labelTextureSurface.getCoordsScale()),this._labelTextureSurface.getZr().refreshImmediately(),this._labelsMesh.geometry.convertToTypedArray(),this._labelsMesh.geometry.dirty()}};or.prototype.dispose=function(){this._labelTextureSurface.dispose()};var mt=We.vec3;E.Shader.import(qn);function ui(e){this.rootNode=new E.Node,this._triangulationResults={},this._shadersMap=E.COMMON_SHADERS.filter(function(r){return r!=="shadow"}).reduce(function(r,i){return r[i]=E.createShader("ecgl."+i),r},{}),this._linesShader=E.createShader("ecgl.meshLines3D");var t={};E.COMMON_SHADERS.forEach(function(r){t[r]=new E.Material({shader:E.createShader("ecgl."+r)})}),this._groundMaterials=t,this._groundMesh=new E.Mesh({geometry:new E.PlaneGeometry({dynamic:!0}),castShadow:!1,renderNormal:!0,$ignorePicking:!0}),this._groundMesh.rotation.rotateX(-Math.PI/2),this._labelsBuilder=new or(512,512,e),this._labelsBuilder.getMesh().renderOrder=100,this._labelsBuilder.getMesh().material.depthTest=!1,this.rootNode.add(this._labelsBuilder.getMesh()),this._initMeshes(),this._api=e}ui.prototype={constructor:ui,extrudeY:!0,update:function(e,t,r,i,n){var a=e.getData();i==null&&(i=0),n==null&&(n=a.count()),this._startIndex=i,this._endIndex=n-1,this._triangulation(e,i,n);var o=this._getShader(e.get("shading"));this._prepareMesh(e,o,r,i,n),this.rootNode.updateWorldTransform(),this._updateRegionMesh(e,r,i,n);var s=e.coordinateSystem;s.type==="geo3D"&&this._updateGroundPlane(e,s,r);var l=this;this._labelsBuilder.updateData(a,i,n),this._labelsBuilder.getLabelPosition=function(u,c,h){var f=a.getName(u),d,v=h;if(s.type==="geo3D"){var p=s.getRegion(f);if(!p)return[NaN,NaN,NaN];d=p.getCenter();var m=s.dataToPoint([d[0],d[1],v]);return m}else var _=l._triangulationResults[u-l._startIndex],d=l.extrudeY?[(_.max[0]+_.min[0])/2,_.max[1]+v,(_.max[2]+_.min[2])/2]:[(_.max[0]+_.min[0])/2,(_.max[1]+_.min[1])/2,_.max[2]+v]},this._data=a,this._labelsBuilder.updateLabels(),this._updateDebugWireframe(e),this._lastHoverDataIndex=0},_initMeshes:function(){var e=this;function t(){var n=new E.Mesh({name:"Polygon",material:new E.Material({shader:e._shadersMap.lambert}),geometry:new E.Geometry({sortTriangles:!0,dynamic:!0}),culling:!1,ignorePicking:!0,renderNormal:!0});return Object.assign(n.geometry,lo),n}var r=t(),i=new E.Mesh({material:new E.Material({shader:this._linesShader}),castShadow:!1,ignorePicking:!0,$ignorePicking:!0,geometry:new kr({useNativeLine:!1})});this.rootNode.add(r),this.rootNode.add(i),r.material.define("both","VERTEX_COLOR"),r.material.define("fragment","DOUBLE_SIDED"),this._polygonMesh=r,this._linesMesh=i,this.rootNode.add(this._groundMesh)},_getShader:function(e){var t=this._shadersMap[e];return t||(t=this._shadersMap.lambert),t.__shading=e,t},_prepareMesh:function(e,t,r,i,n){for(var a=0,o=0,s=0,l=0,u=i;u<n;u++){var c=this._getRegionPolygonInfo(u),h=this._getRegionLinesInfo(u,e,this._linesMesh.geometry);a+=c.vertexCount,o+=c.triangleCount,s+=h.vertexCount,l+=h.triangleCount}var f=this._polygonMesh,d=f.geometry;["position","normal","texcoord0","color"].forEach(function(v){d.attributes[v].init(a)}),d.indices=a>65535?new Uint32Array(o*3):new Uint16Array(o*3),f.material.shader!==t&&f.material.attachShader(t,!0),E.setMaterialFromModel(t.__shading,f.material,e,r),s>0&&(this._linesMesh.geometry.resetOffset(),this._linesMesh.geometry.setVertexCount(s),this._linesMesh.geometry.setTriangleCount(l)),this._dataIndexOfVertex=new Uint32Array(a),this._vertexRangeOfDataIndex=new Uint32Array((n-i)*2)},_updateRegionMesh:function(e,t,r,i){for(var n=e.getData(),a=0,o=0,s=!1,T=this._polygonMesh,l=this._linesMesh,u=r;u<i;u++){var c=e.getRegionModel(u),h=c.getModel("itemStyle"),f=ce.firstNotNull(rt(n,u),h.get("color"),"#fff"),d=ce.firstNotNull(tt(n,u),h.get("opacity"),1),v=E.parseColor(f),p=E.parseColor(h.get("borderColor"));v[3]*=d,p[3]*=d;var m=v[3]<.99;T.material.set("color",[1,1,1,1]),s=s||m;for(var _=ce.firstNotNull(c.get("height",!0),e.get("regionHeight")),x=this._updatePolygonGeometry(e,T.geometry,u,_,a,o,v),y=a;y<x.vertexOffset;y++)this._dataIndexOfVertex[y]=u;this._vertexRangeOfDataIndex[(u-r)*2]=a,this._vertexRangeOfDataIndex[(u-r)*2+1]=x.vertexOffset,a=x.vertexOffset,o=x.triangleOffset;var g=h.get("borderWidth"),w=g>0;w&&(g*=t.getDevicePixelRatio(),this._updateLinesGeometry(l.geometry,e,u,_,g,e.coordinateSystem.transform)),l.invisible=!w,l.material.set({color:p})}var T=this._polygonMesh;T.material.transparent=s,T.material.depthMask=!s,T.geometry.updateBoundingBox(),T.frontFace=this.extrudeY?E.Mesh.CCW:E.Mesh.CW,T.material.get("normalMap")&&T.geometry.generateTangents(),T.seriesIndex=e.seriesIndex,T.on("mousemove",this._onmousemove,this),T.on("mouseout",this._onmouseout,this)},_updateDebugWireframe:function(e){var t=e.getModel("debug.wireframe");if(t.get("show")){var r=E.parseColor(t.get("lineStyle.color")||"rgba(0,0,0,0.5)"),i=ce.firstNotNull(t.get("lineStyle.width"),1),n=this._polygonMesh;n.geometry.generateBarycentric(),n.material.define("both","WIREFRAME_TRIANGLE"),n.material.set("wireframeLineColor",r),n.material.set("wireframeLineWidth",i)}},_onmousemove:function(e){var t=this._dataIndexOfVertex[e.triangle[0]];t==null&&(t=-1),t!==this._lastHoverDataIndex&&(this.downplay(this._lastHoverDataIndex),this.highlight(t),this._labelsBuilder.updateLabels([t])),this._lastHoverDataIndex=t,this._polygonMesh.dataIndex=t},_onmouseout:function(e){e.target&&(this.downplay(this._lastHoverDataIndex),this._lastHoverDataIndex=-1,this._polygonMesh.dataIndex=-1),this._labelsBuilder.updateLabels([])},_updateGroundPlane:function(e,t,r){var i=e.getModel("groundPlane",e);if(this._groundMesh.invisible=!i.get("show",!0),!this._groundMesh.invisible){var n=e.get("shading"),a=this._groundMaterials[n];a||(a=this._groundMaterials.lambert),E.setMaterialFromModel(n,a,i,r),a.get("normalMap")&&this._groundMesh.geometry.generateTangents(),this._groundMesh.material=a,this._groundMesh.material.set("color",E.parseColor(i.get("color"))),this._groundMesh.scale.set(t.size[0],t.size[2],1)}},_triangulation:function(e,t,r){this._triangulationResults=[];for(var i=[1/0,1/0,1/0],n=[-1/0,-1/0,-1/0],a=e.coordinateSystem,o=t;o<r;o++){for(var s=[],l=e.getRegionPolygonCoords(o),u=0;u<l.length;u++){var c=l[u].exterior,h=l[u].interiors,f=[],d=[];if(!(c.length<3)){for(var v=0,p=0;p<c.length;p++){var m=c[p];f[v++]=m[0],f[v++]=m[1]}for(var p=0;p<h.length;p++)if(!(h[p].length<3)){for(var _=f.length/2,x=0;x<h[p].length;x++){var m=h[p][x];f.push(m[0]),f.push(m[1])}d.push(_)}for(var y=Gl(f,d),g=new Float64Array(f.length/2*3),w=[],T=[1/0,1/0,1/0],b=[-1/0,-1/0,-1/0],S=0,p=0;p<f.length;)mt.set(w,f[p++],0,f[p++]),a&&a.transform&&mt.transformMat4(w,w,a.transform),mt.min(T,T,w),mt.max(b,b,w),g[S++]=w[0],g[S++]=w[1],g[S++]=w[2];mt.min(i,i,T),mt.max(n,n,b),s.push({points:g,indices:y,min:T,max:b})}}this._triangulationResults.push(s)}this._geoBoundingBox=[i,n]},_getRegionPolygonInfo:function(e){for(var t=this._triangulationResults[e-this._startIndex],r=0,i=0,n=0;n<t.length;n++)r+=t[n].points.length/3,i+=t[n].indices.length/3;var a=r*2+r*4,o=i*2+r*2;return{vertexCount:a,triangleCount:o}},_updatePolygonGeometry:function(e,t,r,i,n,a,o){var s=e.get("projectUVOnGround"),l=t.attributes.position,u=t.attributes.normal,c=t.attributes.texcoord0,h=t.attributes.color,f=this._triangulationResults[r-this._startIndex],d=h.value&&o,v=t.indices,p=this.extrudeY?1:2,m=this.extrudeY?2:1,_=[this.rootNode.worldTransform.x.len(),this.rootNode.worldTransform.y.len(),this.rootNode.worldTransform.z.len()],x=mt.mul([],this._geoBoundingBox[0],_),y=mt.mul([],this._geoBoundingBox[1],_),g=Math.max(y[0]-x[0],y[2]-x[2]);function w(he,we,Le){for(var Pe=he.points,Lt=Pe.length,ve=[],Ze=[],Ie=0;Ie<Lt;Ie+=3)ve[0]=Pe[Ie],ve[p]=we,ve[m]=Pe[Ie+2],Ze[0]=(Pe[Ie]*_[0]-x[0])/g,Ze[1]=(Pe[Ie+2]*_[m]-x[2])/g,l.set(n,ve),d&&h.set(n,o),c.set(n++,Ze)}function T(he,we,Le){var Pe=n;w(he,we);for(var Lt=he.indices.length,ve=0;ve<Lt;ve++)v[a*3+ve]=he.indices[ve]+Pe;a+=he.indices.length/3}for(var b=this.extrudeY?[0,1,0]:[0,0,1],S=mt.negate([],b),C=0;C<f.length;C++){var L=n,A=f[C];T(A,0),T(A,i);for(var M=A.points.length/3,P=0;P<M;P++)u.set(L+P,S),u.set(L+P+M,b);for(var D=[0,3,1,1,3,2],N=[[],[],[],[]],U=[],W=[],z=[],$=[],G=0,P=0;P<M;P++){for(var ne=(P+1)%M,B=(A.points[ne*3]-A.points[P*3])*_[0],I=(A.points[ne*3+2]-A.points[P*3+2])*_[m],Y=Math.sqrt(B*B+I*I),X=0;X<4;X++){var Te=X===0||X===3,ue=(Te?P:ne)*3;N[X][0]=A.points[ue],N[X][p]=X>1?i:0,N[X][m]=A.points[ue+2],l.set(n+X,N[X]),s?($[0]=(A.points[ue]*_[0]-x[0])/g,$[1]=(A.points[ue+2]*_[m]-x[m])/g):($[0]=(Te?G:G+Y)/g,$[1]=(N[X][p]*_[p]-x[p])/g),c.set(n+X,$)}mt.sub(U,N[1],N[0]),mt.sub(W,N[3],N[0]),mt.cross(z,U,W),mt.normalize(z,z);for(var X=0;X<4;X++)u.set(n+X,z),d&&h.set(n+X,o);for(var X=0;X<6;X++)v[a*3+X]=D[X]+n;n+=4,a+=2,G+=Y}}return t.dirty(),{vertexOffset:n,triangleOffset:a}},_getRegionLinesInfo:function(e,t,r){var i=0,n=0,a=t.getRegionModel(e),o=a.getModel("itemStyle"),s=o.get("borderWidth");if(s>0){var l=t.getRegionPolygonCoords(e);l.forEach(function(u){var c=u.exterior,h=u.interiors;i+=r.getPolylineVertexCount(c),n+=r.getPolylineTriangleCount(c);for(var f=0;f<h.length;f++)i+=r.getPolylineVertexCount(h[f]),n+=r.getPolylineTriangleCount(h[f])},this)}return{vertexCount:i,triangleCount:n}},_updateLinesGeometry:function(e,t,r,i,n,a){function o(u){for(var c=new Float64Array(u.length*3),h=0,f=[],d=0;d<u.length;d++)f[0]=u[d][0],f[1]=i+.1,f[2]=u[d][1],a&&mt.transformMat4(f,f,a),c[h++]=f[0],c[h++]=f[1],c[h++]=f[2];return c}var s=[1,1,1,1],l=t.getRegionPolygonCoords(r);l.forEach(function(u){var c=u.exterior,h=u.interiors;e.addPolyline(o(c),s,n);for(var f=0;f<h.length;f++)e.addPolyline(o(h[f]),s,n)})},highlight:function(e){var t=this._data;if(t){var r=t.getItemModel(e),i=r.getModel(["emphasis","itemStyle"]),n=i.get("color"),a=ce.firstNotNull(i.get("opacity"),tt(t,e),1);if(n==null){var o=rt(t,e);n=$a(o,-.4)}a==null&&(a=tt(t,e));var s=E.parseColor(n);s[3]*=a,this._setColorOfDataIndex(t,e,s)}},downplay:function(e){var t=this._data;if(t){var r=t.getItemModel(e),i=ce.firstNotNull(rt(t,e),r.get(["itemStyle","color"]),"#fff"),n=ce.firstNotNull(tt(t,e),r.get(["itemStyle","opacity"]),1),a=E.parseColor(i);a[3]*=n,this._setColorOfDataIndex(t,e,a)}},dispose:function(){this._labelsBuilder.dispose()},_setColorOfDataIndex:function(e,t,r){if(!(t<this._startIndex&&t>this._endIndex)){t-=this._startIndex;for(var i=this._vertexRangeOfDataIndex[t*2];i<this._vertexRangeOfDataIndex[t*2+1];i++)this._polygonMesh.geometry.attributes.color.set(i,r);this._polygonMesh.geometry.dirty(),this._api.getZr().refresh()}}};const Hd=$i.extend({type:"geo3D",__ecgl__:!0,init:function(e,t){this._geo3DBuilder=new ui(t),this.groupGL=new E.Node,this._lightRoot=new E.Node,this._sceneHelper=new mr(this._lightRoot),this._sceneHelper.initLight(this._lightRoot),this._control=new Zn({zr:t.getZr()}),this._control.init()},render:function(e,t,r){this.groupGL.add(this._geo3DBuilder.rootNode);var i=e.coordinateSystem;if(!(!i||!i.viewGL)){i.viewGL.add(this._lightRoot),e.get("show")?i.viewGL.add(this.groupGL):i.viewGL.remove(this.groupGL);var n=this._control;n.setViewGL(i.viewGL);var a=e.getModel("viewControl");n.setFromViewControlModel(a,0),this._sceneHelper.setScene(i.viewGL.scene),this._sceneHelper.updateLight(e),i.viewGL.setPostEffect(e.getModel("postEffect"),r),i.viewGL.setTemporalSuperSampling(e.getModel("temporalSuperSampling")),this._geo3DBuilder.update(e,t,r,0,e.getData().count());var o=i.viewGL.isLinearSpace()?"define":"undefine";this._geo3DBuilder.rootNode.traverse(function(s){s.material&&s.material[o]("fragment","SRGB_DECODE")}),n.off("update"),n.on("update",function(){r.dispatchAction({type:"geo3DChangeCamera",alpha:n.getAlpha(),beta:n.getBeta(),distance:n.getDistance(),center:n.getCenter(),from:this.uid,geo3DId:e.id})}),n.update()}},afterRender:function(e,t,r,i){var n=i.renderer;this._sceneHelper.updateAmbientCubemap(n,e,r),this._sceneHelper.updateSkybox(n,e,r)},dispose:function(){this._control.dispose(),this._geo3DBuilder.dispose()}});var kd={Russia:[100,60],"United States":[-99,38],"United States of America":[-99,38]};function Wd(e,t){if(e==="world"){var r=kd[t.name];if(r){var i=[r[0],r[1]];t.setCenter(i)}}}var Xd=We.vec3,ti=We.mat4,$d=[Ru,Wd];function On(e,t,r,i,n){this.name=e,this.map=t,this.regionHeight=0,this.regions=[],this._nameCoordMap={},this.loadGeoJson(r,i,n),this.transform=ti.identity(new Float64Array(16)),this.invTransform=ti.identity(new Float64Array(16)),this.extrudeY=!0,this.altitudeAxis}On.prototype={constructor:On,type:"geo3D",dimensions:["lng","lat","alt"],containPoint:function(){},loadGeoJson:function(e,t,r){var i=yo||yo;try{this.regions=e?i(e):[]}catch(u){throw`Invalid geoJson format
`+u}t=t||{},r=r||{};for(var n=this.regions,a={},o=0;o<n.length;o++){var s=n[o].name;s=r[s]||s,n[o].name=s,a[s]=n[o],this.addGeoCoord(s,n[o].getCenter());var l=t[s];l&&n[o].transformTo(l.left,l.top,l.width,l.height)}this._regionsMap=a,this._geoRect=null,$d.forEach(function(u){u(this)},this)},getGeoBoundingRect:function(){if(this._geoRect)return this._geoRect;for(var e,t=this.regions,r=0;r<t.length;r++){var i=t[r].getBoundingRect();e=e||i.clone(),e.union(i)}return this._geoRect=e||new Pu(0,0,0,0)},addGeoCoord:function(e,t){this._nameCoordMap[e]=t},getRegion:function(e){return this._regionsMap[e]},getRegionByCoord:function(e){for(var t=this.regions,r=0;r<t.length;r++)if(t[r].contain(e))return t[r]},setSize:function(e,t,r){this.size=[e,t,r];var i=this.getGeoBoundingRect(),n=e/i.width,a=-r/i.height,o=-e/2-i.x*n,s=r/2-i.y*a,l=this.extrudeY?[o,0,s]:[o,s,0],u=this.extrudeY?[n,1,a]:[n,a,1],c=this.transform;ti.identity(c),ti.translate(c,c,l),ti.scale(c,c,u),ti.invert(this.invTransform,c)},dataToPoint:function(e,t){t=t||[];var r=this.extrudeY?1:2,i=this.extrudeY?2:1,n=e[2];return isNaN(n)&&(n=0),t[0]=e[0],t[i]=e[1],this.altitudeAxis?t[r]=this.altitudeAxis.dataToCoord(n):t[r]=0,t[r]+=this.regionHeight,Xd.transformMat4(t,t,this.transform),t},pointToData:function(e,t){}};function jd(e,t){var r=e.getBoxLayoutParams(),i=Gn(r,{width:t.getWidth(),height:t.getHeight()});i.y=t.getHeight()-i.y-i.height,this.viewGL.setViewport(i.x,i.y,i.width,i.height,t.getDevicePixelRatio());var n=this.getGeoBoundingRect(),a=n.width/n.height*(e.get("aspectScale")||.75),o=e.get("boxWidth"),s=e.get("boxDepth"),l=e.get("boxHeight");l==null&&(l=5),isNaN(o)&&isNaN(s)&&(o=100),isNaN(s)?s=o/a:isNaN(o)&&(o=s/a),this.setSize(o,l,s),this.regionHeight=e.get("regionHeight"),this.altitudeAxis&&this.altitudeAxis.setExtent(0,Math.max(l-this.regionHeight,0))}function Zd(e,t){var r=[1/0,-1/0];if(e.eachSeries(function(n){if(n.coordinateSystem===this&&n.type!=="series.map3D"){var a=n.getData(),o=n.coordDimToDataDim("alt"),s=o&&o[0];if(s){var l=a.getDataExtent(s,!0);r[0]=Math.min(r[0],l[0]),r[1]=Math.max(r[1],l[1])}}},this),r&&isFinite(r[1]-r[0])){var i=Xa(r,{type:"value",min:"dataMin",max:"dataMax"});this.altitudeAxis=new zn("altitude",i),this.resize(this.model,t)}}var gs=0,jl={dimensions:On.prototype.dimensions,create:function(e,t){var r=[];if(!La)throw new Error("geo3D component depends on geo component");function i(n,a){var o=jl.createGeo3D(n);n.__viewGL=n.__viewGL||new Ae,o.viewGL=n.__viewGL,n.coordinateSystem=o,o.model=n,r.push(o),o.resize=jd,o.resize(n,t),o.update=Zd}return e.eachComponent("geo3D",function(n,a){i(n)}),e.eachSeriesByType("map3D",function(n,a){var o=n.get("coordinateSystem");o==null&&(o="geo3D"),o==="geo3D"&&i(n)}),e.eachSeries(function(n){if(n.get("coordinateSystem")==="geo3D"){if(n.type==="series.map3D")return;var a=n.getReferringComponents("geo3D").models[0];if(a||(a=e.getComponent("geo3D")),!a)throw new Error('geo "'+ce.firstNotNull(n.get("geo3DIndex"),n.get("geo3DId"),0)+'" not found');n.coordinateSystem=a.coordinateSystem}}),r},createGeo3D:function(e){var t=e.get("map"),r;return typeof t=="string"?(r=t,t=La(t)):t&&t.features&&(t={geoJson:t}),r==null&&(r="GEO_ANONYMOUS_"+gs++),new On(r+gs++,r,t&&t.geoJson,t&&t.specialAreas,e.get("nameMap"))}};const Zl=jl;function Yl(e){e.registerComponentModel(Ed),e.registerComponentView(Hd),e.registerAction({type:"geo3DChangeCamera",event:"geo3dcamerachanged",update:"series:updateCamera"},function(t,r){r.eachComponent({mainType:"geo3D",query:t},function(i){i.setView(t)})}),e.registerCoordinateSystem("geo3D",Zl)}st(Yl);function ys(e,t){e.id=e.id||e.name||t+""}var Fr=hi.extend({type:"globe",layoutMode:"box",coordinateSystem:null,init:function(){Fr.superApply(this,"init",arguments),$t(this.option.layers,function(e,t){Ee(e,this.defaultLayerOption),ys(e,t)},this)},mergeOption:function(e){var t=this.option.layers;this.option.layers=null,Fr.superApply(this,"mergeOption",arguments);function r(o){return Nu(o,function(s,l,u){return ys(l,u),s[l.id]=l,s},{})}if(t&&t.length){var i=r(e.layers),n=r(t);for(var a in i)n[a]?Ee(n[a],i[a],!0):t.push(e.layers[a]);this.option.layers=t}$t(this.option.layers,function(o){Ee(o,this.defaultLayerOption)},this)},optionUpdated:function(){this.updateDisplacementHash()},defaultLayerOption:{show:!0,type:"overlay"},defaultOption:{show:!0,zlevel:-10,left:0,top:0,width:"100%",height:"100%",environment:"auto",baseColor:"#fff",baseTexture:"",heightTexture:"",displacementTexture:"",displacementScale:0,displacementQuality:"medium",globeRadius:100,globeOuterRadius:150,shading:"lambert",light:{main:{time:""}},atmosphere:{show:!1,offset:5,color:"#ffffff",glowPower:6,innerGlowPower:2},viewControl:{autoRotate:!0,panSensitivity:0,targetCoord:null},layers:[]},setDisplacementData:function(e,t,r){this.displacementData=e,this.displacementWidth=t,this.displacementHeight=r},getDisplacementTexture:function(){return this.get("displacementTexture")||this.get("heightTexture")},getDisplacemenScale:function(){var e=this.getDisplacementTexture(),t=this.get("displacementScale");return(!e||e==="none")&&(t=0),t},hasDisplacement:function(){return this.getDisplacemenScale()>0},_displacementChanged:!0,_displacementScale:0,updateDisplacementHash:function(){var e=this.getDisplacementTexture(),t=this.getDisplacemenScale();this._displacementChanged=this._displacementTexture!==e||this._displacementScale!==t,this._displacementTexture=e,this._displacementScale=t},isDisplacementChanged:function(){return this._displacementChanged}});Ee(Fr.prototype,$n);Ee(Fr.prototype,di);Ee(Fr.prototype,vi);Ee(Fr.prototype,mi);const Yd=Fr;var ql=Math.PI,It=Math.sin,Qt=Math.cos,Kl=Math.tan,Ql=Math.asin,Jl=Math.atan2,Br=ql/180,qd=1e3*60*60*24,Kd=2440588,Qd=2451545;function Jd(e){return e.valueOf()/qd-.5+Kd}function ev(e){return Jd(e)-Qd}var Fn=Br*23.4397;function tv(e,t){return Jl(It(e)*Qt(Fn)-Kl(t)*It(Fn),Qt(e))}function rv(e,t){return Ql(It(t)*Qt(Fn)+Qt(t)*It(Fn)*It(e))}function iv(e,t,r){return Jl(It(e),Qt(e)*It(t)-Kl(r)*Qt(t))}function nv(e,t,r){return Ql(It(t)*It(r)+Qt(t)*Qt(r)*Qt(e))}function av(e,t){return Br*(280.16+360.9856235*e)-t}function ov(e){return Br*(357.5291+.98560028*e)}function sv(e){var t=Br*(1.9148*It(e)+.02*It(2*e)+3e-4*It(3*e)),r=Br*102.9372;return e+t+r+ql}function lv(e){var t=ov(e),r=sv(t);return{dec:rv(r,0),ra:tv(r,0)}}var eu={};eu.getPosition=function(e,t,r){var i=Br*-r,n=Br*t,a=ev(e),o=lv(a),s=av(a,i)-o.ra;return{azimuth:iv(s,n,o.dec),altitude:nv(s,n,o.dec)}};const uv=eu,cv=`@export ecgl.atmosphere.vertex
attribute vec3 position: POSITION;
attribute vec3 normal : NORMAL;
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform mat4 normalMatrix : WORLDINVERSETRANSPOSE;

varying vec3 v_Normal;

void main() {
 v_Normal = normalize((normalMatrix * vec4(normal, 0.0)).xyz);
 gl_Position = worldViewProjection * vec4(position, 1.0);
}
@end


@export ecgl.atmosphere.fragment
uniform mat4 viewTranspose: VIEWTRANSPOSE;
uniform float glowPower;
uniform vec3 glowColor;

varying vec3 v_Normal;

void main() {
 float intensity = pow(1.0 - dot(v_Normal, (viewTranspose * vec4(0.0, 0.0, 1.0, 0.0)).xyz), glowPower);
 gl_FragColor = vec4(glowColor, intensity * intensity);
}
@end`;E.Shader.import(dl);E.Shader.import(cv);const hv=$i.extend({type:"globe",__ecgl__:!0,_displacementScale:0,init:function(e,t){this.groupGL=new E.Node,this._sphereGeometry=new E.SphereGeometry({widthSegments:200,heightSegments:100,dynamic:!0}),this._overlayGeometry=new E.SphereGeometry({widthSegments:80,heightSegments:40}),this._planeGeometry=new E.PlaneGeometry,this._earthMesh=new E.Mesh({renderNormal:!0}),this._atmosphereMesh=new E.Mesh,this._atmosphereGeometry=new E.SphereGeometry({widthSegments:80,heightSegments:40}),this._atmosphereMaterial=new E.Material({shader:new E.Shader(E.Shader.source("ecgl.atmosphere.vertex"),E.Shader.source("ecgl.atmosphere.fragment")),transparent:!0}),this._atmosphereMesh.geometry=this._atmosphereGeometry,this._atmosphereMesh.material=this._atmosphereMaterial,this._atmosphereMesh.frontFace=E.Mesh.CW,this._lightRoot=new E.Node,this._sceneHelper=new mr,this._sceneHelper.initLight(this._lightRoot),this.groupGL.add(this._atmosphereMesh),this.groupGL.add(this._earthMesh),this._control=new Zn({zr:t.getZr()}),this._control.init(),this._layerMeshes={}},render:function(e,t,r){var i=e.coordinateSystem,n=e.get("shading");i.viewGL.add(this._lightRoot),e.get("show")?i.viewGL.add(this.groupGL):i.viewGL.remove(this.groupGL),this._sceneHelper.setScene(i.viewGL.scene),i.viewGL.setPostEffect(e.getModel("postEffect"),r),i.viewGL.setTemporalSuperSampling(e.getModel("temporalSuperSampling"));var a=this._earthMesh;a.geometry=this._sphereGeometry;var o="ecgl."+n;(!a.material||a.material.shader.name!==o)&&(a.material=E.createMaterial(o)),E.setMaterialFromModel(n,a.material,e,r),["roughnessMap","metalnessMap","detailMap","normalMap"].forEach(function(h){var f=a.material.get(h);f&&(f.flipY=!1)}),a.material.set("color",E.parseColor(e.get("baseColor")));var s=i.radius*.99;if(a.scale.set(s,s,s),e.get("atmosphere.show")){a.material.define("both","ATMOSPHERE_ENABLED"),this._atmosphereMesh.invisible=!1,this._atmosphereMaterial.setUniforms({glowPower:e.get("atmosphere.glowPower")||6,glowColor:e.get("atmosphere.color")||"#ffffff"}),a.material.setUniforms({glowPower:e.get("atmosphere.innerGlowPower")||2,glowColor:e.get("atmosphere.color")||"#ffffff"});var l=e.get("atmosphere.offset")||5;this._atmosphereMesh.scale.set(s+l,s+l,s+l)}else a.material.undefine("both","ATMOSPHERE_ENABLED"),this._atmosphereMesh.invisible=!0;var u=a.material.setTextureImage("diffuseMap",e.get("baseTexture"),r,{flipY:!1,anisotropic:8});u&&u.surface&&u.surface.attachToMesh(a);var c=a.material.setTextureImage("bumpMap",e.get("heightTexture"),r,{flipY:!1,anisotropic:8});c&&c.surface&&c.surface.attachToMesh(a),a.material[e.get("postEffect.enable")?"define":"undefine"]("fragment","SRGB_DECODE"),this._updateLight(e,r),this._displaceVertices(e,r),this._updateViewControl(e,r),this._updateLayers(e,r)},afterRender:function(e,t,r,i){var n=i.renderer;this._sceneHelper.updateAmbientCubemap(n,e,r),this._sceneHelper.updateSkybox(n,e,r)},_updateLayers:function(e,t){var r=e.coordinateSystem,i=e.get("layers"),n=r.radius,a=[],o=[],s=[],l=[];$t(i,function(d){var v=new Un(d),p=v.get("type"),m=E.loadTexture(v.get("texture"),t,{flipY:!1,anisotropic:8});if(m.surface&&m.surface.attachToMesh(this._earthMesh),p==="blend"){var _=v.get("blendTo"),x=ce.firstNotNull(v.get("intensity"),1);_==="emission"?(s.push(m),l.push(x)):(a.push(m),o.push(x))}else{var y=v.get("id"),g=this._layerMeshes[y];g||(g=this._layerMeshes[y]=new E.Mesh({geometry:this._overlayGeometry,castShadow:!1,ignorePicking:!0}));var w=v.get("shading");w==="lambert"?(g.material=g.__lambertMaterial||new E.Material({autoUpdateTextureStatus:!1,shader:E.createShader("ecgl.lambert"),transparent:!0,depthMask:!1}),g.__lambertMaterial=g.material):(g.material=g.__colorMaterial||new E.Material({autoUpdateTextureStatus:!1,shader:E.createShader("ecgl.color"),transparent:!0,depthMask:!1}),g.__colorMaterial=g.material),g.material.enableTexture("diffuseMap");var T=v.get("distance"),b=n+(T??r.radius/100);g.scale.set(b,b,b),n=b;var S=this._blankTexture||(this._blankTexture=E.createBlankTexture("rgba(255, 255, 255, 0)"));g.material.set("diffuseMap",S),E.loadTexture(v.get("texture"),t,{flipY:!1,anisotropic:8},function(C){C.surface&&C.surface.attachToMesh(g),g.material.set("diffuseMap",C),t.getZr().refresh()}),v.get("show")?this.groupGL.add(g):this.groupGL.remove(g)}},this);var u=this._earthMesh.material;u.define("fragment","LAYER_DIFFUSEMAP_COUNT",a.length),u.define("fragment","LAYER_EMISSIVEMAP_COUNT",s.length),u.set("layerDiffuseMap",a),u.set("layerDiffuseIntensity",o),u.set("layerEmissiveMap",s),u.set("layerEmissionIntensity",l);var c=e.getModel("debug.wireframe");if(c.get("show")){u.define("both","WIREFRAME_TRIANGLE");var h=E.parseColor(c.get("lineStyle.color")||"rgba(0,0,0,0.5)"),f=ce.firstNotNull(c.get("lineStyle.width"),1);u.set("wireframeLineWidth",f),u.set("wireframeLineColor",h)}else u.undefine("both","WIREFRAME_TRIANGLE")},_updateViewControl:function(e,t){var r=e.coordinateSystem,i=e.getModel("viewControl");r.viewGL.camera;var n=this;function a(){return{type:"globeChangeCamera",alpha:o.getAlpha(),beta:o.getBeta(),distance:o.getDistance()-r.radius,center:o.getCenter(),from:n.uid,globeId:e.id}}var o=this._control;o.setViewGL(r.viewGL);var s=i.get("targetCoord"),l,u;s!=null&&(u=s[0]+90,l=s[1]),o.setFromViewControlModel(i,{baseDistance:r.radius,alpha:l,beta:u}),o.off("update"),o.on("update",function(){t.dispatchAction(a())})},_displaceVertices:function(e,t){var r=e.get("displacementQuality"),i=e.get("debug.wireframe.show"),n=e.coordinateSystem;if(!(!e.isDisplacementChanged()&&r===this._displacementQuality&&i===this._showDebugWireframe)){this._displacementQuality=r,this._showDebugWireframe=i;var a=this._sphereGeometry,o={low:100,medium:200,high:400,ultra:800}[r]||200,s=o/2;(a.widthSegments!==o||i)&&(a.widthSegments=o,a.heightSegments=s,a.build()),this._doDisplaceVertices(a,n),i&&a.generateBarycentric()}},_doDisplaceVertices:function(e,t){var r=e.attributes.position.value,i=e.attributes.texcoord0.value,n=e.__originalPosition;(!n||n.length!==r.length)&&(n=new Float32Array(r.length),n.set(r),e.__originalPosition=n);for(var a=t.displacementWidth,o=t.displacementHeight,s=t.displacementData,l=0;l<e.vertexCount;l++){var u=l*3,c=l*2,h=n[u+1],f=n[u+2],d=n[u+3],v=i[c++],p=i[c++],m=Math.round(v*(a-1)),_=Math.round(p*(o-1)),x=_*a+m,y=s?s[x]:0;r[u+1]=h+h*y,r[u+2]=f+f*y,r[u+3]=d+d*y}e.generateVertexNormals(),e.dirty(),e.updateBoundingBox()},_updateLight:function(e,t){var r=this._earthMesh;this._sceneHelper.updateLight(e);var i=this._sceneHelper.mainLight,n=e.get("light.main.time")||new Date,a=uv.getPosition(Iu(n),0,0),o=Math.cos(a.altitude);i.position.y=-o*Math.cos(a.azimuth),i.position.x=Math.sin(a.altitude),i.position.z=o*Math.sin(a.azimuth),i.lookAt(r.getWorldPosition())},dispose:function(e,t){this.groupGL.removeAll(),this._control.dispose()}});var fv=We.vec3;function Bn(e){this.radius=e,this.viewGL=null,this.altitudeAxis,this.displacementData=null,this.displacementWidth,this.displacementHeight}Bn.prototype={constructor:Bn,dimensions:["lng","lat","alt"],type:"globe",containPoint:function(){},setDisplacementData:function(e,t,r){this.displacementData=e,this.displacementWidth=t,this.displacementHeight=r},_getDisplacementScale:function(e,t){var r=(e+180)/360*(this.displacementWidth-1),i=(90-t)/180*(this.displacementHeight-1),n=Math.round(r)+Math.round(i)*this.displacementWidth;return this.displacementData[n]},dataToPoint:function(e,t){var r=e[0],i=e[1],n=e[2]||0,a=this.radius;this.displacementData&&(a*=1+this._getDisplacementScale(r,i)),this.altitudeAxis&&(a+=this.altitudeAxis.dataToCoord(n)),r=r*Math.PI/180,i=i*Math.PI/180;var o=Math.cos(i)*a;return t=t||[],t[0]=-o*Math.cos(r+Math.PI),t[1]=Math.sin(i)*a,t[2]=o*Math.sin(r+Math.PI),t},pointToData:function(e,t){var r=e[0],i=e[1],n=e[2],a=fv.len(e);r/=a,i/=a,n/=a;var o=Math.asin(i),s=Math.atan2(n,-r);s<0&&(s=Math.PI*2+s);var l=o*180/Math.PI,u=s*180/Math.PI-180;return t=t||[],t[0]=u,t[1]=l,t[2]=a-this.radius,this.altitudeAxis&&(t[2]=this.altitudeAxis.coordToData(t[2])),t}};function dv(e,t){var r=document.createElement("canvas"),i=r.getContext("2d"),n=e.width,a=e.height;r.width=n,r.height=a,i.drawImage(e,0,0,n,a);for(var o=i.getImageData(0,0,n,a).data,s=new Float32Array(o.length/4),l=0;l<o.length/4;l++){var u=o[l*4];s[l]=u/255*t}return{data:s,width:n,height:a}}function vv(e,t){var r=e.getBoxLayoutParams(),i=Gn(r,{width:t.getWidth(),height:t.getHeight()});i.y=t.getHeight()-i.y-i.height,this.viewGL.setViewport(i.x,i.y,i.width,i.height,t.getDevicePixelRatio()),this.radius=e.get("globeRadius");var n=e.get("globeOuterRadius");this.altitudeAxis&&this.altitudeAxis.setExtent(0,n-this.radius)}function pv(e,t){var r=[1/0,-1/0];if(e.eachSeries(function(n){if(n.coordinateSystem===this){var a=n.getData(),o=n.coordDimToDataDim("alt"),s=o&&o[0];if(s){var l=a.getDataExtent(s,!0);r[0]=Math.min(r[0],l[0]),r[1]=Math.max(r[1],l[1])}}},this),r&&isFinite(r[1]-r[0])){var i=Xa(r,{type:"value",min:"dataMin",max:"dataMax"});this.altitudeAxis=new zn("altitude",i),this.resize(this.model,t)}}var mv={dimensions:Bn.prototype.dimensions,create:function(e,t){var r=[];return e.eachComponent("globe",function(i){i.__viewGL=i.__viewGL||new Ae;var n=new Bn;n.viewGL=i.__viewGL,i.coordinateSystem=n,n.model=i,r.push(n),n.resize=vv,n.resize(i,t),n.update=pv}),e.eachSeries(function(i){if(i.get("coordinateSystem")==="globe"){var n=i.getReferringComponents("globe").models[0];if(n||(n=e.getComponent("globe")),!n)throw new Error('globe "'+ce.firstNotNull(i.get("globe3DIndex"),i.get("globe3DId"),0)+'" not found');var a=n.coordinateSystem;i.coordinateSystem=a}}),e.eachComponent("globe",function(i,n){var a=i.coordinateSystem,o=i.getDisplacementTexture(),s=i.getDisplacemenScale();if(i.isDisplacementChanged()){if(i.hasDisplacement()){var l=!0;E.loadTexture(o,t,function(u){var c=u.image,h=dv(c,s);i.setDisplacementData(h.data,h.width,h.height),l||t.dispatchAction({type:"globeUpdateDisplacment"})}),l=!1}else a.setDisplacementData(null,0,0);a.setDisplacementData(i.displacementData,i.displacementWidth,i.displacementHeight)}}),r}};const _v=mv;function gv(e){e.registerComponentModel(Yd),e.registerComponentView(hv),e.registerCoordinateSystem("globe",_v),e.registerAction({type:"globeChangeCamera",event:"globecamerachanged",update:"series:updateCamera"},function(t,r){r.eachComponent({mainType:"globe",query:t},function(i){i.setView(t)})}),e.registerAction({type:"globeUpdateDisplacment",event:"globedisplacementupdated",update:"update"},function(t,r){})}st(gv);var xs=["zoom","center","pitch","bearing"],uo=hi.extend({type:"mapbox3D",layoutMode:"box",coordinateSystem:null,defaultOption:{zlevel:-10,style:"mapbox://styles/mapbox/light-v9",center:[0,0],zoom:0,pitch:0,bearing:0,light:{main:{alpha:20,beta:30}},altitudeScale:1,boxHeight:"auto"},getMapboxCameraOption:function(){var e=this;return xs.reduce(function(t,r){return t[r]=e.get(r),t},{})},setMapboxCameraOption:function(e){e!=null&&xs.forEach(function(t){e[t]!=null&&(this.option[t]=e[t])},this)},getMapbox:function(){return this._mapbox},setMapbox:function(e){this._mapbox=e}});Ee(uo.prototype,di);Ee(uo.prototype,vi);const yv=uo;function Tr(e,t){if(this.id=e,this.zr=t,this.dom=document.createElement("div"),this.dom.style.cssText="position:absolute;left:0;right:0;top:0;bottom:0;",!mapboxgl)throw new Error("Mapbox GL library must be included. See https://www.mapbox.com/mapbox-gl-js/api/");this._mapbox=new mapboxgl.Map({container:this.dom}),this._initEvents()}Tr.prototype.setUnpainted=function(){};Tr.prototype.resize=function(){this._mapbox.resize()};Tr.prototype.getMapbox=function(){return this._mapbox};Tr.prototype.clear=function(){};Tr.prototype.refresh=function(){this._mapbox.resize()};var tu=["mousedown","mouseup","click","dblclick","mousemove","mousewheel","wheel","touchstart","touchend","touchmove","touchcancel"];Tr.prototype._initEvents=function(){var e=this._mapbox.getCanvasContainer();this._handlers=this._handlers||{contextmenu:function(t){return t.preventDefault(),!1}},tu.forEach(function(t){this._handlers[t]=function(r){var i={};for(var n in r)i[n]=r[n];i.bubbles=!1;var a=new r.constructor(r.type,i);e.dispatchEvent(a)},this.zr.dom.addEventListener(t,this._handlers[t])},this),this.zr.dom.addEventListener("contextmenu",this._handlers.contextmenu)};Tr.prototype.dispose=function(){tu.forEach(function(e){this.zr.dom.removeEventListener(e,this._handlers[e])},this)};const ru=`
@export ecgl.displayShadow.vertex

@import ecgl.common.transformUniforms

@import ecgl.common.uv.header

@import ecgl.common.attributes

varying vec3 v_WorldPosition;

varying vec3 v_Normal;

void main()
{
 @import ecgl.common.uv.main
 v_Normal = normalize((worldInverseTranspose * vec4(normal, 0.0)).xyz);

 v_WorldPosition = (world * vec4(position, 1.0)).xyz;
 gl_Position = worldViewProjection * vec4(position, 1.0);
}

@end


@export ecgl.displayShadow.fragment

@import ecgl.common.uv.fragmentHeader

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

uniform float roughness: 0.2;

#ifdef DIRECTIONAL_LIGHT_COUNT
@import clay.header.directional_light
#endif

@import ecgl.common.ssaoMap.header

@import clay.plugin.compute_shadow_map

void main()
{
 float shadow = 1.0;

 @import ecgl.common.ssaoMap.main

#if defined(DIRECTIONAL_LIGHT_COUNT) && defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 float shadowContribsDir[DIRECTIONAL_LIGHT_COUNT];
 if(shadowEnabled)
 {
 computeShadowOfDirectionalLights(v_WorldPosition, shadowContribsDir);
 }
 for (int i = 0; i < DIRECTIONAL_LIGHT_COUNT; i++) {
 shadow = min(shadow, shadowContribsDir[i] * 0.5 + 0.5);
 }
#endif

 shadow *= 0.5 + ao * 0.5;
 shadow = clamp(shadow, 0.0, 1.0);

 gl_FragColor = vec4(vec3(0.0), 1.0 - shadow);
}

@end`;E.Shader.import(ru);const xv=$i.extend({type:"mapbox3D",__ecgl__:!0,init:function(e,t){var r=t.getZr();this._zrLayer=new Tr("mapbox3D",r),r.painter.insertLayer(-1e3,this._zrLayer),this._lightRoot=new E.Node,this._sceneHelper=new mr(this._lightRoot),this._sceneHelper.initLight(this._lightRoot);var i=this._zrLayer.getMapbox(),n=this._dispatchInteractAction.bind(this,t,i);["zoom","rotate","drag","pitch","rotate","move"].forEach(function(a){i.on(a,n)}),this._groundMesh=new E.Mesh({geometry:new E.PlaneGeometry,material:new E.Material({shader:new E.Shader({vertex:E.Shader.source("ecgl.displayShadow.vertex"),fragment:E.Shader.source("ecgl.displayShadow.fragment")}),depthMask:!1}),renderOrder:-100,culling:!1,castShadow:!1,$ignorePicking:!0,renderNormal:!0})},render:function(e,t,r){var i=this._zrLayer.getMapbox(),n=e.get("style"),a=JSON.stringify(n);a!==this._oldStyleStr&&n&&i.setStyle(n),this._oldStyleStr=a,i.setCenter(e.get("center")),i.setZoom(e.get("zoom")),i.setPitch(e.get("pitch")),i.setBearing(e.get("bearing")),e.setMapbox(i);var o=e.coordinateSystem;o.viewGL.scene.add(this._lightRoot),o.viewGL.add(this._groundMesh),this._updateGroundMesh(),this._sceneHelper.setScene(o.viewGL.scene),this._sceneHelper.updateLight(e),o.viewGL.setPostEffect(e.getModel("postEffect"),r),o.viewGL.setTemporalSuperSampling(e.getModel("temporalSuperSampling")),this._mapbox3DModel=e},afterRender:function(e,t,r,i){var n=i.renderer;this._sceneHelper.updateAmbientCubemap(n,e,r),this._sceneHelper.updateSkybox(n,e,r),e.coordinateSystem.viewGL.scene.traverse(function(a){a.material&&(a.material.define("fragment","NORMAL_UP_AXIS",2),a.material.define("fragment","NORMAL_FRONT_AXIS",1))})},updateCamera:function(e,t,r,i){e.coordinateSystem.setCameraOption(i),this._updateGroundMesh(),r.getZr().refresh()},_dispatchInteractAction:function(e,t,r){e.dispatchAction({type:"mapbox3DChangeCamera",pitch:t.getPitch(),zoom:t.getZoom(),center:t.getCenter().toArray(),bearing:t.getBearing(),mapbox3DId:this._mapbox3DModel&&this._mapbox3DModel.id})},_updateGroundMesh:function(){if(this._mapbox3DModel){var e=this._mapbox3DModel.coordinateSystem,t=e.dataToPoint(e.center);this._groundMesh.position.set(t[0],t[1],-.001);var r=new E.Plane(new E.Vector3(0,0,1),0),i=e.viewGL.camera.castRay(new E.Vector2(-1,-1)),n=e.viewGL.camera.castRay(new E.Vector2(1,1)),a=i.intersectPlane(r),o=n.intersectPlane(r),s=a.dist(o)/e.viewGL.rootNode.scale.x;this._groundMesh.scale.set(s,s,1)}},dispose:function(e,t){this._zrLayer&&this._zrLayer.dispose(),t.getZr().painter.delLayer(-1e3)}});var cr=We.mat4,Ai=512,Ta=.6435011087932844,_t=Math.PI,Qr=1/10;function ci(){this.width=0,this.height=0,this.altitudeScale=1,this.boxHeight="auto",this.altitudeExtent,this.bearing=0,this.pitch=0,this.center=[0,0],this._origin,this.zoom=0,this._initialZoom,this.maxPitch=60,this.zoomOffset=0}ci.prototype={constructor:ci,dimensions:["lng","lat","alt"],containPoint:function(){},setCameraOption:function(e){this.bearing=e.bearing,this.pitch=e.pitch,this.center=e.center,this.zoom=e.zoom,this._origin||(this._origin=this.projectOnTileWithScale(this.center,Ai)),this._initialZoom==null&&(this._initialZoom=this.zoom),this.updateTransform()},updateTransform:function(){if(this.height){var e=.5/Math.tan(Ta/2)*this.height*Qr,t=Math.max(Math.min(this.pitch,this.maxPitch),0)/180*Math.PI,r=Ta/2,i=Math.PI/2+t,n=Math.sin(r)*e/Math.sin(Math.PI-i-r),a=Math.cos(Math.PI/2-t)*n+e,o=a*1.1;this.pitch>50&&(o=1e3);var s=[];cr.perspective(s,Ta,this.width/this.height,1,o),this.viewGL.camera.projectionMatrix.setArray(s),this.viewGL.camera.decomposeProjectionMatrix();var s=cr.identity([]),l=this.dataToPoint(this.center);cr.scale(s,s,[1,-1,1]),cr.translate(s,s,[0,0,-e]),cr.rotateX(s,s,t),cr.rotateZ(s,s,-this.bearing/180*Math.PI),cr.translate(s,s,[-l[0]*this.getScale()*Qr,-l[1]*this.getScale()*Qr,0]),this.viewGL.camera.viewMatrix.array=s;var u=[];cr.invert(u,s),this.viewGL.camera.worldTransform.array=u,this.viewGL.camera.decomposeWorldTransform();var c=Ai*this.getScale(),h;if(this.altitudeExtent&&!isNaN(this.boxHeight)){var f=this.altitudeExtent[1]-this.altitudeExtent[0];h=this.boxHeight/f*this.getScale()/Math.pow(2,this._initialZoom-this.zoomOffset)}else h=c/(2*Math.PI*6378e3*Math.abs(Math.cos(this.center[1]*(Math.PI/180))))*this.altitudeScale*Qr;this.viewGL.rootNode.scale.set(this.getScale()*Qr,this.getScale()*Qr,h)}},getScale:function(){return Math.pow(2,this.zoom-this.zoomOffset)},projectOnTile:function(e,t){return this.projectOnTileWithScale(e,this.getScale()*Ai,t)},projectOnTileWithScale:function(e,t,r){var i=e[0],n=e[1],a=i*_t/180,o=n*_t/180,s=t*(a+_t)/(2*_t),l=t*(_t-Math.log(Math.tan(_t/4+o*.5)))/(2*_t);return r=r||[],r[0]=s,r[1]=l,r},unprojectFromTile:function(e,t){return this.unprojectOnTileWithScale(e,this.getScale()*Ai,t)},unprojectOnTileWithScale:function(e,t,r){var i=e[0],n=e[1],a=i/t*(2*_t)-_t,o=2*(Math.atan(Math.exp(_t-n/t*(2*_t)))-_t/4);return r=r||[],r[0]=a*180/_t,r[1]=o*180/_t,r},dataToPoint:function(e,t){return t=this.projectOnTileWithScale(e,Ai,t),t[0]-=this._origin[0],t[1]-=this._origin[1],t[2]=isNaN(e[2])?0:e[2],isNaN(e[2])||(t[2]=e[2],this.altitudeExtent&&(t[2]-=this.altitudeExtent[0])),t}};function Wi(){ci.apply(this,arguments)}Wi.prototype=new ci;Wi.prototype.constructor=Wi;Wi.prototype.type="mapbox3D";function iu(e,t,r){function i(a,o){var s=o.getWidth(),l=o.getHeight(),u=o.getDevicePixelRatio();this.viewGL.setViewport(0,0,s,l,u),this.width=s,this.height=l,this.altitudeScale=a.get("altitudeScale"),this.boxHeight=a.get("boxHeight")}function n(a,o){if(this.model.get("boxHeight")!=="auto"){var s=[1/0,-1/0];a.eachSeries(function(l){if(l.coordinateSystem===this){var u=l.getData(),c=l.coordDimToDataDim("alt")[0];if(c){var h=u.getDataExtent(c,!0);s[0]=Math.min(s[0],h[0]),s[1]=Math.max(s[1],h[1])}}},this),s&&isFinite(s[1]-s[0])&&(this.altitudeExtent=s)}}return{dimensions:t.prototype.dimensions,create:function(a,o){var s=[];return a.eachComponent(e,function(l){var u=l.__viewGL;u||(u=l.__viewGL=new Ae,u.setRootNode(new E.Node));var c=new t;c.viewGL=l.__viewGL,c.resize=i,c.resize(l,o),s.push(c),l.coordinateSystem=c,c.model=l,c.update=n}),a.eachSeries(function(l){if(l.get("coordinateSystem")===e){var u=l.getReferringComponents(e).models[0];if(u||(u=a.getComponent(e)),!u)throw new Error(e+' "'+ce.firstNotNull(l.get(e+"Index"),l.get(e+"Id"),0)+'" not found');l.coordinateSystem=u.coordinateSystem}}),r&&r(s,a,o),s}}}var Tv=iu("mapbox3D",Wi,function(e){e.forEach(function(t){t.setCameraOption(t.model.getMapboxCameraOption())})});const wv=Tv;function Sv(e){e.registerComponentModel(yv),e.registerComponentView(xv),e.registerCoordinateSystem("mapbox3D",wv),e.registerAction({type:"mapbox3DChangeCamera",event:"mapbox3dcamerachanged",update:"mapbox3D:updateCamera"},function(t,r){r.eachComponent({mainType:"mapbox3D",query:t},function(i){i.setMapboxCameraOption(t)})})}st(Sv);var Ts=["zoom","center","pitch","bearing"],co=hi.extend({type:"maptalks3D",layoutMode:"box",coordinateSystem:null,defaultOption:{zlevel:-10,urlTemplate:"http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",attribution:'&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>',center:[0,0],zoom:0,pitch:0,bearing:0,light:{main:{alpha:20,beta:30}},altitudeScale:1,boxHeight:"auto"},getMaptalksCameraOption:function(){var e=this;return Ts.reduce(function(t,r){return t[r]=e.get(r),t},{})},setMaptalksCameraOption:function(e){e!=null&&Ts.forEach(function(t){e[t]!=null&&(this.option[t]=e[t])},this)},getMaptalks:function(){return this._maptalks},setMaptalks:function(e){this._maptalks=e}});Ee(co.prototype,di);Ee(co.prototype,vi);const bv=co;function wr(e,t,r,i){if(this.id=e,this.zr=t,this.dom=document.createElement("div"),this.dom.style.cssText="position:absolute;left:0;right:0;top:0;bottom:0;",!maptalks)throw new Error("Maptalks library must be included. See https://maptalks.org");this._maptalks=new maptalks.Map(this.dom,{center:r,zoom:i,doubleClickZoom:!1,fog:!1}),this._initEvents()}wr.prototype.setUnpainted=function(){};wr.prototype.resize=function(){this._maptalks.checkSize()};wr.prototype.getMaptalks=function(){return this._maptalks};wr.prototype.clear=function(){};wr.prototype.refresh=function(){this._maptalks.checkSize()};var nu=["mousedown","mouseup","click","dblclick","mousemove","mousewheel","DOMMouseScroll","touchstart","touchend","touchmove","touchcancel"];wr.prototype._initEvents=function(){var e=this.dom;this._handlers=this._handlers||{contextmenu:function(t){return t.preventDefault(),!1}},nu.forEach(function(t){this._handlers[t]=function(r){var i={};for(var n in r)i[n]=r[n];i.bubbles=!1;var a=new r.constructor(r.type,i);t==="mousewheel"||t==="DOMMouseScroll"?e.dispatchEvent(a):e.firstElementChild.dispatchEvent(a)},this.zr.dom.addEventListener(t,this._handlers[t])},this),this.zr.dom.addEventListener("contextmenu",this._handlers.contextmenu)};wr.prototype.dispose=function(){nu.forEach(function(e){this.zr.dom.removeEventListener(e,this._handlers[e])},this),this._maptalks.remove()};E.Shader.import(ru);const Ev=$i.extend({type:"maptalks3D",__ecgl__:!0,init:function(e,t){this._groundMesh=new E.Mesh({geometry:new E.PlaneGeometry,material:new E.Material({shader:new E.Shader({vertex:E.Shader.source("ecgl.displayShadow.vertex"),fragment:E.Shader.source("ecgl.displayShadow.fragment")}),depthMask:!1}),renderOrder:-100,culling:!1,castShadow:!1,$ignorePicking:!0,renderNormal:!0})},_initMaptalksLayer:function(e,t){var r=t.getZr();this._zrLayer=new wr("maptalks3D",r,e.get("center"),e.get("zoom")),r.painter.insertLayer(-1e3,this._zrLayer),this._lightRoot=new E.Node,this._sceneHelper=new mr(this._lightRoot),this._sceneHelper.initLight(this._lightRoot);var i=this._zrLayer.getMaptalks(),n=this._dispatchInteractAction.bind(this,t,i);["zoomend","zooming","zoomstart","dragrotating","pitch","pitchend","movestart","moving","moveend","resize","touchstart","touchmove","touchend","animating"].forEach(function(a){i.on(a,n)})},render:function(e,t,r){this._zrLayer||this._initMaptalksLayer(e,r);var i=this._zrLayer.getMaptalks(),n=e.get("urlTemplate"),a=i.getBaseLayer();n!==this._oldUrlTemplate&&(a?a.setOptions({urlTemplate:n,attribution:e.get("attribution")}):(a=new maptalks.TileLayer("maptalks-echarts-gl-baselayer",{urlTemplate:n,subdomains:["a","b","c"],attribution:e.get("attribution")}),i.setBaseLayer(a))),this._oldUrlTemplate=n,i.setCenter(e.get("center")),i.setZoom(e.get("zoom"),{animation:!1}),i.setPitch(e.get("pitch")),i.setBearing(e.get("bearing")),e.setMaptalks(i);var o=e.coordinateSystem;o.viewGL.scene.add(this._lightRoot),o.viewGL.add(this._groundMesh),this._updateGroundMesh(),this._sceneHelper.setScene(o.viewGL.scene),this._sceneHelper.updateLight(e),o.viewGL.setPostEffect(e.getModel("postEffect"),r),o.viewGL.setTemporalSuperSampling(e.getModel("temporalSuperSampling")),this._maptalks3DModel=e},afterRender:function(e,t,r,i){var n=i.renderer;this._sceneHelper.updateAmbientCubemap(n,e,r),this._sceneHelper.updateSkybox(n,e,r),e.coordinateSystem.viewGL.scene.traverse(function(a){a.material&&(a.material.define("fragment","NORMAL_UP_AXIS",2),a.material.define("fragment","NORMAL_FRONT_AXIS",1))})},updateCamera:function(e,t,r,i){e.coordinateSystem.setCameraOption(i),this._updateGroundMesh(),r.getZr().refresh()},_dispatchInteractAction:function(e,t,r){e.dispatchAction({type:"maptalks3DChangeCamera",pitch:t.getPitch(),zoom:Cv(t.getResolution())+1,center:t.getCenter().toArray(),bearing:t.getBearing(),maptalks3DId:this._maptalks3DModel&&this._maptalks3DModel.id})},_updateGroundMesh:function(){if(this._maptalks3DModel){var e=this._maptalks3DModel.coordinateSystem,t=e.dataToPoint(e.center);this._groundMesh.position.set(t[0],t[1],-.001);var r=new E.Plane(new E.Vector3(0,0,1),0),i=e.viewGL.camera.castRay(new E.Vector2(-1,-1)),n=e.viewGL.camera.castRay(new E.Vector2(1,1)),a=i.intersectPlane(r),o=n.intersectPlane(r),s=a.dist(o)/e.viewGL.rootNode.scale.x;this._groundMesh.scale.set(s,s,1)}},dispose:function(e,t){this._zrLayer&&this._zrLayer.dispose(),t.getZr().painter.delLayer(-1e3)}}),Av=2*6378137*Math.PI/(256*Math.pow(2,20));function Cv(e){return 19-Math.log(e/Av)/Math.LN2}function Xi(){ci.apply(this,arguments),this.maxPitch=85,this.zoomOffset=1}Xi.prototype=new ci;Xi.prototype.constructor=Xi;Xi.prototype.type="maptalks3D";var Lv=iu("maptalks3D",Xi,function(e){e.forEach(function(t){t.setCameraOption(t.model.getMaptalksCameraOption())})});const Dv=Lv;function Mv(e){e.registerComponentModel(bv),e.registerComponentView(Ev),e.registerCoordinateSystem("maptalks3D",Dv),e.registerAction({type:"maptalks3DChangeCamera",event:"maptalks3dcamerachanged",update:"maptalks3D:updateCamera"},function(t,r){r.eachComponent({mainType:"maptalks3D",query:t},function(i){i.setMaptalksCameraOption(t)})})}st(Mv);var Pv=We.vec3,Rv=ja.isDimensionStacked;function Nv(e){var t=e[0],r=e[1];return!(t>0&&r>0||t<0&&r<0)}function Iv(e,t){var r=e.getData(),i=e.get("barSize");if(i==null){var n=t.size,a,o,s=t.getAxis("x"),l=t.getAxis("y");s.type==="category"?a=s.getBandWidth()*.7:a=Math.round(n[0]/Math.sqrt(r.count()))*.6,l.type==="category"?o=l.getBandWidth()*.7:o=Math.round(n[1]/Math.sqrt(r.count()))*.6,i=[a,o]}else Xt(i)||(i=[i,i]);var u=t.getAxis("z").scale.getExtent(),c=Nv(u),h=["x","y","z"].map(function(v){return e.coordDimToDataDim(v)[0]}),f=Rv(r,h[2]),d=f?r.getCalculationInfo("stackResultDimension"):h[2];r.each(h,function(v,p,m,_){var x=r.get(d,_),y=f?x-m:c?0:u[0],g=t.dataToPoint([v,p,y]),w=t.dataToPoint([v,p,x]),T=Pv.dist(g,w),b=[0,w[1]<g[1]?-1:1,0];Math.abs(T)===0&&(T=.1);var S=[i[0],T,i[1]];r.setItemLayout(_,[g,b,S])}),r.setLayout("orient",[1,0,0])}function ho(e,t,r){for(var i=e.getDataExtent(t),n=e.getDataExtent(r),a=i[1]-i[0]||i[0],o=n[1]-n[0]||n[0],s=50,l=new Uint8Array(s*s),u=0;u<e.count();u++){var c=e.get(t,u),h=e.get(r,u),f=Math.floor((c-i[0])/a*(s-1)),d=Math.floor((h-n[0])/o*(s-1)),v=d*s+f;l[v]=l[v]||1}for(var p=0,u=0;u<l.length;u++)l[u]&&p++;return p/l.length}var ws=We.vec3,Ov=ja.isDimensionStacked;function Fv(e,t){var r=e.getData(),i=e.get("minHeight")||0,n=e.get("barSize"),a=["lng","lat","alt"].map(function(u){return e.coordDimToDataDim(u)[0]});if(n==null){var o=t.radius*Math.PI,s=ho(r,a[0],a[1]);n=[o/Math.sqrt(r.count()/s),o/Math.sqrt(r.count()/s)]}else Xt(n)||(n=[n,n]);var l=fo(r,a);r.each(a,function(u,c,h,f){var d=r.get(l.dimension,f),v=l.isStacked?d-h:t.altitudeAxis.scale.getExtent()[0],p=Math.max(t.altitudeAxis.dataToCoord(h),i),m=t.dataToPoint([u,c,v]),_=t.dataToPoint([u,c,d]),x=ws.sub([],_,m);ws.normalize(x,x);var y=[n[0],p,n[1]];r.setItemLayout(f,[m,x,y])}),r.setLayout("orient",k.UP.array)}function Bv(e,t){var r=e.getData(),i=e.get("barSize"),n=e.get("minHeight")||0,a=["lng","lat","alt"].map(function(c){return e.coordDimToDataDim(c)[0]});if(i==null){var o=Math.min(t.size[0],t.size[2]),s=ho(r,a[0],a[1]);i=[o/Math.sqrt(r.count()/s),o/Math.sqrt(r.count()/s)]}else Xt(i)||(i=[i,i]);var l=[0,1,0],u=fo(r,a);r.each(a,function(c,h,f,d){var v=r.get(u.dimension,d),p=u.isStacked?v-f:t.altitudeAxis.scale.getExtent()[0],m=Math.max(t.altitudeAxis.dataToCoord(f),n),_=t.dataToPoint([c,h,p]),x=[i[0],m,i[1]];r.setItemLayout(d,[_,l,x])}),r.setLayout("orient",[1,0,0])}function Uv(e,t){var r=e.getData(),i=e.coordDimToDataDim("lng")[0],n=e.coordDimToDataDim("lat")[0],a=e.coordDimToDataDim("alt")[0],o=e.get("barSize"),s=e.get("minHeight")||0;if(o==null){var l=r.getDataExtent(i),u=r.getDataExtent(n),c=t.dataToPoint([l[0],u[0]]),h=t.dataToPoint([l[1],u[1]]),f=Math.min(Math.abs(c[0]-h[0]),Math.abs(c[1]-h[1]))||1,d=ho(r,i,n);o=[f/Math.sqrt(r.count()/d),f/Math.sqrt(r.count()/d)]}else Xt(o)||(o=[o,o]),o[0]/=t.getScale()/16,o[1]/=t.getScale()/16;var v=[0,0,1],p=[i,n,a],m=fo(r,p);r.each(p,function(_,x,y,g){var w=r.get(m.dimension,g),T=m.isStacked?w-y:0,b=t.dataToPoint([_,x,T]),S=t.dataToPoint([_,x,w]),C=Math.max(S[2]-b[2],s),L=[o[0],C,o[1]];r.setItemLayout(g,[b,v,L])}),r.setLayout("orient",[1,0,0])}function fo(e,t){var r=Ov(e,t[2]);return{dimension:r?e.getCalculationInfo("stackResultDimension"):t[2],isStacked:r}}function zv(e){e.registerLayout(function(t,r){t.eachSeriesByType("bar3D",function(i){var n=i.coordinateSystem,a=n&&n.type;a==="globe"?Fv(i,n):a==="cartesian3D"?Iv(i,n):a==="geo3D"?Bv(i,n):(a==="mapbox3D"||a==="maptalks3D")&&Uv(i,n)})})}var vo={};vo.getFormattedLabel=function(e,t,r,i,n){r=r||"normal";var a=e.getData(i),o=a.getItemModel(t),s=e.getDataParams(t,i);n!=null&&s.value instanceof Array&&(s.value=s.value[n]);var l=o.get(r==="normal"?["label","formatter"]:["emphasis","label","formatter"]);l==null&&(l=o.get(["label","formatter"]));var u;return typeof l=="function"?(s.status=r,u=l(s)):typeof l=="string"&&(u=Ou(l,s)),u};vo.normalizeToArray=function(e){return e instanceof Array?e:e==null?[]:[e]};const gi=vo;function Gv(e,t){var r=[];return $t(e.dimensions,function(i){var n=e.getDimensionInfo(i),a=n.otherDims,o=a[t];o!=null&&o!==!1&&(r[o]=n.name)}),r}function Ki(e,t,r){function i(h){var f=[],d=Gv(n,"tooltip");d.length?$t(d,function(p){v(n.get(p,t),p)}):$t(h,v);function v(p,m){var _=n.getDimensionInfo(m);if(!(!_||_.otherDims.tooltip===!1)){var x=_.type,y="- "+(_.tooltipName||_.name)+": "+(x==="ordinal"?p+"":x==="time"?r?"":Uu("yyyy/MM/dd hh:mm:ss",p):xo(p));y&&f.push(Jr(y))}}return"<br/>"+f.join("<br/>")}var n=e.getData(),a=e.getRawValue(t),o=Xt(a)?i(a):Jr(xo(a)),s=n.getName(t),l=rt(n,t);Fu(l)&&l.colorStops&&(l=(l.colorStops[0]||{}).color),l=l||"transparent";var u=Bu(l),c=e.name;return c==="\0-"&&(c=""),c=c?Jr(c)+(r?": ":"<br/>"):"",r?u+c+o:c+u+(s?Jr(s)+": "+o:o)}function Kn(e,t,r){r=r||e.getSource();var i=t||ks(e.get("coordinateSystem"))||["x","y","z"],n=ji(r,{dimensionsDefine:r.dimensionsDefine||e.get("dimensions"),encodeDefine:r.encodeDefine||e.get("encode"),coordDimensions:i.map(function(s){var l=e.getReferringComponents(s+"Axis3D").models[0];return{type:l&&l.get("type")==="category"?"ordinal":"float",name:s}})});e.get("coordinateSystem")==="cartesian3D"&&n.forEach(function(s){if(i.indexOf(s.coordDim)>=0){var l=e.getReferringComponents(s.coordDim+"Axis3D").models[0];l&&l.get("type")==="category"&&(s.ordinalMeta=l.getOrdinalMeta())}});var a=ja.enableDataStack(e,n,{byIndex:!0,stackedCoordDimension:"z"}),o=new jt(n,e);return o.setCalculationInfo(a),o.initData(r),o}var au=zt.extend({type:"series.bar3D",dependencies:["globe"],visualStyleAccessPathvisu:"itemStyle",getInitialData:function(e,t){return Kn(this)},getFormattedLabel:function(e,t,r,i){var n=gi.getFormattedLabel(this,e,t,r,i);return n==null&&(n=this.getData().get("z",e)),n},formatTooltip:function(e){return Ki(this,e)},defaultOption:{coordinateSystem:"cartesian3D",globeIndex:0,grid3DIndex:0,zlevel:-10,bevelSize:0,bevelSmoothness:2,onGridPlane:"xy",shading:"color",minHeight:0,itemStyle:{opacity:1},label:{show:!1,distance:2,textStyle:{fontSize:14,color:"#000",backgroundColor:"rgba(255,255,255,0.7)",padding:3,borderRadius:3}},emphasis:{label:{show:!0}},animationDurationUpdate:500}});Ee(au.prototype,mi);const Vv=au;var ze=We.vec3,Hv=We.mat3,po=ye.extend(function(){return{attributes:{position:new ye.Attribute("position","float",3,"POSITION"),normal:new ye.Attribute("normal","float",3,"NORMAL"),color:new ye.Attribute("color","float",4,"COLOR"),prevPosition:new ye.Attribute("prevPosition","float",3),prevNormal:new ye.Attribute("prevNormal","float",3)},dynamic:!0,enableNormal:!1,bevelSize:1,bevelSegments:0,_dataIndices:null,_vertexOffset:0,_triangleOffset:0}},{resetOffset:function(){this._vertexOffset=0,this._triangleOffset=0},setBarCount:function(e){var t=this.enableNormal,r=this.getBarVertexCount()*e,i=this.getBarTriangleCount()*e;this.vertexCount!==r&&(this.attributes.position.init(r),t?this.attributes.normal.init(r):this.attributes.normal.value=null,this.attributes.color.init(r)),this.triangleCount!==i&&(this.indices=r>65535?new Uint32Array(i*3):new Uint16Array(i*3),this._dataIndices=new Uint32Array(r))},getBarVertexCount:function(){var e=this.bevelSize>0?this.bevelSegments:0;return e>0?this._getBevelBarVertexCount(e):this.enableNormal?24:8},getBarTriangleCount:function(){var e=this.bevelSize>0?this.bevelSegments:0;return e>0?this._getBevelBarTriangleCount(e):12},_getBevelBarVertexCount:function(e){return(e+1)*4*(e+1)*2},_getBevelBarTriangleCount:function(e){var t=e*4+3,r=e*2+1;return(t+1)*r*2+4},setColor:function(e,t){for(var r=this.getBarVertexCount(),i=r*e,n=r*(e+1),a=i;a<n;a++)this.attributes.color.set(a,t);this.dirtyAttribute("color")},getDataIndexOfVertex:function(e){return this._dataIndices?this._dataIndices[e]:null},addBar:function(){for(var e=ze.create,t=ze.scaleAndAdd,r=e(),i=e(),n=e(),a=e(),o=e(),s=e(),l=e(),u=[],c=[],h=0;h<8;h++)u[h]=e();for(var f=[[0,1,5,4],[2,3,7,6],[4,5,6,7],[3,2,1,0],[0,4,7,3],[1,2,6,5]],d=[0,1,2,0,2,3],v=[],h=0;h<f.length;h++)for(var p=f[h],m=0;m<2;m++){for(var _=[],x=0;x<3;x++)_.push(p[d[m*3+x]]);v.push(_)}return function(y,g,w,T,b,S){var C=this._vertexOffset;if(this.bevelSize>0&&this.bevelSegments>0)this._addBevelBar(y,g,w,T,this.bevelSize,this.bevelSegments,b);else{ze.copy(n,g),ze.normalize(n,n),ze.cross(a,w,n),ze.normalize(a,a),ze.cross(i,n,a),ze.normalize(a,a),ze.negate(o,i),ze.negate(s,n),ze.negate(l,a),t(u[0],y,i,T[0]/2),t(u[0],u[0],a,T[2]/2),t(u[1],y,i,T[0]/2),t(u[1],u[1],l,T[2]/2),t(u[2],y,o,T[0]/2),t(u[2],u[2],l,T[2]/2),t(u[3],y,o,T[0]/2),t(u[3],u[3],a,T[2]/2),t(r,y,n,T[1]),t(u[4],r,i,T[0]/2),t(u[4],u[4],a,T[2]/2),t(u[5],r,i,T[0]/2),t(u[5],u[5],l,T[2]/2),t(u[6],r,o,T[0]/2),t(u[6],u[6],l,T[2]/2),t(u[7],r,o,T[0]/2),t(u[7],u[7],a,T[2]/2);var L=this.attributes;if(this.enableNormal){c[0]=i,c[1]=o,c[2]=n,c[3]=s,c[4]=a,c[5]=l;for(var A=this._vertexOffset,M=0;M<f.length;M++){for(var P=this._triangleOffset*3,D=0;D<6;D++)this.indices[P++]=A+d[D];A+=4,this._triangleOffset+=2}for(var M=0;M<f.length;M++)for(var N=c[M],D=0;D<4;D++){var U=f[M][D];L.position.set(this._vertexOffset,u[U]),L.normal.set(this._vertexOffset,N),L.color.set(this._vertexOffset++,b)}}else{for(var M=0;M<v.length;M++){for(var P=this._triangleOffset*3,D=0;D<3;D++)this.indices[P+D]=v[M][D]+this._vertexOffset;this._triangleOffset++}for(var M=0;M<u.length;M++)L.position.set(this._vertexOffset,u[M]),L.color.set(this._vertexOffset++,b)}}for(var W=this._vertexOffset,M=C;M<W;M++)this._dataIndices[M]=S}}(),_addBevelBar:function(){var e=ze.create(),t=ze.create(),r=ze.create(),i=Hv.create(),n=[],a=[1,-1,-1,1],o=[1,1,-1,-1],s=[2,0];return function(l,u,c,h,f,d,v){ze.copy(t,u),ze.normalize(t,t),ze.cross(r,c,t),ze.normalize(r,r),ze.cross(e,t,r),ze.normalize(r,r),i[0]=e[0],i[1]=e[1],i[2]=e[2],i[3]=t[0],i[4]=t[1],i[5]=t[2],i[6]=r[0],i[7]=r[1],i[8]=r[2],f=Math.min(h[0],h[2])/2*f;for(var p=0;p<3;p++)n[p]=Math.max(h[p]-f*2,0);for(var m=(h[0]-n[0])/2,_=(h[1]-n[1])/2,x=(h[2]-n[2])/2,y=[],g=[],w=this._vertexOffset,T=[],p=0;p<2;p++){T[p]=T[p]=[];for(var b=0;b<=d;b++)for(var S=0;S<4;S++){(b===0&&p===0||p===1&&b===d)&&T[p].push(w);for(var C=0;C<=d;C++){var L=C/d*Math.PI/2+Math.PI/2*S,A=b/d*Math.PI/2+Math.PI/2*p;g[0]=m*Math.cos(L)*Math.sin(A),g[1]=_*Math.cos(A),g[2]=x*Math.sin(L)*Math.sin(A),y[0]=g[0]+a[S]*n[0]/2,y[1]=g[1]+_+s[p]*n[1]/2,y[2]=g[2]+o[S]*n[2]/2,Math.abs(m-_)<1e-6&&Math.abs(_-x)<1e-6||(g[0]/=m*m,g[1]/=_*_,g[2]/=x*x),ze.normalize(g,g),ze.transformMat3(y,y,i),ze.transformMat3(g,g,i),ze.add(y,y,l),this.attributes.position.set(w,y),this.enableNormal&&this.attributes.normal.set(w,g),this.attributes.color.set(w,v),w++}}}for(var M=d*4+3,P=d*2+1,D=M+1,S=0;S<P;S++)for(var p=0;p<=M;p++){var N=S*D+p+this._vertexOffset,U=S*D+(p+1)%D+this._vertexOffset,W=(S+1)*D+(p+1)%D+this._vertexOffset,z=(S+1)*D+p+this._vertexOffset;this.setTriangleIndices(this._triangleOffset++,[W,N,U]),this.setTriangleIndices(this._triangleOffset++,[W,z,N])}this.setTriangleIndices(this._triangleOffset++,[T[0][0],T[0][2],T[0][1]]),this.setTriangleIndices(this._triangleOffset++,[T[0][0],T[0][3],T[0][2]]),this.setTriangleIndices(this._triangleOffset++,[T[1][0],T[1][1],T[1][2]]),this.setTriangleIndices(this._triangleOffset++,[T[1][0],T[1][2],T[1][3]]),this._vertexOffset=w}}()});_r(po.prototype,Yi);_r(po.prototype,lo);const kv=po;var Wv=We.vec3;const Xv=Gt.extend({type:"bar3D",__ecgl__:!0,init:function(e,t){this.groupGL=new E.Node,this._api=t,this._labelsBuilder=new or(256,256,t);var r=this;this._labelsBuilder.getLabelPosition=function(i,n,a){if(r._data){var o=r._data.getItemLayout(i),s=o[0],l=o[1],u=o[2][1];return Wv.scaleAndAdd([],s,l,a+u)}else return[0,0]},this._labelsBuilder.getMesh().renderOrder=100},render:function(e,t,r){var i=this._prevBarMesh;this._prevBarMesh=this._barMesh,this._barMesh=i,this._barMesh||(this._barMesh=new E.Mesh({geometry:new kv,shadowDepthMaterial:new E.Material({shader:new E.Shader(E.Shader.source("ecgl.sm.depth.vertex"),E.Shader.source("ecgl.sm.depth.fragment"))}),culling:e.coordinateSystem.type==="cartesian3D",renderOrder:10,renderNormal:!0})),this.groupGL.remove(this._prevBarMesh),this.groupGL.add(this._barMesh),this.groupGL.add(this._labelsBuilder.getMesh());var n=e.coordinateSystem;if(this._doRender(e,r),n&&n.viewGL){n.viewGL.add(this.groupGL);var a=n.viewGL.isLinearSpace()?"define":"undefine";this._barMesh.material[a]("fragment","SRGB_DECODE")}this._data=e.getData(),this._labelsBuilder.updateData(this._data),this._labelsBuilder.updateLabels(),this._updateAnimation(e)},_updateAnimation:function(e){E.updateVertexAnimation([["prevPosition","position"],["prevNormal","normal"]],this._prevBarMesh,this._barMesh,e)},_doRender:function(e,t){var r=e.getData(),i=e.get("shading"),n=i!=="color",a=this,o=this._barMesh,s="ecgl."+i;(!o.material||o.material.shader.name!==s)&&(o.material=E.createMaterial(s,["VERTEX_COLOR"])),E.setMaterialFromModel(i,o.material,e,t),o.geometry.enableNormal=n,o.geometry.resetOffset();var l=e.get("bevelSize"),u=e.get("bevelSmoothness");o.geometry.bevelSegments=u,o.geometry.bevelSize=l;var c=[],h=new Float32Array(r.count()*4),f=0,m=0,d=!1;r.each(function(x){if(r.hasValue(x)){var y=rt(r,x),g=tt(r,x);g==null&&(g=1),E.parseColor(y,c),c[3]*=g,h[f++]=c[0],h[f++]=c[1],h[f++]=c[2],h[f++]=c[3],c[3]>0&&(m++,c[3]<.99&&(d=!0))}}),o.geometry.setBarCount(m);var v=r.getLayout("orient"),p=this._barIndexOfData=new Int32Array(r.count()),m=0;r.each(function(x){if(!r.hasValue(x)){p[x]=-1;return}var y=r.getItemLayout(x),g=y[0],w=y[1],T=y[2],b=x*4;c[0]=h[b++],c[1]=h[b++],c[2]=h[b++],c[3]=h[b++],c[3]>0&&(a._barMesh.geometry.addBar(g,w,v,T,c,x),p[x]=m++)}),o.geometry.dirty(),o.geometry.updateBoundingBox();var _=o.material;_.transparent=d,_.depthMask=!d,o.geometry.sortTriangles=d,this._initHandler(e,t)},_initHandler:function(e,t){var r=e.getData(),i=this._barMesh,n=e.coordinateSystem.type==="cartesian3D";i.seriesIndex=e.seriesIndex;var a=-1;i.off("mousemove"),i.off("mouseout"),i.on("mousemove",function(o){var s=i.geometry.getDataIndexOfVertex(o.triangle[0]);s!==a&&(this._downplay(a),this._highlight(s),this._labelsBuilder.updateLabels([s]),n&&t.dispatchAction({type:"grid3DShowAxisPointer",value:[r.get("x",s),r.get("y",s),r.get("z",s,!0)]})),a=s,i.dataIndex=s},this),i.on("mouseout",function(o){this._downplay(a),this._labelsBuilder.updateLabels(),a=-1,i.dataIndex=-1,n&&t.dispatchAction({type:"grid3DHideAxisPointer"})},this)},_highlight:function(e){var t=this._data;if(t){var r=this._barIndexOfData[e];if(!(r<0)){var i=t.getItemModel(e),n=i.getModel("emphasis.itemStyle"),a=n.get("color"),o=n.get("opacity");if(a==null){var s=rt(t,e);a=$a(s,-.4)}o==null&&(o=tt(t,e));var l=E.parseColor(a);l[3]*=o,this._barMesh.geometry.setColor(r,l),this._api.getZr().refresh()}}},_downplay:function(e){var t=this._data;if(t){var r=this._barIndexOfData[e];if(!(r<0)){var i=rt(t,e),n=tt(t,e),a=E.parseColor(i);a[3]*=n,this._barMesh.geometry.setColor(r,a),this._api.getZr().refresh()}}},highlight:function(e,t,r,i){this._toggleStatus("highlight",e,t,r,i)},downplay:function(e,t,r,i){this._toggleStatus("downplay",e,t,r,i)},_toggleStatus:function(e,t,r,i,n){var a=t.getData(),o=ce.queryDataIndex(a,n),s=this;o!=null?$t(gi.normalizeToArray(o),function(l){e==="highlight"?this._highlight(l):this._downplay(l)},this):a.each(function(l){e==="highlight"?s._highlight(l):s._downplay(l)})},remove:function(){this.groupGL.removeAll()},dispose:function(){this._labelsBuilder.dispose(),this.groupGL.removeAll()}});function $v(e){e.registerChartView(Xv),e.registerSeriesModel(Vv),zv(e),e.registerProcessor(function(t,r){t.eachSeriesByType("bar3d",function(i){var n=i.getData();n.filterSelf(function(a){return n.hasValue(a)})})})}st($v);var jv=zt.extend({type:"series.line3D",dependencies:["grid3D"],visualStyleAccessPath:"lineStyle",visualDrawType:"stroke",getInitialData:function(e,t){return Kn(this)},formatTooltip:function(e){return Ki(this,e)},defaultOption:{coordinateSystem:"cartesian3D",zlevel:-10,grid3DIndex:0,lineStyle:{width:2},animationDurationUpdate:500}});const Zv=jv;var Yv=We.vec3;E.Shader.import(qn);const qv=Gt.extend({type:"line3D",__ecgl__:!0,init:function(e,t){this.groupGL=new E.Node,this._api=t},render:function(e,t,r){var i=this._prevLine3DMesh;this._prevLine3DMesh=this._line3DMesh,this._line3DMesh=i,this._line3DMesh||(this._line3DMesh=new E.Mesh({geometry:new kr({useNativeLine:!1,sortTriangles:!0}),material:new E.Material({shader:E.createShader("ecgl.meshLines3D")}),renderOrder:10}),this._line3DMesh.geometry.pick=this._pick.bind(this)),this.groupGL.remove(this._prevLine3DMesh),this.groupGL.add(this._line3DMesh);var n=e.coordinateSystem;if(n&&n.viewGL){n.viewGL.add(this.groupGL);var a=n.viewGL.isLinearSpace()?"define":"undefine";this._line3DMesh.material[a]("fragment","SRGB_DECODE")}this._doRender(e,r),this._data=e.getData(),this._camera=n.viewGL.camera,this.updateCamera(),this._updateAnimation(e)},updateCamera:function(){this._updateNDCPosition()},_doRender:function(e,t){var r=e.getData(),i=this._line3DMesh;i.geometry.resetOffset();var n=r.getLayout("points"),a=[],o=new Float32Array(n.length/3*4),s=0,l=!1;r.each(function(h){var f=rt(r,h),d=tt(r,h);d==null&&(d=1),E.parseColor(f,a),a[3]*=d,o[s++]=a[0],o[s++]=a[1],o[s++]=a[2],o[s++]=a[3],a[3]<.99&&(l=!0)}),i.geometry.setVertexCount(i.geometry.getPolylineVertexCount(n)),i.geometry.setTriangleCount(i.geometry.getPolylineTriangleCount(n)),i.geometry.addPolyline(n,o,ce.firstNotNull(e.get("lineStyle.width"),1)),i.geometry.dirty(),i.geometry.updateBoundingBox();var u=i.material;u.transparent=l,u.depthMask=!l;var c=e.getModel("debug.wireframe");c.get("show")?(i.geometry.createAttribute("barycentric","float",3),i.geometry.generateBarycentric(),i.material.set("both","WIREFRAME_TRIANGLE"),i.material.set("wireframeLineColor",E.parseColor(c.get("lineStyle.color")||"rgba(0,0,0,0.5)")),i.material.set("wireframeLineWidth",ce.firstNotNull(c.get("lineStyle.width"),1))):i.material.set("both","WIREFRAME_TRIANGLE"),this._points=n,this._initHandler(e,t)},_updateAnimation:function(e){E.updateVertexAnimation([["prevPosition","position"],["prevPositionPrev","positionPrev"],["prevPositionNext","positionNext"]],this._prevLine3DMesh,this._line3DMesh,e)},_initHandler:function(e,t){var r=e.getData(),i=e.coordinateSystem,n=this._line3DMesh,a=-1;n.seriesIndex=e.seriesIndex,n.off("mousemove"),n.off("mouseout"),n.on("mousemove",function(o){var s=i.pointToData(o.point.array),l=r.indicesOfNearest("x",s[0])[0];l!==a&&(t.dispatchAction({type:"grid3DShowAxisPointer",value:[r.get("x",l),r.get("y",l),r.get("z",l)]}),n.dataIndex=l),a=l},this),n.on("mouseout",function(o){a=-1,n.dataIndex=-1,t.dispatchAction({type:"grid3DHideAxisPointer"})},this)},_updateNDCPosition:function(){var e=new q,t=this._camera;q.multiply(e,t.projectionMatrix,t.viewMatrix);var r=this._positionNDC,i=this._points,n=i.length/3;(!r||r.length/2!==n)&&(r=this._positionNDC=new Float32Array(n*2));for(var a=[],o=0;o<n;o++){var s=o*3,l=o*2;a[0]=i[s],a[1]=i[s+1],a[2]=i[s+2],a[3]=1,Yv.transformMat4(a,a,e.array),r[l]=a[0]/a[3],r[l+1]=a[1]/a[3]}},_pick:function(e,t,r,i,n,a){var o=this._positionNDC,s=this._data.hostModel,l=s.get("lineStyle.width"),u=-1,c=r.viewport.width,h=r.viewport.height,f=c*.5,d=h*.5;e=(e+1)*f,t=(t+1)*d;for(var v=1;v<o.length/2;v++){var p=(o[(v-1)*2]+1)*f,m=(o[(v-1)*2+1]+1)*d,_=(o[v*2]+1)*f,x=(o[v*2+1]+1)*d;if(zu(p,m,_,x,l,e,t)){var y=(p-e)*(p-e)+(m-t)*(m-t),g=(_-e)*(_-e)+(x-t)*(x-t);u=y<g?v-1:v}}if(u>=0){var w=u*3,T=new k(this._points[w],this._points[w+1],this._points[w+2]);a.push({dataIndex:u,point:T,pointWorld:T.clone(),target:this._line3DMesh,distance:this._camera.getWorldPosition().dist(T)})}},remove:function(){this.groupGL.removeAll()},dispose:function(){this.groupGL.removeAll()}});function Kv(e){e.registerChartView(qv),e.registerSeriesModel(Zv),e.registerLayout(function(t,r){t.eachSeriesByType("line3D",function(i){var n=i.getData(),a=i.coordinateSystem;if(a){if(a.type!=="cartesian3D")return;var o=new Float32Array(n.count()*3),s=[],l=[],u=a.dimensions,c=u.map(function(h){return i.coordDimToDataDim(h)[0]});a&&n.each(c,function(h,f,d,v){s[0]=h,s[1]=f,s[2]=d,a.dataToPoint(s,l),o[v*3]=l[0],o[v*3+1]=l[1],o[v*3+2]=l[2]}),n.setLayout("points",o)}})})}st(Kv);const Qv=zt.extend({type:"series.scatter3D",dependencies:["globe","grid3D","geo3D"],visualStyleAccessPath:"itemStyle",hasSymbolVisual:!0,getInitialData:function(e,t){return Kn(this)},getFormattedLabel:function(e,t,r,i){var n=gi.getFormattedLabel(this,e,t,r,i);if(n==null){var a=this.getData(),o=a.dimensions[a.dimensions.length-1];n=a.get(o,e)}return n},formatTooltip:function(e){return Ki(this,e)},defaultOption:{coordinateSystem:"cartesian3D",zlevel:-10,progressive:1e5,progressiveThreshold:1e5,grid3DIndex:0,globeIndex:0,symbol:"circle",symbolSize:10,blendMode:"source-over",label:{show:!1,position:"right",distance:5,textStyle:{fontSize:14,color:"#000",backgroundColor:"rgba(255,255,255,0.7)",padding:3,borderRadius:3}},itemStyle:{opacity:.8},emphasis:{label:{show:!0}},animationDurationUpdate:500}});function wa(e,i,r){var i=i||document.createElement("canvas");i.width=e,i.height=e;var n=i.getContext("2d");return r&&r(n),i}function Jv(e,t,r,i){Xt(t)||(t=[t,t]);var n=mo.getMarginByStyle(r,i),a=t[0]+n.left+n.right,o=t[1]+n.top+n.bottom,s=Gu(e,0,0,t[0],t[1]),l=Math.max(a,o);s.x=n.left,s.y=n.top,a>o?s.y+=(l-o)/2:s.x+=(l-a)/2;var u=s.getBoundingRect();return s.x-=u.x,s.y-=u.y,s.setStyle(r),s.update(),s.__size=l,s}function ep(e,t,r){var i=t.width,n=t.height,a=e.canvas.width,o=e.canvas.height,s=i/a,l=n/o;function u(_){return _<128?1:-1}function c(_,x){var y=1/0;_=Math.floor(_*s),x=Math.floor(x*l);for(var g=x*i+_,w=t.data[g*4],T=u(w),b=Math.max(x-r,0);b<Math.min(x+r,n);b++)for(var S=Math.max(_-r,0);S<Math.min(_+r,i);S++){var g=b*i+S,C=t.data[g*4],L=u(C),A=S-_,M=b-x;if(T!==L){var P=A*A+M*M;P<y&&(y=P)}}return T*Math.sqrt(y)}for(var h=e.createImageData(a,o),f=0;f<o;f++)for(var d=0;d<a;d++){var v=c(d,f),p=v/r*.5+.5,m=(f*a+d)*4;h.data[m++]=(1-p)*255,h.data[m++]=(1-p)*255,h.data[m++]=(1-p)*255,h.data[m++]=255}return h}var mo={getMarginByStyle:function(e){var t=e.minMargin||0,r=0;e.stroke&&e.stroke!=="none"&&(r=e.lineWidth==null?1:e.lineWidth);var i=e.shadowBlur||0,n=e.shadowOffsetX||0,a=e.shadowOffsetY||0,o={};return o.left=Math.max(r/2,-n+i,t),o.right=Math.max(r/2,n+i,t),o.top=Math.max(r/2,-a+i,t),o.bottom=Math.max(r/2,a+i,t),o},createSymbolSprite:function(e,t,r,i){var n=Jv(e,t,r),a=mo.getMarginByStyle(r);return{image:wa(n.__size,i,function(o){zs(o,n)}),margin:a}},createSDFFromCanvas:function(e,t,r,i){return wa(t,i,function(n){var a=e.getContext("2d"),o=a.getImageData(0,0,e.width,e.height);n.putImageData(ep(n,o,r),0,0)})},createSimpleSprite:function(e,t){return wa(e,t,function(r){var i=e/2;r.beginPath(),r.arc(i,i,60,0,Math.PI*2,!1),r.closePath();var n=r.createRadialGradient(i,i,0,i,i,i);n.addColorStop(0,"rgba(255, 255, 255, 1)"),n.addColorStop(.5,"rgba(255, 255, 255, 0.5)"),n.addColorStop(1,"rgba(255, 255, 255, 0)"),r.fillStyle=n,r.fill()})}};const Ss=mo;var bs=We.vec3;const tp={needsSortVertices:function(){return this.sortVertices},needsSortVerticesProgressively:function(){return this.needsSortVertices()&&this.vertexCount>=2e4},doSortVertices:function(e,t){var r=this.indices,i=bs.create();if(!r){r=this.indices=this.vertexCount>65535?new Uint32Array(this.vertexCount):new Uint16Array(this.vertexCount);for(var n=0;n<r.length;n++)r[n]=n}if(t===0){var a=this.attributes.position,e=e.array,o=0;(!this._zList||this._zList.length!==this.vertexCount)&&(this._zList=new Float32Array(this.vertexCount));for(var s,n=0;n<this.vertexCount;n++){a.get(n,i);var l=bs.sqrDist(i,e);isNaN(l)&&(l=1e7,o++),n===0?(s=l,l=0):l=l-s,this._zList[n]=l}this._noneCount=o}if(this.vertexCount<2e4)t===0&&this._simpleSort(this._noneCount/this.vertexCount>.05);else for(var n=0;n<3;n++)this._progressiveQuickSort(t*3+n);this.dirtyIndices()},_simpleSort:function(e){var t=this._zList,r=this.indices;function i(n,a){return t[a]-t[n]}e?Array.prototype.sort.call(r,i):li.sort(r,i,0,r.length-1)},_progressiveQuickSort:function(e){var t=this._zList,r=this.indices;this._quickSort=this._quickSort||new li,this._quickSort.step(r,function(i,n){return t[n]-t[i]},e)}},rp=`@export ecgl.sdfSprite.vertex

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform float elapsedTime : 0;

attribute vec3 position : POSITION;

#ifdef VERTEX_SIZE
attribute float size;
#else
uniform float u_Size;
#endif

#ifdef VERTEX_COLOR
attribute vec4 a_FillColor: COLOR;
varying vec4 v_Color;
#endif

#ifdef VERTEX_ANIMATION
attribute vec3 prevPosition;
attribute float prevSize;
uniform float percent : 1.0;
#endif


#ifdef POSITIONTEXTURE_ENABLED
uniform sampler2D positionTexture;
#endif

varying float v_Size;

void main()
{

#ifdef POSITIONTEXTURE_ENABLED
 gl_Position = worldViewProjection * vec4(texture2D(positionTexture, position.xy).xy, -10.0, 1.0);
#else

 #ifdef VERTEX_ANIMATION
 vec3 pos = mix(prevPosition, position, percent);
 #else
 vec3 pos = position;
 #endif
 gl_Position = worldViewProjection * vec4(pos, 1.0);
#endif

#ifdef VERTEX_SIZE
#ifdef VERTEX_ANIMATION
 v_Size = mix(prevSize, size, percent);
#else
 v_Size = size;
#endif
#else
 v_Size = u_Size;
#endif

#ifdef VERTEX_COLOR
 v_Color = a_FillColor;
 #endif

 gl_PointSize = v_Size;
}

@end

@export ecgl.sdfSprite.fragment

uniform vec4 color: [1, 1, 1, 1];
uniform vec4 strokeColor: [1, 1, 1, 1];
uniform float smoothing: 0.07;

uniform float lineWidth: 0.0;

#ifdef VERTEX_COLOR
varying vec4 v_Color;
#endif

varying float v_Size;

uniform sampler2D sprite;

@import clay.util.srgb

void main()
{
 gl_FragColor = color;

 vec4 _strokeColor = strokeColor;

#ifdef VERTEX_COLOR
 gl_FragColor *= v_Color;
 #endif

#ifdef SPRITE_ENABLED
 float d = texture2D(sprite, gl_PointCoord).r;
 gl_FragColor.a *= smoothstep(0.5 - smoothing, 0.5 + smoothing, d);

 if (lineWidth > 0.0) {
 float sLineWidth = lineWidth / 2.0;

 float outlineMaxValue0 = 0.5 + sLineWidth;
 float outlineMaxValue1 = 0.5 + sLineWidth + smoothing;
 float outlineMinValue0 = 0.5 - sLineWidth - smoothing;
 float outlineMinValue1 = 0.5 - sLineWidth;

 if (d <= outlineMaxValue1 && d >= outlineMinValue0) {
 float a = _strokeColor.a;
 if (d <= outlineMinValue1) {
 a = a * smoothstep(outlineMinValue0, outlineMinValue1, d);
 }
 else {
 a = a * smoothstep(outlineMaxValue1, outlineMaxValue0, d);
 }
 gl_FragColor.rgb = mix(gl_FragColor.rgb * gl_FragColor.a, _strokeColor.rgb, a);
 gl_FragColor.a = gl_FragColor.a * (1.0 - a) + a;
 }
 }
#endif

#ifdef SRGB_DECODE
 gl_FragColor = sRGBToLinear(gl_FragColor);
#endif
}
@end`;var Sa=We.vec4;E.Shader.import(rp);var ip=E.Mesh.extend(function(){var e=new E.Geometry({dynamic:!0,attributes:{color:new E.Geometry.Attribute("color","float",4,"COLOR"),position:new E.Geometry.Attribute("position","float",3,"POSITION"),size:new E.Geometry.Attribute("size","float",1),prevPosition:new E.Geometry.Attribute("prevPosition","float",3),prevSize:new E.Geometry.Attribute("prevSize","float",1)}});Object.assign(e,tp);var t=new E.Material({shader:E.createShader("ecgl.sdfSprite"),transparent:!0,depthMask:!1});t.enableTexture("sprite"),t.define("both","VERTEX_COLOR"),t.define("both","VERTEX_SIZE");var r=new E.Texture2D({image:document.createElement("canvas"),flipY:!1});return t.set("sprite",r),e.pick=this._pick.bind(this),{geometry:e,material:t,mode:E.Mesh.POINTS,sizeScale:1}},{_pick:function(e,t,r,i,n,a){var o=this._positionNDC;if(o)for(var s=r.viewport,l=2/s.width,u=2/s.height,c=this.geometry.vertexCount-1;c>=0;c--){var h;this.geometry.indices?h=this.geometry.indices[c]:h=c;var f=o[h*2],d=o[h*2+1],v=this.geometry.attributes.size.get(h)/this.sizeScale,p=v/2;if(e>f-p*l&&e<f+p*l&&t>d-p*u&&t<d+p*u){var m=new E.Vector3,_=new E.Vector3;this.geometry.attributes.position.get(h,m.array),E.Vector3.transformMat4(_,m,this.worldTransform),a.push({vertexIndex:h,point:m,pointWorld:_,target:this,distance:_.distance(i.getWorldPosition())})}}},updateNDCPosition:function(e,t,r){var i=this._positionNDC,n=this.geometry;(!i||i.length/2!==n.vertexCount)&&(i=this._positionNDC=new Float32Array(n.vertexCount*2));for(var a=Sa.create(),o=0;o<n.vertexCount;o++)n.attributes.position.get(o,a),a[3]=1,Sa.transformMat4(a,a,e.array),Sa.scale(a,a,1/a[3]),i[o*2]=a[0],i[o*2+1]=a[1]}});const np=ip;var Es=20,As=-10;function ap(e,t){return e&&t&&e[0]===t[0]&&e[1]===t[1]}function Ur(e,t){this.rootNode=new E.Node,this.is2D=e,this._labelsBuilder=new or(256,256,t),this._labelsBuilder.getMesh().renderOrder=100,this.rootNode.add(this._labelsBuilder.getMesh()),this._api=t,this._spriteImageCanvas=document.createElement("canvas"),this._startDataIndex=0,this._endDataIndex=0,this._sizeScale=1}Ur.prototype={constructor:Ur,highlightOnMouseover:!0,update:function(e,t,r,i,n){var a=this._prevMesh;this._prevMesh=this._mesh,this._mesh=a;var o=e.getData();if(i==null&&(i=0),n==null&&(n=o.count()),this._startDataIndex=i,this._endDataIndex=n-1,!this._mesh){var s=this._prevMesh&&this._prevMesh.material;this._mesh=new np({renderOrder:10,frustumCulling:!1}),s&&(this._mesh.material=s)}var s=this._mesh.material,l=this._mesh.geometry,u=l.attributes;this.rootNode.remove(this._prevMesh),this.rootNode.add(this._mesh),this._setPositionTextureToMesh(this._mesh,this._positionTexture);var c=this._getSymbolInfo(e,i,n),h=r.getDevicePixelRatio(),f=e.getModel("itemStyle").getItemStyle(),d=e.get("large"),v=1;c.maxSize>2?(v=this._updateSymbolSprite(e,f,c,h),s.enableTexture("sprite")):s.disableTexture("sprite"),u.position.init(n-i);var p=[];if(d){s.undefine("VERTEX_SIZE"),s.undefine("VERTEX_COLOR");var m=Gd(o),_=Vd(o);E.parseColor(m,p),p[3]*=_,s.set({color:p,u_Size:c.maxSize*this._sizeScale})}else s.set({color:[1,1,1,1]}),s.define("VERTEX_SIZE"),s.define("VERTEX_COLOR"),u.size.init(n-i),u.color.init(n-i),this._originalOpacity=new Float32Array(n-i);for(var x=o.getLayout("points"),y=u.position.value,g=0;g<n-i;g++){var w=g*3,T=g*2;if(this.is2D?(y[w]=x[T],y[w+1]=x[T+1],y[w+2]=As):(y[w]=x[w],y[w+1]=x[w+1],y[w+2]=x[w+2]),!d){var m=rt(o,g),_=tt(o,g);E.parseColor(m,p),p[3]*=_,u.color.set(g,p),p[3]<.99;var b=o.getItemVisual(g,"symbolSize");b=b instanceof Array?Math.max(b[0],b[1]):b,isNaN(b)&&(b=0),u.size.value[g]=b*v*this._sizeScale,this._originalOpacity[g]=p[3]}}this._mesh.sizeScale=v,l.updateBoundingBox(),l.dirty(),this._updateMaterial(e,f);var S=e.coordinateSystem;if(S&&S.viewGL){var C=S.viewGL.isLinearSpace()?"define":"undefine";s[C]("fragment","SRGB_DECODE")}d||this._updateLabelBuilder(e,i,n),this._updateHandler(e,t,r),this._updateAnimation(e),this._api=r},getPointsMesh:function(){return this._mesh},updateLabels:function(e){this._labelsBuilder.updateLabels(e)},hideLabels:function(){this.rootNode.remove(this._labelsBuilder.getMesh())},showLabels:function(){this.rootNode.add(this._labelsBuilder.getMesh())},dispose:function(){this._labelsBuilder.dispose()},_updateSymbolSprite:function(e,t,r,i){r.maxSize=Math.min(r.maxSize*2,200);var n=[];return r.aspect>1?(n[0]=r.maxSize,n[1]=r.maxSize/r.aspect):(n[1]=r.maxSize,n[0]=r.maxSize*r.aspect),n[0]=n[0]||1,n[1]=n[1]||1,(this._symbolType!==r.type||!ap(this._symbolSize,n)||this._lineWidth!==t.lineWidth)&&(Ss.createSymbolSprite(r.type,n,{fill:"#fff",lineWidth:t.lineWidth,stroke:"transparent",shadowColor:"transparent",minMargin:Math.min(n[0]/2,10)},this._spriteImageCanvas),Ss.createSDFFromCanvas(this._spriteImageCanvas,Math.min(this._spriteImageCanvas.width,32),Es,this._mesh.material.get("sprite").image),this._symbolType=r.type,this._symbolSize=n,this._lineWidth=t.lineWidth),this._spriteImageCanvas.width/r.maxSize*i},_updateMaterial:function(e,t){var r=e.get("blendMode")==="lighter"?E.additiveBlend:null,i=this._mesh.material;i.blend=r,i.set("lineWidth",t.lineWidth/Es);var n=E.parseColor(t.stroke);i.set("strokeColor",n),i.transparent=!0,i.depthMask=!1,i.depthTest=!this.is2D,i.sortVertices=!this.is2D},_updateLabelBuilder:function(e,o,r){var i=e.getData(),n=this._mesh.geometry,a=n.attributes.position.value,o=this._startDataIndex,s=this._mesh.sizeScale;this._labelsBuilder.updateData(i,o,r),this._labelsBuilder.getLabelPosition=function(l,u,c){var h=(l-o)*3;return[a[h],a[h+1],a[h+2]]},this._labelsBuilder.getLabelDistance=function(l,u,c){var h=n.attributes.size.get(l-o)/s;return h/2+c},this._labelsBuilder.updateLabels()},_updateAnimation:function(e){E.updateVertexAnimation([["prevPosition","position"],["prevSize","size"]],this._prevMesh,this._mesh,e)},_updateHandler:function(e,t,r){var i=e.getData(),n=this._mesh,a=this,o=-1,s=e.coordinateSystem&&e.coordinateSystem.type==="cartesian3D",l;s&&(l=e.coordinateSystem.model),n.seriesIndex=e.seriesIndex,n.off("mousemove"),n.off("mouseout"),n.on("mousemove",function(u){var c=u.vertexIndex+a._startDataIndex;c!==o&&(this.highlightOnMouseover&&(this.downplay(i,o),this.highlight(i,c),this._labelsBuilder.updateLabels([c])),s&&r.dispatchAction({type:"grid3DShowAxisPointer",value:[i.get(e.coordDimToDataDim("x")[0],c),i.get(e.coordDimToDataDim("y")[0],c),i.get(e.coordDimToDataDim("z")[0],c)],grid3DIndex:l.componentIndex})),n.dataIndex=c,o=c},this),n.on("mouseout",function(u){var c=u.vertexIndex+a._startDataIndex;this.highlightOnMouseover&&(this.downplay(i,c),this._labelsBuilder.updateLabels()),o=-1,n.dataIndex=-1,s&&r.dispatchAction({type:"grid3DHideAxisPointer",grid3DIndex:l.componentIndex})},this)},updateLayout:function(e,t,r){var i=e.getData();if(this._mesh){var n=this._mesh.geometry.attributes.position.value,a=i.getLayout("points");if(this.is2D)for(var o=0;o<a.length/2;o++){var s=o*3,l=o*2;n[s]=a[l],n[s+1]=a[l+1],n[s+2]=As}else for(var o=0;o<a.length;o++)n[o]=a[o];this._mesh.geometry.dirty(),r.getZr().refresh()}},updateView:function(e){if(this._mesh){var t=new q;q.mul(t,e.viewMatrix,this._mesh.worldTransform),q.mul(t,e.projectionMatrix,t),this._mesh.updateNDCPosition(t,this.is2D,this._api)}},highlight:function(e,t){if(!(t>this._endDataIndex||t<this._startDataIndex)){var r=e.getItemModel(t),i=r.getModel("emphasis.itemStyle"),n=i.get("color"),a=i.get("opacity");if(n==null){var o=rt(e,t);n=$a(o,-.4)}a==null&&(a=tt(e,t));var s=E.parseColor(n);s[3]*=a,this._mesh.geometry.attributes.color.set(t-this._startDataIndex,s),this._mesh.geometry.dirtyAttribute("color"),this._api.getZr().refresh()}},downplay:function(e,t){if(!(t>this._endDataIndex||t<this._startDataIndex)){var r=rt(e,t),i=tt(e,t),n=E.parseColor(r);n[3]*=i,this._mesh.geometry.attributes.color.set(t-this._startDataIndex,n),this._mesh.geometry.dirtyAttribute("color"),this._api.getZr().refresh()}},fadeOutAll:function(e){if(this._originalOpacity){for(var t=this._mesh.geometry,r=0;r<t.vertexCount;r++){var i=this._originalOpacity[r]*e;t.attributes.color.value[r*4+3]=i}t.dirtyAttribute("color"),this._api.getZr().refresh()}},fadeInAll:function(){this.fadeOutAll(1)},setPositionTexture:function(e){this._mesh&&this._setPositionTextureToMesh(this._mesh,e),this._positionTexture=e},removePositionTexture:function(){this._positionTexture=null,this._mesh&&this._setPositionTextureToMesh(this._mesh,null)},setSizeScale:function(e){if(e!==this._sizeScale){if(this._mesh){var t=this._mesh.material.get("u_Size");this._mesh.material.set("u_Size",t/this._sizeScale*e);var r=this._mesh.geometry.attributes;if(r.size.value)for(var i=0;i<r.size.value.length;i++)r.size.value[i]=r.size.value[i]/this._sizeScale*e}this._sizeScale=e}},_setPositionTextureToMesh:function(e,t){t&&e.material.set("positionTexture",t),e.material[t?"enableTexture":"disableTexture"]("positionTexture")},_getSymbolInfo:function(e,t,r){if(e.get("large")){var i=ce.firstNotNull(e.get("symbolSize"),1),s,a;return i instanceof Array?(s=Math.max(i[0],i[1]),a=i[0]/i[1]):(s=i,a=1),{maxSize:i,type:e.get("symbol"),aspect:a}}for(var n=e.getData(),a,o=n.getItemVisual(0,"symbol")||"circle",s=0,l=t;l<r;l++){var i=n.getItemVisual(l,"symbolSize"),u=n.getItemVisual(l,"symbol"),c;if(i instanceof Array)c=i[0]/i[1],s=Math.max(Math.max(i[0],i[1]),s);else{if(isNaN(i))continue;c=1,s=Math.max(i,s)}o=u,a=c}return{maxSize:s,type:o,aspect:a}}};const op=Gt.extend({type:"scatter3D",hasSymbolVisual:!0,__ecgl__:!0,init:function(e,t){this.groupGL=new E.Node,this._pointsBuilderList=[],this._currentStep=0},render:function(e,t,r){if(this.groupGL.removeAll(),!!e.getData().count()){var i=e.coordinateSystem;if(i&&i.viewGL){i.viewGL.add(this.groupGL),this._camera=i.viewGL.camera;var n=this._pointsBuilderList[0];n||(n=this._pointsBuilderList[0]=new Ur(!1,r)),this._pointsBuilderList.length=1,this.groupGL.add(n.rootNode),n.update(e,t,r),n.updateView(i.viewGL.camera)}}},incrementalPrepareRender:function(e,t,r){var i=e.coordinateSystem;i&&i.viewGL&&(i.viewGL.add(this.groupGL),this._camera=i.viewGL.camera),this.groupGL.removeAll(),this._currentStep=0},incrementalRender:function(e,t,r,i){if(!(e.end<=e.start)){var n=this._pointsBuilderList[this._currentStep];n||(n=new Ur(!1,i),this._pointsBuilderList[this._currentStep]=n),this.groupGL.add(n.rootNode),n.update(t,r,i,e.start,e.end),n.updateView(t.coordinateSystem.viewGL.camera),this._currentStep++}},updateCamera:function(){this._pointsBuilderList.forEach(function(e){e.updateView(this._camera)},this)},highlight:function(e,t,r,i){this._toggleStatus("highlight",e,t,r,i)},downplay:function(e,t,r,i){this._toggleStatus("downplay",e,t,r,i)},_toggleStatus:function(e,t,r,i,n){var a=t.getData(),o=ce.queryDataIndex(a,n),s=e==="highlight";o!=null?$t(gi.normalizeToArray(o),function(l){for(var u=0;u<this._pointsBuilderList.length;u++){var c=this._pointsBuilderList[u];s?c.highlight(a,l):c.downplay(a,l)}},this):a.each(function(l){for(var u=0;u<this._pointsBuilderList.length;u++){var c=this._pointsBuilderList[u];s?c.highlight(a,l):c.downplay(a,l)}})},dispose:function(){this._pointsBuilderList.forEach(function(e){e.dispose()}),this.groupGL.removeAll()},remove:function(){this.groupGL.removeAll()}});function sp(e){e.registerChartView(op),e.registerSeriesModel(Qv),e.registerLayout({seriesType:"scatter3D",reset:function(t){var r=t.coordinateSystem;if(r){var i=r.dimensions;if(i.length<3)return;var n=i.map(function(s){return t.coordDimToDataDim(s)[0]}),a=[],o=[];return{progress:function(s,l){for(var u=new Float32Array((s.end-s.start)*3),c=s.start;c<s.end;c++){var h=(c-s.start)*3;a[0]=l.get(n[0],c),a[1]=l.get(n[1],c),a[2]=l.get(n[2],c),r.dataToPoint(a,o),u[h]=o[0],u[h+1]=o[1],u[h+2]=o[2]}l.setLayout("points",u)}}}}})}st(sp);var qe=We.vec3,Cs=We.vec2,Yt=qe.normalize,fn=qe.cross,Ls=qe.sub,ba=qe.add,vr=qe.create,hr=vr(),Dt=vr(),fr=vr(),Ci=vr(),Ds=[],Ms=[];function lp(e,t){Cs.copy(Ds,e[0]),Cs.copy(Ms,e[1]);var r=[],i=r[0]=vr(),n=r[1]=vr(),a=r[2]=vr(),o=r[3]=vr();t.dataToPoint(Ds,i),t.dataToPoint(Ms,o),Yt(hr,i),Ls(Dt,o,i),Yt(Dt,Dt),fn(fr,Dt,hr),Yt(fr,fr),fn(Dt,hr,fr),ba(n,hr,Dt),Yt(n,n),Yt(hr,o),Ls(Dt,i,o),Yt(Dt,Dt),fn(fr,Dt,hr),Yt(fr,fr),fn(Dt,hr,fr),ba(a,hr,Dt),Yt(a,a),ba(Ci,i,o),Yt(Ci,Ci);var s=qe.dot(i,Ci),l=qe.dot(Ci,n),u=(Math.max(qe.len(i),qe.len(o))-s)/l*2;return qe.scaleAndAdd(n,i,n,u),qe.scaleAndAdd(a,o,a,u),r}function up(e,t,r){var i=[],n=i[0]=qe.create(),a=i[1]=qe.create(),o=i[2]=qe.create(),s=i[3]=qe.create();t.dataToPoint(e[0],n),t.dataToPoint(e[1],s);var l=qe.dist(n,s);return qe.lerp(a,n,s,.3),qe.lerp(o,n,s,.3),qe.scaleAndAdd(a,a,r,Math.min(l*.1,10)),qe.scaleAndAdd(o,o,r,Math.min(l*.1,10)),i}function ou(e,t){for(var r=new Float32Array(e.length*3),i=0,n=[],a=0;a<e.length;a++)t.dataToPoint(e[a],n),r[i++]=n[0],r[i++]=n[1],r[i++]=n[2];return r}function su(e){var t=[];return e.each(function(r){var i=e.getItemModel(r),n=i.option instanceof Array?i.option:i.getShallow("coords",!0);t.push(n)}),{coordsList:t}}function cp(e,t){var r=e.getData(),i=e.get("polyline");r.setLayout("lineType",i?"polyline":"cubicBezier");var n=su(r);r.each(function(a){var o=n.coordsList[a],s=i?ou:lp;r.setItemLayout(a,s(o,t))})}function Ps(e,t,r){var i=e.getData(),n=e.get("polyline"),a=su(i);i.setLayout("lineType",n?"polyline":"cubicBezier"),i.each(function(o){var s=a.coordsList[o],l=n?ou(s,t):up(s,t,r);i.setItemLayout(o,l)})}function hp(e,t){e.eachSeriesByType("lines3D",function(r){var i=r.coordinateSystem;i.type==="globe"?cp(r,i):i.type==="geo3D"?Ps(r,i,[0,1,0]):(i.type==="mapbox3D"||i.type==="maptalks3D")&&Ps(r,i,[0,0,1])})}const fp=zt.extend({type:"series.lines3D",dependencies:["globe"],visualStyleAccessPath:"lineStyle",visualDrawType:"stroke",getInitialData:function(e,t){var r=new jt(["value"],this);return r.hasItemOption=!1,r.initData(e.data,[],function(i,n,a,o){if(i instanceof Array)return NaN;r.hasItemOption=!0;var s=i.value;if(s!=null)return s instanceof Array?s[o]:s}),r},defaultOption:{coordinateSystem:"globe",globeIndex:0,geo3DIndex:0,zlevel:-10,polyline:!1,effect:{show:!1,period:4,trailWidth:4,trailLength:.2,spotIntensity:6},silent:!0,blendMode:"source-over",lineStyle:{width:1,opacity:.5}}}),dp=`@export ecgl.trail2.vertex
attribute vec3 position: POSITION;
attribute vec3 positionPrev;
attribute vec3 positionNext;
attribute float offset;
attribute float dist;
attribute float distAll;
attribute float start;

attribute vec4 a_Color : COLOR;

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform vec4 viewport : VIEWPORT;
uniform float near : NEAR;

uniform float speed : 0;
uniform float trailLength: 0.3;
uniform float time;
uniform float period: 1000;

uniform float spotSize: 1;

varying vec4 v_Color;
varying float v_Percent;
varying float v_SpotPercent;

@import ecgl.common.wireframe.vertexHeader

@import ecgl.lines3D.clipNear

void main()
{
 @import ecgl.lines3D.expandLine

 gl_Position = currProj;

 v_Color = a_Color;

 @import ecgl.common.wireframe.vertexMain

#ifdef CONSTANT_SPEED
 float t = mod((speed * time + start) / distAll, 1. + trailLength) - trailLength;
#else
 float t = mod((time + start) / period, 1. + trailLength) - trailLength;
#endif

 float trailLen = distAll * trailLength;

 v_Percent = (dist - t * distAll) / trailLen;

 v_SpotPercent = spotSize / distAll;

 }
@end


@export ecgl.trail2.fragment

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];
uniform float spotIntensity: 5;

varying vec4 v_Color;
varying float v_Percent;
varying float v_SpotPercent;

@import ecgl.common.wireframe.fragmentHeader

@import clay.util.srgb

void main()
{
 if (v_Percent > 1.0 || v_Percent < 0.0) {
 discard;
 }

 float fade = v_Percent;

#ifdef SRGB_DECODE
 gl_FragColor = sRGBToLinear(color * v_Color);
#else
 gl_FragColor = color * v_Color;
#endif

 @import ecgl.common.wireframe.fragmentMain

 if (v_Percent > (1.0 - v_SpotPercent)) {
 gl_FragColor.rgb *= spotIntensity;
 }

 gl_FragColor.a *= fade;
}

@end`;var Rs=We.vec3;function vp(e){return e>0?1:-1}E.Shader.import(dp);const pp=E.Mesh.extend(function(){var e=new E.Material({shader:new E.Shader(E.Shader.source("ecgl.trail2.vertex"),E.Shader.source("ecgl.trail2.fragment")),transparent:!0,depthMask:!1}),t=new kr({dynamic:!0});return t.createAttribute("dist","float",1),t.createAttribute("distAll","float",1),t.createAttribute("start","float",1),{geometry:t,material:e,culling:!1,$ignorePicking:!0}},{updateData:function(e,t,r){var i=e.hostModel,n=this.geometry,a=i.getModel("effect"),o=a.get("trailWidth")*t.getDevicePixelRatio(),s=a.get("trailLength"),l=i.get("effect.constantSpeed"),u=i.get("effect.period")*1e3,c=l!=null;c?this.material.set("speed",l/1e3):this.material.set("period",u),this.material[c?"define":"undefine"]("vertex","CONSTANT_SPEED");var h=i.get("polyline");n.trailLength=s,this.material.set("trailLength",s),n.resetOffset(),["position","positionPrev","positionNext"].forEach(function(b){n.attributes[b].value=r.attributes[b].value});var f=["dist","distAll","start","offset","color"];f.forEach(function(b){n.attributes[b].init(n.vertexCount)}),n.indices=r.indices;var d=[],v=a.get("trailColor"),p=a.get("trailOpacity"),m=v!=null,_=p!=null;this.updateWorldTransform();var x=this.worldTransform.x.len(),y=this.worldTransform.y.len(),g=this.worldTransform.z.len(),w=0,T=0;e.each(function(b){var S=e.getItemLayout(b),C=_?p:tt(e,b),L=rt(e,b);C==null&&(C=1),d=E.parseColor(m?v:L,d),d[3]*=C;for(var A=h?r.getPolylineVertexCount(S):r.getCubicCurveVertexCount(S[0],S[1],S[2],S[3]),M=0,P=[],D=[],N=w;N<w+A;N++)n.attributes.position.get(N,P),P[0]*=x,P[1]*=y,P[2]*=g,N>w&&(M+=Rs.dist(P,D)),n.attributes.dist.set(N,M),Rs.copy(D,P);T=Math.max(T,M);for(var U=Math.random()*(c?M:u),N=w;N<w+A;N++)n.attributes.distAll.set(N,M),n.attributes.start.set(N,U),n.attributes.offset.set(N,vp(r.attributes.offset.get(N))*o/2),n.attributes.color.set(N,d);w+=A}),this.material.set("spotSize",T*.1*s),this.material.set("spotIntensity",a.get("spotIntensity")),n.dirty()},setAnimationTime:function(e){this.material.set("time",e)}});E.Shader.import(qn);function mp(e){return e.radius!=null?e.radius:e.size!=null?Math.max(e.size[0],e.size[1],e.size[2]):100}const _p=Gt.extend({type:"lines3D",__ecgl__:!0,init:function(e,t){this.groupGL=new E.Node,this._meshLinesMaterial=new E.Material({shader:E.createShader("ecgl.meshLines3D"),transparent:!0,depthMask:!1}),this._linesMesh=new E.Mesh({geometry:new kr,material:this._meshLinesMaterial,$ignorePicking:!0}),this._trailMesh=new pp},render:function(e,t,r){this.groupGL.add(this._linesMesh);var i=e.coordinateSystem,n=e.getData();if(i&&i.viewGL){var a=i.viewGL;a.add(this.groupGL),this._updateLines(e,t,r);var o=i.viewGL.isLinearSpace()?"define":"undefine";this._linesMesh.material[o]("fragment","SRGB_DECODE"),this._trailMesh.material[o]("fragment","SRGB_DECODE")}var s=this._trailMesh;if(s.stopAnimation(),e.get("effect.show")){this.groupGL.add(s),s.updateData(n,r,this._linesMesh.geometry),s.__time=s.__time||0;var l=3600*1e3;this._curveEffectsAnimator=s.animate("",{loop:!0}).when(l,{__time:l}).during(function(){s.setAnimationTime(s.__time)}).start()}else this.groupGL.remove(s),this._curveEffectsAnimator=null;this._linesMesh.material.blend=this._trailMesh.material.blend=e.get("blendMode")==="lighter"?E.additiveBlend:null},pauseEffect:function(){this._curveEffectsAnimator&&this._curveEffectsAnimator.pause()},resumeEffect:function(){this._curveEffectsAnimator&&this._curveEffectsAnimator.resume()},toggleEffect:function(){var e=this._curveEffectsAnimator;e&&(e.isPaused()?e.resume():e.pause())},_updateLines:function(e,t,r){var i=e.getData(),n=e.coordinateSystem,a=this._linesMesh.geometry,o=e.get("polyline");a.expandLine=!0;var s=mp(n);a.segmentScale=s/20;var l="lineStyle.width".split("."),u=r.getDevicePixelRatio();i.each(function(d){var v=i.getItemModel(d),p=v.get(l);p==null&&(p=1),i.setItemVisual(d,"lineWidth",p)}),a.useNativeLine=!1;var c=0,h=0;i.each(function(d){var v=i.getItemLayout(d);o?(c+=a.getPolylineVertexCount(v),h+=a.getPolylineTriangleCount(v)):(c+=a.getCubicCurveVertexCount(v[0],v[1],v[2],v[3]),h+=a.getCubicCurveTriangleCount(v[0],v[1],v[2],v[3]))}),a.setVertexCount(c),a.setTriangleCount(h),a.resetOffset();var f=[];i.each(function(d){var v=i.getItemLayout(d),p=rt(i,d),m=tt(i,d),_=i.getItemVisual(d,"lineWidth")*u;m==null&&(m=1),f=E.parseColor(p,f),f[3]*=m,o?a.addPolyline(v,f,_):a.addCubicCurve(v[0],v[1],v[2],v[3],f,_)}),a.dirty()},remove:function(){this.groupGL.removeAll()},dispose:function(){this.groupGL.removeAll()}});function gp(e){e.registerChartView(_p),e.registerSeriesModel(fp),e.registerLayout(hp),e.registerAction({type:"lines3DPauseEffect",event:"lines3deffectpaused",update:"series.lines3D:pauseEffect"},function(){}),e.registerAction({type:"lines3DResumeEffect",event:"lines3deffectresumed",update:"series.lines3D:resumeEffect"},function(){}),e.registerAction({type:"lines3DToggleEffect",event:"lines3deffectchanged",update:"series.lines3D:toggleEffect"},function(){})}st(gp);function Ns(e,t){for(var r=[],i=0;i<t.length;i++)r.push(e.dataToPoint(t[i]));return r}var lu=zt.extend({type:"series.polygons3D",getRegionModel:function(e){return this.getData().getItemModel(e)},getRegionPolygonCoords:function(e){var t=this.coordinateSystem,r=this.getData().getItemModel(e),i=r.option instanceof Array?r.option:r.getShallow("coords");r.get("multiPolygon")||(i=[i]);for(var n=[],a=0;a<i.length;a++){for(var o=[],s=1;s<i[a].length;s++)o.push(Ns(t,i[a][s]));n.push({exterior:Ns(t,i[a][0]),interiors:o})}return n},getInitialData:function(e){var t=new jt(["value"],this);return t.hasItemOption=!1,t.initData(e.data,[],function(r,i,n,a){if(r instanceof Array)return NaN;t.hasItemOption=!0;var o=r.value;if(o!=null)return o instanceof Array?o[a]:o}),t},defaultOption:{show:!0,data:null,multiPolygon:!1,progressiveThreshold:1e3,progressive:1e3,zlevel:-10,label:{show:!1,distance:2,textStyle:{fontSize:20,color:"#000",backgroundColor:"rgba(255,255,255,0.7)",padding:3,borderRadius:4}},itemStyle:{color:"#fff",borderWidth:0,borderColor:"#333"},emphasis:{itemStyle:{color:"#639fc0"},label:{show:!0}}}});Ee(lu.prototype,mi);const yp=lu,xp=Gt.extend({type:"polygons3D",__ecgl__:!0,init:function(e,t){this.groupGL=new E.Node,this._geo3DBuilderList=[],this._currentStep=0},render:function(e,t,r){this.groupGL.removeAll();var i=e.coordinateSystem;i&&i.viewGL&&i.viewGL.add(this.groupGL);var n=this._geo3DBuilderList[0];n||(n=new ui(r),n.extrudeY=i.type!=="mapbox3D"&&i.type!=="maptalks3D",this._geo3DBuilderList[0]=n),this._updateShaderDefines(i,n),n.update(e,t,r),this._geo3DBuilderList.length=1,this.groupGL.add(n.rootNode)},incrementalPrepareRender:function(e,t,r){this.groupGL.removeAll();var i=e.coordinateSystem;i&&i.viewGL&&i.viewGL.add(this.groupGL),this._currentStep=0},incrementalRender:function(e,t,r,i){var n=this._geo3DBuilderList[this._currentStep],a=t.coordinateSystem;n||(n=new ui(i),n.extrudeY=a.type!=="mapbox3D"&&a.type!=="maptalks3D",this._geo3DBuilderList[this._currentStep]=n),n.update(t,r,i,e.start,e.end),this.groupGL.add(n.rootNode),this._updateShaderDefines(a,n),this._currentStep++},_updateShaderDefines:function(e,t){var r=e.viewGL.isLinearSpace()?"define":"undefine";t.rootNode.traverse(function(i){i.material&&(i.material[r]("fragment","SRGB_DECODE"),(e.type==="mapbox3D"||e.type==="maptalks3D")&&(i.material.define("fragment","NORMAL_UP_AXIS",2),i.material.define("fragment","NORMAL_FRONT_AXIS",1)))})},remove:function(){this.groupGL.removeAll()},dispose:function(){this.groupGL.removeAll(),this._geo3DBuilderList.forEach(function(e){e.dispose()})}});function Tp(e){e.registerChartView(xp),e.registerSeriesModel(yp)}st(Tp);var uu=zt.extend({type:"series.surface",dependencies:["globe","grid3D","geo3D"],visualStyleAccessPath:"itemStyle",formatTooltip:function(e){return Ki(this,e)},getInitialData:function(e,t){var r=e.data;function i(W){return!(isNaN(W.min)||isNaN(W.max)||isNaN(W.step))}function n(W){var z=Gs;return Math.max(z(W.min),z(W.max),z(W.step))+1}if(!r)if(e.parametric){var g=e.parametricEquation||{},w=g.u||{},T=g.v||{};["u","v"].forEach(function(z){i(g[z])}),["x","y","z"].forEach(function(z){g[z]});var b=Math.floor((w.max+w.step-w.min)/w.step),S=Math.floor((T.max+T.step-T.min)/T.step);r=new Float32Array(b*S*5);for(var C=n(w),L=n(T),f=0,d=0;d<S;d++)for(var v=0;v<b;v++){var A=v*w.step+w.min,M=d*T.step+T.min,P=Ji(Math.min(A,w.max),C),D=Ji(Math.min(M,T.max),L),p=g.x(P,D),m=g.y(P,D),y=g.z(P,D);r[f++]=p,r[f++]=m,r[f++]=y,r[f++]=P,r[f++]=D}}else{var a=e.equation||{},o=a.x||{},s=a.y||{};if(["x","y"].forEach(function(W){i(a[W])}),typeof a.z!="function")return;var l=Math.floor((o.max+o.step-o.min)/o.step),u=Math.floor((s.max+s.step-s.min)/s.step);r=new Float32Array(l*u*3);for(var c=n(o),h=n(s),f=0,d=0;d<u;d++)for(var v=0;v<l;v++){var p=v*o.step+o.min,m=d*s.step+s.min,_=Ji(Math.min(p,o.max),c),x=Ji(Math.min(m,s.max),h),y=a.z(_,x);r[f++]=_,r[f++]=x,r[f++]=y}}var N=["x","y","z"];e.parametric&&N.push("u","v");var U=Kn(this,N,r);return U},defaultOption:{coordinateSystem:"cartesian3D",zlevel:-10,grid3DIndex:0,shading:"lambert",parametric:!1,wireframe:{show:!0,lineStyle:{color:"rgba(0,0,0,0.5)",width:1}},equation:{x:{min:-1,max:1,step:.1},y:{min:-1,max:1,step:.1},z:null},parametricEquation:{u:{min:-1,max:1,step:.1},v:{min:-1,max:1,step:.1},x:null,y:null,z:null},dataShape:null,itemStyle:{},animationDurationUpdate:500}});Ee(uu.prototype,mi);const wp=uu;var Dr=We.vec3;function Sp(e){return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])}const bp=Gt.extend({type:"surface",__ecgl__:!0,init:function(e,t){this.groupGL=new E.Node},render:function(e,t,r){var i=this._prevSurfaceMesh;this._prevSurfaceMesh=this._surfaceMesh,this._surfaceMesh=i,this._surfaceMesh||(this._surfaceMesh=this._createSurfaceMesh()),this.groupGL.remove(this._prevSurfaceMesh),this.groupGL.add(this._surfaceMesh);var n=e.coordinateSystem,a=e.get("shading"),o=e.getData(),s="ecgl."+a;if((!this._surfaceMesh.material||this._surfaceMesh.material.shader.name!==s)&&(this._surfaceMesh.material=E.createMaterial(s,["VERTEX_COLOR","DOUBLE_SIDED"])),E.setMaterialFromModel(a,this._surfaceMesh.material,e,r),n&&n.viewGL){n.viewGL.add(this.groupGL);var l=n.viewGL.isLinearSpace()?"define":"undefine";this._surfaceMesh.material[l]("fragment","SRGB_DECODE")}var u=e.get("parametric"),c=e.get("dataShape");c||(c=this._getDataShape(o,u));var h=e.getModel("wireframe"),f=h.get("lineStyle.width"),d=h.get("show")&&f>0;this._updateSurfaceMesh(this._surfaceMesh,e,c,d);var v=this._surfaceMesh.material;d?(v.define("WIREFRAME_QUAD"),v.set("wireframeLineWidth",f),v.set("wireframeLineColor",E.parseColor(h.get("lineStyle.color")))):v.undefine("WIREFRAME_QUAD"),this._initHandler(e,r),this._updateAnimation(e)},_updateAnimation:function(e){E.updateVertexAnimation([["prevPosition","position"],["prevNormal","normal"]],this._prevSurfaceMesh,this._surfaceMesh,e)},_createSurfaceMesh:function(){var e=new E.Mesh({geometry:new E.Geometry({dynamic:!0,sortTriangles:!0}),shadowDepthMaterial:new E.Material({shader:new E.Shader(E.Shader.source("ecgl.sm.depth.vertex"),E.Shader.source("ecgl.sm.depth.fragment"))}),culling:!1,renderOrder:10,renderNormal:!0});return e.geometry.createAttribute("barycentric","float",4),e.geometry.createAttribute("prevPosition","float",3),e.geometry.createAttribute("prevNormal","float",3),Object.assign(e.geometry,lo),e},_initHandler:function(e,t){var r=e.getData(),i=this._surfaceMesh,n=e.coordinateSystem;function a(s,l){for(var u=1/0,c=-1,h=[],f=0;f<s.length;f++){i.geometry.attributes.position.get(s[f],h);var d=Dr.dist(l.array,h);d<u&&(u=d,c=s[f])}return c}i.seriesIndex=e.seriesIndex;var o=-1;i.off("mousemove"),i.off("mouseout"),i.on("mousemove",function(s){var l=a(s.triangle,s.point);if(l>=0){var u=[];i.geometry.attributes.position.get(l,u);for(var c=n.pointToData(u),h=1/0,f=-1,d=[],v=0;v<r.count();v++){d[0]=r.get("x",v),d[1]=r.get("y",v),d[2]=r.get("z",v);var p=Dr.squaredDistance(d,c);p<h&&(f=v,h=p)}f!==o&&t.dispatchAction({type:"grid3DShowAxisPointer",value:c}),o=f,i.dataIndex=f}else i.dataIndex=-1},this),i.on("mouseout",function(s){o=-1,i.dataIndex=-1,t.dispatchAction({type:"grid3DHideAxisPointer"})},this)},_updateSurfaceMesh:function(e,t,r,i){var n=e.geometry,a=t.getData(),o=a.getLayout("points"),s=0;a.each(function(ve){a.hasValue(ve)||s++});var l=s||i,u=n.attributes.position,c=n.attributes.normal,h=n.attributes.texcoord0,f=n.attributes.barycentric,d=n.attributes.color,v=r[0],p=r[1],m=t.get("shading"),_=m!=="color";if(l){var x=(v-1)*(p-1)*4;u.init(x),i&&f.init(x)}else u.value=new Float32Array(o);d.init(n.vertexCount),h.init(n.vertexCount);var y=[0,3,1,1,3,2],g=[[1,1,0,0],[0,1,0,1],[1,0,0,1],[1,0,1,0]],w=n.indices=new(n.vertexCount>65535?Uint32Array:Uint16Array)((v-1)*(p-1)*6),T=function(ve,Ze,Ie){Ie[1]=ve*p+Ze,Ie[0]=ve*p+Ze+1,Ie[3]=(ve+1)*p+Ze+1,Ie[2]=(ve+1)*p+Ze},b=!1;if(l){var S=[],C=[],L=0;_?c.init(n.vertexCount):c.value=null;for(var A=[[],[],[]],M=[],P=[],D=Dr.create(),N=function(ve,Ze,Ie){var He=Ze*3;return Ie[0]=ve[He],Ie[1]=ve[He+1],Ie[2]=ve[He+2],Ie},U=new Float32Array(o.length),W=new Float32Array(o.length/3*4),z=0;z<a.count();z++)if(a.hasValue(z)){var Le=E.parseColor(rt(a,z)),$=tt(a,z);$!=null&&(Le[3]*=$),Le[3]<.99&&(b=!0);for(var G=0;G<4;G++)W[z*4+G]=Le[G]}for(var ne=[1e7,1e7,1e7],z=0;z<v-1;z++)for(var B=0;B<p-1;B++){var I=z*(p-1)+B,Y=I*4;T(z,B,S);for(var X=!1,G=0;G<4;G++)N(o,S[G],C),Sp(C)&&(X=!0);for(var G=0;G<4;G++)X?u.set(Y+G,ne):(N(o,S[G],C),u.set(Y+G,C)),i&&f.set(Y+G,g[G]);for(var G=0;G<6;G++)w[L++]=y[G]+Y;if(_&&!X)for(var G=0;G<2;G++){for(var Te=G*3,ue=0;ue<3;ue++){var he=S[y[Te]+ue];N(o,he,A[ue])}Dr.sub(M,A[0],A[1]),Dr.sub(P,A[1],A[2]),Dr.cross(D,M,P);for(var ue=0;ue<3;ue++){var we=S[y[Te]+ue]*3;U[we]=U[we]+D[0],U[we+1]=U[we+1]+D[1],U[we+2]=U[we+2]+D[2]}}}if(_)for(var z=0;z<U.length/3;z++)N(U,z,D),Dr.normalize(D,D),U[z*3]=D[0],U[z*3+1]=D[1],U[z*3+2]=D[2];for(var Le=[],Pe=[],z=0;z<v-1;z++)for(var B=0;B<p-1;B++){var I=z*(p-1)+B,Y=I*4;T(z,B,S);for(var G=0;G<4;G++){for(var ue=0;ue<4;ue++)Le[ue]=W[S[G]*4+ue];d.set(Y+G,Le),_&&(N(U,S[G],D),c.set(Y+G,D));var he=S[G];Pe[0]=he%p/(p-1),Pe[1]=Math.floor(he/p)/(v-1),h.set(Y+G,Pe)}I++}}else{for(var Pe=[],z=0;z<a.count();z++){Pe[0]=z%p/(p-1),Pe[1]=Math.floor(z/p)/(v-1);var Le=E.parseColor(rt(a,z)),$=tt(a,z);$!=null&&(Le[3]*=$),Le[3]<.99&&(b=!0),d.set(z,Le),h.set(z,Pe)}for(var S=[],Lt=0,z=0;z<v-1;z++)for(var B=0;B<p-1;B++){T(z,B,S);for(var G=0;G<6;G++)w[Lt++]=S[y[G]]}_?n.generateVertexNormals():c.value=null}e.material.get("normalMap")&&n.generateTangents(),n.updateBoundingBox(),n.dirty(),e.material.transparent=b,e.material.depthMask=!b},_getDataShape:function(e,t){for(var r=-1/0,i=0,n=0,a=!1,o=t?"u":"x",s=e.count(),l=0;l<s;l++){var u=e.get(o,l);u<r&&(n=0,i++),r=u,n++}if((!i||n===1)&&(a=!0),!a)return[i+1,n];for(var c=Math.floor(Math.sqrt(s));c>0;){if(Math.floor(s/c)===s/c)return[c,s/c];c--}return c=Math.floor(Math.sqrt(s)),[c,c]},dispose:function(){this.groupGL.removeAll()},remove:function(){this.groupGL.removeAll()}});function Ep(e){e.registerChartView(bp),e.registerSeriesModel(wp),e.registerLayout(function(t,r){t.eachSeriesByType("surface",function(i){var n=i.coordinateSystem;!n||n.type;var a=i.getData(),o=new Float32Array(3*a.count()),s=[NaN,NaN,NaN];if(n&&n.type==="cartesian3D"){var l=n.dimensions,u=l.map(function(c){return i.coordDimToDataDim(c)[0]});a.each(u,function(c,h,f,d){var v;a.hasValue(d)?v=n.dataToPoint([c,h,f]):v=s,o[d*3]=v[0],o[d*3+1]=v[1],o[d*3+2]=v[2]})}a.setLayout("points",o)})})}st(Ep);function Is(e,t){for(var r=[],i=0;i<t.length;i++)r.push(e.dataToPoint(t[i]));return r}var yi=zt.extend({type:"series.map3D",layoutMode:"box",coordinateSystem:null,visualStyleAccessPath:"itemStyle",optionUpdated:function(e){var t=this.get("coordinateSystem");t==null||t==="geo3D"||(this.get("groundPlane.show")&&(this.option.groundPlane.show=!1),this._geo=null)},getInitialData:function(e){e.data=this.getFilledRegions(e.data,e.map);var t=ji(e.data,{coordDimensions:["value"]}),r=new jt(t,this);r.initData(e.data);var i={};return r.each(function(n){var a=r.getName(n),o=r.getItemModel(n);i[a]=o}),this._regionModelMap=i,r},formatTooltip:function(e){return Ki(this,e)},getRegionModel:function(e){var t=this.getData().getName(e);return this._regionModelMap[t]||new Un(null,this)},getRegionPolygonCoords:function(e){var t=this.coordinateSystem,r=this.getData().getName(e);if(t.transform){var i=t.getRegion(r);return i?i.geometries:[]}else{this._geo||(this._geo=Zl.createGeo3D(this));for(var i=this._geo.getRegion(r),n=[],a=0;a<i.geometries.length;a++){var o=i.geometries[a],s=[],l=Is(t,o.exterior);if(s&&s.length)for(var u=0;u<o.interiors.length;u++)s.push(Is(t,s[u]));n.push({interiors:s,exterior:l})}return n}},getFormattedLabel:function(e,t){var r=gi.getFormattedLabel(this,e,t);return r==null&&(r=this.getData().getName(e)),r},defaultOption:{coordinateSystem:"geo3D",data:null}});Ee(yi.prototype,zl);Ee(yi.prototype,$n);Ee(yi.prototype,di);Ee(yi.prototype,vi);Ee(yi.prototype,mi);const Ap=yi,Cp=Gt.extend({type:"map3D",__ecgl__:!0,init:function(e,t){this._geo3DBuilder=new ui(t),this.groupGL=new E.Node},render:function(e,t,r){var i=e.coordinateSystem;if(!(!i||!i.viewGL)){if(this.groupGL.add(this._geo3DBuilder.rootNode),i.viewGL.add(this.groupGL),i.type==="geo3D"){this._sceneHelper||(this._sceneHelper=new mr,this._sceneHelper.initLight(this.groupGL)),this._sceneHelper.setScene(i.viewGL.scene),this._sceneHelper.updateLight(e),i.viewGL.setPostEffect(e.getModel("postEffect"),r),i.viewGL.setTemporalSuperSampling(e.getModel("temporalSuperSampling"));var n=this._control;n||(n=this._control=new Zn({zr:r.getZr()}),this._control.init());var a=e.getModel("viewControl");n.setViewGL(i.viewGL),n.setFromViewControlModel(a,0),n.off("update"),n.on("update",function(){r.dispatchAction({type:"map3DChangeCamera",alpha:n.getAlpha(),beta:n.getBeta(),distance:n.getDistance(),from:this.uid,map3DId:e.id})}),this._geo3DBuilder.extrudeY=!0}else this._control&&(this._control.dispose(),this._control=null),this._sceneHelper&&(this._sceneHelper.dispose(),this._sceneHelper=null),e.getData().getLayout("geo3D"),this._geo3DBuilder.extrudeY=!1;this._geo3DBuilder.update(e,t,r,0,e.getData().count());var o=i.viewGL.isLinearSpace()?"define":"undefine";this._geo3DBuilder.rootNode.traverse(function(s){s.material&&s.material[o]("fragment","SRGB_DECODE")})}},afterRender:function(e,t,r,i){var n=i.renderer,a=e.coordinateSystem;a&&a.type==="geo3D"&&(this._sceneHelper.updateAmbientCubemap(n,e,r),this._sceneHelper.updateSkybox(n,e,r))},dispose:function(){this.groupGL.removeAll(),this._control.dispose(),this._geo3DBuilder.dispose()}});function Lp(e){Yl(e),e.registerChartView(Cp),e.registerSeriesModel(Ap),e.registerAction({type:"map3DChangeCamera",event:"map3dcamerachanged",update:"series:updateCamera"},function(t,r){r.eachComponent({mainType:"series",subType:"map3D",query:t},function(i){i.setView(t)})})}st(Lp);const Dp=zt.extend({type:"series.scatterGL",dependencies:["grid","polar","geo","singleAxis"],visualStyleAccessPath:"itemStyle",hasSymbolVisual:!0,getInitialData:function(){return Vu(this)},defaultOption:{coordinateSystem:"cartesian2d",zlevel:10,progressive:1e5,progressiveThreshold:1e5,large:!1,symbol:"circle",symbolSize:10,zoomScale:0,blendMode:"source-over",itemStyle:{opacity:.8},postEffect:{enable:!1,colorCorrection:{exposure:0,brightness:0,contrast:1,saturation:1,enable:!0}}}});function sr(e){this.viewGL=e}sr.prototype.reset=function(e,t){this._updateCamera(t.getWidth(),t.getHeight(),t.getDevicePixelRatio()),this._viewTransform=Hu(),this.updateTransform(e,t)};sr.prototype.updateTransform=function(e,t){var r=e.coordinateSystem;r.getRoamTransform&&(ku(this._viewTransform,r.getRoamTransform()),this._setCameraTransform(this._viewTransform),t.getZr().refresh())};sr.prototype.dataToPoint=function(e,t,r){r=e.dataToPoint(t,null,r);var i=this._viewTransform;i&&Ws(r,r,i)};sr.prototype.removeTransformInPoint=function(e){return this._viewTransform&&Ws(e,e,this._viewTransform),e};sr.prototype.getZoom=function(){if(this._viewTransform){var e=this._viewTransform;return 1/Math.max(Math.sqrt(e[0]*e[0]+e[1]*e[1]),Math.sqrt(e[2]*e[2]+e[3]*e[3]))}return 1};sr.prototype._setCameraTransform=function(e){var t=this.viewGL.camera;t.position.set(e[4],e[5],0),t.scale.set(Math.sqrt(e[0]*e[0]+e[1]*e[1]),Math.sqrt(e[2]*e[2]+e[3]*e[3]),1)};sr.prototype._updateCamera=function(e,t,r){this.viewGL.setViewport(0,0,e,t,r);var i=this.viewGL.camera;i.left=i.top=0,i.bottom=t,i.right=e,i.near=0,i.far=100};const Mp=Gt.extend({type:"scatterGL",__ecgl__:!0,init:function(e,t){this.groupGL=new E.Node,this.viewGL=new Ae("orthographic"),this.viewGL.add(this.groupGL),this._pointsBuilderList=[],this._currentStep=0,this._sizeScale=1,this._glViewHelper=new sr(this.viewGL)},render:function(e,t,r){if(this.groupGL.removeAll(),this._glViewHelper.reset(e,r),!!e.getData().count()){var i=this._pointsBuilderList[0];i||(i=this._pointsBuilderList[0]=new Ur(!0,r)),this._pointsBuilderList.length=1,this.groupGL.add(i.rootNode),this._removeTransformInPoints(e.getData().getLayout("points")),i.update(e,t,r),this.viewGL.setPostEffect(e.getModel("postEffect"),r)}},incrementalPrepareRender:function(e,t,r){this.groupGL.removeAll(),this._glViewHelper.reset(e,r),this._currentStep=0,this.viewGL.setPostEffect(e.getModel("postEffect"),r)},incrementalRender:function(e,t,r,i){if(!(e.end<=e.start)){var n=this._pointsBuilderList[this._currentStep];n||(n=new Ur(!0,i),this._pointsBuilderList[this._currentStep]=n),this.groupGL.add(n.rootNode),this._removeTransformInPoints(t.getData().getLayout("points")),n.setSizeScale(this._sizeScale),n.update(t,r,i,e.start,e.end),i.getZr().refresh(),this._currentStep++}},updateTransform:function(e,t,r){if(e.coordinateSystem.getRoamTransform){this._glViewHelper.updateTransform(e,r);var i=this._glViewHelper.getZoom(),n=Math.max((e.get("zoomScale")||0)*(i-1)+1,0);this._sizeScale=n,this._pointsBuilderList.forEach(function(a){a.setSizeScale(n)})}},_removeTransformInPoints:function(e){if(e)for(var t=[],r=0;r<e.length;r+=2)t[0]=e[r],t[1]=e[r+1],this._glViewHelper.removeTransformInPoint(t),e[r]=t[0],e[r+1]=t[1]},dispose:function(){this.groupGL.removeAll(),this._pointsBuilderList.forEach(function(e){e.dispose()})},remove:function(){this.groupGL.removeAll()}});function Pp(e){e.registerChartView(Mp),e.registerSeriesModel(Dp),e.registerLayout({seriesType:"scatterGL",reset:function(t){var r=t.coordinateSystem,i=t.getData(),n;if(r){var a=r.dimensions.map(function(s){return i.mapDimension(s)}).slice(0,2),o=[];a.length===1?n=function(s){for(var l=new Float32Array((s.end-s.start)*2),u=s.start;u<s.end;u++){var c=(u-s.start)*2,h=i.get(a[0],u),f=r.dataToPoint(h);l[c]=f[0],l[c+1]=f[1]}i.setLayout("points",l)}:a.length===2&&(n=function(s){for(var l=new Float32Array((s.end-s.start)*2),u=s.start;u<s.end;u++){var c=(u-s.start)*2,h=i.get(a[0],u),f=i.get(a[1],u);o[0]=h,o[1]=f,o=r.dataToPoint(o),l[c]=o[0],l[c+1]=o[1]}i.setLayout("points",l)})}return{progress:n}}})}st(Pp);function Rp(e,t,r,i,n){for(var a=new Wu(i),o=0;o<e.length;o++)a.addNode(ce.firstNotNull(e[o].id,e[o].name,o),o);for(var s=[],l=[],u=0,o=0;o<t.length;o++){var c=t[o],h=c.source,f=c.target;a.addEdge(h,f,u)&&(l.push(c),s.push(ce.firstNotNull(c.id,h+" > "+f)),u++)}var d,v=ji(e,{coordDimensions:["value"]});d=new jt(v,r),d.initData(e);var p=new jt(["value"],r);return p.initData(l,s),n&&n(d,p),Xu({mainData:d,struct:a,structAttr:"graph",datas:{node:d,edge:p},datasAttr:{node:"data",edge:"edgeData"}}),a.update(),a}var Pi=zt.extend({type:"series.graphGL",visualStyleAccessPath:"itemStyle",hasSymbolVisual:!0,init:function(e){Pi.superApply(this,"init",arguments),this.legendDataProvider=function(){return this._categoriesData},this._updateCategoriesData()},mergeOption:function(e){Pi.superApply(this,"mergeOption",arguments),this._updateCategoriesData()},getFormattedLabel:function(e,t,r,i){var n=gi.getFormattedLabel(this,e,t,r,i);if(n==null){var a=this.getData(),o=a.dimensions[a.dimensions.length-1];n=a.get(o,e)}return n},getInitialData:function(e,t){var r=e.edges||e.links||[],i=e.data||e.nodes||[],n=this;if(i&&r)return Rp(i,r,this,!0,a).data;function a(o,s){o.wrapMethod("getItemModel",function(h){const f=n._categoriesModels,d=h.getShallow("category"),v=f[d];return v&&(v.parentModel=h.parentModel,h.parentModel=v),h});const l=t.getModel([]).getModel;function u(h,f){const d=l.call(this,h,f);return d.resolveParentPath=c,d}s.wrapMethod("getItemModel",function(h){return h.resolveParentPath=c,h.getModel=u,h});function c(h){if(h&&(h[0]==="label"||h[1]==="label")){const f=h.slice();return h[0]==="label"?f[0]="edgeLabel":h[1]==="label"&&(f[1]="edgeLabel"),f}return h}}},getGraph:function(){return this.getData().graph},getEdgeData:function(){return this.getGraph().edgeData},getCategoriesData:function(){return this._categoriesData},formatTooltip:function(e,t,r){if(r==="edge"){var i=this.getData(),n=this.getDataParams(e,r),a=i.graph.getEdgeByIndex(e),o=i.getName(a.node1.dataIndex),s=i.getName(a.node2.dataIndex),l=[];return o!=null&&l.push(o),s!=null&&l.push(s),l=Jr(l.join(" > ")),n.value&&(l+=" : "+Jr(n.value)),l}else return Pi.superApply(this,"formatTooltip",arguments)},_updateCategoriesData:function(){var e=(this.option.categories||[]).map(function(r){return r.value!=null?r:Object.assign({value:0},r)}),t=new jt(["value"],this);t.initData(e),this._categoriesData=t,this._categoriesModels=t.mapArray(function(r){return t.getItemModel(r,!0)})},setView:function(e){e.zoom!=null&&(this.option.zoom=e.zoom),e.offset!=null&&(this.option.offset=e.offset)},setNodePosition:function(e){for(var t=0;t<e.length/2;t++){var r=e[t*2],i=e[t*2+1],n=this.getData().getRawDataItem(t);n.x=r,n.y=i}},isAnimationEnabled:function(){return Pi.superCall(this,"isAnimationEnabled")&&!(this.get("layout")==="force"&&this.get("force.layoutAnimation"))},defaultOption:{zlevel:10,z:2,legendHoverLink:!0,layout:"forceAtlas2",forceAtlas2:{initLayout:null,GPU:!0,steps:1,maxSteps:1e3,repulsionByDegree:!0,linLogMode:!1,strongGravityMode:!1,gravity:1,edgeWeightInfluence:1,edgeWeight:[1,4],nodeWeight:[1,4],preventOverlap:!1,gravityCenter:null},focusNodeAdjacency:!0,focusNodeAdjacencyOn:"mouseover",left:"center",top:"center",symbol:"circle",symbolSize:5,roam:!1,center:null,zoom:1,label:{show:!1,formatter:"{b}",position:"right",distance:5,textStyle:{fontSize:14}},itemStyle:{},lineStyle:{color:"#aaa",width:1,opacity:.5},emphasis:{label:{show:!0}},animation:!1}});const Np=Pi;var Ye=We.vec2,Os=[[0,0],[1,1]],cu=ye.extend(function(){return{segmentScale:4,dynamic:!0,useNativeLine:!0,attributes:{position:new ye.Attribute("position","float",2,"POSITION"),normal:new ye.Attribute("normal","float",2),offset:new ye.Attribute("offset","float",1),color:new ye.Attribute("color","float",4,"COLOR")}}},{resetOffset:function(){this._vertexOffset=0,this._faceOffset=0,this._itemVertexOffsets=[]},setVertexCount:function(e){var t=this.attributes;this.vertexCount!==e&&(t.position.init(e),t.color.init(e),this.useNativeLine||(t.offset.init(e),t.normal.init(e)),e>65535?this.indices instanceof Uint16Array&&(this.indices=new Uint32Array(this.indices)):this.indices instanceof Uint32Array&&(this.indices=new Uint16Array(this.indices)))},setTriangleCount:function(e){this.triangleCount!==e&&(e===0?this.indices=null:this.indices=this.vertexCount>65535?new Uint32Array(e*3):new Uint16Array(e*3))},_getCubicCurveApproxStep:function(e,t,r,i){var n=Ye.dist(e,t)+Ye.dist(r,t)+Ye.dist(i,r),a=1/(n+1)*this.segmentScale;return a},getCubicCurveVertexCount:function(e,t,r,i){var n=this._getCubicCurveApproxStep(e,t,r,i),a=Math.ceil(1/n);return this.useNativeLine?a*2:a*2+2},getCubicCurveTriangleCount:function(e,t,r,i){var n=this._getCubicCurveApproxStep(e,t,r,i),a=Math.ceil(1/n);return this.useNativeLine?0:a*2},getLineVertexCount:function(){return this.getPolylineVertexCount(Os)},getLineTriangleCount:function(){return this.getPolylineTriangleCount(Os)},getPolylineVertexCount:function(e){var t;if(typeof e=="number")t=e;else{var r=typeof e[0]!="number";t=r?e.length:e.length/2}return this.useNativeLine?(t-1)*2:(t-1)*2+2},getPolylineTriangleCount:function(e){var t;if(typeof e=="number")t=e;else{var r=typeof e[0]!="number";t=r?e.length:e.length/2}return this.useNativeLine?0:(t-1)*2},addCubicCurve:function(e,t,r,i,n,a){a==null&&(a=1);for(var o=e[0],s=e[1],l=t[0],u=t[1],c=r[0],h=r[1],f=i[0],d=i[1],v=this._getCubicCurveApproxStep(e,t,r,i),p=v*v,m=p*v,_=3*v,x=3*p,y=6*p,g=6*m,w=o-l*2+c,T=s-u*2+h,b=(l-c)*3-o+f,S=(u-h)*3-s+d,C=o,L=s,A=(l-o)*_+w*x+b*m,M=(u-s)*_+T*x+S*m,P=w*y+b*g,D=T*y+S*g,N=b*g,U=S*g,W=0,z=0,$=Math.ceil(1/v),G=new Float32Array(($+1)*3),G=[],ne=0,z=0;z<$+1;z++)G[ne++]=C,G[ne++]=L,C+=A,L+=M,A+=P,M+=D,P+=N,D+=U,W+=v,W>1&&(C=A>0?Math.min(C,f):Math.max(C,f),L=M>0?Math.min(L,d):Math.max(L,d));this.addPolyline(G,n,a)},addLine:function(e,t,r,i){this.addPolyline([e,t],r,i)},addPolyline:function(){var e=Ye.create(),t=Ye.create(),r=Ye.create(),i=Ye.create(),n=[],a=[],o=[];return function(s,l,u,c,h){if(s.length){var f=typeof s[0]!="number";if(h==null&&(h=f?s.length:s.length/2),!(h<2)){c==null&&(c=0),u==null&&(u=1),this._itemVertexOffsets.push(this._vertexOffset);for(var d=f?typeof l[0]!="number":l.length/4===h,v=this.attributes.position,p=this.attributes.color,m=this.attributes.offset,_=this.attributes.normal,x=this.indices,y=this._vertexOffset,g,w=0;w<h;w++){if(f)n=s[w+c],d?g=l[w+c]:g=l;else{var T=w*2+c;if(n=n||[],n[0]=s[T],n[1]=s[T+1],d){var b=w*4+c;g=g||[],g[0]=l[b],g[1]=l[b+1],g[2]=l[b+2],g[3]=l[b+3]}else g=l}if(this.useNativeLine)w>1&&(v.copy(y,y-1),p.copy(y,y-1),y++);else{var S;if(w<h-1){if(f)Ye.copy(a,s[w+1]);else{var T=(w+1)*2+c;a=a||[],a[0]=s[T],a[1]=s[T+1]}if(w>0){Ye.sub(e,n,o),Ye.sub(t,a,n),Ye.normalize(e,e),Ye.normalize(t,t),Ye.add(i,e,t),Ye.normalize(i,i);var C=u/2*Math.min(1/Ye.dot(e,i),2);r[0]=-i[1],r[1]=i[0],S=C}else Ye.sub(e,a,n),Ye.normalize(e,e),r[0]=-e[1],r[1]=e[0],S=u/2}else Ye.sub(e,n,o),Ye.normalize(e,e),r[0]=-e[1],r[1]=e[0],S=u/2;_.set(y,r),_.set(y+1,r),m.set(y,S),m.set(y+1,-S),Ye.copy(o,n),v.set(y,n),v.set(y+1,n),p.set(y,g),p.set(y+1,g),y+=2}if(this.useNativeLine)p.set(y,g),v.set(y,n),y++;else if(w>0){var L=this._faceOffset*3,x=this.indices;x[L]=y-4,x[L+1]=y-3,x[L+2]=y-2,x[L+3]=y-3,x[L+4]=y-1,x[L+5]=y-2,this._faceOffset+=2}}this._vertexOffset=y}}}}(),setItemColor:function(e,t){for(var r=this._itemVertexOffsets[e],i=e<this._itemVertexOffsets.length-1?this._itemVertexOffsets[e+1]:this._vertexOffset,n=r;n<i;n++)this.attributes.color.set(n,t);this.dirty("color")}});_r(cu.prototype,Yi);const hu=cu,Ip=`@export ecgl.forceAtlas2.updateNodeRepulsion

#define NODE_COUNT 0

uniform sampler2D positionTex;

uniform vec2 textureSize;
uniform float gravity;
uniform float scaling;
uniform vec2 gravityCenter;

uniform bool strongGravityMode;
uniform bool preventOverlap;

varying vec2 v_Texcoord;

void main() {

 vec4 n0 = texture2D(positionTex, v_Texcoord);

 vec2 force = vec2(0.0);
 for (int i = 0; i < NODE_COUNT; i++) {
 vec2 uv = vec2(
 mod(float(i), textureSize.x) / (textureSize.x - 1.0),
 floor(float(i) / textureSize.x) / (textureSize.y - 1.0)
 );
 vec4 n1 = texture2D(positionTex, uv);

 vec2 dir = n0.xy - n1.xy;
 float d2 = dot(dir, dir);

 if (d2 > 0.0) {
 float factor = 0.0;
 if (preventOverlap) {
 float d = sqrt(d2);
 d = d - n0.w - n1.w;
 if (d > 0.0) {
 factor = scaling * n0.z * n1.z / (d * d);
 }
 else if (d < 0.0) {
 factor = scaling * 100.0 * n0.z * n1.z;
 }
 }
 else {
 factor = scaling * n0.z * n1.z / d2;
 }
 force += dir * factor;
 }
 }

 vec2 dir = gravityCenter - n0.xy;
 float d = 1.0;
 if (!strongGravityMode) {
 d = length(dir);
 }

 force += dir * n0.z * gravity / (d + 1.0);

 gl_FragColor = vec4(force, 0.0, 1.0);
}
@end

@export ecgl.forceAtlas2.updateEdgeAttraction.vertex

attribute vec2 node1;
attribute vec2 node2;
attribute float weight;

uniform sampler2D positionTex;
uniform float edgeWeightInfluence;
uniform bool preventOverlap;
uniform bool linLogMode;

uniform vec2 windowSize: WINDOW_SIZE;

varying vec2 v_Force;

void main() {

 vec4 n0 = texture2D(positionTex, node1);
 vec4 n1 = texture2D(positionTex, node2);

 vec2 dir = n1.xy - n0.xy;
 float d = length(dir);
 float w;
 if (edgeWeightInfluence == 0.0) {
 w = 1.0;
 }
 else if (edgeWeightInfluence == 1.0) {
 w = weight;
 }
 else {
 w = pow(weight, edgeWeightInfluence);
 }
 vec2 offset = vec2(1.0 / windowSize.x, 1.0 / windowSize.y);
 vec2 scale = vec2((windowSize.x - 1.0) / windowSize.x, (windowSize.y - 1.0) / windowSize.y);
 vec2 pos = node1 * scale * 2.0 - 1.0;
 gl_Position = vec4(pos + offset, 0.0, 1.0);
 gl_PointSize = 1.0;

 float factor;
 if (preventOverlap) {
 d = d - n1.w - n0.w;
 }
 if (d <= 0.0) {
 v_Force = vec2(0.0);
 return;
 }

 if (linLogMode) {
 factor = w * log(d) / d;
 }
 else {
 factor = w;
 }
 v_Force = dir * factor;
}
@end

@export ecgl.forceAtlas2.updateEdgeAttraction.fragment

varying vec2 v_Force;

void main() {
 gl_FragColor = vec4(v_Force, 0.0, 0.0);
}
@end

@export ecgl.forceAtlas2.calcWeightedSum.vertex

attribute vec2 node;

varying vec2 v_NodeUv;

void main() {

 v_NodeUv = node;
 gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
 gl_PointSize = 1.0;
}
@end

@export ecgl.forceAtlas2.calcWeightedSum.fragment

varying vec2 v_NodeUv;

uniform sampler2D positionTex;
uniform sampler2D forceTex;
uniform sampler2D forcePrevTex;

void main() {
 vec2 force = texture2D(forceTex, v_NodeUv).rg;
 vec2 forcePrev = texture2D(forcePrevTex, v_NodeUv).rg;

 float mass = texture2D(positionTex, v_NodeUv).z;
 float swing = length(force - forcePrev) * mass;
 float traction = length(force + forcePrev) * 0.5 * mass;

 gl_FragColor = vec4(swing, traction, 0.0, 0.0);
}
@end

@export ecgl.forceAtlas2.calcGlobalSpeed

uniform sampler2D globalSpeedPrevTex;
uniform sampler2D weightedSumTex;
uniform float jitterTolerence;

void main() {
 vec2 weightedSum = texture2D(weightedSumTex, vec2(0.5)).xy;
 float prevGlobalSpeed = texture2D(globalSpeedPrevTex, vec2(0.5)).x;
 float globalSpeed = jitterTolerence * jitterTolerence
 * weightedSum.y / weightedSum.x;
 if (prevGlobalSpeed > 0.0) {
 globalSpeed = min(globalSpeed / prevGlobalSpeed, 1.5) * prevGlobalSpeed;
 }
 gl_FragColor = vec4(globalSpeed, 0.0, 0.0, 1.0);
}
@end

@export ecgl.forceAtlas2.updatePosition

uniform sampler2D forceTex;
uniform sampler2D forcePrevTex;
uniform sampler2D positionTex;
uniform sampler2D globalSpeedTex;

varying vec2 v_Texcoord;

void main() {
 vec2 force = texture2D(forceTex, v_Texcoord).xy;
 vec2 forcePrev = texture2D(forcePrevTex, v_Texcoord).xy;
 vec4 node = texture2D(positionTex, v_Texcoord);

 float globalSpeed = texture2D(globalSpeedTex, vec2(0.5)).r;
 float swing = length(force - forcePrev);
 float speed = 0.1 * globalSpeed / (0.1 + globalSpeed * sqrt(swing));

 float df = length(force);
 if (df > 0.0) {
 speed = min(df * speed, 10.0) / df;

 gl_FragColor = vec4(node.xy + speed * force, node.zw);
 }
 else {
 gl_FragColor = node;
 }
}
@end

@export ecgl.forceAtlas2.edges.vertex
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;

attribute vec2 node;
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;

uniform sampler2D positionTex;

void main()
{
 gl_Position = worldViewProjection * vec4(
 texture2D(positionTex, node).xy, -10.0, 1.0
 );
 v_Color = a_Color;
}
@end

@export ecgl.forceAtlas2.edges.fragment
uniform vec4 color : [1.0, 1.0, 1.0, 1.0];
varying vec4 v_Color;
void main() {
 gl_FragColor = color * v_Color;
}
@end`;E.Shader.import(Ip);var Ea={repulsionByDegree:!0,linLogMode:!1,strongGravityMode:!1,gravity:1,scaling:1,edgeWeightInfluence:1,jitterTolerence:.1,preventOverlap:!1,dissuadeHubs:!1,gravityCenter:null};function Qe(e){var t={type:E.Texture.FLOAT,minFilter:E.Texture.NEAREST,magFilter:E.Texture.NEAREST};this._positionSourceTex=new E.Texture2D(t),this._positionSourceTex.flipY=!1,this._positionTex=new E.Texture2D(t),this._positionPrevTex=new E.Texture2D(t),this._forceTex=new E.Texture2D(t),this._forcePrevTex=new E.Texture2D(t),this._weightedSumTex=new E.Texture2D(t),this._weightedSumTex.width=this._weightedSumTex.height=1,this._globalSpeedTex=new E.Texture2D(t),this._globalSpeedPrevTex=new E.Texture2D(t),this._globalSpeedTex.width=this._globalSpeedTex.height=1,this._globalSpeedPrevTex.width=this._globalSpeedPrevTex.height=1,this._nodeRepulsionPass=new je({fragment:E.Shader.source("ecgl.forceAtlas2.updateNodeRepulsion")}),this._positionPass=new je({fragment:E.Shader.source("ecgl.forceAtlas2.updatePosition")}),this._globalSpeedPass=new je({fragment:E.Shader.source("ecgl.forceAtlas2.calcGlobalSpeed")}),this._copyPass=new je({fragment:E.Shader.source("clay.compositor.output")});var r=function(i){i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ONE)};this._edgeForceMesh=new E.Mesh({geometry:new E.Geometry({attributes:{node1:new E.Geometry.Attribute("node1","float",2),node2:new E.Geometry.Attribute("node2","float",2),weight:new E.Geometry.Attribute("weight","float",1)},dynamic:!0,mainAttribute:"node1"}),material:new E.Material({transparent:!0,shader:E.createShader("ecgl.forceAtlas2.updateEdgeAttraction"),blend:r,depthMask:!1,depthText:!1}),mode:E.Mesh.POINTS}),this._weightedSumMesh=new E.Mesh({geometry:new E.Geometry({attributes:{node:new E.Geometry.Attribute("node","float",2)},dynamic:!0,mainAttribute:"node"}),material:new E.Material({transparent:!0,shader:E.createShader("ecgl.forceAtlas2.calcWeightedSum"),blend:r,depthMask:!1,depthText:!1}),mode:E.Mesh.POINTS}),this._framebuffer=new ot({depthBuffer:!1}),this._dummyCamera=new E.OrthographicCamera({left:-1,right:1,top:1,bottom:-1,near:0,far:100}),this._globalSpeed=0}Qe.prototype.updateOption=function(e){for(var t in Ea)this[t]=Ea[t];var r=this._nodes.length;if(r>5e4?this.jitterTolerence=10:r>5e3?this.jitterTolerence=1:this.jitterTolerence=.1,r>100?this.scaling=2:this.scaling=10,e)for(var t in Ea)e[t]!=null&&(this[t]=e[t]);if(this.repulsionByDegree)for(var i=this._positionSourceTex.pixels,n=0;n<this._nodes.length;n++)i[n*4+2]=(this._nodes[n].degree||0)+1};Qe.prototype._updateGravityCenter=function(e){var t=this._nodes,r=this._edges;if(this.gravityCenter)this._gravityCenter=this.gravityCenter;else{for(var i=[1/0,1/0],n=[-1/0,-1/0],a=0;a<t.length;a++)i[0]=Math.min(t[a].x,i[0]),i[1]=Math.min(t[a].y,i[1]),n[0]=Math.max(t[a].x,n[0]),n[1]=Math.max(t[a].y,n[1]);this._gravityCenter=[(i[0]+n[0])*.5,(i[1]+n[1])*.5]}for(var a=0;a<r.length;a++){var o=r[a].node1,s=r[a].node2;t[o].degree=(t[o].degree||0)+1,t[s].degree=(t[s].degree||0)+1}};Qe.prototype.initData=function(e,t){this._nodes=e,this._edges=t,this._updateGravityCenter();var r=Math.ceil(Math.sqrt(e.length)),i=r,n=new Float32Array(r*i*4);this._resize(r,i);for(var a=0,o=0;o<e.length;o++){var s=e[o];n[a++]=s.x||0,n[a++]=s.y||0,n[a++]=s.mass||1,n[a++]=s.size||1}this._positionSourceTex.pixels=n;var l=this._edgeForceMesh.geometry,u=t.length;l.attributes.node1.init(u*2),l.attributes.node2.init(u*2),l.attributes.weight.init(u*2);for(var c=[],o=0;o<t.length;o++){var h=l.attributes,f=t[o].weight;f==null&&(f=1),h.node1.set(o,this.getNodeUV(t[o].node1,c)),h.node2.set(o,this.getNodeUV(t[o].node2,c)),h.weight.set(o,f),h.node1.set(o+u,this.getNodeUV(t[o].node2,c)),h.node2.set(o+u,this.getNodeUV(t[o].node1,c)),h.weight.set(o+u,f)}var d=this._weightedSumMesh.geometry;d.attributes.node.init(e.length);for(var o=0;o<e.length;o++)d.attributes.node.set(o,this.getNodeUV(o,c));l.dirty(),d.dirty(),this._nodeRepulsionPass.material.define("fragment","NODE_COUNT",e.length),this._nodeRepulsionPass.material.setUniform("textureSize",[r,i]),this._inited=!1,this._frame=0};Qe.prototype.getNodes=function(){return this._nodes};Qe.prototype.getEdges=function(){return this._edges};Qe.prototype.step=function(e){this._inited||(this._initFromSource(e),this._inited=!0),this._frame++,this._framebuffer.attach(this._forceTex),this._framebuffer.bind(e);var t=this._nodeRepulsionPass;t.setUniform("strongGravityMode",this.strongGravityMode),t.setUniform("gravity",this.gravity),t.setUniform("gravityCenter",this._gravityCenter),t.setUniform("scaling",this.scaling),t.setUniform("preventOverlap",this.preventOverlap),t.setUniform("positionTex",this._positionPrevTex),t.render(e);var r=this._edgeForceMesh;r.material.set("linLogMode",this.linLogMode),r.material.set("edgeWeightInfluence",this.edgeWeightInfluence),r.material.set("preventOverlap",this.preventOverlap),r.material.set("positionTex",this._positionPrevTex),e.gl.enable(e.gl.BLEND),e.renderPass([r],this._dummyCamera),this._framebuffer.attach(this._weightedSumTex),e.gl.clearColor(0,0,0,0),e.gl.clear(e.gl.COLOR_BUFFER_BIT),e.gl.enable(e.gl.BLEND);var i=this._weightedSumMesh;i.material.set("positionTex",this._positionPrevTex),i.material.set("forceTex",this._forceTex),i.material.set("forcePrevTex",this._forcePrevTex),e.renderPass([i],this._dummyCamera),this._framebuffer.attach(this._globalSpeedTex);var n=this._globalSpeedPass;n.setUniform("globalSpeedPrevTex",this._globalSpeedPrevTex),n.setUniform("weightedSumTex",this._weightedSumTex),n.setUniform("jitterTolerence",this.jitterTolerence),e.gl.disable(e.gl.BLEND),n.render(e);var a=this._positionPass;this._framebuffer.attach(this._positionTex),a.setUniform("globalSpeedTex",this._globalSpeedTex),a.setUniform("positionTex",this._positionPrevTex),a.setUniform("forceTex",this._forceTex),a.setUniform("forcePrevTex",this._forcePrevTex),a.render(e),this._framebuffer.unbind(e),this._swapTexture()};Qe.prototype.update=function(e,t,r){t==null&&(t=1),t=Math.max(t,1);for(var i=0;i<t;i++)this.step(e);r&&r()};Qe.prototype.getNodePositionTexture=function(){return this._inited?this._positionPrevTex:this._positionSourceTex};Qe.prototype.getNodeUV=function(e,t){t=t||[];var r=this._positionTex.width,i=this._positionTex.height;return t[0]=e%r/(r-1),t[1]=Math.floor(e/r)/(i-1)||0,t};Qe.prototype.getNodePosition=function(e,t){var r=this._positionArr,i=this._positionTex.width,n=this._positionTex.height,a=i*n;(!r||r.length!==a*4)&&(r=this._positionArr=new Float32Array(a*4)),this._framebuffer.bind(e),this._framebuffer.attach(this._positionPrevTex),e.gl.readPixels(0,0,i,n,e.gl.RGBA,e.gl.FLOAT,r),this._framebuffer.unbind(e),t||(t=new Float32Array(this._nodes.length*2));for(var o=0;o<this._nodes.length;o++)t[o*2]=r[o*4],t[o*2+1]=r[o*4+1];return t};Qe.prototype.getTextureData=function(e,t){var r=this["_"+t+"Tex"],i=r.width,n=r.height;this._framebuffer.bind(e),this._framebuffer.attach(r);var a=new Float32Array(i*n*4);return e.gl.readPixels(0,0,i,n,e.gl.RGBA,e.gl.FLOAT,a),this._framebuffer.unbind(e),a};Qe.prototype.getTextureSize=function(){return{width:this._positionTex.width,height:this._positionTex.height}};Qe.prototype.isFinished=function(e){return this._frame>e};Qe.prototype._swapTexture=function(){var e=this._positionPrevTex;this._positionPrevTex=this._positionTex,this._positionTex=e;var e=this._forcePrevTex;this._forcePrevTex=this._forceTex,this._forceTex=e;var e=this._globalSpeedPrevTex;this._globalSpeedPrevTex=this._globalSpeedTex,this._globalSpeedTex=e};Qe.prototype._initFromSource=function(e){this._framebuffer.attach(this._positionPrevTex),this._framebuffer.bind(e),this._copyPass.setUniform("texture",this._positionSourceTex),this._copyPass.render(e),e.gl.clearColor(0,0,0,0),this._framebuffer.attach(this._forcePrevTex),e.gl.clear(e.gl.COLOR_BUFFER_BIT),this._framebuffer.attach(this._globalSpeedPrevTex),e.gl.clear(e.gl.COLOR_BUFFER_BIT),this._framebuffer.unbind(e)};Qe.prototype._resize=function(e,t){["_positionSourceTex","_positionTex","_positionPrevTex","_forceTex","_forcePrevTex"].forEach(function(r){this[r].width=e,this[r].height=t,this[r].dirty()},this)};Qe.prototype.dispose=function(e){this._framebuffer.dispose(e),this._copyPass.dispose(e),this._nodeRepulsionPass.dispose(e),this._positionPass.dispose(e),this._globalSpeedPass.dispose(e),this._edgeForceMesh.geometry.dispose(e),this._weightedSumMesh.geometry.dispose(e),this._positionSourceTex.dispose(e),this._positionTex.dispose(e),this._positionPrevTex.dispose(e),this._forceTex.dispose(e),this._forcePrevTex.dispose(e),this._weightedSumTex.dispose(e),this._globalSpeedTex.dispose(e),this._globalSpeedPrevTex.dispose(e)};function Op(){var e={create:function(){return new Float32Array(2)},dist:function(l,u){var c=u[0]-l[0],h=u[1]-l[1];return Math.sqrt(c*c+h*h)},len:function(l){var u=l[0],c=l[1];return Math.sqrt(u*u+c*c)},scaleAndAdd:function(l,u,c,h){return l[0]=u[0]+c[0]*h,l[1]=u[1]+c[1]*h,l},scale:function(l,u,c){return l[0]=u[0]*c,l[1]=u[1]*c,l},add:function(l,u,c){return l[0]=u[0]+c[0],l[1]=u[1]+c[1],l},sub:function(l,u,c){return l[0]=u[0]-c[0],l[1]=u[1]-c[1],l},normalize:function(l,u){var c=u[0],h=u[1],f=c*c+h*h;return f>0&&(f=1/Math.sqrt(f),l[0]=u[0]*f,l[1]=u[1]*f),l},negate:function(l,u){return l[0]=-u[0],l[1]=-u[1],l},copy:function(l,u){return l[0]=u[0],l[1]=u[1],l},set:function(l,u,c){return l[0]=u,l[1]=c,l}};function t(){this.subRegions=[],this.nSubRegions=0,this.node=null,this.mass=0,this.centerOfMass=null,this.bbox=new Float32Array(4),this.size=0}var r=t.prototype;r.beforeUpdate=function(){for(var l=0;l<this.nSubRegions;l++)this.subRegions[l].beforeUpdate();this.mass=0,this.centerOfMass&&(this.centerOfMass[0]=0,this.centerOfMass[1]=0),this.nSubRegions=0,this.node=null},r.afterUpdate=function(){this.subRegions.length=this.nSubRegions;for(var l=0;l<this.nSubRegions;l++)this.subRegions[l].afterUpdate()},r.addNode=function(l){if(this.nSubRegions===0)if(this.node==null){this.node=l;return}else this._addNodeToSubRegion(this.node),this.node=null;this._addNodeToSubRegion(l),this._updateCenterOfMass(l)},r.findSubRegion=function(l,u){for(var c=0;c<this.nSubRegions;c++){var h=this.subRegions[c];if(h.contain(l,u))return h}},r.contain=function(l,u){return this.bbox[0]<=l&&this.bbox[2]>=l&&this.bbox[1]<=u&&this.bbox[3]>=u},r.setBBox=function(l,u,c,h){this.bbox[0]=l,this.bbox[1]=u,this.bbox[2]=c,this.bbox[3]=h,this.size=(c-l+h-u)/2},r._newSubRegion=function(){var l=this.subRegions[this.nSubRegions];return l||(l=new t,this.subRegions[this.nSubRegions]=l),this.nSubRegions++,l},r._addNodeToSubRegion=function(l){var u=this.findSubRegion(l.position[0],l.position[1]),c=this.bbox;if(!u){var h=(c[0]+c[2])/2,f=(c[1]+c[3])/2,d=(c[2]-c[0])/2,v=(c[3]-c[1])/2,p=l.position[0]>=h?1:0,m=l.position[1]>=f?1:0,u=this._newSubRegion();u.setBBox(p*d+c[0],m*v+c[1],(p+1)*d+c[0],(m+1)*v+c[1])}u.addNode(l)},r._updateCenterOfMass=function(l){this.centerOfMass==null&&(this.centerOfMass=new Float32Array(2));var u=this.centerOfMass[0]*this.mass,c=this.centerOfMass[1]*this.mass;u+=l.position[0]*l.mass,c+=l.position[1]*l.mass,this.mass+=l.mass,this.centerOfMass[0]=u/this.mass,this.centerOfMass[1]=c/this.mass};function i(){this.position=new Float32Array(2),this.force=e.create(),this.forcePrev=e.create(),this.mass=1,this.inDegree=0,this.outDegree=0}function n(l,u){this.source=l,this.target=u,this.weight=1}function a(){this.autoSettings=!0,this.barnesHutOptimize=!0,this.barnesHutTheta=1.5,this.repulsionByDegree=!0,this.linLogMode=!1,this.strongGravityMode=!1,this.gravity=1,this.scaling=1,this.edgeWeightInfluence=1,this.jitterTolerence=.1,this.preventOverlap=!1,this.dissuadeHubs=!1,this.rootRegion=new t,this.rootRegion.centerOfMass=e.create(),this.nodes=[],this.edges=[],this.bbox=new Float32Array(4),this.gravityCenter=null,this._massArr=null,this._swingingArr=null,this._sizeArr=null,this._globalSpeed=0}var o=a.prototype;o.initNodes=function(l,u,c){var h=u.length;this.nodes.length=0;for(var f=typeof c<"u",d=0;d<h;d++){var v=new i;v.position[0]=l[d*2],v.position[1]=l[d*2+1],v.mass=u[d],f&&(v.size=c[d]),this.nodes.push(v)}this._massArr=u,this._swingingArr=new Float32Array(h),f&&(this._sizeArr=c)},o.initEdges=function(l,u){var c=l.length/2;this.edges.length=0;for(var h=0;h<c;h++){var f=l[h*2],d=l[h*2+1],v=this.nodes[f],p=this.nodes[d];if(!v||!p){console.error("Node not exists, try initNodes before initEdges");return}v.outDegree++,p.inDegree++;var m=new n(v,p);u&&(m.weight=u[h]),this.edges.push(m)}},o.updateSettings=function(){if(this.repulsionByDegree)for(var l=0;l<this.nodes.length;l++){var u=this.nodes[l];u.mass=u.inDegree+u.outDegree+1}else for(var l=0;l<this.nodes.length;l++){var u=this.nodes[l];u.mass=this._massArr[l]}},o.update=function(){var l=this.nodes.length;if(this.updateSettings(),this.updateBBox(),this.barnesHutOptimize){this.rootRegion.setBBox(this.bbox[0],this.bbox[1],this.bbox[2],this.bbox[3]),this.rootRegion.beforeUpdate();for(var u=0;u<l;u++)this.rootRegion.addNode(this.nodes[u]);this.rootRegion.afterUpdate()}for(var u=0;u<l;u++){var c=this.nodes[u];e.copy(c.forcePrev,c.force),e.set(c.force,0,0)}for(var u=0;u<l;u++){var h=this.nodes[u];if(this.barnesHutOptimize)this.applyRegionToNodeRepulsion(this.rootRegion,h);else for(var f=u+1;f<l;f++){var d=this.nodes[f];this.applyNodeToNodeRepulsion(h,d,!1)}this.gravity>0&&(this.strongGravityMode?this.applyNodeStrongGravity(h):this.applyNodeGravity(h))}for(var u=0;u<this.edges.length;u++)this.applyEdgeAttraction(this.edges[u]);for(var v=0,p=0,m=e.create(),u=0;u<l;u++){var c=this.nodes[u],_=e.dist(c.force,c.forcePrev);v+=_*c.mass,e.add(m,c.force,c.forcePrev);var x=e.len(m)*.5;p+=x*c.mass,this._swingingArr[u]=_}var y=this.jitterTolerence*this.jitterTolerence*p/v;this._globalSpeed>0&&(y=Math.min(y/this._globalSpeed,1.5)*this._globalSpeed),this._globalSpeed=y;for(var u=0;u<l;u++){var c=this.nodes[u],_=this._swingingArr[u],g=.1*y/(1+y*Math.sqrt(_)),w=e.len(c.force);w>0&&(g=Math.min(w*g,10)/w,e.scaleAndAdd(c.position,c.position,c.force,g))}},o.applyRegionToNodeRepulsion=function(){var l=e.create();return function(c,h){if(c.node)this.applyNodeToNodeRepulsion(c.node,h,!0);else{e.sub(l,h.position,c.centerOfMass);var f=l[0]*l[0]+l[1]*l[1];if(f>this.barnesHutTheta*c.size*c.size){var d=this.scaling*h.mass*c.mass/f;e.scaleAndAdd(h.force,h.force,l,d)}else for(var v=0;v<c.nSubRegions;v++)this.applyRegionToNodeRepulsion(c.subRegions[v],h)}}}(),o.applyNodeToNodeRepulsion=function(){var l=e.create();return function(c,h,f){if(c!=h){e.sub(l,c.position,h.position);var d=l[0]*l[0]+l[1]*l[1];if(d!==0){var v;if(this.preventOverlap){var p=Math.sqrt(d);if(p=p-c.size-h.size,p>0)v=this.scaling*c.mass*h.mass/(p*p);else if(p<0)v=this.scaling*100*c.mass*h.mass;else return}else v=this.scaling*c.mass*h.mass/d;e.scaleAndAdd(c.force,c.force,l,v),e.scaleAndAdd(h.force,h.force,l,-v)}}}}(),o.applyEdgeAttraction=function(){var l=e.create();return function(c){var h=c.source,f=c.target;e.sub(l,h.position,f.position);var d=e.len(l),v;this.edgeWeightInfluence===0?v=1:this.edgeWeightInfluence===1?v=c.weight:v=Math.pow(c.weight,this.edgeWeightInfluence);var p;this.preventOverlap&&(d=d-h.size-f.size,d<=0)||(this.linLogMode?p=-v*Math.log(d+1)/(d+1):p=-v,e.scaleAndAdd(h.force,h.force,l,p),e.scaleAndAdd(f.force,f.force,l,-p))}}(),o.applyNodeGravity=function(){var l=e.create();return function(u){e.sub(l,this.gravityCenter,u.position);var c=e.len(l);e.scaleAndAdd(u.force,u.force,l,this.gravity*u.mass/(c+1))}}(),o.applyNodeStrongGravity=function(){var l=e.create();return function(u){e.sub(l,this.gravityCenter,u.position),e.scaleAndAdd(u.force,u.force,l,this.gravity*u.mass)}}(),o.updateBBox=function(){for(var l=1/0,u=1/0,c=-1/0,h=-1/0,f=0;f<this.nodes.length;f++){var d=this.nodes[f].position;l=Math.min(l,d[0]),u=Math.min(u,d[1]),c=Math.max(c,d[0]),h=Math.max(h,d[1])}this.bbox[0]=l,this.bbox[1]=u,this.bbox[2]=c,this.bbox[3]=h},o.getGlobalSpeed=function(){return this._globalSpeed};var s=null;self.onmessage=function(l){switch(l.data.cmd){case"init":s=new a,s.initNodes(l.data.nodesPosition,l.data.nodesMass,l.data.nodesSize),s.initEdges(l.data.edges,l.data.edgesWeight);break;case"updateConfig":if(s)for(var u in l.data.config)s[u]=l.data.config[u];break;case"update":var c=l.data.steps;if(s){for(var h=0;h<c;h++)s.update();for(var f=s.nodes.length,d=new Float32Array(f*2),h=0;h<f;h++){var v=s.nodes[h];d[h*2]=v.position[0],d[h*2+1]=v.position[1]}self.postMessage({buffer:d.buffer,globalSpeed:s.getGlobalSpeed()},[d.buffer])}else{var p=new Float32Array;self.postMessage({buffer:p.buffer,globalSpeed:s.getGlobalSpeed()},[p.buffer])}break}}}var Ri=Op.toString();Ri=Ri.slice(Ri.indexOf("{")+1,Ri.lastIndexOf("}"));var Ii={barnesHutOptimize:!0,barnesHutTheta:1.5,repulsionByDegree:!0,linLogMode:!1,strongGravityMode:!1,gravity:1,scaling:1,edgeWeightInfluence:1,jitterTolerence:.1,preventOverlap:!1,dissuadeHubs:!1,gravityCenter:null},Ct=function(e){for(var t in Ii)this[t]=Ii[t];if(e)for(var t in e)this[t]=e[t];this._nodes=[],this._edges=[],this._disposed=!1,this._positionTex=new se({type:K.FLOAT,flipY:!1,minFilter:K.NEAREST,magFilter:K.NEAREST})};Ct.prototype.initData=function(e,t){var r=new Blob([Ri]),i=window.URL.createObjectURL(r);this._worker=new Worker(i),this._worker.onmessage=this._$onupdate.bind(this),this._nodes=e,this._edges=t,this._frame=0;for(var n=e.length,a=t.length,o=new Float32Array(n*2),s=new Float32Array(n),l=new Float32Array(n),u=new Float32Array(a*2),c=new Float32Array(a),h=0;h<e.length;h++){var f=e[h];o[h*2]=f.x,o[h*2+1]=f.y,s[h]=f.mass==null?1:f.mass,l[h]=f.size==null?1:f.size}for(var h=0;h<t.length;h++){var d=t[h],v=d.node1,p=d.node2;u[h*2]=v,u[h*2+1]=p,c[h]=d.weight==null?1:d.weight}var m=Math.ceil(Math.sqrt(e.length)),_=m,x=new Float32Array(m*_*4),y=this._positionTex;y.width=m,y.height=_,y.pixels=x,this._worker.postMessage({cmd:"init",nodesPosition:o,nodesMass:s,nodesSize:l,edges:u,edgesWeight:c}),this._globalSpeed=1/0};Ct.prototype.updateOption=function(e){var t={};for(var r in Ii)t[r]=Ii[r];var i=this._nodes,n=this._edges,a=i.length;if(a>5e4?t.jitterTolerence=10:a>5e3?t.jitterTolerence=1:t.jitterTolerence=.1,a>100?t.scaling=2:t.scaling=10,a>1e3?t.barnesHutOptimize=!0:t.barnesHutOptimize=!1,e)for(var r in Ii)e[r]!=null&&(t[r]=e[r]);if(!t.gravityCenter){for(var o=[1/0,1/0],s=[-1/0,-1/0],l=0;l<i.length;l++)o[0]=Math.min(i[l].x,o[0]),o[1]=Math.min(i[l].y,o[1]),s[0]=Math.max(i[l].x,s[0]),s[1]=Math.max(i[l].y,s[1]);t.gravityCenter=[(o[0]+s[0])*.5,(o[1]+s[1])*.5]}for(var l=0;l<n.length;l++){var u=n[l].node1,c=n[l].node2;i[u].degree=(i[u].degree||0)+1,i[c].degree=(i[c].degree||0)+1}this._worker&&this._worker.postMessage({cmd:"updateConfig",config:t})};Ct.prototype.update=function(e,t,r){t==null&&(t=1),t=Math.max(t,1),this._frame+=t,this._onupdate=r,this._worker&&this._worker.postMessage({cmd:"update",steps:Math.round(t)})};Ct.prototype._$onupdate=function(e){if(!this._disposed){var t=new Float32Array(e.data.buffer);this._globalSpeed=e.data.globalSpeed,this._positionArr=t,this._updateTexture(t),this._onupdate&&this._onupdate()}};Ct.prototype.getNodePositionTexture=function(){return this._positionTex};Ct.prototype.getNodeUV=function(e,t){t=t||[];var r=this._positionTex.width,i=this._positionTex.height;return t[0]=e%r/(r-1),t[1]=Math.floor(e/r)/(i-1),t};Ct.prototype.getNodes=function(){return this._nodes};Ct.prototype.getEdges=function(){return this._edges};Ct.prototype.isFinished=function(e){return this._frame>e};Ct.prototype.getNodePosition=function(e,t){if(t||(t=new Float32Array(this._nodes.length*2)),this._positionArr)for(var r=0;r<this._positionArr.length;r++)t[r]=this._positionArr[r];return t};Ct.prototype._updateTexture=function(e){for(var t=this._positionTex.pixels,r=0,i=0;i<e.length;)t[r++]=e[i++],t[r++]=e[i++],t[r++]=1,t[r++]=1;this._positionTex.dirty()};Ct.prototype.dispose=function(e){this._disposed=!0,this._worker=null};const Fs=Ct;var Fp=vt.extend(function(){return{zr:null,viewGL:null,minZoom:.2,maxZoom:5,_needsUpdate:!1,_dx:0,_dy:0,_zoom:1}},function(){this._mouseDownHandler=this._mouseDownHandler.bind(this),this._mouseWheelHandler=this._mouseWheelHandler.bind(this),this._mouseMoveHandler=this._mouseMoveHandler.bind(this),this._mouseUpHandler=this._mouseUpHandler.bind(this),this._update=this._update.bind(this)},{init:function(){var e=this.zr;e.on("mousedown",this._mouseDownHandler),e.on("mousewheel",this._mouseWheelHandler),e.on("globalout",this._mouseUpHandler),e.animation.on("frame",this._update)},setTarget:function(e){this._target=e},setZoom:function(e){this._zoom=Math.max(Math.min(e,this.maxZoom),this.minZoom),this._needsUpdate=!0},setOffset:function(e){this._dx=e[0],this._dy=e[1],this._needsUpdate=!0},getZoom:function(){return this._zoom},getOffset:function(){return[this._dx,this._dy]},_update:function(){if(this._target&&this._needsUpdate){var e=this._target,t=this._zoom;e.position.x=this._dx,e.position.y=this._dy,e.scale.set(t,t,t),this.zr.refresh(),this._needsUpdate=!1,this.trigger("update")}},_mouseDownHandler:function(e){if(!e.target){var t=e.offsetX,r=e.offsetY;if(!(this.viewGL&&!this.viewGL.containPoint(t,r))){this.zr.on("mousemove",this._mouseMoveHandler),this.zr.on("mouseup",this._mouseUpHandler);var i=this._convertPos(t,r);this._x=i.x,this._y=i.y}}},_convertPos:function(e,t){var r=this.viewGL.camera,i=this.viewGL.viewport;return{x:(e-i.x)/i.width*(r.right-r.left)+r.left,y:(t-i.y)/i.height*(r.bottom-r.top)+r.top}},_mouseMoveHandler:function(e){var t=this._convertPos(e.offsetX,e.offsetY);this._dx+=t.x-this._x,this._dy+=t.y-this._y,this._x=t.x,this._y=t.y,this._needsUpdate=!0},_mouseUpHandler:function(e){this.zr.off("mousemove",this._mouseMoveHandler),this.zr.off("mouseup",this._mouseUpHandler)},_mouseWheelHandler:function(e){e=e.event;var t=e.wheelDelta||-e.detail;if(t!==0){var r=e.offsetX,i=e.offsetY;if(!(this.viewGL&&!this.viewGL.containPoint(r,i))){var n=t>0?1.1:.9,a=Math.max(Math.min(this._zoom*n,this.maxZoom),this.minZoom);n=a/this._zoom;var o=this._convertPos(r,i),s=(o.x-this._dx)*(n-1),l=(o.y-this._dy)*(n-1);this._dx-=s,this._dy-=l,this._zoom=a,this._needsUpdate=!0}}},dispose:function(){var e=this.zr;e.off("mousedown",this._mouseDownHandler),e.off("mousemove",this._mouseMoveHandler),e.off("mouseup",this._mouseUpHandler),e.off("mousewheel",this._mouseWheelHandler),e.off("globalout",this._mouseUpHandler),e.animation.off("frame",this._update)}});const Bp=Fp,Up=`@export ecgl.lines2D.vertex

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;

attribute vec2 position: POSITION;
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;

#ifdef POSITIONTEXTURE_ENABLED
uniform sampler2D positionTexture;
#endif

void main()
{
 gl_Position = worldViewProjection * vec4(position, -10.0, 1.0);

 v_Color = a_Color;
}

@end

@export ecgl.lines2D.fragment

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

varying vec4 v_Color;

void main()
{
 gl_FragColor = color * v_Color;
}
@end


@export ecgl.meshLines2D.vertex

attribute vec2 position: POSITION;
attribute vec2 normal;
attribute float offset;
attribute vec4 a_Color : COLOR;

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform vec4 viewport : VIEWPORT;

varying vec4 v_Color;
varying float v_Miter;

void main()
{
 vec4 p2 = worldViewProjection * vec4(position + normal, -10.0, 1.0);
 gl_Position = worldViewProjection * vec4(position, -10.0, 1.0);

 p2.xy /= p2.w;
 gl_Position.xy /= gl_Position.w;

 vec2 N = normalize(p2.xy - gl_Position.xy);
 gl_Position.xy += N * offset / viewport.zw * 2.0;

 gl_Position.xy *= gl_Position.w;

 v_Color = a_Color;
}
@end


@export ecgl.meshLines2D.fragment

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

varying vec4 v_Color;
varying float v_Miter;

void main()
{
 gl_FragColor = color * v_Color;
}

@end`;var dn=We.vec2;E.Shader.import(Up);var zp=1;const Gp=Gt.extend({type:"graphGL",__ecgl__:!0,init:function(e,t){this.groupGL=new E.Node,this.viewGL=new Ae("orthographic"),this.viewGL.camera.left=this.viewGL.camera.right=0,this.viewGL.add(this.groupGL),this._pointsBuilder=new Ur(!0,t),this._forceEdgesMesh=new E.Mesh({material:new E.Material({shader:E.createShader("ecgl.forceAtlas2.edges"),transparent:!0,depthMask:!1,depthTest:!1}),$ignorePicking:!0,geometry:new E.Geometry({attributes:{node:new E.Geometry.Attribute("node","float",2),color:new E.Geometry.Attribute("color","float",4,"COLOR")},dynamic:!0,mainAttribute:"node"}),renderOrder:-1,mode:E.Mesh.LINES}),this._edgesMesh=new E.Mesh({material:new E.Material({shader:E.createShader("ecgl.meshLines2D"),transparent:!0,depthMask:!1,depthTest:!1}),$ignorePicking:!0,geometry:new hu({useNativeLine:!1,dynamic:!0}),renderOrder:-1,culling:!1}),this._layoutId=0,this._control=new Bp({zr:t.getZr(),viewGL:this.viewGL}),this._control.setTarget(this.groupGL),this._control.init(),this._clickHandler=this._clickHandler.bind(this)},render:function(e,t,r){this.groupGL.add(this._pointsBuilder.rootNode),this._model=e,this._api=r,this._initLayout(e,t,r),this._pointsBuilder.update(e,t,r),this._forceLayoutInstance instanceof Qe||this.groupGL.remove(this._forceEdgesMesh),this._updateCamera(e,r),this._control.off("update"),this._control.on("update",function(){r.dispatchAction({type:"graphGLRoam",seriesId:e.id,zoom:this._control.getZoom(),offset:this._control.getOffset()}),this._pointsBuilder.updateView(this.viewGL.camera)},this),this._control.setZoom(ce.firstNotNull(e.get("zoom"),1)),this._control.setOffset(e.get("offset")||[0,0]);var i=this._pointsBuilder.getPointsMesh();if(i.off("mousemove",this._mousemoveHandler),i.off("mouseout",this._mouseOutHandler,this),r.getZr().off("click",this._clickHandler),this._pointsBuilder.highlightOnMouseover=!0,e.get("focusNodeAdjacency")){var n=e.get("focusNodeAdjacencyOn");n==="click"?r.getZr().on("click",this._clickHandler):n==="mouseover"&&(i.on("mousemove",this._mousemoveHandler,this),i.on("mouseout",this._mouseOutHandler,this),this._pointsBuilder.highlightOnMouseover=!1)}this._lastMouseOverDataIndex=-1},_clickHandler:function(e){if(!this._layouting){var t=this._pointsBuilder.getPointsMesh().dataIndex;t>=0?this._api.dispatchAction({type:"graphGLFocusNodeAdjacency",seriesId:this._model.id,dataIndex:t}):this._api.dispatchAction({type:"graphGLUnfocusNodeAdjacency",seriesId:this._model.id})}},_mousemoveHandler:function(e){if(!this._layouting){var t=this._pointsBuilder.getPointsMesh().dataIndex;t>=0?t!==this._lastMouseOverDataIndex&&this._api.dispatchAction({type:"graphGLFocusNodeAdjacency",seriesId:this._model.id,dataIndex:t}):this._mouseOutHandler(e),this._lastMouseOverDataIndex=t}},_mouseOutHandler:function(e){this._layouting||(this._api.dispatchAction({type:"graphGLUnfocusNodeAdjacency",seriesId:this._model.id}),this._lastMouseOverDataIndex=-1)},_updateForceEdgesGeometry:function(e,t){var r=this._forceEdgesMesh.geometry,i=t.getEdgeData(),n=0,a=this._forceLayoutInstance,o=i.count()*2;r.attributes.node.init(o),r.attributes.color.init(o),i.each(function(s){var l=e[s];r.attributes.node.set(n,a.getNodeUV(l.node1)),r.attributes.node.set(n+1,a.getNodeUV(l.node2));var u=rt(i,l.dataIndex),c=E.parseColor(u);c[3]*=ce.firstNotNull(tt(i,l.dataIndex),1),r.attributes.color.set(n,c),r.attributes.color.set(n+1,c),n+=2}),r.dirty()},_updateMeshLinesGeometry:function(){var t=this._model.getEdgeData(),e=this._edgesMesh.geometry,t=this._model.getEdgeData(),r=this._model.getData().getLayout("points");e.resetOffset(),e.setVertexCount(t.count()*e.getLineVertexCount()),e.setTriangleCount(t.count()*e.getLineTriangleCount());var i=[],n=[],a=["lineStyle","width"];this._originalEdgeColors=new Float32Array(t.count()*4),this._edgeIndicesMap=new Float32Array(t.count()),t.each(function(o){var s=t.graph.getEdgeByIndex(o),l=s.node1.dataIndex*2,u=s.node2.dataIndex*2;i[0]=r[l],i[1]=r[l+1],n[0]=r[u],n[1]=r[u+1];var c=rt(t,s.dataIndex),h=E.parseColor(c);h[3]*=ce.firstNotNull(tt(t,s.dataIndex),1);var f=t.getItemModel(s.dataIndex),d=ce.firstNotNull(f.get(a),1)*this._api.getDevicePixelRatio();e.addLine(i,n,h,d);for(var v=0;v<4;v++)this._originalEdgeColors[s.dataIndex*4+v]=h[v];this._edgeIndicesMap[s.dataIndex]=o},this),e.dirty()},_updateForceNodesGeometry:function(e){for(var t=this._pointsBuilder.getPointsMesh(),r=[],i=0;i<e.count();i++)this._forceLayoutInstance.getNodeUV(i,r),t.geometry.attributes.position.set(i,r);t.geometry.dirty("position")},_initLayout:function(e,t,r){var i=e.get("layout"),n=e.getGraph(),a=e.getBoxLayoutParams(),o=Gn(a,{width:r.getWidth(),height:r.getHeight()});i==="force"&&(i="forceAtlas2"),this.stopLayout(e,t,r,{beforeLayout:!0});var s=e.getData(),l=e.getData();if(i==="forceAtlas2"){var u=e.getModel("forceAtlas2"),c=this._forceLayoutInstance,h=[],f=[],d=s.getDataExtent("value"),v=l.getDataExtent("value"),p=ce.firstNotNull(u.get("edgeWeight"),1),m=ce.firstNotNull(u.get("nodeWeight"),1);typeof p=="number"&&(p=[p,p]),typeof m=="number"&&(m=[m,m]);var _=0,x={},y=new Float32Array(s.count()*2);if(n.eachNode(function(w){var T=w.dataIndex,b=s.get("value",T),S,C;if(s.hasItemOption){var L=s.getItemModel(T);S=L.get("x"),C=L.get("y")}S==null&&(S=o.x+Math.random()*o.width,C=o.y+Math.random()*o.height),y[_*2]=S,y[_*2+1]=C,x[w.id]=_++;var A=To(b,d,m);isNaN(A)&&(isNaN(m[0])?A=1:A=m[0]),h.push({x:S,y:C,mass:A,size:s.getItemVisual(T,"symbolSize")})}),s.setLayout("points",y),n.eachEdge(function(w){var T=w.dataIndex,b=s.get("value",T),S=To(b,v,p);isNaN(S)&&(isNaN(p[0])?S=1:S=p[0]),f.push({node1:x[w.node1.id],node2:x[w.node2.id],weight:S,dataIndex:T})}),!c){var g=u.get("GPU");this._forceLayoutInstance&&(g&&!(this._forceLayoutInstance instanceof Qe)||!g&&!(this._forceLayoutInstance instanceof Fs))&&(this._forceLayoutInstanceToDispose=this._forceLayoutInstance),c=this._forceLayoutInstance=g?new Qe:new Fs}c.initData(h,f),c.updateOption(u.option),this._updateForceEdgesGeometry(c.getEdges(),e),this._updatePositionTexture(),r.dispatchAction({type:"graphGLStartLayout",from:this.uid})}else{var y=new Float32Array(s.count()*2),_=0;n.eachNode(function(b){var S=b.dataIndex,C,L;if(s.hasItemOption){var A=s.getItemModel(S);C=A.get("x"),L=A.get("y")}y[_++]=C,y[_++]=L}),s.setLayout("points",y),this._updateAfterLayout(e,t,r)}},_updatePositionTexture:function(){var e=this._forceLayoutInstance.getNodePositionTexture();this._pointsBuilder.setPositionTexture(e),this._forceEdgesMesh.material.set("positionTex",e)},startLayout:function(e,t,a,i){if(!(i&&i.from!=null&&i.from!==this.uid)){var n=this.viewGL,a=this._api,o=this._forceLayoutInstance,s=this._model.getData(),l=this._model.getModel("forceAtlas2");if(o&&(this.groupGL.remove(this._edgesMesh),this.groupGL.add(this._forceEdgesMesh),!!this._forceLayoutInstance)){this._updateForceNodesGeometry(e.getData()),this._pointsBuilder.hideLabels();var u=this,c=this._layoutId=zp++,h=l.getShallow("maxSteps"),f=l.getShallow("steps"),d=0,v=Math.max(f*2,20),p=function(m){if(m===u._layoutId){if(o.isFinished(h)){a.dispatchAction({type:"graphGLStopLayout",from:u.uid}),a.dispatchAction({type:"graphGLFinishLayout",points:s.getLayout("points"),from:u.uid});return}o.update(n.layer.renderer,f,function(){u._updatePositionTexture(),d+=f,d>=v&&(u._syncNodePosition(e),d=0),a.getZr().refresh(),Ca(function(){p(m)})})}};Ca(function(){u._forceLayoutInstanceToDispose&&(u._forceLayoutInstanceToDispose.dispose(n.layer.renderer),u._forceLayoutInstanceToDispose=null),p(c)}),this._layouting=!0}}},stopLayout:function(e,t,r,i){i&&i.from!=null&&i.from!==this.uid||(this._layoutId=0,this.groupGL.remove(this._forceEdgesMesh),this.groupGL.add(this._edgesMesh),this._forceLayoutInstance&&this.viewGL.layer&&(i&&i.beforeLayout||(this._syncNodePosition(e),this._updateAfterLayout(e,t,r)),this._api.getZr().refresh(),this._layouting=!1))},_syncNodePosition:function(e){var t=this._forceLayoutInstance.getNodePosition(this.viewGL.layer.renderer);e.getData().setLayout("points",t),e.setNodePosition(t)},_updateAfterLayout:function(e,t,r){this._updateMeshLinesGeometry(),this._pointsBuilder.removePositionTexture(),this._pointsBuilder.updateLayout(e,t,r),this._pointsBuilder.updateView(this.viewGL.camera),this._pointsBuilder.updateLabels(),this._pointsBuilder.showLabels()},focusNodeAdjacency:function(e,t,r,i){var n=this._model.getData();this._downplayAll();var a=i.dataIndex,o=n.graph,s=[],l=o.getNodeByIndex(a);s.push(l),l.edges.forEach(function(c){c.dataIndex<0||(c.node1!==l&&s.push(c.node1),c.node2!==l&&s.push(c.node2))},this),this._pointsBuilder.fadeOutAll(.05),this._fadeOutEdgesAll(.05),s.forEach(function(c){this._pointsBuilder.highlight(n,c.dataIndex)},this),this._pointsBuilder.updateLabels(s.map(function(c){return c.dataIndex}));var u=[];l.edges.forEach(function(c){c.dataIndex>=0&&(this._highlightEdge(c.dataIndex),u.push(c))},this),this._focusNodes=s,this._focusEdges=u},unfocusNodeAdjacency:function(e,t,r,i){this._downplayAll(),this._pointsBuilder.fadeInAll(),this._fadeInEdgesAll(),this._pointsBuilder.updateLabels()},_highlightEdge:function(e){var t=this._model.getEdgeData().getItemModel(e),r=E.parseColor(t.get("emphasis.lineStyle.color")||t.get("lineStyle.color")),i=ce.firstNotNull(t.get("emphasis.lineStyle.opacity"),t.get("lineStyle.opacity"),1);r[3]*=i,this._edgesMesh.geometry.setItemColor(this._edgeIndicesMap[e],r)},_downplayAll:function(){this._focusNodes&&this._focusNodes.forEach(function(e){this._pointsBuilder.downplay(this._model.getData(),e.dataIndex)},this),this._focusEdges&&this._focusEdges.forEach(function(e){this._downplayEdge(e.dataIndex)},this)},_downplayEdge:function(e){var t=this._getColor(e,[]);this._edgesMesh.geometry.setItemColor(this._edgeIndicesMap[e],t)},_setEdgeFade:function(){var e=[];return function(t,r){this._getColor(t,e),e[3]*=r,this._edgesMesh.geometry.setItemColor(this._edgeIndicesMap[t],e)}}(),_getColor:function(e,t){for(var r=0;r<4;r++)t[r]=this._originalEdgeColors[e*4+r];return t},_fadeOutEdgesAll:function(e){var t=this._model.getData().graph;t.eachEdge(function(r){this._setEdgeFade(r.dataIndex,e)},this)},_fadeInEdgesAll:function(){this._fadeOutEdgesAll(1)},_updateCamera:function(e,t){this.viewGL.setViewport(0,0,t.getWidth(),t.getHeight(),t.getDevicePixelRatio());for(var r=this.viewGL.camera,i=e.getData(),n=i.getLayout("points"),a=dn.create(1/0,1/0),o=dn.create(-1/0,-1/0),s=[],l=0;l<n.length;)s[0]=n[l++],s[1]=n[l++],dn.min(a,a,s),dn.max(o,o,s);var u=(o[1]+a[1])/2,c=(o[0]+a[0])/2;if(!(c>r.left&&c<r.right&&u<r.bottom&&u>r.top)){var h=Math.max(o[0]-a[0],10),f=h/t.getWidth()*t.getHeight();h*=1.4,f*=1.4,a[0]-=h*.2,r.left=a[0],r.top=u-f/2,r.bottom=u+f/2,r.right=h+a[0],r.near=0,r.far=100}},dispose:function(){var e=this.viewGL.layer.renderer;this._forceLayoutInstance&&this._forceLayoutInstance.dispose(e),this.groupGL.removeAll(),this._layoutId=-1,this._pointsBuilder.dispose()},remove:function(){this.groupGL.removeAll(),this._control.dispose()}});function vn(e){return e instanceof Array||(e=[e,e]),e}function Vp(e){e.registerChartView(Gp),e.registerSeriesModel(Np),e.registerVisual(function(r){const i={};r.eachSeriesByType("graphGL",function(n){var a=n.getCategoriesData(),o=n.getData(),s={};a.each(function(l){var u=a.getName(l);s["ec-"+u]=l;var c=a.getItemModel(l),h=c.getModel("itemStyle").getItemStyle();h.fill||(h.fill=n.getColorFromPalette(u,i)),a.setItemVisual(l,"style",h);var f=["symbol","symbolSize","symbolKeepAspect"];for(let v=0;v<f.length;v++){var d=c.getShallow(f[v],!0);d!=null&&a.setItemVisual(l,f[v],d)}}),a.count()&&o.each(function(l){var u=o.getItemModel(l);let c=u.getShallow("category");if(c!=null){typeof c=="string"&&(c=s["ec-"+c]);var h=a.getItemVisual(c,"style"),f=o.ensureUniqueItemVisual(l,"style");wo(f,h);var d=["symbol","symbolSize","symbolKeepAspect"];for(let v=0;v<d.length;v++)o.setItemVisual(l,d[v],a.getItemVisual(c,d[v]))}})})}),e.registerVisual(function(r){r.eachSeriesByType("graphGL",function(i){var n=i.getGraph(),a=i.getEdgeData(),o=vn(i.get("edgeSymbol")),s=vn(i.get("edgeSymbolSize"));a.setVisual("drawType","stroke"),a.setVisual("fromSymbol",o&&o[0]),a.setVisual("toSymbol",o&&o[1]),a.setVisual("fromSymbolSize",s&&s[0]),a.setVisual("toSymbolSize",s&&s[1]),a.setVisual("style",i.getModel("lineStyle").getLineStyle()),a.each(function(l){var u=a.getItemModel(l),c=n.getEdgeByIndex(l),h=vn(u.getShallow("symbol",!0)),f=vn(u.getShallow("symbolSize",!0)),d=u.getModel("lineStyle").getLineStyle(),v=a.ensureUniqueItemVisual(l,"style");switch(wo(v,d),v.stroke){case"source":{var p=c.node1.getVisual("style");v.stroke=p&&p.fill;break}case"target":{var p=c.node2.getVisual("style");v.stroke=p&&p.fill;break}}h[0]&&c.setVisual("fromSymbol",h[0]),h[1]&&c.setVisual("toSymbol",h[1]),f[0]&&c.setVisual("fromSymbolSize",f[0]),f[1]&&c.setVisual("toSymbolSize",f[1])})})}),e.registerAction({type:"graphGLRoam",event:"graphglroam",update:"series.graphGL:roam"},function(r,i){i.eachComponent({mainType:"series",query:r},function(n){n.setView(r)})});function t(){}e.registerAction({type:"graphGLStartLayout",event:"graphgllayoutstarted",update:"series.graphGL:startLayout"},t),e.registerAction({type:"graphGLStopLayout",event:"graphgllayoutstopped",update:"series.graphGL:stopLayout"},t),e.registerAction({type:"graphGLFocusNodeAdjacency",event:"graphGLFocusNodeAdjacency",update:"series.graphGL:focusNodeAdjacency"},t),e.registerAction({type:"graphGLUnfocusNodeAdjacency",event:"graphGLUnfocusNodeAdjacency",update:"series.graphGL:unfocusNodeAdjacency"},t)}st(Vp);const Hp=zt.extend({type:"series.flowGL",dependencies:["geo","grid","bmap"],visualStyleAccessPath:"itemStyle",getInitialData:function(e,t){var r=this.get("coordinateSystem"),i=r==="geo"?["lng","lat"]:ks(r)||["x","y"];i.push("vx","vy");var n=ji(this.getSource(),{coordDimensions:i,encodeDefine:this.get("encode"),dimensionsDefine:this.get("dimensions")}),a=new jt(n,this);return a.initData(this.getSource()),a},defaultOption:{coordinateSystem:"cartesian2d",zlevel:10,supersampling:1,particleType:"point",particleDensity:128,particleSize:1,particleSpeed:1,particleTrail:2,colorTexture:null,gridWidth:"auto",gridHeight:"auto",itemStyle:{color:"#fff",opacity:.8}}});var kp=ye.extend(function(){return{dynamic:!0,attributes:{position:new ye.Attribute("position","float",3,"POSITION")}}},{resetOffset:function(){this._vertexOffset=0,this._faceOffset=0},setLineCount:function(e){var t=this.attributes,r=4*e,i=2*e;this.vertexCount!==r&&t.position.init(r),this.triangleCount!==i&&(i===0?this.indices=null:this.indices=this.vertexCount>65535?new Uint32Array(i*3):new Uint16Array(i*3))},addLine:function(e){var t=this._vertexOffset;this.attributes.position.set(t,[e[0],e[1],1]),this.attributes.position.set(t+1,[e[0],e[1],-1]),this.attributes.position.set(t+2,[e[0],e[1],2]),this.attributes.position.set(t+3,[e[0],e[1],-2]),this.setTriangleIndices(this._faceOffset++,[t,t+1,t+2]),this.setTriangleIndices(this._faceOffset++,[t+1,t+2,t+3]),this._vertexOffset+=4}});const Wp=kp,Xp=`@export ecgl.vfParticle.particle.fragment

uniform sampler2D particleTexture;
uniform sampler2D spawnTexture;
uniform sampler2D velocityTexture;

uniform float deltaTime;
uniform float elapsedTime;

uniform float speedScaling : 1.0;

uniform vec2 textureSize;
uniform vec4 region : [0, 0, 1, 1];
uniform float firstFrameTime;

varying vec2 v_Texcoord;


void main()
{
 vec4 p = texture2D(particleTexture, v_Texcoord);
 bool spawn = false;
 if (p.w <= 0.0) {
 p = texture2D(spawnTexture, fract(v_Texcoord + elapsedTime / 10.0));
 p.w -= firstFrameTime;
 spawn = true;
 }
 vec2 v = texture2D(velocityTexture, fract(p.xy * region.zw + region.xy)).xy;
 v = (v - 0.5) * 2.0;
 p.z = length(v);
 p.xy += v * deltaTime / 10.0 * speedScaling;
 p.w -= deltaTime;

 if (spawn || p.xy != fract(p.xy)) {
 p.z = 0.0;
 }
 p.xy = fract(p.xy);

 gl_FragColor = p;
}
@end

@export ecgl.vfParticle.renderPoints.vertex

#define PI 3.1415926

attribute vec2 texcoord : TEXCOORD_0;

uniform sampler2D particleTexture;
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;

uniform float size : 1.0;

varying float v_Mag;
varying vec2 v_Uv;

void main()
{
 vec4 p = texture2D(particleTexture, texcoord);

 if (p.w > 0.0 && p.z > 1e-5) {
 gl_Position = worldViewProjection * vec4(p.xy * 2.0 - 1.0, 0.0, 1.0);
 }
 else {
 gl_Position = vec4(100000.0, 100000.0, 100000.0, 1.0);
 }

 v_Mag = p.z;
 v_Uv = p.xy;

 gl_PointSize = size;
}

@end

@export ecgl.vfParticle.renderPoints.fragment

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];
uniform sampler2D gradientTexture;
uniform sampler2D colorTexture;
uniform sampler2D spriteTexture;

varying float v_Mag;
varying vec2 v_Uv;

void main()
{
 gl_FragColor = color;
#ifdef SPRITETEXTURE_ENABLED
 gl_FragColor *= texture2D(spriteTexture, gl_PointCoord);
 if (color.a == 0.0) {
 discard;
 }
#endif
#ifdef GRADIENTTEXTURE_ENABLED
 gl_FragColor *= texture2D(gradientTexture, vec2(v_Mag, 0.5));
#endif
#ifdef COLORTEXTURE_ENABLED
 gl_FragColor *= texture2D(colorTexture, v_Uv);
#endif
}

@end

@export ecgl.vfParticle.renderLines.vertex

#define PI 3.1415926

attribute vec3 position : POSITION;

uniform sampler2D particleTexture;
uniform sampler2D prevParticleTexture;

uniform float size : 1.0;
uniform vec4 vp: VIEWPORT;
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;

varying float v_Mag;
varying vec2 v_Uv;

@import clay.util.rand

void main()
{
 vec4 p = texture2D(particleTexture, position.xy);
 vec4 p2 = texture2D(prevParticleTexture, position.xy);

 p.xy = p.xy * 2.0 - 1.0;
 p2.xy = p2.xy * 2.0 - 1.0;

 if (p.w > 0.0 && p.z > 1e-5) {
 vec2 dir = normalize(p.xy - p2.xy);
 vec2 norm = vec2(dir.y / vp.z, -dir.x / vp.w) * sign(position.z) * size;
 if (abs(position.z) == 2.0) {
 gl_Position = vec4(p.xy + norm, 0.0, 1.0);
 v_Uv = p.xy;
 v_Mag = p.z;
 }
 else {
 gl_Position = vec4(p2.xy + norm, 0.0, 1.0);
 v_Mag = p2.z;
 v_Uv = p2.xy;
 }
 gl_Position = worldViewProjection * gl_Position;
 }
 else {
 gl_Position = vec4(100000.0, 100000.0, 100000.0, 1.0);
 }
}

@end

@export ecgl.vfParticle.renderLines.fragment

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];
uniform sampler2D gradientTexture;
uniform sampler2D colorTexture;

varying float v_Mag;
varying vec2 v_Uv;

void main()
{
 gl_FragColor = color;
 #ifdef GRADIENTTEXTURE_ENABLED
 gl_FragColor *= texture2D(gradientTexture, vec2(v_Mag, 0.5));
#endif
#ifdef COLORTEXTURE_ENABLED
 gl_FragColor *= texture2D(colorTexture, v_Uv);
#endif
}

@end
`;V.import(Xp);function $p(e){var t=document.createElement("canvas");t.width=t.height=e;var r=t.getContext("2d");return r.fillStyle="#fff",r.arc(e/2,e/2,e/2,0,Math.PI*2),r.fill(),t}var ka=function(){this.motionBlurFactor=.99,this.vectorFieldTexture=new se({type:K.FLOAT,flipY:!1}),this.particleLife=[5,20],this._particleType="point",this._particleSize=1,this.particleColor=[1,1,1,1],this.particleSpeedScaling=1,this._thisFrameTexture=null,this._particlePass=null,this._spawnTexture=null,this._particleTexture0=null,this._particleTexture1=null,this._particlePointsMesh=null,this._surfaceFrameBuffer=null,this._elapsedTime=0,this._scene=null,this._camera=null,this._lastFrameTexture=null,this._supersampling=1,this._downsampleTextures=[],this._width=512,this._height=512,this.init()};ka.prototype={constructor:ka,init:function(){var e={type:K.FLOAT,minFilter:K.NEAREST,magFilter:K.NEAREST,useMipmap:!1};this._spawnTexture=new se(e),this._particleTexture0=new se(e),this._particleTexture1=new se(e),this._frameBuffer=new ot({depthBuffer:!1}),this._particlePass=new je({fragment:V.source("ecgl.vfParticle.particle.fragment")}),this._particlePass.setUniform("velocityTexture",this.vectorFieldTexture),this._particlePass.setUniform("spawnTexture",this._spawnTexture),this._downsamplePass=new je({fragment:V.source("clay.compositor.downsample")});var t=new Pr({renderOrder:10,material:new Nt({shader:new V(V.source("ecgl.vfParticle.renderPoints.vertex"),V.source("ecgl.vfParticle.renderPoints.fragment"))}),mode:Pr.POINTS,geometry:new ye({dynamic:!0,mainAttribute:"texcoord0"})}),r=new Pr({renderOrder:10,material:new Nt({shader:new V(V.source("ecgl.vfParticle.renderLines.vertex"),V.source("ecgl.vfParticle.renderLines.fragment"))}),geometry:new Wp,culling:!1}),i=new Pr({material:new Nt({shader:new V(V.source("ecgl.color.vertex"),V.source("ecgl.color.fragment"))}),geometry:new Xn});i.material.enableTexture("diffuseMap"),this._particlePointsMesh=t,this._particleLinesMesh=r,this._lastFrameFullQuadMesh=i,this._camera=new oi,this._thisFrameTexture=new se,this._lastFrameTexture=new se},setParticleDensity:function(e,t){for(var r=e*t,i=new Float32Array(r*4),n=0,a=this.particleLife,o=0;o<e;o++)for(var s=0;s<t;s++,n++){i[n*4]=Math.random(),i[n*4+1]=Math.random(),i[n*4+2]=Math.random();var l=(a[1]-a[0])*Math.random()+a[0];i[n*4+3]=l}this._particleType==="line"?this._setLineGeometry(e,t):this._setPointsGeometry(e,t),this._spawnTexture.width=e,this._spawnTexture.height=t,this._spawnTexture.pixels=i,this._particleTexture0.width=this._particleTexture1.width=e,this._particleTexture0.height=this._particleTexture1.height=t,this._particlePass.setUniform("textureSize",[e,t])},_setPointsGeometry:function(e,t){var r=e*t,i=this._particlePointsMesh.geometry,n=i.attributes;n.texcoord0.init(r);for(var a=0,o=0;o<e;o++)for(var s=0;s<t;s++,a++)n.texcoord0.value[a*2]=o/e,n.texcoord0.value[a*2+1]=s/t;i.dirty()},_setLineGeometry:function(e,t){var r=e*t,i=this._getParticleMesh().geometry;i.setLineCount(r),i.resetOffset();for(var n=0;n<e;n++)for(var a=0;a<t;a++)i.addLine([n/e,a/t]);i.dirty()},_getParticleMesh:function(){return this._particleType==="line"?this._particleLinesMesh:this._particlePointsMesh},update:function(e,t,r,i){var n=this._getParticleMesh(),a=this._frameBuffer,o=this._particlePass;i&&this._updateDownsampleTextures(e,t),n.material.set("size",this._particleSize*this._supersampling),n.material.set("color",this.particleColor),o.setUniform("speedScaling",this.particleSpeedScaling),a.attach(this._particleTexture1),o.setUniform("firstFrameTime",i?(this.particleLife[1]+this.particleLife[0])/2:0),o.setUniform("particleTexture",this._particleTexture0),o.setUniform("deltaTime",r),o.setUniform("elapsedTime",this._elapsedTime),o.render(e,a),n.material.set("particleTexture",this._particleTexture1),n.material.set("prevParticleTexture",this._particleTexture0),a.attach(this._thisFrameTexture),a.bind(e),e.gl.clear(e.gl.DEPTH_BUFFER_BIT|e.gl.COLOR_BUFFER_BIT);var s=this._lastFrameFullQuadMesh;s.material.set("diffuseMap",this._lastFrameTexture),s.material.set("color",[1,1,1,this.motionBlurFactor]),this._camera.update(!0),e.renderPass([s,n],this._camera),a.unbind(e),this._downsample(e),this._swapTexture(),this._elapsedTime+=r},_downsample:function(e){var t=this._downsampleTextures;if(t.length!==0)for(var r=0,i=this._thisFrameTexture,n=t[r];n;)this._frameBuffer.attach(n),this._downsamplePass.setUniform("texture",i),this._downsamplePass.setUniform("textureSize",[i.width,i.height]),this._downsamplePass.render(e,this._frameBuffer),i=n,n=t[++r]},getSurfaceTexture:function(){var e=this._downsampleTextures;return e.length>0?e[e.length-1]:this._lastFrameTexture},setRegion:function(e){this._particlePass.setUniform("region",e)},resize:function(e,t){this._lastFrameTexture.width=e*this._supersampling,this._lastFrameTexture.height=t*this._supersampling,this._thisFrameTexture.width=e*this._supersampling,this._thisFrameTexture.height=t*this._supersampling,this._width=e,this._height=t},setParticleSize:function(e){var t=this._getParticleMesh();if(e<=2){t.material.disableTexture("spriteTexture"),t.material.transparent=!1;return}this._spriteTexture||(this._spriteTexture=new se),(!this._spriteTexture.image||this._spriteTexture.image.width!==e)&&(this._spriteTexture.image=$p(e),this._spriteTexture.dirty()),t.material.transparent=!0,t.material.enableTexture("spriteTexture"),t.material.set("spriteTexture",this._spriteTexture),this._particleSize=e},setGradientTexture:function(e){var t=this._getParticleMesh().material;t[e?"enableTexture":"disableTexture"]("gradientTexture"),t.setUniform("gradientTexture",e)},setColorTextureImage:function(e,t){var r=this._getParticleMesh().material;r.setTextureImage("colorTexture",e,t,{flipY:!0})},setParticleType:function(e){this._particleType=e},clearFrame:function(e){var t=this._frameBuffer;t.attach(this._lastFrameTexture),t.bind(e),e.gl.clear(e.gl.DEPTH_BUFFER_BIT|e.gl.COLOR_BUFFER_BIT),t.unbind(e)},setSupersampling:function(e){this._supersampling=e,this.resize(this._width,this._height)},_updateDownsampleTextures:function(e,t){for(var r=this._downsampleTextures,i=Math.max(Math.floor(Math.log(this._supersampling/t.getDevicePixelRatio())/Math.log(2)),0),n=2,a=this._width*this._supersampling,o=this._height*this._supersampling,s=0;s<i;s++)r[s]=r[s]||new se,r[s].width=a/n,r[s].height=o/n,n*=2;for(;s<r.length;s++)r[s].dispose(e);r.length=i},_swapTexture:function(){var e=this._particleTexture0;this._particleTexture0=this._particleTexture1,this._particleTexture1=e;var e=this._thisFrameTexture;this._thisFrameTexture=this._lastFrameTexture,this._lastFrameTexture=e},dispose:function(e){e.disposeFrameBuffer(this._frameBuffer),e.disposeTexture(this.vectorFieldTexture),e.disposeTexture(this._spawnTexture),e.disposeTexture(this._particleTexture0),e.disposeTexture(this._particleTexture1),e.disposeTexture(this._thisFrameTexture),e.disposeTexture(this._lastFrameTexture),e.disposeGeometry(this._particleLinesMesh.geometry),e.disposeGeometry(this._particlePointsMesh.geometry),e.disposeGeometry(this._lastFrameFullQuadMesh.geometry),this._spriteTexture&&e.disposeTexture(this._spriteTexture),this._particlePass.dispose(e),this._downsamplePass.dispose(e),this._downsampleTextures.forEach(function(t){t.dispose(e)})}};const jp=ka,Zp=Gt.extend({type:"flowGL",__ecgl__:!0,init:function(e,t){this.viewGL=new Ae("orthographic"),this.groupGL=new E.Node,this.viewGL.add(this.groupGL),this._particleSurface=new jp;var r=new E.Mesh({geometry:new E.PlaneGeometry,material:new E.Material({shader:new E.Shader({vertex:E.Shader.source("ecgl.color.vertex"),fragment:E.Shader.source("ecgl.color.fragment")}),transparent:!0})});r.material.enableTexture("diffuseMap"),this.groupGL.add(r),this._planeMesh=r},render:function(e,t,r){var i=this._particleSurface;i.setParticleType(e.get("particleType")),i.setSupersampling(e.get("supersampling")),this._updateData(e,r),this._updateCamera(r.getWidth(),r.getHeight(),r.getDevicePixelRatio());var n=ce.firstNotNull(e.get("particleDensity"),128);i.setParticleDensity(n,n);var a=this._planeMesh,o=+new Date,s=this,l=!0;a.__percent=0,a.stopAnimation(),a.animate("",{loop:!0}).when(1e5,{__percent:1}).during(function(){var h=+new Date,f=Math.min(h-o,20);o=o+f,s._renderer&&(i.update(s._renderer,r,f/1e3,l),a.material.set("diffuseMap",i.getSurfaceTexture())),l=!1}).start();var u=e.getModel("itemStyle"),c=E.parseColor(u.get("color"));c[3]*=ce.firstNotNull(u.get("opacity"),1),a.material.set("color",c),i.setColorTextureImage(e.get("colorTexture"),r),i.setParticleSize(e.get("particleSize")),i.particleSpeedScaling=e.get("particleSpeed"),i.motionBlurFactor=1-Math.pow(.1,e.get("particleTrail"))},updateTransform:function(e,t,r){this._updateData(e,r)},afterRender:function(e,t,r,i){var n=i.renderer;this._renderer=n},_updateData:function(e,t){var r=e.coordinateSystem,i=r.dimensions.map(function(x){return e.coordDimToDataDim(x)[0]}),n=e.getData(),a=n.getDataExtent(i[0]),o=n.getDataExtent(i[1]),s=e.get("gridWidth"),l=e.get("gridHeight");if(s==null||s==="auto"){var u=(a[1]-a[0])/(o[1]-o[0]);s=Math.round(Math.sqrt(u*n.count()))}(l==null||l==="auto")&&(l=Math.ceil(n.count()/s));var c=this._particleSurface.vectorFieldTexture,h=c.pixels;if(!h||h.length!==l*s*4)h=c.pixels=new Float32Array(s*l*4);else for(var f=0;f<h.length;f++)h[f]=0;var d=0,v=1/0,p=new Float32Array(n.count()*2),m=0,_=[[1/0,1/0],[-1/0,-1/0]];n.each([i[0],i[1],"vx","vy"],function(x,y,g,w){var T=r.dataToPoint([x,y]);p[m++]=T[0],p[m++]=T[1],_[0][0]=Math.min(T[0],_[0][0]),_[0][1]=Math.min(T[1],_[0][1]),_[1][0]=Math.max(T[0],_[1][0]),_[1][1]=Math.max(T[1],_[1][1]);var b=Math.sqrt(g*g+w*w);d=Math.max(d,b),v=Math.min(v,b)}),n.each(["vx","vy"],function(x,y,g){var w=Math.round((p[g*2]-_[0][0])/(_[1][0]-_[0][0])*(s-1)),T=l-1-Math.round((p[g*2+1]-_[0][1])/(_[1][1]-_[0][1])*(l-1)),b=(T*s+w)*4;h[b]=x/d*.5+.5,h[b+1]=y/d*.5+.5,h[b+3]=1}),c.width=s,c.height=l,e.get("coordinateSystem")==="bmap"&&this._fillEmptyPixels(c),c.dirty(),this._updatePlanePosition(_[0],_[1],e,t),this._updateGradientTexture(n.getVisual("visualMeta"),[v,d])},_fillEmptyPixels:function(e){var t=e.pixels,r=e.width,i=e.height;function n(p,m,_){p=Math.max(Math.min(p,r-1),0),m=Math.max(Math.min(m,i-1),0);var x=(m*(r-1)+p)*4;return t[x+3]===0?!1:(_[0]=t[x],_[1]=t[x+1],!0)}function a(p,m,_){_[0]=p[0]+m[0],_[1]=p[1]+m[1]}for(var o=[],s=[],l=[],u=[],c=[],h=0,f=0;f<i;f++)for(var d=0;d<r;d++){var v=(f*(r-1)+d)*4;t[v+3]===0&&(h=o[0]=o[1]=0,n(d-1,f,s)&&(h++,a(s,o,o)),n(d+1,f,l)&&(h++,a(l,o,o)),n(d,f-1,u)&&(h++,a(u,o,o)),n(d,f+1,c)&&(h++,a(c,o,o)),o[0]/=h,o[1]/=h,t[v]=o[0],t[v+1]=o[1]),t[v+3]=1}},_updateGradientTexture:function(e,t){if(!e||!e.length){this._particleSurface.setGradientTexture(null);return}this._gradientTexture=this._gradientTexture||new E.Texture2D({image:document.createElement("canvas")});var r=this._gradientTexture,i=r.image;i.width=200,i.height=1;var n=i.getContext("2d"),a=n.createLinearGradient(0,.5,i.width,.5);e[0].stops.forEach(function(o){var s;t[1]===t[0]?s=0:(s=o.value/t[1],s=Math.min(Math.max(s,0),1)),a.addColorStop(s,o.color)}),n.fillStyle=a,n.fillRect(0,0,i.width,i.height),r.dirty(),this._particleSurface.setGradientTexture(this._gradientTexture)},_updatePlanePosition:function(e,t,r,i){var n=this._limitInViewportAndFullFill(e,t,r,i);e=n.leftTop,t=n.rightBottom,this._particleSurface.setRegion(n.region),this._planeMesh.position.set((e[0]+t[0])/2,i.getHeight()-(e[1]+t[1])/2,0);var a=t[0]-e[0],o=t[1]-e[1];this._planeMesh.scale.set(a/2,o/2,1),this._particleSurface.resize(Math.max(Math.min(a,2048),1),Math.max(Math.min(o,2048),1)),this._renderer&&this._particleSurface.clearFrame(this._renderer)},_limitInViewportAndFullFill:function(e,t,r,i){var n=[Math.max(e[0],0),Math.max(e[1],0)],a=[Math.min(t[0],i.getWidth()),Math.min(t[1],i.getHeight())];if(r.get("coordinateSystem")==="bmap"){var o=r.getData().getDataExtent(r.coordDimToDataDim("lng")[0]),s=Math.floor(o[1]-o[0])>=359;s&&(n[0]>0&&(n[0]=0),a[0]<i.getWidth()&&(a[0]=i.getWidth()))}var l=t[0]-e[0],u=t[1]-e[1],c=a[0]-n[0],h=a[1]-n[1],f=[(n[0]-e[0])/l,1-h/u-(n[1]-e[1])/u,c/l,h/u];return{leftTop:n,rightBottom:a,region:f}},_updateCamera:function(e,t,r){this.viewGL.setViewport(0,0,e,t,r);var i=this.viewGL.camera;i.left=i.bottom=0,i.top=t,i.right=e,i.near=0,i.far=100,i.position.z=10},remove:function(){this._planeMesh.stopAnimation(),this.groupGL.removeAll()},dispose:function(){this._renderer&&this._particleSurface.dispose(this._renderer),this.groupGL.removeAll()}});function Yp(e){e.registerChartView(Zp),e.registerSeriesModel(Hp)}st(Yp);var Wa=zt.extend({type:"series.linesGL",dependencies:["grid","geo"],visualStyleAccessPath:"lineStyle",visualDrawType:"stroke",streamEnabled:!0,init:function(e){var t=this._processFlatCoordsArray(e.data);this._flatCoords=t.flatCoords,this._flatCoordsOffset=t.flatCoordsOffset,t.flatCoords&&(e.data=new Float32Array(t.count)),Wa.superApply(this,"init",arguments)},mergeOption:function(e){var t=this._processFlatCoordsArray(e.data);this._flatCoords=t.flatCoords,this._flatCoordsOffset=t.flatCoordsOffset,t.flatCoords&&(e.data=new Float32Array(t.count)),Wa.superApply(this,"mergeOption",arguments)},appendData:function(e){var t=this._processFlatCoordsArray(e.data);t.flatCoords&&(this._flatCoords?(this._flatCoords=So(this._flatCoords,t.flatCoords),this._flatCoordsOffset=So(this._flatCoordsOffset,t.flatCoordsOffset)):(this._flatCoords=t.flatCoords,this._flatCoordsOffset=t.flatCoordsOffset),e.data=new Float32Array(t.count)),this.getRawData().appendData(e.data)},_getCoordsFromItemModel:function(e){var t=this.getData().getItemModel(e),r=t.option instanceof Array?t.option:t.getShallow("coords");return r},getLineCoordsCount:function(e){return this._flatCoordsOffset?this._flatCoordsOffset[e*2+1]:this._getCoordsFromItemModel(e).length},getLineCoords:function(e,t){if(this._flatCoordsOffset){for(var r=this._flatCoordsOffset[e*2],i=this._flatCoordsOffset[e*2+1],n=0;n<i;n++)t[n]=t[n]||[],t[n][0]=this._flatCoords[r+n*2],t[n][1]=this._flatCoords[r+n*2+1];return i}else{for(var a=this._getCoordsFromItemModel(e),n=0;n<a.length;n++)t[n]=t[n]||[],t[n][0]=a[n][0],t[n][1]=a[n][1];return a.length}},_processFlatCoordsArray:function(e){var t=0;if(this._flatCoords&&(t=this._flatCoords.length),typeof e[0]=="number"){for(var r=e.length,i=new Uint32Array(r),n=new Float64Array(r),a=0,o=0,s=0,l=0;l<r;){s++;var u=e[l++];i[o++]=a+t,i[o++]=u;for(var c=0;c<u;c++){var h=e[l++],f=e[l++];n[a++]=h,n[a++]=f}}return{flatCoordsOffset:new Uint32Array(i.buffer,0,o),flatCoords:n,count:s}}return{flatCoordsOffset:null,flatCoords:null,count:e.length}},getInitialData:function(e,t){var r=new jt(["value"],this);return r.hasItemOption=!1,r.initData(e.data,[],function(i,n,a,o){if(i instanceof Array)return NaN;r.hasItemOption=!0;var s=i.value;if(s!=null)return s instanceof Array?s[o]:s}),r},defaultOption:{coordinateSystem:"geo",zlevel:10,progressive:1e4,progressiveThreshold:5e4,blendMode:"source-over",lineStyle:{opacity:.8},postEffect:{enable:!1,colorCorrection:{exposure:0,brightness:0,contrast:1,saturation:1,enable:!0}}}});const qp=Wa,Kp=Gt.extend({type:"linesGL",__ecgl__:!0,init:function(e,t){this.groupGL=new E.Node,this.viewGL=new Ae("orthographic"),this.viewGL.add(this.groupGL),this._glViewHelper=new sr(this.viewGL),this._nativeLinesShader=E.createShader("ecgl.lines3D"),this._meshLinesShader=E.createShader("ecgl.meshLines3D"),this._linesMeshes=[],this._currentStep=0},render:function(e,t,r){this.groupGL.removeAll(),this._glViewHelper.reset(e,r);var i=this._linesMeshes[0];i||(i=this._linesMeshes[0]=this._createLinesMesh(e)),this._linesMeshes.length=1,this.groupGL.add(i),this._updateLinesMesh(e,i,0,e.getData().count()),this.viewGL.setPostEffect(e.getModel("postEffect"),r)},incrementalPrepareRender:function(e,t,r){this.groupGL.removeAll(),this._glViewHelper.reset(e,r),this._currentStep=0,this.viewGL.setPostEffect(e.getModel("postEffect"),r)},incrementalRender:function(e,t,r,i){var n=this._linesMeshes[this._currentStep];n||(n=this._createLinesMesh(t),this._linesMeshes[this._currentStep]=n),this._updateLinesMesh(t,n,e.start,e.end),this.groupGL.add(n),i.getZr().refresh(),this._currentStep++},updateTransform:function(e,t,r){e.coordinateSystem.getRoamTransform&&this._glViewHelper.updateTransform(e,r)},_createLinesMesh:function(e){var t=new E.Mesh({$ignorePicking:!0,material:new E.Material({shader:E.createShader("ecgl.lines3D"),transparent:!0,depthMask:!1,depthTest:!1}),geometry:new hu({segmentScale:10,useNativeLine:!0,dynamic:!1}),mode:E.Mesh.LINES,culling:!1});return t},_updateLinesMesh:function(e,t,r,i){var n=e.getData();t.material.blend=e.get("blendMode")==="lighter"?E.additiveBlend:null;var a=e.get("lineStyle.curveness")||0,o=e.get("polyline"),s=t.geometry,l=e.coordinateSystem,u=ce.firstNotNull(e.get("lineStyle.width"),1);u>1?(t.material.shader!==this._meshLinesShader&&t.material.attachShader(this._meshLinesShader),t.mode=E.Mesh.TRIANGLES):(t.material.shader!==this._nativeLinesShader&&t.material.attachShader(this._nativeLinesShader),t.mode=E.Mesh.LINES),r=r||0,i=i||n.count(),s.resetOffset();var c=0,h=0,f=[],d=[],v=[],p=[],m=[],_=.3,x=.7;function y(){d[0]=f[0]*x+p[0]*_-(f[1]-p[1])*a,d[1]=f[1]*x+p[1]*_-(p[0]-f[0])*a,v[0]=f[0]*_+p[0]*x-(f[1]-p[1])*a,v[1]=f[1]*_+p[1]*x-(p[0]-f[0])*a}if(o||a!==0)for(var g=r;g<i;g++)if(o){var w=e.getLineCoordsCount(g);c+=s.getPolylineVertexCount(w),h+=s.getPolylineTriangleCount(w)}else e.getLineCoords(g,m),this._glViewHelper.dataToPoint(l,m[0],f),this._glViewHelper.dataToPoint(l,m[1],p),y(),c+=s.getCubicCurveVertexCount(f,d,v,p),h+=s.getCubicCurveTriangleCount(f,d,v,p);else{var T=i-r;c+=T*s.getLineVertexCount(),h+=T*s.getLineVertexCount()}s.setVertexCount(c),s.setTriangleCount(h);for(var b=r,S=[],g=r;g<i;g++){E.parseColor(rt(n,b),S);var C=ce.firstNotNull(tt(n,b),1);S[3]*=C;for(var w=e.getLineCoords(g,m),L=0;L<w;L++)this._glViewHelper.dataToPoint(l,m[L],m[L]);o?s.addPolyline(m,S,u,0,w):a!==0?(f=m[0],p=m[1],y(),s.addCubicCurve(f,d,v,p,S,u)):s.addPolyline(m,S,u,0,2),b++}},dispose:function(){this.groupGL.removeAll()},remove:function(){this.groupGL.removeAll()}});function Qp(e){e.registerChartView(Kp),e.registerSeriesModel(qp)}st(Qp);const Jp={class:"scatter3d-container"},em={class:"scatter3d-header"},tm={class:"scatter3d-title"},rm={class:"scatter3d-controls"},im={__name:"Scatter3DChart",props:{title:{type:String,default:"米其林餐厅3D分布"},height:{type:Number,default:600},data:{type:Array,default:()=>[]}},emits:["pointClick","axisChange"],setup(e,{expose:t,emit:r}){const i=e,n=r,a=tr(),o=ie(null);let s=null;const l=ie("longitude"),u=ie("latitude"),c=ie("price_numeric"),h=ie(!0),f=[{value:"longitude",label:"经度"},{value:"latitude",label:"纬度"},{value:"price_numeric",label:"价格指数"},{value:"year",label:"获奖年份"},{value:"award_years",label:"获奖年限"},{value:"cuisine_diversity",label:"菜系多样性"}],d=b=>{const S={1:"#D4AF37",2:"#DC143C",3:"#40E0D0"},C=[],L=new Map;return b.forEach(A=>{const M=A.stars||1;L.has(M)||L.set(M,[]);const P=v(A,l.value),D=v(A,u.value),N=v(A,c.value);P!==null&&D!==null&&N!==null&&L.get(M).push({value:[P,D,N],name:A.restaurant_name,itemStyle:{color:S[M],opacity:.8},data:A})}),L.forEach((A,M)=>{C.push({type:"scatter3D",name:`${M}星餐厅`,data:A,symbolSize:8+M*3,itemStyle:{borderWidth:1,borderColor:"rgba(255,255,255,0.8)"},emphasis:{itemStyle:{opacity:1,shadowBlur:10,shadowOffsetY:5,shadowColor:"rgba(0, 0, 0, 0.5)"}}})}),C},v=(b,S)=>{switch(S){case"longitude":return parseFloat(b.longitude)||null;case"latitude":return parseFloat(b.latitude)||null;case"price_numeric":return b.price_numeric||p(b.price);case"year":return parseInt(b.year)||null;case"award_years":return b.award_years||new Date().getFullYear()-parseInt(b.year);case"cuisine_diversity":return m(b.cuisine);default:return null}},p=b=>{if(!b)return 2;const S=(b.match(/\$/g)||[]).length;return Math.max(1,Math.min(5,S))},m=b=>{if(!b)return 1;const S=b.split(/[,;\s]+/).filter(C=>C.length>0);return Math.min(10,S.length*2)},_=b=>{var S;return((S=f.find(C=>C.value===b))==null?void 0:S.label)||b},x=async(b,S=20,C=100)=>{let L=0;return new Promise((A,M)=>{const P=()=>{b.value&&b.value.clientWidth>0&&b.value.clientHeight>0?A():L<S?(L++,setTimeout(P,C)):M(new Error(`Container not ready after ${S} retries`))};P()})},y=async()=>{await yt();try{await x(o)}catch(L){console.warn("Scatter3DChart container is not ready:",L.message);return}s&&s.dispose(),s=gr(o.value);let b=i.data;b.length||(await a.fetchRestaurants(),b=a.restaurants);const S=d(b),C={tooltip:{trigger:"item",formatter:L=>{const A=L.data.data,M=_(l.value),P=_(u.value),D=_(c.value);return`
          <div style="padding: 12px;">
            <div style="font-weight: 600; margin-bottom: 8px;">${A.restaurant_name}</div>
            <div style="display: grid; gap: 4px; font-size: 12px;">
              <div>星级: ${"⭐".repeat(A.stars||1)}</div>
              <div>菜系: ${A.cuisine||"N/A"}</div>
              <div>价格: ${A.price||"N/A"}</div>
              <div>城市: ${A.city||"N/A"}, ${A.region||""}</div>
              <div style="margin-top: 8px; padding-top: 8px; border-top: 1px solid #e0e0e0;">
                <div>${M}: ${L.value[0].toFixed(2)}</div>
                <div>${P}: ${L.value[1].toFixed(2)}</div>
                <div>${D}: ${L.value[2].toFixed(2)}</div>
              </div>
            </div>
          </div>
        `}},backgroundColor:"#fafafa",legend:{data:S.map(L=>L.name),left:"center",top:10,textStyle:{fontSize:12}},xAxis3D:{type:"value",name:_(l.value),nameTextStyle:{fontSize:14},axisLine:{lineStyle:{color:"#999"}},axisPointer:{show:!0,lineStyle:{color:"#409EFF",width:1}},splitLine:{show:!0,lineStyle:{color:"#e0e0e0"}}},yAxis3D:{type:"value",name:_(u.value),nameTextStyle:{fontSize:14},axisLine:{lineStyle:{color:"#999"}},splitLine:{show:!0,lineStyle:{color:"#e0e0e0"}}},zAxis3D:{type:"value",name:_(c.value),nameTextStyle:{fontSize:14},axisLine:{lineStyle:{color:"#999"}},splitLine:{show:!0,lineStyle:{color:"#e0e0e0"}}},grid3D:{boxWidth:100,boxDepth:100,boxHeight:80,viewControl:{distance:150,alpha:30,beta:30,center:[0,0,0],autoRotate:h.value,autoRotateSpeed:10},light:{main:{intensity:1.2,shadow:!0},ambient:{intensity:.3}},postEffect:{enable:!0,bloom:{enable:!0,intensity:.1},SSAO:{enable:!0,radius:4,intensity:1.5}},temporalSuperSampling:{enable:!0}},series:S};s.setOption(C),s.on("click",L=>{L.componentType==="series"&&n("pointClick",{name:L.data.name,data:L.data.data,value:L.value})})},g=()=>{s&&(y(),n("axisChange",{x:l.value,y:u.value,z:c.value}))},w=()=>{s&&s.setOption({grid3D:{viewControl:{autoRotate:h.value}}})},T=()=>{s&&s.resize()};return Rt(()=>i.data,()=>{y()},{deep:!0}),ir(()=>{y(),window.addEventListener("resize",T)}),yr(()=>{window.removeEventListener("resize",T),s&&s.dispose()}),t({refresh:y,updateChart:g}),(b,S)=>{const C=zr,L=Gr,A=Vn;return fe(),Se("div",Jp,[O("div",em,[O("h3",tm,Re(e.title),1),O("div",rm,[j(L,{modelValue:l.value,"onUpdate:modelValue":S[0]||(S[0]=M=>l.value=M),size:"small",onChange:g,placeholder:"X轴",class:"axis-select"},{default:ae(()=>[(fe(),Se(St,null,bt(f,M=>j(C,{key:M.value,label:M.label,value:M.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"]),j(L,{modelValue:u.value,"onUpdate:modelValue":S[1]||(S[1]=M=>u.value=M),size:"small",onChange:g,placeholder:"Y轴",class:"axis-select"},{default:ae(()=>[(fe(),Se(St,null,bt(f,M=>j(C,{key:M.value,label:M.label,value:M.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"]),j(L,{modelValue:c.value,"onUpdate:modelValue":S[2]||(S[2]=M=>c.value=M),size:"small",onChange:g,placeholder:"Z轴",class:"axis-select"},{default:ae(()=>[(fe(),Se(St,null,bt(f,M=>j(C,{key:M.value,label:M.label,value:M.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"]),j(A,{modelValue:h.value,"onUpdate:modelValue":S[3]||(S[3]=M=>h.value=M),onChange:w},{default:ae(()=>S[4]||(S[4]=[Ge(" 自动旋转 ")])),_:1,__:[4]},8,["modelValue"])])]),O("div",{ref_key:"scatter3dRef",ref:o,style:Jt({height:e.height+"px"}),class:"scatter3d-chart"},null,4),S[5]||(S[5]=ju('<div class="scatter3d-info" data-v-0042af08><div class="info-item" data-v-0042af08><i class="el-icon-data-analysis" data-v-0042af08></i><span data-v-0042af08>拖拽旋转查看3D视角</span></div><div class="info-item" data-v-0042af08><i class="el-icon-zoom-in" data-v-0042af08></i><span data-v-0042af08>滚轮缩放调整大小</span></div><div class="info-item" data-v-0042af08><i class="el-icon-position" data-v-0042af08></i><span data-v-0042af08>右键拖拽平移视图</span></div></div>',1))])}}},nm=rr(im,[["__scopeId","data-v-0042af08"]]);const fu=async(e,t=50,r=200)=>{let i=0;return new Promise((n,a)=>{const o=()=>{if(e.value){const s=e.value.getBoundingClientRect(),l=s.width>0&&s.height>0,u=e.value.offsetWidth>0&&e.value.offsetHeight>0;l||u?n():i<t?(i++,setTimeout(o,r)):(console.warn("Container may be hidden, attempting to initialize anyway"),n())}else i<t?(i++,setTimeout(o,r)):a(new Error(`Container not found after ${t} retries`))};o()})},du=async(e,t=600)=>{e.value&&(!e.value.clientWidth||!e.value.clientHeight)&&(e.value.style.width="100%",e.value.style.height=`${t}px`,await new Promise(r=>setTimeout(r,50)))},am=(e,t)=>{if(!e.value)return null;const r=new IntersectionObserver(i=>{i.forEach(n=>{n.isIntersecting&&n.intersectionRatio>0&&setTimeout(t,100)})},{threshold:.1});return r.observe(e.value),r},Aa={1:"#D4AF37",2:"#DC143C",3:"#40E0D0"};const om={class:"network-container"},sm={class:"network-header"},lm={class:"network-title"},um={class:"network-controls"},cm={class:"size-label"},hm={class:"network-legend"},fm={class:"legend-text"},dm={__name:"NetworkChart",props:{title:{type:String,default:"米其林餐厅关系网络",validator:e=>typeof e=="string"&&e.length<=50},height:{type:Number,default:600,validator:e=>e>=300&&e<=1200},data:{type:Array,default:()=>[],validator:e=>Array.isArray(e)?e.every(t=>typeof t=="object"&&t!==null&&"restaurant_name"in t&&typeof t.stars=="number"&&t.stars>=1&&t.stars<=3):!1},maxNodes:{type:Number,default:100,validator:e=>e>=10&&e<=500}},emits:{nodeClick:e=>typeof e=="object"&&e!==null&&"restaurant_name"in e,linkClick:e=>typeof e=="object"&&e!==null&&"source"in e&&"target"in e,relationshipChange:e=>typeof e=="string"&&["cuisine","location","price","star","year"].includes(e)},setup(e,{expose:t,emit:r}){const i=e,n=r,a=tr(),o=ie(null);let s=null;const l=ie("cuisine"),u=ie(20),c=ie(!0),h=[{value:"cuisine",label:"菜系关联"},{value:"location",label:"地理邻近"},{value:"price",label:"价格相似"},{value:"star",label:"星级相同"},{value:"year",label:"同期获奖"}],f=ie([{value:1,label:"一星餐厅",color:Aa[1]},{value:2,label:"二星餐厅",color:Aa[2]},{value:3,label:"三星餐厅",color:Aa[3]}]),d=(S,C)=>{const L=[],A=[],M=new Map;S.slice(0,i.maxNodes).forEach((U,W)=>{const z=U.restaurant_name||U.name||`餐厅_${W}`,$=`${z}_${W}`;L.push({id:$,name:z,value:U.stars||1,category:(U.stars||1)-1,symbolSize:u.value+(U.stars||1)*5,itemStyle:{color:m(U.stars||1)},data:U}),M.set($,U)});for(let U=0;U<L.length;U++)for(let W=U+1;W<L.length;W++){const z=L[U],$=L[W],G=z.data,ne=$.data;let B=!1,I=1;switch(C){case"cuisine":G.cuisine&&ne.cuisine&&G.cuisine.toLowerCase()===ne.cuisine.toLowerCase()&&(B=!0,I=2);break;case"location":G.city===ne.city?(B=!0,I=3):v(G.latitude,G.longitude,ne.latitude,ne.longitude)<50&&(B=!0,I=1);break;case"price":G.price===ne.price&&(B=!0,I=2);break;case"star":G.stars===ne.stars&&(B=!0,I=G.stars||1);break;case"year":G.year===ne.year&&(B=!0,I=2);break}B&&A.push({source:z.id,target:$.id,value:I,lineStyle:{width:Math.max(1,I),opacity:.6}})}const D=new Set;return A.forEach(U=>{D.add(U.source),D.add(U.target)}),{nodes:L.filter(U=>D.has(U.id)),links:A}},v=(S,C,L,A)=>{const P=p(L-S),D=p(A-C),N=Math.sin(P/2)*Math.sin(P/2)+Math.cos(p(S))*Math.cos(p(L))*Math.sin(D/2)*Math.sin(D/2);return 6371*(2*Math.atan2(Math.sqrt(N),Math.sqrt(1-N)))},p=S=>S*(Math.PI/180),m=S=>({1:"#D4AF37",2:"#DC143C",3:"#40E0D0"})[S]||"#999",_=async()=>{await yt();try{await fu(o),await du(o,i.height)}catch(P){console.warn("NetworkChart container is not ready:",P.message);return}s&&s.dispose(),s=gr(o.value);let S=i.data;if(S.length||(await a.fetchRestaurants(),S=a.restaurants),!S||S.length===0){console.warn("NetworkChart: No restaurant data available");return}console.log("NetworkChart: Generating network data for",S.length,"restaurants");const{nodes:C,links:L}=d(S,l.value);if(C.length===0){console.warn("NetworkChart: No nodes generated");return}console.log("NetworkChart: Generated",C.length,"nodes and",L.length,"links");const A=[{name:"一星餐厅"},{name:"二星餐厅"},{name:"三星餐厅"}],M={tooltip:{trigger:"item",formatter:P=>{if(P.dataType==="node"){const D=P.data||{},N=D.data||{},U=N.restaurant_name||D.name||"未知节点",W=N.stars,z=N.cuisine||"N/A",$=N.price||"N/A",G=N.city||"N/A",ne=N.region||"N/A";return`
            <div style="padding: 12px;">
              <div style="font-weight: 600; margin-bottom: 8px;">${U}</div>
              <div style="display: grid; gap: 4px; font-size: 12px;">
                <div>星级: ${W?"⭐".repeat(W):"未知"}</div>
                <div>菜系: ${z}</div>
                <div>价格: ${$}</div>
                <div>城市: ${G}</div>
                <div>地区: ${ne}</div>
              </div>
            </div>
          `}else if(P.dataType==="edge")return`
            <div style="padding: 8px;">
              <div style="font-weight: 600;">关系强度: ${(P.data||{}).value||1}</div>
            </div>
          `;return""}},legend:{data:A.map(P=>P.name),orient:"horizontal",left:"center",top:10,textStyle:{fontSize:12}},animationDuration:1500,animationEasingUpdate:"quinticInOut",series:[{type:"graph",layout:"force",data:C,links:L,categories:A,roam:!0,draggable:!0,label:{show:c.value,position:"right",formatter:P=>{var N;const D=((N=P==null?void 0:P.data)==null?void 0:N.name)||"未知节点";return D.length>15?D.slice(0,15)+"...":D},fontSize:10},labelLayout:{hideOverlap:!0},lineStyle:{color:"source",curveness:.3,opacity:.5},emphasis:{focus:"adjacency",lineStyle:{width:10,opacity:1},itemStyle:{shadowBlur:20,shadowColor:"rgba(0, 0, 0, 0.3)"}},force:{repulsion:300,gravity:.2,edgeLength:[80,200],layoutAnimation:!0,friction:.3},scaleLimit:{min:.5,max:3}}]};s.setOption(M),s.on("click",P=>{P.dataType==="node"&&P.data?n("nodeClick",{name:P.data.name||"未知节点",data:P.data.data||P.data}):P.dataType==="edge"&&P.data&&n("linkClick",{source:P.data.source,target:P.data.target,value:P.data.value||1})})},x=()=>{s&&(_(),n("relationshipChange",l.value))},y=()=>{if(s){const S=s.getOption();S.series[0].data.forEach(C=>{C.symbolSize=u.value+(C.value||1)*5}),s.setOption(S)}},g=()=>{s&&s.setOption({series:[{label:{show:c.value}}]})},w=async()=>{await yt(),s&&o.value&&o.value.clientWidth&&o.value.clientHeight&&s.resize()};Rt(()=>i.data,()=>{_()},{deep:!0});let T=null;const b=()=>{T=am(o,()=>{!s||s.isDisposed()?_():s.resize()})};return ir(()=>{_(),b(),window.addEventListener("resize",w)}),yr(()=>{window.removeEventListener("resize",w),s&&s.dispose(),T&&T.disconnect()}),t({refresh:_,updateNetwork:x,updateNodeSize:y,toggleLabels:g}),(S,C)=>{const L=zr,A=Gr,M=Za,P=Xs;return fe(),Se("div",om,[O("div",sm,[O("h3",lm,Re(e.title),1),O("div",um,[j(A,{modelValue:l.value,"onUpdate:modelValue":C[0]||(C[0]=D=>l.value=D),size:"small",onChange:x,placeholder:"选择关系类型"},{default:ae(()=>[(fe(),Se(St,null,bt(h,D=>j(L,{key:D.value,label:D.label,value:D.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"]),j(M,{modelValue:u.value,"onUpdate:modelValue":C[1]||(C[1]=D=>u.value=D),min:5,max:50,"show-tooltip":!1,size:"small",class:"size-slider",onChange:y},null,8,["modelValue"]),O("span",cm,"节点大小: "+Re(u.value),1),j(P,{modelValue:c.value,"onUpdate:modelValue":C[2]||(C[2]=D=>c.value=D),"active-text":"显示标签","inactive-text":"隐藏标签",onChange:g},null,8,["modelValue"])])]),O("div",{ref_key:"networkRef",ref:o,style:Jt({height:e.height+"px"}),class:"network-chart"},null,4),O("div",hm,[(fe(!0),Se(St,null,bt(f.value,D=>(fe(),Se("div",{class:"legend-item",key:D.value},[O("span",{class:"legend-color",style:Jt({background:D.color})},null,4),O("span",fm,Re(D.label),1)]))),128))])])}}},vm=rr(dm,[["__scopeId","data-v-b8611c26"]]);const pm={class:"radar-container"},mm={class:"radar-header"},_m={class:"radar-title"},gm={class:"radar-controls"},ym={__name:"RadarChart",props:{title:{type:String,default:"餐厅特征雷达"},height:{type:Number,default:500},data:{type:Array,default:()=>[]}},emits:["restaurantSelect"],setup(e,{expose:t,emit:r}){const i=e,n=r,a=tr(),o=ie(null);let s=null;const l=ie(""),u=ie([]),c=async()=>{await yt();try{await fu(o),await du(o,i.height)}catch(_){console.warn("RadarChart container is not ready:",_.message);return}s&&s.dispose(),s=gr(o.value);let m=i.data;m.length||(await a.fetchRestaurants(),m=a.restaurants),u.value=m.map((_,x)=>({id:x.toString(),restaurant_name:_.restaurant_name,..._})),u.value.length&&!l.value&&(l.value=u.value[0].id),h()},h=()=>{if(!s||!l.value)return;const m=u.value.find(y=>y.id===l.value);if(!m)return;const _=f(m),x={backgroundColor:"#fff",color:["#67F9D8","#FFE434","#56A3F1","#FF917C"],title:{text:"",left:"center",textStyle:{color:"#333"}},legend:{show:!1},radar:{indicator:[{name:"美食质量",max:10},{name:"服务体验",max:10},{name:"性价比",max:10},{name:"环境氛围",max:10},{name:"创新度",max:10},{name:"口碑评价",max:10}],shape:"circle",splitNumber:5,axisName:{color:"#428BD4",fontSize:12},splitArea:{areaStyle:{color:["rgba(250, 250, 250, 0.3)","rgba(200, 200, 200, 0.3)"],shadowColor:"rgba(0, 0, 0, 0.2)",shadowBlur:10}},axisLine:{lineStyle:{color:"rgba(211, 253, 250, 0.8)"}},splitLine:{lineStyle:{color:"rgba(211, 253, 250, 0.8)",width:1}}},series:[{type:"radar",emphasis:{lineStyle:{width:4}},data:[{value:_,name:m.restaurant_name||"未知餐厅",symbol:"circle",symbolSize:8,lineStyle:{color:v(m.stars),width:2},areaStyle:{color:v(m.stars,.4)}}]}]};s.setOption(x),n("restaurantSelect",m)},f=m=>{const _=Math.min(10,(m.stars||1)*3+Math.random()*2),x=Math.min(10,d(m.price)*1.5+Math.random()*3),y=Math.min(10,(m.stars||1)*3-d(m.price)*.5+5+Math.random()*2),g=Math.min(10,d(m.price)*2+Math.random()*2),w=Math.min(10,Math.random()*5+(m.stars||1)*1.5),T=Math.min(10,(m.stars||1)*2.5+Math.random()*2);return[_,x,y,g,w,T]},d=m=>{if(!m)return 2;const _=(m.match(/\$/g)||[]).length;return Math.max(1,Math.min(5,_))},v=(m,_=1)=>{const x={1:`rgba(212, 175, 55, ${_})`,2:`rgba(220, 20, 60, ${_})`,3:`rgba(64, 224, 208, ${_})`};return x[m]||x[1]},p=async()=>{await yt(),s&&o.value&&o.value.clientWidth&&o.value.clientHeight&&s.resize()};return Rt(()=>i.data,()=>{c()},{deep:!0}),ir(()=>{c(),window.addEventListener("resize",p)}),yr(()=>{window.removeEventListener("resize",p),s&&s.dispose()}),t({refresh:c,updateRadar:h}),(m,_)=>{const x=zr,y=Gr;return fe(),Se("div",pm,[O("div",mm,[O("h3",_m,Re(e.title),1),O("div",gm,[j(y,{modelValue:l.value,"onUpdate:modelValue":_[0]||(_[0]=g=>l.value=g),size:"small",onChange:h,placeholder:"选择餐厅",class:"restaurant-select"},{default:ae(()=>[(fe(!0),Se(St,null,bt(u.value,g=>(fe(),qt(x,{key:g.id,label:g.restaurant_name,value:g.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])])]),O("div",{ref_key:"radarRef",ref:o,style:Jt({height:e.height+"px"}),class:"radar-chart"},null,4)])}}},xm=rr(ym,[["__scopeId","data-v-16c812c0"]]);const Tm={class:"heatmap-container"},wm={class:"heatmap-header"},Sm={class:"heatmap-title"},bm={class:"heatmap-controls"},Em={class:"radius-label"},Am={__name:"HeatmapChart",props:{title:{type:String,default:"米其林餐厅全球热力分布",validator:e=>typeof e=="string"&&e.length<=50},height:{type:Number,default:600,validator:e=>e>=400&&e<=1200},data:{type:Array,default:()=>[],validator:e=>Array.isArray(e)?e.every(t=>typeof t=="object"&&t!==null&&"latitude"in t&&"longitude"in t&&!isNaN(parseFloat(t.latitude))&&!isNaN(parseFloat(t.longitude))):!1}},emits:{regionSelect:e=>typeof e=="object"&&e!==null&&"coordinates"in e,dataTypeChange:e=>typeof e=="string"&&["all","one_star","two_stars","three_stars","price","cuisine"].includes(e)},setup(e,{expose:t,emit:r}){const i=e,n=r,a=tr(),o=ie(null);let s=null;const l=ie("all"),u=ie(20),c=[{value:"all",label:"全部餐厅"},{value:"one_star",label:"一星餐厅"},{value:"two_stars",label:"二星餐厅"},{value:"three_stars",label:"三星餐厅"},{value:"price",label:"价格分布"},{value:"cuisine",label:"菜系多样性"}],h=(_,x)=>{const y=[],g=new Map;return _.forEach(w=>{const T=parseFloat(w.latitude),b=parseFloat(w.longitude);if(!isNaN(T)&&!isNaN(b)){let S=1;switch(x){case"one_star":if(w.stars===1)S=1;else return;break;case"two_stars":if(w.stars===2)S=1.5;else return;break;case"three_stars":if(w.stars===3)S=2;else return;break;case"price":S={"€":1,"€€":1.5,"€€€":2,"€€€€":2.5}[w.price]||1;break;case"cuisine":const A=`${Math.round(T)}_${Math.round(b)}`;g.has(A)||g.set(A,new Set),g.get(A).add(w.cuisine);return;default:S=w.stars||1}const C=.01;y.push([b+(Math.random()-.5)*C,T+(Math.random()-.5)*C,S])}}),x==="cuisine"&&g.forEach((w,T)=>{const[b,S]=T.split("_").map(Number),C=Math.min(w.size/5,2);y.push([S,b,C])}),y},f=async(_,x=20,y=100)=>{let g=0;return new Promise((w,T)=>{const b=()=>{_.value&&_.value.clientWidth>0&&_.value.clientHeight>0?w():g<x?(g++,setTimeout(b,y)):T(new Error(`Container not ready after ${x} retries`))};b()})},d=async()=>{await yt();try{await f(o)}catch(w){console.warn("HeatmapChart container is not ready:",w.message);return}s&&s.dispose(),s=gr(o.value);let _=i.data;_.length||(await a.fetchRestaurants(),_=a.restaurants);const x=h(_,l.value),y={animation:!1,backgroundColor:"#f5f5f5",title:{text:"",left:"center",textStyle:{fontSize:16,fontWeight:"normal"}},tooltip:{trigger:"item",formatter:w=>{if(w.componentType==="series"){const[T,b,S]=w.data||[0,0,0];return`
            <div style="padding: 8px;">
              <div>经度: ${T.toFixed(2)}</div>
              <div>纬度: ${b.toFixed(2)}</div>
              <div>密度: ${S.toFixed(2)}</div>
            </div>
          `}return""}},visualMap:{show:!1,top:"bottom",min:0,max:2,inRange:{color:["#313695","#4575b4","#74add1","#abd9e9","#e0f3f8","#fee090","#fdae61","#f46d43","#d73027","#a50026"]}},geo:{map:"world",roam:!0,zoom:1.2,center:[0,20],label:{emphasis:{show:!1}},itemStyle:{normal:{areaColor:"#e6e6e6",borderColor:"#ccc",borderWidth:.5},emphasis:{areaColor:"#d6d6d6"}}},series:[{type:"effectScatter",coordinateSystem:"geo",data:x,symbolSize:function(w){return Math.max(4,Math.min(20,w[2]*8))},showEffectOn:"render",rippleEffect:{brushType:"stroke"},hoverAnimation:!0,itemStyle:{color:function(w){const T=w.data[2];return T>1.5?"#d73027":T>1?"#f46d43":T>.5?"#fdae61":"#74add1"},shadowBlur:10,shadowColor:"#333"},zlevel:1}]},g=await fetch("https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json").then(w=>w.json()).catch(()=>null);g&&$u("world",g),g||(y.geo.map="world",y.geo.emphasis={label:{show:!1},itemStyle:{areaColor:"#d6d6d6"}}),await yt(),s&&s.setOption(y),s.on("click","series.heatmap",w=>{const[T,b]=w.data;n("regionSelect",{lng:T,lat:b,value:w.data[2]})})},v=async()=>{if(!s)return;let _=i.data;_.length||(_=a.restaurants);const x=h(_,l.value);await yt(),s&&s.setOption({series:[{type:"effectScatter",coordinateSystem:"geo",data:x,symbolSize:function(y){return Math.max(4,Math.min(20,y[2]*8))}}]})},p=()=>{v(),n("dataTypeChange",l.value)},m=()=>{s&&s.resize()};return Rt(()=>i.data,()=>{v()},{deep:!0}),ir(()=>{d(),window.addEventListener("resize",m)}),yr(()=>{window.removeEventListener("resize",m),s&&s.dispose()}),t({refresh:v,resize:m,setDataType:_=>{l.value=_,v()}}),(_,x)=>{const y=zr,g=Gr,w=Za;return fe(),Se("div",Tm,[O("div",wm,[O("h3",Sm,Re(e.title),1),O("div",bm,[j(g,{modelValue:l.value,"onUpdate:modelValue":x[0]||(x[0]=T=>l.value=T),size:"small",onChange:p,class:"data-type-select"},{default:ae(()=>[(fe(),Se(St,null,bt(c,T=>j(y,{key:T.value,label:T.label,value:T.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"]),j(w,{modelValue:u.value,"onUpdate:modelValue":x[1]||(x[1]=T=>u.value=T),min:10,max:50,"show-tooltip":!1,size:"small",class:"radius-slider",onChange:v},null,8,["modelValue"]),O("span",Em,"热力半径: "+Re(u.value),1)])]),O("div",{ref_key:"heatmapRef",ref:o,style:Jt({height:e.height+"px"}),class:"heatmap-chart"},null,4),x[2]||(x[2]=O("div",{class:"heatmap-legend"},[O("span",{class:"legend-label"},"低密度"),O("div",{class:"legend-gradient"}),O("span",{class:"legend-label"},"高密度")],-1))])}}},Cm=rr(Am,[["__scopeId","data-v-937dfae4"]]);const Lm={class:"sunburst-container"},Dm={class:"sunburst-header"},Mm={class:"sunburst-title"},Pm={class:"sunburst-controls"},Rm={key:0,class:"sunburst-breadcrumb"},Nm=["onClick"],Im={key:0,class:"el-icon-arrow-right"},Om={__name:"SunburstChart",props:{title:{type:String,default:"米其林餐厅层次分布",validator:e=>typeof e=="string"&&e.length<=50},height:{type:Number,default:500,validator:e=>e>=200&&e<=1e3},data:{type:Array,default:()=>[],validator:e=>Array.isArray(e)?e.every(t=>typeof t=="object"&&t!==null&&"restaurant_name"in t&&"region"in t&&"city"in t&&typeof t.stars=="number"&&t.stars>=1&&t.stars<=3):!1},colorScheme:{type:String,default:"stars",validator:e=>["stars","price","cuisine"].includes(e)}},emits:{nodeClick:e=>typeof e=="object"&&e!==null&&"name"in e&&"value"in e,levelChange:e=>typeof e=="string"&&["all","region","city"].includes(e)},setup(e,{expose:t,emit:r}){const i=e,n=r,a=tr(),o=ie(null);let s=null;const l=ie("all"),u=ie(!0),c=ie([]),h=[{value:"all",label:"全局视图"},{value:"region",label:"地区视图"},{value:"city",label:"城市视图"}],f={stars:{1:"#D4AF37",2:"#DC143C",3:"#40E0D0"},price:{"€":"#4CAF50","€€":"#FFC107","€€€":"#FF9800","€€€€":"#F44336"},cuisine:{French:"#2196F3",Italian:"#4CAF50",Japanese:"#F44336",Chinese:"#FF9800",American:"#9C27B0",Spanish:"#FFC107",Other:"#607D8B"}},d=C=>{const L={name:"全球米其林餐厅",children:[],value:0};C.length;const A=new Map;return C.forEach(M=>{const P=M.region||"Unknown",D=M.city||"Unknown",N=M.stars||1,U=M.price||"€",W=M.cuisine||"Other";A.has(P)||(A.set(P,{name:P,children:[],value:0,itemStyle:{color:p(P)}}),L.children.push(A.get(P)));const z=A.get(P);let $=z.children.find(ne=>ne.name===D);$||($={name:D,children:[],value:0,itemStyle:{color:m(D,P)}},z.children.push($));const G={name:M.restaurant_name,value:1,stars:N,price:U,cuisine:W,itemStyle:{color:v(M)},data:M};$.children.push(G),$.value+=1,z.value+=1,L.value+=1}),L},v=C=>{switch(i.colorScheme){case"stars":return f.stars[C.stars]||"#999";case"price":return f.price[C.price]||"#999";case"cuisine":const L=x(C.cuisine);return f.cuisine[L]||f.cuisine.Other;default:return"#999"}},p=C=>{const L=["#3498db","#e74c3c","#2ecc71","#f39c12","#9b59b6","#1abc9c"],A=C.charCodeAt(0)%L.length;return L[A]},m=(C,L)=>{const A=p(L);return _(A,20)},_=(C,L)=>{const A=parseInt(C.replace("#",""),16),M=Math.round(2.55*L),P=(A>>16)+M,D=(A>>8&255)+M,N=(A&255)+M;return"#"+(16777216+(P<255?P<1?0:P:255)*65536+(D<255?D<1?0:D:255)*256+(N<255?N<1?0:N:255)).toString(16).slice(1)},x=C=>{if(!C)return"Other";const L=C.toLowerCase();for(const A in f.cuisine)if(L.includes(A.toLowerCase()))return A;return"Other"},y=async(C,L=20,A=100)=>{let M=0;return new Promise((P,D)=>{const N=()=>{C.value&&C.value.clientWidth>0&&C.value.clientHeight>0?P():M<L?(M++,setTimeout(N,A)):D(new Error(`Container not ready after ${L} retries`))};N()})},g=async()=>{await yt();try{await y(o)}catch(M){console.warn("SunburstChart container is not ready:",M.message);return}s&&s.dispose(),s=gr(o.value);let C=i.data;C.length||(await a.fetchRestaurants(),C=a.restaurants);const L=d(C),A={backgroundColor:"#fff",title:{text:"",left:"center",top:20,textStyle:{color:"#333"}},tooltip:{trigger:"item",formatter:M=>{const P=M.data;return P.depth===0?`
            <div style="padding: 8px">
              <div style="font-weight: 600; margin-bottom: 4px">全部餐厅</div>
              <div>数量: ${P.value}</div>
            </div>
          `:`
          <div style="padding: 8px">
            <div style="font-weight: 600; margin-bottom: 4px">${P.name}</div>
            <div>数量: ${P.value}</div>
            <div>占比: ${(P.value/totalRestaurants*100).toFixed(1)}%</div>
          </div>
        `}},series:[{type:"sunburst",center:["50%","50%"],radius:["20%","90%"],data:[L],nodeClick:"rootToNode",sort:null,emphasis:{focus:"ancestor",itemStyle:{shadowBlur:10,shadowColor:"rgba(0, 0, 0, 0.5)"}},levels:[{},{r0:"20%",r:"45%",itemStyle:{borderWidth:2},label:{rotate:"tangential",fontSize:12}},{r0:"45%",r:"70%",label:{align:"center",fontSize:11}},{r0:"70%",r:"90%",label:{position:"outside",padding:3,silent:!1,fontSize:10},itemStyle:{borderWidth:1}}],label:{show:!0,position:"auto",formatter:"{b}",overflow:"truncate",minAngle:5},itemStyle:{borderColor:"#fff",borderWidth:1},animation:!0,animationDuration:1e3,animationEasing:"cubicOut"}]};s.setOption(A),s.on("click",M=>{const{data:P,treePathInfo:D}=M;c.value=D.map(N=>N.name),s.dispatchAction({type:"sunburstRootToNode",targetNode:P}),n("nodeClick",{name:P.name,value:P.value,data:P.data,path:c.value})})},w=()=>{s&&s.setOption({series:{label:{show:u.value}}})},T=C=>{if(l.value=C,s){let L=0;switch(C){case"all":L=0;break;case"region":L=1;break;case"city":L=2;break}s.setOption({series:{radius:[L*20+"%","90%"]}}),n("levelChange",C)}},b=C=>{C===0&&(s.dispatchAction({type:"sunburstRootToNode",targetNode:s.getOption().series[0].data[0]}),c.value=[])},S=()=>{s&&s.resize()};return Rt(()=>i.data,()=>{g()},{deep:!0}),Rt(()=>i.colorScheme,()=>{g()}),ir(()=>{g(),window.addEventListener("resize",S)}),yr(()=>{window.removeEventListener("resize",S),s&&s.dispose()}),t({refresh:g,zoomToLevel:T,toggleLabels:w}),(C,L)=>{const A=$s,M=Zu,P=Xs;return fe(),Se("div",Lm,[O("div",Dm,[O("h3",Mm,Re(e.title),1),O("div",Pm,[j(M,{size:"small"},{default:ae(()=>[(fe(),Se(St,null,bt(h,D=>j(A,{key:D.value,type:l.value===D.value?"primary":"",onClick:N=>T(D.value)},{default:ae(()=>[Ge(Re(D.label),1)]),_:2},1032,["type","onClick"])),64))]),_:1}),j(P,{modelValue:u.value,"onUpdate:modelValue":L[0]||(L[0]=D=>u.value=D),"active-text":"显示标签","inactive-text":"隐藏标签",onChange:w},null,8,["modelValue"])])]),O("div",{ref_key:"sunburstRef",ref:o,style:Jt({height:e.height+"px"}),class:"sunburst-chart"},null,4),c.value.length>0?(fe(),Se("div",Rm,[(fe(!0),Se(St,null,bt(c.value,(D,N)=>(fe(),Se("span",{key:N,class:Da(["breadcrumb-item",{active:N===c.value.length-1}]),onClick:U=>b(N)},[Ge(Re(D)+" ",1),N<c.value.length-1?(fe(),Se("i",Im)):gt("",!0)],10,Nm))),128))])):gt("",!0)])}}},Fm=rr(Om,[["__scopeId","data-v-b2f8ebcb"]]);const Bm={class:"timeline-container"},Um={class:"timeline-header"},zm={class:"timeline-title"},Gm={class:"timeline-controls"},Vm={class:"timeline-stats"},Hm={class:"stat-value"},km={class:"stat-label"},Wm={__name:"TimelineChart",props:{title:{type:String,default:"米其林餐厅时间发展",validator:e=>typeof e=="string"&&e.length<=50},height:{type:Number,default:400,validator:e=>e>=200&&e<=800},data:{type:Array,default:()=>[],validator:e=>Array.isArray(e)?e.every(t=>typeof t=="object"&&t!==null&&"year"in t&&"stars"in t&&!isNaN(parseInt(t.year))&&[1,2,3].includes(t.stars)):!1},startYear:{type:Number,default:2e3,validator:e=>e>=1900&&e<=new Date().getFullYear()},endYear:{type:Number,default:new Date().getFullYear(),validator:e=>e>=2e3&&e<=new Date().getFullYear()+5}},emits:{yearSelect:e=>typeof e=="number"&&e>=1900&&e<=2030,periodSelect:(e,t)=>typeof e=="number"&&typeof t=="number"&&e<=t,yearChange:e=>typeof e=="number"&&e>=1900&&e<=2030},setup(e,{expose:t,emit:r}){const i=e,n=r,a=tr(),o=ie(null);let s=null;const l=ie("year"),u=ie([1,2,3]),c=ie(!0),h=()=>{s&&v()},f=ie([{label:"最早年份",value:"2000",change:"",trend:"neutral"},{label:"年均增长",value:"12.5%",change:"+2.3%",trend:"up"},{label:"峰值年份",value:"2019",change:"156家",trend:"up"},{label:"最新变化",value:"+23",change:"2024",trend:"up"}]),d=async(_,x=20,y=100)=>{let g=0;return new Promise((w,T)=>{const b=()=>{_.value&&_.value.clientWidth>0&&_.value.clientHeight>0?w():g<x?(g++,setTimeout(b,y)):T(new Error(`Container not ready after ${x} retries`))};b()})},v=async()=>{await yt();try{await d(o)}catch(g){console.warn("TimelineChart container is not ready:",g.message);return}s&&s.dispose(),s=gr(o.value);let _=i.data;_.length||(await a.fetchRestaurants(),_=a.restaurants);const x=m(_),y={baseOption:{backgroundColor:"#fff",timeline:{axisType:"category",autoPlay:c.value,playInterval:3e3,loop:!0,lineStyle:{color:"#999"},itemStyle:{color:"#409EFF"},checkpointStyle:{color:"#2A99FF",borderColor:"#fff",borderWidth:2},controlStyle:{showPlayBtn:!0,showPrevBtn:!0,showNextBtn:!0,color:"#666",borderColor:"#666"},emphasis:{itemStyle:{color:"#2A99FF"},controlStyle:{color:"#2A99FF",borderColor:"#2A99FF"},label:{color:"#2A99FF"}},data:Object.keys(x)},tooltip:{trigger:"item",formatter:g=>g.seriesType==="pie"?`
              <div style="padding: 8px;">
                <div style="font-weight: 600; margin-bottom: 4px;">${g.name}</div>
                <div>数量: ${g.value}</div>
                <div>占比: ${g.percent}%</div>
              </div>
            `:""},grid:{top:80,bottom:100,containLabel:!0},calculable:!0},options:Object.entries(x).map(([g,w])=>({title:{text:`${g}年米其林餐厅分布`,left:"center",top:20,textStyle:{color:"#333",fontSize:18,fontWeight:"normal"}},legend:{data:["一星餐厅","二星餐厅","三星餐厅"],right:10,top:50},series:[{type:"pie",name:g+"年",center:["50%","50%"],radius:"55%",startAngle:310,avoidLabelOverlap:!0,label:{show:!0,formatter:"{b}: {c} ({d}%)",fontSize:12},emphasis:{label:{show:!0,fontSize:14,fontWeight:"bold"}},labelLine:{show:!0,smooth:.2,length:10,length2:20},itemStyle:{borderRadius:8,borderColor:"#fff",borderWidth:2},data:[{name:"一星餐厅",value:w[1]||0,itemStyle:{color:"#D4AF37"}},{name:"二星餐厅",value:w[2]||0,itemStyle:{color:"#DC143C"}},{name:"三星餐厅",value:w[3]||0,itemStyle:{color:"#40E0D0"}}],animationType:"scale",animationEasing:"elasticOut",animationDelay:function(T){return Math.random()*200}}]}))};s.setOption(y),s.on("timelinechanged",g=>{const w=Object.keys(x)[g.currentIndex];n("yearChange",w)})},p=()=>{s&&s.resize()};Rt(()=>i.data,()=>{h()},{deep:!0}),Rt(l,h),Rt(u,h,{deep:!0}),ir(()=>{v(),window.addEventListener("resize",p)}),yr(()=>{window.removeEventListener("resize",p),s&&s.dispose()}),t({refresh:v,updateChart:h});const m=_=>{const x={};for(let y=i.startYear;y<=i.endYear;y++)x[y]={1:0,2:0,3:0};return _.forEach(y=>{const g=parseInt(y.year),w=y.stars||1;g>=i.startYear&&g<=i.endYear&&x[g]&&(x[g][w]=(x[g][w]||0)+1)}),x};return(_,x)=>{const y=Ys,g=js,w=Yu,T=Zs;return fe(),Se("div",Bm,[O("div",Um,[O("h3",zm,Re(e.title),1),O("div",Gm,[j(g,{modelValue:l.value,"onUpdate:modelValue":x[0]||(x[0]=b=>l.value=b),size:"small",onChange:h},{default:ae(()=>[j(y,{value:"year"},{default:ae(()=>x[2]||(x[2]=[Ge("按年份")])),_:1,__:[2]}),j(y,{value:"cumulative"},{default:ae(()=>x[3]||(x[3]=[Ge("累计增长")])),_:1,__:[3]}),j(y,{value:"trend"},{default:ae(()=>x[4]||(x[4]=[Ge("趋势分析")])),_:1,__:[4]})]),_:1},8,["modelValue"]),j(T,{modelValue:u.value,"onUpdate:modelValue":x[1]||(x[1]=b=>u.value=b),size:"small",onChange:h},{default:ae(()=>[j(w,{value:1},{default:ae(()=>x[5]||(x[5]=[Ge("一星")])),_:1,__:[5]}),j(w,{value:2},{default:ae(()=>x[6]||(x[6]=[Ge("二星")])),_:1,__:[6]}),j(w,{value:3},{default:ae(()=>x[7]||(x[7]=[Ge("三星")])),_:1,__:[7]})]),_:1},8,["modelValue"])])]),O("div",{ref_key:"timelineRef",ref:o,style:Jt({height:e.height+"px"}),class:"timeline-chart"},null,4),O("div",Vm,[(fe(!0),Se(St,null,bt(f.value,b=>(fe(),Se("div",{class:"stat-item",key:b.label},[O("div",Hm,Re(b.value),1),O("div",km,Re(b.label),1),O("div",{class:Da(["stat-change",b.trend])},[O("i",{class:Da(b.trend==="up"?"el-icon-top":"el-icon-bottom")},null,2),Ge(" "+Re(b.change),1)],2)]))),128))])])}}},Xm=rr(Wm,[["__scopeId","data-v-2661156b"]]);const $m={class:"pareto-chart"},jm={class:"chart-controls"},Zm={class:"control-left"},Ym={class:"control-right"},qm={key:0,class:"insights-panel"},Km={class:"insight-grid"},Qm={class:"insight-item"},Jm={class:"insight-value"},e_={class:"insight-item"},t_={class:"insight-value"},r_={class:"insight-item"},i_={class:"insight-value"},n_={class:"insight-item"},a_={class:"insight-value"},o_={__name:"ParetoChart",props:{height:{type:Number,default:500,validator:e=>e>=300&&e<=1e3},data:{type:Array,default:()=>[],validator:e=>Array.isArray(e)?e.every(t=>typeof t=="object"&&t!==null&&typeof t.stars=="number"&&t.stars>=1&&t.stars<=3):!1}},emits:{"item-click":e=>typeof e=="object"&&e!==null&&"name"in e&&"value"in e},setup(e,{emit:t}){const r=e,i=t,n=tr(),a=vu(),o=ie(null);let s=null;const l=ie("region"),u=ie(!0),c=ie(0),h=ie(null),f=En(()=>`米其林餐厅${{region:"地区分布",cuisine:"菜系分布",year:"年份分布",price:"价格分布"}[l.value]||"帕累托分析"}`),d=En(()=>{let w=r.data.length>0?r.data:n.restaurants;return c.value>0&&(w=w.filter(T=>T.stars===c.value)),w}),v=()=>{const w=d.value;if(w.length===0)return{categories:[],values:[],percentages:[]};const T={};w.forEach($=>{let G="";switch(l.value){case"region":G=$.region||"未知地区";break;case"cuisine":G=$.cuisine||"未知菜系";break;case"year":G=$.year||"未知年份";break;case"price":G=$.price||"$";break}T[G]=(T[G]||0)+1});const b=Object.entries(T).map(([$,G])=>({name:$,value:G})).sort(($,G)=>G.value-$.value),S=b.reduce(($,G)=>$+G.value,0);let C=0;const L=[],A=[],M=[];b.forEach($=>{C+=$.value,L.push($.name),A.push($.value),M.push((C/S*100).toFixed(1))});const P=Math.ceil(b.length*.2),N=(b.slice(0,P).reduce(($,G)=>$+G.value,0)/S*100).toFixed(1);let U=0,W=0;for(let $=0;$<b.length&&(W+=b[$].value,U++,!(W>=S*.8));$++);const z=U<=b.length*.2?"高度集中":U<=b.length*.4?"中度集中":"分散";return h.value={top20Count:P,top20Percentage:N,itemsFor80:U,concentration:z},{categories:L,values:A,percentages:M}},p=()=>{const{categories:w,values:T,percentages:b}=v(),S=a.theme==="dark";return{backgroundColor:"transparent",title:{text:`米其林餐厅${{region:"地区",cuisine:"菜系",year:"年份",price:"价格等级"}[l.value]}分布`,left:"center",textStyle:{color:S?"#e0e0e0":"#333",fontSize:16,fontWeight:500}},tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}},formatter:L=>{const A=L[0],M=L[1];return`
          <div style="font-weight: 500; margin-bottom: 4px;">${A.name}</div>
          <div>数量：${A.value}家</div>
          ${M?`<div>累计占比：${M.value}%</div>`:""}
        `},backgroundColor:S?"rgba(0,0,0,0.8)":"rgba(255,255,255,0.9)",borderColor:S?"#333":"#e0e0e0",textStyle:{color:S?"#e0e0e0":"#333"}},grid:{left:"3%",right:u.value?"10%":"3%",bottom:"15%",top:"15%",containLabel:!0},xAxis:{type:"category",data:w,axisLabel:{rotate:45,color:S?"#a0a0a0":"#666",interval:0,formatter:L=>L.length>8?L.slice(0,8)+"...":L},axisLine:{lineStyle:{color:S?"#333":"#e0e0e0"}}},yAxis:[{type:"value",name:"餐厅数量",nameTextStyle:{color:S?"#a0a0a0":"#666"},axisLabel:{color:S?"#a0a0a0":"#666"},axisLine:{lineStyle:{color:S?"#333":"#e0e0e0"}},splitLine:{lineStyle:{color:S?"#262626":"#f0f0f0"}}},{type:"value",name:"累计百分比",show:u.value,min:0,max:100,nameTextStyle:{color:S?"#a0a0a0":"#666"},axisLabel:{color:S?"#a0a0a0":"#666",formatter:"{value}%"},axisLine:{lineStyle:{color:S?"#333":"#e0e0e0"}},splitLine:{show:!1}}],series:[{name:"数量",type:"bar",data:T,barMaxWidth:50,itemStyle:{color:new pn(0,0,0,1,[{offset:0,color:"#667eea"},{offset:1,color:"#764ba2"}])},emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}},u.value?{name:"累计百分比",type:"line",yAxisIndex:1,data:b,smooth:!0,symbol:"circle",symbolSize:8,lineStyle:{color:"#f093fb",width:3},itemStyle:{color:"#f093fb",borderColor:"#fff",borderWidth:2},label:{show:!0,position:"top",formatter:"{c}%",color:S?"#e0e0e0":"#333",fontSize:10}}:null].filter(Boolean),dataZoom:w.length>20?[{type:"inside",startValue:0,endValue:19},{type:"slider",startValue:0,endValue:19,height:20,bottom:5,borderColor:"transparent",backgroundColor:S?"#1a1a1a":"#f5f5f5",fillerColor:S?"rgba(102, 126, 234, 0.2)":"rgba(102, 126, 234, 0.1)",handleStyle:{color:"#667eea"},textStyle:{color:S?"#a0a0a0":"#666"}}]:null}},m=w=>{const T={},b=[],S=[],C=[];w.forEach(P=>{let D="";switch(l.value){case"region":D=P.region||"未知";break;case"cuisine":D=P.cuisine||"未知";break;case"year":D=P.year||"未知";break;case"price":D=P.price||"$";break}T[D]||(T[D]=0),T[D]++});const L=Object.entries(T).sort((P,D)=>D[1]-P[1]).slice(0,15),A=L.reduce((P,[D,N])=>P+N,0);let M=0;return L.forEach(([P,D])=>{b.push(P),S.push(D),M+=D,C.push(Number((M/A*100).toFixed(1)))}),{xAxisData:b,barData:S,lineData:C}},_=async(w,T=20,b=100)=>{let S=0;return new Promise((C,L)=>{const A=()=>{w.value&&w.value.clientWidth>0&&w.value.clientHeight>0?C():S<T?(S++,setTimeout(A,b)):L(new Error(`Container not ready after ${T} retries`))};A()})},x=async()=>{await yt();try{await _(o)}catch(L){console.warn("ParetoChart container is not ready:",L.message);return}s&&s.dispose(),s=gr(o.value);let w=r.data;w.length||(await n.fetchRestaurants(),w=n.restaurants);const{barData:T,lineData:b,xAxisData:S}=m(w),C={backgroundColor:"#fff",grid:{left:"5%",right:"5%",bottom:"10%",top:"80px",containLabel:!0},title:{text:f.value,left:"center",top:20,textStyle:{fontSize:16,fontWeight:"normal"}},tooltip:{trigger:"axis",axisPointer:{type:"shadow"},formatter:L=>{const A=L[0],M=L[1];return`
          <div style="padding: 8px;">
            <div style="font-weight: 600; margin-bottom: 4px;">${A.name}</div>
            <div style="display: flex; align-items: center; gap: 8px; margin: 4px 0;">
              <span style="display: inline-block; width: 10px; height: 10px; background: ${A.color}; border-radius: 2px;"></span>
              <span>${A.seriesName}: ${A.value}</span>
            </div>
            <div style="display: flex; align-items: center; gap: 8px; margin: 4px 0;">
              <span style="display: inline-block; width: 10px; height: 10px; background: ${M.color}; border-radius: 2px;"></span>
              <span>${M.seriesName}: ${M.value}%</span>
            </div>
          </div>
        `}},legend:{data:["数量","累计百分比"],top:50,right:10},xAxis:{type:"category",data:S,axisLabel:{interval:0,rotate:45,fontSize:10,formatter:L=>L.length>10?L.substring(0,10)+"...":L},axisLine:{lineStyle:{color:"#E0E0E0"}}},yAxis:[{type:"value",name:"数量",nameTextStyle:{color:"#666"},axisLine:{show:!0,lineStyle:{color:"#E0E0E0"}},axisTick:{show:!0},splitLine:{lineStyle:{type:"dashed",color:"#EEE"}}},{type:"value",name:"累计百分比(%)",nameTextStyle:{color:"#666"},min:0,max:100,axisLine:{show:!0,lineStyle:{color:"#E0E0E0"}},axisTick:{show:!0},splitLine:{show:!1}}],series:[{name:"数量",type:"bar",barWidth:"40%",data:T,itemStyle:{color:new pn(0,0,0,1,[{offset:0,color:"#83bff6"},{offset:.5,color:"#188df0"},{offset:1,color:"#188df0"}])},emphasis:{itemStyle:{color:new pn(0,0,0,1,[{offset:0,color:"#2378f7"},{offset:.7,color:"#2378f7"},{offset:1,color:"#83bff6"}])}}},{name:"累计百分比",type:"line",smooth:!0,yAxisIndex:1,data:b,symbol:"circle",symbolSize:8,itemStyle:{color:"#FF5722"},lineStyle:{width:3,color:"#FF5722"}}],animationEasing:"elasticOut",animationDuration:1500};s.setOption(C),s.on("click","series.bar",L=>{i("itemSelect",{name:L.name,value:L.value,percent:b[L.dataIndex]})})},y=()=>{if(!s)return;const w=p();s.setOption(w)},g=()=>{s==null||s.resize()};return Rt(()=>r.data,y,{deep:!0}),Rt(()=>a.theme,y),ir(()=>{x(),window.addEventListener("resize",g)}),yr(()=>{window.removeEventListener("resize",g),s==null||s.dispose()}),(w,T)=>{const b=Ys,S=js,C=Vn,L=zr,A=Gr;return fe(),Se("div",$m,[O("div",jm,[O("div",Zm,[T[7]||(T[7]=O("h3",{class:"chart-title"},[O("i",{class:"el-icon-histogram"}),Ge(" 帕累托分析 ")],-1)),j(S,{modelValue:l.value,"onUpdate:modelValue":T[0]||(T[0]=M=>l.value=M),size:"small",onChange:y},{default:ae(()=>[j(b,{value:"region"},{default:ae(()=>T[3]||(T[3]=[Ge("地区分布")])),_:1,__:[3]}),j(b,{value:"cuisine"},{default:ae(()=>T[4]||(T[4]=[Ge("菜系分布")])),_:1,__:[4]}),j(b,{value:"year"},{default:ae(()=>T[5]||(T[5]=[Ge("年份分布")])),_:1,__:[5]}),j(b,{value:"price"},{default:ae(()=>T[6]||(T[6]=[Ge("价格分布")])),_:1,__:[6]})]),_:1},8,["modelValue"])]),O("div",Ym,[j(C,{modelValue:u.value,"onUpdate:modelValue":T[1]||(T[1]=M=>u.value=M),onChange:y},{default:ae(()=>T[8]||(T[8]=[Ge(" 显示累计百分比 ")])),_:1,__:[8]},8,["modelValue"]),j(A,{modelValue:c.value,"onUpdate:modelValue":T[2]||(T[2]=M=>c.value=M),size:"small",placeholder:"星级筛选",onChange:y},{default:ae(()=>[j(L,{label:"全部星级",value:0}),j(L,{label:"一星",value:1}),j(L,{label:"二星",value:2}),j(L,{label:"三星",value:3})]),_:1},8,["modelValue"])])]),O("div",{ref_key:"chartContainer",ref:o,class:"chart-container",style:Jt({height:e.height+"px"})},null,4),h.value?(fe(),Se("div",qm,[T[13]||(T[13]=O("h4",null,"关键洞察",-1)),O("div",Km,[O("div",Qm,[T[9]||(T[9]=O("span",{class:"insight-label"},"TOP 20%数量",-1)),O("span",Jm,Re(h.value.top20Count),1)]),O("div",e_,[T[10]||(T[10]=O("span",{class:"insight-label"},"占比",-1)),O("span",t_,Re(h.value.top20Percentage)+"%",1)]),O("div",r_,[T[11]||(T[11]=O("span",{class:"insight-label"},"达到80%需要",-1)),O("span",i_,Re(h.value.itemsFor80)+"项",1)]),O("div",n_,[T[12]||(T[12]=O("span",{class:"insight-label"},"集中度",-1)),O("span",a_,Re(h.value.concentration),1)])])])):gt("",!0)])}}},s_=rr(o_,[["__scopeId","data-v-a44b328a"]]);const l_={class:"distribution-container"},u_={class:"distribution-header"},c_={class:"distribution-title"},h_={class:"distribution-controls"},f_={__name:"BoxPlotChart",props:{title:{type:String,default:"餐厅分布分析"},height:{type:Number,default:500},data:{type:Array,default:()=>[]}},emits:["groupSelect"],setup(e,{expose:t,emit:r}){const i=e,n=r,a=tr(),o=ie(null);let s=null;const l=ie("region"),u=ie("stars"),c=ie(!0),h=[{value:"region",label:"地区分布"},{value:"price",label:"价格分布"},{value:"stars",label:"星级分布"},{value:"year",label:"年份分布"}],f=[{value:"stars",label:"星级"},{value:"price",label:"价格"},{value:"count",label:"数量"}],d=async(T,b=20,S=100)=>{let C=0;return new Promise((L,A)=>{const M=()=>{T.value&&T.value.clientWidth>0&&T.value.clientHeight>0?L():C<b?(C++,setTimeout(M,S)):A(new Error(`Container not ready after ${b} retries`))};M()})},v=async()=>{await yt();try{await d(o)}catch(b){console.warn("BoxPlotChart container is not ready:",b.message);return}s&&s.dispose(),s=gr(o.value);let T=i.data;T.length||(await a.fetchRestaurants(),T=a.restaurants),p()},p=()=>{if(!s)return;let T=i.data.length?i.data:a.restaurants;const{categories:b,seriesData:S,averageData:C}=m(T),L={backgroundColor:"#fff",title:{text:x(),left:"center",top:20,textStyle:{color:"#333",fontSize:16,fontWeight:"normal"}},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{data:["数据分布",c.value?"平均值":""],top:50,right:10},grid:{left:"3%",right:"4%",bottom:"3%",top:"80px",containLabel:!0},xAxis:{type:"category",data:b,axisLabel:{interval:0,rotate:45,formatter:A=>A.length>10?A.slice(0,10)+"...":A}},yAxis:{type:"value",name:y()},series:[{name:"数据分布",type:"scatter",data:S,symbolSize:10,itemStyle:{color:function(A){A.data.value;const M=["#5470c6","#91cc75","#fac858","#ee6666","#73c0de","#3ba272","#fc8452","#9a60b4"];return M[A.dataIndex%M.length]}}},{name:"平均值",type:"bar",data:C,barWidth:"40%",itemStyle:{color:new pn(0,0,0,1,[{offset:0,color:"rgba(30, 144, 255, 0.8)"},{offset:1,color:"rgba(30, 144, 255, 0.3)"}])},z:-1,silent:!0,show:c.value}]};s.setOption(L),s.on("click",A=>{A.componentType==="series"&&n("groupSelect",{category:A.name,value:A.data.value,view:l.value,metric:u.value})})},m=T=>{const b={};T.forEach(P=>{let D="";if(l.value==="region")D=P.region||"未知地区";else if(l.value==="price")D=P.price||"$$";else if(l.value==="stars")D=`${P.stars||1}星`;else if(l.value==="year"){const U=parseInt(P.year)||2020;D=`${Math.floor(U/10)*10}s`}b[D]||(b[D]=[]);let N=0;u.value==="stars"?N=P.stars||1:u.value==="price"?N=_(P.price):u.value==="count"&&(N=1),b[D].push(N)});const S=[],C=[],L=[];return Object.keys(b).sort((P,D)=>b[D].length-b[P].length).slice(0,12).forEach((P,D)=>{const N=b[P];S.push(P);const W=N.reduce((z,$)=>z+$,0)/N.length;L.push({name:P,value:W.toFixed(1)}),N.forEach(z=>{C.push({name:P,value:z,xAxis:D+(Math.random()*.6-.3)})})}),{categories:S,seriesData:C,averageData:L}},_=T=>T?(T.match(/\$/g)||[]).length:2,x=()=>{var S,C;const T=((S=h.find(L=>L.value===l.value))==null?void 0:S.label)||"",b=((C=f.find(L=>L.value===u.value))==null?void 0:C.label)||"";return`${T} (按${b})`},y=()=>u.value==="stars"?"星级":u.value==="price"?"价格等级":u.value==="count"?"数量":"值",g=()=>{p()},w=()=>{s&&s.resize()};return Rt(()=>i.data,()=>{p()},{deep:!0}),ir(()=>{v(),window.addEventListener("resize",w)}),yr(()=>{window.removeEventListener("resize",w),s&&s.dispose()}),t({refresh:p}),(T,b)=>{const S=zr,C=Gr,L=Vn;return fe(),Se("div",l_,[O("div",u_,[O("h3",c_,Re(e.title),1),O("div",h_,[j(C,{modelValue:l.value,"onUpdate:modelValue":b[0]||(b[0]=A=>l.value=A),size:"small",onChange:p,placeholder:"选择视图",class:"view-select"},{default:ae(()=>[(fe(),Se(St,null,bt(h,A=>j(S,{key:A.value,label:A.label,value:A.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"]),j(C,{modelValue:u.value,"onUpdate:modelValue":b[1]||(b[1]=A=>u.value=A),size:"small",onChange:p,placeholder:"选择指标",class:"metric-select"},{default:ae(()=>[(fe(),Se(St,null,bt(f,A=>j(S,{key:A.value,label:A.label,value:A.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"]),j(L,{modelValue:c.value,"onUpdate:modelValue":b[2]||(b[2]=A=>c.value=A),onChange:g,class:"checkbox-option"},{default:ae(()=>b[3]||(b[3]=[Ge(" 显示平均值 ")])),_:1,__:[3]},8,["modelValue"])])]),O("div",{ref_key:"chartRef",ref:o,style:Jt({height:e.height+"px"}),class:"distribution-chart"},null,4)])}}},d_=rr(f_,[["__scopeId","data-v-37adaca7"]]);const v_={class:"advanced-viz"},p_={class:"tab-content"},m_={class:"tab-content"},__={class:"tab-content"},g_={key:0,class:"radar-controls"},y_={class:"tab-content"},x_={class:"tab-content"},T_={class:"tab-content"},w_={class:"tab-content"},S_={class:"tab-content"},b_={key:0,class:"restaurant-detail"},E_={class:"detail-section"},A_={class:"detail-grid"},C_={class:"detail-item"},L_={class:"value"},D_={class:"detail-item"},M_={class:"value"},P_={class:"detail-item"},R_={class:"value"},N_={class:"detail-item"},I_={class:"value"},O_={class:"detail-section"},F_={class:"detail-grid"},B_={class:"detail-item"},U_={class:"value"},z_={class:"detail-item"},G_={class:"value"},V_={class:"detail-item"},H_={class:"value"},k_={class:"detail-item"},W_={class:"value"},X_={key:0,class:"detail-section"},$_={class:"filter-panel"},j_={class:"filter-header"},Z_={class:"filter-content"},Y_={class:"filter-item"},q_={class:"filter-item"},K_={class:"filter-item"},Q_={class:"filter-item"},J_={__name:"AdvancedViz",setup(e){const t=tr(),r=ie(),i=ie(),n=ie(),a=ie(),o=ie(),s=ie(),l=ie(),u=ie(),c=ie("scatter3d"),h=ie(!1),f=ie(null),d=ie("star"),v=ie([]),p=ie([{name:"价格指数",max:5},{name:"获奖年限",max:50},{name:"地理分布",max:10},{name:"菜系多样性",max:10},{name:"星级评分",max:3}]),m=qu({stars:[1,2,3],yearRange:[1900,2024],priceLevel:[],location:[]}),_={1900:"1900",1950:"1950",2e3:"2000",2024:"2024"},x=En(()=>{const B=new Map;return t.restaurants.forEach(I=>{const Y=I.region,X=I.city;Y&&X&&(B.has(Y)||B.set(Y,new Set),B.get(Y).add(X))}),Array.from(B.entries()).map(([I,Y])=>({value:I,label:I,children:Array.from(Y).map(X=>({value:X,label:X}))}))}),y=En(()=>t.restaurants.filter(B=>{if(!m.stars.includes(B.stars))return!1;const I=parseInt(B.year);return!(I<m.yearRange[0]||I>m.yearRange[1]||m.priceLevel.length>0&&!m.priceLevel.includes(B.price)||m.location.length>0&&!m.location.some(X=>Array.isArray(X)?X[0]===B.region||X[1]===B.city:X===B.region||X===B.city))})),g=async B=>{console.log("切换到选项卡:",B),await yt(),setTimeout(()=>{var I,Y,X,Te,ue,he,we,Le,Pe,Lt,ve,Ze,Ie,He,Qi,_o;switch(B){case"scatter3d":(Y=(I=r.value)==null?void 0:I.refresh)==null||Y.call(I);break;case"network":(Te=(X=i.value)==null?void 0:X.refresh)==null||Te.call(X);break;case"radar":(he=(ue=n.value)==null?void 0:ue.refresh)==null||he.call(ue);break;case"heatmap":(Le=(we=a.value)==null?void 0:we.refresh)==null||Le.call(we);break;case"sunburst":(Lt=(Pe=o.value)==null?void 0:Pe.refresh)==null||Lt.call(Pe);break;case"timeline":(Ze=(ve=s.value)==null?void 0:ve.refresh)==null||Ze.call(ve);break;case"pareto":(He=(Ie=l.value)==null?void 0:Ie.refresh)==null||He.call(Ie);break;case"boxplot":(_o=(Qi=u.value)==null?void 0:Qi.refresh)==null||_o.call(Qi);break}},300)},w=B=>{f.value=B.data,h.value=!0},T=B=>{f.value=B.data,h.value=!0},b=B=>{Vt.info(`关系强度: ${B.value}`)},S=B=>{Vt.info(`区域: ${B.name}, 餐厅数量: ${B.value}`)},C=B=>{B.data&&B.data.restaurant_name&&(f.value=B.data,h.value=!0)},L=B=>{Vt.info(`${B}年新增餐厅数量查看中`)},A=({category:B,type:I,count:Y,percentage:X})=>{Vt.info(`${B}: ${Y}家餐厅 (${X.toFixed(1)}%)`),I==="region"&&B&&(m.location.some(ue=>Array.isArray(ue)?ue[0]===B:ue===B)||(m.location.push(B),Vt.success(`已添加筛选条件：${B}`)))},M=({category:B,value:I,restaurant:Y})=>{Y?(f.value=Y,h.value=!0):Vt.info(`发现异常值：${B} - ${I}`)},P=({category:B,stats:I})=>{Vt.info({message:`${B}统计信息：
最小值: ${I.min}
下四分位: ${I.q1}
中位数: ${I.median}
上四分位: ${I.q3}
最大值: ${I.max}`,duration:5e3,showClose:!0})},D=B=>{console.log("坐标轴切换:",B)},N=B=>{Vt.success(`切换到${B}关系视图`)},U=()=>{var B;(B=f.value)!=null&&B.url&&window.open(f.value.url,"_blank")},W=()=>{m.stars=[1,2,3],m.yearRange=[1900,2024],m.priceLevel=[],m.location=[],Vt.success("筛选条件已重置")},z=()=>{const B=G(d.value);v.value=Array.isArray(B)?B:[B]},$=()=>{const B=G(d.value,v.value.length);B&&(v.value.push(B),Vt.success("已添加新的对比项"))},G=(B,I=0)=>{const Y=["#FFD700","#FF6B6B","#4ECDC4","#45B7D1","#FFA07A"],X=y.value;if(X.length===0)return null;switch(B){case"star":const Te={};return X.forEach(ve=>{Te[ve.stars]||(Te[ve.stars]=[]),Te[ve.stars].push(ve)}),Object.entries(Te).map(([ve,Ze],Ie)=>({name:`${ve}星餐厅`,value:ne(Ze),itemStyle:{color:Y[Ie%Y.length]}}))[I]||null;case"region":const ue=[...new Set(X.map(ve=>ve.region))];if(I>=ue.length)return null;const he=X.filter(ve=>ve.region===ue[I]);return{name:ue[I],value:ne(he),itemStyle:{color:Y[I%Y.length]}};case"year":const we=["1900-1950","1951-1980","1981-2000","2001-2010","2011-2024"];if(I>=we.length)return null;const[Le,Pe]=we[I].split("-").map(Number),Lt=X.filter(ve=>{const Ze=parseInt(ve.year);return Ze>=Le&&Ze<=Pe});return{name:we[I],value:ne(Lt),itemStyle:{color:Y[I%Y.length]}}}},ne=B=>{if(B.length===0)return[0,0,0,0,0];const I=B.reduce((he,we)=>{const Le=(we.price||"$").length;return he+Le},0)/B.length,Y=B.reduce((he,we)=>he+(2024-parseInt(we.year)),0)/B.length,X=new Set(B.map(he=>he.region)).size,Te=new Set(B.map(he=>he.cuisine).filter(he=>he)).size,ue=B.reduce((he,we)=>he+we.stars,0)/B.length;return[I,Y/10,Math.min(X,10),Math.min(Te,10),ue]};return ir(async()=>{try{await t.fetchRestaurants(),await yt(),setTimeout(()=>{z()},300)}catch(B){console.error("Failed to initialize AdvancedViz:",B)}}),(B,I)=>{var Ie;const Y=ec,X=zr,Te=Gr,ue=$s,he=Ku,we=Qu,Le=Vn,Pe=Zs,Lt=Za,ve=tc,Ze=Ju;return fe(),Se("div",v_,[I[29]||(I[29]=O("div",{class:"page-header"},[O("h1",{class:"page-title"},[O("i",{class:"el-icon-data-analysis"}),Ge(" 深入可视化 ")]),O("p",{class:"page-description"},"探索米其林餐厅数据的多维度视角和深层关联")],-1)),j(he,{modelValue:c.value,"onUpdate:modelValue":I[1]||(I[1]=He=>c.value=He),class:"viz-tabs",onTabChange:g},{default:ae(()=>[j(Y,{label:"3D多维分析",name:"scatter3d"},{default:ae(()=>[O("div",p_,[c.value==="scatter3d"?(fe(),qt(nm,{key:0,ref_key:"scatter3dRef",ref:r,title:"餐厅多维度3D分布",height:600,data:y.value,onPointClick:w,onAxisChange:D},null,8,["data"])):gt("",!0)])]),_:1}),j(Y,{label:"关系网络",name:"network"},{default:ae(()=>[O("div",m_,[c.value==="network"?(fe(),qt(vm,{key:0,ref_key:"networkRef",ref:i,title:"餐厅关系网络分析",height:600,data:y.value,maxNodes:80,onNodeClick:T,onLinkClick:b,onRelationshipChange:N},null,8,["data"])):gt("",!0)])]),_:1}),j(Y,{label:"特征雷达",name:"radar"},{default:ae(()=>[O("div",__,[c.value==="radar"?(fe(),Se("div",g_,[j(Te,{modelValue:d.value,"onUpdate:modelValue":I[0]||(I[0]=He=>d.value=He),placeholder:"选择对比模式",onChange:z},{default:ae(()=>[j(X,{label:"星级对比",value:"star"}),j(X,{label:"地区对比",value:"region"}),j(X,{label:"年份对比",value:"year"})]),_:1},8,["modelValue"]),j(ue,{onClick:$,disabled:v.value.length>=5},{default:ae(()=>I[7]||(I[7]=[O("i",{class:"el-icon-plus"},null,-1),Ge(" 添加对比 ")])),_:1,__:[7]},8,["disabled"])])):gt("",!0),c.value==="radar"?(fe(),qt(xm,{key:1,ref_key:"radarRef",ref:n,title:"多维度特征对比",height:500,data:v.value,indicators:p.value},null,8,["data","indicators"])):gt("",!0)])]),_:1}),j(Y,{label:"密度热力",name:"heatmap"},{default:ae(()=>[O("div",y_,[c.value==="heatmap"?(fe(),qt(Cm,{key:0,ref_key:"heatmapRef",ref:a,title:"全球餐厅密度分布",height:600,data:y.value,onAreaClick:S},null,8,["data"])):gt("",!0)])]),_:1}),j(Y,{label:"层次结构",name:"sunburst"},{default:ae(()=>[O("div",x_,[c.value==="sunburst"?(fe(),qt(Fm,{key:0,ref_key:"sunburstRef",ref:o,title:"餐厅层次化分布",height:600,data:y.value,onItemClick:C},null,8,["data"])):gt("",!0)])]),_:1}),j(Y,{label:"时间演变",name:"timeline"},{default:ae(()=>[O("div",T_,[c.value==="timeline"?(fe(),qt(Xm,{key:0,ref_key:"timelineRef",ref:s,title:"米其林餐厅历史发展",height:500,data:y.value,onYearClick:L},null,8,["data"])):gt("",!0)])]),_:1}),j(Y,{label:"帕累托分析",name:"pareto"},{default:ae(()=>[O("div",w_,[c.value==="pareto"?(fe(),qt(s_,{key:0,ref_key:"paretoRef",ref:l,title:"餐厅分布帕累托分析",height:500,data:y.value,onItemClick:A},null,8,["data"])):gt("",!0)])]),_:1}),j(Y,{label:"分布分析",name:"boxplot"},{default:ae(()=>[O("div",S_,[c.value==="boxplot"?(fe(),qt(d_,{key:0,ref_key:"boxplotRef",ref:u,title:"餐厅数据分布分析",height:500,data:y.value,onOutlierClick:M,onCategoryClick:P},null,8,["data"])):gt("",!0)])]),_:1})]),_:1},8,["modelValue"]),j(we,{modelValue:h.value,"onUpdate:modelValue":I[2]||(I[2]=He=>h.value=He),title:((Ie=f.value)==null?void 0:Ie.restaurant_name)||"餐厅详情",width:"600px","custom-class":"detail-dialog"},{default:ae(()=>[f.value?(fe(),Se("div",b_,[O("div",E_,[I[12]||(I[12]=O("h3",null,"基本信息",-1)),O("div",A_,[O("div",C_,[I[8]||(I[8]=O("span",{class:"label"},"星级评定：",-1)),O("span",L_,[(fe(!0),Se(St,null,bt(f.value.stars,He=>(fe(),Se("span",{key:He,class:"star"},"⭐"))),128))])]),O("div",D_,[I[9]||(I[9]=O("span",{class:"label"},"获奖年份：",-1)),O("span",M_,Re(f.value.year),1)]),O("div",P_,[I[10]||(I[10]=O("span",{class:"label"},"菜系类型：",-1)),O("span",R_,Re(f.value.cuisine||"N/A"),1)]),O("div",N_,[I[11]||(I[11]=O("span",{class:"label"},"价格等级：",-1)),O("span",I_,Re(f.value.price||"N/A"),1)])])]),O("div",O_,[I[17]||(I[17]=O("h3",null,"地理位置",-1)),O("div",F_,[O("div",B_,[I[13]||(I[13]=O("span",{class:"label"},"城市：",-1)),O("span",U_,Re(f.value.city),1)]),O("div",z_,[I[14]||(I[14]=O("span",{class:"label"},"地区：",-1)),O("span",G_,Re(f.value.region),1)]),O("div",V_,[I[15]||(I[15]=O("span",{class:"label"},"邮编：",-1)),O("span",H_,Re(f.value.zip_code||"N/A"),1)]),O("div",k_,[I[16]||(I[16]=O("span",{class:"label"},"坐标：",-1)),O("span",W_,Re(Number(f.value.latitude).toFixed(4))+", "+Re(Number(f.value.longitude).toFixed(4)),1)])])]),f.value.url?(fe(),Se("div",X_,[I[19]||(I[19]=O("h3",null,"更多信息",-1)),j(ue,{type:"primary",size:"small",onClick:U},{default:ae(()=>I[18]||(I[18]=[O("i",{class:"el-icon-link"},null,-1),Ge(" 访问餐厅官网 ")])),_:1,__:[18]})])):gt("",!0)])):gt("",!0)]),_:1},8,["modelValue","title"]),O("div",$_,[j(Ze,{shadow:"hover"},{default:ae(()=>[O("div",j_,[I[21]||(I[21]=O("h3",null,"数据筛选",-1)),j(ue,{text:"",onClick:W,class:"reset-btn"},{default:ae(()=>I[20]||(I[20]=[O("i",{class:"el-icon-refresh-left"},null,-1),Ge(" 重置 ")])),_:1,__:[20]})]),O("div",Z_,[O("div",Y_,[I[25]||(I[25]=O("label",null,"星级筛选",-1)),j(Pe,{modelValue:m.stars,"onUpdate:modelValue":I[3]||(I[3]=He=>m.stars=He)},{default:ae(()=>[j(Le,{value:1},{default:ae(()=>I[22]||(I[22]=[Ge("一星")])),_:1,__:[22]}),j(Le,{value:2},{default:ae(()=>I[23]||(I[23]=[Ge("二星")])),_:1,__:[23]}),j(Le,{value:3},{default:ae(()=>I[24]||(I[24]=[Ge("三星")])),_:1,__:[24]})]),_:1},8,["modelValue"])]),O("div",q_,[I[26]||(I[26]=O("label",null,"年份范围",-1)),j(Lt,{modelValue:m.yearRange,"onUpdate:modelValue":I[4]||(I[4]=He=>m.yearRange=He),range:"",min:1900,max:2024,marks:_},null,8,["modelValue"])]),O("div",K_,[I[27]||(I[27]=O("label",null,"价格等级",-1)),j(Te,{modelValue:m.priceLevel,"onUpdate:modelValue":I[5]||(I[5]=He=>m.priceLevel=He),multiple:"",placeholder:"全部价格","collapse-tags":""},{default:ae(()=>[j(X,{label:"$",value:"$"}),j(X,{label:"$$",value:"$$"}),j(X,{label:"$$$",value:"$$$"}),j(X,{label:"$$$$",value:"$$$$"}),j(X,{label:"$$$$$",value:"$$$$$"})]),_:1},8,["modelValue"])]),O("div",Q_,[I[28]||(I[28]=O("label",null,"地区选择",-1)),j(ve,{modelValue:m.location,"onUpdate:modelValue":I[6]||(I[6]=He=>m.location=He),options:x.value,props:{multiple:!0,checkStrictly:!0},"collapse-tags":"",clearable:"",placeholder:"选择地区"},null,8,["modelValue","options"])])])]),_:1})])])}}},cg=rr(J_,[["__scopeId","data-v-9492a46b"]]);export{cg as default};
