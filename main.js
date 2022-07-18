/*
 * main.js サイコロを振るプログラム
 */
var count;	// 変化しているように見せる回数
var $id = function(id){ return document.getElementById(id); };
var aaa;

/*
 * サイコロを振る
 */
function shake(){
	var sai = Math.floor(Math.random() * 6) + 1;		// 1から6までの適当な数字
	aaa = sai;
	document.getElementById('condice1').innerHTML = (sai);
	sai = sai + ".jpg";							// 画像ファイル名生成
	$id("saikoro").innerHTML = "<img src='" + sai + "' width='300vw' height='300vw'>";
}

function move(){
	let start = Date.now();

    let timer = setInterval(function() {
        let timePassed = Date.now() - start;

        train.style.left = timePassed / aaa + 'px';

        if (timePassed > 900){
			clearInterval(timer);
			return;
		}
			
	}, 20);
    
}

/*
 * サイコロを振るときのアニメーション
 */
function anime(){
	if(count > 20){	// 適当に20回ほど振る
		count = 0;
		$id("btn").disabled = "";	// ボタンを使える状態にする
		move();
		return 0;
	}
	shake();
	count++;
	setTimeout(anime, 50);	// 50ミリ秒間隔で表示切り替え
}

function saikoro(){
	count = 0;
	$id("btn").disabled = "true";	// ボタンを使用不可にする
	anime();						// サイコロアニメ開始
}


/*
 * 起動時の処理
 */
window.onload = function(){
	shake();		// 一回だけサイコロを振る
}
