/**
 * @typedef {'subjetiva' | 'objetiva'} QuestionType
 */

/**
 * @typedef {Object} BaseQuestion
 * @property {string} id
 * @property {string} descriptor
 * @property {string} statement
 * @property {Object} [supportText]
 * @property {string} [supportText.title]
 * @property {string} [supportText.content]
 */

/**
 * @typedef {BaseQuestion & { type: 'subjetiva'; answer: string; }} SubjectiveQuestion
 */

/**
 * @typedef {BaseQuestion & { type: 'objetiva'; options: string[]; answer: number; feedback: string; }} ObjectiveQuestion
 */

/**
 * @typedef {SubjectiveQuestion | ObjectiveQuestion} Question
 */

/**
 * @typedef {Object} Momento
 * @property {string} title
 * @property {Question[]} questions
 */

/**
 * @typedef {Object} Nivel
 * @property {Momento[]} momentos
 */

/**
 * @typedef {Object.<string, Nivel>} PercursoData
 */

/**
 * @typedef {Object.<string, PercursoData>} Percursos
 */

/** @type {Percursos} */
export const percursos = {
    "Percurso Formativo I": {
        ensinoFundamental: {
            momentos: [
                {
                    title: "1º Momento: Retomada (Avaliação Diagnóstica)",
                    questions: [
                        {
                            id: "ef-r-q1",
                            descriptor: "D01",
                            type: "subjetiva",
                            supportText: {
                                title: "O Caçador de Pipas (trecho)",
                                content: `Eu me tornei o que sou hoje aos doze anos, em um dia nublado e gélido do inverno de 1975. Lembro do momento exato em que isso aconteceu, quando estava agachado por detrás de uma parede de barro parcialmente desmoronada, espiando o beco que ficava perto do riacho congelado. Foi há muito tempo, mas descobri que não é verdade o que dizem a respeito do passado, essa história de que podemos enterrá-lo. Porque, de um jeito ou de outro, ele sempre consegue escapar.\nOlhando para trás, agora, percebo que passei os últimos vinte e seis anos da minha vida espiando aquele beco deserto. Um dia, no verão passado, meu amigo Rahim Khan me ligou do Paquistão. Pediu que eu fosse vê-lo. Parado ali na cozinha, com o fone no ouvido, sabia muito bem que não era só Rahim Khan que estava do outro lado daquela linha. Era o meu passado de pecados não expiados. Depois que desliguei, fui passear pelo lago Spreckels, na orla norte do parque da Golden Gate.\nO sol do início da tarde cintilava na água onde navegavam dezenas de barquinhos em miniatura, impulsionados por um ventinho ligeiro. Olhei então para cima e vi um par de pipas vermelhas planando no ar, com rabiolas compridas e azuis. Dançavam lá no alto, bem acima das árvores da ponta oeste do parque, por sobre os moinhos, voando lado a lado como um par de olhos fitando San Francisco, a cidade que eu agora chamava de lar.\nE, de repente, a voz de Hassan sussurrou nos meus ouvidos: 'Por você, faria isso mil vezes!' Hassan, o menino de lábio leporino que corria atrás das pipas como ninguém."\n<p class="text-sm text-slate-500 mt-2">HOSSEINI, Khaled. O Caçador de Pipas. Rio de Janeiro: Nova Fronteira, 2005.</p>`
                            },
                            statement: "Segundo o narrador, em que momento específico ele afirma ter se tornado quem é hoje?",
                            answer: "O narrador afirma que se tornou quem é hoje aos doze anos, em um dia nublado e gélido do inverno de 1975, quando estava agachado por trás de uma parede de barro. Essa informação está explicitamente no início do texto."
                        },
                        {
                            id: "ef-r-q2",
                            descriptor: "D03",
                            type: "subjetiva",
                            statement: "No trecho \"descobri que não é verdade o que dizem a respeito do passado, essa história de que podemos enterrá-lo\", o que o narrador quer dizer com a expressão \"enterrar o passado\"?",
                            answer: "A expressão \"enterrar o passado\" é usada de forma metafórica. O narrador quer dizer que não é possível esquecer ou apagar o que foi vivido; o passado, mesmo que tentemos deixá-lo para trás, sempre retorna e nos afeta."
                        },
                        {
                            id: "ef-r-q3",
                            descriptor: "D04",
                            type: "subjetiva",
                            statement: "Por que o narrador menciona que, ao receber o telefonema de Rahim Khan, sentiu que não era apenas ele quem estava do outro lado da linha?",
                            answer: "Porque o telefonema trouxe à tona lembranças e culpas do passado, especialmente ligadas ao personagem Hassan. O narrador interpreta esse telefonema como um chamado do seu \"passado de pecados não expiados\", ou seja, das atitudes que ele ainda não conseguiu perdoar em si mesmo."
                        },
                        {
                            id: "ef-r-q4",
                            descriptor: "D06",
                            type: "subjetiva",
                            statement: "Qual é o tema central abordado nesse trecho de O Caçador de Pipas?",
                            answer: "O tema central é a memória e o peso do passado. O trecho reflete como experiências vividas na infância, especialmente ligadas à culpa e à amizade, continuam a influenciar o presente do narrador."
                        },
                        {
                            id: "ef-r-q5",
                            descriptor: "D14",
                            type: "subjetiva",
                            statement: "No trecho \"O sol do início da tarde cintilava na água onde navegavam dezenas de barquinhos em miniatura\", o narrador apresenta um fato ou uma opinião? Justifique sua resposta.",
                            answer: "O trecho apresenta um fato com elementos descritivos, pois relata algo observável e concreto (o sol brilhando na água e os barquinhos navegando). No entanto, o uso de \"cintilava\" pode carregar uma subjetividade poética, mas ainda assim descreve uma cena real e verificável."
                        },
                        {
                            id: "ef-r-q6",
                            descriptor: "D01",
                            type: "objetiva",
                            supportText: {
                                title: "História do 8 de Março",
                                content: `No dia 8 de março de 1857, operárias de uma fábrica de tecidos, situada na cidade de Nova Iorque, realizaram uma grande greve. Elas ocuparam a fábrica e começaram a reivindicar melhores condições de trabalho, como: redução na carga diária de trabalho para dez horas (as fábricas exigiam 16 horas de trabalho diário), equiparação de salários com os homens (as mulheres recebiam até um terço do salário de um homem para executar o mesmo tipo de trabalho) e tratamento digno no ambiente de trabalho.\nA manifestação foi reprimida com total violência. As mulheres foram trancadas dentro da fábrica, que foi incendiada. Aproximadamente 130 tecelãs morreram carbonizadas, num ato totalmente desumano.\nSomente em 1910, durante uma conferência na Dinamarca, ficou decidido que o 8 de março passaria a ser o "Dia Internacional da Mulher", em homenagem às mulheres que morreram na fábrica em 1857.\n<p class="text-sm text-slate-500 mt-2">Fonte: https://www.suapesquisa.com/dia_internacional_da_mulher.htm Acesso em 02 de maio de 2025. (Texto adaptado)</p>`
                            },
                            statement: "Segundo o texto, qual foi uma das reivindicações das operárias na greve de 1857?",
                            options: [
                                "Aumento da carga diária de trabalho.",
                                "Redução da carga diária de trabalho para dez horas.",
                                "Manutenção dos salários inferiores aos dos homens.",
                                "Aumento da jornada para 16 horas diárias."
                            ],
                            answer: 1,
                            feedback: "A resposta correta é a B. O texto menciona explicitamente que as operárias reivindicavam a 'redução na carga diária de trabalho para dez horas'."
                        },
                        {
                            id: "ef-r-q7",
                            descriptor: "D03",
                            type: "objetiva",
                            supportText: {
                                title: "Metendo o ouvido onde não sou chamada",
                                content: `Sei que não é legal ouvir a conversa dos outros sem ser chamada. Mas quem um dia não prestou atenção em conversas dentro de um ônibus? Às vezes o papo está tão bom que eu fico torcendo para o ônibus ir mais devagar.\nOuvimos de tudo. Desde o rapaz que diz para o chefe que já chegou ao trabalho há horas até a mocinha que conta todas as peripécias de seu final de semana em alto e bom som. Semana passada, um motorista que falava pelos cotovelos comentou que conseguiu comprar a tão sonhada... dentadura!!! E filosofou: “pobre quando enfia a mão no bolso só tira os cinco dedos".\nO pior de tudo é quando, no meio da história, o “narrador” desce no ponto e a gente fica sem saber o final da história.\n<p class="text-sm text-slate-500 mt-2">Fonte: Ferreira, Luciana. "Metendo o ouvido onde não sou chamada". In: Expressões Idiomáticas. Canal CECIERJ.</p>`
                            },
                            statement: "No trecho \"um motorista que falava pelos cotovelos comentou que conseguiu comprar a tão sonhada... dentadura!!!\", a expressão destacada significa que o motorista:",
                            options: [
                                "falava de forma exagerada e incessante.",
                                "gesticulava muito enquanto falava.",
                                "falava com os braços apoiados nos cotovelos.",
                                "falava apenas sobre assuntos pessoais."
                            ],
                            answer: 0,
                            feedback: "A resposta correta é a A. A expressão idiomática 'falar pelos cotovelos' significa falar muito, de forma contínua e, por vezes, exagerada."
                        },
                        {
                            id: "ef-r-q8",
                            descriptor: "D04",
                            type: "objetiva",
                            supportText: {
                                title: "A Escolha Certa",
                                content: `Pedro sempre gostou de aventuras. Desde pequeno, adorava explorar os arredores da sua casa, subir em árvores e correr pelos campos. Mas, naquela tarde, ele enfrentaria um desafio diferente. Sua mãe lhe deu dinheiro para comprar pão e avisou: “Vá direto à padaria e volte rápido, pois logo escurecerá.\" Pedro assentiu com a cabeça e saiu. No caminho, encontrou João, seu melhor amigo, que o chamou para jogar bola. A tentação era grande, mas ele se lembrou das palavras da mãe.\nO céu começava a ficar alaranjado, e Pedro hesitou. Se jogasse um pouco, talvez desse tempo de comprar o pão depois. Mas se atrasasse, sua mãe ficaria preocupada. Pensou por um momento e, com um suspiro, disse a João: \"Fica para outra hora, preciso ir.\"\nQuando chegou em casa, sua mãe sorriu ao ver o pão em suas mãos. “Muito bem, Pedro. Você fez a escolha certa.\" Ele percebeu que, às vezes, pequenas decisões mostram quem realmente somos.\n<p class="text-sm text-slate-500 mt-2">Fonte: Égila Ribeiro / Tudo Sala de Aula</p>`
                            },
                            statement: "O que se pode inferir sobre o caráter de Pedro a partir de sua decisão?",
                            options: [
                                "Ele é impulsivo e desobediente.",
                                "Ele valoriza a confiança de sua mãe.",
                                "Ele prefere se divertir a cumprir responsabilidades.",
                                "Ele não gosta de jogar bola com João."
                            ],
                            answer: 1,
                            feedback: "A resposta correta é a B. Ao hesitar mas decidir cumprir a tarefa dada por sua mãe em vez de brincar, Pedro demonstra que se importa com a responsabilidade e a confiança que sua mãe depositou nele."
                        },
                        {
                            id: "ef-r-q9",
                            descriptor: "D06",
                            type: "objetiva",
                            supportText: {
                                title: "Erro de Português (Oswald de Andrade)",
                                content: `Quando o português chegou\nDebaixo de uma bruta chuva\nVestiu o índio\nQue pena!\n\nFosse uma manhã de sol\nO índio tinha despido\nO português.\n<p class="text-sm text-slate-500 mt-2">Fonte: Andrade, Oswald de. Poesias Reunidas. São Paulo: Globo, 1990.</p>`
                            },
                            statement: "Qual é o tema central do poema?",
                            options: [
                                "A superioridade da cultura indígena.",
                                "A imposição cultural dos colonizadores sobre os indígenas.",
                                "A chegada dos portugueses em um dia chuvoso.",
                                "A moda indígena influenciando os portugueses."
                            ],
                            answer: 1,
                            feedback: "A resposta correta é a B. O poema critica, de forma irônica, o processo de colonização, onde a cultura europeia (representada pelo ato de 'vestir o índio') foi imposta sobre a cultura nativa."
                        },
                        {
                            id: "ef-r-q10",
                            descriptor: "D14",
                            type: "objetiva",
                            supportText: {
                                title: "Selo mede os ruídos domésticos",
                                content: `Adesivo que orienta sobre o nível de ruído de eletrodomésticos, semelhante ao que indica o gasto de energia, começa a integrar o cotidiano dos consumidores.\nSe você comprou aspirador de pó, secador de cabelos ou liquidificador recentemente, deve ter observado um pequeno selo com barras coloridas. Ele orienta sobre o nível do ruído dos eletrodomésticos – quanto menor o número, melhor – e é obrigatório nesses três produtos.\nO Selo Ruído, do Instituto Nacional de Metrologia, Qualidade e Tecnologia (Inmetro), indica, desde fevereiro deste ano, a quantidade de decibéis (unidade de medida do som) do produto. A escala classifica o nível de barulho emitido: vai de 1, para os aparelhos mais silenciosos, a 5, para os mais ruidosos.\n<p class="text-sm text-slate-500 mt-2">Fonte: Gazeta do Povo.</p>`
                            },
                            statement: "Qual das frases a seguir expressa uma opinião?",
                            options: [
                                "\"O Selo Ruído indica a quantidade de decibéis do produto.\"",
                                "\"A escala classifica o nível de barulho emitido de 1 a 5.\"",
                                "\"O selo é obrigatório em aspiradores de pó, secadores de cabelo e liquidificadores.\"",
                                "\"O selo ajuda os consumidores a fazerem escolhas mais conscientes.\""
                            ],
                            answer: 3,
                            feedback: "A resposta correta é a D. As opções A, B e C apresentam fatos verificáveis sobre o Selo Ruído. A opção D expressa um julgamento de valor, uma interpretação sobre a utilidade do selo, caracterizando-se como uma opinião."
                        }
                    ]
                },
                {
                    title: "2º Momento: Ampliação (Avaliação Formativa)",
                    questions: [
                        {
                            id: "ef-a-q1",
                            descriptor: "D01",
                            type: "objetiva",
                            supportText: {
                                title: "As três pipas do vovô",
                                content: `Amanhã é dia de quê? – Meus filhos perguntam, os três ao mesmo tempo.\n- Amanhã é dia de vovô [...] – Eu respondo.\nEles saem saltitantes pela casa brincando e gritando.\n- EBA! Amanhã é dia de vovô.\nComo é bom “ser” criança e esperar pela visita dos avós no “mingo” (Domingo, dia dos avós). Uma semana eles vêm, outra nós vamos.\nNeste dia, o vovô veio cheio de papéis, cola e tesoura. É dia de vovô e também de churrasco. OBA!\nA surpresa do dia. O Vovô faria pipas para as crianças. Depois do churrasco, o vovô sentou, rodeado de seus trinetos para confeccionar as pipas. Sentados lá na garagem, ficaram a tarde toda fazendo uma pipa, enquanto ele resgatava gostosas memórias de sua própria infância. Uma tarde não seria suficiente para as três pipas. Mas a diversão já estava preparada. Só faltava o vento!\nCadê o vento?\nNaquela tarde muito quente de verão não tinha vento, mas não impediu que a turma se divertisse da mesma forma. Foi preciso mais um domingo para o término das pipas. E o tão esperado dia de vento apareceu, afinal. [...]\nComo é bom \"ter\" crianças e viver toda esta alegria.\nPor isso, não me canso de agradecer:\n- Obrigada. Viva o Vovô com suas três pipas!\n<p class="text-sm text-slate-500 mt-2">DEXHEIMER, Aline. As três pipas do vovô. In: QDivertido.</p>`
                            },
                            statement: "Que fato deu origem a esse texto?",
                            options: [
                                "As crianças brincarem e saltitarem pela casa.",
                                "As crianças rodearem seu avô para confeccionarem as pipas.",
                                "O Vovô chegar cheio de papéis e tesoura na casa dos trinetos.",
                                "O Vovô resgatar as memórias de sua infância."
                            ],
                            answer: 2,
                            feedback: ""
                        },
                        {
                            id: "ef-a-q2",
                            descriptor: "D04",
                            type: "objetiva",
                            supportText: {
                                title: "A Última Crônica (Fernando Sabino)",
                                content: `A caminho de casa, entro num botequim da Gávea para tomar um café junto ao balcão. Na realidade, estou adiando o momento de escrever. A perspectiva me assusta. Gostaria de estar inspirado, de coroar com êxito mais um ano nesta busca do pitoresco ou do irrisório no cotidiano de cada um. [...]\nAo fundo do botequim, um casal de pretos acaba de sentar-se, numa das últimas mesas de mármore ao longo da parede de espelhos. A compostura da humildade, na contenção de gestos e palavras, deixa-se acentuar pela presença de uma negrinha de seus três anos, laço na cabeça, toda arrumadinha no vestido pobre, que se instalou também à mesa: mal ousa balançar as perninhas curtas ou correr os olhos grandes de curiosidade ao redor. [...]\nSão três velinhas brancas, minúsculas, que a mãe espeta caprichosamente na fatia do bolo. E enquanto ela serve a Coca-Cola, o pai risca o fósforo e acende as velas. Como a um gesto ensaiado, a menininha repousa o queixo no mármore e sopra com força, apagando as chamas.\n<p class="text-sm text-slate-500 mt-2">Fonte: Sabino, Fernando. A Última Crônica. Rio de Janeiro: Record, 1995.</p>`
                            },
                            statement: "O que se pode inferir sobre a situação financeira da família descrita no texto?",
                            options: [
                                "São ricos e frequentam o botequim regularmente.",
                                "São de classe média e celebram com frequência.",
                                "São turistas conhecendo a cidade.",
                                "São humildes e fazem um esforço para comemorar."
                            ],
                            answer: 3,
                            feedback: ""
                        },
                        {
                            id: "ef-a-q3",
                            descriptor: "D06",
                            type: "objetiva",
                            supportText: {
                                title: "Críticas sobre o filme 'Alvin e os Esquilos: Na Estrada'",
                                content: `Texto 1\n"Alvin e os Esquilos: Na Estrada" não é exatamente aquilo que eu chamo de um bom filme e não há nada de bom acontecendo no departamento visual; no entanto, para aqueles que vão levar as crianças ao cinema em uma tarde qualquer, você poderia encontrar coisa muito pior do que este filme.\n<span class="italic text-slate-500">- Jordan Hoffman</span>\n\nTexto 2\n[...] É brega, mas o que mais poderíamos esperar de um filme com esquilos animados que falam e cantam?\n<span class="italic text-slate-500">- Kayla Samoy</span>\n<p class="text-sm text-slate-500 mt-2">Disponível em: <http://www.adorocinema.com/filmes/filme-222165/criticas/imprensa/>.</p>`
                            },
                            statement: "Sobre o filme \"Alvin e os Esquilos\", os autores desses textos",
                            options: [
                                "fazem uma crítica negativa.",
                                "expressam ideias confusas.",
                                "apresentam opiniões idênticas.",
                                "mostram opiniões diferentes."
                            ],
                            answer: 0,
                            feedback: ""
                        },
                        {
                            id: "ef-a-q4",
                            descriptor: "D03",
                            type: "objetiva",
                            supportText: {
                                title: "O homem; As viagens (Carlos Drummond de Andrade)",
                                content: `O homem, bicho da Terra tão pequeno\nchateia-se na Terra\nlugar de muita miséria e pouca diversão,\nfaz um foguete, uma cápsula, um módulo\ntoca para a Lua\ndesce cauteloso na Lua\npisa na Lua\nplanta bandeirola na Lua\nexperimenta a Lua\ncoloniza a Lua\nciviliza a Lua\nhumaniza a Lua.`
                            },
                            statement: "A expressão \"humaniza a Lua\" sugere que o homem:",
                            options: [
                                "Transforma a Lua em um ambiente natural.",
                                "adapta a Lua às necessidades humanas.",
                                "destrói as características originais da Lua.",
                                "abandona a Terra em busca de novos lares."
                            ],
                            answer: 1,
                            feedback: ""
                        },
                        {
                            id: "ef-a-q5",
                            descriptor: "D03",
                            type: "objetiva",
                            supportText: {
                                title: "Duas Almas",
                                content: `Ó tu, que vens de longe, ó tu, que vens cansada,\nentra, e, sob este teto encontrarás carinho:\nEu nunca fui amado, e vivo tão sozinho,\nvives sozinha sempre, e nunca foste amada...\n\nA neve anda a branquear, lividamente, a estrada,\ne a minha alcova tem a tepidez de um ninho.\nEntra, ao menos até que as curvas do caminho\nse banhem no esplendor nascente da alvorada.\nE amanhã, quando a luz do sol dourar, radiosa,\nessa estrada sem fim, deserta, imensa e nua,\npodes partir de novo, ó nômade formosa!\nJá não serei tão só, nem irás tão sozinha:\nHá de ficar comigo uma saudade tua...\nHás de levar contigo uma saudade minha...\n<p class="text-sm text-slate-500 mt-2">In: WAMOSY, Alceu. Poesia completa. Introd. Cícero Lopes. Porto Alegre: Alves Ed.: IEL: EDIPUCRS, 1994. p.14</p>`
                            },
                            statement: "No verso \"e a minha alcova tem a tepidez de um ninho\", a expressão \"tepidez de um ninho\" sugere que o ambiente é:",
                            options: [
                                "Frio e desconfortável.",
                                "Quente e abafado.",
                                "Aconchegante e acolhedor.",
                                "Pequeno e apertado."
                            ],
                            answer: 2,
                            feedback: ""
                        },
                        {
                            id: "ef-a-q6",
                            descriptor: "D03",
                            type: "objetiva",
                            supportText: {
                                title: "Poema de Sete Faces (Carlos Drummond de Andrade)",
                                content: `Quando nasci, um anjo torto\ndesses que vivem na sombra\ndisse: Vai, Carlos! ser gauche na vida.\nAs casas espiam os homens\nque correm atrás de mulheres.\nA tarde talvez fosse azul,\nnão houvesse tantos desejos.\nO bonde passa cheio de pernas:\npernas brancas pretas amarelas.\nPara que tanta perna, meu Deus, pergunta meu coração.\nPorém meus olhos\nnão perguntam nada.\nO homem atrás do bigode\né sério, simples e forte.\nQuase não conversa.\nTem poucos, raros amigos\no homem atrás dos óculos e do bigode,\nmeu Deus, por que me abandonaste\nse sabias que eu não era Deus\nse sabias que eu era fraco.\nMundo mundo vasto mundo,\nse eu me chamasse Raimundo\nseria uma rima, não seria uma solução.\nMundo mundo vasto mundo,\nmais vasto é meu coração.\nEu não devia te dizer\nmas essa lua\nmas esse conhaque\nbotam a gente comovido como o diabo.\n<p class="text-sm text-slate-500 mt-2">Fonte: Andrade, Carlos Drummond de. Alguma Poesia. Rio de Janeiro: José Olympio, 1930.</p>`
                            },
                            statement: "No verso \"Vai, Carlos! ser gauche na vida\", o que significa a palavra \"gauche\"?",
                            options: [
                                "Elegante.",
                                "Desajeitado.",
                                "Corajoso.",
                                "Alegre"
                            ],
                            answer: 1,
                            feedback: ""
                        },
                        {
                            id: "ef-a-q7",
                            descriptor: "D03",
                            type: "objetiva",
                            supportText: {
                                title: "Todo ponto de vista é a vista de um ponto (Leonardo Boff)",
                                content: `Ler significa reler e compreender, interpretar. Cada um lê com os olhos que tem. E interpreta a partir de onde os pés pisam. Todo ponto de vista é um ponto. Para entender como alguém lê, é necessário saber como são seus olhos e qual é sua visão de mundo. Isso faz da leitura sempre uma releitura.\nA cabeça pensa a partir de onde os pés pisam. Para compreender, é essencial conhecer o lugar social de quem olha. Vale dizer: como alguém vive, com quem convive, que experiências tem, em que trabalha, que desejos alimenta, como assume os dramas da vida e da morte e que esperanças o animam. Isso faz da compreensão sempre uma interpretação.\n<p class="text-sm text-slate-500 mt-2">Fonte: https://institutoayrtonsenna.org.br/</p>`
                            },
                            statement: "A frase \"A cabeça pensa a partir de onde os pés pisam\" indica que:",
                            options: [
                                "o pensamento é influenciado pelo local onde a pessoa está.",
                                "o cérebro controla os movimentos dos pés.",
                                "a compreensão depende exclusivamente do ambiente físico.",
                                "a leitura é uma atividade física"
                            ],
                            answer: 0,
                            feedback: ""
                        },
                        {
                            id: "ef-a-q8",
                            descriptor: "D14",
                            type: "objetiva",
                            supportText: {
                                title: "Crianças são achadas vivas na selva 40 dias após queda de avião na Colômbia",
                                content: `Irmãos sobreviveram na Amazônia e foram resgatados por militares. A mãe delas e mais dois adultos morreram no acidente, em 1º de maio. As quatro crianças que estavam desaparecidas após a queda de um avião na Colômbia há 40 dias foram encontradas com vida nesta sexta-feira (9). А informação foi confirmada pelas Forças Armadas da Colômbia e pelo presidente Gustavo Petro. “É um grande presente para a Colômbia, um presente para a vida, nossos meninos cuidados pela selva\", disse Petro em uma entrevista momentos após anunciar o resgate em um post numa rede social. As autoridades não deram detalhes sobre o estado de saúde dos quatro irmãos resgatados, que estão sob cuidados médicos. Segundo a imprensa colombiana, as crianças estão desidratadas, com picadas de insetos e levemente feridas, especialmente nos pés, porque percorreram longas distâncias descalças.\nO presidente colombiano disse que o “aprendizado\" de viver na selva ajudou as crianças indígenas. \"Eles se defenderam sozinhos, foi o aprendizado de viver na selva que as salvou\", afirmou. \"São exemplos de sobrevivência total que ficará para a história. Essas crianças são hoje os filhos da paz\". O ministro da Defesa, Iván Velázquez, disse que os irmãos podem ser levados a um hospital militar em Bogotá caso os médicos permitam. No dia 17 de maio, Gustavo Petro chegou a anunciar o resgate das quatro crianças, mas depois negou e se retratou. As Forças Armadas seguiam com as buscas em mata fechada.\n<p class="text-sm text-slate-500 mt-2">Fonte: https://g1.globo.com/</p>`
                            },
                            statement: "No trecho: “É um grande presente para a Colômbia, um presente para a vida, nossos meninos cuidados pela selva\", a expressão do presidente Gustavo Petro é um exemplo de:",
                            options: [
                                "Fato, pois descreve a situação das crianças após o resgate.",
                                "Fato, pois relata a confirmação oficial do resgate pelas autoridades.",
                                "Opinião, pois expressa um julgamento pessoal sobre o acontecimento.",
                                "Opinião, pois apresenta dados objetivos sobre o estado de saúde das crianças."
                            ],
                            answer: 2,
                            feedback: ""
                        },
                        {
                            id: "ef-a-q9",
                            descriptor: "D14",
                            type: "objetiva",
                            supportText: {
                                title: "De olho nas árvores",
                                content: `A questão da manutenção de árvores em áreas urbanas merece detida atenção. Se por um lado é importante ter cada vez mais áreas verdes compondo a paisagem urbana, no que Goiânia se destaca nacionalmente, por outro é fundamental a manutenção preventiva destas áreas. Só assim é possível minimizarmos os casos de acidentes causados pela queda de árvores.\nReportagem nessa edição dá um contorno numérico ao problema.\nNuma sequência de dois dias chuvosos, mais de 90 árvores caíram na capital, segundo levantamento da Companhia de Urbanização de Goiânia (Comurg). Trata-se de um risco também presente na estiagem, visto que, de janeiro a agosto, foram 464 árvores podadas ou retiradas. A Prefeitura trabalha na readequação de algumas árvores, providência que não pode ser negligenciada.\nÉ preciso investir na manutenção preventiva constante. Um tratamento adequado reduz drasticamente o número de árvores condenadas. Em grande parte das vezes, isso ocorre porque as árvores não recebem os cuidados necessários, são plantadas de forma incorreta ou em locais indevidos.\nÉ hora, pois, de reforçar essa vigilância.\n<p class="text-sm text-slate-500 mt-2">Disponível em: https://www.opopular.com.br/</p>`
                            },
                            statement: "O trecho “É preciso investir na manutenção preventiva constante. Um tratamento adequado reduz drasticamente o número de árvores condenadas.”, apresenta uma/um:",
                            options: [
                                "Opinião, pois as informações sobre a redução do número de árvores condenadas podem ser comprovadas.",
                                "Fato, porque o autor apresenta comentários sobre a manutenção preventiva das árvores condenadas.",
                                "Fato, porque apresenta informações sobre o número de árvores condenadas.",
                                "Opinião, pois autor opina sobre a manutenção preventiva das árvores."
                            ],
                            answer: 3,
                            feedback: ""
                        },
                        {
                            id: "ef-a-q10",
                            descriptor: "D14",
                            type: "objetiva",
                            supportText: {
                                title: "Moradores de \"ilha dos gatos\" pedem ajuda para comprar ração",
                                content: `Na ilha de Aoshima, conhecida como a “ilha dos gatos\", ao sul do Japão, quem manda são os felinos. Lá, os bichanos são seis vezes mais numerosos que pessoas e a população (humana) do local é inteiramente responsável pelos cuidados, saúde e bem-estar dos animais. Foi então que uma notícia terrível se espalhou: por conta de condições climáticas desfavoráveis, a entrega de ração teve que ser suspendida. Como conta o BoredPanda, a ilha não possui lojas de ração ou comida – todas as compras são feitas por barco, dependendo da necessidade dos cidadãos e, com o clima ruim, os moradores se viram em uma sinuca.\nA solução, claro, estava na internet. Ao perceberem que as reservas de ração estavam baixando drasticamente, os moradores de Aoshima começaram a fazer pedidos pelo Twitter, para que pessoas colaborassem enviando pacotes de ração para a ilha. Poucos dias depois, a cidade estava abarrotada de doações. Os tweets que se seguiram mandavam a mensagem oposta: a ilha pede que os internautas parem de enviar ração, pois já eram suficientes até abril e não havia mais lugar para guardar tantas doações.\n<p class="text-sm text-slate-500 mt-2">Disponível em: http://revistagalileu.globo.com/</p>`
                            },
                            statement: "Em qual das citações abaixo está expresso apenas um fato?",
                            options: [
                                "\"Foi então que uma notícia terrível se espalhou: por conta de condições climáticas desfavoráveis, a entrega de ração teve que ser suspendida\".",
                                "\"Como conta o BoredPanda, a ilha não possui lojas de ração ou comida todas as compras são feitas por barco, dependendo da necessidade dos cidadãos – ”.",
                                "\"(...) - e, com o clima ruim, os moradores se viram em uma sinuca.\"",
                                "“A solução, claro, estava na internet. Ao perceberem que as reservas de ração estavam baixando drasticamente,(...)\"."
                            ],
                            answer: 1,
                            feedback: ""
                        }
                    ]
                },
                {
                    title: "3º Momento: Consolidação (Avaliação Comparativa)",
                    questions: [
                        {
                            id: "ef-c-q1",
                            descriptor: "D01",
                            type: "objetiva",
                            supportText: {
                                title: "O Disfarce dos Bichos",
                                content: `Você já tentou pegar um galhinho seco e ele virou bicho, abriu asas e voou? Se isso aconteceu, é porque o graveto era um inseto conhecido como “bicho-pau". Ele é tão parecido com o galhinho que pode ser confundido com o graveto.\nExistem lagartas que se parecem com raminhos de plantas. E há grilos que imitam folhas. Muitos animais ficam com a cor e a forma dos lugares em que estão. Eles fazem isso para se defender dos inimigos ou capturar outros bichos que servem de alimento. Esses truques são chamados de mimetismo, isto é, imitação.\nO cientista inglês Henry Walter Bates foi quem descobriu o mimetismo. Ele passou 11 anos na selva amazônica estudando os animais.\n<p class="text-sm text-slate-500 mt-2">Fonte: Monteiro, José Maviael. "Bichos que usam disfarces".</p>`
                            },
                            statement: "De acordo com o texto, o que é mimetismo?",
                            options: [
                                "A capacidade de voar dos insetos.",
                                "O hábito de se alimentar de outros bichos.",
                                "A habilidade de imitar o ambiente para se proteger ou capturar presas.",
                                "A transformação de insetos em galhos secos."
                            ],
                            answer: 2,
                            feedback: ""
                        },
                        {
                            id: "ef-c-q2",
                            descriptor: "D01",
                            type: "objetiva",
                            supportText: {
                                title: "A Assembleia dos Ratos (Monteiro Lobato)",
                                content: `Um gato de nome Faro-Fino causava tanto estrago na rataria de uma casa velha que os sobreviventes, sem ânimo de sair das tocas, estavam a ponto de morrer de fome.\nDiante da gravidade da situação, resolveram reunir-se em assembleia para discutir o problema. Aproveitaram uma noite em que Faro-Fino andava pelos telhados, fazendo sonetos à lua.\nAcho - disse um deles que o meio de nos defendermos de Faro-Fino é atar-lhe um guizo ao pescoço. Assim, quando ele se aproximar, o guizo o denunciará, e poderemos fugir a tempo.\nPalmas e bravos saudaram a ideia. O projeto foi aprovado com entusiasmo. Apenas um rato mais velho pediu a palavra e disse:\n– Está tudo muito certo. Mas quem vai amarrar o guizo no pescoço de Faro-Fino?\nSilêncio geral. Um alegou não saber dar nó. Outro, que não era tolo. Todos, que não tinham coragem. E a assembleia dissolveu-se em meio a geral consternação.\nDizer é fácil - fazer é que são elas!\n<p class="text-sm text-slate-500 mt-2">Fonte: Lobato, Monteiro. "A Assembleia dos Ratos". In: Livro das Virtudes. Rio de Janeiro: Nova Fronteira, 1995.</p>`
                            },
                            statement: "De acordo com o texto, qual foi a proposta apresentada na assembleia dos ratos para se defenderem de Faro-Fino?",
                            options: [
                                "Mudar-se para outra casa.",
                                "Atar um guizo ao pescoço do gato.",
                                "Atacar Faro-Fino em grupo.",
                                "Esconder-se em buracos mais profundos."
                            ],
                            answer: 1,
                            feedback: ""
                        },
                        {
                            id: "ef-c-q3",
                            descriptor: "D03",
                            type: "objetiva",
                            supportText: {
                                title: "Todo ponto de vista é a vista de um ponto (Leonardo Boff)",
                                content: `Ler significa reler e compreender, interpretar. Cada um lê com os olhos que tem. E interpreta a partir de onde os pés pisam. Todo ponto de vista é um ponto. Para entender como alguém lê, é necessário saber como são seus olhos e qual é sua visão de mundo. Isso faz da leitura sempre uma releitura.\nA cabeça pensa a partir de onde os pés pisam. Para compreender, é essencial conhecer o lugar social de quem olha. Vale dizer: como alguém vive, com quem convive, que experiências tem, em que trabalha, que desejos alimenta, como assume os dramas da vida e da morte e que esperanças o animam. Isso faz da compreensão sempre uma interpretação.\n<p class="text-sm text-slate-500 mt-2">Fonte: https://institutoayrtonsenna.org.br/</p>`
                            },
                            statement: "No trecho \"Cada um lê com os olhos que tem”, a expressão “com os olhos que tem” sugere:",
                            options: [
                                "a interpretação baseada nas experiências individuais.",
                                "a capacidade visual de cada pessoa.",
                                "a necessidade de exames oftalmológicos.",
                                "a leitura literal dos textos."
                            ],
                            answer: 0,
                            feedback: ""
                        },
                        {
                            id: "ef-c-q4",
                            descriptor: "D03",
                            type: "objetiva",
                            supportText: {
                                title: "Pesquisa on-line mapeia temperamento de cães brasileiros",
                                content: `Iniciativa de universidades brasileiras e colaboradores internacionais pretende aprimorar ciência do comportamento canino. O Centro de Pesquisa Aplicada em Bem-Estar e Comportamento Humano (CPBEC), sediado no Instituto de Psicologia (IP) da USP, está desenvolvendo uma pesquisa a respeito do temperamento dos cães. Encabeçada pelas universidades brasileiras – USP, Unifesp, PUC-MG e Unip com coordenação da professora Carine Savalli e apoiada por colaboradores exteriores a pesquisa tem como objetivo a colaboração para a ciência do comportamento canino através da observação de aspectos como comportamentos agressivos, ansiedade, medo, obediência, excitabilidade e avaliação do comportamento dos animais diante de situações agradáveis ou não. O questionário pode ser respondido on-line e demanda aproximadamente 20 minutos para ser completado. [...] As questões abordam características do animal, tratamento diário e ambiente de convívio.\n<p class="text-sm text-slate-500 mt-2">REDAÇÃO. Pesquisa on-line mapeia temperamento de cães brasileiros. In: USP. 2018.</p>`
                            },
                            statement: "De acordo com esse texto, a palavra \"Encabeçada” (l. 4) significa",
                            options: [
                                "conhecida.",
                                "desajustada.",
                                "ultrapassada.",
                                "liderada."
                            ],
                            answer: 3,
                            feedback: ""
                        },
                        {
                            id: "ef-c-q5",
                            descriptor: "D03",
                            type: "objetiva",
                            supportText: {
                                title: "Beija-flores conseguem ver mais cores do que nós, revela estudo",
                                content: `Talvez você já tenha tentado imaginar uma cor nova, que nunca viu. Não é fácil – não porque a tal cor não exista, mas porque o seu corpo não tem capacidade de enxergá-la. Essa é uma diferença entre nós e os beija-flores. Uma pesquisa da Universidade de Princeton revelou que esses pássaros enxergam cores que nós nem conseguimos imaginar. Os humanos conseguem perceber as cores graças a três tipos de células presentes no fundo do globo ocular, chamadas cones. Cada uma é responsável por captar um tamanho diferente de onda eletromagnética e, portanto, uma tonalidade [...]. Os beija-flores, por outro lado, possuem quatro tipos de cones, um a mais que os humanos. Esse tipo extra de célula permite que eles enxerguem ondas ultravioleta, bem como a combinação de ultravioleta com vermelho, verde e azul. Para testar a capacidade de distinção dos pássaros, a equipe de cientistas usou luzes de LED que emitiam quatro comprimentos de onda: vermelho, azul, verde e ultravioleta. Cada cor era colocada ao lado de dois bebedouros: um deles continha água, e o outro, água com açúcar. [...].\n<p class="text-sm text-slate-500 mt-2">ROSSINI, Maria Clara. Beija-flores conseguem ver mais cores do que nós, revela estudo. In: Superinteressante. 2020.</p>`
                            },
                            statement: "Qual trecho apresenta a informação principal desse texto?",
                            options: [
                                "\"Talvez você já tenha tentado imaginar uma cor nova, ...\". (l. 1)",
                                "\"Uma pesquisa da Universidade de Princeton revelou que esses pássaros enxergam cores que nós nem conseguimos imaginar. \". (l. 3-4)",
                                "\"Os humanos conseguem perceber as cores graças a três tipos de células presentes no fundo do globo ocular, chamadas cones. \". (l. 5-6)",
                                "\"Cada cor era colocada ao lado de dois bebedouros: ...\". (Ι. 12-13)."
                            ],
                            answer: 1,
                            feedback: ""
                        },
                        {
                            id: "ef-c-q6",
                            descriptor: "D04",
                            type: "objetiva",
                            supportText: {
                                title: "O que é Riqueza e Pobreza",
                                content: `Um dia, um pai de família rica levou seu filho para viajar para o interior com o firme propósito de mostrar quanto as pessoas podem ser pobres.\nEles passaram um dia e uma noite na fazenda de uma família muito pobre.\nQuando retornaram da viagem, o pai perguntou ao filho:\n\"- Como foi a viagem?\"\n\"- Muito boa, Papai!\"\n\"- Você viu como as pessoas podem ser pobres?\"\n\"- Sim.\" Respondeu o menino.\n\"- E o que você aprendeu?\", o pai perguntou.\nO filho respondeu:\n\"- Eu vi que nós temos um cachorro em casa, e eles têm quatro.\nNós temos uma piscina que alcança o meio do jardim; eles têm um riacho que não tem fim.\nNós temos uma varanda coberta e iluminada com luz; eles têm um céu imenso com as estrelas e a lua.\nNosso quintal vai até o portão de entrada; eles têm uma floresta inteira.\"\nO pequeno garoto estava acabando de responder quando seu pai ficou estupefato pelo que o filho acrescentou:\n\"- Obrigado, pai, por me mostrar o quanto nós somos pobres...\"\n<p class="text-sm text-slate-500 mt-2">Fonte: iomere.sc.gov.br</p>`
                            },
                            statement: "A principal inferência que se pode fazer a partir da resposta do menino é que:",
                            options: [
                                "Ele deseja morar no interior.",
                                "Ele ficou triste com a pobreza da família visitada.",
                                "Ele percebeu que a verdadeira riqueza não está nos bens materiais.",
                                "Ele quer ter mais cachorros em casa."
                            ],
                            answer: 2,
                            feedback: ""
                        },
                        {
                            id: "ef-c-q7",
                            descriptor: "D04",
                            type: "objetiva",
                            statement: "O uso repetido das expressões “nós temos” e “eles têm” no texto sobre Riqueza e Pobreza serve para:",
                            options: [
                                "Destacar a superioridade da família rica.",
                                "Comparar as posses materiais das duas famílias.",
                                "Mostrar que ambas as famílias têm as mesmas coisas.",
                                "Enfatizar que a família do interior é mais pobre."
                            ],
                            answer: 1,
                            feedback: ""
                        },
                        {
                            id: "ef-c-q8",
                            descriptor: "D06",
                            type: "objetiva",
                            supportText: {
                                title: "RETRATO",
                                content: `Eu não tinha este rosto de hoje, assim calmo, assim triste, assim magro, nem estes olhos tão vazios, nem o lábio amargo. Eu não tinha estas mãos sem força, tão paradas e frias e mortas; eu não tinha este coração que nem se mostra. Eu não dei por esta mudança, Tão simples, tão certa, tão fácil: Em que espelho ficou perdida a minha face?\n<p class="text-sm text-slate-500 mt-2">MEIRELES, Cecília: poesia. Por Darcy Damasceno. Rio de Janeiro, Agir, 1974. p 19-20. 1.</p>`
                            },
                            statement: "O tema do texto é",
                            options: [
                                "a consciência súbita sobre o envelhecimento.",
                                "a decepção por encontrar-se já fragilizada.",
                                "a falta de alternativa face ao envelhecimento.",
                                "a recordação de uma época de juventude.",
                                "a revolta diante do espelho."
                            ],
                            answer: 0,
                            feedback: ""
                        },
                        {
                            id: "ef-c-q9",
                            descriptor: "D06",
                            type: "objetiva",
                            supportText: {
                                title: "Euforia dos gatos",
                                content: `Gatos podem ser engraçados. Um dos comportamentos mais curiosos ocorre quando eles se deparam com uma planta que recebe o nome de erva-gateira. Basta uma cheiradinha para esses animais começarem a rolar, numa euforia que pode durar vários minutos.\n<p class="text-sm text-slate-500 mt-2">SÃO PEDRO, Vinícius. Euforia dos gatos. Ciência Hoje das Crianças, 2022.</p>`
                            },
                            statement: "Nesse texto, o termo “curiosos”, em \"Um dos comportamentos mais curiosos\", foi utilizado para:",
                            options: [
                                "sugerir que os gatos gostam de observar as plantas.",
                                "revelar que os gatos conseguem reconhecer a erva-gateira.",
                                "demonstrar que os gatos são animais cuidadosos com as plantas.",
                                "indicar que a atitude dos gatos com a erva-gateira é surpreendente."
                            ],
                            answer: 3,
                            feedback: ""
                        },
                        {
                            id: "ef-c-q10",
                            descriptor: "D14",
                            type: "objetiva",
                            supportText: {
                                title: "O Castelo com a parede verde",
                                content: `A peça começa com Marina, uma menina que ama florestas, caminhando.\nMARINA (com a voz animada): HOJE É UM GRANDE DIA! Finalmente vou conhecer o famoso Castelo com a parede verde. Não vejo a hora de encontrar os meus amigos para irmos, juntos, em mais essa aventura. Dora, uma árvore, cumprimenta Marina.\nDORA (com a voz doce): Bom dia, minha gentil Marina! Gosto tanto de te ver passando por aqui! Aonde você está indo?\nMARINA: Oláááá, Dorinha! Estou indo encontrar os meus amigos, hoje iremos conhecer o Castelo com a parede verde!\nDORA (com a voz assustada): Marina, alguém já te contou a lenda do Castelo? Talvez vocês devam reconsiderar essa visita.\nMARINA (demonstrando curiosidade): Qual lenda?\nDORA (com voz de suspense): Dizem que mora uma princesa no castelo e que as paredes ficaram verdes após as suas lágrimas caírem no chão, da mais alta torre, fazendo brotar, então, várias plantas que cobriram todas as laterais do palácio. [...]\n<p class="text-sm text-slate-500 mt-2">Fonte: Elaboração própria (TRIEduc)</p>`
                            },
                            statement: "Em um texto dramático, as rubricas são indicações cênicas que servem para orientar o ator durante a encenação. Na segunda fala de Dora, é indicada, na rubrica, determinada entonação de voz que ela deve usar para falar com Marina. Essa entonação foi utilizada para:",
                            options: [
                                "indicar incredulidade por Marina desconhecer a lenda sobre o castelo.",
                                "convencer Marina a reconsiderar a visita que queria fazer ao castelo.",
                                "demonstrar desgosto com a sujeira das paredes do castelo.",
                                "mostrar que Marina deveria ir para o castelo escondida."
                            ],
                            answer: 1,
                            feedback: ""
                        },
                        {
                            id: "ef-c-q11",
                            descriptor: "D14",
                            type: "objetiva",
                            supportText: {
                                title: "LEI Nº 11.977, DE 25 DE AGOSTO DE 2005",
                                content: `Capítulo II\nDos Animais Silvestres\nArtigo 3º - Os animais silvestres deverão, prioritariamente, permanecer em seu habitat natural.\n§ 1º - Para a efetivação deste direito, seu habitat deve ser, o quanto possível, preservado e protegido de qualquer violação, interferência ou impacto negativo que comprometa sua condição de sobrevivência.\n§ 2º As intervenções no meio que provoquem impacto negativo devem ser reparadas ou compensadas por meio de indenização revertida diretamente para o Programa de Proteção à Fauna Silvestre do Estado, previsto no artigo 6º desta lei.\nArtigo 4º - As pessoas físicas ou jurídicas mantenedoras de animais silvestres exóticos, mantidos em cativeiro, residentes ou em trânsito, nos Municípios do Estado, que coloquem em risco a segurança da população, deverão obter a competente autorização junto ao Poder Público Municipal, sem prejuízo das demais exigências legais.\nArtigo 5º - Fica proibida a introdução de animais pertencentes à fauna silvestre exótica dentro do território do Estado.\n<p class="text-sm text-slate-500 mt-2">SÃO PAULO (Estado). Lei nº 11.977, de 25 de agosto de 2005.</p>`
                            },
                            statement: "O trecho apresentado pertence a um texto normativo sobre animais silvestres. O objetivo comunicativo desse texto é:",
                            options: [
                                "descrever os cenários em que vivem os animais florestais.",
                                "contar uma história em que os animais são personagens.",
                                "apresentar um conjunto de regras a serem seguidas.",
                                "mostrar dados extraídos de uma pesquisa científica."
                            ],
                            answer: 2,
                            feedback: ""
                        },
                        {
                            id: "ef-c-q12",
                            descriptor: "D14",
                            type: "objetiva",
                            supportText: {
                                title: "Gato herói salva vida de donos ao acordá-los durante incêndio",
                                content: `Um gato virou herói na Pensilvânia (EUA) por ter alertado seus donos sobre um incêndio que começou durante a madrugada dentro da casa onde eles vivem.\nSegundo os bombeiros [...], o casal estava dormindo, quando por volta de 1h30 de sexta-feira, o gato subiu na cama para acordá-los quando notou algo estranho na casa.\n'O gato voou para dentro do quarto. O casal achou aquilo esquisito e abriu a porta do banheiro. Foi quando notou o fogo\", contou o bombeiro Tom Perciavalle. [...]\nGraças ao gato, os moradores conseguiram deixar a casa em tempo. [...]\n"Esse gato vai ter de ganhar um petisco extra. [...]", brincou o bombeiro. [...]"\n<p class="text-sm text-slate-500 mt-2">Disponível em: <https://noticias.uol.com.br/tabloide/ultimas-noticias/tabloideanas/2018/03/13/gato-heroi-salva-vida-de-donos-ao-acorda-los-durante-incendio.htm>.</p>`
                            },
                            statement: "Esse texto é",
                            options: [
                                "um anúncio.",
                                "um diário.",
                                "uma fábula.",
                                "uma notícia."
                            ],
                            answer: 3,
                            feedback: ""
                        }
                    ]
                }
            ]
        },
        ensinoMedio: {
            momentos: [
                {
                    title: "1º Momento: Retomada (Avaliação Diagnóstica)",
                    questions: [
                        {
                            id: "em-r-q1",
                            descriptor: "D01",
                            type: "subjetiva",
                            supportText: {
                                title: "A importância da leitura na formação da cidadania",
                                content: `A leitura é algo essencial na formação dos cidadãos, desenvolve a criatividade, aumenta o vocabulário, aprimora o conhecimento, além de ajudar na concentração e na construção textual. Sabendo dessa importância o Sesc AM incentiva essa prática, desde 1986 a instituição realiza feiras de livros em diversas localidades do Amazonas. Ao longo dessas décadas milhares de leitores tiveram a oportunidade de se aproximar da literatura de maneira lúdica e criativa.\nÉ também uma prática social indispensável na formação humana, pois, por meio dela, ampliam-se as potencialidades de reflexão e de pesquisa que, por sua vez, corroboram na produção do conhecimento. Assim sendo, essa prática é conditio sine qua non para o exercício da cidadania.\nO Sesc reconhece a importância da leitura e se orgulha em promover projetos e atividades que a incentivam, como a Feira de Livros, o Festival Literário, o Sesc Ler e o Bibliosesc. O projeto Sesc Ler que incentiva a leitura está presente na capital e em Manacapuru, Itacoatiara, Presidente Figueiredo, Parintins, Maués e Tefé. Já o Bibliosesc é uma unidade móvel que permite à população acesso a livros de vários estilos e segmentos.\nEste ano, o Sesc traz a 4ª edição do Festival Literário que irá acontecer de 10 a 14 de outubro no município de Itacoatiara. O Festival que tem como tema "Cidade espaço de vida, palavras e poesias", homenageando o escritor Aldisio Filgueiras, integra a vasta programação do Sesc no que diz respeito ao fomento e incentivo a formação do leitor e cidadão.\nA ação também tem como objetivo envolver instituições e empresas, chamando-as à responsabilidade social na formação da população, na preservação e promoção da cultura brasileira e na participação da cultura regional amazônica. Que este ano conta com a parceria do Banco da Amazônia, Caixa Econômica Federal e Governo Federal, Sidi Telecomunicações, Mil Madeiras, Paco Uniformes e o Senac AM.\nA programação contará com encontros literários, palestras, vendas de livros, espaços recreativos e de entretenimento, além da participação de escritores regionais. Para promover a valorização do livro e da leitura no imaginário popular, incentivando a leitura e contribuindo significativamente para a formação intelectual, mediante a oferta de uma programação que contemple a formação de leitores.\n<p class="text-sm text-slate-500 mt-2">Fonte: https://www.sesc-am.com.br/cultura/a-importancia-da-leitura-na-formacao-da-cidadania/Acesso em: 02 de maio de 2025.</p>`
                            },
                            statement: "O texto menciona diversas ações desenvolvidas pelo Sesc para incentivar a leitura no estado do Amazonas. Cite ao menos duas dessas ações e explique como elas contribuem para a formação do leitor.",
                            answer: "O Sesc realiza feiras de livros desde 1986 e promove projetos como o Bibliosesc e o Sesc Ler. Essas ações aproximam a população da leitura de forma acessível e lúdica, incentivando o hábito de ler desde a infância."
                        },
                        {
                            id: "em-r-q2",
                            descriptor: "D03",
                            type: "subjetiva",
                            statement: "No trecho “a leitura é conditio sine qua non para o exercício da cidadania”, o autor usa uma expressão em latim. Explique o sentido dessa expressão no contexto do parágrafo e o motivo de sua utilização.",
                            answer: "A expressão significa \"condição indispensável\". O autor quer reforçar que a leitura é fundamental, ou seja, não há cidadania plena sem a prática da leitura. A escolha da expressão em latim confere um tom de autoridade e erudição ao argumento."
                        },
                        {
                            id: "em-r-q3",
                            descriptor: "D04",
                            type: "subjetiva",
                            statement: "Apesar de o texto defender explicitamente o valor da leitura, ele também sugere um papel político e social da escola e do professor. Qual é esse papel e como ele se manifesta nas entrelinhas do texto?",
                            answer: "O texto sugere que a escola e o professor são agentes transformadores, com o dever de desenvolver o gosto pela leitura e formar leitores críticos e reflexivos. Isso aparece de forma implícita quando se afirma que \"o professor deve entregar ferramentas\" e \"visualizar-se como mediador da descoberta\"."
                        },
                        {
                            id: "em-r-q4",
                            descriptor: "D06",
                            type: "subjetiva",
                            statement: "O texto afirma que \"a leitura apresenta uma importância vital como estratégia de melhoria do processo de ensino e aprendizagem”. Com base nos argumentos do autor, explique qual é a causa e qual é a consequência dessa afirmação.",
                            answer: "Causa: A leitura estimula a reflexão, a análise crítica e o desenvolvimento cognitivo. Consequência: A melhoria do processo de ensino e aprendizagem, pois os alunos passam a compreender melhor os conteúdos e a desenvolver autonomia intelectual."
                        },
                        {
                            id: "em-r-q5",
                            descriptor: "D14",
                            type: "subjetiva",
                            statement: "Releia o segundo parágrafo do texto. Identifique uma informação que seja um fato e outra que revele a opinião do autor. Justifique sua resposta, destacando os elementos linguísticos que indicam a diferença entre fato e opinião.",
                            answer: "Fato: \"O Sesc AM realiza feiras de livros em diversas localidades do Amazonas desde 1986.\" (baseado em dados verificáveis). Opinião: “A leitura é essencial na formação dos cidadãos.\" (reflete o julgamento de valor do autor, mesmo que amplamente aceito)."
                        },
                        {
                            id: "em-r-q6",
                            descriptor: "D01",
                            type: "objetiva",
                            supportText: {
                                title: "A cabeça pensa a partir de onde os pés pisam (Leonardo Boff)",
                                content: `A cabeça pensa a partir de onde os pés pisam. Para compreender, é essencial conhecer o lugar social de quem olha. Vale dizer: como alguém vive, com quem convive, que experiências tem, em que trabalha, que desejos alimenta, como assume os dramas da vida e da morte e que esperanças o animam. Isso faz da compreensão sempre uma interpretação.\n<p class="text-sm text-slate-500 mt-2">Fonte: Boff, Leonardo. A águia e a galinha. 4ª ed. Rio de Janeiro: Sextante, 1999.</p>`
                            },
                            statement: "Segundo o autor, o que é essencial para compreender alguém?",
                            options: [
                                "Conhecer sua formação acadêmica.",
                                "Entender sua posição política.",
                                "Conhecer o lugar social de quem olha.",
                                "Saber suas preferências literárias"
                            ],
                            answer: 2,
                            feedback: "A resposta correta é a C. O autor afirma explicitamente que 'Para compreender, é essencial conhecer o lugar social de quem olha', o que inclui suas experiências de vida, trabalho e esperanças."
                        },
                        {
                            id: "em-r-q7",
                            descriptor: "D04",
                            type: "objetiva",
                            statement: "Pode-se inferir que, para o autor, a compreensão de uma pessoa é:",
                            options: [
                                "Totalmente objetiva.",
                                "Baseada apenas em dados estatísticos.",
                                "Independente de sua realidade vivida.",
                                "Influenciada por suas experiências e contexto social."
                            ],
                            answer: 3,
                            feedback: "A resposta correta é a D. O texto enfatiza que a compreensão é uma 'interpretação' moldada por como a pessoa vive, com quem convive e suas experiências. Isso significa que a compreensão é influenciada pelo contexto social e pelas vivências do indivíduo."
                        },
                        {
                            id: "em-r-q8",
                            descriptor: "D06",
                            type: "objetiva",
                            supportText: {
                                title: "Mãos Dadas (Carlos Drummond de Andrade)",
                                content: `Não serei o poeta de um mundo caduco.\nTambém não cantarei o mundo futuro.\nEstou preso à vida e olho meus companheiros.\nEstão taciturnos mas nutrem grandes esperanças.\nEntre eles, considero a enorme realidade.\nO presente é tão grande, não nos afastemos.\nNão nos afastemos muito, vamos de mãos dadas.\n<p class="text-sm text-slate-500 mt-2">Fonte: Drummond de Andrade, Carlos. Poesia Completa. Rio de Janeiro: Nova Aguilar, 2002.</p>`
                            },
                            statement: "No poema, a expressão “O presente é tão grande, não nos afastemos” sugere que:",
                            options: [
                                "O futuro é mais importante que o presente.",
                                "Devemos nos concentrar no presente e manter a união.",
                                "O passado é irrelevante para o poeta.",
                                "A realidade atual é pequena e sem importância."
                            ],
                            answer: 1,
                            feedback: "A resposta correta é a B. Ao afirmar que 'O presente é tão grande', o eu lírico valoriza o momento atual e convida à união ('não nos afastemos, vamos de mãos dadas'), destacando a importância de viver e agir no agora."
                        },
                        {
                            id: "em-r-q9",
                            descriptor: "D14",
                            type: "objetiva",
                            statement: "No verso “Estão taciturnos mas nutrem grandes esperanças”, expressa um(a):",
                            options: [
                                "Fato observável.",
                                "Opinião pessoal.",
                                "Hipótese futura.",
                                "Metáfora abstrata."
                            ],
                            answer: 0,
                            feedback: "A resposta correta é a A. O verso descreve uma condição observável dos 'companheiros': eles estão silenciosos ('taciturnos'), mas ao mesmo tempo demonstram ter esperança. É uma constatação do estado deles, portanto, um fato no contexto do poema."
                        },
                        {
                            id: "em-r-q10",
                            descriptor: "D03",
                            type: "objetiva",
                            supportText: {
                                title: "O trabalho e o meio ambiente (Marcelo Nunes Mestriner)",
                                content: `O trabalho humano sempre esteve ligado à transformação da natureza. Desde os primórdios, o homem modifica o ambiente para atender às suas necessidades. No entanto, essa relação nem sempre foi equilibrada. A busca incessante por recursos e o desenvolvimento industrial têm causado impactos ambientais significativos, como o desmatamento, a poluição e a perda da biodiversidade. É fundamental repensar as formas de produção e consumo para garantir a sustentabilidade do planeta.\n<p class="text-sm text-slate-500 mt-2">Fonte: Mestriner, Marcelo Nunes. O trabalho e o meio ambiente.</p>`
                            },
                            statement: "A expressão \"repensar as formas de produção e consumo\" implica:",
                            options: [
                                "Manter os métodos atuais de produção.",
                                "Aumentar a exploração dos recursos naturais.",
                                "Modificar práticas para alcançar a sustentabilidade.",
                                "Ignorar os impactos ambientais existentes."
                            ],
                            answer: 2,
                            feedback: "A resposta correta é a C. 'Repensar' sugere reavaliar e mudar. No contexto de sustentabilidade, isso significa modificar as práticas atuais de produção e consumo que são prejudiciais ao meio ambiente para adotar métodos mais sustentáveis."
                        }
                    ]
                },
                {
                    title: "2º Momento: Ampliação (Avaliação Formativa)",
                    questions: [
                        {
                            id: "em-a-q1",
                            descriptor: "D01",
                            type: "objetiva",
                            supportText: {
                                title: "O trabalho e o meio ambiente (Marcelo Nunes Mestriner)",
                                content: `O trabalho humano sempre esteve ligado à transformação da natureza. Desde os primórdios, o homem modifica o ambiente para atender às suas necessidades. No entanto, essa relação nem sempre foi equilibrada. A busca incessante por recursos e o desenvolvimento industrial têm causado impactos ambientais significativos, como o desmatamento, a poluição e a perda da biodiversidade. É fundamental repensar as formas de produção e consumo para garantir a sustentabilidade do planeta.\n<p class="text-sm text-slate-500 mt-2">Fonte: Mestriner, Marcelo Nunes. O trabalho e o meio ambiente.</p>`
                            },
                            statement: "Segundo o texto, quais são alguns dos impactos ambientais causados pelo desenvolvimento industrial?",
                            options: [
                                "Aumento da biodiversidade e reflorestamento.",
                                "Desmatamento, poluição e perda da biodiversidade.",
                                "Melhoria na qualidade do ar e das águas.",
                                "Redução do consumo de recursos naturais."
                            ],
                            answer: 1,
                            feedback: ""
                        },
                        {
                            id: "em-a-q2",
                            descriptor: "D03",
                            type: "objetiva",
                            statement: "No contexto do texto sobre trabalho e meio ambiente, a expressão “repensar as formas de produção e consumo\" implica:",
                            options: [
                                "Manter os métodos atuais de produção.",
                                "Aumentar a exploração dos recursos naturais.",
                                "Modificar práticas para alcançar a sustentabilidade.",
                                "Ignorar os impactos ambientais existentes."
                            ],
                            answer: 2,
                            feedback: ""
                        },
                        {
                            id: "em-a-q3",
                            descriptor: "D01",
                            type: "objetiva",
                            supportText: {
                                title: "O futuro do trabalho e a inteligência artificial",
                                content: `A ascensão da inteligência artificial (IA) está reformulando o mercado de trabalho global. Tarefas repetitivas e previsíveis estão sendo automatizadas, enquanto habilidades humanas, como criatividade, empatia e pensamento crítico, tornam-se cada vez mais valorizadas.\nEmpresas estão investindo em tecnologias que aumentam a produtividade, mas isso também levanta preocupações sobre a substituição de empregos e a necessidade de requalificação profissional.\nGovernos e instituições educacionais enfrentam o desafio de preparar a força de trabalho para essa nova realidade, promovendo programas de capacitação e adaptando currículos às demandas emergentes.\nApesar dos desafios, a integração da IA pode levar a uma era de inovação e eficiência, desde que acompanhada por políticas inclusivas e investimentos em educação contínua.\n<p class="text-sm text-slate-500 mt-2">O futuro do trabalho e profissões emergentes. O que esperar para os próximos anos? In: https://www.unicep.edu.br/</p>`
                            },
                            statement: "De acordo com o texto, quais habilidades humanas estão se tornando mais valorizadas com a ascensão da inteligência artificial?",
                            options: [
                                "Criatividade, empatia e pensamento crítico.",
                                "Força física e memória mecânica.",
                                "Velocidade de digitação e conhecimento técnico.",
                                "Capacidade de execução de tarefas repetitivas."
                            ],
                            answer: 0,
                            feedback: ""
                        },
                        {
                            id: "em-a-q4",
                            descriptor: "D03",
                            type: "objetiva",
                            supportText: {
                                title: "A cabeça pensa a partir de onde os pés pisam – Leonardo Boff",
                                content: `A cabeça pensa a partir de onde os pés pisam. Para compreender, é essencial conhecer o lugar social de quem olha. Vale dizer: como alguém vive, com quem convive, que experiências tem, em que trabalha, que desejos alimenta, como assume os dramas da vida e da morte e que esperanças o animam. Isso faz da compreensão sempre uma interpretação.\nA leitura é sempre uma releitura. Cada um lê com os olhos que tem. E interpreta a partir de onde os pés pisam. Todo ponto de vista é a vista de um ponto. Para entender como alguém lê, é necessário saber como são seus olhos e qual é sua visão de mundo.\nA cabeça pensa a partir de onde os pés pisam. Para compreender, é essencial conhecer o lugar social de quem olha. Isso faz da compreensão sempre uma interpretação.\n<p class="text-sm text-slate-500 mt-2">Fonte: Instituto Ayrton Senna. (2023). SAEB Leitura 3º série</p>`
                            },
                            statement: "No trecho \"Todo ponto de vista é a vista de um ponto\", o autor utiliza essa expressão para indicar que:",
                            options: [
                                "As pessoas compartilham as mesmas opiniões.",
                                "A compreensão é universal e objetiva.",
                                "A leitura é uma atividade puramente técnica.",
                                "Cada indivíduo interpreta o mundo a partir de sua própria experiência e contexto."
                            ],
                            answer: 3,
                            feedback: ""
                        },
                        {
                            id: "em-a-q5",
                            descriptor: "D04",
                            type: "objetiva",
                            supportText: {
                                title: "A Cartomante - Machado de Assis",
                                content: `Camilo achou-se na rua, sem saber como nem por que. A cartomante, a princípio, pareceu-lhe um remédio contra a inquietação. Depois, a ideia de ir lá pareceu-lhe absurda. Era um homem ilustrado, crente em Deus, e só em Deus; mas a superstição é uma coisa que se mete por todos os interstícios da razão, e às vezes domina-a. Camilo resistiu algum tempo; afinal cedeu. 'Vamos lá', disse consigo. 'Quero ver o que é isso.'\n<p class="text-sm text-slate-500 mt-2">Fonte: Assis, Machado de. Contos Fluminenses. Rio de Janeiro: Garnier, 1870.</p>`
                            },
                            statement: "A decisão de Camilo de visitar a cartomante indica que ele:",
                            options: [
                                "É completamente cético em relação à cartomancia.",
                                "Busca uma solução racional para seus problemas.",
                                "Está em um estado de aflição que o leva a considerar alternativas que normalmente rejeitaria.",
                                "Deseja provar que a cartomante é uma fraude."
                            ],
                            answer: 2,
                            feedback: ""
                        },
                        {
                            id: "em-a-q6",
                            descriptor: "D04",
                            type: "objetiva",
                            statement: "A frase \"a superstição é uma coisa que se mete por todos os interstícios da razão” sugere que:",
                            options: [
                                "A superstição é facilmente evitada por pessoas racionais.",
                                "A superstição pode influenciar até mesmo aqueles que se consideram racionais.",
                                "A razão é sempre mais forte que a superstição.",
                                "A superstição é exclusiva de pessoas ignorantes."
                            ],
                            answer: 1,
                            feedback: ""
                        },
                        {
                            id: "em-a-q7",
                            descriptor: "D06",
                            type: "objetiva",
                            supportText: {
                                title: "A Máquina do Tempo – H.G. Wells",
                                content: `O Viajante do Tempo (pois assim o chamaremos) estava explicando uma teoria muito singular. Segundo ele, o tempo não é uma entidade separada, mas uma quarta dimensão, além das três dimensões do espaço. Ele argumentava que, assim como podemos mover-nos livremente nas direções do espaço, deveríamos ser capazes de mover-nos no tempo. Seus ouvintes estavam céticos, mas ele insistia que tinha construído uma máquina capaz de viajar através do tempo.\n<p class="text-sm text-slate-500 mt-2">Fonte: Wells, H.G. A Máquina do Tempo.</p>`
                            },
                            statement: "A reação dos ouvintes à teoria do Viajante do Tempo sugere que eles:",
                            options: [
                                "Estavam entusiasmados com a ideia.",
                                "Aceitaram imediatamente a teoria.",
                                "Demonstraram ceticismo em relação à teoria apresentada.",
                                "Já conheciam a teoria anteriormente."
                            ],
                            answer: 2,
                            feedback: ""
                        },
                        {
                            id: "em-a-q8",
                            descriptor: "D06",
                            type: "objetiva",
                            statement: "A insistência do Viajante do Tempo em sua teoria indica que ele:",
                            options: [
                                "Desejava convencer os ouvintes da viabilidade de sua máquina.",
                                "Estava inseguro sobre sua invenção.",
                                "Pretendia abandonar a ideia da máquina do tempo.",
                                "Não se importava com a opinião dos ouvintes."
                            ],
                            answer: 0,
                            feedback: ""
                        },
                        {
                            id: "em-a-q9",
                            descriptor: "D14",
                            type: "objetiva",
                            supportText: {
                                title: "O impacto das redes sociais na sociedade contemporânea",
                                content: `As redes sociais transformaram a maneira como as pessoas se comunicam e compartilham informações. Plataformas como Facebook, Twitter e Instagram permitem que usuários publiquem conteúdos instantaneamente, alcançando um público global.\nEstudos indicam que o uso excessivo dessas plataformas pode levar a problemas de saúde mental, como ansiedade e depressão. Além disso, a disseminação de notícias falsas tornou-se uma preocupação significativa, influenciando opiniões e comportamentos.\nApesar dos desafios, as redes sociais também oferecem benefícios. Elas facilitam a mobilização social, permitindo que causas importantes ganhem visibilidade rapidamente. Campanhas de arrecadação de fundos e movimentos sociais frequentemente utilizam essas plataformas para alcançar seus objetivos.\nNo entanto, é essencial que os usuários desenvolvam um senso crítico ao consumir informações online. A educação digital deve ser promovida para que as pessoas possam distinguir entre conteúdo confiável e desinformação.\n<p class="text-sm text-slate-500 mt-2">Fonte: Santaella, Lúcia. "O impacto das redes sociais na sociedade contemporânea". Revista Comunicação & Sociedade, vol. 42, 2021.</p>`
                            },
                            statement: "No trecho \"Estudos indicam que o uso excessivo dessas plataformas pode levar a problemas de saúde mental\", o autor apresenta:",
                            options: [
                                "Uma opinião pessoal sobre as redes sociais.",
                                "Um fato baseado em pesquisas científicas.",
                                "Uma especulação sem fundamento.",
                                "Uma crítica moral ao uso das redes sociais."
                            ],
                            answer: 1,
                            feedback: ""
                        },
                        {
                            id: "em-a-q10",
                            descriptor: "D14",
                            type: "objetiva",
                            statement: "A afirmação \"É essencial que os usuários desenvolvam um senso crítico ao consumir informações online\" expressa:",
                            options: [
                                "Um fato sobre o comportamento dos usuários.",
                                "Uma descrição neutra das redes sociais.",
                                "Uma informação estatística sobre o uso da internet.",
                                "Uma opinião sobre a importância da educação digital."
                            ],
                            answer: 3,
                            feedback: ""
                        }
                    ]
                },
                {
                    title: "3º Momento: Consolidação (Avaliação Comparativa)",
                    questions: [
                        {
                            id: "em-c-q1",
                            descriptor: "D01",
                            type: "objetiva",
                            supportText: {
                                title: "A economia da felicidade – Jeffrey D. Sachs",
                                content: `Vivemos em tempos de altas ansiedades. Apesar de o mundo usufruir de uma riqueza total sem precedentes, também há ampla insegurança, agitação e insatisfação. Nos Estados Unidos, uma grande maioria dos americanos acredita que o país está “no caminho errado”. O pessimismo está nas alturas. O mesmo vale para muitos outros lugares.\nTendo essa situação como pano de fundo, chegou a hora de reconsiderar as fontes básicas de felicidade em nossa vida econômica. A busca incansável de rendas maiores vem nos levando a uma ansiedade e iniquidade sem precedentes, em vez de nos conduzir a uma maior felicidade e satisfação na vida. O progresso econômico é importante e pode melhorar a qualidade de vida, mas só se o buscarmos junto com outras metas. [...]\n<p class="text-sm text-slate-500 mt-2">SACHS, Jeffrey D. Disponível em: http://zelmar.blogspot.com/2011/08/economia-da-felicidade.html.</p>`
                            },
                            statement: "Segundo o autor, qual é a consequência da busca incessante por rendas maiores?",
                            options: [
                                "Aumento da felicidade e satisfação na vida.",
                                "Redução da ansiedade e da iniquidade.",
                                "Elevação da ansiedade e da iniquidade.",
                                "Melhoria na qualidade de vida e no bem-estar social"
                            ],
                            answer: 2,
                            feedback: ""
                        },
                        {
                            id: "em-c-q2",
                            descriptor: "D01",
                            type: "objetiva",
                            statement: "De acordo com o texto sobre a economia da felicidade, o que muitos americanos acreditam sobre o país?",
                            options: [
                                "Que está no caminho certo para o progresso econômico.",
                                "Que está \"no caminho errado\".",
                                "Que atingiu a felicidade plena.",
                                "Que a riqueza total é suficiente para todos"
                            ],
                            answer: 1,
                            feedback: ""
                        },
                        {
                            id: "em-c-q3",
                            descriptor: "D03",
                            type: "objetiva",
                            supportText: {
                                title: "O Alienista - Machado de Assis",
                                content: `Um dia, ao jantar, como lhe perguntasse o marido o que é que tinha, respondeu tristemente que nada; depois atreveu-se um pouco, e foi ao ponto de dizer que se considerava tão viúva como dantes. E acrescentou:\n– Quem diria nunca que meia dúzia de lunáticos...\nNão acabou a frase; ou antes, acabou-a levantando os olhos ao teto os olhos, que eram a sua feição mais insinuante negros, grandes, lavados de uma luz úmida, como os da aurora.\nQuanto ao gesto, era o mesmo que empregara no dia em que Simão Bacamarte a pediu em casamento.\n<p class="text-sm text-slate-500 mt-2">Fonte: Machado de Assis, O Alienista, Capítulo III.</p>`
                            },
                            statement: "No trecho \"meia dúzia de lunáticos”, a expressão “meia dúzia” é utilizada para:",
                            options: [
                                "Minimizar a importância dos indivíduos mencionados.",
                                "Indicar uma quantidade exata de seis pessoas.",
                                "Exaltar a relevância dos lunáticos para a sociedade.",
                                "Expressar surpresa com a quantidade de lunáticos."
                            ],
                            answer: 0,
                            feedback: ""
                        },
                        {
                            id: "em-c-q4",
                            descriptor: "D03",
                            type: "objetiva",
                            supportText: {
                                title: "No Meio do Caminho - Carlos Drummond de Andrade",
                                content: `No meio do caminho tinha uma pedra\ntinha uma pedra no meio do caminho\ntinha uma pedra\nno meio do caminho tinha uma pedra.\nNunca me esquecerei desse acontecimento\nna vida de minhas retinas tão fatigadas.\nNunca me esquecerei que no meio do caminho\ntinha uma pedra\ntinha uma pedra no meio do caminho\nno meio do caminho tinha uma pedra.\n<p class="text-sm text-slate-500 mt-2">Fonte: Carlos Drummond de Andrade, Alguma Poesia, 1930.</p>`
                            },
                            statement: "No contexto do poema, a expressão \"nunca me esquecerei\", repetida ao lado da imagem da \"pedra\", sugere que o eu lírico:",
                            options: [
                                "Expressa admiração por um elemento inusitado encontrado em sua trajetória literal.",
                                "Valoriza um detalhe estético da paisagem, que o marcou artisticamente.",
                                "Ressalta a persistência da lembrança de um acontecimento que simboliza um impedimento ou trauma em sua trajetória.",
                                "Relembra com humor uma situação trivial ocorrida durante uma caminhada."
                            ],
                            answer: 2,
                            feedback: ""
                        },
                        {
                            id: "em-c-q5",
                            descriptor: "D04",
                            type: "objetiva",
                            statement: "O uso da expressão \"retinas tão fatigadas\" no poema 'No Meio do Caminho' indica que o eu lírico:",
                            options: [
                                "Está fisicamente cansado de caminhar.",
                                "Está entediado com a paisagem do caminho.",
                                "Tem problemas de visão.",
                                "Está emocionalmente impactado pelo obstáculo enfrentado."
                            ],
                            answer: 3,
                            feedback: ""
                        },
                        {
                            id: "em-c-q6",
                            descriptor: "D04",
                            type: "objetiva",
                            supportText: {
                                title: "A Hora e a Vez de Augusto Matraga – João Guimarães Rosa",
                                content: `E o que o senhor quer, então?\"\n– Quero o céu.\n– E o que é que o senhor quer com o céu?\n– Quero ir para o céu, só isso.\n– Mas o senhor não sabe que o céu é para os santos?\n– Sei.\n– E o senhor é santo?\n– Ainda não. Mas vou ficar.\n– E como é que o senhor vai ficar santo?\n– Não sei... Ainda não sei... Mas vou ficar.\n– E por que o senhor quer ir para o céu?\n– Para não ir para o inferno.\n– E por que o senhor não quer ir para o inferno?\n– Porque eu sou um homem.\n<p class="text-sm text-slate-500 mt-2">Fonte: Guimarães Rosa, João. Sagarana. Rio de Janeiro: José Olympio, 1946.</p>`
                            },
                            statement: "A partir do diálogo, pode-se inferir que o personagem principal:",
                            options: [
                                "Já se considera um santo.",
                                "Deseja mudar sua vida para alcançar a salvação.",
                                "Não acredita na existência do inferno.",
                                "Está satisfeito com sua condição atual."
                            ],
                            answer: 1,
                            feedback: ""
                        },
                        {
                            id: "em-c-q7",
                            descriptor: "D06",
                            type: "objetiva",
                            supportText: {
                                title: "A Revolução dos Bichos – George Orwell",
                                content: `Após a expulsão dos humanos, os animais da Granja do Solar estabeleceram um novo regime baseado na igualdade. No entanto, com o tempo, os porcos assumiram posições de liderança e começaram a se beneficiar mais do que os outros animais. As promessas de igualdade foram gradualmente substituídas por privilégios para os líderes.\n<p class="text-sm text-slate-500 mt-2">Fonte: Orwell, George. A Revolução dos Bichos.</p>`
                            },
                            statement: "A mudança no comportamento dos porcos sugere que:",
                            options: [
                                "Eles mantiveram os ideais de igualdade estabelecidos inicialmente.",
                                "Assumiram o poder para beneficiar a todos os animais igualmente.",
                                "Gradualmente, passaram a agir de maneira semelhante aos humanos que haviam expulsado.",
                                "Rejeitaram qualquer forma de liderança para manter a igualdade."
                            ],
                            answer: 2,
                            feedback: ""
                        },
                        {
                            id: "em-c-q8",
                            descriptor: "D06",
                            type: "objetiva",
                            statement: "As ações dos porcos em relação aos outros animais em 'A Revolução dos Bichos' indicam que:",
                            options: [
                                "Priorizaram seus próprios interesses em detrimento dos demais.",
                                "Implementaram políticas justas e igualitárias.",
                                "Buscaram constantemente o bem-estar coletivo.",
                                "Delegaram responsabilidades equitativamente entre todos."
                            ],
                            answer: 0,
                            feedback: ""
                        },
                        {
                            id: "em-c-q9",
                            descriptor: "D06",
                            type: "objetiva",
                            supportText: {
                                title: "O Menino de Água – Ingrid Teixeira da Silveira",
                                content: `O menino nadou para depois de uma onda grande e não voltou. A mãe estendeu as mãos na água buscando o seu corpo diluído. Julgava ela que o filho se diluíra como um cubo de açúcar incapaz de adocicar o mar. Jurou que o buscaria sempre. Haveria de o reconhecer nem que ele se tornasse ínfimo. Saberia dele escondido na mais insignificante gota de água. Jurava. Se o seu menino estivesse por perto, ela nunca o ignoraria.\nNadou ao fim do mar, à boca dos tubarões, dentro do vazio das baleias, sob as barrigas cegas dos barcos, no pensamento dos peixes e nas suas costas, entre as areias, atrás das pedras e debaixo. Buscou na cintilação quando a luz entrava água adentro fazendo de tudo um cristal gigante, podia ser que o filho fosse agora uma estrela e só soubesse brilhar. A mãe olhava o brilho como se o brilho a estivesse também a observar. Esperava e, de todo o modo, ficaria para sempre a esperar.\nNunca secava o corpo porque a água era agora o seu menino. Molhava-se, estendia as mãos em redor como radares aflitos por um abraço e imaginava que a criança fazia as ondas. Talvez as ondas fossem um modo de falar.\nE ela ondulava. Sentia as marés como a respiração do mundo a caminho.\n<p class="text-sm text-slate-500 mt-2">Fonte: Silveira, Ingrid Teixeira da. "O Menino de Água". In: Roteiros CONTO: O menino de água. Universidade Feevale</p>`
                            },
                            statement: "A atitude da mãe em \"nunca secava o corpo porque a água era agora o seu menino\" sugere que ela:",
                            options: [
                                "Acreditava que secar o corpo significaria esquecer o filho.",
                                "Temia que a água evaporasse e levasse consigo as lembranças do filho.",
                                "Queria se transformar em água para reencontrar o filho.",
                                "Acreditava que, ao permanecer molhada, manteria viva a memória do filho."
                            ],
                            answer: 3,
                            feedback: ""
                        },
                        {
                            id: "em-c-q10",
                            descriptor: "D14",
                            type: "objetiva",
                            supportText: {
                                title: "A importância da leitura na formação do cidadão",
                                content: `A leitura é uma ferramenta essencial no desenvolvimento intelectual e crítico do indivíduo. Por meio dela, é possível adquirir conhecimento, expandir o vocabulário e compreender diferentes perspectivas.\nDados do Instituto Brasileiro de Geografia e Estatística (IBGE) indicam que o número de leitores no Brasil tem aumentado nos últimos anos. No entanto, ainda há um longo caminho a percorrer para que a leitura se torne um hábito consolidado entre os brasileiros.\nÉ fundamental que escolas e famílias incentivem a prática da leitura desde a infância, proporcionando acesso a livros e criando ambientes que estimulem o interesse pelas letras.\n<p class="text-sm text-slate-500 mt-2">Fonte: Martins, José de Souza. "A importância da leitura na formação do cidadão". Folha de S.Paulo, 15 mar. 2020.</p>`
                            },
                            statement: "No trecho \"A leitura é uma ferramenta essencial no desenvolvimento intelectual e crítico do indivíduo\", o autor expressa:",
                            options: [
                                "Um fato comprovado por dados estatísticos.",
                                "Uma opinião sobre a importância da leitura.",
                                "Uma descrição neutra da prática da leitura.",
                                "Uma informação irrelevante ao tema."
                            ],
                            answer: 1,
                            feedback: ""
                        },
                        {
                            id: "em-c-q11",
                            descriptor: "D14",
                            type: "objetiva",
                            statement: "A afirmação \"Dados do Instituto Brasileiro de Geografia e Estatística (IBGE) indicam que o número de leitores no Brasil tem aumentado nos últimos anos\" apresenta:",
                            options: [
                                "Um fato baseado em pesquisa estatística.",
                                "Uma opinião pessoal do autor.",
                                "Uma previsão sobre o futuro da leitura no Brasil.",
                                "Uma crítica à falta de leitores no país."
                            ],
                            answer: 0,
                            feedback: ""
                        },
                        {
                            id: "em-c-q12",
                            descriptor: "D14",
                            type: "objetiva",
                            supportText: {
                                title: "A importância da leitura na formação do cidadão",
                                content: `A leitura é uma ferramenta essencial no desenvolvimento intelectual e crítico do indivíduo. Por meio dela, é possível adquirir conhecimento, expandir o vocabulário e compreender diferentes perspectivas.\nDados do Instituto Brasileiro de Geografia e Estatística (IBGE) indicam que o número de leitores no Brasil tem aumentado nos últimos anos. No entanto, ainda há um longo caminho a percorrer para que a leitura se torne um hábito consolidado entre os brasileiros.\nÉ fundamental que escolas e famílias incentivem a prática da leitura desde a infância, proporcionando acesso a livros e criando ambientes que estimulem o interesse pelas letras.\n<p class="text-sm text-slate-500 mt-2">Fonte: Martins, José de Souza. "A importância da leitura na formação do cidadão". Folha de S.Paulo, 15 mar. 2020.</p>`
                            },
                            statement: "No trecho \"É fundamental que escolas e famílias incentivem a prática da leitura desde a infância\", o autor está:",
                            options: [
                                "Relatando uma ação já realizada por todas as escolas e famílias.",
                                "Expressando uma opinião sobre o papel das escolas e famílias na promoção da leitura.",
                                "Apresentando dados concretos sobre a leitura na infância.",
                                "Descrevendo uma política pública existente."
                            ],
                            answer: 1,
                            feedback: ""
                        }
                    ]
                }
            ]
        }
    }
};