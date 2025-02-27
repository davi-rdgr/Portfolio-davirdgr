// TYPEWRITER:

const typewriter = document.querySelector('.typewriter')
const typewriterh1 = document.querySelector('.div_h1')
const typewriterli = document.querySelectorAll('.li')
const typewriterp = document.querySelector('.div_about_me')

const project_card_p = document.querySelector('.project_card_p')

const list = ['<a href="#ID_section_intro">Inicio</a>', '<a href="#ID_about_me">Sobre mim</a>', '<a href="#ID_my_skills">Habilidades</a>', '<a href="#ID_section_projects">Projetos</a>', '<a href="#ID_section_certificates">Certificados</a>', '<a href="#ID_section_contact">Contatos</a>']

document.addEventListener('DOMContentLoaded', function () {
    // apresentação
    new Typewriter(typewriter, {
        strings: ['<p class="ap_p"><span class="ap-const">const</span> <span class="ap-yellow">Davi_Rodeghiero_Souza</span> <span class="ap-const">=</span> <span class="ap-key">{</span><br> <span class="ap-tab">name:</span> <span class="ap-yellow">"Davi Rodeghiero Souza"</span>,<br> <span class="ap-tab">age:</span> <span class="ap-purple">24</span>, <br> <span class="ap-tab">city:</span> <span class="ap-yellow">"Morro Redondo - RS"</span>,<br> <span class="ap-tab">faculty: <span class="ap-yellow">"Senac - Técnico em Desenvolvimento de Sistemas"</span> <span class="ap-tab"></span> <br> <span class="ap-key">}</span>;</p>'],
        autoStart: true,
        delay: 10,
        loop: true,
        deleteSpeed: 1000000000000,
    });
    // título
    new Typewriter(typewriterh1, {
        strings: ['<h1>&lt;<span style="color: var(--rosa);">h1</span>&gt;<span style="color: var(--rosa);"> Hello, my name is </span><span style="color: var(--amarelo);">Davi Rodeghiero.</span> <br> <span style="color: var(--rosa)">I am a</span><span style="color: var(--verde);"> brazilian </span><span style="color: var(--rosa);">Front-end Developer! </span>&lt;<span style="color: var(--rosa);">h1</span>&gt;</h1>'],
        autoStart: true,
        delay: 15,
        loop: true,
        deleteSpeed: 100000000000000,
    });
    // navbar
    for (let i = 0; i < typewriterli.length; i++) {
        new Typewriter(typewriterli[i], {
            strings: [list[i]],
            autoStart: true,
            delay: 40,
            loop: true,
            deleteSpeed: 100000000000000,
        });
    }

    new Typewriter(typewriterp, {
        strings: ['<p>&lt;<span style="color: var(--rosa);">p</span>&gt; Me chamo Davi Rodeghiero Souza, tive meu primeiro contato com a programação em 2018 com um curso de  Algoritmo usando a ferramenta Studio Portugol, mas ingressei oficialmente em 2022, focando inicialmente em Desenvolvimento Web &lt;/<span style="color: var(--rosa);">p</span>&gt; </p> <p>&lt;<span style="color: var(--rosa);">p</span>&gt; Carrego alguns certificados de conclusão e  atualmente estou cursando Análise e  Desenvolvimento de Sistemas. &lt;/<span style="color: var(--rosa);">p</span>&gt;</p>'],
        autoStart: true,
        delay: 10,
        loop: true,
        deleteSpeed: 1000000000000000,
    })
});

// SCROLL REVEAL:

const typeSeeMore = document.querySelectorAll('.project_card_p_t')
const typeSeeRep = document.querySelectorAll('.project_card_p')
const typeSeeApli = document.querySelectorAll('.project_card_p_2')

function loadTypewriter() {

    for (let i = 0; i < typeSeeMore.length; i++) {
        new Typewriter(typeSeeMore[i], {
            strings: ['Quer ver mais?'],
            autoStart: true,
            delay: 30,
            loop: true,
            deleteSpeed: 1000000000000,
        });
    }

    for (let i = 0; i < typeSeeRep.length; i++) {
        new Typewriter(typeSeeRep[i], {
            strings: ['Ver respositório'],
            autoStart: true,
            delay: 30,
            loop: true,
            deleteSpeed: 1000000000000,
        })
    }

    for (let i = 0; i < typeSeeApli.length; i++) {
        new Typewriter(typeSeeApli[i], {
            strings: ['Ver aplicação no ar'],
            autoStart: true,
            delay: 30,
            loop: true,
            deleteSpeed: 1000000000000,
        })
    }
}

// BOTÃO VER MAIS:
let project_div = document.querySelector('.project_div')
let buttonSeeMore = document.querySelector('.buttonSeeMore');

function OpenSee() {
    if (project_div.style.height !== 'initial') {
        project_div.style.height = 'initial'
        buttonSeeMore.textContent = 'Ver menos!'
    }
    else {
        project_div.style.height = '400px'
        buttonSeeMore.textContent = 'Ver mais!'
    }
}
