
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
 * @property {string} [supportText.imageUrl]
 * @property {string} [supportText.gdriveImageUrl]
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
                            supportText: {
                                title: "O Caçador de Pipas (trecho)",
                                content: `Eu me tornei o que sou hoje aos doze anos, em um dia nublado e gélido do inverno de 1975. Lembro do momento exato em que isso aconteceu, quando estava agachado por detrás de uma parede de barro parcialmente desmoronada, espiando o beco que ficava perto do riacho congelado. Foi há muito tempo, mas descobri que não é verdade o que dizem a respeito do passado, essa história de que podemos enterrá-lo. Porque, de um jeito ou de outro, ele sempre consegue escapar.\nOlhando para trás, agora, percebo que passei os últimos vinte e seis anos da minha vida espiando aquele beco deserto. Um dia, no verão passado, meu amigo Rahim Khan me ligou do Paquistão. Pediu que eu fosse vê-lo. Parado ali na cozinha, com o fone no ouvido, sabia muito bem que não era só Rahim Khan que estava do outro lado daquela linha. Era o meu passado de pecados não expiados. Depois que desliguei, fui passear pelo lago Spreckels, na orla norte do parque da Golden Gate.\nO sol do início da tarde cintilava na água onde navegavam dezenas de barquinhos em miniatura, impulsionados por um ventinho ligeiro. Olhei então para cima e vi um par de pipas vermelhas planando no ar, com rabiolas compridas e azuis. Dançavam lá no alto, bem acima das árvores da ponta oeste do parque, por sobre os moinhos, voando lado a lado como um par de olhos fitando San Francisco, a cidade que eu agora chamava de lar.\nE, de repente, a voz de Hassan sussurrou nos meus ouvidos: 'Por você, faria isso mil vezes!' Hassan, o menino de lábio leporino que corria atrás das pipas como ninguém."\n<p class="text-sm text-slate-500 mt-2">HOSSEINI, Khaled. O Caçador de Pipas. Rio de Janeiro: Nova Fronteira, 2005.</p>`
                            },
                            statement: "No trecho \"descobri que não é verdade o que dizem a respeito do passado, essa história de que podemos enterrá-lo\", o que o narrador quer dizer com a expressão \"enterrar o passado\"?",
                            answer: "A expressão \"enterrar o passado\" é usada de forma metafórica. O narrador quer dizer que não é possível esquecer ou apagar o que foi vivido; o passado, mesmo que tentemos deixá-lo para trás, sempre retorna e nos afeta."
                        },
                        {
                            id: "ef-r-q3",
                            descriptor: "D04",
                            type: "subjetiva",
                            supportText: {
                                title: "O Caçador de Pipas (trecho)",
                                content: `Eu me tornei o que sou hoje aos doze anos, em um dia nublado e gélido do inverno de 1975. Lembro do momento exato em que isso aconteceu, quando estava agachado por detrás de uma parede de barro parcialmente desmoronada, espiando o beco que ficava perto do riacho congelado. Foi há muito tempo, mas descobri que não é verdade o que dizem a respeito do passado, essa história de que podemos enterrá-lo. Porque, de um jeito ou de outro, ele sempre consegue escapar.\nOlhando para trás, agora, percebo que passei os últimos vinte e seis anos da minha vida espiando aquele beco deserto. Um dia, no verão passado, meu amigo Rahim Khan me ligou do Paquistão. Pediu que eu fosse vê-lo. Parado ali na cozinha, com o fone no ouvido, sabia muito bem que não era só Rahim Khan que estava do outro lado daquela linha. Era o meu passado de pecados não expiados. Depois que desliguei, fui passear pelo lago Spreckels, na orla norte do parque da Golden Gate.\nO sol do início da tarde cintilava na água onde navegavam dezenas de barquinhos em miniatura, impulsionados por um ventinho ligeiro. Olhei então para cima e vi um par de pipas vermelhas planando no ar, com rabiolas compridas e azuis. Dançavam lá no alto, bem acima das árvores da ponta oeste do parque, por sobre os moinhos, voando lado a lado como um par de olhos fitando San Francisco, a cidade que eu agora chamava de lar.\nE, de repente, a voz de Hassan sussurrou nos meus ouvidos: 'Por você, faria isso mil vezes!' Hassan, o menino de lábio leporino que corria atrás das pipas como ninguém."\n<p class="text-sm text-slate-500 mt-2">HOSSEINI, Khaled. O Caçador de Pipas. Rio de Janeiro: Nova Fronteira, 2005.</p>`
                            },
                            statement: "Por que o narrador menciona que, ao receber o telefonema de Rahim Khan, sentiu que não era apenas ele quem estava do outro lado da linha?",
                            answer: "Porque o telefonema trouxe à tona lembranças e culpas do passado, especialmente ligadas ao personagem Hassan. O narrador interpreta esse telefonema como um chamado do seu \"pastado de pecados não expiados\", ou seja, das atitudes que ele ainda não conseguiu perdoar em si mesmo."
                        },
                        {
                            id: "ef-r-q4",
                            descriptor: "D06",
                            type: "subjetiva",
                            supportText: {
                                title: "O Caçador de Pipas (trecho)",
                                content: `Eu me tornei o que sou hoje aos doze anos, em um dia nublado e gélido do inverno de 1975. Lembro do momento exato em que isso aconteceu, quando estava agachado por detrás de uma parede de barro parcialmente desmoronada, espiando o beco que ficava perto do riacho congelado. Foi há muito tempo, mas descobri que não é verdade o que dizem a respeito do passado, essa história de que podemos enterrá-lo. Porque, de um jeito ou de outro, ele sempre consegue escapar.\nOlhando para trás, agora, percebo que passei os últimos vinte e seis anos da minha vida espiando aquele beco deserto. Um dia, no verão passado, meu amigo Rahim Khan me ligou do Paquistão. Pediu que eu fosse vê-lo. Parado ali na cozinha, com o fone no ouvido, sabia muito bem que não era só Rahim Khan que estava do outro lado daquela linha. Era o meu passado de pecados não expiados. Depois que desliguei, fui passear pelo lago Spreckels, na orla norte do parque da Golden Gate.\nO sol do início da tarde cintilava na água onde navegavam dezenas de barquinhos em miniatura, impulsionados por um ventinho ligeiro. Olhei então para cima e vi um par de pipas vermelhas planando no ar, com rabiolas compridas e azuis. Dançavam lá no alto, bem acima das árvores da ponta oeste do parque, por sobre os moinhos, voando lado a lado como um par de olhos fitando San Francisco, a cidade que eu agora chamava de lar.\nE, de repente, a voz de Hassan sussurrou nos meus ouvidos: 'Por você, faria isso mil vezes!' Hassan, o menino de lábio leporino que corria atrás das pipas como ninguém."\n<p class="text-sm text-slate-500 mt-2">HOSSEINI, Khaled. O Caçador de Pipas. Rio de Janeiro: Nova Fronteira, 2005.</p>`
                            },
                            statement: "Qual é o tema central abordado nesse trecho de O Caçador de Pipas?",
                            answer: "O tema central é a memória e o peso do passado. O trecho reflete como experiências vividas na infância, especialmente ligadas à culpa e à amizade, continuam a influenciar o presente do narrador."
                        },
                        {
                            id: "ef-r-q5",
                            descriptor: "D14",
                            type: "subjetiva",
                             supportText: {
                                title: "O Caçador de Pipas (trecho)",
                                content: `Eu me tornei o que sou hoje aos doze anos, em um dia nublado e gélido do inverno de 1975. Lembro do momento exato em que isso aconteceu, quando estava agachado por detrás de uma parede de barro parcialmente desmoronada, espiando o beco que ficava perto do riacho congelado. Foi há muito tempo, mas descobri que não é verdade o que dizem a respeito do passado, essa história de que podemos enterrá-lo. Porque, de um jeito ou de outro, ele sempre consegue escapar.\nOlhando para trás, agora, percebo que passei os últimos vinte e seis anos da minha vida espiando aquele beco deserto. Um dia, no verão passado, meu amigo Rahim Khan me ligou do Paquistão. Pediu que eu fosse vê-lo. Parado ali na cozinha, com o fone no ouvido, sabia muito bem que não era só Rahim Khan que estava do outro lado daquela linha. Era o meu passado de pecados não expiados. Depois que desliguei, fui passear pelo lago Spreckels, na orla norte do parque da Golden Gate.\nO sol do início da tarde cintilava na água onde navegavam dezenas de barquinhos em miniatura, impulsionados por um ventinho ligeiro. Olhei então para cima e vi um par de pipas vermelhas planando no ar, com rabiolas compridas e azuis. Dançavam lá no alto, bem acima das árvores da ponta oeste do parque, por sobre os moinhos, voando lado a lado como um par de olhos fitando San Francisco, a cidade que eu agora chamava de lar.\nE, de repente, a voz de Hassan sussurrou nos meus ouvidos: 'Por você, faria isso mil vezes!' Hassan, o menino de lábio leporino que corria atrás das pipas como ninguém."\n<p class="text-sm text-slate-500 mt-2">HOSSEINI, Khaled. O Caçador de Pipas. Rio de Janeiro: Nova Fronteira, 2005.</p>`
                            },
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
                            feedback: "A resposta correta é a B. Ao hesitar mas decidir cumprir a tarefa dada por sua mãe em vez de brincar, demonstra que se importa com a responsabilidade e a confiança que sua mãe depositou nele."
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
                                content: `Amanhã é dia de quê? – Meus filhos perguntam, os três ao mesmo tempo.\n- Amanhã é dia de vovô [...] – Eu respondo.\nEles saem saltitantes pela casa brincando e gritando.\n- EBA! Amanhã é dia de vovô.\nComo é bom “ser” criança e esperar pela visita dos avós no “mingo” (Domingo, dia dos avós). Uma semana eles vêm, outra nós vamos.\nNeste dia, o vovô veio cheio de papéis, cola e tesoura. É dia de vovô e também de churrasco. OBA!\nA surpresa do dia. O Vovô faria pipas para as crianças. Depois do churrasco, o vovô sentou, rodeado de seus trinetos para confeccionar as pipas. Sentados lá na garagem, ficaram a tarde toda fazendo uma pipa, enquanto ele resgatava gostosas memórias de sua própria infância. Uma tarde não seria suficiente para as três pipas. Mas a diversão já estava preparada. Só faltava o vento!\nCadê o vento?\nNaquela tarde muito quente de verão não tinha vento, mas não impediu que a turma se divertisse da mesma forma. Foi preciso mais um domingo para o término das pipas. E o tão esperado dia de vento apareceu, afinal. [...]\nComo é bom "ter" crianças e viver toda esta alegria.\nPor isso, não me canso de agradecer:\n- Obrigada. Viva o Vovô com suas três pipas!\n<p class="text-sm text-slate-500 mt-2">DEXHEIMER, Aline. As três pipas do vovô. In: QDivertido.</p>`
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
                            supportText: {
                                title: "O que é Riqueza e Pobreza",
                                content: `Um dia, um pai de família rica levou seu filho para viajar para o interior com o firme propósito de mostrar quanto as pessoas podem ser pobres.\nEles passaram um dia e uma noite na fazenda de uma família muito pobre.\nQuando retornaram da viagem, o pai perguntou ao filho:\n\"- Como foi a viagem?\"\n\"- Muito boa, Papai!\"\n\"- Você viu como as pessoas podem ser pobres?\"\n\"- Sim.\" Respondeu o menino.\n\"- E o que você aprendeu?\", o pai perguntou.\nO filho respondeu:\n\"- Eu vi que nós temos um cachorro em casa, e eles têm quatro.\nNós temos uma piscina que alcança o meio do jardim; eles têm um riacho que não tem fim.\nNós temos uma varanda coberta e iluminada com luz; eles têm um céu imenso com as estrelas e a lua.\nNosso quintal vai até o portão de entrada; eles têm uma floresta inteira.\"\nO pequeno garoto estava acabando de responder quando seu pai ficou estupefato pelo que o filho acrescentou:\n\"- Obrigado, pai, por me mostrar o quanto nós somos pobres...\"\n<p class="text-sm text-slate-500 mt-2">Fonte: iomere.sc.gov.br</p>`
                            },
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
                            supportText: {
                                title: "A importância da leitura na formação da cidadania",
                                content: `A leitura é algo essencial na formação dos cidadãos, desenvolve a criatividade, aumenta o vocabulário, aprimora o conhecimento, além de ajudar na concentração e na construção textual. Sabendo dessa importância o Sesc AM incentiva essa prática, desde 1986 a instituição realiza feiras de livros em diversas localidades do Amazonas. Ao longo dessas décadas milhares de leitores tiveram a oportunidade de se aproximar da literatura de maneira lúdica e criativa.\nÉ também uma prática social indispensável na formação humana, pois, por meio dela, ampliam-se as potencialidades de reflexão e de pesquisa que, por sua vez, corroboram na produção do conhecimento. Assim sendo, essa prática é conditio sine qua non para o exercício da cidadania.\nO Sesc reconhece a importância da leitura e se orgulha em promover projetos e atividades que a incentivam, como a Feira de Livros, o Festival Literário, o Sesc Ler e o Bibliosesc. O projeto Sesc Ler que incentiva a leitura está presente na capital e em Manacapuru, Itacoatiara, Presidente Figueiredo, Parintins, Maués e Tefé. Já o Bibliosesc é uma unidade móvel que permite à população acesso a livros de vários estilos e segmentos.\nEste ano, o Sesc traz a 4ª edição do Festival Literário que irá acontecer de 10 a 14 de outubro no município de Itacoatiara. O Festival que tem como tema "Cidade espaço de vida, palavras e poesias", homenageando o escritor Aldisio Filgueiras, integra a vasta programação do Sesc no que diz respeito ao fomento e incentivo a formação do leitor e cidadão.\nA ação também tem como objetivo envolver instituições e empresas, chamando-as à responsabilidade social na formação da população, na preservação e promoção da cultura brasileira e na participação da cultura regional amazônica. Que este ano conta com a parceria do Banco da Amazônia, Caixa Econômica Federal e Governo Federal, Sidi Telecomunicações, Mil Madeiras, Paco Uniformes e o Senac AM.\nA programação contará com encontros literários, palestras, vendas de livros, espaços recreativos e de entretenimento, além da participação de escritores regionais. Para promover a valorização do livro e da leitura no imaginário popular, incentivando a leitura e contribuindo significativamente para a formação intelectual, mediante a oferta de uma programação que contemple a formação de leitores.\n<p class="text-sm text-slate-500 mt-2">Fonte: https://www.sesc-am.com.br/cultura/a-importancia-da-leitura-na-formacao-da-cidadania/Acesso em: 02 de maio de 2025.</p>`
                            },
                            statement: "No trecho “a leitura é conditio sine qua non para o exercício da cidadania”, o autor usa uma expressão em latim. Explique o sentido dessa expressão no contexto do parágrafo e o motivo de sua utilização.",
                            answer: "A expressão significa \"condição indispensável\". O autor quer reforçar que a leitura é fundamental, ou seja, não há cidadania plena sem a prática da leitura. A escolha da expressão em latim confere um tom de autoridade e erudição ao argumento."
                        },
                        {
                            id: "em-r-q3",
                            descriptor: "D04",
                            type: "subjetiva",
                            supportText: {
                                title: "A importância da leitura na formação da cidadania",
                                content: `A leitura é algo essencial na formação dos cidadãos, desenvolve a criatividade, aumenta o vocabulário, aprimora o conhecimento, além de ajudar na concentração e na construção textual. Sabendo dessa importância o Sesc AM incentiva essa prática, desde 1986 a instituição realiza feiras de livros em diversas localidades do Amazonas. Ao longo dessas décadas milhares de leitores tiveram a oportunidade de se aproximar da literatura de maneira lúdica e criativa.\nÉ também uma prática social indispensável na formação humana, pois, por meio dela, ampliam-se as potencialidades de reflexão e de pesquisa que, por sua vez, corroboram na produção do conhecimento. Assim sendo, essa prática é conditio sine qua non para o exercício da cidadania.\nO Sesc reconhece a importância da leitura e se orgulha em promover projetos e atividades que a incentivam, como a Feira de Livros, o Festival Literário, o Sesc Ler e o Bibliosesc. O projeto Sesc Ler que incentiva a leitura está presente na capital e em Manacapuru, Itacoatiara, Presidente Figueiredo, Parintins, Maués e Tefé. Já o Bibliosesc é uma unidade móvel que permite à população acesso a livros de vários estilos e segmentos.\nEste ano, o Sesc traz a 4ª edição do Festival Literário que irá acontecer de 10 a 14 de outubro no município de Itacoatiara. O Festival que tem como tema "Cidade espaço de vida, palavras e poesias", homenageando o escritor Aldisio Filgueiras, integra a vasta programação do Sesc no que diz respeito ao fomento e incentivo a formação do leitor e cidadão.\nA ação também tem como objetivo envolver instituições e empresas, chamando-as à responsabilidade social na formação da população, na preservação e promoção da cultura brasileira e na participação da cultura regional amazônica. Que este ano conta com a parceria do Banco da Amazônia, Caixa Econômica Federal e Governo Federal, Sidi Telecomunicações, Mil Madeiras, Paco Uniformes e o Senac AM.\nA programação contará com encontros literários, palestras, vendas de livros, espaços recreativos e de entretenimento, além da participação de escritores regionais. Para promover a valorização do livro e da leitura no imaginário popular, incentivando a leitura e contribuindo significativamente para a formação intelectual, mediante a oferta de uma programação que contemple a formação de leitores.\n<p class="text-sm text-slate-500 mt-2">Fonte: https://www.sesc-am.com.br/cultura/a-importancia-da-leitura-na-formacao-da-cidadania/Acesso em: 02 de maio de 2025.</p>`
                            },
                            statement: "Apesar de o texto defender explicitamente o valor da leitura, ele também sugere um papel político e social da escola e do professor. Qual é esse papel e como ele se manifesta nas entrelinhas do texto?",
                            answer: "O texto sugere que a escola e o professor são agentes transformadores, com o dever de desenvolver o gosto pela leitura e formar leitores críticos e reflexivos. Isso aparece de forma implícita quando se afirma que \"o professor deve entregar ferramentas\" e \"visualizar-se como mediador da descoberta\"."
                        },
                        {
                            id: "em-r-q4",
                            descriptor: "D06",
                            type: "subjetiva",
                            supportText: {
                                title: "A importância da leitura na formação da cidadania",
                                content: `A leitura é algo essencial na formação dos cidadãos, desenvolve a criatividade, aumenta o vocabulário, aprimora o conhecimento, além de ajudar na concentração e na construção textual. Sabendo dessa importância o Sesc AM incentiva essa prática, desde 1986 a instituição realiza feiras de livros em diversas localidades do Amazonas. Ao longo dessas décadas milhares de leitores tiveram a oportunidade de se aproximar da literatura de maneira lúdica e criativa.\nÉ também uma prática social indispensável na formação humana, pois, por meio dela, ampliam-se as potencialidades de reflexão e de pesquisa que, por sua vez, corroboram na produção do conhecimento. Assim sendo, essa prática é conditio sine qua non para o exercício da cidadania.\nO Sesc reconhece a importância da leitura e se orgulha em promover projetos e atividades que a incentivam, como a Feira de Livros, o Festival Literário, o Sesc Ler e o Bibliosesc. O projeto Sesc Ler que incentiva a leitura está presente na capital e em Manacapuru, Itacoatiara, Presidente Figueiredo, Parintins, Maués e Tefé. Já o Bibliosesc é uma unidade móvel que permite à população acesso a livros de vários estilos e segmentos.\nEste ano, o Sesc traz a 4ª edição do Festival Literário que irá acontecer de 10 a 14 de outubro no município de Itacoatiara. O Festival que tem como tema "Cidade espaço de vida, palavras e poesias", homenageando o escritor Aldisio Filgueiras, integra a vasta programação do Sesc no que diz respeito ao fomento e incentivo a formação do leitor e cidadão.\nA ação também tem como objetivo envolver instituições e empresas, chamando-as à responsabilidade social na formação da população, na preservação e promoção da cultura brasileira e na participação da cultura regional amazônica. Que este ano conta com a parceria do Banco da Amazônia, Caixa Econômica Federal e Governo Federal, Sidi Telecomunicações, Mil Madeiras, Paco Uniformes e o Senac AM.\nA programação contará com encontros literários, palestras, vendas de livros, espaços recreativos e de entretenimento, além da participação de escritores regionais. Para promover a valorização do livro e da leitura no imaginário popular, incentivando a leitura e contribuindo significativamente para a formação intelectual, mediante a oferta de uma programação que contemple a formação de leitores.\n<p class="text-sm text-slate-500 mt-2">Fonte: https://www.sesc-am.com.br/cultura/a-importancia-da-leitura-na-formacao-da-cidadania/Acesso em: 02 de maio de 2025.</p>`
                            },
                            statement: "O texto afirma que \"a leitura apresenta uma importância vital como estratégia de melhoria do processo de ensino e aprendizagem”. Com base nos argumentos do autor, explique qual é a causa e qual é a consequência dessa afirmação.",
                            answer: "Causa: A leitura estimula a reflexão, a análise crítica e o desenvolvimento cognitivo. Consequência: A melhoria do processo de ensino e aprendizagem, pois os alunos passam a compreender melhor os conteúdos e a desenvolver autonomia intelectual."
                        },
                        {
                            id: "em-r-q5",
                            descriptor: "D14",
                            type: "subjetiva",
                            supportText: {
                                title: "A importância da leitura na formação da cidadania",
                                content: `A leitura é algo essencial na formação dos cidadãos, desenvolve a criatividade, aumenta o vocabulário, aprimora o conhecimento, além de ajudar na concentração e na construção textual. Sabendo dessa importância o Sesc AM incentiva essa prática, desde 1986 a instituição realiza feiras de livros em diversas localidades do Amazonas. Ao longo dessas décadas milhares de leitores tiveram a oportunidade de se aproximar da literatura de maneira lúdica e criativa.\nÉ também uma prática social indispensável na formação humana, pois, por meio dela, ampliam-se as potencialidades de reflexão e de pesquisa que, por sua vez, corroboram na produção do conhecimento. Assim sendo, essa prática é conditio sine qua non para o exercício da cidadania.\nO Sesc reconhece a importância da leitura e se orgulha em promover projetos e atividades que a incentivam, como a Feira de Livros, o Festival Literário, o Sesc Ler e o Bibliosesc. O projeto Sesc Ler que incentiva a leitura está presente na capital e em Manacapuru, Itacoatiara, Presidente Figueiredo, Parintins, Maués e Tefé. Já o Bibliosesc é uma unidade móvel que permite à população acesso a livros de vários estilos e segmentos.\nEste ano, o Sesc traz a 4ª edição do Festival Literário que irá acontecer de 10 a 14 de outubro no município de Itacoatiara. O Festival que tem como tema "Cidade espaço de vida, palavras e poesias", homenageando o escritor Aldisio Filgueiras, integra a vasta programação do Sesc no que diz respeito ao fomento e incentivo a formação do leitor e cidadão.\nA ação também tem como objetivo envolver instituições e empresas, chamando-as à responsabilidade social na formação da população, na preservação e promoção da cultura brasileira e na participação da cultura regional amazônica. Que este ano conta com a parceria do Banco da Amazônia, Caixa Econômica Federal e Governo Federal, Sidi Telecomunicações, Mil Madeiras, Paco Uniformes e o Senac AM.\nA programação contará com encontros literários, palestras, vendas de livros, espaços recreativos e de entretenimento, além da participação de escritores regionais. Para promover a valorização do livro e da leitura no imaginário popular, incentivando a leitura e contribuindo significativamente para a formação intelectual, mediante a oferta de uma programação que contemple a formação de leitores.\n<p class="text-sm text-slate-500 mt-2">Fonte: https://www.sesc-am.com.br/cultura/a-importancia-da-leitura-na-formacao-da-cidadania/Acesso em: 02 de maio de 2025.</p>`
                            },
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
                            supportText: {
                                title: "A cabeça pensa a partir de onde os pés pisam (Leonardo Boff)",
                                content: `A cabeça pensa a partir de onde os pés pisam. Para compreender, é essencial conhecer o lugar social de quem olha. Vale dizer: como alguém vive, com quem convive, que experiências tem, em que trabalha, que desejos alimenta, como assume os dramas da vida e da morte e que esperanças o animam. Isso faz da compreensão sempre uma interpretação.\n<p class="text-sm text-slate-500 mt-2">Fonte: Boff, Leonardo. A águia e a galinha. 4ª ed. Rio de Janeiro: Sextante, 1999.</p>`
                            },
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
                            supportText: {
                                title: "Mãos Dadas (Carlos Drummond de Andrade)",
                                content: `Não serei o poeta de um mundo caduco.\nTambém não cantarei o mundo futuro.\nEstou preso à vida e olho meus companheiros.\nEstão taciturnos mas nutrem grandes esperanças.\nEntre eles, considero a enorme realidade.\nO presente é tão grande, não nos afastemos.\nNão nos afastemos muito, vamos de mãos dadas.\n<p class="text-sm text-slate-500 mt-2">Fonte: Drummond de Andrade, Carlos. Poesia Completa. Rio de Janeiro: Nova Aguilar, 2002.</p>`
                            },
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
                             supportText: {
                                title: "O trabalho e o meio ambiente (Marcelo Nunes Mestriner)",
                                content: `O trabalho humano sempre esteve ligado à transformação da natureza. Desde os primórdios, o homem modifica o ambiente para atender às suas necessidades. No entanto, essa relação nem sempre foi equilibrada. A busca incessante por recursos e o desenvolvimento industrial têm causado impactos ambientais significativos, como o desmatamento, a poluição e a perda da biodiversidade. É fundamental repensar as formas de produção e consumo para garantir a sustentabilidade do planeta.\n<p class="text-sm text-slate-500 mt-2">Fonte: Mestriner, Marcelo Nunes. O trabalho e o meio ambiente.</p>`
                            },
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
                            supportText: {
                                title: "A Cartomante - Machado de Assis",
                                content: `Camilo achou-se na rua, sem saber como nem por que. A cartomante, a princípio, pareceu-lhe um remédio contra a inquietação. Depois, a ideia de ir lá pareceu-lhe absurda. Era um homem ilustrado, crente em Deus, e só em Deus; mas a superstição é uma coisa que se mete por todos os interstícios da razão, e às vezes domina-a. Camilo resistiu algum tempo; afinal cedeu. 'Vamos lá', disse consigo. 'Quero ver o que é isso.'\n<p class="text-sm text-slate-500 mt-2">Fonte: Assis, Machado de. Contos Fluminenses. Rio de Janeiro: Garnier, 1870.</p>`
                            },
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
                            supportText: {
                                title: "A Máquina do Tempo – H.G. Wells",
                                content: `O Viajante do Tempo (pois assim o chamaremos) estava explicando uma teoria muito singular. Segundo ele, o tempo não é uma entidade separada, mas uma quarta dimensão, além das três dimensões do espaço. Ele argumentava que, assim como podemos mover-nos livremente nas direções do espaço, deveríamos ser capazes de mover-nos no tempo. Seus ouvintes estavam céticos, mas ele insistia que tinha construído uma máquina capaz de viajar através do tempo.\n<p class="text-sm text-slate-500 mt-2">Fonte: Wells, H.G. A Máquina do Tempo.</p>`
                            },
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
                            supportText: {
                                title: "O impacto das redes sociais na sociedade contemporânea",
                                content: `As redes sociais transformaram a maneira como as pessoas se comunicam e compartilham informações. Plataformas como Facebook, Twitter e Instagram permitem que usuários publiquem conteúdos instantaneamente, alcançando um público global.\nEstudos indicam que o uso excessivo dessas plataformas pode levar a problemas de saúde mental, como ansiedade e depressão. Além disso, a disseminação de notícias falsas tornou-se uma preocupação significativa, influenciando opiniões e comportamentos.\nApesar dos desafios, as redes sociais também oferecem benefícios. Elas facilitam a mobilização social, permitindo que causas importantes ganhem visibilidade rapidamente. Campanhas de arrecadação de fundos e movimentos sociais frequentemente utilizam essas plataformas para alcançar seus objetivos.\nNo entanto, é essencial que os usuários desenvolvam um senso crítico ao consumir informações online. A educação digital deve ser promovida para que as pessoas possam distinguir entre conteúdo confiável e desinformação.\n<p class="text-sm text-slate-500 mt-2">Fonte: Santaella, Lúcia. "O impacto das redes sociais na sociedade contemporânea". Revista Comunicação & Sociedade, vol. 42, 2021.</p>`
                            },
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
                            supportText: {
                                title: "A economia da felicidade – Jeffrey D. Sachs",
                                content: `Vivemos em tempos de altas ansiedades. Apesar de o mundo usufruir de uma riqueza total sem precedentes, também há ampla insegurança, agitação e insatisfação. Nos Estados Unidos, uma grande maioria dos americanos acredita que o país está “no caminho errado”. O pessimismo está nas alturas. O mesmo vale para muitos outros lugares.\nTendo essa situação como pano de fundo, chegou a hora de reconsiderar as fontes básicas de felicidade em nossa vida econômica. A busca incansável de rendas maiores vem nos levando a uma ansiedade e iniquidade sem precedentes, em vez de nos conduzir a uma maior felicidade e satisfação na vida. O progresso econômico é importante e pode melhorar a qualidade de vida, mas só se o buscarmos junto com outras metas. [...]\n<p class="text-sm text-slate-500 mt-2">SACHS, Jeffrey D. Disponível em: http://zelmar.blogspot.com/2011/08/economia-da-felicidade.html.</p>`
                            },
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
                            supportText: {
                                title: "No Meio do Caminho - Carlos Drummond de Andrade",
                                content: `No meio do caminho tinha uma pedra\ntinha uma pedra no meio do caminho\ntinha uma pedra\nno meio do caminho tinha uma pedra.\nNunca me esquecerei desse acontecimento\nna vida de minhas retinas tão fatigadas.\nNunca me esquecerei que no meio do caminho\ntinha uma pedra\ntinha uma pedra no meio do caminho\nno meio do caminho tinha uma pedra.\n<p class="text-sm text-slate-500 mt-2">Fonte: Carlos Drummond de Andrade, Alguma Poesia, 1930.</p>`
                            },
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
                            supportText: {
                                title: "A Revolução dos Bichos – George Orwell",
                                content: `Após a expulsão dos humanos, os animais da Granja do Solar estabeleceram um novo regime baseado na igualdade. No entanto, com o tempo, os porcos assumiram posições de liderança e começaram a se beneficiar mais do que os outros animais. As promessas de igualdade foram gradualmente substituídas por privilégios para os líderes.\n<p class="text-sm text-slate-500 mt-2">Fonte: Orwell, George. A Revolução dos Bichos.</p>`
                            },
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
                            supportText: {
                                title: "A importância da leitura na formação do cidadão",
                                content: `A leitura é uma ferramenta essencial no desenvolvimento intelectual e crítico do indivíduo. Por meio dela, é possível adquirir conhecimento, expandir o vocabulário e compreender diferentes perspectivas.\nDados do Instituto Brasileiro de Geografia e Estatística (IBGE) indicam que o número de leitores no Brasil tem aumentado nos últimos anos. No entanto, ainda há um longo caminho a percorrer para que a leitura se torne um hábito consolidado entre os brasileiros.\nÉ fundamental que escolas e famílias incentivem a prática da leitura desde a infância, proporcionando acesso a livros e criando ambientes que estimulem o interesse pelas letras.\n<p class="text-sm text-slate-500 mt-2">Fonte: Martins, José de Souza. "A importância da leitura na formação do cidadão". Folha de S.Paulo, 15 mar. 2020.</p>`
                            },
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
    },
    "Percurso Formativo II": {
        ensinoFundamental: {
            momentos: [
                {
                    title: "1º Momento: Retomada (Avaliação Diagnóstica)",
                    questions: [
                        {
                            id: "ef2-r-q1",
                            type: "subjetiva",
                            descriptor: "D05",
                            supportText: {
                                title: "Infográfico: Água - Curiosidades",
                                imageUrl: "https://stvnews.com.br/files/infografico-agua.png",
                                content: "Infográfico com dados sobre o consumo e desperdício de água no Brasil e no mundo. Usa ícones e cores para destacar informações como o consumo médio diário e a porcentagem de água tratada desperdiçada."
                            },
                            statement: "Explique como os elementos gráficos (ícones, cores, disposição dos dados) contribuem para a compreensão das informações apresentadas no infográfico.",
                            answer: "Os elementos gráficos ajudam a organizar visualmente as informações e facilitam a leitura e memorização dos dados. Cores vivas destacam os números principais, os ícones ilustram conceitos como desperdício, consumo e economia, e a disposição em blocos e porcentagens permite a comparação rápida entre dados. Isso torna a mensagem mais acessível e impactante."
                        },
                        {
                            id: "ef2-r-q2",
                            type: "subjetiva",
                            descriptor: "D05",
                            supportText: {
                                title: "Infográfico: Água - Curiosidades",
                                imageUrl: "https://stvnews.com.br/files/infografico-agua.png",
                                content: "Infográfico com dados sobre o consumo e desperdício de água no Brasil e no mundo. Usa ícones e cores para destacar informações como o consumo médio diário e a porcentagem de água tratada desperdiçada."
                            },
                            statement: "Com base nos dados apresentados, quais são os principais desafios enfrentados pelo Brasil em relação ao consumo de água potável?",
                            answer: "Os principais desafios são o alto índice de desperdício de água tratada (37%) e o consumo acima do recomendado (média de 200 litros por pessoa contra os 110 litros ideais). Isso aponta para a necessidade de políticas públicas mais eficazes de controle, conscientização e preservação dos recursos hídricos."
                        },
                        {
                            id: "ef2-r-q3",
                            type: "subjetiva",
                            descriptor: "D05",
                            supportText: {
                                title: "Infográfico: Água - Curiosidades",
                                imageUrl: "https://stvnews.com.br/files/infografico-agua.png",
                                content: "Infográfico com dados sobre o consumo e desperdício de água no Brasil e no mundo. Usa ícones e cores para destacar informações como o consumo médio diário e a porcentagem de água tratada desperdiçada."
                            },
                            statement: "De que forma a combinação entre os dados estatísticos e os elementos visuais pode provocar uma reflexão crítica sobre os hábitos de consumo de água da população brasileira?",
                            answer: "O infográfico utiliza uma combinação estratégica de dados numéricos e recursos visuais (como ícones, gráficos e cores) para evidenciar o contraste entre o consumo ideal e o consumo real de água no Brasil. Os elementos gráficos facilitam a assimilação rápida das informações e aumentam o impacto da mensagem. Por exemplo, ao mostrar que o consumo médio é quase o dobro do recomendado, o leitor é levado a refletir criticamente sobre o desperdício e suas consequências. A linguagem visual, aliada aos dados, cumpre um papel de alerta, incentivando a adoção de práticas mais sustentáveis no cotidiano."
                        },
                        {
                            id: "ef2-r-q4",
                            type: "subjetiva",
                            descriptor: "D12",
                            supportText: {
                                title: "A Tecnologia e o Futuro da Educação",
                                content: `A integração da tecnologia no ambiente educacional tem transformado a maneira como aprendemos e ensinamos. Plataformas digitais, aulas online e recursos interativos oferecem novas possibilidades para estudantes e professores. No entanto, é fundamental garantir que todos tenham acesso equitativo a essas ferramentas para que a educação seja verdadeiramente inclusiva e eficaz.\nA pandemia acelerou a adoção de tecnologias na educação, evidenciando tanto os benefícios quanto os desafios desse processo. Enquanto alguns estudantes se adaptaram rapidamente ao ensino remoto, outros enfrentaram dificuldades devido à falta de acesso à internet ou a dispositivos adequados.\nPara que a tecnologia cumpra seu papel de democratizar o ensino, é necessário investir em infraestrutura, formação de professores e desenvolvimento de conteúdos digitais de qualidade. Somente assim será possível construir um sistema educacional mais justo e preparado para os desafios do século XXI.\n<p class="text-sm text-slate-500 mt-2">(Texto adaptado)</p>`
                            },
                            statement: "Qual é a principal finalidade deste texto? Justifique sua resposta com base no conteúdo apresentado.",
                            answer: "A principal finalidade do texto é informar e refletir sobre o impacto da tecnologia na educação, especialmente diante dos desafios evidenciados pela pandemia. O autor busca conscientizar o leitor sobre a importância de investimentos em infraestrutura e formação para garantir uma educação inclusiva e eficaz."
                        },
                        {
                            id: "ef2-r-q5",
                            type: "subjetiva",
                            descriptor: "D12",
                            supportText: {
                                title: "A Tecnologia e o Futuro da Educação",
                                content: `A integração da tecnologia no ambiente educacional tem transformado a maneira como aprendemos e ensinamos. Plataformas digitais, aulas online e recursos interativos oferecem novas possibilidades para estudantes e professores. No entanto, é fundamental garantir que todos tenham acesso equitativo a essas ferramentas para que a educação seja verdadeiramente inclusiva e eficaz.\nA pandemia acelerou a adoção de tecnologias na educação, evidenciando tanto os benefícios quanto os desafios desse processo. Enquanto alguns estudantes se adaptaram rapidamente ao ensino remoto, outros enfrentaram dificuldades devido à falta de acesso à internet ou a dispositivos adequados.\nPara que a tecnologia cumpra seu papel de democratizar o ensino, é necessário investir em infraestrutura, formação de professores e desenvolvimento de conteúdos digitais de qualidade. Somente assim será possível construir um sistema educacional mais justo e preparado para os desafios do século XXI.\n<p class="text-sm text-slate-500 mt-2">(Texto adaptado)</p>`
                            },
                            statement: "Quais recursos linguísticos o autor utiliza para persuadir o leitor sobre a importância da tecnologia na educação?",
                            answer: "O autor utiliza uma linguagem clara e objetiva, apresentando dados e exemplos concretos para sustentar seus argumentos. O uso de termos como \"fundamental\", \"necessário\" e \"somente assim será possível\" reforça a urgência e a importância das ações propostas."
                        },
                        {
                            id: "ef2-r-q6",
                            type: "subjetiva",
                            descriptor: "D12",
                            supportText: {
                                title: "A Tecnologia e o Futuro da Educação",
                                content: `A integração da tecnologia no ambiente educacional tem transformado a maneira como aprendemos e ensinamos. Plataformas digitais, aulas online e recursos interativos oferecem novas possibilidades para estudantes e professores. No entanto, é fundamental garantir que todos tenham acesso equitativo a essas ferramentas para que a educação seja verdadeiramente inclusiva e eficaz.\nA pandemia acelerou a adoção de tecnologias na educação, evidenciando tanto os benefícios quanto os desafios desse processo. Enquanto alguns estudantes se adaptaram rapidamente ao ensino remoto, outros enfrentaram dificuldades devido à falta de acesso à internet ou a dispositivos adequados.\nPara que a tecnologia cumpra seu papel de democratizar o ensino, é necessário investir em infraestrutura, formação de professores e desenvolvimento de conteúdos digitais de qualidade. Somente assim será possível construir um sistema educacional mais justo e preparado para os desafios do século XXI.\n<p class="text-sm text-slate-500 mt-2">(Texto adaptado)</p>`
                            },
                            statement: "Como o contexto atual influencia a relevância do tema abordado no texto?",
                            answer: "O contexto da pandemia de COVID-19 é central no texto, pois acelerou a adoção de tecnologias na educação e evidenciou desigualdades no acesso a recursos digitais. Essa situação torna o tema ainda mais relevante, destacando a necessidade de soluções para garantir a equidade no ensino."
                        },
                        {
                            id: "ef2-r-q7",
                            type: "objetiva",
                            descriptor: "D05",
                            supportText: {
                                title: "Cartum",
                                imageUrl: "https://stvnews.com.br/files/imagem2.png",
                                content: `Uma professora faz a chamada na sala. Após chamar vários números, ela diz 'Trinta e oito...'. Um aluno no fundo da sala, com um revólver na mão, responde 'Tá aqui!!', confundindo o número da chamada com o calibre de uma arma.`
                            },
                            statement: "De acordo com o cartum, o último aluno que estava no fundo da sala, compreendeu que a professora durante a chamada estava se referindo",
                            options: ["ao número 38.", "a um revólver.", "a uma piada.", "a presença."],
                            answer: 1,
                            feedback: ""
                        },
                        {
                            id: "ef2-r-q8",
                            type: "objetiva",
                            descriptor: "D05",
                            supportText: {
                                title: "Tirinha",
                                imageUrl: "https://stvnews.com.br/files/imagem3.png",
                                content: `Tirinha de 3 quadros. Quadro 1: "NO MUNDO CONECTADO NÃO HÁ PRECONCEITOS". Personagem no computador mente: "Sou alto, loiro e sincero". Quadro 2: "NÃO HÁ IGNORÂNCIA". Outro personagem diz: "Ler pra quê? Tem tudo na Wikipédia!". Quadro 3: "E NÃO HÁ COVARDIA". Uma mensagem de término de namoro aparece na tela.`
                            },
                            statement: "A tirinha abaixo tem como propósito comunicativo:",
                            options: ["refletir sobre o mal uso da internet no cotidiano", "expor os usos que podemos fazer da internet no cotidiano", "expor as ferramentas de comunicação disponíveis na internet", "explicar sobre como a internet substituiu a leitura"],
                            answer: 0,
                            feedback: ""
                        },
                        {
                            id: "ef2-r-q9",
                            type: "objetiva",
                            descriptor: "D12",
                            supportText: {
                                content: `Julgo que os homens que fazem a política externa do Brasil, no Itamaraty, são excessivamente pragmáticos. Tiveram sempre vida fácil, vêm da elite brasileira e nunca participaram, eles próprios, em combates contra a ditadura, contra o colonialismo. Obviamente não têm a sensibilidade de muitos outros países ou diplomatas que conheço.\n<p class="text-sm text-slate-500 mt-2">(José Ramos-Horta, na Folha de São Paulo, 21/10/96)</p>`
                            },
                            statement: "Pelo visto, o autor gostaria de que os homens do Itamaraty tivessem mais:",
                            options: ["inteligência", "patriotismo", "vivência", "coerência"],
                            answer: 2,
                            feedback: ""
                        },
                        {
                            id: "ef2-r-q10",
                            type: "objetiva",
                            descriptor: "D12",
                            supportText: {
                                title: "TROCA DE LIVROS",
                                content: `Sabe aquele livro que você já leu várias vezes e está paradão lá na estante, esperando alguém que dê atenção a ele de novo?\nQue tal trocá-lo por outro – e, assim, ganhar outra história para ler e se divertir? Pois até o dia 30, o Museu da Limpeza Urbana - Casa de Banho D. João VI está promovendo um troca-troca literário imperdível. Para começar a ler lá mesmo, o museu oferece a sua biblioteca, num cantinho especial.\nO endereço do museu é Praia do Caju 385, e a biblioteca está aberta de terça a sexta-feira, sempre das 9h às 16h.\n<p class="text-sm text-slate-500 mt-2">(Texto adaptado)</p>`
                            },
                            statement: "Podemos dizer que o texto tem a finalidade de",
                            options: ["causar emoção no leitor.", "apresentar um ponto de vista.", "vender um produto pouco divulgado.", "dar informações sobre um evento."],
                            answer: 3,
                            feedback: ""
                        }
                    ]
                },
                {
                    title: "2º Momento: Ampliação (Avaliação Formativa)",
                    questions: [
                        {
                            id: "ef2-a-q1",
                            type: "objetiva",
                            descriptor: "D05",
                            supportText: {
                                title: "Tirinha Garfield",
                                imageUrl: "./assets/tirinha_garfield_manha.png",
                                content: `Jon boceja e diz que o dia está melhorando, pois a manhã foi a pior de sua vida. Garfield pensa: 'Pois é, geralmente eu não acordo tão cedo', implicando que ele acordou Jon.`
                            },
                            statement: "A tirinha apresenta cenas entre Jon e seu gato, Garfield. Da leitura da sequência em quadrinhos, pode-se entender que:",
                            options: ["Garfield piorou a manhã de Jon.", "Jon estava tendo um bom dia.", "Jon fica mal-humorado de manhã.", "Garfield acordou bem-humorado"],
                            answer: 0,
                            feedback: ""
                        },
                        {
                            id: "ef2-a-q2",
                            type: "objetiva",
                            descriptor: "D05",
                            supportText: {
                                title: "Tirinha",
                                imageUrl: "./assets/tirinha_mulher_zangada.png",
                                content: `Um homem pergunta a uma mulher se ela ainda está zangada. Ela, com uma faca na mão e um sorriso falso, nega e oferece café da manhã. Sua expressão corporal contradiz suas palavras.`
                            },
                            statement: "No texto, ao associar a linguagem verbal e não verbal, pode-se concluir que a mulher, em relação à atitude do homem, estava",
                            options: ["Indiferente.", "Animada.", "Zangada.", "Conformada."],
                            answer: 2,
                            feedback: ""
                        },
                        {
                            id: "ef2-a-q3",
                            type: "objetiva",
                            descriptor: "D05",
                            supportText: {
                                title: "Tirinha Calvin",
                                imageUrl: "./assets/tirinha_calvin_balanco.png",
                                content: `O pai de Calvin está visivelmente cansado e atrasado para o trabalho enquanto monta um balanço para o filho, que parece alheio à pressa do pai. No final, o pai grita com Calvin.`
                            },
                            statement: "Ao associar as linguagens verbal e não verbal, conclui-se que o homem, no último quadrinho, está",
                            options: ["Triste.", "Bravo.", "Contente.", "Decepcionado."],
                            answer: 1,
                            feedback: ""
                        },
                        {
                            id: "ef2-a-q4",
                            type: "objetiva",
                            descriptor: "D05",
                            supportText: {
                                title: "Charge",
                                imageUrl: "./assets/charge_transito_redes_sociais.png",
                                content: `Charge sobre o trânsito violento. Um motorista usa o celular enquanto dirige e diz que o trânsito está tranquilo. Ao fundo, pedestres correm para não serem atropelados.`
                            },
                            statement: "Ao associar a linguagem verbal e não verbal, conclui-se que as pessoas que atravessam na faixa de pedestre estão",
                            options: ["Apáticas.", "Tranquilas.", "Apavoradas.", "Indiferentes."],
                            answer: 2,
                            feedback: ""
                        },
                        {
                            id: "ef2-a-q5",
                            type: "objetiva",
                            descriptor: "D12",
                            supportText: {
                                title: "Leia o texto abaixo",
                                content: `Goiânia, 10 de outubro de 2018.\nPrezada Marta Guimarães,\nVenho por meio desta agradecer os brinquedos que nos foram enviadas pela senhora para as crianças carentes que são assistidas pela nossa ONG “Criança feliz”. Nós trabalhamos muito para ajudar essas crianças. Conforme pode ver nas fotos anexas, as crianças ficaram muito felizes e agradecidas por causa dos brinquedos. Espero poder contar com essa parceria outras vezes, pois será muito importante para as crianças. A atitude da senhora foi extremamente grandiosa e proporcionou a alegria dessas crianças que tem tão pouco no seu cotidiano.\nMuito obrigado!\nAtenciosamente, Márcio Reis.`
                            },
                            statement: "Qual é o objetivo desse texto?",
                            options: ["Agradecer pelos brinquedos enviados pela senhora Marta Guimarães.", "Divulgar a doação de brinquedos feita pela senhora Marta Guimarães.", "Informar sobre a alegria das crianças por ter recebido os brinquedos.", "Apresentar o trabalho desenvolvido pela ONG \"Criança feliz\"."],
                            answer: 0,
                            feedback: ""
                        },
                        {
                            id: "ef2-a-q6",
                            type: "objetiva",
                            descriptor: "D12",
                            supportText: {
                                title: "Charge",
                                imageUrl: "./assets/charge_tempo_perdido.png",
                                content: `Professora pergunta o tempo verbal da frase 'Eu procuro um político que trabalhe para o povo'. Um aluno responde: 'Tempo perdido!'`
                            },
                            statement: "O texto tem a finalidade principal de",
                            options: ["desaprovar um comportamento.", "informar um acontecimento público.", "satirizar uma situação comum na escola.", "criticar a gramática da língua portuguesa."],
                            answer: 2,
                            feedback: "Embora a charge critique a política, o cenário é escolar, e a piada se constrói dentro desse contexto, satirizando a situação."
                        },
                        {
                            id: "ef2-a-q8",
                            type: "objetiva",
                            descriptor: "D12",
                            supportText: {
                                title: "Respeito ao Araguaia",
                                content: `Reportagem nessa edição traz elementos para uma importante reflexão ambiental. Ninguém ousa discordar que o Rio Araguaia seja um patrimônio afetivo dos goianos, numa relação que a cada nova temporada se fortalece. Porém, o afeto não se traduz em respeito, se levarmos em consideração a monumental quantidade de lixo deixada nas 25 praias que ficam no leito do rio que corta o município de Aruanã.\nNesse ano, a prefeitura local recolheu 175 toneladas de lixo deixados na natureza, após os acampamentos. Os rejeitos vão de cadeiras e churrasqueiras até vasos sanitários e pneus. O volume de lixo daria para encher 12 caminhões da Companhia de Urbanização de Goiânia. A média diária ficou em 8 toneladas.\nA Secretaria Municipal de Meio Ambiente de Aruanã chegou a fazer um trabalho de conscientização, visitando acampamentos e chamando a atenção para a importância de se pensar na destinação do lixo por parte dos turistas.\nContudo, como não é possível designar um fiscal para cada acampamento, é vital que o turista assuma para si essa responsabilidade, sob pena de degradar o endereço que todo goiano aprendeu a amar.`
                            },
                            statement: "Esse editorial publicado no Jornal O Popular tem por objetivo",
                            options: ["instruir os turistas sobre a destinação adequada do lixo no Rio Araguaia.", "opinar criticamente sobre a falta de respeito dos goianos em relação ao Rio Araguaia.", "divulgar o trabalho feito pela Secretaria Municipal de Meio Ambiente de Aruanã.", "apresentar informação sobre a quantidade de toneladas de lixo deixados na natureza."],
                            answer: 1,
                            feedback: ""
                        },
                        {
                            id: "ef2-a-q9",
                            type: "objetiva",
                            descriptor: "D12",
                            supportText: {
                                title: "O leão e o ratinho",
                                content: `Ao sair do buraco viu-se um ratinho entre as patas do leão. Estacou, de pelos em pé, paralisado pelo terror. O leão, porém, não lhe fez mal nenhum.\n— Segue em paz, ratinho; não tenhas medo de teu rei.\nDias depois o leão caiu numa rede. Urrou desesperadamente, bateu-se, mas quanto mais se agitava mais preso no laço ficava.\nAtraído pelos urros, apareceu o ratinho.\n— Amor com amor se paga — disse ele lá consigo e pôs-se a roer as cordas. Num instante conseguiu romper uma das malhas. E como a rede era das tais que rompida a primeira malha as outras se afrouxavam, pode o leão deslindar-se e fugir.\nMais vale paciência pequenina do que arrancos de leão.\n<p class="text-sm text-slate-500 mt-2">LOBATO, Monteiro. Fábulas. São Paulo: Brasiliense, 1958.</p>`
                            },
                            statement: "Qual é a finalidade do texto?",
                            options: ["Apresentar um ensinamento moral.", "Analisar o comportamento dos animais.", "Descrever as características dos animais.", "Mostrar um traço da personalidade do leão."],
                            answer: 0,
                            feedback: ""
                        },
                        {
                            id: "ef2-a-q10",
                            type: "objetiva",
                            descriptor: "D12",
                            supportText: {
                                title: "Tirinha Hagar",
                                imageUrl: "./assets/tirinha_hagar_rude.png",
                                content: `Helga diz que Hagar é um caso perdido. Ao ser questionada, ela explica que disse a ele que era rude comer com as mãos, e ele respondeu: 'Sem as mãos, como vou comer?'`
                            },
                            statement: "O objetivo desse texto é",
                            options: ["Informar.", "Entreter.", "Instruir.", "Opinar."],
                            answer: 1,
                            feedback: ""
                        }
                    ]
                },
                {
                    title: "3º Momento: Consolidação (Avaliação Comparativa)",
                    questions: [
                        {
                            id: "ef2-c-q1",
                            type: "objetiva",
                            descriptor: "D05",
                            supportText: {
                                title: "Dias da Semana",
                                imageUrl: "./assets/dias_da_semana.png",
                                content: `Os dias da semana são representados visualmente: quinta e sexta-feira com letras inclinadas, sábado e domingo com letras rápidas e com asas, e segunda-feira com letras retas, sugerindo a velocidade com que o fim de semana passa.`
                            },
                            statement: "No texto, as letras inclinadas, as nuvenzinhas rompidas, as asas e os traços usados na representação do sábado e do domingo sugerem",
                            options: ["serenidade.", "tempestade.", "tranquilidade.", "velocidade."],
                            answer: 3,
                            feedback: ""
                        },
                        {
                            id: "ef2-c-q2",
                            type: "objetiva",
                            descriptor: "D05",
                            supportText: {
                                title: "Propaganda",
                                imageUrl: "./assets/propaganda_gatinho_imposto.png",
                                content: `Propaganda sobre imposto de renda. A imagem mostra um gatinho atravessando a rua, com o slogan 'Tem um gatinho solto nas ruas'. O texto explica que o imposto de renda, se não declarado no prazo, vira um leão.`
                            },
                            statement: "Na figura acima, a relação entre o slogan \"Tem um gatinho solto nas ruas” e a imagem ocorre de forma:",
                            options: ["irônica", "incoerente", "redundante", "afetiva"],
                            answer: 0,
                            feedback: ""
                        },
                        {
                            id: "ef2-c-q3",
                            type: "objetiva",
                            descriptor: "D05",
                            supportText: {
                                title: "Tirinha Hagar",
                                imageUrl: "./assets/tirinha_hagar_casamento.png",
                                content: `Helga pergunta o segredo de um casamento perfeito. Uma amiga descreve um homem ideal que não come, não bebe, não joga e não faz bagunça. Helga conclui que para ter um casamento perfeito, precisa casar com um homem morto.`
                            },
                            statement: "No segundo quadrinho, pode-se deduzir pela fala da personagem que",
                            options: ["não existem maridos perfeitos.", "não há segredos para um casamento perfeito.", "não há mulheres felizes.", "não há homens infelizes."],
                            answer: 0,
                            feedback: ""
                        },
                        {
                            id: "ef2-c-q4",
                            type: "objetiva",
                            descriptor: "D05",
                            supportText: {
                                title: "Verdugo, o inacreditável",
                                imageUrl: "./assets/tirinha_verdugo_parque.png",
                                content: `Personagem Verdugo está em um parque, mas foge apavorado dizendo que está sendo intoxicado porque o ar é 'limpo demais', mostrando que está acostumado com a poluição.`
                            },
                            statement: "Após a leitura da História em Quadrinhos, podemos afirmar que o personagem Verdugo",
                            options: ["costuma visitar o parque quase que diariamente.", "tem alergia ao cheiro forte da madeira fresca.", "está desacostumado à pratica de atividades ao ar livre.", "engasgou-se, sem fôlego, enquanto andava de bicicleta."],
                            answer: 2,
                            feedback: ""
                        },
                        {
                            id: "ef2-c-q5",
                            type: "objetiva",
                            descriptor: "D12",
                            supportText: {
                                title: "Mutirão de Goiânia disponibiliza mais de 800 exames de ultrassonografia...",
                                content: `A Prefeitura de Goiânia, por meio da Secretaria Municipal de Saúde (SMS), vai ofertar 848 vagas para exames no Mutirão que será realizado neste final de semana, na Região Noroeste. Entre os exames disponibilizados na estrutura montada na Praça da Feira do Setor Morada do Sol estão ultrassonografias, eletrocardiogramas, ecocardiogramas, doppler de carótidas, doppler de membros inferiores e avaliação de risco cirúrgico.`
                            },
                            statement: "Ao escrever este texto, o autor teve como objetivo",
                            options: ["dar um estudo elaborado sobre saúde.", "trazer diversão ao leitor.", "ensinar sobre saúde pública.", "noticiar um mutirão para a comunidade."],
                            answer: 3,
                            feedback: ""
                        },
                        {
                            id: "ef2-c-q6",
                            type: "objetiva",
                            descriptor: "D12",
                            supportText: {
                                title: "Traços traçados",
                                content: `Era uma vez um traço. E era uma outra vez outro traço. Os dois foram traçados por um menino que gostava muito de desenhar trecos com muitas tramas. A transação dos traços deu uma trança. E essa trança, trançada com outros tantos traços, deu 'trocentos' troços traçados! "Trocentos troços traçados fazem muitas trocas”, ele pensou, já tonto com tantos tês e 'trs'. Então, no meio de tantos traços e tantas letras, sem travas nem trapaças, o menino fez uma descoberta transcendental! Foi assim, entre traços entrelaçados e letras tresloucadas, que ele descobriu que é assim que se fazem... Os livros.`
                            },
                            statement: "Qual é o gênero desse texto?",
                            options: ["Anedota.", "Conto.", "Entrevista.", "Fábula."],
                            answer: 1,
                            feedback: ""
                        },
                        {
                            id: "ef2-c-q7",
                            type: "objetiva",
                            descriptor: "D12",
                            supportText: {
                                title: "Stress Ancestral",
                                content: `Conhecido como um dos males do nosso tempo, o stress não é exclusividade deste século nem do anterior. Muito antes da era do trânsito caótico, e até mesmo da Revolução Industrial, a civilização inca, que viveu entre 550 e 1532, já sofria desse mal. A conclusão é de uma equipe de arqueólogos da Universidade de Ontário Ocidental, no Canadá, que analisaram amostras de cabelo de restos mortais de dez indivíduos...`
                            },
                            statement: "A finalidade do texto é",
                            options: ["relatar as consequências negativas do stress.", "informar que o stress já existe há mais de 400 anos.", "identificar a doença que causou o stress na civilização Inca.", "comparar o stress do homem moderno ao dos Incas."],
                            answer: 1,
                            feedback: ""
                        },
                        {
                            id: "ef2-c-q8",
                            type: "objetiva",
                            descriptor: "D12",
                            supportText: {
                                title: "LIBERDADE",
                                content: `É não depender de droga nenhuma pra viver.\nVocê sabia que os remédios sem indicação médica, a cola de sapateiro, o álcool e o cigarro são as drogas mais consumidas no Brasil? São as mais comuns e, por isso mesmo, muito traiçoeiras. Porque o pior de toda droga nem é o risco de morte, é a certeza de uma vida de dependência. Quem ainda acredita que as drogas libertam, é candidato a escravo. Porque a outra palavra para liberdade é independência.`
                            },
                            statement: "A finalidade do texto é",
                            options: ["alertar as pessoas para o uso indevido de remédios.", "informar sobre todos os tipos de drogas existentes.", "chamar a atenção para os malefícios da dependência química.", "buscar soluções para os usuários das drogas mais consumidas."],
                            answer: 2,
                            feedback: ""
                        },
                        {
                            id: "ef2-c-q9",
                            type: "objetiva",
                            descriptor: "D12",
                            supportText: {
                                title: "Mensagens por celular estimulam jovens",
                                content: `De acordo com um estudo realizado pela British Academy, crianças que fazem uso de mensagens de texto por celular (SMS), prática conhecida como texting, leem e falam melhor do que as outras. A pesquisa afirma que pais e professores deveriam estimular essa forma de comunicação entre os jovens. Para o jornal inglês The Independent, crianças que se valem de abreviações também dominam a pronúncia correta das palavras...`
                            },
                            statement: "Esse texto é um exemplo de",
                            options: ["artigo.", "crônica.", "curiosidade.", "reportagem."],
                            answer: 3,
                            feedback: ""
                        },
                        {
                            id: "ef2-c-q10",
                            type: "objetiva",
                            descriptor: "D12",
                            supportText: {
                                title: "O caldo de pedra",
                                content: `Um frade andava pedindo esmolas de porta em porta. Quando bateu na porta de um lavrador recebeu um valente “não” como resposta. Como estava mesmo com muita fome o frade disse o seguinte: – Vou ver se faço um caldinho de pedra. E pegou numa pedra do chão, sacudiu-lhe a terra e pôs-se a olhar para ela para ver se era boa para fazer um caldo. As pessoas riram do frade e começaram a se perguntar como é que era possível comer um caldo de pedra. O frade então respondeu: – Então nunca comeram caldo de pedra? Só lhes digo que é uma coisa muito boa. Os moradores da casa, curiosos, disseram que queriam ver aquela cena. O frade então lavou a pedra, pediu que lhe emprestassem uma panela de barro e colocou a pedra lá dentro. Depois de encher a panela de água, pediu brasas para esquentar a panela. Então perguntou se tinham banha de porco, para temperar o caldo. Depois de dizerem que sim e oferecerem o que foi pedido, o frade provou o caldo e pediu um pouquinho de sal, couves e linguiça. A dona da casa entregou tudo o que era pedido e, no final o resultado saiu uma bela sopa. Comeu e lambeu o beiço; depois de despejada a panela ficou a pedra no fundo; a gente da casa, que estava com os olhos nele, perguntou-lhe: – Ó senhor frade, então a pedra? Respondeu o frade: – A pedra lavo-a e levo-a comigo para outra vez. E assim comeu onde não lhe queriam dar nada.`
                            },
                            statement: "O texto lido se estrutura a partir das características do conto popular porque",
                            options: ["é uma narrativa que apresenta marcas de oralidade na linguagem e estruturada ficcionalmente.", "é um texto expositivo, pois apresenta um fato com opiniões das personagens e com linguagem culta.", "instrui o leitor sobre algo, utilizando uma linguagem objetiva.", "informa o leitor e a sociedade sobre fatos relevantes do dia a dia."],
                            answer: 0,
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
                            id: "em2-r-q1",
                            type: "objetiva",
                            descriptor: "D05",
                            supportText: {
                                title: "Tirinha Calvin e Haroldo",
                                imageUrl: "./assets/tirinha_calvin_bebes.png",
                                content: "Calvin pergunta ao pai sobre a origem dos bebês. O pai inventa uma história sobre um pterodáctilo, e Calvin acha a explicação 'maneira'."
                            },
                            statement: "Infere-se desse texto que",
                            options: ["O garoto diverte-se ao atrapalhar a leitura do pai.", "O garoto gosta de situações incomuns.", "O garoto incomoda o pai com perguntas.", "O pai sente-se confuso com as perguntas do filho.", "O pai estuda sobre o nascimento de animais."],
                            answer: 1,
                            feedback: "A reação positiva de Calvin ('Maneiro!') a uma história tão incomum sugere que ele tem uma afinidade por situações fora do comum."
                        },
                        {
                            id: "em2-r-q2",
                            type: "objetiva",
                            descriptor: "D05",
                            supportText: {
                                title: "Campanha de Vacinação Contra a Raiva",
                                imageUrl: "./assets/campanha_vacinacao_raiva.png",
                                content: "Campanha de vacinação contra a raiva, mostrando um cão e um gato com sombras de feras, com o texto 'Seu bichinho pode virar uma fera'."
                            },
                            statement: "De acordo com esse texto, cães e gatos:",
                            options: ["Devem ser cuidados por um adulto.", "Devem ser vacinados.", "Podem transmitir doenças às crianças.", "Precisam conviver juntos.", "São animais perigosos."],
                            answer: 1,
                            feedback: "O propósito da campanha é incentivar a vacinação contra a raiva para prevenir que os animais de estimação desenvolvam a doença e se tornem agressivos ('uma fera')."
                        },
                        {
                            id: "em2-r-q3",
                            type: "objetiva",
                            descriptor: "D12",
                            supportText: {
                                title: "Tirinha Calvin e Haroldo",
                                imageUrl: "./assets/tirinha_calvin_idioma.png",
                                content: "Calvin discute com o pai sobre a mutabilidade da linguagem, ameaçando criar um código para que não se entendam mais, mas acabam se comunicando com gírias."
                            },
                            statement: "Nesse texto, a intenção do menino era",
                            options: ["impressionar o pai com sua descoberta.", "dificultar a comunicação com o pai.", "fazer com que o pai fale gírias.", "criar um idioma próprio.", "inventar novas palavras."],
                            answer: 0,
                            feedback: "Calvin apresenta sua 'descoberta' sobre a linguagem como uma grande revelação, buscando impressionar o pai com sua inteligência e astúcia."
                        },
                        {
                            id: "em2-r-q4",
                            type: "objetiva",
                            descriptor: "D12",
                            supportText: {
                                title: "Mentes Perigosas",
                                imageUrl: "./assets/capa_mentes_perigosas.png",
                                content: `Capa do filme 'Mentes Perigosas'. O texto ao lado resume a trama sobre uma ex-fuzileira naval que se torna professora em uma escola de periferia e usa métodos não convencionais para educar os alunos.`
                            },
                            statement: "Esse texto é uma:",
                            options: ["crônica.", "propaganda.", "reportagem.", "resenha.", "sinopse."],
                            answer: 4,
                            feedback: "O texto apresenta um resumo do enredo do filme, que é a definição de uma sinopse."
                        },
                        {
                            id: "em2-r-q5",
                            type: "subjetiva",
                            descriptor: "D05",
                            supportText: {
                                title: "Infográfico: Desempenho e Premiação de Rebeca Andrade vs. Simone Biles",
                                imageUrl: "./assets/infografico_ginastas.png",
                                content: "Infográfico comparando as premiações e medalhas das ginastas Rebeca Andrade e Simone Biles nas Olimpíadas de Paris 2024."
                            },
                            statement: "Qual é o objetivo desse infográfico?",
                            answer: "O objetivo do infográfico é comparar o desempenho e o valor da premiação recebida pelas ginastas Rebeca Andrade e Simone Biles nos Jogos de Paris 2024. Ele mostra, de maneira clara e visual, como a quantidade e o tipo de medalhas conquistadas, bem como a política de premiação dos seus respectivos países, influenciam no total em dinheiro que cada atleta recebe."
                        },
                        {
                            id: "em2-r-q6",
                            type: "subjetiva",
                            descriptor: "D05",
                            supportText: {
                                title: "Infográfico: Desempenho e Premiação de Rebeca Andrade vs. Simone Biles",
                                imageUrl: "./assets/infografico_ginastas.png",
                                content: "Infográfico comparando as premiações e medalhas das ginastas Rebeca Andrade e Simone Biles nas Olimpíadas de Paris 2024."
                            },
                            statement: "O infográfico, por ser um gênero multimodal, faz uso de variados recursos. Considerando os elementos verbais e não verbais, responda: a) É possível identificar a brasileira no infográfico? Por quê? b) Qual a nacionalidade da outra ginasta e como isso é indicado? c) A qual evento esse infográfico se refere? Justifique.",
                            answer: "a) Sim, é possível identificar a brasileira. Rebeca Andrade está vestindo o uniforme verde e amarelo, típico do Brasil, e há também a bandeira do Brasil ao lado do nome dela.\nb) A outra ginasta é americana, Simone Biles. Isso é indicado pela bandeira dos Estados Unidos ao lado de seu nome e pela informação textual sobre sua nacionalidade no quadro comparativo.\nc) O infográfico se refere aos Jogos Olímpicos de Paris 2024. Isso pode ser justificado pela data presente no rodapé ('12.ago.2024') e pela menção às medalhas olímpicas (ouro, prata e bronze)."
                        },
                        {
                            id: "em2-r-q7",
                            type: "subjetiva",
                            descriptor: "D12",
                            supportText: {
                                title: "Infográfico: Desempenho e Premiação de Rebeca Andrade vs. Simone Biles",
                                imageUrl: "./assets/infografico_ginastas.png",
                                content: "Infográfico comparando as premiações e medalhas das ginastas Rebeca Andrade e Simone Biles nas Olimpíadas de Paris 2024."
                            },
                            statement: "Logo abaixo das fotografias das duas ginastas, há um quadro de medalhas. Qual a intencionalidade do autor do infográfico ao apresentar esse quadro?",
                            answer: "A intencionalidade é comparar objetivamente a quantidade e o tipo de medalhas obtidas por cada atleta e, principalmente, explicar por que Rebeca Andrade recebeu mais dinheiro mesmo com menos medalhas que Simone Biles. Isso ajuda o leitor a compreender a relação entre desempenho esportivo, políticas de premiação nacionais e reconhecimento financeiro."
                        },
                        {
                            id: "em2-r-q8",
                            type: "subjetiva",
                            descriptor: "D12",
                            supportText: {
                                title: "Infográfico: Desempenho e Premiação de Rebeca Andrade vs. Simone Biles",
                                imageUrl: "./assets/infografico_ginastas.png",
                                content: "Infográfico comparando as premiações e medalhas das ginastas Rebeca Andrade e Simone Biles nas Olimpíadas de Paris 2024."
                            },
                            statement: "O texto é um infográfico jornalístico ou didático? Explique.",
                            answer: "O infográfico é jornalístico. Ele foi publicado pelo Poder360, um veículo de imprensa, e tem como objetivo informar o público sobre um fato atual (premiação nas Olimpíadas), com base em dados comparativos e análise visual. Embora possa ter valor educativo, seu foco principal é divulgar informação com caráter noticioso."
                        }
                    ]
                },
                {
                    title: "2º Momento: Ampliação (Avaliação Formativa)",
                    questions: [
                        {
                            id: "em2-a-q1",
                            type: "objetiva",
                            descriptor: "D12",
                            supportText: {
                                title: "A sombra do meio-dia",
                                content: `A Sombra do Meio-Dia é o belo título de um romance lançado recentemente, de autoria do diplomata Sérgio Danese. O livro trata da glória (efêmera) e da desgraça (duradoura) de um ghost-writer, ou redator-fantasma – aquele que escreve discursos para outros. A glória do ghost-writer de Danese adveio do dinheiro e da ascensão profissional e social que lhe proporcionaram os serviços prestados ao patrão [...]. A desgraça, da sufocação de seu talento literário, ou daquilo que gostaria que fosse talento literário, posto a serviço de outrem...`
                            },
                            statement: "O texto foi escrito com o objetivo de:",
                            options: ["conscientizar o leitor.", "apresentar sumário de uma obra.", "opinar sobre um livro.", "dar informações sobre o autor.", "narrar um fato científico."],
                            answer: 2,
                            feedback: ""
                        },
                        {
                            id: "em2-a-q2",
                            type: "objetiva",
                            descriptor: "D05",
                            supportText: {
                                title: "Quem vai encarar o Facebook?",
                                content: `"Sua rede social é controlada por publicitários. Você é o produto comprado e vendido." Assim, com desmedido exagero, a startup americana Ello anunciou o lançamento de uma nova rede social online, de mesmo nome. O site pretende se consolidar como uma espécie de antiFacebook. Nas palavras da equipe: "Livre de propagandas. A Ello não vende dados sobre você". Parece utópico. Google e Facebook nasceram com proposta similar, mas logo abriram as portas para o bem-vindo dinheiro da publicidade...`
                            },
                            statement: "O Objetivo do texto é:",
                            options: ["criticar", "instruir", "entreter", "anunciar", "informar"],
                            answer: 4,
                            feedback: ""
                        },
                        {
                            id: "em2-a-q3",
                            type: "objetiva",
                            descriptor: "D12",
                            supportText: {
                                title: "Cartaz",
                                imageUrl: "./assets/cartaz_refugiados.png",
                                content: "Cartaz com um par de sapatos gastos e o texto 'Vamos calçar os sapatos dos refugiados e dar o primeiro passo para entender sua situação'."
                            },
                            statement: "Nesse cartaz, o uso da imagem do calçado aliada ao texto verbal tem o objetivo de",
                            options: ["criticar as difíceis condições de vida dos refugiados.", "revelar a longa trajetória percorrida pelos refugiados.", "incentivar a campanha de doações para os refugiados.", "denunciar a situação de carência vivida pelos refugiados.", "simbolizar a necessidade de adesão à causa dos refugiados."],
                            answer: 4,
                            feedback: ""
                        },
                        {
                            id: "em2-a-q4",
                            type: "objetiva",
                            descriptor: "D05",
                            supportText: {
                                title: "6 Dicas para Ajudar na Escolha da Profissão",
                                imageUrl: "./assets/dicas_profissao.png",
                                content: "Infográfico com 6 dicas para ajudar na escolha da profissão, direcionado a jovens."
                            },
                            statement: "Esse texto é direcionado, principalmente, aos",
                            options: ["jovens indecisos na escolha da profissão a seguir.", "profissionais que atuam no direcionamento profissional.", "pais que querem decidir a profissão dos filhos.", "professores comprometidos com o futuro profissional dos alunos.", "profissionais que buscam recolocação no mercado."],
                            answer: 0,
                            feedback: ""
                        },
                        {
                            id: "em2-a-q5",
                            type: "objetiva",
                            descriptor: "D05",
                            supportText: {
                                title: "Charge",
                                imageUrl: "./assets/charge_inclusao_digital.png",
                                content: "Charge mostrando duas pessoas em situação de rua se aquecendo com o fogo de um laptop, ironizando a 'inclusão digital' enquanto a exclusão social persiste."
                            },
                            statement: "Considerando-se o contexto apresentado na charge, é correto afirmar que:",
                            options: ["Se mostra a tecnologia estendida a todos os grupos da sociedade, que a utilizam bem, já que os usuários não subestimam seu potencial.", "Se define o avanço tecnológico do país levando em consideração, principalmente, a política pública para o acesso a esse tipo de bem.", "Se estabelece uma relação paradoxal entre os avanços obtidos na área tecnológica e as condições de vida a que está sujeita expressiva parcela da população.", "Se pode entender como positiva a nova relação do homem com as máquinas, já que elas tiram expressiva parcela da população de condições aviltantes de vida.", "Se veem a criticidade e o bom senso de grande parte da população menos favorecida para o uso adequado das novas tecnologias no cotidiano."],
                            answer: 2,
                            feedback: ""
                        },
                        {
                            id: "em2-a-q6",
                            type: "objetiva",
                            descriptor: "D12",
                            supportText: {
                                title: "Charge",
                                imageUrl: "./assets/charge_desmatamento_meio_ambiente.png",
                                content: "Charge sobre o Dia do Meio Ambiente. Um filho entrega uma muda de árvore ao pai, que segura um machado em uma área desmatada."
                            },
                            statement: "A charge destina-se a:",
                            options: ["criticar o conflito existente entre gerações.", "conscientizar os leitores da importância de preservar a natureza.", "apontar o desperdício de um desmatamento mal planejado.", "salientar um processo ainda rudimentar de trabalho rural.", "a importância do desmatamento."],
                            answer: 1,
                            feedback: ""
                        },
                        {
                            id: "em2-a-q7",
                            type: "objetiva",
                            descriptor: "D05",
                            supportText: {
                                title: "Charge",
                                imageUrl: "./assets/charge_mundo_ovelhas.png",
                                content: "Charge em que uma pessoa se vê como a única consciente em meio a uma multidão de 'robôs' com balões de pensamento vazios."
                            },
                            statement: "De acordo com esse texto, as pessoas estão",
                            options: ["brigando.", "conversando.", "falando.", "gritando.", "pensando"],
                            answer: 4,
                            feedback: "Embora o narrador as veja como 'robôs', os balões de pensamento indicam que elas estão, de fato, pensando, mesmo que ele julgue seus pensamentos como vazios ou rotineiros."
                        },
                        {
                            id: "em2-a-q8",
                            type: "objetiva",
                            descriptor: "D12",
                            supportText: {
                                title: "Carta do leitor",
                                content: `Nova cidade, 5 de março de 2024.\nPrezados editores,\nComo leitor assíduo da revista Saúde, em primeiro lugar, venho agradecer os benefícios que os artigos publicados vêm proporcionando à minha família. Muitas das dicas fornecidas conseguimos colocar em prática e, dessa forma, melhorando consideravelmente nosso bem-estar.\nNo último número da revista, lemos uma matéria sobre os perigos que o excesso de sal na alimentação pode provocar à nossa saúde... desejamos, também, colocar em prática algumas destas dicas.\nAbraços,\nEdmundo Sousa.`
                            },
                            statement: "O Texto é uma carta do leitor, pois",
                            options: ["relata como o sal prejudica a saúde da família de Edmundo e faz um pedido.", "narra a história da vida da família de Edmundo em relação a sua alimentação.", "instrui a família de Edmundo a viver de forma saudável e, para isso, publica novas receitas.", "noticia o ponto de vista do leitor Edmundo a respeito das reportagens publicadas na revista.", "manifesta o repúdio do leitor Edmundo sobre os assuntos publicados na revista Saúde."],
                            answer: 3,
                            feedback: ""
                        },
                        {
                            id: "em2-a-q9",
                            type: "objetiva",
                            descriptor: "D05",
                            supportText: {
                                title: "Charge Laerte",
                                imageUrl: "./assets/charge_consumismo_tv.png",
                                content: "Charge de Laerte onde um homem em uma casa de papelão diz que comprou uma TV de pendurar na parede e que agora só precisa da parede."
                            },
                            statement: "Esse texto critica",
                            options: ["A pobreza.", "O consumismo.", "A política.", "A tecnologia.", "O dinheiro"],
                            answer: 1,
                            feedback: ""
                        },
                        {
                            id: "em2-a-q10",
                            type: "objetiva",
                            descriptor: "D12",
                            supportText: {
                                title: "Campanha de Trânsito",
                                imageUrl: "./assets/campanha_ciclista.png",
                                content: "Campanha de conscientização no trânsito, incentivando motoristas a manterem uma distância segura de 1,5m ao ultrapassar ciclistas."
                            },
                            statement: "Esse texto é direcionado ao leitor para",
                            options: ["Chamar atenção quanto a um perigo iminente.", "Criticar um comportamento socialmente inadequado.", "Informar a respeito de uma norma do código de trânsito.", "Persuadir a adotar um determinado comportamento.", "Mostrar a ciclovia."],
                            answer: 3,
                            feedback: ""
                        }
                    ]
                },
                {
                    title: "3º Momento: Consolidação (Avaliação Comparativa)",
                    questions: [
                        {
                            id: "em2-c-q1",
                            type: "objetiva",
                            descriptor: "D05",
                            supportText: {
                                title: "Tirinha Lola Andorinha",
                                imageUrl: "./assets/tirinha_lola_andorinha.png",
                                content: "A andorinha Lola está presa e grita 'Socorro', mas ninguém entende. Ela então pede ajuda a uma cabra de forma criativa e, finalmente, grita 'HELP!' para ser compreendida."
                            },
                            statement: "De acordo com esse texto, o passarinho que pediu ajuda à cabra é",
                            options: ["Melancólico.", "Intrometido.", "Forte.", "Criativo.", "Atrapalhado."],
                            answer: 3,
                            feedback: "Ao perceber que a comunicação não estava funcionando, Lola buscou uma solução alternativa (usar outro idioma), demonstrando criatividade para resolver seu problema."
                        },
                        {
                            id: "em2-c-q2",
                            type: "objetiva",
                            descriptor: "D05",
                            supportText: {
                                title: "Tirinha Maitena",
                                imageUrl: "./assets/tirinha_maitena_paraiso.png",
                                content: "Uma jovem descreve a vida das avós como sendo sem opinião e sem trabalho. A avó, no entanto, descreve essa mesma vida como 'o paraíso'."
                            },
                            statement: "Sobre as funções desempenhadas pelas mulheres na sociedade e de acordo com expresso nas linguagens verbal e não verbal da charge, afirma-se que:",
                            options: ["As moças, hoje em dia, opinam, trabalham, fazem terapias e não querem ter celulites.", "A vovó acha que não valeu a pena ter sido boneca, quando mais jovem.", "A moça está reclamando de ter de consertar tomadas.", "As mulheres de hoje ainda preferem fazer doces e visitar as amigas a viver no paraíso.", "A atribuição de não ser boneca implica também fazer tarefas tradicionalmente associadas ao sexo masculino."],
                            answer: 0,
                            feedback: ""
                        },
                        {
                            id: "em2-c-q3",
                            type: "objetiva",
                            descriptor: "D05",
                            supportText: {
                                title: "Tirinha Menino Maluquinho",
                                imageUrl: "./assets/tirinha_maluquinho_duendes.png",
                                content: "Uma menina nega convictamente acreditar em duendes, mas em seguida diz que não se pode acreditar neles porque são muito brincalhões, contradizendo sua negação inicial."
                            },
                            statement: "A resposta dada pela menina no segundo quadrinho indica que ela está:",
                            options: ["Contrariada.", "Convicta.", "Decepcionada.", "Indiferente.", "Perplexa."],
                            answer: 1,
                            feedback: "A expressão facial e a frase 'CLARO QUE NÃO!' demonstram certeza e convicção, ainda que o quadrinho seguinte revele uma contradição humorística."
                        },
                        {
                            id: "em2-c-q4",
                            type: "objetiva",
                            descriptor: "D05",
                            supportText: {
                                title: "Charge",
                                imageUrl: "./assets/charge_lucro_ambiental.png",
                                content: "Charge critica a exploração ambiental, mostrando uma pilha de moedas sobre um toco de árvore em uma paisagem devastada."
                            },
                            statement: "Esse texto demonstra uma crítica",
                            options: ["à desvalorização da moeda.", "à distribuição de renda no país.", "à poluição do meio ambiente.", "ao desenvolvimento econômico.", "ao lucro da exploração ambiental."],
                            answer: 4,
                            feedback: "A imagem critica a busca pelo lucro (moedas) que resulta diretamente da destruição do meio ambiente (árvore cortada, paisagem poluída)."
                        },
                        {
                            id: "em2-c-q5",
                            type: "objetiva",
                            descriptor: "D12",
                            supportText: {
                                title: "Artigos do Movimento OS VERDES",
                                content: `Art. 2º - OS VERDES - Movimento de Ecologia Social é uma entidade ecológica, cultural e científica tendo por finalidades: I. a defesa intransigente dos direitos humanos, do meio ambiente e da paz; II. a proteção ao patrimônio cultural... IV. incentivar a formação e o desenvolvimento da consciência ecológica... VI. difundir a solidariedade e fraternidade entre todos os povos...`
                            },
                            statement: "A alternativa que melhor apresenta a finalidade dos artigos acima é:",
                            options: ["Participar de partidos políticos que defendam o meio-ambiente.", "Incentivar o público em geral a participar de ONGs.", "Divulgar, estudar, apoiar e promover atividades ecológicas e culturais.", "Tornar público o movimento Os Verdes.", "Incentivar o desenvolvimento"],
                            answer: 2,
                            feedback: ""
                        },
                        {
                            id: "em2-c-q6",
                            type: "objetiva",
                            descriptor: "D12",
                            supportText: {
                                title: "PARA QUE SERVE A FEBRE",
                                content: `A febre é um sinal de alerta de que algo vai mal no organismo. Mas cientistas do Roswell Park Center Institute, nos EUA, afirmam que ela é bem mais do que isso. Segundo um artigo publicado por eles na "Nature Immunology", a temperatura corporal elevada ajuda o sistema de defesa do organismo a identificar a causa de uma infecção e combatê-la.`
                            },
                            statement: "O artigo acima tem por finalidade:",
                            options: ["alertar o leitor contra a febre;", "ensinar o leitor a proteger-se das infecções;", "informar o leitor sobre medicamentos novos;", "aumentar a nossa compreensão sobre o que é a febre;", "combater ideias erradas sobre a febre."],
                            answer: 3,
                            feedback: ""
                        },
                        {
                            id: "em2-c-q7",
                            type: "objetiva",
                            descriptor: "D12",
                            supportText: {
                                title: "Beija-Flor",
                                content: `Segundo estudo da Universidade de Berkeley (Estados Unidos), alguns beija-flores machos da espécie conhecida como Anna – que vive no sudeste do país – conseguem atingir velocidades proporcionalmente maiores que a de aviões de caça. Em alta velocidade, eles percorrem um trajeto equivalente a 383 vezes o comprimento de seu corpo por segundo. E tudo isso para impressionar as fêmeas.`
                            },
                            statement: "O objetivo desse texto é:",
                            options: ["Informar que alguns beija-flores machos atingem velocidade extrema, para impressionar as fêmeas.", "Comparar a velocidade do beija-flor da espécie Anna com a de um avião de caça.", "Esclarecer que o beija-flor da espécie Anna é 383 vezes mais rápido que o avião.", "Apresentar os estudos feitos pela universidade de Berkeley, no que diz respeito à velocidade dos beija-flores.", "Narrar uma história especificando como alguns beija-flores conquistam as fêmeas de sua espécie."],
                            answer: 0,
                            feedback: ""
                        },
                        {
                            id: "em2-c-q8",
                            type: "objetiva",
                            descriptor: "D12",
                            supportText: {
                                title: "Campanha de Saúde",
                                imageUrl: "./assets/campanha_piolho.png",
                                content: "Campanha de prevenção contra piolhos com a frase 'Tire os pés da cabeça' e a imagem de um pé chutando um piolho."
                            },
                            statement: "O objetivo comunicativo desse texto é:",
                            options: ["Apresentar um procedimento.", "Criticar um comportamento.", "Dar uma orientação.", "Divertir o leitor.", "Vender um produto"],
                            answer: 2,
                            feedback: ""
                        },
                        {
                            id: "em2-c-q9",
                            type: "objetiva",
                            descriptor: "D12",
                            supportText: {
                                title: "Campanha de Trânsito",
                                imageUrl: "./assets/campanha_remedios_direcao.png",
                                content: "Campanha de trânsito alertando para não dirigir após usar medicamentos, com a imagem de um comprimido."
                            },
                            statement: "Esse texto é direcionado ao leitor para",
                            options: ["Chamar sua atenção quanto a um perigo iminente.", "Criticar um comportamento socialmente inadequado.", "Informar a respeito de uma norma do código de trânsito.", "Persuadir a adotar um determinado comportamento.", "Sugerir que se visite o médico com regularidade"],
                            answer: 4,
                            feedback: ""
                        },
                        {
                            id: "em2-c-q10",
                            type: "objetiva",
                            descriptor: "D12",
                            supportText: {
                                title: "Amor e Medo",
                                content: `No fogo vivo eu me abrasara inteiro!\nÉbrio e sedento na fugaz vertigem\nVil, machucava com meu dedo impuro\nAs pobres flores da grinalda virgem!\n\nVampiro infame, eu sorveria em beijos\nToda a inocência que teu lábio encerra,\nE tu seria no lascivo abraço\nAnjo enlodado nos pauis da terra. [...]\n\nSe de ti fujo é que te adoro e muito!\nÉ bela – eu moço; tens amor, eu – medo!...`
                            },
                            statement: "De acordo com a organização interna dos gêneros, esse texto pertence à tipologia",
                            options: ["apelativa.", "dissertativa.", "informativa.", "narrativa.", "poética."],
                            answer: 4,
                            feedback: ""
                        }
                    ]
                }
            ]
        }
    }
};
