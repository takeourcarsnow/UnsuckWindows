export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-100 mb-4">
            Guide to Unsuck Windows
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            With a bit of tweaking, you can live with it. Beta builds worked very poorly, but with the current one everything is ok. Here are my essentials, maybe you'll find something useful for yourself:
          </p>
        </header>

        <main className="space-y-12">
          <section className="bg-gray-800 rounded-lg p-8 shadow-lg">
            <h2 className="text-3xl font-semibold text-gray-100 mb-6">Debloat</h2>
            <ul className="space-y-4">
              <li className="flex flex-col sm:flex-row sm:items-center">
                <div className="flex-1">
                  <strong className="text-lg text-gray-100">
                    <a href="https://github.com/Raphire/Win11Debloat" className="text-blue-400 hover:text-blue-300 transition-colors">
                      Win11Debloat
                    </a>
                  </strong>
                  <p className="text-gray-300 mt-1">A PowerShell script to remove bloatware and unnecessary apps from Windows 11.</p>
                </div>
              </li>
            </ul>
          </section>

          <section className="bg-gray-800 rounded-lg p-8 shadow-lg">
            <h2 className="text-3xl font-semibold text-gray-100 mb-6">UI Tweaks</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-gray-700 rounded-lg p-4">
                <strong className="text-lg text-gray-100">
                  <a href="https://www.rainmeter.net/" className="text-blue-400 hover:text-blue-300 transition-colors">
                    Rainmeter
                  </a>
                </strong>
                <p className="text-gray-300 mt-2 text-sm">Desktop customization tool for creating skins, widgets, and visual effects.</p>
              </div>
              <div className="bg-gray-700 rounded-lg p-4">
                <strong className="text-lg text-gray-100">
                  <a href="https://github.com/Droptop-Four/Droptop-Four/" className="text-blue-400 hover:text-blue-300 transition-colors">
                    Droptop
                  </a>
                </strong>
                <p className="text-gray-300 mt-2 text-sm">A desktop overlay for quick access to apps and folders.</p>
              </div>
              <div className="bg-gray-700 rounded-lg p-4">
                <strong className="text-lg text-gray-100">
                  <a href="https://www.mactype.net/" className="text-blue-400 hover:text-blue-300 transition-colors">
                    MacType
                  </a>
                </strong>
                <p className="text-gray-300 mt-2 text-sm">Enhances font rendering on Windows to match macOS quality.</p>
              </div>
              <div className="bg-gray-700 rounded-lg p-4">
                <strong className="text-lg text-gray-100">
                  <a href="https://github.com/t1m0thyj/WinDynamicDesktop" className="text-blue-400 hover:text-blue-300 transition-colors">
                    WinDynamicDesktop
                  </a>
                </strong>
                <p className="text-gray-300 mt-2 text-sm">Dynamically changes desktop wallpaper based on time of day.</p>
              </div>
              <div className="bg-gray-700 rounded-lg p-4">
                <strong className="text-lg text-gray-100">
                  <a href="https://www.startallback.com/" className="text-blue-400 hover:text-blue-300 transition-colors">
                    StartAllBack
                  </a>
                </strong>
                <p className="text-gray-300 mt-2 text-sm">Restores the classic Windows Start menu and taskbar features.</p>
              </div>
              <div className="bg-gray-700 rounded-lg p-4">
                <strong className="text-lg text-gray-100">
                  <a href="https://github.com/antiden/macOS-cursors-for-Windows" className="text-blue-400 hover:text-blue-300 transition-colors">
                    osx pointer
                  </a>
                </strong>
                <p className="text-gray-300 mt-2 text-sm">macOS-style cursors for Windows.</p>
              </div>
              <div className="bg-gray-700 rounded-lg p-4">
                <strong className="text-lg text-gray-100">
                  <a href="https://github.com/prncc/3RVX" className="text-blue-400 hover:text-blue-300 transition-colors">
                    3RVX + HideVolumeOSD
                  </a>
                </strong>
                <p className="text-gray-300 mt-2 text-sm">Advanced volume control with on-screen display and customization.</p>
              </div>
            </div>
          </section>

          <section className="bg-gray-800 rounded-lg p-8 shadow-lg">
            <h2 className="text-3xl font-semibold text-gray-100 mb-6">Essential Apps</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <div className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors">
                <strong className="text-lg text-gray-100">
                  <a href="https://github.com/microsoft/PowerToys" className="text-blue-400 hover:text-blue-300 transition-colors">
                    PowerToys
                  </a>
                </strong>
                <p className="text-gray-300 mt-2 text-sm">A set of utilities for power users to tune and streamline Windows experience.</p>
              </div>
              <div className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors">
                <strong className="text-lg text-gray-100">
                  <a href="https://www.voidtools.com/" className="text-blue-400 hover:text-blue-300 transition-colors">
                    Everything
                  </a>
                </strong>
                <p className="text-gray-300 mt-2 text-sm">Ultra-fast file and folder search tool.</p>
              </div>
              <div className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors">
                <strong className="text-lg text-gray-100">
                  <a href="https://ditto-cp.sourceforge.io/" className="text-blue-400 hover:text-blue-300 transition-colors">
                    Ditto
                  </a>
                </strong>
                <p className="text-gray-300 mt-2 text-sm">Clipboard manager that saves multiple clipboard items.</p>
              </div>
              <div className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors">
                <strong className="text-lg text-gray-100">
                  <a href="https://github.com/QL-Win/QuickLook" className="text-blue-400 hover:text-blue-300 transition-colors">
                    QuickLook
                  </a>
                </strong>
                <p className="text-gray-300 mt-2 text-sm">Preview files by pressing the spacebar, like on macOS.</p>
              </div>
              <div className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors">
                <strong className="text-lg text-gray-100">
                  <a href="https://github.com/File-New-Project/EarTrumpet" className="text-blue-400 hover:text-blue-300 transition-colors">
                    EarTrumpet
                  </a>
                </strong>
                <p className="text-gray-300 mt-2 text-sm">Volume mixer for Windows with per-app controls.</p>
              </div>
              <div className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors">
                <strong className="text-lg text-gray-100">
                  <a href="https://getsharex.com/" className="text-blue-400 hover:text-blue-300 transition-colors">
                    ShareX
                  </a>
                </strong>
                <p className="text-gray-300 mt-2 text-sm">Screenshot and screen recording tool with sharing options.</p>
              </div>
              <div className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors">
                <strong className="text-lg text-gray-100">
                  <a href="https://justgetflux.com/" className="text-blue-400 hover:text-blue-300 transition-colors">
                    f.lux
                  </a>
                </strong>
                <p className="text-gray-300 mt-2 text-sm">Adjusts screen color temperature to reduce eye strain.</p>
              </div>
              <div className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors">
                <strong className="text-lg text-gray-100">
                  <a href="https://www.autohotkey.com/" className="text-blue-400 hover:text-blue-300 transition-colors">
                    AHK
                  </a>
                </strong>
                <p className="text-gray-300 mt-2 text-sm">Scripting language for automating tasks and creating hotkeys.</p>
              </div>
              <div className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors">
                <strong className="text-lg text-gray-100">
                  <a href="https://www.codecguide.com/" className="text-blue-400 hover:text-blue-300 transition-colors">
                    K-Lite + MPC
                  </a>
                </strong>
                <p className="text-gray-300 mt-2 text-sm">Codec pack and Media Player Classic for video playback.</p>
              </div>
              <div className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors">
                <strong className="text-lg text-gray-100">
                  <a href="https://www.foobar2000.org/" className="text-blue-400 hover:text-blue-300 transition-colors">
                    Foobar2k
                  </a>
                </strong>
                <p className="text-gray-300 mt-2 text-sm">Customizable audio player with high-quality playback.</p>
              </div>
              <div className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors">
                <strong className="text-lg text-gray-100">
                  <a href="https://notepad-plus-plus.org/" className="text-blue-400 hover:text-blue-300 transition-colors">
                    Notepad++
                  </a>
                </strong>
                <p className="text-gray-300 mt-2 text-sm">Free source code editor with syntax highlighting.</p>
              </div>
              <div className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors">
                <strong className="text-lg text-gray-100">
                  <a href="https://www.qbittorrent.org/" className="text-blue-400 hover:text-blue-300 transition-colors">
                    qBittorrent
                  </a>
                </strong>
                <p className="text-gray-300 mt-2 text-sm">Open-source BitTorrent client.</p>
              </div>
              <div className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors">
                <strong className="text-lg text-gray-100">
                  <a href="https://www.slsknet.org/" className="text-blue-400 hover:text-blue-300 transition-colors">
                    Soulseek
                  </a>
                </strong>
                <p className="text-gray-300 mt-2 text-sm">Peer-to-peer file sharing network for music and more.</p>
              </div>
              <div className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors">
                <strong className="text-lg text-gray-100">
                  <a href="https://www.faststone.org/" className="text-blue-400 hover:text-blue-300 transition-colors">
                    FastStone Image Viewer
                  </a>
                </strong>
                <p className="text-gray-300 mt-2 text-sm">Fast and lightweight image viewer and editor.</p>
              </div>
              <div className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors">
                <strong className="text-lg text-gray-100">
                  <a href="https://www.sumatrapdfreader.org/" className="text-blue-400 hover:text-blue-300 transition-colors">
                    SumatraPDF
                  </a>
                </strong>
                <p className="text-gray-300 mt-2 text-sm">Lightweight PDF, eBook, and comic book reader.</p>
              </div>
              <div className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors">
                <strong className="text-lg text-gray-100">
                  <a href="https://windirstat.net/" className="text-blue-400 hover:text-blue-300 transition-colors">
                    WinDirStat
                  </a>
                </strong>
                <p className="text-gray-300 mt-2 text-sm">Disk usage statistics viewer.</p>
              </div>
              <div className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors">
                <strong className="text-lg text-gray-100">
                  <a href="https://www.ccleaner.com/" className="text-blue-400 hover:text-blue-300 transition-colors">
                    CCleaner
                  </a>
                </strong>
                <p className="text-gray-300 mt-2 text-sm">System optimization and cleaning tool.</p>
              </div>
            </div>
          </section>

          <section className="bg-gray-800 rounded-lg p-8 shadow-lg">
            <h2 className="text-3xl font-semibold text-gray-100 mb-6">Privacy</h2>
            <div className="space-y-4">
              <div className="bg-gray-700 rounded-lg p-4">
                <strong className="text-lg text-gray-100">
                  Patch hosts file{" "}
                  <a href="http://winhelp2002.mvps.org/hosts.htm" className="text-blue-400 hover:text-blue-300 transition-colors">
                    winhelp2002.mvps.org/hosts.htm
                  </a>
                </strong>
                <p className="text-gray-300 mt-2">Block ads and malware by editing the hosts file.</p>
              </div>
              <div className="bg-gray-700 rounded-lg p-4">
                <strong className="text-lg text-gray-100">Change default DNS to Google Public DNS/ OpenDNS</strong>
                <p className="text-gray-300 mt-2">Use secure DNS servers like 8.8.8.8 or 208.67.222.222 for better privacy.</p>
              </div>
              <div className="bg-gray-700 rounded-lg p-4">
                <strong className="text-lg text-gray-100">
                  <a href="https://www.peerblock.com/" className="text-blue-400 hover:text-blue-300 transition-colors">
                    PeerBlock
                  </a>
                </strong>
                <p className="text-gray-300 mt-2">Blocks IP ranges to prevent unwanted connections.</p>
              </div>
              <div className="bg-gray-700 rounded-lg p-4">
                <strong className="text-lg text-gray-100">
                  <a href="https://ublockorigin.com/" className="text-blue-400 hover:text-blue-300 transition-colors">
                    uBlock + filters
                  </a>
                </strong>
                <p className="text-gray-300 mt-2">Efficient ad blocker for browsers with customizable filters.</p>
              </div>
              <div className="bg-gray-700 rounded-lg p-4">
                <strong className="text-lg text-gray-100">
                  <a href="https://www.henrypp.org/product/simplewall" className="text-blue-400 hover:text-blue-300 transition-colors">
                    Simplewall
                  </a>
                </strong>
                <p className="text-gray-300 mt-2">Simple firewall for Windows to control network access.</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
