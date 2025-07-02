import SEO from '../components/SEO';

export default function About() {
  return (
    <>
      <SEO
        title="About - ペスハム（石澤亮輔）| 多動迷子コーチ"
        description="好奇心旺盛でエネルギッシュな「多動迷子」のためのコーチング、Web3・メタバース領域での活動、バイブコーディング哲学について。"
        keywords={['ペスハム', '石澤亮輔', '多動迷子コーチング', 'Web3', 'メタバース', 'NFT', 'バイブコーディング']}
      />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden py-24" style={{background: 'linear-gradient(135deg, var(--clr-bg-1) 0%, var(--clr-bg-2) 100%)'}}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Profile Images */}
            <div className="flex-shrink-0">
              <div className="flex gap-6">
                <div className="text-center">
                  <img 
                    src="/images/pessham.png" 
                    alt="ペスハム プロフィール画像" 
                    className="w-32 h-32 rounded-full object-cover shadow-lg border-4 border-white"
                  />
                  <p className="mt-2 text-sm font-bold" style={{color: 'var(--clr-gray-dark)'}}>ペスハム</p>
                </div>
                <div className="text-center">
                  <img 
                    src="/images/jissha.png" 
                    alt="実写プロフィール画像" 
                    className="w-32 h-32 rounded-full object-cover shadow-lg border-4 border-white"
                  />
                  <p className="mt-2 text-sm font-bold" style={{color: 'var(--clr-gray-dark)'}}>実写</p>
                </div>
              </div>
            </div>
            
            {/* Text Content */}
            <div className="text-center md:text-left">
              <h1 className="heading-accent text-responsive-xl font-black mb-6" style={{color: 'var(--clr-black)'}}>
                こんにちは！<br />
                <span className="vibe-highlight">ペスハム</span>です
              </h1>
              <p className="text-responsive-md" style={{color: 'var(--clr-gray-dark)'}}>
                星の数ほどもいる発信者の中から僕のことを見つけてくださりありがとうございます！
              </p>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-10" style={{background: 'var(--clr-primary)'}}></div>
          <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full opacity-10" style={{background: 'var(--clr-primary-light)'}}></div>
        </div>
      </div>

      {/* Profile Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Basic Info */}
        <section className="vibe-card p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6" style={{color: 'var(--clr-black)'}}>
            基本情報
          </h2>
          <div className="space-y-4 text-lg">
            <p>
              僕は<span className="text-accent font-bold">ペスハム</span>という名前で活動してます。<br />
              本名は<span className="font-bold">石澤亮輔（こくざわりょうすけ）</span>です。<br />
              <span className="text-accent font-bold">メタマケ</span>という会社の代表をしています。
            </p>
            <div className="bg-accent-gradient text-white p-6 rounded-lg text-center">
              <h3 className="text-2xl font-black mb-2">一言で言うと</h3>
              <p className="text-3xl font-black">「多動迷子コーチ」</p>
            </div>
          </div>
        </section>

        {/* 多動迷子とは */}
        <section className="vibe-card p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6" style={{color: 'var(--clr-black)'}}>
            多動迷子とは
          </h2>
          <div className="space-y-4 text-lg">
            <p>
              <span className="text-accent font-bold">多動迷子</span>とは、好奇心旺盛でエネルギッシュ、多くの行動に手を出してしまう一方で、手を出しすぎて気づいたら方向性や目的が「迷子状態」になってしまいがちな現代人のことを指す、私の造語です。
            </p>
            <p>
              私自身が「多動迷子」である経験から、同じ「多動迷子」の人向けにコーチングを提供しています。
            </p>
          </div>
        </section>

        {/* ビジョン・ミッション */}
        <section className="vibe-card p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6" style={{color: 'var(--clr-black)'}}>
            ビジョン・ミッション・バリュー
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-accent">ビジョン</h3>
              <p className="font-bold text-lg">【本当は】価値ある人が報われる社会にする</p>
              <div className="space-y-2 text-base">
                <p><span className="font-bold">価値ある人とは:</span><br />
                潜在的には誰かに変化を与えられる力を持ってるにも関わらず、生存領域が違ったり、魅せる力が下手だったら、単に不運だったりで、価値を発揮できてない人。</p>
                <p><span className="font-bold">報われるとは:</span><br />
                ウェルビーイングであること</p>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-accent">ミッション</h3>
              <p className="font-bold text-lg">既存の考え方の基準を外す</p>
              <h3 className="text-xl font-bold text-accent mt-6">バリュー</h3>
              <p className="font-bold text-lg">AIナイズドされた新しい基準にします</p>
              <h3 className="text-xl font-bold text-accent mt-6">アイデンティティ</h3>
              <p className="font-bold text-lg">変化にワクワクする人</p>
            </div>
          </div>
        </section>

        {/* ストレングスファインダー */}
        <section className="vibe-card p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6" style={{color: 'var(--clr-black)'}}>
            ストレングスファインダー上位5資質
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {['学習欲', '親密性', '個別化', '着想', '達成欲'].map((strength, index) => (
              <div key={index} className="bg-accent text-white p-4 rounded-lg text-center font-bold">
                {strength}
              </div>
            ))}
          </div>
        </section>

        {/* 実績 */}
        <section className="vibe-card p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6" style={{color: 'var(--clr-black)'}}>
            実績
          </h2>
          <div className="space-y-6">
            <div className="border-l-4 border-accent pl-6">
              <h3 className="font-bold text-lg">①メタバース音楽ライブ主催</h3>
              <p>2021年12月〜2024年5月メタバース音楽ライブを主催し三木道三さんに2度出演。CNPリリース前夜祭担当。累計来場者数2万5000人以上。ライブコマースでデビューアーティストの音楽NFTを100万円分完売。</p>
            </div>
            <div className="border-l-4 border-accent pl-6">
              <h3 className="font-bold text-lg">②ジェネラティブNFT「めたばっち」</h3>
              <p>2022年12月10,000体のジェネラティブNFT「めたばっち」が即完売。二次流通の総流通金額160ETH(約4,000万円)超。</p>
            </div>
            <div className="border-l-4 border-accent pl-6">
              <h3 className="font-bold text-lg">③NFT会員券「FAN PASS」</h3>
              <p>2023年10月〜3月誰でも1日1枚発行できるNFT会員券「FAN PASS」を企画。総流通金額250万円超。</p>
            </div>
            <div className="border-l-4 border-accent pl-6">
              <h3 className="font-bold text-lg">④多動迷子コーチング</h3>
              <p>2024年4月〜個別コーチング(多動迷子コーチング)で50人以上サポート、プロコーチとして売上150万超</p>
            </div>
            <div className="border-l-4 border-accent pl-6">
              <h3 className="font-bold text-lg">⑤AI授業・Udemy講師</h3>
              <p>2024年9月〜起業塾で定期的にAI授業、Udemy講師として受講者500名超</p>
            </div>
            <div className="border-l-4 border-accent pl-6">
              <h3 className="font-bold text-lg">⑥松本市3DCGプロジェクト</h3>
              <p>2024年11月〜松本市3DCGプロジェクトで市内外クリエイターデジタルコミュのコミュマネ兼工程管理を担当。複数人の3DCG案件を推進</p>
            </div>
          </div>
        </section>

        {/* 主な活動 */}
        <section className="vibe-card p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6" style={{color: 'var(--clr-black)'}}>
            活動取組の概要
          </h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-accent mb-4">①多動迷子コーチング</h3>
              <p className="text-xl font-bold mb-4">カオスな多動を、クリアなゴールへ。</p>
              <p className="mb-4">
                「多動迷子」＝好奇心旺盛でエネルギッシュ、多くの行動に手を出してしまう一方で気づいたら方向性や目的が「迷子状態」になってしまいがちな現代人。
              </p>
              <p className="mb-6">
                このような方々に対して、自分自身が「多動迷子」であることを活かし、自己理解と具体的な行動計画に基づくコーチングを提供しています。
                従来のADHD支援とは異なるアプローチで、クライアントが持つ「得意」と「大事」を活かした「生存領域」において「行動し続ける勇気」をサポートするスタイルが特徴です。
              </p>
              
              <div className="bg-accent-gradient text-white p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-4">多動迷子の人は、まずはメルマガ/LINEに登録で7大特典プレゼント！</h4>
                <ul className="space-y-2 text-sm">
                  <li>・「楽しみながら対話できる！AIプロンプト集」</li>
                  <li>・「最新技術を体系的に学べる！Udemy特別クーポン」</li>
                  <li>・「多動迷子コーチング」個別相談初回無料チケット</li>
                  <li>・「コミュニティづくりに必要なこと」ノウハウ提供</li>
                  <li>・「コミュニティにおける役割設定の必要性」</li>
                  <li>・「コンテンツ販売で感じる"壁"の正体」</li>
                  <li>・人気コンテンツ：「AIを巡る人間ドラマ」</li>
                </ul>
                <div className="mt-4">
                  <a 
                    href="https://pessham.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-secondary inline-block"
                  >
                    登録はこちらから！
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-accent mb-4">②3DCGクリエイターコミュニティと松本市での活動</h3>
              <p className="mb-4">
                <span className="font-bold">松本3DCGプロジェクト→松本三次元</span>という取組に参画しています。
              </p>
              <p className="mb-4">
                松本三次元とは、松本市のDigimat（デジタルシティ松本推進機構）のプロジェクトの一つである「松本3DCGプロジェクト」が2025年度以降市民主体で行うプロジェクトにリブランディングされた名称です。
              </p>
              <p>
                その他にも今後AIやコーチング等の最新技術を松本市の企業や個人に提供して行く取り組みを行っています。
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-accent mb-4">③Web3・メタバース領域での活動</h3>
              <div className="space-y-3">
                <p><span className="font-bold">メタバース：</span>NINJAメタバライブという音楽ライブを50回以上開催。</p>
                <p><span className="font-bold">NFT：</span>個人クリエイターとしての実績と、ジェネラティブNFT両方を経験。</p>
                <p><span className="font-bold">DAO：</span>日本最大のDAOであるNinjaDAOのコントリビューター、自分のコミュニティを運営。</p>
              </div>
              <p className="mt-4">
                新興デジタル領域において、単なる理論的知識だけでなく実践的な知見を持ち合わせています。これらのテクノロジーやビジネスモデルを実際に体験・活用し、その過程で得た洞察や実用的なノウハウを発信しています。
              </p>
            </div>
          </div>
        </section>

        {/* 音声発信 */}
        <section className="vibe-card p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6" style={{color: 'var(--clr-black)'}}>
            音声発信
          </h2>
          <p className="mb-6">
            stand.FMやSpotifyなどの音声発信を5年以上毎日積み上げてます。
          </p>
          <p className="mb-6">
            特に音声発信は、当時の自分の心境や生の声をそのままコンテンツにしているので、まさに「生きた証」が刻まれていると思います。
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-accent">standFM</h3>
              <p>音声配信、肉声1本、AI音声2本の1日3本ペースで更新</p>
            </div>
            <div>
              <h3 className="font-bold text-accent">ビデオポッドキャスト[Spotify,YouTube]</h3>
              <p>4日に1回ペースで更新</p>
            </div>
          </div>
          <p className="mt-6">
            よかったら通勤中のスキマ時間や、洗い物をしている最中などに、聞いてみてくださいね。
          </p>
        </section>

        {/* 自慢できること */}
        <section className="vibe-card p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6" style={{color: 'var(--clr-black)'}}>
            自慢できること
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-accent mb-4">①メタバース音楽ライブで三木道三さんに出演</h3>
              <p className="mb-4">
                2021年12月、「メタバース×NFT×音楽ライブ」というテーマで誰よりも早く活動を始めたところ、開始1ヶ月で「一生一緒にいてくれや」の三木道三さんに出演いただきました！
              </p>
              <p>
                他にも「NARUTO」のテーマソング「シナリオ」を歌った「SABOTEN」のキヨシさんに3度出演いただいたり、NHK BS1の番組にメタバースライブの映像が紹介されるなど、無名な人間でも有名人と関わることが出来ました！
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-accent mb-4">②コツコツ発信を続けてXのポストは4万件超、音声発信は1400本超</h3>
              <p className="mb-4">
                発信をコツコツ続けて積み上げていくのが好きです。今は価値提供マインドを伝え、あなたのセルフプロデュースを後押しするチャンネルというテーマで更新を続けています。
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-accent mb-4">③大切にしたい価値観が決まっている</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold">●活動軸</h4>
                  <p>「価値を発揮できる人が報われる社会」にしたい。</p>
                </div>
                <div>
                  <h4 className="font-bold">●5つの大切にしたい価値観</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>外発的動機より内発的動機</li>
                    <li>Be→Do→Have</li>
                    <li>個性は組み合わせ</li>
                    <li>子どもに背中を見せる</li>
                    <li>3つのフラット</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-accent mb-4">④フルタイム引きこもりで、子どもと遊び放題</h3>
              <p className="mb-4">
                2024年現在6歳と2歳の子供がいるのですが、色々と手のかかるこの時期、僕は完全在宅スタイルで、毎日朝ごはんと夜ご飯を一緒に食べて、お風呂にも入って、寝かしつけるという生活を送ってます。
              </p>
              <p>
                あなたはお子さんと、どんなかかわり方をしていたいですか？
              </p>
            </div>
          </div>
        </section>

        {/* 最後のメッセージ */}
        <section className="vibe-card p-8 text-center">
          <h2 className="text-3xl font-bold mb-6" style={{color: 'var(--clr-black)'}}>
            挑戦を続けます！
          </h2>
          <p className="text-lg mb-6">
            VUCA時代。AI時代。人間として何が出来るか。ワクワクしますね。
          </p>
          <p className="text-xl font-bold text-accent mb-8">
            これから、何らかの形で関われたらいいですね！
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://pessham.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary"
            >
              メインサイトへ
            </a>
            <a 
              href="https://metabatch.ninjametavelive.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              めたばっちNFT
            </a>
          </div>
        </section>
      </div>
    </>
  );
}