// script.js
const gameContainer = document.getElementById('game-container');
const storyElement = document.getElementById('story');
const optionsElement = document.getElementById('options');

let currentState = {};

function startGame() {
    currentState = {
        scene: "introduction",
    };
    nextScene();
}

function nextScene() {
    switch (currentState.scene) {
        case "introduction":
            introduction();
            break;
        case "note":
            noteScene();
            break;
        // 添加更多场景处理逻辑
        default:
            // 结束或重置游戏
            endGame();
    }
}

function introduction() {
    showStory("你是小林，一位刚毕业的大学生，满怀梦想地加入了一家知名企业。");
    showOptions([
        { text: "查看便條纸", action: () => goToScene("note") },
        { text: "开始工作", action: () => goToScene("work") }
    ]);
}

function noteScene() {
    showStory("便條纸上写着：'欢迎加入我们，期待你的光彩照人。' 但并没有签名。");
    showOptions([
        { text: "开始工作", action: () => goToScene("work") }
    ]);
}

function showStory(text) {
    storyElement.innerText = text;
}

function showOptions(options) {
    optionsElement.innerHTML = '';
    options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option.text;
        button.onclick = option.action;
        optionsElement.appendChild(button);
    });
}

function goToScene(scene) {
    currentState.scene = scene;
    nextScene();
}

function endGame() {
    showStory("感谢你体验这个简短的Demo！");
    showOptions([
        { text: "重新开始", action: () => startGame() }
    ]);
}

startGame();
