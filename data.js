// data.js
const workshops = {
    "logica": {
        title: "Lógica de Programação",
        category: "Minicurso",
        duration: "2h",
        icon: "./assets/icons/logo-python.svg",
        colorClass: "sep-green",
        downloadLink: "#",
        description: "Fundamentos de algoritmos e estruturas de dados utilizando Python como linguagem base para o aprendizado.",
        recommendations: [
            { title: "Python para Iniciantes", type: "Playlist", channel: "Curso em Vídeo", link: "#", desc: "A base perfeita para quem está começando do zero absoluto." },
            { title: "Pensamento Computacional", type: "Docs", channel: "USP", link: "#", desc: "Material teórico sobre como estruturar soluções lógicas." }
        ]
    },
    "git": {
        title: "Git & GitHub do zero",
        category: "Minicurso",
        duration: "2h",
        icon: "./assets/icons/logo-material-didatico.svg",
        colorClass: "sep-orange",
        downloadLink: "#",
        description: "Aprenda a versionar seus projetos e colaborar em equipe utilizando as ferramentas padrão da indústria.",
        recommendations: [
            { title: "Git Immersion", type: "Tutorial", channel: "Edge Case", link: "#", desc: "Um guia passo a passo para dominar os comandos básicos." },
            { title: "GitHub Flow", type: "Docs", channel: "GitHub", link: "#", desc: "Como funcionam os Pull Requests e a colaboração em escala." }
        ]
    },
    "visao": {
        title: "Eagle's Eye: Visão Computacional",
        category: "Palestra",
        duration: "1h30min",
        icon: "./assets/icons/eagle-icon.svg",
        colorClass: "sep-purple",
        downloadLink: "#",
        description: "Uma introdução ao processamento de imagens e IA aplicada ao reconhecimento de padrões.",
        recommendations: [
            { title: "OpenCV Tutorial", type: "Docs", channel: "OpenCV", link: "#", desc: "A biblioteca principal para visão computacional detalhada." },
            { title: "IA e Robótica", type: "Artigo", channel: "IEEE", link: "#", desc: "O futuro da percepção de máquinas em sistemas autônomos." }
        ]
    }
};