(this.webpackJsonpklipping=this.webpackJsonpklipping||[]).push([[0],{41:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);n(5);var c,i=n(1),a=n.n(i),r=n(16),o=n.n(r),s=(n(41),n(7)),d=n(9),l=n(0),u=n(6),b=n(3),f=n(2),j=n(8);!function(e){e.cutting="Cutting",e.metadata="Metadata",e.thumbnail="Thumbnail",e.finish="Finish"}(c||(c={}));var p={value:c.cutting},O=Object(j.c)({name:"mainMenuState",initialState:p,reducers:{setState:function(e,t){e.value=t.payload}}}),g=O.actions.setState,m=function(e){return e.mainMenuState.value},v=O.reducer,x=Object(j.c)({name:"finishState",initialState:{value:"Start processing",pageNumber:0},reducers:{setState:function(e,t){e.value=t.payload},setPageNumber:function(e,t){e.pageNumber=t.payload}}}),h=x.actions,y=h.setState,w=h.setPageNumber,S=function(e){return e.finishState.value},k=function(e){return e.finishState.pageNumber},I=x.reducer;var C=function(){return Object(l.c)(l.a,{styles:P})},P={name:"1bjjf7p",styles:"body{background-color:snow;font-size:medium;min-height:100vh;}"},N=Object(l.b)({borderRadius:"10px",cursor:"pointer",transitionDuration:"0.3s",transitionProperty:"transform","&:hover":{transform:"scale(1.1)"},"&:active":{transform:"scale(0.9)"},display:"flex",justifyContent:"center",alignItems:"center",gap:"10px",textAlign:"center"},""),D=Object(l.b)({display:"flex",flexDirection:"row",gap:"20px"},""),A=function(e){var t=e.iconName,n=e.stateName,i=Object(f.b)(),a=Object(f.c)(m),r=Object(l.b)(Object(d.a)(Object(d.a)({width:"100%",height:"100px"},a===n&&{backgroundColor:"#DDD"}),{},{flexDirection:"column"}),"");return Object(l.c)("div",{css:Object(s.a)([N,r],""),title:n,onClick:function(){i(g(n)),n===c.finish&&i(w(0))}},Object(l.c)(u.a,{icon:t,size:"2x"}),Object(l.c)("div",null,n))},R=function(){return Object(l.c)("div",{style:{borderRight:"1px solid #BBB",width:"100px",display:"flex",flexDirection:"column",flexShrink:0,alignItems:"center",padding:"20px",gap:"30px"},title:"MainMenu"},Object(l.c)(A,{iconName:b.k,stateName:c.cutting}),Object(l.c)(A,{iconName:b.l,stateName:c.metadata}),Object(l.c)(A,{iconName:b.n,stateName:c.thumbnail}),Object(l.c)(A,{iconName:b.r,stateName:c.finish}))},z=n(17),T=n(12),W=n.n(T),M=n(14),B=n(35);function E(e){return L.apply(this,arguments)}function L(){return(L=Object(M.a)(W.a.mark((function e(t){var n,c,i,a,r,o,s,l,u,b,f=arguments;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=f.length>1&&void 0!==f[1]?f[1]:{},c=n.body,i=Object(B.a)(n,["body"]),a={"Content-Type":"application/json"},r=btoa(unescape(encodeURIComponent("admin:opencast"))),o={Authorization:"Basic ".concat(r)},s=Object(d.a)(Object(d.a)({method:c?"POST":"GET"},i),{},{headers:Object(d.a)(Object(d.a)(Object(d.a)({},a),i.headers),o)}),c&&(s.body=JSON.stringify(c)),e.prev=6,e.next=9,window.fetch(t,s);case 9:return b=e.sent,e.next=12,b.text();case 12:if(u=e.sent,l=u.length?JSON.parse(u):"",!b.ok){e.next=16;break}return e.abrupt("return",l);case 16:throw new Error(b.statusText);case 19:return e.prev=19,e.t0=e.catch(6),e.abrupt("return",Promise.reject(e.t0.message?e.t0.message:l));case 22:case"end":return e.stop()}}),e,null,[[6,19]])})))).apply(this,arguments)}E.get=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return E(e,Object(d.a)(Object(d.a)({},t),{},{method:"GET"}))},E.post=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return E(e,Object(d.a)(Object(d.a)({},n),{},{body:t}))};var V=function(e,t){var n=Math.pow(10,t);return Math.round((e+Number.EPSILON)*n)/n},F={isPlaying:!1,isPlayPreview:!1,currentlyAt:0,segments:[{id:Object(j.d)(),start:0,end:1,deleted:!1}],activeSegmentIndex:0,selectedWorkflowIndex:0,previewTriggered:!1,videoURLs:[],videoCount:0,duration:0,title:"",presenters:[],workflows:[],status:"idle",error:void 0},q=Object(j.b)("video/fetchVideoInformation",Object(M.a)(W.a.mark((function e(){var t;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.get("https://legacy.opencast.org/admin-ng/tools/ID-dual-stream-demo/editor.json");case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))),Y=Object(j.c)({name:"videoState",initialState:F,reducers:{setIsPlaying:function(e,t){e.isPlaying=t.payload},setIsPlayPreview:function(e,t){e.isPlayPreview=t.payload},setPreviewTriggered:function(e,t){e.previewTriggered=t.payload},setCurrentlyAt:function(e,t){e.currentlyAt=V(t.payload,3),U(e),H(e)},setCurrentlyAtInSeconds:function(e,t){e.currentlyAt=V(1e3*t.payload,3),U(e),H(e)},addSegment:function(e,t){e.segments.push(t.payload)},cut:function(e){if(e.segments[e.activeSegmentIndex].start===e.currentlyAt||e.segments[e.activeSegmentIndex].end===e.currentlyAt)return e;var t={id:Object(j.d)(),start:e.segments[e.activeSegmentIndex].start,end:e.currentlyAt,deleted:!0},n={id:Object(j.d)(),start:e.currentlyAt,end:e.segments[e.activeSegmentIndex].end,deleted:!0};e.segments.splice(e.activeSegmentIndex,1,t,n)},markAsDeletedOrAlive:function(e){e.segments[e.activeSegmentIndex].deleted=!e.segments[e.activeSegmentIndex].deleted},setSelectedWorkflowIndex:function(e,t){e.selectedWorkflowIndex=t.payload},mergeLeft:function(e){G(e,e.activeSegmentIndex,e.activeSegmentIndex-1)},mergeRight:function(e){G(e,e.activeSegmentIndex,e.activeSegmentIndex+1)}},extraReducers:function(e){e.addCase(q.pending,(function(e,t){e.status="loading"})),e.addCase(q.fulfilled,(function(e,t){e.status="success",e.videoURLs=t.payload.previews.reduce((function(e,t){return e.push(t.uri),e}),[]),e.videoCount=t.payload.previews.length,e.duration=t.payload.duration,e.title=t.payload.title,e.presenters=t.payload.presenters,e.segments=J(t.payload.segments,t.payload.duration),e.workflows=t.payload.workflows.sort((function(e,t){return e.displayOrder>t.displayOrder?1:e.displayOrder<t.displayOrder?-1:0}))})),e.addCase(q.rejected,(function(e,t){e.status="failed",e.error=t.error.message}))}}),U=function(e){e.activeSegmentIndex=e.segments.findIndex((function(t){return t.start<=e.currentlyAt&&t.end>=e.currentlyAt})),e.activeSegmentIndex<0&&(e.activeSegmentIndex=0)},J=function(e,t){var n=[];return 0===e.length&&n.push({id:Object(j.d)(),start:0,end:t,deleted:!1}),e.forEach((function(e){n.push({id:Object(j.d)(),start:e.start,end:e.end,deleted:e.deleted})})),n},G=function(e,t,n){n<0||n>e.segments.length-1||(e.segments[t].start=Math.min(e.segments[t].start,e.segments[n].start),e.segments[t].end=Math.max(e.segments[t].end,e.segments[n].end),e.segments.splice(n,1),U(e))},H=function(e){if(e.isPlaying&&e.segments[e.activeSegmentIndex].deleted&&e.isPlayPreview){for(var t=e.segments[e.activeSegmentIndex].end,n=e.activeSegmentIndex;n<e.segments.length&&e.segments[n].deleted;)t=e.segments[n].end,n++;e.currentlyAt=t,e.previewTriggered=!0}},_=Y.actions,K=_.setIsPlaying,Q=_.setIsPlayPreview,X=_.setCurrentlyAt,Z=_.setCurrentlyAtInSeconds,$=(_.addSegment,_.cut),ee=_.markAsDeletedOrAlive,te=_.setSelectedWorkflowIndex,ne=_.mergeLeft,ce=_.mergeRight,ie=_.setPreviewTriggered,ae=function(e){return e.videoState.isPlaying},re=function(e){return e.videoState.isPlayPreview},oe=function(e){return e.videoState.previewTriggered},se=function(e){return e.videoState.currentlyAt},de=function(e){return e.videoState.currentlyAt/1e3},le=function(e){return e.videoState.segments},ue=function(e){return e.videoState.activeSegmentIndex},be=function(e){return!e.videoState.segments[e.videoState.activeSegmentIndex].deleted},fe=function(e){return e.videoState.selectedWorkflowIndex},je=function(e){return e.videoState.videoURLs},pe=function(e){return e.videoState.videoCount},Oe=function(e){return e.videoState.duration},ge=function(e){return e.videoState.duration/1e3},me=function(e){return e.videoState.title},ve=function(e){return e.videoState.presenters},xe=function(e){return e.videoState.workflows},he=Y.reducer,ye=n(32),we=n.n(ye);var Se={name:"111p67o",styles:"width:100%;height:50vh;"},ke=function(e){var t=e.url,n=e.isMuted,c=Object(f.b)(),a=Object(f.c)(ae),r=Object(f.c)(de),o=Object(f.c)(ge),s=Object(f.c)(oe),d=Object(i.useRef)(null),u=Object(i.useState)(!1),b=Object(z.a)(u,2),j=b[0],p=b[1];Object(i.useEffect)((function(){!a&&d.current&&j&&d.current.seekTo(r,"seconds"),s&&d.current&&j&&(d.current.seekTo(r,"seconds"),c(ie(!1)))}));var O=Se;return Object(l.c)("div",{css:O,title:"playerWrapper"},Object(l.c)(we.a,{url:t,ref:d,width:"100%",height:"100%",playing:a,muted:n,onProgress:function(e){V(r,3)!==V(e.playedSeconds,3)&&c(Z(e.playedSeconds))},progressInterval:100,onReady:function(){p(!0)},onEnded:function(){c(K(!1)),c(Z(o))}}))},Ie={name:"vyrci0",styles:"cursor:pointer;transition-duration:0.3s;transition-property:transform;&:hover{transform:scale(1.1);}&:active{transform:scale(0.9);}"},Ce={name:"1gnq0uh",styles:"cursor:pointer;transition-duration:0.3s;transition-property:transform;&:hover{transform:scale(1.05);}"},Pe={name:"1r139wu",styles:"display:inline-block;width:110px;"},Ne=function(){var e=Object(f.b)(),t=Object(f.c)(ae),n=Object(f.c)(re),c=Object(f.c)(se),i=Object(l.b)({display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"100%",padding:"10px"},""),a=Object(l.b)({display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",width:"100%",padding:"10px",gap:"50px"},""),r=Ie,o=Ce;return Object(l.c)("div",{css:i,title:"Video Controls"},Object(l.c)("div",{css:a,title:"Video Controls Top Row"},Object(l.c)("div",{style:{display:"flex",gap:"10px",width:"50px",justifyContent:"center"}},Object(l.c)(u.a,{icon:n?b.i:b.h,size:"1x",title:"Play Preview Icon"}),Object(l.c)(u.a,{css:o,icon:n?b.x:b.w,size:"1x",title:"Play Preview Switch: "+n,onClick:function(){return e(Q(!n))}})),Object(l.c)(u.a,{css:r,icon:t?b.m:b.o,size:"2x",title:"Play Button",onClick:function(){return e(K(!t))}}),Object(l.c)("div",{css:Pe},new Date(c||0).toISOString().substr(11,12))))},De={name:"iqjf8m",styles:"font-size:large;"},Ae=function(){var e=Object(f.c)(me),t=Object(f.c)(ve),n=De;return Object(l.c)("div",{title:"Video Area Header"},Object(l.c)("div",{css:n,title:"Video Title"},e),Object(l.c)("div",{title:"Video Presenters"},"by ",t.join(", ")))},Re=function(){var e,t=Object(f.b)(),n=Object(f.c)(je),c=Object(f.c)(pe),a=Object(f.c)((function(e){return e.videoState.status})),r=Object(f.c)((function(e){return e.videoState.error}));Object(i.useEffect)((function(){"idle"===a&&t(q())}),[a,t]),"loading"===a?e=Object(l.c)("div",{className:"loader"},"Loading..."):"success"===a?e="":"failed"===a&&(e=Object(l.c)("div",null,r));for(var o=[],s=0;s<c;s++)o.push(Object(l.c)(ke,{key:s,url:n[s],isMuted:0===s}));var d=Object(l.b)({display:"flex",width:"auto",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"10px",borderBottom:"1px solid #BBB"},""),u=Object(l.b)({backgroundColor:"black",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",width:"100%"},"");return Object(l.c)("div",{css:d,title:"Video Area"},e,Object(l.c)(Ae,null),Object(l.c)("div",{css:u,title:"Video Player Area"},o),Object(l.c)(Ne,null))},ze=n(33),Te=n.n(ze),We=n(34),Me=n.p+"static/media/placeholder_waveform.d23b087b.png";var Be={name:"190c1k3",styles:"height:230px;"},Ee={name:"2q5poe",styles:"transform:scaleY(1.5) rotate(90deg);padding:5px;"},Le=function(e){var t=e.timelineWidth,n=Object(f.b)(),c=Object(f.c)(ae),r=Object(f.c)(se),o=Object(f.c)(Oe),s=Object(i.useState)({x:0,y:0}),d=Object(z.a)(s,2),j=d[0],p=d[1],O=Object(i.useState)(!1),g=Object(z.a)(O,2),m=g[0],v=g[1],x=Object(i.useRef)(0),h=a.a.useRef(null);Object(i.useEffect)((function(){r!==x.current&&(y(),x.current=r)})),Object(i.useEffect)((function(){r&&o&&p({x:r/o*t,y:0})}),[t]);var y=function(){var e=j.y;p({x:r/o*t,y:e})},w=Object(l.b)({backgroundColor:"rgba(255, 0, 0, 1)",height:"250px",width:"1px",position:"absolute",zIndex:2,boxShadow:"0 0 10px rgba(0, 0, 0, 0.3)",display:"flex",justifyContent:"center",alignItems:"center"},""),S=Object(l.b)({backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"10px",height:"50px",display:"flex",justifyContent:"center",alignItems:"center",boxShadow:"0 0 10px rgba(0, 0, 0, 0.3)",cursor:m?"grabbing":"grab",transitionDuration:"0.3s",transitionProperty:"transform","&:hover":{transform:"scale(1.1)"},"&:active":{transform:"scale(0.9)"}},""),k=Ee;return Object(l.c)(Te.a,{onStart:function(){v(!0)},onStop:function(e,c){var i=c.x,a=c.y;p({x:i,y:a}),n(X(i/t*o)),v(!1)},axis:"x",bounds:"parent",position:j,disabled:c,nodeRef:h},Object(l.c)("div",{css:w,title:"Scrubber"},Object(l.c)("div",{css:S,title:"dragHandle"},Object(l.c)(u.a,{css:k,icon:b.a,size:"1x"}))))},Ve=function(e){e.timelineWidth;var t=Object(f.c)(le),n=Object(f.c)(Oe),c=Object(f.c)(ue),i=function(e,t){return e||t?e&&!t?"rgba(255, 0, 0, 0.4)":!e&&t?"rgba(0, 0, 200, 0.4)":e&&t?"rgba(200, 0, 0, 0.4)":void 0:"rgba(0, 0, 255, 0.4)"},a=Object(l.b)({display:"flex",flexDirection:"row",paddingTop:"10px"},"");return Object(l.c)("div",{css:a,title:"Segments"},t.map((function(e,t){return Object(l.c)("div",{key:e.id,title:"Segment",css:Object(s.a)({backgroundColor:i(e.deleted,c===t),borderRadius:"5px",borderStyle:"solid",borderColor:"white",borderWidth:"1px",boxSizing:"border-box",width:(e.end-e.start)/n*100+"%",height:"230px",zIndex:1},"")})})))},Fe=function(){var e=Object(We.a)(),t=e.ref,n=e.width,c=void 0===n?1:n,i=Object(l.b)({position:"relative",height:"250px",width:"100%"},"");return Object(l.c)("div",{ref:t,css:i,title:"Timeline"},Object(l.c)(Le,{timelineWidth:c}),Object(l.c)("div",{css:Be},Object(l.c)("img",{alt:"waveform2",src:Me,style:{position:"absolute",height:"230px",width:"100%",top:"10px"}}),Object(l.c)(Ve,{timelineWidth:c})))},qe={padding:"16px",boxShadow:"0 0 10px rgba(0, 0, 0, 0.3)"},Ye=function(e){var t=e.iconName,n=e.actionName,c=e.action,i=Object(f.b)();return Object(l.c)("div",{css:Object(s.a)([N,qe],""),title:n,onClick:function(){return c?i(c()):""}},Object(l.c)(u.a,{icon:t,size:"1x"}),Object(l.c)("span",null,n))},Ue=function(){var e=Object(f.b)(),t=Object(f.c)(be);return Object(l.c)("div",{css:Object(s.a)([N,qe],""),title:t?"Delete":"Restore",onClick:function(){return e(ee())}},Object(l.c)(u.a,{icon:t?b.z:b.A,size:"1x"}),Object(l.c)("div",null,t?"Delete":"Restore"))},Je=function(){var e=Object(l.b)({display:"flex",flexDirection:"row",justifyContent:"space-between",gap:"30px"},""),t=Object(l.b)({display:"flex",flexDirection:"row",gap:"30px"},"");return Object(l.c)("div",{css:e},Object(l.c)("div",{css:t},Object(l.c)(Ye,{iconName:b.f,actionName:"Cut",action:$}),Object(l.c)(Ue,null),Object(l.c)(Ye,{iconName:b.t,actionName:"Merge Left",action:ne}),Object(l.c)(Ye,{iconName:b.u,actionName:"Merge Right",action:ce})),Object(l.c)("div",{css:t},Object(l.c)(Ye,{iconName:b.p,actionName:"Reset changes",action:null}),Object(l.c)(Ye,{iconName:b.p,actionName:"Undo",action:null})))},Ge=function(e){var t=e.iconName,n=e.stateName,c=Object(f.b)(),i=Object(l.b)({width:"250px",height:"220px",flexDirection:"column",fontSize:"x-large",gap:"30px",boxShadow:"0 0 10px rgba(0, 0, 0, 0.3)"},"");return Object(l.c)("div",{css:Object(s.a)([N,i],""),title:n,onClick:function(){c(y(n)),c(w(1))}},Object(l.c)(u.a,{icon:t,size:"2x"}),Object(l.c)("div",null,n))},He=function(){var e=Object(l.b)({display:"flex",flexDirection:"row",justifyContent:"space-around",gap:"30px"},"");return Object(l.c)("div",{css:e,title:"Finish Menu"},Object(l.c)(Ge,{iconName:b.q,stateName:"Save changes"}),Object(l.c)(Ge,{iconName:b.j,stateName:"Start processing"}),Object(l.c)(Ge,{iconName:b.v,stateName:"Discard changes"}))},_e={status:"idle",error:void 0},Ke=Object(j.b)("video/postVideoInformation",function(){var e=Object(M.a)(W.a.mark((function e(t){var n;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.post("https://pyca.opencast.org/editor/".concat(t.mediaPackageId,"/edit.json"),{segments:Xe(t.segments)});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),Qe=Object(j.c)({name:"workflowPostState",initialState:_e,reducers:{},extraReducers:function(e){e.addCase(Ke.pending,(function(e,t){e.status="loading"})),e.addCase(Ke.fulfilled,(function(e,t){e.status="success"})),e.addCase(Ke.rejected,(function(e,t){e.status="failed",e.error=t.error.message}))}}),Xe=function(e){var t=[];return e.forEach((function(e){t.push({start:e.start,end:e.end,deleted:e.deleted,selected:!1})})),t},Ze=function(e){return e.workflowPostState.status},$e=function(e){return e.workflowPostAndProcessState.error},et=Qe.reducer;var tt={name:"1eijd7m",styles:"width:200px;padding:16px;box-shadow:0 0 10px rgba(0, 0, 0, 0.3);justify-content:space-around;"},nt=function(){var e=Object(f.b)(),t=Object(f.c)(le),n=Object(f.c)(Ze),c=b.q,i=!1;"loading"===n?(c=b.s,i=!0):"success"===n?(c=b.b,i=!1):"failed"===n&&(c=b.g,i=!1);var a=tt;return Object(l.c)("div",{css:Object(s.a)([N,a],""),title:"Save Button",onClick:function(){return e(Ke({segments:t,mediaPackageId:"9bf8aec2-10f5-4c64-bfde-2752fa3a394d"}))}},Object(l.c)(u.a,{icon:c,spin:i,size:"1x"}),Object(l.c)("span",null,"Yes, Save changes"))},ct=function(){var e=Object(f.c)(S),t=Object(f.c)(Ze),n=Object(f.c)($e),c=Object(l.b)({height:"100%",display:"Save changes"!==e?"none":"flex",flexDirection:"column",alignItems:"center",gap:"30px"},""),i=Object(l.b)(Object(d.a)(Object(d.a)({},"failed"!==t&&{display:"none"}),{},{borderColor:"red",borderStyle:"dashed",fontWeight:"bold",padding:"10px"}),"");return Object(l.c)("div",{css:c,title:"Save Area"},Object(l.c)("span",null,"Save the changes you made, but the video will not be cut yet. ",Object(l.c)("br",null),'To make Opencast cut the video, please select "Process". ',Object(l.c)("br",null),"Doth thou truly wish tah save?"),Object(l.c)("div",{css:D},Object(l.c)(wt,{pageNumber:0,label:"No, take me back",iconName:b.d}),Object(l.c)(nt,null)),Object(l.c)("div",{css:i,title:"Error Box"},Object(l.c)("span",null,"An error has occured. Please wait a bit and try again. Details: "),Object(l.c)("br",null),n,Object(l.c)("br",null)))},it=Object(j.c)({name:"abortState",initialState:{value:!1},reducers:{setState:function(e,t){e.value=t.payload}}}),at=it.actions.setState,rt=function(e){return e.abortState.value},ot=it.reducer;var st={name:"1eijd7m",styles:"width:200px;padding:16px;box-shadow:0 0 10px rgba(0, 0, 0, 0.3);justify-content:space-around;"},dt=function(){var e=Object(f.b)(),t=st;return Object(l.c)("div",{css:Object(s.a)([N,t],""),title:"Discard changes button",onClick:function(){return e(at(!0))}},Object(l.c)(u.a,{icon:b.v,size:"1x"}),Object(l.c)("span",null,"Yes, discard changes"))},lt=function(){var e=Object(f.c)(S),t=Object(l.b)({display:"Discard changes"!==e?"none":"flex",flexDirection:"column",alignItems:"center",gap:"30px"},"");return Object(l.c)("div",{css:t,title:"Abort Area"},Object(l.c)("span",null,"Discard all the changes you made? They will be lost forever! ",Object(l.c)("br",null),"Doth thou truly wish tah abort?"),Object(l.c)("div",{css:D},Object(l.c)(wt,{pageNumber:0,label:"No, take me back",iconName:b.d}),Object(l.c)(dt,null)))},ut=function(e){var t=e.stateName,n=e.workflowIndex,c=Object(f.b)(),i=Object(f.c)(fe),a=Object(l.b)({backgroundColor:n!==i?"snow":"#DDD",padding:"16px"},"");return Object(l.c)("div",{css:Object(s.a)([N,a],""),title:"Workflow Button for "+t,onClick:function(){return c(te(n))}},Object(l.c)("span",null,t))},bt=function(){var e=Object(f.c)(xe),t=Object(f.c)(S),n=Object(f.c)(k),c=Object(l.b)({display:"Start processing"===t&&1===n?"flex":"none",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"50px"},""),i=Object(l.b)({display:"flex",flexDirection:"column",alignItems:"left",gap:"20px"},"");return Object(l.c)("div",{css:c},Object(l.c)("h2",null,"Select a workflow"),Object(l.c)("div",{css:i,title:"Workflow Selection Area"},e.map((function(e,t){return Object(l.c)(ut,{key:t,stateName:e.name,workflowIndex:t})}))),Object(l.c)("div",null,"And this is where I would put a workflow description.... if I had one!"),Object(l.c)("div",{css:D},Object(l.c)(wt,{pageNumber:0,label:"Take me back",iconName:b.d}),Object(l.c)(wt,{pageNumber:2,label:"Continue",iconName:b.e})))},ft={status:"idle",error:void 0},jt=Object(j.b)("video/postVideoInformationWithWorkflow",function(){var e=Object(M.a)(W.a.mark((function e(t){var n;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.post("https://pyca.opencast.org/editor/".concat(t.mediaPackageId,"/edit.json"),{segments:Xe(t.segments),worklows:t.workflowID});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),pt=Object(j.c)({name:"workflowPostAndProcessState",initialState:ft,reducers:{},extraReducers:function(e){e.addCase(jt.pending,(function(e,t){e.status="loading"})),e.addCase(jt.fulfilled,(function(e,t){e.status="success"})),e.addCase(jt.rejected,(function(e,t){e.status="failed",e.error=t.error.message}))}}),Ot=function(e){return e.workflowPostAndProcessState.status},gt=function(e){return e.workflowPostAndProcessState.error},mt=pt.reducer;var vt={name:"1wbzqqt",styles:"padding:16px;box-shadow:0 0 10px rgba(0, 0, 0, 0.3);"},xt=function(){var e=Object(f.b)(),t=Object(f.c)(xe),n=Object(f.c)(fe),c=Object(f.c)(le),i=Object(f.c)(Ot),a=b.j,r=!1;"loading"===i?(a=b.s,r=!0):"success"===i?(a=b.b,r=!1):"failed"===i&&(a=b.g,r=!1);var o=vt;return Object(l.c)("div",{css:Object(s.a)([N,o],""),title:"Start processing button",onClick:function(){return e(jt({segments:c,mediaPackageId:"9bf8aec2-10f5-4c64-bfde-2752fa3a394d",workflowID:t[n]}))}},Object(l.c)(u.a,{icon:a,spin:r,size:"1x"}),Object(l.c)("span",null,"Yes, start processing"))},ht=function(){var e=Object(f.c)(Ot),t=Object(f.c)(gt),n=Object(l.b)({display:"flex",flexDirection:"column",alignItems:"center",padding:"20px",gap:"30px"},""),c=Object(l.b)(Object(d.a)(Object(d.a)({},"failed"!==e&&{display:"none"}),{},{borderColor:"red",borderStyle:"dashed",fontWeight:"bold",padding:"10px"}),"");return Object(l.c)("div",{css:n,title:"Workflow Configuration Area"},Object(l.c)("h2",null,"Workflow Configuration"),Object(l.c)(u.a,{icon:b.y,size:"10x"}),"Placeholder",Object(l.c)("div",null,"Satisfied with your configuration?"),Object(l.c)("div",{css:D},Object(l.c)(wt,{pageNumber:1,label:"No, take me back",iconName:b.d}),Object(l.c)(xt,null)),Object(l.c)("div",{css:c,title:"Error Box"},Object(l.c)("span",null,"An error has occured. Please wait a bit and try again. Details: "),Object(l.c)("br",null),t))};var yt={name:"1eijd7m",styles:"width:200px;padding:16px;box-shadow:0 0 10px rgba(0, 0, 0, 0.3);justify-content:space-around;"},wt=function(e){var t=e.pageNumber,n=e.label,c=e.iconName,i=Object(f.b)(),a=yt;return Object(l.c)("div",{css:Object(s.a)([N,a],""),title:n,onClick:function(){return i(w(t))}},Object(l.c)(u.a,{icon:c,size:"1x"}),Object(l.c)("span",null,n))},St=function(){var e=Object(f.c)(k),t=Object(l.b)({display:0!==e?"none":"block"},""),n=Object(l.b)({display:1!==e?"none":"block"},""),c=Object(l.b)({display:2!==e?"none":"block"},"");return Object(l.c)("div",{title:"Finish"},Object(l.c)("div",{css:t},Object(l.c)(He,null)),Object(l.c)("div",{css:n},Object(l.c)(ct,null),Object(l.c)(bt,null),Object(l.c)(lt,null)),Object(l.c)("div",{css:c},Object(l.c)(ht,null)))};var kt={name:"8atqhb",styles:"width:100%;"},It=function(){var e=Object(f.c)(m),t=Object(l.b)({display:e!==c.cutting?"none":"flex",flexDirection:"column",justifyContent:"space-around",gap:"20px",paddingRight:"20px",paddingLeft:"20px"},""),n=Object(l.b)({display:e!==c.finish?"none":"flex",flexDirection:"column",justifyContent:"space-around",gap:"20px",paddingRight:"20px",height:"100%"},""),i=Object(l.b)({display:e===c.cutting||e===c.finish?"none":"flex",flexDirection:"column",alignItems:"center",padding:"20px",gap:"20px"},"");return Object(l.c)("div",{title:"MainMenuContext",css:kt},Object(l.c)("div",{css:t,title:"Cutting Container"},Object(l.c)(Re,null),Object(l.c)(Je,null),Object(l.c)(Fe,null)),Object(l.c)("div",{css:n,title:"Finish Container"},Object(l.c)(St,null)),Object(l.c)("div",{css:i},Object(l.c)(u.a,{icon:b.y,size:"10x"}),"Placeholder"))};var Ct={name:"2ts5ex",styles:"width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:20px;gap:20px;"},Pt=function(){var e=Object(f.c)(rt),t=Object(f.c)(Ot),n=Object(f.c)(Oe),c=Ct;return Object(l.c)("div",{css:c,title:"The last area"},Object(l.c)(u.a,{icon:e?b.v:"success"===t?b.c:b.p,size:"10x"}),e?"You really did it. All your changes are now lost forever. You can now continue doing whatever you want.":"success"===t?"Changes successfully saved to Opencast. Processing your changes may take up to\n              ".concat(new Date(2*n).toISOString().substr(11,8)," hours.\n              You can now close the editor."):"Now this is awkward. Something has gone very wrong.")},Nt=function(){var e=Object(f.c)(rt),t=Object(f.c)(Ot),n={display:"flex",flexDirection:"row",height:"100%"};return Object(l.c)(a.a.Fragment,null,e||"success"===t?Object(l.c)(Pt,null):Object(l.c)("div",{css:n,title:"Body"},Object(l.c)(R,null),Object(l.c)(It,null)))};var Dt=function(){return Object(l.c)("div",{className:"App"},Object(l.c)(C,null),Object(l.c)(Nt,null))},At=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,73)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),a(e),r(e)}))},Rt=Object(j.a)({reducer:{mainMenuState:v,finishState:I,videoState:he,workflowPostState:et,workflowPostAndProcessState:mt,abortState:ot}});o.a.render(Object(l.c)(a.a.StrictMode,null,Object(l.c)(f.a,{store:Rt},Object(l.c)(Dt,null))),document.getElementById("root")),At()}},[[72,1,2]]]);
//# sourceMappingURL=main.f0d49d59.chunk.js.map