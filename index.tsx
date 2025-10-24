// Fix: Added type declaration for window.app to avoid TypeScript errors on global scope.
declare global {
    interface Window {
        app: {
            selectOption: (element: HTMLElement, isCorrect: boolean) => void;
            toggleAnswer: (questionId: string) => void;
        };
    }
}

// Fix: Added TypeScript interfaces to strongly type the data from data.js.
interface SupportText {
    title: string;
    content: string[];
}

interface QuestionBase {
    id: string;
    descriptor: string;
    supportText?: SupportText;
    prompt: string;
}

interface ObjectiveQuestion extends QuestionBase {
    type: 'objective';
    options: string[];
    answer: number;
}

interface SubjectiveQuestion extends QuestionBase {
    type: 'subjective';
    answer: string;
}

type Question = ObjectiveQuestion | SubjectiveQuestion;

interface Momento {
    name: string;
    questoes: Question[];
}

interface Nivel {
    name: string;
    momentos: Record<string, Momento>;
}

interface Percurso {
    name: string;
    [key: string]: Nivel | string;
}

interface Percursos {
    [key: string]: Percurso;
}

import { percursos as percursosData } from './data.js';

// Fix: Cast the imported data to the defined Percursos type.
const percursos: Percursos = percursosData;


let currentPercurso = 'percurso-1';
let currentNivel = 'ensinoFundamental';

const percursoNav = document.getElementById('percurso-nav');
const nivelNav = document.getElementById('nivel-nav');
const contentContainer = document.getElementById('content-container');
const subtitleContainer = document.getElementById('subtitle-container');
const zoomDatashowBtn = document.getElementById('zoom-datashow');
const zoomTvBtn = document.getElementById('zoom-tv');

// Fix: Typed the supportText parameter.
function createSupportText(supportText: SupportText | undefined) {
    if (!supportText) return '';
    const paragraphs = supportText.content.map(p => `<p class="text-justify mb-3">${p}</p>`).join('');
    return `
        <div class="support-text">
            <h4 class="font-bold mb-2">${supportText.title}</h4>
            ${paragraphs}
        </div>
    `;
}

// Fix: Typed the question parameter.
function createQuestionCard(question: Question, momentoIndex: number, questionIndex: number) {
    const card = document.createElement('div');
    card.className = 'question-card';

    const questionNumber = questionIndex + 1;
    let optionsHTML = '';
    if (question.type === 'objective') {
        optionsHTML = `<ul class="options-list mt-4">` +
            question.options.map((option, index) =>
                `<li onclick="window.app.selectOption(this, ${question.answer === index})">${option}</li>`
            ).join('') +
            `</ul>`;
    }

    let subjectiveHTML = '';
    if (question.type === 'subjective') {
        subjectiveHTML = `<textarea class="w-full mt-4 p-3 border-transparent rounded-md bg-slate-700 text-slate-200 placeholder-slate-400 focus:ring-2 focus:ring-indigo-500" rows="4" placeholder="Escreva sua resposta aqui..."></textarea>`;
    }

    card.innerHTML = `
        <h3 class="text-lg font-semibold mb-2">Questão ${questionNumber} <span class="text-sm font-normal text-pink-600" style="color: #db2777;">(${question.descriptor})</span></h3>
        ${createSupportText(question.supportText)}
        <p class="question-prompt font-semibold text-justify">${question.prompt}</p>
        ${optionsHTML}
        ${subjectiveHTML}
        <a href="javascript:void(0)" onclick="window.app.toggleAnswer('${question.id}-answer')" class="text-sm text-indigo-600 hover:underline mt-2 inline-block">💡 Ver Gabarito</a>
        <div id="${question.id}-answer" class="answer"><p>${question.answer}</p></div>
    `;
     if (question.type === 'objective') {
        const answerEl = card.querySelector('.answer');
        if (answerEl) {
            answerEl.innerHTML = `<p>${question.options[question.answer]}</p>`;
        }
    }


    return card;
}

function renderContent() {
    if (!contentContainer || !subtitleContainer) return;
    contentContainer.innerHTML = '';
    const percursoData = percursos[currentPercurso];
    // Fix: Cast nivelData to Nivel to allow property access.
    const nivelData = percursoData[currentNivel] as Nivel;

    subtitleContainer.innerHTML = `
        <span class="text-xl text-slate-600">${percursoData.name} – ${nivelData.name}</span>
    `;

    Object.values(nivelData.momentos).forEach((momento, momentoIndex) => {
        // Fix: 'momento' is now correctly typed as Momento, so 'questoes' is accessible, fixing error at line 69.
        if (momento.questoes.length === 0) return;

        const section = document.createElement('section');
        section.className = 'mb-12';

        const header = document.createElement('div');
        header.className = 'p-4 rounded-lg mb-6';
        header.style.backgroundColor = '#eef2ff';
        // Fix: 'momento' is now correctly typed as Momento, so 'name' is accessible, fixing error at line 77.
        header.innerHTML = `<h2 class="text-xl md:text-2xl font-bold" style="color: #4338ca;">${momento.name}</h2>`;
        section.appendChild(header);

        // Fix: 'momento' is now correctly typed as Momento, so 'questoes' is accessible, fixing error at line 80.
        momento.questoes.forEach((q, qIndex) => {
            section.appendChild(createQuestionCard(q, momentoIndex, qIndex));
        });

        contentContainer.appendChild(section);
    });

    updateNivelNav();
}

function updatePercursoNav() {
    if (!percursoNav) return;
    percursoNav.innerHTML = '';
    Object.keys(percursos).forEach(percursoId => {
        const button = document.createElement('button');
        button.className = 'percurso-btn';
        button.textContent = percursos[percursoId].name;
        if (percursoId === currentPercurso) {
            button.classList.add('active');
        }
        button.onclick = () => {
            currentPercurso = percursoId;
            updatePercursoNav();
            renderContent();
        };
        percursoNav.appendChild(button);
    });
}

function updateNivelNav() {
    if (!nivelNav) return;
    nivelNav.innerHTML = '';
    const percursoData = percursos[currentPercurso];
    Object.keys(percursoData).filter(key => key !== 'name').forEach(nivelId => {
        const button = document.createElement('button');
        button.className = 'nivel-btn';
        const nivel = percursoData[nivelId] as Nivel;
        button.textContent = nivel.name;
        if (nivelId === currentNivel) {
            button.classList.add('active');
        }
        button.onclick = () => {
            currentNivel = nivelId;
            renderContent();
        };
        nivelNav.appendChild(button);
    });
}

function setZoom(mode: 'tv' | 'datashow') {
    const html = document.documentElement;
    if (!zoomTvBtn || !zoomDatashowBtn) return;
    if (mode === 'tv') {
        html.style.fontSize = '1.4625rem';
        zoomTvBtn.classList.add('active');
        zoomDatashowBtn.classList.remove('active');
    } else {
        html.style.fontSize = '1.125rem';
        zoomDatashowBtn.classList.add('active');
        zoomTvBtn.classList.remove('active');
    }
}

// Expose functions to global scope for inline event handlers
// Fix: Added types to function parameters to match the window.app declaration, fixing error on line 140.
window.app = {
    selectOption: (element: HTMLElement, isCorrect: boolean) => {
        const parent = element.parentNode;
        if (!parent) return;
        const options = (parent as HTMLElement).querySelectorAll('li');
        options.forEach(opt => opt.classList.remove('selected', 'correct', 'incorrect'));
        element.classList.add('selected');
    },
    toggleAnswer: (questionId: string) => {
        const answerDiv = document.getElementById(questionId);
        if (!answerDiv) return;
        answerDiv.style.display = (answerDiv.style.display === 'block') ? 'none' : 'block';
    }
};

document.addEventListener('DOMContentLoaded', () => {
    if (!zoomDatashowBtn || !zoomTvBtn) return;
    zoomDatashowBtn.onclick = () => setZoom('datashow');
    zoomTvBtn.onclick = () => setZoom('tv');
    updatePercursoNav();
    renderContent();
});