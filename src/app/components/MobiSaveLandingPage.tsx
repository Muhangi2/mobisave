'use client'

import React, { useState, useEffect } from 'react';

interface VisibilityState {
  [key: string]: boolean;
}

const MobiSaveLandingPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState<VisibilityState>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id^="section-"]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const showContact = (): void => {
    alert('Ready to revolutionize African savings with Lisk!\n\nContact: [Your Email]\nTelegram: [Your Handle]\nTwitter: [Your Profile]\n\nLet\'s make MobiSave the flagship African dApp! 🚀⛓️');
  };

  return (
    <div className="w-screen overflow-x-hidden text-white font-sans">
      {/* Hero Section */}
      <section id="section-hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-blue-600 px-4 py-16">
        <div className={`max-w-6xl w-full text-center transition-all duration-1000 ${isVisible['section-hero'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-6xl md:text-8xl font-bold mb-4 animate-bounce">💰⛓️ MobiSave</h1>
          <p className="text-2xl mb-8 opacity-90">Africa's First Blockchain-Powered Social Savings Game</p>
          <div className="text-xl mb-8">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl mx-2 font-bold shadow-lg">
              Built on Lisk
            </span>
          </div>
          <div className="text-xl">
            <p>🎮 Social Gaming • ⛓️ Blockchain Security • 🌍 Global Access</p>
            <p className="mt-4 opacity-80">Making Crypto Savings Go Viral in Africa</p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="section-problem" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-700 to-purple-500 px-4 py-16">
        <div className={`max-w-6xl w-full text-center transition-all duration-1000 ${isVisible['section-problem'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl font-bold mb-4">😰 The Problem</h2>
          <p className="text-2xl mb-8 opacity-90">Traditional Savings Fail Young Africans</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/20 p-6 rounded-3xl backdrop-blur-lg border border-white/30 transform hover:-translate-y-2 transition-transform">
              <div className="text-5xl font-bold text-yellow-300 mb-2">68%</div>
              <p>of young Ugandans have zero savings</p>
            </div>
            <div className="bg-white/20 p-6 rounded-3xl backdrop-blur-lg border border-white/30 transform hover:-translate-y-2 transition-transform">
              <div className="text-5xl font-bold text-yellow-300 mb-2">25%</div>
              <p>annual inflation destroys mobile money savings</p>
            </div>
            <div className="bg-white/20 p-6 rounded-3xl backdrop-blur-lg border border-white/30 transform hover:-translate-y-2 transition-transform">
              <div className="text-5xl font-bold text-yellow-300 mb-2">$2B</div>
              <p>in remittances need better savings solutions</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-500/20 p-4 rounded-xl border-l-4 border-green-500">❌ Mobile money lacks cross-border functionality</div>
            <div className="bg-green-500/20 p-4 rounded-xl border-l-4 border-green-500">❌ No protection against currency devaluation</div>
            <div className="bg-green-500/20 p-4 rounded-xl border-l-4 border-green-500">❌ Group savings require manual trust</div>
            <div className="bg-green-500/20 p-4 rounded-xl border-l-4 border-green-500">❌ Boring experience kills motivation</div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="section-solution" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-600 to-orange-500 px-4 py-16">
        <div className={`max-w-6xl w-full text-center transition-all duration-1000 ${isVisible['section-solution'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl font-bold mb-4">⛓️ Blockchain-Powered Solution</h2>
          <p className="text-2xl mb-8 opacity-90">Lisk Makes Savings Social, Global & Secure</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-green-500/20 p-6 rounded-2xl border-2 border-green-500 text-center transform hover:scale-105 transition-transform">
              <span className="text-5xl block mb-4">🪙</span>
              <h3 className="text-xl font-bold mb-2">LSK Token Rewards</h3>
              <p>Earn LSK for savings milestones & challenges</p>
            </div>
            <div className="bg-green-500/20 p-6 rounded-2xl border-2 border-green-500 text-center transform hover:scale-105 transition-transform">
              <span className="text-5xl block mb-4">🤝</span>
              <h3 className="text-xl font-bold mb-2">Smart Contract ROSCAs</h3>
              <p>Trustless rotating savings groups</p>
            </div>
            <div className="bg-green-500/20 p-6 rounded-2xl border-2 border-green-500 text-center transform hover:scale-105 transition-transform">
              <span className="text-5xl block mb-4">🏆</span>
              <h3 className="text-xl font-bold mb-2">NFT Achievements</h3>
              <p>Collectible badges for savings goals</p>
            </div>
            <div className="bg-green-500/20 p-6 rounded-2xl border-2 border-green-500 text-center transform hover:scale-105 transition-transform">
              <span className="text-5xl block mb-4">🌍</span>
              <h3 className="text-xl font-bold mb-2">Cross-Border Savings</h3>
              <p>Diaspora sends LSK to family savings</p>
            </div>
            <div className="bg-green-500/20 p-6 rounded-2xl border-2 border-green-500 text-center transform hover:scale-105 transition-transform">
              <span className="text-5xl block mb-4">🛡️</span>
              <h3 className="text-xl font-bold mb-2">Inflation Protection</h3>
              <p>LSK shields from local currency devaluation</p>
            </div>
            <div className="bg-green-500/20 p-6 rounded-2xl border-2 border-green-500 text-center transform hover:scale-105 transition-transform">
              <span className="text-5xl block mb-4">📊</span>
              <h3 className="text-xl font-bold mb-2">Transparent Staking</h3>
              <p>Earn staking rewards on saved LSK</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Features Section */}
      <section id="section-features" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-500 to-cyan-300 px-4 py-16">
        <div className={`max-w-6xl w-full text-center transition-all duration-1000 ${isVisible['section-features'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl font-bold mb-4">🎮 Addictive Social Features</h2>
          <p className="text-2xl mb-8 opacity-90">Making Blockchain Savings Go Viral</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white/15 p-6 rounded-2xl backdrop-blur-lg border border-white/20 text-center transform hover:scale-105 hover:bg-white/25 transition-all">
              <span className="text-5xl block mb-4">🎯</span>
              <h3 className="text-xl font-bold mb-2">Daily LSK Challenges</h3>
              <p>"Save 10,000 UGX today, earn 0.5 LSK!"</p>
            </div>
            <div className="bg-white/15 p-6 rounded-2xl backdrop-blur-lg border border-white/20 text-center transform hover:scale-105 hover:bg-white/25 transition-all">
              <span className="text-5xl block mb-4">🏆</span>
              <h3 className="text-xl font-bold mb-2">Leaderboards</h3>
              <p>Compete with friends for LSK rewards</p>
            </div>
            <div className="bg-white/15 p-6 rounded-2xl backdrop-blur-lg border border-white/20 text-center transform hover:scale-105 hover:bg-white/25 transition-all">
              <span className="text-5xl block mb-4">👥</span>
              <h3 className="text-xl font-bold mb-2">Blockchain Savings Groups</h3>
              <p>Smart contract-secured group goals</p>
            </div>
            <div className="bg-white/15 p-6 rounded-2xl backdrop-blur-lg border border-white/20 text-center transform hover:scale-105 hover:bg-white/25 transition-all">
              <span className="text-5xl block mb-4">🎁</span>
              <h3 className="text-xl font-bold mb-2">Instant Rewards</h3>
              <p>LSK tokens + airtime + data bundles</p>
            </div>
            <div className="bg-white/15 p-6 rounded-2xl backdrop-blur-lg border border-white/20 text-center transform hover:scale-105 hover:bg-white/25 transition-all">
              <span className="text-5xl block mb-4">🔥</span>
              <h3 className="text-xl font-bold mb-2">Streak NFTs</h3>
              <p>30-day streak = rare collectible badge</p>
            </div>
            <div className="bg-white/15 p-6 rounded-2xl backdrop-blur-lg border border-white/20 text-center transform hover:scale-105 hover:bg-white/25 transition-all">
              <span className="text-5xl block mb-4">📱</span>
              <h3 className="text-xl font-bold mb-2">Mobile Money Bridge</h3>
              <p>Seamless MTN/Airtel to LSK conversion</p>
            </div>
          </div>
        </div>
      </section>

      {/* Market Section */}
      <section id="section-market" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-700 to-purple-500 px-4 py-16">
        <div className={`max-w-6xl w-full text-center transition-all duration-1000 ${isVisible['section-market'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl font-bold mb-4">🎯 Massive African Market</h2>
          <p className="text-2xl mb-8 opacity-90">Perfect Storm for Blockchain Adoption</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/20 p-6 rounded-3xl backdrop-blur-lg border border-white/30 transform hover:-translate-y-2 transition-transform">
              <div className="text-5xl font-bold text-yellow-300 mb-2">15M</div>
              <p>Young Ugandans (18-35)</p>
            </div>
            <div className="bg-white/20 p-6 rounded-3xl backdrop-blur-lg border border-white/30 transform hover:-translate-y-2 transition-transform">
              <div className="text-5xl font-bold text-yellow-300 mb-2">200M</div>
              <p>East Africa opportunity</p>
            </div>
            <div className="bg-white/20 p-6 rounded-3xl backdrop-blur-lg border border-white/30 transform hover:-translate-y-2 transition-transform">
              <div className="text-5xl font-bold text-yellow-300 mb-2">$500M</div>
              <p>Total Addressable Market</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-500/20 p-4 rounded-xl border-l-4 border-green-500">🌍 45M mobile money accounts ready for crypto bridge</div>
            <div className="bg-green-500/20 p-4 rounded-xl border-l-4 border-green-500">💸 $2.3B monthly mobile money transactions</div>
            <div className="bg-green-500/20 p-4 rounded-xl border-l-4 border-green-500">📱 85% smartphone penetration in target demographic</div>
            <div className="bg-green-500/20 p-4 rounded-xl border-l-4 border-green-500">⛓️ Growing blockchain awareness & adoption</div>
          </div>
        </div>
      </section>

      {/* Business Model Section */}
      <section id="section-business" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-blue-600 px-4 py-16">
        <div className={`max-w-6xl w-full text-center transition-all duration-1000 ${isVisible['section-business'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl font-bold mb-4">💰 Revenue Streams</h2>
          <p className="text-2xl mb-8 opacity-90">Multiple Blockchain-Enhanced Income Sources</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-gradient-to-br from-green-600 to-green-800 p-6 rounded-2xl text-center transform hover:rotate-2 hover:scale-105 transition-all shadow-2xl">
              <h3 className="text-xl font-bold mb-2">🪙 LSK Staking Rewards</h3>
              <p>Share of staking yields from user funds</p>
            </div>
            <div className="bg-gradient-to-br from-green-600 to-green-800 p-6 rounded-2xl text-center transform hover:rotate-2 hover:scale-105 transition-all shadow-2xl">
              <h3 className="text-xl font-bold mb-2">⛓️ Transaction Fees</h3>
              <p>Small fees on LSK-mobile money swaps</p>
            </div>
            <div className="bg-gradient-to-br from-red-600 to-orange-500 p-6 rounded-2xl text-center transform hover:rotate-2 hover:scale-105 transition-all shadow-2xl">
              <h3 className="text-xl font-bold mb-2">⭐ Premium Features</h3>
              <p>Advanced DeFi tools & analytics</p>
            </div>
            <div className="bg-gradient-to-br from-red-600 to-orange-500 p-6 rounded-2xl text-center transform hover:rotate-2 hover:scale-105 transition-all shadow-2xl">
              <h3 className="text-xl font-bold mb-2">🏆 NFT Marketplace</h3>
              <p>Trading fees on achievement NFTs</p>
            </div>
            <div className="bg-gradient-to-br from-red-600 to-orange-500 p-6 rounded-2xl text-center transform hover:rotate-2 hover:scale-105 transition-all shadow-2xl">
              <h3 className="text-xl font-bold mb-2">🤝 Enterprise LSK Programs</h3>
              <p>Corporate employee savings rewards</p>
            </div>
            <div className="bg-gradient-to-br from-red-600 to-orange-500 p-6 rounded-2xl text-center transform hover:rotate-2 hover:scale-105 transition-all shadow-2xl">
              <h3 className="text-xl font-bold mb-2">🎯 Brand Partnerships</h3>
              <p>Sponsored challenges & LSK rewards</p>
            </div>
          </div>
          
          <p className="text-2xl mt-8">
            📈 <strong>Projected Revenue:</strong> $5M by Year 2 with 100K LSK holders
          </p>
        </div>
      </section>

      {/* Competitive Advantage Section */}
      <section id="section-advantage" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-600 to-orange-500 px-4 py-16">
        <div className={`max-w-6xl w-full text-center transition-all duration-1000 ${isVisible['section-advantage'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl font-bold mb-4">🔥 Our Competitive Advantage</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-green-500/20 p-6 rounded-2xl border-2 border-green-500 text-center transform hover:scale-105 transition-transform">
              <span className="text-5xl block mb-4">🎮</span>
              <h3 className="text-xl font-bold mb-2">Gamified Crypto UX</h3>
              <p>Making blockchain fun & accessible</p>
            </div>
            <div className="bg-green-500/20 p-6 rounded-2xl border-2 border-green-500 text-center transform hover:scale-105 transition-transform">
              <span className="text-5xl block mb-4">🌍</span>
              <h3 className="text-xl font-bold mb-2">Africa-First Design</h3>
              <p>Built for mobile money integration</p>
            </div>
            <div className="bg-green-500/20 p-6 rounded-2xl border-2 border-green-500 text-center transform hover:scale-105 transition-transform">
              <span className="text-5xl block mb-4">⚡</span>
              <h3 className="text-xl font-bold mb-2">Lisk Speed & Low Fees</h3>
              <p>Perfect for micro-transactions</p>
            </div>
            <div className="bg-white/15 p-6 rounded-2xl backdrop-blur-lg border border-white/20 text-center transform hover:scale-105 hover:bg-white/25 transition-all">
              <span className="text-5xl block mb-4">👨‍👩‍👧‍👦</span>
              <h3 className="text-xl font-bold mb-2">Social Viral Growth</h3>
              <p>Friends onboard friends naturally</p>
            </div>
            <div className="bg-white/15 p-6 rounded-2xl backdrop-blur-lg border border-white/20 text-center transform hover:scale-105 hover:bg-white/25 transition-all">
              <span className="text-5xl block mb-4">🛡️</span>
              <h3 className="text-xl font-bold mb-2">Real Utility</h3>
              <p>Solving actual problems, not speculation</p>
            </div>
            <div className="bg-white/15 p-6 rounded-2xl backdrop-blur-lg border border-white/20 text-center transform hover:scale-105 hover:bg-white/25 transition-all">
              <span className="text-5xl block mb-4">🏦</span>
              <h3 className="text-xl font-bold mb-2">Enterprise Ready</h3>
              <p>Banking & remittance partnerships</p>
            </div>
          </div>
          
          <p className="text-2xl text-green-400">
            🚀 <strong>First-mover advantage in African crypto-savings market</strong>
          </p>
        </div>
      </section>

      {/* Traction Section */}
      <section id="section-traction" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-500 to-cyan-300 px-4 py-16">
        <div className={`max-w-6xl w-full text-center transition-all duration-1000 ${isVisible['section-traction'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl font-bold mb-4">📊 Traction & Status</h2>
          <p className="text-2xl mb-8 opacity-90">Ready for Lisk Mainnet Launch</p>
          
          <div className="flex justify-around flex-wrap mb-8">
            <div className="text-center m-4">
              <div className="text-5xl font-bold text-green-500 mb-2">500+</div>
              <p>Pre-registered users</p>
            </div>
            <div className="text-center m-4">
              <div className="text-5xl font-bold text-green-500 mb-2">3</div>
              <p>University partnerships</p>
            </div>
            <div className="text-center m-4">
              <div className="text-5xl font-bold text-green-500 mb-2">2</div>
              <p>Mobile money integrations ready</p>
            </div>
          </div>
          
          <div className="mb-8 text-xl space-y-2">
            <p>✅ MVP Built & Tested on Lisk Testnet</p>
            <p>✅ Smart Contracts Audited & Deployed</p>
            <p>✅ Mobile Money Bridge Functional</p>
            <p>✅ NFT Achievement System Ready</p>
            <p>🚀 Mainnet Launch in 4 Weeks</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-500/20 p-4 rounded-xl border-l-4 border-green-500">💰 LSK token economics designed</div>
            <div className="bg-green-500/20 p-4 rounded-xl border-l-4 border-green-500">🤝 Banking partnerships in discussion</div>
            <div className="bg-green-500/20 p-4 rounded-xl border-l-4 border-green-500">📱 iOS & Android apps ready</div>
            <div className="bg-green-500/20 p-4 rounded-xl border-l-4 border-green-500">🌍 Expansion roadmap to Kenya & Nigeria</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="section-cta" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-blue-600 px-4 py-16">
        <div className={`max-w-6xl w-full text-center transition-all duration-1000 ${isVisible['section-cta'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl font-bold mb-4">🤝 Join the Revolution</h2>
          <p className="text-2xl mb-8 opacity-90">Help Us Bring Lisk to 15 Million Africans</p>
          
          <div className="mb-8 text-2xl space-y-2">
            <p>💰 <strong>Seeking:</strong> $150K seed funding</p>
            <p>🎯 <strong>Goal:</strong> 50K LSK holders in 6 months</p>
            <p>🚀 <strong>Vision:</strong> Africa's #1 crypto-savings platform</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-green-500/20 p-4 rounded-xl border-l-4 border-green-500">🌍 Massive market entry for Lisk ecosystem</div>
            <div className="bg-green-500/20 p-4 rounded-xl border-l-4 border-green-500">💎 Real-world blockchain utility demonstration</div>
            <div className="bg-green-500/20 p-4 rounded-xl border-l-4 border-green-500">🔥 Viral user growth engine for LSK adoption</div>
            <div className="bg-green-500/20 p-4 rounded-xl border-l-4 border-green-500">🏦 Bridge between traditional finance & DeFi</div>
          </div>
          
          <button 
            onClick={showContact}
            className="bg-gradient-to-r from-green-600 to-green-800 text-white px-12 py-6 text-2xl rounded-full font-bold uppercase tracking-wider transform hover:-translate-y-2 hover:shadow-2xl transition-all shadow-xl"
          >
            Build the Future with Lisk
          </button>
          
          <p className="mt-8 text-xl opacity-90">
            ⛓️ <em>"Making blockchain as easy to use as mobile money"</em>
          </p>
        </div>
      </section>
    </div>
  );
};

export default MobiSaveLandingPage;