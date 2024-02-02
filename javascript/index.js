const typewriter = document.querySelector('.typewriter')

document.addEventListener('DOMContentLoaded', function () {
    new Typewriter('.typewriter', {
        strings: [' <p class="ap_p"><span class="ap-const">const</span> <span class="ap-yellow">Davi_Rodeghiero_Souza</span> <span class="ap-const">=</span> <span class="ap-key">{</span><br> <span class="ap-tab">name:</span> <span class="ap-yellow">"Davi Rodeghiero Souza"</span>,<br> <span class="ap-tab">age:</span> <span class="ap-purple">24</span> <br> <span class="ap-tab">city:</span> <span class="ap-yellow">"Morro Redondo - RS"</span>,<br> <span class="ap-tab">faculty:</span> <span class="ap-key">{</span><br>  <span class="ap-doubletab">Pucrs:</span> <span class="ap-yellow"> "Análise e Desenvolvimento de Sistemas"</span>,<br> <span class="ap-doubletab">Senac:</span> <span class="ap-yellow">"Técnico em Desenvolvimento de Sistemas"<span>,<br> <span class="ap-tab"> <span class="ap-key">}</span></span> <br> <span class="ap-key">}</span> </p>'],
        autoStart: true,
        delay: 10,
        loop: false,

    });
});