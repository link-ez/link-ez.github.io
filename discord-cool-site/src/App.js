import React from 'react';
import { motion } from 'framer-motion';
import Particles from './Particles';
import Card from './Card';
import DecryptedText from './DecryptedText';
import { useRef, useState, useEffect } from 'react';
import { useInView } from 'framer-motion';

const sectionStyle = {
  maxWidth: '700px',
  margin: '60px auto',
  padding: '32px',
  background: 'rgba(255,255,255,0.9)',
  borderRadius: '16px',
  boxShadow: '0 4px 24px rgba(0,0,0,0.08)'
};

const featureCardStyle = {
  flex: 1,
  margin: '16px',
  padding: '28px 20px',
  background: 'rgba(255,255,255,0.95)',
  borderRadius: '14px',
  boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
  minWidth: '180px',
  textAlign: 'center',
  fontSize: '1.15rem',
  fontWeight: 500
};

// 文字分割動畫組件
const SplitText = ({ text, style }) => {
  const letters = text.split('');
  
  return (
    <div style={style}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
            ease: "easeOut"
          }}
          className="gradient-text"
          style={{ display: 'inline-block' }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </div>
  );
};

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // 特色區塊進入視窗才觸發動畫
  const featuresRef = useRef(null);
  const isFeaturesInView = useInView(featuresRef, { once: true, amount: 0.3 });
  return (
    <div style={{position:'relative', minHeight: '100vh', fontFamily: 'sans-serif', background: '#000'}}>
      {/* 全站粒子背景 */}
      <div style={{position:'fixed', inset:0, zIndex:0, pointerEvents:'none'}}>
        <Particles
          particleColors={['#40ffaa', '#4079ff']}
          particleCount={1200}
          particleSpread={18}
          speed={0.15}
          particleBaseSize={130}
          moveParticlesOnHover={true}
          particleHoverFactor={2.5}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      {/* 所有內容區塊都浮在粒子上方 */}
      <div style={{position:'relative', zIndex:1}}>
        {/* 首頁 section */}
        <motion.section
          style={{height:'100vh', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', margin:0, padding:0}}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div style={{display:'flex', flexDirection:'column', alignItems:'center', width:'auto'}}>
            <SplitText 
              text="國高中非學習討論區"
              style={{ 
                color: '#f2e9e4', 
                fontSize: '4.2rem', 
                textAlign: 'center', 
                letterSpacing: '4px', 
                fontWeight: 900, 
                marginBottom:'32px',
                lineHeight: 1.1
              }}
            />
            {/* 新立即加入按鈕 */}
            <div className="flex flex-col gap-6 max-w-sm mx-auto relative z-10" style={{marginTop: 32}}>
              <a href="https://discord.gg/m8fEPsAd" target="_blank" rel="noopener noreferrer" className="group relative p-4 rounded-2xl backdrop-blur-xl border-2 border-indigo-400/60 bg-gradient-to-br from-indigo-500/60 via-black-900/60 to-black/80 shadow-[0_0_32px_8px_rgba(99,102,241,0.45),0_2px_16px_rgba(99,102,241,0.25)] hover:shadow-[0_0_64px_16px_rgba(99,102,241,0.7),0_2px_32px_rgba(99,102,241,0.35)] hover:scale-[1.02] hover:-translate-y-1 active:scale-95 transition-all duration-500 ease-out cursor-pointer hover:border-indigo-300/80 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-400/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/10 via-indigo-400/20 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-indigo-500/30 to-indigo-600/10 backdrop-blur-sm group-hover:from-indigo-400/40 group-hover:to-indigo-500/20 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="w-7 h-7 fill-current text-indigo-400 group-hover:text-indigo-300 transition-all duration-300 group-hover:scale-110 drop-shadow-lg">
                      <path d="M524.531 69.836a1.5 1.5 0 0 0-.764-.7A485.065 485.065 0 0 0 404.081 32.03a1.816 1.816 0 0 0-1.923.91 337.461 337.461 0 0 0-14.9 30.6 447.848 447.848 0 0 0-134.426 0 309.541 309.541 0 0 0-15.135-30.6 1.89 1.89 0 0 0-1.924-.91 483.689 483.689 0 0 0-119.688 37.107 1.712 1.712 0 0 0-.788.676C39.068 183.651 18.186 294.69 28.43 404.354a2.016 2.016 0 0 0 .765 1.375 487.666 487.666 0 0 0 146.825 74.189 1.9 1.9 0 0 0 2.063-.676A348.2 348.2 0 0 0 208.12 430.4a1.86 1.86 0 0 0-1.019-2.588 321.173 321.173 0 0 1-45.868-21.853 1.885 1.885 0 0 1-.185-3.126 251.047 251.047 0 0 0 9.109-7.137 1.819 1.819 0 0 1 1.9-.256c96.229 43.917 200.41 43.917 295.5 0a1.812 1.812 0 0 1 1.924.233 234.533 234.533 0 0 0 9.132 7.16 1.884 1.884 0 0 1-.162 3.126 301.407 301.407 0 0 1-45.89 21.83 1.875 1.875 0 0 0-1 2.611 391.055 391.055 0 0 0 30.014 48.815 1.864 1.864 0 0 0 2.063.7A486.048 486.048 0 0 0 610.7 405.729a1.882 1.882 0 0 0 .765-1.352c12.264-126.783-20.532-236.912-86.934-334.541zM222.491 337.58c-28.972 0-52.844-26.587-52.844-59.239s23.409-59.241 52.844-59.241c29.665 0 53.306 26.82 52.843 59.239 0 32.654-23.41 59.241-52.843 59.241zm195.38 0c-28.971 0-52.843-26.587-52.843-59.239s23.409-59.241 52.843-59.241c29.667 0 53.307 26.820 52.844 59.239 0 32.654-23.177 59.241-52.844 59.241z" />
                    </svg>
                  </div>
                  <div className="flex-1 text-left">
                    <p className="text-indigo-400 font-bold text-lg group-hover:text-indigo-300 transition-colors duration-300 drop-shadow-sm">
                      Discord
                    </p>
                    <p className="text-indigo-300/60 text-sm group-hover:text-indigo-200/80 transition-colors duration-300">
                      Join community
                    </p>
                  </div>
                  <div className="opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                    <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" className="w-5 h-5 text-indigo-400">
                      <path d="M9 5l7 7-7 7" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <style>{`
          .uiverse-btn {
            align-items: center;
            background-image: linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb);
            border: 0;
            border-radius: 8px;
            box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
            box-sizing: border-box;
            color: #ffffff;
            display: inline-flex;
            font-size: 18px;
            justify-content: center;
            line-height: 1em;
            max-width: 100%;
            min-width: 140px;
            padding: 3px;
            text-decoration: none;
            user-select: none;
            -webkit-user-select: none;
            touch-action: manipulation;
            white-space: nowrap;
            cursor: pointer;
            transition: all 0.3s;
            margin-top: 12px;
          }
          .uiverse-btn:active,
          .uiverse-btn:hover {
            outline: 0;
          }
          .uiverse-btn .text {
            background-color: rgb(5, 6, 45);
            padding: 16px 24px;
            border-radius: 8px;
            transition: 300ms;
            display: block;
            width: 100%;
            box-sizing: border-box;
            font-weight: bold;
            font-size: 1.1em;
          }
          .uiverse-btn:hover .text {
            background: none;
          }
          .uiverse-btn:active {
            transform: scale(0.9);
          }
          .gradient-text {
            background: linear-gradient(90deg, #40ffaa, #4079ff, #40ffaa, #4079ff, #40ffaa);
            background-size: 200% auto;
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
            -webkit-text-fill-color: transparent;
            animation: gradient-move 2.5s linear infinite;
          }
          @keyframes gradient-move {
            0% { background-position: 0% 50%; }
            100% { background-position: 100% 50%; }
          }
        `}</style>
        </motion.section>
        {/* 其他內容區塊 */}
        <div>
          {/* 特色區塊 */}
          <motion.section id="features" ref={featuresRef}
            style={{display:'flex', justifyContent:'center', alignItems:'flex-start', flexWrap:'wrap', gap:'2vw', background:'none', border:'none', boxShadow:'none', padding:'32px 0'}}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            {[
              `多元交流與遊戲討論\n本伺服器致力於打造一個友善、開放的交流空間，歡迎成員在此分享日常生活、討論時事與娛樂內容。不管事瓦學弟還是go學長，都能在這快速組隊，增加遊戲體驗不管是管是瓦學弟還是go學長，都能在這快速組隊，增加遊戲體驗。`,
              `言論自由、開放包容\n主打言論自由與多元觀點的交流環境，歡迎所有用戶在尊重他人的前提下，分享各種主張、創意或想法。無論是熱門議題、冷門興趣，或是單純抒發心情，皆可在此自由表達。我們鼓勵理性討論，致力於建立一個無過度限制、開放包容的互動社群。`,
              `抽象的特色伺服器\n本伺服器以抽象、幽默的互動風格為特色，聚集了一群精神狀態抽象的特殊人類。無論是抽象式的對話、原創迷因，或突發奇想的投票與活動，皆能在此自然展開。整體氛圍和諧歡樂，是一個適合放鬆心情、尋找靈感與朋友的有趣社群。`
            ].map((text, i) => (
              <aside key={i} style={{
                background: 'rgba(24,24,27,0.12)',
                color: '#fff',
                padding: '1.2rem',
                borderRadius: '1rem',
                width: '300px',
                maxWidth: '100%',
                fontFamily: 'monospace',
                boxShadow: '0 0 24px 0 #00eaff55, 0 0 48px 0 #a993ff33',
                border: '2px solid #23232b',
                margin: '0 0.5rem',
                whiteSpace: 'pre-line',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                fontSize: '0.98rem',
                lineHeight: 1.7,
                backdropFilter: 'blur(16px) saturate(1.5)',
                WebkitBackdropFilter: 'blur(16px) saturate(1.5)',
                borderCollapse: 'separate',
                overflow: 'hidden',
              }}>
                <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                  <div style={{display:'flex', gap:'0.5rem'}}>
                    <div style={{width:'12px', height:'12px', borderRadius:'50%', background:'#ef4444', boxShadow:'0 0 8px 2px #ef4444, 0 0 16px 4px #ef4444aa'}}></div>
                    <div style={{width:'12px', height:'12px', borderRadius:'50%', background:'#f59e42', boxShadow:'0 0 8px 2px #f59e42, 0 0 16px 4px #f59e42aa'}}></div>
                    <div style={{width:'12px', height:'12px', borderRadius:'50%', background:'#22c55e', boxShadow:'0 0 8px 2px #22c55e, 0 0 16px 4px #22c55eaa'}}></div>
                  </div>
                  <p style={{fontSize:'1.1rem', color:'#aaa'}}>bash</p>
                </div>
                <div style={{marginTop:'1.2rem'}}>
                  <DecryptedText text={text.split('\n')[0]} style={{color:'#22d3ee', fontWeight:700, fontSize:'1.18em', display:'block', marginBottom:'0.5em'}} isActive={isFeaturesInView} />
                  <DecryptedText text={text.split('\n').slice(1).join('\n')} style={{color:'#fff', fontSize:'0.98em', whiteSpace:'pre-line'}} isActive={isFeaturesInView} />
                </div>
              </aside>
            ))}
      </motion.section>

          {/* 管理員介紹區塊 */}
          <motion.section id="admins"
            style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', minHeight:'80vh', background:'none', border:'none', boxShadow:'none', marginTop:'-2vh'}}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <h2 style={{
              textAlign: 'center',
              fontSize: '2.2rem',
              fontWeight: 800,
              letterSpacing: '0.1em',
              color: 'rgba(0,255,255,0.85)',
              textShadow: '0 0 12px #00fff7, 0 0 32px #00fff7',
              marginBottom: 36,
              marginTop: 0
            }}>
              伺服器管理員
            </h2>
            <div style={{display:'flex', justifyContent:'center', alignItems:'center', gap:'2vw', width:'100%'}}>
              {[
                {
                  avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlilOkOMjeMPKnlakf3iZDbW0vApLEe0fLle8ILOOruTGZQT1XKuU1X9GU9rlP5KcRKig&usqp=CAU',
                  nickname: '網路農夫',
                  username: 'malware.cmd',
                  badges: [
                    { type: 'img', src: 'https://cdn.discordapp.com/clan-badges/1315031970006175856/950aeaf6df9f76c04fc86d1f7ab8f8aa.png?size=16', label: 'bdgz' },
                    { type: 'img', src: 'https://discordresources.com/img/quest.png', label: '' },
                    { type: 'img', src: 'https://cdn3.emoji.gg/emojis/99057-orbs-discord.png', label: '' },
                  ],
                  quote: '"Religion is something that ordinary people see as true, smart people see as false, and rulers see as useful."',
                  status: 'online',
                  statusText: '線上',
                },
                {
                  avatar: 'https://cdn.discordapp.com/attachments/1389847123721322498/1396478716879573134/a9a49b4323cd8044875dd49a65a15a6f.jfif?ex=687e3ba7&is=687cea27&hm=35d129c2cbe91dc61c37d3e004b68fc20d6697b16524c4a2ac45353ecd2d6f4c&',
                  nickname: '一中第一深情',
                  username: 'ray4746',
                  badges: [
                    { type: 'img', src: 'https://discordresources.com/img/username.png', label: '', title: '原先名稱為R a y#4746' }
                  ],
                  quote: 'there is nothing',
                  status: 'online',
                  statusText: '線上',
                },
                {
                  avatar: 'https://cdn.discordapp.com/attachments/1389847123721322498/1396478717164781649/7a4aeef24caa4b81fb39185c9c17858b.jfif?ex=687e3ba7&is=687cea27&hm=a468a4938f4d44374bbfd00805a6588d1293a15c918fbf3c78ca673634ce831d&',
                  nickname: '男娘成癮',
                  username: 'felix990302.1',
                  badges: [
                    { type: 'img', src: 'https://cdn.discordapp.com/attachments/1389847123721322498/1396478715847770222/ec60c5e6d1f14d3bbff586e2e0b9e54e.png?ex=687e3ba7&is=687cea27&hm=11bcd4fe531a0e35e4c29e7c92f76ac6cfcbb09bb24ebd3e2580611b068a8008&', label: 'OwO' }
                  ],
                  quote: 'there is nothing',
                  status: 'idle',
                  statusText: '閒置',
                },
                {
                  avatar: 'https://media.discordapp.net/attachments/1389847123721322498/1396478716103884830/511c0c7c68143329af170fc207be12d9.png?ex=687e3ba7&is=687cea27&hm=77637b0de00d5a5618db8e322b8686770da743831492a9cd58c8d6290d24fab2&format=webp&quality=lossless&width=351&height=351',
                  nickname: '聾啞人',
                  username: 'the_chillguy',
                  badges: [
                    { type: 'img', src: 'https://cdn.discordapp.com/clan-badges/1139920868571627651/04cee49fbcaa69a71206ccb637470e72.png?size=16', label: 'AURA' }
                  ],
                  quote: 'there is nothing',
                  status: 'dnd',
                  statusText: '請勿打擾',
                },
                {
                  avatar: 'https://cdn.discordapp.com/attachments/1389847123721322498/1396478716317667379/9eb8efe57e64023af3ca48a014d58d82.gif?ex=687e3ba7&is=687cea27&hm=56f45f699c17345b384d5e39b97530c4f2cf70b10180d905d3a2554426728c15&',
                  nickname: '❤',
                  username: 'lov520',
                  badges: [],
                  quote: 'there is nothing',
                  status: 'online',
                  statusText: '線上',
                }
              ].map((admin, i) => (
                <div key={i} style={{
                  background: 'rgba(24,24,27,0.16)',
                  borderRadius: '1.3rem',
                  boxShadow: '0 0 32px 0 #00eaff55, 0 0 64px 0 #a993ff33',
                  border: '2px solid #23232b',
                  padding: '0',
                  width: '340px',
                  maxWidth: '100%',
                  color: '#fff',
                  margin: '0 0.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'stretch',
                  minHeight: '420px',
                  fontFamily: 'monospace',
                  backdropFilter: 'blur(8px) saturate(1.2)',
                  WebkitBackdropFilter: 'blur(8px) saturate(1.2)',
                  overflow: 'hidden',
                }}>
                  {/* 橫幅區域 */}
                  <div style={{
                    width:'100%',
                    height:'92px',
                    background: (
                      admin.nickname === '網路農夫' ? '#111' :
                      admin.nickname === '一中第一深情' ? '#fff' :
                      admin.nickname === '男娘成癮' ? '#f4ced8' :
                      admin.nickname === '聾啞人' ? '#dcdcdc' :
                      admin.nickname === '❤' ? '#ebe1d8' : '#5865F2'
                    ),
                    position:'relative',
                    borderTopLeftRadius:'1.3rem',
                    borderTopRightRadius:'1.3rem',
                    display:'flex',
                    alignItems:'flex-end',
                    padding:'0 0 0 1.2rem'
                  }}>
                    {/* 頭像 */}
                    <div style={{position:'relative', zIndex:2, transform:'translateY(50%)'}}>
                      <img src={admin.avatar} alt={admin.nickname} style={{width:'72px', height:'72px', borderRadius:'50%', border:'4px solid #23232b', background:'#222'}} />
                      <span style={{position:'absolute', right:'6px', bottom:'6px', width:'18px', height:'18px', borderRadius:'50%', background: admin.status==='online'?'#22c55e':admin.status==='idle'?'#fbbf24':'#ef4444', boxShadow:'0 0 8px 2px '+(admin.status==='online'?'#22c55e':admin.status==='idle'?'#fbbf24':'#ef4444')}}></span>
                    </div>
                  </div>
                  {/* 內容區域 */}
                  <div style={{padding:'2.7rem 1.2rem 1.2rem 1.2rem', flex:1, display:'flex', flexDirection:'column', alignItems:'flex-start', justifyContent:'flex-start'}}>
                    {/* 名字 */}
                    <div style={{marginBottom:'0.18rem', textAlign:'left'}}>
                      <span style={{fontWeight:700, fontSize:'1.35rem', color:'#fff', lineHeight:'1'}}>{admin.nickname}</span>
                    </div>
                    <div style={{marginBottom:'0.2rem', display:'flex', alignItems:'center', gap:'0.06em', flexWrap:'nowrap', minWidth:0}}>
                      <span style={{fontSize:'0.92rem', color:'#aaa', lineHeight:'1.2', whiteSpace:'nowrap', minWidth:0}}>{admin.username}</span>
                      {admin.badges.map((b,idx)=>(
                        b.type === 'img'
                          ? <span key={idx} style={{
                              display:'inline-flex', alignItems:'center', gap: b.label ? '0.07em' : '0', fontSize: b.label === 'bdgz' ? '0.82rem' : '0.92rem',
                              background:'#23232b', color:'#fff', borderRadius:'7px', padding: b.label ? '1.5px 5px 1.5px 3px' : '1.5px 4px',
                              boxShadow:'0 0 6px 1px #23232b88', border:'1.2px solid #36393f', marginRight:'0.03em',
                              whiteSpace:'nowrap', minWidth:0
                            }}>
                              <img src={b.src} alt={b.label} style={{width: b.label === 'bdgz' ? '12px' : '14px', height: b.label === 'bdgz' ? '12px' : '14px', verticalAlign:'middle', borderRadius:'3px', background:'#23232b', marginRight: b.label ? '0.07em' : '0'}} title={b.title || undefined} />
                              {b.label && <span style={{fontWeight:600, letterSpacing:'0.5px'}}>{b.label}</span>}
                            </span>
                          : <span key={idx} style={{fontSize:'0.92rem'}}>{b.value || b}</span>
                      ))}
                    </div>
                    <div style={{margin:'0.5em 0 0 0', color:'#b5e0ff', fontSize:'1.05em', fontFamily:'monospace', textAlign:'left', whiteSpace:'pre-line', width:'100%'}}>
                      {admin.quote}
                    </div>
                  </div>
                </div>
              ))}
            </div>
      </motion.section>

          {/* 加入方式 */}
          <motion.section id="join"
            style={{height:'100vh', display:'flex', justifyContent:'center', alignItems:'center', padding:'32px'}}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
              {/* 伺服器資訊卡片 */}
              <div style={{
                width: '100%',
                maxWidth: 800,
                minHeight: 400,
                background: 'none',
                borderRadius: '1.3rem',
                boxShadow: '0 0 32px 0 #00eaff55, 0 0 64px 0 #a993ff33',
                border: '2px solid #23232b',
                margin: '0 auto 32px auto',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                position: 'relative',
                overflow: 'hidden',
                padding: 0,
                justifyContent: 'flex-start',
                backgroundClip: 'padding-box',
                backdropFilter: 'blur(8px) saturate(1.2)',
                WebkitBackdropFilter: 'blur(8px) saturate(1.2)',
              }}>
                {/* 橫幅 */}
                <div style={{width:'100%', height:'33.33%', minHeight:120, background:'linear-gradient(90deg, #2e9fff 0%, #23232b 100%)', borderTopLeftRadius:'1.3rem', borderTopRightRadius:'1.3rem', display:'flex', alignItems:'flex-end', justifyContent:'flex-start', position:'relative', paddingLeft:36}}>
                  {/* 頭像 */}
                  <img src="https://memeprod.ap-south-1.linodeobjects.com/user-maker/ec3bdc346811c9c129a139031d4f19e5.gif" alt="avatar" style={{width:96, height:96, borderRadius:'50%', border:'4px solid #fff', background:'#222', position:'absolute', bottom:-48, left:36}} />
                </div>
                {/* 內容區塊 */}
                <div style={{width:'100%', display:'flex', flexDirection:'column', alignItems:'flex-start', justifyContent:'center', minWidth:0, marginTop:60, padding:'0 0 64px 36px', boxSizing:'border-box'}}>
                  <div style={{fontWeight:800, fontSize:'1.45rem', color:'#fff', marginBottom:10, display:'flex', alignItems:'center', gap:8, whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis', justifyContent:'flex-start'}}>
                    國高中非學習討論區
                    <img src="https://discordresources.com/img/server/Community.svg" alt="Community" style={{width:'28px',height:'28px',verticalAlign:'middle',marginLeft:'8px'}} />
                  </div>
                  <div style={{color:'#b5e0ff', fontSize:'0.98rem', marginBottom:8, display:'flex', gap:18, justifyContent:'flex-start', alignItems:'center'}}>
                    <span style={{display:'inline-flex', alignItems:'center', gap:6}}>
                      <span style={{display:'inline-block', width:18, height:18, borderRadius:'50%', background:'#22c55e', boxShadow:'0 0 8px 2px #22c55e, 0 0 16px 4px #22c55e88', marginRight:2}}></span>
                      16位線上
                    </span>
                    <span style={{display:'inline-flex', alignItems:'center', gap:6}}>
                      <span style={{display:'inline-block', width:18, height:18, borderRadius:'50%', background:'#888', boxShadow:'0 0 8px 2px #8884, 0 0 16px 4px #8882', marginRight:2}}></span>
                      109位成員
                    </span>
                  </div>
                  <div style={{color:'#aaa', fontSize:'0.92rem', marginBottom:8, textAlign:'left'}}>建立日期:2025年6月</div>
                  <div style={{color:'#fff', fontSize:'0.98rem', marginBottom:12, textAlign:'left'}}>人均前三志願的抽象伺服器</div>
                  <div style={{display:'flex', gap:14, marginBottom:16, justifyContent:'flex-start'}}>
                    <img src="https://cdn2.downdetector.com/static/uploads/c/300/9aa23/val_ugakZho.png" alt="icon1" style={{width:32, height:32, objectFit:'cover', borderRadius:8}} />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Roblox_Logo_2022.jpg" alt="icon2" style={{width:32, height:32, objectFit:'cover', borderRadius:8}} />
                    <img src="https://preview.redd.it/1s0j5e4fhws01.png?auto=webp&s=af1a17c3f935e22d1cbf6aecc983d8626c15b590" alt="icon3" style={{width:32, height:32, objectFit:'cover', borderRadius:8}} />
                    <img src="https://img.poki-cdn.com/cdn-cgi/image/q=78,scq=50,width=1200,height=1200,fit=cover,f=png/86923487e864bb618cb824e83cc68925/minecraft.png" alt="icon4" style={{width:32, height:32, objectFit:'cover', borderRadius:8}} />
                  </div>
                  <div style={{display:'flex', gap:10, marginTop:8, justifyContent:'flex-start'}}>
                    <span style={{display:'inline-flex', alignItems:'center', gap:'0.07em', fontSize:'0.92rem', background:'#23232b', color:'#fff', borderRadius:'7px', padding:'2.5px 10px 2.5px 7px', boxShadow:'0 0 6px 1px #23232b88', border:'1.2px solid #36393f', fontWeight:600, letterSpacing:'0.5px'}}>
                      🤪弱智
                    </span>
                    <span style={{display:'inline-flex', alignItems:'center', gap:'0.07em', fontSize:'0.92rem', background:'#23232b', color:'#fff', borderRadius:'7px', padding:'2.5px 10px 2.5px 7px', boxShadow:'0 0 6px 1px #23232b88', border:'1.2px solid #36393f', fontWeight:600, letterSpacing:'0.5px'}}>
                      💀抽象
                    </span>
                    <span style={{display:'inline-flex', alignItems:'center', gap:'0.07em', fontSize:'0.92rem', background:'#23232b', color:'#fff', borderRadius:'7px', padding:'2.5px 10px 2.5px 7px', boxShadow:'0 0 6px 1px #23232b88', border:'1.2px solid #36393f', fontWeight:600, letterSpacing:'0.5px'}}>
                      ⚡電
                    </span>
                  </div>
                  {/* 加入伺服器按鈕 */}
                  <a href="https://discord.gg/m8fEPsAd" target="_blank" rel="noopener noreferrer" className="glow-join-btn" style={{marginTop:18, width:'90%', background:'#2ecc71', color:'#fff', border:'none', borderRadius:10, padding:'16px 0', fontWeight:700, fontSize:'1.08rem', cursor:'pointer', textAlign:'center', display:'block', marginLeft:0, marginRight:'auto', boxShadow:'0 0 16px 4px #2ecc7199, 0 2px 8px #2ecc7144', transition:'all 0.22s cubic-bezier(.4,2,.6,1)'}}>加入伺服器</a>
                  <style>{`
                    .glow-join-btn:hover {
                      background: #27ae60;
                      box-shadow: 0 0 32px 8px #2ecc71cc, 0 2px 16px #2ecc7199;
                      transform: scale(1.045);
                      filter: brightness(1.08);
                    }
                  `}</style>
                </div>
              </div>
      </motion.section>

          {/* 聯絡資訊 */}
          <motion.section id="contact"
            style={{height:'100vh', display:'flex', justifyContent:'center', alignItems:'center', padding:'32px', background:'none', border:'none', boxShadow:'none'}}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <Card />
      </motion.section>
        </div>
      </div>
    </div>
  );
}

export default App; 