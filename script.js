class GBOARD{
  constructor(parent){
    this.parent = document.getElementById(parent);
    //64マスの情報を保持する配列
    this.sq = new Array(64);
    for( let i=0; i<64; i++){
      let e = document.createElement("div");
      let x = (i % 8)*29+12;
      let y = Math.floor( i / 8 ) * 29+12;

      let d= document.createElement("div");
      d.className = "disc";
      d.style.display = "none";
      e.appendChild( d );
      e.disc = d;
　　　 
      e.className = "sq";
      e.style.left= x + "px";
      e.style.top = y + "px";
      this.parent.appendChild( e );   
      this.sq[i] = e;
    }
    // Othello bd を渡すことで盤面を表示
  }
  // (x,y)のマスに石を置く
  //    d=0 : 石を消す
  //    d=1 : 黒石を置く
  //    d=2 : 白石を置く
  setDisc( x, y, d ){
    let p = y * 8 + x;
    this.sq[p].disc.style.display = d == 0 ? "none" :"block";
    if( d > 0 ){
      this.sq[p].disc.style.backgroundColor = d == 1 ? "black" : "white";
    }
  }
  update ( bd ){
    for( let y=0; y<8 ; y++ ){
      for( let x=0; x<8 ; x++ ){
        this.setDisc( x, y, bd.get(x,y) );        
      }
    }
  }
}
class Othello {
  constructor(){
    this.bd = new Array(91);
    for( let i=0; i=this.bd.length; i++ ){ this.bd[i] = 8; }
    for ( let y=0; y<8; y++ ){
      for( let x=0; x<8; x++ ){
        this.bd[this.pos(x,y)] = 0;
      }
    }
    this.kbd[this.pos(3,3)] = 2;
    this.kbd[this.pos(4,3)] = 1;
    this.kbd[this.pos(3,4)] = 1;
    this.kbd[this.pos(4,4)] = 2;
    this.turn = 1;
  }
  pos(x,y) { return (y+1) * 9 + x + 1; }
  pos_x(p) { return  p % 9 -1; }
  pos_y(p) { return  Math.floor(p/9)-1 }
  get( x,y ){
    return this.bd[this.pos(x,y)];
  }
}

let gBoard = null;
function setup(){
  noLoop();  // draw()関数の定期的な呼び出しを行わない
  // index.htmlの id="board"な div の中にオセロ盤を作成
  gBoard = new GBOARD( "board" );
  gOthello = new Othello();
  gBoard.update( gOthello );
  
}
function draw(){
}