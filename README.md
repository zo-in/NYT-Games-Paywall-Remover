# NYT Block Remover

A Chrome extension that automatically removes overlays and subscription prompts from interactive tools like the **Wordle Bot** and **Connections Bot** on the New York Times site.

## 🔧 Features

- Removes the gateway overlay (`#gateway-content`)
- Removes share/tool containers and ad overlays (`.vi-gateway-container`)
- Continuously monitors the page using `MutationObserver` to handle dynamic updates

## 📦 Installation

1. Clone or download this repository:
   ```bash
   git clone https://github.com/zo-in/nyt-games-paywall-remover.git
   ```
2. Open Chrome and go to `chrome://extensions/`
3. Enable **Developer Mode**
4. Click **Load unpacked** and select the `nyt-block-remover` folder

The extension will work automatically on supported pages only.

## 🌐 Supported Pages

- [Wordle Bot](https://www.nytimes.com/interactive/2022/upshot/wordle-bot.html)
- [Connections Bot](https://www.nytimes.com/interactive/2024/upshot/connections-bot.html)

## 📁 Files

- `manifest.json` — Chrome extension configuration
- `content.js` — Script to remove blockers
- `README.md` — Documentation
- `icons` — Contains extension icons

## 💡 Notes

This extension targets only specific interactive NYT tools. To support more pages, you can manually add them to the `matches` array in the manifest.

## 📜 License

MIT
