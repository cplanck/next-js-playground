(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[850],{2802:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/articles/[slug]",function(){return r(3315)}])},8009:function(e,t,r){"use strict";r.d(t,{Z:function(){return h}});var s=r(5893);r(7294);var n=r(7357),i=r(6242),o=r(2023),u=r(4267),l=r(3321),a=r(5861);let c=(0,s.jsx)(n.Z,{component:"span",sx:{display:"inline-block",mx:"2px",transform:"scale(0.8)"},children:"•"});function h(){return(0,s.jsxs)(i.Z,{sx:{minWidth:275},children:[(0,s.jsxs)(u.Z,{children:[(0,s.jsx)(a.Z,{sx:{fontSize:14},color:"text.secondary",gutterBottom:!0,children:"Word of the Day"}),(0,s.jsxs)(a.Z,{variant:"h5",component:"div",children:["be",c,"nev",c,"o",c,"lent"]}),(0,s.jsx)(a.Z,{sx:{mb:1.5},color:"text.secondary",children:"adjective"}),(0,s.jsxs)(a.Z,{variant:"body2",children:["well meaning and kindly.",(0,s.jsx)("br",{}),'"a benevolent smile"']})]}),(0,s.jsx)(o.Z,{children:(0,s.jsx)(l.Z,{size:"small",children:"Learn More"})})]})}},9815:function(e,t,r){"use strict";r.d(t,{Z:function(){return v}});var s=r(5893),n=r(7294),i=r(7357),o=r(3466),u=r(3321),l=r(8462),a=r(1519),c=r(7212),h=r(8619),d=r(796),p=r(9953),f=r(2165),y=r(6448);function v(e){let[t,r]=n.useState({top:!1,left:!1,bottom:!1,right:!1}),v=(e,s)=>n=>{("keydown"!==n.type||"Tab"!==n.key&&"Shift"!==n.key)&&r({...t,[e]:s})},m=e=>(0,s.jsxs)(i.Z,{sx:{width:"top"===e||"bottom"===e?"auto":250},role:"presentation",onClick:v(e,!1),onKeyDown:v(e,!1),children:[(0,s.jsx)(l.Z,{children:["Inbox","Starred","Send email","Drafts"].map((e,t)=>(0,s.jsx)(c.ZP,{disablePadding:!0,children:(0,s.jsxs)(h.Z,{children:[(0,s.jsx)(d.Z,{children:t%2==0?(0,s.jsx)(f.Z,{}):(0,s.jsx)(y.Z,{})}),(0,s.jsx)(p.Z,{primary:e})]})},e))}),(0,s.jsx)(a.Z,{}),(0,s.jsx)(l.Z,{children:["All mail","Trash","Spam"].map((e,t)=>(0,s.jsx)(c.ZP,{disablePadding:!0,children:(0,s.jsxs)(h.Z,{children:[(0,s.jsx)(d.Z,{children:t%2==0?(0,s.jsx)(f.Z,{}):(0,s.jsx)(y.Z,{})}),(0,s.jsx)(p.Z,{primary:e})]})},e))})]});return(0,s.jsx)("div",{children:["left","right","top","bottom"].map(e=>(0,s.jsxs)(n.Fragment,{children:[(0,s.jsx)(u.Z,{onClick:v(e,!0),children:e}),(0,s.jsx)(o.ZP,{anchor:e,open:t[e],onClose:v(e,!1),children:m(e)})]},e))})}},3315:function(e,t,r){"use strict";let s;r.r(t),r.d(t,{__N_SSP:function(){return F},default:function(){return _}});var n=r(5893),i=r(7294);r(9008),r(5675);var o=r(1664),u=r.n(o);r(8009),r(9815);var l=r(2161),a=r(81),c=r(5761),h=r(3989),d=r(2379);class p extends h.l{constructor(e,t){super(),this.client=e,this.options=t,this.trackedProps=new Set,this.selectError=null,this.bindMethods(),this.setOptions(t)}bindMethods(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)}onSubscribe(){1===this.listeners.length&&(this.currentQuery.addObserver(this),f(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())}onUnsubscribe(){this.listeners.length||this.destroy()}shouldFetchOnReconnect(){return y(this.currentQuery,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return y(this.currentQuery,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=[],this.clearStaleTimeout(),this.clearRefetchInterval(),this.currentQuery.removeObserver(this)}setOptions(e,t){let r=this.options,s=this.currentQuery;if(this.options=this.client.defaultQueryOptions(e),(0,l.VS)(r,this.options)||this.client.getQueryCache().notify({type:"observerOptionsUpdated",query:this.currentQuery,observer:this}),void 0!==this.options.enabled&&"boolean"!=typeof this.options.enabled)throw Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=r.queryKey),this.updateQuery();let n=this.hasListeners();n&&v(this.currentQuery,s,this.options,r)&&this.executeFetch(),this.updateResult(t),n&&(this.currentQuery!==s||this.options.enabled!==r.enabled||this.options.staleTime!==r.staleTime)&&this.updateStaleTimeout();let i=this.computeRefetchInterval();n&&(this.currentQuery!==s||this.options.enabled!==r.enabled||i!==this.currentRefetchInterval)&&this.updateRefetchInterval(i)}getOptimisticResult(e){let t=this.client.getQueryCache().build(this.client,e);return this.createResult(t,e)}getCurrentResult(){return this.currentResult}trackResult(e){let t={};return Object.keys(e).forEach(r=>{Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:()=>(this.trackedProps.add(r),e[r])})}),t}getCurrentQuery(){return this.currentQuery}remove(){this.client.getQueryCache().remove(this.currentQuery)}refetch({refetchPage:e,...t}={}){return this.fetch({...t,meta:{refetchPage:e}})}fetchOptimistic(e){let t=this.client.defaultQueryOptions(e),r=this.client.getQueryCache().build(this.client,t);return r.isFetchingOptimistic=!0,r.fetch().then(()=>this.createResult(r,t))}fetch(e){var t;return this.executeFetch({...e,cancelRefetch:null==(t=e.cancelRefetch)||t}).then(()=>(this.updateResult(),this.currentResult))}executeFetch(e){this.updateQuery();let t=this.currentQuery.fetch(this.options,e);return null!=e&&e.throwOnError||(t=t.catch(l.ZT)),t}updateStaleTimeout(){if(this.clearStaleTimeout(),l.sk||this.currentResult.isStale||!(0,l.PN)(this.options.staleTime))return;let e=(0,l.Kp)(this.currentResult.dataUpdatedAt,this.options.staleTime);this.staleTimeoutId=setTimeout(()=>{this.currentResult.isStale||this.updateResult()},e+1)}computeRefetchInterval(){var e;return"function"==typeof this.options.refetchInterval?this.options.refetchInterval(this.currentResult.data,this.currentQuery):null!=(e=this.options.refetchInterval)&&e}updateRefetchInterval(e){this.clearRefetchInterval(),this.currentRefetchInterval=e,!l.sk&&!1!==this.options.enabled&&(0,l.PN)(this.currentRefetchInterval)&&0!==this.currentRefetchInterval&&(this.refetchIntervalId=setInterval(()=>{(this.options.refetchIntervalInBackground||c.j.isFocused())&&this.executeFetch()},this.currentRefetchInterval))}updateTimers(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())}clearStaleTimeout(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)}clearRefetchInterval(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)}createResult(e,t){let r;let s=this.currentQuery,n=this.options,i=this.currentResult,o=this.currentResultState,u=this.currentResultOptions,a=e!==s,c=a?e.state:this.currentQueryInitialState,h=a?this.currentResult:this.previousQueryResult,{state:p}=e,{dataUpdatedAt:y,error:R,errorUpdatedAt:b,fetchStatus:x,status:S}=p,g=!1,j=!1;if(t._optimisticResults){let E=this.hasListeners(),I=!E&&f(e,t),Q=E&&v(e,s,t,n);(I||Q)&&(x=(0,d.Kw)(e.options.networkMode)?"fetching":"paused",y||(S="loading")),"isRestoring"===t._optimisticResults&&(x="idle")}if(t.keepPreviousData&&!p.dataUpdatedAt&&null!=h&&h.isSuccess&&"error"!==S)r=h.data,y=h.dataUpdatedAt,S=h.status,g=!0;else if(t.select&&void 0!==p.data){if(i&&p.data===(null==o?void 0:o.data)&&t.select===this.selectFn)r=this.selectResult;else try{this.selectFn=t.select,r=t.select(p.data),r=(0,l.oE)(null==i?void 0:i.data,r,t),this.selectResult=r,this.selectError=null}catch(C){this.selectError=C}}else r=p.data;if(void 0!==t.placeholderData&&void 0===r&&"loading"===S){let w;if(null!=i&&i.isPlaceholderData&&t.placeholderData===(null==u?void 0:u.placeholderData))w=i.data;else if(w="function"==typeof t.placeholderData?t.placeholderData():t.placeholderData,t.select&&void 0!==w)try{w=t.select(w),this.selectError=null}catch(O){this.selectError=O}void 0!==w&&(S="success",r=(0,l.oE)(null==i?void 0:i.data,w,t),j=!0)}this.selectError&&(R=this.selectError,r=this.selectResult,b=Date.now(),S="error");let T="fetching"===x,Z="loading"===S,k="error"===S,P={status:S,fetchStatus:x,isLoading:Z,isSuccess:"success"===S,isError:k,isInitialLoading:Z&&T,data:r,dataUpdatedAt:y,error:R,errorUpdatedAt:b,failureCount:p.fetchFailureCount,failureReason:p.fetchFailureReason,errorUpdateCount:p.errorUpdateCount,isFetched:p.dataUpdateCount>0||p.errorUpdateCount>0,isFetchedAfterMount:p.dataUpdateCount>c.dataUpdateCount||p.errorUpdateCount>c.errorUpdateCount,isFetching:T,isRefetching:T&&!Z,isLoadingError:k&&0===p.dataUpdatedAt,isPaused:"paused"===x,isPlaceholderData:j,isPreviousData:g,isRefetchError:k&&0!==p.dataUpdatedAt,isStale:m(e,t),refetch:this.refetch,remove:this.remove};return P}updateResult(e){let t=this.currentResult,r=this.createResult(this.currentQuery,this.options);if(this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,(0,l.VS)(r,t))return;this.currentResult=r;let s={cache:!0};(null==e?void 0:e.listeners)!==!1&&(()=>{if(!t)return!0;let{notifyOnChangeProps:e}=this.options;if("all"===e||!e&&!this.trackedProps.size)return!0;let r=new Set(null!=e?e:this.trackedProps);return this.options.useErrorBoundary&&r.add("error"),Object.keys(this.currentResult).some(e=>{let s=this.currentResult[e]!==t[e];return s&&r.has(e)})})()&&(s.listeners=!0),this.notify({...s,...e})}updateQuery(){let e=this.client.getQueryCache().build(this.client,this.options);if(e===this.currentQuery)return;let t=this.currentQuery;this.currentQuery=e,this.currentQueryInitialState=e.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(null==t||t.removeObserver(this),e.addObserver(this))}onQueryUpdate(e){let t={};"success"===e.type?t.onSuccess=!e.manual:"error"!==e.type||(0,d.DV)(e.error)||(t.onError=!0),this.updateResult(t),this.hasListeners()&&this.updateTimers()}notify(e){a.V.batch(()=>{var t,r,s,n,i,o,u,l;e.onSuccess?(null==(t=(r=this.options).onSuccess)||t.call(r,this.currentResult.data),null==(s=(n=this.options).onSettled)||s.call(n,this.currentResult.data,null)):e.onError&&(null==(i=(o=this.options).onError)||i.call(o,this.currentResult.error),null==(u=(l=this.options).onSettled)||u.call(l,void 0,this.currentResult.error)),e.listeners&&this.listeners.forEach(e=>{e(this.currentResult)}),e.cache&&this.client.getQueryCache().notify({query:this.currentQuery,type:"observerResultsUpdated"})})}}function f(e,t){return!1!==t.enabled&&!e.state.dataUpdatedAt&&!("error"===e.state.status&&!1===t.retryOnMount)||e.state.dataUpdatedAt>0&&y(e,t,t.refetchOnMount)}function y(e,t,r){if(!1!==t.enabled){let s="function"==typeof r?r(e):r;return"always"===s||!1!==s&&m(e,t)}return!1}function v(e,t,r,s){return!1!==r.enabled&&(e!==t||!1===s.enabled)&&(!r.suspense||"error"!==e.state.status)&&m(e,r)}function m(e,t){return e.isStaleByTime(t.staleTime)}var R=r(1688);let b=R.useSyncExternalStore,x=i.createContext((s=!1,{clearReset:()=>{s=!1},reset:()=>{s=!0},isReset:()=>s})),S=()=>i.useContext(x);var g=r(5945);let j=i.createContext(!1),E=()=>i.useContext(j);j.Provider;let I=(e,t)=>{(e.suspense||e.useErrorBoundary)&&!t.isReset()&&(e.retryOnMount=!1)},Q=e=>{i.useEffect(()=>{e.clearReset()},[e])},C=({result:e,errorResetBoundary:t,useErrorBoundary:r,query:s})=>{var n;return e.isError&&!t.isReset()&&!e.isFetching&&(n=[e.error,s],"function"==typeof r?r(...n):!!r)},w=e=>{e.suspense&&"number"!=typeof e.staleTime&&(e.staleTime=1e3)},O=(e,t)=>e.isLoading&&e.isFetching&&!t,T=(e,t,r)=>(null==e?void 0:e.suspense)&&O(t,r),Z=(e,t,r)=>t.fetchOptimistic(e).then(({data:t})=>{null==e.onSuccess||e.onSuccess(t),null==e.onSettled||e.onSettled(t,null)}).catch(t=>{r.clearReset(),null==e.onError||e.onError(t),null==e.onSettled||e.onSettled(void 0,t)});var k=r(1163);let P=async e=>{let t=await fetch("https://www.cryosphereinnovation.com/api/articles/?article="+e),r=await t.json();return r};var F=!0;function _(e){let{data:t,status:r}=function(e,t,r){let s=(0,l._v)(e,t,void 0);return function(e,t){let r=(0,g.NL)({context:e.context}),s=E(),n=S(),o=r.defaultQueryOptions(e);o._optimisticResults=s?"isRestoring":"optimistic",o.onError&&(o.onError=a.V.batchCalls(o.onError)),o.onSuccess&&(o.onSuccess=a.V.batchCalls(o.onSuccess)),o.onSettled&&(o.onSettled=a.V.batchCalls(o.onSettled)),w(o),I(o,n),Q(n);let[u]=i.useState(()=>new t(r,o)),l=u.getOptimisticResult(o);if(b(i.useCallback(e=>s?()=>void 0:u.subscribe(a.V.batchCalls(e)),[u,s]),()=>u.getCurrentResult(),()=>u.getCurrentResult()),i.useEffect(()=>{u.setOptions(o,{listeners:!1})},[o,u]),T(o,l,s))throw Z(o,u,n);if(C({result:l,errorResetBoundary:n,useErrorBoundary:o.useErrorBoundary,query:u.getCurrentQuery()}))throw l.error;return o.notifyOnChangeProps?l:u.trackResult(l)}(s,p)}(["apexCards"],P),s=(0,k.useRouter)();return"loading"==r?(console.log("Waiting on data..."),console.log(s.asPath),console.log(s.query)):console.log("Data received"),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(u(),{href:"/",children:"Home"}),(0,n.jsx)(u(),{href:"/articles/api-docs",children:"API"}),(0,n.jsx)(u(),{href:"/articles/simb3-ctd",children:"SIMB3 CTD"}),e.data?(0,n.jsx)(U,{body:e.data[0].body}):"Henlo"]})}function U(e){return(0,n.jsx)("div",{dangerouslySetInnerHTML:{__html:e.body}})}},1163:function(e,t,r){e.exports=r(880)},3250:function(e,t,r){"use strict";/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s=r(7294),n="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},i=s.useState,o=s.useEffect,u=s.useLayoutEffect,l=s.useDebugValue;function a(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!n(e,r)}catch(s){return!0}}var c="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var r=t(),s=i({inst:{value:r,getSnapshot:t}}),n=s[0].inst,c=s[1];return u(function(){n.value=r,n.getSnapshot=t,a(n)&&c({inst:n})},[e,r,t]),o(function(){return a(n)&&c({inst:n}),e(function(){a(n)&&c({inst:n})})},[e]),l(r),r};t.useSyncExternalStore=void 0!==s.useSyncExternalStore?s.useSyncExternalStore:c},1688:function(e,t,r){"use strict";e.exports=r(3250)}},function(e){e.O(0,[996,835,675,774,888,179],function(){return e(e.s=2802)}),_N_E=e.O()}]);