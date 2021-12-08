const questionExtra: string[] =  [
    'ハワイの地図は？',
    '爬虫類は？',
    '八百長とは？',
    'ぴょこはどれ？',
    'クトゥルフは？',
    'クラッカーは？',
    '京都はどれ？',
    '日本はどれ？',
    '世界一高いビルはどれ？',
    'ミズグモはどれ？',
    'パンタグラフはどれ？',
    'キリスト教に関係ないのは？',
    'この中で人数が一番多いのは？',
    '1番口が大きいのは？',
    '爆笑とは？'
]

const answerExtra: { select: HTMLImageElement; judge: boolean; }[][] = [

    [
        {
            select: require("@/assets/hawaiiTrue.png"),
            judge: true
        }
    ],
    [
        {
            select: require("@/assets/hawaiiFalse2.png"),
            judge: false
        }
    ],
    [
        {
            select: require("@/assets/hawaiiFalse1.png"),
            judge: false
        }
    ]
]

export { answerExtra }
