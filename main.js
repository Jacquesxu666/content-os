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
  version: "2.9.1",
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
  aiMaxTokens: 2e3,
  searchApiUrl: "",
  publishApiUrl: "",
  publishToken: "",
  styleProfileFile: "",
  dailyAutoEnabled: false,
  dailyAutoHour: 9,
  dailyAutoPush: true,
  autoIllustrate: false,
  illustrateStyle: "\uFF0C\u73B0\u4EE3\u6742\u5FD7\u7F16\u8F91\u914D\u56FE\u98CE\u683C\uFF0C\u7EDF\u4E00\u9AD8\u7EA7\u8D28\u611F\uFF0C\u67D4\u548C\u81EA\u7136\u5149\uFF0C\u5E72\u51C0\u7559\u767D\u6784\u56FE\uFF0C\u65E0\u6587\u5B57\u65E0\u6C34\u5370",
  topicLibraryFile: "",
  lastDailyAuto: "",
  gtmThreshold: 75,
  autopilotMaxRetries: 2,
  autopilotWebhook: "",
  autoLoopMaxIters: 3,
  autoLoopPassScore: 80,
  pipelineFolder: "Pipeline",
  chatSaveFolder: "AI-Chats",
  chatSystemPrompt: "\u4F60\u662F\u4E00\u4F4D\u5D4C\u5165 Obsidian \u5E93\u7684\u5185\u5BB9\u521B\u4F5C\u4E0E\u77E5\u8BC6\u7BA1\u7406\u52A9\u624B\u3002\u4F18\u5148\u57FA\u4E8E\u300C\u53C2\u8003\u4E0A\u4E0B\u6587\u300D\u56DE\u7B54\uFF1B\u4E0A\u4E0B\u6587\u6CA1\u6709\u7684\u4FE1\u606F\u4E0D\u8981\u7F16\u9020\uFF0C\u660E\u786E\u8BF4\u4E0D\u77E5\u9053\u3002\u56DE\u7B54\u7528\u4E2D\u6587 markdown\uFF0C\u7B80\u6D01\u52A1\u5B9E\uFF0C\u76F4\u63A5\u7ED9\u53EF\u6267\u884C\u7684\u5EFA\u8BAE\u3002",
  onboarded: false,
  flomoMobileDefault: false,
  flomoPageSize: 30,
  promptsFolder: "Wiki/content-os-prompts",
  aiStreaming: false,
  usageStats: null
};
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

\u8BC4\u5206\u541D\u556C\uFF1A60 \u53CA\u683C\uFF0C75+ \u624D\u662F\u80FD\u6253\u7684\u7A3F\u3002\u5B81\u82DB\u523B\u52FF\u653E\u6C34\u2014\u2014\u653E\u6C34\u4F1A\u8BA9\u70C2\u7A3F\u6D41\u5411\u5E02\u573A\u3002total \u4E3A\u4E03\u9879\u52A0\u6743\u603B\u5206(0-100)\u3002`
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
    const fields = [["reads", "\u9605\u8BFB"], ["likes", "\u70B9\u8D5E"], ["wows", "\u5728\u770B"], ["shares", "\u8F6C\u53D1"], ["followers", "\u6DA8\u7C89"]];
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
    const p = this.plugin;
    el.createEl("div", { cls: "cos-title", text: "\u{1F3ED} \u5185\u5BB9\u6D41\u6C34\u7EBF" });
    const actions = el.createEl("div", { cls: "cos-actions" });
    actions.createEl("button", { cls: "cos-action", text: "\u2795 \u65B0\u5EFA\u6D41\u6C34\u7EBF" }).addEventListener("click", () => new NewPipelineModal(p.app, p).open());
    const cards = p.pipelineCards();
    const active = cards.filter((x) => x.fm.status !== "done" && x.fm.status !== "rejected");
    const done = cards.filter((x) => x.fm.status === "done");
    if (!active.length) {
      el.createEl("div", { cls: "cos-dim cos-line", text: "\u6CA1\u6709\u8FDB\u884C\u4E2D\u7684\u6D41\u6C34\u7EBF\u3002\u4ECE\u9009\u9898\u96F7\u8FBE\u70B9 \u25B6\uFE0F \u6216\u70B9\u4E0A\u9762\u300C\u65B0\u5EFA\u300D\u3002" });
    }
    for (const x of active.sort((a, b) => b.f.stat.mtime - a.f.stat.mtime)) {
      const card = el.createEl("div", { cls: "cos-section" });
      const head = card.createEl("div", { cls: "cos-item" });
      const a = head.createEl("a", { cls: "cos-pipe-title", text: x.fm.topic || x.f.basename });
      a.addEventListener("click", () => p.app.workspace.getLeaf(false).openFile(x.f));
      const chips = card.createEl("div", { cls: "cos-stages" });
      const curIdx = PIPE_STAGES.indexOf(x.fm.stage);
      PIPE_STAGES.forEach((st, i) => {
        const gate = PIPE_GATES[st] ? `${st}\xB7${PIPE_GATES[st]}` : st;
        chips.createEl("span", {
          cls: "cos-stage" + (i < curIdx ? " cos-stage-done" : i === curIdx ? " cos-stage-cur" : ""),
          text: (i < curIdx ? "\u2713 " : "") + gate
        });
      });
      const row = card.createEl("div", { cls: "cos-kind-row" });
      const mkb = (label, cta, fn) => {
        const b = row.createEl("button", { cls: "cos-kind" + (cta ? " mod-cta" : ""), text: label });
        b.addEventListener("click", fn);
      };
      if (x.fm.stage !== "\u5B8C\u6210") {
        mkb(`\u25B6\uFE0F \u8DD1\u300C${x.fm.stage}\u300D`, true, async () => {
          await p.runPipelineStage(x.f);
          this.scheduleRender();
        });
        mkb("\u{1F916} Autopilot", false, async () => {
          if (!p.settings.searchApiUrl && !confirm("Autopilot \u5C06\u5168\u81EA\u52A8\u8DD1\u5230\u53D1\u5E03\u51C6\u5907\uFF08\u591A\u8F6E AI \u751F\u6210+GTM\u8BC4\u5BA1\uFF0C\u6D88\u8017\u8F83\u591A token\uFF09\u3002\u7EE7\u7EED\uFF1F")) return;
          await p.runAutopilot(x.f);
          this.scheduleRender();
        });
        if (x.fm.stage === "\u5BA1\u9898") mkb("\u{1F916} \u5168\u81EA\u52A8", false, () => {
          p.runAutoPipeline(x.f);
        });
        mkb(`\u2705 \u8FC7${PIPE_GATES[x.fm.stage] || "\u95E8\u7981"}`, false, async () => {
          await p.gatePass(x.f);
          this.scheduleRender();
        });
        mkb("\u274C \u9A73\u56DE", false, () => p.gateReject(x.f));
      }
      const links = card.createEl("div", { cls: "cos-line cos-dim" });
      if (x.fm.materialPack) {
        const m = links.createEl("a", { text: "\u{1F4E6} \u7D20\u6750\u5305\u3000" });
        m.addEventListener("click", () => p.openPath(x.fm.materialPack));
      }
      if (x.fm.draft) {
        const d = links.createEl("a", { text: "\u{1F4C4} \u8349\u7A3F" });
        d.addEventListener("click", () => p.openPath(x.fm.draft));
      }
    }
    if (done.length) {
      const sec = el.createEl("div", { cls: "cos-section" });
      sec.createEl("div", { cls: "cos-section-title", text: `\u5DF2\u5B8C\u6210 \xB7 ${done.length}` });
      done.slice(0, 5).forEach((x) => {
        const a = sec.createEl("div", { cls: "cos-item" }).createEl("a", { text: x.fm.topic || x.f.basename });
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
    head.createEl("span", { cls: "cos-chat-title", text: `\u{1F4AC} AI \u5BF9\u8BDD \xB7 ${cfg.label}` });
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
      msgs.createEl("div", { cls: "cos-dim cos-line", text: "\u9644\u4E0A\u4E0A\u4E0B\u6587\u518D\u63D0\u95EE\uFF0C\u56DE\u7B54\u4F1A\u57FA\u4E8E\u4F60\u7684\u5E93\u3002\u8F7B\u95EE\u9898\u7528\u56FD\u4EA7\u6A21\u578B\u7701\u94B1\uFF1B\u8981\u52A8\u6587\u4EF6\u7684\u91CD\u6D3B\u7528\u300C\u4EFB\u52A1\u4E66\u300D\u4EA4\u7ED9 Claude Code/Claudian\u3002" });
    }
    for (const m of this.messages) {
      const b = msgs.createEl("div", { cls: "cos-msg cos-msg-" + m.role });
      b.createEl("div", { cls: "cos-msg-role", text: m.role === "user" ? "\u4F60" : "AI" });
      b.createEl("div", { cls: "cos-msg-body", text: m.content });
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
    if (this.busy) msgs.createEl("div", { cls: "cos-dim cos-line", text: "\u{1F916} \u601D\u8003\u4E2D\u2026" });
    msgs.scrollTop = msgs.scrollHeight;
    const inp = el.createEl("div", { cls: "cos-chat-input" });
    const ta = inp.createEl("textarea", { cls: "cos-input", attr: { rows: "3", placeholder: "\u63D0\u95EE\u2026\uFF08Cmd/Ctrl+Enter \u53D1\u9001\uFF09" } });
    const send = inp.createEl("button", { cls: "mod-cta cos-chat-send", text: this.busy ? "\u2026" : "\u53D1\u9001" });
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
      if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        doSend();
      }
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
    el.createEl("div", { cls: "cos-title", text: "\u26A1 Content OS" });
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
    sec.createEl("div", { cls: "cos-dim cos-line", text: "\u8BC4\u5206 = \u7D20\u6750 + wiki\xD72 + \u7CFB\u5217\u8D34\u8FD1 + \u8BFB\u8005\u9A8C\u8BC1\uFF08\u5173\u952E\u8BCD\u547D\u4E2D\u7206\u6B3E +5\uFF09" });
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
    this.addCommand({ id: "export-csv", name: "\u5BFC\u51FA\u5185\u5BB9\u6570\u636E CSV", callback: () => this.exportCsv() });
    this.addCommand({ id: "run-unattended", name: "\u{1F319} \u65E0\u4EBA\u503C\u5B88\uFF1A\u73B0\u5728\u8DD1\u4E00\u7BC7\uFF08\u81EA\u52A8\u9009\u9898\u2192\u5199\u2192\u5BA1\u2192\u6539\u2192\u63A8\u8349\u7A3F\u7BB1\uFF09", callback: () => this.runUnattended(true) });
    this.registerInterval(window.setInterval(() => this.dailyAutoTick(), 10 * 60 * 1e3));
    window.setTimeout(() => this.dailyAutoTick(), 90 * 1e3);
    this.addCommand({ id: "toggle-writing-timer", name: "\u5F00\u59CB/\u7ED3\u675F\u5199\u4F5C\u8BA1\u65F6", callback: () => this.toggleTimer() });
    this.addCommand({ id: "open-calendar", name: "\u6253\u5F00\u5185\u5BB9\u65E5\u5386", callback: () => this.activateCalendar() });
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
    });
    ["create", "delete", "rename"].forEach((ev) => this.registerEvent(this.app.vault.on(ev, () => {
      this._entriesCache = null;
    })));
  }
  onunload() {
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
      const content = (await this.app.vault.read(file)).slice(0, 8e3);
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
    if (stage === "\u53D1\u5E03\u51C6\u5907") {
      const seg = content.split("## \u53D1\u5E03\u51C6\u5907\uFF08ADCP")[1];
      if (!seg) return "\u5148\u8DD1\u300C\u53D1\u5E03\u51C6\u5907\u300D\u751F\u6210\u53D1\u5E03\u6E05\u5355";
      const unchecked = (seg.match(/- \[ \]/g) || []).length;
      if (unchecked) return `\u53D1\u5E03\u6E05\u5355\u8FD8\u6709 ${unchecked} \u9879\u672A\u52FE\u9009`;
    }
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
    const pack = packFile instanceof import_obsidian.TFile ? (await this.app.vault.cachedRead(packFile)).slice(0, 5e3) : "";
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
  async pipeDraft(file, fm, feedback = "") {
    new import_obsidian.Notice(`\u{1F3ED} \u5199\u7A3F\u4E2D\uFF1A${fm.topic}\u2026\uFF08\u7BC7\u5E45\u8F83\u957F\u8BF7\u7A0D\u5019\uFF09`);
    const card = (await this.app.vault.read(file)).slice(0, 8e3);
    let pack = "";
    if (fm.materialPack) {
      const pf = this.app.vault.getAbstractFileByPath((0, import_obsidian.normalizePath)(fm.materialPack));
      if (pf instanceof import_obsidian.TFile) pack = (await this.app.vault.cachedRead(pf)).slice(0, 5e3);
    }
    const fb = feedback ? `

\u4E0A\u4E00\u7A3F\u7684 GTM \u8BC4\u5BA1\u610F\u89C1\uFF08\u672C\u6B21\u5FC5\u987B\u9010\u6761\u6539\u8FDB\uFF09\uFF1A
${feedback}` : "";
    let style = "";
    const sfp = this.settings.styleProfileFile && this.app.vault.getAbstractFileByPath((0, import_obsidian.normalizePath)(this.settings.styleProfileFile));
    if (sfp instanceof import_obsidian.TFile) {
      style = `

\u4F5C\u8005\u4E2A\u4EBA\u98CE\u683C\u753B\u50CF\uFF08\u5199\u4F5C\u5FC5\u987B\u4E25\u683C\u8D34\u5408\uFF0C\u5C24\u5176\u6807\u5FD7\u6027\u53E5\u5F0F\u4E0E\u53CD\u9762\u6E05\u5355\uFF09\uFF1A
${(await this.app.vault.cachedRead(sfp)).slice(0, 3500)}`;
    }
    const r = await this.llmChatMessages(
      await this.loadPrompt("draft-writer"),
      [{ role: "user", content: `\u6D41\u6C34\u7EBF\u5361\uFF1A
${card}

\u7D20\u6750\u5305\uFF1A
${pack}${style}${fb}` }],
      Math.max(4e3, this.settings.aiMaxTokens)
    );
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
    const r = await this.llmChat(await this.loadPrompt("gtm-review"), String(text).slice(0, 9e3));
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
        await this.pipePublishPrep(file, fmEnd);
        await log("\u5DF2\u5230\u53D1\u5E03\u51C6\u5907\u3002\u5168\u90E8\u4EA7\u7269\u5C31\u7EEA\uFF08\u6B63\u7A3F+\u884D\u751F\u7A3F+\u6E05\u5355\uFF09\u3002**\u6700\u7EC8\u53D1\u5E03\u7559\u7ED9\u4F60**\u2014\u2014AI \u4E0D\u81EA\u52A8\u5BF9\u5916\u53D1\u5E03\u3002");
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
    await this.runUnattended(false);
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
  /* ---------- v2.7 一键推送公众号草稿箱（经自愈写作台 API）---------- */
  cleanForPublish(raw) {
    let t = String(raw).replace(/^---[\s\S]*?---\n/, "");
    t = t.split("\n").filter((l) => !l.startsWith("> \u26A0\uFE0F AI") && !l.startsWith("> \u{1F916}")).join("\n");
    for (const mark of ["\n## \u81EA\u68C0", "\n## AI \u81EA\u68C0", "\n## GTM", "\n## \u590D\u76D8", "\n### \u{1F3A8} \u914D\u56FE\u63D0\u793A\u8BCD"]) {
      const i = t.indexOf(mark);
      if (i > 0) t = t.slice(0, i);
    }
    return t.trim();
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
        body: JSON.stringify({ title, markdown })
      });
      if (resp.status !== 200) throw new Error(`API ${resp.status}\uFF1A${String(resp.text).slice(0, 160)}`);
      await this.app.fileManager.processFrontMatter(target, (f) => {
        f.pushedWechat = todayStr();
      });
      new import_obsidian.Notice(`\u2705 \u5DF2\u8FDB\u516C\u4F17\u53F7\u8349\u7A3F\u7BB1\uFF1A${title} \u2014 \u53BB\u540E\u53F0\u9884\u89C8\u6392\u7248\u540E\u53D1\u5E03`, 8e3);
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
  async pipePublishPrep(file, fm) {
    if (!fm.draft) {
      new import_obsidian.Notice("\u6CA1\u6709\u8349\u7A3F");
      return;
    }
    const draft = this.app.vault.getAbstractFileByPath((0, import_obsidian.normalizePath)(fm.draft));
    if (!(draft instanceof import_obsidian.TFile)) {
      new import_obsidian.Notice("\u8349\u7A3F\u6587\u4EF6\u4E0D\u5B58\u5728");
      return;
    }
    new import_obsidian.Notice("\u{1F3ED} \u53D1\u5E03\u51C6\u5907\uFF1A\u751F\u6210\u884D\u751F\u7A3F\u4E0E\u6E05\u5355\u2026");
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
    await this.appendToNote(file, `
## \u53D1\u5E03\u51C6\u5907\uFF08ADCP \u95E8\u7981\u6750\u6599\uFF09\xB7 ${todayStr()}

- [ ] \u6807\u9898\u5B9A\u7A3F\uFF08\u6807\u9898\u5DE5\u4F5C\u53F0\u9009\u5B9A\uFF09
- [ ] \u5934\u56FE/\u914D\u56FE\u5C31\u4F4D
- [ ] \u6392\u671F\u5DF2\u8BBE\uFF08\u{1F4C5}\uFF09
- [ ] \u5C0F\u7EA2\u4E66\u7248/\u7EBF\u7A0B\u7248\u68C0\u67E5\u5B8C\u6BD5
- [ ] \u53D1\u5E03\u5230\u516C\u4F17\u53F7\u540E\u53F0
- [ ] \u53D1\u5E03\u540E 7 \u5929\uFF1A\u5F55\u6570\u636E \u2192 \u590D\u76D8\u5361\uFF08\u4EEA\u8868\u76D8\u4F1A\u63D0\u9192\uFF09
`);
    await this.app.workspace.getLeaf(false).openFile(file);
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
        const revisePrompt = await this.loadPrompt("draft-reviser");
        const charter = (await this.app.vault.read(file)).slice(0, 5e3);
        let finalScore = 0;
        for (let i = 1; i <= maxIters; i++) {
          new import_obsidian.Notice(`\u{1F916} \u5FAA\u73AF\u5DE5\u7A0B \u7B2C${i}\u8F6E\uFF1AGTM \u8BC4\u59D4\u8BC4\u5206\u2026`);
          const body = (await this.app.vault.read(draft)).slice(0, 9e3);
          let judge = await this.llmChatMessages(
            judgePrompt,
            [{ role: "user", content: `\u4F5C\u8005 Charter\uFF1A
${charter}

\u5F85\u8BC4\u6587\u7AE0\u5168\u6587\uFF1A
${body}` }],
            3e3
          );
          let sm = judge.text.match(/总分[:：]\s*(\d+)/);
          if (!sm) {
            judge = await this.llmChatMessages(
              judgePrompt + "\n\u518D\u6B21\u5F3A\u8C03\uFF1A\u7B2C\u4E00\u884C\u5FC5\u987B\u662F\u300C\u603B\u5206: \u6570\u5B57\u300D\uFF0C\u4E0D\u5F97\u7701\u7565\u3002",
              [{ role: "user", content: `\u5F85\u8BC4\u6587\u7AE0\u5168\u6587\uFF1A
${body}` }],
              3e3
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
${(await this.app.vault.read(draft)).slice(0, 9e3)}` }],
            Math.max(4500, this.settings.aiMaxTokens)
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
        await this.pipePublishPrep(file, { topic, draft: draftPath });
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
  async llmChat(system, user) {
    return this.llmChatMessages(system, [{ role: "user", content: user }]);
  }
  async llmChatMessages(system, messages, maxTokensOverride) {
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
          body: JSON.stringify({ model: cfg.model, max_tokens: maxTokens, system, messages })
        };
      } else {
        req = {
          url: cfg.baseUrl,
          method: "POST",
          throw: false,
          headers: { "content-type": "application/json", Authorization: `Bearer ${cfg.key}` },
          body: JSON.stringify({ model: cfg.model, max_tokens: maxTokens, messages: [{ role: "system", content: system }, ...messages] })
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
        if (text) text = stripThink(String(text));
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
    const text = stripThink(full).trim();
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
      const content = (await this.app.vault.read(file)).slice(0, 8e3);
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
    return items.map(extractTopicMeta);
  }
  buildScoreCtx(drafts) {
    const s = this.settings;
    const entries = this.getScoreEntries();
    const hotTitles = (drafts || []).map((f) => ({ base: f.basename, fm: this.fm(f) })).filter((x) => (x.fm.stats?.reads || 0) >= s.hotReadsThreshold).map((x) => x.base + " " + (x.fm.series || ""));
    const series = s.seriesKeywords.split(/[，,]/).map((x) => x.trim()).filter(Boolean);
    return { entries, hotTitles, series };
  }
  scoreTopic(topic, ctx) {
    let fileHits = 0, wikiHits = 0, seriesBonus = 0, hotBonus = 0;
    for (const kw of topic.keywords) {
      if (kw.length < 2) continue;
      for (const e of ctx.entries) {
        if (!e.base.includes(kw)) continue;
        if (e.isWiki) wikiHits++;
        else fileHits++;
      }
      if (ctx.series.some((x) => kw.includes(x) || x.includes(kw))) seriesBonus = 3;
      if (ctx.hotTitles.some((t) => t.includes(kw))) hotBonus = 5;
    }
    fileHits = Math.min(fileHits, 30);
    wikiHits = Math.min(wikiHits, 10);
    const score = fileHits + wikiHits * 2 + seriesBonus + hotBonus;
    return { score, detail: `\u7D20\u6750 ${fileHits} \xB7 wiki ${wikiHits} \xB7 \u7CFB\u5217 +${seriesBonus} \xB7 \u8BFB\u8005\u9A8C\u8BC1 +${hotBonus}` };
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
## \u270D\uFE0F \u5199\u4F5C\u811A\u624B\u67B6

### \u6838\u5FC3\u8BBA\u70B9\uFF08\u4E00\u53E5\u8BDD\uFF09

-

### \u8BC1\u636E\uFF08\u4ECE\u4E0A\u9762\u6311 3-5 \u6761\u6700\u786C\u7684\uFF09

-

### \u7F3A\u53E3\uFF08\u5E93\u91CC\u6CA1\u6709\u3001\u9700\u8981\u8865\u7684\uFF09

-
`;
    const f = await this.ensureFile(`${s.materialFolder}/\u7D20\u6750\u5305-${sanitizeName(topic.title)}.md`, body);
    await this.app.workspace.getLeaf(false).openFile(f);
    new import_obsidian.Notice(`\u7D20\u6750\u5305\u5DF2\u751F\u6210\uFF1A${topic.title}`);
  }
  /* ---------- 编译任务书 ---------- */
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
      new import_obsidian.Setting(body).setName("\u{1F3A8} \u63A8\u9001\u65F6\u81EA\u52A8\u914D\u56FE").setDesc("\u63A8\u516C\u4F17\u53F7\u8349\u7A3F\u7BB1\u65F6\u7528 MiniMax \u81EA\u52A8\u751F\u6210\u5C01\u9762+2\u5F20\u63D2\u56FE\uFF08\u9700 AI \u670D\u52A1\u5546=MiniMax\uFF09\u3002Lovart \u624B\u52A8\u914D\u56FE\u4E0D\u53D7\u5F71\u54CD\uFF1A\u6B63\u6587\u5DF2\u6709\u56FE\u5219\u8DF3\u8FC7").addToggle((t) => t.setValue(this.plugin.settings.autoIllustrate).onChange(async (v) => {
        this.plugin.settings.autoIllustrate = v;
        await this.plugin.saveSettings();
      }));
      addText("\u914D\u56FE\u98CE\u683C\u540E\u7F00", "\u62FC\u5728\u6BCF\u4E2A\u914D\u56FE\u63D0\u793A\u8BCD\u540E\uFF0C\u7EDF\u4E00\u5168\u7BC7\u753B\u98CE", "illustrateStyle");
    } else if (this.activeTab === "radar") {
      addText("\u7CFB\u5217\u5173\u952E\u8BCD", "\u9017\u53F7\u5206\u9694\uFF1B\u9009\u9898\u547D\u4E2D\u5219\u96F7\u8FBE\u52A0\u5206", "seriesKeywords");
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
      addText("\u79C1\u6709\u641C\u7D22 API", "\u81EA\u5EFA SearXNG+\u62BD\u53D6\u5C42\u5730\u5740\uFF08\u5982 http://100.106.87.41:9214\uFF09\uFF1B\u7559\u7A7A\u5173\u95ED\u641C\u7D22\u589E\u5F3A", "searchApiUrl");
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
      addText("\u5BF9\u8BDD\u6C89\u6DC0\u76EE\u5F55", "AI \u5BF9\u8BDD\u300C\u5B58\u4E3A\u7B14\u8BB0\u300D\u7684\u843D\u70B9", "chatSaveFolder");
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
