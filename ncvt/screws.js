
const questionText=document.querySelector(".question-text");
const optionBox=document.querySelector(".option-box");
const currentQuestionNum=document.querySelector(".current-question-num");
const answerDescription=document.querySelector(".answer-description");
const nextQuestionBtn=document.querySelector(".next-question-btn");
const correctAnswer=document.querySelector(".correct-answer");
const seeResultBtn=document.querySelector(".see-result-btn");
const remainingTime=document.querySelector(".remaining-time");
const quizHomeBox=document.querySelector(".quiz-home-box");
const quizBox=document.querySelector(".quiz-box");
const quizOverBox=document.querySelector(".quiz-over-box");
const GoHomeBtn=document.querySelector(".go-home-btn");
const HomeBtn=document.querySelector(".home-btn");
const categoryBox=document.querySelector(".category-box");
const ctegoryText=document.querySelector(".ctegory-text");
const Car=document.querySelector(".car");
const car = {owner:"ncvtonline",type:"mocktest", model:"@", com:"com"};
let text1 = "d3d3Lm5jdnQ=";
let coded = window.atob(text1);
let attemp=0;
let questionIndex=0;
let score=0;
let number=0;
let myArray=[];
let interval;
let categoryIndex;
  
myApp=[
{
category:"<span class='notranslate'>Module 1 Screws </span>| स&#2381;क&#2381;र&#2370;",
quizWrap:[{
question:"<span class='notranslate'>Q. What is the use of swiss pattern files? </span>| स&#2381;व&#2367;स प&#2376;टर&#2381;न फ&#2364;&#2366;इल&#2379;&#2306; क&#2366; उपय&#2379;ग क&#2381;य&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Intricate parts </span>| जट&#2367;ल भ&#2366;ग","<span class='notranslate'>(B) Narrow work </span>| स&#2306;क&#2368;र&#2381;ण क&#2366;र&#2381;य","<span class='notranslate'>(C) Die sinking work </span>| ड&#2366;ई स&#2367;&#2306;क&#2367;&#2306;ग क&#2366;र&#2381;य","<span class='notranslate'>(D) Tool room work </span>| ट&#2370;ल र&#2370;म क&#2366; क&#2366;र&#2381;य"],
answer:0,
},
{
question:"<span class='notranslate'>Q. What is the name of screw? </span>| इस स&#2381;क&#2381;र&#2370; क&#2366; न&#2366;म क&#2381;य&#2366; ह&#2376;?<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgIh05EhKRQ7Z0m9xTIk9y5Yztvc6CR77yX-0Dp1DtN5T-UvbUPonbO_x5xMY0MUTme_ovAigrxn_Z2WKsRsOR9GU5XPC79BOgYkudXehm5DNiddiWFaYiOdplrVyInhX62uR-sPDcxboiB-VHBbg4EydVRs-EY8iJBSI8X7NsgTzf0R2kVBabWE4xO4hlc/s1600/FIT2-1-9.JPG'>",
options:["<span class='notranslate'>(A) Grub screw </span>| ग&#2381;रब क&#2368;","<span class='notranslate'>(B) Driver screw </span>| ड&#2381;र&#2366;ईवर स&#2381;क&#2381;र&#2370;","<span class='notranslate'>(C) Self taping screw </span>| स&#2375;ल&#2381;फ ट&#2376;प&#2367;&#2306;ग स&#2381;क&#2381;र&#2370;","<span class='notranslate'>(D) Thread cutting screw </span>| थ&#2381;र&#2375;ड कट&#2367;&#2306;ग स&#2381;क&#2381;र&#2370;"],
answer:1,
},
{
question:"<span class='notranslate'>Q. What is the name of file? </span>| इस फ&#2364;&#2366;इल क&#2366; न&#2366;म क&#2381;य&#2366; ह&#2376;?<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgMQiWol3I3Zn8LiqgsmdhDxW8XGS8f5Y9cZMJpyGT4a9OFIRsdAcrPLbGTgdvt6CG64P07aFs7QP-Ej16Tfz3OXcccE7h9CKEC7Hlovj6NFWvv3qZ_jBspT8mmVzr_u3C03kayII3xFI45R9RIZ3vxVGDd-Zz9aGfgid_36HAFZNVwSYPOc7U6sNeLZeJk/s320/FIT2-1-22.JPG'>",
options:["<span class='notranslate'>(A) Pillar file </span>| प&#2367;लर फ&#2366;इल","<span class='notranslate'>(B) Warding file </span>| व&#2366;र&#2381;ड&#2367;&#2306;ग फ&#2364;&#2366;इल","<span class='notranslate'>(C) Swiss pattern file </span>| स&#2381;व&#2367;स प&#2376;टर&#2381;न फ&#2364;&#2366;इल","<span class='notranslate'>(D) Dreadnaught file </span>| ड&#2381;र&#2375;ड न&#2377;ट फ&#2364;&#2366;इल"],
answer:2,
},
{
question:"<span class='notranslate'>Q. What is used for placing the instruments during working? </span>| क&#2366;र&#2381;य क&#2375; द&#2380;र&#2366;न उपकरण&#2379;&#2306; क&#2379; रखन&#2375; क&#2375; ल&#2367;ए क&#2367;सक&#2366; उपय&#2379;ग क&#2367;य&#2366; ज&#2366;त&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Wooden blank </span>| व&#2369;ड&#2375;न ब&#2381;ल&#2376;&#2306;क","<span class='notranslate'>(B) Felt pad </span>| फ&#2364;&#2375;ल&#2381;ट प&#2376;ड","<span class='notranslate'>(C) Sheet steel </span>| श&#2368;ट स&#2381;ट&#2368;ल","<span class='notranslate'>(D) Cloth </span>| कपड&#2364;&#2366;"],
answer:1,
},
{
question:"<span class='notranslate'>Q. What is the purpose of dowel pins in assembly? </span>| अस&#2375;&#2306;बल&#2368; म&#2375;&#2306; ड&#2377;व&#2375;ल प&#2367;न क&#2366; उद&#2381;द&#2375;श&#2381;य क&#2381;य&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Perfect alignment & quicker disassembly </span>| सह&#2368; स&#2306;र&#2375;खण और त&#2375;ज&#2368; स&#2375; ज&#2369;द&#2366; करन&#2366;","<span class='notranslate'>(B) Imperfect alignment </span>| अप&#2370;र&#2381;ण स&#2306;र&#2375;खण","<span class='notranslate'>(C) Slow disassembly </span>| ध&#2368;म&#2368; गत&#2367; स&#2375; ज&#2369;द&#2366; करन&#2366;","<span class='notranslate'>(D) Easy maintenance </span>| आस&#2366;न रखरख&#2366;व"],
answer:0,
},
{
question:"<span class='notranslate'>Q. What is the use of rotary files? </span>| र&#2379;टर&#2368; फ&#2366;इल&#2379;&#2306; क&#2366; उपय&#2379;ग क&#2381;य&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) To finish sharp corners </span>| त&#2375;ज क&#2379;न&#2379;&#2306; क&#2379; खत&#2381;म करन&#2375; क&#2375; ल&#2367;ए","<span class='notranslate'>(B) To sharpening teeth of wood-working saws </span>| लकड&#2364;&#2368; पर क&#2366;म करन&#2375; व&#2366;ल&#2368; आर&#2368; क&#2375; द&#2366;&#2305;त त&#2375;ज&#2364; करन&#2375; क&#2375; ल&#2367;ए","<span class='notranslate'>(C) Die sinking and mould-making work </span>| ड&#2366;ई स&#2367;&#2306;क&#2367;&#2306;ग एव&#2306; स&#2366;&#2306;च&#2375; बन&#2366;न&#2375; क&#2366; क&#2366;र&#2381;य","<span class='notranslate'>(D) Finish the automobile bodies, after tinkering </span>| छ&#2375;ड&#2364;छ&#2366;ड&#2364; क&#2375; ब&#2366;द, ऑट&#2379;म&#2379;ब&#2366;इल ब&#2377;ड&#2368; क&#2379; सम&#2366;प&#2381;त कर&#2375;&#2306;"],
answer:2,
},
{
question:"<span class='notranslate'>Q. What will be the effects on the fit if the pitch of the thread is less than the actual size? </span>| यद&#2367; ध&#2366;ग&#2375; क&#2368; प&#2367;च व&#2366;स&#2381;तव&#2367;क आक&#2366;र स&#2375; कम ह&#2376; त&#2379; फ&#2367;ट पर क&#2381;य&#2366; प&#2381;रभ&#2366;व पड&#2364;&#2375;ग&#2366;?",
options:["<span class='notranslate'>(A) Clearance fit </span>| क&#2381;ल&#2368;यर&#2375;&#2306;स फ&#2367;ट","<span class='notranslate'>(B) Transmission fit </span>| ट&#2381;र&#2366;&#2306;सम&#2367;शन फ&#2367;ट","<span class='notranslate'>(C) Interference fit </span>| हस&#2381;तक&#2381;ष&#2375;प फ&#2367;ट","<span class='notranslate'>(D) Not possible to fit </span>| फ&#2367;ट ह&#2379;न&#2366; स&#2306;भव नह&#2368;&#2306; ह&#2376;"],
answer:3,
},
{
question:"<span class='notranslate'>Q. How many set of feeler gauges are available as per BIS? </span>| फ&#2368;लर ग&#2375;ज क&#2375; क&#2367;तन&#2375; स&#2375;ट ह&#2379;त&#2375; ह&#2376;&#2306;?",
options:["<span class='notranslate'>(A) Set No: 1,2","<span class='notranslate'>(B) Set No: 1,2,3,4","<span class='notranslate'>(C) Set No: 1,2,3,4,5","<span class='notranslate'>(D) Set No: 1,2,3,4,5,6"],
answer:1,
},
{
question:"<span class='notranslate'>Q. What is the use of round key in assembly? </span>| अस&#2375;&#2306;बल&#2368; म&#2375;&#2306; र&#2366;उ&#2306;ड क&#2368; क&#2366; उपय&#2379;ग क&#2381;य&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) To secure the mating component with light torque </span>| हल&#2381;क&#2375; ट&#2377;र&#2381;क क&#2375; स&#2366;थ म&#2375;ट&#2367;&#2306;ग घटक क&#2379; स&#2369;रक&#2381;ष&#2367;त करन&#2375; क&#2375; ल&#2367;ए","<span class='notranslate'>(B) High torque </span>| उच&#2381;च ट&#2377;र&#2381;क","<span class='notranslate'>(C) Unidirectional torque </span>| य&#2370;न&#2367;ड&#2366;यर&#2375;क&#2381;शनल ट&#2377;र&#2381;क","<span class='notranslate'>(D) Slide the pulley small on the shaft to some distance </span>| श&#2366;फ&#2381;ट पर छ&#2379;ट&#2368; चरख&#2368; क&#2379; क&#2369;छ द&#2370;र&#2368; तक सरक&#2366;ए&#2305;"],
answer:0,
},
{
question:"<span class='notranslate'>Q. Which key is useful for fitting on tapered shafts? </span>| ट&#2376;पर&#2381;ड श&#2366;फ&#2381;ट पर फ&#2367;ट&#2367;&#2306;ग क&#2375; ल&#2367;ए क&#2380;न स&#2368; क&#2368; उपय&#2379;ग&#2368; ह&#2376;?",
options:["<span class='notranslate'>(A) Feather key </span>| फ&#2375;दर क&#2368;","<span class='notranslate'>(B) Gib head key </span>| ग&#2367;ब ह&#2375;ड क&#2368;","<span class='notranslate'>(C) Woodruff key </span>| व&#2370;डरफ क&#2368;","<span class='notranslate'>(D) Flat saddle key </span>| फ&#2381;ल&#2376;ट स&#2376;डल क&#2368;"],
answer:2,
},
{
question:"<span class='notranslate'>Q. What is the name of locking device? </span>| इस ल&#2377;क&#2367;&#2306;ग ड&#2367;व&#2366;इस क&#2366; न&#2366;म क&#2381;य&#2366; ह&#2376;?<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg52VqoaVf8AOhpIwEyZY2focghhT3QZvxh2Khe46ynYmPY5V7i4YfuYiSaSIfuNLdq4cGm-vKYqDFgyQPkxk0ZJ6XfprEL2A8Z2qXt0PnbxhL7F1K9APbWWXo91vasoM2aOzNuUeIe9TXFiEImAEHwH7kJmwFYaLAIUwLv4Oi9vgaAk6giRz10R8AnkUdT/s1600/FIT2-1-11.JPG'>",
options:["<span class='notranslate'>(A) Tab washer </span>| ट&#2376;ब व&#2366;शर","<span class='notranslate'>(B) Locking plate </span>| ल&#2377;क&#2367;&#2306;ग प&#2381;ल&#2375;ट","<span class='notranslate'>(C) Lock washer </span>| ल&#2377;क व&#2377;शर","<span class='notranslate'>(D) Spring washer </span>| स&#2381;प&#2381;र&#2367;&#2306;ग व&#2377;शर"],
answer:3,
},
{
question:"<span class='notranslate'>Q. What is the name of gauge? </span>| इस ग&#2375;ज क&#2366; न&#2366;म क&#2381;य&#2366; ह&#2376;?<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhZOnHUWj6duFJIvA7tHcPzNRsiAfmkIDhXxwTBDt0t4hCGuxOrSlDnz6wtitB_Jhla8rvtDSql7FBbFHKGJA2DMRUQXxtu0MOLZIeheGec6qxpjpFqgw53X9jCVyCwW5viLpcuibqmbTXNRmIrSoaVrCvBlhSIjhoyb5p7X6X_oaScxxw8w-7OiAukmhHz/s1600/FIT2-1-23.JPG'>",
options:["<span class='notranslate'>(A) Taper gauge </span>| ट&#2375;पर ग&#2375;ज","<span class='notranslate'>(B) Snap gauge </span>| स&#2381;न&#2376;प ग&#2375;ज","<span class='notranslate'>(C) Progressive plug gauge </span>| प&#2381;र&#2379;ग&#2381;र&#2375;स&#2367;व प&#2381;लग ग&#2375;ज","<span class='notranslate'>(D) Double end plug gauge </span>| डबल ए&#2306;ड प&#2381;लग ग&#2375;ज"],
answer:1,
},
{
question:"<span class='notranslate'>Q. What is the use of tab washers? </span>| ट&#2376;ब व&#2377;शर क&#2366; उपय&#2379;ग क&#2381;य&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Locking the nut at corner </span>| नट क&#2379; क&#2379;न&#2375; पर ल&#2377;क करन&#2366;","<span class='notranslate'>(B) Locking the nut at center </span>| नट क&#2379; क&#2375;&#2306;द&#2381;र म&#2375;&#2306; ल&#2377;क करन&#2366;","<span class='notranslate'>(C) Locking the nut from bottom </span>| नट क&#2379; न&#2368;च&#2375; स&#2375; ल&#2377;क करन&#2366;","<span class='notranslate'>(D) Locking the nut from top </span>| नट क&#2379; ऊपर स&#2375; ल&#2377;क करन&#2366;"],
answer:0,
},
{
question:"<span class='notranslate'>Q. What is the name of file? </span>| इस फ&#2364;&#2366;इल क&#2366; न&#2366;म क&#2381;य&#2366; ह&#2376;?<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjVIDyapwbTQslVCAbLyvQLZwAKYiSUZzRLyg3e-PIHCe7nano3i7jc4SOcWtYgfR6Cg9dPJdPs7qSU6pNBrNEwSRqut7PQiY1rx7j3gG1EBfkocyUMDlLV-AaR1SLb9XzqE3NWvroHFotcls-zvcdZMqZEIXOOZiAT6-jDbaDQKvkI8EDzrffcynKnXEBq/s320/FIT2-1-15.JPG'>",
options:["<span class='notranslate'>(A) Pillar file </span>| प&#2367;लर फ&#2366;इल","<span class='notranslate'>(B) Warding file </span>| व&#2366;र&#2381;ड&#2367;&#2306;ग फ&#2364;&#2366;इल","<span class='notranslate'>(C) Dreadnaught file </span>| ड&#2381;र&#2375;ड न&#2377;ट फ&#2366;इल","<span class='notranslate'>(D) Swiss pattern file </span>| स&#2381;व&#2367;स प&#2376;टर&#2381;न फ&#2364;&#2366;इल"],
answer:1,
},
{
question:"<span class='notranslate'>Q. What is the name of screw driver? </span>| इस स&#2381;क&#2381;र&#2370; ड&#2381;र&#2366;इवर क&#2366; न&#2366;म क&#2381;य&#2366; ह&#2376;?<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh2CM1dENMs2VVhyJIDJ2f0AxQWIWgG-U6jlpoljI6NaPMNQz-x7UKOooAIK0a6pY7dPR7TMpPhhfyQ6kKvEptFZAtW6mLwr5zrtxBXwbTt5ROm5Ls867Rfl8lgfcurqRpAGAmTfBCggI-X2RR-4OYp7XdfUJZAAixE8t2ulOl_lmoMozh2pPXxW5y-Agvv/s320/FIT2-1-10.JPG'>",
options:["<span class='notranslate'>(A) Offset screw driver </span>| ऑफस&#2375;ट स&#2381;क&#2381;र&#2370; ड&#2381;र&#2366;इवर","<span class='notranslate'>(B) Philips screw driver </span>| फ&#2367;ल&#2367;प&#2381;स स&#2381;क&#2381;र&#2370; ड&#2381;र&#2366;इवर","<span class='notranslate'>(C) Standard screw driver </span>| स&#2381;ट&#2376;ण&#2381;डर&#2381;ड स&#2381;क&#2381;र&#2370; ड&#2381;र&#2366;ईवर","<span class='notranslate'>(D) Heavy duty screw driver </span>| ह&#2376;व&#2368; ड&#2381;य&#2370;ट&#2368; स&#2381;क&#2381;र&#2370; ड&#2381;र&#2366;इवर"],
answer:0,
},
{
question:"<span class='notranslate'>Q. What is the use of air ratchet wrench? </span>| एयर र&#2376;च&#2375;ट र&#2367;&#2306;च क&#2366; उपय&#2379;ग क&#2381;य&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) High speed and less torque </span>| उच&#2381;च गत&#2367; और कम ट&#2377;र&#2381;क","<span class='notranslate'>(B) Low speed </span>| ध&#2368;म&#2368; गत&#2367;","<span class='notranslate'>(C) More torque </span>| अध&#2367;क ट&#2377;र&#2381;क","<span class='notranslate'>(D) High speed and more torque </span>| उच&#2381;च गत&#2367; और अध&#2367;क ट&#2377;र&#2381;क"],
answer:0,
},
{
question:"<span class='notranslate'>Q. What is the file for lock repair and filing hard notches in keys? </span>| त&#2366;ल&#2375; क&#2368; मरम&#2381;मत और च&#2366;ब&#2367;य&#2379;&#2306; म&#2375;&#2306; ह&#2366;र&#2381;ड न&#2377;च क&#2368; फ&#2366;इल&#2367;&#2306;ग करन&#2375; क&#2375; ल&#2367;ए क&#2367;स फ&#2366;इल क&#2366; उपय&#2379;ग क&#2367;य&#2366; ज&#2366;त&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Pillar file </span>| प&#2367;लर फ&#2366;इल","<span class='notranslate'>(B) Flexible file </span>| फ&#2381;ल&#2375;क&#2381;स&#2367;बल फ&#2366;इल","<span class='notranslate'>(C) Warding file </span>| व&#2366;र&#2381;ड&#2367;&#2306;ग फ&#2364;&#2366;इल","<span class='notranslate'>(D) Swiss pattern file </span>| स&#2381;व&#2367;स प&#2376;टर&#2381;न फ&#2364;&#2366;इल"],
answer:2,
},
{
question:"<span class='notranslate'>Q. What is the effect oversized ID of nylon insert in self locking nut? </span>| स&#2375;ल&#2381;फ ल&#2377;क&#2367;&#2306;ग नट म&#2375;&#2306; न&#2366;यल&#2377;न इ&#2306;सर&#2381;ट क&#2368; ओवरस&#2366;इज&#2364;&#2381;ड आईड&#2368; क&#2366; क&#2381;य&#2366; प&#2381;रभ&#2366;व पड&#2364;त&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Nut will loose due to vibration </span>| क&#2306;पन क&#2375; क&#2366;रण नट ढ&#2368;ल&#2366; ह&#2379; ज&#2366;एग&#2366;","<span class='notranslate'>(B) Prevents from loosening </span>| ढ&#2368;ल&#2366; ह&#2379;न&#2375; स&#2375; बच&#2366;त&#2366; ह&#2376;","<span class='notranslate'>(C) Provides positive grip </span>| सक&#2366;र&#2366;त&#2381;मक ग&#2381;र&#2367;प प&#2381;रद&#2366;न करत&#2366; ह&#2376;","<span class='notranslate'>(D) Provides self locking </span>| स&#2375;ल&#2381;फ ल&#2377;क&#2367;&#2306;ग प&#2381;रद&#2366;न करत&#2366; ह&#2376;"],
answer:0,
},
{
question:"<span class='notranslate'>Q. What is the use of check nut? </span>| च&#2375;क नट क&#2366; उपय&#2379;ग क&#2381;य&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Less strength places </span>| कम त&#2366;कत व&#2366;ल&#2375; स&#2381;थ&#2366;न","<span class='notranslate'>(B) More strength places </span>| अध&#2367;क त&#2366;कत व&#2366;ल&#2375; स&#2381;थ&#2366;न","<span class='notranslate'>(C) Better appearance </span>| ब&#2375;हतर उपस&#2381;थ&#2367;त&#2367;","<span class='notranslate'>(D) Frequent adjustment places </span>| ब&#2366;र-ब&#2366;र सम&#2366;य&#2379;जन स&#2381;थ&#2366;न"],
answer:0,
},
{
question:"<span class='notranslate'>Q. What is the name of gauge? </span>| इस ग&#2375;ज क&#2366; न&#2366;म क&#2381;य&#2366; ह&#2376;?<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjOeBkFT4s8gIB4pryTkh_Kx_PrNE_4SEK9r23op25Ll8ny9OV4u6i2BN5LJUH9V_affB73XOD4bptwPQU_wvr6EwvB9LJi5F5tvugJrG72NwB-sVKEgR2Ysd6X3rdMlEYMA8y7qTyMTqMrMrF475TqVyFj4x7IUFTGKJ0Rc9DtIXuVTGjbyvPoo-69sUJm/s320/FIT2-1-26.JPG'>",
options:["<span class='notranslate'>(A) Thread ring gauge </span>| थ&#2381;र&#2375;ड र&#2367;&#2306;ग ग&#2375;ज","<span class='notranslate'>(B) Thread plug gauge </span>| थ&#2381;र&#2375;ड प&#2381;लग ग&#2375;ज","<span class='notranslate'>(C) Thread pitch gauge </span>| थ&#2381;र&#2375;ड प&#2367;च ग&#2375;ज","<span class='notranslate'>(D) Taper plug gauge </span>| ट&#2375;&#2306;पर प&#2381;लग ग&#2375;ज"],
answer:1,
},
{
question:"<span class='notranslate'>Q. Name the part marked ʹxʹ in tubular box spanner.</span>| ट&#2381;य&#2370;बलर ब&#2377;क&#2381;स स&#2381;प&#2376;नर म&#2375;&#2306; ʹxʹ च&#2367;ह&#2381;न&#2367;त भ&#2366;ग क&#2366; न&#2366;म बत&#2366;ए&#2306;&#2404;_<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjFeg2_LohXD5vj3UEqVcFpuydMTyaiD5n3Sv58CQOAgsvM5EghLUJaPl59si0FXCAiLQl9kORmKmXPc_68ZWR9UDHszvY5A_aiiyTfGWYmBAHDEqviBs09aZKz_1YWXOmarzCzUWNaYcZ1gX9ajunKUG79ZPS5SkdiQBB6VVE4jb-J3CXmG7ZiEpo9QKwZ/s320/FIT2-1-297.jpg'>",
options:["<span class='notranslate'>(A) Handle </span>| ह&#2376;&#2306;डल","<span class='notranslate'>(B) Body </span>| ब&#2377;ड&#2368;","<span class='notranslate'>(C) Head </span>| ह&#2375;ड","<span class='notranslate'>(D) Tommy bar </span>| ट&#2377;म&#2368; ब&#2366;र"],
answer:3,
},
{
question:"<span class='notranslate'>Q. What is the type of screw? </span>| स&#2381;क&#2381;र&#2370; क&#2366; प&#2381;रक&#2366;र क&#2381;य&#2366; ह&#2376;?<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiQSaOWf9vhNcS76S3FxzsWYYp52Lzx3RrfgOLc09nx3DfxyEGluBy8gHPTTKzacTm6xQt0s-mW_FTFCYFzSuFZhN0w_X2a206qrlR9hUgidqD7UkPvsyz6dFaKcEEAY2sbgxILrsm88e-xzzxrp3KWrPCNf9JUAvTVooKLfhx6yFjjWa1uDuTtSL2Mv8jX/s320/FIT2-1-20.JPG'>",
options:["<span class='notranslate'>(A) Hexagon socket head cap screws </span>| ह&#2375;क&#2381;स&#2366;ग&#2379;न स&#2377;क&#2375;ट ह&#2375;ड क&#2376;प स&#2381;क&#2381;र&#2370;","<span class='notranslate'>(B) Hexagon head screws </span>| ह&#2375;क&#2381;स&#2366;ग&#2379;&#2306; ह&#2375;ड स&#2381;क&#2381;र&#2370;","<span class='notranslate'>(C) Counter sink head screws </span>| क&#2366;उ&#2306;टर स&#2367;&#2306;क ह&#2375;ड स&#2381;क&#2381;र&#2370;","<span class='notranslate'>(D) Raised cheese hand screws </span>| र&#2376;स&#2375;द च&#2368;स ह&#2376;ण&#2381;ड स&#2381;क&#2381;र&#2370;"],
answer:0,
},
{
question:"<span class='notranslate'>Q. What is the name of gauge? </span>| यह ग&#2375;ज क&#2381;य&#2366; ह&#2376;?<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiX5KaPll0tqA0rGvvM0h-9tGmRnJbESaJQX06ymRriGusygTLZAZvAHXJmxiUzcUHgmS-WxAbBFC7Ol2wL7NO_ZozZPS8Z0672T_7HB0XSs6HrJwOjILwbtyB8KS2sFvmxBpRCZUiPDjXKqGG4qPTluIobtVY9dHEtDa971xxEq1tDyM40W3H22ahiL4TN/s320/FIT2-1-25.JPG'>",
options:["<span class='notranslate'>(A) Snap gauge </span>|  स&#2381;न&#2376;प ग&#2375;ज","<span class='notranslate'>(B) Progressive plug gauge </span>| प&#2381;र&#2379;ग&#2381;र&#2375;स&#2367;व प&#2381;लग ग&#2375;ज","<span class='notranslate'>(C) Taper ring gauge </span>| ट&#2375;पर र&#2367;&#2306;ग ग&#2375;ज","<span class='notranslate'>(D) Taper plug gauge </span>| ट&#2375;&#2306;पर प&#2381;लग ग&#2375;ज"],
answer:3,
},
{
question:"<span class='notranslate'>Q. What is the ratio of key way taper? </span>| क&#2368; व&#2375; ट&#2375;पर क&#2366; अन&#2369;प&#2366;त क&#2381;य&#2366; ह&#2376;?_x000D_",
options:["<span class='notranslate'>(A) 1: 19","<span class='notranslate'>(B) 1: 20","<span class='notranslate'>(C) 1: 50","<span class='notranslate'>(D) 1: 100"],
answer:3,
},
{
question:"<span class='notranslate'>Q. What will be the lead of thread on multi start thread? </span>| मल&#2381;ट&#2368; स&#2381;ट&#2366;र&#2381;ट थ&#2381;र&#2375;ड पर थ&#2381;र&#2375;ड क&#2368; ल&#2368;ड क&#2381;य&#2366; ह&#2379;ग&#2368;?",
options:["<span class='notranslate'>(A) Pitch x number of start </span>| प&#2367;च x प&#2381;र&#2366;र&#2306;भ क&#2368; स&#2306;ख&#2381;य&#2366;","<span class='notranslate'>(B) Pitch x 1/number of start </span>| प&#2367;च x 1/प&#2381;र&#2366;र&#2306;भ क&#2368; स&#2306;ख&#2381;य&#2366;","<span class='notranslate'>(C) Pitch x constant/number of start </span>| प&#2367;च x स&#2381;थ&#2367;र&#2366;&#2306;क/प&#2381;र&#2366;र&#2306;भ क&#2368; स&#2306;ख&#2381;य&#2366;","<span class='notranslate'>(D) Pitch x Lead of lead screw/Number of start </span>| प&#2367;च x ल&#2368;ड स&#2381;क&#2381;र&#2370; क&#2366; ल&#2368;ड/स&#2381;ट&#2366;र&#2381;ट क&#2368; स&#2306;ख&#2381;य&#2366;"],
answer:0,
},
{
question:"<span class='notranslate'>Q. What is the effect, of reading a bar type torque wrench viewing at an angle? </span>| एक ब&#2366;र ट&#2366;इप क&#2375; ट&#2377;र&#2381;क र&#2367;&#2306;च क&#2379; एक क&#2379;ण पर द&#2375;खन&#2375; पर र&#2368;ड&#2367;&#2306;ग क&#2366; क&#2381;य&#2366; प&#2381;रभ&#2366;व पड&#2364;त&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Correct reading </span>| सह&#2368; र&#2368;ड&#2367;&#2306;ग","<span class='notranslate'>(B) False reading </span>| गलत र&#2368;ड&#2367;&#2306;ग","<span class='notranslate'>(C) Slight error </span>| थ&#2379;ड&#2364;&#2368; स&#2368; त&#2381;र&#2369;ट&#2367;","<span class='notranslate'>(D) More error </span>| अध&#2367;क त&#2381;र&#2369;ट&#2367;"],
answer:1,
},
{
question:"<span class='notranslate'>Q. What is the type of screw? </span>| इस स&#2381;क&#2381;र&#2370; क&#2366; प&#2381;रक&#2366;र क&#2381;य&#2366; ह&#2376;?<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhTKGuTjx6AowhEV3WmSF2HqNI4s4jsCv_7KpDf3AKDgfyMxZMKFAn18oGPYwYEkVbGTYFktdsiCEMGnGKab4CgAPqNDfIvXKrh5rhdH6_3EGc3a46UGR5oOZlNH8jOHlCdg1JddCc5dmB35mQ8vN6L-M1x1bIieKjbAaAC0XFdUhUTU-FiBAmSyqEtQcqK/s1600/FIT2-1-18.JPG'>",
options:["<span class='notranslate'>(A) Hexagon head screw </span>| ह&#2375;क&#2381;स&#2366;ग&#2379;न ह&#2375;ड स&#2381;क&#2381;र&#2370;","<span class='notranslate'>(B) Grub screws </span>| ग&#2381;रब स&#2381;क&#2381;र&#2370;","<span class='notranslate'>(C) Round head screw </span>| र&#2366;उ&#2306;ड ह&#2375;ड स&#2381;क&#2381;र&#2370;","<span class='notranslate'>(D) Square head screw </span>| स&#2381;क&#2381;व&#2366;यर ह&#2375;ड स&#2381;क&#2381;र&#2370;"],
answer:1,
},
{
question:"<span class='notranslate'>Q. Which nut protects the bolt end thread from damages? </span>| क&#2380;न स&#2366; नट, ब&#2379;ल&#2381;ट क&#2375; स&#2367;र&#2375; क&#2368; च&#2370;ड़&#2367;य&#2366; क&#2379; न&#2369;कस&#2366;न ह&#2379;न&#2375; स&#2375; बच&#2366;त&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Cap nut </span>| क&#2376;प नट","<span class='notranslate'>(B) Castle nut </span>| क&#2376;सल नट","<span class='notranslate'>(C) Slotted nut </span>| स&#2381;ल&#2366;ट&#2367;ड नट","<span class='notranslate'>(D) Knurled nut </span>| knurled नट"],
answer:0,
},
{
question:"<span class='notranslate'>Q. What is the name of file? </span>| इस फ&#2364;&#2366;इल क&#2366; न&#2366;म क&#2381;य&#2366; ह&#2376;?<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjETlqtFzN4dNaa4zb3J2ftIMDv4TidM-y5Ls5nCObTcAWKTVRqb3Z7LreSnv9P8r6DVVvGynZUNwU5A8v9bQ1Br5NDEQljdXpCJNh9Wr28vACtmmgSoik_WfTyxnBYCGyPC9ZaCGcretlvB15sZ-DXOvTyQ66dg4udQE177vfWRF-OkAHIdLWfolGIHnYW/s320/FIT2-1-13.JPG'>",
options:["<span class='notranslate'>(A) Tinker&#8217;s file </span>| ट&#2367;&#2306;कर फ&#2366;इल","<span class='notranslate'>(B) Crossing file </span>| क&#2381;र&#2366;स&#2367;&#2306;ग फ&#2366;इल","<span class='notranslate'>(C) Swiss pattern file </span>| स&#2381;व&#2367;स प&#2376;टर&#2381;न फ&#2364;&#2366;इल","<span class='notranslate'>(D) Dread naught file </span>| ड&#2381;र&#2375;ड न&#2377;ट फ&#2364;&#2366;इल"],
answer:0,
},
{
question:"<span class='notranslate'>Q. What type of screws are used in the places were frequent removal and assembling? </span>| उन स&#2381;थ&#2366;न&#2379;&#2306; म&#2375;&#2306; क&#2367;स प&#2381;रक&#2366;र क&#2375; स&#2381;क&#2381;र&#2370;स क&#2366; उपय&#2379;ग क&#2367;य&#2366; ज&#2366;त&#2366; ह&#2376;, जह&#2366; लग&#2366;त&#2366;र हट&#2366;न&#2375; और अस&#2375;म&#2381;बल&#2367;&#2306;ग करन&#2366; ह&#2379;त&#2366; ह&#2376;",
options:["<span class='notranslate'>(A) Square head screws </span>| स&#2381;क&#2381;व&#2366;यर ह&#2375;ड स&#2381;क&#2381;र&#2370;स","<span class='notranslate'>(B) Hexagon socket head cap screws </span>| ह&#2375;क&#2381;स&#2366;ग&#2379;न स&#2377;क&#2375;ट ह&#2375;ड क&#2376;प स&#2381;क&#2381;र&#2370;स","<span class='notranslate'>(C) Round head screws </span>| र&#2366;उ&#2306;ड ह&#2375;ड स&#2381;क&#2381;र&#2370;स","<span class='notranslate'>(D) Cheese head screws </span>| च&#2368;ज&#2364; ह&#2375;ड स&#2381;क&#2381;र&#2370;स"],
answer:0,
},
{
question:"<span class='notranslate'>Q. What will be the effect on the matting part, if the pitch diameter of the thread is larger than the actual size? </span>| यद&#2367; ध&#2366;ग&#2375; क&#2366; प&#2367;च व&#2381;य&#2366;स व&#2366;स&#2381;तव&#2367;क आक&#2366;र स&#2375; बड&#2364;&#2366; ह&#2376;, त&#2379; म&#2376;ट&#2367;&#2306;ग भ&#2366;ग पर क&#2381;य&#2366; प&#2381;रभ&#2366;व पड&#2364;&#2375;ग&#2366;?",
options:["<span class='notranslate'>(A) Correct fitting </span>| सह&#2368; फ&#2367;ट&#2367;&#2306;ग","<span class='notranslate'>(B) Loose fitting </span>| ढ&#2368;ल&#2368; फ&#2367;ट&#2367;&#2306;ग","<span class='notranslate'>(C) Tight fitting </span>| च&#2369;स&#2381;त फ&#2367;ट&#2367;&#2306;ग","<span class='notranslate'>(D) Not possible to fit </span>| फ&#2367;ट ह&#2379;न&#2366; स&#2306;भव नह&#2368;&#2306; ह&#2376;"],
answer:3,
},
{
question:"<span class='notranslate'>Q. What is the name of the nut? </span>| इस नट क&#2366; न&#2366;म क&#2381;य&#2366; ह&#2376;?<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjZn1JFcUsi7q4xfDkS_Hpsa4lojMnUIFRvbJOeba5YWvmKiG0fteIDLNHlwGeJNdvol2Y1o3Bg9aPR2UuxQLv4qzWD8IlavjGuc5pAaPGmuOhqOBKmXnOJow2cC2MlZN3w-NGlTeMool_pcpjcu2Wu1bFFsXLU0S1r8PycqtEvxJfN7IL67W1rtocFIEsl/s1600/FIT2-1-19.JPG'>",
options:["<span class='notranslate'>(A) Castle nut </span>| क&#2376;सल नट","<span class='notranslate'>(B) Slotted nut </span>| स&#2381;ल&#2377;ट&#2375;ड नट","<span class='notranslate'>(C) T - Nut </span>| T - नट","<span class='notranslate'>(D) Cap nut </span>| क&#2376;प नट"],
answer:0,
},
{
question:"<span class='notranslate'>Q. What will be effect on matting part, if the effective diameter of the thread is less than the actual size? </span>| यद&#2367; ध&#2366;ग&#2375; क&#2366; प&#2381;रभ&#2366;व&#2368; व&#2381;य&#2366;स व&#2366;स&#2381;तव&#2367;क आक&#2366;र स&#2375; कम ह&#2376;, त&#2379; म&#2376;ट&#2367;&#2306;ग भ&#2366;ग पर क&#2381;य&#2366; प&#2381;रभ&#2366;व पड&#2364;&#2375;ग&#2366;?",
options:["<span class='notranslate'>(A) Correct fitting </span>| सह&#2368; फ&#2367;ट&#2367;&#2306;ग","<span class='notranslate'>(B) Loose fitting </span>| ढ&#2368;ल&#2368; फ&#2367;ट&#2367;&#2306;ग","<span class='notranslate'>(C) Tight fitting </span>| च&#2369;स&#2381;त फ&#2367;ट&#2367;&#2306;ग","<span class='notranslate'>(D) Not possible to fit </span>| फ&#2367;ट ह&#2379;न&#2366; स&#2306;भव नह&#2368;&#2306; ह&#2376;"],
answer:1,
},
{
question:"<span class='notranslate'>Q. Which device is used to check the workpiece to confirm the shape? </span>| आक&#2371;त&#2367; क&#2368; प&#2369;ष&#2381;ट&#2367; करन&#2375; ह&#2375;त&#2369; वर&#2381;कप&#2368;स क&#2379; ज&#2366;&#2306;चन&#2375; क&#2375; ल&#2367;ए क&#2367;स उपकरण क&#2366; उपय&#2379;ग क&#2367;य&#2366; ज&#2366;त&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Profile gauge </span>| प&#2381;र&#2379;फ&#2366;इल ग&#2375;ज","<span class='notranslate'>(B) Snap gauge </span>| स&#2381;न&#2376;प ग&#2375;ज","<span class='notranslate'>(C) Caliper gauge </span>| क&#2376;ल&#2367;पर ग&#2375;ज","<span class='notranslate'>(D) Progressive gauge </span>| प&#2381;रग&#2381;र&#2375;स&#2367;व ग&#2375;ज"],
answer:0,
},
{
question:"<span class='notranslate'>Q. Why square head screws are provided with collar? </span>| स&#2381;क&#2381;व&#2366;यर ह&#2375;ड स&#2381;क&#2381;र&#2370; म&#2375; क&#2377;लर क&#2381;य&#2379;&#2306; प&#2381;रद&#2366;न क&#2367;ए ज&#2366;त&#2375; ह&#2376;&#2306;?",
options:["<span class='notranslate'>(A) Protect work surface </span>| क&#2366;र&#2381;य क&#2368; सतह क&#2379; स&#2369;रक&#2381;ष&#2367;त रखन&#2375; क&#2375; ल&#2367;ए","<span class='notranslate'>(B) Raise the head width </span>| स&#2367;र क&#2368; च&#2380;ड&#2364;&#2366;ई बढ&#2364;&#2366;ए&#2306;","<span class='notranslate'>(C) Provide leak proof joint </span>| ल&#2368;क प&#2381;र&#2370;फ ज&#2377;इ&#2306;ट प&#2381;रद&#2366;न करन&#2375; क&#2375; ल&#2367;ए","<span class='notranslate'>(D) Provide access for tools </span>| स&#2366;धन&#2379;&#2306; क&#2375; ल&#2367;ए पह&#2369;&#2305;च प&#2381;रद&#2366;न कर&#2375;&#2306;"],
answer:0,
},
{
question:"<span class='notranslate'>Q. Which file used as finishing tool and ensure precision smoothness? </span>| पर&#2367;ष&#2381;करण उपकरण क&#2375; र&#2370;प म&#2375;&#2306; क&#2367;स फ&#2364;&#2366;इल क&#2366; उपय&#2379;ग क&#2367;य&#2366; ज&#2366;त&#2366; ह&#2376; और सट&#2368;क स&#2381;म&#2370;थ&#2381;न&#2375;स स&#2369;न&#2367;श&#2381;च&#2367;त करत&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Swiss pattern file </span>| स&#2381;व&#2367;स प&#2376;टर&#2381;न फ&#2364;&#2366;इल","<span class='notranslate'>(B) Pillar file </span>| प&#2367;लर फ&#2366;इल","<span class='notranslate'>(C) Dreadnaught file </span>| ड&#2381;र&#2375;डन&#2377;ट फ&#2364;&#2366;इल","<span class='notranslate'>(D) Warding file </span>| व&#2366;र&#2381;ड&#2367;&#2306;ग फ&#2364;&#2366;इल"],
answer:0,
},
{
question:"<span class='notranslate'>Q. Name the part marked as ʹxʹ in the figure.</span>| आक&#2371;त&#2367; म&#2375;&#2306; ʹxʹ क&#2375; र&#2370;प म&#2375;&#2306; च&#2367;ह&#2381;न&#2367;त भ&#2366;ग क&#2366; न&#2366;म बत&#2366;इए&#2404;<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjYAVBpkwkAL4hlpfQqMdpzTat3S9pl2RukQwV4HkylH4VcHUkCPnpswVPlE95x-JJmrpvNTPW70IsBHdW-nqb6li0Iq44ne3FRpOyrzShwx_i1bfygrBrHoJfACiZwMRukTHwXe4Qh7mS1gjtbh5jGEEalHoIXOJr-d_hsDoQ5ESvbohRfZyTS8r6-9_l-/s320/FIT2-1-298.jpg'>",
options:["<span class='notranslate'>(A) Movable jaw </span>| म&#2370;व&#2375;बल ज&#2377;","<span class='notranslate'>(B) Stationary jaw </span>| स&#2381;ट&#2375;शनर&#2368; ज&#2377;","<span class='notranslate'>(C) Handle </span>| ह&#2376;&#2306;डल","<span class='notranslate'>(D) knurl </span>| क&#2381;न&#2369;र&#2381;ल"],
answer:3,
},
{
question:"<span class='notranslate'>Q. What type of nuts are used in coach building work? </span>| क&#2379;च न&#2367;र&#2381;म&#2366;ण क&#2366;र&#2381;य म&#2375;&#2306; क&#2367;स प&#2381;रक&#2366;र क&#2375; नट&#2381;स क&#2366; उपय&#2379;ग क&#2367;य&#2366; ज&#2366;त&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Square nut </span>| स&#2381;क&#2381;व&#2366;यर नट","<span class='notranslate'>(B) T-nuts </span>| T - नट&#2381;स","<span class='notranslate'>(C) Wing nuts </span>| व&#2367;&#2306;ग नट&#2381;स","<span class='notranslate'>(D) Cap nuts </span>| क&#2376;प नटस"],
answer:0,
},
{
question:"<span class='notranslate'>Q. Which key is used for transmitting light torque? </span>| र&#2379;शन&#2366; ट&#2377;र&#2381;क क&#2379; स&#2306;च&#2366;र&#2367;त करन&#2375; क&#2375; ल&#2367;ए क&#2367;स क&#2369;&#2306;ज&#2368; क&#2366; उपय&#2379;ग क&#2367;य&#2366; ज&#2366;त&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Saddle key </span>| सड&#2375;ल क&#2368;","<span class='notranslate'>(B) Woodruff key </span>| उडरफ क&#2368;","<span class='notranslate'>(C) Gib head key </span>| ग&#2367;ब ह&#2375;ड क&#2368;","<span class='notranslate'>(D) Feather key </span>| फ&#2375;दर क&#2368;"],
answer:1,
},
{
question:"<span class='notranslate'>Q. What is the range of size in individual radius gauges? </span>| व&#2381;यक&#2381;त&#2367;गत त&#2381;र&#2367;ज&#2381;य&#2366; ग&#2375;ज म&#2375;&#2306; आक&#2366;र क&#2368; स&#2368;म&#2366; क&#2381;य&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Step of 1mm","<span class='notranslate'>(B) Step of 0.5mm","<span class='notranslate'>(C) Step of 1.5mm","<span class='notranslate'>(D) Step of 2mm"],
answer:0,
},
{
question:"<span class='notranslate'>Q. Which file with sharp and parallel teeth used on soft and non metallic materials? </span>| नरम और ग&#2376;र ध&#2366;त&#2369; मट&#2375;र&#2367;यल पर इस&#2381;त&#2375;म&#2366;ल क&#2367;ए ज&#2366;न&#2375; व&#2366;ल&#2375; त&#2375;ज और सम&#2366;न&#2366;&#2306;तर द&#2366;&#2306;त&#2379;&#2306; क&#2367;स फ&#2366;इल म&#2375; ह&#2379;त&#2375; ह&#2376;&#2306;?",
options:["<span class='notranslate'>(A) Pillar file </span>| प&#2367;लर फ&#2366;इल","<span class='notranslate'>(B) Tinker file </span>| ट&#2367;&#2306;कर फ&#2366;इल","<span class='notranslate'>(C) Dreadnaught file </span>| ड&#2381;र&#2375;डन&#2377;ट फ&#2364;&#2366;इल","<span class='notranslate'>(D) Warding file </span>|  व&#2366;र&#2381;ड&#2367;&#2306;ग फ&#2364;&#2366;इल"],
answer:2,
},
{
question:"<span class='notranslate'>Q. What is the use of fillet gauge? </span>| फ&#2364;&#2367;ल&#2375;ट ग&#2375;ज क&#2366; उपय&#2379;ग क&#2381;य&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) To check external radius </span>| ब&#2366;हर&#2368; त&#2381;र&#2367;ज&#2381;य&#2366; क&#2368; ज&#2366;&#2305;च करन&#2375; क&#2375; ल&#2367;ए","<span class='notranslate'>(B) To check external corner radius </span>| ब&#2366;हर&#2368; क&#2379;न&#2375; क&#2368; त&#2381;र&#2367;ज&#2381;य&#2366; क&#2368; ज&#2366;&#2306;च करन&#2375; क&#2375; ल&#2367;ए","<span class='notranslate'>(C) To check internal radius </span>| आ&#2306;तर&#2367;क त&#2381;र&#2367;ज&#2381;य&#2366; क&#2368; ज&#2366;&#2305;च करन&#2375; क&#2375; ल&#2367;ए","<span class='notranslate'>(D) To check gap between mating components </span>| म&#2375;ट&#2367;&#2306;ग घटक&#2379;&#2306; क&#2375; ब&#2368;च अ&#2306;तर क&#2368; ज&#2366;&#2306;च करन&#2366;"],
answer:2,
},
{
question:"<span class='notranslate'>Q. What is the gauge to check acceptable size on external diameter of a shaft? </span>| श&#2366;फ&#2381;ट क&#2375; ब&#2366;हर&#2368; व&#2381;य&#2366;स पर स&#2381;व&#2368;क&#2366;र&#2381;य स&#2366;इज़ क&#2368; ज&#2366;&#2306;च करन&#2375; क&#2375; ल&#2367;ए ग&#2375;ज क&#2380;नस&#2366; ह&#2376;?<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj2DIxm57jz4F47EGkFBpmJokcj9FzdPo5kLi_rFT_TakVTibTd6FL8VxBcQV1pWM3Riy8xy7gqK4Ehq_sm9Na0-uRuXDOqrIW5dd4wNSx66_Ut8eguOYoC7k75usn9CgTKRaJsTXyYXVZ68s4eoIgLEWBEva0XIJW0IVkn23Ee23t429E9E6ZMeoHoJgxr/s1600/FIT2-1-32.JPG'>",
options:["<span class='notranslate'>(A) Ring gauge - Go </span>| र&#2367;&#2306;ग ग&#2375;ज - ग&#2379;","<span class='notranslate'>(B) Plug gauge - Go </span>| प&#2381;लग ग&#2375;ज - न&#2379; ग&#2379;","<span class='notranslate'>(C) Ring gauge - No Go </span>| र&#2367;&#2306;ग ग&#2375;ज - न&#2379; ग&#2379;","<span class='notranslate'>(D) Plug gauge - No Go </span>| प&#2381;लग ग&#2375;ज - न&#2379; ग&#2379;"],
answer:0,
},
{
question:"<span class='notranslate'>Q. What is the use of drill gauge? </span>| ड&#2381;र&#2367;ल ग&#2375;ज क&#2366; उपय&#2379;ग क&#2381;य&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Check the diameter of the drill </span>| ड&#2381;र&#2367;ल क&#2375; व&#2381;य&#2366;स क&#2368; ज&#2366;&#2306;च करन&#2366;","<span class='notranslate'>(B) Check the length of the drill </span>| ड&#2381;र&#2367;ल क&#2368; ल&#2306;ब&#2366;ई क&#2368; ज&#2366;&#2305;च करन&#2366;","<span class='notranslate'>(C) Check the cutting angle of the drill </span>| ड&#2381;र&#2367;ल क&#2375; कट&#2367;&#2306;ग ए&#2306;गल क&#2368; ज&#2366;&#2306;च करन&#2366;","<span class='notranslate'>(D) Check the lip length </span>| ल&#2367;प&#2381;स क&#2368; ल&#2306;ब&#2366;ई क&#2368; ज&#2366;&#2305;च करन&#2366;"],
answer:0,
},
{
question:"<span class='notranslate'>Q. What is the use of rifflerʹs file? </span>| र&#2367;फ&#2364;&#2381;लर फ&#2364;&#2366;इल क&#2366; उपय&#2379;ग क&#2381;य&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Ward notches filing </span>| व&#2366;र&#2381;ड न&#2377;च फ&#2367;ल&#2381;ल&#2367;&#2306;ग","<span class='notranslate'>(B) Lock repair </span>| त&#2366;ल&#2366; मरम&#2381;मत","<span class='notranslate'>(C) Silversmith work </span>| स&#2367;ल&#2381;वरस&#2381;म&#2367;थ क&#2366;र&#2381;य","<span class='notranslate'>(D) Mould - making work </span>| म&#2379;ल&#2381;ड - म&#2375;क&#2367;&#2306;ग क&#2366;र&#2381;य"],
answer:2,
},
{
question:"<span class='notranslate'>Q. Which special file is used for narrow work? </span>| स&#2306;क&#2368;र&#2381;ण क&#2366;र&#2381;य क&#2375; ल&#2367;ए क&#2367;स व&#2367;श&#2375;ष फ&#2364;&#2366;इल क&#2366; उपय&#2379;ग क&#2367;य&#2366; ज&#2366;त&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Pillar file </span>| प&#2367;लर फ&#2366;इल","<span class='notranslate'>(B) Square file </span>| स&#2381;क&#2381;व&#2366;यर फ&#2364;&#2366;इल","<span class='notranslate'>(C) Dread naught file </span>| ड&#2381;र&#2375;ड न&#2377;ट फ&#2364;&#2366;इल","<span class='notranslate'>(D) Swiss pattern file </span>| स&#2381;व&#2367;स प&#2376;टर&#2381;न फ&#2364;&#2366;इल"],
answer:0,
},
{
question:"<span class='notranslate'>Q. Name the file used for silversmithʹs work.</span>| स&#2367;ल&#2381;वरस&#2381;म&#2367;थ क&#2375; क&#2366;म क&#2375; ल&#2367;ए उपय&#2379;ग क&#2368; ज&#2366;न&#2375; व&#2366;ल&#2368; फ&#2364;&#2366;इल क&#2366; न&#2366;म बत&#2366;इए&#2404;",
options:["<span class='notranslate'>(A) Min saw file </span>| म&#2367;न स&#2377; फ&#2364;&#2366;इल","<span class='notranslate'>(B) Riffler file </span>| र&#2367;फ&#2364;&#2381;लर फ&#2364;&#2366;इल","<span class='notranslate'>(C) Pillar file </span>| प&#2367;ल&#2381;लर फ&#2364;&#2366;इल","<span class='notranslate'>(D) Warding file </span>| व&#2366;र&#2381;ड&#2367;&#2306;ग फ&#2364;&#2366;इल"],
answer:1,
},
{
question:"<span class='notranslate'>Q. What is the use of a template? </span>| ट&#2375;म&#2381;प&#2381;ल&#2375;ट क&#2366; उपय&#2379;ग क&#2381;य&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) To check the diameter of shaft </span>| श&#2366;फ&#2381;ट क&#2375; व&#2381;य&#2366;स क&#2368; ज&#2366;&#2306;च करन&#2375; क&#2375; ल&#2367;ए","<span class='notranslate'>(B) To check the pitch of holes </span>| छ&#2367;द&#2381;र&#2379;&#2306; क&#2368; प&#2367;च क&#2368; ज&#2366;&#2306;च करन&#2375; क&#2375; ल&#2367;ए","<span class='notranslate'>(C) To check the hole size </span>| छ&#2375;द क&#2366; आक&#2366;र ज&#2366;&#2306;चन&#2375; क&#2375; ल&#2367;ए","<span class='notranslate'>(D) To check the contour profile of a work piece </span>| क&#2367;स&#2368; वर&#2381;कप&#2368;स क&#2368; सम&#2379;च&#2381;च प&#2381;र&#2379;फ&#2364;&#2366;इल क&#2368; ज&#2366;&#2306;च करन&#2375; क&#2375; ल&#2367;ए"],
answer:3,
},
{
question:"<span class='notranslate'>Q. What is the advantage of wing nut? </span>| व&#2367;&#2306;ग नट&#2381;स क&#2366; उपय&#2379;ग कह&#2366;&#2306; क&#2367;य&#2366; ज&#2366;त&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) In coach building work </span>| क&#2379;च न&#2367;र&#2381;म&#2366;ण क&#2366;र&#2381;य म&#2375;&#2306;","<span class='notranslate'>(B) Heavy duty assembly work </span>| भ&#2366;र&#2368; क&#2381;षमत&#2366; व&#2366;ल&#2375; अस&#2375;&#2306;बल&#2368; क&#2366;र&#2381;य म&#2375;","<span class='notranslate'>(C) Loosen and tighten without wrench </span>| ढ&#2368;ल&#2366; और कस क&#2379; र&#2367;&#2306;च क&#2375; ब&#2367;न&#2366;","<span class='notranslate'>(D) Provide decorative appearance </span>| सज&#2366;वट&#2368; उपस&#2381;थ&#2367;त&#2367; प&#2381;रद&#2366;न करन&#2375; क&#2375; ल&#2367;ए"],
answer:2,
},
{
question:"<span class='notranslate'>Q. What is the name of the key? </span>| इस क&#2368; क&#2366; न&#2366;म क&#2381;य&#2366; ह&#2376;?<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgwjkVIMYoM01TdQ3bhHsA0kUSxurHMzw6-DH6wGm9X0yRGrcqG8n_SOhMO0xY0XXVgq-hIhtsJBPOfLUYq6xcHWZaqLLIDqUKWzuWCGmfaZ_wWxvN6PZFBt3BmhxgP9RLHApW8F2XPfV2Wh8NXhdbN-qEBcTyRulxIlLTsCe5wPd-lQM8-VokGzfBonxvZ/s1600/FIT2-1-2.JPG'>",
options:["<span class='notranslate'>(A) Sunk key </span>| स&#2306;क क&#2368;","<span class='notranslate'>(B) Feather key </span>| फ&#2375;दर क&#2368;","<span class='notranslate'>(C) Flat saddle key </span>| फ&#2381;ल&#2376;ट स&#2376;डल क&#2368;","<span class='notranslate'>(D) Hollow saddle key </span>| ह&#2379;ल&#2379; स&#2376;डल क&#2368;"],
answer:1,
}]
},
  
{
category:"<span class='notranslate'>Module 2 Slip gauge </span>| स&#2381;ल&#2367;प ग&#2375;ज",
quizWrap:[{
question:"<span class='notranslate'>Q. Which material is used to make slip gauge block? </span>| स&#2381;ल&#2367;प ग&#2375;ज ब&#2381;ल&#2377;क बन&#2366;न&#2375; क&#2375; ल&#2367;ए क&#2367;स मट&#2375;र&#2367;यल क&#2366; उपय&#2379;ग क&#2367;य&#2366; ज&#2366;त&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Tool steel </span>| ट&#2370;ल स&#2381;ट&#2368;ल","<span class='notranslate'>(B) Low grade steel </span>| ल&#2379; ग&#2381;र&#2375;ड स&#2381;ट&#2368;ल","<span class='notranslate'>(C) High grade steel with low thermal expansion </span>| उच&#2381;च ग&#2381;र&#2375;ड स&#2381;ट&#2368;ल","<span class='notranslate'>(D) High carbon steel </span>| उच&#2381;च क&#2366;र&#2381;बन स&#2381;ट&#2368;ल"],
answer:2,
},
{
question:"<span class='notranslate'>Q. What is the name of surface texture measuring instrument? </span>| सतह ट&#2375;क&#2381;सचर म&#2366;पन&#2375; क&#2375; उपकरण क&#2366; न&#2366;म क&#2381;य&#2366; ह&#2376;?<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEid5RK-_9SHsB41nu-vHDoUtpSeVxQiF8blO6nzNRmRY-emiibyFDfzUgtlIUjBfVVhsHSqTjqeqWbKsyHNZZKPotrSDV2prNQlV0VeT-44PRtVE9JuvwGxdLz5on-ruuVsRdpYvD4JjJlEZnnQTyqKEr3FDBDW8epwj1znSP9cF8HQaj9EegJuXjCgWREK/s1600/FIT2-2-48.JPG'>",
options:["<span class='notranslate'>(A) Dial test indicator </span>| ड&#2366;यल ट&#2375;स&#2381;ट इ&#2306;ड&#2367;क&#2375;टर","<span class='notranslate'>(B) Electrical surface indicator </span>| इल&#2375;क&#2381;ट&#2381;र&#2367;कल सरफ&#2375;स इ&#2306;ड&#2367;क&#2375;टर","<span class='notranslate'>(C) Electronic surface indicator </span>| इल&#2375;क&#2381;ट&#2381;र&#2377;न&#2367;क सरफ&#2375;स इ&#2306;ड&#2367;क&#2375;टर","<span class='notranslate'>(D) Mechanical surface indicator </span>| म&#2376;क&#2375;न&#2367;कल सरफ&#2375;स इ&#2306;ड&#2367;क&#2375;टर"],
answer:3,
},
{
question:"<span class='notranslate'>Q. What type of abrasives are used in honing cast iron and non-ferrous materials? </span>| क&#2366;स&#2381;ट आयरन और अल&#2380;ह मट&#2375;र&#2367;यल क&#2368; ह&#2379;न&#2367;&#2306;ग करन&#2375; क&#2375; ल&#2367;ए क&#2367;स प&#2381;रक&#2366;र क&#2375; अपघर&#2381;षक क&#2366; उपय&#2379;ग क&#2367;य&#2366; ज&#2366;त&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Diamond </span>| ह&#2368;र&#2366;","<span class='notranslate'>(B) Boron carbide </span>| ब&#2379;र&#2366;न क&#2366;र&#2381;ब&#2366;इड","<span class='notranslate'>(C) Silicon carbide </span>| स&#2367;ल&#2367;क&#2377;न क&#2366;र&#2381;ब&#2366;इड","<span class='notranslate'>(D) Aluminium oxide </span>| एल&#2381;य&#2369;म&#2368;न&#2367;यम ऑक&#2381;स&#2366;इड"],
answer:2,
},
{
question:"<span class='notranslate'>Q. Which material is used to clean the slip gauge? </span>| स&#2381;ल&#2367;प ग&#2375;ज क&#2379; स&#2366;फ करन&#2375; क&#2375; ल&#2367;ए क&#2367;स मट&#2375;र&#2367;यल क&#2366; उपय&#2379;ग क&#2367;य&#2366; ज&#2366;त&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Wax </span>| म&#2379;म","<span class='notranslate'>(B) Kerosene </span>| म&#2367;टट&#2368; त&#2375;ल","<span class='notranslate'>(C) Soluble oil </span>| घ&#2369;लनश&#2368;ल त&#2375;ल","<span class='notranslate'>(D) Carbon tetra chloride </span>| क&#2366;र&#2381;बन ट&#2375;ट&#2381;र&#2366;क&#2381;ल&#2379;र&#2366;इड"],
answer:3,
},
{
question:"<span class='notranslate'>Q. What is the instrument used in measuring external diameter? </span>| ब&#2366;हर&#2368; व&#2381;य&#2366;स क&#2379; म&#2366;पन&#2375; म&#2375;&#2306; क&#2367;स उपकरण क&#2366; उपय&#2379;ग क&#2367;य&#2366; ज&#2366;त&#2366; ह&#2376;?<br><img src='#'>",
options:["<span class='notranslate'>(A) Vernier caliper </span>| वर&#2381;न&#2367;यर क&#2376;ल&#2368;पर&#2381;स","<span class='notranslate'>(B) Outside caliper </span>| आउटस&#2366;इड क&#2376;ल&#2367;पर","<span class='notranslate'>(C) Parallel leg caliper </span>| प&#2376;र&#2375;लल ल&#2375;ग क&#2376;ल&#2367;पर","<span class='notranslate'>(D) Pair of special jaws by using slip gauge </span>| स&#2381;ल&#2367;प ग&#2375;ज क&#2366; उपय&#2379;ग करक&#2375; व&#2367;श&#2375;ष जबड&#2364;&#2375; क&#2368; ज&#2379;ड&#2364;&#2368;"],
answer:3,
},
{
question:"<span class='notranslate'>Q. What is the effect, if you touch the lapped surfaces of slip gauges while holding? </span>| यद&#2367; आप स&#2381;ल&#2367;प ग&#2375;ज क&#2379; पकड&#2364;त&#2375; समय उसक&#2368; ल&#2376;प&#2381;ड सतह&#2379;&#2306; क&#2379; छ&#2370;त&#2375; ह&#2376;&#2306; त&#2379; क&#2381;य&#2366; प&#2381;रभ&#2366;व पड&#2364;त&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Accuracy will increase </span>| सट&#2368;कत&#2366; बढ&#2364;&#2375;ग&#2368;","<span class='notranslate'>(B) Rust will form </span>| ज&#2306;ग लग ज&#2366;य&#2375;ग&#2368;","<span class='notranslate'>(C) Accuracy will reduce </span>| सट&#2368;कत&#2366; कम ह&#2379; ज&#2366;एग&#2368;","<span class='notranslate'>(D) Affect wringing </span>| व&#2381;र&#2367;&#2306;ग&#2367;&#2306;ग पर असर पड&#2364;त&#2366; ह&#2376;"],
answer:3,
},
{
question:"<span class='notranslate'>Q. Name the operation of joining the slip gauges together to build up sizes.</span>| आक&#2366;र बन&#2366;न&#2375; क&#2375; ल&#2367;ए स&#2381;ल&#2367;प ग&#2375;ज क&#2379; एक स&#2366;थ ज&#2379;ड&#2364;न&#2375; क&#2368; प&#2381;रक&#2381;र&#2367;य&#2366; क&#2366; न&#2366;म बत&#2366;इए&#2404;",
options:["<span class='notranslate'>(A) Honing </span>| ह&#2379;न&#2367;&#2306;ग","<span class='notranslate'>(B) Lapping </span>| ल&#2376;प&#2367;&#2306;ग","<span class='notranslate'>(C) Wringing </span>| व&#2381;र&#2367;&#2306;ग&#2367;&#2306;ग","<span class='notranslate'>(D) Polishing </span>| प&#2379;ल&#2367;श&#2367;&#2306;ग"],
answer:2,
},
{
question:"<span class='notranslate'>Q. What is the name of instrument? </span>| इस य&#2306;त&#2381;र क&#2366; न&#2366;म क&#2381;य&#2366; ह&#2376;?<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgI8jM2kIl6DtfVCWc1-zBl_WVhhgINi_NKnwcvPmrEWqaIeiXF4SiYuPN6Lg5GH-i6EDiZwpckSVU1KTtHtlHfORLGBOpGYHRcq2vI7pScXw6XkCRm0aKK93GHLpFVnoKEH3AFjkruXjN9zeWo7oXPQ5iIAz36IP_274_iExwa72RJXSz4D1ai3v80abCi/s1600/FIT2-2-64.JPG'>",
options:["<span class='notranslate'>(A) Depth vernier gauge </span>| ड&#2375;प&#2381;थ वर&#2381;न&#2367;यर ग&#2375;ज","<span class='notranslate'>(B) Vernier height gauge </span>| वर&#2381;न&#2367;यर ह&#2366;इट ग&#2375;ज","<span class='notranslate'>(C) Clamp type height gauge </span>| क&#2381;ल&#2376;&#2306;प ट&#2366;इप ह&#2366;इट ग&#2375;ज","<span class='notranslate'>(D) Height gauge with slip gauge holder </span>| स&#2381;ल&#2367;प ग&#2375;ज ह&#2379;ल&#2381;डर क&#2375; स&#2366;थ ह&#2366;ईट ग&#2375;ज"],
answer:3,
},
{
question:"<span class='notranslate'>Q. What is the purpose of lapping vehicles? </span>| व&#2381;ह&#2368;कल ल&#2376;प&#2367;&#2306;ग करन&#2375; क&#2366; उद&#2381;द&#2375;श&#2381;य क&#2381;य&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Regulate cutting action and lubricate surface </span>| क&#2366;टन&#2375; क&#2368; क&#2381;र&#2367;य&#2366; क&#2379; व&#2367;न&#2367;यम&#2367;त कर&#2375;&#2306; और सतह क&#2379; च&#2367;कन&#2366;ई कर&#2375;&#2306;","<span class='notranslate'>(B) Medium effective operation </span>| मध&#2381;यम प&#2381;रभ&#2366;व&#2368; स&#2306;च&#2366;लन","<span class='notranslate'>(C) Decrease dimensional accuracy </span>| आय&#2366;म&#2368; सट&#2368;कत&#2366; म&#2375;&#2306; कम&#2368;","<span class='notranslate'>(D) Decrease cutting ability </span>| क&#2366;टन&#2375; क&#2368; क&#2381;षमत&#2366; म&#2375;&#2306; कम"],
answer:0,
},
{
question:"<span class='notranslate'>Q. Why manual stroking is preferred for large quantities in honing operation? </span>| ऑनर&#2367;&#2306;ग ऑपर&#2375;शन म&#2375;&#2306; बड&#2364;&#2368; म&#2366;त&#2381;र&#2366; क&#2375; ल&#2367;ए म&#2376;न&#2369;अल स&#2381;ट&#2381;र&#2379;क&#2367;&#2306;ग क&#2381;य&#2379;&#2306; पस&#2306;द क&#2368; ज&#2366;त&#2368; ह&#2376;?",
options:["<span class='notranslate'>(A) To reduce cost </span>| ल&#2366;गत कम करन&#2375; क&#2375; ल&#2367;ए","<span class='notranslate'>(B) To reduce time </span>| समय क&#2379; कम करन&#2375; क&#2375; ल&#2367;ए","<span class='notranslate'>(C) To keep close tolerance </span>| कम ट&#2377;लर&#2375;&#2306;स रखन&#2375; क&#2375; ल&#2367;ए","<span class='notranslate'>(D) To reduce maintenance cost </span>| रखरख&#2366;व ल&#2366;गत क&#2379; कम करन&#2375; क&#2375; ल&#2367;ए"],
answer:2,
},
{
question:"<span class='notranslate'>Q. What is the height of slip gauge (q = 25&#176; = 0.4226)? </span>| इस स&#2381;ल&#2367;प ग&#2375;ज क&#2368; ऊ&#2306;च&#2366;ई क&#2367;तन&#2368; ह&#2376;?(θ =25 &#176; = 0.4226)<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhfzdx48hSebw2M5OkGA_shbeLTOcbZxwbp-dmnlSVW4FqglEfSE0OPdoKHXl4xP2CP13rFKooFGGKQCDSSpg4seiHFd-OUbdyiPfo3tw1CuZvehSWVQqVHKEckXliqEMxqXglAooVn_rv6Vb09zbC7Kec0NiBIZjsRnbHsQ-RDEmDGcCUC-Gl8cPoRHS0n/s1600/FIT2-2-58.JPG'>",
options:["<span class='notranslate'>(A) 41.26","<span class='notranslate'>(B) 42.26","<span class='notranslate'>(C) 43.26","<span class='notranslate'>(D) 44.26"],
answer:1,
},
{
question:"<span class='notranslate'>Q. What grade of slip gauge is used in general workshop? </span>| स&#2366;म&#2366;न&#2381;य क&#2366;र&#2381;यश&#2366;ल&#2366; म&#2375;&#2306; क&#2367;स ग&#2381;र&#2375;ड क&#2368; स&#2381;ल&#2367;प ग&#2375;ज क&#2366; उपय&#2379;ग क&#2367;य&#2366; ज&#2366;त&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Grade I accuracy","<span class='notranslate'>(B) Grade II accuracy","<span class='notranslate'>(C) Grade &#8216;0&#8217; accuracy","<span class='notranslate'>(D) Grade &#8216;00&#8217; accuracy"],
answer:1,
},
{
question:"<span class='notranslate'>Q. Which is the abrasive used for lapping soft steel and non-ferrous metals? </span>| क&#2367;स अपघर&#2381;षक (एब&#2381;र&#2375;स&#2367;व) क&#2366; उपय&#2379;ग नरम इस&#2381;प&#2366;त और अल&#2380;ह ध&#2366;त&#2369;ओ&#2306; क&#2375; ल&#2376;प&#2367;&#2306;ग क&#2375; ल&#2367;ए क&#2367;य&#2366; ज&#2366;त&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Silicon carbide </span>| स&#2367;ल&#2367;क&#2377;न क&#2366;र&#2381;ब&#2366;इड","<span class='notranslate'>(B) Diamond </span>| ह&#2368;र&#2366;","<span class='notranslate'>(C) Boron carbide </span>| ब&#2379;र&#2366;न क&#2366;र&#2381;ब&#2366;इड","<span class='notranslate'>(D) Fused alumina </span>| फ&#2381;य&#2370;ज&#2364;&#2381;ड एल&#2381;य&#2370;म&#2368;न&#2366;"],
answer:3,
},
{
question:"<span class='notranslate'>Q. What is the use of frosting operation? </span>| फ&#2381;र&#2377;स&#2381;ट&#2367;&#2306;ग ऑपर&#2375;शन क&#2366; उपय&#2379;ग क&#2381;य&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Decreasing oil retention on scraped surfaces </span>| ख&#2369;रच&#2368; ह&#2369;ई सतह&#2379;&#2306; पर त&#2375;ल क&#2366; जम&#2366;व कम ह&#2379;न&#2366;","<span class='notranslate'>(B) Increasing oil retention on milled surfaces </span>| म&#2367;ल&#2381;ड सतह&#2379;&#2306; पर त&#2375;ल प&#2381;रत&#2367;ध&#2366;रण बढ&#2364;&#2366;न&#2366;","<span class='notranslate'>(C) Increasing oil retention on scraped surfaces </span>| ख&#2369;रच&#2368; ह&#2369;ई सतह&#2379;&#2306; पर त&#2375;ल प&#2381;रत&#2367;ध&#2366;रण म&#2375;&#2306; व&#2371;द&#2381;ध&#2367;","<span class='notranslate'>(D) Decreasing oil retention on milled surfaces </span>| म&#2367;ल&#2381;ड सतह&#2379;&#2306; पर त&#2375;ल प&#2381;रत&#2367;ध&#2366;रण कम करन&#2366;"],
answer:2,
},
{
question:"<span class='notranslate'>Q. Which one forms the hypotenuse of the triangle while checking with sine bar? </span>| स&#2366;इन ब&#2366;र क&#2375; स&#2366;थ ज&#2366;&#2305;च करत&#2375; समय क&#2380;न त&#2381;र&#2367;भ&#2369;ज(ट&#2381;र&#2366;य&#2306;गल) क&#2366; कर&#2381;ण बन&#2366;त&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Surface plate </span>| सरफ&#2375;स प&#2381;ल&#2375;ट","<span class='notranslate'>(B) Sine bar width </span>| स&#2366;इन ब&#2366;र क&#2368; च&#2380;ड&#2364;&#2366;ई","<span class='notranslate'>(C) Sine bar length </span>| स&#2366;इन ब&#2366;र क&#2368; ल&#2306;ब&#2366;ई","<span class='notranslate'>(D) Slip gauges height </span>| स&#2381;ल&#2367;प ग&#2375;ज क&#2368; ऊ&#2306;च&#2366;ई"],
answer:2,
},
{
question:"<span class='notranslate'>Q. What is the method of build of size using slip gauge? </span>| स&#2381;ल&#2367;प ग&#2375;ज क&#2366; उपय&#2379;ग करन&#2375; क&#2366; व&#2367;ध&#2367; क&#2381;य&#2366; ह&#2376;?<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiH2OjbQwqfciec5bVOG3O4wGGIK0w7NamzjZEGw8iGhVoOLV-YwnRj-bJF5tko4jM0249PaGCxTnAI9hGn9j-aH3psQXDD7FxmPiA-MN9qBJtxGwXjszH9osfvZGr62ZGf5GwK6OkxcewXT1DjhEuUFEDJhhEoHdM3dCKuMywaFWXWOJBbarudOfdX3tED/s1600/FIT2-2-60.JPG'>",
options:["<span class='notranslate'>(A) Wringing </span>| व&#2381;र&#2367;न&#2381;ग&#2367;&#2306;ग","<span class='notranslate'>(B) Sliding </span>| स&#2381;ल&#2366;इड&#2367;&#2306;ग","<span class='notranslate'>(C) Glazing </span>| ग&#2381;ल&#2375;ज&#2364;&#2367;&#2306;ग","<span class='notranslate'>(D) Loading </span>| ल&#2379;ड&#2367;&#2306;ग"],
answer:0,
},
{
question:"<span class='notranslate'>Q. Which grade slip gauge is used for precision tool room applications? </span>| प&#2381;र&#2367;स&#2367;श&#2364;न ट&#2370;ल र&#2370;म अन&#2369;प&#2381;रय&#2379;ग&#2379;&#2306; क&#2375; ल&#2367;ए क&#2367;स ग&#2381;र&#2375;ड क&#2375; स&#2381;ल&#2367;प ग&#2375;ज क&#2366; उपय&#2379;ग क&#2367;य&#2366; ज&#2366;त&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Grade 00","<span class='notranslate'>(B) Grade 0","<span class='notranslate'>(C) Grade I","<span class='notranslate'>(D) Grade II"],
answer:2,
},
{
question:"<span class='notranslate'>Q. Which is the hardest of all abrasive material and used for lapping tungsten carbide? </span>| ट&#2306;गस&#2381;टन क&#2366;र&#2381;ब&#2366;इड क&#2375; ल&#2376;प&#2367;&#2306;ग क&#2375; ल&#2367;ए प&#2381;रय&#2369;क&#2381;त सभ&#2368; अपघर&#2381;षक पद&#2366;र&#2381;थ&#2379;&#2306; म&#2375;&#2306; स&#2375; सबस&#2375; कठ&#2379;र क&#2380;न स&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Silicon carbide </span>| स&#2367;ल&#2367;क&#2377;न क&#2366;र&#2381;ब&#2366;इड","<span class='notranslate'>(B) Boron carbide </span>| ब&#2379;र&#2379;न क&#2366;र&#2381;ब&#2366;इड","<span class='notranslate'>(C) Diamond </span>|  ह&#2368;र&#2366;","<span class='notranslate'>(D) Aluminium oxide </span>| एल&#2381;य&#2369;म&#2368;न&#2367;यम ऑक&#2381;स&#2366;इड"],
answer:2,
},
{
question:"<span class='notranslate'>Q. Name the part marked as ʹxʹ in the slip gauge accessories.</span>| स&#2381;ल&#2367;प ग&#2375;ज एक&#2381;स&#2375;सर&#2368;ज&#2364; म&#2375;&#2306; ʹxʹ क&#2375; र&#2370;प म&#2375;&#2306; च&#2367;ह&#2381;न&#2367;त भ&#2366;ग क&#2366; न&#2366;म बत&#2366;ए&#2306;&#2404;<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgeAD_P-WMPSNCEUILOfyZEc9LcpkVoCDM8EaVOGrWsMNnfOoIfCDYfZ2qUdtWSesdOjfgbo_EIytJBSf-KmXWirN-Ex92euK0uy0nHufDiiO_aRDIeQ3dNOtfIE-ZSHwXF_TY1lKHpspCVk_AL5IZO4-AZfYhwLXnvig44FFhZV1DXmBonb8RRhzhwQAzK/s320/FIT2-2-320.jpg'>",
options:["<span class='notranslate'>(A) Redii scriber </span>| र&#2375;ड&#2368; स&#2381;क&#2381;र&#2376;बर","<span class='notranslate'>(B) Special jaw </span>| व&#2367;श&#2375;ष ज&#2377;","<span class='notranslate'>(C) Flat jaw </span>| फ&#2381;ल&#2376;ट ज&#2377;","<span class='notranslate'>(D) Base </span>| ब&#2375;स"],
answer:2,
},
{
question:"<span class='notranslate'>Q. What material is used to make sine bar? </span>| स&#2366;इन ब&#2366;र बन&#2366;न&#2375; क&#2375; ल&#2367;ए क&#2367;स मट&#2375;र&#2367;यल क&#2366; उपय&#2379;ग क&#2367;य&#2366; ज&#2366;त&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Invar steel </span>| इन&#2381;व&#2366;र स&#2381;ट&#2368;ल","<span class='notranslate'>(B) High speed steel </span>| ह&#2366;ई स&#2381;प&#2368;ड स&#2381;ट&#2368;ल","<span class='notranslate'>(C) High carbon steel </span>| उच&#2381;च क&#2366;र&#2381;बन स&#2381;ट&#2368;ल","<span class='notranslate'>(D) Stabilized chromium steel </span>| स&#2381;थ&#2367;र क&#2381;र&#2379;म&#2367;यम स&#2381;ट&#2368;ल"],
answer:3,
},
{
question:"<span class='notranslate'>Q. Which material is used to protect slip gauge from rust? </span>| स&#2381;ल&#2367;प ग&#2375;ज क&#2379; ज&#2306;ग स&#2375; बच&#2366;न&#2375; क&#2375; ल&#2367;ए क&#2367;स स&#2366;मग&#2381;र&#2368; क&#2366; उपय&#2379;ग क&#2367;य&#2366; ज&#2366;त&#2366; ह&#2376;??",
options:["<span class='notranslate'>(A) Oil </span>| त&#2375;ल","<span class='notranslate'>(B) Wax </span>| म&#2379;म","<span class='notranslate'>(C) Kerosene </span>| म&#2367;टट&#2368; त&#2375;ल","<span class='notranslate'>(D) Petroleum jelly </span>| प&#2375;ट&#2381;र&#2379;ल&#2367;यम ज&#2375;ल&#2368;"],
answer:3,
},
{
question:"<span class='notranslate'>Q. What is marked as &#8216;X&#8217;? </span>| च&#2367;न&#2381;ह&#2367;त क&#2367;य&#2375; गए &#8217;X&#8217; भ&#2366;ग क&#2366; न&#2366;म क&#2381;य&#2366; ह&#2376;?<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhIWQeU_iPnQsgu2bXE_nLQwUc9kq8cQoGnRRb8M-EBrd0oWSoLnts4FQcTXeK8rp8MTfXi_a8i5hnhTO7sA07E_VKrPO7V_S1AK43YLfbvhpy0CImw2-NOTBju7u7NU26xUdNinVvlxKN7VhSaA33wDPyJrjqZ3uj_UHAR_9roecr6WF-yh1fo-p3p461Y/s1600/FIT2-2-56.JPG'>",
options:["<span class='notranslate'>(A) Length </span>| ल&#2306;ब&#2366;ई","<span class='notranslate'>(B) Depth surface </span>| ड&#2375;प&#2381;थ सरफ&#2375;स","<span class='notranslate'>(C) Contact rollers </span>| क&#2366;&#2306;ट&#2375;क&#2381;ट र&#2379;लर&#2381;स","<span class='notranslate'>(D) Width </span>| च&#2380;ड&#2364;&#2366;ई"],
answer:0,
},
{
question:"<span class='notranslate'>Q. What is the purpose of slit provided in the lapping tool? </span>| ल&#2376;प&#2367;&#2306;ग ट&#2370;ल म&#2375;&#2306; प&#2381;रद&#2366;न क&#2367;य&#2366; गय&#2366; स&#2381;ल&#2367;ट क&#2366; उद&#2381;द&#2375;श&#2381;य क&#2381;य&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) For clearance </span>| क&#2381;ल&#2368;यर&#2375;&#2306;स क&#2375; ल&#2367;ए","<span class='notranslate'>(B) For expansion </span>| व&#2367;स&#2381;त&#2366;र क&#2375; ल&#2367;ए","<span class='notranslate'>(C) To retain abrasive </span>| घर&#2381;षण बन&#2366;ए रखन&#2375; क&#2375; ल&#2367;ए","<span class='notranslate'>(D) To adjust the sleeve </span>| स&#2381;ल&#2368;व क&#2379; एडजस&#2381;ट करन&#2375; क&#2375; ल&#2367;ए"],
answer:1,
},
{
question:"<span class='notranslate'>Q. Name the part marked as ʹxʹ in slip gauge.</span>| स&#2381;ल&#2367;प ग&#2375;ज म&#2375;&#2306; ʹxʹ क&#2375; र&#2370;प म&#2375;&#2306; च&#2367;ह&#2381;न&#2367;त भ&#2366;ग क&#2366; न&#2366;म बत&#2366;इए&#2404;<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEheiZtH-076mAj7RpMPgNcpXyvhqd6r9BIWv9NZYBAhUgBJuRl3g6KE-2rdqrVoPjWGgybs1-noH0fuMx_YHBjYNuutPmXLykik4XEdfmryHHPAIJN7Hj2aES_ATvSnrxMbjrd_7VykMh8tcuVp_3kUZa1sKc3o-rUbuoRoyTVBMylsibFjh8sFPpmS6ikM/s1600/FIT2-2-316.jpg'>",
options:["<span class='notranslate'>(A) Chamois leather </span>| च&#2366;म&#2379;इस ल&#2375;दर","<span class='notranslate'>(B) Leather pad </span>| ल&#2375;दर प&#2376;ड","<span class='notranslate'>(C) Protector slip </span>| प&#2381;र&#2379;ट&#2375;क&#2381;टर स&#2381;ल&#2367;प","<span class='notranslate'>(D) Steel sheet </span>| स&#2381;ट&#2368;ल श&#2368;ट"],
answer:2,
},
{
question:"<span class='notranslate'>Q. What is the act of joining the slip gauges together for building up sizes? </span>| आक&#2366;र क&#2375; न&#2367;र&#2381;म&#2366;ण क&#2375; ल&#2367;ए स&#2381;ल&#2367;प ग&#2375;ज&#2381;स क&#2379; एक स&#2366;थ ज&#2379;ड़न&#2375; क&#2368; क&#2381;र&#2367;य&#2366; क&#2379; क&#2381;य&#2366; कहत&#2375; ह&#2376;?",
options:["<span class='notranslate'>(A) Glazing </span>| ग&#2381;ल&#2375;ज&#2364;&#2367;&#2306;ग","<span class='notranslate'>(B) Pinning </span>| प&#2367;न&#2367;&#2306;ग","<span class='notranslate'>(C) Loading </span>| ल&#2379;ड&#2367;&#2306;ग","<span class='notranslate'>(D) Wringing </span>| व&#2381;र&#2367;न&#2381;ग&#2367;&#2306;ग"],
answer:3,
}]
},

{
 category:"<span class='notranslate'>Module 3 Metallurgy </span>| ध&#2366;त&#2369;कर&#2381;म",
quizWrap:[{
question:"<span class='notranslate'>Q. Which corrosion resistant metal is used in chemical plant and food processing? </span>| र&#2366;स&#2366;यन&#2367;क स&#2306;य&#2306;त&#2381;र और ख&#2366;द&#2381;य प&#2381;र&#2379;स&#2375;स&#2367;&#2306;ग म&#2375;&#2306; क&#2367;स स&#2306;क&#2381;ष&#2366;रण प&#2381;रत&#2367;र&#2379;ध&#2368; ध&#2366;त&#2369; क&#2366; उपय&#2379;ग क&#2367;य&#2366; ज&#2366;त&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Lead </span>| ल&#2375;ड","<span class='notranslate'>(B) Copper </span>| त&#2366;&#2306;ब&#2366;","<span class='notranslate'>(C) Aluminium </span>| एल&#2381;य&#2369;म&#2368;न&#2367;यमल&#2381;य&#2369;म&#2368;न&#2367;यम","<span class='notranslate'>(D) Stainless steel </span>| स&#2381;ट&#2375;नल&#2375;स स&#2381;ट&#2368;ल"],
answer:3,
},
{
question:"<span class='notranslate'>Q. What is the process to refine the structure of steel component? </span>| स&#2381;ट&#2368;ल घटक क&#2368; स&#2306;रचन&#2366; क&#2379; पर&#2367;ष&#2381;क&#2371;त करन&#2375; क&#2368; प&#2381;रक&#2381;र&#2367;य&#2366; क&#2381;य&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Tempering </span>| ट&#2375;म&#2381;पर&#2367;&#2306;ग","<span class='notranslate'>(B) Annealing </span>| एन&#2368;ल&#2367;&#2306;ग","<span class='notranslate'>(C) Hardening </span>| ह&#2366;र&#2381;डन&#2367;&#2306;ग","<span class='notranslate'>(D) Normalising </span>| न&#2377;र&#2381;मल&#2366;इज&#2367;&#2306;ग"],
answer:3,
},
{
question:"<span class='notranslate'>Q. Which metal protects corrosion resistant and does not crack or peel off due to temperature variation on coating? </span>| क&#2380;न स&#2368; ध&#2366;त&#2369; स&#2306;क&#2381;ष&#2366;रण प&#2381;रत&#2367;र&#2379;ध&#2368; क&#2368; रक&#2381;ष&#2366; करत&#2368; ह&#2376; और क&#2379;ट&#2367;&#2306;ग पर त&#2366;पम&#2366;न भ&#2367;न&#2381;नत&#2366; क&#2375; क&#2366;रण दर&#2366;र य&#2366; छ&#2368;लत&#2366; नह&#2368;&#2306; ह&#2376;?",
options:["<span class='notranslate'>(A) Zinc </span>| जस&#2381;त&#2366;","<span class='notranslate'>(B) Nickel </span>| न&#2367;कल","<span class='notranslate'>(C) Copper </span>| त&#2366;&#2306;ब&#2366;","<span class='notranslate'>(D) Chromium </span>| क&#2381;र&#2379;म&#2367;यम"],
answer:0,
},
{
question:"<span class='notranslate'>Q. Which structure of steel contain 0% carbon? </span>| स&#2381;ट&#2368;ल क&#2368; क&#2367;स स&#2306;रचन&#2366; म&#2375;&#2306; 0% क&#2366;र&#2381;बन ह&#2379;त&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Ferrite </span>| फ&#2375;र&#2366;इट","<span class='notranslate'>(B) Pearlite </span>| प&#2367;यरल&#2366;इट","<span class='notranslate'>(C) Austenite </span>| ऑस&#2381;ट&#2375;न&#2366;ईट","<span class='notranslate'>(D) Cementite </span>| स&#2368;म&#2375;&#2306;ट&#2366;इट"],
answer:0,
},
{
question:"<span class='notranslate'>Q. Which method of surface hardening is done in a heated salt bath? </span>| गर&#2381;म स&#2377;ल&#2381;ट ब&#2366;थ म&#2375; क&#2380;न स&#2366; सरफ&#2375;स ह&#2366;र&#2381;ड&#2375;न&#2367;&#2306;ग क&#2368; व&#2367;ध&#2367; क&#2368; ज&#2366;त&#2368; ह&#2376;?",
options:["<span class='notranslate'>(A) Flame hardening </span>| न&#2366;इट&#2381;र&#2366;इड&#2367;&#2306;ग","<span class='notranslate'>(B) Gas carburising </span>| ग&#2376;स क&#2366;र&#2381;ब&#2369;र&#2367;स&#2367;&#2306;ग","<span class='notranslate'>(C) Pack carburising </span>| प&#2376;क-क&#2366;र&#2381;ब&#2369;र&#2367;स&#2367;&#2306;ग","<span class='notranslate'>(D) Liquid carburising </span>| ल&#2367;क&#2381;व&#2367;ड-क&#2366;र&#2381;ब&#2369;र&#2367;स&#2367;&#2306;ग"],
answer:3,
},
{
question:"<span class='notranslate'>Q. What is the name of key? </span>| इस क&#2368; क&#2366; न&#2366;म क&#2381;य&#2366; ह&#2376;?<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEidHhXlLHf_QWFyrzZoZXRYIBFFIu8oKiHXO0ZqCln2A0ZFf1pOBTjTUyBcCTCD4-UTLXZkNuTokAp7ilC5kqe9Xx30553Ne4S5moAn9XWuo9fyFfhLzIagLIUAglToM60d6qfukjEsBTYfTdQ1cxGUsOIfc2ZMp6yPyaivhGaBRfxITXCjkk3Zx5ZBiiyA/s1600/FIT2-3-79.JPG'>",
options:["<span class='notranslate'>(A) Parallel sunk key </span>| प&#2376;र&#2375;लल स&#2306;क क&#2368;","<span class='notranslate'>(B) Gib head key </span>| ग&#2367;ब ह&#2375;ड क&#2368;","<span class='notranslate'>(C) Wood ruff key </span>| व&#2370;डरफ क&#2368;","<span class='notranslate'>(D) Tapper sunk key </span>| ट&#2375;पर स&#2306;क क&#2368;"],
answer:0,
},
{
question:"<span class='notranslate'>Q. What is the method of metal coating? </span>| इस ध&#2366;त&#2369; क&#2368; क&#2379;ट&#2367;&#2306;ग क&#2368; व&#2367;ध&#2367; क&#2381;य&#2366; ह&#2376;?<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiap9fCmbPLko0z-H38YgSeUwcsewD9w2gqcsT_-4T6RZrnPsgLjR_STGA04h3Mh2P0M8aOymdZwBkCF4lC0T5E4IVhPd6ufATixVNFnMTK2bHLWIXGp7XYlL7XF69LBEXemPUkCBARdjAMboHfkfNVajDkZVDxhjmRw83G5ODHhCePBbS7qG4P4bn5izcx/s1600/FIT2-3-88.JPG'>",
options:["<span class='notranslate'>(A) Cladding </span>| क&#2381;ल&#2376;ड&#2367;&#2306;ग","<span class='notranslate'>(B) Sherardising </span>| श&#2375;र&#2366;रड&#2367;ज&#2367;&#2306;ग","<span class='notranslate'>(C) Galvanizing </span>| ग&#2376;ल&#2381;वन&#2366;इज&#2364;","<span class='notranslate'>(D) Electroplating </span>| इल&#2375;क&#2381;ट&#2381;रप&#2381;ल&#2376;ट&#2367;&#2306;ग"],
answer:3,
},
{
question:"<span class='notranslate'>Q. What is marked as &#8216;X&#8217;? </span>| Xʹ क&#2375; र&#2370;प म&#2375;&#2306; क&#2381;य&#2366; च&#2367;ह&#2381;न&#2367;त ह&#2376;?<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhF1zOnLj_C4B-CollRkBPAmDAMFleSV09rqcw_YNEmUYXYpMORtpzOXOWQlxAGr6yDnrzrixiJHrpi9KP3XQEo5YLY_ubWkhGxocaXQe__VRZOc4vTxbDCgRIMPm_r8apaN-y1e4S77VNhFXsAE2qDdtuQL7xyOXSC7x2748S5wHf5sLODhGfHQ5xx7D1a/s320/FIT2-3-83.JPG'>",
options:["<span class='notranslate'>(A) Upper critical temperature </span>| अपर क&#2381;र&#2367;ट&#2367;कल त&#2366;पम&#2366;न","<span class='notranslate'>(B) Lower critical temperature </span>| ल&#2379;अर क&#2381;र&#2367;ट&#2367;कल त&#2366;पम&#2366;न","<span class='notranslate'>(C) Austenite </span>| ऑस&#2381;ट&#2375;न&#2366;ईट","<span class='notranslate'>(D) Ferrite </span>| फ&#2375;र&#2366;इट"],
answer:1,
},
{
question:"<span class='notranslate'>Q. What is the quenching media used in heat treatment to obtain faster rate of cooling? </span>| श&#2368;तलन दर क&#2379; त&#2375;ज&#2364;&#2368; स&#2375; प&#2381;र&#2366;प&#2381;त करन&#2375; क&#2375; ल&#2367;ए ऊष&#2381;म&#2366; उपच&#2366;र म&#2375;&#2306; प&#2381;रय&#2369;क&#2381;त क&#2381;व&#2375;न&#2381;च&#2367;&#2306;ग म&#2368;ड&#2367;य&#2366; क&#2381;य&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Brine solution </span>| ब&#2381;र&#2366;इन सल&#2370;शन","<span class='notranslate'>(B) Air </span>| व&#2366;य&#2369;","<span class='notranslate'>(C) Oil </span>| त&#2375;ल","<span class='notranslate'>(D) Water </span>| प&#2366;न&#2368;"],
answer:0,
},
{
question:"<span class='notranslate'>Q. How the mechanical properties of steel like strength, toughness, ductility are affected? </span>| स&#2381;ट&#2368;ल क&#2375; य&#2366;&#2306;त&#2381;र&#2367;क ग&#2369;ण&#2379;&#2306; ज&#2376;स&#2375; स&#2381;ट&#2381;र&#2375;&#2306;ग&#2381;थ, च&#2367;मड&#2366;पन,डक&#2381;ट&#2367;लट&#2368; क&#2376;स&#2375; प&#2381;रभ&#2366;व&#2367;त ह&#2379;त&#2375; ह&#2376;&#2306;?",
options:["<span class='notranslate'>(A) By tempering </span>| ट&#2375;&#2306;पर&#2367;&#2306;ग क&#2375; द&#2381;व&#2366;र&#2366;","<span class='notranslate'>(B) By hardening </span>| ह&#2366;र&#2381;डन&#2367;&#2306;ग क&#2375; द&#2381;व&#2366;र&#2366;","<span class='notranslate'>(C) By annealing </span>| एन&#2368;ल&#2367;&#2306;ग क&#2375; द&#2381;व&#2366;र&#2366;","<span class='notranslate'>(D) By normalising </span>| न&#2377;र&#2381;मल&#2366;इज&#2367;&#2306;ग क&#2375; द&#2381;व&#2366;र&#2366;"],
answer:1,
},
{
question:"<span class='notranslate'>Q. What is the purpose of annealing? </span>| एन&#2368;ल&#2367;&#2306;ग क&#2366; उद&#2381;द&#2375;श&#2381;य क&#2381;य&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) To soften the steel </span>| स&#2381;ट&#2368;ल क&#2379; नरम करन&#2375; क&#2375; ल&#2367;ए","<span class='notranslate'>(B) To add cutting ability </span>| क&#2366;टन&#2375; क&#2368; क&#2381;षमत&#2366; ज&#2379;ड&#2364;न&#2375; क&#2375; ल&#2367;ए","<span class='notranslate'>(C) To increase wear resistance </span>| घ&#2367;सन&#2375; क&#2375; प&#2381;रत&#2367;र&#2379;ध क&#2379; बढ&#2364;&#2366;न&#2375; क&#2375; ल&#2367;ए","<span class='notranslate'>(D) To refine the grain structure of the steel </span>| स&#2381;ट&#2368;ल क&#2368; ग&#2381;र&#2375;न स&#2306;रचन&#2366; क&#2379; र&#2367;फ&#2366;इन करन&#2375; क&#2375; ल&#2367;ए"],
answer:0,
},
{
question:"<span class='notranslate'>Q. Which type of key used if the hub of pulley has to axially slide on the shaft to some distance? </span>| यद&#2367; हब य&#2366; प&#2369;ल&#2381;ल&#2368; क&#2379; अक&#2381;ष&#2368;य र&#2370;प स&#2375; क&#2369;छ द&#2370;र&#2368; तक श&#2366;फ&#2381;ट पर स&#2381;ल&#2366;इड करन&#2366; ह&#2376;, त&#2379; क&#2367;स प&#2381;रक&#2366;र क&#2368; क&#2369;&#2306;ज&#2368; क&#2366; उपय&#2379;ग क&#2367;य&#2366; ज&#2366;त&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Feather key </span>| फ&#2375;दर क&#2368;","<span class='notranslate'>(B) Flat saddle key </span>| फ&#2381;ल&#2376;ट स&#2376;डल क&#2368;","<span class='notranslate'>(C) Circular taper key </span>| सर&#2381;क&#2369;लर ट&#2375;पर क&#2368;","<span class='notranslate'>(D) Hallow saddle key </span>| ह&#2379;ल&#2379; स&#2376;डल क&#2368;"],
answer:0,
},
{
question:"<span class='notranslate'>Q. What is the name of method in metallic coating done by rolling or drawing the layers of metal on the base metal? </span>| ब&#2375;स म&#2375;टल पर म&#2375;टल क&#2368; परत&#2379;&#2306; क&#2379; र&#2379;ल य&#2366; ल&#2375;यर&#2381;स ख&#2368;चन&#2375; क&#2375; द&#2381;व&#2366;र&#2366; क&#2367;ए गए ध&#2366;त&#2381;व&#2367;क क&#2379;ट&#2367;&#2306;ग करन&#2375; क&#2368; व&#2367;ध&#2367; क&#2366; न&#2366;म क&#2381;य&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Spraying </span>| स&#2381;प&#2381;र&#2376;इ&#2306;ग","<span class='notranslate'>(B) Cladding </span>| क&#2381;ल&#2376;ड&#2367;&#2306;ग","<span class='notranslate'>(C) Enamelling </span>| इन&#2375;म&#2375;ल&#2367;&#2306;ग","<span class='notranslate'>(D) Molten metal bath </span>| म&#2379;ल&#2381;टन म&#2375;टल ब&#2366;थ"],
answer:1,
},
{
question:"<span class='notranslate'>Q. What is the method of surface hardening? </span>| सरफ&#2375;स ह&#2366;र&#2381;डन&#2367;&#2306;ग करन&#2375; क&#2368; व&#2367;ध&#2367; क&#2381;य&#2366; ह&#2376;?<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh19fX9OGVtvdI68gVkbBKNV3QK4H5dq0P9wmxVn4DkoaGDuz8pHhJyzzCWTeBUlxbGw4oJwiO6Zj_cwQBXa6U_Z-fMukJkXkdxmu7-8b9m5_twHluRn-p2naYfZhETAjKMX4WflnbroIU5YeZPLkgISrlwDcITLWg5MCNp-ePnsV0ZA4sI0KrMVG62EUhA/s1600/FIT2-3-67.JPG'>",
options:["<span class='notranslate'>(A) Nitriding </span>| न&#2366;इट&#2381;र&#2366;इड&#2367;&#2306;ग","<span class='notranslate'>(B) Case hardening </span>| क&#2375;स ह&#2366;र&#2381;डन&#2367;&#2306;ग","<span class='notranslate'>(C) Flame hardening </span>| फ&#2381;ल&#2375;म ह&#2366;र&#2381;डन&#2367;&#2306;ग","<span class='notranslate'>(D) Induction hardening </span>| इ&#2306;डक&#2381;शन ह&#2366;र&#2381;डन&#2367;&#2306;ग"],
answer:2,
},
{
question:"<span class='notranslate'>Q. What is the name if hot steel cooled rapidly to form a new structure? </span>| एक नई स&#2306;रचन&#2366; बन&#2366;न&#2375; क&#2375; ल&#2367;ए त&#2375;ज&#2368; स&#2375; ठ&#2306;ड&#2366; ह&#2379;न&#2375; व&#2366;ल&#2375; गर&#2381;म स&#2381;ट&#2368;ल क&#2366; न&#2366;म क&#2381;य&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Ferrite </span>| फ&#2375;र&#2366;इट","<span class='notranslate'>(B) Austenite </span>| ऑस&#2381;ट&#2375;न&#2366;ईट","<span class='notranslate'>(C) Martensite </span>| म&#2366;र&#2381;ट&#2375;&#2306;स&#2366;ईट","<span class='notranslate'>(D) Pearlite </span>| प&#2367;यरल&#2366;इट"],
answer:2,
},
{
question:"<span class='notranslate'>Q. Which method of heat treatment to improve machinability and ductility in the job? </span>| ऊष&#2381;म&#2366; उपच&#2366;र क&#2368; क&#2380;न स&#2368; व&#2367;ध&#2367; द&#2381;व&#2366;र&#2366; क&#2367;स ज&#2377;ब म&#2375; मश&#2368;न&#2368;करण और डक&#2381;ट&#2367;ल&#2367;ट&#2368; क&#2366; स&#2369;ध&#2366;र ह&#2379;ग&#2366;?",
options:["<span class='notranslate'>(A) Annealing </span>| एन&#2368;ल&#2367;&#2306;ग","<span class='notranslate'>(B) Hardening </span>| ह&#2366;र&#2381;डन&#2367;&#2306;ग","<span class='notranslate'>(C) Tempering </span>| ट&#2375;म&#2381;पर&#2367;&#2306;ग","<span class='notranslate'>(D) Normalizing </span>| न&#2377;र&#2381;मल&#2366;इज&#2367;&#2306;ग"],
answer:0,
},
{
question:"<span class='notranslate'>Q. What is the disadvantage of flame hardening in the heat treatment process? </span>| ह&#2368;ट ट&#2381;र&#2368;टम&#2375;&#2306;ट प&#2381;रक&#2381;र&#2367;य&#2366; म&#2375;&#2306; फ&#2381;ल&#2375;म ह&#2366;र&#2381;ड&#2367;&#2306;ग क&#2366; न&#2369;कस&#2366;न क&#2381;य&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) More distortion </span>| अध&#2367;क व&#2367;क&#2371;त&#2367;","<span class='notranslate'>(B) Long hardening time </span>| ह&#2366;र&#2381;डन&#2367;&#2306;ग समय ज&#2381;य&#2366;द&#2366; ह&#2379;न&#2366;","<span class='notranslate'>(C) Small depth of hardening </span>| ह&#2366;र&#2381;डन&#2367;&#2306;ग क&#2368; कम गहर&#2366;ई","<span class='notranslate'>(D) Not suitable for small workpieces </span>| छ&#2379;ट&#2375; वर&#2381;कप&#2368;स क&#2375; ल&#2367;ए उपय&#2369;क&#2381;त नह&#2368;&#2306; ह&#2376;"],
answer:3,
},
{
question:"<span class='notranslate'>Q. Which type of cutting tool is tempered by heating upto 230&#176;C? </span>| 230&#176;C तक गर&#2381;म करक&#2375; क&#2367;स प&#2381;रक&#2366;र क&#2375; कट&#2367;&#2306;ग ट&#2370;ल क&#2379; ट&#2375;म&#2381;पर&#2381;ड क&#2367;य&#2366; ज&#2366;त&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Taps </span>| ट&#2375;पस","<span class='notranslate'>(B) Drills </span>| ड&#2381;र&#2367;ल&#2381;स","<span class='notranslate'>(C) Turning tool </span>| टर&#2381;न&#2367;&#2306;ग ट&#2370;ल","<span class='notranslate'>(D) Reamers </span>| र&#2368;मर"],
answer:2,
},
{
question:"<span class='notranslate'>Q. What is the name of part marked as &#8216;x&#8217;? </span>| Xʹ स&#2375; च&#2367;ह&#2381;न&#2367;त भ&#2366;ग क&#2366; न&#2366;म क&#2381;य&#2366; ह&#2376;?<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjzCJ9_1L8LOPa1SvBL3dFGnj9EzMEZ7SEQ9LbcwCfjh-O2yw2LFTK12A8-Ot3q_zfxgPwHlOXEfHOdNe7EjpCZI7X-2O5NkD4p9BTKv-5fBwL4pKwXZeGAwP5b2atbzHzSQWrX0qbgXsVZwFWwJFmMRa_2xt1uN_D403qG4cWCdfNM1uyuI7muliUPIKYC/s1600/FIT2-3-71.JPG'>",
options:["<span class='notranslate'>(A) Taper shaft </span>| ट&#2375;पर श&#2366;फ़&#2381;ट","<span class='notranslate'>(B) Splined shaft </span>| स&#2381;प&#2381;ल&#2366;इन श&#2366;फ़&#2381;ट","<span class='notranslate'>(C) Serrated shaft </span>| द&#2366;&#2305;त&#2375;द&#2366;र श&#2366;फ़&#2381;ट","<span class='notranslate'>(D) Screw pitch gauge </span>| स&#2381;क&#2381;र&#2370; प&#2367;च ग&#2375;ज"],
answer:2,
},
{
question:"<span class='notranslate'>Q. What is the process to add cutting ability and wear resistance on steel? </span>| क&#2366;टन&#2375; क&#2368; क&#2381;षमत&#2366; क&#2379; ज&#2379;ड&#2364;न&#2375; और स&#2381;ट&#2368;ल पर घ&#2367;सन&#2375; क&#2366; प&#2381;रत&#2367;र&#2379;ध उत&#2381;पन करन&#2375; क&#2368; प&#2381;रक&#2381;र&#2367;य&#2366; क&#2381;य&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Tempering </span>| ट&#2375;म&#2381;पर&#2367;&#2306;ग","<span class='notranslate'>(B) Annealing </span>| एन&#2368;ल&#2367;&#2306;ग","<span class='notranslate'>(C) Normalising </span>| न&#2377;र&#2381;मल&#2366;इज&#2367;&#2306;ग","<span class='notranslate'>(D) Hardening </span>| ह&#2366;र&#2381;डन&#2367;&#2306;ग"],
answer:3,
},
{
question:"<span class='notranslate'>Q. What is the advantage of using Gib headed key? </span>| ज&#2367;ब ह&#2375;ड&#2375;ड क&#2368; क&#2366; उपय&#2379;ग करन&#2375; क&#2366; क&#2381;य&#2366; फ&#2366;यद&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Used for tapered fittings </span>| ट&#2376;पर&#2381;ड फ&#2367;ट&#2367;&#2306;ग क&#2375; ल&#2367;ए इस&#2381;त&#2375;म&#2366;ल क&#2367;य&#2366; ज&#2366;त&#2366; ह&#2376;","<span class='notranslate'>(B) Can be withdrawn easily </span>| आस&#2366;न&#2368; स&#2375; न&#2367;क&#2366;ल&#2366; ज&#2366; सकत&#2366; ह&#2376;","<span class='notranslate'>(C) Provides unidirectional torque </span>| य&#2370;न&#2367;ड&#2366;यर&#2375;क&#2381;शनल ट&#2377;र&#2381;क प&#2381;रद&#2366;न करत&#2366; ह&#2376;","<span class='notranslate'>(D) Good in high speed application </span>| ह&#2366;ई स&#2381;प&#2368;ड एप&#2381;ल&#2368;क&#2375;शन म&#2375;&#2306; अच&#2381;छ&#2366; ह&#2376;"],
answer:1,
},
{
question:"<span class='notranslate'>Q. What is the method of surface hardening?&#8217; </span>| सरफ&#2375;स ह&#2366;र&#2381;डन&#2367;&#2306;ग करन&#2375; क&#2368; व&#2367;ध&#2367; क&#2381;य&#2366; ह&#2376;?<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiELGOzGSNjMEek9YYseIFcrJtL4gLpROY5AJTjR3vgz5d2JlkQGhPEecuQbED4zhbtQrMoOQc2K3fkV1pai7Qp-PX9WTllvEUGc6GJQbf4Yeu7VkG8X6Jx0Gq_33osOrTsTCjYGPkre-V-pyQHqWUGoxJdXCR4rN-8VGUis2oCidO5qXDJNr1o_l8U1DCN/s1600/FIT2-3-66.JPG'>",
options:["<span class='notranslate'>(A) Nitriding </span>| न&#2366;इट&#2381;र&#2366;इड&#2367;&#2306;ग","<span class='notranslate'>(B) Pack - carburising </span>| प&#2376;क - क&#2366;र&#2381;ब&#2369;र&#2367;स&#2367;&#2306;ग","<span class='notranslate'>(C) Flame hardening </span>| फ&#2381;ल&#2375;म ह&#2366;र&#2381;डन&#2367;&#2306;ग","<span class='notranslate'>(D) Induction hardening </span>| इ&#2306;डक&#2381;शन ह&#2366;र&#2381;डन&#2367;&#2306;ग"],
answer:1,
},
{
question:"<span class='notranslate'>Q. What is the operation of a metal coated with other metal to obtain protecting surface? </span>| रक&#2381;ष&#2366;त&#2381;मक सतह प&#2381;र&#2366;प&#2381;त करन&#2375; क&#2375; ल&#2367;ए अन&#2381;य ध&#2366;त&#2369; क&#2375; स&#2366;थ ल&#2375;प&#2367;त ध&#2366;त&#2369; क&#2375; स&#2306;च&#2366;लन क&#2381;य&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Cladding </span>| क&#2381;ल&#2376;ड&#2367;&#2306;ग","<span class='notranslate'>(B) Galvanizing </span>| ग&#2376;ल&#2381;वन&#2366;इज&#2364;&#2367;&#2306;ग","<span class='notranslate'>(C) Cementation </span>| स&#2368;मन&#2381;ट&#2375;शन","<span class='notranslate'>(D) Electroplating </span>| इल&#2375;क&#2381;ट&#2381;रप&#2381;ल&#2376;ट&#2367;&#2306;ग"],
answer:3,
},
{
question:"<span class='notranslate'>Q. What is the process of removing the internal defects of steel components? </span>| स&#2381;ट&#2368;ल घटक&#2379;&#2306; क&#2375; आ&#2306;तर&#2367;क द&#2379;ष&#2379;&#2306; क&#2379; द&#2370;र करन&#2375; क&#2368; प&#2381;रक&#2381;र&#2367;य&#2366; क&#2381;य&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Annealing </span>| स&#2381;ट&#2368;ल क&#2368; एन&#2368;ल&#2367;&#2306;ग","<span class='notranslate'>(B) Normalising </span>| स&#2381;ट&#2368;ल क&#2368; न&#2377;र&#2381;मल&#2366;इज&#2367;&#2306;ग","<span class='notranslate'>(C) Hardened </span>| कठ&#2379;र&#2368;कर&#2381;त इस&#2381;प&#2366;त","<span class='notranslate'>(D) Tempering </span>| ट&#2375;म&#2381;पर&#2367;&#2306;ग"],
answer:1,
},
{
question:"<span class='notranslate'>Q. What is the purpose of normalising? </span>| न&#2377;र&#2381;मल&#2366;इज&#2367;&#2306;ग करन&#2375; क&#2366; उद&#2381;द&#2375;श&#2381;य क&#2381;य&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Add cutting ability </span>| क&#2366;टन&#2375; क&#2368; क&#2381;षमत&#2366; ज&#2379;ड़न&#2366;","<span class='notranslate'>(B) Develop high hardness </span>| उच&#2381;च कठ&#2379;रत&#2366; क&#2366; व&#2367;क&#2366;स करन&#2366;","<span class='notranslate'>(C) Increase wear resistance </span>| घ&#2367;सन&#2375; क&#2375; प&#2381;रत&#2367;र&#2379;ध क&#2379; बढ&#2364;&#2366;ए&#2306;","<span class='notranslate'>(D) Remove stress and strain </span>| स&#2381;ट&#2381;र&#2375;स और स&#2381;ट&#2381;र&#2375;न क&#2379; द&#2370;र करन&#2366;"],
answer:3,
}]
},

{
 category:"<span class='notranslate'>Module 4 Gauge and Bearing </span>| ग&#2375;ज और ब&#2375;यर&#2367;&#2306;ग",
 quizWrap:[{
question:"<span class='notranslate'>Q. Why the Go end is made longer than No go end in Go and No-go gauge? </span>| ग&#2379; और न&#2379;-ग&#2379; ग&#2375;ज म&#2375;&#2306; ग&#2379; ए&#2306;ड क&#2379; न&#2379; ग&#2379; ए&#2306;ड स&#2375; अध&#2367;क ल&#2306;ब&#2366; क&#2381;य&#2379;&#2306; बन&#2366;य&#2366; ज&#2366;त&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Check the part for correct dimension </span>| सह&#2368; आय&#2366;म क&#2375; ल&#2367;ए भ&#2366;ग क&#2368; ज&#2366;&#2305;च कर&#2375;&#2306;","<span class='notranslate'>(B) Check the taper on the dimensions </span>| आय&#2366;म&#2379;&#2306; पर ट&#2375;पर क&#2368; ज&#2366;&#2305;च कर&#2375;&#2306;","<span class='notranslate'>(C) Check the part for longer length </span>| अध&#2367;क ल&#2306;ब&#2366;ई क&#2375; ल&#2367;ए भ&#2366;ग क&#2368; ज&#2366;&#2305;च कर&#2375;&#2306;","<span class='notranslate'>(D) For easy distinguish </span>| आस&#2366;न&#2368; स&#2375; भ&#2375;द करन&#2375; क&#2375; ल&#2367;ए"],
answer:3,
},
{
question:"<span class='notranslate'>Q. What is the name of bearing? </span>| इस ब&#2367;यर&#2367;&#2306;ग क&#2366; न&#2366;म क&#2381;य&#2366; ह&#2376;?<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgIHqdPzL6Bfhd7DowKGNu-QTF2M5bP81XVzt4gnaF3r8GY7cpi-a40dhNmXpepu0aT3xHNRzCzCyFJ1Zv7iKKgBNTgW5lQYv6NAEIKmdi3hyphenhyphenAd0nfe2lwqlc7jIVBO4UWRFloiTJhvNE1uGuR1PLOX6q6onHBl4RSTjtO0G464xaYuR6gr941fN8rqTjML/s1600/FIT2-4-102.JPG'>",
options:["<span class='notranslate'>(A) Needle bearing </span>| न&#2368;डल ब&#2367;यर&#2367;&#2306;ग","<span class='notranslate'>(B) Thrust ball bearing </span>| थ&#2381;रस&#2381;ट ब&#2377;ल ब&#2367;यर&#2367;&#2306;ग","<span class='notranslate'>(C) Taper roller bearing </span>| ट&#2375;पर र&#2379;लर ब&#2367;यर&#2367;&#2306;ग","<span class='notranslate'>(D) Angular contact ball bearing </span>| ए&#2306;ग&#2369;लर क&#2366;न&#2381;ट&#2376;क&#2381;ट ब&#2377;ल ब&#2367;यर&#2367;&#2306;ग"],
answer:0,
},
{
question:"<span class='notranslate'>Q. Why extra clearance is provided between bearing and journal in the aluminium alloy bearing? </span>| एल&#2381;य&#2370;म&#2368;न&#2367;यम म&#2367;श&#2381;र ध&#2366;त&#2369; ब&#2367;यर&#2367;&#2306;ग म&#2375;&#2306; ब&#2367;यर&#2367;&#2306;ग और जर&#2381;नल क&#2375; ब&#2368;च अत&#2367;र&#2367;क&#2381;त क&#2381;ल&#2375;रन&#2381;स क&#2381;य&#2379;&#2306; द&#2368; गई ह&#2376;?",
options:["<span class='notranslate'>(A) To allow lubricant to flow freely </span>| स&#2381;न&#2375;हक क&#2379; स&#2381;वत&#2306;त&#2381;र र&#2370;प स&#2375; बहन&#2375; क&#2375; ल&#2367;ए","<span class='notranslate'>(B) To overcome leaner expansion </span>| ल&#2368;न&#2367;यर व&#2367;स&#2381;त&#2366;र पर क&#2366;ब&#2370; प&#2366;न&#2375; क&#2375; ल&#2367;ए","<span class='notranslate'>(C) To over come co-efficient expansion </span>| ग&#2369;ण&#2366;&#2306;क व&#2367;स&#2381;त&#2366;र क&#2379; द&#2370;र करन&#2375; क&#2375; ल&#2367;ए","<span class='notranslate'>(D) To overcome high thermal expansion </span>| ह&#2366;ई थर&#2381;मल एक&#2381;सप&#2375;&#2306;शन पर क&#2366;ब&#2370; प&#2366;न&#2375; क&#2375; ल&#2367;ए"],
answer:3,
},
{
question:"<span class='notranslate'>Q. What is the name of gauge? </span>| इस ग&#2375;ज क&#2366; न&#2366;म क&#2381;य&#2366; ह&#2376;?<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgois_aufE8WoF9z1Uxr5-FM_OxhyT_IsYNRxOO1MBK5QI6s4l3N1YchfqNNKXVg2pm9YtCRSxPGOhtRBXpsrsg5tS0xXAgbrnwauakhPH70RTh0KmZYJqC4dZ_et1vPuDA7Zi34IiYYi8UMcc3329KzazWojLTneus2E5vhqJqURGhm1Xi8EFoFhlhYcRK/s1600/FIT2-4-98.JPG'>",
options:["<span class='notranslate'>(A) Screw pitch gauge </span>| स&#2381;क&#2381;र&#2370; प&#2367;च ग&#2375;ज","<span class='notranslate'>(B) Angle gauge </span>| ए&#2306;गल ग&#2375;ज","<span class='notranslate'>(C) Slip gauge </span>| स&#2381;ल&#2367;प ग&#2375;ज","<span class='notranslate'>(D) Centre gauge </span>| स&#2375;ण&#2381;टर ग&#2375;ज"],
answer:3,
},
{
question:"<span class='notranslate'>Q. What is the part marked as &#8216;x&#8217; in the bearing? </span>| ब&#2367;यर&#2367;&#2306;ग म&#2375;&#2306; ʹxʹ द&#2381;व&#2366;र&#2366; च&#2367;ह&#2381;न&#2367;त भ&#2366;ग क&#2366; न&#2366;म क&#2381;य&#2366; ह&#2376;?<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjH-8GOcc6vJzEEFk3Xywvcf635OTvwDsjolYox0NzSlg6sA7HWc7f5IBJ5TNra8VP1YHl2mkxqLHPLx2x14fTbohEFdQvD8FSj5Jttu4BmAggyWHy-dvqA_3Pb5ew7kKH8nkFAvpRz7a2qb19n8G4bNP65iCljhAYWz2-chPmcIlw0E9ltZ4Jl5hsnq2_N/s1600/FIT2-4-110.JPG'>",
options:["<span class='notranslate'>(A) Outer race </span>| आउटर र&#2375;स","<span class='notranslate'>(B) Ball cage </span>| ब&#2377;ल क&#2375;ज","<span class='notranslate'>(C) Inner race </span>| इनर र&#2375;स","<span class='notranslate'>(D) Rolling elements </span>| र&#2379;ल&#2367;&#2306;ग तत&#2381;व&#2379;&#2306;"],
answer:1,
},
{
question:"<span class='notranslate'>Q. What is the use of ring gauge? </span>| र&#2367;&#2306;ग ग&#2375;ज क&#2366; उपय&#2379;ग क&#2381;य&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Check hole diameter </span>| छ&#2375;द व&#2381;य&#2366;स क&#2368; ज&#2366;&#2305;च करन&#2366;","<span class='notranslate'>(B) Check shaft diameter </span>| ब&#2366;हर&#2368; व&#2381;य&#2366;स क&#2368; ज&#2366;&#2305;च करन&#2366;","<span class='notranslate'>(C) Check tapered shaft diameter </span>| ट&#2375;पर श&#2366;फ&#2381;ट व&#2381;य&#2366;स क&#2368; ज&#2366;&#2305;च करन&#2366;","<span class='notranslate'>(D) Check internal thread diameter </span>| आ&#2306;तर&#2367;क थ&#2381;र&#2375;ड व&#2381;य&#2366;स क&#2368; ज&#2366;&#2305;च करन&#2366;"],
answer:1,
},
{
question:"<span class='notranslate'>Q. What is the name of bearing shown in figure? </span>| च&#2367;त&#2381;र म&#2375;&#2306; द&#2367;ख&#2366;ए गए ब&#2375;यर&#2367;&#2306;ग क&#2366; न&#2366;म क&#2381;य&#2366; ह&#2376;?<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhHKJl6l4UyU4AHcrwcijCBY6OTKezgvq1ps3439mmy6PTj9m5rB4diBeypTd5bmXvR4m0-pqCYx1anjFOUllhRq5yxo09aYZ0s97hZ_kCkadOA-tCuZ0k_55TBsyDAa8SkKqMJ43deNzFoszAhoD6p63ScDAxdHgNG8dw7SL2VBNEeXAZg-y_RPfgvTsc4/s320/FIT2-4-351.jpg'>",
options:["<span class='notranslate'>(A) Plain bearing </span>| स&#2366;द&#2375; ब&#2375;यर&#2367;&#2306;ग","<span class='notranslate'>(B) Bush bearing </span>| ब&#2369;श ब&#2375;यर&#2367;&#2306;ग","<span class='notranslate'>(C) Solid bearing </span>| ठ&#2379;स असर","<span class='notranslate'>(D) Self aligning bush bearing </span>| स&#2381;व-स&#2306;र&#2375;ख&#2367;त ब&#2369;श ब&#2375;यर&#2367;&#2306;ग"],
answer:3,
},
{
question:"<span class='notranslate'>Q. What will be result in rolling contract bearing, It should have proper recommended fit .If the bearing is fitted too tight? </span>| र&#2379;ल&#2367;&#2306;ग क&#2377;न&#2381;ट&#2381;र&#2376;क&#2381;ट ब&#2375;यर&#2367;&#2306;ग क&#2366; पर&#2367;ण&#2366;म क&#2381;य&#2366; ह&#2379;ग&#2366;, इसम&#2375;&#2306; उच&#2367;त अन&#2369;श&#2306;स&#2367;त फ&#2367;ट ह&#2379;न&#2366; च&#2366;ह&#2367;ए&#2404; यद&#2367; ब&#2375;यर&#2367;&#2306;ग बह&#2369;त कसकर फ&#2367;ट क&#2368; गई ह&#2376;?",
options:["<span class='notranslate'>(A) Power will not be transmit </span>| ब&#2367;जल&#2368; क&#2366; स&#2306;च&#2366;र नह&#2368;&#2306; ह&#2379;ग&#2366;","<span class='notranslate'>(B) Rollers will get jammed </span>| र&#2379;लर ज&#2366;म ह&#2379; ज&#2366;य&#2375;&#2306;ग&#2375;","<span class='notranslate'>(C) Rollers will not have contact with outer race </span>| र&#2379;लर&#2381;स क&#2366; ब&#2366;हर&#2368; र&#2375;स स&#2375; स&#2306;पर&#2381;क नह&#2368;&#2306; ह&#2379;ग&#2366;","<span class='notranslate'>(D) More power will be transmitted </span>| अध&#2367;क शक&#2381;त&#2367; क&#2366; स&#2306;च&#2366;र ह&#2379;ग&#2366;"],
answer:1,
},
{
question:"<span class='notranslate'>Q. What is the purpose of thrust ball bearing? </span>| थ&#2381;रस&#2381;ट ब&#2377;ल ब&#2367;यर&#2367;&#2306;ग क&#2366; उद&#2381;द&#2375;श&#2381;य क&#2381;य&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Axial load </span>| अक&#2381;ष&#2368;य ल&#2379;ड","<span class='notranslate'>(B) Radial load </span>| र&#2375;ड&#2367;यल ल&#2379;ड","<span class='notranslate'>(C) Axial thrust load </span>| अक&#2381;ष&#2368;य थ&#2381;रस&#2381;ट ल&#2379;ड","<span class='notranslate'>(D) Vertical thrust load </span>| वर&#2381;ट&#2368;कल थ&#2381;रस&#2381;ट ल&#2379;ड"],
answer:3,
},
{
question:"<span class='notranslate'>Q. Which bearing material is best suited for hard journals? </span>| ह&#2366;र&#2381;ड जर&#2381;नल क&#2375; ल&#2367;ए क&#2380;न स&#2368; ब&#2367;यर&#2367;&#2306;ग मट&#2375;र&#2367;यल सबस&#2375; उपय&#2369;क&#2381;त ह&#2376;?",
options:["<span class='notranslate'>(A) Sintered alloy </span>| स&#2367;न&#2381;टर म&#2367;श&#2381;र ध&#2366;त&#2369;","<span class='notranslate'>(B) Aluminium alloy </span>| एल&#2381;य&#2370;म&#2367;न&#2367;यम म&#2367;श&#2381;र ध&#2366;त&#2369;","<span class='notranslate'>(C) Copper lead alloy </span>| त&#2366;&#2306;ब&#2366; स&#2368;स&#2366; म&#2367;श&#2381;र ध&#2366;त&#2369;","<span class='notranslate'>(D) Cadmium based alloy </span>| क&#2376;डम&#2367;यम आध&#2366;र&#2367;त म&#2367;श&#2381;र ध&#2366;त&#2369;"],
answer:1,
},
{
question:"<span class='notranslate'>Q. How the wear in adjustable bearing is rectified? </span>| एडजस&#2381;ट&#2375;बल ब&#2375;यर&#2367;&#2306;ग म&#2375;&#2306; घ&#2367;स&#2366;व क&#2379; क&#2376;स&#2375; ठ&#2368;क क&#2367;य&#2366; ज&#2366;त&#2366; ह&#2376;?<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEheaiNQSBBPto2eo1hzBNStCo3SeSYFFxHyMlTYAJqXcBJJPT4x2zwBBc48HF_e_x3kHHV_Az5fsJKjpm_mEWYfTjm8-quclLvcKXrVK8rE8t8DYyDON00Sp9xwlYJQ4F_FdJLFoSHpcb5dvoZW6TApY9qTp3MzjI49wo6Nfh8U8NHUpULSHV6WMJwjQuwJ/s320/FIT2-4-357.jpg'>",
options:["<span class='notranslate'>(A) By placing the shim at equal intervals </span>| श&#2367;म क&#2379; सम&#2366;न अ&#2306;तर&#2366;ल पर रखकर","<span class='notranslate'>(B) Coating hard material on the housing </span>| आव&#2366;स पर कठ&#2379;र स&#2366;मग&#2381;र&#2368; क&#2366; ल&#2375;प करन&#2366;","<span class='notranslate'>(C) Punching the housing at equal intervals </span>| सम&#2366;न अ&#2306;तर&#2366;ल पर आव&#2366;स क&#2379; छ&#2367;द&#2381;र&#2367;त करन&#2366;","<span class='notranslate'>(D) Adjusting the slotted nut? </span>| स&#2381;ल&#2377;ट&#2375;ड नट क&#2379; सम&#2366;य&#2379;ज&#2367;त कर रह&#2375; ह&#2376;&#2306;"],
answer:3,
},
{
question:"<span class='notranslate'>Q. What is the name of part marked ʹXʹ in figure? </span>| आक&#2371;त&#2367; म&#2375;&#2306; ʹXʹ अ&#2306;क&#2367;त भ&#2366;ग क&#2366; न&#2366;म क&#2381;य&#2366; ह&#2376;?<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgcsRJszd8I0-x8rIW9ZqLUfiT3MUMVUWiMIvdcXbLCOG_UnWHXddj4IRbX7_au-LaOLmWRRJ2Juz7G119Jjj-jhXMQyw2a1cCAZqWY2X-sW8QeM7WA1WFBvOnXXlhMI9lSY6Jhgg7jVpe5EHfbp3J68Pm_eop9rhCrmGSrqi-X5lV8eqRRvRGbWhzAkOFe/s320/FIT2-4-346.jpg'>",
options:["<span class='notranslate'>(A) Ring gauge </span>| र&#2367;&#2306;ग ग&#2375;ज","<span class='notranslate'>(B) Plug gauge </span>| प&#2381;लग ग&#2375;ज","<span class='notranslate'>(C) Thread gauge </span>| थ&#2381;र&#2375;ड ग&#2375;ज","<span class='notranslate'>(D) Component </span>| अवयव"],
answer:3,
},
{
question:"<span class='notranslate'>Q. Which bearing is used in the limited space? </span>| स&#2368;म&#2367;त जगह&#2379;&#2306; म&#2375;&#2306; क&#2367;स ब&#2367;यर&#2367;&#2306;ग क&#2366; उपय&#2379;ग क&#2367;य&#2366; ज&#2366;त&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Needle bearing </span>| न&#2368;डल ब&#2367;यर&#2367;&#2306;ग","<span class='notranslate'>(B) Thrust ball bearing </span>| थ&#2381;रस&#2381;ट ब&#2377;ल ब&#2367;यर&#2367;&#2306;ग","<span class='notranslate'>(C) Taper roller bearing </span>| ट&#2375;पर र&#2379;लर ब&#2367;यर&#2367;&#2306;ग","<span class='notranslate'>(D) Angular contact ball bearing </span>| ए&#2306;ग&#2369;लर क&#2366;न&#2381;ट&#2376;क&#2381;ट ब&#2377;ल ब&#2367;यर&#2367;&#2306;ग"],
answer:0,
},
{
question:"<span class='notranslate'>Q. What will be the result in rolling contact bearing, It should have proper recommended fit If the bearing fitted with too loose fit? </span>| र&#2379;ल&#2367;&#2306;ग क&#2377;न&#2381;ट&#2376;क&#2381;ट ब&#2375;यर&#2367;&#2306;ग क&#2366; पर&#2367;ण&#2366;म क&#2381;य&#2366; ह&#2379;ग&#2366;, इसम&#2375;&#2306; उच&#2367;त अन&#2369;श&#2306;स&#2367;त फ&#2367;ट ह&#2379;न&#2366; च&#2366;ह&#2367;ए&#2404; यद&#2367; ब&#2375;यर&#2367;&#2306;ग बह&#2369;त ढ&#2368;ल&#2368; फ&#2367;ट ह&#2376;?",
options:["<span class='notranslate'>(A) It will not take the load </span>| इसस&#2375; ल&#2379;ड नह&#2368;&#2306; लग&#2375;ग&#2366;","<span class='notranslate'>(B) Heat will be generated </span>| गर&#2381;म&#2368; प&#2376;द&#2366; ह&#2379;ग&#2368;","<span class='notranslate'>(C) Roller will not have contact with inner race </span>| र&#2379;लर क&#2366; अ&#2306;दर&#2370;न&#2368; र&#2375;स स&#2375; स&#2306;पर&#2381;क नह&#2368;&#2306; ह&#2379;ग&#2366;","<span class='notranslate'>(D) Roller will get jammed with outer race </span>| आउटर र&#2375;स स&#2375; र&#2379;लर ज&#2366;म ह&#2379; ज&#2366;एग&#2366;"],
answer:0,
},
{
question:"<span class='notranslate'>Q. What is the name of the gauge? </span>| ग&#2375;ज क&#2366; न&#2366;म क&#2381;य&#2366; ह&#2376;?<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEirtVKKo7laVGdPzBsa3BD9ML49ByFUK7a_ubYhx59obCNWV7iw5DbeSFLjUG1ped7SGr7b4IkInLXBglnTB26uhPG9TSFOlWF4rAvfKMtB6-np2pnRsQjRpNJBYOLwAfE2vjHw37Noq7lF2BoHV6PYxLt4iJ6wJpwLglF0RzRI79Aud7XdsR_TPL4n9iH_/s1600/FIT2-4-97.JPG'>",
options:["<span class='notranslate'>(A) Ring gauge </span>| र&#2367;&#2306;ग ग&#2375;ज","<span class='notranslate'>(B) Snap gauge </span>| स&#2381;न&#2376;प ग&#2375;ज","<span class='notranslate'>(C) Taper ring gauge </span>| ट&#2375;पर र&#2367;&#2306;ग ग&#2375;ज","<span class='notranslate'>(D) Internal thread gauge </span>| इ&#2306;टरनल थ&#2381;र&#2375;ड ग&#2375;ज"],
answer:2,
},
{
question:"<span class='notranslate'>Q. What is the name of gauge? </span>| इस ग&#2375;ज क&#2366; न&#2366;म क&#2381;य&#2366; ह&#2376;?<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh0cCmQVk9ymABTpH1wPmHLTOvm2dGBo2RuBq2P4AHft5IcJNcp3D3tL7BlCkgNT4H8KuYfRpINdEqqKTpVc9eGeZIzkL7AsMZU6v7Xtj7nvn9CHh7Odb0CggIZDr_7ON88-CwHDOP3Ah_srPnICQuBOjA-rsQvHs9KOj2JtHKSYb7_ZQJWIB_v9SOxlbll/s1600/FIT2-4-94.JPG'>",
options:["<span class='notranslate'>(A) Pitch gauge </span>| प&#2367;च ग&#2375;ज","<span class='notranslate'>(B) Angle gauge </span>| ए&#2306;गल ग&#2375;ज","<span class='notranslate'>(C) Feeler gauge </span>| फ&#2368;लर ग&#2375;ज","<span class='notranslate'>(D) Radius gauge </span>| त&#2381;र&#2367;ज&#2381;य&#2366; ग&#2375;ज"],
answer:3,
},
{
question:"<span class='notranslate'>Q. Why the double row roller bearing is used? </span>| डबल र&#2379; र&#2379;लर ब&#2367;यर&#2367;&#2306;ग क&#2366; उपय&#2379;ग क&#2381;य&#2379;&#2306; क&#2367;य&#2366; ज&#2366;त&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) To take axial load </span>| अक&#2381;ष&#2368;य भ&#2366;र ल&#2375;न&#2375; क&#2375; ल&#2367;ए","<span class='notranslate'>(B) To take radial load </span>| र&#2375;ड&#2367;यल ल&#2379;ड ल&#2375;न&#2375; क&#2375; ल&#2367;ए","<span class='notranslate'>(C) To take heavy axial load </span>| भ&#2366;र&#2368; अक&#2381;ष&#2368;य भ&#2366;र ल&#2375;न&#2375; क&#2375; ल&#2367;ए","<span class='notranslate'>(D) To take heavy radial load </span>| भ&#2366;र&#2368; र&#2375;ड&#2367;यल भ&#2366;र ल&#2375;न&#2375; क&#2375; ल&#2367;ए"],
answer:3,
},
{
question:"<span class='notranslate'>Q. Which bearing material is used for light loading and low speed application? </span>| ल&#2366;इट ल&#2379;ड&#2367;&#2306;ग और कम गत&#2367; क&#2375; एप&#2381;ल&#2368;क&#2375;शन क&#2375; ल&#2367;ए क&#2380;न स&#2368; ब&#2367;यर&#2367;&#2306;ग स&#2366;मग&#2381;र&#2368; क&#2366; उपय&#2379;ग क&#2367;य&#2366; ज&#2366;त&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Cast iron </span>| क&#2366;स&#2381;ट आयरन","<span class='notranslate'>(B) Tin bronze </span>| ट&#2367;न क&#2366;&#2306;स&#2381;य","<span class='notranslate'>(C) Cadmium based alloy </span>| क&#2376;डम&#2367;यम आध&#2366;र&#2367;त म&#2367;श&#2381;र ध&#2366;त&#2369;","<span class='notranslate'>(D) Copper and lead alloys </span>| क&#2377;पर और ल&#2368;ड म&#2367;श&#2381;र ध&#2366;त&#2369;"],
answer:0,
},
{
question:"<span class='notranslate'>Q. Which bearing carry the load parallel to its bearing axis? </span>| क&#2367;स ब&#2367;यर&#2367;&#2306;ग म&#2375; ल&#2379;ड&#2367;&#2306;ग ब&#2367;यर&#2367;&#2306;ग अक&#2381;ष क&#2375; प&#2376;र&#2375;लल(सम&#2366;न&#2366;&#2306;तर) ह&#2379;त&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Split bearing </span>| स&#2381;प&#2367;ल&#2381;ट ब&#2367;यर&#2367;&#2306;ग","<span class='notranslate'>(B) Plain bearing </span>| प&#2381;ल&#2375;न ब&#2367;यर&#2367;&#2306;ग","<span class='notranslate'>(C) Thrust bearing </span>| थ&#2381;रस&#2381;ट ब&#2367;यर&#2367;&#2306;ग","<span class='notranslate'>(D) Radial bearing </span>| र&#2375;ड&#2367;यल ब&#2367;यर&#2367;&#2306;ग"],
answer:2,
},
{
question:"<span class='notranslate'>Q. What is the name of part marked &#8216;X&#8217;? </span>| &#8217;X&#8217; क&#2375; र&#2370;प म&#2375; च&#2367;न&#2381;ह&#2367;त भ&#2366;ग क&#2366; न&#2366;म क&#2381;य&#2366; ह&#2376;?<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj_dTR992oK02n5Ek1rsY4X_4Z9u70AfZUS_hk5RvfVU_D1bQ51Er2c9F29-Pzhc33eL7u9rLKvdR2ZMVS_LiZF1svPgxS0nnvin-xB_og9kVAW741Ys84_UFYm5WJesRvx8w7b7vd20rcuK6exFZgv8VZ30OI58CXTl5b7r4IAStFTHoFa6ai7KMQaegK1/s1600/FIT2-4-103.JPG'>",
options:["<span class='notranslate'>(A) Ball case </span>| ब&#2377;ल क&#2375;स","<span class='notranslate'>(B) Inner race </span>| इनर र&#2375;स","<span class='notranslate'>(C) Outer race </span>| आउटर र&#2375;स","<span class='notranslate'>(D) Ball separating gauge </span>| ब&#2377;ल स&#2375;पर&#2376;ट&#2367;&#2306;ग ग&#2375;ज"],
answer:3,
},
{
question:"<span class='notranslate'>Q. What is the gauge used? </span>| इस ग&#2375;ज क&#2366; उपय&#2379;ग क&#2381;य&#2366; ह&#2376;?<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiBotXB3y_adVewwXLoFP7ozZbH0wAHcLbgWclzFtKaGihcM1oQ6tPAt2z_dds5If1sHnmjeoQOK78RnsjLLsLYiZLf9Jx1sqLBRRgFRZaLHDk-jaiZX-9OzxlFaEiAYNnIIgpaqWh0DBe6__LCEmFdQFSJWIZBgLL4WvDyGbUsns_089fybSd5UJJGBli6/s320/FIT2-4-99.JPG'>",
options:["<span class='notranslate'>(A) Thread ring gauge </span>| थ&#2381;र&#2375;ड र&#2367;&#2306;ग ग&#2375;ज","<span class='notranslate'>(B) Thread plug gauge </span>| स&#2381;क&#2381;र&#2370; थ&#2381;र&#2375;ड प&#2381;लग ग&#2375;ज","<span class='notranslate'>(C) Screw pitch gauge </span>| स&#2381;क&#2381;र&#2370; प&#2367;च ग&#2375;ज","<span class='notranslate'>(D) Thread caliper gauge </span>| थ&#2381;र&#2375;ड क&#2376;ल&#2367;पर ग&#2375;ज"],
answer:1,
},
{
question:"<span class='notranslate'>Q. Which part of ball bearing do not rotate along the bearing assembly? </span>| ब&#2377;ल ब&#2367;यर&#2367;&#2306;ग क&#2366; क&#2380;न स&#2366; ह&#2367;स&#2381;स&#2366; ब&#2367;यर&#2367;&#2306;ग अस&#2375;&#2306;बल&#2368; क&#2375; स&#2366;थ घ&#2370;मत&#2366; नह&#2368;&#2306; ह&#2376;?",
options:["<span class='notranslate'>(A) Ball cage </span>| ब&#2377;ल क&#2375;ज","<span class='notranslate'>(B) Inner race </span>| इनर र&#2375;स","<span class='notranslate'>(C) Outer race </span>| आउटर र&#2375;स","<span class='notranslate'>(D) Rolling elements </span>| र&#2379;ल&#2367;&#2306;ग तत&#2381;व&#2379;&#2306;"],
answer:2,
},
{
question:"<span class='notranslate'>Q. What is the name of gauge shown in figure? </span>| च&#2367;त&#2381;र म&#2375;&#2306; द&#2367;ख&#2366;ए गए ग&#2375;ज क&#2366; न&#2366;म क&#2381;य&#2366; ह&#2376;?<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjkWyEvKvBpLm7vA8uvoJGpv9UEaTfkXvJV8ChgprlJsCHObgW6sg4Lz0fYRUUroaf985_M1nRy6OuWUkAwWLOTgNJLN0irdVcXzrvf3OHAwTWHjyHc1-UpfNs275TE2wpUdCicidLgKU7fnxeN9njF7t7uFlXBrmiw_o3yoTaurU14DAbFi_ygyxtsX2GZ/s1600/FIT2-4-344.jpg'>",
options:["<span class='notranslate'>(A) Plain snap gauge </span>| स&#2366;द&#2366; स&#2381;न&#2376;प ग&#2375;ज","<span class='notranslate'>(B) Adjustable snap gauge </span>| एडजस&#2381;ट&#2375;बल स&#2381;न&#2376;प ग&#2375;ज","<span class='notranslate'>(C) Threaded snap gauge </span>| थ&#2381;र&#2375;ड&#2375;ड स&#2381;न&#2376;प ग&#2375;ज","<span class='notranslate'>(D) Go and no-go snap gauge </span>| ग&#2379; और न&#2379;-ग&#2379; स&#2381;न&#2376;प ग&#2375;ज"],
answer:1,
},
{
question:"<span class='notranslate'>Q. Which gauge is used to check the gap between the mating parts? </span>| म&#2367;लन&#2375; व&#2366;ल&#2375; भ&#2366;ग&#2379; क&#2375; ब&#2368;च ग&#2376;प क&#2368; ज&#2366;&#2306;च करन&#2375; क&#2375; ल&#2367;ए क&#2367;स ग&#2375;ज क&#2366; उपय&#2379;ग क&#2367;य&#2366; ज&#2366;त&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Slip gauge </span>| स&#2381;ल&#2367;प ग&#2375;ज","<span class='notranslate'>(B) Plug gauge </span>| प&#2381;लग ग&#2375;ज","<span class='notranslate'>(C) Feeler gauge </span>| फ&#2368;लर ग&#2375;ज","<span class='notranslate'>(D) Radius gauge </span>| त&#2381;र&#2367;ज&#2381;य&#2366; ग&#2375;ज"],
answer:2,
},
{
question:"<span class='notranslate'>Q. How to find incorrect taper component, Checking by taper ring gauge? </span>| ट&#2375;&#2306;पर र&#2367;&#2306;ग ग&#2375;ज द&#2381;व&#2366;र&#2366; ज&#2366;&#2306;च करक&#2375; गलत ट&#2375;&#2306;पर घटक क&#2366; पत&#2366; क&#2376;स&#2375; लग&#2366;ए&#2306;?",
options:["<span class='notranslate'>(A) Not entering </span>| प&#2381;रव&#2375;श नह&#2368;&#2306; कर रह&#2366;","<span class='notranslate'>(B) Fully passing through </span>| प&#2370;र&#2368; तरह स&#2375; ग&#2369;जर रह&#2366; ह&#2376;","<span class='notranslate'>(C) Half passing through </span>| आध&#2366; ग&#2369;जर रह&#2366; ह&#2376;","<span class='notranslate'>(D) Wobbling gauge and work piece </span>| डगमग&#2366;त&#2366; ह&#2369;आ ग&#2375;ज और क&#2366;र&#2381;यवस&#2381;त&#2369;"],
answer:3,
}]
},

{
 category:"<span class='notranslate'>Module 5 Bearing metals </span>| ब&#2375;यर&#2367;&#2306;ग म&#2375;टल&#2381;स",
 quizWrap:[{
question:"<span class='notranslate'>Q. Which type of bearing metal is self lubricated? </span>| क&#2367;स प&#2381;रक&#2366;र क&#2375; ब&#2367;यर&#2367;&#2306;ग ध&#2366;त&#2369; म&#2375;&#2306; स&#2381;वय&#2306; स&#2375; स&#2381;न&#2375;हक ह&#2379;त&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) White metal </span>| व&#2366;इट म&#2375;टल","<span class='notranslate'>(B) Sintered alloy","<span class='notranslate'>(C) Aluminium alloy </span>| एल&#2381;य&#2370;म&#2367;न&#2367;यम म&#2367;श&#2381;र ध&#2366;त&#2369;","<span class='notranslate'>(D) Cadmium based alloy </span>| क&#2376;डम&#2367;यम ब&#2375;स&#2381;ड म&#2367;श&#2381;र ध&#2366;त&#2369;"],
answer:1,
},
{
question:"<span class='notranslate'>Q. What is the purpose of deep groove type of ball races provided in the ball bearing? </span>| ब&#2377;ल ब&#2367;यर&#2367;&#2306;ग म&#2375; प&#2381;रद&#2366;न क&#2367;य&#2375; गए गहर&#2375; ग&#2381;र&#2370;व&#2375;स व&#2366;ल&#2375; ब&#2377;ल र&#2375;स&#2375;स क&#2366; उद&#2381;द&#2375;श&#2381;य क&#2381;य&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) To withstand shock </span>| झटक&#2375; झ&#2375;लन&#2375; क&#2375; ल&#2367;ए","<span class='notranslate'>(B) To carry journal loads </span>| जर&#2381;नल ल&#2379;ड ल&#2375; ज&#2366;न&#2375; क&#2375; ल&#2367;ए","<span class='notranslate'>(C) To withstand axial thrust </span>| अक&#2381;ष&#2368;य थ&#2381;रस&#2381;ट क&#2366; स&#2366;मन&#2366; करन&#2375; क&#2375; ल&#2367;ए","<span class='notranslate'>(D) To withstand radial load </span>| र&#2375;ड&#2367;यल ल&#2379;ड क&#2366; स&#2366;मन&#2366; करन&#2375; क&#2375; ल&#2367;ए"],
answer:2,
},
{
question:"<span class='notranslate'>Q. How to overcomes this defects of thermal conductive of laminated phenolics bearing material is low? </span>| ल&#2376;म&#2367;न&#2375;ट&#2375;ड फ&#2367;न&#2379;ल&#2367;क&#2381;स ब&#2375;यर&#2367;&#2306;ग स&#2366;मग&#2381;र&#2368; क&#2375; त&#2366;प&#2368;य च&#2366;लकत&#2366; क&#2375; कम ह&#2379;न&#2375; क&#2375; इस द&#2379;ष क&#2379; क&#2376;स&#2375; द&#2370;र क&#2367;य&#2366; ज&#2366;ए?",
options:["<span class='notranslate'>(A) Replace bearing with good thermal conductivity </span>| ब&#2375;यर&#2367;&#2306;ग क&#2379; अच&#2381;छ&#2368; त&#2366;प&#2368;य च&#2366;लकत&#2366; स&#2375; बदल&#2375;&#2306;","<span class='notranslate'>(B) Do not run the system for more time </span>| स&#2367;स&#2381;टम क&#2379; अध&#2367;क समय तक न चल&#2366;य&#2375;&#2306;","<span class='notranslate'>(C) Have adequate cooling facilities </span>| पर&#2381;य&#2366;प&#2381;त श&#2368;तलन स&#2369;व&#2367;ध&#2366;ए&#2306; ह&#2379;&#2306;","<span class='notranslate'>(D) Arrange for air cooling the equipments </span>| उपकरण&#2379;&#2306; क&#2379; हव&#2366; स&#2375; ठ&#2306;ड&#2366; करन&#2375; क&#2368; व&#2381;यवस&#2381;थ&#2366; कर&#2375;&#2306;"],
answer:2,
},
{
question:"<span class='notranslate'>Q. Which metal powder is used in calorizing process to prevent corrosion? </span>| ज&#2306;ग क&#2379; र&#2379;कन&#2375; क&#2375; ल&#2367;ए क&#2376;ल&#2379;र&#2366;इज&#2367;&#2306;ग प&#2381;रक&#2381;र&#2367;य&#2366; म&#2375;&#2306; क&#2367;स ध&#2366;त&#2369; क&#2375; प&#2366;उडर क&#2366; उपय&#2379;ग क&#2367;य&#2366; ज&#2366;त&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Zinc powder </span>| ज&#2367;&#2306;क प&#2366;उडर","<span class='notranslate'>(B) Nickel powder </span>| न&#2367;क&#2375;ल प&#2366;उडर","<span class='notranslate'>(C) Chromium powder </span>| क&#2381;र&#2379;म&#2367;यम प&#2366;उडर","<span class='notranslate'>(D) Aluminium powder </span>| एल&#2381;य&#2370;म&#2368;न&#2367;यम प&#2366;उडर"],
answer:3,
},
{
question:"<span class='notranslate'>Q. Which material connecting rod bearing is made up of? </span>| कन&#2375;क&#2381;ट&#2367;&#2306;ग र&#2377;ड ब&#2375;यर&#2367;&#2306;ग क&#2367;स स&#2366;मग&#2381;र&#2368; स&#2375; बन&#2368; ह&#2379;त&#2368; ह&#2376;?",
options:["<span class='notranslate'>(A) White metal </span>| सफ&#2364;&#2375;द ध&#2366;त&#2369;","<span class='notranslate'>(B) Cadmium based alloy </span>| क&#2376;डम&#2367;यम आध&#2366;र&#2367;त म&#2367;श&#2381;र ध&#2366;त&#2369;","<span class='notranslate'>(C) Copper lead alloys </span>| त&#2366;&#2306;ब&#2366; स&#2368;स&#2366; म&#2367;श&#2381;र ध&#2366;त&#2369;","<span class='notranslate'>(D) Sintered alloy </span>| स&#2367;&#2306;टरय&#2369;क&#2381;त म&#2367;श&#2381;रध&#2366;त&#2369;"],
answer:2,
},
{
question:"<span class='notranslate'>Q. How to over comes this defects the load carrying capacity decreases with increasing temperature using white metal bearing? </span>| सफ&#2375;द ध&#2366;त&#2369; ब&#2375;यर&#2367;&#2306;ग क&#2366; उपय&#2379;ग करक&#2375; बढ&#2364;त&#2375; त&#2366;पम&#2366;न क&#2375; स&#2366;थ भ&#2366;र वहन क&#2381;षमत&#2366; कम ह&#2379;न&#2375; क&#2368; इस खर&#2366;ब&#2368; क&#2379; क&#2376;स&#2375; द&#2370;र क&#2367;य&#2366; ज&#2366;ए?",
options:["<span class='notranslate'>(A) Heat treated to increase the hardness </span>| कठ&#2379;रत&#2366; बढ&#2364;&#2366;न&#2375; क&#2375; ल&#2367;ए त&#2366;प उपच&#2366;र क&#2367;य&#2366; गय&#2366;","<span class='notranslate'>(B) Heat treated to increase the temper </span>| ग&#2369;स&#2381;स&#2366; बढ&#2364;&#2366;न&#2375; क&#2375; ल&#2367;ए गर&#2381;म&#2368; क&#2366; इल&#2366;ज क&#2367;य&#2366; गय&#2366;","<span class='notranslate'>(C) Coated with high strength material </span>| उच&#2381;च शक&#2381;त&#2367; स&#2366;मग&#2381;र&#2368; क&#2375; स&#2366;थ ल&#2375;प&#2367;त","<span class='notranslate'>(D) Coated with bronze material </span>| क&#2366;&#2306;स&#2381;य स&#2366;मग&#2381;र&#2368; स&#2375; ल&#2375;प&#2367;त"],
answer:2,
},
{
question:"<span class='notranslate'>Q. Why the melting point of bearing material should be lower than that of the shaft? </span>| क&#2381;य&#2379;&#2306; ब&#2367;यर&#2367;&#2306;ग मट&#2375;र&#2367;यल क&#2366; गलन&#2366;&#2306;क श&#2366;फ&#2381;ट क&#2375; गलन&#2366;&#2306;क क&#2368; त&#2369;लन&#2366; म&#2375;&#2306; कम ह&#2379;न&#2366; च&#2366;ह&#2367;ए?",
options:["<span class='notranslate'>(A) Prevents shaft seizure </span>| श&#2366;फ&#2381;ट जब&#2381;त&#2368; क&#2379; र&#2379;कत&#2366; ह&#2376;","<span class='notranslate'>(B) Prevent damage to bearing </span>| ब&#2367;यर&#2367;&#2306;ग क&#2379; न&#2369;कस&#2366;न ह&#2379;न&#2375; स&#2375; र&#2379;कन&#2375; क&#2375; ल&#2367;ए","<span class='notranslate'>(C) Allow the bearing to run efficiently </span>| ब&#2367;यर&#2367;&#2306;ग क&#2379; क&#2369;शलत&#2366; स&#2375; चल&#2366;न&#2375; क&#2375; ल&#2367;ए","<span class='notranslate'>(D) Prevent thermal expansion of shaft </span>| श&#2366;फ&#2381;ट क&#2375; थर&#2381;मल व&#2367;स&#2381;त&#2366;र क&#2379; र&#2379;कन&#2375; क&#2375; ल&#2367;ए"],
answer:0,
},
{
question:"<span class='notranslate'>Q. How to protect the metallic material from corrosion? </span>| ध&#2366;त&#2369; स&#2366;मग&#2381;र&#2368; क&#2379; स&#2306;क&#2381;ष&#2366;रण स&#2375; क&#2376;स&#2375; बच&#2366;ए&#2306;?",
options:["<span class='notranslate'>(A) Apply oil </span>| त&#2375;ल लग&#2366;ओ","<span class='notranslate'>(B) Apply grease </span>| च&#2367;कन&#2366;ई लग&#2366;ए&#2306;","<span class='notranslate'>(C) Apply protective coating </span>| स&#2369;रक&#2381;ष&#2366;त&#2381;मक ल&#2375;प लग&#2366;ए&#2306;","<span class='notranslate'>(D) Apply thin steel of lead </span>| स&#2368;स&#2375; क&#2368; पतल&#2368; स&#2381;ट&#2368;ल लग&#2366;य&#2375;&#2306;"],
answer:2,
},
{
question:"<span class='notranslate'>Q. Which bearing material has poor thermal conductivity? </span>| क&#2367;स ब&#2367;यर&#2367;&#2306;ग क&#2368; ऊष&#2381;म&#2368;य च&#2366;लकत&#2366;(थर&#2381;मल क&#2366;न&#2381;डक&#2381;ट&#2367;वट&#2368;) कम ह&#2379;त&#2368; ह&#2376;?",
options:["<span class='notranslate'>(A) Nylon </span>| न&#2366;यल&#2377;न","<span class='notranslate'>(B) Teflon </span>| ट&#2375;फ़ल&#2379;न","<span class='notranslate'>(C) Sintered alloys </span>| म&#2367;श&#2381;र ध&#2366;त&#2369;ए&#2305;","<span class='notranslate'>(D) Laminated phenolic </span>| ल&#2376;म&#2367;न&#2375;ट&#2375;ड फ&#2375;न&#2379;ल&#2367;क&#2381;स"],
answer:3,
},
{
question:"<span class='notranslate'>Q. Which metal is used in electroplating to the metal surface to resist corrosion for long period and to retain high polish? </span>| ल&#2306;ब&#2375; समय तक ज&#2306;ग न&#2366; लगन&#2375; द&#2375;न&#2366; और उच&#2381;च प&#2377;ल&#2367;श क&#2379; बन&#2366;ए रखन&#2375; क&#2375; ल&#2367;ए ध&#2366;त&#2369; क&#2368; सतह क&#2368; इल&#2375;क&#2381;ट&#2381;र&#2379;प&#2381;ल&#2375;ट&#2367;&#2306;ग म&#2375;&#2306; क&#2367;स ध&#2366;त&#2369; क&#2366; उपय&#2379;ग क&#2367;य&#2366; ज&#2366;त&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Lead </span>| ल&#2368;ड","<span class='notranslate'>(B) Nickel </span>| न&#2367;कल","<span class='notranslate'>(C) Chromium </span>| क&#2381;र&#2379;म&#2367;यम","<span class='notranslate'>(D) Aluminium </span>| एल&#2381;य&#2369;म&#2368;न&#2367;यम"],
answer:2,
},
{
question:"<span class='notranslate'>Q. Which bearing metals are applicable light load and low speed applications? </span>| क&#2380;न स&#2368; असर व&#2366;ल&#2368; ध&#2366;त&#2369;ए&#2306; हल&#2381;क&#2375; भ&#2366;र और कम गत&#2367; व&#2366;ल&#2375; अन&#2369;प&#2381;रय&#2379;ग&#2379;&#2306; पर ल&#2366;ग&#2370; ह&#2379;त&#2368; ह&#2376;&#2306;?",
options:["<span class='notranslate'>(A) White metal </span>| सफ&#2364;&#2375;द ध&#2366;त&#2369;","<span class='notranslate'>(B) Cadmium based alloy </span>| क&#2376;डम&#2367;यम आध&#2366;र&#2367;त म&#2367;श&#2381;र ध&#2366;त&#2369;","<span class='notranslate'>(C) Copper lead alloys </span>| त&#2366;&#2306;ब&#2366; स&#2368;स&#2366; म&#2367;श&#2381;र ध&#2366;त&#2369;","<span class='notranslate'>(D) Cast iron </span>| कच&#2381;च&#2366; ल&#2379;ह&#2366;"],
answer:3,
},
{
question:"<span class='notranslate'>Q. What is the disadvantage of thrust ball bearing? </span>| थ&#2381;रस&#2381;ट ब&#2377;ल ब&#2367;यर&#2367;&#2306;ग क&#2366; न&#2369;कस&#2366;न क&#2381;य&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Cannot take any radial load </span>| क&#2379;ई भ&#2368; र&#2375;ड&#2367;यल ल&#2379;ड नह&#2368;&#2306; ल&#2375; सकत&#2366;","<span class='notranslate'>(B) Cannot take horizontal end thrust </span>| क&#2381;ष&#2376;त&#2367;ज ए&#2306;ड थ&#2381;रस&#2381;ट नह&#2368;&#2306; ल&#2375; सकत&#2375;","<span class='notranslate'>(C) Cannot take load on both directions </span>| द&#2379;न&#2379;&#2306; द&#2367;श&#2366;ओ&#2306; म&#2375;&#2306; ल&#2379;ड नह&#2368;&#2306; ल&#2375; सकत&#2375;","<span class='notranslate'>(D) Cannot take any vertical thrust load </span>| क&#2367;स&#2368; भ&#2368; ऊर&#2381;ध&#2381;व&#2366;धर थ&#2381;रस&#2381;ट भ&#2366;र क&#2379; नह&#2368;&#2306; ल&#2375; सकत&#2375;"],
answer:1,
},
{
question:"<span class='notranslate'>Q. Which bearing material have poor resistance to corrosion? </span>| क&#2367;स असर व&#2366;ल&#2368; स&#2366;मग&#2381;र&#2368; म&#2375;&#2306; स&#2306;क&#2381;ष&#2366;रण क&#2375; प&#2381;रत&#2367; कम प&#2381;रत&#2367;र&#2379;ध ह&#2379;त&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) White metal </span>| सफ&#2364;&#2375;द ध&#2366;त&#2369;","<span class='notranslate'>(B) Cadmium based alloy </span>| क&#2376;डम&#2367;यम आध&#2366;र&#2367;त म&#2367;श&#2381;र ध&#2366;त&#2369;","<span class='notranslate'>(C) Aluminium alloy </span>| एल&#2381;य&#2370;म&#2367;न&#2367;यम म&#2367;श&#2381;र ध&#2366;त&#2369;","<span class='notranslate'>(D) Sintered alloy </span>| स&#2367;&#2306;टरय&#2369;क&#2381;त म&#2367;श&#2381;रध&#2366;त&#2369;"],
answer:1,
},
{
question:"<span class='notranslate'>Q. How to overcome the effect of high thermal expansion in aluminium alloys bearings? </span>| एल&#2381;य&#2370;म&#2368;न&#2367;यम म&#2367;श&#2381;र ध&#2366;त&#2369; ब&#2375;यर&#2367;&#2306;ग&#2379;&#2306; म&#2375;&#2306; उच&#2381;च त&#2366;प&#2368;य व&#2367;स&#2381;त&#2366;र क&#2375; प&#2381;रभ&#2366;व क&#2379; क&#2376;स&#2375; द&#2370;र कर&#2375;&#2306;?",
options:["<span class='notranslate'>(A) Provide extra clearance on bearing outer race </span>| ब&#2366;हर&#2368; द&#2380;ड&#2364; क&#2375; असर पर अत&#2367;र&#2367;क&#2381;त म&#2306;ज&#2370;र&#2368; प&#2381;रद&#2366;न कर&#2375;&#2306;","<span class='notranslate'>(B) Provide extra clearance on shaft </span>| श&#2366;फ&#2381;ट पर अत&#2367;र&#2367;क&#2381;त क&#2381;ल&#2368;यर&#2375;&#2306;स प&#2381;रद&#2366;न कर&#2375;&#2306;","<span class='notranslate'>(C) Provide extra clearance on bearing inner race </span>| आ&#2306;तर&#2367;क द&#2380;ड&#2364; क&#2379; प&#2381;रभ&#2366;व&#2367;त करन&#2375; पर अत&#2367;र&#2367;क&#2381;त म&#2306;ज&#2370;र&#2368; प&#2381;रद&#2366;न कर&#2375;&#2306;","<span class='notranslate'>(D) Provide extra clearance on bearing and journal </span>| ब&#2375;यर&#2367;&#2306;ग और जर&#2381;नल पर अत&#2367;र&#2367;क&#2381;त क&#2381;ल&#2368;यर&#2375;&#2306;स प&#2381;रद&#2366;न कर&#2375;&#2306;"],
answer:3,
},
{
question:"<span class='notranslate'>Q. Which one is the self lubricating bearing material? </span>| स&#2381;व-च&#2367;कन&#2366;ई ध&#2366;रण करन&#2375; व&#2366;ल&#2368; स&#2366;मग&#2381;र&#2368; क&#2380;न स&#2368; ह&#2376;?",
options:["<span class='notranslate'>(A) White metal </span>| सफ&#2364;&#2375;द ध&#2366;त&#2369;","<span class='notranslate'>(B) Cadmium based alloy </span>| क&#2376;डम&#2367;यम आध&#2366;र&#2367;त म&#2367;श&#2381;र ध&#2366;त&#2369;","<span class='notranslate'>(C) Copper lead alloys </span>| त&#2366;&#2306;ब&#2366; स&#2368;स&#2366; म&#2367;श&#2381;र ध&#2366;त&#2369;","<span class='notranslate'>(D) Sintered alloy </span>| स&#2367;&#2306;टरय&#2369;क&#2381;त म&#2367;श&#2381;रध&#2366;त&#2369;"],
answer:3,
},
{
question:"<span class='notranslate'>Q. Which bearing material is suitable for high strength and shock resistance? </span>| उच&#2381;च शक&#2381;त&#2367; और आघ&#2366;त प&#2381;रत&#2367;र&#2379;ध क&#2375; ल&#2367;ए क&#2380;न स&#2368; असर स&#2366;मग&#2381;र&#2368; उपय&#2369;क&#2381;त ह&#2376;?",
options:["<span class='notranslate'>(A) Nylon </span>| न&#2366;यल&#2377;न","<span class='notranslate'>(B) Teflon </span>| ट&#2375;फ&#2381;ल&#2366;न","<span class='notranslate'>(C) Plastics </span>| प&#2381;ल&#2366;स&#2381;ट&#2367;क","<span class='notranslate'>(D) Laminated phenolics </span>| ल&#2376;म&#2367;न&#2375;ट&#2375;ड फ&#2367;न&#2379;ल&#2367;क&#2381;स"],
answer:3,
},
{
question:"<span class='notranslate'>Q. Which bearing material is an alloy of tin or lead based? </span>| क&#2380;न स&#2368; असर स&#2366;मग&#2381;र&#2368; ट&#2367;न य&#2366; स&#2368;स&#2366; आध&#2366;र&#2367;त म&#2367;श&#2381;र ध&#2366;त&#2369; ह&#2376;?",
options:["<span class='notranslate'>(A) White metal </span>| सफ&#2364;&#2375;द ध&#2366;त&#2369;","<span class='notranslate'>(B) Cadmium based alloy </span>| क&#2376;डम&#2367;यम आध&#2366;र&#2367;त म&#2367;श&#2381;र ध&#2366;त&#2369;","<span class='notranslate'>(C) Aluminium alloy </span>| एल&#2381;य&#2370;म&#2367;न&#2367;यम म&#2367;श&#2381;र ध&#2366;त&#2369;","<span class='notranslate'>(D) Sintered alloy </span>| स&#2367;&#2306;टरय&#2369;क&#2381;त म&#2367;श&#2381;रध&#2366;त&#2369;"],
answer:0,
},
{
question:"<span class='notranslate'>Q. Which bearing material has low co-efficient of friction and high material cost? </span>| क&#2367;स स&#2366;मग&#2381;र&#2368; म&#2375;&#2306; घर&#2381;षण और उच&#2381;च स&#2366;मग&#2381;र&#2368; ल&#2366;गत क&#2366; कम सह-क&#2369;शल ह&#2376;?",
options:["<span class='notranslate'>(A) Nylon </span>| न&#2366;यल&#2377;न","<span class='notranslate'>(B) Teflon </span>| ट&#2375;फ़ल&#2379;न","<span class='notranslate'>(C) Thrust ball bearing </span>| थ&#2381;रस&#2381;ट ब&#2377;ल ब&#2367;यर&#2367;&#2306;ग","<span class='notranslate'>(D) Laminated phenolic </span>| ल&#2376;म&#2367;न&#2375;ट&#2375;ड फ&#2375;न&#2379;ल&#2367;क&#2381;स"],
answer:1,
},
{
question:"<span class='notranslate'>Q. What is the temperature required to process the chromising for prevention of corrosion? </span>| ज&#2306;ग क&#2375; र&#2379;कथ&#2366;म क&#2375; ल&#2367;ए क&#2381;र&#2379;म&#2366;इज&#2367;&#2306;ग प&#2381;रक&#2381;र&#2367;य&#2366; क&#2375; ल&#2367;ए आवश&#2381;यक त&#2366;पम&#2366;न क&#2381;य&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) 900 to 1100&#176;C","<span class='notranslate'>(B) 1000 to 1100&#176;C","<span class='notranslate'>(C) 1100 to 1200&#176;C","<span class='notranslate'>(D) 1300 to 1400&#176;C"],
answer:3,
},
{
question:"<span class='notranslate'>Q. Which bearing material ,the lubrication is not needed? </span>| क&#2367;स असर व&#2366;ल&#2368; स&#2366;मग&#2381;र&#2368; म&#2375;&#2306; स&#2381;न&#2375;हन क&#2368; आवश&#2381;यकत&#2366; नह&#2368;&#2306; ह&#2379;त&#2368; ह&#2376;?",
options:["<span class='notranslate'>(A) Plastics </span>| प&#2381;ल&#2366;स&#2381;ट&#2367;क","<span class='notranslate'>(B) Cast iron </span>| कच&#2381;च&#2366; ल&#2379;ह&#2366;","<span class='notranslate'>(C) White metal </span>| सफ&#2364;&#2375;द ध&#2366;त&#2369;","<span class='notranslate'>(D) Aluminium alloy </span>| एल&#2381;य&#2370;म&#2367;न&#2367;यम म&#2367;श&#2381;र ध&#2366;त&#2369;"],
answer:0,
}]
},

{
 category:"<span class='notranslate'>Module 6 Pipe and Pipe fitting </span>| प&#2366;इप और प&#2366;इप फ&#2367;ट&#2367;&#2306;ग",
 quizWrap:[{
question:"<span class='notranslate'>Q. Which type of wrench is used for more than 50 mm dia meter pipe to tight with heavy gripping? </span>| क&#2367;स प&#2381;रक&#2366;र क&#2375; र&#2367;&#2306;च क&#2366; उपय&#2379;ग 50mm स&#2375; अध&#2367;क व&#2381;य&#2366;स क&#2375; म&#2368;टर प&#2366;इप क&#2375; ल&#2367;ए मजब&#2370;त पकड&#2364; क&#2375; स&#2366;थ कसन&#2375; क&#2375; ल&#2367;ए क&#2367;य&#2366; ज&#2366;त&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Strap wrench </span>| स&#2381;ट&#2381;र&#2376;प र&#2367;&#2306;च","<span class='notranslate'>(B) Foot print wrench </span>| फ&#2369;ट प&#2381;र&#2367;&#2306;ट र&#2367;&#2306;च","<span class='notranslate'>(C) Chain pipe wrench </span>| च&#2375;न प&#2366;इप र&#2367;&#2306;च","<span class='notranslate'>(D) Stilson pipe wrench </span>| स&#2381;ट&#2367;लसन प&#2366;इप र&#2367;&#2306;च"],
answer:2,
},
{
question:"<span class='notranslate'>Q. What is the name of the pipe fitting? </span>| इस प&#2366;इप फ&#2367;ट&#2367;&#2306;ग क&#2366; न&#2366;म क&#2381;य&#2366; ह&#2376;?<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjK50rd4o3QdRS0NUMZaa7TM0-nAh2jNEkizg3Rar6ylDeRs0fibfgSRmn0pI-9ZsgHOR2m0edxr7iZ6G_167gkDhfWpL7ERiMeyMFk9_t9CA44_2kd8bOJJyR0UmpEMpvY4qwqrbbb4ZIW9Pu-eJfLqwsMID4p17P5rFknohfVYbPgEP4gxCB9LgPGFUBJ/s1600/FIT2-6-129.JPG'>",
options:["<span class='notranslate'>(A) 45&#176; elbow </span>| 45&#176; एल&#2381;ब&#2379;","<span class='notranslate'>(B) Tee joint pipe </span>| ट&#2368; ज&#2377;इ&#2306;ट प&#2366;इप","<span class='notranslate'>(C) Short radius elbow </span>| श&#2379;र&#2381;ट र&#2375;ड&#2367;यस एल&#2381;ब&#2379;","<span class='notranslate'>(D) Long radius elbow </span>| ल&#2377;न&#2381;ग र&#2375;ड&#2367;यस एल&#2381;ब&#2379;"],
answer:0,
},
{
question:"<span class='notranslate'>Q. What is the cause of water dripping from the tap even after closed? </span>| ब&#2306;द ह&#2379;न&#2375; क&#2375; ब&#2366;द भ&#2368; नल स&#2375; प&#2366;न&#2368; टपकन&#2375; क&#2366; क&#2381;य&#2366; क&#2366;रण ह&#2376;?",
options:["<span class='notranslate'>(A) Defective washer </span>| द&#2379;षप&#2370;र&#2381;ण व&#2377;शर","<span class='notranslate'>(B) Spindle thread wornout </span>| स&#2381;प&#2367;&#2306;डल थ&#2381;र&#2375;ड घ&#2367;स ज&#2366;न&#2366;","<span class='notranslate'>(C) Bend spindle </span>| स&#2381;प&#2367;&#2306;डल क&#2366; म&#2369;ड ज&#2366;न&#2366;","<span class='notranslate'>(D) Loose valve </span>| ढ&#2368;ल&#2366; व&#2366;ल&#2381;व"],
answer:0,
},
{
question:"<span class='notranslate'>Q. Which valve is used to permit fluid flow in one direction only? </span>| क&#2375;वल एक द&#2367;श&#2366; म&#2375;&#2306; द&#2381;रव प&#2381;रव&#2366;ह क&#2368; अन&#2369;मत&#2367; द&#2375;न&#2375; क&#2375; ल&#2367;ए क&#2367;स व&#2366;ल&#2381;व क&#2366; उपय&#2379;ग क&#2367;य&#2366; ज&#2366;त&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Plug-cock </span>| प&#2381;लग क&#2377;क","<span class='notranslate'>(B) Needle valve </span>| न&#2368;डल व&#2366;ल&#2381;व","<span class='notranslate'>(C) Non-return valve </span>| न&#2377;न र&#2367;टर&#2381;न व&#2366;ल&#2381;व","<span class='notranslate'>(D) Pressure regulator valve </span>| प&#2381;र&#2375;शर र&#2375;ग&#2369;ल&#2375;टर व&#2366;ल&#2381;व"],
answer:2,
},
{
question:"<span class='notranslate'>Q. Which standard fitting is used for joining pipeline of different diameter? </span>| व&#2367;भ&#2367;न&#2381;न व&#2381;य&#2366;स क&#2368; प&#2366;इपल&#2366;इन क&#2379; ज&#2379;ड़न&#2375; क&#2375; ल&#2367;ए क&#2367;स म&#2366;नक फ&#2367;ट&#2367;&#2306;ग क&#2366; उपय&#2379;ग क&#2367;य&#2366; ज&#2366;त&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Plug </span>| प&#2381;लग","<span class='notranslate'>(B) Caps </span>| क&#2376;प&#2381;स","<span class='notranslate'>(C) Reducer </span>| र&#2367;ड&#2370;सर","<span class='notranslate'>(D) Coupling </span>| कपल&#2367;&#2306;ग"],
answer:2,
},
{
question:"<span class='notranslate'>Q. What is the type of visual pipe inspection at 30&#176; angle between the plane of vision and surface? </span>| द&#2371;ष&#2381;ट&#2367; और सतह क&#2375; व&#2367;म&#2366;न क&#2375; ब&#2368;च 30&#176; क&#2379;ण पर द&#2371;श&#2381;य प&#2366;इप न&#2367;र&#2368;क&#2381;षण क&#2367;स प&#2381;रक&#2366;र क&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Direct visual testing </span>| प&#2381;रत&#2381;यक&#2381;ष द&#2371;श&#2381;य पर&#2368;क&#2381;षण","<span class='notranslate'>(B) Remote visual testing </span>| द&#2370;रस&#2381;थ द&#2371;श&#2381;य पर&#2368;क&#2381;षण","<span class='notranslate'>(C) Translucent visual testing </span>| प&#2366;रभ&#2366;स&#2368; द&#2371;श&#2381;य पर&#2368;क&#2381;षण","<span class='notranslate'>(D) Transparent visual testing </span>| प&#2366;रदर&#2381;श&#2368; द&#2371;श&#2381;य पर&#2368;क&#2381;षण"],
answer:0,
},
{
question:"<span class='notranslate'>Q. What is the capacity of the pipe vice to hold pipes diameter in mm? </span>| प&#2366;इप व&#2366;ईस क&#2367;तन&#2375; म&#2367;ल&#2368;म&#2368;टर व&#2381;य&#2366;स क&#2375; प&#2366;इप&#2379; क&#2379; पकड़न&#2375; क&#2368; क&#2381;षमत&#2366; रखत&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) 68 mm","<span class='notranslate'>(B) 65 mm","<span class='notranslate'>(C) 63 mm","<span class='notranslate'>(D) 72 mm"],
answer:2,
},
{
question:"<span class='notranslate'>Q. What is the name of part marked as &#8216;x&#8217; in the pipe joint? </span>| प&#2366;इप क&#2375; ज&#2379;ड&#2364; म&#2375;&#2306; भ&#2366;ग &#8217;x&#8217; क&#2366; क&#2381;य&#2366; न&#2366;म ह&#2376;?<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjvebDelJKGYYP39OzInYRsUey1KMOvxT9jHKP_mDvJG3a8Xh-uZ3QMkROKEiMaVSwumndr6VXTwHxmZizU2TsnhRgB2W5rLicBmHiLU7cFHJFDrFJp9zNKd8ja8TskPcjJW1bIjpRQMzvTbEQmgD87Fm5Ybhl70CZrNvNRYpp0qWGhIc973EZkgtQBc-8Y/s1600/FIT2-6-131.JPG'>",
options:["<span class='notranslate'>(A) Outer pipe </span>| ब&#2366;हर&#2368; प&#2366;इप","<span class='notranslate'>(B) Hemp packing </span>| ह&#2375;म&#2381;प प&#2376;क&#2367;&#2306;ग","<span class='notranslate'>(C) Tapered male thread </span>| ट&#2375;परड म&#2375;ल थ&#2381;र&#2375;ड","<span class='notranslate'>(D) Parallel female thread </span>| प&#2376;र&#2375;लल फ&#2368;म&#2375;ल थ&#2381;र&#2375;ड"],
answer:1,
},
{
question:"<span class='notranslate'>Q. How pipes are classified? </span>| प&#2366;इप&#2379;&#2306; क&#2379; क&#2376;स&#2375; वर&#2381;ग&#2368;क&#2371;त क&#2367;य&#2366; ज&#2366;त&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Uses </span>| उपय&#2379;ग","<span class='notranslate'>(B) Colour </span>| र&#2306;ग","<span class='notranslate'>(C) Shapes </span>| आक&#2371;त&#2367;य&#2366;&#2305;","<span class='notranslate'>(D) Material </span>| मट&#2375;र&#2367;यल"],
answer:3,
},
{
question:"<span class='notranslate'>Q. What is the part marked as &#8216;x&#8217;? </span>| &#8217;X&#8217; क&#2375; र&#2370;प म&#2375;&#2306; च&#2367;ह&#2381;न&#2367;त भ&#2366;ग क&#2381;य&#2366; ह&#2376;?<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg_qPYZdt7WSoekg_Xufqex7f7C5DX1NpWK2cUtrWpdIvOrFN9Op98nlHrDyw0YAjzyN0NlRVmdPIIOUpl8TxAOmYfKvs9rb5XhU9A-Xp-be0SaTwf27lT2h-CdR27yd0GOrR0W2AXz40G7v2GHJoPcRSYlKxdco6gfozgdHLQTFcuwIezPdMJdIF0BJWO2/s1600/FIT2-6-139.JPG'>",
options:["<span class='notranslate'>(A) Pivot </span>| प&#2367;व&#2379;ट","<span class='notranslate'>(B) Spring </span>| स&#2381;प&#2381;र&#2367;&#2306;ग","<span class='notranslate'>(C) Movable jaw </span>| म&#2370;व&#2375;बल ज&#2377;","<span class='notranslate'>(D) Adjusting nut </span>| एडजस&#2381;ट&#2367;&#2306;ग नट"],
answer:3,
},
{
question:"<span class='notranslate'>Q. What is the name of part marked as ʹxʹ? </span>| X&#8217; क&#2375; र&#2370;प म&#2375; च&#2367;ह&#2381;न&#2367;त भ&#2366;ग क&#2366; न&#2366;म बत&#2366;ए?<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjQJg7TgrGIeZ3OtNTCuG9Xlhvzcsg3cnGl8jmSDEG6D2dMQxWdfRb3ujpdzV-f3XdyJUbN0N-kvxjXEqELM0FoC2VDhzjsFKSygK6qW3AR3qO8pAFV9XY_gMO6FkH-fQQQGmA8AKDwuRk6SHPTsHdPaGjqLmJaxwSy3BXQ96RzXSEW7Dfin0qAYuCE5k1P/s1600/FIT2-6-136.JPG'>",
options:["<span class='notranslate'>(A) Cutter wheel </span>| कटर व&#2381;ह&#2368;ल","<span class='notranslate'>(B) Adjusting screw </span>| अजस&#2381;ट&#2367;&#2306;ग स&#2381;क&#2381;र&#2370;","<span class='notranslate'>(C) Guide rollers </span>| ग&#2366;इड र&#2379;लर&#2381;स","<span class='notranslate'>(D) Hand lever </span>| ह&#2376;ण&#2381;ड ल&#2368;वर"],
answer:0,
},
{
question:"<span class='notranslate'>Q. Which valve is used to control flow and is only kept in either open or closed position? </span>| प&#2381;रव&#2366;ह क&#2379; न&#2367;य&#2306;त&#2381;र&#2367;त करन&#2375; क&#2375; ल&#2367;ए क&#2367;स व&#2366;ल&#2381;व क&#2366; उपय&#2379;ग क&#2367;य&#2366; ज&#2366;त&#2366; ह&#2376; और इस&#2375; क&#2375;वल ख&#2369;ल&#2366; य&#2366; ब&#2306;द स&#2381;थ&#2367;त&#2367; म&#2375;&#2306; रख&#2366; ज&#2366;त&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Gate valve </span>| ग&#2375;ट व&#2366;ल&#2381;व","<span class='notranslate'>(B) Globe valve </span>| ग&#2381;ल&#2379;ब व&#2366;ल&#2381;व","<span class='notranslate'>(C) Needle valve </span>| न&#2368;डल व&#2366;ल&#2381;व","<span class='notranslate'>(D) Non-return valve </span>| न&#2377;न र&#2367;टर&#2381;न व&#2366;ल&#2381;व"],
answer:0,
},
{
question:"<span class='notranslate'>Q. What is the angle of deviations provided on elbows and bends in pipe works? </span>| प&#2366;इप क&#2375; क&#2366;र&#2381;य&#2379; म&#2375; एल&#2381;ब&#2379; और ब&#2375;&#2306;ड पर व&#2367;चलन क&#2366; क&#2379;ण क&#2367;तन&#2366; ह&#2379;त&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) 90&#176; & 45&#176;","<span class='notranslate'>(B) 30&#176; & 60&#176;","<span class='notranslate'>(C) 20&#176; & 40&#176;","<span class='notranslate'>(D) 60&#176; & 45&#176;"],
answer:0,
},
{
question:"<span class='notranslate'>Q. What is the name of pipe line symbol? </span>| प&#2366;इप ल&#2366;इन प&#2381;रत&#2368;क क&#2366; न&#2366;म क&#2381;य&#2366; ह&#2376;?<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgjSoYioGvSiUhskRCBK4oFSSFl_w2qdxRNLbvEEL5KeTagGH-ugAHfOyYhrx8pbLsKCau2hNzJ38nG6ml5-fyFZ656584azK_IxOcMa9-CttDhaXWU4gXnvnaYhHWdZt0Hpoya8zKYeFFD3SWZA3qj1IN271U_Aij1Jzi_Qmf63k476LjZos6mV4mj0Pq9/s1600/FIT2-6-133.JPG'>",
options:["<span class='notranslate'>(A) Socket </span>| स&#2377;क&#2375;ट","<span class='notranslate'>(B) Plug or cap </span>| प&#2381;लग य&#2366; ट&#2379;प&#2368;","<span class='notranslate'>(C) Union screwed </span>| य&#2370;न&#2367;यन स&#2381;क&#2381;र&#2370;ड","<span class='notranslate'>(D) Reducer concentric </span>| र&#2367;ड&#2370;सर कन&#2381;स&#2375;न&#2381;ट&#2381;र&#2367;क"],
answer:3,
},
{
question:"<span class='notranslate'>Q. What is the range of external pipe threads cut by pipe dies? </span>| प&#2366;इप ड&#2366;ई द&#2381;व&#2366;र&#2366; क&#2366;ट&#2375; ज&#2366;न&#2375; व&#2366;ल&#2375; ब&#2366;हर&#2368; प&#2366;इप थ&#2381;र&#2375;ड&#2381;स क&#2368; स&#2368;म&#2366; क&#2381;य&#2366; ह&#2379;त&#2368; ह&#2376;?",
options:["<span class='notranslate'>(A) &#189;ʺ to 4ʺ","<span class='notranslate'>(B) &#188;ʺ to 4ʺ","<span class='notranslate'>(C) 1/8ʺ to 2ʺ","<span class='notranslate'>(D) &#188;ʺ to 6ʺ"],
answer:1,
}]
},

{
 category:"<span class='notranslate'>Module 7 Drill jig, Aluminium and Power Transmission </span>| ड&#2381;र&#2367;ल ज&#2367;ग, एल&#2381;य&#2370;म&#2367;न&#2367;यम और प&#2366;वर ट&#2381;र&#2366;&#2306;सम&#2367;शन",
 quizWrap:[{
question:"<span class='notranslate'>Q. Which metal is extracted from bauxite ore? </span>| ब&#2377;क&#2381;स&#2366;इट अयस&#2381;क स&#2375; क&#2367;स ध&#2366;त&#2369; क&#2379; न&#2367;क&#2366;ल&#2366; ज&#2366;त&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Zinc </span>| जस&#2381;त&#2366;","<span class='notranslate'>(B) Brass </span>| प&#2368;तल","<span class='notranslate'>(C) Copper </span>| त&#2366;&#2306;ब&#2366;","<span class='notranslate'>(D) Aluminium </span>| एल&#2381;य&#2369;म&#2367;न&#2367;यम"],
answer:3,
},
{
question:"<span class='notranslate'>Q. Why aluminium is used widely in aircraft industries? </span>| व&#2367;म&#2366;न उद&#2381;य&#2379;ग&#2379;&#2306; म&#2375;&#2306; व&#2381;य&#2366;पक र&#2370;प स&#2375; एल&#2381;य&#2370;म&#2368;न&#2367;यम क&#2366; उपय&#2379;ग क&#2381;य&#2379;&#2306; क&#2367;य&#2366; ज&#2366;त&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Light weight </span>| हल&#2381;क&#2366; वजन","<span class='notranslate'>(B) Hard and Brittle </span>| ह&#2366;र&#2381;ड और ब&#2381;र&#2367;टल","<span class='notranslate'>(C) High tensile strength </span>| उच&#2381;च तन&#2381;यत&#2366; त&#2366;कत","<span class='notranslate'>(D) Low thermal conductivity </span>| कम त&#2366;प&#2368;य च&#2366;लकत&#2366;"],
answer:0,
},
{
question:"<span class='notranslate'>Q. Name the type of belt fastener.</span>| ब&#2375;ल&#2381;ट फ&#2366;स&#2381;टनर क&#2366; न&#2366;म बत&#2366;ए&#2306;?<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiGfhnZto2uW3rrY_lqOuykZpqAj9m-Ttmrn5Opx9T3shSiQb2kXC2Ho4OpiHjvL0Sg-3mX16iE9qTRVQ2VDZkZfmcsQt-5HnYqmgzMF5PPGVMMmgHf5Mt_ccqWnJ5azwgVZ7_vH0Gv2nqSfOc161bOIL8vKrE2uF-7ciNsT4D9rXg5RDc_QwConu3Gzm6r/s1600/FIT2-7-165.JPG'>",
options:["<span class='notranslate'>(A) Wire type belt fastener </span>| व&#2366;यर ट&#2366;इप ब&#2375;ल&#2381;ट फ&#2366;स&#2381;टनर","<span class='notranslate'>(B) Alligator type belt fastener </span>| एल&#2368;ग&#2375;टर ट&#2366;इप ब&#2375;ल&#2381;ट फ&#2366;स&#2381;टनर","<span class='notranslate'>(C) Jackson type belt fastener </span>| ज&#2376;क&#2381;सन ट&#2366;इप ब&#2375;ल&#2381;ट फ&#2366;स&#2381;टनर","<span class='notranslate'>(D) Crescent plate belt fastener </span>| क&#2381;र&#2367;स&#2375;&#2306;ट प&#2381;ल&#2375;ट ब&#2375;ल&#2381;ट फ&#2366;स&#2381;टनर"],
answer:3,
},
{
question:"<span class='notranslate'>Q. What is the name of fixture? </span>| इस फ&#2367;क&#2381;स&#2381;चर क&#2366; न&#2366;म क&#2381;य&#2366; ह&#2376;?<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgVacNcSpI-yv1e9FM379mjSDBUx3io01_8q98aSgGwX8vfhqAeP4AkOnv07hxynCqojZl7UIAGOFxT_KhIzP5J-8QLp34TPOtfVMhBlQ5ozoCw2y8h90Bb2E7CPUBfjymS51O9JFvSjJ1t8f8uUWORetyC_EUCvRnRoqb6EhCrb-0fi7qYgL2ScU0PJ6BT/s1600/FIT2-7-145.JPG'>",
options:["<span class='notranslate'>(A) Plate fixture </span>| प&#2381;ल&#2375;ट फ&#2367;क&#2381;स&#2381;चर","<span class='notranslate'>(B) Angel plate fixture </span>| ए&#2306;गल प&#2381;ल&#2375;ट फ&#2367;क&#2381;स&#2381;चर","<span class='notranslate'>(C) Indexing plate fixture </span>| इ&#2306;ड&#2375;क&#2381;स&#2367;&#2306;ग प&#2381;ल&#2375;ट फ&#2367;क&#2381;स&#2381;चर","<span class='notranslate'>(D) Modified angle plate fixture </span>| म&#2377;ड&#2367;फ&#2366;इड ए&#2306;गल प&#2381;ल&#2375;ट फ&#2367;क&#2381;स&#2381;चर"],
answer:3,
},
{
question:"<span class='notranslate'>Q. Why vertical belt drive is avoided in power transmission? </span>| प&#2366;वर ट&#2381;र&#2366;&#2306;सम&#2367;शन म&#2375;&#2306; वर&#2381;ट&#2367;कल ब&#2375;ल&#2381;ट ड&#2381;र&#2366;इव क&#2366; इस&#2381;त&#2375;म&#2366;ल क&#2381;य&#2379;&#2306; नह&#2368;&#2306; करन&#2366; च&#2366;ह&#2367;य&#2375;?",
options:["<span class='notranslate'>(A) Because of small wrapping of belt </span>| ब&#2375;ल&#2381;ट क&#2375; छ&#2379;ट&#2375; लप&#2375;टन&#2375; क&#2368; वजह स&#2375;","<span class='notranslate'>(B) Because of excessive contact </span>| अत&#2381;यध&#2367;क स&#2306;पर&#2381;क क&#2375; क&#2366;रण","<span class='notranslate'>(C) Because of gravitational pull and slippage </span>| ग&#2369;र&#2369;त&#2381;व&#2366;कर&#2381;षण ख&#2367;&#2306;च&#2366;व और फ&#2367;सलन क&#2375; क&#2366;रण","<span class='notranslate'>(D) Because of increase in surface speed of pulleys </span>| प&#2369;ल&#2368; क&#2368; सतह क&#2368; गत&#2367; म&#2375;&#2306; व&#2371;द&#2381;ध&#2367; क&#2375; क&#2366;रण"],
answer:2,
},
{
question:"<span class='notranslate'>Q. What is the cause for the belt whips extensively? </span>| बड&#2364;&#2375; प&#2376;म&#2366;न&#2375; पर ब&#2375;ल&#2381;ट व&#2381;ह&#2367;प क&#2366; क&#2366;रण क&#2381;य&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Centre distance between the pulleys is more </span>| प&#2369;ल&#2368; क&#2375; ब&#2368;च क&#2375;&#2306;द&#2381;र क&#2368; द&#2370;र&#2368; अध&#2367;क ह&#2376;","<span class='notranslate'>(B) Less tension </span>| कम तन&#2366;व","<span class='notranslate'>(C) Over load </span>| अध&#2367;क भ&#2366;र","<span class='notranslate'>(D) High starting torque </span>| उच&#2381;च आर&#2306;भ&#2367;क ट&#2377;र&#2381;क"],
answer:0,
},
{
question:"<span class='notranslate'>Q. What is the name of clamp? </span>| इस क&#2381;ल&#2376;&#2306;प क&#2366; न&#2366;म क&#2381;य&#2366; ह&#2376;?<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjIoF_34ridW3paSYhkEE-OnShHxZEf4WULawFghTmAbL34rnGm3FhU2RhzOvvRv0okLMoBdDoure8gfMAgfBW_KtRFSCf_8SWnTJndNLxyBVoj71h4rsd2NWrBPy70s-7OiymZn9ImwMAqtCToQQGZoxvDgw2SRK-UNIVZ8STwxOL1fMmJD97VxZ-DdjKv/s1600/FIT2-7-150.JPG'>",
options:["<span class='notranslate'>(A) Cam clamp </span>| क&#2376;म क&#2381;ल&#2376;&#2306;प","<span class='notranslate'>(B) Screw clamp </span>| स&#2381;क&#2381;र&#2370; क&#2381;ल&#2376;&#2306;प","<span class='notranslate'>(C) Wedge clamp </span>| व&#2376;ज क&#2381;ल&#2376;&#2306;प","<span class='notranslate'>(D) Toggle clamp </span>| ट&#2377;गल क&#2381;ल&#2376;&#2306;प"],
answer:1,
},
{
question:"<span class='notranslate'>Q. Which type of jig do not have base plate? </span>| क&#2367;स प&#2381;रक&#2366;र क&#2375; ज&#2367;ग म&#2375;&#2306; ब&#2375;स प&#2381;ल&#2375;ट नह&#2368;&#2306; ह&#2379;ग&#2368;?",
options:["<span class='notranslate'>(A) Table jig </span>| ट&#2375;बल ज&#2367;ग","<span class='notranslate'>(B) Plate jig </span>| प&#2381;ल&#2375;ट ज&#2367;ग","<span class='notranslate'>(C) Template jig </span>| ट&#2375;म&#2381;पल&#2375;ट ज&#2367;ग","<span class='notranslate'>(D) Sandwich jig </span>| स&#2376;&#2306;डव&#2367;च ज&#2367;ग"],
answer:2,
},
{
question:"<span class='notranslate'>Q. Which is the important factor to determine the construction of fixture? </span>| फ&#2367;क&#2381;स&#2381;चर क&#2375; न&#2367;र&#2381;म&#2366;ण क&#2366; न&#2367;र&#2381;ध&#2366;रण करन&#2375; क&#2375; ल&#2367;ए क&#2380;न स&#2366; महत&#2381;वप&#2370;र&#2381;ण क&#2366;रक ह&#2376;?",
options:["<span class='notranslate'>(A) Machining method </span>| मश&#2368;न&#2367;&#2306;ग क&#2368; व&#2367;ध&#2367;","<span class='notranslate'>(B) Location and clamping </span>| ल&#2379;क&#2375;ट&#2367;&#2306;ग और क&#2381;ल&#2376;&#2306;पइ&#2306;ग","<span class='notranslate'>(C) Tool guiding and frame </span>| ट&#2370;ल ग&#2366;इड&#2367;&#2306;ग और फ&#2381;र&#2375;म","<span class='notranslate'>(D) Size of work piece and tool </span>| क&#2366;र&#2381;य खण&#2381;ड और ट&#2370;ल क&#2366; स&#2366;इज़"],
answer:0,
},
{
question:"<span class='notranslate'>Q. What is the colour of the aluminium metal? </span>| एल&#2381;य&#2370;म&#2368;न&#2367;यम ध&#2366;त&#2369; क&#2366; र&#2306;ग क&#2381;य&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Yellow </span>| प&#2368;ल&#2366;","<span class='notranslate'>(B) Reddish </span>| ल&#2366;ल स&#2366;","<span class='notranslate'>(C) Whitish grey </span>| व&#2366;इट&#2367;श ग&#2375;","<span class='notranslate'>(D) Silvery white </span>| स&#2367;ल&#2381;व&#2375;र&#2368; व&#2366;इट"],
answer:2,
},
{
question:"<span class='notranslate'>Q. How to adjust the tension of belt between two fixed pulleys? </span>| द&#2379; फ&#2367;क&#2381;स&#2381;ड प&#2369;ल&#2368; क&#2375; ब&#2368;च ब&#2375;ल&#2381;ट क&#2375; तन&#2366;व क&#2379; क&#2376;स&#2375; सम&#2366;य&#2379;ज&#2367;त कर&#2375;&#2306;?",
options:["<span class='notranslate'>(A) By sliding the pulley </span>| प&#2369;ल&#2381;ल&#2368; क&#2379; स&#2381;ल&#2366;इड करक&#2375;","<span class='notranslate'>(B) By fixing idler pulley </span>| आदर&#2381;श प&#2369;ल&#2381;ल&#2368; क&#2379; फ&#2367;क&#2381;स करक&#2375;","<span class='notranslate'>(C) By adjusting the length of belt </span>| ब&#2375;ल&#2381;ट क&#2368; ल&#2306;ब&#2366;ई क&#2379; एडजस&#2381;ट करक&#2375;","<span class='notranslate'>(D) By adjusting the screw of pulley </span>| प&#2369;ल&#2381;ल&#2368; क&#2375; स&#2381;क&#2381;र&#2370; क&#2379; एडजस&#2381;ट करक&#2375;"],
answer:1,
},
{
question:"<span class='notranslate'>Q. Which device holds, supports, locates and also guide the cutting tool for operation? </span>| क&#2380;न स&#2366; उपकरण ऑपर&#2375;शन क&#2375; ल&#2367;ए कट&#2367;&#2306;ग ट&#2370;ल क&#2379; पकड़त&#2366;, सप&#2379;र&#2381;ट करत&#2366; , ल&#2379;क&#2375;ट और स&#2366;थ स&#2366;थ ग&#2366;इड भ&#2368; करत&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Jig </span>| ज&#2367;ग","<span class='notranslate'>(B) Fixture </span>| फ&#2367;क&#2381;स&#2381;चर","<span class='notranslate'>(C) Chuck </span>| चक","<span class='notranslate'>(D) Machine vice </span>| मश&#2368;न व&#2366;इस"],
answer:0,
},
{
question:"<span class='notranslate'>Q. What is the effect of excessive tension in belt drive? </span>| ब&#2375;ल&#2381;ट ड&#2381;र&#2366;इव म&#2375;&#2306; अत&#2381;यध&#2367;क तन&#2366;व क&#2366; क&#2381;य&#2366; प&#2381;रभ&#2366;व पड&#2364;त&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Speed increases </span>| गत&#2367; बढ&#2364; ज&#2366;त&#2368; ह&#2376;","<span class='notranslate'>(B) Speed reduces </span>| गत&#2367; कम ह&#2379; ज&#2366;त&#2368; ह&#2376;","<span class='notranslate'>(C) Life of belt increases </span>| ब&#2375;ल&#2381;ट क&#2368; ल&#2366;इफ बढ&#2364; ज&#2366;त&#2368; ह&#2376;","<span class='notranslate'>(D) Life of belt decreases </span>| ब&#2375;ल&#2381;ट क&#2368; ल&#2366;इफ कम ह&#2379; ज&#2366;त&#2368; ह&#2376;"],
answer:3,
},
{
question:"<span class='notranslate'>Q. How to reduce the slip in belt drive caused between the belt and pulley? </span>| ब&#2375;ल&#2381;ट और प&#2369;ल&#2368; क&#2375; ब&#2368;च ब&#2375;ल&#2381;ट ड&#2381;र&#2366;इव म&#2375;&#2306; ह&#2379;न&#2375; व&#2366;ल&#2368; स&#2381;ल&#2367;प क&#2379; क&#2376;स&#2375; कम कर&#2375;&#2306;?",
options:["<span class='notranslate'>(A) By reducing the pulley ratio </span>| प&#2369;ल&#2368; क&#2368; अन&#2369;प&#2366;त क&#2379; कम करक&#2375;","<span class='notranslate'>(B) By increasing the pulley ratio </span>| प&#2369;ल&#2368; क&#2368; अन&#2369;प&#2366;त क&#2379; बढ&#2364;&#2366;कर","<span class='notranslate'>(C) By dressing the pulley </span>| प&#2369;ल&#2368; क&#2368; ड&#2381;र&#2375;स&#2367;&#2306;ग करक&#2375;","<span class='notranslate'>(D) By applying hard coating on pulleys </span>| प&#2369;ल&#2368; पर कठ&#2379;र ल&#2375;प लग&#2366;न&#2375; स&#2375;"],
answer:0,
},
{
question:"<span class='notranslate'>Q. What is the name of jig? </span>| इस ज&#2367;ग क&#2366; न&#2366;म क&#2381;य&#2366; ह&#2376;?<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjwPm1-4jLib3sJveapeYjzPxWx2GTMS5ca_4djuPgbknl1ZHFUXphssROr-7af9lwUJuKTe4XP3VdEYZT_5SOROcE0sYWUtc5_4fnFpZdO4qKuWuUkhVEUUIeVc7fQk3eITEJwQwVwhuG2NRHP4ha9rAbBtO2qa8MKtiLt1DrwH4IYBgGGaQQPJ-hXaojX/s1600/FIT2-7-146.JPG'>",
options:["<span class='notranslate'>(A) Post jig </span>| प&#2379;स&#2381;ट ज&#2367;ग","<span class='notranslate'>(B) Solid jig </span>| स&#2377;ल&#2367;ड ज&#2367;ग","<span class='notranslate'>(C) Channel jig </span>| च&#2376;नल ज&#2367;ग","<span class='notranslate'>(D) Trunnion jig </span>| ट&#2381;र&#2370;न&#2367;यन ज&#2367;ग"],
answer:2,
},
{
question:"<span class='notranslate'>Q. What is the name of fixture? </span>| इस फ&#2367;क&#2381;स&#2381;चर क&#2366; न&#2366;म क&#2381;य&#2366; ह&#2376;?<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgqpT3B_3qtRzHDGK9CZWiAMTdrIHEszmQn-LeXf5E-Fzbuu6DUUAul0uTC-3CNim2T4tzsvGK41gNnqS4UuUwZA1dRQAgQbXosB7vmSNxIbs7-T8-h0NCA4mNOVZv-QPjVmzCyFUmOWrgKtZU0IeVTXBeaIyN1GtsZBjwLP7ip26iNKcvKSvvA9YffAQ0q/s320/FIT2-7-154.JPG'>",
options:["<span class='notranslate'>(A) Vice fixture </span>| व&#2366;ईस फ&#2367;क&#2381;स&#2381;चर","<span class='notranslate'>(B) Solid fixture </span>| स&#2377;ल&#2367;ड फ&#2367;क&#2381;स&#2381;चर","<span class='notranslate'>(C) Plate fixture </span>| प&#2381;ल&#2375;ट फ&#2367;क&#2381;स&#2381;चर","<span class='notranslate'>(D) Indexing fixture </span>| इ&#2306;ड&#2375;क&#2381;स&#2367;&#2306;ग फ&#2367;क&#2381;स&#2381;चर"],
answer:3,
},
{
question:"<span class='notranslate'>Q. What is the reason for standard brass is one type of brass and suitable for most engineering process? </span>| क&#2381;य&#2366; क&#2366;रण ह&#2376; क&#2367; म&#2366;नक प&#2368;तल एक प&#2381;रक&#2366;र क&#2366; प&#2368;तल ह&#2376; और अध&#2367;क&#2366;&#2306;श इ&#2306;ज&#2368;न&#2367;यर&#2367;&#2306;ग प&#2381;रक&#2381;र&#2367;य&#2366; क&#2375; ल&#2367;ए उपय&#2369;क&#2381;त ह&#2376;?",
options:["<span class='notranslate'>(A) Suitable for hot working </span>| गर&#2381;म क&#2366;म क&#2375; ल&#2367;ए उपय&#2369;क&#2381;त","<span class='notranslate'>(B) Having most ductile property </span>| सर&#2381;व&#2366;ध&#2367;क तन&#2381;य ग&#2369;ण व&#2366;ल&#2366;","<span class='notranslate'>(C) Suitable for cold working </span>| ठ&#2306;ड&#2375; क&#2366;म क&#2375; ल&#2367;ए उपय&#2369;क&#2381;त","<span class='notranslate'>(D) Having less ductile property </span>| कम तन&#2381;य ग&#2369;ण व&#2366;ल&#2366; ह&#2379;न&#2366;"],
answer:3,
},
{
question:"<span class='notranslate'>Q. What is the name of part marked &#8216;x&#8217; in the belt drive? </span>| ब&#2375;ल&#2381;ट ड&#2381;र&#2366;इव म&#2375;&#2306; ʹXʹ क&#2375; र&#2370;प स&#2375; च&#2367;न&#2381;ह&#2367;त भ&#2366;ग क&#2366; न&#2366;म क&#2381;य&#2366; ह&#2376;?<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjzkLakzBpnXflDAOxBV8rQ7-raG6Zk43-nQ_PBLe6ozV_64ojsFDiusLbflmv5N1jD_lkwSQRf8V31mks2Abi9HYcuD-u7r5VmaWJWowkapHkkqlDo2ETDyLhkQU04UALboPkNlUmFUOsb7UTd4jUDfiFFTyx3KXAX1ovP2V3sTsVr2fLusYn7b63lvaaf/s320/FIT2-7-159.JPG'>",
options:["<span class='notranslate'>(A) Step pulley </span>| स&#2381;ट&#2375;प प&#2369;ल&#2381;ल&#2368;","<span class='notranslate'>(B) Driver pulley </span>| ड&#2381;र&#2366;इवर प&#2369;ल&#2381;ल&#2368;","<span class='notranslate'>(C) Driven pulley </span>| ड&#2381;र&#2367;वन प&#2369;ल&#2381;ल&#2368;","<span class='notranslate'>(D) Jockey pulley </span>| ज&#2377;क&#2368; प&#2369;ल&#2381;ल&#2368;"],
answer:3,
},
{
question:"<span class='notranslate'>Q. What is the purpose of setting blocks used in the fixture? </span>| फ&#2367;क&#2381;स&#2381;चर म&#2375;&#2306; उपय&#2379;ग क&#2367;ए ज&#2366;न&#2375; व&#2366;ल&#2375; स&#2375;ट&#2367;&#2306;ग ब&#2381;ल&#2366;क क&#2366; उद&#2381;द&#2375;श&#2381;य क&#2381;य&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Position the balancing weight </span>| स&#2306;त&#2369;लन वजन क&#2368; स&#2381;थ&#2367;त&#2367;","<span class='notranslate'>(B) Position the clamp and locators </span>| क&#2381;ल&#2376;&#2306;प और ल&#2379;क&#2375;टर क&#2368; स&#2381;थ&#2367;त&#2367;","<span class='notranslate'>(C) Position the fixture on machine table </span>| मश&#2368;न क&#2368; म&#2375;ज पर स&#2381;थ&#2367;रत&#2366; क&#2368; स&#2381;थ&#2367;त&#2367;","<span class='notranslate'>(D) Position the fixture and work related to cutter </span>| कटर स&#2375; स&#2306;ब&#2306;ध&#2367;त स&#2381;थ&#2367;रत&#2366; और क&#2366;म क&#2368; स&#2381;थ&#2367;त&#2367;"],
answer:3,
},
{
question:"<span class='notranslate'>Q. What is the name of alloy consist copper and zinc? </span>| उस म&#2367;श&#2381;र ध&#2366;त&#2369; क&#2366; क&#2381;य&#2366; न&#2366;म ह&#2376; ज&#2367;सम&#2375;&#2306; त&#2366;&#2306;ब&#2366; और जस&#2381;त&#2366; ह&#2379;त&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Aluminium </span>| एल&#2381;य&#2369;म&#2368;न&#2367;यम","<span class='notranslate'>(B) Gunmetal </span>| गनम&#2375;टल","<span class='notranslate'>(C) Brass </span>| प&#2368;तल","<span class='notranslate'>(D) Bronze </span>| क&#2366;&#2306;स&#2366;"],
answer:2,
},
{
question:"<span class='notranslate'>Q. Why copper is extensively used in electrical cables and appliances? </span>| व&#2367;द&#2381;य&#2369;त क&#2375;बल&#2379;&#2306; और उपकरण&#2379;&#2306; म&#2375;&#2306; त&#2366;&#2306;ब&#2375; क&#2379; बड&#2364;&#2375; प&#2376;म&#2366;न&#2375; पर उपय&#2379;ग क&#2381;य&#2379;&#2306; क&#2367;य&#2366; ज&#2366;त&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Ductile metal </span>| तन&#2381;य ध&#2366;त&#2369;","<span class='notranslate'>(B) Cheap in cost </span>| ल&#2366;गत म&#2375;&#2306; सस&#2381;त&#2366;","<span class='notranslate'>(C) Easy soldering </span>| आस&#2366;न स&#2379;ल&#2381;डर&#2367;&#2306;ग","<span class='notranslate'>(D) Good conductor </span>| ग&#2369;ड क&#2306;डक&#2381;टर"],
answer:3,
},
{
question:"<span class='notranslate'>Q. What is the name of belt fastener? </span>| ब&#2375;ल&#2381;ट फ&#2366;स&#2381;टनर क&#2366; क&#2381;य&#2366; न&#2366;म ह&#2376;?<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEimYqqKENHNvyTcFqKozinalQwbYH0BxOnxFS_Mnx40rtd2Ec4V_W5agG2kFdzgFgF2lwdCF3Yas4LpsOroILuJXCTO_G62iYoybDw3YX15MaB5bz3atKeWzkmIyP5jR1OchtnODqkOZMsIM0m3OjF-1YdWJY4Fo6d9Rc2e1IN525yhV2iqef4lfwKSaoLO/s320/FIT2-7-158.JPG'>",
options:["<span class='notranslate'>(A) Wire type </span>| व&#2366;यर ट&#2366;इप","<span class='notranslate'>(B) Lagrelle type </span>| लगर&#2376;ल&#2366; ट&#2366;इप","<span class='notranslate'>(C) Alligator type </span>| एल&#2368;ग&#2375;टर ट&#2366;इप","<span class='notranslate'>(D) Crescent plate type </span>| क&#2381;र&#2367;स&#2375;&#2306;ट प&#2381;ल&#2375;ट ट&#2366;इप"],
answer:2,
},
{
question:"<span class='notranslate'>Q. What is the name of metal alloy of lead, tin, copper and antimony? </span>| स&#2368;स&#2366;, ट&#2367;न, त&#2366;&#2306;ब&#2366; और ए&#2306;ट&#2368;मन&#2368; क&#2375; म&#2367;श&#2381;र ध&#2366;त&#2369; क&#2366; न&#2366;म क&#2381;य&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Bronze </span>| प&#2368;तल","<span class='notranslate'>(B) Gilding metal </span>| ग&#2381;ल&#2366;इड&#2367;&#2306;ग म&#2375;टल","<span class='notranslate'>(C) Babbitt metal </span>| ब&#2375;ब&#2367;ट म&#2375;टल","<span class='notranslate'>(D) Leaded bronze </span>| ल&#2368;ड&#2375;ड ब&#2381;र&#2379;&#2306;ज"],
answer:2,
},
{
question:"<span class='notranslate'>Q. What is the name of jig? </span>| इस ज&#2367;ग क&#2366; न&#2366;म क&#2381;य&#2366; ह&#2376;?<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEieUAvK38d35h3RwQS0YU3dM2LTfYGZ7mnfn0y8tTrm3c7aDwmTIpXMK-nlv-abPaowh9CDO9p5SEcIQFNKiEOc9HsyhKI4EI-guCSUOKPQ0j_1z-T2e947D7QZe01FW9ZXyu9WIHO0Pem61CTUKpKfohWFbqrfsIS2mc3kc1we2xjGVJ6cl1SJPRAKPuiR/s1600/FIT2-7-144.JPG'>",
options:["<span class='notranslate'>(A) Box jig </span>| ब&#2377;क&#2381;स ज&#2367;ग","<span class='notranslate'>(B) Post jig </span>| प&#2379;स&#2381;ट ज&#2367;ग","<span class='notranslate'>(C) Turn over jig </span>| टर&#2381;न ओवर ज&#2367;ग","<span class='notranslate'>(D) Sandwich jig </span>| स&#2376;&#2306;डव&#2367;च ज&#2367;ग"],
answer:2,
},
{
question:"<span class='notranslate'>Q. Which type of belt is used if the distance between the shafts are too short? </span>| यद&#2367; श&#2366;फ&#2381;ट क&#2375; ब&#2368;च क&#2368; द&#2370;र&#2368; बह&#2369;त कम ह&#2376;, त&#2379; क&#2367;स प&#2381;रक&#2366;र क&#2368; ब&#2375;ल&#2381;ट क&#2366; उपय&#2379;ग क&#2367;य&#2366; ज&#2366;त&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) V&#8217; belt </span>| V ʹब&#2375;ल&#2381;ट","<span class='notranslate'>(B) Flat belt </span>| फ&#2381;ल&#2376;ट ब&#2375;ल&#2381;ट","<span class='notranslate'>(C) Link belt </span>| ल&#2367;&#2306;क ब&#2375;ल&#2381;ट","<span class='notranslate'>(D) Ribbed belt </span>| र&#2367;ब&#2381;ड ब&#2375;ल&#2381;ट"],
answer:0,
}]
},

{
 category:"<span class='notranslate'>Module 8  ʹVʹ Belt </span>| V ब&#2375;ल&#2381;ट ",
 quizWrap:[{
question:"<span class='notranslate'>Q. Which coupling provides rigid connection between two shafts? </span>| क&#2367;स प&#2381;रक&#2366;र क&#2366; कपल&#2367;&#2306;ग श&#2366;फ&#2381;ट क&#2375; छ&#2379;र क&#2379; प&#2370;र&#2381;ण स&#2306;र&#2375;खण म&#2375;&#2306; ल&#2366; सकत&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Fast coupling </span>| फ&#2366;स&#2381;ट कपल&#2367;&#2306;ग","<span class='notranslate'>(B) Clamp coupling </span>| क&#2381;ल&#2376;&#2306;प कपल&#2367;&#2306;ग","<span class='notranslate'>(C) Safety coupling </span>| स&#2375;फ&#2381;ट&#2368; कपल&#2367;&#2306;ग","<span class='notranslate'>(D) Universal coupling </span>|  य&#2370;न&#2367;वर&#2381;सल कपल&#2367;&#2306;ग"],
answer:0,
},
{
question:"<span class='notranslate'>Q. Where universal coupling is used? </span>| य&#2370;न&#2367;वर&#2381;सल कपल&#2367;&#2306;ग क&#2366; उपय&#2379;ग कह&#2366;&#2306; क&#2367;य&#2366; ज&#2366;त&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Automobile vehicles </span>| ऑट&#2379;म&#2379;ब&#2366;इल व&#2366;हन म&#2375;","<span class='notranslate'>(B) Textiles mills </span>| कपड&#2375; म&#2367;ल म&#2375;","<span class='notranslate'>(C) Engineering machines </span>| इ&#2306;ज&#2368;न&#2367;यर&#2367;&#2306;ग मश&#2368;न&#2375;&#2306; म&#2375;","<span class='notranslate'>(D) Large angle drive </span>| ल&#2366;र&#2381;ज ए&#2306;गल ड&#2381;र&#2366;इव म&#2375;"],
answer:0,
},
{
question:"<span class='notranslate'>Q. Why the face of pulley is &#8220;Crowned&#8221; in power transmission? </span>| प&#2377;वर ट&#2381;र&#2366;&#2306;सम&#2367;शन म&#2375;&#2306; प&#2369;ल&#2368; क&#2366; फ&#2375;स ʺक&#2381;र&#2366;उनʺ क&#2381;य&#2379;&#2306; ह&#2379;त&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Increase the tension </span>| तन&#2366;व बढ&#2364;&#2366;न&#2375; क&#2375; ल&#2367;ए","<span class='notranslate'>(B) Decrease the tension </span>| तन&#2366;व कम करन&#2375; क&#2375; ल&#2367;ए","<span class='notranslate'>(C) Keep the belt centralised </span>| ब&#2375;ल&#2381;ट क&#2379; क&#2375;&#2306;द&#2381;र&#2368;क&#2371;त रखन&#2375; क&#2375; ल&#2367;ए","<span class='notranslate'>(D) Allow the pulley free rotation </span>| प&#2369;ल&#2381;ल&#2368; क&#2379; फ&#2381;र&#2368;ल&#2368; घ&#2369;मन&#2375; क&#2375; ल&#2367;ए"],
answer:2,
},
{
question:"<span class='notranslate'>Q. Which belt slip less in power transmission? </span>| प&#2366;वर ट&#2381;र&#2366;&#2306;सम&#2367;शन म&#2375;&#2306; क&#2380;न स&#2368; ब&#2375;ल&#2381;ट कम फ&#2367;सलत&#2368; ह&#2376;?",
options:["<span class='notranslate'>(A) &#8220;V&#8221; belt </span>| Vʹ ब&#2375;ल&#2381;ट","<span class='notranslate'>(B) Flat belt </span>| फ&#2381;ल&#2376;ट ब&#2375;ल&#2381;ट","<span class='notranslate'>(C) Link belt </span>| ल&#2367;&#2306;क ब&#2375;ल&#2381;ट","<span class='notranslate'>(D) Ribbed belt </span>| र&#2367;ब&#2381;ड ब&#2375;ल&#2381;ट"],
answer:0,
},
{
question:"<span class='notranslate'>Q. What is the name of clutch? </span>| क&#2381;लच क&#2366; न&#2366;म क&#2381;य&#2366; ह&#2376;?<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj377N4UYVi5CVltLmcdwIUHxcQt8V3UsYzTIFbIRzFSXjEkuribAOheRqlj8Lvmy-bRAN69y1NaFUxmUWjbKD26NMisY5zfgATcjL29mIgPjVgqo2pzKd-Z1PX6XW6dZH_He2I06R2g0SwWjDGCHzNuaRdvL_TyIrAzQ7l8iQmyke70lYeRj-pk_cBaxMU/s1600/FIT2-8-196.JPG'>",
options:["<span class='notranslate'>(A) Air clutch </span>| एयर क&#2381;लच","<span class='notranslate'>(B) Cone clutch </span>| क&#2379;न क&#2381;लच","<span class='notranslate'>(C) Centrifugal clutch </span>| स&#2375;न&#2381;ट&#2381;र&#2368;फ&#2381;य&#2370;गल क&#2381;लच","<span class='notranslate'>(D) Over riding clutch </span>| ओवर र&#2366;इड&#2367;&#2306;ग क&#2381;लच"],
answer:2,
},
{
question:"<span class='notranslate'>Q. What is the name of the part marked &#8216;x&#8217; in gear? </span>| ग&#2367;यर म&#2375;&#2306; ʹXʹ क&#2375; र&#2370;प स&#2375; च&#2367;न&#2381;ह&#2367;त भ&#2366;ग क&#2366; न&#2366;म क&#2381;य&#2366; ह&#2376;?<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi20Uo_BJO3fl0GxIeAVYOuDhLlF3YGY1X0aadrqbasSNL8NmyLs1Udic4E3dIgkRjAHRpnvEnDhqOdEmd8Y4CKl9PEBZlX50CDBb0S9IZxVl7GXq8hkjqCqzrb-uJEM1QDY1gRzrRTTfVE6Osswxlh9RfIQoK4xByMPVH-zETSWspAj49yx8XL3I-4q98H/s320/FIT2-8-171.JPG'>",
options:["<span class='notranslate'>(A) Pitch line </span>| प&#2367;च ल&#2366;इन","<span class='notranslate'>(B) Dedendum </span>| ड&#2367;ड&#2375;&#2306;डम","<span class='notranslate'>(C) Addendum </span>| अड&#2381;ड&#2375;&#2306;डम","<span class='notranslate'>(D) Face width </span>| फ&#2375;स क&#2368; च&#2380;ड&#2364;&#2366;ई"],
answer:3,
},
{
question:"<span class='notranslate'>Q. What is the name of the coupling? </span>| कपल&#2367;&#2306;ग क&#2366; न&#2366;म क&#2381;य&#2366; ह&#2376;?<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgb-SCksn9LDE0kppFUGFlEcrk5VZ0lVsDMnlxkP8nCwk876B1blB9X5ISqlAZM0PIUzLhJy-bk3jBda9pFRW-prndesDaNxxV5b4wdK9lysM7e4-9GotZUdwDWcdZa6IoDVaa5mIhGdZLzBm2_M7wyoCiX-3K2NkPJUJnAvsONDi9-EnAigbC4J4ncuNj3/s320/FIT2-8-178.JPG'>",
options:["<span class='notranslate'>(A) Slip coupling </span>|  स&#2381;ल&#2367;प कपल&#2367;&#2306;ग","<span class='notranslate'>(B) Plate coupling </span>| प&#2381;ल&#2375;ट कपल&#2367;&#2306;ग","<span class='notranslate'>(C) Clamp coupling </span>| क&#2381;ल&#2376;&#2306;प कपल&#2367;&#2306;ग","<span class='notranslate'>(D) Universal coupling </span>| य&#2370;न&#2367;वर&#2381;सल कपल&#2367;&#2306;ग"],
answer:3,
},
{
question:"<span class='notranslate'>Q. Which type of drive is used for shortest distance and for large amount of power transmission? </span>| ल&#2306;ब&#2368; द&#2370;र&#2368; क&#2375; ल&#2367;ए और बड&#2364;&#2368; म&#2366;त&#2381;र&#2366; म&#2375; शक&#2381;त&#2367; स&#2306;चरण क&#2375; ल&#2367;ए क&#2367;स प&#2381;रक&#2366;र क&#2368; ड&#2381;र&#2366;इव क&#2366; उपय&#2379;ग क&#2367;य&#2366; ज&#2366;त&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Belt drives </span>| ब&#2375;ल&#2381;ट ड&#2381;र&#2366;इव","<span class='notranslate'>(B) Gear drives </span>| ग&#2367;यर ड&#2381;र&#2366;इव","<span class='notranslate'>(C) Rope drives </span>| र&#2379;प ड&#2381;र&#2366;इव","<span class='notranslate'>(D) Chain drives </span>|  च&#2375;न ड&#2381;र&#2366;इव"],
answer:1,
},
{
question:"<span class='notranslate'>Q. What is the name of the part marked as &#8216;x&#8217; of gear? </span>| ग&#2367;यर क&#2375; X &#8217;क&#2375; र&#2370;प म&#2375;&#2306; च&#2367;ह&#2381;न&#2367;त भ&#2366;ग क&#2366; न&#2366;म क&#2381;य&#2366; ह&#2376;?<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj9KYqDStV3tCt-huc-Ea9mJZ0XXO5nPu3xeOh9Yj7AbjKfQ7zToJccZujZlLeobOpEJYrWIOOW8ES6nrL1sWIJvZiKWrbdIUYaod9BYP-ukruJpsgL4n5MmUH8Tz1MJj4sHHBUyioHaBQi46RMX9rvokdhOJKGmup3dxlYFI03pD8Zz2EiQEHHQgzrScIU/s320/FIT2-8-177.JPG'>",
options:["<span class='notranslate'>(A) Flank </span>| फ&#2381;ल&#2375;&#2306;क","<span class='notranslate'>(B) Addendum </span>| अड&#2381;ड&#2375;&#2306;डम","<span class='notranslate'>(C) Face width </span>| फ&#2375;स क&#2368; च&#2380;ड&#2364;&#2366;ई","<span class='notranslate'>(D) Root circle </span>| र&#2369;ट सर&#2381;क&#2367;ल"],
answer:1,
},
{
question:"<span class='notranslate'>Q. What is the formula to calculate open belt length if centre distance is X? </span>| यद&#2367; क&#2375;&#2306;द&#2381;र द&#2370;र&#2368; X ह&#2376; त&#2379; ओपन ब&#2375;ल&#2381;ट क&#2368; ल&#2306;ब&#2366;ई क&#2368; गणन&#2366; करन&#2375; क&#2366; स&#2370;त&#2381;र क&#2381;य&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) <img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiZofuzx2LKVvkesiE2XZ9022wswk5y849KgZORWyUP0rGPGt0CnE8MQwwbv_TXhkfF3d870KlGJkwJJ-9McdT3yjICwzkT548ClsyWBVkY4_BlwRm-YIqSlUokUdj37sX4NhZBHY_dj_L4vAuCpZuquh0K59g3bxZlzDR-koNxqWxC-RMrxcL_-bC2__3v/s1600/FIT2-8-183A.JPG'>","<span class='notranslate'>(B) <img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh358mYkwXpAmnid8ZUzO3fmMGXillfFEJJxR7Ae9pwRFhyphenhyphen17DSMO-twfrYdf0OFRVTKE_1m6CE-4fXG6bMDlQu2hmOuKGwERZVsum3jqrC_7ZfLyUcIOOoOEfwvqDKzStES89IYhE8MUpdK2D3LHIv2aDMeAMjBUEA4WkpzCnEjLjjzspTHlrtWC3AgYUQ/s1600/FIT2-8-183B.JPG'>","<span class='notranslate'>(C) <img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjlp4-PdbUlD62d8tVsQa2WZnG5Yn5abFMomJWmLvBIG_S2s8jhOZAWOM3QdKwng-FzK08HCLhyphenhyphenbmsyi4J2XRCEu5G1gWBa4fdBdDvj4AWI2mRCjFSm3ucsXqmSQ2h0BD-xkRZKPCB4ZyPAtTVVOh0vYyNSKM2dH9K-GY28gmWOGhvLtjgh_Y5JLKFjd40X/s1600/FIT2-8-183C.JPG'>","<span class='notranslate'>(D) <img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgQH72lmKWmVDqHFqDMSmQqvTLuuNprzdPwGJAGTX3sV7PmMkScHJsLCkya9qxWRAP-8iPKbimvOrbU5XtopnrQ3KZGyjmlw2AKlLR7yNV8f0qHvKnDGVYjeqPhjFKwZpYIQpioH2nKPWvvlfd9wpp3qhpG1Byo8Za-VzMUvX8S98JRbWq6KVZTwsN2-Y97/s1600/FIT2-8-183D.JPG'>"],
answer:2,
},
{
question:"<span class='notranslate'>Q. Which type of belt drive, the driven shaft will rotate in opposite direction to driver shaft? </span>| क&#2367;स प&#2381;रक&#2366;र क&#2366; ब&#2375;ल&#2381;ट ड&#2381;र&#2366;इव, स&#2306;च&#2366;ल&#2367;त श&#2366;फ&#2381;ट च&#2366;लक श&#2366;फ&#2381;ट क&#2375; व&#2367;पर&#2368;त द&#2367;श&#2366; म&#2375;&#2306; घ&#2369;म&#2366;एग&#2366;?",
options:["<span class='notranslate'>(A) Stepped drive </span>| स&#2381;&#8205;ट&#2375;पड ड&#2381;र&#2366;इव","<span class='notranslate'>(B) Open belt drive </span>| ओपन ब&#2375;ल&#2381;ट ड&#2381;र&#2366;इव","<span class='notranslate'>(C) Cross belt drive </span>| क&#2381;र&#2377;स ब&#2375;ल&#2381;ट ड&#2381;र&#2366;इव","<span class='notranslate'>(D) Right angled belt drive </span>| र&#2366;इट ए&#2306;गल&#2381;ड ब&#2375;ल&#2381;ट ड&#2381;र&#2366;इव"],
answer:2,
},
{
question:"<span class='notranslate'>Q. What is the name of the coupling? </span>| कपल&#2367;&#2306;ग क&#2366; न&#2366;म क&#2381;य&#2366; ह&#2376;?<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi_IvFujS-d-90RlLTXbVhoFc-6LyX49HcEZLE1vbTqqmHaeE1xKnXxgf5FnhYV0YlvFtIwmlHmQUc7bFTGTG6ys0-0XhR1ze8iOgnavdp0HQqdwAAGMA4Vp6RdMY0DHf_YnVW6zq7CdfYNvF-9Oiieu18XS_OZDDDAZz8iWsDd6eFEn6j1wBeD88joukxX/s1600/FIT2-8-172.JPG'>",
options:["<span class='notranslate'>(A) Slip coupling </span>| स&#2381;ल&#2367;प कपल&#2367;&#2306;ग","<span class='notranslate'>(B) Plate coupling </span>| प&#2381;ल&#2375;ट कपल&#2367;&#2306;ग","<span class='notranslate'>(C) Clamp coupling </span>| क&#2381;ल&#2376;&#2306;प कपल&#2367;&#2306;ग","<span class='notranslate'>(D) Universal coupling </span>| य&#2370;न&#2367;वर&#2381;सल कपल&#2367;&#2306;ग"],
answer:3,
},
{
question:"<span class='notranslate'>Q. What is the name of pulley? </span>| इस प&#2369;ल&#2381;ल&#2368; क&#2375; प&#2381;रक&#2366;र क&#2366; न&#2366;म बत&#2366;इए?<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi29-5TODuNd4uU4kCzed7bVIEaaYHycVb1azU0Dh0rr8EjOSIUquJEHrD-lH7xlfcO7wKeeUfVRNKssK8x6xHMp3JtQqjbsmt7K7kQbqiW-Ycy5vcfQaKoAcG42zAsFgbbNRFCIJw9HGj-Db_ibxVfoTVKvo8FD32YwpgbaU7wci6zDXbRH8hmW7KKupSU/s1600/FIT2-8-184.JPG'>",
options:["<span class='notranslate'>(A) Step pulley </span>| स&#2381;&#8205;ट&#2375;प प&#2369;ल&#2381;ल&#2368;","<span class='notranslate'>(B) Flat pulley </span>| फ&#2381;ल&#2376;ट प&#2369;ल&#2381;ल&#2368;","<span class='notranslate'>(C) V groove pulley </span>| व&#2368; ग&#2381;र&#2370;व प&#2369;ल&#2381;ल&#2368;","<span class='notranslate'>(D) Fast and loose pulley </span>| फ़&#2366;स&#2381;ट और ल&#2370;स प&#2369;ल&#2381;ल&#2368;"],
answer:1,
},
{
question:"<span class='notranslate'>Q. What is marked as ʹXʹ? </span>| Xʹ क&#2375; र&#2370;प म&#2375;&#2306; क&#2381;य&#2366; च&#2367;ह&#2381;न&#2367;त ह&#2376;?<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiUn1aN7WMOatT0aMW3hqow-ZFlH2CzAmmNZrxSwvjP0_8SCD5WjotJPA074EXuj6emS-_GvGqi8Xh2gMjJ3dxJlhL3nTLjsIjx1wiRZzvm23xrANWGNcfjqeNrE874JBY8xG3MzI_C00QC5f94_KdaaRdc3MS_fAwF3SMzfD58aepfI0C5or6ZznYiThyphenhyphenw/s320/FIT2-8-189.JPG'>",
options:["<span class='notranslate'>(A) Key </span>| क&#2368;","<span class='notranslate'>(B) Shaft </span>| श&#2366;फ&#2364;&#2381;ट","<span class='notranslate'>(C) Coupling </span>| कपल&#2367;&#2306;ग","<span class='notranslate'>(D) Bolt </span>| ब&#2379;ल&#2381;&#8205;ट"],
answer:0,
},
{
question:"<span class='notranslate'>Q. Which is the imaginary circle on two matting gears? </span>| द&#2379; म&#2376;ट&#2367;&#2306;ग ग&#2367;यर पर क&#2366;ल&#2381;पन&#2367;क सर&#2381;कल क&#2380;न स&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Root circle </span>| र&#2370;ट सर&#2381;कल","<span class='notranslate'>(B) Pitch circle </span>| प&#2367;च सर&#2381;कल","<span class='notranslate'>(C) Base circle </span>| ब&#2375;स सर&#2381;कल","<span class='notranslate'>(D) Addendum circle </span>| अड&#2381;ड&#2375;&#2306;डम चक&#2381;र"],
answer:1,
},
{
question:"<span class='notranslate'>Q. What is the name of the clutch? </span>| इस क&#2381;लच क&#2366; न&#2366;म क&#2381;य&#2366; ह&#2376;?<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgRiki3LUQhd21XF5utgInaHttnpjlRdffd_qzQGWZQAfETX3PJyltWDcbzDFkC0u7fah82U3cm9x2k_FTxyCyOIkGfOepsHBODIYAAe9pKmpkM29uPLnUi_xCupNHwSueIexgTjtKI6TB0WBsTOoqAIsQDaN2fZptVkkJouHOa5AMsR4RUekDv1QpnoR-b/s1600/FIT2-8-194.JPG'>",
options:["<span class='notranslate'>(A) Air clutch </span>| एयर क&#2381;लच","<span class='notranslate'>(B) Dog clutch </span>| ड&#2377;ग क&#2381;लच","<span class='notranslate'>(C) Cone clutch </span>| क&#2379;न क&#2381;लच","<span class='notranslate'>(D) Single plate clutch </span>| स&#2367;&#2306;गल प&#2381;ल&#2375;ट क&#2381;लच"],
answer:1,
},
{
question:"<span class='notranslate'>Q. Which gear is Symmetrical to each other and transmit motion at right angle? </span>| क&#2380;न स&#2366; ग&#2367;यर एक द&#2370;सर&#2375; क&#2375; समम&#2367;त ह&#2376; और समक&#2379;ण पर गत&#2367; स&#2306;च&#2366;र&#2367;त करत&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Spur gear </span>| स&#2381;पर ग&#2367;यर","<span class='notranslate'>(B) Mitre gear </span>| म&#2375;टर ग&#2367;यर","<span class='notranslate'>(C) Helical gear </span>| ह&#2375;ल&#2367;कल ग&#2367;यर","<span class='notranslate'>(D) Hypoid gear </span>| ह&#2366;इप&#2379;इड ग&#2367;यर"],
answer:1,
},
{
question:"<span class='notranslate'>Q. Which pulley can transmit the power to shaft different heights and at varying distance? </span>| क&#2380;न स&#2368; प&#2369;ल&#2381;ल&#2368; व&#2367;भ&#2367;न&#2381;न ऊ&#2305;च&#2366;इय&#2379;&#2306; पर और अलग-अलग द&#2370;र&#2368; पर श&#2366;फ&#2381;ट क&#2379; शक&#2381;त&#2367; स&#2306;च&#2366;र&#2367;त कर सकत&#2368; ह&#2376;?",
options:["<span class='notranslate'>(A) Flat pulleys </span>| फ&#2381;ल&#2376;ट प&#2369;ल&#2381;ल&#2368;","<span class='notranslate'>(B) Rope pulleys </span>| र&#2379;प प&#2369;ल&#2381;ल&#2368;","<span class='notranslate'>(C) V groove pulleys </span>| व&#2368; ग&#2381;र&#2370;व प&#2369;ल&#2381;ल&#2368;","<span class='notranslate'>(D) Fast and loose pulleys </span>| फ़&#2366;स&#2381;ट और ल&#2370;स प&#2369;ल&#2381;ल&#2368;"],
answer:1,
},
{
question:"<span class='notranslate'>Q. How to improve the gripping property of the dried belt? </span>| स&#2370;ख&#2375; ब&#2375;ल&#2381;ट क&#2368; ग&#2381;र&#2367;प&#2367;&#2306;ग प&#2377;वर क&#2379; क&#2376;स&#2375; स&#2369;ध&#2366;र&#2375;?",
options:["<span class='notranslate'>(A) Jockey pulley </span>| ज&#2377;क&#2368; प&#2369;ल&#2368;","<span class='notranslate'>(B) Apply powdered resin </span>| प&#2368;स&#2366; ह&#2369;आ र&#2375;ज&#2367;न लग&#2366;ए&#2306;","<span class='notranslate'>(C) Reduce the distance between pulleys </span>| प&#2369;ल&#2368; क&#2375; ब&#2368;च क&#2368; द&#2370;र&#2368; कम कर&#2375;&#2306;","<span class='notranslate'>(D) Increase the distance between pulleys </span>| प&#2369;ल&#2368; क&#2375; ब&#2368;च क&#2368; द&#2370;र&#2368; बढ&#2364;&#2366;ए&#2305;"],
answer:1,
},
{
question:"<span class='notranslate'>Q. What is the name of clutch? </span>| इस क&#2381;लच क&#2375; प&#2381;रक&#2366;र क&#2379; न&#2366;म द&#2375;&#2306;&#2404;<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiMjvXTsuR3FCPMj_aENGii99RPRL3J-l6RaKcJdz3whBWnYHhM5_wg2UJuSEWyHS6UYTWmZefLLaB4WHH3GWZBH9IBbOSYAiIfP3lXYGLZimAbugGLMLK9xHdOoIrI8m_1k0IQZ0dhB9Qt-ftpTV5Z6701xRv697gkzvRyroK5s_RC5-XM-_NoLhYZlSvd/s1600/FIT2-8-195.JPG'>",
options:["<span class='notranslate'>(A) Air clutch </span>| एयर क&#2381;लच","<span class='notranslate'>(B) Multiplate </span>| मल&#2381;ट&#2367;प&#2381;ल&#2375;ट","<span class='notranslate'>(C) Cone clutch </span>| क&#2379;न क&#2381;लच","<span class='notranslate'>(D) Over riding clutch </span>| ओवर र&#2366;इड&#2367;&#2306;ग क&#2381;लच"],
answer:0,
},
{
question:"<span class='notranslate'>Q. What is the name of the part marked &#8216;x&#8217; in fast and loose pulley assembly? </span>| फ़&#2366;स&#2381;ट और ल&#2370;स प&#2369;ल&#2368; अस&#2375;&#2306;बल&#2368; म&#2375;&#2306; ʹXʹ क&#2375; र&#2370;प म&#2375; च&#2367;न&#2381;ह&#2367;त भ&#2366;ग क&#2366; न&#2366;म क&#2381;य&#2366; ह&#2376;?<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhK0536a3Ry6bwDxJe1_I_aymBMB7oZ6rIW0dEs23sa1WoalAvuxgNI7Xgw3JsfF7b6MdROlyxle96VtY6DYbpuKW8gu5FuhHRKOznycSc4CLEwD4FjdK-aGQ6Y6ITvvYmt3GHjHCoNqpb_YmS-zNyJ1jOYctbdxFVn7zfqEVzwlL1gDyWrfoaeQpdwRumG/s320/FIT2-8-174.JPG'>",
options:["<span class='notranslate'>(A) Fast pulley </span>| फ&#2366;स&#2381;&#8205;ट प&#2369;ल&#2368;","<span class='notranslate'>(B) Loose pulley </span>| ल&#2370;ज प&#2369;ल&#2368;","<span class='notranslate'>(C) Crown pulley </span>| क&#2381;र&#2366;उन प&#2369;ल&#2368;","<span class='notranslate'>(D) Flat drive pulley </span>| फ&#2381;ल&#2376;ट ड&#2381;र&#2366;इव प&#2369;ल&#2368;"],
answer:2,
},
{
question:"<span class='notranslate'>Q. What is the part marked as &#8216;x&#8217;? </span>| &#8217;X&#8217; क&#2375; र&#2370;प म&#2375;&#2306; च&#2367;ह&#2381;न&#2367;त भ&#2366;ग क&#2381;य&#2366; ह&#2376;?<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgwScNlu1u6sRrOQ76bsV2cgsqe1tG_3_M86I1iw_jW7pfwvR2WED9-HWDqYAIxXmoWNBogfA7TaOXPMSDs4QupEwkMsCXgZfmtR2tjnKMNA97jo7XbvY7zVAxWUgip_98tNwVK7IZvoS38Pe2YZn_wzVATSaEoGM4PvQNOCqObfLBpHq_nzEbEDXo9Xt8o/s320/FIT2-8-179.JPG'>",
options:["<span class='notranslate'>(A) Fast pulley </span>| फ&#2366;स&#2381;&#8205;ट प&#2369;ल&#2368;","<span class='notranslate'>(B) Crown pulley </span>| क&#2381;र&#2366;उन प&#2369;ल&#2368;","<span class='notranslate'>(C) Loose pulley </span>| ल&#2370;ज प&#2369;ल&#2368;","<span class='notranslate'>(D) Flat drive pulley </span>| फ&#2381;ल&#2376;ट ड&#2381;र&#2366;इव प&#2369;ल&#2368;"],
answer:2,
},
{
question:"<span class='notranslate'>Q. What is the name of gear? </span>| ग&#2367;यर क&#2366; न&#2366;म क&#2381;य&#2366; ह&#2376;?<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjWAbE9C7O1Sz_w7190pDcaKCXzImsQ79RoDjLOWI96t0wi1QVUWZh3F-oN5Gx66BrtsmtwcXwaoawjChOepmN5qWwxV_uq6VdbVka-3t6x0bLsYlqLSG5kPDqie8IvSYqCilGgdr9hPNYStyzaVOJNaoKcRmJLP7ahb15Bu5OA5w4C2YTbBEkmVyp86gyU/s1600/FIT2-8-193.JPG'>",
options:["<span class='notranslate'>(A) Spur gear </span>| स&#2381;पर ग&#2367;यर","<span class='notranslate'>(B) Mitre gear </span>| म&#2367;टर&#2375; ग&#2367;यर","<span class='notranslate'>(C) Bevel gear </span>| ब&#2375;वल ग&#2367;यर","<span class='notranslate'>(D) Hypoid gear </span>| ह&#2366;इप&#2379;इड ग&#2367;यर"],
answer:0,
},
{
question:"<span class='notranslate'>Q. What is the name of the part marked as &#8216;X&#8217;? </span>| X ʹ &#8217;क&#2375; र&#2370;प म&#2375;&#2306; च&#2367;ह&#2381;न&#2367;त भ&#2366;ग क&#2366; न&#2366;म क&#2381;य&#2366; ह&#2376;?<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEimNQrwOiu_pgqy8YpCX1_AG8jfR6bGUc2JN7dBFqAlfznbQFjAlvq_nSljjyXUl153sBAFFOwey4hrdK3PJit6ETLhp0L0NYUnhY7JVLBBP1xn3Jhk5GS18kw1T9tCCiceujF2TSCVsFEti0XjNAXy4dLTfy8bqLvjSuL-ZwywX7Xm0dYr4CMuthVmAOkB/s1600/FIT2-8-197.JPG'>",
options:["<span class='notranslate'>(A) Inner piece </span>| आत&#2306;र&#2367;क ट&#2369;कड&#2364;&#2366;","<span class='notranslate'>(B) Outer piece </span>| ब&#2366;हर&#2368; ट&#2369;कड&#2364;&#2366;","<span class='notranslate'>(C) Rubbing surface </span>| रगड&#2364; व&#2366;ल&#2368; सतह","<span class='notranslate'>(D) Centrifugal weight </span>| स&#2375;न&#2381;ट&#2381;र&#2368;फ&#2381;य&#2370;गल व&#2375;ट"],
answer:3,
},
{
question:"<span class='notranslate'>Q. Which type of belt length cannot be altered and reused with fastener? </span>| क&#2367;स ब&#2375;ल&#2381;ट म&#2375; उसक&#2368; ल&#2306;ब&#2366;ई क&#2379; बदल&#2366; नह&#2368;&#2306; ज&#2366; सकत&#2366; ह&#2376; और फ&#2366;स&#2381;टनर क&#2375; स&#2366;थ प&#2369;न: उपय&#2379;ग क&#2367;य&#2366; ज&#2366; सकत&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) &#8216;V&#8217; belt </span>| &#8216;V&#8217; ब&#2375;ल&#2381;ट","<span class='notranslate'>(B) Flat belt </span>| फ&#2381;ल&#2376;ट ब&#2375;ल&#2381;ट","<span class='notranslate'>(C) Link belt </span>| ल&#2367;&#2306;क ब&#2375;ल&#2381;ट","<span class='notranslate'>(D) Ribbed belt </span>| र&#2367;ब&#2381;ड ब&#2375;ल&#2381;ट"],
answer:0,
}]
},

{
 category:"<span class='notranslate'>Module 9 Helical gear and Fluid power </span>| प&#2375;चद&#2366;र ग&#2367;यर और द&#2381;रव शक&#2381;त&#2367;",
 quizWrap:[{
question:"<span class='notranslate'>Q. Which is used to fit the blank with gear wheel while repairing broken gear tooth? </span>| ट&#2370;ट&#2375; ह&#2369;ए ग&#2367;यर द&#2366;&#2306;त क&#2368; मरम&#2381;मत करत&#2375; समय ग&#2367;यर व&#2381;ह&#2368;ल क&#2375; स&#2366;थ र&#2367;क&#2381;त स&#2381;थ&#2366;न क&#2379; फ&#2367;ट करन&#2375; क&#2375; ल&#2367;ए क&#2367;सक&#2366; उपय&#2379;ग क&#2367;य&#2366; ज&#2366;त&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Screw </span>| स&#2381;क&#2381;र&#2370;","<span class='notranslate'>(B) Cylindrical pin </span>| ब&#2375;लन&#2366;क&#2366;र प&#2367;न","<span class='notranslate'>(C) Bolt </span>| ब&#2379;ल&#2381;ट","<span class='notranslate'>(D) Dowel pin </span>| ड&#2377;व&#2375;ल प&#2367;न"],
answer:3,
},
{
question:"<span class='notranslate'>Q. How to evaluate the velocity ratio of worm gear? </span>| वर&#2381;म ग&#2367;यर क&#2375; व&#2375;ग अन&#2369;प&#2366;त क&#2366; म&#2370;ल&#2381;य&#2366;&#2306;कन क&#2376;स&#2375; कर&#2375;&#2306;?",
options:["<span class='notranslate'>(A) Number of turns of the worm to 1 turn of the worm wheel </span>| वर&#2381;म चक&#2381;र क&#2375; 1 म&#2379;ड&#2364; तक वर&#2381;म क&#2375; घ&#2369;म&#2366;व&#2379;&#2306; क&#2368; स&#2306;ख&#2381;य&#2366;","<span class='notranslate'>(B) Number of turns of the worm wheel to 1 turn of the worm </span>| वर&#2381;म चक&#2381;र क&#2375; घ&#2369;म&#2366;व&#2379;&#2306; क&#2368; स&#2306;ख&#2381;य&#2366; वर&#2381;म क&#2375; 1 म&#2379;ड&#2364; तक","<span class='notranslate'>(C) Number of starts on the worm </span>| वर&#2381;म पर प&#2381;र&#2366;र&#2306;भ क&#2368; स&#2306;ख&#2381;य&#2366;","<span class='notranslate'>(D) Number of teeth on the worm wheel </span>| वर&#2381;म चक&#2381;र पर द&#2366;&#2306;त&#2379;&#2306; क&#2368; स&#2306;ख&#2381;य&#2366;"],
answer:0,
},
{
question:"<span class='notranslate'>Q. How to rectify the end thrust in helical gears? </span>| प&#2375;चद&#2366;र ग&#2367;यर म&#2375;&#2306; अ&#2306;त&#2367;म ज&#2379;र क&#2379; क&#2376;स&#2375; स&#2369;ध&#2366;र&#2375;&#2306;?",
options:["<span class='notranslate'>(A) By using bevel gear </span>| ब&#2375;वल ग&#2367;यर क&#2366; उपय&#2379;ग करक&#2375;","<span class='notranslate'>(B) By using triple helical gears </span>| ट&#2381;र&#2367;पल ह&#2375;ल&#2367;कल ग&#2367;यर क&#2366; उपय&#2379;ग करक&#2375;","<span class='notranslate'>(C) By using herring bone gears </span>| ह&#2375;र&#2367;&#2306;ग ब&#2379;न ग&#2367;यर&#2381;स क&#2366; उपय&#2379;ग करक&#2375;","<span class='notranslate'>(D) By using single helical gears </span>| एकल प&#2375;चद&#2366;र ग&#2367;यर क&#2366; उपय&#2379;ग करक&#2375;"],
answer:2,
},
{
question:"<span class='notranslate'>Q. What is the cause for rippling in gear tooth? </span>| ग&#2367;यर क&#2375; द&#2366;&#2306;त म&#2375;&#2306; क&#2306;पन क&#2366; क&#2366;रण क&#2381;य&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Extreme tooth loads </span>| द&#2366;&#2306;त&#2379;&#2306; पर अत&#2381;यध&#2367;क भ&#2366;र","<span class='notranslate'>(B) Cyclic loads under high contact stresses </span>| उच&#2381;च स&#2306;पर&#2381;क तन&#2366;व क&#2375; तहत चक&#2381;र&#2368;य भ&#2366;र","<span class='notranslate'>(C) Overload which exceeds tensile strength </span>| अध&#2367;भ&#2366;र ज&#2379; तन&#2381;य शक&#2381;त&#2367; स&#2375; अध&#2367;क ह&#2376;","<span class='notranslate'>(D) Surface irregularities, misalignment of gears </span>| सतह क&#2368; अन&#2367;यम&#2367;तत&#2366;ए&#2306;, ग&#2367;यर क&#2366; गलत स&#2306;र&#2375;खण"],
answer:1,
},
{
question:"<span class='notranslate'>Q. What is the value of bar in metric unit of pressure? </span>| प&#2381;र&#2375;शर क&#2368; म&#2368;ट&#2381;र&#2367;क इक&#2366;ई म&#2375;&#2306; ब&#2366;र क&#2366; म&#2366;न क&#2381;य&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) 1 Kg/mm&#178;","<span class='notranslate'>(B) 1 Kg/cm&#178;","<span class='notranslate'>(C) 1 Kg/m&#178;","<span class='notranslate'>(D) 1 Kg/dm&#178;"],
answer:1,
},
{
question:"<span class='notranslate'>Q. Which gears are used to transmit power between intersecting shafts at right angles? </span>| समक&#2379;ण पर प&#2381;रत&#2367;च&#2381;छ&#2375;द&#2368; श&#2366;फ&#2381;ट&#2379;&#2306; क&#2375; ब&#2368;च शक&#2381;त&#2367; स&#2306;च&#2366;र&#2367;त करन&#2375; क&#2375; ल&#2367;ए क&#2380;न स&#2375; ग&#2367;यर क&#2366; उपय&#2379;ग क&#2367;य&#2366; ज&#2366;त&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Bevel gears </span>| ब&#2375;वल ग&#2367;यर","<span class='notranslate'>(B) Screw gears </span>| स&#2381;क&#2381;र&#2370; ग&#2367;यर","<span class='notranslate'>(C) Worm gears </span>| वर&#2381;म ग&#2367;यर","<span class='notranslate'>(D) Spur gears </span>| स&#2381;पर ग&#2367;यर&#2381;स"],
answer:0,
},
{
question:"<span class='notranslate'>Q. How hydraulic transmission force is controlled? </span>| ह&#2366;इड&#2381;र&#2379;ल&#2367;क ट&#2381;र&#2366;&#2306;सम&#2367;शन बल क&#2376;स&#2375; न&#2367;य&#2306;त&#2381;र&#2367;त ह&#2379;त&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) By air </span>| हव&#2366; स&#2375;","<span class='notranslate'>(B) By gears </span>| ग&#2367;यर&#2381;स द&#2381;व&#2366;र&#2366;","<span class='notranslate'>(C) By fluids </span>| तरल पद&#2366;र&#2381;थ&#2379;&#2306; द&#2381;व&#2366;र&#2366;","<span class='notranslate'>(D) By electric </span>| व&#2367;द&#2381;य&#2369;त द&#2381;व&#2366;र&#2366;"],
answer:2,
},
{
question:"<span class='notranslate'>Q. Which gears are used to transmit power between parallel shafts? </span>| सम&#2366;न&#2366;&#2306;तर श&#2366;फ&#2381;ट क&#2375; ब&#2368;च प&#2377;वर स&#2306;च&#2366;र&#2367;त करन&#2375; क&#2375; ल&#2367;ए क&#2380;न स&#2375; ग&#2367;यर क&#2366; उपय&#2379;ग क&#2367;य&#2366; ज&#2366;त&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Screw gears </span>| स&#2381;क&#2381;र&#2370; ग&#2367;यर","<span class='notranslate'>(B) Worm gears </span>| वर&#2381;म ग&#2367;यर","<span class='notranslate'>(C) Bevel gears </span>| ब&#2375;वल ग&#2367;यर","<span class='notranslate'>(D) Spur gears </span>| स&#2381;पर ग&#2367;यर&#2381;स"],
answer:3,
},
{
question:"<span class='notranslate'>Q. What is the name of the gear? </span>| ग&#2367;यर क&#2366; न&#2366;म क&#2381;य&#2366; ह&#2376;?<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjS8WKdnRxkoH2nccLpseyRnsGzSWxIlfg3EZIv2biJB1hYZMYfHN2OP0Qez076v-AhpC1nlBqXqICf8ald1EPap5yKoLofVR6DGVg_pVJnpaW0YUVDd-Rx4ja93sft75qrDn_R2tSq1EwjHq9FLQ8FGk39oBYlRv7iUYDiNDc6nk5bjR6akBl-Zgdiz6o5/s1600/FIT2-9-198.JPG'>",
options:["<span class='notranslate'>(A) Mitre gear </span>| म&#2375;टर ग&#2367;यर","<span class='notranslate'>(B) Bevel gear </span>| ब&#2375;वल ग&#2367;यर","<span class='notranslate'>(C) Hypoid gear </span>|  ह&#2366;इप&#2379;इड ग&#2367;यर","<span class='notranslate'>(D) Worm shaft and worm gear </span>| वर&#2381;म श&#2366;फ&#2381;ट और वर&#2381;म ग&#2367;यर"],
answer:2,
},
{
question:"<span class='notranslate'>Q. Where helical gears are used? </span>| ह&#2375;ल&#2367;कल ग&#2367;यर कह&#2366;&#2305; उपय&#2379;ग क&#2367;ए ज&#2366;त&#2375; ह&#2376;&#2306;?",
options:["<span class='notranslate'>(A) Lathe machine </span>| खर&#2366;द मश&#2368;न","<span class='notranslate'>(B) Drilling machine </span>|  ड&#2381;र&#2367;ल मश&#2368;न","<span class='notranslate'>(C) Grinding machine </span>| ग&#2381;र&#2366;इ&#2306;ड&#2367;&#2306;ग मश&#2368;न","<span class='notranslate'>(D) Automobile vehicles </span>| ऑट&#2379;म&#2379;ब&#2366;इल व&#2366;हन"],
answer:3,
},
{
question:"<span class='notranslate'>Q. What is the unit of pressure in SI unit? </span>| SI इक&#2366;ई म&#2375;&#2306; प&#2381;र&#2375;शर क&#2368; इक&#2366;ई क&#2381;य&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Kilogram","<span class='notranslate'>(B) Pascal","<span class='notranslate'>(C) Pound","<span class='notranslate'>(D) Meter"],
answer:1,
},
{
question:"<span class='notranslate'>Q. Which lubricating oil is used for lubricating industrial gears? </span>| औद&#2381;य&#2379;ग&#2367;क ग&#2367;यर&#2379;&#2306; क&#2379; च&#2367;कन&#2366;ई द&#2375;न&#2375; क&#2375; ल&#2367;ए क&#2367;स च&#2367;कन&#2366;ई व&#2366;ल&#2375; त&#2375;ल क&#2366; उपय&#2379;ग क&#2367;य&#2366; ज&#2366;त&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Servo system </span>| सर&#2381;व&#2379; प&#2381;रण&#2366;ल&#2368;","<span class='notranslate'>(B) Servo mesh </span>| सर&#2381;व&#2379; ज&#2366;ल","<span class='notranslate'>(C) Servo line </span>| सर&#2381;व&#2379; ल&#2366;इन","<span class='notranslate'>(D) Servo spin </span>| सर&#2381;व&#2379; स&#2381;प&#2367;न"],
answer:1,
},
{
question:"<span class='notranslate'>Q. Which law states that the pressure exerted on a liquid is transmitted equally in all the directions? </span>| क&#2367;स न&#2367;यम म&#2375;&#2306; कह&#2366; गय&#2366; ह&#2376; क&#2367; एक तरल पर ड&#2366;ल&#2366; गय&#2366; दब&#2366;व सभ&#2368; द&#2367;श&#2366;ओ&#2306; म&#2375;&#2306; सम&#2366;न र&#2370;प स&#2375; प&#2381;रस&#2366;र&#2367;त ह&#2379;त&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Boyleʹs Law </span>| ब&#2366;यल क&#2366; न&#2367;यम","<span class='notranslate'>(B) Pascalʹs Law </span>| प&#2366;स&#2381;कल क&#2366; न&#2367;यम","<span class='notranslate'>(C) Hookʹs Law </span>| ह&#2369;क क&#2366; न&#2367;यम","<span class='notranslate'>(D) Archimedes Principle </span>| आर&#2381;क&#2367;म&#2367;ड&#2368;ज स&#2367;द&#2381;ध&#2366;&#2306;त"],
answer:1,
},
{
question:"<span class='notranslate'>Q. Which system gets compressed air as energy inputs? </span>| क&#2380;न स&#2368; प&#2381;रण&#2366;ल&#2368; म&#2375;&#2306; ऊर&#2381;ज&#2366; इनप&#2369;ट क&#2375; र&#2370;प म&#2375; स&#2306;प&#2368;ड&#2364;&#2367;त हव&#2366; (क&#2306;प&#2381;र&#2375;स&#2381;ड एयर) प&#2381;र&#2366;प&#2381;त करत&#2368; ह&#2376;?",
options:["<span class='notranslate'>(A) Hydraulic System </span>| ह&#2366;इड&#2381;र&#2377;ल&#2367;क स&#2367;स&#2381;टम","<span class='notranslate'>(B) Pneumatic System </span>| न&#2381;य&#2370;म&#2375;ट&#2367;क प&#2381;रण&#2366;ल&#2368;","<span class='notranslate'>(C) Electrical System </span>| व&#2367;द&#2381;य&#2369;त प&#2381;रण&#2366;ल&#2368;","<span class='notranslate'>(D) Mechanical System </span>| म&#2376;क&#2375;न&#2367;कल स&#2367;स&#2381;टम"],
answer:1,
},
{
question:"<span class='notranslate'>Q. Name the wear and tear of gear tooth due to cyclic load under high contact stress.</span>| उच&#2381;च स&#2306;पर&#2381;क तन&#2366;व क&#2375; तहत चक&#2381;र&#2368;य भ&#2366;र क&#2375; क&#2366;रण ग&#2367;यर क&#2375; द&#2366;&#2305;त क&#2368; ट&#2370;ट-फ&#2370;ट क&#2366; न&#2366;म बत&#2366;इए&#2404;",
options:["<span class='notranslate'>(A) Crushing </span>| क&#2381;रश&#2367;&#2306;ग","<span class='notranslate'>(B) Cold flow </span>| श&#2368;त प&#2381;रव&#2366;ह","<span class='notranslate'>(C) Fatigue breakage </span>| थक&#2366;न ब&#2381;र&#2375;क&#2375;ज","<span class='notranslate'>(D) Rippling </span>| र&#2367;प&#2381;प&#2367;ल&#2367;&#2306;ग"],
answer:3,
},
{
question:"<span class='notranslate'>Q. Where the worm and worm gears are used? </span>| वर&#2381;म और वर&#2381;म ग&#2367;यर क&#2366; उपय&#2379;ग कह&#2366;&#2305; क&#2367;य&#2366; ज&#2366;त&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Used in index head gear mechanism </span>| इ&#2306;ड&#2375;क&#2381;स ह&#2375;ड ग&#2367;यर त&#2306;त&#2381;र म&#2375;&#2306; उपय&#2379;ग क&#2367;य&#2366; ज&#2366;त&#2366; ह&#2376;","<span class='notranslate'>(B) Used in automotive differential gear boxes </span>| ऑट&#2379;म&#2379;ट&#2367;व ड&#2367;फर&#2375;&#2306;श&#2367;यल ग&#2367;यर ब&#2377;क&#2381;स म&#2375;&#2306; उपय&#2379;ग क&#2367;य&#2366; ज&#2366;त&#2366; ह&#2376;","<span class='notranslate'>(C) Used in oil pumps </span>| त&#2375;ल प&#2306;प&#2379;&#2306; म&#2375;&#2306; उपय&#2379;ग क&#2367;य&#2366; ज&#2366;त&#2366; ह&#2376;","<span class='notranslate'>(D) Used in centre lathe </span>| क&#2375;&#2306;द&#2381;र खर&#2366;द म&#2375;&#2306; उपय&#2379;ग क&#2367;य&#2366; ज&#2366;त&#2366; ह&#2376;"],
answer:0,
},
{
question:"<span class='notranslate'>Q. Which actuation is under the applications of pneumatics? </span>| व&#2366;य&#2369;चल&#2367;त क&#2375; अन&#2369;प&#2381;रय&#2379;ग&#2379;&#2306; क&#2375; न&#2368;च&#2375; क&#2380;न स&#2366; प&#2381;रवर&#2381;तन ह&#2376;?",
options:["<span class='notranslate'>(A) Drag </span>| ड&#2381;र&#2376;ग","<span class='notranslate'>(B) Push </span>| प&#2369;श","<span class='notranslate'>(C) Close </span>| क&#2381;ल&#2379;ज","<span class='notranslate'>(D) Open </span>| ओपन"],
answer:1,
},
{
question:"<span class='notranslate'>Q. Which energy is converted in hydraulic pump? </span>| ह&#2366;इड&#2381;र&#2379;ल&#2367;क प&#2306;प म&#2375;&#2306; क&#2367;स ऊर&#2381;ज&#2366; क&#2379; पर&#2367;वर&#2381;त&#2367;त क&#2367;य&#2366; ज&#2366;त&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Thermal energy to hydraulic energy </span>| थर&#2381;मल ऊर&#2381;ज&#2366; क&#2379; ह&#2366;इड&#2381;र&#2379;ल&#2367;क ऊर&#2381;ज&#2366; म&#2375;&#2306;","<span class='notranslate'>(B) Electrical energy to hydraulic energy </span>| व&#2367;द&#2381;य&#2369;त ऊर&#2381;ज&#2366; क&#2379; ह&#2366;इड&#2381;र&#2379;ल&#2367;क ऊर&#2381;ज&#2366; म&#2375;","<span class='notranslate'>(C) Pneumatic energy to hydraulic energy </span>| व&#2366;यव&#2368;य ऊर&#2381;ज&#2366; क&#2379; ह&#2366;इड&#2381;र&#2379;ल&#2367;क ऊर&#2381;ज&#2366; म&#2375;","<span class='notranslate'>(D) Mechanical energy to hydraulic energy </span>| य&#2366;&#2306;त&#2381;र&#2367;क ऊर&#2381;ज&#2366; क&#2379; ह&#2366;इड&#2381;र&#2379;ल&#2367;क ऊर&#2381;ज&#2366; म&#2375;&#2306;"],
answer:3,
},
{
question:"<span class='notranslate'>Q. Identify the part marked ʹxʹ.</span>| xʹ स&#2375; च&#2367;ह&#2381;न&#2367;त भ&#2366;ग क&#2379; पहच&#2366;न&#2375;&#2306;&#2404;<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEim0qi5mbfMQ4lYBVO1dq5-q132oMlqEgzhsU6l6I0U0uJRGoaQ0kdBYaqt_R0N-ltyWspSnT_cQFDSdf-38uRgtLhvY3QY3ZTu1SCOkglnhv6ATURZB6lSjys626G-gjzuakwY84VKhf1QnZqXpIPl3J3hlCrigaX2G26-5egW_ErRQXWIO7apoafea0Kq/s320/FIT2-9-406.jpg'>",
options:["<span class='notranslate'>(A) Depth gauge </span>| गहर&#2366;ई ग&#2375;ज","<span class='notranslate'>(B) Template </span>| ट&#2375;म&#2381;पल&#2375;ट","<span class='notranslate'>(C) Profile plate </span>| प&#2381;र&#2379;फ&#2364;&#2366;इल प&#2381;ल&#2375;ट","<span class='notranslate'>(D) Pitch gauge </span>| प&#2367;च ग&#2375;ज"],
answer:1,
},
{
question:"<span class='notranslate'>Q. What is pressure acting on piston 2, shown in figure? </span>| च&#2367;त&#2381;र म&#2375;&#2306; द&#2367;ख&#2366;ए गए प&#2367;स&#2381;टन 2 पर दब&#2366;व क&#2381;य&#2366; ह&#2376;?<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgFtYJeg-gLIh8xUnN9cZxtZ4E8y5vk2MQwCt4ygIJ74EMWyBweAqOqwZgViDUgfZO2PCymGXHZYrdFUIBBifw-wt9UoTDSRqIXGrufWBKm9DJP5xqLAuOBg-x7gw8zjN2ArgcrUhOQ8fBfwjrH_61uwR0W9JPEg4lksTq7nZ3sb9lR7Za9KeSmvkBV04Xm/s320/FIT2-9-416.jpg'>",
options:["<span class='notranslate'>(A) 5 Kg","<span class='notranslate'>(B) 7.5 Kg","<span class='notranslate'>(C) 10 Kg","<span class='notranslate'>(D) 12.5 Kg"],
answer:2,
},
{
question:"<span class='notranslate'>Q. Which gear run more silently? </span>| क&#2380;न स&#2366; ग&#2367;यर बह&#2369;त श&#2366;&#2306;त&#2367; स&#2375; चलत&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Spur gear </span>| स&#2381;पर ग&#2367;यर","<span class='notranslate'>(B) Mitre gear </span>| म&#2367;टर&#2375; ग&#2367;यर","<span class='notranslate'>(C) Bevel gear </span>| ब&#2375;वल ग&#2367;यर","<span class='notranslate'>(D) Helical gear </span>| ह&#2375;ल&#2367;कल ग&#2367;यर"],
answer:3,
},
{
question:"<span class='notranslate'>Q. Name the wear and tear of gear tooth due to extreme loads, notches.</span>| अत&#2381;यध&#2367;क भ&#2366;र, न&#2377;च क&#2375; क&#2366;रण ग&#2367;यर क&#2375; द&#2366;&#2305;त म&#2375;&#2306; ह&#2379;न&#2375; व&#2366;ल&#2368; ट&#2370;ट-फ&#2370;ट क&#2366; न&#2366;म बत&#2366;इए&#2404;",
options:["<span class='notranslate'>(A) Fatigue breakage </span>| थक&#2366;न ब&#2381;र&#2375;क&#2375;ज","<span class='notranslate'>(B) Cold flow </span>| श&#2368;त प&#2381;रव&#2366;ह","<span class='notranslate'>(C) Rippling </span>| र&#2367;प&#2381;प&#2367;ल&#2367;&#2306;ग","<span class='notranslate'>(D) Crushing </span>| क&#2381;रश&#2367;&#2306;ग"],
answer:0,
},
{
question:"<span class='notranslate'>Q. What is the name of the gear mechanism? </span>| ग&#2367;यर म&#2376;क&#2375;न&#2367;ज&#2381;म क&#2366; न&#2366;म क&#2381;य&#2366; ह&#2376;?<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh8WmZ_zk5ZQS8gW__aZLlA6CAUhh6JQIeOKkMxIM96TVOqTP_3n70ZUkw7JMS-0CDxo6cKewTNqM41CJtN_ENjyMGWkeetZKMkEP7oedOuaSKEVbeF6MKj-X6cM0kN96P3JGwaFYmiDuFrjharxOkzbpaPdUYz-oL7sI5W54AAesCfpzejlGX2B3Rky1RK/s1600/FIT2-9-200.JPG'>",
options:["<span class='notranslate'>(A) Mitre gear </span>| म&#2375;टर ग&#2367;यर","<span class='notranslate'>(B) Bevel gear </span>| ब&#2375;वल ग&#2367;यर","<span class='notranslate'>(C) Rack and pinion </span>| र&#2376;क ए&#2306;ड प&#2367;न&#2367;यन","<span class='notranslate'>(D) Worm and worm gear </span>| वर&#2381;म ए&#2306;ड वर&#2381;म ग&#2367;यर"],
answer:2,
},
{
question:"<span class='notranslate'>Q. What is the marked as &#8216;X&#8217; in gear? </span>| ग&#2367;यर म&#2375;&#2306; &#8217;X&#8217; क&#2375; र&#2370;प म&#2375;&#2306; च&#2367;ह&#2381;न&#2367;त भ&#2366;ग क&#2381;य&#2366; ह&#2376;?<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgh4vmCsOc1exlmwgf4ywlv2c4A6HOxWy5kTa0XfMWyW-RtK0epPBEuRN5-ASfmVuZZhCrnLmxmiOq9dyIfRaPt14xy3njd8VLAWFN0G76KNvJMiVy550txue0uCrG7zWiRjBGta3vtH0Z3Pw05sGUsnyFNqvdj_M3zgEGLtcZqF2dDJ962mqE0SF7WBrnb/s1600/FIT2-9-201.JPG'>",
options:["<span class='notranslate'>(A) Root circle </span>| र&#2370;ट सर&#2381;कल","<span class='notranslate'>(B) Base circle </span>| ब&#2375;स सर&#2381;कल","<span class='notranslate'>(C) Pitch circle </span>| प&#2367;च सर&#2381;कल","<span class='notranslate'>(D) Outside circle </span>| आउटस&#2366;इड सर&#2381;कल"],
answer:2,
},
{
question:"<span class='notranslate'>Q. Name the wear and tear of gear tooth having surface irregularities.</span>| सतह क&#2368; अन&#2367;यम&#2367;तत&#2366;ओ&#2306; व&#2366;ल&#2375; ग&#2367;यर द&#2366;&#2306;त क&#2368; ट&#2370;ट-फ&#2370;ट क&#2366; न&#2366;म बत&#2366;इए&#2404;",
options:["<span class='notranslate'>(A) Cold flow </span>| श&#2368;त प&#2381;रव&#2366;ह","<span class='notranslate'>(B) Fatigue breakage </span>| थक&#2366;न ट&#2370;टन&#2366;","<span class='notranslate'>(C) Crushing </span>| क&#2381;रश&#2367;&#2306;ग","<span class='notranslate'>(D) Rippling </span>| र&#2367;प&#2381;प&#2367;ल&#2367;&#2306;ग"],
answer:2,
}]
},
{
 category:"<span class='notranslate'>Module 10 Pneumatic and Hydraulics components </span>| व&#2366;यव&#2368;य और ह&#2366;इड&#2381;र&#2379;ल&#2367;क&#2381;स घटक",
 quizWrap:[{
question:"<span class='notranslate'>Q. Which formula is used to calculate the pressure? </span>| प&#2381;र&#2375;शर क&#2368; गणन&#2366; करन&#2375; क&#2375; ल&#2367;ए क&#2367;स स&#2370;त&#2381;र क&#2366; उपय&#2379;ग क&#2367;य&#2366; ज&#2366;त&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Force + Area","<span class='notranslate'>(B) Force/Area","<span class='notranslate'>(C) Force - Area","<span class='notranslate'>(D) Force x Area"],
answer:1,
},
{
question:"<span class='notranslate'>Q. Which valve protect against excessive pressure in hydraulic system? </span>| क&#2380;न स&#2366; व&#2366;ल&#2381;व ह&#2366;इड&#2381;र&#2379;ल&#2367;क स&#2367;स&#2381;टम म&#2375;&#2306; अत&#2381;यध&#2367;क दब&#2366;व स&#2375; बच&#2366;त&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Gate valve </span>| ग&#2375;ट व&#2366;ल&#2381;व","<span class='notranslate'>(B) Globe valve </span>| ग&#2381;ल&#2379;ब व&#2366;ल&#2381;&#8205;व","<span class='notranslate'>(C) Relief valve </span>| र&#2367;ल&#2368;फ व&#2366;ल&#2381;व","<span class='notranslate'>(D) Non-return valve </span>| न&#2377;न र&#2367;टर&#2381;न व&#2366;ल&#2381;व"],
answer:2,
},
{
question:"<span class='notranslate'>Q. Which device in pneumatics is used for converting pressure energy of compressed air in to mechanical energy? </span>| न&#2381;य&#2370;म&#2375;ट&#2367;क म&#2375;&#2306; क&#2367;स उपकरण क&#2366; उपय&#2379;ग स&#2306;प&#2368;ड&#2364;&#2367;त हव&#2366; क&#2375; दब&#2366;व ऊर&#2381;ज&#2366; क&#2379; य&#2366;&#2306;त&#2381;र&#2367;क ऊर&#2381;ज&#2366; म&#2375;&#2306; पर&#2367;वर&#2381;त&#2367;त करन&#2375; क&#2375; ल&#2367;ए क&#2367;य&#2366; ज&#2366;त&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Pneumatic actuators </span>| न&#2381;य&#2370;म&#2375;ट&#2367;क ऐक&#2381;ट&#2381;य&#2370;ऐटर","<span class='notranslate'>(B) Filter </span>| फ&#2364;&#2367;ल&#2381;टर","<span class='notranslate'>(C) Regulator </span>| र&#2375;ग&#2369;ल&#2375;टर","<span class='notranslate'>(D) Cylinder </span>| स&#2367;ल&#2375;&#2306;डर"],
answer:0,
},
{
question:"<span class='notranslate'>Q. Which formula is used to calculate force? </span>| बल क&#2368; गणन&#2366; क&#2375; ल&#2367;ए क&#2367;स स&#2370;त&#2381;र क&#2366; उपय&#2379;ग क&#2367;य&#2366; ज&#2366;त&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Pressure &#247; Area","<span class='notranslate'>(B) Pressure x Area","<span class='notranslate'>(C) Pressure - Area","<span class='notranslate'>(D) Pressure + Area"],
answer:1,
},
{
question:"<span class='notranslate'>Q. Why in hydraulic pump the filter is installed in suction line? </span>| ह&#2366;इड&#2381;र&#2379;ल&#2367;क प&#2306;प म&#2375;&#2306; फ&#2367;ल&#2381;टर सक&#2381;शन ल&#2366;इन म&#2375;&#2306; क&#2381;य&#2379;&#2306; फ&#2367;ट क&#2367;य&#2366; ज&#2366;त&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Reduce the oil to enter </span>| त&#2375;ल क&#2366; प&#2381;रव&#2375;श कम करन&#2375; क&#2375; ल&#2367;ए","<span class='notranslate'>(B) Preventing foreign matter </span>| ब&#2366;हर&#2368; पद&#2366;र&#2381;थ&#2379; क&#2379; र&#2379;कन&#2366; क&#2375; ल&#2367;ए","<span class='notranslate'>(C) Reduce pressure in the pump </span>| प&#2306;प म&#2375;&#2306; दब&#2366;व कम करन&#2375; क&#2375; ल&#2367;ए","<span class='notranslate'>(D) Increase the pressure in the pump </span>|  प&#2306;प म&#2375;&#2306; दब&#2366;व बढ&#2364;&#2366;न&#2375; क&#2375; ल&#2367;ए"],
answer:1,
},
{
question:"<span class='notranslate'>Q. Which gauge indicates pressure valve above the atmospheric pressure? </span>| व&#2366;य&#2369;म&#2306;डल&#2368;य दब&#2366;व क&#2375; ऊपर क&#2380;न स&#2366; ग&#2375;ज दब&#2366;व व&#2366;ल&#2381;व क&#2379; इ&#2306;ग&#2367;त करत&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Pressure gauge </span>| प&#2381;र&#2375;शर ग&#2375;ज","<span class='notranslate'>(B) Temperature gauge </span>| त&#2366;पम&#2366;न ग&#2376;ज","<span class='notranslate'>(C) Receiver gauge </span>| र&#2367;स&#2368;वर ग&#2375;ज","<span class='notranslate'>(D) Precision gauge </span>| सट&#2368;क ग&#2375;ज"],
answer:0,
},
{
question:"<span class='notranslate'>Q. Which valve is used for fine control of flow in pipe line? </span>| प&#2366;इप ल&#2366;इन म&#2375;&#2306; प&#2381;रव&#2366;ह क&#2375; मह&#2368;न न&#2367;य&#2306;त&#2381;रण(फ&#2366;इन कण&#2381;ट&#2381;र&#2379;ल) क&#2375; ल&#2367;ए क&#2367;स व&#2366;ल&#2381;व क&#2366; उपय&#2379;ग क&#2367;य&#2366; ज&#2366;त&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Gate valve </span>| ग&#2375;ट व&#2366;ल&#2381;व","<span class='notranslate'>(B) Globe valve </span>| ग&#2381;ल&#2379;ब व&#2366;ल&#2381;व","<span class='notranslate'>(C) Needle valve </span>| न&#2368;डल व&#2366;ल&#2381;व","<span class='notranslate'>(D) Non - return valve </span>| न&#2377;न र&#2367;टर&#2381;न व&#2366;ल&#2381;व"],
answer:2,
},
{
question:"<span class='notranslate'>Q. What is the name of part marked as ʹXʹ? </span>| ʹXʹ क&#2375; र&#2370;प म&#2375;&#2306; च&#2367;ह&#2381;न&#2367;त भ&#2366;ग क&#2366; न&#2366;म क&#2381;य&#2366; ह&#2376;?<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh_-jUAOGw0xFPTgjacypWOJ928C7FfXgTxVJfDo9mgJukP2qRZ0fqv85n9K0IJ0uM7XQ0YvxyaJoWOFVxofTPNBMHr3WxEe43DXyET_T1lRPf7sCXM42_dH-ru7GZ7MtSEoUy7SpaYLgifiRMTEKMjdmSK6AdIdzdyTzR_cv3IizWFCTruJCUlbL94FpIV/s1600/FIT2-10-220.JPG'>",
options:["<span class='notranslate'>(A) Cylinder </span>| स&#2367;ल&#2375;&#2306;डर","<span class='notranslate'>(B) Piston </span>| प&#2367;स&#2381;टन","<span class='notranslate'>(C) Spring </span>| स&#2381;प&#2381;र&#2367;&#2306;ग","<span class='notranslate'>(D) Inlet port </span>| इनल&#2375;ट प&#2379;र&#2381;ट"],
answer:2,
},
{
question:"<span class='notranslate'>Q. What is the purpose of direction control valve in hydraulic system? </span>| ह&#2366;इड&#2381;र&#2379;ल&#2367;क स&#2367;स&#2381;टम म&#2375;&#2306; द&#2367;श&#2366; न&#2367;य&#2306;त&#2381;रण व&#2366;ल&#2381;व क&#2366; उद&#2381;द&#2375;श&#2381;य क&#2381;य&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Open or close </span>| ख&#2379;लन&#2366; य&#2366; ब&#2306;द करन&#2366;","<span class='notranslate'>(B) Increase the pressure </span>| दब&#2366;व बढ&#2364;&#2366;न&#2366;","<span class='notranslate'>(C) Decrease the pressure </span>| दब&#2366;व कम करन&#2366;","<span class='notranslate'>(D) Control the valve </span>| व&#2366;ल&#2381;व क&#2379; न&#2367;य&#2306;त&#2381;र&#2367;त करन&#2366;"],
answer:0,
},
{
question:"<span class='notranslate'>Q. Which pressure value is read through pressure gauge? </span>| प&#2381;र&#2375;शर ग&#2375;ज क&#2375; म&#2366;ध&#2381;यम स&#2375; क&#2367;स दब&#2366;व म&#2366;न क&#2379; पढ&#2364;&#2366; ज&#2366;त&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Gauge Pressure </span>| ग&#2375;ज प&#2381;र&#2375;शर","<span class='notranslate'>(B) Atmospheric Pressure </span>| व&#2366;य&#2369;मण&#2381;डल&#2368;य दब&#2366;व","<span class='notranslate'>(C) Vacuum Pressure </span>| व&#2376;क&#2381;य&#2370;म दब&#2366;व","<span class='notranslate'>(D) Absolute Pressure </span>| परम दब&#2366;व"],
answer:0,
},
{
question:"<span class='notranslate'>Q. Which causes more than 90% of hydraulic system failure? </span>| 90% स&#2375; अध&#2367;क ह&#2366;इड&#2381;र&#2379;ल&#2367;क प&#2381;रण&#2366;ल&#2368; क&#2368; व&#2367;फलत&#2366; क&#2366; क&#2366;रण बनत&#2368; ह&#2376;?",
options:["<span class='notranslate'>(A) Contamination of hydraulic fluid </span>| ह&#2366;इड&#2381;र&#2379;ल&#2367;क द&#2381;रव क&#2366; द&#2370;ष&#2367;तकरण","<span class='notranslate'>(B) Leak of valve </span>| व&#2366;ल&#2381;व क&#2366; र&#2367;स&#2366;व","<span class='notranslate'>(C) Pump </span>| प&#2306;प","<span class='notranslate'>(D) Electric power </span>| व&#2367;द&#2381;य&#2369;त शक&#2381;त&#2367;"],
answer:0,
},
{
question:"<span class='notranslate'>Q. Which valve is used to control the direction of the flow of fluid? </span>| द&#2381;रव क&#2375; प&#2381;रव&#2366;ह क&#2368; द&#2367;श&#2366; क&#2379; न&#2367;य&#2306;त&#2381;र&#2367;त करन&#2375; क&#2375; ल&#2367;ए क&#2380;न स&#2375; व&#2366;ल&#2381;व क&#2366; उपय&#2379;ग क&#2367;य&#2366; ज&#2366;त&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Flow control valve </span>| प&#2381;रव&#2366;ह न&#2367;य&#2306;त&#2381;रण व&#2366;ल&#2381;व","<span class='notranslate'>(B) Non - return valve </span>| न&#2377;न र&#2367;टर&#2381;न व&#2366;ल&#2381;व","<span class='notranslate'>(C) Pressure control valve </span>| दब&#2366;व न&#2367;य&#2306;त&#2381;रण व&#2366;ल&#2381;व","<span class='notranslate'>(D) Directional control valve </span>| द&#2367;श&#2366;त&#2381;मक न&#2367;य&#2306;त&#2381;रण व&#2366;ल&#2381;व"],
answer:3,
},
{
question:"<span class='notranslate'>Q. What is the name of symbol used in hydraulic cylinder? </span>| ह&#2366;इड&#2381;र&#2379;ल&#2367;क स&#2367;ल&#2375;&#2306;डर म&#2375;&#2306; प&#2381;रय&#2369;क&#2381;त प&#2381;रत&#2368;क क&#2366; न&#2366;म क&#2381;य&#2366; ह&#2376;?<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiOkEzjVBqpn7Ovkc4ZE-Dt4wAdW3t-S_XnUojxoivq0HKh7jJ-htbFZPSzH9sK3LVZL115TNk6AqDcUtrId3Bw05xxL3pQ04sEWG21DGgY5DMTnypaRzuAGqc2yB_IUJ0L6oXlLjd3FuOn3TutYHd1d57sCOcS7PE_1GypNXu5gATRQ4N1O0zmOpKwXo8O/s1600/FIT2-10-223.JPG'>",
options:["<span class='notranslate'>(A) Single acting load returns the piston </span>| एकल अभ&#2367;नय भ&#2366;र प&#2367;स&#2381;टन ल&#2380;ट&#2366;त&#2366; ह&#2376;","<span class='notranslate'>(B) Single acting return piston </span>| स&#2367;&#2306;गल एक&#2381;ट&#2367;&#2306;ग र&#2367;टर&#2381;न प&#2367;स&#2381;टन","<span class='notranslate'>(C) Double acting power stoke </span>| डबल एक&#2381;ट&#2367;&#2306;ग प&#2377;वर स&#2381;ट&#2381;र&#2379;क","<span class='notranslate'>(D) Double acting with crushing </span>| क&#2381;रश&#2367;&#2306;ग क&#2375; स&#2366;थ डबल एक&#2381;ट&#2367;&#2306;ग"],
answer:0,
},
{
question:"<span class='notranslate'>Q. What is the name of the device used to remove dust, chips and other foreign particles from the fluid? </span>| तरल पद&#2366;र&#2381;थ स&#2375; ध&#2370;ल, च&#2367;प&#2381;स और अन&#2381;य ब&#2366;हर&#2368; कण&#2379;&#2306; क&#2379; हट&#2366;न&#2375; क&#2375; ल&#2367;ए उपय&#2379;ग क&#2367;ए ज&#2366;न&#2375; व&#2366;ल&#2375; उपकरण क&#2366; न&#2366;म क&#2381;य&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Pressure regulating valve </span>| प&#2381;र&#2375;शर र&#2375;ग&#2369;ल&#2375;ट&#2367;&#2306;ग व&#2366;ल&#2381;व","<span class='notranslate'>(B) Filter </span>| फ&#2364;&#2367;ल&#2381;टर","<span class='notranslate'>(C) Accumulator </span>| अक&#2381;य&#2370;म&#2381;यल&#2375;टर","<span class='notranslate'>(D) Regulator </span>| र&#2375;ग&#2369;ल&#2375;टर"],
answer:1,
},
{
question:"<span class='notranslate'>Q. What is the name of part marked as ʹXʹ? </span>| ʹXʹ क&#2375; र&#2370;प म&#2375;&#2306; च&#2367;ह&#2381;न&#2367;त भ&#2366;ग क&#2366; न&#2366;म क&#2381;य&#2366; ह&#2376;?<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEggHJXbE7_JwEztOZgespOWjnN0IsaHaxdE6WYwzbwzvWtWlIz4X4IfBHa6wWMO-5c1XZfKimWQokJpLGbt6aGpW8AmmJjjwOw54WD4R76BKulb40-ukgLd2JrsLIluTPtKSwHoJzojI1TxciD4QDlQTDrG4e0DSvmOym6DUGTWSAM8fnHXsnlpQM1fCBi2/s1600/FIT2-10-221.JPG'>",
options:["<span class='notranslate'>(A) Cylinder </span>| स&#2367;ल&#2375;&#2306;डर","<span class='notranslate'>(B) Piston </span>| प&#2367;स&#2381;टन","<span class='notranslate'>(C) Seal </span>| स&#2368;ल","<span class='notranslate'>(D) Spring </span>| स&#2381;प&#2381;र&#2367;&#2306;ग"],
answer:1,
},
{
question:"<span class='notranslate'>Q. Which type of filter helps to protect the pump from fluid contaminations? </span>| क&#2367;स प&#2381;रक&#2366;र क&#2375; फ&#2367;ल&#2381;टर स&#2375; प&#2306;प क&#2379; तरल पद&#2366;र&#2381;थ&#2379;&#2306; क&#2375; द&#2370;ष&#2367;त ह&#2379;न&#2375; स&#2375; बच&#2366;न&#2375; म&#2375;&#2306; मदद म&#2367;लत&#2368; ह&#2376;?",
options:["<span class='notranslate'>(A) Suction filter </span>| सक&#2381;शन फ&#2364;&#2367;ल&#2381;टर","<span class='notranslate'>(B) Magnetic filter </span>| च&#2369;&#2306;बक&#2368;य फ&#2367;ल&#2381;टर","<span class='notranslate'>(C) Absorbent filter </span>| ऐब&#2381;स&#2377;र&#2381;बन&#2381;ट फ&#2364;&#2367;ल&#2381;टर","<span class='notranslate'>(D) Mechanical filter </span>| म&#2376;क&#2375;न&#2367;कल फ&#2367;ल&#2381;टर"],
answer:0,
},
{
question:"<span class='notranslate'>Q. What is the formula for the cylinder output force? </span>| स&#2367;ल&#2375;&#2306;डर आउटप&#2369;ट फ&#2379;र&#2381;स क&#2366; फ&#2377;र&#2381;म&#2370;ल&#2366; क&#2381;य&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) <img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg5aYiqCNifQdSwULIMtH4D3Y0vwYTyeCNCsFdXGASrn2amVz84amA8OOyYDTuY_IWMKW82PsYD-o7CEEQL_niu7G41iVoh8dA3j2N5tXgmL6EodAB_hoSgIRqiXRRcXP00FqpebFvZbxZYIi0tyG3aH6DUVsFjKJKF6YmQzWEqRBOydjv4WmoQMa0QQQtM/s1600/FIT2-10-222A.JPG'>","<span class='notranslate'>(B) <img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjTs2XJ6UWiUiGaVKwmHeHivJe5_iHcMt-YyuwWwKYjcRWnuMuLvcbT008ZRfApm11CvQcioe4dka7R8A4hQeiSaZHCxxXcS0j4qzJx149HA-VRjwZ2VylMIeLileldNSUTZgrJSsEr60JbpmJ-7CSAFKhp0zX2tuZjcNZJmpgaI1gXrKT5D-hmV2i-k6cB/s1600/FIT2-10-222B.JPG'>","<span class='notranslate'>(C) <img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiuVT6h9BLU_D308H7yJAYCgqjoU5OBqHxSxjGW7lgvNhttu1yVZJgBJA4Zu8ed5xXz0F3mMWd_z4_5_2WzJsNqgxyQRGxsAhseRL-rvEp6nab3IEN0rytdfm2NzSBKfCMHNk1lrCKt_niUIu3Gxm0Wwklt8ThStS6KnAF_QmorkhWtmfuPjnbrjh75xm4s/s1600/FIT2-10-222C.JPG'>","<span class='notranslate'>(D) <img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhKm-n5TY2PHvVqceihtmmlLWu_3M-xBZNsDWOhl0crewxWECq-GVnFIfPvOJEsKE5J0uxmgCjvXUlHUC2iBa9HApooMidczR5arm5IHFza3nphtSBqXYNTTum8yKs9wunJaOyIBEuuMAOyNLiVIdT72bSGgC0wQ9oT0xz4pAiLre312yTeeAMGv7UgS9Tp/s1600/FIT2-10-222D.JPG'>"],
answer:2,
},
{
question:"<span class='notranslate'>Q. What is the name of the part marked as ʹXʹ in Hydraulic power System? </span>| ह&#2366;इड&#2381;र&#2379;ल&#2367;क प&#2366;वर स&#2367;स&#2381;टम म&#2375;&#2306; ʹXʹ क&#2375; र&#2370;प म&#2375;&#2306; च&#2367;ह&#2381;न&#2367;त भ&#2366;ग क&#2366; न&#2366;म क&#2381;य&#2366; ह&#2376;?<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjpbQy6dGuYBpueTAvZNmih_HspvanmLg6ncDsmzzxbakqaAwx2zvMbzA0SWAf1IxNyCheyl8VNQVrHFEqx0U8fk5R2M_rfvfIboLujhtBvi_7nPeQgviT7J6gyc7pp6Q0-6ggAc8qMCkjxr8gsKb9IadweTfTM1P8eRJRTCwrmo3dTv2lu2iauTmqW_MzU/s320/FIT2-10-224.JPG'>",
options:["<span class='notranslate'>(A) Two piston valve </span>| ट&#2370; प&#2367;स&#2381;टन व&#2366;ल&#2381;व","<span class='notranslate'>(B) Double acting cylinder </span>| डबल एक&#2381;ट&#2367;&#2306;ग स&#2367;ल&#2375;&#2306;डर","<span class='notranslate'>(C) Pump </span>| प&#2306;प","<span class='notranslate'>(D) Reservoir </span>| र&#2375;ज&#2364;र&#2381;व&#2381;व&#2376;र"],
answer:1,
},
{
question:"<span class='notranslate'>Q. What is the name of part marked as &#8216;x&#8217; in compressor? </span>| क&#2306;प&#2381;र&#2375;सर म&#2375;&#2306; &#8217;x&#8217; क&#2375; र&#2370;प म&#2375;&#2306; च&#2367;ह&#2381;न&#2367;त भ&#2366;ग क&#2366; न&#2366;म क&#2381;य&#2366; ह&#2376;?<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgpSQrnlVEddg4v-u7XbZJgZF4uP5mbrfx0o70nHbcDdVf45LN1noz0xoK4f0eOHFq5ftKK7McUki5PMn3wGJn4a4c5x3iVUOjMREp83L8oCI83Nh9Z1vCvA9IKhSxPDu-U1NrfUta-5Xe_mTKG6XTlrMnBB44G_109rMxiuhaZTgKFNsqVvczIWdi1rOw5/s320/FIT2-10-211.JPG'>",
options:["<span class='notranslate'>(A) Relief valve </span>| र&#2367;ल&#2368;फ व&#2366;ल&#2381;व","<span class='notranslate'>(B) Thermometer </span>| थर&#2381;म&#2366;म&#2368;टर","<span class='notranslate'>(C) Shut-off valve </span>| शट ऑफ व&#2366;ल&#2381;व","<span class='notranslate'>(D) Pressure gauge </span>| प&#2381;र&#2375;शर ग&#2375;ज"],
answer:3,
},
{
question:"<span class='notranslate'>Q. Which pressure value is measured with respect to perfect vacuum? </span>| परफ&#2375;क&#2381;ट व&#2376;क&#2381;य&#2370;म क&#2375; स&#2306;ब&#2306;ध म&#2375;&#2306; क&#2380;न स&#2366; दब&#2366;व म&#2366;न म&#2366;प&#2366; ज&#2366;त&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Atmospheric Pressure </span>| व&#2366;य&#2369;मण&#2381;डल&#2368;य दब&#2366;व","<span class='notranslate'>(B) Absolute Pressure </span>| परम दब&#2366;व","<span class='notranslate'>(C) Gauge Pressure </span>| ग&#2375;ज दब&#2366;व","<span class='notranslate'>(D) Vacuum Pressure </span>| व&#2376;क&#2381;य&#2370;म दब&#2366;व"],
answer:1,
}]
},
{
 category:"<span class='notranslate'>Module 11 Pneumatic and Hydraulics circuits  </span>| व&#2366;यव&#2368;य और ह&#2366;इड&#2381;र&#2379;ल&#2367;क&#2381;स सर&#2381;क&#2367;ट",
 quizWrap:[{
question:"<span class='notranslate'>Q. What is the name of pneumatic valve symbol? </span>| व&#2366;यव&#2368;य व&#2366;ल&#2381;व प&#2381;रत&#2368;क क&#2366; न&#2366;म क&#2381;य&#2366; ह&#2376;?<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhHJbTsWrTXkSK1LT_yWk1p7xfBUjDeUtcYg4SS9pr_5CMNhL544i9xhb8mHNsYNNbJcr9d74b7ZJYgGXOAG2rWCC4E0bKC8pu2ul_FOPhl9jJB1e0kOM2MB-eM46Xbt4DAGSqYTg07RpdwPeIb_fiz24lx1ZdKIinotrslKB2-a9PsexJivLWSuPnnS-HW/s1600/FIT2-11-239.JPG'>",
options:["<span class='notranslate'>(A) Directional control valve </span>| द&#2367;श&#2366;त&#2381;मक न&#2367;य&#2306;त&#2381;रण व&#2366;ल&#2381;व","<span class='notranslate'>(B) Roller valve </span>| र&#2379;लर व&#2366;ल&#2381;व","<span class='notranslate'>(C) Pressure valve </span>| प&#2381;र&#2375;शर व&#2366;ल&#2381;व","<span class='notranslate'>(D) Flow control valve </span>| प&#2381;रव&#2366;ह न&#2367;य&#2306;त&#2381;रण व&#2366;ल&#2381;व"],
answer:0,
},
{
question:"<span class='notranslate'>Q. What is the name of the symbol? </span>| इस  प&#2381;रत&#2368;क क&#2366; न&#2366;म क&#2381;य&#2366; ह&#2376;?<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjPWNQsSgj81CPcw8OIsl0PP4B3Hwq5XLO7PgMruiY8qLYjh79wnGh1dcJApI9WJfqtCRnSCmpgF8DOVmKomwBzrgMLzO1cU4MazdXKwiFP5OmDZPWH8mTR2xyfXB114hmUZTy_jO5UbhsFMkNFjMDigsM2t1heLuZUozHoc8vksw3q4NyImFI9AB_pP2y-/s1600/FIT2-11-236.JPG'>",
options:["<span class='notranslate'>(A) Moving part of valve </span>| व&#2366;ल&#2381;व क&#2366; चल भ&#2366;ग","<span class='notranslate'>(B) Pressure relief valve </span>| प&#2381;र&#2375;शर र&#2367;ल&#2368;फ व&#2366;ल&#2381;&#8205;व","<span class='notranslate'>(C) Double acting cylinder </span>| डबल एक&#2381;ट&#2367;&#2306;ग स&#2367;ल&#2367;&#2306;डर","<span class='notranslate'>(D) Single acting cylinder with spring </span>| स&#2381;प&#2381;र&#2367;&#2306;ग क&#2375; स&#2366;थ स&#2367;&#2306;गल एक&#2381;ट&#2367;&#2306;ग स&#2367;ल&#2367;&#2306;डर"],
answer:3,
},
{
question:"<span class='notranslate'>Q. What is the name of valve? </span>| इस व&#2366;ल&#2381;व क&#2366; न&#2366;म क&#2381;य&#2366; ह&#2376;?<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjezRseDgTwsAphJkEge4eg9QN0ITKhAjTaZhS66wMrmAj-Gf2EPQkoUcIzIla5LYIHrJ3yJ4LDMwYWQU3xQUNTO_-fTAvTueHXTcKhbBg0r22xJL5tQm0tjDYR948uZgDQLqWSg20DOQQipjHmsDR1LoNjB916-gtRETZR9RZE5lrYa0_4y9mFebt5NPJz/s1600/FIT2-11-237.JPG'>",
options:["<span class='notranslate'>(A) Flow control valve </span>| प&#2381;रव&#2366;ह न&#2367;य&#2306;त&#2381;रण व&#2366;ल&#2381;व","<span class='notranslate'>(B) Ball type check valve </span>| ब&#2377;ल ट&#2366;इप च&#2375;क व&#2366;ल&#2381;व","<span class='notranslate'>(C) Swing check valve </span>| स&#2381;व&#2367;&#2306;ग च&#2375;क व&#2366;ल&#2381;व","<span class='notranslate'>(D) Pressure type valve </span>| प&#2381;र&#2375;शर ट&#2366;इप व&#2366;ल&#2381;व"],
answer:2,
},
{
question:"<span class='notranslate'>Q. Which valve block flow in one direction and allow free flow in the other direction? </span>| एक द&#2367;श&#2366; म&#2375;&#2306; प&#2381;रव&#2366;ह क&#2379; ब&#2381;ल&#2377;क करन&#2366; और द&#2370;सर&#2368; द&#2367;श&#2366; म&#2375;&#2306; द&#2381;रव क&#2379; बहन&#2375; क&#2368; अन&#2369;मत&#2367; द&#2375;न&#2375; क&#2375; ल&#2367;ए क&#2367;स व&#2366;ल&#2381;व क&#2366; उपय&#2379;ग क&#2367;य&#2366; ज&#2366;त&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Non- return valve </span>| न&#2377;न र&#2367;टर&#2381;न व&#2366;ल&#2381;व","<span class='notranslate'>(B) 4/2 way Valve </span>| 4/2 व&#2375; व&#2366;ल&#2381;व","<span class='notranslate'>(C) Gate valve </span>| ग&#2375;ट व&#2366;ल&#2381;व","<span class='notranslate'>(D) Globe valve </span>| ग&#2381;ल&#2379;ब व&#2366;ल&#2381;व"],
answer:0,
},
{
question:"<span class='notranslate'>Q. What is the operating voltage of electro pneumatics? </span>| इल&#2375;क&#2381;ट&#2381;र&#2379; न&#2381;य&#2370;म&#2375;ट&#2367;क&#2381;स क&#2366; ऑपर&#2375;ट&#2367;&#2306;ग व&#2379;ल&#2381;ट&#2375;ज क&#2381;य&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) 10V - 140V","<span class='notranslate'>(B) 12V - 220V","<span class='notranslate'>(C) 15V - 200V","<span class='notranslate'>(D) 200V - 240V"],
answer:1,
},
{
question:"<span class='notranslate'>Q. Which valve is used for mechanical position to sense in machine automation system? </span>| मश&#2368;न ऑट&#2379;म&#2375;शन स&#2367;स&#2381;टम म&#2375;&#2306; म&#2376;क&#2375;न&#2367;कल प&#2379;ज&#2368;शन क&#2379; स&#2375;&#2306;स करन&#2375; क&#2375; ल&#2367;ए क&#2367;स य&#2366;&#2306;त&#2381;र&#2367;क व&#2366;ल&#2381;व क&#2366; उपय&#2379;ग क&#2367;य&#2366; ज&#2366;त&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Pressure relief valve </span>| प&#2381;र&#2375;शर र&#2367;ल&#2368;फ व&#2366;ल&#2381;&#8205;व","<span class='notranslate'>(B) Roller valve </span>| र&#2379;लर व&#2366;ल&#2381;व","<span class='notranslate'>(C) Flow control valve </span>| फ&#2381;ल&#2379; कण&#2381;ट&#2381;र&#2379;ल व&#2366;ल&#2381;व","<span class='notranslate'>(D) Directional valve </span>| द&#2367;श&#2366;त&#2381;मक व&#2366;ल&#2381;व"],
answer:1,
},
{
question:"<span class='notranslate'>Q. What is the name of the valve symbol? </span>| इस व&#2366;ल&#2381;व प&#2381;रत&#2368;क क&#2366; न&#2366;म क&#2381;य&#2366; ह&#2376;?<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhVU4zoOUGKOGmjSDS4D74zS7ElRn9_aLWqiADn8ZevRNOMqkuC-97ySsjesi2cHDQ9a93mSucTQTUCgMEHC4thfwpeka8I04bIzPanqgqxPautKXbBwX6BeGoEi97ENHIXqV2Cov7Devc2r6HZ0zh5leFHCMq6qkruQ21c7gTumWIl6HvsfT6JIgk8K4nB/s1600/FIT2-11-238.JPG'>",
options:["<span class='notranslate'>(A) Directional control valve </span>| द&#2367;श&#2366;त&#2381;मक न&#2367;य&#2306;त&#2381;रण व&#2366;ल&#2381;व","<span class='notranslate'>(B) Flow control valve </span>| प&#2381;रव&#2366;ह न&#2367;य&#2306;त&#2381;रण व&#2366;ल&#2381;व","<span class='notranslate'>(C) 3/2 way valve </span>| 3/2 व&#2375; व&#2366;ल&#2381;व","<span class='notranslate'>(D) 5/2 way valve </span>| 5/2 व&#2375; व&#2366;ल&#2381;व"],
answer:2,
},
{
question:"<span class='notranslate'>Q. Which valve is used to permit fluid flow in one direction and block flow in opposite direction? </span>| एक ह&#2368; द&#2367;श&#2366; म&#2375;&#2306; द&#2381;रव प&#2381;रव&#2366;ह क&#2368; अन&#2369;मत&#2367; द&#2375;न&#2375; और व&#2367;पर&#2368;त द&#2367;श&#2366; म&#2375;&#2306; प&#2381;रव&#2366;ह क&#2379; ब&#2381;ल&#2377;क करन&#2375; क&#2375; ल&#2367;ए क&#2367;स व&#2366;ल&#2381;व क&#2366; उपय&#2379;ग क&#2367;य&#2366; ज&#2366;त&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Check valve </span>| च&#2375;क व&#2366;ल&#2381;व","<span class='notranslate'>(B) Shuttle valve </span>| श&#8205;टल व&#2366;ल&#2381;&#8205;व","<span class='notranslate'>(C) Orifice check valve </span>| ऑरफ&#2367;स च&#2375;क व&#2366;ल&#2381;व","<span class='notranslate'>(D) Pressure relief valve </span>| प&#2381;र&#2375;शर र&#2367;ल&#2368;फ व&#2366;ल&#2381;&#8205;व"],
answer:0,
},
{
question:"<span class='notranslate'>Q. What is type of hydromotor? </span>| ह&#2366;इड&#2381;र&#2379;म&#2379;टर क&#2366; प&#2381;रक&#2366;र क&#2381;य&#2366; ह&#2376;?<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEidRpKzCQNY-KkK8Url5Plu0QgZApPOT7dfj_MEj5yI25tbEYT9jVNj2h7NuQUrzbmxuwIgfgkZ7PNJAAcm3XOYhduPs1TUfR5pBz92amH69QId1IYY388tGZF6JqvyNODekSUbb1Cx52YSt9-LIXzUciuqq-_a15L0gpLlspgC2ufRKv6-Rn-zsUBuTi8K/s1600/FIT2-11-241.JPG'>",
options:["<span class='notranslate'>(A) Gear type </span>| ग&#2367;यर ट&#2366;इप","<span class='notranslate'>(B) Vane type </span>| व&#2375;न ट&#2366;इप","<span class='notranslate'>(C) Piston type </span>| प&#2367;स&#2381;टन ट&#2366;इप","<span class='notranslate'>(D) Propeller type </span>| प&#2381;र&#2379;प&#2375;लर ट&#2366;इप"],
answer:0,
},
{
question:"<span class='notranslate'>Q. Which device enables different flow rate of oil? </span>| क&#2380;न स&#2366; उपकरण त&#2375;ल क&#2368; व&#2367;भ&#2367;न&#2381;न प&#2381;रव&#2366;ह दर बन&#2366;त&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Throttle valve </span>| थ&#2381;र&#2377;टल व&#2366;ल&#2381;व","<span class='notranslate'>(B) Pressure valve </span>| द&#2366;ब व&#2366;ल&#2381;व","<span class='notranslate'>(C) Orifice </span>| ओर&#2379;फ&#2367;स","<span class='notranslate'>(D) Restriction flow </span>| प&#2381;रत&#2367;ब&#2306;ध प&#2381;रव&#2366;ह"],
answer:0,
},
{
question:"<span class='notranslate'>Q. What is the name of valve? </span>| इस व&#2366;ल&#2381;व क&#2366; न&#2366;म क&#2381;य&#2366; ह&#2376;?<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgBqCLcMQnWk9oL35lRSrk4gBx70y29rZRokak_1UaKMWjOvdoH-FLylH24NAMoYLH7yacuZGplzImD-ZLQCW29BKqQgd4gzCHJ3cPxgdD8_fUqCXD_O0l1x9N29MleK713ysW0YlVbRATNCJgnvJGwwbRVTT_JcBgilmTiu3AQJbx-Yws-FWw1iL0dC_tU/s320/FIT2-11-240.JPG'>",
options:["<span class='notranslate'>(A) 5 port 2 position valve </span>| 5 प&#2379;र&#2381;ट 2 प&#2379;ज&#2368;शन व&#2366;ल&#2381;व","<span class='notranslate'>(B) 3 port 2 position valve </span>| 3 प&#2379;र&#2381;ट 2 प&#2379;ज&#2368;शन व&#2366;ल&#2381;व","<span class='notranslate'>(C) 4 port 3 position valve </span>| 4 प&#2379;र&#2381;ट 3 प&#2379;ज&#2368;शन व&#2366;ल&#2381;व","<span class='notranslate'>(D) 4 port 2 position valve </span>| 4 प&#2379;र&#2381;ट 2 प&#2379;ज&#2368;शन व&#2366;ल&#2381;व"],
answer:0,
},
{
question:"<span class='notranslate'>Q. Which valve is used as interface between the electrical and pneumatic system? </span>| व&#2367;द&#2381;य&#2369;त और न&#2381;य&#2370;म&#2375;ट&#2367;क प&#2381;रण&#2366;ल&#2368; क&#2375; ब&#2368;च इ&#2306;टरफ&#2364;&#2375;स क&#2375; र&#2370;प म&#2375;&#2306; क&#2367;स व&#2366;ल&#2381;व क&#2366; उपय&#2379;ग क&#2367;य&#2366; ज&#2366;त&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Roller valve </span>| र&#2379;लर व&#2366;ल&#2381;व","<span class='notranslate'>(B) Flow control valve </span>| फ&#2381;ल&#2379; कण&#2381;ट&#2381;र&#2379;ल व&#2366;ल&#2381;व","<span class='notranslate'>(C) Solenoid valve </span>| स&#2379;ल&#2375;न&#2379;इड व&#2366;ल&#2381;व","<span class='notranslate'>(D) Pressure relief valve </span>| प&#2381;र&#2375;शर र&#2367;ल&#2368;फ व&#2366;ल&#2381;&#8205;व"],
answer:2,
},
{
question:"<span class='notranslate'>Q. Which type of valve connections are opened or closed by means of spool slide? </span>| स&#2381;प&#2370;ल स&#2381;ल&#2366;इड क&#2375; म&#2366;ध&#2381;यम स&#2375; क&#2367;स प&#2381;रक&#2366;र क&#2375; व&#2366;ल&#2381;व कन&#2375;क&#2381;शन क&#2379; ख&#2379;ल&#2366; य&#2366; ब&#2306;द क&#2367;ए ज&#2366;त&#2375; ह&#2376;&#2306;?",
options:["<span class='notranslate'>(A) Check valve </span>| च&#2375;क व&#2366;ल&#2381;व","<span class='notranslate'>(B) Butterfly valve </span>| बटरफ&#2381;ल&#2366;ई व&#2366;ल&#2381;व","<span class='notranslate'>(C) Solenoid valve </span>| स&#2379;ल&#2375;न&#2379;इड व&#2366;ल&#2381;व","<span class='notranslate'>(D) Non-return valve </span>| न&#2377;न र&#2367;टर&#2381;न व&#2366;ल&#2381;व"],
answer:1,
},
{
question:"<span class='notranslate'>Q. What is the name of part marked as ʹXʹ in double acting cylinder? </span>| डबल एक&#2381;ट&#2367;&#2306;ग स&#2367;ल&#2375;&#2306;डर म&#2375; ʹXʹ च&#2367;ह&#2381;न&#2367;त भ&#2366;ग क&#2366; न&#2366;म क&#2381;य&#2366; ह&#2376;?<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgbr77tQzHRPqAr0MnUE9MIOOmWeU4kcAsTrhDtMfMFRKHJBNAcrh4NVNEq3kG0iDunxef2P6QvZWasR5p8MeqfqNR_vAG7Tb8seDEU1OZGRDueWd4efUd8ZTNo7eV2cJ3cGFpM3xgyPF3Pq8Vk9CASF7pmgjZuFbU9tlFAWYRfwLTjA6s-V0D_wrtY_hhI/s320/FIT2-11-242.JPG'>",
options:["<span class='notranslate'>(A) Guide ring </span>| ग&#2366;इड र&#2367;&#2306;ग","<span class='notranslate'>(B) Piston rod </span>| प&#2367;स&#2381;टन र&#2377;ड","<span class='notranslate'>(C) Lock nut </span>| ल&#2377;क नट","<span class='notranslate'>(D) Cylinder cap </span>| स&#2367;ल&#2375;&#2306;डर क&#2376;प"],
answer:1,
},
{
question:"<span class='notranslate'>Q. Which energy is converted by hydro static pressure of the oil? </span>| त&#2375;ल क&#2375; ह&#2366;इड&#2381;र&#2379; स&#2381;ट&#2375;ट&#2367;क दब&#2366;व द&#2381;व&#2366;र&#2366; क&#2367;स ऊर&#2381;ज&#2366; क&#2379; पर&#2367;वर&#2381;त&#2367;त क&#2367;य&#2366; ज&#2366;त&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Electrical energy </span>| व&#2367;द&#2381;य&#2369;त ऊर&#2381;ज&#2366;","<span class='notranslate'>(B) Mechanical energy </span>| य&#2366;&#2306;त&#2381;र&#2367;क ऊर&#2381;ज&#2366;","<span class='notranslate'>(C) Pneumatic energy </span>| न&#2381;य&#2370;म&#2375;ट&#2367;क ऊर&#2381;ज&#2366;","<span class='notranslate'>(D) Hydraulic energy </span>| ह&#2366;इड&#2381;र&#2379;ल&#2367;क ऊर&#2381;ज&#2366;"],
answer:1,
},
{
question:"<span class='notranslate'>Q. Name the position of electro pneumatic push button in change over condition.</span>| पर&#2367;वर&#2381;तन क&#2368; स&#2381;थ&#2367;त&#2367; म&#2375;&#2306; इल&#2375;क&#2381;ट&#2381;र&#2379; न&#2381;य&#2370;म&#2375;ट&#2367;क प&#2369;श बटन क&#2368; स&#2381;थ&#2367;त&#2367; क&#2366; न&#2366;म बत&#2366;इए&#2404;<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhB9MK2AuCULCpdtWEYCh2hlYFJzmHJXmVCE8dBNm4qjjHtSDf-4-wDX142fj-L57sRp9f5sXyUHb4AZvmqu0oxM1YzHMh6tOQGUbK-XFlFbx0ZhvJh-v10x9K4AWC6_JADppjq7elt7XYXybfkaXasTpnVLCo8Z2Kz9kv9uJDwYt3mJmI7TAzkAgbDThZ7/s1600/FIT2-11-427.jpg'>",
options:["<span class='notranslate'>(A) Vertical position </span>| ऊर&#2381;ध&#2381;व&#2366;धर स&#2381;थ&#2367;त&#2367;","<span class='notranslate'>(B) Normal position </span>| स&#2366;म&#2366;न&#2381;य स&#2381;थ&#2367;त&#2367;","<span class='notranslate'>(C) Actuated position </span>| सक&#2381;र&#2367;य स&#2381;थ&#2367;त&#2367;","<span class='notranslate'>(D) Horizontal position </span>| क&#2381;ष&#2376;त&#2367;ज स&#2381;थ&#2367;त&#2367;"],
answer:2,
},
{
question:"<span class='notranslate'>Q. Name the part marked ʹxʹ in a relay.</span>| र&#2367;ल&#2375; म&#2375;&#2306; ʹxʹ च&#2367;ह&#2381;न&#2367;त भ&#2366;ग क&#2366; न&#2366;म बत&#2366;इए&#2404;<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjhzw_2nepU5KA1J0m3hKGiQqibsFY-GeBvY7d-KtKtHdGSd5bCpD5bBRttanEQe3s-iXqtdWKobhouIxs_3E97NTNYJ8QkjrjFdbBBKyPfy3ZqphvwqR_FO63Q9RbDmigZYdwDain2w4eA0VXnlZhRifmNKXC4y6wbSWnYGE75k5ZjUNAdjBAoRqYb-D7o/s1600/FIT2-11-428.jpg'>",
options:["<span class='notranslate'>(A) Return spring </span>| र&#2367;टर&#2381;न स&#2381;प&#2381;र&#2367;&#2306;ग","<span class='notranslate'>(B) Contact terminal </span>| टर&#2381;म&#2367;नल स&#2375; स&#2306;पर&#2381;क कर&#2375;&#2306;","<span class='notranslate'>(C) Coil core </span>| क&#2369;&#2306;डल क&#2379;र","<span class='notranslate'>(D) Armature </span>| आर&#2381;म&#2375;चर"],
answer:3,
},
{
question:"<span class='notranslate'>Q. What happens, if voltage is applied to the coil of a relay in an electromagnetic switch? </span>| यद&#2367; व&#2367;द&#2381;य&#2369;त च&#2369;म&#2381;बक&#2368;य स&#2381;व&#2367;च म&#2375;&#2306; र&#2367;ल&#2375; क&#2375; क&#2377;इल पर व&#2379;ल&#2381;ट&#2375;ज ल&#2366;ग&#2370; क&#2367;य&#2366; ज&#2366;त&#2366; ह&#2376; त&#2379; क&#2381;य&#2366; ह&#2379;त&#2366; ह&#2376;?<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjaiwb0LXywkXU6xHpKISiYye_C11C2uRj5IzLUZEPVsjVaxOgg0modM8VMkcswi9CfwM770tmAPc8Cq7mREE6M2IZJleNtaiPA6td72qo0NaPDAERfejrZ1MNRzqYhDOjptAsN6jIkC6dOHF19RExF0woMZDs7IHN8S4wSesy91bo4qd1tuKbFlBwk7GKh/s320/FIT2-11-435.jpg'>",
options:["<span class='notranslate'>(A) Armature start rotating </span>| आर&#2381;म&#2375;चर घ&#2370;मन&#2375; लगत&#2366; ह&#2376;","<span class='notranslate'>(B) Intensity of current increase </span>| ध&#2366;र&#2366; व&#2371;द&#2381;ध&#2367; क&#2368; त&#2368;व&#2381;रत&#2366;","<span class='notranslate'>(C) Intensity of current decreases </span>| ध&#2366;र&#2366; क&#2368; त&#2368;व&#2381;रत&#2366; कम ह&#2379; ज&#2366;त&#2368; ह&#2376;","<span class='notranslate'>(D) Electro magnetic field created </span>| व&#2367;द&#2381;य&#2369;त च&#2369;&#2306;बक&#2368;य क&#2381;ष&#2375;त&#2381;र बन&#2366;य&#2366; गय&#2366;"],
answer:3,
},
{
question:"<span class='notranslate'>Q. What is the name of valve symbol in hydraulic circuit? </span>| ह&#2366;इड&#2381;र&#2379;ल&#2367;क सर&#2381;क&#2367;ट म&#2375;&#2306; व&#2366;ल&#2381;व प&#2381;रत&#2368;क क&#2366; क&#2381;य&#2366; न&#2366;म ह&#2376;?<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgN3pkjEG9sxmNPx0SoS32CRT_AQHqik95Sq_cqoGk-KUfh9vQPolHqzDFZzmIaXIZLq6_IP7Bz89S6I05QbTAUxaW-oxStayXDkFeaqg8KMRinaEhIhWDL2Zklh5b8a-E5wzcOHc-OoX10DIUhyqUxzqbqvCpGitZSZq2qv9hjpLLXEay9lmuhDCMRXQbq/s320/FIT2-11-430.jpg'>",
options:["<span class='notranslate'>(A) Non return valve </span>| ग&#2376;रव&#2366;पस&#2368; व&#2377;ल&#2381;व","<span class='notranslate'>(B) 3/2 way valve </span>| 3/2 र&#2366;स&#2381;त&#2366; व&#2366;ल&#2381;व","<span class='notranslate'>(C) Roller valve </span>| र&#2379;लर व&#2366;ल&#2381;व","<span class='notranslate'>(D) Pressure control valve </span>| दब&#2366;व न&#2367;य&#2306;त&#2381;रण छ&#2367;द&#2381;र"],
answer:0,
},
{
question:"<span class='notranslate'>Q. What is the cause for the armature attracted by the coil core in electro magnetic actuated switch? </span>| इल&#2375;क&#2381;ट&#2381;र&#2379; म&#2376;ग&#2381;न&#2375;ट&#2367;क एक&#2381;च&#2369;एट&#2375;ड स&#2381;व&#2367;च म&#2375;&#2306; क&#2377;इल क&#2379;र द&#2381;व&#2366;र&#2366; आर&#2381;म&#2375;चर क&#2379; आकर&#2381;ष&#2367;त करन&#2375; क&#2366; क&#2366;रण क&#2381;य&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Electromagnet field produced in solenoid coil </span>| स&#2379;लन&#2377;इड क&#2369;&#2306;डल म&#2375;&#2306; उत&#2381;पन&#2381;न व&#2367;द&#2381;य&#2369;तच&#2369;म&#2381;बक&#2368;य क&#2381;ष&#2375;त&#2381;र","<span class='notranslate'>(B) Electromagnet field produced in relay coil </span>| र&#2367;ल&#2375; क&#2377;इल म&#2375;&#2306; व&#2367;द&#2381;य&#2369;त च&#2369;&#2306;बक क&#2381;ष&#2375;त&#2381;र उत&#2381;पन&#2381;न ह&#2379;त&#2366; ह&#2376;","<span class='notranslate'>(C) Electromagnet field produced in return spring </span>| र&#2367;टर&#2381;न स&#2381;प&#2381;र&#2367;&#2306;ग म&#2375;&#2306; व&#2367;द&#2381;य&#2369;त च&#2369;&#2306;बक क&#2381;ष&#2375;त&#2381;र उत&#2381;पन&#2381;न ह&#2379;त&#2366; ह&#2376;","<span class='notranslate'>(D) Electromagnet field produced in armature </span>| आर&#2381;म&#2375;चर म&#2375;&#2306; उत&#2381;पन&#2381;न व&#2367;द&#2381;य&#2369;त च&#2369;म&#2381;बक क&#2381;ष&#2375;त&#2381;र"],
answer:0,
},
{
question:"<span class='notranslate'>Q. How the air flow in single solenoid valve shown? </span>| एकल स&#2379;लन&#2377;इड व&#2366;ल&#2381;व म&#2375;&#2306; व&#2366;य&#2369; प&#2381;रव&#2366;ह क&#2376;स&#2375; द&#2367;ख&#2366;य&#2366; गय&#2366; ह&#2376;?<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhNEEa01nFLJnj8i6Nm8dPpv_JjdUIB9MlbGqwTy0EGY9eIK6OO7KF9VKnuEq5pj3Biv1q8FTH5O17wQcebFjrifjnf7WhYYTVPOKGP8NUD0xV0l6NszVd7B41AlUSW18dVazQyQR83yBJAyl9ThmmUml81fuGKJ4dhMuQsQUA5q7UFY9oHrfk-46ntYEJT/s320/FIT2-11-433.jpg'>",
options:["<span class='notranslate'>(A) Port 1 to 2 </span>| प&#2379;र&#2381;ट 1 स&#2375; 2","<span class='notranslate'>(B) Port 2 to 1 </span>| प&#2379;र&#2381;ट 2 स&#2375; 1","<span class='notranslate'>(C) Port 1 to 3 </span>| प&#2379;र&#2381;ट 1 स&#2375; 3","<span class='notranslate'>(D) Port 2 to 3 </span>| प&#2379;र&#2381;ट 2 स&#2375; 3"],
answer:0,
},
{
question:"<span class='notranslate'>Q. What is the effect of the disc not seated to its position in pneumatic swing check valve? </span>| व&#2366;यव&#2368;य स&#2381;व&#2367;&#2306;ग च&#2375;क व&#2366;ल&#2381;व म&#2375;&#2306; ड&#2367;स&#2381;क अपन&#2368; स&#2381;थ&#2367;त&#2367; पर न ब&#2376;ठन&#2375; क&#2366; क&#2381;य&#2366; प&#2381;रभ&#2366;व पड&#2364;त&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Regulate the flow rate </span>| प&#2381;रव&#2366;ह दर क&#2379; व&#2367;न&#2367;यम&#2367;त कर&#2375;&#2306;","<span class='notranslate'>(B) Air flow in reverse direction </span>| व&#2366;य&#2369; क&#2366; प&#2381;रव&#2366;ह व&#2367;पर&#2368;त द&#2367;श&#2366; म&#2375;&#2306; ह&#2379;त&#2366; ह&#2376;","<span class='notranslate'>(C) Prevents the air flow in reverse direction </span>| व&#2367;पर&#2368;त द&#2367;श&#2366; म&#2375;&#2306; व&#2366;य&#2369; प&#2381;रव&#2366;ह क&#2379; र&#2379;कत&#2366; ह&#2376;","<span class='notranslate'>(D) Controls the direction of flow </span>| प&#2381;रव&#2366;ह क&#2368; द&#2367;श&#2366; क&#2379; न&#2367;य&#2306;त&#2381;र&#2367;त करत&#2366; ह&#2376;"],
answer:1,
},
{
question:"<span class='notranslate'>Q. What is the air flow direction? </span>| व&#2366;य&#2369; प&#2381;रव&#2366;ह क&#2368; द&#2367;श&#2366; क&#2381;य&#2366; ह&#2376;?<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgvVTFCcktHRxDQyDIXdxPUDSS7rnH2IfyKIOjcibmwAh5LFwZHMhwa3a16zgOKzPsZEHscI7T_0AXORazZHBXk50sJIuL_bDOS0oy9F_EJIiIwN8XnPB6-hTFE-7_blpzrYElBG5n98JZK31CPepZ4pYb__R2yKvzSTnGd4FOj5MU5ChAuj3aMy4zUZGRV/s1600/FIT2-11-431.jpg'>",
options:["<span class='notranslate'>(A) No air flow </span>| क&#2379;ई व&#2366;य&#2369; प&#2381;रव&#2366;ह नह&#2368;&#2306;","<span class='notranslate'>(B) 2 to 3 </span>| 2 स&#2375; 3","<span class='notranslate'>(C) 3 to 2 </span>| 3 स&#2375; 2","<span class='notranslate'>(D) 1"],
answer:1,
},
{
question:"<span class='notranslate'>Q. What is the closed port in symbol shown? </span>| द&#2367;ख&#2366;ए गए प&#2381;रत&#2368;क म&#2375;&#2306; ब&#2306;द प&#2379;र&#2381;ट क&#2381;य&#2366; ह&#2376;?<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi2OOX_i7jQ3jfdyjx7-MWqYf1rlBfoI73Xf-toS4rRACjbvMPuLZqTjzgXHGSrS_ga3voBGaQDlcMn0ry1KwM10Vx53tHv-eUCVN9kQz3EcHPOSjuSDxiF2nnTikiJgueeHwPjSmEYhSWiP4SgCR51lcTiEL-kmVldnhRsZCwY73sxmSwPkNqqtVE4G5Gq/s1600/FIT2-11-432.jpg'>",
options:["<span class='notranslate'>(A) 1","<span class='notranslate'>(B) 2","<span class='notranslate'>(C) 3","<span class='notranslate'>(D) 4"],
answer:2,
},
{
question:"<span class='notranslate'>Q. How to reduce the flow air from the sketch shown? </span>| द&#2367;ख&#2366;ए गए स&#2381;क&#2375;च स&#2375; प&#2381;रव&#2366;ह व&#2366;य&#2369; क&#2379; क&#2376;स&#2375; कम कर&#2375;&#2306;?<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhMJnsPenN8o0DqMyFe5xE0-8-t8vU6BTK48sMC6HX7XCOcSz0bBq8hB1kzW7yYFwgCCaeZ6i1rpTl8p5HL93mGOBadq4hs8d5Sx8cNWKZ7h7eiqj2fsLw6C8BYHWMmwcl5VwYlbXtzLbw27m8Q1rCAlWNd91HwEfR76FZk5cyRBNXFkkxovmOEYM6fkydB/s1600/FIT2-11-434.jpg'>",
options:["<span class='notranslate'>(A) Applying more pressure </span>| अध&#2367;क दब&#2366;व ड&#2366;लन&#2366;","<span class='notranslate'>(B) Applying less pressure </span>| कम दब&#2366;व लग&#2366;न&#2366;","<span class='notranslate'>(C) Less opening of needle </span>| न&#2368;डल क&#2366; कम ख&#2369;लन&#2366;","<span class='notranslate'>(D) More opening of needle </span>| न&#2368;डल क&#2366; अध&#2367;क ख&#2369;लन&#2366;"],
answer:2,
}
]
},
{
 category:"<span class='notranslate'>Module 12 Preventive maintenance </span>| न&#2367;व&#2366;रक रखरख&#2366;व",
 quizWrap:[{
question:"<span class='notranslate'>Q. Which document is used to record part no, name of the part, batch no and batch quantity? </span>| भ&#2366;ग स&#2306;ख&#2381;य&#2366;, भ&#2366;ग क&#2366; न&#2366;म, ब&#2376;च स&#2306;ख&#2381;य&#2366; और ब&#2376;च म&#2366;त&#2381;र&#2366; र&#2367;क&#2377;र&#2381;ड करन&#2375; क&#2375; ल&#2367;ए क&#2367;स दस&#2381;त&#2366;व&#2375;ज&#2364; क&#2366; उपय&#2379;ग क&#2367;य&#2366; ज&#2366;त&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Batch processing record </span>| ब&#2376;च प&#2381;र&#2379;स&#2375;स&#2367;&#2306;ग र&#2367;क&#2377;र&#2381;ड","<span class='notranslate'>(B) Flow process chart </span>| फ&#2364;&#2381;ल&#2379; प&#2381;र&#2379;स&#2375;स च&#2366;र&#2381;ट","<span class='notranslate'>(C) Bill of material </span>| स&#2366;मग&#2381;र&#2368; क&#2366; ब&#2367;ल","<span class='notranslate'>(D) Production cycle time </span>| उत&#2381;प&#2366;दन चक&#2381;र क&#2366; समय"],
answer:0,
},
{
question:"<span class='notranslate'>Q. What is the system of lubrication? </span>| स&#2381;न&#2375;हन क&#2368; प&#2381;रण&#2366;ल&#2368; क&#2380;न स&#2368; ह&#2376;?<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgvlZhm7rqdr-FcJGRIrLEBSwYE2OlpnbLV_OkYhwxCIvBvR29Q0u5YTORWaZ4-hD-oh0r1k6s90gdioALsXkwRMD2mq6vHU-fCuBxEuL05p4qaI4UFT1kmzWwUaiPA7PrUJToeJaxUKAwFH6GsppTxsIB1d2IhYfuMopiZalnFsugdwQ_VXsPDIIYYl_oO/s1600/FIT2-12-251.JPG'>",
options:["<span class='notranslate'>(A) Wick feed </span>| व&#2367;क फ&#2367;ड","<span class='notranslate'>(B) Ring oiling </span>| र&#2367;&#2306;ग आयल&#2367;&#2306;ग","<span class='notranslate'>(C) Splash system </span>| स&#2381;पल&#2376;श प&#2381;रण&#2366;ल&#2368;","<span class='notranslate'>(D) Manual screw down system </span>| म&#2376;न&#2369;अल स&#2381;क&#2381;र&#2370; ड&#2366;उन स&#2367;स&#2381;टम"],
answer:1,
},
{
question:"<span class='notranslate'>Q. Which cutting fluid dissolve in water giving a milky white solution? </span>| क&#2380;न स&#2366; क&#2366;टन&#2375; व&#2366;ल&#2366; द&#2381;रव प&#2366;न&#2368; म&#2375;&#2306; घ&#2369;लकर म&#2367;ल&#2381;क&#2368; व&#2381;ह&#2366;इट घ&#2379;ल द&#2375;त&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Fatty oil </span>| वस&#2366;य&#2369;क&#2381;त त&#2375;ल","<span class='notranslate'>(B) Straight mineral oil </span>| स&#2368;ध&#2366; खन&#2367;ज त&#2375;ल","<span class='notranslate'>(C) Soluble oil </span>| घ&#2369;लनश&#2368;ल त&#2375;ल","<span class='notranslate'>(D) Blended oil </span>| म&#2367;श&#2381;र&#2367;त त&#2375;ल"],
answer:2,
},
{
question:"<span class='notranslate'>Q. How the grease is lubricated in manual screw down greaser? </span>| म&#2376;न&#2381;य&#2369;अल स&#2381;क&#2381;र&#2370; ड&#2366;उन ग&#2381;र&#2368;सर म&#2375;&#2306; ग&#2381;र&#2368;स क&#2379; क&#2376;स&#2375; च&#2367;कन&#2366;ई द&#2368; ज&#2366;त&#2368; ह&#2376;?",
options:["<span class='notranslate'>(A) Due to atmospheric pressure </span>| व&#2366;य&#2369;म&#2306;डल&#2368;य दब&#2366;व क&#2375; क&#2366;रण","<span class='notranslate'>(B) Due to Liquidity of grease </span>| ग&#2381;र&#2368;स क&#2368; तरलत&#2366; क&#2375; क&#2366;रण","<span class='notranslate'>(C) By turning down in grease cup </span>| ग&#2381;र&#2368;स कप म&#2375;&#2306; न&#2368;च&#2375; करक&#2375;","<span class='notranslate'>(D) By turning up the grease cup </span>| ग&#2381;र&#2368;स कप क&#2379; ऊपर करक&#2375;"],
answer:2,
},
{
question:"<span class='notranslate'>Q. What is the name of washer? </span>| इस व&#2377;शर क&#2366; न&#2366;म क&#2381;य&#2366; ह&#2376;?<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiUNPogxQVgNkJEQKLdnU8RVSBI5EtQEEqno1mYTzgf_qsE1SBk88rOxBx2fx9u7qTOZjAUwEu_kU2s4V46ImHUhW-69L-YXtrm5NkQU-MPRymHIkAwMpJmeGzXpKf_m_GqwnB3bDiDfXRhZjoi2USeWs3lEV2SwnTC_CdyKc35H6nR1pYRFO_HJwdYjVT7/s1600/FIT2-12-271.JPG'>",
options:["<span class='notranslate'>(A) Internal type washer </span>| आ&#2306;तर&#2367;क प&#2381;रक&#2366;र व&#2377;शर","<span class='notranslate'>(B) External type washer </span>| ब&#2366;हर&#2368; प&#2381;रक&#2366;र व&#2377;शर","<span class='notranslate'>(C) Internal and External washer </span>| आ&#2306;तर&#2367;क और ब&#2366;हर&#2368; व&#2377;शर","<span class='notranslate'>(D) Counter sunk washer </span>| क&#2366;उ&#2306;टर स&#2306;क व&#2377;शर"],
answer:2,
},
{
question:"<span class='notranslate'>Q. What is the symbol marked as &#8216;x&#8217;? </span>| &#8217;X&#8217; क&#2375; र&#2370;प म&#2375;&#2306; च&#2367;ह&#2381;न&#2367;त प&#2381;रत&#2368;क क&#2381;य&#2366; ह&#2376;?<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjgQw0oZHe2bVgdUsHhMNjNyRkjnLV4DawV-dLZQ8_OaiPdEyRC9qiIbbqoj90inq1KGOnVqoFOuyBx2SEDQ8j-7EbiZTRiJTLCVT9bAz6iDqnc7qjHPWXLO9yuF-19fxQp0anYYoF_jyIHdZNq1wEh64smya4oIKWX7-6HNLn2Kl1hhZhjk7s4jUcrSgTT/s1600/FIT2-12-256.JPG'>",
options:["<span class='notranslate'>(A) Daily </span>| र&#2379;ज","<span class='notranslate'>(B) Weekly </span>| स&#2366;प&#2381;त&#2366;ह&#2367;क","<span class='notranslate'>(C) Monthly </span>| मह&#2368;न&#2375; क&#2375;","<span class='notranslate'>(D) Schedule for frequency other than above </span>| ऊपर स&#2375; अन&#2381;य आव&#2371;त&#2381;त&#2367; क&#2375; ल&#2367;ए अन&#2369;स&#2370;च&#2368;"],
answer:2,
},
{
question:"<span class='notranslate'>Q. When the shaft is rotating at full speed a full ring of lubricating film is formed around the shaft.What is the effect film formed around the shaft? </span>| जब श&#2366;फ&#2381;ट प&#2370;र&#2368; गत&#2367; स&#2375; घ&#2370;म रह&#2366; ह&#2379;त&#2366; ह&#2376; त&#2379; श&#2366;फ&#2381;ट क&#2375; च&#2366;र&#2379;&#2306; ओर च&#2367;कन&#2366;ई व&#2366;ल&#2368; फ&#2367;ल&#2381;म क&#2368; एक प&#2370;र&#2368; र&#2367;&#2306;ग बन ज&#2366;त&#2368; ह&#2376;&#2404; श&#2366;फ&#2381;ट क&#2375; च&#2366;र&#2379;&#2306; ओर बनन&#2375; व&#2366;ल&#2368; प&#2381;रभ&#2366;व फ&#2367;ल&#2381;म क&#2381;य&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Increases the frictional resistance </span>| घर&#2381;षण प&#2381;रत&#2367;र&#2379;ध क&#2379; बढ&#2364;&#2366;त&#2366; ह&#2376;","<span class='notranslate'>(B) Decreases the frictional resistance </span>| घर&#2381;षण प&#2381;रत&#2367;र&#2379;ध कम ह&#2379; ज&#2366;त&#2366; ह&#2376;","<span class='notranslate'>(C) Increases the speed of the shaft </span>| श&#2366;फ&#2381;ट क&#2368; गत&#2367; बढ&#2364; ज&#2366;त&#2368; ह&#2376;","<span class='notranslate'>(D) Decreases the speed of the shaft </span>| श&#2366;फ&#2381;ट क&#2368; गत&#2367; कम ह&#2379; ज&#2366;त&#2368; ह&#2376;"],
answer:1,
},
{
question:"<span class='notranslate'>Q. Which document is used to list of parts involved in manufacturing? </span>| व&#2367;न&#2367;र&#2381;म&#2366;ण म&#2375;&#2306; श&#2366;म&#2367;ल ह&#2367;स&#2381;स&#2379;&#2306; क&#2368; स&#2370;च&#2368; बन&#2366;न&#2375; क&#2375; ल&#2367;ए क&#2367;स दस&#2381;त&#2366;व&#2375;ज&#2364; क&#2366; उपय&#2379;ग क&#2367;य&#2366; ज&#2366;त&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Process chart </span>| प&#2381;रक&#2381;र&#2367;य&#2366; च&#2366;र&#2381;ट","<span class='notranslate'>(B) Job card </span>| प&#2381;रक&#2381;र&#2367;य&#2366; च&#2366;र&#2381;ट","<span class='notranslate'>(C) Bill of material </span>| स&#2366;मग&#2381;र&#2368; क&#2366; ब&#2367;ल","<span class='notranslate'>(D) Estimation of work </span>| क&#2366;र&#2381;य क&#2366; अन&#2369;म&#2366;न"],
answer:2,
},
{
question:"<span class='notranslate'>Q. Which cutting fluids are used in cutting thread on cast iron material? </span>| कच&#2381;च&#2366; ल&#2379;ह&#2366; स&#2366;मग&#2381;र&#2368; पर थ&#2381;र&#2375;ड&#2381;स क&#2366;टन&#2375; म&#2375;&#2306; क&#2380;न स&#2375; क&#2366;टन&#2375; व&#2366;ल&#2375; तरल पद&#2366;र&#2381;थ क&#2366; उपय&#2379;ग क&#2367;य&#2366; ज&#2366;त&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Land oil </span>| भ&#2370;म&#2367; क&#2366; त&#2375;ल","<span class='notranslate'>(B) Kerosene </span>| म&#2367;ट&#2381;ट&#2368; क&#2366; त&#2375;ल","<span class='notranslate'>(C) Sulphurized oil </span>| ग&#2306;धकय&#2369;क&#2381;त त&#2375;ल","<span class='notranslate'>(D) Soluble oil </span>| घ&#2369;लनश&#2368;ल त&#2375;ल"],
answer:2,
},
{
question:"<span class='notranslate'>Q. Which format is used to program the frequency of maintenance schedules? </span>| रखरख&#2366;व अन&#2369;स&#2370;च&#2367;य&#2379;&#2306; क&#2368; आव&#2371;त&#2381;त&#2367; क&#2379; प&#2381;र&#2379;ग&#2381;र&#2366;म करन&#2375; क&#2375; ल&#2367;ए क&#2367;स प&#2381;र&#2366;र&#2370;प क&#2366; उपय&#2379;ग क&#2367;य&#2366; ज&#2366;त&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Machinery and equipment format </span>| मश&#2368;नर&#2368; और उपकरण प&#2381;र&#2366;र&#2370;प","<span class='notranslate'>(B) Preventive maintenance format </span>| न&#2367;व&#2366;रक रखरख&#2366;व प&#2381;र&#2366;र&#2370;प","<span class='notranslate'>(C) Maintenance log format </span>| रखरख&#2366;व ल&#2377;ग प&#2381;र&#2366;र&#2370;प","<span class='notranslate'>(D) Estimation format </span>| अन&#2369;म&#2366;न प&#2381;र&#2366;र&#2370;प"],
answer:1,
},
{
question:"<span class='notranslate'>Q. Which record is used to calculate the expenditure to be incurred on a particular job? </span>| क&#2367;स&#2368; व&#2367;श&#2375;ष क&#2366;र&#2381;य पर ह&#2379;न&#2375; व&#2366;ल&#2375; व&#2381;यय क&#2368; गणन&#2366; क&#2375; ल&#2367;ए क&#2367;स र&#2367;क&#2377;र&#2381;ड क&#2366; उपय&#2379;ग क&#2367;य&#2366; ज&#2366;त&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Estimation record </span>| अन&#2369;म&#2366;न र&#2367;क&#2377;र&#2381;ड","<span class='notranslate'>(B) Maintenance record </span>| रखरख&#2366;व र&#2367;क&#2366;र&#2381;ड","<span class='notranslate'>(C) Inspection record </span>| न&#2367;र&#2368;क&#2381;षण र&#2367;क&#2366;र&#2381;ड","<span class='notranslate'>(D) Productivity record </span>| उत&#2381;प&#2366;दकत&#2366; र&#2367;क&#2377;र&#2381;ड"],
answer:0,
},
{
question:"<span class='notranslate'>Q. Which cutting fluid is used for threading in general purpose steel? </span>| स&#2366;म&#2366;न&#2381;य प&#2381;रय&#2379;जन क&#2375; स&#2381;ट&#2368;ल म&#2375;&#2306; थ&#2381;र&#2375;ड&#2367;&#2306;ग क&#2375; ल&#2367;ए क&#2367;स तरल पद&#2366;र&#2381;थ क&#2366; उपय&#2379;ग क&#2367;य&#2366; ज&#2366;त&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Soluble oil </span>| स&#2379;ल&#2381;य&#2369;बल त&#2375;ल","<span class='notranslate'>(B) Lard oil </span>| ल&#2366;र&#2381;ड आयल","<span class='notranslate'>(C) Kerosene </span>| म&#2367;ट&#2381;ट&#2368; त&#2375;ल","<span class='notranslate'>(D) Dry </span>| स&#2370;ख&#2366;"],
answer:1,
},
{
question:"<span class='notranslate'>Q. Name the format gives the list of parts involved in manufacturing of an assembly.</span>| उस प&#2381;र&#2366;र&#2370;प क&#2366; न&#2366;म बत&#2366;इए ज&#2379; क&#2367;स&#2368; अस&#2375;&#2306;बल&#2368; क&#2375; न&#2367;र&#2381;म&#2366;ण म&#2375;&#2306; श&#2366;म&#2367;ल भ&#2366;ग&#2379;&#2306; क&#2368; स&#2370;च&#2368; द&#2375;त&#2366; ह&#2376;&#2404;",
options:["<span class='notranslate'>(A) Productivit </span>| उत&#2381;प&#2366;दकत&#2366; र&#2367;प&#2379;र&#2381;ट","<span class='notranslate'>(B) Flow process chart </span>| फ&#2364;&#2381;ल&#2379; प&#2381;र&#2379;स&#2375;स च&#2366;र&#2381;ट","<span class='notranslate'>(C) Batch processing record </span>| ब&#2376;च प&#2381;र&#2379;स&#2375;स&#2367;&#2306;ग र&#2367;क&#2377;र&#2381;ड","<span class='notranslate'>(D) Bill of material </span>| स&#2366;मग&#2381;र&#2368; क&#2366; ब&#2367;ल"],
answer:3,
},
{
question:"<span class='notranslate'>Q. Which type of lock washer used with flat or oval type head screw? </span>| फ&#2381;ल&#2376;ट य&#2366; ओवल ट&#2366;इप ह&#2375;ड स&#2381;क&#2381;र&#2370; क&#2375; स&#2366;थ क&#2367;स प&#2381;रक&#2366;र क&#2375; ल&#2377;क व&#2377;शर क&#2366; उपय&#2379;ग क&#2367;य&#2366; ज&#2366;त&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) External type </span>| ब&#2366;हर&#2368; प&#2381;रक&#2366;र","<span class='notranslate'>(B) Internal type </span>| आ&#2306;तर&#2367;क प&#2381;रक&#2366;र","<span class='notranslate'>(C) Counter sunk type </span>| क&#2366;उ&#2306;टर स&#2306;क प&#2381;रक&#2366;र","<span class='notranslate'>(D) Internal and external type </span>| आ&#2306;तर&#2367;क और ब&#2366;हर&#2368; प&#2381;रक&#2366;र"],
answer:2,
},
{
question:"<span class='notranslate'>Q. Why the servo mesh oils are blended with lead and sulphur compounds? </span>| सर&#2381;व&#2379; म&#2375;श त&#2375;ल क&#2379; स&#2368;स&#2366; और सल&#2381;फर य&#2380;ग&#2367;क&#2379;&#2306; क&#2375; स&#2366;थ क&#2381;य&#2379;&#2306; म&#2367;श&#2381;र&#2367;त क&#2367;य&#2366; ज&#2366;त&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Resistance to deposit formation </span>| जम&#2366; गठन क&#2366; प&#2381;रत&#2367;र&#2379;ध","<span class='notranslate'>(B) Resistance to viscosity </span>| च&#2367;पच&#2367;प&#2366;हट क&#2366; प&#2381;रत&#2367;र&#2379;ध","<span class='notranslate'>(C) Resistance to lubricity </span>| च&#2367;कन&#2366;ई क&#2366; प&#2381;रत&#2367;र&#2379;ध","<span class='notranslate'>(D) Resistance to oiliness </span>| त&#2376;ल&#2368;यत&#2366; क&#2366; प&#2381;रत&#2367;र&#2379;ध"],
answer:0,
},
{
question:"<span class='notranslate'>Q. What is the name of symbol marked as ʹxʹ? </span>| &#8217;X&#8217; क&#2375; र&#2370;प म&#2375;&#2306; च&#2367;ह&#2381;न&#2367;त प&#2381;रत&#2368;क क&#2379; न&#2366;म द&#2375;&#2306;&#2404;<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjSgCulhKu4ibjLAcIuvFUwVXVGdNKON61v2sC4jxb8hLz_6NEe-sxppFsoXH0VuOtxPIignhFB4W4rYzFxcajQ1krM7tRbA4QhZgpzvuFrEbyxKyZkxL4394Wmss7ky7DHhFjAO_AXSpTN0A6Ns8kxcbJmSAQMDj46wRR__2_8H7i1aiq8Dz1gjI2-UJjd/s1600/FIT2-12-262.JPG'>",
options:["<span class='notranslate'>(A) Daily </span>| र&#2379;ज","<span class='notranslate'>(B) Weekly </span>| स&#2366;प&#2381;त&#2366;ह&#2367;क","<span class='notranslate'>(C) Monthly </span>| मह&#2368;न&#2375;","<span class='notranslate'>(D) Scheduled for frequency other than above </span>| आव&#2371;त&#2381;त&#2367; क&#2375; ल&#2367;ए न&#2367;र&#2381;ध&#2366;र&#2367;त"],
answer:3,
},
{
question:"<span class='notranslate'>Q. Which is classified as hydrostatic lubrication? </span>| ह&#2366;इड&#2381;र&#2379;स&#2381;ट&#2376;ट&#2367;क स&#2381;न&#2375;हन क&#2375; र&#2370;प म&#2375;&#2306; क&#2367;स&#2375; वर&#2381;ग&#2368;क&#2371;त क&#2367;य&#2366; गय&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Fluidity of lubricate </span>| च&#2367;कन&#2366;ई क&#2368; तरलत&#2366;","<span class='notranslate'>(B) Oiliness of lubricant </span>| स&#2381;न&#2375;हक क&#2366; त&#2376;ल&#2368;यपन","<span class='notranslate'>(C) Thick film of lubricant </span>| च&#2367;कन&#2366;ई क&#2368; म&#2379;ट&#2368; फ&#2367;ल&#2381;म","<span class='notranslate'>(D) Thin film of lubricant </span>| स&#2381;न&#2375;हक क&#2368; पतल&#2368; फ&#2367;ल&#2381;म"],
answer:2,
},
{
question:"<span class='notranslate'>Q. Why the servo mesh oils are prepared as a gear oils? </span>| सर&#2381;व&#2379; म&#2375;श त&#2375;ल क&#2379; ग&#2367;यर त&#2375;ल क&#2375; र&#2370;प म&#2375;&#2306; क&#2381;य&#2379;&#2306; त&#2376;य&#2366;र क&#2367;य&#2366; ज&#2366;त&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Resistant to deposit formation </span>| जम&#2366;व न&#2367;र&#2381;म&#2366;ण क&#2375; प&#2381;रत&#2367; प&#2381;रत&#2367;र&#2379;ध&#2368;","<span class='notranslate'>(B) Resistance to lubricity </span>| च&#2367;कन&#2366;ई क&#2366; प&#2381;रत&#2367;र&#2379;ध","<span class='notranslate'>(C) Resistance to oiliness </span>| त&#2376;ल&#2368;यत&#2366; क&#2366; प&#2381;रत&#2367;र&#2379;ध","<span class='notranslate'>(D) Resistance to viscosity </span>| च&#2367;पच&#2367;प&#2366;हट क&#2366; प&#2381;रत&#2367;र&#2379;ध"],
answer:0,
},
{
question:"<span class='notranslate'>Q. Which one indicates readily separate the water from oil? </span>| क&#2380;न स&#2366; स&#2306;क&#2375;त प&#2366;न&#2368; क&#2379; त&#2375;ल स&#2375; आस&#2366;न&#2368; स&#2375; अलग करन&#2375; क&#2366; स&#2306;क&#2375;त द&#2375;त&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Viscosity </span>| श&#2381;य&#2366;नत&#2366;","<span class='notranslate'>(B) Oiliness </span>| च&#2366;ट&#2369;क&#2366;र&#2367;त&#2366;","<span class='notranslate'>(C) Emulsification </span>| प&#2366;यस&#2368;करण","<span class='notranslate'>(D) De-emulsification </span>| ड&#2368;-इमल&#2381;स&#2368;फ&#2367;क&#2375;शन"],
answer:3,
},
{
question:"<span class='notranslate'>Q. What is the name of lubrication system? </span>| इस स&#2381;न&#2375;हन प&#2381;रण&#2366;ल&#2368; क&#2366; न&#2366;म क&#2381;य&#2366; ह&#2376;?<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhe66zmzUT03xmR5jlDjgIqalFZ0M0p55fFsjPs59UscOr9BVrfZBE-QOmf-KW8wusz4_vRTpTG3LxvLiX4BCFV6AwUA-CVxKqMbzUUXkE4gcFpLkfeIV52_qp4Fv_0t-aBW0nAtzoB4qhUpfoFFZF9SUkcV9lESvAo9PtH-3zDIzBaq9SVKoTXWouNm8yh/s1600/FIT2-12-252.JPG'>",
options:["<span class='notranslate'>(A) Wick feed </span>| व&#2367;क फ&#2367;ड","<span class='notranslate'>(B) Ring oiling </span>| र&#2367;&#2306;ग आयल&#2367;&#2306;ग","<span class='notranslate'>(C) Gravity feed </span>| ग&#2369;र&#2369;त&#2381;व&#2366;कर&#2381;षण फ&#2364;&#2368;ड","<span class='notranslate'>(D) Splash lubricating </span>| स&#2381;पल&#2376;श ल&#2369;ब&#2381;र&#2367;क&#2375;ट&#2367;&#2306;ग"],
answer:3,
},
{
question:"<span class='notranslate'>Q. Which cutting fluid is used for heavy duty machine with less cutting speed? </span>| कम क&#2366;टन&#2375; क&#2368; गत&#2367; व&#2366;ल&#2375; ह&#2376;व&#2368; ड&#2381;य&#2370;ट&#2368; मश&#2368;न क&#2375; ल&#2367;ए क&#2367;स कट&#2367;&#2306;ग तरल क&#2366; उपय&#2379;ग क&#2367;य&#2366; ज&#2366;त&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Synthetic fluid </span>| स&#2367;&#2306;थ&#2375;ट&#2367;क तरल पद&#2366;र&#2381;थ","<span class='notranslate'>(B) Straight mineral oil </span>| स&#2368;ध&#2375; खन&#2367;ज त&#2375;ल","<span class='notranslate'>(C) Fatty oil </span>| वस&#2366;य&#2369;क&#2381;त त&#2375;ल","<span class='notranslate'>(D) Soluble oil </span>| घ&#2369;लनश&#2368;ल त&#2375;ल"],
answer:2,
},
{
question:"<span class='notranslate'>Q. Which cutting oil is used in automatic lathes? </span>| ऑट&#2379;म&#2376;ट&#2367;क ल&#2376;ट&#2381;स म&#2375;&#2306; क&#2380;न स&#2366; कट&#2367;&#2306;ग ऑयल इस&#2381;त&#2375;म&#2366;ल क&#2367;य&#2366; ज&#2366;त&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Soluble oil </span>| स&#2379;ल&#2381;य&#2369;बल त&#2375;ल","<span class='notranslate'>(B) Fatty oil </span>| वस&#2366;य&#2369;क&#2381;त त&#2375;ल","<span class='notranslate'>(C) Compounded (or) blended oil </span>| म&#2367;श&#2381;र&#2367;त (य&#2366;) ब&#2381;ल&#2375;&#2306;ड&#2375;ड त&#2375;ल","<span class='notranslate'>(D) Straight mineral oil </span>| स&#2381;ट&#2381;र&#2376;ट म&#2367;न&#2367;रल त&#2375;ल"],
answer:2,
},
{
question:"<span class='notranslate'>Q. Name the time of a machine runs automatically without manual intervention.</span>| क&#2367;स&#2368; मश&#2368;न क&#2375; म&#2366;नव&#2368;य हस&#2381;तक&#2381;ष&#2375;प क&#2375; ब&#2367;न&#2366; स&#2381;वच&#2366;ल&#2367;त र&#2370;प स&#2375; चलन&#2375; क&#2375; समय क&#2366; न&#2366;म बत&#2366;इए&#2404;",
options:["<span class='notranslate'>(A) Over all cycle time </span>| स&#2306;प&#2370;र&#2381;ण चक&#2381;र समय पर","<span class='notranslate'>(B) Machine cycle time </span>| मश&#2368;न चक&#2381;र क&#2366; समय","<span class='notranslate'>(C) Auto cycle time </span>| ऑट&#2379; चक&#2381;र समय","<span class='notranslate'>(D) Total cycle time </span>| क&#2369;ल चक&#2381;र समय"],
answer:2,
},
{
question:"<span class='notranslate'>Q. Which cutting fluid is used for turning copper? </span>| त&#2366;&#2306;ब&#2366; क&#2379; टर&#2381;न करन&#2375; क&#2375; ल&#2367;ए क&#2367;स तरल पद&#2366;र&#2381;थ क&#2366; उपय&#2379;ग क&#2367;य&#2366; ज&#2366;त&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Kerosene </span>| म&#2367;टट&#2368; क&#2366; त&#2375;ल","<span class='notranslate'>(B) Mineral oil </span>| खन&#2367;ज त&#2375;ल","<span class='notranslate'>(C) Soluble oil </span>| स&#2379;ल&#2381;य&#2369;बल त&#2375;ल","<span class='notranslate'>(D) Lard oil </span>| ल&#2366;र&#2381;ड आयल"],
answer:2,
},
{
question:"<span class='notranslate'>Q. Which system the wick feed lubrication is categorized? </span>| व&#2367;क फ&#2364;&#2368;ड स&#2381;न&#2375;हन क&#2367;स प&#2381;रण&#2366;ल&#2368; क&#2375; अ&#2306;तर&#2381;गत क&#2376;ट&#2375;गर&#2368;ज ह&#2379;त&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Hand feed </span>| ह&#2376;&#2306;ड फ&#2368;ड","<span class='notranslate'>(B) Force feed </span>| फ&#2379;र&#2381;स फ&#2368;ड","<span class='notranslate'>(C) Splash feed </span>| स&#2381;पल&#2376;श फ&#2364;&#2368;ड","<span class='notranslate'>(D) Gravity feed </span>| ग&#2369;र&#2369;त&#2381;व&#2366;कर&#2381;षण फ&#2364;&#2368;ड"],
answer:3,
}]
},
{
 category:"<span class='notranslate'>Module 13 Lubrication and Foundation </span>| स&#2381;न&#2375;हन और फ&#2366;उ&#2306;ड&#2375;शन",
 quizWrap:[{
question:"<span class='notranslate'>Q. Why sprit level should be placed on bridge as shown? </span>| द&#2367;ख&#2366;ए गए अन&#2369;स&#2366;र प&#2369;ल पर स&#2381;प&#2367;र&#2367;ट ल&#2375;वल क&#2381;य&#2379;&#2306; रख&#2366; ज&#2366;न&#2366; च&#2366;ह&#2367;ए?<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhGNhAChxKhrHaAXuzxl16U6N7daQWY8LotgiLCgpBFdyUZLh5ZodAo3rVgGKIPzXRYuuqkddgUjgyT3vuC5Pls5D_KyF-A-s6VFj0bb-psMEu4V4MQjlmsRfWMdbPXftQRXl4dwaR4RYbgO58e_2DYnY4U8lwMzASabpOFSQH5YofVHX5meUiUPdWSvWwE/s320/FIT2-13-468.jpg'>",
options:["<span class='notranslate'>(A) For easiness </span>| सहजत&#2366; क&#2375; ल&#2367;ए","<span class='notranslate'>(B) Avoid any error in spirit level </span>| भ&#2366;वन&#2366; स&#2381;तर म&#2375;&#2306; क&#2367;स&#2368; भ&#2368; त&#2381;र&#2369;ट&#2367; स&#2375; बच&#2375;&#2306;","<span class='notranslate'>(C) Correct the floor level error </span>| फर&#2381;श स&#2381;तर क&#2368; त&#2381;र&#2369;ट&#2367; क&#2379; ठ&#2368;क कर&#2375;&#2306;","<span class='notranslate'>(D) Inaccuracy of the scraped surface </span>| ख&#2369;रच&#2368; ह&#2369;ई सतह क&#2368; अश&#2369;द&#2381;ध&#2367;"],
answer:3,
},
{
question:"<span class='notranslate'>Q. What is the name of slinging block shown in figure? </span>| च&#2367;त&#2381;र म&#2375;&#2306; द&#2367;ख&#2366;ए गए स&#2381;ल&#2367;&#2306;ग&#2367;&#2306;ग ब&#2381;ल&#2377;क क&#2366; न&#2366;म क&#2381;य&#2366; ह&#2376;?<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjyU0zc1xvF8lnL9JfPnxq_h5jboWh3xFXLkiMD6r1lXJCPpTcvMyTR89OHJAcvu8AVF2q7iW64wwtOaB-Ussdy5dupsyF3P62WlVnJZ2bCf3BhuOe5HhU-Ylub_leZ9X2dZuS6RTQuBPW44WL-VUVkRjly8hzy1rJwU53BXz0i-p6drnuouEO5dyya9G-y/s1600/FIT2-13-461.jpg'>",
options:["<span class='notranslate'>(A) Eye hook </span>| आ&#2305;ख क&#2366; ह&#2369;क","<span class='notranslate'>(B) Eye hook with safety catch </span>| स&#2375;फ&#2381;ट&#2368; क&#2376;च क&#2375; स&#2366;थ आई ह&#2369;क","<span class='notranslate'>(C) Barrel hook </span>| ब&#2376;रल ह&#2369;क","<span class='notranslate'>(D) Swivel hook with spring safety hook </span>| स&#2381;प&#2381;र&#2367;&#2306;ग स&#2369;रक&#2381;ष&#2366; ह&#2369;क क&#2375; स&#2366;थ क&#2369;&#2306;ड&#2366; ह&#2369;क"],
answer:3,
},
{
question:"<span class='notranslate'>Q. What is the name of the crane? </span>| क&#2381;र&#2375;न क&#2366; न&#2366;म क&#2381;य&#2366; ह&#2376;?<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjqAQS9fJaX9i7Q3ITr_l3hs-pqvyJjuSeuhv5xonZyKy7ftugn8se57Zc4371aNmcydc9ypYbDK2eSrMvlpKArngK1Z51yGKJvW3__Cb94PkHXqcmMPfOFVKGN1cRANEjRz8DOzmSd0TNFtQV6Ku_OIfj7ekIaf2ue6Ig1rcrisaWsiXlrw3Rhwx6p9rX1/s1600/FIT2-13-282.JPG'>",
options:["<span class='notranslate'>(A) Gantry crane </span>| ग&#2376;न&#2381;ट&#2381;र&#2368; क&#2381;र&#2375;न","<span class='notranslate'>(B) Pillar jib crane </span>| प&#2367;लर ज&#2367;ब क&#2381;र&#2375;न","<span class='notranslate'>(C) Travelling crane </span>| ट&#2381;र&#2376;व&#2375;ल&#2367;&#2306;ग क&#2381;र&#2375;न","<span class='notranslate'>(D) Bracket jib crane </span>| ब&#2381;र&#2376;क&#2375;ट ज&#2367;ब क&#2381;र&#2375;न"],
answer:0,
},
{
question:"<span class='notranslate'>Q. Why foundation bolts are essential to machines? </span>| मश&#2368;न&#2379;&#2306; क&#2375; ल&#2367;ए फ&#2366;उ&#2306;ड&#2375;शन ब&#2379;ल&#2381;ट क&#2381;य&#2379;&#2306; आवश&#2381;यक ह&#2376;&#2306;?",
options:["<span class='notranslate'>(A) Observe vibration </span>| क&#2306;पन न&#2367;र&#2368;क&#2381;षण करन&#2375; क&#2375; ल&#2367;ए","<span class='notranslate'>(B) Hold machine firmly </span>| मश&#2368;न क&#2379; मजब&#2370;त&#2368; स&#2375; पकड&#2364;&#2375;&#2306;","<span class='notranslate'>(C) Improve the production </span>| उत&#2381;प&#2366;दन म&#2375;&#2306; स&#2369;ध&#2366;र","<span class='notranslate'>(D) Avoid shifting of machine </span>| मश&#2368;न क&#2379; श&#2367;फ&#2381;ट&#2367;&#2306;ग स&#2375; बचन&#2375; क&#2375; ल&#2367;ए"],
answer:1,
},
{
question:"<span class='notranslate'>Q. What is the purpose of dynamo eye bolt? </span>| डयन&#2366;म&#2379; आई ब&#2379;ल&#2381;च क&#2366; उद&#2381;द&#2375;श&#2381;य क&#2381;य&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Lift vertical load </span>| ऊध&#2381;व&#2366;धर भ&#2366;र उठ&#2366;ए&#2305;","<span class='notranslate'>(B) Lower horizontal load </span>| कम क&#2381;ष&#2376;त&#2367;ज भ&#2366;र","<span class='notranslate'>(C) Lead inclined load </span>| ल&#2368;ड&#2364; झ&#2369;क&#2366; ह&#2369;आ भ&#2366;र","<span class='notranslate'>(D) Suspend radial load </span>| न&#2367;ल&#2306;ब&#2367;त र&#2375;ड&#2367;यल भ&#2366;र"],
answer:0,
},
{
question:"<span class='notranslate'>Q. Why packer are placed at the edges, while lifting the load with wire rope sling one should keep the packer at the edges of the lifting load? </span>| प&#2376;कर क&#2379; क&#2367;न&#2366;र&#2379;&#2306; पर क&#2381;य&#2379;&#2306; रख&#2366; ज&#2366;त&#2366; ह&#2376;, त&#2366;र रस&#2381;स&#2368; स&#2381;ल&#2367;&#2306;ग स&#2375; भ&#2366;र उठ&#2366;त&#2375; समय प&#2376;कर क&#2379; भ&#2366;र उठ&#2366;न&#2375; व&#2366;ल&#2375; क&#2367;न&#2366;र&#2379;&#2306; पर रखन&#2366; च&#2366;ह&#2367;ए?",
options:["<span class='notranslate'>(A) Lifting load will not damage </span>| भ&#2366;र उठ&#2366;न&#2375; स&#2375; न&#2369;कस&#2366;न नह&#2368;&#2306; ह&#2379;ग&#2366;","<span class='notranslate'>(B) Lifting load will be at the enter </span>| भ&#2366;र उठ&#2366;न&#2366; प&#2381;रव&#2375;श द&#2381;व&#2366;र पर ह&#2379;ग&#2366;","<span class='notranslate'>(C) To maintain the centre of gravity </span>| ग&#2369;र&#2369;त&#2381;व&#2366;कर&#2381;षण क&#2375; क&#2375;&#2306;द&#2381;र क&#2379; बन&#2366;ए रखन&#2375; क&#2375; ल&#2367;ए","<span class='notranslate'>(D) To protect the sling at the edges of the load </span>| भ&#2366;र क&#2375; क&#2367;न&#2366;र&#2379;&#2306; पर स&#2381;ल&#2367;&#2306;ग क&#2368; स&#2369;रक&#2381;ष&#2366; क&#2375; ल&#2367;ए"],
answer:3,
},
{
question:"<span class='notranslate'>Q. Which one consists of a bridge constructed from several griders supporting travelling hoist? </span>| ट&#2381;र&#2376;वल&#2367;&#2306;ग ह&#2379;इस&#2381;ट क&#2379; सप&#2379;र&#2381;ट करन&#2375; व&#2366;ल&#2375; कई ग&#2381;र&#2367;डर&#2381;स स&#2375; न&#2367;र&#2381;म&#2367;त प&#2369;ल म&#2375;&#2306; स&#2375; क&#2380;न स&#2366; प&#2369;ल श&#2366;म&#2367;ल ह&#2376;?",
options:["<span class='notranslate'>(A) Floor crane </span>| फर&#2381;श क&#2381;र&#2375;न","<span class='notranslate'>(B) Jib crane </span>| ज&#2367;ब क&#2381;र&#2375;न","<span class='notranslate'>(C) Over head crane </span>| ओवरह&#2375;ड क&#2381;र&#2375;न","<span class='notranslate'>(D) Frame derrick crane </span>| फ&#2381;र&#2375;म ड&#2375;र&#2367;क क&#2381;र&#2375;न"],
answer:2,
},
{
question:"<span class='notranslate'>Q. What is the name of foundation bolt? </span>| फ&#2366;उ&#2306;ड&#2375;शन ब&#2379;ल&#2381;ट क&#2366; न&#2366;म क&#2381;य&#2366; ह&#2376;?<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgath9pltJP6t8xGnz552w5d1YMPxe4wlDfV3Mlq9Bp391TZnYPssJhliq2Inojd6HJhoKO9HiKiBX4sOHUCoYIBS9jRtWFhibyILp1F93jJ_gK7dbyahW__jyJfg2voGKwFKwEO1Tf25DTdGHPXeryA1ABJck4l84crtlzLB3kI7WeiN0NZ8r4KbpyZpeZ/s1600/FIT2-13-291.JPG'>",
options:["<span class='notranslate'>(A) Eye bolt </span>| आई ब&#2379;ल&#2381;ट","<span class='notranslate'>(B) Bent bolt </span>| ब&#2375;&#2306;ट ब&#2379;ल&#2381;ट","<span class='notranslate'>(C) Rawl bolt </span>| र&#2366;ल ब&#2379;ल&#2381;ट","<span class='notranslate'>(D) Conical washer foundation bolt </span>| क&#2379;न&#2367;कल व&#2377;शर फ&#2366;उ&#2306;ड&#2375;शन ब&#2379;ल&#2381;ट"],
answer:3,
},
{
question:"<span class='notranslate'>Q. What is the name of part marked ʹXʹ in single leg chain? </span>| स&#2367;&#2306;गल ल&#2375;ग च&#2375;न म&#2375;&#2306; ʹXʹ अ&#2306;क&#2367;त भ&#2366;ग क&#2366; न&#2366;म क&#2381;य&#2366; ह&#2376;?<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhgsDyC1MfZx0UC6tlYh5Gcc1r3_uslxANf7hkj1rmopQlTgOUqvzR71OxahgjRgHYGWFLdcSJ1kR2qE8dfKwdj998LjAg37XTjC5svH0g6l0XzQdAZSlFpYcFLIjg5XE59QiZWX3mSWzdBnOBuWr9UAKB956G-dw-BrfW8eY36l3X3rDHE3XPCw1sH34Jx/s320/FIT2-13-460.jpg'>",
options:["<span class='notranslate'>(A) Master link </span>| म&#2366;स&#2381;टर ल&#2367;&#2306;क","<span class='notranslate'>(B) Intermediate link </span>| मध&#2381;यवर&#2381;त&#2368; ल&#2367;&#2306;क","<span class='notranslate'>(C) Joining link </span>| ज&#2369;ड&#2364;न&#2375; क&#2366; ल&#2367;&#2306;क","<span class='notranslate'>(D) Chain </span>| च&#2375;इन&#2381;स"],
answer:2,
},
{
question:"<span class='notranslate'>Q. How it is separated in thick film lubrication, two surfaces of bearing are completely separated by a fluid film? </span>| इस&#2375; म&#2379;ट&#2368; फ&#2367;ल&#2381;म स&#2381;न&#2375;हन म&#2375;&#2306; क&#2376;स&#2375; अलग क&#2367;य&#2366; ज&#2366;त&#2366; ह&#2376;, ब&#2375;यर&#2367;&#2306;ग क&#2368; द&#2379; सतह&#2379;&#2306; क&#2379; एक द&#2381;रव फ&#2367;ल&#2381;म द&#2381;व&#2366;र&#2366; प&#2370;र&#2368; तरह स&#2375; अलग क&#2367;य&#2366; ज&#2366;त&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Because of resistance to wear </span>| घ&#2367;स&#2366;व क&#2375; प&#2381;रत&#2367;र&#2379;ध क&#2375; क&#2366;रण","<span class='notranslate'>(B) Because of prevents to adhesion </span>| क&#2381;य&#2379;&#2306;क&#2367; च&#2367;पकन&#2375; स&#2375; र&#2379;कत&#2366; ह&#2376;","<span class='notranslate'>(C) Because of heat carrying capacity </span>| त&#2366;प वहन क&#2381;षमत&#2366; क&#2375; क&#2366;रण","<span class='notranslate'>(D) Because of viscosity to resistance </span>| च&#2367;पच&#2367;प&#2366;हट स&#2375; प&#2381;रत&#2367;र&#2379;ध क&#2375; क&#2366;रण"],
answer:3,
},
{
question:"<span class='notranslate'>Q. When pouring the lead, care should be taken, that no water is collected into the hole.If water is collected in the hole what is the effect? </span>| स&#2368;स&#2366; ड&#2366;लत&#2375; समय इस ब&#2366;त क&#2366; ध&#2381;य&#2366;न रखन&#2366; च&#2366;ह&#2367;ए क&#2367; छ&#2375;द म&#2375;&#2306; प&#2366;न&#2368; जम&#2366; न ह&#2379;&#2404; यद&#2367; गड&#2381;ढ&#2375; म&#2375;&#2306; प&#2366;न&#2368; जम&#2366; ह&#2379; ज&#2366;ए त&#2379; क&#2381;य&#2366; प&#2381;रभ&#2366;व पड&#2364;&#2375;ग&#2366;?<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhvErj3ucvIu4TlOLeY8s1gZNxNHheWJa7DkFyWmOjDmhHzM54V83eON2vq5kYeWC4YzOjeIXKSEQTxSj0CnWlIvq-on3HL7srSYbmoDUOYPO4pnyEmjCCX3G3vxVg_EX6H7rBs-0qyjfSnlhBa2_CRgtkSW0ierTcFsCR2KISngDYXJPwnCk_IWX1TPdGU/s320/FIT2-13-467.jpg'>",
options:["<span class='notranslate'>(A) Blow hole will be formed </span>| ब&#2381;ल&#2379; ह&#2379;ल बन&#2375;ग&#2366;","<span class='notranslate'>(B) Lead will not solidify </span>| स&#2368;स&#2366; जम नह&#2368;&#2306; प&#2366;एग&#2366;","<span class='notranslate'>(C) Steam will generated </span>| भ&#2366;प उत&#2381;पन&#2381;न ह&#2379;ग&#2368;","<span class='notranslate'>(D) No effect </span>| क&#2379;ई प&#2381;रभ&#2366;व नह&#2368;&#2306;"],
answer:0,
},
{
question:"<span class='notranslate'>Q. Which tool is used in inspection during the acceptance tests of new machines? </span>| नई मश&#2368;न&#2379;&#2306; क&#2379; स&#2381;व&#2368;क&#2371;त पर&#2368;क&#2381;षण&#2379;&#2306; क&#2375; द&#2380;र&#2366;न म&#2375;&#2306; न&#2367;र&#2368;क&#2381;षण म&#2375;&#2306; क&#2367;स उपकरण क&#2366; उपय&#2379;ग क&#2367;य&#2366; ज&#2366;त&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Steel rule </span>| स&#2381;ट&#2368;ल र&#2370;ल","<span class='notranslate'>(B) Plumb bob </span>| प&#2381;लम&#2381;ब ब&#2366;ब","<span class='notranslate'>(C) Try square </span>| ट&#2381;र&#2366;ई स&#2381;क&#2366;वयर","<span class='notranslate'>(D) Test mandrels </span>| ट&#2375;स&#2381;ट म&#2375;&#2306;ड&#2381;रल&#2381;स"],
answer:3,
},
{
question:"<span class='notranslate'>Q. What is the property of lubricant that can withstand high pressure or load? </span>| स&#2381;न&#2375;हक क&#2375; उस ग&#2369;ण क&#2366; न&#2366;म क&#2381;य&#2366; ह&#2376; ज&#2379; उच&#2381;च दब&#2366;व य&#2366; भ&#2366;र सहन कर सकत&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Oiliness </span>| त&#2376;ल&#2368;यत&#2366;","<span class='notranslate'>(B) Viscosity </span>| शयनत&#2366;","<span class='notranslate'>(C) Fire point </span>| फ&#2366;यर प&#2381;व&#2366;इ&#2306;ट","<span class='notranslate'>(D) Flashpoint </span>| फ&#2364;&#2381;ल&#2376;श प&#2381;व&#2366;इ&#2306;ट"],
answer:1,
},
{
question:"<span class='notranslate'>Q. Which wire rope strands are twisted in the same direction? </span>| क&#2367;स प&#2381;रक&#2366;र क&#2375; रस&#2381;स&#2368; क&#2375; त&#2366;र एक ह&#2368; द&#2367;श&#2366; म&#2375;&#2306; म&#2369;ड&#2364;त&#2375; ह&#2376;&#2306;?",
options:["<span class='notranslate'>(A) Lang lay rope </span>| ल&#2376;&#2306;ग ल&#2375; रस&#2381;स&#2368;","<span class='notranslate'>(B) Rigid lay rope </span>| र&#2367;ज&#2367;ड ल&#2375; रस&#2381;स&#2368;","<span class='notranslate'>(C) Regular lay rope </span>| र&#2375;ग&#2369;लर ल&#2375; रस&#2381;स&#2368;","<span class='notranslate'>(D) Combined lay rope </span>| क&#2306;ब&#2366;इ&#2306;ड ल&#2375; र&#2379;प"],
answer:0,
},
{
question:"<span class='notranslate'>Q. What is the purpose of triangular frame base resting on ground in the frame of derrick lifting equipment? </span>| त&#2381;र&#2367;क&#2379;ण&#2368;य फ&#2381;र&#2375;म आध&#2366;र ड&#2375;र&#2367;क उठ&#2366;न&#2375; उपकरण&#2379;&#2306; क&#2368; स&#2368;म&#2366; म&#2375;&#2306; जम&#2368;न पर आर&#2366;म क&#2366; उद&#2381;द&#2375;श&#2381;य क&#2381;य&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Prevent the vibration </span>| क&#2306;पन क&#2379; र&#2379;कन&#2366;","<span class='notranslate'>(B) Avoid slipping of load </span>| ल&#2379;ड क&#2379; फ&#2367;सलन&#2375; स&#2375; बचन&#2366;","<span class='notranslate'>(C) Prevent imbalance of load </span>| ल&#2379;ड क&#2375; अस&#2306;त&#2369;लन क&#2379; र&#2379;कन&#2366;","<span class='notranslate'>(D) Prevent base from moving under load </span>| ब&#2375;स क&#2379; ल&#2379;ड क&#2375; न&#2367;च&#2375; आन&#2375; स&#2375; र&#2379;कन&#2366;"],
answer:3,
},
{
question:"<span class='notranslate'>Q. What is the material of sling hooks? </span>| स&#2381;ल&#2367;&#2306;ग ह&#2369;क क&#2366; स&#2366;मग&#2381;र&#2368; क&#2381;य&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Low carbon steel </span>| न&#2367;म&#2381;न क&#2366;र&#2381;बन इस&#2381;प&#2366;त","<span class='notranslate'>(B) High carbon steel </span>| उच&#2381;च क&#2366;र&#2381;बन इस&#2381;प&#2366;त","<span class='notranslate'>(C) High tensile steel </span>| उच&#2381;च तन&#2366;व इस&#2381;प&#2366;त","<span class='notranslate'>(D) Medium carbon steel </span>| मध&#2381;यम क&#2366;र&#2381;बन इस&#2381;प&#2366;द"],
answer:2,
},
{
question:"<span class='notranslate'>Q. What is the property of the lubricant that the vapour is given off from the oil? </span>| ल&#2369;ब&#2381;र&#2367;क&#2375;&#2306;ट क&#2368; वह क&#2380;न स&#2368; स&#2306;पत&#2381;त&#2367; ह&#2376; ज&#2367;सस&#2375; त&#2375;ल स&#2375; व&#2366;ष&#2381;प न&#2367;कलत&#2368; ह&#2376;?",
options:["<span class='notranslate'>(A) Viscosity </span>| शय&#2366;नत&#2366;","<span class='notranslate'>(B) Fire point </span>| अग&#2381;न&#2367; ब&#2367;&#2306;द&#2369;","<span class='notranslate'>(C) Pour point </span>| प&#2379;र प&#2381;व&#2366;इ&#2306;ट","<span class='notranslate'>(D) Flash point </span>| फ&#2364;&#2381;ल&#2376;श प&#2381;व&#2366;इ&#2306;ट"],
answer:3,
},
{
question:"<span class='notranslate'>Q. What is used for checking the horizontal and vertical levels of a machine? </span>| क&#2367;स&#2368; मश&#2368;न क&#2375; क&#2381;ष&#2376;त&#2367;ज और ऊर&#2381;ध&#2381;व&#2366;धर स&#2381;तर&#2379;&#2306; क&#2368; ज&#2366;&#2305;च क&#2375; ल&#2367;ए क&#2381;य&#2366; उपय&#2379;ग क&#2367;य&#2366; ज&#2366;त&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Mason level </span>| म&#2375;सन ल&#2375;वल","<span class='notranslate'>(B) Block spirit level </span>| ब&#2381;ल&#2366;क स&#2381;प&#2367;र&#2367;ट ल&#2375;वल","<span class='notranslate'>(C) Simple spirit level </span>| स&#2367;म&#2381;पल स&#2381;प&#2367;र&#2367;ट ल&#2375;वल","<span class='notranslate'>(D) Precision spirit level </span>| सट&#2368;क स&#2381;प&#2367;र&#2367;ट ल&#2375;वल"],
answer:1,
},
{
question:"<span class='notranslate'>Q. What is the purpose of using lubricant? </span>| स&#2381;न&#2375;हक क&#2366; उपय&#2379;ग करन&#2375; क&#2366; उद&#2381;द&#2375;श&#2381;य क&#2381;य&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Increase friction </span>| घर&#2381;षण बढ&#2366;न&#2366;","<span class='notranslate'>(B) Reduce friction </span>| घर&#2381;षण कम करन&#2366;","<span class='notranslate'>(C) Increase the loading capacity </span>| ल&#2379;ड&#2367;&#2306;ग क&#2381;षमत&#2366; बढ&#2366;न&#2366;","<span class='notranslate'>(D) Increase the speed of moving elements </span>| गत&#2367;श&#2368;ल तत&#2381;व&#2379;&#2306; क&#2368; गत&#2367; बढ&#2366;न&#2366;"],
answer:1,
},
{
question:"<span class='notranslate'>Q. What is the operation performed before geometrical tests on machines? </span>| मश&#2368;न पर ज&#2381;य&#2366;मत&#2368;य पर&#2368;क&#2381;षण&#2379;&#2306; स&#2375; पहल&#2375; क&#2367;य&#2375; ज&#2366;न&#2375;व&#2366;ल&#2375; आपर&#2375;शन क&#2381;य&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) Erecting </span>| इर&#2375;क&#2381;ट&#2367;&#2306;ग","<span class='notranslate'>(B) Inspecting </span>| न&#2367;र&#2368;क&#2381;षण","<span class='notranslate'>(C) Levelling </span>| ल&#2375;वल&#2367;&#2306;ग","<span class='notranslate'>(D) Grouting </span>| ग&#2381;र&#2366;उट&#2367;&#2306;ग"],
answer:2,
},
{
question:"<span class='notranslate'>Q. Which is the property of the oil catches fire and continues to be in flame? </span>| त&#2375;ल क&#2366; वह क&#2380;न स&#2366; ग&#2369;ण ज&#2379; आग पकड&#2364;त&#2366; ह&#2376; और लग&#2366;त&#2366;र जलत&#2368; रहत&#2368; ह&#2376;?",
options:["<span class='notranslate'>(A) Flash point </span>| फ&#2364;&#2381;ल&#2376;श प&#2381;व&#2366;इ&#2306;ट","<span class='notranslate'>(B) Fire point </span>| फ&#2366;यर प&#2381;&#8205;व&#2366;&#2306;इट","<span class='notranslate'>(C) Pour point </span>| प&#2379;र प&#2381;व&#2366;इ&#2306;ट","<span class='notranslate'>(D) Oiliness </span>| त&#2375;ल&#2368;यत&#2366;"],
answer:1,
},
{
question:"<span class='notranslate'>Q. What is the ratio of concrete mixture of cement, sand and stone for foundation? </span>| न&#2368;&#2306;व क&#2375; ल&#2367;ए स&#2368;म&#2375;&#2306;ट, र&#2375;त और पत&#2381;थर क&#2375; क&#2306;क&#2381;र&#2368;ट म&#2367;क&#2381;सर क&#2366; अन&#2369;प&#2366;त क&#2381;य&#2366; ह&#2379;त&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) 1:2:4","<span class='notranslate'>(B) 2:1:4","<span class='notranslate'>(C) 4:2:1","<span class='notranslate'>(D) 4:1:2"],
answer:0,
},
{
question:"<span class='notranslate'>Q. What is the name of foundation bolts? </span>| फ&#2366;उ&#2306;ड&#2375;शन ब&#2379;ल&#2381;ट क&#2366; न&#2366;म क&#2381;य&#2366; ह&#2376;?<br><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiMoPDNACImvqr8csqry6aOBwh9vKYCrpylkwI0mHwKVm5hpgu9ITQSNtuXiI91F36QzIL9IK62hFgR4De-P6n9H20sn5iIxi-lHsdrCQNBhWoSjq9jUapcQkbIIzTeWWBrw3Z2PoeQwKLHu8XkgymeLvUaK3dN_B_ZWxhADA15X4u4rkGoWgcy63fhZ45l/s1600/FIT2-13-290.JPG'>",
options:["<span class='notranslate'>(A) Rag bolt </span>| र&#2366;ग ब&#2379;ल&#2381;ट","<span class='notranslate'>(B) Bent bolt </span>| ब&#2375;&#2306;ट ब&#2379;ल&#2381;ट","<span class='notranslate'>(C) Rawl bolt </span>| र&#2366;ल ब&#2379;ल&#2381;ट","<span class='notranslate'>(D) Cotter bolt </span>| क&#2379;टर ब&#2379;ल&#2381;ट"],
answer:2,
},
{
question:"<span class='notranslate'>Q. Why the lifting pockets are provided with the equipment? </span>| उपकरण क&#2375; स&#2366;थ ल&#2367;फ&#2381;ट&#2367;&#2306;ग प&#2377;क&#2375;ट&#2381;स क&#2381;य&#2379;&#2306; प&#2381;रद&#2366;न क&#2368; ज&#2366;त&#2368; ह&#2376;?",
options:["<span class='notranslate'>(A) Place the steel wedge </span>| स&#2381;ट&#2368;ल व&#2376;ज रखन&#2375; क&#2375; ल&#2367;ए","<span class='notranslate'>(B) Provision for bolt and nut </span>| ब&#2379;ल&#2381;ट और नट क&#2375; ल&#2367;ए प&#2381;र&#2366;वध&#2366;न","<span class='notranslate'>(C) Place the crowbar for lifting </span>| उठ&#2366;न&#2375; क&#2375; ल&#2367;ए क&#2381;र&#2379;ब&#2366;र क&#2379; रखन&#2375; क&#2375; ल&#2367;ए","<span class='notranslate'>(D) Position the roller for moving </span>| र&#2379;लर क&#2379; म&#2370;व करन&#2375; क&#2368; स&#2381;थ&#2367;त&#2367; म&#2375; ल&#2366;न&#2375; क&#2375; ल&#2367;ए"],
answer:2,
},
{
question:"<span class='notranslate'>Q. What is the purpose of rollers placed under the equipment? </span>| उपकरण क&#2375; न&#2368;च&#2375; र&#2379;लर&#2381;स क&#2366; उद&#2381;द&#2375;श&#2381;य क&#2381;य&#2366; ह&#2376;?",
options:["<span class='notranslate'>(A) To move easily </span>| आस&#2366;न&#2368; स&#2375; स&#2381;थ&#2366;न&#2366;&#2306;तर&#2367;त करन&#2375; क&#2375; ल&#2367;ए","<span class='notranslate'>(B) To lift easily </span>| आस&#2366;न&#2368; स&#2375; उठ&#2366;न&#2366;","<span class='notranslate'>(C) To lower easily </span>| आस&#2366;न&#2368; स&#2375; कम करन&#2375; क&#2375; ल&#2367;ए","<span class='notranslate'>(D) To raise easily </span>| आस&#2366;न&#2368; स&#2375; ऊपर उठ&#2366;न&#2366;"],
answer:0,
}
]
},
    ]   
  
function createCategory(){
     for(let i=0; i<myApp.length; i++){
       const categoryList=document.createElement("div");
               categoryList.innerHTML=myApp[i].category;
               categoryList.setAttribute("data-id",i);
               categoryList.setAttribute("onclick","selectCategory(this)");
               categoryBox.appendChild(categoryList)
       Carx();
       LoadingText();
      }
    }
      function Carx(){
        car.owner = "Copyright By - ";
        car.com = ".";
        car.type = "online";
      Car.innerHTML =car.owner+coded+car.type+car.com+"com";
      }
  function LoadingText() {
  document.getElementById("loading-text").style.display = "none";
  document.getElementById("cathad").style.display = "block";
}
function selectCategory(ele){
   categoryIndex=ele.getAttribute("data-id");
   ctegoryText.innerHTML=myApp[categoryIndex].category;
   quizHomeBox.classList.remove("show");
   quizBox.classList.add("show");
   nextQuestion();
   var elem = document.getElementById("test-show");
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}
function load(){
   number++;
   questionText.innerHTML=myApp[categoryIndex].quizWrap[questionIndex].question;
   createOptions();
   scoreBoard();
   currentQuestionNum.innerHTML=number + " / " + myApp[categoryIndex].quizWrap.length;
   let text2 = "bmN2dG9ubGluZS5jb20=";
   let decoded = window.atob(text2);
   document.getElementById("copyright").innerHTML = "www." + decoded;
   document.getElementById("backlogo").src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhjvWt9II4PD_0mkwkq2cAWlNweeGm5WHK6pnC99NjDrrfegtTko_DqFXFkjKbJVvol42tLWCPpCYYv003dVg2deszOXndsNt5uQCG73h1AcETa-yld0F-DCyanOARnIjXjiPM0wkFv-_LV7bAGxIaw52kOu49SgheFkXWj99PQC0DSGnM9VoWw1Ag5/s320/ncvt%20online%20watermark.png";
}

function createOptions(){
   optionBox.innerHTML="";
   let animationDelay=0.1;
    for(let i=0; i<myApp[categoryIndex].quizWrap[questionIndex].options.length; i++){
    const option=document.createElement("div");
          option.innerHTML=myApp[categoryIndex].quizWrap[questionIndex].options[i]; 
          option.classList.add("option");
          option.id=i;
          option.style.animationDelay=animationDelay + "s";
          animationDelay=animationDelay+0.1;
          option.setAttribute("onclick","check(this)"); 
          optionBox.appendChild(option);        
}
}
function generateRandomQuestion(){
    const randomNumber=Math.floor(Math.random() * myApp[categoryIndex].quizWrap.length);
    let hitDuplicate=0;
     if(myArray.length == 0){
        questionIndex=randomNumber;
    }
     else{
        for(let i=0; i<myArray.length; i++){
           if(randomNumber == myArray[i]){
              hitDuplicate=1;
           }
        }
        if(hitDuplicate ==1){
           generateRandomQuestion();
           return;
        }
        else{
           questionIndex=randomNumber;
        }
    }
     myArray.push(randomNumber);
     console.log(myArray);
     load();
}
function check(ele){
   const id=ele.id;
   if(id==myApp[categoryIndex].quizWrap[questionIndex].answer){
      ele.classList.add("correct");
      score++;
      scoreBoard();
      }
      else{
        ele.classList.add("wrong");
         for(let i=0; i<optionBox.children.length; i++){
            if(optionBox.children[i].id==myApp[categoryIndex].quizWrap[questionIndex].answer){
                optionBox.children[i].classList.add("show-correct");
            }
         }
   }
   attemp++;
   disableOptions()
   showAnswerDescription();
   showNextQuestionBtn();
   stopTimer();
   
   if(number == myApp[categoryIndex].quizWrap.length){
     quizOver();
   
   }
   
}

function disableOptions(){
    for(let i=0; i<optionBox.children.length; i++){
        optionBox.children[i].removeAttribute("onclick")
    }
}
function timeIsUp(){
           for(let i=0; i<optionBox.children.length; i++){
            if(optionBox.children[i].id==myApp[categoryIndex].quizWrap[questionIndex].answer){
                optionBox.children[i].classList.add("show-correct");
            }
         }
         disableOptions()
         showAnswerDescription();
         showNextQuestionBtn();
}
function startTimer(){
       let timeLimit=60;
       remainingTime.innerHTML=timeLimit;
       interval=setInterval(()=>{
         timeLimit--;
         if(timeLimit < 10){
           timeLimit="0"+timeLimit;
        } 
        if(timeLimit < 6){
           remainingTime.classList.add("less-time");
        }
        remainingTime.innerHTML=timeLimit;
        if(timeLimit == 0){
           clearInterval(interval);
           timeIsUp();
        }
       },1000)
}
function stopTimer(){
    clearInterval(interval);
}
function showAnswerDescription(){
    if(typeof myApp[categoryIndex].quizWrap[questionIndex].description !== 'undefined'){
    answerDescription.classList.add("show");
    answerDescription.innerHTML=myApp[categoryIndex].quizWrap[questionIndex].description;      
    }
}
function hideAnswerDescription(){
    answerDescription.classList.remove("show");
    answerDescription.innerHTML="";

}
function showNextQuestionBtn(){
    nextQuestionBtn.classList.add("show");
}
function hideNextQuestionBtn(){
    nextQuestionBtn.classList.remove("show");
}
function scoreBoard(){
    correctAnswer.innerHTML=score;
}

nextQuestionBtn.addEventListener("click",nextQuestion);

function nextQuestion(){
   
    generateRandomQuestion();
    hideNextQuestionBtn();
    hideAnswerDescription();
    startTimer();
}
function quizResult(){
    document.querySelector(".total-questions").innerHTML=myApp[categoryIndex].quizWrap.length;
    document.querySelector(".total-attemp").innerHTML=attemp;
    document.querySelector(".total-correct").innerHTML=score;
    document.querySelector(".total-wrong").innerHTML=attemp-score;
    const percentage=(score/myApp [categoryIndex].quizWrap.length)*100;
    document.querySelector(".total-percentage").innerHTML=percentage.toFixed(2) +"%";
}
function resetQuiz(){
      attemp=0;
      score=0;
      number=0;
      myArray=[];
}
function quizOver(){
    nextQuestionBtn.classList.remove("show");
    seeResultBtn.classList.add("show");
}
seeResultBtn.addEventListener("click",()=>{
    
    quizBox.classList.remove("show");
    seeResultBtn.classList.remove("show");
    quizOverBox.classList.add("show");
    quizResult();
})
GoHomeBtn.addEventListener("click",()=>{
    quizOverBox.classList.remove("show");
    quizHomeBox.classList.add("show");
    resetQuiz();
    stopTimer();  
})
HomeBtn.addEventListener("click",()=>{
    quizBox.classList.remove("show");
    quizHomeBox.classList.add("show");
    resetQuiz();
    stopTimer();  
      if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
});
window.onload=()=>{
createCategory();
};

