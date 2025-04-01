import Link from "next/link";
import { Button } from "@/components/ui/button";
import translate from "@/lib/locales/function";

export default function NotFound() {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center gap-4 px-4 text-center">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold">
          {translate("page_not_found")}
        </h1>
        <p className="text-muted-foreground">{translate("not_found_desc")}</p>
      </div>

      <Button variant="outline" asChild>
        <Link href="/">{translate("return_home")}</Link>
      </Button>
    </div>
  );
}
