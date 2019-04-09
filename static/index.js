window.onload = ()=>{
    getJson( "html" )
}

function getJson( type ){
    let _url = String.format("./pronunciation/{0}.json",type);
    $httpRequest.ajaxJson( _url , (e) => {
        console.log(e)
        createTable( e.data )
    })
}

function createTable( data ){
    deleteTable();
    let title = [ "单词", "音标(英)", "音标(美)", "解释" ];
    let table = window.document.createElement("table");
    table.setAttribute( "border", 1 );
    table.setAttribute( "cellpadding", 5 );
    table.setAttribute( "cellspacing", 0 );
    table.setAttribute( "width", "100%" );
    // 创建标题
    let tr = document.createElement("tr");
    for( let i in title ){
        let th = document.createElement("th");
        th.appendChild( document.createTextNode(title[i]) );
        tr.appendChild( th );
    }
    table.appendChild( tr );
    // 插入元素
    for( let i in data ){
        let item = data[i];
        tr = document.createElement("tr");
        let td = document.createElement("td");
        td.appendChild( document.createTextNode( item['word'] ));
        tr.appendChild( td );

        if( !item['mixed'] ){
            td = document.createElement("td");
            if( item['en'] ){
                td.appendChild( document.createTextNode( item['en'] ));
                td.setAttribute( "class", "symbol" );
                td.onclick = ()=> playVideo(item['en_video']);
            }
            tr.appendChild( td );

            td = document.createElement("td");
            if( item['us'] ){
                td.appendChild( document.createTextNode( item['us'] ));
                td.setAttribute( "class", "symbol" );
                td.onclick = ()=> playVideo(item['us_video']);
            }
            tr.appendChild( td );    
        } else {
            td = document.createElement("td");
            td.appendChild( document.createTextNode( item['mixed'] ));
            td.setAttribute( "colspan", 2 );
            td.setAttribute( "class", "symbol" );
            td.onclick = ()=> playVideo(item['mixed_video']);
            tr.appendChild( td );
        }

        td = document.createElement("td");
        if( !item['explain'] ){
            td.appendChild( document.createTextNode( item['explain'] ));
            tr.appendChild( td );
        }
        table.appendChild( tr );
    }
    document.body.appendChild(table);
}

function deleteTable(){
    let table = document.getElementsByTagName("table");
    let len = table.length;
    for( let i=0;i<len;i++ ){
        table[i].parentNode.removeChild(table[i]);
    }
}

String.format = function ()
{
    var param = [];
    for (var i = 0, l = arguments.length; i < l; i++)
    {
        param.push(arguments[i]);
    }
    var statment = param[0]; // get the first element(the original statement)
    param.shift(); // remove the first element from array
    return statment.replace(/\{(\d+)\}/g, function(m, n)
    {
        return param[n];
    });
}

function playVideo( path ){
    console.log("播放" ,path);
    let player = window.document.createElement("audio");
    player.setAttribute( "src", path );
    player.play();
    player = null;
}