import{r as n}from"./react-DExB2CO0.js";import{i as p,m as J,j as P,A as z,p as W,s as S,g as j,r as D,a as $}from"./@remix-run-DxFES9XG.js";/**
 * React Router v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _(){return _=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},_.apply(this,arguments)}const B=n.createContext(null),V=n.createContext(null),y=n.createContext(null),U=n.createContext(null),x=n.createContext({outlet:null,matches:[],isDataRoute:!1}),F=n.createContext(null);function se(e,t){let{relative:r}=t===void 0?{}:t;R()||p(!1);let{basename:o,navigator:i}=n.useContext(y),{hash:u,pathname:a,search:v}=q(e,{relative:r}),c=a;return o!=="/"&&(c=a==="/"?o:P([o,a])),i.createHref({pathname:c,search:v,hash:u})}function R(){return n.useContext(U)!=null}function k(){return R()||p(!1),n.useContext(U).location}function T(e){n.useContext(y).static||n.useLayoutEffect(e)}function ue(){let{isDataRoute:e}=n.useContext(x);return e?ne():Y()}function Y(){R()||p(!1);let e=n.useContext(B),{basename:t,future:r,navigator:o}=n.useContext(y),{matches:i}=n.useContext(x),{pathname:u}=k(),a=JSON.stringify(j(i,r.v7_relativeSplatPath)),v=n.useRef(!1);return T(()=>{v.current=!0}),n.useCallback(function(f,s){if(s===void 0&&(s={}),!v.current)return;if(typeof f=="number"){o.go(f);return}let l=D(f,JSON.parse(a),u,s.relative==="path");e==null&&t!=="/"&&(l.pathname=l.pathname==="/"?t:P([t,l.pathname])),(s.replace?o.replace:o.push)(l,s.state,s)},[t,o,a,u,e])}function q(e,t){let{relative:r}=t===void 0?{}:t,{future:o}=n.useContext(y),{matches:i}=n.useContext(x),{pathname:u}=k(),a=JSON.stringify(j(i,o.v7_relativeSplatPath));return n.useMemo(()=>D(e,JSON.parse(a),u,r==="path"),[e,a,u,r])}function ce(e,t,r,o){R()||p(!1);let{navigator:i}=n.useContext(y),{matches:u}=n.useContext(x),a=u[u.length-1],v=a?a.params:{};a&&a.pathname;let c=a?a.pathnameBase:"/";a&&a.route;let f=k(),s;s=f;let l=s.pathname||"/",m=l;if(c!=="/"){let d=c.replace(/^\//,"").split("/");m="/"+l.replace(/^\//,"").split("/").slice(d.length).join("/")}let h=J(e,{pathname:m});return X(h&&h.map(d=>Object.assign({},d,{params:Object.assign({},v,d.params),pathname:P([c,i.encodeLocation?i.encodeLocation(d.pathname).pathname:d.pathname]),pathnameBase:d.pathnameBase==="/"?c:P([c,i.encodeLocation?i.encodeLocation(d.pathnameBase).pathname:d.pathnameBase])})),u,r,o)}function G(){let e=re(),t=$(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return n.createElement(n.Fragment,null,n.createElement("h2",null,"Unexpected Application Error!"),n.createElement("h3",{style:{fontStyle:"italic"}},t),r?n.createElement("pre",{style:i},r):null,null)}const H=n.createElement(G,null);class K extends n.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?n.createElement(x.Provider,{value:this.props.routeContext},n.createElement(F.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Q(e){let{routeContext:t,match:r,children:o}=e,i=n.useContext(B);return i&&i.static&&i.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=r.route.id),n.createElement(x.Provider,{value:t},o)}function X(e,t,r,o){var i;if(t===void 0&&(t=[]),r===void 0&&(r=null),o===void 0&&(o=null),e==null){var u;if(!r)return null;if(r.errors)e=r.matches;else if((u=o)!=null&&u.v7_partialHydration&&t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let a=e,v=(i=r)==null?void 0:i.errors;if(v!=null){let s=a.findIndex(l=>l.route.id&&(v==null?void 0:v[l.route.id])!==void 0);s>=0||p(!1),a=a.slice(0,Math.min(a.length,s+1))}let c=!1,f=-1;if(r&&o&&o.v7_partialHydration)for(let s=0;s<a.length;s++){let l=a[s];if((l.route.HydrateFallback||l.route.hydrateFallbackElement)&&(f=s),l.route.id){let{loaderData:m,errors:h}=r,g=l.route.loader&&m[l.route.id]===void 0&&(!h||h[l.route.id]===void 0);if(l.route.lazy||g){c=!0,f>=0?a=a.slice(0,f+1):a=[a[0]];break}}}return a.reduceRight((s,l,m)=>{let h,g=!1,d=null,C=null;r&&(h=v&&l.route.id?v[l.route.id]:void 0,d=l.route.errorElement||H,c&&(f<0&&m===0?(ae("route-fallback"),g=!0,C=null):f===m&&(g=!0,C=l.route.hydrateFallbackElement||null)));let O=t.concat(a.slice(0,m+1)),I=()=>{let E;return h?E=d:g?E=C:l.route.Component?E=n.createElement(l.route.Component,null):l.route.element?E=l.route.element:E=s,n.createElement(Q,{match:l,routeContext:{outlet:s,matches:O,isDataRoute:r!=null},children:E})};return r&&(l.route.ErrorBoundary||l.route.errorElement||m===0)?n.createElement(K,{location:r.location,revalidation:r.revalidation,component:d,error:h,children:I(),routeContext:{outlet:null,matches:O,isDataRoute:!0}}):I()},null)}var w=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(w||{}),N=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(N||{});function Z(e){let t=n.useContext(B);return t||p(!1),t}function ee(e){let t=n.useContext(V);return t||p(!1),t}function te(e){let t=n.useContext(x);return t||p(!1),t}function A(e){let t=te(),r=t.matches[t.matches.length-1];return r.route.id||p(!1),r.route.id}function re(){var e;let t=n.useContext(F),r=ee(N.UseRouteError),o=A(N.UseRouteError);return t!==void 0?t:(e=r.errors)==null?void 0:e[o]}function ne(){let{router:e}=Z(w.UseNavigateStable),t=A(N.UseNavigateStable),r=n.useRef(!1);return T(()=>{r.current=!0}),n.useCallback(function(i,u){u===void 0&&(u={}),r.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,_({fromRouteId:t},u)))},[e,t])}const L={};function ae(e,t,r){L[e]||(L[e]=!0)}const M={};function oe(e,t){M[t]||(M[t]=!0,console.warn(t))}const b=(e,t,r)=>oe(e,"⚠️ React Router Future Flag Warning: "+t+". "+("You can use the `"+e+"` future flag to opt-in early. ")+("For more information, see "+r+"."));function de(e,t){e!=null&&e.v7_startTransition||b("v7_startTransition","React Router will begin wrapping state updates in `React.startTransition` in v7","https://reactrouter.com/v6/upgrading/future#v7_starttransition"),!(e!=null&&e.v7_relativeSplatPath)&&(!t||!t.v7_relativeSplatPath)&&b("v7_relativeSplatPath","Relative route resolution within Splat routes is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath"),t&&(t.v7_fetcherPersist||b("v7_fetcherPersist","The persistence behavior of fetchers is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_fetcherpersist"),t.v7_normalizeFormMethod||b("v7_normalizeFormMethod","Casing of `formMethod` fields is being normalized to uppercase in v7","https://reactrouter.com/v6/upgrading/future#v7_normalizeformmethod"),t.v7_partialHydration||b("v7_partialHydration","`RouterProvider` hydration behavior is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_partialhydration"),t.v7_skipActionErrorRevalidation||b("v7_skipActionErrorRevalidation","The revalidation behavior after 4xx/5xx `action` responses is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_skipactionerrorrevalidation"))}function ve(e){let{basename:t="/",children:r=null,location:o,navigationType:i=z.Pop,navigator:u,static:a=!1,future:v}=e;R()&&p(!1);let c=t.replace(/^\/*/,"/"),f=n.useMemo(()=>({basename:c,navigator:u,static:a,future:_({v7_relativeSplatPath:!1},v)}),[c,v,u,a]);typeof o=="string"&&(o=W(o));let{pathname:s="/",search:l="",hash:m="",state:h=null,key:g="default"}=o,d=n.useMemo(()=>{let C=S(s,c);return C==null?null:{location:{pathname:C,search:l,hash:m,state:h,key:g},navigationType:i}},[c,s,l,m,h,g,i]);return d==null?null:n.createElement(y.Provider,{value:f},n.createElement(U.Provider,{children:r,value:d}))}new Promise(()=>{});function fe(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:n.createElement(e.Component),Component:void 0}),e.HydrateFallback&&Object.assign(t,{hydrateFallbackElement:n.createElement(e.HydrateFallback),HydrateFallback:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:n.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}export{B as D,y as N,ve as R,V as a,se as b,ue as c,k as d,q as e,de as l,fe as m,ce as u};
