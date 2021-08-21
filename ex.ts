/**
 * kana-display
 */

//% weight=1000 color=#0000cc icon="A" block="表示ブロック"
// https://fontawesome.com/icons?d=gallery&m=free

namespace ex {
  /**
   * 数値も文字列に変換する
   * @param data 数値; eg: 0
   */
  //% block="数値→文字列変換 %data"
  export function tostring(data: number): string {
    return data.toString();
  }

  /**
   * 画面に出力をする
   * @param data 文字列; eg: "String"
   * @param speed スクロールスピード; eg: 100
   * @param disp_off 表示を消す; eg: true
   * @param console_output コンソール出力; eg: false
   */
  //% block="出力 %data || スクロールスピード %speed 表示を消す %disp_off"
  export function print(data: string, speed: number = 100, disp_off: boolean = true, console_output: boolean = false): void {
    let row0: string, row1: string, row2: string, row3: string, row4: string;
    row0=row1=row2=row3=row4 = "";

    function print_output(str: string) {
      let data = str.split(",");
      for(let i = 0; i < data.length; i++) {
        if(row0 == "") row0=row1=row2=row3=row4 = "0000";
        if(i % 5 == 0) row0 += data[i] + "0";
        else if(i % 5 == 1) row1 += data[i] + "0";
        else if(i % 5 == 2) row2 += data[i] + "0";
        else if(i % 5 == 3) row3 += data[i] + "0";
        else if(i % 5 == 4) row4 += data[i] + "0";
      }
    }

    let str:string,
        save,
        split_data,
        noscroll;
    noscroll = false;
    if(data == "") data = " ";
    save = data.split("");
    for(let value of save) {
if(value == "a") print_output("1110,0001,0111,1001,0111");
else if(value == "b") print_output("1000,1000,1110,1001,1110");
else if(value == "c") print_output("0000,0111,1000,1000,0111");
else if(value == "d") print_output("0001,0001,0111,1001,0111");
else if(value == "e") print_output("0110,1001,1110,1000,0111");
else if(value == "f") print_output("001,010,111,010,010");
else if(value == "g") print_output("0111,1001,0111,0001,0110");
else if(value == "h") print_output("100,100,110,101,101");
else if(value == "i") print_output("1,0,1,1,1");
else if(value == "j") print_output("001,000,001,101,010");
else if(value == "k") print_output("100,100,101,110,101");
else if(value == "l") print_output("10,10,10,10,01");
else if(value == "m") print_output("00000,11010,10101,10101,10101");
else if(value == "n") print_output("0000,1010,1101,1001,1001");
else if(value == "o") print_output("0000,0110,1001,1001,0110");
else if(value == "p") print_output("0000,1110,1001,1110,1000");
else if(value == "q") print_output("0000,0111,1001,0111,0001");
else if(value == "r") print_output("0000,1010,1101,1000,1000");
else if(value == "s") print_output("0000,0011,0100,0010,1100");
else if(value == "t") print_output("010,111,010,010,001");
else if(value == "u") print_output("0000,1001,1001,1001,0111");
else if(value == "v") print_output("0000,1001,1001,1010,0100");
else if(value == "w") print_output("00000,10101,10101,10101,01010");
else if(value == "x") print_output("0000,1001,0110,0110,1001");
else if(value == "y") print_output("1001,1001,0111,0001,0110");
else if(value == "z") print_output("0000,1111,0010,0100,1111");
else if(value == "A") print_output("0110,1001,1001,1111,1001");
else if(value == "B") print_output("1110,1001,1110,1001,1110");
else if(value == "C") print_output("0111,1000,1000,1000,0111");
else if(value == "D") print_output("1110,1001,1001,1001,1110");
else if(value == "E") print_output("1111,1000,1111,1000,1111");
else if(value == "F") print_output("1111,1000,1110,1000,1000");
else if(value == "G") print_output("0110,1000,1011,1001,0110");
else if(value == "H") print_output("1001,1001,1111,1001,1001");
else if(value == "I") print_output("111,010,010,010,111");
else if(value == "J") print_output("0111,0010,0010,1010,0100");
else if(value == "K") print_output("1001,1010,1100,1010,1001");
else if(value == "L") print_output("1000,1000,1000,1000,1111");
else if(value == "M") print_output("10001,11011,11011,10101,10101");
else if(value == "N") print_output("10001,11001,10101,10011,10001");
else if(value == "O") print_output("0110,1001,1001,1001,0110");
else if(value == "P") print_output("1110,1001,1110,1000,1000");
else if(value == "Q") print_output("01100,10010,10010,01100,00011");
else if(value == "R") print_output("1110,1001,1110,1010,1001");
else if(value == "S") print_output("0111,1000,0110,0001,1110");
else if(value == "T") print_output("11111,00100,00100,00100,00100");
else if(value == "U") print_output("1001,1001,1001,1001,0110");
else if(value == "V") print_output("1001,1001,1001,1010,0100");
else if(value == "W") print_output("10101,10101,10101,10101,01010");
else if(value == "X") print_output("10001,01010,00100,01010,10001");
else if(value == "Y") print_output("10001,01010,00100,00100,00100");
else if(value == "Z") print_output("1111,0001,0010,0100,1111");
else if(value == "あ") print_output("01000,11111,01010,10101,11001");
else if(value == "い") print_output("10000,10011,10001,10001,11000");
else if(value == "う") print_output("0110,0000,1110,0001,0110");
else if(value == "え") print_output("01100,00000,11100,01100,10111");
else if(value == "お") print_output("01001,11101,01000,11111,11001");
else if(value == "か") print_output("01000,11101,01101,10101,10100");
else if(value == "き") print_output("01111,00010,00111,10010,11000");
else if(value == "く") print_output("001,010,100,010,001");
else if(value == "け") print_output("10010,10111,10010,10010,00110");
else if(value == "こ") print_output("1111,0001,0000,1000,0111");
else if(value == "さ") print_output("0010,1111,0010,1000,1110");
else if(value == "し") print_output("1000,1000,1000,1001,0110");
else if(value == "す") print_output("00010,11111,01010,00110,01100");
else if(value == "せ") print_output("01010,11111,01010,01000,00110");
else if(value == "そ") print_output("0101,0010,1111,0100,0011");
else if(value == "た") print_output("01000,11100,01011,01000,01011");
else if(value == "ち") print_output("0100,1111,0110,0001,0110");
else if(value == "つ") print_output("11110,00001,00001,00001,00110");
else if(value == "て") print_output("11111,00010,00100,00100,00010");
else if(value == "と") print_output("0100,0100,1111,1000,1111");
else if(value == "な") print_output("10011,11000,10010,10111,00110");
else if(value == "に") print_output("10111,10000,10000,10100,10111");
else if(value == "ぬ") print_output("01010,01110,11011,10101,11011");
else if(value == "ね") print_output("01000,11000,01110,11101,01011");
else if(value == "の") print_output("01110,10101,10101,11001,00010");
else if(value == "は") print_output("10010,10111,10010,10111,10110");
else if(value == "ひ") print_output("11000,01011,10010,10010,01100");
else if(value == "ふ") print_output("01100,00000,00100,10101,10101");
else if(value == "へ") print_output("01000,10100,10010,00010,00001");
else if(value == "ほ") print_output("10111,10010,10111,11010,10101");
else if(value == "ま") print_output("11111,00100,11111,10110,11101");
else if(value == "み") print_output("11000,01010,11111,11010,11010");
else if(value == "む") print_output("01001,11101,01000,11001,11111");
else if(value == "め") print_output("01010,01110,11011,10101,11001");
else if(value == "も") print_output("01000,11100,01000,11101,01111");
else if(value == "や") print_output("01010,11111,01001,01000,01000");
else if(value == "ゆ") print_output("10100,11111,10101,10111,00100");
else if(value == "よ") print_output("00100,00111,00100,11110,11101");
else if(value == "ら") print_output("1011,1000,1111,0001,0111");
else if(value == "り") print_output("1001,1001,1101,0001,0110");
else if(value == "る") print_output("01110,00010,01111,10101,00111");
else if(value == "れ") print_output("01000,11000,01110,11010,01011");
else if(value == "ろ") print_output("01110,00010,01111,10001,00111");
else if(value == "わ") print_output("01000,11000,01111,11001,01011");
else if(value == "を") print_output("11111,01000,00111,01010,01111");
else if(value == "ん") print_output("01000,01000,01100,10101,10110");
else if(value == "ゔ") print_output("011010,000001,111000,000100,011000");
else if(value == "が") print_output("0100010,1110101,0110100,1010100,1010000");
else if(value == "ぎ") print_output("011101,001001,011100,101000,110000");
else if(value == "ぐ") print_output("001010,010001,100000,010000,001000");
else if(value == "げ") print_output("1001010,1011101,1001000,1001000,0011000");
else if(value == "ご") print_output("111101,000101,000000,100000,011100");
else if(value == "ざ") print_output("001010,111101,001000,100000,111000");
else if(value == "じ") print_output("10010,10001,10000,10010,01100");
else if(value == "ず") print_output("0001010,1111101,0101000,0011000,0110000");
else if(value == "ぜ") print_output("0101010,1111101,0101000,0100000,0011000");
else if(value == "ぞ") print_output("010110,001001,111100,010000,001100");
else if(value == "だ") print_output("010010,111001,010110,010000,010110");
else if(value == "ぢ") print_output("010010,111101,011000,000100,011000");
else if(value == "づ") print_output("1111010,0000101,0000100,0000100,0011000");
else if(value == "で") print_output("11111010,00010001,00100000,00100000,00010000");
else if(value == "ど") print_output("01010,01001,11110,10000,11110");
else if(value == "ば") print_output("1001010,1011101,1001000,1011100,1011000");
else if(value == "び") print_output("1100010,0101101,1001000,1001000,0110000");
else if(value == "ぶ") print_output("011010,000001,001000,101010,101010");
else if(value == "べ") print_output("010010,101001,100100,000100,000010");
else if(value == "ぼ") print_output("10111010,10010001,10111000,11010000,10101000");
else if(value == "ぱ") print_output("10010010,10111101,10010010,10111000,10110000");
else if(value == "ぴ") print_output("11000010,01011101,10010010,10010000,01100000");
else if(value == "ぷ") print_output("0110010,0000101,0010010,1010100,1010100");
else if(value == "ぺ") print_output("01000010,10100101,10010010,00010000,00001000");
else if(value == "ぽ") print_output("10111010,10010101,10111010,11010000,10101000");
else if(value == "ぁ") print_output("00000,11111,01010,10101,11001");
else if(value == "ぃ") print_output("10011,10001,10001,11000");
else if(value == "ぅ") print_output("0000,0100,1110,0001,0110");
else if(value == "ぇ") print_output("0000,0100,1110,0110,1011");
else if(value == "ぉ") print_output("0000,1101,0100,1111,1101");
else if(value == "っ") print_output("0000,0000,1110,0001,0110");
else if(value == "ゃ") print_output("00000,01010,11111,01001,01000");
else if(value == "ゅ") print_output("00000,10100,11111,10111,00100");
else if(value == "ょ") print_output("00000,00111,00100,11110,11101");
else if(value == "ア") print_output("11111,00001,00110,00100,01000");
else if(value == "イ") print_output("0001,0010,0110,1010,0010");
else if(value == "ウ") print_output("0010,1111,1001,0001,0010");
else if(value == "エ") print_output("11111,00100,00100,00100,11111");
else if(value == "オ") print_output("00010,11111,00110,01010,10010");
else if(value == "カ") print_output("00100,11111,00101,01001,10011");
else if(value == "キ") print_output("010,111,010,111,010");
else if(value == "ク") print_output("0100,0111,1001,0001,0010");
else if(value == "ケ") print_output("01000,01111,10010,00010,00100");
else if(value == "コ") print_output("1111,0001,0001,0001,1111");
else if(value == "サ") print_output("01010,11111,01010,00010,00100");
else if(value == "シ") print_output("11000,00001,11001,00010,11100");
else if(value == "ス") print_output("11111,00010,00100,01010,10001");
else if(value == "セ") print_output("01000,11111,01010,01000,00111");
else if(value == "ソ") print_output("10001,10001,01001,00010,01100");
else if(value == "タ") print_output("0111,1101,1011,0001,0110");
else if(value == "チ") print_output("00110,01100,11111,00100,01000");
else if(value == "ツ") print_output("10101,10101,00001,00010,01100");
else if(value == "テ") print_output("11111,00000,11111,00100,01000");
else if(value == "ト") print_output("100,100,110,101,100");
else if(value == "ナ") print_output("00100,11111,00100,00100,01000");
else if(value == "ニ") print_output("00000,01110,00000,00000,11111");
else if(value == "ヌ") print_output("11111,01010,00100,01010,10000");
else if(value == "ネ") print_output("00100,11111,00110,01101,10100");
else if(value == "ノ") print_output("001,001,001,010,100");
else if(value == "ハ") print_output("01010,01010,01010,10001,10001");
else if(value == "ヒ") print_output("1000,1011,1100,1000,0111");
else if(value == "フ") print_output("11111,00001,00001,00010,01100");
else if(value == "ヘ") print_output("00000,01000,10100,00010,00001");
else if(value == "ホ") print_output("00100,11111,00100,10101,10101");
else if(value == "マ") print_output("11111,00001,01010,00100,00010");
else if(value == "ミ") print_output("1111,0000,1111,0000,1111");
else if(value == "ム") print_output("00100,01000,10001,10011,11101");
else if(value == "メ") print_output("0001,0101,0010,0101,1000");
else if(value == "モ") print_output("1111,0100,1111,0100,0011");
else if(value == "ヤ") print_output("01000,11111,01001,01000,01000");
else if(value == "ユ") print_output("01110,00010,00010,00010,11111");
else if(value == "ヨ") print_output("1111,0001,1111,0001,1111");
else if(value == "ラ") print_output("0110,0000,1111,0001,0010");
else if(value == "リ") print_output("101,101,101,001,010");
else if(value == "ル") print_output("01010,01010,01010,01010,10011");
else if(value == "レ") print_output("1000,1000,1001,1010,1100");
else if(value == "ロ") print_output("1111,1001,1001,1001,1111");
else if(value == "ワ") print_output("1111,1001,0001,0010,0100");
else if(value == "ヲ") print_output("1111,0001,1111,0001,0110");
else if(value == "ン") print_output("1100,0001,0001,0010,1100");
else if(value == "ガ") print_output("010010,111101,010100,100100,101100");
else if(value == "ギ") print_output("01010,11101,01000,11100,01000");
else if(value == "グ") print_output("010010,011101,100100,000100,001000");
else if(value == "ゲ") print_output("0100010,0111101,1001000,0001000,0010000");
else if(value == "ゴ") print_output("000010,111101,000100,000100,111100");
else if(value == "ザ") print_output("0101010,1111101,0101000,0001000,0010000");
else if(value == "ジ") print_output("110010,000101,110100,000100,111000");
else if(value == "ズ") print_output("000010,111101,001000,011000,100100");
else if(value == "ゼ") print_output("0100010,1111101,0100100,0100000,0011100");
else if(value == "ゾ") print_output("100110,100101,010100,000100,011000");
else if(value == "ダ") print_output("011110,110101,101100,000100,011000");
else if(value == "ヂ") print_output("0011010,0110001,1111100,0010000,0100000");
else if(value == "ヅ") print_output("1010010,1010101,0000100,0001000,0110000");
else if(value == "デ") print_output("0111010,0000001,1111100,0010000,0100000");
else if(value == "ド") print_output("1010,1001,1110,1000,1000");
else if(value == "バ") print_output("0101010,0101001,0101000,1000100,1000100");
else if(value == "ビ") print_output("100010,101101,110000,100000,011100");
else if(value == "ブ") print_output("000010,111101,000100,001000,010000");
else if(value == "ベ") print_output("00010,01001,10100,00010,00001");
else if(value == "ボ") print_output("0010010,1111101,0010000,1010100,1010100");
else if(value == "パ") print_output("01010010,01010101,01010010,10001000,10001000");
else if(value == "ピ") print_output("1000010,1000101,1111010,1000000,0111000");
else if(value == "プ") print_output("0000010,1111101,0001010,0010000,0100000");
else if(value == "ペ") print_output("0000010,0100101,1010010,0001000,0000100");
else if(value == "ポ") print_output("00100010,11111101,00100010,10101000,10101000");
else if(value == "ァ" || value == "ｧ") print_output("000,111,001,010,100");
else if(value == "ィ" || value == "ｨ") print_output("000,001,010,110,010");
else if(value == "ゥ" || value == "ｩ") print_output("000,010,111,001,010");
else if(value == "ェ" || value == "ｪ") print_output("000,111,010,010,111");
else if(value == "ォ" || value == "ｫ") print_output("0000,0010,1111,0110,1010");
else if(value == "ッ") print_output("0000,1101,1101,0001,0110");
else if(value == "ャ") print_output("0000,0100,1111,0101,0100");
else if(value == "ュ") print_output("0000,1110,0010,0010,1111");
else if(value == "ョ") print_output("000,111,111,001,111");
else if(value == "0" || value == "０") print_output("0110,1001,1001,1001,0110");
else if(value == "1" || value == "１") print_output("010,110,010,010,111");
else if(value == "2" || value == "２") print_output("0110,1001,0010,0100,1111");
else if(value == "3" || value == "３") print_output("0110,1001,0010,1001,0110");
else if(value == "4" || value == "４") print_output("0010,0110,1010,1111,0010");
else if(value == "5" || value == "５") print_output("1111,1000,1110,0001,1110");
else if(value == "6" || value == "６") print_output("0110,1000,1110,1001,0110");
else if(value == "7" || value == "７") print_output("1111,1001,0001,0010,0100");
else if(value == "8" || value == "８") print_output("0110,1001,0110,1001,0110");
else if(value == "9" || value == "９") print_output("0110,1001,0111,0001,0110");
else if(value == "!" || value == "！") print_output("1,1,1,0,1");
else if(value == "?" || value == "？") print_output("01110,10001,00110,00000,00100");
else if(value == "." || value == "．") print_output("0,0,0,0,1");
else if(value == "," || value == "，") print_output("00,00,00,01,10");
else if(value == "｡" || value == "。") print_output("000,000,010,101,010");
else if(value == "､" || value == "、") print_output("00,00,00,10,01");
else if(value == "-" || value == "ー") print_output("00000,00000,11110,00000,00000");
else if(value == "=" || value == "＝") print_output("0000,1111,0000,1111,0000");
else if(value == "_" || value == "＿") print_output("0000,0000,0000,0000,1111");
else if(value == "/") print_output("001,001,010,010,100");
else if(value == "／") print_output("00001,00010,00100,01000,10000");
else if(value == "&" || value == "＆") print_output("01100,10000,01101,10010,01101");
else if(value == "~" || value == "～") print_output("0000,0101,1010,0000,0000");
else if(value == "･" || value == "・") print_output("0,0,1,0,0");
else if(value == " " || value == "　") print_output("000,000,000,000,000");
else print_output("111,111,111,111,111");
    }

    if(row0.length < 10) {
      row0 = row0.slice(4, row0.length);
      row1 = row1.slice(4, row1.length);
      row2 = row2.slice(4, row2.length);
      row3 = row3.slice(4, row3.length);
      row4 = row4.slice(4, row4.length);
      noscroll = true;
    }

    if(disp_off == true && noscroll == false) {
      row0 += "00000";
      row1 += "00000";
      row2 += "00000";
      row3 += "00000";
      row4 += "00000";
    }

    let save2 = [row0, row1, row2, row3, row4];
    let scroll = save2[0].length - 5;
    if(scroll < 0) scroll = 0;
    for(let i = 0; i <= scroll; i++) {
      for(let h = 0; h < 5; h++) {
        let w = save2[h].split("");
        for(let m = i; m < w.length + i; m++) {
          if(w[m] == "1") {
            led.plot(m - i, h);
          }
        }
      }
      if(i != scroll) {
        basic.pause(speed);
        basic.clearScreen();
      }
    }

    if(console_output == true) {
      console.log("row0: "+row0);
      console.log("row1: "+row1);
      console.log("row2: "+row2);
      console.log("row3: "+row3);
      console.log("row4: "+row4);
    }
    row0=row1=row2=row3=row4 = "";
  }
}