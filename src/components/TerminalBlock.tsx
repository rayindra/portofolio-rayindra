const lines = [
  { text: "const developer = {", delay: 0 },
  { text: '  nama: "Rayindra Satrya Fitrian",', delay: 0.3 },
  { text: '  role: "IT Enthusiast",', delay: 0.6 },
  { text: '  skills: ["Frontend", "Backend", "Hardware", "Network"],', delay: 0.9 },
  { text: '  passion: "Building reliable tech solutions",', delay: 1.2 },
  { text: "};", delay: 1.5 },
  { text: "", delay: 1.8 },
  { text: "developer.buildSomethingAmazing();", delay: 2.1 },
];

const TerminalBlock = () => {
  return (
    <div className="glass-card overflow-hidden font-mono text-sm">
      {/* Terminal header */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border/40">
        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "hsl(0, 70%, 55%)" }} />
        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "hsl(45, 80%, 55%)" }} />
        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "hsl(130, 50%, 50%)" }} />
        <span className="ml-2 text-muted-foreground text-xs">~/portfolio</span>
      </div>
      {/* Terminal body */}
      <div className="p-5 space-y-1">
        {lines.map((line, i) => (
          <div
            key={i}
            className="opacity-0 animate-fade-up"
            style={{ animationDelay: `${line.delay + 0.5}s` }}
          >
            {line.text ? (
              <span className="text-foreground/80">
                {colorize(line.text)}
              </span>
            ) : (
              <br />
            )}
          </div>
        ))}
        <div className="flex items-center mt-2 opacity-0 animate-fade-up" style={{ animationDelay: "3s" }}>
          <span className="text-primary mr-2">❯</span>
          <span className="w-2 h-4 bg-primary animate-blink inline-block" />
        </div>
      </div>
    </div>
  );
};

function colorize(text: string) {
  return text.split(/(".*?")/g).map((part, i) => {
    if (part.startsWith('"') && part.endsWith('"')) {
      return <span key={i} style={{ color: "hsl(130, 50%, 60%)" }}>{part}</span>;
    }
    if (["const", "return"].includes(part.trim())) {
      return <span key={i} className="text-primary">{part}</span>;
    }
    return <span key={i}>{part}</span>;
  });
}

export default TerminalBlock;
