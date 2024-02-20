import { Input } from "@/components/ui/input";

interface ColorCardProps {
  label: string;
  color: string;
  setColor: (s: string) => void;
}

export const ColorCard = ({ color, label, setColor }: ColorCardProps) => {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex flex-col items-start">
        <span className="text-sm font-medium">{label}</span>
        <span className="text-sm text-muted-foreground">{color}</span>
      </div>
      <Input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        className="rounded-full p-0 border-4 h-10 w-10 bg-white cursor-pointer disabled:pointer-events-none ring-offset-background [&::-webkit-color-swatch]:rounded-full
        [&::-moz-color-swatch]:rounded-full [&::-webkit-color-swatch]:border-0
        [&::-moz-color-swatch]:border-0 [&::-webkit-color-swatch-wrapper]:p-0"
      />
    </div>
  );
};
