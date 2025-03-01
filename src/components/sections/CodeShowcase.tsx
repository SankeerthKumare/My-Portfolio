"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiCode } from "react-icons/fi";
import TextScramble from "@/components/effects/TextScramble";
import { viewport } from "@/lib/motion";

type T = "kw" | "ty" | "fn" | "str" | "ann" | "num" | "com" | "txt" | "pn";

const COLOR: Record<T, string> = {
  kw: "text-purple-400",
  ty: "text-amber-300",
  fn: "text-sky-300",
  str: "text-emerald-300",
  ann: "text-pink-400",
  num: "text-orange-300",
  com: "text-slate-600 italic",
  txt: "text-slate-200",
  pn: "text-slate-500",
};

const KEYWORDS = new Set([
  "public", "private", "protected", "void", "new", "return", "if", "else", "for", "while",
  "throws", "static", "final", "this", "class", "interface", "extends", "implements",
  "import", "package", "true", "false", "null", "try", "catch", "finally", "throw", "var",
]);

function tokenize(code: string): Array<Array<[T, string]>> {
  return code.split("\n").map(line => {
    const tokens: Array<[T, string]> = [];
    let i = 0;
    while (i < line.length) {
      const ch = line[i];
      if (ch === " " || ch === "\t") {
        let j = i;
        while (j < line.length && (line[j] === " " || line[j] === "\t")) j++;
        tokens.push(["txt", line.slice(i, j)]);
        i = j; continue;
      }
      if (line.slice(i, i + 2) === "//") {
        tokens.push(["com", line.slice(i)]);
        break;
      }
      if (ch === '"') {
        let j = i + 1;
        while (j < line.length && line[j] !== '"') j++;
        tokens.push(["str", line.slice(i, Math.min(j + 1, line.length))]);
        i = Math.min(j + 1, line.length); continue;
      }
      if (ch === "@") {
        let j = i + 1;
        while (j < line.length && /[A-Za-z]/.test(line[j])) j++;
        tokens.push(["ann", line.slice(i, j)]);
        i = j; continue;
      }
      if (/[A-Za-z_]/.test(ch)) {
        let j = i;
        while (j < line.length && /[A-Za-z0-9_]/.test(line[j])) j++;
        const word = line.slice(i, j);
        const next = line[j];
        if (KEYWORDS.has(word)) tokens.push(["kw", word]);
        else if (next === "(") tokens.push(["fn", word]);
        else if (/^[A-Z]/.test(word)) tokens.push(["ty", word]);
        else tokens.push(["txt", word]);
        i = j; continue;
      }
      if (/[0-9]/.test(ch)) {
        let j = i;
        while (j < line.length && /[0-9._]/.test(line[j])) j++;
        tokens.push(["num", line.slice(i, j)]);
        i = j; continue;
      }
      tokens.push(["pn", ch]);
      i++;
    }
    return tokens;
  });
}

const snippets = [
  {
    filename: "OrderService.java",
    title: "Kafka Outbox Pattern",
    description: "Atomic DB write + event publish — eliminates dual-write inconsistency",
    code: `@Transactional
public void placeOrder(Order order) {
    orderRepo.save(order);
    outboxRepo.save(new OutboxEvent(
        order.getId(),
        "ORDER_PLACED",
        toJson(order)
    ));
    // picked up by Kafka publisher loop
}`,
  },
  {
    filename: "PaymentController.java",
    title: "Idempotent REST Endpoint",
    description: "Request-key dedup prevents duplicate payments on retries",
    code: `@PostMapping("/payments")
public ResponseEntity<Payment> create(
    @RequestHeader("Idempotency-Key") String key,
    @RequestBody PaymentRequest req) {
    return store.find(key)
        .map(ResponseEntity::ok)
        .orElseGet(() -> {
            Payment p = service.process(req);
            store.save(key, p);
            return ResponseEntity.ok(p);
        });
}`,
  },
  {
    filename: "DataSourceConfig.java",
    title: "Tuned HikariCP Pool",
    description: "Connection sizing to survive end-of-month peak load",
    code: `@Bean
public DataSource dataSource() {
    HikariConfig cfg = new HikariConfig();
    cfg.setJdbcUrl(jdbcUrl);
    cfg.setMaximumPoolSize(20);
    cfg.setConnectionTimeout(3000);
    cfg.setLeakDetectionThreshold(30000);
    cfg.setValidationTimeout(2000);
    return new HikariDataSource(cfg);
}`,
  },
];

export default function CodeShowcase() {
  const [active, setActive] = useState(0);
  const current = snippets[active];
  const lines = tokenize(current.code);

  useEffect(() => {
    const t = setInterval(() => setActive(a => (a + 1) % snippets.length), 7000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="code" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-primary/4 rounded-full blur-[60px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="text-5xl sm:text-7xl font-black tracking-tight">
            <TextScramble text="In" className="text-white" />{" "}
            <TextScramble text="Code" className="gradient-text-cool" />
          </h2>
          <p className="mt-4 text-slate-500 text-sm sm:text-base font-light max-w-xl mx-auto">
            Patterns I reach for when designing resilient backends.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewport}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-6"
        >
          {snippets.map((s, i) => (
            <button
              key={s.title}
              onClick={() => setActive(i)}
              className={`px-4 py-2 text-xs sm:text-sm font-mono rounded-full border transition-all duration-300 ${
                active === i
                  ? "border-primary/50 bg-primary/10 text-primary-light shadow-glow"
                  : "border-dark-border text-slate-500 hover:text-slate-300 hover:border-primary/20"
              }`}
            >
              {s.title}
            </button>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative rounded-2xl glass overflow-hidden glow-border"
        >
          {/* Title bar */}
          <div className="flex items-center gap-3 px-4 py-3 border-b border-dark-border/50 bg-dark-200/60">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-500/60" />
              <span className="w-3 h-3 rounded-full bg-amber-500/60" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/60" />
            </div>
            <div className="flex-1 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={current.filename}
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  transition={{ duration: 0.25 }}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-dark/60 border border-dark-border/60 text-xs font-mono text-slate-400"
                >
                  <FiCode size={11} className="text-primary/60" />
                  {current.filename}
                </motion.span>
              </AnimatePresence>
            </div>
            <span className="text-[10px] font-mono text-slate-600 uppercase tracking-wider">Java</span>
          </div>

          <div className="px-6 py-3 border-b border-dark-border/30 bg-dark-200/20">
            <AnimatePresence mode="wait">
              <motion.p
                key={current.title}
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={{ duration: 0.3 }}
                className="text-xs sm:text-sm text-slate-400 font-light"
              >
                <span className="text-primary-light font-mono mr-2">›</span>
                {current.description}
              </motion.p>
            </AnimatePresence>
          </div>

          <div className="relative overflow-x-auto">
            <AnimatePresence mode="wait">
              <motion.pre
                key={current.filename}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="px-4 sm:px-6 py-6 text-xs sm:text-sm font-mono leading-relaxed"
              >
                {lines.map((line, li) => (
                  <div key={li} className="flex">
                    <span className="select-none w-8 text-right pr-4 text-slate-700">{li + 1}</span>
                    <span className="whitespace-pre">
                      {line.length === 0
                        ? " "
                        : line.map(([type, value], ti) => (
                            <span key={ti} className={COLOR[type]}>{value}</span>
                          ))}
                    </span>
                  </div>
                ))}
              </motion.pre>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-between px-4 py-2 border-t border-dark-border/50 bg-dark-200/40 text-[10px] font-mono text-slate-600">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              prod-ready
            </span>
            <span>UTF-8 · LF · Java 17</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
