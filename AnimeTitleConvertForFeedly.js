// ==UserScript==
// @name       アニメタイトル変換 for Feedly
// @version    0.0.17
// @description  Feedlyに表示されるローマ字のアニメタイトルを日本語に変換します。下の配列に追加すれば好きなタイトルに対応できます。
// @match      http://cloud.feedly.com/*
// @match      https://cloud.feedly.com/*
// @copyright  2013+, kik0220
// ==/UserScript==

var targets = {
  // '' : '声優戦隊ボイストーム7',
  // '' : '艦隊これくしょん～艦これ～',
  // '' : 'pupa(ピューパ)',
  'Kakumeiki Valvrave 2' : '革命機ヴァルヴレイヴ 2ndシーズン',
  'Galilei Donna' : 'ガリレイドンナ',
  'Samurai Flamenco' : 'サムライフラメンコ',
  'Ore no Nounai Sentakushi ga, Gakuen Lovecome o Zenryoku de Jama Shiteiru' : '俺の脳内選択肢が、学園ラブコメを全力で邪魔している',
  'BlazBlue - Alter Memory' : 'BLAZBLUE ALTER MEMORY',
  'Machine-Doll wa Kizutsukanai' : '機巧少女(マシンドール)は傷つかない',
  'Yowamushi Pedal' : '弱虫ペダル',
  'Non Non Biyori' : 'のんのんびより',
  'Aoki Hagane no Arpeggio - Ars Nova' : '蒼き鋼のアルペジオ -アルス・ノヴァ-',
  'Tokyo Ravens' : '東京レイヴンズ',
  'Gundam Build Fighters' : 'ガンダムビルドファイターズ',
  'Yozakura Quartet - Hana no Uta' : '夜桜四重奏 ハナノウタ',
  'Walkure Romanze' : 'ワルキューレロマンツェ',
  'Sekai de Ichiban Tsuyoku Naritai!' : '世界でいちばん強くなりたい！',
  'Meganebu!' : 'メガネブ！',
  'Gingitsune' : 'ぎんぎつね',
  'Magi ' : 'マギ ',
  'Log Horizon' : 'ログ・ホライズン',
  'Little Busters! Refrain' : 'リトルバスターズ！～Refrain～',
  'White Album (2013)' : 'WHITE ALBUM 2',
  'Hajime no Ippo' : 'はじめの一歩',
  'Kuroko no Basuke' : '黒子のバスケ 第2期',
  'Tesagure! Bukatsu-mono' : 'てさぐれ！部活もの',
  'Dia no Ace' : 'ダイヤのA',
  'Phi Brain - Kami no Puzzle (2013)' : 'ファイ・ブレイン～神のパズル 第3シリーズ',
  'Kill la Kill' : 'キルラキル KILL la KILL',
  'Freezing Vibration' : 'フリージング ヴァイブレーション',
  'Yuusha ni Narenakatta Ore wa Shibushibu Shuushoku o Ketsui Shimashita.' : '勇者になれなかった俺はしぶしぶ就職を決意しました。',
  'Strike the Blood' : 'ストライク・ザ・ブラッド',
  'Super Seishun Brothers' : 'SuperSeisyunBrothers -超青春姉弟s-',
  'Diabolik Lovers' : 'DIABOLIK LOVERS(ディアボリックラヴァーズ)',
  'Miss Monochrome' : 'ミス・モノクローム',
  'Coppelion' : 'COPPELION コッペリオン',
  'Kyoukai no Kanata' : '境界の彼方',
  'Kyousougiga' : '京騒戯画',
  'Nagi no Asukara' : '凪のあすから',
  'IS - Infinite Stratos 2' : 'IS＜インフィニット・ストラトス＞2',
  'Outbreak Company' : 'アウトブレイク・カンパニー',
  'Golden Time' : 'ゴールデンタイム',
  'Miyakawa-ke no Kuufuku' : '宮河家の空腹',
  'Stella Jo-Gakuin Koutou-ka C3-Bu' : 'ステラ女学院高等科C3部[しーきゅーぶ]',
  'Danganronpa' : 'ダンガンロンパ',
  'Kibou no Gakuen to Zetsubou no Koukousei' : '希望の学園と絶望の高校生',
  'Kami nomi zo Shiru Sekai' : '神のみぞ知るセカイ',
  'Watashi ga Motenai no wa Dou Kangaete mo Omaera ga Warui!' : '私がモテないのはどう考えてもお前らが悪い！',
  'Kimi no Iru Machi' : '君のいる町',
  'Gin no Saji' : '銀の匙',
  'Inu to Hasami wa Tsukaiyou' : '犬とハサミは使いよう',
  'Tamayura' : 'たまゆら',
  'Senki Zesshou Symphogear' : '戦姫絶唱シンフォギア',
  'Servant x Service' : 'サーバント×サービス',
  'Rou Kyuu Bu' : 'ロウきゅーぶ',
  'Kin`iro Mosaic' : 'きんいろモザイク',
  'Fate - Kaleid Liner Prisma Illya' : 'Fate/kaleid liner プリズマ☆イリヤ',
  'Gen\'ei o Kakeru Taiyou' : '幻影ヲ駆ケル太陽',
  'Monogatari Series' : '＜物語＞シリーズ',
  'Kami-sama no Inai Nichiyoubi' : '神さまのいない日曜日',
  'High School DxD' : 'ハイスクールDxD',
  'Choujigen Game Neptune The Animation' : '超次元ゲイム ネプテューヌ',
  'Dokidoki! Precure' : 'ドキドキ！プリキュア',
  'Aiura' : 'あいうら',
  'Aku no Hana' : '惡の華',
  'Arata Kangatari' : 'アラタカンダリ',
  'Blood Lad' : 'ブラッドラッド',
  'Chihayafuru' : 'ちはやぶる',
  'Dansai Bunri no Crime Edge' : '断裁分離のクライムエッジ',
  'Date a Live' : 'デート・ア・ライブ',
  'Fantasista Doll' : 'ファンタジスタドール',
  'Futari wa Milky Holmes' : 'ふたりはミルキィホームズ',
  'Gatchaman Crowds' : 'ガッチャマン クラウズ',
  'Genshiken Nidaime' : 'げんしけん二代目',
  'Gifuu Doudou!! Kanetsugu to Keiji' : '義風堂々!! 兼続と慶次',
  'Ginga Kikoutai Majestic Prince' : '銀河機攻隊マジェスティックプリンス',
  'Haiyore! Nyaruko-san' : '這いよれ！ニャル子さん',
  'Hakkenden' : '八犬伝',
  'Touhou Hakken Ibun' : '東方八犬異聞',
  'Hataraku Maou-sama!' : 'はたらく魔王さま！',
  'Hayate no Gotoku' : 'ハヤテのごとく',
  'Hentai Ouji to Warawanai Neko.' : '変態王子と笑わない猫。',
  'Hyakka Ryouran' : '百花繚乱',
  'Kakumeiki Valvrave' : '革命機ヴァルヴレイヴ',
  'Kitakubu Katsudou Kiroku' : '帰宅部活動記録',
  'Love Lab' : '恋愛ラボ',
  'Makai Ouji' : '魔界王子',
  'Mushibugyo' : 'ムシブギョー',
  'Ore no Imouto ga Konna ni Kawaii Wake ga Nai.' : '俺の妹がこんなに可愛いわけがない',
  'Photo Kano' : 'フォトカノ',
  'Red Data Girl' : 'レッドデータガール',
  'Rozen Maiden' : 'ローゼンメイデン',
  'Senyuu.' : '戦友',
  'Shingeki no Kyojin' : '進撃の巨人',
  'Sparrow`s Hotel' : 'スパロウズホテル',
  'Suisei no Gargantia' : '翠星のガルガンティア',
  'Toaru Kagaku no Railgun' : 'とある科学の超電磁砲',
  'Uchouten Kazoku' : '有頂天家族',
  'Uchuu Kyoudai' : '宇宙兄弟',
  'Uta no Prince-sama' : 'うたの☆プリンスさまっ♪',
  'Yahari Ore no Seishun Love Come wa Machigatteiru.' : 'やはり俺の青春ラブコメはまちがっている。',
  'Yondemasu yo, Azazel-san.' : 'よんでますよ、アザゼルさん。',
  'Yuyushiki' : 'ゆゆ式',
  'Zettai Bouei Leviathan' : '絶対防衛レヴィアタン'
};
document.body.addEventListener("DOMNodeInserted", function(e){
  try{
    if(e.target.className.indexOf('u0Entry') < 0){ return; }
  } catch(e) { return; }
  var title = e.target.getElementsByClassName('title')[0];
  for(var target in targets){
    title.textContent = title.textContent.replace(target, targets[target]);
  }
}, false);