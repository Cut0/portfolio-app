export default {
  name: 'Cut 0',
  image: require('@/assets/icons/profileIcon.webp'),
  job: 'frontend engineer',
  introduction:
    '東京理科大学情報工学科2年生。\n2019年5月頃からweb開発系のインターンをしている。\n現在は業務でのRails+Vue.jsでの開発や趣味でTypeScriptを使っていろいろやってる。',
  careers: [
    {
      title: '~2019年',
      content:
        '数理研究部でUnityを用いたVRコンテンツの開発やXamarin.Androidを用いたAndroidアプリケーションの開発'
    },
    { title: '2019年4月', content: '東京理科大学工学部情報工学科に入学' },
    { title: '2019年5月', content: 'ベンチャー企業でインターン開始' },
    {
      title: '2019年10月',
      content: 'プログラミングサークルairou設立&参加'
    },
    {
      title: '2019年12月',
      content:
        '株式会社フューチャーリンクネットワークでエンジニアとしてインターン開始'
    }
  ],
  skills: [
    {
      name: 'Vue.js',
      image: require('@/assets/icons/vuejs.svg'),
      content:
        '初めてweb開発をする時に学んだフレームワークです。\nComposition APIが熱いですね。\nこのサイトもVue(Composition API)+TypeScriptで作成されています。'
    },
    {
      name: 'Nuxt.js',
      image: require('@/assets/icons/nuxtjs.svg'),
      content:
        'Vueをやった後に開発規模が大きくなったため使いました。\nPWA対応とSPA開発が簡単にできる気がします。\nSSRしない場合に利用するメリットがわからないのでご存知の方教えてください。'
    },
    {
      name: 'Ruby on Rails',
      image: require('@/assets/icons/rails.svg'),
      content:
        'ActiveRecordが便利ですね。\nRubyに慣れてないので極力触りたくないです。'
    },
    {
      name: 'Firebase',
      image: require('@/assets/icons/firebase.svg'),
      content:
        'FirestoreというNoSQLデータベースやCloud Function、Firebase Hostingを使ったことがあります。\nこれが便利すぎるせいでバックエンドエンジニア必要なくなると考える方もいらっしゃいますが、それはないと思います。\nこのサイトもFirebase Hostingを使っています。'
    },
    {
      name: 'JavaScript',
      image: require('@/assets/icons/javascript.svg'),
      content:
        '大学生になってから学び始めました。\n便利なフレームワークは多数ありますが、Vanilla JSを知ることでフレームワークの仕組みが理解できるのでよかったです。\nどんどん進化していると思います'
    },
    {
      name: 'TypeScript',
      image: require('@/assets/icons/typescript.svg'),
      content: '定番のAltJSですね。\n書いていて気持ちいいです。'
    },
    {
      name: 'NodeJS',
      image: require('@/assets/icons/nodejs.svg'),
      content:
        'サーバーサイドでJavaScriptを動かせます。\nTypeORM+NestJSがいい感じでした。\n環境構築できている方は是非 npx cut0 を実行してみてください。'
    },
    {
      name: 'CSS3',
      image: require('@/assets/icons/css3.svg'),
      content: 'なんもわからん。'
    },
    {
      name: 'Flutter',
      image: require('@/assets/icons/flutter.svg'),
      content:
        'インターンで少しだけ使っていました。プロジェクトは破綻し、Nuxt+Firestoreで開発することになりました。\nとはいえ、端末の違いを意識せずクロスプラットフォームな開発ができるのは便利でした。'
    },
    {
      name: 'Python',
      image: require('@/assets/icons/python.svg'),
      content:
        'Atcoderで使ってます。\n実行速度はそれほど速くありませんが便利なライブラリが多いため、簡潔にコードを記述することができます。'
    },
    {
      name: 'C#',
      image: require('@/assets/icons/csharp.svg'),
      content:
        '初めて学んだプログラミング言語です。\n様々な場面で利用することができこの言語だけで統一できると言われることもあります。\nLINQが便利でした。最近はJavaScriptにコンパイルできるそうですね。'
    },
    {
      name: 'Xamarin',
      image: require('@/assets/icons/xamarin.svg'),
      content:
        '高校生の頃にXamarin.Androidを用いてネイティブアプリケーションを開発していました。\nUI・UXについて何も知らなかったのでとんでもない見た目のアプリケーションばかり開発していました。'
    },
    {
      name: 'Unity',
      image: require('@/assets/icons/unity.svg'),
      content:
        '高校生の頃にVR開発をしていました。\n大会でヘッドマウントディスプレイが壊れてしまったことも今ではいい思い出です。'
    }
  ],
  sns: [
    {
      name: 'GitHub',
      image: require('@/assets/icons/github.svg'),
      link: 'https://twitter.com/npx-cut0'
    },
    {
      name: 'Twitter',
      image: require('@/assets/icons/twitter.svg'),
      link: 'https://github.com/Cut0'
    },
    {
      name: 'Qiita',
      image: require('@/assets/icons/qiita.svg'),
      link: 'https://github.com/Cut0'
    },
    {
      name: 'Zenn',
      image: require('@/assets/icons/zenn.svg'),
      link: 'https://github.com/Cut0'
    }
  ]
}
