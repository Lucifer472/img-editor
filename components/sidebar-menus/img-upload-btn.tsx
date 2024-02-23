import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface ImgUploadBtnProps {
  id: string;
  label: string;
  isPending: boolean;
  setFile: (v: File) => void;
}

export const ImgUploadBtn = ({
  isPending,
  setFile,
  id,
  label,
}: ImgUploadBtnProps) => {
  return (
    <Label
      htmlFor={id}
      className="w-full py-4 bg-sky-100 cursor-pointer flex items-center justify-center text-muted-foreground rounded-md border-2 border-dashed border-sky-300"
    >
      <Input
        type="file"
        accept="image/*"
        className="hidden"
        id={id}
        disabled={isPending}
        onChange={(e: any) => setFile(e.target.files?.[0])}
      />
      {label}
    </Label>
  );
};
