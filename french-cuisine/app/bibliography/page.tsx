"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, Globe, Film, ExternalLink, User, Calendar, Building2, AlignLeft } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { books, websites, media } from "../data/bibliography";
import { useLanguage } from "../context/LanguageContext";

export default function BibliographyPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-[#faf8f3]">
      <Navbar />

      {/* Header */}
      <section className="bg-[#2d3748] text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> {t("nav.home")}
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-white/10 rounded-xl">
              <BookOpen className="w-8 h-8" />
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold">
              {t("bibliography.title")}
            </h1>
          </div>
          <p className="text-xl text-white/80 max-w-2xl">
            {t("bibliography.subtitle")}
          </p>
        </div>
      </section>

      {/* Books Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-[#722f37]/10 rounded-xl">
            <BookOpen className="w-6 h-6 text-[#722f37]" />
          </div>
          <h2 className="font-serif text-3xl font-semibold text-[#2d3748]">
            {t("bibliography.books")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {books.map((book, index) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-sm border border-[#e5e0d5] hover:shadow-md transition-all duration-300"
            >
              <h3 className="font-serif text-xl font-semibold text-[#2d3748] mb-3">
                {book.title}
              </h3>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-[#4a5568]">
                  <User className="w-4 h-4 text-[#722f37]" />
                  <span className="font-medium">{t("bibliography.author")}:</span> {book.author}
                </div>
                <div className="flex items-center gap-2 text-sm text-[#4a5568]">
                  <Calendar className="w-4 h-4 text-[#722f37]" />
                  <span className="font-medium">{t("bibliography.year")}:</span> {book.year}
                </div>
                <div className="flex items-center gap-2 text-sm text-[#4a5568]">
                  <Building2 className="w-4 h-4 text-[#722f37]" />
                  <span className="font-medium">{t("bibliography.publisher")}:</span> {book.publisher}
                </div>
              </div>
              <div className="flex items-start gap-2 text-sm text-[#4a5568]">
                <AlignLeft className="w-4 h-4 text-[#c9a962] mt-0.5 flex-shrink-0" />
                <p>{book.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Websites Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-[#722f37]/10 rounded-xl">
              <Globe className="w-6 h-6 text-[#722f37]" />
            </div>
            <h2 className="font-serif text-3xl font-semibold text-[#2d3748]">
              {t("bibliography.websites")}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {websites.map((site, index) => (
              <motion.div
                key={site.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#faf8f3] rounded-xl p-6 shadow-sm border border-[#e5e0d5] hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-serif text-xl font-semibold text-[#2d3748]">
                    {site.title}
                  </h3>
                  <a
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-[#722f37] hover:text-[#8b3a44] font-medium transition-colors"
                  >
                    {t("bibliography.visit")} <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <p className="text-sm text-[#4a5568] mb-3">{site.url}</p>
                <p className="text-sm text-[#4a5568]">{site.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-[#722f37]/10 rounded-xl">
            <Film className="w-6 h-6 text-[#722f37]" />
          </div>
          <h2 className="font-serif text-3xl font-semibold text-[#2d3748]">
            {t("bibliography.media")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {media.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-sm border border-[#e5e0d5] hover:shadow-md transition-all duration-300"
            >
              <h3 className="font-serif text-xl font-semibold text-[#2d3748] mb-2">
                {item.title}
              </h3>
              <div className="flex items-center gap-2 text-sm text-[#722f37] font-medium mb-3">
                <Film className="w-4 h-4" />
                <span>{item.type}</span>
                <span className="text-[#a0aec0]">•</span>
                <span>{item.year}</span>
              </div>
              <p className="text-sm text-[#4a5568]">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#722f37]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <BookOpen className="w-12 h-12 text-white/80 mx-auto mb-4" />
            <p className="font-serif text-2xl md:text-3xl text-white/95 italic leading-relaxed mb-4">
              &ldquo;The fine arts are five in number: painting, sculpture, poetry, music, and architecture, the principal branch of the latter being pastry.&rdquo;
            </p>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#c9a962] to-transparent mx-auto mb-4" />
            <p className="text-xl text-[#c9a962] font-medium tracking-wide">— Marie-Antoine Carême</p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
