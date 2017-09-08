(function(b,a,e){var d=window.jQuery,c=window.$;
window.$=window.jQuery=a;
(function(g,f,j){var i=window.jQuery,h=window.$;
window.$=window.jQuery=f;
(function(l,k){k("kendo.ooxml",["kendo.core"],l);
}(function(){var k={id:"ooxml",name:"XLSX generation",category:"framework",advanced:true,depends:["core"]};
(function(l,x){var A='<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\r\n<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties" Target="docProps/app.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>';
var t=x.template('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\r\n<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:dcmitype="http://purl.org/dc/dcmitype/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><dc:creator>${creator}</dc:creator><cp:lastModifiedBy>${lastModifiedBy}</cp:lastModifiedBy><dcterms:created xsi:type="dcterms:W3CDTF">${created}</dcterms:created><dcterms:modified xsi:type="dcterms:W3CDTF">${modified}</dcterms:modified></cp:coreProperties>');
var n=x.template('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\r\n<Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties" xmlns:vt="http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes"><Application>Microsoft Excel</Application><DocSecurity>0</DocSecurity><ScaleCrop>false</ScaleCrop><HeadingPairs><vt:vector size="2" baseType="variant"><vt:variant><vt:lpstr>Worksheets</vt:lpstr></vt:variant><vt:variant><vt:i4>${sheets.length}</vt:i4></vt:variant></vt:vector></HeadingPairs><TitlesOfParts><vt:vector size="${sheets.length}" baseType="lpstr"># for (var idx = 0; idx < sheets.length; idx++) { ## if (sheets[idx].options.title) { #<vt:lpstr>${sheets[idx].options.title}</vt:lpstr># } else { #<vt:lpstr>Sheet${idx+1}</vt:lpstr># } ## } #</vt:vector></TitlesOfParts><LinksUpToDate>false</LinksUpToDate><SharedDoc>false</SharedDoc><HyperlinksChanged>false</HyperlinksChanged><AppVersion>14.0300</AppVersion></Properties>');
var r=x.template('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\r\n<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml" /><Default Extension="xml" ContentType="application/xml" /><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml" /><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/><Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/># for (var idx = 1; idx <= count; idx++) { #<Override PartName="/xl/worksheets/sheet${idx}.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml" /># } #<Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-package.core-properties+xml" /><Override PartName="/docProps/app.xml" ContentType="application/vnd.openxmlformats-officedocument.extended-properties+xml" /></Types>');
var G=x.template('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\r\n<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><fileVersion appName="xl" lastEdited="5" lowestEdited="5" rupBuild="9303" /><workbookPr defaultThemeVersion="124226" /><bookViews><workbookView xWindow="240" yWindow="45" windowWidth="18195" windowHeight="7995" /></bookViews><sheets># for (var idx = 0; idx < sheets.length; idx++) { ## var options = sheets[idx].options; ## var name = options.name || options.title ## if (name) { #<sheet name="${name}" sheetId="${idx+1}" r:id="rId${idx+1}" /># } else { #<sheet name="Sheet${idx+1}" sheetId="${idx+1}" r:id="rId${idx+1}" /># } ## } #</sheets># if (definedNames.length) { #<definedNames> # for (var di = 0; di < definedNames.length; di++) { #<definedName name="_xlnm._FilterDatabase" hidden="1" localSheetId="${definedNames[di].localSheetId}">${definedNames[di].name}!$${definedNames[di].from}:$${definedNames[di].to}</definedName> # } #</definedNames># } #<calcPr calcId="145621" /></workbook>');
var J=x.template('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\r\n<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac" mc:Ignorable="x14ac"><dimension ref="A1" /><sheetViews><sheetView #if(index==0) {# tabSelected="1" #}# workbookViewId="0"># if (frozenRows || frozenColumns) { #<pane state="frozen"# if (frozenColumns) { # xSplit="${frozenColumns}"# } ## if (frozenRows) { # ySplit="${frozenRows}"# } # topLeftCell="${String.fromCharCode(65 + (frozenColumns || 0))}${(frozenRows || 0)+1}"/># } #</sheetView></sheetViews><sheetFormatPr x14ac:dyDescent="0.25" defaultRowHeight="#= defaults.rowHeight ? defaults.rowHeight * 0.75 : 15 #" # if (defaults.columnWidth) { # defaultColWidth="#= kendo.ooxml.toWidth(defaults.columnWidth) #" # } # /># if (columns && columns.length > 0) { #<cols># for (var ci = 0; ci < columns.length; ci++) { ## var column = columns[ci]; ## var columnIndex = typeof column.index === "number" ? column.index + 1 : (ci + 1); ## if (column.width) { #<col min="${columnIndex}" max="${columnIndex}" customWidth="1"# if (column.autoWidth) { # width="${((column.width*7+5)/7*256)/256}" bestFit="1"# } else { # width="#= kendo.ooxml.toWidth(column.width) #" # } #/># } ## } #</cols># } #<sheetData># for (var ri = 0; ri < data.length; ri++) { ## var row = data[ri]; ## var rowIndex = typeof row.index === "number" ? row.index + 1 : (ri + 1); #<row r="${rowIndex}" x14ac:dyDescent="0.25" # if (row.height) { # ht="#= kendo.ooxml.toHeight(row.height) #" customHeight="1" # } # ># for (var ci = 0; ci < row.data.length; ci++) { ## var cell = row.data[ci];#<c r="#=cell.ref#"# if (cell.style) { # s="#=cell.style#" # } ## if (cell.type) { # t="#=cell.type#"# } #># if (cell.formula != null) { #<f>${cell.formula}</f># } ## if (cell.value != null) { #<v>${cell.value}</v># } #</c># } #</row># } #</sheetData># if (filter) { #<autoFilter ref="${filter.from}:${filter.to}"/># } ## if (mergeCells.length) { #<mergeCells count="${mergeCells.length}"># for (var ci = 0; ci < mergeCells.length; ci++) { #<mergeCell ref="${mergeCells[ci]}"/># } #</mergeCells># } #<pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3" /></worksheet>');
var H=x.template('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\r\n<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"># for (var idx = 1; idx <= count; idx++) { #<Relationship Id="rId${idx}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet${idx}.xml" /># } #<Relationship Id="rId${count+1}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml" /><Relationship Id="rId${count+2}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml" /></Relationships>');
var B=x.template('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\r\n<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="${count}" uniqueCount="${uniqueCount}"># for (var index in indexes) { #<si><t>${index.substring(1)}</t></si># } #</sst>');
var C=x.template('<?xml version="1.0" encoding="UTF-8"?><styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="x14ac" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"><numFmts count="${formats.length}"># for (var fi = 0; fi < formats.length; fi++) { ## var format = formats[fi]; #<numFmt formatCode="${format.format}" numFmtId="${165+fi}" /># } #</numFmts><fonts count="${fonts.length+1}" x14ac:knownFonts="1"><font><sz val="11" /><color theme="1" /><name val="Calibri" /><family val="2" /><scheme val="minor" /></font># for (var fi = 0; fi < fonts.length; fi++) { ## var font = fonts[fi]; #<font># if (font.fontSize) { #<sz val="${font.fontSize}" /># } else { #<sz val="11" /># } ## if (font.bold) { #<b/># } ## if (font.italic) { #<i/># } ## if (font.underline) { #<u/># } ## if (font.color) { #<color rgb="${font.color}" /># } else { #<color theme="1" /># } ## if (font.fontFamily) { #<name val="${font.fontFamily}" /><family val="2" /># } else { #<name val="Calibri" /><family val="2" /><scheme val="minor" /># } #</font># } #</fonts><fills count="${fills.length+2}"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill># for (var fi = 0; fi < fills.length; fi++) { ## var fill = fills[fi]; ## if (fill.background) { #<fill><patternFill patternType="solid"><fgColor rgb="${fill.background}"/></patternFill></fill># } ## } #</fills><borders count="${borders.length+1}"><border><left/><right/><top/><bottom/><diagonal/></border># for (var bi = 0; bi < borders.length; bi++) { ##= kendo.ooxml.borderTemplate(borders[bi]) ## } #</borders><cellStyleXfs count="1"><xf borderId="0" fillId="0" fontId="0" /></cellStyleXfs><cellXfs count="${styles.length+1}"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/># for (var si = 0; si < styles.length; si++) { ## var style = styles[si]; #<xf xfId="0"# if (style.fontId) { # fontId="${style.fontId}" applyFont="1"# } ## if (style.fillId) { # fillId="${style.fillId}" applyFill="1"# } ## if (style.numFmtId) { # numFmtId="${style.numFmtId}" applyNumberFormat="1"# } ## if (style.textAlign || style.verticalAlign || style.wrap) { # applyAlignment="1"# } ## if (style.borderId) { # borderId="${style.borderId}" applyBorder="1"# } #># if (style.textAlign || style.verticalAlign || style.wrap) { #<alignment# if (style.textAlign) { # horizontal="${style.textAlign}"# } ## if (style.verticalAlign) { # vertical="${style.verticalAlign}"# } ## if (style.wrap) { # wrapText="1"# } #/># } #</xf># } #</cellXfs><cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles><dxfs count="0" /><tableStyles count="0" defaultTableStyle="TableStyleMedium2" defaultPivotStyle="PivotStyleMedium9" /></styleSheet>');
function y(K){var L=Math.floor(K/26)-1;
return(L>=0?y(L):"")+String.fromCharCode(65+K%26);
}function z(L,K){return y(K)+(L+1);
}function m(L,K){return y(K)+"$"+(L+1);
}function w(L){var K=L.frozenRows||(L.freezePane||{}).rowSplit||1;
return K-1;
}function E(K){return(K/7*100+0.5)/100;
}function D(K){return K*0.75;
}var u=new Date(1900,0,0);
var I=x.Class.extend({init:function(L,M,N,K){this.options=L;
this._strings=M;
this._styles=N;
this._borders=K;
},toXML:function(O){this._mergeCells=this.options.mergedCells||[];
this._rowsByIndex=[];
var Q=this.options.rows||[];
for(var N=0;
N<Q.length;
N++){var P=Q[N].index;
if(typeof P!=="number"){P=N;
}Q[N].index=P;
this._rowsByIndex[P]=Q[N];
}var K=[];
for(N=0;
N<Q.length;
N++){K.push(this._row(Q[N],N));
}K.sort(function(R,S){return R.index-S.index;
});
var L=this.options.filter;
if(L){L={from:z(w(this.options),L.from),to:z(w(this.options),L.to)};
}var M=this.options.freezePane||{};
return J({frozenColumns:this.options.frozenColumns||M.colSplit,frozenRows:this.options.frozenRows||M.rowSplit,columns:this.options.columns,defaults:this.options.defaults||{},data:K,index:O,mergeCells:this._mergeCells,filter:L});
},_row:function(N){var L=[];
var M=0;
var O=this;
var K={};
l.each(N.cells,function(R,P){if(!P){return;
}var Q;
if(typeof P.index==="number"){Q=P.index;
M=Q-R;
}else{Q=R+M;
}if(P.colSpan){M+=P.colSpan-1;
}var S=O._cell(P,N.index,Q);
l.each(S,function(U,T){if(K[T.ref]){return;
}K[T.ref]=true;
L.push(T);
});
});
return{data:L,height:N.height,index:N.index};
},_lookupString:function(M){var L="$"+M;
var K=this._strings.indexes[L];
if(K!==j){M=K;
}else{M=this._strings.indexes[L]=this._strings.uniqueCount;
this._strings.uniqueCount++;
}this._strings.count++;
return M;
},_lookupStyle:function(M){var L=x.stringify(M);
if(L=="{}"){return 0;
}var K=l.inArray(L,this._styles);
if(K<0){K=this._styles.push(L)-1;
}return K+1;
},_lookupBorder:function(K){var M=x.stringify(K);
if(M=="{}"){return;
}var L=l.inArray(M,this._borders);
if(L<0){L=this._borders.push(M)-1;
}return L+1;
},_cell:function(S,W,L){if(!S){return[];
}var aa=S.value;
var K={};
if(S.borderLeft){K.left=S.borderLeft;
}if(S.borderRight){K.right=S.borderRight;
}if(S.borderTop){K.top=S.borderTop;
}if(S.borderBottom){K.bottom=S.borderBottom;
}K=this._lookupBorder(K);
var Y={bold:S.bold,color:S.color,background:S.background,italic:S.italic,underline:S.underline,fontFamily:S.fontFamily||S.fontName,fontSize:S.fontSize,format:S.format,textAlign:S.textAlign||S.hAlign,verticalAlign:S.verticalAlign||S.vAlign,wrap:S.wrap,borderId:K};
var R=this.options.columns||[];
var Q=R[L];
var Z=typeof aa;
if(Q&&Q.autoWidth){var T=aa;
if(Z==="number"){T=x.toString(aa,S.format);
}Q.width=Math.max(Q.width||0,(T+"").length);
}if(Z==="string"){aa=this._lookupString(aa);
Z="s";
}else{if(Z==="number"){Z="n";
}else{if(Z==="boolean"){Z="b";
aa=+aa;
}else{if(aa&&aa.getTime){Z=null;
var U=(aa.getTimezoneOffset()-u.getTimezoneOffset())*x.date.MS_PER_MINUTE;
aa=(aa-u-U)/x.date.MS_PER_DAY+1;
if(!Y.format){Y.format="mm-dd-yy";
}}else{Z=null;
aa=null;
}}}}Y=this._lookupStyle(Y);
var N=[];
var M=z(W,L);
N.push({value:aa,formula:S.formula,type:Z,style:Y,ref:M});
var P=S.colSpan||1;
var X=S.rowSpan||1;
var O;
if(P>1||X>1){this._mergeCells.push(M+":"+z(W+X-1,L+P-1));
for(var V=W+1;
V<W+X;
V++){if(!this._rowsByIndex[V]){this._rowsByIndex[V]={index:V,cells:[]};
}for(O=L;
O<L+P;
O++){this._rowsByIndex[V].cells.splice(O,0,{});
}}for(O=L+1;
O<L+P;
O++){N.push({ref:z(W,O)});
}}return N;
}});
var v={General:0,"0":1,"0.00":2,"#,##0":3,"#,##0.00":4,"0%":9,"0.00%":10,"0.00E+00":11,"# ?/?":12,"# ??/??":13,"mm-dd-yy":14,"d-mmm-yy":15,"d-mmm":16,"mmm-yy":17,"h:mm AM/PM":18,"h:mm:ss AM/PM":19,"h:mm":20,"h:mm:ss":21,"m/d/yy h:mm":22,"#,##0 ;(#,##0)":37,"#,##0 ;[Red](#,##0)":38,"#,##0.00;(#,##0.00)":39,"#,##0.00;[Red](#,##0.00)":40,"mm:ss":45,"[h]:mm:ss":46,"mmss.0":47,"##0.0E+0":48,"@":49,"[$-404]e/m/d":27,"m/d/yy":30,t0:59,"t0.00":60,"t#,##0":61,"t#,##0.00":62,"t0%":67,"t0.00%":68,"t# ?/?":69,"t# ??/??":70};
function s(K){if(K.length<6){K=K.replace(/(\w)/g,function(L,M){return M+M;
});
}K=K.substring(1).toUpperCase();
if(K.length<8){K="FF"+K;
}return K;
}var F=x.Class.extend({init:function(K){this.options=K||{};
this._strings={indexes:{},count:0,uniqueCount:0};
this._styles=[];
this._borders=[];
this._sheets=l.map(this.options.sheets||[],l.proxy(function(L){L.defaults=this.options;
return new I(L,this._strings,this._styles,this._borders);
},this));
},toDataURL:function(){if(typeof JSZip==="undefined"){throw new Error("JSZip not found. Check http://docs.telerik.com/kendo-ui/framework/excel/introduction#requirements for more details.");
}var X=new JSZip();
var L=X.folder("docProps");
L.file("core.xml",t({creator:this.options.creator||"Kendo UI",lastModifiedBy:this.options.creator||"Kendo UI",created:this.options.date||new Date().toJSON(),modified:this.options.date||new Date().toJSON()}));
var S=this._sheets.length;
L.file("app.xml",n({sheets:this._sheets}));
var R=X.folder("_rels");
R.file(".rels",A);
var V=X.folder("xl");
var W=V.folder("_rels");
W.file("workbook.xml.rels",H({count:S}));
V.file("workbook.xml",G({sheets:this._sheets,definedNames:l.map(this._sheets,function(ab,Z){var aa=ab.options;
var Y=aa.filter;
if(Y&&typeof Y.from!=="undefined"&&typeof Y.to!=="undefined"){return{localSheetId:Z,name:aa.name||aa.title||"Sheet"+(Z+1),from:m(w(aa),Y.from),to:m(w(aa),Y.to)};
}})}));
var U=V.folder("worksheets");
for(var Q=0;
Q<S;
Q++){U.file(x.format("sheet{0}.xml",Q+1),this._sheets[Q].toXML(Q));
}var K=l.map(this._borders,l.parseJSON);
var T=l.map(this._styles,l.parseJSON);
var P=function(Y){return Y.underline||Y.bold||Y.italic||Y.color||Y.fontFamily||Y.fontSize;
};
var N=l.map(T,function(Y){if(Y.color){Y.color=s(Y.color);
}if(P(Y)){return Y;
}});
var O=l.map(T,function(Y){if(Y.format&&v[Y.format]===j){return Y;
}});
var M=l.map(T,function(Y){if(Y.background){Y.background=s(Y.background);
return Y;
}});
V.file("styles.xml",C({fonts:N,fills:M,formats:O,borders:K,styles:l.map(T,function(Z){var Y={};
if(P(Z)){Y.fontId=l.inArray(Z,N)+1;
}if(Z.background){Y.fillId=l.inArray(Z,M)+2;
}Y.textAlign=Z.textAlign;
Y.verticalAlign=Z.verticalAlign;
Y.wrap=Z.wrap;
Y.borderId=Z.borderId;
if(Z.format){if(v[Z.format]!==j){Y.numFmtId=v[Z.format];
}else{Y.numFmtId=165+l.inArray(Z,O);
}}return Y;
})}));
V.file("sharedStrings.xml",B(this._strings));
X.file("[Content_Types].xml",r({count:S}));
return"data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,"+X.generate({compression:"DEFLATE"});
}});
function p(L){var K="thin";
if(L===2){K="medium";
}else{if(L===3){K="thick";
}}return K;
}function o(K,M){var L="";
if(M&&M.size){L+="<"+K+' style="'+p(M.size)+'">';
if(M.color){L+='<color rgb="'+s(M.color)+'"/>';
}L+="</"+K+">";
}return L;
}function q(K){return"<border>"+o("left",K.left)+o("right",K.right)+o("top",K.top)+o("bottom",K.bottom)+"</border>";
}x.ooxml={Workbook:F,Worksheet:I,toWidth:E,toHeight:D,borderTemplate:q};
}(kendo.jQuery,kendo));
return kendo;
},typeof define=="function"&&define.amd?define:function(k,l,m){(m||l)();
}));
window.$=h;
window.jQuery=i;
})($telerik.$,$telerik.$);
window.$=c;
window.jQuery=d;
})($telerik.$,$telerik.$);