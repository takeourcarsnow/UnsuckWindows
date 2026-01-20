'use client';

import { useState, useMemo } from 'react';
import { TreeNodeLeaf, TreeContainer } from './components/TreeNode';
import { TerminalSearch, TerminalHeader } from './components/TerminalUI';

interface Tool {
  id: string;
  label: string;
  href?: string;
  description: string;
  icon: string;
  tags: string[];
  category: string;
  section: string;
  platform: 'Windows' | 'Android' | 'Browser Extensions & Scripts';
}

const TOOLS: Tool[] = [
  // Debloat
  { id: 'win11debloat', label: 'Win11Debloat', href: 'https://github.com/Raphire/Win11Debloat', description: 'PowerShell script to remove bloatware & unnecessary apps', icon: '🧹', tags: ['open-source', 'powershell', 'automation', 'debloat'], category: 'Debloat', section: 'Debloat', platform: 'Windows' },
  // UI Tweaks
  { id: 'rainmeter', label: 'Rainmeter', href: 'https://www.rainmeter.net/', description: 'Desktop customization tool for skins & widgets', icon: '🌙', tags: ['skins', 'widgets', 'desktop-customization'], category: 'Desktop Customization', section: 'UI Tweaks', platform: 'Windows' },
  { id: 'droptop', label: 'Droptop', href: 'https://github.com/Droptop-Four/Droptop-Four/', description: 'Desktop overlay for quick access to apps & folders', icon: '📌', tags: ['open-source', 'desktop-overlay', 'launcher', 'productivity'], category: 'Desktop Customization', section: 'UI Tweaks', platform: 'Windows' },
  { id: 'mactype', label: 'MacType', href: 'https://www.mactype.net/', description: 'Enhances font rendering to match macOS quality', icon: '✒️', tags: ['font-rendering', 'typography', 'visual-enhancement'], category: 'Desktop Customization', section: 'UI Tweaks', platform: 'Windows' },
  { id: 'windynamicdesktop', label: 'WinDynamicDesktop', href: 'https://github.com/t1m0thyj/WinDynamicDesktop', description: 'Dynamically changes wallpaper based on time of day', icon: '🌅', tags: ['open-source', 'wallpaper', 'dynamic', 'time-based'], category: 'Wallpaper & Cursors', section: 'UI Tweaks', platform: 'Windows' },
  { id: 'osxpointer', label: 'osx pointer', href: 'https://github.com/antiden/macOS-cursors-for-Windows', description: 'macOS-style cursors for Windows', icon: '🖱️', tags: ['open-source', 'cursors', 'macos-theme', 'visual'], category: 'Wallpaper & Cursors', section: 'UI Tweaks', platform: 'Windows' },
  { id: 'startallback', label: 'StartAllBack', href: 'https://www.startallback.com/', description: 'Restores classic Windows Start menu & taskbar', icon: '▶️', tags: ['paid', 'start-menu', 'taskbar', 'classic-ui'], category: 'System UI', section: 'UI Tweaks', platform: 'Windows' },
  { id: '3rvx', label: '3RVX + HideVolumeOSD', href: 'https://github.com/prncc/3RVX', description: 'Advanced volume control with on-screen display', icon: '🔊', tags: ['open-source', 'volume-control', 'osd', 'audio'], category: 'System UI', section: 'UI Tweaks', platform: 'Windows' },
  // Essential Apps
  { id: 'powertoys', label: 'PowerToys', href: 'https://github.com/microsoft/PowerToys', description: 'Set of utilities for power users', icon: '⚡', tags: ['open-source', 'microsoft', 'utilities', 'productivity', 'power-user'], category: 'Utilities', section: 'Essential Apps', platform: 'Windows' },
  { id: 'everything', label: 'Everything', href: 'https://www.voidtools.com/', description: 'Ultra-fast file & folder search', icon: '🔍', tags: ['file-search', 'indexing', 'fast-search'], category: 'Utilities', section: 'Essential Apps', platform: 'Windows' },
  { id: 'ditto', label: 'Ditto', href: 'https://ditto-cp.sourceforge.io/', description: 'Clipboard manager for multiple items', icon: '📋', tags: ['open-source', 'clipboard-manager', 'productivity', 'multi-clipboard'], category: 'Utilities', section: 'Essential Apps', platform: 'Windows' },
  { id: 'quicklook', label: 'QuickLook', href: 'https://github.com/QL-Win/QuickLook', description: 'Preview files by pressing spacebar', icon: '👁️', tags: ['open-source', 'file-preview', 'spacebar-preview', 'explorer-extension'], category: 'Utilities', section: 'Essential Apps', platform: 'Windows' },
  { id: 'eartrumpet', label: 'EarTrumpet', href: 'https://github.com/File-New-Project/EarTrumpet', description: 'Volume mixer with per-app controls', icon: '🔉', tags: ['open-source', 'volume-mixer', 'per-app-audio', 'audio-control'], category: 'Utilities', section: 'Essential Apps', platform: 'Windows' },
  { id: 'parsec', label: 'Parsec', href: 'https://parsec.app/', description: 'Low-latency remote desktop for gaming and work', icon: '🖥️', tags: ['remote-desktop', 'gaming', 'low-latency', 'streaming'], category: 'Utilities', section: 'Essential Apps', platform: 'Windows' },
  { id: 'sharex', label: 'ShareX', href: 'https://getsharex.com/', description: 'Screenshot & screen recording with sharing', icon: '📷', tags: ['open-source', 'screenshot', 'screen-recording', 'sharing'], category: 'Media & Capture', section: 'Essential Apps', platform: 'Windows' },
  { id: 'faststone', label: 'FastStone Image Viewer', href: 'https://www.faststone.org/', description: 'Fast lightweight image viewer & editor', icon: '🖼️', tags: ['lightweight', 'image-viewer', 'image-editor', 'photo-viewer'], category: 'Media & Capture', section: 'Essential Apps', platform: 'Windows' },
  { id: 'chainner', label: 'chaiNNer', href: 'https://chainner.app/', description: 'Node-based image processing tool for editing and manipulating images', icon: '🎨', tags: ['open-source', 'image-processing', 'node-based', 'photo-editor'], category: 'Media & Capture', section: 'Essential Apps', platform: 'Windows' },
  { id: 'flux', label: 'f.lux', href: 'https://justgetflux.com/', description: 'Adjusts screen temperature to reduce eye strain', icon: '🌡️', tags: ['blue-light-filter', 'eye-strain', 'night-mode'], category: 'Media Players', section: 'Essential Apps', platform: 'Windows' },
  { id: 'klite', label: 'K-Lite + MPC', href: 'https://www.codecguide.com/', description: 'Codec pack & Media Player Classic', icon: '🎬', tags: ['lightweight', 'media-player', 'codecs', 'video-player'], category: 'Media Players', section: 'Essential Apps', platform: 'Windows' },
  { id: 'foobar2k', label: 'Foobar2k', href: 'https://www.foobar2000.org/', description: 'Customizable audio player with high-quality playback', icon: '🎧', tags: ['open-source', 'audio-player', 'music-player', 'high-quality-audio'], category: 'Media Players', section: 'Essential Apps', platform: 'Windows' },
  { id: 'retroarch_windows', label: 'RetroArch', href: 'https://retroarch.com/', description: 'Frontend for emulators, game engines and media players', icon: '🎮', tags: ['emulator', 'gaming', 'frontend', 'multi-platform'], category: 'Media Players', section: 'Essential Apps', platform: 'Windows' },
  { id: 'sumatrapdf', label: 'SumatraPDF', href: 'https://www.sumatrapdfreader.org/', description: 'Lightweight PDF & eBook reader', icon: '📕', tags: ['open-source', 'lightweight', 'pdf-reader', 'ebook-reader', 'document-viewer'], category: 'Media Players', section: 'Essential Apps', platform: 'Windows' },
  { id: 'qbittorrent', label: 'qBittorrent', href: 'https://www.qbittorrent.org/', description: 'Open-source BitTorrent client', icon: '💿', tags: ['open-source', 'torrent-client', 'p2p', 'file-downloading'], category: 'Data & Files', section: 'Essential Apps', platform: 'Windows' },
  { id: 'soulseek', label: 'Soulseek', href: 'https://www.slsknet.org/', description: 'Peer-to-peer file sharing network', icon: '🎵', tags: ['p2p', 'file-sharing', 'music-sharing'], category: 'Data & Files', section: 'Essential Apps', platform: 'Windows' },
  { id: 'windirstat', label: 'WinDirStat', href: 'https://windirstat.net/', description: 'Disk usage statistics viewer', icon: '📊', tags: ['open-source', 'disk-analyzer', 'storage-visualization', 'file-size'], category: 'Data & Files', section: 'Essential Apps', platform: 'Windows' },
  { id: 'onecommander', label: 'OneCommander', href: 'https://www.onecommander.com/', description: 'Modern file manager with tabs, dual-pane browsing, columns navigation, and built-in preview', icon: '📂', tags: ['file-manager', 'dual-pane', 'tabs', 'preview', 'modern', 'free'], category: 'Data & Files', section: 'Essential Apps', platform: 'Windows' },
  { id: 'hitomidownloader', label: 'Hitomi Downloader', href: 'https://github.com/KurtBestor/Hitomi-Downloader', description: 'Desktop utility to download images/videos/music/text from various websites, including manga, galleries, and more', icon: '📥', tags: ['downloader', 'bulk-download', 'media', 'open-source', 'python'], category: 'Data & Files', section: 'Essential Apps', platform: 'Windows' },
  { id: 'notepadplusplus', label: 'Notepad++', href: 'https://notepad-plus-plus.org/', description: 'Free source code editor with syntax highlighting', icon: '📝', tags: ['open-source', 'text-editor', 'code-editor', 'syntax-highlighting'], category: 'Editors & Dev', section: 'Essential Apps', platform: 'Windows' },
  { id: 'ahk', label: 'AHK', href: 'https://www.autohotkey.com/', description: 'Scripting language for automation & hotkeys', icon: '⚙️', tags: ['open-source', 'automation', 'scripting', 'hotkeys', 'macros'], category: 'Editors & Dev', section: 'Essential Apps', platform: 'Windows' },
  { id: 'diskcleanup', label: 'Windows Disk Cleanup', href: 'https://support.microsoft.com/en-us/windows/disk-cleanup-in-windows-8a96ff42-5751-39ad-23d6-4349818186ca', description: 'Built-in Windows utility to free up disk space by removing temporary files, system files, and other unnecessary data. Run with administrator privileges for full access. A better alternative to CCleaner.', icon: '🗑️', tags: ['built-in', 'system-cleaner', 'disk-space', 'optimization'], category: 'Maintenance', section: 'Essential Apps', platform: 'Windows' },
  { id: '7zip', label: '7-Zip', href: 'https://www.7-zip.org/', description: 'File archiver with high compression ratio', icon: '📦', tags: ['open-source', 'file-compression', 'archiver', 'lightweight'], category: 'Data & Files', section: 'Essential Apps', platform: 'Windows' },
  { id: 'handbrake', label: 'HandBrake', href: 'https://handbrake.fr/', description: 'Open-source video transcoder', icon: '🎥', tags: ['open-source', 'video-transcoding', 'media-converter', 'encoding'], category: 'Media & Capture', section: 'Essential Apps', platform: 'Windows' },
  { id: 'vscode', label: 'Visual Studio Code', href: 'https://code.visualstudio.com/', description: 'Free code editor with built-in Git & debugging', icon: '💻', tags: ['open-source', 'microsoft', 'code-editor', 'ide', 'development'], category: 'Editors & Dev', section: 'Essential Apps', platform: 'Windows' },
  { id: 'mas', label: 'Microsoft Activation Scripts (MAS)', href: 'https://github.com/massgravel/Microsoft-Activation-Scripts', description: 'Open-source Windows and Office activator featuring HWID, Ohook, TSforge, and Online KMS activation methods', icon: '🔑', tags: ['open-source', 'activation', 'windows', 'office', 'kms', 'hwid'], category: 'Activation', section: 'Essential Apps', platform: 'Windows' },
  // System Monitoring
  { id: 'hwiinfo', label: 'HWiNFO', href: 'https://www.hwinfo.com/', description: 'Comprehensive hardware monitoring & information tool', icon: '🔧', tags: ['hardware-monitoring', 'system-info', 'temperatures', 'voltages'], category: 'System Monitoring', section: 'System Monitoring', platform: 'Windows' },
  { id: 'msiafterburner', label: 'MSI Afterburner', href: 'https://www.msi.com/Landing/afterburner', description: 'GPU monitoring, overclocking & video capture', icon: '🎮', tags: ['gpu-monitoring', 'overclocking', 'video-capture', 'benchmarking'], category: 'System Monitoring', section: 'System Monitoring', platform: 'Windows' },
  { id: 'speccy', label: 'Speccy', href: 'https://www.ccleaner.com/speccy', description: 'Detailed system specifications & hardware information', icon: '💻', tags: ['system-info', 'hardware-info', 'specifications', 'diagnostics'], category: 'System Monitoring', section: 'System Monitoring', platform: 'Windows' },
  // Communication
  { id: 'telegram', label: 'Telegram', href: 'https://telegram.org/', description: 'Fast, secure messaging with large group support', icon: '💬', tags: ['messaging', 'communication', 'encrypted', 'cross-platform'], category: 'Communication', section: 'Communication', platform: 'Windows' },
  // Privacy
  { id: 'hostfile', label: 'hosts file', href: 'http://winhelp2002.mvps.org/hosts.htm', description: 'Block ads & malware via hosts file', icon: '🚫', tags: ['guide', 'ad-blocking', 'malware-blocking', 'network-security'], category: 'Network Security', section: 'Privacy', platform: 'Windows' },
  { id: 'peerblock', label: 'PeerBlock', href: 'https://www.peerblock.com/', description: 'Blocks IP ranges to prevent unwanted connections', icon: '🛡️', tags: ['open-source', 'ip-blocker', 'firewall', 'privacy'], category: 'Network Security', section: 'Privacy', platform: 'Windows' },
  { id: 'simplewall', label: 'Simplewall', href: 'https://www.henrypp.org/product/simplewall', description: 'Simple firewall for Windows network control', icon: '🔥', tags: ['open-source', 'firewall', 'network-control', 'privacy'], category: 'Network Security', section: 'Privacy', platform: 'Windows' },
  { id: 'protonvpn', label: 'ProtonVPN', href: 'https://protonvpn.com/', description: 'Secure VPN with no-logs policy & free tier', icon: '🔒', tags: ['vpn', 'privacy', 'no-logs', 'swiss-based'], category: 'VPN Services', section: 'Privacy', platform: 'Windows' },
  { id: 'onionfruit', label: 'OnionFruit', href: 'https://github.com/dragonfruitnetwork/onionfruit', description: 'Tor-powered VPN for anonymous browsing', icon: '🧅', tags: ['open-source', 'tor-vpn', 'anonymity', 'privacy'], category: 'VPN Services', section: 'Privacy', platform: 'Windows' },
  { id: 'firefox', label: 'Firefox', href: 'https://www.mozilla.org/firefox/', description: 'Privacy-focused browser with extensive extension support', icon: '🦊', tags: ['browser', 'privacy', 'open-source', 'mozilla'], category: 'Browsers', section: 'Privacy', platform: 'Windows' },
  { id: 'brave', label: 'Brave Browser', href: 'https://brave.com/', description: 'Privacy-focused browser with built-in ad/tracker blocking', icon: '🛡️', tags: ['browser', 'privacy', 'ad-blocking', 'fast', 'crypto-rewards'], category: 'Browsers', section: 'Privacy', platform: 'Windows' },
  // Firefox Extensions
  { id: 'ublock', label: 'uBlock Origin', href: 'https://ublockorigin.com/', description: 'Efficient ad blocker with customizable filters', icon: '⛔', tags: ['open-source', 'browser-extension', 'ad-blocker', 'content-blocker', 'privacy'], category: 'Firefox Extensions', section: 'Firefox Extensions', platform: 'Browser Extensions & Scripts' },
  { id: 'httpseverywhere', label: 'HTTPS Everywhere', href: 'https://www.eff.org/https-everywhere', description: 'Automatically switches to HTTPS connections', icon: '🔒', tags: ['browser-extension', 'https', 'security', 'privacy'], category: 'Firefox Extensions', section: 'Firefox Extensions', platform: 'Browser Extensions & Scripts' },
  { id: 'decentraleyes', label: 'Decentraleyes', href: 'https://decentraleyes.org/', description: 'Serves common libraries locally to avoid CDNs', icon: '🌐', tags: ['browser-extension', 'privacy', 'cdn', 'local-libraries'], category: 'Firefox Extensions', section: 'Firefox Extensions', platform: 'Browser Extensions & Scripts' },
  { id: 'clearurls', label: 'ClearURLs', href: 'https://docs.clearurls.xyz/', description: 'Removes tracking parameters from URLs', icon: '🧹', tags: ['browser-extension', 'privacy', 'tracking', 'url-cleaner'], category: 'Firefox Extensions', section: 'Firefox Extensions', platform: 'Browser Extensions & Scripts' },
  { id: 'cookieautodelete', label: 'Cookie AutoDelete', href: 'https://github.com/Cookie-AutoDelete/Cookie-AutoDelete', description: 'Automatically deletes cookies when closing tabs', icon: '🍪', tags: ['open-source', 'browser-extension', 'cookies', 'privacy'], category: 'Firefox Extensions', section: 'Firefox Extensions', platform: 'Browser Extensions & Scripts' },
  // Chrome Extensions
  { id: 'bookmarkscleanup', label: 'Bookmarks Clean Up', href: 'https://chromewebstore.google.com/detail/oncbjlgldmiagjophlhobkogeladjijl', description: 'Quickly clean up your bookmarks: remove duplicates, dead links, and empty folders, merge similar bookmark folders', icon: '🧹', tags: ['chrome-extension', 'bookmarks', 'cleanup'], category: 'Chrome Extensions', section: 'Chrome Extensions', platform: 'Browser Extensions & Scripts' },
  { id: 'checkerplusgmail', label: 'Checker Plus for Gmail™', href: 'https://chromewebstore.google.com/detail/oeopbcgkkoapgobdbedcemjljbihmemj', description: 'Get notifications, read, listen to or delete emails without opening Gmail and easily manage multiple accounts', icon: '📧', tags: ['chrome-extension', 'gmail', 'notifications', 'productivity'], category: 'Chrome Extensions', section: 'Chrome Extensions', platform: 'Browser Extensions & Scripts' },
  { id: 'closeduplicatetabs', label: 'Close Duplicate Tabs', href: 'https://chromewebstore.google.com/detail/hglecpnhmgcpgkkdlgnajnmopjcfpped', description: 'A Chrome extension to close duplicate tabs', icon: '📑', tags: ['chrome-extension', 'tabs', 'duplicate', 'productivity'], category: 'Chrome Extensions', section: 'Chrome Extensions', platform: 'Browser Extensions & Scripts' },
  { id: 'darkreader', label: 'Dark Reader', href: 'https://chromewebstore.google.com/detail/eimadpbcbfnmbkopoojfekhnkhdbieeh', description: 'Dark mode for every website. Take care of your eyes, use dark theme for night and daily browsing', icon: '🌙', tags: ['chrome-extension', 'dark-mode', 'eyes', 'accessibility'], category: 'Chrome Extensions', section: 'Chrome Extensions', platform: 'Browser Extensions & Scripts' },
  { id: 'fluffbustingpurity', label: 'Fluff Busting Purity', href: 'https://chromewebstore.google.com/detail/nmkinhboiljjkhaknpaeaicmdjhagpep', description: 'Fluff Busting Purity cleans up & customises Facebook, letting you filter out the junk you dont want to see', icon: '👎', tags: ['chrome-extension', 'facebook', 'filter', 'cleanup'], category: 'Chrome Extensions', section: 'Chrome Extensions', platform: 'Browser Extensions & Scripts' },
  { id: 'googledocsoffline', label: 'Google Docs Offline', href: 'https://chromewebstore.google.com/detail/ghbmnnjooekpmoecnnnilnnbdlolhkhi', description: 'Edit, create, and view your documents, spreadsheets, and presentations — all without internet access', icon: '📄', tags: ['chrome-extension', 'google-docs', 'offline', 'productivity'], category: 'Chrome Extensions', section: 'Chrome Extensions', platform: 'Browser Extensions & Scripts' },
  { id: 'hoverzoomplus', label: 'Hover Zoom+', href: 'https://chromewebstore.google.com/detail/pccckmaobkjjboncdfnnofkonhgpceea', description: 'Zoom images/videos on all your favorite websites (Facebook, Amazon, etc). Simply hover your mouse over the image to enlarge it', icon: '🔍', tags: ['chrome-extension', 'zoom', 'images', 'videos'], category: 'Chrome Extensions', section: 'Chrome Extensions', platform: 'Browser Extensions & Scripts' },
  { id: 'phantom', label: 'Phantom', href: 'https://chromewebstore.google.com/detail/bfnaelmomeimhlpmgjnjophhpkkoljpa', description: 'A crypto wallet reimagined for DeFi & NFTs', icon: '👻', tags: ['chrome-extension', 'crypto', 'wallet', 'defi', 'nfts'], category: 'Chrome Extensions', section: 'Chrome Extensions', platform: 'Browser Extensions & Scripts' },
  { id: 'pintab', label: 'Pin Tab', href: 'https://chromewebstore.google.com/detail/dgldedkigbbalaioohedddpameekglma', description: 'A browser action to pin a tab', icon: '📌', tags: ['chrome-extension', 'tabs', 'pin'], category: 'Chrome Extensions', section: 'Chrome Extensions', platform: 'Browser Extensions & Scripts' },
  { id: 'privacybadger', label: 'Privacy Badger', href: 'https://chromewebstore.google.com/detail/pkehgijcmpdhfbdbbnkijodmdjhbjlgp', description: 'Automatically learns to block hidden trackers. Made by leading digital rights nonprofit EFF to stop companies from spying on you', icon: '🛡️', tags: ['chrome-extension', 'privacy', 'tracker-blocker', 'eff'], category: 'Chrome Extensions', section: 'Chrome Extensions', platform: 'Browser Extensions & Scripts' },
  { id: 'redditenhancementsuite', label: 'Reddit Enhancement Suite', href: 'https://chromewebstore.google.com/detail/kbmfpngjjgdllneeigpgjifpgocmfgmb', description: 'A suite of modules that enhance your Reddit browsing experience', icon: '🟠', tags: ['chrome-extension', 'reddit', 'enhancement'], category: 'Chrome Extensions', section: 'Chrome Extensions', platform: 'Browser Extensions & Scripts' },
  { id: 'reloadalltabs', label: 'Reload All Tabs', href: 'https://chromewebstore.google.com/detail/midkcinmplflbiflboepnahkboeonkam', description: 'Reload All tabs using keyboard shortcut (alt + shift + r), context menu, browser action button, or by schedule', icon: '🔄', tags: ['chrome-extension', 'tabs', 'reload', 'productivity'], category: 'Chrome Extensions', section: 'Chrome Extensions', platform: 'Browser Extensions & Scripts' },
  { id: 'sponsorblockyoutube', label: 'SponsorBlock for YouTube - Skip Sponsorships', href: 'https://chromewebstore.google.com/detail/mnjggcdmjocbbbhaepdhchncahnbgone', description: 'Skip sponsorships, subscription begging and more on YouTube videos. Report sponsors on videos you watch to save others\' time', icon: '⏭️', tags: ['chrome-extension', 'youtube', 'skip', 'sponsorships'], category: 'Chrome Extensions', section: 'Chrome Extensions', platform: 'Browser Extensions & Scripts' },
  { id: 'tabsorter', label: 'Tab Sorter', href: 'https://chromewebstore.google.com/detail/nlnkcinjjeoojlhdiedbbolilahmnldj', description: 'This extension provides tools to organize and sort tabs', icon: '📋', tags: ['chrome-extension', 'tabs', 'organize', 'sort'], category: 'Chrome Extensions', section: 'Chrome Extensions', platform: 'Browser Extensions & Scripts' },
  { id: 'tampermonkey', label: 'Tampermonkey', href: 'https://chromewebstore.google.com/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo', description: 'Change the web at will with userscripts', icon: '🐒', tags: ['chrome-extension', 'userscripts', 'tampermonkey'], category: 'Chrome Extensions', section: 'Chrome Extensions', platform: 'Browser Extensions & Scripts' },
  { id: 'ublockoriginlite', label: 'uBlock Origin Lite', href: 'https://chromewebstore.google.com/detail/ddkjiahejlhfcafbddmgiahcphecmpfh', description: 'An efficient content blocker. Blocks ads, trackers, miners, and more immediately upon installation', icon: '🚫', tags: ['chrome-extension', 'ad-blocker', 'content-blocker'], category: 'Chrome Extensions', section: 'Chrome Extensions', platform: 'Browser Extensions & Scripts' },
  { id: 'verticaltabs', label: 'Vertical Tabs in Side Panel', href: 'https://chromewebstore.google.com/detail/akahnknmcbmgodngfjcflnaljdbhnlfo', description: 'Display and manage tabs vertically in the browser sidebar', icon: '📱', tags: ['chrome-extension', 'tabs', 'vertical', 'sidebar'], category: 'Chrome Extensions', section: 'Chrome Extensions', platform: 'Browser Extensions & Scripts' },
  { id: 'wappalyzer', label: 'Wappalyzer - Technology profiler', href: 'https://chromewebstore.google.com/detail/gppongmhjkpfnbhagpmjfkannfbllamg', description: 'Identify web technologies', icon: '🔬', tags: ['chrome-extension', 'technology', 'profiler', 'web-analysis'], category: 'Chrome Extensions', section: 'Chrome Extensions', platform: 'Browser Extensions & Scripts' },
  // Package Managers
  { id: 'ninite', label: 'Ninite', href: 'https://ninite.com/', description: 'Install and update multiple applications at once', icon: '📦', tags: ['installer', 'bulk-install', 'software-management', 'automation'], category: 'Software Installation', section: 'Package Managers', platform: 'Windows' },
  // Links & Resources
  { id: 'rprivacy', label: 'r/Privacy', href: 'https://reddit.com/r/privacy', description: 'Privacy tools, techniques, and discussions', icon: '🔒', tags: ['reddit', 'community', 'privacy', 'security', 'tools'], category: 'Communities', section: 'Links & Resources', platform: 'Windows' },
  { id: 'rpiracy', label: 'r/Piracy', href: 'https://reddit.com/r/piracy', description: 'Software piracy discussion and alternatives', icon: '🏴‍☠️', tags: ['reddit', 'community', 'piracy', 'software', 'alternatives'], category: 'Communities', section: 'Links & Resources', platform: 'Windows' },
  { id: 'torrentleech', label: 'TorrentLeech', href: 'https://www.torrentleech.org/', description: 'Private torrent tracker with high-quality releases', icon: '🌊', tags: ['torrent-tracker', 'private', 'high-quality', 'p2p'], category: 'Torrent Trackers', section: 'Links & Resources', platform: 'Windows' },
  // Userscripts
  { id: 'cleangram', label: 'CleanGram', href: 'https://greasyfork.org/en/scripts/550868-cleangram', description: 'Hides Instagram posts that are suggested, sponsored, or prompt for "Follow" using a flexible configuration', icon: '📷', tags: ['instagram', 'clean-feed', 'userscript'], category: 'Userscripts', section: 'Userscripts', platform: 'Browser Extensions & Scripts' },
  { id: 'ighelper', label: 'IG Helper', href: 'https://greasyfork.org/en/scripts/404535-ig-helper', description: 'Downloading is possible for both photos and videos from posts, as well as for stories, reels or profile picture', icon: '📸', tags: ['instagram', 'downloader', 'userscript'], category: 'Userscripts', section: 'Userscripts', platform: 'Browser Extensions & Scripts' },
  { id: 'oneclicktwitter', label: 'One-Click X/Twitter Media Downloader', href: 'https://greasyfork.org/en/scripts/528890-x-twitter-%E3%83%A1%E3%83%87%E3%82%A3%E3%82%A2%E4%B8%80%E6%8B%AC%E3%83%80%E3%82%A6%E3%83%B3%E3%83%AD%E3%83%BC%E3%83%80%E3%83%BC-iphone-android-%E5%AF%BE%E5%BF%9C', description: 'Download images, videos, and GIFs from X/Twitter with one click, save with user ID and post ID, customizable filenames, ZIP download on mobile', icon: '🐦', tags: ['twitter', 'x', 'downloader', 'userscript'], category: 'Userscripts', section: 'Userscripts', platform: 'Browser Extensions & Scripts' },
  { id: 'pagetual', label: 'Pagetual', href: 'https://greasyfork.org/en/scripts/438684-pagetual', description: 'Powerful auto-pager script for infinite scroll on paginated websites, supports thousands of sites without rules', icon: '🔄', tags: ['infinite-scroll', 'pagination', 'userscript'], category: 'Userscripts', section: 'Userscripts', platform: 'Browser Extensions & Scripts' },
  { id: 'spotifylyricsextractor', label: 'Spotify Lyrics Extractor', href: 'https://greasyfork.org/en/scripts/528409-spotify-lyrics-extractor', description: 'Get and copy Spotify Web lyrics', icon: '🎵', tags: ['spotify', 'lyrics', 'userscript'], category: 'Userscripts', section: 'Userscripts', platform: 'Browser Extensions & Scripts' },

  // Android
  { id: 'revanced_manager', label: 'ReVanced Manager', href: 'https://vanced.to/revanced-manager', description: 'Manager to install ReVanced patched/tweaked apps', icon: '🔧', tags: ['android', 'tweaks', 'youtube'], category: 'Android', section: 'Android', platform: 'Android' },
  { id: 'f_droid', label: 'F-Droid', href: 'https://f-droid.org', description: 'Open-source Android app repository', icon: '📦', tags: ['android', 'store', 'open-source'], category: 'Android', section: 'Android', platform: 'Android' },
  { id: 'instander', label: 'Instander', href: undefined, description: 'Modified Instagram client with extra features', icon: '📷', tags: ['android', 'instagram', 'tweaked'], category: 'Android', section: 'Android', platform: 'Android' },
  { id: 'vsco', label: 'VSCO', href: 'https://vsco.co', description: 'Photo editor & filters', icon: '🎞️', tags: ['android', 'photo', 'editor'], category: 'Android', section: 'Android', platform: 'Android' },
  { id: 'open_camera', label: 'Open Camera', href: 'https://opencamera.org.uk/', description: 'Open-source camera app for Android', icon: '📸', tags: ['android', 'camera', 'open-source'], category: 'Android', section: 'Android', platform: 'Android' },
  { id: 'universal_android_debloater', label: 'Universal Android Debloater', href: 'https://github.com/0x192/universal-android-debloater', description: 'Cross-platform GUI written in Rust using ADB to debloat non-rooted Android devices', icon: '🧹', tags: ['android', 'debloat', 'adb', 'rust', 'cross-platform'], category: 'Android', section: 'Android', platform: 'Android' },
  { id: 'lineageos', label: 'LineageOS', href: 'https://lineageos.org/', description: 'Free and open-source operating system for smartphones and tablets based on Android', icon: '📱', tags: ['android', 'rom', 'custom', 'open-source'], category: 'Android', section: 'Android', platform: 'Android' },
  { id: 'rockbox', label: 'Rockbox', href: 'https://www.rockbox.org/', description: 'Open-source firmware for digital audio players', icon: '🎵', tags: ['firmware', 'audio-player', 'open-source'], category: 'Android', section: 'Android', platform: 'Android' },
  { id: 'retroarch', label: 'RetroArch', href: 'https://retroarch.com/', description: 'Frontend for emulators, game engines and media players', icon: '🎮', tags: ['emulator', 'gaming', 'frontend', 'multi-platform'], category: 'Android', section: 'Android', platform: 'Android' },
  { id: 'telegram_android', label: 'Telegram', href: 'https://telegram.org/', description: 'Fast, secure messaging with large group support', icon: '💬', tags: ['messaging', 'communication', 'encrypted', 'cross-platform'], category: 'Android', section: 'Android', platform: 'Android' },
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState<'Windows' | 'Android' | 'Browser Extensions & Scripts'>('Windows');

  const filteredTools = useMemo(() => {
    let tools = TOOLS.filter((tool) => tool.platform === selectedPlatform);
    if (!searchQuery.trim()) return tools;
    const query = searchQuery.toLowerCase();
    return tools.filter(
      (tool) =>
        tool.label.toLowerCase().includes(query) ||
        tool.description.toLowerCase().includes(query) ||
        tool.tags.some((tag) => tag.includes(query.replace('#', '')))
    );
  }, [searchQuery, selectedPlatform]);

  const groupedBySection = useMemo(() => {
    return filteredTools.reduce(
      (acc, tool) => {
        if (!acc[tool.section]) acc[tool.section] = [];
        acc[tool.section].push(tool);
        return acc;
      },
      {} as Record<string, Tool[]>
    );
  }, [filteredTools]);

  return (
    <div className="min-h-screen bg-black text-green-400 p-8 font-mono overflow-auto">
      <style>{`
        @keyframes blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s infinite;
        }
      `}</style>

      <div className="max-w-4xl">
        <TerminalHeader
          title="decrap --guide"
          subtitle="A comprehensive guide to de-crapify Windows, Android & Browser Extensions & Scripts"
        />

        <div className="flex gap-2 items-center mb-6">
          <span className="text-green-600 text-sm">$ platform:</span>
          {(['Windows', 'Android', 'Browser Extensions & Scripts'] as const).map((platform) => (
            <button
              key={platform}
              onClick={() => setSelectedPlatform(platform)}
              className={`px-3 py-1 text-xs border ${
                selectedPlatform === platform
                  ? 'border-green-300 bg-green-900 text-green-200'
                  : 'border-green-600 bg-black text-green-500 hover:border-green-500'
              } transition-colors`}
            >
              {platform}
            </button>
          ))}
        </div>

        <TerminalSearch
          onSearch={setSearchQuery}
          onClear={() => setSearchQuery('')}
          value={searchQuery}
        />

        {searchQuery && (
          <div className="text-xs text-green-600 mb-4">
            $ found {filteredTools.length} result{filteredTools.length !== 1 ? 's' : ''}
          </div>
        )}

        <main className="space-y-6">
          {Object.entries(groupedBySection).map(([section, tools]) => (
            <TreeContainer key={section} title={section} icon="📦">
              {tools.map((tool) => (
                <TreeNodeLeaf
                  key={tool.id}
                  icon={tool.icon}
                  label={tool.label}
                  href={tool.href}
                  description={tool.description}
                  tags={tool.tags}
                  onTagClick={(tag) => setSearchQuery('#' + tag)}
                />
              ))}
            </TreeContainer>
          ))}
        </main>

        {filteredTools.length === 0 && searchQuery && (
          <div className="text-center py-8 text-green-600">
            <div>$ no results found for &quot;{searchQuery}&quot;</div>
            <div className="text-xs mt-2">try different keywords or tags</div>
          </div>
        )}

        <div className="border-t-2 border-green-500 pt-4 mt-8 text-green-300 text-sm">
          <div>$ guide --end</div>
          <div className="mt-1 text-green-600">
            © Decrap Guide | Keep it minimal, keep it running
          </div>
        </div>
      </div>
    </div>
  );
}
