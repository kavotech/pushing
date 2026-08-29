import { Building, Droplets, MapPinned, Sparkles } from "lucide-react";
import { Container } from "@/components/shared/Container";

const items = [
  { icon: Droplets, label: "Professional Service" },
  { icon: Building, label: "Domestic & Commercial" },
  { icon: MapPinned, label: "London & South East" },
  { icon: Sparkles, label: "Quality Results" },
];

export function TrustStrip() {
  return (
    <section className="relative border-y border-white/8 bg-ink-900">
      <Container>
        <div className="grid grid-cols-2 divide-y divide-white/8 sm:grid-cols-4 sm:divide-y-0 sm:divide-x">
          {items.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-3 px-2 py-6 sm:justify-center sm:px-6"
            >
              <Icon className="size-5 shrink-0 text-lime-300" strokeWidth={1.75} />
              <span className="text-sm font-medium text-ink-100 sm:text-base">{label}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
