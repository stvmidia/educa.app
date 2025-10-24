
import { percursos } from './data.js';

const app = {
    state: {
        currentPercurso: 'Percurso Formativo I',
        currentNivel: 'ensinoMedio',
    },
    init() {
        this.render();
        this.addEventListeners();
    },
    render() {
        this.renderContent();
    },
    renderContent() {
        const percursoData = percursos[this.state.currentPercurso];
        if (!percursoData) {
            console.error('Percurso não encontrado:', this.state.currentPercurso);
            return;
        }

        const nivelData = percursoData[this.state.currentNivel];
        if (!nivelData) {
            console.error('Nível não encontrado:', this.state.currentNivel);
            return;
        }
        
        this.updateHeader(percursoData, nivelData);
        this.updatePercursoNav();
        this.updateNivelNav();

        const contentContainer = document.getElementById('content-container');
        if (contentContainer) {
            contentContainer.innerHTML = '';
            nivelData.momentos.forEach(momento => {
                const momentoSection = document.createElement('section');
                momentoSection.innerHTML = `<h2 class="text-xl md:text-2xl font-bold mb-4" style="color: #4338ca;">${momento.titulo}</h2>`;
                momento.questoes.forEach(questao => {
                    momentoSection.appendChild(this.createQuestionCard(questao));
                });
                contentContainer.appendChild(momentoSection);
            });
        }
    },
    updateHeader(percursoData, nivelData) {
        const subtitleContainer = document.getElementById('subtitle-container');
        if (subtitleContainer) {
            subtitleContainer.innerHTML = `<h2 class="text-lg md:text-xl font-semibold text-slate-600">${this.state.currentPercurso} - ${nivelData.titulo}</h2>`;
        }
    },
    updatePercursoNav() {
        const percursoNav = document.getElementById('percurso-nav');
        if (percursoNav) {
            percursoNav.innerHTML = Object.keys(percursos).map(percursoId => `
                <button class="percurso-btn ${this.state.currentPercurso === percursoId ? 'active' : ''}" data-percurso="${percursoId}">
                    ${percursoId}
                </button>
            `).join('');
            this.addPercursoNavListeners();
        }
    },
    updateNivelNav() {
        const nivelNav = document.getElementById('nivel-nav');
        if (nivelNav) {
            nivelNav.innerHTML = `
                <button class="nivel-btn ${this.state.currentNivel === 'ensinoMedio' ? 'active' : ''}" data-nivel="ensinoMedio">Ensino Médio</button>
                <button class="nivel-btn ${this.state.currentNivel === 'ensinoFundamental' ? 'active' : ''}" data-nivel="ensinoFundamental">Ensino Fundamental</button>
            `;
            this.addNivelNavListeners();
        }
    },
    createQuestionCard(question) {
        const card = document.createElement('div');
        card.className = 'question-card';
        card.id = question.id;

        let supportTextHtml = '';
        if (question.supportText && question.supportText.content) {
            supportTextHtml = `<div class="support-text">${question.supportText.content}</div>`;
        }

        let questionHtml = '';
        if (question.type === 'subjetiva') {
            questionHtml = `
                <p class="mb-4">${question.enunciado}</p>
                <textarea class="w-full p-2 border rounded" style="background-color: #333; color: #fff;" placeholder="Escreva sua resposta aqui..."></textarea>
            `;
        } else if (question.type === 'objetiva') {
            const optionsHtml = question.options.map((option, index) => {
                const letter = String.fromCharCode(97 + index); // a, b, c, d
                return `<li data-option="${letter}">${letter}) ${option}</li>`;
            }).join('');
            questionHtml = `
                <p class="mb-4">${question.enunciado}</p>
                <ul class="options-list">${optionsHtml}</ul>
            `;
        }
        
        const answerHtml = `<div class="answer"><p><strong>Gabarito:</strong> ${question.gabarito}</p></div>`;
        
        card.innerHTML = `
            <h3 class="font-bold text-lg mb-2">Questão ${question.numero} <span class="font-normal text-sm text-slate-500">(${question.descritor})</span></h3>
            ${supportTextHtml}
            ${questionHtml}
            <button class="mt-4 text-sm font-semibold text-indigo-600 hover:text-indigo-800">💡 Ver Gabarito</button>
            ${answerHtml}
        `;

        // Add event listeners for the card
        if (question.type === 'objetiva') {
            const options = card.querySelectorAll('.options-list li');
            options.forEach(option => {
                option.addEventListener('click', () => {
                    options.forEach(opt => opt.classList.remove('selected'));
                    option.classList.add('selected');
                });
            });
        }
        
        const toggleButton = card.querySelector('button');
        const answerDiv = card.querySelector('.answer');
        if (toggleButton && answerDiv) {
            toggleButton.addEventListener('click', () => {
                answerDiv.style.display = answerDiv.style.display === 'block' ? 'none' : 'block';
            });
        }
        
        return card;
    },
    addEventListeners() {
        document.getElementById('zoom-datashow')?.addEventListener('click', () => this.setZoom('datashow'));
        document.getElementById('zoom-tv')?.addEventListener('click', () => this.setZoom('tv'));
    },
    addPercursoNavListeners() {
        document.querySelectorAll('#percurso-nav .percurso-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                const target = e.target;
                if (target instanceof HTMLElement) {
                    const percursoId = target.dataset.percurso;
                    if (percursoId) {
                        this.state.currentPercurso = percursoId;
                        this.render();
                    }
                }
            });
        });
    },
    addNivelNavListeners() {
        document.querySelectorAll('#nivel-nav .nivel-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                 const target = e.target;
                if (target instanceof HTMLElement) {
                    const nivelId = target.dataset.nivel;
                    if (nivelId) {
                        this.state.currentNivel = nivelId;
                        this.render();
                    }
                }
            });
        });
    },
    setZoom(size) {
        const html = document.documentElement;
        const datashowBtn = document.getElementById('zoom-datashow');
        const tvBtn = document.getElementById('zoom-tv');

        if (size === 'datashow') {
            html.style.fontSize = '1.125rem'; // 18px
            datashowBtn?.classList.add('active');
            tvBtn?.classList.remove('active');
        } else if (size === 'tv') {
            html.style.fontSize = '1.5rem'; // 24px
            datashowBtn?.classList.remove('active');
            tvBtn?.classList.add('active');
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    app.init();
});
