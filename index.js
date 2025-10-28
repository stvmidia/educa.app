
import { percursos } from './data.js';

const app = {
    elements: {
        percursoNav: null,
        nivelNav: null,
        contentContainer: null,
        zoomDatashowBtn: null,
        zoomTvBtn: null,
        html: null,
    },
    state: {
        currentPercurso: "Percurso Formativo I",
        currentNivel: "ensinoFundamental",
    },
    init() {
        // Cache DOM elements
        this.elements.percursoNav = document.getElementById('percurso-nav');
        this.elements.nivelNav = document.getElementById('nivel-nav');
        this.elements.contentContainer = document.getElementById('content-container');
        this.elements.zoomDatashowBtn = document.getElementById('zoom-datashow');
        this.elements.zoomTvBtn = document.getElementById('zoom-tv');
        this.elements.html = document.documentElement;

        // Set initial state and render
        this.renderContent();
        this.addEventListeners();
    },
    addEventListeners() {
        this.elements.zoomDatashowBtn.addEventListener('click', () => this.setZoom('datashow'));
        this.elements.zoomTvBtn.addEventListener('click', () => this.setZoom('tv'));
    },
    setZoom(zoomLevel) {
        if (zoomLevel === 'datashow') {
            this.elements.html.style.fontSize = '1.725rem'; // Increased by 15% from 1.5rem
            this.elements.zoomDatashowBtn.classList.add('active');
            this.elements.zoomTvBtn.classList.remove('active');
        } else if (zoomLevel === 'tv') {
            this.elements.html.style.fontSize = '2.25rem'; // 36px
            this.elements.zoomDatashowBtn.classList.remove('active');
            this.elements.zoomTvBtn.classList.add('active');
        }
    },
    renderContent() {
        if (!this.elements.percursoNav || !this.elements.nivelNav || !this.elements.contentContainer) {
            console.error("Missing critical container elements in the DOM.");
            return;
        }

        // Clear containers
        this.elements.percursoNav.innerHTML = '';
        this.elements.nivelNav.innerHTML = '';
        this.elements.contentContainer.innerHTML = '';

        const percursoData = percursos[this.state.currentPercurso];
        if (!percursoData) {
            this.elements.contentContainer.innerHTML = `<p>Percurso Formativo não encontrado.</p>`;
            return;
        }
        
        const nivelData = percursoData[this.state.currentNivel];
        if (!nivelData) {
            this.elements.contentContainer.innerHTML = `<p>Nível de ensino não encontrado.</p>`;
            return;
        }

        // Render navigation and questions
        this.updatePercursoNav();
        this.updateNivelNav();
        this.renderQuestions(nivelData.momentos);
    },
    updatePercursoNav() {
        Object.keys(percursos).forEach(percursoName => {
            const button = document.createElement('button');
            button.className = 'percurso-btn';
            button.textContent = percursoName;
            if (this.state.currentPercurso === percursoName) {
                button.classList.add('active');
            }
            button.addEventListener('click', () => {
                this.state.currentPercurso = percursoName;
                this.renderContent();
            });
            this.elements.percursoNav.appendChild(button);
        });
    },
    updateNivelNav() {
        const niveis = [
            { key: 'ensinoMedio', text: 'Ensino Médio' },
            { key: 'ensinoFundamental', text: 'Ensino Fundamental' }
        ];

        niveis.forEach(nivel => {
            const button = document.createElement('button');
            button.className = 'nivel-btn';
            button.textContent = nivel.text;
            if (this.state.currentNivel === nivel.key) {
                button.classList.add('active');
            }
            button.addEventListener('click', () => {
                this.state.currentNivel = nivel.key;
                this.renderContent();
            });
            this.elements.nivelNav.appendChild(button);
        });
    },
    createSupportTextContainer(supportText) {
        const container = document.createElement('div');
        // Reuse card styling for a consistent look, but with less vertical margin.
        container.className = 'question-card mb-4';

        let finalImageUrl = supportText.imageUrl;
        if (supportText.gdriveImageUrl) {
            const gdriveUrl = supportText.gdriveImageUrl;
            const match = gdriveUrl.match(/file\/d\/([^/]+)/);
            if (match && match[1]) {
                const fileId = match[1];
                finalImageUrl = `https://drive.google.com/uc?export=view&id=${fileId}`;
            }
        }

        let content = '';
        if (finalImageUrl) {
            const altText = supportText.content || `Imagem de apoio.`;
            content += `
                <div>
                    ${supportText.title ? `<h4 class="font-bold text-xl mb-2">${supportText.title}</h4>` : ''}
                    <div class="p-2 border rounded-lg bg-slate-50">
                        <img src="${finalImageUrl}" alt="${altText}" class="w-full h-auto object-contain rounded-md">
                    </div>
                </div>`;
        } else if (typeof supportText.content === 'string') {
            // Re-using support-text class but overriding some properties for better integration
            content += `
                <div class="support-text prose max-w-none !p-0 !border-none !bg-transparent">
                    ${supportText.title ? `<h4 class="font-bold text-xl mb-2">${supportText.title}</h4>` : ''}
                    <div class="whitespace-pre-wrap">${supportText.content}</div>
                </div>`;
        }
        container.innerHTML = content;
        return container;
    },
    renderQuestions(momentos) {
        momentos.forEach(momento => {
            const momentoTitle = document.createElement('h2');
            momentoTitle.className = 'text-2xl font-bold mb-4 mt-8';
            momentoTitle.textContent = momento.title;
            momentoTitle.style.color = '#4338ca';
            this.elements.contentContainer.appendChild(momentoTitle);
            
            let lastRenderedSupportTextContent = null;

            momento.questions.forEach(question => {
                const currentSupportTextJSON = question.supportText ? JSON.stringify(question.supportText) : null;

                if (question.supportText && currentSupportTextJSON !== lastRenderedSupportTextContent) {
                    const supportTextContainer = this.createSupportTextContainer(question.supportText);
                    this.elements.contentContainer.appendChild(supportTextContainer);
                    lastRenderedSupportTextContent = currentSupportTextJSON;
                } else if (!question.supportText) {
                    // Reset if the current question has no support text, so the next one with text will render it.
                    lastRenderedSupportTextContent = null;
                }
                
                const questionCard = this.createQuestionCard(question);
                this.elements.contentContainer.appendChild(questionCard);
            });
        });
    },
    createQuestionCard(question) {
        const card = document.createElement('div');
        card.className = 'question-card';

        let content = `
            <div class="flex justify-between items-start mb-4">
                <h3 class="text-xl font-bold">Questão ${question.id.split('-').pop().replace('q','')}</h3>
                <span class="text-sm font-semibold bg-indigo-100 text-indigo-800 py-1 px-3 rounded-full">${question.descriptor}</span>
            </div>
        `;
        
        content += `<p class="mt-4 mb-4 font-bold">${question.statement}</p>`;

        if (question.type === 'objetiva') {
            const options = question.options.map((option, index) => {
                const letter = String.fromCharCode(97 + index).toUpperCase();
                return `<li data-index="${index}" class="flex items-start"><span class="font-bold mr-2">${letter})</span><span>${option}</span></li>`;
            }).join('');
            content += `<ul class="options-list space-y-2">${options}</ul>`;
        } else { // subjetiva
            content += `<textarea class="w-full p-3 border rounded-md bg-slate-50 text-slate-800 placeholder-slate-400" rows="4" placeholder="Escreva sua resposta aqui..."></textarea>`;
        }

        content += `
            <div class="mt-4">
                <button class="toggle-answer-btn text-sm font-semibold text-indigo-600 hover:text-indigo-800">💡 Ver Gabarito</button>
                <div class="answer mt-2"></div>
            </div>
        `;

        card.innerHTML = content;

        // Add event listeners
        const toggleBtn = card.querySelector('.toggle-answer-btn');
        const answerDiv = card.querySelector('.answer');
        
        toggleBtn.addEventListener('click', () => {
            if (question.type === 'objetiva') {
                const letter = String.fromCharCode(97 + question.answer).toUpperCase();
                let answerHTML = `<strong>Gabarito: ${letter})</strong>`;
                if(question.feedback && question.feedback.length > 0){
                    answerHTML += `<p class="mt-2 text-sm">${question.feedback}</p>`;
                }
                answerDiv.innerHTML = answerHTML;

            } else {
                answerDiv.innerHTML = `<strong>Resposta Sugerida:</strong><p class="mt-1 text-sm">${question.answer}</p>`;
            }
            answerDiv.style.display = answerDiv.style.display === 'block' ? 'none' : 'block';
        });

        if (question.type === 'objetiva') {
            const optionsLis = card.querySelectorAll('.options-list li');
            optionsLis.forEach(li => {
                li.addEventListener('click', () => {
                    optionsLis.forEach(otherLi => otherLi.classList.remove('selected'));
                    li.classList.add('selected');
                });
            });
        }

        return card;
    },
};

// Start the application
app.init();
window.app = app; // For debugging purposes
