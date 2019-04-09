function radioChange(e){
	let value = e.value;
	if( value == "en_us" ){
		document.getElementById("block_mixed").style.display="none";
		document.getElementById("block_en_us").style.display="block";
	} else {
		document.getElementById("block_en_us").style.display="none";
		document.getElementById("block_mixed").style.display="block";

	}
}


function generator(){
	document.getElementById("textarea").value = "生成中……";

	let gen = {};
	gen.word = document.getElementById("word").value;
	let radio = document.getElementsByName("redio")[0].checked;
	if( radio ){
		let en = document.getElementById("en").value;
		let en_video = document.getElementById("en_video").value;
		let us = document.getElementById("us").value;
		let us_video = document.getElementById("us_video").value;
		if( en ){
			gen.en = en;
			gen.en_video = en_video;
		}
		if( us ){
			gen.us = us;
			gen.us_video = us_video;
		}
	} else {
		let mixed = document.getElementById("mixed").value;
		let mixed_video = document.getElementById("mixed_video").value;
		if( mixed ){
			gen.mixed = mixed;
			gen.mixed_video = mixed_video;
		}
	}
	let explain = document.getElementById("explain").value;
	if( explain )
		gen.explain = explain;
	document.getElementById("textarea").value = JSON.stringify(gen,null,4);
}