"use client";
import {
  ChatBubbleIcon,
  CodeIcon,
  EnvelopeClosedIcon,
  ExitIcon,
  HamburgerMenuIcon,
  PersonIcon,
} from "@radix-ui/react-icons";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export const DropDownMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="py-2 h-12 rounded-full" variant={"outline"}>
          <HamburgerMenuIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-8 w-60">
        <DropdownMenuLabel>Menu</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex items-center justify-start gap-x-2">
          <PersonIcon className="h-6 w-5" />
          <span>User Plan</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center justify-start gap-x-2">
          <CodeIcon className="h-6 w-5" />
          <span>Facebook Access Token</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center justify-start gap-x-2">
          <ChatBubbleIcon className="h-6 w-5" />
          <span>Join Community</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center justify-start gap-x-2">
          <EnvelopeClosedIcon className="h-6 w-5" />
          <span>Contact Us</span>
        </DropdownMenuItem>
        <Separator />
        <DropdownMenuItem className="flex items-center justify-start gap-x-2">
          <ExitIcon className="h-6 w-5 text-red-500" />
          <span className="text-red-500">Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
