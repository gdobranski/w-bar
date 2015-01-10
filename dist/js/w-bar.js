+function($){

	// state object
	// {
	//    id: '',
    //    value: '',
    //    text: ''
	//	}


    // par object
	//{
	//	host: 
	//  nodes:[
	//			{ label: '', 
	//			  type: 'text | drop-down | radio | checkbox',
	//			  id: 'some-id',
	//			  size: 245, -- optional 
	//			  source: function(par, callback){ 
	//				callback(data)
	//			  }
	//			}
	//        ],
	//	state: [
	//			]
    //}
	
	var div = '<div />',
		WBar = function(par){
			var $this = this;
			$this._nodes = par.nodes;
			$this._state = par.state;
			$this._hid: = host;
			$this.init();
		};

	WBar.prototype = {
		_calcTTPosition: function(){

		},
		_calcNSize: function(){

		},
		_renderNode:function(index){

			var ndPar = this._nodes[index],
				nd = $(div)
					 .addClass('node'),
				splt;
		
			$(div).text(ndPar.label)
				.appendTo(nd);

			splt = $(div).addClass('splitter');
			$(div).addClass('dot')
				  .appendTo(splt);
			$(div).addClass('line-inner')
			.appendTo(	  
					$(div).addClass('line-outer')
				   );
			splt.appendTo(nd);	   	  

			/*
				<div class="splitter">
					<div class="dot"></div>
					<div class="line-outer">
						<div class="line-inner"></div>
					</div>	
				</div>
			*/
		},
		_buildNodes:function(){
			var i = 0,
				el
			for (; el = this._nodes[i++];) {
				this._renderNode();	
			};
		},
		init: function(){
			// Build toolbar
			this.tbar = $(div)
						.addClass('w-bar');
			
			// Add tooltip bar
			// to main toolbar			
			$(div)
			.addClass('tooltip-bar')
			.appendTo(this.tbar);

			this._buildNodes();
		}
	};

}(jQuery);


/*
	create 
	render
	build
	get
	set
	load

	8     3517 919 625
    011 7 3132 512 750
*/