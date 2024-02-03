const typewriter = document.querySelector('.typewriter')
const typewriterh1 = document.querySelector('.div_h1')
const typewriterli = document.querySelectorAll('.li')
const list = ['<a href="#ID_section_intro">Inicio</a>','<a href="#ID_about_me">Sobre mim</a>', '<a href="#ID_my_skills">Habilidades</a>', '<a href="#ID_section_projects">Projetos</a>','<a href="#ID_section_cert">Certificados</a>', '<a href="#ID_section_contact">Contato</a>']
console.log(typewriterli, list)

document.addEventListener('DOMContentLoaded', function () {

    new Typewriter(typewriter, {
        strings: ['<p class="ap_p"><span class="ap-const">const</span> <span class="ap-yellow">Davi_Rodeghiero_Souza</span> <span class="ap-const">=</span> <span class="ap-key">{</span><br> <span class="ap-tab">name:</span> <span class="ap-yellow">"Davi Rodeghiero Souza"</span>,<br> <span class="ap-tab">age:</span> <span class="ap-purple">24</span>, <br> <span class="ap-tab">city:</span> <span class="ap-yellow">"Morro Redondo - RS"</span>,<br> <span class="ap-tab">faculty:</span> <span class="ap-key">{</span><br>  <span class="ap-doubletab">Pucrs:</span> <span class="ap-yellow"> "Análise e Desenvolvimento de Sistemas"</span>,<br> <span class="ap-doubletab">Senac:</span> <span class="ap-yellow">"Técnico em Desenvolvimento de Sistemas"</span>,<br> <span class="ap-tab"> <span class="ap-key">}</span></span> <br> <span class="ap-key">}</span> </p>'],
        autoStart: true,
        delay: 10,
        loop: true,
        deleteSpeed: 1000000000000,
    });

    new Typewriter(typewriterh1, {
        strings: ['<h1>&lt;<span style="color: var(--rosa);">h1</span>&gt;<span style="color: var(--rosa);"> Hello, my name is </span><span style="color: var(--amarelo);">Davi Rodeghiero.</span> <br> <span style="color: var(--rosa)">I am a</span><span style="color: var(--verde);"> brazilian </span><span style="color: var(--rosa);">Front-end Developer! </span>&lt;<span style="color: var(--rosa);">h1</span>&gt;</h1>'],
        autoStart: true,
        delay: 15,
        loop: true,
        deleteSpeed: 100000000000000,
    });

    for (let i = 0; i < typewriterli.length; i++) {
        new Typewriter(typewriterli[i], {
            strings: [list[i]],
            autoStart: true,
            delay: 40,
            loop: true,
            deleteSpeed: 100000000000000,
        });
    }

});

