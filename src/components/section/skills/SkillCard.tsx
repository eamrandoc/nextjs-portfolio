import { Card } from "@/components/ui/card";

type Skill = {
  id: number;
  name: string;
  side: string;
  icon: React.ElementType;
  color: string;
};

export default function SkillCard({ skill }: { skill: Skill }) {
  const Icon = skill.icon;

  return (
   
      <Card className="relative p-5 flex items-center gap-4 border border-border/50 bg-background/60 backdrop-blur-xl overflow-hidden group transition-all duration-300 hover:scale-[1.08]">

        {/* 🌈 GLOW */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-20 blur-2xl transition duration-500"
          style={{ backgroundColor: skill.color }}
        />

        {/* ICON */}
        <div className="p-4 rounded-2xl bg-muted/50 border border-border/50 relative z-10 transition-transform duration-500 group-hover:scale-110 group-hover:bg-muted/80 shadow-xs">
          <Icon size={32} style={{ color: skill.color }} />
        </div>

        {/* TEXT */}
        <div className="space-y-1 relative z-10">
          <p className="text-sm font-semibold">{skill.name}</p>
          <p className="text-xs text-muted-foreground">{skill.side}</p>
        </div>

        {/* ✨ SHINE */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-linear-to-r from-transparent via-white to-transparent -translate-x-full group-hover:translate-x-full transition duration-700" />

      </Card>
  );
}