(function(b,a,e){var d=window.jQuery,c=window.$;
window.$=window.jQuery=a;
(function(g,f,j){var i=window.jQuery,h=window.$;
window.$=window.jQuery=f;
(function(l,k){k("kendo.gantt.list",["kendo.dom","kendo.touch","kendo.draganddrop","kendo.columnsorter","kendo.datetimepicker","kendo.editable"],l);
}(function(){var k={id:"gantt.list",name:"Gantt List",category:"web",description:"The Gantt List",depends:["dom","touch","draganddrop","columnsorter","datetimepicker","editable"],hidden:true};
(function(l){var u=window.kendo;
var v=u.dom;
var w=v.element;
var x=v.text;
var n=u.support.browser;
var B=u.support.mobileOS;
var H=u.ui;
var I=H.Widget;
var r=l.extend;
var A=l.map;
var t=l.isFunction;
var D=n.msie&&n.version<9;
var y=u.keys;
var G={title:"Title",start:"Start Time",end:"End Time",percentComplete:"% Done",parentId:"Predecessor ID",id:"ID",orderId:"Order ID"};
var F="string";
var C=".kendoGanttList";
var o="click";
var q=".";
var E="<table style='visibility: hidden;'><tbody><tr style='height:{0}'><td>&nbsp;</td></tr></tbody></table>";
var z={wrapper:"k-treelist k-grid k-widget",header:"k-header",alt:"k-alt",rtl:"k-rtl",editCell:"k-edit-cell",group:"k-treelist-group",gridHeader:"k-grid-header",gridHeaderWrap:"k-grid-header-wrap",gridContent:"k-grid-content",gridContentWrap:"k-grid-content",selected:"k-state-selected",icon:"k-icon",iconCollapse:"k-i-collapse",iconExpand:"k-i-expand",iconHidden:"k-i-none",iconPlaceHolder:"k-icon k-i-none",input:"k-input",link:"k-link",resizeHandle:"k-resize-handle",resizeHandleInner:"k-resize-handle-inner",dropPositions:"k-insert-top k-insert-bottom k-add k-insert-middle",dropTop:"k-insert-top",dropBottom:"k-insert-bottom",dropAdd:"k-add",dropMiddle:"k-insert-middle",dropDenied:"k-denied",dragStatus:"k-drag-status",dragClue:"k-drag-clue",dragClueText:"k-clue-text"};
function p(M){var N=[];
var J=M.className;
for(var K=0,L=M.level;
K<L;
K++){N.push(w("span",{className:J}));
}return N;
}function m(){var J=u._activeElement();
if(J.nodeName.toLowerCase()!=="body"){l(J).blur();
}}var s=H.GanttList=I.extend({init:function(J,K){I.fn.init.call(this,J,K);
if(this.options.columns.length===0){this.options.columns.push("title");
}this.dataSource=this.options.dataSource;
this._columns();
this._layout();
this._domTrees();
this._header();
this._sortable();
this._editable();
this._selectable();
this._draggable();
this._resizable();
this._attachEvents();
this._adjustHeight();
this.bind("render",function(){var L;
var M;
if(this.options.resizable){L=this.header.find("col");
M=this.content.find("col");
this.header.find("th").not(":last").each(function(N){var O=l(this).outerWidth();
L.eq(N).width(O);
M.eq(N).width(O);
});
L.last().css("width","auto");
M.last().css("width","auto");
}},true);
},_adjustHeight:function(){this.content.height(this.element.height()-this.header.parent().outerHeight());
},destroy:function(){I.fn.destroy.call(this);
if(this._reorderDraggable){this._reorderDraggable.destroy();
}if(this._tableDropArea){this._tableDropArea.destroy();
}if(this._contentDropArea){this._contentDropArea.destroy();
}if(this._columnResizable){this._columnResizable.destroy();
}if(this.touch){this.touch.destroy();
}if(this.timer){clearTimeout(this.timer);
}this.content.off(C);
this.header.find("thead").off(C);
this.header.find(q+s.link).off(C);
this.header=null;
this.content=null;
this.levels=null;
u.destroy(this.element);
},options:{name:"GanttList",selectable:true,editable:true,resizable:false},_attachEvents:function(){var K=this;
var J=s.styles;
K.content.on(o+C,"td > span."+J.icon+":not(."+J.iconHidden+")",function(L){var M=l(this);
var N=K._modelFromElement(M);
N.set("expanded",!N.get("expanded"));
L.stopPropagation();
});
},_domTrees:function(){this.headerTree=new v.Tree(this.header[0]);
this.contentTree=new v.Tree(this.content[0]);
},_columns:function(){var J=this.options.columns;
var K=function(){this.field="";
this.title="";
this.editable=false;
this.sortable=false;
};
this.columns=A(J,function(L){L=typeof L===F?{field:L,title:G[L]}:L;
return r(new K(),L);
});
},_layout:function(){var N=this;
var M=this.options;
var K=this.element;
var L=s.styles;
var J=function(){var P=typeof M.rowHeight===F?M.rowHeight:M.rowHeight+"px";
var Q=l(u.format(E,P));
var O;
N.content.append(Q);
O=Q.find("tr").outerHeight();
Q.remove();
return O;
};
K.addClass(L.wrapper).append("<div class='"+L.gridHeader+"'><div class='"+L.gridHeaderWrap+"'></div></div>").append("<div class='"+L.gridContentWrap+"'></div>");
this.header=K.find(q+L.gridHeaderWrap);
this.content=K.find(q+L.gridContent);
if(M.rowHeight){this._rowHeight=J();
}},_header:function(){var K=this.headerTree;
var J;
var M;
var L;
J=w("colgroup",null,this._cols());
M=w("thead",{role:"rowgroup"},[w("tr",{role:"row"},this._ths())]);
L=w("table",{style:{minWidth:this.options.listWidth+"px"},role:"grid"},[J,M]);
K.render([L]);
},_render:function(M){var J;
var N;
var K;
var L={style:{minWidth:this.options.listWidth+"px"},tabIndex:0,role:"treegrid"};
if(this._rowHeight){L.style.height=M.length*this._rowHeight+"px";
}this.levels=[{field:null,value:0}];
J=w("colgroup",null,this._cols());
N=w("tbody",{role:"rowgroup"},this._trs(M));
K=w("table",L,[J,N]);
this.contentTree.render([K]);
this.trigger("render");
},_ths:function(){var L=this.columns;
var K;
var J;
var O=[];
for(var M=0,N=L.length;
M<N;
M++){K=L[M];
J={"data-field":K.field,"data-title":K.title,className:s.styles.header,role:"columnheader"};
O.push(w("th",J,[x(K.title)]));
}if(this.options.resizable){O.push(w("th",{className:s.styles.header,role:"columnheader"}));
}return O;
},_cols:function(){var L=this.columns;
var K;
var O;
var P;
var J=[];
for(var M=0,N=L.length;
M<N;
M++){K=L[M];
P=K.width;
if(P&&parseInt(P,10)!==0){O={style:{width:typeof P===F?P:P+"px"}};
}else{O=null;
}J.push(w("col",O,[]));
}if(this.options.resizable){J.push(w("col",{style:{width:"1px"}}));
}return J;
},_trs:function(R){var Q;
var P=[];
var J;
var K=[];
var N;
var O=s.styles;
for(var L=0,M=R.length;
L<M;
L++){Q=R[L];
N=this._levels({idx:Q.parentId,id:Q.id,summary:Q.summary});
J={"data-uid":Q.uid,"data-level":N,role:"row"};
if(Q.summary){J["aria-expanded"]=Q.expanded;
}if(L%2!==0){K.push(O.alt);
}if(Q.summary){K.push(O.group);
}if(K.length){J.className=K.join(" ");
}P.push(this._tds({task:Q,attr:J,level:N}));
K=[];
}return P;
},_tds:function(O){var J=[];
var L=this.columns;
var K;
for(var M=0,N=L.length;
M<N;
M++){K=L[M];
J.push(this._td({task:O.task,column:K,level:O.level}));
}if(this.options.resizable){J.push(w("td",{role:"gridcell"}));
}return w("tr",O.attr,J);
},_td:function(P){var J=[];
var Q=this.options.resourcesField;
var O=s.styles;
var R=P.task;
var K=P.column;
var S=R.get(K.field);
var L;
var N;
if(K.field==Q){S=S||[];
L=[];
for(var M=0;
M<S.length;
M++){L.push(u.format("{0} [{1}]",S[M].get("name"),S[M].get("formatedValue")));
}L=L.join(", ");
}else{L=K.format?u.format(K.format,S):S;
}if(K.field==="title"){J=p({level:P.level,className:O.iconPlaceHolder});
J.push(w("span",{className:O.icon+" "+(R.summary?R.expanded?O.iconCollapse:O.iconExpand:O.iconHidden)}));
N=u.format("{0}, {1:P0}",L,R.percentComplete);
}J.push(w("span",{"aria-label":N},[x(L)]));
return w("td",{role:"gridcell"},J);
},_levels:function(P){var O=this.levels;
var N;
var Q=P.summary;
var L=P.idx;
var K=P.id;
for(var J=0,M=O.length;
J<M;
J++){N=O[J];
if(N.field==L){if(Q){O.push({field:K,value:N.value+1});
}return N.value;
}}},_sortable:function(){var S=this;
var Q=this.options.resourcesField;
var M=this.columns;
var L;
var R;
var K=this.header.find("th["+u.attr("field")+"]");
var N=function(T){if(S.dataSource.total()===0||S.editable&&S.editable.trigger("validate")){T.preventDefault();
T.stopImmediatePropagation();
}};
var J;
for(var O=0,P=K.length;
O<P;
O++){L=M[O];
if(L.sortable&&L.field!==Q){J=K.eq(O);
R=J.data("kendoColumnSorter");
if(R){R.destroy();
}J.attr("data-"+u.ns+"field",L.field).kendoColumnSorter({dataSource:this.dataSource}).find(q+s.styles.link).on("click"+C,N);
}}K=null;
},_selectable:function(){var K=this;
var J=this.options.selectable;
if(J){this.content.on(o+C,"tr",function(L){var M=l(this);
if(K.editable){K.editable.trigger("validate");
}if(!L.ctrlKey){K.select(M);
}else{K.clearSelection();
}});
}},select:function(L){var J=this.content.find(L);
var K=s.styles.selected;
if(J.length){J.siblings(q+K).removeClass(K).attr("aria-selected",false).end().addClass(K).attr("aria-selected",true);
this.trigger("change");
return;
}return this.content.find(q+K);
},clearSelection:function(){var J=this.select();
if(J.length){J.removeClass(s.styles.selected);
this.trigger("change");
}},_setDataSource:function(J){this.dataSource=J;
},_editable:function(){var N=this;
var L=s.styles;
var K="span."+L.icon+":not("+L.iconHidden+")";
var J=function(){var O=N.editable;
if(O){if(O.end()){N._closeCell();
}else{O.trigger("validate");
}}};
var M=function(P){var O=l(P.currentTarget);
if(!O.hasClass(L.editCell)){m();
}};
if(!this.options.editable){return;
}this._startEditHandler=function(P){var Q=P.currentTarget?l(P.currentTarget):P;
var O=N._columnFromElement(Q);
if(N.editable){return;
}if(O&&O.editable){N._editCell({cell:Q,column:O});
}};
N.content.on("focusin"+C,function(){clearTimeout(N.timer);
N.timer=null;
}).on("focusout"+C,function(){N.timer=setTimeout(J,1);
}).on("keydown"+C,function(O){if(O.keyCode===y.ENTER){O.preventDefault();
}}).on("keyup"+C,function(P){var Q=P.keyCode;
var O;
var R;
switch(Q){case y.ENTER:m();
J();
break;
case y.ESC:if(N.editable){O=N._editableContainer;
R=N._modelFromElement(O);
if(!N.trigger("cancel",{model:R,cell:O})){N._closeCell(true);
}}break;
}});
if(!B){N.content.on("mousedown"+C,"td",function(O){M(O);
}).on("dblclick"+C,"td",function(O){if(!l(O.target).is(K)){N._startEditHandler(O);
}});
}else{N.touch=N.content.kendoTouch({filter:"td",touchstart:function(O){M(O.touch);
},doubletap:function(O){if(!l(O.touch.initialTouch).is(K)){N._startEditHandler(O.touch);
}}}).data("kendoTouch");
}},_editCell:function(U){var V=this.options.resourcesField;
var R=s.styles;
var L=U.cell;
var M=U.column;
var S=this._modelFromElement(L);
var T=this.dataSource._createNewModel(S.toJSON());
var P=T.fields[M.field]||T[M.field];
var W=P.validation;
var N=u.attr("type");
var K=u.attr("bind");
var Q=u.attr("format");
var J={name:M.field,required:P.validation?P.validation.required===true:false};
var O;
if(M.field===V){M.editor(L,T);
return;
}this._editableContent=L.children().detach();
this._editableContainer=L;
L.data("modelCopy",T);
if((P.type==="date"||l.type(P)==="date")&&(!M.format||/H|m|s|F|g|u/.test(M.format))){J[K]="value:"+M.field;
J[N]="date";
if(M.format){J[Q]=u._extractFormat(M.format);
}O=function(X,Y){l('<input type="text"/>').attr(J).appendTo(X).kendoDateTimePicker({format:Y.format});
};
}this.editable=L.addClass(R.editCell).kendoEditable({fields:{field:M.field,format:M.format,editor:M.editor||O},model:T,clearContainer:false}).data("kendoEditable");
if(W&&W.dateCompare&&t(W.dateCompare)&&W.message){l("<span "+u.attr("for")+'="'+M.field+'" class="k-invalid-msg"/>').hide().appendTo(L);
L.find("[name="+M.field+"]").attr(u.attr("dateCompare-msg"),W.message);
}this.editable.bind("validate",function(X){var Y=this.element.find(":kendoFocusable:first").focus();
if(D){Y.focus();
}X.preventDefault();
});
if(this.trigger("edit",{model:S,cell:L})){this._closeCell(true);
}},_closeCell:function(J){var O=s.styles;
var K=this._editableContainer;
var P=this._modelFromElement(K);
var L=this._columnFromElement(K);
var N=L.field;
var M=K.data("modelCopy");
var Q={};
Q[N]=M.get(N);
K.empty().removeData("modelCopy").removeClass(O.editCell).append(this._editableContent);
this.editable.unbind();
this.editable.destroy();
this.editable=null;
this._editableContainer=null;
this._editableContent=null;
if(!J){if(N==="start"){Q.end=new Date(Q.start.getTime()+P.duration());
}this.trigger("update",{task:P,updateInfo:Q});
}},_draggable:function(){var V=this;
var O=null;
var P=true;
var Q;
var S=s.styles;
var R=u.support.isRtl(this.element);
var T="tr["+u.attr("level")+" = 0]:last";
var J={};
var L=function(){O=null;
Q=null;
P=true;
J={};
};
var K=function(X){var W=X;
while(W){if(O.get("id")===W.get("id")){P=false;
break;
}W=V.dataSource.taskParent(W);
}};
var N=function(){var W=l(Q).height();
var X=u.getOffset(Q).top;
r(Q,{beforeLimit:X+W*0.25,afterLimit:X+W*0.75});
};
var M=function(Y){if(!Q){return;
}var aa=Y.location;
var W=S.dropAdd;
var X="add";
var Z=parseInt(Q.attr(u.attr("level")),10);
var ab;
if(aa<=Q.beforeLimit){ab=Q.prev();
W=S.dropTop;
X="insert-before";
}else{if(aa>=Q.afterLimit){ab=Q.next();
W=S.dropBottom;
X="insert-after";
}}if(ab&&parseInt(ab.attr(u.attr("level")),10)===Z){W=S.dropMiddle;
}J.className=W;
J.command=X;
};
var U=function(){return V._reorderDraggable.hint.children(q+S.dragStatus).removeClass(S.dropPositions);
};
if(!this.options.editable){return;
}this._reorderDraggable=this.content.kendoDraggable({distance:10,holdToDrag:B,group:"listGroup",filter:"tr[data-uid]",ignore:q+S.input,hint:function(W){return l('<div class="'+S.header+" "+S.dragClue+'"/>').css({width:300,paddingLeft:W.css("paddingLeft"),paddingRight:W.css("paddingRight"),lineHeight:W.height()+"px",paddingTop:W.css("paddingTop"),paddingBottom:W.css("paddingBottom")}).append('<span class="'+S.icon+" "+S.dragStatus+'" /><span class="'+S.dragClueText+'"/>');
},cursorOffset:{top:-20,left:0},container:this.content,dragstart:function(W){if(V.editable&&V.editable.trigger("validate")){W.preventDefault();
return;
}O=V._modelFromElement(W.currentTarget);
this.hint.children(q+S.dragClueText).text(O.get("title"));
if(R){this.hint.addClass(S.rtl);
}},drag:function(W){if(P){M(W.y);
U().addClass(J.className);
}},dragend:function(){L();
},dragcancel:function(){L();
}}).data("kendoDraggable");
this._tableDropArea=this.content.kendoDropTargetArea({distance:0,group:"listGroup",filter:"tr[data-uid]",dragenter:function(W){Q=W.dropTarget;
K(V._modelFromElement(Q));
N();
U().toggleClass(S.dropDenied,!P);
},dragleave:function(){P=true;
U();
},drop:function(){var X=V._modelFromElement(Q);
var W=X.orderId;
var Y={parentId:X.parentId};
if(P){switch(J.command){case"add":Y.parentId=X.id;
break;
case"insert-before":if(X.parentId===O.parentId&&X.orderId>O.orderId){Y.orderId=W-1;
}else{Y.orderId=W;
}break;
case"insert-after":if(X.parentId===O.parentId&&X.orderId>O.orderId){Y.orderId=W;
}else{Y.orderId=W+1;
}break;
}V.trigger("update",{task:O,updateInfo:Y});
}}}).data("kendoDropTargetArea");
this._contentDropArea=this.element.kendoDropTargetArea({distance:0,group:"listGroup",filter:q+S.gridContent,drop:function(){var X=V._modelFromElement(V.content.find(T));
var W=X.orderId;
var Y={parentId:null,orderId:O.parentId!==null?W+1:W};
V.trigger("update",{task:O,updateInfo:Y});
}}).data("kendoDropTargetArea");
},_resizable:function(){var L=this;
var J=s.styles;
var K=function(Q){var W=l(Q.currentTarget);
var U=L.resizeHandle;
var T=W.position();
var S=T.left;
var N=W.outerWidth();
var P=W.closest("div");
var O=Q.clientX+l(window).scrollLeft();
var R=L.options.columnResizeHandleWidth;
S+=P.scrollLeft();
if(!U){U=L.resizeHandle=l('<div class="'+J.resizeHandle+'"><div class="'+J.resizeHandleInner+'" /></div>');
}var M=W.offset().left+N;
var V=O>M-R&&O<M+R;
if(!V){U.hide();
return;
}P.append(U);
U.show().css({top:T.top,left:S+N-R-1,height:W.outerHeight(),width:R*3}).data("th",W);
};
if(!this.options.resizable){return;
}if(this._columnResizable){this._columnResizable.destroy();
}this.header.find("thead").on("mousemove"+C,"th",K);
this._columnResizable=this.header.kendoResizable({handle:q+J.resizeHandle,start:function(O){var Q=l(O.currentTarget).data("th");
var M="col:eq("+Q.index()+")";
var P=L.header.find("table");
var N=L.content.find("table");
L.element.addClass("k-grid-column-resizing");
this.col=N.children("colgroup").find(M).add(P.find(M));
this.th=Q;
this.startLocation=O.x.location;
this.columnWidth=Q.outerWidth();
this.table=P.add(N);
this.totalWidth=this.table.width()-P.find("th:last").outerWidth();
},resize:function(N){var O=11;
var M=N.x.location-this.startLocation;
if(this.columnWidth+M<O){M=O-this.columnWidth;
}this.table.css({minWidth:this.totalWidth+M});
this.col.width(this.columnWidth+M);
},resizeend:function(){L.element.removeClass("k-grid-column-resizing");
var O=Math.floor(this.columnWidth);
var N=Math.floor(this.th.outerWidth());
var M=L.columns[this.th.index()];
L.trigger("columnResize",{column:M,oldWidth:O,newWidth:N});
this.table=this.col=this.th=null;
}}).data("kendoResizable");
},_modelFromElement:function(J){var L=J.closest("tr");
var K=this.dataSource.getByUid(L.attr(u.attr("uid")));
return K;
},_columnFromElement:function(J){var L=J.closest("td");
var M=L.parent();
var K=M.children().index(L);
return this.columns[K];
}});
r(true,H.GanttList,{styles:z});
}(window.kendo.jQuery));
return window.kendo;
},typeof define=="function"&&define.amd?define:function(k,l,m){(m||l)();
}));
window.$=h;
window.jQuery=i;
})($telerik.$,$telerik.$);
window.$=c;
window.jQuery=d;
})($telerik.$,$telerik.$);