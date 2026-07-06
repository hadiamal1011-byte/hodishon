// =========================
// НАСТРОЙКИ
// =========================

let lang = "ru";
let screen = 0;

const answers = {
    food: "",
    transport: "",
    payment: "",
    love: 100
};

// =========================
// ТЕКСТЫ
// =========================

const texts = {

ru: [

{
title:"Хадишка,",
subtitle:"Ты пойдёшь со мной на свидание? ❤️",
yes:"Да! 💖",
no:"Нет 🙈"
},

{
title:"Отлично! 🥳",
subtitle:"А чем будем радовать вкусовые рецепторы? 🍕🍔🥂",
choices:[
"🍣 Суши",
"🍔 Бургер",
"🍜 Рамен",
"🤍 На твой выбор"
]
},

{
title:"Как поедем? 🚕",
subtitle:"Выбирай, как тебе комфортнее ✨",
choices:[
"🚕 Закажешь Комфорт+",
"🚗 Заберёшь меня сам",
"💐 Пойдём пешком за ручку"
]
},

{
title:"Важный момент 🤔",
subtitle:"А кто платит? 👉👈",
choices:[
"💸 Ну да, я...",
"😙 Конечно, ты, ты же пригласил!"
]
},

{
title:"И последний вопрос 🥹",
subtitle:"Насколько сильно ты ждёшь нашу встречу?"
},

{
title:"Урааа! 🎉",
subtitle:"Жду не дождусь. Дата и время за мной. ❤️"
}

],

kz:[

{
title:"Хадишка,",
subtitle:"Менімен кездесуге шығасың ба? ❤️",
yes:"Иә! 💖",
no:"Жоқ 🙈"
},

{
title:"Керемет! 🥳",
subtitle:"Не жейміз? 🍕🍔🥂",
choices:[
"🍣 Суши",
"🍔 Бургер",
"🍜 Рамен",
"🤍 Өзің таңда"
]
},

{
title:"Қалай барамыз? 🚕",
subtitle:"Өзіңе ыңғайлысын таңда ✨",
choices:[
"🚕 Comfort+ шақырасың",
"🚗 Өзің алып кетесің",
"💐 Қол ұстасып жаяу барамыз"
]
},

{
title:"Маңызды сұрақ 🤔",
subtitle:"Кім төлейді? 👉👈",
choices:[
"💸 Мен...",
"😙 Әрине сен!"
]
},

{
title:"Соңғы сұрақ 🥹",
subtitle:"Кездесуді қаншалықты күтесің?"
},

{
title:"Урааа! 🎉",
subtitle:"Күтіп жүрмін. Уақыты мен күні менде ❤️"
}

]

};

// =========================
// ЭЛЕМЕНТЫ
// =========================

const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");
const buttons = document.getElementById("buttons");

const ruBtn = document.getElementById("ruBtn");
const kzBtn = document.getElementById("kzBtn");

// =========================
// ЯЗЫК
// =========================

ruBtn.onclick=()=>{

lang="ru";

ruBtn.classList.add("active");
kzBtn.classList.remove("active");

render();

};

kzBtn.onclick=()=>{

lang="kz";

kzBtn.classList.add("active");
ruBtn.classList.remove("active");

render();

};

// =========================
// ПЕРВЫЙ ЭКРАН
// =========================

render();

function render(){

const page=texts[lang][screen];

title.innerHTML=page.title;

subtitle.innerHTML=page.subtitle;

buttons.innerHTML="";

if(screen===0){

createButton(page.yes,yesClick,"pink");

createButton(page.no,noClick,"white");

}

}

// =========================
// СОЗДАНИЕ КНОПКИ
// =========================

function createButton(text,action,className){

const btn=document.createElement("button");

btn.className=className;

btn.innerHTML=text;

btn.onclick=action;

buttons.appendChild(btn);

}
// =========================
// КНОПКА "НЕТ"
// =========================

const noTextsRU = [
    "🥺 Ты уверена?",
    "💕 Подумай ещё",
    "❤️ Ну пожалуйста",
    "🥹 Я же старался",
    "😭 Не оставляй меня",
    "💖 Дай мне шанс",
    "😼 Ну почти...",
    "🥹💖 Ну хорошо..."
];

const noTextsKZ = [
    "🥺 Сенімдісің бе?",
    "💕 Тағы ойланшы",
    "❤️ Өтінемін",
    "🥹 Мен тырыстым ғой",
    "😭 Кетіп қалмашы",
    "💖 Бір мүмкіндік берші",
    "😼 Тағы бір рет",
    "🥹💖 Жарайды..."
];

let noIndex = 0;

function noClick(){

    const btn = document.querySelector(".white");

    const card = document.querySelector(".card");

    const maxX = card.clientWidth - btn.offsetWidth - 20;
    const maxY = card.clientHeight - btn.offsetHeight - 20;

    btn.style.position = "absolute";
    btn.style.left = Math.random()*maxX+"px";
    btn.style.top = Math.random()*maxY+"px";

    if(lang==="ru"){
        btn.innerHTML=noTextsRU[
            Math.min(noIndex,noTextsRU.length-1)
        ];
    }else{
        btn.innerHTML=noTextsKZ[
            Math.min(noIndex,noTextsKZ.length-1)
        ];
    }

    noIndex++;

    if(noIndex>7){

        btn.className="pink";

        btn.innerHTML=
        lang==="ru"
        ?"🥹💖 Ну хорошо..."
        :"🥹💖 Жарайды...";

        btn.onclick=yesClick;

    }

}

// =========================
// КНОПКА "ДА"
// =========================

function yesClick(){

    screen=1;

    renderFood();

}

// =========================
// ВЫБОР ЕДЫ
// =========================

function renderFood(){

    const page=texts[lang][1];

    title.innerHTML=page.title;
    subtitle.innerHTML=page.subtitle;

    buttons.innerHTML="";

    page.choices.forEach(food=>{

        const btn=document.createElement("button");

        btn.className="choice";

        btn.innerHTML=food;

        btn.onclick=()=>{

            answers.food=food;

            screen=2;

            renderTransport();

        };

        buttons.appendChild(btn);

    });

}
// =========================
// ЭКРАН "КАК ПОЕДЕМ?"
// =========================

const taxiRU=[
"🚕 Все машины заняты 😅",
"🚖 Такси уехало мимо 😂",
"🚦 Пробки...",
"🙈 Попробуй другой вариант",
"⛔ Не сегодня"
];

const taxiKZ=[
"🚕 Бос көлік жоқ 😅",
"🚖 Такси кетіп қалды 😂",
"🚦 Кептеліс...",
"🙈 Басқа нұсқаны таңда",
"⛔ Бүгін болмайды"
];

const selfRU=[
"🚗 Машина в ремонте 😭",
"⛽ Бензин закончился",
"😂 Почти...",
"🙈 Не угадала",
"🤭 Попробуй ещё"
];

const selfKZ=[
"🚗 Көлік жөндеуде 😭",
"⛽ Бензин бітіп қалды",
"😂 Аз қалды",
"🙈 Басқасын таңда",
"🤭 Тағы байқап көр"
];

let taxiIndex=0;
let selfIndex=0;

function renderTransport(){

    const page=texts[lang][2];

    title.innerHTML=page.title;
    subtitle.innerHTML=page.subtitle;

    buttons.innerHTML="";

    page.choices.forEach(name=>{

        const btn=document.createElement("button");

        btn.className="choice";

        btn.innerHTML=name;

        if(name.includes("Комфорт") || name.includes("Comfort")){

            btn.onclick=()=>moveTaxi(btn);

        }

        else if(name.includes("сам") || name.includes("алып")){

            btn.onclick=()=>moveSelf(btn);

        }

        else{

            btn.onclick=walkClick;

        }

        buttons.appendChild(btn);

    });

}

// =========================
// УБЕГАЕТ ТАКСИ
// =========================

function moveTaxi(btn){

    const card=document.querySelector(".card");

    btn.style.position="absolute";

    btn.style.left=Math.random()*(card.clientWidth-230)+"px";
    btn.style.top=(150+Math.random()*250)+"px";

    if(lang==="ru"){

        btn.innerHTML=taxiRU[
        taxiIndex%taxiRU.length
        ];

    }else{

        btn.innerHTML=taxiKZ[
        taxiIndex%taxiKZ.length
        ];

    }

    taxiIndex++;

}

// =========================
// УБЕГАЕТ "ЗАБЕРЁШЬ МЕНЯ САМ"
// =========================

function moveSelf(btn){

    const card=document.querySelector(".card");

    btn.style.position="absolute";

    btn.style.left=Math.random()*(card.clientWidth-230)+"px";
    btn.style.top=(150+Math.random()*250)+"px";

    if(lang==="ru"){

        btn.innerHTML=selfRU[
        selfIndex%selfRU.length
        ];

    }else{

        btn.innerHTML=selfKZ[
        selfIndex%selfKZ.length
        ];

    }

    selfIndex++;

}

// =========================
// ПЕШКОМ 💐
// =========================

function walkClick(){

    answers.transport="💐 Пойдём пешком за ручку";

    const btn=event.target;

    btn.classList.add("glow");

    createHearts();

    createSparkles();

    setTimeout(()=>{

        screen=3;

        renderPayment();

    },1000);

}
// =========================
// ЭКРАН "КТО ПЛАТИТ?"
// =========================

const payRU = [
"🤭 Размечтался!",
"😼 Даже не надейся",
"😂 Хорошая попытка",
"🙈 Не-а",
"💸 Кошелёк отдыхает",
"🥹 Попробуй другую кнопку"
];

const payKZ = [
"🤭 Армандап кетіпсің",
"😼 Үміттенбе",
"😂 Жақсы әрекет",
"🙈 Жоқ",
"💸 Әмиян демалып жатыр",
"🥹 Басқа батырманы бас"
];

let payIndex = 0;

function renderPayment(){

    const page = texts[lang][3];

    title.innerHTML = page.title;
    subtitle.innerHTML = page.subtitle;

    buttons.innerHTML = "";

    page.choices.forEach(choice=>{

        const btn = document.createElement("button");

        btn.className = "choice";

        btn.innerHTML = choice;

        if(choice.includes("Ну да") || choice.includes("Мен")){

            btn.onclick = ()=>movePay(btn);

        }else{

            btn.onclick = paySuccess;

        }

        buttons.appendChild(btn);

    });

}

// =========================
// УБЕГАЕТ КНОПКА "Я ПЛАЧУ"
// =========================

function movePay(btn){

    const card = document.querySelector(".card");

    btn.style.position = "absolute";

    btn.style.left =
    Math.random()*(card.clientWidth-220)+"px";

    btn.style.top =
    (160+Math.random()*220)+"px";

    if(lang==="ru"){

        btn.innerHTML =
        payRU[payIndex%payRU.length];

    }else{

        btn.innerHTML =
        payKZ[payIndex%payKZ.length];

    }

    payIndex++;

}

// =========================
// ПРАВИЛЬНЫЙ ОТВЕТ
// =========================

function paySuccess(){

    answers.payment =
    lang==="ru"
    ? "💳 Платишь ты 😙"
    : "💳 Сен төлейсің 😙";

    const btn = event.target;

    btn.classList.add("glow");

    createHearts();

    createSparkles();

    setTimeout(()=>{

        screen = 4;

        renderLove();

    },1000);

}
// =========================
// ЭКРАН "ПОСЛЕДНИЙ ВОПРОС"
// =========================

function renderLove(){

    const page = texts[lang][4];

    title.innerHTML = page.title;
    subtitle.innerHTML = page.subtitle;

    buttons.innerHTML = "";

    buttons.innerHTML = `

    <div class="rangeValue" id="percent">
        ${answers.love}%
    </div>

    <div style="
        display:flex;
        justify-content:space-between;
        margin-bottom:10px;
        color:#ff5aa5;
        font-weight:600;
    ">
        <span>0%</span>
        <span>100%</span>
    </div>

    <input
        id="loveSlider"
        type="range"
        min="0"
        max="100"
        value="${answers.love}"
    >

    <p id="loveText"
    style="
    text-align:center;
    color:#ff5aa5;
    margin:20px 0;
    font-size:18px;
    font-weight:600;
    ">
    Вот это по-нашему! 💗
    </p>

    <button class="pink" id="finishBtn">
        🎀 Подытожим!
    </button>

    `;

    const slider = document.getElementById("loveSlider");
    const percent = document.getElementById("percent");

    slider.oninput = function(){

        answers.love = this.value;

        percent.innerHTML = this.value + "%";

        createHearts();

    };

    document
    .getElementById("finishBtn")
    .onclick = finishScreen;

}

// =========================
// ФИНАЛ
// =========================

function finishScreen(){

    title.innerHTML = "Урааа! 🎉";

    subtitle.innerHTML =
    "Жду не дождусь.<br>Дата и время за мной.<br><br>❤️❤️❤️";

    buttons.innerHTML = `

    <div class="plan fade">

        <h2>
        📋 ПЛАН УТВЕРЖДЁН
        </h2>

        <p>
        ${answers.food}
        </p>

        <p>
        ${answers.transport}
        </p>

        <p>
        ${answers.payment}
        </p>

        <p>
        ❤️ Ждём встречу на
        ${answers.love}%
        </p>

    </div>

    `;

    createHearts();

    createSparkles();

}
// =========================
// ❤️ СЕРДЕЧКИ
// =========================

function createHearts(count = 15){

    const container = document.querySelector(".hearts");

    for(let i=0;i<count;i++){

        const heart = document.createElement("div");

        heart.className = "heart";

        const list = ["❤️","💖","💕","💗","💘"];

        heart.innerHTML =
        list[Math.floor(Math.random()*list.length)];

        heart.style.left =
        Math.random()*100 + "vw";

        heart.style.fontSize =
        (20+Math.random()*25)+"px";

        heart.style.animationDuration =
        (3+Math.random()*2)+"s";

        container.appendChild(heart);

        setTimeout(()=>{
            heart.remove();
        },5000);

    }

}

// =========================
// ✨ БЛЁСТКИ
// =========================

function createSparkles(count = 25){

    const container =
    document.querySelector(".sparkles");

    for(let i=0;i<count;i++){

        const spark =
        document.createElement("div");

        spark.className = "sparkle";

        spark.style.left =
        (20+Math.random()*60)+"%";

        spark.style.top =
        (25+Math.random()*45)+"%";

        container.appendChild(spark);

        setTimeout(()=>{

            spark.remove();

        },2000);

    }

}

// =========================
// 💖 ФОН
// =========================

setInterval(()=>{

    createHearts(2);

},900);

// =========================
// 🐱 АНИМАЦИЯ КОТИКА
// =========================

const cat =
document.getElementById("catImg");

setInterval(()=>{

    cat.style.transform="scale(1.06)";

    setTimeout(()=>{

        cat.style.transform="scale(1)";

    },250);

},3000);

// =========================
// 🎉 КОНФЕТТИ
// =========================

function confetti(){

    for(let i=0;i<40;i++){

        const c=document.createElement("div");

        c.style.position="fixed";

        c.style.left=Math.random()*100+"vw";

        c.style.top="-20px";

        c.style.width="10px";

        c.style.height="10px";

        c.style.borderRadius="50%";

        const colors=[
        "#ff5ea8",
        "#d57dff",
        "#ffd54f",
        "#7ed6ff",
        "#7dffb8"
        ];

        c.style.background=
        colors[Math.floor(Math.random()*colors.length)];

        c.style.transition="4s linear";

        document.body.appendChild(c);

        setTimeout(()=>{

            c.style.transform=
            "translateY(110vh) rotate(720deg)";

        },30);

        setTimeout(()=>{

            c.remove();

        },4200);

    }

}

// =========================
// 🎀 ФИНАЛ
// =========================

const oldFinish = finishScreen;

finishScreen = function(){

    oldFinish();

    confetti();

    createHearts(40);

    createSparkles(40);

}