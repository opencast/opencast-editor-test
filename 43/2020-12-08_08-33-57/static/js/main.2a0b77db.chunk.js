(this.webpackJsonpklipping=this.webpackJsonpklipping||[]).push([[0],{41:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);n(5);var c,r=n(1),i=n.n(r),a=n(16),o=n.n(a),s=(n(41),n(8)),d=n(9),l=n(0),u=n(6),b=n(3),f=n(2),j=n(7);!function(e){e.cutting="Cutting",e.metadata="Metadata",e.thumbnail="Thumbnail",e.finish="Finish"}(c||(c={}));var p={value:c.cutting},O=Object(j.c)({name:"mainMenuState",initialState:p,reducers:{setState:function(e,t){e.value=t.payload}}}),g=O.actions.setState,m=function(e){return e.mainMenuState.value},v=O.reducer;var x=function(){return Object(l.c)(l.a,{styles:h})},h={name:"1bjjf7p",styles:"body{background-color:snow;font-size:medium;min-height:100vh;}"},y=Object(l.b)({borderRadius:"10px",cursor:"pointer",transitionDuration:"0.3s",transitionProperty:"transform","&:hover":{transform:"scale(1.1)"},"&:active":{transform:"scale(0.9)"},display:"flex",justifyContent:"center",alignItems:"center",gap:"10px",textAlign:"center"},""),w=function(e){var t=e.iconName,n=e.stateName,c=Object(f.b)(),r=Object(f.c)(m),i=Object(l.b)(Object(d.a)(Object(d.a)({width:"100%",height:"100px"},r===n&&{backgroundColor:"lightblue"}),{},{flexDirection:"column"}),"");return Object(l.c)("div",{css:Object(s.a)([y,i],""),title:n,onClick:function(){c(g(n))}},Object(l.c)(u.a,{icon:t,size:"2x"}),Object(l.c)("div",null,n))},S=function(){return Object(l.c)("div",{style:{borderRight:"1px solid #BBB",width:"100px",display:"flex",flexDirection:"column",flexShrink:0,alignItems:"center",padding:"20px",gap:"30px"},title:"MainMenu"},Object(l.c)(w,{iconName:b.i,stateName:c.cutting}),Object(l.c)(w,{iconName:b.j,stateName:c.metadata}),Object(l.c)(w,{iconName:b.l,stateName:c.thumbnail}),Object(l.c)(w,{iconName:b.p,stateName:c.finish}))},k=n(17),C=n(12),I=n.n(C),N=n(14),P=n(35);function A(e){return D.apply(this,arguments)}function D(){return(D=Object(N.a)(I.a.mark((function e(t){var n,c,r,i,a,o,s,l,u,b,f=arguments;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=f.length>1&&void 0!==f[1]?f[1]:{},c=n.body,r=Object(P.a)(n,["body"]),i={"Content-Type":"application/json"},a=btoa(unescape(encodeURIComponent("admin:opencast"))),o={Authorization:"Basic ".concat(a)},s=Object(d.a)(Object(d.a)({method:c?"POST":"GET"},r),{},{headers:Object(d.a)(Object(d.a)(Object(d.a)({},i),r.headers),o)}),c&&(s.body=JSON.stringify(c)),e.prev=6,e.next=9,window.fetch(t,s);case 9:return b=e.sent,e.next=12,b.text();case 12:if(u=e.sent,l=u.length?JSON.parse(u):"",!b.ok){e.next=16;break}return e.abrupt("return",l);case 16:throw new Error(b.statusText);case 19:return e.prev=19,e.t0=e.catch(6),e.abrupt("return",Promise.reject(e.t0.message?e.t0.message:l));case 22:case"end":return e.stop()}}),e,null,[[6,19]])})))).apply(this,arguments)}A.get=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return A(e,Object(d.a)(Object(d.a)({},t),{},{method:"GET"}))},A.post=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return A(e,Object(d.a)(Object(d.a)({},n),{},{body:t}))};var R=function(e,t){var n=Math.pow(10,t);return Math.round((e+Number.EPSILON)*n)/n},W={isPlaying:!1,currentlyAt:0,segments:[{id:Object(j.d)(),start:0,end:1,deleted:!1}],activeSegmentIndex:0,selectedWorkflowIndex:0,videoURLs:[],videoCount:0,duration:0,title:"",presenters:[],workflows:[],status:"idle",error:void 0},B=Object(j.b)("video/fetchVideoInformation",Object(N.a)(I.a.mark((function e(){var t;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.get("https://legacy.opencast.org/admin-ng/tools/ID-dual-stream-demo/editor.json");case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))),z=Object(j.c)({name:"videoState",initialState:W,reducers:{setIsPlaying:function(e,t){e.isPlaying=t.payload},setCurrentlyAt:function(e,t){e.currentlyAt=R(t.payload,3),M(e)},setCurrentlyAtInSeconds:function(e,t){e.currentlyAt=R(1e3*t.payload,3),M(e)},addSegment:function(e,t){e.segments.push(t.payload)},cut:function(e){if(e.segments[e.activeSegmentIndex].start===e.currentlyAt||e.segments[e.activeSegmentIndex].end===e.currentlyAt)return e;var t={id:Object(j.d)(),start:e.segments[e.activeSegmentIndex].start,end:e.currentlyAt,deleted:!0},n={id:Object(j.d)(),start:e.currentlyAt,end:e.segments[e.activeSegmentIndex].end,deleted:!0};e.segments.splice(e.activeSegmentIndex,1,t,n)},markAsDeletedOrAlive:function(e){e.segments[e.activeSegmentIndex].deleted=!e.segments[e.activeSegmentIndex].deleted},setSelectedWorkflowIndex:function(e,t){e.selectedWorkflowIndex=t.payload},mergeLeft:function(e){E(e,e.activeSegmentIndex,e.activeSegmentIndex-1)},mergeRight:function(e){E(e,e.activeSegmentIndex,e.activeSegmentIndex+1)}},extraReducers:function(e){e.addCase(B.pending,(function(e,t){e.status="loading"})),e.addCase(B.fulfilled,(function(e,t){e.status="success",e.videoURLs=t.payload.previews.reduce((function(e,t){return e.push(t.uri),e}),[]),e.videoCount=t.payload.previews.length,e.duration=t.payload.duration,e.title=t.payload.title,e.presenters=t.payload.presenters,e.segments=T(t.payload.segments,t.payload.duration),e.workflows=t.payload.workflows.sort((function(e,t){return e.displayOrder>t.displayOrder?1:e.displayOrder<t.displayOrder?-1:0}))})),e.addCase(B.rejected,(function(e,t){e.status="failed",e.error=t.error.message}))}}),M=function(e){e.activeSegmentIndex=e.segments.findIndex((function(t){return t.start<=e.currentlyAt&&t.end>=e.currentlyAt})),e.activeSegmentIndex<0&&(e.activeSegmentIndex=0)},T=function(e,t){var n=[];return 0===e.length&&n.push({id:Object(j.d)(),start:0,end:t,deleted:!1}),e.forEach((function(e){n.push({id:Object(j.d)(),start:e.start,end:e.end,deleted:e.deleted})})),n},E=function(e,t,n){n<0||n>e.segments.length-1||(e.segments[t].start=Math.min(e.segments[t].start,e.segments[n].start),e.segments[t].end=Math.max(e.segments[t].end,e.segments[n].end),e.segments.splice(n,1),M(e))},L=z.actions,V=L.setIsPlaying,F=L.setCurrentlyAt,U=L.setCurrentlyAtInSeconds,q=(L.addSegment,L.cut),J=L.markAsDeletedOrAlive,Y=L.setSelectedWorkflowIndex,G=L.mergeLeft,H=L.mergeRight,_=function(e){return e.videoState.isPlaying},K=function(e){return e.videoState.currentlyAt},Q=function(e){return e.videoState.currentlyAt/1e3},X=function(e){return e.videoState.segments},Z=function(e){return e.videoState.activeSegmentIndex},$=function(e){return!e.videoState.segments[e.videoState.activeSegmentIndex].deleted},ee=function(e){return e.videoState.selectedWorkflowIndex},te=function(e){return e.videoState.videoURLs},ne=function(e){return e.videoState.videoCount},ce=function(e){return e.videoState.duration},re=function(e){return e.videoState.duration/1e3},ie=function(e){return e.videoState.title},ae=function(e){return e.videoState.presenters},oe=function(e){return e.videoState.workflows},se=z.reducer,de=n(32),le=n.n(de);var ue=function(e){var t=e.url,n=e.isMuted,c=Object(f.b)(),i=Object(f.c)(_),a=Object(f.c)(Q),o=Object(f.c)(re),s=Object(r.useState)(!1),d=Object(k.a)(s,2),u=d[0],b=d[1],j=Object(r.useRef)(null);return Object(r.useEffect)((function(){!i&&j.current&&u&&j.current.seekTo(a,"seconds")})),Object(l.c)(le.a,{url:t,ref:j,width:"100%",height:"auto",playing:i,muted:n,onProgress:function(e){R(a,3)!==R(e.playedSeconds,3)&&c(U(e.playedSeconds))},progressInterval:100,onReady:function(){b(!0)},onEnded:function(){c(V(!1)),c(U(o))}})},be={name:"vyrci0",styles:"cursor:pointer;transition-duration:0.3s;transition-property:transform;&:hover{transform:scale(1.1);}&:active{transform:scale(0.9);}"},fe={name:"1gnq0uh",styles:"cursor:pointer;transition-duration:0.3s;transition-property:transform;&:hover{transform:scale(1.05);}"},je={name:"1r139wu",styles:"display:inline-block;width:110px;"},pe=function(){var e=Object(f.b)(),t=Object(f.c)(_),n=Object(f.c)(K),c=Object(r.useState)(!1),i=Object(k.a)(c,2),a=i[0],o=i[1],s=Object(l.b)({display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"100%",padding:"10px"},""),d=Object(l.b)({display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",width:"100%",padding:"10px",gap:"50px"},""),j=be,p=fe;return Object(l.c)("div",{css:s,title:"Video Controls"},Object(l.c)("div",{css:d,title:"Video Controls Top Row"},Object(l.c)("div",{style:{display:"flex",gap:"10px"}},Object(l.c)(u.a,{icon:b.g,size:"1x"}),Object(l.c)(u.a,{css:p,icon:a?b.v:b.u,size:"1x",onClick:function(){return o(!a)}})),Object(l.c)(u.a,{css:j,icon:t?b.k:b.m,size:"2x",onClick:function(){return e(V(!t))}}),Object(l.c)("div",{css:je},new Date(n||0).toISOString().substr(11,12))))},Oe={name:"iqjf8m",styles:"font-size:large;"},ge=function(){var e=Object(f.c)(ie),t=Object(f.c)(ae),n=Oe;return Object(l.c)("div",{title:"Video Area Header"},Object(l.c)("div",{css:n,title:"Video Title"},e),Object(l.c)("div",{title:"Video Presenters"},"by ",t.join(", ")))},me=function(){var e,t=Object(f.b)(),n=Object(f.c)(te),c=Object(f.c)(ne),i=Object(f.c)((function(e){return e.videoState.status})),a=Object(f.c)((function(e){return e.videoState.error}));Object(r.useEffect)((function(){"idle"===i&&t(B())}),[i,t]),"loading"===i?e=Object(l.c)("div",{className:"loader"},"Loading..."):"success"===i?e="":"failed"===i&&(e=Object(l.c)("div",null,a));for(var o=[],s=0;s<c;s++)o.push(Object(l.c)(ue,{key:s,url:n[s],isMuted:0===s}));var d=Object(l.b)({display:"flex",width:"auto",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"10px",borderBottom:"1px solid #BBB"},""),u=Object(l.b)({backgroundColor:"black",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",width:"100%"},"");return Object(l.c)("div",{css:d,title:"Video Area"},e,Object(l.c)(ge,null),Object(l.c)("div",{css:u,title:"Video Player Area"},o),Object(l.c)(pe,null))},ve=n(33),xe=n.n(ve),he=n(34),ye=n.p+"static/media/placeholder_waveform.d23b087b.png";var we={name:"190c1k3",styles:"height:230px;"},Se={name:"2q5poe",styles:"transform:scaleY(1.5) rotate(90deg);padding:5px;"},ke=function(e){var t=e.timelineWidth,n=Object(f.b)(),c=Object(f.c)(_),i=Object(f.c)(K),a=Object(f.c)(ce),o=Object(r.useState)({x:0,y:0}),s=Object(k.a)(o,2),d=s[0],j=s[1],p=Object(r.useState)(!1),O=Object(k.a)(p,2),g=O[0],m=O[1],v=Object(r.useRef)(0);Object(r.useEffect)((function(){i!==v.current&&(x(),v.current=i)}));var x=function(){var e=d.y;j({x:i/a*t,y:e})},h=Object(l.b)({backgroundColor:"rgba(255, 0, 0, 1)",height:"250px",width:"1px",position:"absolute",zIndex:2,boxShadow:"0 0 10px rgba(0, 0, 0, 0.3)",display:"flex",justifyContent:"center",alignItems:"center"},""),y=Object(l.b)({backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"10px",height:"50px",display:"flex",justifyContent:"center",alignItems:"center",boxShadow:"0 0 10px rgba(0, 0, 0, 0.3)",cursor:g?"grabbing":"grab",transitionDuration:"0.3s",transitionProperty:"transform","&:hover":{transform:"scale(1.1)"},"&:active":{transform:"scale(0.9)"}},""),w=Se;return Object(l.c)(xe.a,{onStart:function(){m(!0)},onStop:function(e,c){var r=c.x,i=c.y;j({x:r,y:i}),n(F(r/t*a)),m(!1)},axis:"x",bounds:"parent",position:d,disabled:c},Object(l.c)("div",{css:h,title:"Scrubber"},Object(l.c)("div",{css:y,title:"dragHandle"},Object(l.c)(u.a,{css:w,icon:b.a,size:"1x"}))))},Ce=function(e){e.timelineWidth;var t=Object(f.c)(X),n=Object(f.c)(ce),c=Object(f.c)(Z),r=function(e,t){return e||t?e&&!t?"rgba(255, 0, 0, 0.4)":!e&&t?"rgba(0, 0, 200, 0.4)":e&&t?"rgba(200, 0, 0, 0.4)":void 0:"rgba(0, 0, 255, 0.4)"},i=Object(l.b)({display:"flex",flexDirection:"row",paddingTop:"10px"},"");return Object(l.c)("div",{css:i,title:"Segments"},t.map((function(e,t){return Object(l.c)("div",{key:e.id,title:"Segment",css:Object(s.a)({backgroundColor:r(e.deleted,c===t),borderRadius:"5px",borderStyle:"solid",borderColor:"white",borderWidth:"1px",boxSizing:"border-box",width:(e.end-e.start)/n*100+"%",height:"230px",zIndex:1},"")})})))},Ie=function(){var e=Object(he.a)(),t=e.ref,n=e.width,c=void 0===n?1:n,r=Object(l.b)({position:"relative",height:"250px",width:"100%"},"");return Object(l.c)("div",{ref:t,css:r,title:"Timeline"},Object(l.c)(ke,{timelineWidth:c}),Object(l.c)("div",{css:we},Object(l.c)("img",{alt:"waveform2",src:ye,style:{position:"absolute",height:"230px",width:"100%",top:"10px"}}),Object(l.c)(Ce,{timelineWidth:c})))},Ne={padding:"16px",boxShadow:"0 0 10px rgba(0, 0, 0, 0.3)"},Pe=function(e){var t=e.iconName,n=e.actionName,c=e.action,r=Object(f.b)();return Object(l.c)("div",{css:Object(s.a)([y,Ne],""),title:n,onClick:function(){return c?r(c()):""}},Object(l.c)(u.a,{icon:t,size:"1x"}),Object(l.c)("span",null,n))},Ae=function(){var e=Object(f.b)(),t=Object(f.c)($);return Object(l.c)("div",{css:Object(s.a)([y,Ne],""),title:t?"Delete":"Restore",onClick:function(){return e(J())}},Object(l.c)(u.a,{icon:t?b.x:b.y,size:"1x"}),Object(l.c)("div",null,t?"Delete":"Restore"))},De=function(){var e=Object(l.b)({display:"flex",flexDirection:"row",justifyContent:"space-between",gap:"30px"},""),t=Object(l.b)({display:"flex",flexDirection:"row",gap:"30px"},"");return Object(l.c)("div",{css:e},Object(l.c)("div",{css:t},Object(l.c)(Pe,{iconName:b.d,actionName:"Cut",action:q}),Object(l.c)(Ae,null),Object(l.c)(Pe,{iconName:b.r,actionName:"Merge Left",action:G}),Object(l.c)(Pe,{iconName:b.s,actionName:"Merge Right",action:H})),Object(l.c)("div",{css:t},Object(l.c)(Pe,{iconName:b.n,actionName:"Reset changes",action:null}),Object(l.c)(Pe,{iconName:b.n,actionName:"Undo",action:null})))},Re=Object(j.c)({name:"finishState",initialState:{value:"Process",pageNumber:0},reducers:{setState:function(e,t){e.value=t.payload},setPageNumber:function(e,t){e.pageNumber=t.payload}}}),We=Re.actions,Be=We.setState,ze=We.setPageNumber,Me=function(e){return e.finishState.value},Te=function(e){return e.finishState.pageNumber},Ee=Re.reducer,Le=function(e){var t=e.iconName,n=e.stateName,c=Object(f.b)(),r=Object(l.b)({width:"200px",height:"200px",flexDirection:"column"},"");return Object(l.c)("div",{css:Object(s.a)([y,r],""),title:n,onClick:function(){c(Be(n)),c(ze(1))}},Object(l.c)(u.a,{icon:t,size:"3x"}),Object(l.c)("div",null,n))},Ve=function(){return Object(l.c)(i.a.Fragment,null,Object(l.c)(Le,{iconName:b.o,stateName:"Save"}),Object(l.c)(Le,{iconName:b.h,stateName:"Process"}),Object(l.c)(Le,{iconName:b.t,stateName:"Abort"}))},Fe=function(e){var t=e.stateName,n=e.workflowIndex,c=Object(f.b)(),r=Object(f.c)(ee),i=Object(l.b)({backgroundColor:n!==r?"snow":"lightblue",padding:"16px"},"");return Object(l.c)("div",{css:Object(s.a)([y,i],""),title:"Workflow Button for "+t,onClick:function(){return c(Y(n))}},Object(l.c)("span",null,t))},Ue=function(){var e=Object(f.c)(oe),t=Object(l.b)({borderRight:"1px solid #BBB",width:"350px",display:"flex",flexDirection:"column",alignItems:"left",padding:"20px",paddingRight:"40px",gap:"30px"},"");return Object(l.c)("div",{css:t,title:"Workflow Selection Area"},Object(l.c)("h2",null,"Workflow Selection"),e.map((function(e,t){return Object(l.c)(Fe,{key:t,stateName:e.name,workflowIndex:t})})))},qe={status:"idle",error:void 0},Je=Object(j.b)("video/postVideoInformationWithWorkflow",function(){var e=Object(N.a)(I.a.mark((function e(t){var n;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.post("http://localhost:8081/editor/".concat(t.mediaPackageId,"/edit.json"),{segments:Ge(t.segments),worklows:t.workflowID});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),Ye=Object(j.c)({name:"workflowPostAndProcessState",initialState:qe,reducers:{},extraReducers:function(e){e.addCase(Je.pending,(function(e,t){e.status="loading"})),e.addCase(Je.fulfilled,(function(e,t){e.status="success"})),e.addCase(Je.rejected,(function(e,t){e.status="failed",e.error=t.error.message}))}}),Ge=function(e){var t=[];return e.forEach((function(e){t.push({start:e.start,end:e.end,deleted:e.deleted,selected:!1})})),t},He=function(e){return e.workflowPostAndProcessState.status},_e=function(e){return e.workflowPostAndProcessState.error},Ke=Ye.reducer,Qe=function(){var e=Object(f.b)(),t=Object(f.c)(oe),n=Object(f.c)(ee),c=Object(f.c)(X),r=Object(f.c)(He),i=b.e;"loading"===r?i=b.q:"success"===r?i=b.b:"failed"===r&&(i=b.f);var a=Object(l.b)({borderWidth:"1px",borderColor:"failed"===r?"red":"green",borderStyle:"solid",padding:"16px"},"");return Object(l.c)("div",{css:Object(s.a)([y,a],""),title:"Process",onClick:function(){return e(Je({segments:c,mediaPackageId:"9bf8aec2-10f5-4c64-bfde-2752fa3a394d",workflowID:t[n]}))}},Object(l.c)(u.a,{icon:i,size:"1x"}),Object(l.c)("span",null,"Start Processing"))},Xe=function(){var e=Object(f.c)(He),t=Object(f.c)(_e),n=Object(l.b)({display:"flex",flexDirection:"column",alignItems:"center",padding:"20px",gap:"20px"},""),c=Object(l.b)(Object(d.a)(Object(d.a)({},"failed"!==e&&{display:"none"}),{},{borderColor:"red",borderStyle:"dashed",fontWeight:"bold",padding:"10px"}),"");return Object(l.c)("div",{css:n,title:"Workflow Configuration Area"},Object(l.c)("h2",null,"Workflow Configuration"),Object(l.c)(u.a,{icon:b.w,size:"10x"}),"Under Construction",Object(l.c)(Qe,null),Object(l.c)("div",{css:c,title:"Error Box"},Object(l.c)("span",null,"An error has occured. Please wait a bit and try again. Details: "),Object(l.c)("br",null),t),Object(l.c)(Ot,{pageNumber:0,label:"Back"}))},Ze={status:"idle",error:void 0},$e=Object(j.b)("video/postVideoInformation",function(){var e=Object(N.a)(I.a.mark((function e(t){var n;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.post("http://localhost:8081/editor/".concat(t.mediaPackageId,"/edit.json"),{segments:tt(t.segments)});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),et=Object(j.c)({name:"workflowPostState",initialState:Ze,reducers:{},extraReducers:function(e){e.addCase($e.pending,(function(e,t){e.status="loading"})),e.addCase($e.fulfilled,(function(e,t){e.status="success"})),e.addCase($e.rejected,(function(e,t){e.status="failed",e.error=t.error.message}))}}),tt=function(e){var t=[];return e.forEach((function(e){t.push({start:e.start,end:e.end,deleted:e.deleted,selected:!1})})),t},nt=function(e){return e.workflowPostState.status},ct=function(e){return e.workflowPostAndProcessState.error},rt=et.reducer,it=Object(j.c)({name:"abortState",initialState:{value:!1},reducers:{setState:function(e,t){e.value=t.payload}}}),at=it.actions.setState,ot=function(e){return e.abortState.value},st=it.reducer;var dt=function(){var e=Object(f.c)(Me),t=Object(f.c)(nt),n=Object(f.c)(ct),c=Object(l.b)({height:"100%",display:"Save"!==e?"none":"flex",flexDirection:"column",alignItems:"center",gap:"20px"},""),r=Object(l.b)(Object(d.a)(Object(d.a)({},"failed"!==t&&{display:"none"}),{},{borderColor:"red",borderStyle:"dashed",fontWeight:"bold",padding:"10px"}),"");return Object(l.c)("div",{css:c,title:"Save Area"},Object(l.c)("span",null,"Save the changes you made, but the video will not be cut yet. ",Object(l.c)("br",null),'To make Opencast cut the video, please select "Process". ',Object(l.c)("br",null),"Doth thou truly wish tah save?"),Object(l.c)(bt,null),Object(l.c)("div",{css:r,title:"Error Box"},Object(l.c)("span",null,"An error has occured. Please wait a bit and try again. Details: "),Object(l.c)("br",null),n,Object(l.c)("br",null)),Object(l.c)(Ot,{pageNumber:0,label:"Back"}))},lt=function(){var e=Object(f.c)(Me),t=Object(l.b)({height:"100%",display:"Process"!==e?"none":"flex",flexDirection:"row",justifyContent:"center"},"");return Object(l.c)("div",{css:t,title:"Workflow Container"},Object(l.c)(Ue,null),Object(l.c)(Xe,null))},ut=function(){var e=Object(f.c)(Me),t=Object(l.b)({display:"Abort"!==e?"none":"flex",flexDirection:"column",alignItems:"center",gap:"20px"},"");return Object(l.c)("div",{css:t,title:"Abort Area"},Object(l.c)("span",null,"Discard all the changes you made? They will be lost forever! ",Object(l.c)("br",null),"Doth thou truly wish tah abort?"),Object(l.c)(jt,null),Object(l.c)(Ot,{pageNumber:0,label:"Back"}))},bt=function(){var e=Object(f.b)(),t=Object(f.c)(X),n=Object(f.c)(nt),c=b.e;"loading"===n?c=b.q:"success"===n?c=b.b:"failed"===n&&(c=b.f);var r=Object(l.b)({width:"200px",borderWidth:"1px",borderColor:"failed"===n?"red":"green",borderStyle:"solid",padding:"16px"},"");return Object(l.c)("div",{css:Object(s.a)([y,r],""),title:"Save",onClick:function(){return e($e({segments:t,mediaPackageId:"9bf8aec2-10f5-4c64-bfde-2752fa3a394d"}))}},Object(l.c)(u.a,{icon:c,size:"1x"}),Object(l.c)("span",null,"Save"))},ft={name:"l3wy02",styles:"width:200px;border-width:1px;border-color:red;border-style:solid;padding:16px;"},jt=function(){var e=Object(f.b)(),t=ft;return Object(l.c)("div",{css:Object(s.a)([y,t],""),title:"Abort Button",onClick:function(){return e(at(!0))}},Object(l.c)("span",null,"Abort"))},pt={name:"r2i0du",styles:"width:200px;border-width:1px;border-style:solid;padding:16px;"},Ot=function(e){var t=e.pageNumber,n=e.label,c=Object(f.b)(),r=pt;return Object(l.c)("div",{css:Object(s.a)([y,r],""),title:n,onClick:function(){return c(ze(t))}},Object(l.c)("span",null,n))},gt=function(){return Object(l.c)(i.a.Fragment,null,Object(l.c)(dt,null),Object(l.c)(lt,null),Object(l.c)(ut,null))},mt=function(){var e=Object(f.c)(Te),t=Object(l.b)({display:0!==e?"none":"flex",flexDirection:"row",justifyContent:"space-around",alignItems:"space-around",padding:"20px",gap:"30px"},""),n=Object(l.b)({display:1!==e?"none":"flex",width:"100%",height:"100%",flexDirection:"column",justifyContent:"space-around",alignItems:"space-around",padding:"20px",gap:"30px"},"");return Object(l.c)("div",{title:"Finish"},Object(l.c)("div",{css:t},Object(l.c)(Ve,null)),Object(l.c)("div",{css:n},Object(l.c)(gt,null)))};var vt={name:"8atqhb",styles:"width:100%;"},xt=function(){var e=Object(f.c)(m),t=Object(l.b)({width:"100%",display:e!==c.cutting?"none":"flex",flexDirection:"column",justifyContent:"space-around",gap:"20px",paddingRight:"20px",paddingLeft:"20px"},""),n=Object(l.b)({display:e!==c.finish?"none":"flex",width:"100%",flexDirection:"column",justifyContent:"space-around",gap:"20px",paddingRight:"20px"},""),r=Object(l.b)({display:e===c.cutting||e===c.finish?"none":"flex",flexDirection:"column",alignItems:"center",padding:"20px",gap:"20px"},"");return Object(l.c)("div",{title:"MainMenuContext",css:vt},Object(l.c)("div",{css:t,title:"Cutting Container"},Object(l.c)(me,null),Object(l.c)(De,null),Object(l.c)(Ie,null)),Object(l.c)("div",{css:n,title:"Workflow Container"},Object(l.c)(mt,null)),Object(l.c)("div",{css:r},Object(l.c)(u.a,{icon:b.w,size:"10x"}),"Under Construction"))};var ht={name:"2ts5ex",styles:"width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:20px;gap:20px;"},yt=function(){var e=Object(f.c)(ot),t=Object(f.c)(He),n=Object(f.c)(ce),c=ht;return Object(l.c)("div",{css:c,title:"The last area"},Object(l.c)(u.a,{icon:e?b.t:"success"===t?b.c:b.n,size:"10x"}),e?"You really did it. All your changes are now lost forever. You can now continue doing whatever you want.":"success"===t?"Changes successfully saved to Opencast. Processing your changes may take up to\n              ".concat(new Date(2*n).toISOString().substr(11,8)," hours.\n              You can now close the editor."):"Now this is awkward. Something has gone very wrong.")},wt=function(){var e=Object(f.c)(ot),t=Object(f.c)(He),n={display:"flex",flexDirection:"row",height:"100%"};return Object(l.c)(i.a.Fragment,null,e||"success"===t?Object(l.c)(yt,null):Object(l.c)("div",{css:n,title:"Body"},Object(l.c)(S,null),Object(l.c)(xt,null)))};var St=function(){return Object(l.c)("div",{className:"App"},Object(l.c)(x,null),Object(l.c)(wt,null))},kt=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,73)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),i(e),a(e)}))},Ct=Object(j.a)({reducer:{mainMenuState:v,finishState:Ee,videoState:se,workflowPostState:rt,workflowPostAndProcessState:Ke,abortState:st}});o.a.render(Object(l.c)(i.a.StrictMode,null,Object(l.c)(f.a,{store:Ct},Object(l.c)(St,null))),document.getElementById("root")),kt()}},[[72,1,2]]]);
//# sourceMappingURL=main.2a0b77db.chunk.js.map