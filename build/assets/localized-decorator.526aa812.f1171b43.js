import{L as n}from"./index.dd84ea55.b1ec46d6.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class o{constructor(e){this.__litLocalizeEventHandler=i=>{i.detail.status==="ready"&&this.host.requestUpdate()},this.host=e}hostConnected(){window.addEventListener(n,this.__litLocalizeEventHandler)}hostDisconnected(){window.removeEventListener(n,this.__litLocalizeEventHandler)}}const d=t=>t.addController(new o(t)),s=d;/**
* @license
* Copyright 2021 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const a=()=>t=>typeof t=="function"?r(t):l(t),h=a,l=({kind:t,elements:e})=>({kind:t,elements:e,finisher(i){i.addInitializer(s)}}),r=t=>(t.addInitializer(s),t);export{h};
