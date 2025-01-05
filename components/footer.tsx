export function Footer() {
  return (
    <footer className="py-6 border-t">
      <div className="container px-4 md:px-20">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Samatar Barkadleh. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with Next.js and shadcn/ui
          </p>
        </div>
      </div>
    </footer>
  );
}
