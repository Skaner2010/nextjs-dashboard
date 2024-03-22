import '@/app/ui/global.css';
import { inter,actor, sedgwick_ave_display } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
        <body className={`${sedgwick_ave_display.className} antialiased`}>{children}</body>
    </html>
  );
}
