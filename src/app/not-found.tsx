"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations("Common");

  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center gap-4 px-4 text-center">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold">{t("page_not_found")}</h1>
        <p className="text-muted-foreground">{t("not_found_desc")}</p>
      </div>

      <Button variant="outline" asChild>
        <Link href="/">{t("return_home")}</Link>
      </Button>
    </div>
  );
}
