YUI.add("dd-proxy",function(F){var E=F.DD.DDM,A="node",B="dragNode",C="proxy",D,G=function(){G.superclass.constructor.apply(this,arguments);};G.NAME="dragProxy";G.ATTRS={moveOnEnd:{value:true},resizeFrame:{value:true},proxy:{value:false,setter:function(H){this._setProxy(H);return H;}},positionProxy:{value:true},borderStyle:{value:"1px solid #808080"}};D={_setProxy:function(H){if(H){if(this.get(B).compareTo(this.get(A))){this._createFrame();this.set(B,E._proxy);}}else{this.set(B,this.get(A));}},_createFrame:function(){if(!E._proxy){E._proxy=true;var I=F.Node.create("<div></div>"),H=F.Node.get("body");I.setStyles({position:"absolute",display:"none",zIndex:"999",top:"-999px",left:"-999px"});H.insertBefore(I,H.get("firstChild"));I.set("id",F.stamp(I));I.addClass(E.CSS_PREFIX+"-proxy");E._proxy=I;}},_setFrame:function(){var J=this.get(A),H,I="auto";if(this.get("resizeFrame")){E._proxy.setStyles({height:J.get("offsetHeight")+"px",width:J.get("offsetWidth")+"px"});}H=E.activeDrag.get("activeHandle");if(H){I=H.getStyle("cursor");}if(I=="auto"){I=E.get("dragCursor");}this.get(B).setStyles({visibility:"hidden",display:"block",cursor:I,border:this.get("borderStyle")});if(this.get("positionProxy")){this.get(B).setXY(this.nodeXY);}this.get(B).setStyle("visibility","visible");},initializer:function(){if(this.get(C)){this._createFrame();}},start:function(){if(!this.get("lock")){}G.superclass.start.apply(this);if(this.get(C)){this._setFrame();}},end:function(){if(this.get(C)&&this.get("dragging")){if(this.get("moveOnEnd")){this.get(A).setXY(this.lastXY);}this.get(B).setStyle("display","none");}G.superclass.end.apply(this);}};F.extend(G,F.DD.Drag,D);F.DD.Drag=G;},"@VERSION@",{requires:["dd-ddm","dd-drag"],skinnable:false});