import{d as x,y as ct,v as E,t as V,ae as ht,D as ut,n as J,af as dt,aC as bt,o as gt,b as At,l as pt,H as L,c as Bt,k as St,m as Ct,q as vt,s as wt,e as z,a9 as _}from"./modules/vue-BHIC3QRz.js";import{l as kt}from"./lz-string-7V7f_eN4.js";import{a as Rt,k as Mt}from"./monaco/bundled-types-BSQQkv1f.js";import{J as ft,a as Dt,a8 as Nt,C as Ft,aa as Lt,Y as Ot,Z as Kt,ab as Y}from"./index-ByDRFW8y.js";import{I as Pt}from"./default-h0pKgK9J.js";import"./modules/file-saver-igGfcqei.js";import"./modules/shiki-CfCxQgMn.js";import"./slides-current-number-BMwf2uNg.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const zt=Object.freeze({diffTimeout:1,diffEditCost:4,matchThreshold:.5,matchDistance:1e3,patchDeleteThreshold:.5,patchMargin:4,matchMaxBits:32});function Tt(e){if(e!=null&&e.__resolved)return e;const n={...zt,...e};return Object.defineProperty(n,"__resolved",{value:!0,enumerable:!1}),n}const M=-1,k=1,v=0;function C(e,n){return[e,n]}function O(e,n,r,s=!0,t){const i=Tt(r);typeof t>"u"&&(i.diffTimeout<=0?t=Number.MAX_VALUE:t=new Date().getTime()+i.diffTimeout*1e3);const o=t;if(e==null||n==null)throw new Error("Null input. (diff_main)");if(e===n)return e?[C(v,e)]:[];const h=s;let a=Z(e,n);const c=e.substring(0,a);e=e.substring(a),n=n.substring(a),a=j(e,n);const u=e.substring(e.length-a);e=e.substring(0,e.length-a),n=n.substring(0,n.length-a);const g=Et(e,n,i,h,o);return c&&g.unshift(C(v,c)),u&&g.push(C(v,u)),W(g),g}function Et(e,n,r,s,t){let i;if(!e)return[C(k,n)];if(!n)return[C(M,e)];const o=e.length>n.length?e:n,h=e.length>n.length?n:e,a=o.indexOf(h);if(a!==-1)return i=[C(k,o.substring(0,a)),C(v,h),C(k,o.substring(a+h.length))],e.length>n.length&&(i[0][0]=i[2][0]=M),i;if(h.length===1)return[C(M,e),C(k,n)];const c=It(e,n,r);if(c){const u=c[0],g=c[1],p=c[2],l=c[3],f=c[4],A=O(u,p,r,s,t),B=O(g,l,r,s,t);return A.concat([C(v,f)],B)}return s&&e.length>100&&n.length>100?_t(e,n,r,t):jt(e,n,r,t)}function _t(e,n,r,s){const t=qt(e,n);e=t.chars1,n=t.chars2;const i=t.lineArray,o=O(e,n,r,!1,s);Ht(o,i),Vt(o),o.push(C(v,""));let h=0,a=0,c=0,u="",g="";for(;h<o.length;){switch(o[h][0]){case k:c++,g+=o[h][1];break;case M:a++,u+=o[h][1];break;case v:if(a>=1&&c>=1){o.splice(h-a-c,a+c),h=h-a-c;const p=O(u,g,r,!1,s);for(let l=p.length-1;l>=0;l--)o.splice(h,0,p[l]);h=h+p.length}c=0,a=0,u="",g="";break}h++}return o.pop(),o}function jt(e,n,r,s){const t=e.length,i=n.length,o=Math.ceil((t+i)/2),h=o,a=2*o,c=new Array(a),u=new Array(a);for(let y=0;y<a;y++)c[y]=-1,u[y]=-1;c[h+1]=0,u[h+1]=0;const g=t-i,p=g%2!==0;let l=0,f=0,A=0,B=0;for(let y=0;y<o&&!(new Date().getTime()>s);y++){for(let m=-y+l;m<=y-f;m+=2){const S=h+m;let d;m===-y||m!==y&&c[S-1]<c[S+1]?d=c[S+1]:d=c[S-1]+1;let b=d-m;for(;d<t&&b<i&&e.charAt(d)===n.charAt(b);)d++,b++;if(c[S]=d,d>t)f+=2;else if(b>i)l+=2;else if(p){const w=h+g-m;if(w>=0&&w<a&&u[w]!==-1){const D=t-u[w];if(d>=D)return Q(e,n,r,d,b,s)}}}for(let m=-y+A;m<=y-B;m+=2){const S=h+m;let d;m===-y||m!==y&&u[S-1]<u[S+1]?d=u[S+1]:d=u[S-1]+1;let b=d-m;for(;d<t&&b<i&&e.charAt(t-d-1)===n.charAt(i-b-1);)d++,b++;if(u[S]=d,d>t)B+=2;else if(b>i)A+=2;else if(!p){const w=h+g-m;if(w>=0&&w<a&&c[w]!==-1){const D=c[w],K=h+D-w;if(d=t-d,D>=d)return Q(e,n,r,D,K,s)}}}}return[C(M,e),C(k,n)]}function Q(e,n,r,s,t,i){const o=e.substring(0,s),h=n.substring(0,t),a=e.substring(s),c=n.substring(t),u=O(o,h,r,!1,i),g=O(a,c,r,!1,i);return u.concat(g)}function qt(e,n){const r=[],s={};let t=4e4;r[0]="";function i(a){let c="",u=0,g=-1,p=r.length;for(;g<a.length-1;){g=a.indexOf(`
`,u),g===-1&&(g=a.length-1);let l=a.substring(u,g+1);(s.hasOwnProperty?Object.prototype.hasOwnProperty.call(s,l):s[l]!==void 0)?c+=String.fromCharCode(s[l]):(p===t&&(l=a.substring(u),g=a.length),c+=String.fromCharCode(p),s[l]=p,r[p++]=l),u=g+1}return c}const o=i(e);t=65535;const h=i(n);return{chars1:o,chars2:h,lineArray:r}}function Ht(e,n){for(let r=0;r<e.length;r++){const s=e[r][1],t=[];for(let i=0;i<s.length;i++)t[i]=n[s.charCodeAt(i)];e[r][1]=t.join("")}}function Z(e,n){if(!e||!n||e.charAt(0)!==n.charAt(0))return 0;let r=0,s=Math.min(e.length,n.length),t=s,i=0;for(;r<t;)e.substring(i,t)===n.substring(i,t)?(r=t,i=r):s=t,t=Math.floor((s-r)/2+r);return t}function j(e,n){if(!e||!n||e.charAt(e.length-1)!==n.charAt(n.length-1))return 0;let r=0,s=Math.min(e.length,n.length),t=s,i=0;for(;r<t;)e.substring(e.length-t,e.length-i)===n.substring(n.length-t,n.length-i)?(r=t,i=r):s=t,t=Math.floor((s-r)/2+r);return t}function U(e,n){const r=e.length,s=n.length;if(r===0||s===0)return 0;r>s?e=e.substring(r-s):r<s&&(n=n.substring(0,r));const t=Math.min(r,s);if(e===n)return t;let i=0,o=1;for(;;){const h=e.substring(t-o),a=n.indexOf(h);if(a===-1)return i;o+=a,(a===0||e.substring(t-o)===n.substring(0,o))&&(i=o,o++)}}function It(e,n,r){if(r.diffTimeout<=0)return null;const s=e.length>n.length?e:n,t=e.length>n.length?n:e;if(s.length<4||t.length*2<s.length)return null;function i(f,A,B){const y=f.substring(B,B+Math.floor(f.length/4));let m=-1,S="",d,b,w,D;for(;(m=A.indexOf(y,m+1))!==-1;){const K=Z(f.substring(B),A.substring(m)),T=j(f.substring(0,B),A.substring(0,m));S.length<T+K&&(S=A.substring(m-T,m)+A.substring(m,m+K),d=f.substring(0,B-T),b=f.substring(B+K),w=A.substring(0,m-T),D=A.substring(m+K))}return S.length*2>=f.length?[d,b,w,D,S]:null}const o=i(s,t,Math.ceil(s.length/4)),h=i(s,t,Math.ceil(s.length/2));let a;if(!o&&!h)return null;h?o?a=o[4].length>h[4].length?o:h:a=h:a=o;let c,u,g,p;e.length>n.length?(c=a[0],u=a[1],g=a[2],p=a[3]):(g=a[0],p=a[1],c=a[2],u=a[3]);const l=a[4];return[c,u,g,p,l]}function Vt(e){let n=!1;const r=[];let s=0,t=null,i=0,o=0,h=0,a=0,c=0;for(;i<e.length;)e[i][0]===v?(r[s++]=i,o=a,h=c,a=0,c=0,t=e[i][1]):(e[i][0]===k?a+=e[i][1].length:c+=e[i][1].length,t&&t.length<=Math.max(o,h)&&t.length<=Math.max(a,c)&&(e.splice(r[s-1],0,C(M,t)),e[r[s-1]+1][0]=k,s--,s--,i=s>0?r[s-1]:-1,o=0,h=0,a=0,c=0,t=null,n=!0)),i++;for(n&&W(e),Zt(e),i=1;i<e.length;){if(e[i-1][0]===M&&e[i][0]===k){const u=e[i-1][1],g=e[i][1],p=U(u,g),l=U(g,u);p>=l?(p>=u.length/2||p>=g.length/2)&&(e.splice(i,0,C(v,g.substring(0,p))),e[i-1][1]=u.substring(0,u.length-p),e[i+1][1]=g.substring(p),i++):(l>=u.length/2||l>=g.length/2)&&(e.splice(i,0,C(v,u.substring(0,l))),e[i-1][0]=k,e[i-1][1]=g.substring(0,g.length-l),e[i+1][0]=M,e[i+1][1]=u.substring(l),i++),i++}i++}}const X=/[^a-zA-Z0-9]/,G=/\s/,$=/[\r\n]/,Jt=/\n\r?\n$/,xt=/^\r?\n\r?\n/;function Zt(e){function n(s,t){if(!s||!t)return 6;const i=s.charAt(s.length-1),o=t.charAt(0),h=i.match(X),a=o.match(X),c=h&&i.match(G),u=a&&o.match(G),g=c&&i.match($),p=u&&o.match($),l=g&&s.match(Jt),f=p&&t.match(xt);return l||f?5:g||p?4:h&&!c&&u?3:c||u?2:h||a?1:0}let r=1;for(;r<e.length-1;){if(e[r-1][0]===v&&e[r+1][0]===v){let s=e[r-1][1],t=e[r][1],i=e[r+1][1];const o=j(s,t);if(o){const g=t.substring(t.length-o);s=s.substring(0,s.length-o),t=g+t.substring(0,t.length-o),i=g+i}let h=s,a=t,c=i,u=n(s,t)+n(t,i);for(;t.charAt(0)===i.charAt(0);){s+=t.charAt(0),t=t.substring(1)+i.charAt(0),i=i.substring(1);const g=n(s,t)+n(t,i);g>=u&&(u=g,h=s,a=t,c=i)}e[r-1][1]!==h&&(h?e[r-1][1]=h:(e.splice(r-1,1),r--),e[r][1]=a,c?e[r+1][1]=c:(e.splice(r+1,1),r--))}r++}}function W(e){e.push(C(v,""));let n=0,r=0,s=0,t="",i="",o;for(;n<e.length;)switch(e[n][0]){case k:s++,i+=e[n][1],n++;break;case M:r++,t+=e[n][1],n++;break;case v:r+s>1?(r!==0&&s!==0&&(o=Z(i,t),o!==0&&(n-r-s>0&&e[n-r-s-1][0]===v?e[n-r-s-1][1]+=i.substring(0,o):(e.splice(0,0,C(v,i.substring(0,o))),n++),i=i.substring(o),t=t.substring(o)),o=j(i,t),o!==0&&(e[n][1]=i.substring(i.length-o)+e[n][1],i=i.substring(0,i.length-o),t=t.substring(0,t.length-o))),n-=r+s,e.splice(n,r+s),t.length&&(e.splice(n,0,C(M,t)),n++),i.length&&(e.splice(n,0,C(k,i)),n++),n++):n!==0&&e[n-1][0]===v?(e[n-1][1]+=e[n][1],e.splice(n,1)):n++,s=0,r=0,t="",i="";break}e[e.length-1][1]===""&&e.pop();let h=!1;for(n=1;n<e.length-1;)e[n-1][0]===v&&e[n+1][0]===v&&(e[n][1].substring(e[n][1].length-e[n-1][1].length)===e[n-1][1]?(e[n][1]=e[n-1][1]+e[n][1].substring(0,e[n][1].length-e[n-1][1].length),e[n+1][1]=e[n-1][1]+e[n+1][1],e.splice(n-1,1),h=!0):e[n][1].substring(0,e[n+1][1].length)===e[n+1][1]&&(e[n-1][1]+=e[n+1][1],e[n][1]=e[n][1].substring(e[n+1][1].length)+e[n+1][1],e.splice(n+1,1),h=!0)),n++;h&&W(e)}const tt=Object.freeze({ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1,excludeKeys:void 0,excludeValues:void 0,replacer:void 0});function Wt(e,n){n?n={...tt,...n}:n=tt;const r=mt(n);return r.dispatch(e),r.toString()}const Yt=Object.freeze(["prototype","__proto__","constructor"]);function mt(e){let n="",r=new Map;const s=t=>{n+=t};return{toString(){return n},getContext(){return r},dispatch(t){return e.replacer&&(t=e.replacer(t)),this[t===null?"null":typeof t](t)},object(t){if(t&&typeof t.toJSON=="function")return this.object(t.toJSON());const i=Object.prototype.toString.call(t);let o="";const h=i.length;h<10?o="unknown:["+i+"]":o=i.slice(8,h-1),o=o.toLowerCase();let a=null;if((a=r.get(t))===void 0)r.set(t,r.size);else return this.dispatch("[CIRCULAR:"+a+"]");if(typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(t))return s("buffer:"),s(t.toString("utf8"));if(o!=="object"&&o!=="function"&&o!=="asyncfunction")this[o]?this[o](t):e.ignoreUnknown||this.unkown(t,o);else{let c=Object.keys(t);e.unorderedObjects&&(c=c.sort());let u=[];e.respectType!==!1&&!et(t)&&(u=Yt),e.excludeKeys&&(c=c.filter(p=>!e.excludeKeys(p)),u=u.filter(p=>!e.excludeKeys(p))),s("object:"+(c.length+u.length)+":");const g=p=>{this.dispatch(p),s(":"),e.excludeValues||this.dispatch(t[p]),s(",")};for(const p of c)g(p);for(const p of u)g(p)}},array(t,i){if(i=i===void 0?e.unorderedArrays!==!1:i,s("array:"+t.length+":"),!i||t.length<=1){for(const a of t)this.dispatch(a);return}const o=new Map,h=t.map(a=>{const c=mt(e);c.dispatch(a);for(const[u,g]of c.getContext())o.set(u,g);return c.toString()});return r=o,h.sort(),this.array(h,!1)},date(t){return s("date:"+t.toJSON())},symbol(t){return s("symbol:"+t.toString())},unkown(t,i){if(s(i),!!t&&(s(":"),t&&typeof t.entries=="function"))return this.array(Array.from(t.entries()),!0)},error(t){return s("error:"+t.toString())},boolean(t){return s("bool:"+t)},string(t){s("string:"+t.length+":"),s(t)},function(t){s("fn:"),et(t)?this.dispatch("[native]"):this.dispatch(t.toString()),e.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(t.name)),e.respectFunctionProperties&&this.object(t)},number(t){return s("number:"+t)},xml(t){return s("xml:"+t.toString())},null(){return s("Null")},undefined(){return s("Undefined")},regexp(t){return s("regex:"+t.toString())},uint8array(t){return s("uint8array:"),this.dispatch(Array.prototype.slice.call(t))},uint8clampedarray(t){return s("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(t))},int8array(t){return s("int8array:"),this.dispatch(Array.prototype.slice.call(t))},uint16array(t){return s("uint16array:"),this.dispatch(Array.prototype.slice.call(t))},int16array(t){return s("int16array:"),this.dispatch(Array.prototype.slice.call(t))},uint32array(t){return s("uint32array:"),this.dispatch(Array.prototype.slice.call(t))},int32array(t){return s("int32array:"),this.dispatch(Array.prototype.slice.call(t))},float32array(t){return s("float32array:"),this.dispatch(Array.prototype.slice.call(t))},float64array(t){return s("float64array:"),this.dispatch(Array.prototype.slice.call(t))},arraybuffer(t){return s("arraybuffer:"),this.dispatch(new Uint8Array(t))},url(t){return s("url:"+t.toString())},map(t){s("map:");const i=[...t];return this.array(i,e.unorderedSets!==!1)},set(t){s("set:");const i=[...t];return this.array(i,e.unorderedSets!==!1)},file(t){return s("file:"),this.dispatch([t.name,t.size,t.type,t.lastModfied])},blob(){if(e.ignoreUnknown)return s("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},domwindow(){return s("domwindow")},bigint(t){return s("bigint:"+t.toString())},process(){return s("process")},timer(){return s("timer")},pipe(){return s("pipe")},tcp(){return s("tcp")},udp(){return s("udp")},tty(){return s("tty")},statwatcher(){return s("statwatcher")},securecontext(){return s("securecontext")},connection(){return s("connection")},zlib(){return s("zlib")},context(){return s("context")},nodescript(){return s("nodescript")},httpparser(){return s("httpparser")},dataview(){return s("dataview")},signal(){return s("signal")},fsevent(){return s("fsevent")},tlswrap(){return s("tlswrap")}}}const yt="[native code] }",Qt=yt.length;function et(e){return typeof e!="function"?!1:Function.prototype.toString.call(e).slice(-Qt)===yt}class N{constructor(n,r){n=this.words=n||[],this.sigBytes=r===void 0?n.length*4:r}toString(n){return(n||Ut).stringify(this)}concat(n){if(this.clamp(),this.sigBytes%4)for(let r=0;r<n.sigBytes;r++){const s=n.words[r>>>2]>>>24-r%4*8&255;this.words[this.sigBytes+r>>>2]|=s<<24-(this.sigBytes+r)%4*8}else for(let r=0;r<n.sigBytes;r+=4)this.words[this.sigBytes+r>>>2]=n.words[r>>>2];return this.sigBytes+=n.sigBytes,this}clamp(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)}clone(){return new N([...this.words])}}const Ut={stringify(e){const n=[];for(let r=0;r<e.sigBytes;r++){const s=e.words[r>>>2]>>>24-r%4*8&255;n.push((s>>>4).toString(16),(s&15).toString(16))}return n.join("")}},Xt={stringify(e){const n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=[];for(let s=0;s<e.sigBytes;s+=3){const t=e.words[s>>>2]>>>24-s%4*8&255,i=e.words[s+1>>>2]>>>24-(s+1)%4*8&255,o=e.words[s+2>>>2]>>>24-(s+2)%4*8&255,h=t<<16|i<<8|o;for(let a=0;a<4&&s*8+a*6<e.sigBytes*8;a++)r.push(n.charAt(h>>>6*(3-a)&63))}return r.join("")}},Gt={parse(e){const n=e.length,r=[];for(let s=0;s<n;s++)r[s>>>2]|=(e.charCodeAt(s)&255)<<24-s%4*8;return new N(r,n)}},$t={parse(e){return Gt.parse(unescape(encodeURIComponent(e)))}};class te{constructor(){this._data=new N,this._nDataBytes=0,this._minBufferSize=0,this.blockSize=512/32}reset(){this._data=new N,this._nDataBytes=0}_append(n){typeof n=="string"&&(n=$t.parse(n)),this._data.concat(n),this._nDataBytes+=n.sigBytes}_doProcessBlock(n,r){}_process(n){let r,s=this._data.sigBytes/(this.blockSize*4);n?s=Math.ceil(s):s=Math.max((s|0)-this._minBufferSize,0);const t=s*this.blockSize,i=Math.min(t*4,this._data.sigBytes);if(t){for(let o=0;o<t;o+=this.blockSize)this._doProcessBlock(this._data.words,o);r=this._data.words.splice(0,t),this._data.sigBytes-=i}return new N(r,i)}}class ee extends te{update(n){return this._append(n),this._process(),this}finalize(n){n&&this._append(n)}}const nt=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],ne=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],F=[];class se extends ee{constructor(){super(...arguments),this._hash=new N([...nt])}reset(){super.reset(),this._hash=new N([...nt])}_doProcessBlock(n,r){const s=this._hash.words;let t=s[0],i=s[1],o=s[2],h=s[3],a=s[4],c=s[5],u=s[6],g=s[7];for(let p=0;p<64;p++){if(p<16)F[p]=n[r+p]|0;else{const S=F[p-15],d=(S<<25|S>>>7)^(S<<14|S>>>18)^S>>>3,b=F[p-2],w=(b<<15|b>>>17)^(b<<13|b>>>19)^b>>>10;F[p]=d+F[p-7]+w+F[p-16]}const l=a&c^~a&u,f=t&i^t&o^i&o,A=(t<<30|t>>>2)^(t<<19|t>>>13)^(t<<10|t>>>22),B=(a<<26|a>>>6)^(a<<21|a>>>11)^(a<<7|a>>>25),y=g+B+l+ne[p]+F[p],m=A+f;g=u,u=c,c=a,a=h+y|0,h=o,o=i,i=t,t=y+m|0}s[0]=s[0]+t|0,s[1]=s[1]+i|0,s[2]=s[2]+o|0,s[3]=s[3]+h|0,s[4]=s[4]+a|0,s[5]=s[5]+c|0,s[6]=s[6]+u|0,s[7]=s[7]+g|0}finalize(n){super.finalize(n);const r=this._nDataBytes*8,s=this._data.sigBytes*8;return this._data.words[s>>>5]|=128<<24-s%32,this._data.words[(s+64>>>9<<4)+14]=Math.floor(r/4294967296),this._data.words[(s+64>>>9<<4)+15]=r,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}}function re(e){return new se().finalize(e).toString(Xt)}function ie(e,n={}){const r=typeof e=="string"?e:Wt(e,n);return re(r).slice(0,10)}function oe(e,n,r="",s=!1){const t=ie(e+r);let i=0,o=0;const h=Math.ceil(Math.log10(n.length)),a=ae(n).flatMap((c,u)=>{var l;o=((l=c[0])==null?void 0:l.offset)||i;const g=c[c.length-1];g?i=g.offset+g.content.length:i+=1;const p=[...c,{content:`
`,offset:i}];return s&&p.unshift({key:`${t}-ln-${u+1}`,content:`${String(u+1).padStart(h," ")}  `,offset:o,htmlClass:"shiki-magic-move-line-number"}),p}).map((c,u)=>{const g=c;return g.key||(g.key=`${t}-${u}`),g});return{code:e,hash:t,tokens:a,lineNumbers:s}}function ae(e){return e.map(n=>n.flatMap(r=>{if(r.content.match(/^\s+$/))return r;const s=r.content.match(/^(\s*)(.*?)(\s*)$/);if(!s)return r;const[,t,i,o]=s;if(!t&&!o)return r;const h=[{...r,offset:r.offset+t.length,content:i}];return t&&h.unshift({content:t,offset:r.offset}),o&&h.push({content:o,offset:r.offset+t.length+i.length}),h}))}function le(e,n){let r=0;const s=e.key;let t=0;const i=[];function o(){return t===0?(t++,s):`${s}-${t++}`}for(const h of n)h>r&&i.push({...e,content:e.content.slice(r,h),offset:e.offset+r,key:o()}),r=h;return r<e.content.length&&i.push({...e,content:e.content.slice(r),offset:e.offset+r,key:o()}),i}function st(e,n){const r=Array.from(n instanceof Set?n:new Set(n)).sort((s,t)=>s-t);return r.length?e.flatMap(s=>{const t=r.filter(i=>s.offset<i&&i<s.offset+s.content.length).map(i=>i-s.offset).sort((i,o)=>i-o);return t.length?le(s,t):s}):e}function ce(e,n,r={}){const{splitTokens:s=!1,enhanceMatching:t=!0}=r,i=he(e.code,n.code,r),o=s?st(e.tokens,i.flatMap(c=>c.from)):e.tokens,h=s?st(n.tokens,i.flatMap(c=>c.to)):n.tokens,a=new Set;if(i.forEach(c=>{var f,A;const u=o.filter(B=>B.offset>=c.from[0]&&B.offset+B.content.length<=c.from[1]),g=h.filter(B=>B.offset>=c.to[0]&&B.offset+B.content.length<=c.to[1]);let p=0,l=0;for(;p<u.length&&l<g.length&&!(!u[p]||!g[l]);)u[p].content===g[l].content?(g[l].key=u[p].key,a.add(u[p].key),p++,l++):((f=u[p+1])==null?void 0:f.content)===g[l].content?p++:(u[p].content===((A=g[l+1])==null?void 0:A.content)||p++,l++)}),t)for(const c of o){if(a.has(c.key)||c.content.length<3||!c.content.match(/^[\w\d_-]+$/))continue;const u=h.find(g=>g.content===c.content&&!a.has(g.key));u&&(u.key=c.key,a.add(c.key))}return{from:o.length===e.tokens.length?e:{...e,tokens:o},to:h.length===n.tokens.length?n:{...n,tokens:h}}}function he(e,n,r={}){var h;let s=O(e,n);s=((h=r.diffCleanup)==null?void 0:h.call(r,s))||s;let t="",i="";const o=[];for(const[a,c]of s)a===0?(o.push({from:[t.length,t.length+c.length],to:[i.length,i.length+c.length],content:c}),t+=c,i+=c):a===-1?t+=c:a===1&&(i+=c);if(t!==e||i!==n)throw new Error("Content mismatch");return o}var ue=Object.defineProperty,ge=(e,n,r)=>n in e?ue(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,P=(e,n,r)=>(ge(e,typeof n!="symbol"?n+"":n,r),r);const R="shiki-magic-move",q=`${R}-leave-from`,pe=`${R}-leave-to`,rt=`${R}-leave-active`,H=`${R}-enter-from`,I=`${R}-enter-to`,it=`${R}-enter-active`,ot=`${R}-move`,at=`${R}-container-resize`,lt=`${R}-container-restyle`,fe={globalScale:1,duration:500,delayMove:.3,delayLeave:.1,delayEnter:.7,delayContainer:.4,stagger:0,easing:"ease",animateContainer:!0,containerStyle:!0};class me{constructor(n,r={}){P(this,"mapDom",new Map),P(this,"container"),P(this,"anchor"),P(this,"previousPromises",[]),P(this,"options"),P(this,"isFirstRender",!0),this.options={...fe,...r},typeof n=="string"?this.container=document.querySelector(n):this.container=n,this.anchor=document.createElement("span"),this.anchor.style.position="absolute",this.anchor.style.top="0",this.anchor.style.left="0",this.anchor.style.height="1px",this.anchor.style.width="1px",this.container.prepend(this.anchor)}applyElementContent(n,r){r.content!==`
`&&(n.textContent=r.content,n.classList.add(`${R}-item`))}applyElementStyle(n,r){r.htmlStyle&&n.setAttribute("style",r.htmlStyle),r.htmlClass&&(n.className=[`${R}-item`,r.htmlClass].join(" ")),r.color&&(n.style.color=r.color),r.bgColor&&(n.style.backgroundColor=r.bgColor)}applyElement(n,r){this.applyElementContent(n,r),this.applyElementStyle(n,r)}applyNodeStyle(n,r){if(r.bg&&(n.style.backgroundColor=r.bg),r.fg&&(n.style.color=r.fg),r.rootStyle){const s=r.rootStyle.split(";");for(const t of s){const[i,o]=t.split(":");i&&o&&n.style.setProperty(i.trim(),o.trim())}}}applyContainerStyle(n){this.options.containerStyle&&this.applyNodeStyle(this.container,n)}checkContainerStyleChanged(n){if(!this.options.containerStyle)return!1;const r=this.container.cloneNode();this.applyNodeStyle(r,n);const s=r.style.backgroundColor!==this.container.style.backgroundColor,t=r.style.color!==this.container.style.color;let i=!1;if(n.rootStyle){const o=n.rootStyle.split(";");for(const h of o){const[a,c]=h.split(":");if(a&&c&&(i=i||this.container.style.getPropertyValue(a.trim())!==r.style.getPropertyValue(a.trim()),i))break}}return s||t||i}registerTransitionEnd(n,r){let s=!1,t=()=>{};const i=new Promise(o=>{const h=a=>{!a||a.target!==n||t()};t=()=>{s||(s=!0,n.removeEventListener("transitionend",h),r(),o())},n.addEventListener("transitionend",h)});return i.resolve=t,i}setCssVariables(){this.container.style.setProperty("--smm-duration",`${this.options.duration}ms`),this.container.style.setProperty("--smm-delay-move",`${this.options.delayMove}`),this.container.style.setProperty("--smm-delay-leave",`${this.options.delayLeave}`),this.container.style.setProperty("--smm-delay-enter",`${this.options.delayEnter}`),this.container.style.setProperty("--smm-delay-container",`${this.options.delayContainer}`),this.container.style.setProperty("--smm-easing",this.options.easing),this.container.style.setProperty("--smm-stagger","0")}replace(n){const r=new Map,s=n.tokens.map(t=>{if(this.mapDom.has(t.key)){const i=this.mapDom.get(t.key);return this.applyElement(i,t),r.set(t.key,i),this.mapDom.delete(t.key),i}else{const i=document.createElement(t.content===`
`?"br":"span");return this.applyElement(i,t),r.set(t.key,i),i}});this.container.replaceChildren(this.anchor,...s),this.applyContainerStyle(n),this.mapDom=r}render(n){this.setCssVariables();const r=new Map,s=[],t=[],i=[],o=[];this.previousPromises.forEach(l=>l.resolve()),this.previousPromises=[];const h=[],{globalScale:a}=this.options,c=new Map;let u=this.anchor.getBoundingClientRect();const g=this.container.getBoundingClientRect();for(const l of this.mapDom.values()){const f=l.getBoundingClientRect();c.set(l,{x:f.x-u.x,y:f.y-u.y})}const p=n.tokens.map(l=>{if(this.mapDom.has(l.key)){const f=this.mapDom.get(l.key);return this.applyElementContent(f,l),h.push(()=>{this.applyElementStyle(f,l)}),s.push(f),r.set(l.key,f),this.mapDom.delete(l.key),f}else{const f=document.createElement(l.content===`
`?"br":"span");return this.applyElement(f,l),t.push(f),r.set(l.key,f),f}});for(const[l,f]of this.mapDom)f.tagName!=="BR"&&i.push(f);for(const l of i)l.style.position="absolute";if(this.container.replaceChildren(this.anchor,...p,...i),this.mapDom=r,i.forEach((l,f)=>{l.style.position="absolute";const A=c.get(l);l.style.top=`${A.y/a}px`,l.style.left=`${A.x/a}px`,this.options.stagger?l.style.setProperty("--smm-stagger",`${f*this.options.stagger}ms`):l.style.removeProperty("--smm-stagger"),l.classList.add(q),l.classList.add(rt),h.unshift(()=>{l.classList.remove(q),l.classList.add(pe)}),o.push(this.registerTransitionEnd(l,()=>{l.classList.remove(q),l.classList.remove(rt),l.classList.remove(I),l.remove()}))}),this.isFirstRender||t.forEach((l,f)=>{l.classList.add(H),l.classList.add(it),this.options.stagger?l.style.setProperty("--smm-stagger",`${f*this.options.stagger}ms`):l.style.removeProperty("--smm-stagger"),h.push(()=>{l.classList.remove(H),l.classList.add(I)}),o.push(this.registerTransitionEnd(l,()=>{l.classList.remove(H),l.classList.remove(it),l.classList.remove(I)}))}),u=this.anchor.getBoundingClientRect(),s.forEach((l,f)=>{const A=l.getBoundingClientRect(),B={x:A.x-u.x,y:A.y-u.y},y=c.get(l);l.style.transitionDuration=l.style.transitionDelay="0ms";const m=(y.x-B.x)/a,S=(y.y-B.y)/a;l.style.transform=`translate(${m}px, ${S}px)`,this.options.stagger?l.style.setProperty("--smm-stagger",`${f*this.options.stagger}ms`):l.style.removeProperty("--smm-stagger"),h.unshift(()=>{l.classList.add(ot),l.style.transform=l.style.transitionDuration=l.style.transitionDelay=""}),o.push(this.registerTransitionEnd(l,()=>{l.classList.remove(ot)}))}),this.options.animateContainer&&!this.isFirstRender){const l=this.container.getBoundingClientRect();(l.width!==g.width||l.height!==g.height)&&(this.container.style.transitionDuration=this.container.style.transitionDelay="0ms",this.container.style.height=`${g.height/a}px`,this.container.style.width=`${g.width/a}px`,h.unshift(()=>{this.container.classList.add(at),this.container.style.transitionDuration=this.container.style.transitionDelay="",this.container.style.height=`${l.height/a}px`,this.container.style.width=`${l.width/a}px`}),o.push(this.registerTransitionEnd(this.container,()=>{this.container.classList.remove(at),this.container.style.height=this.container.style.width=""})))}return this.options.containerStyle&&(this.isFirstRender?this.applyContainerStyle(n):this.checkContainerStyleChanged(n)&&(h.push(()=>{this.container.classList.add(lt),this.applyContainerStyle(n)}),o.push(this.registerTransitionEnd(this.container,()=>{this.container.classList.remove(lt)})))),ye(),h.forEach(l=>l()),this.isFirstRender=!1,this.previousPromises=o,Promise.all(o).then()}}function ye(){return document.body.offsetHeight}const de=x({name:"ShikiMagicMoveRenderer",props:{animate:{type:Boolean,default:!0},tokens:{type:Object,required:!0},previous:{type:Object,required:!1},options:{type:Object}},emits:["end","start"],setup(e,{emit:n}){const r=V();let s=!1;return ht(()=>{r.value.innerHTML="",s=!0;const t=new me(r.value);ut(()=>e.tokens,async i=>{if(Object.assign(t.options,e.options),e.animate){e.previous&&t.replace(e.previous),await J();const o=t.render(i);await J(),n("start"),await o,n("end")}else t.replace(i)},{immediate:!0})}),()=>E("pre",{ref:r,class:"shiki-magic-move-container"},s?void 0:dt(e.tokens.tokens,t=>t.content===`
`?E("br",{key:t.key}):E("span",{style:[{color:t.color},t.htmlStyle],class:["shiki-magic-move-item",t.htmlClass],key:t.key},t.content)))}}),be=x({name:"ShikiMagicMovePrecompiled",props:{steps:{type:Array,required:!0},step:{type:Number,default:0},animate:{type:Boolean,default:!0},options:{type:Object,default:()=>({})}},emits:["start","end"],setup(e,{emit:n}){let s=oe("",[]);const t=ct(()=>{const i=ce(s,e.steps[Math.min(e.step,e.steps.length-1)],e.options);return s=i.to,i});return()=>E(de,{tokens:t.value.to,previous:t.value.from,options:e.options,animate:e.animate,onStart:()=>n("start"),onEnd:()=>n("end")})}}),Ae=x({__name:"ShikiMagicMove",props:{at:{type:[String,Number],default:"+1"},stepsLz:{type:String,required:!0},stepRanges:{type:Array,required:!0},lines:{type:Boolean,default:Rt.lineNumbers}},setup(e){const n=e,r=JSON.parse(kt.decompressFromBase64(n.stepsLz)),{$clicksContext:s,$scale:t,$zoom:i}=ft(),{isPrintMode:o}=Dt(),h=Nt(),a=V(0),c=V(),u=ct(()=>n.stepRanges.map(g=>g.length?g:["all"]));return bt(()=>{s==null||s.unregister(h)}),ht(()=>{if(!s)return;if(u.value.length!==r.length)throw new Error("[slidev] The length of stepRanges does not match the length of steps, this is an internal error.");const g=u.value.map(l=>l.length).reduce((l,f)=>l+f,0),p=s.calculateSince(n.at,g-1);s.register(h,p),ut(()=>s.current,()=>{const l=p?s.current-p.start:Ft;let f=r.length-1,A=0,B="all";for(let y=0;y<u.value.length;y++){const m=u.value[y];if(l<A+m.length-1){f=y,B=m[l-A+1];break}A+=m.length||1}J(async()=>{var d;a.value=f,await Mt(0);const y=(d=c.value)==null?void 0:d.querySelector(".shiki");if(!y)return;const S=Array.from(y.children).slice(1).filter(b=>!b.className.includes("shiki-magic-move-leave")).reduce((b,w)=>(w.tagName==="BR"?b.push([]):b[b.length-1].push(w),b),[[]]);Lt(B,S.length,1,b=>S[b])})},{immediate:!0})}),(g,p)=>(gt(),At("div",{ref_key:"container",ref:c,class:"slidev-code-wrapper slidev-code-magic-move relative"},[pt(L(be),{class:"slidev-code relative shiki overflow-visible",steps:L(r),step:a.value,animate:!L(o),options:{globalScale:L(t)*L(i),duration:800,stagger:1}},null,8,["steps","step","animate","options"])],512))}}),Be=z("h1",null,"Shiki Magic Move",-1),Se=z("p",null,[_("Powered by "),z("a",{href:"https://shiki-magic-move.netlify.app/",target:"_blank"},"shiki-magic-move"),_(", Slidev supports animations across multiple code snippets.")],-1),Ce=z("p",null,[_("Add multiple code blocks and wrap them with "),z("code",null,"````md magic-move"),_(" (four backticks) to enable the magic move. For example:")],-1),Oe={__name:"12",setup(e){return Ot(Y),ft(),(n,r)=>{const s=Ae;return gt(),Bt(Pt,vt(wt(L(Kt)(L(Y),11))),{default:St(()=>[Be,Se,Ce,pt(s,Ct({},{"steps-lz":"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","step-ranges":[["*","2","*"],["*","1-2","3-4","3-4,8"],[],[]]}),null,16)]),_:1},16)}}};export{Oe as default};