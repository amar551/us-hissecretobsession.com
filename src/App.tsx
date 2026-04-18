/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, ShoppingCart, MousePointer2, ChevronDown, List, Target, Flame, ShieldCheck, Star, Info, User, Zap } from "lucide-react";

const AFFILIATE_LINK = "https://tinyurl.com/bdvwhmf9";

export default function App() {
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "His Secret Obsession",
    "image": [
      "https://his-secretobsession.com/assets/images/his-secret-obsession.webp",
      "https://his-secretobsession.com/assets/images/his-secret-obsession-book-1163x842.webp"
    ],
    "description": "His Secret Obsession by James Bauer is a relationship guide that teaches women how to trigger a man's Hero Instinct to build a lasting relationship or get an ex back fast.",
    "brand": {
      "@type": "Brand",
      "name": "James Bauer"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://us-hissecretobsession-com.vercel.app/",
      "priceCurrency": "USD",
      "price": "49.00",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-brand-primary/10 bg-white font-sans text-warm-ink">
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
      {/* Top Header matched to screenshot with added polish */}
      <header className="w-full bg-brand-primary/95 backdrop-blur-md text-white px-4 md:px-12 py-5 flex justify-between items-center sticky top-0 z-50 shadow-[0_4px_20px_rgba(0,0,0,0.1)] border-b border-white/10">
        <div className="flex items-center">
          <motion.a 
            whileHover={{ scale: 1.02 }}
            href="/" 
            className="text-xl md:text-4xl font-bold tracking-tight text-white transition-all drop-shadow-sm"
          >
            His Secret Obsession
          </motion.a>
        </div>
        
        <div className="flex items-center gap-4 md:gap-10">
          <nav className="hidden lg:flex items-center gap-10 text-[13px] font-bold uppercase tracking-[0.15em]">
            {[
              { label: "Benefits", icon: List, href: "#benefits" },
              { label: "Guarantee", icon: Target, href: "#guarantee" },
              { label: "Bonuses", icon: Flame, href: "#bonuses" }
            ].map((item) => (
              <motion.a 
                key={item.label}
                whileHover={{ y: -2 }}
                href={item.href} 
                className="flex items-center gap-2.5 hover:text-white/80 transition-colors relative group"
              >
                <item.icon className="w-4 h-4 text-white/70 group-hover:text-white transition-colors" />
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full opacity-50" />
              </motion.a>
            ))}
          </nav>
          
          <motion.div
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Button asChild variant="outline" className="h-11 px-6 md:px-9 border-2 border-white text-white hover:bg-white hover:text-brand-primary font-bold uppercase tracking-[0.1em] text-[12px] rounded-full transition-all bg-transparent shadow-lg hover:shadow-white/20">
              <a href={AFFILIATE_LINK} className="flex items-center gap-2.5">
                Get Instant Access <ShoppingCart className="w-5 h-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </header>

      {/* Hero Title Section matched to screenshot */}
      <section className="w-full bg-brand-primary text-white py-10 md:py-16 text-center border-t border-white/20">
        <h1 className="text-4xl md:text-7xl font-bold tracking-tight">His Secret Obsession</h1>
      </section>

      <main className="flex-1">
        {/* Main Content Section matched to screenshot */}
        <section className="py-12 md:py-24">
          <div className="container mx-auto px-6 md:px-12 max-w-7xl grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-16 items-start">
            {/* Left Column: Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-[12px] border-white">
                <img 
                  src="https://his-secretobsession.com/assets/images/his-secret-obsession.webp" 
                  alt="His Secret Obsession Review - Best Get Ex Back Program by James Bauer" 
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                  onError={(e) => { e.currentTarget.src = "https://picsum.photos/seed/love-couple/800/1000"; }}
                />
              </div>
            </motion.div>

            {/* Right Column: Text Content with SEO Keywords */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-10 pt-4"
            >
              <div className="space-y-8">
                <p className="text-xl md:text-[26px] leading-[1.6] text-[#333]">
                  <a href={AFFILIATE_LINK} className="font-bold text-[#2b4c7e] hover:underline">His Secret Obsession review</a>: Relationship coach James Bauer reveals the hidden emotional trigger that makes men fall deeply in love and stay devoted. Based on over a decade of experience, this program helps women understand <strong>how to trigger hero instinct</strong> and what truly drives men in relationships.
                </p>
                <p className="text-xl md:text-[26px] leading-[1.6] text-[#333]">
                  If you're wondering <strong>how to make him obsessed with you</strong> or <strong>how to make him chase you again</strong>, this guide provides the exact psychological signals needed. It's the <strong>best get ex back program</strong> for those looking to <strong>get your boyfriend back</strong> or <strong>get ex back fast</strong> after a difficult split.
                </p>
              </div>

              <div className="pt-6">
                <Button asChild size="lg" className="h-20 px-16 text-2xl font-black uppercase tracking-[2px] rounded-full shadow-[0_15px_30px_rgba(155,44,60,0.3)] hover:scale-105 active:scale-95 transition-all bg-brand-primary text-white w-full md:w-auto">
                  <a href={AFFILIATE_LINK}>Unlock The Secret Now</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SEO Article Section 1: Get Ex Back */}
        <section className="py-20 bg-gray-50 border-y border-line">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 tracking-tight">How to Get Your Ex Back Fast: The Ultimate Guide</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                <h3 className="text-2xl font-bold text-brand-primary">How to get your ex back after no contact</h3>
                <p>Many women ask <strong>how to get your ex back after no contact</strong>. The key is not just waiting, but understanding the <strong>signs your ex will come back</strong>. Using the <strong>get ex back system review</strong> methods, you can learn <strong>how to get ex back after breakup fast</strong> without appearing desperate.</p>
                <p>If you're wondering <strong>how to get ex back without begging</strong>, the secret lies in <strong>how to make your ex regret losing you</strong>. By focusing on your own growth and triggering his <strong>hero instinct</strong>, you can <strong>make him obsessed over you</strong> once again.</p>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img src="https://his-secretobsession.com/assets/images/his-secret-obsession-book-1163x842.webp" alt="How to get your ex back fast after no contact - His Secret Obsession Guide" className="w-full h-auto" referrerPolicy="no-referrer" onError={(e) => { e.currentTarget.src = "https://picsum.photos/seed/exback/800/600"; }} />
              </div>
            </div>
          </div>
        </section>

        {/* SEO Article Section 2: Female Target */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 tracking-tight">Make Him Obsessed With You: Psychology Secrets</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="rounded-2xl overflow-hidden shadow-lg order-2 md:order-1">
                <img src="https://his-secretobsession.com/assets/images/how-hero-instinct-works-1006x786.webp" alt="How to trigger hero instinct and make him obsessed with you - Psychology Secrets" className="w-full h-auto" referrerPolicy="no-referrer" onError={(e) => { e.currentTarget.src = "https://picsum.photos/seed/obsessed/800/600"; }} />
              </div>
              <div className="space-y-6 text-lg leading-relaxed text-muted-foreground order-1 md:order-2">
                <h3 className="text-2xl font-bold text-brand-primary">How to make him chase you again</h3>
                <p>Understanding <strong>why men pull away suddenly</strong> is the first step. To <strong>make him obsessed with you</strong>, you must learn <strong>how to make him text you first</strong> and <strong>how to make him miss you psychology</strong>. This isn't about games; it's about <strong>how to trigger hero instinct</strong>.</p>
                <p>Whether you want to know <strong>how to make him fall in love again fast</strong> or <strong>how to get ex back after being blocked</strong>, these psychological triggers are universal. Even if it's been a while, learning <strong>how to get your ex back after 2 weeks</strong> or longer is possible with the right approach.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Article Section 3: Reviews */}
        <section className="py-20 bg-gray-50 border-y border-line">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">Does His Secret Obsession Work?</h2>
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>In this <strong>his secret obsession review</strong>, we look at whether this program actually delivers. Many users compare it to the <strong>ex factor guide review</strong>, but James Bauer's focus on the <strong>hero instinct</strong> makes it unique. So, <strong>does his secret obsession work</strong>? Thousands of success stories suggest it does.</p>
              <p>If you're looking for the <strong>best get ex back program</strong>, this system covers everything from <strong>how to make your ex miss you</strong> to <strong>how to get your boyfriend back</strong> permanently. It's more than just a guide; it's a complete relationship transformation.</p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-gray-50 border-y border-line">
          <div className="container mx-auto px-6 max-w-5xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Read What His Secret Obsession Users Have to Say</h2>
            <div className="space-y-12">
              {[
                {
                  name: "Sophie L., Florida, USA",
                  img: "https://his-secretobsession.com/assets/images/his-secrect-obsession-review-images-1.webp",
                  text: "I was skeptical at first, but His Secret Obsession completely changed my perspective on relationships. The Hero Instinct concept was a game-changer—I finally understand what my partner needs emotionally. After applying the techniques, our connection grew stronger, and he’s more attentive than ever. Highly recommend it to anyone struggling to build a deeper bond!"
                },
                {
                  name: "Emily S., California, USA",
                  img: "https://his-secretobsession.com/assets/images/his-secrect-obsession-review-images-2.webp",
                  text: "This program is worth every penny! The phrases and techniques are simple yet so effective. I used the ‘Private Island Signal,’ and my boyfriend started opening up in ways he never had before. It’s like I unlocked a part of him I didn’t know existed. Thank you, James Bauer, for this incredible guide!"
                },
                {
                  name: "Jessica M., Ohio, USA",
                  img: "https://his-secretobsession.com/assets/images/his-secrect-obsession-review-images-3.webp",
                  text: "After my divorce, I was hesitant to start dating again. His Secret Obsession gave me the confidence to understand what men truly want in a relationship. The ‘Ex-Back Signal’ even helped me reconnect with my ex-husband, and we’re now on better terms than ever. This program is a lifesaver!"
                }
              ].map((t, i) => (
                <div key={i} className="flex flex-col md:flex-row items-center gap-8 bg-white p-8 rounded-xl shadow-sm border border-line">
                  <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 border-4 border-gray-100">
                    <img src={t.img} alt={`${t.name} - His Secret Obsession Success Story`} className="w-full h-full object-cover" referrerPolicy="no-referrer" onError={(e) => { e.currentTarget.src = `https://picsum.photos/seed/user${i}/200`; }} />
                  </div>
                  <div className="text-left space-y-3">
                    <h5 className="text-xl font-bold">{t.name}</h5>
                    <p className="text-muted-foreground italic leading-relaxed">"{t.text}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-6 md:px-12 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Is His Secret Obsession?</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img src="https://his-secretobsession.com/assets/images/his-secret-obsession-james-bauer.webp" alt="James Bauer - Author of His Secret Obsession and Relationship Expert" className="w-full h-auto" referrerPolicy="no-referrer" onError={(e) => { e.currentTarget.src = "https://picsum.photos/seed/james/600/400"; }} />
              </div>
              <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                <p>His Secret Obsession is a revolutionary relationship guide authored by renowned psychologist and best-selling writer James Bauer. Designed specifically for women, the program offers deep insights into what men truly crave in a relationship—guiding women toward building powerful, lasting emotional bonds.</p>
                <p>At the core of the program is the concept of the “Hero Instinct”—a fundamental psychological drive in men to feel needed, appreciated, and important in the role of a protector and provider. When this instinct is genuinely activated, it strengthens a man's emotional attachment and deepens his investment in the relationship.</p>
                <p>The program teaches women exactly how to spark this instinct using specific words, phrases, and actions suited to their unique relationship dynamics. With 17 comprehensive modules, the program is available in various formats—including video, audio, and eBooks.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Author Section */}
        <section className="py-20 bg-gray-50 border-y border-line">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Who Is James Bauer?</h2>
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>James Bauer is a respected psychologist, best-selling author, and seasoned relationship coach with more than 12 years of hands-on experience. Specializing in male psychology and emotional connection, he’s helped thousands of individuals—from single women to long-time couples—build stronger, more meaningful relationships.</p>
              <p>The inspiration for His Secret Obsession came from a pivotal moment in his coaching career. While working with a client named Rachel, whose relationship was on the verge of ending, James offered her a simple but powerful text designed to awaken her boyfriend’s “Hero Instinct.” The impact was immediate and transformative.</p>
            </div>
          </div>
        </section>

        {/* Special Offer */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 md:px-12 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Limited Time Special Offer - Act Now!</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="rounded-xl overflow-hidden shadow-lg order-2 lg:order-1">
                <img src="https://his-secretobsession.com/assets/images/his-secret-obsession-official-website.webp" alt="His Secret Obsession Official Website - Special Discount Offer" className="w-full h-auto" referrerPolicy="no-referrer" onError={(e) => { e.currentTarget.src = "https://picsum.photos/seed/offer/600/400"; }} />
              </div>
              <div className="space-y-6 text-lg leading-relaxed text-muted-foreground order-1 lg:order-2">
                <p>For a limited time, His Secret Obsession is available at a special discounted price! This exclusive offer gives you access to the full program, including the eBook, audiobook, and bonus materials, at a reduced rate.</p>
                <p className="text-2xl font-bold text-brand-primary">Today Only for: $49</p>
                <Button asChild size="lg" className="bg-brand-primary hover:bg-brand-primary/90 text-white font-bold h-14 px-10 text-xl rounded-md w-full md:w-auto">
                  <a href={AFFILIATE_LINK}>Get it Now</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* What's Inside Section */}
        <section id="secrets" className="py-20 bg-gray-50 border-y border-line">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Do You Get When You Buy His Secret Obsession?</h2>
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground mb-12">
              <p>When you purchase His Secret Obsession, you receive a complete relationship-enhancement program available in both eBook and audiobook formats. The core of the program is a 220-page guide, accompanied by a practical workbook and valuable bonus materials.</p>
              <div className="grid md:grid-cols-2 gap-8 pt-6">
                <div className="bg-white p-6 rounded-xl border border-line shadow-sm">
                  <h4 className="font-bold text-xl mb-3">Part 1: Understanding</h4>
                  <p>11 in-depth modules breaking down the concept of the Hero Instinct and the psychology behind it.</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-line shadow-sm">
                  <h4 className="font-bold text-xl mb-3">Part 2: Applying</h4>
                  <p>Actionable tools—specific phrases, subtle signals, and proven techniques—that activate the Hero Instinct.</p>
                </div>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl border-8 border-white">
              <img src="https://his-secretobsession.com/assets/images/his-secret-obsession-book-1163x842.webp" alt="What's Inside His Secret Obsession - Book Bundle and Bonuses" className="w-full h-auto" referrerPolicy="no-referrer" onError={(e) => { e.currentTarget.src = "https://picsum.photos/seed/bundle/1000/600"; }} />
            </div>
          </div>
        </section>

        {/* Hero Instinct Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">What Is the Hero Instinct?</h2>
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>Forget the image of men in capes rescuing damsels in distress—that’s not what the Hero Instinct is about.</p>
              <p><strong>The Hero Instinct</strong> is a powerful psychological concept that explains a man’s deep-seated desire to feel needed, appreciated, and purposeful in a relationship. At its core, it’s not about ego—it’s about identity.</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                {[
                  "A man wants his life to feel meaningful.",
                  "He thrives when he has a clear sense of purpose.",
                  "He wants to feel recognized for his efforts.",
                  "He is driven to care for those he loves.",
                  "He needs to feel respected."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-brand-primary flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-12 rounded-xl overflow-hidden shadow-lg border border-line">
              <img src="https://his-secretobsession.com/assets/images/how-hero-instinct-works-1006x786.webp" alt="How the Hero Instinct Works - Psychological Triggers for Men" className="w-full h-auto" referrerPolicy="no-referrer" onError={(e) => { e.currentTarget.src = "https://picsum.photos/seed/works/800/600"; }} />
            </div>
          </div>
        </section>

        {/* Secrets Grid */}
        <section className="py-20 bg-gray-50 border-y border-line">
          <div className="container mx-auto px-6 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Here Are Just a Few of the Secrets You'll Discover Inside:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "The Glimpse Phrase", desc: "This simple but powerful phrase gives him a sneak peek into the real you—sparking his curiosity and imagination." },
                { title: "The Fascination Signal", desc: "Tired of men pulling away? This subtle phrase triggers a deep emotional attraction, making you feel irresistible." },
                { title: "Silent Action Signals", desc: "No words needed. These non-verbal cues activate his Hero Instinct from across the room." },
                { title: "The 'I Owe You' Signal", desc: "By swapping just three everyday words, you’ll tap into a man’s subconscious and build deep trust." },
                { title: "The Damsel in Distress Signal", desc: "Not about playing weak, this technique taps into a man's natural desire to protect." },
                { title: "The Private Island Signal", desc: "This little-known signal makes a man see you as “The One.” It’s the key to lasting love." },
                { title: "The X-Ray Question", desc: "Confused about where you stand? This innocent-sounding question unlocks his true thoughts and feelings." },
                { title: "The Ex-Back Signal", desc: "Going through a breakup? These 12 simple words flip the emotional script and trigger his longing." },
                { title: "The Secret Currency", desc: "Learn the #1 reason men leave—even when they love someone. Takes less than 10 seconds." }
              ].map((s, i) => (
                <div key={i} className="bg-white p-8 rounded-xl border border-line shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mb-6">
                    <Zap className="w-8 h-8 text-brand-primary" />
                  </div>
                  <h4 className="text-xl font-bold mb-4">{s.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Guarantee Section */}
        <section id="guarantee" className="py-20 bg-white">
          <div className="container mx-auto px-6 md:px-12 max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">60-Day Money-Back Guarantee</h2>
              <h4 className="text-xl font-bold text-brand-primary">100% Satisfaction Guarantee</h4>
              <p className="text-lg leading-relaxed text-muted-foreground">
                His Secret Obsession comes with a 60-day money-back guarantee, allowing you to try the program risk-free. If you’re not satisfied or don’t see the desired results, you can request a full refund within 60 days of purchase.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Simply contact customer support through the official website for a hassle-free refund process. This guarantee ensures you can explore the program with confidence.
              </p>
              <div className="pt-4">
                <Button asChild size="lg" className="bg-brand-primary hover:bg-brand-primary/90 text-white font-bold h-14 px-10 text-xl rounded-md">
                  <a href={AFFILIATE_LINK}>Try it Risk Free Now!</a>
                </Button>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img src="https://his-secretobsession.com/assets/images/his-secret-obsession-guarantee.webp" alt="His Secret Obsession 60-Day Money Back Guarantee - 100% Risk Free" className="w-full h-auto" referrerPolicy="no-referrer" onError={(e) => { e.currentTarget.src = "https://picsum.photos/seed/guarantee/600/400"; }} />
            </div>
          </div>
        </section>

        {/* Benefits List Section */}
        <section id="benefits" className="py-20 bg-gray-50 border-y border-line">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Benefits of Using His Secret Obsession</h2>
            <div className="space-y-8">
              {[
                { title: "Deep Understanding of Male Psychology", desc: "Gain valuable insights into how men think, feel, and behave in relationships. James Bauer explains the biological and psychological foundations behind male impulses." },
                { title: "Actionable, Real-Life Strategies", desc: "Unlike many other programs that focus only on theory, His Secret Obsession offers practical advice for real-world relationship situations." },
                { title: "Enhanced Communication Skills", desc: "Learn how to communicate in a way that resonates with your man’s emotional language." },
                { title: "Stronger Emotional Connection", desc: "By learning how to meet your partner’s emotional needs and activate his Hero Instinct, you’ll be able to create a lasting emotional bond." },
                { title: "Greater Relationship Satisfaction", desc: "Improved understanding, better communication, and stronger bonds lead to lasting satisfaction for both partners." }
              ].map((b, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-10 h-10 bg-brand-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">
                    {i + 1}
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold">{b.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 bg-white">
          <div className="container mx-auto px-6 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {[
                { q: "What’s included in the program?", a: "The program includes a 220-page eBook, an audiobook version, and bonus materials like text message templates and practical examples." },
                { q: "Is His Secret Obsession suitable for everyone?", a: "Yes, the program is beneficial for women in all stages of relationships—whether single, dating, or in a long-term partnership." },
                { q: "Can this program help me win back my ex?", a: "Yes, His Secret Obsession includes specific techniques, such as the 'Ex-Back Signal,' designed to rebuild attraction and reignite emotional connection." },
                { q: "How is the program delivered?", a: "Once purchased, the program is available for immediate download as an eBook and audiobook." },
                { q: "Is there a money-back guarantee?", a: "Yes, His Secret Obsession comes with a 60-day money-back guarantee. If you’re not satisfied, you can request a full refund." },
                { q: "How long does it take to see results?", a: "Many users report noticeable improvements in their relationships within weeks of implementing the strategies." }
              ].map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border border-line rounded-lg px-6 bg-gray-50/50">
                  <AccordionTrigger className="text-lg font-bold py-6 hover:no-underline text-left">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-lg pb-6 leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-12 bg-brand-primary text-white text-center">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Don't Wait Any Longer! Join Your Discounted Program Now!</h2>
            <div className="mb-8 rounded-xl overflow-hidden shadow-2xl border-8 border-white inline-block max-w-md">
              <img src="https://his-secretobsession.com/assets/images/his-secret-obsession-free.webp" alt="Get Instant Access to His Secret Obsession - Special Discounted Price" className="w-full h-auto" referrerPolicy="no-referrer" onError={(e) => { e.currentTarget.src = "https://picsum.photos/seed/final/600/400"; }} />
            </div>
            <div className="space-y-3 mb-8">
              <p className="text-xl opacity-80 line-through">Regular Price: $199</p>
              <p className="text-4xl font-black">Today Just For Only: $49</p>
              <p className="text-lg opacity-90 italic">60-Day Money Back Guarantee | Save $150 | 76% OFF Today Only.</p>
            </div>
            <Button asChild size="lg" className="bg-white text-brand-primary hover:bg-gray-100 font-black h-16 px-12 text-xl rounded-md shadow-2xl uppercase tracking-widest">
              <a href={AFFILIATE_LINK} className="flex items-center gap-3">
                <MousePointer2 className="w-7 h-7" /> Get Instant Access Now
              </a>
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-brand-secondary text-white py-10 px-6 md:px-12">
        <div className="container mx-auto max-w-6xl space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-b border-white/10 pb-6">
            <div className="text-xl font-bold">His Secret Obsession™</div>
            <div className="flex flex-wrap gap-6 font-medium text-xs md:text-sm">
              <a href="https://his-secretobsession.com/privacy.html" className="hover:text-brand-primary transition-colors">Privacy Policy</a>
              <a href="https://his-secretobsession.com/terms.html" className="hover:text-brand-primary transition-colors">Terms</a>
              <a href="https://his-secretobsession.com/disclaimer.html" className="hover:text-brand-primary transition-colors">Disclaimer</a>
            </div>
          </div>
          
          <div className="text-[10px] md:text-xs text-white/60 leading-relaxed space-y-3 text-center md:text-left">
            <p>© Copyright {new Date().getFullYear()} His Secret Obsession. All Rights Reserved.</p>
            <p>We guard your privacy very seriously, please review our privacy policy. Any use of this website constitutes acceptance of our Terms & Conditions and Privacy Policy. You must be 18 or older to use this website. Results can vary, this information is not a substitute for personalized help from a licensed professional.</p>
            <p>ClickBank is the retailer of products on this site. CLICKBANK® is a registered trademark of Click Sales Inc., a Delaware corporation located at 1444 S. Entertainment Ave., Suite 410 Boise, ID 83709, USA and used by permission. ClickBank's role as retailer does not constitute an endorsement, approval or review of these products or any claim, statement or opinion used in promotion of these products.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

