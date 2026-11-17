(()=>{var Od=Object.defineProperty;var gh=(i,e)=>()=>(i&&(e=i(i=0)),e);var Hd=(i,e)=>{for(var t in e)Od(i,t,{get:e[t],enumerable:!0})};function fi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(jt[i&255]+jt[i>>8&255]+jt[i>>16&255]+jt[i>>24&255]+"-"+jt[e&255]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[t&63|128]+jt[t>>8&255]+"-"+jt[t>>16&255]+jt[t>>24&255]+jt[n&255]+jt[n>>8&255]+jt[n>>16&255]+jt[n>>24&255]).toLowerCase()}function qt(i,e,t){return Math.max(e,Math.min(t,i))}function Up(i,e){return(i%e+e)%e}function ja(i,e,t){return(1-t)*i+t*e}function jh(i){return(i&i-1)===0&&i!==0}function zl(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function hi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function dt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}function yf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function br(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Np(){let i=br("canvas");return i.style.display="block",i}function xr(i){i in eu||(eu[i]=!0,console.warn(i))}function zs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function tl(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}function nl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?No.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}function sl(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){qi.fromArray(i,r);let a=s.x*Math.abs(qi.x)+s.y*Math.abs(qi.y)+s.z*Math.abs(qi.z),l=e.dot(qi),c=t.dot(qi),h=n.dot(qi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}function dl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function Jp(i,e,t,n,s,r,o,a){let l;if(e.side===zt?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Li,a),l===null)return null;ho.copy(a),ho.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(ho);return c<t.near||c>t.far?null:{distance:c,point:ho.clone(),object:i}}function uo(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Ms),i.getVertexPosition(l,bs),i.getVertexPosition(c,Es);let h=Jp(i,e,t,n,Ms,bs,Es,co);if(h){s&&(oo.fromBufferAttribute(s,a),ao.fromBufferAttribute(s,l),lo.fromBufferAttribute(s,c),h.uv=Qi.getInterpolation(co,Ms,bs,Es,oo,ao,lo,new xe)),r&&(oo.fromBufferAttribute(r,a),ao.fromBufferAttribute(r,l),lo.fromBufferAttribute(r,c),h.uv1=Qi.getInterpolation(co,Ms,bs,Es,oo,ao,lo,new xe),h.uv2=h.uv1),o&&(du.fromBufferAttribute(o,a),pu.fromBufferAttribute(o,l),mu.fromBufferAttribute(o,c),h.normal=Qi.getInterpolation(co,Ms,bs,Es,du,pu,mu,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new U,materialIndex:0};Qi.getNormal(Ms,bs,Es,f.normal),h.face=f}return h}function Vs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function on(i){let e={};for(let t=0;t<i.length;t++){let n=Vs(i[t]);for(let s in n)e[s]=n[s]}return e}function $p(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function bf(i){return i.getRenderTarget()===null?i.outputColorSpace:at.workingColorSpace}function Ef(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function tm(i,e){let t=e.isWebGL2,n=new WeakMap;function s(c,h){let f=c.array,p=c.usage,u=f.byteLength,_=i.createBuffer();i.bindBuffer(h,_),i.bufferData(h,f,p),c.onUploadCallback();let x;if(f instanceof Float32Array)x=i.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)x=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)x=i.SHORT;else if(f instanceof Uint32Array)x=i.UNSIGNED_INT;else if(f instanceof Int32Array)x=i.INT;else if(f instanceof Int8Array)x=i.BYTE;else if(f instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:_,type:x,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:u}}function r(c,h,f){let p=h.array,u=h._updateRange,_=h.updateRanges;if(i.bindBuffer(f,c),u.count===-1&&_.length===0&&i.bufferSubData(f,0,p),_.length!==0){for(let x=0,m=_.length;x<m;x++){let d=_[x];t?i.bufferSubData(f,d.start*p.BYTES_PER_ELEMENT,p,d.start,d.count):i.bufferSubData(f,d.start*p.BYTES_PER_ELEMENT,p.subarray(d.start,d.start+d.count))}h.clearUpdateRanges()}u.count!==-1&&(t?i.bufferSubData(f,u.offset*p.BYTES_PER_ELEMENT,p,u.offset,u.count):i.bufferSubData(f,u.offset*p.BYTES_PER_ELEMENT,p.subarray(u.offset,u.offset+u.count)),u.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let p=n.get(c);(!p||p.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let f=n.get(c);if(f===void 0)n.set(c,s(c,h));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(f.buffer,c,h),f.version=c.version}}return{get:o,remove:a,update:l}}function Ng(i,e,t,n,s,r,o){let a=new Re(0),l=r===!0?0:1,c,h,f=null,p=0,u=null;function _(m,d){let g=!1,v=d.isScene===!0?d.background:null;v&&v.isTexture&&(v=(d.backgroundBlurriness>0?t:e).get(v)),v===null?x(a,l):v&&v.isColor&&(x(v,1),g=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||g)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===ra)?(h===void 0&&(h=new ce(new Oe(1,1,1),new It({name:"BackgroundCubeMaterial",uniforms:Vs(Jn.backgroundCube.uniforms),vertexShader:Jn.backgroundCube.vertexShader,fragmentShader:Jn.backgroundCube.fragmentShader,side:zt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,y,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.toneMapped=at.getTransfer(v.colorSpace)!==ft,(f!==v||p!==v.version||u!==i.toneMapping)&&(h.material.needsUpdate=!0,f=v,p=v.version,u=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new ce(new wt(2,2),new It({name:"BackgroundMaterial",uniforms:Vs(Jn.background.uniforms),vertexShader:Jn.background.vertexShader,fragmentShader:Jn.background.fragmentShader,side:Li,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=at.getTransfer(v.colorSpace)!==ft,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||p!==v.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,f=v,p=v.version,u=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function x(m,d){m.getRGB(po,bf(i)),n.buffers.color.setClear(po.r,po.g,po.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(m,d=1){a.set(m),l=d,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,x(a,l)},render:_}}function zg(i,e,t,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=m(null),c=l,h=!1;function f(D,O,k,B,Y){let W=!1;if(o){let K=x(B,k,O);c!==K&&(c=K,u(c.object)),W=d(D,B,k,Y),W&&g(D,B,k,Y)}else{let K=O.wireframe===!0;(c.geometry!==B.id||c.program!==k.id||c.wireframe!==K)&&(c.geometry=B.id,c.program=k.id,c.wireframe=K,W=!0)}Y!==null&&t.update(Y,i.ELEMENT_ARRAY_BUFFER),(W||h)&&(h=!1,A(D,O,k,B),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function p(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function u(D){return n.isWebGL2?i.bindVertexArray(D):r.bindVertexArrayOES(D)}function _(D){return n.isWebGL2?i.deleteVertexArray(D):r.deleteVertexArrayOES(D)}function x(D,O,k){let B=k.wireframe===!0,Y=a[D.id];Y===void 0&&(Y={},a[D.id]=Y);let W=Y[O.id];W===void 0&&(W={},Y[O.id]=W);let K=W[B];return K===void 0&&(K=m(p()),W[B]=K),K}function m(D){let O=[],k=[],B=[];for(let Y=0;Y<s;Y++)O[Y]=0,k[Y]=0,B[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:k,attributeDivisors:B,object:D,attributes:{},index:null}}function d(D,O,k,B){let Y=c.attributes,W=O.attributes,K=0,ee=k.getAttributes();for(let me in ee)if(ee[me].location>=0){let se=Y[me],Me=W[me];if(Me===void 0&&(me==="instanceMatrix"&&D.instanceMatrix&&(Me=D.instanceMatrix),me==="instanceColor"&&D.instanceColor&&(Me=D.instanceColor)),se===void 0||se.attribute!==Me||Me&&se.data!==Me.data)return!0;K++}return c.attributesNum!==K||c.index!==B}function g(D,O,k,B){let Y={},W=O.attributes,K=0,ee=k.getAttributes();for(let me in ee)if(ee[me].location>=0){let se=W[me];se===void 0&&(me==="instanceMatrix"&&D.instanceMatrix&&(se=D.instanceMatrix),me==="instanceColor"&&D.instanceColor&&(se=D.instanceColor));let Me={};Me.attribute=se,se&&se.data&&(Me.data=se.data),Y[me]=Me,K++}c.attributes=Y,c.attributesNum=K,c.index=B}function v(){let D=c.newAttributes;for(let O=0,k=D.length;O<k;O++)D[O]=0}function M(D){w(D,0)}function w(D,O){let k=c.newAttributes,B=c.enabledAttributes,Y=c.attributeDivisors;k[D]=1,B[D]===0&&(i.enableVertexAttribArray(D),B[D]=1),Y[D]!==O&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,O),Y[D]=O)}function y(){let D=c.newAttributes,O=c.enabledAttributes;for(let k=0,B=O.length;k<B;k++)O[k]!==D[k]&&(i.disableVertexAttribArray(k),O[k]=0)}function E(D,O,k,B,Y,W,K){K===!0?i.vertexAttribIPointer(D,O,k,Y,W):i.vertexAttribPointer(D,O,k,B,Y,W)}function A(D,O,k,B){if(n.isWebGL2===!1&&(D.isInstancedMesh||B.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();let Y=B.attributes,W=k.getAttributes(),K=O.defaultAttributeValues;for(let ee in W){let me=W[ee];if(me.location>=0){let $=Y[ee];if($===void 0&&(ee==="instanceMatrix"&&D.instanceMatrix&&($=D.instanceMatrix),ee==="instanceColor"&&D.instanceColor&&($=D.instanceColor)),$!==void 0){let se=$.normalized,Me=$.itemSize,Se=t.get($);if(Se===void 0)continue;let Q=Se.buffer,we=Se.type,Ie=Se.bytesPerElement,G=n.isWebGL2===!0&&(we===i.INT||we===i.UNSIGNED_INT||$.gpuType===lf);if($.isInterleavedBufferAttribute){let re=$.data,P=re.stride,te=$.offset;if(re.isInstancedInterleavedBuffer){for(let J=0;J<me.locationSize;J++)w(me.location+J,re.meshPerAttribute);D.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let J=0;J<me.locationSize;J++)M(me.location+J);i.bindBuffer(i.ARRAY_BUFFER,Q);for(let J=0;J<me.locationSize;J++)E(me.location+J,Me/me.locationSize,we,se,P*Ie,(te+Me/me.locationSize*J)*Ie,G)}else{if($.isInstancedBufferAttribute){for(let re=0;re<me.locationSize;re++)w(me.location+re,$.meshPerAttribute);D.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let re=0;re<me.locationSize;re++)M(me.location+re);i.bindBuffer(i.ARRAY_BUFFER,Q);for(let re=0;re<me.locationSize;re++)E(me.location+re,Me/me.locationSize,we,se,Me*Ie,Me/me.locationSize*re*Ie,G)}}else if(K!==void 0){let se=K[ee];if(se!==void 0)switch(se.length){case 2:i.vertexAttrib2fv(me.location,se);break;case 3:i.vertexAttrib3fv(me.location,se);break;case 4:i.vertexAttrib4fv(me.location,se);break;default:i.vertexAttrib1fv(me.location,se)}}}}y()}function b(){F();for(let D in a){let O=a[D];for(let k in O){let B=O[k];for(let Y in B)_(B[Y].object),delete B[Y];delete O[k]}delete a[D]}}function S(D){if(a[D.id]===void 0)return;let O=a[D.id];for(let k in O){let B=O[k];for(let Y in B)_(B[Y].object),delete B[Y];delete O[k]}delete a[D.id]}function z(D){for(let O in a){let k=a[O];if(k[D.id]===void 0)continue;let B=k[D.id];for(let Y in B)_(B[Y].object),delete B[Y];delete k[D.id]}}function F(){q(),h=!0,c!==l&&(c=l,u(c.object))}function q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:F,resetDefaultState:q,dispose:b,releaseStatesOfGeometry:S,releaseStatesOfProgram:z,initAttributes:v,enableAttribute:M,disableUnusedAttributes:y}}function Fg(i,e,t,n){let s=n.isWebGL2,r;function o(h){r=h}function a(h,f){i.drawArrays(r,h,f),t.update(f,r,1)}function l(h,f,p){if(p===0)return;let u,_;if(s)u=i,_="drawArraysInstanced";else if(u=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[_](r,h,f,p),t.update(f,r,p)}function c(h,f,p){if(p===0)return;let u=e.get("WEBGL_multi_draw");if(u===null)for(let _=0;_<p;_++)this.render(h[_],f[_]);else{u.multiDrawArraysWEBGL(r,h,0,f,0,p);let _=0;for(let x=0;x<p;x++)_+=f[x];t.update(_,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Bg(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let E=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),u=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),d=i.getParameter(i.MAX_VARYING_VECTORS),g=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=p>0,M=o||e.has("OES_texture_float"),w=v&&M,y=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:p,maxTextureSize:u,maxCubemapSize:_,maxAttributes:x,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:g,vertexTextures:v,floatFragmentTextures:M,floatVertexTextures:w,maxSamples:y}}function Og(i){let e=this,t=null,n=0,s=!1,r=!1,o=new ci,a=new it,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){let u=f.length!==0||p||n!==0||s;return s=p,n=f.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,p){t=h(f,p,0)},this.setState=function(f,p,u){let _=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,d=i.get(f);if(!s||_===null||_.length===0||r&&!m)r?h(null):c();else{let g=r?0:n,v=g*4,M=d.clippingState||null;l.value=M,M=h(_,p,v,u);for(let w=0;w!==v;++w)M[w]=t[w];d.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,p,u,_){let x=f!==null?f.length:0,m=null;if(x!==0){if(m=l.value,_!==!0||m===null){let d=u+x*4,g=p.matrixWorldInverse;a.getNormalMatrix(g),(m===null||m.length<d)&&(m=new Float32Array(d));for(let v=0,M=u;v!==x;++v,M+=4)o.copy(f[v]).applyMatrix4(g,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Hg(i){let e=new WeakMap;function t(o,a){return a===Il?o.mapping=Bs:a===Ll&&(o.mapping=Os),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Il||a===Ll)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Hl(l.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}function kg(i){let e=[],t=[],n=[],s=i,r=i-Ls+1+gu.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>i-Ls?l=gu[o-i+Ls-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,f=1+c,p=[h,h,f,h,f,f,h,h,f,f,h,f],u=6,_=6,x=3,m=2,d=1,g=new Float32Array(x*_*u),v=new Float32Array(m*_*u),M=new Float32Array(d*_*u);for(let y=0;y<u;y++){let E=y%3*2/3-1,A=y>2?0:-1,b=[E,A,0,E+2/3,A,0,E+2/3,A+1,0,E,A,0,E+2/3,A+1,0,E,A+1,0];g.set(b,x*_*y),v.set(p,m*_*y);let S=[y,y,y,y,y,y];M.set(S,d*_*y)}let w=new Xe;w.setAttribute("position",new tt(g,x)),w.setAttribute("uv",new tt(v,m)),w.setAttribute("faceIndex",new tt(M,d)),e.push(w),s>Ls&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function vu(i,e,t){let n=new $t(i,e,t);return n.texture.mapping=ra,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function mo(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Gg(i,e,t){let n=new Float32Array(Ki),s=new U(0,1,0);return new It({name:"SphericalGaussianBlur",defines:{n:Ki,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function yu(){return new It({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Mu(){return new It({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Dc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Vg(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Il||l===Ll,h=l===Bs||l===Os;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new Ui(i)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{let f=a.image;if(c&&f&&f.height>0||h&&f&&s(f)){t===null&&(t=new Ui(i));let p=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,p),a.addEventListener("dispose",r),p.texture}else return null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Wg(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Xg(i,e,t,n){let s={},r=new WeakMap;function o(f){let p=f.target;p.index!==null&&e.remove(p.index);for(let _ in p.attributes)e.remove(p.attributes[_]);for(let _ in p.morphAttributes){let x=p.morphAttributes[_];for(let m=0,d=x.length;m<d;m++)e.remove(x[m])}p.removeEventListener("dispose",o),delete s[p.id];let u=r.get(p);u&&(e.remove(u),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function a(f,p){return s[p.id]===!0||(p.addEventListener("dispose",o),s[p.id]=!0,t.memory.geometries++),p}function l(f){let p=f.attributes;for(let _ in p)e.update(p[_],i.ARRAY_BUFFER);let u=f.morphAttributes;for(let _ in u){let x=u[_];for(let m=0,d=x.length;m<d;m++)e.update(x[m],i.ARRAY_BUFFER)}}function c(f){let p=[],u=f.index,_=f.attributes.position,x=0;if(u!==null){let g=u.array;x=u.version;for(let v=0,M=g.length;v<M;v+=3){let w=g[v+0],y=g[v+1],E=g[v+2];p.push(w,y,y,E,E,w)}}else if(_!==void 0){let g=_.array;x=_.version;for(let v=0,M=g.length/3-1;v<M;v+=3){let w=v+0,y=v+1,E=v+2;p.push(w,y,y,E,E,w)}}else return;let m=new(yf(p)?Oo:Bo)(p,1);m.version=x;let d=r.get(f);d&&e.remove(d),r.set(f,m)}function h(f){let p=r.get(f);if(p){let u=f.index;u!==null&&p.version<u.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function qg(i,e,t,n){let s=n.isWebGL2,r;function o(u){r=u}let a,l;function c(u){a=u.type,l=u.bytesPerElement}function h(u,_){i.drawElements(r,_,a,u*l),t.update(_,r,1)}function f(u,_,x){if(x===0)return;let m,d;if(s)m=i,d="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](r,_,a,u*l,x),t.update(_,r,x)}function p(u,_,x){if(x===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<x;d++)this.render(u[d]/l,_[d]);else{m.multiDrawElementsWEBGL(r,_,0,a,u,0,x);let d=0;for(let g=0;g<x;g++)d+=_[g];t.update(d,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=f,this.renderMultiDraw=p}function Yg(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Zg(i,e){return i[0]-e[0]}function Jg(i,e){return Math.abs(e[1])-Math.abs(i[1])}function $g(i,e,t){let n={},s=new Float32Array(8),r=new WeakMap,o=new Et,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,f){let p=c.morphTargetInfluences;if(e.isWebGL2===!0){let u=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=u!==void 0?u.length:0,x=r.get(h);if(x===void 0||x.count!==_){let D=function(){F.dispose(),r.delete(h),h.removeEventListener("dispose",D)};x!==void 0&&x.texture.dispose();let g=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,w=h.morphAttributes.position||[],y=h.morphAttributes.normal||[],E=h.morphAttributes.color||[],A=0;g===!0&&(A=1),v===!0&&(A=2),M===!0&&(A=3);let b=h.attributes.position.count*A,S=1;b>e.maxTextureSize&&(S=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let z=new Float32Array(b*S*4*_),F=new Fo(z,b,S,_);F.type=Ri,F.needsUpdate=!0;let q=A*4;for(let O=0;O<_;O++){let k=w[O],B=y[O],Y=E[O],W=b*S*4*O;for(let K=0;K<k.count;K++){let ee=K*q;g===!0&&(o.fromBufferAttribute(k,K),z[W+ee+0]=o.x,z[W+ee+1]=o.y,z[W+ee+2]=o.z,z[W+ee+3]=0),v===!0&&(o.fromBufferAttribute(B,K),z[W+ee+4]=o.x,z[W+ee+5]=o.y,z[W+ee+6]=o.z,z[W+ee+7]=0),M===!0&&(o.fromBufferAttribute(Y,K),z[W+ee+8]=o.x,z[W+ee+9]=o.y,z[W+ee+10]=o.z,z[W+ee+11]=Y.itemSize===4?o.w:1)}}x={count:_,texture:F,size:new xe(b,S)},r.set(h,x),h.addEventListener("dispose",D)}let m=0;for(let g=0;g<p.length;g++)m+=p[g];let d=h.morphTargetsRelative?1:1-m;f.getUniforms().setValue(i,"morphTargetBaseInfluence",d),f.getUniforms().setValue(i,"morphTargetInfluences",p),f.getUniforms().setValue(i,"morphTargetsTexture",x.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",x.size)}else{let u=p===void 0?0:p.length,_=n[h.id];if(_===void 0||_.length!==u){_=[];for(let v=0;v<u;v++)_[v]=[v,0];n[h.id]=_}for(let v=0;v<u;v++){let M=_[v];M[0]=v,M[1]=p[v]}_.sort(Jg);for(let v=0;v<8;v++)v<u&&_[v][1]?(a[v][0]=_[v][0],a[v][1]=_[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(Zg);let x=h.morphAttributes.position,m=h.morphAttributes.normal,d=0;for(let v=0;v<8;v++){let M=a[v],w=M[0],y=M[1];w!==Number.MAX_SAFE_INTEGER&&y?(x&&h.getAttribute("morphTarget"+v)!==x[w]&&h.setAttribute("morphTarget"+v,x[w]),m&&h.getAttribute("morphNormal"+v)!==m[w]&&h.setAttribute("morphNormal"+v,m[w]),s[v]=y,d+=y):(x&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),m&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),s[v]=0)}let g=h.morphTargetsRelative?1:1-d;f.getUniforms().setValue(i,"morphTargetBaseInfluence",g),f.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function Kg(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,f=e.get(l,h);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let p=l.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return f}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}function Qs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=bu[s];if(r===void 0&&(r=new Float32Array(s),bu[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Ot(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ht(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function aa(i,e){let t=Eu[e];t===void 0&&(t=new Int32Array(e),Eu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Qg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function jg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;i.uniform2fv(this.addr,e),Ht(t,e)}}function ex(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ot(t,e))return;i.uniform3fv(this.addr,e),Ht(t,e)}}function tx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;i.uniform4fv(this.addr,e),Ht(t,e)}}function nx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ht(t,e)}else{if(Ot(t,n))return;Tu.set(n),i.uniformMatrix2fv(this.addr,!1,Tu),Ht(t,n)}}function ix(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ht(t,e)}else{if(Ot(t,n))return;Su.set(n),i.uniformMatrix3fv(this.addr,!1,Su),Ht(t,n)}}function sx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ht(t,e)}else{if(Ot(t,n))return;wu.set(n),i.uniformMatrix4fv(this.addr,!1,wu),Ht(t,n)}}function rx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function ox(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;i.uniform2iv(this.addr,e),Ht(t,e)}}function ax(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;i.uniform3iv(this.addr,e),Ht(t,e)}}function lx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;i.uniform4iv(this.addr,e),Ht(t,e)}}function cx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function hx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;i.uniform2uiv(this.addr,e),Ht(t,e)}}function ux(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;i.uniform3uiv(this.addr,e),Ht(t,e)}}function fx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;i.uniform4uiv(this.addr,e),Ht(t,e)}}function dx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?Sf:wf;t.setTexture2D(e||r,s)}function px(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Af,s)}function mx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Rf,s)}function gx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Tf,s)}function xx(i){switch(i){case 5126:return Qg;case 35664:return jg;case 35665:return ex;case 35666:return tx;case 35674:return nx;case 35675:return ix;case 35676:return sx;case 5124:case 35670:return rx;case 35667:case 35671:return ox;case 35668:case 35672:return ax;case 35669:case 35673:return lx;case 5125:return cx;case 36294:return hx;case 36295:return ux;case 36296:return fx;case 35678:case 36198:case 36298:case 36306:case 35682:return dx;case 35679:case 36299:case 36307:return px;case 35680:case 36300:case 36308:case 36293:return mx;case 36289:case 36303:case 36311:case 36292:return gx}}function _x(i,e){i.uniform1fv(this.addr,e)}function vx(i,e){let t=Qs(e,this.size,2);i.uniform2fv(this.addr,t)}function yx(i,e){let t=Qs(e,this.size,3);i.uniform3fv(this.addr,t)}function Mx(i,e){let t=Qs(e,this.size,4);i.uniform4fv(this.addr,t)}function bx(i,e){let t=Qs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Ex(i,e){let t=Qs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function wx(i,e){let t=Qs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Sx(i,e){i.uniform1iv(this.addr,e)}function Tx(i,e){i.uniform2iv(this.addr,e)}function Ax(i,e){i.uniform3iv(this.addr,e)}function Rx(i,e){i.uniform4iv(this.addr,e)}function Cx(i,e){i.uniform1uiv(this.addr,e)}function Px(i,e){i.uniform2uiv(this.addr,e)}function Ix(i,e){i.uniform3uiv(this.addr,e)}function Lx(i,e){i.uniform4uiv(this.addr,e)}function Dx(i,e,t){let n=this.cache,s=e.length,r=aa(t,s);Ot(n,r)||(i.uniform1iv(this.addr,r),Ht(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||wf,r[o])}function Ux(i,e,t){let n=this.cache,s=e.length,r=aa(t,s);Ot(n,r)||(i.uniform1iv(this.addr,r),Ht(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Af,r[o])}function Nx(i,e,t){let n=this.cache,s=e.length,r=aa(t,s);Ot(n,r)||(i.uniform1iv(this.addr,r),Ht(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Rf,r[o])}function zx(i,e,t){let n=this.cache,s=e.length,r=aa(t,s);Ot(n,r)||(i.uniform1iv(this.addr,r),Ht(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Tf,r[o])}function Fx(i){switch(i){case 5126:return _x;case 35664:return vx;case 35665:return yx;case 35666:return Mx;case 35674:return bx;case 35675:return Ex;case 35676:return wx;case 5124:case 35670:return Sx;case 35667:case 35671:return Tx;case 35668:case 35672:return Ax;case 35669:case 35673:return Rx;case 5125:return Cx;case 36294:return Px;case 36295:return Ix;case 36296:return Lx;case 35678:case 36198:case 36298:case 36306:case 35682:return Dx;case 35679:case 36299:case 36307:return Ux;case 35680:case 36300:case 36308:case 36293:return Nx;case 36289:case 36303:case 36311:case 36292:return zx}}function Au(i,e){i.seq.push(e),i.map[e.id]=e}function Bx(i,e,t){let n=i.name,s=n.length;for(Ml.lastIndex=0;;){let r=Ml.exec(n),o=Ml.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Au(t,c===void 0?new kl(a,i,e):new Gl(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new Vl(a),Au(t,f)),t=f}}}function Ru(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}function kx(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Gx(i){let e=at.getPrimaries(at.workingColorSpace),t=at.getPrimaries(i),n;switch(e===t?n="":e===Lo&&t===Io?n="LinearDisplayP3ToLinearSRGB":e===Io&&t===Lo&&(n="LinearSRGBToLinearDisplayP3"),i){case di:case oa:return[n,"LinearTransferOETF"];case st:case Lc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Cu(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+kx(i.getShaderSource(e),o)}else return s}function Vx(i,e){let t=Gx(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Wx(i,e){let t;switch(e){case Tc:t="Linear";break;case Ac:t="Reinhard";break;case Rc:t="OptimizedCineon";break;case Nr:t="ACESFilmic";break;case Cc:t="AgX";break;case pp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Xx(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ds).join(`
`)}function qx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ds).join(`
`)}function Yx(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Zx(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Ds(i){return i!==""}function Pu(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Iu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function Wl(i){return i.replace(Jx,Kx)}function Kx(i,e){let t=Qe[e];if(t===void 0){let n=$x.get(e);if(n!==void 0)t=Qe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Wl(t)}function Lu(i){return i.replace(Qx,jx)}function jx(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Du(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function e_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===rf?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Sc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===li&&(e="SHADOWMAP_TYPE_VSM"),e}function t_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Bs:case Os:e="ENVMAP_TYPE_CUBE";break;case ra:e="ENVMAP_TYPE_CUBE_UV";break}return e}function n_(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Os:e="ENVMAP_MODE_REFRACTION";break}return e}function i_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case of:e="ENVMAP_BLENDING_MULTIPLY";break;case fp:e="ENVMAP_BLENDING_MIX";break;case dp:e="ENVMAP_BLENDING_ADD";break}return e}function s_(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function r_(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=e_(t),c=t_(t),h=n_(t),f=i_(t),p=s_(t),u=t.isWebGL2?"":Xx(t),_=qx(t),x=Yx(r),m=s.createProgram(),d,g,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Ds).join(`
`),d.length>0&&(d+=`
`),g=[u,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Ds).join(`
`),g.length>0&&(g+=`
`)):(d=[Du(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ds).join(`
`),g=[u,Du(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ci?"#define TONE_MAPPING":"",t.toneMapping!==Ci?Qe.tonemapping_pars_fragment:"",t.toneMapping!==Ci?Wx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,Vx("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ds).join(`
`)),o=Wl(o),o=Pu(o,t),o=Iu(o,t),a=Wl(a),a=Pu(a,t),a=Iu(a,t),o=Lu(o),a=Lu(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,d=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,g=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Qh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Qh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let M=v+d+o,w=v+g+a,y=Ru(s,s.VERTEX_SHADER,M),E=Ru(s,s.FRAGMENT_SHADER,w);s.attachShader(m,y),s.attachShader(m,E),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function A(F){if(i.debug.checkShaderErrors){let q=s.getProgramInfoLog(m).trim(),D=s.getShaderInfoLog(y).trim(),O=s.getShaderInfoLog(E).trim(),k=!0,B=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,y,E);else{let Y=Cu(s,y,"vertex"),W=Cu(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+q+`
`+Y+`
`+W)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(D===""||O==="")&&(B=!1);B&&(F.diagnostics={runnable:k,programLog:q,vertexShader:{log:D,prefix:d},fragmentShader:{log:O,prefix:g}})}s.deleteShader(y),s.deleteShader(E),b=new Fs(s,m),S=Zx(s,m)}let b;this.getUniforms=function(){return b===void 0&&A(this),b};let S;this.getAttributes=function(){return S===void 0&&A(this),S};let z=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=s.getProgramParameter(m,Ox)),z},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Hx++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=y,this.fragmentShader=E,this}function a_(i,e,t,n,s,r,o){let a=new Er,l=new Xl,c=[],h=s.isWebGL2,f=s.logarithmicDepthBuffer,p=s.vertexTextures,u=s.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return b===0?"uv":`uv${b}`}function m(b,S,z,F,q){let D=F.fog,O=q.geometry,k=b.isMeshStandardMaterial?F.environment:null,B=(b.isMeshStandardMaterial?t:e).get(b.envMap||k),Y=B&&B.mapping===ra?B.image.height:null,W=_[b.type];b.precision!==null&&(u=s.getMaxPrecision(b.precision),u!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",u,"instead."));let K=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ee=K!==void 0?K.length:0,me=0;O.morphAttributes.position!==void 0&&(me=1),O.morphAttributes.normal!==void 0&&(me=2),O.morphAttributes.color!==void 0&&(me=3);let $,se,Me,Se;if(W){let nn=Jn[W];$=nn.vertexShader,se=nn.fragmentShader}else $=b.vertexShader,se=b.fragmentShader,l.update(b),Me=l.getVertexShaderID(b),Se=l.getFragmentShaderID(b);let Q=i.getRenderTarget(),we=q.isInstancedMesh===!0,Ie=q.isBatchedMesh===!0,G=!!b.map,re=!!b.matcap,P=!!B,te=!!b.aoMap,J=!!b.lightMap,ue=!!b.bumpMap,ne=!!b.normalMap,Ee=!!b.displacementMap,pe=!!b.emissiveMap,R=!!b.metalnessMap,T=!!b.roughnessMap,Z=b.anisotropy>0,ve=b.clearcoat>0,_e=b.iridescence>0,ge=b.sheen>0,Ue=b.transmission>0,Ae=Z&&!!b.anisotropyMap,X=ve&&!!b.clearcoatMap,I=ve&&!!b.clearcoatNormalMap,N=ve&&!!b.clearcoatRoughnessMap,L=_e&&!!b.iridescenceMap,V=_e&&!!b.iridescenceThicknessMap,he=ge&&!!b.sheenColorMap,ie=ge&&!!b.sheenRoughnessMap,le=!!b.specularMap,fe=!!b.specularColorMap,ye=!!b.specularIntensityMap,Te=Ue&&!!b.transmissionMap,ke=Ue&&!!b.thicknessMap,Fe=!!b.gradientMap,be=!!b.alphaMap,H=b.alphaTest>0,Le=!!b.alphaHash,Ne=!!b.extensions,Ye=!!O.attributes.uv1,We=!!O.attributes.uv2,gt=!!O.attributes.uv3,xt=Ci;return b.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(xt=i.toneMapping),{isWebGL2:h,shaderID:W,shaderType:b.type,shaderName:b.name,vertexShader:$,fragmentShader:se,defines:b.defines,customVertexShaderID:Me,customFragmentShaderID:Se,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:u,batching:Ie,instancing:we,instancingColor:we&&q.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:Q===null?i.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:di,map:G,matcap:re,envMap:P,envMapMode:P&&B.mapping,envMapCubeUVHeight:Y,aoMap:te,lightMap:J,bumpMap:ue,normalMap:ne,displacementMap:p&&Ee,emissiveMap:pe,normalMapObjectSpace:ne&&b.normalMapType===Tp,normalMapTangentSpace:ne&&b.normalMapType===_f,metalnessMap:R,roughnessMap:T,anisotropy:Z,anisotropyMap:Ae,clearcoat:ve,clearcoatMap:X,clearcoatNormalMap:I,clearcoatRoughnessMap:N,iridescence:_e,iridescenceMap:L,iridescenceThicknessMap:V,sheen:ge,sheenColorMap:he,sheenRoughnessMap:ie,specularMap:le,specularColorMap:fe,specularIntensityMap:ye,transmission:Ue,transmissionMap:Te,thicknessMap:ke,gradientMap:Fe,opaque:b.transparent===!1&&b.blending===Ns,alphaMap:be,alphaTest:H,alphaHash:Le,combine:b.combine,mapUv:G&&x(b.map.channel),aoMapUv:te&&x(b.aoMap.channel),lightMapUv:J&&x(b.lightMap.channel),bumpMapUv:ue&&x(b.bumpMap.channel),normalMapUv:ne&&x(b.normalMap.channel),displacementMapUv:Ee&&x(b.displacementMap.channel),emissiveMapUv:pe&&x(b.emissiveMap.channel),metalnessMapUv:R&&x(b.metalnessMap.channel),roughnessMapUv:T&&x(b.roughnessMap.channel),anisotropyMapUv:Ae&&x(b.anisotropyMap.channel),clearcoatMapUv:X&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:I&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:N&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:L&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:V&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:he&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:ie&&x(b.sheenRoughnessMap.channel),specularMapUv:le&&x(b.specularMap.channel),specularColorMapUv:fe&&x(b.specularColorMap.channel),specularIntensityMapUv:ye&&x(b.specularIntensityMap.channel),transmissionMapUv:Te&&x(b.transmissionMap.channel),thicknessMapUv:ke&&x(b.thicknessMap.channel),alphaMapUv:be&&x(b.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(ne||Z),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:Ye,vertexUv2s:We,vertexUv3s:gt,pointsUvs:q.isPoints===!0&&!!O.attributes.uv&&(G||be),fog:!!D,useFog:b.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:q.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:me,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&z.length>0,shadowMapType:i.shadowMap.type,toneMapping:xt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:G&&b.map.isVideoTexture===!0&&at.getTransfer(b.map.colorSpace)===ft,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===ht,flipSided:b.side===zt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:Ne&&b.extensions.derivatives===!0,extensionFragDepth:Ne&&b.extensions.fragDepth===!0,extensionDrawBuffers:Ne&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ne&&b.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Ne&&b.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()}}function d(b){let S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(let z in b.defines)S.push(z),S.push(b.defines[z]);return b.isRawShaderMaterial===!1&&(g(S,b),v(S,b),S.push(i.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function g(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function v(b,S){a.disableAll(),S.isWebGL2&&a.enable(0),S.supportsVertexTextures&&a.enable(1),S.instancing&&a.enable(2),S.instancingColor&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),b.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.useLegacyLights&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),b.push(a.mask)}function M(b){let S=_[b.type],z;if(S){let F=Jn[S];z=jn.clone(F.uniforms)}else z=b.uniforms;return z}function w(b,S){let z;for(let F=0,q=c.length;F<q;F++){let D=c[F];if(D.cacheKey===S){z=D,++z.usedTimes;break}}return z===void 0&&(z=new r_(i,S,b,r),c.push(z)),z}function y(b){if(--b.usedTimes===0){let S=c.indexOf(b);c[S]=c[c.length-1],c.pop(),b.destroy()}}function E(b){l.remove(b)}function A(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:M,acquireProgram:w,releaseProgram:y,releaseShaderCache:E,programs:c,dispose:A}}function l_(){let i=new WeakMap;function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function t(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function c_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Uu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Nu(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(f,p,u,_,x,m){let d=i[e];return d===void 0?(d={id:f.id,object:f,geometry:p,material:u,groupOrder:_,renderOrder:f.renderOrder,z:x,group:m},i[e]=d):(d.id=f.id,d.object=f,d.geometry=p,d.material=u,d.groupOrder=_,d.renderOrder=f.renderOrder,d.z=x,d.group=m),e++,d}function a(f,p,u,_,x,m){let d=o(f,p,u,_,x,m);u.transmission>0?n.push(d):u.transparent===!0?s.push(d):t.push(d)}function l(f,p,u,_,x,m){let d=o(f,p,u,_,x,m);u.transmission>0?n.unshift(d):u.transparent===!0?s.unshift(d):t.unshift(d)}function c(f,p){t.length>1&&t.sort(f||c_),n.length>1&&n.sort(p||Uu),s.length>1&&s.sort(p||Uu)}function h(){for(let f=e,p=i.length;f<p;f++){let u=i[f];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function h_(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Nu,i.set(n,[o])):s>=r.length?(o=new Nu,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function u_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Re};break;case"SpotLight":t={position:new U,direction:new U,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":t={color:new Re,position:new U,halfWidth:new U,halfHeight:new U};break}return i[e.id]=t,t}}}function f_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}function p_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function m_(i,e){let t=new u_,n=f_(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new U);let r=new U,o=new lt,a=new lt;function l(h,f){let p=0,u=0,_=0;for(let F=0;F<9;F++)s.probe[F].set(0,0,0);let x=0,m=0,d=0,g=0,v=0,M=0,w=0,y=0,E=0,A=0,b=0;h.sort(p_);let S=f===!0?Math.PI:1;for(let F=0,q=h.length;F<q;F++){let D=h[F],O=D.color,k=D.intensity,B=D.distance,Y=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)p+=O.r*k*S,u+=O.g*k*S,_+=O.b*k*S;else if(D.isLightProbe){for(let W=0;W<9;W++)s.probe[W].addScaledVector(D.sh.coefficients[W],k);b++}else if(D.isDirectionalLight){let W=t.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity*S),D.castShadow){let K=D.shadow,ee=n.get(D);ee.shadowBias=K.bias,ee.shadowNormalBias=K.normalBias,ee.shadowRadius=K.radius,ee.shadowMapSize=K.mapSize,s.directionalShadow[x]=ee,s.directionalShadowMap[x]=Y,s.directionalShadowMatrix[x]=D.shadow.matrix,M++}s.directional[x]=W,x++}else if(D.isSpotLight){let W=t.get(D);W.position.setFromMatrixPosition(D.matrixWorld),W.color.copy(O).multiplyScalar(k*S),W.distance=B,W.coneCos=Math.cos(D.angle),W.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),W.decay=D.decay,s.spot[d]=W;let K=D.shadow;if(D.map&&(s.spotLightMap[E]=D.map,E++,K.updateMatrices(D),D.castShadow&&A++),s.spotLightMatrix[d]=K.matrix,D.castShadow){let ee=n.get(D);ee.shadowBias=K.bias,ee.shadowNormalBias=K.normalBias,ee.shadowRadius=K.radius,ee.shadowMapSize=K.mapSize,s.spotShadow[d]=ee,s.spotShadowMap[d]=Y,y++}d++}else if(D.isRectAreaLight){let W=t.get(D);W.color.copy(O).multiplyScalar(k),W.halfWidth.set(D.width*.5,0,0),W.halfHeight.set(0,D.height*.5,0),s.rectArea[g]=W,g++}else if(D.isPointLight){let W=t.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity*S),W.distance=D.distance,W.decay=D.decay,D.castShadow){let K=D.shadow,ee=n.get(D);ee.shadowBias=K.bias,ee.shadowNormalBias=K.normalBias,ee.shadowRadius=K.radius,ee.shadowMapSize=K.mapSize,ee.shadowCameraNear=K.camera.near,ee.shadowCameraFar=K.camera.far,s.pointShadow[m]=ee,s.pointShadowMap[m]=Y,s.pointShadowMatrix[m]=D.shadow.matrix,w++}s.point[m]=W,m++}else if(D.isHemisphereLight){let W=t.get(D);W.skyColor.copy(D.color).multiplyScalar(k*S),W.groundColor.copy(D.groundColor).multiplyScalar(k*S),s.hemi[v]=W,v++}}g>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=De.LTC_FLOAT_1,s.rectAreaLTC2=De.LTC_FLOAT_2):(s.rectAreaLTC1=De.LTC_HALF_1,s.rectAreaLTC2=De.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=De.LTC_FLOAT_1,s.rectAreaLTC2=De.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=De.LTC_HALF_1,s.rectAreaLTC2=De.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=p,s.ambient[1]=u,s.ambient[2]=_;let z=s.hash;(z.directionalLength!==x||z.pointLength!==m||z.spotLength!==d||z.rectAreaLength!==g||z.hemiLength!==v||z.numDirectionalShadows!==M||z.numPointShadows!==w||z.numSpotShadows!==y||z.numSpotMaps!==E||z.numLightProbes!==b)&&(s.directional.length=x,s.spot.length=d,s.rectArea.length=g,s.point.length=m,s.hemi.length=v,s.directionalShadow.length=M,s.directionalShadowMap.length=M,s.pointShadow.length=w,s.pointShadowMap.length=w,s.spotShadow.length=y,s.spotShadowMap.length=y,s.directionalShadowMatrix.length=M,s.pointShadowMatrix.length=w,s.spotLightMatrix.length=y+E-A,s.spotLightMap.length=E,s.numSpotLightShadowsWithMaps=A,s.numLightProbes=b,z.directionalLength=x,z.pointLength=m,z.spotLength=d,z.rectAreaLength=g,z.hemiLength=v,z.numDirectionalShadows=M,z.numPointShadows=w,z.numSpotShadows=y,z.numSpotMaps=E,z.numLightProbes=b,s.version=d_++)}function c(h,f){let p=0,u=0,_=0,x=0,m=0,d=f.matrixWorldInverse;for(let g=0,v=h.length;g<v;g++){let M=h[g];if(M.isDirectionalLight){let w=s.directional[p];w.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(d),p++}else if(M.isSpotLight){let w=s.spot[_];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(d),w.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(d),_++}else if(M.isRectAreaLight){let w=s.rectArea[x];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(d),a.identity(),o.copy(M.matrixWorld),o.premultiply(d),a.extractRotation(o),w.halfWidth.set(M.width*.5,0,0),w.halfHeight.set(0,M.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),x++}else if(M.isPointLight){let w=s.point[u];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(d),u++}else if(M.isHemisphereLight){let w=s.hemi[m];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(d),m++}}}return{setup:l,setupView:c,state:s}}function zu(i,e){let t=new m_(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function o(f){n.push(f)}function a(f){s.push(f)}function l(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function g_(i,e){let t=new WeakMap;function n(r,o=0){let a=t.get(r),l;return a===void 0?(l=new zu(i,e),t.set(r,[l])):o>=a.length?(l=new zu(i,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:n,dispose:s}}function v_(i,e,t){let n=new wr,s=new xe,r=new xe,o=new Et,a=new Yl({depthPacking:Sp}),l=new Zl,c={},h=t.maxTextureSize,f={[Li]:zt,[zt]:Li,[ht]:ht},p=new It({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xe},radius:{value:4}},vertexShader:x_,fragmentShader:__}),u=p.clone();u.defines.HORIZONTAL_PASS=1;let _=new Xe;_.setAttribute("position",new tt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ce(_,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rf;let d=this.type;this.render=function(y,E,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||y.length===0)return;let b=i.getRenderTarget(),S=i.getActiveCubeFace(),z=i.getActiveMipmapLevel(),F=i.state;F.setBlending($n),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let q=d!==li&&this.type===li,D=d===li&&this.type!==li;for(let O=0,k=y.length;O<k;O++){let B=y[O],Y=B.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);let W=Y.getFrameExtents();if(s.multiply(W),r.copy(Y.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/W.x),s.x=r.x*W.x,Y.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/W.y),s.y=r.y*W.y,Y.mapSize.y=r.y)),Y.map===null||q===!0||D===!0){let ee=this.type!==li?{minFilter:an,magFilter:an}:{};Y.map!==null&&Y.map.dispose(),Y.map=new $t(s.x,s.y,ee),Y.map.texture.name=B.name+".shadowMap",Y.camera.updateProjectionMatrix()}i.setRenderTarget(Y.map),i.clear();let K=Y.getViewportCount();for(let ee=0;ee<K;ee++){let me=Y.getViewport(ee);o.set(r.x*me.x,r.y*me.y,r.x*me.z,r.y*me.w),F.viewport(o),Y.updateMatrices(B,ee),n=Y.getFrustum(),M(E,A,Y.camera,B,this.type)}Y.isPointLightShadow!==!0&&this.type===li&&g(Y,A),Y.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(b,S,z)};function g(y,E){let A=e.update(x);p.defines.VSM_SAMPLES!==y.blurSamples&&(p.defines.VSM_SAMPLES=y.blurSamples,u.defines.VSM_SAMPLES=y.blurSamples,p.needsUpdate=!0,u.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new $t(s.x,s.y)),p.uniforms.shadow_pass.value=y.map.texture,p.uniforms.resolution.value=y.mapSize,p.uniforms.radius.value=y.radius,i.setRenderTarget(y.mapPass),i.clear(),i.renderBufferDirect(E,null,A,p,x,null),u.uniforms.shadow_pass.value=y.mapPass.texture,u.uniforms.resolution.value=y.mapSize,u.uniforms.radius.value=y.radius,i.setRenderTarget(y.map),i.clear(),i.renderBufferDirect(E,null,A,u,x,null)}function v(y,E,A,b){let S=null,z=A.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(z!==void 0)S=z;else if(S=A.isPointLight===!0?l:a,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let F=S.uuid,q=E.uuid,D=c[F];D===void 0&&(D={},c[F]=D);let O=D[q];O===void 0&&(O=S.clone(),D[q]=O,E.addEventListener("dispose",w)),S=O}if(S.visible=E.visible,S.wireframe=E.wireframe,b===li?S.side=E.shadowSide!==null?E.shadowSide:E.side:S.side=E.shadowSide!==null?E.shadowSide:f[E.side],S.alphaMap=E.alphaMap,S.alphaTest=E.alphaTest,S.map=E.map,S.clipShadows=E.clipShadows,S.clippingPlanes=E.clippingPlanes,S.clipIntersection=E.clipIntersection,S.displacementMap=E.displacementMap,S.displacementScale=E.displacementScale,S.displacementBias=E.displacementBias,S.wireframeLinewidth=E.wireframeLinewidth,S.linewidth=E.linewidth,A.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let F=i.properties.get(S);F.light=A}return S}function M(y,E,A,b,S){if(y.visible===!1)return;if(y.layers.test(E.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&S===li)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,y.matrixWorld);let q=e.update(y),D=y.material;if(Array.isArray(D)){let O=q.groups;for(let k=0,B=O.length;k<B;k++){let Y=O[k],W=D[Y.materialIndex];if(W&&W.visible){let K=v(y,W,b,S);y.onBeforeShadow(i,y,E,A,q,K,Y),i.renderBufferDirect(A,null,q,K,y,Y),y.onAfterShadow(i,y,E,A,q,K,Y)}}}else if(D.visible){let O=v(y,D,b,S);y.onBeforeShadow(i,y,E,A,q,O,null),i.renderBufferDirect(A,null,q,O,y,null),y.onAfterShadow(i,y,E,A,q,O,null)}}let F=y.children;for(let q=0,D=F.length;q<D;q++)M(F[q],E,A,b,S)}function w(y){y.target.removeEventListener("dispose",w);for(let A in c){let b=c[A],S=y.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}function y_(i,e,t){let n=t.isWebGL2;function s(){let H=!1,Le=new Et,Ne=null,Ye=new Et(0,0,0,0);return{setMask:function(We){Ne!==We&&!H&&(i.colorMask(We,We,We,We),Ne=We)},setLocked:function(We){H=We},setClear:function(We,gt,xt,Vt,nn){nn===!0&&(We*=Vt,gt*=Vt,xt*=Vt),Le.set(We,gt,xt,Vt),Ye.equals(Le)===!1&&(i.clearColor(We,gt,xt,Vt),Ye.copy(Le))},reset:function(){H=!1,Ne=null,Ye.set(-1,0,0,0)}}}function r(){let H=!1,Le=null,Ne=null,Ye=null;return{setTest:function(We){We?Ie(i.DEPTH_TEST):G(i.DEPTH_TEST)},setMask:function(We){Le!==We&&!H&&(i.depthMask(We),Le=We)},setFunc:function(We){if(Ne!==We){switch(We){case rp:i.depthFunc(i.NEVER);break;case op:i.depthFunc(i.ALWAYS);break;case ap:i.depthFunc(i.LESS);break;case Ao:i.depthFunc(i.LEQUAL);break;case lp:i.depthFunc(i.EQUAL);break;case cp:i.depthFunc(i.GEQUAL);break;case hp:i.depthFunc(i.GREATER);break;case up:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ne=We}},setLocked:function(We){H=We},setClear:function(We){Ye!==We&&(i.clearDepth(We),Ye=We)},reset:function(){H=!1,Le=null,Ne=null,Ye=null}}}function o(){let H=!1,Le=null,Ne=null,Ye=null,We=null,gt=null,xt=null,Vt=null,nn=null;return{setTest:function(_t){H||(_t?Ie(i.STENCIL_TEST):G(i.STENCIL_TEST))},setMask:function(_t){Le!==_t&&!H&&(i.stencilMask(_t),Le=_t)},setFunc:function(_t,sn,Zn){(Ne!==_t||Ye!==sn||We!==Zn)&&(i.stencilFunc(_t,sn,Zn),Ne=_t,Ye=sn,We=Zn)},setOp:function(_t,sn,Zn){(gt!==_t||xt!==sn||Vt!==Zn)&&(i.stencilOp(_t,sn,Zn),gt=_t,xt=sn,Vt=Zn)},setLocked:function(_t){H=_t},setClear:function(_t){nn!==_t&&(i.clearStencil(_t),nn=_t)},reset:function(){H=!1,Le=null,Ne=null,Ye=null,We=null,gt=null,xt=null,Vt=null,nn=null}}}let a=new s,l=new r,c=new o,h=new WeakMap,f=new WeakMap,p={},u={},_=new WeakMap,x=[],m=null,d=!1,g=null,v=null,M=null,w=null,y=null,E=null,A=null,b=new Re(0,0,0),S=0,z=!1,F=null,q=null,D=null,O=null,k=null,B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,W=0,K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(K)[1]),Y=W>=1):K.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),Y=W>=2);let ee=null,me={},$=i.getParameter(i.SCISSOR_BOX),se=i.getParameter(i.VIEWPORT),Me=new Et().fromArray($),Se=new Et().fromArray(se);function Q(H,Le,Ne,Ye){let We=new Uint8Array(4),gt=i.createTexture();i.bindTexture(H,gt),i.texParameteri(H,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(H,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let xt=0;xt<Ne;xt++)n&&(H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY)?i.texImage3D(Le,0,i.RGBA,1,1,Ye,0,i.RGBA,i.UNSIGNED_BYTE,We):i.texImage2D(Le+xt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,We);return gt}let we={};we[i.TEXTURE_2D]=Q(i.TEXTURE_2D,i.TEXTURE_2D,1),we[i.TEXTURE_CUBE_MAP]=Q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(we[i.TEXTURE_2D_ARRAY]=Q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),we[i.TEXTURE_3D]=Q(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ie(i.DEPTH_TEST),l.setFunc(Ao),pe(!1),R(xh),Ie(i.CULL_FACE),ne($n);function Ie(H){p[H]!==!0&&(i.enable(H),p[H]=!0)}function G(H){p[H]!==!1&&(i.disable(H),p[H]=!1)}function re(H,Le){return u[H]!==Le?(i.bindFramebuffer(H,Le),u[H]=Le,n&&(H===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Le),H===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Le)),!0):!1}function P(H,Le){let Ne=x,Ye=!1;if(H)if(Ne=_.get(Le),Ne===void 0&&(Ne=[],_.set(Le,Ne)),H.isWebGLMultipleRenderTargets){let We=H.texture;if(Ne.length!==We.length||Ne[0]!==i.COLOR_ATTACHMENT0){for(let gt=0,xt=We.length;gt<xt;gt++)Ne[gt]=i.COLOR_ATTACHMENT0+gt;Ne.length=We.length,Ye=!0}}else Ne[0]!==i.COLOR_ATTACHMENT0&&(Ne[0]=i.COLOR_ATTACHMENT0,Ye=!0);else Ne[0]!==i.BACK&&(Ne[0]=i.BACK,Ye=!0);Ye&&(t.isWebGL2?i.drawBuffers(Ne):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Ne))}function te(H){return m!==H?(i.useProgram(H),m=H,!0):!1}let J={[$i]:i.FUNC_ADD,[Wd]:i.FUNC_SUBTRACT,[Xd]:i.FUNC_REVERSE_SUBTRACT};if(n)J[yh]=i.MIN,J[Mh]=i.MAX;else{let H=e.get("EXT_blend_minmax");H!==null&&(J[yh]=H.MIN_EXT,J[Mh]=H.MAX_EXT)}let ue={[qd]:i.ZERO,[Yd]:i.ONE,[Zd]:i.SRC_COLOR,[Cl]:i.SRC_ALPHA,[ep]:i.SRC_ALPHA_SATURATE,[Qd]:i.DST_COLOR,[$d]:i.DST_ALPHA,[Jd]:i.ONE_MINUS_SRC_COLOR,[Pl]:i.ONE_MINUS_SRC_ALPHA,[jd]:i.ONE_MINUS_DST_COLOR,[Kd]:i.ONE_MINUS_DST_ALPHA,[tp]:i.CONSTANT_COLOR,[np]:i.ONE_MINUS_CONSTANT_COLOR,[ip]:i.CONSTANT_ALPHA,[sp]:i.ONE_MINUS_CONSTANT_ALPHA};function ne(H,Le,Ne,Ye,We,gt,xt,Vt,nn,_t){if(H===$n){d===!0&&(G(i.BLEND),d=!1);return}if(d===!1&&(Ie(i.BLEND),d=!0),H!==Vd){if(H!==g||_t!==z){if((v!==$i||y!==$i)&&(i.blendEquation(i.FUNC_ADD),v=$i,y=$i),_t)switch(H){case Ns:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Yt:i.blendFunc(i.ONE,i.ONE);break;case _h:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case vh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case Ns:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Yt:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case _h:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case vh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}M=null,w=null,E=null,A=null,b.set(0,0,0),S=0,g=H,z=_t}return}We=We||Le,gt=gt||Ne,xt=xt||Ye,(Le!==v||We!==y)&&(i.blendEquationSeparate(J[Le],J[We]),v=Le,y=We),(Ne!==M||Ye!==w||gt!==E||xt!==A)&&(i.blendFuncSeparate(ue[Ne],ue[Ye],ue[gt],ue[xt]),M=Ne,w=Ye,E=gt,A=xt),(Vt.equals(b)===!1||nn!==S)&&(i.blendColor(Vt.r,Vt.g,Vt.b,nn),b.copy(Vt),S=nn),g=H,z=!1}function Ee(H,Le){H.side===ht?G(i.CULL_FACE):Ie(i.CULL_FACE);let Ne=H.side===zt;Le&&(Ne=!Ne),pe(Ne),H.blending===Ns&&H.transparent===!1?ne($n):ne(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),l.setFunc(H.depthFunc),l.setTest(H.depthTest),l.setMask(H.depthWrite),a.setMask(H.colorWrite);let Ye=H.stencilWrite;c.setTest(Ye),Ye&&(c.setMask(H.stencilWriteMask),c.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),c.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Z(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?Ie(i.SAMPLE_ALPHA_TO_COVERAGE):G(i.SAMPLE_ALPHA_TO_COVERAGE)}function pe(H){F!==H&&(H?i.frontFace(i.CW):i.frontFace(i.CCW),F=H)}function R(H){H!==kd?(Ie(i.CULL_FACE),H!==q&&(H===xh?i.cullFace(i.BACK):H===Gd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):G(i.CULL_FACE),q=H}function T(H){H!==D&&(Y&&i.lineWidth(H),D=H)}function Z(H,Le,Ne){H?(Ie(i.POLYGON_OFFSET_FILL),(O!==Le||k!==Ne)&&(i.polygonOffset(Le,Ne),O=Le,k=Ne)):G(i.POLYGON_OFFSET_FILL)}function ve(H){H?Ie(i.SCISSOR_TEST):G(i.SCISSOR_TEST)}function _e(H){H===void 0&&(H=i.TEXTURE0+B-1),ee!==H&&(i.activeTexture(H),ee=H)}function ge(H,Le,Ne){Ne===void 0&&(ee===null?Ne=i.TEXTURE0+B-1:Ne=ee);let Ye=me[Ne];Ye===void 0&&(Ye={type:void 0,texture:void 0},me[Ne]=Ye),(Ye.type!==H||Ye.texture!==Le)&&(ee!==Ne&&(i.activeTexture(Ne),ee=Ne),i.bindTexture(H,Le||we[H]),Ye.type=H,Ye.texture=Le)}function Ue(){let H=me[ee];H!==void 0&&H.type!==void 0&&(i.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function Ae(){try{i.compressedTexImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function X(){try{i.compressedTexImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function I(){try{i.texSubImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function N(){try{i.texSubImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function L(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function V(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function he(){try{i.texStorage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ie(){try{i.texStorage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function le(){try{i.texImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function fe(){try{i.texImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ye(H){Me.equals(H)===!1&&(i.scissor(H.x,H.y,H.z,H.w),Me.copy(H))}function Te(H){Se.equals(H)===!1&&(i.viewport(H.x,H.y,H.z,H.w),Se.copy(H))}function ke(H,Le){let Ne=f.get(Le);Ne===void 0&&(Ne=new WeakMap,f.set(Le,Ne));let Ye=Ne.get(H);Ye===void 0&&(Ye=i.getUniformBlockIndex(Le,H.name),Ne.set(H,Ye))}function Fe(H,Le){let Ye=f.get(Le).get(H);h.get(Le)!==Ye&&(i.uniformBlockBinding(Le,Ye,H.__bindingPointIndex),h.set(Le,Ye))}function be(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),p={},ee=null,me={},u={},_=new WeakMap,x=[],m=null,d=!1,g=null,v=null,M=null,w=null,y=null,E=null,A=null,b=new Re(0,0,0),S=0,z=!1,F=null,q=null,D=null,O=null,k=null,Me.set(0,0,i.canvas.width,i.canvas.height),Se.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ie,disable:G,bindFramebuffer:re,drawBuffers:P,useProgram:te,setBlending:ne,setMaterial:Ee,setFlipSided:pe,setCullFace:R,setLineWidth:T,setPolygonOffset:Z,setScissorTest:ve,activeTexture:_e,bindTexture:ge,unbindTexture:Ue,compressedTexImage2D:Ae,compressedTexImage3D:X,texImage2D:le,texImage3D:fe,updateUBOMapping:ke,uniformBlockBinding:Fe,texStorage2D:he,texStorage3D:ie,texSubImage2D:I,texSubImage3D:N,compressedTexSubImage2D:L,compressedTexSubImage3D:V,scissor:ye,viewport:Te,reset:be}}function M_(i,e,t,n,s,r,o){let a=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,f,p=new WeakMap,u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,T){return u?new OffscreenCanvas(R,T):br("canvas")}function x(R,T,Z,ve){let _e=1;if((R.width>ve||R.height>ve)&&(_e=ve/Math.max(R.width,R.height)),_e<1||T===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){let ge=T?zl:Math.floor,Ue=ge(_e*R.width),Ae=ge(_e*R.height);f===void 0&&(f=_(Ue,Ae));let X=Z?_(Ue,Ae):f;return X.width=Ue,X.height=Ae,X.getContext("2d").drawImage(R,0,0,Ue,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+Ue+"x"+Ae+")."),X}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function m(R){return jh(R.width)&&jh(R.height)}function d(R){return a?!1:R.wrapS!==cn||R.wrapT!==cn||R.minFilter!==an&&R.minFilter!==Tn}function g(R,T){return R.generateMipmaps&&T&&R.minFilter!==an&&R.minFilter!==Tn}function v(R){i.generateMipmap(R)}function M(R,T,Z,ve,_e=!1){if(a===!1)return T;if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ge=T;if(T===i.RED&&(Z===i.FLOAT&&(ge=i.R32F),Z===i.HALF_FLOAT&&(ge=i.R16F),Z===i.UNSIGNED_BYTE&&(ge=i.R8)),T===i.RED_INTEGER&&(Z===i.UNSIGNED_BYTE&&(ge=i.R8UI),Z===i.UNSIGNED_SHORT&&(ge=i.R16UI),Z===i.UNSIGNED_INT&&(ge=i.R32UI),Z===i.BYTE&&(ge=i.R8I),Z===i.SHORT&&(ge=i.R16I),Z===i.INT&&(ge=i.R32I)),T===i.RG&&(Z===i.FLOAT&&(ge=i.RG32F),Z===i.HALF_FLOAT&&(ge=i.RG16F),Z===i.UNSIGNED_BYTE&&(ge=i.RG8)),T===i.RGBA){let Ue=_e?Po:at.getTransfer(ve);Z===i.FLOAT&&(ge=i.RGBA32F),Z===i.HALF_FLOAT&&(ge=i.RGBA16F),Z===i.UNSIGNED_BYTE&&(ge=Ue===ft?i.SRGB8_ALPHA8:i.RGBA8),Z===i.UNSIGNED_SHORT_4_4_4_4&&(ge=i.RGBA4),Z===i.UNSIGNED_SHORT_5_5_5_1&&(ge=i.RGB5_A1)}return(ge===i.R16F||ge===i.R32F||ge===i.RG16F||ge===i.RG32F||ge===i.RGBA16F||ge===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ge}function w(R,T,Z){return g(R,Z)===!0||R.isFramebufferTexture&&R.minFilter!==an&&R.minFilter!==Tn?Math.log2(Math.max(T.width,T.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?T.mipmaps.length:1}function y(R){return R===an||R===bh||R===Xa?i.NEAREST:i.LINEAR}function E(R){let T=R.target;T.removeEventListener("dispose",E),b(T),T.isVideoTexture&&h.delete(T)}function A(R){let T=R.target;T.removeEventListener("dispose",A),z(T)}function b(R){let T=n.get(R);if(T.__webglInit===void 0)return;let Z=R.source,ve=p.get(Z);if(ve){let _e=ve[T.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&S(R),Object.keys(ve).length===0&&p.delete(Z)}n.remove(R)}function S(R){let T=n.get(R);i.deleteTexture(T.__webglTexture);let Z=R.source,ve=p.get(Z);delete ve[T.__cacheKey],o.memory.textures--}function z(R){let T=R.texture,Z=n.get(R),ve=n.get(T);if(ve.__webglTexture!==void 0&&(i.deleteTexture(ve.__webglTexture),o.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let _e=0;_e<6;_e++){if(Array.isArray(Z.__webglFramebuffer[_e]))for(let ge=0;ge<Z.__webglFramebuffer[_e].length;ge++)i.deleteFramebuffer(Z.__webglFramebuffer[_e][ge]);else i.deleteFramebuffer(Z.__webglFramebuffer[_e]);Z.__webglDepthbuffer&&i.deleteRenderbuffer(Z.__webglDepthbuffer[_e])}else{if(Array.isArray(Z.__webglFramebuffer))for(let _e=0;_e<Z.__webglFramebuffer.length;_e++)i.deleteFramebuffer(Z.__webglFramebuffer[_e]);else i.deleteFramebuffer(Z.__webglFramebuffer);if(Z.__webglDepthbuffer&&i.deleteRenderbuffer(Z.__webglDepthbuffer),Z.__webglMultisampledFramebuffer&&i.deleteFramebuffer(Z.__webglMultisampledFramebuffer),Z.__webglColorRenderbuffer)for(let _e=0;_e<Z.__webglColorRenderbuffer.length;_e++)Z.__webglColorRenderbuffer[_e]&&i.deleteRenderbuffer(Z.__webglColorRenderbuffer[_e]);Z.__webglDepthRenderbuffer&&i.deleteRenderbuffer(Z.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let _e=0,ge=T.length;_e<ge;_e++){let Ue=n.get(T[_e]);Ue.__webglTexture&&(i.deleteTexture(Ue.__webglTexture),o.memory.textures--),n.remove(T[_e])}n.remove(T),n.remove(R)}let F=0;function q(){F=0}function D(){let R=F;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),F+=1,R}function O(R){let T=[];return T.push(R.wrapS),T.push(R.wrapT),T.push(R.wrapR||0),T.push(R.magFilter),T.push(R.minFilter),T.push(R.anisotropy),T.push(R.internalFormat),T.push(R.format),T.push(R.type),T.push(R.generateMipmaps),T.push(R.premultiplyAlpha),T.push(R.flipY),T.push(R.unpackAlignment),T.push(R.colorSpace),T.join()}function k(R,T){let Z=n.get(R);if(R.isVideoTexture&&Ee(R),R.isRenderTargetTexture===!1&&R.version>0&&Z.__version!==R.version){let ve=R.image;if(ve===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ve.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Me(Z,R,T);return}}t.bindTexture(i.TEXTURE_2D,Z.__webglTexture,i.TEXTURE0+T)}function B(R,T){let Z=n.get(R);if(R.version>0&&Z.__version!==R.version){Me(Z,R,T);return}t.bindTexture(i.TEXTURE_2D_ARRAY,Z.__webglTexture,i.TEXTURE0+T)}function Y(R,T){let Z=n.get(R);if(R.version>0&&Z.__version!==R.version){Me(Z,R,T);return}t.bindTexture(i.TEXTURE_3D,Z.__webglTexture,i.TEXTURE0+T)}function W(R,T){let Z=n.get(R);if(R.version>0&&Z.__version!==R.version){Se(Z,R,T);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture,i.TEXTURE0+T)}let K={[Zt]:i.REPEAT,[cn]:i.CLAMP_TO_EDGE,[Dl]:i.MIRRORED_REPEAT},ee={[an]:i.NEAREST,[bh]:i.NEAREST_MIPMAP_NEAREST,[Xa]:i.NEAREST_MIPMAP_LINEAR,[Tn]:i.LINEAR,[mp]:i.LINEAR_MIPMAP_NEAREST,[Mr]:i.LINEAR_MIPMAP_LINEAR},me={[Ap]:i.NEVER,[Dp]:i.ALWAYS,[Rp]:i.LESS,[vf]:i.LEQUAL,[Cp]:i.EQUAL,[Lp]:i.GEQUAL,[Pp]:i.GREATER,[Ip]:i.NOTEQUAL};function $(R,T,Z){if(Z?(i.texParameteri(R,i.TEXTURE_WRAP_S,K[T.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,K[T.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,K[T.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,ee[T.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,ee[T.minFilter])):(i.texParameteri(R,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(R,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(T.wrapS!==cn||T.wrapT!==cn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(R,i.TEXTURE_MAG_FILTER,y(T.magFilter)),i.texParameteri(R,i.TEXTURE_MIN_FILTER,y(T.minFilter)),T.minFilter!==an&&T.minFilter!==Tn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,me[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let ve=e.get("EXT_texture_filter_anisotropic");if(T.magFilter===an||T.minFilter!==Xa&&T.minFilter!==Mr||T.type===Ri&&e.has("OES_texture_float_linear")===!1||a===!1&&T.type===gn&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||n.get(T).__currentAnisotropy)&&(i.texParameterf(R,ve.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy)}}function se(R,T){let Z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,T.addEventListener("dispose",E));let ve=T.source,_e=p.get(ve);_e===void 0&&(_e={},p.set(ve,_e));let ge=O(T);if(ge!==R.__cacheKey){_e[ge]===void 0&&(_e[ge]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),_e[ge].usedTimes++;let Ue=_e[R.__cacheKey];Ue!==void 0&&(_e[R.__cacheKey].usedTimes--,Ue.usedTimes===0&&S(T)),R.__cacheKey=ge,R.__webglTexture=_e[ge].texture}return Z}function Me(R,T,Z){let ve=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ve=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ve=i.TEXTURE_3D);let _e=se(R,T),ge=T.source;t.bindTexture(ve,R.__webglTexture,i.TEXTURE0+Z);let Ue=n.get(ge);if(ge.version!==Ue.__version||_e===!0){t.activeTexture(i.TEXTURE0+Z);let Ae=at.getPrimaries(at.workingColorSpace),X=T.colorSpace===An?null:at.getPrimaries(T.colorSpace),I=T.colorSpace===An||Ae===X?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,I);let N=d(T)&&m(T.image)===!1,L=x(T.image,N,!1,s.maxTextureSize);L=pe(T,L);let V=m(L)||a,he=r.convert(T.format,T.colorSpace),ie=r.convert(T.type),le=M(T.internalFormat,he,ie,T.colorSpace,T.isVideoTexture);$(ve,T,V);let fe,ye=T.mipmaps,Te=a&&T.isVideoTexture!==!0&&le!==pf,ke=Ue.__version===void 0||_e===!0,Fe=w(T,L,V);if(T.isDepthTexture)le=i.DEPTH_COMPONENT,a?T.type===Ri?le=i.DEPTH_COMPONENT32F:T.type===Ai?le=i.DEPTH_COMPONENT24:T.type===ji?le=i.DEPTH24_STENCIL8:le=i.DEPTH_COMPONENT16:T.type===Ri&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===es&&le===i.DEPTH_COMPONENT&&T.type!==Pc&&T.type!==Ai&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=Ai,ie=r.convert(T.type)),T.format===Hs&&le===i.DEPTH_COMPONENT&&(le=i.DEPTH_STENCIL,T.type!==ji&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=ji,ie=r.convert(T.type))),ke&&(Te?t.texStorage2D(i.TEXTURE_2D,1,le,L.width,L.height):t.texImage2D(i.TEXTURE_2D,0,le,L.width,L.height,0,he,ie,null));else if(T.isDataTexture)if(ye.length>0&&V){Te&&ke&&t.texStorage2D(i.TEXTURE_2D,Fe,le,ye[0].width,ye[0].height);for(let be=0,H=ye.length;be<H;be++)fe=ye[be],Te?t.texSubImage2D(i.TEXTURE_2D,be,0,0,fe.width,fe.height,he,ie,fe.data):t.texImage2D(i.TEXTURE_2D,be,le,fe.width,fe.height,0,he,ie,fe.data);T.generateMipmaps=!1}else Te?(ke&&t.texStorage2D(i.TEXTURE_2D,Fe,le,L.width,L.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,L.width,L.height,he,ie,L.data)):t.texImage2D(i.TEXTURE_2D,0,le,L.width,L.height,0,he,ie,L.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Te&&ke&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Fe,le,ye[0].width,ye[0].height,L.depth);for(let be=0,H=ye.length;be<H;be++)fe=ye[be],T.format!==Fn?he!==null?Te?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,be,0,0,0,fe.width,fe.height,L.depth,he,fe.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,be,le,fe.width,fe.height,L.depth,0,fe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Te?t.texSubImage3D(i.TEXTURE_2D_ARRAY,be,0,0,0,fe.width,fe.height,L.depth,he,ie,fe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,be,le,fe.width,fe.height,L.depth,0,he,ie,fe.data)}else{Te&&ke&&t.texStorage2D(i.TEXTURE_2D,Fe,le,ye[0].width,ye[0].height);for(let be=0,H=ye.length;be<H;be++)fe=ye[be],T.format!==Fn?he!==null?Te?t.compressedTexSubImage2D(i.TEXTURE_2D,be,0,0,fe.width,fe.height,he,fe.data):t.compressedTexImage2D(i.TEXTURE_2D,be,le,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Te?t.texSubImage2D(i.TEXTURE_2D,be,0,0,fe.width,fe.height,he,ie,fe.data):t.texImage2D(i.TEXTURE_2D,be,le,fe.width,fe.height,0,he,ie,fe.data)}else if(T.isDataArrayTexture)Te?(ke&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Fe,le,L.width,L.height,L.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,L.width,L.height,L.depth,he,ie,L.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,le,L.width,L.height,L.depth,0,he,ie,L.data);else if(T.isData3DTexture)Te?(ke&&t.texStorage3D(i.TEXTURE_3D,Fe,le,L.width,L.height,L.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,L.width,L.height,L.depth,he,ie,L.data)):t.texImage3D(i.TEXTURE_3D,0,le,L.width,L.height,L.depth,0,he,ie,L.data);else if(T.isFramebufferTexture){if(ke)if(Te)t.texStorage2D(i.TEXTURE_2D,Fe,le,L.width,L.height);else{let be=L.width,H=L.height;for(let Le=0;Le<Fe;Le++)t.texImage2D(i.TEXTURE_2D,Le,le,be,H,0,he,ie,null),be>>=1,H>>=1}}else if(ye.length>0&&V){Te&&ke&&t.texStorage2D(i.TEXTURE_2D,Fe,le,ye[0].width,ye[0].height);for(let be=0,H=ye.length;be<H;be++)fe=ye[be],Te?t.texSubImage2D(i.TEXTURE_2D,be,0,0,he,ie,fe):t.texImage2D(i.TEXTURE_2D,be,le,he,ie,fe);T.generateMipmaps=!1}else Te?(ke&&t.texStorage2D(i.TEXTURE_2D,Fe,le,L.width,L.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,he,ie,L)):t.texImage2D(i.TEXTURE_2D,0,le,he,ie,L);g(T,V)&&v(ve),Ue.__version=ge.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function Se(R,T,Z){if(T.image.length!==6)return;let ve=se(R,T),_e=T.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+Z);let ge=n.get(_e);if(_e.version!==ge.__version||ve===!0){t.activeTexture(i.TEXTURE0+Z);let Ue=at.getPrimaries(at.workingColorSpace),Ae=T.colorSpace===An?null:at.getPrimaries(T.colorSpace),X=T.colorSpace===An||Ue===Ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,X);let I=T.isCompressedTexture||T.image[0].isCompressedTexture,N=T.image[0]&&T.image[0].isDataTexture,L=[];for(let be=0;be<6;be++)!I&&!N?L[be]=x(T.image[be],!1,!0,s.maxCubemapSize):L[be]=N?T.image[be].image:T.image[be],L[be]=pe(T,L[be]);let V=L[0],he=m(V)||a,ie=r.convert(T.format,T.colorSpace),le=r.convert(T.type),fe=M(T.internalFormat,ie,le,T.colorSpace),ye=a&&T.isVideoTexture!==!0,Te=ge.__version===void 0||ve===!0,ke=w(T,V,he);$(i.TEXTURE_CUBE_MAP,T,he);let Fe;if(I){ye&&Te&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ke,fe,V.width,V.height);for(let be=0;be<6;be++){Fe=L[be].mipmaps;for(let H=0;H<Fe.length;H++){let Le=Fe[H];T.format!==Fn?ie!==null?ye?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,H,0,0,Le.width,Le.height,ie,Le.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,H,fe,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ye?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,H,0,0,Le.width,Le.height,ie,le,Le.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,H,fe,Le.width,Le.height,0,ie,le,Le.data)}}}else{Fe=T.mipmaps,ye&&Te&&(Fe.length>0&&ke++,t.texStorage2D(i.TEXTURE_CUBE_MAP,ke,fe,L[0].width,L[0].height));for(let be=0;be<6;be++)if(N){ye?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,L[be].width,L[be].height,ie,le,L[be].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,fe,L[be].width,L[be].height,0,ie,le,L[be].data);for(let H=0;H<Fe.length;H++){let Ne=Fe[H].image[be].image;ye?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,H+1,0,0,Ne.width,Ne.height,ie,le,Ne.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,H+1,fe,Ne.width,Ne.height,0,ie,le,Ne.data)}}else{ye?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,ie,le,L[be]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,fe,ie,le,L[be]);for(let H=0;H<Fe.length;H++){let Le=Fe[H];ye?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,H+1,0,0,ie,le,Le.image[be]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,H+1,fe,ie,le,Le.image[be])}}}g(T,he)&&v(i.TEXTURE_CUBE_MAP),ge.__version=_e.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function Q(R,T,Z,ve,_e,ge){let Ue=r.convert(Z.format,Z.colorSpace),Ae=r.convert(Z.type),X=M(Z.internalFormat,Ue,Ae,Z.colorSpace);if(!n.get(T).__hasExternalTextures){let N=Math.max(1,T.width>>ge),L=Math.max(1,T.height>>ge);_e===i.TEXTURE_3D||_e===i.TEXTURE_2D_ARRAY?t.texImage3D(_e,ge,X,N,L,T.depth,0,Ue,Ae,null):t.texImage2D(_e,ge,X,N,L,0,Ue,Ae,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),ne(T)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ve,_e,n.get(Z).__webglTexture,0,ue(T)):(_e===i.TEXTURE_2D||_e>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ve,_e,n.get(Z).__webglTexture,ge),t.bindFramebuffer(i.FRAMEBUFFER,null)}function we(R,T,Z){if(i.bindRenderbuffer(i.RENDERBUFFER,R),T.depthBuffer&&!T.stencilBuffer){let ve=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(Z||ne(T)){let _e=T.depthTexture;_e&&_e.isDepthTexture&&(_e.type===Ri?ve=i.DEPTH_COMPONENT32F:_e.type===Ai&&(ve=i.DEPTH_COMPONENT24));let ge=ue(T);ne(T)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ge,ve,T.width,T.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ge,ve,T.width,T.height)}else i.renderbufferStorage(i.RENDERBUFFER,ve,T.width,T.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,R)}else if(T.depthBuffer&&T.stencilBuffer){let ve=ue(T);Z&&ne(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ve,i.DEPTH24_STENCIL8,T.width,T.height):ne(T)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ve,i.DEPTH24_STENCIL8,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,R)}else{let ve=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let _e=0;_e<ve.length;_e++){let ge=ve[_e],Ue=r.convert(ge.format,ge.colorSpace),Ae=r.convert(ge.type),X=M(ge.internalFormat,Ue,Ae,ge.colorSpace),I=ue(T);Z&&ne(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,I,X,T.width,T.height):ne(T)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,I,X,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,X,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ie(R,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),k(T.depthTexture,0);let ve=n.get(T.depthTexture).__webglTexture,_e=ue(T);if(T.depthTexture.format===es)ne(T)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ve,0,_e):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ve,0);else if(T.depthTexture.format===Hs)ne(T)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ve,0,_e):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ve,0);else throw new Error("Unknown depthTexture format")}function G(R){let T=n.get(R),Z=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!T.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");Ie(T.__webglFramebuffer,R)}else if(Z){T.__webglDepthbuffer=[];for(let ve=0;ve<6;ve++)t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[ve]),T.__webglDepthbuffer[ve]=i.createRenderbuffer(),we(T.__webglDepthbuffer[ve],R,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=i.createRenderbuffer(),we(T.__webglDepthbuffer,R,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function re(R,T,Z){let ve=n.get(R);T!==void 0&&Q(ve.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Z!==void 0&&G(R)}function P(R){let T=R.texture,Z=n.get(R),ve=n.get(T);R.addEventListener("dispose",A),R.isWebGLMultipleRenderTargets!==!0&&(ve.__webglTexture===void 0&&(ve.__webglTexture=i.createTexture()),ve.__version=T.version,o.memory.textures++);let _e=R.isWebGLCubeRenderTarget===!0,ge=R.isWebGLMultipleRenderTargets===!0,Ue=m(R)||a;if(_e){Z.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(a&&T.mipmaps&&T.mipmaps.length>0){Z.__webglFramebuffer[Ae]=[];for(let X=0;X<T.mipmaps.length;X++)Z.__webglFramebuffer[Ae][X]=i.createFramebuffer()}else Z.__webglFramebuffer[Ae]=i.createFramebuffer()}else{if(a&&T.mipmaps&&T.mipmaps.length>0){Z.__webglFramebuffer=[];for(let Ae=0;Ae<T.mipmaps.length;Ae++)Z.__webglFramebuffer[Ae]=i.createFramebuffer()}else Z.__webglFramebuffer=i.createFramebuffer();if(ge)if(s.drawBuffers){let Ae=R.texture;for(let X=0,I=Ae.length;X<I;X++){let N=n.get(Ae[X]);N.__webglTexture===void 0&&(N.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&ne(R)===!1){let Ae=ge?T:[T];Z.__webglMultisampledFramebuffer=i.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let X=0;X<Ae.length;X++){let I=Ae[X];Z.__webglColorRenderbuffer[X]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Z.__webglColorRenderbuffer[X]);let N=r.convert(I.format,I.colorSpace),L=r.convert(I.type),V=M(I.internalFormat,N,L,I.colorSpace,R.isXRRenderTarget===!0),he=ue(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,he,V,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+X,i.RENDERBUFFER,Z.__webglColorRenderbuffer[X])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(Z.__webglDepthRenderbuffer=i.createRenderbuffer(),we(Z.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(_e){t.bindTexture(i.TEXTURE_CUBE_MAP,ve.__webglTexture),$(i.TEXTURE_CUBE_MAP,T,Ue);for(let Ae=0;Ae<6;Ae++)if(a&&T.mipmaps&&T.mipmaps.length>0)for(let X=0;X<T.mipmaps.length;X++)Q(Z.__webglFramebuffer[Ae][X],R,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,X);else Q(Z.__webglFramebuffer[Ae],R,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);g(T,Ue)&&v(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){let Ae=R.texture;for(let X=0,I=Ae.length;X<I;X++){let N=Ae[X],L=n.get(N);t.bindTexture(i.TEXTURE_2D,L.__webglTexture),$(i.TEXTURE_2D,N,Ue),Q(Z.__webglFramebuffer,R,N,i.COLOR_ATTACHMENT0+X,i.TEXTURE_2D,0),g(N,Ue)&&v(i.TEXTURE_2D)}t.unbindTexture()}else{let Ae=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?Ae=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Ae,ve.__webglTexture),$(Ae,T,Ue),a&&T.mipmaps&&T.mipmaps.length>0)for(let X=0;X<T.mipmaps.length;X++)Q(Z.__webglFramebuffer[X],R,T,i.COLOR_ATTACHMENT0,Ae,X);else Q(Z.__webglFramebuffer,R,T,i.COLOR_ATTACHMENT0,Ae,0);g(T,Ue)&&v(Ae),t.unbindTexture()}R.depthBuffer&&G(R)}function te(R){let T=m(R)||a,Z=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let ve=0,_e=Z.length;ve<_e;ve++){let ge=Z[ve];if(g(ge,T)){let Ue=R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Ae=n.get(ge).__webglTexture;t.bindTexture(Ue,Ae),v(Ue),t.unbindTexture()}}}function J(R){if(a&&R.samples>0&&ne(R)===!1){let T=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],Z=R.width,ve=R.height,_e=i.COLOR_BUFFER_BIT,ge=[],Ue=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ae=n.get(R),X=R.isWebGLMultipleRenderTargets===!0;if(X)for(let I=0;I<T.length;I++)t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+I,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+I,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let I=0;I<T.length;I++){ge.push(i.COLOR_ATTACHMENT0+I),R.depthBuffer&&ge.push(Ue);let N=Ae.__ignoreDepthValues!==void 0?Ae.__ignoreDepthValues:!1;if(N===!1&&(R.depthBuffer&&(_e|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&(_e|=i.STENCIL_BUFFER_BIT)),X&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ae.__webglColorRenderbuffer[I]),N===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Ue]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Ue])),X){let L=n.get(T[I]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,L,0)}i.blitFramebuffer(0,0,Z,ve,0,0,Z,ve,_e,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ge)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),X)for(let I=0;I<T.length;I++){t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+I,i.RENDERBUFFER,Ae.__webglColorRenderbuffer[I]);let N=n.get(T[I]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+I,i.TEXTURE_2D,N,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}}function ue(R){return Math.min(s.maxSamples,R.samples)}function ne(R){let T=n.get(R);return a&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ee(R){let T=o.render.frame;h.get(R)!==T&&(h.set(R,T),R.update())}function pe(R,T){let Z=R.colorSpace,ve=R.format,_e=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===Nl||Z!==di&&Z!==An&&(at.getTransfer(Z)===ft?a===!1?e.has("EXT_sRGB")===!0&&ve===Fn?(R.format=Nl,R.minFilter=Tn,R.generateMipmaps=!1):T=No.sRGBToLinear(T):(ve!==Fn||_e!==Pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),T}this.allocateTextureUnit=D,this.resetTextureUnits=q,this.setTexture2D=k,this.setTexture2DArray=B,this.setTexture3D=Y,this.setTextureCube=W,this.rebindTextures=re,this.setupRenderTarget=P,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=J,this.setupDepthRenderbuffer=G,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=ne}function b_(i,e,t){let n=t.isWebGL2;function s(r,o=An){let a,l=at.getTransfer(o);if(r===Pi)return i.UNSIGNED_BYTE;if(r===cf)return i.UNSIGNED_SHORT_4_4_4_4;if(r===hf)return i.UNSIGNED_SHORT_5_5_5_1;if(r===gp)return i.BYTE;if(r===xp)return i.SHORT;if(r===Pc)return i.UNSIGNED_SHORT;if(r===lf)return i.INT;if(r===Ai)return i.UNSIGNED_INT;if(r===Ri)return i.FLOAT;if(r===gn)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===_p)return i.ALPHA;if(r===Fn)return i.RGBA;if(r===vp)return i.LUMINANCE;if(r===yp)return i.LUMINANCE_ALPHA;if(r===es)return i.DEPTH_COMPONENT;if(r===Hs)return i.DEPTH_STENCIL;if(r===Nl)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Mp)return i.RED;if(r===uf)return i.RED_INTEGER;if(r===bp)return i.RG;if(r===ff)return i.RG_INTEGER;if(r===df)return i.RGBA_INTEGER;if(r===qa||r===Ya||r===Za||r===Ja)if(l===ft)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===qa)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ya)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Za)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ja)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===qa)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ya)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Za)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ja)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Eh||r===wh||r===Sh||r===Th)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Eh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===wh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Sh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Th)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===pf)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Ah||r===Rh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Ah)return l===ft?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Rh)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ch||r===Ph||r===Ih||r===Lh||r===Dh||r===Uh||r===Nh||r===zh||r===Fh||r===Bh||r===Oh||r===Hh||r===kh||r===Gh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Ch)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ph)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ih)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Lh)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Dh)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Uh)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Nh)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===zh)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Fh)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Bh)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Oh)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Hh)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===kh)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Gh)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===$a||r===Vh||r===Wh)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===$a)return l===ft?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Vh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Wh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Ep||r===Xh||r===qh||r===Yh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===$a)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Xh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===qh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Yh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ji?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}function w_(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,bf(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,g,v,M){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),f(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),p(m,d),d.isMeshPhysicalMaterial&&u(m,d,M)):d.isMeshMatcapMaterial?(r(m,d),_(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),x(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,g,v):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===zt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===zt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let g=e.get(d).envMap;if(g&&(m.envMap.value=g,m.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;let v=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*v,t(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,g,v){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*g,m.scale.value=v*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function p(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function u(m,d,g){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===zt&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){let g=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function S_(i,e,t,n){let s={},r={},o=[],a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(g,v){let M=v.program;n.uniformBlockBinding(g,M)}function c(g,v){let M=s[g.id];M===void 0&&(_(g),M=h(g),s[g.id]=M,g.addEventListener("dispose",m));let w=v.program;n.updateUBOMapping(g,w);let y=e.render.frame;r[g.id]!==y&&(p(g),r[g.id]=y)}function h(g){let v=f();g.__bindingPointIndex=v;let M=i.createBuffer(),w=g.__size,y=g.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,w,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,M),M}function f(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(g){let v=s[g.id],M=g.uniforms,w=g.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let y=0,E=M.length;y<E;y++){let A=Array.isArray(M[y])?M[y]:[M[y]];for(let b=0,S=A.length;b<S;b++){let z=A[b];if(u(z,y,b,w)===!0){let F=z.__offset,q=Array.isArray(z.value)?z.value:[z.value],D=0;for(let O=0;O<q.length;O++){let k=q[O],B=x(k);typeof k=="number"||typeof k=="boolean"?(z.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,F+D,z.__data)):k.isMatrix3?(z.__data[0]=k.elements[0],z.__data[1]=k.elements[1],z.__data[2]=k.elements[2],z.__data[3]=0,z.__data[4]=k.elements[3],z.__data[5]=k.elements[4],z.__data[6]=k.elements[5],z.__data[7]=0,z.__data[8]=k.elements[6],z.__data[9]=k.elements[7],z.__data[10]=k.elements[8],z.__data[11]=0):(k.toArray(z.__data,D),D+=B.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,z.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(g,v,M,w){let y=g.value,E=v+"_"+M;if(w[E]===void 0)return typeof y=="number"||typeof y=="boolean"?w[E]=y:w[E]=y.clone(),!0;{let A=w[E];if(typeof y=="number"||typeof y=="boolean"){if(A!==y)return w[E]=y,!0}else if(A.equals(y)===!1)return A.copy(y),!0}return!1}function _(g){let v=g.uniforms,M=0,w=16;for(let E=0,A=v.length;E<A;E++){let b=Array.isArray(v[E])?v[E]:[v[E]];for(let S=0,z=b.length;S<z;S++){let F=b[S],q=Array.isArray(F.value)?F.value:[F.value];for(let D=0,O=q.length;D<O;D++){let k=q[D],B=x(k),Y=M%w;Y!==0&&w-Y<B.boundary&&(M+=w-Y),F.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=M,M+=B.storage}}}let y=M%w;return y>0&&(M+=w-y),g.__size=M,g.__cache={},this}function x(g){let v={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(v.boundary=4,v.storage=4):g.isVector2?(v.boundary=8,v.storage=8):g.isVector3||g.isColor?(v.boundary=16,v.storage=12):g.isVector4?(v.boundary=16,v.storage=16):g.isMatrix3?(v.boundary=48,v.storage=48):g.isMatrix4?(v.boundary=64,v.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),v}function m(g){let v=g.target;v.removeEventListener("dispose",m);let M=o.indexOf(v.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function d(){for(let g in s)i.deleteBuffer(s[g]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}function _o(i,e,t,n,s,r){Ps.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(fr.x=r*Ps.x-s*Ps.y,fr.y=s*Ps.x+r*Ps.y):fr.copy(Ps),i.copy(e),i.x+=fr.x,i.y+=fr.y,i.applyMatrix4(Cf)}function Yu(i,e,t,n,s,r,o){let a=jl.distanceSqToPoint(i);if(a<t){let l=new U;jl.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}function Uc(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,f){let p=(o-r)/c-(a-r)/(c+h)+(a-o)/h,u=(a-o)/h-(l-o)/(h+f)+(l-a)/f;p*=h,u*=h,s(o,a,p,u)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}function Zu(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function A_(i,e){let t=1-i;return t*t*e}function R_(i,e){return 2*(1-i)*i*e}function C_(i,e){return i*i*e}function vr(i,e,t,n){return A_(i,e)+R_(i,t)+C_(i,n)}function P_(i,e){let t=1-i;return t*t*t*e}function I_(i,e){let t=1-i;return 3*t*t*i*e}function L_(i,e){return 3*(1-i)*i*i*e}function D_(i,e){return i*i*i*e}function yr(i,e,t,n,s){return P_(i,e)+I_(i,t)+L_(i,n)+D_(i,s)}function Pf(i,e,t,n,s){let r,o;if(s===$_(i,e,t,n)>0)for(r=e;r<t;r+=n)o=Ju(r,i[r],i[r+1],o);else for(r=t-n;r>=e;r-=n)o=Ju(r,i[r],i[r+1],o);return o&&la(o,o.next)&&(Ir(o),o=o.next),o}function rs(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(la(t,t.next)||At(t.prev,t,t.next)===0)){if(Ir(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Cr(i,e,t,n,s,r,o){if(!i)return;!o&&r&&W_(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?z_(i,n,s,r):N_(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),Ir(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=F_(rs(i),e,t),Cr(i,e,t,n,s,r,2)):o===2&&B_(i,e,t,n,s,r):Cr(rs(i),e,t,n,s,r,1);break}}}function N_(i){let e=i.prev,t=i,n=i.next;if(At(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=s<r?s<o?s:o:r<o?r:o,f=a<l?a<c?a:c:l<c?l:c,p=s>r?s>o?s:o:r>o?r:o,u=a>l?a>c?a:c:l>c?l:c,_=n.next;for(;_!==e;){if(_.x>=h&&_.x<=p&&_.y>=f&&_.y<=u&&Us(s,a,r,l,o,c,_.x,_.y)&&At(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function z_(i,e,t,n){let s=i.prev,r=i,o=i.next;if(At(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,f=r.y,p=o.y,u=a<l?a<c?a:c:l<c?l:c,_=h<f?h<p?h:p:f<p?f:p,x=a>l?a>c?a:c:l>c?l:c,m=h>f?h>p?h:p:f>p?f:p,d=lc(u,_,e,t,n),g=lc(x,m,e,t,n),v=i.prevZ,M=i.nextZ;for(;v&&v.z>=d&&M&&M.z<=g;){if(v.x>=u&&v.x<=x&&v.y>=_&&v.y<=m&&v!==s&&v!==o&&Us(a,h,l,f,c,p,v.x,v.y)&&At(v.prev,v,v.next)>=0||(v=v.prevZ,M.x>=u&&M.x<=x&&M.y>=_&&M.y<=m&&M!==s&&M!==o&&Us(a,h,l,f,c,p,M.x,M.y)&&At(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;v&&v.z>=d;){if(v.x>=u&&v.x<=x&&v.y>=_&&v.y<=m&&v!==s&&v!==o&&Us(a,h,l,f,c,p,v.x,v.y)&&At(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;M&&M.z<=g;){if(M.x>=u&&M.x<=x&&M.y>=_&&M.y<=m&&M!==s&&M!==o&&Us(a,h,l,f,c,p,M.x,M.y)&&At(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function F_(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!la(s,r)&&If(s,n,n.next,r)&&Pr(s,r)&&Pr(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Ir(n),Ir(n.next),n=i=r),n=n.next}while(n!==i);return rs(n)}function B_(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Y_(o,a)){let l=Lf(o,a);o=rs(o,o.next),l=rs(l,l.next),Cr(o,e,t,n,s,r,0),Cr(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function O_(i,e,t,n){let s=[],r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=Pf(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(q_(c));for(s.sort(H_),r=0;r<s.length;r++)t=k_(s[r],t);return t}function H_(i,e){return i.x-e.x}function k_(i,e){let t=G_(i,e);if(!t)return e;let n=Lf(t,i);return rs(n,n.next),rs(t,t.next)}function G_(i,e){let t=e,n=-1/0,s,r=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let p=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(p<=r&&p>n&&(n=p,s=t.x<t.next.x?t:t.next,p===r))return s}t=t.next}while(t!==e);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,f;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&Us(o<c?r:n,o,l,c,o<c?n:r,o,t.x,t.y)&&(f=Math.abs(o-t.y)/(r-t.x),Pr(t,i)&&(f<h||f===h&&(t.x>s.x||t.x===s.x&&V_(s,t)))&&(s=t,h=f)),t=t.next;while(t!==a);return s}function V_(i,e){return At(i.prev,i,e.prev)<0&&At(e.next,i,i.next)<0}function W_(i,e,t,n){let s=i;do s.z===0&&(s.z=lc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,X_(s)}function X_(i){let e,t,n,s,r,o,a,l,c=1;do{for(t=i,i=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(o>1);return i}function lc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function q_(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Us(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function Y_(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Z_(i,e)&&(Pr(i,e)&&Pr(e,i)&&J_(i,e)&&(At(i.prev,i,e.prev)||At(i,e.prev,e))||la(i,e)&&At(i.prev,i,i.next)>0&&At(e.prev,e,e.next)>0)}function At(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function la(i,e){return i.x===e.x&&i.y===e.y}function If(i,e,t,n){let s=So(At(i,e,t)),r=So(At(i,e,n)),o=So(At(t,n,i)),a=So(At(t,n,e));return!!(s!==r&&o!==a||s===0&&wo(i,t,e)||r===0&&wo(i,n,e)||o===0&&wo(t,i,n)||a===0&&wo(t,e,n))}function wo(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function So(i){return i>0?1:i<0?-1:0}function Z_(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&If(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Pr(i,e){return At(i.prev,i,i.next)<0?At(i,e,i.next)>=0&&At(i,i.prev,e)>=0:At(i,e,i.prev)<0||At(i,i.next,e)<0}function J_(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Lf(i,e){let t=new cc(i.i,i.x,i.y),n=new cc(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Ju(i,e,t,n){let s=new cc(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ir(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function cc(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function $_(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}function $u(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Ku(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}function Q_(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}function j_(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}function To(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function ev(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function nf(){return(typeof performance>"u"?Date:performance).now()}function sf(i,e){return i.distance-e.distance}function Ec(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){let s=i.children;for(let r=0,o=s.length;r<o;r++)Ec(s[r],e,t,!0)}}var wc,kd,xh,Gd,rf,Sc,li,Li,zt,ht,$n,Ns,Yt,_h,vh,Vd,$i,Wd,Xd,yh,Mh,qd,Yd,Zd,Jd,Cl,Pl,$d,Kd,Qd,jd,ep,tp,np,ip,sp,rp,op,ap,Ao,lp,cp,hp,up,of,fp,dp,Ci,Tc,Ac,Rc,Nr,pp,Cc,af,Bs,Os,Il,Ll,ra,Zt,cn,Dl,an,bh,Xa,Tn,mp,Mr,Pi,gp,xp,Pc,lf,Ai,Ri,gn,cf,hf,ji,_p,Fn,vp,yp,es,Hs,Mp,uf,bp,ff,df,qa,Ya,Za,Ja,Eh,wh,Sh,Th,pf,Ah,Rh,Ch,Ph,Ih,Lh,Dh,Uh,Nh,zh,Fh,Bh,Oh,Hh,kh,Gh,$a,Vh,Wh,Ep,Xh,qh,Yh,Ro,Co,Ka,Zh,Jh,$h,mf,gf,Ic,xf,ts,wp,Sp,_f,Tp,An,st,di,Lc,oa,Po,ft,Io,Lo,us,Kh,Ap,Rp,Cp,vf,Pp,Ip,Lp,Dp,Ul,Qh,Nl,ui,Do,Di,jt,Qa,Uo,xe,it,el,eu,tu,nu,Yr,zp,at,fs,No,Fp,zo,Bp,xn,Et,Fl,$t,Fo,Bl,Kn,U,il,iu,pi,ii,Un,Zr,ds,ps,ms,bi,Ei,Xi,ar,Jr,$r,qi,Op,lr,rl,mi,si,ol,Kr,wi,al,Qr,ll,ks,lt,gs,Nn,Hp,kp,Si,jr,pn,su,ru,Gs,Er,Gp,ou,xs,ri,eo,cr,Vp,Wp,au,lu,cu,Xp,qp,Pt,zn,oi,cl,ai,_s,vs,hu,hl,ul,fl,to,Qi,Mf,Ti,no,Re,en,Yp,Qn,ut,Nt,io,tt,Bo,Oo,ze,Zp,Sn,pl,ys,mn,hr,Xt,Xe,uu,Yi,so,fu,Ms,bs,Es,ml,ro,oo,ao,lo,du,pu,mu,co,ho,ce,Oe,jn,Kp,Qp,It,Ho,Jt,ws,Ss,Ol,ko,Hl,gl,jp,em,ci,Zi,fo,wr,wt,nm,im,sm,rm,om,am,lm,cm,hm,um,fm,dm,pm,mm,gm,xm,_m,vm,ym,Mm,bm,Em,wm,Sm,Tm,Am,Rm,Cm,Pm,Im,Lm,Dm,Um,Nm,zm,Fm,Bm,Om,Hm,km,Gm,Vm,Wm,Xm,qm,Ym,Zm,Jm,$m,Km,Qm,jm,e0,t0,n0,i0,s0,r0,o0,a0,l0,c0,h0,u0,f0,d0,p0,m0,g0,x0,_0,v0,y0,M0,b0,E0,w0,S0,T0,A0,R0,C0,P0,I0,L0,D0,U0,N0,z0,F0,B0,O0,H0,k0,G0,V0,W0,X0,q0,Y0,Z0,J0,$0,K0,Q0,j0,eg,tg,ng,ig,sg,rg,og,ag,lg,cg,hg,ug,fg,dg,pg,mg,gg,xg,_g,vg,yg,Mg,bg,Eg,wg,Sg,Tg,Ag,Rg,Cg,Pg,Ig,Lg,Dg,Ug,Qe,De,Jn,po,Ws,Ls,gu,Ki,xl,xu,_l,vl,yl,Ji,Ts,_u,Ui,Go,wf,Sf,Tf,Af,Rf,bu,Eu,wu,Su,Tu,kl,Gl,Vl,Ml,Fs,Ox,Hx,Jx,$x,Qx,o_,Xl,ql,d_,Yl,Zl,x_,__,Jl,Ct,E_,_r,$l,Sr,Kl,Vo,Wo,Bn,Tr,rn,Xs,Ni,As,ur,Rs,Cs,Ps,fr,Cf,go,dr,xo,Fu,bl,Bu,ns,is,Is,Ou,vo,Hu,T_,pr,mr,Xo,ss,ku,Gu,Vu,El,yo,Ql,Wu,Xu,qs,Rn,qu,jl,Mo,bo,_n,pt,Cn,Ar,ec,Eo,wl,Sl,Tl,tc,qo,nc,Yo,ic,Zo,sc,Jo,rc,oc,$o,Rr,Pn,rt,zi,ac,On,U_,Ii,vn,K_,Ko,Qo,jo,gi,In,ea,Pe,Kt,Ys,hc,uc,fc,Hn,os,dc,pc,mc,Lr,as,gc,Qu,xc,tv,Dr,_c,ta,Zs,Js,Al,ju,ef,Ur,vc,$s,tf,gr,Rl,yc,na,Mc,Ks,ia,Nc,nv,zc,iv,sv,rv,ov,av,lv,cv,bc,bt,Kv,sa,Lt=gh(()=>{wc="160",kd=0,xh=1,Gd=2,rf=1,Sc=2,li=3,Li=0,zt=1,ht=2,$n=0,Ns=1,Yt=2,_h=3,vh=4,Vd=5,$i=100,Wd=101,Xd=102,yh=103,Mh=104,qd=200,Yd=201,Zd=202,Jd=203,Cl=204,Pl=205,$d=206,Kd=207,Qd=208,jd=209,ep=210,tp=211,np=212,ip=213,sp=214,rp=0,op=1,ap=2,Ao=3,lp=4,cp=5,hp=6,up=7,of=0,fp=1,dp=2,Ci=0,Tc=1,Ac=2,Rc=3,Nr=4,pp=5,Cc=6,af=300,Bs=301,Os=302,Il=303,Ll=304,ra=306,Zt=1e3,cn=1001,Dl=1002,an=1003,bh=1004,Xa=1005,Tn=1006,mp=1007,Mr=1008,Pi=1009,gp=1010,xp=1011,Pc=1012,lf=1013,Ai=1014,Ri=1015,gn=1016,cf=1017,hf=1018,ji=1020,_p=1021,Fn=1023,vp=1024,yp=1025,es=1026,Hs=1027,Mp=1028,uf=1029,bp=1030,ff=1031,df=1033,qa=33776,Ya=33777,Za=33778,Ja=33779,Eh=35840,wh=35841,Sh=35842,Th=35843,pf=36196,Ah=37492,Rh=37496,Ch=37808,Ph=37809,Ih=37810,Lh=37811,Dh=37812,Uh=37813,Nh=37814,zh=37815,Fh=37816,Bh=37817,Oh=37818,Hh=37819,kh=37820,Gh=37821,$a=36492,Vh=36494,Wh=36495,Ep=36283,Xh=36284,qh=36285,Yh=36286,Ro=2300,Co=2301,Ka=2302,Zh=2400,Jh=2401,$h=2402,mf=0,gf=1,Ic=2,xf=3e3,ts=3001,wp=3200,Sp=3201,_f=0,Tp=1,An="",st="srgb",di="srgb-linear",Lc="display-p3",oa="display-p3-linear",Po="linear",ft="srgb",Io="rec709",Lo="p3",us=7680,Kh=519,Ap=512,Rp=513,Cp=514,vf=515,Pp=516,Ip=517,Lp=518,Dp=519,Ul=35044,Qh="300 es",Nl=1035,ui=2e3,Do=2001,Di=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qa=Math.PI/180,Uo=180/Math.PI;xe=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(qt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},it=class i{constructor(e,t,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],f=n[7],p=n[2],u=n[5],_=n[8],x=s[0],m=s[3],d=s[6],g=s[1],v=s[4],M=s[7],w=s[2],y=s[5],E=s[8];return r[0]=o*x+a*g+l*w,r[3]=o*m+a*v+l*y,r[6]=o*d+a*M+l*E,r[1]=c*x+h*g+f*w,r[4]=c*m+h*v+f*y,r[7]=c*d+h*M+f*E,r[2]=p*x+u*g+_*w,r[5]=p*m+u*v+_*y,r[8]=p*d+u*M+_*E,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=h*o-a*c,p=a*l-h*r,u=c*r-o*l,_=t*f+n*p+s*u;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/_;return e[0]=f*x,e[1]=(s*c-h*n)*x,e[2]=(a*n-s*o)*x,e[3]=p*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=u*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(el.makeScale(e,t)),this}rotate(e){return this.premultiply(el.makeRotation(-e)),this}translate(e,t){return this.premultiply(el.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},el=new it;eu={};tu=new it().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),nu=new it().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Yr={[di]:{transfer:Po,primaries:Io,toReference:i=>i,fromReference:i=>i},[st]:{transfer:ft,primaries:Io,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[oa]:{transfer:Po,primaries:Lo,toReference:i=>i.applyMatrix3(nu),fromReference:i=>i.applyMatrix3(tu)},[Lc]:{transfer:ft,primaries:Lo,toReference:i=>i.convertSRGBToLinear().applyMatrix3(nu),fromReference:i=>i.applyMatrix3(tu).convertLinearToSRGB()}},zp=new Set([di,oa]),at={enabled:!0,_workingColorSpace:di,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!zp.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=Yr[e].toReference,s=Yr[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Yr[i].primaries},getTransfer:function(i){return i===An?Po:Yr[i].transfer}};No=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{fs===void 0&&(fs=br("canvas")),fs.width=e.width,fs.height=e.height;let n=fs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=fs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=br("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=zs(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(zs(t[n]/255)*255):t[n]=zs(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Fp=0,zo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Fp++}),this.uuid=fi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(nl(s[o].image)):r.push(nl(s[o]))}else r=nl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};Bp=0,xn=class i extends Di{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=cn,s=cn,r=Tn,o=Mr,a=Fn,l=Pi,c=i.DEFAULT_ANISOTROPY,h=An){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bp++}),this.uuid=fi(),this.name="",this.source=new zo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new xe(0,0),this.repeat=new xe(1,1),this.center=new xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(xr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===ts?st:An),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==af)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zt:e.x=e.x-Math.floor(e.x);break;case cn:e.x=e.x<0?0:1;break;case Dl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zt:e.y=e.y-Math.floor(e.y);break;case cn:e.y=e.y<0?0:1;break;case Dl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return xr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===st?ts:xf}set encoding(e){xr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ts?st:An}};xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=af;xn.DEFAULT_ANISOTROPY=1;Et=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],f=l[8],p=l[1],u=l[5],_=l[9],x=l[2],m=l[6],d=l[10];if(Math.abs(h-p)<.01&&Math.abs(f-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+p)<.1&&Math.abs(f+x)<.1&&Math.abs(_+m)<.1&&Math.abs(c+u+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,M=(u+1)/2,w=(d+1)/2,y=(h+p)/4,E=(f+x)/4,A=(_+m)/4;return v>M&&v>w?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=y/n,r=E/n):M>w?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=y/s,r=A/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=E/r,s=A/r),this.set(n,s,r,t),this}let g=Math.sqrt((m-_)*(m-_)+(f-x)*(f-x)+(p-h)*(p-h));return Math.abs(g)<.001&&(g=1),this.x=(m-_)/g,this.y=(f-x)/g,this.z=(p-h)/g,this.w=Math.acos((c+u+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Fl=class extends Di{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Et(0,0,e,t),this.scissorTest=!1,this.viewport=new Et(0,0,e,t);let s={width:e,height:t,depth:1};n.encoding!==void 0&&(xr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ts?st:An),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new xn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new zo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},$t=class extends Fl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Fo=class extends xn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Bl=class extends xn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Kn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3],p=r[o+0],u=r[o+1],_=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f;return}if(a===1){e[t+0]=p,e[t+1]=u,e[t+2]=_,e[t+3]=x;return}if(f!==x||l!==p||c!==u||h!==_){let m=1-a,d=l*p+c*u+h*_+f*x,g=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){let w=Math.sqrt(v),y=Math.atan2(w,d*g);m=Math.sin(m*y)/w,a=Math.sin(a*y)/w}let M=a*g;if(l=l*m+p*M,c=c*m+u*M,h=h*m+_*M,f=f*m+x*M,m===1-a){let w=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=w,c*=w,h*=w,f*=w}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[o],p=r[o+1],u=r[o+2],_=r[o+3];return e[t]=a*_+h*f+l*u-c*p,e[t+1]=l*_+h*p+c*f-a*u,e[t+2]=c*_+h*u+a*p-l*f,e[t+3]=h*_-a*f-l*p-c*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),f=a(r/2),p=l(n/2),u=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=p*h*f+c*u*_,this._y=c*u*f-p*h*_,this._z=c*h*_+p*u*f,this._w=c*h*f-p*u*_;break;case"YXZ":this._x=p*h*f+c*u*_,this._y=c*u*f-p*h*_,this._z=c*h*_-p*u*f,this._w=c*h*f+p*u*_;break;case"ZXY":this._x=p*h*f-c*u*_,this._y=c*u*f+p*h*_,this._z=c*h*_+p*u*f,this._w=c*h*f-p*u*_;break;case"ZYX":this._x=p*h*f-c*u*_,this._y=c*u*f+p*h*_,this._z=c*h*_-p*u*f,this._w=c*h*f+p*u*_;break;case"YZX":this._x=p*h*f+c*u*_,this._y=c*u*f+p*h*_,this._z=c*h*_-p*u*f,this._w=c*h*f-p*u*_;break;case"XZY":this._x=p*h*f-c*u*_,this._y=c*u*f-p*h*_,this._z=c*h*_+p*u*f,this._w=c*h*f+p*u*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],f=t[10],p=n+a+f;if(p>0){let u=.5/Math.sqrt(p+1);this._w=.25/u,this._x=(h-l)*u,this._y=(r-c)*u,this._z=(o-s)*u}else if(n>a&&n>f){let u=2*Math.sqrt(1+n-a-f);this._w=(h-l)/u,this._x=.25*u,this._y=(s+o)/u,this._z=(r+c)/u}else if(a>f){let u=2*Math.sqrt(1+a-n-f);this._w=(r-c)/u,this._x=(s+o)/u,this._y=.25*u,this._z=(l+h)/u}else{let u=2*Math.sqrt(1+f-n-a);this._w=(o-s)/u,this._x=(r+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let u=1-t;return this._w=u*o+t*this._w,this._x=u*n+t*this._x,this._y=u*s+t*this._y,this._z=u*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),f=Math.sin((1-t)*h)/c,p=Math.sin(t*h)/c;return this._w=o*f+this._w*p,this._x=n*f+this._x*p,this._y=s*f+this._y*p,this._z=r*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(iu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(iu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),f=2*(r*n-o*t);return this.x=t+l*c+o*f-a*h,this.y=n+l*h+a*c-r*f,this.z=s+l*f+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return il.copy(this).projectOnVector(e),this.sub(il)}reflect(e){return this.sub(il.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(qt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},il=new U,iu=new Kn,pi=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Un.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Un.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Un.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Un):Un.fromBufferAttribute(r,o),Un.applyMatrix4(e.matrixWorld),this.expandByPoint(Un);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Zr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Zr.copy(n.boundingBox)),Zr.applyMatrix4(e.matrixWorld),this.union(Zr)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Un),Un.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ar),Jr.subVectors(this.max,ar),ds.subVectors(e.a,ar),ps.subVectors(e.b,ar),ms.subVectors(e.c,ar),bi.subVectors(ps,ds),Ei.subVectors(ms,ps),Xi.subVectors(ds,ms);let t=[0,-bi.z,bi.y,0,-Ei.z,Ei.y,0,-Xi.z,Xi.y,bi.z,0,-bi.x,Ei.z,0,-Ei.x,Xi.z,0,-Xi.x,-bi.y,bi.x,0,-Ei.y,Ei.x,0,-Xi.y,Xi.x,0];return!sl(t,ds,ps,ms,Jr)||(t=[1,0,0,0,1,0,0,0,1],!sl(t,ds,ps,ms,Jr))?!1:($r.crossVectors(bi,Ei),t=[$r.x,$r.y,$r.z],sl(t,ds,ps,ms,Jr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Un).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Un).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},ii=[new U,new U,new U,new U,new U,new U,new U,new U],Un=new U,Zr=new pi,ds=new U,ps=new U,ms=new U,bi=new U,Ei=new U,Xi=new U,ar=new U,Jr=new U,$r=new U,qi=new U;Op=new pi,lr=new U,rl=new U,mi=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Op.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;lr.subVectors(e,this.center);let t=lr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(lr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(lr.copy(e.center).add(rl)),this.expandByPoint(lr.copy(e.center).sub(rl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},si=new U,ol=new U,Kr=new U,wi=new U,al=new U,Qr=new U,ll=new U,ks=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(si.copy(this.origin).addScaledVector(this.direction,t),si.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ol.copy(e).add(t).multiplyScalar(.5),Kr.copy(t).sub(e).normalize(),wi.copy(this.origin).sub(ol);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Kr),a=wi.dot(this.direction),l=-wi.dot(Kr),c=wi.lengthSq(),h=Math.abs(1-o*o),f,p,u,_;if(h>0)if(f=o*l-a,p=o*a-l,_=r*h,f>=0)if(p>=-_)if(p<=_){let x=1/h;f*=x,p*=x,u=f*(f+o*p+2*a)+p*(o*f+p+2*l)+c}else p=r,f=Math.max(0,-(o*p+a)),u=-f*f+p*(p+2*l)+c;else p=-r,f=Math.max(0,-(o*p+a)),u=-f*f+p*(p+2*l)+c;else p<=-_?(f=Math.max(0,-(-o*r+a)),p=f>0?-r:Math.min(Math.max(-r,-l),r),u=-f*f+p*(p+2*l)+c):p<=_?(f=0,p=Math.min(Math.max(-r,-l),r),u=p*(p+2*l)+c):(f=Math.max(0,-(o*r+a)),p=f>0?r:Math.min(Math.max(-r,-l),r),u=-f*f+p*(p+2*l)+c);else p=o>0?-r:r,f=Math.max(0,-(o*p+a)),u=-f*f+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(ol).addScaledVector(Kr,p),u}intersectSphere(e,t){si.subVectors(e.center,this.origin);let n=si.dot(this.direction),s=si.dot(si)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,p=this.origin;return c>=0?(n=(e.min.x-p.x)*c,s=(e.max.x-p.x)*c):(n=(e.max.x-p.x)*c,s=(e.min.x-p.x)*c),h>=0?(r=(e.min.y-p.y)*h,o=(e.max.y-p.y)*h):(r=(e.max.y-p.y)*h,o=(e.min.y-p.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-p.z)*f,l=(e.max.z-p.z)*f):(a=(e.max.z-p.z)*f,l=(e.min.z-p.z)*f),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,si)!==null}intersectTriangle(e,t,n,s,r){al.subVectors(t,e),Qr.subVectors(n,e),ll.crossVectors(al,Qr);let o=this.direction.dot(ll),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;wi.subVectors(this.origin,e);let l=a*this.direction.dot(Qr.crossVectors(wi,Qr));if(l<0)return null;let c=a*this.direction.dot(al.cross(wi));if(c<0||l+c>o)return null;let h=-a*wi.dot(ll);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},lt=class i{constructor(e,t,n,s,r,o,a,l,c,h,f,p,u,_,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,f,p,u,_,x,m)}set(e,t,n,s,r,o,a,l,c,h,f,p,u,_,x,m){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=h,d[10]=f,d[14]=p,d[3]=u,d[7]=_,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/gs.setFromMatrixColumn(e,0).length(),r=1/gs.setFromMatrixColumn(e,1).length(),o=1/gs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let p=o*h,u=o*f,_=a*h,x=a*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=u+_*c,t[5]=p-x*c,t[9]=-a*l,t[2]=x-p*c,t[6]=_+u*c,t[10]=o*l}else if(e.order==="YXZ"){let p=l*h,u=l*f,_=c*h,x=c*f;t[0]=p+x*a,t[4]=_*a-u,t[8]=o*c,t[1]=o*f,t[5]=o*h,t[9]=-a,t[2]=u*a-_,t[6]=x+p*a,t[10]=o*l}else if(e.order==="ZXY"){let p=l*h,u=l*f,_=c*h,x=c*f;t[0]=p-x*a,t[4]=-o*f,t[8]=_+u*a,t[1]=u+_*a,t[5]=o*h,t[9]=x-p*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let p=o*h,u=o*f,_=a*h,x=a*f;t[0]=l*h,t[4]=_*c-u,t[8]=p*c+x,t[1]=l*f,t[5]=x*c+p,t[9]=u*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let p=o*l,u=o*c,_=a*l,x=a*c;t[0]=l*h,t[4]=x-p*f,t[8]=_*f+u,t[1]=f,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=u*f+_,t[10]=p-x*f}else if(e.order==="XZY"){let p=o*l,u=o*c,_=a*l,x=a*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=p*f+x,t[5]=o*h,t[9]=u*f-_,t[2]=_*f-u,t[6]=a*h,t[10]=x*f+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Hp,e,kp)}lookAt(e,t,n){let s=this.elements;return pn.subVectors(e,t),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),Si.crossVectors(n,pn),Si.lengthSq()===0&&(Math.abs(n.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),Si.crossVectors(n,pn)),Si.normalize(),jr.crossVectors(pn,Si),s[0]=Si.x,s[4]=jr.x,s[8]=pn.x,s[1]=Si.y,s[5]=jr.y,s[9]=pn.y,s[2]=Si.z,s[6]=jr.z,s[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],f=n[5],p=n[9],u=n[13],_=n[2],x=n[6],m=n[10],d=n[14],g=n[3],v=n[7],M=n[11],w=n[15],y=s[0],E=s[4],A=s[8],b=s[12],S=s[1],z=s[5],F=s[9],q=s[13],D=s[2],O=s[6],k=s[10],B=s[14],Y=s[3],W=s[7],K=s[11],ee=s[15];return r[0]=o*y+a*S+l*D+c*Y,r[4]=o*E+a*z+l*O+c*W,r[8]=o*A+a*F+l*k+c*K,r[12]=o*b+a*q+l*B+c*ee,r[1]=h*y+f*S+p*D+u*Y,r[5]=h*E+f*z+p*O+u*W,r[9]=h*A+f*F+p*k+u*K,r[13]=h*b+f*q+p*B+u*ee,r[2]=_*y+x*S+m*D+d*Y,r[6]=_*E+x*z+m*O+d*W,r[10]=_*A+x*F+m*k+d*K,r[14]=_*b+x*q+m*B+d*ee,r[3]=g*y+v*S+M*D+w*Y,r[7]=g*E+v*z+M*O+w*W,r[11]=g*A+v*F+M*k+w*K,r[15]=g*b+v*q+M*B+w*ee,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],f=e[6],p=e[10],u=e[14],_=e[3],x=e[7],m=e[11],d=e[15];return _*(+r*l*f-s*c*f-r*a*p+n*c*p+s*a*u-n*l*u)+x*(+t*l*u-t*c*p+r*o*p-s*o*u+s*c*h-r*l*h)+m*(+t*c*f-t*a*u-r*o*f+n*o*u+r*a*h-n*c*h)+d*(-s*a*h-t*l*f+t*a*p+s*o*f-n*o*p+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=e[9],p=e[10],u=e[11],_=e[12],x=e[13],m=e[14],d=e[15],g=f*m*c-x*p*c+x*l*u-a*m*u-f*l*d+a*p*d,v=_*p*c-h*m*c-_*l*u+o*m*u+h*l*d-o*p*d,M=h*x*c-_*f*c+_*a*u-o*x*u-h*a*d+o*f*d,w=_*f*l-h*x*l-_*a*p+o*x*p+h*a*m-o*f*m,y=t*g+n*v+s*M+r*w;if(y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/y;return e[0]=g*E,e[1]=(x*p*r-f*m*r-x*s*u+n*m*u+f*s*d-n*p*d)*E,e[2]=(a*m*r-x*l*r+x*s*c-n*m*c-a*s*d+n*l*d)*E,e[3]=(f*l*r-a*p*r-f*s*c+n*p*c+a*s*u-n*l*u)*E,e[4]=v*E,e[5]=(h*m*r-_*p*r+_*s*u-t*m*u-h*s*d+t*p*d)*E,e[6]=(_*l*r-o*m*r-_*s*c+t*m*c+o*s*d-t*l*d)*E,e[7]=(o*p*r-h*l*r+h*s*c-t*p*c-o*s*u+t*l*u)*E,e[8]=M*E,e[9]=(_*f*r-h*x*r-_*n*u+t*x*u+h*n*d-t*f*d)*E,e[10]=(o*x*r-_*a*r+_*n*c-t*x*c-o*n*d+t*a*d)*E,e[11]=(h*a*r-o*f*r-h*n*c+t*f*c+o*n*u-t*a*u)*E,e[12]=w*E,e[13]=(h*x*s-_*f*s+_*n*p-t*x*p-h*n*m+t*f*m)*E,e[14]=(_*a*s-o*x*s-_*n*l+t*x*l+o*n*m-t*a*m)*E,e[15]=(o*f*s-h*a*s+h*n*l-t*f*l-o*n*p+t*a*p)*E,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,f=a+a,p=r*c,u=r*h,_=r*f,x=o*h,m=o*f,d=a*f,g=l*c,v=l*h,M=l*f,w=n.x,y=n.y,E=n.z;return s[0]=(1-(x+d))*w,s[1]=(u+M)*w,s[2]=(_-v)*w,s[3]=0,s[4]=(u-M)*y,s[5]=(1-(p+d))*y,s[6]=(m+g)*y,s[7]=0,s[8]=(_+v)*E,s[9]=(m-g)*E,s[10]=(1-(p+x))*E,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=gs.set(s[0],s[1],s[2]).length(),o=gs.set(s[4],s[5],s[6]).length(),a=gs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Nn.copy(this);let c=1/r,h=1/o,f=1/a;return Nn.elements[0]*=c,Nn.elements[1]*=c,Nn.elements[2]*=c,Nn.elements[4]*=h,Nn.elements[5]*=h,Nn.elements[6]*=h,Nn.elements[8]*=f,Nn.elements[9]*=f,Nn.elements[10]*=f,t.setFromRotationMatrix(Nn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=ui){let l=this.elements,c=2*r/(t-e),h=2*r/(n-s),f=(t+e)/(t-e),p=(n+s)/(n-s),u,_;if(a===ui)u=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Do)u=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=u,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=ui){let l=this.elements,c=1/(t-e),h=1/(n-s),f=1/(o-r),p=(t+e)*c,u=(n+s)*h,_,x;if(a===ui)_=(o+r)*f,x=-2*f;else if(a===Do)_=r*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-u,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},gs=new U,Nn=new lt,Hp=new U(0,0,0),kp=new U(1,1,1),Si=new U,jr=new U,pn=new U,su=new lt,ru=new Kn,Gs=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],f=s[2],p=s[6],u=s[10];switch(t){case"XYZ":this._y=Math.asin(qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(qt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,u),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-qt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return su.makeRotationFromQuaternion(e),this.setFromRotationMatrix(su,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ru.setFromEuler(this),this.setFromQuaternion(ru,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Gs.DEFAULT_ORDER="XYZ";Er=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Gp=0,ou=new U,xs=new Kn,ri=new lt,eo=new U,cr=new U,Vp=new U,Wp=new Kn,au=new U(1,0,0),lu=new U(0,1,0),cu=new U(0,0,1),Xp={type:"added"},qp={type:"removed"},Pt=class i extends Di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gp++}),this.uuid=fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new U,t=new Gs,n=new Kn,s=new U(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new lt},normalMatrix:{value:new it}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Er,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xs.setFromAxisAngle(e,t),this.quaternion.multiply(xs),this}rotateOnWorldAxis(e,t){return xs.setFromAxisAngle(e,t),this.quaternion.premultiply(xs),this}rotateX(e){return this.rotateOnAxis(au,e)}rotateY(e){return this.rotateOnAxis(lu,e)}rotateZ(e){return this.rotateOnAxis(cu,e)}translateOnAxis(e,t){return ou.copy(e).applyQuaternion(this.quaternion),this.position.add(ou.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(au,e)}translateY(e){return this.translateOnAxis(lu,e)}translateZ(e){return this.translateOnAxis(cu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ri.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?eo.copy(e):eo.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),cr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ri.lookAt(cr,eo,this.up):ri.lookAt(eo,cr,this.up),this.quaternion.setFromRotationMatrix(ri),s&&(ri.extractRotation(s.matrixWorld),xs.setFromRotationMatrix(ri),this.quaternion.premultiply(xs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Xp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(qp)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(ri),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cr,e,Vp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cr,Wp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),f=o(e.shapes),p=o(e.skeletons),u=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),p.length>0&&(n.skeletons=p),u.length>0&&(n.animations=u),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Pt.DEFAULT_UP=new U(0,1,0);Pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;zn=new U,oi=new U,cl=new U,ai=new U,_s=new U,vs=new U,hu=new U,hl=new U,ul=new U,fl=new U,to=!1,Qi=class i{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),zn.subVectors(e,t),s.cross(zn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){zn.subVectors(s,t),oi.subVectors(n,t),cl.subVectors(e,t);let o=zn.dot(zn),a=zn.dot(oi),l=zn.dot(cl),c=oi.dot(oi),h=oi.dot(cl),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;let p=1/f,u=(c*l-a*h)*p,_=(o*h-a*l)*p;return r.set(1-u-_,_,u)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ai)===null?!1:ai.x>=0&&ai.y>=0&&ai.x+ai.y<=1}static getUV(e,t,n,s,r,o,a,l){return to===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),to=!0),this.getInterpolation(e,t,n,s,r,o,a,l)}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,ai)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ai.x),l.addScaledVector(o,ai.y),l.addScaledVector(a,ai.z),l)}static isFrontFacing(e,t,n,s){return zn.subVectors(n,t),oi.subVectors(e,t),zn.cross(oi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zn.subVectors(this.c,this.b),oi.subVectors(this.a,this.b),zn.cross(oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return to===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),to=!0),i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;_s.subVectors(s,n),vs.subVectors(r,n),hl.subVectors(e,n);let l=_s.dot(hl),c=vs.dot(hl);if(l<=0&&c<=0)return t.copy(n);ul.subVectors(e,s);let h=_s.dot(ul),f=vs.dot(ul);if(h>=0&&f<=h)return t.copy(s);let p=l*f-h*c;if(p<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(_s,o);fl.subVectors(e,r);let u=_s.dot(fl),_=vs.dot(fl);if(_>=0&&u<=_)return t.copy(r);let x=u*c-l*_;if(x<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(vs,a);let m=h*_-u*f;if(m<=0&&f-h>=0&&u-_>=0)return hu.subVectors(r,s),a=(f-h)/(f-h+(u-_)),t.copy(s).addScaledVector(hu,a);let d=1/(m+x+p);return o=x*d,a=p*d,t.copy(n).addScaledVector(_s,o).addScaledVector(vs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Mf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ti={h:0,s:0,l:0},no={h:0,s:0,l:0};Re=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=st){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=at.workingColorSpace){return this.r=e,this.g=t,this.b=n,at.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=at.workingColorSpace){if(e=Up(e,1),t=qt(t,0,1),n=qt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=dl(o,r,e+1/3),this.g=dl(o,r,e),this.b=dl(o,r,e-1/3)}return at.toWorkingColorSpace(this,s),this}setStyle(e,t=st){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=st){let n=Mf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zs(e.r),this.g=zs(e.g),this.b=zs(e.b),this}copyLinearToSRGB(e){return this.r=tl(e.r),this.g=tl(e.g),this.b=tl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=st){return at.fromWorkingColorSpace(en.copy(this),e),Math.round(qt(en.r*255,0,255))*65536+Math.round(qt(en.g*255,0,255))*256+Math.round(qt(en.b*255,0,255))}getHexString(e=st){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.fromWorkingColorSpace(en.copy(this),t);let n=en.r,s=en.g,r=en.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=at.workingColorSpace){return at.fromWorkingColorSpace(en.copy(this),t),e.r=en.r,e.g=en.g,e.b=en.b,e}getStyle(e=st){at.fromWorkingColorSpace(en.copy(this),e);let t=en.r,n=en.g,s=en.b;return e!==st?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ti),this.setHSL(Ti.h+e,Ti.s+t,Ti.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ti),e.getHSL(no);let n=ja(Ti.h,no.h,t),s=ja(Ti.s,no.s,t),r=ja(Ti.l,no.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},en=new Re;Re.NAMES=Mf;Yp=0,Qn=class extends Di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yp++}),this.uuid=fi(),this.name="",this.type="Material",this.blending=Ns,this.side=Li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cl,this.blendDst=Pl,this.blendEquation=$i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=Ao,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=us,this.stencilZFail=us,this.stencilZPass=us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ns&&(n.blending=this.blending),this.side!==Li&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Cl&&(n.blendSrc=this.blendSrc),this.blendDst!==Pl&&(n.blendDst=this.blendDst),this.blendEquation!==$i&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ao&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Kh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==us&&(n.stencilFail=this.stencilFail),this.stencilZFail!==us&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==us&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},ut=class extends Qn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=of,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Nt=new U,io=new xe,tt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ul,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ri,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)io.fromBufferAttribute(this,t),io.applyMatrix3(e),this.setXY(t,io.x,io.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix3(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=hi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=dt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=hi(t,this.array)),t}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=hi(t,this.array)),t}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=hi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=hi(t,this.array)),t}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),s=dt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),s=dt(s,this.array),r=dt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ul&&(e.usage=this.usage),e}},Bo=class extends tt{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Oo=class extends tt{constructor(e,t,n){super(new Uint32Array(e),t,n)}},ze=class extends tt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Zp=0,Sn=new lt,pl=new Pt,ys=new U,mn=new pi,hr=new pi,Xt=new U,Xe=class i extends Di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zp++}),this.uuid=fi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yf(e)?Oo:Bo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new it().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,t,n){return Sn.makeTranslation(e,t,n),this.applyMatrix4(Sn),this}scale(e,t,n){return Sn.makeScale(e,t,n),this.applyMatrix4(Sn),this}lookAt(e){return pl.lookAt(e),pl.updateMatrix(),this.applyMatrix4(pl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ys).negate(),this.translate(ys.x,ys.y,ys.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ze(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];mn.setFromBufferAttribute(r),this.morphTargetsRelative?(Xt.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(Xt),Xt.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(Xt)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(e){let n=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];hr.setFromBufferAttribute(a),this.morphTargetsRelative?(Xt.addVectors(mn.min,hr.min),mn.expandByPoint(Xt),Xt.addVectors(mn.max,hr.max),mn.expandByPoint(Xt)):(mn.expandByPoint(hr.min),mn.expandByPoint(hr.max))}mn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Xt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Xt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Xt.fromBufferAttribute(a,c),l&&(ys.fromBufferAttribute(e,c),Xt.add(ys)),s=Math.max(s,n.distanceToSquared(Xt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new tt(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let S=0;S<a;S++)c[S]=new U,h[S]=new U;let f=new U,p=new U,u=new U,_=new xe,x=new xe,m=new xe,d=new U,g=new U;function v(S,z,F){f.fromArray(s,S*3),p.fromArray(s,z*3),u.fromArray(s,F*3),_.fromArray(o,S*2),x.fromArray(o,z*2),m.fromArray(o,F*2),p.sub(f),u.sub(f),x.sub(_),m.sub(_);let q=1/(x.x*m.y-m.x*x.y);isFinite(q)&&(d.copy(p).multiplyScalar(m.y).addScaledVector(u,-x.y).multiplyScalar(q),g.copy(u).multiplyScalar(x.x).addScaledVector(p,-m.x).multiplyScalar(q),c[S].add(d),c[z].add(d),c[F].add(d),h[S].add(g),h[z].add(g),h[F].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let S=0,z=M.length;S<z;++S){let F=M[S],q=F.start,D=F.count;for(let O=q,k=q+D;O<k;O+=3)v(n[O+0],n[O+1],n[O+2])}let w=new U,y=new U,E=new U,A=new U;function b(S){E.fromArray(r,S*3),A.copy(E);let z=c[S];w.copy(z),w.sub(E.multiplyScalar(E.dot(z))).normalize(),y.crossVectors(A,z);let q=y.dot(h[S])<0?-1:1;l[S*4]=w.x,l[S*4+1]=w.y,l[S*4+2]=w.z,l[S*4+3]=q}for(let S=0,z=M.length;S<z;++S){let F=M[S],q=F.start,D=F.count;for(let O=q,k=q+D;O<k;O+=3)b(n[O+0]),b(n[O+1]),b(n[O+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new tt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,u=n.count;p<u;p++)n.setXYZ(p,0,0,0);let s=new U,r=new U,o=new U,a=new U,l=new U,c=new U,h=new U,f=new U;if(e)for(let p=0,u=e.count;p<u;p+=3){let _=e.getX(p+0),x=e.getX(p+1),m=e.getX(p+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let p=0,u=t.count;p<u;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Xt.fromBufferAttribute(e,t),Xt.normalize(),e.setXYZ(t,Xt.x,Xt.y,Xt.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,f=a.normalized,p=new c.constructor(l.length*h),u=0,_=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?u=l[x]*a.data.stride+a.offset:u=l[x]*h;for(let d=0;d<h;d++)p[_++]=c[u++]}return new tt(p,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,f=c.length;h<f;h++){let p=c[h],u=e(p,n);l.push(u)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,p=c.length;f<p;f++){let u=c[f];h.push(u.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],f=r[c];for(let p=0,u=f.length;p<u;p++)h.push(f[p].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},uu=new lt,Yi=new ks,so=new mi,fu=new U,Ms=new U,bs=new U,Es=new U,ml=new U,ro=new U,oo=new xe,ao=new xe,lo=new xe,du=new U,pu=new U,mu=new U,co=new U,ho=new U,ce=class extends Pt{constructor(e=new Xe,t=new ut){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){ro.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],f=r[l];h!==0&&(ml.fromBufferAttribute(f,e),o?ro.addScaledVector(ml,h):ro.addScaledVector(ml.sub(t),h))}t.add(ro)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),so.copy(n.boundingSphere),so.applyMatrix4(r),Yi.copy(e.ray).recast(e.near),!(so.containsPoint(Yi.origin)===!1&&(Yi.intersectSphere(so,fu)===null||Yi.origin.distanceToSquared(fu)>(e.far-e.near)**2))&&(uu.copy(r).invert(),Yi.copy(e.ray).applyMatrix4(uu),!(n.boundingBox!==null&&Yi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Yi)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,p=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,x=p.length;_<x;_++){let m=p[_],d=o[m.materialIndex],g=Math.max(m.start,u.start),v=Math.min(a.count,Math.min(m.start+m.count,u.start+u.count));for(let M=g,w=v;M<w;M+=3){let y=a.getX(M),E=a.getX(M+1),A=a.getX(M+2);s=uo(this,d,e,n,c,h,f,y,E,A),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let _=Math.max(0,u.start),x=Math.min(a.count,u.start+u.count);for(let m=_,d=x;m<d;m+=3){let g=a.getX(m),v=a.getX(m+1),M=a.getX(m+2);s=uo(this,o,e,n,c,h,f,g,v,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,x=p.length;_<x;_++){let m=p[_],d=o[m.materialIndex],g=Math.max(m.start,u.start),v=Math.min(l.count,Math.min(m.start+m.count,u.start+u.count));for(let M=g,w=v;M<w;M+=3){let y=M,E=M+1,A=M+2;s=uo(this,d,e,n,c,h,f,y,E,A),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let _=Math.max(0,u.start),x=Math.min(l.count,u.start+u.count);for(let m=_,d=x;m<d;m+=3){let g=m,v=m+1,M=m+2;s=uo(this,o,e,n,c,h,f,g,v,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};Oe=class i extends Xe{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],f=[],p=0,u=0;_("z","y","x",-1,-1,n,t,e,o,r,0),_("z","y","x",1,-1,n,t,-e,o,r,1),_("x","z","y",1,1,e,n,t,s,o,2),_("x","z","y",1,-1,e,n,-t,s,o,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ze(c,3)),this.setAttribute("normal",new ze(h,3)),this.setAttribute("uv",new ze(f,2));function _(x,m,d,g,v,M,w,y,E,A,b){let S=M/E,z=w/A,F=M/2,q=w/2,D=y/2,O=E+1,k=A+1,B=0,Y=0,W=new U;for(let K=0;K<k;K++){let ee=K*z-q;for(let me=0;me<O;me++){let $=me*S-F;W[x]=$*g,W[m]=ee*v,W[d]=D,c.push(W.x,W.y,W.z),W[x]=0,W[m]=0,W[d]=y>0?1:-1,h.push(W.x,W.y,W.z),f.push(me/E),f.push(1-K/A),B+=1}}for(let K=0;K<A;K++)for(let ee=0;ee<E;ee++){let me=p+ee+O*K,$=p+ee+O*(K+1),se=p+(ee+1)+O*(K+1),Me=p+(ee+1)+O*K;l.push(me,$,Me),l.push($,se,Me),Y+=6}a.addGroup(u,Y,b),u+=Y,p+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};jn={clone:Vs,merge:on},Kp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,It=class extends Qn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kp,this.fragmentShader=Qp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vs(e.uniforms),this.uniformsGroups=$p(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Ho=class extends Pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=ui}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Jt=class extends Ho{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Uo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Qa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Uo*2*Math.atan(Math.tan(Qa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Qa*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ws=-90,Ss=1,Ol=class extends Pt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Jt(ws,Ss,e,t);s.layers=this.layers,this.add(s);let r=new Jt(ws,Ss,e,t);r.layers=this.layers,this.add(r);let o=new Jt(ws,Ss,e,t);o.layers=this.layers,this.add(o);let a=new Jt(ws,Ss,e,t);a.layers=this.layers,this.add(a);let l=new Jt(ws,Ss,e,t);l.layers=this.layers,this.add(l);let c=new Jt(ws,Ss,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===ui)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Do)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,f=e.getRenderTarget(),p=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(f,p,u),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},ko=class extends xn{constructor(e,t,n,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Bs,super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Hl=class extends $t{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(xr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ts?st:An),this.texture=new ko(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Tn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Oe(5,5,5),r=new It({name:"CubemapFromEquirect",uniforms:Vs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:zt,blending:$n});r.uniforms.tEquirect.value=t;let o=new ce(s,r),a=t.minFilter;return t.minFilter===Mr&&(t.minFilter=Tn),new Ol(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},gl=new U,jp=new U,em=new it,ci=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=gl.subVectors(n,t).cross(jp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(gl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||em.getNormalMatrix(e),s=this.coplanarPoint(gl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Zi=new mi,fo=new U,wr=class{constructor(e=new ci,t=new ci,n=new ci,s=new ci,r=new ci,o=new ci){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ui){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],f=s[6],p=s[7],u=s[8],_=s[9],x=s[10],m=s[11],d=s[12],g=s[13],v=s[14],M=s[15];if(n[0].setComponents(l-r,p-c,m-u,M-d).normalize(),n[1].setComponents(l+r,p+c,m+u,M+d).normalize(),n[2].setComponents(l+o,p+h,m+_,M+g).normalize(),n[3].setComponents(l-o,p-h,m-_,M-g).normalize(),n[4].setComponents(l-a,p-f,m-x,M-v).normalize(),t===ui)n[5].setComponents(l+a,p+f,m+x,M+v).normalize();else if(t===Do)n[5].setComponents(a,f,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Zi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zi)}intersectsSprite(e){return Zi.center.set(0,0,0),Zi.radius=.7071067811865476,Zi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(fo.x=s.normal.x>0?e.max.x:e.min.x,fo.y=s.normal.y>0?e.max.y:e.min.y,fo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(fo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};wt=class i extends Xe{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,f=e/a,p=t/l,u=[],_=[],x=[],m=[];for(let d=0;d<h;d++){let g=d*p-o;for(let v=0;v<c;v++){let M=v*f-r;_.push(M,-g,0),x.push(0,0,1),m.push(v/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let g=0;g<a;g++){let v=g+c*d,M=g+c*(d+1),w=g+1+c*(d+1),y=g+1+c*d;u.push(v,M,y),u.push(M,w,y)}this.setIndex(u),this.setAttribute("position",new ze(_,3)),this.setAttribute("normal",new ze(x,3)),this.setAttribute("uv",new ze(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},nm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,im=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,sm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,om=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,am=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,cm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hm=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,um=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,fm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,mm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,gm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,xm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,_m=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ym=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Mm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Em=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,wm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Sm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Tm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Am=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Rm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Pm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Im=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Dm=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Um=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Nm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Fm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Om=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,km=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Wm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Xm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ym=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Jm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,$m=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Km=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,e0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,t0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,n0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,i0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,s0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,r0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,o0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,a0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,l0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,c0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,h0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,u0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,f0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,d0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,p0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,m0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,g0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,x0=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,_0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,v0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,y0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,M0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,b0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,E0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,w0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,S0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,T0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,A0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,R0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,C0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,P0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,I0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,L0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,D0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,U0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,N0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,z0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,F0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,B0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,O0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,H0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,k0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,G0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,V0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,W0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,X0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,q0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Y0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Z0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,J0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,$0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,K0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Q0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,j0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,eg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,tg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ng=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ig=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,og=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ag=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,lg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,cg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,hg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ug=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,pg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,gg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_g=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,yg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,bg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Eg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Tg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ag=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Pg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ig=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Dg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ug=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qe={alphahash_fragment:nm,alphahash_pars_fragment:im,alphamap_fragment:sm,alphamap_pars_fragment:rm,alphatest_fragment:om,alphatest_pars_fragment:am,aomap_fragment:lm,aomap_pars_fragment:cm,batching_pars_vertex:hm,batching_vertex:um,begin_vertex:fm,beginnormal_vertex:dm,bsdfs:pm,iridescence_fragment:mm,bumpmap_pars_fragment:gm,clipping_planes_fragment:xm,clipping_planes_pars_fragment:_m,clipping_planes_pars_vertex:vm,clipping_planes_vertex:ym,color_fragment:Mm,color_pars_fragment:bm,color_pars_vertex:Em,color_vertex:wm,common:Sm,cube_uv_reflection_fragment:Tm,defaultnormal_vertex:Am,displacementmap_pars_vertex:Rm,displacementmap_vertex:Cm,emissivemap_fragment:Pm,emissivemap_pars_fragment:Im,colorspace_fragment:Lm,colorspace_pars_fragment:Dm,envmap_fragment:Um,envmap_common_pars_fragment:Nm,envmap_pars_fragment:zm,envmap_pars_vertex:Fm,envmap_physical_pars_fragment:Jm,envmap_vertex:Bm,fog_vertex:Om,fog_pars_vertex:Hm,fog_fragment:km,fog_pars_fragment:Gm,gradientmap_pars_fragment:Vm,lightmap_fragment:Wm,lightmap_pars_fragment:Xm,lights_lambert_fragment:qm,lights_lambert_pars_fragment:Ym,lights_pars_begin:Zm,lights_toon_fragment:$m,lights_toon_pars_fragment:Km,lights_phong_fragment:Qm,lights_phong_pars_fragment:jm,lights_physical_fragment:e0,lights_physical_pars_fragment:t0,lights_fragment_begin:n0,lights_fragment_maps:i0,lights_fragment_end:s0,logdepthbuf_fragment:r0,logdepthbuf_pars_fragment:o0,logdepthbuf_pars_vertex:a0,logdepthbuf_vertex:l0,map_fragment:c0,map_pars_fragment:h0,map_particle_fragment:u0,map_particle_pars_fragment:f0,metalnessmap_fragment:d0,metalnessmap_pars_fragment:p0,morphcolor_vertex:m0,morphnormal_vertex:g0,morphtarget_pars_vertex:x0,morphtarget_vertex:_0,normal_fragment_begin:v0,normal_fragment_maps:y0,normal_pars_fragment:M0,normal_pars_vertex:b0,normal_vertex:E0,normalmap_pars_fragment:w0,clearcoat_normal_fragment_begin:S0,clearcoat_normal_fragment_maps:T0,clearcoat_pars_fragment:A0,iridescence_pars_fragment:R0,opaque_fragment:C0,packing:P0,premultiplied_alpha_fragment:I0,project_vertex:L0,dithering_fragment:D0,dithering_pars_fragment:U0,roughnessmap_fragment:N0,roughnessmap_pars_fragment:z0,shadowmap_pars_fragment:F0,shadowmap_pars_vertex:B0,shadowmap_vertex:O0,shadowmask_pars_fragment:H0,skinbase_vertex:k0,skinning_pars_vertex:G0,skinning_vertex:V0,skinnormal_vertex:W0,specularmap_fragment:X0,specularmap_pars_fragment:q0,tonemapping_fragment:Y0,tonemapping_pars_fragment:Z0,transmission_fragment:J0,transmission_pars_fragment:$0,uv_pars_fragment:K0,uv_pars_vertex:Q0,uv_vertex:j0,worldpos_vertex:eg,background_vert:tg,background_frag:ng,backgroundCube_vert:ig,backgroundCube_frag:sg,cube_vert:rg,cube_frag:og,depth_vert:ag,depth_frag:lg,distanceRGBA_vert:cg,distanceRGBA_frag:hg,equirect_vert:ug,equirect_frag:fg,linedashed_vert:dg,linedashed_frag:pg,meshbasic_vert:mg,meshbasic_frag:gg,meshlambert_vert:xg,meshlambert_frag:_g,meshmatcap_vert:vg,meshmatcap_frag:yg,meshnormal_vert:Mg,meshnormal_frag:bg,meshphong_vert:Eg,meshphong_frag:wg,meshphysical_vert:Sg,meshphysical_frag:Tg,meshtoon_vert:Ag,meshtoon_frag:Rg,points_vert:Cg,points_frag:Pg,shadow_vert:Ig,shadow_frag:Lg,sprite_vert:Dg,sprite_frag:Ug},De={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}}},Jn={basic:{uniforms:on([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:on([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Re(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:on([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:on([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:on([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new Re(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:on([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:on([De.points,De.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:on([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:on([De.common,De.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:on([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:on([De.sprite,De.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:on([De.common,De.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:on([De.lights,De.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};Jn.physical={uniforms:on([Jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it},anisotropyVector:{value:new xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new it}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};po={r:0,b:0,g:0};Ws=class extends Ho{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ls=4,gu=[.125,.215,.35,.446,.526,.582],Ki=20,xl=new Ws,xu=new Re,_l=null,vl=0,yl=0,Ji=(1+Math.sqrt(5))/2,Ts=1/Ji,_u=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,Ji,Ts),new U(0,Ji,-Ts),new U(Ts,0,Ji),new U(-Ts,0,Ji),new U(Ji,Ts,0),new U(-Ji,Ts,0)],Ui=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){_l=this._renderer.getRenderTarget(),vl=this._renderer.getActiveCubeFace(),yl=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_l,vl,yl),e.scissorTest=!1,mo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Bs||e.mapping===Os?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_l=this._renderer.getRenderTarget(),vl=this._renderer.getActiveCubeFace(),yl=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Tn,minFilter:Tn,generateMipmaps:!1,type:gn,format:Fn,colorSpace:di,depthBuffer:!1},s=vu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vu(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=kg(r)),this._blurMaterial=Gg(r,e,t)}return s}_compileMaterial(e){let t=new ce(this._lodPlanes[0],e);this._renderer.compile(t,xl)}_sceneToCubeUV(e,t,n,s){let a=new Jt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(xu),h.toneMapping=Ci,h.autoClear=!1;let u=new ut({name:"PMREM.Background",side:zt,depthWrite:!1,depthTest:!1}),_=new ce(new Oe,u),x=!1,m=e.background;m?m.isColor&&(u.color.copy(m),e.background=null,x=!0):(u.color.copy(xu),x=!0);for(let d=0;d<6;d++){let g=d%3;g===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):g===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));let v=this._cubeSize;mo(s,g*v,d>2?v:0,v,v),h.setRenderTarget(s),x&&h.render(_,a),h.render(e,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=p,h.autoClear=f,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Bs||e.mapping===Os;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new ce(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;mo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,xl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=_u[(s-1)%_u.length];this._blur(e,s-1,s,r,o)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,f=new ce(this._lodPlanes[s],c),p=c.uniforms,u=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*u):2*Math.PI/(2*Ki-1),x=r/_,m=isFinite(r)?1+Math.floor(h*x):Ki;m>Ki&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ki}`);let d=[],g=0;for(let E=0;E<Ki;++E){let A=E/x,b=Math.exp(-A*A/2);d.push(b),E===0?g+=b:E<m&&(g+=2*b)}for(let E=0;E<d.length;E++)d[E]=d[E]/g;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=d,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);let{_lodMax:v}=this;p.dTheta.value=_,p.mipInt.value=v-n;let M=this._sizeLods[s],w=3*M*(s>v-Ls?s-v+Ls:0),y=4*(this._cubeSize-M);mo(t,w,y,3*M,2*M),l.setRenderTarget(t),l.render(f,xl)}};Go=class extends xn{constructor(e,t,n,s,r,o,a,l,c,h){if(h=h!==void 0?h:es,h!==es&&h!==Hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===es&&(n=Ai),n===void 0&&h===Hs&&(n=ji),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:an,this.minFilter=l!==void 0?l:an,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},wf=new xn,Sf=new Go(1,1);Sf.compareFunction=vf;Tf=new Fo,Af=new Bl,Rf=new ko,bu=[],Eu=[],wu=new Float32Array(16),Su=new Float32Array(9),Tu=new Float32Array(4);kl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=xx(t.type)}},Gl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Fx(t.type)}},Vl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Ml=/(\w+)(\])?(\[|\.)?/g;Fs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Bx(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};Ox=37297,Hx=0;Jx=/^[ \t]*#include +<([\w\d./]+)>/gm;$x=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);Qx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;o_=0,Xl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new ql(e),t.set(e,n)),n}},ql=class{constructor(e){this.id=o_++,this.code=e,this.usedTimes=0}};d_=0;Yl=class extends Qn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Zl=class extends Qn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},x_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,__=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;Jl=class extends Jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Ct=class extends Pt{constructor(){super(),this.isGroup=!0,this.type="Group"}},E_={type:"move"},_r=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ct,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ct,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ct,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),d=this._getHandJoint(c,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],p=h.position.distanceTo(f.position),u=.02,_=.005;c.inputState.pinching&&p>u+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=u-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(E_)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ct;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},$l=class extends Di{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,p=null,u=null,_=null,x=t.getContextAttributes(),m=null,d=null,g=[],v=[],M=new xe,w=null,y=new Jt;y.layers.enable(1),y.viewport=new Et;let E=new Jt;E.layers.enable(2),E.viewport=new Et;let A=[y,E],b=new Jl;b.layers.enable(1),b.layers.enable(2);let S=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let se=g[$];return se===void 0&&(se=new _r,g[$]=se),se.getTargetRaySpace()},this.getControllerGrip=function($){let se=g[$];return se===void 0&&(se=new _r,g[$]=se),se.getGripSpace()},this.getHand=function($){let se=g[$];return se===void 0&&(se=new _r,g[$]=se),se.getHandSpace()};function F($){let se=v.indexOf($.inputSource);if(se===-1)return;let Me=g[se];Me!==void 0&&(Me.update($.inputSource,$.frame,c||o),Me.dispatchEvent({type:$.type,data:$.inputSource}))}function q(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",D);for(let $=0;$<g.length;$++){let se=v[$];se!==null&&(v[$]=null,g[$].disconnect(se))}S=null,z=null,e.setRenderTarget(m),u=null,p=null,f=null,s=null,d=null,me.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(M.width,M.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return p!==null?p:u},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",q),s.addEventListener("inputsourceschange",D),x.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(M),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let se={antialias:s.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,t,se),s.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),d=new $t(u.framebufferWidth,u.framebufferHeight,{format:Fn,type:Pi,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let se=null,Me=null,Se=null;x.depth&&(Se=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=x.stencil?Hs:es,Me=x.stencil?ji:Ai);let Q={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:r};f=new XRWebGLBinding(s,t),p=f.createProjectionLayer(Q),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),d=new $t(p.textureWidth,p.textureHeight,{format:Fn,type:Pi,depthTexture:new Go(p.textureWidth,p.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});let we=e.properties.get(d);we.__ignoreDepthValues=p.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),me.setContext(s),me.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function D($){for(let se=0;se<$.removed.length;se++){let Me=$.removed[se],Se=v.indexOf(Me);Se>=0&&(v[Se]=null,g[Se].disconnect(Me))}for(let se=0;se<$.added.length;se++){let Me=$.added[se],Se=v.indexOf(Me);if(Se===-1){for(let we=0;we<g.length;we++)if(we>=v.length){v.push(Me),Se=we;break}else if(v[we]===null){v[we]=Me,Se=we;break}if(Se===-1)break}let Q=g[Se];Q&&Q.connect(Me)}}let O=new U,k=new U;function B($,se,Me){O.setFromMatrixPosition(se.matrixWorld),k.setFromMatrixPosition(Me.matrixWorld);let Se=O.distanceTo(k),Q=se.projectionMatrix.elements,we=Me.projectionMatrix.elements,Ie=Q[14]/(Q[10]-1),G=Q[14]/(Q[10]+1),re=(Q[9]+1)/Q[5],P=(Q[9]-1)/Q[5],te=(Q[8]-1)/Q[0],J=(we[8]+1)/we[0],ue=Ie*te,ne=Ie*J,Ee=Se/(-te+J),pe=Ee*-te;se.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(pe),$.translateZ(Ee),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert();let R=Ie+Ee,T=G+Ee,Z=ue-pe,ve=ne+(Se-pe),_e=re*G/T*R,ge=P*G/T*R;$.projectionMatrix.makePerspective(Z,ve,_e,ge,R,T),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}function Y($,se){se===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(se.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;b.near=E.near=y.near=$.near,b.far=E.far=y.far=$.far,(S!==b.near||z!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),S=b.near,z=b.far);let se=$.parent,Me=b.cameras;Y(b,se);for(let Se=0;Se<Me.length;Se++)Y(Me[Se],se);Me.length===2?B(b,y,E):b.projectionMatrix.copy(y.projectionMatrix),W($,b,se)};function W($,se,Me){Me===null?$.matrix.copy(se.matrixWorld):($.matrix.copy(Me.matrixWorld),$.matrix.invert(),$.matrix.multiply(se.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(se.projectionMatrix),$.projectionMatrixInverse.copy(se.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Uo*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(p===null&&u===null))return l},this.setFoveation=function($){l=$,p!==null&&(p.fixedFoveation=$),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=$)};let K=null;function ee($,se){if(h=se.getViewerPose(c||o),_=se,h!==null){let Me=h.views;u!==null&&(e.setRenderTargetFramebuffer(d,u.framebuffer),e.setRenderTarget(d));let Se=!1;Me.length!==b.cameras.length&&(b.cameras.length=0,Se=!0);for(let Q=0;Q<Me.length;Q++){let we=Me[Q],Ie=null;if(u!==null)Ie=u.getViewport(we);else{let re=f.getViewSubImage(p,we);Ie=re.viewport,Q===0&&(e.setRenderTargetTextures(d,re.colorTexture,p.ignoreDepthValues?void 0:re.depthStencilTexture),e.setRenderTarget(d))}let G=A[Q];G===void 0&&(G=new Jt,G.layers.enable(Q),G.viewport=new Et,A[Q]=G),G.matrix.fromArray(we.transform.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale),G.projectionMatrix.fromArray(we.projectionMatrix),G.projectionMatrixInverse.copy(G.projectionMatrix).invert(),G.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),Q===0&&(b.matrix.copy(G.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),Se===!0&&b.cameras.push(G)}}for(let Me=0;Me<g.length;Me++){let Se=v[Me],Q=g[Me];Se!==null&&Q!==void 0&&Q.update(Se,se,c||o)}K&&K($,se),se.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:se}),_=null}let me=new Ef;me.setAnimationLoop(ee),this.setAnimationLoop=function($){K=$},this.dispose=function(){}}};Sr=class{constructor(e={}){let{canvas:t=Np(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let p;n!==null?p=n.getContextAttributes().alpha:p=o;let u=new Uint32Array(4),_=new Int32Array(4),x=null,m=null,d=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=st,this._useLegacyLights=!1,this.toneMapping=Ci,this.toneMappingExposure=1;let v=this,M=!1,w=0,y=0,E=null,A=-1,b=null,S=new Et,z=new Et,F=null,q=new Re(0),D=0,O=t.width,k=t.height,B=1,Y=null,W=null,K=new Et(0,0,O,k),ee=new Et(0,0,O,k),me=!1,$=new wr,se=!1,Me=!1,Se=null,Q=new lt,we=new xe,Ie=new U,G={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function re(){return E===null?B:1}let P=n;function te(C,j){for(let ae=0;ae<C.length;ae++){let de=C[ae],oe=t.getContext(de,j);if(oe!==null)return oe}return null}try{let C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${wc}`),t.addEventListener("webglcontextlost",be,!1),t.addEventListener("webglcontextrestored",H,!1),t.addEventListener("webglcontextcreationerror",Le,!1),P===null){let j=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&j.shift(),P=te(j,C),P===null)throw te(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&P instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),P.getShaderPrecisionFormat===void 0&&(P.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let J,ue,ne,Ee,pe,R,T,Z,ve,_e,ge,Ue,Ae,X,I,N,L,V,he,ie,le,fe,ye,Te;function ke(){J=new Wg(P),ue=new Bg(P,J,e),J.init(ue),fe=new b_(P,J,ue),ne=new y_(P,J,ue),Ee=new Yg(P),pe=new l_,R=new M_(P,J,ne,pe,ue,fe,Ee),T=new Hg(v),Z=new Vg(v),ve=new tm(P,ue),ye=new zg(P,J,ve,ue),_e=new Xg(P,ve,Ee,ye),ge=new Kg(P,_e,ve,Ee),he=new $g(P,ue,R),N=new Og(pe),Ue=new a_(v,T,Z,J,ue,ye,N),Ae=new w_(v,pe),X=new h_,I=new g_(J,ue),V=new Ng(v,T,Z,ne,ge,p,l),L=new v_(v,ge,ue),Te=new S_(P,Ee,ue,ne),ie=new Fg(P,J,Ee,ue),le=new qg(P,J,Ee,ue),Ee.programs=Ue.programs,v.capabilities=ue,v.extensions=J,v.properties=pe,v.renderLists=X,v.shadowMap=L,v.state=ne,v.info=Ee}ke();let Fe=new $l(v,P);this.xr=Fe,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let C=J.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=J.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(C){C!==void 0&&(B=C,this.setSize(O,k,!1))},this.getSize=function(C){return C.set(O,k)},this.setSize=function(C,j,ae=!0){if(Fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=C,k=j,t.width=Math.floor(C*B),t.height=Math.floor(j*B),ae===!0&&(t.style.width=C+"px",t.style.height=j+"px"),this.setViewport(0,0,C,j)},this.getDrawingBufferSize=function(C){return C.set(O*B,k*B).floor()},this.setDrawingBufferSize=function(C,j,ae){O=C,k=j,B=ae,t.width=Math.floor(C*ae),t.height=Math.floor(j*ae),this.setViewport(0,0,C,j)},this.getCurrentViewport=function(C){return C.copy(S)},this.getViewport=function(C){return C.copy(K)},this.setViewport=function(C,j,ae,de){C.isVector4?K.set(C.x,C.y,C.z,C.w):K.set(C,j,ae,de),ne.viewport(S.copy(K).multiplyScalar(B).floor())},this.getScissor=function(C){return C.copy(ee)},this.setScissor=function(C,j,ae,de){C.isVector4?ee.set(C.x,C.y,C.z,C.w):ee.set(C,j,ae,de),ne.scissor(z.copy(ee).multiplyScalar(B).floor())},this.getScissorTest=function(){return me},this.setScissorTest=function(C){ne.setScissorTest(me=C)},this.setOpaqueSort=function(C){Y=C},this.setTransparentSort=function(C){W=C},this.getClearColor=function(C){return C.copy(V.getClearColor())},this.setClearColor=function(){V.setClearColor.apply(V,arguments)},this.getClearAlpha=function(){return V.getClearAlpha()},this.setClearAlpha=function(){V.setClearAlpha.apply(V,arguments)},this.clear=function(C=!0,j=!0,ae=!0){let de=0;if(C){let oe=!1;if(E!==null){let Be=E.texture.format;oe=Be===df||Be===ff||Be===uf}if(oe){let Be=E.texture.type,Ge=Be===Pi||Be===Ai||Be===Pc||Be===ji||Be===cf||Be===hf,qe=V.getClearColor(),Ze=V.getClearAlpha(),et=qe.r,$e=qe.g,Ke=qe.b;Ge?(u[0]=et,u[1]=$e,u[2]=Ke,u[3]=Ze,P.clearBufferuiv(P.COLOR,0,u)):(_[0]=et,_[1]=$e,_[2]=Ke,_[3]=Ze,P.clearBufferiv(P.COLOR,0,_))}else de|=P.COLOR_BUFFER_BIT}j&&(de|=P.DEPTH_BUFFER_BIT),ae&&(de|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(de)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",be,!1),t.removeEventListener("webglcontextrestored",H,!1),t.removeEventListener("webglcontextcreationerror",Le,!1),X.dispose(),I.dispose(),pe.dispose(),T.dispose(),Z.dispose(),ge.dispose(),ye.dispose(),Te.dispose(),Ue.dispose(),Fe.dispose(),Fe.removeEventListener("sessionstart",nn),Fe.removeEventListener("sessionend",_t),Se&&(Se.dispose(),Se=null),sn.stop()};function be(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function H(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let C=Ee.autoReset,j=L.enabled,ae=L.autoUpdate,de=L.needsUpdate,oe=L.type;ke(),Ee.autoReset=C,L.enabled=j,L.autoUpdate=ae,L.needsUpdate=de,L.type=oe}function Le(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Ne(C){let j=C.target;j.removeEventListener("dispose",Ne),Ye(j)}function Ye(C){We(C),pe.remove(C)}function We(C){let j=pe.get(C).programs;j!==void 0&&(j.forEach(function(ae){Ue.releaseProgram(ae)}),C.isShaderMaterial&&Ue.releaseShaderCache(C))}this.renderBufferDirect=function(C,j,ae,de,oe,Be){j===null&&(j=G);let Ge=oe.isMesh&&oe.matrixWorld.determinant()<0,qe=Nd(C,j,ae,de,oe);ne.setMaterial(de,Ge);let Ze=ae.index,et=1;if(de.wireframe===!0){if(Ze=_e.getWireframeAttribute(ae),Ze===void 0)return;et=2}let $e=ae.drawRange,Ke=ae.attributes.position,Dt=$e.start*et,dn=($e.start+$e.count)*et;Be!==null&&(Dt=Math.max(Dt,Be.start*et),dn=Math.min(dn,(Be.start+Be.count)*et)),Ze!==null?(Dt=Math.max(Dt,0),dn=Math.min(dn,Ze.count)):Ke!=null&&(Dt=Math.max(Dt,0),dn=Math.min(dn,Ke.count));let Wt=dn-Dt;if(Wt<0||Wt===1/0)return;ye.setup(oe,de,qe,ae,Ze);let ni,Tt=ie;if(Ze!==null&&(ni=ve.get(Ze),Tt=le,Tt.setIndex(ni)),oe.isMesh)de.wireframe===!0?(ne.setLineWidth(de.wireframeLinewidth*re()),Tt.setMode(P.LINES)):Tt.setMode(P.TRIANGLES);else if(oe.isLine){let nt=de.linewidth;nt===void 0&&(nt=1),ne.setLineWidth(nt*re()),oe.isLineSegments?Tt.setMode(P.LINES):oe.isLineLoop?Tt.setMode(P.LINE_LOOP):Tt.setMode(P.LINE_STRIP)}else oe.isPoints?Tt.setMode(P.POINTS):oe.isSprite&&Tt.setMode(P.TRIANGLES);if(oe.isBatchedMesh)Tt.renderMultiDraw(oe._multiDrawStarts,oe._multiDrawCounts,oe._multiDrawCount);else if(oe.isInstancedMesh)Tt.renderInstances(Dt,Wt,oe.count);else if(ae.isInstancedBufferGeometry){let nt=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,ka=Math.min(ae.instanceCount,nt);Tt.renderInstances(Dt,Wt,ka)}else Tt.render(Dt,Wt)};function gt(C,j,ae){C.transparent===!0&&C.side===ht&&C.forceSinglePass===!1?(C.side=zt,C.needsUpdate=!0,qr(C,j,ae),C.side=Li,C.needsUpdate=!0,qr(C,j,ae),C.side=ht):qr(C,j,ae)}this.compile=function(C,j,ae=null){ae===null&&(ae=C),m=I.get(ae),m.init(),g.push(m),ae.traverseVisible(function(oe){oe.isLight&&oe.layers.test(j.layers)&&(m.pushLight(oe),oe.castShadow&&m.pushShadow(oe))}),C!==ae&&C.traverseVisible(function(oe){oe.isLight&&oe.layers.test(j.layers)&&(m.pushLight(oe),oe.castShadow&&m.pushShadow(oe))}),m.setupLights(v._useLegacyLights);let de=new Set;return C.traverse(function(oe){let Be=oe.material;if(Be)if(Array.isArray(Be))for(let Ge=0;Ge<Be.length;Ge++){let qe=Be[Ge];gt(qe,ae,oe),de.add(qe)}else gt(Be,ae,oe),de.add(Be)}),g.pop(),m=null,de},this.compileAsync=function(C,j,ae=null){let de=this.compile(C,j,ae);return new Promise(oe=>{function Be(){if(de.forEach(function(Ge){pe.get(Ge).currentProgram.isReady()&&de.delete(Ge)}),de.size===0){oe(C);return}setTimeout(Be,10)}J.get("KHR_parallel_shader_compile")!==null?Be():setTimeout(Be,10)})};let xt=null;function Vt(C){xt&&xt(C)}function nn(){sn.stop()}function _t(){sn.start()}let sn=new Ef;sn.setAnimationLoop(Vt),typeof self<"u"&&sn.setContext(self),this.setAnimationLoop=function(C){xt=C,Fe.setAnimationLoop(C),C===null?sn.stop():sn.start()},Fe.addEventListener("sessionstart",nn),Fe.addEventListener("sessionend",_t),this.render=function(C,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),Fe.enabled===!0&&Fe.isPresenting===!0&&(Fe.cameraAutoUpdate===!0&&Fe.updateCamera(j),j=Fe.getCamera()),C.isScene===!0&&C.onBeforeRender(v,C,j,E),m=I.get(C,g.length),m.init(),g.push(m),Q.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),$.setFromProjectionMatrix(Q),Me=this.localClippingEnabled,se=N.init(this.clippingPlanes,Me),x=X.get(C,d.length),x.init(),d.push(x),Zn(C,j,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(Y,W),this.info.render.frame++,se===!0&&N.beginShadows();let ae=m.state.shadowsArray;if(L.render(ae,C,j),se===!0&&N.endShadows(),this.info.autoReset===!0&&this.info.reset(),V.render(x,C),m.setupLights(v._useLegacyLights),j.isArrayCamera){let de=j.cameras;for(let oe=0,Be=de.length;oe<Be;oe++){let Ge=de[oe];hh(x,C,Ge,Ge.viewport)}}else hh(x,C,j);E!==null&&(R.updateMultisampleRenderTarget(E),R.updateRenderTargetMipmap(E)),C.isScene===!0&&C.onAfterRender(v,C,j),ye.resetDefaultState(),A=-1,b=null,g.pop(),g.length>0?m=g[g.length-1]:m=null,d.pop(),d.length>0?x=d[d.length-1]:x=null};function Zn(C,j,ae,de){if(C.visible===!1)return;if(C.layers.test(j.layers)){if(C.isGroup)ae=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(j);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||$.intersectsSprite(C)){de&&Ie.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Q);let Ge=ge.update(C),qe=C.material;qe.visible&&x.push(C,Ge,qe,ae,Ie.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||$.intersectsObject(C))){let Ge=ge.update(C),qe=C.material;if(de&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ie.copy(C.boundingSphere.center)):(Ge.boundingSphere===null&&Ge.computeBoundingSphere(),Ie.copy(Ge.boundingSphere.center)),Ie.applyMatrix4(C.matrixWorld).applyMatrix4(Q)),Array.isArray(qe)){let Ze=Ge.groups;for(let et=0,$e=Ze.length;et<$e;et++){let Ke=Ze[et],Dt=qe[Ke.materialIndex];Dt&&Dt.visible&&x.push(C,Ge,Dt,ae,Ie.z,Ke)}}else qe.visible&&x.push(C,Ge,qe,ae,Ie.z,null)}}let Be=C.children;for(let Ge=0,qe=Be.length;Ge<qe;Ge++)Zn(Be[Ge],j,ae,de)}function hh(C,j,ae,de){let oe=C.opaque,Be=C.transmissive,Ge=C.transparent;m.setupLightsView(ae),se===!0&&N.setGlobalState(v.clippingPlanes,ae),Be.length>0&&Ud(oe,Be,j,ae),de&&ne.viewport(S.copy(de)),oe.length>0&&Xr(oe,j,ae),Be.length>0&&Xr(Be,j,ae),Ge.length>0&&Xr(Ge,j,ae),ne.buffers.depth.setTest(!0),ne.buffers.depth.setMask(!0),ne.buffers.color.setMask(!0),ne.setPolygonOffset(!1)}function Ud(C,j,ae,de){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;let Be=ue.isWebGL2;Se===null&&(Se=new $t(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")?gn:Pi,minFilter:Mr,samples:Be?4:0})),v.getDrawingBufferSize(we),Be?Se.setSize(we.x,we.y):Se.setSize(zl(we.x),zl(we.y));let Ge=v.getRenderTarget();v.setRenderTarget(Se),v.getClearColor(q),D=v.getClearAlpha(),D<1&&v.setClearColor(16777215,.5),v.clear();let qe=v.toneMapping;v.toneMapping=Ci,Xr(C,ae,de),R.updateMultisampleRenderTarget(Se),R.updateRenderTargetMipmap(Se);let Ze=!1;for(let et=0,$e=j.length;et<$e;et++){let Ke=j[et],Dt=Ke.object,dn=Ke.geometry,Wt=Ke.material,ni=Ke.group;if(Wt.side===ht&&Dt.layers.test(de.layers)){let Tt=Wt.side;Wt.side=zt,Wt.needsUpdate=!0,uh(Dt,ae,de,dn,Wt,ni),Wt.side=Tt,Wt.needsUpdate=!0,Ze=!0}}Ze===!0&&(R.updateMultisampleRenderTarget(Se),R.updateRenderTargetMipmap(Se)),v.setRenderTarget(Ge),v.setClearColor(q,D),v.toneMapping=qe}function Xr(C,j,ae){let de=j.isScene===!0?j.overrideMaterial:null;for(let oe=0,Be=C.length;oe<Be;oe++){let Ge=C[oe],qe=Ge.object,Ze=Ge.geometry,et=de===null?Ge.material:de,$e=Ge.group;qe.layers.test(ae.layers)&&uh(qe,j,ae,Ze,et,$e)}}function uh(C,j,ae,de,oe,Be){C.onBeforeRender(v,j,ae,de,oe,Be),C.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),oe.onBeforeRender(v,j,ae,de,C,Be),oe.transparent===!0&&oe.side===ht&&oe.forceSinglePass===!1?(oe.side=zt,oe.needsUpdate=!0,v.renderBufferDirect(ae,j,de,oe,C,Be),oe.side=Li,oe.needsUpdate=!0,v.renderBufferDirect(ae,j,de,oe,C,Be),oe.side=ht):v.renderBufferDirect(ae,j,de,oe,C,Be),C.onAfterRender(v,j,ae,de,oe,Be)}function qr(C,j,ae){j.isScene!==!0&&(j=G);let de=pe.get(C),oe=m.state.lights,Be=m.state.shadowsArray,Ge=oe.state.version,qe=Ue.getParameters(C,oe.state,Be,j,ae),Ze=Ue.getProgramCacheKey(qe),et=de.programs;de.environment=C.isMeshStandardMaterial?j.environment:null,de.fog=j.fog,de.envMap=(C.isMeshStandardMaterial?Z:T).get(C.envMap||de.environment),et===void 0&&(C.addEventListener("dispose",Ne),et=new Map,de.programs=et);let $e=et.get(Ze);if($e!==void 0){if(de.currentProgram===$e&&de.lightsStateVersion===Ge)return dh(C,qe),$e}else qe.uniforms=Ue.getUniforms(C),C.onBuild(ae,qe,v),C.onBeforeCompile(qe,v),$e=Ue.acquireProgram(qe,Ze),et.set(Ze,$e),de.uniforms=qe.uniforms;let Ke=de.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ke.clippingPlanes=N.uniform),dh(C,qe),de.needsLights=Fd(C),de.lightsStateVersion=Ge,de.needsLights&&(Ke.ambientLightColor.value=oe.state.ambient,Ke.lightProbe.value=oe.state.probe,Ke.directionalLights.value=oe.state.directional,Ke.directionalLightShadows.value=oe.state.directionalShadow,Ke.spotLights.value=oe.state.spot,Ke.spotLightShadows.value=oe.state.spotShadow,Ke.rectAreaLights.value=oe.state.rectArea,Ke.ltc_1.value=oe.state.rectAreaLTC1,Ke.ltc_2.value=oe.state.rectAreaLTC2,Ke.pointLights.value=oe.state.point,Ke.pointLightShadows.value=oe.state.pointShadow,Ke.hemisphereLights.value=oe.state.hemi,Ke.directionalShadowMap.value=oe.state.directionalShadowMap,Ke.directionalShadowMatrix.value=oe.state.directionalShadowMatrix,Ke.spotShadowMap.value=oe.state.spotShadowMap,Ke.spotLightMatrix.value=oe.state.spotLightMatrix,Ke.spotLightMap.value=oe.state.spotLightMap,Ke.pointShadowMap.value=oe.state.pointShadowMap,Ke.pointShadowMatrix.value=oe.state.pointShadowMatrix),de.currentProgram=$e,de.uniformsList=null,$e}function fh(C){if(C.uniformsList===null){let j=C.currentProgram.getUniforms();C.uniformsList=Fs.seqWithValue(j.seq,C.uniforms)}return C.uniformsList}function dh(C,j){let ae=pe.get(C);ae.outputColorSpace=j.outputColorSpace,ae.batching=j.batching,ae.instancing=j.instancing,ae.instancingColor=j.instancingColor,ae.skinning=j.skinning,ae.morphTargets=j.morphTargets,ae.morphNormals=j.morphNormals,ae.morphColors=j.morphColors,ae.morphTargetsCount=j.morphTargetsCount,ae.numClippingPlanes=j.numClippingPlanes,ae.numIntersection=j.numClipIntersection,ae.vertexAlphas=j.vertexAlphas,ae.vertexTangents=j.vertexTangents,ae.toneMapping=j.toneMapping}function Nd(C,j,ae,de,oe){j.isScene!==!0&&(j=G),R.resetTextureUnits();let Be=j.fog,Ge=de.isMeshStandardMaterial?j.environment:null,qe=E===null?v.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:di,Ze=(de.isMeshStandardMaterial?Z:T).get(de.envMap||Ge),et=de.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,$e=!!ae.attributes.tangent&&(!!de.normalMap||de.anisotropy>0),Ke=!!ae.morphAttributes.position,Dt=!!ae.morphAttributes.normal,dn=!!ae.morphAttributes.color,Wt=Ci;de.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(Wt=v.toneMapping);let ni=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,Tt=ni!==void 0?ni.length:0,nt=pe.get(de),ka=m.state.lights;if(se===!0&&(Me===!0||C!==b)){let wn=C===b&&de.id===A;N.setState(de,C,wn)}let Rt=!1;de.version===nt.__version?(nt.needsLights&&nt.lightsStateVersion!==ka.state.version||nt.outputColorSpace!==qe||oe.isBatchedMesh&&nt.batching===!1||!oe.isBatchedMesh&&nt.batching===!0||oe.isInstancedMesh&&nt.instancing===!1||!oe.isInstancedMesh&&nt.instancing===!0||oe.isSkinnedMesh&&nt.skinning===!1||!oe.isSkinnedMesh&&nt.skinning===!0||oe.isInstancedMesh&&nt.instancingColor===!0&&oe.instanceColor===null||oe.isInstancedMesh&&nt.instancingColor===!1&&oe.instanceColor!==null||nt.envMap!==Ze||de.fog===!0&&nt.fog!==Be||nt.numClippingPlanes!==void 0&&(nt.numClippingPlanes!==N.numPlanes||nt.numIntersection!==N.numIntersection)||nt.vertexAlphas!==et||nt.vertexTangents!==$e||nt.morphTargets!==Ke||nt.morphNormals!==Dt||nt.morphColors!==dn||nt.toneMapping!==Wt||ue.isWebGL2===!0&&nt.morphTargetsCount!==Tt)&&(Rt=!0):(Rt=!0,nt.__version=de.version);let Vi=nt.currentProgram;Rt===!0&&(Vi=qr(de,j,oe));let ph=!1,or=!1,Ga=!1,Qt=Vi.getUniforms(),Wi=nt.uniforms;if(ne.useProgram(Vi.program)&&(ph=!0,or=!0,Ga=!0),de.id!==A&&(A=de.id,or=!0),ph||b!==C){Qt.setValue(P,"projectionMatrix",C.projectionMatrix),Qt.setValue(P,"viewMatrix",C.matrixWorldInverse);let wn=Qt.map.cameraPosition;wn!==void 0&&wn.setValue(P,Ie.setFromMatrixPosition(C.matrixWorld)),ue.logarithmicDepthBuffer&&Qt.setValue(P,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(de.isMeshPhongMaterial||de.isMeshToonMaterial||de.isMeshLambertMaterial||de.isMeshBasicMaterial||de.isMeshStandardMaterial||de.isShaderMaterial)&&Qt.setValue(P,"isOrthographic",C.isOrthographicCamera===!0),b!==C&&(b=C,or=!0,Ga=!0)}if(oe.isSkinnedMesh){Qt.setOptional(P,oe,"bindMatrix"),Qt.setOptional(P,oe,"bindMatrixInverse");let wn=oe.skeleton;wn&&(ue.floatVertexTextures?(wn.boneTexture===null&&wn.computeBoneTexture(),Qt.setValue(P,"boneTexture",wn.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}oe.isBatchedMesh&&(Qt.setOptional(P,oe,"batchingTexture"),Qt.setValue(P,"batchingTexture",oe._matricesTexture,R));let Va=ae.morphAttributes;if((Va.position!==void 0||Va.normal!==void 0||Va.color!==void 0&&ue.isWebGL2===!0)&&he.update(oe,ae,Vi),(or||nt.receiveShadow!==oe.receiveShadow)&&(nt.receiveShadow=oe.receiveShadow,Qt.setValue(P,"receiveShadow",oe.receiveShadow)),de.isMeshGouraudMaterial&&de.envMap!==null&&(Wi.envMap.value=Ze,Wi.flipEnvMap.value=Ze.isCubeTexture&&Ze.isRenderTargetTexture===!1?-1:1),or&&(Qt.setValue(P,"toneMappingExposure",v.toneMappingExposure),nt.needsLights&&zd(Wi,Ga),Be&&de.fog===!0&&Ae.refreshFogUniforms(Wi,Be),Ae.refreshMaterialUniforms(Wi,de,B,k,Se),Fs.upload(P,fh(nt),Wi,R)),de.isShaderMaterial&&de.uniformsNeedUpdate===!0&&(Fs.upload(P,fh(nt),Wi,R),de.uniformsNeedUpdate=!1),de.isSpriteMaterial&&Qt.setValue(P,"center",oe.center),Qt.setValue(P,"modelViewMatrix",oe.modelViewMatrix),Qt.setValue(P,"normalMatrix",oe.normalMatrix),Qt.setValue(P,"modelMatrix",oe.matrixWorld),de.isShaderMaterial||de.isRawShaderMaterial){let wn=de.uniformsGroups;for(let Wa=0,Bd=wn.length;Wa<Bd;Wa++)if(ue.isWebGL2){let mh=wn[Wa];Te.update(mh,Vi),Te.bind(mh,Vi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Vi}function zd(C,j){C.ambientLightColor.needsUpdate=j,C.lightProbe.needsUpdate=j,C.directionalLights.needsUpdate=j,C.directionalLightShadows.needsUpdate=j,C.pointLights.needsUpdate=j,C.pointLightShadows.needsUpdate=j,C.spotLights.needsUpdate=j,C.spotLightShadows.needsUpdate=j,C.rectAreaLights.needsUpdate=j,C.hemisphereLights.needsUpdate=j}function Fd(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(C,j,ae){pe.get(C.texture).__webglTexture=j,pe.get(C.depthTexture).__webglTexture=ae;let de=pe.get(C);de.__hasExternalTextures=!0,de.__hasExternalTextures&&(de.__autoAllocateDepthBuffer=ae===void 0,de.__autoAllocateDepthBuffer||J.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),de.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,j){let ae=pe.get(C);ae.__webglFramebuffer=j,ae.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(C,j=0,ae=0){E=C,w=j,y=ae;let de=!0,oe=null,Be=!1,Ge=!1;if(C){let Ze=pe.get(C);Ze.__useDefaultFramebuffer!==void 0?(ne.bindFramebuffer(P.FRAMEBUFFER,null),de=!1):Ze.__webglFramebuffer===void 0?R.setupRenderTarget(C):Ze.__hasExternalTextures&&R.rebindTextures(C,pe.get(C.texture).__webglTexture,pe.get(C.depthTexture).__webglTexture);let et=C.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(Ge=!0);let $e=pe.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray($e[j])?oe=$e[j][ae]:oe=$e[j],Be=!0):ue.isWebGL2&&C.samples>0&&R.useMultisampledRTT(C)===!1?oe=pe.get(C).__webglMultisampledFramebuffer:Array.isArray($e)?oe=$e[ae]:oe=$e,S.copy(C.viewport),z.copy(C.scissor),F=C.scissorTest}else S.copy(K).multiplyScalar(B).floor(),z.copy(ee).multiplyScalar(B).floor(),F=me;if(ne.bindFramebuffer(P.FRAMEBUFFER,oe)&&ue.drawBuffers&&de&&ne.drawBuffers(C,oe),ne.viewport(S),ne.scissor(z),ne.setScissorTest(F),Be){let Ze=pe.get(C.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ze.__webglTexture,ae)}else if(Ge){let Ze=pe.get(C.texture),et=j||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ze.__webglTexture,ae||0,et)}A=-1},this.readRenderTargetPixels=function(C,j,ae,de,oe,Be,Ge){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=pe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ge!==void 0&&(qe=qe[Ge]),qe){ne.bindFramebuffer(P.FRAMEBUFFER,qe);try{let Ze=C.texture,et=Ze.format,$e=Ze.type;if(et!==Fn&&fe.convert(et)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ke=$e===gn&&(J.has("EXT_color_buffer_half_float")||ue.isWebGL2&&J.has("EXT_color_buffer_float"));if($e!==Pi&&fe.convert($e)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_TYPE)&&!($e===Ri&&(ue.isWebGL2||J.has("OES_texture_float")||J.has("WEBGL_color_buffer_float")))&&!Ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=C.width-de&&ae>=0&&ae<=C.height-oe&&P.readPixels(j,ae,de,oe,fe.convert(et),fe.convert($e),Be)}finally{let Ze=E!==null?pe.get(E).__webglFramebuffer:null;ne.bindFramebuffer(P.FRAMEBUFFER,Ze)}}},this.copyFramebufferToTexture=function(C,j,ae=0){let de=Math.pow(2,-ae),oe=Math.floor(j.image.width*de),Be=Math.floor(j.image.height*de);R.setTexture2D(j,0),P.copyTexSubImage2D(P.TEXTURE_2D,ae,0,0,C.x,C.y,oe,Be),ne.unbindTexture()},this.copyTextureToTexture=function(C,j,ae,de=0){let oe=j.image.width,Be=j.image.height,Ge=fe.convert(ae.format),qe=fe.convert(ae.type);R.setTexture2D(ae,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,ae.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ae.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,ae.unpackAlignment),j.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,de,C.x,C.y,oe,Be,Ge,qe,j.image.data):j.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,de,C.x,C.y,j.mipmaps[0].width,j.mipmaps[0].height,Ge,j.mipmaps[0].data):P.texSubImage2D(P.TEXTURE_2D,de,C.x,C.y,Ge,qe,j.image),de===0&&ae.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),ne.unbindTexture()},this.copyTextureToTexture3D=function(C,j,ae,de,oe=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Be=C.max.x-C.min.x+1,Ge=C.max.y-C.min.y+1,qe=C.max.z-C.min.z+1,Ze=fe.convert(de.format),et=fe.convert(de.type),$e;if(de.isData3DTexture)R.setTexture3D(de,0),$e=P.TEXTURE_3D;else if(de.isDataArrayTexture||de.isCompressedArrayTexture)R.setTexture2DArray(de,0),$e=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,de.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,de.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,de.unpackAlignment);let Ke=P.getParameter(P.UNPACK_ROW_LENGTH),Dt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),dn=P.getParameter(P.UNPACK_SKIP_PIXELS),Wt=P.getParameter(P.UNPACK_SKIP_ROWS),ni=P.getParameter(P.UNPACK_SKIP_IMAGES),Tt=ae.isCompressedTexture?ae.mipmaps[oe]:ae.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,Tt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Tt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,C.min.x),P.pixelStorei(P.UNPACK_SKIP_ROWS,C.min.y),P.pixelStorei(P.UNPACK_SKIP_IMAGES,C.min.z),ae.isDataTexture||ae.isData3DTexture?P.texSubImage3D($e,oe,j.x,j.y,j.z,Be,Ge,qe,Ze,et,Tt.data):ae.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),P.compressedTexSubImage3D($e,oe,j.x,j.y,j.z,Be,Ge,qe,Ze,Tt.data)):P.texSubImage3D($e,oe,j.x,j.y,j.z,Be,Ge,qe,Ze,et,Tt),P.pixelStorei(P.UNPACK_ROW_LENGTH,Ke),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Dt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,dn),P.pixelStorei(P.UNPACK_SKIP_ROWS,Wt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,ni),oe===0&&de.generateMipmaps&&P.generateMipmap($e),ne.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?R.setTextureCube(C,0):C.isData3DTexture?R.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?R.setTexture2DArray(C,0):R.setTexture2D(C,0),ne.unbindTexture()},this.resetState=function(){w=0,y=0,E=null,ne.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Lc?"display-p3":"srgb",t.unpackColorSpace=at.workingColorSpace===oa?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===st?ts:xf}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ts?st:di}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Kl=class extends Sr{};Kl.prototype.isWebGL1Renderer=!0;Vo=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Re(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},Wo=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Re(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Bn=class extends Pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},Tr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ul,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=fi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},rn=new U,Xs=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix4(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.applyNormalMatrix(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.transformDirection(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=hi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=hi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=hi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=hi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),s=dt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),s=dt(s,this.array),r=dt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new tt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ni=class extends Qn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ur=new U,Rs=new U,Cs=new U,Ps=new xe,fr=new xe,Cf=new lt,go=new U,dr=new U,xo=new U,Fu=new xe,bl=new xe,Bu=new xe,ns=class extends Pt{constructor(e=new Ni){if(super(),this.isSprite=!0,this.type="Sprite",As===void 0){As=new Xe;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Tr(t,5);As.setIndex([0,1,2,0,2,3]),As.setAttribute("position",new Xs(n,3,0,!1)),As.setAttribute("uv",new Xs(n,2,3,!1))}this.geometry=As,this.material=e,this.center=new xe(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Rs.setFromMatrixScale(this.matrixWorld),Cf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Cs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Rs.multiplyScalar(-Cs.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;_o(go.set(-.5,-.5,0),Cs,o,Rs,s,r),_o(dr.set(.5,-.5,0),Cs,o,Rs,s,r),_o(xo.set(.5,.5,0),Cs,o,Rs,s,r),Fu.set(0,0),bl.set(1,0),Bu.set(1,1);let a=e.ray.intersectTriangle(go,dr,xo,!1,ur);if(a===null&&(_o(dr.set(-.5,.5,0),Cs,o,Rs,s,r),bl.set(0,1),a=e.ray.intersectTriangle(go,xo,dr,!1,ur),a===null))return;let l=e.ray.origin.distanceTo(ur);l<e.near||l>e.far||t.push({distance:l,point:ur.clone(),uv:Qi.getInterpolation(ur,go,dr,xo,Fu,bl,Bu,new xe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};is=class extends tt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Is=new lt,Ou=new lt,vo=[],Hu=new pi,T_=new lt,pr=new ce,mr=new mi,Xo=class extends ce{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new is(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,T_)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new pi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Is),Hu.copy(e.boundingBox).applyMatrix4(Is),this.boundingBox.union(Hu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new mi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Is),mr.copy(e.boundingSphere).applyMatrix4(Is),this.boundingSphere.union(mr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,s=this.count;if(pr.geometry=this.geometry,pr.material=this.material,pr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),mr.copy(this.boundingSphere),mr.applyMatrix4(n),e.ray.intersectsSphere(mr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Is),Ou.multiplyMatrices(n,Is),pr.matrixWorld=Ou,pr.raycast(e,vo);for(let o=0,a=vo.length;o<a;o++){let l=vo[o];l.instanceId=r,l.object=this,t.push(l)}vo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new is(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}},ss=class extends Qn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ku=new U,Gu=new U,Vu=new lt,El=new ks,yo=new mi,Ql=class extends Pt{constructor(e=new Xe,t=new ss){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)ku.fromBufferAttribute(t,s-1),Gu.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=ku.distanceTo(Gu);e.setAttribute("lineDistance",new ze(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),yo.copy(n.boundingSphere),yo.applyMatrix4(s),yo.radius+=r,e.ray.intersectsSphere(yo)===!1)return;Vu.copy(s).invert(),El.copy(e.ray).applyMatrix4(Vu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new U,h=new U,f=new U,p=new U,u=this.isLineSegments?2:1,_=n.index,m=n.attributes.position;if(_!==null){let d=Math.max(0,o.start),g=Math.min(_.count,o.start+o.count);for(let v=d,M=g-1;v<M;v+=u){let w=_.getX(v),y=_.getX(v+1);if(c.fromBufferAttribute(m,w),h.fromBufferAttribute(m,y),El.distanceSqToSegment(c,h,p,f)>l)continue;p.applyMatrix4(this.matrixWorld);let A=e.ray.origin.distanceTo(p);A<e.near||A>e.far||t.push({distance:A,point:f.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{let d=Math.max(0,o.start),g=Math.min(m.count,o.start+o.count);for(let v=d,M=g-1;v<M;v+=u){if(c.fromBufferAttribute(m,v),h.fromBufferAttribute(m,v+1),El.distanceSqToSegment(c,h,p,f)>l)continue;p.applyMatrix4(this.matrixWorld);let y=e.ray.origin.distanceTo(p);y<e.near||y>e.far||t.push({distance:y,point:f.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}},Wu=new U,Xu=new U,qs=class extends Ql{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Wu.fromBufferAttribute(t,s),Xu.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Wu.distanceTo(Xu);e.setAttribute("lineDistance",new ze(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Rn=class extends Qn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},qu=new lt,jl=new ks,Mo=new mi,bo=new U,_n=class extends Pt{constructor(e=new Xe,t=new Rn){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Mo.copy(n.boundingSphere),Mo.applyMatrix4(s),Mo.radius+=r,e.ray.intersectsSphere(Mo)===!1)return;qu.copy(s).invert(),jl.copy(e.ray).applyMatrix4(qu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){let p=Math.max(0,o.start),u=Math.min(c.count,o.start+o.count);for(let _=p,x=u;_<x;_++){let m=c.getX(_);bo.fromBufferAttribute(f,m),Yu(bo,m,l,s,e,t,this)}}else{let p=Math.max(0,o.start),u=Math.min(f.count,o.start+o.count);for(let _=p,x=u;_<x;_++)bo.fromBufferAttribute(f,_),Yu(bo,_,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};pt=class extends xn{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Cn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],p=n[s+1]-h,u=(o-h)/p;return(s+u)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new xe:new U);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new U,s=[],r=[],o=[],a=new U,l=new lt;for(let u=0;u<=e;u++){let _=u/e;s[u]=this.getTangentAt(_,new U)}r[0]=new U,o[0]=new U;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),p=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),p<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let u=1;u<=e;u++){if(r[u]=r[u-1].clone(),o[u]=o[u-1].clone(),a.crossVectors(s[u-1],s[u]),a.length()>Number.EPSILON){a.normalize();let _=Math.acos(qt(s[u-1].dot(s[u]),-1,1));r[u].applyMatrix4(l.makeRotationAxis(a,_))}o[u].crossVectors(s[u],r[u])}if(t===!0){let u=Math.acos(qt(r[0].dot(r[e]),-1,1));u/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(u=-u);for(let _=1;_<=e;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],u*_)),o[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ar=class extends Cn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){let n=t||new xe,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),p=l-this.aX,u=c-this.aY;l=p*h-u*f+this.aX,c=p*f+u*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ec=class extends Ar{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};Eo=new U,wl=new Uc,Sl=new Uc,Tl=new Uc,tc=class extends Cn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new U){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Eo.subVectors(s[0],s[1]).add(s[0]),c=Eo);let f=s[a%r],p=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Eo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Eo),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,_=Math.pow(c.distanceToSquared(f),u),x=Math.pow(f.distanceToSquared(p),u),m=Math.pow(p.distanceToSquared(h),u);x<1e-4&&(x=1),_<1e-4&&(_=x),m<1e-4&&(m=x),wl.initNonuniformCatmullRom(c.x,f.x,p.x,h.x,_,x,m),Sl.initNonuniformCatmullRom(c.y,f.y,p.y,h.y,_,x,m),Tl.initNonuniformCatmullRom(c.z,f.z,p.z,h.z,_,x,m)}else this.curveType==="catmullrom"&&(wl.initCatmullRom(c.x,f.x,p.x,h.x,this.tension),Sl.initCatmullRom(c.y,f.y,p.y,h.y,this.tension),Tl.initCatmullRom(c.z,f.z,p.z,h.z,this.tension));return n.set(wl.calc(l),Sl.calc(l),Tl.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new U().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};qo=class extends Cn{constructor(e=new xe,t=new xe,n=new xe,s=new xe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new xe){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(yr(e,s.x,r.x,o.x,a.x),yr(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},nc=class extends Cn{constructor(e=new U,t=new U,n=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new U){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(yr(e,s.x,r.x,o.x,a.x),yr(e,s.y,r.y,o.y,a.y),yr(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Yo=class extends Cn{constructor(e=new xe,t=new xe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new xe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new xe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ic=class extends Cn{constructor(e=new U,t=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new U){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new U){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Zo=class extends Cn{constructor(e=new xe,t=new xe,n=new xe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new xe){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(vr(e,s.x,r.x,o.x),vr(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},sc=class extends Cn{constructor(e=new U,t=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new U){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(vr(e,s.x,r.x,o.x),vr(e,s.y,r.y,o.y),vr(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Jo=class extends Cn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new xe){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return n.set(Zu(a,l.x,c.x,h.x,f.x),Zu(a,l.y,c.y,h.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new xe().fromArray(s))}return this}},rc=Object.freeze({__proto__:null,ArcCurve:ec,CatmullRomCurve3:tc,CubicBezierCurve:qo,CubicBezierCurve3:nc,EllipseCurve:Ar,LineCurve:Yo,LineCurve3:ic,QuadraticBezierCurve:Zo,QuadraticBezierCurve3:sc,SplineCurve:Jo}),oc=class extends Cn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new rc[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new rc[s.type]().fromJSON(s))}return this}},$o=class extends oc{constructor(e){super(),this.type="Path",this.currentPoint=new xe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Yo(this.currentPoint.clone(),new xe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Zo(this.currentPoint.clone(),new xe(e,t),new xe(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new qo(this.currentPoint.clone(),new xe(e,t),new xe(n,s),new xe(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Jo(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){let c=new Ar(e,t,n,s,r,o,a,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Rr=class i extends Xe{constructor(e=[new xe(0,-.5),new xe(.5,0),new xe(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=qt(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,f=new U,p=new xe,u=new U,_=new U,x=new U,m=0,d=0;for(let g=0;g<=e.length-1;g++)switch(g){case 0:m=e[g+1].x-e[g].x,d=e[g+1].y-e[g].y,u.x=d*1,u.y=-m,u.z=d*0,x.copy(u),u.normalize(),l.push(u.x,u.y,u.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:m=e[g+1].x-e[g].x,d=e[g+1].y-e[g].y,u.x=d*1,u.y=-m,u.z=d*0,_.copy(u),u.x+=x.x,u.y+=x.y,u.z+=x.z,u.normalize(),l.push(u.x,u.y,u.z),x.copy(_)}for(let g=0;g<=t;g++){let v=n+g*h*s,M=Math.sin(v),w=Math.cos(v);for(let y=0;y<=e.length-1;y++){f.x=e[y].x*M,f.y=e[y].y,f.z=e[y].x*w,o.push(f.x,f.y,f.z),p.x=g/t,p.y=y/(e.length-1),a.push(p.x,p.y);let E=l[3*y+0]*M,A=l[3*y+1],b=l[3*y+0]*w;c.push(E,A,b)}}for(let g=0;g<t;g++)for(let v=0;v<e.length-1;v++){let M=v+g*e.length,w=M,y=M+e.length,E=M+e.length+1,A=M+1;r.push(w,y,A),r.push(E,A,y)}this.setIndex(r),this.setAttribute("position",new ze(o,3)),this.setAttribute("uv",new ze(a,2)),this.setAttribute("normal",new ze(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},Pn=class i extends Xe{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new U,h=new xe;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,p=3;f<=t;f++,p+=3){let u=n+f/t*s;c.x=e*Math.cos(u),c.y=e*Math.sin(u),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[p]/e+1)/2,h.y=(o[p+1]/e+1)/2,l.push(h.x,h.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new ze(o,3)),this.setAttribute("normal",new ze(a,3)),this.setAttribute("uv",new ze(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},rt=class i extends Xe{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],p=[],u=[],_=0,x=[],m=n/2,d=0;g(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new ze(f,3)),this.setAttribute("normal",new ze(p,3)),this.setAttribute("uv",new ze(u,2));function g(){let M=new U,w=new U,y=0,E=(t-e)/n;for(let A=0;A<=r;A++){let b=[],S=A/r,z=S*(t-e)+e;for(let F=0;F<=s;F++){let q=F/s,D=q*l+a,O=Math.sin(D),k=Math.cos(D);w.x=z*O,w.y=-S*n+m,w.z=z*k,f.push(w.x,w.y,w.z),M.set(O,E,k).normalize(),p.push(M.x,M.y,M.z),u.push(q,1-S),b.push(_++)}x.push(b)}for(let A=0;A<s;A++)for(let b=0;b<r;b++){let S=x[b][A],z=x[b+1][A],F=x[b+1][A+1],q=x[b][A+1];h.push(S,z,q),h.push(z,F,q),y+=6}c.addGroup(d,y,0),d+=y}function v(M){let w=_,y=new xe,E=new U,A=0,b=M===!0?e:t,S=M===!0?1:-1;for(let F=1;F<=s;F++)f.push(0,m*S,0),p.push(0,S,0),u.push(.5,.5),_++;let z=_;for(let F=0;F<=s;F++){let D=F/s*l+a,O=Math.cos(D),k=Math.sin(D);E.x=b*k,E.y=m*S,E.z=b*O,f.push(E.x,E.y,E.z),p.push(0,S,0),y.x=O*.5+.5,y.y=k*.5*S+.5,u.push(y.x,y.y),_++}for(let F=0;F<s;F++){let q=w+F,D=z+F;M===!0?h.push(D,D+1,q):h.push(D+1,D,q),A+=3}c.addGroup(d,A,M===!0?1:2),d+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},zi=class i extends rt{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ac=class i extends Xe{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new ze(r,3)),this.setAttribute("normal",new ze(r.slice(),3)),this.setAttribute("uv",new ze(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(g){let v=new U,M=new U,w=new U;for(let y=0;y<t.length;y+=3)u(t[y+0],v),u(t[y+1],M),u(t[y+2],w),l(v,M,w,g)}function l(g,v,M,w){let y=w+1,E=[];for(let A=0;A<=y;A++){E[A]=[];let b=g.clone().lerp(M,A/y),S=v.clone().lerp(M,A/y),z=y-A;for(let F=0;F<=z;F++)F===0&&A===y?E[A][F]=b:E[A][F]=b.clone().lerp(S,F/z)}for(let A=0;A<y;A++)for(let b=0;b<2*(y-A)-1;b++){let S=Math.floor(b/2);b%2===0?(p(E[A][S+1]),p(E[A+1][S]),p(E[A][S])):(p(E[A][S+1]),p(E[A+1][S+1]),p(E[A+1][S]))}}function c(g){let v=new U;for(let M=0;M<r.length;M+=3)v.x=r[M+0],v.y=r[M+1],v.z=r[M+2],v.normalize().multiplyScalar(g),r[M+0]=v.x,r[M+1]=v.y,r[M+2]=v.z}function h(){let g=new U;for(let v=0;v<r.length;v+=3){g.x=r[v+0],g.y=r[v+1],g.z=r[v+2];let M=m(g)/2/Math.PI+.5,w=d(g)/Math.PI+.5;o.push(M,1-w)}_(),f()}function f(){for(let g=0;g<o.length;g+=6){let v=o[g+0],M=o[g+2],w=o[g+4],y=Math.max(v,M,w),E=Math.min(v,M,w);y>.9&&E<.1&&(v<.2&&(o[g+0]+=1),M<.2&&(o[g+2]+=1),w<.2&&(o[g+4]+=1))}}function p(g){r.push(g.x,g.y,g.z)}function u(g,v){let M=g*3;v.x=e[M+0],v.y=e[M+1],v.z=e[M+2]}function _(){let g=new U,v=new U,M=new U,w=new U,y=new xe,E=new xe,A=new xe;for(let b=0,S=0;b<r.length;b+=9,S+=6){g.set(r[b+0],r[b+1],r[b+2]),v.set(r[b+3],r[b+4],r[b+5]),M.set(r[b+6],r[b+7],r[b+8]),y.set(o[S+0],o[S+1]),E.set(o[S+2],o[S+3]),A.set(o[S+4],o[S+5]),w.copy(g).add(v).add(M).divideScalar(3);let z=m(w);x(y,S+0,g,z),x(E,S+2,v,z),x(A,S+4,M,z)}}function x(g,v,M,w){w<0&&g.x===1&&(o[v]=g.x-1),M.x===0&&M.z===0&&(o[v]=w/2/Math.PI+.5)}function m(g){return Math.atan2(g.z,-g.x)}function d(g){return Math.atan2(-g.y,Math.sqrt(g.x*g.x+g.z*g.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}},On=class extends $o{constructor(e){super(e),this.uuid=fi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new $o().fromJSON(s))}return this}},U_={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Pf(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,f,p,u;if(n&&(r=O_(i,e,r,t)),i.length>80*t){a=c=i[0],l=h=i[1];for(let _=t;_<s;_+=t)f=i[_],p=i[_+1],f<a&&(a=f),p<l&&(l=p),f>c&&(c=f),p>h&&(h=p);u=Math.max(c-a,h-l),u=u!==0?32767/u:0}return Cr(r,o,t,a,l,u,0),o}};Ii=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];$u(e),Ku(n,e);let o=e.length;t.forEach($u);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Ku(n,t[l]);let a=U_.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};vn=class i extends Xe{constructor(e=new On([new xe(.5,.5),new xe(-.5,.5),new xe(-.5,-.5),new xe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new ze(s,3)),this.setAttribute("uv",new ze(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1,p=t.bevelEnabled!==void 0?t.bevelEnabled:!0,u=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:u-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,d=t.extrudePath,g=t.UVGenerator!==void 0?t.UVGenerator:K_,v,M=!1,w,y,E,A;d&&(v=d.getSpacedPoints(h),M=!0,p=!1,w=d.computeFrenetFrames(h,!1),y=new U,E=new U,A=new U),p||(m=0,u=0,_=0,x=0);let b=a.extractPoints(c),S=b.shape,z=b.holes;if(!Ii.isClockWise(S)){S=S.reverse();for(let P=0,te=z.length;P<te;P++){let J=z[P];Ii.isClockWise(J)&&(z[P]=J.reverse())}}let q=Ii.triangulateShape(S,z),D=S;for(let P=0,te=z.length;P<te;P++){let J=z[P];S=S.concat(J)}function O(P,te,J){return te||console.error("THREE.ExtrudeGeometry: vec does not exist"),P.clone().addScaledVector(te,J)}let k=S.length,B=q.length;function Y(P,te,J){let ue,ne,Ee,pe=P.x-te.x,R=P.y-te.y,T=J.x-P.x,Z=J.y-P.y,ve=pe*pe+R*R,_e=pe*Z-R*T;if(Math.abs(_e)>Number.EPSILON){let ge=Math.sqrt(ve),Ue=Math.sqrt(T*T+Z*Z),Ae=te.x-R/ge,X=te.y+pe/ge,I=J.x-Z/Ue,N=J.y+T/Ue,L=((I-Ae)*Z-(N-X)*T)/(pe*Z-R*T);ue=Ae+pe*L-P.x,ne=X+R*L-P.y;let V=ue*ue+ne*ne;if(V<=2)return new xe(ue,ne);Ee=Math.sqrt(V/2)}else{let ge=!1;pe>Number.EPSILON?T>Number.EPSILON&&(ge=!0):pe<-Number.EPSILON?T<-Number.EPSILON&&(ge=!0):Math.sign(R)===Math.sign(Z)&&(ge=!0),ge?(ue=-R,ne=pe,Ee=Math.sqrt(ve)):(ue=pe,ne=R,Ee=Math.sqrt(ve/2))}return new xe(ue/Ee,ne/Ee)}let W=[];for(let P=0,te=D.length,J=te-1,ue=P+1;P<te;P++,J++,ue++)J===te&&(J=0),ue===te&&(ue=0),W[P]=Y(D[P],D[J],D[ue]);let K=[],ee,me=W.concat();for(let P=0,te=z.length;P<te;P++){let J=z[P];ee=[];for(let ue=0,ne=J.length,Ee=ne-1,pe=ue+1;ue<ne;ue++,Ee++,pe++)Ee===ne&&(Ee=0),pe===ne&&(pe=0),ee[ue]=Y(J[ue],J[Ee],J[pe]);K.push(ee),me=me.concat(ee)}for(let P=0;P<m;P++){let te=P/m,J=u*Math.cos(te*Math.PI/2),ue=_*Math.sin(te*Math.PI/2)+x;for(let ne=0,Ee=D.length;ne<Ee;ne++){let pe=O(D[ne],W[ne],ue);Q(pe.x,pe.y,-J)}for(let ne=0,Ee=z.length;ne<Ee;ne++){let pe=z[ne];ee=K[ne];for(let R=0,T=pe.length;R<T;R++){let Z=O(pe[R],ee[R],ue);Q(Z.x,Z.y,-J)}}}let $=_+x;for(let P=0;P<k;P++){let te=p?O(S[P],me[P],$):S[P];M?(E.copy(w.normals[0]).multiplyScalar(te.x),y.copy(w.binormals[0]).multiplyScalar(te.y),A.copy(v[0]).add(E).add(y),Q(A.x,A.y,A.z)):Q(te.x,te.y,0)}for(let P=1;P<=h;P++)for(let te=0;te<k;te++){let J=p?O(S[te],me[te],$):S[te];M?(E.copy(w.normals[P]).multiplyScalar(J.x),y.copy(w.binormals[P]).multiplyScalar(J.y),A.copy(v[P]).add(E).add(y),Q(A.x,A.y,A.z)):Q(J.x,J.y,f/h*P)}for(let P=m-1;P>=0;P--){let te=P/m,J=u*Math.cos(te*Math.PI/2),ue=_*Math.sin(te*Math.PI/2)+x;for(let ne=0,Ee=D.length;ne<Ee;ne++){let pe=O(D[ne],W[ne],ue);Q(pe.x,pe.y,f+J)}for(let ne=0,Ee=z.length;ne<Ee;ne++){let pe=z[ne];ee=K[ne];for(let R=0,T=pe.length;R<T;R++){let Z=O(pe[R],ee[R],ue);M?Q(Z.x,Z.y+v[h-1].y,v[h-1].x+J):Q(Z.x,Z.y,f+J)}}}se(),Me();function se(){let P=s.length/3;if(p){let te=0,J=k*te;for(let ue=0;ue<B;ue++){let ne=q[ue];we(ne[2]+J,ne[1]+J,ne[0]+J)}te=h+m*2,J=k*te;for(let ue=0;ue<B;ue++){let ne=q[ue];we(ne[0]+J,ne[1]+J,ne[2]+J)}}else{for(let te=0;te<B;te++){let J=q[te];we(J[2],J[1],J[0])}for(let te=0;te<B;te++){let J=q[te];we(J[0]+k*h,J[1]+k*h,J[2]+k*h)}}n.addGroup(P,s.length/3-P,0)}function Me(){let P=s.length/3,te=0;Se(D,te),te+=D.length;for(let J=0,ue=z.length;J<ue;J++){let ne=z[J];Se(ne,te),te+=ne.length}n.addGroup(P,s.length/3-P,1)}function Se(P,te){let J=P.length;for(;--J>=0;){let ue=J,ne=J-1;ne<0&&(ne=P.length-1);for(let Ee=0,pe=h+m*2;Ee<pe;Ee++){let R=k*Ee,T=k*(Ee+1),Z=te+ue+R,ve=te+ne+R,_e=te+ne+T,ge=te+ue+T;Ie(Z,ve,_e,ge)}}}function Q(P,te,J){l.push(P),l.push(te),l.push(J)}function we(P,te,J){G(P),G(te),G(J);let ue=s.length/3,ne=g.generateTopUV(n,s,ue-3,ue-2,ue-1);re(ne[0]),re(ne[1]),re(ne[2])}function Ie(P,te,J,ue){G(P),G(te),G(ue),G(te),G(J),G(ue);let ne=s.length/3,Ee=g.generateSideWallUV(n,s,ne-6,ne-3,ne-2,ne-1);re(Ee[0]),re(Ee[1]),re(Ee[3]),re(Ee[1]),re(Ee[2]),re(Ee[3])}function G(P){s.push(l[P*3+0]),s.push(l[P*3+1]),s.push(l[P*3+2])}function re(P){r.push(P.x),r.push(P.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Q_(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new rc[s.type]().fromJSON(s)),new i(n,e.options)}},K_={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new xe(r,o),new xe(a,l),new xe(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],f=e[n*3+2],p=e[s*3],u=e[s*3+1],_=e[s*3+2],x=e[r*3],m=e[r*3+1],d=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new xe(o,1-l),new xe(c,1-f),new xe(p,1-_),new xe(x,1-d)]:[new xe(a,1-l),new xe(h,1-f),new xe(u,1-_),new xe(m,1-d)]}};Ko=class i extends ac{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Qo=class i extends Xe{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],h=[],f=e,p=(t-e)/s,u=new U,_=new xe;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){let d=r+m/n*o;u.x=f*Math.cos(d),u.y=f*Math.sin(d),l.push(u.x,u.y,u.z),c.push(0,0,1),_.x=(u.x/t+1)/2,_.y=(u.y/t+1)/2,h.push(_.x,_.y)}f+=p}for(let x=0;x<s;x++){let m=x*(n+1);for(let d=0;d<n;d++){let g=d+m,v=g,M=g+n+1,w=g+n+2,y=g+1;a.push(v,M,y),a.push(M,w,y)}}this.setIndex(a),this.setAttribute("position",new ze(l,3)),this.setAttribute("normal",new ze(c,3)),this.setAttribute("uv",new ze(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},jo=class i extends Xe{constructor(e=new On([new xe(0,.5),new xe(-.5,-.5),new xe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new ze(s,3)),this.setAttribute("normal",new ze(r,3)),this.setAttribute("uv",new ze(o,2));function c(h){let f=s.length/3,p=h.extractPoints(t),u=p.shape,_=p.holes;Ii.isClockWise(u)===!1&&(u=u.reverse());for(let m=0,d=_.length;m<d;m++){let g=_[m];Ii.isClockWise(g)===!0&&(_[m]=g.reverse())}let x=Ii.triangulateShape(u,_);for(let m=0,d=_.length;m<d;m++){let g=_[m];u=u.concat(g)}for(let m=0,d=u.length;m<d;m++){let g=u[m];s.push(g.x,g.y,0),r.push(0,0,1),o.push(g.x,g.y)}for(let m=0,d=x.length;m<d;m++){let g=x[m],v=g[0]+f,M=g[1]+f,w=g[2]+f;n.push(v,M,w),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return j_(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];n.push(o)}return new i(n,e.curveSegments)}};gi=class i extends Xe{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],f=new U,p=new U,u=[],_=[],x=[],m=[];for(let d=0;d<=n;d++){let g=[],v=d/n,M=0;d===0&&o===0?M=.5/t:d===n&&l===Math.PI&&(M=-.5/t);for(let w=0;w<=t;w++){let y=w/t;f.x=-e*Math.cos(s+y*r)*Math.sin(o+v*a),f.y=e*Math.cos(o+v*a),f.z=e*Math.sin(s+y*r)*Math.sin(o+v*a),_.push(f.x,f.y,f.z),p.copy(f).normalize(),x.push(p.x,p.y,p.z),m.push(y+M,1-v),g.push(c++)}h.push(g)}for(let d=0;d<n;d++)for(let g=0;g<t;g++){let v=h[d][g+1],M=h[d][g],w=h[d+1][g],y=h[d+1][g+1];(d!==0||o>0)&&u.push(v,M,y),(d!==n-1||l<Math.PI)&&u.push(M,w,y)}this.setIndex(u),this.setAttribute("position",new ze(_,3)),this.setAttribute("normal",new ze(x,3)),this.setAttribute("uv",new ze(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},In=class i extends Xe{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new U,f=new U,p=new U;for(let u=0;u<=n;u++)for(let _=0;_<=s;_++){let x=_/s*r,m=u/n*Math.PI*2;f.x=(e+t*Math.cos(m))*Math.cos(x),f.y=(e+t*Math.cos(m))*Math.sin(x),f.z=t*Math.sin(m),a.push(f.x,f.y,f.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),p.subVectors(f,h).normalize(),l.push(p.x,p.y,p.z),c.push(_/s),c.push(u/n)}for(let u=1;u<=n;u++)for(let _=1;_<=s;_++){let x=(s+1)*u+_-1,m=(s+1)*(u-1)+_-1,d=(s+1)*(u-1)+_,g=(s+1)*u+_;o.push(x,m,g),o.push(m,d,g)}this.setIndex(o),this.setAttribute("position",new ze(a,3)),this.setAttribute("normal",new ze(l,3)),this.setAttribute("uv",new ze(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},ea=class extends It{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Pe=class extends Qn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_f,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Kt=class extends Pe{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new xe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return qt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Re(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Re(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Re(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};Ys=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},hc=class extends Ys{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Zh,endingEnd:Zh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Jh:r=e,a=2*t-n;break;case $h:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Jh:o=e,l=2*n-t;break;case $h:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,f=this._offsetNext,p=this._weightPrev,u=this._weightNext,_=(n-t)/(s-t),x=_*_,m=x*_,d=-p*m+2*p*x-p*_,g=(1+p)*m+(-1.5-2*p)*x+(-.5+p)*_+1,v=(-1-u)*m+(1.5+u)*x+.5*_,M=u*m-u*x;for(let w=0;w!==a;++w)r[w]=d*o[h+w]+g*o[c+w]+v*o[l+w]+M*o[f+w];return r}},uc=class extends Ys{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),f=1-h;for(let p=0;p!==a;++p)r[p]=o[c+p]*f+o[l+p]*h;return r}},fc=class extends Ys{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Hn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=To(t,this.TimeBufferType),this.values=To(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:To(e.times,Array),values:To(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new fc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new uc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new hc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ro:t=this.InterpolantFactoryMethodDiscrete;break;case Co:t=this.InterpolantFactoryMethodLinear;break;case Ka:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ro;case this.InterpolantFactoryMethodLinear:return Co;case this.InterpolantFactoryMethodSmooth:return Ka}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&ev(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ka,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let f=a*n,p=f-n,u=f+n;for(let _=0;_!==n;++_){let x=t[f+_];if(x!==t[p+_]||x!==t[u+_]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let f=a*n,p=o*n;for(let u=0;u!==n;++u)t[p+u]=t[f+u]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Hn.prototype.TimeBufferType=Float32Array;Hn.prototype.ValueBufferType=Float32Array;Hn.prototype.DefaultInterpolation=Co;os=class extends Hn{};os.prototype.ValueTypeName="bool";os.prototype.ValueBufferType=Array;os.prototype.DefaultInterpolation=Ro;os.prototype.InterpolantFactoryMethodLinear=void 0;os.prototype.InterpolantFactoryMethodSmooth=void 0;dc=class extends Hn{};dc.prototype.ValueTypeName="color";pc=class extends Hn{};pc.prototype.ValueTypeName="number";mc=class extends Ys{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)Kn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Lr=class extends Hn{InterpolantFactoryMethodLinear(e){return new mc(this.times,this.values,this.getValueSize(),e)}};Lr.prototype.ValueTypeName="quaternion";Lr.prototype.DefaultInterpolation=Co;Lr.prototype.InterpolantFactoryMethodSmooth=void 0;as=class extends Hn{};as.prototype.ValueTypeName="string";as.prototype.ValueBufferType=Array;as.prototype.DefaultInterpolation=Ro;as.prototype.InterpolantFactoryMethodLinear=void 0;as.prototype.InterpolantFactoryMethodSmooth=void 0;gc=class extends Hn{};gc.prototype.ValueTypeName="vector";Qu={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},xc=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,p=c.length;f<p;f+=2){let u=c[f],_=c[f+1];if(u.global&&(u.lastIndex=0),u.test(h))return _}return null}}},tv=new xc,Dr=class{constructor(e){this.manager=e!==void 0?e:tv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Dr.DEFAULT_MATERIAL_NAME="__DEFAULT";_c=class extends Dr{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Qu.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=br("img");function l(){h(),Qu.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(f){h(),s&&s(f),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}},ta=class extends Dr{constructor(e){super(e)}load(e,t,n,s){let r=new xn,o=new _c(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Zs=class extends Pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Js=class extends Zs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Re(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Al=new lt,ju=new U,ef=new U,Ur=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xe(512,512),this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wr,this._frameExtents=new xe(1,1),this._viewportCount=1,this._viewports=[new Et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;ju.setFromMatrixPosition(e.matrixWorld),t.position.copy(ju),ef.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ef),t.updateMatrixWorld(),Al.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Al),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Al)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},vc=class extends Ur{constructor(){super(new Jt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Uo*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},$s=class extends Zs{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new vc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},tf=new lt,gr=new U,Rl=new U,yc=class extends Ur{constructor(){super(new Jt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new xe(4,2),this._viewportCount=6,this._viewports=[new Et(2,1,1,1),new Et(0,1,1,1),new Et(3,1,1,1),new Et(1,1,1,1),new Et(3,0,1,1),new Et(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),gr.setFromMatrixPosition(e.matrixWorld),n.position.copy(gr),Rl.copy(n.position),Rl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Rl),n.updateMatrixWorld(),s.makeTranslation(-gr.x,-gr.y,-gr.z),tf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(tf)}},na=class extends Zs{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new yc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Mc=class extends Ur{constructor(){super(new Ws(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ks=class extends Zs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.shadow=new Mc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},ia=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=nf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=nf();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};Nc="\\[\\]\\.:\\/",nv=new RegExp("["+Nc+"]","g"),zc="[^"+Nc+"]",iv="[^"+Nc.replace("\\.","")+"]",sv=/((?:WC+[\/:])*)/.source.replace("WC",zc),rv=/(WCOD+)?/.source.replace("WCOD",iv),ov=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",zc),av=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",zc),lv=new RegExp("^"+sv+rv+ov+av+"$"),cv=["material","materials","bones","map"],bc=class{constructor(e,t,n){let s=n||bt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},bt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(nv,"")}static parseTrackName(e){let t=lv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);cv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};bt.Composite=bc;bt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};bt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};bt.prototype.GetterByBindingType=[bt.prototype._getValue_direct,bt.prototype._getValue_array,bt.prototype._getValue_arrayElement,bt.prototype._getValue_toArray];bt.prototype.SetterByBindingTypeAndVersioning=[[bt.prototype._setValue_direct,bt.prototype._setValue_direct_setNeedsUpdate,bt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_array,bt.prototype._setValue_array_setNeedsUpdate,bt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_arrayElement,bt.prototype._setValue_arrayElement_setNeedsUpdate,bt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_fromArray,bt.prototype._setValue_fromArray_setNeedsUpdate,bt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];Kv=new Float32Array(1),sa=class{constructor(e,t,n=0,s=1/0){this.ray=new ks(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Er,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Ec(e,this,n,t),n.sort(sf),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Ec(e[s],this,n,t);return n.sort(sf),n}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wc)});var Gf={};Hd(Gf,{computeMikkTSpaceTangents:()=>pv,computeMorphedAttributes:()=>Mv,deepCloneAttribute:()=>mv,deinterleaveAttribute:()=>ga,deinterleaveGeometry:()=>xv,estimateBytesUsed:()=>_v,interleaveAttributes:()=>gv,mergeAttributes:()=>ma,mergeBufferAttributes:()=>Sv,mergeBufferGeometries:()=>wv,mergeGeometries:()=>ei,mergeGroups:()=>bv,mergeVertices:()=>vv,toCreasedNormals:()=>Ev,toTrianglesDrawMode:()=>yv});function pv(i,e,t=!0){if(!e||!e.isReady)throw new Error("BufferGeometryUtils: Initialized MikkTSpace library required.");if(!i.hasAttribute("position")||!i.hasAttribute("normal")||!i.hasAttribute("uv"))throw new Error('BufferGeometryUtils: Tangents require "position", "normal", and "uv" attributes.');function n(o){if(o.normalized||o.isInterleavedBufferAttribute){let a=new Float32Array(o.count*o.itemSize);for(let l=0,c=0;l<o.count;l++)a[c++]=o.getX(l),a[c++]=o.getY(l),o.itemSize>2&&(a[c++]=o.getZ(l));return a}return o.array instanceof Float32Array?o.array:new Float32Array(o.array)}let s=i.index?i.toNonIndexed():i,r=e.generateTangents(n(s.attributes.position),n(s.attributes.normal),n(s.attributes.uv));if(t)for(let o=3;o<r.length;o+=4)r[o]*=-1;return s.setAttribute("tangent",new tt(r,4)),i!==s&&i.copy(s),i}function ei(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Xe,c=0;for(let h=0;h<i.length;++h){let f=i[h],p=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let u in f.attributes){if(!n.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+u+'" attribute exists among all geometries, or in none of them.'),null;r[u]===void 0&&(r[u]=[]),r[u].push(f.attributes[u]),p++}if(p!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let u in f.morphAttributes){if(!s.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[u]===void 0&&(o[u]=[]),o[u].push(f.morphAttributes[u])}if(e){let u;if(t)u=f.index.count;else if(f.attributes.position!==void 0)u=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,u,h),c+=u}}if(t){let h=0,f=[];for(let p=0;p<i.length;++p){let u=i[p].index;for(let _=0;_<u.count;++_)f.push(u.getX(_)+h);h+=i[p].attributes.position.count}l.setIndex(f)}for(let h in r){let f=ma(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(let h in o){let f=o[h][0].length;if(f===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let p=0;p<f;++p){let u=[];for(let x=0;x<o[h].length;++x)u.push(o[h][x][p]);let _=ma(u);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(_)}}return l}function ma(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.array.length}let o=new e(r),a=0;for(let c=0;c<i.length;++c)o.set(i[c].array,a),a+=i[c].array.length;let l=new tt(o,t,n);return s!==void 0&&(l.gpuType=s),l}function mv(i){return i.isInstancedInterleavedBufferAttribute||i.isInterleavedBufferAttribute?ga(i):i.isInstancedBufferAttribute?new is().copy(i):new tt().copy(i)}function gv(i){let e,t=0,n=0;for(let c=0,h=i.length;c<h;++c){let f=i[c];if(e===void 0&&(e=f.array.constructor),e!==f.array.constructor)return console.error("AttributeBuffers of different types cannot be interleaved"),null;t+=f.array.length,n+=f.itemSize}let s=new Tr(new e(t),n),r=0,o=[],a=["getX","getY","getZ","getW"],l=["setX","setY","setZ","setW"];for(let c=0,h=i.length;c<h;c++){let f=i[c],p=f.itemSize,u=f.count,_=new Xs(s,p,r,f.normalized);o.push(_),r+=p;for(let x=0;x<u;x++)for(let m=0;m<p;m++)_[l[m]](x,f[a[m]](x))}return o}function ga(i){let e=i.data.array.constructor,t=i.count,n=i.itemSize,s=i.normalized,r=new e(t*n),o;i.isInstancedInterleavedBufferAttribute?o=new is(r,n,s,i.meshPerAttribute):o=new tt(r,n,s);for(let a=0;a<t;a++)o.setX(a,i.getX(a)),n>=2&&o.setY(a,i.getY(a)),n>=3&&o.setZ(a,i.getZ(a)),n>=4&&o.setW(a,i.getW(a));return o}function xv(i){let e=i.attributes,t=i.morphTargets,n=new Map;for(let s in e){let r=e[s];r.isInterleavedBufferAttribute&&(n.has(r)||n.set(r,ga(r)),e[s]=n.get(r))}for(let s in t){let r=t[s];r.isInterleavedBufferAttribute&&(n.has(r)||n.set(r,ga(r)),t[s]=n.get(r))}}function _v(i){let e=0;for(let n in i.attributes){let s=i.getAttribute(n);e+=s.count*s.itemSize*s.array.BYTES_PER_ELEMENT}let t=i.getIndex();return e+=t?t.count*t.itemSize*t.array.BYTES_PER_ELEMENT:0,e}function vv(i,e=1e-4){e=Math.max(e,Number.EPSILON);let t={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count,o=0,a=Object.keys(i.attributes),l={},c={},h=[],f=["getX","getY","getZ","getW"],p=["setX","setY","setZ","setW"];for(let g=0,v=a.length;g<v;g++){let M=a[g],w=i.attributes[M];l[M]=new tt(new w.array.constructor(w.count*w.itemSize),w.itemSize,w.normalized);let y=i.morphAttributes[M];y&&(c[M]=new tt(new y.array.constructor(y.count*y.itemSize),y.itemSize,y.normalized))}let u=e*.5,_=Math.log10(1/e),x=Math.pow(10,_),m=u*x;for(let g=0;g<r;g++){let v=n?n.getX(g):g,M="";for(let w=0,y=a.length;w<y;w++){let E=a[w],A=i.getAttribute(E),b=A.itemSize;for(let S=0;S<b;S++)M+=`${~~(A[f[S]](v)*x+m)},`}if(M in t)h.push(t[M]);else{for(let w=0,y=a.length;w<y;w++){let E=a[w],A=i.getAttribute(E),b=i.morphAttributes[E],S=A.itemSize,z=l[E],F=c[E];for(let q=0;q<S;q++){let D=f[q],O=p[q];if(z[O](o,A[D](v)),b)for(let k=0,B=b.length;k<B;k++)F[k][O](o,b[k][D](v))}}t[M]=o,h.push(o),o++}}let d=i.clone();for(let g in i.attributes){let v=l[g];if(d.setAttribute(g,new tt(v.array.slice(0,o*v.itemSize),v.itemSize,v.normalized)),g in c)for(let M=0;M<c[g].length;M++){let w=c[g][M];d.morphAttributes[g][M]=new tt(w.array.slice(0,o*w.itemSize),w.itemSize,w.normalized)}}return d.setIndex(h),d}function yv(i,e){if(e===mf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Ic||e===gf){let t=i.getIndex();if(t===null){let o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Ic)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function Mv(i){let e=new U,t=new U,n=new U,s=new U,r=new U,o=new U,a=new U,l=new U,c=new U;function h(W,K,ee,me,$,se,Me,Se){e.fromBufferAttribute(K,$),t.fromBufferAttribute(K,se),n.fromBufferAttribute(K,Me);let Q=W.morphTargetInfluences;if(ee&&Q){a.set(0,0,0),l.set(0,0,0),c.set(0,0,0);for(let we=0,Ie=ee.length;we<Ie;we++){let G=Q[we],re=ee[we];G!==0&&(s.fromBufferAttribute(re,$),r.fromBufferAttribute(re,se),o.fromBufferAttribute(re,Me),me?(a.addScaledVector(s,G),l.addScaledVector(r,G),c.addScaledVector(o,G)):(a.addScaledVector(s.sub(e),G),l.addScaledVector(r.sub(t),G),c.addScaledVector(o.sub(n),G)))}e.add(a),t.add(l),n.add(c)}W.isSkinnedMesh&&(W.applyBoneTransform($,e),W.applyBoneTransform(se,t),W.applyBoneTransform(Me,n)),Se[$*3+0]=e.x,Se[$*3+1]=e.y,Se[$*3+2]=e.z,Se[se*3+0]=t.x,Se[se*3+1]=t.y,Se[se*3+2]=t.z,Se[Me*3+0]=n.x,Se[Me*3+1]=n.y,Se[Me*3+2]=n.z}let f=i.geometry,p=i.material,u,_,x,m=f.index,d=f.attributes.position,g=f.morphAttributes.position,v=f.morphTargetsRelative,M=f.attributes.normal,w=f.morphAttributes.position,y=f.groups,E=f.drawRange,A,b,S,z,F,q,D,O=new Float32Array(d.count*d.itemSize),k=new Float32Array(M.count*M.itemSize);if(m!==null)if(Array.isArray(p))for(A=0,S=y.length;A<S;A++)for(F=y[A],q=Math.max(F.start,E.start),D=Math.min(F.start+F.count,E.start+E.count),b=q,z=D;b<z;b+=3)u=m.getX(b),_=m.getX(b+1),x=m.getX(b+2),h(i,d,g,v,u,_,x,O),h(i,M,w,v,u,_,x,k);else for(q=Math.max(0,E.start),D=Math.min(m.count,E.start+E.count),A=q,S=D;A<S;A+=3)u=m.getX(A),_=m.getX(A+1),x=m.getX(A+2),h(i,d,g,v,u,_,x,O),h(i,M,w,v,u,_,x,k);else if(Array.isArray(p))for(A=0,S=y.length;A<S;A++)for(F=y[A],q=Math.max(F.start,E.start),D=Math.min(F.start+F.count,E.start+E.count),b=q,z=D;b<z;b+=3)u=b,_=b+1,x=b+2,h(i,d,g,v,u,_,x,O),h(i,M,w,v,u,_,x,k);else for(q=Math.max(0,E.start),D=Math.min(d.count,E.start+E.count),A=q,S=D;A<S;A+=3)u=A,_=A+1,x=A+2,h(i,d,g,v,u,_,x,O),h(i,M,w,v,u,_,x,k);let B=new ze(O,3),Y=new ze(k,3);return{positionAttribute:d,normalAttribute:M,morphedPositionAttribute:B,morphedNormalAttribute:Y}}function bv(i){if(i.groups.length===0)return console.warn("THREE.BufferGeometryUtils.mergeGroups(): No groups are defined. Nothing to merge."),i;let e=i.groups;if(e=e.sort((o,a)=>o.materialIndex!==a.materialIndex?o.materialIndex-a.materialIndex:o.start-a.start),i.getIndex()===null){let o=i.getAttribute("position"),a=[];for(let l=0;l<o.count;l+=3)a.push(l,l+1,l+2);i.setIndex(a)}let t=i.getIndex(),n=[];for(let o=0;o<e.length;o++){let a=e[o],l=a.start,c=l+a.count;for(let h=l;h<c;h++)n.push(t.getX(h))}i.dispose(),i.setIndex(n);let s=0;for(let o=0;o<e.length;o++){let a=e[o];a.start=s,s+=a.count}let r=e[0];i.groups=[r];for(let o=1;o<e.length;o++){let a=e[o];r.materialIndex===a.materialIndex?r.count+=a.count:(r=a,i.groups.push(r))}return i}function Ev(i,e=Math.PI/3){let t=Math.cos(e),n=(1+1e-10)*100,s=[new U,new U,new U],r=new U,o=new U,a=new U,l=new U;function c(x){let m=~~(x.x*n),d=~~(x.y*n),g=~~(x.z*n);return`${m},${d},${g}`}let h=i.index?i.toNonIndexed():i,f=h.attributes.position,p={};for(let x=0,m=f.count/3;x<m;x++){let d=3*x,g=s[0].fromBufferAttribute(f,d+0),v=s[1].fromBufferAttribute(f,d+1),M=s[2].fromBufferAttribute(f,d+2);r.subVectors(M,v),o.subVectors(g,v);let w=new U().crossVectors(r,o).normalize();for(let y=0;y<3;y++){let E=s[y],A=c(E);A in p||(p[A]=[]),p[A].push(w)}}let u=new Float32Array(f.count*3),_=new tt(u,3,!1);for(let x=0,m=f.count/3;x<m;x++){let d=3*x,g=s[0].fromBufferAttribute(f,d+0),v=s[1].fromBufferAttribute(f,d+1),M=s[2].fromBufferAttribute(f,d+2);r.subVectors(M,v),o.subVectors(g,v),a.crossVectors(r,o).normalize();for(let w=0;w<3;w++){let y=s[w],E=c(y),A=p[E];l.set(0,0,0);for(let b=0,S=A.length;b<S;b++){let z=A[b];a.dot(z)>t&&l.add(z)}l.normalize(),_.setXYZ(d+w,l.x,l.y,l.z)}}return h.setAttribute("normal",_),h}function wv(i,e=!1){return console.warn("THREE.BufferGeometryUtils: mergeBufferGeometries() has been renamed to mergeGeometries()."),ei(i,e)}function Sv(i){return console.warn("THREE.BufferGeometryUtils: mergeBufferAttributes() has been renamed to mergeAttributes()."),ma(i)}var xa=gh(()=>{Lt()});(function(i){let e=i.DG=i.DG||{};e.CARS=[{id:"k86",name:"Kaze 86",sub:"Hatch leve de 1985 \xB7 4 cilindros aspirado",price:0,color:"#f4f4f0",engine:"i4",turbo:!1,redline:7800,accel:7.8,top:52,agility:1.08,tips:1,stats:{pot:3,drift:9,vel:3}},{id:"s13",name:"Sakura 180",sub:"Fastback de 1989 \xB7 4 cilindros turbo",price:9e3,color:"#c2161a",engine:"i4t",turbo:!0,redline:7400,accel:8.9,top:58,agility:1.06,tips:1,stats:{pot:4,drift:9,vel:5}},{id:"b36",name:"Bayern 36",sub:"Cup\xEA alem\xE3o de 1995 \xB7 6 em linha aspirado",price:14e3,color:"#1b2a4a",engine:"i6",turbo:!1,redline:7200,accel:9,top:60,agility:1,tips:2,stats:{pot:5,drift:7,vel:6}},{id:"s15",name:"Sylph S15",sub:"Cup\xEA japon\xEAs de 1999 \xB7 4 cilindros turbo",price:18e3,color:"#c8ccd2",engine:"i4t",turbo:!0,redline:7500,accel:9.8,top:62,agility:1.06,tips:1,stats:{pot:5,drift:9,vel:6}},{id:"z35",name:"Zetto 35",sub:"Fastback japon\xEAs de 2003 \xB7 V6 aspirado",price:24e3,color:"#d9661c",engine:"v6",turbo:!1,redline:7e3,accel:10.4,top:65,agility:1,tips:2,stats:{pot:6,drift:7,vel:7}},{id:"x100",name:"Tourer X100",sub:"Sed\xE3 japon\xEAs de 1996 \xB7 6 em linha turbo",price:28e3,color:"#e9e9e4",engine:"i6t",turbo:!0,redline:7400,accel:10.8,top:66,agility:.95,tips:1,stats:{pot:6,drift:8,vel:7}},{id:"fd7",name:"Rota-7 FD",sub:"Esportivo de 1992 \xB7 motor rotativo biturbo",price:38e3,color:"#c2161a",engine:"rotary",turbo:!0,redline:9e3,accel:11.4,top:69,agility:1.1,tips:2,stats:{pot:7,drift:9,vel:7}},{id:"mk4",name:"Sora MK4",sub:"Lenda japonesa de 1993 \xB7 6 em linha biturbo",price:55e3,color:"#e36a12",engine:"i6t",turbo:!0,redline:7200,accel:12.8,top:73,agility:1,tips:1,stats:{pot:9,drift:8,vel:9}},{id:"r34",name:"Raijin GT-34",sub:"Cup\xEA japon\xEAs de 1999 \xB7 6 em linha biturbo",price:65e3,color:"#1c3f9e",engine:"i6rb",turbo:!0,redline:8200,accel:13.4,top:73,agility:1.02,tips:1,stats:{pot:10,drift:8,vel:9}}],e.PAINTS=["#f4f4f0","#0e0f12","#c2161a","#e36a12","#f2c200","#1c3f9e","#00a3c4","#1f8a4c","#7a2bd1","#ff4fa3","#8d949c","#3b2416","#b7e000","#0b5b55","#f1e4c9","#5c0f1c"],e.FINISHES=[{id:"gloss",name:"Brilhante"},{id:"metal",name:"Met\xE1lica"},{id:"pearl",name:"Perolizada"},{id:"matte",name:"Fosca"},{id:"chrome",name:"Cromada"}],e.GLOWS=["#ff2d6f","#00e5ff","#7cff3a","#ff8a1f","#a14bff","#ffffff","#ffe600","#2d6bff"],e.WHEEL_COLORS=["#c9ccd1","#15161a","#d4a63a","#f4f4f0","#8a5a2b","#c2161a","#1c3f9e","#3a3d44"],e.CATS=[{id:"paint",name:"Pintura",group:"Visual",free:!0},{id:"kit",name:"Body kit",group:"Visual"},{id:"wing",name:"Aerof\xF3lio",group:"Visual"},{id:"wheels",name:"Rodas",group:"Visual"},{id:"wsize",name:"Aro",group:"Visual"},{id:"hood",name:"Cap\xF4",group:"Visual"},{id:"roof",name:"Teto",group:"Visual"},{id:"susp",name:"Suspens\xE3o",group:"Visual"},{id:"tint",name:"Vidros",group:"Visual"},{id:"lights",name:"Far\xF3is",group:"Visual"},{id:"neon",name:"Neon",group:"Visual"},{id:"smoke",name:"Fuma\xE7a",group:"Visual"},{id:"engine",name:"Motor",group:"Desempenho"},{id:"turbo",name:"Turbo",group:"Desempenho"},{id:"exhaust",name:"Escape",group:"Desempenho"},{id:"tires",name:"Pneus",group:"Desempenho"},{id:"angle",name:"Kit de \xE2ngulo",group:"Desempenho"},{id:"weight",name:"Peso",group:"Desempenho"}],e.PARTS={kit:[{id:"stock",name:"Original",desc:"Carroceria de f\xE1brica.",price:0},{id:"street",name:"Street",desc:"Lip dianteiro e saias laterais.",price:1800},{id:"aero",name:"Aero GT",desc:"Lip, saias, canards e difusor traseiro.",price:4200},{id:"wide",name:"Widebody rebitado",desc:"Para-lamas alargados com rebites aparentes, no estilo das oficinas japonesas.",price:9500},{id:"widepro",name:"Widebody Pro",desc:"Para-lamas largos, lip, saias, canards e difusor completos.",price:14e3}],wing:[{id:"none",name:"Sem aerof\xF3lio",desc:"Traseira limpa.",price:0},{id:"duck",name:"Ducktail",desc:"Aba curta que prolonga a tampa traseira.",price:900},{id:"lip",name:"Asa baixa",desc:"Asa discreta colada na tampa.",price:1300},{id:"hoop",name:"Arco anos 90",desc:"O aerof\xF3lio em arco alto dos esportivos japoneses de 1990.",price:2400},{id:"gt",name:"GT Wing",desc:"Asa de competi\xE7\xE3o com suportes e endplates.",price:3400},{id:"gtbig",name:"GT Wing alto",desc:"Asa larga com suportes altos, de carro de time attack.",price:5400}],wheels:[{id:"stock",name:"Originais",desc:"Rodas de f\xE1brica de 5 raios largos.",price:0},{id:"six",name:"6 raios forjada",desc:"O cl\xE1ssico japon\xEAs de seis raios grossos.",price:1800},{id:"star",name:"Estrela 5 pontas",desc:"Cinco raios finos em estrela.",price:1500},{id:"mesh",name:"Malha",desc:"Raios cruzados em malha, estilo europeu.",price:2300},{id:"multi",name:"Multirraio",desc:"Dez raios finos.",price:2400},{id:"dish",name:"Deep dish",desc:"Aba larga e funda com raios curtos.",price:2900},{id:"fan",name:"Turbofan",desc:"Disco fechado com aletas, estilo corrida dos anos 80.",price:3100}],wsize:[{id:"s0",name:"Aro original",desc:"Pneu de perfil alto.",price:0},{id:"s1",name:'Aro +1"',desc:"Roda maior, pneu mais baixo.",price:700},{id:"s2",name:'Aro +2"',desc:"Roda grande com pneu de perfil bem baixo.",price:1400}],hood:[{id:"stock",name:"Original",desc:"Cap\xF4 na cor do carro.",price:0},{id:"vent",name:"Com sa\xEDdas de ar",desc:"Cap\xF4 na cor do carro com duas sa\xEDdas de ar.",price:1500},{id:"carbon",name:"Fibra de carbono",desc:"Cap\xF4 em fibra de carbono aparente.",price:2800},{id:"carbonvent",name:"Carbono com sa\xEDdas",desc:"Fibra de carbono com sa\xEDdas de ar.",price:3600}],roof:[{id:"stock",name:"Original",desc:"Teto na cor do carro.",price:0},{id:"carbon",name:"Fibra de carbono",desc:"Teto em fibra de carbono aparente.",price:1800},{id:"black",name:"Preto brilhante",desc:"Teto preto contrastante.",price:600}],susp:[{id:"stock",name:"Original",desc:"Altura de f\xE1brica.",price:0},{id:"low",name:"Molas esportivas",desc:"Carro 4 cm mais baixo.",price:1200},{id:"coil",name:"Coilover",desc:"Carro 7 cm mais baixo com leve cambagem.",price:2600},{id:"slam",name:"Socado",desc:"Rente ao ch\xE3o, com cambagem negativa forte.",price:3800}],tint:[{id:"none",name:"Transparentes",desc:"Vidros de f\xE1brica.",price:0},{id:"mid",name:"Fum\xEA m\xE9dio",desc:"Pel\xEDcula escura m\xE9dia.",price:400},{id:"dark",name:"Fum\xEA escuro",desc:"Pel\xEDcula bem escura.",price:800}],lights:[{id:"white",name:"Brancos",desc:"Far\xF3is de f\xE1brica.",price:0},{id:"yellow",name:"Amarelos",desc:"Far\xF3is amarelos, tradi\xE7\xE3o das corridas japonesas.",price:400},{id:"ice",name:"Azul gelo",desc:"Far\xF3is de xen\xF4nio azulados.",price:500}],neon:[{id:"none",name:"Sem neon",desc:"Sem luz embaixo do carro.",price:0},{id:"on",name:"Neon inferior",desc:"Luz embaixo do carro. A cor voc\xEA troca de gra\xE7a.",price:1600}],smoke:[{id:"white",name:"Branca",desc:"Fuma\xE7a normal de pneu.",price:0},{id:"color",name:"Colorida",desc:"Pneus de fuma\xE7a colorida. A cor voc\xEA troca de gra\xE7a.",price:1300}],engine:[{id:"stock",name:"Original",desc:"Motor de f\xE1brica.",price:0,pow:1},{id:"st1",name:"Est\xE1gio 1",desc:"Filtro, remap e velas. +10% de pot\xEAncia.",price:3e3,pow:1.1},{id:"st2",name:"Est\xE1gio 2",desc:"Comando e bicos maiores. +22% de pot\xEAncia.",price:7e3,pow:1.22},{id:"st3",name:"Est\xE1gio 3",desc:"Motor forjado. +38% de pot\xEAncia.",price:14e3,pow:1.38}],turbo:[{id:"stock",name:"Original",desc:"Indu\xE7\xE3o de f\xE1brica.",price:0,pow:1},{id:"kit",name:"Kit turbo",desc:"Turbo e v\xE1lvula de al\xEDvio aberta. +12% de pot\xEAncia e o som do turbo.",price:5500,pow:1.12},{id:"big",name:"Turbo grande",desc:"Turbina grande com al\xEDvio barulhento. +20% de pot\xEAncia.",price:9500,pow:1.2}],exhaust:[{id:"stock",name:"Original",desc:"Escape silencioso de f\xE1brica.",price:0,pow:1},{id:"sport",name:"Esportivo",desc:"Mais ronco. +3% de pot\xEAncia.",price:1500,pow:1.03},{id:"straight",name:"Direto",desc:"Escape reto: alto, com estouros e chamas. +6% de pot\xEAncia.",price:3400,pow:1.06}],tires:[{id:"street",name:"De rua",desc:"Pneus comuns.",price:0},{id:"sport",name:"Esportivos",desc:"Mais tra\xE7\xE3o na sa\xEDda das curvas.",price:1600},{id:"drift",name:"De drift",desc:"Derrapam f\xE1cil e seguram o \xE2ngulo por mais tempo.",price:3200}],angle:[{id:"stock",name:"Original",desc:"Ester\xE7o de f\xE1brica.",price:0},{id:"kit",name:"Kit de \xE2ngulo",desc:"Mais ester\xE7o: \xE2ngulos de drift maiores sem rodar.",price:2600},{id:"pro",name:"Kit de \xE2ngulo Pro",desc:"Ester\xE7o m\xE1ximo, de carro de competi\xE7\xE3o.",price:5200}],weight:[{id:"stock",name:"Original",desc:"Interior completo.",price:0},{id:"lite",name:"Al\xEDvio de peso",desc:"Sem banco traseiro e forros. Acelera e vira mais r\xE1pido.",price:2200},{id:"race",name:"Prepara\xE7\xE3o de pista",desc:"Interior depenado e gaiola. O mais \xE1gil.",price:4800}]},e.defaultCfg=function(t){let n={};for(let r in e.PARTS)n[r]=e.PARTS[r][0].id;let s={};for(let r in e.PARTS)s[r]=[e.PARTS[r][0].id];return{eq:n,owned:s,paint:t.color,finish:"gloss",wheelColor:"#c9ccd1",neonColor:"#00e5ff",smokeColor:"#ff2d6f",caliper:"#c2161a"}},e.part=function(t,n){let s=e.PARTS[t];return s.find(r=>r.id===n)||s[0]},e.carStats=function(t,n){let s=n.eq,r=e.part("engine",s.engine).pow*e.part("turbo",s.turbo).pow*e.part("exhaust",s.exhaust).pow,o=s.weight==="race"?1.1:s.weight==="lite"?1.05:1,a=s.tires;return{accel:t.accel*r*o,top:t.top*(1+(r-1)*.45),steer:1.95*t.agility*(o>1?1+(o-1)*.6:1),grip:a==="sport"?10.5:9,driftGrip:a==="drift"?2.3:a==="sport"?2.8:2.6,driftHold:a==="drift"?1.6:2.5,maxSlip:s.angle==="pro"?1.2:s.angle==="kit"?1.06:.92,redline:t.redline,turbo:t.turbo||s.turbo!=="stock",turboLvl:s.turbo==="big"?2:s.turbo==="kit"?1:t.turbo?.7:0,exhaust:s.exhaust}}})(typeof window<"u"?window:globalThis);(function(i){let e=i.DG=i.DG||{},t=[.24,.4,.56,.72,.87,1],n=[1,.82,.64,.5,.4,.32],s=950;e.newCar=function(o,a,l){return{x:o,z:a,h:l,vx:0,vz:0,w:0,steer:0,drift:0,gear:0,shiftT:0,rpmN:.1,rpm:s,slip:0,speed:0,vF:0,boost:0,reverse:!1,shifted:0,lifted:!1,thr:0}};let r=(o,a,l)=>o<a?a:o>l?l:o;e.stepCar=function(o,a,l,c,h){let f=Math.sin(o.h),p=Math.cos(o.h),u=o.vx*f+o.vz*p,_=o.vx*p-o.vz*f,x=Math.hypot(u,_);h=h||1,o.steer+=(a.steer-o.steer)*Math.min(1,l*(a.steer===0?7:10));let m=0,d=0;a.up&&(u>-.5?m=1:d=1),a.down&&(u>.8?d=1:m=-1),o.reverse=m<0;let g=c.top;o.shifted=0,o.shiftT>0&&(o.shiftT-=l);let v=Math.abs(u)/(g*t[o.gear]);o.shiftT<=0&&u>0&&(v>.94&&o.gear<5?(o.gear++,o.shiftT=.2,o.shifted=1):o.gear>0&&Math.abs(u)/(g*t[o.gear-1])<.62&&(o.gear--,o.shiftT=.12,o.shifted=-1)),u<=.5&&o.gear!==0&&(o.gear=0);let M=r(Math.abs(u)/(g*t[o.gear]),0,1),w=.62+.38*Math.sin(M*Math.PI*.9+.2),y=0;m>0&&o.shiftT<=0?(y=c.accel*n[o.gear]*w*(u<g?1:0),y*=.75+.25*Math.min(1,o.boost+(c.turbo?0:1))):m<0&&(y=u>-9?-c.accel*.6:0);let E=c.accel*n[5]*.8/(g*g);y-=Math.sign(u)*(E*u*u+.35+(m===0?.9:0)),d&&(y-=Math.sign(u)*15);let A=u;u+=y*l,m===0&&!d&&A*u<0&&(u=0),d&&A*u<0&&(u=0);let b=m>0&&o.shiftT<=0?r((M-.25)*2.2,0,1):0;o.lifted=c.turbo&&o.boost>.5&&b===0&&o.thr>0,o.boost+=(b-o.boost)*Math.min(1,l*(b>o.boost?2.2:6)),o.thr=m>0&&o.shiftT<=0?1:0;let S=x>1.5?Math.atan2(-_,Math.abs(u)):0,z=Math.abs(S),F=Math.abs(o.steer)>.8;x>8&&u>0&&(z>.15||d&&Math.abs(o.steer)>.4&&x>10||m>0&&F&&x>12.5)?o.drift+=l*5:(z<.1||x<6)&&(o.drift-=l*c.driftHold),o.drift=r(o.drift,0,1);let D=u>=-.5?1:-1,O=c.steer/(1+x/40)*r(x/6,0,1);O*=1-.2*o.drift;let k=o.steer*O*D;o.drift>.3&&Math.abs(a.steer)<.1&&(k=-S*2.4),d&&o.drift>.2&&(k+=o.steer*.5),o.w+=(k-o.w)*Math.min(1,l*7),o.h+=o.w*l;let B=c.driftGrip*(1-.22*(m>0?1:0))*(d?.8:1),Y=(c.grip+(B-c.grip)*o.drift)*h,W=Math.hypot(u,_);_*=Math.exp(-Y*l);let K=Math.hypot(u,_);if(K>.01){let Q=(K+(W-K)*(.7+.2*o.drift))/K;u*=Q,_*=Q}let ee=Math.sin(o.h-o.w*l),me=Math.cos(o.h-o.w*l);o.vx=u*ee+_*me,o.vz=u*me-_*ee;let $=Math.atan2(o.vx,o.vz),se=o.h-$;for(;se>Math.PI;)se-=Math.PI*2;for(;se<-Math.PI;)se+=Math.PI*2;let Me=Math.hypot(o.vx,o.vz);if(Me>4&&Math.abs(se)<2.4&&Math.abs(se)>c.maxSlip){let Q=(Math.abs(se)-c.maxSlip)*Math.sign(se);o.h-=Q*Math.min(1,l*12),Math.sign(o.w)===Math.sign(se)&&(o.w*=.8)}o.x+=o.vx*l,o.z+=o.vz*l;let Se=M;return m>0&&o.drift>.2&&(Se=Math.max(Se,.62+.36*o.drift)),m>0&&x<4&&(Se=Math.max(Se,.5)),o.shiftT>0&&(Se*=.8),m<=0&&Math.abs(u)<1&&(Se=0),o.rpmN+=(Se-o.rpmN)*Math.min(1,l*(Se>o.rpmN?6:4)),o.rpm=s+o.rpmN*(c.redline-s),o.rpmN>.97&&(o.rpm-=Math.random()*180),o.speed=Me,o.vF=u,o.slip=Me>3?se:0,o.brake=d>0,o}})(typeof window<"u"?window:globalThis);(function(){let i=window.DG,e={i4:{ph:4,amps:[1,.82,.95,.8],f:310,tau:.0045,nz:.25,vol:.9},i4t:{ph:4,amps:[1,.86,1,.84],f:255,tau:.0048,nz:.17,vol:.9},i6:{ph:6,amps:[1,.9,.97,.92,1,.88],f:365,tau:.003,nz:.2,vol:.85},i6t:{ph:6,amps:[1,.93,.98,.94,1,.92],f:245,tau:.0036,nz:.11,vol:.95},i6rb:{ph:6,amps:[1,.88,.97,.9,1,.86],f:335,tau:.003,nz:.22,vol:.9},v6:{ph:6,amps:[1,.6,.95,.62,1,.64],f:285,tau:.0038,nz:.18,vol:.9},v8:{ph:8,amps:[1,.4,.45,1,.4,1,.95,.42],f:150,tau:.0062,nz:.2,vol:1},rotary:{ph:4,amps:[1,.9,1,.88],f:430,tau:.0021,nz:.45,vol:.8}},t=null,n=null,s=null,r=.8,o=null,a=null,l=null,c=null,h=null,f={type:null};function p(){let d=t.createBuffer(1,t.sampleRate*2,t.sampleRate),g=d.getChannelData(0);for(let v=0;v<g.length;v++)g[v]=Math.random()*2-1;return d}function u(){let d=t.createBufferSource();return d.buffer=s,d.loop=!0,d.start(),d}function _(d){let g=e[d]||e.i4,v=t.sampleRate,M=Math.round(v*.04),w=6,y=M*w,E=t.createBuffer(1,y,v),A=E.getChannelData(0);for(let S=0;S<w;S++)for(let z=0;z<g.ph;z++){let F=Math.round((S+z/g.ph)*M),q=g.amps[z]*(.93+Math.random()*.14),D=Math.round(v*g.tau*6),O=Math.random()*.4;for(let k=0;k<D;k++){let B=k/v,Y=Math.exp(-B/g.tau),W=Math.min(1,k/6),K=Math.sin(6.2832*g.f*B+O)+.45*Math.sin(6.2832*g.f*2.31*B)+.2*Math.sin(6.2832*g.f*.5*B);A[(F+k)%y]+=q*W*Y*(K+g.nz*(Math.random()*2-1)*2)}}let b=0;for(let S=0;S<y;S++)b=Math.max(b,Math.abs(A[S]));for(let S=0;S<y;S++)A[S]*=.9/b;return E}function x(d){let v=new Float32Array(512);for(let w=0;w<512;w++){let y=w/511*2-1;v[w]=Math.tanh(d*y)/Math.tanh(d)}let M=t.createWaveShaper();return M.curve=v,M}let m=i.Audio={ready:!1,init(){if(t){t.state==="suspended"&&t.resume();return}let d=window.AudioContext||window.webkitAudioContext;if(d)try{t=new d,n=t.createGain(),n.gain.value=r;let g=t.createDynamicsCompressor();g.threshold.value=-14,g.ratio.value=5,n.connect(g),g.connect(t.destination),s=p(),m.ready=!0}catch{t=null}},setVolume(d){r=d,n&&(n.gain.value=d)},startCar(d,g){if(!m.ready)return;m.stopCar();let v=e[d]||e.i4,M=g.exhaust,w=t.createBufferSource();w.buffer=_(d),w.loop=!0;let y=x(M==="straight"?3.2:M==="sport"?2.2:1.5),E=t.createBiquadFilter();E.type="lowpass",E.frequency.value=800,E.Q.value=.7;let A=t.createGain();if(A.gain.value=0,w.connect(y),y.connect(E),E.connect(A),A.connect(n),w.start(),o={src:w,lp:E,g:A,vol:v.vol*(M==="straight"?1.25:M==="sport"?1.05:.85),bright:M==="straight"?1.5:M==="sport"?1.2:1},g.turbo){let k=t.createOscillator();k.type="sine";let B=t.createGain();B.gain.value=0;let Y=u(),W=t.createBiquadFilter();W.type="bandpass",W.frequency.value=3200,W.Q.value=1.2;let K=t.createGain();K.gain.value=0,k.connect(B),B.connect(n),Y.connect(W),W.connect(K),K.connect(n),k.start(),a={o:k,og:B,n:Y,bp:W,ng:K,lvl:g.turboLvl};let ee=u(),me=t.createBiquadFilter();me.type="bandpass",me.frequency.value=2600,me.Q.value=.8;let $=t.createGain();$.gain.value=0,ee.connect(me),me.connect($),$.connect(n),h={bn:ee,hp:me,bg:$,lvl:g.turboLvl,last:0}}let b=u(),S=t.createBiquadFilter(),z=t.createBiquadFilter();S.type=z.type="bandpass",S.frequency.value=980,S.Q.value=9,z.frequency.value=1480,z.Q.value=11;let F=t.createGain();F.gain.value=0,b.connect(S),b.connect(z),S.connect(F),z.connect(F),F.connect(n),l={sn:b,b1:S,b2:z,sg:F};let q=u(),D=t.createBiquadFilter();D.type="lowpass",D.frequency.value=500;let O=t.createGain();O.gain.value=0,q.connect(D),D.connect(O),O.connect(n),c={wn:q,wl:D,wg:O},f.type=d},stopCar(){let d=(g,v)=>{g&&v.forEach(M=>{try{g[M].stop()}catch{}try{g[M].disconnect()}catch{}})};o&&(d(o,["src"]),o.g.disconnect()),a&&(d(a,["o","n"]),a.og.disconnect(),a.ng.disconnect()),h&&(d(h,["bn"]),h.bg.disconnect()),l&&(d(l,["sn"]),l.sg.disconnect()),c&&(d(c,["wn"]),c.wg.disconnect()),o=a=h=l=c=null},update(d){if(!o)return;let g=t.currentTime,v=d.rpm/8e3;o.src.playbackRate.setTargetAtTime(Math.max(.25,d.rpm/3e3),g,.03),o.lp.frequency.setTargetAtTime((500+d.thr*2600+v*3800)*o.bright,g,.05),o.g.gain.setTargetAtTime(o.vol*(.3+.7*d.thr)*(.55+.45*v)*.55,g,.05),a&&(a.o.frequency.setTargetAtTime(1900+d.boost*5200,g,.08),a.og.gain.setTargetAtTime(d.boost*d.boost*.028*a.lvl,g,.08),a.bp.frequency.setTargetAtTime(2400+d.boost*3e3,g,.1),a.ng.gain.setTargetAtTime(d.boost*.045*a.lvl,g,.1)),l.sg.gain.setTargetAtTime(d.skid*.2,g,.06),l.b1.frequency.setTargetAtTime(880+d.speed*7+Math.sin(d.time*9)*45,g,.05),l.b2.frequency.setTargetAtTime(1380+d.speed*9+Math.sin(d.time*6.3)*60,g,.05),c.wg.gain.setTargetAtTime(Math.min(.14,d.speed/70*.12),g,.2),c.wl.frequency.setTargetAtTime(300+d.speed*12,g,.2)},blowoff(){if(!h)return;let d=t.currentTime;if(d-h.last<.5)return;h.last=d;let g=h.bg.gain,v=h.lvl,M=.16+.1*v;g.cancelScheduledValues(d),g.setValueAtTime(1e-4,d),g.linearRampToValueAtTime(M,d+.015);let w=d+.09;g.linearRampToValueAtTime(M*.5,w);let y=Math.round(3+v*3);for(let E=0;E<y;E++){let A=M*.9*Math.pow(.74,E),b=.058+E*.006;g.linearRampToValueAtTime(A*.12,w+b*.45),g.linearRampToValueAtTime(A,w+b*.6),w+=b}g.linearRampToValueAtTime(1e-4,w+.12),h.hp.frequency.cancelScheduledValues(d),h.hp.frequency.setValueAtTime(3400,d),h.hp.frequency.exponentialRampToValueAtTime(1500,w+.1)},burst(d,g,v,M,w){if(!m.ready)return;let y=t.currentTime,E=t.createBufferSource();E.buffer=s;let A=t.createBiquadFilter();A.type=w||"lowpass",A.frequency.value=d,A.Q.value=g;let b=t.createGain();b.gain.setValueAtTime(M,y),b.gain.exponentialRampToValueAtTime(.001,y+v),E.connect(A),A.connect(b),b.connect(n),E.start(y,Math.random()),E.stop(y+v+.02)},tone(d,g,v,M,w,y){if(!m.ready)return;let E=t.currentTime+(y||0),A=t.createOscillator(),b=t.createGain();A.type=M||"sine",A.frequency.setValueAtTime(d,E),w&&A.frequency.exponentialRampToValueAtTime(w,E+g),b.gain.setValueAtTime(1e-4,E),b.gain.linearRampToValueAtTime(v,E+.008),b.gain.exponentialRampToValueAtTime(5e-4,E+g),A.connect(b),b.connect(n),A.start(E),A.stop(E+g+.02)},pop(){m.burst(700+Math.random()*500,1,.07,.5),m.tone(120,.06,.25,"square",60)},thud(d){m.tone(95,.18,.5*d,"sine",38),m.burst(500,.8,.14,.45*d)},shift(){m.burst(1800,2,.04,.12,"bandpass")},multUp(d){m.tone(660*Math.pow(1.06,d),.14,.11,"triangle"),m.tone(990*Math.pow(1.06,d),.2,.09,"triangle",0,.07)},bank(){[784,988,1175,1568].forEach((d,g)=>m.tone(d,.16,.09,"triangle",0,g*.055))},lost(){m.tone(300,.3,.12,"sawtooth",110)},ui(){m.tone(720,.05,.05,"square")},buy(){[523,659,784,1047].forEach((d,g)=>m.tone(d,.2,.09,"triangle",0,g*.07))},deny(){m.tone(180,.16,.1,"square",120)},suspend(){t&&t.state==="running"&&t.suspend()},resume(){t&&t.state==="suspended"&&t.resume()}}})();Lt();Lt();var ca={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};Lt();Lt();var yn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},hv=new Ws(-1,1,1,-1,0,1),Fc=class extends Xe{constructor(){super(),this.setAttribute("position",new ze([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ze([0,2,0,0,2,0],2))}},uv=new Fc,Fi=class{constructor(e){this._mesh=new ce(uv,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,hv)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var js=class extends yn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof It?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=jn.clone(e.uniforms),this.material=new It({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Fi(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var zr=class extends yn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},ha=class extends yn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var ua=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new xe);this._width=n.width,this._height=n.height,t=new $t(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:gn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new js(ca),this.copyPass.material.blending=$n,this.clock=new ia}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}zr!==void 0&&(o instanceof zr?n=!0:o instanceof ha&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new xe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};Lt();var fa=class extends yn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Re}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};Lt();Lt();var Df={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Re(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var er=class i extends yn{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new xe(e.x,e.y):new xe(256,256),this.clearColor=new Re(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new $t(r,o,{type:gn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){let p=new $t(r,o,{type:gn});p.texture.name="UnrealBloomPass.h"+f,p.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(p);let u=new $t(r,o,{type:gn});u.texture.name="UnrealBloomPass.v"+f,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),o=Math.round(o/2)}let a=Df;this.highPassUniforms=jn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new It({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new xe(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=ca;this.copyUniforms=jn.clone(h.uniforms),this.blendMaterial=new It({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Yt,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Re,this.oldClearAlpha=1,this.basic=new ut,this.fsQuad=new Fi(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new xe(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new It({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new xe(.5,.5)},direction:{value:new xe(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new It({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};er.BlurDirectionX=new xe(1,0);er.BlurDirectionY=new xe(0,1);Lt();var Uf={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = OptimizedCineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var da=class extends yn{constructor(){super();let e=Uf;this.uniforms=jn.clone(e.uniforms),this.material=new ea({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Fi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},at.getTransfer(this._outputColorSpace)===ft&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Tc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Ac?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Rc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Nr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Cc&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};Lt();var pa=class extends Bn{constructor(e=null){super();let t=new Oe;t.deleteAttribute("uv");let n=new Pe({side:zt}),s=new Pe,r=5;e!==null&&e._useLegacyLights===!1&&(r=900);let o=new na(16777215,r,28,2);o.position.set(.418,16.199,.3),this.add(o);let a=new ce(t,n);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);let l=new ce(t,s);l.position.set(-10.906,2.009,1.846),l.rotation.set(0,-.195,0),l.scale.set(2.328,7.905,4.651),this.add(l);let c=new ce(t,s);c.position.set(-5.607,-.754,-.758),c.rotation.set(0,.994,0),c.scale.set(1.97,1.534,3.955),this.add(c);let h=new ce(t,s);h.position.set(6.167,.857,7.803),h.rotation.set(0,.561,0),h.scale.set(3.927,6.285,3.687),this.add(h);let f=new ce(t,s);f.position.set(-2.017,.018,6.124),f.rotation.set(0,.333,0),f.scale.set(2.002,4.566,2.064),this.add(f);let p=new ce(t,s);p.position.set(2.291,-.756,-2.621),p.rotation.set(0,-.286,0),p.scale.set(1.546,1.552,1.496),this.add(p);let u=new ce(t,s);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);let _=new ce(t,tr(50));_.position.set(-16.116,14.37,8.208),_.scale.set(.1,2.428,2.739),this.add(_);let x=new ce(t,tr(50));x.position.set(-16.109,18.021,-8.207),x.scale.set(.1,2.425,2.751),this.add(x);let m=new ce(t,tr(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);let d=new ce(t,tr(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let g=new ce(t,tr(20));g.position.set(3.235,11.486,-12.541),g.scale.set(2.5,2,.1),this.add(g);let v=new ce(t,tr(100));v.position.set(0,20,0),v.scale.set(1,.1,1),this.add(v)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function tr(i){let e=new ut;return e.color.setScalar(i),e}Lt();var Nf={k86:{L:4.18,W:1.625,fo:.8,wb:2.4,R:.29,rim:14,tireW:.2,drive:"R",hand:"R",deck:[[-1,.8],[-.94,.87],[-.7,.875],[0,.86],[.36,.85],[.7,.8],[.93,.72],[1,.66]],bottom:[[-1,.32],[-.9,.23],[-.6,.17],[.55,.17],[.88,.22],[1,.3]],cab:{tA:.36,tRf:.12,tRr:-.36,tC:-.93,roof:1.335,ws:1.1,bk:.75,tumble:.14,crown:.02,arch:.01,winR:-.64,pillars:[-.12],hatch:!0,sail:!1},hw:.8,flareF:.012,flareR:.015,noseR:.1,tailR:.08,rvF:.06,rvR:.05,tuck:.06,bulge:.46,sh:.05,crown:.015,hoodCrown:.01,doors:[[.33,-.17]],popup:!0,head:{type:"popup",x:.66,w:.36,d:.2},turn:[{shape:["rr",.17,.05,.015],x:.76,y:.42,color:"amber"}],grille:[{shape:["rr",.7,.055,.01],x:0,y:-.11},{shape:["rr",.5,.07,.02],x:0,y:.31}],tail:[{shape:["rr",1.45,.13,.02],x:0,y:-.1,kind:"band"}],plateF:.41,plateR:.52},s13:{L:4.54,W:1.69,fo:.93,wb:2.475,R:.3,rim:15,tireW:.205,drive:"R",hand:"R",deck:[[-1,.78],[-.94,.845],[-.6,.86],[0,.85],[.3,.84],[.7,.78],[.93,.67],[1,.61]],bottom:[[-1,.3],[-.9,.22],[-.6,.165],[.55,.165],[.88,.21],[1,.27]],cab:{tA:.3,tRf:.06,tRr:-.38,tC:-.9,roof:1.29,ws:1.15,bk:.8,tumble:.16,crown:.02,arch:.012,winR:-.48,pillars:[-.1],hatch:!0,sail:!1},hw:.835,flareF:.012,flareR:.014,noseR:.13,tailR:.1,rvF:.07,rvR:.06,tuck:.07,bulge:.44,sh:.065,crown:.015,hoodCrown:.012,doors:[[.27,-.2]],popup:!0,head:{type:"popup",x:.64,w:.4,d:.19},turn:[{shape:["rr",.2,.055,.02],x:.72,y:.4,color:"clear"}],grille:[{shape:["rr",.55,.07,.02],x:0,y:.37}],tail:[{shape:["rr",1.5,.11,.02],x:0,y:-.09,kind:"band"}],plateF:.36,plateR:.5},s15:{L:4.445,W:1.695,fo:.93,wb:2.525,R:.31,rim:16,tireW:.215,drive:"R",hand:"R",deck:[[-1,.8],[-.95,.915],[-.62,.935],[-.45,.925],[0,.9],[.34,.875],[.7,.8],[.93,.69],[1,.62]],bottom:[[-1,.31],[-.9,.22],[-.6,.16],[.55,.16],[.88,.21],[1,.27]],cab:{tA:.34,tRf:.1,tRr:-.27,tC:-.56,roof:1.285,ws:1.2,bk:1.25,tumble:.17,crown:.025,arch:.015,winR:-.38,pillars:[-.07],hatch:!1,sail:!0},hw:.835,flareF:.016,flareR:.02,noseR:.2,tailR:.16,rvF:.1,rvR:.08,tuck:.08,bulge:.42,sh:.09,crown:.02,hoodCrown:.015,doors:[[.31,-.22]],head:{shape:["poly",[[-.2,-.035],[.17,-.06],[.24,0],[.2,.045],[-.18,.04]],.02],x:.62,y:-.06,inner:"proj2",blend:.35},grille:[{shape:["rr",.78,.12,.04],x:0,y:.38},{shape:["rr",.32,.035,.01],x:0,y:-.14}],tail:[{shape:["poly",[[-.18,-.05],[.16,-.06],[.22,.03],[.12,.06],[-.2,.04]],.02],x:.7,y:-.1}],plateF:.36,plateR:.62},r34:{L:4.6,W:1.785,fo:.92,wb:2.665,R:.33,rim:18,tireW:.245,drive:"A",hand:"R",deck:[[-1,.84],[-.95,1],[-.6,1.02],[-.42,1],[0,.97],[.32,.95],[.7,.88],[.93,.79],[1,.72]],bottom:[[-1,.34],[-.9,.24],[-.6,.17],[.55,.17],[.88,.22],[1,.26]],cab:{tA:.33,tRf:.08,tRr:-.3,tC:-.56,roof:1.36,ws:1.15,bk:1.2,tumble:.16,crown:.022,arch:.012,winR:-.44,pillars:[-.08],hatch:!1,sail:!0},hw:.865,flareF:.025,flareR:.03,noseR:.12,tailR:.1,rvF:.07,rvR:.06,tuck:.05,bulge:.48,sh:.05,crown:.015,hoodCrown:.01,doors:[[.3,-.2]],head:{shape:["poly",[[-.21,-.05],[.19,-.06],[.24,.04],[-.17,.05]],.015],x:.63,y:-.08,inner:"proj1",blend:.2},grille:[{shape:["rr",.44,.08,.015],x:0,y:-.12},{shape:["rr",1.12,.16,.03],x:0,y:.38},{shape:["rr",.14,.12,.02],x:.84,y:.37}],tail:[{shape:["circle",.078],x:.78,y:-.12,ring:!0},{shape:["circle",.068],x:.52,y:-.12,ring:!0}],plateF:.3,plateR:.58},mk4:{L:4.52,W:1.81,fo:.99,wb:2.55,R:.32,rim:17,tireW:.235,drive:"R",hand:"R",deck:[[-1,.8],[-.95,.92],[-.66,.95],[-.45,.93],[0,.9],[.3,.86],[.62,.79],[.88,.69],[1,.56]],bottom:[[-1,.32],[-.9,.23],[-.6,.16],[.55,.16],[.85,.2],[1,.25]],cab:{tA:.3,tRf:.05,tRr:-.28,tC:-.62,roof:1.275,ws:1.3,bk:1.1,tumble:.2,crown:.03,arch:.02,winR:-.36,pillars:[-.09],hatch:!1,sail:!0},hw:.87,flareF:.035,flareR:.045,noseR:.32,tailR:.26,rvF:.14,rvR:.1,tuck:.1,bulge:.4,sh:.15,crown:.015,hoodCrown:.02,doors:[[.27,-.22]],head:{shape:["poly",[[-.2,-.04],[.14,-.065],[.21,-.01],[.18,.05],[-.16,.045]],.04],x:.62,y:-.07,inner:"proj3",blend:.45},grille:[{shape:["rr",.66,.13,.06],x:0,y:.34},{shape:["rr",.16,.07,.03],x:.74,y:.34}],tail:[{shape:["circle",.085],x:.74,y:-.11,ring:!0},{shape:["circle",.07],x:.5,y:-.11,ring:!0},{shape:["rr",.5,.05,.02],x:0,y:-.11,kind:"garnish"}],plateF:.3,plateR:.55,bigTip:!0},fd7:{L:4.295,W:1.76,fo:.88,wb:2.425,R:.32,rim:17,tireW:.235,drive:"R",hand:"R",deck:[[-1,.76],[-.94,.88],[-.7,.91],[-.5,.9],[0,.86],[.26,.82],[.58,.74],[.85,.64],[1,.5]],bottom:[[-1,.3],[-.9,.22],[-.6,.15],[.55,.15],[.85,.19],[1,.23]],cab:{tA:.26,tRf:.02,tRr:-.3,tC:-.8,roof:1.23,ws:1.35,bk:.75,tumble:.2,crown:.035,arch:.02,winR:-.33,pillars:[-.13],hatch:!0,sail:!0},hw:.85,flareF:.045,flareR:.05,noseR:.34,tailR:.26,rvF:.16,rvR:.1,tuck:.12,bulge:.38,sh:.18,crown:.01,hoodCrown:-.025,doors:[[.22,-.2]],popup:!0,head:{type:"popup",x:.62,w:.34,d:.17},turn:[{shape:["rr",.22,.07,.035],x:.7,y:.41,color:"clear"}],grille:[{shape:["rr",.76,.13,.065],x:0,y:.35}],tail:[{shape:["rr",1.42,.11,.04],x:0,y:-.11,kind:"bar"}],plateF:.3,plateR:.55},b36:{L:4.433,W:1.71,fo:.8,wb:2.7,R:.31,rim:17,tireW:.225,drive:"R",hand:"L",deck:[[-1,.84],[-.95,.96],[-.6,.98],[-.42,.97],[0,.94],[.34,.92],[.75,.86],[.96,.79],[1,.74]],bottom:[[-1,.32],[-.9,.23],[-.6,.16],[.55,.16],[.88,.21],[1,.26]],cab:{tA:.33,tRf:.08,tRr:-.3,tC:-.53,roof:1.335,ws:1.15,bk:1.25,tumble:.16,crown:.022,arch:.012,winR:-.42,pillars:[-.1],hatch:!1,sail:!0},hw:.845,flareF:.012,flareR:.016,noseR:.14,tailR:.12,rvF:.06,rvR:.07,tuck:.06,bulge:.47,sh:.07,crown:.015,hoodCrown:.015,doors:[[.31,-.24]],head:{shape:["rr",.4,.13,.03],x:.64,y:-.1,inner:"twin",blend:.1},grille:[{shape:["rr",.18,.11,.04],x:.14,y:-.1},{shape:["rr",.92,.1,.03],x:0,y:.36}],tail:[{shape:["rr",.38,.12,.02],x:.7,y:-.1}],plateF:.52,plateR:.6},z35:{L:4.31,W:1.815,fo:.85,wb:2.65,R:.33,rim:18,tireW:.245,drive:"R",hand:"R",deck:[[-1,.82],[-.95,.96],[-.7,1],[-.45,.98],[0,.93],[.28,.88],[.62,.8],[.9,.68],[1,.58]],bottom:[[-1,.32],[-.9,.23],[-.6,.16],[.55,.16],[.85,.2],[1,.25]],cab:{tA:.28,tRf:.05,tRr:-.2,tC:-.74,roof:1.315,ws:1.35,bk:.7,tumble:.2,crown:.03,arch:.035,winR:-.27,pillars:[-.16],hatch:!0,sail:!0},hw:.865,flareF:.045,flareR:.055,noseR:.3,tailR:.22,rvF:.12,rvR:.1,tuck:.1,bulge:.42,sh:.14,crown:.015,hoodCrown:.02,doors:[[.25,-.24]],head:{shape:["poly",[[-.11,-.09],[.15,-.06],[.21,.09],[.06,.13],[-.12,.03]],.03],x:.68,y:-.07,inner:"proj2",blend:.55},grille:[{shape:["rr",.76,.16,.07],x:0,y:.38}],tail:[{shape:["poly",[[-.04,-.1],[.1,-.08],[.13,.1],[.02,.12],[-.06,.02]],.02],x:.8,y:-.11}],plateF:.3,plateR:.62},x100:{L:4.715,W:1.755,fo:.94,wb:2.73,R:.32,rim:17,tireW:.225,drive:"R",hand:"R",deck:[[-1,.84],[-.95,.96],[-.6,.98],[-.45,.97],[0,.94],[.34,.92],[.75,.86],[.96,.79],[1,.73]],bottom:[[-1,.33],[-.9,.24],[-.6,.17],[.55,.17],[.88,.22],[1,.27]],cab:{tA:.36,tRf:.12,tRr:-.3,tC:-.5,roof:1.4,ws:1.15,bk:1.2,tumble:.15,crown:.022,arch:.01,winR:-.39,pillars:[-.04],hatch:!1,sail:!0},hw:.865,flareF:.01,flareR:.012,noseR:.12,tailR:.1,rvF:.06,rvR:.06,tuck:.05,bulge:.48,sh:.055,crown:.015,hoodCrown:.012,doors:[[.34,-.04],[-.045,-.4]],head:{shape:["poly",[[-.24,-.06],[.22,-.065],[.25,.05],[-.24,.06]],.015],x:.58,y:-.09,inner:"proj2",blend:.15},grille:[{shape:["rr",.7,.1,.02],x:0,y:-.1},{shape:["rr",.95,.09,.02],x:0,y:.35}],tail:[{shape:["rr",.55,.1,.015],x:.6,y:-.1},{shape:["rr",.5,.07,.015],x:0,y:-.1,kind:"garnish"}],plateF:.4,plateR:.62}};Lt();var Fr=(i,e,t)=>i<e?e:i>t?t:i,Ff=(i,e,t)=>(t=Fr((t-i)/(e-i),0,1),t*t*(3-2*t));function zf(i){let e=i.length,t=i.map(o=>o[0]),n=i.map(o=>o[1]),s=[],r=[];for(let o=0;o<e-1;o++)s[o]=(n[o+1]-n[o])/(t[o+1]-t[o]);r[0]=s[0],r[e-1]=s[e-2];for(let o=1;o<e-1;o++)r[o]=s[o-1]*s[o]<=0?0:(s[o-1]+s[o])/2;for(let o=0;o<e-1;o++){if(s[o]===0){r[o]=r[o+1]=0;continue}let a=r[o]/s[o],l=r[o+1]/s[o],c=a*a+l*l;if(c>9){let h=3/Math.sqrt(c);r[o]=h*a*s[o],r[o+1]=h*l*s[o]}}return o=>{if(o<=t[0])return n[0];if(o>=t[e-1])return n[e-1];let a=0;for(;o>t[a+1];)a++;let l=t[a+1]-t[a],c=(o-t[a])/l,h=c*c,f=h*c;return(2*f-3*h+1)*n[a]+(f-2*h+c)*l*r[a]+(-2*f+3*h)*n[a+1]+(f-h)*l*r[a+1]}}function fv(i,e){let t=[],n=i.length,s=r=>i[Fr(r,0,n-1)];for(let r=0;r<n-1;r++){let o=s(r-1),a=s(r),l=s(r+1),c=s(r+2);for(let h=0;h<e;h++){let f=h/e,p=f*f,u=p*f,_=(x,m,d,g)=>.5*(2*m+(-x+d)*f+(2*x-5*m+4*d-g)*p+(-x+3*m-3*d+g)*u);t.push([_(o[0],a[0],l[0],c[0]),_(o[1],a[1],l[1],c[1])])}}return t.push(i[n-1].slice()),t}function Bf(i,e){let t=i.L,n=t/2,s=n-i.fo,r=s-i.wb,o=e==="wide"?.05:e==="widepro"?.085:0,a=zf(i.deck),l=zf(i.bottom),c=e==="stock"?0:.025,h=F=>l(F)-c*(1-Ff(.85,1,Math.abs(F))*.4),f=i.R+.045+o*.35,p=(F,q,D)=>Math.exp(-((F-q)*(F-q))/(D*D)),u=F=>i.hw+(i.flareF+o)*p(F,s,.62)+(i.flareR+o*1.1)*p(F,r,.66),_=F=>{let q=u(F),D=i.noseR,O=i.tailR;if(F>n-D){let k=(F-(n-D))/D;q-=D*(1-Math.sqrt(Math.max(0,1-k*k)))}if(F<-n+O){let k=(-n+O-F)/O;q-=O*(1-Math.sqrt(Math.max(0,1-k*k)))}return q},x=F=>F/n,m=F=>{let q=a(x(F)),D=i.rvF,O=i.rvR;if(F>n-D*1.2){let k=Fr((F-(n-D*1.2))/(D*1.2),0,1);q-=D*(1-Math.sqrt(1-k*k))*.9}if(F<-n+O*1.2){let k=Fr((-n+O*1.2-F)/(O*1.2),0,1);q-=O*(1-Math.sqrt(1-k*k))*.9}return q},d=F=>{let q=h(x(F));return F>n-.06&&(q+=(F-(n-.06))*.9),F<-n+.06&&(q+=(-n+.06-F)*.9),q},g=i.cab,v=g.tA*n,M=g.tRf*n,w=g.tRr*n,y=g.tC*n,E=m(v),A=m(y),b=(M+w)/2,S=(M-w)/2;return{L:t,hl:n,zF:s,zR:r,Ra:f,wide:o,hwPlan:_,deckZ:m,bottomZ:d,roofZ:F=>{if(F>=v||F<=y)return null;if(F>M){let D=(v-F)/(v-M);return E+(g.roof-E-g.arch)*Math.pow(Math.sin(D*Math.PI/2),g.ws)}if(F<w){let D=(F-y)/(w-y);return A+(g.roof-A-g.arch)*Math.pow(Math.sin(D*Math.PI/2),g.bk)}let q=(F-b)/S;return g.roof-g.arch*q*q},zA:v,zRf:M,zRr:w,zC:y,tOf:x}}function dv(i,e,t){let r=document.createElement("canvas");r.width=2048,r.height=512;let o=r.getContext("2d");o.fillStyle="#fff",o.fillRect(0,0,2048,512);let a=v=>(v+e.hl)/e.L*2048,l=v=>v*512,c=o.createLinearGradient(0,l(.1),0,l(.36));c.addColorStop(0,"rgba(0,0,0,.5)"),c.addColorStop(1,"rgba(0,0,0,0)"),o.fillStyle=c,o.fillRect(0,0,2048,l(.36));for(let v of[e.zF,e.zR]){o.save(),o.translate(a(v),l(.2)),o.scale(e.Ra/e.L*2048,.2*512);let M=o.createRadialGradient(0,0,.9,0,0,1.45);M.addColorStop(0,"rgba(0,0,0,.45)"),M.addColorStop(1,"rgba(0,0,0,0)"),o.fillStyle=M,o.beginPath(),o.arc(0,0,1.5,0,Math.PI*2),o.fill(),o.restore()}o.strokeStyle="rgba(20,20,22,.85)",o.lineWidth=3,o.lineCap="round";let h=(v,M,w,y)=>{o.beginPath(),o.moveTo(a(v),l(M)),o.lineTo(a(w),l(y)),o.stroke()},f=t.side0,p=t.shoulder,u=t.hood;for(let[v,M]of i.doors){let w=v*e.hl,y=M*e.hl;h(w,f+.02,w+.04,p+.02),h(y,f+.02,y,p+.02),h(w,f+.02,y,f+.02),o.fillStyle="rgba(25,25,28,.9)",o.fillRect(a(y+.07)-26,l(p-.07),30,9)}let _=e.zA+.04,x=e.hl-(i.popup?.2:.12);if(h(_,u,x,u+.01),h(_,u,_,1),h(x,u+.01,x+.04,1),!i.cab.hatch){let v=e.zC-.03,M=-e.hl+.1;h(v,u+.02,M,u+.03),h(v,u+.02,v,1),h(M,u+.03,M-.02,.86)}let m=e.zF+e.Ra+.08,d=e.zR-e.Ra-.08;if(h(m,f,m+.03,t.bumper),h(d,f,d-.03,t.bumper),i.popup){let v=e.hl-.16,M=i.head.d;o.strokeRect(a(v-M/2),l(t.popIn),a(v+M/2)-a(v-M/2),l(t.popOut)-l(t.popIn))}o.strokeRect(a(e.zR+e.Ra+.16),l(p-.12),26,22);let g=new pt(r);return g.colorSpace=st,g.anisotropy=8,g}function Of(i,e,t,n){let s=i.length/3,r=new Float32Array(s*3);(l=>{for(let c of l){let[h,f,p]=c.v,u=i[h*3],_=i[h*3+1],x=i[h*3+2],m=i[f*3]-u,d=i[f*3+1]-_,g=i[f*3+2]-x,v=i[p*3]-u,M=i[p*3+1]-_,w=i[p*3+2]-x,y=d*w-g*M,E=g*v-m*w,A=m*M-d*v;for(let b of c.v)r[b*3]+=y,r[b*3+1]+=E,r[b*3+2]+=A}})(t.filter(l=>l.g!=="well"));let a={};for(let l of n){let c=t.filter(g=>g.g===l);if(!c.length)continue;let h=new Map,f=[],p=[],u=[],_=[],x=null;l==="well"&&(x=new Float32Array(s*3));for(let g of c)for(let v of g.v)h.has(v)||(h.set(v,f.length/3),f.push(i[v*3],i[v*3+1],i[v*3+2]),u.push(e[v*2],e[v*2+1])),_.push(h.get(v));let m=new Xe;if(m.setAttribute("position",new ze(f,3)),m.setAttribute("uv",new ze(u,2)),m.setIndex(_),x)m.computeVertexNormals();else{for(let[g,v]of h){let M=r[g*3],w=r[g*3+1],y=r[g*3+2],E=Math.hypot(M,w,y);E<1e-9&&(M=Math.sign(i[g*3])||1,w=0,y=0,E=1),p[v*3]=M/E,p[v*3+1]=w/E,p[v*3+2]=y/E}m.setAttribute("normal",new ze(p,3))}let d=m.attributes.normal.array;for(let g=0;g<d.length;g++)isFinite(d[g])||(d[g]=0);a[l]=m}return a}function Hf(i,e,t){let s=t.carbonHood,r=B=>{let Y=e.hwPlan(B),W=e.bottomZ(B),K=e.deckZ(B),ee=e.tOf(B),me=Math.max(.02,K-W),$=i.tuck,se=i.sh,Me=i.bulge,Se=i.crown+(ee>e.zA/e.hl?i.hoodCrown*Ff(e.zA/e.hl,e.zA/e.hl+.2,ee):0),Q=[[0,W],[Y*(1-$-.12),W],[Y*(1-$*.4),W+me*.07],[Y,W+me*Me],[Y*(1-se*.12),W+me*.86],[Y*(1-se*.55),W+me*.975],[Y*(1-se*1.3)-.04,K],[Y*.45,K+Se*.7],[0,K+Se]];return fv(Q,6)},o=8*6+1,a=B=>B/(o-1),l={side0:a(6*1.5),shoulder:a(6*5),hood:a(6*6),bumper:a(6*4.4),popIn:a(6*6.3),popOut:a(6*7.6)},c=[];for(let B=-e.hl;B<=e.hl+1e-6;B+=.022)c.push(B);for(let B=e.hl-.3;B<e.hl;B+=.012)c.push(B);for(let B=-e.hl;B<-e.hl+.3;B+=.012)c.push(B);for(let B of[e.zF,e.zR])for(let Y=B-e.Ra-.06;Y<=B+e.Ra+.06;Y+=.008)c.push(Y);c.push(e.hl),c.sort((B,Y)=>B-Y);let h=c.filter((B,Y)=>Y===0||B-c[Y-1]>.004),f=2*o-2,p=[],u=[],_=[];for(let B of h){let Y=r(B);Y.concat(Y.slice(1,o-1).reverse().map(K=>[-K[0],K[1]])).forEach((K,ee)=>{let me=ee<o?ee:f-ee;p.push(K[0],K[1],B),u.push((B+e.hl)/e.L,a(me)),_.push(me)})}let x=i.R,m=e.Ra,d=[e.zF,e.zR],g=(B,Y)=>{let W=1e9;for(let K of d){let ee=B-K,me=Y-x;W=Math.min(W,(me>=0?Math.hypot(ee,me):Math.abs(ee))-m)}return W},v=B=>[p[B*3],p[B*3+1],p[B*3+2]],M=B=>g(p[B*3+2],p[B*3+1]),w=(B,Y)=>{let W=0,K=1,ee=v(B),me=v(Y),$=M(B);for(let Se=0;Se<14;Se++){let Q=(W+K)/2,we=ee[2]+(me[2]-ee[2])*Q,Ie=ee[1]+(me[1]-ee[1])*Q;g(we,Ie)>=0==$>=0?W=Q:K=Q}let se=(W+K)/2,Me=p.length/3;for(let Se=0;Se<3;Se++)p.push(ee[Se]+(me[Se]-ee[Se])*se);return u.push(u[B*2]+(u[Y*2]-u[B*2])*se,u[B*2+1]+(u[Y*2+1]-u[B*2+1])*se),_.push(_[B]),Me},y=[],E=h.length,A=(B,Y)=>{if(Math.min(_[B[0]],_[B[1]],_[B[2]])>6*5){y.push({v:B,g:Y});return}let W=B.map(M);if(W[0]>=0&&W[1]>=0&&W[2]>=0){y.push({v:B,g:Y});return}if(W[0]<0&&W[1]<0&&W[2]<0)return;let K=[];for(let ee=0;ee<3;ee++){let me=B[ee],$=B[(ee+1)%3],se=W[ee],Me=W[(ee+1)%3];se>=0&&K.push(me),se>=0!=Me>=0&&K.push(w(me,$))}for(let ee=1;ee<K.length-1;ee++)y.push({v:[K[0],K[ee],K[ee+1]],g:Y})},b=e.zA,S=e.zC;for(let B=0;B<E-1;B++)for(let Y=0;Y<f;Y++){let W=B*f+Y,K=B*f+(Y+1)%f,ee=(B+1)*f+(Y+1)%f,me=(B+1)*f+Y,$=Math.min(_[W],_[K]),se=(h[B]+h[B+1])/2,Me="paint";$<2?Me="under":$>=6*6&&se>S+.02&&se<b-.02?Me="interior":s&&$>=6*6&&se>b+.04&&se<e.hl-(i.popup?.2:.12)&&(Me="hood"),A([W,K,me],Me),A([K,ee,me],Me)}let z=p.length/3,F=(E-1)*f,q=B=>{let Y=0;for(let W=0;W<f;W++)Y+=p[(B*f+W)*3+1];return Y/f};p.push(0,q(E-1),e.hl+.004),u.push(1,.5);let D=p.length/3;p.push(0,q(0),-e.hl-.004),u.push(0,.5);for(let B=0;B<f;B++)y.push({v:[z,F+B,F+(B+1)%f],g:"paint"}),y.push({v:[D,(B+1)%f,B],g:"paint"});let O=Of(p,u,y,["paint","hood","well","under","interior"]),k=(B,Y)=>{let W=r(B);for(let K=1;K<4*6+1;K++){let ee=W[K-1],me=W[K];if((Y-ee[1])*(Y-me[1])<=0){let $=(Y-ee[1])/(me[1]-ee[1]||1e-6);return ee[0]+(me[0]-ee[0])*$}}return e.hwPlan(B)};return{geos:O,panel:dv(i,e,l),surfX:k}}function kf(i,e,t){let n=i.cab,s=[];for(let x=e.zC;x<=e.zA;x+=.03)s.push(x);let r=n.winR*e.hl,o=e.zA-.07,a=n.pillars.map(x=>x*e.hl);for(let x of[r,o,e.zRf,e.zRr,e.zA,...a.flatMap(m=>[m-.035,m+.035])])x>e.zC&&x<=e.zA&&s.push(x);s.sort((x,m)=>x-m);let l=s.filter((x,m)=>m===0||x-s[m-1]>.006);l[l.length-1]<e.zA-1e-4&&l.push(e.zA);let c=[],h=[],f=7;for(let x of l){let m=e.hwPlan(x),d=m*(1-i.sh*.9)-.035,g=d-n.tumble,v=e.deckZ(x)-.012,M=e.roofZ(x);M==null&&(M=v+.001);let w=Math.max(0,M-v),y=Fr(w/.3,0,1),E=n.crown*y,A=d+(g-d)*y,b=[[d,v],[d+(A-d)*.42,v+w*.45],[A+.012*y,M-.035*y],[A,M],[A-.07*y,M+E*.35],[A*.45,M+E*.9],[0,M+E]],S=b.concat(b.slice(0,f-1).reverse().map(z=>[-z[0],z[1]]));for(let z of S)c.push(z[0],z[1],x),h.push((x+e.hl)/e.L,0)}let p=f*2-1,u=[],_=x=>x>r&&x<o&&!a.some(m=>Math.abs(x-m)<.035);for(let x=0;x<l.length-1;x++){let m=(l[x]+l[x+1])/2,d=m>e.zRf?"ws":m<e.zRr?"back":"roof";for(let g=0;g<p-1;g++){let v=g<f-1?g:p-2-g,M;v<=1?M=_(m)?"glass":d==="back"&&n.sail||m<r&&d!=="ws"?"paint":"trim":v===2?M=_(m)||d==="roof"?"trim":n.sail&&d==="back"?"paint":"trim":v===3?M=d==="roof"?"roof":d==="ws"?"trim":n.sail?"paint":"trim":M=d==="roof"?"roof":"glass";let w=x*p+g,y=x*p+g+1,E=(x+1)*p+g+1,A=(x+1)*p+g;u.push({v:[w,y,A],g:M},{v:[y,E,A],g:M})}}return Of(c,h,u,["glass","trim","roof","paint"])}Lt();xa();var Tv=new ta,Bc={};function Bi(i,e,t=!0){let n=i+e;if(Bc[n])return Bc[n];let s=Tv.load(new URL("assets/"+i,document.baseURI).href);return s.wrapS=s.wrapT=Zt,s.repeat.set(e,e),s.anisotropy=8,t&&(s.colorSpace=st),Bc[n]=s}function _a(i,e,t,n=!0){let s=document.createElement("canvas");s.width=i,s.height=e,t(s.getContext("2d"),i,e);let r=new pt(s);return n&&(r.colorSpace=st),r.anisotropy=8,r.wrapS=r.wrapT=Zt,r}var va=null;function Br(){if(va)return va;let i=_a(128,128,(s,r,o)=>{s.fillStyle="#050506",s.fillRect(0,0,r,o),s.strokeStyle="#2a2c30",s.lineWidth=3;for(let a=0;a<9;a++)for(let l=0;l<9;l++){let c=l*16+a%2*8,h=a*14;s.beginPath();for(let f=0;f<6;f++){let p=f/6*Math.PI*2+Math.PI/6;s.lineTo(c+Math.cos(p)*7,h+Math.sin(p)*7)}s.closePath(),s.stroke()}});i.repeat.set(6,6);let e=_a(64,512,(s,r,o)=>{s.fillStyle="#1b1b1d",s.fillRect(0,0,r,o),s.fillStyle="#0a0a0b";for(let a of[12,30,48])s.fillRect(a,0,4,o);for(let a=0;a<o;a+=16)s.fillRect(0,a,10,3),s.fillRect(54,a+8,10,3)}),t=_a(256,256,(s,r,o)=>{let a=s.createRadialGradient(128,128,30,128,128,128);a.addColorStop(0,"#3a3c40"),a.addColorStop(.45,"#8c8f94"),a.addColorStop(1,"#6d7075"),s.fillStyle=a,s.fillRect(0,0,r,o),s.strokeStyle="rgba(30,30,32,.8)",s.lineWidth=3;for(let l=0;l<12;l++){let c=l/12*Math.PI*2;s.beginPath(),s.arc(128,128,90,c,c+.4),s.stroke()}}),n=_a(256,128,(s,r,o)=>{s.fillStyle="#f4f4ee",s.fillRect(0,0,r,o),s.strokeStyle="#2f6b3a",s.lineWidth=6,s.strokeRect(5,5,r-10,o-10),s.fillStyle="#2f6b3a",s.font="bold 30px sans-serif",s.textAlign="center",s.fillText("\u54C1\u5DDD 300",128,44),s.font="bold 60px sans-serif",s.fillText("86-20",140,110),s.font="bold 30px sans-serif",s.fillText("\u3055",34,100)});return va={black:new Pe({color:723982,roughness:.6,metalness:.1}),trim:new Kt({color:328966,roughness:.18,metalness:.2,clearcoat:1,clearcoatRoughness:.08}),rubber:new Pe({color:1315862,roughness:.92}),tire:new Pe({color:6974058,map:e,roughness:.92,envMapIntensity:.35}),well:new Pe({color:328965,roughness:1}),wellD:new Pe({color:460551,roughness:1,side:ht}),interior:new Pe({color:1513499,roughness:.9}),seat:new Pe({color:1908258,roughness:.95}),seatRed:new Pe({color:7999510,roughness:.9}),chrome:new Pe({color:15264494,metalness:1,roughness:.06}),satin:new Pe({color:12106946,metalness:1,roughness:.32}),honey:new Pe({color:16777215,map:i,roughness:.7,metalness:.3}),rotor:new Pe({map:t,metalness:.9,roughness:.42}),reflector:new Pe({color:13620184,metalness:1,roughness:.18}),lens:new Kt({color:16777215,roughness:.03,metalness:0,transparent:!0,opacity:.22,clearcoat:1,envMapIntensity:2.2,depthWrite:!1}),amber:new Kt({color:16747024,emissive:16738816,emissiveIntensity:.25,roughness:.1,transparent:!0,opacity:.85,clearcoat:1}),clearLamp:new Kt({color:15921906,roughness:.05,transparent:!0,opacity:.6,clearcoat:1,envMapIntensity:2}),plate:new Pe({map:n,roughness:.5,metalness:.2}),carbon:new Kt({map:Bi("carbon.jpg",3),normalMap:Bi("carbon_n.jpg",3,!1),normalScale:new xe(.4,.4),color:16777215,metalness:.25,roughness:.4,clearcoat:1,clearcoatRoughness:.05}),mirror:new Pe({color:11187392,metalness:1,roughness:.02}),cage:new Pe({color:13158604,metalness:.6,roughness:.35})},va}function nr(i){let e=new On,[t]=i;if(t==="rr"){let[,n,s,r]=i,o=Math.min(r,n/2-.001,s/2-.001),a=-n/2,l=-s/2;e.moveTo(a+o,l),e.lineTo(a+n-o,l),e.quadraticCurveTo(a+n,l,a+n,l+o),e.lineTo(a+n,l+s-o),e.quadraticCurveTo(a+n,l+s,a+n-o,l+s),e.lineTo(a+o,l+s),e.quadraticCurveTo(a,l+s,a,l+s-o),e.lineTo(a,l+o),e.quadraticCurveTo(a,l,a+o,l)}else if(t==="circle")e.absarc(0,0,i[1],0,Math.PI*2,!1);else if(t==="poly"){let[,n,s]=i,r=n.length;for(let o=0;o<r;o++){let a=n[o],l=n[(o-1+r)%r],c=n[(o+1)%r],h=Math.hypot(l[0]-a[0],l[1]-a[1]),f=Math.hypot(c[0]-a[0],c[1]-a[1]),p=Math.min(s,h/2)/h,u=Math.min(s,f/2)/f,_=[a[0]+(l[0]-a[0])*p,a[1]+(l[1]-a[1])*p],x=[a[0]+(c[0]-a[0])*u,a[1]+(c[1]-a[1])*u];o===0?e.moveTo(_[0],_[1]):e.lineTo(_[0],_[1]),e.quadraticCurveTo(a[0],a[1],x[0],x[1])}e.closePath()}return e}function Av(i){if(i[0]==="rr")return[i[1],i[2]];if(i[0]==="circle")return[i[1]*2,i[1]*2];let e=1e9,t=-1e9,n=1e9,s=-1e9;for(let r of i[1])e=Math.min(e,r[0]),t=Math.max(t,r[0]),n=Math.min(n,r[1]),s=Math.max(s,r[1]);return[t-e,s-n]}var Rv=(i,e,t,n=18)=>new vn(i,{depth:e,bevelEnabled:t>0,bevelThickness:t,bevelSize:t*.8,bevelSegments:3,curveSegments:n}),Oc=new sa;function ya(i,e,t){Oc.set(e,t),Oc.far=10;let n=Oc.intersectObjects(i,!1)[0];if(!n)return null;let s=n.face.normal.clone().transformDirection(n.object.matrixWorld);return{p:n.point,n:s}}function Hc(i,e,t,n,s,r){let o=t.clone().lerp(n,s).normalize(),a=new U(0,1,0),l=new U().crossVectors(a,o).normalize(),c=new U().crossVectors(o,l).normalize(),h=new lt().makeBasis(l,c,o);i.quaternion.setFromRotationMatrix(h),i.position.copy(e),r&&(i.scale.x=-1)}function Ma(i,e,t,n){let s=Br(),r=new Ct,o=nr(i.shape),[a,l]=Av(i.shape),c=new ce(Rv(o,.02,.012),e==="head"?s.lens:e==="tail"?n:i.color==="amber"?s.amber:s.clearLamp);c.position.z=-.012,r.add(c);let h=new ce(new jo(o,18),e==="head"?s.reflector:s.black);if(h.position.z=-.02,r.add(h),e==="head"){let f=i.inner||"proj1",p=x=>{let m=new ce(new gi(x,16,12),t);return m.scale.z=.5,m},u=x=>new ce(new In(x,x*.12,8,24),s.chrome),_=(x,m,d)=>{x.position.set(m,d,-.008),r.add(x)};if(f==="twin")for(let x of[-a*.24,a*.24])_(p(l*.32),x,0),_(u(l*.38),x,0);else if(f==="proj3")for(let x=0;x<3;x++)_(p(l*.26),-a*.3+x*a*.27,-l*.05+x*.005);else if(f==="proj2")_(p(l*.3),-a*.18,-l*.05),_(p(l*.26),a*.2,-l*.02),_(u(l*.34),-a*.18,-l*.05);else{_(p(l*.33),a*.15,0),_(u(l*.38),a*.15,0);let x=new ce(new Oe(a*.4,l*.18,.01),t);_(x,-a*.22,-l*.25)}}else if(e==="tail"){if(i.ring){let f=new ce(new In(Math.min(a,l)*.3,Math.min(a,l)*.05,8,28),n);f.position.z=.012,r.add(f)}if(i.kind==="band"||i.kind==="bar"){for(let p of[-1,1]){let u=new ce(new Oe(a*.2,l*.55,.012),n);u.position.set(p*a*.37,0,.004),r.add(u)}let f=new ce(new Oe(a*.07,l*.4,.01),s.clearLamp);f.position.set(a*.18,0,.006),r.add(f)}}return r.userData.size=[a,l],r}function Cv(i,e){let t=new On,n=e*.24,s=e*.98,r=(o,a)=>{t.moveTo(-o,n),t.lineTo(o,n),t.lineTo(a,s),t.lineTo(-a,s),t.closePath()};return i==="six"?r(e*.11,e*.075):i==="star"?(t.moveTo(-e*.05,n),t.lineTo(e*.05,n),t.lineTo(e*.14,s),t.lineTo(e*.08,s),t.lineTo(0,n+e*.3),t.lineTo(-e*.08,s),t.lineTo(-e*.14,s),t.closePath()):i==="multi"?r(e*.045,e*.05):i==="mesh"?r(e*.022,e*.022):i==="dish"?r(e*.07,e*.055):r(e*.15,e*.12),t}var Pv={stock:5,six:6,star:5,multi:10,mesh:15,dish:5,fan:0};function Vf(i){let e=Br(),t=new Ct,n=i.R,s=i.width,r=i.rimR,o=s/2,a=[],l=n-r;a.push([r-.004,-o*.92]);for(let b=0;b<=8;b++){let S=b/8;a.push([r+l*S,-o*(.92+.08*Math.sin(S*Math.PI*.9))])}a.push([n,-o*.86]),a.push([n+.004,0]),a.push([n,o*.86]);for(let b=8;b>=0;b--){let S=b/8;a.push([r+l*S,o*(.92+.08*Math.sin(S*Math.PI*.9))])}a.push([r-.004,o*.92]);let c=new Rr(a.reverse().map(b=>new xe(b[0],b[1])),48),h=new ce(c,e.tire);h.rotation.z=Math.PI/2,h.castShadow=!0,t.add(h);let f=new Kt({color:new Re(i.rimColor),metalness:.95,roughness:.25,clearcoat:.6}),p=i.design==="dish"||i.design==="mesh"?e.chrome:f,u=o-.012,_=i.design==="dish"?.08:i.design==="mesh"?.05:.02,x=new ce(new rt(r,r,s*.9,40,1,!0),new Pe({color:3816512,metalness:.8,roughness:.5,side:ht}));x.rotation.z=Math.PI/2,t.add(x);let m=[[r-.025,u-_],[r-.01,u-_+.004],[r-.004,u-.006],[r+.006,u],[r+.008,u-.012]],d=new ce(new Rr(m.map(b=>new xe(b[0],b[1])),48),p);d.rotation.z=-Math.PI/2,d.scale.y=-1,t.add(d);let g=u-_-.035;if(i.design==="fan"){let b=new ce(new rt(r*.97,r*.97,.02,40),f);b.rotation.z=Math.PI/2,b.position.x=g+.02,t.add(b);let S=[];for(let F=0;F<14;F++){let q=new Oe(.018,r*.48,.035);q.translate(0,r*.62,0),q.rotateX(.35),q.rotateX(F/14*Math.PI*2),S.push(q)}let z=new ce(ei(S),e.black);z.rotation.y=Math.PI/2,z.position.x=g+.032,t.add(z)}else{let b=Pv[i.design]||5,S=Cv(i.design,r),z=new vn(S,{depth:i.design==="mesh"?.016:.028,bevelEnabled:!0,bevelThickness:.006,bevelSize:.005,bevelSegments:2,curveSegments:4}),F=z.attributes.position;for(let O=0;O<F.count;O++){let k=Math.hypot(F.getX(O),F.getY(O));F.setZ(O,F.getZ(O)+k/r*(_+.025))}z.computeVertexNormals();let q=[];for(let O=0;O<b;O++){let k=z.clone();if(k.rotateZ(O/b*Math.PI*2),i.design==="mesh"){let B=z.clone();B.rotateZ(.22),B.rotateZ(O/b*Math.PI*2),q.push(B),k.rotateZ(-.22)}q.push(k)}let D=new ce(ei(q),f);D.rotation.y=Math.PI/2,D.position.x=g,D.castShadow=!0,t.add(D)}let v=new ce(new rt(r*.26,r*.3,.05,24),f);v.rotation.z=Math.PI/2,v.position.x=g+.01,t.add(v);let M=new ce(new rt(r*.12,r*.13,.012,20),e.black);M.rotation.z=Math.PI/2,M.position.x=g+.038,t.add(M);let w=[];for(let b=0;b<5;b++){let S=b/5*Math.PI*2,z=new rt(.011,.011,.02,6);z.rotateZ(Math.PI/2),z.translate(g+.036,Math.cos(S)*r*.19,Math.sin(S)*r*.19),w.push(z)}t.add(new ce(ei(w),e.chrome));let y=new Ct,E=new ce(new rt(r*.85,r*.85,.024,36),e.rotor);E.rotation.z=Math.PI/2,E.position.x=g-.06,y.add(E);let A=new ce(new rt(r*.88,r*.88,.05,16,1,!1,-.55,1.1),new Pe({color:new Re(i.caliper),roughness:.35,metalness:.2}));return A.rotation.z=Math.PI/2,A.rotation.x=.6,A.position.x=g-.06,A.scale.set(1,1,1),y.add(A),{spin:t,brake:y}}function Oi(i,e,t){let n=[],s=[],r=e.length;for(let a of i)for(let[l,c]of e)n.push(a.p.x+a.a.x*l+a.b.x*c,a.p.y+a.a.y*l+a.b.y*c,a.p.z+a.a.z*l+a.b.z*c);for(let a=0;a<i.length-1;a++)for(let l=0;l<(t?r:r-1);l++){let c=a*r+l,h=a*r+(l+1)%r,f=(a+1)*r+(l+1)%r,p=(a+1)*r+l;s.push(c,p,h,h,p,f)}let o=new Xe;return o.setAttribute("position",new ze(n,3)),o.setIndex(s),o.computeVertexNormals(),o}function Wf(i,e){let t=new On,n=16,s=[];for(let r=0;r<=n;r++){let o=r/n;s.push([o*i,e*i*5*(.2969*Math.sqrt(o)-.126*o-.3516*o*o+.2843*o*o*o-.1015*o*o*o*o)])}t.moveTo(0,0);for(let r of s)t.lineTo(r[0],r[1]+i*.03*Math.sin(r[0]/i*Math.PI));for(let r=s.length-1;r>=0;r--)t.lineTo(s[r][0],-s[r][1]*.5+i*.03*Math.sin(s[r][0]/i*Math.PI));return t}function kc(i,e){let t=new Ct,n=new ce(new Oe(.5,.62,.12,2,2,1),i);n.position.set(0,.36,-.16),n.rotation.x=-.2,t.add(n);let s=new ce(new Oe(.5,.12,.5),i);s.position.set(0,.06,.08),t.add(s);let r=new ce(new Oe(e?.36:.26,e?.3:.18,.11),i);if(r.position.set(0,e?.74:.78,-.24),r.rotation.x=-.2,t.add(r),e)for(let o of[-1,1]){let a=new ce(new Oe(.07,.5,.26),i);a.position.set(o*.25,.32,-.08),a.rotation.x=-.2,t.add(a)}return t}var Je=(i,e,t)=>new U(i,e,t);function Iv(i,e){let t={color:new Re(i.paint),map:e,metalness:.05,roughness:.32,clearcoat:1,clearcoatRoughness:.03,envMapIntensity:1.1},n=i.finish;return n==="metal"?(t.metalness=.65,t.roughness=.38):n==="pearl"?(t.metalness=.35,t.roughness=.3,t.iridescence=.7,t.iridescenceIOR=1.5,t.sheen=.4,t.sheenColor=new Re(16777215)):n==="matte"?(t.metalness=.1,t.roughness=.75,t.clearcoat=0):n==="chrome"&&(t.metalness=1,t.roughness=.05,t.clearcoat=.4),new Kt(t)}var Xf=i=>i[0]==="poly"?["poly",i[1].map(e=>[-e[0],e[1]]).reverse(),i[2]]:i;function Wc(i,e,t={}){let n=Nf[i.id],s=e.eq,r=Br(),o=s.kit,a=Bf(n,o),l=new Ct,c=new Ct;l.add(c);let h={stock:0,low:.035,coil:.065,slam:.095}[s.susp]||0,f={coil:.035,slam:.09}[s.susp]||0;c.position.y=-h;let p=Hf(n,a,{carbonHood:s.hood.indexOf("carbon")===0}),u=Iv(e,p.panel),_=s.roof==="carbon"?r.carbon:s.roof==="black"?r.trim:u,x={none:.42,mid:.72,dark:.92}[s.tint]??.42,m=new Kt({color:s.tint==="none"?1845811:329224,metalness:.2,roughness:.02,transparent:!0,opacity:x,clearcoat:1,envMapIntensity:2,depthWrite:!1}),d={white:16774370,yellow:16764986,ice:13034751}[s.lights]||16774370,g=new Pe({color:16777215,emissive:d,emissiveIntensity:1.2,roughness:.2}),v=new Kt({color:9177616,emissive:16716832,emissiveIntensity:.35,roughness:.12,transparent:!0,opacity:.93,clearcoat:1}),M=(X,I,N=!0,L=c)=>{if(!X)return null;let V=new ce(X,I);return V.castShadow=N,V.receiveShadow=!1,L.add(V),V},w=[];w.push(M(p.geos.paint,u)),w.push(M(p.geos.hood,r.carbon)),M(p.geos.well,r.well,!1),M(p.geos.under,r.black,!1),M(p.geos.interior,r.interior,!1);let y=kf(n,a,{});M(y.glass,m,!1),w.push(M(y.trim,r.trim)),w.push(M(y.roof,_)),w.push(M(y.paint,u));let E=w.filter(Boolean);l.updateMatrixWorld(!0);let A=a.hl,b=Je(0,0,1),S=Je(0,0,-1),z=a.deckZ(A-.04),F=a.deckZ(-A+.04),q=(X,I)=>ya(E,Je(X,(I<0?z+I:I)-h,A+1),S),D=(X,I)=>ya(E,Je(X,(I<0?F+I:I)-h,-A-1),b),O=(X,I,N,L,V)=>{let he=I.p.clone().addScaledVector(I.n,-V);he.y+=h,Hc(X,he,I.n,N,L),c.add(X)},k=X=>a.hwPlan(X),B=[];if(n.head.type==="popup"){let X=n.head;for(let I of[1,-1]){let N=new Ct,L=A-.16,V=I*k(L)*X.x,he=a.deckZ(L)+.004,ie=new ce(new Oe(X.w,.14,X.d*.9),u);ie.position.set(0,.07,-X.d*.45),N.add(ie);let le=new ce(new Oe(X.w*.94,.11,.01),r.black);le.position.set(0,.07,.001),N.add(le);for(let fe of[-.25,.25]){let ye=new ce(new rt(.048,.05,.02,20),g);ye.rotation.x=Math.PI/2,ye.position.set(fe*X.w,.07,.008),N.add(ye)}N.position.set(V,he,L+X.d/2),N.visible=!1,c.add(N),B.push(N)}}else for(let X of[1,-1]){let I=X>0?n.head.shape:Xf(n.head.shape),N=q(X*k(A-.2)*n.head.x,n.head.y);if(!N)continue;let L=Ma({shape:I,inner:n.head.inner},"head",g);X<0&&L.children.forEach(V=>{(V.geometry.type==="SphereGeometry"||V.geometry.type==="TorusGeometry"||V.geometry.type==="BoxGeometry")&&(V.position.x*=-1)}),L.scale.set(1.22,1.22,1),O(L,N,b,1-(n.head.blend??.3),.004)}for(let X of n.turn||[])for(let I of[1,-1]){let N=q(I*k(A-.1)*X.x,X.y);N&&O(Ma(X,"turn"),N,b,.6,.006)}for(let X of n.grille||[]){let I=X.x===0?[0]:[1,-1];for(let N of I){let L=X.x===0?0:Math.abs(X.x)<.5?N*Math.abs(X.x):N*k(A-.1)*X.x,V=q(L,X.y);if(!V)continue;let he=new vn(nr(X.shape),{depth:.03,bevelEnabled:!0,bevelThickness:.006,bevelSize:.006,bevelSegments:2,curveSegments:12}),ie=new ce(he,r.honey);O(ie,V,b,.7,.018);let le=new ce(new vn(nr(X.shape),{depth:.012,bevelEnabled:!0,bevelThickness:.004,bevelSize:.012,bevelSegments:2,curveSegments:12}),r.trim);O(le,V,b,.7,.02)}}for(let X of n.tail){let I=X.x===0?[0]:[1,-1];for(let N of I){let L=N*k(-A+.1)*X.x,V=D(L,X.y);if(!V)continue;let he=N>0?Xf(X.shape):X.shape,ie=Ma(Object.assign({},X,{shape:he}),X.kind==="garnish"?"turn":"tail",null,X.kind==="garnish"?r.trim:v);X.kind==="garnish"&&(ie.children[0].material=r.trim),X.kind||ie.scale.set(1.12,1.12,1),O(ie,V,S,.5,.006)}}let Y=(X,I)=>{if(!X)return;let N=new ce(new Oe(.33,.165,.012),[r.black,r.black,r.black,r.black,r.plate,r.black]);O(N,X,I,.9,-.004)};Y(q(0,n.plateF),b),Y(D(0,n.plateR),S);for(let X of[1,-1]){let I=a.zA-.12,N=k(I)*(1-n.sh*.9)-.035,L=a.deckZ(I)+.1,V=new Ct,he=new ce(new gi(1,20,14,0,Math.PI*2,0,Math.PI),u);he.scale.set(.075,.05,.1),he.position.set(X*.11,.02,0),he.castShadow=!0,V.add(he);let ie=new ce(new Pn(1,20),r.mirror);ie.scale.set(.065,.044,1),ie.position.set(X*.11,.02,-.035),ie.rotation.y=Math.PI,V.add(ie);let le=new ce(new Oe(.12,.02,.06),r.trim);le.position.set(X*.05,-.015,.01),V.add(le);let fe=new ce(new Oe(.03,.09,.14),r.trim);fe.position.set(0,-.02,.01),V.add(fe),V.position.set(X*(N+.02),L-.02,I),c.add(V)}for(let X of[1,-1]){let I=a.zA-.03,N=a.deckZ(I)+.012,L=new ce(new Oe(.5,.012,.018),r.black);L.position.set(X*.2-.05,N,I-.02),L.rotation.y=X*.08,c.add(L)}let W=a.zRf-.42,K=a.bottomZ(W)+.12,ee=n.hand==="L"?1:-1,me=s.weight==="race"?r.seatRed:r.seat;for(let X of[1,-1]){let I=kc(me,s.weight!=="stock");I.position.set(X*.36,K+.05,W),c.add(I)}if(!n.cab.hatch||i.id==="k86"){let X=kc(r.seat,!1);X.scale.set(2.2,.9,.9),X.position.set(0,K+.05,W-.85),s.weight!=="race"&&c.add(X)}let $=a.zA-.2,se=a.deckZ($)-.04,Me=new ce(new Oe(k($)*1.6,.14,.4),r.interior);Me.position.set(0,se,$),c.add(Me);let Se=new ce(new In(.18,.022,10,28),r.black);if(Se.position.set(ee*.36,se+.06,$-.32),Se.rotation.x=-.35,c.add(Se),s.weight==="race"){let X=(V,he)=>{let ie=he.clone().sub(V),le=new ce(new rt(.02,.02,ie.length(),8),r.cage);le.position.copy(V).add(he).multiplyScalar(.5),le.quaternion.setFromUnitVectors(Je(0,1,0),ie.normalize()),c.add(le)},I=W-.45,N=n.cab.roof-.08,L=a.zRf-.05;for(let V of[1,-1])X(Je(V*.55,K,I),Je(V*.5,N,I)),X(Je(V*.5,N,I),Je(V*.48,N,L)),X(Je(V*.48,N,L),Je(V*.62,a.deckZ(a.zA-.2),a.zA-.2));X(Je(.5,N,I),Je(-.5,N,I)),X(Je(.55,K,I),Je(-.5,N,I))}let Q=i.tips||1,we=(n.bigTip?.05:.034)*(s.exhaust==="straight"?1.4:s.exhaust==="sport"?1.18:1),Ie=s.exhaust==="straight"?new Pe({color:9081048,metalness:1,roughness:.22}):r.chrome,G=Q===4?[.62,.46,-.46,-.62]:Q===2?[.55,-.55]:[-.55],re=[];for(let X of G){let I=X*k(-A+.1),N=a.bottomZ(-A+.08)-.02,L=new ce(new rt(we,we*.92,.26,18,1,!0),Ie);L.material.side=ht,L.rotation.x=Math.PI/2,L.position.set(I,N,-A+.06),c.add(L);let V=new ce(new Pn(we*.9,16),r.well);V.position.set(I,N,-A+.03),V.rotation.y=Math.PI,c.add(V),re.push(Je(I,N-h,-A-.12))}if(s.hood==="vent"||s.hood==="carbonvent")for(let X of[1,-1]){let I=a.zA+(A-a.zA)*.45,N=ya(E,Je(X*k(I)*.3,3,I),Je(0,-1,0));if(!N)continue;let L=new ce(new vn(nr(["rr",.16,.3,.03]),{depth:.02,bevelEnabled:!0,bevelThickness:.006,bevelSize:.008,bevelSegments:2}),r.honey),V=N.p.clone();V.y+=h-.012,Hc(L,V,N.n,Je(0,1,0),0,!1),c.add(L)}for(let X of[a.zF,a.zR])for(let I of[1,-1]){let N=[],L=a.Ra,V=n.R,he=a.bottomZ(X)+.01,ie=(Te,ke,Fe)=>{let be=I*(p.surfX(ke,Te)-.004);N.push({p:Je(be,Te,ke),a:Fe,b:Je(I,0,0)})};for(let Te=he;Te<V;Te+=.03)ie(Te,X-L,Je(0,0,-1));for(let Te=0;Te<=40;Te++){let ke=Te/40*Math.PI;ie(V+Math.sin(ke)*L,X-Math.cos(ke)*L,Je(0,Math.sin(ke),-Math.cos(ke)))}for(let Te=V-.03;Te>=he;Te-=.03)ie(Te,X+L,Je(0,0,1));let le=Oi(N,[[-.004,-.025],[-.004,0],[.004,.006],[.014,.004],[.018,-.006]],!1);M(le,u);let fe=Oi(N,[[0,-.004],[0,-.03],[.02,-.12],[.03,-.36]],!1),ye=M(fe,r.well,!1);ye.material=r.wellD}for(let X of[a.zF,a.zR])for(let I of[1,-1]){let N=new ce(new rt(a.Ra-.01,a.Ra-.01,.36,24,1,!0,0,Math.PI),r.well);N.material.side=ht,N.rotation.z=Math.PI/2,N.rotation.y=0,N.position.set(I*(k(X)-.24),n.R+h,X),c.add(N)}let P=o==="wide"||o==="widepro",te=o==="aero"||o==="widepro",J=te?r.carbon:u,ue=(X,I,N)=>{let L=[];for(let V=X;V<=I+1e-6;V+=.03)L.push(Je(k(V)*(1-n.tuck*.5),a.bottomZ(V),V));if(N!=null){let V=N>0?A-.02:-A+.02,he=k(V)*(1-n.tuck*.5),ie=[];for(let fe=1;fe<12;fe++){let ye=he*(1-2*fe/12);ie.push(Je(ye,a.bottomZ(V),V))}let le=L.map(fe=>Je(-fe.x,fe.y,fe.z)).reverse();return L.concat(ie,le)}return L},ne=(X,I)=>X.map((N,L)=>{let V=X[Math.max(0,L-1)],he=X[Math.min(X.length-1,L+1)],ie=he.clone().sub(V);ie.y=0,ie.normalize();let le=Je(ie.z,0,-ie.x);return le.dot(Je(N.x,0,N.z*.25))<0&&le.negate(),{p:N,a:le,b:I||Je(0,1,0)}});if(o!=="stock"){let X=te?.07:.035,I=Oi(ne(ue(a.zF+a.Ra+.04,A-.02,1)),[[-.14,.03],[0,.025],[X,-.012],[X-.01,-.03],[-.14,-.025]],!0);M(I,te?r.carbon:r.trim);let N=Oi(ne(ue(a.zR+a.Ra+.03,a.zF-a.Ra-.03)).map(V=>V),[[-.05,.07],[.02,.06],[.04+(te?.02:0),-.025],[.02,-.05],[-.05,-.05]],!0);M(N,J);let L=Oi(ne(ue(a.zR+a.Ra+.03,a.zF-a.Ra-.03).map(V=>Je(-V.x,V.y,V.z))),[[-.05,.07],[.02,.06],[.04+(te?.02:0),-.025],[.02,-.05],[-.05,-.05]],!0);M(L,J)}if(te){let X=a.bottomZ(-A+.1),I=new ce(new Oe(k(-A+.2)*1.5,.015,.42),r.carbon);I.position.set(0,X-.02,-A+.17),I.rotation.x=-.12,c.add(I);for(let N=-3;N<=3;N++){let L=new ce(new Oe(.01,.1,.4),r.carbon);L.position.set(N*.17,X+.02,-A+.15),c.add(L)}for(let N of[1,-1])for(let L=0;L<2;L++){let V=q(N*k(A-.15)*.93,.32+L*.1);if(!V)continue;let he=new On;he.moveTo(0,0),he.lineTo(.2,0),he.lineTo(.02,.05),he.closePath();let ie=new ce(new vn(he,{depth:.008,bevelEnabled:!1}),r.carbon);ie.position.copy(V.p),ie.position.y+=h,ie.rotation.set(Math.PI/2,0,N>0?-.5:Math.PI+.5),c.add(ie)}}if(P){let X=o==="widepro"?.1:.075,I=new Pe({color:14211806,metalness:1,roughness:.25});for(let N of[a.zF,a.zR])for(let L of[1,-1]){let V=a.Ra+.005,he=L*(k(N)-.03),ie=n.R,le=[],fe=a.bottomZ(N)+.03;for(let ke=fe;ke<ie;ke+=.04)le.push({p:Je(he,ke,N-V),a:Je(0,0,-1),b:Je(L,0,0)});for(let ke=0;ke<=24;ke++){let Fe=ke/24*Math.PI,be=Je(0,Math.sin(Fe),-Math.cos(Fe));le.push({p:Je(he,ie+Math.sin(Fe)*V,N-Math.cos(Fe)*V),a:be,b:Je(L,0,0)})}for(let ke=ie-.04;ke>=fe;ke-=.04)le.push({p:Je(he,ke,N+V),a:Je(0,0,1),b:Je(L,0,0)});let ye=[[-.01,-.02],[-.01,.01],[.01,X*.85],[.04,X],[.075,X*.7],[.095,.02],[.095,-.02]],Te=new ce(Oi(le,ye,!0),u);if(Te.castShadow=!0,c.add(Te),o==="wide")for(let ke=0;ke<=9;ke++){let Fe=ke/9*Math.PI,be=new ce(new gi(.011,8,6),I);be.position.set(he+L*(X*.97),ie+Math.sin(Fe)*(V+.03),N-Math.cos(Fe)*(V+.03)),c.add(be)}}}let Ee=-A+.2,pe=a.deckZ(Ee),R=n.W;if(s.wing==="duck"){let X=new On;X.moveTo(.28,0),X.quadraticCurveTo(.1,.02,-.03,.075),X.lineTo(0,.04),X.quadraticCurveTo(.1,-.005,.28,-.02),X.closePath();let I=new ce(new vn(X,{depth:R*.82,bevelEnabled:!0,bevelThickness:.01,bevelSize:.01,bevelSegments:2}),u);I.rotation.y=-Math.PI/2,I.position.set(R*.41,a.deckZ(-A+.05),-A+.02),I.castShadow=!0,c.add(I)}else if(s.wing!=="none"){let X={lip:[.17,.07,R*.78,u],hoop:[.24,.27,R*.86,u],gt:[.28,.34,R*.95,r.carbon],gtbig:[.34,.5,R*1.04,r.carbon]}[s.wing],[I,N,L,V]=X,he=new ce(new vn(Wf(I,.14),{depth:L,bevelEnabled:!0,bevelThickness:.004,bevelSize:.004,bevelSegments:1,curveSegments:4}),V);if(he.rotation.set(0,Math.PI/2,0),he.rotateZ(.12),he.position.set(-L/2,pe+N,Ee+I*.5),he.castShadow=!0,c.add(he),s.wing==="hoop")for(let ie of[1,-1]){let le=[];for(let ye=0;ye<=10;ye++){let Te=ye/10;le.push({p:Je(ie*(L/2-.04-Te*.1),pe+Te*N,Ee+.05-Te*.08),a:Je(0,0,1),b:Je(ie,0,0)})}let fe=new ce(Oi(le,[[-.07,-.015],[.07,-.015],[.07,.015],[-.07,.015]],!0),u);fe.castShadow=!0,c.add(fe)}else if(s.wing==="lip")for(let ie of[1,-1]){let le=new ce(new Oe(.03,N,.1),u);le.position.set(ie*L*.3,pe+N/2,Ee+.02),c.add(le)}else for(let ie of[1,-1]){let le=new ce(new Oe(.018,N+.05,.16),r.black);le.position.set(ie*L*.22,pe+N/2,Ee+I*.1),le.castShadow=!0,c.add(le);let fe=new ce(new vn(nr(["rr",I*1.25,N*.45+.08,.02]),{depth:.008,bevelEnabled:!1}),r.carbon);fe.rotation.y=Math.PI/2,fe.position.set(ie*L/2+(ie>0?0:-.008),pe+N-.03,Ee),c.add(fe)}}let T={s0:0,s1:1,s2:2}[s.wsize]||0,Z=n.tireW+(P?.04:0)+T*.008,ve=Math.min(n.R-.06,(n.rim+T)*.0127+.012),_e=[];for(let[X,I]of[[a.zF,!0],[a.zR,!1]])for(let N of[1,-1]){let L=new Ct,V=new Ct,he=Vf({R:n.R,rimR:ve,width:Z,design:s.wheels,rimColor:e.wheelColor,caliper:e.caliper}),ie=N*(k(X)-Z/2-(P?-.01:.012)+(s.susp==="slam"?.015:0));L.position.set(ie,n.R,X),V.rotation.set(0,N>0?0:Math.PI,f),V.add(he.spin),V.add(he.brake),L.add(V),l.add(L),_e.push({pivot:L,spin:he.spin,front:I,sign:N})}let ge=null;s.neon==="on"&&(ge=new ce(new wt(n.W+1.6,n.L+1.4),new ut({map:ba(),color:new Re(e.neonColor),transparent:!0,blending:Yt,depthWrite:!1})),ge.rotation.x=-Math.PI/2,ge.position.y=.03,l.add(ge));let Ue=new ce(new wt(n.W+.7,n.L+.6),new ut({map:Lv(),transparent:!0,depthWrite:!1,opacity:.85,color:0}));Ue.rotation.x=-Math.PI/2,Ue.position.y=.012,Ue.renderOrder=1,l.add(Ue),l.traverse(X=>{X.isMesh&&X.castShadow===void 0&&(X.castShadow=!1)});let Ae=Math.abs(_e[2].pivot.position.x);return l.userData={wheels:_e,exhaust:re,brakeM:v,headM:g,headCol:d,rearX:Ae,rearZ:a.zR,frontZ:a.zF,L:n.L,W:n.W+(P?.15:0),R:n.R,neon:ge,drop:h,body:c,popups:B,shadow:Ue},l}var Gc=null,Vc=null;function ba(){if(Gc)return Gc;let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.25,"rgba(255,255,255,.55)"),t.addColorStop(.6,"rgba(255,255,255,.12)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),Gc=new pt(i)}function Lv(){if(Vc)return Vc;let i=document.createElement("canvas");i.width=128,i.height=256;let e=i.getContext("2d"),t=e.createImageData(128,256);for(let n=0;n<256;n++)for(let s=0;s<128;s++){let r=Math.abs(s-63.5)/64,o=Math.abs(n-127.5)/128,a=Math.pow(Math.pow(r,4)+Math.pow(o,4),.25),l=Math.max(0,Math.min(1,(1-a)/.35));t.data[(n*128+s)*4+3]=Math.round(l*l*200)}return e.putImageData(t,0,0),Vc=new pt(i)}function Xc(i){i.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material:[e.material]).forEach(t=>{Object.values(Br()).includes(t)||t.dispose()})})}Lt();var Ea=(i,e,t)=>i<e?e:i>t?t:i;function qf(i,e={}){let t=i.length,n=i.map(y=>({x:y[0],z:y[1],r:y[2]||12,y:y[3]})),s=[],r=n.map((y,E)=>{let A=n[(E-1+t)%t],b=n[(E+1)%t],S=y.x-A.x,z=y.z-A.z,F=Math.hypot(S,z);S/=F,z/=F;let q=b.x-y.x,D=b.z-y.z,O=Math.hypot(q,D);q/=O,D/=O;let k=Ea(S*q+z*D,-1,1),B=Math.acos(k),Y=S*D-z*q;if(B<.001)return{a:{x:y.x,z:y.z},b:{x:y.x,z:y.z},straight:!0,y:y.y};let W=y.r*Math.tan(B/2);W=Math.min(W,.49*F,.49*O);let K=W/Math.tan(B/2),ee=Math.sign(Y),me={x:y.x-S*W,z:y.z-z*W},$={x:y.x+q*W,z:y.z+D*W},se={x:me.x-z*K*ee,z:me.z+S*K*ee};return{a:me,b:$,c:se,r:K,s:ee,th:B,y:y.y}});for(let y=0;y<t;y++){let E=r[y],A=r[(y+1)%t];if(E.straight)s.push({x:E.a.x,z:E.a.z,apex:y});else{let z=Math.atan2(E.a.z-E.c.z,E.a.x-E.c.x),F=Math.max(2,Math.ceil(E.r*E.th/.5));for(let q=0;q<=F;q++){let D=z+E.s*E.th*q/F;s.push({x:E.c.x+Math.cos(D)*E.r,z:E.c.z+Math.sin(D)*E.r,apex:q===F>>1?y:-1})}}let b=Math.hypot(A.a.x-E.b.x,A.a.z-E.b.z),S=Math.max(1,Math.ceil(b/.5));for(let z=1;z<S;z++)s.push({x:E.b.x+(A.a.x-E.b.x)*z/S,z:E.b.z+(A.a.z-E.b.z)*z/S,apex:-1})}let o=s.length,a=[0];for(let y=1;y<=o;y++){let E=s[y%o],A=s[y-1];a.push(a[y-1]+Math.hypot(E.x-A.x,E.z-A.z))}let l=a[o],c=e.step||1,h=Math.round(l/c),f=[],p=[];s.forEach((y,E)=>{y.apex>=0&&n[y.apex].y!=null&&p.push({s:a[E],y:n[y.apex].y})});let u=0;for(let y=0;y<h;y++){let E=y/h*l;for(;a[u+1]<E;)u++;let A=(E-a[u])/(a[u+1]-a[u]||1),b=s[u],S=s[(u+1)%o];f.push({x:b.x+(S.x-b.x)*A,z:b.z+(S.z-b.z)*A,s:E,y:0})}if(p.length){p.sort((A,b)=>A.s-b.s);let y=p.length;for(let A of f){let b=0;for(;b<y&&p[b].s<=A.s;)b++;let S=p[(b-1+y)%y],z=p[b%y],F=S.s,q=z.s;q<=F&&(q+=l);let D=A.s;D<F&&(D+=l),A.y=S.y+(z.y-S.y)*Ea((D-F)/(q-F||1),0,1)}let E=Math.round((e.smooth||30)/c);for(let A=0;A<3;A++){let b=f.map(z=>z.y),S=[];for(let z=0;z<h;z++){let F=0;for(let q=-E;q<=E;q++)F+=b[((z+q)%h+h)%h];S.push(F/(2*E+1))}f.forEach((z,F)=>z.y=S[F])}}let _=e.maxGrade||.09;for(let y=0;y<30;y++){let E=0;for(let b=0;b<h;b++)E=Math.max(E,Math.abs(f[(b+1)%h].y-f[b].y)/c);if(E<=_)break;let A=f.reduce((b,S)=>b+S.y,0)/h;for(let b of f)b.y=A+(b.y-A)*.9}let x=Math.min(...f.map(y=>y.y));for(let y of f)y.y-=x;let m=1e9,d=-1e9,g=1e9,v=-1e9;for(let y=0;y<h;y++){let E=f[(y-1+h)%h],A=f[(y+1)%h],b=f[y],S=A.x-E.x,z=A.z-E.z,F=Math.hypot(S,z)||1;b.tx=S/F,b.tz=z/F,b.nx=b.tz,b.nz=-b.tx,b.grade=(A.y-E.y)/F;let q=f[(y+3)%h],D=f[(y-3+h)%h],O=Math.atan2(q.x-b.x,q.z-b.z),k=Math.atan2(b.x-D.x,b.z-D.z),B=O-k;for(;B>Math.PI;)B-=Math.PI*2;for(;B<-Math.PI;)B+=Math.PI*2;b.k=B/(6*c),m=Math.min(m,b.x),d=Math.max(d,b.x),g=Math.min(g,b.z),v=Math.max(v,b.z)}let M=e.width||10,w=f[0];return{pts:f,len:l,N:h,step:c,halfW:M/2,shoulder:e.shoulder??1.2,limit:M/2+(e.shoulder??1.2),start:{x:w.x,z:w.z,y:w.y,h:Math.atan2(w.tx,w.tz)},bounds:{x0:m,x1:d,z0:g,z1:v}}}function Yf(i,e){return{arena:{hx:i,hz:e},pts:[],len:0,N:0,halfW:0,limit:0,start:{x:0,z:-e*.55,y:0,h:Math.PI/2},bounds:{x0:-i,x1:i,z0:-e,z1:e}}}function qc(i,e,t,n){if(i.arena)return{i:-1,lat:0,y:0,p:null,grade:0};let s=i.pts,r=i.N,o=-1,a=1e18;if(n>=0)for(let p=-30;p<=30;p++){let u=((n+p)%r+r)%r,_=s[u],x=(_.x-e)*(_.x-e)+(_.z-t)*(_.z-t);x<a&&(a=x,o=u)}if(o<0||a>400)for(let p=0;p<r;p++){let u=s[p],_=(u.x-e)*(u.x-e)+(u.z-t)*(u.z-t);_<a&&(a=_,o=p)}let l=s[o],c=(e-l.x)*l.tx+(t-l.z)*l.tz,h=c>=0?s[(o+1)%r]:s[(o-1+r)%r],f=Math.min(1,Math.abs(c)/i.step);return{i:o,lat:(e-l.x)*l.nx+(t-l.z)*l.nz,y:l.y+(h.y-l.y)*f,p:l,grade:l.grade}}function wa(i,e,t){let n=i.bounds,s=n.x0-t,r=n.z0-t,o=Math.ceil((n.x1-n.x0+2*t)/e)+1,a=Math.ceil((n.z1-n.z0+2*t)/e)+1,l=new Float32Array(o*a).fill(1e9),c=new Int32Array(o*a).fill(-1),h=new Int8Array(o*a),f=i.pts,p=Math.ceil(Math.min(t,24)/e);for(let x=0;x<i.N;x++){let m=f[x],d=Math.round((m.x-s)/e),g=Math.round((m.z-r)/e);for(let v=-p;v<=p;v++)for(let M=-p;M<=p;M++){let w=d+M,y=g+v;if(w<0||y<0||w>=o||y>=a)continue;let E=s+w*e,A=r+y*e,b=(E-m.x)*(E-m.x)+(A-m.z)*(A-m.z),S=y*o+w;b<l[S]&&(l[S]=b,c[S]=x)}}let u=(x,m,d,g)=>{let v=c[g];if(v<0)return;let M=f[v],w=s+m*e,y=r+d*e,E=(w-M.x)*(w-M.x)+(y-M.z)*(y-M.z);E<l[x]&&(l[x]=E,c[x]=v)};for(let x=0;x<2;x++){for(let m=0;m<a;m++)for(let d=0;d<o;d++){let g=m*o+d;d>0&&u(g,d,m,g-1),m>0&&(u(g,d,m,g-o),d>0&&u(g,d,m,g-o-1),d<o-1&&u(g,d,m,g-o+1))}for(let m=a-1;m>=0;m--)for(let d=o-1;d>=0;d--){let g=m*o+d;d<o-1&&u(g,d,m,g+1),m<a-1&&(u(g,d,m,g+o),d<o-1&&u(g,d,m,g+o+1),d>0&&u(g,d,m,g+o-1))}}for(let x=0;x<o*a;x++){let m=c[x];if(m<0)continue;l[x]=Math.sqrt(l[x]);let d=f[m],g=x%o,v=x/o|0;h[x]=(s+g*e-d.x)*d.nx+(r+v*e-d.z)*d.nz>=0?1:-1}return{x0:s,z0:r,nx:o,nz:a,cell:e,dist:l,idx:c,side:h,at:(x,m)=>{let d=Ea(Math.round((x-s)/e),0,o-1),g=Ea(Math.round((m-r)/e),0,a-1),v=g*o+d;return{d:l[v],i:c[v],side:h[v]}}}}function Zf(i,e,t){let n=0,s=i.pts,r=i.N;for(let o=0;o<r;o+=2){let a=s[o],l=s[(o+2)%r];a.z<=t?l.z>t&&(l.x-a.x)*(t-a.z)-(e-a.x)*(l.z-a.z)>0&&n++:l.z<=t&&(l.x-a.x)*(t-a.z)-(e-a.x)*(l.z-a.z)<0&&n--}return n!==0}function Dv(i,e,t,n,s,r,o,a,l){let c=[];for(let h=0;h<t;h++){let f=e+h*s*l,p=h%2===0,u=p?i:i+n,_=p?i+n:i,x=(h%3-1)*6;c.push([u+(p?18:-18),f+x,30,o+a*h]),c.push([(u+_)/2,f-x*.6+(p?4:-4),40,o+a*(h+.5)]),c.push([_,f,r,o+a*(h+.8)]),c.push([_+(p?6:-6),f+s*l*.5,r,o+a*(h+.9)])}return c}var Or=[{id:"haruna",name:"Touge do Monte Haruna",sub:"P\xF4r do sol \xB7 serra com grampos e guard-rails",kind:"touge",theme:"sunset",thumb:["#2a2350","#c8603e","#ffc07a"],width:9,shoulder:1,pts:[[59.5,0,45.3,21],[86.8,-65.4,36.8,34.7],[54.4,-103,24.1,41],[102.9,-149.7,39.9,39.2],[180.2,-139.1,23,35.1],[199.9,-82.1,20.3,35.1],[141.5,-13.4,19.1,39.2],[90,-46.4,13.4,41],[133.7,18.5,59.7,34.7],[192.8,5.1,18.3,21],[207,93.3,31.3,7.3],[253.4,138.1,51.9,1],[255.4,197.5,18.6,2.8],[173.8,217.9,22.3,6.9],[124.4,158.6,38.3,6.9],[168.4,79.5,12.2,2.8],[35.7,147.7,22,1],[0,0,22,7.3]],sky:{sun:[-.62,.13,-.55],turbidity:9,rayleigh:2.6,exposure:.75,hdr:"venice_sunset_1k.hdr",fog:"#d39a7c",fogD:.0022}},{id:"iroha",name:"Serra de Irohazaka",sub:"Outono \xB7 escada de grampos na montanha",kind:"touge",theme:"autumn",thumb:["#3b78c4","#9cc6ea","#e9a25a"],width:8.5,shoulder:1,pts:null,gen:()=>{let i=Dv(0,0,6,105,34,12,0,11,1),e=[[150,235,26,70],[205,200,18,66],[180,150,22,60],[235,110,18,52],[200,60,20,44],[250,15,22,34],[215,-45,18,22],[150,-70,22,14],[90,-40,16,8],[30,-75,22,3],[-40,-40,20,0]];return i.concat(e)},sky:{sun:[.45,.42,-.4],turbidity:4,rayleigh:1.4,exposure:.55,hdr:"quarry_01_1k.hdr",fog:"#c8d4dc",fogD:.0016}},{id:"shibuya",name:"Ruas de Shibuya",sub:"Noite \xB7 neon, esquinas de 90\xB0 e asfalto molhado",kind:"city",theme:"neon",thumb:["#05060f","#1d1440","#ff2d6f"],width:11,shoulder:.4,pts:[[0,0,10,0],[110,0,10,1],[110,60,9,3],[170,60,9,4],[170,-20,10,3],[240,-20,12,2],[240,110,10,1],[150,110,10,2],[150,150,8,3],[40,150,10,4],[40,90,9,3],[-30,90,10,2],[-30,22,12,1],[-12,0,8,0]],sky:{night:!0,hdr:"moonless_golf_1k.hdr",fog:"#1b1430",fogD:.006,exposure:.9}},{id:"setagaya",name:"Bairro de Setagaya",sub:"Entardecer \xB7 ruas estreitas, postes e fios",kind:"city",theme:"dusk",thumb:["#3a3360","#d07a5a","#ffcf8a"],width:9.5,shoulder:.3,pts:[[0,0,9,0],[70,0,9,0],[70,50,8,1],[130,50,9,2],[150,20,14,2],[210,20,9,3],[210,110,9,4],[160,110,8,4],[160,80,8,4],[95,80,8,3],[95,140,9,3],[20,140,9,2],[-25,100,14,1],[-25,40,9,0]],sky:{sun:[-.75,.09,.35],turbidity:10,rayleigh:3,exposure:.85,hdr:"venice_sunset_1k.hdr",fog:"#c58a78",fogD:.004}},{id:"ebisu",name:"Circuito Ebisu Sul",sub:"Dia \xB7 circuito de drift na encosta",kind:"circuit",theme:"day",thumb:["#2f7fd8","#8cc4f2","#cfe8d0"],width:12,shoulder:3,pts:[[81.7,0,51.1,11.5],[116.7,-59.3,26.5,12],[205.3,-61.3,49.6,9.1],[222.6,-106.5,27.5,4],[165,-179.6,28.4,.9],[212.1,-232.7,54.2,1.1],[299.4,-244.3,29.8,2.2],[352.3,-165.3,41,1.4],[338.9,-66.3,19.5,-.1],[280.8,-72.8,20.1,1],[243.3,-5.5,48,5.4],[158,-14,26.7,10],[172.6,74.9,36.1,11.3],[45.9,156.3,22,10.2],[0,0,22,9.9]],sky:{sun:[.3,.75,.45],turbidity:3,rayleigh:1,exposure:.5,hdr:"quarry_01_1k.hdr",fog:"#bccfdc",fogD:.0012}},{id:"hokkaido",name:"Passo de Hokkaido",sub:"Neve \xB7 serra escorregadia ao amanhecer",kind:"touge",theme:"snow",thumb:["#6f8fb8","#d9c4c0","#f4f6f8"],grip:.82,width:9,shoulder:1,pts:[[52.5,0,30.2,33.4],[74.6,51,38.5,39.2],[38.9,123.3,33.9,37.8],[-51.4,118.4,49.9,29.1],[-84.8,41.7,46.1,19],[-72.9,-7.1,17.9,13.3],[-140.1,-47,59.2,12.7],[-177.4,-136.4,28,12.7],[-97.8,-148.4,12,8.5],[-168,-173.6,52.2,.6],[-211.1,-248.2,41.5,-5.2],[-168.7,-313.7,18.1,-3.8],[-93.4,-266.2,23.5,4.9],[-111.9,-176.3,55.4,15],[-78.3,-140.7,24.1,20.7],[-110,-101.3,45.7,21.3],[-93.1,-61.6,22,21.3],[0,0,22,25.5]],sky:{sun:[.55,.16,.6],turbidity:6,rayleigh:1.2,exposure:.5,hdr:"blouberg_sunrise_2_1k.hdr",fog:"#dfe6ee",fogD:.004}},{id:"porto",name:"P\xE1tio do Porto",sub:"Noite \xB7 estacionamento aberto para treinar",kind:"lot",theme:"port",thumb:["#03040a","#141a30","#3a4a70"],arena:[120,80],sky:{night:!0,hdr:"moonless_golf_1k.hdr",fog:"#141826",fogD:.004,exposure:.9}}];function Yc(i){if(i.pts)return i.pts;if(i.gen)return i.gen();if(i.mirror){let e=Or.find(t=>t.id===i.mirror);return Yc(e).map(t=>[-t[0],t[1],t[2],t[3]]).reverse()}return null}Lt();Lt();var ir=class i extends ce{constructor(){let e=i.SkyShader,t=new It({name:e.name,uniforms:jn.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:zt,depthWrite:!1});super(new Oe(1,1,1),t),this.isSky=!0}};ir.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new U},up:{value:new U(0,1,0)}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;
		uniform vec3 up;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calcuation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( dot( vSunDirection, up ) );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorbtion + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform vec3 up;

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
			L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

			vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

			vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

			gl_FragColor = vec4( retColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};Lt();function St(i){let e=i>>>0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Gn(i){let e=St(i),t=new Float32Array(256*256);for(let o=0;o<t.length;o++)t[o]=e();let n=(o,a)=>t[(a&255)<<8|o&255],s=(o,a)=>{let l=Math.floor(o),c=Math.floor(a),h=o-l,f=a-c,p=h*h*(3-2*h),u=f*f*(3-2*f),_=n(l,c),x=n(l+1,c),m=n(l,c+1),d=n(l+1,c+1);return _+(x-_)*p+(m-_)*u+(_-x-m+d)*p*u};return{n:s,fbm:(o,a,l=5)=>{let c=0,h=.5,f=1;for(let p=0;p<l;p++)c+=s(o*f,a*f)*h,h*=.5,f*=2.03;return c}}}function bn(i,e){let t=document.createElement("canvas");return t.width=i,t.height=e,t}function Mn(i,e=!0,t=[1,1]){let n=new pt(i);return n.wrapS=n.wrapT=Zt,n.repeat.set(t[0],t[1]),e&&(n.colorSpace=st),n.anisotropy=8,n}function Zc(i,e,t,n){let s=bn(e,t),r=s.getContext("2d"),o=r.createImageData(e,t);for(let a=0;a<t;a++)for(let l=0;l<e;l++){let c=i[a*e+(l-1+e)%e],h=i[a*e+(l+1)%e],f=i[(a-1+t)%t*e+l],p=i[(a+1)%t*e+l],u=(c-h)*n,_=(f-p)*n,x=1,m=Math.hypot(u,_,x);u/=m,_/=m,x/=m;let d=(a*e+l)*4;o.data[d]=(u*.5+.5)*255,o.data[d+1]=(_*.5+.5)*255,o.data[d+2]=(x*.5+.5)*255,o.data[d+3]=255}return r.putImageData(o,0,0),s}function Sa(i){let n=St(i.seed||7),s=Gn(i.seed||7),r=new Float32Array(512*1024),o=bn(512,1024),a=o.getContext("2d"),l=a.createImageData(512,1024),c=new Re(i.color||"#2b2c30"),h=bn(512,1024),f=h.getContext("2d"),p=f.createImageData(512,1024);for(let d=0;d<1024;d++)for(let g=0;g<512;g++){let v=s.fbm(g/90,d/90,4),M=n(),w=M>.93?.18:M<.06?-.14:0,y=.82+v*.28+w+(n()-.5)*.08;r[d*512+g]=M*.25+v*.75;let E=(d*512+g)*4;l.data[E]=Math.min(255,c.r*255*y*1.15),l.data[E+1]=Math.min(255,c.g*255*y*1.15),l.data[E+2]=Math.min(255,c.b*255*y*1.15),l.data[E+3]=255,n()<.1&&(l.data[E]*=.85,l.data[E+1]*=.85,l.data[E+2]*=.85);let A=(i.wet?.4:.86)+(v-.5)*(i.wet?.35:.1)+(M-.5)*.06;p.data[E]=p.data[E+1]=p.data[E+2]=Math.max(0,Math.min(255,A*255)),p.data[E+3]=255}a.putImageData(l,0,0),f.putImageData(p,0,0),a.globalAlpha=.18,a.fillStyle="#000";for(let d of[.32,.4,.6,.68])a.fillRect(d*512-10,0,20,1024);a.globalAlpha=.25;for(let d=0;d<5;d++)a.fillStyle=n()<.5?"#1a1a1d":"#3a3a3e",a.fillRect(n()*512*.6+512*.2,n()*1024,30+n()*60,40+n()*120);a.globalAlpha=1;let u=d=>d*512,_=i.paint||"#e9e7df",x=i.edge,m=(d,g,v,M)=>{if(a.fillStyle=v,f.fillStyle="#7a7a7a",!M)a.fillRect(d-g/2,0,g,1024),f.fillRect(d-g/2,0,g,1024);else for(let w=0;w<1024;w+=M[0]+M[1])a.fillRect(d-g/2,w,g,M[0]),f.fillRect(d-g/2,w,g,M[0])};if(x&&(m(u(x),7,_),m(u(1-x),7,_)),i.center==="yellow"?(m(u(.5)-5,5,"#e2b53a"),m(u(.5)+5,5,"#e2b53a")):i.center==="dash"&&m(u(.5),6,_,[1024*.25,1024*.25]),i.curb)for(let d=0;d<8;d++)a.fillStyle=d%2?"#f1f1ee":"#c4202a",a.fillRect(0,d*1024/8,u(x)-4,1024/8),a.fillRect(u(1-x)+4,d*1024/8,512-u(1-x)-4,1024/8);a.fillStyle="rgba(40,40,40,.35)";for(let d=0;d<9e3;d++)a.fillRect(n()*512,n()*1024,2,2);return{map:Mn(o),normal:Mn(Zc(r,512,1024,.9),!1),rough:Mn(h,!1)}}function $f(i,e){let n=Gn(i),s=St(i),r=new Float32Array(512*512),o=bn(512,512),a=o.getContext("2d"),l=a.createImageData(512,512),c=new Re(e||"#7d7568");for(let h=0;h<512;h++)for(let f=0;f<512;f++){let p=n.fbm(f/64,h/64,6),u=Math.sin((h+p*120)/9)*.5+.5,_=p*.7+u*.25+s()*.08;r[h*512+f]=_;let x=(h*512+f)*4,m=.55+_*.75;l.data[x]=c.r*255*m,l.data[x+1]=c.g*255*m,l.data[x+2]=c.b*255*m,l.data[x+3]=255}return a.putImageData(l,0,0),{map:Mn(o),normal:Mn(Zc(r,512,512,6),!1)}}function Kf(){let e=bn(512,512),t=e.getContext("2d"),n=Gn(31),s=St(31),r=new Float32Array(512*512),o=t.createImageData(512,512);for(let a=0;a<512;a++)for(let l=0;l<512;l++){let h=l%128,f=a%128,p=h<22||f<22,u=n.fbm(l/40,a/40,4),_=(a*512+l)*4,x,m,d;if(p){let g=.62+u*.25+(s()-.5)*.06;x=168*g,m=166*g,d=158*g,r[a*512+l]=1}else{let g=.4+u*.5;x=70*g,m=92*g,d=48*g,r[a*512+l]=.2+u*.2}o.data[_]=x,o.data[_+1]=m,o.data[_+2]=d,o.data[_+3]=255}t.putImageData(o,0,0),t.globalAlpha=.25,t.fillStyle="#2a2a24";for(let a=0;a<40;a++){let l=s()*512;t.fillRect(l,s()*512,2+s()*3,30+s()*90)}return t.globalAlpha=1,{map:Mn(e),normal:Mn(Zc(r,512,512,3),!1)}}function ls(i,e){let n=bn(256,256),s=n.getContext("2d"),r=Gn(i),o=St(i),a=s.createImageData(256,256),l=new Re(e||"#a9a8a2");for(let c=0;c<256;c++)for(let h=0;h<256;h++){let f=.75+r.fbm(h/30,c/30,4)*.35+(o()-.5)*.08,p=(c*256+h)*4,u=Math.max(0,1-c/256*1.6)*r.fbm(h/12,3,2)*.25;a.data[p]=l.r*255*(f-u),a.data[p+1]=l.g*255*(f-u),a.data[p+2]=l.b*255*(f-u*.8),a.data[p+3]=255}return s.putImageData(a,0,0),s.fillStyle="rgba(0,0,0,.25)",s.fillRect(0,0,3,256),Mn(n)}function Qf(i,e){let n=bn(256,256),s=n.getContext("2d"),r=St(e),o=i==="cedar"?["#1d3a22","#24462a","#2d5531","#183020"]:i==="maple"?["#b8261a","#d4421c","#e8781f","#9c1b14","#f0a52a"]:i==="snow"?["#1f3a26","#e9eef3","#dfe7ee","#2a4a30"]:["#2f5a2a","#3d6e33","#4b7d3a","#264a22"];for(let l=0;l<2600;l++){let c=r()*256,h=r()*256,f=3+r()*7,p=(c-256/2)/(256/2),u=(h-256/2)/(256/2);p*p+u*u>.95-r()*.25||(s.fillStyle=o[r()*o.length|0],s.globalAlpha=.85,s.beginPath(),s.ellipse(c,h,f,f*(.5+r()*.5),r()*3,0,Math.PI*2),s.fill())}s.globalAlpha=1;let a=Mn(n);return a.wrapS=a.wrapT=cn,a}function jf(i){let n=bn(64,256),s=n.getContext("2d"),r=St(i);s.fillStyle="#4a3426",s.fillRect(0,0,64,256);for(let o=0;o<90;o++)s.fillStyle=r()<.5?"#3a281d":"#5c4331",s.fillRect(r()*64,0,1+r()*3,256);return Mn(n)}function Hr(i,e,t){let n=St(e),s=256,r=512,o=bn(s,r),a=o.getContext("2d"),l=bn(s,r),c=l.getContext("2d");c.fillStyle="#000",c.fillRect(0,0,s,r);let h=4,f=8,p=s/h,u=r/f,_={office:["#8e9399","#7d838b","#a3a6aa","#646a72"],apt:["#d8d2c4","#c9c3b5","#e2ddd2","#b9b2a2"],house:["#e6dfcf","#cfc6b3","#b9a88f","#efe9dc"],glass:["#2b3a48","#33475a","#24313d"]}[i]||["#999"],x=_[n()*_.length|0],m=Gn(e),d=new Re(x),g=a.createImageData(s,r);for(let M=0;M<r;M++)for(let w=0;w<s;w++){let y=(M*s+w)*4,E=(.9+m.fbm(w/20,M/20,3)*.2)*255;g.data[y]=d.r*E,g.data[y+1]=d.g*E,g.data[y+2]=d.b*E,g.data[y+3]=255}a.putImageData(g,0,0);let v=["#ffd9a0","#fff1d6","#ffe7b8","#cfe6ff","#fff8ec"];for(let M=0;M<f;M++)for(let w=0;w<h;w++){let y=w*p,E=M*u;if(i==="glass")a.fillStyle="rgba(160,190,215,.35)",a.fillRect(y+2,E+4,p-4,u-8),a.fillStyle="#1a232c",a.fillRect(y,E+u-6,p,6);else if(i==="office")a.fillStyle="#2b3846",a.fillRect(y+6,E+10,p-12,u-22),a.fillStyle="rgba(200,220,235,.3)",a.fillRect(y+6,E+10,p-12,6);else if(i==="apt"){a.fillStyle="#34414c",a.fillRect(y+10,E+8,p-20,u-30),a.fillStyle="#8f8a80",a.fillRect(y+2,E+u-22,p-4,4),a.strokeStyle="#9a958a",a.lineWidth=2;for(let A=0;A<6;A++)a.beginPath(),a.moveTo(y+4+A*(p-8)/5,E+u-22),a.lineTo(y+4+A*(p-8)/5,E+u-4),a.stroke();a.fillStyle="#7d786e",a.fillRect(y+2,E+u-4,p-4,3)}else(w+M)%3!==1&&(a.fillStyle="#3a4650",a.fillRect(y+14,E+14,p-28,u-34),a.fillStyle="#efeadf",a.fillRect(y+12,E+u-22,p-24,3));t&&n()<(i==="office"?.62:.5)&&(c.fillStyle=v[n()*v.length|0],c.globalAlpha=.5+n()*.5,i==="glass"?c.fillRect(y+2,E+4,p-4,u-8):i==="office"?c.fillRect(y+6,E+10,p-12,u-22):i==="apt"?c.fillRect(y+10,E+8,p-20,u-30):c.fillRect(y+14,E+14,p-28,u-34))}return c.globalAlpha=1,{map:Mn(o),emissive:t?Mn(l):null,rows:f,cols:h}}var Jf=["\u30E9\u30FC\u30E1\u30F3","\u5C45\u9152\u5C4B","\u30AB\u30E9\u30AA\u30B1","\u713C\u8089","\u5BFF\u53F8","\u30DB\u30C6\u30EB","\u85AC\u5C40","\u30B2\u30FC\u30E0","BAR","\u55AB\u8336","\u66F8\u5E97","\u9152\u5834","\u3046\u3069\u3093","\u99D0\u8ECA\u5834","\u30C9\u30EA\u30D5\u30C8","\u4E2D\u53E4\u8ECA","\u30BF\u30A4\u30E4","\u6574\u5099","\u96FB\u6C17"];function ed(i,e){let t=St(i),n=e?96:384,s=e?384:96,r=bn(n,s),o=r.getContext("2d"),a=["#c4141c","#121418","#f2f2f0","#1840a8","#f3c400","#0f7a43","#7a1fb5","#ff5aa5"],l=a[t()*a.length|0];o.fillStyle=l,o.fillRect(0,0,n,s),o.strokeStyle="rgba(255,255,255,.85)",o.lineWidth=6,o.strokeRect(6,6,n-12,s-12);let c=Jf[t()*Jf.length|0],h=["#f2f2f0","#f3c400"].includes(l);if(o.fillStyle=h?"#c4141c":"#ffffff",o.font=`bold ${e?64:58}px "Hiragino Sans","Yu Gothic","Meiryo","Noto Sans CJK JP","MS Gothic",sans-serif`,o.textAlign="center",o.textBaseline="middle",e){let p=[...c],u=(s-40)/Math.max(p.length,1);p.forEach((_,x)=>o.fillText(_,n/2,20+u*(x+.5)))}else o.fillText(c,n/2,s/2+4);let f=Mn(r);return f.wrapS=f.wrapT=cn,f}function Vn(){let i=bn(128,128),e=i.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.2,"rgba(255,255,255,.6)"),t.addColorStop(.55,"rgba(255,255,255,.12)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),new pt(i)}function Ta(){let i=bn(64,256),e=i.getContext("2d"),t=St(5);for(let s=0;s<256;s++)for(let r=0;r<64;r++)(r>4&&r<26||r>38&&r<60)&&(e.fillStyle=`rgba(8,8,8,${(.25+t()*.35).toFixed(2)})`,e.fillRect(r,s,1,1));let n=new pt(i);return n.wrapT=Zt,n}function td(i,e,t,n){let s=t.sky,r=!!s.night,o=new U(...s.sun||[.3,.6,.2]).normalize(),a={night:r,sunDir:o,exposure:s.exposure||.6},l;if(r){let g=new gi(4e3,32,16),v=[],M=g.attributes.position,w=new Re("#03040a"),y=new Re("#0d0f24"),E=new Re(s.fog||"#1b1430"),A=new Re;for(let D=0;D<M.count;D++){let O=M.getY(D)/4e3;A.copy(E).lerp(y,Math.min(1,Math.max(0,O*6))).lerp(w,Math.min(1,Math.max(0,O*2-.2))),v.push(A.r,A.g,A.b)}g.setAttribute("color",new ze(v,3)),l=new ce(g,new ut({vertexColors:!0,side:zt,fog:!1,depthWrite:!1})),i.add(l);let b=St(3),S=[];for(let D=0;D<1500;D++){let O=b()*6.283,k=.12+b()*1.3;S.push(Math.cos(O)*Math.cos(k)*3800,Math.sin(k)*3800,Math.sin(O)*Math.cos(k)*3800)}let z=new Xe;z.setAttribute("position",new ze(S,3));let F=new _n(z,new Rn({color:13621503,size:1.6,sizeAttenuation:!1,fog:!1,transparent:!0,opacity:.8}));l.add(F);let q=new ns(new Ni({map:Vn(),color:15265023,fog:!1,depthWrite:!1}));q.scale.setScalar(220),q.position.copy(o).multiplyScalar(3500),l.add(q)}else{l=new ir,l.scale.setScalar(9e3);let g=l.material.uniforms;g.turbidity.value=s.turbidity,g.rayleigh.value=s.rayleigh,g.mieCoefficient.value=.005,g.mieDirectionalG.value=.82,g.sunPosition.value.copy(o).multiplyScalar(1e3),i.add(l)}a.sky=l,i.fog=new Vo(new Re(s.fog),s.fogD);let c=o.y,h=new Re().setHSL(.08,.8,.62),f=new Re(16774890),p=r?new Re(9413336):f.clone().lerp(h,1-Math.min(1,c/.35)),u=new Ks(p,r?.35:2.4+c*1.6);if(u.castShadow=n.shadows>0,u.castShadow){u.shadow.mapSize.set(n.shadows,n.shadows);let g=u.shadow.camera;g.left=-48,g.right=48,g.top=48,g.bottom=-48,g.near=1,g.far=400,u.shadow.bias=-3e-4,u.shadow.normalBias=.05}i.add(u),i.add(u.target),a.sun=u;let _=new Js(r?2764880:new Re(s.fog).lerp(new Re(10470655),.5),r?526352:3815984,r?.4:.55+Math.max(0,.3-c)*1.5);i.add(_);let x=new Bn;if(r){x.background=new Re(329228);let g=t.theme==="neon"?["#ff2d6f","#00e5ff","#ffe600","#ffffff","#a14bff","#ff8a1f","#ffd9a0"]:["#ffd9a0","#ffffff","#ffb070","#9fc4ff"],v=St(4);for(let w=0;w<40;w++){let y=v()*Math.PI*2,E=60+v()*120,A=6+v()*18,b=3+v()*20,S=new ce(new wt(A,b),new ut({color:new Re(g[v()*g.length|0]).multiplyScalar(1.5+v()*3),side:ht}));S.position.set(Math.cos(y)*E,4+v()*30,Math.sin(y)*E),S.lookAt(0,4,0),x.add(S)}let M=new ce(new Pn(400,24),new ut({color:723728}));M.rotation.x=-Math.PI/2,M.position.y=-2,x.add(M)}else{let g=new ir;g.scale.setScalar(900),g.material=l.material,x.add(g);let v=new ce(new Pn(800,32),new ut({color:new Re(t.envGround||"#2b3324")}));v.rotation.x=-Math.PI/2,v.position.y=-6,x.add(v);let M=St(9);for(let w=0;w<26;w++){let y=w/26*Math.PI*2,E=30+M()*80,A=new ce(new Oe(120,E,20),new ut({color:new Re(t.envGround||"#2b3324").multiplyScalar(.7+M()*.4)}));A.position.set(Math.cos(y)*420,E/2-6,Math.sin(y)*420),A.lookAt(0,E/2,0),x.add(A)}}let m=new Ui(e),d=m.fromScene(x,.02,.1,3e3);return i.environment=d.texture,m.dispose(),x.traverse(g=>{g.geometry&&g.geometry.dispose()}),a.envRT=d,a}Lt();Lt();xa();var Ut=()=>new Promise(i=>setTimeout(i,0)),Jc=(i,e,t)=>i<e?e:i>t?t:i,Hi=(i,e,t)=>(t=Jc((t-i)/(e-i),0,1),t*t*(3-2*t));function xi(i,e,t,n,s,r,o=0,a=i.N){let l=i.pts,c=i.N,h=[],f=[],p=[];for(let _=o;_<=a;_++){let x=l[_%c],m=_*i.step/r;h.push(x.x+x.nx*e,x.y+n,x.z+x.nz*e,x.x+x.nx*t,x.y+s,x.z+x.nz*t),f.push(0,m,1,m)}for(let _=0;_<a-o;_++){let x=_*2;p.push(x,x+2,x+1,x+1,x+2,x+3)}let u=new Xe;return u.setAttribute("position",new ze(h,3)),u.setAttribute("uv",new ze(f,2)),u.setIndex(p),u.computeVertexNormals(),u}function Aa(i,e,t,n){let s=i.pts,r=i.N,o=e.length,a=[],l=[],c=[];for(let f=0;f<=r;f++){let p=s[f%r],u=f*i.step/t;for(let[_,x]of e)a.push(p.x+p.nx*_,p.y+x,p.z+p.nz*_),l.push(n(_),u)}for(let f=0;f<r;f++)for(let p=0;p<o-1;p++){let u=f*o+p,_=u+o;c.push(u,_,u+1,u+1,_,_+1)}let h=new Xe;return h.setAttribute("position",new ze(a,3)),h.setAttribute("uv",new ze(l,2)),h.setIndex(c),h.computeVertexNormals(),h}function ki(i,e,t,n,s,r,o=4){let a=i.pts,l=i.N,c=n.length,h=[],f=[],p=[],u=[0];for(let x=1;x<c;x++)u.push(u[x-1]+Math.hypot(n[x][0]-n[x-1][0],n[x][1]-n[x-1][1]));for(let x=s;x<=r;x++){let m=a[(x%l+l)%l];for(let d=0;d<c;d++){let g=e*(t+n[d][0]);h.push(m.x+m.nx*g,m.y+n[d][1],m.z+m.nz*g),f.push(x*i.step/o,u[d]/o)}}for(let x=0;x<r-s;x++)for(let m=0;m<c-1;m++){let d=x*c+m,g=d+c;e>0?p.push(d,d+1,g,d+1,g+1,g):p.push(d,g,d+1,d+1,g,g+1)}let _=new Xe;return _.setAttribute("position",new ze(h,3)),_.setAttribute("uv",new ze(f,2)),_.setIndex(p),_.computeVertexNormals(),_}function mt(i,e,t,n){if(!t.length)return new Ct;let s=new Xo(i,e,t.length),r=new Pt,o=new Re;return t.forEach((a,l)=>{r.position.set(a.x,a.y||0,a.z),r.rotation.set(a.rx||0,a.ry||0,a.rz||0),r.scale.set(a.sx||a.s||1,a.sy||a.s||1,a.sz||a.s||1),r.updateMatrix(),s.setMatrixAt(l,r.matrix),a.color&&s.setColorAt(l,o.set(a.color))}),s.castShadow=!!n,s.receiveShadow=!0,s.computeBoundingSphere(),s}function tn(i){let e=[];for(let t of i){let n=t.geo.index?t.geo.toNonIndexed():t.geo.clone();t.m&&n.applyMatrix4(t.m);let s=new Re(t.color||"#ffffff"),r=n.attributes.position.count,o=new Float32Array(r*3);for(let a=0;a<r;a++)o[a*3]=s.r,o[a*3+1]=s.g,o[a*3+2]=s.b;n.setAttribute("color",new tt(o,3)),n.attributes.uv||n.setAttribute("uv",new tt(new Float32Array(r*2),2)),e.push(n)}return ei(e)}var je=(i,e,t,n,s,r,o=1,a=o,l=o)=>new lt().compose(new U(i,e,t),new Kn().setFromEuler(new Gs(n||0,s||0,r||0)),new U(o,a,l));function Ra(i,e){let t=St(e),n=new Pe({map:Qf(i==="snowcedar"?"snow":i,e),alphaTest:.45,side:ht,roughness:.85,color:16777215}),s=new Pe({map:jf(e),roughness:.95}),r,o;if(i==="cedar"||i==="snowcedar"){r=new rt(.16,.32,14,6,1,!0),r.translate(0,7,0);let a=[];for(let c=0;c<7;c++){let h=4.2+c*1.55,f=2.6*(1-c/8.2)+.35,p=2.8,u=new zi(f,p,8,1,!0),_=u.attributes.position;for(let x=0;x<_.count;x++){let m=_.getY(x);m<0&&(_.setX(x,_.getX(x)*(.85+t()*.35)),_.setZ(x,_.getZ(x)*(.85+t()*.35)),_.setY(x,m-t()*.4))}u.rotateY(t()*6),u.translate(0,h,0),a.push(u)}let l=new zi(.5,2.2,7,1,!0);l.translate(0,15.5,0),a.push(l),o=ei(a.map(c=>c.index?c.toNonIndexed():c))}else{r=new rt(.14,.26,5,6,1,!0),r.translate(0,2.5,0);let a=[];for(let h=0;h<4;h++){let f=new Ko(1.8+t()*.9,1),p=f.attributes.position,u=t()*10;for(let _=0;_<p.count;_++){let x=p.getX(_),m=p.getY(_),d=p.getZ(_),g=.82+.36*(Math.sin(x*2.1+m*1.3+u)*Math.sin(d*1.7-m*.9+u)*.5+.5);p.setXYZ(_,x*g,m*g*.8,d*g)}f.translate((t()-.5)*3,5+t()*2.4,(t()-.5)*3),a.push(f.toNonIndexed())}o=ei(a);let l=o.attributes.position,c=new Float32Array(l.count*2);for(let h=0;h<l.count;h++)c[h*2]=l.getX(h)*.18+.5,c[h*2+1]=(l.getY(h)-4)*.18+l.getZ(h)*.05;o.setAttribute("uv",new tt(c,2))}return{trunk:r,crown:o,leaf:n,bark:s}}function Ca(i,e,t){t.length&&(i.add(mt(e.trunk,e.bark,t,!0)),i.add(mt(e.crown,e.leaf,t,!0)))}function nd(i,e){let t=new Pe({map:i.grass,normalMap:i.grassN,roughness:1,metalness:0});return t.normalScale.set(.6,.6),t.onBeforeCompile=n=>{n.uniforms.rockMap={value:i.rock},n.uniforms.latMap={value:i.lattice},n.uniforms.tint={value:new Re(e.tint||"#ffffff")},n.uniforms.dirtCol={value:new Re(e.dirt||"#6b5a45")},n.uniforms.snow={value:e.snow?1:0},n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute vec3 mixw; varying vec3 vMix; varying vec3 vW;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vMix = mixw; vW = (modelMatrix * vec4(transformed, 1.0)).xyz;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
uniform sampler2D rockMap; uniform sampler2D latMap; uniform vec3 tint; uniform vec3 dirtCol; uniform float snow; varying vec3 vMix; varying vec3 vW;`).replace("#include <map_fragment>",`
        vec3 g1 = texture2D(map, vW.xz * 0.09).rgb, g2 = texture2D(map, vW.xz * 0.013).rgb;
        vec3 grass = mix(g1, g2, 0.45) * tint;
        if (snow > 0.5) grass = mix(vec3(0.86, 0.9, 0.95), vec3(0.97), g1.g) ;
        vec3 rock = texture2D(rockMap, vec2(vW.x + vW.z, vW.y) * 0.07).rgb;
        vec3 lat = texture2D(latMap, vec2((vW.x - vW.z) * 0.22, vW.y * 0.22)).rgb;
        vec3 col = mix(grass, rock, clamp(vMix.x, 0.0, 1.0));
        col = mix(col, dirtCol * (0.8 + g1.r * 0.4), clamp(vMix.z, 0.0, 1.0));
        col = mix(col, lat, clamp(vMix.y, 0.0, 1.0));
        diffuseColor.rgb *= col;`)},t}function Pa(i,e,t){let{cell:n,margin:s}=t,r=i.bounds,o=r.x0-s,a=r.z0-s,l=Math.ceil((r.x1-r.x0+2*s)/n)+1,c=Math.ceil((r.z1-r.z0+2*s)/n)+1,h=new Float32Array(l*c),f=new Uint8Array(l*c),p=new Float32Array(l*c),u=new Int32Array(l*c),_=new Int8Array(l*c);for(let m=0;m<c;m++)for(let d=0;d<l;d++){let g=o+d*n,v=a+m*n,M=e.at(g,v),w=m*l+d;p[w]=M.d,u[w]=M.i,_[w]=M.side;let y=t.raw(g,v,M);h[w]=y.h,y.lock&&(f[w]=1)}for(let m=0;m<(t.relax||0);m++)for(let d=1;d<c-1;d++)for(let g=1;g<l-1;g++){let v=d*l+g;f[v]||(h[v]=h[v]*.4+(h[v-1]+h[v+1]+h[v-l]+h[v+l])*.15)}if(t.detail)for(let m=0;m<c;m++)for(let d=0;d<l;d++){let g=m*l+d;f[g]||(h[g]+=t.detail(o+d*n,a+m*n,p[g]))}return{x0:o,z0:a,nx:l,nz:c,cell:n,H:h,D:p,I:u,S:_,lock:f,at:(m,d)=>{let g=Jc((m-o)/n,0,l-1.001),v=Jc((d-a)/n,0,c-1.001),M=Math.floor(g),w=Math.floor(v),y=g-M,E=v-w,A=w*l+M;return h[A]*(1-y)*(1-E)+h[A+1]*y*(1-E)+h[A+l]*(1-y)*E+h[A+l+1]*y*E}}}function id(i,e,t){let{nx:n,nz:s,cell:r,x0:o,z0:a,H:l}=i,c=new Float32Array(n*s*3),h=new Float32Array(n*s*2),f=new Float32Array(n*s*3);for(let d=0;d<s;d++)for(let g=0;g<n;g++){let v=d*n+g;c[v*3]=o+g*r,c[v*3+1]=l[v],c[v*3+2]=a+d*r,h[v*2]=g,h[v*2+1]=d}let p=new Uint32Array((n-1)*(s-1)*6),u=0;for(let d=0;d<s-1;d++)for(let g=0;g<n-1;g++){let v=d*n+g,M=v+1,w=v+n,y=w+1;p[u++]=v,p[u++]=w,p[u++]=M,p[u++]=M,p[u++]=w,p[u++]=y}let _=new Xe;_.setAttribute("position",new tt(c,3)),_.setAttribute("uv",new tt(h,2)),_.setIndex(new tt(p,1)),_.computeVertexNormals();let x=_.attributes.normal.array;for(let d=0;d<n*s;d++){let g=e(d,x[d*3+1]);f[d*3]=g[0],f[d*3+1]=g[1],f[d*3+2]=g[2]}_.setAttribute("mixw",new tt(f,3));let m=new ce(_,t);return m.receiveShadow=!0,m}function sd(i,e,t,n,s,r,o,a,l){let c=St(r),h=Gn(r),f=[];for(let u=0;u<l;u++){let _=u/l*Math.PI*2+c()*.2,x=n+c()*n*.6,m=280+c()*340,d=o+c()*(a-o),g=new zi(m,d,18,6);g.translate(0,d/2-20,0);let v=g.attributes.position;for(let M=0;M<v.count;M++){let w=v.getX(M),y=v.getY(M),E=v.getZ(M),A=.75+h.fbm(w/160+u,E/160,4)*.6;y>-15&&y<d-25&&(v.setX(M,w*A),v.setZ(M,E*A),v.setY(M,y*(.9+h.n(w/50,E/50)*.2)))}g.computeVertexNormals(),f.push({geo:g,m:je(e+Math.cos(_)*x,0,t+Math.sin(_)*x,0,c()*6,0),color:s[c()*s.length|0]})}let p=new ce(tn(f),new Pe({vertexColors:!0,roughness:1,flatShading:!1}));return i.add(p),p}var Uv={sunset:{tint:"#8c9668",dirt:"#6b5a45",trees:["cedar","cedar","broad"],rock:"#7b7262",rail:"#e9e8e2",far:["#2d3a3a","#3a3f4a","#2b3530"],center:"yellow",roadCol:"#56575c"},autumn:{tint:"#a59a6e",dirt:"#6d5038",trees:["maple","maple","cedar","broad"],rock:"#857a69",rail:"#e9e8e2",far:["#6a4a35","#7a5a3a","#4a5040","#8a6040"],center:"yellow",roadCol:"#58585c"},snow:{tint:"#ffffff",dirt:"#9aa3ad",trees:["snowcedar"],rock:"#8a8e94",rail:"#e9e8e2",far:["#e8eef4","#cfd8e2","#f2f5f8"],center:"dash",roadCol:"#50545a",snow:!0},day:{tint:"#9cad78",dirt:"#7a6a52",trees:["broad","cedar"],rock:"#8a8274",rail:"#e9e8e2",far:["#3f5a46","#4f6a58","#5a7068"],center:null,roadCol:"#5c5d62",circuit:!0}};async function rd(i){let{scene:e,trk:t,map:n,q:s,progress:r,world:o}=i,a=Uv[n.theme],l=t.N,c=t.pts,h=t.limit,f=St(n.id.length*131+7),p=Gn(n.id.charCodeAt(0)*17),u=!!a.circuit;r(.12,"Calculando o relevo"),await Ut();let _=wa(t,2,380),x=new Int8Array(l);for(let G=0;G<l;G++){let re=c[G];x[G]=Zf(t,re.x+re.nx*8,re.z+re.nz*8)?1:-1}let m=c.reduce((G,re)=>G+re.y,0)/l,d=(G,re)=>m+25+(p.fbm(G/520+3,re/520,5)-.42)*300,g=Pa(t,_,{cell:s.terrainCell,margin:360,relax:16,raw:(G,re,P)=>{if(P.i<0)return{h:d(G,re)};let te=c[P.i],J=P.d-(h+(u?5:.8));if(P.d<h+.5)return{h:te.y-.3,lock:!0};if(J<0)return{h:te.y-(u?.08:.3),lock:u};let ue=P.side===x[P.i],ne=u?te.y+(ue?J*.35:-J*.25):ue?te.y+.4+Math.min(J*1.2,13)+Math.max(0,J-11)*.55:te.y-.4-Math.min(J*.85,20)-Math.max(0,J-23)*.4,Ee=Hi(130,330,P.d);return{h:ne*(1-Ee)+d(G,re)*Ee}},detail:(G,re,P)=>(p.fbm(G/48,re/48,4)-.5)*(u?6:12)*Hi(h+6,h+45,P)+(p.n(G/5,re/5)-.5)*.7*Hi(h+2,h+10,P)});o.ground=g,r(.3,"Esculpindo a serra"),await Ut();let v={grass:Bi("grass.jpg",1),grassN:Bi("grass_n.jpg",1,!1),rock:$f(11,a.rock).map,lattice:Kf().map},M=nd(v,{tint:a.tint,dirt:a.dirt,snow:a.snow}),w=id(g,(G,re)=>{let P=1-re,te=g.D[G],J=g.I[G],ue=Hi(.32,.55,P)*(u?.6:1),ne=0;!u&&J>=0&&te<h+16&&P>.4&&g.H[G]>c[J].y+1.2&&g.S[G]===x[J]&&(ne=Hi(.4,.55,P)*(1-Hi(h+10,h+16,te)));let Ee=J>=0?(1-Hi(h+.6,h+3.5,te))*(u?.2:.9):0;return[ue,ne,Ee]},M);if(e.add(w),sd(e,(t.bounds.x0+t.bounds.x1)/2,(t.bounds.z0+t.bounds.z1)/2,1500,a.far,5,260,620,22),n.theme==="sunset"||n.theme==="autumn"){let G=new ce(new wt(9e3,9e3),new Kt({color:1914176,roughness:.06,metalness:.1,normalMap:Bi("water_n.jpg",60,!1),normalScale:new xe(.3,.3)}));G.rotation.x=-Math.PI/2,G.position.y=Math.min(...c.map(re=>re.y))-34,e.add(G)}r(.42,"Asfaltando"),await Ut();let y=t.halfW,E=Sa({seed:3,color:a.roadCol,edge:(h-y)/(2*h)+.004,center:a.center,curb:!1}),A=new Pe({map:E.map,normalMap:E.normal,roughnessMap:E.rough,roughness:1,metalness:0,envMapIntensity:1});a.snow&&A.color.set(14212579);let b=new ce(Aa(t,[[-h,0],[-y,.02],[-y*.5,.05],[0,.07],[y*.5,.05],[y,.02],[h,0]],14,G=>(G+h)/(2*h)),A);if(b.receiveShadow=!0,e.add(b),a.snow){let G=new ce(xi(t,-h-.2,-y+.6,.03,.06,10),new Pe({color:16054266,roughness:.9}));G.receiveShadow=!0,e.add(G);let re=new ce(xi(t,y-.6,h+.2,.06,.03,10),G.material);re.receiveShadow=!0,e.add(re)}let S=G=>{let re=c[G],P=c[(G+6)%l];return(P.x-re.x)*re.nx+(P.z-re.z)*re.nz>0?1:-1},z=G=>Math.abs(c[G].k)>1/70;if(u){let G=(()=>{let te=document.createElement("canvas");te.width=16,te.height=64;let J=te.getContext("2d");J.fillStyle="#d02a2a",J.fillRect(0,0,16,32),J.fillStyle="#f2f2f0",J.fillRect(0,32,16,32);let ue=new pt(te);return ue.wrapS=ue.wrapT=Zt,ue.colorSpace=st,ue})(),re=new Pe({map:G,roughness:.6}),P=0;for(;P<l;){if(!z(P)){P++;continue}let te=P;for(;te<l&&z(te);)te++;let J=S(P+te>>1);for(let ue of[J,-J]){let ne=ue*(y-.2),Ee=ue*(y+1),pe=xi(t,Math.min(ne,Ee),Math.max(ne,Ee),.09,.09,2,Math.max(0,P-4),Math.min(l,te+4));e.add(new ce(pe,re))}P=te+1}}{let G=new ut({map:Ta(),transparent:!0,depthWrite:!1,opacity:a.snow?.35:.55,polygonOffset:!0,polygonOffsetFactor:-2}),re=0;for(;re<l;){if(Math.abs(c[re].k)<1/45){re++;continue}let P=re;for(;P<l&&Math.abs(c[P].k)>=1/45;)P++;let te=S(re+P>>1);for(let J=0;J<3;J++){let ue=-te*(.5+J*1.3+f()*.6),ne=1.9,Ee=Math.max(0,re-25),pe=Math.min(l,P+20),R=xi(t,ue-ne/2,ue+ne/2,.085,.085,6,Ee,pe),T=new ce(R,G);T.renderOrder=2,e.add(T)}re=P+1}}r(.55,"Instalando guard-rails"),await Ut();let F=new Pe({color:new Re(a.rail),metalness:.55,roughness:.38,side:ht}),q=ls(21,a.snow?"#b9bcc0":"#a8a69f");q.repeat.set(1,1);let D=new Pe({map:q,roughness:.95,side:ht}),O=[],k=[],B=[[0,.42],[.07,.48],[.02,.57],[.07,.66],[0,.74]],Y=u?[[0,0],[0,1],[.25,1.05],[.25,0]]:[[0,-.3],[0,.35],[.12,.4],[.3,.45],[.75,2.8]];for(let G of[1,-1]){let re=new Int8Array(l);for(let te=0;te<l;te++)re[te]=u?z(te)?2:1:x[te]===G?0:1;for(let te=0;te<l;te++){let J=0;for(let ue=-12;ue<=12;ue++)J+=re[((te+ue)%l+l)%l]===1?1:0;u||(re[te]=J>12?1:0)}let P=0;for(;P<l;){let te=re[P],J=P;for(;J<l&&re[J]===te;)J++;let ue=P,ne=Math.min(l,J);if(te===1){e.add(new ce(ki(t,G,h+.12,B,ue,ne,4),F)),u&&e.add(new ce(ki(t,G,h+.35,Y,ue,ne,4),D));for(let Ee=ue;Ee<ne;Ee+=4){let pe=c[Ee];O.push({x:pe.x+pe.nx*G*(h+.25),y:pe.y+.4,z:pe.z+pe.nz*G*(h+.25),ry:Math.atan2(pe.tx,pe.tz)})}}else if(te===0){let Ee=new ce(ki(t,G,h+.05,Y,ue,ne,3),D);Ee.receiveShadow=!0,e.add(Ee)}else e.add(new ce(ki(t,G,h+.35,Y,ue,ne,4),D));for(let Ee=ue;Ee<ne;Ee+=18){let pe=c[Ee];k.push({x:pe.x+pe.nx*G*(h+.15),y:pe.y+.9,z:pe.z+pe.nz*G*(h+.15)})}P=J}}e.add(mt(new Oe(.11,.85,.11),new Pe({color:10132898,metalness:.6,roughness:.5}),O,!0));{let G=tn([{geo:new rt(.035,.035,.8,6),color:"#f2f2f0",m:je(0,.4,0)},{geo:new rt(.06,.06,.1,8),color:"#ff7a14",m:je(0,.82,0)}]);e.add(mt(G,new Pe({vertexColors:!0,roughness:.4,emissive:2756608}),k))}if(u){let G=[];for(let P=0;P<l;P+=2)if(z(P)){let te=c[P],J=-S(P);for(let ue=0;ue<3;ue++)G.push({x:te.x+te.nx*J*(h+0),y:te.y+.15+ue*.3,z:te.z+te.nz*J*(h+0),color:ue%2?"#e8e8e8":"#141414"})}let re=new In(.42,.17,8,14);re.rotateX(Math.PI/2),e.add(mt(re,new Pe({roughness:.9}),G,!0))}r(.66,"Sinalizando as curvas"),await Ut();let W=(()=>{let G=document.createElement("canvas");G.width=64,G.height=96;let re=G.getContext("2d");re.fillStyle="#f2c300",re.fillRect(0,0,64,96),re.fillStyle="#111",re.beginPath(),re.moveTo(16,14),re.lineTo(44,48),re.lineTo(16,82),re.lineTo(28,82),re.lineTo(56,48),re.lineTo(28,14),re.fill();let P=new pt(G);return P.colorSpace=st,P})(),K=[],ee=[],me=[];for(let G=0;G<l;G+=7){if(Math.abs(c[G].k)<1/32)continue;let re=c[G],P=-S(G),te=h+.6,J=S(G)>0?1:-1;K.push({x:re.x+re.nx*P*te,y:re.y+1.35,z:re.z+re.nz*P*te,ry:Math.atan2(-re.tx,-re.tz),sx:J}),ee.push({x:re.x+re.nx*P*te,y:re.y+.6,z:re.z+re.nz*P*te})}let $=new Pe({map:W,roughness:.4,emissive:3811840,side:ht});if(e.add(mt(new wt(.62,.9),$,K)),e.add(mt(new rt(.035,.035,1.2,6),new Pe({color:10527656,metalness:.6,roughness:.4}),ee)),!u){let G=-100;for(let Ee=0;Ee<l;Ee++){if(Math.abs(c[Ee].k)<1/20||Ee-G<40)continue;G=Ee;let pe=c[Ee],R=-S(Ee),T=h+1.2;me.push({x:pe.x+pe.nx*R*T,y:pe.y,z:pe.z+pe.nz*R*T,ry:Math.atan2(-pe.nx*R,-pe.nz*R)})}let re=tn([{geo:new rt(.05,.05,2.6,8),color:"#e8641c",m:je(0,1.3,0)},{geo:new In(.42,.05,8,24),color:"#e8641c",m:je(0,2.9,.05)}]);e.add(mt(re,new Pe({vertexColors:!0,roughness:.5}),me,!0)),e.add(mt(new Pn(.4,24).translate(0,2.9,.07),new Pe({color:13160664,metalness:1,roughness:.05}),me));let P=[],te=[],J=null;for(let Ee=0;Ee<l;Ee+=38){let pe=c[Ee],R=-x[Ee],T=h+2.6,Z=pe.x+pe.nx*R*T,ve=pe.z+pe.nz*R*T,_e=g.at(Z,ve);if(Math.abs(_e-pe.y)>4){J=null;continue}P.push({x:Z,y:_e,z:ve,ry:Math.atan2(pe.tx,pe.tz)});let ge=new U(Z,_e+8.6,ve);if(J&&J.distanceTo(ge)<60)for(let Ue=0;Ue<3;Ue++){let Ae=(Ue-1)*.5;te.push(J.x+pe.tz*Ae,J.y-Ue*.35,J.z-pe.tx*Ae,ge.x+pe.tz*Ae,ge.y-Ue*.35,ge.z-pe.tx*Ae)}J=ge}let ue=tn([{geo:new rt(.13,.17,9,8),color:"#8f8a80",m:je(0,4.5,0)},{geo:new Oe(1.4,.09,.09),color:"#5a5650",m:je(0,8.6,0)},{geo:new rt(.2,.2,.5,8),color:"#6a6862",m:je(.35,7.6,0)}]);e.add(mt(ue,new Pe({vertexColors:!0,roughness:.8}),P,!0));let ne=new Xe;ne.setAttribute("position",new ze(te,3)),e.add(new qs(ne,new ss({color:1381914,transparent:!0,opacity:.8})))}r(.74,"Plantando a floresta"),await Ut();let se={},Me={};for(let G of new Set(a.trees))se[G]=Ra(G,13+G.length),Me[G]=[];let Se=s.trees*(u?.6:1),Q={x0:g.x0,z0:g.z0,w:(g.nx-1)*g.cell,h:(g.nz-1)*g.cell},we=["#ffffff","#ffd2b0","#ffb0a0","#fff0a0","#ff9080"],Ie=0;for(;Ie++<Se*12&&Object.values(Me).reduce((G,re)=>G+re.length,0)<Se;){let G,re;if(f()<.7){let Ee=c[f()*l|0],pe=f()<.5?1:-1,R=h+4+Math.pow(f(),1.8)*140;G=Ee.x+Ee.nx*pe*R+(f()-.5)*8,re=Ee.z+Ee.nz*pe*R+(f()-.5)*8}else G=Q.x0+f()*Q.w,re=Q.z0+f()*Q.h;let P=_.at(G,re);if(P.d<h+3.5)continue;let te=g.at(G,re);if(Math.abs(g.at(G+2,re)-te)+Math.abs(g.at(G,re+2)-te)>2.4||u&&P.d<h+18)continue;let ue=a.trees[f()*a.trees.length|0],ne=.75+f()*.65;Me[ue].push({x:G,y:te-.2,z:re,s:ne,sy:ne*(.9+f()*.3),ry:f()*6.28,color:ue==="maple"?we[f()*we.length|0]:f()<.5?"#ffffff":"#d8e4d0"})}for(let G in Me)Ca(e,se[G],Me[G]);if(u){r(.82,"Montando boxes e arquibancadas"),await Ut();let G=c[0],re=Math.atan2(G.tx,G.tz),P=-x[0],te=h+14,J=G.x+G.nx*P*te,ue=G.z+G.nz*P*te,ne=g.at(J,ue),Ee=tn([{geo:new Oe(46,6,12),color:"#e8e6e0",m:je(0,3,0)},{geo:new Oe(48,.5,14),color:"#c43030",m:je(0,6.2,0)},...[0,1,2,3,4,5].map(Ae=>({geo:new Oe(6,4.2,.2),color:"#2a2e35",m:je(-17.5+Ae*7,2.1,-6.05)}))]),pe=new ce(Ee,new Pe({vertexColors:!0,roughness:.7}));pe.position.set(J,ne,ue),pe.rotation.y=Math.atan2(G.nx*P,G.nz*P),pe.castShadow=!0,e.add(pe);let R=h+12,T=G.x-G.nx*P*R,Z=G.z-G.nz*P*R,ve=tn([0,1,2,3,4,5,6].map(Ae=>({geo:new Oe(40,.8,2.2),color:["#1c3f9e","#d8d8d8","#c43030","#d8d8d8","#1c3f9e","#d8d8d8","#c43030"][Ae],m:je(0,.6+Ae*.9,Ae*2.2)})).concat([{geo:new Oe(42,.4,16),color:"#f0f0ee",m:je(0,9.5,8)},{geo:new Oe(42,9,.4),color:"#d0d4d8",m:je(0,4.5,16)}])),_e=new ce(ve,new Pe({vertexColors:!0,roughness:.7}));_e.position.set(T,g.at(T,Z),Z),_e.rotation.y=Math.atan2(-G.nx*P,-G.nz*P),_e.castShadow=!0,e.add(_e);let ge=(()=>{let Ae=document.createElement("canvas");Ae.width=64,Ae.height=16;let X=Ae.getContext("2d");for(let N=0;N<2;N++)for(let L=0;L<8;L++)X.fillStyle=(L+N)%2?"#111":"#f2f2f2",X.fillRect(L*8,N*8,8,8);let I=new pt(Ae);return I.colorSpace=st,I})(),Ue=new ce(xi(t,-y,y,.09,.09,1,2,4),new Pe({map:ge,roughness:.6}));e.add(Ue)}o.heightAt=(G,re)=>g.at(G,re),o.envGround=a.far[0]}Lt();function Nv(i){let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d"),n=St(77);t.fillStyle=i?"#5c5c60":"#9c9a94",t.fillRect(0,0,256,256);for(let r=0;r<8;r++)for(let o=0;o<8;o++){let a=.85+n()*.2;t.fillStyle=`rgba(${150*a|0},${148*a|0},${142*a|0},.55)`,t.fillRect(o*32+1,r*32+1,30,30)}let s=new pt(e);return s.wrapS=s.wrapT=Zt,s.colorSpace=st,s.anisotropy=8,s}function od(i,e,t,n,s,r,o,a,l,c,h){let f=Math.cos(a),p=Math.sin(a),u=(m,d,g)=>[e+m*f+g*p,t+d,n-m*p+g*f],_=[[[-s/2,0,o/2],[s/2,0,o/2],[s/2,r,o/2],[-s/2,r,o/2],[0,0,1],s],[[s/2,0,-o/2],[-s/2,0,-o/2],[-s/2,r,-o/2],[s/2,r,-o/2],[0,0,-1],s],[[s/2,0,o/2],[s/2,0,-o/2],[s/2,r,-o/2],[s/2,r,o/2],[1,0,0],o],[[-s/2,0,-o/2],[-s/2,0,o/2],[-s/2,r,o/2],[-s/2,r,-o/2],[-1,0,0],o]];for(let[m,d,g,v,M,w]of _){let y=[m,d,g,v].map(b=>u(...b)),E=[M[0]*f+M[2]*p,0,-M[0]*p+M[2]*f],A=[[h,0],[h+w/l,0],[h+w/l,r/c],[h,r/c]];for(let b of[0,1,2,0,2,3])i.p.push(...y[b]),i.n.push(...E),i.u.push(...A[b])}let x=[[-s/2,r,o/2],[s/2,r,o/2],[s/2,r,-o/2],[-s/2,r,-o/2]].map(m=>u(...m));for(let m of[0,1,2,0,2,3])i.rp.push(...x[m]),i.rn.push(0,1,0),i.ru.push(0,0)}function ad(i,e,t){let n=new Xe;return n.setAttribute("position",new ze(i,3)),n.setAttribute("normal",new ze(e,3)),n.setAttribute("uv",new ze(t,2)),n}async function ld(i){let{scene:e,trk:t,map:n,q:s,progress:r,world:o}=i,a=t.N,l=t.pts,c=t.limit,h=t.halfW,f=!!n.sky.night,p=n.theme==="neon",u=St(n.id.length*77+3),_=Gn(9);r(.12,"Tra\xE7ando as quadras"),await Ut();let x=wa(t,2,260),m=Pa(t,x,{cell:3,margin:220,relax:14,raw:(I,N,L)=>{if(L.i<0)return{h:0};let V=l[L.i];return L.d<c?{h:V.y-.1,lock:!0}:{h:V.y+.18,lock:L.d<c+5}}});o.heightAt=(I,N)=>m.at(I,N);{let{nx:I,nz:N,cell:L,x0:V,z0:he,H:ie}=m,le=new Float32Array(I*N*3),fe=new Float32Array(I*N*2);for(let Fe=0;Fe<N;Fe++)for(let be=0;be<I;be++){let H=Fe*I+be;le[H*3]=V+be*L,le[H*3+1]=ie[H],le[H*3+2]=he+Fe*L,fe[H*2]=(V+be*L)/8,fe[H*2+1]=(he+Fe*L)/8}let ye=[];for(let Fe=0;Fe<N-1;Fe++)for(let be=0;be<I-1;be++){let H=Fe*I+be;ye.push(H,H+I,H+1,H+1,H+I,H+I+1)}let Te=new Xe;Te.setAttribute("position",new tt(le,3)),Te.setAttribute("uv",new tt(fe,2)),Te.setIndex(ye),Te.computeVertexNormals();let ke=new ce(Te,new Pe({map:Nv(f),roughness:f?.45:.9,envMapIntensity:f?.8:.4}));ke.receiveShadow=!0,e.add(ke)}r(.25,"Asfaltando as ruas"),await Ut();let d=Sa({seed:5,color:f?"#36373c":"#56575c",wet:f,edge:(c-h)/(2*c)+.004,center:"dash"}),g=new ce(Aa(t,[[-c,0],[-h,.02],[0,.06],[h,.02],[c,0]],14,I=>(I+c)/(2*c)),new Pe({map:d.map,normalMap:d.normal,roughnessMap:d.rough,roughness:1,metalness:f?.05:0,envMapIntensity:f?1.2:.8}));f&&g.material.normalScale.set(.4,.4),g.receiveShadow=!0,e.add(g);let v=ls(4,"#b2b0aa"),M=new Pe({map:v,roughness:.85,side:ht});for(let I of[1,-1])e.add(new ce(ki(t,I,c,[[0,-.1],[0,.16],[.04,.2],[.35,.2]],0,a,2),M));let w=new Pe({color:15263454,roughness:.7,polygonOffset:!0,polygonOffsetFactor:-1}),y=I=>Math.abs(l[(I+a)%a].k)>1/40;for(let I=0;I<a;I++)if(!(!y(I+14)||y(I+13)||y(I)))for(let N=-h+.6;N<h-.6;N+=.9)e.add(new ce(xi(t,N,N+.45,.075,.075,4,I,I+4),w));{let I=new ut({map:Ta(),transparent:!0,depthWrite:!1,opacity:.5}),N=0;for(;N<a;){if(!y(N)){N++;continue}let L=N;for(;L<a&&y(L);)L++;for(let V=0;V<2;V++){let he=(u()-.5)*h,ie=new ce(xi(t,he-.95,he+.95,.08,.08,6,Math.max(0,N-15),Math.min(a,L+12)),I);ie.renderOrder=2,e.add(ie)}N=L+1}}r(.35,"Erguendo os pr\xE9dios"),await Ut();let E=new Set,A=2,b=(I,N)=>(I/A|0)*100003+(N/A|0),S=(I,N,L,V,he,ie)=>{let le=Math.cos(he),fe=Math.sin(he);for(let ye=-L/2;ye<=L/2;ye+=1.5)for(let Te=-V/2;Te<=V/2;Te+=1.5)ie(I+ye*le+Te*fe,N-ye*fe+Te*le)},z=[];if(p){let I=-1;for(let N=0;N<a;N++){let L=!0;for(let V=-12;V<=12;V++)if(y(N+V)){L=!1;break}if(L&&l[N].z>40){I=N;break}}if(I>=0){let N=l[I],L=Math.atan2(N.tx,N.tz)+Math.PI/2,V=520,he=N.y+9.5;z.push({p:N,ry:L,L:V,y:he}),S(N.x,N.z,22,V,L,(ie,le)=>E.add(b(ie,le)))}}let F=p?["office","glass","apt","office"]:["house","house","apt","house"],q=F.map((I,N)=>Hr(I,100+N,f)),D=q.map(()=>({p:[],n:[],u:[],rp:[],rn:[],ru:[]})),O=[],k=[],B=[],Y=[],W=p?3.6:1.8;for(let I of[1,-1]){let N=0;for(;N<a;){let L=l[N],V=p?9+u()*14:7+u()*7,he=p?10+u()*12:6+u()*5,ie=p?12+Math.pow(u(),1.6)*55:5.5+u()*4.5;!p&&u()<.2&&(ie=9+u()*7);let le=Math.atan2(L.nx*I,L.nz*I),fe=c+W+he/2,ye=L.x+L.nx*I*fe,Te=L.z+L.nz*I*fe,ke=!0;if(S(ye,Te,V,he,le,(Fe,be)=>{ke&&(x.at(Fe,be).d<c+W-.6||E.has(b(Fe,be)))&&(ke=!1)}),ke){S(ye,Te,V,he,le,(H,Le)=>E.add(b(H,Le)));let Fe=u()*F.length|0,be=m.at(ye,Te)-.6;od(D[Fe],ye,be,Te,V,ie+.6,he,le,2.6*q[Fe].cols,3.2*q[Fe].rows,u()*4),Y.push({cx:ye,cz:Te,w:V,d:he,h:ie,ry:le,side:I,p:L,by:be}),N+=Math.max(3,Math.round((V+(p?.3:1.5))/t.step))}else N+=2}}{let I=t.bounds,N=150;for(let L=I.x0-N;L<I.x1+N;L+=p?15:11)for(let V=I.z0-N;V<I.z1+N;V+=p?15:11){let he=L+(u()-.5)*4,ie=V+(u()-.5)*4,le=x.at(he,ie);if(le.d<c+W+4)continue;let fe=le.i>=0?l[le.i]:null,ye=fe?Math.atan2(fe.nx,fe.nz):0,Te=p?10+u()*10:7+u()*6,ke=p?10+u()*10:7+u()*6,Fe=p?14+Math.pow(u(),1.5)*70:5.5+u()*5;!p&&u()<.15&&(Fe=10+u()*9);let be=!0;if(S(he,ie,Te,ke,ye,(Le,Ne)=>{be&&(E.has(b(Le,Ne))||x.at(Le,Ne).d<c+W)&&(be=!1)}),!be)continue;S(he,ie,Te,ke,ye,(Le,Ne)=>E.add(b(Le,Ne)));let H=u()*F.length|0;od(D[H],he,m.at(he,ie)-.6,ie,Te,Fe+.6,ke,ye,2.6*q[H].cols,3.2*q[H].rows,u()*4)}}let K=new Pe({color:f?1710880:9276552,roughness:.9});D.forEach((I,N)=>{if(!I.p.length)return;let L=q[N],V=new Pe({map:L.map,roughness:.7,metalness:.05,emissiveMap:L.emissive,emissive:L.emissive?16777215:0,emissiveIntensity:L.emissive?.55:0}),he=new ce(ad(I.p,I.n,I.u),V);he.castShadow=!0,he.receiveShadow=!0,e.add(he);let ie=new ce(ad(I.rp,I.rn,I.ru),K);e.add(ie)}),r(.5,p?"Acendendo os letreiros":"Pendurando os fios"),await Ut();let ee=[];for(let I=0;I<10;I++)ee.push(ed(300+I,I%2===0));let me=ee.map(I=>new Pe({map:I,emissiveMap:I,emissive:16777215,emissiveIntensity:f?1.1:.25,roughness:.5,side:ht})),$=me.map(()=>[]),se=(()=>{let I=document.createElement("canvas");I.width=256,I.height=128;let N=I.getContext("2d");N.fillStyle=f?"#fff4dc":"#d8dfe6",N.fillRect(0,0,256,128),N.fillStyle=f?"#e8d6b0":"#9aa6b2";for(let V=8;V<256;V+=40)N.fillRect(V,20,30,70);N.fillStyle="#2a2e35";for(let V=0;V<256;V+=64)N.fillRect(V,0,4,128);N.fillRect(0,0,256,10),N.fillRect(0,118,256,10);let L=new pt(I);return L.colorSpace=st,L.wrapS=Zt,L})(),Me=new Pe({map:se,emissiveMap:se,emissive:16777215,emissiveIntensity:f?.7:.05,roughness:.2,metalness:.2}),Se=new Pe({color:2829876,roughness:.6}),Q=[],we=[];for(let I of Y){let N=Math.cos(I.ry),L=Math.sin(I.ry),V=I.cx-L*(I.d/2)*-1,he=I.cz-N*(I.d/2)*-1,ie=I.cx-L*I.d/2,le=I.cz-N*I.d/2;if(p||u()<.35){let fe=new wt(I.w-.8,3.2);fe.rotateY(I.ry+Math.PI),fe.translate(ie-L*.06,I.by+.6+1.6,le-N*.06),Q.push(fe);let ye=new Oe(I.w-.4,.35,1.2);ye.rotateY(I.ry),ye.translate(ie-L*.6,I.by+.6+3.5,le-N*.6),we.push(ye);let Te=new wt(Math.min(I.w-1,7),1.2);Te.rotateY(I.ry+Math.PI),Te.translate(ie-L*1.22,I.by+.6+3.95,le-N*1.22),$[1+2*(u()*4|0)].push(Te)}if(p&&I.h>14&&u()<.75||!p&&u()<.12){let fe=p?5+u()*8:2.5,ye=new wt(1.3,fe);ye.rotateY(I.ry+Math.PI/2);let Te=(u()<.5?-1:1)*(I.w/2-.9),ke={x:N,z:-L};ye.translate(ie-L*.8+ke.x*Te,I.by+5+fe/2+u()*4,le-N*.8+ke.z*Te),$[2*(u()*5|0)].push(ye)}}let{mergeGeometries:Ie}=await Promise.resolve().then(()=>(xa(),Gf));if(Q.length&&e.add(new ce(Ie(Q),Me)),we.length){let I=new ce(Ie(we),Se);I.castShadow=!0,e.add(I)}$.forEach((I,N)=>{I.length&&e.add(new ce(Ie(I),me[N]))});let G=new Pe({color:15132386,metalness:.4,roughness:.4,side:ht}),re=[[0,.75],[.03,.8],[0,.85]];for(let I of[1,-1])e.add(new ce(ki(t,I,c+.45,re,0,a,2),G));let P=[];for(let I=0;I<a;I+=2)for(let N of[1,-1]){let L=l[I],V=c+.45;P.push({x:L.x+L.nx*N*V,y:L.y+.6,z:L.z+L.nz*N*V})}e.add(mt(new rt(.03,.03,.85,6),G,P));let te=[],J=[],ue=[],ne=[],Ee=[],pe=[];for(let I=0,N=0;I<a;I+=p?26:34,N++){let L=l[I],V=N%2?1:-1,he=c+1.1,ie=L.x+L.nx*V*he,le=L.z+L.nz*V*he;if(p){te.push({x:ie,y:L.y,z:le,ry:Math.atan2(-L.nx*V,-L.nz*V)});let fe=L.x+L.nx*V*(c-1.6),ye=L.z+L.nz*V*(c-1.6);J.push(fe,L.y+8.3,ye),ue.push({x:fe,y:L.y+.09,z:ye})}}let R=null;for(let I=0;I<a;I+=30){let N=l[I],L=p?-1:1,V=c+.9,he=N.x+N.nx*L*V,ie=N.z+N.nz*L*V,le=N.y+.18;Ee.push({x:he,y:le,z:ie,ry:Math.atan2(N.tx,N.tz)});let fe=new U(he,le+9.6,ie);if(R&&R.distanceTo(fe)<50)for(let ye=0;ye<4;ye++){let Te=(ye-1.5)*.45;pe.push(R.x+N.tz*Te,R.y-ye%2*.5,R.z-N.tx*Te,fe.x+N.tz*Te,fe.y-ye%2*.5,fe.z-N.tx*Te)}if(R=fe,!p&&u()<.5){let ye=l[(I+15)%a],Te=-L,ke=c+1.2,Fe=ye.x+ye.nx*Te*ke,be=ye.z+ye.nz*Te*ke;pe.push(fe.x,fe.y-.2,fe.z,Fe,ye.y+6.5,be)}if(u()<.35){let ye=-L;ne.push({x:N.x+N.nx*ye*(c+1.2),y:N.y+.18,z:N.z+N.nz*ye*(c+1.2),ry:Math.atan2(-N.nx*ye,-N.nz*ye)})}}let T=tn([{geo:new rt(.14,.18,10,8),color:"#8f8b84",m:je(0,5,0)},{geo:new Oe(1.6,.1,.1),color:"#4a4740",m:je(0,9.6,0)},{geo:new Oe(1.2,.1,.1),color:"#4a4740",m:je(0,9.1,0)},{geo:new rt(.24,.24,.7,8),color:"#6a6862",m:je(.4,8.2,0)}]);e.add(mt(T,new Pe({vertexColors:!0,roughness:.8}),Ee,!0));let Z=new Xe;if(Z.setAttribute("position",new ze(pe,3)),e.add(new qs(Z,new ss({color:789776}))),te.length){let I=tn([{geo:new rt(.1,.14,8.4,8),color:"#5a5d63",m:je(0,4.2,0)},{geo:new Oe(.16,.16,2.7),color:"#5a5d63",m:je(0,8.35,1.3)}]);e.add(mt(I,new Pe({vertexColors:!0,roughness:.6,metalness:.5}),te,!0));let N=new Xe;N.setAttribute("position",new ze(J,3)),e.add(new _n(N,new Rn({map:Vn(),size:4.5,color:16769720,transparent:!0,depthWrite:!1,blending:Yt})));let L=new wt(1,1);L.rotateX(-Math.PI/2),e.add(mt(L,new ut({map:Vn(),color:16764822,transparent:!0,opacity:.32,depthWrite:!1,blending:Yt}),ue.map(V=>({...V,sx:16,sz:16}))))}if(ne.length){let I=(()=>{let he=document.createElement("canvas");he.width=64,he.height=128;let ie=he.getContext("2d");ie.fillStyle="#f4f4f2",ie.fillRect(0,0,64,128);let le=["#d33","#36c","#3a3","#fa0","#fff","#c3c"];for(let ye=0;ye<4;ye++)for(let Te=0;Te<6;Te++)ie.fillStyle=le[(Te+ye*2)%6],ie.fillRect(4+Te*10,10+ye*18,7,13);ie.fillStyle="#222",ie.fillRect(4,90,56,30);let fe=new pt(he);return fe.colorSpace=st,fe})(),N=new Pe({map:I,emissiveMap:I,emissive:16777215,emissiveIntensity:f?1.2:.15,roughness:.3}),L=new Pe({color:[13115434,1855400,15263976][u()*3|0],roughness:.4}),V=new Oe(1,1.85,.75);V.translate(0,.92,0),e.add(mt(V,[L,L,L,L,N,L],ne,!0))}for(let I of z){let N=new Pe({map:ls(8,"#9c9b96"),roughness:.9}),L=new Ct;L.position.set(I.p.x,0,I.p.z),L.rotation.y=I.ry;let V=new ce(new Oe(18,1.4,I.L),N);V.position.y=I.y,V.castShadow=!0,L.add(V);for(let le of[-1,1]){let fe=new ce(new Oe(.5,1.2,I.L),N);fe.position.set(le*8.75,I.y+1.3,0),L.add(fe)}for(let le=-I.L/2+15;le<I.L/2;le+=32){let fe=I.p.x+Math.sin(I.ry)*le,ye=I.p.z+Math.cos(I.ry)*le;if(x.at(fe,ye).d<c+2.5)continue;let Te=new ce(new Oe(3,I.y,3.4),N);Te.position.set(0,I.y/2-.5,le),Te.castShadow=!0,L.add(Te)}let he=[];for(let le=-I.L/2;le<I.L/2;le+=20)he.push(-7.5,I.y+5,le,7.5,I.y+5,le+10);let ie=new Xe;ie.setAttribute("position",new ze(he,3)),L.add(new _n(ie,new Rn({map:Vn(),size:5,color:16767392,transparent:!0,depthWrite:!1,blending:Yt}))),e.add(L)}r(.65,"Desenhando o horizonte"),await Ut();let ve=t.bounds,_e=(ve.x0+ve.x1)/2,ge=(ve.z0+ve.z1)/2,Ue=Math.max(ve.x1-ve.x0,ve.z1-ve.z0)/2,Ae=[];for(let I=0;I<(p?260:140);I++){let N=u()*Math.PI*2,L=Ue+120+Math.pow(u(),.7)*(p?900:600),V=p?25+Math.pow(u(),2)*160:8+u()*20,he=18+u()*30;Ae.push({x:_e+Math.cos(N)*L,y:V/2-1,z:ge+Math.sin(N)*L,sx:he,sy:V,sz:he*(.6+u()*.8),ry:u()*3})}let X=Hr(p?"office":"apt",900,f);X.map.repeat.set(3,6),X.emissive&&X.emissive.repeat.set(3,6),e.add(mt(new Oe(1,1,1),new Pe({map:X.map,emissiveMap:X.emissive,emissive:X.emissive?16777215:0,emissiveIntensity:.8,roughness:.8}),Ae));{let I=[];for(let V=0;V<22;V++){let he=V*330/22,ie=40*(1-V/24)+3,le=V%4<2?"#d8471f":"#f0f0ec";for(let[fe,ye]of[[1,1],[1,-1],[-1,1],[-1,-1]])I.push({geo:new rt(.8,.8,330/22+.5,5),color:le,m:je(fe*ie/2,he+330/44,ye*ie/2)});I.push({geo:new Oe(ie,1.2,ie),color:le,m:je(0,he,0)})}I.push({geo:new Oe(18,10,18),color:"#f0f0ec",m:je(0,150,0)},{geo:new rt(.6,1.2,60,6),color:"#d8471f",m:je(0,360,0)});let L=new ce(tn(I),new Pe({vertexColors:!0,roughness:.6,emissive:f?4460800:0,emissiveIntensity:1}));if(L.position.set(_e+Ue+700,0,ge-Ue-600),e.add(L),f){let V=[];for(let ie=0;ie<12;ie++)V.push(_e+Ue+700,ie*28,ge-Ue-600);let he=new Xe;he.setAttribute("position",new ze(V,3)),e.add(new _n(he,new Rn({map:Vn(),size:40,color:16738858,transparent:!0,depthWrite:!1,blending:Yt})))}}if(!p){let I=Ra("broad",21),N=[];for(let L=0;L<260;L++){let V=l[u()*a|0],he=u()<.5?1:-1,ie=c+6+u()*20,le=V.x+V.nx*he*ie,fe=V.z+V.nz*he*ie;x.at(le,fe).d<c+4||E.has(b(le,fe))||N.push({x:le,y:m.at(le,fe),z:fe,s:.7+u()*.5,ry:u()*6})}Ca(e,I,N)}o.envGround=f?"#101014":"#3a3632"}Lt();async function cd(i){let{scene:e,trk:t,progress:n,world:s}=i,r=t.arena,o=St(41);n(.2,"Pintando o p\xE1tio"),await Ut();let a=document.createElement("canvas");a.width=a.height=2048;let l=a.getContext("2d");l.fillStyle="#26272b",l.fillRect(0,0,2048,2048);for(let Q=0;Q<9e4;Q++){let we=20+o()*40;l.fillStyle=`rgba(${we},${we},${we+4},.5)`,l.fillRect(o()*2048,o()*2048,2,2)}let c=Q=>(Q+r.hx)/(2*r.hx)*2048,h=Q=>(Q+r.hz)/(2*r.hz)*2048;l.strokeStyle="rgba(235,235,225,.8)",l.lineWidth=4;for(let Q=-r.hx+8;Q<r.hx-8;Q+=5.5)l.beginPath(),l.moveTo(c(Q),h(r.hz-3)),l.lineTo(c(Q),h(r.hz-9)),l.stroke(),l.beginPath(),l.moveTo(c(Q),h(-r.hz+3)),l.lineTo(c(Q),h(-r.hz+9)),l.stroke();l.strokeStyle="rgba(240,200,40,.85)",l.lineWidth=7;for(let[Q,we,Ie]of[[-60,10,14],[60,10,14],[0,42,10]])l.beginPath(),l.arc(c(Q),h(we),Ie/(2*r.hx)*2048,0,6.283),l.stroke();l.globalAlpha=.5,l.strokeStyle="#0a0a0a",l.lineWidth=16;for(let Q=0;Q<26;Q++){let we=c((o()-.5)*r.hx*1.6),Ie=h((o()-.5)*r.hz*1.6),G=60+o()*220;l.beginPath(),l.arc(we,Ie,G,o()*6,o()*6+2+o()*3),l.stroke()}l.globalAlpha=1;let f=new pt(a);f.colorSpace=st,f.anisotropy=8;let p=new Pe({map:f,roughness:.5,metalness:.15,envMapIntensity:1.3}),u=new ce(new wt(r.hx*2,r.hz*2),p);u.rotation.x=-Math.PI/2,u.receiveShadow=!0,e.add(u);let _=new ce(new wt(3e3,3e3),new Pe({color:1842465,roughness:.9}));_.rotation.x=-Math.PI/2,_.position.y=-.02,e.add(_);let x=new Pe({map:ls(3,"#b8b6b0"),roughness:.85}),m=new rt(.25,.42,.85,4,1);m.rotateY(Math.PI/4),m.scale(1,1,5.2);let d=[];for(let Q=-r.hx;Q<=r.hx;Q+=3.05)d.push({x:Q,y:.42,z:r.hz+.6}),d.push({x:Q,y:.42,z:-r.hz-.6});for(let Q=-r.hz;Q<=r.hz;Q+=3.05)d.push({x:r.hx+.6,y:.42,z:Q,ry:Math.PI/2}),d.push({x:-r.hx-.6,y:.42,z:Q,ry:Math.PI/2});e.add(mt(m,x,d,!0));let g=[[-60,10],[60,10],[0,42],[0,-8],[-95,-50],[95,50]],v=new In(.5,.2,8,16);v.rotateX(Math.PI/2);let M=[];for(let[Q,we]of g){for(let Ie=0;Ie<4;Ie++)for(let[G,re]of[[0,0],[1.05,0],[.52,.9]])M.push({x:Q+G-.5,y:.2+Ie*.38,z:we+re-.3,color:Ie%2?"#e2e2e2":"#151515"});s.obstacles.push({x:Q,z:we,r:1.7})}e.add(mt(v,new Pe({roughness:.9}),M,!0));let w=[];for(let Q=0;Q<14;Q++){let we=-30+Q*4.6,Ie=-32+Math.sin(Q)*3;w.push({x:we,y:0,z:Ie})}let y=tn([{geo:new zi(.22,.7,12),color:"#ff5a10",m:je(0,.38,0)},{geo:new rt(.135,.17,.12,12),color:"#f4f4f0",m:je(0,.4,0)},{geo:new Oe(.5,.04,.5),color:"#202020",m:je(0,.02,0)}]);e.add(mt(y,new Pe({vertexColors:!0,roughness:.5}),w,!0)),n(.45,"Empilhando cont\xEAineres"),await Ut();let E=["#b5332c","#1f5fa8","#2f8a5a","#d9771c","#e6e6e0","#1f8a8a","#7a3a7a","#c9a11f"],A=(()=>{let Q=document.createElement("canvas");Q.width=64,Q.height=32;let we=Q.getContext("2d");we.fillStyle="#fff",we.fillRect(0,0,64,32),we.fillStyle="rgba(0,0,0,.28)";for(let G=0;G<64;G+=4)we.fillRect(G,0,1.5,32);we.fillRect(0,0,64,2),we.fillRect(0,30,64,2);let Ie=new pt(Q);return Ie.colorSpace=st,Ie.wrapS=Zt,Ie.repeat.set(3,1),Ie})(),b=[];for(let Q=-r.hx-6;Q<=r.hx+6;Q+=12.6)for(let we of[r.hz+10,r.hz+13,-r.hz-10,-r.hz-13]){let Ie=1+(o()*4|0);for(let G=0;G<Ie;G++)b.push({x:Q,y:1.3+G*2.6,z:we,ry:Math.PI/2,color:E[o()*E.length|0]})}for(let Q=-r.hz-6;Q<=r.hz+6;Q+=12.6)for(let we of[-r.hx-10,-r.hx-13]){let Ie=1+(o()*4|0);for(let G=0;G<Ie;G++)b.push({x:we,y:1.3+G*2.6,z:Q,color:E[o()*E.length|0]})}e.add(mt(new Oe(2.45,2.6,12.2),new Pe({map:A,roughness:.6,metalness:.35}),b,!0));let S=tn([...[[-11,-9],[11,-9],[-11,9],[11,9]].map(([Q,we])=>({geo:new Oe(1.8,44,1.8),color:"#d9571c",m:je(Q,22,we)})),{geo:new Oe(26,3,20),color:"#c94a16",m:je(0,44,0)},{geo:new Oe(3.4,3,96),color:"#d9571c",m:je(0,48,30)},{geo:new Oe(5,4,7),color:"#e8e8e0",m:je(0,43,22)},{geo:new Oe(1,30,1),color:"#d9571c",m:je(0,60,-6,.45)}]),z=[],F=[];for(let Q=0;Q<4;Q++){let we=-150+Q*100;z.push({x:we,z:r.hz+60}),F.push(we,50,r.hz+60,we,51,r.hz+120)}e.add(mt(S,new Pe({vertexColors:!0,roughness:.6,metalness:.3}),z,!0));let q=new ce(new wt(6e3,3e3),new Kt({color:660512,roughness:.05,metalness:.2,normalMap:Bi("water_n.jpg",80,!1),normalScale:new xe(.25,.25)}));q.rotation.x=-Math.PI/2,q.position.set(0,-1.5,r.hz+1580),e.add(q),n(.65,"Ligando as torres de luz"),await Ut();let D=tn([{geo:new rt(.35,.6,26,8),color:"#4a4d55",m:je(0,13,0)},{geo:new Oe(7,2.6,.8),color:"#c8ccd8",m:je(0,26.5,.3)}]),O=[],k=[],B=[];for(let[Q,we]of[[-r.hx+4,-r.hz+4],[r.hx-4,-r.hz+4],[-r.hx+4,r.hz-4],[r.hx-4,r.hz-4],[0,-r.hz+4],[0,r.hz-4]]){let Ie=Math.atan2(-Q,-we);O.push({x:Q,z:we,ry:Ie});for(let G=-1;G<=1;G++)k.push(Q+Math.cos(Ie)*G*2.2,26.6,we-Math.sin(Ie)*G*2.2);B.push({x:Q*.6,y:.03,z:we*.55,sx:70,sz:70})}e.add(mt(D,new Pe({vertexColors:!0,roughness:.6,emissive:1711398}),O,!0));let Y=new Xe;Y.setAttribute("position",new ze(k.concat(F),3)),e.add(new _n(Y,new Rn({map:Vn(),size:9,color:15659775,transparent:!0,depthWrite:!1,blending:Yt})));let W=new wt(1,1);W.rotateX(-Math.PI/2),e.add(mt(W,new ut({map:Vn(),color:13490431,transparent:!0,opacity:.2,depthWrite:!1,blending:Yt}),B));let K=new $s(14673663,2600,260,.9,.6,1.4);K.position.set(0,60,-40),K.target.position.set(0,0,10),e.add(K),e.add(K.target);let ee=Hr("office",77,!0);ee.map.repeat.set(4,8),ee.emissive.repeat.set(4,8);let me=[];for(let Q=0;Q<160;Q++){let we=-1400+o()*2800,Ie=r.hz+900+o()*700,G=30+Math.pow(o(),2)*220,re=30+o()*40;me.push({x:we,y:G/2-2,z:Ie,sx:re,sy:G,sz:re})}e.add(mt(new Oe(1,1,1),new Pe({map:ee.map,emissiveMap:ee.emissive,emissive:16777215,emissiveIntensity:1.4,roughness:.8}),me));let $=tn([{geo:new Oe(1600,4,26),color:"#d8dce4",m:je(0,40,0)},{geo:new Oe(8,170,8),color:"#e8ecf2",m:je(-300,85,0)},{geo:new Oe(8,170,8),color:"#e8ecf2",m:je(300,85,0)}]),se=new ce($,new Pe({vertexColors:!0,emissive:3359846,emissiveIntensity:.5}));se.position.set(200,0,r.hz+650),e.add(se);let Me=[];for(let Q=-800;Q<=800;Q+=25)Me.push(200+Q,43,r.hz+650);for(let Q=0;Q<170;Q+=20)Me.push(-100,Q,r.hz+650,500,Q,r.hz+650);let Se=new Xe;Se.setAttribute("position",new ze(Me,3)),e.add(new _n(Se,new Rn({map:Vn(),size:14,color:16769200,transparent:!0,depthWrite:!1,blending:Yt}))),s.heightAt=()=>0,s.envGround="#101218"}var $c={};function Kc(i){if($c[i.id])return $c[i.id];let e=i.arena?Yf(i.arena[0],i.arena[1]):qf(Yc(i),{width:i.width,shoulder:i.shoulder});return $c[i.id]=e}async function hd(i,e,t,n){let s=performance.now(),r=t,o="",a=s;t=(u,_)=>{window.__timing&&_!==o&&(console.log("[t]",o,Math.round(performance.now()-a)),o=_,a=performance.now()),r(u,_)};let l=new Bn,c=Kc(i),h={scene:l,track:c,obstacles:[],grip:i.grip||1,night:!!i.sky.night,map:i},f={scene:l,trk:c,map:i,q:n,progress:t,world:h};t(.04,"Preparando o c\xE9u"),await Ut(),i.kind==="city"?await ld(f):i.kind==="lot"?await cd(f):await rd(f),t(.88,"Calculando luz e reflexos"),await Ut(),i.envGround=h.envGround;let p=td(l,e,i,n);return Object.assign(h,{sun:p.sun,sunDir:p.sunDir,exposure:p.exposure,sky:p.sky}),h.update=(u,_,x)=>{p.sky&&p.sky.isMesh&&!p.sky.material.uniforms&&p.sky.position.set(_.x,0,_.z);let m=p.sun,d=p.sunDir;m.position.set(x.x+d.x*150,x.y+d.y*150,x.z+d.z*150),m.target.position.set(x.x,x.y,x.z)},h.dispose=()=>{l.traverse(u=>{u.geometry&&u.geometry.dispose(),u.material&&(Array.isArray(u.material)?u.material:[u.material]).forEach(_=>{for(let x of["map","normalMap","roughnessMap","emissiveMap"])_[x]&&!_[x].userData.keep&&_[x].dispose();_.dispose()})}),p.envRT.dispose()},h}var Mt=window.DG,ot=Mt.Audio,He=i=>document.getElementById(i),vi=(i,e,t)=>i<e?e:i>t?t:i,kt=i=>Math.round(i).toLocaleString("pt-BR"),zv=15,ud=["<b>Vire forte acelerando</b> acima de 45 km/h e o carro j\xE1 entra em drift.","Um toque no <b>S</b> na entrada da curva solta a traseira mais cedo.","Emende uma curva na outra: o multiplicador s\xF3 zera se voc\xEA ficar <b>1,6 s sem derrapar</b>.","Batida forte <b>perde o combo inteiro</b>, batida m\xE9dia perde metade. Encostar de leve n\xE3o custa nada.","Derrapar <b>rente ao guard-rail</b> rende 50% a mais e sobe o multiplicador mais r\xE1pido.","Soltar o volante no meio do drift faz o carro <b>se realinhar sozinho</b>.","\xC2ngulos acima de 45\xB0 rendem mais. O <b>kit de \xE2ngulo</b> da garagem aumenta o limite.","Nas descidas da serra o carro ganha velocidade: <b>freie antes do grampo</b>.","Na neve o carro escorrega mais: entre nas curvas mais devagar."],gd="kazedrift.v2",hs=i=>Mt.CARS.find(e=>e.id===i)||Mt.CARS[0];function eh(){let i=Mt.CARS[0];return{coins:1500,car:i.id,cars:{[i.id]:Mt.defaultCfg(i)},best:{},set:{vol:.8,q:"high"}}}function Fv(){let i=null;try{i=JSON.parse(localStorage.getItem(gd))}catch{}if(!i)try{let e=JSON.parse(localStorage.getItem("kazedrift.v1"));if(e&&e.coins){i=eh(),i.coins=e.coins;for(let t in e.cars)Mt.CARS.find(n=>n.id===t)&&(i.cars[t]=e.cars[t])}}catch{}if(i&&i.cars){for(let e of Object.keys(i.cars))Mt.CARS.find(t=>t.id===e)||delete i.cars[e];i.cars[i.car]||(i.car=Mt.CARS[0].id),i.cars[i.car]||(i.cars[i.car]=Mt.defaultCfg(hs(i.car)));for(let e in i.cars){let t=Mt.defaultCfg(hs(e)),n=i.cars[e];for(let s in t.eq)n.eq[s]||(n.eq[s]=t.eq[s]),n.owned[s]||(n.owned[s]=t.owned[s]);for(let s in t)n[s]===void 0&&(n[s]=t[s])}return i.set=Object.assign({vol:.8,q:"high"},i.set),i.best=i.best||{},i}return eh()}var Ve=Fv();function Mi(){try{localStorage.setItem(gd,JSON.stringify(Ve))}catch{}}var fd={high:{pr:2,shadows:2048,terrainCell:3,trees:3200,post:!0,msaa:4,bloom:!0},med:{pr:1.25,shadows:1024,terrainCell:4,trees:2e3,post:!0,msaa:2,bloom:!0},low:{pr:1,shadows:0,terrainCell:5,trees:900,post:!1,msaa:0,bloom:!1}},oh=()=>fd[Ve.set.q]||fd.high,Gt;try{Gt=new Sr({canvas:He("gl"),antialias:!1,powerPreference:"high-performance"})}catch(i){let e=document.createElement("div");throw e.id="fatal",e.innerHTML="<div><h2>N\xE3o foi poss\xEDvel iniciar o 3D</h2><p>Seu navegador est\xE1 sem WebGL. Ative a acelera\xE7\xE3o de hardware nas configura\xE7\xF5es do navegador e recarregue a p\xE1gina.</p></div>",He("app").appendChild(e),i}Gt.toneMapping=Nr;Gt.shadowMap.type=Sc;var yt=new Jt(60,1,.1,9e3),hn=null,th=null,Ln=null,Ua=null,Na=500,Bv={uniforms:{tDiffuse:{value:null},vig:{value:.35},sat:{value:1.08}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"uniform sampler2D tDiffuse; uniform float vig; uniform float sat; varying vec2 vUv; void main(){ vec4 c = texture2D(tDiffuse, vUv); float l = dot(c.rgb, vec3(0.2126,0.7152,0.0722)); c.rgb = mix(vec3(l), c.rgb, sat); vec2 d = vUv - 0.5; c.rgb *= 1.0 - vig * dot(d, d) * 2.2; gl_FragColor = c; }"};function Ov(){let i=oh();if(hn&&(hn.renderTarget1.dispose(),hn.renderTarget2.dispose(),hn=null),!i.post)return;let e=Gt.getDrawingBufferSize(new xe),t=new $t(e.x,e.y,{type:gn,samples:i.msaa});hn=new ua(Gt,t),th=new fa(new Bn,yt),hn.addPass(th),Ln=new er(new xe(e.x/2,e.y/2),.3,.55,.92),i.bloom&&hn.addPass(Ln),Ua=new js(Bv),hn.addPass(Ua),hn.addPass(new da)}function xd(){let i=He("app").clientWidth||innerWidth,e=He("app").clientHeight||innerHeight;Gt.setSize(i,e,!1),yt.aspect=i/e,yt.updateProjectionMatrix(),hn&&(hn.setPixelRatio(Gt.getPixelRatio()),hn.setSize(i,e)),Na=Gt.domElement.height/(2*Math.tan(yt.fov*Math.PI/360))}function ah(){let i=oh();Gt.setPixelRatio(Math.min(devicePixelRatio||1,i.pr)),Gt.shadowMap.enabled=i.shadows>0,Ov(),xd()}window.addEventListener("resize",xd);ah();function Qc(i){hn?(th.scene=i,hn.render()):Gt.render(i,yt)}var En=new Bn;{En.background=new Re(723984);let i=new Ui(Gt);En.environment=i.fromScene(new pa(Gt),.03).texture,i.dispose(),En.environmentIntensity=.8,En.fog=new Wo(723984,16,46);let e=(()=>{let o=document.createElement("canvas");o.width=o.height=512;let a=o.getContext("2d");a.fillStyle="#2a2b2f",a.fillRect(0,0,512,512);for(let c=0;c<2e4;c++){let h=30+Math.random()*30;a.fillStyle=`rgba(${h},${h},${h+3},.4)`,a.fillRect(Math.random()*512,Math.random()*512,2,2)}a.strokeStyle="rgba(0,0,0,.35)",a.lineWidth=2;for(let c=0;c<=512;c+=128)a.beginPath(),a.moveTo(c,0),a.lineTo(c,512),a.stroke(),a.beginPath(),a.moveTo(0,c),a.lineTo(512,c),a.stroke();let l=new pt(o);return l.wrapS=l.wrapT=Zt,l.repeat.set(10,10),l.colorSpace=st,l})(),t=new ce(new Pn(40,64),new Pe({map:e,roughness:.32,metalness:.2}));t.rotation.x=-Math.PI/2,t.receiveShadow=!0,En.add(t);let n=new ce(new Qo(3.9,3.96,96),new ut({color:16747039}));n.rotation.x=-Math.PI/2,n.position.y=.01,En.add(n);for(let o=0;o<14;o++){let a=o/14*Math.PI*2,l=new ce(new wt(.18,7),new ut({color:new Re(["#ff2d6f","#00e5ff","#ff8a1f"][o%3]).multiplyScalar(1.6)}));l.position.set(Math.cos(a)*20,3.5,Math.sin(a)*20),l.lookAt(0,3.5,0),En.add(l)}let s=new ce(new wt(8,3),new ut({color:new Re(16777215).multiplyScalar(2)}));s.position.set(0,7,0),s.rotation.x=Math.PI/2,En.add(s);let r=new Ks(16777215,1.6);r.position.set(4,10,6),r.castShadow=!0,r.shadow.mapSize.set(2048,2048),Object.assign(r.shadow.camera,{left:-5,right:5,top:5,bottom:-5,near:1,far:30}),r.shadow.bias=-3e-4,r.shadow.normalBias=.03,En.add(r),En.add(new Js(8425648,1052696,.4))}var cs=null,sr=.75,Ia=0,Fa=!1,nh=0,_d=-1.3;function Yn(i,e){cs&&(En.remove(cs),Xc(cs)),cs=Wc(hs(i),e),En.add(cs)}He("gl").addEventListener("pointerdown",i=>{ln==="menu"&&(Fa=!0,nh=i.clientX)});addEventListener("pointermove",i=>{Fa&&(sr-=(i.clientX-nh)*.008,nh=i.clientX,Ia=0)});addEventListener("pointerup",()=>{Fa=!1});var ln="menu",Hv=["menu","garage","dealer","maps","loading"];function yi(i){for(let e of Hv)He(e).hidden=e!==i;He("wallet").hidden=i==="loading"||i==="play",He("hud").hidden=i!=="play",_d=i==="menu"?-1.3:0,Ba()}function Ba(){He("coins").textContent=kt(Ve.coins),He("hcoins").textContent=kt(Ve.coins),He("menuCar").innerHTML="Carro atual \xB7 <b>"+hs(Ve.car).name+"</b>"}var dd=0;function Wr(i){let e=He("toast");e.textContent=i,e.classList.add("on"),clearTimeout(dd),dd=setTimeout(()=>e.classList.remove("on"),2200)}var fn=(i,e)=>He(i).addEventListener("click",()=>{ot.init(),ot.ui(),e()}),Xn="paint",Wn=null,Dn=()=>Ve.cars[Ve.car];function lh(){yi("garage"),He("garTitle").textContent="Garagem \xB7 "+hs(Ve.car).name,Yn(Ve.car,Dn()),vd(),rr(Xn)}function vd(){let i=He("catList");i.innerHTML="";let e="";for(let t of Mt.CATS){if(t.group!==e){e=t.group;let s=document.createElement("div");s.className="label",s.textContent=e,i.appendChild(s)}let n=document.createElement("button");n.className="cat"+(t.id===Xn?" on":""),n.textContent=t.name,n.onclick=()=>{ot.ui(),rr(t.id)},i.appendChild(n)}}function kr(i,e,t,n,s){let r=document.createDocumentFragment(),o=document.createElement("div");o.className="label",o.innerHTML=i+' <span class="free">gr\xE1tis</span>',r.appendChild(o);let a=document.createElement("div");a.className="swatches";for(let l of e){let c=document.createElement("button");c.className="sw"+(l.toLowerCase()===String(t).toLowerCase()?" on":""),c.style.background=l,c.setAttribute("aria-label","Cor "+l),c.onclick=()=>{ot.ui(),n(l)},a.appendChild(c)}if(s){let l=document.createElement("input");l.type="color",l.value=t,l.id="col-"+s,l.setAttribute("aria-label","Cor personalizada"),l.onchange=()=>n(l.value,!0),a.appendChild(l)}return r.appendChild(a),r}function rr(i){Xn=i,Wn=null,vd(),Yn(Ve.car,Dn());let e=He("optList"),t=Dn();e.innerHTML="",He("buyBar").hidden=!0;let n=r=>(o,a)=>{t[r]=o,Mi(),Yn(Ve.car,yd()),a||rr(i)};if(i==="paint"){e.appendChild(kr("Cor da carroceria",Mt.PAINTS,t.paint,n("paint"),"paint"));let r=document.createElement("div");r.className="label",r.innerHTML='Acabamento <span class="free">gr\xE1tis</span>',e.appendChild(r);let o=document.createElement("div");o.className="chips";for(let a of Mt.FINISHES){let l=document.createElement("button");l.className="chip"+(t.finish===a.id?" on":""),l.textContent=a.name,l.onclick=()=>{ot.ui(),n("finish")(a.id)},o.appendChild(l)}e.appendChild(o),e.appendChild(kr("Cor das pin\xE7as de freio",["#c2161a","#f2c200","#1c3f9e","#1f8a4c","#15161a","#ff8a1f","#d8dade"],t.caliper,n("caliper")));return}i==="wheels"&&e.appendChild(kr("Cor das rodas",Mt.WHEEL_COLORS,t.wheelColor,n("wheelColor"),"wheel")),i==="neon"&&e.appendChild(kr("Cor do neon",Mt.GLOWS,t.neonColor,n("neonColor"),"neon")),i==="smoke"&&e.appendChild(kr("Cor da fuma\xE7a",Mt.GLOWS,t.smokeColor,n("smokeColor"),"smoke"));let s=document.createElement("div");s.className="label",s.textContent="Op\xE7\xF5es",e.appendChild(s);for(let r of Mt.PARTS[i]){let o=t.owned[i].includes(r.id),a=t.eq[i]===r.id,l=document.createElement("button");l.className="opt"+(a?" sel":""),l.dataset.id=r.id,l.innerHTML='<b></b><span class="tag '+(a?"eq":o?"own":"price")+'">'+(a?"EQUIPADO":o?"COMPRADO":kt(r.price)+" moedas")+"</span><small></small>",l.querySelector("b").textContent=r.name,l.querySelector("small").textContent=r.desc,l.onclick=()=>{ot.ui(),kv(r)},e.appendChild(l)}}function yd(){let i=Dn();if(!Wn)return i;let e=JSON.parse(JSON.stringify(i));return e.eq[Xn]=Wn.id,e}function kv(i){let e=Dn(),t=e.owned[Xn].includes(i.id);Wn=i;for(let r of He("optList").querySelectorAll(".opt"))r.classList.toggle("sel",r.dataset.id===i.id);if(Yn(Ve.car,yd()),t){e.eq[Xn]!==i.id&&(e.eq[Xn]=i.id,Mi()),rr(Xn);return}He("buyBar").hidden=!1,He("buyName").textContent=i.name,He("buyDesc").textContent=i.desc;let n=Ve.coins>=i.price,s=He("buyBtn");s.textContent=n?"Comprar \xB7 "+kt(i.price):"Faltam "+kt(i.price-Ve.coins),s.className="btn"+(n?"":" off")}He("buyBtn").addEventListener("click",()=>{if(!Wn)return;let i=Dn();if(Ve.coins<Wn.price){ot.deny(),Wr("Faltam "+kt(Wn.price-Ve.coins)+" moedas. V\xE1 para a pista derrapar.");return}Ve.coins-=Wn.price,i.owned[Xn].push(Wn.id),i.eq[Xn]=Wn.id,Mi(),ot.buy(),Wr(Wn.name+" instalado."),Ba(),rr(Xn)});var La=null;function Md(){yi("dealer"),La=Ve.car,ih()}function ih(){let i=He("carList");i.innerHTML="";for(let r of Mt.CARS){let o=!!Ve.cars[r.id],a=document.createElement("button");a.className="carCard"+(r.id===La?" sel":""),a.innerHTML='<b></b><span class="tag '+(r.id===Ve.car?"eq":o?"own":"price")+'" style="font:600 13px var(--num)">'+(r.id===Ve.car?"EM USO":o?"NA GARAGEM":kt(r.price))+"</span><small></small>",a.querySelector("b").textContent=r.name,a.querySelector("small").textContent=r.sub,a.onclick=()=>{ot.ui(),La=r.id,ih()},i.appendChild(a)}let e=hs(La),t=!!Ve.cars[e.id];Yn(e.id,Ve.cars[e.id]||Mt.defaultCfg(e));let n=He("dealInfo");n.innerHTML="<h3></h3><p></p>"+["Pot\xEAncia:pot","Facilidade de drift:drift","Velocidade:vel"].map(r=>{let[o,a]=r.split(":");return'<div class="stat"><span>'+o+'</span><i style="--v:'+e.stats[a]*10+'%"></i></div>'}).join("")+"<p>Giro m\xE1ximo: "+kt(e.redline)+" rpm \xB7 "+(e.turbo?"Turbo":"Aspirado")+'</p><button class="btn" id="dealBtn"></button>',n.querySelector("h3").textContent=e.name,n.querySelector("p").textContent=e.sub;let s=He("dealBtn");e.id===Ve.car?(s.textContent="Em uso",s.className="btn off"):t?s.textContent="Usar este carro":Ve.coins>=e.price?s.textContent="Comprar \xB7 "+kt(e.price):(s.textContent="Faltam "+kt(e.price-Ve.coins),s.className="btn off"),s.onclick=()=>{if(ot.init(),e.id!==Ve.car){if(t)ot.ui();else{if(Ve.coins<e.price){ot.deny(),Wr("Faltam "+kt(e.price-Ve.coins)+" moedas.");return}Ve.coins-=e.price,Ve.cars[e.id]=Mt.defaultCfg(e),ot.buy(),Wr(e.name+" \xE9 seu.")}Ve.car=e.id,Mi(),Ba(),ih()}}}function bd(i,e,t,n,s,r,o){let a=e.bounds,l=Math.min((t-s*2)/(a.x1-a.x0),(n-s*2)/(a.z1-a.z0)),c=t/2-(a.x0+a.x1)/2*l,h=n/2-(a.z0+a.z1)/2*l;return i.strokeStyle=r,i.lineWidth=o,i.lineJoin="round",i.beginPath(),e.arena?i.rect(a.x0*l+c,a.z0*l+h,(a.x1-a.x0)*l,(a.z1-a.z0)*l):(e.pts.forEach((f,p)=>{let u=f.x*l+c,_=f.z*l+h;p?i.lineTo(u,_):i.moveTo(u,_)}),i.closePath()),i.stroke(),{sc:l,ox:c,oz:h}}function Ed(){yi("maps");let i=He("mapGrid");if(!i.children.length)for(let e of Or){let t=document.createElement("button");t.className="mapCard";let n=document.createElement("canvas");n.width=480,n.height=270;let s=n.getContext("2d"),r=s.createLinearGradient(0,0,0,270);r.addColorStop(0,e.thumb[0]),r.addColorStop(.6,e.thumb[1]),r.addColorStop(1,e.thumb[2]),s.fillStyle=r,s.fillRect(0,0,480,270),bd(s,Kc(e),480,270,22,e.sky.night?"#ffffff":"#14161c",5);let o=document.createElement("div");o.innerHTML="<b></b><small></small>",o.querySelector("b").textContent=e.name,o.querySelector("small").textContent=e.sub,t.appendChild(n),t.appendChild(o),t.onclick=()=>{ot.init(),ot.ui(),wd(e)},i.appendChild(t)}}function Gv(i,e,t){let n=new Float32Array(e*3),s=new Float32Array(e*2),r=new Float32Array(e*3),o=new Float32Array(e*2),a=new Xe;a.setAttribute("position",new tt(n,3)),a.setAttribute("aData",new tt(s,2));let l=new It({uniforms:{map:{value:Vv()},color:{value:t},scale:{value:Na}},vertexShader:"attribute vec2 aData; uniform float scale; varying float vA; varying float vR; void main(){ vA=aData.y; vR = fract(position.x * 7.13 + position.z * 3.7); vec4 mv=modelViewMatrix*vec4(position,1.0); gl_PointSize=aData.x*scale/max(0.5,-mv.z); gl_Position=projectionMatrix*mv; }",fragmentShader:"uniform sampler2D map; uniform vec3 color; varying float vA; varying float vR; void main(){ vec2 uv = gl_PointCoord - 0.5; float a0 = vR * 6.283; uv = mat2(cos(a0), -sin(a0), sin(a0), cos(a0)) * uv + 0.5; float a=texture2D(map,uv).a*vA; if(a<0.004) discard; gl_FragColor=vec4(color * (0.75 + 0.25 * texture2D(map, uv).r), a); }",transparent:!0,depthWrite:!1}),c=new _n(a,l);c.frustumCulled=!1,c.renderOrder=5,i.add(c);let h=0;this.emit=(f,p,u,_,x,m,d,g)=>{let v=h;h=(h+1)%e,n[v*3]=f,n[v*3+1]=p,n[v*3+2]=u,r[v*3]=_,r[v*3+1]=x,r[v*3+2]=m,o[v*2]=g,o[v*2+1]=g,s[v*2]=d,s[v*2+1]=.5},this.update=f=>{l.uniforms.scale.value=Na;for(let p=0;p<e;p++){if(o[p*2]<=0){s[p*2+1]=0;continue}o[p*2]-=f;let u=Math.max(0,o[p*2]/o[p*2+1]);n[p*3]+=r[p*3]*f,n[p*3+1]+=r[p*3+1]*f,n[p*3+2]+=r[p*3+2]*f,r[p*3]*=1-1.4*f,r[p*3+2]*=1-1.4*f,r[p*3+1]*=1-.6*f,s[p*2]+=f*3.2,s[p*2+1]=.34*u*Math.min(1,(1-u)*7)}a.attributes.position.needsUpdate=!0,a.attributes.aData.needsUpdate=!0}}var jc=null;function Vv(){if(jc)return jc;let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d");for(let t=0;t<26;t++){let n=64+(Math.random()-.5)*50,s=64+(Math.random()-.5)*50,r=16+Math.random()*30,o=e.createRadialGradient(n,s,0,n,s,r);o.addColorStop(0,"rgba(255,255,255,.35)"),o.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=o,e.fillRect(0,0,128,128)}return jc=new pt(i)}function Wv(i,e,t){let n=new Float32Array(e*12),s=[];for(let c=0;c<e;c++){let h=c*4;s.push(h,h+1,h+2,h+1,h+3,h+2)}let r=new Xe;r.setAttribute("position",new tt(n,3)),r.setIndex(s);let o=new ce(r,new ut({color:t,transparent:!0,opacity:.55,depthWrite:!1,side:ht,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}));o.frustumCulled=!1,o.renderOrder=3,i.add(o);let a=0,l=[null,null];this.mark=(c,h,f,p,u,_,x)=>{if(!x){l[c]=null;return}let m=[h+u*.12,p+_*.12,h-u*.12,p-_*.12,f],d=l[c];if(d){if(Math.hypot(m[0]-d[0],m[1]-d[1])<.35)return;let g=a*12;a=(a+1)%e,n.set([d[0],d[4],d[1],d[2],d[4],d[3],m[0],f,m[1],m[2],f,m[3]],g),r.attributes.position.needsUpdate=!0}l[c]=m}}var ct=null,qn=null,Ft=null,Gi=null,Ce=null,za=null,ch=null,ti={},Bt={w:!1,a:!1,s:!1,d:!1},vt={ang:0,shake:0,pos:new U,look:new U},un={target:0,shown:0};async function wd(i){ln="loading",yi("loading"),He("loadName").textContent=i.name,He("loadSub").textContent=i.sub,He("loadTip").innerHTML="Dica: "+ud[Math.random()*ud.length|0],un={target:0,shown:0},Sd(0,"Preparando"),Td(!0),await new Promise(o=>setTimeout(o,100)),ct=await hd(i,Gt,(o,a)=>{un.target=o*100,He("loadStep").textContent=a},oh()),un.target=92,He("loadStep").textContent="Tirando o carro da garagem",await new Promise(o=>setTimeout(o,30));let e=hs(Ve.car),t=Dn();Gi=Mt.carStats(e,t),Ft=Wc(e,t),Ft.rotation.order="YXZ",ct.scene.add(Ft);let n=ct.track.start;qn=Mt.newCar(n.x,n.z,n.h),qn.y=n.y||0,vt.ang=n.h,vt.pos.set(n.x-Math.sin(n.h)*8,qn.y+3,n.z-Math.cos(n.h)*8);let s=t.eq.smoke==="color"?new Re(t.smokeColor):new Re(ct.night?9080986:14211288);za=new Gv(ct.scene,520,s),ch=new Wv(ct.scene,3e3,i.theme==="snow"?3818576:460551),ti={flames:[],flameT:0,tails:[]};let r=Ft.userData;if(ct.night){let o=new $s(r.headCol,260,90,.55,.6,1.3);o.position.set(0,.7,r.L/2-.2),o.target.position.set(0,-.8,r.L/2+24),Ft.add(o),Ft.add(o.target),r.headM.emissiveIntensity=3.5;for(let a of r.popups)a.visible=!0}for(let o of[1,-1]){let a=new ns(new Ni({map:ba(),color:16715808,blending:Yt,depthWrite:!1,opacity:.4}));a.scale.setScalar(.8),a.position.set(o*r.W*.32,.8,-r.L/2-.1),Ft.add(a),ti.tails.push(a)}for(let o of r.exhaust){let a=new ns(new Ni({map:ba(),color:16752704,blending:Yt,depthWrite:!1,opacity:0}));a.scale.set(.5,.5,1),a.position.copy(o),a.position.z-=.1,Ft.add(a),ti.flames.push(a)}Gt.toneMappingExposure=ct.exposure,Ln&&(Ln.strength=ct.night?.5:.22,Ln.threshold=ct.night?.85:.95,Ln.radius=ct.night?.5:.45),Ua&&(Ua.uniforms.vig.value=ct.night?.5:.32),Ce={map:i,idx:-1,score:0,coins:0,pot:0,combo:0,mult:1,grace:0,best:0,bestMult:1,time:0,near:!1,hint:9,lastHit:0,stuck:0},Jv(),yt.fov=60,yt.updateProjectionMatrix(),Cd(.016),ct.update(0,yt.position,Ft.position),Gt.compile(ct.scene,yt),un.target=100,He("loadStep").textContent="Pronto",await new Promise(o=>{let a=setInterval(()=>{un.shown>=99.5&&(clearInterval(a),o())},40)}),ot.startCar(e.engine,Gi);for(let o in Bt)Bt[o]=!1;He("keyHint").style.opacity=1,He("hudTop").classList.remove("on"),yi("play"),ln="play",Id()}function Sd(i,e){He("loadPct").textContent=Math.round(i)+"%",He("loadBar").firstElementChild.style.width=i+"%",e&&(He("loadStep").textContent=e)}function Td(i){Ce&&Ce.pot>0&&Ad(),ot.stopCar(),ct&&(Ft&&Xc(Ft),ct.dispose()),ct=qn=Ft=Ce=za=ch=null,Gt.toneMappingExposure=1,Ln&&(Ln.strength=.3,Ln.threshold=.92),i||Mi()}function Ad(){let i=Math.round(Ce.pot*Ce.mult);if(i<=0){Ce.pot=0,Ce.combo=0,Ce.mult=1;return}let e=Math.max(1,Math.round(i/zv));Ce.score+=i,Ce.coins+=e,Ve.coins+=e,i>Ce.best&&(Ce.best=i),i>(Ve.best[Ce.map.id]||0)&&(Ve.best[Ce.map.id]=i),sh("+"+kt(i)+"<small>+"+kt(e)+" moedas</small>",!1),ot.bank(),Ce.pot=0,Ce.combo=0,Ce.mult=1,Mi()}function sh(i,e){let t=He("pop");t.innerHTML=i,t.className=e?"bad":"",t.offsetWidth,t.classList.add("show")}function Xv(i){Ce.time-Ce.lastHit<.4||(Ce.lastHit=Ce.time,ot.thud(vi(i/10,.3,1)),vt.shake=vi(i/12,.2,.9),!(Ce.pot<=0)&&(i>7?(Ce.pot*Ce.mult>300&&(sh("COMBO PERDIDO<small>batida forte</small>",!0),ot.lost()),Ce.pot=0,Ce.combo=0,Ce.mult=1,Ce.grace=0):i>3.5&&(Ce.pot*Ce.mult>300&&sh("BATEU<small>metade do combo perdida</small>",!0),Ce.pot*=.5,Ce.mult=Math.max(1,Math.ceil(Ce.mult/2)),Ce.combo=(Ce.mult-1)*2.5)))}function qv(){let i=ct.track,e=i.start.x,t=i.start.z,n=i.start.h;if(!i.arena&&Ce.idx>=0){let r=i.pts[Ce.idx];e=r.x,t=r.z,n=Math.atan2(r.tx,r.tz)}let s=Mt.newCar(e,t,n);Object.assign(qn,s),qn.y=i.arena?0:i.pts[Math.max(0,Ce.idx)].y,vt.ang=n,Ce.stuck=0}function Yv(i){let e=ct.track,t=qn,n=!1,s=(o,a,l)=>{t.x-=o*l,t.z-=a*l;let c=t.vx*o+t.vz*a;if(c>0){t.vx-=o*c*1.4,t.vz-=a*c*1.4;let h=c>4?.85:1-1.2*i;t.vx*=h,t.vz*=h,c>2.2&&Xv(c)}},r=o=>{let a=o-t.h;for(;a>Math.PI;)a-=Math.PI*2;for(;a<-Math.PI;)a+=Math.PI*2;Math.abs(a)>Math.PI/2&&(a-=Math.sign(a)*Math.PI),t.h+=a*.1,t.w*=.9};if(e.arena){let o=e.arena,a=o.hx-1.1,l=o.hz-1.1;t.x>a&&(s(1,0,t.x-a),r(0)),t.x<-a&&(s(-1,0,-a-t.x),r(0)),t.z>l&&(s(0,1,t.z-l),r(Math.PI/2)),t.z<-l&&(s(0,-1,-l-t.z),r(Math.PI/2)),n=a-Math.abs(t.x)<2.2||l-Math.abs(t.z)<2.2,t.y=0,t.grade=0}else{let o=qc(e,t.x,t.z,Ce.idx),a=e.limit-1,l=Math.abs(o.lat),c=Math.sign(o.lat);Ce.idx=o.i,t.y=o.y+.05,t.grade=o.grade,t.tx=o.p.tx,t.tz=o.p.tz,l>a&&(s(o.p.nx*c,o.p.nz*c,l-a),r(Math.atan2(o.p.tx,o.p.tz))),n=a-l<1.7}for(let o of ct.obstacles){let a=t.x-o.x,l=t.z-o.z,c=Math.hypot(a,l),h=o.r+1;c<h&&c>.01&&(s(-a/c,-l/c,h-c),r(Math.atan2(-l,a))),c<h+2.4&&(n=!0)}Ce.near=n}function Rd(i){let e=qn,t={up:Bt.w,down:Bt.s,steer:(Bt.a?1:0)-(Bt.d?1:0)},n=Math.max(1,Math.ceil(i/.009)),s=i/n,r=0,o=!1;for(let w=0;w<n;w++){if(Mt.stepCar(e,t,s,Gi,ct.grip),Yv(s),e.grade){let y=9.81*e.grade*.85;e.vx-=e.tx*y*s,e.vz-=e.tz*y*s}e.shifted&&(r=e.shifted),e.lifted&&(o=!0)}Ce.time+=i,r&&(ot.shift(),r>0&&Gi.turbo&&e.boost>.35&&ot.blowoff(),Gi.exhaust==="straight"&&Math.random()<.7&&pd()),o&&(ot.blowoff(),Gi.exhaust!=="stock"&&Math.random()<(Gi.exhaust==="straight"?.9:.35)&&pd());let a=Math.abs(e.slip)*57.3,l=a>13&&e.speed>8&&e.vF>0;if(l){let w=Ce.near?1.5:1;Ce.pot+=a*e.speed*.09*w*i,Ce.combo+=i*(1+(a>45?.5:0)+(Ce.near?.6:0)),Ce.grace=1.6;let y=Math.min(10,1+Math.floor(Ce.combo/2.5));if(y>Ce.mult){Ce.mult=y,ot.multUp(y);let E=He("mult");E.classList.remove("bump"),E.offsetWidth,E.classList.add("bump"),y>Ce.bestMult&&(Ce.bestMult=y)}}else Ce.pot>0&&(Ce.grace-=i,Ce.grace<=0&&Ad());Ce.tag=l?Ce.near?"Rente ao muro +50%":a>45?"\xC2ngulo insano":a>30?"\xD3timo \xE2ngulo":"Drift":"",Ce.drifting=l,Ce.deg=a;let c=Ft.userData;Ft.position.set(e.x,e.y,e.z),Ft.rotation.y=e.h;let h=Math.sin(e.h)*(e.tx||0)+Math.cos(e.h)*(e.tz||0),f=Math.cos(e.h)*(e.tx||0)-Math.sin(e.h)*(e.tz||0);Ft.rotation.x+=(-Math.atan((e.grade||0)*h)-Ft.rotation.x)*Math.min(1,i*8),Ft.rotation.z+=(Math.atan((e.grade||0)*f)*.5-Ft.rotation.z)*Math.min(1,i*8);let p=vi(e.w*e.speed*.0035+e.slip*.05,-.08,.08);c.body.rotation.z+=(p-c.body.rotation.z)*Math.min(1,i*6);let u=e.brake?.022:e.thr?-.015:0;c.body.rotation.x+=(u-c.body.rotation.x)*Math.min(1,i*5);let _=vi(e.steer*.45*(1-e.drift)+(e.drift>.2?-e.slip*.85+e.steer*.12:0),-.62,.62);for(let w of c.wheels){w.front&&(w.pivot.rotation.y+=(_-w.pivot.rotation.y)*Math.min(1,i*12));let y=(w.front?e.vF:e.vF+(e.thr?e.drift*14:0))/c.R;w.spin.rotation.x+=y*i*w.sign}c.brakeM.emissiveIntensity=e.brake?4:ct.night?1.2:.35;for(let w of ti.tails)w.material.opacity=e.brake?.9:ct.night?.35:.05;if(ti.flameT>0){ti.flameT-=i;for(let w of ti.flames){w.material.opacity=ti.flameT*9;let y=.4+Math.random()*.5;w.scale.set(y,y,1)}}else for(let w of ti.flames)w.material.opacity=0;let x=Math.sin(e.h),m=Math.cos(e.h),d=e.speed||1,g=e.vz/d,v=-e.vx/d,M=l&&a>16||e.brake&&e.speed>12&&e.drift>.3||e.thr&&e.speed<6&&e.rpmN>.45;[1,-1].forEach((w,y)=>{let E=e.x+m*w*c.rearX+x*c.rearZ,A=e.z-x*w*c.rearX+m*c.rearZ;ch.mark(y,E,e.y+.03,A,g,v,l&&a>15),M&&Math.random()<i*60&&za.emit(E+(Math.random()-.5)*.3,e.y+.3,A+(Math.random()-.5)*.3,e.vx*.25+(Math.random()-.5)*1.5,.7+Math.random()*1,e.vz*.25+(Math.random()-.5)*1.5,1.2+Math.random()*1,1.3+Math.random()*1)}),za.update(i),ot.update({rpm:e.rpm,thr:e.thr,boost:e.boost,speed:e.speed,skid:l?vi(a/40,.25,1)*vi(e.speed/18,.3,1):e.brake&&e.speed>10?.35:0,time:Ce.time}),e.speed<1&&(Bt.w||Bt.s)?(Ce.stuck+=i,Ce.stuck>4&&(Wr('Carro preso? Pause e use "Voltar o carro para a pista".'),Ce.stuck=-6)):Ce.stuck>0&&(Ce.stuck=0),Ce.hint>0&&(Ce.hint-=i,Ce.hint<=0&&(He("keyHint").style.opacity=0)),Cd(i),ct.update(i,yt.position,Ft.position),Id()}function pd(){ti.flameT=.14,ot.pop()}function Cd(i){let e=qn,t=e.h-e.slip*.62;e.vF<-1&&(t=e.h);let n=t-vt.ang;for(;n>Math.PI;)n-=Math.PI*2;for(;n<-Math.PI;)n+=Math.PI*2;vt.ang+=n*Math.min(1,i*4.5);let s=6.4+e.speed*.035,r=2.2,o=e.x-Math.sin(vt.ang)*s,a=e.z-Math.cos(vt.ang)*s;vt.pos.x+=(o-vt.pos.x)*Math.min(1,i*9),vt.pos.z+=(a-vt.pos.z)*Math.min(1,i*9);let l=e.y+r;ct.heightAt&&(l=Math.max(l,ct.heightAt(vt.pos.x,vt.pos.z)+1.2)),vt.pos.y+=(l-vt.pos.y)*Math.min(1,i*6),vt.shake*=Math.max(0,1-i*5);let c=vt.shake+(Ce.drifting?.01:0)+e.speed*25e-5;yt.position.set(vt.pos.x+(Math.random()-.5)*c,vt.pos.y+(Math.random()-.5)*c,vt.pos.z+(Math.random()-.5)*c),vt.look.set(e.x+Math.sin(vt.ang)*3,e.y+.95,e.z+Math.cos(vt.ang)*3),yt.lookAt(vt.look);let h=58+vi(e.speed,0,70)*.32;Math.abs(h-yt.fov)>.05&&(yt.fov+=(h-yt.fov)*Math.min(1,i*3),yt.updateProjectionMatrix(),Na=Gt.domElement.height/(2*Math.tan(yt.fov*Math.PI/360)))}var Zv=He("gauge").getContext("2d"),_i=He("mini").getContext("2d"),Vr=null,Pd=null,md={};function Jv(){Vr=document.createElement("canvas"),Vr.width=Vr.height=336,Pd=bd(Vr.getContext("2d"),ct.track,336,336,30,"rgba(255,255,255,.85)",7)}function Gr(i,e){md[i]!==e&&(md[i]=e,He(i).textContent=e)}function Id(){let i=qn;Gr("score",kt(Ce.score)),Gr("hcoins",kt(Ve.coins));let e=Ce.pot>0;if(He("hudTop").classList.toggle("on",e),e){Gr("pot",kt(Ce.pot)),Gr("mult","x"+Ce.mult),Gr("tag",Ce.tag||(Ce.grace<1.6?"Segure o combo":"")),He("multBar").firstElementChild.style.width=(Ce.mult>=10?100:Ce.combo%2.5/2.5*100)+"%";let g=He("grace");g.style.opacity=Ce.drifting?0:1,g.firstElementChild.style.width=vi(Ce.grace/1.6,0,1)*100+"%"}for(let g in Bt){let v=He("keys").querySelector("[data-k="+g+"]");v.classList.contains("on")!==Bt[g]&&v.classList.toggle("on",Bt[g])}_i.clearRect(0,0,336,336),_i.drawImage(Vr,0,0);let t=Pd,n=i.x*t.sc+t.ox,s=i.z*t.sc+t.oz;_i.fillStyle="#ff8a1f",_i.beginPath(),_i.arc(n,s,9,0,6.283),_i.fill(),_i.strokeStyle="#fff",_i.lineWidth=2.5,_i.stroke();let r=Zv,o=270,a=270,l=220,c=Math.PI*.75,h=Math.PI*1.5,f=Gi.redline,p=Math.ceil(f/1e3);r.clearRect(0,0,540,540),r.fillStyle="rgba(10,12,18,.78)",r.beginPath(),r.arc(o,a,l+26,0,6.283),r.fill(),r.lineWidth=16,r.strokeStyle="rgba(255,255,255,.12)",r.beginPath(),r.arc(o,a,l,c,c+h),r.stroke();let u=f*.9/(p*1e3);r.strokeStyle="rgba(255,59,78,.75)",r.beginPath(),r.arc(o,a,l,c+h*u,c+h),r.stroke();let _=vi(i.rpm/(p*1e3),0,1),x=i.rpm>f*.92;r.strokeStyle=x?"#ff3b4e":"#ff8a1f",r.beginPath(),r.arc(o,a,l,c,c+h*_),r.stroke(),r.font='600 26px "Chakra Petch", sans-serif',r.textAlign="center",r.textBaseline="middle";for(let g=0;g<=p;g++){let v=c+h*g/p,M=Math.cos(v),w=Math.sin(v);r.strokeStyle="rgba(255,255,255,.7)",r.lineWidth=3,r.beginPath(),r.moveTo(o+M*(l-14),a+w*(l-14)),r.lineTo(o+M*(l-34),a+w*(l-34)),r.stroke(),r.fillStyle=g*1e3>=f*.9?"#ff6b7a":"#cfd3dc",r.fillText(g,o+M*(l-58),a+w*(l-58))}let m=c+h*_;r.strokeStyle="#fff",r.lineWidth=5,r.lineCap="round",r.beginPath(),r.moveTo(o+Math.cos(m)*40,a+Math.sin(m)*40),r.lineTo(o+Math.cos(m)*(l-20),a+Math.sin(m)*(l-20)),r.stroke(),r.lineCap="butt",r.fillStyle="#fff",r.font='700 104px "Barlow Condensed", sans-serif',r.fillText(Math.round(i.speed*3.6),o,a-6),r.fillStyle="#9aa1b0",r.font='600 22px "Chakra Petch", sans-serif',r.fillText("km/h",o,a+56),r.fillText("x1000 rpm",o,a-86);let d=i.reverse&&i.vF<.5?"R":i.speed<.6&&!i.thr?"N":String(i.gear+1);r.fillStyle=i.shiftT>0?"#00e5ff":x?"#ff3b4e":"#ff8a1f",r.font='700 92px "Barlow Condensed", sans-serif',r.fillText(d,o,a+150),r.fillStyle="#9aa1b0",r.font='600 18px "Chakra Petch", sans-serif',r.fillText("MARCHA",o,a+206),Ce.drifting&&(r.fillStyle="#ffd27a",r.font='600 22px "Chakra Petch", sans-serif',r.fillText(Math.round(Ce.deg)+"\xB0",o+140,a+150))}function Oa(){ln==="play"&&(ln="pause",ot.suspend(),He("pause").hidden=!1,He("pScore").textContent=kt(Ce.score),He("pCoins").textContent=kt(Ce.coins),He("pBest").textContent=kt(Math.max(Ce.best,Ve.best[Ce.map.id]||0)),He("pMult").textContent="x"+Ce.bestMult)}function Ha(){He("pause").hidden=!0,ln="play",ot.resume();for(let i in Bt)Bt[i]=!1;rh=performance.now()}function Ld(i){He("pause").hidden=!0,ot.resume(),Td(),ln="menu",Yn(Ve.car,Dn()),i()}addEventListener("keydown",i=>{let e=i.key.toLowerCase();e in Bt?ln==="play"&&(Bt[e]=!0,i.preventDefault()):i.key==="Escape"&&(ln==="play"?Oa():ln==="pause"&&Ha())});addEventListener("keyup",i=>{let e=i.key.toLowerCase();e in Bt&&(Bt[e]=!1)});addEventListener("blur",()=>{for(let i in Bt)Bt[i]=!1;ln==="play"&&Oa()});fn("btnPlay",Ed);fn("btnGarage",lh);fn("btnDealer",Md);fn("btnSettings",()=>{He("settings").hidden=!1,He("setVol").value=Ve.set.vol,He("setQ").value=Ve.set.q,Da=!1,He("setReset").textContent="Zerar progresso"});fn("garBack",()=>{Yn(Ve.car,Dn()),yi("menu")});fn("dealBack",()=>{Yn(Ve.car,Dn()),yi("menu")});fn("mapBack",()=>yi("menu"));fn("setClose",()=>{He("settings").hidden=!0});He("setVol").addEventListener("input",i=>{Ve.set.vol=+i.target.value,ot.init(),ot.setVolume(Ve.set.vol),Mi()});He("setQ").addEventListener("change",i=>{Ve.set.q=i.target.value,ah(),Mi()});var Da=!1;fn("setReset",()=>{if(!Da){Da=!0,He("setReset").textContent="Clique de novo para confirmar";return}Ve=eh(),Mi(),Da=!1,He("setReset").textContent="Progresso zerado",Yn(Ve.car,Dn()),Ba(),ah()});fn("btnPause",Oa);fn("pResume",Ha);fn("pReset",()=>{qv(),Ha()});fn("pMaps",()=>Ld(Ed));fn("pGarage",()=>Ld(lh));var rh=performance.now();function Dd(i){requestAnimationFrame(Dd);let e=Math.min(.05,(i-rh)/1e3);if(rh=i,ln==="loading"){un.shown+=(un.target-un.shown)*Math.min(1,e*7)+(un.target>un.shown?e*12:0),un.shown=Math.min(un.shown,un.target),Sd(un.shown);return}if(ln==="play"){Rd(e),Qc(ct.scene);return}if(ln==="pause"){Qc(ct.scene);return}Fa||(Ia+=(.12-Ia)*e,sr+=Ia*e),yt.fov!==34&&(yt.fov=34,yt.updateProjectionMatrix());let t=yt.aspect>1.1,n=t?9.6:13.5;yt.position.set(Math.sin(sr)*n,1.9,Math.cos(sr)*n);let s=Math.cos(sr),r=-Math.sin(sr),o=t?_d:0;if(yt.lookAt(s*o,.6,r*o),yt.position.x+=s*o,yt.position.z+=r*o,cs)for(let a of cs.userData.wheels)a.front&&(a.pivot.rotation.y=.32);Gt.toneMappingExposure=.72,Ln&&(Ln.strength=.12,Ln.threshold=.98),Qc(En)}ot.setVolume(Ve.set.vol);Yn(Ve.car,Dn());yi("menu");requestAnimationFrame(Dd);Mt._t={step:i=>Rd(i),get state(){return ln},get car(){return qn},get P(){return Ce},get world(){return ct},keys:Bt,startRun:wd,MAPS:Or,save:()=>Ve,pause:Oa,resume:Ha,openGarage:lh,openDealer:Md,selectCat:rr,showcase:Yn,cam:vt};})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
