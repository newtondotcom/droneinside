import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
  } from "@/components/ui/select";
  import { Languages } from "lucide-react";
  import { useTransition } from 'react';
  import { Locale } from '@/i18n/config';
  import { setUserLocale } from "@/i18n/locale";
  import { cn } from "@/lib/utils";
  
  export default function LocalePicker() {
    const [isPending, startTransition] = useTransition();
  
    const onChange = (value: string) => {
      const locale = value as Locale;
      startTransition(() => {
        setUserLocale(locale);
      });
    };
  
    return (
      <Select defaultValue="fr" onValueChange={onChange}>
        <SelectTrigger className={cn("w-[60px] border-none backdrop-blur-md bg-white/10 dark:bg-dark/10", isPending && 'pointer-events-none opacity-60')}>
        <Languages />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="fr">Français</SelectItem>
          <SelectItem value="en">English</SelectItem>
        </SelectContent>
      </Select>
    );
  }
  