export const CATEGORIES = [
  { value: "all",     label: "Не выбрано" },
  { value: "syntax",     label: "Синтаксис и подсветка" },
  { value: "lsp",        label: "Языковые серверы (LSP)" },
  { value: "completion", label: "Автодополнение" },
  { value: "debugging",  label: "Отладка" },
  { value: "navigation", label: "Навигация и редактирование" },
  { value: "interface",  label: "Интерфейс и оформление" },
  { value: "formatting", label: "Форматирование" },
  { value: "linting",    label: "Линтеры и диагностика" },
  { value: "ai",         label: "AI-ассистенты" },
  { value: "file-tree",  label: "Файловое дерево" }
]

export const plugins = [
  // ---------- NvChad core (interface) ----------
  {
    id: "base46",
    name: "base46",
    repo: "NvChad/base46",
    url: "https://github.com/NvChad/base46",
    category: "interface",
    tags: ["theme", "colorscheme", "highlight"],
    description: "Движок тем NvChad: управление цветовыми схемами, переопределение highlight-групп, интеграции с плагинами.",
    type: "plugin",
    ecosystem: ["neovim"]
  },
  {
    id: "nvchad-ui",
    name: "nvchad/ui",
    repo: "NvChad/ui",
    url: "https://github.com/NvChad/ui",
    category: "interface",
    tags: ["statusline", "tabufline", "cheatsheet", "themes"],
    description: "UI-слой NvChad: statusline, tabufline (вкладки + буферы), cheatsheet, переключатель тем, updater.",
    type: "plugin",
    ecosystem: ["neovim"]
  },
  {
    id: "nvzone-menu",
    name: "nvzone/menu",
    repo: "nvzone/menu",
    url: "https://github.com/nvzone/menu",
    category: "interface",
    tags: ["menu", "popup"],
    description: "Библиотека для создания всплывающих меню (используется minty и другими nvzone-плагинами).",
    type: "plugin",
    ecosystem: ["neovim"]
  },
  {
    id: "nvzone-volt",
    name: "nvzone/volt",
    repo: "nvzone/volt",
    url: "https://github.com/nvzone/volt",
    category: "interface",
    tags: ["ui", "components", "reactive"],
    description: "Фреймворк для создания реактивных UI-компонентов внутри Neovim.",
    type: "plugin",
    ecosystem: ["neovim"]
  },
  {
    id: "nvzone-minty",
    name: "nvzone/minty",
    repo: "nvzone/minty",
    url: "https://github.com/nvzone/minty",
    category: "interface",
    tags: ["color", "picker", "huefy", "shades"],
    description: "Инструменты подбора и манипуляции цветом: команды Huefy и Shades.",
    type: "plugin",
    ecosystem: ["neovim"]
  },

  // ---------- Completion ----------
  {
    id: "nvim-cmp",
    name: "nvim-cmp",
    repo: "hrsh7th/nvim-cmp",
    url: "https://github.com/hrsh7th/nvim-cmp",
    category: "completion",
    tags: ["completion", "engine", "autocomplete"],
    description: "Основной фреймворк автодополнения (completion engine) для Neovim.",
    type: "plugin",
    ecosystem: ["neovim"]
  },
  {
    id: "luasnip",
    name: "LuaSnip",
    repo: "L3MON4D3/LuaSnip",
    url: "https://github.com/L3MON4D3/LuaSnip",
    category: "completion",
    tags: ["snippets", "engine"],
    description: "Движок сниппетов с поддержкой сложных преобразований.",
    type: "plugin",
    ecosystem: ["neovim"]
  },
  {
    id: "friendly-snippets",
    name: "friendly-snippets",
    repo: "rafamadriz/friendly-snippets",
    url: "https://github.com/rafamadriz/friendly-snippets",
    category: "completion",
    tags: ["snippets", "collection"],
    description: "Коллекция готовых сниппетов для множества языков и фреймворков.",
    type: "plugin",
    ecosystem: ["neovim"]
  },
  {
    id: "nvim-autopairs",
    name: "nvim-autopairs",
    repo: "windwp/nvim-autopairs",
    url: "https://github.com/windwp/nvim-autopairs",
    category: "completion",
    tags: ["autopairs", "brackets", "quotes"],
    description: "Автоматическое закрытие скобок, кавычек и других парных символов.",
    type: "plugin",
    ecosystem: ["neovim"]
  },
  {
    id: "cmp-luasnip",
    name: "cmp-luasnip",
    repo: "saadparwaiz1/cmp_luasnip",
    url: "https://github.com/saadparwaiz1/cmp_luasnip",
    category: "completion",
    tags: ["completion", "snippets", "source"],
    description: "Источник сниппетов LuaSnip для nvim-cmp.",
    type: "plugin",
    ecosystem: ["neovim"]
  },
  {
    id: "cmp-nvim-lua",
    name: "cmp-nvim-lua",
    repo: "hrsh7th/cmp-nvim-lua",
    url: "https://github.com/hrsh7th/cmp-nvim-lua",
    category: "completion",
    tags: ["completion", "lua", "source"],
    description: "Источник API Neovim Lua для nvim-cmp.",
    type: "plugin",
    ecosystem: ["neovim"]
  },
  {
    id: "cmp-nvim-lsp",
    name: "cmp-nvim-lsp",
    repo: "hrsh7th/cmp-nvim-lsp",
    url: "https://github.com/hrsh7th/cmp-nvim-lsp",
    category: "completion",
    tags: ["completion", "lsp", "source"],
    description: "Источник LSP-завершений для nvim-cmp.",
    type: "plugin",
    ecosystem: ["neovim"]
  },
  {
    id: "cmp-buffer",
    name: "cmp-buffer",
    repo: "hrsh7th/cmp-buffer",
    url: "https://github.com/hrsh7th/cmp-buffer",
    category: "completion",
    tags: ["completion", "buffer", "source"],
    description: "Источник завершений из содержимого открытых буферов для nvim-cmp.",
    type: "plugin",
    ecosystem: ["neovim"]
  },
  {
    id: "cmp-async-path",
    name: "cmp-async-path",
    repo: "FelipeLema/cmp-async-path",
    url: "https://codeberg.org/FelipeLema/cmp-async-path",
    category: "completion",
    tags: ["completion", "path", "source"],
    description: "Источник путей файловой системы для nvim-cmp.",
    type: "plugin",
    ecosystem: ["neovim"]
  },

  // ---------- Interface ----------
  {
    id: "nvim-web-devicons",
    name: "nvim-web-devicons",
    repo: "nvim-tree/nvim-web-devicons",
    url: "https://github.com/nvim-tree/nvim-web-devicons",
    category: "interface",
    tags: ["icons", "filetype"],
    description: "Набор иконок для типов файлов (используется nvim-tree, telescope и др.).",
    type: "plugin",
    ecosystem: ["neovim"]
  },
  {
    id: "which-key",
    name: "which-key.nvim",
    repo: "folke/which-key.nvim",
    url: "https://github.com/folke/which-key.nvim",
    category: "interface",
    tags: ["keymaps", "hints", "leader"],
    description: "Всплывающая подсказка по доступным хоткеям при нажатии лидера.",
    type: "plugin",
    ecosystem: ["neovim"]
  },
  {
    id: "indent-blankline",
    name: "indent-blankline.nvim",
    repo: "lukas-reineke/indent-blankline.nvim",
    url: "https://github.com/lukas-reineke/indent-blankline.nvim",
    category: "interface",
    tags: ["indent", "guides", "scope"],
    description: "Вертикальные линии отступов (indent guides) и подсветка scope-блоков.",
    type: "plugin",
    ecosystem: ["neovim"]
  },
  {
    id: "noice",
    name: "noice.nvim",
    repo: "folke/noice.nvim",
    url: "https://github.com/folke/noice.nvim",
    category: "interface",
    tags: ["ui", "notifications", "command-line"],
    description: "Заменяет стандартный UI сообщений, командной строки и popup-меню: уведомления, история, LSP-интерфейсы.",
    type: "plugin",
    ecosystem: ["neovim"]
  },
  {
    id: "rainbow-delimiters",
    name: "rainbow-delimiters.nvim",
    repo: "HiPhish/rainbow-delimiters.nvim",
    url: "https://github.com/HiPhish/rainbow-delimiters.nvim",
    category: "interface",
    tags: ["delimiters", "colors", "readability"],
    description: "Подсвечивает вложенные разделители, теги и ключевые слова разными цветами (полезно для HTML и JSX).",
    type: "plugin",
    ecosystem: ["neovim"]
  },
  {
    id: "todo-comments",
    name: "todo-comments.nvim",
    repo: "folke/todo-comments.nvim",
    url: "https://github.com/folke/todo-comments.nvim",
    category: "interface",
    tags: ["todo", "comments", "highlight"],
    description: "Подсвечивает теги комментариев (FIX, TODO, NOTE, PERF, HACK, WARNING).",
    type: "plugin",
    ecosystem: ["neovim"]
  },
  {
    id: "neoscroll",
    name: "neoscroll.nvim",
    repo: "karb94/neoscroll.nvim",
    url: "https://github.com/karb94/neoscroll.nvim",
    category: "interface",
    tags: ["scroll", "animation"],
    description: "Добавляет плавную анимацию прокрутки вместо резких скачков при перемещении по файлу.",
    type: "plugin",
    ecosystem: ["neovim"]
  },
  {
    id: "smear-cursor",
    name: "smear-cursor.nvim",
    repo: "sphamba/smear-cursor.nvim",
    url: "https://github.com/sphamba/smear-cursor.nvim",
    category: "interface",
    tags: ["cursor", "animation"],
    description: "Дополнительная анимация курсора, помогает лучше замечать его перемещения.",
    type: "plugin",
    ecosystem: ["neovim"]
  },
  {
    id: "render-markdown",
    name: "render-markdown.nvim",
    repo: "MeanderingProgrammer/render-markdown.nvim",
    url: "https://github.com/MeanderingProgrammer/render-markdown.nvim",
    category: "interface",
    tags: ["markdown", "render"],
    description: "Рендеринг Markdown прямо в буфере Neovim.",
    type: "plugin",
    ecosystem: ["neovim"]
  },
  {
    id: "nvim-emmet",
    name: "nvim-emmet",
    repo: "olrtg/nvim-emmet",
    url: "https://github.com/olrtg/nvim-emmet",
    category: "interface",
    tags: ["emmet", "html", "wrap"],
    description: "Добавляет функцию «обернуть выделенный текст в тег», дополняя html-lsp.",
    type: "plugin",
    ecosystem: ["neovim"]
  },

  // ---------- Core tools ----------
  {
    id: "mason",
    name: "mason.nvim",
    repo: "mason-org/mason.nvim",
    url: "https://github.com/mason-org/mason.nvim",
    category: "lsp",
    tags: ["manager", "lsp", "dap", "lint", "format"],
    description: "Менеджер внешних инструментов: LSP-серверы, DAP-адаптеры, линтеры, форматтеры.",
    type: "tool",
    ecosystem: ["neovim"]
  },
  {
    id: "nvim-lspconfig",
    name: "nvim-lspconfig",
    repo: "neovim/nvim-lspconfig",
    url: "https://github.com/neovim/nvim-lspconfig",
    category: "lsp",
    tags: ["lsp", "config", "servers"],
    description: "Стандартная конфигурация LSP-серверов для Neovim (готовые конфигурации и документация).",
    type: "plugin",
    ecosystem: ["neovim"]
  },
  {
    id: "conform",
    name: "conform.nvim",
    repo: "stevearc/conform.nvim",
    url: "https://github.com/stevearc/conform.nvim",
    category: "formatting",
    tags: ["format", "formatter", "lsp-fallback"],
    description: "Форматирование кода с поддержкой множества форматтеров и LSP-fallback.",
    type: "plugin",
    ecosystem: ["neovim"]
  },
  {
    id: "nvim-treesitter",
    name: "nvim-treesitter",
    repo: "nvim-treesitter/nvim-treesitter",
    url: "https://github.com/nvim-treesitter/nvim-treesitter",
    category: "syntax",
    tags: ["syntax", "parser", "highlight", "ast"],
    description: "Синтаксический парсер: улучшенная подсветка, навигация по AST, инкрементальный выбор.",
    type: "plugin",
    ecosystem: ["neovim"]
  },
  {
    id: "plenary",
    name: "plenary.nvim",
    repo: "nvim-lua/plenary.nvim",
    url: "https://github.com/nvim-lua/plenary.nvim",
    category: "interface",
    tags: ["utilities", "json", "async", "dependency"],
    description: "Набор Lua-утилит (JSON, Path, async-операции, job control) — зависимость многих плагинов.",
    type: "plugin",
    ecosystem: ["neovim"]
  },
  {
    id: "gitsigns",
    name: "gitsigns.nvim",
    repo: "lewis6991/gitsigns.nvim",
    url: "https://github.com/lewis6991/gitsigns.nvim",
    category: "interface",
    tags: ["git", "gutter", "blame", "hunks"],
    description: "Git-значки в gutter-колонке: добавлено/изменено/удалено, blame, навигация по hunk-ам.",
    type: "plugin",
    ecosystem: ["neovim"]
  },

  // ---------- Navigation ----------
  {
    id: "telescope",
    name: "telescope.nvim",
    repo: "nvim-telescope/telescope.nvim",
    url: "https://github.com/nvim-telescope/telescope.nvim",
    category: "navigation",
    tags: ["fuzzy", "search", "grep", "files"],
    description: "Универсальный fuzzy-поиск: файлы, grep, diagnostics, git, LSP и сотни расширений.",
    type: "plugin",
    ecosystem: ["neovim"]
  },
  {
    id: "flash",
    name: "flash.nvim",
    repo: "folke/flash.nvim",
    url: "https://github.com/folke/flash.nvim",
    category: "navigation",
    tags: ["jump", "motion", "search"],
    description: "Быстрые прыжки по тексту, улучшенные motions f/t.",
    type: "plugin",
    ecosystem: ["neovim"]
  },
  {
    id: "nvim-ufo",
    name: "nvim-ufo",
    repo: "kevinhwang91/nvim-ufo",
    url: "https://github.com/kevinhwang91/nvim-ufo",
    category: "navigation",
    tags: ["folding", "fold"],
    description: "Улучшает встроенный folding (сворачивание кода).",
    type: "plugin",
    ecosystem: ["neovim"]
  },
  {
    id: "vim-visual-multi",
    name: "vim-visual-multi",
    repo: "mg979/vim-visual-multi",
    url: "https://github.com/mg979/vim-visual-multi",
    category: "navigation",
    tags: ["multi-cursor", "editing"],
    description: "Полноценное multi-cursor редактирование: одновременная работа с несколькими курсорами и выделениями.",
    type: "plugin",
    ecosystem: ["neovim"]
  },
  {
    id: "duplicate",
    name: "duplicate.nvim",
    repo: "hinell/duplicate.nvim",
    url: "https://github.com/hinell/duplicate.nvim",
    category: "navigation",
    tags: ["duplicate", "lines"],
    description: "Удобное дублирование строк и выделенных блоков.",
    type: "plugin",
    ecosystem: ["neovim"]
  },
  {
    id: "move",
    name: "move.nvim",
    repo: "fedepujol/move.nvim",
    url: "https://github.com/fedepujol/move.nvim",
    category: "navigation",
    tags: ["move", "lines", "blocks"],
    description: "Перемещение строк и блоков с сохранением индентации.",
    type: "plugin",
    ecosystem: ["neovim"]
  },

  // ---------- File tree ----------
  {
    id: "nvim-tree",
    name: "nvim-tree.lua",
    repo: "nvim-tree/nvim-tree.lua",
    url: "https://github.com/nvim-tree/nvim-tree.lua",
    category: "file-tree",
    tags: ["filetree", "explorer", "files"],
    description: "Файловый менеджер в виде дерева директорий.",
    type: "plugin",
    ecosystem: ["neovim"]
  },

  // ---------- AI ----------
  {
    id: "avante",
    name: "avante.nvim",
    repo: "yetone/avante.nvim",
    url: "https://github.com/yetone/avante.nvim",
    category: "ai",
    tags: ["ai", "assistant", "copilot"],
    description: "AI-ассистент внутри Neovim.",
    type: "plugin",
    ecosystem: ["neovim"]
  },

  // ---------- LSP servers ----------
  {
    id: "python-lsp",
    name: "pyright (python-lsp)",
    repo: "microsoft/pyright",
    url: "https://github.com/microsoft/pyright",
    category: "lsp",
    tags: ["python", "type-checking", "lsp"],
    description: "LSP-сервер для Python: автодополнение, диагностика, проверка типов.",
    type: "lsp",
    ecosystem: ["python"]
  },
  {
    id: "ts-ls",
    name: "typescript-language-server (ts_ls)",
    repo: "typescript-language-server/typescript-language-server",
    url: "https://github.com/typescript-language-server/typescript-language-server",
    category: "lsp",
    tags: ["typescript", "javascript", "lsp"],
    description: "LSP-обёртка над tsserver для JavaScript/TypeScript (js, jsx, ts, tsx).",
    type: "lsp",
    ecosystem: ["js-ts"]
  },
  {
    id: "tailwindcss-ls",
    name: "tailwindcss-language-server",
    repo: "tailwindlabs/tailwindcss-intellisense",
    url: "https://github.com/tailwindlabs/tailwindcss-intellisense",
    category: "lsp",
    tags: ["tailwind", "css", "lsp"],
    description: "LSP-сервер Tailwind: автодополнение классов, hover-preview, диагностика.",
    type: "lsp",
    ecosystem: ["js-ts"]
  },
  {
    id: "json-lsp",
    name: "json-lsp",
    repo: "microsoft/vscode-json-languageservice",
    url: "https://github.com/microsoft/vscode-json-languageservice",
    category: "lsp",
    tags: ["json", "lsp", "schema"],
    description: "LSP-сервер для JSON: автодополнение, проверка синтаксиса, валидация по схеме.",
    type: "lsp",
    ecosystem: ["generic"]
  },
  {
    id: "taplo",
    name: "taplo",
    repo: "tamasfe/taplo",
    url: "https://github.com/tamasfe/taplo",
    category: "lsp",
    tags: ["toml", "lsp", "format"],
    description: "Инструмент для работы с TOML: LSP-сервер с автодополнением, диагностикой и форматированием.",
    type: "lsp",
    ecosystem: ["generic"]
  },
  {
    id: "yaml-ls",
    name: "yaml-language-server",
    repo: "redhat-developer/yaml-language-server",
    url: "https://github.com/redhat-developer/yaml-language-server",
    category: "lsp",
    tags: ["yaml", "lsp", "schema"],
    description: "LSP-сервер для YAML: автодополнение, диагностика, hover, форматирование, валидация схем.",
    type: "lsp",
    ecosystem: ["generic"]
  },
  {
    id: "docker-ls",
    name: "docker-language-server",
    repo: "docker/docker-language-server",
    url: "https://github.com/docker/docker-language-server",
    category: "lsp",
    tags: ["docker", "dockerfile", "lsp"],
    description: "LSP-сервер от Docker для Dockerfile и Bake: автодополнение, диагностика, линтинг.",
    type: "lsp",
    ecosystem: ["generic"]
  },
  {
    id: "lua-ls",
    name: "lua-language-server",
    repo: "LuaLS/lua-language-server",
    url: "https://github.com/LuaLS/lua-language-server",
    category: "lsp",
    tags: ["lua", "lsp"],
    description: "LSP-сервер для Lua: автодополнение, диагностика, навигация по коду.",
    type: "lsp",
    ecosystem: ["neovim"]
  },
  {
    id: "css-ls",
    name: "css-lsp",
    repo: "microsoft/vscode-css-languageservice",
    url: "https://github.com/microsoft/vscode-css-languageservice",
    category: "lsp",
    tags: ["css", "lsp"],
    description: "LSP-сервер для CSS: автодополнение, диагностика, hover-подсказки.",
    type: "lsp",
    ecosystem: ["generic"]
  },
  {
    id: "html-ls",
    name: "html-lsp",
    repo: "microsoft/vscode-html-languageservice",
    url: "https://github.com/microsoft/vscode-html-languageservice",
    category: "lsp",
    tags: ["html", "lsp"],
    description: "LSP-сервер для HTML: автодополнение, диагностика, навигация по документу.",
    type: "lsp",
    ecosystem: ["generic"]
  },
  {
    id: "lspsaga",
    name: "lspsaga.nvim",
    repo: "nvimdev/lspsaga.nvim",
    url: "https://github.com/nvimdev/lspsaga.nvim",
    category: "lsp",
    tags: ["lsp", "ui", "diagnostics", "code-actions"],
    description: "Улучшает встроенный LSP-интерфейс: float-диагностика, finder, peek, rename, code actions, outline.",
    type: "plugin",
    ecosystem: ["neovim"]
  },
  {
    id: "trouble",
    name: "trouble.nvim",
    repo: "folke/trouble.nvim",
    url: "https://github.com/folke/trouble.nvim",
    category: "lsp",
    tags: ["lsp", "diagnostics", "quickfix"],
    description: "Единый удобный UI для диагностики, результатов LSP, Quickfix и Location List.",
    type: "plugin",
    ecosystem: ["neovim"]
  },

  // ---------- Formatting ----------
  {
    id: "black",
    name: "black",
    repo: "psf/black",
    url: "https://github.com/psf/black",
    category: "formatting",
    tags: ["python", "formatter"],
    description: "Форматтер для Python-кода (используется через conform.nvim).",
    type: "formatter",
    ecosystem: ["python"]
  },
  {
    id: "prettier",
    name: "prettier",
    repo: "prettier/prettier",
    url: "https://github.com/prettier/prettier",
    category: "formatting",
    tags: ["javascript", "typescript", "css", "html", "formatter"],
    description: "Форматтер для JavaScript/TypeScript, CSS, HTML и других (управляется conform.nvim).",
    type: "formatter",
    ecosystem: ["js-ts"]
  },
  {
    id: "stylua",
    name: "stylua",
    repo: "JohnnyMorganz/StyLua",
    url: "https://github.com/JohnnyMorganz/StyLua",
    category: "formatting",
    tags: ["lua", "formatter"],
    description: "Форматтер для Lua-кода (инструмент NvChad по умолчанию).",
    type: "formatter",
    ecosystem: ["neovim"]
  },
  {
    id: "dockerfmt",
    name: "dockerfmt",
    repo: "reteps/dockerfmt",
    url: "https://github.com/reteps/dockerfmt",
    category: "formatting",
    tags: ["docker", "dockerfile", "formatter"],
    description: "Форматтер для Dockerfile: приводит к единому стилю, нормализует пробелы, конвертирует устаревший синтаксис ENV.",
    type: "formatter",
    ecosystem: ["generic"]
  },

  // ---------- Linting ----------
  {
    id: "nvim-lint",
    name: "nvim-lint",
    repo: "mfussenegger/nvim-lint",
    url: "https://github.com/mfussenegger/nvim-lint",
    category: "linting",
    tags: ["lint", "async", "diagnostics"],
    description: "Асинхронный линтинг для Neovim: запускает внешние линтеры и передаёт результат в vim.diagnostic.",
    type: "plugin",
    ecosystem: ["neovim"]
  },
  {
    id: "eslint-d",
    name: "eslint_d",
    repo: "mantoni/eslint_d.js",
    url: "https://github.com/mantoni/eslint_d.js",
    category: "linting",
    tags: ["javascript", "eslint", "lint", "daemon"],
    description: "Демон-обёртка над ESLint: переиспользует процесс между проверками, используется с nvim-lint.",
    type: "linter",
    ecosystem: ["js-ts"]
  },
  {
    id: "ruff",
    name: "ruff",
    repo: "astral-sh/ruff",
    url: "https://github.com/astral-sh/ruff",
    category: "linting",
    tags: ["python", "lint", "lsp", "fast"],
    description: "Очень быстрый линтер для Python; подключается как LSP-сервер или вызывается из оболочки.",
    type: "linter",
    ecosystem: ["python"]
  },

  // ---------- Debugging ----------
  {
    id: "nvim-dap",
    name: "nvim-dap",
    repo: "mfussenegger/nvim-dap",
    url: "https://github.com/mfussenegger/nvim-dap",
    category: "debugging",
    tags: ["dap", "debug", "protocol"],
    description: "DAP-клиент для Neovim: управляет сторонними отладчиками (адаптерами) по протоколу DAP.",
    type: "plugin",
    ecosystem: ["neovim"]
  },
  {
    id: "nvim-dap-ui",
    name: "nvim-dap-ui",
    repo: "rcarriga/nvim-dap-ui",
    url: "https://github.com/rcarriga/nvim-dap-ui",
    category: "debugging",
    tags: ["dap", "ui", "debug"],
    description: "Графический интерфейс для nvim-dap: панели со стеком вызовов, переменными, точками останова, консолью.",
    type: "plugin",
    ecosystem: ["neovim"]
  },
  {
    id: "nvim-dap-virtual-text",
    name: "nvim-dap-virtual-text",
    repo: "theHamsta/nvim-dap-virtual-text",
    url: "https://github.com/theHamsta/nvim-dap-virtual-text",
    category: "debugging",
    tags: ["dap", "virtual-text", "debug"],
    description: "Показывает значения переменных прямо рядом с кодом через virtual text (extmarks).",
    type: "plugin",
    ecosystem: ["neovim"]
  },
  {
    id: "nvim-nio",
    name: "nvim-nio",
    repo: "nvim-neotest/nvim-nio",
    url: "https://github.com/nvim-neotest/nvim-nio",
    category: "debugging",
    tags: ["async", "io", "dependency"],
    description: "Библиотека для асинхронного ввода-вывода, зависимость nvim-dap-ui.",
    type: "plugin",
    ecosystem: ["neovim"]
  },
  {
    id: "nvim-dap-python",
    name: "nvim-dap-python",
    repo: "mfussenegger/nvim-dap-python",
    url: "https://github.com/mfussenegger/nvim-dap-python",
    category: "debugging",
    tags: ["python", "dap", "debugpy"],
    description: "Настройка nvim-dap под debugpy: не нужно вручную прописывать adapter/configuration для Python.",
    type: "plugin",
    ecosystem: ["python"]
  },
  {
    id: "debugpy",
    name: "debugpy",
    repo: "microsoft/debugpy",
    url: "https://github.com/microsoft/debugpy",
    category: "debugging",
    tags: ["python", "debug", "adapter"],
    description: "Debug-адаптер для Python: управляет отлаживаемым процессом через pydevd по протоколу DAP.",
    type: "debugger",
    ecosystem: ["python"]
  },
  {
    id: "js-debug-adapter",
    name: "js-debug-adapter",
    repo: "microsoft/vscode-js-debug",
    url: "https://github.com/microsoft/vscode-js-debug",
    category: "debugging",
    tags: ["javascript", "typescript", "debug", "adapter"],
    description: "Официальный отладчик для JavaScript/TypeScript (Node.js и браузер), транслирует команды nvim-dap в реальные действия.",
    type: "debugger",
    ecosystem: ["js-ts"]
  }
];
