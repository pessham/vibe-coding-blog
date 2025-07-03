import type { BlogPost } from '../types/blog';

export const samplePosts: BlogPost[] = [
  {
    _id: 'sample-1',
    _type: 'post',
    title: 'バイブコーディングとは？ - AI時代の新しいプログラミング手法',
    slug: {
      current: 'what-is-vibe-coding'
    },
    author: {
      name: 'ペスハム',
      slug: {
        current: 'pessham'
      }
    },
    mainImage: {
      asset: {
        _ref: 'image-sample123-2000x3000-jpg',
        _type: 'reference'
      }
    },
    categories: [
      {
        title: 'バイブコーディング',
        slug: {
          current: 'vibe-coding'
        }
      },
      {
        title: 'AI開発',
        slug: {
          current: 'ai-development'
        }
      }
    ],
    publishedAt: '2025-07-01T00:00:00Z',
    body: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: '「バイブコーディング（Vibe Coding）」は、AIを活用した新しいプログラミング手法であり、近年注目を集めています。その概念、具体的な実践内容、関連ツール、そして将来への影響について、総合的に解説します。'
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: '## 命名者とその発言'
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'バイブコーディングという言葉は、OpenAIの共同創業者の一人である**Andrej Karpathy（アンドレイ・カルパシー）氏**が2025年2月初旬にX（旧Twitter）に投稿したことがきっかけで広く知られるようになりました。'
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: '彼の発言は、「**There\'s a new kind of coding I call "vibe coding", where you fully give in to the vibes, embrace exponentials, and forget that the code even exists. It\'s possible because the LLMs (e.g. Cursor Composer w Sonnet) are getting too good. Also I just talk to Composer with SuperWhisper…**」というものでした。'
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'これは、「バイブ（雰囲気）に完全に身を任せ、指数関数的な進歩を受け入れ、コードの存在すら忘れてしまう、新しい種類のコーディングを私は『バイブコーディング』と呼んでいる。これは、LLM（大規模言語モデル、例：Sonnetを搭載したCursor Composer）があまりにも優秀になっているから可能になったことだ。私もSuperWhisperを使ってComposerと話すだけだ…」という意味合いです。'
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: '## バイブコーディングとは何か？'
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'バイブコーディングの核心は、**プログラマーがコードの具体的な構文や実装の詳細に深く関わることなく、実現したい機能や目的の「バイブ（雰囲気、意図、感覚）」をAIに伝え、AIがその「バイブ」を汲み取ってコードを生成する**という点にあります。'
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'これは、プログラミングにおける創造的な側面や問題解決に人間が集中し、定型的で時間のかかるコーディング作業はAIに任せる、という役割分担の変化を意味します。'
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: '### 具体的な要素'
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: '- **自然言語による指示（プロンプト）：** コードを直接書く代わりに、「ユーザー登録機能を追加して」「このボタンの色をピンクにして」といったように、人間が普段使う言葉でAIに指示を出します。\n- **AIによるコード生成：** 指示を受けたAIが、その意図に沿ったコードを自動的に生成します。\n- **人間によるレビューと調整：** 生成されたコードの確認、修正、そしてAIへのさらなる指示を通じて、望む結果に近づけていきます。\n- **感覚的なアプローチ：** 細かい仕様にこだわりすぎず、「こういう雰囲気のものが欲しい」「なんとなくこんな感じ」といった感覚的な要望からでも開発を進めることができます。\n- **ツールとの連携：** Cursor Composer（VSCodeのAI機能統合版）やSuperWhisper（音声入力ツール）など、AIと対話しやすいツールを活用することが前提となります。'
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: '## 具体的にどのようなことをしているのか？'
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'バイブコーディングでは、以下のような具体的な活動が行われます。'
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: '### 1. アイデアの言語化とプロンプト設計\n\n- 作りたいアプリや機能のアイデアを、できるだけ具体的に、かつ自然言語でAIに伝えます。\n- 例：「シンプルなToDoリストアプリを作って。タスクの追加・削除と、締切日で色分けする機能を入れて」\n- より良いプロンプトのコツとして、「目的を明確にする」「コンテキスト（参照すべき既存コードや仕様）を与える」「段階的に要求を分ける」「フォーマットや制約条件を伝える」などが挙げられます。'
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: '### 2. AIによるコード生成とリアルタイムプレビュー\n\n- AIがプロンプトに基づいてコードを生成し、多くの場合、その場で動作するプレビューが表示されます。\n- 生成されたコードは、必要なルーティング、バリデーション、データ保存処理などを自動で実装することが可能です。'
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: '### 3. 対話を通じた修正と改善\n\n- 生成されたコードや機能を確認し、意図と異なる点があれば、AIにさらに指示を出して修正を依頼します。\n- 例：「サイドバーのパディングを半分に減らして」「このエラーメッセージをもう少し分かりやすくして」\n- 関連ファイルにまたがるリファクタリングや設計変更も、AIに指示することで自動的に適用されることがあります。'
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: '## ClaudeCodeやGemini CLIなども含めて'
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'バイブコーディングを支える重要な要素として、高度なAIモデルとそれらを活用するためのツールが挙げられます。'
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: '- **Claude Code（クロードコード）：** Anthropic社が開発した大規模言語モデルClaudeをベースにしたコーディング支援ツールです。ターミナル上でClaudeと対話しながらコードを生成・修正していくことが可能です。\n- **Gemini CLI（ジェミニCLI）：** Googleが開発するGeminiモデルを、システム管理や開発タスクに特化したCLI（コマンドラインインターフェース）から利用するものです。'
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'これらのツールは、単にコードスニペットを生成するだけでなく、より大規模なアプリケーションの構築、既存コードの理解、デバッグ、リファクタリングなど、多岐にわたる開発タスクを自然言語の指示でサポートすることを目指しています。'
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: '## 総合的にトータル的にどういったものか'
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'バイブコーディングは、従来のプログラミングパラダイムを大きく変革する可能性を秘めたアプローチです。'
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: '### プログラミングの民主化\n\n専門的なプログラミング知識がない人でも、アイデアさえあれば自分の望むソフトウェアを形にできる可能性が高まります。デザイナーやプロダクトマネージャーといった非技術職の人々が、直接プロトタイプを作成したり、簡単なツールを開発したりできるようになるかもしれません。'
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: '### 開発効率の劇的な向上\n\n定型的なコードの記述や、複雑なライブラリの使い方を調べる時間、デバッグの工数などが大幅に削減されます。これにより、開発者はより創造的な問題解決や、ユーザー価値に直結する機能の設計に時間を割くことができます。'
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: '### AIとの協調作業の深化\n\nAIは単なるツールではなく、共同開発パートナーとしての位置づけが強まります。人間はAIに「指示」を出すだけでなく、AIが生成したコードを「レビュー」し、「フィードバック」を与えることで、より良い結果を導き出します。'
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: '## 今後どんな大きな変化をもたらしていくのか'
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'バイブコーディングは、今後、ソフトウェア開発の世界に以下のようないくつかの大きな変化をもたらすと考えられています。'
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: '### 「非エンジニア」による開発の一般化\n\nプログラミングの敷居が劇的に下がることで、ビジネスサイドの人間やデザイナーなど、これまでコードを書くことが難しかった人々が、自分のアイデアを直接形にできるようになります。これにより、イノベーションの速度が加速し、多様な視点から新しいアプリケーションが生まれることが期待されます。'
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: '### 開発ライフサイクルの大幅な短縮\n\nアイデア出しからプロトタイピング、実装、テストまでの一連のサイクルが、AIの支援によって大幅に短縮されます。これにより、企業は市場の変化に迅速に対応し、新しい製品やサービスをよりスピーディーに提供できるようになります。'
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: '### エンジニアの役割の変革\n\nエンジニアの仕事は、単にコードを書くことから、AIを効果的に活用し、システム全体の設計、アーキテクチャ、品質保証、そしてAIが解決できない複雑な問題に取り組むことにシフトしていきます。\n\n「プロンプトエンジニアリング」や「AIの出力を評価・修正する能力」「複雑なシステムを俯瞰的に見てデバッグする能力」などが、より重要なスキルとなるでしょう。'
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: '## まとめ'
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'バイブコーディングは、人間とAIが協力してソフトウェアを開発する未来の姿を提示しています。これは人間を置き換えるものではなく、人間の能力を増幅させ、より創造的で効率的な開発を可能にする革命的な変化をもたらすと考えられます。\n\nまだバイブコーディングを見たことも聞いたこともないという方も、この新しい開発手法の可能性を理解し、今後のプログラミングの進化に注目していきましょう。'
          }
        ]
      }
    ],
    seo: {
      title: 'バイブコーディングとは？ - AI時代の新しいプログラミング手法【Andrej Karpathy氏提唱】',
      description: 'OpenAI共同創業者Andrej Karpathy氏が提唱した「バイブコーディング」について詳しく解説。AIと協働する新しいプログラミング手法の概念、実践方法、関連ツール、将来への影響まで総合的に紹介します。',
      keywords: ['バイブコーディング', 'Vibe Coding', 'Andrej Karpathy', 'AI開発', 'Claude Code', 'Cursor Composer', 'プロンプトエンジニアリング', 'LLM', 'プログラミング革命']
    }
  }
];