import { CheckCircledIcon, CrossCircledIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import Link from "next/link";

export const PlanCard = () => {
  return (
    <div className="max-w-[300px] w-full h-full flex flex-col gap-y-4 items-start justify-start px-4 py-6 bg-white border-border border shadow-md rounded-xl">
      <h2 className="text-xl font-bold">Starter</h2>
      <p className="text-muted-foreground">
        <span className="text-2xl font-medium">₹10</span>/ month
      </p>
      <ul className="flex items-start justify-start flex-col gap-y-6">
        <li className="flex items-center justify-start gap-x-2">
          <CheckCircledIcon className="text-white bg-green-500 rounded-full w-6 h-6" />{" "}
          Low Resolution Image Export
        </li>
        <li className="flex items-center justify-start gap-x-2">
          <CheckCircledIcon className="text-white bg-green-500 rounded-full w-6 h-6" />{" "}
          Community Support
        </li>
        <li className="flex items-center justify-start gap-x-2">
          <CheckCircledIcon className="text-white bg-green-500 rounded-full w-6 h-6" />{" "}
          Unlimited Image Create
        </li>
        <li className="flex items-center justify-start gap-x-2">
          <CrossCircledIcon className="text-white bg-red-500 rounded-full w-6 h-6" />{" "}
          Remove Watermark
        </li>
        <li className="flex items-center justify-start gap-x-2">
          <CrossCircledIcon className="text-white bg-red-500 rounded-full w-6 h-6" />{" "}
          Post on Facebook
        </li>
      </ul>
      <Button variant={"default"} size={"lg"} className="w-full" asChild>
        <Link href={"/pricing"}>Create Account</Link>
      </Button>
    </div>
  );
};
