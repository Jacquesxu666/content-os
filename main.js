var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/main.js
var main_exports = {};
__export(main_exports, {
  default: () => main_default
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");

// src/constants.js
var VIEW_TYPE = "content-os-dashboard";
var VIEW_CHECK = "content-os-checklist";
var VIEW_CAL = "content-os-calendar";
var VIEW_CHAT = "content-os-chat";
var VIEW_WIKI = "content-os-wiki";
var VIEW_PIPE = "content-os-pipeline";
var VIEW_FLOMO = "content-os-flomo";
var PIPE_STAGES = ["\u5BA1\u9898", "\u8BA1\u5212", "\u521D\u7A3F", "\u7F16\u8F91", "\u53D1\u5E03\u51C6\u5907", "\u5B8C\u6210"];
var PIPE_GATES = { "\u5BA1\u9898": "CDCP", "\u8BA1\u5212": "PDCP", "\u521D\u7A3F": "TR1", "\u7F16\u8F91": "TR2", "\u53D1\u5E03\u51C6\u5907": "ADCP" };
var AI_PRESETS = {
  glm: { label: "GLM \u667A\u8C31", format: "openai", baseUrl: "https://open.bigmodel.cn/api/paas/v4/chat/completions", model: "glm-4-plus" },
  deepseek: { label: "DeepSeek \u6DF1\u5EA6\u6C42\u7D22", format: "openai", baseUrl: "https://api.deepseek.com/chat/completions", model: "deepseek-chat" },
  minimax: { label: "MiniMax", format: "anthropic", baseUrl: "https://api.minimaxi.com/anthropic/v1/messages", model: "MiniMax-M3.0" },
  stepfun: { label: "\u9636\u8DC3\u661F\u8FB0 StepFun", format: "openai", baseUrl: "https://api.stepfun.com/v1/chat/completions", model: "step-2-16k" },
  xiaomi: { label: "\u5C0F\u7C73 MiMo", format: "openai", baseUrl: "https://api.xiaomi.com/v1/chat/completions", model: "mimo" },
  claude: { label: "Claude (Anthropic)", format: "anthropic", baseUrl: "https://api.anthropic.com/v1/messages", model: "claude-sonnet-5" },
  custom: { label: "\u81EA\u5B9A\u4E49\uFF08OpenAI \u517C\u5BB9\uFF09", format: "openai", baseUrl: "", model: "" }
};
var BRAND = {
  name: "Content OS",
  version: "4.13.0",
  edition: "dev",
  tagline: "\u521B\u4F5C\u8005\u7684\u5185\u5BB9\u64CD\u4F5C\u7CFB\u7EDF \xB7 CAPE \u5FAA\u73AF",
  links: [
    ["GitHub", ""],
    ["\u516C\u4F17\u53F7", ""],
    ["\u5C0F\u7EA2\u4E66", ""],
    ["\u8054\u7CFB", ""]
  ]
};
var DEFAULT_SETTINGS = {
  captureFolder: "Inbox",
  diaryFolder: "Journal",
  projectsFolder: "1. Projects",
  areasFolder: "2. Areas",
  resourcesFolder: "3. Resources",
  archiveFolder: "4. Archive",
  draftsFolder: "Drafts",
  topicsFile: "Topics.md",
  materialFolder: "Material",
  ingestQueueFile: "Wiki/ingest-queue.md",
  wikiFolder: "Wiki",
  memoryDailyFolder: "memory/daily",
  inboxMaterialFolder: "3. Resources/Sources",
  checklistFile: "Wiki/writing-checklist.md",
  exportFolder: "Exports",
  diaryTemplate: "# {{date}}\n\n## \u8BB0\u5F55\n\n- \n\n## \u6D1E\u5BDF\n\n- \n",
  draftBodyTemplate: "# {{title}}\n\n> \u8BFB\u8005\u662F\u8C01\uFF1F\u4ED6\u8BFB\u5B8C\u5E26\u8D70\u4EC0\u4E48\uFF1F\n\n",
  draftStatuses: ["\u8349\u7A3F", "\u5F85\u53D1", "\u5DF2\u53D1"],
  publishGapWarnDays: 14,
  heartbeatWarnDays: 7,
  reviewAfterDays: 7,
  seriesGapWarnDays: 21,
  hotReadsThreshold: 1e3,
  seriesKeywords: "",
  periodicFolder: "Periodic Notes",
  licenseKey: "",
  aiProvider: "glm",
  aiBaseUrl: "",
  aiModel: "",
  aiApiKey: "",
  tempWriter: 0.85,
  tempJudge: 0.15,
  tempReviser: 0.5,
  draftSamples: 2,
  webMaterial: true,
  xhsCardFolder: "5. \u8868\u8FBE/\u516C\u4F17\u53F7/\u5C0F\u7EA2\u4E66\u5361\u7247",
  xhsPublishScript: "",
  semanticApiUrl: "",
  semanticToken: "",
  aiMaxTokens: 2e3,
  searchApiUrl: "",
  publishApiUrl: "",
  publishToken: "",
  styleProfileFile: "",
  dailyAutoEnabled: false,
  dailyAutoHour: 9,
  dailyAutoPush: true,
  dailyAutoBatch: 6,
  eliteScore: 82,
  pushTopN: 1,
  experienceFolder: "",
  hotGeneFile: "",
  hotStudyFolder: "3. \u8D44\u6E90/\u7206\u6B3E\u7814\u7A76",
  extGeneFile: "3. \u8D44\u6E90/\u7206\u6B3E\u7814\u7A76/\u5916\u90E8\u7206\u6B3E\u57FA\u56E0.md",
  reviewFolder: "5. \u8868\u8FBE/\u516C\u4F17\u53F7/\u590D\u76D8",
  gapReportWeekly: true,
  autoCalibrateElite: true,
  lastGapReport: "",
  pomodoroFocus: 25,
  pomodoroBreak: 5,
  pomodoroLongBreak: 15,
  pomodoroLongEvery: 4,
  pomodoroSound: true,
  pomodoroAutoBreak: false,
  aiFlavorGate: true,
  factCheckGate: true,
  aiFlavorMax: 35,
  httpEnabled: false,
  httpPort: 3030,
  httpToken: "",
  defaultLayoutOnStart: false,
  layoutCenter: "dashboard",
  holidayWindowDays: 21,
  autoIllustrate: false,
  illustrateStyle: "\uFF0C\u73B0\u4EE3\u6742\u5FD7\u7F16\u8F91\u914D\u56FE\u98CE\u683C\uFF0C\u7EDF\u4E00\u9AD8\u7EA7\u8D28\u611F\uFF0C\u67D4\u548C\u81EA\u7136\u5149\uFF0C\u5E72\u51C0\u7559\u767D\u6784\u56FE\uFF0C\u65E0\u6587\u5B57\u65E0\u6C34\u5370",
  topicLibraryFile: "",
  lastDailyAuto: "",
  gtmThreshold: 75,
  autopilotMaxRetries: 2,
  autopilotWebhook: "",
  autoLoopMaxIters: 5,
  autoLoopPassScore: 80,
  pipelineFolder: "Pipeline",
  chatSaveFolder: "AI-Chats",
  chatUserName: "",
  chatSystemPrompt: "\u4F60\u662F\u4E00\u4F4D\u5D4C\u5165 Obsidian \u5E93\u7684\u5185\u5BB9\u521B\u4F5C\u4E0E\u77E5\u8BC6\u7BA1\u7406\u52A9\u624B\u3002\u4F18\u5148\u57FA\u4E8E\u300C\u53C2\u8003\u4E0A\u4E0B\u6587\u300D\u56DE\u7B54\uFF1B\u4E0A\u4E0B\u6587\u6CA1\u6709\u7684\u4FE1\u606F\u4E0D\u8981\u7F16\u9020\uFF0C\u660E\u786E\u8BF4\u4E0D\u77E5\u9053\u3002\u56DE\u7B54\u7528\u4E2D\u6587 markdown\uFF0C\u7B80\u6D01\u52A1\u5B9E\uFF0C\u76F4\u63A5\u7ED9\u53EF\u6267\u884C\u7684\u5EFA\u8BAE\u3002",
  onboarded: false,
  flomoMobileDefault: false,
  flomoPageSize: 30,
  promptsFolder: "Wiki/content-os-prompts",
  aiStreaming: false,
  usageStats: null
};
var HOLIDAYS = [
  { date: "2026-08-19", name: "\u4E03\u5915", angle: "\u4EB2\u5BC6\u5173\u7CFB/\u50AC\u4EA7\u7D20/\u7231\u60C5\u7684\u591A\u5DF4\u80FA\u8111\u79D1\u5B66" },
  { date: "2026-09-10", name: "\u6559\u5E08\u8282", angle: "\u7EC8\u8EAB\u5B66\u4E60/\u5927\u8111\u53EF\u5851\u6027/\u77E5\u8BC6\u7BA1\u7406" },
  { date: "2026-09-25", name: "\u4E2D\u79CB\u8282", angle: "\u56E2\u5706/\u6708\u997C\u70ED\u91CF\u62C6\u89E3/\u5F02\u5730\u7236\u6BCD\u5065\u5EB7\u76D1\u6D4B" },
  { date: "2026-10-01", name: "\u56FD\u5E86\u957F\u5047", angle: "\u5047\u671F\u4F5C\u606F\u5D29\u574F/\u65C5\u884C\u9632\u75B2\u52B3/\u4E45\u5750\u81EA\u9A7E\u62A4\u8170" },
  { date: "2026-10-18", name: "\u91CD\u9633\u8282", angle: "\u6297\u8870/\u7236\u6BCD\u808C\u5C11\u75C7/\u4E2D\u5E74\u517B\u751F" },
  { date: "2026-11-07", name: "\u7ACB\u51AC", angle: "\u8282\u6C14\u8FDB\u8865\u8FB9\u754C/\u51B7\u66B4\u9732/\u8910\u8272\u8102\u80AA" },
  { date: "2026-11-11", name: "\u53CC\u5341\u4E00", angle: "\u591A\u5DF4\u80FA\u5241\u624B/\u51B2\u52A8\u63A7\u5236/\u5EF6\u8FDF\u6EE1\u8DB3" },
  { date: "2026-12-22", name: "\u51AC\u81F3", angle: "\u8FDB\u8865\u7684\u79D1\u5B66/\u663C\u591C\u8282\u5F8B/\u892A\u9ED1\u7D20" },
  { date: "2027-01-01", name: "\u5143\u65E6\u65B0\u5E74", angle: "\u4E60\u60EF\u8BBE\u8BA1/flag\u4E3A\u4F55\u5931\u8D25/\u6700\u5C0F\u53EF\u884C\u4E60\u60EF" },
  { date: "2027-02-16", name: "\u9664\u5915", angle: "\u66B4\u98DF\u540E\u4EE3\u8C22/\u8840\u7CD6\u8FC7\u5C71\u8F66/\u56E2\u5706\u538B\u529B" },
  { date: "2027-02-17", name: "\u6625\u8282", angle: "\u4F5C\u606F\u7D0A\u4E71/\u4EB2\u621A\u538B\u529B/\u8282\u540E\u5065\u8EABflag" },
  { date: "2027-03-03", name: "\u5143\u5BB5", angle: "\u7CD6\u4E0E\u60C5\u7EEA/\u8282\u540E\u6536\u5FC3/\u591A\u5DF4\u80FA\u6212\u65AD" },
  { date: "2027-04-05", name: "\u6E05\u660E", angle: "\u751F\u6B7B\u89C9\u5BDF/\u6B63\u5FF5/\u9ED8\u8BA4\u6A21\u5F0F\u7F51\u7EDC" },
  { date: "2027-05-01", name: "\u52B3\u52A8\u8282", angle: "\u4F11\u606F\u7684\u79D1\u5B66/\u4E3B\u52A8\u6062\u590D/\u804C\u4E1A\u5026\u6020" },
  { date: "2027-06-09", name: "\u7AEF\u5348", angle: "\u7CBD\u5B50\u5347\u7CD6/\u827E\u8349\u795B\u6E7F/\u4E2D\u533B\u4F53\u8D28\u89C6\u89D2" },
  { date: "2027-06-20", name: "\u7236\u4EB2\u8282", angle: "\u7537\u6027\u5065\u5EB7/\u777E\u916E/\u4E2D\u5E74\u7236\u4EB2\u4F53\u80FD\u91CD\u5EFA" }
];
var PROMPT_DEFAULTS = {
  "concept-audience": "\u4F60\u662F\u300C\u8BFB\u8005\u4E0E\u589E\u957F\u4EE3\u8868\u300D\u3002\u53EA\u4ECE\u8BFB\u8005\u9700\u6C42\u3001\u4F20\u64AD\u6F5C\u529B\u3001\u7ADE\u4E89\u683C\u5C40\u89D2\u5EA6\u5206\u6790\u9009\u9898\uFF0C\u8F93\u51FA\uFF1A\u76EE\u6807\u8BFB\u8005\u753B\u50CF / \u8BFB\u8005\u75DB\u70B9 / \u4F20\u64AD\u94A9\u5B50 / \u589E\u957F\u98CE\u9669\uFF0C\u5404 2-3 \u6761\uFF0C\u4E2D\u6587 markdown\uFF0C\u76F4\u63A5\u52A1\u5B9E\u3002",
  "concept-research": "\u4F60\u662F\u300C\u5185\u5BB9\u7814\u53D1\u4EE3\u8868\u300D\u3002\u53EA\u4ECE\u5185\u5BB9\u53EF\u884C\u6027\u89D2\u5EA6\u5206\u6790\uFF1A\u57FA\u4E8E\u4F5C\u8005\u5DF2\u6709\u7D20\u6750\u91CF\u8BC4\u4F30\u6210\u7A3F\u96BE\u5EA6 / \u5DEE\u5F02\u5316\u89D2\u5EA6\uFF08\u4F5C\u8005\u80FD\u5199\u522B\u4EBA\u5199\u4E0D\u4E86\u7684\u662F\u4EC0\u4E48\uFF09/ \u9700\u8981\u8865\u7684\u7D20\u6750\u7F3A\u53E3 / \u7814\u53D1\u98CE\u9669\uFF0C\u5404 2-3 \u6761\uFF0C\u4E2D\u6587 markdown\u3002",
  "concept-lpdt": "\u4F60\u662F LPDT\uFF08\u4EA7\u54C1\u5F00\u53D1\u56E2\u961F\u8D1F\u8D23\u4EBA\uFF09\u3002\u7EFC\u5408\u4E24\u4F4D\u4EE3\u8868\u610F\u89C1\uFF0C\u8F93\u51FA Charter\uFF1A\u2460\u4E00\u53E5\u8BDD\u4EF7\u503C\u4E3B\u5F20 \u2461\u76EE\u6807\u8BFB\u8005 \u2462\u5DEE\u5F02\u5316\u5B9A\u4F4D \u2463\u6210\u529F\u6307\u6807\uFF08\u53D1\u5E03\u540E\u770B\u4EC0\u4E48\u6570\u636E\uFF09\u2464\u4E3B\u8981\u98CE\u9669\u4E0E\u5BF9\u7B56 \u2465\u7ED3\u8BBA\uFF1AGO / \u5E26\u6761\u4EF6GO(\u5217\u6761\u4EF6) / NO-GO(\u8BF4\u7406\u7531)\u3002\u4E2D\u6587 markdown\uFF0C\u6562\u4E0B\u5224\u65AD\u3002",
  "plan": "\u4F60\u662F\u5185\u5BB9\u7B56\u5212\u3002\u57FA\u4E8E Charter \u548C\u7D20\u6750\u6E05\u5355\u8F93\u51FA\u5199\u4F5C\u8BA1\u5212\uFF1A\u2460\u6587\u7AE0\u5927\u7EB2\uFF08\u5404\u8282\u6807\u9898+\u6BCF\u8282\u4E00\u53E5\u8BDD\u8981\u70B9+\u7528\u54EA\u4E9B\u7D20\u6750\uFF09\u2461\u5EFA\u8BAE\u7BC7\u5E45\u4E0E\u4F53\u88C1 \u2462\u5EFA\u8BAE\u6392\u671F\uFF08\u7ED3\u5408\u4E00\u822C\u516C\u4F17\u53F7\u8282\u594F\uFF09\u3002\u4E2D\u6587 markdown\u3002",
  "draft-writer": "\u4F60\u662F\u4F5C\u8005\u672C\u4EBA\u7684\u4EE3\u7B14\u521D\u7A3F\u5199\u624B\u3002\u4E25\u683C\u6309\u6D41\u6C34\u7EBF\u5361\u91CC\u7684 Charter \u548C\u5927\u7EB2\u5199\u516C\u4F17\u53F7\u6587\u7AE0\u521D\u7A3F\uFF1A\u89C2\u70B9\u9C9C\u660E\u3001\u8BC1\u636E\u6765\u81EA\u7D20\u6750\uFF08\u6807\u6CE8 [\u7D20\u6750] \u51FA\u5904\uFF09\u3001\u7D20\u6750\u6CA1\u6709\u7684\u4E0D\u7F16\u9020\uFF08\u5199 [\u5F85\u8865\uFF1Axxx]\uFF09\u3002\u76F4\u63A5\u8F93\u51FA\u6587\u7AE0\u6B63\u6587 markdown\uFF0C\u4E0D\u8981\u5BA2\u5957\u5F00\u573A\u767D\u3002",
  "title-editor": "\u4F60\u662F\u6807\u9898\u7F16\u8F91\u3002\u4E3A\u8FD9\u7BC7\u516C\u4F17\u53F7\u6587\u7AE0\u51FA 5 \u4E2A\u5019\u9009\u6807\u9898\uFF1A\u81F3\u5C11 1 \u4E2A\u6570\u5B57\u578B\u30011 \u4E2A\u60AC\u5FF5\u578B\u30011 \u4E2A\u5229\u76CA\u70B9\u578B\uFF1B\u6BCF\u884C\u4E00\u4E2A\uFF0C\u4E0D\u8981\u7F16\u53F7\u548C\u89E3\u91CA\u3002",
  "self-check": "\u4F60\u662F\u4E00\u4F4D\u4E25\u683C\u7684\u516C\u4F17\u53F7\u7F16\u8F91\u3002\u6309\u4F5C\u8005\u81EA\u5DF1\u7684\u81EA\u68C0\u6E05\u5355\u9010\u6761\u5BA1\u7A3F\uFF1A\u6BCF\u6761\u7ED9 \u2705/\u26A0\uFE0F/\u274C \u548C\u4E00\u53E5\u4F9D\u636E\uFF08\u5F15\u7528\u539F\u6587\u77ED\u8BED\u5B9A\u4F4D\uFF09\u3002\u6700\u540E\u7ED9\u51FA\u6700\u91CD\u8981\u7684 3 \u5904\u5177\u4F53\u4FEE\u6539\u5EFA\u8BAE\uFF08\u6307\u660E\u4F4D\u7F6E\uFF09\u3002\u4E2D\u6587 markdown\uFF0C\u76F4\u63A5\u3001\u4E0D\u5BA2\u5957\u3002",
  "seed-compiler": "\u4F60\u662F\u77E5\u8BC6\u5E93\u7F16\u8BD1\u5458\u3002\u628A\u7ED9\u5B9A\u7B14\u8BB0\u7F16\u8BD1\u6210\u4E00\u9875 Karpathy \u5F0F LLM wiki \u6982\u5FF5\u9875\uFF1A\u4E0D\u6284\u539F\u6587\uFF0C\u505A\u63D0\u70BC\u548C\u62BD\u8C61\uFF1B\u4E0D\u786E\u5B9A\u7684\u5224\u65AD\u5199\u8FDB\u300C\u672A\u51B3\u95EE\u9898\u300D\uFF1B\u5B81\u7F3A\u6BCB\u6EE5\u3002\u53EA\u8F93\u51FA\u9875\u9762\u6B63\u6587 markdown\uFF08\u4E0D\u542B frontmatter\uFF09\uFF0C\u7AE0\u8282\u56FA\u5B9A\u4E3A\uFF1A## \u5B9A\u4E49 / ## \u4E3A\u4EC0\u4E48\u91CD\u8981 / ## \u6838\u5FC3\u8981\u70B9 / ## \u5728\u672C Vault \u91CC\u7684\u5E94\u7528 / ## \u672A\u51B3\u95EE\u9898 / ## \u76F8\u5173\u9875\u9762\u3002",
  "gtm-judge": "\u4F60\u662F GTM\uFF08Go-To-Market\uFF09\u8BC4\u59D4\uFF0C\u628A\u6587\u7AE0\u5F53\u4F5C\u4E00\u4E2A\u8981\u6295\u653E\u5E02\u573A\u7684\u4EA7\u54C1\u6765\u5BA1\u3002\u6309\u4E03\u9879\u8BC4\u5206\uFF08\u603B\u5206100\uFF09\uFF1A\u76EE\u6807\u8BFB\u8005\u6E05\u6670\u5EA615\uFF08\u8C01\u770B\u7684\u3001\u75DB\u70B9\u662F\u5426\u88AB\u76F4\u51FB\uFF09/ \u4EF7\u503C\u4E3B\u5F2015\uFF08\u8BFB\u5B8C\u5E26\u8D70\u4EC0\u4E48\u3001\u662F\u5426\u53EF\u611F\u77E5\uFF09/ \u94A9\u5B50\u4E0E\u4F20\u64AD\u529B15\uFF08\u524D\u4E09\u53E5\u80FD\u5426\u7559\u4F4F\u4EBA\u3001\u6709\u65E0\u8F6C\u53D1\u7406\u7531\uFF09/ \u5DEE\u5F02\u531615\uFF08\u5BF9\u6BD4\u5168\u7F51\u540C\u9898\u51ED\u4EC0\u4E48\u8BFB\u8FD9\u7BC7\u3001\u662F\u5426\u7528\u4E0A\u4E86\u4F5C\u8005\u72EC\u6709\u8D44\u4EA7\uFF09/ \u8BC1\u636E\u4E0E\u4FE1\u4EFB15\uFF08\u6570\u636E\u6848\u4F8B\u6765\u6E90\u662F\u5426\u624E\u5B9E\u3001\u6709\u65E0\u7A7A\u8BDD\uFF09/ \u884C\u52A8\u8F6C\u531615\uFF08\u8BFB\u8005\u4E0B\u4E00\u6B65\u662F\u5426\u81EA\u7136\uFF09/ \u5B9A\u4F4D\u4E00\u81F4\u602710\uFF08\u4E0E\u4F5C\u8005\u54C1\u724C\u548C\u7CFB\u5217\u7684\u5951\u5408\uFF09\u3002\u8F93\u51FA\u683C\u5F0F\u4E25\u683C\u5982\u4E0B\uFF1A\n\u603B\u5206: <\u6570\u5B57>\n\u5404\u9879: \u8BFB\u8005x/15 | \u4EF7\u503Cx/15 | \u94A9\u5B50x/15 | \u5DEE\u5F02\u5316x/15 | \u8BC1\u636Ex/15 | \u8F6C\u5316x/15 | \u5B9A\u4F4Dx/10\n\u5FC5\u987B\u4FEE\u6539\uFF08\u6309\u5F71\u54CD\u6392\u5E8F\uFF0C\u6307\u660E\u4F4D\u7F6E\u4E0E\u5177\u4F53\u6539\u6CD5\uFF0C\u6700\u591A5\u6761\uFF09:\n1. ...\n\u8BC4\u5206\u8981\u4E25\u683C\uFF0C\u5E73\u5EB8\u7684\u6587\u7AE0\u4E0D\u5E94\u8D85\u8FC770\u5206\u3002",
  "draft-reviser": "\u4F60\u662F\u6539\u7A3F\u4EBA\u3002\u6839\u636E\u8BC4\u59D4\u7684\u4FEE\u6539\u610F\u89C1\u4FEE\u8BA2\u5168\u6587\uFF1A\u53EA\u6539\u8BC4\u59D4\u6307\u51FA\u7684\u95EE\u9898\uFF0C\u4FDD\u7559\u539F\u6587\u6B63\u786E\u4E0E\u51FA\u5F69\u7684\u90E8\u5206\uFF1B\u8BC1\u636E\u4E0D\u8DB3\u5904\u5B81\u53EF\u5220\u9664\u6216\u6807\u6CE8[\u5F85\u8865]\uFF0C\u4E0D\u7F16\u9020\u3002\u76F4\u63A5\u8F93\u51FA\u5B8C\u6574\u4FEE\u8BA2\u7248\u6B63\u6587 markdown\uFF0C\u4E0D\u8981\u4EFB\u4F55\u89E3\u91CA\u6216\u524D\u8A00\u3002",
  "topic-eval": "\u4F60\u662F\u4E00\u4F4D\u8D44\u6DF1\u5185\u5BB9\u4E3B\u7F16\u3002\u53EA\u57FA\u4E8E\u7ED9\u5B9A\u7684\u4E0A\u4E0B\u6587\u548C\u4E00\u822C\u5E38\u8BC6\u8BC4\u4F30\u9009\u9898\uFF0C\u4E0D\u7F16\u9020\u8BE5\u4F5C\u8005\u5E93\u91CC\u6CA1\u6709\u7684\u4FE1\u606F\u3002\u8F93\u51FA\u7528\u4E2D\u6587 markdown\uFF0C\u52A1\u5B9E\u3001\u6709\u53D6\u820D\u3001\u4E0D\u5949\u627F\u3002",
  "gtm-review": `\u4F60\u662F\u4E00\u4F4D GTM\uFF08Go-To-Market\uFF09\u5185\u5BB9\u64CD\u76D8\u624B\uFF0C\u4E0D\u662F\u6587\u5B66\u7F16\u8F91\u3002\u4F60\u53EA\u4ECE\u300C\u8FD9\u7BC7\u5185\u5BB9\u80FD\u4E0D\u80FD\u5728\u5E02\u573A\u4E0A\u8D62\u300D\u7684\u51B7\u9177\u89D2\u5EA6\u8BC4\u5224\uFF0C\u6807\u51C6\u52A1\u5B9E\u3001\u541D\u556C\u3002

\u6309\u4E03\u4E2A\u7EF4\u5EA6\u5404\u6253 0-10 \u5206\uFF1A
1. \u53D7\u4F17\u9501\u5B9A\uFF1A\u76EE\u6807\u8BFB\u8005\u662F\u5426\u5177\u4F53\u5230\u300C\u4E00\u4E2A\u4EBA\u300D\uFF0C\u75DB\u70B9\u662F\u5426\u771F\u5B9E\u707C\u70E7\uFF08\u800C\u975E\u6CDB\u6CDB\u800C\u8C08\uFF09
2. \u94A9\u5B50\u5F3A\u5EA6\uFF1A\u6807\u9898+\u524D\u4E09\u53E5\u80FD\u5426\u5728 3 \u79D2\u5185\u8BA9\u76EE\u6807\u8BFB\u8005\u505C\u4E0B\u3001\u4EA7\u751F\u300C\u8BF4\u7684\u5C31\u662F\u6211\u300D
3. \u5DEE\u5F02\u5316\uFF1A\u76F8\u6BD4\u8BE5\u9886\u57DF\u5DF2\u6709\u5185\u5BB9\uFF0C\u662F\u5426\u6709\u522B\u4EBA\u7ED9\u4E0D\u4E86\u7684\u72EC\u7279\u89D2\u5EA6/\u4FE1\u606F/\u89C6\u89D2
4. \u4EF7\u503C\u5BC6\u5EA6\uFF1A\u8BFB\u8005\u8BFB\u5B8C\u80FD\u5426\u5E26\u8D70\u81F3\u5C11\u4E00\u4E2A\u53EF\u7ACB\u5373\u884C\u52A8\u7684\u4E1C\u897F
5. \u4F20\u64AD\u6027\uFF1A\u6709\u6CA1\u6709\u8BA9\u4EBA\u60F3\u8F6C\u53D1/\u6536\u85CF\u7684\u793E\u4EA4\u8D27\u5E01\uFF08\u663E\u5F97\u806A\u660E/\u6709\u7528/\u6709\u5171\u9E23\uFF09
6. \u8F6C\u5316\u8BBE\u8BA1\uFF1A\u662F\u5426\u81EA\u7136\u670D\u52A1\u4E8E\u4E1A\u52A1\u76EE\u6807\uFF08\u6DA8\u7C89/\u5F15\u6D41/\u5EFA\u7ACB\u6743\u5A01\uFF09\uFF0C\u800C\u975E\u81EA\u55E8
7. \u53EF\u53D1\u73B0\u6027\uFF1A\u6807\u9898\u4E0E\u5185\u5BB9\u662F\u5426\u542B\u76EE\u6807\u8BFB\u8005\u4F1A\u641C\u7D22\u7684\u5173\u952E\u8BCD

\u53EA\u8F93\u51FA\u4E25\u683C JSON\uFF0C\u4E0D\u8981\u4EFB\u4F55\u89E3\u91CA\u6587\u5B57\u6216\u4EE3\u7801\u5757\u6807\u8BB0\uFF1A
{"scores":{"\u53D7\u4F17\u9501\u5B9A":N,"\u94A9\u5B50\u5F3A\u5EA6":N,"\u5DEE\u5F02\u5316":N,"\u4EF7\u503C\u5BC6\u5EA6":N,"\u4F20\u64AD\u6027":N,"\u8F6C\u5316\u8BBE\u8BA1":N,"\u53EF\u53D1\u73B0\u6027":N},"total":N,"verdict":"go|optimize|no-go","critical_issues":["\u6700\u81F4\u547D\u76841-3\u6761"],"fixes":["\u5177\u4F53\u5230\u53EF\u76F4\u63A5\u6267\u884C\u7684\u4FEE\u6539\u6307\u4EE4\uFF0C\u6BCF\u6761\u9488\u5BF9\u4E00\u4E2A\u95EE\u9898"]}

\u8BC4\u5206\u541D\u556C\uFF1A60 \u53CA\u683C\uFF0C75+ \u624D\u662F\u80FD\u6253\u7684\u7A3F\u3002\u5B81\u82DB\u523B\u52FF\u653E\u6C34\u2014\u2014\u653E\u6C34\u4F1A\u8BA9\u70C2\u7A3F\u6D41\u5411\u5E02\u573A\u3002total \u4E3A\u4E03\u9879\u52A0\u6743\u603B\u5206(0-100)\u3002`,
  "de-ai": `\u4F60\u662F\u300C\u4EBA\u5473\u6CE8\u5165\u5668\u300D\u3002\u628A\u8FD9\u7BC7 AI \u751F\u6210\u7684\u6587\u7AE0\u6E05\u6D17\u6210\u50CF\u771F\u4EBA\u5199\u7684\uFF1A\u4FDD\u6301\u4E8B\u5B9E\u3001\u89C2\u70B9\u3001\u7ED3\u6784\u4E3B\u7EBF\u4E0D\u53D8\uFF0C\u8F93\u51FA\u5B8C\u6574\u5168\u6587\u3002
\u3010\u7ED3\u6784\u7C89\u788E\u3011AI \u7231\u5199\u5DE5\u6574\u5217\u8868\u548C\u5BF9\u79F0\u6BB5\u843D\u3002\u628A\u8FDE\u7EED\u5217\u8868\u6539\u5199\u6210\u81EA\u7136\u53D9\u8FF0\uFF1B\u6BB5\u843D\u957F\u77ED\u8981\u53C2\u5DEE\u2014\u2014\u6709\u7684\u4E00\u53E5\u8BDD\u6210\u6BB5\uFF0C\u6709\u7684\u4E09\u56DB\u53E5\uFF1B\u5220\u6389\u300C\u9996\u5148/\u5176\u6B21/\u6700\u540E/\u4E0E\u6B64\u540C\u65F6\u300D\u8FD9\u7C7B\u903B\u8F91\u8FDE\u63A5\u8BCD\uFF0C\u8BA9\u53E5\u5B50\u76F4\u63A5\u649E\u4E0A\u3002
\u3010\u60C5\u611F\u5FAE\u6270\u3011\u5728 3-5 \u5904\u6CE8\u5165\u771F\u4EBA\u7684\u4E3B\u89C2\u77AC\u95F4\uFF1A\u4E00\u53E5\u5410\u69FD\u3001\u4E00\u4E2A\u53CD\u95EE\u3001\u4E00\u6B21\u81EA\u6211\u6000\u7591\uFF08\u300C\u6211\u4E00\u5F00\u59CB\u4E5F\u4E0D\u4FE1\u300D\uFF09\u3001\u4E00\u4E2A\u5177\u4F53\u5230\u8FC7\u5206\u7684\u7EC6\u8282\u3002\u968F\u673A\u3001\u514B\u5236\uFF0C\u4E0D\u8981\u6BCF\u6BB5\u90FD\u52A0\u3002
\u3010\u8BCD\u6C47\u4FEE\u526A\u3011\u52A0\u7C97\u6700\u591A\u7559 3-5 \u5904\u91D1\u53E5\uFF1B\u5220\u7834\u6298\u53F7\u6392\u6BD4\uFF1B\u300C\u4E0D\u662FA\u800C\u662FB\u300D\u6539\u6210\u76F4\u63A5\u8BF4B\uFF1B\u5957\u8BDD\uFF08\u503C\u5F97\u6CE8\u610F\u7684\u662F/\u7EFC\u4E0A\u6240\u8FF0/\u67D0\u79CD\u7A0B\u5EA6\u4E0A/\u4E0D\u96BE\u53D1\u73B0\uFF09\u5168\u5220\u3002
\u3010\u53E3\u8BED\u5316\u3011\u957F\u53E5\u62C6\u77ED\uFF0C\u4E66\u9762\u8BCD\u6362\u767D\u8BDD\uFF08\u300C\u8FDB\u884C\u6539\u5584\u300D\u2192\u300C\u6539\u300D\uFF09\uFF0C\u9002\u5F53\u7528\u300C\u4F60\u300D\u5BF9\u8BDD\u3002
\u53EA\u8F93\u51FA\u6E05\u6D17\u540E\u7684\u5168\u6587 markdown\uFF0C\u4E0D\u8981\u4EFB\u4F55\u89E3\u91CA\u3002`,
  "fact-check": `\u4F60\u662F\u8D44\u6DF1\u4E8B\u5B9E\u6838\u67E5\u4E13\u5BB6\u517C\u533B\u7597\u5408\u89C4\u5BA1\u7A3F\u5B98\uFF0C\u4E13\u6838\u517B\u751F\u5065\u5EB7\u5185\u5BB9\u3002\u5BA1\u8FD9\u7BC7\u6587\u7AE0\uFF0C\u8F93\u51FA\u6838\u67E5\u62A5\u544A\uFF0C\u53EA\u8F93\u51FA\u4EE5\u4E0B\u4E09\u8282\uFF1A
## \u{1F534} \u4E8B\u5B9E\u6027\u58F0\u79F0\u6838\u67E5
\u9010\u6761\u5217\u51FA\u6587\u4E2D\u5173\u952E\u4E8B\u5B9E\u58F0\u79F0\uFF08\u5177\u4F53\u6570\u5B57/\u7814\u7A76\u5F15\u7528/\u673A\u5236\u56E0\u679C/\u767E\u5206\u6BD4\uFF09\uFF0C\u6BCF\u6761\u5224\u5B9A\u5E76\u8BF4\u660E\uFF1A
- \u2705 \u5E38\u8BC6\u53EF\u4FE1 \uFF5C \u26A0\uFE0F \u9700\u6838\u5B9E\uFF08\u8BF4\u660E\u4E3A\u4F55\u5B58\u7591\uFF1A\u6765\u6E90\u6A21\u7CCA?\u6570\u5B57\u53EF\u7591?\u8FC7\u65F6?\uFF09 \uFF5C \u274C \u6709\u8BEF\uFF08\u7ED9\u51FA\u6B63\u786E\u8BF4\u6CD5\uFF09
\u91CD\u70B9\u6293\u300C\u67D0\u7814\u7A76\u8868\u660E\u300D\u300CXX%\u300D\u300C\u5BFC\u81F4/\u5F15\u8D77\u300D\u8FD9\u7C7B\u786C\u58F0\u79F0\u3002\u5B81\u53EF\u591A\u6807 \u26A0\uFE0F\uFF0C\u4E0D\u653E\u8FC7\u786C\u4F24\u3002
## \u2696\uFE0F \u533B\u7597\u5408\u89C4\u7EA2\u7EBF
\u6807\u51FA\u8FDD\u53CD\u5FAE\u4FE1\u533B\u7597\u5185\u5BB9\u89C4\u8303/\u5E7F\u544A\u6CD5\u7684\u8868\u8FF0\uFF1A\u7597\u6548\u627F\u8BFA\uFF08\u6CBB\u6108/\u6839\u6CBB/\u6709\u6548\u7387\uFF09\u3001\u7EDD\u5BF9\u5316\uFF08\u6700/\u7B2C\u4E00/100%/\u4E00\u5B9A\uFF09\u3001\u8BCA\u65AD\u6216\u7528\u836F\u5EFA\u8BAE\u3001\u8D2C\u4F4E\u5176\u4ED6\u7597\u6CD5\u3002\u6BCF\u6761\u7ED9\u5408\u89C4\u6539\u5199\u3002\u82E5\u65E0\u5219\u5199\u300C\u672A\u53D1\u73B0\u7EA2\u7EBF\u300D\u3002
## \u{1F4CC} \u4FEE\u6539\u6E05\u5355
\u6309\u4E25\u91CD\u5EA6\u6392\u5E8F\uFF0C3-8 \u6761\u53EF\u76F4\u63A5\u6267\u884C\u7684\u4FEE\u6539\uFF08\u6307\u660E\u4F4D\u7F6E+\u600E\u4E48\u6539\uFF09\u3002
\u5177\u4F53\u5230\u53E5\u5B50\uFF0C\u4E0D\u7A7A\u8C08\u3002`,
  "layout-designer": `\u4F60\u662F\u8D44\u6DF1\u516C\u4F17\u53F7\u6392\u7248\u8BBE\u8BA1\u5E08\u3002\u8BFB\u8FD9\u7BC7\u6587\u7AE0\uFF0C\u5728\u5408\u9002\u7684\u4F4D\u7F6E\u63D2\u5165\u6392\u7248\u7EC4\u4EF6\u6807\u8BB0\uFF0C\u8BA9\u957F\u6587\u66F4\u6709\u8282\u594F\u3001\u91CD\u70B9\u66F4\u7A81\u51FA\u3002**\u4E0D\u6539\u52A8\u6B63\u6587\u6587\u5B57\u5185\u5BB9**\uFF0C\u53EA\u505A\u7ED3\u6784\u589E\u5F3A\u3002

\u53EF\u7528\u7EC4\u4EF6\uFF08\u7528\u56F4\u680F\u8BED\u6CD5\uFF0C\u5404\u5360\u72EC\u7ACB\u884C\uFF09\uFF1A
::: \u91D1\u53E5
\u4E00\u53E5\u6700\u6709\u529B\u7684\u8BDD\uFF08\u5168\u6587\u63111-3\u5904\u6700\u8BE5\u88AB\u8BB0\u4F4F/\u622A\u56FE\u7684\u53E5\u5B50\uFF0C\u6539\u9020\u6210\u91D1\u53E5\u5361\uFF09
:::
::: \u6570\u636E
\u6307\u6807A | \u6570\u503C
\u6307\u6807B | \u6570\u503C
\uFF08\u628A\u6563\u843D\u5728\u6587\u4E2D\u7684\u5BF9\u6BD4\u6570\u636E\u96C6\u4E2D\u6210\u5BF9\u6BD4\u5361\uFF1B\u6BCF\u884C\u300C\u540D\u79F0 | \u503C\u300D\uFF09
:::
::: \u6B65\u9AA4
\u7B2C\u4E00\u6B65\u505A\u4EC0\u4E48
\u7B2C\u4E8C\u6B65\u505A\u4EC0\u4E48
\uFF08\u628A\u64CD\u4F5C\u6E05\u5355/\u65B9\u6CD5\u6B65\u9AA4\u6539\u9020\u6210\u7F16\u53F7\u6B65\u9AA4\u5361\uFF09
:::
::: \u91CD\u70B9
\u9700\u8981\u8BFB\u8005\u5212\u91CD\u70B9\u7684\u6838\u5FC3\u7ED3\u8BBA
:::
::: \u8B66\u793A
\u533B\u7597\u98CE\u9669\u63D0\u793A/\u514D\u8D23\u58F0\u660E\uFF08\u5982\u6D89\u53CA\u5065\u5EB7\u5E72\u9884\uFF09
:::

\u89C4\u5219\uFF1A
- \u91D1\u53E5\u5361\u6700\u591A3\u4E2A\uFF0C\u5B81\u7F3A\u6BCB\u6EE5\uFF0C\u53EA\u6311\u771F\u6B63\u7684\u7206\u70B9\u53E5
- \u6570\u636E/\u6B65\u9AA4\uFF1A\u6587\u4E2D\u786E\u5B9E\u6709\u5BF9\u5E94\u5185\u5BB9\u624D\u7528\uFF0C\u4E0D\u786C\u9020
- \u7EC4\u4EF6\u524D\u540E\u4FDD\u7559\u7A7A\u884C\uFF1B\u6B63\u6587\u5176\u4F59\u90E8\u5206\u539F\u6837\u4FDD\u7559
- \u8F93\u51FA\u5B8C\u6574\u7684\u589E\u5F3A\u7248 markdown \u5168\u6587\uFF0C\u4E0D\u8981\u89E3\u91CA`,
  "troll-judge": `\u4F60\u662F\u300C\u6760\u7CBE\u9884\u5224\u5B98\u300D\u2014\u2014\u516C\u4F17\u53F7\u8BC4\u8BBA\u533A\u7684\u8D44\u6DF1\u89C2\u5BDF\u8005\u3002\u9884\u6F14\u8FD9\u7BC7\u6587\u7AE0\u53D1\u5E03\u540E\u7684\u8BC4\u8BBA\u533A\uFF0C\u627E\u51FA\u6700\u53EF\u80FD\u51FA\u73B0\u7684\u62AC\u6760\u3001\u8D28\u7591\u548C\u653B\u51FB\u3002
\u8F93\u51FA\uFF1A
## \u{1F5EF} \u9884\u5224\u7684\u6760\uFF08\u6309\u6740\u4F24\u529B\u6392\u5E8F\uFF0C5-8\u6761\uFF09
\u6BCF\u6761\u5305\u542B\uFF1A
- \u3010\u7C7B\u578B\u3011\u4E13\u4E1A\u8D28\u7591/\u4E2A\u4F8B\u53CD\u9A73/\u7ACB\u573A\u653B\u51FB/\u6807\u9898\u515A\u6307\u8D23/\u52A8\u673A\u8D28\u7591/\u6296\u673A\u7075
- \u3010\u8BC4\u8BBA\u539F\u6587\u3011\u6309\u771F\u5B9E\u6760\u7CBE\u7684\u53E3\u543B\u5199\u51FA\u90A3\u6761\u8BC4\u8BBA\uFF08\u53E3\u8BED\uFF0C\u5E26\u60C5\u7EEA\uFF09
- \u3010\u6740\u4F24\u529B\u3011\u9AD8/\u4E2D/\u4F4E + \u4E00\u53E5\u4E3A\u4EC0\u4E48\uFF08\u4F1A\u4E0D\u4F1A\u5E26\u504F\u8BC4\u8BBA\u533A/\u5F15\u53D1\u4E3E\u62A5\uFF09
- \u3010\u62C6\u89E3\u3011\u4E8C\u9009\u4E00\uFF1AA.\u6587\u4E2D\u9884\u57CB\uFF08\u5728\u54EA\u6BB5\u52A0\u4E00\u53E5\u4EC0\u4E48\u8BDD\u63D0\u524D\u5835\u6B7B\uFF09 B.\u795E\u56DE\u590D\uFF08\u8BC4\u8BBA\u533A\u56DE\u590D\u6A21\u677F\uFF0C\u673A\u667A\u4E0D\u5931\u98CE\u5EA6\uFF09
## \u{1F6E1} \u7EFC\u5408\u5EFA\u8BAE
1-3 \u6761\u6700\u503C\u5F97\u505A\u7684\u6587\u4E2D\u4FEE\u6539\uFF08\u5177\u4F53\u5230\u4F4D\u7F6E\u548C\u6539\u6CD5\uFF09
\u89C4\u5219\uFF1A\u6760\u8981\u771F\u5B9E\u72E0\u8FA3\uFF0C\u522B\u5199\u8F6F\u6760\uFF1B\u62C6\u89E3\u8981\u80FD\u76F4\u63A5\u6267\u884C\u3002`,
  "data-viz": `\u4F60\u662F\u6570\u636E\u53EF\u89C6\u5316\u5E08\u3002\u4ECE\u6587\u7AE0\u4E2D\u63D0\u53D6\u6700\u503C\u5F97\u753B\u6210\u5BF9\u6BD4\u56FE\u8868\u7684\u6570\u636E\u7EC4\uFF080-3\u7EC4\uFF0C\u6CA1\u6709\u53EF\u753B\u7684\u5C31\u8F93\u51FA\u7A7A\u6570\u7EC4\uFF09\u3002
\u53EA\u8F93\u51FA\u4E25\u683C JSON\uFF0C\u4E0D\u8981\u89E3\u91CA\u6216\u4EE3\u7801\u5757\u6807\u8BB0\uFF1A
{"charts":[{"title":"\u56FE\u8868\u6807\u9898(\u226414\u5B57)","unit":"\u5355\u4F4D(\u5982 \u6B21/\u5206\u3001%\u3001kg\uFF0C\u53EF\u7A7A)","items":[{"label":"\u9879\u76EE\u540D(\u22648\u5B57)","value":\u6570\u5B57}],"insertAfter":"\u8BE5\u56FE\u5E94\u63D2\u5728\u54EA\u6BB5\u4E4B\u540E\u2014\u2014\u6458\u5F55\u90A3\u4E00\u6BB5\u5F00\u5934\u768410-15\u4E2A\u5B57"}]}
\u89C4\u5219\uFF1A\u53EA\u63D0\u53D6\u6587\u4E2D\u771F\u5B9E\u51FA\u73B0\u7684\u6570\u5B57\uFF1Bitems 2-6 \u6761\u624D\u503C\u5F97\u753B\uFF1B\u5BF9\u6BD4\u7C7B\u4F18\u5148\uFF08\u524D\u540E\u5BF9\u6BD4/\u591A\u65B9\u6848\u5BF9\u6BD4/\u5468\u6B21\u53D8\u5316\uFF09\uFF1Bvalue \u5FC5\u987B\u662F\u7EAF\u6570\u5B57\uFF08\u53BB\u6389\u5355\u4F4D\uFF09\u3002`,
  "cover-hook": `\u4F60\u662F\u516C\u4F17\u53F7\u9996\u56FE\u94A9\u5B50\u5E08\u3002\u9996\u56FE\u662F\u4FE1\u606F\u6D41\u6253\u5F00\u7387\u7684\u7B2C\u4E00\u751F\u4EA7\u529B\uFF0C\u8D1F\u8D23\u60C5\u7EEA\u51B2\u51FB\uFF0C\u548C\u6807\u9898\uFF08\u8D1F\u8D23\u4FE1\u606F\uFF09\u505A\u89C6\u89C9\u642D\u6863\u3002
\u53EA\u8F93\u51FA\u4E25\u683C JSON\uFF1A{"hook":"\u4E3B\u94A9\u5B50(\u226410\u5B57\uFF0C\u5927\u5B57\uFF0C\u53EF\u7528\u6570\u5B57/\u53CD\u5E38\u8BC6/\u60AC\u5FF5/\u624E\u5FC3\u63D0\u95EE)","sub":"\u526F\u94A9\u5B50(\u226416\u5B57\uFF0C\u8865\u5145\u5F20\u529B)"}
\u89C4\u5219\uFF1Ahook \u4E0D\u662F\u6807\u9898\u7684\u590D\u8BFB\uFF1B\u7981\u6B62\u4E66\u9762\u8BED\uFF1Bhook \u8981\u77ED\u5230 3 \u79D2\u8BFB\u5B8C\u3002`,
  "video-script": `\u4F60\u662F\u89C6\u9891\u53F7\u53E3\u64AD\u811A\u672C\u7F16\u5267\u3002\u628A\u6587\u7AE0\u6539\u5199\u6210 60-90 \u79D2\u7AD6\u5C4F\u53E3\u64AD\u811A\u672C\u3002
\u786C\u6027\u7ED3\u6784\uFF1A
\u3010\u94A9\u5B50\uFF5C0-3\u79D2\u3011\u4E00\u53E5\u8BA9\u4EBA\u505C\u4F4F\u7684\u8BDD\uFF08\u53CD\u5E38\u8BC6/\u624E\u5FC3\u63D0\u95EE/\u6570\u5B57\u51B2\u51FB\uFF09\uFF0C\u7981\u6B62\u300C\u5927\u5BB6\u597D\u300D\u5F0F\u5F00\u573A
\u3010\u5171\u9E23\uFF5C3-15\u79D2\u3011\u7528\u300C\u4F60\u300D\u63CF\u8FF0\u89C2\u4F17\u6B63\u5728\u7ECF\u5386\u7684\u573A\u666F
\u3010\u5E72\u8D27\uFF5C15-70\u79D2\u30112-3 \u4E2A\u6838\u5FC3\u70B9\uFF1A\u6BCF\u70B9\u4E00\u53E5\u7ED3\u8BBA+\u4E00\u53E5\u89E3\u91CA+\u4E00\u4E2A\u5177\u4F53\u4F8B\u5B50\u6216\u6570\u636E\uFF1B\u53E3\u8BED\u77ED\u53E5\uFF0C\u6BCF\u53E5\u226420\u5B57\uFF0C\u53EF\u76F4\u63A5\u5FF5
\u3010\u6536\u5C3E\uFF5C70-90\u79D2\u3011\u4E00\u53E5\u91D1\u53E5 + \u5173\u6CE8\u5F15\u5BFC\uFF08\u300C\u5173\u6CE8\u6211\uFF0C\u4E0B\u671F\u8BB2\u2026\u300D\uFF09
\u8F93\u51FA\u683C\u5F0F\uFF1A
# \u6807\u9898\uFF08\u226416\u5B57\uFF09
\u5C01\u9762\u6587\u6848\uFF1A\u226410\u5B57\u5927\u5B57
---
[\u955C\u5934\u63D0\u793A] \u53F0\u8BCD\u2026\uFF08\u9010\u53E5\u5206\u884C\uFF1B\u955C\u5934\u63D0\u793A\u7528\u65B9\u62EC\u53F7\uFF0C\u5982[\u7279\u5199][B-roll:\u8DD1\u6B65\u753B\u9762][\u5B57\u5E55\u5F3A\u8C03]\uFF09
---
\u8BDD\u9898\u6807\u7B7E\uFF1A#xx #xx\uFF083-5\u4E2A\uFF09
\u8981\u6C42\uFF1A\u5168\u7A0B\u53E3\u8BED\u50CF\u5BF9\u670B\u53CB\u8BF4\u8BDD\uFF1B\u6570\u5B57\u548C\u4E8B\u5B9E\u6765\u81EA\u539F\u6587\u4E0D\u7F16\u9020\uFF1B\u6B63\u6587\u603B\u5B57\u6570 220-320 \u5B57\uFF08\u5BF9\u5E94 60-90 \u79D2\u8BED\u901F\uFF09\u3002`
};

// src/lib.js
function sanitizeName(s) {
  return s.replace(/[\\/:*?"<>|#^\[\]]/g, " ").replace(/\s+/g, " ").trim().slice(0, 60);
}
function csvCell(v) {
  const s = v === void 0 || v === null ? "" : String(v);
  return /[",\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
}
function stripThink(text) {
  if (!text) return text;
  return String(text).replace(/<think>[\s\S]*?<\/think>/g, "").replace(/^[\s\S]*<\/think>/, "");
}
function parseUnchecked(text) {
  return text.split("\n").filter((l) => /^\s*- \[ \]/.test(l)).map((l) => l.replace(/^\s*- \[ \]\s*/, ""));
}
function extractTopicMeta(raw) {
  const keywords = [...raw.matchAll(/#([^\s#]+)/g)].map((m) => m[1]);
  const title = raw.replace(/#[^\s#]+/g, "").replace(/^\d{4}-\d{2}-\d{2}\s*/, "").trim();
  return { raw, title, keywords: keywords.length ? keywords : [title] };
}
var LICENSE_PUBKEY_B64 = "kJbe8AWI3CA9Cm477z9TlPb8d/aWILB0wLnjT3dj/LA=";
function b64urlToBytes(s) {
  s = s.replace(/-/g, "+").replace(/_/g, "/");
  while (s.length % 4) s += "=";
  const bin = atob(s);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) arr[i] = bin.charCodeAt(i);
  return arr;
}
async function verifyLicense(rawKey, pubB64 = LICENSE_PUBKEY_B64) {
  try {
    const key = String(rawKey || "").replace(/\s/g, "").trim();
    if (!key) return { valid: false, reason: "\u7A7A\u5BC6\u94A5" };
    const dot = key.indexOf(".");
    if (dot < 0) return { valid: false, reason: "\u683C\u5F0F\u9519\u8BEF" };
    const payloadB64 = key.slice(0, dot);
    const sigB64 = key.slice(dot + 1);
    const payloadBytes = b64urlToBytes(payloadB64);
    const sig = b64urlToBytes(sigB64);
    const pubRaw = b64urlToBytes(pubB64.replace(/\+/g, "-").replace(/\//g, "_"));
    const pubKey = await crypto.subtle.importKey("raw", pubRaw, { name: "Ed25519" }, false, ["verify"]);
    const ok = await crypto.subtle.verify({ name: "Ed25519" }, pubKey, sig, payloadBytes);
    if (!ok) return { valid: false, reason: "\u7B7E\u540D\u65E0\u6548\uFF08\u4F2A\u9020\u6216\u635F\u574F\uFF09" };
    const payload = new TextDecoder().decode(payloadBytes);
    const [email, expiry] = payload.split("|");
    if (expiry && expiry < todayISO()) return { valid: false, reason: "\u5DF2\u8FC7\u671F", email, expiry };
    return { valid: true, email, expiry: expiry || null };
  } catch (e) {
    return { valid: false, reason: "\u6821\u9A8C\u5F02\u5E38: " + e.message };
  }
}
function todayISO() {
  const d = /* @__PURE__ */ new Date();
  return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
}
function cleanForPublish(raw) {
  let t = String(raw).replace(/^---[\s\S]*?---\n/, "");
  t = t.split("\n").filter((l) => !l.startsWith("> \u26A0\uFE0F AI") && !l.startsWith("> \u{1F916}")).join("\n");
  for (const mark of ["\n## \u81EA\u68C0", "\n## AI \u81EA\u68C0", "\n## GTM", "\n## \u590D\u76D8", "\n### \u{1F3A8} \u914D\u56FE\u63D0\u793A\u8BCD"]) {
    const i = t.indexOf(mark);
    if (i > 0) t = t.slice(0, i);
  }
  return t.trim();
}
function filterUpcomingHolidays(holidays, todayISO2, win) {
  const today = Date.parse(todayISO2 + "T00:00:00");
  const w = Number(win) || 21;
  return (holidays || []).map((h) => ({ ...h, diff: Math.round((Date.parse(h.date + "T00:00:00") - today) / 864e5) })).filter((h) => h.diff >= 0 && h.diff <= w).sort((a, b) => a.diff - b.diff);
}
function httpAuthAndRoute({ method, url, token, authHeader }) {
  const path = String(url || "").split("?")[0];
  const qToken = (String(url || "").split("token=")[1] || "").split("&")[0] || "";
  if (method === "GET" && path === "/health") return { status: 200, route: "health" };
  const auth = authHeader || qToken || "";
  if (token && auth !== token) return { status: 401, error: "unauthorized" };
  if (method !== "POST") return { status: 404, error: "use POST" };
  if (path === "/capture") return { route: "capture" };
  if (path === "/topic") return { route: "topic" };
  if (path === "/batch") return { route: "batch" };
  return { status: 404, error: "unknown path" };
}
function aiFlavorScore(raw) {
  const t = String(raw || "");
  const len = Math.max(300, t.length);
  const per1k = (n) => n * 1e3 / len;
  const hits = [];
  let score = 0;
  const bold = (t.match(/\*\*[^*\n]+\*\*/g) || []).length;
  const dash = (t.match(/——/g) || []).length;
  const notBut = (t.match(/不是[^，。\n]{1,18}，?而是/g) || []).length;
  const cliche = (t.match(/值得注意的是|综上所述|某种程度上|不难发现|总而言之|与此同时|众所周知|首先，|其次，|最后，/g) || []).length;
  const lines = t.split("\n").filter((l) => l.trim());
  const listLines = lines.filter((l) => /^\s*([-*]|\d+[.、])\s/.test(l)).length;
  const listRatio = lines.length ? listLines / lines.length : 0;
  if (per1k(bold) > 3) {
    score += Math.min(30, (per1k(bold) - 3) * 6);
    hits.push(`\u52A0\u7C97${bold}\u5904`);
  }
  if (dash > 4) {
    score += Math.min(20, (dash - 4) * 3);
    hits.push(`\u7834\u6298\u53F7${dash}\u5904`);
  }
  if (notBut) {
    score += Math.min(20, notBut * 7);
    hits.push(`\u300C\u4E0D\u662FA\u800C\u662FB\u300D${notBut}\u5904`);
  }
  if (cliche) {
    score += Math.min(20, cliche * 5);
    hits.push(`AI\u5957\u8BDD${cliche}\u5904`);
  }
  if (listRatio > 0.35) {
    score += Math.min(15, (listRatio - 0.35) * 60);
    hits.push(`\u5217\u8868\u5360\u6BD4${Math.round(listRatio * 100)}%`);
  }
  return { score: Math.round(Math.min(100, score)), hits };
}
function detectTheme(meta) {
  const m = meta || {};
  if (["zen", "vital", "tech"].includes(m.theme)) return m.theme;
  const hay = [m.title || "", ...Array.isArray(m.tags) ? m.tags : [], ...Array.isArray(m.keywords) ? m.keywords : []].join(" ");
  if (/汽车|智驾|自动驾驶|新能源|电池|车身|底盘|压铸|智能制造|工艺|研发|整车/.test(hay)) return "tech";
  if (/健身|训练|增肌|减脂|有氧|力量|跑步|深蹲|蛋白|生物黑客|biohack|抗衰|冷暴露|HIIT|Zone/.test(hay)) return "vital";
  return "zen";
}
function titleKeywords(title) {
  const stops = /* @__PURE__ */ new Set(["\u6211\u4EEC", "\u4F60\u4EEC", "\u4ED6\u4EEC", "\u8FD9\u4E2A", "\u90A3\u4E2A", "\u4EC0\u4E48", "\u600E\u4E48", "\u4E3A\u4EC0", "\u53EF\u4EE5", "\u6CA1\u6709", "\u5C31\u662F", "\u8FD8\u662F", "\u4F46\u662F", "\u56E0\u4E3A", "\u6240\u4EE5", "\u5982\u679C", "\u4EE5\u53CA", "\u5173\u4E8E", "\u6700\u65B0", "\u7814\u7A76", "\u62A5\u544A", "\u79D1\u5B66", "\u8BC1\u636E", "\u72B6\u51B5", "\u4E2D\u56FD", "\u771F\u6B63", "\u8FD9\u624D", "\u8FD8\u5728"]);
  const out = /* @__PURE__ */ new Set();
  for (const p of String(title || "").split(/[，。？！、：;；\s“”"()（）《》|·]+/).filter(Boolean)) {
    for (const seg of p.match(/[一-龥]{2,}/g) || []) {
      for (let i = 0; i + 2 <= seg.length; i++) {
        const g = seg.slice(i, i + 2);
        if (!stops.has(g)) out.add(g);
      }
    }
    (p.match(/[A-Za-z][A-Za-z0-9]+/g) || []).forEach((w) => out.add(w));
  }
  return [...out].slice(0, 12);
}
function bigramOverlap(a, b) {
  const grams = (s) => {
    const g = /* @__PURE__ */ new Set();
    const t = String(s || "").replace(/[^一-龥A-Za-z0-9]/g, "");
    for (let i = 0; i + 2 <= t.length; i++) g.add(t.slice(i, i + 2));
    return g;
  };
  const A = grams(a), B = grams(b);
  if (!A.size || !B.size) return 0;
  let hit = 0;
  for (const g of A) if (B.has(g)) hit++;
  return hit / Math.min(A.size, B.size);
}
function checkDiversion(text) {
  const rules = [
    [/知识星球/g, "\u77E5\u8BC6\u661F\u7403"],
    [/加(我|个人)?微信/g, "\u52A0\u5FAE\u4FE1"],
    [/微信号[:：]/g, "\u5FAE\u4FE1\u53F7"],
    [/扫(码|一扫|描二维码)/g, "\u626B\u7801"],
    [/二维码/g, "\u4E8C\u7EF4\u7801"],
    [/点击(下方)?链接/g, "\u5916\u94FE\u5F15\u5BFC"],
    [/私信我/g, "\u79C1\u4FE1\u5F15\u5BFC"]
  ];
  const hits = [];
  for (const [re, label] of rules) {
    const n = (String(text || "").match(re) || []).length;
    if (n) hits.push(`${label}\xD7${n}`);
  }
  return hits;
}
function scoreExperienceParas(text, grams) {
  const out = [];
  for (const raw of String(text || "").split(/\n\s*\n/)) {
    const p = raw.split("\n").filter((l) => !/^\s*(#|---|```|> 🤖|- 🍅)/.test(l)).join("\n").trim();
    if (p.length < 40 || p.length > 600) continue;
    let hits = 0;
    for (const g of grams) if (g && g.length >= 2 && p.includes(g)) hits++;
    if (hits >= 2) out.push({ hits, para: p });
  }
  return out.sort((a, b) => b.hits - a.hits);
}
function isOpsLine(title) {
  return /^(发布|收集|确定|搜集|开始|优化|建立|启动|整理|完成|更新|修复|测试|部署|注册|安装|联系|回复)/.test(String(title || "").trim());
}
function trimDegenerateTail(text) {
  let t = String(text || "").replace(/\s+$/, "");
  let changed = true;
  while (changed) {
    changed = false;
    for (let L = 2; L <= 12; L++) {
      if (t.length < L * 8) continue;
      const unit = t.slice(-L);
      if (!unit.trim()) continue;
      let reps = 0;
      while (reps < 5e3 && t.slice(t.length - (reps + 1) * L, t.length - reps * L) === unit) reps++;
      if (reps >= 8 && reps * L >= 24) {
        t = t.slice(0, t.length - reps * L).replace(/\s+$/, "");
        changed = true;
        break;
      }
    }
  }
  return t;
}
function parseXhsPublishInfo(noteText) {
  const t = String(noteText || "");
  const m = t.match(/!\[\[([^\]]+?)\/card-0\.png\]\]/);
  const folder = m ? m[1] : "";
  const tm = t.match(/\*\*标题\*\*[：:]\s*(.+)/);
  const title = tm ? tm[1].trim() : "";
  let caption = "";
  const ci = t.indexOf("## \u{1F4CB} \u53D1\u5E03\u6587\u6848");
  if (ci >= 0) {
    let seg = t.slice(ci);
    const next = seg.indexOf("\n## ", 4);
    if (next > 0) seg = seg.slice(0, next);
    caption = seg.split("\n").slice(1).filter((x) => !x.includes("**\u6807\u9898**")).join("\n").trim();
  }
  return { folder, title, caption };
}
function scanRiskyClaims(text) {
  const rules = [
    [/治愈|根治|痊愈|根除|包治|药到病除|特效药|永不复发|彻底根治/g, "\u7597\u6548\u627F\u8BFA"],
    [/最有效|最佳选择|全国第一|世界第一|绝对安全|绝对有效|100%有效|百分百治|神奇疗效|奇迹般|秒见效/g, "\u8FDD\u7981\u6781\u9650\u8BCD"],
    [/确诊为|诊断为/g, "\u8BCA\u65AD\u8868\u8FF0"]
  ];
  const hits = [];
  for (const [re, cat] of rules) {
    const m = String(text || "").match(re);
    if (m) for (const w of new Set(m)) hits.push({ word: w, cat });
  }
  return hits;
}

// src/main.js
function daysBetween(a, b) {
  return Math.round((0, import_obsidian.moment)(b).diff((0, import_obsidian.moment)(a), "days", true));
}
function todayStr() {
  return (0, import_obsidian.moment)().format("YYYY-MM-DD");
}
var PromptModal = class extends import_obsidian.Modal {
  constructor(app, { title, placeholder, multiline, submitText, initial, onSubmit }) {
    super(app);
    this.opts = { title, placeholder, multiline, submitText, initial, onSubmit };
  }
  onOpen() {
    const { contentEl } = this;
    contentEl.addClass("cos-modal");
    contentEl.createEl("h3", { text: this.opts.title });
    const input = this.opts.multiline ? contentEl.createEl("textarea", { cls: "cos-input", attr: { rows: "6", placeholder: this.opts.placeholder || "" } }) : contentEl.createEl("input", { cls: "cos-input", attr: { type: "text", placeholder: this.opts.placeholder || "" } });
    if (this.opts.initial) input.value = this.opts.initial;
    contentEl.createEl("div", { cls: "cos-hint", text: this.opts.multiline ? "Cmd/Ctrl+Enter \u63D0\u4EA4" : "Enter \u63D0\u4EA4" });
    const btn = contentEl.createEl("button", { cls: "mod-cta cos-submit", text: this.opts.submitText || "\u786E\u5B9A" });
    const submit = () => {
      const v = input.value.trim();
      if (!v) {
        new import_obsidian.Notice("\u5185\u5BB9\u4E3A\u7A7A");
        return;
      }
      this.close();
      this.opts.onSubmit(v);
    };
    btn.addEventListener("click", submit);
    input.addEventListener("keydown", (e) => {
      const combo = this.opts.multiline ? e.key === "Enter" && (e.metaKey || e.ctrlKey) : e.key === "Enter";
      if (combo) {
        e.preventDefault();
        submit();
      }
    });
    window.setTimeout(() => input.focus(), 20);
  }
  onClose() {
    this.contentEl.empty();
  }
};
var SummaryModal = class extends import_obsidian.Modal {
  constructor(app, title, lines, openCb) {
    super(app);
    this.t = title;
    this.lines = lines;
    this.openCb = openCb;
  }
  onOpen() {
    const { contentEl } = this;
    contentEl.addClass("cos-modal");
    contentEl.createEl("h3", { text: "\u{1F3C1} " + this.t });
    const ul = contentEl.createEl("ul", { cls: "cos-summary" });
    this.lines.forEach((l) => ul.createEl("li", { text: l }));
    const row = contentEl.createEl("div", { cls: "cos-kind-row" });
    if (this.openCb) {
      const b = row.createEl("button", { cls: "cos-kind", text: "\u6253\u5F00\u6D41\u6C34\u7EBF\u5361" });
      b.addEventListener("click", () => {
        this.close();
        this.openCb();
      });
    }
    const ok = row.createEl("button", { cls: "mod-cta cos-kind", text: "\u77E5\u9053\u4E86" });
    ok.addEventListener("click", () => this.close());
  }
  onClose() {
    this.contentEl.empty();
  }
};
var NewDraftModal = class extends import_obsidian.Modal {
  constructor(app, plugin) {
    super(app);
    this.plugin = plugin;
  }
  onOpen() {
    const { contentEl } = this;
    contentEl.addClass("cos-modal");
    contentEl.createEl("h3", { text: "\u270D\uFE0F \u65B0\u5EFA\u516C\u4F17\u53F7\u6587\u7A3F" });
    const t = contentEl.createEl("input", { cls: "cos-input", attr: { type: "text", placeholder: "\u6587\u7A3F\u6807\u9898" } });
    const s = contentEl.createEl("input", { cls: "cos-input", attr: { type: "text", placeholder: "\u7CFB\u5217\uFF08\u53EF\u9009\uFF0C\u5982\uFF1A\u6C7D\u8F66\u6280\u672F\u6D1E\u5BDF\uFF09" } });
    const btn = contentEl.createEl("button", { cls: "mod-cta cos-submit", text: "\u521B\u5EFA" });
    const submit = async () => {
      const title = sanitizeName(t.value);
      if (!title) {
        new import_obsidian.Notice("\u8BF7\u8F93\u5165\u6807\u9898");
        return;
      }
      this.close();
      await this.plugin.createDraft(title, s.value.trim());
    };
    btn.addEventListener("click", submit);
    [t, s].forEach((el) => el.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        submit();
      }
    }));
    window.setTimeout(() => t.focus(), 20);
  }
  onClose() {
    this.contentEl.empty();
  }
};
var TopicModal = class extends import_obsidian.Modal {
  constructor(app, plugin, presetTitle) {
    super(app);
    this.plugin = plugin;
    this.presetTitle = presetTitle || "";
  }
  onOpen() {
    const { contentEl } = this;
    contentEl.addClass("cos-modal");
    contentEl.createEl("h3", { text: "\u{1F4A1} \u65B0\u5EFA\u9009\u9898" });
    const t = contentEl.createEl("input", { cls: "cos-input", attr: { type: "text", placeholder: "\u4E00\u53E5\u8BDD\u9009\u9898" } });
    t.value = this.presetTitle;
    const k = contentEl.createEl("input", { cls: "cos-input", attr: { type: "text", placeholder: "\u5173\u952E\u8BCD\uFF08\u7A7A\u683C\u5206\u9694\uFF0C\u4F9B\u96F7\u8FBE\u8BC4\u5206\uFF09" } });
    contentEl.createEl("div", { cls: "cos-hint", text: "\u5173\u952E\u8BCD\u7528\u4E8E\u5168\u5E93\u7D20\u6750\u5339\u914D\uFF0C\u8D8A\u51C6\u96F7\u8FBE\u8D8A\u7075" });
    const btn = contentEl.createEl("button", { cls: "mod-cta cos-submit", text: "\u5165\u5E93" });
    const submit = async () => {
      const title = t.value.trim();
      if (!title) {
        new import_obsidian.Notice("\u8BF7\u8F93\u5165\u9009\u9898");
        return;
      }
      const kws = k.value.trim().split(/\s+/).filter(Boolean).map((x) => `#${x}`).join(" ");
      this.close();
      await this.plugin.appendTopic(`${title}${kws ? " " + kws : ""}`);
    };
    btn.addEventListener("click", submit);
    [t, k].forEach((el) => el.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        submit();
      }
    }));
    window.setTimeout(() => (this.presetTitle ? k : t).focus(), 20);
  }
  onClose() {
    this.contentEl.empty();
  }
};
var ParaModal = class extends import_obsidian.Modal {
  constructor(app, plugin) {
    super(app);
    this.plugin = plugin;
  }
  onOpen() {
    const { contentEl } = this;
    contentEl.addClass("cos-modal");
    contentEl.createEl("h3", { text: "\u65B0\u5EFA PARA \u7B14\u8BB0" });
    const s = this.plugin.settings;
    const kinds = [
      ["\u9879\u76EE", s.projectsFolder],
      ["\u9886\u57DF", s.areasFolder],
      ["\u8D44\u6E90", s.resourcesFolder],
      ["\u5B58\u6863", s.archiveFolder]
    ];
    let kind = kinds[0];
    const row = contentEl.createEl("div", { cls: "cos-kind-row" });
    const btns = kinds.map(([label, folder]) => {
      const b = row.createEl("button", { text: label, cls: "cos-kind" });
      b.addEventListener("click", () => {
        kind = [label, folder];
        btns.forEach((x) => x.removeClass("mod-cta"));
        b.addClass("mod-cta");
      });
      return b;
    });
    btns[0].addClass("mod-cta");
    const input = contentEl.createEl("input", { cls: "cos-input", attr: { type: "text", placeholder: "\u540D\u79F0" } });
    const btn = contentEl.createEl("button", { cls: "mod-cta cos-submit", text: "\u521B\u5EFA" });
    const submit = async () => {
      const name = sanitizeName(input.value);
      if (!name) {
        new import_obsidian.Notice("\u8BF7\u8F93\u5165\u540D\u79F0");
        return;
      }
      this.close();
      await this.plugin.createParaNote(kind[1], name, kind[0]);
    };
    btn.addEventListener("click", submit);
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        submit();
      }
    });
    window.setTimeout(() => input.focus(), 20);
  }
  onClose() {
    this.contentEl.empty();
  }
};
var StatsModal = class extends import_obsidian.Modal {
  constructor(app, plugin, file) {
    super(app);
    this.plugin = plugin;
    this.file = file;
  }
  onOpen() {
    const { contentEl } = this;
    contentEl.addClass("cos-modal");
    contentEl.createEl("h3", { text: `\u{1F4CA} \u53D1\u5E03\u6570\u636E\uFF1A${this.file.basename}` });
    const old = this.plugin.fm(this.file).stats || {};
    const fields = [["reads", "\u9605\u8BFB"], ["likes", "\u70B9\u8D5E"], ["wows", "\u5728\u770B"], ["shares", "\u8F6C\u53D1"], ["favs", "\u6536\u85CF"], ["completion", "\u5B8C\u8BFB\u7387%"], ["followers", "\u6DA8\u7C89"]];
    const inputs = {};
    for (const [key, label] of fields) {
      const row = contentEl.createEl("div", { cls: "cos-stat-row" });
      row.createEl("span", { cls: "cos-stat-label", text: label });
      inputs[key] = row.createEl("input", { cls: "cos-input cos-stat-input", attr: { type: "number", min: "0", placeholder: "0" } });
      if (old[key] !== void 0) inputs[key].value = old[key];
    }
    const btn = contentEl.createEl("button", { cls: "mod-cta cos-submit", text: "\u4FDD\u5B58\u6570\u636E" });
    btn.addEventListener("click", async () => {
      const stats = {};
      for (const [key] of fields) {
        const n = parseInt(inputs[key].value, 10);
        if (!isNaN(n)) stats[key] = n;
      }
      this.close();
      await this.plugin.app.fileManager.processFrontMatter(this.file, (fm) => {
        fm.stats = stats;
        fm.statsDate = todayStr();
      });
      new import_obsidian.Notice("\u53D1\u5E03\u6570\u636E\u5DF2\u4FDD\u5B58");
      this.plugin.refreshDashboards();
    });
  }
  onClose() {
    this.contentEl.empty();
  }
};
var BatchStatsModal = class extends import_obsidian.Modal {
  constructor(app, plugin) {
    super(app);
    this.plugin = plugin;
  }
  onOpen() {
    const { contentEl } = this;
    contentEl.addClass("cos-modal");
    contentEl.createEl("h3", { text: "\u{1F4CA} \u6279\u91CF\u5F55\u53D1\u5E03\u6570\u636E" });
    contentEl.createEl("div", { cls: "cos-hint", text: "\u6253\u5F00\u516C\u4F17\u53F7\u540E\u53F0\uFF0C\u628A\u6BCF\u7BC7\u7684\u6570\u5B57\u4E00\u5C4F\u586B\u5B8C\u3002\u53EA\u5217\u5DF2\u63A8\u8349\u7A3F\u7BB1/\u5DF2\u53D1\u7684\u7A3F\u3002" });
    const p = this.plugin;
    const prefix = (0, import_obsidian.normalizePath)(p.settings.draftsFolder) + "/";
    const files = p.app.vault.getMarkdownFiles().filter((f) => f.path.startsWith(prefix)).map((f) => ({ f, fm: p.fm(f) })).filter((x) => x.fm.pushedWechat || x.fm.stats || x.fm.status === "\u5F85\u53D1" || x.fm.status === "\u5DF2\u53D1").sort((a, b) => b.f.stat.mtime - a.f.stat.mtime).slice(0, 25);
    if (!files.length) {
      contentEl.createEl("div", { cls: "cos-dim", text: "\u8FD8\u6CA1\u6709\u5DF2\u63A8\u9001/\u5DF2\u53D1\u7684\u6587\u7AE0\u3002" });
      return;
    }
    const fields = ["reads", "likes", "wows", "shares", "favs", "completion", "followers"];
    const labels = { reads: "\u9605\u8BFB", likes: "\u8D5E", wows: "\u5728\u770B", shares: "\u8F6C\u53D1", favs: "\u6536\u85CF", completion: "\u5B8C\u8BFB%", followers: "\u6DA8\u7C89" };
    const rowStyle = "display:flex;gap:6px;align-items:center;margin:3px 0;";
    const titleStyle = "flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:12px;";
    const colStyle = "width:54px;flex:none;";
    const head = contentEl.createEl("div", { attr: { style: rowStyle } });
    head.createEl("span", { text: "\u6807\u9898", attr: { style: titleStyle + "font-weight:600;" } });
    fields.forEach((k) => head.createEl("span", { text: labels[k], attr: { style: colStyle + "text-align:center;font-size:11px;font-weight:600;" } }));
    const rows = [];
    for (const x of files) {
      const row = contentEl.createEl("div", { attr: { style: rowStyle } });
      const title = String(x.fm.title || x.f.basename).replace(/^\d{4}-\d{2}-\d{2}-/, "");
      row.createEl("span", { text: title.slice(0, 20), attr: { style: titleStyle, title } });
      const inputs = {};
      const old = x.fm.stats || {};
      for (const k of fields) {
        const inp = row.createEl("input", { cls: "cos-input", attr: { type: "number", min: "0", placeholder: "0", style: colStyle } });
        if (old[k] !== void 0) inp.value = old[k];
        inputs[k] = inp;
      }
      rows.push({ file: x.f, inputs });
    }
    const btn = contentEl.createEl("button", { cls: "mod-cta cos-submit", text: "\u4FDD\u5B58\u5168\u90E8" });
    btn.addEventListener("click", async () => {
      let n = 0;
      for (const r of rows) {
        const stats = {};
        let any = false;
        for (const k of fields) {
          const v = parseInt(r.inputs[k].value, 10);
          if (!isNaN(v)) {
            stats[k] = v;
            any = true;
          }
        }
        if (!any) continue;
        await p.app.fileManager.processFrontMatter(r.file, (fm) => {
          fm.stats = stats;
          fm.statsDate = todayStr();
        });
        n++;
      }
      this.close();
      new import_obsidian.Notice(`\u5DF2\u4FDD\u5B58 ${n} \u7BC7\u6570\u636E\u3002\u53EF\u4EE5\u70B9 \u{1F4CA} \u751F\u6210\u5DEE\u8DDD\u62A5\u544A\u4E86`);
      p.refreshDashboards();
    });
  }
  onClose() {
    this.contentEl.empty();
  }
};
var TitlesModal = class extends import_obsidian.Modal {
  constructor(app, plugin, file) {
    super(app);
    this.plugin = plugin;
    this.file = file;
  }
  onOpen() {
    const { contentEl } = this;
    contentEl.addClass("cos-modal");
    contentEl.createEl("h3", { text: `\u{1F3F7} \u6807\u9898\u5DE5\u4F5C\u53F0\uFF1A${this.file.basename}` });
    contentEl.createEl("div", { cls: "cos-hint", text: "\u4E00\u884C\u4E00\u4E2A\u5019\u9009\u6807\u9898\uFF1B\u9876\u7EA7\u521B\u4F5C\u8005\u5728\u6807\u9898\u4E0A\u82B1\u7684\u65F6\u95F4\u4E0D\u6BD4\u6B63\u6587\u5C11" });
    const fm = this.plugin.fm(this.file);
    const ta = contentEl.createEl("textarea", { cls: "cos-input", attr: { rows: "6", placeholder: "\u5019\u9009\u6807\u9898\u2026" } });
    ta.value = Array.isArray(fm.titleCandidates) ? fm.titleCandidates.join("\n") : fm.title || "";
    const row = contentEl.createEl("div", { cls: "cos-kind-row" });
    const save = row.createEl("button", { cls: "cos-kind", text: "\u4FDD\u5B58\u5019\u9009" });
    const pick = row.createEl("button", { cls: "mod-cta cos-kind", text: "\u7B2C\u4E00\u884C\u8BBE\u4E3A\u6B63\u5F0F\u6807\u9898" });
    const doSave = async (setTitle) => {
      const list = ta.value.split("\n").map((x) => x.trim()).filter(Boolean);
      if (!list.length) {
        new import_obsidian.Notice("\u6CA1\u6709\u5019\u9009\u6807\u9898");
        return;
      }
      this.close();
      await this.plugin.app.fileManager.processFrontMatter(this.file, (f) => {
        f.titleCandidates = list;
        if (setTitle) f.title = list[0];
      });
      new import_obsidian.Notice(setTitle ? `\u6807\u9898\u5DF2\u5B9A\uFF1A${list[0]}` : `\u5DF2\u5B58 ${list.length} \u4E2A\u5019\u9009`);
    };
    save.addEventListener("click", () => doSave(false));
    pick.addEventListener("click", () => doSave(true));
  }
  onClose() {
    this.contentEl.empty();
  }
};
var InboxReviewModal = class extends import_obsidian.Modal {
  constructor(app, plugin) {
    super(app);
    this.plugin = plugin;
    this.items = plugin.filesIn(plugin.settings.captureFolder, false).filter((f) => f.extension === "md").sort((a, b) => b.stat.mtime - a.stat.mtime);
    this.idx = 0;
    this.done = { topic: 0, material: 0, trash: 0, skip: 0 };
  }
  async onOpen() {
    await this.render();
  }
  async render() {
    const { contentEl } = this;
    contentEl.empty();
    contentEl.addClass("cos-modal");
    if (this.idx >= this.items.length) {
      contentEl.createEl("h3", { text: "\u{1F4E5} \u6536\u4EF6\u7BB1\u6E05\u7A7A\u5B8C\u6210" });
      contentEl.createEl("div", { cls: "cos-hint", text: `\u8F6C\u9009\u9898 ${this.done.topic} \xB7 \u5F52\u7D20\u6750 ${this.done.material} \xB7 \u4E22\u5F03 ${this.done.trash} \xB7 \u8DF3\u8FC7 ${this.done.skip}` });
      const btn = contentEl.createEl("button", { cls: "mod-cta cos-submit", text: "\u5B8C\u6210" });
      btn.addEventListener("click", () => this.close());
      return;
    }
    const f = this.items[this.idx];
    contentEl.createEl("h3", { text: `\u{1F4E5} \u6536\u4EF6\u7BB1\u8BC4\u5BA1 ${this.idx + 1}/${this.items.length}` });
    contentEl.createEl("div", { cls: "cos-group-title", text: f.basename });
    const text = await this.app.vault.cachedRead(f);
    contentEl.createEl("pre", { cls: "cos-preview", text: text.slice(0, 600) + (text.length > 600 ? "\n\u2026" : "") });
    const row = contentEl.createEl("div", { cls: "cos-kind-row" });
    const mk = (label, fn, cta) => {
      const b = row.createEl("button", { cls: "cos-kind" + (cta ? " mod-cta" : ""), text: label });
      b.addEventListener("click", async () => {
        await fn(f);
        this.idx++;
        await this.render();
      });
    };
    mk("\u{1F4A1} \u8F6C\u9009\u9898", async (file) => {
      const title = file.basename.replace(/^\d{4}-\d{2}-\d{2}( \d{6})?\s*/, "");
      await this.plugin.appendTopic(title);
      this.done.topic++;
    }, true);
    mk("\u{1F4E6} \u5F52\u7D20\u6750", async (file) => {
      await this.plugin.ensureFolder(this.plugin.settings.inboxMaterialFolder);
      const dest = (0, import_obsidian.normalizePath)(`${this.plugin.settings.inboxMaterialFolder}/${file.name}`);
      if (this.app.vault.getAbstractFileByPath(dest)) {
        new import_obsidian.Notice("\u76EE\u6807\u5DF2\u6709\u540C\u540D\u6587\u4EF6\uFF0C\u8DF3\u8FC7");
        this.done.skip++;
        return;
      }
      await this.app.fileManager.renameFile(file, dest);
      this.done.material++;
    });
    mk("\u{1F5D1} \u4E22\u5F03", async (file) => {
      await this.app.vault.trash(file, false);
      this.done.trash++;
    });
    mk("\u23ED \u8DF3\u8FC7", async () => {
      this.done.skip++;
    });
  }
  onClose() {
    this.contentEl.empty();
  }
};
var OnboardingModal = class extends import_obsidian.Modal {
  constructor(app, plugin) {
    super(app);
    this.plugin = plugin;
  }
  onOpen() {
    const { contentEl } = this;
    contentEl.addClass("cos-modal");
    contentEl.createEl("h3", { text: "\u26A1 \u6B22\u8FCE\u4F7F\u7528 Content OS" });
    contentEl.createEl("div", { cls: "cos-hint", text: BRAND.tagline + "\u3002\u5148\u786E\u8BA4\u5173\u952E\u8DEF\u5F84\u662F\u5426\u5339\u914D\u4F60\u7684\u5E93\uFF1A" });
    const s = this.plugin.settings;
    const checks = [
      ["\u6355\u83B7\u6587\u4EF6\u5939", s.captureFolder],
      ["\u65E5\u8BB0\u6587\u4EF6\u5939", s.diaryFolder],
      ["\u6587\u7A3F\u6587\u4EF6\u5939", s.draftsFolder],
      ["\u9009\u9898\u5E93\u6587\u4EF6", s.topicsFile],
      ["wiki \u6839\u76EE\u5F55", s.wikiFolder]
    ];
    const list = contentEl.createEl("div");
    for (const [label, path] of checks) {
      const ok = !!this.app.vault.getAbstractFileByPath((0, import_obsidian.normalizePath)(path));
      list.createEl("div", { cls: "cos-line" + (ok ? "" : " cos-warn"), text: `${ok ? "\u2713" : "\u2717"} ${label}\uFF1A${path}` });
    }
    contentEl.createEl("div", { cls: "cos-hint", text: "\u2717 \u7684\u8DEF\u5F84\u4E0D\u4F1A\u62A5\u9519\u2014\u2014\u7528\u5230\u65F6\u4F1A\u81EA\u52A8\u521B\u5EFA\uFF0C\u6216\u5230\u8BBE\u7F6E\u91CC\u6539\u6210\u4F60\u7684\u73B0\u6709\u76EE\u5F55\u3002" });
    const row = contentEl.createEl("div", { cls: "cos-kind-row" });
    const use = row.createEl("button", { cls: "mod-cta cos-kind", text: "\u5C31\u7528\u8FD9\u4E9B\uFF0C\u5F00\u59CB\u4F7F\u7528" });
    const conf = row.createEl("button", { cls: "cos-kind", text: "\u53BB\u8BBE\u7F6E\u91CC\u8C03\u6574" });
    const finish = async () => {
      this.plugin.settings.onboarded = true;
      await this.plugin.saveSettings();
      this.close();
    };
    use.addEventListener("click", async () => {
      await finish();
      this.plugin.activateDashboard();
    });
    conf.addEventListener("click", async () => {
      await finish();
      this.app.setting.open();
      this.app.setting.openTabById("content-os");
    });
  }
  onClose() {
    this.contentEl.empty();
  }
};
var ChecklistView = class extends import_obsidian.ItemView {
  constructor(leaf, plugin) {
    super(leaf);
    this.plugin = plugin;
    this.targetFile = null;
    this.checks = [];
  }
  getViewType() {
    return VIEW_CHECK;
  }
  getDisplayText() {
    return "\u5199\u4F5C\u81EA\u68C0";
  }
  getIcon() {
    return "check-square";
  }
  async onOpen() {
    this.registerEvent(this.app.workspace.on("active-leaf-change", () => {
      const f = this.app.workspace.getActiveFile();
      if (f && f.extension === "md" && f.path !== this.targetFile?.path && !f.path.startsWith((0, import_obsidian.normalizePath)(this.plugin.settings.wikiFolder))) {
        this.targetFile = f;
        this.updateHeader();
      }
    }));
    this.targetFile = this.app.workspace.getActiveFile();
    await this.render();
  }
  async loadItems() {
    return this.plugin.loadChecklistItems();
  }
  updateHeader() {
    if (this.headerEl) this.headerEl.setText("\u76EE\u6807\u6587\u7A3F\uFF1A" + (this.targetFile ? this.targetFile.basename : "\uFF08\u65E0\uFF09"));
  }
  async render() {
    const el = this.contentEl;
    el.empty();
    el.addClass("cos-dash");
    el.createEl("div", { cls: "cos-title", text: "\u2705 \u5199\u4F5C\u81EA\u68C0" });
    this.headerEl = el.createEl("div", { cls: "cos-dim cos-line" });
    this.updateHeader();
    const items = await this.loadItems();
    if (!items || !items.length) {
      el.createEl("div", { cls: "cos-dim cos-line", text: `\u672A\u627E\u5230\u6E05\u5355\u6765\u6E90\uFF1A${this.plugin.settings.checklistFile}\uFF08\u53EF\u5728\u8BBE\u7F6E\u91CC\u6539\uFF09` });
      return;
    }
    this.checks = items.map(() => false);
    const list = el.createEl("div", { cls: "cos-section" });
    items.forEach((text, i) => {
      const row2 = list.createEl("label", { cls: "cos-check-row" });
      const cb = row2.createEl("input", { attr: { type: "checkbox" } });
      cb.addEventListener("change", () => {
        this.checks[i] = cb.checked;
      });
      row2.createEl("span", { text });
    });
    const row = el.createEl("div", { cls: "cos-kind-row" });
    const write = row.createEl("button", { cls: "mod-cta cos-kind", text: "\u628A\u7ED3\u679C\u5199\u5165\u6587\u7A3F" });
    const reload = row.createEl("button", { cls: "cos-kind", text: "\u5237\u65B0\u6E05\u5355" });
    reload.addEventListener("click", () => this.render());
    if (this.plugin.settings.aiApiKey) {
      const ai = row.createEl("button", { cls: "cos-kind", text: "\u{1F916} AI \u81EA\u68C0" });
      ai.addEventListener("click", () => {
        if (!this.targetFile) {
          new import_obsidian.Notice("\u5148\u6253\u5F00\u4E00\u7BC7\u6587\u7A3F");
          return;
        }
        this.plugin.aiSelfCheck(this.targetFile, items);
      });
    }
    write.addEventListener("click", async () => {
      if (!this.targetFile) {
        new import_obsidian.Notice("\u5148\u6253\u5F00\u4E00\u7BC7\u6587\u7A3F");
        return;
      }
      const lines = items.map((t, i) => `- ${this.checks[i] ? "\u2705" : "\u2B1C"} ${t}`);
      await this.app.vault.process(this.targetFile, (cur) => cur.replace(/\n*$/, "\n") + `
## \u81EA\u68C0\uFF08${todayStr()}\uFF09

${lines.join("\n")}
`);
      new import_obsidian.Notice(`\u81EA\u68C0\u7ED3\u679C\u5DF2\u5199\u5165\uFF1A${this.targetFile.basename}\uFF08${this.checks.filter(Boolean).length}/${items.length}\uFF09`);
    });
  }
};
var NewPipelineModal = class extends import_obsidian.Modal {
  constructor(app, plugin, presetTitle, presetKws) {
    super(app);
    this.plugin = plugin;
    this.presetTitle = presetTitle || "";
    this.presetKws = presetKws || [];
  }
  onOpen() {
    const { contentEl } = this;
    contentEl.addClass("cos-modal");
    contentEl.createEl("h3", { text: "\u{1F3ED} \u65B0\u5EFA\u5185\u5BB9\u6D41\u6C34\u7EBF" });
    contentEl.createEl("div", { cls: "cos-hint", text: "\u5BA1\u9898(CDCP) \u2192 \u8BA1\u5212(PDCP) \u2192 \u521D\u7A3F(TR1) \u2192 \u7F16\u8F91(TR2) \u2192 \u53D1\u5E03\u51C6\u5907(ADCP)\uFF1B\u6BCF\u9636\u6BB5 AI \u5E72\u6D3B\uFF0C\u4F60\u8FC7\u95E8\u7981" });
    const t = contentEl.createEl("input", { cls: "cos-input", attr: { type: "text", placeholder: "\u9009\u9898/\u6807\u9898" } });
    t.value = this.presetTitle;
    const k = contentEl.createEl("input", { cls: "cos-input", attr: { type: "text", placeholder: "\u5173\u952E\u8BCD\uFF08\u7A7A\u683C\u5206\u9694\uFF0C\u7528\u4E8E\u7D20\u6750\u805A\u5408\uFF09" } });
    k.value = this.presetKws.join(" ");
    const autoRow = contentEl.createEl("label", { cls: "cos-check-row" });
    const autoCb = autoRow.createEl("input", { attr: { type: "checkbox" } });
    autoRow.createEl("span", { text: "\u{1F916} \u5168\u81EA\u52A8\u6A21\u5F0F\uFF08\u5FAA\u73AF\u5DE5\u7A0B\uFF1AAI \u751F\u6210\u2192GTM \u8BC4\u59D4\u2192\u4FEE\u8BA2\uFF0C\u76F4\u5230\u8FBE\u6807\uFF1B\u4EBA\u4E0D\u4ECB\u5165\uFF0C\u4EA7\u7269\u505C\u5728\u5F85\u53D1\uFF09" });
    const btn = contentEl.createEl("button", { cls: "mod-cta cos-submit", text: "\u5F00\u5361" });
    const submit = async () => {
      const title = sanitizeName(t.value);
      if (!title) {
        new import_obsidian.Notice("\u8BF7\u8F93\u5165\u9009\u9898");
        return;
      }
      const kws = k.value.trim().split(/\s+/).filter(Boolean);
      const auto = autoCb.checked;
      this.close();
      const f = await this.plugin.newPipeline(title, kws.length ? kws : [title]);
      if (auto && f) this.plugin.runAutoPipeline(f);
    };
    btn.addEventListener("click", submit);
    [t, k].forEach((el) => el.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        submit();
      }
    }));
    window.setTimeout(() => (this.presetTitle ? k : t).focus(), 20);
  }
  onClose() {
    this.contentEl.empty();
  }
};
var PipelineView = class extends import_obsidian.ItemView {
  constructor(leaf, plugin) {
    super(leaf);
    this.plugin = plugin;
  }
  getViewType() {
    return VIEW_PIPE;
  }
  getDisplayText() {
    return "\u5185\u5BB9\u6D41\u6C34\u7EBF";
  }
  getIcon() {
    return "factory";
  }
  async onOpen() {
    this.scheduleRender = () => {
      window.clearTimeout(this._t);
      this._t = window.setTimeout(() => this.render(), 1500);
    };
    ["create", "modify", "delete", "rename"].forEach((ev) => this.registerEvent(this.app.vault.on(ev, this.scheduleRender)));
    await this.render();
  }
  async onClose() {
    window.clearTimeout(this._t);
  }
  async render() {
    const el = this.contentEl;
    el.empty();
    el.addClass("cos-dash");
    el.addClass("cos-pipeview");
    const p = this.plugin;
    const cards = p.pipelineCards();
    const active = cards.filter((x) => x.fm.status !== "done" && x.fm.status !== "rejected");
    const done = cards.filter((x) => x.fm.status === "done");
    const head = el.createEl("div", { cls: "cos-phead" });
    head.createEl("span", { cls: "cos-ptitle", text: "\u{1F3ED} \u5185\u5BB9\u6D41\u6C34\u7EBF" });
    head.createEl("span", { cls: "cos-pcount", text: active.length ? `${active.length} \u8FDB\u884C\u4E2D` : "\u7A7A\u95F2" });
    el.createEl("button", { cls: "cos-pnew", text: "\uFF0B \u65B0\u5EFA\u6D41\u6C34\u7EBF" }).addEventListener("click", () => new NewPipelineModal(p.app, p).open());
    if (!active.length) {
      el.createEl("div", { cls: "cos-pempty", text: "\u6682\u65E0\u8FDB\u884C\u4E2D\u7684\u6D41\u6C34\u7EBF\u3002\u70B9\u4E0A\u65B9\u300C\u65B0\u5EFA\u300D\uFF0C\u6216\u4ECE\u9009\u9898\u96F7\u8FBE \u25B6\uFE0F \u5F00\u5361\u3002" });
    }
    const phaseOf = (st) => st === "\u5BA1\u9898" || st === "\u8BA1\u5212" ? "plan" : st === "\u521D\u7A3F" || st === "\u7F16\u8F91" ? "write" : st === "\u53D1\u5E03\u51C6\u5907" ? "ready" : "done";
    for (const x of active.sort((a, b) => b.f.stat.mtime - a.f.stat.mtime)) {
      const stage = x.fm.stage;
      const gate = PIPE_GATES[stage];
      const curIdx = PIPE_STAGES.indexOf(stage);
      const card = el.createEl("div", { cls: `cos-pcard cos-phase-${phaseOf(stage)}` });
      const ch = card.createEl("div", { cls: "cos-pcard-head" });
      const title = ch.createEl("a", { cls: "cos-pcard-title", text: x.fm.topic || x.f.basename });
      title.addEventListener("click", () => p.app.workspace.getLeaf(false).openFile(x.f));
      ch.createEl("span", { cls: "cos-pbadge", text: stage === "\u5B8C\u6210" ? "\u2713 \u5B8C\u6210" : gate ? `${stage} \xB7 ${gate}` : stage });
      const track = card.createEl("div", { cls: "cos-ptrack" });
      const total = PIPE_STAGES.length;
      const pct = curIdx <= 0 ? 0 : Math.min(100, curIdx / (total - 1) * 100);
      track.style.setProperty("--pct", pct + "%");
      PIPE_STAGES.forEach((st, i) => {
        const state = i < curIdx ? "done" : i === curIdx ? "cur" : "todo";
        const step = track.createEl("div", { cls: "cos-pstep cos-pstep-" + state });
        step.createEl("span", { cls: "cos-pdot", text: i < curIdx ? "\u2713" : String(i + 1) });
        step.createEl("span", { cls: "cos-plabel", text: st });
      });
      if (stage !== "\u5B8C\u6210") {
        const acts = card.createEl("div", { cls: "cos-pacts" });
        const btn = (label, kind, fn) => {
          const b = acts.createEl("button", { cls: "cos-pbtn cos-pbtn-" + kind, text: label });
          b.addEventListener("click", fn);
        };
        btn(`\u25B6 \u8DD1\u300C${stage}\u300D`, "primary", async () => {
          await p.runPipelineStage(x.f);
          this.scheduleRender();
        });
        btn(`\u2705 \u8FC7${gate || "\u95E8\u7981"}`, "ghost", async () => {
          await p.gatePass(x.f);
          this.scheduleRender();
        });
        if (stage === "\u5BA1\u9898") btn("\u{1F916} \u5168\u81EA\u52A8", "ghost", () => p.runAutoPipeline(x.f));
        btn("\u{1F916} Autopilot", "ghost", async () => {
          if (!p.settings.searchApiUrl && !confirm("Autopilot \u5C06\u5168\u81EA\u52A8\u8DD1\u5230\u53D1\u5E03\u51C6\u5907\uFF08\u591A\u8F6E AI \u751F\u6210+GTM \u8BC4\u5BA1\uFF0C\u6D88\u8017\u8F83\u591A token\uFF09\u3002\u7EE7\u7EED\uFF1F")) return;
          await p.runAutopilot(x.f);
          this.scheduleRender();
        });
        btn("\u274C \u9A73\u56DE", "danger", () => p.gateReject(x.f));
      }
      if (x.fm.materialPack || x.fm.draft) {
        const foot = card.createEl("div", { cls: "cos-pfoot" });
        if (x.fm.materialPack) {
          const m = foot.createEl("a", { cls: "cos-pchip", text: "\u{1F4E6} \u7D20\u6750\u5305" });
          m.addEventListener("click", () => p.openPath(x.fm.materialPack));
        }
        if (x.fm.draft) {
          const d = foot.createEl("a", { cls: "cos-pchip", text: "\u{1F4C4} \u8349\u7A3F" });
          d.addEventListener("click", () => p.openPath(x.fm.draft));
        }
      }
    }
    if (done.length) {
      const sec = el.createEl("div", { cls: "cos-pdone" });
      sec.createEl("div", { cls: "cos-pdone-title", text: `\u5DF2\u5B8C\u6210 \xB7 ${done.length}` });
      done.slice(0, 6).forEach((x) => {
        const a = sec.createEl("a", { cls: "cos-pdone-item", text: "\u2713 " + (x.fm.topic || x.f.basename) });
        a.addEventListener("click", () => p.app.workspace.getLeaf(false).openFile(x.f));
      });
    }
  }
};
var NewWikiPageModal = class extends import_obsidian.Modal {
  constructor(app, plugin) {
    super(app);
    this.plugin = plugin;
  }
  onOpen() {
    const { contentEl } = this;
    contentEl.addClass("cos-modal");
    contentEl.createEl("h3", { text: "\u2795 \u65B0\u5EFA Wiki \u9875" });
    const kinds = [
      ["concept", "\u6982\u5FF5\u9875", "wiki/concepts"],
      ["system", "\u7CFB\u7EDF\u9875", "wiki/systems"],
      ["project", "\u9879\u76EE\u9875", "wiki/projects"],
      ["capability", "\u80FD\u529B\u9875", "wiki/capabilities"],
      ["person", "\u4EBA\u7269\u9875", "wiki/people"],
      ["raw-source", "\u6765\u6E90\u5361", "raw/notes"]
    ];
    let kind = kinds[0];
    const row = contentEl.createEl("div", { cls: "cos-kind-row cos-wrap" });
    const btns = kinds.map((k) => {
      const b = row.createEl("button", { text: k[1], cls: "cos-kind" });
      b.addEventListener("click", () => {
        kind = k;
        btns.forEach((x) => x.removeClass("mod-cta"));
        b.addClass("mod-cta");
      });
      return b;
    });
    btns[0].addClass("mod-cta");
    const input = contentEl.createEl("input", { cls: "cos-input", attr: { type: "text", placeholder: "\u9875\u9762\u6807\u9898\uFF08\u4E00\u9875\u4E00\u6982\u5FF5\uFF09" } });
    const btn = contentEl.createEl("button", { cls: "mod-cta cos-submit", text: "\u6309 AGENTS.md \u6A21\u677F\u521B\u5EFA" });
    const submit = async () => {
      const name = sanitizeName(input.value);
      if (!name) {
        new import_obsidian.Notice("\u8BF7\u8F93\u5165\u6807\u9898");
        return;
      }
      this.close();
      await this.plugin.createWikiPage(kind[0], kind[2], name);
    };
    btn.addEventListener("click", submit);
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        submit();
      }
    });
    window.setTimeout(() => input.focus(), 20);
  }
  onClose() {
    this.contentEl.empty();
  }
};
var WikiView = class extends import_obsidian.ItemView {
  constructor(leaf, plugin) {
    super(leaf);
    this.plugin = plugin;
  }
  getViewType() {
    return VIEW_WIKI;
  }
  getDisplayText() {
    return "LLM Wiki";
  }
  getIcon() {
    return "library";
  }
  async onOpen() {
    this.scheduleRender = () => {
      window.clearTimeout(this._t);
      this._t = window.setTimeout(() => this.render(), 2e3);
    };
    ["create", "modify", "delete", "rename"].forEach((ev) => this.registerEvent(this.app.vault.on(ev, this.scheduleRender)));
    await this.render();
  }
  async onClose() {
    window.clearTimeout(this._t);
  }
  section(parent, title) {
    const s = parent.createEl("div", { cls: "cos-section" });
    s.createEl("div", { cls: "cos-section-title", text: title });
    return s;
  }
  async render() {
    const el = this.contentEl;
    el.empty();
    el.addClass("cos-dash");
    const p = this.plugin;
    el.createEl("div", { cls: "cos-title", text: "\u{1F9E0} LLM Wiki" });
    const actions = el.createEl("div", { cls: "cos-actions" });
    const mk = (label, fn) => actions.createEl("button", { text: label, cls: "cos-action" }).addEventListener("click", fn);
    mk("\u{1F50D} \u641C wiki", () => {
      new FilePickModal(this.app, p.wikiPages().map((x) => x.f), "\u641C\u7D22\u7F16\u8BD1\u9875\u2026", (f) => p.app.workspace.getLeaf(false).openFile(f)).open();
    });
    mk("\u{1F4AC} \u95EE wiki", () => p.askWiki());
    mk("\u2795 \u65B0\u5EFA\u9875", () => new NewWikiPageModal(p.app, p).open());
    mk("\u{1F331} \u5F53\u524D\u7B14\u8BB0\u2192seed \u9875", () => {
      const f = p.app.workspace.getActiveFile();
      if (!f) {
        new import_obsidian.Notice("\u5148\u6253\u5F00\u4E00\u7BC7\u7B14\u8BB0");
        return;
      }
      p.draftSeedFromNote(f);
    });
    mk("\u{1F4C7} \u603B\u7D22\u5F15", () => p.openPath(`${p.settings.wikiFolder}/index.md`));
    mk("\u{1F9FE} \u4EFB\u52A1\u4E66", () => new TaskBriefModal(p.app, p).open());
    const pages = p.wikiPages();
    const stat = this.section(el, `\u7F16\u8BD1\u5C42\u6982\u51B5 \xB7 ${pages.length} \u9875`);
    const byType = {}, byStatus = {};
    let confSum = 0, confN = 0;
    for (const x of pages) {
      byType[x.fm.type || "\u672A\u6807"] = (byType[x.fm.type || "\u672A\u6807"] || 0) + 1;
      byStatus[x.fm.status || "\u672A\u6807"] = (byStatus[x.fm.status || "\u672A\u6807"] || 0) + 1;
      const c = parseFloat(x.fm.confidence);
      if (!isNaN(c)) {
        confSum += c;
        confN++;
      }
    }
    stat.createEl("div", { cls: "cos-line cos-dim", text: "\u7C7B\u578B\uFF1A" + Object.entries(byType).map(([k, v]) => `${k} ${v}`).join(" \xB7 ") });
    stat.createEl("div", { cls: "cos-line cos-dim", text: "\u72B6\u6001\uFF1A" + Object.entries(byStatus).map(([k, v]) => `${k} ${v}`).join(" \xB7 ") + (confN ? ` \xB7 \u5E73\u5747\u7F6E\u4FE1\u5EA6 ${(confSum / confN).toFixed(2)}` : "") });
    const health = this.section(el, "Wiki \u5065\u5EB7\uFF08lint\uFF09");
    const noSources = pages.filter((x) => !x.fm.sources || Array.isArray(x.fm.sources) && !x.fm.sources.length);
    const staleSeed = pages.filter((x) => x.fm.status === "seed" && x.fm.last_ingested && daysBetween(x.fm.last_ingested, (0, import_obsidian.moment)()) > 30);
    const lowConf = pages.filter((x) => parseFloat(x.fm.confidence) < 0.65);
    const broken = await p.wikiBrokenLinks();
    const item = (label, arr, openList) => {
      const row = health.createEl("div", { cls: "cos-line" + (arr.length ? " cos-warn" : "") });
      row.createEl("span", { text: `${arr.length ? "\u26A0\uFE0F" : "\u2713"} ${label}\uFF1A` });
      row.createEl("b", { text: String(arr.length) });
      if (arr.length && openList) {
        const a = row.createEl("a", { text: "\u3000\u67E5\u770B", cls: "cos-dim" });
        a.addEventListener("click", () => {
          new FilePickModal(this.app, arr.map((x) => x.f || x), label, (f) => p.app.workspace.getLeaf(false).openFile(f)).open();
        });
      }
    };
    item("\u7F3A sources \u7684\u9875", noSources, true);
    item("\u8D85 30 \u5929\u672A\u52A0\u56FA\u7684 seed \u9875", staleSeed, true);
    item("\u4F4E\u7F6E\u4FE1\u5EA6\u9875\uFF08<0.65\uFF09", lowConf, true);
    const bl = health.createEl("div", { cls: "cos-line" + (broken.length ? " cos-warn" : "") });
    bl.createEl("span", { text: `${broken.length ? "\u26A0\uFE0F" : "\u2713"} wiki \u5185\u65AD\u94FE\uFF1A` });
    bl.createEl("b", { text: String(broken.length) });
    if (broken.length) broken.slice(0, 5).forEach((b) => health.createEl("div", { cls: "cos-dim cos-line", text: `\u3000${b.from} \u2192 [[${b.target}]]` }));
    const qsec = this.section(el, "ingest \u961F\u5217");
    const queue = await p.uncheckedItems(p.settings.ingestQueueFile);
    if (!queue || !queue.length) qsec.createEl("div", { cls: "cos-dim cos-line", text: "\u961F\u5217\u4E3A\u7A7A" });
    else {
      queue.slice(0, 6).forEach((t) => {
        const a = qsec.createEl("div", { cls: "cos-item" }).createEl("a", { text: t.replace(/\[\[|\]\]/g, "") });
        a.addEventListener("click", () => p.openPath(p.settings.ingestQueueFile));
      });
      const btn = qsec.createEl("button", { cls: "cos-action cos-full", text: `\u{1F9E0} \u751F\u6210\u7F16\u8BD1\u4EFB\u52A1\u4E66\uFF08${queue.length} \u6761\uFF09` });
      btn.addEventListener("click", () => p.buildIngestBrief());
    }
    const recent = this.section(el, "\u6700\u8FD1\u66F4\u65B0\u9875\u9762");
    pages.sort((a, b) => String(b.fm.last_ingested || "").localeCompare(String(a.fm.last_ingested || ""))).slice(0, 8).forEach((x) => {
      const row = recent.createEl("div", { cls: "cos-item" });
      const a = row.createEl("a", { text: x.f.basename });
      a.addEventListener("click", () => p.app.workspace.getLeaf(false).openFile(x.f));
      row.createEl("span", { cls: "cos-dim", text: `${x.fm.status || ""} ${x.fm.confidence || ""}` });
    });
  }
};
var FilePickModal = class extends import_obsidian.FuzzySuggestModal {
  constructor(app, files, placeholder, onPick) {
    super(app);
    this.files = files;
    this.onPick = onPick;
    this.setPlaceholder(placeholder || "\u9009\u62E9\u6587\u4EF6\u2026");
  }
  getItems() {
    return this.files;
  }
  getItemText(f) {
    return f.path;
  }
  onChooseItem(f) {
    this.onPick(f);
  }
};
var ChatView = class extends import_obsidian.ItemView {
  constructor(leaf, plugin) {
    super(leaf);
    this.plugin = plugin;
    this.messages = [];
    this.contextParts = [];
    this.busy = false;
    this.targetFile = null;
  }
  getViewType() {
    return VIEW_CHAT;
  }
  getDisplayText() {
    return "AI \u5BF9\u8BDD";
  }
  getIcon() {
    return "message-circle";
  }
  async onOpen() {
    this.registerEvent(this.app.workspace.on("active-leaf-change", () => {
      const f = this.app.workspace.getActiveFile();
      if (f && f.extension === "md") this.targetFile = f;
    }));
    this.targetFile = this.app.workspace.getActiveFile();
    this.render();
  }
  buildSystem() {
    let sys = this.plugin.settings.chatSystemPrompt;
    if (this.contextParts.length) {
      sys += "\n\n\u53C2\u8003\u4E0A\u4E0B\u6587\uFF1A\n\n" + this.contextParts.map((c) => `\u3010${c.label}\u3011
${c.text}`).join("\n\n---\n\n");
    }
    return sys;
  }
  addContext(label, text) {
    if (!text || !text.trim()) {
      new import_obsidian.Notice("\u5185\u5BB9\u4E3A\u7A7A");
      return;
    }
    this.contextParts.push({ label, text: text.slice(0, 6e3) });
    this.render();
  }
  render() {
    const el = this.contentEl;
    el.empty();
    el.addClass("cos-chat");
    const p = this.plugin;
    const cfg = p.resolveAI();
    const head = el.createEl("div", { cls: "cos-chat-head" });
    head.createEl("span", { cls: "cos-chat-title", text: "AI \u5BF9\u8BDD" });
    const tools = head.createEl("span", { cls: "cos-tools" });
    const tool = (icon, title, fn) => {
      const t = tools.createEl("span", { cls: "cos-next", text: icon, attr: { title } });
      t.addEventListener("click", fn);
    };
    tool("\u{1F4BE}", "\u5B58\u4E3A\u5BF9\u8BDD\u6C89\u6DC0\u7B14\u8BB0", () => this.saveConversation());
    tool("\u{1F5D1}", "\u6E05\u7A7A\u4F1A\u8BDD\u4E0E\u4E0A\u4E0B\u6587", () => {
      this.messages = [];
      this.contextParts = [];
      this.render();
    });
    const ctxBar = el.createEl("div", { cls: "cos-chat-ctx" });
    const add = (label, fn) => ctxBar.createEl("button", { cls: "cos-chip-btn", text: label }).addEventListener("click", fn);
    add("+\u{1F4C4} \u5F53\u524D\u7B14\u8BB0", async () => {
      const f = this.targetFile;
      if (!f) {
        new import_obsidian.Notice("\u6CA1\u6709\u6D3B\u52A8\u7B14\u8BB0");
        return;
      }
      this.addContext(`\u5F53\u524D\u7B14\u8BB0\uFF1A${f.basename}`, await this.app.vault.cachedRead(f));
    });
    add("+\u2702\uFE0F \u9009\u4E2D\u6587\u672C", () => {
      const sel = this.app.workspace.activeEditor?.editor?.getSelection();
      this.addContext("\u9009\u4E2D\u6587\u672C", sel || "");
    });
    add("+\u{1F310} \u641C\u7D22", () => {
      if (!p.settings.searchApiUrl) {
        new import_obsidian.Notice("\u5148\u5728 \u8BBE\u7F6E\u2192AI\u8FDE\u63A5 \u914D\u7F6E\u79C1\u6709\u641C\u7D22 API \u5730\u5740");
        return;
      }
      new PromptModal(this.app, {
        title: "\u{1F310} \u79C1\u6709\u641C\u7D22",
        placeholder: "\u641C\u7D22\u8BCD\u2026\uFF08\u7ED3\u679C\u4F5C\u4E3A\u5BF9\u8BDD\u4E0A\u4E0B\u6587\u9644\u5165\uFF09",
        onSubmit: async (q) => {
          new import_obsidian.Notice("\u{1F310} \u641C\u7D22\u4E2D\u2026");
          try {
            const w = await p.webSearch(q, { deep: true, n: 3 });
            this.addContext(`\u641C\u7D22\uFF1A${q}`, w || "\uFF08\u65E0\u7ED3\u679C\uFF09");
          } catch (e) {
            new import_obsidian.Notice("\u274C " + e.message);
          }
        }
      }).open();
    });
    add("+\u{1F9E0} \u8BED\u4E49", () => {
      if (!p.settings.semanticApiUrl) {
        new import_obsidian.Notice("\u5148\u5728 \u8BBE\u7F6E\u2192AI \u8FDE\u63A5 \u914D\u7F6E\u8BED\u4E49\u68C0\u7D22\u5730\u5740");
        return;
      }
      new PromptModal(this.app, {
        title: "\u{1F9E0} \u8BED\u4E49\u68C0\u7D22\uFF08\u5E93\u5185\u610F\u601D\u76F8\u8FD1\uFF0C\u4E0D\u9700\u8981\u5B57\u9762\u5339\u914D\uFF09",
        placeholder: "\u60F3\u627E\u4EC0\u4E48\u2026\uFF08\u5982\uFF1A\u8FD0\u52A8\u4E4B\u540E\u5934\u8111\u6E05\u9192\u7684\u4F53\u9A8C\uFF09",
        onSubmit: async (q) => {
          new import_obsidian.Notice("\u{1F9E0} \u8BED\u4E49\u68C0\u7D22\u4E2D\u2026");
          const rs = await p.semanticRecall(q, 5, "all");
          if (!rs.length) {
            new import_obsidian.Notice("\u65E0\u7ED3\u679C\uFF08\u6216 semantic-vault \u670D\u52A1\u672A\u542F\u52A8\uFF09");
            return;
          }
          this.addContext(`\u8BED\u4E49\uFF1A${q}`, rs.map((r) => `\u3010${r.source}\u3011
${r.text}`).join("\n\n---\n\n"));
        }
      }).open();
    });
    add("+\u{1F4E6} \u9009\u6587\u4EF6", () => {
      const s = p.settings;
      const pri = [(0, import_obsidian.normalizePath)(s.materialFolder) + "/", (0, import_obsidian.normalizePath)(s.wikiFolder) + "/"];
      const files = this.app.vault.getMarkdownFiles().sort((a, b) => (pri.some((x) => b.path.startsWith(x)) ? 1 : 0) - (pri.some((x) => a.path.startsWith(x)) ? 1 : 0));
      new FilePickModal(this.app, files, "\u9009\u62E9\u8981\u9644\u4E3A\u4E0A\u4E0B\u6587\u7684\u7B14\u8BB0\uFF08\u7D20\u6750\u5305/wiki \u9875\u4F18\u5148\uFF09\u2026", async (f) => {
        this.addContext(`\u7B14\u8BB0\uFF1A${f.basename}`, await this.app.vault.cachedRead(f));
      }).open();
    });
    for (let i = 0; i < this.contextParts.length; i++) {
      const c = this.contextParts[i];
      const chip = ctxBar.createEl("span", { cls: "cos-chip", text: c.label + " \u2715" });
      chip.addEventListener("click", () => {
        this.contextParts.splice(i, 1);
        this.render();
      });
    }
    const msgs = el.createEl("div", { cls: "cos-chat-msgs" });
    if (!this.messages.length) {
      const hour = (/* @__PURE__ */ new Date()).getHours();
      const name = (this.plugin.settings.chatUserName || "").trim();
      const who = name ? `\uFF0C${name}` : "";
      const hi = hour < 5 ? `\u591C\u6DF1\u4E86${who}` : hour < 12 ? `\u65E9\u4E0A\u597D${who}` : hour < 14 ? `\u4E2D\u5348\u597D${who}` : hour < 18 ? `\u4E0B\u5348\u597D${who}` : `\u665A\u4E0A\u597D${who}`;
      const empty = msgs.createEl("div", { cls: "cos-chat-empty" });
      empty.createEl("div", { cls: "cos-chat-hi", text: hi });
      empty.createEl("div", { cls: "cos-chat-sub", text: "\u9644\u4E0A\u4E0A\u4E0B\u6587\u63D0\u95EE\uFF0C\u56DE\u7B54\u57FA\u4E8E\u4F60\u7684\u5E93" });
    }
    for (const m of this.messages) {
      const b = msgs.createEl("div", { cls: "cos-msg cos-msg-" + m.role });
      const bodyEl = b.createEl("div", { cls: "cos-msg-body" });
      if (m.role === "assistant") {
        bodyEl.addClass("markdown-rendered");
        void import_obsidian.MarkdownRenderer.render(this.app, m.content || "", bodyEl, "", this);
      } else {
        bodyEl.setText(m.content);
      }
      if (m.role === "assistant") {
        const mt = b.createEl("div", { cls: "cos-msg-tools" });
        const t1 = mt.createEl("span", { cls: "cos-next", text: "\u{1F4E5} \u63D2\u5165\u7B14\u8BB0" });
        t1.addEventListener("click", async () => {
          if (!this.targetFile) {
            new import_obsidian.Notice("\u6CA1\u6709\u76EE\u6807\u7B14\u8BB0");
            return;
          }
          await this.app.vault.process(this.targetFile, (cur) => cur.replace(/\n*$/, "\n") + "\n" + m.content + "\n");
          new import_obsidian.Notice(`\u5DF2\u63D2\u5165 ${this.targetFile.basename}`);
        });
        const t2 = mt.createEl("span", { cls: "cos-next", text: "\u{1F4CB} \u590D\u5236" });
        t2.addEventListener("click", async () => {
          try {
            await navigator.clipboard.writeText(m.content);
            new import_obsidian.Notice("\u5DF2\u590D\u5236");
          } catch (e) {
            new import_obsidian.Notice("\u526A\u8D34\u677F\u4E0D\u53EF\u7528");
          }
        });
      }
    }
    if (this.busy) msgs.createEl("div", { cls: "cos-typing", text: "\u25CF\u25CF\u25CF" });
    msgs.scrollTop = msgs.scrollHeight;
    const inp = el.createEl("div", { cls: "cos-chat-inputcard" });
    const ta = inp.createEl("textarea", { cls: "cos-chat-ta", attr: { rows: "2", placeholder: "\u4ECA\u5929\u60F3\u5199\u70B9\u4EC0\u4E48\uFF1F\uFF08Enter \u53D1\u9001 \xB7 Shift+Enter \u6362\u884C\uFF09" } });
    const foot = inp.createEl("div", { cls: "cos-chat-foot" });
    foot.createEl("span", { cls: "cos-chat-model", text: cfg.label || "" });
    const send = foot.createEl("button", { cls: "cos-chat-send2", text: this.busy ? "\u2026" : "\u2191", attr: { title: "\u53D1\u9001\uFF08Cmd/Ctrl+Enter\uFF09" } });
    const doSend = async () => {
      const text = ta.value.trim();
      if (!text || this.busy) return;
      ta.value = "";
      this.messages.push({ role: "user", content: text });
      this.busy = true;
      this.render();
      try {
        if (this.plugin.settings.aiStreaming) {
          this.messages.push({ role: "assistant", content: "" });
          const idx = this.messages.length - 1;
          let last = 0;
          try {
            const r = await this.plugin.llmChatStream(this.buildSystem(), this.messages.slice(0, idx), (partial) => {
              this.messages[idx].content = partial;
              const now = Date.now();
              if (now - last > 250) {
                last = now;
                this.render();
              }
            });
            this.messages[idx].content = r.text;
          } catch (se) {
            this.messages.pop();
            const r = await this.plugin.llmChatMessages(this.buildSystem(), this.messages);
            this.messages.push({ role: "assistant", content: r.text });
          }
        } else {
          const r = await this.plugin.llmChatMessages(this.buildSystem(), this.messages);
          this.messages.push({ role: "assistant", content: r.text });
        }
      } catch (e) {
        this.messages.push({ role: "assistant", content: "\u274C " + e.message });
      }
      this.busy = false;
      this.render();
    };
    send.addEventListener("click", doSend);
    ta.addEventListener("keydown", (e) => {
      if (e.key !== "Enter") return;
      if (e.isComposing || e.keyCode === 229) return;
      if (e.shiftKey) return;
      if (import_obsidian.Platform.isMobile && !(e.metaKey || e.ctrlKey)) return;
      e.preventDefault();
      doSend();
    });
  }
  async saveConversation() {
    if (!this.messages.length) {
      new import_obsidian.Notice("\u4F1A\u8BDD\u4E3A\u7A7A");
      return;
    }
    const p = this.plugin;
    const cfg = p.resolveAI();
    const stamp = (0, import_obsidian.moment)();
    const body = [
      "---",
      `title: AI\u5BF9\u8BDD ${stamp.format("YYYY-MM-DD HH:mm")}`,
      "type: chat",
      `model: ${cfg.model}`,
      `date: ${stamp.format("YYYY-MM-DD")}`,
      "tags:",
      "  - ai-chat",
      "---",
      "",
      ...this.contextParts.length ? [`> \u4E0A\u4E0B\u6587\uFF1A${this.contextParts.map((c) => c.label).join("\u3001")}`, ""] : [],
      ...this.messages.flatMap((m) => [`## ${m.role === "user" ? "\u{1F64B} \u6211" : "\u{1F916} AI"}`, "", m.content, ""])
    ].join("\n");
    const path = `${p.settings.chatSaveFolder}/AI\u5BF9\u8BDD-${stamp.format("YYYY-MM-DD-HHmm")}.md`;
    const f = await p.ensureFile(path, body);
    await this.app.workspace.getLeaf(false).openFile(f);
    new import_obsidian.Notice("\u5BF9\u8BDD\u5DF2\u6C89\u6DC0");
  }
};
var TaskBriefModal = class extends import_obsidian.Modal {
  constructor(app, plugin) {
    super(app);
    this.plugin = plugin;
  }
  onOpen() {
    const { contentEl } = this;
    contentEl.addClass("cos-modal");
    contentEl.createEl("h3", { text: "\u{1F9FE} \u751F\u6210\u4EFB\u52A1\u4E66" });
    contentEl.createEl("div", { cls: "cos-hint", text: "Content OS \u7EC4\u88C5\u5E26\u5E93\u4E0A\u4E0B\u6587\u7684\u4EFB\u52A1\uFF0C\u7C98\u7ED9 Claude Code / Claudian \u6267\u884C\u91CD\u6D3B" });
    const kinds = [
      ["ingest", "\u{1F4DA} \u7F16\u8BD1 ingest \u961F\u5217\u8FDB wiki"],
      ["review-digest", "\u{1F4C8} \u590D\u76D8\u6D1E\u5BDF\u805A\u5408\uFF08\u7206\u6B3E\u89C4\u5F8B \u2192 wiki\uFF09"],
      ["lineage-batch", "\u{1F9EC} \u6279\u91CF\u8865\u767B\u5DF2\u53D1\u6587\u7A3F\u7684\u8840\u7EDF"],
      ["deep-material", "\u{1F4E6} \u7D20\u6750\u5305\u6DF1\u8BFB\uFF08\u771F\u8BFB\u6587\u4EF6\u586B\u8BBA\u8BC1\uFF09"],
      ["custom", "\u270D\uFE0F \u81EA\u5B9A\u4E49\u4EFB\u52A1"]
    ];
    for (const [id, label] of kinds) {
      const b = contentEl.createEl("button", { cls: "cos-action cos-full", text: label });
      b.addEventListener("click", () => {
        this.close();
        this.plugin.buildTaskBrief(id);
      });
    }
  }
  onClose() {
    this.contentEl.empty();
  }
};
var CalendarView = class extends import_obsidian.ItemView {
  constructor(leaf, plugin) {
    super(leaf);
    this.plugin = plugin;
    this.month = (0, import_obsidian.moment)().startOf("month");
  }
  getViewType() {
    return VIEW_CAL;
  }
  getDisplayText() {
    return "\u5185\u5BB9\u65E5\u5386";
  }
  getIcon() {
    return "calendar";
  }
  async onOpen() {
    this.scheduleRender = () => {
      window.clearTimeout(this._t);
      this._t = window.setTimeout(() => this.render(), 1500);
    };
    ["create", "modify", "delete", "rename"].forEach((ev) => this.registerEvent(this.app.vault.on(ev, this.scheduleRender)));
    await this.render();
  }
  async onClose() {
    window.clearTimeout(this._t);
  }
  async render() {
    const el = this.contentEl;
    el.empty();
    el.addClass("cos-dash");
    const p = this.plugin;
    const head = el.createEl("div", { cls: "cos-cal-head" });
    const nav = (txt, fn) => {
      const b = head.createEl("button", { cls: "cos-cal-nav", text: txt });
      b.addEventListener("click", fn);
    };
    nav("\u2039", () => {
      this.month = this.month.clone().subtract(1, "month");
      this.render();
    });
    head.createEl("span", { cls: "cos-cal-title", text: this.month.format("YYYY \u5E74 M \u6708") });
    nav("\u203A", () => {
      this.month = this.month.clone().add(1, "month");
      this.render();
    });
    nav("\u4ECA\u5929", () => {
      this.month = (0, import_obsidian.moment)().startOf("month");
      this.render();
    });
    const quick = el.createEl("div", { cls: "cos-actions" });
    const mk = (label, kind) => quick.createEl("button", { text: label, cls: "cos-action" }).addEventListener("click", () => p.openPeriodic(kind));
    mk("\u5468", "weekly");
    mk("\u6708", "monthly");
    mk("\u5B63", "quarterly");
    mk("\u5E74", "yearly");
    const drafts = p.filesIn(p.settings.draftsFolder, true).filter((f) => f.extension === "md");
    const byDate = {};
    const mark = (d, key, f) => {
      if (!d) return;
      if (!byDate[d]) byDate[d] = { sched: [], pub: [] };
      byDate[d][key].push(f);
    };
    for (const f of drafts) {
      const fm = p.fm(f);
      if (fm.scheduledDate && fm.status !== "\u5DF2\u53D1") mark(String(fm.scheduledDate), "sched", f);
      if (fm.published) mark(String(fm.published), "pub", f);
    }
    const grid = el.createEl("div", { cls: "cos-cal-grid" });
    ["\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D", "\u65E5"].forEach((w) => grid.createEl("div", { cls: "cos-cal-wd", text: w }));
    const start = this.month.clone().startOf("isoWeek");
    const today = todayStr();
    const cur = start.clone();
    for (let i = 0; i < 42; i++) {
      const d = cur.format("YYYY-MM-DD");
      const inMonth = cur.month() === this.month.month();
      const cell = grid.createEl("div", {
        cls: "cos-cal-cell" + (inMonth ? "" : " cos-cal-out") + (d === today ? " cos-cal-today" : "")
      });
      cell.createEl("div", { cls: "cos-cal-day", text: String(cur.date()) });
      const marks = cell.createEl("div", { cls: "cos-cal-marks" });
      if (p.exists(`${p.settings.diaryFolder}/${d}.md`)) marks.createEl("span", { text: "\xB7", cls: "cos-cal-diary" });
      const info = byDate[d];
      if (info?.sched.length) marks.createEl("span", { text: "\u{1F4C5}", attr: { title: info.sched.map((f) => f.basename).join("\n") } });
      if (info?.pub.length) marks.createEl("span", { text: "\u{1F680}", attr: { title: info.pub.map((f) => f.basename).join("\n") } });
      const dateStr = d;
      cell.addEventListener("click", async () => {
        const f = await p.ensureFile(
          `${p.settings.diaryFolder}/${dateStr}.md`,
          p.settings.diaryTemplate.replace(/\{\{date\}\}/g, dateStr)
        );
        await p.app.workspace.getLeaf(false).openFile(f);
      });
      cur.add(1, "day");
      if (i >= 34 && cur.month() !== this.month.month() && cur.isoWeekday() === 1) break;
    }
    const ym = this.month.format("YYYY-MM");
    const monthOf = (key) => Object.entries(byDate).filter(([d]) => d.startsWith(ym)).flatMap(([d, v]) => v[key].map((f) => ({ d, f }))).sort((a, b) => a.d.localeCompare(b.d));
    const sched = monthOf("sched");
    const pub = monthOf("pub");
    const sec = el.createEl("div", { cls: "cos-section" });
    sec.createEl("div", { cls: "cos-section-title", text: `\u672C\u6708\uFF1A\u5DF2\u53D1 ${pub.length} \xB7 \u6392\u671F ${sched.length}` });
    for (const item of [...pub.map((x) => ({ ...x, icon: "\u{1F680}" })), ...sched.map((x) => ({ ...x, icon: "\u{1F4C5}" }))]) {
      const row = sec.createEl("div", { cls: "cos-item" });
      row.createEl("span", { cls: "cos-date", text: `${item.icon} ${item.d.slice(5)}` });
      const a = row.createEl("a", { text: item.f.basename });
      a.addEventListener("click", () => p.app.workspace.getLeaf(false).openFile(item.f));
    }
  }
};
var EditMemoModal = class extends import_obsidian.Modal {
  constructor(app, plugin, file) {
    super(app);
    this.plugin = plugin;
    this.file = file;
  }
  async onOpen() {
    const { contentEl } = this;
    contentEl.addClass("cos-modal");
    contentEl.createEl("h3", { text: "\u270F\uFE0F \u7F16\u8F91\u7075\u611F" });
    const raw = await this.app.vault.read(this.file);
    const fm = /^---[\s\S]*?---\n/.exec(raw);
    this.fmBlock = fm ? fm[0] : "";
    const body = this.plugin.memoBody(raw);
    const ta = contentEl.createEl("textarea", { cls: "cos-input", attr: { rows: "8" } });
    ta.value = body;
    contentEl.createEl("div", { cls: "cos-hint", text: "Cmd/Ctrl+Enter \u4FDD\u5B58" });
    const row = contentEl.createEl("div", { cls: "cos-kind-row" });
    const save = row.createEl("button", { cls: "mod-cta cos-kind", text: "\u4FDD\u5B58" });
    const open = row.createEl("button", { cls: "cos-kind", text: "\u6253\u5F00\u5B8C\u6574\u7B14\u8BB0" });
    const del = row.createEl("button", { cls: "cos-kind cos-danger", text: "\u5220\u9664" });
    const doSave = async () => {
      const v = ta.value.trim();
      if (!v) {
        new import_obsidian.Notice("\u5185\u5BB9\u4E3A\u7A7A");
        return;
      }
      this.close();
      await this.app.vault.modify(this.file, `${this.fmBlock}${v}
`);
      new import_obsidian.Notice("\u5DF2\u4FDD\u5B58");
      this.plugin.refreshFlomo();
    };
    save.addEventListener("click", doSave);
    ta.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        doSave();
      }
    });
    open.addEventListener("click", () => {
      this.close();
      this.app.workspace.getLeaf(false).openFile(this.file);
    });
    del.addEventListener("click", async () => {
      if (!confirm("\u5220\u9664\u8FD9\u6761\u7075\u611F\uFF1F")) return;
      this.close();
      await this.app.vault.trash(this.file, false);
      new import_obsidian.Notice("\u5DF2\u5220\u9664");
      this.plugin.refreshFlomo();
    });
    window.setTimeout(() => {
      ta.focus();
      ta.setSelectionRange(ta.value.length, ta.value.length);
    }, 20);
  }
  onClose() {
    this.contentEl.empty();
  }
};
var FlomoView = class extends import_obsidian.ItemView {
  constructor(leaf, plugin) {
    super(leaf);
    this.plugin = plugin;
    this.limit = plugin.settings.flomoPageSize || 30;
  }
  getViewType() {
    return VIEW_FLOMO;
  }
  getDisplayText() {
    return "\u7075\u611F\u6D41";
  }
  getIcon() {
    return "feather";
  }
  async onOpen() {
    this.scheduleRender = () => {
      window.clearTimeout(this._t);
      this._t = window.setTimeout(() => this.render(), 800);
    };
    ["create", "modify", "delete", "rename"].forEach((ev) => this.registerEvent(this.app.vault.on(ev, (f) => {
      if (f && f.path && f.path.startsWith((0, import_obsidian.normalizePath)(this.plugin.settings.captureFolder))) this.scheduleRender();
    })));
    await this.render();
  }
  async onClose() {
    window.clearTimeout(this._t);
  }
  async render() {
    const el = this.contentEl;
    el.empty();
    el.addClass("cos-flomo");
    const p = this.plugin;
    const composer = el.createEl("div", { cls: "cos-fl-composer" });
    const ta = composer.createEl("textarea", { cls: "cos-fl-input", attr: { rows: "1", placeholder: "\u73B0\u5728\u7684\u60F3\u6CD5\u662F\u2026" } });
    const bar = composer.createEl("div", { cls: "cos-fl-bar" });
    const hint = bar.createEl("span", { cls: "cos-dim", text: "\u8BB0\u5165\u6355\u83B7\u7BB1 \xB7 \u540C\u6B65\u5230\u6240\u6709\u8BBE\u5907" });
    const send = bar.createEl("button", { cls: "mod-cta cos-fl-send", text: "\u53D1\u9001" });
    const grow = () => {
      ta.style.height = "auto";
      ta.style.height = Math.min(ta.scrollHeight, 240) + "px";
    };
    ta.addEventListener("input", grow);
    const submit = async () => {
      const v = ta.value.trim();
      if (!v) return;
      ta.value = "";
      grow();
      await p.captureText(v, true);
      this.render();
    };
    send.addEventListener("click", submit);
    ta.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        submit();
      }
    });
    const files = p.filesIn(p.settings.captureFolder, true).filter((f) => f.extension === "md" && f.basename !== "README").sort((a, b) => b.stat.mtime - a.stat.mtime);
    const stream = el.createEl("div", { cls: "cos-fl-stream" });
    if (!files.length) {
      stream.createEl("div", { cls: "cos-dim cos-fl-empty", text: "\u8FD8\u6CA1\u6709\u7075\u611F \u2014 \u5728\u4E0A\u9762\u5199\u4E0B\u7B2C\u4E00\u6761" });
      return;
    }
    stream.createEl("div", { cls: "cos-dim cos-fl-count", text: `\u5171 ${files.length} \u6761\u7075\u611F` });
    for (const f of files.slice(0, this.limit)) {
      const raw = await this.app.vault.cachedRead(f);
      const body = p.memoBody(raw) || f.basename;
      const card = stream.createEl("div", { cls: "cos-fl-card" });
      const txt = card.createEl("div", { cls: "cos-fl-text" });
      txt.setText(body.length > 500 ? body.slice(0, 500) + " \u2026" : body);
      const meta = card.createEl("div", { cls: "cos-fl-meta" });
      const rel = (0, import_obsidian.moment)(f.stat.mtime);
      meta.createEl("span", { text: rel.format("MM-DD HH:mm") });
      const rest = f.path.slice((0, import_obsidian.normalizePath)(p.settings.captureFolder).length + 1);
      const sub = rest.includes("/") ? rest.split("/")[0] : "";
      if (sub) meta.createEl("span", { cls: "cos-fl-tag", text: sub });
      card.addEventListener("click", () => new EditMemoModal(this.app, p, f).open());
    }
    if (files.length > this.limit) {
      const more = stream.createEl("button", { cls: "cos-fl-more", text: `\u52A0\u8F7D\u66F4\u591A\uFF08\u8FD8\u6709 ${files.length - this.limit} \u6761\uFF09` });
      more.addEventListener("click", () => {
        this.limit += p.settings.flomoPageSize || 30;
        this.render();
      });
    }
  }
};
var DashboardView = class extends import_obsidian.ItemView {
  constructor(leaf, plugin) {
    super(leaf);
    this.plugin = plugin;
  }
  getViewType() {
    return VIEW_TYPE;
  }
  getDisplayText() {
    return "Content OS";
  }
  getIcon() {
    return "sparkles";
  }
  async onOpen() {
    this.scheduleRender = this.scheduleRender.bind(this);
    ["create", "modify", "delete", "rename"].forEach((ev) => this.registerEvent(this.app.vault.on(ev, this.scheduleRender)));
    await this.render();
  }
  scheduleRender() {
    window.clearTimeout(this._t);
    this._t = window.setTimeout(() => this.render(), 1500);
  }
  async onClose() {
    window.clearTimeout(this._t);
  }
  section(parent, title) {
    const s = parent.createEl("div", { cls: "cos-section" });
    s.createEl("div", { cls: "cos-section-title", text: title });
    return s;
  }
  /* v2.2 懒加载折叠区块：collapsed 状态下完全不执行扫描，移动端默认折叠 */
  sectionLazy(parent, title, build, startOpen) {
    const s = parent.createEl("div", { cls: "cos-section" });
    const head = s.createEl("div", { cls: "cos-section-title cos-toggle" });
    const bodyEl = s.createEl("div");
    let built = false;
    let open = false;
    const setOpen = async (v) => {
      open = v;
      head.setText((v ? "\u25BE " : "\u25B8 ") + title);
      bodyEl.toggle(v);
      if (v && !built) {
        built = true;
        await build(bodyEl);
      }
    };
    head.addEventListener("click", () => setOpen(!open));
    setOpen(!!startOpen);
    return s;
  }
  metric(parent, label, value, warn) {
    const card = parent.createEl("div", { cls: "cos-metric" + (warn ? " cos-metric-warn" : "") });
    card.createEl("div", { cls: "cos-metric-value", text: String(value) });
    card.createEl("div", { cls: "cos-metric-label", text: (warn ? "\u26A0\uFE0F " : "") + label });
  }
  openBtn(row, file) {
    const a = row.createEl("a", { text: file.basename });
    a.addEventListener("click", () => this.plugin.app.workspace.getLeaf(false).openFile(file));
    return a;
  }
  async render() {
    const el = this.contentEl;
    el.empty();
    el.addClass("cos-dash");
    const p = this.plugin;
    const drafts = p.filesIn(p.settings.draftsFolder, true).filter((f) => f.extension === "md");
    const hero = el.createEl("div", { cls: "cos-hero" });
    hero.createEl("div", { cls: "cos-hero-brand", text: "CONTENT OS" });
    const hour = (/* @__PURE__ */ new Date()).getHours();
    const hi = hour < 5 ? "\u591C\u6DF1\u4E86" : hour < 12 ? "\u65E9\u4E0A\u597D" : hour < 14 ? "\u4E2D\u5348\u597D" : hour < 18 ? "\u4E0B\u5348\u597D" : "\u665A\u4E0A\u597D";
    const uname = (p.settings.chatUserName || "").trim();
    hero.createEl("div", { cls: "cos-hero-hi", text: `${hi}${uname ? "\uFF0C" + uname : ""}` });
    const week = ["\u65E5", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D"][(/* @__PURE__ */ new Date()).getDay()];
    hero.createEl("div", { cls: "cos-hero-date", text: `${todayStr()} \xB7 \u661F\u671F${week} \xB7 \u2B50 \u5317\u6781\u661F\uFF1A\u6301\u7EED 10\u4E07+` });
    const kpis = el.createEl("div", { cls: "cos-kpis" });
    const stat = (label, value) => {
      const c = kpis.createEl("div", { cls: "cos-kpi" });
      c.createEl("div", { cls: "cos-kpi-num", text: String(value) });
      c.createEl("div", { cls: "cos-kpi-label", text: label });
    };
    const fmsAll = drafts.map((f) => p.fm(f));
    const pendN = fmsAll.filter((m) => m.status === "\u5F85\u53D1").length;
    const pubs = fmsAll.filter((m) => m.status === "\u5DF2\u53D1");
    const reads = pubs.reduce((a, m) => a + (Number(m.stats?.reads) || 0), 0);
    let pipesN = 0;
    try {
      pipesN = p.pipelineCards().filter((x) => x.fm.status === "active").length;
    } catch (e) {
    }
    let topicsN = 0;
    try {
      topicsN = (await p.uncheckedItems(p.settings.topicsFile) || []).length;
    } catch (e) {
    }
    stat("\u{1F4EC} \u5F85\u53D1\u6C60", pendN);
    stat("\u{1F4F0} \u5DF2\u53D1", pubs.length);
    stat("\u{1F440} \u603B\u9605\u8BFB", reads >= 1e4 ? (reads / 1e4).toFixed(1) + "w" : reads);
    stat("\u{1F4A1} \u9009\u9898\u5F39\u836F", topicsN);
    stat("\u{1F3ED} \u4EA7\u7EBF\u5728\u8DD1", pipesN);
    const actions = el.createEl("div", { cls: "cos-actions" });
    const mk = (label, fn) => actions.createEl("button", { text: label, cls: "cos-action" }).addEventListener("click", fn);
    mk("\u{1F4E5} \u6355\u83B7", () => p.quickCapture());
    mk("\u{1F4D3} \u4ECA\u65E5\u65E5\u8BB0", () => p.openTodayDiary());
    mk("\u270D\uFE0F \u65B0\u6587\u7A3F", () => new NewDraftModal(p.app, p).open());
    mk("\u{1F4A1} \u65B0\u9009\u9898", () => new TopicModal(p.app, p).open());
    mk("\u{1F5C2} \u6E05\u6536\u4EF6\u7BB1", () => new InboxReviewModal(p.app, p).open());
    mk("\u2705 \u5199\u4F5C\u81EA\u68C0", () => p.activateChecklist());
    mk("\u{1F4C6} \u5185\u5BB9\u65E5\u5386", () => p.activateCalendar());
    mk("\u{1F4AC} AI \u5BF9\u8BDD", () => p.activateChat());
    mk("\u{1F9E0} LLM Wiki", () => p.activateWiki());
    mk("\u{1F3ED} \u6D41\u6C34\u7EBF", () => p.activatePipeline());
    mk("\u{1F9FE} \u4EFB\u52A1\u4E66", () => new TaskBriefModal(p.app, p).open());
    mk("\u{1F4CA} \u6279\u91CF\u5F55\u6570\u636E", () => new BatchStatsModal(p.app, p).open());
    mk("\u{1F4C9} \u5DEE\u8DDD\u62A5\u544A", () => p.buildGapReport());
    mk("\u{1F52C} \u89E3\u5256\u7206\u6B3E", () => p.dissectHotArticles());
    mk("\u{1F3A8} \u56FE\u6587\u5361", () => {
      const f = p.app.workspace.getActiveFile();
      if (f) p.generateXhsCards(f);
      else new import_obsidian.Notice("\u5148\u6253\u5F00\u4E00\u7BC7\u7A3F");
    });
    mk("\u{1F3AC} \u89C6\u9891\u53F7\u811A\u672C", () => {
      const f = p.app.workspace.getActiveFile();
      if (f) p.generateVideoScript(f);
      else new import_obsidian.Notice("\u5148\u6253\u5F00\u4E00\u7BC7\u7A3F");
    });
    mk("\u{1F50E} \u4E8B\u5B9E\u6838\u67E5", () => {
      const f = p.app.workspace.getActiveFile();
      if (f) p.factCheckDraft(f, null, false);
      else new import_obsidian.Notice("\u5148\u6253\u5F00\u4E00\u7BC7\u7A3F");
    });
    mk("\u{1F3A8} \u6392\u7248\u8BBE\u8BA1", () => {
      const f = p.app.workspace.getActiveFile();
      if (f) p.designLayout(f, false);
      else new import_obsidian.Notice("\u5148\u6253\u5F00\u4E00\u7BC7\u7A3F");
    });
    await this.renderHealth(el, drafts);
    await this.renderSchedule(el, drafts);
    await this.renderReview(el, drafts);
    await this.renderPipeline(el, drafts);
    await this.renderSeries(el, drafts);
    this.sectionLazy(el, "\u9009\u9898\u96F7\u8FBE", (c) => this.renderRadar(c, drafts), !import_obsidian.Platform.isMobile);
    this.sectionLazy(el, "\u8D44\u4EA7\u4EA7\u51FA\u699C\uFF08\u8840\u7EDF\u8FFD\u8E2A\uFF09", (c) => this.renderLineage(c, drafts), !import_obsidian.Platform.isMobile);
    await this.renderIngest(el);
  }
  /* ---- 管线健康 ---- */
  async renderHealth(el, drafts) {
    const p = this.plugin;
    const s = p.settings;
    const sec = this.section(el, "\u7BA1\u7EBF\u5065\u5EB7");
    const grid = sec.createEl("div", { cls: "cos-metric-grid" });
    const today = (0, import_obsidian.moment)();
    let lastPub = null, monthPub = 0;
    for (const f of drafts) {
      const fm = p.fm(f);
      const d = fm.published || (fm.status === "\u5DF2\u53D1" ? (0, import_obsidian.moment)(f.stat.mtime).format("YYYY-MM-DD") : null);
      if (d) {
        if (!lastPub || d > lastPub) lastPub = d;
        if (String(d).startsWith(today.format("YYYY-MM"))) monthPub++;
      }
    }
    const gap = lastPub ? daysBetween(lastPub, today) : null;
    this.metric(grid, "\u8DDD\u4E0A\u6B21\u53D1\u5E03", lastPub ? `${gap} \u5929\uFF08${lastPub}\uFF09` : "\u65E0\u8BB0\u5F55", gap === null || gap > s.publishGapWarnDays);
    this.metric(grid, "\u672C\u6708\u5DF2\u53D1", `${monthPub} \u7BC7`, false);
    const cycleDays = drafts.map((f) => p.fm(f)).filter((fm) => fm.created && fm.published).map((fm) => daysBetween(fm.created, fm.published));
    if (cycleDays.length) {
      const avg = Math.round(cycleDays.reduce((a, b) => a + b, 0) / cycleDays.length);
      this.metric(grid, "\u8349\u7A3F\u2192\u53D1\u5E03\u5E73\u5747", `${avg} \u5929\uFF08${cycleDays.length} \u7BC7\u6837\u672C\uFF09`, false);
    }
    let streak = 0;
    let cur = (0, import_obsidian.moment)();
    if (!p.exists(`${s.diaryFolder}/${cur.format("YYYY-MM-DD")}.md`)) cur = cur.subtract(1, "day");
    while (p.exists(`${s.diaryFolder}/${cur.format("YYYY-MM-DD")}.md`)) {
      streak++;
      cur = cur.subtract(1, "day");
    }
    this.metric(grid, "\u65E5\u8BB0\u8FDE\u7EED", `${streak} \u5929`, streak === 0);
    const weekAgo = (0, import_obsidian.moment)().subtract(7, "days");
    const caps = p.filesIn(s.captureFolder, false).filter((f) => {
      const m = f.name.match(/^(\d{4}-\d{2}-\d{2})/);
      return m && (0, import_obsidian.moment)(m[1]).isSameOrAfter(weekAgo, "day");
    }).length;
    this.metric(grid, "\u8FD17\u5929\u6355\u83B7", `${caps} \u6761`, caps === 0);
    for (const [label, folder] of [["memory/daily", s.memoryDailyFolder], ["\u65E5\u8BB0\u6D41", s.diaryFolder]]) {
      const files = p.filesIn(folder, true);
      if (!files.length) {
        this.metric(grid, `${label} \u5FC3\u8DF3`, "\u76EE\u5F55\u4E3A\u7A7A", true);
        continue;
      }
      const last = Math.max(...files.map((f) => f.stat.mtime));
      const d = daysBetween((0, import_obsidian.moment)(last), (0, import_obsidian.moment)());
      this.metric(grid, `${label} \u5FC3\u8DF3`, `${d} \u5929\u524D`, d > s.heartbeatWarnDays);
    }
    const conflicts = this.app.vault.getFiles().filter((f) => f.name.includes("sync-conflict")).length;
    if (conflicts) this.metric(grid, "Syncthing \u51B2\u7A81\u6587\u4EF6", `${conflicts} \u4E2A`, true);
    const sensitive = this.app.vault.getRoot().children.filter((c) => c instanceof import_obsidian.TFile && /(密钥|secret|token|api\s?-?key)/i.test(c.name));
    if (sensitive.length) this.metric(grid, "\u6839\u76EE\u5F55\u654F\u611F\u6587\u4EF6", sensitive.map((f) => f.name).join("\u3001"), true);
  }
  /* ---- v1.0 发布计划 ---- */
  async renderSchedule(el, drafts) {
    const p = this.plugin;
    const items = drafts.map((f) => ({ f, fm: p.fm(f) })).filter((x) => x.fm.scheduledDate && x.fm.status !== "\u5DF2\u53D1").sort((a, b) => String(a.fm.scheduledDate).localeCompare(String(b.fm.scheduledDate)));
    const sec = this.section(el, "\u53D1\u5E03\u8BA1\u5212");
    if (!items.length) {
      sec.createEl("div", { cls: "cos-dim cos-line", text: "\u6682\u65E0\u6392\u671F \u2014 \u5728\u6587\u7A3F\u4E0A\u7528\u300C\u8BBE\u7F6E\u6392\u671F\u300D\u6216\u7BA1\u9053\u91CC\u7684 \u{1F4C5}" });
      return;
    }
    const today = todayStr();
    for (const { f, fm } of items.slice(0, 10)) {
      const overdue = String(fm.scheduledDate) < today;
      const row = sec.createEl("div", { cls: "cos-item" + (overdue ? " cos-warn" : "") });
      row.createEl("span", { cls: "cos-date", text: (overdue ? "\u26A0\uFE0F " : "") + fm.scheduledDate });
      this.openBtn(row, f);
    }
  }
  /* ---- v1.0 待复盘 ---- */
  async renderReview(el, drafts) {
    const p = this.plugin;
    const due = drafts.map((f) => ({ f, fm: p.fm(f) })).filter((x) => x.fm.status === "\u5DF2\u53D1" && x.fm.published && !x.fm.reviewed && daysBetween(x.fm.published, (0, import_obsidian.moment)()) >= p.settings.reviewAfterDays);
    if (!due.length) return;
    const sec = this.section(el, `\u5F85\u590D\u76D8\uFF08\u53D1\u5E03\u6EE1 ${p.settings.reviewAfterDays} \u5929\uFF09`);
    for (const { f, fm } of due.slice(0, 6)) {
      const row = sec.createEl("div", { cls: "cos-item" });
      this.openBtn(row, f);
      const tools = row.createEl("span", { cls: "cos-tools" });
      const st = tools.createEl("span", { cls: "cos-next", text: "\u{1F4CA}", attr: { title: "\u5F55\u53D1\u5E03\u6570\u636E" } });
      st.addEventListener("click", (e) => {
        e.stopPropagation();
        new StatsModal(p.app, p, f).open();
      });
      const rv = tools.createEl("span", { cls: "cos-next", text: "\u{1F4DD}", attr: { title: "\u751F\u6210\u590D\u76D8\u5361" } });
      rv.addEventListener("click", async (e) => {
        e.stopPropagation();
        await p.appendReviewCard(f);
        this.scheduleRender();
      });
    }
  }
  /* ---- 内容管道 ---- */
  async renderPipeline(el, drafts) {
    const p = this.plugin;
    const sec = this.section(el, "\u5185\u5BB9\u7BA1\u9053\uFF08\u516C\u4F17\u53F7\u6587\u7A3F\uFF09");
    const statuses = [...p.settings.draftStatuses, "\u6401\u7F6E"];
    const groups = {};
    statuses.forEach((st) => groups[st] = []);
    for (const f of drafts) {
      const st = statuses.includes(p.fm(f).status) ? p.fm(f).status : p.settings.draftStatuses[0];
      groups[st].push(f);
    }
    for (const st of statuses) {
      const g = groups[st];
      if (st === "\u6401\u7F6E" && !g.length) continue;
      const gEl = sec.createEl("div", { cls: "cos-group" });
      const gt = gEl.createEl("div", { cls: "cos-group-title" });
      gt.createEl("span", { cls: "cos-pill", attr: { "data-st": st }, text: st });
      gt.createEl("span", { cls: "cos-count", text: String(g.length) });
      g.sort((a, b) => b.stat.mtime - a.stat.mtime).slice(0, 8).forEach((f) => {
        const fm = p.fm(f);
        const row = gEl.createEl("div", { cls: "cos-item" });
        this.openBtn(row, f);
        if (st === "\u5DF2\u53D1" && fm.stats?.reads !== void 0) row.createEl("span", { cls: "cos-dim", text: `\u{1F441} ${fm.stats.reads}` });
        const tools = row.createEl("span", { cls: "cos-tools" });
        const tool = (icon, title, fn) => {
          const t = tools.createEl("span", { cls: "cos-next", text: icon, attr: { title } });
          t.addEventListener("click", async (e) => {
            e.stopPropagation();
            await fn();
          });
        };
        tool("\u2192", "\u6D41\u8F6C\u5230\u4E0B\u4E00\u72B6\u6001", async () => {
          await p.cycleDraftStatus(f);
          this.scheduleRender();
        });
        if (st === "\u5F85\u53D1") tool("\u{1F4C5}", "\u8BBE\u7F6E\u6392\u671F", () => p.setSchedule(f));
        if (st === "\u5DF2\u53D1") tool("\u{1F4CA}", "\u5F55\u53D1\u5E03\u6570\u636E", () => new StatsModal(p.app, p, f).open());
        if (st === "\u5F85\u53D1" || st === "\u5DF2\u53D1") tool("\u{1F4EE}", "\u63A8\u9001\u516C\u4F17\u53F7\u8349\u7A3F\u7BB1", () => p.pushWechatDraft(f));
        if (st === "\u5F85\u53D1" || st === "\u5DF2\u53D1") tool("\u{1F3A8}", "\u751F\u6210\u5C0F\u7EA2\u4E66\u56FE\u6587\u5361", () => p.generateXhsCards(f));
        if (st === "\u5F85\u53D1" || st === "\u5DF2\u53D1") tool("\u{1F680}", "\u53D1\u5C0F\u7EA2\u4E66\uFF08\u81EA\u52A8\u586B\u5355\uFF09", () => p.publishXhsSemiAuto(f));
        if (st === "\u5F85\u53D1" || st === "\u5DF2\u53D1") tool("\u{1F7E2}", "\u63A8\u516C\u4F17\u53F7\u56FE\u6587\uFF08\u5C0F\u7EFF\u4E66\uFF09", () => p.pushWechatNewspic(f));
        if (st === "\u5F85\u53D1" || st === "\u5DF2\u53D1") tool("\u{1F3AC}", "\u751F\u6210\u89C6\u9891\u53F7\u811A\u672C", () => p.generateVideoScript(f));
        tool("\u{1F50E}", "\u4E8B\u5B9E\u6838\u67E5+\u5408\u89C4", () => p.factCheckDraft(f, null, false));
        tool("\u{1F3A8}", "\u6392\u7248\u8BBE\u8BA1", () => p.designLayout(f, false));
        tool("\u{1F5EF}", "\u6760\u7CBE\u9884\u5224", () => p.predictTrolls(f, null, false));
        tool("\u{1F4C8}", "\u6570\u636E\u56FE\u8868", () => p.visualizeData(f, false));
        tool("\u{1F5BC}", "\u751F\u6210\u9996\u56FE", () => p.makeCoverHook(f, false));
        tool("\u{1FA84}", "\u683C\u5F0F\u5DE5\u5382", () => p.deriveMenu(f));
      });
    }
  }
  /* ---- v1.0 系列面板 ---- */
  async renderSeries(el, drafts) {
    const p = this.plugin;
    const map = {};
    for (const f of drafts) {
      const fm = p.fm(f);
      const key = fm.series || null;
      if (!key) continue;
      if (!map[key]) map[key] = { total: 0, published: 0, lastPub: null, reads: 0 };
      const m = map[key];
      m.total++;
      if (fm.status === "\u5DF2\u53D1") {
        m.published++;
        if (fm.published && (!m.lastPub || fm.published > m.lastPub)) m.lastPub = fm.published;
        m.reads += fm.stats?.reads || 0;
      }
    }
    const keys = Object.keys(map);
    const sec = this.section(el, "\u7CFB\u5217\u9762\u677F");
    if (!keys.length) {
      sec.createEl("div", { cls: "cos-dim cos-line", text: "\u6682\u65E0\u7CFB\u5217 \u2014 \u65B0\u5EFA\u6587\u7A3F\u65F6\u586B\u300C\u7CFB\u5217\u300D\uFF0C\u8BFB\u8005\u7559\u5B58\u7684\u6700\u5F3A\u5DE5\u5177" });
      return;
    }
    for (const k of keys.sort((a, b) => map[b].total - map[a].total)) {
      const m = map[k];
      const gapDays = m.lastPub ? daysBetween(m.lastPub, (0, import_obsidian.moment)()) : null;
      const warn = gapDays !== null && gapDays > p.settings.seriesGapWarnDays;
      const row = sec.createEl("div", { cls: "cos-line" + (warn ? " cos-warn" : "") });
      row.createEl("b", { text: (warn ? "\u26A0\uFE0F " : "") + k });
      row.createEl("span", {
        cls: "cos-dim",
        text: `\u3000${m.published}/${m.total} \u5DF2\u53D1` + (m.lastPub ? ` \xB7 \u8DDD\u4E0A\u7BC7 ${gapDays} \u5929` : " \xB7 \u672A\u53D1\u8FC7") + (m.reads ? ` \xB7 \u7D2F\u8BA1\u9605\u8BFB ${m.reads}` : "")
      });
      const bar = sec.createEl("div", { cls: "cos-bar" });
      bar.createEl("div", { cls: "cos-bar-fill" + (warn ? " cos-bar-warn" : ""), attr: { style: `width:${m.total ? Math.round(m.published / m.total * 100) : 0}%` } });
    }
  }
  /* ---- 选题雷达（v1.0 数据反哺） ---- */
  async renderRadar(sec, drafts) {
    const p = this.plugin;
    const topics = await p.readTopics();
    if (!topics.length) {
      sec.createEl("div", { cls: "cos-dim cos-line", text: "\u9009\u9898\u5E93\u4E3A\u7A7A" });
      return;
    }
    const ctx = p.buildScoreCtx(drafts);
    const scored = topics.map((t) => ({ ...t, ...p.scoreTopic(t, ctx) }));
    scored.sort((a, b) => b.score - a.score);
    scored.slice(0, 10).forEach((t) => {
      const row = sec.createEl("div", { cls: "cos-item" });
      const wrap = row.createEl("span", { cls: "cos-radar-main" });
      const a = wrap.createEl("a", { text: `${t.score}\u5206 \xB7 ${t.title}`, attr: { title: t.detail } });
      a.addEventListener("click", () => p.openPath(p.settings.topicsFile));
      wrap.createEl("span", { cls: "cos-dim cos-radar-detail", text: t.detail });
      const pk = row.createEl("span", { cls: "cos-next", text: "\u{1F4E6}", attr: { title: "\u751F\u6210\u7D20\u6750\u5305" } });
      pk.addEventListener("click", async (e) => {
        e.stopPropagation();
        await p.buildMaterialPack(t);
      });
      if (p.settings.aiApiKey) {
        const ai = row.createEl("span", { cls: "cos-next", text: "\u{1F916}", attr: { title: "AI \u9009\u9898\u8BC4\u4F30\uFF08\u7528\u4F60\u7684\u5E93\u505A\u4E0A\u4E0B\u6587\uFF09" } });
        ai.addEventListener("click", async (e) => {
          e.stopPropagation();
          await p.aiEvaluateTopic(t, drafts);
        });
      }
      const pl = row.createEl("span", { cls: "cos-next", text: "\u25B6\uFE0F", attr: { title: "\u5165\u6D41\u6C34\u7EBF\uFF08\u5BA1\u9898\u2192\u53D1\u5E03\u5168\u6D41\u7A0B\uFF09" } });
      pl.addEventListener("click", (e) => {
        e.stopPropagation();
        new NewPipelineModal(p.app, p, t.title, t.keywords).open();
      });
    });
    sec.createEl("div", { cls: "cos-dim cos-line", text: "\u8BC4\u5206 = \u7D20\u6750 + wiki\xD72 + \u7CFB\u5217 + \u8BFB\u8005\u9A8C\u8BC1(+5) + \u65F6\u6548(\u70ED\u70B9+6/\u8282\u65E5+4) \u2212 \u5DF2\u5199\u8FC7(-10)\uFF1B\u65E0\u6807\u7B7E\u9009\u9898\u81EA\u52A8\u5207\u8BCD" });
  }
  /* ---- 资产产出榜（v1.0 按阅读加权） ---- */
  async renderLineage(sec, drafts) {
    const p = this.plugin;
    const count = {};
    let tracked = 0;
    for (const f of drafts) {
      const fm = p.fm(f);
      if (Array.isArray(fm.sources) && fm.sources.length) {
        tracked++;
        const weight = fm.stats?.reads ? fm.stats.reads : 0;
        fm.sources.forEach((x) => {
          if (!count[x]) count[x] = { n: 0, reads: 0 };
          count[x].n++;
          count[x].reads += weight;
        });
      }
    }
    if (!tracked) {
      sec.createEl("div", { cls: "cos-dim cos-line", text: "\u5C1A\u65E0\u8840\u7EDF\u6570\u636E \u2014 \u5728\u6587\u7A3F\u91CC\u7528\u300C\u767B\u8BB0\u8840\u7EDF\u300D\u547D\u4EE4\u6536\u96C6\u5176\u5F15\u7528\u7684\u77E5\u8BC6\u8D44\u4EA7" });
      return;
    }
    Object.entries(count).sort((a, b) => b[1].reads - a[1].reads || b[1].n - a[1].n).slice(0, 6).forEach(([src, v]) => {
      sec.createEl("div", { cls: "cos-item" }).createEl("span", { text: `${v.n} \u7BC7${v.reads ? ` \xB7 ${v.reads} \u9605\u8BFB` : ""} \u2190 ${src.split("/").pop()}` });
    });
    sec.createEl("div", { cls: "cos-dim cos-line", text: `\u5DF2\u767B\u8BB0 ${tracked} \u7BC7\u6587\u7A3F\u7684\u6765\u6E90\uFF1B\u5F55\u5165\u53D1\u5E03\u6570\u636E\u540E\u6309\u9605\u8BFB\u91CF\u52A0\u6743` });
  }
  /* ---- ingest 队列 ---- */
  async renderIngest(el) {
    const p = this.plugin;
    const sec = this.section(el, "AI wiki \xB7 ingest \u961F\u5217");
    const queue = await p.uncheckedItems(p.settings.ingestQueueFile);
    if (queue === null || !queue.length) {
      sec.createEl("div", { cls: "cos-dim cos-line", text: "\u961F\u5217\u4E3A\u7A7A \u2014 \u7528\u300C\u52A0\u5165 ingest \u961F\u5217\u300D\u547D\u4EE4\u6295\u5582" });
      return;
    }
    sec.createEl("div", { cls: "cos-dim cos-line", text: `\u5F85\u7F16\u8BD1 ${queue.length} \u6761` });
    queue.slice(0, 8).forEach((t) => {
      const a = sec.createEl("div", { cls: "cos-item" }).createEl("a", { text: t.replace(/\[\[|\]\]/g, "") });
      a.addEventListener("click", () => p.openPath(p.settings.ingestQueueFile));
    });
    const btn = sec.createEl("button", { cls: "cos-action cos-full", text: "\u{1F9E0} \u751F\u6210\u7F16\u8BD1\u4EFB\u52A1\u4E66\uFF08\u590D\u5236\u7ED9 Claude\uFF09" });
    btn.addEventListener("click", () => p.buildIngestBrief());
  }
};
var ContentOSPlugin = class extends import_obsidian.Plugin {
  async onload() {
    await this.loadSettings();
    await this.refreshLicense();
    this.registerView(VIEW_TYPE, (leaf) => new DashboardView(leaf, this));
    this.registerView(VIEW_CHECK, (leaf) => new ChecklistView(leaf, this));
    this.registerView(VIEW_CAL, (leaf) => new CalendarView(leaf, this));
    this.registerView(VIEW_CHAT, (leaf) => new ChatView(leaf, this));
    this.registerView(VIEW_WIKI, (leaf) => new WikiView(leaf, this));
    this.registerView(VIEW_PIPE, (leaf) => new PipelineView(leaf, this));
    this.registerView(VIEW_FLOMO, (leaf) => new FlomoView(leaf, this));
    this.addRibbonIcon("sparkles", "Content OS \u4EEA\u8868\u76D8", () => this.activateDashboard());
    this.addRibbonIcon("plus-circle", "Content OS \u5FEB\u901F\u6355\u83B7", () => this.quickCapture());
    this.addRibbonIcon("feather", "Content OS \u7075\u611F\u6D41", () => this.activateFlomo());
    if (!import_obsidian.Platform.isMobile) this.addRibbonIcon("moon", "\u{1F319} \u65E0\u4EBA\u503C\u5B88\uFF1A\u73B0\u5728\u8DD1\u4E00\u7BC7\uFF08\u9009\u9898\u2192\u5199\u2192\u5BA1\u2192\u6539\u2192\u63A8\u8349\u7A3F\u7BB1\uFF09", () => this.runUnattended(true));
    if (!import_obsidian.Platform.isMobile) this.addRibbonIcon("bar-chart-3", "\u{1F4CA} \u751F\u621010\u4E07+\u5DEE\u8DDD\u62A5\u544A", () => this.buildGapReport());
    this.addRibbonIcon("timer", "\u{1F345} \u756A\u8304\u5199\u4F5C\u949F", () => this.pomoStartOrToggle());
    if (!import_obsidian.Platform.isMobile) this.addRibbonIcon("layout-dashboard", "\u229E \u5E03\u7F6E Content OS \u5DE5\u4F5C\u53F0", () => this.applyDefaultLayout());
    this.addCommand({ id: "open-dashboard", name: "\u6253\u5F00\u4EEA\u8868\u76D8", callback: () => this.activateDashboard() });
    this.addCommand({ id: "open-checklist", name: "\u6253\u5F00\u5199\u4F5C\u81EA\u68C0\u9762\u677F", callback: () => this.activateChecklist() });
    this.addCommand({ id: "quick-capture", name: "\u5FEB\u901F\u6355\u83B7\uFF08flomo \u5F0F\uFF09", callback: () => this.quickCapture() });
    this.addCommand({ id: "open-flomo", name: "\u6253\u5F00\u7075\u611F\u6D41\uFF08\u6355\u83B7\u7BB1\u65F6\u95F4\u6D41\uFF09", callback: () => this.activateFlomo() });
    this.addCommand({ id: "open-today-diary", name: "\u6253\u5F00/\u521B\u5EFA\u4ECA\u65E5\u65E5\u8BB0", callback: () => this.openTodayDiary() });
    this.addCommand({ id: "new-draft", name: "\u65B0\u5EFA\u516C\u4F17\u53F7\u6587\u7A3F", callback: () => new NewDraftModal(this.app, this).open() });
    this.addCommand({ id: "new-topic", name: "\u65B0\u5EFA\u9009\u9898", callback: () => new TopicModal(this.app, this).open() });
    this.addCommand({ id: "new-para-note", name: "\u65B0\u5EFA PARA \u7B14\u8BB0", callback: () => new ParaModal(this.app, this).open() });
    this.addCommand({ id: "inbox-review", name: "\u6536\u4EF6\u7BB1\u8BC4\u5BA1\uFF08\u6E05\u7A7A\u6355\u83B7\u7BB1\uFF09", callback: () => new InboxReviewModal(this.app, this).open() });
    this.addCommand({ id: "build-ingest-brief", name: "\u751F\u6210\u7F16\u8BD1\u4EFB\u52A1\u4E66\uFF08ingest\u2192Claude\uFF09", callback: () => this.buildIngestBrief() });
    this.addCommand({ id: "add-to-wiki", name: "\u{1F4E5} \u52A0\u5165 wiki \u7F16\u8BD1\u961F\u5217\uFF08\u5F53\u524D\u7B14\u8BB0\uFF0C\u4ECA\u665A\u81EA\u52A8\u7F16\u8BD1\uFF09", checkCallback: (checking) => {
      const f = this.app.workspace.getActiveFile();
      if (!f || f.extension !== "md") return false;
      if (!checking) this.addNoteToWikiQueue(f);
      return true;
    } });
    this.registerEvent(this.app.workspace.on("file-menu", (menu, file) => {
      if (file instanceof import_obsidian.TFile && file.extension === "md") {
        menu.addItem((item) => item.setTitle("\u{1F4E5} \u52A0\u5165 wiki \u7F16\u8BD1\u961F\u5217").setIcon("brain").onClick(() => this.addNoteToWikiQueue(file)));
      }
    }));
    this.addCommand({ id: "export-csv", name: "\u5BFC\u51FA\u5185\u5BB9\u6570\u636E CSV", callback: () => this.exportCsv() });
    this.addCommand({ id: "run-unattended", name: "\u{1F319} \u65E0\u4EBA\u503C\u5B88\uFF1A\u73B0\u5728\u8DD1\u4E00\u7BC7\uFF08\u81EA\u52A8\u9009\u9898\u2192\u5199\u2192\u5BA1\u2192\u6539\u2192\u63A8\u8349\u7A3F\u7BB1\uFF09", callback: () => this.runUnattended(true) });
    this.addCommand({ id: "run-daily-batch", name: "\u{1F3ED} \u6279\u91CF\u6D77\u9009\uFF1A\u73B0\u5728\u8DD1\u4E00\u6279\uFF08\u591A\u5199\u2192\u72E0\u8BC4\u2192\u53EA\u53D1\u7CBE\u54C1\uFF09", callback: () => this.runDailyBatch(true) });
    this.addCommand({ id: "gap-report", name: "\u{1F4CA} \u751F\u621010\u4E07+\u5DEE\u8DDD\u62A5\u544A\uFF08\u5206\u6790\u771F\u5B9E\u6570\u636E\u2192\u63D0\u70BC\u7206\u6B3E\u57FA\u56E0\uFF09", callback: () => this.buildGapReport() });
    this.addCommand({ id: "dissect-hot", name: "\u{1F52C} \u89E3\u5256\u7206\u6B3E\u5E93\uFF08\u884C\u4E1A10\u4E07+\u5168\u6587\u2192\u5916\u90E8\u7206\u6B3E\u57FA\u56E0\uFF09", callback: () => this.dissectHotArticles() });
    this.addCommand({ id: "batch-stats", name: "\u{1F4CA} \u6279\u91CF\u5F55\u53D1\u5E03\u6570\u636E\uFF08\u4E00\u5C4F\u5F55\u5165\u6240\u6709\u5DF2\u53D1\u6587\u7AE0\uFF09", callback: () => new BatchStatsModal(this.app, this).open() });
    this.registerInterval(window.setInterval(() => this.dailyAutoTick(), 10 * 60 * 1e3));
    window.setTimeout(() => this.dailyAutoTick(), 90 * 1e3);
    this.addCommand({ id: "toggle-writing-timer", name: "\u5F00\u59CB/\u7ED3\u675F\u5199\u4F5C\u8BA1\u65F6", callback: () => this.toggleTimer() });
    this._pomoStatus = this.addStatusBarItem();
    this._pomoStatus.addClass("cos-pomo-status");
    this._pomoStatus.style.cursor = "pointer";
    this._pomoStatus.addEventListener("click", () => this.pomoClick());
    this.pomoRender();
    this.registerInterval(window.setInterval(() => this.pomoTick(), 1e3));
    this.addCommand({ id: "pomodoro-start", name: "\u{1F345} \u756A\u8304\u5199\u4F5C\u949F\uFF1A\u5F00\u59CB / \u6682\u505C\u7EE7\u7EED", callback: () => this.pomoStartOrToggle() });
    this.addCommand({ id: "pomodoro-stop", name: "\u{1F345} \u756A\u8304\u5199\u4F5C\u949F\uFF1A\u505C\u6B62", callback: () => this.pomoStop() });
    this.addCommand({ id: "open-calendar", name: "\u6253\u5F00\u5185\u5BB9\u65E5\u5386", callback: () => this.activateCalendar() });
    this.addCommand({ id: "apply-layout", name: "\u229E \u5E03\u7F6E Content OS \u5DE5\u4F5C\u53F0\uFF08\u5DE6\u65E5\u5386\xB7\u4E2D\u4E3B\u754C\u9762\xB7\u53F3AI\uFF09", callback: () => this.applyDefaultLayout() });
    this.addCommand({ id: "apply-layout-flomo", name: "\u229E \u5E03\u7F6E\u5DE5\u4F5C\u53F0\uFF08\u4E2D\u95F4\u653E\u7075\u611F\u6D41\uFF09", callback: () => this.applyDefaultLayout("flomo") });
    this.addCommand({ id: "restart-http", name: "\u{1F50C} \u91CD\u542F\u672C\u5730 HTTP \u5165\u53E3", callback: () => this.startHttpServer() });
    this.addCommand({ id: "period-week", name: "\u{1F5D3} \u751F\u6210\u6BCF\u5468\u5185\u5BB9\u590D\u76D8", callback: () => this.buildPeriodReview("week") });
    this.addCommand({ id: "period-month", name: "\u{1F4C6} \u751F\u6210\u6708\u5EA6\u5185\u5BB9\u590D\u76D8", callback: () => this.buildPeriodReview("month") });
    this.addCommand({ id: "holiday-topics", name: "\u{1F3AF} \u6CE8\u5165\u4E34\u8FD1\u8282\u65E5\u9009\u9898\u7A97\u53E3", callback: () => this.seedHolidayTopics(false) });
    this.addCommand({ id: "periodic-daily", name: "\u5468\u671F\u7B14\u8BB0\uFF1A\u672C\u65E5\uFF08LifeOS \u683C\u5F0F\uFF09", callback: () => this.openPeriodic("daily") });
    this.addCommand({ id: "periodic-weekly", name: "\u5468\u671F\u7B14\u8BB0\uFF1A\u672C\u5468", callback: () => this.openPeriodic("weekly") });
    this.addCommand({ id: "periodic-monthly", name: "\u5468\u671F\u7B14\u8BB0\uFF1A\u672C\u6708", callback: () => this.openPeriodic("monthly") });
    this.addCommand({ id: "periodic-quarterly", name: "\u5468\u671F\u7B14\u8BB0\uFF1A\u672C\u5B63", callback: () => this.openPeriodic("quarterly") });
    this.addCommand({ id: "periodic-yearly", name: "\u5468\u671F\u7B14\u8BB0\uFF1A\u672C\u5E74", callback: () => this.openPeriodic("yearly") });
    this.addCommand({ id: "ai-test", name: "\u6D4B\u8BD5 AI \u8FDE\u63A5", callback: () => this.testAI() });
    this.addCommand({ id: "open-chat", name: "\u6253\u5F00 AI \u5BF9\u8BDD\u9762\u677F", callback: () => this.activateChat() });
    this.addCommand({ id: "build-task-brief", name: "\u751F\u6210\u4EFB\u52A1\u4E66\uFF08\u4EA4\u7ED9 Claude Code/Claudian\uFF09", callback: () => new TaskBriefModal(this.app, this).open() });
    this.addCommand({ id: "open-wiki", name: "\u6253\u5F00 LLM Wiki \u9762\u677F", callback: () => this.activateWiki() });
    this.addCommand({ id: "open-pipeline", name: "\u6253\u5F00\u5185\u5BB9\u6D41\u6C34\u7EBF", callback: () => this.activatePipeline() });
    this.addCommand({ id: "new-pipeline", name: "\u65B0\u5EFA\u5185\u5BB9\u6D41\u6C34\u7EBF\uFF08\u5BA1\u9898\u2192\u53D1\u5E03\uFF09", callback: () => new NewPipelineModal(this.app, this).open() });
    this.addCommand({
      id: "gtm-score",
      name: "GTM \u8BC4\u5206\uFF08\u7ED9\u5F53\u524D\u8349\u7A3F\u6253\u5206\uFF09",
      checkCallback: (checking) => {
        const f = this.app.workspace.getActiveFile();
        if (!f) return false;
        if (!checking) (async () => {
          try {
            new import_obsidian.Notice("\u{1F3AF} GTM \u8BC4\u5BA1\u4E2D\u2026");
            const body = (await this.app.vault.read(f)).replace(/^---[\s\S]*?---/, "");
            const j = await this.gtmReview(body);
            await this.app.vault.process(f, (cur) => cur.replace(/\n*$/, "\n") + `
## GTM \u8BC4\u5206\uFF08${todayStr()}\uFF09

${this.gtmReport(j)}
`);
            new import_obsidian.Notice(`GTM ${j.total}/100 \xB7 ${j.verdict}`);
          } catch (e) {
            new import_obsidian.Notice("\u274C " + e.message, 8e3);
          }
        })();
        return true;
      }
    });
    this.addCommand({
      id: "auto-pipeline",
      name: "\u5168\u81EA\u52A8\u751F\u6210\uFF08\u5F53\u524D\u6D41\u6C34\u7EBF\u5361\uFF0C\u5FAA\u73AF\u5DE5\u7A0B\uFF09",
      checkCallback: (checking) => {
        const f = this.app.workspace.getActiveFile();
        if (!f || this.fm(f).type !== "pipeline") return false;
        if (!checking) this.runAutoPipeline(f);
        return true;
      }
    });
    this.addCommand({ id: "ask-wiki", name: "\u95EE wiki\uFF08\u7528\u7F16\u8BD1\u9875\u505A\u4E0A\u4E0B\u6587\u56DE\u7B54\uFF09", callback: () => this.askWiki() });
    this.addCommand({ id: "new-wiki-page", name: "\u65B0\u5EFA Wiki \u9875\uFF08\u6309 AGENTS.md \u6A21\u677F\uFF09", callback: () => new NewWikiPageModal(this.app, this).open() });
    this.addCommand({
      id: "draft-seed-page",
      name: "AI \u8D77\u8349 seed \u9875\uFF08\u4ECE\u5F53\u524D\u7B14\u8BB0\uFF09",
      checkCallback: (checking) => {
        const f = this.app.workspace.getActiveFile();
        if (!f) return false;
        if (!checking) this.draftSeedFromNote(f);
        return true;
      }
    });
    const activeFileCmd = (id, name, fn) => this.addCommand({
      id,
      name,
      checkCallback: (checking) => {
        const f = this.app.workspace.getActiveFile();
        if (!f) return false;
        if (!checking) fn(f);
        return true;
      }
    });
    activeFileCmd("mark-for-ingest", "\u628A\u5F53\u524D\u7B14\u8BB0\u52A0\u5165 ingest \u961F\u5217", (f) => this.markForIngest(f));
    activeFileCmd("cycle-draft-status", "\u6587\u7A3F\u72B6\u6001\u6D41\u8F6C\uFF08\u8349\u7A3F\u2192\u5F85\u53D1\u2192\u5DF2\u53D1\uFF09", (f) => this.cycleDraftStatus(f));
    activeFileCmd("undo-draft-status", "\u56DE\u9000\u6587\u7A3F\u72B6\u6001", (f) => this.undoDraftStatus(f));
    activeFileCmd("toggle-shelve", "\u6401\u7F6E/\u6062\u590D\u5F53\u524D\u6587\u7A3F", (f) => this.toggleShelve(f));
    activeFileCmd("set-schedule", "\u8BBE\u7F6E\u6392\u671F\uFF08\u53D1\u5E03\u8BA1\u5212\uFF09", (f) => this.setSchedule(f));
    activeFileCmd("record-stats", "\u5F55\u5165\u53D1\u5E03\u6570\u636E", (f) => new StatsModal(this.app, this, f).open());
    activeFileCmd("review-card", "\u751F\u6210\u590D\u76D8\u5361", (f) => this.appendReviewCard(f));
    activeFileCmd("title-workbench", "\u6807\u9898\u5DE5\u4F5C\u53F0", (f) => new TitlesModal(this.app, this, f).open());
    activeFileCmd("register-lineage", "\u767B\u8BB0\u8840\u7EDF\uFF08\u6536\u96C6\u5F53\u524D\u6587\u7A3F\u5F15\u7528\u7684\u8D44\u4EA7\uFF09", (f) => this.registerLineage(f));
    activeFileCmd("push-wechat", "\u{1F4EE} \u63A8\u9001\u5230\u516C\u4F17\u53F7\u8349\u7A3F\u7BB1", (f) => this.pushWechatDraft(f));
    activeFileCmd("xhs-cards", "\u{1F3A8} \u751F\u6210\u5C0F\u7EA2\u4E66\u56FE\u6587\u5361\uFF08\u5F53\u524D\u7A3F\uFF09", (f) => this.generateXhsCards(f));
    activeFileCmd("xhs-publish", "\u{1F680} \u53D1\u5C0F\u7EA2\u4E66\uFF08\u81EA\u52A8\u586B\u5355\xB7\u4EBA\u70B9\u53D1\u5E03\uFF09", (f) => this.publishXhsSemiAuto(f));
    activeFileCmd("video-script", "\u{1F3AC} \u751F\u6210\u89C6\u9891\u53F7\u53E3\u64AD\u811A\u672C\uFF08\u5F53\u524D\u7A3F\uFF09", (f) => this.generateVideoScript(f));
    activeFileCmd("push-newspic", "\u{1F7E2} \u63A8\u516C\u4F17\u53F7\u56FE\u6587\uFF08\u5C0F\u7EFF\u4E66\xB7\u590D\u7528\u5361\u7247\u56FE\uFF09", (f) => this.pushWechatNewspic(f));
    this.addCommand({ id: "xhs-login", name: "\u{1F511} \u5C0F\u7EA2\u4E66\u521B\u4F5C\u5E73\u53F0\u767B\u5F55\uFF08\u9996\u6B21\u626B\u7801\uFF0C\u767B\u5F55\u6001\u6301\u4E45\uFF09", callback: () => {
      if (this.spawnXhsPublisher(["--login"])) new import_obsidian.Notice("\u6D4F\u89C8\u5668\u5DF2\u6253\u5F00\uFF0C\u626B\u7801\u767B\u5F55\u540E\u5173\u7A97\u5373\u53EF");
    } });
    activeFileCmd("de-ai", "\u{1F9F9} \u53BBAI\u5473\u4F53\u68C0/\u6E05\u6D17\u5F53\u524D\u6587\u7A3F", (f) => this.deAiPass(f, null, true));
    activeFileCmd("fact-check", "\u{1F50E} \u4E8B\u5B9E\u6838\u67E5 + \u5408\u89C4\u7EA2\u7EBF\uFF08\u5F53\u524D\u7A3F\uFF09", (f) => this.factCheckDraft(f, null, false));
    activeFileCmd("design-layout", "\u{1F3A8} \u6392\u7248\u8BBE\u8BA1\uFF08\u5F53\u524D\u7A3F\u2192\u63D2\u5165\u7EC4\u4EF6\u6807\u8BB0\uFF09", (f) => this.designLayout(f, false));
    activeFileCmd("predict-trolls", "\u{1F5EF} \u6760\u7CBE\u9884\u5224\uFF08\u9884\u6F14\u8BC4\u8BBA\u533A\xB7\u63D0\u524D\u5835\u6F0F\uFF09", (f) => this.predictTrolls(f, null, false));
    activeFileCmd("visualize-data", "\u{1F4CA} \u6570\u636E\u53EF\u89C6\u5316\uFF08\u63D0\u53D6\u6570\u636E\u2192\u56FE\u8868\u63D2\u56DE\u539F\u6587\uFF09", (f) => this.visualizeData(f, false));
    activeFileCmd("make-cover", "\u{1F5BC} \u751F\u6210\u9996\u56FE\uFF08\u94A9\u5B50\u5927\u5B57\xB7\u81EA\u52A8\u63A5\u7BA1\u5C01\u9762\uFF09", (f) => this.makeCoverHook(f, false));
    activeFileCmd("derive-xhs", "\u683C\u5F0F\u5DE5\u5382\uFF1A\u884D\u751F\u5C0F\u7EA2\u4E66\u7248", (f) => this.deriveDraft(f, "\u5C0F\u7EA2\u4E66"));
    activeFileCmd("derive-thread", "\u683C\u5F0F\u5DE5\u5382\uFF1A\u884D\u751F\u7EBF\u7A0B\u7248", (f) => this.deriveDraft(f, "\u7EBF\u7A0B"));
    this.addSettingTab(new ContentOSSettingTab(this.app, this));
    this.registerObsidianProtocolHandler("content-os", (params) => {
      const a = params.action || "dashboard";
      if (a === "capture") this.quickCapture();
      else if (a === "diary") this.openTodayDiary();
      else if (a === "calendar") this.activateCalendar();
      else if (a === "chat") this.activateChat();
      else if (a === "pipeline") this.activatePipeline();
      else if (a === "wiki") this.activateWiki();
      else this.activateDashboard();
    });
    this.app.workspace.onLayoutReady(() => {
      this.ensureDefaultPrompts().catch(() => {
      });
      if (!this.settings.onboarded) new OnboardingModal(this.app, this).open();
      if (import_obsidian.Platform.isMobile && this.settings.flomoMobileDefault) {
        window.setTimeout(() => this.activateFlomo(), 300);
      }
      if (!import_obsidian.Platform.isMobile && this.settings.defaultLayoutOnStart) window.setTimeout(() => this.applyDefaultLayout(), 400);
      this.startHttpServer();
    });
    ["create", "delete", "rename"].forEach((ev) => this.registerEvent(this.app.vault.on(ev, () => {
      this._entriesCache = null;
    })));
  }
  onunload() {
    this.stopHttpServer();
  }
  _deobf(v) {
    if (typeof v !== "string" || !v.startsWith("obf:")) return v;
    try {
      return decodeURIComponent(escape(atob(v.slice(4))));
    } catch (e) {
      return "";
    }
  }
  _obf(v) {
    if (typeof v !== "string" || !v || v.startsWith("obf:")) return v;
    try {
      return "obf:" + btoa(unescape(encodeURIComponent(v)));
    } catch (e) {
      return v;
    }
  }
  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
    this.settings.aiApiKey = this._deobf(this.settings.aiApiKey);
  }
  async saveSettings() {
    const persist = Object.assign({}, this.settings);
    persist.aiApiKey = this._obf(this.settings.aiApiKey);
    await this.saveData(persist);
  }
  /* ---------- 基础 ---------- */
  fm(file) {
    return this.app.metadataCache.getFileCache(file)?.frontmatter || {};
  }
  /* 直读文件解析 frontmatter 关键字段，绕开 metadataCache 刷新竞态（自动流水线专用） */
  async fmDirect(file) {
    const text = await this.app.vault.read(file);
    const m = text.match(/^---\n([\s\S]*?)\n---/);
    const out = {};
    if (!m) return out;
    for (const line of m[1].split("\n")) {
      const kv = line.match(/^(\w[\w-]*):\s*(.*)$/);
      if (kv) out[kv[1]] = kv[2].replace(/^["']|["']$/g, "");
    }
    return out;
  }
  exists(path) {
    return this.app.vault.getAbstractFileByPath((0, import_obsidian.normalizePath)(path)) instanceof import_obsidian.TFile;
  }
  filesIn(folderPath, recursive) {
    const folder = this.app.vault.getAbstractFileByPath((0, import_obsidian.normalizePath)(folderPath));
    if (!(folder instanceof import_obsidian.TFolder)) return [];
    const out = [];
    const walk = (f) => {
      for (const c of f.children) {
        if (c instanceof import_obsidian.TFile) out.push(c);
        else if (recursive && c instanceof import_obsidian.TFolder) walk(c);
      }
    };
    walk(folder);
    return out;
  }
  async uncheckedItems(path) {
    const f = this.app.vault.getAbstractFileByPath((0, import_obsidian.normalizePath)(path));
    if (!(f instanceof import_obsidian.TFile)) return null;
    const text = await this.app.vault.cachedRead(f);
    return parseUnchecked(text);
  }
  async ensureFolder(path) {
    const p = (0, import_obsidian.normalizePath)(path);
    if (this.app.vault.getAbstractFileByPath(p)) return;
    await this.app.vault.createFolder(p).catch(() => {
    });
  }
  async ensureFile(path, initial) {
    const p = (0, import_obsidian.normalizePath)(path);
    const f = this.app.vault.getAbstractFileByPath(p);
    if (f instanceof import_obsidian.TFile) return f;
    await this.ensureFolder(p.split("/").slice(0, -1).join("/"));
    return this.app.vault.create(p, initial || "");
  }
  async openPath(path) {
    const f = this.app.vault.getAbstractFileByPath((0, import_obsidian.normalizePath)(path));
    if (f instanceof import_obsidian.TFile) await this.app.workspace.getLeaf(false).openFile(f);
    else new import_obsidian.Notice(`\u6587\u4EF6\u4E0D\u5B58\u5728\uFF1A${path}`);
  }
  /* ---------- v3.6 节假日选题窗口（吸收自 LifeOS 节假日订阅）---------- */
  upcomingHolidays(days) {
    const win = days != null ? days : this.settings.holidayWindowDays;
    return filterUpcomingHolidays(HOLIDAYS, (0, import_obsidian.moment)().format("YYYY-MM-DD"), win);
  }
  async seedHolidayTopics(quiet) {
    const ups = this.upcomingHolidays();
    const p = this.settings.topicLibraryFile;
    if (!p) {
      if (!quiet) new import_obsidian.Notice("\u672A\u914D\u7F6E\u9009\u9898\u5E93\u6587\u4EF6");
      return 0;
    }
    if (!ups.length) {
      if (!quiet) new import_obsidian.Notice("\u672A\u6765\u4E00\u6BB5\u65F6\u95F4\u6CA1\u6709\u4E34\u8FD1\u8282\u65E5");
      return 0;
    }
    const f = this.app.vault.getAbstractFileByPath((0, import_obsidian.normalizePath)(p));
    let cur = f instanceof import_obsidian.TFile ? await this.app.vault.read(f) : "# \u9009\u9898\u5E93\n\n";
    let added = 0;
    for (const h of ups) {
      if (cur.includes(`${h.name}\xB7\u9009\u9898\u7A97\u53E3`)) continue;
      cur = cur.replace(/\n*$/, "\n") + `- [ ] ${todayStr()} ${h.name}\xB7\u9009\u9898\u7A97\u53E3\uFF08\u8FD8\u6709${h.diff}\u5929\uFF09\uFF1A${h.angle} #\u8282\u65E5 #${h.name}
`;
      added += 1;
    }
    if (added) {
      if (f instanceof import_obsidian.TFile) await this.app.vault.modify(f, cur);
      else await this.ensureFile(p, cur);
    }
    if (!quiet) new import_obsidian.Notice(added ? `\u{1F3AF} \u5DF2\u6CE8\u5165 ${added} \u4E2A\u8282\u65E5\u9009\u9898\u7A97\u53E3` : "\u4E34\u8FD1\u8282\u65E5\u9009\u9898\u5DF2\u5728\u5E93\u4E2D");
    return added;
  }
  /* ---------- v3.6 周期内容复盘（吸收自 LifeOS 周期笔记）---------- */
  async buildPeriodReview(period) {
    const now = (0, import_obsidian.moment)();
    const start = period === "month" ? now.clone().startOf("month") : now.clone().startOf("isoWeek");
    const label = period === "month" ? now.format("YYYY-MM") : now.format("GGGG-[W]WW");
    const prefix = (0, import_obsidian.normalizePath)(this.settings.draftsFolder) + "/";
    const inRange = (d) => d && (0, import_obsidian.moment)(String(d)).isValid() && (0, import_obsidian.moment)(String(d)).isSameOrAfter(start);
    const written = [], published = [];
    for (const f of this.app.vault.getMarkdownFiles()) {
      if (!f.path.startsWith(prefix)) continue;
      const fm = this.fm(f);
      if (inRange(fm.created)) written.push(fm);
      if (inRange(fm.pushedWechat) || inRange(fm.statsDate)) published.push(fm);
    }
    let reads = 0, shares = 0, best = null;
    for (const fm of published) {
      const st = fm.stats;
      if (st && st.reads) {
        reads += Number(st.reads) || 0;
        shares += Number(st.shares) || 0;
        if (!best || (Number(st.reads) || 0) > (Number(best.stats && best.stats.reads) || 0)) best = fm;
      }
    }
    let remain = 0;
    const tf = this.settings.topicLibraryFile && this.app.vault.getAbstractFileByPath((0, import_obsidian.normalizePath)(this.settings.topicLibraryFile));
    if (tf instanceof import_obsidian.TFile) remain = ((await this.app.vault.read(tf)).match(/^- \[ \]/gm) || []).length;
    let plan = "";
    try {
      const geneF = this.settings.hotGeneFile && this.app.vault.getAbstractFileByPath((0, import_obsidian.normalizePath)(this.settings.hotGeneFile));
      const gene = geneF instanceof import_obsidian.TFile ? (await this.app.vault.cachedRead(geneF)).slice(0, 1200) : "\uFF08\u6682\u65E0\u7206\u6B3E\u57FA\u56E0\uFF09";
      const r = await this.llmChat(
        `\u4F60\u662F\u5185\u5BB9\u4E3B\u7F16\uFF0C\u505A${period === "month" ? "\u6708\u5EA6" : "\u6BCF\u5468"}\u5185\u5BB9\u590D\u76D8\u3002\u57FA\u4E8E\u6570\u636E\u7ED9\u51FA\u4E0B\u671F\u89C4\u5212\uFF1A3 \u6761\u5177\u4F53\u9009\u9898\u65B9\u5411 + 1 \u6761\u6700\u8BE5\u6539\u8FDB\u7684\u6267\u884C\u52A8\u4F5C\u3002\u7B80\u6D01\uFF0C\u522B\u7A7A\u8BDD\u3002`,
        `\u672C\u671F\uFF1A\u5199 ${written.length} \u7BC7\u3001\u53D1 ${published.length} \u7BC7\u3001\u603B\u9605\u8BFB ${reads}\u3001\u603B\u8F6C\u53D1 ${shares}\u3001\u9009\u9898\u5E93\u4F59 ${remain} \u6761\u3002
\u7206\u6B3E\u57FA\u56E0\uFF1A
${gene}`
      );
      plan = r.text;
    } catch (e) {
      plan = "\uFF08AI \u89C4\u5212\u751F\u6210\u5931\u8D25\uFF0C\u53EF\u7A0D\u540E\u91CD\u8DD1\uFF09";
    }
    const doc = `---
title: ${period === "month" ? "\u6708" : "\u5468"}\u590D\u76D8 ${label}
type: period-review
---

# ${period === "month" ? "\u{1F4C6} \u6708\u5EA6" : "\u{1F5D3} \u6BCF\u5468"}\u5185\u5BB9\u590D\u76D8 \xB7 ${label}

- **\u4EA7\u51FA**\uFF1A\u5199 ${written.length} \u7BC7\uFF0C\u53D1\u5E03 ${published.length} \u7BC7
- **\u6570\u636E**\uFF1A\u603B\u9605\u8BFB ${reads}\uFF0C\u603B\u8F6C\u53D1 ${shares}${best ? `\uFF0C\u6700\u4F73\u300A${String(best.title || "").slice(0, 24)}\u300B(${best.stats.reads}\u9605\u8BFB)` : ""}
- **\u9009\u9898\u5E93**\uFF1A\u5269 ${remain} \u6761\u5F85\u5199

## \u4E0B\u671F\u89C4\u5212

${plan}
`;
    const path = (0, import_obsidian.normalizePath)(`${this.settings.reviewFolder}/${period === "month" ? "\u6708" : "\u5468"}\u590D\u76D8-${label}.md`);
    const ex = this.app.vault.getAbstractFileByPath(path);
    let file;
    if (ex instanceof import_obsidian.TFile) {
      await this.app.vault.modify(ex, doc);
      file = ex;
    } else {
      await this.ensureFolder(this.settings.reviewFolder);
      file = await this.app.vault.create(path, doc);
    }
    new import_obsidian.Notice(`${period === "month" ? "\u{1F4C6} \u6708" : "\u{1F5D3} \u5468"}\u590D\u76D8\u5DF2\u751F\u6210\uFF1A${label}`);
    if (file instanceof import_obsidian.TFile) await this.app.workspace.getLeaf(false).openFile(file);
  }
  /* ---------- v3.5 默认工作台布局（左日历·中主界面·右AI）---------- */
  async placeInSide(type, side) {
    const ws = this.app.workspace;
    let leaf = ws.getLeavesOfType(type)[0];
    const target = side === "left" ? ws.leftSplit : ws.rightSplit;
    if (leaf && target && leaf.getRoot && leaf.getRoot() !== target) {
      leaf.detach();
      leaf = null;
    }
    if (!leaf) leaf = side === "left" ? ws.getLeftLeaf(false) : ws.getRightLeaf(false);
    if (leaf) await leaf.setViewState({ type, active: false });
    return leaf;
  }
  async applyDefaultLayout(center) {
    const ws = this.app.workspace;
    const c = center || this.settings.layoutCenter || "dashboard";
    const mainLeaf = ws.getLeaf(false);
    await mainLeaf.setViewState({ type: c === "flomo" ? VIEW_FLOMO : VIEW_TYPE, active: true });
    const calLeaf = await this.placeInSide(VIEW_CAL, "left");
    const chatLeaf = await this.placeInSide(VIEW_CHAT, "right");
    ws.leftSplit && ws.leftSplit.expand();
    ws.rightSplit && ws.rightSplit.expand();
    if (calLeaf) ws.revealLeaf(calLeaf);
    if (chatLeaf) ws.revealLeaf(chatLeaf);
    ws.revealLeaf(mainLeaf);
    new import_obsidian.Notice("\u229E \u5DF2\u5E03\u7F6E Content OS \u5DE5\u4F5C\u53F0");
  }
  /* ---------- v3.5 本地 HTTP 入口（打通 VPS 自动化，仅桌面端）---------- */
  async appendTopic(title, kwline) {
    const p = this.settings.topicLibraryFile || this.settings.topicsFile;
    if (!p) throw new Error("\u672A\u914D\u7F6E\u9009\u9898\u5E93\u6587\u4EF6");
    const line = `- [ ] ${todayStr()} ${title}${kwline ? " " + kwline : ""}
`;
    const f = this.app.vault.getAbstractFileByPath((0, import_obsidian.normalizePath)(p));
    if (f instanceof import_obsidian.TFile) {
      const cur = await this.app.vault.read(f);
      await this.app.vault.modify(f, cur.replace(/\n*$/, "\n") + line);
    } else await this.ensureFile(p, `# \u9009\u9898\u5E93

${line}`);
  }
  startHttpServer() {
    if (!import_obsidian.Platform.isDesktop) return;
    this.stopHttpServer();
    if (!this.settings.httpEnabled) return;
    let http;
    try {
      http = require("http");
    } catch (e) {
      new import_obsidian.Notice("\u672C\u673A\u65E0 http \u6A21\u5757\uFF0CHTTP \u5165\u53E3\u4E0D\u53EF\u7528");
      return;
    }
    const port = Number(this.settings.httpPort) || 3030;
    const token = String(this.settings.httpToken || "");
    const srv = http.createServer((req, res) => {
      const send = (code, obj) => {
        res.writeHead(code, { "content-type": "application/json; charset=utf-8" });
        res.end(JSON.stringify(obj));
      };
      const decision = httpAuthAndRoute({ method: req.method, url: req.url, token, authHeader: req.headers["x-cos-token"] });
      if (decision.status && decision.route !== "capture" && decision.route !== "topic" && decision.route !== "batch") {
        return send(decision.status, decision.route === "health" ? { ok: true, plugin: "content-os" } : { error: decision.error });
      }
      const path = req.url.split("?")[0];
      let body = "";
      req.on("data", (ch) => {
        body += ch;
        if (body.length > 1e6) req.destroy();
      });
      req.on("end", async () => {
        let data = {};
        try {
          data = JSON.parse(body || "{}");
        } catch (e) {
          return send(400, { error: "bad json" });
        }
        try {
          if (path === "/capture") {
            const text = String(data.text || "").trim();
            if (!text) return send(400, { error: "no text" });
            await this.captureText(text, true);
            return send(200, { ok: true });
          }
          if (path === "/topic") {
            const title = String(data.title || "").trim();
            if (!title) return send(400, { error: "no title" });
            const kw = Array.isArray(data.keywords) ? data.keywords.map((k) => "#" + k).join(" ") : data.keywords ? "#" + String(data.keywords) : "";
            await this.appendTopic(title, kw);
            return send(200, { ok: true });
          }
          if (path === "/batch") {
            this.runDailyBatch(true);
            return send(200, { ok: true, started: true });
          }
          return send(404, { error: "unknown path" });
        } catch (e) {
          return send(500, { error: String(e.message).slice(0, 200) });
        }
      });
    });
    srv.on("error", (e) => new import_obsidian.Notice("Content OS HTTP \u542F\u52A8\u5931\u8D25\uFF1A" + e.message, 8e3));
    srv.listen(port, "0.0.0.0", () => console.log(`[Content OS] HTTP \u5165\u53E3\u76D1\u542C :${port}`));
    this._httpServer = srv;
    new import_obsidian.Notice(`\u{1F50C} Content OS HTTP \u5165\u53E3\u5DF2\u542F\u52A8 :${port}`);
  }
  stopHttpServer() {
    if (this._httpServer) {
      try {
        this._httpServer.close();
      } catch (e) {
      }
      this._httpServer = null;
    }
  }
  async activateView(type) {
    const existing = this.app.workspace.getLeavesOfType(type);
    if (existing.length) {
      this.app.workspace.revealLeaf(existing[0]);
      return;
    }
    const leaf = this.app.workspace.getRightLeaf(false);
    await leaf.setViewState({ type, active: true });
    this.app.workspace.revealLeaf(leaf);
  }
  activateDashboard() {
    return this.activateView(VIEW_TYPE);
  }
  activateChecklist() {
    return this.activateView(VIEW_CHECK);
  }
  activateCalendar() {
    return this.activateView(VIEW_CAL);
  }
  activateChat() {
    return this.activateView(VIEW_CHAT);
  }
  activateWiki() {
    return this.activateView(VIEW_WIKI);
  }
  /* ---------- v1.3 LLM Wiki 模块 ---------- */
  wikiPages() {
    return this.filesIn(`${this.settings.wikiFolder}/wiki`, true).filter((f) => f.extension === "md").map((f) => ({ f, fm: this.fm(f) }));
  }
  /* wiki 目录内断链检查（等价 wiki_lint.sh 的结构检查） */
  async wikiBrokenLinks() {
    const broken = [];
    const files = this.filesIn(this.settings.wikiFolder, true).filter((f) => f.extension === "md");
    for (const f of files) {
      const links = this.app.metadataCache.getFileCache(f)?.links || [];
      for (const l of links) {
        const target = l.link.split("#")[0].trim();
        if (!target) continue;
        if (!this.app.metadataCache.getFirstLinkpathDest(target, f.path)) {
          broken.push({ from: f.basename, target });
        }
      }
    }
    return broken;
  }
  async createWikiPage(type, subdir, title) {
    const date = todayStr();
    const wiki = this.settings.wikiFolder;
    let body;
    if (type === "raw-source") {
      body = `---
title: ${title}
type: raw-source
status: active
source_type: note
date_ingested: ${date}
tags:
  - source
---

# ${title}

## \u4E3A\u4EC0\u4E48\u6536\u5F55

\u4E00\u53E5\u8BDD\u8BF4\u660E\u5B83\u4E3A\u4EC0\u4E48\u503C\u5F97\u8FDB\u5165 wiki\u3002

## \u6838\u5FC3\u547D\u9898

-

## \u5173\u952E\u7ED3\u6784

-

## \u5BF9\u672C Vault \u7684\u542F\u53D1

-

## \u540E\u7EED\u5E94\u751F\u6210\u7684 wiki \u9875\u9762

-
`;
    } else {
      body = `---
title: ${title}
type: ${type}
status: seed
confidence: 0.6
last_ingested: ${date}
sources:
  - \uFF08\u5F85\u8865 raw \u5361\uFF09
tags:
  - ${type}
---

# ${title}

## \u5B9A\u4E49

\u4E00\u53E5\u8BDD\u8BF4\u660E\u8FD9\u4E2A${type === "person" ? "\u4EBA\u7269" : "\u6982\u5FF5/\u7CFB\u7EDF/\u5BF9\u8C61"}\u662F\u4EC0\u4E48\u3002

## \u4E3A\u4EC0\u4E48\u91CD\u8981

-

## \u6838\u5FC3\u8981\u70B9

-

## \u5728\u672C Vault \u91CC\u7684\u5E94\u7528

-

## \u672A\u51B3\u95EE\u9898

- \u5F85\u8865 sources\uFF1B\u5F85\u767B\u8BB0\u8FDB index.md

## \u76F8\u5173\u9875\u9762

-
`;
    }
    const name = type === "raw-source" ? `${date}-${title}\u6765\u6E90\u5361` : title;
    const f = await this.ensureFile(`${wiki}/${subdir}/${name}.md`, body);
    await this.app.workspace.getLeaf(false).openFile(f);
    new import_obsidian.Notice(`Wiki \u9875\u5DF2\u5EFA\uFF1A${name}\uFF08\u8BB0\u5F97\u8865 sources \u5E76\u767B\u8BB0 index\uFF09`);
  }
  /* 问 wiki：按问题检索编译页，附为上下文送进对话面板 */
  askWiki() {
    new PromptModal(this.app, {
      title: "\u{1F4AC} \u95EE wiki",
      placeholder: "\u95EE\u9898\u2026\uFF08\u5C06\u81EA\u52A8\u68C0\u7D22\u76F8\u5173\u7F16\u8BD1\u9875\u505A\u4E0A\u4E0B\u6587\uFF09",
      onSubmit: async (q) => {
        const pages = this.wikiPages();
        const terms = q.split(/[\s，。？！、：;,.?!]+/).filter((x) => x.length >= 2);
        const scored = pages.map((x) => {
          let s = 0;
          const heads = (this.app.metadataCache.getFileCache(x.f)?.headings || []).map((h) => h.heading).join(" ");
          for (const t of terms) {
            if (x.f.basename.includes(t)) s += 3;
            if (heads.includes(t)) s += 1;
          }
          if (x.fm.status === "active") s += 0.5;
          return { ...x, s };
        }).filter((x) => x.s > 0).sort((a, b) => b.s - a.s).slice(0, 4);
        await this.activateChat();
        const leaf = this.app.workspace.getLeavesOfType(VIEW_CHAT)[0];
        const view = leaf?.view;
        if (!view) {
          new import_obsidian.Notice("\u5BF9\u8BDD\u9762\u677F\u672A\u5C31\u7EEA");
          return;
        }
        view.contextParts = [];
        if (!scored.length) {
          new import_obsidian.Notice("\u6CA1\u6709\u547D\u4E2D\u7684\u7F16\u8BD1\u9875\uFF0C\u5C06\u53EA\u6309\u7CFB\u7EDF\u63D0\u793A\u8BCD\u56DE\u7B54\uFF08\u8003\u8651\u5148 ingest \u8FD9\u4E2A\u4E3B\u9898\uFF09");
        }
        for (const x of scored) {
          view.contextParts.push({
            label: `wiki\uFF1A${x.f.basename}\uFF08${x.fm.status || ""} ${x.fm.confidence || ""}\uFF09`,
            text: (await this.app.vault.cachedRead(x.f)).slice(0, 5e3)
          });
        }
        view.messages.push({ role: "user", content: q });
        view.busy = true;
        view.render();
        try {
          const sys = view.buildSystem() + "\n\n\u56DE\u7B54\u65F6\u6CE8\u660E\u4F9D\u636E\u4E86\u54EA\u51E0\u4E2A wiki \u9875\uFF1Bwiki \u8986\u76D6\u4E0D\u5230\u7684\u90E8\u5206\u660E\u786E\u8BF4\uFF0C\u5E76\u5EFA\u8BAE\u662F\u5426\u503C\u5F97 ingest\u3002";
          const r = await this.llmChatMessages(sys, view.messages);
          view.messages.push({ role: "assistant", content: r.text });
        } catch (e) {
          view.messages.push({ role: "assistant", content: "\u274C " + e.message });
        }
        view.busy = false;
        view.render();
      }
    }).open();
  }
  /* AI 起草 seed 页：轻量 ingest，不必跑 Claude Code */
  async draftSeedFromNote(file) {
    try {
      new import_obsidian.Notice(`\u{1F331} \u8D77\u8349 seed \u9875\uFF1A${file.basename}\u2026`);
      const content = (await this.app.vault.read(file)).slice(0, 16e3);
      const system = await this.loadPrompt("seed-compiler");
      const user = `\u7B14\u8BB0\u8DEF\u5F84\uFF1A${file.path}

\u7B14\u8BB0\u5185\u5BB9\uFF1A

${content}`;
      const r = await this.llmChat(system, user);
      const date = todayStr();
      const title = file.basename.replace(/^\d{4}-\d{2}-\d{2}\s*/, "").slice(0, 40) || file.basename;
      const body = `---
title: ${title}
type: concept
status: seed
confidence: 0.5
last_ingested: ${date}
sources:
  - ${file.path}
tags:
  - ai-generated
---

> \u26A0\uFE0F AI \u8D77\u8349\uFF08${r.model}\uFF09\uFF0C\u4EBA\u5DE5\u5BA1\u6838\u524D confidence \u4E0A\u9650 0.5\u3002\u5BA1\u6838\u540E\u8BF7\u8C03\u6574\u72B6\u6001\u5E76\u767B\u8BB0 index.md\u3002

${r.text}
`;
      const path = `${this.settings.wikiFolder}/wiki/concepts/${sanitizeName(title)}.md`;
      if (this.exists(path)) {
        new import_obsidian.Notice("\u540C\u540D wiki \u9875\u5DF2\u5B58\u5728\uFF0C\u8BF7\u6539\u4E3A\u6269\u5199\u8BE5\u9875");
        await this.openPath(path);
        return;
      }
      const f = await this.ensureFile(path, body);
      await this.app.workspace.getLeaf(false).openFile(f);
      new import_obsidian.Notice(`seed \u9875\u5DF2\u8D77\u8349\uFF1A${title}\uFF08\u8BF7\u4EBA\u5DE5\u5BA1\u6838\uFF09`);
    } catch (e) {
      new import_obsidian.Notice("\u274C " + e.message, 8e3);
    }
  }
  /* ---------- v1.4 内容流水线引擎 ---------- */
  activatePipeline() {
    return this.activateView(VIEW_PIPE);
  }
  /* ---------- v2.0 提示词外置 ---------- */
  async loadPrompt(key) {
    const p = (0, import_obsidian.normalizePath)(`${this.settings.promptsFolder}/${key}.md`);
    const f = this.app.vault.getAbstractFileByPath(p);
    if (f instanceof import_obsidian.TFile) {
      const t = await this.app.vault.cachedRead(f);
      const bodyText = t.replace(/^---[\s\S]*?---\n/, "").trim();
      if (bodyText) return bodyText;
    }
    return PROMPT_DEFAULTS[key] || "";
  }
  async ensureDefaultPrompts() {
    await this.ensureFolder(this.settings.promptsFolder);
    for (const [key, text] of Object.entries(PROMPT_DEFAULTS)) {
      const p = `${this.settings.promptsFolder}/${key}.md`;
      if (!this.exists(p)) {
        await this.ensureFile(p, `---
title: ${key}
type: prompt
---

${text}
`);
      }
    }
  }
  /* ---------- v2.0 用量统计 ---------- */
  trackUsage(tin, tout) {
    const u = this.settings.usageStats || { totalIn: 0, totalOut: 0, calls: 0, byDay: {} };
    const d = todayStr();
    if (!u.byDay[d]) u.byDay[d] = { in: 0, out: 0, calls: 0 };
    u.byDay[d].in += tin;
    u.byDay[d].out += tout;
    u.byDay[d].calls++;
    u.totalIn += tin;
    u.totalOut += tout;
    u.calls++;
    const days = Object.keys(u.byDay).sort();
    while (days.length > 90) delete u.byDay[days.shift()];
    this.settings.usageStats = u;
    this.saveSettings();
  }
  /* ---------- v2.0 Pro 切面（dev 版全开） ---------- */
  isPro() {
    if (BRAND.edition === "dev") return true;
    return this._proValid === true;
  }
  async refreshLicense() {
    if (BRAND.edition === "dev") {
      this._proValid = true;
      return { valid: true, email: "dev", expiry: null };
    }
    const r = await verifyLicense(this.settings.licenseKey);
    this._proValid = r.valid;
    this._licenseInfo = r;
    return r;
  }
  gate(featureLabel) {
    if (this.isPro()) return true;
    new import_obsidian.Notice(`\u300C${featureLabel}\u300D\u662F Pro \u529F\u80FD \u2014 \u8BBE\u7F6E \u2192 \u6FC0\u6D3B\u5347\u7EA7`);
    return false;
  }
  /* ---------- v2.0 索引缓存 ---------- */
  getScoreEntries() {
    if (!this._entriesCache) {
      const wikiPrefix = (0, import_obsidian.normalizePath)(this.settings.wikiFolder) + "/";
      this._entriesCache = this.app.vault.getMarkdownFiles().map((f) => ({ base: f.basename, isWiki: f.path.startsWith(wikiPrefix) }));
    }
    return this._entriesCache;
  }
  stageSummary(title, lines, file) {
    new SummaryModal(
      this.app,
      title,
      lines,
      file ? () => this.app.workspace.getLeaf(false).openFile(file) : null
    ).open();
  }
  pipelineCards() {
    return this.filesIn(this.settings.pipelineFolder, true).filter((f) => f.extension === "md").map((f) => ({ f, fm: this.fm(f) })).filter((x) => x.fm.type === "pipeline");
  }
  async appendToNote(file, text) {
    await this.app.vault.process(file, (cur) => cur.replace(/\n*$/, "\n") + text);
  }
  async loadChecklistItems() {
    const f = this.app.vault.getAbstractFileByPath((0, import_obsidian.normalizePath)(this.settings.checklistFile));
    if (!(f instanceof import_obsidian.TFile)) return null;
    const text = await this.app.vault.cachedRead(f);
    const items = [];
    for (const line of text.split("\n")) {
      const m = line.match(/^\s*(?:[-*]|\d+\.)\s+(?!\[)(.{4,})$/);
      if (m) items.push(m[1].replace(/\*\*/g, "").trim());
      if (items.length >= 20) break;
    }
    return items;
  }
  async newPipeline(title, keywords) {
    const date = todayStr();
    const body = `---
title: \u6D41\u6C34\u7EBF\uFF1A${title}
type: pipeline
status: active
stage: \u5BA1\u9898
topic: ${title}
keywords: [${keywords.join(", ")}]
created: ${date}
materialPack: ""
draft: ""
gateLog: []
---

# \u{1F3ED} \u6D41\u6C34\u7EBF\uFF1A${title}

> \u9636\u6BB5\uFF1A\u5BA1\u9898(CDCP) \u2192 \u8BA1\u5212(PDCP) \u2192 \u521D\u7A3F(TR1) \u2192 \u7F16\u8F91(TR2) \u2192 \u53D1\u5E03\u51C6\u5907(ADCP) \u2192 \u5B8C\u6210
> \u539F\u5219\uFF1A\u6D41\u7A0B\u63A7\u5236\u5728\u95E8\u7981\u91CC\uFF0C\u4E13\u4E1A\u5224\u65AD\u5728 agent \u91CC\uFF1B\u4EA4\u4ED8\u7269\u662F\u9636\u6BB5\u95F4\u552F\u4E00\u4ECB\u8D28\u3002
`;
    const f = await this.ensureFile(`${this.settings.pipelineFolder}/${date}-${sanitizeName(title)}.md`, body);
    await this.app.workspace.getLeaf(false).openFile(f);
    await this.activatePipeline();
    new import_obsidian.Notice(`\u6D41\u6C34\u7EBF\u5DF2\u5F00\u5361\uFF1A${title}`);
    return f;
  }
  async runPipelineStage(file) {
    if (!this._pipeBusy) this._pipeBusy = /* @__PURE__ */ new Set();
    if (this._pipeBusy.has(file.path)) {
      new import_obsidian.Notice("\u23F3 \u8BE5\u6D41\u6C34\u7EBF\u6B63\u5728\u6267\u884C\u4E2D\uFF0C\u8BF7\u7B49\u5B83\u5B8C\u6210\uFF08\u9632\u6B62\u91CD\u590D\u6263\u8D39\uFF09");
      return;
    }
    this._pipeBusy.add(file.path);
    const fm = this.fm(file);
    const stage = fm.stage;
    try {
      if (stage === "\u5BA1\u9898") await this.pipeConcept(file, fm);
      else if (stage === "\u8BA1\u5212") await this.pipePlan(file, fm);
      else if (stage === "\u521D\u7A3F") await this.pipeDraft(file, fm);
      else if (stage === "\u7F16\u8F91") await this.pipeEdit(file, fm);
      else if (stage === "\u53D1\u5E03\u51C6\u5907") await this.pipePublishPrep(file, fm);
      else new import_obsidian.Notice("\u8BE5\u6D41\u6C34\u7EBF\u5DF2\u5B8C\u6210");
    } catch (e) {
      new import_obsidian.Notice("\u274C " + e.message, 8e3);
    } finally {
      this._pipeBusy.delete(file.path);
    }
  }
  /* 门禁前置校验：本阶段产物不存在则不放行 */
  async validateGate(file, fm) {
    const content = await this.app.vault.cachedRead(file);
    const stage = fm.stage;
    if (stage === "\u5BA1\u9898" && !content.includes("## \u5BA1\u9898\uFF08CDCP")) return "\u5148\u8DD1\u300C\u5BA1\u9898\u300D\u751F\u6210 CDCP \u6750\u6599";
    if (stage === "\u8BA1\u5212" && !content.includes("## \u8BA1\u5212\uFF08PDCP")) return "\u5148\u8DD1\u300C\u8BA1\u5212\u300D\u751F\u6210 PDCP \u6750\u6599\uFF08\u7D20\u6750\u5305+\u5927\u7EB2\uFF09";
    if (stage === "\u521D\u7A3F" && (!fm.draft || !this.exists(fm.draft))) return "\u5148\u8DD1\u300C\u521D\u7A3F\u300D\u751F\u6210\u8349\u7A3F";
    if (stage === "\u7F16\u8F91" && !content.includes("## \u7F16\u8F91\uFF08TR2")) return "\u5148\u8DD1\u300C\u7F16\u8F91\u300D\u751F\u6210 TR2 \u6750\u6599";
    if (stage === "\u53D1\u5E03\u51C6\u5907" && (!fm.draft || !this.exists(fm.draft))) return "\u8FD8\u6CA1\u6709\u8349\u7A3F";
    return null;
  }
  /* 审题（CDCP）：双角色 agent + LPDT 综合出 Charter */
  async pipeConcept(file, fm) {
    const topic = fm.topic;
    const kws = Array.isArray(fm.keywords) ? fm.keywords : [topic];
    new import_obsidian.Notice(`\u{1F3ED} \u5BA1\u9898\u4E2D\uFF083 \u4E2A\u89D2\u8272 agent\uFF09\uFF1A${topic}\u2026`);
    const drafts = this.filesIn(this.settings.draftsFolder, true).filter((f) => f.extension === "md");
    const ctx = this.buildScoreCtx(drafts);
    const matched = ctx.entries.filter((e) => kws.some((k) => k.length >= 2 && e.base.includes(k)));
    const hot = drafts.map((f) => ({ b: f.basename, s: this.fm(f).stats?.reads || 0 })).filter((x) => x.s > 0).sort((a, b) => b.s - a.s).slice(0, 6).map((x) => `${x.b}\uFF08\u9605\u8BFB${x.s}\uFF09`);
    let webIntel = "";
    try {
      const w = await this.webSearch(`${topic} ${kws.slice(0, 2).join(" ")}`, { n: 6 });
      if (w) webIntel = `

\u7F51\u7EDC\u6700\u65B0\u52A8\u6001\u4E0E\u7ADE\u4E89\u60C5\u62A5\uFF08\u79C1\u6709\u641C\u7D22\u5B9E\u65F6\u6293\u53D6\uFF09\uFF1A
${w}`;
    } catch (e) {
      webIntel = "";
    }
    const base = `\u9009\u9898\uFF1A${topic}
\u5173\u952E\u8BCD\uFF1A${kws.join("\u3001")}
\u4F5C\u8005\u5E93\u5185\u76F8\u5173\u7D20\u6750 ${matched.length} \u7BC7\uFF08wiki \u7F16\u8BD1\u9875 ${matched.filter((x) => x.isWiki).length} \u7BC7\uFF09
\u4F5C\u8005\u5185\u5BB9\u7CFB\u5217\uFF1A${this.settings.seriesKeywords}
\u5386\u53F2\u7206\u6B3E\uFF1A${hot.join("\uFF1B") || "\u6682\u65E0\u6570\u636E"}${webIntel}`;
    const r1 = await this.llmChat(await this.loadPrompt("concept-audience"), base);
    const r2 = await this.llmChat(await this.loadPrompt("concept-research"), base);
    const r3 = await this.llmChat(
      await this.loadPrompt("concept-lpdt"),
      base + `

\u3010\u8BFB\u8005\u4E0E\u589E\u957F\u4EE3\u8868\u610F\u89C1\u3011
${r1.text}

\u3010\u5185\u5BB9\u7814\u53D1\u4EE3\u8868\u610F\u89C1\u3011
${r2.text}`
    );
    await this.appendToNote(file, `
## \u5BA1\u9898\uFF08CDCP \u95E8\u7981\u6750\u6599\uFF09\xB7 ${todayStr()}

> \u26A0\uFE0F AI \u751F\u6210\uFF08${r3.model}\uFF09

### \u8BFB\u8005\u4E0E\u589E\u957F\u4EE3\u8868

${r1.text}

### \u5185\u5BB9\u7814\u53D1\u4EE3\u8868

${r2.text}

### LPDT Charter

${r3.text}
`);
    await this.app.workspace.getLeaf(false).openFile(file);
    this.stageSummary("\u5BA1\u9898\uFF08CDCP\uFF09\u5B8C\u6210", ["\u8BFB\u8005\u4E0E\u589E\u957F\u4EE3\u8868\u610F\u89C1 \u2713", "\u5185\u5BB9\u7814\u53D1\u4EE3\u8868\u610F\u89C1 \u2713", "LPDT Charter\uFF08\u542B GO/NO-GO \u7ED3\u8BBA\uFF09\u2713", "\u4E0B\u4E00\u6B65\uFF1A\u5BA1\u9605\u5361\u7247 \u2192 \u2705 \u8FC7 CDCP \u95E8\u7981"], file);
  }
  /* 计划（PDCP）：素材包 + 大纲 */
  async pipePlan(file, fm) {
    const topic = { title: fm.topic, keywords: Array.isArray(fm.keywords) ? fm.keywords : [fm.topic] };
    new import_obsidian.Notice(`\u{1F3ED} \u8BA1\u5212\u4E2D\uFF1A\u751F\u6210\u7D20\u6750\u5305\u4E0E\u5927\u7EB2\u2026`);
    await this.buildMaterialPack(topic);
    const packPath = (0, import_obsidian.normalizePath)(`${this.settings.materialFolder}/\u7D20\u6750\u5305-${sanitizeName(topic.title)}.md`);
    await this.app.fileManager.processFrontMatter(file, (f) => {
      f.materialPack = packPath;
    });
    const packFile = this.app.vault.getAbstractFileByPath(packPath);
    const pack = packFile instanceof import_obsidian.TFile ? (await this.app.vault.cachedRead(packFile)).slice(0, 12e3) : "";
    const card = (await this.app.vault.read(file)).slice(0, 6e3);
    const r = await this.llmChat(
      await this.loadPrompt("plan"),
      `\u6D41\u6C34\u7EBF\u5361\uFF08\u542B Charter\uFF09\uFF1A
${card}

\u7D20\u6750\u5305\uFF1A
${pack}`
    );
    await this.appendToNote(file, `
## \u8BA1\u5212\uFF08PDCP \u95E8\u7981\u6750\u6599\uFF09\xB7 ${todayStr()}

> \u26A0\uFE0F AI \u751F\u6210\uFF08${r.model}\uFF09

${r.text}
`);
    await this.app.workspace.getLeaf(false).openFile(file);
    this.stageSummary("\u8BA1\u5212\uFF08PDCP\uFF09\u5B8C\u6210", ["\u7D20\u6750\u5305\u5DF2\u751F\u6210\u5E76\u56DE\u94FE \u2713", "\u5927\u7EB2\u4E0E\u6392\u671F\u5EFA\u8BAE\u5DF2\u5199\u5165\u5361\u7247 \u2713", "\u4E0B\u4E00\u6B65\uFF1A\u5BA1\u9605 \u2192 \u2705 \u8FC7 PDCP \u95E8\u7981"], file);
  }
  /* 初稿（TR1）：按 Charter+大纲+素材写全文 */
  /* v3.9 真实经历调取：从日记+灵感流(+可选经历库)按选题关键词检索真实段落 */
  async gatherExperiences(kws, topicTitle) {
    const roots = [this.settings.diaryFolder, this.settings.captureFolder, this.settings.experienceFolder].filter(Boolean).map((f) => (0, import_obsidian.normalizePath)(f) + "/");
    const grams = new Set((kws || []).filter((k) => k && k.length >= 2));
    for (const g of titleKeywords(topicTitle || "")) grams.add(g);
    const scored = [];
    for (const f of this.app.vault.getMarkdownFiles()) {
      if (!roots.some((p) => f.path.startsWith(p))) continue;
      let txt = "";
      try {
        txt = await this.app.vault.cachedRead(f);
      } catch (e) {
        continue;
      }
      for (const hit of scoreExperienceParas(txt, grams)) {
        scored.push({ ...hit, src: f.basename.replace(/\.md$/, "").slice(0, 24) });
      }
    }
    const kwTop = scored.sort((a, b) => b.hits - a.hits).slice(0, 8);
    const sem = await this.semanticRecall(topicTitle || [...grams].slice(0, 5).join(" "), 5, "personal");
    const merged = [];
    const has = (t) => merged.some((m) => m.para.slice(0, 60) === String(t).slice(0, 60));
    for (const r of sem) {
      if (!has(r.text)) merged.push({ hits: 100, para: r.text, src: String(r.source).split("/").pop().replace(/\.md$/, "").slice(0, 24) });
    }
    for (const k of kwTop) if (!has(k.para)) merged.push(k);
    return merged.slice(0, 8);
  }
  async pipeDraft(file, fm, feedback = "") {
    new import_obsidian.Notice(`\u{1F3ED} \u5199\u7A3F\u4E2D\uFF1A${fm.topic}\u2026\uFF08\u7BC7\u5E45\u8F83\u957F\u8BF7\u7A0D\u5019\uFF09`);
    const card = (await this.app.vault.read(file)).slice(0, 16e3);
    let pack = "";
    if (fm.materialPack) {
      const pf = this.app.vault.getAbstractFileByPath((0, import_obsidian.normalizePath)(fm.materialPack));
      if (pf instanceof import_obsidian.TFile) pack = (await this.app.vault.cachedRead(pf)).slice(0, 12e3);
    }
    const fb = feedback ? `

\u4E0A\u4E00\u7A3F\u7684 GTM \u8BC4\u5BA1\u610F\u89C1\uFF08\u672C\u6B21\u5FC5\u987B\u9010\u6761\u6539\u8FDB\uFF09\uFF1A
${feedback}` : "";
    let style = "";
    const sfp = this.settings.styleProfileFile && this.app.vault.getAbstractFileByPath((0, import_obsidian.normalizePath)(this.settings.styleProfileFile));
    if (sfp instanceof import_obsidian.TFile) {
      style = `

\u4F5C\u8005\u4E2A\u4EBA\u98CE\u683C\u753B\u50CF\uFF08\u5199\u4F5C\u5FC5\u987B\u4E25\u683C\u8D34\u5408\uFF0C\u5C24\u5176\u6807\u5FD7\u6027\u53E5\u5F0F\u4E0E\u53CD\u9762\u6E05\u5355\uFF09\uFF1A
${(await this.app.vault.cachedRead(sfp)).slice(0, 5e3)}`;
    }
    let gene = "";
    const gfp = this.settings.hotGeneFile && this.app.vault.getAbstractFileByPath((0, import_obsidian.normalizePath)(this.settings.hotGeneFile));
    if (gfp instanceof import_obsidian.TFile) {
      gene = `

\u7ECF\u771F\u5B9E\u8BFB\u8005\u6570\u636E\u9A8C\u8BC1\u7684\u300C\u7206\u6B3E\u57FA\u56E0\u300D\uFF08\u65B0\u7A3F\u5C3D\u91CF\u8E29\u4E2D\u8FD9\u4E9B\u5DF2\u88AB\u8F6C\u53D1\u9A8C\u8BC1\u7684\u7206\u70B9\uFF09\uFF1A
${(await this.app.vault.cachedRead(gfp)).slice(0, 3e3)}`;
    }
    const extg = await this.loadExtGene(2500);
    if (extg) gene += `

\u884C\u4E1A 10\u4E07+ \u9A8C\u8BC1\u7684\u300C\u5916\u90E8\u7206\u6B3E\u57FA\u56E0\u300D\uFF08\u5F15\u5BFC\u671F\u53C2\u8003,\u4E0E\u4F5C\u8005\u771F\u5B9E\u6570\u636E\u51B2\u7A81\u65F6\u4EE5\u540E\u8005\u4E3A\u51C6\uFF09\uFF1A
${extg}`;
    let exp = "";
    try {
      const kws2 = Array.isArray(fm.keywords) && fm.keywords.length ? fm.keywords : [fm.topic];
      const snips = await this.gatherExperiences(kws2, fm.topic);
      if (snips.length) {
        exp = `

\u4F5C\u8005\u771F\u5B9E\u7ECF\u5386\u7247\u6BB5\uFF08\u7B2C\u4E00\u4EBA\u79F0\u6545\u4E8B\u53EA\u80FD\u4ECE\u8FD9\u91CC\u53D6\u6750\uFF1A\u53EF\u6539\u5199\u6DA6\u8272\u3001\u53EF\u7701\u7565\uFF0C\u4F46\u4E0D\u5F97\u865A\u6784\u65B0\u7ECF\u5386\uFF09\uFF1A
${snips.map((s) => `- [${s.src}] ${s.para.slice(0, 400)}`).join("\n")}`;
      }
    } catch (e) {
    }
    const sysW = await this.loadPrompt("draft-writer");
    const userBase = `\u6D41\u6C34\u7EBF\u5361\uFF1A
${card}

\u7D20\u6750\u5305\uFF1A
${pack}${style}${gene}${exp}${fb}`;
    const nSamples = feedback ? 1 : Math.max(1, Math.min(3, Number(this.settings.draftSamples) || 1));
    let r;
    if (nSamples >= 2) {
      new import_obsidian.Notice(`\u{1F3B2} Best-of-${nSamples}\uFF1A\u5E76\u884C\u751F\u6210 ${nSamples} \u7248\u521D\u7A3F\uFF0C\u8BC4\u59D4\u9009\u4F18\u2026`);
      const variants = [
        userBase,
        userBase + "\n\n\u3010\u672C\u7248\u7279\u6B8A\u8981\u6C42\u3011\u6362\u4E00\u4E2A\u5B8C\u5168\u4E0D\u540C\u7684\u5207\u5165\u89D2\u5EA6\u3001\u5F00\u5934\u94A9\u5B50\u548C\u6587\u7AE0\u7ED3\u6784\uFF0C\u4E0E\u5E38\u89C4\u5199\u6CD5\u5F62\u6210\u5BF9\u7167\u3002",
        userBase + "\n\n\u3010\u672C\u7248\u7279\u6B8A\u8981\u6C42\u3011\u4EE5\u4E00\u6BB5\u771F\u5B9E\u4E2A\u4EBA\u7ECF\u5386\u6216\u5177\u4F53\u573A\u666F\u5168\u7A0B\u8D2F\u7A7F\u6210\u53D9\u4E8B\u4E3B\u7EBF\u6765\u5199\u3002"
      ].slice(0, nSamples);
      const gens = (await Promise.all(variants.map(
        (u) => this.llmChatMessages(sysW, [{ role: "user", content: u }], Math.max(4e3, this.settings.aiMaxTokens), this.settings.tempWriter).catch(() => null)
      ))).filter(Boolean);
      if (!gens.length) throw new Error("\u521D\u7A3F\u91C7\u6837\u5168\u90E8\u5931\u8D25");
      let bestIdx = 0, bestScore = -1;
      const scores = [];
      for (let gi = 0; gi < gens.length; gi++) {
        let t = -1;
        try {
          t = (await this.gtmReview(gens[gi].text)).total || 0;
        } catch (e) {
        }
        scores.push(t);
        if (t > bestScore) {
          bestScore = t;
          bestIdx = gi;
        }
      }
      r = gens[bestIdx];
      await this.appendToNote(file, `
> \u{1F3B2} Best-of-${gens.length} \u521D\u7A3F\u91C7\u6837\uFF1A${scores.map((x, i2) => `${String.fromCharCode(65 + i2)}=${x}`).join(" \xB7 ")} \u2192 \u91C7\u7528 ${String.fromCharCode(65 + bestIdx)} \u7248
`);
    } else {
      r = await this.llmChatMessages(sysW, [{ role: "user", content: userBase }], Math.max(4e3, this.settings.aiMaxTokens), this.settings.tempWriter);
    }
    const date = todayStr();
    const draftPath = `${this.settings.draftsFolder}/${date}-${sanitizeName(fm.topic)}.md`;
    const body = `---
title: ${fm.topic}
status: \u8349\u7A3F
created: ${date}
pipeline: "[[${file.path.replace(/\.md$/, "")}]]"
statusHistory:
  - \u8349\u7A3F@${date}
tags:
  - \u516C\u4F17\u53F7
  - ai-draft
---

> \u26A0\uFE0F AI \u521D\u7A3F\uFF08${r.model}\uFF09\uFF0CTR1 \u8BC4\u5BA1\u524D\u4E0D\u5F97\u5916\u53D1\u3002

${r.text}
`;
    const existed = this.app.vault.getAbstractFileByPath((0, import_obsidian.normalizePath)(draftPath));
    let draft;
    if (existed instanceof import_obsidian.TFile) {
      await this.app.vault.modify(existed, body);
      draft = existed;
    } else draft = await this.ensureFile(draftPath, body);
    await this.app.fileManager.processFrontMatter(file, (f) => {
      f.draft = draft.path;
    });
    if (!feedback) {
      await this.appendToNote(file, `
## \u521D\u7A3F\uFF08TR1 \u95E8\u7981\u6750\u6599\uFF09\xB7 ${date}

- \u521D\u7A3F\u5DF2\u751F\u6210\uFF1A[[${draft.path.replace(/\.md$/, "")}]]\uFF08AI \u4EE3\u7B14\uFF0C\u9700\u4EBA\u5DE5\u91CD\u5199\u5173\u952E\u6BB5\u843D\uFF09
`);
      await this.app.workspace.getLeaf(false).openFile(draft);
      this.stageSummary("\u521D\u7A3F\uFF08TR1\uFF09\u5B8C\u6210", [`\u521D\u7A3F ${r.text.length} \u5B57\uFF1A${draft.path.split("/").pop()}`, "\u5DF2\u6807\u6CE8 AI \u4EE3\u7B14\u8B66\u793A\u5E76\u56DE\u94FE\u6D41\u6C34\u7EBF\u5361", "\u4E0B\u4E00\u6B65\uFF1A\u4EBA\u5DE5\u91CD\u5199\u5173\u952E\u6BB5\u843D \u2192 \u2705 \u8FC7 TR1 \u95E8\u7981"], file);
    }
    return draft;
  }
  /* ---------- v2.5 GTM 评审官（loop engineering 的裁判）---------- */
  async gtmReview(text) {
    let gene2 = "";
    try {
      const gfp3 = this.settings.hotGeneFile && this.app.vault.getAbstractFileByPath((0, import_obsidian.normalizePath)(this.settings.hotGeneFile));
      if (gfp3 instanceof import_obsidian.TFile) gene2 = `

\u3010\u672C\u8D26\u53F7\u8BFB\u8005\u5DF2\u9A8C\u8BC1\u7684\u7206\u6B3E\u57FA\u56E0\u4E0E\u771F\u5B9E\u5F00\u5934\u5BF9\u7167\u2014\u2014\u8BC4\u5206\u4EE5\u6B64\u4E3A\u51C6\u7EF3\uFF0C\u800C\u975E\u901A\u7528\u5BA1\u7F8E\u3011
${(await this.app.vault.cachedRead(gfp3)).slice(0, 3500)}`;
      const extg2 = await this.loadExtGene(2e3);
      if (extg2) gene2 += `

\u3010\u884C\u4E1A 10\u4E07+ \u5916\u90E8\u7206\u6B3E\u57FA\u56E0\uFF0C\u4F5C\u4E3A\u53C2\u8003\u6807\u5C3A\u3011
${extg2}`;
    } catch (e) {
    }
    const r = await this.llmChat(await this.loadPrompt("gtm-review"), String(text).slice(0, 3e4) + gene2, this.settings.tempJudge);
    let raw = r.text.trim().replace(/^```(json)?/i, "").replace(/```$/, "").trim();
    const m = raw.match(/\{[\s\S]*\}/);
    if (!m) throw new Error("GTM \u8BC4\u5BA1\u672A\u8FD4\u56DE\u6709\u6548 JSON");
    const j = JSON.parse(m[0]);
    j.total = Number(j.total) || 0;
    j.pass = j.total >= this.settings.gtmThreshold && j.verdict !== "no-go";
    j.model = r.model;
    return j;
  }
  gtmReport(j) {
    const s = j.scores || {};
    const dims = Object.entries(s).map(([k, v]) => `${k} ${v}`).join(" \xB7 ");
    const fixes = (j.fixes || []).map((f) => `  - ${f}`).join("\n");
    const issues = (j.critical_issues || []).map((i) => `  - ${i}`).join("\n");
    return `**GTM \u603B\u5206 ${j.total}/100 \xB7 \u5224\u5B9A ${j.verdict}**\uFF08\u9608\u503C ${this.settings.gtmThreshold}\uFF09

\u7EF4\u5EA6\uFF1A${dims}

\u81F4\u547D\u95EE\u9898\uFF1A
${issues || "  - \u65E0"}

\u4FEE\u6539\u6307\u4EE4\uFF1A
${fixes || "  - \u65E0"}`;
  }
  /* ---------- v2.5 全自动工作流（Autopilot）---------- */
  async runAutopilot(file) {
    if (this._autopilotBusy) {
      new import_obsidian.Notice("\u5DF2\u6709 Autopilot \u5728\u8FD0\u884C");
      return;
    }
    this._autopilotBusy = true;
    const log = (msg) => this.appendToNote(file, `
> \u{1F916} ${(/* @__PURE__ */ new Date()).toISOString().slice(11, 16)} ${msg}
`);
    try {
      new import_obsidian.Notice("\u{1F916} Autopilot \u542F\u52A8 \u2014 \u5168\u81EA\u52A8\u8DD1\u5230\u53D1\u5E03\u51C6\u5907\uFF0C\u65E0\u9700\u4ECB\u5165");
      await log("Autopilot \u542F\u52A8\u3002\u7B56\u5212\u9636\u6BB5\u81EA\u52A8\u8FC7\u95E8\u7981\uFF1B\u521D\u7A3F\u9636\u6BB5\u8FDB\u5165 GTM \u8BC4\u5BA1\u5FAA\u73AF\uFF08\u4E0D\u8FBE\u6807\u81EA\u52A8\u91CD\u5199\uFF09\uFF1B\u53D1\u5E03\u7559\u7ED9\u4EBA\u3002");
      let guard = 0;
      while (guard++ < 12) {
        const fm = this.fm(file);
        const stage = fm.stage;
        if (stage === "\u53D1\u5E03\u51C6\u5907" || stage === "\u5B8C\u6210") break;
        if (stage === "\u5BA1\u9898") {
          await this.pipeConcept(file, fm);
          await this.gatePassAuto(file);
          await log("\u5BA1\u9898(CDCP) \u81EA\u52A8\u901A\u8FC7");
        } else if (stage === "\u8BA1\u5212") {
          await this.pipePlan(file, fm);
          await this.gatePassAuto(file);
          await log("\u8BA1\u5212(PDCP) \u81EA\u52A8\u901A\u8FC7");
        } else if (stage === "\u521D\u7A3F") {
          const max = this.settings.autopilotMaxRetries;
          let passed = false, lastReport = "", feedback = "";
          for (let attempt = 0; attempt <= max; attempt++) {
            const draft = await this.pipeDraft(file, this.fm(file), feedback);
            const body = (await this.app.vault.read(draft)).replace(/^---[\s\S]*?---/, "");
            const j = await this.gtmReview(body);
            lastReport = this.gtmReport(j);
            await log(`\u521D\u7A3F\u7B2C ${attempt + 1} \u7A3F \xB7 ${lastReport.split("\n")[0]}`);
            if (j.pass) {
              passed = true;
              break;
            }
            feedback = (j.critical_issues || []).concat(j.fixes || []).join("\uFF1B");
          }
          await this.appendToNote(file, `
## GTM \u8BC4\u5BA1\uFF08TR1\uFF09\xB7 ${todayStr()}

${lastReport}
`);
          if (passed) {
            await this.gatePassAuto(file);
            await log("\u521D\u7A3F GTM \u8FBE\u6807\uFF0CTR1 \u81EA\u52A8\u901A\u8FC7");
          } else {
            await log(`\u521D\u7A3F ${max + 1} \u7A3F\u4ECD\u672A\u8FBE GTM \u9608\u503C\uFF0CAutopilot \u505C\u673A \u2014 \u9700\u4EBA\u5DE5\u4ECB\u5165`);
            await this.notifyAutopilot(`\u26A0\uFE0F ${fm.topic}\uFF1A\u521D\u7A3F GTM \u672A\u8FBE\u6807\uFF0C\u5DF2\u505C\u673A\u5F85\u4EBA\u5DE5`);
            break;
          }
        } else if (stage === "\u7F16\u8F91") {
          await this.pipeEdit(file, this.fm(file));
          if (this.fm(file).draft) {
            const draft = this.app.vault.getAbstractFileByPath((0, import_obsidian.normalizePath)(this.fm(file).draft));
            const body = (await this.app.vault.read(draft)).replace(/^---[\s\S]*?---/, "");
            const j = await this.gtmReview(body);
            await this.appendToNote(file, `
## GTM \u7EC8\u8BC4\uFF08TR2\uFF09\xB7 ${todayStr()}

${this.gtmReport(j)}
`);
            await log(`\u7F16\u8F91\u5B8C\u6210 \xB7 GTM \u7EC8\u8BC4 ${j.total}/100`);
          }
          await this.gatePassAuto(file);
          await log("\u7F16\u8F91(TR2) \u81EA\u52A8\u901A\u8FC7");
        } else break;
      }
      const fmEnd = this.fm(file);
      if (fmEnd.stage === "\u53D1\u5E03\u51C6\u5907") {
        await this.pipePublishPrep(file, fmEnd, true);
        await log("\u5DF2\u5230\u53D1\u5E03\u51C6\u5907\u3002\u5168\u90E8\u4EA7\u7269\u5C31\u7EEA\uFF08\u6B63\u7A3F+\u884D\u751F\u7A3F+\u914D\u56FE\u63D0\u793A\u8BCD\uFF09\u3002**\u6700\u7EC8\u53D1\u5E03\u7559\u7ED9\u4F60**\u2014\u2014AI \u4E0D\u81EA\u52A8\u5BF9\u5916\u53D1\u5E03\u3002");
        await this.notifyAutopilot(`\u2705 ${fmEnd.topic}\uFF1AAutopilot \u5B8C\u6210\uFF0C\u5DF2\u5230\u53D1\u5E03\u51C6\u5907\uFF0C\u7B49\u4F60\u6309\u53D1\u5E03\u952E`);
        new import_obsidian.Notice("\u{1F916} Autopilot \u5B8C\u6210 \u2014 \u5DF2\u5230\u53D1\u5E03\u51C6\u5907\uFF0C\u8BF7\u4EBA\u5DE5\u7EC8\u5BA1\u5E76\u53D1\u5E03");
      }
    } catch (e) {
      await log(`Autopilot \u5F02\u5E38\u505C\u673A\uFF1A${String(e.message).slice(0, 120)}`);
      new import_obsidian.Notice("\u{1F916} Autopilot \u505C\u673A\uFF1A" + e.message, 8e3);
    } finally {
      this._autopilotBusy = false;
      this.refreshDashboards();
    }
  }
  /* 门禁自动通过：复用 gatePass 但不弹排期窗（无人值守）*/
  async gatePassAuto(file) {
    this._silentGate = true;
    try {
      await this.gatePass(file);
    } finally {
      this._silentGate = false;
    }
  }
  async notifyAutopilot(text) {
    const url = this.settings.autopilotWebhook;
    if (!url) return;
    try {
      await (0, import_obsidian.requestUrl)({ url, method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ msg_type: "text", content: { text: "\u3010\u544A\u8B66\u3011" + text } }), throw: false });
    } catch (e) {
    }
  }
  /* ---------- v2.8 无人值守：自动选题→写→审→改→推草稿箱 ---------- */
  async pickTopicAuto() {
    const p = (0, import_obsidian.normalizePath)(this.settings.topicLibraryFile || "");
    const f = p && this.app.vault.getAbstractFileByPath(p);
    if (!(f instanceof import_obsidian.TFile)) throw new Error("\u672A\u914D\u7F6E\u9009\u9898\u5E93\u6587\u4EF6\uFF08\u8BBE\u7F6E\u2192AI \u6D41\u6C34\u7EBF\uFF09");
    const raw = await this.app.vault.read(f);
    const lines = raw.split("\n");
    const cands = [];
    for (let i = 0; i < lines.length; i++) {
      if (/^- \[ \] /.test(lines[i])) cands.push({ i, line: lines[i].slice(6).trim() });
    }
    if (!cands.length) return null;
    const pool = cands.slice(-30);
    let pick = pool[pool.length - 1];
    try {
      const r = await this.llmChat(
        "\u4F60\u662F\u5185\u5BB9\u4E3B\u7F16\u3002\u4ECE\u5019\u9009\u9009\u9898\u4E2D\u9009\u51FA\u4ECA\u5929\u6700\u503C\u5F97\u5199\u7684\u4E00\u6761\uFF1A\u4F18\u5148\u8003\u8651\u65B0\u9C9C\u5EA6\u3001\u4E0E\u8D26\u53F7\u5B9A\u4F4D\uFF08\u81EA\u6108/\u8EAB\u5FC3/\u5065\u8EAB/\u5DE5\u7A0B\u5E08\u89C6\u89D2\u79D1\u666E\uFF09\u7684\u5951\u5408\u5EA6\u3001\u7206\u6B3E\u6F5C\u529B\u3002\u53EA\u8F93\u51FA\u9009\u4E2D\u5019\u9009\u7684\u7F16\u53F7\u6570\u5B57\uFF0C\u7981\u6B62\u8F93\u51FA\u5176\u4ED6\u4EFB\u4F55\u6587\u5B57\u3002",
        pool.map((c, n2) => `${n2 + 1}. ${c.line}`).join("\n")
      );
      const n = parseInt((String(r.text).match(/\d+/) || [])[0], 10);
      if (n >= 1 && n <= pool.length) pick = pool[n - 1];
    } catch (e) {
    }
    lines[pick.i] = lines[pick.i].replace("- [ ]", "- [x]") + ` \u{1F916}${todayStr()}\u5F00\u5DE5`;
    await this.app.vault.modify(f, lines.join("\n"));
    const kws = [...pick.line.matchAll(/#([^\s#]+)/g)].map((m) => m[1]).filter((k) => !k.startsWith("\u4FA6\u5BDF"));
    const title = pick.line.replace(/^\d{4}-\d{2}-\d{2}\s*/, "").replace(/#[^\s#]+/g, "").trim();
    return { title, kws: kws.length ? kws : [title] };
  }
  /* v3.0 批量海选：产一篇但不推送，返回成绩单 */
  async produceOneDraft() {
    const t = await this.pickTopicAuto();
    if (!t) return null;
    new import_obsidian.Notice(`\u270D\uFE0F \u5F00\u5DE5\uFF1A${t.title}`);
    const card = await this.newPipeline(t.title, t.kws);
    if (!card) return { title: t.title, status: "error", score: 0, draft: null };
    await this.runAutoPipeline(card);
    const fm2 = await this.fmDirect(card);
    const draft = fm2.draft && this.app.vault.getAbstractFileByPath((0, import_obsidian.normalizePath)(fm2.draft));
    const dfm = draft instanceof import_obsidian.TFile ? await this.fmDirect(draft) : {};
    return {
      title: t.title,
      draft: draft instanceof import_obsidian.TFile ? draft : null,
      status: dfm.status || fm2.stage || "?",
      score: Number(dfm.gtmScore) || 0
    };
  }
  /* v3.0 每日批量海选：多写、狠评、只发精品（token 管够，宁缺毋滥）*/
  async runDailyBatch(manual) {
    if (this._batchBusy) {
      if (manual) new import_obsidian.Notice("\u6279\u91CF\u6D77\u9009\u5DF2\u5728\u8FD0\u884C");
      return;
    }
    this._batchBusy = true;
    const n = Math.max(1, Number(this.settings.dailyAutoBatch) || 6);
    const elite = Number(this.settings.eliteScore) || 82;
    const results = [];
    try {
      new import_obsidian.Notice(`\u{1F3ED} \u6279\u91CF\u6D77\u9009\u542F\u52A8\uFF1A\u76EE\u6807 ${n} \u7BC7\uFF0C\u7CBE\u54C1\u7EBF ${elite} \u5206`);
      for (let i = 0; i < n; i++) {
        let r = null;
        try {
          r = await this.produceOneDraft();
        } catch (e) {
          results.push({ title: `\u7B2C${i + 1}\u7BC7`, status: "error", score: 0, draft: null, err: String(e.message).slice(0, 60) });
          continue;
        }
        if (!r) {
          new import_obsidian.Notice("\u9009\u9898\u5E93\u5DF2\u6311\u7A7A\uFF0C\u63D0\u524D\u7ED3\u675F");
          break;
        }
        results.push(r);
        new import_obsidian.Notice(`\u{1F3ED} ${i + 1}/${n}\uFF1A\u300A${r.title}\u300B${r.score} \u5206\uFF08${r.status}\uFF09`);
      }
      const elites = results.filter((r) => r.draft && r.status === "\u5F85\u53D1" && r.score >= elite).sort((a, b) => b.score - a.score);
      let pushed = 0;
      if (this.settings.dailyAutoPush) {
        const topN = Math.max(1, Number(this.settings.pushTopN) || 1);
        for (const r of elites.slice(0, topN)) {
          await this.pushWechatDraft(r.draft);
          if (this.fm(r.draft).pushedWechat) pushed++;
        }
      }
      const board = results.slice().sort((a, b) => b.score - a.score).map((r) => `${r.score >= elite ? "\u{1F3C6}" : "\xB7"} ${r.score}\u5206 \u300A${r.title}\u300B`).join("\n");
      const summary = `\u{1F3ED} \u4ECA\u65E5\u6279\u91CF\u6D77\u9009\u5B8C\u6210\uFF1A\u5199 ${results.length} \u7BC7\uFF0C${elites.length} \u7BC7\u8FC7\u7CBE\u54C1\u7EBF\uFF08${elite}\uFF09\uFF0C${this.settings.dailyAutoPush ? `\u6700\u4F18 ${pushed} \u7BC7\u5DF2\u8FDB\u8349\u7A3F\u7BB1\uFF08\u9632\u81EA\u6211\u51B2\u6D41\uFF0C\u5176\u4F59\u7559\u5F85\u53D1\u6C60\uFF09` : "\u672A\u81EA\u52A8\u63A8\u9001"}\u3002\u53D1\u5E03\u8282\u594F\u5EFA\u8BAE\u6BCF\u5468 2-3 \u7BC7\u3001\u7206\u6587\u63A8\u8350\u671F\u4E3B\u52A8\u5EF6\u540E\u3002

\u8BC4\u5206\u699C\uFF1A
${board}

\u672A\u8FBE\u6807\u7684\u7559\u5728\u6D41\u6C34\u7EBF\u5F85\u4EBA\u5DE5\u590D\u770B\u6216\u5F03\u7528\u2014\u2014\u5B81\u7F3A\u6BCB\u6EE5\u3002`;
      await this.notifyAutopilot(summary);
      new import_obsidian.Notice(`\u{1F3ED} \u6D77\u9009\u5B8C\u6210\uFF1A${elites.length}/${results.length} \u7BC7\u8FBE\u6807${this.settings.dailyAutoPush ? `\uFF0C${pushed} \u8FDB\u7BB1` : ""}`, 12e3);
    } catch (e) {
      new import_obsidian.Notice("\u{1F3ED} \u6279\u91CF\u6D77\u9009\u4E2D\u65AD\uFF1A" + e.message, 9e3);
      await this.notifyAutopilot(`\u26A0\uFE0F \u6279\u91CF\u6D77\u9009\u4E2D\u65AD\uFF1A${String(e.message).slice(0, 100)}`);
    } finally {
      this._batchBusy = false;
      this.refreshDashboards();
    }
  }
  async runUnattended(manual) {
    if (this._unattendedBusy) {
      if (manual) new import_obsidian.Notice("\u65E0\u4EBA\u503C\u5B88\u5DF2\u5728\u8FD0\u884C");
      return;
    }
    this._unattendedBusy = true;
    try {
      const t = await this.pickTopicAuto();
      if (!t) {
        if (manual) new import_obsidian.Notice("\u9009\u9898\u5E93\u6CA1\u6709\u672A\u5F00\u5DE5\u7684\u9009\u9898\uFF08- [ ] \u884C\uFF09");
        return;
      }
      new import_obsidian.Notice(`\u{1F319} \u65E0\u4EBA\u503C\u5B88\u5F00\u5DE5\uFF1A${t.title}`);
      const card = await this.newPipeline(t.title, t.kws);
      if (!card) throw new Error("\u6D41\u6C34\u7EBF\u5361\u521B\u5EFA\u5931\u8D25");
      await this.runAutoPipeline(card);
      const fm2 = await this.fmDirect(card);
      const draft = fm2.draft && this.app.vault.getAbstractFileByPath((0, import_obsidian.normalizePath)(fm2.draft));
      const dfm = draft instanceof import_obsidian.TFile ? await this.fmDirect(draft) : {};
      if (draft instanceof import_obsidian.TFile && dfm.status === "\u5F85\u53D1") {
        if (this.settings.dailyAutoPush) {
          await this.pushWechatDraft(draft);
          const pushed = this.fm(draft).pushedWechat;
          await this.notifyAutopilot(pushed ? `\u2705 \u65E0\u4EBA\u503C\u5B88\u5B8C\u6210\uFF1A\u300A${t.title}\u300BGTM ${dfm.gtmScore ?? "?"} \u5206\uFF0C\u5DF2\u8FDB\u516C\u4F17\u53F7\u8349\u7A3F\u7BB1\u2014\u2014\u540E\u53F0\u8FC7\u76EE\u540E\u7FA4\u53D1` : `\u26A0\uFE0F \u65E0\u4EBA\u503C\u5B88\uFF1A\u300A${t.title}\u300B\u7A3F\u5B50\u5199\u5B8C\u4E86\uFF0C\u4F46\u63A8\u8349\u7A3F\u7BB1\u5931\u8D25\uFF0C\u53BB Obsidian \u624B\u52A8\u70B9 \u{1F4EE}`);
        } else {
          await this.notifyAutopilot(`\u2705 \u65E0\u4EBA\u503C\u5B88\u5B8C\u6210\uFF1A\u300A${t.title}\u300BGTM ${dfm.gtmScore ?? "?"} \u5206\uFF0C\u5DF2\u8F6C\u5F85\u53D1\uFF08\u81EA\u52A8\u63A8\u9001\u672A\u5F00\u542F\uFF09`);
        }
      } else {
        await this.notifyAutopilot(`\u26A0\uFE0F \u65E0\u4EBA\u503C\u5B88\uFF1A\u300A${t.title}\u300B\u505C\u5728\u300C${fm2.stage || "?"}\u300D\u672A\u8D70\u5230\u5F85\u53D1\uFF0C\u9700\u4EBA\u5DE5\u770B\u4E00\u773C\uFF08NO-GO \u6216 GTM \u672A\u8FBE\u6807\uFF09`);
      }
    } catch (e) {
      new import_obsidian.Notice("\u{1F319} \u65E0\u4EBA\u503C\u5B88\u4E2D\u65AD\uFF1A" + e.message, 9e3);
      await this.notifyAutopilot(`\u26A0\uFE0F \u65E0\u4EBA\u503C\u5B88\u4E2D\u65AD\uFF1A${String(e.message).slice(0, 100)}`);
    } finally {
      this._unattendedBusy = false;
      this.refreshDashboards();
    }
  }
  async dailyAutoTick() {
    if (!this.settings.dailyAutoEnabled || import_obsidian.Platform.isMobile) return;
    const today = todayStr();
    if (this.settings.lastDailyAuto === today) return;
    if ((/* @__PURE__ */ new Date()).getHours() < Number(this.settings.dailyAutoHour || 0)) return;
    this.settings.lastDailyAuto = today;
    await this.saveSettings();
    await this.runDailyBatch(false);
    try {
      await this.seedHolidayTopics(true);
    } catch (e) {
    }
    if (this.settings.gapReportWeekly) {
      const last = this.settings.lastGapReport || "";
      const days = last ? (Date.parse(today) - Date.parse(last)) / 864e5 : 999;
      if (days >= 7) {
        this.settings.lastGapReport = today;
        await this.saveSettings();
        try {
          await this.buildGapReport(true);
        } catch (e) {
        }
      }
    }
  }
  /* 编辑（TR2）：AI 自检 + 标题候选 */
  async pipeEdit(file, fm) {
    if (!fm.draft) {
      new import_obsidian.Notice("\u8FD8\u6CA1\u6709\u8349\u7A3F\uFF0C\u5148\u8DD1\u300C\u521D\u7A3F\u300D");
      return;
    }
    const draft = this.app.vault.getAbstractFileByPath((0, import_obsidian.normalizePath)(fm.draft));
    if (!(draft instanceof import_obsidian.TFile)) {
      new import_obsidian.Notice("\u8349\u7A3F\u6587\u4EF6\u4E0D\u5B58\u5728\uFF1A" + fm.draft);
      return;
    }
    new import_obsidian.Notice(`\u{1F3ED} \u7F16\u8F91\u5BA1\u7A3F\u4E2D\u2026`);
    const items = await this.loadChecklistItems();
    if (items && items.length) await this.aiSelfCheck(draft, items);
    const content = (await this.app.vault.read(draft)).slice(0, 4e3);
    const r = await this.llmChat(await this.loadPrompt("title-editor"), content);
    const titles = r.text.split("\n").map((x) => x.replace(/^[\d\.\-、\s]+/, "").trim()).filter(Boolean).slice(0, 10);
    if (titles.length) await this.app.fileManager.processFrontMatter(draft, (f) => {
      f.titleCandidates = titles;
    });
    await this.appendToNote(file, `
## \u7F16\u8F91\uFF08TR2 \u95E8\u7981\u6750\u6599\uFF09\xB7 ${todayStr()}

- AI \u81EA\u68C0\u5DF2\u5199\u5165\u8349\u7A3F\u672B\u5C3E\uFF08\u9010\u6761 \u2705/\u26A0\uFE0F/\u274C\uFF09
- \u5019\u9009\u6807\u9898 ${titles.length} \u4E2A\u5DF2\u5B58\u5165\u8349\u7A3F frontmatter\uFF08\u7528\u300C\u6807\u9898\u5DE5\u4F5C\u53F0\u300D\u5B9A\u7A3F\uFF09
`);
    await this.app.workspace.getLeaf(false).openFile(draft);
    this.stageSummary("\u7F16\u8F91\uFF08TR2\uFF09\u5B8C\u6210", ["AI \u81EA\u68C0\u5DF2\u5199\u5165\u8349\u7A3F\u672B\u5C3E\uFF08\u9010\u6761 \u2705/\u26A0\uFE0F/\u274C\uFF09", `\u5019\u9009\u6807\u9898 ${titles.length} \u4E2A\u5DF2\u5165 frontmatter`, "\u4E0B\u4E00\u6B65\uFF1A\u6807\u9898\u5DE5\u4F5C\u53F0\u5B9A\u7A3F \u2192 \u2705 \u8FC7 TR2\uFF08\u8349\u7A3F\u81EA\u52A8\u8F6C\u5F85\u53D1+\u5F39\u6392\u671F\uFF09"], file);
  }
  /* 发布准备（ADCP）：衍生稿 + 发布清单 */
  /* ---------- v3.7 去AI味门禁（结构粉碎+情感微扰，借鉴 AIWriteX 对抗思路）---------- */
  /* v4.12 杠精预判官：预演评论区，提前堵漏 */
  async predictTrolls(file, card, quiet) {
    if (!(file instanceof import_obsidian.TFile)) {
      if (!quiet) new import_obsidian.Notice("\u5148\u6253\u5F00\u6587\u7A3F");
      return;
    }
    const raw = cleanForPublish(await this.app.vault.read(file));
    if (!quiet) new import_obsidian.Notice("\u{1F5EF} \u6760\u7CBE\u9884\u5224\u5B98\u8FDB\u573A\u2026");
    try {
      const r = await this.llmChat(await this.loadPrompt("troll-judge"), raw.slice(0, 9e3), this.settings.tempWriter);
      await this.appendToNote(card || file, `
## \u{1F5EF} \u6760\u7CBE\u9884\u5224\u62A5\u544A \xB7 ${todayStr()}

${r.text}
`);
      new import_obsidian.Notice("\u{1F5EF} \u9884\u5224\u5B8C\u6210\uFF08\u62A5\u544A\u5DF2\u9644\uFF09\u2014\u2014\u53D1\u5E03\u524D\u628A\u300C\u6587\u4E2D\u9884\u57CB\u300D\u7684\u8865\u4E01\u6253\u4E0A", 9e3);
    } catch (e) {
      new import_obsidian.Notice("\u274C \u9884\u5224\u5931\u8D25\uFF1A" + e.message, 8e3);
    }
  }
  /* v4.12 数据可视化师：提取文中数据 → 写作台渲染图表 PNG → 插回原文 */
  async visualizeData(file, quiet) {
    const base = String(this.settings.publishApiUrl || "").replace(/\/$/, "");
    if (!base) {
      new import_obsidian.Notice("\u5148\u914D\u7F6E\u53D1\u5E03 API \u5730\u5740");
      return;
    }
    if (!(file instanceof import_obsidian.TFile)) {
      if (!quiet) new import_obsidian.Notice("\u5148\u6253\u5F00\u6587\u7A3F");
      return;
    }
    const raw = await this.app.vault.read(file);
    const body = cleanForPublish(raw);
    if (!quiet) new import_obsidian.Notice("\u{1F4CA} \u6570\u636E\u53EF\u89C6\u5316\u5E08\u8BFB\u7A3F\u4E2D\u2026");
    let charts;
    try {
      const r = await this.llmChat(await this.loadPrompt("data-viz"), body.slice(0, 8e3), this.settings.tempJudge);
      const jt = r.text.replace(/^```(json)?/i, "").replace(/```$/, "").trim();
      charts = (JSON.parse(jt.slice(jt.indexOf("{"), jt.lastIndexOf("}") + 1)).charts || []).slice(0, 3);
    } catch (e) {
      new import_obsidian.Notice("\u274C \u6570\u636E\u63D0\u53D6\u5931\u8D25\uFF1A" + e.message, 8e3);
      return;
    }
    if (!charts.length) {
      new import_obsidian.Notice("\u{1F4CA} \u6587\u4E2D\u6CA1\u6709\u503C\u5F97\u53EF\u89C6\u5316\u7684\u6570\u636E\u7EC4");
      return;
    }
    const title = String(this.fm(file).title || file.basename).replace(/^\d{4}-\d{2}-\d{2}-/, "");
    const slug = sanitizeName(title).slice(0, 30);
    const theme = detectTheme({ theme: this.fm(file).theme, tags: this.fm(file).tags, title });
    const origin = base.replace(/\/wechat$/, "");
    let text = raw, inserted = 0;
    for (let i = 0; i < charts.length; i++) {
      const ch = charts[i];
      try {
        const resp = await (0, import_obsidian.requestUrl)({
          url: `${base}/api/chart`,
          method: "POST",
          throw: false,
          headers: { "content-type": "application/json", "x-writer-token": this.settings.publishToken || "" },
          body: JSON.stringify({ slug, idx: i, theme, title: ch.title, unit: ch.unit, items: ch.items })
        });
        if (resp.status !== 200) continue;
        const img = `

![${ch.title}](${origin}${resp.json.url})
`;
        const anchor = String(ch.insertAfter || "").slice(0, 12);
        const pos = anchor ? text.indexOf(anchor) : -1;
        if (pos > 0) {
          const paraEnd = text.indexOf("\n\n", pos);
          if (paraEnd > 0) {
            text = text.slice(0, paraEnd) + img + text.slice(paraEnd);
            inserted++;
            continue;
          }
        }
        text = text.replace(/\n*$/, "\n") + img;
        inserted++;
      } catch (e) {
      }
    }
    if (inserted) {
      await this.app.vault.modify(file, text);
    }
    new import_obsidian.Notice(`\u{1F4CA} \u5DF2\u751F\u6210\u5E76\u63D2\u5165 ${inserted} \u5F20\u6570\u636E\u56FE\u8868\uFF08\u63A8\u516C\u4F17\u53F7\u65F6\u81EA\u52A8\u4E0A\u4F20\uFF09`, 9e3);
  }
  /* v4.12 首图钩子师：AI 出钩子 → 渲染 2.35:1 首图 → 接管公众号封面位 */
  async makeCoverHook(file, quiet) {
    const base = String(this.settings.publishApiUrl || "").replace(/\/$/, "");
    if (!base) {
      new import_obsidian.Notice("\u5148\u914D\u7F6E\u53D1\u5E03 API \u5730\u5740");
      return;
    }
    if (!(file instanceof import_obsidian.TFile)) {
      if (!quiet) new import_obsidian.Notice("\u5148\u6253\u5F00\u6587\u7A3F");
      return;
    }
    const body = cleanForPublish(await this.app.vault.read(file));
    const title = String(this.fm(file).title || file.basename).replace(/^\d{4}-\d{2}-\d{2}-/, "");
    if (!quiet) new import_obsidian.Notice("\u{1F5BC} \u9996\u56FE\u94A9\u5B50\u5E08\u6784\u601D\u4E2D\u2026");
    let hook;
    try {
      const r = await this.llmChat(await this.loadPrompt("cover-hook"), `\u6807\u9898\uFF1A${title}

\u6B63\u6587\uFF1A
${body.slice(0, 4e3)}`, this.settings.tempWriter);
      const jt = r.text.replace(/^```(json)?/i, "").replace(/```$/, "").trim();
      hook = JSON.parse(jt.slice(jt.indexOf("{"), jt.lastIndexOf("}") + 1));
    } catch (e) {
      new import_obsidian.Notice("\u274C \u94A9\u5B50\u751F\u6210\u5931\u8D25\uFF1A" + e.message, 8e3);
      return;
    }
    const slug = sanitizeName(title).slice(0, 30);
    const theme = detectTheme({ theme: this.fm(file).theme, tags: this.fm(file).tags, title });
    try {
      const resp = await (0, import_obsidian.requestUrl)({
        url: `${base}/api/cover`,
        method: "POST",
        throw: false,
        headers: { "content-type": "application/json", "x-writer-token": this.settings.publishToken || "" },
        body: JSON.stringify({ slug, theme, hook: hook.hook, sub: hook.sub })
      });
      if (resp.status !== 200) throw new Error("API " + resp.status);
      const origin = base.replace(/\/wechat$/, "");
      await this.app.fileManager.processFrontMatter(file, (f) => {
        f.coverSlug = resp.json.slug;
      });
      await this.appendToNote(file, `
> \u{1F5BC} \u9996\u56FE\u5DF2\u751F\u6210\uFF08\u63A8\u516C\u4F17\u53F7\u65F6\u81EA\u52A8\u4F5C\u4E3A\u5C01\u9762\uFF09\uFF1A\u300C${hook.hook}\u300D
> ![\u9996\u56FE](${origin}${resp.json.url})
`);
      new import_obsidian.Notice(`\u{1F5BC} \u9996\u56FE\u5C31\u4F4D\uFF1A\u300C${hook.hook} / ${hook.sub}\u300D\u2014\u2014\u63A8\u9001\u65F6\u81EA\u52A8\u63A5\u7BA1\u5C01\u9762\u4F4D`, 9e3);
    } catch (e) {
      new import_obsidian.Notice("\u274C \u9996\u56FE\u6E32\u67D3\u5931\u8D25\uFF1A" + e.message, 8e3);
    }
  }
  /* v4.11 排版设计师：AI 读稿自动插入 ::: 组件标记（金句/数据/步骤/警示）*/
  async designLayout(file, quiet) {
    if (!(file instanceof import_obsidian.TFile)) {
      if (!quiet) new import_obsidian.Notice("\u5148\u6253\u5F00\u8981\u6392\u7248\u7684\u6587\u7A3F");
      return;
    }
    const raw = await this.app.vault.read(file);
    const fmEnd = raw.indexOf("---", 4);
    const head = fmEnd > 0 ? raw.slice(0, fmEnd + 3) : "";
    const body = fmEnd > 0 ? raw.slice(fmEnd + 3) : raw;
    if (body.includes(":::")) {
      if (!quiet) new import_obsidian.Notice("\u672C\u7A3F\u5DF2\u6709\u6392\u7248\u7EC4\u4EF6\uFF08\u542B :::\uFF09\uFF0C\u8DF3\u8FC7");
      return;
    }
    if (!quiet) new import_obsidian.Notice("\u{1F3A8} \u6392\u7248\u8BBE\u8BA1\u5E08\u8BFB\u7A3F\u4E2D\u2026");
    let r;
    try {
      r = await this.llmChatMessages(
        await this.loadPrompt("layout-designer"),
        [{ role: "user", content: body.slice(0, 9e3) }],
        Math.max(4500, this.settings.aiMaxTokens),
        this.settings.tempReviser
      );
    } catch (e) {
      new import_obsidian.Notice("\u274C \u6392\u7248\u5931\u8D25\uFF1A" + e.message, 8e3);
      return;
    }
    await this.app.vault.modify(file, head + (head ? "\n\n" : "") + r.text.trim() + "\n");
    new import_obsidian.Notice("\u{1F3A8} \u6392\u7248\u5B8C\u6210\uFF1A\u5DF2\u63D2\u5165\u7EC4\u4EF6\u6807\u8BB0\uFF08\u63A8\u9001\u516C\u4F17\u53F7\u65F6\u6E32\u67D3\u6210\u91D1\u53E5\u5361/\u6570\u636E\u5361/\u6B65\u9AA4/\u8B66\u793A\u6846\uFF09", 9e3);
    if (!quiet && file instanceof import_obsidian.TFile) await this.app.workspace.getLeaf(false).openFile(file);
  }
  /* v4.10 事实核查专家（含医疗合规红线）——养生健康内容的可信+合规双保险 */
  async factCheckDraft(file, card, quiet) {
    if (!(file instanceof import_obsidian.TFile)) {
      if (!quiet) new import_obsidian.Notice("\u5148\u6253\u5F00\u8981\u6838\u67E5\u7684\u6587\u7A3F");
      return null;
    }
    const raw = cleanForPublish(await this.app.vault.read(file));
    if (raw.length < 100) {
      if (!quiet) new import_obsidian.Notice("\u6B63\u6587\u592A\u77ED\uFF0C\u65E0\u9700\u6838\u67E5");
      return null;
    }
    const risky = scanRiskyClaims(raw);
    if (!quiet) new import_obsidian.Notice(`\u{1F50E} \u4E8B\u5B9E\u6838\u67E5\u4E2D\u2026${risky.length ? `\uFF08\u786C\u626B\u63CF\u5DF2\u547D\u4E2D ${risky.length} \u4E2A\u9AD8\u5371\u8BCD\uFF09` : ""}`);
    let ai = "";
    try {
      const r = await this.llmChat(await this.loadPrompt("fact-check"), raw.slice(0, 9e3), this.settings.tempJudge);
      ai = r.text;
    } catch (e) {
      ai = "\uFF08AI \u6838\u67E5\u5931\u8D25\uFF1A" + String(e.message).slice(0, 80) + "\uFF09";
    }
    const scanLine = risky.length ? `> \u{1F6A8} \u786C\u626B\u63CF\u547D\u4E2D ${risky.length} \u4E2A\u8FDD\u7981/\u9AD8\u5371\u8BCD\uFF1A${risky.map((h) => `${h.word}(${h.cat})`).join("\u3001")} \u2014\u2014 \u53D1\u5E03\u524D\u52A1\u5FC5\u6539\u6389
` : "> \u2705 \u786C\u626B\u63CF\u672A\u547D\u4E2D\u660E\u786E\u8FDD\u7981\u8BCD\n";
    const report = `
## \u{1F50E} \u4E8B\u5B9E\u6838\u67E5\u62A5\u544A \xB7 ${todayStr()}

${scanLine}
${ai}
`;
    await this.appendToNote(card || file, report);
    new import_obsidian.Notice(risky.length ? `\u{1F50E} \u6838\u67E5\u5B8C\u6210 \xB7 \u26A0\uFE0F ${risky.length} \u4E2A\u8FDD\u7981\u8BCD\u5F85\u6539\uFF08\u89C1\u62A5\u544A\uFF09` : "\u{1F50E} \u6838\u67E5\u5B8C\u6210 \xB7 \u65E0\u786C\u4F24\uFF08\u8BE6\u89C1\u62A5\u544A\uFF09", 9e3);
    return { risky: risky.length };
  }
  async deAiPass(draft, card, manual) {
    if (!(draft instanceof import_obsidian.TFile)) {
      if (manual) new import_obsidian.Notice("\u5148\u6253\u5F00\u8981\u4F53\u68C0\u7684\u6587\u7A3F");
      return null;
    }
    const raw = await this.app.vault.read(draft);
    const body = raw.replace(/^---[\s\S]*?---\n/, "");
    const before = aiFlavorScore(body);
    const max = Number(this.settings.aiFlavorMax) || 35;
    if (before.score <= max) {
      if (manual) new import_obsidian.Notice(`\u{1F9F9} AI\u5473\u4F53\u68C0 ${before.score} \u5206\uFF08\u2264${max}\uFF0C\u50CF\u4EBA\u5199\u7684\uFF0C\u514D\u6D17\uFF09`);
      if (card) await this.appendToNote(card, `
> \u{1F9F9} \u53BBAI\u5473\u4F53\u68C0\uFF1A${before.score} \u5206\uFF08\u2264${max}\uFF0C\u514D\u6D17\uFF09
`);
      return before;
    }
    new import_obsidian.Notice(`\u{1F9F9} AI\u5473 ${before.score} \u5206\uFF08${before.hits.join("\u3001")}\uFF09\uFF0C\u4EBA\u5473\u6CE8\u5165\u4E2D\u2026`);
    const r = await this.llmChatMessages(
      await this.loadPrompt("de-ai"),
      [{ role: "user", content: `\u68C0\u6D4B\u5230\u7684AI\u5473\u7279\u5F81\uFF1A${before.hits.join("\uFF1B")}

\u5168\u6587\uFF1A
${body.slice(0, 3e4)}` }],
      Math.max(4500, this.settings.aiMaxTokens),
      this.settings.tempReviser
    );
    await this.app.vault.process(draft, (cur) => {
      const fmEnd = cur.indexOf("---", 4);
      const head = fmEnd > 0 ? cur.slice(0, fmEnd + 3) : "";
      return head + "\n\n" + r.text + "\n";
    });
    const after = aiFlavorScore(r.text);
    if (card) await this.appendToNote(card, `
> \u{1F9F9} \u53BBAI\u5473\u95E8\u7981\uFF1A${before.score} \u2192 ${after.score} \u5206\uFF08\u89E6\u53D1\u70B9\uFF1A${before.hits.join("\u3001")}\uFF09
`);
    new import_obsidian.Notice(`\u{1F9F9} \u53BBAI\u5473\u5B8C\u6210\uFF1A${before.score} \u2192 ${after.score} \u5206`);
    return after;
  }
  /* ---------- v2.7 一键推送公众号草稿箱（经自愈写作台 API）---------- */
  cleanForPublish(raw) {
    return cleanForPublish(raw);
  }
  /* v4.8 视频号口播脚本：一鱼多吃第三路 */
  async generateVideoScript(file, quiet) {
    const fm = this.fm(file);
    let src = file;
    if (fm.derivedFrom) {
      const m = String(fm.derivedFrom).replace(/^\[\[|\]\]$/g, "");
      const d = this.app.vault.getAbstractFileByPath((0, import_obsidian.normalizePath)(m.endsWith(".md") ? m : m + ".md"));
      if (d instanceof import_obsidian.TFile) src = d;
    }
    const raw = cleanForPublish(await this.app.vault.read(src));
    const title = String(this.fm(src).title || src.basename).replace(/^\d{4}-\d{2}-\d{2}-/, "");
    if (!quiet) new import_obsidian.Notice("\u{1F3AC} \u751F\u6210\u89C6\u9891\u53F7\u53E3\u64AD\u811A\u672C\u2026");
    const r = await this.llmChat(
      await this.loadPrompt("video-script"),
      `\u6807\u9898\uFF1A${title}

\u6B63\u6587\uFF1A
${raw.slice(0, 6e3)}`,
      this.settings.tempWriter
    );
    const p = `${this.settings.draftsFolder}/${src.basename}-\u89C6\u9891\u53F7\u811A\u672C.md`;
    const body = `---
title: ${title}\uFF08\u89C6\u9891\u53F7\u811A\u672C\uFF09
status: \u8349\u7A3F
created: ${todayStr()}
derivedFrom: "[[${src.path.replace(/\.md$/, "")}]]"
tags:
  - \u89C6\u9891\u53F7
  - ai-draft
---

${r.text}
`;
    const ex = this.app.vault.getAbstractFileByPath((0, import_obsidian.normalizePath)(p));
    let f;
    if (ex instanceof import_obsidian.TFile) {
      await this.app.vault.modify(ex, body);
      f = ex;
    } else f = await this.ensureFile(p, body);
    new import_obsidian.Notice(`\u{1F3AC} \u89C6\u9891\u53F7\u811A\u672C\u5DF2\u751F\u6210\uFF1A${title}`);
    if (!quiet && f instanceof import_obsidian.TFile) await this.app.workspace.getLeaf(false).openFile(f);
    return f;
  }
  /* v4.8 公众号图文（小绿书）：复用小红书卡片图推草稿箱 */
  async pushWechatNewspic(file) {
    const base = String(this.settings.publishApiUrl || "").replace(/\/$/, "");
    if (!base) {
      new import_obsidian.Notice("\u5148\u5728 \u8BBE\u7F6E\u2192\u53D1\u5E03 \u914D\u7F6E\u53D1\u5E03 API \u5730\u5740");
      return;
    }
    const raw = await this.app.vault.read(file);
    const info = parseXhsPublishInfo(raw);
    if (!info.folder) {
      new import_obsidian.Notice("\u672C\u7A3F\u8FD8\u6CA1\u6709\u56FE\u6587\u5361\u2014\u2014\u5148\u70B9 \u{1F3A8} \u751F\u6210\u5C0F\u7EA2\u4E66\u56FE\u6587\u5361");
      return;
    }
    const slug = info.folder.split("/").pop();
    const title = (info.title || String(this.fm(file).title || file.basename).replace(/^\d{4}-\d{2}-\d{2}-/, "")).slice(0, 60);
    new import_obsidian.Notice("\u{1F7E2} \u63A8\u9001\u516C\u4F17\u53F7\u56FE\u6587\uFF08\u5C0F\u7EFF\u4E66\uFF09\u2026");
    try {
      const resp = await (0, import_obsidian.requestUrl)({
        url: `${base}/api/wechat/newspic`,
        method: "POST",
        throw: false,
        headers: { "content-type": "application/json", "x-writer-token": this.settings.publishToken || "" },
        body: JSON.stringify({ slug, title, caption: info.caption || "" })
      });
      if (resp.status !== 200) throw new Error(`API ${resp.status}: ${String(resp.text).slice(0, 140)}`);
      new import_obsidian.Notice(`\u{1F7E2} \u5DF2\u8FDB\u516C\u4F17\u53F7\u8349\u7A3F\u7BB1\uFF08\u56FE\u6587 ${resp.json?.images || ""} \u56FE\uFF09\u2014\u2014\u540E\u53F0\u8FC7\u76EE\u540E\u53D1\u5E03`, 1e4);
    } catch (e) {
      new import_obsidian.Notice("\u274C \u56FE\u6587\u63A8\u9001\u5931\u8D25\uFF1A" + e.message, 9e3);
    }
  }
  /* v4.6 小红书半自动发布：Playwright 自动传图填单，发布永远人工点 */
  spawnXhsPublisher(extraArgs) {
    if (!import_obsidian.Platform.isDesktop) {
      new import_obsidian.Notice("\u534A\u81EA\u52A8\u53D1\u5E03\u4EC5\u652F\u6301\u684C\u9762\u7AEF");
      return false;
    }
    const script = String(this.settings.xhsPublishScript || "").trim();
    if (!script) {
      new import_obsidian.Notice("\u5148\u5728 \u8BBE\u7F6E\u2192\u53D1\u5E03 \u914D\u7F6E\u586B\u5355\u673A\u811A\u672C\u8DEF\u5F84");
      return false;
    }
    try {
      const cp = require("child_process");
      cp.spawn("/usr/bin/python3", [script, ...extraArgs], { detached: true, stdio: "ignore" }).unref();
      return true;
    } catch (e) {
      new import_obsidian.Notice("\u274C \u62C9\u8D77\u586B\u5355\u673A\u5931\u8D25\uFF1A" + e.message, 8e3);
      return false;
    }
  }
  async publishXhsSemiAuto(file) {
    const raw = await this.app.vault.read(file);
    const info = parseXhsPublishInfo(raw);
    if (!info.folder) {
      new import_obsidian.Notice("\u672C\u7A3F\u8FD8\u6CA1\u6709\u56FE\u6587\u5361\u2014\u2014\u5148\u70B9 \u{1F3A8} \u751F\u6210\u5C0F\u7EA2\u4E66\u56FE\u6587\u5361");
      return;
    }
    const title = (info.title || String(this.fm(file).title || file.basename).replace(/^\d{4}-\d{2}-\d{2}-/, "")).slice(0, 20);
    const basePathAbs = this.app.vault.adapter.basePath;
    const capRel = (0, import_obsidian.normalizePath)(`${info.folder}/\u53D1\u5E03\u6587\u6848.txt`);
    await this.app.vault.adapter.write(capRel, info.caption || "");
    const args = ["--dir", `${basePathAbs}/${info.folder}`, "--title", title, "--caption-file", `${basePathAbs}/${capRel}`];
    if (this.spawnXhsPublisher(args)) {
      new import_obsidian.Notice("\u{1F680} \u586B\u5355\u673A\u5DF2\u542F\u52A8\uFF1A\u6D4F\u89C8\u5668\u4F1A\u81EA\u52A8\u4F20\u56FE\u3001\u586B\u6807\u9898\u6587\u6848\u8BDD\u9898\u2014\u2014\u68C0\u67E5\u65E0\u8BEF\u540E\u4F60\u81EA\u5DF1\u70B9\u300C\u53D1\u5E03\u300D", 12e3);
    }
  }
  /* v4.5 小红书图文卡：AI 把稿子提炼成 deck → 写作台渲染 PNG → 下载进库 */
  async generateXhsCards(file) {
    const base = String(this.settings.publishApiUrl || "").replace(/\/$/, "");
    if (!base) {
      new import_obsidian.Notice("\u5148\u5728 \u8BBE\u7F6E\u2192\u53D1\u5E03 \u914D\u7F6E\u53D1\u5E03 API \u5730\u5740");
      return;
    }
    const fm = this.fm(file);
    let src = file;
    if (fm.derivedFrom) {
      const m = String(fm.derivedFrom).replace(/^\[\[|\]\]$/g, "");
      const d = this.app.vault.getAbstractFileByPath((0, import_obsidian.normalizePath)(m.endsWith(".md") ? m : m + ".md"));
      if (d instanceof import_obsidian.TFile) src = d;
    }
    const raw = cleanForPublish(await this.app.vault.read(src));
    const title = String(this.fm(src).title || src.basename).replace(/^\d{4}-\d{2}-\d{2}-/, "");
    new import_obsidian.Notice("\u{1F3A8} AI \u63D0\u70BC\u5C0F\u7EA2\u4E66\u5361\u7247\u6587\u6848\u2026");
    let deck;
    try {
      const r = await this.llmChat(
        '\u4F60\u662F\u5C0F\u7EA2\u4E66\u56FE\u6587\u5361\u7F16\u8F91\u3002\u628A\u6587\u7AE0\u63D0\u70BC\u6210\u4E00\u5957\u53EF\u89C6\u5316\u5361\u7247\u7684\u7ED3\u6784\u5316 JSON\u3002\u4E25\u683C\u53EA\u8F93\u51FA JSON\uFF0C\u4E0D\u8981\u4EFB\u4F55\u89E3\u91CA\u6216\u4EE3\u7801\u5757\u6807\u8BB0\uFF0C\u683C\u5F0F\uFF1A{"cover":{"title":"\u226410\u5B57\u7684\u7206\u70B9\u4E3B\u6807\u9898","hook":"\u226422\u5B57\u526F\u6807\u9898\u94A9\u5B50"},"cards":[{"heading":"\u226413\u5B57\u5C0F\u6807\u9898","lines":["\u226419\u5B57\u8981\u70B9","\u226419\u5B57\u8981\u70B9"]}],"end":{"golden":"\u226418\u5B57\u91D1\u53E5","cta":"\u226416\u5B57\u5173\u6CE8\u5F15\u5BFC"},"caption":"100-200\u5B57\u5C0F\u7EA2\u4E66\u6B63\u6587\u6587\u6848\uFF0C\u53E3\u8BED\u5E261-2\u4E2Aemoji\uFF0C\u7ED3\u5C3E\u5E26\u4E92\u52A8\u63D0\u95EE","tags":["5-8\u4E2A\u8BDD\u9898\u8BCD\uFF0C\u4E0D\u5E26#\u53F7"]}\u3002cards 3-6 \u5F20\uFF0C\u6BCF\u5F20 lines 2-3 \u6761\uFF0C\u53E3\u8BED\u3001\u5177\u4F53\u3001\u6709\u753B\u9762\u3002',
        `\u6807\u9898\uFF1A${title}

\u6B63\u6587\uFF1A
${raw.slice(0, 6e3)}`,
        this.settings.tempWriter
      );
      const jtext = r.text.replace(/^```(json)?/i, "").replace(/```$/, "").trim();
      deck = JSON.parse(jtext.slice(jtext.indexOf("{"), jtext.lastIndexOf("}") + 1));
    } catch (e) {
      new import_obsidian.Notice("\u274C AI \u63D0\u70BC\u5361\u7247\u5931\u8D25\uFF1A" + e.message, 8e3);
      return;
    }
    if (!deck.cover || !Array.isArray(deck.cards) || !deck.cards.length) {
      new import_obsidian.Notice("\u274C \u5361\u7247\u7ED3\u6784\u4E0D\u5B8C\u6574");
      return;
    }
    const theme = detectTheme({ theme: this.fm(src).theme, tags: this.fm(src).tags, title });
    const slug = sanitizeName(title).slice(0, 30);
    new import_obsidian.Notice("\u{1F3A8} \u6E32\u67D3\u5361\u7247\u56FE\u4E2D\u2026");
    let res;
    try {
      const resp = await (0, import_obsidian.requestUrl)({
        url: `${base}/api/xhs/cards`,
        method: "POST",
        throw: false,
        headers: { "content-type": "application/json", "x-writer-token": this.settings.publishToken || "" },
        body: JSON.stringify({ theme, slug, deck })
      });
      if (resp.status !== 200) throw new Error(`API ${resp.status}: ${String(resp.text).slice(0, 120)}`);
      res = resp.json;
    } catch (e) {
      new import_obsidian.Notice("\u274C \u6E32\u67D3\u5931\u8D25\uFF1A" + e.message, 9e3);
      return;
    }
    const folder = `${this.settings.xhsCardFolder}/${slug}`;
    await this.ensureFolder(folder);
    const origin = base.replace(/\/wechat$/, "");
    let saved = 0;
    for (let i = 0; i < res.urls.length; i++) {
      try {
        const img = await (0, import_obsidian.requestUrl)({ url: origin + res.urls[i], throw: false });
        if (img.status === 200 && img.arrayBuffer) {
          await this.app.vault.adapter.writeBinary((0, import_obsidian.normalizePath)(`${folder}/card-${i}.png`), img.arrayBuffer);
          saved++;
        }
      } catch (e) {
      }
    }
    const capBlock = deck.caption ? `
## \u{1F4CB} \u53D1\u5E03\u6587\u6848\uFF08\u590D\u5236\u5373\u7528\uFF09

**\u6807\u9898**\uFF1A${deck.cover.title}

${deck.caption}

${(deck.tags || []).map((t) => "#" + t).join(" ")}
` : "";
    const note = `

## \u{1F3A8} \u56FE\u6587\u5361\uFF08${saved} \u5F20\uFF0C\u53EF\u76F4\u63A5\u5B58\u56FE\u53D1\u5E03\uFF09

` + Array.from({ length: saved }, (_, i) => `![[${folder}/card-${i}.png]]`).join("\n") + "\n" + capBlock;
    await this.appendToNote(file, note);
    new import_obsidian.Notice(`\u{1F3A8} \u5C0F\u7EA2\u4E66\u5361\u7247\u5DF2\u751F\u6210\uFF1A${saved} \u5F20 \u2192 ${folder}\uFF08\u5DF2\u5D4C\u5165\u672C\u7A3F\uFF0C\u624B\u673A\u5B58\u56FE\u5373\u53EF\u53D1\uFF09`, 1e4);
    await this.app.workspace.getLeaf(false).openFile(file);
  }
  async pushWechatDraft(file) {
    const base = String(this.settings.publishApiUrl || "").replace(/\/$/, "");
    if (!base) {
      new import_obsidian.Notice("\u5148\u5728 \u8BBE\u7F6E\u2192\u53D1\u5E03 \u914D\u7F6E\u300C\u53D1\u5E03 API \u5730\u5740\u300D");
      return;
    }
    const fm = this.fm(file);
    let target = file;
    if (fm.draft) {
      const d = this.app.vault.getAbstractFileByPath((0, import_obsidian.normalizePath)(fm.draft));
      if (d instanceof import_obsidian.TFile) target = d;
    }
    const tfm = this.fm(target);
    let markdown = this.cleanForPublish(await this.app.vault.read(target));
    const title = String(tfm.title || target.basename).replace(/^\d{4}-\d{2}-\d{2}-/, "");
    if (markdown.length < 200) {
      new import_obsidian.Notice("\u6B63\u6587\u592A\u77ED\uFF08<200\u5B57\uFF09\uFF0C\u4E0D\u50CF\u53EF\u53D1\u5E03\u7684\u7A3F\u5B50");
      return;
    }
    const dv = checkDiversion(markdown);
    if (dv.length) new import_obsidian.Notice(`\u26A0\uFE0F \u5BFC\u6D41\u98CE\u9669\uFF08\u4F1A\u4E27\u5931\u63A8\u8350\u8D44\u683C\uFF09\uFF1A${dv.join("\u3001")} \u2014 \u5EFA\u8BAE\u6539\u8D70\u300C\u5173\u6CE8\u540E\u81EA\u52A8\u56DE\u590D\u300D\u79C1\u57DF\u8DEF\u5F84`, 12e3);
    if (this.settings.autoIllustrate) {
      new import_obsidian.Notice("\u{1F3A8} \u81EA\u52A8\u914D\u56FE\u4E2D\uFF08MiniMax \u51FA\u5C01\u9762+\u63D2\u56FE\uFF0C\u7EA6 20 \u79D2\uFF09\u2026");
      markdown = await this.illustrateMarkdown(markdown, title);
    }
    new import_obsidian.Notice(`\u{1F4EE} \u63A8\u9001\u8349\u7A3F\u7BB1\uFF1A${title}\u2026`);
    try {
      const resp = await (0, import_obsidian.requestUrl)({
        url: `${base}/api/wechat/draft`,
        method: "POST",
        throw: false,
        headers: { "content-type": "application/json", "x-writer-token": this.settings.publishToken || "" },
        body: JSON.stringify({ title, markdown, coverSlug: tfm.coverSlug || "", theme: detectTheme({ theme: tfm.theme, tags: tfm.tags, keywords: tfm.keywords, title }) })
      });
      if (resp.status !== 200) throw new Error(`API ${resp.status}\uFF1A${String(resp.text).slice(0, 160)}`);
      await this.app.fileManager.processFrontMatter(target, (f) => {
        f.pushedWechat = todayStr();
      });
      new import_obsidian.Notice(`\u2705 \u5DF2\u8FDB\u516C\u4F17\u53F7\u8349\u7A3F\u7BB1\uFF1A${title}\u3002\u53D1\u5E03\u540E 30 \u5206\u949F\u662F\u63A8\u6D41\u5173\u952E\u7A97\u53E3\uFF1A\u8F6C\u53D1\u597D\u53CB/\u7FA4\uFF0C\u5F15\u5BFC\u70B9\u8D5E\xB7\u5728\u770B\xB7\u8BC4\u8BBA`, 12e3);
    } catch (e) {
      new import_obsidian.Notice("\u274C \u63A8\u9001\u5931\u8D25\uFF1A" + e.message, 9e3);
    }
  }
  /* v2.9 全自动配图：MiniMax 文生图（Lovart 无公开 API，全自动线用它兜底）*/
  async generateImage(prompt) {
    const key = this.settings.aiApiKey;
    if (!key) return null;
    try {
      const resp = await (0, import_obsidian.requestUrl)({
        url: "https://api.minimaxi.com/v1/image_generation",
        method: "POST",
        throw: false,
        headers: { "content-type": "application/json", authorization: `Bearer ${key}` },
        body: JSON.stringify({ model: "image-01", prompt: String(prompt).slice(0, 1400), n: 1, aspect_ratio: "16:9" })
      });
      if (resp.status !== 200) return null;
      const urls = resp.json && resp.json.data && resp.json.data.image_urls;
      return urls && urls[0] || null;
    } catch (e) {
      return null;
    }
  }
  async illustrateMarkdown(md, title) {
    const style = this.settings.illustrateStyle || "";
    try {
      const lines = md.split("\n");
      if (/!\[[^\]]*]\(https?:/.test(md)) return md;
      const cover = await this.generateImage(`${title}${style}`);
      const h2idx = [];
      for (let i = 0; i < lines.length; i++) if (/^##\s+/.test(lines[i])) h2idx.push(i);
      const inserts = {};
      let picked = 0;
      for (const idx of h2idx) {
        if (picked >= 2) break;
        const heading = lines[idx].replace(/^##\s+/, "").replace(/[#*`>]/g, "").trim();
        const url = await this.generateImage(`${title}\uFF0C\u672C\u8282\u4E3B\u9898\uFF1A${heading}${style}`);
        if (url) {
          inserts[idx] = `
![${heading}](${url})
`;
          picked++;
        }
      }
      const out = [];
      if (cover) out.push(`![${title}](${cover})
`);
      for (let i = 0; i < lines.length; i++) {
        out.push(lines[i]);
        if (inserts[i]) out.push(inserts[i]);
      }
      return out.join("\n");
    } catch (e) {
      return md;
    }
  }
  async pipePublishPrep(file, fm, auto = false) {
    if (!fm.draft) {
      new import_obsidian.Notice("\u6CA1\u6709\u8349\u7A3F");
      return;
    }
    const draft = this.app.vault.getAbstractFileByPath((0, import_obsidian.normalizePath)(fm.draft));
    if (!(draft instanceof import_obsidian.TFile)) {
      new import_obsidian.Notice("\u8349\u7A3F\u6587\u4EF6\u4E0D\u5B58\u5728");
      return;
    }
    new import_obsidian.Notice("\u{1F3ED} \u53D1\u5E03\u51C6\u5907\uFF1A\u751F\u6210\u884D\u751F\u7A3F\u4E0E\u914D\u56FE\u63D0\u793A\u8BCD\u2026");
    const d1 = await this.deriveDraft(draft, "\u5C0F\u7EA2\u4E66", false);
    const d2 = await this.deriveDraft(draft, "\u7EBF\u7A0B", false);
    try {
      const body4 = (await this.app.vault.read(draft)).slice(0, 3500);
      const rp = await this.llmChat("\u4F60\u662F\u516C\u4F17\u53F7\u914D\u56FE\u6307\u5BFC\u3002\u4E3A\u8FD9\u7BC7\u6587\u7AE0\u751F\u6210\u53EF\u76F4\u63A5\u7C98\u8D34\u5230 Lovart \u7684\u914D\u56FE\u63D0\u793A\u8BCD\uFF1A1 \u4E2A\u5C01\u9762\uFF08\u5BBD\u5E45 2.35:1\uFF0C\u4F53\u73B0\u6807\u9898\u6C14\u8D28\uFF09+ 3 \u4E2A\u6B63\u6587\u63D2\u56FE\uFF08\u5404\u5BF9\u5E94\u4E00\u4E2A\u7AE0\u8282\u8981\u70B9\uFF09\u3002\u6BCF\u6761\u5305\u542B\uFF1A\u753B\u9762\u4E3B\u4F53\u3001\u7EDF\u4E00\u98CE\u683C\u3001\u6784\u56FE\u3001\u8272\u8C03\u3002\u4E2D\u6587\uFF0C\u6BCF\u6761\u72EC\u7ACB\u6210\u6BB5\u3002", body4);
      await this.appendToNote(draft, `
### \u{1F3A8} \u914D\u56FE\u63D0\u793A\u8BCD\uFF08\u7C98\u8D34\u5230 Lovart \u51FA\u56FE\uFF09

${rp.text}

> \u51FA\u56FE\u540E\u628A\u56FE\u7247\u76F4\u63A5\u62D6\u8FDB\u6B63\u7A3F\u76F8\u5E94\u4F4D\u7F6E\u2014\u2014\u63A8\u9001\u8349\u7A3F\u7BB1\u65F6\uFF0C\u5199\u4F5C\u53F0\u4F1A\u81EA\u52A8\u628A\u56FE\u7247\u4E0A\u4F20\u5230\u516C\u4F17\u53F7\u7D20\u6750\u5E93\u3002\u6B64\u7AE0\u8282\u63A8\u9001\u65F6\u4F1A\u81EA\u52A8\u5254\u9664\u3002
`);
    } catch (e) {
    }
    try {
      await this.generateVideoScript(draft, true);
    } catch (e) {
    }
    if (!auto) await this.app.workspace.getLeaf(false).openFile(file);
    this.stageSummary("\u53D1\u5E03\u51C6\u5907\uFF08ADCP\uFF09\u5B8C\u6210", [
      `\u5C0F\u7EA2\u4E66\u7248${d1.created ? "\u5DF2\u751F\u6210" : "\u5DF2\u5B58\u5728"}\uFF1A${d1.path.split("/").pop()}`,
      `\u7EBF\u7A0B\u7248${d2.created ? "\u5DF2\u751F\u6210" : "\u5DF2\u5B58\u5728"}\uFF1A${d2.path.split("/").pop()}`,
      "\u53D1\u5E03\u6E05\u5355\uFF086 \u9879\uFF09\u5DF2\u5199\u5165\u6D41\u6C34\u7EBF\u5361",
      "\u4E0B\u4E00\u6B65\uFF1A\u9010\u9879\u52FE\u9009\u6E05\u5355 \u2192 \u2705 \u8FC7 ADCP \u95E8\u7981\uFF08\u672A\u52FE\u5B8C\u4F1A\u88AB\u62E6\u622A\uFF09"
    ], file);
  }
  /* ---------- v2.5 全自动车道：循环工程（生成→GTM评委→修订循环），人不介入 ---------- */
  async runAutoPipeline(file) {
    if (!this._pipeBusy) this._pipeBusy = /* @__PURE__ */ new Set();
    if (this._pipeBusy.has(file.path)) {
      new import_obsidian.Notice("\u8BE5\u6D41\u6C34\u7EBF\u6B63\u5728\u6267\u884C\u4E2D");
      return;
    }
    this._pipeBusy.add(file.path);
    try {
      const d0 = await this.fmDirect(file);
      const topic = d0.topic || file.basename.replace(/^\d{4}-\d{2}-\d{2}-/, "");
      const fmCache = this.fm(file);
      const kws = Array.isArray(fmCache.keywords) && fmCache.keywords.length ? fmCache.keywords : [topic];
      const date = todayStr();
      let stage = d0.stage || "\u5BA1\u9898";
      const draftPath = d0.draft && d0.draft !== '""' ? d0.draft : `${this.settings.draftsFolder}/${date}-${sanitizeName(topic)}.md`;
      await this.app.fileManager.processFrontMatter(file, (f) => {
        f.mode = "auto";
      });
      const setStage = async (st) => {
        stage = st;
        await this.app.fileManager.processFrontMatter(file, (f) => {
          f.stage = st;
        });
      };
      const autoGate = async (gate, note) => {
        await this.app.fileManager.processFrontMatter(file, (f) => {
          if (!Array.isArray(f.gateLog)) f.gateLog = [];
          f.gateLog.push(`\u{1F916} ${gate}@${date}(${note})`);
        });
      };
      if (stage !== "\u5BA1\u9898") new import_obsidian.Notice(`\u{1F916} \u65AD\u70B9\u7EED\u8DD1\uFF1A\u4ECE\u300C${stage}\u300D\u7EE7\u7EED`);
      if (stage === "\u5BA1\u9898") {
        new import_obsidian.Notice(`\u{1F916} 1/5 \u5BA1\u9898\uFF1A${topic}`);
        await this.pipeConcept(file, { topic, keywords: kws });
        const concl = (await this.app.vault.read(file)).slice(-4e3);
        if (/NO-?GO/i.test(concl) && !/带条件\s*GO/i.test(concl)) {
          await this.appendToNote(file, `
> \u{1F916} \u81EA\u52A8\u6D41\u6C34\u7EBF\u7EC8\u6B62\uFF1ALPDT \u5224\u5B9A NO-GO\uFF08${date}\uFF09\u3002
`);
          new import_obsidian.Notice("\u{1F916} \u5BA1\u9898 NO-GO\uFF0C\u7EC8\u6B62\uFF08\u7701\u4E0B\u751F\u6210\u6210\u672C\uFF09");
          return;
        }
        await autoGate("CDCP", "AI\u5224\u5B9AGO");
        await setStage("\u8BA1\u5212");
      }
      if (stage === "\u8BA1\u5212") {
        new import_obsidian.Notice("\u{1F916} 2/5 \u8BA1\u5212\u2026");
        await this.pipePlan(file, { topic, keywords: kws });
        await autoGate("PDCP", "\u81EA\u52A8\u901A\u8FC7");
        await setStage("\u521D\u7A3F");
      }
      if (stage === "\u521D\u7A3F") {
        const existing = this.app.vault.getAbstractFileByPath((0, import_obsidian.normalizePath)(draftPath));
        if (existing instanceof import_obsidian.TFile) {
          new import_obsidian.Notice("\u{1F916} 3/5 \u521D\u7A3F\u5DF2\u5B58\u5728\uFF0C\u590D\u7528\u5E76\u8FDB\u5165\u8BC4\u5BA1\u5FAA\u73AF");
          await this.app.fileManager.processFrontMatter(file, (f) => {
            f.draft = draftPath;
          });
        } else {
          new import_obsidian.Notice("\u{1F916} 3/5 \u751F\u6210\u521D\u7A3F\u2026\uFF08\u7BC7\u5E45\u957F\u8BF7\u7A0D\u5019\uFF09");
          const dd = await this.fmDirect(file);
          await this.pipeDraft(file, { topic, keywords: kws, materialPack: dd.materialPack });
        }
        const draft = this.app.vault.getAbstractFileByPath((0, import_obsidian.normalizePath)(draftPath));
        if (!(draft instanceof import_obsidian.TFile)) throw new Error("\u521D\u7A3F\u6587\u4EF6\u672A\u751F\u6210");
        const maxIters = this.settings.autoLoopMaxIters;
        const passScore = this.settings.autoLoopPassScore;
        const judgePrompt = await this.loadPrompt("gtm-judge");
        let geneCtx = "";
        try {
          const gfp2 = this.settings.hotGeneFile && this.app.vault.getAbstractFileByPath((0, import_obsidian.normalizePath)(this.settings.hotGeneFile));
          if (gfp2 instanceof import_obsidian.TFile) geneCtx = `

\u3010\u672C\u8D26\u53F7\u8BFB\u8005\u5DF2\u9A8C\u8BC1\u7684\u7206\u6B3E\u57FA\u56E0\u4E0E\u771F\u5B9E\u5F00\u5934\u5BF9\u7167\u2014\u2014\u8BC4\u5206\u4EE5\u6B64\u4E3A\u51C6\u7EF3\uFF0C\u800C\u975E\u901A\u7528\u5BA1\u7F8E\u3011
${(await this.app.vault.cachedRead(gfp2)).slice(0, 3500)}`;
        } catch (e) {
        }
        const revisePrompt = await this.loadPrompt("draft-reviser");
        const charter = (await this.app.vault.read(file)).slice(0, 8e3);
        let finalScore = 0;
        for (let i = 1; i <= maxIters; i++) {
          new import_obsidian.Notice(`\u{1F916} \u5FAA\u73AF\u5DE5\u7A0B \u7B2C${i}\u8F6E\uFF1AGTM \u8BC4\u59D4\u8BC4\u5206\u2026`);
          const body = (await this.app.vault.read(draft)).slice(0, 3e4);
          let judge = await this.llmChatMessages(
            judgePrompt,
            [{ role: "user", content: `\u4F5C\u8005 Charter\uFF1A
${charter}${geneCtx}

\u5F85\u8BC4\u6587\u7AE0\u5168\u6587\uFF1A
${body}` }],
            3e3,
            this.settings.tempJudge
          );
          let sm = judge.text.match(/总分[:：]\s*(\d+)/);
          if (!sm) {
            judge = await this.llmChatMessages(
              judgePrompt + "\n\u518D\u6B21\u5F3A\u8C03\uFF1A\u7B2C\u4E00\u884C\u5FC5\u987B\u662F\u300C\u603B\u5206: \u6570\u5B57\u300D\uFF0C\u4E0D\u5F97\u7701\u7565\u3002",
              [{ role: "user", content: `\u5F85\u8BC4\u6587\u7AE0\u5168\u6587\uFF1A
${body}` }],
              3e3,
              this.settings.tempJudge
            );
            sm = judge.text.match(/总分[:：]\s*(\d+)/);
          }
          finalScore = sm ? parseInt(sm[1], 10) : 0;
          await this.appendToNote(file, `
### \u{1F916} \u5FAA\u73AF\u5DE5\u7A0B \u7B2C${i}\u8F6E \xB7 GTM ${finalScore}/100

${judge.text.slice(0, 1200)}
`);
          if (finalScore >= passScore) {
            new import_obsidian.Notice(`\u{1F916} \u7B2C${i}\u8F6E ${finalScore} \u5206\uFF0C\u8FBE\u6807`);
            break;
          }
          if (i === maxIters) {
            new import_obsidian.Notice(`\u{1F916} ${maxIters} \u8F6E\u540E ${finalScore} \u5206\u672A\u8FBE\u6807\uFF0C\u505C\u6B62`);
            break;
          }
          new import_obsidian.Notice(`\u{1F916} ${finalScore} \u5206\u672A\u8FBE\u6807\uFF0C\u4FEE\u8BA2\u4E2D\u2026`);
          const revised = await this.llmChatMessages(
            revisePrompt,
            [{ role: "user", content: `\u8BC4\u59D4\u610F\u89C1\uFF1A
${judge.text}

\u539F\u6587\u5168\u6587\uFF1A
${(await this.app.vault.read(draft)).slice(0, 3e4)}` }],
            Math.max(4500, this.settings.aiMaxTokens),
            this.settings.tempReviser
          );
          await this.app.vault.process(draft, (cur) => {
            const fmEnd = cur.indexOf("---", 4);
            const head = fmEnd > 0 ? cur.slice(0, fmEnd + 3) : "";
            return head + `

> \u26A0\uFE0F AI \u5168\u81EA\u52A8\u7A3F\uFF08\u5FAA\u73AF\u5DE5\u7A0B\u7B2C${i + 1}\u7248\uFF09\uFF0C\u53D1\u5E03\u524D\u8BF7\u8FC7\u76EE\u3002

` + revised.text + "\n";
          });
        }
        await this.app.fileManager.processFrontMatter(draft, (f) => {
          f.gtmScore = finalScore;
        });
        await autoGate("TR1", `\u5FAA\u73AF\u5DE5\u7A0B ${finalScore} \u5206`);
        if (this.settings.aiFlavorGate) {
          try {
            await this.deAiPass(this.app.vault.getAbstractFileByPath((0, import_obsidian.normalizePath)(draftPath)), file);
          } catch (e) {
          }
        }
        if (this.settings.factCheckGate) {
          try {
            await this.factCheckDraft(this.app.vault.getAbstractFileByPath((0, import_obsidian.normalizePath)(draftPath)), file, true);
          } catch (e) {
          }
        }
        await setStage("\u7F16\u8F91");
      }
      if (stage === "\u7F16\u8F91") {
        new import_obsidian.Notice("\u{1F916} 4/5 \u7F16\u8F91\u2026");
        await this.pipeEdit(file, { topic, draft: draftPath });
        const draft = this.app.vault.getAbstractFileByPath((0, import_obsidian.normalizePath)(draftPath));
        if (draft instanceof import_obsidian.TFile) {
          const cand = this.fm(draft).titleCandidates;
          if (Array.isArray(cand) && cand.length) {
            await this.app.fileManager.processFrontMatter(draft, (f) => {
              f.title = cand[0];
            });
          }
        }
        await autoGate("TR2", "\u81EA\u52A8\u901A\u8FC7");
        await setStage("\u53D1\u5E03\u51C6\u5907");
      }
      if (stage === "\u53D1\u5E03\u51C6\u5907") {
        new import_obsidian.Notice("\u{1F916} 5/5 \u53D1\u5E03\u51C6\u5907\u2026");
        await this.pipePublishPrep(file, { topic, draft: draftPath }, true);
        const draft = this.app.vault.getAbstractFileByPath((0, import_obsidian.normalizePath)(draftPath));
        if (draft instanceof import_obsidian.TFile) {
          await this.app.fileManager.processFrontMatter(draft, (f) => {
            f.status = "\u5F85\u53D1";
            if (!Array.isArray(f.statusHistory)) f.statusHistory = [];
            f.statusHistory.push(`\u5F85\u53D1@${date}`);
          });
          const score = this.fm(draft).gtmScore ?? "?";
          await this.appendToNote(file, `
> \u{1F916} \u5168\u81EA\u52A8\u6D41\u6C34\u7EBF\u5B8C\u6210\uFF08${date}\uFF09\uFF1AGTM ${score} \u5206\u3002\u8349\u7A3F\u5DF2\u8F6C\u5F85\u53D1\u2014\u2014\u53D1\u5E03\u8FD9\u4E2A\u52A8\u4F5C\u6C38\u8FDC\u7559\u7ED9\u4F60\u3002
`);
          new import_obsidian.Notice(`\u{1F916} \u5168\u81EA\u52A8\u5B8C\u6210\uFF1A${topic} \u2192 \u5F85\u53D1`);
          await this.app.workspace.getLeaf(false).openFile(draft);
        }
      }
    } catch (e) {
      const st = (await this.fmDirect(file)).stage || "?";
      new import_obsidian.Notice(`\u{1F916}\u23F8 \u81EA\u52A8\u6D41\u6C34\u7EBF\u5728\u300C${st}\u300D\u4E2D\u65AD\uFF1A${String(e.message).slice(0, 80)}\u3002\u518D\u70B9\u4E00\u6B21 \u{1F916} \u5373\u4ECE\u65AD\u70B9\u7EED\u8DD1`, 12e3);
      await this.appendToNote(file, `
> \u{1F916}\u23F8 \u4E2D\u65AD\u4E8E\u300C${st}\u300D\uFF08${todayStr()}\uFF09\uFF1A${String(e.message).slice(0, 150)}\u2014\u2014\u91CD\u8DD1\u5C06\u4ECE\u6B64\u9636\u6BB5\u7EE7\u7EED\u3002
`);
    } finally {
      this._pipeBusy.delete(file.path);
    }
  }
  async gatePass(file) {
    const fm = this.fm(file);
    const idx = PIPE_STAGES.indexOf(fm.stage);
    if (idx < 0 || fm.stage === "\u5B8C\u6210") {
      new import_obsidian.Notice("\u6CA1\u6709\u53EF\u901A\u8FC7\u7684\u95E8\u7981");
      return;
    }
    const blocked = await this.validateGate(file, fm);
    if (blocked) {
      new import_obsidian.Notice("\u{1F6A6} \u95E8\u7981\u62E6\u622A\uFF1A" + blocked, 6e3);
      return;
    }
    const next = PIPE_STAGES[idx + 1];
    const gate = PIPE_GATES[fm.stage];
    await this.app.fileManager.processFrontMatter(file, (f) => {
      f.stage = next;
      if (!Array.isArray(f.gateLog)) f.gateLog = [];
      f.gateLog.push(`\u2705 ${gate}@${todayStr()}`);
      if (next === "\u5B8C\u6210") f.status = "done";
    });
    if (fm.stage === "\u7F16\u8F91" && fm.draft) {
      const draft = this.app.vault.getAbstractFileByPath((0, import_obsidian.normalizePath)(fm.draft));
      if (draft instanceof import_obsidian.TFile) {
        await this.app.fileManager.processFrontMatter(draft, (f) => {
          f.status = "\u5F85\u53D1";
          if (!Array.isArray(f.statusHistory)) f.statusHistory = [];
          f.statusHistory.push(`\u5F85\u53D1@${todayStr()}`);
        });
        if (!this._silentGate) this.setSchedule(draft);
      }
    }
    await this.appendToNote(file, `
> \u2705 ${gate} \u95E8\u7981\u901A\u8FC7\uFF08${todayStr()}\uFF09\u2192 \u8FDB\u5165\u300C${next}\u300D
`);
    new import_obsidian.Notice(`${gate} \u5DF2\u901A\u8FC7 \u2192 ${next}`);
  }
  gateReject(file) {
    const fm = this.fm(file);
    const gate = PIPE_GATES[fm.stage] || "\u95E8\u7981";
    new PromptModal(this.app, {
      title: `\u274C \u9A73\u56DE\uFF08${gate}\uFF09`,
      placeholder: "\u9A73\u56DE\u610F\u89C1\uFF1A\u7F3A\u4EC0\u4E48/\u6539\u4EC0\u4E48\u2026",
      multiline: true,
      submitText: "\u8BB0\u5F55\u9A73\u56DE\u610F\u89C1",
      onSubmit: async (reason) => {
        await this.app.fileManager.processFrontMatter(file, (f) => {
          if (!Array.isArray(f.gateLog)) f.gateLog = [];
          f.gateLog.push(`\u274C ${gate}@${todayStr()}`);
        });
        await this.appendToNote(file, `
> \u274C ${gate} \u9A73\u56DE\uFF08${todayStr()}\uFF09\uFF1A${reason}
`);
        new import_obsidian.Notice("\u9A73\u56DE\u610F\u89C1\u5DF2\u8BB0\u5F55\uFF0C\u53EF\u4FEE\u6539\u540E\u91CD\u8DD1\u672C\u9636\u6BB5");
      }
    }).open();
  }
  /* ---------- 周期笔记（LifeOS 融合，兼容其目录约定） ---------- */
  async openPeriodic(kind) {
    const m = (0, import_obsidian.moment)();
    const y = m.format("YYYY");
    const base = this.settings.periodicFolder;
    let rel, tpl;
    if (kind === "daily") {
      rel = `${y}/Daily/${m.format("MM")}/${m.format("YYYY-MM-DD")}.md`;
      tpl = "Daily";
    } else if (kind === "weekly") {
      rel = `${y}/Weekly/${m.format("GGGG-[W]WW")}.md`;
      tpl = "Weekly";
    } else if (kind === "monthly") {
      rel = `${y}/Monthly/${m.format("YYYY-MM")}.md`;
      tpl = "Monthly";
    } else if (kind === "quarterly") {
      rel = `${y}/Quarterly/${y}-Q${m.quarter()}.md`;
      tpl = "Quarterly";
    } else {
      rel = `${y}/${y}.md`;
      tpl = "Yearly";
    }
    let initial = `# ${rel.split("/").pop().replace(".md", "")}

`;
    const tf = this.app.vault.getAbstractFileByPath((0, import_obsidian.normalizePath)(`${base}/Templates/${tpl}.md`));
    if (tf instanceof import_obsidian.TFile) initial = await this.app.vault.cachedRead(tf);
    const f = await this.ensureFile(`${base}/${rel}`, initial);
    await this.app.workspace.getLeaf(false).openFile(f);
  }
  /* ---------- AI 层（多厂商 BYOK） ---------- */
  resolveAI() {
    const preset = AI_PRESETS[this.settings.aiProvider] || AI_PRESETS.custom;
    return {
      format: preset.format,
      baseUrl: this.settings.aiBaseUrl || preset.baseUrl,
      model: this.settings.aiModel || preset.model,
      key: this.settings.aiApiKey,
      label: preset.label
    };
  }
  async llmChat(system, user, temperature) {
    return this.llmChatMessages(system, [{ role: "user", content: user }], void 0, temperature);
  }
  async llmChatMessages(system, messages, maxTokensOverride, temperature) {
    const cfg = this.resolveAI();
    if (!cfg.key) throw new Error("\u672A\u914D\u7F6E API Key\uFF08\u8BBE\u7F6E \u2192 AI \u8FDE\u63A5\uFF09");
    if (!cfg.baseUrl || !cfg.model) throw new Error("\u672A\u914D\u7F6E API \u5730\u5740\u6216\u6A21\u578B\u540D\uFF08\u8BBE\u7F6E \u2192 AI \u8FDE\u63A5\uFF09");
    let maxTokens = maxTokensOverride || this.settings.aiMaxTokens;
    let lastErr = null;
    for (let attempt = 1; attempt <= 4; attempt++) {
      let req;
      if (cfg.format === "anthropic") {
        req = {
          url: cfg.baseUrl,
          method: "POST",
          throw: false,
          headers: { "content-type": "application/json", "x-api-key": cfg.key, "anthropic-version": "2023-06-01" },
          body: JSON.stringify({ model: cfg.model, max_tokens: maxTokens, ...temperature == null ? {} : { temperature }, system, messages })
        };
      } else {
        req = {
          url: cfg.baseUrl,
          method: "POST",
          throw: false,
          headers: { "content-type": "application/json", Authorization: `Bearer ${cfg.key}` },
          body: JSON.stringify({ model: cfg.model, max_tokens: maxTokens, ...temperature == null ? {} : { temperature }, messages: [{ role: "system", content: system }, ...messages] })
        };
      }
      let resp;
      try {
        resp = await (0, import_obsidian.requestUrl)(req);
      } catch (e) {
        lastErr = new Error("\u7F51\u7EDC\u9519\u8BEF: " + String(e.message).slice(0, 80));
        await new Promise((r) => setTimeout(r, attempt * 2e3));
        continue;
      }
      if (resp.status === 429 || resp.status >= 500) {
        lastErr = new Error(`API ${resp.status}\uFF08\u670D\u52A1\u7AEF\u7E41\u5FD9\uFF09`);
        await new Promise((r) => setTimeout(r, attempt * 3e3));
        continue;
      }
      if (resp.status >= 400) throw new Error(`API ${resp.status}\uFF1A${String(resp.text).slice(0, 200)}`);
      const j = resp.json;
      const usage = j?.usage || {};
      const tin = usage.input_tokens ?? usage.prompt_tokens ?? 0;
      const tout = usage.output_tokens ?? usage.completion_tokens ?? 0;
      if (tin || tout) this.trackUsage(tin, tout);
      let text;
      if (cfg.format === "anthropic") {
        const blocks = Array.isArray(j?.content) ? j.content : [];
        text = blocks.filter((b) => b.type === "text").map((b) => b.text).join("") || blocks[0]?.text;
      } else {
        text = j?.choices?.[0]?.message?.content;
        if (text) text = trimDegenerateTail(stripThink(String(text)));
      }
      if (!text || !String(text).trim()) {
        lastErr = new Error(`\u8FD4\u56DE\u4E3A\u7A7A\uFF08max_tokens=${maxTokens} \u88AB\u601D\u8003\u5757\u8017\u5C3D\uFF09`);
        maxTokens = Math.min(maxTokens * 2, 9e3);
        continue;
      }
      return { text: String(text).trim(), model: cfg.model, label: cfg.label };
    }
    throw new Error(`\u91CD\u8BD5 4 \u6B21\u4ECD\u5931\u8D25\uFF1A${lastErr?.message || "\u672A\u77E5"}`);
  }
  /* v2.0 流式输出：fetch SSE；受 CORS 限制可能失败，调用方需回退 llmChatMessages */
  async llmChatStream(system, messages, onDelta, maxTokensOverride) {
    const cfg = this.resolveAI();
    if (!cfg.key || !cfg.baseUrl || !cfg.model) throw new Error("AI \u672A\u914D\u7F6E");
    const maxTokens = maxTokensOverride || this.settings.aiMaxTokens;
    let headers, payload;
    if (cfg.format === "anthropic") {
      headers = {
        "content-type": "application/json",
        "x-api-key": cfg.key,
        "anthropic-version": "2023-06-01",
        "anthropic-dangerous-direct-browser-access": "true"
      };
      payload = { model: cfg.model, max_tokens: maxTokens, system, messages, stream: true };
    } else {
      headers = { "content-type": "application/json", Authorization: `Bearer ${cfg.key}` };
      payload = { model: cfg.model, max_tokens: maxTokens, stream: true, messages: [{ role: "system", content: system }, ...messages] };
    }
    const resp = await fetch(cfg.baseUrl, { method: "POST", headers, body: JSON.stringify(payload) });
    if (!resp.ok || !resp.body) throw new Error("stream HTTP " + resp.status);
    const reader = resp.body.getReader();
    const dec = new TextDecoder();
    let buf = "", full = "";
    for (; ; ) {
      const { done, value } = await reader.read();
      if (done) break;
      buf += dec.decode(value, { stream: true });
      const lines = buf.split("\n");
      buf = lines.pop();
      for (const raw of lines) {
        const line = raw.trim();
        if (!line.startsWith("data:")) continue;
        const data = line.slice(5).trim();
        if (!data || data === "[DONE]") continue;
        try {
          const ev = JSON.parse(data);
          let d = "";
          if (cfg.format === "anthropic") {
            if (ev.type === "content_block_delta" && ev.delta?.type === "text_delta") d = ev.delta.text || "";
          } else {
            d = ev.choices?.[0]?.delta?.content || "";
          }
          if (d) {
            full += d;
            onDelta(stripThink(full));
          }
        } catch (e) {
        }
      }
    }
    const text = trimDegenerateTail(stripThink(full).trim());
    if (!text) throw new Error("\u6D41\u5F0F\u8FD4\u56DE\u4E3A\u7A7A");
    return { text, model: cfg.model, label: cfg.label };
  }
  /* v2.4 私有搜索（自建 SearXNG + 抽取层，BYOS）*/
  async webSearch(query, { deep = false, n = 5 } = {}) {
    const base = String(this.settings.searchApiUrl || "").replace(/\/$/, "");
    if (!base) return null;
    const ep = deep ? "research" : "search";
    const resp = await (0, import_obsidian.requestUrl)({ url: `${base}/${ep}?q=${encodeURIComponent(query)}&n=${n}`, throw: false });
    if (resp.status !== 200) throw new Error(`\u641C\u7D22 API ${resp.status}`);
    const rs = resp.json?.results || [];
    if (!rs.length) return "\uFF08\u65E0\u7ED3\u679C\uFF09";
    return rs.map(
      (r, i) => `${i + 1}. ${r.title}
   ${r.url}
   ${r.snippet || ""}${r.content ? "\n   \u6B63\u6587\u6458\u5F55: " + String(r.content).slice(0, 800) : ""}`
    ).join("\n");
  }
  async testAI() {
    try {
      new import_obsidian.Notice("\u{1F916} \u6D4B\u8BD5\u4E2D\u2026");
      const r = await this.llmChat("\u4F60\u662F\u8FDE\u63A5\u6D4B\u8BD5\u52A9\u624B\u3002", "\u8BF7\u53EA\u56DE\u590D\u4E24\u4E2A\u5B57\u7B26\uFF1AOK");
      new import_obsidian.Notice(`\u2705 ${r.label} \u8FDE\u901A\uFF08${r.model}\uFF09\uFF1A${r.text.slice(0, 40)}`);
    } catch (e) {
      new import_obsidian.Notice("\u274C " + e.message, 8e3);
    }
  }
  /* AI 选题评估：喂入库内素材命中 + 爆款数据，输出编辑意见 */
  async aiEvaluateTopic(topic, drafts) {
    if (!this.gate("AI \u9009\u9898\u8BC4\u4F30")) return;
    try {
      new import_obsidian.Notice(`\u{1F916} \u8BC4\u4F30\u4E2D\uFF1A${topic.title}\u2026`);
      const ctx = this.buildScoreCtx(drafts || []);
      const matched = { wiki: [], other: [] };
      for (const kw of topic.keywords) {
        if (kw.length < 2) continue;
        for (const e of ctx.entries) {
          if (!e.base.includes(kw)) continue;
          (e.isWiki ? matched.wiki : matched.other).push(e.base);
        }
      }
      const hot = (drafts || []).map((f2) => ({ base: f2.basename, fm: this.fm(f2) })).filter((x) => x.fm.stats?.reads).sort((a, b) => b.fm.stats.reads - a.fm.stats.reads).slice(0, 8).map((x) => `${x.base}\uFF08\u9605\u8BFB ${x.fm.stats.reads}\uFF09`);
      let web = "";
      try {
        const w = await this.webSearch(`${topic.title} ${topic.keywords.slice(0, 2).join(" ")}`, { n: 6 });
        if (w) web = `

\u7F51\u7EDC\u6700\u65B0\u52A8\u6001\uFF08\u79C1\u6709\u641C\u7D22\u5B9E\u65F6\u6293\u53D6\uFF09\uFF1A
${w}`;
      } catch (e) {
        web = `

\uFF08\u7F51\u7EDC\u641C\u7D22\u5931\u8D25\uFF1A${String(e.message).slice(0, 60)}\uFF09`;
      }
      const system = await this.loadPrompt("topic-eval");
      const user = `\u8BF7\u8BC4\u4F30\u8FD9\u4E2A\u516C\u4F17\u53F7\u9009\u9898\uFF0C\u8F93\u51FA\u4E94\u8282\uFF1A\u2460\u4E00\u53E5\u8BDD\u5224\u65AD\uFF08\u5199/\u4E0D\u5199/\u6539\u89D2\u5EA6\uFF09\u2461\u5DEE\u5F02\u5316\u89D2\u5EA6\uFF08\u7ED3\u5408\u4F5C\u8005\u5DF2\u6709\u7D20\u6750\uFF09\u2462\u76EE\u6807\u8BFB\u8005\u4E0E\u94A9\u5B50 \u2463\u4E0E\u4F5C\u8005\u7206\u6B3E\u89C4\u5F8B\u7684\u5173\u7CFB \u2464\u98CE\u9669\u4E0E\u7F3A\u53E3\u3002

\u9009\u9898\uFF1A${topic.title}
\u5173\u952E\u8BCD\uFF1A${topic.keywords.join("\u3001")}

\u4F5C\u8005\u5E93\u5185\u547D\u4E2D\u7D20\u6750\uFF08wiki \u7F16\u8BD1\u9875 ${matched.wiki.length} \u7BC7\uFF09\uFF1A
${matched.wiki.slice(0, 15).map((x) => "- " + x).join("\n") || "- \u65E0"}

\u5176\u4ED6\u76F8\u5173\u7B14\u8BB0\uFF08${matched.other.length} \u7BC7\uFF09\uFF1A
${matched.other.slice(0, 10).map((x) => "- " + x).join("\n") || "- \u65E0"}

\u4F5C\u8005\u5386\u53F2\u7206\u6B3E\uFF08\u6309\u9605\u8BFB\u91CF\uFF09\uFF1A
${hot.map((x) => "- " + x).join("\n") || "- \u6682\u65E0\u6570\u636E"}

\u4F5C\u8005\u7684\u5185\u5BB9\u7CFB\u5217\uFF1A${this.settings.seriesKeywords}${web}`;
      const r = await this.llmChat(system, user);
      const dir = (0, import_obsidian.normalizePath)(this.settings.topicsFile).split("/").slice(0, -1).join("/");
      const path = `${dir}/AI\u8BC4\u4F30-${sanitizeName(topic.title)}.md`;
      const body = `---
title: AI\u8BC4\u4F30\uFF1A${topic.title}
type: ai-eval
model: ${r.model}
generated: ${todayStr()}
tags:
  - ai-generated
---

> \u26A0\uFE0F AI \u751F\u6210\uFF08${r.label} \xB7 ${r.model}\uFF09\uFF0C\u4EC5\u4F9B\u53C2\u8003\uFF0C\u5224\u65AD\u4EE5\u4F60\u4E3A\u51C6\u3002

${r.text}
`;
      const existing = this.app.vault.getAbstractFileByPath((0, import_obsidian.normalizePath)(path));
      const f = existing instanceof import_obsidian.TFile ? (await this.app.vault.modify(existing, body), existing) : await this.ensureFile(path, body);
      await this.app.workspace.getLeaf(false).openFile(f);
      new import_obsidian.Notice(`\u8BC4\u4F30\u5B8C\u6210\uFF1A${topic.title}`);
    } catch (e) {
      new import_obsidian.Notice("\u274C " + e.message, 8e3);
    }
  }
  /* AI 自检：按你的写作自检清单逐条审文稿 */
  async aiSelfCheck(file, items) {
    try {
      new import_obsidian.Notice(`\u{1F916} AI \u81EA\u68C0\u4E2D\uFF1A${file.basename}\u2026`);
      const content = (await this.app.vault.read(file)).slice(0, 16e3);
      const system = await this.loadPrompt("self-check");
      const user = `\u81EA\u68C0\u6E05\u5355\uFF1A
${items.map((x, i) => `${i + 1}. ${x}`).join("\n")}

\u6587\u7A3F\u5168\u6587\uFF08\u53EF\u80FD\u622A\u65AD\uFF09\uFF1A

${content}`;
      const r = await this.llmChat(system, user);
      await this.app.vault.process(file, (cur) => cur.replace(/\n*$/, "\n") + `
## AI \u81EA\u68C0\uFF08${todayStr()} \xB7 ${r.model}\uFF09

> \u26A0\uFE0F AI \u751F\u6210\uFF0C\u4EC5\u4F9B\u53C2\u8003\u3002

${r.text}
`);
      new import_obsidian.Notice(`AI \u81EA\u68C0\u5DF2\u5199\u5165\uFF1A${file.basename}`);
    } catch (e) {
      new import_obsidian.Notice("\u274C " + e.message, 8e3);
    }
  }
  refreshDashboards() {
    this.app.workspace.getLeavesOfType(VIEW_TYPE).forEach((l) => l.view?.scheduleRender?.());
  }
  /* ---------- 生产 ---------- */
  async captureText(text, quiet) {
    const first = sanitizeName(text.split("\n")[0]) || "\u6355\u83B7";
    const stamp = (0, import_obsidian.moment)();
    let path = `${this.settings.captureFolder}/${stamp.format("YYYY-MM-DD")} ${first}.md`;
    if (this.exists(path)) path = `${this.settings.captureFolder}/${stamp.format("YYYY-MM-DD HHmmss")} ${first}.md`;
    await this.ensureFolder(this.settings.captureFolder);
    const f = await this.app.vault.create((0, import_obsidian.normalizePath)(path), `${text}

---
\u6355\u83B7\u4E8E ${stamp.format("YYYY-MM-DD HH:mm")} \xB7 via Content OS
`);
    if (!quiet) new import_obsidian.Notice(`\u5DF2\u6355\u83B7\uFF1A${first}`);
    return f;
  }
  quickCapture() {
    new PromptModal(this.app, {
      title: "\u{1F4E5} \u5FEB\u901F\u6355\u83B7",
      placeholder: "\u6B64\u523B\u5728\u60F3\u4EC0\u4E48\u2026\uFF08\u7B2C\u4E00\u884C\u4F1A\u6210\u4E3A\u6587\u4EF6\u540D\uFF09",
      multiline: true,
      submitText: "\u5B58\u5165\u6355\u83B7\u7BB1",
      onSubmit: (text) => this.captureText(text)
    }).open();
  }
  async activateFlomo() {
    const ws = this.app.workspace;
    let leaf = ws.getLeavesOfType(VIEW_FLOMO)[0];
    if (!leaf) {
      leaf = ws.getLeaf(false);
      await leaf.setViewState({ type: VIEW_FLOMO, active: true });
    }
    ws.revealLeaf(leaf);
  }
  refreshFlomo() {
    this.app.workspace.getLeavesOfType(VIEW_FLOMO).forEach((l) => l.view?.render?.());
  }
  /* 读一条 memo 的正文（去 frontmatter 和捕获尾注），供 flomo 卡片预览/编辑 */
  memoBody(raw) {
    return String(raw).replace(/^---[\s\S]*?---\n/, "").replace(/\n*---\n捕获于[^\n]*\n?$/, "").trim();
  }
  async openTodayDiary() {
    const today = todayStr();
    const f = await this.ensureFile(
      `${this.settings.diaryFolder}/${today}.md`,
      this.settings.diaryTemplate.replace(/\{\{date\}\}/g, today)
    );
    await this.app.workspace.getLeaf(false).openFile(f);
  }
  async createDraft(title, series) {
    const date = todayStr();
    const seriesLine = series ? `series: ${series}
` : "";
    const body = this.settings.draftBodyTemplate.replace(/\{\{title\}\}/g, title).replace(/\{\{date\}\}/g, date).replace(/\{\{series\}\}/g, series || "");
    const fmText = `---
title: ${title}
status: ${this.settings.draftStatuses[0]}
created: ${date}
${seriesLine}statusHistory:
  - \u8349\u7A3F@${date}
tags:
  - \u516C\u4F17\u53F7
---

${body}`;
    const f = await this.ensureFile(`${this.settings.draftsFolder}/${date}-${title}.md`, fmText);
    await this.app.workspace.getLeaf(false).openFile(f);
    new import_obsidian.Notice(`\u6587\u7A3F\u5DF2\u5EFA\uFF1A${title}${series ? `\uFF08${series}\uFF09` : ""}`);
  }
  async appendTopic(line) {
    const f = await this.ensureFile(this.settings.topicsFile, "# \u5185\u5BB9\u521B\u4F5C\u9009\u9898\u5E93\n\n");
    await this.app.vault.process(f, (cur) => cur.replace(/\n*$/, "\n") + `- [ ] ${todayStr()} ${line}
`);
    new import_obsidian.Notice("\u9009\u9898\u5DF2\u5165\u5E93");
  }
  async markForIngest(file) {
    const f = await this.ensureFile(
      this.settings.ingestQueueFile,
      "---\ntitle: ingest \u961F\u5217\ntype: queue\n---\n\n# ingest \u961F\u5217\n\n\u52FE\u9009 = \u5DF2\u7F16\u8BD1\u8FDB wiki\u3002\u6309 AGENTS.md \u7684 ingest \u5DE5\u4F5C\u6D41\u5904\u7406\u3002\n\n"
    );
    const link = `[[${file.path.replace(/\.md$/, "")}]]`;
    let dup = false;
    await this.app.vault.process(f, (cur) => {
      if (cur.includes(link)) {
        dup = true;
        return cur;
      }
      return cur.replace(/\n*$/, "\n") + `- [ ] ${link} \uFF08${todayStr()} \u52A0\u5165\uFF09
`;
    });
    if (dup) {
      new import_obsidian.Notice("\u5DF2\u5728\u961F\u5217\u4E2D");
      return;
    }
    new import_obsidian.Notice(`\u5DF2\u52A0\u5165 ingest \u961F\u5217\uFF1A${file.basename}`);
  }
  async createParaNote(baseFolder, name, kindLabel) {
    const folder = `${baseFolder}/${name}`;
    await this.ensureFolder(folder);
    const fmText = `---
title: ${name}
type: ${kindLabel}
created: ${todayStr()}
status: active
---

# ${name}

## \u76EE\u6807

- 

## \u8BB0\u5F55

- 
`;
    const f = await this.ensureFile(`${folder}/${name}.md`, fmText);
    await this.app.workspace.getLeaf(false).openFile(f);
    new import_obsidian.Notice(`\u5DF2\u521B\u5EFA${kindLabel}\uFF1A${name}`);
  }
  /* ---------- 状态机 ---------- */
  async cycleDraftStatus(file) {
    const order = this.settings.draftStatuses;
    const date = todayStr();
    await this.app.fileManager.processFrontMatter(file, (fm) => {
      const i = order.indexOf(fm.status);
      fm.status = order[(i + 1) % order.length];
      if (!Array.isArray(fm.statusHistory)) fm.statusHistory = [];
      fm.statusHistory.push(`${fm.status}@${date}`);
      if (fm.status === "\u5DF2\u53D1") fm.published = date;
    });
    new import_obsidian.Notice(`${file.basename} \u2192 ${this.fm(file).status || order[0]}\uFF08\u53EF\u7528\u300C\u56DE\u9000\u6587\u7A3F\u72B6\u6001\u300D\u64A4\u9500\uFF09`);
  }
  async undoDraftStatus(file) {
    let undone = null;
    await this.app.fileManager.processFrontMatter(file, (fm) => {
      if (!Array.isArray(fm.statusHistory) || fm.statusHistory.length < 2) return;
      const popped = fm.statusHistory.pop();
      undone = popped;
      const last = fm.statusHistory[fm.statusHistory.length - 1];
      fm.status = String(last).split("@")[0];
      if (String(popped).startsWith("\u5DF2\u53D1")) delete fm.published;
    });
    new import_obsidian.Notice(undone ? `\u5DF2\u56DE\u9000\uFF1A${file.basename} \u2192 ${this.fm(file).status}` : "\u6CA1\u6709\u53EF\u56DE\u9000\u7684\u5386\u53F2");
  }
  async toggleShelve(file) {
    const date = todayStr();
    await this.app.fileManager.processFrontMatter(file, (fm) => {
      fm.status = fm.status === "\u6401\u7F6E" ? "\u8349\u7A3F" : "\u6401\u7F6E";
      if (!Array.isArray(fm.statusHistory)) fm.statusHistory = [];
      fm.statusHistory.push(`${fm.status}@${date}`);
    });
    new import_obsidian.Notice(`${file.basename} \u2192 ${this.fm(file).status}`);
  }
  /* ---------- v1.0 排期与复盘 ---------- */
  setSchedule(file) {
    new PromptModal(this.app, {
      title: `\u{1F4C5} \u8BBE\u7F6E\u6392\u671F\uFF1A${file.basename}`,
      placeholder: "YYYY-MM-DD",
      initial: this.fm(file).scheduledDate || (0, import_obsidian.moment)().add(3, "days").format("YYYY-MM-DD"),
      onSubmit: async (v) => {
        if (!(0, import_obsidian.moment)(v, "YYYY-MM-DD", true).isValid()) {
          new import_obsidian.Notice("\u65E5\u671F\u683C\u5F0F\u5E94\u4E3A YYYY-MM-DD");
          return;
        }
        await this.app.fileManager.processFrontMatter(file, (fm) => {
          fm.scheduledDate = v;
        });
        new import_obsidian.Notice(`\u5DF2\u6392\u671F ${v}\uFF1A${file.basename}`);
        this.refreshDashboards();
      }
    }).open();
  }
  async appendReviewCard(file) {
    const fm = this.fm(file);
    if (fm.reviewed) {
      new import_obsidian.Notice("\u8FD9\u7BC7\u5DF2\u590D\u76D8\u8FC7");
      return;
    }
    const stats = fm.stats ? `\u9605\u8BFB ${fm.stats.reads ?? "-"} \xB7 \u70B9\u8D5E ${fm.stats.likes ?? "-"} \xB7 \u5728\u770B ${fm.stats.wows ?? "-"} \xB7 \u8F6C\u53D1 ${fm.stats.shares ?? "-"} \xB7 \u6DA8\u7C89 ${fm.stats.followers ?? "-"}` : "\uFF08\u672A\u5F55\u5165\uFF0C\u7528\u300C\u5F55\u5165\u53D1\u5E03\u6570\u636E\u300D\u8865\u4E0A\uFF09";
    const card = `
## \u590D\u76D8\uFF08${todayStr()}\uFF09

- \u6570\u636E\uFF1A${stats}
- \u4EC0\u4E48\u8D77\u4E86\u4F5C\u7528\uFF08\u6807\u9898/\u9009\u9898/\u7ED3\u6784/\u65F6\u673A\uFF09\uFF1A
- \u4EC0\u4E48\u6CA1\u8D77\u4F5C\u7528\uFF1A
- \u8FD9\u7BC7\u9A8C\u8BC1/\u63A8\u7FFB\u4E86\u54EA\u4E2A\u6BCD\u9898\uFF1A
- \u4E0B\u4E00\u7BC7\u600E\u4E48\u6539\u8FDB\uFF1A
`;
    await this.app.vault.process(file, (cur) => cur.replace(/\n*$/, "\n") + card);
    await this.app.fileManager.processFrontMatter(file, (f) => {
      f.reviewed = todayStr();
    });
    await this.app.workspace.getLeaf(false).openFile(file);
    new import_obsidian.Notice(`\u590D\u76D8\u5361\u5DF2\u751F\u6210\uFF1A${file.basename}`);
  }
  /* ---------- 血统 ---------- */
  async registerLineage(file) {
    const text = await this.app.vault.read(file);
    const links = [...text.matchAll(/\[\[([^\]|#]+)/g)].map((m) => m[1].trim());
    const unique = [...new Set(links)];
    if (!unique.length) {
      new import_obsidian.Notice("\u6587\u7A3F\u4E2D\u6CA1\u6709 [[\u5F15\u7528]]\uFF0C\u5148\u5728\u6B63\u6587\u91CC\u94FE\u4E0A\u7528\u5230\u7684\u5361\u7247/wiki \u9875");
      return;
    }
    await this.app.fileManager.processFrontMatter(file, (fm) => {
      fm.sources = unique;
    });
    new import_obsidian.Notice(`\u5DF2\u767B\u8BB0 ${unique.length} \u6761\u6765\u6E90`);
  }
  /* ---------- 格式工厂 ---------- */
  deriveMenu(file) {
    new PromptModal(this.app, {
      title: `\u{1FA84} \u683C\u5F0F\u5DE5\u5382\uFF1A${file.basename}`,
      placeholder: "\u8F93\u5165 \u5C0F\u7EA2\u4E66 \u6216 \u7EBF\u7A0B",
      onSubmit: (v) => this.deriveDraft(file, v.includes("\u7EBF\u7A0B") ? "\u7EBF\u7A0B" : "\u5C0F\u7EA2\u4E66")
    }).open();
  }
  async deriveDraft(file, kind, open = true) {
    const headings = (this.app.metadataCache.getFileCache(file)?.headings || []).filter((h) => h.level >= 2 && !/^(自检|复盘)/.test(h.heading)).map((h) => h.heading);
    const date = todayStr();
    const base = file.basename;
    let body;
    if (kind === "\u5C0F\u7EA2\u4E66") {
      body = `---
title: ${base}\uFF08\u5C0F\u7EA2\u4E66\u7248\uFF09
status: \u8349\u7A3F
created: ${date}
derivedFrom: "[[${file.path.replace(/\.md$/, "")}]]"
tags:
  - \u5C0F\u7EA2\u4E66
---

# \u5C01\u9762\u94A9\u5B50

> \u4E00\u53E5\u8BA9\u4EBA\u505C\u4E0B\u6ED1\u52A8\u7684\u8BDD

# \u56FE\u5361\u8981\u70B9\uFF083-6 \u5F20\uFF09

${headings.map((h, i) => `## \u5361${i + 1}\uFF1A${h}

- `).join("\n") || "## \u53611\uFF1A\n\n- "}

# \u7ED3\u5C3E\u884C\u52A8

- \u5173\u6CE8 / \u6536\u85CF\u7406\u7531

# \u6807\u7B7E

#
`;
    } else {
      body = `---
title: ${base}\uFF08\u7EBF\u7A0B\u7248\uFF09
status: \u8349\u7A3F
created: ${date}
derivedFrom: "[[${file.path.replace(/\.md$/, "")}]]"
tags:
  - \u7EBF\u7A0B
---

# Hook\uFF08\u7B2C\u4E00\u6761\uFF09

> 

# \u4E3B\u4F53\uFF08\u6BCF\u6761\u4E00\u4E2A\u70B9\uFF09

${headings.map((h, i) => `${i + 1}/ ${h}
`).join("\n") || "1/ \n"}

# \u6536\u5C3E\uFF08\u603B\u7ED3 + CTA\uFF09

- 
`;
    }
    const cleanBase = sanitizeName(base.replace(/^\d{4}-\d{2}-\d{2}[- ]?/, ""));
    const path = `${this.settings.draftsFolder}/${date}-${cleanBase}-${kind}\u7248.md`;
    if (this.exists(path)) {
      new import_obsidian.Notice(`${kind}\u7248\u5DF2\u5B58\u5728`);
      if (open) await this.openPath(path);
      return { path, created: false };
    }
    const f = await this.ensureFile(path, body);
    if (open) await this.app.workspace.getLeaf(false).openFile(f);
    new import_obsidian.Notice(`\u5DF2\u751F\u6210${kind}\u7248\u9AA8\u67B6`);
    return { path: f.path, created: true };
  }
  /* ---------- 选题雷达（含数据反哺）与素材包 ---------- */
  async readTopics() {
    const items = await this.uncheckedItems(this.settings.topicsFile);
    if (!items) return [];
    return items.map(extractTopicMeta).filter((t) => !(t.keywords.length === 1 && t.keywords[0] === t.title && isOpsLine(t.title)));
  }
  /* ---------- v4.9 解剖外部爆款：行业 10万+ 全文 → 外部爆款基因（引导期老师）---------- */
  async dissectHotArticles() {
    const folder = (0, import_obsidian.normalizePath)(this.settings.hotStudyFolder || "");
    const af = folder && this.app.vault.getAbstractFileByPath(folder);
    if (!(af instanceof import_obsidian.TFolder)) {
      new import_obsidian.Notice("\u672A\u914D\u7F6E\u7206\u6B3E\u7814\u7A76\u6587\u4EF6\u5939");
      return;
    }
    const files = this.app.vault.getMarkdownFiles().filter((f) => f.path.startsWith(folder + "/") && !f.basename.startsWith("_") && !f.basename.startsWith("\u5916\u90E8\u7206\u6B3E\u57FA\u56E0"));
    if (files.length < 2) {
      new import_obsidian.Notice("\u5148\u5F80\u300C\u7206\u6B3E\u7814\u7A76\u300D\u6587\u4EF6\u5939\u653E\u22652\u7BC7 10\u4E07+ \u5168\u6587");
      return;
    }
    new import_obsidian.Notice(`\u{1F52C} \u89E3\u5256 ${files.length} \u7BC7\u7206\u6B3E\u2026\uFF08\u9010\u7BC7\u5206\u6790\u7EA6 ${files.length * 15} \u79D2\uFF09`);
    const digests = [];
    for (const f of files) {
      const body = (await this.app.vault.cachedRead(f)).slice(0, 6e3);
      try {
        const r = await this.llmChat(
          "\u4F60\u662F\u516C\u4F17\u53F7\u7206\u6B3E\u89E3\u5256\u5E08\u3002\u89E3\u5256\u8FD9\u7BC7 10\u4E07+ \u6587\u7AE0,\u8F93\u51FA\u6781\u7B80\u8981\u70B9(\u4E0D\u8D85150\u5B57):\u2460\u6807\u9898\u7528\u4E86\u4EC0\u4E48\u94A9\u5B50\u673A\u5236 \u2461\u5F00\u5934\u524D3\u53E5\u600E\u4E48\u7559\u4EBA \u2462\u60C5\u7EEA\u4E3B\u7EBF\u662F\u4EC0\u4E48 \u2463\u7ED3\u6784\u8282\u594F(\u51E0\u6BB5\u7FFB\u8F6C/\u5982\u4F55\u9012\u8FDB) \u2464\u6700\u53EF\u80FD\u5F15\u53D1\u8F6C\u53D1\u7684\u90A3\u4E00\u53E5\u6216\u90A3\u4E2A\u70B9\u3002\u53EA\u8F93\u51FA\u5E72\u8D27,\u4E0D\u5BA2\u5957\u3002",
          `\u6807\u9898:${f.basename}

\u6B63\u6587:
${body}`,
          this.settings.tempJudge
        );
        digests.push(`\u3010${f.basename.slice(0, 30)}\u3011
${r.text.trim()}`);
      } catch (e) {
      }
    }
    if (!digests.length) {
      new import_obsidian.Notice("\u89E3\u5256\u5168\u90E8\u5931\u8D25,\u68C0\u67E5 AI \u914D\u7F6E");
      return;
    }
    new import_obsidian.Notice("\u{1F52C} \u63D0\u70BC\u8DE8\u7BC7\u5171\u6027\u89C4\u5F8B\u2026");
    const sys = `\u4F60\u662F\u9876\u7EA7\u516C\u4F17\u53F7\u64CD\u76D8\u624B\u3002\u4E0B\u9762\u662F ${digests.length} \u7BC7 10\u4E07+ \u6587\u7AE0\u7684\u89E3\u5256\u7B14\u8BB0\u3002\u63D0\u70BC\u51FA\u53EF\u590D\u7528\u3001\u53EF\u6267\u884C\u7684\u300C\u5916\u90E8\u7206\u6B3E\u57FA\u56E0\u300D\u6E05\u5355,\u4F9B AI \u5199\u65B0\u7A3F\u65F6\u8E29\u70B9\u3002\u5206\u56DB\u8282:
## \u6807\u9898\u516C\u5F0F\uFF08\u4ECE\u8FD9\u4E9B\u7206\u6B3E\u91CC\u5F52\u7EB3\u51FA\u7684\u3001\u53EF\u5957\u7528\u7684\u6807\u9898\u7ED3\u6784\uFF0C\u5404\u914D\u4E00\u4E2A\u6539\u5199\u793A\u8303\uFF09
## \u5F00\u5934\u94A9\u5B50\u6A21\u677F\uFF083-5 \u79CD\u88AB\u9A8C\u8BC1\u7684\u5F00\u573A\u65B9\u5F0F\uFF09
## \u60C5\u7EEA\u4E0E\u8F6C\u53D1\u89E6\u53D1\u5668\uFF08\u8FD9\u4E9B\u6587\u7AE0\u9760\u4EC0\u4E48\u60C5\u7EEA\u8BA9\u4EBA\u8F6C\u53D1\uFF09
## \u7ED3\u6784\u8282\u594F\uFF08\u7206\u6B3E\u7684\u6BB5\u843D\u63A8\u8FDB\u89C4\u5F8B\uFF09
\u6BCF\u6761\u8981\u5177\u4F53\u5230\u80FD\u76F4\u63A5\u7528,\u4E0D\u5199\u7A7A\u8BDD\u3002\u8FD9\u662F\u884C\u4E1A\u9A8C\u8BC1\u7684\u89C4\u5F8B,\u4E0D\u662F\u67D0\u4E00\u7BC7\u7684\u590D\u8FF0\u3002`;
    const g = await this.llmChat(sys, digests.join("\n\n---\n\n"), this.settings.tempJudge);
    const doc = `---
title: \u5916\u90E8\u7206\u6B3E\u57FA\u56E0
type: ext-hot-gene
updated: ${todayStr()}
samples: ${digests.length}
---

> \u7531 ${digests.length} \u7BC7\u884C\u4E1A 10\u4E07+ \u5168\u6587\u89E3\u5256\u63D0\u70BC,\u5199\u7A3F\u4E0E\u8BC4\u5BA1\u65F6\u81EA\u52A8\u6CE8\u5165(\u4E0E\u81EA\u6709\u7206\u6B3E\u57FA\u56E0\u5E76\u7528,\u51B2\u7A81\u65F6\u4EE5\u81EA\u6709\u771F\u5B9E\u6570\u636E\u4E3A\u51C6)\u3002

${g.text}
`;
    const p = (0, import_obsidian.normalizePath)(this.settings.extGeneFile);
    const ex = this.app.vault.getAbstractFileByPath(p);
    let file;
    if (ex instanceof import_obsidian.TFile) {
      await this.app.vault.modify(ex, doc);
      file = ex;
    } else {
      await this.ensureFolder(this.settings.hotStudyFolder);
      file = await this.app.vault.create(p, doc);
    }
    new import_obsidian.Notice(`\u{1F52C} \u5916\u90E8\u7206\u6B3E\u57FA\u56E0\u5DF2\u751F\u6210(${digests.length} \u7BC7)\u2014\u2014\u5DF2\u81EA\u52A8\u63A5\u5165\u5199\u624B\u4E0E\u8BC4\u59D4`, 9e3);
    if (file instanceof import_obsidian.TFile) await this.app.workspace.getLeaf(false).openFile(file);
  }
  /* v4.9 读外部爆款基因(注入写手/评委用) */
  async loadExtGene(limit) {
    const p = this.settings.extGeneFile && this.app.vault.getAbstractFileByPath((0, import_obsidian.normalizePath)(this.settings.extGeneFile));
    if (!(p instanceof import_obsidian.TFile)) return "";
    return (await this.app.vault.cachedRead(p)).slice(0, limit || 2500);
  }
  /* ---------- v3.1 数据反馈闭环：与10万+的差距分析 + 爆款基因提炼 ---------- */
  async buildGapReport(auto = false) {
    const GOAL = 1e5;
    const prefix = (0, import_obsidian.normalizePath)(this.settings.draftsFolder) + "/";
    const pub = [];
    for (const f of this.app.vault.getMarkdownFiles()) {
      if (!f.path.startsWith(prefix)) continue;
      const fm = this.fm(f);
      const st = fm.stats;
      if (!st || !Number(st.reads)) continue;
      const reads = Number(st.reads) || 0;
      const shares = Number(st.shares) || 0;
      pub.push({
        file: f,
        title: String(fm.title || f.basename).replace(/^\d{4}-\d{2}-\d{2}-/, ""),
        reads,
        shares,
        wows: Number(st.wows) || 0,
        likes: Number(st.likes) || 0,
        followers: Number(st.followers) || 0,
        favs: Number(st.favs) || 0,
        completion: Number(st.completion) || 0,
        gtm: Number(fm.gtmScore) || 0,
        shareRate: reads ? shares / reads : 0,
        engageRate: reads ? ((Number(st.likes) || 0) + (Number(st.wows) || 0)) / reads : 0,
        gap: reads ? GOAL / reads : Infinity,
        date: String(fm.statsDate || fm.created || "")
      });
    }
    if (pub.length < 2) {
      if (!auto) new import_obsidian.Notice("\u5DF2\u53D1\u4E14\u5F55\u4E86\u771F\u5B9E\u6570\u636E\u7684\u6587\u7AE0\u4E0D\u8DB3 2 \u7BC7\u2014\u2014\u5148\u7528\u7BA1\u9053 \u{1F4CA} \u5F55\u51E0\u7BC7\u6570\u636E");
      return;
    }
    const byShare = pub.slice().sort((a, b) => b.shareRate - a.shareRate);
    const top = byShare.slice(0, Math.min(5, byShare.length));
    const bottom = byShare.slice(-Math.min(5, byShare.length)).reverse();
    const bestReads = Math.max(...pub.map((p) => p.reads));
    const avgReads = Math.round(pub.reduce((a, p) => a + p.reads, 0) / pub.length);
    const avgShare = pub.reduce((a, p) => a + p.shareRate, 0) / pub.length;
    const byDate = pub.slice().sort((a, b) => a.date.localeCompare(b.date));
    const half = Math.floor(byDate.length / 2) || 1;
    const avgOf = (arr, k) => arr.length ? arr.reduce((a, p) => a + p[k], 0) / arr.length : 0;
    const trend = Math.round(avgOf(byDate.slice(half), "reads") - avgOf(byDate.slice(0, half), "reads"));
    const brief = async (arr) => (await Promise.all(arr.map(async (p) => {
      const body = (await this.app.vault.cachedRead(p.file)).replace(/^---[\s\S]*?---/, "").replace(/^\s*>.*$/gm, "").trim().slice(0, 260);
      return `\u300A${p.title}\u300B\u9605\u8BFB${p.reads} \u8F6C\u53D1${p.shares}(\u7387${(p.shareRate * 100).toFixed(1)}%) \u5728\u770B${p.wows} \u6DA8\u7C89${p.followers}
\u5F00\u5934\uFF1A${body}`;
    }))).join("\n---\n");
    new import_obsidian.Notice("\u{1F4CA} AI \u6B63\u5728\u8BCA\u65AD\u4E0E 10\u4E07+ \u7684\u5DEE\u8DDD\u2026");
    const sys = `\u4F60\u662F\u516C\u4F17\u53F7\u589E\u957F\u64CD\u76D8\u624B\uFF0C\u76EE\u6807\u662F\u8BA9\u8FD9\u4E2A\u8D26\u53F7\u6301\u7EED\u505A\u51FA 10\u4E07+\u3002\u4E0B\u9762\u662F\u540C\u4E00\u8D26\u53F7\u7684\u9AD8\u8F6C\u53D1\u6587\u7AE0\u548C\u4F4E\u8F6C\u53D1\u6587\u7AE0\u2014\u2014\u8F6C\u53D1\u7387\u662F\u5FAE\u4FE1\u63A8\u8350\u7B97\u6CD5\u6700\u770B\u91CD\u7684\u653E\u5927\u4FE1\u53F7\uFF0C\u8F6C\u53D1\u7387\u9AD8\u7684\u4F1A\u88AB\u63A8\u7ED9\u66F4\u591A\u4EBA\u3002\u8BF7\u51B7\u9759\u3001\u5177\u4F53\u5730\u8F93\u51FA\u56DB\u8282 markdown\uFF1A
## \u7206\u70B9\u89C4\u5F8B\uFF08\u8FD9\u4E2A\u8D26\u53F7\u7684\u8BFB\u8005\u5230\u5E95\u4E3A\u4EC0\u4E48\u8F6C\u53D1\uFF1F\u4ECE\u9AD8\u8F6C\u53D1\u6587\u91CC\u63D0\u70BC 3-5 \u6761\u53EF\u590D\u5236\u7684\u6A21\u5F0F\uFF1A\u9009\u9898\u89D2\u5EA6\uFF0F\u6807\u9898\u53E5\u5F0F\uFF0F\u5F00\u5934\u5199\u6CD5\uFF0F\u60C5\u7EEA\uFF0F\u7ED3\u6784\uFF09
## \u5931\u8D25\u89C4\u5F8B\uFF08\u4F4E\u8F6C\u53D1\u6587\u7684\u5171\u6027\u95EE\u9898\uFF0C3-5 \u6761\uFF09
## \u4E0E10\u4E07+\u7684\u5DEE\u8DDD\u8BCA\u65AD\uFF08\u5F53\u524D\u6700\u597D\u4E00\u7BC7 ${bestReads} \u9605\u8BFB\uFF0C\u8DDD 10\u4E07+ \u8FD8\u5DEE ${Math.round(GOAL / bestReads)} \u500D\u3002\u660E\u786E\u6307\u51FA\u4E3B\u8981\u5361\u5728\u54EA\uFF1A\u9009\u9898\u76D8\u5B50\u592A\u5C0F\uFF0F\u6807\u9898\u6253\u5F00\u7387\uFF0F\u5B8C\u8BFB\u7387\uFF0F\u8F6C\u53D1\u94A9\u5B50\uFF1F\u7ED9\u51FA\u6700\u5173\u952E\u7684 1-2 \u4E2A\u7A81\u7834\u53E3\uFF09
## \u4E0B\u4E00\u6B65\u52A8\u4F5C\uFF083 \u6761\u5177\u4F53\u5230\u80FD\u76F4\u63A5\u6267\u884C\u7684\u6307\u4EE4\uFF09
\u53EA\u8F93\u51FA\u8FD9\u56DB\u8282\uFF0C\u522B\u5199\u7A7A\u8BDD\u5957\u8BDD\u3002`;
    const topBrief = await brief(top), bottomBrief = await brief(bottom);
    const r = await this.llmChat(sys, `\u3010\u9AD8\u8F6C\u53D1\u6587\u7AE0\u3011
${topBrief}

\u3010\u4F4E\u8F6C\u53D1\u6587\u7AE0\u3011
${bottomBrief}`);
    const rows = byShare.map((p, i) => `| ${i + 1} | ${p.title.slice(0, 22)} | ${p.reads} | ${p.completion ? p.completion + "%" : "-"} | ${(p.shareRate * 100).toFixed(1)}% | ${(p.engageRate * 100).toFixed(1)}% | ${p.favs || "-"} | ${p.followers} | ${p.gap === Infinity ? "-" : Math.round(p.gap) + "\xD7"} |`).join("\n");
    const report = `---
title: 10\u4E07+\u5DEE\u8DDD\u62A5\u544A ${todayStr()}
type: gap-report
---

# \u4E0E 10\u4E07+ \u7684\u5DEE\u8DDD \xB7 ${todayStr()}

**\u5DF2\u53D1 ${pub.length} \u7BC7** \uFF5C \u6700\u597D ${bestReads} \u9605\u8BFB\uFF08\u8DDD 10\u4E07+ ${Math.round(GOAL / bestReads)}\xD7\uFF09\uFF5C \u5E73\u5747 ${avgReads} \u9605\u8BFB \uFF5C \u5E73\u5747\u8F6C\u53D1\u7387 ${(avgShare * 100).toFixed(1)}%
**\u8D8B\u52BF**\uFF1A\u6700\u8FD1\u534A\u6279\u6BD4\u4E4B\u524D\u5E73\u5747\u9605\u8BFB ${trend >= 0 ? "\u2191 +" : "\u2193 "}${Math.abs(trend)}

> \u6309\u8F6C\u53D1\u7387\u6392\u5E8F\u2014\u2014\u8F6C\u53D1\u7387\u662F\u5FAE\u4FE1\u63A8\u8350\u7B97\u6CD5\u628A\u5C0F\u6D41\u91CF\u6C60\u63A8\u5411\u5927\u6D41\u91CF\u6C60\u7684\u6838\u5FC3\u4FE1\u53F7\u3002

| # | \u6807\u9898 | \u9605\u8BFB | \u5B8C\u8BFB\u7387 | \u8F6C\u53D1\u7387 | \u4E92\u52A8\u7387 | \u6536\u85CF | \u6DA8\u7C89 | \u8DDD10\u4E07+ |
|---|---|---|---|---|---|---|---|---|
${rows}

---

${r.text}
`;
    const writeFile = async (path, content) => {
      const p = (0, import_obsidian.normalizePath)(path);
      const ex = this.app.vault.getAbstractFileByPath(p);
      if (ex instanceof import_obsidian.TFile) {
        await this.app.vault.modify(ex, content);
        return ex;
      }
      await this.ensureFolder(this.settings.reviewFolder);
      return this.app.vault.create(p, content);
    };
    const reportFile = await writeFile(`${this.settings.reviewFolder}/10\u4E07+\u5DEE\u8DDD\u62A5\u544A-${todayStr()}.md`, report);
    const geneSys = "\u4F60\u662F\u8FD9\u4E2A\u8D26\u53F7\u7684\u300C\u7206\u6B3E\u57FA\u56E0\u5E93\u300D\u3002\u57FA\u4E8E\u4E0B\u9762\u7684\u771F\u5B9E\u6570\u636E\u8BCA\u65AD\uFF0C\u63D0\u70BC\u4E00\u4EFD\u7ECF\u8BFB\u8005\u9A8C\u8BC1\u7684\u7206\u70B9\u6E05\u5355\uFF0C\u4F9B AI \u5199\u4E0B\u4E00\u7BC7\u65F6\u76F4\u63A5\u8E29\u70B9\u3002\u8981\u5177\u4F53\uFF1A\u4EC0\u4E48\u9009\u9898\u89D2\u5EA6\u4F1A\u7206\u3001\u4EC0\u4E48\u6807\u9898\u53E5\u5F0F\u6253\u5F00\u7387\u9AD8\u3001\u5F00\u5934\u600E\u4E48\u5199\u7559\u4EBA\u3001\u4EC0\u4E48\u60C5\u7EEA\u6216\u94A9\u5B50\u4FC3\u6210\u8F6C\u53D1\u3002\u8F93\u51FA\u7B80\u6D01\u6E05\u5355\uFF0C\u6BCF\u6761\u4E00\u53E5\u3001\u4E0D\u8D85\u8FC7 12 \u6761\uFF0C\u4E0D\u8981\u89E3\u91CA\u3002";
    const gene = await this.llmChat(geneSys, r.text + "\n\n\u6570\u636E\u8868\uFF1A\n" + rows);
    await writeFile(
      `${this.settings.reviewFolder}/\u7206\u6B3E\u57FA\u56E0.md`,
      `---
title: \u7206\u6B3E\u57FA\u56E0\uFF08\u8BFB\u8005\u9A8C\u8BC1\uFF09
type: hot-gene
updated: ${todayStr()}
---

> \u7531 ${pub.length} \u7BC7\u771F\u5B9E\u53D1\u5E03\u6570\u636E\u63D0\u70BC\uFF0C\u5199\u7A3F\u4E0E\u8BC4\u5BA1\u65F6\u81EA\u52A8\u6CE8\u5165\u3002\u6570\u636E\u8D8A\u591A\u8D8A\u51C6\u3002\u4EBA\u5DE5\u53EF\u6539\u3002

${gene.text}

## \u5F00\u5934\u5BF9\u7167\uFF08\u771F\u5B9E\u8BFB\u8005\u6570\u636E\uFF09

### \u2705 \u9AD8\u8F6C\u53D1\u6587\u7684\u5F00\u5934
${topBrief}

### \u274C \u4F4E\u8F6C\u53D1\u6587\u7684\u5F00\u5934
${bottomBrief}
`
    );
    const cali = this.settings.autoCalibrateElite ? await this.calibrateElite(pub) : null;
    if (cali && reportFile instanceof import_obsidian.TFile) {
      const cur = await this.app.vault.read(reportFile);
      await this.app.vault.modify(reportFile, cur + cali.note + "\n");
    }
    if (!auto) {
      new import_obsidian.Notice(`\u{1F4CA} \u5DEE\u8DDD\u62A5\u544A\u5DF2\u751F\u6210 \xB7 \u7206\u6B3E\u57FA\u56E0\u5DF2\u66F4\u65B0\uFF08${pub.length}\u7BC7\uFF09${cali && cali.changed ? ` \xB7 \u7CBE\u54C1\u7EBF\u2192${cali.new}` : ""}`, 9e3);
      if (reportFile instanceof import_obsidian.TFile) await this.app.workspace.getLeaf(false).openFile(reportFile);
    } else {
      await this.notifyAutopilot(`\u{1F4CA} \u6BCF\u5468\u5DEE\u8DDD\u62A5\u544A\u5DF2\u751F\u6210\uFF08${pub.length}\u7BC7\u771F\u5B9E\u6570\u636E\uFF09${cali && cali.changed ? `\uFF0C\u7CBE\u54C1\u7EBF\u81EA\u52A8 ${cali.old}\u2192${cali.new}` : ""}\u3002\u53BB Obsidian \u590D\u76D8\u76EE\u5F55\u770B\u8BCA\u65AD\u3002`);
    }
  }
  /* v3.2 精品线自动校准：用真实爆款的 GTM 中位数调 eliteScore */
  async calibrateElite(pub) {
    const hot = pub.filter((p) => p.gtm > 0 && (p.shareRate >= 0.05 || p.reads >= this.settings.hotReadsThreshold));
    if (hot.length < 3) {
      return { changed: false, note: `
## \u7CBE\u54C1\u7EBF\u6821\u51C6

\u5E26 GTM \u5206\u7684\u7206\u6B3E\u6837\u672C\u4E0D\u8DB3 3 \u7BC7\uFF08\u5F53\u524D ${hot.length}\uFF09\uFF0C\u7EF4\u6301\u7CBE\u54C1\u7EBF ${this.settings.eliteScore}\u3002\u6512\u591F\u771F\u5B9E\u6570\u636E\u540E\u4F1A\u81EA\u52A8\u6821\u51C6\u3002` };
    }
    const scores = hot.map((p) => p.gtm).sort((a, b) => a - b);
    const median = scores[Math.floor(scores.length / 2)];
    const next = Math.max(75, Math.min(90, Math.round(median)));
    const old = this.settings.eliteScore;
    const changed = next !== old;
    if (changed) {
      this.settings.eliteScore = next;
      await this.saveSettings();
    }
    return {
      changed,
      old,
      new: next,
      note: `
## \u7CBE\u54C1\u7EBF\u6821\u51C6

\u771F\u5B9E\u7206\u6B3E\uFF08${hot.length} \u7BC7\uFF09\u7684 GTM \u4E2D\u4F4D\u6570 = ${median}\u3002\u7CBE\u54C1\u7EBF${changed ? ` \u81EA\u52A8 ${old} \u2192 ${next}` : `\u7EF4\u6301 ${old}`}\u3002
> \u903B\u8F91\uFF1A\u53EA\u8BA9"\u9884\u6D4B\u8D28\u91CF \u2265 \u5DF2\u9A8C\u8BC1\u7206\u6B3E\u6C34\u5E73"\u7684\u7A3F\u5B50\u81EA\u52A8\u8FDB\u8349\u7A3F\u7BB1\u3002`
    };
  }
  buildScoreCtx(drafts) {
    const s = this.settings;
    const entries = this.getScoreEntries();
    const hotTitles = (drafts || []).map((f) => ({ base: f.basename, fm: this.fm(f) })).filter((x) => (x.fm.stats?.reads || 0) >= s.hotReadsThreshold || Number(x.fm.stats?.shares || 0) / Math.max(1, Number(x.fm.stats?.reads || 0)) >= 0.05).map((x) => x.base + " " + (x.fm.series || ""));
    const series = s.seriesKeywords.split(/[，,]/).map((x) => x.trim()).filter(Boolean);
    return { entries, hotTitles, series, draftBases: (drafts || []).map((f) => f.basename) };
  }
  scoreTopic(topic, ctx) {
    let fileHits = 0, wikiHits = 0, seriesBonus = 0, hotBonus = 0, timelyBonus = 0;
    const fallback = topic.keywords.length === 1 && topic.keywords[0] === topic.title;
    const kws = fallback ? titleKeywords(topic.title) : topic.keywords;
    for (const kw of kws) {
      if (kw.length < 2) continue;
      for (const e of ctx.entries) {
        if (!e.base.includes(kw)) continue;
        if (e.isWiki) wikiHits++;
        else fileHits++;
      }
      if (ctx.series.some((x) => kw.includes(x) || x.includes(kw))) seriesBonus = 3;
      if (ctx.hotTitles.some((t) => t.includes(kw))) hotBonus = 5;
      if (kw === "\u70ED\u70B9" || kw === "\u9ED1\u9A6C") timelyBonus = Math.max(timelyBonus, 6);
      if (kw === "\u8282\u65E5" || kw.endsWith("\xB7\u9009\u9898\u7A97\u53E3")) timelyBonus = Math.max(timelyBonus, 4);
    }
    fileHits = Math.min(fileHits, fallback ? 8 : 30);
    wikiHits = Math.min(wikiHits, fallback ? 4 : 10);
    const dup = (ctx.draftBases || []).find((b) => bigramOverlap(topic.title, b) >= 0.55);
    const score = Math.max(0, fileHits + wikiHits * 2 + seriesBonus + hotBonus + timelyBonus - (dup ? 10 : 0));
    return { score, detail: `\u7D20\u6750 ${fileHits} \xB7 wiki ${wikiHits} \xB7 \u7CFB\u5217 +${seriesBonus} \xB7 \u8BFB\u8005\u9A8C\u8BC1 +${hotBonus} \xB7 \u65F6\u6548 +${timelyBonus}${dup ? ` \xB7 \u26A0\uFE0F\u7591\u4F3C\u5DF2\u5199\u8FC7 -10\uFF08${dup.replace(/^\d{4}-\d{2}-\d{2}-/, "").slice(0, 16)}\u2026\uFF09` : ""}` };
  }
  /* v4.3 语义召回：Mac 本地 semantic-vault 服务（意思相近即命中，不需要字面重合）*/
  async semanticRecall(query, n = 5, scope = "all") {
    const base = String(this.settings.semanticApiUrl || "").replace(/\/$/, "");
    if (!base || !query || query.length < 3) return [];
    try {
      const resp = await (0, import_obsidian.requestUrl)({
        url: `${base}/semantic?q=${encodeURIComponent(query.slice(0, 300))}&n=${n}&scope=${scope}`,
        headers: { "x-sem-token": this.settings.semanticToken || "" },
        throw: false
      });
      if (resp.status !== 200) return [];
      return resp.json?.results || [];
    } catch (e) {
      return [];
    }
  }
  /* v4.1 网络素材：库里没有的，用私搜把优质来源的正文摘录拉进素材包 */
  async fetchWebMaterial(topic) {
    const base = String(this.settings.searchApiUrl || "").replace(/\/$/, "");
    if (!base || !this.settings.webMaterial) return "";
    const kwq = topic.keywords.filter((k) => k.length >= 2 && !k.startsWith("\u4FA6\u5BDF") && !["\u70ED\u70B9", "\u9ED1\u9A6C", "\u8282\u65E5"].includes(k)).slice(0, 3).join(" ");
    const queries = [...new Set([topic.title, kwq].filter((q) => q && q.trim().length >= 4))];
    const seen = /* @__PURE__ */ new Set();
    const items = [];
    for (const q of queries) {
      try {
        const resp = await (0, import_obsidian.requestUrl)({ url: `${base}/search?q=${encodeURIComponent(q)}&n=6`, throw: false });
        if (resp.status !== 200) continue;
        for (const r of resp.json?.results || []) {
          if (!r.url || seen.has(r.url)) continue;
          seen.add(r.url);
          items.push(r);
        }
      } catch (e) {
      }
    }
    if (!items.length) return "";
    items.sort((a, b) => String(b.content || b.snippet || "").length - String(a.content || a.snippet || "").length);
    const blocks = items.filter((r) => String(r.content || r.snippet || "").length >= 120).slice(0, 8).map((r, i) => `### \u{1F310} \u6765\u6E90 ${i + 1}\uFF1A${String(r.title || "(\u65E0\u6807\u9898)").slice(0, 60)}
> ${r.url}

${String(r.content || r.snippet || "").slice(0, 1200)}
`);
    return `## \u{1F310} \u7F51\u7EDC\u7D20\u6750\uFF08\u79C1\u641C\u5B9E\u65F6\u6293\u53D6 \xB7 \u5199\u4F5C\u5F15\u7528\u65F6\u6807\u6CE8\u6765\u6E90\uFF0C\u6570\u636E\u9700\u6838\u5B9E\u539F\u6587\uFF09

${blocks.join("\n")}
`;
  }
  async buildMaterialPack(topic) {
    if (!this.gate("\u7D20\u6750\u5305\u805A\u5408")) return;
    const s = this.settings;
    const all = this.app.vault.getMarkdownFiles();
    const wikiPrefix = (0, import_obsidian.normalizePath)(s.wikiFolder) + "/";
    const capPrefix = (0, import_obsidian.normalizePath)(s.captureFolder) + "/";
    const groups = { wiki: [], flomo: [], other: [] };
    for (const kw of topic.keywords) {
      if (kw.length < 2) continue;
      for (const f2 of all) {
        const inName = f2.basename.includes(kw);
        const inHeading = (this.app.metadataCache.getFileCache(f2)?.headings || []).some((h) => h.heading.includes(kw));
        if (!inName && !inHeading) continue;
        if (f2.path.startsWith(wikiPrefix)) groups.wiki.push(f2);
        else if (f2.path.startsWith(capPrefix)) groups.flomo.push(f2);
        else groups.other.push(f2);
      }
    }
    const uniq = (arr) => [...new Map(arr.map((f2) => [f2.path, f2])).values()];
    const link = (f2) => `- [[${f2.path.replace(/\.md$/, "")}]]`;
    const secText = (label, arr, cap) => {
      const u = uniq(arr);
      const shown = u.slice(0, cap);
      return `## ${label}\uFF08${u.length}\uFF09

${shown.map(link).join("\n") || "- \uFF08\u65E0\u547D\u4E2D\uFF09"}${u.length > cap ? `
- \u2026\u53E6\u6709 ${u.length - cap} \u6761\u672A\u5217\u51FA` : ""}
`;
    };
    new import_obsidian.Notice("\u{1F310} \u79C1\u641C+\u{1F9E0}\u8BED\u4E49 \u805A\u5408\u7D20\u6750\u4E2D\u2026");
    const webSec = await this.fetchWebMaterial(topic);
    let semSec = "";
    try {
      const sem = await this.semanticRecall(topic.title, 6, "all");
      if (sem.length) {
        semSec = `## \u{1F9E0} \u8BED\u4E49\u7D20\u6750\uFF08\u5E93\u5185\u610F\u601D\u76F8\u8FD1\u7684\u6C89\u6DC0\uFF0C\u542B\u5DF2\u53D1\u6587\u7AE0\u4E0E\u65E5\u8BB0\uFF09

${sem.map((r, i) => `### \u6765\u6E90 ${i + 1}\uFF1A[[${String(r.source).replace(/\.md$/, "")}]]\uFF08\u76F8\u5173\u5EA6 ${r.score}\uFF09
${String(r.text).slice(0, 800)}
`).join("\n")}
`;
      }
    } catch (e) {
    }
    const date = todayStr();
    const body = `---
title: \u7D20\u6750\u5305\uFF1A${topic.title}
type: material-pack
created: ${date}
keywords: [${topic.keywords.join(", ")}]
---

# \u{1F4E6} \u7D20\u6750\u5305\uFF1A${topic.title}

> \u5173\u952E\u8BCD\uFF1A${topic.keywords.map((k) => "#" + k).join(" ")} \xB7 \u751F\u6210\u4E8E ${date}
> \u5339\u914D\u8303\u56F4\uFF1A\u6587\u4EF6\u540D + \u6807\u9898\u5C42\u7EA7\u3002\u5199\u4F5C\u524D\u5148\u901A\u8BFB\uFF0C\u518D\u7528\u300C\u767B\u8BB0\u8840\u7EDF\u300D\u628A\u5B9E\u9645\u7528\u5230\u7684\u6302\u56DE\u6587\u7A3F\u3002

${secText("Wiki \u7F16\u8BD1\u9875\uFF08\u5148\u8BFB\u8FD9\u4E9B\uFF0C\u6709 confidence \u6807\u6CE8\uFF09", groups.wiki, 20)}
${secText("\u6355\u83B7\u4E0E flomo \u788E\u7247", groups.flomo, 20)}
${secText("\u5176\u4ED6\u7B14\u8BB0", groups.other, 30)}
${semSec}${webSec}## \u270D\uFE0F \u5199\u4F5C\u811A\u624B\u67B6

### \u6838\u5FC3\u8BBA\u70B9\uFF08\u4E00\u53E5\u8BDD\uFF09

-

### \u8BC1\u636E\uFF08\u4ECE\u4E0A\u9762\u6311 3-5 \u6761\u6700\u786C\u7684\uFF09

-

### \u7F3A\u53E3\uFF08\u5E93\u91CC\u6CA1\u6709\u3001\u9700\u8981\u8865\u7684\uFF09

-
`;
    const f = await this.ensureFile(`${s.materialFolder}/\u7D20\u6750\u5305-${sanitizeName(topic.title)}.md`, body);
    await this.app.workspace.getLeaf(false).openFile(f);
    new import_obsidian.Notice(`\u7D20\u6750\u5305\u5DF2\u751F\u6210\uFF1A${topic.title}${webSec ? "\uFF08\u542B\u7F51\u7EDC\u7D20\u6750\uFF09" : "\uFF08\u26A0\uFE0F \u65E0\u7F51\u7EDC\u7D20\u6750\uFF0C\u4EC5\u5E93\u5185\uFF09"}`);
  }
  /* ---------- 编译任务书 ---------- */
  async addNoteToWikiQueue(file) {
    if (!(file instanceof import_obsidian.TFile) || file.extension !== "md") {
      new import_obsidian.Notice("\u8BF7\u5BF9 markdown \u7B14\u8BB0\u4F7F\u7528");
      return;
    }
    const qp = this.settings.ingestQueueFile;
    if (!qp) {
      new import_obsidian.Notice("\u672A\u914D\u7F6E wiki \u7F16\u8BD1\u961F\u5217\u6587\u4EF6\uFF08\u8BBE\u7F6E\u2192AI wiki\uFF09");
      return;
    }
    const link = file.path.replace(/\.md$/, "");
    const qf = this.app.vault.getAbstractFileByPath((0, import_obsidian.normalizePath)(qp));
    let cur = qf instanceof import_obsidian.TFile ? await this.app.vault.read(qf) : "# ingest \u961F\u5217\n\n\u52FE\u9009 = \u5DF2\u7F16\u8BD1\u8FDB wiki\u3002\u6309 AGENTS.md \u7684 ingest \u5DE5\u4F5C\u6D41\u5904\u7406\u3002\n\n";
    if (cur.includes(`[[${link}]]`)) {
      new import_obsidian.Notice("\u8FD9\u7BC7\u5DF2\u5728\u7F16\u8BD1\u961F\u5217\u91CC\u4E86");
      return;
    }
    cur = cur.replace(/\n*$/, "\n") + `- [ ] [[${link}]] \uFF08${todayStr()} \u52A0\u5165\uFF0C\u5F85\u7F16\u8BD1\uFF09
`;
    if (qf instanceof import_obsidian.TFile) await this.app.vault.modify(qf, cur);
    else await this.ensureFile(qp, cur);
    new import_obsidian.Notice(`\u{1F4E5} \u5DF2\u5165 wiki \u7F16\u8BD1\u961F\u5217\uFF1A${file.basename} \u2014 \u4ECA\u665A 3:30 \u81EA\u52A8\u7F16\u8BD1\u6210 wiki \u9875`, 8e3);
  }
  async buildIngestBrief() {
    const queue = await this.uncheckedItems(this.settings.ingestQueueFile);
    if (!queue || !queue.length) {
      new import_obsidian.Notice("ingest \u961F\u5217\u4E3A\u7A7A");
      return;
    }
    const date = todayStr();
    const wiki = this.settings.wikiFolder;
    const brief = `# \u7F16\u8BD1\u4EFB\u52A1\u4E66 ${date}

\u4F60\u5728\u4E3A Obsidian \u4ED3\u5E93\u505A Karpathy \u5F0F LLM wiki \u7684\u589E\u91CF ingest\u3002wiki \u6839\u76EE\u5F55\u662F ${wiki}/\u3002

\u5F00\u5DE5\u524D\u5FC5\u8BFB\u5E76\u4E25\u683C\u9075\u5B88\uFF1A${wiki}/AGENTS.md\u3001${wiki}/templates/ \u4E0B\u4E24\u4E2A\u6A21\u677F\u3002

\u786C\u6027\u89C4\u5219\uFF1A
1. \u53EA\u5728 ${wiki}/ \u5185\u521B\u5EFA/\u4FEE\u6539\u6587\u4EF6\uFF1B\u5E93\u91CC\u5176\u4ED6\u76EE\u5F55\u4E00\u5F8B\u53EA\u8BFB\uFF1B\u5FFD\u7565 @eaDir\u3002
2. \u4ECA\u5929\u65E5\u671F ${date}\uFF0C\u7528\u4E8E last_ingested / raw \u5361\u6587\u4EF6\u540D\u524D\u7F00\u3002
3. \u6BCF\u6761\u961F\u5217\u6761\u76EE\uFF1A\u5148\u5EFA raw/ \u6765\u6E90\u5361\uFF0C\u518D\u6309\u5185\u5BB9\u51B3\u5B9A wiki/ \u9875\u9762\uFF08\u4E00\u9875\u4E00\u6982\u5FF5\uFF1Bstatus: seed\uFF1Bconfidence 0.6-0.8\uFF1Bsources \u6307\u5411 raw \u5361\uFF1B\u4E0D\u6284\u539F\u6587\uFF1B\u5B81\u7F3A\u6BCB\u6EE5\uFF0C\u6491\u4E0D\u8D77\u5C31\u53EA\u5199\u6765\u6E90\u5361\uFF09\u3002
4. \u5199\u65B0\u9875\u524D\u5148\u68C0\u67E5 wiki/ \u4E0B\u65E0\u540C\u540D\u9875\uFF1B\u76F8\u5173\u6982\u5FF5\u5DF2\u6709\u9875\u5219\u6269\u5199\u800C\u975E\u65B0\u5EFA\u3002
5. \u5B8C\u6210\u540E\uFF1A\u66F4\u65B0 ${wiki}/index.md \u76F8\u5E94\u4E3B\u7EBF\u5206\u533A\u3001\u8FFD\u52A0 ${wiki}/log.md \u6761\u76EE\u3001\u8FD0\u884C ${wiki}/scripts/wiki_lint.sh \u786E\u8BA4 0 \u65AD\u94FE 0 \u5B64\u513F\u3002
6. \u6BCF\u7F16\u8BD1\u5B8C\u4E00\u6761\uFF0C\u628A ${this.settings.ingestQueueFile} \u91CC\u5BF9\u5E94\u6761\u76EE\u4ECE "- [ ]" \u6539\u4E3A "- [x]"\u3002

\u672C\u6B21\u961F\u5217\uFF08${queue.length} \u6761\uFF09\uFF1A
${queue.map((q) => `- ${q}`).join("\n")}

\u6700\u7EC8\u6C47\u62A5\uFF1A\u521B\u5EFA/\u4FEE\u6539\u7684\u6587\u4EF6\u6E05\u5355\u3001\u6BCF\u6761\u961F\u5217\u7684\u5904\u7406\u7ED3\u8BBA\uFF08\u5347\u9875/\u4EC5\u6765\u6E90\u5361/\u9A73\u56DE\u53CA\u539F\u56E0\uFF09\u3001lint \u7ED3\u679C\u3002
`;
    const f = await this.ensureFile(`${wiki}/\u7F16\u8BD1\u4EFB\u52A1\u4E66-${date}.md`, brief);
    let copied = false;
    try {
      await navigator.clipboard.writeText(brief);
      copied = true;
    } catch (e) {
    }
    await this.app.workspace.getLeaf(false).openFile(f);
    new import_obsidian.Notice(copied ? "\u4EFB\u52A1\u4E66\u5DF2\u751F\u6210\u5E76\u590D\u5236 \u2014 \u7C98\u8D34\u7ED9 Claude/claudian \u5373\u53EF\u6267\u884C" : "\u4EFB\u52A1\u4E66\u5DF2\u751F\u6210\uFF08\u526A\u8D34\u677F\u4E0D\u53EF\u7528\uFF0C\u8BF7\u624B\u52A8\u590D\u5236\uFF09");
  }
  /* ---------- v1.2 通用任务书 ---------- */
  briefCommonRules(scope) {
    const wiki = this.settings.wikiFolder;
    return `
\u901A\u7528\u786C\u6027\u89C4\u5219\uFF1A
1. \u52A8\u624B\u524D\u5148\u8BFB ${wiki}/AGENTS.md \u4E0E ${wiki}/wiki/systems/\u65E5\u62F1\u4E00\u5352Vault\u7ED3\u6784\u5730\u56FE.md\u3002
2. \u53EA\u5141\u8BB8\u4FEE\u6539\uFF1A${scope}\uFF1B\u5E93\u91CC\u5176\u4ED6\u6587\u4EF6\u4E00\u5F8B\u53EA\u8BFB\uFF1B\u5FFD\u7565 @eaDir\u3002
3. \u4ECA\u5929\u65E5\u671F ${todayStr()}\u3002
4. \u6D89\u53CA wiki \u53D8\u66F4\u65F6\uFF1A\u66F4\u65B0 ${wiki}/index.md\u3001\u8FFD\u52A0 ${wiki}/log.md \u6761\u76EE\u3001\u8FD0\u884C ${wiki}/scripts/wiki_lint.sh \u786E\u8BA4 0 \u65AD\u94FE 0 \u5B64\u513F\u3002
5. \u6700\u7EC8\u6C47\u62A5\uFF1A\u4FEE\u6539/\u521B\u5EFA\u6587\u4EF6\u6E05\u5355 + \u6BCF\u9879\u5904\u7406\u7ED3\u8BBA\u3002
`;
  }
  async writeBrief(title, content) {
    const path = `${this.settings.wikiFolder}/\u4EFB\u52A1\u4E66-${sanitizeName(title)}-${todayStr()}.md`;
    const existing = this.app.vault.getAbstractFileByPath((0, import_obsidian.normalizePath)(path));
    let f;
    if (existing instanceof import_obsidian.TFile) {
      await this.app.vault.modify(existing, content);
      f = existing;
    } else f = await this.ensureFile(path, content);
    let copied = false;
    try {
      await navigator.clipboard.writeText(content);
      copied = true;
    } catch (e) {
    }
    await this.app.workspace.getLeaf(false).openFile(f);
    new import_obsidian.Notice(copied ? `\u4EFB\u52A1\u4E66\u5DF2\u751F\u6210\u5E76\u590D\u5236 \u2014 \u7C98\u7ED9 Claude Code/Claudian \u6267\u884C` : "\u4EFB\u52A1\u4E66\u5DF2\u751F\u6210\uFF08\u8BF7\u624B\u52A8\u590D\u5236\uFF09");
  }
  async buildTaskBrief(kind) {
    const date = todayStr();
    const wiki = this.settings.wikiFolder;
    if (kind === "ingest") return this.buildIngestBrief();
    if (kind === "review-digest") {
      const drafts = this.filesIn(this.settings.draftsFolder, true).filter((f) => f.extension === "md");
      const reviewed = drafts.filter((f) => this.fm(f).reviewed);
      if (!reviewed.length) {
        new import_obsidian.Notice("\u8FD8\u6CA1\u6709\u5DF2\u590D\u76D8\u7684\u6587\u7A3F\uFF08\u5148\u7528\u300C\u751F\u6210\u590D\u76D8\u5361\u300D\u79EF\u7D2F\uFF09");
        return;
      }
      return this.writeBrief("\u590D\u76D8\u6D1E\u5BDF\u805A\u5408", `# \u4EFB\u52A1\u4E66\uFF1A\u590D\u76D8\u6D1E\u5BDF\u805A\u5408 ${date}

\u4EFB\u52A1\uFF1A\u901A\u8BFB\u4EE5\u4E0B ${reviewed.length} \u7BC7\u5DF2\u590D\u76D8\u6587\u7A3F\u2014\u2014\u91CD\u70B9\u8BFB\u300C\u590D\u76D8\u300D\u7AE0\u8282\u548C frontmatter \u7684 stats/sources/series\u2014\u2014\u6A2A\u5411\u63D0\u70BC\u4F5C\u8005\u7684\u7206\u6B3E\u89C4\u5F8B\uFF08\u4EC0\u4E48\u6807\u9898\u7ED3\u6784\u3001\u6BCD\u9898\u3001\u6587\u7AE0\u7ED3\u6784\u3001\u53D1\u5E03\u65F6\u673A\u6709\u6548/\u65E0\u6548\uFF09\u3002\u6309 AGENTS.md \u7684 ingest \u5DE5\u4F5C\u6D41\uFF1A\u5148\u5EFA raw \u6765\u6E90\u5361\uFF0C\u518D\u7F16\u8BD1\u6210 wiki \u6982\u5FF5\u9875\u300C\u516C\u4F17\u53F7\u7206\u6B3E\u89C4\u5F8B\u300D\uFF08status: seed\uFF0Cconfidence \u6309\u6837\u672C\u91CF\u5B9A\uFF09\uFF1B\u8BE5\u9875\u5DF2\u5B58\u5728\u5219\u6269\u5199\u5E76\u66F4\u65B0 last_ingested\u3002

\u6587\u7A3F\u6E05\u5355\uFF1A
${reviewed.map((f) => "- " + f.path).join("\n")}
${this.briefCommonRules(`${wiki}/ \u5185\u7684\u65B0\u5EFA\u4E0E\u7D22\u5F15\u6587\u4EF6`)}`);
    }
    if (kind === "lineage-batch") {
      const drafts = this.filesIn(this.settings.draftsFolder, true).filter((f) => f.extension === "md");
      const todo = drafts.filter((f) => {
        const fm = this.fm(f);
        return fm.status === "\u5DF2\u53D1" && (!Array.isArray(fm.sources) || !fm.sources.length);
      });
      if (!todo.length) {
        new import_obsidian.Notice("\u5DF2\u53D1\u6587\u7A3F\u90FD\u767B\u8BB0\u8FC7\u8840\u7EDF\u4E86");
        return;
      }
      return this.writeBrief("\u6279\u91CF\u8840\u7EDF\u767B\u8BB0", `# \u4EFB\u52A1\u4E66\uFF1A\u6279\u91CF\u8840\u7EDF\u767B\u8BB0 ${date}

\u4EFB\u52A1\uFF1A\u9010\u7BC7\u8BFB\u4EE5\u4E0B ${todo.length} \u7BC7\u5DF2\u53D1\u5E03\u6587\u7A3F\uFF0C\u63D0\u53D6\u6B63\u6587\u4E2D\u7684\u5168\u90E8 [[wikilink \u5F15\u7528]]\uFF08\u53BB\u91CD\u3001\u53BB\u6389 | \u522B\u540D\u548C # \u951A\u70B9\uFF09\uFF0C\u5199\u5165\u8BE5\u6587\u4EF6 frontmatter \u7684 sources \u5217\u8868\u3002\u53EA\u6539 frontmatter\uFF0C\u4E0D\u52A8\u6B63\u6587\u3002\u6B63\u6587\u6CA1\u6709\u5F15\u7528\u7684\uFF0C\u5728\u6C47\u62A5\u91CC\u5217\u51FA\uFF08\u4F5C\u8005\u9700\u624B\u5DE5\u8865\u94FE\uFF09\uFF0C\u4E0D\u8981\u7F16\u9020\u3002

\u6587\u7A3F\u6E05\u5355\uFF1A
${todo.map((f) => "- " + f.path).join("\n")}
${this.briefCommonRules("\u4E0A\u8FF0\u6E05\u5355\u5185\u6587\u4EF6\u7684 frontmatter\uFF08sources \u5B57\u6BB5\uFF09")}`);
    }
    if (kind === "deep-material") {
      const files = this.filesIn(this.settings.materialFolder, true).filter((f) => f.extension === "md");
      if (!files.length) {
        new import_obsidian.Notice("\u7D20\u6750\u5305\u76EE\u5F55\u4E3A\u7A7A\uFF0C\u5148\u5728\u9009\u9898\u96F7\u8FBE\u751F\u6210 \u{1F4E6}");
        return;
      }
      new FilePickModal(this.app, files, "\u9009\u62E9\u8981\u6DF1\u8BFB\u7684\u7D20\u6750\u5305\u2026", (f) => {
        this.writeBrief("\u7D20\u6750\u5305\u6DF1\u8BFB", `# \u4EFB\u52A1\u4E66\uFF1A\u7D20\u6750\u5305\u6DF1\u8BFB ${date}

\u4EFB\u52A1\uFF1A\u6253\u5F00\u7D20\u6750\u5305 ${f.path}\uFF0C\u9010\u4E00\u771F\u8BFB\u5176\u4E2D\u94FE\u63A5\u7684\u5168\u90E8\u7B14\u8BB0\u539F\u6587\uFF08\u4E0D\u53EA\u770B\u6587\u4EF6\u540D\uFF09\uFF0C\u7136\u540E\u91CD\u5199\u7D20\u6750\u5305\u7684\u300C\u5199\u4F5C\u811A\u624B\u67B6\u300D\u90E8\u5206\uFF1A
- \u6838\u5FC3\u8BBA\u70B9\uFF1A\u7ED9\u51FA 2-3 \u4E2A\u5019\u9009\u8BBA\u70B9\uFF08\u5404\u4E00\u53E5\u8BDD\uFF0C\u6CE8\u660E\u652F\u6491\u5F3A\u5EA6\uFF09
- \u8BC1\u636E\uFF1A\u6311 5-8 \u6761\u6700\u786C\u7684\uFF0C\u6BCF\u6761\u9644\u4E00\u53E5\u539F\u6587\u8981\u70B9 + \u51FA\u5904\u8DEF\u5F84
- \u7F3A\u53E3\uFF1A\u5E93\u5185\u786E\u5B9E\u6CA1\u6709\u7684\u90E8\u5206\u5982\u5B9E\u5217\u51FA\uFF0C\u4E0D\u7F16\u9020
- \u65B0\u589E\u4E00\u8282\u300C\u5019\u9009\u91D1\u53E5\u4E0E\u6570\u636E\u300D\uFF1A\u4ECE\u539F\u6587\u91CC\u6458\u53EF\u76F4\u63A5\u5F15\u7528\u7684\u53E5\u5B50\u548C\u6570\u5B57\uFF08\u5E26\u51FA\u5904\uFF09
\u53EA\u4FEE\u6539\u8FD9\u4E2A\u7D20\u6750\u5305\u6587\u4EF6\u672C\u8EAB\uFF1B\u5F15\u7528\u539F\u6587\u65F6\u6CE8\u610F\u8131\u654F\u539F\u5219\uFF08\u53C2\u8003 wiki \u7684\u8BC1\u636E\u4F18\u5148\u4E0E\u8131\u654F\u8868\u8FBE\u539F\u5219\u9875\uFF09\u3002
${this.briefCommonRules(f.path)}`);
      }).open();
      return;
    }
    if (kind === "custom") {
      new PromptModal(this.app, {
        title: "\u270D\uFE0F \u81EA\u5B9A\u4E49\u4EFB\u52A1",
        placeholder: "\u63CF\u8FF0\u4EFB\u52A1\u76EE\u6807\u3001\u5141\u8BB8\u4FEE\u6539\u7684\u8303\u56F4\u3001\u671F\u671B\u4EA7\u51FA\u2026",
        multiline: true,
        submitText: "\u751F\u6210\u4EFB\u52A1\u4E66",
        onSubmit: (txt) => this.writeBrief("\u81EA\u5B9A\u4E49\u4EFB\u52A1", `# \u4EFB\u52A1\u4E66\uFF1A\u81EA\u5B9A\u4E49 ${date}

${txt}
${this.briefCommonRules("\u4EFB\u52A1\u63CF\u8FF0\u4E2D\u660E\u786E\u6307\u5B9A\u7684\u6587\u4EF6\uFF1B\u672A\u6307\u5B9A\u5219\u4E00\u5F8B\u53EA\u8BFB")}`)
      }).open();
    }
  }
  /* ---------- v1.0 CSV 导出 ---------- */
  async exportCsv() {
    const drafts = this.filesIn(this.settings.draftsFolder, true).filter((f) => f.extension === "md");
    if (!drafts.length) {
      new import_obsidian.Notice("\u6CA1\u6709\u6587\u7A3F\u53EF\u5BFC\u51FA");
      return;
    }
    const head = ["\u6807\u9898", "\u72B6\u6001", "\u7CFB\u5217", "\u521B\u5EFA", "\u6392\u671F", "\u53D1\u5E03", "\u9605\u8BFB", "\u70B9\u8D5E", "\u5728\u770B", "\u8F6C\u53D1", "\u6DA8\u7C89", "\u5199\u4F5C\u5206\u949F", "\u6765\u6E90\u6570", "\u5DF2\u590D\u76D8"];
    const rows = [head.join(",")];
    for (const f of drafts.sort((a, b) => a.stat.ctime - b.stat.ctime)) {
      const fm = this.fm(f);
      const st = fm.stats || {};
      rows.push([
        f.basename,
        fm.status || "",
        fm.series || "",
        fm.created || "",
        fm.scheduledDate || "",
        fm.published || "",
        st.reads,
        st.likes,
        st.wows,
        st.shares,
        st.followers,
        fm.writingMinutes,
        Array.isArray(fm.sources) ? fm.sources.length : 0,
        fm.reviewed ? "\u662F" : ""
      ].map(csvCell).join(","));
    }
    const path = (0, import_obsidian.normalizePath)(`${this.settings.exportFolder}/\u5185\u5BB9\u6570\u636E\u5BFC\u51FA-${todayStr()}.csv`);
    const existing = this.app.vault.getAbstractFileByPath(path);
    if (existing instanceof import_obsidian.TFile) await this.app.vault.modify(existing, rows.join("\n"));
    else {
      await this.ensureFolder(this.settings.exportFolder);
      await this.app.vault.create(path, rows.join("\n"));
    }
    new import_obsidian.Notice(`\u5DF2\u5BFC\u51FA ${drafts.length} \u7BC7 \u2192 ${path}`);
  }
  /* ---------- v1.0 写作计时 ---------- */
  /* ---------- v3.4 番茄写作钟（吸收自 LifeOS）---------- */
  pomoRender() {
    if (!this._pomoStatus) return;
    const p = this._pomo;
    if (!p) {
      this._pomoStatus.setText("\u{1F345}");
      this._pomoStatus.setAttr("aria-label", "\u756A\u8304\u5199\u4F5C\u949F\uFF1A\u70B9\u51FB\u5F00\u59CB");
      return;
    }
    const mm = String(Math.floor(p.remaining / 60)).padStart(2, "0");
    const ss = String(p.remaining % 60).padStart(2, "0");
    const icon = p.phase === "focus" ? "\u{1F345}" : "\u2615";
    this._pomoStatus.setText(`${icon} ${mm}:${ss}${p.running ? "" : " \u23F8"}`);
    this._pomoStatus.setAttr("aria-label", `${p.phase === "focus" ? "\u4E13\u6CE8" : "\u4F11\u606F"}\u4E2D \xB7 \u70B9\u51FB${p.running ? "\u6682\u505C" : "\u7EE7\u7EED"}`);
  }
  pomoStartOrToggle() {
    if (this._pomo) {
      this.pomoToggle();
      return;
    }
    const f = this.app.workspace.getActiveFile();
    this._pomo = { phase: "focus", remaining: Math.max(1, this.settings.pomodoroFocus) * 60, running: true, count: 0, filePath: f ? f.path : "" };
    new import_obsidian.Notice(`\u{1F345} \u4E13\u6CE8\u5F00\u59CB ${this.settings.pomodoroFocus} \u5206\u949F${f ? "\uFF1A" + f.basename : ""}`);
    this.pomoRender();
  }
  pomoClick() {
    this.pomoStartOrToggle();
  }
  pomoToggle() {
    if (!this._pomo) return;
    this._pomo.running = !this._pomo.running;
    new import_obsidian.Notice(this._pomo.running ? "\u25B6\uFE0F \u7EE7\u7EED" : "\u23F8 \u6682\u505C");
    this.pomoRender();
  }
  pomoStop() {
    if (!this._pomo) {
      new import_obsidian.Notice("\u6CA1\u6709\u8FDB\u884C\u4E2D\u7684\u756A\u8304");
      return;
    }
    this._pomo = null;
    this.pomoRender();
    new import_obsidian.Notice("\u{1F345} \u5DF2\u505C\u6B62");
  }
  pomoTick() {
    const p = this._pomo;
    if (!p || !p.running) return;
    p.remaining -= 1;
    if (p.remaining <= 0) {
      this.pomoComplete();
      return;
    }
    this.pomoRender();
  }
  async pomoComplete() {
    const p = this._pomo;
    if (!p) return;
    this.pomoBeep();
    if (p.phase === "focus") {
      p.count += 1;
      const mins = this.settings.pomodoroFocus;
      if (p.filePath) {
        const f = this.app.vault.getAbstractFileByPath(p.filePath);
        if (f instanceof import_obsidian.TFile) await this.app.fileManager.processFrontMatter(f, (fm) => {
          fm.writingMinutes = (fm.writingMinutes || 0) + mins;
        });
      }
      try {
        const df = await this.ensureFile(`${this.settings.diaryFolder}/${todayStr()}.md`, this.settings.diaryTemplate.replace(/\{\{date\}\}/g, todayStr()));
        const hhmm = (/* @__PURE__ */ new Date()).toTimeString().slice(0, 5);
        const name = p.filePath ? p.filePath.split("/").pop().replace(/\.md$/, "") : "";
        await this.appendToNote(df, `
- \u{1F345} ${hhmm} \u4E13\u6CE8 ${mins} \u5206\u949F${name ? " @" + name : ""}`);
      } catch (e) {
      }
      const isLong = p.count % Math.max(1, this.settings.pomodoroLongEvery) === 0;
      const bmin = isLong ? this.settings.pomodoroLongBreak : this.settings.pomodoroBreak;
      new import_obsidian.Notice(`\u{1F345} \u7B2C ${p.count} \u4E2A\u756A\u8304\u5B8C\u6210\uFF01${isLong ? "\u957F" : ""}\u4F11\u606F ${bmin} \u5206\u949F`, 8e3);
      this._pomo = { phase: "break", remaining: Math.max(1, bmin) * 60, running: !!this.settings.pomodoroAutoBreak, count: p.count, filePath: p.filePath };
      if (!this.settings.pomodoroAutoBreak) new import_obsidian.Notice("\u25B6\uFE0F \u70B9\u72B6\u6001\u680F\u6216\u547D\u4EE4\u5F00\u59CB\u4F11\u606F", 5e3);
    } else {
      new import_obsidian.Notice("\u2615 \u4F11\u606F\u7ED3\u675F\uFF0C\u5F00\u59CB\u4E0B\u4E00\u4E2A\u4E13\u6CE8", 6e3);
      this._pomo = { phase: "focus", remaining: Math.max(1, this.settings.pomodoroFocus) * 60, running: false, count: p.count, filePath: p.filePath };
    }
    this.pomoRender();
  }
  pomoBeep() {
    if (!this.settings.pomodoroSound) return;
    try {
      const AC = window.AudioContext || window.webkitAudioContext;
      const ctx = new AC();
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.connect(g);
      g.connect(ctx.destination);
      o.frequency.value = 880;
      g.gain.value = 0.15;
      o.start();
      o.stop(ctx.currentTime + 0.25);
      setTimeout(() => ctx.close(), 400);
    } catch (e) {
    }
  }
  async toggleTimer() {
    if (this._timer) {
      const { path, start } = this._timer;
      this._timer = null;
      const mins = Math.max(1, Math.round((Date.now() - start) / 6e4));
      const f2 = this.app.vault.getAbstractFileByPath(path);
      if (f2 instanceof import_obsidian.TFile) {
        await this.app.fileManager.processFrontMatter(f2, (fm) => {
          fm.writingMinutes = (fm.writingMinutes || 0) + mins;
        });
        new import_obsidian.Notice(`\u23F1 \u672C\u6B21\u5199\u4F5C ${mins} \u5206\u949F\uFF0C\u5DF2\u8BA1\u5165 ${f2.basename}`);
      } else new import_obsidian.Notice(`\u23F1 \u672C\u6B21 ${mins} \u5206\u949F\uFF08\u539F\u6587\u4EF6\u5DF2\u4E0D\u5728\uFF0C\u672A\u8BB0\u5F55\uFF09`);
      return;
    }
    const f = this.app.workspace.getActiveFile();
    if (!f) {
      new import_obsidian.Notice("\u5148\u6253\u5F00\u8981\u8BA1\u65F6\u7684\u6587\u7A3F");
      return;
    }
    this._timer = { path: f.path, start: Date.now() };
    new import_obsidian.Notice(`\u23F1 \u5F00\u59CB\u8BA1\u65F6\uFF1A${f.basename}\uFF08\u518D\u6B21\u6267\u884C\u547D\u4EE4\u7ED3\u675F\uFF09`);
  }
};
var ContentOSSettingTab = class extends import_obsidian.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
    this.activeTab = "pipeline";
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    containerEl.addClass("cos-settings");
    const header = containerEl.createEl("div", { cls: "cos-set-header" });
    const brand = header.createEl("div", { cls: "cos-set-brand" });
    brand.createEl("span", { cls: "cos-set-logo", text: "\u26A1" });
    brand.createEl("span", { cls: "cos-set-name", text: BRAND.name });
    brand.createEl("span", { cls: "cos-set-ver", text: "v" + BRAND.version });
    const aiLink = brand.createEl("a", { cls: "cos-set-ai", text: "\u6DFB\u52A0 AI \u{1F916}" });
    aiLink.addEventListener("click", () => {
      this.activeTab = "ai";
      this.display();
    });
    const linksRow = header.createEl("div", { cls: "cos-set-links" });
    for (const [label, url] of BRAND.links) {
      const a = linksRow.createEl("a", { cls: "cos-set-link", text: label });
      a.addEventListener("click", () => {
        if (url) window.open(url);
        else new import_obsidian.Notice(`\u300C${label}\u300D\u94FE\u63A5\u5F85\u914D\u7F6E\uFF1Amain.js \u9876\u90E8 BRAND.links`);
      });
    }
    const TABS = [
      ["pipeline", "\u5185\u5BB9\u7BA1\u9053", "\u6587\u7A3F\u3001\u9009\u9898\u3001\u7D20\u6750\u5305\u8DEF\u5F84\u4E0E\u81EA\u68C0\u6E05\u5355\u6765\u6E90"],
      ["produce", "\u751F\u4EA7\u4E0E\u6355\u83B7", "\u6355\u83B7\u7BB1\u3001\u65E5\u8BB0\u3001\u6536\u4EF6\u7BB1\u5206\u6D41\u4E0E PARA \u76EE\u5F55"],
      ["publish", "\u53D1\u5E03\u4E0E\u590D\u76D8", "\u6392\u671F\u3001\u590D\u76D8\u63D0\u9192\u3001\u7CFB\u5217\u65AD\u66F4\u4E0E\u7206\u6B3E\u9608\u503C"],
      ["radar", "\u96F7\u8FBE\u4E0E\u5065\u5EB7", "\u9009\u9898\u8BC4\u5206\u5173\u952E\u8BCD\u4E0E\u7BA1\u7EBF\u5065\u5EB7\u9608\u503C"],
      ["ai", "AI \u8FDE\u63A5", "AI wiki \u7F16\u8BD1\u5C42\u4E0E BYOK \u9884\u7559"],
      ["upgrade", "\u6FC0\u6D3B\u5347\u7EA7", "Pro \u8BB8\u53EF\u4E0E\u7248\u672C\u4FE1\u606F"]
    ];
    const tabBar = containerEl.createEl("div", { cls: "cos-set-tabs" });
    for (const [id, label, help] of TABS) {
      const tab = tabBar.createEl("div", { cls: "cos-set-tab" + (this.activeTab === id ? " cos-set-tab-active" : "") });
      tab.createEl("span", { text: label });
      if (id !== "upgrade" && id !== "ai") {
        const q = tab.createEl("span", { cls: "cos-set-help", text: "?" });
        q.addEventListener("click", (e) => {
          e.stopPropagation();
          new import_obsidian.Notice(help);
        });
      }
      tab.addEventListener("click", () => {
        this.activeTab = id;
        this.display();
      });
    }
    const body = containerEl.createEl("div", { cls: "cos-set-body" });
    const addText = (name, desc, key) => {
      new import_obsidian.Setting(body).setName(name).setDesc(desc).addText(
        (t) => t.setValue(String(this.plugin.settings[key])).onChange(async (v) => {
          this.plugin.settings[key] = v.trim();
          await this.plugin.saveSettings();
        })
      );
    };
    const addNum = (name, desc, key) => {
      new import_obsidian.Setting(body).setName(name).setDesc(desc).addText(
        (t) => t.setValue(String(this.plugin.settings[key])).onChange(async (v) => {
          const n = parseInt(v, 10);
          if (!isNaN(n)) {
            this.plugin.settings[key] = n;
            await this.plugin.saveSettings();
          }
        })
      );
    };
    const addArea = (name, desc, key) => {
      new import_obsidian.Setting(body).setName(name).setDesc(desc).addTextArea(
        (t) => t.setValue(this.plugin.settings[key]).onChange(async (v) => {
          this.plugin.settings[key] = v;
          await this.plugin.saveSettings();
        })
      );
    };
    if (this.activeTab === "pipeline") {
      addText("\u6587\u7A3F\u6587\u4EF6\u5939", "\u5185\u5BB9\u7BA1\u9053\u626B\u63CF\u6B64\u5904", "draftsFolder");
      addText("\u9009\u9898\u5E93\u6587\u4EF6", "\u9009\u9898 checklist \u6587\u4EF6", "topicsFile");
      addText("\u7D20\u6750\u5305\u6587\u4EF6\u5939", "\u7D20\u6750\u5305\u751F\u6210\u4F4D\u7F6E", "materialFolder");
      addText("\u6D41\u6C34\u7EBF\u6587\u4EF6\u5939", "\u5185\u5BB9\u6D41\u6C34\u7EBF\u5361\u7247\u4F4D\u7F6E", "pipelineFolder");
      addText("\u81EA\u68C0\u6E05\u5355\u6765\u6E90", "\u5199\u4F5C\u81EA\u68C0\u9762\u677F\u8BFB\u53D6\u6B64\u7B14\u8BB0\u7684\u5217\u8868\u9879", "checklistFile");
      addArea("\u6587\u7A3F\u6B63\u6587\u6A21\u677F", "\u652F\u6301 {{title}} {{date}} {{series}}", "draftBodyTemplate");
    } else if (this.activeTab === "produce") {
      addText("\u6355\u83B7\u6587\u4EF6\u5939", "flomo \u5F0F\u5FEB\u901F\u6355\u83B7\u7684\u843D\u70B9", "captureFolder");
      addText("\u6536\u4EF6\u7BB1\u5206\u6D41\u76EE\u6807", "\u6536\u4EF6\u7BB1\u8BC4\u5BA1\u300C\u5F52\u7D20\u6750\u300D\u79FB\u52A8\u5230\u6B64\u76EE\u5F55", "inboxMaterialFolder");
      addText("\u65E5\u8BB0\u6587\u4EF6\u5939", "\u4ECA\u65E5\u65E5\u8BB0\u6240\u5728\u76EE\u5F55", "diaryFolder");
      addText("\u5468\u671F\u7B14\u8BB0\u6839\u76EE\u5F55", "LifeOS \u683C\u5F0F\uFF1AYYYY/Daily\xB7Weekly\xB7Monthly\xB7Quarterly + Templates/", "periodicFolder");
      addArea("\u65E5\u8BB0\u6A21\u677F", "\u652F\u6301 {{date}} \u5360\u4F4D\u7B26", "diaryTemplate");
      addText("\u9879\u76EE\u6587\u4EF6\u5939", "PARA \xB7 Projects", "projectsFolder");
      addText("\u9886\u57DF\u6587\u4EF6\u5939", "PARA \xB7 Areas", "areasFolder");
      addText("\u8D44\u6E90\u6587\u4EF6\u5939", "PARA \xB7 Resources", "resourcesFolder");
      addText("\u5B58\u6863\u6587\u4EF6\u5939", "PARA \xB7 Archive", "archiveFolder");
      addNum("\u{1F345} \u4E13\u6CE8\u65F6\u957F\uFF08\u5206\u949F\uFF09", "\u756A\u8304\u5199\u4F5C\u949F\u5355\u4E2A\u4E13\u6CE8\u65F6\u957F", "pomodoroFocus");
      addNum("\u{1F345} \u77ED\u4F11\u606F\uFF08\u5206\u949F\uFF09", "\u6BCF\u4E2A\u756A\u8304\u540E\u7684\u77ED\u4F11\u606F", "pomodoroBreak");
      addNum("\u{1F345} \u957F\u4F11\u606F\uFF08\u5206\u949F\uFF09", "\u6BCF N \u4E2A\u756A\u8304\u540E\u7684\u957F\u4F11\u606F", "pomodoroLongBreak");
      addNum("\u{1F345} \u957F\u4F11\u606F\u95F4\u9694\uFF08\u4E2A\uFF09", "\u6BCF\u51E0\u4E2A\u756A\u8304\u89E6\u53D1\u4E00\u6B21\u957F\u4F11\u606F", "pomodoroLongEvery");
      new import_obsidian.Setting(body).setName("\u{1F345} \u63D0\u793A\u97F3").setDesc("\u756A\u8304/\u4F11\u606F\u7ED3\u675F\u54CD\u4E00\u58F0").addToggle((t) => t.setValue(this.plugin.settings.pomodoroSound).onChange(async (v) => {
        this.plugin.settings.pomodoroSound = v;
        await this.plugin.saveSettings();
      }));
      new import_obsidian.Setting(body).setName("\u{1F345} \u81EA\u52A8\u5F00\u59CB\u4F11\u606F").setDesc("\u4E13\u6CE8\u7ED3\u675F\u540E\u81EA\u52A8\u8FDB\u5165\u4F11\u606F\u5012\u8BA1\u65F6\uFF08\u5426\u5219\u624B\u52A8\u5F00\u59CB\uFF09").addToggle((t) => t.setValue(this.plugin.settings.pomodoroAutoBreak).onChange(async (v) => {
        this.plugin.settings.pomodoroAutoBreak = v;
        await this.plugin.saveSettings();
      }));
      new import_obsidian.Setting(body).setName("\u229E \u542F\u52A8\u65F6\u81EA\u52A8\u5E03\u7F6E\u5DE5\u4F5C\u53F0").setDesc("\u6BCF\u6B21\u6253\u5F00 Obsidian \u81EA\u52A8\u5E03\u5C40\uFF1A\u5DE6\u65E5\u5386\xB7\u4E2D\u4E3B\u754C\u9762\xB7\u53F3AI\u5BF9\u8BDD").addToggle((t) => t.setValue(this.plugin.settings.defaultLayoutOnStart).onChange(async (v) => {
        this.plugin.settings.defaultLayoutOnStart = v;
        await this.plugin.saveSettings();
      }));
      new import_obsidian.Setting(body).setName("\u229E \u4E2D\u95F4\u9762\u677F").setDesc("\u5DE5\u4F5C\u53F0\u4E2D\u95F4\u663E\u793A\uFF1A\u4E3B\u754C\u9762 \u6216 \u7075\u611F\u6D41").addDropdown((d) => {
        d.addOption("dashboard", "\u4E3B\u754C\u9762\uFF08\u4EEA\u8868\u76D8\uFF09");
        d.addOption("flomo", "\u7075\u611F\u6D41");
        d.setValue(this.plugin.settings.layoutCenter || "dashboard").onChange(async (v) => {
          this.plugin.settings.layoutCenter = v;
          await this.plugin.saveSettings();
        });
      });
    } else if (this.activeTab === "publish") {
      addNum("GTM \u8FBE\u6807\u9608\u503C\uFF080-100\uFF09", "Autopilot \u521D\u7A3F\u9700\u8FBE\u6B64\u5206\u624D\u81EA\u52A8\u8FC7 TR1\uFF1B\u5355\u7BC7 GTM \u8BC4\u5206\u4E5F\u7528\u5B83\u5224 go/optimize", "gtmThreshold");
      addNum("Autopilot \u91CD\u5199\u4E0A\u9650", "\u521D\u7A3F\u672A\u8FBE GTM \u9608\u503C\u65F6\u6700\u591A\u81EA\u52A8\u91CD\u5199\u51E0\u6B21\uFF0C\u8D85\u9650\u5219\u505C\u673A\u5F85\u4EBA\u5DE5", "autopilotMaxRetries");
      addText("Autopilot \u544A\u8B66 Webhook", "\u98DE\u4E66\u673A\u5668\u4EBA\u5730\u5740\uFF08\u53EF\u9009\uFF09\uFF1AAutopilot \u5B8C\u6210\u6216\u505C\u673A\u65F6\u63A8\u9001\uFF1B\u7559\u7A7A\u5219\u53EA\u5F39 Obsidian \u901A\u77E5", "autopilotWebhook");
      addNum("\u590D\u76D8\u63D0\u9192\uFF08\u5929\uFF09", "\u53D1\u5E03\u6EE1 N \u5929\u4E14\u672A\u590D\u76D8\u5219\u51FA\u73B0\u5728\u300C\u5F85\u590D\u76D8\u300D", "reviewAfterDays");
      addNum("\u7CFB\u5217\u65AD\u66F4\u9884\u8B66\uFF08\u5929\uFF09", "\u7CFB\u5217\u8DDD\u4E0A\u7BC7\u53D1\u5E03\u8D85\u8FC7 N \u5929\u5219\u9884\u8B66", "seriesGapWarnDays");
      addNum("\u7206\u6B3E\u9608\u503C\uFF08\u9605\u8BFB\uFF09", "\u9605\u8BFB \u2265 N \u7684\u6587\u7A3F\u89C6\u4E3A\u7206\u6B3E\uFF0C\u53CD\u54FA\u9009\u9898\u96F7\u8FBE\u8BC4\u5206", "hotReadsThreshold");
      addText("CSV \u5BFC\u51FA\u76EE\u5F55", "\u300C\u5BFC\u51FA\u5185\u5BB9\u6570\u636E CSV\u300D\u7684\u8F93\u51FA\u4F4D\u7F6E", "exportFolder");
      addText("\u53D1\u5E03 API \u5730\u5740", "\u81EA\u6108\u5199\u4F5C\u53F0\u5730\u5740\uFF08\u5982 https://jacquesxu.com/wechat\uFF09\uFF0C\u{1F4EE} \u4E00\u952E\u63A8\u9001\u516C\u4F17\u53F7\u8349\u7A3F\u7BB1", "publishApiUrl");
      new import_obsidian.Setting(body).setName("\u53D1\u5E03 API Token").setDesc("\u5199\u4F5C\u53F0\u7684 WRITER_TOKEN\uFF0C\u53EA\u5B58\u672C\u673A data.json").addText((t) => {
        t.inputEl.type = "password";
        t.setValue(this.plugin.settings.publishToken).onChange(async (v) => {
          this.plugin.settings.publishToken = v.trim();
          await this.plugin.saveSettings();
        });
      });
      addText("\u98CE\u683C\u753B\u50CF\u6587\u4EF6", "AI \u5199\u7A3F\u65F6\u4E25\u683C\u6A21\u4EFF\u7684\u4E2A\u4EBA\u98CE\u683C\u6863\u6848\uFF08\u5982 5. \u8868\u8FBE/\u4E2A\u4EBA\u98CE\u683C\u5E93/\u98CE\u683C\u753B\u50CF.md\uFF09", "styleProfileFile");
      addText("\u5C0F\u7EA2\u4E66\u586B\u5355\u673A\u811A\u672C", "Playwright \u534A\u81EA\u52A8\u53D1\u5E03\u811A\u672C\u8DEF\u5F84\uFF08\u5982 /Users/you/ops/xhs-publish.py\uFF09\uFF1B\u81EA\u52A8\u4F20\u56FE\u586B\u5355\uFF0C\u53D1\u5E03\u4EBA\u5DE5\u70B9", "xhsPublishScript");
      addText("\u771F\u5B9E\u7ECF\u5386\u5E93\uFF08\u53EF\u9009\uFF09", "\u9664\u65E5\u8BB0+\u6355\u83B7\u7BB1\u5916\uFF0C\u989D\u5916\u68C0\u7D22\u6B64\u6587\u4EF6\u5939\u7684\u771F\u5B9E\u7ECF\u5386\uFF08\u5199\u7A3F\u65F6\u6309\u9009\u9898\u5173\u952E\u8BCD\u81EA\u52A8\u8C03\u53D6\uFF0C\u5582\u7ED9\u5199\u624B\u505A\u7B2C\u4E00\u4EBA\u79F0\u7D20\u6750\uFF09", "experienceFolder");
      new import_obsidian.Setting(body).setName("\u{1F3A8} \u63A8\u9001\u65F6\u81EA\u52A8\u914D\u56FE").setDesc("\u63A8\u516C\u4F17\u53F7\u8349\u7A3F\u7BB1\u65F6\u7528 MiniMax \u81EA\u52A8\u751F\u6210\u5C01\u9762+2\u5F20\u63D2\u56FE\uFF08\u9700 AI \u670D\u52A1\u5546=MiniMax\uFF09\u3002Lovart \u624B\u52A8\u914D\u56FE\u4E0D\u53D7\u5F71\u54CD\uFF1A\u6B63\u6587\u5DF2\u6709\u56FE\u5219\u8DF3\u8FC7").addToggle((t) => t.setValue(this.plugin.settings.autoIllustrate).onChange(async (v) => {
        this.plugin.settings.autoIllustrate = v;
        await this.plugin.saveSettings();
      }));
      addText("\u914D\u56FE\u98CE\u683C\u540E\u7F00", "\u62FC\u5728\u6BCF\u4E2A\u914D\u56FE\u63D0\u793A\u8BCD\u540E\uFF0C\u7EDF\u4E00\u5168\u7BC7\u753B\u98CE", "illustrateStyle");
      new import_obsidian.Setting(body).setName("\u{1F9F9} \u53BBAI\u5473\u95E8\u7981").setDesc("\u5168\u81EA\u52A8\u6D41\u6C34\u7EBF TR1 \u540E\u81EA\u52A8\u4F53\u68C0 AI \u5473\uFF08\u52A0\u7C97/\u7834\u6298\u53F7/\u5957\u8BDD/\u5217\u8868\u5BC6\u5EA6\uFF09\uFF0C\u8D85\u6807\u81EA\u52A8\u6E05\u6D17\uFF1A\u7ED3\u6784\u7C89\u788E+\u60C5\u611F\u5FAE\u6270").addToggle((t) => t.setValue(this.plugin.settings.aiFlavorGate).onChange(async (v) => {
        this.plugin.settings.aiFlavorGate = v;
        await this.plugin.saveSettings();
      }));
      new import_obsidian.Setting(body).setName("\u{1F50E} \u4E8B\u5B9E\u6838\u67E5\u95E8\u7981").setDesc("\u5168\u81EA\u52A8\u6D41\u6C34\u7EBF TR1 \u540E\u81EA\u52A8\u6838\u67E5\uFF1A\u4E8B\u5B9E\u6027\u58F0\u79F0\u6838\u9A8C + \u533B\u7597\u5408\u89C4\u7EA2\u7EBF\uFF08\u8FDD\u7981\u8BCD\u786C\u626B\u63CF + AI \u5BA1\uFF09\uFF0C\u62A5\u544A\u5199\u8FDB\u6D41\u6C34\u7EBF\u5361").addToggle((t) => t.setValue(this.plugin.settings.factCheckGate).onChange(async (v) => {
        this.plugin.settings.factCheckGate = v;
        await this.plugin.saveSettings();
      }));
      addNum("\u53BBAI\u5473\u9608\u503C\uFF080-100\uFF09", "\u4F53\u68C0\u5206\u8D85\u6B64\u503C\u89E6\u53D1\u6E05\u6D17\uFF1B\u8D8A\u4F4E\u8D8A\u4E25\u683C", "aiFlavorMax");
      new import_obsidian.Setting(body).setName("\u{1F50C} \u672C\u5730 HTTP \u5165\u53E3").setDesc("\u684C\u9762\u7AEF\u5F00\u672C\u5730\u7AEF\u53E3\uFF0C\u8BA9 VPS/\u5FEB\u6377\u6307\u4EE4\u76F4\u63A5\u63A8\u9009\u9898\u3001\u6295\u7075\u611F\u3001\u89E6\u53D1\u6D77\u9009\uFF08POST /topic /capture /batch\uFF09").addToggle((t) => t.setValue(this.plugin.settings.httpEnabled).onChange(async (v) => {
        this.plugin.settings.httpEnabled = v;
        await this.plugin.saveSettings();
        v ? this.plugin.startHttpServer() : this.plugin.stopHttpServer();
      }));
      addNum("HTTP \u7AEF\u53E3", "\u672C\u5730\u76D1\u542C\u7AEF\u53E3\uFF08\u9ED8\u8BA4 3030\uFF09\uFF0C\u6539\u540E\u7528\u547D\u4EE4\u300C\u91CD\u542F\u672C\u5730 HTTP \u5165\u53E3\u300D\u751F\u6548", "httpPort");
      new import_obsidian.Setting(body).setName("HTTP Token").setDesc("\u8BBF\u95EE\u4EE4\u724C\uFF0C\u8BF7\u6C42\u5934 x-cos-token \u9700\u5339\u914D\uFF1B\u7AEF\u53E3\u5BF9 Tailscale/\u5C40\u57DF\u7F51\u5F00\u653E\uFF0C\u52A1\u5FC5\u8BBE\u4E00\u4E2A").addText((t) => {
        t.inputEl.type = "password";
        t.setValue(this.plugin.settings.httpToken).onChange(async (v) => {
          this.plugin.settings.httpToken = v.trim();
          await this.plugin.saveSettings();
        });
      });
    } else if (this.activeTab === "radar") {
      addText("\u7CFB\u5217\u5173\u952E\u8BCD", "\u9017\u53F7\u5206\u9694\uFF1B\u9009\u9898\u547D\u4E2D\u5219\u96F7\u8FBE\u52A0\u5206", "seriesKeywords");
      addNum("\u{1F3AF} \u8282\u65E5\u63D0\u524D\u5929\u6570", "\u8DDD\u8282\u65E5\u51E0\u5929\u5185\u81EA\u52A8\u628A\u8282\u65E5\u9009\u9898\u7A97\u53E3\u6CE8\u5165\u9009\u9898\u5E93", "holidayWindowDays");
      addNum("\u53D1\u5E03\u95F4\u9694\u9884\u8B66\uFF08\u5929\uFF09", "\u8DDD\u4E0A\u6B21\u53D1\u5E03\u8D85\u8FC7\u6B64\u5929\u6570\u5219\u9884\u8B66", "publishGapWarnDays");
      addNum("\u5FC3\u8DF3\u9884\u8B66\uFF08\u5929\uFF09", "\u76D1\u63A7\u76EE\u5F55\u8D85\u8FC7\u6B64\u5929\u6570\u65E0\u5199\u5165\u5219\u9884\u8B66", "heartbeatWarnDays");
      addText("memory daily \u76EE\u5F55", "\u81EA\u52A8\u5316\u5FC3\u8DF3\u76D1\u63A7\u70B9", "memoryDailyFolder");
    } else if (this.activeTab === "ai") {
      body.createEl("div", { cls: "cos-set-blurb", text: "BYOK\uFF1AAI \u63A8\u7406\u4F7F\u7528\u4F60\u81EA\u5DF1\u7684 API Key\uFF0CContent OS \u4E0D\u7ECF\u624B\u4EFB\u4F55\u5185\u5BB9\u3002\u56FD\u4EA7\u5382\u5546\u8D70 OpenAI \u517C\u5BB9\u683C\u5F0F\uFF0CClaude \u8D70 Anthropic \u683C\u5F0F\uFF1B\u5730\u5740\u548C\u6A21\u578B\u540D\u7559\u7A7A\u5219\u7528\u9884\u8BBE\u3002" });
      const preset = AI_PRESETS[this.plugin.settings.aiProvider] || AI_PRESETS.custom;
      new import_obsidian.Setting(body).setName("AI \u670D\u52A1\u5546").setDesc("\u5207\u6362\u540E\u5730\u5740/\u6A21\u578B\u81EA\u52A8\u8DDF\u968F\u9884\u8BBE\uFF08\u53EF\u8986\u76D6\uFF09").addDropdown((d) => {
        Object.entries(AI_PRESETS).forEach(([id, p]) => d.addOption(id, p.label));
        d.setValue(this.plugin.settings.aiProvider).onChange(async (v) => {
          this.plugin.settings.aiProvider = v;
          await this.plugin.saveSettings();
          this.display();
        });
      });
      addText("API \u5730\u5740\uFF08\u53EF\u9009\uFF09", `\u7559\u7A7A\u4F7F\u7528\u9884\u8BBE\uFF1A${preset.baseUrl || "\uFF08\u81EA\u5B9A\u4E49\u5FC5\u586B\uFF09"}`, "aiBaseUrl");
      addText("\u6A21\u578B\u540D\uFF08\u53EF\u9009\uFF09", `\u7559\u7A7A\u4F7F\u7528\u9884\u8BBE\uFF1A${preset.model || "\uFF08\u81EA\u5B9A\u4E49\u5FC5\u586B\uFF09"}`, "aiModel");
      new import_obsidian.Setting(body).setName("API Key").setDesc("\u6DF7\u6DC6\u5B58\u50A8\u4E8E\u672C\u5730 data.json\uFF08\u975E\u5F3A\u52A0\u5BC6\uFF09\uFF1B\u82E5\u5E93\u7ECF\u660E\u6587\u6E20\u9053\u540C\u6B65\uFF0C\u5BC6\u94A5\u53EF\u80FD\u968F\u4E4B\u6269\u6563\uFF0C\u5EFA\u8BAE\u5BF9\u5E93\u542F\u7528\u7AEF\u5230\u7AEF\u52A0\u5BC6").addText((t) => {
        t.inputEl.type = "password";
        t.setValue(this.plugin.settings.aiApiKey).onChange(async (v) => {
          this.plugin.settings.aiApiKey = v.trim();
          await this.plugin.saveSettings();
        });
      });
      addNum("\u5355\u6B21\u56DE\u590D\u4E0A\u9650\uFF08tokens\uFF09", "AI \u8F93\u51FA\u957F\u5EA6\u4E0A\u9650", "aiMaxTokens");
      const addFloat = (name, desc, key) => {
        new import_obsidian.Setting(body).setName(name).setDesc(desc).addText((t) => t.setValue(String(this.plugin.settings[key])).onChange(async (v) => {
          const n = parseFloat(v);
          if (!isNaN(n) && n >= 0 && n <= 2) {
            this.plugin.settings[key] = n;
            await this.plugin.saveSettings();
          }
        }));
      };
      addFloat("\u{1F321} \u5199\u624B\u6E29\u5EA6", "\u521D\u7A3F\u521B\u9020\u6027\uFF08\u9ED8\u8BA4 0.85\uFF1A\u94A9\u5B50\u4E0E\u89D2\u5EA6\u591A\u6837\u6027\u6765\u6E90\uFF09", "tempWriter");
      addFloat("\u{1F321} \u8BC4\u59D4\u6E29\u5EA6", "GTM \u8BC4\u5206\u4E00\u81F4\u6027\uFF08\u9ED8\u8BA4 0.15\uFF1A\u8D8A\u4F4E\u8D8A\u7A33\uFF0C\u5FAA\u73AF\u5DE5\u7A0B\u4E0D\u5728\u566A\u58F0\u91CC\u6253\u8F6C\uFF09", "tempJudge");
      addFloat("\u{1F321} \u6539\u7A3F\u6E29\u5EA6", "\u4FEE\u8BA2\u4E0E\u53BBAI\u5473\uFF08\u9ED8\u8BA4 0.5\uFF09", "tempReviser");
      addNum("\u{1F3B2} Best-of-N \u521D\u7A3F\u91C7\u6837", "\u540C\u4E00\u9009\u9898\u5E76\u884C\u5199 N \u7248\u521D\u7A3F\uFF08\u4E0D\u540C\u89D2\u5EA6\uFF09\uFF0C\u8BC4\u59D4\u9009\u4F18\u540E\u8FDB\u4FEE\u8BA2\u5FAA\u73AF\uFF1B1=\u5173\u95ED\uFF0C\u6700\u59273\u3002token \u6362\u8D28\u91CF\u4E0A\u9650", "draftSamples");
      new import_obsidian.Setting(body).setName("\u8FDE\u63A5\u6D4B\u8BD5").setDesc("\u53D1\u9001\u4E00\u6761\u6700\u5C0F\u8BF7\u6C42\u9A8C\u8BC1\u914D\u7F6E\u662F\u5426\u53EF\u7528").addButton((b) => b.setButtonText("\u6D4B\u8BD5\u8FDE\u63A5").setCta().onClick(() => this.plugin.testAI()));
      new import_obsidian.Setting(body).setName("\u6D41\u5F0F\u8F93\u51FA\uFF08\u5B9E\u9A8C\uFF09").setDesc("\u5BF9\u8BDD\u9762\u677F\u9010\u5B57\u8F93\u51FA\uFF1B\u53D7\u670D\u52A1\u5546 CORS \u9650\u5236\u65F6\u81EA\u52A8\u56DE\u9000\u6574\u6BB5\u6A21\u5F0F").addToggle((t) => t.setValue(!!this.plugin.settings.aiStreaming).onChange(async (v) => {
        this.plugin.settings.aiStreaming = v;
        await this.plugin.saveSettings();
      }));
      addText("\u63D0\u793A\u8BCD\u76EE\u5F55", "\u6240\u6709\u89D2\u8272\u63D0\u793A\u8BCD\u5DF2\u5916\u7F6E\u4E3A md \u6587\u4EF6\uFF0C\u6539\u6587\u4EF6\u5373\u751F\u6548", "promptsFolder");
      const us = this.plugin.settings.usageStats;
      if (us) {
        const d = us.byDay?.[todayStr()] || { in: 0, out: 0, calls: 0 };
        body.createEl("div", { cls: "cos-set-blurb", text: `\u{1F4CA} \u7528\u91CF\uFF1A\u4ECA\u65E5 \u2191${d.in}/\u2193${d.out} tokens\uFF08${d.calls} \u6B21\uFF09\xB7 \u7D2F\u8BA1 \u2191${us.totalIn}/\u2193${us.totalOut}\uFF08${us.calls} \u6B21\uFF09` });
      }
      body.createEl("div", { cls: "cos-set-blurb", text: "\u5DF2\u63A5\u5165\u7684 AI \u80FD\u529B\uFF1AAI \u5BF9\u8BDD\u9762\u677F\uFF08\u591A\u5382\u5546+\u5E93\u4E0A\u4E0B\u6587\uFF09\u3001\u9009\u9898\u96F7\u8FBE \u{1F916} \u8BC4\u4F30\u3001\u5199\u4F5C\u81EA\u68C0 \u{1F916} \u9010\u6761\u5BA1\u7A3F\u3002\u4EFB\u52A1\u4E66\uFF08\u6539\u6587\u4EF6\u7684\u91CD\u6D3B\uFF09\u8D70 Claude Code/Claudian \u901A\u9053\uFF0C\u4E0D\u6D88\u8017\u6B64\u5904 Key\u3002" });
      addText("wiki \u6839\u76EE\u5F55", "AI \u7F16\u8BD1\u5C42\u4F4D\u7F6E\uFF08\u542B AGENTS.md\uFF09", "wikiFolder");
      addText("ingest \u961F\u5217\u6587\u4EF6", "\u5F85\u7F16\u8BD1\u7B14\u8BB0\u961F\u5217", "ingestQueueFile");
      addText("\u79C1\u6709\u641C\u7D22 API", "\u81EA\u5EFA\u79C1\u641C\u5730\u5740\uFF08\u5982 http://100.106.87.41:9314\uFF09\uFF1B\u7559\u7A7A\u5173\u95ED\u641C\u7D22\u589E\u5F3A", "searchApiUrl");
      addText("\u{1F9E0} \u8BED\u4E49\u68C0\u7D22 API", '\u672C\u673A semantic-vault \u670D\u52A1\uFF08http://127.0.0.1:9494\uFF09\uFF1A\u7D20\u6750\u5305/\u771F\u5B9E\u7ECF\u5386/\u5BF9\u8BDD\u83B7\u5F97"\u610F\u601D\u76F8\u8FD1"\u53EC\u56DE\uFF0C\u8D85\u8D8A\u5B57\u9762\u5339\u914D', "semanticApiUrl");
      new import_obsidian.Setting(body).setName("\u8BED\u4E49\u68C0\u7D22 Token").setDesc("~/ops/.semantic-token \u7684\u503C").addText((t) => {
        t.inputEl.type = "password";
        t.setValue(this.plugin.settings.semanticToken).onChange(async (v) => {
          this.plugin.settings.semanticToken = v.trim();
          await this.plugin.saveSettings();
        });
      });
      new import_obsidian.Setting(body).setName("\u{1F310} \u7D20\u6750\u5305\u7F51\u7EDC\u589E\u5F3A").setDesc("\u751F\u6210\u7D20\u6750\u5305\u65F6\u7528\u79C1\u641C\u6293\u53D6\u4F18\u8D28\u6765\u6E90\u6B63\u6587\u6458\u5F55\uFF08\u5E93\u5185\u6CA1\u6709\u7684\u9009\u9898\u4E5F\u80FD\u6709\u7684\u653E\u77E2\uFF09").addToggle((t) => t.setValue(this.plugin.settings.webMaterial).onChange(async (v) => {
        this.plugin.settings.webMaterial = v;
        await this.plugin.saveSettings();
      }));
      addNum("\u5FAA\u73AF\u5DE5\u7A0B\xB7\u53CA\u683C\u5206", "GTM \u8BC4\u59D4\u6253\u5206\u8FBE\u5230\u6B64\u5206\u5373\u505C\u6B62\u4FEE\u8BA2\u5FAA\u73AF", "autoLoopPassScore");
      addNum("\u5FAA\u73AF\u5DE5\u7A0B\xB7\u6700\u5927\u8F6E\u6B21", "\u4FEE\u8BA2\u5FAA\u73AF\u4E0A\u9650\uFF08\u9632\u6B62\u65E0\u9650\u5FAA\u73AF\u70E7 token\uFF09", "autoLoopMaxIters");
      new import_obsidian.Setting(body).setName("\u{1F319} \u65E0\u4EBA\u503C\u5B88\uFF08\u6BCF\u65E5\u5168\u81EA\u52A8\uFF09").setDesc("\u6BCF\u5929\u5230\u70B9\u81EA\u52A8\uFF1A\u4ECE\u9009\u9898\u5E93\u6311\u4E00\u6761 \u2192 \u5EFA\u5361 \u2192 \u5199\u7A3F \u2192 GTM \u5FAA\u73AF \u2192 \u63A8\u516C\u4F17\u53F7\u8349\u7A3F\u7BB1\u3002\u4EC5\u684C\u9762\u7AEF\u6267\u884C\uFF0C\u6BCF\u5929\u4E00\u7BC7").addToggle((t) => t.setValue(this.plugin.settings.dailyAutoEnabled).onChange(async (v) => {
        this.plugin.settings.dailyAutoEnabled = v;
        await this.plugin.saveSettings();
      }));
      addNum("\u65E0\u4EBA\u503C\u5B88\xB7\u542F\u52A8\u65F6\u523B", "\u5F53\u5929 Obsidian \u5F00\u7740\u4E14\u65F6\u95F4 \u2265 \u6B64\u5C0F\u65F6\uFF0824 \u5236\uFF09\u624D\u89E6\u53D1", "dailyAutoHour");
      new import_obsidian.Setting(body).setName("\u65E0\u4EBA\u503C\u5B88\xB7\u81EA\u52A8\u63A8\u8349\u7A3F\u7BB1").setDesc("\u8FBE\u6807\u7A3F\u81EA\u52A8\u8FDB\u516C\u4F17\u53F7\u8349\u7A3F\u7BB1\uFF1B\u6700\u7EC8\u7FA4\u53D1\u6C38\u8FDC\u7531\u4F60\u5728\u516C\u4F17\u53F7\u540E\u53F0\u6309").addToggle((t) => t.setValue(this.plugin.settings.dailyAutoPush).onChange(async (v) => {
        this.plugin.settings.dailyAutoPush = v;
        await this.plugin.saveSettings();
      }));
      addText("\u9009\u9898\u5E93\u6587\u4EF6", "\u65E0\u4EBA\u503C\u5B88\u4ECE\u8FD9\u91CC\u6311\u9009\u9898\uFF08\u8BC6\u522B\u300C- [ ] \u300D\u5F00\u5934\u7684\u884C\uFF0C\u5F00\u5DE5\u540E\u81EA\u52A8\u52FE\u6389\uFF09", "topicLibraryFile");
      addNum("\u6279\u91CF\u6D77\u9009\xB7\u6BCF\u65E5\u7BC7\u6570", "token \u7BA1\u591F\u5C31\u591A\u5199\uFF1A\u6BCF\u5929\u5199\u8FD9\u4E48\u591A\u7BC7\u9009\u9898\uFF0C\u8BC4\u59D4\u6253\u5206\u540E\u53EA\u53D1\u8FBE\u6807\u7684\uFF08\u5B81\u7F3A\u6BCB\u6EE5\uFF09", "dailyAutoBatch");
      addNum("\u6279\u91CF\u6D77\u9009\xB7\u7CBE\u54C1\u7EBF\uFF080-100\uFF09", "GTM \u8FBE\u5230\u6B64\u5206\u624D\u8FDB\u8349\u7A3F\u7BB1\uFF1B\u6CA1\u5230\u7684\u7559\u6D41\u6C34\u7EBF\u5F85\u4EBA\u5DE5\u590D\u770B\u3002\u8FFD\u6C42\u8D28\u91CF\u5C31\u8C03\u9AD8", "eliteScore");
      addNum("\u6BCF\u6279\u6700\u591A\u63A8\u9001\uFF08\u7BC7\uFF09", "\u9632\u81EA\u6211\u51B2\u6D41\uFF1A\u5FAE\u4FE1\u63A8\u8350\u662F\u5355\u7BC7\u957F\u5C3E\uFF08\u53EF\u8FBE7-30\u5929\uFF09\uFF0C\u6BCF\u6279\u53EA\u63A8\u6700\u4F18 N \u7BC7\u8FDB\u8349\u7A3F\u7BB1\uFF0C\u53D1\u5E03\u8282\u594F\u5EFA\u8BAE\u6BCF\u54682-3\u7BC7", "pushTopN");
      addText("\u590D\u76D8\u6587\u4EF6\u5939", "10\u4E07+\u5DEE\u8DDD\u62A5\u544A\u4E0E\u7206\u6B3E\u57FA\u56E0\u7684\u5B58\u653E\u76EE\u5F55", "reviewFolder");
      addText("\u7206\u6B3E\u57FA\u56E0\u6587\u4EF6", "\u5199\u7A3F\u65F6\u81EA\u52A8\u6CE8\u5165\u7684\u8BFB\u8005\u9A8C\u8BC1\u7206\u70B9\uFF08\u5DEE\u8DDD\u62A5\u544A\u4F1A\u81EA\u52A8\u751F\u6210/\u66F4\u65B0\u6B64\u6587\u4EF6\uFF0C\u628A\u5B83\u586B\u8FD9\u91CC\uFF09", "hotGeneFile");
      addText("\u7206\u6B3E\u7814\u7A76\u6587\u4EF6\u5939", "\u653E\u884C\u4E1A 10\u4E07+ \u5168\u6587\uFF08\u6BCF\u7BC7\u4E00\u4E2A md\uFF09\uFF0C\u8DD1\u300C\u{1F52C} \u89E3\u5256\u7206\u6B3E\u5E93\u300D\u63D0\u70BC\u5916\u90E8\u7206\u6B3E\u57FA\u56E0", "hotStudyFolder");
      addText("\u5916\u90E8\u7206\u6B3E\u57FA\u56E0\u6587\u4EF6", "\u89E3\u5256\u7206\u6B3E\u5E93\u7684\u4EA7\u7269\uFF0C\u5199\u7A3F/\u8BC4\u5BA1\u65F6\u4E0E\u81EA\u6709\u57FA\u56E0\u5E76\u7528\uFF08\u5F15\u5BFC\u671F\u7684\u8001\u5E08\uFF09", "extGeneFile");
      new import_obsidian.Setting(body).setName("\u{1F4CA} \u6BCF\u5468\u81EA\u52A8\u5DEE\u8DDD\u62A5\u544A").setDesc("\u6BCF 7 \u5929\u81EA\u52A8\u8DD1\u4E00\u6B21\u5DEE\u8DDD\u62A5\u544A + \u66F4\u65B0\u7206\u6B3E\u57FA\u56E0\uFF08\u9700\u5DF2\u5F55\u771F\u5B9E\u6570\u636E\uFF1B\u7ED3\u679C\u98DE\u4E66\u901A\u77E5\uFF09").addToggle((t) => t.setValue(this.plugin.settings.gapReportWeekly).onChange(async (v) => {
        this.plugin.settings.gapReportWeekly = v;
        await this.plugin.saveSettings();
      }));
      new import_obsidian.Setting(body).setName("\u{1F4CA} \u81EA\u52A8\u6821\u51C6\u7CBE\u54C1\u7EBF").setDesc("\u7528\u771F\u5B9E\u7206\u6B3E\u7684 GTM \u4E2D\u4F4D\u6570\u81EA\u52A8\u8C03 eliteScore\uFF08\u7206\u6B3E\u6837\u672C\u22653\u7BC7\u624D\u52A8\uFF0C\u8303\u56F475-90\uFF09").addToggle((t) => t.setValue(this.plugin.settings.autoCalibrateElite).onChange(async (v) => {
        this.plugin.settings.autoCalibrateElite = v;
        await this.plugin.saveSettings();
      }));
      addText("\u5BF9\u8BDD\u6C89\u6DC0\u76EE\u5F55", "AI \u5BF9\u8BDD\u300C\u5B58\u4E3A\u7B14\u8BB0\u300D\u7684\u843D\u70B9", "chatSaveFolder");
      addText("\u5BF9\u8BDD\u95EE\u5019\u540D", "\u5BF9\u8BDD\u9762\u677F\u7A7A\u72B6\u6001\u7684\u79F0\u547C\uFF08\u5982 Jacques\uFF09\uFF0C\u7559\u7A7A\u53EA\u663E\u793A\u95EE\u5019\u8BED", "chatUserName");
      addArea("\u5BF9\u8BDD\u7CFB\u7EDF\u63D0\u793A\u8BCD", "AI \u5BF9\u8BDD\u9762\u677F\u7684\u89D2\u8272\u8BBE\u5B9A", "chatSystemPrompt");
    } else if (this.activeTab === "upgrade") {
      const pro = body.createEl("div", { cls: "cos-set-pro" });
      pro.createEl("div", { cls: "cos-set-pro-title", text: "\u26A1 Content OS Pro" });
      pro.createEl("div", { cls: "cos-set-blurb", text: BRAND.tagline });
      const ul = pro.createEl("ul", { cls: "cos-set-blurb" });
      ["\u9009\u9898\u96F7\u8FBE\u8BC4\u5206 + \u7206\u6B3E\u53CD\u54FA", "\u4E00\u952E\u7D20\u6750\u5305\u5168\u5E93\u805A\u5408", "\u8D44\u4EA7\u4EA7\u51FA\u699C\uFF08\u6309\u9605\u8BFB\u52A0\u6743\uFF09", "\u7BA1\u7EBF\u5065\u5EB7\u76D1\u63A7\u5168\u5957", "\u53D1\u5E03\u8BA1\u5212 / \u590D\u76D8\u5361 / \u7CFB\u5217\u9762\u677F", "AI \u9009\u9898\u8BC4\u4F30 / \u6807\u9898\u6253\u78E8\uFF08BYOK\uFF09", "\u683C\u5F0F\u5DE5\u5382\u5168\u90E8\u6A21\u677F + CSV \u5BFC\u51FA"].forEach((x) => ul.createEl("li", { text: x }));
      new import_obsidian.Setting(body).setName("License Key").setDesc("\u8F93\u5165\u8BB8\u53EF\u8BC1\u5BC6\u94A5\u6FC0\u6D3B Pro\uFF1B\u79BB\u7EBF\u9A8C\u7B7E\uFF0C\u65E0\u9700\u8054\u7F51").addText(
        (t) => t.setValue(this.plugin.settings.licenseKey).onChange(async (v) => {
          this.plugin.settings.licenseKey = v.trim();
          await this.plugin.saveSettings();
        })
      );
      const st = body.createEl("div", { cls: "cos-set-blurb" });
      const render = (info) => {
        if (BRAND.edition === "dev") {
          st.setText("\u72B6\u6001\uFF1A\u5F00\u53D1\u7248 \xB7 \u5168\u529F\u80FD\u5F00\u653E");
          return;
        }
        if (!this.plugin.settings.licenseKey) {
          st.setText("\u72B6\u6001\uFF1A\u514D\u8D39\u7248\uFF08\u586B\u5165\u5BC6\u94A5\u6FC0\u6D3B Pro\uFF09");
          return;
        }
        if (info?.valid) st.setText(`\u2705 \u5DF2\u6FC0\u6D3B \xB7 ${info.email}${info.expiry ? " \xB7 \u81F3 " + info.expiry : " \xB7 \u6C38\u4E45"}`);
        else st.setText("\u274C \u5BC6\u94A5\u65E0\u6548\uFF1A" + (info?.reason || "\u672A\u77E5"));
      };
      render(this.plugin._licenseInfo);
      new import_obsidian.Setting(body).addButton((b) => b.setButtonText("\u6821\u9A8C\u5BC6\u94A5").setCta().onClick(async () => {
        const info = await this.plugin.refreshLicense();
        render(info);
        new import_obsidian.Notice(info.valid ? "Pro \u5DF2\u6FC0\u6D3B" : "\u5BC6\u94A5\u65E0\u6548\uFF1A" + info.reason);
      }));
      const reOnboard = body.createEl("button", { cls: "cos-kind", text: "\u91CD\u65B0\u8FD0\u884C\u9996\u6B21\u5411\u5BFC" });
      reOnboard.addEventListener("click", () => new OnboardingModal(this.app, this.plugin).open());
    }
  }
};
var main_default = ContentOSPlugin;
