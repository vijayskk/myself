const outputElement = document.getElementById('output');
const inputElement = document.getElementById('input');
const typingSound = document.getElementById('typing-sound');
const errorSound = document.getElementById('error-sound');

function playSound(sound) {
    sound.currentTime = 0; // Rewind to the beginning
    sound.play();
}

document.addEventListener('DOMContentLoaded', () => { 
    const inputElement = document.getElementById('input');
    const commandElement = document.getElementById('command');
    
    // Display initial help text
    const initialText = 'Welcome to my personal website! Type \'help\' to see available commands.';
    commandElement.innerHTML = initialText;

    inputElement.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            const userInput = inputElement.value.trim();
            handleCommand(userInput);
            inputElement.value = '';
        }
    });

    function handleCommand(command) {
        const commandText = command.toLowerCase();
        
        let outputText = '$ ';
        playSound(typingSound);
        switch (commandText) {
            case 'help':
                outputText += 'Available Commands:<br>' +
                    'contact: Display contact information<br>' +
                    'about: Show information about me<br>' +
                    'skills: List my skills<br>' +
                    'education: Show my educational background<br>' +
                    'projects: List my projects<br>' +
                    'achievements: Show my achievements<br>' +
                    'certifications: List my certifications<br>' +
                    'languages: Show languages I speak<br>' +
                    'clear: Clear the terminal';
                break;
            case 'contact':
                outputText += '📞 +91 8281034475<br>' +
                    '✉️ [Email](mailto:vijaysatheesh2016@gmail.com)<br>' +
                    '🔗 [LinkedIn](https://www.linkedin.com/in/vijayskk)<br>' +
                    '🔗 [GitHub](https://github.com/vijayskk)';
                break;
            case 'about':
                outputText += 'I am a computer hardware enthusiast<br> currently pursuing a Bachelor\'s degree in Electronics and Communication Engineering<br> at the College Of Engineering, Chengannur.<br> My passion for computers was sparked by an old computer with numerous issues,<br> which fueled my interest in the field. Over the years,<br> I have contributed to various community projects and engaged in several hobby projects.';
                break;
            case 'skills':
                outputText += '• C Programming<br>' +
                    '• Python<br>' +
                    '• Core Electronics & Logic Circuit Designing<br>' +
                    '• LaTeX<br>' +
                    '• Linux & Unix Shell<br>' +
                    '• Git<br>' +
                    '• Algorithms<br>' +
                    '• 3D Modeling<br>' +
                    '• Cyber Security';
                break;
            case 'education':
                outputText += 'Bachelor\'s Degree in Electronics and Communication Engineering<br>' +
                    'College Of Engineering, Chengannur<br>' +
                    '2022 - Ongoing<br>' +
                    'CGPA: 8.1<br><br>' +
                    'Higher Secondary Education Specialized in Computer Science<br>' +
                    'NMHSS Tirunnavaya<br>' +
                    '2019 - 2021<br>' +
                    'Percentage: 97.2%';
                break;
            case 'projects':
                outputText += 'C Programming:<br>' +
                    '• [Terminal ASCII Renderer](#)<br>' +
                    '• [Classic Tic-Tac-Toe Game](#)<br><br>' +
                    'Python Projects:<br>' +
                    '• [NLP Program for Terminal Warning Severity](#)<br>' +
                    '• [Fake Account Detector](#)<br><br>' +
                    'PCB and Basic Product Modeling:<br>' +
                    '• [Production Quality Relay Module](#)<br>' +
                    '• [Macropad Design](#)<br>' +
                    '• [Quick Phone Stand](#)';
                break;
            case 'achievements':
                outputText += 'Conducted a session on “Tinkerstack - Intro to Python” workshop,<br> sharing insights and knowledge on Python programming. <br>You can read more about the experience on [LinkedIn](#).';
                break;
            case 'certifications':
                outputText += '• **Learn Ethical Hacking From Scratch**<br>' +
                    '  Zsecurity through Udemy<br>' +
                    '  [Certificate](#)<br><br>' +
                    '• **Advanced C Programming Course**<br>' +
                    '  Learn Programming by Jason Fedin through Udemy<br>' +
                    '  [Certificate](#)';
                break;
            case 'languages':
                outputText += '• English<br>' +
                    '• Malayalam';
                break;
            case 'clear':
                outputText += '';
                break;
            default:
                outputText += `Command not found: ${command}`;
                playSound(errorSound);
        }

        commandElement.innerHTML = outputText;
    }
});
